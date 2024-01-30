#pragma once

#include <vector>
#include <cstring>
#include <iostream>

#include "PxPhysicsAPI.h"
#include "common/PxRenderOutput.h"
#include "extensions/PxCollectionExt.h"
#include "extensions/PxGjkQueryExt.h"
#include "extensions/PxTetMakerExt.h"
#include "geomutils/PxContactBuffer.h"

#include "omnipvd/PxOmniPvd.h"
#include "pvd/PxPvdTransport.h"

//#include "vehicle/Base.h"
//#include "vehicle/DirectDrivetrain.h"
//#include "vehicle/EngineDrivetrain.h"
//#include "vehicle/PhysXIntegration.h"

#include "foundation/PxQuat.h"

typedef physx::PxActorFlag::Enum PxActorFlagEnum;
typedef physx::PxPvdInstrumentationFlag::Enum PxPvdInstrumentationFlagEnum;
typedef physx::PxActorType::Enum PxActorTypeEnum;
typedef physx::PxActorTypeFlag::Enum PxActorTypeFlagEnum;
typedef physx::PxArticulationAxis::Enum PxArticulationAxisEnum;
typedef physx::PxArticulationCacheFlag::Enum PxArticulationCacheFlagEnum;
typedef physx::PxArticulationDriveType::Enum PxArticulationDriveTypeEnum;
typedef physx::PxArticulationFlag::Enum PxArticulationFlagEnum;
typedef physx::PxArticulationJointType::Enum PxArticulationJointTypeEnum;
typedef physx::PxArticulationKinematicFlag::Enum PxArticulationKinematicFlagEnum;
typedef physx::PxArticulationMotion::Enum PxArticulationMotionEnum;
typedef physx::PxArticulationSensorFlag::Enum PxArticulationSensorFlagEnum;
typedef physx::PxBaseFlag::Enum PxBaseFlagEnum;
typedef physx::PxBroadPhaseType::Enum PxBroadPhaseTypeEnum;
typedef physx::PxBVHBuildStrategy::Enum PxBVHBuildStrategyEnum;
typedef physx::PxCapsuleClimbingMode::Enum PxCapsuleClimbingModeEnum;
typedef physx::PxCombineMode::Enum PxCombineModeEnum;
typedef physx::PxConstraintFlag::Enum PxConstraintFlagEnum;
typedef physx::PxContactPairFlag::Enum PxContactPairFlagEnum;
typedef physx::PxContactPairHeaderFlag::Enum PxContactPairHeaderFlagEnum;
typedef physx::PxControllerBehaviorFlag::Enum PxControllerBehaviorFlagEnum;
typedef physx::PxControllerCollisionFlag::Enum PxControllerCollisionFlagEnum;
typedef physx::PxControllerNonWalkableMode::Enum PxControllerNonWalkableModeEnum;
typedef physx::PxControllerShapeType::Enum PxControllerShapeTypeEnum;
typedef physx::PxConvexFlag::Enum PxConvexFlagEnum;
typedef physx::PxConvexMeshCookingType::Enum PxConvexMeshCookingTypeEnum;
typedef physx::PxConvexMeshGeometryFlag::Enum PxConvexMeshGeometryFlagEnum;
typedef physx::PxD6Axis::Enum PxD6AxisEnum;
typedef physx::PxD6Drive::Enum PxD6DriveEnum;
typedef physx::PxD6Motion::Enum PxD6MotionEnum;
typedef physx::PxD6JointDriveFlag::Enum PxD6JointDriveFlagEnum;
typedef physx::PxDistanceJointFlag::Enum PxDistanceJointFlagEnum;
typedef physx::PxDynamicTreeSecondaryPruner::Enum PxDynamicTreeSecondaryPrunerEnum;
typedef physx::PxErrorCode::Enum PxErrorCodeEnum;
typedef physx::PxFilterFlag::Enum PxFilterFlagEnum;
typedef physx::PxFilterObjectFlag::Enum PxFilterObjectFlagEnum;
typedef physx::PxForceMode::Enum PxForceModeEnum;
typedef physx::PxFrictionType::Enum PxFrictionTypeEnum;
typedef physx::PxGeometryType::Enum PxGeometryTypeEnum;
typedef physx::PxHeightFieldFlag::Enum PxHeightFieldFlagEnum;
typedef physx::PxHeightFieldFormat::Enum PxHeightFieldFormatEnum;
typedef physx::PxHitFlag::Enum PxHitFlagEnum;
typedef physx::PxIDENTITY PxIDENTITYEnum;
typedef physx::PxJointActorIndex::Enum PxJointActorIndexEnum;
typedef physx::PxMaterialFlag::Enum PxMaterialFlagEnum;
typedef physx::PxMeshCookingHint::Enum PxMeshCookingHintEnum;
typedef physx::PxMeshFlag::Enum PxMeshFlagEnum;
typedef physx::PxMeshGeometryFlag::Enum PxMeshGeometryFlagEnum;
typedef physx::PxMeshMidPhase::Enum PxMeshMidPhaseEnum;
typedef physx::PxMeshPreprocessingFlag::Enum PxMeshPreprocessingFlagEnum;
typedef physx::PxPairFilteringMode::Enum PxPairFilteringModeEnum;
typedef physx::PxPairFlag::Enum PxPairFlagEnum;
typedef physx::PxPrismaticJointFlag::Enum PxPrismaticJointFlagEnum;
typedef physx::PxPruningStructureType::Enum PxPruningStructureTypeEnum;
typedef physx::PxQueryFlag::Enum PxQueryFlagEnum;
typedef physx::PxQueryHitType::Enum PxQueryHitType;
typedef physx::PxRevoluteJointFlag::Enum PxRevoluteJointFlagEnum;
typedef physx::PxRigidBodyFlag::Enum PxRigidBodyFlagEnum;
typedef physx::PxRigidDynamicLockFlag::Enum PxRigidDynamicLockFlagEnum;
typedef physx::PxSceneFlag::Enum PxSceneFlagEnum;
typedef physx::PxSceneQueryUpdateMode::Enum PxSceneQueryUpdateModeEnum;
typedef physx::PxShapeFlag::Enum PxShapeFlagEnum;
typedef physx::PxSphericalJointFlag::Enum PxSphericalJointFlagEnum;
typedef physx::PxSolverType::Enum PxSolverTypeEnum;
typedef physx::PxTriangleMeshFlag::Enum PxTriangleMeshFlagEnum;
typedef physx::PxTriggerPairFlag::Enum PxTriggerPairFlagEnum;
typedef physx::vehicle2::PxVehicleAxes::Enum PxVehicleAxesEnum;
typedef physx::vehicle2::PxVehicleClutchAccuracyMode::Enum PxVehicleClutchAccuracyModeEnum;
typedef physx::vehicle2::PxVehicleCommandNonLinearResponseParams::Enum PxVehicleCommandNonLinearResponseParamsEnum;
typedef physx::vehicle2::PxVehicleCommandValueResponseTable::Enum PxVehicleCommandValueResponseTableEnum;
typedef physx::vehicle2::PxVehicleDirectDriveTransmissionCommandState::Enum PxVehicleDirectDriveTransmissionCommandStateEnum;
typedef physx::vehicle2::PxVehicleEngineDriveTransmissionCommandState::Enum PxVehicleEngineDriveTransmissionCommandStateEnum;
typedef physx::vehicle2::PxVehicleGearboxParams::Enum PxVehicleGearboxParamsEnum;
typedef physx::vehicle2::PxVehicleLimits::Enum PxVehicleLimitsEnum;
typedef physx::vehicle2::PxVehiclePhysXActorUpdateMode::Enum PxVehiclePhysXActorUpdateModeEnum;
typedef physx::vehicle2::PxVehiclePhysXConstraintLimits::Enum PxVehiclePhysXConstraintLimitsEnum;
typedef physx::vehicle2::PxVehiclePhysXRoadGeometryQueryType::Enum PxVehiclePhysXRoadGeometryQueryTypeEnum;
typedef physx::vehicle2::PxVehiclePhysXSuspensionLimitConstraintParams::DirectionSpecifier PxVehiclePhysXSuspensionLimitConstraintParamsDirectionSpecifierEnum;
typedef physx::vehicle2::PxVehicleSimulationContextType::Enum PxVehicleSimulationContextTypeEnum;
typedef physx::vehicle2::PxVehicleSuspensionJounceCalculationType::Enum PxVehicleSuspensionJounceCalculationTypeEnum;
typedef physx::vehicle2::PxVehicleTireDirectionModes::Enum PxVehicleTireDirectionModesEnum;
typedef physx::PxVisualizationParameter::Enum PxVisualizationParameterEnum;
typedef physx::PxDebugColor::Enum PxDebugColorEnum;

