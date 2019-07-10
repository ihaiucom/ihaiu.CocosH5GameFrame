/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowSmallButton from "../../Extends/CommonBase/YellowSmallButton";

export default class YellowSmallButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicj3nbv1";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():YellowSmallButton {
		return <YellowSmallButton><any>(fgui.UIPackage.createObject("CommonBase","YellowSmallButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}