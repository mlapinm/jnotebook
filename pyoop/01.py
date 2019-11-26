#coding: utf-8
from math import *
from tkinter import *
import graph12 as gr
# -- начало
root = Tk()

# -- функции
def fn(t):      # -- выводимая функция
    return eval(fnt)

def fn_prep():  # -- подготовить чистую канву с координатами
    Um = ed_Um.get(); Sm = eval(Um)
    dU = eval(ed_dU.get())
    tm = 6.5; dt=0.25
    gr.canv.delete("all")
    gr.canv.create_rectangle(0,0,550,550,fill="white")
    gr.coord('black','t','U(t)',dt,dU,1)
    return

def fn_draw():    # -- нарисовать график функции
    global fnt
    fnt = ed_fn.get()
    gr.graph(fn,'blue')
    return

def fn_clear():    # -- стереть график функции
    global fnt
    fnt = ed_fn.get()
    gr.graph(fn,'white')
    return

# -- панели формы для кнопок и текстовых полей
pn_control = gr.pkFrame(root,width=550, height = 70, bg = 'silver', side='top', fill='x')
pn_graph=gr.pkFrame(root,550,550,'white','bottom','both')

gr.canv = gr.pkCanvas(pn_graph, 550,550,'both',1)

# -- заполним панель управления текстовыми полями
y_top = 10; h_top=18 # -- координаты верхнего ряда

ed_Um =gr.plEntry(pn_control, 10, y_top, 65, h_top, text="Um:",text_w=20,entry_w=40,val='1.8')
ed_dU =gr.plEntry(pn_control, 90, y_top, 65, h_top, text="dU:",text_w=20,entry_w=40,val='0.25')
ed_fn =gr.plEntry(pn_control, 170, y_top, 310, h_top, text="функция:",text_w=60,entry_w=240,val='sin(t)')


# -- заполним панель управления кнопками
y_bt=40;h_bt=20;w_bt=80    # -- координаты ряда кнопок

bt_prep = gr.plButton(pn_control,x=40,y=y_bt,width=w_bt,height=h_bt, text = u'подготовить', cmd = fn_prep)
bt_draw = gr.plButton(pn_control,x=200,y=y_bt,width=w_bt,height=h_bt, text = u'начертить', cmd = fn_draw)
bt_clear = gr.plButton(pn_control,x=360,y=y_bt,width=w_bt,height=h_bt, text = u'стереть', cmd = fn_clear)


root.mainloop()

