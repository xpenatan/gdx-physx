import com.github.xpenatan.jparser.builder.BuildConfig;
import com.github.xpenatan.jparser.builder.BuildMultiTarget;
import com.github.xpenatan.jparser.builder.BuildTarget;
import com.github.xpenatan.jparser.builder.DefaultBuildTarget;
import com.github.xpenatan.jparser.builder.JBuilder;
import com.github.xpenatan.jparser.builder.targets.AndroidTarget;
import com.github.xpenatan.jparser.builder.targets.WindowsMSVSTarget;
import com.github.xpenatan.jparser.core.JParser;
import com.github.xpenatan.jparser.core.util.FileHelper;
import com.github.xpenatan.jparser.cpp.CppCodeParser;
import com.github.xpenatan.jparser.cpp.CppGenerator;
import com.github.xpenatan.jparser.cpp.NativeCPPGenerator;
import com.github.xpenatan.jparser.idl.IDLReader;
import com.github.xpenatan.jparser.teavm.TeaVMCodeParser;
import java.io.File;

public class Main {

    public static void main(String[] args) throws Exception {
        generateAndBuild();
    }

    private static void generateAndBuild() throws Exception {
        String libName = "physx";
        String basePackage = "physx";

        String physxPath = new File("./../").getCanonicalPath().replace("\\", "/");
        String physxBasePath = physxPath + "/base";
        String physxBuildPath = physxPath + "/generator";
        String physxCPPPath = physxPath + "/core";
        String physxTeavmPath = physxPath + "/teavm";

        String sourcePath = physxBuildPath + "/build/physx/physx/";
        String sourceInclude = sourcePath + "/include";
        String idlPath = physxBuildPath + "/src/main/cpp/physx.idl";
        IDLReader idlReader = IDLReader.readIDL(idlPath);

        String cppBuildPath = physxBuildPath + "/build/c++";
        String libsDir = cppBuildPath + "/libs/";

        String cppDestinationPath = cppBuildPath + "/src";
        String libDestinationPath = cppDestinationPath + "/physx";
        String baseJavaDir = physxBasePath + "/src/main/java";

        FileHelper.copyDir(sourcePath, libDestinationPath);
        FileHelper.copyDir("src/main/cpp/custom", libDestinationPath);

        CppGenerator cppGenerator = new NativeCPPGenerator(libDestinationPath);
        CppCodeParser cppParser = new CppCodeParser(cppGenerator, idlReader, basePackage, sourceInclude);
        cppParser.generateClass = true;
        JParser.generate(cppParser, baseJavaDir, physxCPPPath + "/src/main/java");

        TeaVMCodeParser teavmParser = new TeaVMCodeParser(idlReader, libName, basePackage, sourceInclude);
        JParser.generate(teavmParser, baseJavaDir, physxTeavmPath + "/src/main/java");

        BuildConfig buildConfig = new BuildConfig(cppDestinationPath, cppBuildPath, libsDir, libName);

        JBuilder.build(
                buildConfig,
                getWindowBuildTarget(cppBuildPath)
//                getEmscriptenBuildTarget(idlPath)
//                getAndroidBuildTarget()
        );
    }

