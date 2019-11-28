#16w.py
file_name = input("input file name: ")
fh = open(file_name, "w")
st = input("input string: ")
fh.write(st)
fh.close()
