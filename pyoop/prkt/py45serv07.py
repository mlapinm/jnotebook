# coding: cp1251 
# === serv07.py ====
# --- example of work with excel files 

from socket import *
import time
import py45servfn


def end_work(data, addr):
        answ = 'server stopped '
        print (answ)        
        py45servfn.uServSock.sendto( answ.encode(), addr)
        return  -1

# === handling functions dictionary ==== 
cmd_dict = {'st:':py45servfn.repl_text,  'se:':py45servfn.repl_echo,
            'ew:':end_work, 'gd:':py45servfn.get_dir,'lf:':py45servfn.list_files, 
            'ld:':py45servfn.list_dirs, 'cd:':py45servfn.change_dir,
            'pf:':py45servfn.put_file,   'gf:':py45servfn.get_file,
            'of:':py45servfn.open_file,  'cf:':py45servfn.close_file,
            'si:':py45servfn.send_ip,'rf:':py45servfn.run_file }

# === main block ====
print ('serv07  waiting:')
while True:
    data,addr = py45servfn.uServSock.recvfrom(py45servfn.BUFSIZE)
    data = data.decode('cp1251') 
    cmd = data[0:3]
    print (data)
    if cmd in cmd_dict.keys():
        func = cmd_dict[cmd]
        res = func(data, addr)
        if res == -1:   
            break
    else:
        answ = 'unknown command  :( '
        py45servfn.uServSock.sendto( ('%s' %(answ)).encode(), addr)
# === end of work ====

