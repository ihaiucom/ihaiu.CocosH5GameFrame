import { IComponent } from "../ECS/IComponent";

/**
 * 操作信息
 * 用于网络通信
 */
export default class FrameIdInfo
{
    frameId:int;
    cmd: int;
    entityId: Guid;
    params:any[];

    constructor(frameId: int, cmd: int, entityId: Guid, params: any[])
    {
        this.frameId = frameId;
        this.cmd = cmd;
        this.entityId = entityId;

        if(params)
            this.params = params;
        else
            this.params = [];
    }

    clone():FrameIdInfo
    {
        let params = [];
        if(this.params)
        {
            for(let item of this.params)
            {
                params.push(item);
            }
        }
        let o = new FrameIdInfo(this.frameId, this.cmd, this.entityId, params);
        return o;
    }

    equalsInfo(target: FrameIdInfo)
    {
        return this.entityId == target.entityId && 
                this.cmd == target.cmd&& 
                this.frameId == target.frameId;
    }

    equalsComponent(component: IComponent)
    {
        return this.entityId == component.entityId && this.cmd == component.getCommand();
    }

}