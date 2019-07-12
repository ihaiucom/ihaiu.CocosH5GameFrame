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


#解析字段1 服务器 2 客户端 3客户端和服务器公用
def canParseData(isserver,outtype):
	outtype = int(outtype)
	if (isserver == True and (outtype== 1 or outtype == 3)):
		return True
	elif (isserver == False and (outtype== 2 or outtype == 3)):
		return True
	return False

#默认值0都不写入json文件中	
def IsDefaultValue(data):
	if data =="0" or data == "" or data == "0.0":
		return True
	return False

def getFixTypeValue(jsontype,jsonvalue):
	if isinstance(jsonvalue,float):
		if jsonvalue % 1 == 0.0:
			jsonvalue = int(jsonvalue)
	if IsStringType(jsontype):
		jsonvalue ="\""+ str(jsonvalue)+"\""
	elif IsBoolType(jsontype):
		if str(jsonvalue) == "1" or str(jsonvalue).lower()== "true": 
			jsonvalue = str("true")
		else:
			jsonvalue = str("false")
	elif IsIntType(jsontype):
		jsonvalue= str(int(jsonvalue))
	else:
		jsonvalue= str(jsonvalue)
	return jsonvalue

def getFixTypeJsonListStr(jsonname,jsontype,jsonvalue):
	if isinstance(jsonvalue,float):
		if jsonvalue % 1 == 0.0:
			jsonvalue = int(jsonvalue)
	data = str(jsonvalue)
	if IsDefaultValue(data):
		return ""
	jsonStr = "\""+jsonname+"\":["
	valueList = data.split(';')
	for index, value in enumerate(valueList):
		if IsNumberType(jsontype) and value.find("&")>=0:
			print(" type error: type={0}[],value={1}".format(jsontype,jsonvalue))
			os.system("pause")
		if index+1 == len(valueList):
			jsonStr += getFixTypeValue(jsontype,value)
		else:
			jsonStr += getFixTypeValue(jsontype,value)+","
	jsonStr += "]"
	return jsonStr

def getSelfDefTypeJsonStr(structName,Fields,Types,jsonname,data):
	if isinstance(data,float):
		if data % 1 == 0.0:
			data = int(data)
	data = str(data)
	if IsDefaultValue(data):
		return ""
	valueList = data.split('&')
	if len(valueList) != len(Fields):
		print("parse {0} failure,field length != {1},data:{2}".format(structName,len(Fields),data))
		os.system("pause")

	jsonStr = "\""+jsonname+"\":{"
	for index, value in enumerate(valueList):
		fieldValue = getFixTypeValue(Types[index],value)
		if index+1 == len(valueList):
			jsonStr += "\""+Fields[index]+"\":" + fieldValue
		else:
			jsonStr += "\""+Fields[index]+"\":" + fieldValue+","
	jsonStr += "}"
	return jsonStr

def getSelfDefTypeJsonListStr(structName,Fields,Types,jsonname,data):
	if isinstance(data,float):
		if data % 1 == 0.0:
			data = int(data)
	data = str(data)
	if IsDefaultValue(data):
		return ""
	jsonStr = "\""+jsonname+"\":["
	structList = data.split(';')
	for i, struct in enumerate(structList):
		valueList = struct.split('&')
		if len(valueList) != len(Fields):
			print("parse {0} list failure,field length != {1},data:{2}".format(structName,len(Fields),data))
			os.system("pause")
		jsonStr += "{"
		for index, value in enumerate(valueList):
			fieldValue = getFixTypeValue(Types[index],value)
			if index+1 == len(valueList):
				jsonStr += "\""+Fields[index]+"\":" + fieldValue
			else:
				jsonStr += "\""+Fields[index]+"\":" + fieldValue+","
		if i+1 == len(structList):
			jsonStr += "}"
		else:
			jsonStr += "},"
	jsonStr += "]"
	return jsonStr

#读取ExportSetting自定义数据类型
#ret selfDefInfo{结构体名：字段名列表，字段类型列表}
def genSelfDefSetting(fname):
	selfDefInfo = {}
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
				return selfDefInfo
			newFields = []
			newTypes = []
			fieldStr = ""
			for index, field in enumerate(fields):
				fieldType = fieldTypes[index]
				if fieldType in type_map:
					fieldType = type_map[fieldType]
				field = field[0].upper()+field[1:]
				newFields.append(field)
				newTypes.append(fieldType)
			selfDefInfo[structName] = [newFields,newTypes]
		return selfDefInfo

