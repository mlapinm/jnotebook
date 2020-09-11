[srt to tab](#srt-to-tab)   
[1 translate](#1-translate)   
[2 mTranslateList](#2-mTranslateList)   
[3 mSubtToLl](#3-mSubtToLl)   
[4 file tab](#4-file-tab)   
[context](#context)   
[files without spacing](#files-without-spacing) 

## srt to tab
### 1 translate


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
    

### 2 mTranslateList


```python
def mPackLl(l):
    '''
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
[['0', '1', '2', '3'], ['4', '5', '6', '7']]   
    '''
    max = 3000
    ll = []
    l0 = []
    k = 0
    klen = 0
    while k < len(l):
        v = l[k]
        l0.append(v)
        klen += len(v)
        if klen > max or len(l)-1 == k :
            ll.append(l0)
            l0 = []
            klen = 0
        k += 1
    return ll


def mUnpackLl(ll):
    '''
    [['0', '1', '2', '3'], ['4', '5', '6', '7']]
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    '''
    l2 = []
    for v in ll:
        for v2 in v:
            l2.append(v2)
    return l2

def translateListSmall(lien):
    sen = '\n'.join(lien)
    sru = translate(sen)
    liru = sru.split('\n')
    return liru

def mTranslateList(lien):
    llen = mPackLl(lien)
    liru = []
    llru = []
    for vlien in llen:
        vliru = translateListSmall(vlien)
        llru.append(vliru)
    liru = mUnpackLl(llru)
    return liru

l = ['dog', 'cat']
l4 = mTranslateList(l)
print(l4)
```

    ['собака', 'кошка']
    

### 3 mSubtToLl


```python
import re

sen = '''
sda
adaad

dada
26
00:01:42,670 --> 00:01:46
So definitely Cisco certifications are the
way to go.
27
00:01:46,590 --> 00:01:52
So I welcome you into this complex world
which I'm gonna turn easy for you.
3
00:00:07,490 --> 00:00:12
There's your first lecture, your first
step into the Cisco world,
4
00:00:12,960 --> 00:00:17
taking the CCNA 200-120 certification
exam.
5
00:00:17,620 --> 00:00:22
Which is your CCNA routing and switching'''
sss = 'exam definitely,'
def mSubtToLl(ll, sen):
    '''
    sen => [[],[]]
[1, 
00:00:00,010 --> 00:00:00, 
["HP and the Sorcerer's Stone 2001 20:26:45 12.05.2013"], 
[]]    
    '''
    lien = sen.split('\n')
    v0 = ''
    v1 = ''
    v1prev = ''
    v2 = ''
    v2prev = ''
    v3 = []
    v3prev = []
#     ll = []
    l0 = ['', '', [], []]
    header = []
    for i in range(0, len(lien)):
        ven = lien[i]
    #     print(ven)
        match1 = re.search(r'\d\d:\d\d:\d\d.+\d\d:\d\d:\d\d', ven)
        match2 = re.search(r'^\d+\s*$', ven)
        if match1:
            v3prev = v3
            v2 = match1[0]
            if len(v2prev) > 0:
                l0[0], l0[1], l0[2] = v1prev, v2prev, v3
                ll.append(l0[:])
    #             print(v1prev, v2prev, v3)
            v2prev = v2
            v3 = []
            pass
        elif match2:
            v1prev = v1
            v1 = match2[0]
            pass
        else:
            ven = ven.strip()
            if len(ven)>0:
                v3.append(ven)
    #         print(ven)
            pass
        if len(lien)-1 == i:
            l0[0], l0[1], l0[2] = v1, v2, v3
            ll.append(l0)
    #         print(v1,v2,v3)
        if len(v1) == 0 and len(v2) == 0:
            header.append(ven)
#     print(header)

# 
def mLlToContents(ll, vl):
    l0 = [v[2] for v in ll]
    l = []
    for v in l0:
        for v2 in v:
            l.append(v2)

    for v in l:
    #     print(v)
        pass

    ip = 0
    vp = l[ip]
#     l4 = []
    bappend = False
    for i in range(1, len(l)):
        match = re.search(r'[a-zA-Z]$', vp)
        if len(vp) > 120 or not match:
            vl.append(vp)
            vp = l[i]
            bappend = True
        else:
            vp += ' ' + l[i]
            bappend = False
    if bappend:
        vl.append(l[-1])
    else:
        vl.append(vp)

# 

def mSrtToTab(fen="x09en.txt", fru="x09ru.txt"):
    sen = ''
    with open(fen) as fh:
        sen = fh.read()
#     print(sen)
    ll = []
    mSubtToLl(ll, sen)
    lcontents = []
    mLlToContents(ll, lcontents) 
#     print(333, ll)
    lcontentsru = mTranslateList(lcontents)

    liru = []
    liru.append(f'{fru}  \n\n')
    liru.append('__|__')
    liru.append('--|--')
    if len(lcontentsru) == len(lcontents):
        for i in range(len(lcontents)):
            liru.append(f'{lcontents[i]}|{lcontentsru[i]}')
            pass
    sru = '\n'.join(liru)
    
#     print(sru)
    with open(fru, 'w', encoding='utf8') as fh:
        fh.write(sru)

        
def mSrtToTabList(lfen, lfru):
#     print(lfen)
#     print(len(lfen), len(lfru))
    if len(lfen) != len(lfru):
        return
    for i in range(len(lfen)):
        mSrtToTab(lfen[i], lfru[i])
        print(lfru[i])
    
lfen = ['x09en.txt', 'x09en.txt']
lfru = ['x09ru.txt', 'x09ru.txt']
mSrtToTabList(lfen, lfru)

```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-2-a45b8695235e> in <module>
        148 lfen = ['x09en.txt', 'x09en.txt']
        149 lfru = ['x09ru.txt', 'x09ru.txt']
    --> 150 mSrtToTabList(lfen, lfru)
    

    <ipython-input-2-a45b8695235e> in mSrtToTabList(lfen, lfru)
        143         return
        144     for i in range(len(lfen)):
    --> 145         mSrtToTab(lfen[i], lfru[i])
        146         print(lfru[i])
        147 
    

    <ipython-input-2-a45b8695235e> in mSrtToTab(fen, fru)
        120     mLlToContents(ll, lcontents)
        121 #     print(333, ll)
    --> 122     lcontentsru = mTranslateList(lcontents)
        123 
        124     liru = []
    

    NameError: name 'mTranslateList' is not defined






```python

```

## 4 file tab


```python
import os

def mGetList(l):
    cwd = r'D:\mailCloud\prjother\tmp\1'
    l4 = os.listdir(cwd)
    for v in l4:
        match1 = re.search(r'^a\d+_', v)
        match2 = re.search(r'^a00_', v)
        if match1 and not match2:
            l.append(v)
    def func(v):
        match = re.search(r'^a(\d+)_', v)
        s = '0'
        if match:
            s = match[1]
#         print(s)
        return int(s)
    l.sort(key = func) 
    
lien = []
mGetList(lien)
liru = []
for v in lien:
    s4 = re.sub(r'^a', 'c', v)
    s4 = re.sub(r'.srt$', '.md', s4)
    liru.append(s4)
#     print(s4)
    pass

# mSrtToTabList()

def mListSrtTab(lien, liru):
#     print(len(lien),len(liru))
    if len(lien) != len(liru):
        return
    cwd = r'D:\mailCloud\prjother\tmp\1'
#     print(cwd)
    lfnen = [cwd + '\\' + v for v in lien]
    lfnru = [cwd + '\\' + v for v in liru]

    mSrtToTabList(lfnen, lfnru)
    pass

# print(len(l), len(liru))
# l = list(filter(lambda v: re.search(r'^.\d\d\d_', v), l))
# liru = list(filter(lambda v: re.search(r'^.\d\d\d_', v), liru))
# print(lien)
mListSrtTab(lien, liru)
# print(l,liru)
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-1-e85a9b660a9e> in <module>
         19 
         20 lien = []
    ---> 21 mGetList(lien)
         22 liru = []
         23 for v in lien:
    

    <ipython-input-1-e85a9b660a9e> in mGetList(l)
          5     l4 = os.listdir(cwd)
          6     for v in l4:
    ----> 7         match1 = re.search(r'^a\d+_', v)
          8         match2 = re.search(r'^a00_', v)
          9         if match1 and not match2:
    

    NameError: name 're' is not defined


## to file srt


```python
import os

s = '''
So  definitely Cisco certifications are the
way to go.
'''

def mBreak(s):
    '''
So  definitely Cisco certifications are the
way to go.
=>
['So definitely Cisco certifications are the', 'way to go.']    
    '''
    max = 54
    s = s.strip()
    resl = []
    l = s.split(' ')
    l = list(filter(lambda v: len(v)>0, l))
    sadd = l[0]
    for i in range(1, len(l)):
        v = l[i]
        v = re.sub(r'\n', ' ', v)
        if len(sadd)+len(v)+1 < 44:
            sadd += " " + v
        else:
            resl.append(sadd)
            sadd = v
    if len(sadd) > 0:
        resl.append(sadd)
    return resl

def mLlToOneStr(ll, l):
    '''
[['0','1',['21','22','23']], ['0','1',['24','25','26']]]
=>
['21 22 23', '24 25 26']
    '''
    for v in ll:
        v2 = ' '.join(v[2])
        l.append(v2)
    pass

def mSrtToSrt(fen="x09en.txt", fru="x09ru.txt"):
    '''
    3
    00:00:07,490 --> 00:00:12
    There's your first lecture, your first
    step into the Cisco world,
    =>
    3
    00:00:07,490 --> 00:00:12
    There's your first lecture, your first
    step into the Cisco world,
    Это твоя первая лекция, твой первый шаг в
    мир Cisco,

    '''    
    sen = ''
    with open(fen) as fh:
        sen = fh.read()
#     print(sen)
    ll = []
    mSubtToLl(ll, sen)
    lcontents = []
    mLlToOneStr(ll, lcontents) 
    lcontentsru = mTranslateList(lcontents)
#     print(333, lcontentsru)

    liru = []
    liru.append(f'{fru}  \n\n')
    if len(ll) == len(lcontentsru):
        for i in range(len(lcontentsru)):
            liru.append(ll[i][0])
            liru.append(ll[i][1])
            for v in ll[i][2]:
                liru.append(v)
            lv = mBreak(lcontentsru[i])
            for v2 in lv:
                liru.append(v2)
            pass
    sru = '\n'.join(liru)
    
#     print(sru)
    with open(fru, 'w', encoding='utf8') as fh:
        fh.write(sru)

def mSrtToSrtList(lfen, lfru, cwd1 = '.', cwd2 = '.'):
    if len(lfen) != len(lfru):
        return
    for i in range(len(lfen)):
        mSrtToSrt(f'{cwd1}\\{lfen[i]}', f'{cwd2}\\{lfru[i]}')
        
# lfen = ['x09en.txt', 'x09en.txt']
# lfru = ['x09ru.txt', 'x09ru.txt']
# cwd1 = r''
# cwd2 = r''
# mSrtToSrtList(lfen, lfru)

def mGetLists(lien, liru, cwd = '.'):
#     print(cwd)
    l4 = os.listdir(cwd)
#     print(l4)
    for v in l4:
        match1 = re.search(r'^a\d+_', v)
        match2 = re.search(r'^a00_', v)
        if match1 and not match2:
            lien.append(v)
    def func(v):
        match = re.search(r'^a(\d+)_', v)
        s = '0'
        if match:
            s = match[1]
#         print(s)
        return int(s)
    lien.sort(key = func) 
    for v in lien:
        s4 = re.sub(r'^a', 'c', v)
        s4 = re.sub(r'.srt$', '.srt', s4)
        liru.append(s4)
    
    
    
    
cwd1 = r'D:\mailCloud\prjother\tmp\1'
cwd2 = r'D:\mailCloud\prjother\tmp\2'
lien = []
liru = []
mGetLists(lien, liru, cwd1)
# print(liru)    
mSrtToSrtList(lien, liru, cwd1, cwd2)


```


```python


```


```python

```

### context




```python
def mSpace(s):
    '''
    [a a](b b) => [a a](b_b)
    '''
    res = ''
    l = s.split('\n')
    l4 = []
    for v in l:
        s8 = v
        match = re.search(r'\[.+\]\((.+)\)', v)
        if match:
            s4 = match[1] if match else ''
            s6 = s4.replace(' ', '_')
            s4 = s4.replace(r'(', r'\(')
            s4 = s4.replace(r')', r'\)')
            s8 = re.sub(s4, s6, v)
        l4.append(s8)
    res = '\n'.join(l4)
    return res


cwd = r'D:\mailCloud\prjother\tmp\1'
fn = 'a00_context.md'
sc = ''
with open(f'{cwd}\\{fn}') as fh:
    sc = fh.read()
sc4 = re.sub(r'a(\d+_)', r'c\1', sc)
sc4 = re.sub(r'.srt', r'.md', sc4)

sc4 = mSpace(sc4)
print(len(sc4))
# print(sc4)
with open(f'{cwd}\\c00_context.md', 'w', encoding='utf8') as fh:
    fh.write(sc4)
    
```

    9422
    

## files without spacing


```python
## files without spacing

import shutil

cwd1 = r'D:\mailCloud\prjother\tmp\1'
cwd4 = r'D:\mailCloud\prjother\tmp\4'
l = os.listdir(cwd)
l = list(filter(lambda v: re.search(r'^c', v), l))
def func(v):
    match = re.search(r'^c(\d+)_', v)
    s = '0'
    if match:
        s = match[1]
#         print(s)
    return int(s)


l.sort(key = func)
l4 = [v.replace(' ', '_') for v in l]
for i in range(len(l4)):
    s1 = f'{cwd1}\\{l[i]}'
    s4 = f'{cwd4}\\{l4[i]}'
#     print(s4)
    shutil.copy(s1, s4)
    
print(len(l4))
```

    157
    


```python

```
