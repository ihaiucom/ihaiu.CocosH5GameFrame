import EntityWorld from "./EntityWorld";

export interface IEntitySystem
{
    entityWorld: EntityWorld;
    execute():void;
}