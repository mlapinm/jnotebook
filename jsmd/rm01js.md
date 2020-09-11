```python

```


```python

```

##### document


```python
from IPython.display import HTML
form = """
    <div id="d1window">____</div>
    <script>
    function f(){
        var s = ''
        var k = 0
        for(var p in document){
            s += p +' : ' + document[p]+ '</br>'
            if(k == 30){
            break
            }
            k += 1
        }
        
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
    var s = ''
    var k = 0
    for(var p in document){
        s += p +' : ' + document[p]+ '</br>'
        if(k == 30){
        break
        }
        k += 1
    }

    el = document.getElementById('d1window')
    el.innerHTML = s
}
f()
</script>




window  
innerWidth : 705
innerHeight : 371


```python
from IPython.display import HTML
form = """
    <div id="d1window">____</div>
    <script>
    function f(){
        var s = ''
        var k = 0
        for(var p in window){
            s += p +' : ' + window[p]+ '</br>'
            if(k == 30){
            break
            }
            k += 1
        }
        
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
    var s = ''
    var k = 0
    for(var p in window){
        s += p +' : ' + window[p]+ '</br>'
        if(k == 30){
        break
        }
        k += 1
    }

    el = document.getElementById('d1window')
    el.innerHTML = s
}
f()
</script>




replace : function () { [native code] }
href : http://localhost:8888/notebooks/js/rm01js.ipynb
ancestorOrigins : [object DOMStringList]
origin : http://localhost:8888
protocol : http:
host : localhost:8888
hostname : localhost
port : 8888
pathname : /notebooks/js/rm01js.ipynb  
search :  
hash :  
assign : function assign() { [native code] }  
reload : function reload() { [native code] }  
toString : function toString() { [native code] }  
hash - устанавливает или возвращает якорную часть (#) URL;  
host - устанавливает или возвращает имя хоста и номер порта URL;  
hostname - устанавливает или возвращает имя хоста URL;  
href - устанавливает или возвращает содержимое URL;  
origin - возвращает протокол, имя хоста и номер порта URL;  
pathname - устанавливает или возвращает часть URL, содержащей путь;  
port - устанавливает или возвращает номер порта URL;  
protocol - устанавливает или возвращает протокол URL;  
search - устанавливает или возвращает часть URL, содержащей строку с параметрами (?параметр1=значение1&параметр2=значение2&...);  


```python

```


```python
from IPython.display import HTML
form = """
    <div id="d2location">____</div>
    <script>
    function f(){
        var url = document.createElement('a');
        url.href = "http://www.example.com/some/path?name=value#anchor";
        url.href = "https://yandex.ru/search/?text=jscript%20location&lr=2"
        var protocol = url.protocol;
        var hash = url.hash;
        var s = ''
        k = 0 
        for(var p in url){
            s += p +' : ' + url[p]+ '</br>'
            if(k>30){
                break
            }
            k += 1
        }
        
        el = document.getElementById('d2location')
        el.innerHTML = s
    }
    f()
    </script>
"""

HTML(form)
```





<div id="d2location">____</div>
<script>
function f(){
    var url = document.createElement('a');
    url.href = "http://www.example.com/some/path?name=value#anchor";
    url.href = "https://yandex.ru/search/?text=jscript%20location&lr=2"
    var protocol = url.protocol;
    var hash = url.hash;
    var s = ''
    k = 0 
    for(var p in url){
        s += p +' : ' + url[p]+ '</br>'
        if(k>30){
            break
        }
        k += 1
    }

    el = document.getElementById('d2location')
    el.innerHTML = s
}
f()
</script>





```python
from IPython.display import HTML
form = """
    <div id="d1location">____</div>
    <script>
    function f(){
        var s = ''
        for(var p in location){
            s += p +' : ' + location[p]+ '</br>'
        }
        
        el = document.getElementById('d1location')
        el.innerHTML = s
    }
    f()
    </script>
"""

HTML(form)
```





<div id="d1location">____</div>
<script>
function f(){
    var s = ''
    for(var p in location){
        s += p +' : ' + location[p]+ '</br>'
    }

    el = document.getElementById('d1location')
    el.innerHTML = s
}
f()
</script>




screen


```python
from IPython.display import HTML
form = """
    <div id="d1screen">____</div>
    <script>
    function f(){
        var s = ''
        for(var p in screen){
            s += p +' ------ ' + screen[p]+ '</br>'
        }
        
        el = document.getElementById('d1screen')
        el.innerHTML = s
    }
    f()
    </script>
"""

HTML(form)
```





<div id="d1screen">____</div>
<script>
function f(){
    var s = ''
    for(var p in screen){
        s += p +' ------ ' + screen[p]+ '</br>'
    }

    el = document.getElementById('d1screen')
    el.innerHTML = s
}
f()
</script>




navigator  
clipboard  
writeText


```python
from IPython.display import HTML
form = """
    <div id="d1">____</div>
    <script>
    function f(){
        var s = ''
        for(var p in navigator){
            s += p +' ------ ' + navigator[p]+ '</br>'
        }
        
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
function f(){
    var s = ''
    for(var p in navigator){
        s += p +' ------ ' + navigator[p]+ '</br>'
    }

    el = document.getElementById('d1')
    el.innerHTML = s
}
f()
</script>





```python
from IPython.display import HTML
form = """
    <script>
    function f(){
        console.log('Clicked')
        el = document.getElementById('p1')
        el.innerHTML = 'Clicked'
        console.log('Clicked')
    }
    </script>
     <p><input type="button" value="Проверить" onclick="f()"></p>
    <p id="p1">____</p>
"""

HTML(form)
```





<script>
function f(){
    console.log('Clicked')
    el = document.getElementById('p1')
    el.innerHTML = 'Clicked'
    console.log('Clicked')
}
</script>
 <p><input type="button" value="Проверить" onclick="f()"></p>
<p id="p1">____</p>





```python
%%js
    function f(){
        console.log('Clicked')
        var el2 = document.getElementById('p2')
        el2.innerHTML = 'Clicked2'
        console.log('Clicked2')
    }
    f()


```


    <IPython.core.display.Javascript object>


<p id="p2">____</p>


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
