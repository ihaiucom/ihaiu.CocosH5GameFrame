/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardNumItem from "../../Extends/CommonGame/RewardNumItem";

export default class RewardNumItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9pf6a2f";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():RewardNumItem {
		return <RewardNumItem><any>(fgui.UIPackage.createObject("CommonGame","RewardNumItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}