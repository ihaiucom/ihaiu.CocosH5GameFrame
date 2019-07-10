import { IComponent } from "./IComponent";
import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";
import Engine from "../../EngineAdapter/Engine";

export default abstract class AbstractComponent implements IComponent 
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.EComponents;

    /**
     * 实体ID
     */
    entityId:Guid;

    /**
     * 命令ID
     */
    getCommand():int
    {
        return 0;
    }

    /**
     * 深度拷贝
     */
    clone():IComponent
    {
        return null;
    }

    /**
     * 初始化
     */
    init(): void
    {
    }

    /**
     * 重置
     */
    onPoolRecover(): void
    {
    }

    /** 从对象池哪对象 */
    static PoolGet<T>():T
    {
        return Engine.Pool.createByClass(this);
    }

    /** 返回给对象池 */
    poolRecover()
    {
        this.onPoolRecover();
        Engine.Pool.recoverByClass(this);
    }

}