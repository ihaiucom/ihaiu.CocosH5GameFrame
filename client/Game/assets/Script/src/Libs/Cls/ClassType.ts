import { AssemblyNamespace } from "./AssemblyNamespace";

/** 类信息 */
export interface ClassType extends ObjectConstructor
{
    tag?: string;
  readonly name: string;
  readonly prototype: object;
  readonly __namespace: string | AssemblyNamespace;
}
