/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";

export default class LoginPanelStruct extends fgui.GComponent
{
	public m_c1 : fgui.Controller;
	public m_accountInput : AccountInput;
	public m_passwordInput : PasswordInput;
	public m_btn_forgot : fgui.GButton;
	public m_btn_security : fgui.GButton;
	public m_btn_login : fgui.GButton;
	public m_btn_register : fgui.GButton;
	public m_btn_guest : fgui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1g";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():LoginPanel {
		return <LoginPanel><any>(fgui.UIPackage.createObject("ModuleLogin","LoginPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_c1 = this.getController("c1");

		
		this.m_accountInput = <AccountInput><any>(this.getChild("accountInput"));
		this.m_passwordInput = <PasswordInput><any>(this.getChild("passwordInput"));
		this.m_btn_forgot = <fgui.GButton><any>(this.getChild("btn_forgot"));
		this.m_btn_security = <fgui.GButton><any>(this.getChild("btn_security"));
		this.m_btn_login = <fgui.GButton><any>(this.getChild("btn_login"));
		this.m_btn_register = <fgui.GButton><any>(this.getChild("btn_register"));
		this.m_btn_guest = <fgui.GButton><any>(this.getChild("btn_guest"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}