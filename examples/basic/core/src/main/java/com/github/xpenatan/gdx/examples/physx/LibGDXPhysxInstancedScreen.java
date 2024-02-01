package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Input;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.GL30;
import com.badlogic.gdx.graphics.Mesh;
import com.badlogic.gdx.graphics.PerspectiveCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.VertexAttribute;
import com.badlogic.gdx.graphics.VertexAttributes;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.g3d.Environment;
import com.badlogic.gdx.graphics.g3d.ModelBatch;
import com.badlogic.gdx.graphics.g3d.Renderable;
import com.badlogic.gdx.graphics.g3d.Shader;
import com.badlogic.gdx.graphics.g3d.attributes.ColorAttribute;
import com.badlogic.gdx.graphics.g3d.shaders.BaseShader;
import com.badlogic.gdx.graphics.g3d.utils.FirstPersonCameraController;
import com.badlogic.gdx.graphics.g3d.utils.RenderContext;
import com.badlogic.gdx.graphics.glutils.ShaderProgram;
import com.badlogic.gdx.graphics.profiling.GLProfiler;
import com.badlogic.gdx.math.Frustum;
import com.badlogic.gdx.math.Matrix4;
import com.badlogic.gdx.math.Quaternion;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.BufferUtils;
import com.badlogic.gdx.utils.GdxRuntimeException;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.TimeUtils;
import java.nio.Buffer;
import java.nio.FloatBuffer;
import physx.PxFilterData;
import physx.PxIDENTITYEnum;
import physx.PxMaterial;
import physx.PxPhysics;
import physx.PxRigidDynamic;
import physx.PxRigidStatic;
import physx.PxScene;
import physx.PxSceneDesc;
import physx.PxShape;
import physx.PxShapeFlagEnum;
import physx.PxShapeFlags;
import physx.PxSimulationFilterShader;
import physx.PxTopLevelFunctions;
import physx.common.PxTolerancesScale;
import physx.extensions.PxDefaultAllocator;
import physx.extensions.PxDefaultCpuDispatcher;
import physx.extensions.PxDefaultErrorCallback;
import physx.foundation.PxFoundation;
import physx.foundation.PxQuat;
import physx.foundation.PxTransform;
import physx.foundation.PxVec3;
import physx.geometry.PxBoxGeometry;
import physx.task.PxCpuDispatcher;

public class LibGDXPhysxInstancedScreen implements Screen {

    private Texture texture;

    private GLProfiler profiler;
    private PerspectiveCamera camera;
    private Frustum camFrustum;
    private FirstPersonCameraController controller;
    private Environment environment;
    private Mesh mesh;
    private ModelBatch batch;
    private SpriteBatch batch2D;
    private BitmapFont font;
    private Renderable renderable;
    private FloatBuffer offsets;
    private Quaternion q;
    private Matrix4 mat4;
    private Vector3 vec3Temp;
    private float[] floatTemp;
    private float logicTimer, size;
    private long physicsTime, startTime, updateTime, renderTime;
    private int logicIndex, targetIndex, instanceUpdated;
    private boolean showStats = true;

    // some constants
    private static float CULLING_FACTOR;                            // distance from camera
    private static final float WALLMASS = 1;	                    // wall box mass
    private static final float WBOXSIZE = 1;		                // size of wall boxes
    private static final int   WALLWIDTH = 20;		                // width of wall <<< increase for more boxes
    private static final int   WALLHEIGHT = WALLWIDTH;		        // height of wall
    private static final float FORCEFACTOR = WALLHEIGHT * WALLWIDTH;  // force factor of explosion
    private static int INSTANCE_COUNT = WALLWIDTH * WALLHEIGHT;


    // PhysX version stuff
    int version;
    int versionMajor;
    int versionMinor;
    int versionMicro;

    // PhysX varibales

    // create PhysX foundation object
    private PxDefaultAllocator allocator;
    private PxDefaultErrorCallback errorCb;
    private PxFoundation foundation;

    // create PhysX main physics object
    private PxTolerancesScale tolerances;
    private PxSceneDesc sceneDesc;
    private PxPhysics physics;
    private PxScene physxScene;

    // create the CPU dispatcher, can be shared among multiple scenes
    private int numThreads = 4;
    private PxDefaultCpuDispatcher cpuDispatcher;

    // create a default material
    private PxMaterial physxMaterial;
    // create default simulation shape flags
    private PxShapeFlags shapeFlags;

