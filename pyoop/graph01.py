# coding: utf-8
#coding: utf-8
#graph0.py
from math import *
from tkinter import *
'''
root = Tk()
canv = Canvas(root,width=600,height=550)
canv.pack()
'''
x0 = 40; y0 = 240; xm = 480; ym = 20
Sm = 1.2; tm=6.5; text_size=12
dash_size = 4
def coord_in(x0,y0,xm,ym, fil_color, x_label ='x',y_label='y'):
    canv.create_line(x0-10,y0,xm+10,y0,fill=fil_color,arrow=LAST)
    canv.create_line(x0,ym-10,x0,2*y0-ym+10,fill=fil_color,arrow=BOTH)
    canv.create_text(x0 + 20,ym,text=y_label, font=('Arial',text_size))
    canv.create_text(xm, y0-20, text=x_label, font=('Arial',text_size))

def graph_in(f, fm, tm, x0, y0, xm, ym, fil_color):
    xb = x0; t=0;yb=y0+(ym-y0)*f(t)/fm
    canv.create_line(xb,yb,xb,yb,fill=fil_color)
    for x in range(x0+2, xm, 2):
        t = tm*(x-x0)/(xm-x0)
        y = y0+(ym-y0)*f(t)/fm
        canv.create_line(xb, yb, x, y, fill=fil_color)
        xb = x; yb=y
        
def graph(f, fil_color):
    graph_in(f, Sm, tm, x0, y0, xm, ym, fil_color)

def text(label, t, u):
    t = float(t)
    x = t*(xm-x0)/tm + x0
    y = y0+(ym-y0)*u/Sm
    canv.create_text(x,y,text=label,font=('Arial',text_size))

def coord(fil_color, x_label ='x',y_label='y',dt=0.25,dU=0.2,grid=1):
    coord_in(x0,y0,xm,ym, fil_color, x_label,y_label)

    dt = float(dt)
    if dt != 0:
        t = dt
        disp_text = 0
        while t<tm:
            x = t*(xm-x0)/tm + x0
            canv.create_line(x,y0-5,x,y0+5,fill=fil_color)
            x_lab=str(t); x_lab[0:3]
            if disp_text:
                canv.create_text(x,y0+15,text=x_lab,font=('Arial',text_size))
                if grid:
                    canv.create_line(x,2*y0-ym,x,ym,fill=fil_color, dash=dash_size)
            t += dt
            disp_text=1 if disp_text==0 else 0
    
    dU = float(dU)
    if dU != 0:
        U = dU
        disp_text = 0
        while U<Sm:
            y = y0+(ym-y0)*U/Sm
            yn = y0+(y0-ym)*U/Sm
            canv.create_line(x0-5,y,x0+5,y,fill=fil_color)
            canv.create_line(x0-5,yn,x0+5,yn,fill=fil_color)
            y_lab=str(U); y_lab[0:3]
            if disp_text:
                canv.create_text(x0-20,y,text=y_lab,font=('Arial',text_size))
                canv.create_text(x0-20,yn,text='-'+y_lab,font=('Arial',text_size))
                if grid:
                    canv.create_line(x0,y,xm,y,fill=fil_color, dash=dash_size)
                    canv.create_line(x0,yn,xm,yn,fill=fil_color, dash=dash_size)
            U += dU
            disp_text=1 if disp_text==0 else 0
'''
<Button-1><Button-2><Button-3><Double-Button-1>
canv.bind('<Button-1>', proect)
'''
def proect(event):
    '''draw dash line on the canvas from the selected point
    '''
    x=event.x;y=event.y
    canv.create_line(x0, y, x, y, dash=dash_size)
    canv.create_line(x, y0, x, y, dash=dash_size)

#-- 11 -------------------

class plLabel:
    def __init__(self, panel, x, y, width, height, text):
        self.lab = Label(panel,text=text)
        self.lab.place(x=x,y=y,width=width,height=height)

class plButton:
    def __init__(self, panel, x, y, width, height, text, cmd = ''):
        self.btn = Button(panel)
        self.btn["text"]=text
        if cmd:
            self.btn["command"] = cmd
        self.btn.place(x=x,y=y,width=width,height=height)

