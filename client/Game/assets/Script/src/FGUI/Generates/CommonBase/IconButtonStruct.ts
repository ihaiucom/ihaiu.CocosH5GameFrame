/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import IconButton from "../../Extends/CommonBase/IconButton";

export default class IconButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdict5vjvc";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():IconButton {
		return <IconButton><any>(fgui.UIPackage.createObject("CommonBase","IconButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}