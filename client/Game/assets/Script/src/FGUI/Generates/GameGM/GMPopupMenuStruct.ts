/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupMenu from "../../Extends/GameGM/GMPopupMenu";

export default class GMPopupMenuStruct extends fgui.GComponent
{
	public m_list : fgui.GList;

	
	public static URL:string = "ui://46xcitpdm23g4";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMPopupMenu {
		return <GMPopupMenu><any>(fgui.UIPackage.createObject("GameGM","GMPopupMenu"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}