// typedefs for vehicle lookup tables
typedef physx::vehicle2::PxVehicleFixedSizeLookupTable<physx::PxReal,3> PxVehicleFixedSizeLookupTableFloat_3;
typedef physx::vehicle2::PxVehicleFixedSizeLookupTable<physx::PxVec3,3> PxVehicleFixedSizeLookupTableVec3_3;
typedef physx::vehicle2::PxVehicleFixedSizeLookupTable<physx::PxReal,8> PxVehicleTorqueCurveLookupTable;

// typedefs for pointer types
typedef const physx::PxU8* PxU8ConstPtr;
typedef const physx::PxU16* PxU16ConstPtr;
typedef const physx::PxU32* PxU32ConstPtr;
typedef const physx::PxMaterial* PxMaterialConstPtr;
typedef physx::PxU8* PxU8Ptr;
typedef physx::PxU16* PxU16Ptr;
typedef physx::PxU32* PxU32Ptr;
typedef physx::PxReal* PxRealPtr;
typedef physx::PxMaterial* PxMaterialPtr;
typedef physx::PxActor* PxActorPtr;
typedef physx::PxVehicleWheels* PxVehicleWheelsPtr;

// template classes are not supported by webidl binder, as a hack we can use typedefs
typedef physx::PxFixedSizeLookupTable<physx::PxVehicleEngineData::eMAX_NB_ENGINE_TORQUE_CURVE_ENTRIES> PxEngineTorqueLookupTable;
typedef physx::PxTypedStridedData<physx::PxU16> PxU16StridedData;

