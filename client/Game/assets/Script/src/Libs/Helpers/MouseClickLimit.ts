import DoubleKeyMap from "./DoubleKeyMap";
import Engine from "../../EngineAdapter/Engine";

export class MouseClickLimitItem
{
    /** 可点击频率 */
    frequencyMillisecond: number = 500;
    /** 最后一次点击时间戳 */
    lastClickTimestamp = 0;
    
    displayObj:fairygui.GObject;
    listenCaller: any;
    listenFun:Function;


    private callFun()
    {
        if(this.listenCaller)
        {
            this.listenFun.apply(this.listenCaller);
        }
        else
        {
            this.listenFun();
        }  
    }

    onClick()
    {
        if(Engine.timer.currTimer - this.lastClickTimestamp > this.frequencyMillisecond)
        {
            this.lastClickTimestamp = Engine.timer.currTimer;
            this.callFun();
        }
    }


    private isStarted = false;
    start(time:number = 100)
    {
        if(this.isStarted)
            return;

        // this.stop();
        this.isStarted = true;
        this.displayObj.onClick(this, this.onClick);
    }

    stop()
    {
        this.isStarted = false;
        if(this.displayObj)
        {
            this.displayObj.offClick(this, this.onClick);
        }
        Engine.timer.clearAll(this);
    }

    clear()
    {
        this.stop();
        this.displayObj = null;
        this.listenCaller = null;
        this.listenFun = null;
        this.frequencyMillisecond = 500;
        this.isStarted = false;

        Engine.Pool.recoverByClass(this);
    }
}

/** 鼠标点击频繁度限制 */
export default class MouseClickLimit 
{
    // displayObj, listenFun, MouseClickLimitItem
   private static dict = new DoubleKeyMap<any, Function, MouseClickLimitItem>();

   static get(displayObj:any, listenCaller: any, listenFun:Function): MouseClickLimitItem
   {
        let item : MouseClickLimitItem= this.dict.getValue(displayObj, listenFun);
        if(item && item.listenCaller == listenCaller)
        {
            return item;
        }
        return null;
   }

   static getOrCreate(displayObj:any, listenCaller: any, listenFun:Function): MouseClickLimitItem
   {
        let item = this.get(displayObj, listenCaller, listenFun);
        if(!item)
        {
            item = Engine.Pool.createByClass(MouseClickLimitItem);
            item.displayObj = displayObj;
            item.listenCaller = listenCaller;
            item.listenFun = listenFun;
            this.dict.add(displayObj, listenFun, item);
        }
        return item;
   }
    

    static onClick(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function, frequencyMillisecond: number = 500)
    {
        let item = this.getOrCreate(fguiObj, listenCaller, listenFun);
        item.frequencyMillisecond = frequencyMillisecond;
        item.start();
    }
    
    static offClick(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function)
    {
        let item = this.get(fguiObj, listenCaller, listenFun);
        if(item)
        {
            this.dict.remove(fguiObj, listenFun);
            item.clear();
        }
    }

}