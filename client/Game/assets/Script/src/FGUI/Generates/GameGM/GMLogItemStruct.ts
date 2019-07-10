/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMLogItem from "../../Extends/GameGM/GMLogItem";

export default class GMLogItemStruct extends fgui.GLabel
{
	public m_title : fgui.GRichTextField;

	
	public static URL:string = "ui://46xcitpdsy3ro";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMLogItem {
		return <GMLogItem><any>(fgui.UIPackage.createObject("GameGM","GMLogItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GRichTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}