    private static BuildMultiTarget getWindowBuildTarget(String cppBuildPath) {
        BuildMultiTarget multiTarget = new BuildMultiTarget();

        boolean buildLibrary = false;

        if(buildLibrary) {
            // TARGET FOUNDATION

            WindowsMSVSTarget foundationTarget = new WindowsMSVSTarget();
            foundationTarget.isStatic = true;
            foundationTarget.libName = "foundation";
            foundationTarget.libSuffix = "64.lib";
            addIncludes(foundationTarget);
            foundationTarget.cppFlags.add("-D");
            foundationTarget.cppFlags.add("PhysXFoundation_EXPORTS");
            foundationTarget.cppInclude.add("**/src/physx/source/foundation/*.cpp");
            foundationTarget.cppInclude.add("**/src/physx/source/foundation/windows/*.cpp");
            multiTarget.add(foundationTarget);

            // TARGET COMMON

            WindowsMSVSTarget commonTarget = new WindowsMSVSTarget();
            commonTarget.isStatic = true;
            commonTarget.libName = "common";
            commonTarget.libSuffix = "64.lib";
            addIncludes(commonTarget);
            commonTarget.cppInclude.add("**/src/physx/source/common/src/*.cpp");
            commonTarget.cppInclude.add("**/src/physx/source/common/src/windows/*.cpp");
            commonTarget.cppInclude.add("**/src/physx/source/geomutils/src/**.cpp");
            commonTarget.cppFlags.add("-D");
            commonTarget.cppFlags.add("PhysXCommon_EXPORTS");
            multiTarget.add(commonTarget);

            // TARGET COOKING

            WindowsMSVSTarget cookingTarget = new WindowsMSVSTarget();
            cookingTarget.isStatic = true;
            cookingTarget.libName = "cooking";
            cookingTarget.libSuffix = "64.lib";
            addIncludes(cookingTarget);
            cookingTarget.cppInclude.add("**/src/physx/source/physxcooking/src/*.cpp");
            cookingTarget.cppInclude.add("**/src/physx/source/physxcooking/src/windows/*.cpp");
            multiTarget.add(cookingTarget);

            // TARGET TASK

            WindowsMSVSTarget taskTarget = new WindowsMSVSTarget();
            taskTarget.isStatic = true;
            taskTarget.libName = "task";
            taskTarget.libSuffix = "64.lib";
            addIncludes(taskTarget);
            taskTarget.cppInclude.add("**/src/physx/source/task/src/*.cpp");
            multiTarget.add(taskTarget);

            // TARGET FAST XML

            WindowsMSVSTarget fastXMLTarget = new WindowsMSVSTarget();
            fastXMLTarget.isStatic = true;
            fastXMLTarget.libName = "fastxml";
            fastXMLTarget.libSuffix = "64.lib";
            addIncludes(fastXMLTarget);
            fastXMLTarget.cppInclude.add("**/src/physx/source/fastxml/src/*.cpp");
            multiTarget.add(fastXMLTarget);

            // TARGET EXTENSIONS

            WindowsMSVSTarget extensionsTarget = new WindowsMSVSTarget();
            extensionsTarget.isStatic = true;
            extensionsTarget.libName = "extensions";
            extensionsTarget.libSuffix = "64.lib";
            addIncludes(extensionsTarget);
            extensionsTarget.cppInclude.add("**/src/physx/source/physxextensions/**.cpp");
            extensionsTarget.cppInclude.add("**/src/physx/source/physxmetadata/extensions/src/*.cpp");
            extensionsTarget.cppInclude.add("**/src/physx/source/physxmetadata/core/src/*.cpp");
            multiTarget.add(extensionsTarget);

            // TARGET VEHICLE

            WindowsMSVSTarget vehicleTarget = new WindowsMSVSTarget();
            vehicleTarget.isStatic = true;
            vehicleTarget.libName = "vehicle";
            vehicleTarget.libSuffix = "64.lib";
            addIncludes(vehicleTarget);
            vehicleTarget.cppInclude.add("**/src/physx/source/physxvehicle/**.cpp");
            multiTarget.add(vehicleTarget);

            // TARGET VEHICLE 2

            WindowsMSVSTarget vehicle2Target = new WindowsMSVSTarget();
            vehicle2Target.isStatic = true;
            vehicle2Target.libName = "vehicle2";
            vehicle2Target.libSuffix = "64.lib";
            addIncludes(vehicle2Target);
            vehicle2Target.cppInclude.add("**/src/physx/source/physxvehicle2/**.cpp");
            multiTarget.add(vehicle2Target);

            // TARGET LOWLEVEL

            WindowsMSVSTarget lowLevelTarget = new WindowsMSVSTarget();
            lowLevelTarget.isStatic = true;
            lowLevelTarget.libName = "lowlevel";
            lowLevelTarget.libSuffix = "64.lib";
            addIncludes(lowLevelTarget);
            lowLevelTarget.cppInclude.add("**/src/physx/source/lowlevel/software/src/**.cpp");
            lowLevelTarget.cppInclude.add("**/src/physx/source/lowlevel/common/src/**.cpp");
            lowLevelTarget.cppInclude.add("**/src/physx/source/lowlevel/api/src/**.cpp");
            multiTarget.add(lowLevelTarget);

            // TARGET LOWLEVELAABB

            WindowsMSVSTarget lowLevelAABBTarget = new WindowsMSVSTarget();
            lowLevelAABBTarget.isStatic = true;
            lowLevelAABBTarget.libName = "lowlevelAABB";
            lowLevelAABBTarget.libSuffix = "64.lib";
            addIncludes(lowLevelAABBTarget);
            lowLevelAABBTarget.cppInclude.add("**/src/physx/source/lowlevelaabb/src/**.cpp");
            multiTarget.add(lowLevelAABBTarget);

            // TARGET LOWLEVELDYNAMICS

            WindowsMSVSTarget lowLevelDynamicsTarget = new WindowsMSVSTarget();
            lowLevelDynamicsTarget.isStatic = true;
            lowLevelDynamicsTarget.libName = "lowlevelDynamics";
            lowLevelDynamicsTarget.libSuffix = "64.lib";
            addIncludes(lowLevelDynamicsTarget);
            lowLevelDynamicsTarget.cppInclude.add("**/src/physx/source/lowleveldynamics/src/**.cpp");
            multiTarget.add(lowLevelDynamicsTarget);

            // TARGET SCENEQUERY

            WindowsMSVSTarget sceneQueryTarget = new WindowsMSVSTarget();
            sceneQueryTarget.isStatic = true;
            sceneQueryTarget.libName = "scenequery";
            sceneQueryTarget.libSuffix = "64.lib";
            addIncludes(sceneQueryTarget);
            sceneQueryTarget.cppInclude.add("**/src/physx/source/scenequery/src/**.cpp");
            multiTarget.add(sceneQueryTarget);

            // TARGET SIMULATIONCONTROLLER

            WindowsMSVSTarget simulationControllerTarget = new WindowsMSVSTarget();
            simulationControllerTarget.isStatic = true;
            simulationControllerTarget.libName = "simulationcontroller";
            simulationControllerTarget.libSuffix = "64.lib";
            addIncludes(simulationControllerTarget);
            simulationControllerTarget.cppInclude.add("**/src/physx/source/simulationcontroller/src/**.cpp");
            multiTarget.add(simulationControllerTarget);

            // TARGET PHYSXPVDSDK

            WindowsMSVSTarget physXPvdSDKTarget = new WindowsMSVSTarget();
            physXPvdSDKTarget.isStatic = true;
            physXPvdSDKTarget.libName = "pvd";
            physXPvdSDKTarget.libSuffix = "64.lib";
            addIncludes(physXPvdSDKTarget);
            physXPvdSDKTarget.cppInclude.add("**/src/physx/source/pvd/src/**.cpp");
            multiTarget.add(physXPvdSDKTarget);

            // TARGET PHYSX

            WindowsMSVSTarget physxTarget = new WindowsMSVSTarget();
            physxTarget.isStatic = true;
            physxTarget.libName = "core";
            physxTarget.libSuffix = "64.lib";
            addIncludes(physxTarget);
            physxTarget.cppInclude.add("**/src/physx/source/physx/src/*.cpp");
            physxTarget.cppInclude.add("**/src/physx/source/physx/src/windows/**.cpp");
            physxTarget.cppInclude.add("**/src/physx/source/physx/src/omnipvd/**.cpp");
            physxTarget.cppInclude.add("**/src/physx/source/physx/src/gpu/**.cpp");
            physxTarget.cppInclude.add("**/src/physx/source/physx/src/device/windows/**.cpp");
            physxTarget.cppInclude.add("**/src/physx/source/physxmetadata/core/src/*.cpp");
            multiTarget.add(physxTarget);
        }

        WindowsMSVSTarget glueTarget = new WindowsMSVSTarget();
        glueTarget.addJNIHeaders();
        addIncludes(glueTarget);
        glueTarget.headerDirs.add("-Isrc/physx/");
        glueTarget.cppInclude.add("**/src/physx/*.cpp");
        glueTarget.cppInclude.add(cppBuildPath + "/src/jniglue/JNIGlue.cpp");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/core64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/common64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/fastxml64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/task64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/extensions64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/foundation64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/lowlevel64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/lowlevelAABB64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/lowlevelDynamics64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/pvd64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/scenequery64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/simulationcontroller64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/vehicle64.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/vehicle264.lib");
        glueTarget.linkerFlags.add(cppBuildPath + "/libs/windows/cooking64.lib");
        multiTarget.add(glueTarget);

        return multiTarget;
    }

