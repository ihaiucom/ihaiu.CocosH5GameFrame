/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBMainButton from "../../Extends/SystemModuleMenu/MenuBMainButton";
import MenuBButton from "../../Extends/SystemModuleMenu/MenuBButton";
import MenuBarMain from "../../Extends/SystemModuleMenu/MenuBarMain";

export default class MenuBarMainStruct extends fgui.GComponent
{
	public m_btn_0 : MenuBMainButton;
	public m_btn_1 : MenuBButton;
	public m_btn_2 : MenuBButton;
	public m_btn_3 : MenuBButton;
	public m_btn_4 : MenuBButton;

	
	public static URL:string = "ui://4rsi5gesszhv0";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUIV1"];

	
	public static createInstance():MenuBarMain {
		return <MenuBarMain><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuBarMain"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_btn_0 = <MenuBMainButton><any>(this.getChild("btn_0"));
		this.m_btn_1 = <MenuBButton><any>(this.getChild("btn_1"));
		this.m_btn_2 = <MenuBButton><any>(this.getChild("btn_2"));
		this.m_btn_3 = <MenuBButton><any>(this.getChild("btn_3"));
		this.m_btn_4 = <MenuBButton><any>(this.getChild("btn_4"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}