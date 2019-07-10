/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextInput from "../../Extends/GameGM/TextInput";

export default class TextInputStruct extends fgui.GButton
{
	public m_title : fgui.GTextInput;

	
	public static URL:string = "ui://46xcitpdfv0tb";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TextInput {
		return <TextInput><any>(fgui.UIPackage.createObject("GameGM","TextInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_title = <fgui.GTextInput><any>(this.getChild("title"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}