
'''


'''
import re
import json

from deep_translator import GoogleTranslator as google_translator
translator = google_translator(source='auto', target='ru')  

class Lines:
    '''
    nextName, readLines, read, write, writeLines, 
	, , ,
    '''
    name = ''
    nameMask = ''
    lines = []
    text = ""
    obj = {
    "number": "",
    "type": "",
    "asks": [
    ],
	"img":[
	],
	"sentence": [
	],
    "listing":[],
    "responses": [],
    "variants": [
    ]
        }
    
    objs = []


    def __init__(self, name):
        self.name = name
        self.nameMask = self.nextName(self.name)

    def mObjText(self, objs):
        k = 0
        text = json.dumps([ob for ob in objs], indent=2, ensure_ascii=False)
        return text


    def mNumObjs(self, obj, n, objs):
        for i in range(n):
            obj1 = obj.copy()
            objs.append(obj1)
        pass    

    def nextName(self, name):
        name2 = ''
        patten = r'^\w\d\d'
        match = re.search(patten, name)
        name2 = match[0] if match else 'w000'
        return name2

    def readLines(self, name, items):
        with open(name, 'r', encoding='utf8') as file:
            for line in file:
                line2 = line.strip()
                len(line2) == 0 or items.append(line2)
       

    def read(self, name):
        lines = []
        self.readLines(name, lines)
        text = '\n'.join(lines)
        return text

    def write(self, name, text):
        with open(name, 'w', encoding='utf8') as file:
            file.write(text)

    def writeLines(self, name, items):
        text = '\n'.join(items)
        with open(name, 'w', encoding='utf8') as file:
            file.write(text)

    def mTextToObjs(self, textObjs, objs):
        objs2 = json.loads(text2)
        for e in objs2:
            objs.append(e)
        pass

    def getQuantity(self, vText):
        quantity = 0
        lines = vText.split('\n')
        for e in lines:
            pat_asks = r'^(\d+):(.*)'
            match = re.search(pat_asks, e)
            if match and match.lastindex > 1:
                quantity += 1
                continue
        return quantity

    def mTranslate(self, vStrings, vCouples):
        textEn = '\n'.join(vStrings)
        textRu = translator.translate(textEn)
        ruStrings = textRu.split('\n')
        k = 0
        for e in ruStrings:
            vCouples.append([vStrings[k], e])
            k += 1
        pass

    def mTranslateBig(self, vStrings, vCouples):
        max = 3600
        allParts = []
        sum = 0
        k = 0
        parts = []
        for e in vStrings:
            sum += len(e)
            parts.append(e)
            if sum > max or k == len(vStrings) - 1:
                allParts.append(parts)
                sum = 0
                parts = []
            k += 1

        for parts in allParts:
            self.mTranslate(parts, vCouples)


            pass



        pass

    def mCoupleToObj2(self, vObjs, vCouples, vObjs2):
        i = 0

        for o in vObjs:
            o2 = {}
            keys = vObjs[0].keys()
            for k in keys:
                if not isinstance(o[k], list):
                    if len(o[k]) > 0 and o[k] == vCouples[i][0]:
                        o2[k] = vCouples[i][1]
                        # print(o[k], i, vCouples[i])
                        i += 1
                        # vStrings.append(o[k])
                        pass
                    pass
                else:
                    o2[k] = []
                    for e in o[k]:
                        if len(e) > 0 and e == vCouples[i][0]:
                            o2[k].append(vCouples[i][1])
                            # print(e, i, vCouples[i])
                            i += 1

                            # vStrings.append(e)
                            pass
            vObjs2.append(o2)

        pass

        # print(vCouples)
        # print(vObjs2)


        pass

    def mObjsToPlain(self, vObjs, vStrings):
        # max = len(vObjs)
        for o in vObjs:
            keys = vObjs[0].keys()
            for k in keys:
                if not isinstance(o[k], list):
                    if len(o[k]) > 0:
                        vStrings.append(o[k])
                    pass
                else:
                    for e in o[k]:
                        if len(e) > 0:
                            vStrings.append(e)

        pass
        



    def mAppendToObjs(self, vText, vObjs):
        lines = vText.split('\n')
        k = 0
        obj = objs[k]
        for e in lines:
            pat_asks = r'^(\d+):(.*)'
            match = re.search(pat_asks, e)
            if match and match.lastindex > 1:
                obj = objs[k]
                num = match[1]
                text = match[2].strip()
                obj['number'] = num
                obj['asks'] = [text]
                k += 1
                continue


            pat_variants = r'^[A-F]\.(.*)'
            match = re.search(pat_variants, e)
            if match and match.lastindex > 0:
                text = match[1].strip()
                obj['variants'].append(text)
                continue

            pat_img = r'^img.*'
            match = re.search(pat_img, e)
            if match :
                text = match[0].strip()
                obj['img'].append(text)
                continue

            pat_listing = r'^L\.(.*)'
            match = re.search(pat_listing, e)
            if match:
                text = match[1].strip()
                obj['listing'].append(text)
                continue

            pat_responses = r'^P([A-F]?[A-F]?[A-F]?[A-F]?)\.$'
            match = re.search(pat_responses, e.strip())
            if match:
                text = match[1].strip()
                for a in list(text):
                    obj['responses'].append(a)
                continue

            pat_question = r'^Q(\d\d?\d?)\.$'
            match = re.search(pat_question, e.strip())
            if match:
                text = match[1].strip()
                obj['type'] = text
                continue


            obj['sentence'].append(e)

        pass



name = 'g02a1.txt'
lines = Lines(name)
lines.lines = []
lines.readLines(name, lines.lines)
text0 = '\n'.join(lines.lines)

lines.objs = []
num = lines.getQuantity(text0)
lines.mNumObjs(lines.obj, num, lines.objs)
# print(lines.objs)
text = lines.mObjText(lines.objs)
lines.write(lines.nameMask + "b1json.txt", text)

text2 = lines.read(lines.nameMask + "b1json.txt")



objs = []
lines.mTextToObjs(text2, objs)

lines.mAppendToObjs(text0, objs)

lines.write(lines.nameMask + "b2json.txt", text)

a = False
a = True
if a:
    plainStrings = []
    lines.mObjsToPlain(objs, plainStrings)
    couples = []
    lines.mTranslateBig(plainStrings, couples)
    ruObj = []
    lines.mCoupleToObj2(objs, couples, ruObj)

    ruObjText = lines.mObjText(ruObj)
    lines.write(lines.nameMask + 'b2jsonr.txt', ruObjText)


objText = lines.mObjText(objs)
lines.write(lines.nameMask + 'b2json.txt', objText)



# print(couples)
# print(objs[0])
# print(ruObjText[-12:])
print(objText[-12:])


