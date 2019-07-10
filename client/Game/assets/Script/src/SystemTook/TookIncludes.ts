
import TestFixedTimeHookHandler from "./Handlers/TestFixedTimeHookHandler";
import TestHeartTookHandler from "./Handlers/TestHeartTookHandler";
import FixedTimeHookHandler_0h0m0s from "./Handlers/FixedTimeHookHandler_0h0m0s";
import Assembly from "../Libs/Cls/Assembly";


export default class TookIncludes
{
    private static isInstalled = false;
    static install()
    {
        if(this.isInstalled)
            return;

        // Assembly.register(<any>TestFixedTimeHookHandler, 'TestFixedTimeHookHandler');
        // Assembly.register(<any>TestHeartTookHandler, 'TestHeartTookHandler');
        Assembly.register(<any>FixedTimeHookHandler_0h0m0s, 'FixedTimeHookHandler_0h0m0s');
    }
}