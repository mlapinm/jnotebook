### Scientific Computing with Python Certification (300 hours)
### Python for Everybody

[Introduction to Python for Everybody](#Introduction-to-Python-for-Everybody)  
[1 Introduction: Why Program?](#1-Introduction:-Why-Program?)  
[2 Introduction: Hardware Architecture](#2-Introduction:-Hardware-Architecture)  
[3 Introduction: Python as a Language](#3-Introduction:-Python-as-a-Language)  
[4 Introduction: Elements of Python](#4-Introduction:-Elements-of-Python)  
[5 Variables, Expressions, and Statements](#5-Variables,-Expressions,-and-Statements)  
[6 Intermediate Expressions](#6-Intermediate-Expressions)  
[7 Conditional Execution](#7-Conditional-Execution)  
[8 More Conditional Structures](#8-More-Conditional-Structures)  
[9 Python Functions](#9-Python-Functions)  
[10 Build your own Functions](#10-Build-your-own-Functions)  
[11 Loops and Iterations](#11-Loops-and-Iterations)  
[12 Iterations: Definite Loops](#12-Iterations:-Definite-Loops)  
[13 Iterations: Loop Idioms](#13-Iterations:-Loop-Idioms)  
[14 Iterations: More Patterns](#14-Iterations:-More-Patterns)  
[15 Strings in Python](#15-Strings-in-Python)  
[16 Intermediate Strings](#16-Intermediate-Strings)  
[17 Reading Files](#17-Reading-Files)  
[18 Files as a Sequence](#18-Files-as-a-Sequence)  
[19 Python Lists](#19-Python-Lists)  
[20 Working with Lists](#20-Working-with-Lists)  
[21 Strings and Lists](#21-Strings-and-Lists)  
[22 Python Dictionaries](#22-Python-Dictionaries)  
[23 Dictionaries: Common Applications](#23-Dictionaries:-Common-Applications)  
[24 Dictionaries and Loops](#24-Dictionaries-and-Loops)  
[25 The Tuples Collection](#25-The-Tuples-Collection)  
[26 Comparing and Sorting Tuples](#26-Comparing-and-Sorting-Tuples)  
[27 Regular Expressions](#27-Regular-Expressions)  
[28 Regular Expressions: Matching and Extracting Data](#28-Regular-Expressions:-Matching-and-Extracting-Data)  
[29 Regular Expressions: Practical Applications](#29-Regular-Expressions:-Practical-Applications)  
[30 Networking with Python](#30-Networking-with-Python)  
[31 Networking Protocol](#31-Networking-Protocol)  
[32 Networking: Write a Web Browser](#32-Networking:-Write-a-Web-Browser)  
[33 Networking: Text Processing](#33-Networking:-Text-Processing)  
[34 Networking: Using urllib in Python](#34-Networking:-Using-urllib-in-Python)  
[35 Networking: Web Scraping with Python](#35-Networking:-Web-Scraping-with-Python)  
[36 Using Web Services](#36-Using-Web-Services)  
[37 Web Services: XML](#37-Web-Services:-XML)  
[38 Web Services: XML Schema](#38-Web-Services:-XML-Schema)  
[39 Web Services: JSON](#39-Web-Services:-JSON)  
[40 Web Services: Service Oriented Approach](#40-Web-Services:-Service-Oriented-Approach)  
[41 Web Services: APIs](#41-Web-Services:-APIs)  
[42 Web Services: API Rate Limiting and Security](#42-Web-Services:-API-Rate-Limiting-and-Security)  
[43 Python Objects](#43-Python-Objects)  
[44 Objects: A Sample Class](#44-Objects:-A-Sample-Class)  
[45 Object Lifecycle](#45-Object-Lifecycle)  
[46 Objects: Inheritance](#46-Objects:-Inheritance)  
[47 Relational Databases and SQLite](#47-Relational-Databases-and-SQLite)  
[48 Make a Relational Database](#48-Make-a-Relational-Database)  
[49 Relational Database Design](#49-Relational-Database-Design)  
[50 Representing Relationships in a Relational Database](#50-Representing-Relationships-in-a-Relational-Database)  
[51 Relational Databases: Relationship Building](#51-Relational-Databases:-Relationship-Building)  
[52 Relational Databases: Join Operation](#52-Relational-Databases:-Join-Operation)  
[53 Relational Databases: Many-to-many Relationships](#53-Relational-Databases:-Many-to-many-Relationships)  
[54 Visualizing Data with Python](#54-Visualizing-Data-with-Python)  
[55 Data Visualization: Page Rank](#55-Data-Visualization:-Page-Rank)  
[56 Data Visualization: Mailing Lists](#56-Data-Visualization:-Mailing-Lists)  





### Scientific Computing with Python Projects

[Introduction to the Scientific Computing with Python Projects](#Introduction-to-the-Scientific-Computing-with-Python-Projects)  
[1 Arithmetic Formatter](#1-Arithmetic-Formatter)  
[2 Time Calculator](#2-Time-Calculator)  
[3 Budget App](#3-Budget-App)  
[4 Polygon Area Calculator](#4-Polygon-Area-Calculator)  
[5 Probability Calculator](#5-Probability-Calculator)  



### Scientific Computing with Python Certification (300 hours)
### Python for Everybody

#### Introduction to Python for Everybody
```
```
#### 1 Introduction: Why Program?
```
```
#### 2 Introduction: Hardware Architecture
```
```
#### 3 Introduction: Python as a Language
```
```
#### 4 Introduction: Elements of Python
```
```


```python
x = 43
x = x + 1
print(x)
# 44
```

    44
    

#### 5 Variables, Expressions, and Statements
```
What is the symbol used in an assignment statement?


~


&


***=


|
```
#### 6 Intermediate Expressions
```
```


```python
width = 15
height = 12.0
print(height/3)
# 4.0
```

    4.0
    

#### 7 Conditional Execution
```
Which code is indented correctly to print "Yes" if x = 0 and y = 10?


if 0 == x:
if y == 10:
print("Yes")

if 0 == x:
    if y == 10:
    print("Yes")

if 0 == x:
if y == 10:
    print("Yes")
vvvv
if 0 == x:
    if y == 10:
        print("Yes")
```



```python
x = 0
y = 10
if 0 == x:
    if y == 10:
        print("Yes")
```

    Yes
    

#### 8 More Conditional Structures
```
temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
```


```python
temp = "5 degrees"
cel = 0
try:
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
except:
    print('error')
print(cel)
```

    error
    0
    

#### 9 Python Functions
```
What is the purpose of the "def" keyword in Python?


It is slang that means "The following code is really cool."


It indicates the start of a function.


It indicates that the following indented section of code is to be stored for later.


*** It indicates the start of a function, and the following indented section of code is to be stored for later.


None of the above.
```
#### 10 Build your own Functions
```
```


```python
def fred():
    print("Zap")
def jane():
    print("ABC")

jane()
fred()
jane()
```

    ABC
    Zap
    ABC
    

#### 11 Loops and Iterations
```
0
1
2
```


```python
n = 0
while True:
    if n == 3:
        break
    print(n)
    n = n + 1
```

    0
    1
    2
    

#### 12 Iterations: Definite Loops
```
How many lines will the following code print?:
3
```


```python
for i in [2,1,5]:
    print(i)
```

    2
    1
    5
    

#### 13 Iterations: Loop Idioms
```
```


```python
smallest = None
print("Before:", smallest)
for itervar in [9, 41, 12, 3, 74, 15]:
    if smallest is None or itervar < smallest:
        smallest = itervar
        break
    print("Loop:", itervar, smallest)
print("Smallest:", smallest)
```

    Before: None
    Smallest: 9
    

#### 14 Iterations: More Patterns
```
False

0 == 0.0

**0 is 0.0

0 is not 0.0

0 = 0.0
```


```python
print(0 is 0.0)
```

    False
    

#### 15 Strings in Python
```
b - a - n - a - n - a - 
```


```python
for n in "banana":
    print(n, end = ' - ')
```

    b - a - n - a - n - a - 

#### 16 Intermediate Strings
```
2
```


```python
word = "bananana"
i = word.find("na")
print(i)
```

    2
    

#### 17 Reading Files
```
What is used to indicate a new line in a string?


\n
```

#### 18 Files as a Sequence
```
What does the word 'continue' do in the middle of a loop?


Skips to the code directly after the loop.


Skips to the next line in the code.


***Skips to the next iteration of the loop.


Skips the next block of code.
```


#### 19 Python Lists
```
a
```



```python
fruit = "banana"
x = fruit[1]
print(x)
```

    a
    

#### 20 Working with Lists
```
Which method is used to add an item at the end of a list?


insert


push


***append


new
```



```python
l = [1,2]
l.append(3)
print(l)
```

    [1, 2, 3]
    

#### 21 Strings and Lists
```
```



```python
words = 'His e-mail is q-lar@freecodecamp.org'
pieces = words.split()
parts = pieces[3].split('-')
n = parts[1]
print(pieces, parts, n)
```

    ['His', 'e-mail', 'is', 'q-lar@freecodecamp.org'] ['q', 'lar@freecodecamp.org'] lar@freecodecamp.org
    

#### 22 Python Dictionaries
```
```



```python
dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9
print(dict)
```

    {'Fri': 20, 'Thu': 13, 'Sat': 2, 'Sun': 9, 'Mon': 22}
    

#### 23 Dictionaries: Common Applications
```
```


```python
counts = { 'quincy' : 1 , 'mrugesh' : 42, 'beau': 100, '0': 10}
print(counts.get('kris', 0))
```

    0
    

#### 24 Dictionaries and Loops
```
annie 42
jan 100
```


```python
counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    if counts[key] > 10:
        print(key, counts[key])
```

    annie 42
    jan 100
    

#### 25 The Tuples Collection
```
```


```python
d1 = {}
d1['quincy'] = 1
d1['beau'] = 5
d1['kris'] = 9
for (k,i) in d1.items():
    print(k, i)
```

    quincy 1
    beau 5
    kris 9
    

#### 26 Comparing and Sorting Tuples
```
Which does the same thing as the following code?:

lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)

***print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )

print( [ (k,v) for k,v in counts.items().sorted() ] )

print( sorted( [ (v,k) for k,v in counts.keys() ] ) )

print( [ (k,v) for k,v in counts.values().sort() ] )
```


```python
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
```

    [(100, 'jan'), (42, 'annie'), (1, 'chuck')]
    [(100, 'jan'), (42, 'annie'), (1, 'chuck')]
    

#### 27 Regular Expressions
```
Which regex matches only a white space character?
\s
```

#### 28 Regular Expressions: Matching and Extracting Data
```
['csev@umich.edu', 'cwen@iupui.edu']
```


```python
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)
```

    ['csev@umich.edu', 'cwen@iupui.edu']
    

#### 29 Regular Expressions: Practical Applications
```
What will search for a "$" in a regular expression?

\$
```



```python
s = 'adfaf $frogman, sfsfafaf'
lst = re.findall('\$\\w+',s)
print(lst)
```

    ['$frogman']
    

#### 30 Networking with Python
```
What Python library gives access to TCP Sockets?


tcp


***socket


http


port
```


#### 31 Networking Protocol
```
What type of HTTP request is usually used to access a website?


POST


***GET


WEB


ACCESS
```

#### 32 Networking: Write a Web Browser
```
A simple web server.


A simple email client.


A simple todo list.


***A simple web browser.
```


```python
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')
mysock.close()
```

    HTTP/1.1 200 OK
    Date: Thu, 09 Jul 2020 10:30:40 GMT
    Server: Apache/2.4.18 (Ubuntu)
    Last-Modified: Sat, 13 May 2017 11:22:22 GMT
    ETag: "a7-54f6609245537"
    Accept-Ranges: bytes
    Content-Length: 167
    Cache-Control: max-age=0, no-cache, no-store, must-revalidate
    Pragma: no-cache
    Expires: Wed, 11 Jan 1984 05:00:00 GMT
    Connection: close
    Content-Type: text/plain
    
    But soft what light through yonder window breaks
    It is the east and Juliet is the sun
    Arise fair sun and kill the envious moon
    Who is already sick and pale with grief
    

#### 33 Networking: Text Processing
```
Which type of encoding do most websites use?
UTF-8
```

#### 34 Networking: Using urllib in Python
```
```


```python
import urllib.request
fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())
```

    But soft what light through yonder window breaks
    It is the east and Juliet is the sun
    Arise fair sun and kill the envious moon
    Who is already sick and pale with grief
    

#### 35 Networking: Web Scraping with Python
```
What Python library is used for parsing HTML documents and extracting data from HTML documents?


socket


http


***BeautifulSoup


PrettyBiscuit


WonderfulSalad


HttpParser


GrunkleStan```

#### 36 Using Web Services
```
What are the two most common ways to send data over the internet?


JSON and TXT


***JSON and XML


XML and TXT


XML and PHP


PHP and TXT
```

#### 37 Web Services: XML
```
What is wrong with the following XML?:

<person>
  <name>Chuck</name>
  <phone type="intl">
    +1 734 303 4456
  <email hide="yes" />
</person>

Email tag is missing closing tag.


Spacing will cause XML to be invalid.


***Phone tag is missing closing tag.


Plain text should be encoded using UTF-8.
```

#### 38 Web Services: XML Schema
[XSD — умный XML](https://habr.com/ru/post/90696/)  
```
What is XSD?


***The W3C Schema specification for XML.


The standard JSON schema from MOZ.


Extensible Situational Driver
```

#### 39 Web Services: JSON
```
Mrugesh
```


```python
import json
data = '''
  [
    { "id" : "001",
      "x" : "2",
     "name" : "Quincy"
    } ,
    { "id" : "009",
      "x" : "7",
      "name" : "Mrugesh"
      }
  ]
'''
info = json.loads(data)
# json.loads('["foo", {"bar":["baz", null, 1.0, 2]}]')
print(info[1]['name'])
```

    Mrugesh
    

#### 40 Web Services: Service Oriented Approach
```
With a services oriented approach to developing web apps, where is the data located?


***Spread across many computer systems connected via the internet or internal network.


Within different services on the main web server.


On a separate database server.
```

#### 41 Web Services: APIs
```
What does API stand for?


Application Portable Intelligence


Associate Programming International


***Application Program Interface


Action Portable Interface
```

#### 42 Web Services: API Rate Limiting and Security
```
When making a request from the Twitter API, what information must always be sent with the request?


Twitter username


date range


search term


***key
```

#### 43 Python Objects
```
Which is NOT true about objects in Python?


Objects get created and used.


Objects are bits of code and data.


Objects hide detail.


***Objects are one of the five standard data types.
```

#### 44 Objects: A Sample Class
```
```



```python
class PartyAnimal:
    x = 0
    def party(self):
        self.x = self.x + 2
        print(self.x)

an = PartyAnimal()
an.party()
an.party()
```

    2
    4
    

#### 45 Object Lifecycle
```
```


```python
class PartyAnimal:
    x = 0
    name = ''
    def __init__(self, nam):
        self.name = nam
        print(self.name,'constructed')
    def party(self):
        self.x = self.x + 1
        print(self.name,'party count',self.x)

q = PartyAnimal('Quincy')
m = PartyAnimal('Miya')

q.party()
m.party()
q.party()
```

    Quincy constructed
    Miya constructed
    Quincy party count 1
    Miya party count 1
    Quincy party count 2
    

#### 46 Objects: Inheritance
```
What is inheritance in object-oriented programming?


A new class created when a parent class is extended.


A constructed instance of a class.


***The ability to create a new class by extending an existing class.


A method that is called at the moment when a class is being used to construct an object.
```


#### 47 Relational Databases and SQLite
```
Which is NOT a primary data structure in a database?


***index


table


row


column
```


#### 48 Make a Relational Database
```
What SQL command would you use to retrieve all users that have the email address quincy@freecodecamp.org?


SELECT Users WHERE email="quincy@freecodecamp.org"

SELECT Users WHERE email IS "quincy@freecodecamp.org"

SELECT ALL Users WHERE email="quincy@freecodecamp.org"

SELECT * FROM Users WHERE email IS "quincy@freecodecamp.org"

SELECT * FROM Users WHERE email="quincy@freecodecamp.org"
```


#### 49 Relational Database Design
```
What SQL command would you use to retrieve all users that have the email address quincy@freecodecamp.org?


SELECT Users WHERE email="quincy@freecodecamp.org"

SELECT Users WHERE email IS "quincy@freecodecamp.org"

SELECT ALL Users WHERE email="quincy@freecodecamp.org"

SELECT * FROM Users WHERE email IS "quincy@freecodecamp.org"

***SELECT * FROM Users WHERE email="quincy@freecodecamp.org"
```

#### 50 Representing Relationships in a Relational Database
```
What is the best practice for how many times a piece of string data should be stored in a database?


0


***1


2


3```

```
What is a foreign key?


A key that is not supposed to be there.


A key that uses non-latin characters.


***A number that points to the primary key of an associated row in a different table.


A key that the "real world" might use to look up a row.
```


#### 51 Relational Databases: Relationship Building
```
What does the INSERT command do in SQL?


***It defines a new row by listing the fields we want to include followed by the values we want placed in the new row.


It defines a new column by listing the rows we want to include followed by the values we want placed in the new column.


It defines a new table by listing the rows and fields we want to include followed by the values that we want placed in the table.
```


#### 52 Relational Databases: Join Operation
```
When using a JOIN clause in an SQL statement, what does ON do?


It indicates what tables to perform the JOIN on.


It specifies the fields to use for the JOIN.


***It indicates how the two tables are to be joined.
```


#### 53 Relational Databases: Many-to-many Relationships
```
Which is an example of a many-to-many relationship?


***teacher to student


customer to order


book to pages


city to country
```


#### 54 Visualizing Data with Python
```
Most data needs to be __ before using it.


converted to JSON format


graphed


***cleaned


memorized


turned into song
```


#### 55 Data Visualization: Page Rank
```
How does the PageRank algorithm work?


***It determines which pages are most highly connected.


It ranks pages based on view counts.


It figures out which pages contain the most important content.
```










#### 56 Data Visualization: Mailing Lists
```
Which is a common JavaScript visualization library?


DataViz.js


***D3


Lowcharts


DATA6
```



### Scientific Computing with Python Projects

[]()  
[]()  
[]()  
[]()  
[]()  





```python
l1 = [' 01', ' 02', ' 03', ]
l2 = [' 11', ' 12', ' 13', ]
l3 = [' 21', ' 22', ' 23', ]

ll1 = []
ll1.append(l1)
ll1.append(l2)
ll1.append(l3)

def arrColumn(ll1):
    rs = ''
    lenArr = len(l1[0])

    ll = []
    for i in range(lenArr):
        s = ''
        for j in range(len(ll1)):
            s += ll1[j][i]
        rs += s
        rs += '\n'
    #         ll.append(i)
    return rs
print(arrColumn(ll1))


# print(lenArr,l1)

```

     01 11 21
     02 12 22
     03 13 23
    
    

#### last


```python
import re

def getNums(s):
  a = re.findall("\\S+",s)
  r = []
  for i in a:
    if i != '+' and i != '-' and i != '/':
      r.append(i)
  return r

def getSign(s):
    r = re.findall("[+-]",s)
    return r[0] if len(r)==1 else ''

def culc(s):
    vn = getNums(s)
    for i in range(0,len(vn)):
        vn[i] = float(vn[i])
    vs = getSign(s)
    r = 0
    if vs == '+':
        r = vn[0] + vn[1]
    elif vs == '-':
        r = vn[0] - vn[1]
    r = int(r)
    return r

# lenStr = 10
def getStr(n, lenStr):
#     print(n, 555)
#     print(lenStr)
    r = str(n)
    r = "          " + \
    str(r)
    r = r[-lenStr:]
    return r

def getLenStr(ln):
#     print(ln,666)
    l = list(map(lambda x:str(x),ln))
    lenStr = len(l[0]) if len(l[0]) > len(l[1]) else len(l[1])
    lenStr += 2
#     print(lenStr, ln, 888888)
    return lenStr
    

def getStrs(s):
    ln = getNums(s)
    lenMax = len(ln[0]) if len(ln[0]) > len(ln[1]) else len(ln[1])
    lenStr = getLenStr(ln)
#     print(lenStr, 777777)
    ln[0] = getStr(ln[0], lenStr)
    ln[1] = getStr(ln[1], lenStr)
#     ln[1][-5] = '*'
    ss = "135678"
    ss = ss[0:3]+'a'+ss[3+1:]
    ln[1] = ln[1][0:-lenMax-2]+getSign(s)+ln[1][-lenMax-1:]
    lenStr = getLenStr(ln)
#     print(lenStr, 88888888, ln[1])
    ln.append(getStr('-------------', lenStr-2))
    ln.append(getStr(culc(s), lenStr-2))
#     print(ln)
    return ln

def arrColumn(ll1, isTrue):
    rs = ''
    lenArr = len(ll1[0])

    ll = []
    for i in range(lenArr):
        s = ''
        for j in range(len(ll1)):
            s += ll1[j][i]
            if j != len(ll1) - 1:
              s += '    '
        if isTrue == False and i == lenArr-1:
          continue
        rs += s
        rs += '\n'
    #         ll.append(i)
    return rs[:-1]

def arithmetic_arranger(*args):
  serror = ''
  isTrue = False  
  if len(args) == 2:
    isTrue = args[1]
  problems = args[0]
  for k in problems:
    l = getNums(k)
    for i in l:
      if len(i) > 4:
        serror = "Error: Numbers cannot be more than four digits."
      try:
        k = int(i)
      except:
        serror += "\n"
        serror = "Error: Numbers must only contain digits."


  for k in problems:
    sign = getSign(k)
    if len(sign) == 0:
      serror += "\n"
      serror = "Error: Operator must be '+' or '-'."

  if len(problems) > 5:
    serror += "\n"
    serror = "Error: Too many problems."
        
  if len(serror)>0:
    return serror  
    
  llColumn = []
  for i in problems:
    llColumn.append(getStrs(i))
    arranged_problems = arrColumn(llColumn, isTrue)  
  return arranged_problems



problems = ["32 / 698", "3801 - 2", "45 + 43", "123 + 49"]
s = arithmetic_arranger(problems)
print(s)
# s = "32 + 698"
# print(getStrs(s))
```

    
    Error: Operator must be '+' or '-'.
    


```python
print("1353673rtr3".count('3'))
```

    4
    


```python
print("135"[:-1])
```

    13
    


```python
def func(*args):
    print(args[0],len(args))

func(1, 2)    
```

    1 2
    


```python
l = [1,3,5]
print(list(map(lambda x: x*2, l)))
```

    [2, 6, 10]
    


```python
def getNums(s):
    a = re.findall("\\S+",s)
    r = []
    for i in a:
        if i != '+' and i != '-':
            r.append(i)
    for i in r:
        try:
            k = int(i)
        except:
            print("Error: Numbers must only contain digits.")
    
    return r
s = "3a2 + 698"
print(getNums(s))

```

    Error: Numbers must only contain digits.
    ['3a2', '698']
    


```python
try:
   raise Exception("Numbers cannot be more than four digits.")
except Exception as e:
   print("Error: " + str(e))
```

    Error: Numbers cannot be more than four digits.
    


```python
import re

def getNums(s):
    
    return s

def arithmetic_arranger(v):
    for i in v:
        print(i)
    r = v
    
    return r


print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))
```

    32 + 698
    3801 - 2
    45 + 43
    123 + 49
    ['32 + 698', '3801 - 2', '45 + 43', '123 + 49']
    

```
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

[]()  
[]()  
[]()  



```python
def arithmetic_arranger(problems, flag = False):

  if len(problems) > 5:
    return 'Error: Too many problems.'

  line_a = '' 
  line_b = ''
  line_c = ''
  line_d = ''

  for i, problem in enumerate(problems):
    n1, op, n2 = problem.split()
    l1, l2 = len(n1), len(n2)
    
    if op not in ['+', '-']:
      return 'Error: Operator must be \'+\' or \'-\'.'
    if not (n1.isdigit() and n2.isdigit()):
      return 'Error: Numbers must only contain digits.'
    if l1 > 4 or l2 > 4:
      return 'Error: Numbers cannot be more than four digits.'

    spacing = max(l1,l2)
    result = int(n1) + int(n2) if op == '+' else int(n1) - int(n2)

    line_a = line_a + n1.rjust(spacing+2) 
    line_b = line_b + op + n2.rjust(spacing+1) 
    line_c = line_c + ''.rjust(spacing+2, '-') 
    line_d = line_d + str(result).rjust(spacing+2) 

    if i < len(problems) - 1:
      line_a += '    '
      line_b += '    '
      line_c += '    '
      line_d += '    '

  #print(flag)
  if flag:
    arranged_problems = line_a + '\n' + line_b + '\n' + line_c + '\n' + line_d
  else:
    arranged_problems = line_a + '\n' + line_b + '\n' + line_c  
  return arranged_problems

problems = ["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]
s = arithmetic_arranger(problems)
print(s)

```

       32      3801      45      123
    + 698    -    2    + 43    +  49
    -----    ------    ----    -----
    

#### Introduction to the Scientific Computing with Python Projects
```
```
#### 1 Arithmetic Formatter
[last](#last)  
[fcc-arithmetic-arranger-1](https://repl.it/@mlapinm/fcc-arithmetic-arranger-1#arithmetic_arranger.py)   
[repl.it](https://repl.it/@freeCodeCamp/fcc-arithmetic-arranger#README.md)  
[github freeCodeCamp
/
CurriculumExpansion](https://github.com/freeCodeCamp/CurriculumExpansion/issues/231)  
[all youtube Python Tutorials](https://www.youtube.com/watch?v=rfscVS0vtbw&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB)  
[youtube Python Tutorials](https://www.youtube.com/watch?v=8DvywoWv6fI&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB&index=4)  
 
[]()  
[]()  
[]()  
```
```
#### 2 Time Calculator
[fcc-time-calculator](https://repl.it/@mlapinm/fcc-time-calculator)  
[]()  
[]()  
[]()  
[]()  
[]()  
```
```


##### duble 1


```python
def add_time(start, duration):





  return new_time
```

##### duble 2


```python
def add_time(start, duration):





    return new_time
```


```python
%%js
alert(333)
element.text(""+555 + 666)  
```


    <IPython.core.display.Javascript object>


#### 3 Budget App
[]()  
[]()  
```
```
#### 4 Polygon Area Calculator
[]()  
[]()  
```
```
#### 5 Probability Calculator
[]()  
[]()  
```
```











[all youtube Python Tutorials](https://www.youtube.com/watch?v=rfscVS0vtbw&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB)  
[]()  
[]()  
[]()  
[]()  
[]()  

