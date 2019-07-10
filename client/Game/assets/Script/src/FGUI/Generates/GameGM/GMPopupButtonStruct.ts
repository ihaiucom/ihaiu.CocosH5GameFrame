/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupButton from "../../Extends/GameGM/GMPopupButton";

export default class GMPopupButtonStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://46xcitpdm23g5";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMPopupButton {
		return <GMPopupButton><any>(fgui.UIPackage.createObject("GameGM","GMPopupButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}