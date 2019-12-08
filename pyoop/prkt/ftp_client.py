# coding: cp1251 
import ftplib 
HOST = '127.0.0.1'

def put_file(param):
    print ('put_file: ', param) 
    file_name = param 
    ftp = ftplib.FTP(HOST) 
    ftp.login("user", "12345") 
    try:
        ftp.storbinary("STOR " + file_name, open(file_name, "rb"), 1024) 
        ftp.quit()
    except:
        print("ftp error: :("); return -1
    return 1

def get_file(param):
    print('get_file: '), param 
    file_name = param 
    ftp = ftplib.FTP(HOST) 
    ftp.login("user", "12345") 
    try:
        ftp.retrbinary("RETR " + file_name, open(file_name, "wb").write) 
        ftp.quit()
    except:
        print("ftp error: :(");return -1
    return 1

while True:
    data = input('>') 
    ls_data = data.split() 
    cmd = ls_data[0]
    param = ls_data[1]
    
    if(cmd == 'get'):
        res = get_file(param)
    if(cmd == 'put'):
        res = put_file(param)
        
    if res ==1:
        print('OK')
    else:
        break

# === end of work ======
print("end of work. thanks. bye")
