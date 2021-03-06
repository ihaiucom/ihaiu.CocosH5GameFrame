import { GamerLoginS2C } from '../Net/proto';

export enum eSex
{
    None = 0,
    Man = 1,
    Woman = 2
}
export class SdkUserInfo
{
    public language: string = "";
    public nickName: string = "";       // 玩家昵称
    public avatarUrl: string = "";      // 玩家头像
    public gender: eSex = eSex.None;    // 玩家性别
    public country: string = "";        // 玩家国家
    public province: string = "";       // 玩家省份
    public city: string = "";
    public unionId: string = "";
    public openId: string = "";
    public sessionId: string = "";
    public sign: string = "";

    public ToString(): string
    {
        return " UserInfo::<br/>NickName:" + this.nickName
            + ",<br/>AvatarUrl:" + this.avatarUrl
            + ",<br/>OpenID:" + this.openId
            + ",<br/>City:" + this.city
            + ",<br/>SessionID:" + this.sessionId;
    }
}
export class SdkLoginInfo
{
    public code : string = "";
}

export class SystemInfo
{
    /**手机型号 */
    model: string="";
    /**设备像素比 */
    pixelRatio: number=0;
    /**屏幕宽度 */
    screenWidth: number=0;
    /**屏幕高度 */
    screenHeight: number=0;
    /**可使用窗口宽度 */
    windowWidth: number=0;
    /**可使用窗口高度 */
    windowHeight: number=0;
    /**微信版本号 */
    version: string="";
    /**系统信息 */
    system: string="";
    /**平台 */
    platform: string="";
    /**性能等级 */
    benchmarkLevel: number=0;
    /**客户端基础库sdk版本信息 */
    SDKVersion: string="";
}

export class ReferrerInfo
{
    appId: string;
    extraData: any;
}

/**向opendata发送的数据类型 */
export enum MsgType
{
    RemoveRankList = 0, // 移除排行内的内容
    FetchFriendRankList = 1, // 获取好友排行榜
    SubmitScore = 3,         // 提交分数，暂时无用因为是在服务器提交分数
    GameOverRank = 4,        // 获取好友排行榜横向排列展示模式，暂时无用，因为无此需求
    FetchGroupFriendRankList = 5, // 获取群排行榜
    NotifyTime = 6,          // 通知子域当前服务器时间
}
export default class AntPlatformBase
{
    protected m_stSystemInfo: SystemInfo = null;
    protected m_stSdkUserInfo: SdkUserInfo = null;
    protected m_stSdkLoginInfo: SdkLoginInfo = null; 
    protected onShowCallback:any = null;
    protected onHideCallback:any = null;

    public static get platformWX():boolean{
        return !cc.sys.isBrowser;
    }
    constructor() {
        this.m_stSystemInfo = new SystemInfo();
        this.m_stSdkUserInfo = new SdkUserInfo();
        this.m_stSdkLoginInfo = new SdkLoginInfo();
    }

    public GetSystemInfo(): SystemInfo{
        return this.m_stSystemInfo;
    }



    public async GameDoSdkAuthAsync(): Promise<SdkUserInfo>{
        return null;
    }

    public async GameDoSdkLoginAsync(): Promise<SdkLoginInfo> {
        return new Promise<SdkLoginInfo>(resolve=>{
            resolve(this.m_stSdkLoginInfo);
        });
    }

    public GetLaunchOptions():any {
        return {};
    } 

    public OnShow(callback):any {
        this.onShowCallback = callback;
    }
    public OnHide(callback):any {
        this.onHideCallback = callback;
    }
    public async UserCheck(): Promise<boolean> {
        return new Promise<boolean>(resolve=>{
            resolve(true);
        });
    } 

    public Share(title:string, imgUrl:string, imgId:string, query:string): Promise<boolean>{
        return null;
    }

    public async ShowRewardedVideoAd():Promise<boolean>{
        return new Promise<boolean>(resolve=>{
            resolve(true);    
        });
    }

    public async ShowBannerAd():Promise<boolean>{
        return new Promise<boolean>(resolve=>{
            resolve(false);    
        });
    }

    public async HideBannerAd():Promise<boolean>{
        return new Promise<boolean>(resolve=>{
            resolve(false);    
        });
    }

    public VibrateShort(){ }
    public VibrateLong(){ }
    public async NavigateToMiniProgram(appId:string):Promise<boolean>{
        return new Promise<boolean>(resolve=>{
            resolve(false);    
        });
    }

    public async Login(server: number = 1,roletype: number = 1): Promise<GamerLoginS2C>{
        return null;
    }
}
