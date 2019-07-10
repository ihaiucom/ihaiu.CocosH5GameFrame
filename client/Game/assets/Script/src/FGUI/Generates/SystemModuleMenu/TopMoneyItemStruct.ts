/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton from "../../Extends/CommonBase/AddButton";
import TopMoneyItem from "../../Extends/SystemModuleMenu/TopMoneyItem";

export default class TopMoneyItemStruct extends fgui.GLabel
{
	public m_title : fgui.GTextField;
	public m_icon : fgui.GLoader;
	public m_addButton : AddButton;

	
	public static URL:string = "ui://4rsi5gesszhv1e";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase"];

	
	public static createInstance():TopMoneyItem {
		return <TopMoneyItem><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopMoneyItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_addButton = <AddButton><any>(this.getChild("addButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}