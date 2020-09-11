## JavaScript1:
* [Типы](#Типы)  
[Приведение к типам](#Приведение-к-типам)
* [Запустить файл в консоли](#Запустить-файл-в-консоли)
* [Управляющие конструкции](#Управляющие-конструкции)
* [Рекурсия](#Рекурсия)
* [Объекты и массивы](#Объекты-и-массивы)
* [Проверка наличия свойств](#Проверка-наличия-свойств)
* [Перебор свойств объекта](#Перебор-свойств-объекта)
* [Методы, this](#Методы,-this)
* [Урок 6](#Урок-6)
* [Объектный тип массив: Array](#Объектный-тип-массив:-Array)
* [Перебор элементов массива](#Перебор-элементов-массива)
* [Удаление элементов массива](#Удаление-элементов-массива)
* [Получение строки из массива](#Получение-строки-из-массива)
* [Сложение массивов](#Сложение-массивов)
* [Получение части массива](#Получение-части-массива)
* [Сортировка массива](#Сортировка-массива)
* [Работа с концом массива](#Работа-с-концом-массива)
* [Работа с началом массива](#Работа-с-началом-массива)
* [Вставка и удаление в любом месте](#Вставка-и-удаление-в-любом-месте)
* [Встроенный объект Math](#Встроенный-объект-Math)
* [Методы массива](#Методы-массива)
* [Преобразование числа в строку](#Преобразование-числа-в-строку)
* [Преобразование строки в число](#Преобразование-строки-в-число)
* [Длина строки](#Длина-строки)
* [Сложение строк](#Сложение-строк)
* [Регистр символов](#Регистр-символов)
* [Получение символа из строки](#Получение-символа-из-строки)
* [Получение части строки](#Получение-части-строки)
* [Поиск по строке](#Поиск-по-строке)
* [Замена в строке](#Замена-в-строке)
* [Разбиение строки](#Разбиение-строки)
* [Регулярные выражения](#Регулярные-выражения)
* [Базовое использование](#Базовое-использование)
* [Специальные последовательности](#Специальные-последовательности)
* [Классы символов](#Классы-символов)
* [Повторения](#Повторения)
* [Позиции соответствия](#Позиции-соответствия)
* [Флаги](#Флаги)
* [Группировка и ссылки](#Группировка-и-ссылки)
* [Методы match() и exec()](#Методы-match()-и-exec())
* [Объектно ориентированное программирование](#Объектно-ориентированное-программирование)
* [Конструкторы](#Конструкторы)
* [Новый взгляд на привычное](#Новый-взгляд-на-привычное)
* [Проверка конструктора](#Проверка-конструктора)
* [Прототипы](#Прототипы)
* [Методы объекта](#Методы-объекта)
* [Объект Date](#Объект-Date)
* [Создание объекта Date](#Создание-объекта-Date)
* [Методы объекта Date](#Методы-объекта-Date)
* [Дополнительные методы](#Дополнительные-методы)
* [Строчное представление даты](#Строчное-представление-даты)
* [Запись информации](#Запись-информации)
* [Объект error](#Объект-error)
* [Конструктор объекта Error](#Конструктор-объекта-Error)


##### Типы  
Операто определения тиап  
typeof  
Функция проверки  
isNaN()  
isFinite()  
##### Приведение к типам  
- В число
    - x = '5' * 1  
    - x = + '5'  
    - x = parseInt('5.3')
    - x = parseFloat('5.3')
    - x = Number(true)
- В строку
    - x = 5 + ''
    - x = String(true)
- В логический тип
    - x = !!5
    - x = Boolean(true)

undefined, null  

##### Запустить файл в консоли
- // test.js
var name = 'John'  
print('hello ' + name)    
- js test.js

##### Chrome
- &lt;script&gt;
//comments  
var name = 'John'  
print('hello ' + name)    
&lt;script&gt;
- &lt;script src = "test.js"&gt;&lt;/script&gt;
#### Управляющие конструкции
- Циклы
- while
- for
- do while
- if - else if - else
- метки
- break continue
- switch

##### while
- while(true){  
    k++  
}  
##### ++ --
##### 2**10
r = 1  
k = 0  
while(k<10){  
r *= 2  
k++  
}  




```python
from IPython.display import HTML
form = """
    <div id="d1window">____</div>
    <script>
    function f(){
        s = ''
//2**10
        r = 1
        k = 0
        while(k<10){
            r *= 2
            k++
        }
        s += 'r = ' + r
        s += '<br>'
        s += '2**10= ' + 2**10
        s += '<br>'
//
        r = 1
        for(i=0;i<10;i++){
            r*=2
        }
        s+= 'r(for) = '+ r
        el = document.getElementById('d1window')
        el.innerHTML = s
    }
    f()
    
    </script>
"""

HTML(form)
```





    <div id="d1window">____</div>
    <script>
    function f(){
        s = ''
//2**10
        r = 1
        k = 0
        while(k<10){
            r *= 2
            k++
        }
        s += 'r = ' + r
        s += '<br>'
        s += '2**10= ' + 2**10
        s += '<br>'
//
        r = 1
        for(i=0;i<10;i++){
            r*=2
        }
        s+= 'r(for) = '+ r
        el = document.getElementById('d1window')
        el.innerHTML = s
    }
    f()

    </script>





```python
from IPython.display import HTML
form = """
    <div id="d1window">____</div>
    <script>
    function f(){
        s = ''
        s += 'Приведение в число'
        var x
        //1
        x = '5'*1
        s += "x = '5'*1 "
        s += typeof(x)
        s += '<br>'
        //2
        x = parseInt('5.3')
        s += "parseInt('5.3') "
        s += typeof(x)
        s += '  '+x
        el = document.getElementById('d1window')
        el.innerHTML = s
    }
    f()
    
    </script>
"""

HTML(form)
```





<div id="d1window">____</div>
<script>
function f(){
    s = ''
    s += 'Приведение в число'
    var x
    //1
    x = '5'*1
    s += "x = '5'*1 "
    s += typeof(x)
    s += '<br>'
    //2
    x = parseInt('5.3')
    s += "parseInt('5.3') "
    s += typeof(x)
    s += '  '+x
    el = document.getElementById('d1window')
    el.innerHTML = s
}
f()

</script>




##### Рекурсия


```python
from IPython.display import HTML
form = """
    <div id="d1recurs">____</div>
    <script>
    s = ''
    function countLine(count){
        if(count>=10){
            return
        }else{
            s += 'Line'+count+'<br>'
            count += 1
            countLine(count)
        }
    }
    function f(){
    
        countLine(0)
    
        el = document.getElementById('d1recurs')
        el.innerHTML = s
        
    }
    f()
    
    </script>
"""

HTML(form)
```





<div id="d1recurs">____</div>
<script>
s = ''
function countLine(count){
    if(count>=10){
        return
    }else{
        s += 'Line'+count+'<br>'
        count += 1
        countLine(count)
    }
}
function f(){

    countLine(0)

    el = document.getElementById('d1recurs')
    el.innerHTML = s

}
f()

</script>





```python
from IPython.display import HTML
form = """
    <div id="d_78">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function fl(x){
        if(x == 0)
            return 1
        else
            return x*fl(x-1)
    }
    x = 3
    var y = fl(x)
    consol.log("fl(",x,") = ", y)
//===============================================    
        el = document.getElementById('d_78')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_78">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function fl(x){
        if(x == 0)
            return 1
        else
            return x*fl(x-1)
    }
    x = 3
    var y = fl(x)
    consol.log("fl(",x,") = ", y)
//===============================================    
        el = document.getElementById('d_78')
        el.innerHTML = s
    }f()</script>





```python
from IPython.display import HTML
form = """
    <div id="d_79">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function pow(x,y){
        if (y == 0)
            return 1
        else
            return x*pow(x,y-1)
    }
    consol.log(pow(3,3))
//===============================================    
        el = document.getElementById('d_79')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_79">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function pow(x,y){
        if (y == 0)
            return 1
        else
            return x*pow(x,y-1)
    }
    consol.log(pow(3,3))
//===============================================    
        el = document.getElementById('d_79')
        el.innerHTML = s
    }f()</script>




### Объекты и массивы
##### object
- var user = {}
- user.name = 'John'
- user.age = 25
- user.admin = true
- console.log(user.name)


```python
from IPython.display import HTML
form = """
    <div id="d_">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
var user = {}
user.name = 'John'
user.age = 25
user.admin = true
s += 'name = ' + user.name
//===============================================    
        el = document.getElementById('d_')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
var user = {}
user.name = 'John'
user.age = 25
user.admin = true
s += 'name = ' + user.name
//===============================================    
        el = document.getElementById('d_')
        el.innerHTML = s
    }f()</script>




- var user = {  
    name: 'Guest',  
    age: 0,  
    admin: false,  
}  
- user.name = 'John'
- user.age = 25


```python
from IPython.display import HTML
form = """
    <div id="d1">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
var user = {
    'name': 'Guest',
    age: 0,
    admin: false
}
user.name = 'John'
user.age = 25
s += "1234"
s += 'name = ' + user.name + ' ' + user['name'] + '<br>'
s += 'age = ' + user.age + ' '  + user['age']
//===============================================    
        el = document.getElementById('d1')
        el.innerHTML = s
    }
    f()
    </script>
"""
HTML(form)
```





    <div id="d1">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
var user = {
    'name': 'Guest',
    age: 0,
    admin: false
}
user.name = 'John'
user.age = 25
s += "1234"
s += 'name = ' + user.name + ' ' + user['name'] + '<br>'
s += 'age = ' + user.age + ' '  + user['age']
//===============================================    
        el = document.getElementById('d1')
        el.innerHTML = s
    }
    f()
    </script>




##### Проверка наличия свойств
- var user={x:25}
- y = 'x' in user


```python
from IPython.display import HTML
form = """
    <div id="d_44">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
    var user={x:25}
    y = 'x' in user
    s += y
//===============================================    
        el = document.getElementById('d_44')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_44">____</div>
    <script>
    s = ''
    function f(){
//===============================================    
    var user={x:25}
    y = 'x' in user
    s += y
//===============================================    
        el = document.getElementById('d_44')
        el.innerHTML = s
    }f()</script>




##### Перебор свойств объекта
- var o = {0:'Guest', 1:0, 2:false}
- for(var i=0;i in o; i++){  
    s += i + ": " + o[i] + '&lt;br&gt;'  
} 
- for(var i in o){  
    s += i + ": " + o[i] + '&lt;br&gt;'  
} 


```python
from IPython.display import HTML
form = """
    <div id="d_46">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5 } }
    function f(){
//===============================================    
var o = {0:'Guest', 1:0, 2:false}
for(var i=0;i in o; i++){
s += i + ": " + o[i] + '<br>'
}
for(var i in o){
s += i + ": " + o[i] + '<br>'
}

var user = {
    name1: 'Guest',
    age: 0,
    admin: false
}
for(var i in user){
consol.log(i,user[i])
}
//===============================================    
        el = document.getElementById('d_46')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_46">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5 } }
    function f(){
//===============================================    
var o = {0:'Guest', 1:0, 2:false}
for(var i=0;i in o; i++){
s += i + ": " + o[i] + '<br>'
}
for(var i in o){
s += i + ": " + o[i] + '<br>'
}

var user = {
    name1: 'Guest',
    age: 0,
    admin: false
}
for(var i in user){
consol.log(i,user[i])
}
//===============================================    
        el = document.getElementById('d_46')
        el.innerHTML = s
    }f()</script>




##### Методы, this
- var user = {  
    name : 'Guest',  
    getName : function(){  
    consol.log(this.name)  
    }  
}
- user.name = 'John'
- user.getName()


```python
from IPython.display import HTML
form = """
    <div id="d_74">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var user = {
    name : 'Guest',
    getName : function(){
    consol.log(this.name)
    }
}
user.name = 'John'
user.getName()    
//===============================================    
        el = document.getElementById('d_74')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_74">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var user = {
    name : 'Guest',
    getName : function(){
    consol.log(this.name)
    }
}
user.name = 'John'
user.getName()    
//===============================================    
        el = document.getElementById('d_74')
        el.innerHTML = s
    }f()</script>




##### Урок 6


```python
from IPython.display import HTML
form = """
    <div id="d_75">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function say(greet){
        return function(name){
            return greet + ' ' + name
        }
    }

    consol.log(say)

    var en = say("Hello")
    consol.log(en)
    consol.log(en("John"))
    var ru = say("Привет")
    consol.log(ru("Вася"))
    consol.log(en("Mike"))
//===============================================    
        el = document.getElementById('d_75')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_75">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    function say(greet){
        return function(name){
            return greet + ' ' + name
        }
    }

    consol.log(say)

    var en = say("Hello")
    consol.log(en)
    consol.log(en("John"))
    var ru = say("Привет")
    consol.log(ru("Вася"))
    consol.log(en("Mike"))
//===============================================    
        el = document.getElementById('d_75')
        el.innerHTML = s
    }f()</script>




function foo(x, y){  
    consol.log(foo.length); // 2  
    consol.log(arguments.length);//3  
    consol.log(arguments[0]); // 5  
}  
consol.log('foo.length ' + foo.length); // 2  
foo(5, 6, 7);  



```python
from IPython.display import HTML
form = """
    <div id="d_76">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
function foo(x, y){  
    consol.log(foo.length); // 2  
    consol.log(arguments.length);//3  
    consol.log(arguments[0]); // 5  
}  
consol.log('foo.length ' + foo.length); // 2  
foo(5, 6, 7);  
//===============================================    
        el = document.getElementById('d_76')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_76">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
function foo(x, y){  
    consol.log(foo.length); // 2  
    consol.log(arguments.length);//3  
    consol.log(arguments[0]); // 5  
}  
consol.log('foo.length ' + foo.length); // 2  
foo(5, 6, 7);  
//===============================================    
        el = document.getElementById('d_76')
        el.innerHTML = s
    }f()</script>




#### Объектный тип массив: Array
var a = [];  
var x = 'moon';  
var y = function(){  
    consol.log('Hello');  
};  
var a = [10, "sun", x, y, true];  
a[1];  
a[3]();  
a[9] = 100;  


```python
from IPython.display import HTML
form = """
    <div id="d_77">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [];  
var x = 'moon';  
var y = function(){  
    consol.log('Hello');  
};  
var a = [10, "sun", x, y, true];  
a[1];  
a[3]();  
a[9] = 100;  
for(var i in a){
    consol.log(i, a[i])
}
//===============================================    
        el = document.getElementById('d_77')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_77">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [];  
var x = 'moon';  
var y = function(){  
    consol.log('Hello');  
};  
var a = [10, "sun", x, y, true];  
a[1];  
a[3]();  
a[9] = 100;  
for(var i in a){
    consol.log(i, a[i])
}
//===============================================    
        el = document.getElementById('d_77')
        el.innerHTML = s
    }f()</script>




##### Перебор элементов массива


```python
from IPython.display import HTML
form = """
    <div id="d_80">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 'abc', 73]; a[99] = 1;
for (var i=0, x=0; i<a.length; i++)
{
x++;
}
consol.log(a)
consol.log(x)
var x = 0;
for (var i in a) { x++; }    
consol.log(x)
//===============================================    
        el = document.getElementById('d_80')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_80">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 'abc', 73]; a[99] = 1;
for (var i=0, x=0; i<a.length; i++)
{
x++;
}
consol.log(a)
consol.log(x)
var x = 0;
for (var i in a) { x++; }    
consol.log(x)
//===============================================    
        el = document.getElementById('d_80')
        el.innerHTML = s
    }f()</script>




#####  Удаление элементов массива
a[1] = undefined;  
delete a[1];


```python
from IPython.display import HTML
form = """
    <div id="d_81">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var x = 0; var a = [4, 12, 7];
consol.log(a)
a[1] = undefined;
consol.log(a)
for (var i in a) { x++; }
var x = 0; var a = [4, 12, 7];
delete a[1];
for (var i in a) { x++; }
consol.log(a)
//===============================================    
        el = document.getElementById('d_81')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_81">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var x = 0; var a = [4, 12, 7];
consol.log(a)
a[1] = undefined;
consol.log(a)
for (var i in a) { x++; }
var x = 0; var a = [4, 12, 7];
delete a[1];
for (var i in a) { x++; }
consol.log(a)
//===============================================    
        el = document.getElementById('d_81')
        el.innerHTML = s
    }f()</script>




##### Получение строки из массива


```python
from IPython.display import HTML
form = """
    <div id="d_82">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5, 7];
consol.log(a)
var s1 = a.toString(); // 1,5,7
consol.log(s1)
var s1 = a.join(); // 1,5,7
consol.log(s1)
var s1 = a.join(''); // 157
consol.log(s1)
var s1 = a.join('---'); // 1---5---7    
consol.log(s1)
//===============================================    
        el = document.getElementById('d_82')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_82">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5, 7];
consol.log(a)
var s1 = a.toString(); // 1,5,7
consol.log(s1)
var s1 = a.join(); // 1,5,7
consol.log(s1)
var s1 = a.join(''); // 157
consol.log(s1)
var s1 = a.join('---'); // 1---5---7    
consol.log(s1)
//===============================================    
        el = document.getElementById('d_82')
        el.innerHTML = s
    }f()</script>




##### Сложение массивов


```python
from IPython.display import HTML
form = """
    <div id="d_83">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5];
var b = [11, 8];
var arr = a.concat(3, b);
consol.log(arr)
// [1, 5, 3, 11, 8]
var s1 = [1, 5] + [11, 8];
consol.log(s1)
// 1,511,8    
//===============================================    
        el = document.getElementById('d_83')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_83">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5];
var b = [11, 8];
var arr = a.concat(3, b);
consol.log(arr)
// [1, 5, 3, 11, 8]
var s1 = [1, 5] + [11, 8];
consol.log(s1)
// 1,511,8    
//===============================================    
        el = document.getElementById('d_83')
        el.innerHTML = s
    }f()</script>




##### Получение части массива


```python
from IPython.display import HTML
form = """
    <div id="d_84">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5, 7, 12, 9];
var arr = a.slice(2);
consol.log(arr)
// [7, 12, 9]
var arr = a.slice(1, 3);
consol.log(arr)
// [5, 7]
var arr = a.slice(-3, -1);
consol.log(arr)
// [7, 12]
var arr = a.slice(2, 1);
consol.log(arr)
// []    
//===============================================    
        el = document.getElementById('d_84')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_84">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [1, 5, 7, 12, 9];
var arr = a.slice(2);
consol.log(arr)
// [7, 12, 9]
var arr = a.slice(1, 3);
consol.log(arr)
// [5, 7]
var arr = a.slice(-3, -1);
consol.log(arr)
// [7, 12]
var arr = a.slice(2, 1);
consol.log(arr)
// []    
//===============================================    
        el = document.getElementById('d_84')
        el.innerHTML = s
    }f()</script>




##### Сортировка массива


```python
from IPython.display import HTML
form = """
    <div id="d_85">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [14, 51, 7, 2];
consol.log(a)
a.reverse();
consol.log(a)
var a = [14, 51, 7, 2];
a.sort();
consol.log(a)
// [14, 2, 51, 7] !?
//function mySort(a, b) {return a–b;}
function mySort(a, b){return a-b}
a.sort(mySort);
// [2, 7, 14, 51]  
consol.log(a)
//===============================================    
        el = document.getElementById('d_85')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_85">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [14, 51, 7, 2];
consol.log(a)
a.reverse();
consol.log(a)
var a = [14, 51, 7, 2];
a.sort();
consol.log(a)
// [14, 2, 51, 7] !?
//function mySort(a, b) {return a–b;}
function mySort(a, b){return a-b}
a.sort(mySort);
// [2, 7, 14, 51]  
consol.log(a)
//===============================================    
        el = document.getElementById('d_85')
        el.innerHTML = s
    }f()</script>




##### Работа с концом массива
// Исходный массив  
var a = [5,'abc',73]  
// Извлечение элемента  
var v = a.pop();  
// [5, 'abc'], v = 73  
// Добавление элемента  
var v = a.push(12, 3);  
//[5, 'abc', 12, 3], v = 4  



```python
from IPython.display import HTML
form = """
    <div id="d_86">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5,'abc',73]
var v = a.pop();
// [5, 'abc'], v = 73
consol.log(a, v)
var v = a.push(12, 3);  
//[5, 'abc', 12, 3], v = 4  
consol.log(a, v)
//===============================================    
        el = document.getElementById('d_86')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_86">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5,'abc',73]
var v = a.pop();
// [5, 'abc'], v = 73
consol.log(a, v)
var v = a.push(12, 3);  
//[5, 'abc', 12, 3], v = 4  
consol.log(a, v)
//===============================================    
        el = document.getElementById('d_86')
        el.innerHTML = s
    }f()</script>




##### Работа с началом массива
// Исходный массив  
var a = [5, 'abc', 73];  
// Извлечение элемента  
var v = a.shift();  
// ['abc', 73], v = 5  
// Добавление элементов  
var v = a.unshift(12, 3);  
//[12, 3, 'abc', 73], v = 4  



```python
from IPython.display import HTML
form = """
    <div id="d_87">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
// Исходный массив
var a = [5, 'abc', 73];
consol.log(a)
// Извлечение элемента
var v = a.shift();
consol.log(a, v)
// ['abc', 73], v = 5
// Добавление элементов 
var v = a.unshift(12, 3);
consol.log(a, v)
//[12, 3, 'abc', 73], v = 4    
//===============================================    
        el = document.getElementById('d_87')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_87">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
// Исходный массив
var a = [5, 'abc', 73];
consol.log(a)
// Извлечение элемента
var v = a.shift();
consol.log(a, v)
// ['abc', 73], v = 5
// Добавление элементов 
var v = a.unshift(12, 3);
consol.log(a, v)
//[12, 3, 'abc', 73], v = 4    
//===============================================    
        el = document.getElementById('d_87')
        el.innerHTML = s
    }f()</script>




##### Вставка и удаление в любом месте 
var a = [5, 'abc', 73, 12, 8];  
consol.log(a)  
var arr = a.splice(1, 2);  
// [5, 12, 8]  
// arr = ['abc', 73]  
consol.log(a,' - - ',arr)  
var a = [5, 'abc', 73, 12, 8];  
var arr = a.splice(1, 0, 3);  
consol.log(a,' - - ',arr)  
// [5, 3, 'abc', 73, 12, 8]  
// arr = []    



```python

```


```python
from IPython.display import HTML
form = """
    <div id="d_88">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 'abc', 73, 12, 8]; 
consol.log(a)
var arr = a.splice(1, 2);  
// [5, 12, 8]  
// arr = ['abc', 73]  
consol.log(a,' - - ',arr)
var a = [5, 'abc', 73, 12, 8]; 
var arr = a.splice(1, 0, 3);  
consol.log(a,' - - ',arr)
// [5, 3, 'abc', 73, 12, 8]  
// arr = []    
//===============================================    
        el = document.getElementById('d_88')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_88">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 'abc', 73, 12, 8]; 
consol.log(a)
var arr = a.splice(1, 2);  
// [5, 12, 8]  
// arr = ['abc', 73]  
consol.log(a,' - - ',arr)
var a = [5, 'abc', 73, 12, 8]; 
var arr = a.splice(1, 0, 3);  
consol.log(a,' - - ',arr)
// [5, 3, 'abc', 73, 12, 8]  
// arr = []    
//===============================================    
        el = document.getElementById('d_88')
        el.innerHTML = s
    }f()</script>




##### Встроенный объект Math
-  Свойства  
E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2  
-  Методы  
sin(), asin(), cos(), acos(), tan(), atan(), atan2()  
ceil(), floor(), round(), abs(), max(), min(), random()  
exp(), log(), pow(), sqrt()  


```python
from IPython.display import HTML
form = """
    <div id="d_89">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================
consol.log(Math.PI)    
consol.log(Math.E)    
consol.log(Math.pow(2,10))    
//===============================================    
        el = document.getElementById('d_89')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_89">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================
consol.log(Math.PI)    
consol.log(Math.E)    
consol.log(Math.pow(2,10))    
//===============================================    
        el = document.getElementById('d_89')
        el.innerHTML = s
    }f()</script>




Лабораторная работа 4.3  
Дан массив a[5, 12]  
Записать в массив b[] квадраты значений  


```python
from IPython.display import HTML
form = """
    <div id="d_90">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 12]
var b = []
for(var i in a){
    b.push(a[i]*a[i])
}
consol.log(a)
consol.log(b)
//===============================================    
        el = document.getElementById('d_90')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_90">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var a = [5, 12]
var b = []
for(var i in a){
    b.push(a[i]*a[i])
}
consol.log(a)
consol.log(b)
//===============================================    
        el = document.getElementById('d_90')
        el.innerHTML = s
    }f()</script>




##### Методы массива 
//forEach:  
var nums = [1, 2, 3];  
nums.forEach(function(v){  
console.log(v * 10);  
});  
//map:  
var nums = [1, 4, 9];  
var result = nums.map(function(v) {  
return v * 10;  
});  


```python
from IPython.display import HTML
form = """
    <div id="d_91">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
//forEach:  
var nums = [1, 2, 3];  
nums.forEach(function(v){  
    consol.log(v * 10);  
});  
//map:  
var nums = [1, 4, 9];  
var result = nums.map(function(v) {  
    return v * 10;  
});
consol.log(nums, ' - ' , result)
//===============================================    
        el = document.getElementById('d_91')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_91">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
//forEach:  
var nums = [1, 2, 3];  
nums.forEach(function(v){  
    consol.log(v * 10);  
});  
//map:  
var nums = [1, 4, 9];  
var result = nums.map(function(v) {  
    return v * 10;  
});
consol.log(nums, ' - ' , result)
//===============================================    
        el = document.getElementById('d_91')
        el.innerHTML = s
    }f()</script>




##### Преобразование числа в строку
//toString()  
var n = 12345.6789;  
n.toFixed(2); // '12345.68'  
n.toExponential(2); // '1.23e+4'  
n.toPrecision(6); // '12345.7'  
n.toPrecision(4); // '1.235e+4'  


```python
from IPython.display import HTML
form = """
    <div id="d_92">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var n = 12345.6789;
consol.log(n.toFixed(2))
consol.log(n.toExponential(2))
consol.log(n.toPrecision(6))
consol.log(n.toPrecision(2))
//===============================================    
        el = document.getElementById('d_92')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_92">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var n = 12345.6789;
consol.log(n.toFixed(2))
consol.log(n.toExponential(2))
consol.log(n.toPrecision(6))
consol.log(n.toPrecision(2))
//===============================================    
        el = document.getElementById('d_92')
        el.innerHTML = s
    }f()</script>




##### Преобразование строки в число
var s = '37.5 км';  
var n = parseFloat(s); // 37.5  
var n = parseInt(s); // 37  


```python
from IPython.display import HTML
form = """
    <div id="d_93">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s1 = '37.5 км';
var n = parseFloat(s1); // 37.5
consol.log(n)
var n = parseInt(s1); // 37    
consol.log(n)
//===============================================    
        el = document.getElementById('d_93')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_93">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s1 = '37.5 км';
var n = parseFloat(s1); // 37.5
consol.log(n)
var n = parseInt(s1); // 37    
consol.log(n)
//===============================================    
        el = document.getElementById('d_93')
        el.innerHTML = s
    }f()</script>




Использование систем счисления  
var n = 255;  
var s = n.toString(16); // ff  
var s = 'ff';  
var n = parseInt(s, 16); // 255  


```python
from IPython.display import HTML
form = """
    <div id="d_94">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var n = 255;
var s1= n.toString(16); // ff
consol.log(n, s1)
var s1= 'ff';
var n = parseInt(s1, 16); // 255    
consol.log(n, s1)
//===============================================    
        el = document.getElementById('d_94')
        el.innerHTML = s
    }f()</script>
"""
HTML(form)
```





    <div id="d_94">____</div>
    <script>
    s = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        s += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var n = 255;
var s1= n.toString(16); // ff
consol.log(n, s1)
var s1= 'ff';
var n = parseInt(s1, 16); // 255    
consol.log(n, s1)
//===============================================    
        el = document.getElementById('d_94')
        el.innerHTML = s
    }f()</script>




##### Длина строки  
var str = 'Это - просто пример.'  
##### Сложение строк
var s1 = 'Это';  
var s2 = ' \u2014\x20';  
var s3 = 'просто пример.';  
var s = s1 + s2 + s3;  
var s = s1.concat(s2, s3);  


```python
from IPython.display import HTML
form = """
    <div id="d_95">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================
//.........12345678901234567890
var str = 'Это - просто пример.'  
consol.log(str, ' ', str.length)
var str = 'Это \u2012\u0020просто\x20пример.'
consol.log(str, ' ', str.length)

var s1 = 'Это';  
var s2 = ' \u2014\x20';  
var s3 = 'просто пример.';  
var s = s1 + s2 + s3;  
consol.log(s)
var s = s1.concat(s2, s3);
consol.log(s)
//===============================================    
        el = document.getElementById('d_95')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_95">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================
//.........12345678901234567890
var str = 'Это - просто пример.'  
consol.log(str, ' ', str.length)
var str = 'Это ‒ просто пример.'
consol.log(str, ' ', str.length)

var s1 = 'Это';  
var s2 = ' — ';  
var s3 = 'просто пример.';  
var s = s1 + s2 + s3;  
consol.log(s)
var s = s1.concat(s2, s3);
consol.log(s)
//===============================================    
        el = document.getElementById('d_95')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Регистр символов
var x = s.toLowerCase();  
var x = s.toUpperCase();  
##### Получение символа из строки
var s = 'просто пример';  
var x = s.charAt(4); // 'т  
var x = s.charAt(40); // ''  
var x = s.charCodeAt(4);//1090 (U+0442)  
var x = s.charCodeAt(40); // NaN  
// Создание строки из кодов символов  
var x = String.fromCharCode(1051, 1091,  
1085, 1072); // Луна  


```python
from IPython.display import HTML
form = """
    <div id="d_96">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это - просто пример.'
consol.log(s)
var x = s.toLowerCase();
consol.log(x)
var x = s.toUpperCase();    
consol.log(x)

var s = 'просто пример';
consol.log(s)
var x = s.charAt(4); // 'т
consol.log(x)
var x = s.charAt(40); // ''
consol.log(x)
var x = s.charCodeAt(4);//1090 (U+0442)
consol.log(x)
var x = s.charCodeAt(40); // NaN
consol.log(x)
// Создание строки из кодов символов
var x = String.fromCharCode(1051, 1091,
1085, 1072); // Луна
consol.log(x)
//===============================================    
        el = document.getElementById('d_96')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_96">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это - просто пример.'
consol.log(s)
var x = s.toLowerCase();
consol.log(x)
var x = s.toUpperCase();    
consol.log(x)

var s = 'просто пример';
consol.log(s)
var x = s.charAt(4); // 'т
consol.log(x)
var x = s.charAt(40); // ''
consol.log(x)
var x = s.charCodeAt(4);//1090 (U+0442)
consol.log(x)
var x = s.charCodeAt(40); // NaN
consol.log(x)
// Создание строки из кодов символов
var x = String.fromCharCode(1051, 1091,
1085, 1072); // Луна
consol.log(x)
//===============================================    
        el = document.getElementById('d_96')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Получение части строки
var s = 'просто пример';  
var x = s.slice(3, 6); // сто  
var x = s.substring(3, 6); // сто  
var x = s.slice(6); // пример  
var x = s.substring(6); // пример  
var x = s.slice(); // просто пример  
var x = s.substring(); // просто пример  
var x = s.slice(6, 3); // ""  
var x = s.substring(6, 3); // сто  



```python
from IPython.display import HTML
form = """
    <div id="d_97">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'просто пример';
consol.log(s)
var x = s.slice(3, 6); // сто
consol.log(x)
var x = s.substring(3, 6); // сто
consol.log(x)
var x = s.slice(6); // пример
consol.log(x)
var x = s.substring(6); // пример
consol.log(x)
var x = s.slice(); // просто пример
consol.log(x)
var x = s.substring(); // просто пример
consol.log(x)
var x = s.slice(6, 3); // ""
consol.log(x)
var x = s.substring(6, 3); // сто    
consol.log(x)
//===============================================    
        el = document.getElementById('d_97')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_97">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'просто пример';
consol.log(s)
var x = s.slice(3, 6); // сто
consol.log(x)
var x = s.substring(3, 6); // сто
consol.log(x)
var x = s.slice(6); // пример
consol.log(x)
var x = s.substring(6); // пример
consol.log(x)
var x = s.slice(); // просто пример
consol.log(x)
var x = s.substring(); // просто пример
consol.log(x)
var x = s.slice(6, 3); // ""
consol.log(x)
var x = s.substring(6, 3); // сто    
consol.log(x)
//===============================================    
        el = document.getElementById('d_97')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Поиск по строке
var s = 'Это - просто пример.'  
var x = s.indexOf('пр'); // 6  
var x = s.indexOf('пр', 7); // 13  
var x = s.lastIndexOf('пр'); // 13  
var x = s.lastIndexOf('пр', 9); // 6  



```python
from IPython.display import HTML
form = """
    <div id="d_98">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это - просто пример.'
consol.log(s)
var x = s.indexOf('пр'); // 6
consol.log(x)
var x = s.indexOf('пр', 7); // 13
consol.log(x)
var x = s.lastIndexOf('пр'); // 13
consol.log(x)
var x = s.lastIndexOf('пр', 9); // 6
consol.log(x)
//===============================================    
        el = document.getElementById('d_98')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_98">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это - просто пример.'
consol.log(s)
var x = s.indexOf('пр'); // 6
consol.log(x)
var x = s.indexOf('пр', 7); // 13
consol.log(x)
var x = s.lastIndexOf('пр'); // 13
consol.log(x)
var x = s.lastIndexOf('пр', 9); // 6
consol.log(x)
//===============================================    
        el = document.getElementById('d_98')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Замена в строке
var s = 'Это просто пример';  
var x = s.replace('просто',  
'сложный');  
// 'Это сложный пример'  


```python
from IPython.display import HTML
form = """
    <div id="d_99">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это просто пример';
var x = s.replace('просто',
'сложный');
// 'Это сложный пример' 
consol.log(s)
consol.log(x)
//===============================================    
        el = document.getElementById('d_99')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_99">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это просто пример';
var x = s.replace('просто',
'сложный');
// 'Это сложный пример' 
consol.log(s)
consol.log(x)
//===============================================    
        el = document.getElementById('d_99')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Разбиение строки
var s = 'Это просто пример';  
var x = s.split(' ');  
// [Это, просто, пример]  
var x = s.split(' ', 2);  
// [Это, просто]  


```python
from IPython.display import HTML
form = """
    <div id="d_101">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это просто пример';
var x = s.split(' ');
// [Это, просто, пример]
consol.log(s)
consol.log(x)
var x = s.split(' ', 2);
// [Это, просто]    
consol.log(x)
//===============================================    
        el = document.getElementById('d_101')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_101">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var s = 'Это просто пример';
var x = s.split(' ');
// [Это, просто, пример]
consol.log(s)
consol.log(x)
var x = s.split(' ', 2);
// [Это, просто]    
consol.log(x)
//===============================================    
        el = document.getElementById('d_101')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Регулярные выражения
var re = /regexp/Флаги;  
Методы объекта String  
replace(regexp, string);  
split(regexp)  
search(regexp)  
match(regexp)  
Методы объекта RegExp  
test(string);  
exec(string);  
##### Базовое использование
var pattern = /@/;  
var str = "vasya@gmail.com";  
str.search(pattern); // 5 indexOf()  
var re = /gmail|hotmail/;  
str.search(re);  
"folder/file".search(/\//); // 6  
/\\//.test("folder/file"); // true  


```python
from IPython.display import HTML
form = """
    <div id="d_103">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var pattern = /@/;
var str = "vasya@gmail.com";
var k = str.search(pattern); // 5 indexOf()
consol.log(k)
var re = /gmail|hotmail/;
var k = str.search(re);
consol.log(k)
str = 'folder/file'
k = str.search(/\//); // 6
consol.log(k)
k = /\//.test("folder/file"); // true    
consol.log(k)
//===============================================    
        el = document.getElementById('d_103')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_103">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
var pattern = /@/;
var str = "vasya@gmail.com";
var k = str.search(pattern); // 5 indexOf()
consol.log(k)
var re = /gmail|hotmail/;
var k = str.search(re);
consol.log(k)
str = 'folder/file'
k = str.search(/\//); // 6
consol.log(k)
k = /\//.test("folder/file"); // true    
consol.log(k)
//===============================================    
        el = document.getElementById('d_103')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Специальные последовательности
\0 Символ NULL (\u0000)  
\t Горизонтальная табуляция (\u0009)  
\n Перевод строки (\u000A)  
\r Возврат каретки (\u000D)
\\ Обратная косая черта (\u005C)  
\xXX Символ Latin-1, Заданный двумя 
шестнадцатеричными цифрами  
\uXXXX Символ Unicode, Заданный четырьмя шестнадцатеричными цифрами  
^ $ . * + ? = ! : | \ / () [] {}  


##### Классы символов
var re = /[abc]/;  
var re = /[^abc]/;  
var re = /[a-f]/;  
. Любой символ, кроме переноса  
\w Любой символ ASCII [a-zA-Z0-9_]  
\W Противоположное \w [^a-zA-Z0-9_]  
\d Любая цифра ASCII [0-9]  
\D Противоположное \d [^0-9]  
\s Любой символ-разделитель Unicode  
\S Противоположное \s  
##### Повторения
{n,m}  
шаблон повторяется не менее n, не более
m раз  
{n,}  
шаблон повторяется не менее n раз  
{n}  
шаблон повторяется точно n раз  
? Эквивалентно {0, 1}  
\+ Эквивалентно {1,}  
\* Эквивалентно {0,}  

##### Позиции соответствия
^ Поиск с начала строки  
\\$ Поиск до конца строки  
\b Позиция между символом ASCII и символом ASCII (граница слова)  
\B Позиция между двумя символами
ASCII (не граница слова)  
var re = /^abc/;  
var re = /abc$/;  
var re = /\bjava\b/;  
var re = /\bjava\B/;
##### Флаги
ignoreCase  
var r = /a/i; //ищутся символы 'a' и 'A'  
global  
var r = /a/g; //ищутся все символы 'a'  
multiline  
var r = /a/gim;  


##### Группировка и ссылки
var r = /ab(cd)?/;  
// Ищем содержимое в одинаковых кавычках  
var r = /['"][^'"]*['"]/; //проблема  
var r = /(['"])[^'"]*\1/; //ссылка \1  
//Внешние ссылки  
'1A'.replace(/(\d+)([a-z]+)/i, '\\$2-\\$1');  
##### Методы match() и exec()
var re = /(ab)(cd)(xyz)/;  
var res = 'abcdxyz'.match(re);  
Результат (переменная res)  
[  
'abcdxyz', // индекс 0  
'ab',  
'cd',  
'xyz'  
]  
/(ab)(cd)(xyz)/.exec('abcdxyz');  

#### Объектно ориентированное программирование
###### Конструкторы
function Point(x, y) {  
this.x = x; this.y = y;  
this.getCoords = function(){  
return [this.x, this.y];  
};  
}  
var start = new Point(10, 20);  
var coords = start.getCoords();  
start.constructor;  


```python
from IPython.display import HTML
form = """
    <div id="d_115">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
function Point(x, y) {
    this.x = x; this.y = y;
    this.getCoords = function(){
        return [this.x, this.y];
    };
}
var start = new Point(10, 20);
var coords = start.getCoords();
start.constructor;    
consol.log(coords, start.constructor)
//===============================================    
        el = document.getElementById('d_115')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_115">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
function Point(x, y) {
    this.x = x; this.y = y;
    this.getCoords = function(){
        return [this.x, this.y];
    };
}
var start = new Point(10, 20);
var coords = start.getCoords();
start.constructor;    
consol.log(coords, start.constructor)
//===============================================    
        el = document.getElementById('d_115')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Новый взгляд на привычное
var n = new Number(5);  
var s = new String('John');  
var b = new Boolean(true);  
var a = new Array(5);  
var o = new Object();  
var re = new RegExp('[a-z+]','i');  
##### Проверка конструктора
var myObject = [];  
myObject instanceof Array;  
var x = new Number(5);  
x instanceof Object; // true  
x++;  
x instanceof Object; // false  
##### Прототипы
```
Point.prototype.add = function(obj) {  
     return new Point(  
     this.x + obj.x, this.y + obj.y);  
};  
var start = new Point(10, 10);  
var finish = new Point(20, 20);  
var line = start.add(finish);  
var line = new Point(10, 10).add(new Point(20, 20);
line.constructor.prototype.draw = ...
```
##### Методы объекта
var n = new Number(5);  
n.valueOf();  
var obj = {x: 10};  
obj.hasOwnProperty('x');  
Object.prototype.isPrototypeOf(obj);  

##### Объект Date
Время хранится в миллисекундах  
Точка отсчета -1 января 1970 года (00:00:00)  
Greenwich Mean Time (GMT)  
Дата и время указывается в соответствии с местным часовым поясом  
Указывается смещение относительно Гринвичского меридиана  
Смещение зависит от переходов на летнее и зимнее время  
UniversalTime Coordinated (UTC)  
Дата и время в любой точке планеты одинаково  
Точка отсчета совпадает с точностью до долей секунды с точкой отсчета GMT  
Никаких переходов на летнее и зимнее время в UTC нет  

##### Создание объекта Date
var d = new Date();  
var d = new Date('Jan 01 2010 01:00:00');  
var d = new Date(1234567890000);  
var d = new Date(2011, 5);  
год, месяц, дата, часы, минуты, секунды, миллисекунды  
var d = new Date(2011, 5, 21);  
var d = new Date(2011, 12, 40);  
var d = new Date(2011, -1);  
##### Методы объекта Date
getFullYear()  
getUTCFullYear()  
getMonth() 0-11  
getDate() 1-31  
getHours() 0-24  
getMinutes() 0-59  
getSeconds() 0-59  
getMilliseconds() 0-999  
getDay() 0-6  
0 - Воскресение!  
##### Дополнительные методы
getTimezoneOffset()  
смещение GMT в минутах  
количество миллисекунд от 01.01.1970  
getTime(), valueOf()  
var n = Date.parse('Feb 09 2012 03:45:15');  
var d = new Date(n);  
var n = Date.UTC(2012, 5);  
##### Строчное представление даты
toString() (GMT)  
toLocaleString() (GMT)  
toUTCString()  
toTimeString()  
toLocaleTimeString()  
toDateString()  
toLocaleDateString()  
##### Запись информации
setFullYear()  
setUTCFullYear()  
setMonth()  
setDate()  
setHours()  
setMinutes()  
setSeconds()  
setMilliseconds()  
setTime() не имеет  UTC  

##### Объект error
```
try{
    console.log(x);
}catch(e){
    console.log(e.name);
    console.log(e.message);
}
console.log('test');
```


```python
from IPython.display import HTML
form = """
    <div id="d_129">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    

try{
    consol.log(x);
}catch(e){
    consol.log(e.name);
    consol.log(e.message);
}
consol.log('test');    
//===============================================    
        el = document.getElementById('d_129')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_129">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    

try{
    consol.log(x);
}catch(e){
    consol.log(e.name);
    consol.log(e.message);
}
consol.log('test');    
//===============================================    
        el = document.getElementById('d_129')
        el.innerHTML = ssstttrrr
    }f()</script>




##### Конструктор объекта Error
```
try{
    var a = 1, b = 0, x;
    if(b == 0)
        throw new Error('Ошибка!');
    x = a / b;
}catch(e){
    console.log(e.message);
}
```


```python
from IPython.display import HTML
form = """
    <div id="d_130">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
try{
    var a = 1, b = 0, x;
    if(b == 0)
        throw new Error('Ошибка!');
    x = a / b;
}catch(e){
    consol.log(e.message);
}    
//===============================================    
        el = document.getElementById('d_130')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_130">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
try{
    var a = 1, b = 0, x;
    if(b == 0)
        throw new Error('Ошибка!');
    x = a / b;
}catch(e){
    consol.log(e.message);
}    
//===============================================    
        el = document.getElementById('d_130')
        el.innerHTML = ssstttrrr
    }f()</script>





```python

```


```python

```


```python

```


```python

```


```python

```


```python

```


```python
from IPython.display import HTML
form = """
    <div id="d_">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    
    
//===============================================    
        el = document.getElementById('d_')
        el.innerHTML = ssstttrrr
    }f()</script>
"""
HTML(form)
```





    <div id="d_">____</div>
    <script>
    ssstttrrr = ''
    var consol={
    log:function (s1, s2='',s3='',s4 ='', s5='<br>'){
        ssstttrrr += s1+' '+s2+' '+s3+' '+s4+' '+s5   }}
    function f(){
//===============================================    

//===============================================    
        el = document.getElementById('d_')
        el.innerHTML = ssstttrrr
    }f()</script>



