class Engine
{
    /** 时间管理器的引用。*/
    static timer: Engines.Timer ;
    /** 资源加载器*/
    static loader: Engines.LoaderManager ;
    static stage: Engines.Stage ;
    static borwer: Engines.Browser ;


    static init()
    {
        this.timer = new Engines.Timer();
        this.loader = new Engines.LoaderManager();
        this.borwer = new Engines.Browser();
        
        this['LocalStorage'] = Engines.LocalStorage;
        this['Handler'] = Engines.Handler;
        this['Loader'] = Engines.Loader;
        this['Ease'] = Engines.Ease;
        this['Tween'] = Engines.Tween;
        this['Pool'] = Engines.Pool;
        this['Stage'] = Engines.Stage;
        

        window['Handler'] = Engines.Handler;
        window['Loader'] = Engines.Loader;
        window['Ease'] = Engines.Ease;
        window['Tween'] = Engines.Tween;
        window['Pool'] = Engines.Pool;
    }
}