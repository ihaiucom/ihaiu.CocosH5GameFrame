namespace Laya
{
    export class Loader
    {
        /**文本类型，加载完成后返回文本。*/
        static TEXT: string = "text";
        /**JSON 类型，加载完成后返回json数据。*/
        static JSON: string = "json";
        /**prefab 类型，加载完成后返回Prefab实例。*/
        static PREFAB: string = "prefab";
        /**XML 类型，加载完成后返回domXML。*/
        static XML: string="xml";
        /**二进制类型，加载完成后返回arraybuffer二进制数据。*/
        static BUFFER: string="arraybuffer";
        /**纹理类型，加载完成后返回Texture。*/
        static IMAGE: string="image";
        /**声音类型，加载完成后返回sound。*/
        static SOUND: string="sound";
        /**图集类型，加载完成后返回图集json信息(并创建图集内小图Texture)。*/
        static ATLAS: string="atlas"
        /**位图字体类型，加载完成后返回BitmapFont，加载后，会根据文件名自动注册为位图字体。*/
        static FONT: string="font";
        /** TTF字体类型，加载完成后返回null。*/
        static TTF: string="ttf";
        /** 预加载文件类型，加载完成后自动解析到preLoadedMap。*/
        static PLF: string="plf";
        /**Hierarchy资源。*/
        static HIERARCHY: string="HIERARCHY";
        /**Mesh资源。*/
        static MESH: string="MESH";
        /**Material资源。*/
        static MATERIAL: string="MATERIAL";
        /**Texture2D资源。*/
        static TEXTURE2D: string="TEXTURE2D";
        /**TextureCube资源。*/
        static TEXTURECUBE: string="TEXTURECUBE";
        /**AnimationClip资源。*/
        static ANIMATIONCLIP: string="ANIMATIONCLIP";
        /**Avatar资源。*/
        static AVATAR: string="AVATAR";
        /**Terrain资源。*/
        static TERRAINHEIGHTDATA: string="TERRAINHEIGHTDATA";
        /**Terrain资源。*/
        static TERRAINRES: string="TERRAIN";
    }
}