
import VersionConfig from "./VersionConfig";
import VersionData from "./VersionData";
import Game from "../Game";
import Signal from "../Libs/signals/Signal";


export default class VersionManager
{

	private static _Instance: VersionManager;
	static get Instance(): VersionManager
	{
		if (!VersionManager._Instance)
		{
			VersionManager._Instance = new VersionManager();
		}
		return VersionManager._Instance;
	}

	// 本地版本号发生变化
	sLocalVersionChange: Signal = new Signal();


	// 网络，版本信息配置		
	webVersionConfig: VersionConfig;
	// 拷贝 assets->data/{packages}/files 的版本
	assetCopytoFileVersionData: VersionData = new VersionData();
	// 本地，应用版本
	localAppVersionData: VersionData = new VersionData();
	// 网络，应用版本
	webAppVersionData: VersionData = new VersionData();
	// 本地，资源版本
	localResVersionData: VersionData = new VersionData();
	// 网络，资源版本
	webResVersionData: VersionData = new VersionData();
	// 本地，分包资源版本
	localPartialVersionData: VersionData = new VersionData();
	// 网络，分包资源版本
	webPartialVersionData: VersionData = new VersionData();


	init()
	{
	}




}
