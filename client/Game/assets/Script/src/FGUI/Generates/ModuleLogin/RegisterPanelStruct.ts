/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import RegisterPanel from "../../Extends/ModuleLogin/RegisterPanel";

export default class RegisterPanelStruct extends fgui.GComponent
{
	public m_accountInput : AccountInput;
	public m_passwordInput : PasswordInput;
	public m_btn_onRegister : fgui.GButton;
	public m_btn_registerback : fgui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1z";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():RegisterPanel {
		return <RegisterPanel><any>(fgui.UIPackage.createObject("ModuleLogin","RegisterPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_accountInput = <AccountInput><any>(this.getChild("accountInput"));
		this.m_passwordInput = <PasswordInput><any>(this.getChild("passwordInput"));
		this.m_btn_onRegister = <fgui.GButton><any>(this.getChild("btn_onRegister"));
		this.m_btn_registerback = <fgui.GButton><any>(this.getChild("btn_registerback"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}