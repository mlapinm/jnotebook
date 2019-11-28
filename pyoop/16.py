#dbsn.py
import sys
def getInputCode():
    if "idlelib" in sys.modules:
        input_cod='cp1251'
    if "Tkinter" in sys.modules:
        input_cod= 'cp1251'
    elif sys.stdin.isatty():
        input_cod='cp866'
    else:
        input_cod='cp1251'
    return input_cod

st = getInputCode()
print(st)
