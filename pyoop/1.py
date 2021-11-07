
import os
from tkinter import *


	
def open0():
    os.system("start d:/ dir/")

def open1():
    os.system("start d:/mailCloud/ dir/")
	
																								
# Create the root window
window = Tk()

# Set window title
window.title('File Explorer')

# Set window size
window.geometry("500x500")

#Set window background color
window.config(background = "white")

	
button0 = Button(window,
						text = "d:/",
						command = open0)


button1 = Button(window,
						text = "d:/mailCloud/",
						command = open1)

button_exit = Button(window,
					text = "Exit",
					command = exit)


button0.grid(column = 0, row = 2)
button1.grid(column = 0, row = 3)

button_exit.grid(column = 1,row = 3)


window.mainloop()
