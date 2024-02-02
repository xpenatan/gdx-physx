package physx;

import idl.IDLBase;
import physx.foundation.PxTransform;

public class PxPhysics extends IDLBase {

    public PxRigidDynamic createRigidDynamic(PxTransform pose) {
        long pointer = createRigidDynamicNATIVE(getCPointer(), pose != null ? pose.getCPointer() : 0);
        if (pointer == 0)
            return null;
        PxRigidDynamic rigid = new PxRigidDynamic((byte) 1, (char) 1);
        rigid.setPointer(pointer);
        return rigid;
    }

    /*[-teaVM;-NATIVE]
        var jsObj = physx.wrapPointer(this_addr, physx.PxPhysics);
        var returnedJSObj = jsObj.createRigidDynamic(pose_addr);
        if(!returnedJSObj.hasOwnProperty('ptr')) return 0;
        return physx.getPointer(returnedJSObj);
    */
    /*[-C++;-NATIVE]
        physx::PxPhysics* nativeObject = (physx::PxPhysics*)this_addr;
        return (jlong)nativeObject->createRigidDynamic(*((physx::PxTransform* )pose_addr));
    */
    private static native long createRigidDynamicNATIVE(long this_addr, long pose_addr);
}