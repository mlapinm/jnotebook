#-#- coding: utf-8 -#-
#== константы ошибок и предупреждений ==

REC_DELETED     = 1
OUT_OF_RANGE    = 2
DBN_IS_EMPTY    = 4
REC_EMPTY       = 8

LOW_NUMBER      = 16
NEXT_NUVBER     = 32

FATAL_ERROR     = 256
BAD_PTR         = 256
BAD_NUMBER      = 512
NOT_ARRAY       = 1024
DBS_NOT_EXIST   = 1024 
DBN_NOT_EXIST   = 2048
BUFFER_SMALL    = 4096
BAD_TABLE_NAME  = 8192
BAD_TABLE_HANDLE  = 16384
DBR_NOT_EXIST   = 32768
NOT_A_BRACKET   = 65536
BAD_CONDITION   = 65536*2
BAD_DELIMETER   = 65536*4
NUVBER_TOO_BIG  = 65536*8

# == типы полей фрагмента ==
FSUBST   = 2
FARRAY   = 3
FSTRUCT  = 4
FFUNCT   = 5
FOBJECT  = 6

dbsn_error =0

import os
import struct 
import sys

# ============================================
def getDBSNerror():
    # == получить код последней ошибки
    return dbsn_error

def getDBSNmess(res= -65536*16):
    # == вернуть сообщение, поясняющее код ошибки
    if res == -65536*16:
        res= dbsn_error
    if res >= 0:
        return "no errors"
    res = -res
    error_dict = {REC_DELETED:'record was deleted',
        OUT_OF_RANGE:'number is too big or negative',
        DBN_IS_EMPTY:'file *.DBN is empty',
        REC_EMPTY:'record is empty',
        LOW_NUMBER:'number is too small',
        NEXT_NUVBER:'number after the end of range',
        FATAL_ERROR:'fatal error',
        BAD_PTR:'bad pointer',
        BAD_NUMBER:'bad number',
        NOT_ARRAY:'object is not array',
        DBS_NOT_EXIST:'file *.dbs not exist',
        DBN_NOT_EXIST:'file *.dbn not exist',
        BUFFER_SMALL:'buffer too small to data',
        BAD_TABLE_NAME:'bad table name',
        BAD_TABLE_HANDLE:'bad table handle',
        DBR_NOT_EXIST:'file *.dbr does not exist',
        NOT_A_BRACKET:'character is not a bracket',
        BAD_CONDITION:'mistake in condition',
        BAD_DELIMETER:'bad delimiter',
        NUVBER_TOO_BIG:'number is too big',}
    if res in error_dict.keys():
        return error_dict[res]
    return 'unknown error'
def cod(st, dec_enc):
    # == перекодировать строку
    # -- dec_enc задает режим перекодировки
    # -- dec = "u","w","c","p" - декодировать из UTF8,Win1251,cp866
    # -- enc = "u","w","c","p" - кодировать в UTF8,Win1251,cp866
    # -- пример: st = cod(st,"up")
    dec = dec_enc[0]; enc = dec_enc[1]
    
    if dec == "u":
        st = st.decode("utf-8")
    if dec == "w":
        st = st.decode("cp1251")
    if dec == "c":
        st = st.decode("cp866")

    if enc == "u":
        st = st.encode("utf-8")
    if enc == "w":
        st = st.encode("cp1251")
    if enc == "c":
        st = st.encode("cp866")
    return st
from chardet.universaldetector import UniversalDetector
def getFileCod(file):
    # == определить кодировку файла
    # -- возвращает название кодировки или пустую строку
    # -- пример:
    #    file_cod = getFileCod(file_name)
    #    fh = open(file_name)
    #    for line in fh:
    #    line = fh.readline().decode(file_cod)
    #    print(line)
    # --  используется для последующей работы со строками файла
    
    detector = UniversalDetector()
    with open(file, 'rb') as fh:
        for line in fh:
            detector.feed(line)
            if detector.done:
                break #https://python-scripts.com/question/7401
        detector.close()
    return detector.result['encoding']















#133
def getInputCod():
    # == определить кодировку среды ввода
    # -- возвращает название кодировки (cp1251 или cp866)
    # -- пример:
    #    input_cod = getInputCod()
    #    st = input(':').decode(input_cod)
    #    print(st)
    #    st - теперь в unicode независимо от среды ввода
    # -- используется для последующей работы записи в файл
    if "idlelib" in sys.modules:
        input_cod='cp1251'
    if "Tkinter" in sys.modules:
        input_cod= 'cp1251'
    elif sys.stdin.isatty():
        input_cod='cp866'
    else:
        input_cod='cp1251'
    return input_cod


#154
def fwriteInt(fhn, val):
    # -- записать целое число в бинарный файл
    bin_data = struct.pack('i', val)
#     print(bin_data) #fhn.write( str(bin_data))
    fhn.write(bin_data) # write an int
    
def freadInt(fhn):
    # -- считать целое число из бинарного файла
    bin_data =fhn.read(4)
    val = struct.unpack("i", bin_data)
    return val[0]

