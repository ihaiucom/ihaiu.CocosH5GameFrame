/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogCloseWindow from "../../Extends/GameLaunch/DialogCloseWindow";

export default class DialogCloseWindowStruct extends fgui.GComponent
{
	public m_closeButton : fgui.GButton;

	
	public static URL:string = "ui://47qsdr42f84sg";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():DialogCloseWindow {
		return <DialogCloseWindow><any>(fgui.UIPackage.createObject("GameLaunch","DialogCloseWindow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_closeButton = <fgui.GButton><any>(this.getChild("closeButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}