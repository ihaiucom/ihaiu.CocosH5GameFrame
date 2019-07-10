import Handler = Laya.Handler;

export default class Loader
{
    load(path: string | string[], onComplete?: Handler, onProgress?:Handler, type?: any)
    {
        if(typeof(path) == "string")
        {
            if(path.eStartsWith("http://") || path.eStartsWith("https://"))
            {
                this.loadUrl(path, onComplete, onProgress);
            }
            else
            {
                this.loadRes(path, onComplete, onProgress);
            }
        }
        else if(path instanceof Array)
        {
            if(path.length > 0)
            {
                if(path[0].eStartsWith("http://") || path[0].eStartsWith("https://"))
                {
                    this.loadUrl(path, onComplete, onProgress);
                }
                else
                {
                    this.loadResArray(path, onComplete, onProgress);
                }
            }
            else
            {
                onComplete.run();
            }
        }
    }

    loadRes(path: string, onComplete?: Handler, onProgress?:Handler, type?: any)
    {
        cc.loader.loadRes(path, onProgress ? onProgress.run : null,   onComplete ? onComplete.run : null);
    }

    loadResArray(paths: string[], onComplete?: Handler, onProgress?:Handler)
    {
        cc.loader.loadResArray(paths, onProgress ? onProgress.run : null,   onComplete.run);
    }

    loadUrl(url: string | string[], onComplete?: Handler, onProgress?:Handler, type?: any)
    {
        cc.loader.load(url, onProgress ? onProgress.run : null,   onComplete ? onComplete.run : null);
    }

    getRes(path: string): any
    {
        return cc.loader.getRes(path);
    }

    clearRes(path: string)
    {
        cc.loader.releaseRes(path);
    }
}