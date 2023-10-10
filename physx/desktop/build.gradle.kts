val moduleName = "physx-desktop"

val windowsFile = "$projectDir/../generator/build/c++/libs/physx64.dll"

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