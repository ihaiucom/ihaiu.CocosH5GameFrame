/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowButtonSmall from "../../Extends/CommonBase/YellowButtonSmall";

export default class YellowButtonSmallStruct extends fgui.GButton
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdickzdyv";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowButtonSmall {
		return <YellowButtonSmall><any>(fgui.UIPackage.createObject("CommonBase","YellowButtonSmall"));
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