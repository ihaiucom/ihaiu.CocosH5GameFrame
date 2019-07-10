/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadInfo from "../../Extends/SystemModuleMenu/TopHeadInfo";

export default class TopHeadInfoStruct extends fgui.GButton
{
	public m_icon : fgui.GLoader;
	public m_level : fgui.GTextField;
	public m_expBar : fgui.GProgressBar;

	
	public static URL:string = "ui://4rsi5gesszhvx";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUIV1"];

	
	public static createInstance():TopHeadInfo {
		return <TopHeadInfo><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopHeadInfo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_level = <fgui.GTextField><any>(this.getChild("level"));
		this.m_expBar = <fgui.GProgressBar><any>(this.getChild("expBar"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}