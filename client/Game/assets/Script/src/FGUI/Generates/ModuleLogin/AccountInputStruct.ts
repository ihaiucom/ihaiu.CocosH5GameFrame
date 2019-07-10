/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";

export default class AccountInputStruct extends fgui.GComponent
{
	public m_txt_account : fgui.GTextInput;
	public m_accountComboBox : fgui.GComboBox;
	public m_button : fgui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1h";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():AccountInput {
		return <AccountInput><any>(fgui.UIPackage.createObject("ModuleLogin","AccountInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_txt_account = <fgui.GTextInput><any>(this.getChild("txt_account"));
		this.m_accountComboBox = <fgui.GComboBox><any>(this.getChild("accountComboBox"));
		this.m_button = <fgui.GButton><any>(this.getChild("button"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}