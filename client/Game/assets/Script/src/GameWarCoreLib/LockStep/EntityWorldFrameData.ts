import { IComponent } from "../ECS/IComponent";

/**
 * 帧数据快照
 */
export default class EntityWorldFrameData
{
    /**
     * 当前所有的EntityIds快照信息
     */
    public entityIds: Guid[];


    /**
     * 当前所有的Components快照信息
     */
    public components: IComponent[];
    

    constructor(entityIds: Guid[], components: IComponent[])
    {
        this.entityIds = entityIds;
        this.components = components;
    }

    clear()
    {
        this.entityIds.length = 0;
        this.components.length = 0;
        
        this.entityIds = null;
        this.components = null;
    }

    /**
     * 获得一个深度拷贝
     */
    clone():EntityWorldFrameData
    {
        let entityIds:Guid[] = [];
        let components: IComponent[] = [];
        for(let item of this.entityIds)
        {
            entityIds.push(item);
        }

        for(let item of this.components)
        {
            components.push(item.clone());
        }
        

        let data = new EntityWorldFrameData(entityIds, components);
        return data;
    }


}