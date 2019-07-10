import Game from "./Game";
import EngineAdapter from "./EngineAdapter/EngineAdapter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMain extends cc.Component 
{


	start () 
	{
		// 引擎适配
		EngineAdapter.adapter.init();
		// 启动游戏
		Game.launch.install();
	}
}
