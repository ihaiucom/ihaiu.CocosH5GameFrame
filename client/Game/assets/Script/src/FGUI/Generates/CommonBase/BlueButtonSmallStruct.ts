/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueButtonSmall from "../../Extends/CommonBase/BlueButtonSmall";

export default class BlueButtonSmallStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdickzdyt";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BlueButtonSmall {
		return <BlueButtonSmall><any>(fgui.UIPackage.createObject("CommonBase","BlueButtonSmall"));
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