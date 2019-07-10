import { IEntitySystem } from "../../ECS/IEntitySystem";
import AbstractSimulationBehaviour from "../AbstractSimulationBehaviour";

/**
 * 实体行为系统控制
 */
export default class EntitySystemBehaviour extends AbstractSimulationBehaviour
{

    public systems: IEntitySystem[] = [];

    containSystem(system: IEntitySystem): boolean
    {
        for(let item of this.systems)
        {
            if(item == system)
                return true;
            
            if(item.constructor == system.constructor)
                return true;
        }
        return false;
    }

    addSystem(system: IEntitySystem):EntitySystemBehaviour
    {
        if(!this.containSystem(system))
        {
            this.systems.push(system);
            system.entityWorld = this.simulation.entityWorld;
        }
        return this;
    }

    

    update(): void 
    {
        for(let i = 0, len = this.systems.length; i < len; i ++)
        {
            this.systems[i].execute();
        }
    }

    
}