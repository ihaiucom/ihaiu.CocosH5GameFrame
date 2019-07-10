import FrameIdInfo from "./FrameIdInfo";

/**
 * 关键帧集合
 */
export default class KeyFrameCollection
{
    frameId:int;
    keyFrames: FrameIdInfo[] = [];

    clone():KeyFrameCollection
    {
        let o = new KeyFrameCollection();
        o.frameId = this.frameId;
        for(let item of this.keyFrames)
        {
            o.keyFrames.push(item);
        }
        return o;
    }
}