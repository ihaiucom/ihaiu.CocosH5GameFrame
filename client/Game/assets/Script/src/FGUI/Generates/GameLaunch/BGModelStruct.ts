/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BGModel from "../../Extends/GameLaunch/BGModel";

export default class BGModelStruct extends fgui.GComponent
{
	public m_bg : fgui.GImage;

	
	public static URL:string = "ui://47qsdr42f84so";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():BGModel {
		return <BGModel><any>(fgui.UIPackage.createObject("GameLaunch","BGModel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}