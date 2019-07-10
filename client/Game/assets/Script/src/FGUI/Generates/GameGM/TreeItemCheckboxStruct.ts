/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemCheckbox from "../../Extends/GameGM/TreeItemCheckbox";

export default class TreeItemCheckboxStruct extends fgui.GButton
{
	public m_button : fgui.Controller;

	
	public static URL:string = "ui://46xcitpdx6hou";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TreeItemCheckbox {
		return <TreeItemCheckbox><any>(fgui.UIPackage.createObject("GameGM","TreeItemCheckbox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}