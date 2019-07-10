import IntAcosTable from './IAcosTable';
import IntFactor from './IntFactor';
import IVector2 from './IVector2';
import ISinCosTable from './ISinCosTable';
import IAsinTable from './IAsinTable';
import IVector3 from './IVector3';

export default class IntMath {
    public static assert:boolean=true;
    public static seed = 5;
    public static BaseScalarFactor:number = 0.0001;
    public static BaseCalFactor:number = 10000;
    public static HalfCalFactor:number = 5000;
	public static Deg2Rad:IntFactor = new IntFactor(175,10000);
    public static Rad2Deg:IntFactor = new IntFactor(572958,10000);
    public static AngleMax:number = 3600000;
	public static HalfAngleMax:number = 1800000;
    public static QuarterAngleMax:number = 900000;

  
    public static Clamp(a:number, min:number, max:number):number{
        if (a < min) {
            return min;
        }
        if (a > max){
            return max;
        }
        return a;
    }

    public static Divide(a:number, b:number):number{
        return Math.round(a / b);
    }

    public static DivideCeil(a:number, b:number):number{
        return Math.ceil(a / b);                 
    }

    public static DivideFloor(a:number, b:number):number{
        return Math.floor(a / b);          
    }

    public static Sqrt(a:number):number {
        return Math.round(Math.sqrt(a));
    }


    public static Sign(value:number):number{
		return value >= 0 ? 1 : -1;
    }

    public static Abs(value:number):number{
		return value >= 0 ? value : -value;
    }
    
    public static Sin(nom:number, den:number):IntFactor
    {
        let index = ISinCosTable.GetIndex(nom, den);
        return new IntFactor(ISinCosTable.table[index], ISinCosTable.FACTOR);
    }

    public static Cos(nom:number, den:number):IntFactor
    {
        let index = ISinCosTable.GetIndex(nom, den);
        return new IntFactor(ISinCosTable.cos_table[index], ISinCosTable.FACTOR);
    }

    public static Acos(nom:number, den:number):IntFactor{
        let num = IntMath.Divide(nom * IntAcosTable.HALF_COUNT, den) + IntAcosTable.HALF_COUNT;
        num = IntMath.Clamp(num, 0, IntAcosTable.COUNT);
        return new IntFactor(IntAcosTable.table[num], IntMath.BaseCalFactor);
    }

    public static Asin(nom:number, den:number):IntFactor {
        let num = IntMath.Divide(nom * IAsinTable.HALF_COUNT, den) + IAsinTable.HALF_COUNT;
        num = IntMath.Clamp(num, 0, IAsinTable.COUNT);
        return new IntFactor(IAsinTable.table[num], IntMath.BaseCalFactor);
    }

    public static AngleIntRad(lhs:IVector2, rhs:IVector2):IntFactor{
        return IntMath.Acos(lhs.Dot(rhs), lhs.magnitude * rhs.magnitude);
    }

    public static ClampAngleTo180(a:IntFactor):IntFactor{
        if (a.intNumerator > 0 && a.intNumerator > IntMath.HalfAngleMax){
            a.numerator = a.intNumerator - IntMath.AngleMax;
        } else if (a.intNumerator < 0 && a.intNumerator < -IntMath.HalfAngleMax) {
            a.numerator = a.intNumerator + IntMath.AngleMax;
        }
        return a;
    }

    public static AngleInt(lhs:IVector2, rhs:IVector2):number {
        let radValue = IntMath.AngleIntRad(lhs, rhs);
        let tmpValue = radValue.Mul(IntMath.Rad2Deg);
        return Math.abs(IntMath.ClampAngleTo180(tmpValue).integer);
    }
 
    public static  DivideVec33(a:IVector3, m:number, b:number):IVector3{
        a.x = IntMath.Divide(a.x * m, b);
        a.y = IntMath.Divide(a.y * m, b);
        a.z = IntMath.Divide(a.z * m, b);
        return a;
    }

    public static DivideVec23(a:IVector2, m:number, b:number):IVector2{
        a.x = IntMath.Divide(a.x * m, b);
        a.y = IntMath.Divide(a.y * m, b);
        return a;
    }

    public static DivideVec32(a:IVector3, b:number):IVector3{
        a.x = IntMath.Divide(a.x, b);
        a.y = IntMath.Divide(a.y, b);
        a.z = IntMath.Divide(a.z, b);
        return a;
    }

    public static DivideVec22(a:IVector2, b:number):IVector2{
        a.x = IntMath.Divide(a.x, b);
        a.y = IntMath.Divide(a.y, b);
        return a;
    }

    
    public static Random(min:number, max:number){ 
        max = max || 10000;
        min = min || 0;
        IntMath.seed = (IntMath.seed * 9301 + 49297) % 233280; 
        var rnd = IntMath.Divide(IntMath.seed * IntMath.BaseCalFactor, 233280);
        return min + IntMath.Divide(rnd * (max - min), IntMath.BaseCalFactor);
    }


    public static Repeat(t:number, length:number):number
    {
        return t - IntMath.DivideFloor(t,length) * length;
    }

    public static DeltaAngle(current:number, target:number):number
    {
        let num = IntMath.Repeat(target - current, 3600000);
        if (num > 1800000) {
            num -= 3600000;
        }
        return num;
    }
    public static MoveTowards(current:number, target:number, maxDelta:number):number
    {
        if (Math.abs(target - current) <= maxDelta)
        {
            return target;
        }
        return current + IntMath.Sign(target - current) * maxDelta;
    }
    public static MoveTowardsAngle(current:number, target:number, maxDelta:number) {
        let num = IntMath.DeltaAngle(current, target);
        if (0 - maxDelta < num && num < maxDelta){
            return target;
        }
        target = current + num;
        return IntMath.MoveTowards(current, target, maxDelta);
    }



    public static RoundToInt(x: float)
    {
        if(x > 0.0)
        {
            return Math.floor(x + 0.5);
        }

        return Math.floor(x - 0.5);
    }
}
