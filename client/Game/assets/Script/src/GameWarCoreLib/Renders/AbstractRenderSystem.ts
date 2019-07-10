import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";
import { IRenderSystem } from "./IRenderSystem";
import RenderSimulation from "./RenderSimulation";
import EntityWorld from "../ECS/EntityWorld";
import RenderWorld from "./RenderWorld";

export default abstract class AbstractRenderSystem implements IRenderSystem 
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.RenderSystems;

    renderSimulation: RenderSimulation;

    get entityWorld(): EntityWorld
    {
        if(this.renderSimulation)
        {
            return this.renderSimulation.entityWorld;
        }
        return null;
    }

    get renderWorld(): RenderWorld
    {
        if(this.renderSimulation)
        {
            return this.renderSimulation.renderWorld;
        }
        return null;
    }

    execute(): void 
    {
    }
}