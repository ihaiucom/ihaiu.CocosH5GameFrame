import Simulation from "./Simulation";

export interface ISimulationBehaviour
{
    simulation: Simulation;

    start(): void;
    update(): void;
    quit(): void;
}

/** 类信息 */
export interface SimulationBehaviourClass<T extends ISimulationBehaviour>
{
    readonly name: string;
    readonly prototype: object;
    readonly __namespace: string;
    new(): T;
}