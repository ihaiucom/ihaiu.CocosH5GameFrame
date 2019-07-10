import { LogLevel } from "./Log";
import Engine from "../../EngineAdapter/Engine";

export default class LogItem
{
	logType: LogLevel;
	msg: string;

	constructor(logType: LogLevel, msg: string)
	{
		this.logType = logType;
		this.msg = msg + "";
    }
    
    
    
    /** 丢回对象池 */
    public poolRecover()
    {
        Engine.Pool.recover(LogItem.POOL_SIGN, this)
    }



    private static POOL_SIGN = "LogItem";
    /** 从对象池里获取对象 */
    public static poolGet():LogItem
    {
        let item = <LogItem> Engine.Pool.getItemByClass(LogItem.POOL_SIGN, LogItem)
        return item;
    }
}