typedef physx::PxOverlapBufferN<10> PxOverlapBuffer10;
typedef physx::PxRaycastBufferN<10> PxRaycastBuffer10;
typedef physx::PxSweepBufferN<10> PxSweepBuffer10;

typedef std::vector<PxMaterialConstPtr> Vector_PxMaterialConst;
typedef std::vector<PxActorPtr> Vector_PxActorPtr;
typedef std::vector<physx::PxContactPairPoint> Vector_PxContactPairPoint;
typedef std::vector<physx::PxHeightFieldSample> Vector_PxHeightFieldSample;
typedef std::vector<physx::PxRaycastHit> Vector_PxRaycastHit;
typedef std::vector<physx::PxSweepHit> Vector_PxSweepHit;
typedef std::vector<physx::PxVehicleDrivableSurfaceType> Vector_PxVehicleDrivableSurfaceType;
typedef std::vector<physx::PxWheelQueryResult> Vector_PxWheelQueryResult;
typedef std::vector<PxVehicleWheelsPtr> Vector_PxVehicleWheels;

typedef std::vector<physx::PxReal> Vector_PxReal;
typedef std::vector<physx::PxU8> Vector_PxU8;
typedef std::vector<physx::PxU16> Vector_PxU16;
typedef std::vector<physx::PxU32> Vector_PxU32;
typedef std::vector<physx::PxVec3> Vector_PxVec3;
typedef std::vector<physx::PxVec4> Vector_PxVec4;

//typedef PxHitResult<physx::PxOverlapHit> PxOverlapResult;
//typedef PxHitResult<physx::PxRaycastHit> PxRaycastResult;
//typedef PxHitResult<physx::PxSweepHit> PxSweepResult;

