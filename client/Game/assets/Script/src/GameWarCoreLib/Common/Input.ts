import Keyboard = Laya.Keyboard;

class InputKeyCodeState
{
    public keyCode:int;
    public active: boolean = false;

    constructor(keyCode:int)
    {
        this.keyCode = keyCode;
    }
}

export default class Input
{
    // private static status: InputKeyCodeState[] = [];

    // static install()
    // {
    //     this.register([Keyboard.A, Keyboard.S, Keyboard.D, Keyboard.W, Keyboard.SPACE]);
    //     Laya.timer.frameLoop(1, this, this.onLoop);
    // }

    // static uninstall()
    // {
    //     Laya.timer.clearAll(this);
    // }

    // static register(keycodes: int[])
    // {
    //     for(let code of keycodes)
    //     {
    //         this.status.push(new InputKeyCodeState(code));
    //     }
    // }

    // private static onLoop()
    // {
    //     for(let item of this.status)
    //     {
    //         item.active = Laya.KeyBoardManager.hasKeyDown(item.keyCode);
    //     }
    // }

    public static isKeyCodeActive(keyCode: int)
    {
        return Laya.KeyBoardManager.hasKeyDown(keyCode);;
    }
}