
import Entity from "../ECS/Entity";
import RenderSimulation from "./RenderSimulation";
import RenderSimulationManaager from "./RenderSimulationManaager";
import { SimulationID } from "../Simulation/SimulationID";
import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";
import RenderUpdateBehaviour from "./Behaviours/RenderUpdateBehaviour";
import RenderLastUpdateBehaviour from "./Behaviours/RenderLastUpdateBehaviour";

export interface IUpdate
{
    onUpdate(): void;
}

export interface ILateUpdate
{
    onLateUpdate(): void;
}

export interface IRenderComponent
{
    /**
     * 实体ID
     */
    entityId:Guid;

    /**
	*重置组件参数到默认值，如果实现了这个函数，则组件会被重置并且自动回收到对象池，方便下次复用
	*如果没有重置，则不进行回收复用
	*此方法为虚方法，使用时重写覆盖即可
	*/
    onReset(): void;
}


/** 组件类信息 */
export interface RenderComponentClass<T extends IRenderComponent>
{
    readonly name: string;
    readonly prototype: object;
    readonly __namespace: string;
    new(): T;
}

export default class RenderComponent extends Laya.Component implements IRenderComponent
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.RenderComponents;


    /**
     * 实体ID
     */
    entityId:Guid;

    protected simulation: RenderSimulation;

    setEntityId(entityId: Guid)
    {
        this.entityId = entityId;
    }

    setSimulation(simulation:RenderSimulation)
    {
        this.simulation = simulation;
    }

    get entity(): Entity
    {
        if(this.simulation == null)
            return null;
        return this.simulation.entityWorld.getEntity(this.entityId);
    }
    
    /**
     * 被添加到节点后调用，可根据需要重写此方法
     * @private
     */
    _onAdded(): void
    {
        if(this.simulation == null)
            this.simulation = RenderSimulationManaager.Instance.getSimulation(SimulationID.CLIENT_RENDER);
        this.onAdded();
    }

    protected _onAwake(): void
    {
        this.onAwake();
    }

    protected _onEnable(): void
    {
        this.onEnable();
        if(this.simulation != null)
        {
            let u: IUpdate = <any> this;
            if(u.onUpdate)
            {
                let updateBehaviour = this.simulation.getBehaviour(RenderUpdateBehaviour);
                if(updateBehaviour != null)
                {
                    updateBehaviour.register(u);
                }
            }
            
            let lu: ILateUpdate = <any> this;
            if(lu.onLateUpdate)
            {
                let updateBehaviour = this.simulation.getBehaviour(RenderLastUpdateBehaviour);
                if(updateBehaviour != null)
                {
                    updateBehaviour.register(lu);
                }
            }

            this.simulation.renderWorld.addComponent(this);
        }
    }
    protected _onDisable(): void
    {
        this.onDisable();
        
        if(this.simulation != null)
        {
            let u: IUpdate = <any> this;
            if(u.onUpdate)
            {
                let updateBehaviour = this.simulation.getBehaviour(RenderUpdateBehaviour);
                if(updateBehaviour != null)
                {
                    updateBehaviour.unregister(u);
                }
            }

            
            let lu: ILateUpdate = <any> this;
            if(lu.onLateUpdate)
            {
                let updateBehaviour = this.simulation.getBehaviour(RenderLastUpdateBehaviour);
                if(updateBehaviour != null)
                {
                    updateBehaviour.unregister(lu);
                }
            }

            this.simulation.renderWorld.removeComponent(this);
        }
    }


    protected _onDestroy(): void
    {
        this.onDestroy();
    }



    /**
	*被添加到节点后调用，可根据需要重写此方法
	*/
    onAdded()
    {
    }
        
    /**
	*创建后只执行一次
	*此方法为虚方法，使用时重写覆盖即可
	*/
    onAwake()
    {
    }

	/**
	*每次启动后执行
	*此方法为虚方法，使用时重写覆盖即可
	*/
    onEnable()
    {
    }

	/**
	*每帧更新时执行
	*此方法为虚方法，使用时重写覆盖即可
	*/
	// onUpdate()
    // {
    // }

	/**
	*每帧更新时执行，在update之后执行
	*此方法为虚方法，使用时重写覆盖即可
	*/
	// onLateUpdate()
    // {
    // }

	/**
	*禁用时执行
	*此方法为虚方法，使用时重写覆盖即可
	*/
	onDisable()
    {
    }

	/**
	*销毁时执行
	*此方法为虚方法，使用时重写覆盖即可
	*/
	onDestroy()
    {
    }

    /**
	*重置组件参数到默认值，如果实现了这个函数，则组件会被重置并且自动回收到对象池，方便下次复用
	*如果没有重置，则不进行回收复用
	*此方法为虚方法，使用时重写覆盖即可
	*/
    onReset()
    {
    }

}
