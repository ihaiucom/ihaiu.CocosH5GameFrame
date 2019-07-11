import { GamerLoginS2C } from "../../Lib/AntFrame/Net/proto";

var GamerLoginS2CHandler = function(msg: GamerLoginS2C)
{
    console.info("GamerLoginS2CHandler", msg);
    if(msg.error)
        return;
}

export {GamerLoginS2CHandler}
