# coding: cp1251 
# === cli06.py ====
# --- example sending command to server and more help
from socket import * 
import threading
import time

import py44clifn

# === handling functions dictionary ==== 
client_cmd = {'sa:':py44clifn.set_addr, 'pf:':py44clifn.put_file, 'lf:':py44clifn.list_files, 
            'gf:':py44clifn.get_file, 'li:':py44clifn.list_ip, 'ew:':py44clifn.end_work }

# == thread for get clients IP ====
#servip_set = {}
broad_sock = socket(AF_INET, SOCK_DGRAM)
client_ip = '';   UDP_PORT = 3010
broad_sock.bind((client_ip, UDP_PORT))

def get_servip():
    while True:
        data, addr = broad_sock.recvfrom(1024)
        # print (data, addr[0])
        py44clifn.servip_set.add(addr[0])
        time.sleep(0.001)

tr_ip = threading.Thread( target = get_servip)
tr_ip.daemon = True
tr_ip.start()


# === main block ====
print ("cli06.py")
while True:
    data = input('>')
    if len(data)<4:  data =data +':'
    dest = data[0]                    #-- letter c or s or m 
    #print ('dest = ', dest)
    if  dest == 's':                    #-- command for server
        print ('send command: ', data[1:])
        res = py44clifn.send_command(data[1:])
        if res == -1:  break
    elif  dest == 'm':                #-- send command to all servers
        print ('multisend command: ', data[1:])
        res = py44clifn.multisend_command(data[1:])
        if res == -1:  break
    elif  dest == 'c':                #-- command for client    
        cmd = data[1:4]                #-- command
        #print ('cmd = ', cmd)
        if cmd in client_cmd.keys():
            func = client_cmd[cmd]
            res = func(data[1:])
            if res == -1:  break
        else:
            print ("client command error  :( ")
            py44clifn.help()         
    else:
        print ("command error  :( ")
        py44clifn.help()    

# === end of work ====
print ("end of work.  thanks.  bye")
