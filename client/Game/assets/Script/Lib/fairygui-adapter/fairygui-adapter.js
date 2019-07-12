function fairyguiAdapter()
{
    var fairygui = window.fairygui;
    if(!fairygui)
    {
        fairygui = fgui;
        fairygui.Events = fgui.Event;
        window.fairygui = fairygui;

        window.GRoot = fgui.GRoot;
        window.GObject = fgui.GObject;
        window.GComponent = fgui.GComponent;
        window.GImage = fgui.GImage;
        window.GTextField = fgui.GTextField;
        window.GTextInput = fgui.GTextInput;
        window.GRichTextField = fgui.GRichTextField;
        window.GGraph = fgui.GGraph;
        window.GGroup = fgui.GGroup;
        window.GList = fgui.GList;
        window.GLoader = fgui.GLoader;
        window.GMovieClip = fgui.GMovieClip;
        window.GButton = fgui.GButton;
        window.GComboBox = fgui.GComboBox;
        window.GLabel = fgui.GLabel;
        window.GProgressBar = fgui.GProgressBar;
        window.GScrollBar = fgui.GScrollBar;
        window.GSlider = fgui.GSlider;
        window.GObjectPool = fgui.GObjectPool;
        
    }

    
fgui.GList.prototype.setItemRenderer = function(method, caller)
{
    if(caller)
    {
        this.itemRenderer = method.bind(caller);
    }
    else
    {
        this.itemRenderer = method;
    }
}


}



window.fairyguiAdapter = fairyguiAdapter;