struct PxTopLevelFunctions {
    static const physx::PxU32 PHYSICS_VERSION = PX_PHYSICS_VERSION;

//    static physx::PxSimulationFilterShader DefaultFilterShader() {
//        return &defaultFilterShader;
//    }
//
//    static void setupPassThroughFilterShader(physx::PxSceneDesc* sceneDesc, PassThroughFilterShader* filterShader) {
//        PassThroughFilterShader** data = new PassThroughFilterShader*[1];
//        data[0] = filterShader;
//        sceneDesc->filterShader = &passThrFilterShader;
//        sceneDesc->filterShaderData = data;
//        sceneDesc->filterShaderDataSize = sizeof(PassThroughFilterShader*);
//    }
//
//    static physx::PxFoundation* CreateFoundation(physx::PxU32 version, physx::PxDefaultAllocator& allocator, physx::PxErrorCallback& errorCallback) {
//        return PxCreateFoundation(version, allocator, errorCallback);
//    }
//
//    static physx::PxPhysics *CreatePhysics(physx::PxU32 version, physx::PxFoundation &foundation, const physx::PxTolerancesScale &scale, physx::PxPvd* pvd = NULL, physx::PxOmniPvd* omniPvd = NULL) {
//        return PxCreatePhysics(version, foundation, scale, false, pvd, omniPvd);
//    }
//
//    static physx::PxControllerManager* CreateControllerManager(physx::PxScene& scene, bool lockingEnabled = false) {
//        return PxCreateControllerManager(scene, lockingEnabled);
//    }
//
//    static physx::PxPvd *CreatePvd(physx::PxFoundation &foundation) {
//        return PxCreatePvd(foundation);
//    }
//
//#ifndef __EMSCRIPTEN__
//    static physx::PxPvdTransport* DefaultPvdSocketTransportCreate(const char *host, int port, unsigned int timeoutInMilliseconds) {
//        return physx::PxDefaultPvdSocketTransportCreate(host, port, timeoutInMilliseconds);
//    }
//
//    static physx::PxOmniPvd *CreateOmniPvd(physx::PxFoundation &foundation) {
//        return PxCreateOmniPvd(foundation);
//    }
//#endif
//
//    static physx::PxDefaultCpuDispatcher* DefaultCpuDispatcherCreate(physx::PxU32 numThreads) {
//        return physx::PxDefaultCpuDispatcherCreate(numThreads);
//    }
//
//    static bool InitExtensions(physx::PxPhysics& physics) {
//        return PxInitExtensions(physics, NULL);
//    }
//
//    static void CloseExtensions() {
//        PxCloseExtensions();
//    }
//
//    static physx::PxD6Joint* D6JointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxD6JointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxDistanceJoint* DistanceJointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxDistanceJointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxFixedJoint* FixedJointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxFixedJointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxPrismaticJoint* PrismaticJointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxPrismaticJointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxRevoluteJoint* RevoluteJointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxRevoluteJointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxSphericalJoint* SphericalJointCreate(physx::PxPhysics& physics, physx::PxRigidActor* actor0, physx::PxTransform& localFrame0, physx::PxRigidActor* actor1, physx::PxTransform& localFrame1) {
//        return physx::PxSphericalJointCreate(physics, actor0, localFrame0, actor1, localFrame1);
//    }
//
//    static physx::PxConvexMesh* CreateConvexMesh(const physx::PxCookingParams& params, const physx::PxConvexMeshDesc& desc) {
//        return PxCreateConvexMesh(params, desc);
//    }
//
//    static physx::PxTriangleMesh* CreateTriangleMesh(const physx::PxCookingParams &params, const physx::PxTriangleMeshDesc &desc) {
//        return PxCreateTriangleMesh(params, desc);
//    }
//
//    static physx::PxHeightField* CreateHeightField(const physx::PxHeightFieldDesc &desc) {
//        return PxCreateHeightField(desc);
//    }
};