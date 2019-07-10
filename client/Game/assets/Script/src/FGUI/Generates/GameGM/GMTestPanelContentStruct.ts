/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMTestPanelContent from "../../Extends/GameGM/GMTestPanelContent";

export default class GMTestPanelContentStruct extends fgui.GComponent
{

	
	public static URL:string = "ui://46xcitpdqfds14";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMTestPanelContent {
		return <GMTestPanelContent><any>(fgui.UIPackage.createObject("GameGM","GMTestPanelContent"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}