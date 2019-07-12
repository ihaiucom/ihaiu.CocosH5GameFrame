import GuiSetting from "./FGUI/GuiSetting";
import GuiBinderList from "./FGUI/Generates/GuiBinderList";
import GuiResPackageConfig from "./FGUI/GuiResPackageConfig";
import Game from './Game';
import GuiPackageNames from "./FGUI/Generates/GuiPackageNames";
import { LoaderId } from "./GameFrame/Loader/LoaderId";
import MenuLayer from "./GameFrame/Menu/MenuLayer";
import { MenuId } from "./GameModule/MenuId";
import MenuWindows from "./GameModule/MenuWindows";
import GM from "./GM/GM";
import SoundKey from "./FGUI/Generates/SoundKey";
import AntFrameConfig from "../Lib/AntFrame/AntFrameConfig";
declare var net;
export default class GameLaunch 
{
    constructor() 
    {
	}

	// 初始化
	install()
	{
		this.installAsync();
	}


	version = 10002;
	async installAsync()
	{
		
		console.log(window.navigator);
		console.log(window.navigator.userAgent);
		console.log("isWXGame=", Engine.borwer.isWXGame, "  isWXGameMainDomain=", Engine.borwer.isWXGameMainDomain, "  isWXGameSubDomain=", Engine.borwer.isWXGameSubDomain);
		

		Game.init();

		// 初始化UI层级容器
		MenuLayer.install();
		// 初始化UI窗口配置
		MenuWindows.install();

		// 设置FGUI
		await this.initFguiSetting();
		

		// 初始化加载界面
		Game.loader.install();

		// 初始化GM按钮
		// GM.installGMButton();

		// 初始化化版本信息
		Game.version.init();

		// 打开启动界面
		Game.loader.open(LoaderId.Launch);
		Game.loaderSettingHandler.onBegin();

		// 加载网络版本配置
		// await this.loadWebVersionConfigAsync();
		// 加载版本清单文件
		await this.loadVersionAsync();
		// 加载配置
		await this.initConfig();
		// 加载多语言配置
		await this.initLangConfig();
		// 初始化数据模型
		Game.moduleModel.install();
		// 加载服务器列表
		await this.installServerList();
		
		// 资源预加载
		await Game.preload.start();

		Game.loaderSettingHandler.onEnd();

		// 打开登录界面
		Game.menu.open(MenuId.Login);

		// 声音
		Game.sound.install();


		// Game.system.alertText(window.navigator.userAgent);
		
		// Game.loader.closeAll();
		// Game.home.install();
	}

	// 异步加载版本清单文件
	async loadVersionAsync():Promise<void>
	{
		// return new Promise<void>((resolve)=>
		// {
		// 	Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>
		// 	{
		// 		if(Laya.ResourceVersion.manifest && Laya.ResourceVersion.manifest["__ResVersion__"])
		// 		{
		// 			let resVersion = Laya.ResourceVersion.manifest["__ResVersion__"];
		// 			Game.version.localResVersionData.setVersionTxt(resVersion);
		// 			Game.version.localResVersion = resVersion;

		// 		}
		// 		resolve();
		// 	}), Laya.ResourceVersion.FILENAME_VERSION);
		// });
	}



	// 设置FGUI
	async initFguiSetting()
	{

		// 初始化 fgui资源列表
		Game.guiRes.install();

		// 设置fgui文件后缀
		// fgui.UIConfig.packageFileExtension = GuiSetting.packageFileExtension;
		// 注册Loader类
		// fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
		// 绑定组件
		GuiBinderList.fguiBinderAll();
		// 设置按钮声音
		fgui.UIConfig.buttonSound = SoundKey.getUrl(SoundKey.MM01_Button);
		//设置字体
		fgui.UIConfig.defaultFont = "_sans";
		
		let packageConfig: GuiResPackageConfig = await Game.asset.loadFguiByPackagenameAsync(GuiPackageNames.GameLaunch);
		GuiSetting.addPackage(packageConfig.packagePath);
		
		// 初始化转圈
		fgui.UIConfig.globalModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "GlobalModalWaiting");
		fgui.UIConfig.windowModalWaiting = fgui.UIPackage.getItemURL(packageConfig.packageName, "WindowModalWaiting");
		
	}

	// 加载配置
	async initConfig()
	{
		Game.config.configLoader = Game.asset;
		Game.config.initList();
		Game.config.sLoadProgress.add(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
		await Game.config.loadAllAsync();
		Game.config.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
	}

	
	// 加载多语言配置
	async initLangConfig()
	{
		Game.lang.current.configLoader = Game.asset;
		Game.lang.current.initList();

		if(Game.lang.isUseLang)
		{
			Game.lang.current.sLoadProgress.add(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
			await Game.lang.current.loadAllAsync();
			Game.lang.current.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
		}
	}

	// 初始化网络设置
	async installServerList()
	{

		await Game.channel.requestServerListAsync();
		net.config.url = Game.channel.serverItem.main;
		
		// net.config.url = "https://nisak.123u.com:5000";
		net.logic.onError.on(this.onNetError, this);
	}

	async onNetError(error: number)
	{
		console.log("onNetError " + error);
		let txt = await AntFrameConfig.GetErrorStr(error);
		console.log(`OnNetError no=${error}  txt=${txt}`);
		if(!txt)
			txt = "服务器反馈错误: " + error;

		Game.system.toastText(txt);
	}


	// 进入主界面
	async enterGame()
	{
		Game.time.start();
		Game.menu.open(MenuId.Home);
		Game.menu.close(MenuId.Login);

		// 启动订阅任务
		Game.took.start();
	}
	
		

}
