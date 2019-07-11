import { MenuId } from './MenuId';
import ModuleConfig from "../GameFrame/Module/ModuleConfig";
import MWindow from "../GameFrame/Module/MWindow";
import HomeWindow from "./ViewWindows/HomeWindow";
import LoginWindow from "./ViewWindows/LoginWindow";

//======================
// 模块配置
//----------------------
export default class MenuWindows {
    private static _dict: Dictionary<MenuId, ModuleConfig>;
    static get dict(): Dictionary<MenuId, ModuleConfig>
    {
        if(!this._dict)
        {
            this._dict = new Dictionary<MenuId, ModuleConfig>();
        }
        return this._dict;
    }

    static get(menuId: MenuId): ModuleConfig {
        return MenuWindows.dict.getValue(menuId);
    }

    static add<T extends MWindow>(menuId: MenuId, windowClass: { new(): T }) {
        // 请在该地方配置menuId对应的 MWindow
        MenuWindows.dict.add(menuId, new ModuleConfig(menuId, windowClass));
    }

    static install() {

        MenuWindows.add(MenuId.Login, LoginWindow);
        MenuWindows.add(MenuId.Home, HomeWindow);
    }
}