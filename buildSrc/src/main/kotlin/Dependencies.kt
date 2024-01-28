object LibExt {
    const val groupId = "com.github.xpenatan.gdx-physx"
    val libVersion: String = getVersion("1.0.0", "b1")

    const val gdxVersion = "1.12.1"

    const val jParserVersion = "-SNAPSHOT"
    const val gdxTeaVMVersion = "1.0.0-b9"
    const val teaVMVersion = "0.9.2"
}

private fun getVersion(releaseVersion: String, suffix: String = ""): String {
    val isRelease = System.getenv("RELEASE")
    var libVersion = "${releaseVersion}-SNAPSHOT"
    if(isRelease != null && isRelease.toBoolean()) {
        libVersion = releaseVersion + if(suffix.isNotEmpty()) "-${suffix}" else ""
    }
    System.out.println("Lib Version: " + libVersion)
    return libVersion
}