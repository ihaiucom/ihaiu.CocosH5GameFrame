/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RenameInput2 from "../../Extends/CommonBase/RenameInput2";

export default class RenameInput2Struct extends fgui.GLabel
{
	public m_title : fgui.GTextInput;
	public m_randomBtn : fgui.GObject;

	
	public static URL:string = "ui://jaoapdicwpxmw2";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():RenameInput2 {
		return <RenameInput2><any>(fgui.UIPackage.createObject("CommonBase","RenameInput2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		this.m_randomBtn = <fgui.GObject><any>(this.getChild("randomBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}