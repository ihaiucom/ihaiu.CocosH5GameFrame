import EntityWorld from "../ECS/EntityWorld";
import { ISimulationBehaviour, SimulationBehaviourClass } from "./ISimulationBehaviour";

/**
 * 模拟器
 */
export default class Simulation
{
    private _entityWorld: EntityWorld;
    private _simulationId: int;
    private _behaviours:ISimulationBehaviour[];
    constructor(id: int, entityWorld?:EntityWorld )
    {
        this._simulationId = id;
        this._behaviours = [];
        this._entityWorld = entityWorld != null ? entityWorld : EntityWorld.Create();
    }

    get entityWorld(): EntityWorld
    {
        return this._entityWorld;
    }

    get simulationId(): int
    {
        return this._simulationId;
    }

    start(): void
    {
        for(let behaviour of this._behaviours)
        {
            behaviour.start();
        }
    }

    run(): void
    {
        this.entityWorld.isActive = false;
        for(let i = 0, len = this._behaviours.length; i < len; i ++)
        {
            this._behaviours[i].update();
        }
        this.entityWorld.isActive = true;
    }

    getBehaviour<T extends ISimulationBehaviour>(cls: SimulationBehaviourClass<T>): T 
    {
        for(let behaviour of this._behaviours)
        {
            if(behaviour.constructor == cls)
            {
                return <T> behaviour;
            }
        }
        return null;
    }

    containBehaviour(behaviour:ISimulationBehaviour): boolean
    {
        for(let item of this._behaviours)
        {
            if(item == behaviour)
                return true;
                
            if(item.constructor == behaviour.constructor)
                return true;
        }
        return false;
    }

    addBehaviour(behaviour:ISimulationBehaviour)
    {
        if(!this.containBehaviour(behaviour))
        {
            this._behaviours.push(behaviour);
            behaviour.simulation = this;
        }
        return this;
    }

    removeBehaviour(behaviour:ISimulationBehaviour)
    {
        if(this.containBehaviour(behaviour))
        {
            arrayRemoveItem(this._behaviours, behaviour);
            behaviour.simulation = null;
        }
    }
}