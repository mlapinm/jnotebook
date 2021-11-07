
import re
import os
import writelines as wl

class ModifyFiles:
    name = ''

    def __init__(self):
        self.name = ''
        self.frPath = ''
        self.toPath = ''
        self.prefix = ''
        self.postfix = ''
        self.prefixNext = ''
        self.postfixNext = ''
        self.firstIndex = 0
        self.max = 0
        self.modifyLineFun = self.modifyFun0
        self.modifyFun = self.modifyFun0

    def modifyFun0(self, a):
        b = a
        return b

    def getFrPath(self, frPath):
        self.frPath = frPath
        return self

    def getToPath(self, toPath):
        self.toPath = toPath
        return self

    def getIndexName(self, name):
        self.name = name
        match = re.search(r'([a-zA-Z]+)(\d+)(.+)', name)
        if match:
            self.prefix = match[1]
            self.postfix = match[3]
            self.prefixNext = self.prefix
            self.postfixNext = self.postfix
            self.firstIndex = int(match[2])
        return self

    def setPostfixNext(self, postfixNext):
        self.postfixNext = postfixNext
        return self

    def getInFiles(self, inFiles):
        if(self.frPath != ''):
            files0 = os.listdir(self.frPath)
        else:
            files0 = os.listdir()
        for f in files0:
            match = re.search(fr'{self.prefix}(\d+){self.postfix}', f)
            if match and int(match[1]) >= self.firstIndex:
                inFiles.append(f)

            self.max = len(inFiles)
        return self

    def setMax(self, max = 0):
        if max != 0:
            self.max = max


        return self

    def getOutFiles(self, outFiles):
        for i in range(self.firstIndex, self.firstIndex + self.max):
            outFiles.append(f'{self.prefixNext}{i:02d}{self.postfixNext}')
        return self

    def getInText(self, file):
        if(self.frPath != ''):
            return wl.read(self.frPath + '/' + file)
        else:
            return wl.read(file)

    def setOutText(self, file, text):
        if(self.toPath != ''):
            wl.write(self.toPath + '/' + file, text)
        else:
            wl.write(file, text)
        return self

    def removeEmpty(self, text):
        l = text.split('\n')
        l2 = list(filter(lambda e: len(e)>0, l))
        text2 = '\n'.join(l2)
        return text2

    def setModifyLine(self, fun=0):
        if fun == 0:
            self.modifyFun = self.modifyFun0
        else:
            self.modifyLineFun = fun

    def setModify(self, fun=0):
        if fun == 0:
            self.modifyFun = self.modifyFun0
        else:
            self.modifyFun = fun

    def modify(self, inName, outName):
        text = self.getInText(inName)

        # text2 = self.modifyFun(text0)

        lines = text.split('\n')
        linesOut = []
        for e in lines:
            lineOut = self.modifyLineFun(e)
            linesOut.append(lineOut)

        text4 = '\n'.join(linesOut)
        text6 = self.modifyFun(text4)


        self.setOutText(outName, text6)
        return self

    def toOneLine(self,  text):
        '''
        Hi and welcome
        back to the JavaScript games course. 
        '''
        text2 = text
        words = re.split(r'[\r\n ]', text)
        words = list(filter(lambda e: len(e.strip())!=0, words))
        text2 = ' '.join(words)

        # sentenses = re.split(r'[\.\!\?]', text2)
        # text2 = '\n'.join(sentenses)
        text2 = re.sub(r'([\.\!\?\,])', r'\1\n', text2)
        text2 = re.sub(r'([\.\!\?\,]\n) ', r'\1', text2)
        ## < 17 ,
        sentenses = re.split(r'\n', text2) 
        sents = []
        line = ''
        for e in sentenses:
            match = re.search(r'\,$', e)
            if match and len(e) < 17 and line == '':
                line = e   
            else:
                if (len(line)>0):
                    sents.append(line + ' ' + e)
                    line = ''
                else:
                    sents.append(e)
        text2 = '\n'.join(sents)

        return text2

    def addEmptyString(self,  text):
        text2  = text
        text2 = re.sub(r'\n', r'\n\n', text)

        return text2

    def dict(self, text):
        text2 = text
        words = re.split(r'[\.\,\n ]', text)
        words = list(map(lambda e: e.lower(), words))

        words = list(set(words))
        words = list(filter(lambda e: len(e)>3, words))
        words = list(filter(lambda e: not re.search(r'\'',e), words))
        words.sort()

        text2 = ' '.join(words)
        # n1 = len(words)
        # n1 = str(n1) + ' '
        # text2 = n1  + text2
        return text2


def modifyLine(text):
    text2 = text
    match = re.search(r'^\d+:\d+$', text)
    if match:
        text2 = ''
    return text2

def modifyText(text):
    mf = ModifyFiles()
    return mf.removeEmpty(text)    






