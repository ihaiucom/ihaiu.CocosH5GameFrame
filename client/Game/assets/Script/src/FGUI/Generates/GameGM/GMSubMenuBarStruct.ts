/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuBar from "../../Extends/GameGM/GMSubMenuBar";

export default class GMSubMenuBarStruct extends fgui.GComponent
{
	public m_menuBar : fgui.GGraph;
	public m_subMenu : fgui.GList;

	
	public static URL:string = "ui://46xcitpdfbyi6";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMSubMenuBar {
		return <GMSubMenuBar><any>(fgui.UIPackage.createObject("GameGM","GMSubMenuBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_menuBar = <fgui.GGraph><any>(this.getChild("menuBar"));
		this.m_subMenu = <fgui.GList><any>(this.getChild("subMenu"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}