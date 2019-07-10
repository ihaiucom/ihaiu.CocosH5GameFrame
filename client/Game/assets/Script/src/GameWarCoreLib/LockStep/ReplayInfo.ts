import FrameIdInfo from "./FrameIdInfo";

/**
 * 战报信息
 * 存储所有的关键帧
 */
export default class ReplayInfo
{
    /** 该战报的玩家ID */
    ownerId = 0;

    /** 该战报的游戏版本 */
    version = "v1.0.0";

    /** 所有帧操作信息 */
    frames: FrameIdInfo[][];
}