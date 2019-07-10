/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueButton from "../../Extends/CommonBase/BlueButton";

export default class BlueButtonStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdict3as2";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BlueButton {
		return <BlueButton><any>(fgui.UIPackage.createObject("CommonBase","BlueButton"));
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