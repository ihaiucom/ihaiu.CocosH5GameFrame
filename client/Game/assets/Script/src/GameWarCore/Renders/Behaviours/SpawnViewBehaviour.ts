import AbstractRenderSimulationBehaviour from "../../../GameWarCoreLib/Renders/Behaviours/AbstractRenderSimulationBehaviour";
import Entity from "../../../GameWarCoreLib/ECS/Entity";
import FrameIdInfo from "../../../GameWarCoreLib/LockStep/FrameIdInfo";
import MoveComponent from "../../ECS/Components/MoveComponent";
import TransformComponent from "../../ECS/Components/TransformComponent";
import Dictionary from "../../../Libs/Helpers/Dictionary";
import MoveRenderComponent from "../Components/MoveRenderComponent";
import SpawnEntityBehaviour from "../../Behaviours/SpawnEntityBehaviour";

export default class SpawnViewBehaviour extends AbstractRenderSimulationBehaviour
{

    private viewDict: Dictionary<Guid, any> = new Dictionary<Guid, any>();
    

    update(): void 
    {
        let spawnEntity = this.logicSimulation.getBehaviour(SpawnEntityBehaviour);
        if(spawnEntity.queueCreateEntity.length > 0)
        {
            this.createView(spawnEntity.queueCreateEntity.shift());
        }

        if(spawnEntity.queueRemoveEntity.length > 0)
        {
            this.createView(spawnEntity.queueRemoveEntity.shift());
        }
    }

    private createView(entityId: Guid)
    {
        let view = new Laya.Sprite();
        view.graphics.drawCircle(0, 0, 100, '#FF0000');
        view.addComponent(MoveRenderComponent).setEntityId(entityId);
        this.viewDict.add(entityId, view);
        Laya.stage.addChild(view);
    }

    private removeView(entityId: Guid)
    {
        let view: Laya.Sprite = this.viewDict.getValue(entityId);
        if(view)
        {
            view.removeSelf();
            view.destroy();
            this.viewDict.remove(entityId);
        }
    }

    
}