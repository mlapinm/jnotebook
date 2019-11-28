#16r.py
file_name = input("input file name: ")
fh = open( file_name, "r")
st = fh.read()
print(st)
fh.close()
