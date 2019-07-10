/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RenameInput from "../../Extends/CommonBase/RenameInput";

export default class RenameInputStruct extends fgui.GLabel
{
	public m_title : fgui.GTextInput;

	
	public static URL:string = "ui://jaoapdicu6goi";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():RenameInput {
		return <RenameInput><any>(fgui.UIPackage.createObject("CommonBase","RenameInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}