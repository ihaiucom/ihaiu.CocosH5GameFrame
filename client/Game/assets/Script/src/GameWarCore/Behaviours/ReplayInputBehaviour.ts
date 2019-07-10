import AbstractSimulationBehaviour from "../../GameWarCoreLib/Simulation/AbstractSimulationBehaviour";
import ReplayLogicFrameBehaviour from "./ReplayLogicFrameBehaviour";
import { FrameCommandId } from "../LockStep/FrameCommandId";


/**
 * 播放战报 -- 输入
 */
export default class ReplayInputBehaviour extends AbstractSimulationBehaviour
{
    update()
    {
        let logic = this.simulation.getBehaviour(ReplayLogicFrameBehaviour);
        let list = logic.getCurrentFrameIdInfos();

        if(list != null)
        {
            for(let info of list)
            {
                switch(info.cmd)
                {
                    case FrameCommandId.SYNC_MOVE:
                        let entity = this.simulation.entityWorld.getEntity(info.entityId);
                        if(entity != null)
                        {
                            
                        }
                        break;
                }
            }
        }
    }
}