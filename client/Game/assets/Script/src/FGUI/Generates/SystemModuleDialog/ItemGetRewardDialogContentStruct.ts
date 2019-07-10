/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueScaleButton from "../../Extends/CommonBase/BlueScaleButton";
import CostItemIcon from "../../Extends/CommonGame/CostItemIcon";
import ItemGetRewardDialogContent from "../../Extends/SystemModuleDialog/ItemGetRewardDialogContent";

export default class ItemGetRewardDialogContentStruct extends fgui.GComponent
{
	public m_menuList : fgui.GList;
	public m_closeButton : BlueScaleButton;
	public m_itemIcon : CostItemIcon;

	
	public static URL:string = "ui://q5yddivtma8e15";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUIV1","CommonBase","CommonGame"];

	
	public static createInstance():ItemGetRewardDialogContent {
		return <ItemGetRewardDialogContent><any>(fgui.UIPackage.createObject("SystemModuleDialog","ItemGetRewardDialogContent"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_menuList = <fgui.GList><any>(this.getChild("menuList"));
		this.m_closeButton = <BlueScaleButton><any>(this.getChild("closeButton"));
		this.m_itemIcon = <CostItemIcon><any>(this.getChild("itemIcon"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}