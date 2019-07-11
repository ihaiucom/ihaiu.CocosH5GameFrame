import GuiResPackageConfig from "./GuiResPackageConfig";




// =====================
// fgui 设置
// ---------------------
export default class GuiSetting
{
    // 资源根目录
    static resRoot: string = "res/";

    // 后缀
    static packageFileExtension: string = "bin";


    static getResPackagePath(packageName: string, dir: string)
    {
        if (isNullOrEmpty(dir))
        {
            return `${GuiSetting.resRoot}${packageName}`;
        }
        else
        {
            return `${GuiSetting.resRoot}${dir}/${packageName}`;
        }
    }

    static getResPath(filename: string, dir: string)
    {
        if (isNullOrEmpty(dir))
        {
            return `${GuiSetting.resRoot}${filename}`;
        }
        else
        {
            return `${GuiSetting.resRoot}${dir}/${filename}`;
        }
    }

    // 地图
    static getMapPath(filename: string)
    {
        return this.getResPath(filename, "map");
    }

    


    // 包        
    private static _uiPackageDict: Dictionary<string, fairygui.UIPackage>;

    
    private static get uiPackageDict():Dictionary<string, fairygui.UIPackage>
    {
        if(!this._uiPackageDict)
        {
            this._uiPackageDict = new Dictionary<string, fairygui.UIPackage>();
        }
        return this._uiPackageDict
    }

    // 包 引用次数
    private static _uiPackageDictForReferenceNum: Dictionary<string, number>;

    
    private static get uiPackageDictForReferenceNum():Dictionary<string, number>
    {
        if(!this._uiPackageDictForReferenceNum)
        {
            this._uiPackageDictForReferenceNum = new Dictionary<string, number>();
        }
        return this._uiPackageDictForReferenceNum
    }


    public static addPackage(resKey: string, packageConfig?: GuiResPackageConfig): fairygui.UIPackage
    {
        if (GuiSetting.uiPackageDict.hasKey(resKey))
        {
            return GuiSetting.uiPackageDict.getValue(resKey);
        }
        else
        {
            let pkg = fairygui.UIPackage.addPackage(resKey);
            GuiSetting.uiPackageDict.add(resKey, pkg);
            return pkg;
        }
    }

    public static removePackage(resKey: string, packageConfig?: GuiResPackageConfig)
    {
        let pkg = GuiSetting.uiPackageDict.getValue(resKey);
        if (pkg)
        {
            fairygui.UIPackage.removePackage(resKey);
            pkg.dispose();
            GuiSetting.uiPackageDict.remove(resKey);
        }
        GuiSetting.uiPackageDictForReferenceNum.remove(resKey);
    }

    public static hasLoadPackage(resKey: string): boolean
    {
        return GuiSetting.uiPackageDict.hasKey(resKey);
    }

    public static addPackageReferenceNum(resKey: string): number
    {
        let num = GuiSetting.getPackageReferenceNum(resKey) + 1;
        if (num == 0)
        {
            num = 1;
        }
        console.log("~~addPackageReferenceNum:  " + num + "  " + resKey);
        GuiSetting.uiPackageDictForReferenceNum.add(resKey, num);
        return num;
    }

    public static removePackageReferenceNum(resKey: string): number
    {
        let num = GuiSetting.getPackageReferenceNum(resKey) - 1;
        if (num < 0)
        {
            num = 0;
        }

        console.log("~~removePackageReferenceNum:  " + num + "  " + resKey);
        GuiSetting.uiPackageDictForReferenceNum.add(resKey, num);
        return num;
    }

    public static getPackageReferenceNum(resKey: string): number
    {
        return GuiSetting.uiPackageDictForReferenceNum.hasKey(resKey) ? GuiSetting.uiPackageDictForReferenceNum.getValue(resKey) : 0;
    }



}