import RenderComponent from "./GameWarCoreLib/Renders/RenderComponent";
import RenderSimulation from "./GameWarCoreLib/Renders/RenderSimulation";
import { SimulationID } from "./GameWarCoreLib/Simulation/SimulationID";
import Simulation from "./GameWarCoreLib/Simulation/Simulation";
import RenderSimulationManaager from "./GameWarCoreLib/Renders/RenderSimulationManaager";
import SimulationManager from "./GameWarCoreLib/Simulation/SimulationManager";
import RenderUpdateBehaviour from "./GameWarCoreLib/Renders/Behaviours/RenderUpdateBehaviour";
import RenderLastUpdateBehaviour from "./GameWarCoreLib/Renders/Behaviours/RenderLastUpdateBehaviour";
import RenderSystemBehaviour from "./GameWarCoreLib/Renders/Behaviours/RenderSystemBehaviour";
import MoveRenderSystem from "./GameWarCore/Renders/RenderSystems/MoveRenderSystem";
import EntitySystemBehaviour from "./GameWarCoreLib/Simulation/Behaviours/EntitySystemBehaviour";
import LogicFrameBehaviour from "./GameWarCoreLib/Simulation/Behaviours/LogicFrameBehaviour";
import RollbackBehaviour from "./GameWarCoreLib/Simulation/Behaviours/RollbackBehaviour";
import InputBehaviour from "./GameWarCore/Behaviours/InputBehaviour";
import EntityComponentBackupBehaviour from "./GameWarCoreLib/Simulation/Behaviours/EntityComponentBackupBehaviour";
import MoveEntitySystem from "./GameWarCore/ECS/EntitySystems/MoveEntitySystem";
import Entity from "./GameWarCoreLib/ECS/Entity";
import FrameIdInfo from "./GameWarCoreLib/LockStep/FrameIdInfo";
import RemoveEntitySystem from "./GameWarCore/ECS/EntitySystems/RemoveEntitySystem";
import ServerBehaviour from "./GameWarCoreLib/Simulation/Behaviours/ServerBehaviour";
import SpawnViewBehaviour from "./GameWarCore/Renders/Behaviours/SpawnViewBehaviour";
import SpawnEntityBehaviour from "./GameWarCore/Behaviours/SpawnEntityBehaviour";

export default class TestECS extends Laya.Sprite
{
    constructor()
    {
        super();

        this.initSimulation();
    }

    initSimulation()
    {
        let simulation = new Simulation(SimulationID.CLIENT_LOGIC);
        simulation.addBehaviour(new LogicFrameBehaviour());
        simulation.addBehaviour(new RollbackBehaviour());
        simulation.addBehaviour(new EntitySystemBehaviour());
        simulation.addBehaviour(new InputBehaviour());
        simulation.addBehaviour(new EntityComponentBackupBehaviour());
        simulation.addBehaviour(new ServerBehaviour());
        simulation.addBehaviour(new SpawnEntityBehaviour());
        

        // Entity System
        
        let moveSystem = new MoveEntitySystem();
        let removeSystem = new RemoveEntitySystem();

        let systemBehaviour = simulation.getBehaviour(EntitySystemBehaviour);

        systemBehaviour
                        .addSystem(moveSystem)
                        .addSystem(removeSystem);

        // Rollbac Entity System
        simulation.getBehaviour(RollbackBehaviour)
                        .addSystem(moveSystem);
        

        // Render
        let renderSimulation = new RenderSimulation(SimulationID.CLIENT_RENDER, simulation);
        renderSimulation.addBehaviour(new RenderUpdateBehaviour())
                        .addBehaviour(new RenderLastUpdateBehaviour())
                        .addBehaviour(new RenderSystemBehaviour())
                        .addBehaviour(new SpawnViewBehaviour());

        // Render System               
        renderSimulation.getBehaviour(RenderSystemBehaviour)
                                    .addSystem(new MoveRenderSystem());



        
        SimulationManager.Instance.addSimulation(simulation);
        RenderSimulationManaager.Instance.addSimulation(renderSimulation);

        SimulationManager.Instance.start();
        RenderSimulationManaager.Instance.start();
    }
}
