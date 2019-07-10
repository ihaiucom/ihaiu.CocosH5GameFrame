
import AbstractRenderSimulationBehaviour from "./AbstractRenderSimulationBehaviour";
import { IUpdate } from "../RenderComponent";

export default class RenderUpdateBehaviour extends AbstractRenderSimulationBehaviour
{
    private components: IUpdate[] = [];
    private willAdds: IUpdate[] = [];
    private willRemoves: IUpdate[] = [];

    register(component: IUpdate)
    {
        if(!component.onUpdate)
            return;

        if(this.components.indexOf(component) == -1 && this.willAdds.indexOf(component) == -1)
        {
            this.willAdds.push(component);
        }
    }

    unregister(component: IUpdate)
    {
        if(!component.onUpdate)
            return;

        if(this.willRemoves.indexOf(component) == -1)
        {
            this.willRemoves.push(component);
        }
    }

    update(): void 
    {
        for(let com of this.components)
        {
            com.onUpdate();
        }

        for(let com of this.willAdds)
        {
            if(this.components.indexOf(com) == -1)
            {
                this.components.push(com);
            }
        }

        
        for(let com of this.willRemoves)
        {
            arrayRemoveItem(this.components, com);
        }

        this.willAdds.length = 0;
        this.willRemoves.length = 0;
    }
}