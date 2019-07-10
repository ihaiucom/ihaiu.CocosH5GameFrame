/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardItem from "../../Extends/CommonGame/RewardItem";

export default class RewardItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_t0 : fgui.Transition;
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;
	public m_itemName : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9u6m71a";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():RewardItem {
		return <RewardItem><any>(fgui.UIPackage.createObject("CommonGame","RewardItem"));
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
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}