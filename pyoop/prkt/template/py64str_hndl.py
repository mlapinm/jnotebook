#== coding: utf-8
#== str_hndl.py         A.B.Glazov
#== простая программа обработки строк

#== преобразовать строку в список подстрок
#== пример     frels = srt2frel("preved|medved")
def str2frel(st):
        ls = st.split('|')
        ls.insert(0,"0")
        return ls

#== преобразовать список подстрок в строку
#== пример     st = frel2str(frels)
def frel2str(frels):
        frels.pop(0)
        st = "|".join(frels)
        return st

#== получить число подстрок в строке
#== пример     frels_count = count_frels(frels)
def count_frels(frels):
        return len(frels)-1

#== добавить подстроку в  список подстрок
#== пример     add_frel(frels, sub)
def add_frel(frels, sub):
        frels.append( sub )

#== удалить подстроку из списка подстрок
#== пример     del_frel(frels, frel_num)
def del_frel(frels, frel_num):
        frels.pop( frel_num )


#== установить новое значение подстроки в списке подстрок
#== пример     set_frel(frels, frel_num, sub)
def set_frel(frels, frel_num, sub):
        frels[ frel_num ] = sub

#== вставить новую подстроку в списке подстрок
#== пример     ins_frel(frels, frel_num, sub)
def ins_frel(frels, frel_num, sub):
        frels.insert( frel_num, sub )


print (u"Программа обработки строк")

st = input(u'введите строку с разделителями "|"\n: ')

while(1):
        print (u"\nстрока: ", st)
        frels = str2frel( st )
        frels_count = count_frels( frels )
        print (u"число подстрок: ", frels_count)
        print (u"\nвозможные команды:\n add:SSS, set:NNN:SSS, ins:NNN:SSS, del:NNN, exit")
        print (u"где     SSS - произвольная строка,   NNN - номер подстроки ")

        cmd = input(u'введите команду: ')
        ar_cmd = cmd.split(":")
        if ar_cmd[0] == 'exit':
                break
        elif ar_cmd[0] == 'add':
                sub = ar_cmd[1]
                add_frel(frels, sub)
                st = frel2str(frels)

        elif ar_cmd[0] == 'set':
                frel_num = int( ar_cmd[1] )
                sub = ar_cmd[2]
                set_frel(frels, frel_num, sub)
                st = frel2str(frels)

        elif ar_cmd[0] == 'ins':
                frel_num = int( ar_cmd[1] )
                sub = ar_cmd[2]
                ins_frel(frels, frel_num, sub)
                st = frel2str(frels)

        elif ar_cmd[0] == 'del':
                frel_num = int( ar_cmd[1] )
                del_frel( frels, frel_num )
                st = frel2str(frels)

print ('OK')
