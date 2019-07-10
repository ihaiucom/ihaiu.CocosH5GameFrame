import AbstractSimulationBehaviour from "../AbstractSimulationBehaviour";
import KeyFrameCollection from "../../LockStep/KeyFrameCollection";

/**
 * 服务器帧数据
 */
export default class ServerBehaviour extends AbstractSimulationBehaviour
{
    /** 收到的服务器帧集合 */
    queueKeyFrameCollection: KeyFrameCollection[] = [];
}