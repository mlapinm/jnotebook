#graph0.py
from math import *
from tkinter import *
'''
root = Tk()
canv = Canvas(root,width=500,height=500)
canv.pack()
'''
x0 = 40; y0 = 240; xm = 480; ym = 20
Sm = 1.2; tm=5; text_size=12

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
        
def coord(fil_color, x_label ='x',y_label='y'):
    coord_in(x0,y0,xm,ym, fil_color, x_label,y_label)

def graph(f, fil_color):
    graph_in(f, Sm, tm, x0, y0, xm, ym, fil_color)

def text(label, t, u):
    t = float(t)
    x = t*(xm-x0)/tm + x0
    y = y0+(ym-y0)*u/Sm
    canv.create_text(x,y,text=label,font=('Arial',text_size))
'''    
coord('blue', 't', 'U(t)')
graph(cos, 'darkred')
text('U=cos(t)', 0.8, 1.0)
root.mainloop()
'''