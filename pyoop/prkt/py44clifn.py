# === clifn.py ====
# coding: cp1251 
from socket import *
import os
import sys
import ftplib

# === form client socket ====
LOCKHOST = '127.0.0.1'        #-- for ftp on the localhost
HOST = '127.0.0.1'
PORT = 3000
BUFSIZE = 1024
SOCKADDR = (HOST,PORT)
uCliSock = socket(AF_INET,SOCK_DGRAM)
uCliSock.settimeout(5)
servip_set = set()

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
    uCliSock.sendto(param, SOCKADDR)
    try:
        answ, addr = uCliSock.recvfrom(BUFSIZE)
    except: 
        answ = 'not answer  :('
    print (SOCKADDR[0], " ", answ)
    return 1

def multisend_command(param):
    global HOST
    global SOCKADDR
    global PORT

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
    return 1

def help():
    print ("you can input: addres, text, command of filename")
    print ("for example:")
    print ("csa:10.1.2.13          - set addres for contact")
    print ("sst:privet medved      - send text for selected ip")
    print ("sse:privet             - send text with echo")
    print ("spf:1.txt              - put file from server to ftp")
    print ("sgf:2.txt              - get file from ftp to server")
    print ("sew:2.txt              - end work of selected server")
    print ("")
    print ("mst:privet medved      - send text to all servers")
    print ("mse:privet             - send text with echofor all servers")
    print ("mpf:1.txt              - put file from all servers to ftp")
    print ("mgf:2.txt              - get file from ftp to all servers")
    print ("")
    print ("cpf:3.txt              - put file from client to ftp")
    print ("cgf:4.txt              - get file from ftp to client")
    print ("cli:                   - disp list of servers ip")
    print ("cew:                   - end of client work")

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
    print ('get_file: ', param) 
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
    print ('list_files: ', param )
    return 1
