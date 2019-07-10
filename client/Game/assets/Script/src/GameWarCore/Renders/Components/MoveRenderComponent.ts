import RenderComponent from "../../../GameWarCoreLib/Renders/RenderComponent";
import Entity from "../../../GameWarCoreLib/ECS/Entity";
import TransformComponent from "../../ECS/Components/TransformComponent";
import MoveComponent from "../../ECS/Components/MoveComponent";

export default class MoveRenderComponent extends RenderComponent
{
    onRender(entity: Entity)
    {
        let transform = entity.getComponent(TransformComponent);

        if(transform != null)
        {
            let sprite: Laya.Sprite = <any> this.owner;
            sprite.x = Laya.MathUtil.lerp(sprite.x, transform.position.x, 40 / 1000);
            sprite.y = Laya.MathUtil.lerp(sprite.y, transform.position.y, 40 / 1000);
        }
    }
}