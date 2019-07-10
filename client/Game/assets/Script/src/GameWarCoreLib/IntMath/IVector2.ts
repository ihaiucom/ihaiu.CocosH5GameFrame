import IntMath from './IntMath';
import IntFactor from './IntFactor';

export default class IVector2
{
    public x:number = 0;
    public y:number = 0;
    public constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

     

    public get sqrMagnitude():number{
		return this.x * this.x + this.y * this.y;
	}

    public get magnitude():number {
        return IntMath.Sqrt(this.sqrMagnitude);
    }

    public Dot(b:IVector2):number {
        return this.x * b.x + this.y * b.y;
    } 

    public Dup():IVector2{
        return new IVector2(this.x, this.y);
    } 
    
    
    public Add(b:IVector2):IVector2{
        return new IVector2(this.x + b.x, this.y + b.y);
    }

    public AddSelf(b:IVector2):IVector2{
        this.x += b.x;
        this.y += b.y;
        return this;
    }

    public DivSelf(n:number):IVector2{
        this.x = IntMath.Divide(this.x, n);
        this.y = IntMath.Divide(this.y, n);
        return this;
    }

    public NormalizeSelf():IVector2 {  
        let num = this.x * 100;
	    let num2 = this.y * 100;
	    let num3 = num * num + num2 * num2;
        if(num3 == 0){
            return this;
        }
        let b = IntMath.Sqrt(num3);
		this.x = IntMath.Divide(num * IntMath.BaseCalFactor, b);
        this.y = IntMath.Divide(num2 * IntMath.BaseCalFactor, b);
        return this;
    }

    public get normalizeSelf():IVector2 {  
        return this.NormalizeSelf();
    }

    public Normalize():IVector2 {  
        let num = this.x * 100;
	    let num2 = this.y * 100;
	    let num3 = num * num + num2 * num2;
        if(num3 == 0){
            return IVector2.zero;
        }
        let b = IntMath.Sqrt(num3);
		let x = IntMath.Divide(num * IntMath.BaseCalFactor, b);
        let y = IntMath.Divide(num2 * IntMath.BaseCalFactor, b);
        return new IVector2(x, y)
    }

    public Mul(f:IntFactor):IVector2 {
        let ivec = new IVector2(this.x, this.y);
        return IntMath.DivideVec23(ivec, f.numerator, f.denominator);
    }

    public MulSelf(f:IntFactor):IVector2 {
        return IntMath.DivideVec23(this, f.numerator, f.denominator);
    }

    public Sub(b:IVector2):IVector2 {
        return new IVector2(this.x - b.x, this.y - b.y);
    }

    public SubSelf(b:IVector2):IVector2 {
        this.x -= b.x;
        this.y -= b.y;
        return this;
    }

    public MulInt(f:number):IVector2 {
        return new IVector2(this.x * f, this.y * f);
    }

    public MulIntSelf(f:number):IVector2 {
        this.x *= f;
        this.y *= f;
        return this;
    }

    public static get zero():IVector2{
        return new IVector2(0, 0);
    }
    public static get forward():IVector2 {
        return new IVector2(0, IntMath.BaseCalFactor);
    }
    public static get left():IVector2 {
        return new IVector2(-IntMath.BaseCalFactor, 0);
    }
    public static get right():IVector2 {
        return new IVector2(IntMath.BaseCalFactor, 0);
    }

    toString()
    {
        return `IVector2{x: ${this.x}, y: ${this.y} }`;
    }
}