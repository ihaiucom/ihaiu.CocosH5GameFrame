import AbstractEntitySystem from "../../../GameWarCoreLib/ECS/AbstractEntitySystem";
import { EntityLifeState } from "../../../GameWarCoreLib/ECS/Entity";

export default class RemoveEntitySystem extends AbstractEntitySystem
{
    execute()
    {
        let entitys = this.entityWorld.getEntities();
        if(entitys != null)
        {
            for(let i = entitys.length - 1; i > -1; --i)
            {
                let entity = entitys[i];
                if(entity.lifeState == EntityLifeState.Remove)
                {
                    this.entityWorld.notifyRemoveEnity(entity.guid);
                }
            }
        }
    }
}