def setOffLen(fhn, rec_offset, rc_length, rc_num):
    # = записать в бинарный файл смещение и длину фрагмента
    # -- пример: res=setOffLen(fhn, rec_offset, rec_offset, rec_length,)
    num_off = (rec_num)*8; fhn.seek(num_off,0)
    bin_data=struct.pack('i', rec_offset)
    fhn.write(str(bin_data))
    bin_data=struct.pack('i',rec_length)
    fhn.write(str(bin_data))
    return rec_num
#175    
def getOffLen(fhn,rec_num):
    # == прочитать из бинарного файла смещение и длину фрагмента
    # -- пример: offset, length =getOffLin(fn, rec_num)
    num_off =(rec_num-1)*8; fhn.seek(num_off,0)
    bin_data =fhn.read(4)
    val = struct.unpack("i",bin_data); loc_offset-val[0]
    bin_data =fhn.read(4)
    val = struct.unpack("i",bin_data); loc_offset-val[0]
    return lock_offset, loc_length

def absNum (num,count):
    # == получить положительный номер в пределахх 1 - count ==
    # -- номер или 0
    # -- пример: subs_num=absNum(subs_num, sunst_count)
    if nm< 0: num += count +1;
    if num <1 or num > count: return 0
    return num

def getPos(st,lst):
    # == вернуть поизицию st  в списке lst ==
    # -- возвращает номер (от 1) или 0 если не нашла
    if type(lst) !=lest: return 0
    for j, item in enumerate(lst):
        if item == st: return j+1
        return 0;
    
    # ===========================================
#203    
def createDBSN(table_name):
    # == создать таблицу по ее имени ==
    # -- возвращает 0 = число записей или код ошибки
    # -- пример: res = createDBSN('test')
    fil_name = table_name.strip()
    if len(fil_name)<1: return -DBS_NOT_EXIST
    fhs = open(fil_name+'.dbs', 'wb')
    if not fhs: return  -DBS_NOT_EXIST
    fhs.write("")
    fhs.close()
    fhn=open(file_name+'.dbn', 'wb')
    if not fhn: return -DBN_NOT_EXIST
    fhn.write("")
    fhn.close()
    return 0
    # -------------------------------------------
#220
def existDBSN(table_name):
    # == проверить существует ли таблица по ее имени ==
    # -- возвращает 1 если существует или 0
    # -- пример: res = existDBSN('test')
    fil_name =table_name.strip()
    if len(fil_name) <1: return 0
    if not os.path.exists(fil_name +".dbs"): return 0
    if not os.path.exists(fil_name +".dbn"): return 0
    return 1
    # -----------------------------------------------
#231
def openDBSN(table_name):
    # == открыть таблицу по ее имени ==
    # -- возвращает обработчик таблицы
    # -- при ошибке возвращает 0 и устанавливает орицательный ко
    # -- пример: dbh=openDBSN('test')
    global dbsn_error
    fil_name =table_name.strip()
    if not existDBSN(fil_name):
        dbsn_error= DBS_NOT_EXIST
        return 0
    dbh = [0,0,0,0]
    fil_dbn = fil_name + ".dbn"
    fhn= open(fil_dbn, "rb+")
    fhn.seek(0,2)
    rec_count=fhn.tell()/8
    fhn.seek(0,0)
    dbh[0]=fhn;  #-- обработчик числового файла
    fil_dbs =fil_name +".dbs";
    fhs =open(fil_dbs,"rb+")
    dbh[1]=fhs #-- обработчик текстового файла
    dbh[2]=1 #-- номер текущей записи = rec_nom
    dbh[3]=0 #-- код ошибки = err_res
    dbsn_error =0
    return dbh
# ----------------------------

def closeDBSN(dbh):
    pass
    
    
def formDBSN(file_name):
# == создать таблицу из текстового файла ==    
# -- возвращает число записей или код ошибки
# -- пример: res = formDBSN('abc.html')
# -- исходный файл переименовывает в #.dbs
# -- и формирует *.dbn

# -- сформировать файлы таблицы
    table_name = file_name.split('.')[0]
    os.rename(file_name, table_name + '.dbs')
    fil_dbs = table_name + '.dbs'
    fhs = open(fil_dbs, "rb")
    fil_dbn = table_name + ".dbn"
    fhn = open(fil_dbn, "wb")

    #== сформировать файл dbn
    rec_num = 0
    fragm_offset = 0
    while True:
        line= fhs.readline()
        if not line :     #
            break
        rec_num += 1
        offset = fhs.tell()
        fragm_len = offset - fragm_offset
        fwriteInt( fhn, fragm_offset)
        fwriteInt( fhn, fragm_len)
        fragm_offset = offset
    fhs.close()
    fhn.close()
    return rec_num
        
    
# formDBSN('habr.dbs')  #4042
# dbh = openDBSN('habr')
# countFragm(dbh) #no working
# getFragm(dbh,1)
# print(dbh)
