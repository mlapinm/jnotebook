# coding: cp1251 
# === cli07.py ====
# --- example sending command to server and more help

import py45clifn

# === handling functions dictionary ==== 
client_cmd = {'sa:':py45clifn.set_addr, 'pf:':py45clifn.put_file, 'lf:':py45clifn.list_files, 
            'gf:':py45clifn.get_file, 'li:':py45clifn.list_ip, 'ew:':py45clifn.end_work,
             'gd:':py45clifn.get_dir,
            'ld:':py45clifn.list_dirs, 'cd:':py45clifn.change_dir}

# === main block ====
print ("cli07.py")

data = 'msi:'
while True:
    if len(data)<4:  data =data +':'
    dest = data[0]                    #-- letter c or s or m 
    #print 'dest = ', dest
    if  dest == 's':                    #-- command for server
        print ('send command: ', data[1:])
        res = py45clifn.send_command(data[1:])
        if res == -1:  break
    elif  dest == 'm':                #-- send command to all servers
        print ('multisend command: ', data[1:])
        res = py45clifn.multisend_command(data[1:])
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
            py45clifn.help()         
    else:
        print ("command error  :( ")
        py45clifn.help()    
    data = input('>')

# === end of work ====
print ("end of work.  thanks.  bye")
