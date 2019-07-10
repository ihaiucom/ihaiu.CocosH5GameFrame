/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UserHeadIcon from "../../Extends/CommonGame/UserHeadIcon";

export default class UserHeadIconStruct extends fgui.GComponent
{
	public m_icon : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9u6m719";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():UserHeadIcon {
		return <UserHeadIcon><any>(fgui.UIPackage.createObject("CommonGame","UserHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}