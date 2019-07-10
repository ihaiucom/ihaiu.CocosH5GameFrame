/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BubbleTalkSmall from "../../Extends/CommonBase/BubbleTalkSmall";

export default class BubbleTalkSmallStruct extends fgui.GLabel
{
	public m_bg : fgui.GImage;
	public m_title : fgui.GTextField;

	
	public static URL:string = "ui://jaoapdicp9erw6";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BubbleTalkSmall {
		return <BubbleTalkSmall><any>(fgui.UIPackage.createObject("CommonBase","BubbleTalkSmall"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_bg = <fgui.GImage><any>(this.getChild("bg"));
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}