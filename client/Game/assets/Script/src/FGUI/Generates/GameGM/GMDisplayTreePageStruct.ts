/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Tree from "../../Extends/GameGM/Tree";
import GMDisplayTreePage from "../../Extends/GameGM/GMDisplayTreePage";

export default class GMDisplayTreePageStruct extends fgui.GComponent
{
	public m_tree : Tree;
	public m_refreshButton : fgui.GButton;
	public m_showSelectButton : fgui.GButton;
	public m_hideSelectButton : fgui.GButton;
	public m_noSelectButton : fgui.GButton;
	public m_parentLayerButton : fgui.GButton;
	public m_setLayerButton : fgui.GButton;

	
	public static URL:string = "ui://46xcitpdx6hov";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMDisplayTreePage {
		return <GMDisplayTreePage><any>(fgui.UIPackage.createObject("GameGM","GMDisplayTreePage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_tree = <Tree><any>(this.getChild("tree"));
		this.m_refreshButton = <fgui.GButton><any>(this.getChild("refreshButton"));
		this.m_showSelectButton = <fgui.GButton><any>(this.getChild("showSelectButton"));
		this.m_hideSelectButton = <fgui.GButton><any>(this.getChild("hideSelectButton"));
		this.m_noSelectButton = <fgui.GButton><any>(this.getChild("noSelectButton"));
		this.m_parentLayerButton = <fgui.GButton><any>(this.getChild("parentLayerButton"));
		this.m_setLayerButton = <fgui.GButton><any>(this.getChild("setLayerButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}