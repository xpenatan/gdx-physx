package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.Game;

public class PhysxGame extends Game {

    @Override
    public void create() {
        setScreen(new PhysxInitScreen(this));
    }
}
