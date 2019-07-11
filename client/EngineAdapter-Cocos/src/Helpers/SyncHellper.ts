class SyncHellper
{
    static async waitTime(millisecond: number): Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            Engine.timer.once(millisecond, this, ()=>
            {
                return resolve();
            }, null, false);
        });
    }

    static async waitFrame(frameNum: number): Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            Engine.timer.frameOnce(frameNum, this, ()=>
            {
                return resolve();
            });
        });
    }
}