    // Ground
    private PxBoxGeometry groundGeometry;
    private PxShape groundShape;
    private PxRigidStatic ground;

    // Wall objects
    private Array<PxRigidDynamic> wallRigidObjects = new Array<>();
    private PxShape wallShape;
    private PxBoxGeometry wallGeometry;

    // Temp variables
    private PxTransform tmpPose;
    private PxFilterData tmpFilterData;
    private PxVec3 tmpVec;

    public boolean step = false;
    public boolean autoStep = true;

    @Override
    public void show() {
        init();
        initPhysics();
        setupInstancedMesh();
    }

    @Override
    public void render(float delta) {
        ScreenUtils.clear(Color.WHITE,true);

        if(Gdx.input.isKeyJustPressed(Input.Keys.SPACE)) {
            step = true;
        }
        controller.update();
        logicTimer += Gdx.graphics.getDeltaTime();

        if(step || autoStep) {
            step = false;
            doLogic();
            simLoop();
        }
        draw();
    }

    // libGDX screen logic
    private void doLogic() {
        switch (logicIndex){
            case 0:
                if (logicTimer > 1.5f){
                    logicIndex = 1;
                    logicTimer = 0;
                }
                break;
            case 1: // fire cannon after 4s
                if (logicTimer > 1.5f){
                    logicIndex = 2;
                    logicTimer = 0;
                    fireCannon();
                }
                break;
            case 2: // wait 8 sec and then switch to libGDX wall scene
                if (logicTimer > 8){
                    logicIndex = 3;
                    logicTimer = 0;
                    shutdownSimulation();
                    setupInstancedMesh();
                    camera.position.set(100,WALLHEIGHT/2f,100 - WALLWIDTH*1.75f);
                    camera.lookAt(100,WALLHEIGHT/2f,100);
                    camera.up.set(Vector3.Y);
                    camera.update();
                }
                break;
            case 3: // wait 2.5s and then fire cannon
                if (logicTimer > 2.5f){
                    logicIndex = 4;
                    logicTimer = 0;
                    fireCannon();
                }
                break;
            case 4: // after 3s start spinning
                if (logicTimer >= 12.5f) {
                    //MainClass.game.setScreen(new DynamicCharacterScreen());
                }
                break;
        }
    }

    // simulation loop
    private void simLoop ()  {
        instanceUpdated = 0;
        startTime = TimeUtils.nanoTime();
        physxScene.simulate(Gdx.graphics.getDeltaTime());
        physxScene.fetchResults(true);
        physicsTime = TimeUtils.timeSinceNanos(startTime);

        startTime = TimeUtils.nanoTime();
        for(int i = 0; i < wallRigidObjects.size; i++){
            //if (wallRigidObjects.get(i).getLinearVelocity().isZero()) continue;
//            instanceUpdated++;

            targetIndex = i * 16; // each instance uses 16 floats for matrix4

            // get position of instance (x, y, z)
            PxTransform transform = wallRigidObjects.get(i).getGlobalPose();
            PxVec3 p = transform.p();
            float x = p.x();
            float y = p.y();
            float z = p.z();
            vec3Temp.set(x, y, z);

            PxQuat q = transform.q();
            float qx = q.x();
            float qy = q.y();
            float qz = q.z();
            float qw = q.w();

            this.q.set(qx, qy, qz, qw);

            mat4.set(vec3Temp, this.q);

            // update float buffer and update the mesh instance data
            offsets.position(targetIndex);
            offsets.put(mat4.getValues());
            //renderable.meshPart.mesh.updateInstanceData(targetIndex, mat4.getValues());
        }
        renderable.meshPart.mesh.updateInstanceData(0, offsets);
        updateTime = TimeUtils.timeSinceNanos(startTime);
    }

    private void draw() {
        camera.update();

        startTime = TimeUtils.nanoTime();
        texture.bind();
        batch.begin(camera);
        batch.render(renderable);
        batch.end();
        renderTime = TimeUtils.timeSinceNanos(startTime);

        // 2D stuff for info text
        batch2D.begin();
        font.draw(batch2D,"FPS: " + Gdx.graphics.getFramesPerSecond(), 10, 20);
        font.draw(batch2D,"PhysX Version: "+ versionMajor+"."+versionMinor+"."+versionMicro, 10,40);
        font.draw(batch2D,"Boxes: " + WALLWIDTH +"x" + WALLHEIGHT +" = " + INSTANCE_COUNT, 10, 60);
        font.draw(batch2D,"Physics Time: " + TimeUtils.nanosToMillis(physicsTime) + "ms", 10, 80);
        font.draw(batch2D,"Matrix Update Time: " + TimeUtils.nanosToMillis(updateTime) + "ms", 10, 100);
        font.draw(batch2D,"Render Time: " + TimeUtils.nanosToMillis(renderTime) + "ms", 10, 120);
        batch2D.end();
    }

