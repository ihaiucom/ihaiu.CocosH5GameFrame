/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TitleBar from "../../Extends/CommonGame/TitleBar";

export default class TitleBarStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9kchl2e";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():TitleBar {
		return <TitleBar><any>(fgui.UIPackage.createObject("CommonGame","TitleBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}