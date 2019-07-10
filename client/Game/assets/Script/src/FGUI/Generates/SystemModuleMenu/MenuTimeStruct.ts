/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";

export default class MenuTimeStruct extends fgui.GLabel
{
	public m_time : fgui.GTextField;

	
	public static URL:string = "ui://4rsi5gesszhvl";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUI"];

	
	public static createInstance():MenuTime {
		return <MenuTime><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuTime"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_time = <fgui.GTextField><any>(this.getChild("time"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}