import Dictionary from "../../Libs/Helpers/Dictionary";
import UnOrderMultiMap from "../../Libs/Helpers/UnOrderMultiMap";
import { ClassType } from "../../Libs/Cls/ClassType";
import { IComponent, ComponentClass, IParamsUpdatable } from "./IComponent";
import Entity from "./Entity";
import EntityWorldFrameData from "../LockStep/EntityWorldFrameData";
import KeyFrameCollection from "../LockStep/KeyFrameCollection";
import FrameIdInfo from "../LockStep/FrameIdInfo";
import { EntityFrameCommandId } from "../LockStep/EntityFrameCommandId";
import Typed2Signal from "../../Libs/signals/Typed2Signal";
import TypedSignal from "../../Libs/signals/TypedSignal";
import Engine from "../../EngineAdapter/Engine";

type ComponentClassType = ComponentClass<any>;

export default class EntityWorld
{
    //======================
    // 通知
    //----------------------
    sCreateEntity: Typed2Signal<Entity, FrameIdInfo> = new Typed2Signal<Entity, FrameIdInfo>();
    sRemoveEntity: TypedSignal<Guid> = new TypedSignal<Guid>();

    /** 是否激活状态 */
    public isActive: boolean = true;

    //======================
    // 实体
    //----------------------
    private _entitiesDict: Dictionary<Guid, Entity> = new Dictionary<Guid, Entity>();
    private _entities: Entity[] = [];

    
    //======================
    // 组件
    //----------------------
    /** 所有对应类型的组件 */
    private _components: UnOrderMultiMap<ComponentClassType, IComponent> = new UnOrderMultiMap<ComponentClassType, IComponent>();
    /** 所有对应实体的组件 */
    private _entityComponents: UnOrderMultiMap<Guid, IComponent> = new UnOrderMultiMap<Guid, IComponent>();

    public static Create():EntityWorld
    {
        return new EntityWorld();
    }

    /** 重置 */
    public reset(): void
    {
        for(let entity of this._entities)
        {
            this._entitiesDict.remove(entity.guid);
            entity.onPoolRecover();
            entity.world = null;
            Engine.Pool.recoverByClass(entity);
            entity = null;
        }

        this._entities.length = 0;

        let componentTypeList = this._components.GetKeys();
        for(let key of componentTypeList)
        {
            let list = this._components.get(key);
            for(let item of list)
            {
                item.poolRecover();
            }
        }

        this._components.clear();
        this._entityComponents.clear();
    }

    /**
     * 获取所有实体
     */
    public getEntities(): ReadonlyArray<Entity>
    {
        return Object.freeze(this._entities.slice(0));
    }

    //===================================
    // 组件
    //-----------------------------------

    /**
     * 获取实体的组件
     */
    public getComponentByEntityId<T extends IComponent>(entityId:Guid, componentClass: ComponentClass<T>): T 
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
    public getComponents<T extends IComponent>(cls: ComponentClass<T>): T[]
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
    public addComponent(component:IComponent):void
    {
        let componentClass: ComponentClassType = <any> component.constructor;
        this._components.addItem(componentClass, component);
        this._entityComponents.addItem(component.entityId, component);
    }

    /**
     * 移除组件
     */
    public removeComponent(component: IComponent):void
    {
        let componentClass: ComponentClassType = <any> component.constructor;
        this._components.removeItem(componentClass, component);
        this._entityComponents.removeItem(component.entityId, component);
    }





    //===================================
    // 实体
    //-----------------------------------

    /**
     * 是否包含实体
     */
    public containEntity(entityId: Guid): boolean
    {
        return this._entitiesDict.hasKey(entityId);
    }

    /**
     * 获取实体
     */
    public getEntity(entityId: Guid): Entity
    {
        if(this.containEntity(entityId))
            return this._entitiesDict.getValue(entityId);
        
        return null;
    }

