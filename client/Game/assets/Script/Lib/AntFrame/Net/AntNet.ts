import {GamerLoginS2C, GamerLoginGetDataS2C, ServerTimeS2C, GamerSubChatChannelS2C, GamerChangeNameS2C, GamerBuyItemS2C, GamerUseItemS2C, GamerSellItemS2C, GamerFriendChatS2C, GamerWorldChatS2C, GamerTestChatS2C, GamerClubRequestS2C, GamerNewFriendReqS2C, GamerDelFriendS2C, GamerProcessFriendReqS2C, GamerNewHeroS2C, GamerUpgradeHeroS2C, GamerChoseHeroS2C, GamerMatchS2C, GamerCancelMatchS2C, PVPInput, int32, uint64, PVPInput, PVPResult, GamerPVPSyncS2C, PVPResult, PVPStateSync, GamerPVPStateSyncS2C, GamerGetRealTimeRankS2C, GamerCheckPVPBattleS2C, WXInfo, GamerUploadWXInfoS2C, GamerNewRoomS2C, GamerAddRoomS2C, GamerLeaveRoomS2C, GamerGetRewardS2C, GamerUseIconS2C} from "./proto";

declare var net;
export default class AntNet
{
    public static get onError(){
		return net.logic.onError;
	}
	public static get onConnect(){
		return net.logic.onConnect;
	}
	public static get onClose(){
		return net.logic.onClose;
	}
	public static get onReconnect(){
		return net.logic.onReconnect;
	}
	public static get logicPing() {
		return net.logic.ping;
	}


	public static GamerLoginC2S(session: string, addr: string){
		net.logic.gamerLoginC2S(session, addr);
	}

	public static get gamerLoginS2C(){
		return net.logic.gamerLoginS2C;
	}

