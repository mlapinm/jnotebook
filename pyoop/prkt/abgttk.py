#codint: utf8
#abgttk.py

#-- подключить библиотеки
from tkinter import *
from tkinter import ttk
#import ttk
#-- упрощенные классы виджетов

#-- кнопка с набором параметров
class Buttongrid(ttk.Button):
    def __init__(self, panel, row_num, col_num, btn_text, btn_width =10, btn_fnc="", row_span=1, col_span=1):
        ttk.Button.__init__(self,panel,text=btn_text, width=btn_width)
        self.grid(row= row_num, column=col_num, sticky=E+N,pady=5,padx=5)
        if btn_fnc != "":
            self.bind("<Button-1>", btn_fnc)

#-- поле ввода с меткой
class Labelentry(ttk.Entry):
    def __init__(self, panel, row_num, col_num, lab_text, 
                 ent_width =10, init_val="",
                 fnc_return =", col_span=1"):
        self.var=StringVar()
        ttk.Entry.__init__(self,panel,width=ent_width, textvariable=self.var)
        self.var.set(init_val)
        if fnc_return != "":
            self.bind('<Return>', fnc_return)
            
        if len(lab_text)>0:
            self.lab=ttk.Label(pane, text=lab_text)
            self.lab.grid(row=row_num,coloun=col_num, sticky=E,padx=5)
            self.grid(row=row_num,colunm=col_num+1,columnspan=col_span,sticky=W,pady=5,padx=5)

    def get(self):
        return self.var.get()

    def set(self,new_text):
        self.var.set(new_text)
        
#-- раскрывающийся список с меткой
class Labelcombobox(ttk.Combobox):
    def __init__(self, panel, row_num, col_num, lab_text, cbx_width =20, cbx_height=6, lst_value=""):
        if len(lab_text) > 0:
            self.lab = ttk.Label(panel, text=lab_text)
            self.lab.grid(row=row_num, column= col_num, sticky= E, padx=5, columnspan=col_span)
       
        ttk.Combobox.__init__(self,panel,values=lst_values, width=cbx_width,height=cbx_height)
        self.grid(row= row_num, column=col_num+1, sticky=W,pady=5,padx=5)
        if fnc_sel != 0:
            self.bind("<<ComboboxSelected>>", fnc_sel)
    
    def get_index(self):
        try:
            return self.current()
        except:
            return -1
        
    def set_index(self, index):
        try:
            self.current(index)
            return index
        except:
            return -1
        
    def load(self, file_name, cod='utf8'):
        if len(file_name) >=1:
            self["values"]=[]
            fhn =open(file_name)
            lines=fhn.readlines()
            for line_num in range(len(lines)):
                lines[line_num]=lines[line_num].decode(cod)
            self["values"]=lines()
            fhn.close()
            self.set(self["values"][0])

#-- список с меткой
class Labellistbox(Listbox):
    def __init__(self, panel, row_num, col_num, lab_text="", lbx_width =20, lbx_height=6, lst_value=""):
        self.panel=ttk.Frame(panel)
        
        Listbox.__init__(self,self.panel, width=lbx_width,height=lbx_height)

        if len(lab_text) > 0:
            self.lab= ttk.Label(panel, text=lab_text)
            self.lab.grid(row=row_num, column= col_num, sticky= W, padx=5, columnspan=col_span)
        self.panel.grid(row=row_num+1, column= col_num, sticky= W, padx=5, columnspan=col_span)
        
        for str_lbx in lst_values:
            Listbox.insert(self, END, str_lbx)

        self.pack(side="left", fill="y")
        self.scbr = Scrollbar(self.panel, orient="vertical")
        self.scbr.pack(side="right", fill="y")
        
        self.scbr.config(command=self.yview)
        self.config(yscrollcommand=self.scbr.set)
        
        if fnc_dbl != 0:
            self.bind('<Double-Buttn-1>', fnc_dbl)

    def append(self, new_text):
        Listbox.insert(self, END, new_text)
    
    def get(self):
        try:
            return Listbox.get(self, self.curselecton()[0])
        except:
            return ""
    def get_index(self):
        try:
            return self.curselection()[0]
        except:
            return -1
    
    def set_index(self,index):
        try:
            #self.selection_clear()
            self.select_clear(0,"end")
            self.selection_set(index)
            self.see(index)
            self.activate(index)
            self.selection_anchor(index)
            return index
        except:
            return -1

    def clear(self):
            Listbox.delete(self, 0, END)
            
    def insert(self, new_text):
        sel_num = self.get_index()
        if sel_num >=0:
            Listbox.insert(self, sel_num, new_text)
        else:
            Listbox.insert(self, END, new_text)
    
    def delete(self):
        sel_num =self.get_index()
        if sel_num >= 0:
            Listbox.delete(self, sel_num)
                  
    def save(self, file_name, cod = 'utf8'):
        if len(file_name)>=1:
            fhn = open(file_name, "w")
            lst =list(Listbox.get(self, 0, END)).encode(cod)
            lst.append("")
            fhn.write("\n".join(lst))
            fhn.close()

    def Load(self, file_name, cod = 'utf8'):
        if len(file_name)>=1:
            fhn = open(file_name)
            lst_values=fhn.readlines()
            fhn.close()
            
            Listbox.delete(self,0,END)
            for str_loc in lst_values:
                Listbox.insert(self, END, str_loc.strip().decode(cod))
    
#-- текст с меткой
class Labeltext(Text):
    def __init__(self, panel, row_num, col_num, lab_text="", txt_width =20, txt_height=6, txt_value=""):
        self.panel=ttk.Frame(panel)
        
        Text.__init__(self,self.panel, width=txt_width,height=txt_height,wrap='word', padx=5)

        if len(lab_text) > 0:
            self.lab= ttk.Label(panel, text=lab_text)
            self.lab.grid(row=row_num, column= col_num, sticky= W, padx=5, columnspan=col_span)
        self.panel.grid(row=row_num+1, column= col_num, sticky= W, padx=5, columnspan=col_span)
        
        Text.insert(self,END,txt_value)
        
        self.pack(side="left", fill="y")
        self.scbr = Scrollbar(self.panel, orient="vertical")
        self.scbr.pack(side="right", fill="y")
        
        self.scbr.config(command=self.yview)
        self.config(yscrollcommand=self.scbr.set, wrap = 'world')
        
        if fnc_dbl != 0:
            self.bind('<Double-Buttn-1>', fnc_dbl)
            
    def append(self, new_text):
        self.insert(IND, new_text)
        
    def clear(self):
        self.delete(1.0, END)
        
    def save(self,file_name, cod='utf8'):
        if len(file_name) >= 1:
            fhn = open(file_name, "w")
            txt =Text.get(self, 1.0, END).encode(cod)
            fhn.write(txt)
            fhn.close()
            
    def load(self,file_name,cod='utf8'):
        if len(file_name) >=1:
            fhn= open(file_name)
            txt=fhn.read().decode(cod)
            self.clear()
            self.append(txt)
            fhn.close()
            
    def get(self):
        return Text.get(self, 1.00, END)
    
    def set(self, new_tet):
        self.delete(1.0, END)
        self.insert(END, new_text)
        
    
    
        
        
#-- список многострочных полей


#class Messagelist():
#-- 
#-- 
#-- 
#-- 