#读取globalSet表格
def genGlobalSetConfig(filename,selfDefInfo):
	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0) 
	nrows = sheet.nrows
	ncols = sheet.ncols
	jsonLine = ""
	for rownum in range(0, nrows):
		jsonname = sheet.cell_value(rownum,1)
		jsontype = sheet.cell_value(rownum,2)
		jsonvalue = sheet.cell_value(rownum,3)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		if jsontype in type_map:
				jsontype = type_map[jsontype]
		if jsontype.endswith("[]"):
			tmpType = jsontype[:-2]
			if tmpType in type_map:
					tmpType = type_map[tmpType]
			if tmpType in selfDefInfo:
				tmpStr = getSelfDefTypeJsonListStr(tmpType,selfDefInfo[tmpType][0],selfDefInfo[tmpType][1],jsonname,jsonvalue)
				if tmpStr != "":
					if(rownum != 0):
						jsonLine = jsonLine + ","
					jsonLine += tmpStr
			elif tmpType in baseTypeList:
				tmpStr = getFixTypeJsonListStr(jsonname,tmpType,jsonvalue)
				if tmpStr != "":
					if(rownum != 0):
						jsonLine = jsonLine + ","
					jsonLine += tmpStr
			else:
				print("type error:global can not find type:{0}".format(jsontype))
				os.system("pause")
		elif jsontype in selfDefInfo:
			tmpStr = getSelfDefTypeJsonStr(jsontype,selfDefInfo[jsontype][0],selfDefInfo[jsontype][1],jsonname,jsonvalue)
			if tmpStr != "":
				if(rownum != 0):
					jsonLine = jsonLine + ","
				jsonLine += tmpStr
		elif jsontype in baseTypeList:
			if(rownum != 0):
				jsonLine = jsonLine + ","
			value = getFixTypeValue(jsontype,jsonvalue)
			jsonLine = jsonLine + "\"" + jsonname +"\":"+value 
		else:
			print("type error:can not find type:{0}".format(jsontype))
			os.system("pause")
	jsonLine = "\t\"Global\":{"+ jsonLine+"}"
	return jsonLine



def process_excel(indir):
	selfDefInfo = {}
	selfDefSettingFile = indir+"/ExportSetting.xlsx"
	if os.path.isfile(selfDefSettingFile) == False:
		print("there is no ExportSetting")
		os.system("pause")
	else:
		selfDefInfo = genSelfDefSetting(selfDefSettingFile)
	outdir = indir+"/ExcelJson"
	indir = indir+"/Common"
	files = os.listdir(indir)
	clientStr = "{\n"
	serverStr = "{\n"
	serverCount = 0
	clientCount = 0
	for file in files:
		if os.path.splitext(file)[1] == '.xlsx' and os.path.splitext(file)[0].startswith("~") != 1 :
			filename = os.path.join(indir,file)
			print("parse excel--------{0}".format(filename))
			if filename.find('Global.xlsx') != -1:
				globalSetStr = genGlobalSetConfig(filename,selfDefInfo)
				if globalSetStr != "":
					serverCount += 1
					clientCount += 1
					if serverCount > 1:
						serverStr += ",\n"
					serverStr += globalSetStr
					if clientCount > 1:
						clientStr += ",\n"
					clientStr += globalSetStr
				continue

			#解析单个excel文件
			str1,str2 = ParseExcelToJson(filename,os.path.splitext(file)[0],selfDefInfo)
			if str1 != "":
				serverCount += 1
				if serverCount > 1:
					serverStr += ",\n"
				serverStr += str1	
			if str2 != "" :
				clientCount += 1
				if clientCount > 1:
					clientStr += ",\n" 
				clientStr += str2
	clientStr += "\n}\n"
	serverStr += "\n}\n"
	clientConfig = os.path.join(outdir, "clientConfig.json")
	serverConfig = os.path.join(outdir, "serverConfig.json")
	clientOutfile = open(clientConfig, "w+")
	serverOutfile = open(serverConfig, "w+")
	clientOutfile.write(clientStr)
	clientOutfile.close()
	serverOutfile.write(serverStr)
	serverOutfile.close()
	print("parse excel success")
	