    public static void addIncludeDirs(DefaultBuildTarget target) {
        target.headerDirs.add("-Isrc/physx/include");
        target.headerDirs.add("-Isrc/physx/source/common/include");
        target.headerDirs.add("-Isrc/physx/source/common/src");
        target.headerDirs.add("-Isrc/physx/source/common/src/windows");
        target.headerDirs.add("-Isrc/physx/source/physx/src");
        target.headerDirs.add("-Isrc/physx/source/physx/src/device");
        target.headerDirs.add("-Isrc/physx/source/physxgpu/include");
        target.headerDirs.add("-Isrc/physx/source/geomutils/include");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/contact");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/common");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/convex");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/distance");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/sweep");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/gjk");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/intersection");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/mesh");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/hf");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/pcm");
        target.headerDirs.add("-Isrc/physx/source/geomutils/src/ccd");
        target.headerDirs.add("-Isrc/physx/source/lowlevel/api/include");
        target.headerDirs.add("-Isrc/physx/source/lowlevel/software/include");
        target.headerDirs.add("-Isrc/physx/source/lowlevel/common/include/collision");
        target.headerDirs.add("-Isrc/physx/source/lowlevel/common/include/pipeline");
        target.headerDirs.add("-Isrc/physx/source/lowlevel/common/include/utils");
        target.headerDirs.add("-Isrc/physx/source/lowlevelaabb/include");
        target.headerDirs.add("-Isrc/physx/source/lowleveldynamics/include");
        target.headerDirs.add("-Isrc/physx/source/simulationcontroller/include");
        target.headerDirs.add("-Isrc/physx/source/simulationcontroller/src");
        target.headerDirs.add("-Isrc/physx/source/scenequery/include");
        target.headerDirs.add("-Isrc/physx/source/fastxml/include");
        target.headerDirs.add("-Isrc/physx/source/physxvehicle/src");
        target.headerDirs.add("-Isrc/physx/source/physxvehicle/src/physxmetadata/include");
        target.headerDirs.add("-Isrc/physx/source/physxmetadata/core/include");
        target.headerDirs.add("-Isrc/physx/source/physxmetadata/extensions/include");
        target.headerDirs.add("-Isrc/physx/source/physxextensions/src");
        target.headerDirs.add("-Isrc/physx/source/physxextensions/src/serialization/Xml");
        target.headerDirs.add("-Isrc/physx/source/physxextensions/src/serialization/Binary");
        target.headerDirs.add("-Isrc/physx/source/physxextensions/src/serialization/File");
        target.headerDirs.add("-Isrc/physx/source/immediatemode/include");
        target.headerDirs.add("-Isrc/physx/source/pvd/include");
        target.headerDirs.add("-Isrc/physx/source/omnipvd");
        target.headerDirs.add("-Isrc/physx/source/filebuf/include");
        target.headerDirs.add("-Isrc/physx/pvdruntime/include");
        target.headerDirs.add("-Isrc/physx/source/foundation/include");
    }

    private static void addFlags(DefaultBuildTarget target) {
        target.cppFlags.add("-D");
        target.cppFlags.add("_DEBUG");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_PHYSX_STATIC_LIB");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_PUBLIC_RELEASE=1");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_CHECKED=1");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_NVTX=0");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_SUPPORT_PVD=1");
        target.cppFlags.add("-D");
        target.cppFlags.add("PX_SUPPORT_OMNI_PVD=1");
        target.cppFlags.add("-D");
        target.cppFlags.add("_CRT_SECURE_NO_DEPRECATE");
        target.cppFlags.add("-D");
        target.cppFlags.add("_CRT_NONSTDC_NO_DEPRECATE");
        target.cppFlags.add("-D");
        target.cppFlags.add("_WINSOCK_DEPRECATED_NO_WARNINGS");
    }

    private static void addIncludes(DefaultBuildTarget target) {
        addIncludeDirs(target);
        addFlags(target);
        target.cppFlags.add("-W4");
        target.cppFlags.add("/wd 4514");
        target.cppFlags.add("/wd 4820");
        target.cppFlags.add("/wd 4127");
        target.cppFlags.add("/wd 4710");
        target.cppFlags.add("/wd 4711");
        target.cppFlags.add("/wd 4577");
        target.cppFlags.add("/wd 4996");
        target.cppFlags.add("/wd 4100"); //unreferenced formal parameter
        target.cppFlags.add("/wd 4530");
        target.cppFlags.add("-Zi");
        target.cppFlags.add("-Gm-");
        target.cppFlags.add("-Od");
        target.cppFlags.add("-Zc:inline");
        target.cppFlags.add("-fp:fast");
        target.cppFlags.add("-GF");
        target.cppFlags.add("-Zc:forScope");
        target.cppFlags.add("-Zc:wchar_t");
        target.cppFlags.add("-RTCu");
        target.cppFlags.add("-GR-");
        target.cppFlags.add("-Gd");
        target.cppFlags.add("-Oy");
        target.cppFlags.add("-MTd");
        target.cppFlags.add("-diagnostics:column");
    }

    private static BuildMultiTarget getEmscriptenBuildTarget(String idlPath) {
        BuildMultiTarget multiTarget = new BuildMultiTarget();

//        EmscriptenTarget teaVMTarget = new EmscriptenTarget(idlPath);
//        teaVMTarget.headerDirs.add("-includesrc/physx/PhysxCustom.h");
//
//        teaVMTarget.cppInclude.add("**/src/physx/source/foundation/*.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/foundation/unix/*.cpp");
//
//        teaVMTarget.cppFlags.add("-D");
//        teaVMTarget.cppFlags.add("__EMSCRIPTEN__");
//        teaVMTarget.cppFlags.add("-D");
//        teaVMTarget.cppFlags.add("PX_EMSCRIPTEN");
//
//        addIncludeDirs(teaVMTarget);
//        addFlags(teaVMTarget);
//
//        teaVMTarget.cppInclude.add("**/src/physx/source/common/src/*.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/lowlevel/software/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/lowlevel/common/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/lowlevel/software/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/lowlevelaabb/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/lowleveldynamics/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/scenequery/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/simulationcontroller/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/pvd/src/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/physx/src/*.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/physx/src/omnipvd/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/physx/src/gpu/**.cpp");
//        teaVMTarget.cppInclude.add("**/src/physx/source/physx/src/device/linux/**.cpp");
//
//        multiTarget.add(teaVMTarget);
        return multiTarget;
    }

    private static BuildTarget getAndroidBuildTarget() {
        AndroidTarget androidTarget = new AndroidTarget();
        return androidTarget;
    }
}