    private void setupSimulation() {
        // Wall boxes
        for (float y = WBOXSIZE/2f; y < WALLHEIGHT; y += WBOXSIZE) {
            for (float x = -WALLWIDTH/2f; x < WALLWIDTH/2f; x += WBOXSIZE) {
                createBox(new Vector3(100.5f + x, y, 100));
            }
        }
    }

    private void setupInstancedMesh() {
        size = WBOXSIZE/2f;

        // Create a 3D cube mesh
        mesh = new Mesh(true, 24, 36,
            new VertexAttribute(VertexAttributes.Usage.Position, 3, "a_position"),
            new VertexAttribute(VertexAttributes.Usage.TextureCoordinates, 2, "a_texCoords0")
        );

        // 24 vertices - one of the texture coordinates is flipped, but no big deal
        float[] vertices = new float[] {
            -size, size, -size, 0.0f, 1.0f,
            size, size, -size, 1.0f, 1.0f,
            size, -size, -size, 1.0f, 0.0f,
            -size, -size, -size, 0.0f, 0.0f,
            size, size, size, 1.0f, 1.0f,
            -size, size, size, 0.0f, 1.0f,
            -size, -size, size, 0.0f, 0.0f,
            size, -size, size, 1.0f, 0.0f,
            -size, size, size, 1.0f, 1.0f,
            -size, size, -size, 0.0f, 1.0f,
            -size, -size, -size, 0.0f, 0.0f,
            -size, -size, size, 1.0f, 0.0f,
            size, size, -size, 1.0f, 1.0f,
            size, size, size, 0.0f, 1.0f,
            size, -size, size, 0.0f, 0.0f,
            size, -size, -size, 1.0f, 0.0f,
            -size, size, size, 1.0f, 1.0f,
            size, size, size, 0.0f, 1.0f,
            size, size, -size, 0.0f, 0.0f,
            -size, size, -size, 1.0f, 0.0f,
            -size, -size, -size, 1.0f, 1.0f,
            size, -size, -size, 0.0f, 1.0f,
            size, -size, size, 0.0f, 0.0f,
            -size, -size, size, 1.0f, 0.0f
        };

        // 36 indices
        short[] indices = new short[]
            {0, 1, 2, 2, 3, 0, 4, 5, 6, 6, 7, 4, 8, 9, 10, 10, 11, 8, 12, 13,
                14, 14, 15, 12, 16, 17, 18, 18, 19, 16, 20, 21, 22, 22, 23, 20 };

        mesh.setVertices(vertices);
        mesh.setIndices(indices);

        // Thanks JamesTKhan for saving me hours: how to pass a Matrix4 to the shader (using 4 x Vec4 = 16 floats)
        mesh.enableInstancedRendering(true, INSTANCE_COUNT,
            new VertexAttribute(VertexAttributes.Usage.Generic, 4, "i_worldTrans", 0),
            new VertexAttribute(VertexAttributes.Usage.Generic, 4, "i_worldTrans", 1),
            new VertexAttribute(VertexAttributes.Usage.Generic, 4, "i_worldTrans", 2),
            new VertexAttribute(VertexAttributes.Usage.Generic, 4, "i_worldTrans", 3));

        // Create offset FloatBuffer that will hold matrix4 for each instance to pass to shader
        offsets = BufferUtils.newFloatBuffer(INSTANCE_COUNT * 16); // 16 floats for mat4

        setupSimulation();

        ((Buffer)offsets).position(0);
        mesh.setInstanceData(offsets);

        renderable = new Renderable();
        renderable.meshPart.set("Cube", mesh, 0, 36, GL20.GL_TRIANGLES); // 36 indices
        renderable.environment = environment;
        renderable.worldTransform.idt();
        renderable.shader = createShader(); // see method for more details
        renderable.shader.init();
    }

