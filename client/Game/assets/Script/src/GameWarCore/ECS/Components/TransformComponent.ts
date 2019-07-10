import AbstractComponent from "../../../GameWarCoreLib/ECS/AbstractComponent";
import IVector3 from "../../../GameWarCoreLib/IntMath/IVector3";
import { FrameCommandId } from "../../LockStep/FrameCommandId";
import IInt from "../../../GameWarCoreLib/IntMath/IInt";
import IntFactor from "../../../GameWarCoreLib/IntMath/IntFactor";
import IVector2 from "../../../GameWarCoreLib/IntMath/IVector2";

export default class TransformComponent extends AbstractComponent
{
    position: IVector3 = new IVector3(0, 0, 0);
    rotation: IntFactor = IntFactor.zero;

    initValue(pos: IVector3, rotation?: IntFactor):TransformComponent
    {
        this.position.x = pos.x;
        this.position.y = pos.y;
        this.position.z = pos.z;

        if(rotation)
            this.rotation = rotation;
        return this;
    }



    clone():TransformComponent
    {
        let com = TransformComponent.PoolGet<TransformComponent>().initValue(this.position, this.rotation);
        com.entityId = this.entityId;
        return com;
    }

    getCommand(): int
    {
        return FrameCommandId.SYNC_TRANSFORM;
    }

    translate(value: IVector2)
    {
        this.position.x += value.x;
        this.position.y += value.y;

    }
}