import IntMath from './IntMath';
export default class IVector3
{
    public x:number = 0;
    public y:number = 0;
    public z:number = 0;
    public constructor(x:number, y:number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    
   
    public get sqrMagnitude():number{
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

    public get magnitude():number {
        return IntMath.Sqrt(this.sqrMagnitude);
    }

    public Dup():IVector3{
        return new IVector3(this.x, this.y, this.z);
    }

    public static get zero():IVector3{
        return new IVector3(0, 0, 0);
    }
    public static get forward():IVector3{
        return new IVector3(0, 0, IntMath.BaseCalFactor);
    }

}