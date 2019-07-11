declare namespace fairygui 
{
    class GearDisplay extends fgui.GearDisplay {}
    class UIPackage extends fgui.UIPackage {}
    class Window extends fgui.Window {}
    class GRoot extends fgui.GRoot {}
    class Events extends fgui.Event {}
    
    
    
    class GObject extends fgui.GObject {}
    class GComponent extends fgui.GComponent {}
    class Controller extends fgui.Controller {}
    class Transition extends fgui.Transition {}
    class GImage extends fgui.GImage {}
    class GTextField extends fgui.GTextField {}
    class GTextInput extends fgui.GTextInput {}
    class GRichTextField extends fgui.GRichTextField {}
    class GGraph extends fgui.GGraph {}
    class GGroup extends fgui.GGroup {}
    class GLoader extends fgui.GLoader {}
    class GList extends fgui.GList {}
    class GMovieClip extends fgui.GMovieClip {}
    class GButton extends fgui.GButton {}
    class GComboBox extends fgui.GComboBox {}
    class GLabel extends fgui.GLabel {}
    class GProgressBar extends fgui.GProgressBar {}
    class GScrollBar extends fgui.GScrollBar {}
    class GSlider extends fgui.GSlider {}
    class GObjectPool extends fgui.GObjectPool {}
    
    class TranslationHelper extends fgui.TranslationHelper {}
    
}

declare namespace fgui
{
    interface GList
    {
        setItemRenderer(method:Function, caller:any): void
    }
}


class GRoot extends fgui.GRoot {}
class GObject extends fgui.GObject {}
class GComponent extends fgui.GComponent {}
class GImage extends fgui.GImage {}
class GTextField extends fgui.GTextField {}
class GTextInput extends fgui.GTextInput {}
class GRichTextField extends fgui.GRichTextField {}
class GGraph extends fgui.GGraph {}
class GGroup extends fgui.GGroup {}
class GLoader extends fgui.GLoader {}
class GList extends fgui.GList {}
class GMovieClip extends fgui.GMovieClip {}
class GButton extends fgui.GButton {}
class GComboBox extends fgui.GComboBox {}
class GLabel extends fgui.GLabel {}
class GProgressBar extends fgui.GProgressBar {}
class GScrollBar extends fgui.GScrollBar {}
class GSlider extends fgui.GSlider {}
class GObjectPool extends fgui.GObjectPool {}




declare function fairyguiAdapter(): void;

