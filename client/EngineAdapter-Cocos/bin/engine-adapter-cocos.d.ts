declare class Engine {
    /** 时间管理器的引用。*/
    static timer: Engines.Timer;
    /** 资源加载器*/
    static loader: Engines.LoaderManager;
    static stage: Engines.Stage;
    static borwer: Engines.Browser;
    static init(): void;
}
declare namespace Engines {
    class Browser {
        /** 是否是微信小游戏 */
        readonly isWXGame: boolean;
        /** 是否是微信小游戏主域 */
        readonly isWXGameMainDomain: boolean;
        /** 是否是微信小游戏子域 */
        readonly isWXGameSubDomain: boolean;
        readonly isBrowser: boolean;
        readonly isMobile: boolean;
        readonly isNative: boolean;
        /** "zh" */
        readonly language: BrowserLanguage;
        /** "zh-cn" */
        readonly languageCode: string;
        /** "chrome" */
        readonly browserType: BrowserType;
        /** 72.0.3626.121 */
        readonly browserVersion: string;
        /** "Windows" */
        readonly os: BrowserOS;
        /** 0 */
        readonly osMainVersion: number;
        /** "" */
        readonly osVersion: string;
        readonly windowPixelResolution: {
            width: number;
            height: number;
        };
        /** 101 */
        readonly platform: BrowserPlatform;
    }
    enum BrowserType {
        BROWSER_TYPE_WECHAT = "wechat",
        BROWSER_TYPE_WECHAT_GAME = "wechatgame",
        BROWSER_TYPE_WECHAT_GAME_SUB = "wechatgamesub",
        BROWSER_TYPE_BAIDU_GAME = "baidugame",
        BROWSER_TYPE_BAIDU_GAME_SUB = "baidugamesub",
        BROWSER_TYPE_QQ_PLAY = "qqplay",
        BROWSER_TYPE_ANDROID = "androidbrowser",
        BROWSER_TYPE_IE = "ie",
        BROWSER_TYPE_QQ = "qqbrowser",
        BROWSER_TYPE_MOBILE_QQ = "mqqbrowser",
        BROWSER_TYPE_UC = "ucbrowser",
        BROWSER_TYPE_UCBS = "ucbs",
        BROWSER_TYPE_BAIDU_APP = "baiduboxapp",
        BROWSER_TYPE_BAIDU = "baidubrowser",
        BROWSER_TYPE_MAXTHON = "maxthon",
        BROWSER_TYPE_OPERA = "opera",
        BROWSER_TYPE_OUPENG = "oupeng",
        BROWSER_TYPE_MIUI = "miuibrowser",
        BROWSER_TYPE_FIREFOX = "firefox",
        BROWSER_TYPE_SAFARI = "safari",
        BROWSER_TYPE_CHROME = "chrome",
        BROWSER_TYPE_LIEBAO = "liebao",
        BROWSER_TYPE_QZONE = "qzone",
        BROWSER_TYPE_SOUGOU = "sogou",
        BROWSER_TYPE_UNKNOWN = "unknown"
    }
    enum BrowserPlatform {
        MOBILE_BROWSER = 100,
        DESKTOP_BROWSER = 101,
        EDITOR_PAGE = 102,
        EDITOR_CORE = 103,
        WECHAT_GAME = 104,
        QQ_PLAY = 105,
        FB_PLAYABLE_ADS = 106,
        BAIDU_GAME = 107,
        VIVO_GAME = 108,
        OPPO_GAME = 100
    }
    enum BrowserLanguage {
        ENGLISH = "en",
        CHINESE = "zh",
        FRENCH = "fr",
        ITALIAN = "it",
        GERMAN = "de",
        SPANISH = "es",
        DUTCH = "du",
        RUSSIAN = "ru",
        JAPANESE = "ja",
        HUNGARIAN = "hu",
        PORTUGUESE = "pt",
        ARABIC = "ar",
        NORWEGIAN = "no",
        POLISH = "pl",
        TURKISH = "tr",
        UKRAINIAN = "uk",
        ROMANIAN = "ro",
        BULGARIAN = "bg",
        UNKNOWN = "unknown"
    }
    enum BrowserOS {
        IOS = "iOS",
        ANDROID = "Android",
        WINDOWS = "Windows",
        MARMALADE = "Marmalade",
        LINUX = "Linux",
        BADA = "Bada",
        BLACKBERRY = "Blackberry",
        OSX = "OS X",
        WP8 = "WP8",
        WINRT = "WINRT",
        UNKNOWN = "Unknown"
    }
}
declare namespace Engines {
    /**
     * <code>Ease</code> 类定义了缓动函数，以便实现 <code>Tween</code> 动画的缓动效果。
     */
    class Ease {
        static HALF_PI: number;
        static PI2: number;
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static linearNone(t: number, b: number, c: number, d: number): number;
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static linearIn(t: number, b: number, c: number, d: number): number;
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static linearInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static linearOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static bounceIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static bounceInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static bounceOut(t: number, b: number, c: number, d: number): number;
        /**
         * 开始时往后运动，然后反向朝目标移动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        static backIn(t: number, b: number, c: number, d: number, s?: number): number;
        /**
         * 开始运动时是向后跟踪，再倒转方向并朝目标移动，稍微过冲目标，然后再次倒转方向，回来朝目标移动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        static backInOut(t: number, b: number, c: number, d: number, s?: number): number;
        /**
         * 开始运动时是朝目标移动，稍微过冲，再倒转方向回来朝着目标。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        static backOut(t: number, b: number, c: number, d: number, s?: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 其中的运动由按照指数方式衰减的正弦波来定义。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	a 指定正弦波的幅度。
         * @param	p 指定正弦波的周期。
         * @return 指定时间的插补属性的值。
         */
        static elasticIn(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 其中的运动由按照指数方式衰减的正弦波来定义。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	a 指定正弦波的幅度。
         * @param	p 指定正弦波的周期。
         * @return 指定时间的插补属性的值。
         */
        static elasticInOut(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 其中的运动由按照指数方式衰减的正弦波来定义。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	a 指定正弦波的幅度。
         * @param	p 指定正弦波的周期。
         * @return 指定时间的插补属性的值。
         */
        static elasticOut(t: number, b: number, c: number, d: number, a?: number, p?: number): number;
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static strongIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static strongInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static strongOut(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static sineInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static sineIn(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static sineOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quintIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quintInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quintOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quartIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quartInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quartOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static cubicIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static cubicInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static cubicOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quadIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quadInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static quadOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static expoIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static expoInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static expoOut(t: number, b: number, c: number, d: number): number;
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static circIn(t: number, b: number, c: number, d: number): number;
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static circInOut(t: number, b: number, c: number, d: number): number;
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        static circOut(t: number, b: number, c: number, d: number): number;
    }
}
declare namespace Engines {
    class Gid {
        static _gid: number;
        static getGID(): number;
    }
}
declare namespace Engines {
    class Handler {
        private static _gid;
        private static _pool;
        /** 执行域(this)。*/
        caller: any;
        /** 处理方法。*/
        method: Function;
        /** 参数。*/
        args: Array<any>;
        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
        once: boolean;
        protected _id: number;
        /**
         * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
         * @param	caller 执行域。
         * @param	method 处理函数。
         * @param	args 函数参数。
         * @param	once 是否只执行一次。
         */
        constructor(caller?: any, method?: Function, args?: Array<any>, once?: boolean);
        /**
         * 设置此对象的指定属性值。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
         * @return  返回 handler 本身。
         */
        setTo(caller: any, method: Function, args: Array<any>, once: boolean): Handler;
        /**
         * 执行处理器。
         */
        run(): any;
        /**
         * 执行处理器，并携带额外数据。
         * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
         */
        runWith(data: any): any;
        /**
         * 清理对象引用。
         */
        clear(): Handler;
        /**
         * 清理并回收到 Handler 对象池内。
         */
        recover(): void;
        /**
         * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
         * @return  返回创建的handler实例。
         */
        static create(caller: any, method: Function, args?: Array<any>, once?: boolean): Handler;
    }
}
declare namespace Engines {
    class Loader {
        /**文本类型，加载完成后返回文本。*/
        static TEXT: string;
        /**JSON 类型，加载完成后返回json数据。*/
        static JSON: string;
        /**prefab 类型，加载完成后返回Prefab实例。*/
        static PREFAB: string;
        /**XML 类型，加载完成后返回domXML。*/
        static XML: string;
        /**二进制类型，加载完成后返回arraybuffer二进制数据。*/
        static BUFFER: string;
        /**纹理类型，加载完成后返回Texture。*/
        static IMAGE: string;
        /**声音类型，加载完成后返回sound。*/
        static SOUND: string;
        /**图集类型，加载完成后返回图集json信息(并创建图集内小图Texture)。*/
        static ATLAS: string;
        /**位图字体类型，加载完成后返回BitmapFont，加载后，会根据文件名自动注册为位图字体。*/
        static FONT: string;
        /** TTF字体类型，加载完成后返回null。*/
        static TTF: string;
        /** 预加载文件类型，加载完成后自动解析到preLoadedMap。*/
        static PLF: string;
        /**Hierarchy资源。*/
        static HIERARCHY: string;
        /**Mesh资源。*/
        static MESH: string;
        /**Material资源。*/
        static MATERIAL: string;
        /**Texture2D资源。*/
        static TEXTURE2D: string;
        /**TextureCube资源。*/
        static TEXTURECUBE: string;
        /**AnimationClip资源。*/
        static ANIMATIONCLIP: string;
        /**Avatar资源。*/
        static AVATAR: string;
        /**Terrain资源。*/
        static TERRAINHEIGHTDATA: string;
        /**Terrain资源。*/
        static TERRAINRES: string;
    }
}
declare namespace Engines {
    class LoaderManager {
        load(path: string | string[], onComplete?: Handler, onProgress?: Handler, type?: any): void;
        loadRes(path: string, onComplete?: Handler, onProgress?: Handler, type?: any): void;
        loadResArray(paths: string[], onComplete?: Handler, onProgress?: Handler): void;
        loadUrl(url: string | string[], onComplete?: Handler, onProgress?: Handler, type?: any): void;
        getRes(path: string): any;
        clearRes(path: string): void;
    }
}
declare namespace Engines {
    /**
      * <p> <code>LocalStorage</code> 类用于没有时间限制的数据存储。</p>
      */
    class LocalStorage {
        /**
         *  数据列表。
         */
        static items: any;
        /**
         * 存储指定键名和键值，字符串类型。
         * @param key 键名。
         * @param value 键值。
         */
        static setItem(key: string, value: string): void;
        /**
         * 获取指定键名的值。
         * @param key 键名。
         * @return 字符串型值。
         */
        static getItem(key: string): string;
        /**
         * 存储指定键名及其对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @param value 键值。是 <code>Object</code> 类型，此致会被转化为 JSON 字符串存储。
         */
        static setJSON(key: string, value: any): void;
        /**
         * 获取指定键名对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @return <code>Object</code> 类型值
         */
        static getJSON(key: string): any;
        /**
         * 删除指定键名的信息。
         * @param key 键名。
         */
        static removeItem(key: string): void;
        /**
         * 清除本地存储信息。
         */
        static clear(): void;
    }
}
declare namespace Engines {
    /**
     * <p> <code>Pool</code> 是对象池类，用于对象的存储、重复使用。</p>
     * <p>合理使用对象池，可以有效减少对象创建的开销，避免频繁的垃圾回收，从而优化游戏流畅度。</p>
     */
    class Pool {
        private static _poolDic;
        /**
         * 根据对象类型标识字符，获取对象池。
         * @param sign 对象类型标识字符。
         * @return 对象池。
         */
        static getPoolBySign(sign: string): Array<any>;
        /**
         * 清除对象池的对象。
         * @param sign 对象类型标识字符。
         */
        static clearBySign(sign: string): void;
        /**
         * 将对象放到对应类型标识的对象池中。
         * @param sign 对象类型标识字符。
         * @param item 对象。
         */
        static recover(sign: string, item: any): void;
        /**
         * 根据类名进行回收，如果类有类名才进行回收，没有则不回收
         * @param	instance 类的具体实例
         */
        static recoverByClass(instance: any): void;
        /**
         * 根据类名回收类的实例
         * @param	instance 类的具体实例
         */
        static createByClass(cls: any): any;
        private static _getClassSign;
        /**
         * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
         * <p>当对象池中无此类型标识的对象时，则根据传入的类型，创建一个新的对象返回。</p>
         * @param sign 对象类型标识字符。
         * @param cls 用于创建该类型对象的类。
         * @return 此类型标识的一个对象。
         */
        static getItemByClass(sign: string, cls: any): any;
        /**
         * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
         * <p>当对象池中无此类型标识的对象时，则使用传入的创建此类型对象的函数，新建一个对象返回。</p>
         * @param sign 对象类型标识字符。
         * @param createFun 用于创建该类型对象的方法。
         * @param caller this对象
         * @return 此类型标识的一个对象。
         */
        static getItemByCreateFun(sign: string, createFun: Function, caller?: any): any;
        /**
         * 根据传入的对象类型标识字符，获取对象池中已存储的此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
         * @param sign 对象类型标识字符。
         * @return 对象池中此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
         */
        static getItem(sign: string): any;
    }
}
declare namespace Engines {
    class Stage {
        static ALIGN_LEFT: string;
        static ALIGN_RIGHT: string;
        static ALIGN_CENTER: string;
        static ALIGN_TOP: string;
        static ALIGN_MIDDLE: string;
        static ALIGN_BOTTOM: string;
        sResize: Signal;
        sClick: Signal;
        sMouseDown: Signal;
        sMouseUp: Signal;
        sMouseMove: Signal;
        width: number;
        height: number;
        mouseX: number;
        mouseY: number;
    }
}
declare namespace Engines {
    class Timer {
        static _pool: TimerHandler[];
        static _mid: number;
        /** 时针缩放。*/
        scale: number;
        /** 当前帧开始的时间。*/
        currTimer: number;
        /** 当前的帧数。*/
        currFrame: number;
        /** 两帧之间的时间间隔,单位毫秒。*/
        private _delta;
        private _lastTimer;
        private _handlers;
        private _count;
        private _temp;
        private _map;
        /**两帧之间的时间间隔,单位毫秒。*/
        readonly delta: number;
        /**
         * 创建 <code>Timer</code> 类的一个实例。
         */
        constructor(autoActive?: boolean);
        /**
         * @private
         * 帧循环处理函数。
         */
        private _update;
        private _clearHandlers;
        private _recoverHandler;
        private _create;
        private _getHandler;
        private _indexHandler;
        /**
         * 定时执行一次。
         * @param	delay	延迟时间(单位为毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        once(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void;
        /**
         * 定时重复执行。
         * @param	delay	间隔时间(单位毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
         */
        loop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean, jumpFrame?: boolean): void;
        /**
         * 定时执行一次(基于帧率)。
         * @param	delay	延迟几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        frameOnce(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void;
        /**
         * 定时重复执行(基于帧率)。
         * @param	delay	间隔几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        frameLoop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean): void;
        /** 返回统计信息。*/
        toString(): string;
        /**
         * 清理定时器。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        clear(caller: any, method: Function): void;
        /**
         * 清理对象身上的所有定时器。
         * @param	caller 执行域(this)。
         */
        clearAll(caller: any): void;
        /**
         * 延迟执行。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         * @param	args 回调参数。
         */
        callLater(caller: any, method: Function, args?: Array<any>): void;
        /**
         * 立即执行 callLater 。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        runCallLater(caller: any, method: Function): void;
        /**
         * 立即提前执行定时器，执行之后从队列中删除
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        runTimer(caller: any, method: Function): void;
        /**
         * 暂停时钟
         */
        pause(): void;
        /**
         * 恢复时钟
         */
        resume(): void;
    }
    class TimerHandler {
        key: number;
        repeat: boolean;
        delay: number;
        userFrame: boolean;
        exeTime: number;
        caller: any;
        method: Function;
        args: Array<any>;
        jumpFrame: boolean;
        clear(): void;
        run(withClear: boolean): void;
    }
}
declare namespace Engines {
    /**
     * <code>Tween</code>  是一个缓动类。使用此类能够实现对目标对象属性的渐变。
     */
    class Tween {
        static tweenMap: any[];
        gid: number;
        /**更新回调，缓动数值发生变化时，回调变化的值*/
        update: Handler;
        /**重播次数，如果repeat=0，则表示无限循环播放*/
        repeat: number;
        /**当前播放次数*/
        private _count;
        private _complete;
        private _target;
        private _duration;
        private _ease;
        private _delay;
        private _props;
        private _usedTimer;
        private _startTimer;
        private _usedPool;
        private _delayParam;
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
        to(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean): Tween;
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
        from(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean): Tween;
        _create(target: any, props: any, duration: number, ease: Function, complete: Handler, delay: number, coverBefore: boolean, isTo: boolean, usePool: boolean, runNow: boolean): Tween;
        private firstStart;
        private _initProps;
        private _beginLoop;
        private _doEase;
        private _updateEase;
        /**
         * 立即结束缓动并到终点。
         */
        complete(): void;
        /**
         * 暂停缓动，可以通过resume或restart重新开始。
         */
        pause(): void;
        /**
         * 设置开始时间。
         * @param	startTime 开始时间。
         */
        setStartTime(startTime: number): void;
        /**
         * 停止并清理当前缓动。
         */
        clear(): void;
        /**
         * @private
         */
        _clear(): void;
        /** 回收到对象池。*/
        recover(): void;
        private _remove;
        /**
         * 重新开始暂停的缓动。
         */
        restart(): void;
        /**
         * 恢复暂停的缓动。
         */
        resume(): void;
        /**设置当前执行比例**/
        progress: number;
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
        static to(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean, autoRecover?: boolean): Tween;
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
        static from(target: any, props: any, duration: number, ease?: Function, complete?: Handler, delay?: number, coverBefore?: boolean, autoRecover?: boolean): Tween;
        /**
         * 清理指定目标对象上的所有缓动。
         * @param	target 目标对象。
         */
        static clearAll(target: any): void;
        /**
         * 清理某个缓动。
         * @param	tween 缓动对象。
         */
        static clear(tween: Tween): void;
        static clearTween(target: any): void;
        static easeNone(t: any, b: any, c: any, d: any): any;
    }
}
declare class BitHelper {
    /** 是否包含 */
    static Contain(val: number, type: number): boolean;
    /** 添加 */
    static Add(val: number, type: number): number;
    static BitUnset(ui: int, len: int, bit: int): uint;
    static BitSet(ui: uint, len: int, bit: int, val: uint): uint;
    static BitGet(ui: uint, len: int, bit: int): uint;
    static Bit2Str(bit: int): string;
    static Byte2Str(bytesSize: int): string;
}
declare function isNumber(x: any): x is number;
declare function isInt(s: any): boolean;
declare function isString(x: any): x is string;
declare function isNullOrEmpty(x: string | string[]): boolean;
declare function isNaNOrEmpty(x: number): boolean;
declare function getClassName(obj: any): string;
declare function getFunctionName(method: Function): string;
declare function getTime(): number;
declare function getTimeStamp(): number;
declare function bToStr(b: any): string;
declare function kbToStr(kb: any): string;
declare function arrayRemoveItem(arr: any[], item: any): boolean;
declare class Mathf {
    /** 小数点多少位 */
    static FloatLength(num: number, floatM?: number): number;
    static clamp(num: number, min: number, max: number): number;
    static Clamp01(value: number): number;
    static Lerp(a: number, b: number, t: number): number;
    /** 弧度, 计算2个点 */
    static radian(fromX: number, fromY: number, toX: number, toY: number): number;
    /** 角度, 计算2个点 */
    static angle(fromX: number, fromY: number, toX: number, toY: number): number;
    /** 角度 转 弧度 */
    static angleToRadian(angle: number): number;
    /** 弧度 转 角度 */
    static radianToAngle(radian: number): number;
    /** 距离, 计算2个点 */
    static distanceangle(fromX: number, fromY: number, toX: number, toY: number): number;
    static directionPointX(fromX: number, fromY: number, toX: number, toY: number, length: number): number;
    static directionPointY(fromX: number, fromY: number, toX: number, toY: number, length: number): number;
    /** 弧度方向 点 */
    static radianPointX(radian: number, length: number, fromX: number): number;
    static radianPointY(radian: number, length: number, fromY: number): number;
    /** 弧度方向 点 */
    static anglePointX(angle: number, length: number, fromX: number): number;
    static anglePointY(angle: number, length: number, fromY: number): number;
}
declare class NumberTransfrom {
    unms: string[];
    digits: string[];
    units: string[];
    checkIsNumbers(x: string): boolean;
    transfrom2(num: number): string;
    transfrom(num: number): string;
}
declare class Random {
    static range(min: number, max: number): number;
    static rangeBoth(min: number, max: number): number;
    static rangeBetween(min: number, max: number): number;
    static GetDisorderList<T>(list: Array<T>): Array<T>;
}
declare function toStringArray(txt: string, separator?: RegExp): string[];
declare function toIntArray(txt: string, separator?: RegExp): number[];
declare function toFloatArray(txt: string, separator?: RegExp): number[];
declare function toInt(val: string): number;
declare function toFloat(val: string): number;
declare function toBoolean(val: any): boolean;
declare function toBooleanArray(txt: string, separator?: RegExp): boolean[];
declare function configCellToArray(txt: string, separator?: RegExp): string[];
declare function csvGetInt(csv: string[], i: number): number;
declare function csvGetFloat(csv: string[], i: number): number;
declare function csvGetBoolean(csv: string[], i: number): boolean;
declare function csvGetString(csv: string[], i: number): string;
declare function firstUpperCase(str: string): string;
/**
 * format('{0} {1} {2}', params1, params2, params3)
 * format('{0} {1:U} {2:L}', params1, params2, params3)
 * @param value
 * @param args
 */
declare function format(value: any, ...args: any[]): string;
declare function formatPattern(match: any, arg: any): string;
declare function isNullOrWhiteSpace(value: string): boolean;
declare function isStartOrEndWithSpace(s: string): boolean;
declare function isStartOrEndWithNumber(s: string): boolean;
declare function trim(s: any): any;
declare class __NumberUnitText {
    static B: string;
    static M: string;
    static K: string;
}
declare class __NumberUnitValue {
    static K: number;
    static M: number;
    static B: number;
}
/**
 * 格式化数字 为K M B格式化
 * @param value 数字
 * @param fixed 数字保留几位
 */
declare function formatNumberUnit(value: number, fixed?: number): string;
declare function formatArrayNumberUnit(fmat: string, ...numbs: number[]): string;
/**
 * 数字转化为字母 大写
 * @param value 数字
 * @param isCapital 是否大写
 */
declare function numberToLetter(value: number, isCapital?: boolean): string;
declare function getStringLength(str: any): number;
declare class StringUtils {
    /** 字符串 */
    static readonly empty = "";
    /** 小数点多少位 */
    static FloatLength(num: number, floatM?: number): string;
    /** 填充长度 */
    static FillLeft(str: string, length: number, c?: string): string;
    static FillRight(str: string, length: number, c?: string): string;
    private static _numberTransfrom;
    static readonly numberTransfrom: NumberTransfrom;
    /** 获取中文数字 */
    static GetChineseNum(num: number): string;
}
declare class SyncHellper {
    static waitTime(millisecond: number): Promise<void>;
    static waitFrame(frameNum: number): Promise<void>;
}
declare type TKey = number | string;
declare type int = number;
declare type uint = number;
declare type float = number;
declare type Guid = number;
declare class Dictionary<K, T> {
    private dict;
    private _count;
    readonly count: number;
    add(key: string | number, val: T): void;
    set(key: string | number, val: T): void;
    remove(key: string | number): void;
    hasKey(key: string | number): boolean;
    getValue(key: string | number): T;
    getValueOrDefault(key: string | number, _default?: T): T;
    __getDict(): {
        [key: string]: T;
        [key: number]: T;
    };
    getValues(): T[];
    getKeys(): any[];
    clear(): void;
}
/** 二维Key字典列表 */
declare class DoubleKeyList<K1, K2, V> {
    private key1Dict;
    getDict(key1: K1): UnOrderMultiMap<K2, V>;
    getOrCreateDict(key1: K1): UnOrderMultiMap<K2, V>;
    addItem(key1: K1, key2: K2, v: V): void;
    removeItem(key1: K1, key2: K2, v: V): void;
    getItemList(key1: K1, key2: K2): V[];
}
/** 二维Key字典 */
declare class DoubleKeyMap<K1, K2, V> {
    private key1Dict;
    getDict(key1: K1): Dictionary<K2, V>;
    getOrCreateDict(key1: K1): Dictionary<K2, V>;
    add(key1: K1, key2: K2, v: V): void;
    remove(key1: K1, key2: K2): void;
    getValue(key1: K1, key2: K2): V;
    getValues(key1: K1): V[];
}
declare class UnOrderMultiMap<T, K> {
    private dictionary;
    __getDict(): Dictionary<T, K[]>;
    private queue;
    private FetchList;
    private RecycleList;
    addItem(t: T, k: K): void;
    removeItem(t: T, k: K): boolean;
    removeList(t: T): void;
    readonly count: int;
    readonly allCount: int;
    getAll(t: T): K[];
    get(t: T): K[];
    Contains(t: T, k: K): boolean;
    ContainsKey(t: T): boolean;
    clear(): void;
    GetKeys(): T[];
}
/** 绑定 */
declare class Bindable<T> {
    private _changeWatcher;
    private _value;
    constructor(value?: T);
    value: T;
    add(listener: (T: any) => void, self: any): void;
    remove(listener: (T: any) => void, self: any): void;
    removeAll(): void;
    bindTo(target: Bindable<T>): void;
    unbind(target: Bindable<T>): void;
    private setValue;
}
/**
 * 事件
 */
declare class Emitter {
    /** 监听数组 */
    private listeners;
    /** 是否把事件名称抛当参数抛给回调 */
    private isDispatchName;
    constructor(isDispatchName?: boolean);
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    add(name: string, callback: Function, context: any): void;
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    remove(name: string, callback: Function, context: any): void;
    /**
     * 发送事件
     * @param name 事件名称
     */
    dispatch(name: string, ...args: any[]): void;
}
/**
 * 观察者
 */
declare class Observer {
    /** 回调函数 */
    private callback;
    /** 上下文 */
    private context;
    constructor(callback: Function, context: any);
    /**
     * 发送通知
     * @param args 不定参数
     */
    notify(...args: any[]): void;
    /**
     * 上下文比较
     * @param context 上下文
     */
    compar(context: any): boolean;
    /**
     * 上下文比较
     * @param context 上下文
     */
    comparAll(callback: Function, context: any): boolean;
}
declare class Signal {
    private _listeners;
    add(listener: () => void, self: any): void;
    addOnce(listener: () => void, self: any): void;
    private hasListener;
    remove(listener: () => void, self: any): void;
    removeAll(): void;
    dispatch(): void;
}
declare class SignalHandler {
    private _handler;
    private _self;
    private _once;
    constructor(handler: () => void, self: any, once?: boolean);
    apply(): void;
    equals(handler: () => void, self: any): boolean;
    once(): boolean;
}
declare class Typed2Signal<T, Y> {
    private _listeners;
    add(listener: (T: any, Y: any) => void, self: any): void;
    addOnce(listener: (T: any, Y: any) => void, self: any): void;
    private hasListener;
    remove(listener: (T: any, Y: any) => void, self: any): void;
    removeAll(): void;
    dispatch(value1: T, value2: Y): void;
}
declare class Typed2SignalHandler<T, Y> {
    private _handler;
    private _self;
    private _once;
    constructor(handler: (T: any, Y: any) => void, self: any, once?: boolean);
    apply(arg1: T, arg2: Y): void;
    equals(handler: (T: any, Y: any) => void, self: any): boolean;
    once(): boolean;
}
declare class Typed3Signal<T, Y, U> {
    private _listeners;
    add(listener: (T: any, Y: any, U: any) => void, self: any): void;
    addOnce(listener: (T: any, Y: any, U: any) => void, self: any): void;
    private hasListener;
    remove(listener: (T: any, Y: any, u: any) => void, self: any): void;
    removeAll(): void;
    dispatch(value1: T, value2: Y, value3: U): void;
}
declare class Typed3SignalHandler<T, Y, U> {
    private _handler;
    private _self;
    private _once;
    constructor(handler: (T: any, Y: any, U: any) => void, self: any, once?: boolean);
    apply(arg1: T, arg2: Y, arg3: U): void;
    equals(handler: (T: any, Y: any, U: any) => void, self: any): boolean;
    once(): boolean;
}
declare class TypedSignal<T> {
    private _listeners;
    add(listener: (T: any) => void, self: any): void;
    addOnce(listener: (T: any) => void, self: any): void;
    private hasListener;
    remove(listener: (T: any) => void, self: any): void;
    removeAll(): void;
    dispatch(value: T): void;
}
declare class TypedSignalHandler<T> {
    private _handler;
    private _self;
    private _once;
    constructor(handler: (T: any) => void, self: any, once?: boolean);
    apply(arg: T): void;
    equals(handler: (T: any) => void, self: any): boolean;
    once(): boolean;
}
