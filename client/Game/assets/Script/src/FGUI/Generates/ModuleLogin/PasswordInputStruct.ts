/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";

export default class PasswordInputStruct extends fgui.GComponent
{
	public m_txt_password : fgui.GTextInput;
	public m_btn_pwdeye : fgui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1n";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():PasswordInput {
		return <PasswordInput><any>(fgui.UIPackage.createObject("ModuleLogin","passwordInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_txt_password = <fgui.GTextInput><any>(this.getChild("txt_password"));
		this.m_btn_pwdeye = <fgui.GButton><any>(this.getChild("btn_pwdeye"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}