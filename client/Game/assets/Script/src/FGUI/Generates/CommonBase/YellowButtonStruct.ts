/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowButton from "../../Extends/CommonBase/YellowButton";

export default class YellowButtonStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdico3xj0";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowButton {
		return <YellowButton><any>(fgui.UIPackage.createObject("CommonBase","YellowButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}