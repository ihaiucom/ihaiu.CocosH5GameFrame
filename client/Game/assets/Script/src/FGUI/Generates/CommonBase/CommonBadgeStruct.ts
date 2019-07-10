/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonBadge from "../../Extends/CommonBase/CommonBadge";

export default class CommonBadgeStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://jaoapdicncg9i";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():CommonBadge {
		return <CommonBadge><any>(fgui.UIPackage.createObject("CommonBase","CommonBadge"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}