import AbstractEntitySystem from "../../../GameWarCoreLib/ECS/AbstractEntitySystem";
import MoveComponent from "../Components/MoveComponent";
import AbstractComponent from "../../../GameWarCoreLib/ECS/AbstractComponent";
import TransformComponent from "../Components/TransformComponent";

export default class MoveEntitySystem extends AbstractEntitySystem
{
    execute()
    {
        let list = this.entityWorld.getComponents(MoveComponent);

        if(list != null)
        {
            for(let com of list)
            {
                let tran = this.entityWorld.getComponentByEntityId(com.entityId, TransformComponent);
                if(tran != null)
                {
                    tran.translate(com.getPathV2());
                }
            }
        }
    }
}