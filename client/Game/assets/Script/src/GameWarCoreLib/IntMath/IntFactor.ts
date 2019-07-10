import IntMath from "./IntMath";

export default class IntFactor {
    public numerator:number; //分子
    public denominator:number; //分母

    constructor(numerator:number, denominator:number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
  
    public static get zero():IntFactor{
        return new IntFactor(0, IntMath.BaseCalFactor);
    }
    public static get one():IntFactor{
        return new IntFactor(IntMath.BaseCalFactor, IntMath.BaseCalFactor);
    }
    public static get pi():IntFactor{
        return new IntFactor(31416, IntMath.BaseCalFactor);
    }

    public get intNumerator():number{
        return this.numerator;
    }

    public get double():number{
        return this.numerator / this.denominator;
    }

    public get integer():number {
        return IntMath.DivideFloor(this.numerator, this.denominator);
    }

    public SetNumerator(d:number){
        this.numerator = d;
    }

    public SetDenominator(d:number){
        if (d <= 0){
            return;
        }
        if (d == this.denominator){
            return;
        }
        if (d < this.denominator){
            let tmpCount = IntMath.DivideFloor(this.denominator, d);
            this.denominator = d;
            this.numerator = IntMath.DivideFloor(this.numerator, tmpCount);
        } else {
            let tmpCount = IntMath.DivideFloor(d, this.denominator);
            this.denominator = d;
            this.numerator = this.numerator * tmpCount;
        }
    }

    public Add(b:IntFactor):IntFactor{
        return new IntFactor(
            this.numerator * b.denominator + b.numerator * this.denominator,
            this.denominator * b.denominator
        );
    }

    public Sub(b:IntFactor):IntFactor{
        return new IntFactor(
            this.numerator * b.denominator - b.numerator * this.denominator,
            this.denominator * b.denominator
        );
	}

    
    public Mul(f2:IntFactor):IntFactor {
        return new IntFactor(IntMath.Divide(this.numerator*f2.numerator,f2.denominator), f2.denominator);
    }

    public MulInt(f2:number):IntFactor {        
        return new IntFactor(this.numerator*f2, this.denominator);
    }

}
