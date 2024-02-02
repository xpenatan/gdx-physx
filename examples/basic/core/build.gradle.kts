dependencies {
    implementation("com.badlogicgames.gdx:gdx:${LibExt.gdxVersion}")

    implementation(project(":physx:core"))
    implementation("com.github.xpenatan.gdx-imgui:imgui-ext-core:${LibExt.gdxImGuiVersion}")
    implementation("com.github.xpenatan.gdx-imgui:gdx-impl:${LibExt.gdxImGuiVersion}")
}
