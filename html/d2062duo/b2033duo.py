
import re

from google_trans_new import google_translator  

translator = google_translator()  
text = 'this is a pen'
translate_text = translator.translate(text)  
print(translate_text)

'''

'''


class Lines:
    name = ''
    nameWrite = ''
    lines = []
    rusEns = []
    textJson = ''

    def __init__(self, name):
        self.name = name
        self.nextName(self.name)

    def makeTextJson(self):

        self.translateList()

        # self.rusEns.append(['1', '2'])



        print(self.rusEns)

        pass

    def translateList(self):
        l = self.lines
        ll = self.rusEns
        l1 = list(map(lambda x: x.replace('.', '') + '.', l))
        text = '\n\n'.join(l1)
        print(text)
        textRu = 'rurururu'
        text = 'pen'
        textRu = translator.translate(text, lang_tgt='ru')
        lru = textRu.split('.')
        count = min(len(l), len(lru))
        for i in range(count):
            ll.append([self.addBreak(l[i]), lru[i].strip()])
        # print(textRu)
        # print(ll )

        print(ll)

        pass


    def nextName(self, name):
        '''
        c2022t.txt => c2022json.txt
        '''
        name = self.name
        name2 = 'c1022json.txt'
        match = re.search(r'(^\w\d\d\d\d)[a-zA-Z]+', name)
        if match and len(match.groups()) > 0:
            name2 = name.replace(match[0], match.groups()[0] + 'json')
        self.nameWrite = name2

    def read(self):
        with open(self.name, 'r', encoding='utf8') as file:
           for line in file:
                 line2 = line.strip()
                 len(line2) == 0 or self.lines.append(line2)

    def write(self, text):
        with open(self.nameWrite, 'w', encoding='utf8') as file:
            file.write(text)

    def addBreak(self, text):
        '''
        doesn't => does n't
        '''
        text1 = re.sub("n't",  " n't", text)
        text2 = re.sub("[.,?!]", '', text1)
        return text2



    pass


lines = Lines('c2022t.txt')
lines.read()
# lines.makeTextJson()

lines.write('444')

# print(lines.lines)


