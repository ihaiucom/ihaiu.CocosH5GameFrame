namespace Engines
{
  
  /**
   * <code>Tween</code>  是一个缓动类。使用此类能够实现对目标对象属性的渐变。
   */
  export class Tween 
  {
    static tweenMap = [];


    gid: number = 0;
    /**更新回调，缓动数值发生变化时，回调变化的值*/
    update: Handler = null;
    /**重播次数，如果repeat=0，则表示无限循环播放*/
    repeat: number = 1;

    /**当前播放次数*/
    private _count: number = 0;

    private _complete:Handler = null;
    private _target:any = null;
    private _duration: number = 0;
    private _ease:Function = null;
    private _delay: number = 0;
    private _props:any[] = null;
    private _usedTimer:number = 0;
    private _startTimer: number = 0;
    private _usedPool: boolean = false;
    private _delayParam:any[] = null;

    /**
     * 缓动对象的props属性到目标值。
     * @param	target 目标对象(即将更改属性值的对象)。
     * @param	props 变化的属性列表，比如
     * @param	duration 花费的时间，单位毫秒。
     * @param	ease 缓动类型，默认为匀速运动。
     * @param	complete 结束回调函数。
     * @param	delay 延迟执行时间。
     * @param	coverBefore 是否覆盖之前的缓动。
     * @return	返回Tween对象。
     */
    to(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean): Tween
    {
      (delay===void 0)&& (delay=0);
      (coverBefore===void 0)&& (coverBefore=false);
      return this._create(target,props,duration,ease,complete,delay,coverBefore,true,false,true);
    }

    /**
     * 从props属性，缓动到当前状态。
     * @param	target 目标对象(即将更改属性值的对象)。
     * @param	props 变化的属性列表，比如
     * @param	duration 花费的时间，单位毫秒。
     * @param	ease 缓动类型，默认为匀速运动。
     * @param	complete 结束回调函数。
     * @param	delay 延迟执行时间。
     * @param	coverBefore 是否覆盖之前的缓动。
     * @return	返回Tween对象。
     */
    from(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean): Tween
    {
      (delay===void 0)&& (delay=0);
      (coverBefore===void 0)&& (coverBefore=false);
      return this._create(target,props,duration,ease,complete,delay,coverBefore,false,false,true);
    }

    _create(target: any, props: any, duration: number, ease: Function, complete: Handler, delay: number, coverBefore: boolean, isTo: boolean, usePool: boolean, runNow: boolean): Tween
    {
      if (!target)throw new Error("Tween:target is null");
      this._target=target;
      this._duration=duration;
      this._ease=ease || props.ease || Tween.easeNone;
      this._complete=complete || props.complete;
      this._delay=delay;
      this._props=[];
      this._usedTimer=0;
      this._startTimer=Date.now();
      this._usedPool=usePool;
      this._delayParam=null;
      this.update=props.update;
      var gid=(target.$_GID || (target.$_GID=Gid.getGID()));
          
      if (!Tween.tweenMap[gid])
      {
        Tween.tweenMap[gid]=[this];
      }
      else 
      {
        if (coverBefore)Tween.clearTween(target);
        Tween.tweenMap[gid].push(this);
      }
          
      if (runNow)
      {
        if (delay <=0)
            this.firstStart(target,props,isTo);
        else 
        {
          this._delayParam=[target,props,isTo];
          Engine.timer.once(delay,this,this.firstStart,this._delayParam);
        }
      }
      else 
      {
        this._initProps(target,props,isTo);
      }
      return this;

    }

    private firstStart(target: any, props: any,isTo:boolean)
    {
      this._delayParam=null;

      if (target.destroyed)
      {
        this.clear();
        return;
      }
          
    this._initProps(target,props,isTo);
    this._beginLoop();
  }

      private _initProps(target,props,isTo)
      {
          for (var p in props)
          {
              if ((typeof (target[p])=='number'))
              {
          var start=isTo ? target[p] :props[p];
          var end=isTo ? props[p] :target[p];
          this._props.push([p,start,end-start]);
          if (!isTo)target[p]=start;
        }
      }
      }

      private _beginLoop()
      {
      Engine.timer.frameLoop(1,this,this._doEase);
      }

      private _doEase()
      {
      this._updateEase(Date.now());
      }

      private _updateEase(time: number): void
      {
          var target=this._target;
          if (!target)
              return;

          if (target.destroyed)
              return Tween.clearTween(target);

      var usedTimer=this._usedTimer=time-this._startTimer-this._delay;
          if (usedTimer < 0)
              return;

          if (usedTimer >=this._duration)
              return this.complete();

      var ratio=usedTimer > 0 ? this._ease(usedTimer,0,1,this._duration):0;
      var props=this._props;
          for (var i=0,n=props.length;i < n;i++)
          {
        var prop=props[i];
        target[prop[0]]=prop[1]+(ratio *prop[2]);
          }
          
      if (this.update)this.update.run();

      }

      /**
       * 立即结束缓动并到终点。
       */
      complete(): void
      {
          if (!this._target)return;

      Engine.timer.runTimer(this,this.firstStart);
      var target=this._target;
      var props=this._props;
      var handler=this._complete;
          for (var i=0,n=props.length;i < n;i++)
          {
        var prop=props[i];
        target[prop[0]]=prop[1]+prop[2];
          }
          
          if (this.update)
              this.update.run();

      this._count++;
          if (this.repeat !=0 && this._count >=this.repeat)
          {
        this.clear();
        handler && handler.run();
          }
          else 
          {
        this.restart();
      }
      }

      /**
       * 暂停缓动，可以通过resume或restart重新开始。
       */
      pause(): void
      {
          Engine.timer.clear(this,this._beginLoop);
      Engine.timer.clear(this,this._doEase);
      Engine.timer.clear(this,this.firstStart);
      var time=Date.now();
      var dTime=NaN;
          dTime=time-this._startTimer-this._delay;
          
          if (dTime < 0)
          {
        this._usedTimer=dTime;
      }
      }

      /**
       * 设置开始时间。
       * @param	startTime 开始时间。
       */
      setStartTime(startTime: number): void
      {
      this._startTimer=startTime;
      }
      /**
       * 停止并清理当前缓动。
       */
      clear(): void
      {
          if (this._target)
          {
        this._remove();
        this._clear();
      }
      }
      /**
       * @private
       */
      _clear(): void
      {
          this.pause();
      Engine.timer.clear(this,this.firstStart);
      this._complete=null;
      this._target=null;
      this._ease=null;
      this._props=null;
          this._delayParam=null;
          
          if (this._usedPool)
          {
        this.update=null;
        Pool.recover("tween",this);
      }
      }

      /** 回收到对象池。*/
      recover(): void
      {
      this._usedPool=true;
      this._clear();
      }

      private _remove()
      {
          var tweens=Tween.tweenMap[this._target.$_GID];
          if (tweens)
          {
              for (var i=0,n=tweens.length;i < n;i++)
              {
                  if (tweens[i]===this)
                  {
            tweens.splice(i,1);
            break ;
          }
        }
      }

      }
      /**
       * 重新开始暂停的缓动。
       */
      restart(): void
      {
          this.pause();
      this._usedTimer=0;
      this._startTimer=Date.now();
          if (this._delayParam)
          {
        Engine.timer.once(this._delay,this,this.firstStart,this._delayParam);
        return;
          }
          
      var props=this._props;
      for (var i=0,n=props.length;i < n;i++){
        var prop=props[i];
        this._target[prop[0]]=prop[1];
      }
      Engine.timer.once(this._delay,this,this._beginLoop);
          
      }
      /**
       * 恢复暂停的缓动。
       */
      resume(): void
      {
          if (this._usedTimer >=this._duration)return;
      this._startTimer=Date.now()-this._usedTimer-this._delay;
          if (this._delayParam)
          {
              if (this._usedTimer < 0)
              {
          Engine.timer.once(-this._usedTimer,this,this.firstStart,this._delayParam);
              }
              else 
              {
          this.firstStart.apply(this,this._delayParam);
        }
          }
          else 
          {
        this._beginLoop();
      }
      }

      /**设置当前执行比例**/
      set progress(v: number)
      {
      var uTime=v *this._duration;
      this._startTimer=Date.now()-this._delay-uTime;
      }

      /**
       * 缓动对象的props属性到目标值。
       * @param	target 目标对象(即将更改属性值的对象)。
       * @param	props 变化的属性列表，比如
       * @param	duration 花费的时间，单位毫秒。
       * @param	ease 缓动类型，默认为匀速运动。
       * @param	complete 结束回调函数。
       * @param	delay 延迟执行时间。
       * @param	coverBefore 是否覆盖之前的缓动。
       * @param	autoRecover 是否自动回收，默认为true，缓动结束之后自动回收到对象池。
       * @return	返回Tween对象。
       */
      static to(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean, autoRecover?: boolean): Tween
      {
      (delay===void 0)&& (delay=0);
      (coverBefore===void 0)&& (coverBefore=false);
          (autoRecover===void 0)&& (autoRecover=true);
          
      return Pool.getItemByClass("tween",Tween)._create(target,props,duration,ease,complete,delay,coverBefore,true,autoRecover,true);
      }

      /**
       * 从props属性，缓动到当前状态。
       * @param	target 目标对象(即将更改属性值的对象)。
       * @param	props 变化的属性列表，比如
       * @param	duration 花费的时间，单位毫秒。
       * @param	ease 缓动类型，默认为匀速运动。
       * @param	complete 结束回调函数。
       * @param	delay 延迟执行时间。
       * @param	coverBefore 是否覆盖之前的缓动。
       * @param	autoRecover 是否自动回收，默认为true，缓动结束之后自动回收到对象池。
       * @return	返回Tween对象。
       */
      static from(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean, autoRecover?: boolean): Tween
      {
      (delay===void 0)&& (delay=0);
      (coverBefore===void 0)&& (coverBefore=false);
          (autoRecover===void 0)&& (autoRecover=true);
          
      return Pool.getItemByClass("tween",Tween)._create(target,props,duration,ease,complete,delay,coverBefore,false,autoRecover,true);
      }
      
      /**
       * 清理指定目标对象上的所有缓动。
       * @param	target 目标对象。
       */
      static clearAll(target: any): void
      {
          if (!target || !target.$_GID)return;
      var tweens=Tween.tweenMap[target.$_GID];
          if (tweens)
          {
        for (var i=0,n=tweens.length;i < n;i++){
          tweens[i]._clear();
        }
        tweens.length=0;
      }
      }
      /**
       * 清理某个缓动。
       * @param	tween 缓动对象。
       */
      static clear(tween: Tween): void
      {
        tween.clear();
      }

      static clearTween(target: any): void
      {
        Tween.clearAll(target);
      }

      static easeNone(t,b,c,d)
      {
        return c *t / d+b;
      }
  }
}