import ConfigLoaderInterface from "../../Config/Interfaces/ConfigLoaderInterface";
import AssetItemInfo from "./AssetItemInfo";
import ProgressCallbackInterface from "./ProgressCallbackInterface";
import { AssetItemType } from "./AssetItemType";
import Game from "../../Game";
import GuiResPackageConfig from "../../FGUI/GuiResPackageConfig";
import GuiSetting from "../../FGUI/GuiSetting";
import { ConfigLoaderCallback } from "../../Config/Interfaces/ConfigLoaderCallback";
import AssetHelper from "./AssetHelper";
export default class AssetManager implements ConfigLoaderInterface
{
    loadedAssets = new Dictionary<string, number>();


    // 加载配置
    loadConfig(path: string, callback?: ConfigLoaderCallback)
    {
        if (callback)
        {
            // path = `config/csv/${path}.csv`;
            let obj = {
                onLoaded: () =>
                {
                    let txt = Engine.loader.getRes(path);
                    callback(txt, path);
                }
            };

            Engine.loader.load(path, Handler.create(obj, obj.onLoaded));
        }
    }

    // 卸载配置文件
    unloadConfig(path: string)
    {
        Engine.loader.clearRes(path);
    }

    // 加载资源列表
    loadList(list: AssetItemInfo[], onObj?: any, onCompleteFun?: Function, onProgress?: ProgressCallbackInterface)
    {
        let count = list.length;
        let index = 0;
        let callback = {
            onComplete: (isSuccess) =>
            {
                let item: AssetItemInfo = list[index];
                // console.log("加载资源列表 onComplete: val=" + item);

                index++;

                if (onProgress)
                {
                    let rate = count > 0 ? index / count : 1;
                    onProgress(rate, index, count, item);
                }

                if (index >= count)
                {
                    if (onCompleteFun)
                    {
                        if (onObj)
                        {
                            onCompleteFun.apply(onObj);
                        }
                        else
                        {
                            onCompleteFun();
                        }

                    }
                }

            },
            onProgress: (val) =>
            {
                // console.log("加载资源列表 onProgress: val=" + val);
            }

        };

        if (list && list.length > 0)
        {
            let assets = [];
            let item: AssetItemInfo;
            for (let i = 0; i < list.length; i++)
            {
                item = list[i];
                if (!item)
                {
                    callback.onComplete(item);
                }

                // console.log(item.type + ", " + item.url);

                switch (item.type)
                {
                    case AssetItemType.FguiPackage:
                        this.loadFguiByPackagename(item.url, callback, callback.onComplete);
                        break;
                    case AssetItemType.FspritePackage:
                        this.loadFSpriteByPackagename(item.url, callback, callback.onComplete);
                        break;
                    case AssetItemType.Image:
                        assets.push({ url: item.url, type: Loader.IMAGE });
                        break;
                    case AssetItemType.Buffer:
                        assets.push({ url: item.url, type: Loader.BUFFER });
                        break;
                    case AssetItemType.Sound:
                        assets.push({ url: item.url, type: Loader.SOUND });
                        break;
                    case AssetItemType.Text:
                        assets.push({ url: item.url, type: Loader.TEXT });
                        break;
                    case AssetItemType.Json:
                        assets.push({ url: item.url, type: Loader.JSON });
                        break;
                    case AssetItemType.Xml:
                        assets.push({ url: item.url, type: Loader.XML });
                        break;
                    case AssetItemType.Font:
                        assets.push({ url: item.url, type: Loader.FONT });
                        break;
                    case AssetItemType.TTF:
                        assets.push({ url: item.url, type: Loader.TTF });
                        break;
                }
            }

            if (assets.length > 0)
            {
                for (let j = 0; j < assets.length; j++)
                {
                    if (this.loadedAssets.hasKey(assets[j].url))
                    {
                        callback.onComplete(true);
                    }
                    else
                    {
                        Engine.loader.load([assets[j]], Handler.create(callback, callback.onComplete), Handler.create(callback, callback.onProgress));
                    }

                    this.loadedAssets.add(assets[j].url, Game.time.localTime);
                }
            }
        }
        else
        {
            callback.onComplete(null);
        }

    }

    // 加载fgui包
    loadFguiByPackagename(packageName: string, caller?: any, method?: Function)
    {
        let packageConfig: GuiResPackageConfig = Game.guiRes.getconfig(packageName);
        this.loadFgui(packageConfig, caller, method);
    }

    async loadFguiByPackagenameAsync(packageName: string):Promise<GuiResPackageConfig>
    {
        return new Promise<GuiResPackageConfig>((resolve)=>{
            this.loadFguiByPackagename(packageName, this, (packageConfig: GuiResPackageConfig)=>
            {
                resolve(packageConfig);
            })
		});
    }



    // 加载fsprite包
    loadFSpriteByPackagename(packageName: string, caller?: any, method?: Function)
    {
        let packageConfig: GuiResPackageConfig = Game.spriteRes.getconfig(packageName);
        this.loadFgui(packageConfig, caller, method);
    }

    loadFgui(packageConfig: GuiResPackageConfig, caller?: any, method?: Function)
    {
        let callback = {
            apply: () =>
            {

                GuiSetting.addPackage(packageConfig.packagePath, packageConfig);

                if (method)
                {
                    if (caller)
                    {
                        return method.apply(caller, [packageConfig]);
                    }
                    else
                    {
                        method(packageConfig);
                    }
                }
            }
        };

        GuiSetting.addPackageReferenceNum(packageConfig.packagePath);
        if (GuiSetting.hasLoadPackage(packageConfig.packagePath))
        {
            callback.apply();
            return;
        }

        Engine.loader.load(packageConfig.resArray, Handler.create(callback, callback.apply));
    }

    unloadFgui(packageName: string, forceDispose?: boolean)
    {
        if (forceDispose === undefined)
            forceDispose = false;


        let packageConfig: GuiResPackageConfig = Game.guiRes.getconfig(packageName);
        if (!packageConfig)
            packageConfig = Game.spriteRes.getconfig(packageName);

        if (packageConfig)
        {
            let referenceNum = GuiSetting.removePackageReferenceNum(packageConfig.packagePath);
            if (!forceDispose)
            {
                if (referenceNum > 0)
                {
                    return;
                }
            }

            GuiSetting.removePackage(packageConfig.packagePath, packageConfig);
            let list = packageConfig.resArray;
            for (let i = 0; i < list.length; i++)
            {
                // console.log("==clearRes:" + list[i].url);
                Engine.loader.clearRes(list[i]);
            }
        }
    }




    // 加载资源
    load(path: string, complete: Function, caller:any, type:AssetItemType)
    {
        Engine.loader.load(path, 
            Handler.create(null, (res: any) =>
            {
                if (complete)
                {
                    if (caller)
                    {
                        complete.apply(caller, [res]);
                    }
                    else
                    {
                        complete(res);
                    }
                }
            }), 
            null, AssetHelper.assetItemType2LayaLoaderType(type));
    }

    // 加载资源, 异步
    async loadAsync(path: string, type:AssetItemType): Promise<any>
    {
        return new Promise<void>((resolve)=>
        {
            this.load(path, (res: any)=>
            {
                resolve(res);
            }, null, type);
         });
    }

}

window['AssetManager'] = AssetManager;