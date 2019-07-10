/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";
import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";

export default class ItemIconItemStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_type : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_Star : Star;

	
	public static URL:string = "ui://4snov4n9ncg93";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():ItemIconItem {
		return <ItemIconItem><any>(fgui.UIPackage.createObject("CommonGame","ItemIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_Star = <Star><any>(this.getChild("Star"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}