
import { ClassType } from "./ClassType";
import { AssemblyNamespace } from "./AssemblyNamespace";



export default class Assembly
{
    private static __namespace: UnOrderMultiMap<string, ClassType>;
    private static get _namespace():UnOrderMultiMap<string, ClassType>
    {
        if(!this.__namespace)
        {
            this.__namespace = new UnOrderMultiMap<string, ClassType>();
        }
        return this.__namespace;
    }

    public static register(classType: ClassType, name: string)
    {
        classType.tag = name;
        this._namespace.addItem(classType.__namespace, classType);
    }

    public static get(namespaceName: AssemblyNamespace): ClassType[]
    {
        return this._namespace.get(namespaceName);
    }
    
}

window['Assembly'] = Assembly;
