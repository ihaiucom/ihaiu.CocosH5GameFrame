excel表格工具说明：
目录结构：
../Config/ExportSetting.xlsx 自定义结构类型
../Config/Common excel表格目录
../Config/ExcelJson excel导出json目录
../Config/Script excel导出代码目录


excel表格：
1. 第一行数据类型，go语言数据类型 "bool","int","int32","uint32","int64","uint64","float","float32","float64","string"
2. 第二行中文描述
3. 第三行字段名小写开头 驼峰式命名  xY
4. 第四行打表类型  1：服务器使用 2:客户端使用 3：客户端服务器使用 其他：不打表作为描述列增加文档可读性
5. 打表只打第一个sheet数据

数据类型：
bool类型     excel支持类型   TRUE   FALSE 或者 1 true  为true  其他都是false
int类型默认是int32  4个字节,float类型默认为float32 4个字节
最好使用int32,int64,uint32,uint64,float32,float64,不带负数的整数最好使用uint32,uint64


错误以及检查：
表格ID重复会报错
自定义类型字段和配置数值格式不一致报错
	&字段分隔符
	；数组分隔符
所有报错不会生成对应的文件
所有报错都不可忽略
如果没有正确检查出错误，json数据不能正确加载，请使用在线格式检查工具
http://www.bejson.com/



