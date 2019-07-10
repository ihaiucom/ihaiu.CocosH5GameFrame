/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMTestPanelContent from "../../Extends/GameGM/GMTestPanelContent";
import GMTestPanel from "../../Extends/GameGM/GMTestPanel";

export default class GMTestPanelStruct extends fgui.GComponent
{
	public m_content : GMTestPanelContent;

	
	public static URL:string = "ui://46xcitpdqfds13";
	
	public static DependPackages:string[] = ["GameGM","_ResImageUIV1"];

	
	public static createInstance():GMTestPanel {
		return <GMTestPanel><any>(fgui.UIPackage.createObject("GameGM","GMTestPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_content = <GMTestPanelContent><any>(this.getChild("content"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}