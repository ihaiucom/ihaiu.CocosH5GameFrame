package frame
import (
	"antnet"
	"encoding/json"
	"io/ioutil"
)
type DTItemNum struct {
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTRewardRandom struct {
	Weight int32 `json:"weight"`
	ItemType int32 `json:"itemType"`
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTStoryNum struct {
	Star int32 `json:"star"`
	Num int32 `json:"num"`
}
type DTVector2 struct {
	X float32 `json:"x"`
	Y float32 `json:"y"`
}
type DTActorSkill struct {
	Group_id int32 `json:"group_id"`
	Lv int32 `json:"lv"`
}
type DTActorStory struct {
	Story int32 `json:"story"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTActorFeature struct {
	Feature int32 `json:"feature"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTActorCharacter struct {
	Character int32 `json:"character"`
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
}
type DTRandomInterval struct {
	Num1 int32 `json:"num1"`
	Num2 int32 `json:"num2"`
}
type DTShootType struct {
	Shoottypeid int32 `json:"shoottypeid"`
	Rate int32 `json:"rate"`
}
type DTStoryEffect struct {
	Storyeffect int32 `json:"storyeffect"`
	Rate int32 `json:"rate"`
}
type DTBuildingReq struct {
	Type int32 `json:"type"`
	Level int32 `json:"level"`
}
type DTValue2 struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
}
type DTValue3 struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTDrop struct {
	X int32 `json:"x"`
	Y float32 `json:"y"`
}
type DTPerformActoin struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTPerformSpeak struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
	V3 int32 `json:"v3"`
}
type DTParts struct {
	V1 string `json:"v1"`
	V2 string `json:"v2"`
}
type DTProficiency struct {
	V1 int32 `json:"v1"`
	V2 int32 `json:"v2"`
}
type DTDate struct {
	Y int32 `json:"y"`
	M int32 `json:"m"`
	D int32 `json:"d"`
}
type DTTime struct {
	H int32 `json:"h"`
	Mm int32 `json:"mm"`
	S int32 `json:"s"`
}
type DTDateTime struct {
	Y int32 `json:"y"`
	M int32 `json:"m"`
	D int32 `json:"d"`
	H int32 `json:"h"`
	Mm int32 `json:"mm"`
	S int32 `json:"s"`
}
type DTFixItemNum struct {
	ItemType int32 `json:"itemType"`
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
}
type DTGiftNum struct {
	ItemId int32 `json:"itemId"`
	ItemNum int32 `json:"itemNum"`
	Property int32 `json:"property"`
}
type DTLabelProperty struct {
	StoryTag int32 `json:"storyTag"`
	Property int32 `json:"property"`
}
type DTInitialLabel struct {
	StoryTag int32 `json:"storyTag"`
	Level int32 `json:"level"`
	Property int32 `json:"property"`
}
type DTPerformanceCondition struct {
	Lv int32 `json:"lv"`
	Property int32 `json:"property"`
	Num int32 `json:"num"`
}
type DTSkillTiggerCondition struct {
	TiggerConditon int32 `json:"tiggerConditon"`
	TiggerValue int32 `json:"tiggerValue"`
}
type ConfigGlobal struct {
	EverydayUpdateTime	int32 `json:"everydayUpdateTime"`
	RoleNameAutoGen	string `json:"roleNameAutoGen"`
	RoleNameMaxLength	int32 `json:"roleNameMaxLength"`
	RoleNameMinLength	int32 `json:"roleNameMinLength"`
	SuperAccountSwitch	bool `json:"superAccountSwitch"`
	RoleNameRepated	bool `json:"roleNameRepated"`
	FriendReqMaxCnt	int32 `json:"friendReqMaxCnt"`
	FriendMaxCnt	int32 `json:"friendMaxCnt"`
	ChatGamerMaxCnt	int32 `json:"chatGamerMaxCnt"`
	ChatWorldMaxCnt	int32 `json:"chatWorldMaxCnt"`
	GamerMailMaxCnt	int32 `json:"gamerMailMaxCnt"`
	WorldMailMaxCnt	int32 `json:"worldMailMaxCnt"`
	WordCheck	bool `json:"wordCheck"`
	Notices	string `json:"notices"`
	PvpMatchTime	int32 `json:"PvpMatchTime"`
	PvpMatchTime2	int32 `json:"PvpMatchTime2"`
	ChannelMine	bool `json:"ChannelMine"`
	PvpResultMaxCnt	int32 `json:"pvpResultMaxCnt"`
	ShareTitle	string `json:"shareTitle"`
	ShareImgUrl	string `json:"shareImgUrl"`
	ShareImgId	string `json:"shareImgId"`
	Per1V10Icon	int32 `json:"per1V10Icon"`
	Per2V10Icon	int32 `json:"per2V10Icon"`
	WorldChatIcon	int32 `json:"worldChatIcon"`
	PvpIconReward	int32 `json:"pvpIconReward"`
	MaxBagSpace	int32 `json:"maxBagSpace"`
	DefAvatar	string `json:"DefAvatar"`
	PackInitCapacity	int32 `json:"PackInitCapacity"`
	Test	[]int32 `json:"test"`
	Test1	[]*DTItemNum `json:"test1"`
	Test2	*DTItemNum `json:"test2"`
}
type ConfigActivities struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	StartType	int32 `json:"startType"`
	LevelReq	int32 `json:"levelReq"`
	BlockReq	int32 `json:"blockReq"`
	Start	int32 `json:"start"`
	Duration	int32 `json:"duration"`
	Icon	int32 `json:"icon"`
	IconChosen	int32 `json:"iconChosen"`
}
type ConfigAvatar struct {
	Id	int32 `json:"id"`
	En_name	string `json:"en_name"`
	Zh_cn_name	string `json:"zh_cn_name"`
}
type ConfigBag struct {
	Id	int32 `json:"id"`
	ItemId	int32 `json:"itemId"`
	Level	int32 `json:"level"`
	SellPrice	int32 `json:"sellPrice"`
	StackNumber	int32 `json:"stackNumber"`
}
type ConfigCompound struct {
	Id	int32 `json:"id"`
	Syn_item	int32 `json:"syn_item"`
	Num_req	int32 `json:"num_req"`
	Split_list	[]*DTItemNum `json:"split_list"`
}
type ConfigCountActivities struct {
	Id	int32 `json:"id"`
	RewardId	int32 `json:"rewardId"`
	Avatar	int32 `json:"avatar"`
}
type ConfigGashapon struct {
	Id	int32 `json:"id"`
	Type	int32 `json:"type"`
	Menu	int32 `json:"menu"`
	Num	int32 `json:"num"`
	Cost	[]*DTFixItemNum `json:"cost"`
	FreeNum	int32 `json:"freeNum"`
	FreeTime	int32 `json:"freeTime"`
	StartTime	*DTDateTime `json:"startTime"`
	EndTime	*DTDateTime `json:"endTime"`
	RewardId	int32 `json:"rewardId"`
	Allowance	[]*DTFixItemNum `json:"allowance"`
	AllowanceNum	int32 `json:"allowanceNum"`
}
type ConfigHeadPortrait struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Sex	int32 `json:"sex"`
	Unlock	*DTItemNum `json:"unlock"`
	Icon	int32 `json:"icon"`
}
type ConfigHero struct {
	Id	int32 `json:"id"`
	HeroId	int32 `json:"heroId"`
	Level	int32 `json:"level"`
	Blood	int32 `json:"blood"`
	ReloadTime	int32 `json:"reloadTime"`
	CritPower	int32 `json:"critPower"`
	CritRate	int32 `json:"critRate"`
	Hurt	int32 `json:"hurt"`
	WeaponCap	int32 `json:"weaponCap"`
	ReductionRate	int32 `json:"reductionRate"`
	UpgradeCost	int32 `json:"upgradeCost"`
	Res	string `json:"res"`
	Hw	int32 `json:"hw"`
	Hh	int32 `json:"hh"`
}
type ConfigItem struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Icon	int32 `json:"icon"`
	Star	int32 `json:"star"`
	Type	int32 `json:"type"`
	Max_num	int32 `json:"max_num"`
	Get_way	[]int32 `json:"get_way"`
	Rewardid	int32 `json:"rewardid"`
	Can_sell	bool `json:"can_sell"`
	Price	int32 `json:"price"`
	Syn_id	int32 `json:"syn_id"`
	Actor_id	int32 `json:"actor_id"`
	Actor_num	int32 `json:"actor_num"`
	User_item_info	int32 `json:"User_item_info"`
}
type ConfigItemType struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Field	string `json:"field"`
}
type ConfigLoader struct {
	Id	int32 `json:"id"`
}
type ConfigMail struct {
	Id	int32 `json:"id"`
	Life_time	int32 `json:"life_time"`
	Zh_cn_title	string `json:"zh_cn_title"`
	En_title	string `json:"en_title"`
	Item	[]*DTItemNum `json:"item"`
	Zh_cn_content	string `json:"zh_cn_content"`
	En_content	string `json:"en_content"`
}
type ConfigMap struct {
	Id	int32 `json:"id"`
	G	int32 `json:"g"`
	Vx	int32 `json:"vx"`
	Vy	int32 `json:"vy"`
	Maxt	int32 `json:"maxt"`
	Mint	int32 `json:"mint"`
	MaxPillar	int32 `json:"maxPillar"`
}
type ConfigMenu struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
}
type ConfigMsg struct {
	Id	int32 `json:"id"`
	Key	string `json:"key"`
}
type ConfigPlayerLevel struct {
	Id	int32 `json:"id"`
	Exp	int32 `json:"exp"`
	Reward	[]*DTFixItemNum `json:"reward"`
	Story	*DTItemNum `json:"story"`
	Order_qua	[]int32 `json:"order_qua"`
	Order_num	int32 `json:"order_num"`
	Train_max	int32 `json:"train_max"`
	Train_count	int32 `json:"train_count"`
	Actor_max	int32 `json:"actor_max"`
	Actor_count	int32 `json:"actor_count"`
	Hide_max	int32 `json:"hide_max"`
	Hide_count	int32 `json:"hide_count"`
	Day_max	int32 `json:"day_max"`
	Day	int32 `json:"day"`
	Meeting_cd	int32 `json:"meeting_cd"`
	Cost	*DTItemNum `json:"cost"`
	Mc_special_package1	*DTItemNum `json:"mc_special_package1"`
	Mc_special_package2	*DTItemNum `json:"mc_special_package2"`
	Shop_1003	int32 `json:"shop_1003"`
	Shop_1004	int32 `json:"shop_1004"`
	Turntable_min	int32 `json:"Turntable_min"`
	Turntable_max	int32 `json:"Turntable_max"`
}
type ConfigProperty struct {
	Id	int32 `json:"id"`
	Field	string `json:"field"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Zh_cn_addname	string `json:"zh_cn_addname"`
	Addnamenum	int32 `json:"addnamenum"`
	Details	bool `json:"details"`
	Icon	int32 `json:"icon"`
	GroupType	int32 `json:"groupType"`
	Visible	bool `json:"visible"`
}
type ConfigPvp struct {
	Id	int32 `json:"id"`
	Pos	int32 `json:"pos"`
	Length	int32 `json:"length"`
	R	int32 `json:"r"`
	G	int32 `json:"g"`
	B	int32 `json:"b"`
	X	int32 `json:"x"`
	Y	int32 `json:"y"`
	Delta	int32 `json:"delta"`
	BodyScale	int32 `json:"bodyScale"`
}
type ConfigReward struct {
	Id	int32 `json:"id"`
	FixedItems	[]*DTFixItemNum `json:"fixedItems"`
	MultipleReward	int32 `json:"multipleReward"`
	RandomItems	[]*DTRewardRandom `json:"randomItems"`
	RandomCount	int32 `json:"randomCount"`
}
type ConfigShop struct {
	Id	int32 `json:"id"`
	Space	int32 `json:"space"`
	Count	int32 `json:"count"`
	OldPrice	int32 `json:"oldPrice"`
	NowPrice	int32 `json:"nowPrice"`
	Currency	int32 `json:"currency"`
}
type ConfigUnlock struct {
	Id	int32 `json:"id"`
	Zh_cn_name	string `json:"zh_cn_name"`
	Open_data	int32 `json:"open_data"`
}


func (r *ConfigDoc) GetConfigActivities(id int32) *ConfigActivities {
	if value, founded := r.Activities[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Activities error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigAvatar(id int32) *ConfigAvatar {
	if value, founded := r.Avatar[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Avatar error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigBag(id int32) *ConfigBag {
	if value, founded := r.Bag[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Bag error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigCompound(id int32) *ConfigCompound {
	if value, founded := r.Compound[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Compound error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigCountActivities(id int32) *ConfigCountActivities {
	if value, founded := r.CountActivities[id]; founded{
		return value
	}
	antnet.LogError("[config]get config CountActivities error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigGashapon(id int32) *ConfigGashapon {
	if value, founded := r.Gashapon[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Gashapon error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHeadPortrait(id int32) *ConfigHeadPortrait {
	if value, founded := r.HeadPortrait[id]; founded{
		return value
	}
	antnet.LogError("[config]get config HeadPortrait error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigHero(id int32) *ConfigHero {
	if value, founded := r.Hero[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Hero error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigItem(id int32) *ConfigItem {
	if value, founded := r.Item[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Item error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigItemType(id int32) *ConfigItemType {
	if value, founded := r.ItemType[id]; founded{
		return value
	}
	antnet.LogError("[config]get config ItemType error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigLoader(id int32) *ConfigLoader {
	if value, founded := r.Loader[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Loader error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMail(id int32) *ConfigMail {
	if value, founded := r.Mail[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Mail error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMap(id int32) *ConfigMap {
	if value, founded := r.Map[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Map error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMenu(id int32) *ConfigMenu {
	if value, founded := r.Menu[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Menu error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigMsg(id int32) *ConfigMsg {
	if value, founded := r.Msg[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Msg error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPlayerLevel(id int32) *ConfigPlayerLevel {
	if value, founded := r.PlayerLevel[id]; founded{
		return value
	}
	antnet.LogError("[config]get config PlayerLevel error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigProperty(id int32) *ConfigProperty {
	if value, founded := r.Property[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Property error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigPvp(id int32) *ConfigPvp {
	if value, founded := r.Pvp[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Pvp error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigReward(id int32) *ConfigReward {
	if value, founded := r.Reward[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Reward error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigShop(id int32) *ConfigShop {
	if value, founded := r.Shop[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Shop error %v",id)
	return nil
}
func (r *ConfigDoc) GetConfigUnlock(id int32) *ConfigUnlock {
	if value, founded := r.Unlock[id]; founded{
		return value
	}
	antnet.LogError("[config]get config Unlock error %v",id)
	return nil
}

func ReadConfigDoc() *ConfigDoc {
	config := &ConfigDoc{}
	data, err := ioutil.ReadFile("conf/doc/serverConfig.json")
	if err != nil {
		antnet.LogError("read conf failed:%v",err)
		return nil
	}
	err = json.Unmarshal(data, config)
	if err != nil {
		antnet.LogError("read conf failed:%v",err)
		return nil
	}
	config.ErrStr = errMap
	antnet.LogInfo("read conf success")
	return config
}

type ConfigDoc struct {
	Global *ConfigGlobal `json:"Global"`
	ErrStr map[uint16]string `json:"ErrStr"`
	Activities map[int32]*ConfigActivities `json:"Activities"`
	Avatar map[int32]*ConfigAvatar `json:"Avatar"`
	Bag map[int32]*ConfigBag `json:"Bag"`
	Compound map[int32]*ConfigCompound `json:"Compound"`
	CountActivities map[int32]*ConfigCountActivities `json:"CountActivities"`
	Gashapon map[int32]*ConfigGashapon `json:"Gashapon"`
	HeadPortrait map[int32]*ConfigHeadPortrait `json:"HeadPortrait"`
	Hero map[int32]*ConfigHero `json:"Hero"`
	Item map[int32]*ConfigItem `json:"Item"`
	ItemType map[int32]*ConfigItemType `json:"ItemType"`
	Loader map[int32]*ConfigLoader `json:"Loader"`
	Mail map[int32]*ConfigMail `json:"Mail"`
	Map map[int32]*ConfigMap `json:"Map"`
	Menu map[int32]*ConfigMenu `json:"Menu"`
	Msg map[int32]*ConfigMsg `json:"Msg"`
	PlayerLevel map[int32]*ConfigPlayerLevel `json:"PlayerLevel"`
	Property map[int32]*ConfigProperty `json:"Property"`
	Pvp map[int32]*ConfigPvp `json:"Pvp"`
	Reward map[int32]*ConfigReward `json:"Reward"`
	Shop map[int32]*ConfigShop `json:"Shop"`
	Unlock map[int32]*ConfigUnlock `json:"Unlock"`
}