    /**
     * 添加实体
     */
    public addEntity(entityId: Guid): Entity
    {
        if(this.containEntity(entityId))
        {
            return this._entitiesDict.getValue(entityId);
        }

        let entity:Entity = Engine.Pool.createByClass(Entity);
        entity.world = this;
        entity.init(entityId);
        this._entitiesDict.add(entityId, entity);
        this._entities.push(entity);
        return entity;
    }

    /**
     * 移除实体
     */
    public removeEntity(entityId: Guid): boolean
    {
        let entity = this.getEntity(entityId);
        if(entity != null)
        {
            this._entitiesDict.remove(entityId);
            arrayRemoveItem(this._entities, entity);
            this.removeEntityComponentAll(entityId);
            entity.onPoolRecover();
            entity.world = null;
            Engine.Pool.recoverByClass(entity);
            entity = null;
            return true;
        }

        return false;
    }

    /**
     * 移除实体所有组件
     * @param entityId 实体ID
     */
    private removeEntityComponentAll(entityId: Guid)
    {
        if(this._entityComponents.ContainsKey(entityId))
        {
            let components = this._entityComponents.get(entityId);
            for(let i = components.length - 1; i > -1; --i)
            {
                let com = components[i];
                this.removeComponent(com);
                com.poolRecover();
            }
            this._entityComponents.removeList(entityId);
        }
    }


    /**
     * 获取所有实体Id, 排好序的
     */
    public findAllEntitiesIds(): Guid[]
    {
        let ids = [];
        for(let entity of this._entities)
        {
            ids.push(entity.guid);
        }
        ids.sort((a:Guid, b:Guid)=>{return a - b;});
        return ids;
    }

    /**
     * 获取所有组件， 深度克隆的
     */
    public findAlllCloneComponents(): IComponent[]
    {
        let components: IComponent[] = [];
        let types = this._components.GetKeys();
        for(let type of types)
        {
            let list = this._components.get(type);
            for(let com of list)
            {
                components.push(com.clone());
            }
        }

        components.sort((a:IComponent, b:IComponent)=>{ return a.entityId - b.entityId;});
        return components;
    }


    /**
     * 回滚
     */
    public rollBack(frameData: EntityWorldFrameData, collection: KeyFrameCollection)
    {
        this.reset();
        for(let entityId of frameData.entityIds)
        {
            let entity = this.addEntity(entityId);
            for(let com of frameData.components)
            {
                if(com.entityId == entityId)
                {
                    for(let info of collection.keyFrames)
                    {
                        if(info.equalsComponent(com))
                        {
                            
                            let comm:IParamsUpdatable = <IParamsUpdatable> <any>com;
                            if(comm.updateParams)
                            {
                                comm.updateParams(info.params);
                            }
                            else
                            {
                                throw new Error("Component 必须实现 IParamsUpdatable " + com.toString());
                            }
                            break;
                        }
                    }
                    entity.addComponent(com);
                }
            }
        }


        for(let info of collection.keyFrames)
        {
            if(!this.containEntity(info.entityId))
            {
                if(info.cmd == EntityFrameCommandId.SYNC_CREATE_ENTITY)
                {
                    this.notifyCreateEntity(info);
                }
            }
            else
            {
                if(info.cmd == EntityFrameCommandId.SYNC_REMOVE_ENTITY)
                {
                    this.notifyRemoveEnity(info.entityId);
                }
            }
        }
    }

    //====================
    // 广播
    //--------------------
    notifyCreateEntity(info: FrameIdInfo)
    {
        let entity = this.addEntity(info.entityId);
        if(entity != null)
        {
            // 广播创建了实体 CODE
            this.sCreateEntity.dispatch(entity, info);
        }
    }

    notifyRemoveEnity(entityId: Guid)
    {
        this.removeEntity(entityId);
        // 广播移除实体 CODE
        this.sRemoveEntity.dispatch(entityId);
    }











}