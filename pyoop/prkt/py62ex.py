#== 01.py 
def fn(st):
    if st[0] == 'm':
        return st*3
    else:
        return st*2

while 1:
    st = input(':')
    if st == 'x': 
        break 
    st = fn(st)
    print (st)

print ('end of work')
