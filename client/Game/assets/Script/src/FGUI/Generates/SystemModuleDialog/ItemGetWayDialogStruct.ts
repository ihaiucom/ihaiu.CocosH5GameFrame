/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemGetRewardDialogContent from "../../Extends/SystemModuleDialog/ItemGetRewardDialogContent";
import ItemGetWayDialog from "../../Extends/SystemModuleDialog/ItemGetWayDialog";

export default class ItemGetWayDialogStruct extends fgui.GComponent
{
	public m_content : ItemGetRewardDialogContent;

	
	public static URL:string = "ui://q5yddivtma8e14";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUIV1","CommonBase","CommonGame"];

	
	public static createInstance():ItemGetWayDialog {
		return <ItemGetWayDialog><any>(fgui.UIPackage.createObject("SystemModuleDialog","ItemGetWayDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_content = <ItemGetRewardDialogContent><any>(this.getChild("content"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}