/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import YellowButton from "../../Extends/CommonBase/YellowButton";
import BlueButton from "../../Extends/CommonBase/BlueButton";
import CommonBadge from "../../Extends/CommonBase/CommonBadge";
import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import YellowBigButton from "../../Extends/CommonBase/YellowBigButton";
import YellowSmallButton from "../../Extends/CommonBase/YellowSmallButton";
import BlueButtonSmall from "../../Extends/CommonBase/BlueButtonSmall";
import YellowButtonSmall from "../../Extends/CommonBase/YellowButtonSmall";
import AddButton from "../../Extends/CommonBase/AddButton";
import RenameInput from "../../Extends/CommonBase/RenameInput";
import IconButton from "../../Extends/CommonBase/IconButton";
import BlueScaleButton from "../../Extends/CommonBase/BlueScaleButton";
import RenameInput2 from "../../Extends/CommonBase/RenameInput2";
import BubbleTalkSmall from "../../Extends/CommonBase/BubbleTalkSmall";
import ShareButton from "../../Extends/CommonBase/ShareButton";
import CloseButton from "../../Extends/CommonBase/CloseButton";
import MenuButton from "../../Extends/CommonBase/MenuButton";

export default class CommonBaseBinder
{
	public static bindAll():void 
	{
		let bind = fgui.UIObjectFactory.setPackageItemExtension;
		bind(YellowButton.URL, YellowButton);
		bind(BlueButton.URL, BlueButton);
		bind(CommonBadge.URL, CommonBadge);
		bind(NumberBadge.URL, NumberBadge);
		bind(YellowBigButton.URL, YellowBigButton);
		bind(YellowSmallButton.URL, YellowSmallButton);
		bind(BlueButtonSmall.URL, BlueButtonSmall);
		bind(YellowButtonSmall.URL, YellowButtonSmall);
		bind(AddButton.URL, AddButton);
		bind(RenameInput.URL, RenameInput);
		bind(IconButton.URL, IconButton);
		bind(BlueScaleButton.URL, BlueScaleButton);
		bind(RenameInput2.URL, RenameInput2);
		bind(BubbleTalkSmall.URL, BubbleTalkSmall);
		bind(ShareButton.URL, ShareButton);
		bind(CloseButton.URL, CloseButton);
		bind(MenuButton.URL, MenuButton);
	}
}