import { GamerLoginGetDataS2C } from "../../Lib/AntFrame/Net/proto";

var GamerLoginGetDataS2CHandler = function(msg: GamerLoginGetDataS2C)
{
    if(msg.error)
        return;
        
    console.log("GamerLoginGetDataS2CHandler msg.time：");
    console.info(msg.time);

}

export {GamerLoginGetDataS2CHandler}
