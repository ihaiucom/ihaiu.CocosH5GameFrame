/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";
import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuTimeButton from "../../Extends/SystemModuleMenu/MenuTimeButton";

export default class MenuTimeButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_visiableTitle : fgui.Controller;
	public m_c_visible_new : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_lock : fgui.GImage;
	public m_new : fgui.GImage;
	public m_buttonTime : MenuTime;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhvj";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUI"];

	
	public static createInstance():MenuTimeButton {
		return <MenuTimeButton><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuTimeButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_visiableTitle = this.getController("visiableTitle");
		this.m_c_visible_new = this.getController("c_visible_new");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_lock = <fgui.GImage><any>(this.getChild("lock"));
		this.m_new = <fgui.GImage><any>(this.getChild("new"));
		this.m_buttonTime = <MenuTime><any>(this.getChild("buttonTime"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}