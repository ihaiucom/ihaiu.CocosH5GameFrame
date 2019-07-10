
import AbstractRenderSimulationBehaviour from "./AbstractRenderSimulationBehaviour";
import { ILateUpdate } from "../RenderComponent";

export default class RenderLastUpdateBehaviour extends AbstractRenderSimulationBehaviour
{
    private components: ILateUpdate[] = [];
    private willAdds: ILateUpdate[] = [];
    private willRemoves: ILateUpdate[] = [];

    register(component: ILateUpdate)
    {
        if(!component.onLateUpdate)
            return;

        if(this.components.indexOf(component) == -1 && this.willAdds.indexOf(component) == -1)
        {
            this.willAdds.push(component);
        }
    }

    unregister(component: ILateUpdate)
    {
        if(!component.onLateUpdate)
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
            com.onLateUpdate();
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