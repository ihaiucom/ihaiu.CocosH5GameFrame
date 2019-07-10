import EntityWorld from "./EntityWorld";
import UID from "./UID";
import { IComponent, ComponentClass } from "./IComponent";
/**
 * 生命状态
 */
export enum EntityLifeState
{
    /** 将要从World中移除，或者已经移除 */
    Remove = 0,
    /** 活动状态 */
    Activity = 1
}

/**
 * 实体
 */
export default class Entity
{
    public guid: Guid = -1;
    public world: EntityWorld;

    public isActive: boolean = true;
    public lifeState: EntityLifeState = EntityLifeState.Activity;

    constructor()
    {
        this.guid = UID.uid();
    }

    
    public setGuid(guid: Guid): Entity
    {
        this.guid = guid;
        return this;
    }

    public init(guid?: Guid): Entity
    {
        if(guid)
            this.guid = guid;

        this.isActive = true;
        this.lifeState = EntityLifeState.Activity;
        return this;
    }

    public onPoolRecover(): Entity
    {
        this.guid = UID.uid();
        this.isActive = false;
        this.lifeState = EntityLifeState.Remove;
        return this;
    }



    public containComponent(component: IComponent)
    {
        let com = this.getComponent(<any>component.constructor);
        return com != null;
    }

    
    public containComponentByType<T extends IComponent>(componentClass: ComponentClass<T>): boolean
    {
        return this.getComponent(componentClass) != null;
    }

    public getComponent<T extends IComponent>(componentClass: ComponentClass<T>): T 
    {
        return this.world.getComponentByEntityId(this.guid, componentClass)
    }


    public addComponent(component: IComponent): Entity
    {
        if(!this.containComponent(component))
        {
            component.entityId = this.guid;
            this.world.addComponent(component);
        }
        return this;
    }

    public removeComponent(component: IComponent)
    {
        if(this.containComponent(component))
        {
            this.world.removeComponent(component);
            component.entityId = -1;
        }
    }
}