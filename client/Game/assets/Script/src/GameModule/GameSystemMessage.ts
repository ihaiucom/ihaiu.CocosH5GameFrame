import SystemMessag from "../GameFrame/System/SystemMessage";
import GetRewardDialog, { GetRewardDialogType } from '../FGUI/Extends/SystemModuleDialog/GetRewardDialog';
import MailData from "./DataStructs/MailData";
import ItemData from "./DataStructs/ItemData";
import Game from "../Game";
import TEXT from "../Config/Keys/TEXT";
import ItemGetWayDialog from "../FGUI/Extends/SystemModuleDialog/ItemGetWayDialog";

//======================
// 消息对话框API
//----------------------
export default class GameSystemMessag extends SystemMessag
{

    /** 获得奖励对话框 */
    private _getRewardDialog: GetRewardDialog;
    private get getRewardDialog()
	{
		if (!this._getRewardDialog)
		{
			this._getRewardDialog = GetRewardDialog.createInstance();
		}
		return this._getRewardDialog;
    }
    async rewardDialog(items: any[])
    {
        return this.getRewardDialog.open(items);
    }
    

    /** 物品前往获取对话框UI */
    private _itemGetWayDialog: ItemGetWayDialog;
    private get itemGetWayDialog()
	{
		if (!this._itemGetWayDialog)
		{
			this._itemGetWayDialog = ItemGetWayDialog.createInstance();
		}
		return this._itemGetWayDialog;
    }
    
    /**
     * 检测物品数量是否足够
     * @param itemId 物品ID
     * @param itemNeedNum 物品需要数量
     */
    checkItemNum(itemId: number, itemNeedNum: number): boolean
    {
        let count = Game.moduleModel.item.getItemNum(itemId);
        if(itemNeedNum <= count)
        {
            return true;
        }

        let item = Game.moduleModel.item.getItem(itemId);
        if(item)
        {
            // Game.system.toastFormatText(TEXT.ToastTextItemNotEnough2, item.itemName, itemNeedNum);
            this.openItemGetWayDailog( itemId, itemNeedNum )
        }
        else
        {
            console.error("Erro:", "不存在物品", itemId);
        }
        return false;
    }

    /**
     * 打开物品获取对话框
     * @param itemId 物品ID
     * @param costNum 物品需求数量
     */
    openItemGetWayDailog(itemId: number, costNum?: number)
    {
        this.itemGetWayDialog.open(itemId, costNum);
    }
  


}