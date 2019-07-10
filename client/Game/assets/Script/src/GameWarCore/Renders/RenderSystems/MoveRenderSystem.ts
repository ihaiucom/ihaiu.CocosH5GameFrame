import AbstractEntitySystem from "../../../GameWarCoreLib/ECS/AbstractEntitySystem";
import AbstractComponent from "../../../GameWarCoreLib/ECS/AbstractComponent";
import AbstractRenderSystem from "../../../GameWarCoreLib/Renders/AbstractRenderSystem";
import MoveRenderComponent from "../Components/MoveRenderComponent";

export default class MoveRenderSystem extends AbstractRenderSystem
{
    execute()
    {
        let list = this.renderWorld.getComponents(MoveRenderComponent);

        if(list != null)
        {
            for(let com of list)
            {
                let entity = com.entity;
                if(entity != null)
                    com.onRender(entity);
            }
        }
    }
}