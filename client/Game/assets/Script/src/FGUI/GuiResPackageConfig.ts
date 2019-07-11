import GuiSetting from "./GuiSetting";


// =====================
// fgui包资源配置
// ---------------------
export default class GuiResPackageConfig
{
    // 目录文件夹
    resDir: string;

    // 包名
    packageName: string;

    // xxx.bin
    resBin: string;

    // xxx@atlasX.png
    resAtlas: string[] = [];

    // 声音
    sounds: string[] = [];


    private _loadList: { url: string, type: Loader }[];

    // 获取加载列表
    get loadList(): { url: string, type: Loader }[]
    {
        if (!this._loadList)
        {
            let list = [];


            list.push({ url: GuiSetting.getResPath(this.resBin, this.resDir), type: Loader.BUFFER });

            if (this.resAtlas)
            {
                for (let i = 0; i < this.resAtlas.length; i++)
                {
                    list.push({ url: GuiSetting.getResPath(this.resAtlas[i], this.resDir), type: Loader.IMAGE });
                }
            }

            if (this.sounds)
            {
                for (let i = 0; i < this.sounds.length; i++)
                {
                    list.push({ url: GuiSetting.getResPath(this.sounds[i], this.resDir), type: Loader.SOUND });
                }
            }

            this._loadList = list;
        }

        return this._loadList;
    }

    private _resArray: string[];
    get resArray(): string[]
    {
        if (!this._resArray)
        {
            let list = [];


            list.push(GuiSetting.getResPath(this.resBin, this.resDir));

            if (this.resAtlas)
            {
                for (let i = 0; i < this.resAtlas.length; i++)
                {
                    list.push(GuiSetting.getResPath(this.resAtlas[i], this.resDir));
                }
            }

            if (this.sounds)
            {
                for (let i = 0; i < this.sounds.length; i++)
                {
                    list.push(GuiSetting.getResPath(this.sounds[i], this.resDir));
                }
            }

            this._resArray = list;
        }

        return this._resArray;
    }

    get packagePath(): string
    {
        return GuiSetting.getResPackagePath(this.packageName, this.resDir)
    }

}