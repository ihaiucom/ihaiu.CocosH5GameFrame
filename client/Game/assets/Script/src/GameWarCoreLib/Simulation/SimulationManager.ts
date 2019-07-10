import Simulation from "./Simulation";

export default class SimulationManager
{
    private static _instance:SimulationManager;
    public static get Instance(): SimulationManager
    {
        if(!this._instance)
            this._instance = new SimulationManager();
        return this._instance;
    }

    private simulations: Simulation[] = [];
    private isRuning = false;

    containSimulation(simulation: Simulation): boolean
    {
        return this.simulations.indexOf(simulation) != -1;
    }

    getSimulation(simulationId: int): Simulation
    {
        for(let i = 0, len = this.simulations.length; i < len; i ++)
        {
            if(this.simulations[i].simulationId == simulationId)
                return this.simulations[i];
        }
        return null;
    }

    addSimulation(simulation: Simulation)
    {
        if(!this.containSimulation(simulation))
            this.simulations.push(simulation);
    }

    removeSimulation(simulation: Simulation)
    {
        arrayRemoveItem(this.simulations, simulation);
    }

    removeSimulationById(simulationId: int)
    {
        let simulation = this.getSimulation(simulationId);
        if(simulation != null)
        {
            this.removeSimulation(simulation);
        }
    }






    start()
    {
        this.isRuning = true;
        
        for(let i = 0, len = this.simulations.length; i < len; i ++)
        {
            this.simulations[i].start();
        }

        Laya.timer.frameLoop(1, this, this.run);
    }

    stop()
    {
        this.isRuning = false;
        Laya.timer.clearAll(this);
    }

    run()
    {
        for(let i = 0, len = this.simulations.length; i < len; i ++)
        {
            this.simulations[i].run();
        }
    }






}