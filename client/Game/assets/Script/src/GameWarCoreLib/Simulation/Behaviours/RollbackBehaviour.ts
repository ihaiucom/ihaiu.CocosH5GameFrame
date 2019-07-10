import EntitySystemBehaviour from "./EntitySystemBehaviour";
import LogicFrameBehaviour from "./LogicFrameBehaviour";
import EntityComponentBackupBehaviour from "./EntityComponentBackupBehaviour";
import ServerBehaviour from "./ServerBehaviour";
import KeyFrameCollection from "../../LockStep/KeyFrameCollection";
import EntityWorldFrameData from "../../LockStep/EntityWorldFrameData";

/**
 * 回滚关键帧信息
 */
export default class RollbackBehaviour extends EntitySystemBehaviour
{
    private logicBehaviour: LogicFrameBehaviour;
    private backupBehaviour: EntityComponentBackupBehaviour;
    update()
    {
        let logicBehaviour = this.simulation.getBehaviour(LogicFrameBehaviour);
        let backupBehaviour = this.simulation.getBehaviour(EntityComponentBackupBehaviour);

        let serverBehaviour = this.simulation.getBehaviour(ServerBehaviour);

        this.logicBehaviour = logicBehaviour;
        this.backupBehaviour = backupBehaviour;

        while(serverBehaviour.queueKeyFrameCollection.length > 0)
        {
            let item = serverBehaviour.queueKeyFrameCollection[0];
            if(item.frameId < logicBehaviour.currentFrameId)
            {
                // 删除队头元素
                item = serverBehaviour.queueKeyFrameCollection.shift();
                // 回滚关键帧数据
                this.rollImpl(item);
            }
            else
            {
                break;
            }
        }
    }

    /**
     * 回滚关键帧数据
     */
    private rollImpl(collection: KeyFrameCollection)
    {
        let frameId = collection.frameId;
        if(frameId < 1)
            return;

        collection.keyFrames.sort((a, b)=>{return a.entityId - b.entityId;});

        // 恢复命令存储
        for(let frame of collection.keyFrames)
        {
            this.logicBehaviour.updateKeyFrameIdInfoAtFrameId(collection.frameId, frame);
        }

        // 从 frameId -1 数据中深度拷贝一份座位frameId的数据
        let prevFrameData = this.backupBehaviour.getEntityWorldFrameData(frameId - 1);
        if(prevFrameData != null)
        {
            // 回滚整EntityWorld数据
            this.simulation.entityWorld.rollBack(prevFrameData.clone(), collection);
            // 迅速从frameId开始模拟至当前客户端frameId
            while(frameId < this.logicBehaviour.currentFrameId)
            {
                // 运行实体系统
                super.update();
                
                // 实体组件 快照
                let data = new EntityWorldFrameData(
                    this.simulation.entityWorld.findAllEntitiesIds(),
                    this.simulation.entityWorld.findAlllCloneComponents()
                    );
                this.backupBehaviour.setEntityWorldFrameData(frameId, data);

                frameId++;
            }
        }
    }
}