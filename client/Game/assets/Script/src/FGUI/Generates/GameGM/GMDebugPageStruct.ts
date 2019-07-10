/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuBar from "../../Extends/GameGM/GMSubMenuBar";
import GMDebugPage from "../../Extends/GameGM/GMDebugPage";

export default class GMDebugPageStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_subMenuBar : GMSubMenuBar;
	public m_clearButton : fgui.GButton;
	public m_refreshButton : fgui.GButton;

	
	public static URL:string = "ui://46xcitpdfbyi8";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMDebugPage {
		return <GMDebugPage><any>(fgui.UIPackage.createObject("GameGM","GMDebugPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_subMenuBar = <GMSubMenuBar><any>(this.getChild("subMenuBar"));
		this.m_clearButton = <fgui.GButton><any>(this.getChild("clearButton"));
		this.m_refreshButton = <fgui.GButton><any>(this.getChild("refreshButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}