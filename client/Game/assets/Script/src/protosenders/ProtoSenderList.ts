import LoginSender from "./Senders/LoginSender";
import GMSender from './Senders/GMSender';

//====================
// 消息发送器列表
//--------------------
export default class ProtoSenderList
{
    login = new LoginSender();
    gm = new GMSender();
}