/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuRadioBar from "../../Extends/GameGM/GMSubMenuRadioBar";
import TextArea from "../../Extends/GameGM/TextArea";
import GMCmdPage from "../../Extends/GameGM/GMCmdPage";

export default class GMCmdPageStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_subMenuBar : GMSubMenuRadioBar;
	public m_input : TextArea;
	public m_sendButton : fgui.GButton;
	public m_clearButton : fgui.GButton;

	
	public static URL:string = "ui://46xcitpdket7k";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMCmdPage {
		return <GMCmdPage><any>(fgui.UIPackage.createObject("GameGM","GMCmdPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_subMenuBar = <GMSubMenuRadioBar><any>(this.getChild("subMenuBar"));
		this.m_input = <TextArea><any>(this.getChild("input"));
		this.m_sendButton = <fgui.GButton><any>(this.getChild("sendButton"));
		this.m_clearButton = <fgui.GButton><any>(this.getChild("clearButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}