	public static async AsyncGamerLoginC2S(session: string, addr: string):Promise<GamerLoginS2C>{
		return new Promise<GamerLoginS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginS2C.on(fun);
			AntNet.GamerLoginC2S(session, addr);
		});
	}

	public static GamerLoginGetDataC2S(){
		net.logic.gamerLoginGetDataC2S();
	}

	public static get gamerLoginGetDataS2C(){
		return net.logic.gamerLoginGetDataS2C;
	}

	public static async AsyncGamerLoginGetDataC2S():Promise<GamerLoginGetDataS2C>{
		return new Promise<GamerLoginGetDataS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginGetDataS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginGetDataS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginGetDataS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginGetDataS2C.on(fun);
			AntNet.GamerLoginGetDataC2S();
		});
	}

	public static ServerTimeC2S(){
		net.logic.serverTimeC2S();
	}

	public static get serverTimeS2C(){
		return net.logic.serverTimeS2C;
	}

	public static async AsyncServerTimeC2S():Promise<ServerTimeS2C>{
		return new Promise<ServerTimeS2C>((resolve)=>{
			let s2c = {error:200} as ServerTimeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ServerTimeS2C){
				clearTimeout(timeObj);
				AntNet.serverTimeS2C.off(fun);
				resolve(e);
			}
			AntNet.serverTimeS2C.on(fun);
			AntNet.ServerTimeC2S();
		});
	}

	public static GamerSubChatChannelC2S(channel: number, open: boolean){
		net.logic.gamerSubChatChannelC2S(channel, open);
	}

	public static get gamerSubChatChannelS2C(){
		return net.logic.gamerSubChatChannelS2C;
	}

	public static async AsyncGamerSubChatChannelC2S(channel: number, open: boolean):Promise<GamerSubChatChannelS2C>{
		return new Promise<GamerSubChatChannelS2C>((resolve)=>{
			let s2c = {error:200} as GamerSubChatChannelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSubChatChannelS2C){
				clearTimeout(timeObj);
				AntNet.gamerSubChatChannelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSubChatChannelS2C.on(fun);
			AntNet.GamerSubChatChannelC2S(channel, open);
		});
	}

	public static GamerChangeNameC2S(newName: string){
		net.logic.gamerChangeNameC2S(newName);
	}

	public static get gamerChangeNameS2C(){
		return net.logic.gamerChangeNameS2C;
	}

	public static async AsyncGamerChangeNameC2S(newName: string):Promise<GamerChangeNameS2C>{
		return new Promise<GamerChangeNameS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeNameS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeNameS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeNameS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeNameS2C.on(fun);
			AntNet.GamerChangeNameC2S(newName);
		});
	}

	public static GamerBuyItemC2S(item: number, count: number){
		net.logic.gamerBuyItemC2S(item, count);
	}

	public static get gamerBuyItemS2C(){
		return net.logic.gamerBuyItemS2C;
	}

	public static async AsyncGamerBuyItemC2S(item: number, count: number):Promise<GamerBuyItemS2C>{
		return new Promise<GamerBuyItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerBuyItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerBuyItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerBuyItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerBuyItemS2C.on(fun);
			AntNet.GamerBuyItemC2S(item, count);
		});
	}

	public static GamerUseItemC2S(item: number, count: number){
		net.logic.gamerUseItemC2S(item, count);
	}

	public static get gamerUseItemS2C(){
		return net.logic.gamerUseItemS2C;
	}

	public static async AsyncGamerUseItemC2S(item: number, count: number):Promise<GamerUseItemS2C>{
		return new Promise<GamerUseItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseItemS2C.on(fun);
			AntNet.GamerUseItemC2S(item, count);
		});
	}

	public static GamerSellItemC2S(item: number, count: number){
		net.logic.gamerSellItemC2S(item, count);
	}

	public static get gamerSellItemS2C(){
		return net.logic.gamerSellItemS2C;
	}

	public static async AsyncGamerSellItemC2S(item: number, count: number):Promise<GamerSellItemS2C>{
		return new Promise<GamerSellItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerSellItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSellItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerSellItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSellItemS2C.on(fun);
			AntNet.GamerSellItemC2S(item, count);
		});
	}

	public static GamerFriendChatC2S(toId: number, msg: string){
		net.logic.gamerFriendChatC2S(toId, msg);
	}

	public static get gamerFriendChatS2C(){
		return net.logic.gamerFriendChatS2C;
	}

	public static async AsyncGamerFriendChatC2S(toId: number, msg: string):Promise<GamerFriendChatS2C>{
		return new Promise<GamerFriendChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerFriendChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerFriendChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerFriendChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerFriendChatS2C.on(fun);
			AntNet.GamerFriendChatC2S(toId, msg);
		});
	}

	public static GamerWorldChatC2S(server: number, msg: string){
		net.logic.gamerWorldChatC2S(server, msg);
	}

	public static get gamerWorldChatS2C(){
		return net.logic.gamerWorldChatS2C;
	}

	public static async AsyncGamerWorldChatC2S(server: number, msg: string):Promise<GamerWorldChatS2C>{
		return new Promise<GamerWorldChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerWorldChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerWorldChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerWorldChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerWorldChatS2C.on(fun);
			AntNet.GamerWorldChatC2S(server, msg);
		});
	}

	public static GamerTestChatC2S(toId: number, msg: string){
		net.logic.gamerTestChatC2S(toId, msg);
	}

	public static get gamerTestChatS2C(){
		return net.logic.gamerTestChatS2C;
	}

	public static async AsyncGamerTestChatC2S(toId: number, msg: string):Promise<GamerTestChatS2C>{
		return new Promise<GamerTestChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerTestChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerTestChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerTestChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerTestChatS2C.on(fun);
			AntNet.GamerTestChatC2S(toId, msg);
		});
	}

	public static GamerClubRequestC2S(clubId: number, msg: string){
		net.logic.gamerClubRequestC2S(clubId, msg);
	}

	public static get gamerClubRequestS2C(){
		return net.logic.gamerClubRequestS2C;
	}

	public static async AsyncGamerClubRequestC2S(clubId: number, msg: string):Promise<GamerClubRequestS2C>{
		return new Promise<GamerClubRequestS2C>((resolve)=>{
			let s2c = {error:200} as GamerClubRequestS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerClubRequestS2C){
				clearTimeout(timeObj);
				AntNet.gamerClubRequestS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerClubRequestS2C.on(fun);
			AntNet.GamerClubRequestC2S(clubId, msg);
		});
	}

	public static GamerNewFriendReqC2S(oid: number, msg: string){
		net.logic.gamerNewFriendReqC2S(oid, msg);
	}

	public static get gamerNewFriendReqS2C(){
		return net.logic.gamerNewFriendReqS2C;
	}

	public static async AsyncGamerNewFriendReqC2S(oid: number, msg: string):Promise<GamerNewFriendReqS2C>{
		return new Promise<GamerNewFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewFriendReqS2C.on(fun);
			AntNet.GamerNewFriendReqC2S(oid, msg);
		});
	}

	public static GamerDelFriendC2S(oid: number){
		net.logic.gamerDelFriendC2S(oid);
	}

	public static get gamerDelFriendS2C(){
		return net.logic.gamerDelFriendS2C;
	}

	public static async AsyncGamerDelFriendC2S(oid: number):Promise<GamerDelFriendS2C>{
		return new Promise<GamerDelFriendS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelFriendS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelFriendS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelFriendS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelFriendS2C.on(fun);
			AntNet.GamerDelFriendC2S(oid);
		});
	}

	public static GamerProcessFriendReqC2S(oid: number, result: boolean){
		net.logic.gamerProcessFriendReqC2S(oid, result);
	}

	public static get gamerProcessFriendReqS2C(){
		return net.logic.gamerProcessFriendReqS2C;
	}

	public static async AsyncGamerProcessFriendReqC2S(oid: number, result: boolean):Promise<GamerProcessFriendReqS2C>{
		return new Promise<GamerProcessFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerProcessFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerProcessFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerProcessFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerProcessFriendReqS2C.on(fun);
			AntNet.GamerProcessFriendReqC2S(oid, result);
		});
	}

	public static GamerNewHeroC2S(heroId: number){
		net.logic.gamerNewHeroC2S(heroId);
	}

	public static get gamerNewHeroS2C(){
		return net.logic.gamerNewHeroS2C;
	}

	public static async AsyncGamerNewHeroC2S(heroId: number):Promise<GamerNewHeroS2C>{
		return new Promise<GamerNewHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewHeroS2C.on(fun);
			AntNet.GamerNewHeroC2S(heroId);
		});
	}

	public static GamerUpgradeHeroC2S(lid: number){
		net.logic.gamerUpgradeHeroC2S(lid);
	}

	public static get gamerUpgradeHeroS2C(){
		return net.logic.gamerUpgradeHeroS2C;
	}

	public static async AsyncGamerUpgradeHeroC2S(lid: number):Promise<GamerUpgradeHeroS2C>{
		return new Promise<GamerUpgradeHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerUpgradeHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUpgradeHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerUpgradeHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUpgradeHeroS2C.on(fun);
			AntNet.GamerUpgradeHeroC2S(lid);
		});
	}

	public static GamerChoseHeroC2S(lid: number){
		net.logic.gamerChoseHeroC2S(lid);
	}

	public static get gamerChoseHeroS2C(){
		return net.logic.gamerChoseHeroS2C;
	}

	public static async AsyncGamerChoseHeroC2S(lid: number):Promise<GamerChoseHeroS2C>{
		return new Promise<GamerChoseHeroS2C>((resolve)=>{
			let s2c = {error:200} as GamerChoseHeroS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChoseHeroS2C){
				clearTimeout(timeObj);
				AntNet.gamerChoseHeroS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChoseHeroS2C.on(fun);
			AntNet.GamerChoseHeroC2S(lid);
		});
	}

	public static GamerMatchC2S(type: number, hero: number){
		net.logic.gamerMatchC2S(type, hero);
	}

	public static get gamerMatchS2C(){
		return net.logic.gamerMatchS2C;
	}

	public static async AsyncGamerMatchC2S(type: number, hero: number):Promise<GamerMatchS2C>{
		return new Promise<GamerMatchS2C>((resolve)=>{
			let s2c = {error:200} as GamerMatchS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerMatchS2C){
				clearTimeout(timeObj);
				AntNet.gamerMatchS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerMatchS2C.on(fun);
			AntNet.GamerMatchC2S(type, hero);
		});
	}

	public static GamerCancelMatchC2S(){
		net.logic.gamerCancelMatchC2S();
	}

	public static get gamerCancelMatchS2C(){
		return net.logic.gamerCancelMatchS2C;
	}

	public static async AsyncGamerCancelMatchC2S():Promise<GamerCancelMatchS2C>{
		return new Promise<GamerCancelMatchS2C>((resolve)=>{
			let s2c = {error:200} as GamerCancelMatchS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCancelMatchS2C){
				clearTimeout(timeObj);
				AntNet.gamerCancelMatchS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCancelMatchS2C.on(fun);
			AntNet.GamerCancelMatchC2S();
		});
	}

	public static GamerPVPSyncC2S(session: string, input: PVPInput, needFrames: int32, crc: uint64, agents: PVPInput, reconn: boolean, index: number, addr: string, result: PVPResult){
		net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
	}

	public static get gamerPVPSyncS2C(){
		return net.logic.gamerPVPSyncS2C;
	}

	public static async AsyncGamerPVPSyncC2S(session: string, input: PVPInput, needFrames: int32, crc: uint64, agents: PVPInput, reconn: boolean, index: number, addr: string, result: PVPResult):Promise<GamerPVPSyncS2C>{
		return new Promise<GamerPVPSyncS2C>((resolve)=>{
			let s2c = {error:200} as GamerPVPSyncS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerPVPSyncS2C){
				clearTimeout(timeObj);
				AntNet.gamerPVPSyncS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerPVPSyncS2C.on(fun);
			AntNet.GamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
		});
	}

	public static GamerPVPStateSyncC2S(session: string, result: PVPResult, stateSync: PVPStateSync){
		net.logic.gamerPVPStateSyncC2S(session, result, stateSync);
	}

	public static get gamerPVPStateSyncS2C(){
		return net.logic.gamerPVPStateSyncS2C;
	}

	public static async AsyncGamerPVPStateSyncC2S(session: string, result: PVPResult, stateSync: PVPStateSync):Promise<GamerPVPStateSyncS2C>{
		return new Promise<GamerPVPStateSyncS2C>((resolve)=>{
			let s2c = {error:200} as GamerPVPStateSyncS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerPVPStateSyncS2C){
				clearTimeout(timeObj);
				AntNet.gamerPVPStateSyncS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerPVPStateSyncS2C.on(fun);
			AntNet.GamerPVPStateSyncC2S(session, result, stateSync);
		});
	}

	public static GamerGetRealTimeRankC2S(){
		net.logic.gamerGetRealTimeRankC2S();
	}

	public static get gamerGetRealTimeRankS2C(){
		return net.logic.gamerGetRealTimeRankS2C;
	}

	public static async AsyncGamerGetRealTimeRankC2S():Promise<GamerGetRealTimeRankS2C>{
		return new Promise<GamerGetRealTimeRankS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetRealTimeRankS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetRealTimeRankS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetRealTimeRankS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetRealTimeRankS2C.on(fun);
			AntNet.GamerGetRealTimeRankC2S();
		});
	}

	public static GamerCheckPVPBattleC2S(session: string){
		net.logic.gamerCheckPVPBattleC2S(session);
	}

	public static get gamerCheckPVPBattleS2C(){
		return net.logic.gamerCheckPVPBattleS2C;
	}

	public static async AsyncGamerCheckPVPBattleC2S(session: string):Promise<GamerCheckPVPBattleS2C>{
		return new Promise<GamerCheckPVPBattleS2C>((resolve)=>{
			let s2c = {error:200} as GamerCheckPVPBattleS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCheckPVPBattleS2C){
				clearTimeout(timeObj);
				AntNet.gamerCheckPVPBattleS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCheckPVPBattleS2C.on(fun);
			AntNet.GamerCheckPVPBattleC2S(session);
		});
	}

	public static GamerUploadWXInfoC2S(wxInfo: WXInfo){
		net.logic.gamerUploadWXInfoC2S(wxInfo);
	}

	public static get gamerUploadWXInfoS2C(){
		return net.logic.gamerUploadWXInfoS2C;
	}

	public static async AsyncGamerUploadWXInfoC2S(wxInfo: WXInfo):Promise<GamerUploadWXInfoS2C>{
		return new Promise<GamerUploadWXInfoS2C>((resolve)=>{
			let s2c = {error:200} as GamerUploadWXInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUploadWXInfoS2C){
				clearTimeout(timeObj);
				AntNet.gamerUploadWXInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUploadWXInfoS2C.on(fun);
			AntNet.GamerUploadWXInfoC2S(wxInfo);
		});
	}

	public static GamerNewRoomC2S(type: number, hero: number){
		net.logic.gamerNewRoomC2S(type, hero);
	}

	public static get gamerNewRoomS2C(){
		return net.logic.gamerNewRoomS2C;
	}

	public static async AsyncGamerNewRoomC2S(type: number, hero: number):Promise<GamerNewRoomS2C>{
		return new Promise<GamerNewRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewRoomS2C.on(fun);
			AntNet.GamerNewRoomC2S(type, hero);
		});
	}

	public static GamerAddRoomC2S(roomId: number, hero: number){
		net.logic.gamerAddRoomC2S(roomId, hero);
	}

	public static get gamerAddRoomS2C(){
		return net.logic.gamerAddRoomS2C;
	}

	public static async AsyncGamerAddRoomC2S(roomId: number, hero: number):Promise<GamerAddRoomS2C>{
		return new Promise<GamerAddRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerAddRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerAddRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerAddRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerAddRoomS2C.on(fun);
			AntNet.GamerAddRoomC2S(roomId, hero);
		});
	}

	public static GamerLeaveRoomC2S(roomId: number){
		net.logic.gamerLeaveRoomC2S(roomId);
	}

	public static get gamerLeaveRoomS2C(){
		return net.logic.gamerLeaveRoomS2C;
	}

	public static async AsyncGamerLeaveRoomC2S(roomId: number):Promise<GamerLeaveRoomS2C>{
		return new Promise<GamerLeaveRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerLeaveRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLeaveRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerLeaveRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLeaveRoomS2C.on(fun);
			AntNet.GamerLeaveRoomC2S(roomId);
		});
	}

	public static GamerGetRewardC2S(type: number){
		net.logic.gamerGetRewardC2S(type);
	}

	public static get gamerGetRewardS2C(){
		return net.logic.gamerGetRewardS2C;
	}

	public static async AsyncGamerGetRewardC2S(type: number):Promise<GamerGetRewardS2C>{
		return new Promise<GamerGetRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetRewardS2C.on(fun);
			AntNet.GamerGetRewardC2S(type);
		});
	}

	public static GamerUseIconC2S(type: number, count: number, session: string){
		net.logic.gamerUseIconC2S(type, count, session);
	}

	public static get gamerUseIconS2C(){
		return net.logic.gamerUseIconS2C;
	}

	public static async AsyncGamerUseIconC2S(type: number, count: number, session: string):Promise<GamerUseIconS2C>{
		return new Promise<GamerUseIconS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseIconS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseIconS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseIconS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseIconS2C.on(fun);
			AntNet.GamerUseIconC2S(type, count, session);
		});
	}

	public static get gamerNotifyLoginOtherS2C(){
		return net.logic.gamerNotifyLoginOtherS2C;
	}

	public static get gamerNotifyNewChatS2C(){
		return net.logic.gamerNotifyNewChatS2C;
	}

	public static get gamerNotifyNewFriendReqS2C(){
		return net.logic.gamerNotifyNewFriendReqS2C;
	}

	public static get gamerNotifyNewFriendS2C(){
		return net.logic.gamerNotifyNewFriendS2C;
	}

	public static get gamerNotifyDelFriendS2C(){
		return net.logic.gamerNotifyDelFriendS2C;
	}

	public static get gamerNotifyNewMailS2C(){
		return net.logic.gamerNotifyNewMailS2C;
	}

	public static get gamerNotifyMatchInfoS2C(){
		return net.logic.gamerNotifyMatchInfoS2C;
	}

	public static get gamerNotifyGamerMiniS2C(){
		return net.logic.gamerNotifyGamerMiniS2C;
	}

	public static get gamerNotifyPVPSyncS2C(){
		return net.logic.gamerNotifyPVPSyncS2C;
	}

	public static get gamerNotifyNewPVPResultS2C(){
		return net.logic.gamerNotifyNewPVPResultS2C;
	}

	public static get gamerNotifyPVPStateSyncS2C(){
		return net.logic.gamerNotifyPVPStateSyncS2C;
	}

	public static get gamerNotifyIconChangeS2C(){
		return net.logic.gamerNotifyIconChangeS2C;
	}

	public static get gamerNotifyDiamonChangeS2C(){
		return net.logic.gamerNotifyDiamonChangeS2C;
	}

	public static get gamerNotifyEnergyChangeS2C(){
		return net.logic.gamerNotifyEnergyChangeS2C;
	}

	public static get gamerNotifyExpChangeS2C(){
		return net.logic.gamerNotifyExpChangeS2C;
	}

	public static get gamerNotifyRoomInfoChangeS2C(){
		return net.logic.gamerNotifyRoomInfoChangeS2C;
	}
}