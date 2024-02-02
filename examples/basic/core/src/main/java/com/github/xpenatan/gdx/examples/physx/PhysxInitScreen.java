package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.ScreenAdapter;
import imgui.ImGuiLoader;
import physx.PhysxLoader;

public class PhysxInitScreen extends ScreenAdapter {

    private PhysxGame game;

    private boolean init = false;

    public PhysxInitScreen(PhysxGame game) {
        this.game = game;
    }

    @Override
    public void show() {
        PhysxLoader.init(() -> ImGuiLoader.init(() -> init = true));
    }

    @Override
    public void render(float delta) {
        if(init) {
            init = false;
//            game.setScreen(new PhysxTestScreen());
//            game.setScreen(new LibGDXPhysxInstancedScreen());
            game.setScreen(new LibGDXPhysxUltraScreen());
        }
    }
}
