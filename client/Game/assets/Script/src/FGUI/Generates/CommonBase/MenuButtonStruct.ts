/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuButton from "../../Extends/CommonBase/MenuButton";

export default class MenuButtonStruct extends fgui.GButton
{
	public m_state : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_lock : fgui.GImage;

	
	public static URL:string = "ui://jaoapdicma8exc";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():MenuButton {
		return <MenuButton><any>(fgui.UIPackage.createObject("CommonBase","MenuButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_state = this.getController("state");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_lock = <fgui.GImage><any>(this.getChild("lock"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}