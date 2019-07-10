export default class InstanceUtil<T>
{
    static getInstance<T>(cls: any): T
    {

        if(!cls["__instance"])
        {
            cls["__instance"] = new cls();
        }
        return cls["__instance"];
    }
}