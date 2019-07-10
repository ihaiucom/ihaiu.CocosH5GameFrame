/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";
import SmallIconItem from "../../Extends/CommonGame/SmallIconItem";

export default class SmallIconItemStruct extends fgui.GButton
{
	public m_c_show_bg : fgui.Controller;
	public m_icon : fgui.GLoader;
	public m_title : fgui.GTextField;
	public m_star : Star;

	
	public static URL:string = "ui://4snov4n9e5hkf";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():SmallIconItem {
		return <SmallIconItem><any>(fgui.UIPackage.createObject("CommonGame","SmallIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_c_show_bg = this.getController("c_show_bg");

		
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_star = <Star><any>(this.getChild("star"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}