/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import GetRewardDialog from "../../Extends/SystemModuleDialog/GetRewardDialog";
import ItemGetWayDialog from "../../Extends/SystemModuleDialog/ItemGetWayDialog";
import ItemGetRewardDialogContent from "../../Extends/SystemModuleDialog/ItemGetRewardDialogContent";

export default class SystemModuleDialogBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(GetRewardDialog.URL, GetRewardDialog);
		bind(ItemGetWayDialog.URL, ItemGetWayDialog);
		bind(ItemGetRewardDialogContent.URL, ItemGetRewardDialogContent);
	}
}