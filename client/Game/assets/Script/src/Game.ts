import ConfigManager from "./Config/ConfigManager";
import ScreenSettingConfig from "./GameSetting/ScreenSettingConfig";
import GameLocalStorage from "./GameFrame/LocalStorage/GameLocalStorage";
import GameDeviceConfig from "./GameSetting/GameDeviceConfig";
import LangManager from "./Config/LangManager";
import AssetManager from "./GameFrame/AssetManagers/AssetManager";
import GuiResPackageConfigReader from "./FGUI/GuiResPackageConfigReader";
import MenuManager from "./GameFrame/Menu/MenuManager";
import ChannelManager from "./GameFrame/Channel/ChannelManager";
import ModelManager from "./GameModule/ModelManager";
import VersionManager from "./GameVersion/VersionManager";
import AudioManager from "./GameFrame/Sound/AudioManager";
import GameTimeData from "./GameFrame/Datas/GameTimeData";
import GameSystemMessag from "./GameModule/GameSystemMessage";
import LaunchText from "./Config/Keys/LaunchText";
import LoaderSettingHandler from "./GameFrame/Loader/LoaderSettingHandler";
import LoaderManager from "./GameFrame/Loader/LoaderManager";
import UserData from "./GameModule/DataStructs/UserData";
import GameLaunch from "./GameLaunch";
import ConfigExpression from './Config/ConfigExpression';
import GamePreload from "./GamePreload";
import TookManager from "./SystemTook/TookManager";
import SpriteResPackageConfigReader from "./FGUI/SpriteResPackageConfigReader";
import AntNet from "../Lib/AntFrame/Net/AntNet";
import ProtoSenderList from "./protosenders/ProtoSenderList";
import ProtoHandlerList from "./protohandlers/ProtoHandlerList";


export default class Game
{
    //=====================
    // 游戏设置
    //----------------------

    // 分辨率设置
    static screenSetting:ScreenSettingConfig;
    // 设备设置
    static deviceSetting: GameDeviceConfig;
    // 游戏启动文本
    static launchText: LaunchText;

    

    //=====================
    // 游戏框架模块
    //----------------------

    /** 游戏启动 */
    static launch: GameLaunch ;

    // 资源
    static asset: AssetManager ;
    // 配置
    static config: ConfigManager ;
    // 多语言
    static lang: LangManager ;
    // 配置文件表达式
    static configExp: ConfigExpression ;
    // 声音
    static sound: AudioManager ;
    // 时间
    static time: GameTimeData ;
    // 本地数据存储
    static localStorage: GameLocalStorage ;
    // 加载界面
    static loader: LoaderManager ;
    // 加载界面事件
    static loaderSettingHandler: LoaderSettingHandler ;
    // 菜单
    static menu: MenuManager ;
    // 消息对话框
    static system: GameSystemMessag ;
    // 渠道
    static channel: ChannelManager ;
    // 版本管理
    static version: VersionManager ;
    // 资源预加载
    static preload:GamePreload ;
    
    //=====================
    // 游戏模块
    //----------------------

    // 数据模型
    static moduleModel: ModelManager ;

    // 自己用户角色数据
    static user: UserData ;

    
    //=====================
    // 资源
    //----------------------
    
    // ui资源配置
    static guiRes: GuiResPackageConfigReader ;
    static spriteRes: SpriteResPackageConfigReader ;


    
    //=====================
    // 事件
    //----------------------

    // 游戏--事件
    static event: Emitter ;

    // 网络
    static net ;
    // 协议--消息处理器列表
    static protoHandler ;
    // 协议--消息发送器列表
    static sender ;
    // 订阅管理器
    static took ;
    
    

    private static isInited: boolean = false;
    //=====================
    // 初始化
    //----------------------
    static init()
    {

        if(this.isInited)
            return;
        this.isInited = true;
        
        /*--- 游戏设置 --*/
        
        // 分辨率设置
        this. screenSetting = new ScreenSettingConfig();
        // 设备设置
        this.deviceSetting =  new GameDeviceConfig();
        // 游戏启动文本
        this.launchText = new LaunchText();



        /*--- 游戏框架模块 --*/

        /** 游戏启动 */
        this.launch = new GameLaunch();
        // 资源
        this.asset = new AssetManager();
        // 配置
        this.config = new ConfigManager();
        // 多语言
        this.lang = LangManager.Instance;
        // 配置文件表达式
        this.configExp = new ConfigExpression();
        // 声音
        this.sound = new AudioManager();
        // 时间
        this.time = new GameTimeData();
        // 本地数据存储
        this.localStorage = GameLocalStorage.Instance;
        // 加载界面
        this.loader = LoaderManager.Instance;
        // 加载界面事件
        this.loaderSettingHandler = new LoaderSettingHandler();
        // 菜单
        this.menu = new MenuManager();
        // 消息对话框
        this.system = new GameSystemMessag();
        // 渠道
        this.channel = ChannelManager.Instance;
        // 版本管理
        this.version = VersionManager.Instance;
        // 资源预加载
        this.preload = new GamePreload();


        /*--- 游戏模块 --*/

        // 数据模型
        this.moduleModel = new ModelManager();

        // 自己用户角色数据
        this.user = new UserData();

        
        /*--- 资源 --*/
        
        // ui资源配置
        this.guiRes = new GuiResPackageConfigReader();
        this.spriteRes = new SpriteResPackageConfigReader();


        
        /*--- 事件 --*/

        // 游戏--事件
        this.event = new Emitter();

        // 网络
        this.net = AntNet;
        // 协议--消息处理器列表
        this.protoHandler = new ProtoHandlerList();
        this.protoHandler.init();
        // 协议--消息发送器列表
        this.sender = new ProtoSenderList();
        // 订阅管理器
        this.took = new TookManager();

        
        
    }

}
window["Game"] = Game;