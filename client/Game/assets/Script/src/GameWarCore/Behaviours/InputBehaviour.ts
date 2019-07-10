import AbstractSimulationBehaviour from "../../GameWarCoreLib/Simulation/AbstractSimulationBehaviour";
import LogicFrameBehaviour from "../../GameWarCoreLib/Simulation/Behaviours/LogicFrameBehaviour";
import KeyFrameSender from "../../GameWarCoreLib/LockStep/KeyFrameSender";
import { FrameCommandId } from "../LockStep/FrameCommandId";
import Input from "../../GameWarCoreLib/Common/Input";
import Keyboard = Laya.Keyboard;
import MoveComponent from "../ECS/Components/MoveComponent";
import { EntityFrameCommandId } from "../../GameWarCoreLib/LockStep/EntityFrameCommandId";
import UID from "../../GameWarCoreLib/ECS/UID";
import Random from "../../Libs/Helpers/Random";



export default class InputBehaviour extends AbstractSimulationBehaviour
{
    // 自己控制的实体
    selfControlEntityId:Guid = -1;

    update()
    {
        let logic = this.simulation.getBehaviour(LogicFrameBehaviour);

        if(Input.isKeyCodeActive(Keyboard.SPACE) && this.selfControlEntityId == -1)
        {

            let uid = UID.uid();

            if(this.selfControlEntityId == -1)
                this.selfControlEntityId = uid;

            KeyFrameSender.addCurrentFrameCommand(EntityFrameCommandId.SYNC_CREATE_ENTITY, uid, [Random.range(100, 300), Random.range(100, 300)]);
        }

        



        let entity = this.simulation.entityWorld.getEntity(this.selfControlEntityId);

        if(entity != null)
        {
            // 移动操作
            let move = entity.getComponent(MoveComponent);
            if(move != null)
            {
                let dir = move.getDir();
                dir.x = 0;
                dir.y = 0;
    
                if(Input.isKeyCodeActive(Keyboard.A))
                {
                    dir.x = -1;
                }
    
                if(Input.isKeyCodeActive(Keyboard.S))
                {
                    dir.y = 1;
                }
                
                if(Input.isKeyCodeActive(Keyboard.D))
                {
                    dir.x = 1;
                }
    
                if(Input.isKeyCodeActive(Keyboard.W))
                {
                    dir.y = -1;
                }
    
                KeyFrameSender.addCurrentFrameCommand(FrameCommandId.SYNC_MOVE, entity.guid, [dir.x, dir.y]);
    
                // 攻击操作
            }
            
        }


    }
}