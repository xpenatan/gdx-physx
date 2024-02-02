package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.PerspectiveCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.g2d.TextureRegion;
import com.badlogic.gdx.graphics.g3d.decals.CameraGroupStrategy;
import com.badlogic.gdx.graphics.g3d.decals.Decal;
import com.badlogic.gdx.graphics.g3d.decals.DecalBatch;
import com.badlogic.gdx.math.Quaternion;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.TimeUtils;
import java.util.ArrayList;
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
import physx.PxTopLevelFunctions;
import physx.common.PxTolerancesScale;
import physx.extensions.PxDefaultAllocator;
import physx.extensions.PxDefaultCpuDispatcher;
import physx.extensions.PxDefaultErrorCallback;
import physx.foundation.PxFoundation;
import physx.foundation.PxTransform;
import physx.foundation.PxVec3;
import physx.geometry.PxBoxGeometry;

public class LibGDXPhysxUltraScreen implements Screen {

    private TextureRegion firstWallTexture;
    private TextureRegion[] boxTextures;
    private SpriteBatch batch2D;
    private BitmapFont font = new BitmapFont();
    private Quaternion q = new Quaternion();
    private int boxTextureIndex, logicIndex;
    private float logicTimer;
    private long physicsTime, startTime, renderTime;
    private PerspectiveCamera camera = new PerspectiveCamera(45, Gdx.graphics.getWidth(), Gdx.graphics.getHeight());

    // some constants
    private static final float WALLMASS = 1;	            // wall box mass
    private static final float WBOXSIZE = 1;		        // size of wall boxes
    private static final int   WALLWIDTH = 50;		        // width of wall
    private static final int   WALLHEIGHT = WALLWIDTH;		        // height of wall
    private static final float FORCEFACTOR = WALLHEIGHT*WALLWIDTH;  // force factor of explosion

    // PhysX version stuff
    int version = PxTopLevelFunctions.PHYSICS_VERSION();
    int versionMajor = version >> 24;
    int versionMinor = (version >> 16) & 0xff;
    int versionMicro = (version >> 8) & 0xff;

    // create PhysX foundation object
    PxDefaultAllocator allocator = new PxDefaultAllocator();
    PxDefaultErrorCallback errorCb = new PxDefaultErrorCallback();
    PxFoundation foundation = PxTopLevelFunctions.CreateFoundation(version, allocator, errorCb);

    // create PhysX main physics object
    PxTolerancesScale tolerances = new PxTolerancesScale();
    PxSceneDesc sceneDesc = new PxSceneDesc(tolerances);
    PxPhysics physics = PxTopLevelFunctions.CreatePhysics(version, foundation, tolerances);
    PxScene physxScene = physics.createScene(sceneDesc);

    // create the CPU dispatcher, can be shared among multiple scenes
    int numThreads = 0;
    PxDefaultCpuDispatcher cpuDispatcher;

    // create a default material
    PxMaterial physxMaterial = physics.createMaterial(0.5f, 0.5f, 0.5f);
    // create default simulation shape flags0
    PxShapeFlags shapeFlags = new PxShapeFlags((byte) (PxShapeFlagEnum.eSIMULATION_SHAPE));

    // Ground
    PxBoxGeometry groundGeometry;
    PxShape groundShape;
    PxRigidStatic ground;

    // Wall objects
    Array<PxRigidDynamic> wallRigidObjects = new Array<>();
    PxShape wallShape;
    PxBoxGeometry wallGeometry;

    // Temp variables
    PxTransform tmpPose = new PxTransform(PxIDENTITYEnum.PxIdentity);
    PxFilterData tmpFilterData;
    PxVec3 tmpVec;

    private ArrayList<Decal> wallBoxGameObjects = new ArrayList<>();
    private DecalBatch decalBatch = new DecalBatch(WALLWIDTH*WALLWIDTH + 1, new CameraGroupStrategy(camera));

    @Override
    public void show() {
        System.out.println("PhysX loaded, version: " + versionMajor + "." + versionMinor + "." + versionMicro);
        batch2D = new SpriteBatch();
        font.setColor(Color.RED);

        logicTimer = 0;
        logicIndex = 0;

        tmpVec = new PxVec3(0f, -1.5f, 0f);

        cpuDispatcher = PxTopLevelFunctions.DefaultCpuDispatcherCreate(numThreads);

        // create a physics scene
        sceneDesc.gravity(tmpVec);
        sceneDesc.cpuDispatcher(cpuDispatcher);
        sceneDesc.filterShader(PxTopLevelFunctions.DefaultFilterShader());
        physxScene = physics.createScene(sceneDesc);

        tmpVec.x(100f); tmpVec.y(-1f); tmpVec.z(100f);
        tmpPose.p(tmpVec);
        tmpFilterData = new PxFilterData(1, 1, 0, 0);

        // create a large static box for ground
        groundGeometry = new PxBoxGeometry(200f, 1f, 200f);   // PxBoxGeometry uses half-sizes
        groundShape = physics.createShape(groundGeometry, physxMaterial, true, shapeFlags);
        ground = physics.createRigidStatic(tmpPose);
        groundShape.setSimulationFilterData(tmpFilterData);
        ground.attachShape(groundShape);
        physxScene.addActor(ground);

        loadAssets();
    }

    @Override
    public void render(float delta) {
        Gdx.gl.glClearColor(1, 1, 1, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT | GL20.GL_DEPTH_BUFFER_BIT);

        doLogic();
        simLoop();
        draw();
    }

