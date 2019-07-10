import AbstractSimulationBehaviour from "../../GameWarCoreLib/Simulation/AbstractSimulationBehaviour";
import FrameIdInfo from "../../GameWarCoreLib/LockStep/FrameIdInfo";

/**
 * 播放战报 逻辑帧刷新
 */
export default class ReplayLogicFrameBehaviour extends AbstractSimulationBehaviour
{
    /** 当前帧ID */
    private _currentFrameId: int;
    
    public get currentFrameId(): int
    {
        return this._currentFrameId;
    }


    /** 帧操作 */
    private frameIdInfos: FrameIdInfo[][] = [];

    setFrameIdInfos(frameIdInfos: FrameIdInfo[][])
    {
        this.frameIdInfos = frameIdInfos;
    }

    getCurrentFrameIdInfos()
    {
        return this.frameIdInfos[this._currentFrameId];
    }

    start()
    {
        this._currentFrameId = -1;
    }

    update()
    {
        this._currentFrameId ++;
    }
}