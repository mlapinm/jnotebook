# coding: cp1251 
# === serv06.py ====
# --- example of work with ftp 

from socket import *
import time
import threading

import py44servfn
# === handling functions dictionary ==== 
cmd_dict = {'st:':py44servfn.repl_text, 'se:':py44servfn.repl_echo , 
            'pf:':py44servfn.put_file,     'gf:':py44servfn.get_file,}

# === first thread for broadcast===
#loc_ip = gethostbyname(gethostname())        #-- get self IP
print (py44servfn.loc_ip)
brd_adr = "192.168.1.255"

sk_ip = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP) 
sk_ip.setsockopt(IPPROTO_IP, IP_MULTICAST_TTL, 2)

def send_locip(interval, loc_ip):
    while 1:
        sk_ip.sendto( ' '.encode(), ( brd_adr, 3010))
        print (py44servfn.loc_ip + ' to '+ brd_adr)
        time.sleep(interval)

tr_ip = threading.Thread( target = send_locip, args =(5.0, py44servfn.loc_ip))
tr_ip.daemon = True
tr_ip.start()


# === main block ====
print ('serv06  waiting:')
while True:
    data,addr = py44servfn.uServSock.recvfrom(py44servfn.BUFSIZE)
    print('aaa',data)
    data = data.decode('cp1251') 
    print(data)
    cmd = data[0:3]
    if cmd in cmd_dict.keys():
        func = cmd_dict[cmd]
        res = func(data, addr)
        if res == -1:   
            break
    else:
        answ = 'unknown command  :( '
        py44servfn.uServSock.sendto( answ.encode(), addr)
# === end of work ====
print ('server stopped ')
