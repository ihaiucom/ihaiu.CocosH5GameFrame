
import AbstractRenderSimulationBehaviour from "./AbstractRenderSimulationBehaviour";
import { IRenderSystem } from "../IRenderSystem";

/**
 * 实体行为系统控制
 */
export default class RenderSystemBehaviour extends AbstractRenderSimulationBehaviour
{

    public systems: IRenderSystem[] = [];

    containSystem(system: IRenderSystem): boolean
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

    addSystem(system: IRenderSystem):RenderSystemBehaviour
    {
        if(!this.containSystem(system))
        {
            this.systems.push(system);
            system.renderSimulation = this.simulation;
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