    /** See assets/shaders/instanced.vert + assets/shaders/instanced.frag files to see how:

     a_position
     a_texCoords0
     i_worldTrans

     vertex attributes are used to update each instance.

     u_projViewTrans uniform needs to be set with camera.combined
     so shader can calculate the updated position and rotation
     */
    private BaseShader createShader() {
        return new BaseShader() {

            @Override
            public void begin(Camera camera, RenderContext context) {
                program.bind();
                program.setUniformMatrix("u_projViewTrans", camera.combined);
                program.setUniformi("u_texture", 0);
                context.setDepthTest(GL30.GL_LEQUAL);
            }

            @Override
            public void init () {
                ShaderProgram.prependVertexCode = "#version 300 es\n";
                ShaderProgram.prependFragmentCode = "#version 300 es\n";
                program = new ShaderProgram(Gdx.files.internal("shaders/instanced.vert"),
                    Gdx.files.internal("shaders/instanced.frag"));
                if (!program.isCompiled()) {
                    throw new GdxRuntimeException("Shader compile error: " + program.getLog());
                }
                init(program, renderable);
            }

            @Override
            public int compareTo (Shader other) {
                return 0;
            }

            @Override
            public boolean canRender (Renderable instance) {
                return true;
            }
        };
    }


    private void createBox(Vector3 position){
        //Physx
        tmpVec.x(position.x); tmpVec.y(position.y); tmpVec.z(position.z);
        tmpPose.p(tmpVec);

        wallGeometry = new PxBoxGeometry(WBOXSIZE/2, WBOXSIZE/2, WBOXSIZE/2);   // PxBoxGeometry uses half-sizes
        wallShape = physics.createShape(wallGeometry, physxMaterial, true, shapeFlags);
        wallShape.setSimulationFilterData(tmpFilterData);
        PxRigidDynamic r = physics.createRigidDynamic(tmpPose);
        long cPointer = r.getCPointer();
        PxRigidDynamic rigidDynamic = new PxRigidDynamic((byte)1, '0');
        rigidDynamic.setPointer(cPointer);
        rigidDynamic.attachShape(wallShape);
        rigidDynamic.setMass(WALLMASS);
        wallRigidObjects.add(rigidDynamic);
        physxScene.addActor(rigidDynamic);
        rigidDynamic.putToSleep();

        // create matrix transform
        mat4.set(position, q);

        // put the 16 floats for mat4 in the float buffer
        offsets.put(mat4.getValues());
    }

    @Override
    public void resize(int width, int height) {
        // Resize your screen here. The parameters represent the new window size.
    }

    @Override
    public void pause() {
        // Invoked when your application is paused.
    }

    @Override
    public void resume() {
        // Invoked when your application is resumed after pause.
    }

    @Override
    public void hide() {
        // This method is called when another screen replaces this one.
    }

    @Override
    public void dispose() {
        shutdownSimulation();

        // cleanup stuff
        physxScene.removeActor(ground);
        ground.release();
        groundShape.release();
//        groundGeometry.destroy();

        physxScene.release();
        physxMaterial.release();
        physics.release();
        foundation.release();
//        errorCb.destroy();
//        allocator.destroy();
    }

     private void fireCannon() {
         int x = WALLWIDTH/2;

         tmpVec.x(-FORCEFACTOR); tmpVec.y(FORCEFACTOR*2); tmpVec.z(10f);
         wallRigidObjects.get(x).setLinearVelocity(tmpVec);

         tmpVec.x(FORCEFACTOR); tmpVec.y(FORCEFACTOR*2); tmpVec.z(10f);
         wallRigidObjects.get(x + 1).setLinearVelocity(tmpVec);

         tmpVec.x(-FORCEFACTOR); tmpVec.y(-FORCEFACTOR*2); tmpVec.z(10f);
         wallRigidObjects.get(x + WALLWIDTH).setLinearVelocity(tmpVec);

         tmpVec.x(FORCEFACTOR); tmpVec.y(FORCEFACTOR*2); tmpVec.z(10f);
         wallRigidObjects.get(x + 1 + WALLWIDTH).setLinearVelocity(tmpVec);
    }


    private void shutdownSimulation() {
        for(int i = 0; i < wallRigidObjects.size; i++) {
            physxScene.removeActor(wallRigidObjects.get(i));
            wallRigidObjects.get(i).release();
        }
        wallRigidObjects.clear();
    }

