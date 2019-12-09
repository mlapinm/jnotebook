#nlist.py
from chardet.universaldetector import UniversalDetector

def getcod(file):
    detector = UniversalDetector()
    with open(file, 'rb') as fh:
        for line in fh:
            detector.feed(line)
            if detector.done:
                break #https://python-scripts.com/question/7401
        detector.close()
    return detector.result['encoding']
    
#------------------------------------------

def absNum(num,count):
    if num<0: num += count + 1
    if num<1 or num>count: return 0
    return num
        
#-- list class with natural index and pagination

class nlist(list):
    def __init__(self, ls, ch_size = 0):
        list.__init__(self, ls)
        self.chunk_size = abs(ch_size)
        self.chunk_num = 1
    
    def __getitem__(self, key):
        if type(key) == int:
            key = absNum(key, len(self))
            if key == 0: return list.__getitem__(self, len(self))
            return list.__getitem__(self, key-1)
                                   
    def __delitem__(self, key):
        if type(key) == int:
            key = absNum(key, len(self))
            if key == 0: list.__delitem__(self, len(self))
            list.__delitem__(self, key - 1)

    def getchunkNum(self):
        return self.chunk_num
    
    def getChunkSize(self):
        return self.chunk_size if self.chunk_size >0 else len(self)
                                    
    def setChunkSize(ch_size):
        self.chunk_size = abs(ch_size)
        
    def countChunk(self):
        if self.chunk_size < 1: return 1
        return (len(self) + self.chunk_size -1)// self.chunk_size
        
    def getChunk(self, num=0, step=0, reverse=0):
        if len(self) == 0: return nlist([])
        
        if self.chunk_size>0:
            chunk_size = self.chunk_size
            chunk_count =(len(self) + chunk_size - 1)//chunk_size
        else:
            chunk_count=1
            chunk_size = len(self)
        
        if num == 0: num= self.chunk_num
        num += step
        if num <0: num+= chunk_count + 1
        if num <1:
            self.chunk_num = 1
        elif num > chunk_count:
            self.chunk_num = chunk_count
        else:
            self.chunk_num = num
            
        if reverse:
            el_num=(self.chunk_num-1)*chunk_size
            chunk = self[el_num: el_num + chunk_size]
            return nlist(chunk)
            
import codecs

file_name = 'tmp.txt'
ls = [line.rstrip() for line in codecs.open(file_name,'r','utf-8')]

nls = nlist(ls)

# print(ls[-1])
nls = nlist(ls, 6)
# print(nls)
chank = nls.getChunk(1)
print(chank)
