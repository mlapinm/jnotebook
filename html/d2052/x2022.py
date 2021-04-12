

import json

class Quiz:
    name = ""
    nameWrite = ""
    lines = []
    items = []
    textTest = ''
    quizs = []
    textJson = ''
    types = ['simple', 'input', 'drop', 'ordered']

    test = {
        "number": '',
        "type": [],
        "asks": [],
        "responses":[],
        "variants": []
        }


    def __init__(self, name):
        self.name = name
        self.nextName(self.name)
        self.read()
        self.mItems()
        self.mItemsConvert()
        self.mQuizs()
        self.mText()
        self.write()
        self.testing()


    def nextName(self, name):
        shortName = name[:name.find('.')]
        self.nameWrite = shortName + '.en'
 
    def read(self):
        with open(self.name, 'r', encoding='utf8') as file:
            for line in file:
                if line.find('==') == 0:
                    break
                self.lines.append(line.strip())

    def mItems(self):
        lines = []
        firstLine = []
        secondLine = []
        self.lines.append('')
        self.lines.append('')
        k = 0
        l = len(self.lines)
        for line in self.lines:
            if line.isnumeric() or k == l-1 :
                if len(firstLine) > 0 :
                    self.items.append(firstLine)
                firstLine = [line]
            elif line == '' and len(secondLine) > 0 :
                firstLine.append(secondLine)
                secondLine = []
                pass
            elif line != '':
                secondLine.append(line)
            k += 1



    def mItemsConvert(self):
        l = len(self.items)
        for i in range(l):
            self.items[i][1] = self.items[i][1][0]
            pass
        print(self.items)
       
    def testing(self):
        text = ''
        items = []
        for i in self.items:
            items.append(len(i))

        a = items[0]
        k = 1
        periods = []
        l = len(items)
        for i in range(1, l):
            if a != items[i]:
                periods.append(f'{a} - {k}')
                a = items[i]
                k = 1
            else:
                k += 1
            if i == l-1:
                periods.append(f'{a} - {k}')
           
        text = periods.__str__()
        self.textTest = text

    def mSimple(self, item):
        return item

    def mDrop(self, item):
        if len(item[3]) != len(item[4]) \
            or len(item[3]) < 2 \
            or len(item[3]) % 2 != 0:
            return item
        itemDrop = item.copy()
        s = item[3]
        s2 = [[s[::2][i]] + [s[1::2][i]] for i in range(len(s)//2)]
        itemDrop[3] = s2

        s = item[4]
        s2 = [s[:len(s)//2]]
        s2.append(s[len(s)//2:])
        itemDrop[4] = s2

        return itemDrop


    def mTypeItem(self, item):
        typeItem = []
        if item[1] == 'simple'\
        or item[1] == 'input'\
        or item[1] == 'ordered':
            typeItem = self.mSimple(item)
        elif item[1] == 'drop':
            typeItem = self.mDrop(item)

        return typeItem

    def mQuiz(self, item):
        typeItem = self.mTypeItem(item)
        test1 = self.test.copy()
        n = 0
        l = len(typeItem)
        for k,v in test1.items():
            if n > l-1:
                test1 = None
                break
            e = typeItem[n]
            test1[k] = e
            # print(k,v,e)
            n += 1
        # print(test1)
        return test1

    def mQuizs(self):
        for item in self.items:
            test1 = self.mQuiz(item)
            if test1:
                self.quizs.append(test1)
        # print(self.items)

    def mText(self):
        self.textJson = json.dumps([ob for ob in self.quizs], indent=2)

        # print(self.textJson)

    def write(self):
        with open(self.nameWrite, 'w', encoding='utf8') as file:
            file.write(self.textJson)


quiz = Quiz('x2022json.txt')
print(f'json write to file {quiz.nameWrite}')
print(quiz.textTest)
input()




