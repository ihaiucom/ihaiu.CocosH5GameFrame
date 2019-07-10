import Simulation from "../Simulation";
import FrameIdInfo from "../../LockStep/FrameIdInfo";
import AbstractSimulationBehaviour from "../AbstractSimulationBehaviour";

/**
 * 刷新逻辑帧
 */
export default class LogicFrameBehaviour extends AbstractSimulationBehaviour
{
    /** 当前帧ID */
    private _currentFrameId: int;
    
    public get currentFrameId(): int
    {
        return this._currentFrameId;
    }


    /** 帧操作 */
    private frameIdInfos: FrameIdInfo[][] = [];




    start(): void
    {
        this._currentFrameId = -1;
    }

    update(): void 
    {
        // 刷新逻辑帧
        this._currentFrameId ++;
        this.frameIdInfos.push([]);
    }

    quit(): void 
    {
    }

    /**
     * 回放命令存储
     */
    public updateKeyFrameIdInfoAtFrameId(frameId: int, info: FrameIdInfo)
    {
        info.frameId = frameId;
        if(frameId >= this.frameIdInfos.length)
        {
            throw new Error("Error: frameId=" + frameId);
        }

        let frames: FrameIdInfo[] = this.frameIdInfos[frameId];
        let updateState: boolean = false;
        for(let frame of frames)
        {
            if(frame.equalsInfo(info))
            {
                updateState = true;
                frame.params = info.params;
                break;
            }
        }

        if(!updateState)
        {
            frames.push(info);
        }
        frames.sort((a, b)=>{return a.entityId - b.entityId;});

    }
}