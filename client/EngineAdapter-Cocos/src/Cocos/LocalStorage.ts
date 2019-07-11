namespace Engines
{ 
   /**
     * <p> <code>LocalStorage</code> 类用于没有时间限制的数据存储。</p>
     */
    export class LocalStorage 
    {
        
        /**
         *  数据列表。
         */
        static items: any;
        /**
         * 存储指定键名和键值，字符串类型。
         * @param key 键名。
         * @param value 键值。
         */
        static setItem(key: string, value: string): void
        {
            cc.sys.localStorage.setItem(key, value);
        }
        /**
         * 获取指定键名的值。
         * @param key 键名。
         * @return 字符串型值。
         */
        static getItem(key: string): string
        {
            return cc.sys.localStorage.getItem(key);
        }
        /**
         * 存储指定键名及其对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @param value 键值。是 <code>Object</code> 类型，此致会被转化为 JSON 字符串存储。
         */
        static setJSON(key: string, value: any): void
        {
            cc.sys.localStorage.setJSON(key, value);
        }
        /**
         * 获取指定键名对应的 <code>Object</code> 类型值。
         * @param key 键名。
         * @return <code>Object</code> 类型值
         */
        static getJSON(key: string): any
        {
            return cc.sys.localStorage.getJSON(key);
        }
        /**
         * 删除指定键名的信息。
         * @param key 键名。
         */
        static removeItem(key: string): void
        {
            cc.sys.localStorage.removeItem(key);
        }
        /**
         * 清除本地存储信息。
         */
        static clear(): void
        {
            cc.sys.localStorage.clear();
        }
    }
}