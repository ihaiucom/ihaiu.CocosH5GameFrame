import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";

/**
 * 组件数据
 */
export interface IComponent
{
    /**
     * 实体ID
     */
    entityId:Guid;

    /**
     * 命令ID
     */
    getCommand():int;

    /**
     * 深度拷贝
     */
    clone():IComponent;

    /**
     * 初始化
     */
    init(): void;

    /**
     * 重置
     */
    onPoolRecover(): void;

    
    /** 返回给对象池 */
    poolRecover():void;
}

/**
 * 参数可更新
 */
export interface IParamsUpdatable
{
    updateParams(params: any[]): void;
}



/** 组件类信息 */
export interface ComponentClass<T extends IComponent>
{
    readonly name: string;
    readonly prototype: object;
    readonly __namespace: string;
    new(): T;
}