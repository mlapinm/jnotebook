#coding: cp1251
'''
Задача про определение списка бюджетников

01 сохранить файл в формате csv]
Spisok.xls -> spisok.csv

''' 
# перейти в подкаталог с файлом csv
import os
os.chdir('c:/abitur')
os.getcwd()

# прочитать список строк из файла
fh = open('spisok.csv')
ls_stud = fh.readlines()
fh.close()
for num in len(ls_stud):
	ls_stud[num] = ls_stud[num].strip()

# удалить первые 2 строки
print ls_stud[0]
print ls_stud.pop(0)
print ls_stud.pop(0)
len(ls_stud)

# распечатать исходный список
for st in ls_stud:  print st

# функция извлечения баллов
print ls_stud[0]

def form_sum(st):
	ls_st = st.split(';')
	m_sum = int(ls_st[2])
	f_sum = int(ls_st[3])
	i_sum = int(ls_st[4])
	a_sum = m_sum+f_sum+i_sum
	return a_sum,  m_sum,  f_sum,  i_sum

a_sum1,  m_sum1,  f_sum1,  i_sum1 = form_sum(ls_stud[1])
print a_sum1, m_sum1,f_sum1, i_sum1

# распечатать исходный список с суммой баллов
for st in ls_stud:
	a_sum,  m_sum,  f_sum,  i_sum = form_sum( st ) 
	print st, a_sum

# функция сравнения двух строк
def fn_cmp(st1,st2):
	a_sum1, m_sum1, f_sum1, i_sum1 = form_sum( st1 )
	a_sum2, m_sum2, f_sum2, i_sum2 = form_sum( st2 )

	if a_sum1 > a_sum2:
		return 1
	elif a_sum1 < a_sum2:
		return -1
	else:
		if  i_sum1 > i_sum2:
			return 1
		elif  i_sum1 < i_sum2:
			return -1
		else:
			return 0

		
  

# отсортировать по сумме баллов и распечатать итог 
ls_stud.sort(cmp = fn_cmp)
ls_stud.reverse()

for st in ls_stud:
	a_sum,  m_sum,  f_sum,  i_sum = form_sum( st ) 
	print st, a_sum, i_sum

