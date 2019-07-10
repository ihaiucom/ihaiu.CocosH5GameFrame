/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMCmdItem from "../../Extends/GameGM/GMCmdItem";

export default class GMCmdItemStruct extends fgui.GComponent
{
	public m_title : fgui.GTextInput;
	public m_name : fgui.GRichTextField;
	public m_button : fgui.GButton;

	
	public static URL:string = "ui://46xcitpdket7n";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMCmdItem {
		return <GMCmdItem><any>(fgui.UIPackage.createObject("GameGM","GMCmdItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		this.m_name = <fgui.GRichTextField><any>(this.getChild("name"));
		this.m_button = <fgui.GButton><any>(this.getChild("button"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}