    private void initPhysics() {
        version = PxTopLevelFunctions.PHYSICS_VERSION();
        versionMajor = version >> 24;
        versionMinor = (version >> 16) & 0xff;
        versionMicro = (version >> 8) & 0xff;
        System.out.println("PhysX loaded, version: " + versionMajor + "." + versionMinor + "." + versionMicro);

        tmpVec = new PxVec3();
        tmpFilterData = new PxFilterData();
        tmpPose = new PxTransform();

        allocator = new PxDefaultAllocator();
        errorCb = new PxDefaultErrorCallback();
        foundation = PxTopLevelFunctions.CreateFoundation(version, allocator, errorCb);

        // create PhysX main physics object
        tolerances = new PxTolerancesScale();
        physics = PxTopLevelFunctions.CreatePhysics(version, foundation, tolerances);

        cpuDispatcher = PxTopLevelFunctions.DefaultCpuDispatcherCreate(0);

        sceneDesc = new PxSceneDesc(tolerances);
        tmpVec.x(0);
        tmpVec.y(-9.8f);
        tmpVec.z(0);
        sceneDesc.gravity(tmpVec);
        sceneDesc.cpuDispatcher(cpuDispatcher);
        PxSimulationFilterShader pxSimulationFilterShader = PxTopLevelFunctions.DefaultFilterShader();
        sceneDesc.filterShader(pxSimulationFilterShader);
        physxScene = physics.createScene(sceneDesc);

        // create a default material
        physxMaterial = physics.createMaterial(0.5f, 0.5f, 0.5f);
        // create default simulation shape flags
        shapeFlags = new PxShapeFlags((byte) (PxShapeFlagEnum.eSIMULATION_SHAPE));

        tmpPose = new PxTransform(PxIDENTITYEnum.PxIdentity);

        tmpVec.x(100f); tmpVec.y(-1f); tmpVec.z(100f);
        tmpPose.p(tmpVec);

        // create a large static box for ground
        groundGeometry = new PxBoxGeometry(200f, 1f, 200f);   // PxBoxGeometry uses half-sizes
        groundShape = physics.createShape(groundGeometry, physxMaterial, true, shapeFlags);
        ground = physics.createRigidStatic(tmpPose);
        tmpFilterData.word0(1);
        tmpFilterData.word1(1);
        tmpFilterData.word2(0);
        tmpFilterData.word3(0);
        groundShape.setSimulationFilterData(tmpFilterData);
        ground.attachShape(groundShape);
        physxScene.addActor(ground);
    }


    private void init() {
        texture = new Texture(Gdx.files.internal("graphics/zebra.png")); // our mascot!

        // Loading complete, load a scene.
        camera = new PerspectiveCamera(45, Gdx.graphics.getWidth(), Gdx.graphics.getHeight());
        camera.near = 0.1f;
        camera.far = 300;
        camera.position.set(100 - WALLWIDTH,WALLHEIGHT/2f,100 - WALLWIDTH);
        camera.lookAt(100,WALLHEIGHT/2f,100);
        camera.up.set(Vector3.Y);
        camera.update();

        // reusable variables
        mat4 = new Matrix4();
        q = new Quaternion();
        vec3Temp = new Vector3();
        floatTemp = new float[16];
        logicTimer = 0;
        logicIndex = 0;

        environment = new Environment();
        environment.set(new ColorAttribute(ColorAttribute.AmbientLight, 0.9f, 0.9f, 0.9f, 1f));
        //environment.add(new DirectionalLight().set(0.8f, 0.8f, 0.8f, -1f, -0.8f, -0.2f));

        // setup camera, controller, and batches
        camera = new PerspectiveCamera(45, Gdx.graphics.getWidth(), Gdx.graphics.getHeight());
        camera.near = 0.1f;
        camera.far = 300;
        camera.position.set(100 - WALLWIDTH,WALLHEIGHT/2f,100 - WALLWIDTH);
        camera.lookAt(100,WALLHEIGHT/2f,100);
        camera.up.set(Vector3.Y);
        camFrustum = camera.frustum;

        // batches
        batch = new ModelBatch();
        batch2D = new SpriteBatch();

        // until they fix the default font, load the fixed version locally
//        font = new BitmapFont(Gdx.files.internal("fonts/lsans-15.fnt"));
        font = new BitmapFont();
        font.setColor(Color.RED);
        //font.getData().setScale(2);

        controller = new FirstPersonCameraController(camera);
        controller.setVelocity(20);
        controller.setDegreesPerPixel(0.1f);
        Gdx.input.setInputProcessor(controller);

        // create & enable the profiler
        profiler = new GLProfiler(Gdx.graphics);
        profiler.enable();
    }
}