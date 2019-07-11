namespace Engines
{
    export class Browser
    {
        /** 获取当前设备的网络类型, 如果网络类型无法获取，默认将返回  */
        getNetworkType():number
        {
            return cc.sys.getNetworkType();
        }
        
        /** 返回手机屏幕安全区域，目前仅在 iOS 原生平台有效。其它平台将默认返回设计分辨率尺寸。  */
        getSafeAreaRect()
        {
            return cc.sys.getSafeAreaRect();
        }


        /** 是否有刘海 */
        private _isLiuHai:boolean;
        get isLiuHai(): boolean
        {
            if(this._isLiuHai === undefined)
            {
                if(!this.isBrowser)
                {
                    this._isLiuHai = window.innerWidth / window.innerHeight <= 0.5;
                }
            }
            return this._isLiuHai;
        }


        /** 是否是微信小游戏 */
        get isWXGame(): boolean
        {
            return this.platform == BrowserPlatform.WECHAT_GAME;
        }

        /** 是否是微信小游戏主域 */
        get isWXGameMainDomain(): boolean
        {
            return this.isWXGame && this.browserType == BrowserType.BROWSER_TYPE_WECHAT_GAME;
        }

        /** 是否是微信小游戏子域 */
        get isWXGameSubDomain(): boolean
        {
            return this.isWXGame && this.browserType == BrowserType.BROWSER_TYPE_WECHAT_GAME_SUB;
        }

        get isBrowser(): boolean
        {
            return cc.sys.isBrowser;
        }
        
        get isMobile(): boolean
        {
            return cc.sys.isMobile;
        }

        get isNative(): boolean
        {
            return cc.sys.isNative;
        }

        /** "zh" */
        get language(): BrowserLanguage
        {
            return cc.sys.language;
        }
        /** "zh-cn" */
        get languageCode(): string
        {
            return cc.sys.languageCode;
        }

        /** "chrome" */
        get browserType(): BrowserType
        {
            return cc.sys.browserType;
        }

        /** 72.0.3626.121 */
        get browserVersion(): string
        {
            return cc.sys.browserVersion;
        }
        

        /** "Windows" */
        get os(): BrowserOS
        {
            return cc.sys.os;
        }

        /** 0 */
        get osMainVersion(): number
        {
            return cc.sys.osMainVersion;
        }

        /** "" */
        get osVersion(): string
        {
            return cc.sys.osVersion;
        }

        get windowPixelResolution(): {width: number, height: number}
        {
            return cc.sys.windowPixelResolution;
        }

        /** 101 */
        get platform(): BrowserPlatform
        {
            return cc.sys.platform; 
        }

    }

    export enum BrowserType
    {
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
    
    export enum BrowserPlatform
    {
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
    
    export enum BrowserLanguage
    {
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
    
    
    export enum BrowserOS
    {
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