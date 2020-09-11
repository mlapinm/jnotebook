[translate to md file](#translate-to-md-file)   
[append cwd](#append-cwd)  
[Small packs](#Small-packs)   
[srt 1](#srt-1)   
[Yandex to dict](#Yandex-to-dict)   
[translate to quizelet](#translate-to-quizelet)   
[make links](#make-links)   
[n-strings in dir](#n-strings-in-dir)   
[CCNA](#CCNA)   
[1 contexts](#1-contexts)   
[2 make srt_en_ru and tabs_en_ru](#2-make-srt_en_ru-and-tabs_en_ru)   

## translate to md file
## 1.


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
    

## 2.


```python
# l = s.split('\n')
# l = list(filter(lambda v: len(v)>0, l))

l = ['1', '1', '3', '4', '2', '5', '6', '1', '7', '8', '1', '1', '7', '8']
l = list(filter(lambda v: len(v)>0, l))

def func(x):
    return int(x)<3


def listToX2List(l, func):
    '''
    [1,3,1,5] =>[[[1][3]],[[1],[5]]]
    '''
    ll = []
    l0 = []
    l1 = []
    l01 = []
    lt = []
    k = 0
    # print(l)
    for i, v in enumerate(l):
        v = v.strip()
        if func(v):
    #         print(ll)
            l0.append(v)
            l01.append(l0)
            l01.append(lt)
            if len(l1)>0 and k>0:
                ll[k-1][1] = l1
                pass
            ll.append(l01)
            l0 = []
            l1 = []
            l01 = []
            k +=1
        else:
            if len(v.strip())>0:
                l1.append(v)
        if len(l)-1 == i and len(l1)>0:
#             print(k,l1, ll)
            ll[k-1][1] = l1
            pass
    return ll

ll = listToX2List(l, func)
print(ll)
```

    [[['1'], []], [['1'], ['3', '4']], [['2'], ['5', '6']], [['1'], ['7', '8']], [['1'], []], [['1'], ['7', '8']]]
    

## 3.


```python
s = '''
[g25 Learn British English with Video - 5 Must-Know British English Words 2](https://www.youtube.com/watch?v=aBNmtHiBPDg)  


5 Must-Know English Words 2
man
love
woman

[g24 Learn British English with Video - 5 Must-Know British English Words 1](https://www.youtube.com/watch?v=qqS6RRV8UGc)  


5 Must-Know English Words 1
duckling 

'''

```


```python
import re

l = s.split('\n')
l = list(filter(lambda v: len(v)>0, l))

def func(v):
    res = False
    match = re.search(r'\[.+\]\(.+\)', v)
    v2 = ''
    v2 = match[0] if match else ''
    if len(v2) > 0:
        res = True
    return res

def translate2(s):
    return s

def translateListSmall(lien):
    sen = '\n'.join(lien)
    sru = translate(sen)
    liru = sru.split('\n')
    return liru

def translateList(lien):
    llen = mPackLl(lien)
    liru = []
    llru = []
    for vlien in llen:
        vliru = translateListSmall(vlien)
        llru.append(vliru)
    liru = mUnpackLl(llru)
    return liru
    
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

def mContentAndTabs(x08en = 'x08en.txt', x08ru = 'x08ru.txt'):
    text = ''
    with open(x08en,encoding='utf8') as file:
        text = file.read()
#     print(text)
    
    l = text.split('\n')
    
    ll = listToX2List(l, func)
#     ll.reverse()
#     print(ll)
    l1 = []
    l2 = []
    for v in ll:
        s2 = v[0][0]
        match = re.search(r'\[(.+)\]', s2)
        s3 = match[1] if match else ''
        s4 = s3.replace(' ','-')
        s4 = s4.replace(':','')
        s4 = s4.replace('(','')
        s4 = s4.replace(')','')
        s4 = s4.replace(',','')
        s4 = s4.replace('|','')
        s4 = s4.replace("'",'')
        s4 = s4.replace("’",'')
        s5 = f'[{s3}](#{s4})  '
        l1.append(s5)
        l2.append(f'## {s3}')
        l2.append(f'{s2}   ')
        lien = v[1]
        
        liru = translateList(lien)
        
        if len(lien)>0:
            print(len(lien), len(liru))
            if len(lien) == len(liru):
                l2.append('  ')
                l2.append('  ')
                l2.append('__|__')
                l2.append('--|--')
                for i, v in enumerate(lien):
                    s2 = f'{v}|{liru[i]}'
                    s2 = re.sub(r'^-', '', s2)
                    l2.append(s2.strip())
                l2.append('  ')
                l2.append('  ')
        pass
    l3 = [v for v in l1]
    l3.append('  ')
    for v in l2:
        l3.append(v)
        pass
    for v in l3:
#         print(v)
        pass
    text2 = '\n'.join(l3) 
    with open(x08ru,"w",encoding='utf8') as file:
        file.write(text2)
    print(len(l3))

mContentAndTabs()    
# print(l1)
```

    44 44
    55 55
    62 62
    95 95
    48 48
    102 102
    51 51
    52 52
    80 80
    64 64
    76 76
    68 68
    69 69
    49 49
    72 72
    1123
    

## append cwd


```python
s = '''

[Friends: Ross Falls into a Grave at Nana’s Funeral (Season 1 Clip) | TBS](#Friends-Ross-Falls-into-a-Grave-at-Nanas-Funeral-Season-1-Clip--TBS)  
[Friends: Chandler’s Shocked that People Assume He’s Gay (Season 1 Clip) | TBS](#Friends-Chandlers-Shocked-that-People-Assume-Hes-Gay-Season-1-Clip--TBS)  
[Friends: Ross Gets Mauled by Cat (Season 1 Clip) | TBS](#Friends-Ross-Gets-Mauled-by-Cat-Season-1-Clip--TBS)  
[Friends: Ross Almost Confesses his Feelings for Rachel (Season 1 Clip) | TBS](#Friends-Ross-Almost-Confesses-his-Feelings-for-Rachel-Season-1-Clip--TBS)  
[Friends: Joey Loses the Role of Al Pacino’s Butt (Season 1 Clip) | TBS](#Friends-Joey-Loses-the-Role-of-Al-Pacinos-Butt-Season-1-Clip--TBS)  
[Friends: Monica Doesn’t Think She Has OCD (Season 1 Clip) | TBS](#Friends-Monica-Doesnt-Think-She-Has-OCD-Season-1-Clip--TBS)  
[Friends: Ross Teaches Rachel How To Do Laundry (Season 1 Clip) | TBS](#Friends-Ross-Teaches-Rachel-How-To-Do-Laundry-Season-1-Clip--TBS)  
[Friends: Chandler Decides To Break Up With Janice (Season 1 Clip) | TBS](#Friends-Chandler-Decides-To-Break-Up-With-Janice-Season-1-Clip--TBS)  
[Friends: Ross gets rushed to the Emergency Room (Season 1 Clip) | TBS](#Friends-Ross-gets-rushed-to-the-Emergency-Room-Season-1-Clip--TBS)  
[Friends: Rachel Get her First Paycheck from Central Perk (Season 1 Clip) | TBS](#Friends-Rachel-Get-her-First-Paycheck-from-Central-Perk-Season-1-Clip--TBS)  
[Friends: Monica Breaks Up with Alan (Season 1 Clip) | TBS](#Friends-Monica-Breaks-Up-with-Alan-Season-1-Clip--TBS)  
[Friends: Chandler’s Caught Smoking (Season 1 Clip) | TBS](#Friends-Chandlers-Caught-Smoking-Season-1-Clip--TBS)  
[Friends: Ross reveals his Ex-Wife Carol is Pregnant (Season 1 Clip) | TBS](#Friends-Ross-reveals-his-Ex-Wife-Carol-is-Pregnant-Season-1-Clip--TBS)  
[Friends: Ross Asks Rachel Out for the First Time (Season 1 Clip) | TBS](#Friends-Ross-Asks-Rachel-Out-for-the-First-Time-Season-1-Clip--TBS)  
[Friends: Rachel Runs Out on her Wedding to Barry (Season 1 Clip) | TBS](#Friends-Rachel-Runs-Out-on-her-Wedding-to-Barry-Season-1-Clip--TBS)  
  



'''
```


```python
cwd = 'f0422friend.md'.strip()
appendOne = False
appendOne = True
l = s.split('\n')
# l = [re.sub('r^\[', '1. [', v) for v in l]
l2=[]
for v in l:
    v2 = ''
    if appendOne:
        v2 = re.sub(r'^\[', '1. [', v)
    if len(v2)>0:
        l2.append(v2)
    else:
        l2.append(v)
s2 = '\n'.join(l2)
s3 = re.sub(r']\(#',f']({cwd}#', s2)

print(s3)
```

    
    
    1. [Friends: Ross Falls into a Grave at Nana’s Funeral (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-Falls-into-a-Grave-at-Nanas-Funeral-Season-1-Clip--TBS)  
    1. [Friends: Chandler’s Shocked that People Assume He’s Gay (Season 1 Clip) | TBS](f0422friend.md#Friends-Chandlers-Shocked-that-People-Assume-Hes-Gay-Season-1-Clip--TBS)  
    1. [Friends: Ross Gets Mauled by Cat (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-Gets-Mauled-by-Cat-Season-1-Clip--TBS)  
    1. [Friends: Ross Almost Confesses his Feelings for Rachel (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-Almost-Confesses-his-Feelings-for-Rachel-Season-1-Clip--TBS)  
    1. [Friends: Joey Loses the Role of Al Pacino’s Butt (Season 1 Clip) | TBS](f0422friend.md#Friends-Joey-Loses-the-Role-of-Al-Pacinos-Butt-Season-1-Clip--TBS)  
    1. [Friends: Monica Doesn’t Think She Has OCD (Season 1 Clip) | TBS](f0422friend.md#Friends-Monica-Doesnt-Think-She-Has-OCD-Season-1-Clip--TBS)  
    1. [Friends: Ross Teaches Rachel How To Do Laundry (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-Teaches-Rachel-How-To-Do-Laundry-Season-1-Clip--TBS)  
    1. [Friends: Chandler Decides To Break Up With Janice (Season 1 Clip) | TBS](f0422friend.md#Friends-Chandler-Decides-To-Break-Up-With-Janice-Season-1-Clip--TBS)  
    1. [Friends: Ross gets rushed to the Emergency Room (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-gets-rushed-to-the-Emergency-Room-Season-1-Clip--TBS)  
    1. [Friends: Rachel Get her First Paycheck from Central Perk (Season 1 Clip) | TBS](f0422friend.md#Friends-Rachel-Get-her-First-Paycheck-from-Central-Perk-Season-1-Clip--TBS)  
    1. [Friends: Monica Breaks Up with Alan (Season 1 Clip) | TBS](f0422friend.md#Friends-Monica-Breaks-Up-with-Alan-Season-1-Clip--TBS)  
    1. [Friends: Chandler’s Caught Smoking (Season 1 Clip) | TBS](f0422friend.md#Friends-Chandlers-Caught-Smoking-Season-1-Clip--TBS)  
    1. [Friends: Ross reveals his Ex-Wife Carol is Pregnant (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-reveals-his-Ex-Wife-Carol-is-Pregnant-Season-1-Clip--TBS)  
    1. [Friends: Ross Asks Rachel Out for the First Time (Season 1 Clip) | TBS](f0422friend.md#Friends-Ross-Asks-Rachel-Out-for-the-First-Time-Season-1-Clip--TBS)  
    1. [Friends: Rachel Runs Out on her Wedding to Barry (Season 1 Clip) | TBS](f0422friend.md#Friends-Rachel-Runs-Out-on-her-Wedding-to-Barry-Season-1-Clip--TBS)  
      
    
    
    
    
    

## Small packs


```python
lien = [str(v) for v in range(10)]

def mPackLl(l):
    '''
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
[['0', '1', '2', '3'], ['4', '5', '6', '7']]   
    '''
    max = 3
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

llen = mPackLl(lien)
llru = []
for vlien in llen:
    vliru = translateList2(vlien)
    llru.append(vliru)
liru = mUnpackLl(llru)

print(ll)
print(lien)
print(liru)

with open('xen.txt', 'w') as fh:
    fh.write('\n'.join(lien))

```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-6-7e584590ff08> in <module>
         37 llru = []
         38 for vlien in llen:
    ---> 39     vliru = translateList2(vlien)
         40     llru.append(vliru)
         41 liru = mUnpackLl(llru)
    

    NameError: name 'translateList2' is not defined


## srt 1


```python
sru = '''
1
00:00:00,010 --> 00:00:00,020
 HP and the Sorcerer's Stone 2001 20:26:45 12.05.2013

2
00:00:09,500 --> 00:00:14,500
Харри Поттер и Филосовский камень (брит.) 
Гарри Поттер и волшебный камень (амер.) 
 2001

3
00:00:15,500 --> 00:00:19,500
Перевод ? + Виктор Д.

4
00:00:20,500 --> 00:00:30,500
БИРЮЧИНОВАЯ АЛЛЕЯ 
(род растений семейства Маслиновые)

5
00:01:19,200 --> 00:01:37,078
Я мог бы предвидеть, что вы будете здесь, профессор МакГонагалл.
'''



```


```python

```


```python
import re

sen = '''
sda
adaad

dada
1
00:00:00,010 --> 00:00:00,020
 HP and the Sorcerer's Stone 2001 20:26:45 12.05.2013

2
00:00:09,500 --> 00:00:14,500
Harry Potter and the Philosopher's Stone (brit.) 
Harry Potter and the Sorcerer's Stone (amer.) 
 2001

3
00:00:15,500 --> 00:00:19,500
.

4
00:00:20,500 --> 00:00:30,500
.

5
00:01:19,200 --> 00:01:37,078
I should've known that you would be here, Professor McGonagall.
'''

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

ll = []
mSubtToLl(ll, sen)
for v in ll:
    print(v[0], v[1], v[2], v[3])
```

    1 00:00:00,010 --> 00:00:00 ["HP and the Sorcerer's Stone 2001 20:26:45 12.05.2013"] []
    2 00:00:09,500 --> 00:00:14 ["Harry Potter and the Philosopher's Stone (brit.)", "Harry Potter and the Sorcerer's Stone (amer.)", '2001'] []
    3 00:00:15,500 --> 00:00:19 ['.'] []
    4 00:00:20,500 --> 00:00:30 ['.'] []
    5 00:01:19,200 --> 00:01:37 ["I should've known that you would be here, Professor McGonagall."] []
    

## 2.


```python

def mInsTranslateLl(ll):

    l2 = [v[2] for v in ll]
    # l2 = l2[:3]
    lien = []
    for v in l2:
        lien += v



    liru = translateList(lien)
    cru = len(liru)
    cen = len(lien)
    if cru < cen:
        for i in range(cen-cru):
            liru.append('')
    elif cen < cru:
        for i in range(cru-cen):
            lien.append('')

    for v in lien:
    #     print(v)
        pass

    for v in liru:
    #     print(v)
        pass


    k = 0        
    for v in ll:
        l4 = []
        for v2 in v[2]:
    #         v2[3] = liru[k]
            l4.append(liru[k])
            k += 1
    #         print(v2)
        v[3] = l4
        
        
mInsTranslateLl(ll)        
for v in ll:
#     print(v)
    pass
print(len(lien), len(liru))

```

    10 99
    


```python
def mAddRusSub(fin, fout):
    print(fin, fout)
    sen = ''
    with open(fin) as fn:
        sen = fn.read()
    ll = []
    mSubtToLl(ll, sen)
    mInsTranslateLl(ll)
    sru = ''
    lru = []
    for v in ll:
        lru.append(v[0])
        lru.append(v[1])
        for v2 in v[2]:
            lru.append(v2)
        for v3 in v[3]:
            lru.append(v3)
        
    sru = '\n'.join(lru)    
    
    with open(fout, "w", encoding = "utf8") as fn:
        fn.write(sru)
    
#     print(sen)
    pass
s1 = r"D:\mailCloud\prjother\tmp\1\a01_Your First Journey into the Cisco World.srt"
s2 = r"D:\mailCloud\prjother\tmp\1\b01_Your First Journey into the Cisco World.srt"
# mAddRusSub("x08stren.txt","x08strru.txt")
mAddRusSub(s1, s2)
```

    D:\mailCloud\prjother\tmp\1\a01_Your First Journey into the Cisco World.srt D:\mailCloud\prjother\tmp\1\b01_Your First Journey into the Cisco World.srt
    


    ---------------------------------------------------------------------------

    UnicodeDecodeError                        Traceback (most recent call last)

    <ipython-input-22-d4ace1300a8d> in <module>
         27 s2 = r"D:\mailCloud\prjother\tmp\1\b01_Your First Journey into the Cisco World.srt"
         28 # mAddRusSub("x08stren.txt","x08strru.txt")
    ---> 29 mAddRusSub(s1, s2)
    

    <ipython-input-22-d4ace1300a8d> in mAddRusSub(fin, fout)
          3     sen = ''
          4     with open(fin) as fn:
    ----> 5         sen = fn.read()
          6     ll = []
          7     mSubtToLl(ll, sen)
    

    C:\ProgramData\Anaconda3\lib\encodings\cp1251.py in decode(self, input, final)
         21 class IncrementalDecoder(codecs.IncrementalDecoder):
         22     def decode(self, input, final=False):
    ---> 23         return codecs.charmap_decode(input,self.errors,decoding_table)[0]
         24 
         25 class StreamWriter(Codec,codecs.StreamWriter):
    

    UnicodeDecodeError: 'charmap' codec can't decode byte 0x98 in position 2935: character maps to <undefined>


### Yandex to dict
### 1


```python
s = '''
taking money out of the purse	вынимая деньги из кошелька 
EN 
gift
RU 
подарок
EN 
the way feeling
RU 
как чувство
EN 
through
RU 
через
EN 
tonight
RU 
сегодня вечером
EN 
hush
RU 


'''
```

## 2


```python
import re



l = s.split('\n')
l = [v.strip() for v in l]
l = list(filter(lambda v: len(v.strip())>0, l))
def mFilter(v):
    res  = True
    if v == 'RU':
        res = False
    if v == 'EN':
        res = False
    return res

l = list(filter(mFilter, l))

l2 = []
vprev = ''
for i in range(len(l)):
    v = l[i]
    if v.find('\t')>0:
        l2.append(v)
        continue
    matchEn = re.search(r'[a-zA-Z]', v)
    if matchEn:
        vprev = v
    matchRu = re.search(r'[а-яА-Я]', v)
    if matchRu:
        s2 = f'{vprev}\t{v}'
        l2.append(s2)

# print(l2)
l2.reverse()
for v in l2:
    print(v)
```

    tonight	сегодня вечером
    through	через
    the way feeling	как чувство
    gift	подарок
    taking money out of the purse	вынимая деньги из кошелька
    

## translate to quizelet
- translate start


```python
s = '''

Do you have any plans for the weekend?
Be sure to ask this casually.
Do you feel like coming along?
What time and where?
That sounds really fun, but
I’m not sure if I can.
Can I take a rain check?
postpone plans
Do you maybe wanna see a movie this weekend?

beauties
is getting cooler
to invite someone
an established relationship
to judge
open to doing something social with you
in an indirect way
which spares you
facial expression
putting pressure on them
an invitation
want to casually
to refuse
took care
to take pressure off
take it to the extreme

'''

```


```python
sen = s.strip()
lien = s.split('\n')
lien = [v.strip() for v in lien]
lien = list(filter(lambda v: len(v)>0, lien))
sru = translate('\n'.join(lien))
liru = sru.split('\n')
litab = []
if len(lien)==len(liru):
    for i in range(len(lien)):
        litab.append(f'{lien[i]}\t{liru[i]}')
stab = '\n'.join(litab)        
print(stab)
```

    Do you have any plans for the weekend?	У тебя есть планы на выходные?
    Be sure to ask this casually.	Обязательно спросите об этом вскользь.
    Do you feel like coming along?	Вы хотите поехать?
    What time and where?	В какое время и где?
    That sounds really fun, but	Звучит очень весело, но
    I’m not sure if I can.	Я не уверен, что смогу.
    Can I take a rain check?	Могу я пройти проверку дождя?
    postpone plans	отложить планы
    Do you maybe wanna see a movie this weekend?	Может быть, ты хочешь посмотреть фильм в эти выходные?
    beauties	красавицы
    is getting cooler	становится прохладнее
    to invite someone	пригласить кого-то
    an established relationship	установившиеся отношения
    to judge	судить
    open to doing something social with you	открыт для общения с вами
    in an indirect way	косвенным образом
    which spares you	что щадит вас
    facial expression	Выражение лица
    putting pressure on them	давить на них
    an invitation	приглашение
    want to casually	хочу случайно
    to refuse	отказаться
    took care	заботиться
    to take pressure off	снять напряжение
    take it to the extreme	довести это до крайности
    

## make links


```python
s = '''
1 На карту памяти
2 На gmail_com
3 Сохранение контактов
links
https://support.google.com/android/answer/2819582?hl=ru
'''
```


```python
import re

l = s.split('\n') 
l = [v.strip() for v in l]
l = list(filter(lambda v: len(v)>0, l))
l2 = []
for v in l:
    s1 = v
    s2 = v.replace(' ', '-')
    s2 = s2.replace("(", '')
    s2 = s2.replace(')', '')
    s3 = f'[{s1}](#{s2})   '
    print(s3)

for v in l:
    s2 = f'## {v}'
    print(s2)
    pass
```

    [1 На карту памяти](#1-На-карту-памяти)   
    [2 На gmail_com](#2-На-gmail_com)   
    [3 Сохранение контактов](#3-Сохранение-контактов)   
    [links](#links)   
    [https://support.google.com/android/answer/2819582?hl=ru](#https://support.google.com/android/answer/2819582?hl=ru)   
    ## 1 На карту памяти
    ## 2 На gmail_com
    ## 3 Сохранение контактов
    ## links
    ## https://support.google.com/android/answer/2819582?hl=ru
    

## n-strings in dir


```python
import os
cwd = r'D:\mailCloud\prjother\tmp\Cisco CCNA (200-120)_ The Complete Course Subs'
cwd = cwd.replace('\\', '/') + '/'
l = os.listdir(cwd)
fn = '3 Types of NAT.srt'
s = ''
count = 0
for f in l:
    with open(cwd + f) as fn:
        s = fn.read()
        count += s.count('\n')
print(count)
# print(s)

# print(l)
```

    125863
    

## CCNA
[Cisco CCNA (200-120): The Complete Course](https://edufyre.com/p/the-complete-ccna-200-120-course)   
## 1 contexts


```python
import re
import os

import shutil

def mCopyFileList(l1, l2):
    cwd1 = r'D:\mailCloud\prjother\tmp\Cisco CCNA (200-120)_ The Complete Course Subs'
    cwd2 = r'D:\mailCloud\prjother\tmp\1'
    if len(l1) != len(l2):
        return
    for i in range(len(l1)):
        f1 = l1[i]
        f2 = l2[i]
        ff1 = f'{cwd1}\\{f1}'
        ff2 = f'{cwd2}\\{f2}'
        print(ff1)
        shutil.copy2(ff1, ff2)



s1 = 'Cisco CCNA (200-120)_ The Complete Course Subs\n'
with open("x0801cont.txt") as fn:
    s = fn.read()
s = s1 + s
l = s.split('\n')
l = list(filter(lambda v: len(v)>0,l))

l2 = []


k = 0
for v in l:
    s2 = re.sub(r'^ Preview', '', v)
    s2 = re.sub(r'^ Start', '', s2)
    s2 = re.sub(r'\(\d+:\d\d\)', '', s2)
    s2 = re.sub(r'[\?\/]', '', s2)
    s2 = re.sub(r':', '_', s2)
#     s2 = re.sub(r'[\?]', '', s2)
    s2 = s2.strip()
    l2.append(s2)
    pass

cwd = r'D:\mailCloud\prjother\tmp\Cisco CCNA (200-120)_ The Complete Course Subs'
cwd = cwd.replace('\\', '/') + '/'
ld1 = os.listdir(cwd)

ld2 = []
for v in ld1:
    s2 = re.sub(r'.srt', '', v)
    ld2.append(s2)
#     print(s2)
    pass

for v in ld2:
#     print(v)
    pass


ll2 = [[v,0] for v in l2]    
lld2 = [[v,0] for v in ld2]    
    
l3 = []
for v in ll2:
    for vd in lld2:
        if v[0] == vd[0]:
            v[1] = 1
            vd[1] = 1
            l3.append(v)
            break

ln1 = [f'{v[0]}.srt' for v in l3]
ln2 = []
for i, v in enumerate(ln1):
    si = i + 1
    s2 = '0' + str(si) if len(str(si)) == 1 else str(si)
    s3 = f'a{s2}_{v}'
    ln2.append(s3)
    
# print(ln2)
# mCopyFileList(ln1, ln2)


cwd = r'D:\mailCloud\prjother\tmp\1'
cwd = cwd.replace('\\', '/') + '/'
ld = os.listdir(cwd)
ltxt = []

l4 = []
for v in ll2:
    s4 = ''
    for v2 in ld:
#         print(v[0], v2)
        s2 = re.sub(r'^a...', '', v2)
        s2 = re.sub(r'.srt$', '', s2)
#         print(s2)
        if v[0] == s2:
            s4 = v2
#             print(v2)
            break
    s6 = ''
    if s4 == '':
        s6 = v[0]
    else:
        s6 = f'[{v[0]}]({s4})'
    l4.append(s6)

for v in l4:
#     print(v)
    pass

def mWriteListFile(l, fn):
    cwd = r'D:\mailCloud\prjother\tmp\1'
    fn = cwd + '\\' + fn
    l = [v + '   ' for v in l]
    s4 = '\n'.join(l)
#     print(s4)
    with open(fn, 'w', encoding = 'utf8') as fh:
        fh.write(s4)
        pass
    pass

mWriteListFile(l4, 'a00_context4.md')
```


```python
s4 = 'a01_Your First Journey into the Cisco World.srt'
s44 = re.sub(r' ', '-', s4)
s44 = r'#' + s44
print(s44)
```

    #a01_Your-First-Journey-into-the-Cisco-World.srt
    

## 2 make srt_en_ru and tabs_en_ru


```python

def mGetList(l):
    cwd = r'D:\mailCloud\prjother\tmp\1'
    l4 = os.listdir(cwd)
    for v in l4:
        match1 = re.search(r'^a\d+_', v)
        match2 = re.search(r'^a00_', v)
        if match1 and not match2:
            l.append(v)
    
l = []
mGetList(l)
liru = []
for v in l:
    s4 = re.sub(r'^a', 'b', v)
    liru.append(s4)
#     print(s4)
    pass

def mListSrtEnRu(lien, liru):
    if len(lien) != len(liru):
        return
    cwd = r'D:\mailCloud\prjother\tmp\1'
    lfnen = [cwd + '\\' + v for v in lien]
    lfnru = [cwd + '\\' + v for v in liru]
    for i in range(len(lfnen)):
        
#         print(lfnen[i])
#         print(lfnru[i])
        mAddRusSub(lfnen[i], lfnru[i])
        pass
    
print(len(l), len(liru))
l = list(filter(lambda v: re.search(r'^.\d\d\d_', v), l))
liru = list(filter(lambda v: re.search(r'^.\d\d\d_', v), liru))
mListSrtEnRu(l, liru)
print(l,liru)
```

    116 116
    D:\mailCloud\prjother\tmp\1\a100_Actual Configuration of NAT Overload.srt D:\mailCloud\prjother\tmp\1\b100_Actual Configuration of NAT Overload.srt
    D:\mailCloud\prjother\tmp\1\a101_Pitfalls to look for on your test.srt D:\mailCloud\prjother\tmp\1\b101_Pitfalls to look for on your test.srt
    D:\mailCloud\prjother\tmp\1\a102_What exactly is a WAN.srt D:\mailCloud\prjother\tmp\1\b102_What exactly is a WAN.srt
    D:\mailCloud\prjother\tmp\1\a103_What are the connection types.srt D:\mailCloud\prjother\tmp\1\b103_What are the connection types.srt
    D:\mailCloud\prjother\tmp\1\a104_Understanding the CIR and Burst Rate.srt D:\mailCloud\prjother\tmp\1\b104_Understanding the CIR and Burst Rate.srt
    D:\mailCloud\prjother\tmp\1\a105_What is a DLCI and who assigns it.srt D:\mailCloud\prjother\tmp\1\b105_What is a DLCI and who assigns it.srt
    D:\mailCloud\prjother\tmp\1\a106_configuring Frame-relay.srt D:\mailCloud\prjother\tmp\1\b106_configuring Frame-relay.srt
    D:\mailCloud\prjother\tmp\1\a107_show commands for frame-relay.srt D:\mailCloud\prjother\tmp\1\b107_show commands for frame-relay.srt
    D:\mailCloud\prjother\tmp\1\a108_Open Standard WAN protocol.srt D:\mailCloud\prjother\tmp\1\b108_Open Standard WAN protocol.srt
    D:\mailCloud\prjother\tmp\1\a109_Configuring PPP and Verifying PPP.srt D:\mailCloud\prjother\tmp\1\b109_Configuring PPP and Verifying PPP.srt
    D:\mailCloud\prjother\tmp\1\a110_Redundancy protocols overview.srt D:\mailCloud\prjother\tmp\1\b110_Redundancy protocols overview.srt
    D:\mailCloud\prjother\tmp\1\a111_HSRP Details and configuration.srt D:\mailCloud\prjother\tmp\1\b111_HSRP Details and configuration.srt
    D:\mailCloud\prjother\tmp\1\a112_VRRP and GLBP.srt D:\mailCloud\prjother\tmp\1\b112_VRRP and GLBP.srt
    D:\mailCloud\prjother\tmp\1\a113_SNMP and its Configuration.srt D:\mailCloud\prjother\tmp\1\b113_SNMP and its Configuration.srt
    D:\mailCloud\prjother\tmp\1\a114_SYSLOG and its Configuration.srt D:\mailCloud\prjother\tmp\1\b114_SYSLOG and its Configuration.srt
    D:\mailCloud\prjother\tmp\1\a115_NETFLOW and its Configuration.srt D:\mailCloud\prjother\tmp\1\b115_NETFLOW and its Configuration.srt
    D:\mailCloud\prjother\tmp\1\a116_Course Summary.srt D:\mailCloud\prjother\tmp\1\b116_Course Summary.srt
    ['a100_Actual Configuration of NAT Overload.srt', 'a101_Pitfalls to look for on your test.srt', 'a102_What exactly is a WAN.srt', 'a103_What are the connection types.srt', 'a104_Understanding the CIR and Burst Rate.srt', 'a105_What is a DLCI and who assigns it.srt', 'a106_configuring Frame-relay.srt', 'a107_show commands for frame-relay.srt', 'a108_Open Standard WAN protocol.srt', 'a109_Configuring PPP and Verifying PPP.srt', 'a110_Redundancy protocols overview.srt', 'a111_HSRP Details and configuration.srt', 'a112_VRRP and GLBP.srt', 'a113_SNMP and its Configuration.srt', 'a114_SYSLOG and its Configuration.srt', 'a115_NETFLOW and its Configuration.srt', 'a116_Course Summary.srt'] ['b100_Actual Configuration of NAT Overload.srt', 'b101_Pitfalls to look for on your test.srt', 'b102_What exactly is a WAN.srt', 'b103_What are the connection types.srt', 'b104_Understanding the CIR and Burst Rate.srt', 'b105_What is a DLCI and who assigns it.srt', 'b106_configuring Frame-relay.srt', 'b107_show commands for frame-relay.srt', 'b108_Open Standard WAN protocol.srt', 'b109_Configuring PPP and Verifying PPP.srt', 'b110_Redundancy protocols overview.srt', 'b111_HSRP Details and configuration.srt', 'b112_VRRP and GLBP.srt', 'b113_SNMP and its Configuration.srt', 'b114_SYSLOG and its Configuration.srt', 'b115_NETFLOW and its Configuration.srt', 'b116_Course Summary.srt']
    


```python
s = 'a088_Configuring a router.srt'
s4 = re.sub(r'^a', 'b', s)
match = re.search(r'^a\d+_', s)
print(match)
```

    <re.Match object; span=(0, 5), match='a088_'>
    


```python
import shutil

def mCopyFileList(l1, l2):
    cwd1 = r'D:\mailCloud\prjother\tmp'
    cwd2 = r'D:\mailCloud\prjother\tmp'
    if len(l1) != len(l2):
        return
    for i in range(len(l1)):
        f1 = l1[i]
        f2 = l2[i]
        ff1 = f'{cwd1}\\{f1}'
        ff2 = f'{cwd2}\\{f2}'
        print(ff1)
        shutil.copy2(ff1, ff2)
    
l1 = ['b06.txt', 'b07.txt']
l2 = ['b08.txt', 'b09.txt']    
mCopyFileList(l1, l2)

```

    D:\mailCloud\prjother\tmp\b06.txt
    D:\mailCloud\prjother\tmp\b07.txt
    


```python

```

    We arrive on 03/25/2018. So you are welcome after 04/01/2018.
    We arrive on 25.03.2018. So you are welcome after 01.04.2018.
    

[translate to md file](#translate-to-md-file)   
[make links](#make-links)   

[pytube3](https://python-pytube.readthedocs.io/en/latest/)  
[youtube](https://www.youtube.com/watch?v=9bZkp7q19f0)  
[]()  



```python
# from pytube import YouTube

# yt = YouTube('https://www.youtube.com/user/ENGLISHCLASS101')

```

[ПИТУБ | БИБЛИОТЕКА PYTHON ДЛЯ ЗАГРУЗКИ ВИДЕО НА YOUTUBE](http://espressocode.top/pytube-python-library-download-youtube-videos/)  

