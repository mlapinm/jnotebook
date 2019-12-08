#coding: utf8
import os.path

file_name = ""
#-- определить список логических дисков
disk_lett = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
drives = ['%s:' % dsk for dsk in disk_lett if os.path.exists('%s:' % dsk)]
#print drives

#-- определить список физических дисков
hdd_num = 1
while True:
    hdd = r"\\.\PhysicalDrive" + str(hdd_num)    
    try:
        fh = open(hdd, 'rb')
        fh.close()
        hdd_num +=1
    except:
        break
hdd_count = hdd_num

#-- сформировать представление подстроки из байтов
def get_row(st_in, offset, row_len):
    st_loc = st_in[offset:offset + row_len]
    st_bt = ""
    st_ch = ''
    for num in range(len(st_loc)):
        ch = st_loc[num]
        bt = hex(ord(ch))
        bt = str(bt)[2:]
        if len(bt)<2: bt = '0'+bt
        st_bt = st_bt + bt + ' '
        if ord(ch)<32 or ord(ch)>126: ch = '.'
        st_ch = st_ch + ch + ' '
    return st_bt + st_ch

#-- прочитать и вывести сектор
def fn_read(ev):
    w = ev.widget
    #global file_name
    #-- прочитать нужный сектор
    sect_num = int(ed_sect.get())
    fh = open(file_name, 'rb')
    fh.seek(sect_num*512)
    sect = fh.read(512)
    fh.close()
    
    #-- вывести его в текстовое поле
    tx_sect.delete('1.0', END)
    for row_num in range(32):
        offset = row_num * 16
        st = get_row(sect, offset, 16) +'\n'
        tx_sect.insert(END, st )

#-- нарисовать форму
from Tkinter import *
root = Tk()

cl_contr = '#990000'

#== основные панели =========================================
#side-расположение, fill-заполнение, expand-расширение

#-- панель с органами управления 
pn_left = Frame(root, width = 200, bg = cl_contr)
pn_left.pack(side = 'left', fill = 'y')

#----> компоненты в панели с органами управления
##-- список с физическими дисками
def fn_lxhddselect(ev):
    global file_name
    w = ev.widget
    index = int(w.curselection()[0])
    file_name =  r"\\.\PhysicalDrive" + str(index)
    ed_disk.delete(0, END)
    ed_disk.insert(0, "HDD "+str(index))

lb_hdd = Label(pn_left, text = 'Физический диск:', bg = cl_contr, fg = 'white' )
lb_hdd.grid(row=0, column=0)
lx_hdd = Listbox(pn_left,  height = hdd_count )
lx_hdd.grid(row=1, column=0)
lx_hdd.bind('<<ListboxSelect>>', fn_lxhddselect)
for num in range(hdd_count):
    lx_hdd.insert(END, "HDD "+str(num))


Label(pn_left, text = ' ', bg = cl_contr ).grid(row=2, column=0)

##-- список с логическими дисками
def fn_lxdriveselect(ev):
    global file_name
    w = ev.widget
    index = int(w.curselection()[0])
    file_name =  "\\\\.\\" + drives[index]
    ed_disk.delete(0, END)
    ed_disk.insert(0, drives[index])

lb_drive = Label(pn_left, text = 'Логический диск:', bg = cl_contr, fg = 'white' )
lb_drive.grid(row=3, column=0)
lx_drive = Listbox(pn_left,  height = 5)
lx_drive.grid(row=4, column=0, padx= 10, pady= 10)
lx_drive.bind('<<ListboxSelect>>', fn_lxdriveselect)
for disk in drives:
    lx_drive.insert(END, disk)

Label(pn_left, text = ' ', bg = cl_contr ).grid(row=5, column=0)

##-- поле для выбранного диска
lb_disk = Label(pn_left, text = 'диск:', bg = cl_contr, fg = 'white' )
lb_disk.grid(row=6, column=0, padx= 10, pady= 10)
ed_disk = Entry(pn_left, width = 20)
ed_disk.grid(row=7, column=0)
#Label(pn_left, text = ' ', bg = cl_contr ).grid(row=8, column=0)

##-- поле для номера сектора
lb_sect = Label(pn_left, text = 'номер сектора:', bg = cl_contr, fg = 'white' )
lb_sect.grid(row=8, column=0, padx= 10, pady= 10)
ed_sect = Entry(pn_left, width = 20)
ed_sect.grid(row=9, column=0)
Label(pn_left, text = ' ', bg = cl_contr ).grid(row=11, column=0)

##-- кнопка для чтения сектора
bt_read = Button(pn_left, text = 'Читать')
bt_read.bind("<Button-1>", fn_read)
bt_read.grid(row = 10, column = 0, padx= 10, pady= 10)

#-- правая панель для текста сектора
pn_right = Frame(root, width = 800)
pn_right.pack(side = 'right', fill = 'both', expand = 1)

##-- поле для вывода текста в правой панели
tx_sect = Text(pn_right, height = 35, width = 84)
tx_sect.grid(row = 0, column = 0)

sb_hor = Scrollbar(pn_right, command = tx_sect.xview, orient = HORIZONTAL)  
sb_hor.grid(row = 1, column = 0, sticky = W+E+N+S)

sb_ver = Scrollbar(pn_right, command = tx_sect.yview, orient = VERTICAL)  
sb_ver.grid(row = 0, column = 1, sticky = W+E+N+S)

tx_sect.config(yscrollcommand = sb_ver.set, xscrollcommand = sb_hor.set, wrap = NONE)

#-- запустить окно программы
root.mainloop()

