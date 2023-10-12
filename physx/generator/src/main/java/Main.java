import com.github.xpenatan.jparser.builder.BuildConfig;
import com.github.xpenatan.jparser.builder.BuildMultiTarget;
import com.github.xpenatan.jparser.builder.BuildTarget;
import com.github.xpenatan.jparser.builder.JBuilder;
import com.github.xpenatan.jparser.builder.targets.AndroidTarget;
import com.github.xpenatan.jparser.builder.targets.EmscriptenTarget;
import com.github.xpenatan.jparser.builder.targets.WindowsMSVSTarget;
import com.github.xpenatan.jparser.core.JParser;
import com.github.xpenatan.jparser.core.util.FileHelper;
import com.github.xpenatan.jparser.cpp.CppCodeParser;
import com.github.xpenatan.jparser.cpp.CppGenerator;
import com.github.xpenatan.jparser.cpp.NativeCPPGenerator;
import com.github.xpenatan.jparser.idl.IDLReader;
import com.github.xpenatan.jparser.idl.parser.IDLDefaultCodeParser;
import com.github.xpenatan.jparser.teavm.TeaVMCodeParser;
import java.io.File;

public class Main {

    public static void main(String[] args) throws Exception {
        generate();
    }

    public static void generate() throws Exception {
        String basePackage = "physx";
        String idlPath = new File("src/main/cpp/physx.idl").getCanonicalPath();
        String cppSourceDir = new File("./build/physx/physx/").getCanonicalPath();
        String baseJavaDir = new File(".").getAbsolutePath() + "./base/src/main/java";
        IDLReader idlReader = IDLReader.readIDL(idlPath, cppSourceDir);

//        generateClassOnly(idlReader, basePackage, baseJavaDir);
        generateAndBuild(idlReader, basePackage, baseJavaDir, cppSourceDir, idlPath);
    }

    private static void generateClassOnly(
            IDLReader idlReader,
            String basePackage,
            String baseJavaDir
    ) throws Exception {
        IDLDefaultCodeParser idlParser = new IDLDefaultCodeParser(basePackage, "C++", idlReader);
        idlParser.generateClass = true;
        String genDir = "../core/src/main/java";
        JParser.generate(idlParser, baseJavaDir, genDir);
    }

    private static void generateAndBuild(
            IDLReader idlReader,
            String basePackage,
            String baseJavaDir,
            String cppSourceDir,
            String idlPath
    ) throws Exception {
        String libName = "physx";

        String libsDir = new File("./build/c++/libs/").getCanonicalPath();
        String genDir = "../core/src/main/java";
        String libBuildPath = new File("./build/c++/").getCanonicalPath();
        String cppDestinationPath = libBuildPath + "/src";
        String libDestinationPath = cppDestinationPath + "/physx";

        FileHelper.copyDir(cppSourceDir, libDestinationPath);
        FileHelper.copyDir("src/main/cpp/custom", libDestinationPath);

        CppGenerator cppGenerator = new NativeCPPGenerator(libDestinationPath);
        CppCodeParser cppParser = new CppCodeParser(cppGenerator, idlReader, basePackage);
        cppParser.generateClass = true;
        JParser.generate(cppParser, baseJavaDir, genDir);

        BuildConfig buildConfig = new BuildConfig(
                cppDestinationPath,
                libBuildPath,
                libsDir,
                libName
        );

        String teaVMgenDir = "../teavm/src/main/java/";
        TeaVMCodeParser teavmParser = new TeaVMCodeParser(idlReader, libName, basePackage);
        JParser.generate(teavmParser, baseJavaDir, teaVMgenDir);

        JBuilder.build(
                buildConfig,
                getWindowBuildTarget()
//                getEmscriptenBuildTarget(idlPath)
//                getAndroidBuildTarget()
        );
    }

