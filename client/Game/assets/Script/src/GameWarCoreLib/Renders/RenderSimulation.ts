import Simulation from "../Simulation/Simulation";
import EntityWorld from "../ECS/EntityWorld";
import RenderWorld from "./RenderWorld";
import AbstractRenderSimulationBehaviour from "./Behaviours/AbstractRenderSimulationBehaviour";

export default class RenderSimulation extends Simulation
{
    private _renderWorld: RenderWorld;
    private _logicSimulation: Simulation;
    
    get renderWorld(): RenderWorld
    {
        return this._renderWorld;
    }

    get logicSimulation(): Simulation
    {
        return this._logicSimulation;
    }
    
    constructor(id: int, logicSimulation:Simulation, renderWorld?:RenderWorld )
    {
        super(id, logicSimulation.entityWorld);
        this._logicSimulation = logicSimulation;
        this._renderWorld = renderWorld != null ? renderWorld : RenderWorld.Create();
    }
    
    addBehaviour(behaviour:AbstractRenderSimulationBehaviour)
    {
        if(!this.containBehaviour(behaviour))
        {
            behaviour.logicSimulation = this._logicSimulation;
            super.addBehaviour(behaviour);
        }
        return this;
    }
}