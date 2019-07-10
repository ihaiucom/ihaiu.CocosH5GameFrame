/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";
import ItemNumItem from "../../Extends/CommonGame/ItemNumItem";

export default class ItemNumItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_c_show_bg : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_Star : Star;

	
	public static URL:string = "ui://4snov4n9j3nbj";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():ItemNumItem {
		return <ItemNumItem><any>(fgui.UIPackage.createObject("CommonGame","ItemNumItem"));
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
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_Star = <Star><any>(this.getChild("Star"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}