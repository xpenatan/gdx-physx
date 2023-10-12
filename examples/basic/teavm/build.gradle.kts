plugins {
    id("org.gretty") version("3.1.0")
}

gretty {
    contextPath = "/"
    extraResourceBase("build/dist/webapp")
}

val mainClassName = "com.github.xpenatan.gdx.examples.physx.Build"

dependencies {
    implementation(project(":examples:basic:core"))
    implementation("com.badlogicgames.gdx:gdx:${LibExt.gdxVersion}")
    implementation("com.github.xpenatan.gdx-teavm:backend-teavm:${LibExt.gdxTeaVMVersion}")
    implementation(project(":physx:teavm"))
}

tasks.register<JavaExec>("buildExample") {
    dependsOn("classes")
    group = "teavm"
    description = "Build physx example"
    mainClass.set(mainClassName)
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register("run_basic_teavm") {
    group = "examples-teavm"
    description = "Run physx example"
    val list = arrayOf(
        "clean",
        "buildExample",
        "jettyRun"
    )
    dependsOn(list)
    tasks.findByName("buildExample")?.mustRunAfter("clean")
    tasks.findByName("jettyRun")?.mustRunAfter("buildExample")
}