    private static BuildMultiTarget getWindowBuildTarget() {
        BuildMultiTarget multiTarget = new BuildMultiTarget();

        // TARGET FOUNDATION

        WindowsMSVSTarget foundationTarget = new WindowsMSVSTarget();
        foundationTarget.isStatic = true;
        foundationTarget.addJNI = false;
        foundationTarget.libName = "foundation";
        foundationTarget.libSuffix = "64.lib";
        addIncludes(foundationTarget);
        foundationTarget.cppFlags.add("-D");
        foundationTarget.cppFlags.add("PhysXFoundation_EXPORTS");
        foundationTarget.cppIncludes.add("**/src/physx/source/foundation/*.cpp");
        foundationTarget.cppIncludes.add("**/src/physx/source/foundation/windows/*.cpp");
        multiTarget.add(foundationTarget);

        // TARGET COMMON

        WindowsMSVSTarget commonTarget = new WindowsMSVSTarget();
        commonTarget.isStatic = true;
        commonTarget.addJNI = false;
        commonTarget.libName = "common";
        commonTarget.libSuffix = "64.lib";
        addIncludes(commonTarget);
        commonTarget.cppIncludes.add("**/src/physx/source/common/src/*.cpp");
        commonTarget.cppIncludes.add("**/src/physx/source/common/src/windows/*.cpp");
        commonTarget.cppFlags.add("-D");
        commonTarget.cppFlags.add("PhysXCommon_EXPORTS");
        commonTarget.linkerFlags.add("../../libs/windows/foundation64.lib");
        multiTarget.add(commonTarget);

        // TARGET LOWLEVEL

        WindowsMSVSTarget lowLevelTarget = new WindowsMSVSTarget();
        lowLevelTarget.isStatic = true;
        lowLevelTarget.addJNI = false;
        lowLevelTarget.libName = "lowlevel";
        lowLevelTarget.libSuffix = "64.lib";
        addIncludes(lowLevelTarget);
        lowLevelTarget.cppIncludes.add("**/src/physx/source/lowlevel/software/src/**.cpp");
        lowLevelTarget.cppIncludes.add("**/src/physx/source/lowlevel/common/src/**.cpp");
        lowLevelTarget.cppIncludes.add("**/src/physx/source/lowlevel/software/src/**.cpp");
        multiTarget.add(lowLevelTarget);

        // TARGET LOWLEVELAABB

        WindowsMSVSTarget lowLevelAABBTarget = new WindowsMSVSTarget();
        lowLevelAABBTarget.isStatic = true;
        lowLevelAABBTarget.addJNI = false;
        lowLevelAABBTarget.libName = "lowlevelAABB";
        lowLevelAABBTarget.libSuffix = "64.lib";
        addIncludes(lowLevelAABBTarget);
        lowLevelAABBTarget.cppIncludes.add("**/src/physx/source/lowlevelaabb/src/**.cpp");
        multiTarget.add(lowLevelAABBTarget);

        // TARGET LOWLEVELDYNAMICS

        WindowsMSVSTarget lowLevelDynamicsTarget = new WindowsMSVSTarget();
        lowLevelDynamicsTarget.isStatic = true;
        lowLevelDynamicsTarget.addJNI = false;
        lowLevelDynamicsTarget.libName = "lowlevelDynamics";
        lowLevelDynamicsTarget.libSuffix = "64.lib";
        addIncludes(lowLevelDynamicsTarget);
        lowLevelDynamicsTarget.cppIncludes.add("**/src/physx/source/lowleveldynamics/src/**.cpp");
        multiTarget.add(lowLevelDynamicsTarget);

        // TARGET SCENEQUERY

        WindowsMSVSTarget sceneQueryTarget = new WindowsMSVSTarget();
        sceneQueryTarget.isStatic = true;
        sceneQueryTarget.addJNI = false;
        sceneQueryTarget.libName = "scenequery";
        sceneQueryTarget.libSuffix = "64.lib";
        addIncludes(sceneQueryTarget);
        sceneQueryTarget.cppIncludes.add("**/src/physx/source/scenequery/src/**.cpp");
        multiTarget.add(sceneQueryTarget);

        // TARGET SIMULATIONCONTROLLER

        WindowsMSVSTarget simulationControllerTarget = new WindowsMSVSTarget();
        simulationControllerTarget.isStatic = true;
        simulationControllerTarget.addJNI = false;
        simulationControllerTarget.libName = "simulationcontroller";
        simulationControllerTarget.libSuffix = "64.lib";
        addIncludes(simulationControllerTarget);
        simulationControllerTarget.cppIncludes.add("**/src/physx/source/simulationcontroller/src/**.cpp");
        multiTarget.add(simulationControllerTarget);

        // TARGET PHYSXPVDSDK

        WindowsMSVSTarget physXPvdSDKTarget = new WindowsMSVSTarget();
        physXPvdSDKTarget.isStatic = true;
        physXPvdSDKTarget.addJNI = false;
        physXPvdSDKTarget.libName = "pvd";
        physXPvdSDKTarget.libSuffix = "64.lib";
        addIncludes(physXPvdSDKTarget);
        physXPvdSDKTarget.cppIncludes.add("**/src/physx/source/pvd/src/**.cpp");
        multiTarget.add(physXPvdSDKTarget);

        // TARGET PHYSX

        WindowsMSVSTarget physxTarget = new WindowsMSVSTarget();
        physxTarget.isStatic = true;
        physxTarget.addJNI = false;
        physxTarget.libName = "physx";
        physxTarget.libSuffix = "64.lib";
        addIncludes(physxTarget);
        physxTarget.cppIncludes.add("**/src/physx/source/physx/src/*.cpp");
        physxTarget.cppIncludes.add("**/src/physx/source/physx/src/windows/**.cpp");
        physxTarget.cppIncludes.add("**/src/physx/source/physx/src/omnipvd/**.cpp");
        physxTarget.cppIncludes.add("**/src/physx/source/physx/src/gpu/**.cpp");
        physxTarget.cppIncludes.add("**/src/physx/source/physx/src/device/windows/**.cpp");
        multiTarget.add(physxTarget);

        WindowsMSVSTarget glueTarget = new WindowsMSVSTarget();
        addIncludes(glueTarget);
        glueTarget.linkerFlags.add("-DLL");
        glueTarget.linkerFlags.add("../../libs/windows/common64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/foundation64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/lowlevel64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/lowlevelAABB64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/lowlevelDynamics64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/pvd64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/scenequery64.lib");
        glueTarget.linkerFlags.add("../../libs/windows/simulationcontroller64.lib");
        multiTarget.add(glueTarget);

        return multiTarget;
    }