def ParseExcelToJson(filename,excelname,selfDefInfo):
	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0) 
	nrows = sheet.nrows
	ncols = sheet.ncols
	if(nrows < 4):
		return "",""
	clientStr = ""
	serverStr = ""
	for rownum in range(4, nrows):
		key = ""
		clientJsonLine = ""
		serverJsonLine = ""
		for colnum in range(0, ncols):
			isServerType = False
			isClientType = False
			jsonLine = ""
			parseType = sheet.cell_value(rowDef['ParseType'],colnum)
			if(canParseData(False,parseType) == True):
				isClientType = True
			if(canParseData(True,parseType) == True):
				isServerType = True
			if isClientType ==False and isServerType == False:
				continue
			jsonname = sheet.cell_value(rowDef['key'],colnum)
			jsontype = sheet.cell_value(rowDef['type'],colnum)
			jsonvalue = sheet.cell_value(rownum,colnum)
			jsontype = str(jsontype).strip()
			jsonname = str(jsonname).strip()
			if str(jsonvalue) == "":
				continue
			if jsonname[0].upper() + jsonname[1:] == 'Id':
				key = "\""+str(int(jsonvalue))+"\""

			if IsDefaultValue(str(jsonvalue)) and colnum != 0:
				continue
			if jsontype in type_map:
					jsontype = type_map[jsontype]
			if jsontype.endswith("[]"):
				tmpType = jsontype[:-2]
				if tmpType in type_map:
						tmpType = type_map[tmpType]
				if tmpType in selfDefInfo:
					tmpStr = getSelfDefTypeJsonListStr(tmpType,selfDefInfo[tmpType][0],selfDefInfo[tmpType][1],jsonname,jsonvalue)
					if tmpStr != "":
						if(colnum != 0):
							jsonLine = jsonLine + ","
						jsonLine += tmpStr
				elif tmpType in baseTypeList:
					tmpStr = getFixTypeJsonListStr(jsonname,tmpType,jsonvalue)
					if tmpStr != "":
						if(colnum != 0):
							jsonLine = jsonLine + ","
						jsonLine += tmpStr
				else:
					print("type error:can not find type:{0}".format(jsontype))
					os.system("pause")
			elif jsontype in selfDefInfo:
				tmpStr = getSelfDefTypeJsonStr(jsontype,selfDefInfo[jsontype][0],selfDefInfo[jsontype][1],jsonname,jsonvalue)
				if tmpStr != "":
					if(colnum != 0):
						jsonLine = jsonLine + ","
					jsonLine += tmpStr
			elif jsontype in baseTypeList:
				if(colnum != 0):
					jsonLine = jsonLine + ","
				value = getFixTypeValue(jsontype,jsonvalue)
				jsonLine = jsonLine + "\"" + jsonname +"\":"+value 
			else:
				print("type error:can not find type:{0}".format(jsontype))
				os.system("pause")
			if jsonLine != "":
				if isClientType :
					clientJsonLine += jsonLine
				if isServerType :
					serverJsonLine += jsonLine
		if(rownum != 4):
			clientJsonLine = ",\n\t\t"+key+":{" + clientJsonLine + "}"
			serverJsonLine = ",\n\t\t"+key+":{" + serverJsonLine + "}"
		else:
			clientJsonLine = "\t\t"+key+":{" + clientJsonLine + "}"
			serverJsonLine = "\t\t"+key+":{" + serverJsonLine + "}"
		if clientJsonLine.endswith("{}") == 0:
			clientStr += clientJsonLine
		if serverJsonLine.endswith("{}") == 0:
			serverStr += serverJsonLine
	if clientStr != "":
		clientStr = "\t\""+excelname+"\":{\n"+clientStr +"\n\t}"
	if serverStr != "":
		serverStr = "\t\""+excelname+"\":{\n"+ serverStr+"\n\t}"
	return serverStr,clientStr

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
	process_excel(indir)

def usage():
	print "usage: \n\t--dir=Excel dir\n\t\n"
 
if __name__ == "__main__":
	main()
	sys.exit(0)

	 
