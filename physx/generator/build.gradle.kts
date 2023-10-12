import de.undercouch.gradle.tasks.download.Download
import org.gradle.kotlin.dsl.support.unzipTo

plugins {
    id("de.undercouch.download") version("5.4.0")
}

val mainClassName = "Main"

dependencies {
    implementation(project(":physx:base"))
    implementation("com.github.xpenatan.jParser:core:${LibExt.jParserVersion}")
    implementation("com.github.xpenatan.jParser:builder:${LibExt.jParserVersion}")
    implementation("com.github.xpenatan.jParser:teavm:${LibExt.jParserVersion}")
    implementation("com.github.xpenatan.jParser:cpp:${LibExt.jParserVersion}")
    implementation("com.github.xpenatan.jParser:idl:${LibExt.jParserVersion}")
}

tasks.register<JavaExec>("build_project") {
    dependsOn("classes")
    group = "physx"
    description = "Generate and build native project"
    mainClass.set(mainClassName)
    classpath = sourceSets["main"].runtimeClasspath
}

val zippedPath = "$buildDir/physx-source.zip"
val sourcePath = "$buildDir/physx-source"
//val unzippedFolder = "$sourcePath/PhysX-105.1-physx-5.3.0/physx"
val unzippedFolder = "$sourcePath/PhysX-14c72ec5ca90ef7f4ab77321aceed6eb2d2b3fca/physx"
val sourceDestination = "$buildDir/physx/physx/"

tasks.register<Download>("download_source") {
    group = "physx"
    description = "Download physX source"
//    src("https://github.com/NVIDIA-Omniverse/PhysX/archive/refs/tags/105.1-physx-5.3.0.zip")
    src("https://github.com/fabmax/PhysX/archive/14c72ec5ca90ef7f4ab77321aceed6eb2d2b3fca.zip")
    dest(File(zippedPath))
    doLast {
        unzipTo(File(sourcePath), dest)
        copy{
            from(unzippedFolder)
            into(sourceDestination)
        }
        delete(sourcePath)
        delete(zippedPath)
    }
}