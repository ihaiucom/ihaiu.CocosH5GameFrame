/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRButton from "../../Extends/SystemModuleMenu/MenuRButton";
import MenuBarRightTop from "../../Extends/SystemModuleMenu/MenuBarRightTop";

export default class MenuBarRightTopStruct extends fgui.GComponent
{
	public m_mail : MenuRButton;

	
	public static URL:string = "ui://4rsi5geskrdk1h";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase"];

	
	public static createInstance():MenuBarRightTop {
		return <MenuBarRightTop><any>(fgui.UIPackage.createObject("SystemModuleMenu","MenuBarRightTop"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_mail = <MenuRButton><any>(this.getChild("mail"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}