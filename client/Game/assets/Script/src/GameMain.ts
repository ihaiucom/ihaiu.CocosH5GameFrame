import AntFrame from "../Lib/AntFrame/AntFrame";
import AntNet from "../Lib/AntFrame/Net/AntNet";
import Game from "./Game";
import { AssetItemType } from "./GameFrame/AssetManagers/AssetItemType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMain extends cc.Component 
{


	start () 
	{

		fairyguiAdapter();
		engineAdapter();
		Game.init();

		// // 启动游戏
		Game.launch.install();

		// console.log("GameMain start");
		// for(let i = 0; i < 10; i ++)
		// {
		// 	console.log(Engines.Gid.getGID());
		// }

		// Engine.timer.loop(1000, this, this.onLoop);

		// this.login();

		// this.testConfig();
	}




	async login()
	{
		console.log("GameMain login");
		let msg = await AntFrame.platform.Login();
		console.info(msg);
		console.log("error:" + msg.error);
		msg = await AntNet.AsyncGamerLoginGetDataC2S();
		console.log(msg);
	}

	onLoop()
	{
		console.log("GameMain onLoop");
	}
}
