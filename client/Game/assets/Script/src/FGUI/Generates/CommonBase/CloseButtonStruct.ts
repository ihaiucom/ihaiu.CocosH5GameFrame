/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";

export default class CloseButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdice12kwe";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():CloseButton {
		return <CloseButton><any>(fgui.UIPackage.createObject("CommonBase","CloseButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}