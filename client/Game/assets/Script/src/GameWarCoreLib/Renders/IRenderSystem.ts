import RenderSimulation from "./RenderSimulation";

export interface IRenderSystem
{
    renderSimulation: RenderSimulation;
    execute():void;
}