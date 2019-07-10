/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCostItem from "../../Extends/CommonGame/ItemCostItem";

export default class ItemCostItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_c_show_bg : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_labNum : fgui.GTextField;

	
	public static URL:string = "ui://4snov4n9qror1d";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():ItemCostItem {
		return <ItemCostItem><any>(fgui.UIPackage.createObject("CommonGame","ItemCostItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_c_show_bg = this.getController("c_show_bg");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_labNum = <fgui.GTextField><any>(this.getChild("labNum"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}