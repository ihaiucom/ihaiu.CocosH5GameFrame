/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";

export default class NumberBadgeStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicncg9j";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():NumberBadge {
		return <NumberBadge><any>(fgui.UIPackage.createObject("CommonBase","NumberBadge"));
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