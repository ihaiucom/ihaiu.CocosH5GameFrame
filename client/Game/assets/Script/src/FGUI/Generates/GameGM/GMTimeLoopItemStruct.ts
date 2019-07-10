/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemCheckbox from "../../Extends/GameGM/TreeItemCheckbox";
import GMTimeLoopItem from "../../Extends/GameGM/GMTimeLoopItem";

export default class GMTimeLoopItemStruct extends fgui.GComponent
{
	public m_title : fgui.GTextField;
	public m_visiable : TreeItemCheckbox;

	
	public static URL:string = "ui://46xcitpd7h8s11";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMTimeLoopItem {
		return <GMTimeLoopItem><any>(fgui.UIPackage.createObject("GameGM","GMTimeLoopItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_visiable = <TreeItemCheckbox><any>(this.getChild("visiable"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}