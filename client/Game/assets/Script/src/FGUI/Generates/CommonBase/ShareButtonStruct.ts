/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareButton from "../../Extends/CommonBase/ShareButton";

export default class ShareButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://jaoapdicla1jw7";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ShareButton {
		return <ShareButton><any>(fgui.UIPackage.createObject("CommonBase","ShareButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}