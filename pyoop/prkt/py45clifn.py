# === clifn.py ====
# coding: cp1251 
from socket import *
import os
import sys
import ftplib
import time
import threading

# === form client socket ====
LOCKHOST = '127.0.0.1'        #-- for ftp on the localhost
HOST = '127.0.0.1'
PORT = 3000
BUFSIZE = 1024
SOCKADDR = (HOST,PORT)
uCliSock = socket(AF_INET,SOCK_DGRAM)
uCliSock.settimeout(5)
servip_set = set()

time_beg = 0
time_cur = 10

def get_servip():
    while True: 
        if time_cur - time_beg < 5:
            try:
                data, addr = uCliSock.recvfrom(BUFSIZE)
                if data[:2].decode() == 'IP': 
                    servip_set.add(addr[0])
                    print (addr[0])
            except:
                pass
        time.sleep(0.003)

tr_ip = threading.Thread( target = get_servip)
tr_ip.daemon = True
tr_ip.start()

# === handling functions ==== 
def set_addr(param):
    global HOST
    global SOCKADDR
    global PORT
    HOST = param[3:]
    SOCKADDR = (HOST,PORT)
    print ("new_host: ", HOST)
    return 1

def send_command(param):
    #print 'send_text: ', param 
    uCliSock.sendto(param.encode(), SOCKADDR)
    try:
        answ, addr = uCliSock.recvfrom(BUFSIZE)
    except: 
        answ = 'not answer  :('
    print (SOCKADDR[0], " ", answ.decode())
    return 1

def multisend_command(param):
    global HOST
    global SOCKADDR
    global PORT
    global servip_set
    global time_beg
    global time_cur

    if param[:2] == 'si':  #-- запрос активных серверов
        servip_set.clear()
        brd_adr = "192.168.0.255"
        HOST = brd_adr
        SOCKADDR = (HOST,PORT)
        uCliSock.sendto(param.encode(), SOCKADDR)
        time_beg = time.time()
        time_cur = time.time()
        while time_cur - time_beg < 5:
            time_cur = time.time()
            time.sleep(0.002)
        return 1

    ip_list = list(servip_set)
    if len(ip_list) > 0:
        for ip in ip_list:
            HOST = ip
            SOCKADDR = (HOST,PORT)
            uCliSock.sendto(param.encode(), SOCKADDR)
            try:
                answ, addr = uCliSock.recvfrom(BUFSIZE)
            except: 
                answ = 'not answer  :('
            print (SOCKADDR[0], " ", answ)
    else:
        print ("no servers alive  :(")
        print ("input msi:")

    return 1

def help():
    print ("you can input: addres, text, command of filename")
    print ("for example server commands:")
    print ("sst:privet medved   - send text for selected ip")
    print ("sse:privet          - send text with echo")
    print ("spf:1.txt           - put file from server to ftp")
    print ("sgf:2.txt           - get file from ftp to server")
    print ("sof:1.xls           - open file on the server")
    print ("scf:                - close opened file on the server")
    print ("sgd:                - get directory name of server")
    print ("slf:                - get list of files on servers directory")
    print ("sld:                   - get list of subdirectories on server")
    print ("scd:new_dir         - change work directory on the server")
    print ("sew:                - end work of selected server")
    print ("")
    print ("if You change first character from 's' to 'm', ")
    print ("thee commands wil handle on all servers. for example:")
    print ("mof:1.xls           - open file on every server")
    print ("")
    print ("client commands:")
    print ("msi:                - fill list of servers ip")
    print ("cli:                - disp list of servers ip")
    print ("csa:10.1.2.13       - set addres for contact")
    print ("")
    print ("cgd:                - get directory name of client")
    print ("clf:                - get list of files on clients directory")
    print ("cld:                   - get list of subdirectories on client")
    print ("ccd:new_dir         - change work directory on the client")
    print ("cew:                - end of client work")
    print ("")
    print ("cpf:3.txt           - put file from client to ftp")
    print ("cgf:4.txt           - get file from ftp to client")

def put_file(param):            #-- FTP server on the client host
    print ('put_file: ', param) 
    file_name = param[3:]
    ftp = ftplib.FTP(LOCKHOST)
    ftp.login("user", "12345")
    try:
        ftp.storbinary("STOR " + file_name, open(file_name, "rb"), 1024)
        ftp.quit()
    except:
        print ("ftp error:  :(")
        return -1
    return 1

def get_file(param):
    print ('get_file: ', param )
    file_name = param[3:]
    ftp = ftplib.FTP(LOCKHOST)
    ftp.login("user", "12345")
    try:
        ftp.retrbinary("RETR " + file_name, open(file_name, "wb").write)
        ftp.quit()
    except:
        print ("ftp error:  :(")
        return -1
    return 1

def list_ip(param):
    ip_list = list(servip_set)
    print ("active ips:")
    for ip in ip_list:
        print (ip)
    return 1

def end_work(param):
    uCliSock.close() 
    return -1

def list_files(param):
    files = [f for f in os.listdir('.') if os.path.isfile(f)]
    file_list = ''
    for f in files:
        file_list += f + '\n'
    answ = ('client files: \n' + file_list)
    print (answ) 
    return 1

def get_dir(param):
    dir_name = os.getcwd()
    answ = 'client directory: ' + dir_name
    print (answ) 
    return 1

def list_dirs(param):
    files = [f for f in os.listdir('.') if os.path.isdir(f)]
    file_list = ''
    for f in files:
        file_list += f + '\n'
    answ = 'server subdirectories: \n' + file_list
    print (answ) 
    return 1

def change_dir(param):
    new_dir = param[3:]
    print (new_dir)
    try:
        os.chdir(new_dir)
        dir_name = os.getcwd()
        answ = 'new directory: ' + dir_name
    except:
        dir_name = os.getcwd()
        answ = 'current directory: ' + dir_name
    print (answ) 
    return 1

