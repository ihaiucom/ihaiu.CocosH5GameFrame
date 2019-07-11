
// 模块ID
export enum MenuId
{
    /*------------- 系统  ------------ */

    /** 主界面 */
    Home = 100,
    /** 登录 */
    Login = 101,
    /** 创建角色 */
    CreateRole = 102,
    /** 角色信息 */
    PlayerInfo = 103,
    /** 排行榜 */
    Rank = 104,
    /** 设置 */
    SystemSetting = 105,
    /** 邮件 */
    Mail = 107,
    /** 聊天 */
    Chat = 108,

    
    /*------------- 主菜单  ------------ */

    /** 背包 */
    Bag = 140,
    /** 艺人 */
    ActorList = 180,
    /** 好友 */
    Friend = 190,
    

    /*------------- 活动  ------------ */
    /** 商城 */
    Shop = 121,
    /** 充值 */
    Recharge = 122,
    /** 日常任务 */
    DailyTask = 123,
    /** 日常签到 */
    DailySignin = 124,
    /** 活动 */
    Activity = 125,
    /** 公告 */
    Notice = 126,

    
    
    




    /*------------- 子菜单组  ------------ */
    SubMenuButtonBegin = 1000000,



}

window["MenuId"] = MenuId;