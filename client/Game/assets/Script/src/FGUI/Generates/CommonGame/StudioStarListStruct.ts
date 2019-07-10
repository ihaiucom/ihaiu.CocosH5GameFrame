/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioStarList from "../../Extends/CommonGame/StudioStarList";

export default class StudioStarListStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;
	public m_s1 : fgui.GLoader;
	public m_s2 : fgui.GLoader;
	public m_s3 : fgui.GLoader;
	public m_s4 : fgui.GLoader;
	public m_s5 : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9wljjt";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():StudioStarList {
		return <StudioStarList><any>(fgui.UIPackage.createObject("CommonGame","StudioStarList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_starNum = this.getController("starNum");

		
		this.m_s1 = <fgui.GLoader><any>(this.getChild("s1"));
		this.m_s2 = <fgui.GLoader><any>(this.getChild("s2"));
		this.m_s3 = <fgui.GLoader><any>(this.getChild("s3"));
		this.m_s4 = <fgui.GLoader><any>(this.getChild("s4"));
		this.m_s5 = <fgui.GLoader><any>(this.getChild("s5"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}