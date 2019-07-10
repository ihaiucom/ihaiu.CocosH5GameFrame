import { ISimulationBehaviour } from "./ISimulationBehaviour";
import Simulation from "./Simulation";
import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";

export default abstract class AbstractSimulationBehaviour implements ISimulationBehaviour 
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.SimulationBehaviours;




    simulation: Simulation;

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