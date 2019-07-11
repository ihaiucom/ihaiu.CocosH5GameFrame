class Mathf
{
    /** 小数点多少位 */
    public static  FloatLength(num: number, floatM: number = 100): number
    {
        if(floatM == 0)
        {
            return Math.floor(num);
        }
        return Math.floor(num * floatM) / floatM;
    }


	static clamp(num: number, min: number, max: number)
	{
		return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
	}
	static Clamp01(value: number): number
	{
		if (value < 0.0)
			return 0.0;
		if (value > 1.0)
			return 1;
		return value;
	}


	/// <summary>
	///   <para>Linearly interpolates between a and b by t.</para>
	/// </summary>
	/// <param name="a"></param>
	/// <param name="b"></param>
	/// <param name="t"></param>
	static Lerp(a: number, b: number, t: number): number
	{
		return a + (b - a) * Mathf.Clamp01(t);
	}



	/** 弧度, 计算2个点 */
	public static radian(fromX: number, fromY: number, toX: number, toY: number): number
	{
		let dx = toX - fromX;
		let dy = toY - fromY;
		return Math.atan2(dy, dx);
	}

	
		
	/** 角度, 计算2个点 */
	public static angle(fromX: number, fromY: number, toX: number, toY: number): number
	{
		return this.radian(fromX, fromY, toX, toY) * 180 / Math.PI ;
	}

	
	/** 角度 转 弧度 */
	public static angleToRadian(angle: number): number
	{
		return angle * Math.PI / 180;
	}
	
	
	/** 弧度 转 角度 */
	public static radianToAngle(radian: number): number
	{
		return radian * 180 / Math.PI;
	}
	
	/** 距离, 计算2个点 */
	public static distanceangle(fromX: number, fromY: number, toX: number, toY: number): number
	{
		let dx = toX - fromX;
		let dy = toY - fromY;
		return Math.sqrt(dx * dx + dy * dy);
	}
	
	public static directionPointX(fromX: number, fromY: number, toX: number, toY: number,  length:number): number
	{
		return Math.cos(this.radian(fromX, fromY, toX, toY)) * length + fromX ;
	}
	
	public static directionPointY(fromX: number, fromY: number, toX: number, toY: number,  length:number): number
	{
		return Math.sin(this.radian(fromX, fromY, toX, toY)) * length + fromY ;
	}

	
	/** 弧度方向 点 */
	public static radianPointX(radian: number, length: number, fromX: number): number
	{
		return Math.cos(radian) * length + fromX ;
	}
	
	public static radianPointY(radian: number, length: number, fromY: number): number
	{
		return Math.sin(radian) * length + fromY ;
	}

	
	
	/** 弧度方向 点 */
	public static anglePointX(angle: number, length: number, fromX: number): number
	{
		return Math.cos(this.angleToRadian(angle)) * length + fromX ;
	}
	
	public static anglePointY(angle: number, length: number, fromY: number): number
	{
		return Math.sin(this.angleToRadian(angle)) * length + fromY ;
	}

	



}