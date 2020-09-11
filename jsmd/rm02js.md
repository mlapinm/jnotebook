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
import codecs
text = ''
with codecs.open('text01.html','r','utf-8') as file:
    text1 = file.read()
print(text1)
```

    <html>\
        <head>\
        <title>Test</title>\
        </head>\
        <body>\
            <p id =\"p1\">Welcome..</p>\
        </body>\
        </html>
    


```python
from IPython.display import HTML
f1 = """
    <script>
        var text2=" """
f21 = "<html>\
    <head>\
    <title>Test</title>\
    </head>\
    <body>\
        <p>Welcome..</p>\
    </body>\
    </html>"
f2 = text1
f3 = """ "
    </script>"""
form = """
    <script>
        var text=
    '<html>\
    <head>\
    <title>Test</title>\
    </head>\
    <body>\
        <p name = "p">Welcome..</p>\
    </body>\
    </html>'
    </script>
    <div id="d2location">____</div>
    <p><input type="button" value="openWin" onclick="openWin()"></p>
    <p><input type="button" value="closeWin" onclick="closeWin()"></p>
    <p><input type="button" value="writeDoc" onclick="writeDoc()"></p>
    <p><input type="button" value="getDoc" onclick="getDoc()"></p>
    <script>
    var win
    function openWin(){
        var p = "width=300,height=200,top=0,left=0"
        win = window.open("","",p)
        
        var s = 'openWin'
        el = document.getElementById('d2location')
        el.innerHTML = s
    }
    function closeWin(){
        win.close()
    }
    function writeDoc(){
        win.focus()
        win.document.open()
        win.document.write(text2)
        //win.document.close()
    }
    function getDoc(){
        //win.document.open()
        var d = win.document
        //el = document.getElementById('d1screen')
        //el.innerHTML = s
        var el1 = win.document.getElementById('p1')
        console.log(d, el1.innerHTML)
        var el = document.getElementById('d2location')
        el.innerHTML = el1.innerHTML
        win.document.close()
    }
    </script>
"""

HTML(f1+f2+f3+form)
# print(f1+f2+f3+form)
```





<script>
    var text2=" <html>\
<head>\
<title>Test</title>\
</head>\
<body>\
    <p id =\"p1\">Welcome..</p>\
</body>\
</html> "
</script>
<script>
    var text=
'<html>    <head>    <title>Test</title>    </head>    <body>        <p name = "p">Welcome..</p>    </body>    </html>'
</script>
<div id="d2location">____</div>
<p><input type="button" value="openWin" onclick="openWin()"></p>
<p><input type="button" value="closeWin" onclick="closeWin()"></p>
<p><input type="button" value="writeDoc" onclick="writeDoc()"></p>
<p><input type="button" value="getDoc" onclick="getDoc()"></p>
<script>
var win
function openWin(){
    var p = "width=300,height=200,top=0,left=0"
    win = window.open("","",p)

    var s = 'openWin'
    el = document.getElementById('d2location')
    el.innerHTML = s
}
function closeWin(){
    win.close()
}
function writeDoc(){
    win.focus()
    win.document.open()
    win.document.write(text2)
    //win.document.close()
}
function getDoc(){
    //win.document.open()
    var d = win.document
    //el = document.getElementById('d1screen')
    //el.innerHTML = s
    var el1 = win.document.getElementById('p1')
    console.log(d, el1.innerHTML)
    var el = document.getElementById('d2location')
    el.innerHTML = el1.innerHTML
    win.document.close()
}
</script>




[yandex](https://yandex.ru)  
[загрузить элементы документа с другой страницы](https://javascript.ru/forum/events/11544-zagruzit-ehlementy-dokumenta-s-drugojj-stranicy.html)


```python
from IPython.display import HTML
form = """
    <div id="d2location">____</div>
    <p><input type="button" value="openWin" onclick="openWin()"></p>
    <p><input type="button" value="closeWin" onclick="closeWin()"></p>
    <p><input type="button" value="writeDoc" onclick="writeDoc()"></p>
    <script>
    var win
    function openWin(){
        var p = "width=300,height=200,top=0,left=0"
        win = window.open("","",p)
        
        var s = 'openWin'
        el = document.getElementById('d2location')
        el.innerHTML = s
    }
    function closeWin(){
        win.close()
    }
    function writeDoc(){
        var text = ''
        text += 
    '<html>\
    <head>\
    <title>Test</title>\
    </head>\
    <body>\
        <p>Welcome..</p>\
    </body>\
    </html>'
        win.document.open()
        win.document.write(text)
        win.document.close()
    }
    </script>
"""

HTML(form)
```





<div id="d2location">____</div>
<p><input type="button" value="openWin" onclick="openWin()"></p>
<p><input type="button" value="closeWin" onclick="closeWin()"></p>
<p><input type="button" value="writeDoc" onclick="writeDoc()"></p>
<script>
var win
function openWin(){
    var p = "width=300,height=200,top=0,left=0"
    win = window.open("","",p)

    var s = 'openWin'
    el = document.getElementById('d2location')
    el.innerHTML = s
}
function closeWin(){
    win.close()
}
function writeDoc(){
    var text = ''
    text += 
'<html>    <head>    <title>Test</title>    </head>    <body>        <p>Welcome..</p>    </body>    </html>'
    win.document.open()
    win.document.write(text)
    win.document.close()
}
</script>





```python

```
