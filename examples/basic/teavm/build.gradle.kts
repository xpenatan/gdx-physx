plugins {
    id("org.gretty") version("3.1.0")
}

gretty {
    contextPath = "/"
    extraResourceBase("build/dist/webapp")
}

val mainClassName = "com.github.xpenatan.gdx.examples.bullet.Build"

dependencies {
    implementation(project(":examples:basic:core"))
    implementation("com.badlogicgames.gdx:gdx:${LibExt.gdxVersion}")
    implementation("com.github.xpenatan.gdx-teavm:backend-teavm:${LibExt.gdxTeaVMVersion}")
    implementation(project(":physx:teavm"))
}

tasks.register<JavaExec>("buildExampleBullet") {
    dependsOn("classes")
    group = "teavm"
    description = "Build Bullet example"
    mainClass.set(mainClassName)
    classpath = sourceSets["main"].runtimeClasspath
}

tasks.register("run_basic_teavm") {
    group = "examples-teavm"
    description = "Run Bullet example"
    val list = arrayOf(
        "clean",
        "buildExampleBullet",
        "jettyRun"
    )
    dependsOn(list)
    tasks.findByName("buildExampleBullet")?.mustRunAfter("clean")
    tasks.findByName("jettyRun")?.mustRunAfter("buildExampleBullet")
}
