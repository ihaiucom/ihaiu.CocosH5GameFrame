/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadIconMask from "../../Extends/SystemModuleMenu/TopHeadIconMask";

export default class TopHeadIconMaskStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4rsi5gesszhv10";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():TopHeadIconMask {
		return <TopHeadIconMask><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopHeadIconMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}