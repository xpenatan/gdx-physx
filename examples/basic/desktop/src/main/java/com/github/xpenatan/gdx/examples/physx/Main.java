package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.backends.lwjgl3.Lwjgl3Application;
import com.badlogic.gdx.backends.lwjgl3.Lwjgl3ApplicationConfiguration;

public class Main {

    public static void main(String[] args) {
        Lwjgl3ApplicationConfiguration config = new Lwjgl3ApplicationConfiguration();
        config.setOpenGLEmulation(Lwjgl3ApplicationConfiguration.GLEmulation.GL30,3,1);
        new Lwjgl3Application(new PhysxGame(), config);
    }
}
