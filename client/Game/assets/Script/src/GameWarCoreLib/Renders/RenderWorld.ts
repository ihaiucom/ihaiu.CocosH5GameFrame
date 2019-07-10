import UnOrderMultiMap from "../../Libs/Helpers/UnOrderMultiMap";
import { IRenderComponent, RenderComponentClass } from "./RenderComponent";
import Engine from "../../EngineAdapter/Engine";

export default class RenderWorld
{
    //======================
    // 组件
    //----------------------
    /** 所有对应类型的组件 */
    private _components: UnOrderMultiMap<RenderComponentClass<any>, IRenderComponent> = new UnOrderMultiMap<RenderComponentClass<any>, IRenderComponent>();

    /** 所有对应实体的组件 */
    private _entityComponents: UnOrderMultiMap<Guid, IRenderComponent> = new UnOrderMultiMap<Guid, IRenderComponent>();
    
    public static Create():RenderWorld
    {
        return new RenderWorld();
    }

    /** 重置 */
    public reset(): void
    {
        
        let componentTypeList = this._components.GetKeys();
        for(let key of componentTypeList)
        {
            let list = this._components.get(key);
            for(let item of list)
            {
                Engine.Pool.recoverByClass(item);
                item.onReset();
            }
        }

        this._components.clear();
        this._entityComponents.clear();
    }

    /**
     * 获取实体的组件
     */
    public getComponentByEntityId<T extends IRenderComponent>(entityId:Guid, componentClass: RenderComponentClass<T>): T 
    {
        if(this._entityComponents.ContainsKey(entityId))
        {
            let components = this._entityComponents.get(entityId);
            for(let i = components.length - 1; i > -1; --i)
            {
                if(componentClass == components[i].constructor )
                {
                    return <T> components[i];
                }
            }
        }

        return null;
    }
    

    
    /**
     * 获取对应组件类型的组件列表
     */
    public getComponents<T extends IRenderComponent>(cls: RenderComponentClass<T>): T[]
    {
        if(this._components.ContainsKey(cls))
        {
            return <T[]> this._components.get(cls);
        }
        return null;
    }

    
    /**
     * 添加组件
     */
    public addComponent(component:IRenderComponent):void
    {
        let componentClass: RenderComponentClass<any> = <any> component.constructor;
        this._components.addItem(componentClass, component);
        this._entityComponents.addItem(component.entityId, component);
    }

    /**
     * 移除组件
     */
    public removeComponent(component: IRenderComponent):void
    {
        let componentClass: RenderComponentClass<any> = <any> component.constructor;
        this._components.removeItem(componentClass, component);
        this._entityComponents.removeItem(component.entityId, component);
    }
}