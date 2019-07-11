import LangConfigReader from "../../Config/LangConfigReader";
import Game from "../../Game";
import MWindow from "../../GameFrame/Module/MWindow";


export default class FguiHelper
{
	
    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    //=========================
    // 设置child.moduleWindow
    //-------------------------
    static setChildWindow(com: GComponent, window: MWindow)
    {
        if (com)
        {
            com["moduleWindow"] = window;

            if (com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.setChildWindow(<GComponent>com._children[i], window);
                }
            }
        }
    }

    //=========================
    // 设置child.onWindowInited
    //-------------------------
    static callChildOnWindowInited(com: GComponent)
    {
        if (com)
        {

            let fun: Function = com["onWindowInited"];
            if (fun)
            {
                fun.apply(com);
            }

            if (com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowInited(<GComponent>com._children[i]);
                }
            }
        }
    }


    //=========================
    // 设置child.onWindowDestory
    //-------------------------
    static callChildOnWindowDestory(com: GObject)
    {



        if (com)
        {

            // if (getClassName(com) == "GuideClickHand")
            //     console.log(com);


            let fun: Function = com["onWindowDestory"];
            if (fun)
            {
                if (fun.apply(com))
                {
                    return;
                }
			}
			
			if(com instanceof GComponent)
			{
				for(let i = com.numChildren - 1; i >= 0; i --)
				{
					this.callChildOnWindowDestory(com.getChildAt(i));
				}
			}
        }
    }




    //=========================
    // 调用child GComponent的 onWindowShow
    //-------------------------
    static callChildOnWindowShow(com: GComponent)
    {
        if (com)
        {
            let enbaleCall: boolean = true;
            let fun: Function = com["onWindowShow"];
            if (fun)
            {
                if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined)
                {
                    let whenSelfVisiableCallWindowShowAndHide: boolean = com["whenSelfVisiableCallWindowShowAndHide"];
                    if (whenSelfVisiableCallWindowShowAndHide)
                    {
                        if (com.visible == false)
                        {
                            enbaleCall = false;
                        }
                    }
                }

                if (enbaleCall)
                {
                    fun.apply(com);
                }
            }

            if (enbaleCall && com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowShow(<GComponent>com._children[i]);
                }
            }
        }
    }

    //=========================
    // 调用child GComponent的 onWindowHide
    //-------------------------
    static callChildOnWindowHide(com: GComponent)
    {
        if (com)
        {
            let enbaleCall: boolean = true;
            let fun: Function = com["onWindowHide"];
            if (fun)
            {
                if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined)
                {
                    let whenSelfVisiableCallWindowShowAndHide: boolean = com["whenSelfVisiableCallWindowShowAndHide"];
                    if (whenSelfVisiableCallWindowShowAndHide)
                    {
                        if (com.visible == false)
                        {
                            enbaleCall = false;
                        }
                    }
                }

                if (enbaleCall)
                {
                    fun.apply(com);
                }
            }

            if (enbaleCall && com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowHide(<GComponent>com._children[i]);
                }
            }
        }
    }


    //=========================
    // 调用child GComponent的 onTabShow
    //-------------------------
    static callChildOnTabShow(com: GObject)
    {
        if (com)
        {

            let fun: Function = com["onTabShow"];
            if (fun)
            {
                fun.apply(com);
            }


            if (com["_children"])
            {
                for (let i = 0; i < com["_children"]["length"]; i++)
                {
                    this.callChildOnTabShow(com["_children"][i]);
                }
            }
        }
    }


    //=========================
    // 调用child GComponent的 onTabHide
    //-------------------------
    static callChildOnTabHide(com: GObject)
    {
        if (com)
        {

            let fun: Function = com["onTabHide"];
            if (fun)
            {
                fun.apply(com);
            }

            if (com["_children"])
            {
                for (let i = 0; i < com["_children"]["length"]; i++)
                {
                    this.callChildOnTabHide(com["_children"][i]);
                }
            }
        }
    }

	
    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
	// private static helpPoint = new Laya.Point();
	// 屏幕自适应
	static autoScreenScaleShrink(content: fairygui.GObject, alignH?: string, alignV?: string)
	{
		// let rate = Game.screenSetting.screenScaleShrink;

		// content.scaleX = rate;
		// content.scaleY = rate;
		// if (alignH)
		// {
		// 	let parent = fairygui.GRoot.inst;

		// 	switch (alignH)
		// 	{
		// 		case Laya.Stage.ALIGN_LEFT:
		// 			content.x = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_CENTER:
		// 			content.x = (parent.width - content.width * rate) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_RIGHT:
		// 			content.x = parent.width - content.width * rate;
		// 			break;
		// 	}

		// 	switch (alignV)
		// 	{
		// 		case Laya.Stage.ALIGN_TOP:
		// 			content.y = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_MIDDLE:
		// 			content.y = (parent.height - content.height * rate) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_BOTTOM:
		// 			content.y = parent.height - content.height * rate;
		// 			break;
		// 	}
		// }
	}

	
	// 屏幕自适应
	static autoScreenScaleShrink2(content: fairygui.GObject, sourceScale: number = 1)
	{
		let rate = Game.screenSetting.screenScaleShrink;

		content.scaleX = rate * sourceScale;
		content.scaleY = rate * sourceScale;
		if(content.parent)
		{
			content.x = content.parent.width * 0.5;
			content.y = content.parent.height * 0.5;
		}
	}

	// 屏幕自适应
	static autoScreenScale(content: fairygui.GObject, alignH?: string, alignV?: string)
	{
		// let rate = Game.screenSetting.screenScaleExpand;

		// content.scaleX = rate;
		// content.scaleY = rate;
		// if (alignH)
		// {
		// 	let parent = fairygui.GRoot.inst;

		// 	switch (alignH)
		// 	{
		// 		case Laya.Stage.ALIGN_LEFT:
		// 			content.x = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_CENTER:
		// 			content.x = (parent.width - content.width * rate) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_RIGHT:
		// 			content.x = parent.width - content.width * rate;
		// 			break;
		// 	}

		// 	switch (alignV)
		// 	{
		// 		case Laya.Stage.ALIGN_TOP:
		// 			content.y = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_MIDDLE:
				
		// 			if(content.parent)
		// 			{
		// 				this.helpPoint.y = (parent.height - content.height * rate) * 0.5;
		// 				this.helpPoint = content.parent.globalToLocal(0, this.helpPoint.y, this.helpPoint);
		// 				content.y = this.helpPoint.y;
		// 			}
		// 			else
		// 			{
		// 				content.y = (parent.height - content.height * rate) * 0.5;
		// 			}
		// 			break;
		// 		case Laya.Stage.ALIGN_BOTTOM:
		// 			content.y = parent.height - content.height * rate;
		// 			break;
		// 	}
		// }
	}

	
	// 屏幕自适应
	static autoScreenScale2(content: fairygui.GObject)
	{
		let rate = Game.screenSetting.screenScaleExpand;

		content.scaleX = rate;
		content.scaleY = rate;
		if(content.parent)
		{
			content.x = content.parent.width * 0.5;
			content.y = content.parent.height * 0.5;
		}
	}


	
	// 屏幕自适应
	static autoScreenScale3(content: fairygui.GObject)
	{
		let rate = Game.screenSetting.screenScaleExpand;

		content.scaleX = rate;
		content.scaleY = rate;
	}

		
	// 屏幕自适应 场景大小
	static autoScreenSize(content: fairygui.GObject, alignH?: string, alignV?: string)
	{
		// let rate = Game.screenSetting.screenScaleExpand;

		// content.width = content.sourceWidth * rate;
		// content.height = content.sourceHeight * rate;
		// if (alignH)
		// {
		// 	let parent = fairygui.GRoot.inst;

		// 	switch (alignH)
		// 	{
		// 		case Laya.Stage.ALIGN_LEFT:
		// 			content.x = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_CENTER:
		// 			content.x = (parent.width - content.width) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_RIGHT:
		// 			content.x = parent.width - content.width;
		// 			break;
		// 	}

		// 	switch (alignV)
		// 	{
		// 		case Laya.Stage.ALIGN_TOP:
		// 			content.y = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_MIDDLE:
		// 			if(content.parent)
		// 			{
		// 				this.helpPoint.y = (parent.height - content.height) * 0.5;
		// 				this.helpPoint = content.parent.globalToLocal(0, this.helpPoint.y, this.helpPoint);
		// 				content.y = this.helpPoint.y;
		// 			}
		// 			else
		// 			{
		// 				content.y = (parent.height - content.height) * 0.5;
		// 			}
		// 			break;
		// 		case Laya.Stage.ALIGN_BOTTOM:
		// 			content.y = parent.height - content.height;
		// 			break;
		// 	}
		// }
	}

	
	// 屏幕自适应 -- 父容器大小
	static autoParentSize(content: fairygui.GObject, alignH?: string, alignV?: string)
	{
		// let rate = Game.screenSetting.screenScaleExpand;

		// content.width = content.sourceWidth * rate;
		// content.height = content.sourceHeight * rate;
		// if (alignH)
		// {
		// 	let parent = fairygui.GRoot.inst;

		// 	switch (alignH)
		// 	{
		// 		case Laya.Stage.ALIGN_LEFT:
		// 			content.x = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_CENTER:
		// 			content.x = (parent.width - content.width) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_RIGHT:
		// 			content.x = parent.width - content.width;
		// 			break;
		// 	}

		// 	switch (alignV)
		// 	{
		// 		case Laya.Stage.ALIGN_TOP:
		// 			content.y = 0;
		// 			break;
		// 		case Laya.Stage.ALIGN_MIDDLE:
		// 			content.y = (parent.height - content.height) * 0.5;
		// 			break;
		// 		case Laya.Stage.ALIGN_BOTTOM:
		// 			content.y = parent.height - content.height;
		// 			break;
		// 	}
		// }
	}

	// 屏幕居中
	static centerScreen(content: fairygui.GObject)
	{
		// content.x = (Game.screenSetting.screenWidth - content.width) * 0.5;
		// content.y = (Game.screenSetting.screenHeight - content.height) * 0.5;
	}

	static centerScreenForCenter(content: fairygui.GObject)
	{
		content.x = Game.screenSetting.screenWidth * 0.5;
		content.y = Game.screenSetting.screenHeight * 0.5;
	}

	// 屏幕大小
	static setScreenSize(content: fairygui.GObject)
	{
		content.width = Game.screenSetting.screenWidth;
		content.height = Game.screenSetting.screenHeight;
	}



	/** 获取值，使用访问路径 */
	static getValueForPath(path: string, content?: any, ...args)
	{
		if (path.eEndsWith("()"))
		{
			return FguiHelper.getFunResultForPath(path, content, ...args);
		}
		else
		{
			return FguiHelper.getFieldValueForPath(path, content);
		}
	}


	/** 获取函数结果值，使用访问路径 */
	static getFunResultForPath(path: string, content?: any, ...args)
	{
		if (path.eEndsWith("()"))
		{
			path = path.replace("()", "");
			let fun: Function = FguiHelper.getFieldValueForPath(path, content);
			if (fun)
			{
				let paths = path.split(/[\.\/]/);
				if (paths.length == 1)
				{
					if (args.length == 1)
					{
						return fun.apply(content, args[0]);
					}
					return fun.apply(content, args);
				}
				else
				{
					let objPath = "";
					let gap = "";
					for (let i = 0; i < paths.length - 1; i++)
					{
						objPath += gap + paths[i];
						gap = ".";
					}

					let obj = FguiHelper.getFieldValueForPath(objPath, content);
					if (args.length == 1)
					{
						return fun.apply(obj, args[0]);
					}
					return fun.apply(obj, args);
				}
			}
		}
		else
		{
			return FguiHelper.getFieldValueForPath(path, content);
		}
	}

	/** 获取值，使用访问路径 */
	static getFieldValueForPath(path: string, content?: any): any
	{
		if (!content)
		{
			content = window;
			if (!content)
			{
				content = this;
			}
		}

		let paths = path.split(/[\.\/]/);
		let val = content;
		for (let i = 0; i < paths.length; i++)
		{
			if (val[paths[i]])
			{
				val = val[paths[i]];
			}
			else
			{
				return null;
			}
		}
		return val;
	}










	static setStringsSource(lang: LangConfigReader)
	{
		//let txtmap = fairygui.UIPackage["_stringsSource"] = {};
		let txtmap = fairygui.TranslationHelper["strings"] = {};

		let list = lang.getConfigList();
		for (let i = 0; i < list.length; i++)
		{
			let config = list[i];
			let name = <string>config.dict.getValue("name");
			let value = <string>config.dict.getValue("value");
			let index = name.indexOf("-");

			if (value === undefined || value === null)
				continue;


			if (index == -1)
				continue;

			var uiUrl = name.substr(0, index);
			var uiNodeName = name.substr(index + 1);

			var col = txtmap[uiUrl];
			if (!col)
			{
				col = {};
				txtmap[uiUrl] = col;
			}
			col[uiNodeName] = value;

		}
	}

}