    public static void addIncludeDirs(BuildTarget target) {
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
        target.headerDirs.add("-Isrc/physx/source/physxmetadata/core/include");
        target.headerDirs.add("-Isrc/physx/source/immediatemode/include");
        target.headerDirs.add("-Isrc/physx/source/pvd/include");
        target.headerDirs.add("-Isrc/physx/source/omnipvd");
        target.headerDirs.add("-Isrc/physx/source/filebuf/include");
        target.headerDirs.add("-Isrc/physx/pvdruntime/include");
        target.headerDirs.add("-Isrc/physx/source/foundation/include");
    }

    private static void addFlags(BuildTarget target) {
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

    private static void addIncludes(BuildTarget target) {
        addIncludeDirs(target);
        addFlags(target);
        target.cppFlags.add("-WX");
        target.cppFlags.add("-W4");
        target.cppFlags.add("/wd 4514");
        target.cppFlags.add("/wd 4820");
        target.cppFlags.add("/wd 4127");
        target.cppFlags.add("/wd 4710");
        target.cppFlags.add("/wd 4711");
        target.cppFlags.add("/wd 4577");
        target.cppFlags.add("/wd 4996");
        target.cppFlags.add("/wd 4100"); //unreferenced formal parameter
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

        EmscriptenTarget teaVMTarget = new EmscriptenTarget(idlPath);
        teaVMTarget.headerDirs.add("-includesrc/physx/PhysxCustom.h");

        teaVMTarget.cppIncludes.add("**/src/physx/source/foundation/*.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/foundation/unix/*.cpp");

        teaVMTarget.cppFlags.add("-D");
        teaVMTarget.cppFlags.add("__EMSCRIPTEN__");
        teaVMTarget.cppFlags.add("-D");
        teaVMTarget.cppFlags.add("PX_EMSCRIPTEN");

        addIncludeDirs(teaVMTarget);
        addFlags(teaVMTarget);

        teaVMTarget.cppIncludes.add("**/src/physx/source/common/src/*.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/lowlevel/software/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/lowlevel/common/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/lowlevel/software/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/lowlevelaabb/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/lowleveldynamics/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/scenequery/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/simulationcontroller/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/pvd/src/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/physx/src/*.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/physx/src/omnipvd/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/physx/src/gpu/**.cpp");
        teaVMTarget.cppIncludes.add("**/src/physx/source/physx/src/device/linux/**.cpp");

        multiTarget.add(teaVMTarget);
        return multiTarget;
    }

    private static BuildTarget getAndroidBuildTarget() {
        AndroidTarget androidTarget = new AndroidTarget();
        return androidTarget;
    }
}