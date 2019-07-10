import KeyFrameCollection from "./KeyFrameCollection";
import FrameIdInfo from "./FrameIdInfo";
import SimulationManager from "../Simulation/SimulationManager";
import { SimulationID } from "../Simulation/SimulationID";
import LogicFrameBehaviour from "../Simulation/Behaviours/LogicFrameBehaviour";

/**
 * 关键帧同步记录
 */
export default class KeyFrameSender
{
    private static keyFrameCollection:KeyFrameCollection = new KeyFrameCollection();

    static addFrameCommand(info: FrameIdInfo)
    {
        this.keyFrameCollection.frameId = info.frameId;
        this.keyFrameCollection.keyFrames.push(info);
    }

    static addCurrentFrameCommand(cmd: int, entityId: Guid, params:any[])
    {
        let simulation = SimulationManager.Instance.getSimulation(SimulationID.CLIENT_LOGIC);
        if(simulation != null)
        {
            let logic = simulation.getBehaviour(LogicFrameBehaviour);
            if(logic != null)
            {
                let info = new FrameIdInfo(logic.currentFrameId, cmd, entityId, params);
                this.addFrameCommand(info);
            }
        }
    }

    static getFrameCommand()
    {
        return this.keyFrameCollection;
    }

    static clearFrameCommand()
    {
        this.keyFrameCollection.frameId = 0;
        this.keyFrameCollection.keyFrames.length = 0;
    }
}