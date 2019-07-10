import IntMath from "./IntMath";
import IVector2 from './IVector2';
export class IPhysicsConfig{
    public static gridWidth = 100 * IntMath.BaseCalFactor;
    public static gridHeight = 100 * IntMath.BaseCalFactor;
 
    public static GenKey(i, j) {
        return (i <<16) + j;
    }
 

    public static SkipId(a:IPNode, b:IPNode) {
        return a.id == b.id;
    }

    public static SkipGroup(a:IPNode, b:IPNode) {
               
        //return Model.matchInfo.pvpType == PVPType.M1V10 ? a.group == b.group : Math.floor(a.group / 2) == Math.floor(b.group / 2);    
       
        return a.group == b.group;
    }

    public static CollideTest(a:IPNode, b:IPNode):boolean{         
        if(a.group < 100 && b.group < 100) {
            let w:number = a.owner.width + b.owner.width;
            if(a.vec2.Sub(b.vec2).sqrMagnitude < w * w){
                return true;
            }
        } else if(a.vec2.Sub(b.vec2).sqrMagnitude < 500000000000){
            return true;
        }
        return false;
    }
 
    public static frame:number = 0;
}

export class IPNode {
    public id:number = 0;
    public group:number=0;
    public owner:any;
    private _keys=[];
    private _halfW:number;
    private _halfH:number;
    private _vec2:IVector2 = IVector2.zero;

    public static _id:number= 0;
    //private static _nodeMap:{}= {};
    /*public static get count():number{
        return this._id;
    }*/
    private constructor(){   
        this.id = IPNode._id++;   
        //IPNode._nodeMap[this.id] = this;
    }

    private Init(x: number, y: number, w:number, h:number, group:number, owner:any){
        this.x = x * IntMath.BaseCalFactor;
        this.y = y * IntMath.BaseCalFactor;
        this.owner = owner;
        this.group = group;
        this._keys = [];
        this._halfH = h * IntMath.HalfCalFactor;
        this._halfW = w * IntMath.HalfCalFactor;
    }

    public static New(x: number, y: number, w:number, h:number, group:number, owner:any):IPNode {
        let node = new IPNode();
        node.Init(x, y, w, h, group, owner);
        return node;
    }

    public get x(){
        return this._vec2.x;
    }
    public get y(){
        return this._vec2.y;
    }
    public set x(v:number){
        this._vec2.x = v;
    }
    public set y(v:number){
        this._vec2.y = v;
    }

 
    public get vec2():IVector2{
        return this._vec2;
    }

    public get w(){
        return this._halfW * 2;
    }
    public get h(){
        return this._halfH * 2;
    }

    
    public get oldKeys(){
        return this._keys;
    }
 
    public Reserve(){
        //AntPoolObject.Add("IPNode", this);    
    }

    public get newKeys(){
        this._keys = [];   
        let minx = IntMath.DivideFloor(this.x - this._halfW, IPhysicsConfig.gridWidth);
        let maxx = IntMath.DivideFloor(this.x + this._halfW, IPhysicsConfig.gridWidth);
        let miny = IntMath.DivideFloor(this.y - this._halfH, IPhysicsConfig.gridHeight);
        let maxy = IntMath.DivideFloor(this.y + this._halfH, IPhysicsConfig.gridHeight);

        for(let i = minx; i <= maxx; i++) {
            for(let j = miny; j <= maxy; j++) {
                this._keys.push(IPhysicsConfig.GenKey(i, j));
            }
        }
        return this._keys;
    }

    /*public static GetNode(id:number | string):IPNode {
        return IPNode._nodeMap[id];
    }

    public static Clear(){
        for(var k in IPNode._nodeMap) {
            IPNode._nodeMap[k].Reserve();
        }
    }

    public static GetAll(){
        return IPNode._nodeMap;
    }*/
}

export enum IRayCastType {
    All = 1,
    ClosestOne = 2,
    ClosestAll = 3,
}

export default class IPhysics {
    private _word:{}={};
    public static default:IPhysics=new IPhysics();
    public Insert(node:IPNode){
        node.oldKeys.forEach(v=>{
            if(this._word[v]) {
                delete this._word[v][node.id];
            }
        })
        node.newKeys.forEach(v=>{
            if(!this._word[v]) {
                this._word[v] = {};
            }
            this._word[v][node.id] = node;
        })
    }

