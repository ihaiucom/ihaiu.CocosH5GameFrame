import { ISimulationBehaviour } from "../../Simulation/ISimulationBehaviour";
import { AssemblyNamespace } from "../../../Libs/Cls/AssemblyNamespace";
import RenderSimulation from "../RenderSimulation";
import Simulation from "../../Simulation/Simulation";


export default abstract class AbstractRenderSimulationBehaviour implements ISimulationBehaviour 
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.RenderSimulationBehaviours;




    simulation: RenderSimulation;
    logicSimulation: Simulation;

    start(): void 
    {
    }

    update(): void 
    {
    }

    quit(): void 
    {
    }
}