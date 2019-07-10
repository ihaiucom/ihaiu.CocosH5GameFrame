/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMMenuBar from "../../Extends/GameGM/GMMenuBar";

export default class GMMenuBarStruct extends fgui.GComponent
{
	public m_menuBar : fgui.GGraph;
	public m_menuList : fgui.GList;

	
	public static URL:string = "ui://46xcitpdwl2t1";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMMenuBar {
		return <GMMenuBar><any>(fgui.UIPackage.createObject("GameGM","GMMenuBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_menuBar = <fgui.GGraph><any>(this.getChild("menuBar"));
		this.m_menuList = <fgui.GList><any>(this.getChild("menuList"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}