    public UpdateNode(node:IPNode){
        this.Insert(node);
    }

    public DelNode(node:IPNode){
        node.oldKeys.forEach(v=>{
            if(this._word[v]) {
                delete this._word[v][node.id];
            }
        });
        node.Reserve();
    }

    public Clear(){
        //IPNode.Clear();
        //this._word = {};
        IPNode._id = 0;
        IPhysics.default = new IPhysics();
    }

    public GetCollisions(self:IPNode, skipFunc:Function=IPhysicsConfig.SkipId){
        let re = []
        let nodes = {};
        self.oldKeys.forEach(v=>{
            let key = IPhysicsConfig.GenKey(v >> 16, v & 0x0000FFFF);
            if(this._word[key]) {
                for(let k in this._word[key]) {
                    let node = this._word[key][k];
                    if(skipFunc(self, node)) {
                        continue;
                    }
                    nodes[node.id] = node;
                }
            }        
        })
        for(let id in nodes) {
            let node = nodes[id];
            if(!IPhysicsConfig.CollideTest(self, node)) {
                continue;
            }
            re.push(node);
        }
 
        return re;
    }

    public GetCollisions2(self:IPNode, skipFunc:Function=IPhysicsConfig.SkipId){
        let re = []
        let nodes = {};
        let minx = IntMath.DivideFloor(self.x - 1000000, IPhysicsConfig.gridWidth);
        let maxx = IntMath.DivideFloor(self.x + 1000000, IPhysicsConfig.gridWidth);
        let miny = IntMath.DivideFloor(self.y - 1000000, IPhysicsConfig.gridHeight);
        let maxy = IntMath.DivideFloor(self.y + 1000000, IPhysicsConfig.gridHeight);
        let find = {};
        for(let i = minx; i <= maxx; i++) {
            for(let j = miny; j <= maxy; j++) {
                let key = IPhysicsConfig.GenKey(i, j);
                if(this._word[key]) {
                    for(let k in this._word[key]) {
                        let node = this._word[key][k];
                        if(node.group == 101 && !find[node.id]) {
                            find[node.id] = true;
                            re.push(node);
                        }
                    }
                }     
            }
        } 
        self.oldKeys.forEach(v=>{
            let key = IPhysicsConfig.GenKey(v >> 16, v & 0x0000FFFF);
            if(this._word[key]) {
                for(let k in this._word[key]) {
                    let node = this._word[key][k];
                    if(skipFunc(self, node) || node.group == 101) {
                        continue;
                    }
                    nodes[node.id] = node;
                }
            }        
        })
        for(let id in nodes) {
            let node = nodes[id];
            if(!IPhysicsConfig.CollideTest(self, node)) {
                continue;
            }
            re.push(node);
        }
 
        return re;
    }


    public RayCast(pos:IVector2, odir:IVector2, dis:number, type:IRayCastType, skip:IPNode, skipFunc:Function=IPhysicsConfig.SkipId) {
        let org = pos.Dup();
        let delta = odir.Dup().NormalizeSelf().MulIntSelf(IntMath.Divide(IPhysicsConfig.gridWidth, IntMath.BaseCalFactor));
        let re = [];
        let find = {};
        let n = IntMath.DivideCeil(dis * IntMath.BaseCalFactor, IPhysicsConfig.gridWidth);
        for(let i = 0; i <= n; i++){
            if(i > 0) {
                org.AddSelf(delta);
            } 
            let x = IntMath.DivideFloor(org.x, IPhysicsConfig.gridWidth);
            let y = IntMath.DivideFloor(org.y, IPhysicsConfig.gridHeight);
            let key = IPhysicsConfig.GenKey(x, y);
            if(this._word[key]) {
                for(let k in this._word[key]) {
                    let node = this._word[key][k]
                    if(find[node.id]) {
                        continue;
                    }
                    if(skip && skipFunc(node, skip)) {
                        continue;
                    }
                    re.push(node);
                    if(type == IRayCastType.ClosestOne){
                        return re;
                    }
                    find[node.id] = true;
                } 

                if(type == IRayCastType.ClosestAll && re.length > 0) {                       
                    return re;
                }
            }
        }
        return re;
    }
 
  
}
