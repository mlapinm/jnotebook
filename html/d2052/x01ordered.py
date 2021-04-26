import os
import re

class Lines:
    '''
    new file next b1012.txt, b1022.txt, b1032.txt
    with 25 lines
    '''
    linesEmpty = []
    spaces = 0
    number = 0
    def __init__(self, name):
        self.name = name

    def setNumber(self, number):
        self.number = number
        return self

    def setSimple(self):

        pass

    def setSpaces(self, spaces):
        self.spaces = spaces
        for i in range(self.spaces):
            self.linesEmpty.append('')
        return self

    def build(self):
        self.lines = []
 
        for i in range(1, self.number + 1) :
            line = f'{i:02}'
            self.lines.append(line)
            self.lines += self.linesEmpty

    def nextName(self):
        def checked(x):
            match = re.search(r'^b\d\d\d\d', x)
            return True if match else False

        files = os.listdir()
        files = list(filter(checked, files))
        name = self.name
        if len(files) > 0:
            name = files[-1]
        match = re.search('b\d(\d\d)', name)
        num = match.groups()[0] if match else '00'
        num = f'{(int(num) + 1)%100:02}'
        self.name = name[:2] + num + name[4:]
        return self


    def __str__(self):
        return self.lines.__str__()

    def write(self):
        text = '\n'.join(self.lines)
        if not os.path.isfile(self.name):
            with open(self.name, 'w', encoding='utf8') as file:
                file.write(text)
        else:
            print("do not write exist file")

    def length(self):
        return len(self.lines)

    def getName(self):
        return self.name

lines = Lines("b1002.txt")
lines.setNumber(25).setSpaces(5).build()
lines.nextName().write()

print(f"make file {lines.getName()} with length:")
print(lines.length(), "=", lines.number, 'x ( 1 +', lines.spaces, ")")
input()

