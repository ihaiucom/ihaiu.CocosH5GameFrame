import { IEntitySystem } from "./IEntitySystem";
import EntityWorld from "./EntityWorld";
import { AssemblyNamespace } from "../../Libs/Cls/AssemblyNamespace";

export default abstract class AbstractEntitySystem implements IEntitySystem 
{
    static readonly __namespace: AssemblyNamespace = AssemblyNamespace.ESystems;

    entityWorld: EntityWorld;

    execute(): void 
    {
    }
}