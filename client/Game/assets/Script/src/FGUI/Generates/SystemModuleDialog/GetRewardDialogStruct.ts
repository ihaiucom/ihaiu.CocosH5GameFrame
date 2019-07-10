/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetRewardDialog from "../../Extends/SystemModuleDialog/GetRewardDialog";

export default class GetRewardDialogStruct extends fgui.GComponent
{
	public m_boxHeightCtrl : fgui.Controller;
	public m_bg : fgui.GLoader;
	public m_list : fgui.GList;
	public m_confirmBtn : fgui.GObject;

	
	public static URL:string = "ui://q5yddivte5hko";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUIV1"];

	
	public static createInstance():GetRewardDialog {
		return <GetRewardDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","GetRewardDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_boxHeightCtrl = this.getController("boxHeightCtrl");

		
		this.m_bg = <fgui.GLoader><any>(this.getChild("bg"));
		this.m_list = <fgui.GList><any>(this.getChild("list"));
		this.m_confirmBtn = <fgui.GObject><any>(this.getChild("confirmBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}