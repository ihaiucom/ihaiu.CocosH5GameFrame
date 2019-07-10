import AbstractComponent from "../../../GameWarCoreLib/ECS/AbstractComponent";
import { IParamsUpdatable} from "../../../GameWarCoreLib/ECS/IComponent";
import IVector2 from "../../../GameWarCoreLib/IntMath/IVector2";
import { FrameCommandId } from "../../LockStep/FrameCommandId";
import IntFactor from "../../../GameWarCoreLib/IntMath/IntFactor";

/**
 * 移动组件
 */
export default class MoveComponent extends AbstractComponent implements IParamsUpdatable
{
    /** 移动速度 */
    speed: IntFactor = IntFactor.one;

    /** 移动方向 */
    private dir: IVector2 = new IVector2(0, 0);

    initValue(speed: IntFactor, dir?: IVector2)
    {
        if(speed != null)
            this.speed = speed;
        
        if(dir != null)
        {
            this.dir.x = dir.x;
            this.dir.y = dir.y;
        }
        return this;
    }


    setDir(x: number, y: number)
    {
        this.dir.x = x;
        this.dir.y = y;
    }

    getDir(): IVector2
    {
        return new IVector2(this.dir.x, this.dir.y);
    }

    getPathV2():IVector2
    {
        return this.dir.Mul(this.speed)
    }

    updateParams(params: any[]): void 
    {
        this.setDir(params[0], params[1]);
    }

    clone():MoveComponent
    {
        let com = MoveComponent.PoolGet<MoveComponent>().initValue(this.speed, this.dir);
        com.entityId = this.entityId;
        return com;
    }

    getCommand(): int
    {
        return FrameCommandId.SYNC_MOVE;
    }
}