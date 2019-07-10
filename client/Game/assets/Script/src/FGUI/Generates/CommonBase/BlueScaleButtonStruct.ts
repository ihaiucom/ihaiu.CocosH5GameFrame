/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueScaleButton from "../../Extends/CommonBase/BlueScaleButton";

export default class BlueScaleButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdiciq08vy";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BlueScaleButton {
		return <BlueScaleButton><any>(fgui.UIPackage.createObject("CommonBase","BlueScaleButton"));
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