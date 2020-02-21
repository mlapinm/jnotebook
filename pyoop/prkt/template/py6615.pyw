# coding: utf-8
#-- игра пятнашки.  А.Б.Глазов
import random
from Tkinter import *

#-- переменные
##-- параметры поля
cell_size = 60
x_count = 4
y_count = 4

##-- признак окончания игры
game_over = -1

##-- массив игровых элементов
elems = ["e1","e2","e3","e4","e5","e6","e7","e8",
    "e9","e10","e11","e12","e13","e14","e15","e0"]

##-- массив цветов элементов
colors = ["black","silver","green","lightgreen",
            "yellow","orange","red","deepskyblue",
            "rosybrown","lawngreen","pink", "palegreen",
            "tan","lightblue", "lime","violet"]
#-- функции
##-- создать и отрисовать элемент на  канве
def create_elem( elem_num):
    el = elems[elem_num]
    row_num = elem_num / 4
    col_num = elem_num % 4
    color_num = int(el[1:])
    elem_color = colors[color_num]
    x_left = col_num * cell_size
    y_top = row_num * cell_size
    canv.create_rectangle(x_left + 1, y_top + 1, x_left + cell_size - 2, y_top + cell_size - 2,
            fill = elem_color, outline="#050", width = 2, tag = el)
    canv.create_text(x_left + 30, y_top + 30, text = el[1:], font = ("Arial", 20), tag = "t"+el)

##-- просто отрисовать элемент на  канве
def draw_elem( elem_num):
    el = elems[elem_num]
    row_num = elem_num / 4
    col_num = elem_num % 4
    color_num = int(el[1:])
    elem_color = colors[color_num]
    x_left = col_num * cell_size
    y_top = row_num * cell_size
    canv.coords(el, x_left + 1, y_top + 1 , x_left + cell_size - 2, y_top + cell_size - 2 )
    canv.coords("t"+el, x_left + 30, y_top + 30 )

##-- поменять местами 2 элемента
def change_elems( elem_num1, elem_num2 ):
    elems[elem_num1], elems[elem_num2] = elems[elem_num2], elems[elem_num1]
    draw_elem( elem_num1 )
    draw_elem( elem_num2 )

##-- проверить на завершение
def test_win( ):
    for elem_num in range(15):
        el = elems[elem_num]
        if elem_num + 1 != int(el[1:]):
            return 0
    return 1

##-- получить список соседних ячеек для элемента массива
def get_near(elem_num):
    near_cells = []
    row_num = elem_num / 4
    col_num = elem_num % 4

    if col_num > 0:
        tmp_num = col_num + row_num * 4 - 1
        near_cells.append(tmp_num)
    if col_num < 3:
        tmp_num = col_num + row_num * 4 + 1
        near_cells.append(tmp_num)
    if row_num > 0:
        tmp_num = col_num + (row_num -1) * 4
        near_cells.append(tmp_num)
    if row_num < 3:
        tmp_num = col_num + (row_num + 1) * 4
        near_cells.append(tmp_num)
    return near_cells	

##-- подготовить список элементов
def prep_elems(level):
    global elems

    if level == "Return":
        random.shuffle(elems)
    else:
        try:
            shift_count = int(level) + 1
        except:
            shift_count = 10

        shift_count *= 3
        elem_num = elems.index("e0")
        for shift_num in range(shift_count):
            near_cells = get_near(elem_num)
            random.shuffle( near_cells )
            tmp_num = near_cells[0]
            change_elems( elem_num, tmp_num )
            elem_num = tmp_num

#-- графическая часть игры
##-- формирование канвы
canv_width = x_count * cell_size
canv_height = y_count * cell_size

root = Tk()
canv = Canvas(root, width = canv_width, height = canv_height)
canv.pack()


##-- клеточки на канве
for x_num in range(x_count):
    for y_num in range(y_count):
        canv.create_line(0, y_num*cell_size, canv_width, y_num*cell_size)
        canv.create_line( x_num*cell_size, 0, x_num*cell_size, canv_height)

##-- текст при входе в игру
st = "  GAME 15 \n  select level(0-9)\n  or press <Enter>"
canv.create_text(120, 120, text = st, font = ("Arial", 20), tag ="txt"  )

#-- обработчики событий
##-- сдвинуть при возможности элементы
def test_elems(event):
    global game_over
    if game_over:
        return
    #-- определить выбранный номер элемента
    col_num = event.x / cell_size
    row_num = event.y / cell_size
    elem_num = col_num + row_num * 4

    el = elems[elem_num]
    #-- отработать щелчок по пустому полю
    if el == "e0":
        return

    #-- определить ячейки-соседи
    near_cells = get_near(elem_num)

    #-- проверить ячейки-соседи на 0
    for tmp_num in near_cells:
        if elems[tmp_num] == "e0":
            change_elems( elem_num, tmp_num )
            game_over = test_win()
            if game_over:
                st = "GAME OVER"
                canv.create_text(120, 120, text = st, font = ("Arial", 20), tag ="txt"  )		
    return			

##-- привязка к событиям мыши
canv.bind("<Button-1>", test_elems)

##-- обработать нажатия клавиш
def key_handl(event):
    global game_over
    symbols = ["0","1","2","3","4","5","6","7","8","9","Return"]
    if event.keysym in symbols and game_over != 0:
        canv.delete("txt")	
        level = event.keysym
        prep_elems(level)

        if game_over == -1 :  # начать игру в первый раз
            for elem_num in range(len(elems)):
                create_elem(elem_num)
        elif game_over == 1:  # начать игру заново
            for elem_num in range(len(elems)):
                draw_elem(elem_num)
        game_over = 0

##-- привязка к событиям клавиатуры
canv.bind("<KeyPress>", key_handl)
canv.focus_set()

#-- запустить игру
root.mainloop()
