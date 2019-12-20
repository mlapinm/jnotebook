#== test.py   by A.B.Glazov
#== test work of consol python programm
import sys

#-- handle run error 
if len(sys.argv) <  3:
    print ('error of usage')
    print ('you must write:')
    print ('    test.py consol.py inp.txt > out.txt')
    print ('        where:')
    print ('    consol.py - name of testing module')
    print ('    inp.txt - file with the list of input strings')
    print ('    out.txt - file for writing all answers')
    sys.exit()

testing_file = sys.argv[1]
input_file   = sys.argv[2]

#-- prepare list of input strings
fh_input = open(input_file)
ls_input = fh_input.readlines()
fh_input.close()

num = len(ls_input) - 1
while  num >=0:
    if ls_input[num][0] == '#':   #-- delete comments
        res = ls_input.pop(num) 
    else:                         #-- cut end of line     
        ls_input[num] = ls_input[num].strip()
    num -= 1

#-- redefine raw_input    
in_num = 0
def input(param):
    global in_num
    in_st = ls_input[in_num]
    in_num +=1
    return in_st

#-- handle testing module
# res = execfile(testing_file)
res = exec(compile(open(testing_file).read(), testing_file, 'exec'))