    // libGDX screen logic
    private void doLogic() {
        logicTimer += Gdx.graphics.getDeltaTime();

        switch (logicIndex){
            case 0:
                if (logicTimer > 1.5f){
//                    zebraTalk.setVolume(1);
//                    zebraTalk.play();
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
                if (logicTimer > 4){
                    logicIndex = 3;
                    logicTimer = 0;
                    shutdownSimulation();
                    setupSimulation(firstWallTexture);
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
                break;
        }
    }

    // simulation loop
    private void simLoop ()  {
        startTime = TimeUtils.nanoTime();

        physxScene.simulate(Gdx.graphics.getDeltaTime());
        physxScene.fetchResults(true);

        for(int i = 0; i < wallBoxGameObjects.size(); i++){
            q.set(wallRigidObjects.get(i).getGlobalPose().q().x(),
                    wallRigidObjects.get(i).getGlobalPose().q().y(),
                    wallRigidObjects.get(i).getGlobalPose().q().z(),
                    wallRigidObjects.get(i).getGlobalPose().q().w()
            );
            wallBoxGameObjects.get(i).setRotation(q);
            wallBoxGameObjects.get(i).setPosition(
                    wallRigidObjects.get(i).getGlobalPose().p().x(),
                    wallRigidObjects.get(i).getGlobalPose().p().y(),
                    wallRigidObjects.get(i).getGlobalPose().p().z()
            );
            decalBatch.add(wallBoxGameObjects.get(i));
        }
        physicsTime = TimeUtils.timeSinceNanos(startTime);
    }

    private void draw() {
        startTime = TimeUtils.nanoTime();
        camera.update();
        decalBatch.flush();
        renderTime = TimeUtils.timeSinceNanos(startTime);

        // 2D stuff for info text
        batch2D.begin();
        font.draw(batch2D,"FPS: " + Gdx.graphics.getFramesPerSecond(), 10, 20);
        font.draw(batch2D,"PhysX Version: "+ versionMajor+"."+versionMinor+"."+versionMicro, 10,40);
        font.draw(batch2D,"Boxes: " + WALLWIDTH +"x" + WALLHEIGHT +" = " + wallBoxGameObjects.size(), 10, 60);
        font.draw(batch2D,"Total Physics Time: " + TimeUtils.nanosToMillis(physicsTime) + "ms", 10, 80);
        font.draw(batch2D,"Render Time: " + TimeUtils.nanosToMillis(renderTime) + "ms", 10, 100);
        batch2D.end();
    }

    private void setupSimulation(TextureRegion t) {
        boxTextureIndex = 0;
        initBoxTextures(t);

        // Wall boxes
        for (float y = WBOXSIZE/2f; y < WALLHEIGHT; y += WBOXSIZE) {
            for (float x = -WALLWIDTH/2f; x < WALLWIDTH/2f; x += WBOXSIZE) {
                createBox(new Vector3(100.5f + x, y, 100));
                boxTextureIndex++;
            }
        }
    }

    private void initBoxTextures(TextureRegion t) {
        TextureRegion[][] tmp = t.split(
                t.getRegionWidth() / WALLWIDTH,
                t.getRegionHeight() / WALLHEIGHT);

        boxTextures = new TextureRegion[WALLWIDTH * WALLHEIGHT];
        int index = 0;
        for (int i = 0; i < WALLWIDTH; i++) {
            for (int j = 0; j < WALLHEIGHT; j++) {
                boxTextures[index++] = tmp[i][j];
            }
        }
    }

    private void createBox(Vector3 position){

        boxTextures[boxTextureIndex].flip(false, true);
        Decal decal = Decal.newDecal(1,1,boxTextures[boxTextureIndex]);
        decal.setPosition(position);
        wallBoxGameObjects.add(decal);

        //Physx
        tmpVec.x(position.x); tmpVec.y(position.y); tmpVec.z(position.z);
        tmpPose.p(tmpVec);

        wallGeometry = new PxBoxGeometry(WBOXSIZE/2, WBOXSIZE/2, WBOXSIZE/2);   // PxBoxGeometry uses half-sizes
        wallShape = physics.createShape(wallGeometry, physxMaterial, true, shapeFlags);
        wallShape.setSimulationFilterData(tmpFilterData);
        PxRigidDynamic r = physics.createRigidDynamic(tmpPose);
        r.attachShape(wallShape);
        r.setMass(WALLMASS);
        wallRigidObjects.add(r);
        physxScene.addActor(r);
        r.putToSleep();
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
        wallRigidObjects.get(x+1).setLinearVelocity(tmpVec);

        tmpVec.x(-FORCEFACTOR); tmpVec.y(-FORCEFACTOR*2); tmpVec.z(10f);
        wallRigidObjects.get(x + WALLWIDTH).setLinearVelocity(tmpVec);

        tmpVec.x(FORCEFACTOR); tmpVec.y(FORCEFACTOR*2); tmpVec.z(10f);
        wallRigidObjects.get(x+ 1 + WALLWIDTH).setLinearVelocity(tmpVec);
    }


    private void shutdownSimulation() {
        for(int i = 0; i < wallRigidObjects.size; i++) {
            physxScene.removeActor(wallRigidObjects.get(i));
            wallRigidObjects.get(i).release();
        }
        wallRigidObjects.clear();
        wallBoxGameObjects.clear();
        //decalBatch = new DecalBatch(WALLWIDTH*WALLWIDTH*2, new CameraGroupStrategy(camera));
    }

    private void loadAssets() {
        // Textures
        firstWallTexture = new TextureRegion(new Texture(Gdx.files.internal("graphics/zebra.png")));

        // Loading complete, load a scene.
        camera.near = 1;
        camera.far = 300;
        camera.position.set(100 - WALLWIDTH,WALLHEIGHT/2f,100 - WALLWIDTH);
        camera.lookAt(100,WALLHEIGHT/2f,100);
        camera.up.set(Vector3.Y);

        camera.update();
        setupSimulation(firstWallTexture);
    }
}