class plEntry:
    def __init__(self, panel, x, y, width, height, text, text_w, entry_w, val=''):
        self.lab = Label(panel,text=text)
        self.lab.place(x=x,y=y,width=text_w,height=height)
        self.ent = Entry(panel)
        self.ent.place(x=x+width-entry_w,y=y,width=entry_w,height=height)
        self.set(val)
        
    def get(self):
        return self.ent.get()
    
    def set(self, text):
        self.ent.delete(0,END)
        self.ent.insert(END, text)

# pn_control = Frame(root, height = 70, bg = 'silver')
# pn_control.pack(side='top', fill='x')
# pn_control = pkFrame(root, height = 70, bg = 'silver', side='top', fill='x')

class pkFrame(Frame):
    def __init__(self,panel, height, width, bg, side='', fill='', expand=1):
        Frame.__init__(self,panel,width=width,height=height,bg=bg)
        if fill:
            self.pack(side=side, fill=fill, expand = expand)
        else:
            self.pack(side=side, expand=expand)
        self.pack_propagate(0)

# pn_graph = Frame(root, height = 550,width = 550, bg = 'white')
# pn_graph.pack(side='bottom', expand=1, fill='both')
# pn_graph=pkFrame(root,550,550,'white','bottom',1,'both')

# canv = Canvas(pn_graph, height = 550, width=550)
# canv.pack(fill = 'both',expand=1)
# canv = pkCanvas(pn_graph, 550,550,'both',1)

class pkCanvas(Canvas):
    def __init__(self, panel, height, width, fill, expand):
        Canvas.__init__(self,panel,height=height, width=width)
        self.pack(fill=fill, expand=expand)

# -- начало
root = Tk()

# -- функции
def fn(t):      # -- выводимая функция
    return eval(fnt)

def fn_prep():  # -- подготовить чистую канву с координатами
    Um = ed_Um.get(); Sm = eval(Um)
    dU = eval(ed_dU.get())
    tm = 6.5; dt=0.25
    canv.delete("all")
    canv.create_rectangle(0,0,550,550,fill="white")
    coord('black','t','U(t)',dt,dU,1)
    return

def fn_draw():    # -- нарисовать график функции
    global fnt
    fnt = ed_fn.get()
    graph(fn,'blue')
    return

def fn_clear():    # -- стереть график функции
    global fnt
    fnt = ed_fn.get()
    graph(fn,'white')
    return



# -- панели формы для кнопок и текстовых полей
pn_control = pkFrame(root,width=550, height = 70, bg = 'silver', side='top', fill='x')
pn_graph=pkFrame(root,550,550,'white','bottom','both')

# canv = Canvas(pn_graph, height = 550, width=550)
# canv.pack(fill = 'both',expand=1)
canv = pkCanvas(pn_graph, 550,550,'both',1)

# -- заполним панель управления текстовыми полями
y_top = 10; h_top=18 # -- координаты верхнего ряда

lb_Um = plLabel(pn_control,x=10,y=y_top, width=20,height=h_top, text="Um:")
ed_Um = Entry(pn_control); ed_Um.insert(END,"1.7")
#ed_um.delete(0,END); ed_Um.insert(END,"1.4")
ed_Um.place(x=40,y=y_top,width=40,height=h_top)

# lb_dU = plLabel(pn_control, 90, y_top, 20, h_top, text="dU:")
# ed_dU = Entry(pn_control); ed_dU.insert(END,"0.2")
# ed_dU.place(x=120,y=y_top,width=40,height=h_top)
ed_dU =plEntry(pn_control, 90, y_top, 60, h_top, text="dU:",text_w=20,entry_w=40,val='0.2')


# lb_fn = plLabel(pn_control,x=170,y=y_top, width=60,height=h_top, text="функция:")
# ed_fn = Entry(pn_control); ed_fn.insert(END,"sin(t)")
# ed_fn.place(x=240,y=y_top,width=240,height=h_top)
ed_fn =plEntry(pn_control, 170, y_top, 310, h_top, text="функция:",text_w=60,entry_w=240,val='sin(t)')


# -- заполним панель управления кнопками
y_bt=40;h_bt=20;w_bt=80    # -- координаты ряда кнопок

bt_prep = plButton(pn_control,x=40,y=y_bt,width=w_bt,height=h_bt, text = u'подготовить', cmd = fn_prep)
bt_draw = plButton(pn_control,x=200,y=y_bt,width=w_bt,height=h_bt, text = u'начертить', cmd = fn_draw)
bt_clear = plButton(pn_control,x=360,y=y_bt,width=w_bt,height=h_bt, text = u'стереть', cmd = fn_clear)


root.mainloop()
