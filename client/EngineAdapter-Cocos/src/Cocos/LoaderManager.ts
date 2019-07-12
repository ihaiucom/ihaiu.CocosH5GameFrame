namespace Engines
{
    export class LoaderManager
    {
        load(path: string | any[], onComplete?: Handler, onProgress?:Handler, type?: any)
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
                    let urls = [];
                    if(typeof path[0] != "string" && path[0] && path[0].url)
                    {
                        for(let item of path)
                        {
                            urls.push(item.url);
                        }
                        path = urls;
                    }
                    
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
                    onComplete.bindRun();
                }
            }
            else if(typeof(path) == "object" && path['url'])
            {
                path = <string> path['url'];
                if(path.eStartsWith("http://") || path.eStartsWith("https://"))
                {
                    this.loadUrl(path, onComplete, onProgress);
                }
                else
                {
                    this.loadRes(path, onComplete, onProgress);
                }
            }
        }

        loadRes(path: string, onComplete?: Handler, onProgress?:Handler, type?: any)
        {
            cc.loader.loadRes(path, onProgress ? onProgress.bindRun : null,   onComplete ? onComplete.bindRun : null);
        }

        loadResArray(paths: string[], onComplete?: Handler, onProgress?:Handler)
        {
            cc.loader.loadResArray(paths, null, onProgress ? onProgress.bindRun : null,   onComplete.bindRun);
        }

        loadUrl(url: string | string[], onComplete?: Handler, onProgress?:Handler, type?: any)
        {
            cc.loader.load(url, onProgress ? onProgress.bindRun : null,   onComplete ? onComplete.bindRun : null);
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
}