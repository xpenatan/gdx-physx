package com.github.xpenatan.gdx.examples.physx;

import com.badlogic.gdx.InputProcessor;
import com.badlogic.gdx.ScreenAdapter;
import physx.PxTopLevelFunctions;
import physx.foundation.PxVec3;

public class PhysxTestScreen extends ScreenAdapter implements InputProcessor {


    @Override
    public void show() {
        int i = PxTopLevelFunctions.PHYSICS_VERSION();
        System.out.println("VERSION: " + i);
        PxVec3 test = new PxVec3();
        test.x(10);
        float x = test.x();
        System.out.println("X: " + x);
    }

    @Override
    public void render(float delta) {

    }

    @Override
    public boolean keyDown(int keycode) {
        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        return false;
    }

    @Override
    public boolean keyTyped(char character) {
        return false;
    }

    @Override
    public boolean touchDown(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchUp(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchCancelled(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchDragged(int screenX, int screenY, int pointer) {
        return false;
    }

    @Override
    public boolean mouseMoved(int screenX, int screenY) {
        return false;
    }

    @Override
    public boolean scrolled(float amountX, float amountY) {
        return false;
    }
}