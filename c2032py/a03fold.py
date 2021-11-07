
from tkinter import *
from tkinter.ttk import *
import os

items = [
    {
        "name" : "mlapinm.github.io",
        "help" : [
            "f2322edit"
            ],
        "path" : "D:/avi02prog/a02htmlgit/f2322edit"
    },
    {
        "name" : "d2062duo",
        "help" : [
            "b2142mus.ipynb"
            ],
        "path" : "D:/mailCloud/prjother/089hosts/jnotebook/html/d2062duo"
    },
    {
        "name" : "pyoop",
        "help" : [
            "pyoop"
            ],
        "path" : "D:/mailCloud/prjother/089hosts/jnotebook/pyoop"
    },
    {
        "name" : "name0",
        "help" : [
            "help0",
            "help0"
            ],
        "path" : "D:/"
    },
    {
        "name" : "tmp",
        "help" : [
            "tmp"
            ],
        "path" : "D:/mailCloud/tmp/song2"
    }
]


def change(event, k):
    k = int(k)
    path = items[int(k)]['path']
    helpLabel['text'] = items[k]['help']

    os.system(f"start {path} dir/")

def dirHelp(event, k):
    k = int(k)
    helpLabel['text'] = items[k]['help']


root = Tk()

max = len(items)


frame = Frame(root)

for i in range(max):
    button = Button(frame, text=items[i]['name'])
    button.bind('<Button-1>', lambda event, k =f'{i}': change(event, k))
    label = Label(frame, text = items[i]['path'])
    label.bind('<Button-1>', lambda event, k =f'{i}': dirHelp(event, k))
    button.grid(row=i, column=1, sticky='ew')
    label.grid(row=i, column=2, sticky='ew')

helpLabel = Label(text = items[0]['help'])
frame.pack()
helpLabel.pack(side=LEFT)

root.mainloop()