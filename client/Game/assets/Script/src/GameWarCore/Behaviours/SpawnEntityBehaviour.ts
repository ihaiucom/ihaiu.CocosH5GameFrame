import AbstractSimulationBehaviour from "../../GameWarCoreLib/Simulation/AbstractSimulationBehaviour";
import Entity from "../../GameWarCoreLib/ECS/Entity";
import FrameIdInfo from "../../GameWarCoreLib/LockStep/FrameIdInfo";
import TransformComponent from "../ECS/Components/TransformComponent";
import MoveComponent from "../ECS/Components/MoveComponent";
import IntFactor from "../../GameWarCoreLib/IntMath/IntFactor";
import IVector3 from "../../GameWarCoreLib/IntMath/IVector3";

export default class SpawnEntityBehaviour extends AbstractSimulationBehaviour
{

    queueCreateEntity:Guid[] = [];
    queueRemoveEntity:Guid[] = [];


    
    start(): void 
    {
        this.simulation.entityWorld.sCreateEntity.add(this.onCreateEntity, this);
        this.simulation.entityWorld.sRemoveEntity.add(this.onRemoveEntity, this);
    }

    
    private onCreateEntity(entity:Entity, info: FrameIdInfo)
    {
        entity.addComponent(TransformComponent.PoolGet<TransformComponent>().initValue(new IVector3(info.params[0], info.params[1], 0)));
        entity.addComponent(MoveComponent.PoolGet<MoveComponent>().initValue(IntFactor.one.MulInt(5)));
        this.queueCreateEntity.push(entity.guid);
    }

    private onRemoveEntity(entityId: int)
    {
        this.queueRemoveEntity.push(entityId);
    }

    quit(): void 
    {
        this.simulation.entityWorld.sCreateEntity.remove(this.onCreateEntity, this);
        this.simulation.entityWorld.sRemoveEntity.remove(this.onRemoveEntity, this);
    }



    
}