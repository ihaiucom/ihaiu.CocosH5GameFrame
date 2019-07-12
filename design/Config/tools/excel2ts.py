#!/usr/bin/python
#_*_coding:utf-8_*_
# add by wuqiusheng change excel to json 2018/12/18
#默认值0都不写入json文件中
#解析字段1 服务器 2 客户端 3客户端和服务器公用
import xlrd
import os
import sys
import re
import getopt


json_str_type = ("string" )
json_int_type = ( "int32", "int64", "uint32", "uint64")
json_num_type = ( "float64", "float32", "int32", "int64", "uint32", "uint64")
baseTypeList = ("bool","int","int32","uint32","int64","uint64","float","float32","float64","string") #语言基础类型
type_map = {"long":"int64","float":"float32","double":"float64","boolean":"bool","int":"int32"} #替换类型
rowDef = {'type':0,"commit":1,'key':2,'ParseType':3} #excel表头定义


def IsBoolType(typename):
	return typename == "bool"
def IsStringType(typename):
	return (typename in json_str_type)
def IsNumberType(typename):
	return (typename in json_num_type)
def IsIntType(typename):
	return (typename in json_int_type)
def IsBoolType(typename):
	return typename == "bool"

#解析字段1 服务器 2 客户端 3客户端和服务器公用
def canParseData(isserver,outtype):
	outtype = int(outtype)
	if (isserver == True and (outtype== 1 or outtype == 3)):
		return True
	elif (isserver == False and (outtype== 2 or outtype == 3)):
		return True
	return False


def getTsFieldType(jsontype):
	if IsStringType(jsontype):
		return "string"
	elif IsNumberType(jsontype):
		return "number"
	elif IsBoolType(jsontype):
		return "boolean"
	return str(jsontype)

def getTsFieldString(field,jsontype):
	if IsStringType(jsontype):
		return "public {0} : string = \"\";".format(field)
	elif IsNumberType(jsontype):
		return "public {0} : number = 0;".format(field)
	elif IsBoolType(jsontype):
		return "public {0} : boolean = false;".format(field)
	return "public {0} : {1} = null;".format(field,jsontype)


#读取ExportSetting自定义数据类型
#ret selfDefInfoStr 
#ret selfDefInfo{结构体名}
def genSelfDefSetting(fname):
	selfDefInfoStr = ""
	selfDefInfo = []
	workbook = xlrd.open_workbook(fname)
	for sheetname in workbook.sheet_names():
		if(sheetname !="StructSheet"):
			continue
		sheet = workbook.sheet_by_name(sheetname) 
		nrows = sheet.nrows
		ncols = sheet.ncols
		if(nrows < 4):
			continue
		for rownum in range(4, nrows):
			structName = sheet.cell_value(rownum,0)
			fields = sheet.cell_value(rownum,2).split(";")
			fieldTypes = sheet.cell_value(rownum,3).split(";")
			if len(fields) != len(fieldTypes):
				print("parse ExportSetting error struct:{0},fiels length is not equal to types length".format(structName))
				os.system("pause")
				return selfDefInfoStr,selfDefInfo
			newFields = []
			newTypes = []
			fieldStr = ""
			selfDefStructStr = '''
	export class %s {'''%(structName)
			for index, field in enumerate(fields):
				fieldType = fieldTypes[index]
				if fieldType in type_map:
					fieldType = type_map[fieldType]
				selfDefStructStr += '''
		%s'''%(getTsFieldString(field,fieldType))
			selfDefStructStr += '''
			setJson(json: object)
			{
				for(let key of json)
				{
					this[key] = json[key];
				}
			}
			\n\t\t}'''
			selfDefStructStr += "\n\t}"

			selfDefInfoStr += selfDefStructStr
			selfDefInfo.append(structName)
	return selfDefInfoStr,selfDefInfo


#读取globalSet表格
def genGlobalSetConfig(filename,selfDefInfo):
	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0) 
	nrows = sheet.nrows
	ncols = sheet.ncols
	structFieldString = ""
	for rownum in range(0, nrows):
		jsonname = sheet.cell_value(rownum,1)
		jsontype = sheet.cell_value(rownum,2)
		jsonvalue = sheet.cell_value(rownum,3)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		key = jsonname
		if jsontype in type_map:
				jsontype = type_map[jsontype]
		keyType = jsontype
		if jsontype.endswith("[]"):
			tmpType = jsontype[:-2]
			if tmpType in type_map:
					tmpType = type_map[tmpType]
			if tmpType in selfDefInfo:
				keyType = " Array < {0} > ".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = " Array < {0} > ".format(getTsFieldType(tmpType))
			else:
				print("type error:can not find type:{0}".format(jsontype))
				os.system("pause")
		elif jsontype in selfDefInfo:
			keyType = jsontype
		elif jsontype in baseTypeList:
			keyType = jsontype
		else:
			print("type error:can not find type:{0}".format(jsontype))
			os.system("pause")
			return ""
		structFieldString += '''
		%s'''%(getTsFieldString(key,keyType))
	configStructStr='''
	export class ConfigGlobal {%s
	}'''%(structFieldString)

	return configStructStr



