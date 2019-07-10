/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AssetItem from "../../Extends/CommonGame/AssetItem";

export default class AssetItemStruct extends fgui.GLabel
{
	public m_showBg : fgui.Controller;
	public m_assetLoader : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9e5hkg";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():AssetItem {
		return <AssetItem><any>(fgui.UIPackage.createObject("CommonGame","AssetItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_showBg = this.getController("showBg");

		
		this.m_assetLoader = <fgui.GLoader><any>(this.getChild("assetLoader"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}