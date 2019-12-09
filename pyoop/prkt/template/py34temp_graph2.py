# -*- coding: utf8 -*-
from Tkinter import *
from datetime import datetime,timedelta
from dbsn import *

#= 00 === лбщие функции даты  ====================
#-- перевести значение даты в секунды
def dateToSec(dt):
    return (dt - datetime(2000,1,1)).total_seconds()

#-- перевести секунды в значение даты
def secToDate(sc):
    return datetime(2000,1,1) + timedelta(seconds = sc)

#-- сосчитать число дней в месяце даты
def monthDays(dt):
    yr,mn = dt.year, dt.month 
    if mn == 2 and yr %4 == 0 and not yr % 400 == 0:   return 29
    ar = [0,31,28,31,30,31,30,31,31,30,31,30,31] 
    return ar[mn]

#= 01 === определить границы дат просмотра ====================

#-- извлечь дату из фрагмента
def get_date_temp(fragm):
    frels = formFrels(fragm)
    st_date = getFrel(frels,1)
    fr_date = datetime.strptime(st_date, '%Y/%m/%d %H:%M:%S')  ########
    # st_date = fr_date.strftime('%Y/%m/%d %H:%M:%S') #-- перевести дату в строку
    st_temp = getFrel(frels,2)
    fr_temp = int( st_temp ) 
    return fr_date, fr_temp

dbh = openDBSN('meteo1')
first_fragm = getFragm(dbh, 1)
last_fragm = getFragm(dbh,-1)
first_date, temp = get_date_temp(first_fragm)
last_date, temp = get_date_temp(last_fragm)

#= 02 === вспомогательные функции ===========================

#-- функция сравнения даты во фрагменте с заданной датой
def fn_cmp( fragm, dt_sel):
    frels = formFrels( fragm )
    st_date = getFrel(frels,1)
    fr_date = datetime.strptime(st_date, '%Y/%m/%d %H:%M:%S')
    return (fr_date - dt_sel). total_seconds()  #########


#= 03 === обработчик клавиши 'просмотреть' ==================
def view_temp(event):
    #-- основные параметры
    tau = 900       # шаг отображения:  15 min = 5 pixel
    ls_temp = ['-' for j in range(96)]  # пустой массив на 24 часа
    num_count = len(ls_temp)
    
    #-- начертить координаты
    canv.delete("all")
    x0 = 20;  y0 = 220  #-- положение начала координат
    canv.create_line(10, y0, 630, y0,fill='black',arrow=LAST)
    canv.create_line(x0, 10, x0, 390,fill='black',arrow=BOTH)
    for n in range(25):
        x = x0 + n*20
        canv.create_line(x, y0-10, x, y0+10,fill='black')
        if n%8 == 4 :
            canv.create_line(x, y0+10, x-80, y0+10,fill='black')
        elif n>4 and (n-4)%8 == 4:    
            canv.create_line(x, y0-10, x-80, y0-10,fill='black')

    #-- найти начало данных таблицы в массиве
    st_date = ed_curdate.get()
    beg_date = datetime.strptime(st_date, '%Y/%m/%d')
    end_date = beg_date + timedelta(days = 1)
    
    fragm_num = findFirstNum( dbh, fn_cmp, beg_date)
    fragm = getFragm(dbh, fragm_num)
    cur_date, cur_temp =  get_date_temp(fragm)
    cur_num = int((cur_date - beg_date).total_seconds()/tau ) #-- нлмер интервала
    beg_num = cur_num  #-- номер первого заполняемог элемента массива

    temp_sum = cur_temp
    temp_count = 1
    fragm_count = countFragm(dbh)
    #print beg_num

    #-- заполнить массив значений из таблицы
    while cur_num < num_count:
        fragm_num += 1
        if fragm_num > fragm_count:
            break
        fragm = getFragm(dbh, fragm_num)
        cur_date, cur_temp  = get_date_temp( fragm )
        cur_num = int((cur_date - beg_date).total_seconds()/tau) #-- нлмер интервала
        if cur_num == beg_num:
            temp_sum += cur_temp
            temp_count += 1
        else:
            temp_mid = float(temp_sum) / temp_count
            ls_temp[ beg_num ] = temp_mid
            beg_num = cur_num
            temp_sum = cur_temp
            temp_count = 1

    #-- начертить график по массиву
    temp_left = '-'
    for num in range(len(ls_temp)-1):
        temp_right = ls_temp[num]
        #-- пропустить пустые промежутки ---
        if temp_left == '-' or temp_right == '-':
            temp_left = temp_right
            continue

        x1 = x0 + 5*num;  
        x2 = x1 + 5;
        y1 = y0 - ( temp_left - 250 )*20
        y2 = y0 - ( temp_right - 250 )*20
        canv.create_line( x1, y1, x2, y2, fill='blue' )
        temp_left = temp_right
            
        
#= 04 === нарисоавть форму с элементами вывода ==============
#-- главная форма --
root = Tk()
root.title("график температуры за день")

#-- верхняя панель -- 
bg_top = 'lime'
pn_top = Frame(root,  bg = bg_top)
pn_top.pack(side = 'top', fill= 'x')

st_date = first_date.strftime('%Y/%m/%d')
lb_headfirstdate = Label(pn_top, text = 'Первая дата таблицы:', bg = bg_top )
lb_headfirstdate.grid(row = 0, column = 0, sticky=W)
lb_firstdate = Label(pn_top, text = st_date, bg = 'white', width = 12 )
lb_firstdate.grid(row = 0, column = 1, pady= 5)

st_date = last_date.strftime('%Y/%m/%d')
lb_headlastdate = Label(pn_top, text = 'Последняя дата таблицы: ', bg = bg_top )
lb_headlastdate.grid(row = 1, column = 0, sticky=W)
lb_lastdate = Label(pn_top, text = st_date, bg = 'white', width = 12  )
lb_lastdate.grid(row = 1, column = 1, pady= 5)

lb_curdate = Label(pn_top, text = 'Дата просмотра:', bg = bg_top )
lb_curdate.grid(row = 2, column = 0, sticky=W)
ed_curdate = Entry(pn_top, width = 15)
ed_curdate.grid(row = 2, column = 1, pady= 5)

bt_view = Button(pn_top, text = 'просмотреть')
bt_view.grid(row = 2, column = 2, padx = 20)
bt_view.bind("<Button-1>", view_temp)

#-- панель с канвой --
pn_main = Frame(root,  bg = 'lightblue')
pn_main.pack(side = 'right', fill = 'both', expand = 1)

canv = Canvas(pn_main, height = 400, width = 640, bg='white')
canv.pack()

#-- запуск формы --
root.mainloop()
closeDBSN(dbh)
            
