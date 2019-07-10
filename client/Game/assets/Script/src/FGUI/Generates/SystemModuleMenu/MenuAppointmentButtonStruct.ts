/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuAppointmentButton from "../../Extends/SystemModuleMenu/MenuAppointmentButton";

export default class MenuAppointmentButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_c_visible_new : fgui.Controller;
	public m_fx : fgui.GMovieClip;
	public m_lock : fgui.GImage;
	public m_new : fgui.GImage;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesl2911i";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUI"];

	
	public static createInstance():MenuAppointmentButton {
		return <MenuAppointmentButton><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuAppointmentButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_c_visible_new = this.getController("c_visible_new");

		
		this.m_fx = <fgui.GMovieClip><any>(this.getChild("fx"));
		this.m_lock = <fgui.GImage><any>(this.getChild("lock"));
		this.m_new = <fgui.GImage><any>(this.getChild("new"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}