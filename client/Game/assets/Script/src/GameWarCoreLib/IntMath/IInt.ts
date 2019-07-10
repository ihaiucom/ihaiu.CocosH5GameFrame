import IntMath from "./IntMath";

export default class IInt
{
    public i: int = 0;
    

    get scalar(): float
    {
        // i * 0.0001
        return this.i * IntMath.BaseScalarFactor;
    }

    
    constructor(i: int = 0)
    {
        this.i = i;
    }

    SetFloat(f: float)
    {
        this.i = IntMath.RoundToInt( f * IntMath.BaseCalFactor );
    }

    Equals(o: IInt): boolean
    {
        if(o === null || o === undefined)
        {
            return false;
        }

        return this.i == o.i;
    }

    toString()
    {
        return this.scalar.toString();
    }

    static Min(a: IInt, b: IInt):IInt
    {
        return new IInt(Math.min(a.i, b.i));
    }

    static Max(a: IInt, b: IInt):IInt
    {
        return new IInt(Math.max(a.i, b.i));
    }

}