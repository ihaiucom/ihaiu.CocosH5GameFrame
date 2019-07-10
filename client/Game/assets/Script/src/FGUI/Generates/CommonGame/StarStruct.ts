/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";

export default class StarStruct extends fgui.GComponent
{
	public m_starNum : fgui.Controller;
	public m_s1 : fgui.GLoader;
	public m_s2 : fgui.GLoader;
	public m_s3 : fgui.GLoader;
	public m_s4 : fgui.GLoader;
	public m_s5 : fgui.GLoader;
	public m_s6 : fgui.GLoader;

	
	public static URL:string = "ui://4snov4n9ncg95";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():Star {
		return <Star><any>(fgui.UIPackage.createObject("CommonGame","Star"));
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
		this.m_s6 = <fgui.GLoader><any>(this.getChild("s6"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}