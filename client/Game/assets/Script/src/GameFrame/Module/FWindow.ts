import Game from "../../Game";
import MenuLayer from "../Menu/MenuLayer";
import EngineAdapter from "../../EngineAdapter/EngineAdapter";

import GComponent = fairygui.GComponent;

//======================
// 扩展 fairygui.Window
//----------------------
export default class FWindow extends fairygui.Window
{

    // 窗口容器
    windowContainer: fgui.GRoot;
	get isShowed(): boolean
	{
		if (this.contentPane)
			return this.parent != null;
		return false;
	}


	private isAddedStage: boolean = false;
	onWindowWillShow()
	{
		if (this.contentPane)
		{
			this.callChildOnWindowWillShow(this.contentPane);
		}

		this.setScreenSize();
		if (this.isAddedStage)
			return;
		this.isAddedStage = true;
		EngineAdapter.adapter.sResize.add(this.setScreenSize, this);
	}


	onWindowWillHide()
	{
		if (this.contentPane)
		{
			this.callChildOnWindowWillHide(this.contentPane);
		}

		this.isAddedStage = false;
		EngineAdapter.adapter.sResize.remove(this.setScreenSize, this);
	}


	setScreenSize()
	{
		if (this.contentPane)
		{
			if(this.windowContainer && this.windowContainer["menuLayer"] !== undefined)
			{
				this.width = this.windowContainer.width;
				this.height = MenuLayer.getLayerHeight(this.windowContainer["menuLayer"]);
				this.contentPane.width = this.windowContainer.width;
				this.contentPane.height = this.height;
			}
			else
			{
				this.width = Game.screenSetting.screenWidth;
				this.height = Game.screenSetting.screenHeight;
				this.contentPane.width = Game.screenSetting.screenWidth;
				this.contentPane.height = Game.screenSetting.screenHeight;
			}
			this.callChildOnWindowResize(this.contentPane);

			// this.contentPane.displayObject.graphics.drawRect(0, 0, this.contentPane.width, this.contentPane.height, "red");

		}
	}



	//=========================
	// 调用child GComponent的 onWindowWillShow
	//-------------------------
	private callChildOnWindowWillShow(com: fairygui.GComponent)
	{
		if (com)
		{
			let fun: Function = com["onWindowWillShow"];
			if (fun)
			{
				fun.apply(com);
			}

			if (com._children)
			{
				for (let i = 0; i < com._children.length; i++)
				{
					this.callChildOnWindowWillShow(<GComponent>com._children[i]);
				}
			}
		}
	}

	//=========================
	// 调用child GComponent的 onWindowWillHide
	//-------------------------
	private callChildOnWindowWillHide(com: GComponent)
	{
		if (com)
		{
			let fun: Function = com["onWindowWillHide"];
			if (fun)
			{
				fun.apply(com);
			}

			if (com._children)
			{
				for (let i = 0; i < com._children.length; i++)
				{
					this.callChildOnWindowWillHide(<GComponent>com._children[i]);
				}
			}
		}
	}



	//=========================
	// 调用child GComponent的 onWindowResize
	//-------------------------
	private callChildOnWindowResize(com: GComponent)
	{
		if (com)
		{
			let fun: Function = com["onWindowResize"];
			if (fun)
			{
				fun.apply(com);
			}

			if (com._children)
			{
				for (let i = 0; i < com._children.length; i++)
				{
					this.callChildOnWindowResize(<GComponent>com._children[i]);
				}
			}
		}
	}
}