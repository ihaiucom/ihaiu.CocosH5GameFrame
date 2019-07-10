import IntMath from './IntMath';
import IVector3 from './IVector3';
export default class IQuaternion
{
    public x:number;
    public y:number;
    public z:number;
    public w:number;

    constructor(x:number, y:number, z:number, w:number){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    public static identity:IQuaternion = new IQuaternion(0, 0, 0, IntMath.BaseCalFactor);
    public static EulerYaw(y:number):IQuaternion
    {
        let q = new IQuaternion(0, 0, 0, 0);
        let eulerY = IntMath.Deg2Rad.MulInt(IntMath.DivideFloor(y, 2));
        let cY = IntMath.Cos(eulerY.integer, IntMath.BaseCalFactor);
        let sY = IntMath.Sin(eulerY.integer, IntMath.BaseCalFactor);
        q.x = 0;
        q.y = sY.numerator;
        q.z = 0;
        q.w = cY.numerator;
        return q;
    }

    public static Euler(x:number, y:number, z:number):IQuaternion
    {
        let q = new IQuaternion(0, 0, 0, 0);        
        let eulerX = IntMath.Deg2Rad.MulInt(IntMath.DivideFloor(x, 2));
        let cX = IntMath.Cos(eulerX.integer, IntMath.BaseCalFactor);
        let sX = IntMath.Sin(eulerX.integer, IntMath.BaseCalFactor);
        let eulerY = IntMath.Deg2Rad.MulInt(IntMath.DivideFloor(y, 2));
        let cY = IntMath.Cos(eulerY.integer, IntMath.BaseCalFactor);
        let sY = IntMath.Sin(eulerY.integer, IntMath.BaseCalFactor);
        let eulerZ = IntMath.Deg2Rad.MulInt(IntMath.DivideFloor(z, 2));
        let cZ = IntMath.Cos(eulerZ.integer, IntMath.BaseCalFactor);
        let sZ = IntMath.Sin(eulerZ.integer, IntMath.BaseCalFactor);

        let ix = sX.Mul(cY).Mul(cZ).Sub(cX.Mul(sY).Mul(sZ));
        ix.SetDenominator(IntMath.BaseCalFactor);
        let iy = cX.Mul(sY).Mul(cZ).Add(sX.Mul(cY).Mul(sZ));
        iy.SetDenominator(IntMath.BaseCalFactor);
        let iz = cX.Mul(cY).Mul(sZ).Sub(sX.Mul(sY).Mul(cZ));
        iz.SetDenominator(IntMath.BaseCalFactor);
        let iw = cX.Mul(cY).Mul(cZ).Add(sX.Mul(sY).Mul(sZ));
        iw.SetDenominator(IntMath.BaseCalFactor);

        q.x = ix.numerator;
        q.y = iy.numerator;
        q.z = iz.numerator;
        q.w = iw.numerator;
        return q;
    }


    public MulVector3(v:IVector3):IVector3{
        let x = this.x + this.x;
        let y = this.y + this.y;
        let z = this.z + this.z;
        let xx = IntMath.DivideFloor(this.x * x, IntMath.BaseCalFactor);
        let yy = IntMath.DivideFloor(this.y * y, IntMath.BaseCalFactor);
        let zz = IntMath.DivideFloor(this.z * z, IntMath.BaseCalFactor);
        let xy = IntMath.DivideFloor(this.x * y, IntMath.BaseCalFactor);
        let xz = IntMath.DivideFloor(this.x * z, IntMath.BaseCalFactor);
        let yz = IntMath.DivideFloor(this.y * z, IntMath.BaseCalFactor);
        let wx = IntMath.DivideFloor(this.w * x, IntMath.BaseCalFactor);
        let wy = IntMath.DivideFloor(this.w * y, IntMath.BaseCalFactor);
        let wz = IntMath.DivideFloor(this.w * z, IntMath.BaseCalFactor);

        let res = new IVector3(0, 0, 0);
        res.x = IntMath.DivideFloor((IntMath.BaseCalFactor - (yy + zz)) * v.x
            + (xy - wz) * v.y
            + (xz + wy) * v.z, IntMath.BaseCalFactor);

        res.y = IntMath.DivideFloor((xy + wz) * v.x
            + (IntMath.BaseCalFactor - (xx + zz)) * v.y
            + (yz - wx) * v.z, IntMath.BaseCalFactor);

        res.z = IntMath.DivideFloor((xz - wy) * v.x
            + (yz + wx) * v.y
            + (IntMath.BaseCalFactor - (xx + yy)) * v.z, IntMath.BaseCalFactor);
        return res;
    }

   
   


}
