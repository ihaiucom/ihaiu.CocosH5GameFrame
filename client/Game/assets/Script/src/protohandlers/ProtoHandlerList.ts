import { GamerLoginS2CHandler } from "./GamerLoginS2CHandler";
import { GamerLoginGetDataS2CHandler } from "./GamerLoginGetDataS2CHandler";

export default class ProtoHandlerList
{
    GamerLoginS2C = GamerLoginS2CHandler;
    GamerLoginGetDataS2C = GamerLoginGetDataS2CHandler;

    
	init()
	{
		this.GamerLoginS2C.bind(this);
        this.GamerLoginGetDataS2C.bind(this);
    }
}