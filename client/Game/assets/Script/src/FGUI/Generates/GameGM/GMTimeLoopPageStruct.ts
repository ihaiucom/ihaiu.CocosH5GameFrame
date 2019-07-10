/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMTimeLoopPage from "../../Extends/GameGM/GMTimeLoopPage";

export default class GMTimeLoopPageStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_refreshButton : fgui.GButton;
	public m_clearButton : fgui.GButton;
	public m_sortCostTimeToalButton : fgui.GButton;
	public m_sorteEvaluateButton : fgui.GButton;
	public m_sorteCallNumButton : fgui.GButton;
	public m_sorteCostTimeButton : fgui.GButton;

	
	public static URL:string = "ui://46xcitpd7h8s10";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMTimeLoopPage {
		return <GMTimeLoopPage><any>(fgui.UIPackage.createObject("GameGM","GMTimeLoopPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_refreshButton = <fgui.GButton><any>(this.getChild("refreshButton"));
		this.m_clearButton = <fgui.GButton><any>(this.getChild("clearButton"));
		this.m_sortCostTimeToalButton = <fgui.GButton><any>(this.getChild("sortCostTimeToalButton"));
		this.m_sorteEvaluateButton = <fgui.GButton><any>(this.getChild("sorteEvaluateButton"));
		this.m_sorteCallNumButton = <fgui.GButton><any>(this.getChild("sorteCallNumButton"));
		this.m_sorteCostTimeButton = <fgui.GButton><any>(this.getChild("sorteCostTimeButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}