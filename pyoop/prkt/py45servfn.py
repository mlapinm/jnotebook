# === servfn.py ====
# coding: cp1251 
from socket import *
import os
import sys
import ftplib
import time 
import random

import fnmatch
import subprocess as sp
# === form server socket ====
HOST = ''
PORT = 3000
BUFSIZE = 1024
SOCKADDR = (HOST,PORT)
uServSock = socket(AF_INET,SOCK_DGRAM)
uServSock.bind(SOCKADDR)

loc_ip = gethostbyname(gethostname())        #-- get self IP

# === find excel location ==== 
path = "c:\\Program Files\\Microsoft Office"
matches = []
for root, dirnames, filenames in os.walk('\\Program Files\\Microsoft Office'):
    for filename in fnmatch.filter(filenames, 'excel.exe'):
        matches.append(os.path.join(root, filename))
excel = '' if len(matches) == 0 else matches[0]
'''
if len(excel)<10:
    print 'can not find excel'
else:
    print 'excel: ', excel 
'''
child = ''
excel_file = ''
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
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def put_file(param, addr):
    file_name = param[3:]
    serv_file = loc_ip.replace('.','_') + '_'+file_name
    print (file_name)
    ftp_host = addr[0]
    ftp = ftplib.FTP(ftp_host)
    ftp.login("user", "12345")
    try:
        ftp.storbinary("STOR " + serv_file, open(file_name, "rb"), 1024)
        ftp.quit()
        answ = 'put_file: ' + file_name 
    except:
        answ = "ftp error:  :(,  file: " + file_name +" not put "
    print (answ)
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def run_file(param, addr):
    fil_name = param[3:]
    print (fil_name)
    try:
        os.startfile( fil_name )
        answ = 'server run file: '+ fil_name
    except:
        answ = 'cannot  open '+ fil_name
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def get_dir(param, addr):
    dir_name = os.getcwd()
    answ = 'server directory: ' + dir_name
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def list_files(param, addr):
    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    file_list = ''
    for f in files:
        file_list += f + '\n'
    answ = 'server files: \n' + file_list
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def list_dirs(param, addr):
    files = [f for f in os.listdir('.') if os.path.isdir(f)]
    file_list = ''
    for f in files:
        file_list += f + '\n'
    answ = 'server subdirectories: \n' + file_list
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def change_dir(param, addr):
    new_dir = param[3:]
    print (new_dir)
    try:
        os.chdir(new_dir)
        dir_name = os.getcwd()
        answ = 'new directory: ' + dir_name
    except:
        dir_name = os.getcwd()
        answ = 'current directory: ' + dir_name
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def repl_echo(param, addr):
    answ = 'echo '+ param[3:]
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def repl_text(param, addr):
    print (param[3:])
    answ = 'ok'
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def open_file(param, addr):
    global child
    global excel_file
    excel_file = param[3:]
    try:
        child = sp.Popen([excel, excel_file])
        if child.poll() == None:
            answ = 'server opened file: '+ excel_file
        else:
            answ = 'server cannot open file: '+ excel_file
    except:
        print ("cannot open file: "+ excel_file)
        answ = 'server cannot open file: '+ excel_file

    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def close_file(param, addr):
    global child
    global excel_file
    try:
        if child.poll() == None:
            child.terminate()
        while child.poll() == None:
            time.sleep(0.010)
        answ = 'closed file: '+ excel_file
    except:
        print ("cannot close file: "+ excel_file)
        answ = 'server cannot close file: '+ excel_file
    uServSock.sendto( ('%s' %(answ)).encode(), addr)
    return 1

def send_ip(param, addr):
    loc_time = random.random()
    time.sleep(loc_time)
    uServSock.sendto( ('IP:').encode(), addr)
    return 1
