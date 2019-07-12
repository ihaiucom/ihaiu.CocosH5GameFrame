import BaseConfig from "./BaseConfig";
import BaseConfigRender from "./BaseConfigRender";
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";
import ConfigRenderComplete from "./Interfaces/ConfigRenderComplete";

export default abstract class JsonConfigRender<T extends BaseConfig> extends BaseConfigRender<T>
{
    configCls: any;

    parse(json: object)
    {
        for(let key in json)
        {
            let itemJson = json[key];
            let config:T = this.configCls.parse(itemJson);
            this.addConfig(config);
        }
    }


    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
    }


}