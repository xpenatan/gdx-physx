val moduleName = "physx-desktop"

val physxDir = "${rootProject.projectDir}/physx"
val windowsFile = "$physxDir/generator/build/c++/libs/windows/physx64.dll"

tasks.jar {
    from(windowsFile)
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            artifactId = moduleName
            from(components["java"])
        }
    }
}