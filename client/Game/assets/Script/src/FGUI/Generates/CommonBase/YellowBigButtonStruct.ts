/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowBigButton from "../../Extends/CommonBase/YellowBigButton";

export default class YellowBigButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicj3nbu";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():YellowBigButton {
		return <YellowBigButton><any>(fgui.UIPackage.createObject("CommonBase","YellowBigButton"));
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