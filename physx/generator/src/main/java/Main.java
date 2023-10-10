import com.github.xpenatan.jparser.builder.BuildConfig;
import com.github.xpenatan.jparser.builder.BuildTarget;
import com.github.xpenatan.jparser.builder.JBuilder;
import com.github.xpenatan.jparser.builder.targets.AndroidTarget;
import com.github.xpenatan.jparser.builder.targets.EmscriptenTarget;
import com.github.xpenatan.jparser.builder.targets.WindowsMSVCTarget;
import com.github.xpenatan.jparser.builder.targets.WindowsTarget;
import com.github.xpenatan.jparser.core.JParser;
import com.github.xpenatan.jparser.core.util.FileHelper;
import com.github.xpenatan.jparser.cpp.CppCodeParser;
import com.github.xpenatan.jparser.cpp.CppGenerator;
import com.github.xpenatan.jparser.cpp.NativeCPPGenerator;
import com.github.xpenatan.jparser.idl.IDLReader;
import com.github.xpenatan.jparser.idl.parser.IDLDefaultCodeParser;
import com.github.xpenatan.jparser.teavm.TeaVMCodeParser;
import java.io.File;
import java.nio.file.Path;

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

    private static BuildTarget getWindowBuildTarget() {
        WindowsMSVCTarget windowsTarget = new WindowsMSVCTarget();
//        BuildTarget windowsTarget = new WindowsTarget();
//        windowsTarget.cppIncludes.add("**/jniglue/*.cpp");
//        windowsTarget.headerDirs.add("/Ijni-headers/");
//        windowsTarget.headerDirs.add("/Ijni-headers/win32");

        windowsTarget.headerDirs.add("-Isrc/physx/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/common/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/common/src");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/physx/src");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/physx/src/device");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/physxgpu/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/contact");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/common");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/convex");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/distance");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/sweep");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/gjk");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/intersection");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/mesh");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/hf");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/pcm");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/geomutils/src/ccd");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowlevel/api/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowlevel/software/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowlevel/common/include/pipeline");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowlevel/common/include/utils");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowlevelaabb/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/lowleveldynamics/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/simulationcontroller/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/simulationcontroller/src");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/scenequery/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/physxmetadata/core/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/immediatemode/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/pvd/include");
//        windowsTarget.headerDirs.add("-Isrc/physx/source/omnipvd");
//        windowsTarget.headerDirs.add("-Isrc/physx/pvdruntime/include");
        windowsTarget.headerDirs.add("-Isrc/physx/source/foundation/include");

//        windowsTarget.cppIncludes.add("**/src/physx/source/physx/src/*.cpp");
//        windowsTarget.cppIncludes.add("**/src/physx/source/physx/src/device/windows/*.cpp");
//        windowsTarget.cppIncludes.add("**/src/physx/source/physx/src/window/*.cpp");
//        windowsTarget.cppIncludes.add("**/src/physx/source/physx/src/omnipvd/*.cpp");
//        windowsTarget.cppIncludes.add("**/src/physx/source/physx/src/gpu/*.cpp");
//
//        windowsTarget.cppIncludes.add("**/src/physx/source/common/src/*.cpp");
//        windowsTarget.cppIncludes.add("**/src/physx/source/common/src/windows/*.cpp");

        windowsTarget.cppIncludes.add("**/src/physx/source/foundation/*.cpp");
        windowsTarget.cppIncludes.add("**/src/physx/source/foundation/unix/*.cpp");

        windowsTarget.cppFlags.add("-D");
        windowsTarget.cppFlags.add("_DEBUG");
        windowsTarget.cppFlags.add("-D");
        windowsTarget.cppFlags.add("PhysXFoundation_EXPORTS");
        windowsTarget.cppFlags.add("-D");
        windowsTarget.cppFlags.add("PX_PHYSX_STATIC_LIB");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("__CUDACC__");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("WIN64");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("PX_PUBLIC_RELEASE=1");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("PX_CHECKED=1");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("PX_NVTX=0");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("PX_SUPPORT_PVD=1");
//        windowsTarget.cppFlags.add("-D");
//        windowsTarget.cppFlags.add("PX_SUPPORT_OMNI_PVD=1");
//        windowsTarget.cppFlags.add("-Zc:inline");
//        windowsTarget.cppFlags.add("-fp:fast");
//        windowsTarget.cppFlags.add("-GF");
        windowsTarget.cppFlags.add("-w");
//        windowsTarget.cppFlags.add("-Zc:forScope");
//        windowsTarget.cppFlags.add("-RTCu");
//        windowsTarget.cppFlags.add("-GR-");
//        windowsTarget.cppFlags.add("-Gd");
//        windowsTarget.cppFlags.add("-Oy");
//        windowsTarget.cppFlags.add("-MTd");
//        windowsTarget.cppFlags.add("-errorReport:prompt");
//        windowsTarget.cppFlags.add("-Werror -fdata-sections -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -D_FORTIFY_SOURCE=2 -Werror -Wall -Wextra -Wpedantic -fno-rtti -fno-exceptions -ffunction-sections -fdata-sections -Wno-invalid-offsetof -Wno-invalid-noreturn -Wno-unused-private-field -Wno-deprecated-copy -Wno-unused-variable -Wno-variadic-macros -Wno-array-bounds -Wno-strict-aliasing -Wno-error=unused-parameter -Wno-error=attributes -Wno-error=unknown-pragmas");
        return windowsTarget;
    }

    private static BuildTarget getEmscriptenBuildTarget(String idlPath) {
        EmscriptenTarget teaVMTarget = new EmscriptenTarget(idlPath);
//        teaVMTarget.headerDirs.add("-Isrc/bullet");
//        teaVMTarget.headerDirs.add("-includesrc/jsglue/Bullet.h");
//        teaVMTarget.headerDirs.add("-includesrc/jsglue/custom_glue.cpp");
//        teaVMTarget.cppIncludes.add("**/src/bullet/BulletCollision/**.cpp");
//        teaVMTarget.cppIncludes.add("**/src/bullet/BulletDynamics/**.cpp");
//        teaVMTarget.cppIncludes.add("**/src/bullet/BulletSoftBody/**.cpp");
//        teaVMTarget.cppIncludes.add("**/src/bullet/LinearMath/**.cpp");
//        teaVMTarget.cppIncludes.add("**/src/jsglue/glue.cpp");
//        teaVMTarget.cppFlags.add("-DBT_USE_INVERSE_DYNAMICS_WITH_BULLET2");
        return teaVMTarget;
    }

    private static BuildTarget getAndroidBuildTarget() {
        AndroidTarget androidTarget = new AndroidTarget();
//        androidTarget.headerDirs.add("src/bullet/");
//        androidTarget.cppIncludes.add("**/src/bullet/BulletCollision/**.cpp");
//        androidTarget.cppIncludes.add("**/src/bullet/BulletDynamics/**.cpp");
//        androidTarget.cppIncludes.add("**/src/bullet/BulletSoftBody/**.cpp");
//        androidTarget.cppIncludes.add("**/src/bullet/LinearMath/**.cpp");
//        androidTarget.cppFlags.add("-DBT_USE_INVERSE_DYNAMICS_WITH_BULLET2");
        return androidTarget;
    }
}