export default class Gid
{
    static _gid: number = 1
    static getGID(): number
    {
        return this._gid ++;
    }
}