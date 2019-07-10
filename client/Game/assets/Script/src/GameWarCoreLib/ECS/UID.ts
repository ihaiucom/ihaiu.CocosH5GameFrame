/**
 * 唯一ID
 */
export default class UID
{
    private static _uid:Guid = 0;
    public static uid():Guid
    {
        return this._uid ++;
    }
}
