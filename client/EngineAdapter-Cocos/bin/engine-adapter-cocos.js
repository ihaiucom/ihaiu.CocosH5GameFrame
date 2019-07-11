var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.init = function () {
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
    };
    return Engine;
}());
var Engines;
(function (Engines) {
    var Browser = /** @class */ (function () {
        function Browser() {
        }
        Object.defineProperty(Browser.prototype, "isWXGame", {
            /** 是否是微信小游戏 */
            get: function () {
                return this.platform == BrowserPlatform.WECHAT_GAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "isWXGameMainDomain", {
            /** 是否是微信小游戏主域 */
            get: function () {
                return this.isWXGame && this.browserType == BrowserType.BROWSER_TYPE_WECHAT_GAME;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "isWXGameSubDomain", {
            /** 是否是微信小游戏子域 */
            get: function () {
                return this.isWXGame && this.browserType == BrowserType.BROWSER_TYPE_WECHAT_GAME_SUB;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "isBrowser", {
            get: function () {
                return cc.sys.isBrowser;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "isMobile", {
            get: function () {
                return cc.sys.isMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "isNative", {
            get: function () {
                return cc.sys.isNative;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "language", {
            /** "zh" */
            get: function () {
                return cc.sys.language;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "languageCode", {
            /** "zh-cn" */
            get: function () {
                return cc.sys.languageCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "browserType", {
            /** "chrome" */
            get: function () {
                return cc.sys.browserType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "browserVersion", {
            /** 72.0.3626.121 */
            get: function () {
                return cc.sys.browserVersion;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "os", {
            /** "Windows" */
            get: function () {
                return cc.sys.os;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "osMainVersion", {
            /** 0 */
            get: function () {
                return cc.sys.osMainVersion;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "osVersion", {
            /** "" */
            get: function () {
                return cc.sys.osVersion;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "windowPixelResolution", {
            get: function () {
                return cc.sys.windowPixelResolution;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Browser.prototype, "platform", {
            /** 101 */
            get: function () {
                return cc.sys.platform;
            },
            enumerable: true,
            configurable: true
        });
        return Browser;
    }());
    Engines.Browser = Browser;
    var BrowserType;
    (function (BrowserType) {
        BrowserType["BROWSER_TYPE_WECHAT"] = "wechat";
        BrowserType["BROWSER_TYPE_WECHAT_GAME"] = "wechatgame";
        BrowserType["BROWSER_TYPE_WECHAT_GAME_SUB"] = "wechatgamesub";
        BrowserType["BROWSER_TYPE_BAIDU_GAME"] = "baidugame";
        BrowserType["BROWSER_TYPE_BAIDU_GAME_SUB"] = "baidugamesub";
        BrowserType["BROWSER_TYPE_QQ_PLAY"] = "qqplay";
        BrowserType["BROWSER_TYPE_ANDROID"] = "androidbrowser";
        BrowserType["BROWSER_TYPE_IE"] = "ie";
        BrowserType["BROWSER_TYPE_QQ"] = "qqbrowser";
        BrowserType["BROWSER_TYPE_MOBILE_QQ"] = "mqqbrowser";
        BrowserType["BROWSER_TYPE_UC"] = "ucbrowser";
        BrowserType["BROWSER_TYPE_UCBS"] = "ucbs";
        BrowserType["BROWSER_TYPE_BAIDU_APP"] = "baiduboxapp";
        BrowserType["BROWSER_TYPE_BAIDU"] = "baidubrowser";
        BrowserType["BROWSER_TYPE_MAXTHON"] = "maxthon";
        BrowserType["BROWSER_TYPE_OPERA"] = "opera";
        BrowserType["BROWSER_TYPE_OUPENG"] = "oupeng";
        BrowserType["BROWSER_TYPE_MIUI"] = "miuibrowser";
        BrowserType["BROWSER_TYPE_FIREFOX"] = "firefox";
        BrowserType["BROWSER_TYPE_SAFARI"] = "safari";
        BrowserType["BROWSER_TYPE_CHROME"] = "chrome";
        BrowserType["BROWSER_TYPE_LIEBAO"] = "liebao";
        BrowserType["BROWSER_TYPE_QZONE"] = "qzone";
        BrowserType["BROWSER_TYPE_SOUGOU"] = "sogou";
        BrowserType["BROWSER_TYPE_UNKNOWN"] = "unknown";
    })(BrowserType = Engines.BrowserType || (Engines.BrowserType = {}));
    var BrowserPlatform;
    (function (BrowserPlatform) {
        BrowserPlatform[BrowserPlatform["MOBILE_BROWSER"] = 100] = "MOBILE_BROWSER";
        BrowserPlatform[BrowserPlatform["DESKTOP_BROWSER"] = 101] = "DESKTOP_BROWSER";
        BrowserPlatform[BrowserPlatform["EDITOR_PAGE"] = 102] = "EDITOR_PAGE";
        BrowserPlatform[BrowserPlatform["EDITOR_CORE"] = 103] = "EDITOR_CORE";
        BrowserPlatform[BrowserPlatform["WECHAT_GAME"] = 104] = "WECHAT_GAME";
        BrowserPlatform[BrowserPlatform["QQ_PLAY"] = 105] = "QQ_PLAY";
        BrowserPlatform[BrowserPlatform["FB_PLAYABLE_ADS"] = 106] = "FB_PLAYABLE_ADS";
        BrowserPlatform[BrowserPlatform["BAIDU_GAME"] = 107] = "BAIDU_GAME";
        BrowserPlatform[BrowserPlatform["VIVO_GAME"] = 108] = "VIVO_GAME";
        BrowserPlatform[BrowserPlatform["OPPO_GAME"] = 100] = "OPPO_GAME";
    })(BrowserPlatform = Engines.BrowserPlatform || (Engines.BrowserPlatform = {}));
    var BrowserLanguage;
    (function (BrowserLanguage) {
        BrowserLanguage["ENGLISH"] = "en";
        BrowserLanguage["CHINESE"] = "zh";
        BrowserLanguage["FRENCH"] = "fr";
        BrowserLanguage["ITALIAN"] = "it";
        BrowserLanguage["GERMAN"] = "de";
        BrowserLanguage["SPANISH"] = "es";
        BrowserLanguage["DUTCH"] = "du";
        BrowserLanguage["RUSSIAN"] = "ru";
        BrowserLanguage["JAPANESE"] = "ja";
        BrowserLanguage["HUNGARIAN"] = "hu";
        BrowserLanguage["PORTUGUESE"] = "pt";
        BrowserLanguage["ARABIC"] = "ar";
        BrowserLanguage["NORWEGIAN"] = "no";
        BrowserLanguage["POLISH"] = "pl";
        BrowserLanguage["TURKISH"] = "tr";
        BrowserLanguage["UKRAINIAN"] = "uk";
        BrowserLanguage["ROMANIAN"] = "ro";
        BrowserLanguage["BULGARIAN"] = "bg";
        BrowserLanguage["UNKNOWN"] = "unknown";
    })(BrowserLanguage = Engines.BrowserLanguage || (Engines.BrowserLanguage = {}));
    var BrowserOS;
    (function (BrowserOS) {
        BrowserOS["IOS"] = "iOS";
        BrowserOS["ANDROID"] = "Android";
        BrowserOS["WINDOWS"] = "Windows";
        BrowserOS["MARMALADE"] = "Marmalade";
        BrowserOS["LINUX"] = "Linux";
        BrowserOS["BADA"] = "Bada";
        BrowserOS["BLACKBERRY"] = "Blackberry";
        BrowserOS["OSX"] = "OS X";
        BrowserOS["WP8"] = "WP8";
        BrowserOS["WINRT"] = "WINRT";
        BrowserOS["UNKNOWN"] = "Unknown";
    })(BrowserOS = Engines.BrowserOS || (Engines.BrowserOS = {}));
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    /**
     * <code>Ease</code> 类定义了缓动函数，以便实现 <code>Tween</code> 动画的缓动效果。
     */
    var Ease = /** @class */ (function () {
        function Ease() {
        }
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.linearNone = function (t, b, c, d) {
            return c * t / d + b;
        };
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.linearIn = function (t, b, c, d) {
            return c * t / d + b;
        };
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.linearInOut = function (t, b, c, d) {
            return c * t / d + b;
        };
        /**
         * 定义无加速持续运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.linearOut = function (t, b, c, d) {
            return c * t / d + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.bounceIn = function (t, b, c, d) {
            return c - Ease.bounceOut(d - t, 0, c, d) + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.bounceInOut = function (t, b, c, d) {
            if (t < d * 0.5)
                return Ease.bounceIn(t * 2, 0, c, d) * .5 + b;
            else
                return Ease.bounceOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.bounceOut = function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75))
                return c * (7.5625 * t * t) + b;
            else if (t < (2 / 2.75))
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            else if (t < (2.5 / 2.75))
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            else
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        };
        /**
         * 开始时往后运动，然后反向朝目标移动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        Ease.backIn = function (t, b, c, d, s) {
            (s === void 0) && (s = 1.70158);
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        };
        /**
         * 开始运动时是向后跟踪，再倒转方向并朝目标移动，稍微过冲目标，然后再次倒转方向，回来朝目标移动。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        Ease.backInOut = function (t, b, c, d, s) {
            (s === void 0) && (s = 1.70158);
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        };
        /**
         * 开始运动时是朝目标移动，稍微过冲，再倒转方向回来朝着目标。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @param	s 指定过冲量，此处数值越大，过冲越大。
         * @return 指定时间的插补属性的值。
         */
        Ease.backOut = function (t, b, c, d, s) {
            (s === void 0) && (s = 1.70158);
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        };
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
        Ease.elasticIn = function (t, b, c, d, a, p) {
            (a === void 0) && (a = 0);
            (p === void 0) && (p = 0);
            var s;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (!a || (c > 0 && a < c) || (c < 0 && a < -c)) {
                a = c;
                s = p / 4;
            }
            else
                s = p / Ease.PI2 * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * Ease.PI2 / p)) + b;
        };
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
        Ease.elasticInOut = function (t, b, c, d, a, p) {
            (a === void 0) && (a = 0);
            (p === void 0) && (p = 0);
            var s;
            if (t == 0)
                return b;
            if ((t /= d * 0.5) == 2)
                return b + c;
            if (!p)
                p = d * (.3 * 1.5);
            if (!a || (c > 0 && a < c) || (c < 0 && a < -c)) {
                a = c;
                s = p / 4;
            }
            else
                s = p / Ease.PI2 * Math.asin(c / a);
            if (t < 1)
                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * Ease.PI2 / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * Ease.PI2 / p) * .5 + c + b;
        };
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
        Ease.elasticOut = function (t, b, c, d, a, p) {
            (a === void 0) && (a = 0);
            (p === void 0) && (p = 0);
            var s;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (!p)
                p = d * .3;
            if (!a || (c > 0 && a < c) || (c < 0 && a < -c)) {
                a = c;
                s = p / 4;
            }
            else
                s = p / Ease.PI2 * Math.asin(c / a);
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * Ease.PI2 / p) + c + b);
        };
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.strongIn = function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.strongInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * t * t * t * t * t + b;
            return c * 0.5 * ((t -= 2) * t * t * t * t + 2) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.strongOut = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.sineInOut = function (t, b, c, d) {
            return -c * 0.5 * (Math.cos(Math.PI * t / d) - 1) + b;
        };
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.sineIn = function (t, b, c, d) {
            return -c * Math.cos(t / d * Ease.HALF_PI) + c + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.sineOut = function (t, b, c, d) {
            return c * Math.sin(t / d * Ease.HALF_PI) + b;
        };
        /**
         * 以零速率开始运动，然后在执行时加快运动速度。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quintIn = function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quintInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * t * t * t * t * t + b;
            return c * 0.5 * ((t -= 2) * t * t * t * t + 2) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quint 缓动方程的运动加速大于 Quart 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quintOut = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quartIn = function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quartInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * t * t * t * t + b;
            return -c * 0.5 * ((t -= 2) * t * t * t - 2) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quart 缓动方程的运动加速大于 Cubic 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quartOut = function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.cubicIn = function (t, b, c, d) {
            return c * (t /= d) * t * t + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.cubicInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * t * t * t + b;
            return c * 0.5 * ((t -= 2) * t * t + 2) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Cubic 缓动方程的运动加速大于 Quad 缓动方程。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.cubicOut = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quadIn = function (t, b, c, d) {
            return c * (t /= d) * t + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quadInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * t * t + b;
            return -c * 0.5 * ((--t) * (t - 2) - 1) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.quadOut = function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.expoIn = function (t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b - c * 0.001;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.expoInOut = function (t, b, c, d) {
            if (t == 0)
                return b;
            if (t == d)
                return b + c;
            if ((t /= d * 0.5) < 1)
                return c * 0.5 * Math.pow(2, 10 * (t - 1)) + b;
            return c * 0.5 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 其中每个时间间隔是剩余距离减去一个固定比例部分。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.expoOut = function (t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
        /**
         * 方法以零速率开始运动，然后在执行时加快运动速度。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.circIn = function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        };
        /**
         * 开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.circInOut = function (t, b, c, d) {
            if ((t /= d * 0.5) < 1)
                return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
            return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        };
        /**
         * 以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
         * 缓动方程的运动加速会产生突然的速率变化。
         * @param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。
         * @param	b 指定动画属性的初始值。
         * @param	c 指定动画属性的更改总计。
         * @param	d 指定运动的持续时间。
         * @return 指定时间的插补属性的值。
         */
        Ease.circOut = function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        };
        Ease.HALF_PI = Math.PI * 0.5;
        Ease.PI2 = Math.PI * 2;
        return Ease;
    }());
    Engines.Ease = Ease;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var Gid = /** @class */ (function () {
        function Gid() {
        }
        Gid.getGID = function () {
            return this._gid++;
        };
        Gid._gid = 1;
        return Gid;
    }());
    Engines.Gid = Gid;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var Handler = /** @class */ (function () {
        /**
         * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
         * @param	caller 执行域。
         * @param	method 处理函数。
         * @param	args 函数参数。
         * @param	once 是否只执行一次。
         */
        function Handler(caller, method, args, once) {
            /** 处理方法。*/
            this.method = null;
            /** 参数。*/
            this.args = null;
            /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
            this.once = false;
            this._id = 0;
            this.setTo(caller, method, args, once);
        }
        /**
         * 设置此对象的指定属性值。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
         * @return  返回 handler 本身。
         */
        Handler.prototype.setTo = function (caller, method, args, once) {
            this._id = Handler._gid++;
            this.caller = caller;
            this.method = method;
            this.args = args;
            this.once = once;
            return this;
        };
        /**
         * 执行处理器。
         */
        Handler.prototype.run = function () {
            if (this.method == null)
                return null;
            var id = this._id;
            var result = this.method.apply(this.caller, this.args);
            this._id === id && this.once && this.recover();
            return result;
        };
        /**
         * 执行处理器，并携带额外数据。
         * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
         */
        Handler.prototype.runWith = function (data) {
            if (this.method == null)
                return null;
            var id = this._id;
            if (data == null)
                var result = this.method.apply(this.caller, this.args);
            else if (!this.args && !data.unshift)
                result = this.method.call(this.caller, data);
            else if (this.args)
                result = this.method.apply(this.caller, this.args.concat(data));
            else
                result = this.method.apply(this.caller, data);
            this._id === id && this.once && this.recover();
            return result;
        };
        /**
         * 清理对象引用。
         */
        Handler.prototype.clear = function () {
            this.caller = null;
            this.method = null;
            this.args = null;
            return this;
        };
        /**
         * 清理并回收到 Handler 对象池内。
         */
        Handler.prototype.recover = function () {
            if (this._id > 0) {
                this._id = 0;
                Handler._pool.push(this.clear());
            }
        };
        /**
         * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
         * @return  返回创建的handler实例。
         */
        Handler.create = function (caller, method, args, once) {
            (once === void 0) && (once = true);
            if (Handler._pool.length)
                return Handler._pool.pop().setTo(caller, method, args, once);
            return new Handler(caller, method, args, once);
        };
        Handler._gid = 1;
        Handler._pool = [];
        return Handler;
    }());
    Engines.Handler = Handler;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var Loader = /** @class */ (function () {
        function Loader() {
        }
        /**文本类型，加载完成后返回文本。*/
        Loader.TEXT = "text";
        /**JSON 类型，加载完成后返回json数据。*/
        Loader.JSON = "json";
        /**prefab 类型，加载完成后返回Prefab实例。*/
        Loader.PREFAB = "prefab";
        /**XML 类型，加载完成后返回domXML。*/
        Loader.XML = "xml";
        /**二进制类型，加载完成后返回arraybuffer二进制数据。*/
        Loader.BUFFER = "arraybuffer";
        /**纹理类型，加载完成后返回Texture。*/
        Loader.IMAGE = "image";
        /**声音类型，加载完成后返回sound。*/
        Loader.SOUND = "sound";
        /**图集类型，加载完成后返回图集json信息(并创建图集内小图Texture)。*/
        Loader.ATLAS = "atlas";
        /**位图字体类型，加载完成后返回BitmapFont，加载后，会根据文件名自动注册为位图字体。*/
        Loader.FONT = "font";
        /** TTF字体类型，加载完成后返回null。*/
        Loader.TTF = "ttf";
        /** 预加载文件类型，加载完成后自动解析到preLoadedMap。*/
        Loader.PLF = "plf";
        /**Hierarchy资源。*/
        Loader.HIERARCHY = "HIERARCHY";
        /**Mesh资源。*/
        Loader.MESH = "MESH";
        /**Material资源。*/
        Loader.MATERIAL = "MATERIAL";
        /**Texture2D资源。*/
        Loader.TEXTURE2D = "TEXTURE2D";
        /**TextureCube资源。*/
        Loader.TEXTURECUBE = "TEXTURECUBE";
        /**AnimationClip资源。*/
        Loader.ANIMATIONCLIP = "ANIMATIONCLIP";
        /**Avatar资源。*/
        Loader.AVATAR = "AVATAR";
        /**Terrain资源。*/
        Loader.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA";
        /**Terrain资源。*/
        Loader.TERRAINRES = "TERRAIN";
        return Loader;
    }());
    Engines.Loader = Loader;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var LoaderManager = /** @class */ (function () {
        function LoaderManager() {
        }
        LoaderManager.prototype.load = function (path, onComplete, onProgress, type) {
            if (typeof (path) == "string") {
                if (path.eStartsWith("http://") || path.eStartsWith("https://")) {
                    this.loadUrl(path, onComplete, onProgress);
                }
                else {
                    this.loadRes(path, onComplete, onProgress);
                }
            }
            else if (path instanceof Array) {
                if (path.length > 0) {
                    if (path[0].eStartsWith("http://") || path[0].eStartsWith("https://")) {
                        this.loadUrl(path, onComplete, onProgress);
                    }
                    else {
                        this.loadResArray(path, onComplete, onProgress);
                    }
                }
                else {
                    onComplete.run();
                }
            }
        };
        LoaderManager.prototype.loadRes = function (path, onComplete, onProgress, type) {
            cc.loader.loadRes(path, onProgress ? onProgress.run : null, onComplete ? onComplete.run : null);
        };
        LoaderManager.prototype.loadResArray = function (paths, onComplete, onProgress) {
            cc.loader.loadResArray(paths, onProgress ? onProgress.run : null, onComplete.run);
        };
        LoaderManager.prototype.loadUrl = function (url, onComplete, onProgress, type) {
            cc.loader.load(url, onProgress ? onProgress.run : null, onComplete ? onComplete.run : null);
        };
        LoaderManager.prototype.getRes = function (path) {
            return cc.loader.getRes(path);
        };
        LoaderManager.prototype.clearRes = function (path) {
            cc.loader.releaseRes(path);
        };
        return LoaderManager;
    }());
    Engines.LoaderManager = LoaderManager;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    /**
      * <p> <code>LocalStorage</code> 类用于没有时间限制的数据存储。</p>
      */
    var LocalStorage = /** @class */ (function () {
        function LocalStorage() {
        }
        /**
         * 存储指定键名和键值，字符串类型。
         * @param key 键名。
         * @param value 键值。
         */
        LocalStorage.setItem = function (key, value) {
            cc.sys.localStorage.setItem(key, value);
        };
        /**
         * 获取指定键名的值。
         * @param key 键名。
         * @return 字符串型值。
         */
        LocalStorage.getItem = function (key) {
            return cc.sys.localStorage.getItem(key);
        };
        /**
         * 存储指定键名及其对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @param value 键值。是 <code>Object</code> 类型，此致会被转化为 JSON 字符串存储。
         */
        LocalStorage.setJSON = function (key, value) {
            cc.sys.localStorage.setJSON(key, value);
        };
        /**
         * 获取指定键名对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @return <code>Object</code> 类型值
         */
        LocalStorage.getJSON = function (key) {
            return cc.sys.localStorage.getJSON(key);
        };
        /**
         * 删除指定键名的信息。
         * @param key 键名。
         */
        LocalStorage.removeItem = function (key) {
            cc.sys.localStorage.removeItem(key);
        };
        /**
         * 清除本地存储信息。
         */
        LocalStorage.clear = function () {
            cc.sys.localStorage.clear();
        };
        return LocalStorage;
    }());
    Engines.LocalStorage = LocalStorage;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    /**
     * <p> <code>Pool</code> 是对象池类，用于对象的存储、重复使用。</p>
     * <p>合理使用对象池，可以有效减少对象创建的开销，避免频繁的垃圾回收，从而优化游戏流畅度。</p>
     */
    var Pool = /** @class */ (function () {
        function Pool() {
        }
        /**
         * 根据对象类型标识字符，获取对象池。
         * @param sign 对象类型标识字符。
         * @return 对象池。
         */
        Pool.getPoolBySign = function (sign) {
            return Pool._poolDic[sign] || (Pool._poolDic[sign] = []);
        };
        /**
         * 清除对象池的对象。
         * @param sign 对象类型标识字符。
         */
        Pool.clearBySign = function (sign) {
            if (Pool._poolDic[sign])
                Pool._poolDic[sign].length = 0;
        };
        /**
         * 将对象放到对应类型标识的对象池中。
         * @param sign 对象类型标识字符。
         * @param item 对象。
         */
        Pool.recover = function (sign, item) {
            if (item["__InPool"])
                return;
            item["__InPool"] = true;
            Pool.getPoolBySign(sign).push(item);
        };
        /**
         * 根据类名进行回收，如果类有类名才进行回收，没有则不回收
         * @param	instance 类的具体实例
         */
        Pool.recoverByClass = function (instance) {
            if (instance) {
                var className = instance["__className"] || instance.constructor._$gid;
                if (className)
                    Pool.recover(className, instance);
            }
        };
        /**
         * 根据类名回收类的实例
         * @param	instance 类的具体实例
         */
        Pool.createByClass = function (cls) {
            return Pool.getItemByClass(Pool._getClassSign(cls), cls);
        };
        Pool._getClassSign = function (cla) {
            var className = cla["__className"] || cla["_$gid"];
            if (!className) {
                cla["_$gid"] = className = Engines.Gid.getGID() + "";
            }
            return className;
        };
        /**
         * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
         * <p>当对象池中无此类型标识的对象时，则根据传入的类型，创建一个新的对象返回。</p>
         * @param sign 对象类型标识字符。
         * @param cls 用于创建该类型对象的类。
         * @return 此类型标识的一个对象。
         */
        Pool.getItemByClass = function (sign, cls) {
            if (!Pool._poolDic[sign])
                return new cls();
            var pool = Pool.getPoolBySign(sign);
            if (pool.length) {
                var rst = pool.pop();
                rst["__InPool"] = false;
            }
            else {
                rst = new cls();
            }
            return rst;
        };
        /**
         * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
         * <p>当对象池中无此类型标识的对象时，则使用传入的创建此类型对象的函数，新建一个对象返回。</p>
         * @param sign 对象类型标识字符。
         * @param createFun 用于创建该类型对象的方法。
         * @param caller this对象
         * @return 此类型标识的一个对象。
         */
        Pool.getItemByCreateFun = function (sign, createFun, caller) {
            var pool = Pool.getPoolBySign(sign);
            var rst = pool.length ? pool.pop() : createFun.call(caller);
            rst["__InPool"] = false;
            return rst;
        };
        /**
         * 根据传入的对象类型标识字符，获取对象池中已存储的此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
         * @param sign 对象类型标识字符。
         * @return 对象池中此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
         */
        Pool.getItem = function (sign) {
            var pool = Pool.getPoolBySign(sign);
            var rst = pool.length ? pool.pop() : null;
            if (rst) {
                rst["__InPool"] = false;
            }
            return rst;
        };
        Pool._poolDic = {};
        return Pool;
    }());
    Engines.Pool = Pool;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var Stage = /** @class */ (function () {
        function Stage() {
            this.sResize = new Signal();
            this.sClick = new Signal();
            this.sMouseDown = new Signal();
            this.sMouseUp = new Signal();
            this.sMouseMove = new Signal();
            this.width = 1334;
            this.height = 750;
            this.mouseX = 0;
            this.mouseY = 0;
        }
        Stage.ALIGN_LEFT = "left";
        Stage.ALIGN_RIGHT = "right";
        Stage.ALIGN_CENTER = "center";
        Stage.ALIGN_TOP = "top";
        Stage.ALIGN_MIDDLE = "middle";
        Stage.ALIGN_BOTTOM = "bottom";
        return Stage;
    }());
    Engines.Stage = Stage;
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    var Timer = /** @class */ (function () {
        /**
         * 创建 <code>Timer</code> 类的一个实例。
         */
        function Timer(autoActive) {
            /** 时针缩放。*/
            this.scale = 1;
            /** 当前帧开始的时间。*/
            this.currTimer = 0;
            /** 当前的帧数。*/
            this.currFrame = 0;
            /** 两帧之间的时间间隔,单位毫秒。*/
            this._delta = 0;
            this._handlers = [];
            this._count = 0;
            this._temp = [];
            this._map = [];
            (autoActive === void 0) && (autoActive = true);
            this.currTimer = Date.now();
            this._lastTimer = Date.now();
            if (autoActive) {
                var scheduler = cc.director.getScheduler();
                scheduler.schedule(this._update, this, 1);
            }
        }
        Object.defineProperty(Timer.prototype, "delta", {
            /**两帧之间的时间间隔,单位毫秒。*/
            get: function () {
                return this._delta;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * 帧循环处理函数。
         */
        Timer.prototype._update = function () {
            if (this.scale <= 0) {
                this._lastTimer = Date.now();
                return;
            }
            var frame = this.currFrame = this.currFrame + this.scale;
            var now = Date.now();
            this._delta = (now - this._lastTimer) * this.scale;
            var timer = this.currTimer = this.currTimer + this._delta;
            this._lastTimer = now;
            var handlers = this._handlers;
            this._count = 0;
            for (var i = 0, n = handlers.length; i < n; i++) {
                var handler = handlers[i];
                if (handler.method !== null) {
                    var t = handler.userFrame ? frame : timer;
                    if (t >= handler.exeTime) {
                        if (handler.repeat) {
                            if (!handler.jumpFrame) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                                if (t > handler.exeTime) {
                                    handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                                }
                            }
                            else {
                                while (t >= handler.exeTime) {
                                    handler.exeTime += handler.delay;
                                    handler.run(false);
                                }
                            }
                        }
                        else {
                            handler.run(true);
                        }
                    }
                }
                else {
                    this._count++;
                }
            }
            if (this._count > 30 || frame % 200 === 0)
                this._clearHandlers();
        };
        Timer.prototype._clearHandlers = function () {
            var handlers = this._handlers;
            for (var i = 0, n = handlers.length; i < n; i++) {
                var handler = handlers[i];
                if (handler.method !== null)
                    this._temp.push(handler);
                else
                    this._recoverHandler(handler);
            }
            this._handlers = this._temp;
            handlers.length = 0;
            this._temp = handlers;
        };
        Timer.prototype._recoverHandler = function (handler) {
            if (this._map[handler.key] == handler)
                this._map[handler.key] = null;
            handler.clear();
            Timer._pool.push(handler);
        };
        Timer.prototype._create = function (useFrame, repeat, delay, caller, method, args, coverBefore) {
            if (!delay) {
                method.apply(caller, args);
                return null;
            }
            if (coverBefore) {
                var handler = this._getHandler(caller, method);
                if (handler) {
                    handler.repeat = repeat;
                    handler.userFrame = useFrame;
                    handler.delay = delay;
                    handler.caller = caller;
                    handler.method = method;
                    handler.args = args;
                    handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
                    return handler;
                }
            }
            handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
            handler.repeat = repeat;
            handler.userFrame = useFrame;
            handler.delay = delay;
            handler.caller = caller;
            handler.method = method;
            handler.args = args;
            handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
            this._indexHandler(handler);
            this._handlers.push(handler);
            return handler;
        };
        Timer.prototype._getHandler = function (caller, method) {
            var cid = caller ? caller.$_GID || (caller.$_GID = Engines.Gid.getGID()) : 0;
            var mid = method['$_TID'] || (method['$_TID'] = (Timer._mid++) * 100000);
            return this._map[cid + mid];
        };
        Timer.prototype._indexHandler = function (handler) {
            var caller = handler.caller;
            var method = handler.method;
            var cid = caller ? caller.$_GID || (caller.$_GID = Engines.Gid.getGID()) : 0;
            var mid = method['$_TID'] || (method['$_TID'] = (Timer._mid++) * 100000);
            handler.key = cid + mid;
            this._map[handler.key] = handler;
        };
        /**
         * 定时执行一次。
         * @param	delay	延迟时间(单位为毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        Timer.prototype.once = function (delay, caller, method, args, coverBefore) {
            (coverBefore === void 0) && (coverBefore = true);
            this._create(false, false, delay, caller, method, args, coverBefore);
        };
        /**
         * 定时重复执行。
         * @param	delay	间隔时间(单位毫秒)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
         */
        Timer.prototype.loop = function (delay, caller, method, args, coverBefore, jumpFrame) {
            (coverBefore === void 0) && (coverBefore = true);
            (jumpFrame === void 0) && (jumpFrame = false);
            var handler = this._create(false, true, delay, caller, method, args, coverBefore);
            if (handler)
                handler.jumpFrame = jumpFrame;
        };
        /**
         * 定时执行一次(基于帧率)。
         * @param	delay	延迟几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        Timer.prototype.frameOnce = function (delay, caller, method, args, coverBefore) {
            (coverBefore === void 0) && (coverBefore = true);
            this._create(true, false, delay, caller, method, args, coverBefore);
        };
        /**
         * 定时重复执行(基于帧率)。
         * @param	delay	间隔几帧(单位为帧)。
         * @param	caller	执行域(this)。
         * @param	method	定时器回调函数。
         * @param	args	回调参数。
         * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
         */
        Timer.prototype.frameLoop = function (delay, caller, method, args, coverBefore) {
            (coverBefore === void 0) && (coverBefore = true);
            this._create(true, true, delay, caller, method, args, coverBefore);
        };
        /** 返回统计信息。*/
        Timer.prototype.toString = function () {
            return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
        };
        /**
         * 清理定时器。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        Timer.prototype.clear = function (caller, method) {
            var handler = this._getHandler(caller, method);
            if (handler) {
                this._map[handler.key] = null;
                handler.key = 0;
                handler.clear();
            }
        };
        /**
         * 清理对象身上的所有定时器。
         * @param	caller 执行域(this)。
         */
        Timer.prototype.clearAll = function (caller) {
            if (!caller)
                return;
            for (var i = 0, n = this._handlers.length; i < n; i++) {
                var handler = this._handlers[i];
                if (handler.caller === caller) {
                    this._map[handler.key] = null;
                    handler.key = 0;
                    handler.clear();
                }
            }
        };
        /**
         * 延迟执行。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         * @param	args 回调参数。
         */
        Timer.prototype.callLater = function (caller, method, args) {
            // CallLater.I.callLater(caller,method,args);
        };
        /**
         * 立即执行 callLater 。
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        Timer.prototype.runCallLater = function (caller, method) {
            // CallLater.I.runCallLater(caller,method);
        };
        /**
         * 立即提前执行定时器，执行之后从队列中删除
         * @param	caller 执行域(this)。
         * @param	method 定时器回调函数。
         */
        Timer.prototype.runTimer = function (caller, method) {
            var handler = this._getHandler(caller, method);
            if (handler && handler.method != null) {
                this._map[handler.key] = null;
                handler.run(true);
            }
        };
        /**
         * 暂停时钟
         */
        Timer.prototype.pause = function () {
            this.scale = 0;
        };
        /**
         * 恢复时钟
         */
        Timer.prototype.resume = function () {
            this.scale = 1;
        };
        Timer._pool = [];
        Timer._mid = 1;
        return Timer;
    }());
    Engines.Timer = Timer;
    var TimerHandler = /** @class */ (function () {
        function TimerHandler() {
            this.key = 0;
            this.repeat = false;
            this.delay = 0;
            this.userFrame = false;
            this.exeTime = 0;
            this.caller = null;
            this.method = null;
            this.args = null;
            this.jumpFrame = null;
        }
        TimerHandler.prototype.clear = function () {
            this.caller = null;
            this.method = null;
            this.args = null;
        };
        TimerHandler.prototype.run = function (withClear) {
            var caller = this.caller;
            if (caller && caller.destroyed)
                return this.clear();
            var method = this.method;
            var args = this.args;
            withClear && this.clear();
            if (method == null)
                return;
            args ? method.apply(caller, args) : method.call(caller);
        };
        return TimerHandler;
    }());
})(Engines || (Engines = {}));
var Engines;
(function (Engines) {
    /**
     * <code>Tween</code>  是一个缓动类。使用此类能够实现对目标对象属性的渐变。
     */
    var Tween = /** @class */ (function () {
        function Tween() {
            this.gid = 0;
            /**更新回调，缓动数值发生变化时，回调变化的值*/
            this.update = null;
            /**重播次数，如果repeat=0，则表示无限循环播放*/
            this.repeat = 1;
            /**当前播放次数*/
            this._count = 0;
            this._complete = null;
            this._target = null;
            this._duration = 0;
            this._ease = null;
            this._delay = 0;
            this._props = null;
            this._usedTimer = 0;
            this._startTimer = 0;
            this._usedPool = false;
            this._delayParam = null;
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
         * @return	返回Tween对象。
         */
        Tween.prototype.to = function (target, props, duration, ease, complete, delay, coverBefore) {
            (delay === void 0) && (delay = 0);
            (coverBefore === void 0) && (coverBefore = false);
            return this._create(target, props, duration, ease, complete, delay, coverBefore, true, false, true);
        };
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
        Tween.prototype.from = function (target, props, duration, ease, complete, delay, coverBefore) {
            (delay === void 0) && (delay = 0);
            (coverBefore === void 0) && (coverBefore = false);
            return this._create(target, props, duration, ease, complete, delay, coverBefore, false, false, true);
        };
        Tween.prototype._create = function (target, props, duration, ease, complete, delay, coverBefore, isTo, usePool, runNow) {
            if (!target)
                throw new Error("Tween:target is null");
            this._target = target;
            this._duration = duration;
            this._ease = ease || props.ease || Tween.easeNone;
            this._complete = complete || props.complete;
            this._delay = delay;
            this._props = [];
            this._usedTimer = 0;
            this._startTimer = Date.now();
            this._usedPool = usePool;
            this._delayParam = null;
            this.update = props.update;
            var gid = (target.$_GID || (target.$_GID = Engines.Gid.getGID()));
            if (!Tween.tweenMap[gid]) {
                Tween.tweenMap[gid] = [this];
            }
            else {
                if (coverBefore)
                    Tween.clearTween(target);
                Tween.tweenMap[gid].push(this);
            }
            if (runNow) {
                if (delay <= 0)
                    this.firstStart(target, props, isTo);
                else {
                    this._delayParam = [target, props, isTo];
                    Engine.timer.once(delay, this, this.firstStart, this._delayParam);
                }
            }
            else {
                this._initProps(target, props, isTo);
            }
            return this;
        };
        Tween.prototype.firstStart = function (target, props, isTo) {
            this._delayParam = null;
            if (target.destroyed) {
                this.clear();
                return;
            }
            this._initProps(target, props, isTo);
            this._beginLoop();
        };
        Tween.prototype._initProps = function (target, props, isTo) {
            for (var p in props) {
                if ((typeof (target[p]) == 'number')) {
                    var start = isTo ? target[p] : props[p];
                    var end = isTo ? props[p] : target[p];
                    this._props.push([p, start, end - start]);
                    if (!isTo)
                        target[p] = start;
                }
            }
        };
        Tween.prototype._beginLoop = function () {
            Engine.timer.frameLoop(1, this, this._doEase);
        };
        Tween.prototype._doEase = function () {
            this._updateEase(Date.now());
        };
        Tween.prototype._updateEase = function (time) {
            var target = this._target;
            if (!target)
                return;
            if (target.destroyed)
                return Tween.clearTween(target);
            var usedTimer = this._usedTimer = time - this._startTimer - this._delay;
            if (usedTimer < 0)
                return;
            if (usedTimer >= this._duration)
                return this.complete();
            var ratio = usedTimer > 0 ? this._ease(usedTimer, 0, 1, this._duration) : 0;
            var props = this._props;
            for (var i = 0, n = props.length; i < n; i++) {
                var prop = props[i];
                target[prop[0]] = prop[1] + (ratio * prop[2]);
            }
            if (this.update)
                this.update.run();
        };
        /**
         * 立即结束缓动并到终点。
         */
        Tween.prototype.complete = function () {
            if (!this._target)
                return;
            Engine.timer.runTimer(this, this.firstStart);
            var target = this._target;
            var props = this._props;
            var handler = this._complete;
            for (var i = 0, n = props.length; i < n; i++) {
                var prop = props[i];
                target[prop[0]] = prop[1] + prop[2];
            }
            if (this.update)
                this.update.run();
            this._count++;
            if (this.repeat != 0 && this._count >= this.repeat) {
                this.clear();
                handler && handler.run();
            }
            else {
                this.restart();
            }
        };
        /**
         * 暂停缓动，可以通过resume或restart重新开始。
         */
        Tween.prototype.pause = function () {
            Engine.timer.clear(this, this._beginLoop);
            Engine.timer.clear(this, this._doEase);
            Engine.timer.clear(this, this.firstStart);
            var time = Date.now();
            var dTime = NaN;
            dTime = time - this._startTimer - this._delay;
            if (dTime < 0) {
                this._usedTimer = dTime;
            }
        };
        /**
         * 设置开始时间。
         * @param	startTime 开始时间。
         */
        Tween.prototype.setStartTime = function (startTime) {
            this._startTimer = startTime;
        };
        /**
         * 停止并清理当前缓动。
         */
        Tween.prototype.clear = function () {
            if (this._target) {
                this._remove();
                this._clear();
            }
        };
        /**
         * @private
         */
        Tween.prototype._clear = function () {
            this.pause();
            Engine.timer.clear(this, this.firstStart);
            this._complete = null;
            this._target = null;
            this._ease = null;
            this._props = null;
            this._delayParam = null;
            if (this._usedPool) {
                this.update = null;
                Engines.Pool.recover("tween", this);
            }
        };
        /** 回收到对象池。*/
        Tween.prototype.recover = function () {
            this._usedPool = true;
            this._clear();
        };
        Tween.prototype._remove = function () {
            var tweens = Tween.tweenMap[this._target.$_GID];
            if (tweens) {
                for (var i = 0, n = tweens.length; i < n; i++) {
                    if (tweens[i] === this) {
                        tweens.splice(i, 1);
                        break;
                    }
                }
            }
        };
        /**
         * 重新开始暂停的缓动。
         */
        Tween.prototype.restart = function () {
            this.pause();
            this._usedTimer = 0;
            this._startTimer = Date.now();
            if (this._delayParam) {
                Engine.timer.once(this._delay, this, this.firstStart, this._delayParam);
                return;
            }
            var props = this._props;
            for (var i = 0, n = props.length; i < n; i++) {
                var prop = props[i];
                this._target[prop[0]] = prop[1];
            }
            Engine.timer.once(this._delay, this, this._beginLoop);
        };
        /**
         * 恢复暂停的缓动。
         */
        Tween.prototype.resume = function () {
            if (this._usedTimer >= this._duration)
                return;
            this._startTimer = Date.now() - this._usedTimer - this._delay;
            if (this._delayParam) {
                if (this._usedTimer < 0) {
                    Engine.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam);
                }
                else {
                    this.firstStart.apply(this, this._delayParam);
                }
            }
            else {
                this._beginLoop();
            }
        };
        Object.defineProperty(Tween.prototype, "progress", {
            /**设置当前执行比例**/
            set: function (v) {
                var uTime = v * this._duration;
                this._startTimer = Date.now() - this._delay - uTime;
            },
            enumerable: true,
            configurable: true
        });
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
        Tween.to = function (target, props, duration, ease, complete, delay, coverBefore, autoRecover) {
            (delay === void 0) && (delay = 0);
            (coverBefore === void 0) && (coverBefore = false);
            (autoRecover === void 0) && (autoRecover = true);
            return Engines.Pool.getItemByClass("tween", Tween)._create(target, props, duration, ease, complete, delay, coverBefore, true, autoRecover, true);
        };
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
        Tween.from = function (target, props, duration, ease, complete, delay, coverBefore, autoRecover) {
            (delay === void 0) && (delay = 0);
            (coverBefore === void 0) && (coverBefore = false);
            (autoRecover === void 0) && (autoRecover = true);
            return Engines.Pool.getItemByClass("tween", Tween)._create(target, props, duration, ease, complete, delay, coverBefore, false, autoRecover, true);
        };
        /**
         * 清理指定目标对象上的所有缓动。
         * @param	target 目标对象。
         */
        Tween.clearAll = function (target) {
            if (!target || !target.$_GID)
                return;
            var tweens = Tween.tweenMap[target.$_GID];
            if (tweens) {
                for (var i = 0, n = tweens.length; i < n; i++) {
                    tweens[i]._clear();
                }
                tweens.length = 0;
            }
        };
        /**
         * 清理某个缓动。
         * @param	tween 缓动对象。
         */
        Tween.clear = function (tween) {
            tween.clear();
        };
        Tween.clearTween = function (target) {
            Tween.clearAll(target);
        };
        Tween.easeNone = function (t, b, c, d) {
            return c * t / d + b;
        };
        Tween.tweenMap = [];
        return Tween;
    }());
    Engines.Tween = Tween;
})(Engines || (Engines = {}));
var BitHelper = /** @class */ (function () {
    function BitHelper() {
    }
    /** 是否包含 */
    BitHelper.Contain = function (val, type) {
        return (val & type) != 0;
    };
    /** 添加 */
    BitHelper.Add = function (val, type) {
        return val | type;
    };
    BitHelper.BitUnset = function (ui, len, bit) {
        var mask = ((1 << len + 1) - 1);
        return ui & ~(mask << bit);
    };
    BitHelper.BitSet = function (ui, len, bit, val) {
        var mask = ((1 << len + 1) - 1);
        var nv = mask & val;
        return ui & ~(mask << bit) | (nv << bit);
    };
    BitHelper.BitGet = function (ui, len, bit) {
        var mask = ((1 << len + 1) - 1);
        return ui & (mask << bit);
    };
    BitHelper.Bit2Str = function (bit) {
        var kb = bit / 8 / 1024;
        if (kb < 1024) {
            return StringUtils.FloatLength(kb, 100) + " KB";
        }
        else {
            var mb = kb / 1024;
            return StringUtils.FloatLength(mb, 100) + " MB";
        }
    };
    BitHelper.Byte2Str = function (bytesSize) {
        var kb = bytesSize / 1024;
        if (kb < 1024) {
            return StringUtils.FloatLength(kb, 100) + " KB";
        }
        else {
            var mb = kb / 1024;
            return StringUtils.FloatLength(mb, 100) + " MB";
        }
    };
    return BitHelper;
}());
function isNumber(x) {
    return typeof x === "number";
}
//判断是否是正整数
function isInt(s) {
    if (s != null) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r == s) ? true : false;
    }
    return false;
}
function isString(x) {
    return typeof x === "string";
}
function isNullOrEmpty(x) {
    if (x instanceof Array)
        return x == null || x == undefined;
    return x == null || x == undefined || x == "";
}
function isNaNOrEmpty(x) {
    return isNaN(x) || x === undefined || x === null;
}
// 获取类名
function getClassName(obj) {
    return obj["constructor"]["name"];
}
// 获取函数名
function getFunctionName(method) {
    return method["name"] || method.toString().match(/function\s*([^(]*)\(/)[1];
}
// 获取时间戳
function getTime() {
    return new Date().getTime();
}
// 获取时间戳 （秒）
function getTimeStamp() {
    return Math.floor(getTime() / 1000);
}
function bToStr(b) {
    if (b < 1024) {
        return b + "B";
    }
    var kb = b / 1024;
    return kbToStr(kb);
}
function kbToStr(kb) {
    if (kb < 1024) {
        return Math.ceil(kb) + "KB";
    }
    var mb = kb / 1024;
    if (mb < 1024) {
        return (Math.ceil(mb * 100) / 100) + "MB";
    }
    var gb = mb / 1024;
    return (Math.ceil(gb * 100) / 100) + "GB";
}
function arrayRemoveItem(arr, item) {
    var i = arr.indexOf(item);
    if (i != -1) {
        arr.splice(i, 1);
        return true;
    }
    return false;
}
var Mathf = /** @class */ (function () {
    function Mathf() {
    }
    /** 小数点多少位 */
    Mathf.FloatLength = function (num, floatM) {
        if (floatM === void 0) { floatM = 100; }
        if (floatM == 0) {
            return Math.floor(num);
        }
        return Math.floor(num * floatM) / floatM;
    };
    Mathf.clamp = function (num, min, max) {
        return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
    };
    Mathf.Clamp01 = function (value) {
        if (value < 0.0)
            return 0.0;
        if (value > 1.0)
            return 1;
        return value;
    };
    /// <summary>
    ///   <para>Linearly interpolates between a and b by t.</para>
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <param name="t"></param>
    Mathf.Lerp = function (a, b, t) {
        return a + (b - a) * Mathf.Clamp01(t);
    };
    /** 弧度, 计算2个点 */
    Mathf.radian = function (fromX, fromY, toX, toY) {
        var dx = toX - fromX;
        var dy = toY - fromY;
        return Math.atan2(dy, dx);
    };
    /** 角度, 计算2个点 */
    Mathf.angle = function (fromX, fromY, toX, toY) {
        return this.radian(fromX, fromY, toX, toY) * 180 / Math.PI;
    };
    /** 角度 转 弧度 */
    Mathf.angleToRadian = function (angle) {
        return angle * Math.PI / 180;
    };
    /** 弧度 转 角度 */
    Mathf.radianToAngle = function (radian) {
        return radian * 180 / Math.PI;
    };
    /** 距离, 计算2个点 */
    Mathf.distanceangle = function (fromX, fromY, toX, toY) {
        var dx = toX - fromX;
        var dy = toY - fromY;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Mathf.directionPointX = function (fromX, fromY, toX, toY, length) {
        return Math.cos(this.radian(fromX, fromY, toX, toY)) * length + fromX;
    };
    Mathf.directionPointY = function (fromX, fromY, toX, toY, length) {
        return Math.sin(this.radian(fromX, fromY, toX, toY)) * length + fromY;
    };
    /** 弧度方向 点 */
    Mathf.radianPointX = function (radian, length, fromX) {
        return Math.cos(radian) * length + fromX;
    };
    Mathf.radianPointY = function (radian, length, fromY) {
        return Math.sin(radian) * length + fromY;
    };
    /** 弧度方向 点 */
    Mathf.anglePointX = function (angle, length, fromX) {
        return Math.cos(this.angleToRadian(angle)) * length + fromX;
    };
    Mathf.anglePointY = function (angle, length, fromY) {
        return Math.sin(this.angleToRadian(angle)) * length + fromY;
    };
    return Mathf;
}());
var NumberTransfrom = /** @class */ (function () {
    function NumberTransfrom() {
        this.unms = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        this.digits = ["", "十", "百", "千"];
        this.units = ["", "万", "亿", "万亿", "亿亿"];
    }
    //检查字符串s是否全为数字
    NumberTransfrom.prototype.checkIsNumbers = function (x) {
        if (null == x) {
            return false;
        }
        for (var i = 0; i < x.length; i++) {
            var c = parseInt(x[i]);
            if (isNaN(c)) {
                return false;
            }
        }
        return true;
    };
    NumberTransfrom.prototype.transfrom2 = function (num) {
        if (null == num) {
            return "您输入的字符串地址为null！";
        }
        var str = num;
    };
    // 转换
    NumberTransfrom.prototype.transfrom = function (num) {
        if (null == num) {
            return "您输入的字符串地址为null！";
        }
        var x = num.toString();
        if (0 == x.length) {
            return "您输入的字符串长度为0，请输入要转换的数字！";
        }
        if (x.length > 16) {
            return "您输入的字符串长度大于16，无法转换！";
        }
        //去除字符串首部的0，例如：0010->10
        var fm;
        for (fm = 0; fm < x.length; fm++) {
            if (x.charAt(fm) != '0') {
                break;
            }
        }
        x = x.substring(fm); //去除完毕
        //把字符串看作一些组，例如：123456789->1,2345,6789
        var result = "";
        var p = 0;
        var m = x.length % 4;
        var k = (m > 0 ? Math.floor(x.length / 4) + 1 : Math.floor(x.length / 4));
        //从最左边的那组开始，向右循环
        for (var i = k; i > 0; i--) {
            var len = 4;
            if (i == k && m != 0) //当i为最左边的那组时，组长度可能有变化
             {
                len = m;
            }
            var s = x.substring(p, p + len);
            var le = s.length;
            for (var j = 0; j < le; j++) {
                var n = parseInt(s.substring(j, j + 1));
                if (0 == n) {
                    if (j < le - 1 && parseInt(s.substring(j + 1, j + 2)) > 0 && !result.eEndsWith(this.unms[0])) { //加零的条件：不为最后一位 && 下一位数字大于0 && 以前没有加过“零”
                        result += this.unms[0];
                    }
                }
                else {
                    if (!(n == 1 && (result.eEndsWith(this.unms[0]) || result.length == 0) && j == le - 2)) { //处理1013一千零"十三"，1113 一千一百"一十三"
                        result += this.unms[n];
                    }
                    result += this.digits[le - j - 1];
                }
            }
            if (0 != parseInt(s)) //如果这组数字不全是 0 ，则加上单位：万，亿，万亿
             {
                result += this.units[i - 1];
            }
            p += len;
        }
        return result;
    };
    return NumberTransfrom;
}());
var Random = /** @class */ (function () {
    function Random() {
    }
    // int
    // min <= r < max
    Random.range = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.floor(range * rand);
    };
    // int
    // min <= r <= max
    Random.rangeBoth = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.round(range * rand);
    };
    // int
    // min < r < max
    Random.rangeBetween = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        if (Math.round(rand * range) == 0) {
            return min + 1;
        }
        else if (Math.round(rand * max) == max) {
            return max - 1;
        }
        else {
            return min + Math.round(rand * range) - 1;
        }
    };
    /// <summary>
    /// 乱序排列一个数组
    /// </summary>
    Random.GetDisorderList = function (list) {
        var countNum = list.length;
        var listA = new Array();
        var listB = new Array();
        for (var i = 0; i < countNum; i++) {
            listA.push(list[i]);
        }
        while (listB.length < countNum) {
            var index = Random.range(0, listA.length);
            if (listB.indexOf(listA[index]) === -1) {
                listB.push(listA[index]);
                listA.splice(index, 1);
            }
        }
        return listB;
    };
    return Random;
}());
function toStringArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;&]/; }
    return txt.split(separator);
}
function toIntArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;&]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseInt(arr[i]));
    }
    return list;
}
function toFloatArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;&]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseFloat(arr[i]));
    }
    return list;
}
function toInt(val) {
    return parseInt(val);
}
function toFloat(val) {
    return parseFloat(val);
}
function toBoolean(val) {
    if (val) {
        if (isNumber(val)) {
            return val != 0;
        }
        else if (isString(val)) {
            return val == "true" || parseInt(val) != 0;
        }
        return true;
    }
    else {
        return false;
    }
}
function toBooleanArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;&]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(toBoolean(arr[i]));
    }
    return list;
}
function configCellToArray(txt, separator) {
    if (separator === void 0) { separator = /[;]/; }
    return toStringArray(txt, separator);
}
function csvGetInt(csv, i) {
    return parseInt(csv[i]);
}
function csvGetFloat(csv, i) {
    return parseFloat(csv[i]);
}
function csvGetBoolean(csv, i) {
    return toBoolean(csv[i]);
}
function csvGetString(csv, i) {
    return csv[i];
}
function firstUpperCase(str) {
    return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}
/**
 * format('{0} {1} {2}', params1, params2, params3)
 * format('{0} {1:U} {2:L}', params1, params2, params3)
 * @param value
 * @param args
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
            var s = match.split(':');
            if (s.length > 1) {
                i = i[0];
                match = s[1].replace('}', '');
            }
            var arg = formatPattern(match, args[i]);
            return typeof arg != 'undefined' && arg != null ? arg : "";
        });
    }
    catch (e) {
        return "";
    }
}
function formatPattern(match, arg) {
    switch (match) {
        case 'L':
            arg = arg.toLowerCase();
            break;
        case 'U':
            arg = arg.toUpperCase();
            break;
        default:
            break;
    }
    return arg;
}
function isNullOrWhiteSpace(value) {
    try {
        if (value == null || value == 'undefined')
            return false;
        return value.replace(/\s/g, '').length < 1;
    }
    catch (e) {
        return false;
    }
}
//开头与结尾是否有空格字符
function isStartOrEndWithSpace(s) {
    var index = s.indexOf(" ");
    var lastIndex = s.lastIndexOf(" ");
    if (index == 0 || lastIndex == s.length - 1) {
        return true;
    }
    return false;
}
//开头与结尾是否是数字
function isStartOrEndWithNumber(s) {
    var fristChar = s.charAt(0);
    var lastChar = s.charAt(s.length - 1);
    if (isInt(fristChar) || isInt(lastChar)) {
        return true;
    }
    return false;
}
function trim(s) {
    return s.replace(/[\r\n]/g, "");
}
//////////////////////////////////////////////////////////////////////////
var __NumberUnitText = /** @class */ (function () {
    function __NumberUnitText() {
    }
    __NumberUnitText.B = "B";
    __NumberUnitText.M = "M";
    __NumberUnitText.K = "K";
    return __NumberUnitText;
}());
var __NumberUnitValue = /** @class */ (function () {
    function __NumberUnitValue() {
    }
    __NumberUnitValue.K = 1000;
    __NumberUnitValue.M = 1000 * 1000;
    __NumberUnitValue.B = 1000 * 1000 * 1000;
    return __NumberUnitValue;
}());
/**
 * 格式化数字 为K M B格式化
 * @param value 数字
 * @param fixed 数字保留几位
 */
function formatNumberUnit(value, fixed) {
    if (fixed === void 0) { fixed = 1; }
    var str = "";
    if (value >= __NumberUnitValue.B * 10) {
        value = value / __NumberUnitValue.B;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.B;
    }
    else if (value >= __NumberUnitValue.M * 10) {
        value = value / __NumberUnitValue.M;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.M;
    }
    else if (value >= __NumberUnitValue.K * 10) {
        value = value / __NumberUnitValue.K;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.K;
    }
    else {
        str = Math.floor(value) + "";
    }
    var a = str.split(".");
    var num = parseInt(a[0]);
    var result = num.toLocaleString('en-US');
    if (a.length >= 2) {
        if (fixed > 0) {
            result = result + "." + a[1];
        }
        else {
            result = result + a[1];
        }
    }
    return result;
}
function formatArrayNumberUnit(fmat) {
    var numbs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbs[_i - 1] = arguments[_i];
    }
    var args = [];
    for (var index = 0; index < numbs.length; index++) {
        var num = numbs[index];
        args.push(formatNumberUnit(num, num > 1000 ? 1 : 0));
    }
    return fmat.format.apply(fmat, args);
}
/**
 * 数字转化为字母 大写
 * @param value 数字
 * @param isCapital 是否大写
 */
function numberToLetter(value, isCapital) {
    if (isCapital === void 0) { isCapital = true; }
    if (value <= 0) {
        return null;
    }
    var letter = "";
    value--;
    if (value > 26) {
        return "";
    }
    if (value < 0) {
        return "";
    }
    var AString = isCapital ? 'A' : 'a';
    letter = String.fromCharCode(value + AString.charCodeAt(0));
    return letter;
}
function getStringLength(str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
}
;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /** 小数点多少位 */
    StringUtils.FloatLength = function (num, floatM) {
        if (floatM === void 0) { floatM = 100; }
        return Mathf.FloatLength(num, floatM).toString();
    };
    /** 填充长度 */
    StringUtils.FillLeft = function (str, length, c) {
        if (c === void 0) { c = '0'; }
        while (str.length < length) {
            str = c + str;
        }
        return str;
    };
    StringUtils.FillRight = function (str, length, c) {
        if (c === void 0) { c = '0'; }
        while (str.length < length) {
            str = str + c;
        }
        return str;
    };
    Object.defineProperty(StringUtils, "numberTransfrom", {
        get: function () {
            if (!this._numberTransfrom) {
                this._numberTransfrom = new NumberTransfrom();
            }
            return this._numberTransfrom;
        },
        enumerable: true,
        configurable: true
    });
    /** 获取中文数字 */
    StringUtils.GetChineseNum = function (num) {
        return this.numberTransfrom.transfrom(num);
    };
    /** 字符串 */
    StringUtils.empty = "";
    return StringUtils;
}());
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SyncHellper = /** @class */ (function () {
    function SyncHellper() {
    }
    SyncHellper.waitTime = function (millisecond) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Engine.timer.once(millisecond, _this, function () {
                            return resolve();
                        }, null, false);
                    })];
            });
        });
    };
    SyncHellper.waitFrame = function (frameNum) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Engine.timer.frameOnce(frameNum, _this, function () {
                            return resolve();
                        });
                    })];
            });
        });
    };
    return SyncHellper;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.dict = {};
        this._count = 0;
    }
    Object.defineProperty(Dictionary.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.add = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
        }
        this.dict[key] = val;
    };
    Dictionary.prototype.set = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
        }
        this.dict[key] = val;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.hasKey(key)) {
            this._count--;
        }
        // this.dict[key] = undefined;
        delete this.dict[key];
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.dict[key] != undefined;
    };
    Dictionary.prototype.getValue = function (key) {
        return this.dict[key];
    };
    Dictionary.prototype.getValueOrDefault = function (key, _default) {
        if (this.hasKey(key)) {
            return this.getValue(key);
        }
        else {
            return _default;
        }
    };
    Dictionary.prototype.__getDict = function () {
        return this.dict;
    };
    Dictionary.prototype.getValues = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(this.dict[key]);
        }
        return list;
    };
    Dictionary.prototype.getKeys = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(key);
        }
        return list;
    };
    Dictionary.prototype.clear = function () {
        this.dict = {};
        this._count = 0;
    };
    return Dictionary;
}());
/** 二维Key字典列表 */
var DoubleKeyList = /** @class */ (function () {
    function DoubleKeyList() {
        this.key1Dict = new Dictionary();
    }
    DoubleKeyList.prototype.getDict = function (key1) {
        return this.key1Dict.getValue(key1);
    };
    DoubleKeyList.prototype.getOrCreateDict = function (key1) {
        var dict = this.key1Dict.getValue(key1);
        if (!dict) {
            dict = new UnOrderMultiMap();
            this.key1Dict.add(key1, dict);
        }
        return dict;
    };
    DoubleKeyList.prototype.addItem = function (key1, key2, v) {
        var dict = this.getOrCreateDict(key1);
        dict.addItem(key2, v);
    };
    DoubleKeyList.prototype.removeItem = function (key1, key2, v) {
        var dict = this.getDict(key1);
        if (dict) {
            dict.removeItem(key2, v);
        }
    };
    DoubleKeyList.prototype.getItemList = function (key1, key2) {
        var dict = this.getDict(key1);
        if (dict) {
            return dict.get(key2);
        }
        return null;
    };
    return DoubleKeyList;
}());
/** 二维Key字典 */
var DoubleKeyMap = /** @class */ (function () {
    function DoubleKeyMap() {
        this.key1Dict = new Dictionary();
    }
    DoubleKeyMap.prototype.getDict = function (key1) {
        return this.key1Dict.getValue(key1);
    };
    DoubleKeyMap.prototype.getOrCreateDict = function (key1) {
        var dict = this.key1Dict.getValue(key1);
        if (!dict) {
            dict = new Dictionary();
            this.key1Dict.add(key1, dict);
        }
        return dict;
    };
    DoubleKeyMap.prototype.add = function (key1, key2, v) {
        var dict = this.getOrCreateDict(key1);
        dict.add(key2, v);
    };
    DoubleKeyMap.prototype.remove = function (key1, key2) {
        var dict = this.getDict(key1);
        if (dict) {
            dict.remove(key2);
        }
    };
    DoubleKeyMap.prototype.getValue = function (key1, key2) {
        var dict = this.getDict(key1);
        if (dict) {
            return dict.getValue(key2);
        }
        return null;
    };
    DoubleKeyMap.prototype.getValues = function (key1) {
        var dict = this.getDict(key1);
        if (dict) {
            return dict.getValues();
        }
        return null;
    };
    return DoubleKeyMap;
}());
var UnOrderMultiMap = /** @class */ (function () {
    function UnOrderMultiMap() {
        this.dictionary = new Dictionary();
        // 重用list
        this.queue = [];
    }
    UnOrderMultiMap.prototype.__getDict = function () {
        return this.dictionary;
    };
    UnOrderMultiMap.prototype.FetchList = function () {
        if (this.queue.length > 0) {
            var list = this.queue.shift();
            list.length = 0;
            return list;
        }
        return [];
    };
    UnOrderMultiMap.prototype.RecycleList = function (list) {
        list.length = 0;
        // 防止暴涨
        if (this.queue.length > 100) {
            return;
        }
        this.queue.push(list);
    };
    UnOrderMultiMap.prototype.addItem = function (t, k) {
        var list = this.dictionary.getValue(t);
        if (!list) {
            list = this.FetchList();
            this.dictionary.add(t, list);
        }
        list.push(k);
    };
    UnOrderMultiMap.prototype.removeItem = function (t, k) {
        var list = this.dictionary.getValue(t);
        if (!list) {
            return false;
        }
        if (!arrayRemoveItem(list, k)) {
            return false;
        }
        if (list.length == 0) {
            this.RecycleList(list);
            this.dictionary.remove(t);
        }
        return true;
    };
    UnOrderMultiMap.prototype.removeList = function (t) {
        var list = this.dictionary.getValue(t);
        if (!list) {
            this.RecycleList(list);
        }
        return this.dictionary.remove(t);
    };
    Object.defineProperty(UnOrderMultiMap.prototype, "count", {
        get: function () {
            return this.dictionary.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnOrderMultiMap.prototype, "allCount", {
        get: function () {
            var objs = this.dictionary.__getDict();
            var list;
            var count = 0;
            for (var key in objs) {
                list = objs[key];
                count += list.length;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    /// <summary>
    /// 不返回内部的list,copy一份出来
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    UnOrderMultiMap.prototype.getAll = function (t) {
        var list = this.dictionary.getValue(t);
        if (!list) {
            return [];
        }
        return list.slice(0);
    };
    /// <summary>
    /// 返回内部的list
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    UnOrderMultiMap.prototype.get = function (t) {
        return this.dictionary.getValue(t);
    };
    UnOrderMultiMap.prototype.Contains = function (t, k) {
        var list = this.get(t);
        if (!list) {
            return false;
        }
        return list.indexOf(k) != -1;
        // return list.includes(k);
    };
    UnOrderMultiMap.prototype.ContainsKey = function (t) {
        return this.dictionary.hasKey(t);
    };
    UnOrderMultiMap.prototype.clear = function () {
        var values = this.dictionary.getValues();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var val = values_1[_i];
            this.RecycleList(val);
        }
        this.dictionary.clear();
    };
    UnOrderMultiMap.prototype.GetKeys = function () {
        return this.dictionary.getKeys();
    };
    return UnOrderMultiMap;
}());
/** 绑定 */
var Bindable = /** @class */ (function () {
    function Bindable(value) {
        if (value === void 0) { value = null; }
        this._changeWatcher = new TypedSignal();
        this._value = value;
    }
    Object.defineProperty(Bindable.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Bindable.prototype.add = function (listener, self) {
        this._changeWatcher.add(listener, self);
    };
    Bindable.prototype.remove = function (listener, self) {
        this._changeWatcher.remove(listener, self);
    };
    Bindable.prototype.removeAll = function () {
        this._changeWatcher.removeAll();
    };
    Bindable.prototype.bindTo = function (target) {
        var _this = this;
        this.value = target.value;
        target.add(function (t) { return _this.setValue(t); }, this);
    };
    Bindable.prototype.unbind = function (target) {
        var _this = this;
        target.remove(function (t) { return _this.setValue(t); }, this);
    };
    Bindable.prototype.setValue = function (value) {
        if (value != this._value) {
            this._value = value;
            this._changeWatcher.dispatch(value);
        }
    };
    return Bindable;
}());
/**
 * 事件
 */
var Emitter = /** @class */ (function () {
    function Emitter(isDispatchName) {
        if (isDispatchName === void 0) { isDispatchName = false; }
        /** 监听数组 */
        this.listeners = {};
        /** 是否把事件名称抛当参数抛给回调 */
        this.isDispatchName = false;
        this.isDispatchName = isDispatchName;
    }
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.add = function (name, callback, context) {
        var hasRegistered = false;
        var observers = this.listeners[name];
        if (!observers) {
            this.listeners[name] = [];
        }
        else {
            var length_1 = observers.length;
            for (var i = 0; i < length_1; i++) {
                var observer = observers[i];
                if (observer.comparAll(callback, context)) {
                    hasRegistered = true;
                }
            }
        }
        if (!hasRegistered) {
            this.listeners[name].push(new Observer(callback, context));
        }
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.remove = function (name, callback, context) {
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete this.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.prototype.dispatch = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = length - 1; i >= 0; i--) {
            var observer = observers[i];
            if (this.isDispatchName) {
                observer.notify.apply(observer, [name].concat(args));
            }
            else {
                observer.notify.apply(observer, args);
            }
        }
    };
    return Emitter;
}());
/**
 * 观察者
 */
var Observer = /** @class */ (function () {
    function Observer(callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        var self = this;
        self.callback = callback;
        self.context = context;
    }
    /**
     * 发送通知
     * @param args 不定参数
     */
    Observer.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        var self = this;
        (_a = self.callback).call.apply(_a, [self.context].concat(args));
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.compar = function (context) {
        return context == this.context;
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.comparAll = function (callback, context) {
        return callback == this.callback && context == this.context;
    };
    return Observer;
}());
var Signal = /** @class */ (function () {
    function Signal() {
        this._listeners = [];
    }
    Signal.prototype.add = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new SignalHandler(listener, self));
        }
    };
    Signal.prototype.addOnce = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new SignalHandler(listener, self, true));
        }
    };
    Signal.prototype.hasListener = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                return true;
            }
        }
        return false;
    };
    Signal.prototype.remove = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                this._listeners.splice(i, 1);
                break;
            }
        }
    };
    Signal.prototype.removeAll = function () {
        this._listeners.length = 0;
    };
    Signal.prototype.dispatch = function () {
        this._listeners.forEach(function (handler) { return handler.apply(); });
        this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
    };
    return Signal;
}());
var SignalHandler = /** @class */ (function () {
    function SignalHandler(handler, self, once) {
        if (once === void 0) { once = false; }
        this._handler = handler;
        this._self = self;
        this._once = once;
    }
    SignalHandler.prototype.apply = function () {
        this._handler.apply(this._self);
    };
    SignalHandler.prototype.equals = function (handler, self) {
        return this._handler == handler && this._self == self;
    };
    SignalHandler.prototype.once = function () {
        return this._once;
    };
    return SignalHandler;
}());
var Typed2Signal = /** @class */ (function () {
    function Typed2Signal() {
        this._listeners = [];
    }
    Typed2Signal.prototype.add = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new Typed2SignalHandler(listener, self));
        }
    };
    Typed2Signal.prototype.addOnce = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new Typed2SignalHandler(listener, self, true));
        }
    };
    Typed2Signal.prototype.hasListener = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                return true;
            }
        }
        return false;
    };
    Typed2Signal.prototype.remove = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                this._listeners.splice(i, 1);
                break;
            }
        }
    };
    Typed2Signal.prototype.removeAll = function () {
        this._listeners.length = 0;
    };
    Typed2Signal.prototype.dispatch = function (value1, value2) {
        this._listeners.forEach(function (handler) { return handler.apply(value1, value2); });
        this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
    };
    return Typed2Signal;
}());
var Typed2SignalHandler = /** @class */ (function () {
    function Typed2SignalHandler(handler, self, once) {
        if (once === void 0) { once = false; }
        this._handler = handler;
        this._self = self;
        this._once = once;
    }
    Typed2SignalHandler.prototype.apply = function (arg1, arg2) {
        this._handler.apply(this._self, [arg1, arg2]);
    };
    Typed2SignalHandler.prototype.equals = function (handler, self) {
        return this._handler == handler && this._self == self;
    };
    Typed2SignalHandler.prototype.once = function () {
        return this._once;
    };
    return Typed2SignalHandler;
}());
var Typed3Signal = /** @class */ (function () {
    function Typed3Signal() {
        this._listeners = [];
    }
    Typed3Signal.prototype.add = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new Typed3SignalHandler(listener, self));
        }
    };
    Typed3Signal.prototype.addOnce = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new Typed3SignalHandler(listener, self, true));
        }
    };
    Typed3Signal.prototype.hasListener = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                return true;
            }
        }
        return false;
    };
    Typed3Signal.prototype.remove = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                this._listeners.splice(i, 1);
                break;
            }
        }
    };
    Typed3Signal.prototype.removeAll = function () {
        this._listeners.length = 0;
    };
    Typed3Signal.prototype.dispatch = function (value1, value2, value3) {
        this._listeners.forEach(function (handler) { return handler.apply(value1, value2, value3); });
        this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
    };
    return Typed3Signal;
}());
var Typed3SignalHandler = /** @class */ (function () {
    function Typed3SignalHandler(handler, self, once) {
        if (once === void 0) { once = false; }
        this._handler = handler;
        this._self = self;
        this._once = once;
    }
    Typed3SignalHandler.prototype.apply = function (arg1, arg2, arg3) {
        this._handler.apply(this._self, [arg1, arg2, arg3]);
    };
    Typed3SignalHandler.prototype.equals = function (handler, self) {
        return this._handler == handler && this._self == self;
    };
    Typed3SignalHandler.prototype.once = function () {
        return this._once;
    };
    return Typed3SignalHandler;
}());
var TypedSignal = /** @class */ (function () {
    function TypedSignal() {
        this._listeners = [];
    }
    TypedSignal.prototype.add = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new TypedSignalHandler(listener, self));
        }
    };
    TypedSignal.prototype.addOnce = function (listener, self) {
        if (!this.hasListener(listener, self)) {
            this._listeners.push(new TypedSignalHandler(listener, self, true));
        }
    };
    TypedSignal.prototype.hasListener = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                return true;
            }
        }
        return false;
    };
    TypedSignal.prototype.remove = function (listener, self) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].equals(listener, self)) {
                this._listeners.splice(i, 1);
                break;
            }
        }
    };
    TypedSignal.prototype.removeAll = function () {
        this._listeners.length = 0;
    };
    TypedSignal.prototype.dispatch = function (value) {
        this._listeners.forEach(function (handler) { return handler.apply(value); });
        this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
    };
    return TypedSignal;
}());
var TypedSignalHandler = /** @class */ (function () {
    function TypedSignalHandler(handler, self, once) {
        if (once === void 0) { once = false; }
        this._handler = handler;
        this._self = self;
        this._once = once;
    }
    TypedSignalHandler.prototype.apply = function (arg) {
        this._handler.apply(this._self, [arg]);
    };
    TypedSignalHandler.prototype.equals = function (handler, self) {
        return this._handler == handler && this._self == self;
    };
    TypedSignalHandler.prototype.once = function () {
        return this._once;
    };
    return TypedSignalHandler;
}());
