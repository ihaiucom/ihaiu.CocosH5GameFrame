/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuestPanel from "../../Extends/ModuleLogin/GuestPanel";

export default class GuestPanelStruct extends fgui.GComponent
{
	public m_g_guestlogin : fgui.GGroup;
	public m_btn_guestlogin : fgui.GButton;
	public m_btn_linkaccount : fgui.GButton;
	public m_btn_back : fgui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c24";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():GuestPanel {
		return <GuestPanel><any>(fgui.UIPackage.createObject("ModuleLogin","GuestPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_g_guestlogin = <fgui.GGroup><any>(this.getChild("g_guestlogin"));
		this.m_btn_guestlogin = <fgui.GButton><any>(this.getChild("btn_guestlogin"));
		this.m_btn_linkaccount = <fgui.GButton><any>(this.getChild("btn_linkaccount"));
		this.m_btn_back = <fgui.GButton><any>(this.getChild("btn_back"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}