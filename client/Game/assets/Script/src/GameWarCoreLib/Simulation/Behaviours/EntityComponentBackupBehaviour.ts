import Dictionary from "../../../Libs/Helpers/Dictionary";
import EntityWorldFrameData from "../../LockStep/EntityWorldFrameData";
import LogicFrameBehaviour from "./LogicFrameBehaviour";
import AbstractSimulationBehaviour from "../AbstractSimulationBehaviour";
import KeyFrameSender from "../../LockStep/KeyFrameSender";
import ServerBehaviour from "./ServerBehaviour";

/**
 * 组件内容备份
 */
export default class EntityComponentBackupBehaviour  extends AbstractSimulationBehaviour
{

    private queueFrameCache: int[] = [];
    private entityWorldFrameDataDict: Dictionary<int, EntityWorldFrameData> = new Dictionary<int, EntityWorldFrameData>();

    getEntityWorldFrameDataDict():Dictionary<int, EntityWorldFrameData>
    {
        return this.entityWorldFrameDataDict;
    }

    /** 获取指定帧的 帧数据快照 */
    getEntityWorldFrameData(frameId: int):EntityWorldFrameData
    {
        if(this.entityWorldFrameDataDict.hasKey(frameId))
            return this.entityWorldFrameDataDict.getValue(frameId);
        
        return null;
    }

    /** 设置帧数据快照 */
    setEntityWorldFrameData(frameId:int, data:EntityWorldFrameData)
    {
        this.queueFrameCache.push(frameId);

        if(this.entityWorldFrameDataDict.hasKey(frameId))
        {
            this.entityWorldFrameDataDict.getValue(frameId).clear();
        }
        this.entityWorldFrameDataDict.set(frameId, data);
    }

    /** 发生操作命令 */
    private sendKeyFrame(frameId:int)
    {
        let collection = KeyFrameSender.getFrameCommand();
        if(collection.keyFrames && collection.keyFrames.length > 0)
        {
            // TODO
            //这里写发生协议代码
            //send server code
            let server = this.simulation.getBehaviour(ServerBehaviour);
            server.queueKeyFrameCollection.push(collection.clone());


            KeyFrameSender.clearFrameCommand();
        }
    }

    update(): void 
    {
        let logic = this.simulation.getBehaviour(LogicFrameBehaviour);
        let frameId = logic.currentFrameId;

        // 实体组件 快照
        let data = new EntityWorldFrameData(
            this.simulation.entityWorld.findAllEntitiesIds(),
            this.simulation.entityWorld.findAlllCloneComponents()
            );

        this.setEntityWorldFrameData(frameId, data);

        // 发生操作命令
        this.sendKeyFrame(frameId);
    }
}