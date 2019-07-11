namespace Engines
{
    export class Timer
    {
        static _pool: TimerHandler[] = [];
        static _mid: number = 1;


        /** 时针缩放。*/
        scale: number = 1;
        /** 当前帧开始的时间。*/
        currTimer: number = 0;
        /** 当前的帧数。*/
        currFrame: number = 0;
        /** 两帧之间的时间间隔,单位毫秒。*/
        private _delta: number = 0;

        private _lastTimer: number;
        private _handlers: TimerHandler[] = [];
        private _count: number = 0;
        
        private _temp: TimerHandler[] = []; 
        private _map: TimerHandler[] = [];

        
        /**两帧之间的时间间隔,单位毫秒。*/
        get delta(): number
        {
            return this._delta;
        }

        /**
         * 创建 <code>Timer</code> 类的一个实例。
         */
        constructor(autoActive?: boolean)
        {
            (autoActive === void 0) && (autoActive = true);


            this.currTimer = Date.now();
            this._lastTimer = Date.now();

            if(autoActive)
            {
                var scheduler = cc.director.getScheduler();
                scheduler.schedule(this._update, this, 1);
            }
        }


        /**
         * @private
         * 帧循环处理函数。
         */
        private _update(): void
        {
            if(this.scale <= 0)
            {
                this._lastTimer = Date.now();
                return;
            }

            let frame = this.currFrame = this.currFrame + this.scale;
            let now = Date.now();
            this._delta = (now - this._lastTimer) * this.scale;
            var timer=this.currTimer=this.currTimer+this._delta;
            this._lastTimer=now;
            var handlers=this._handlers;
            this._count=0;

            
            for (var i=0,n=handlers.length;i < n;i++)
            {
                var handler=handlers[i];
                if (handler.method!==null)
                {
                    var t=handler.userFrame ? frame :timer;

                    if (t >=handler.exeTime)
                    {
                        if (handler.repeat)
                        {
                            if (!handler.jumpFrame)
                            {
                                handler.exeTime+=handler.delay;
                                handler.run(false);

                                if (t > handler.exeTime)
                                {
                                    handler.exeTime+=Math.ceil((t-handler.exeTime)/ handler.delay)*handler.delay;
                                }
                            }
                            else 
                            {
                                while (t >=handler.exeTime)
                                {
                                    handler.exeTime+=handler.delay;
                                    handler.run(false);
                                }
                            }
                        }
                        else 
                        {
                            handler.run(true);
                        }
                    }
                    }else {
                    this._count++;
                }
            }

            if (this._count > 30 || frame % 200===0)this._clearHandlers();
        }

        private _clearHandlers()
        {
            var handlers=this._handlers;
            for (var i=0, n=handlers.length; i < n; i++)
            {
                var handler=handlers[i];

                if (handler.method!==null)
                    this._temp.push(handler);
                else 
                    this._recoverHandler(handler);
            }

            this._handlers=this._temp;
            handlers.length=0;
            this._temp=handlers;

        }

        private _recoverHandler(handler: TimerHandler)
        {
            if (this._map[handler.key]==handler)
                this._map[handler.key]=null;

            handler.clear();
            Timer._pool.push(handler);
        }

        private _create(useFrame: boolean, repeat: boolean, delay: number, caller: any, method: Function, args: Array<any>, coverBefore: boolean): TimerHandler
        {
            if (!delay)
            {
                method.apply(caller,args);
                return null;
            }

            if (coverBefore)
            {
                var handler=this._getHandler(caller,method);
                if (handler)
                {
                    handler.repeat=repeat;
                    handler.userFrame=useFrame;
                    handler.delay=delay;
                    handler.caller=caller;
                    handler.method=method;
                    handler.args=args;
                    handler.exeTime=delay+(useFrame ? this.currFrame :this.currTimer+Date.now()-this._lastTimer);
                    return handler;
                }
            }

            handler = Timer._pool.length > 0 ? Timer._pool.pop():new TimerHandler();
            handler.repeat=repeat;
            handler.userFrame=useFrame;
            handler.delay=delay;
            handler.caller=caller;
            handler.method=method;
            handler.args=args;
            handler.exeTime=delay+(useFrame ? this.currFrame :this.currTimer+Date.now()-this._lastTimer);
            this._indexHandler(handler);
            this._handlers.push(handler);
            return handler;
        }

        private _getHandler(caller: any, method: Function)
        {
            var cid=caller ? caller.$_GID || (caller.$_GID = Gid.getGID()):0;
            
            var mid=method['$_TID'] || (method['$_TID']=(Timer._mid++)*100000);
            return this._map[cid+mid];
        }

        private _indexHandler(handler: TimerHandler)
        {
            
            var caller=handler.caller;
            var method=handler.method;
            var cid=caller ? caller.$_GID || (caller.$_GID=Gid.getGID()):0;
            var mid=method['$_TID'] || (method['$_TID']=(Timer._mid++)*100000);
            handler.key=cid+mid;
            this._map[handler.key]=handler;
        }


        /**
         * 定时执行一次。
         * @param	delay	延迟时间(单位为毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        once(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void
        {
            (coverBefore===void 0)&& (coverBefore=true);
            this._create(false,false,delay,caller,method,args,coverBefore);
        }

        /**
         * 定时重复执行。
         * @param	delay	间隔时间(单位毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
         */
        loop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean, jumpFrame?: boolean): void
        {
            (coverBefore===void 0)&& (coverBefore=true);
            (jumpFrame===void 0)&& (jumpFrame=false);
            var handler=this._create(false,true,delay,caller,method,args,coverBefore);
            if (handler)handler.jumpFrame=jumpFrame;
        }

        /**
         * 定时执行一次(基于帧率)。
         * @param	delay	延迟几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        frameOnce(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void
        {
            (coverBefore===void 0)&& (coverBefore=true);
            this._create(true,false,delay,caller,method,args,coverBefore);
        }

        /**
         * 定时重复执行(基于帧率)。
         * @param	delay	间隔几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        frameLoop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void
        {
            (coverBefore===void 0)&& (coverBefore=true);
            this._create(true,true,delay,caller,method,args,coverBefore);
        }

        /** 返回统计信息。*/
        toString(): string
        {
            return " handlers:"+this._handlers.length+" pool:"+Timer._pool.length;
        }

        /**
         * 清理定时器。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        clear(caller: any, method: Function): void
        {
            var handler=this._getHandler(caller,method);
            if (handler)
            {
                this._map[handler.key]=null;
                handler.key=0;
                handler.clear();
            }
        }
        /**
         * 清理对象身上的所有定时器。
         * @param	caller 执行域(this)。
         */
        clearAll(caller: any): void
        {
            if (!caller)return;
            for (var i=0,n=this._handlers.length;i < n;i++)
            {
                var handler=this._handlers[i];
                if (handler.caller===caller)
                {
                    this._map[handler.key]=null;
                    handler.key=0;
                    handler.clear();
                }
            }
        }

        /**
         * 延迟执行。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         * @param	args 回调参数。
         */
        callLater(caller: any, method: Function, args?: Array<any>): void
        {
            // CallLater.I.callLater(caller,method,args);
        }
        /**
         * 立即执行 callLater 。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        runCallLater(caller: any, method: Function): void
        {
            // CallLater.I.runCallLater(caller,method);
        }

        /**
         * 立即提前执行定时器，执行之后从队列中删除
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        runTimer(caller: any, method: Function): void
        {
            var handler=this._getHandler(caller,method);
            if (handler && handler.method !=null)
            {
                this._map[handler.key]=null;
                handler.run(true);
            }
        }

        /**
         * 暂停时钟
         */
        pause(): void
        {
            this.scale=0;
        }
        /**
         * 恢复时钟
         */
        resume(): void
        {
            this.scale=1;
        }
        
    }

    class TimerHandler 
    {
        key: number = 0;
        repeat: boolean = false;
        delay: number = 0;
        userFrame: boolean = false;
        exeTime: number = 0;
        caller: any = null;
        method: Function = null;
        args: Array<any> = null;
        jumpFrame: boolean = null;
        clear(): void
        {
            this.caller = null;
            this.method = null;
            this.args = null;
        }

        run(withClear: boolean): void
        {
            var caller=this.caller;
            if (caller && caller.destroyed) 
                return this.clear();

            var method=this.method;
            var args=this.args;
            withClear && this.clear();

            if (method==null)
                return;

            args ? method.apply(caller,args):method.call(caller);
        }
    }
}