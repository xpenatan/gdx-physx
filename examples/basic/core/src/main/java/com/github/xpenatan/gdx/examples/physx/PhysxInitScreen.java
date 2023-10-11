package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.ScreenAdapter;
import physx.PhysxLoader;

public class PhysxInitScreen extends ScreenAdapter {

    private PhysxGame game;

    private boolean physxInit = false;

    public PhysxInitScreen(PhysxGame game) {
        this.game = game;
    }

    @Override
    public void show() {
        PhysxLoader.init(() -> physxInit = true);
    }

    @Override
    public void render(float delta) {
        if(physxInit) {
            physxInit = false;
            game.setScreen(new PhysxTestScreen());
        }
    }
}
