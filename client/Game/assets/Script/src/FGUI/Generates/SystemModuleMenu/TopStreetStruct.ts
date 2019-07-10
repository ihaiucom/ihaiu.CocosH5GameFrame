/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import TopStreet from "../../Extends/SystemModuleMenu/TopStreet";

export default class TopStreetStruct extends fgui.GButton
{
	public m_t0 : fgui.Transition;
	public m_streetRank : fgui.GTextField;
	public m_streetName : fgui.GTextField;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhv15";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUIV1"];

	
	public static createInstance():TopStreet {
		return <TopStreet><any>(fgui.UIPackage.createObject("SystemModuleMenu","TopStreet"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_streetRank = <fgui.GTextField><any>(this.getChild("streetRank"));
		this.m_streetName = <fgui.GTextField><any>(this.getChild("streetName"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
		this.m_t0 =  this.getTransition("t0");

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}