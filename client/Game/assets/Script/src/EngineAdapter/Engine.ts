import Timer from "./Cocos/Timer";
import Loader from "./Cocos/Loader";
import Pool from "./Cocos/Pool";
import Tween from "./Cocos/Tween";
import Ease from "./Cocos/Ease";
export default class Engine
{
    /** 时间管理器的引用。*/
    static timer: Timer = new Timer();
    /** 资源加载器*/
    static loader: Loader = new Loader();
    /** 对象池 */
    static Pool = Pool;
    /** 缓动 */
    static Tween = Tween;
    /** 缓动 */
    static Ease = Ease;
}