/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBGStruct from "../../Generates/GameLaunch/ScreenBGStruct";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";

export default class ScreenBG extends ScreenBGStruct
{
    onWindowShow()
    {
        this.setScreenSize();
        Engine.stage.sResize.add(this.setScreenSize, this);
    }

    onWindowHide()
    {
        Engine.stage.sResize.remove(this.setScreenSize, this);
    }

    setScreenSize()
    {
        FguiHelper.autoScreenSize(this, Engine.Stage.ALIGN_CENTER, Engine.Stage.ALIGN_MIDDLE);
    }
}