/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PropIconItem from "../../Extends/CommonGame/PropIconItem";

export default class PropIconItemStruct extends fgui.GLabel
{
	public m_prop : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9g2f52d";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():PropIconItem {
		return <PropIconItem><any>(fgui.UIPackage.createObject("CommonGame","PropIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_prop = this.getController("prop");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}