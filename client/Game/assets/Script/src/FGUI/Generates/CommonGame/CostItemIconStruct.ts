/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CostItemIcon from "../../Extends/CommonGame/CostItemIcon";

export default class CostItemIconStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_countState : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;
	public m_itemName : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9ma8e2e";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():CostItemIcon {
		return <CostItemIcon><any>(fgui.UIPackage.createObject("CommonGame","CostItemIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_countState = this.getController("countState");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}