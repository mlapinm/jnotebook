### test

[googletrans](https://www.thepythoncode.com/article/translate-text-in-python)  
pip install googletrans


```python
from googletrans import Translator, constants
from pprint import pprint
# init the Google API translator
translator = Translator()

def translate(text):
    translation = translator.translate(text, src="en", dest="ru")
#     print(f"{translation.origin} ({translation.src}) --> {translation.text} ({translation.dest})")    return translation
    return translation.text

text = "This is a pen."    
translation = translate(text)   
print(translation)

```

    Это ручка.
    


```python
import os

import requests
import json

def translate(world):
    payload = {
       'key': r'trnsl.1.1.20190909T123034Z.91e60547a2d5b3f5.bbf98325fde572ca3205b83b31a9034d9ff08f94',
       'text':'additional',
       'lang':'en-ru'
    }
    payload['text']=world
    url = 'https://translate.yandex.net/api/v1.5/tr.json/translate'
    r = requests.post(url, data=payload)
#     print(r)
    answer = json.loads(r.text)
    word = answer['text'][0] if len(answer['text'])>0 else ''
    return word

value = 'bad'
result = translate(value)
print(value, result)

```

    bad плохо
    

### sentence


```python

import re 

def smallLetter(s):
# ```
# 'aa'=>True, 'Aa'=>Fale
# ```    
    res = False
    x = re.search(r'^[^A-Z]', s)
#     print(x, s)
    if x:
      res = True
    return res

def toListSentence(s):
    '''
    'aa. bb. cc! dd.' => ['aa.', 'bb.', 'cc!', 'dd.']
    '''
    res = []
    s = re.sub(r'\.\.\.','---',s)
    l = re.split(r'([\.\!\?])[^\"]', s)
    l2 = ['']
    for i in l:
       x = re.search(r'^[\.\!\?]$', i)
       if x:
            l2[len(l2)-1] += i
       else:
            l2.append(i)
    for i in l2:
        s = i.strip()
        s = re.sub(r'---','...',s)
        if len(s)>0:
            res.append(s)
    return res

def addStrCount(sall, num, sv):
    '''
    in sall[num] += sv
    len(sall[num]) < max
    return True if append
    return False in not append
    '''
    max = 500
    if len(sall[num])+len(sv) < max:
        sall[num] += f"{sv}\n"
        return True
    else:
        return False

def mListRefact(lin, lout):
    '''
    ['1','2','3','4','5'] => ['12','34','5']
    '''
    lout.append('')
    num = 0
    for i,v in enumerate(lin):
        res = addStrCount(lout, num, v)
        if not res:
            lout.append('')
            num +=1
            res = addStrCount(lout, num, v)
            if not res:
                break
                
def mListRefactBack(lin, lout):
    for i,v in enumerate(lin):
#        l = toListSentence(v)
       l = v.split('\n')
       l = list(filter(lambda v: len(v)>0, l))
       for v2 in l:
            lout.append(v2)
            
            

def translateList(lienVal, l2en, l2ru):
    '''
    lien => l2en, l2ru
    '''
    lien = []
    mListRefact(lienVal, lien)
    liru = []
    for v in lien:
        s = translate(v)
        liru.append(s)
###################################        
#     print(11,lien)
    mListRefactBack(lien, l2en)
    mListRefactBack(liru, l2ru)

def enru():

    lien = []
    with open("x02en.txt", encoding="utf8") as fileEn:
        for i in fileEn:
            lien.append(i.strip())


    lien2 = []
    lien2.append(lien[0])
    for i in range(1,len(lien)):
    #   print(lien2)  
      if not smallLetter(lien[i]):  
        lien2.append(lien[i])
      else:
        lien2[len(lien2)-1] += " " + lien[i]

    lien3 = []
    for i in lien2:
        l = toListSentence(i)
        for j in l:
            lien3.append(j)

    
    
#     liru2 = []        
#     for i in lien3:
#         s = translate(i)
#         liru2.append(s)

    lien4 = [] 
    liru2 = []
    translateList(lien3, lien4, liru2)

    with open("x02en.txt", "w", encoding="utf8") as fileEn:
      fileEn.write('\n'.join(lien3))   # lien4

    with open("x02ru.txt", "w", encoding="utf8") as fileEn:
      fileEn.write('\n'.join(liru2))


    print(len(lien), len(lien3))

enru()
    

```

    2012 2012
    

## Translate Word List


```python
s = '''
[1](https://www.youtube.com/watch?v=ZNznfwTbN7I)  

Top 20 British English Verbs 1
woman
[2](https://www.youtube.com/watch?v=ZNznfwTbN7I)  

Top 20 British English Verbs 1
woman
'''
```


```python
l = []
ll = []
l.append(3)
l.append(4)
ll.append(l)
l =[]
l.append(3)
l.append(4)
ll.append(l)
ll[0][0] = [5]
print(ll)
```

    [[[5], 4], [3, 4]]
    


```python
def enru():
    lien = []
    len1 = 0
    len2 = 0
    with open("x02en.txt", encoding="utf8") as fileEn:
        for i in fileEn:
            lien.append(i.strip())
        len1 = len(lien)    
        lien = list(filter(lambda x: len(x.strip()) > 0, lien))   
        len2 = len(lien)    
    s = '\n'.join(lien)
    if len1 != len2:
        with open("x02en.txt", 'w', encoding="utf8") as fileEn:
            fileEn.write('\n'.join(lien))
    print(len1,len2)
#     print(s)
    
    s2 = translate(s)
    
    with open("x02ru.txt", "w", encoding="utf8") as fileEn:
      fileEn.write(s2)
    
enru()    
```

    11 11
    

### dict


```python
enru()
lien = []
with open("x02en.txt", encoding="utf8") as fileEn:
    for i in fileEn:
        lien.append(i.strip())
liru = []
with open("x02ru.txt", encoding="utf8") as fileRu:
    for i in fileRu:
        liru.append(i.strip())
ltab = []

ltab.append("_|_") 
ltab.append("--|--") 

# print(len(lien), len(liru))

if len(lien) == len(liru):
#     print(len(lien), len(liru))
    for i in range(len(lien)):
        s = lien[i]
        s += "|"
        s += liru[i]
        
        ltab.append(s)

s = ""
for i in ltab:
    s += i
    s += "\n"
    
with open("x02tab.md","w", encoding="utf8") as fileTab:
    fileTab.write(s)

    
# print(s)

```

    11 11
    


```python

```

## mMakeListSentence


```python
s = '''

'''
```

## don't reapet


```python
l = s.split('\n')
s2 = 'bicy1cle'
l2 = []
for v in l:
    v = v.strip()
    if len(v) != 0:
        if l2.count(v) == 0:
            l2.append(v)
s = '\n'.join(l2)
# print(s)     

```


```python


def mMakeSentence(s):
    '''
    sad => Sad.
    '''
    res = s.strip()
    if len(res)==0:
        return res
    res += '.' if res[-1] != '.' else ''
    res = res[0].upper() + res[1:]
    return res

def mMakeListSentence(s):
    l = s.split('\n')
    l = list(filter(lambda v: len(v)>0, l))
    l2 = list(map(mMakeSentence, l))
    [print(i) for i in l2]
s2 = '''
'''
mMakeListSentence(s)
```

## make links


```python
s = '''
n-strings in dir
CCNA
1 contexts
2 make srt_en_ru and tabs_en_ru
'''
```


```python
l = s.split('\n') 
l = [v.strip() for v in l]
l = list(filter(lambda v: len(v)>0, l))
l2 = []
for v in l:
    s1 = v
    s2 = v.replace(' ', '-')
    s3 = f'[{s1}](#{s2})   '
    print(s3)

# print(l)
```

    [n-strings in dir](#n-strings-in-dir)   
    [CCNA](#CCNA)   
    [1 contexts](#1-contexts)   
    [2 make srt_en_ru and tabs_en_ru](#2-make-srt_en_ru-and-tabs_en_ru)   
    

[Language Translation in Python](https://pythonprogramminglanguage.com/translate/)  
[habr Translate API.](https://qna.habr.com/q/16856)  
[Translate Python](https://translate-python.readthedocs.io/en/latest/tutorial.html)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  