def GenExcel2Ts(indir):
	selfDefInfoStr = ""
	selfDefInfo = []
	selfDefSettingFile = indir+"/ExportSetting.xlsx"
	if os.path.isfile(selfDefSettingFile) == False:
		print("there is no ExportSetting")
		os.system("pause")
	else:
		selfDefInfoStr,selfDefInfo = genSelfDefSetting(selfDefSettingFile)
	outdir = indir+"/Script"
	indir = indir+"/Common"
	files = os.listdir(indir)
	globalSetStr = ""
	configStructStr = ""
	configStructGetStr = ""
	configFieldStr = ""
	configFieldGetStr = ""

	globalSetFieldStr = ""
	globalSetFieldGetStr = ""
	for file in files:
		if os.path.splitext(file)[1] == '.xlsx' and os.path.splitext(file)[0].startswith("~") != 1 :
			filename = os.path.join(indir,file)
			print("parse excel to ts--------{0}".format(filename))
			if filename.find('Global.xlsx') != -1:
				globalSetFieldStr = "private m_Global : ConfigGlobal = null;"
				globalSetFieldGetStr = """
		public get Global(){
			return this.m_Global;
		}
				"""
				globalSetStr = genGlobalSetConfig(filename,selfDefInfo)
				continue
			#解析单个excel文件
			str1,str2,str3,str4 = ParseExcelToTs(filename,os.path.splitext(file)[0],selfDefInfo)
			configStructStr += str1
			configStructGetStr += str2
			configFieldStr += str3
			configFieldGetStr += str4
	with open("%s/ConfigManager.ts" %outdir,"w+") as f2:
		f2.write(
'''%s

	export class ConfigManager {
		%s
		private m_ErrStr : Map<number, string > = null;%s

		public get ErrStr(){
			return this.m_ErrStr;
		}
		%s
		public getErrStr(id: number): string{
			let obj = this.m_ErrStr[id];
			if (obj == null){
				return "";
			}
			return obj;
		}
		%s
		public loadConfig(jsonText : string) 
		{
			let json= JSON.parse(jsonText);
			this.setJson(json);
		}

		public setJson(json:object)
		{
			for(let key in json)
			{
				if(key == "Global") 
				{
					this.m_Global = json[key];
					continue
				}
				this["m_" + key] = new Map<number, ConfigCompound >();

				for(let key1 in json[key])
				{
					this["m_" + key][Number.parseInt(key1)] = json[key][key1];
				}
			}
		}
	}
'''%(selfDefInfoStr+globalSetStr+configStructStr,globalSetFieldStr,configFieldStr,globalSetFieldGetStr+configFieldGetStr,configStructGetStr)
			)
	print("parse excel to ts success")


def ParseExcelToTs(filename, excelname,selfDefInfo):
	configStructStr=""
	configStructGetStr="" 
	configFieldStr=""

	structName = excelname[0].upper() + excelname[1:]
	keys = []
	Id= "Id"
	idType = 'int32'
	structFieldString = ""
	
	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0) 
	nrows = sheet.nrows
	ncols = sheet.ncols
	if(nrows < 4):
		return "","","",""
	for colnum in range(0, ncols):
		parseType = sheet.cell_value(rowDef['ParseType'],colnum)
		if canParseData(False,parseType) == False:
			continue
		jsonname = sheet.cell_value(rowDef['key'],colnum)
		jsontype = sheet.cell_value(rowDef['type'],colnum)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		key = jsonname
		if jsontype in type_map:
				jsontype = type_map[jsontype]
		if key == 'Id':
			idType = jsontype
		keyType = jsontype
		if jsontype.endswith("[]"):
			tmpType = jsontype[:-2]
			if tmpType in type_map:
					tmpType = type_map[tmpType]
			if tmpType in selfDefInfo:
				keyType = " Array < {0} > ".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = " Array < {0} > ".format(getTsFieldType(tmpType))
			else:
				print("type error:can not find type:{0}".format(jsontype))
				os.system("pause")
		elif jsontype in selfDefInfo:
			keyType = jsontype
		elif jsontype in baseTypeList:
			keyType = jsontype
		else:
			print("type error:can not find type:{0}".format(jsontype))
			os.system("pause")
			return "","","",""
		keys.append([key,keyType])
		structFieldString += '''
		%s'''%(getTsFieldString(key,keyType))
	if len(keys) == False:
		return "","","",""

	configStructStr='''
	export class %sConfig {%s
		setJson(json: object)
		{
			for(let key of json)
			{
				this[key] = json[key];
			}
		}
	}'''%(structName,structFieldString)

	configStructGetStr='''
		public get%s(id: number): Config%s {
			let obj = this.m_%s[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	''' %(structName,structName,structName)

	configFieldStr = "\n\t\tprivate m_{0} : Map<number, {0}Config > = null;".format(structName)
	configFieldGetStr = """
		public get %s(){
			return this.m_%s;
		}
	"""%(structName,structName)
	return configStructStr, configStructGetStr,configFieldStr,configFieldGetStr

def main():
	reload(sys)
	sys.setdefaultencoding("utf-8")
	try:
		opts, args = getopt.getopt(sys.argv[1:], "h", ["help", "dir="])
	except getopt.GetoptError, err:   
		print str(err)
		sys.exit(-2)
	indir = "."
	for o, a in opts:
		if o in ['-h',"--help"]:
			usage()
			sys.exit(0)
		elif o == "--dir":
			indir = a
		else:
			assert False, "未处理操作"
	GenExcel2Ts(indir)

def usage():
	print "usage: \n\t--dir=Excel dir\n\t\n"
 
if __name__ == "__main__":
	main()
	sys.exit(0)

	 
