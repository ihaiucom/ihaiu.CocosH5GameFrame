/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupButton from "../../Extends/GameGM/GMPopupButton";
import TextInput from "../../Extends/GameGM/TextInput";
import GMAddPage from "../../Extends/GameGM/GMAddPage";

export default class GMAddPageStruct extends fgui.GComponent
{
	public m_list : fgui.GList;
	public m_popupButton : GMPopupButton;
	public m_filterInput : TextInput;
	public m_filterCheckbox : fgui.GButton;
	public m_listTopButton : fgui.GButton;
	public m_listBottomButton : fgui.GButton;

	
	public static URL:string = "ui://46xcitpdfbyi9";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMAddPage {
		return <GMAddPage><any>(fgui.UIPackage.createObject("GameGM","GMAddPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_popupButton = <GMPopupButton><any>(this.getChild("popupButton"));
		this.m_filterInput = <TextInput><any>(this.getChild("filterInput"));
		this.m_filterCheckbox = <fgui.GButton><any>(this.getChild("filterCheckbox"));
		this.m_listTopButton = <fgui.GButton><any>(this.getChild("listTopButton"));
		this.m_listBottomButton = <fgui.GButton><any>(this.getChild("listBottomButton"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}