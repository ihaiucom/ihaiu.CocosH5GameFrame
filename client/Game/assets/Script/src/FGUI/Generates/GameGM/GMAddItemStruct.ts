/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberInput from "../../Extends/GameGM/NumberInput";
import GMAddItem from "../../Extends/GameGM/GMAddItem";

export default class GMAddItemStruct extends fgui.GComponent
{
	public m_id : fgui.GTextField;
	public m_title : fgui.GTextField;
	public m_describe : fgui.GTextField;
	public m_icon : fgui.GLoader;
	public m_num : fgui.GTextField;
	public m_button : fgui.GButton;
	public m_numberInput : NumberInput;

	
	public static URL:string = "ui://46xcitpdfv0tc";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMAddItem {
		return <GMAddItem><any>(fgui.UIPackage.createObject("GameGM","GMAddItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_id = <fgui.GTextField><any>(this.getChild("id"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_describe = <fgui.GTextField><any>(this.getChild("describe"));
		this.m_icon = <fgui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fgui.GTextField><any>(this.getChild("num"));
		this.m_button = <fgui.GButton><any>(this.getChild("button"));
		this.m_numberInput = <NumberInput><any>(this.getChild("numberInput"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}