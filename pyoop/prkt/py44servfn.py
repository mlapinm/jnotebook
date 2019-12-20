# === servfn.py ====
# coding: cp1251 
from socket import *
import os
import sys
import ftplib
from time import ctime

# === form server socket ====
HOST = ''
PORT = 3000
BUFSIZE = 1024
SOCKADDR = (HOST,PORT)
uServSock = socket(AF_INET,SOCK_DGRAM)
uServSock.bind(SOCKADDR)

loc_ip = gethostbyname(gethostname())        #-- get self IP
# === handling functions ==== 
def get_file(param, addr):
    file_name = param[3:]
    ftp_host = addr[0]
    ftp = ftplib.FTP(ftp_host)
    ftp.login("user", "12345")
    try:
        ftp.retrbinary("RETR " + file_name, open(file_name, "wb").write)
        ftp.quit()
        answ = 'get_file: ' + file_name 
    except:
        answ = "ftp error:  :(,  file: " + file_namr +" not got "
    print (answ)
    uServSock.sendto( '%s' %(answ), addr)
#    uServSock.sendto( '%s' %(answ), addr)
    return 1

def put_file(param, addr):
    file_name = param[3:]
    file_name = loc_ip.replace('.','_') + '_'+file_name
    ftp_host = addr[0]
    ftp = ftplib.FTP(ftp_host)
    ftp.login("user", "12345")
    try:
        ftp.storbinary("STOR " + file_name, open(file_name, "rb"), 1024)
        ftp.quit()
        answ = 'put_file: ' + file_name 
    except:
        answ = "ftp error:  :(,  file: " + file_namr +" not put "
    print (answ)
    uServSock.sendto( '%s' %(answ), addr)
    return 1

def run_file(param, addr):
    answ = 'server run file: ', param[3:]
    uServSock.sendto( '%s' %(answ), addr)
    return 1

def stop_server(param, addr):
    answ = 'server stopped, by  :) '
    servfn.uServSock.sendto( '%s' %(answ), addr)
    servfn.uServSock.close()
    return -1

def repl_echo(param, addr):
    answ = 'echo '+ param[3:]
    s='%s' %(answ)
    uServSock.sendto( s.encode(), addr)
    return 1

def repl_text(param, addr):
    print (param[3:])
    answ = 'ok'
    s='%s' %(answ)
    uServSock.sendto( s.encode(), addr)
    #uServSock.sendto( '%s' %(answ), addr)
    return 1

