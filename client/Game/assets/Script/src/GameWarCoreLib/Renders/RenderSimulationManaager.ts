import RenderSimulation from "./RenderSimulation";

export default class RenderSimulationManaager
{
    private static _instance:RenderSimulationManaager;
    public static get Instance(): RenderSimulationManaager
    {
        if(!this._instance)
            this._instance = new RenderSimulationManaager();
        return this._instance;
    }

    private simulations: RenderSimulation[] = [];
    private isRuning = false;

    containSimulation(simulation: RenderSimulation): boolean
    {
        return this.simulations.indexOf(simulation) != -1;
    }

    getSimulation(simulationId: int): RenderSimulation
    {
        for(let i = 0, len = this.simulations.length; i < len; i ++)
        {
            if(this.simulations[i].simulationId == simulationId)
                return this.simulations[i];
        }
        return null;
    }

    addSimulation(simulation: RenderSimulation)
    {
        if(!this.containSimulation(simulation))
            this.simulations.push(simulation);
    }

    removeSimulation(simulation: RenderSimulation)
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