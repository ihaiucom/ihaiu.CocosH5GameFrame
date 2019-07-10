/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton from "../../Extends/CommonBase/AddButton";

export default class AddButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://jaoapdicszhv1h";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():AddButton {
		return <AddButton><any>(fgui.UIPackage.createObject("CommonBase","AddButton"));
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