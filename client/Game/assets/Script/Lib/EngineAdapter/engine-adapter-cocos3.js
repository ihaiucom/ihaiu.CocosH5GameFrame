function engineAdapter()
{
    Engine.init();

    window.Rectangle = cc.Rect;
    window.Vec2 =  cc.Vec2;
    
}

window.engineAdapter = engineAdapter;