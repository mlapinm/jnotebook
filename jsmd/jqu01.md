demo-1-1.html  




```python
import lib01
sss = '''\
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
		<script>
		print1($("li").length, $("li")[0])	
        console.log($("li"))
        console.log($("ul li"))
        console.log($("#box"), $("#box").length)
        console.log($(".class").length)
        var divs = document.body.childNodes
        //Поиск div-а
        var div = null
        for(var i in divs){
            if(divs[i].tagName == 'DIV'){
                div = divs[i]
                break;
            }
        }
        //Засовываем объект в $
        console.log(div, $(div) )
        //Выбор li в контексте div
        console.log($("li", div))
        //Узнать свойство элемента scc --> rgb(128, 0, 0)
        console.log($("ul li").css("color"))
        console.log($("ul li").css("font-size"))
        //изменить
        console.log($("ul li").css("background","#FAF"))
        console.log()
        console.log()
        console.log()
        console.log()
        console.log()
		</script>
'''
lib01.writeJQ('index2.html', sss)
print('ok')
```

    ok
    


```python
import lib01
sss = '''\
<script>
$(function(){
    $("ul li").css({
        "color":"#F5F",
        "background":"#FF0",
    })
})
</script>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
		<script>
        console.log()
		</script>
'''
lib01.writeJQ('index2.html', sss)
print('ok')
```

    ok
    


```python
import lib01
sss = '''\
<script>
$(function(){
    $("ul li").addClass("myList")
})
</script>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
		<script>
        console.log()
		</script>
'''
lib01.writeJQ('index2.html', sss)
print('ok')
```

    ok
    


```python
import lib01
hhh = '''\
	<style>
		.myList{
			color:blue;
		}
	</style>
'''
sss = '''\
<script>
$(function(){
    $("ul li").addClass("myList")
})
</script>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
		<script>        
        var lis = document.getElementsByTagName('LI')
        var li = lis[0]
        li.type = "none"
        for(i in li){
        console.log(i, li[i])
        }
        console.log(li,li.type)
		</script>
'''
lib01.writeJQH('index2.html', sss, hhh)
print('ok')
```

    ok
    


```python
import lib01
hhh = '''\
	<style>
		.myList{
			color:blue;
		}
	</style>
'''
sss = '''\
<script>
$(function(){
        switch(0){
        case 10:
            break
        case 10:
            break
        case 10:
            break
        case 0:
            break
        case 10:
            $("ul li:first-child").addClass("myList")
            var li = $("ul li:first")
            var i = li.is(":visible")
            console.log(i)
            break
            break
        case 10:
            $("ul li:first-child").addClass("myList")
            var li = $("ul li:last")
            var i = li.is(":contains('Первый')")
            console.log(i,$("ul li"))
            break
        case 10:
            $("ul li:first-child").addClass("myList")
            var li = $("ul li:first")
            var i = li.is(":contains('Первый')")
            console.log(i)
            break
        case 10:
            $("ul li:first-child").addClass("myList")
            var li = $("ul li:last")
            var i = li.is(".myList")
            console.log(i)
            break
        case 10:
            $("ul li:first-child").addClass("myList")
            var li = $("ul li:first")
            var i = li.is(".myList")
            console.log(i)
            break
        case 10:
            $("ul li:odd").addClass("myList")
            break
        case 3:
            $("ul li:even").addClass("myList")
            break
        case 2:
            $("ul li:last").addClass("myList")
            break
        case 1:
            $("ul li:first-child").addClass("myList")
            break
        }
})
</script>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
		<script> 
		</script>
'''
lib01.writeJQH('index2.html', sss, hhh)
print('ok')
```

    ok
    


```python
from IPython.display import HTML
form = """
	<style>
		.myList{
			color:blue;
		}
	</style>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
    <div id="d_80">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
switch(1){
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.filter(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.filter(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.not(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 1:
        var lis = $("div#box ul li")
        lis.addClass("myList")
        $("div#box ul li:odd").removeClass("myList")
        print1(lis.length, lis[0].innerHTML)
    break
    }


//===============================================    
        el = document.getElementById('d_80')
        el.innerHTML = sss
    }f()</script>
        
    <script>
    </script>
"""
HTML(form)
```





	<style>
		.myList{
			color:blue;
		}
	</style>
		<div id='box'>
			<ul>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт</li>
				<li>Четвертый пункт</li>
			</ul>
		</div>
    <div id="d_80">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
switch(1){
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.filter(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.filter(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 11:
        var li = $("div#box ul li:first")
        li.addClass("myList")
        var lis = $("div#box ul li")
        var myLis = lis.not(".myList")
        print1(myLis.length, myLis[0].innerHTML)
    break
    case 1:
        var lis = $("div#box ul li")
        lis.addClass("myList")
        $("div#box ul li:odd").removeClass("myList")
        print1(lis.length, lis[0].innerHTML)
    break
    }


//===============================================    
        el = document.getElementById('d_80')
        el.innerHTML = sss
    }f()</script>

    <script>
    </script>





```python
from IPython.display import HTML
form = """
	<style>
		.myList{
			color:blue;
		}
	</style>
		<div id='box1'>
			<ul class='myList'>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт
                    <ul>
                        <li>Подпункт</li>
                    </ul>
                </li>
				<li><span>Четвертый</span> пункт</li>
			</ul>
		</div>
    <div id="d_81">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
switch(1){
    case 11:
        var lis = $("div#box1 ul li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.children("li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.find("li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.find("li")
        lis.eq(1).css("color","red")
        var s1 = lis.eq(1).text("Second").text()
        lis.eq(1).html(s1 + ' ' + "<em>punkt</em>")
        lis.eq(1).prev().css("background", "#FAF")
        lis.eq(1).next().css("background", "#FEF")
        print1(lis.length, lis.eq(1).text(), 
        lis.eq(1).html(), lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.siblings().css("color","red")
        li.closest('ul').css("background", "#FEF")
        print1(uls.length, li.closest().length,li[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.siblings().css("color","red")
        li.closest('ul').css("background", "#FEF")
        print1(uls.length, li.closest().length,li[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.css("color","red")
        li.parent().css("background", "#FEF")
        print1(li.parents().length,
        li.closest('div').length,
        li.parent('div').length,
        uls.length, li[0].innerHTML)
    break
    case 1:
        var uls = $("ul.myList")
        var lis = uls.children("li")
        lis.html(function(i,v){
            return i + '-' + v + ";"
        })
        print1(lis.length, lis[0].innerHTML)
    break
    }
//===============================================    
        el = document.getElementById('d_81')
        el.innerHTML = sss
    }f()</script>
        
    <script>
    </script>
"""
HTML(form)
```





	<style>
		.myList{
			color:blue;
		}
	</style>
		<div id='box1'>
			<ul class='myList'>
				<li>Первый пункт</li>
				<li>Второй пункт</li>
				<li>Третий пункт
                    <ul>
                        <li>Подпункт</li>
                    </ul>
                </li>
				<li><span>Четвертый</span> пункт</li>
			</ul>
		</div>
    <div id="d_81">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
switch(1){
    case 11:
        var lis = $("div#box1 ul li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.children("li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.find("li")
        print1(lis.length, lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var lis = uls.find("li")
        lis.eq(1).css("color","red")
        var s1 = lis.eq(1).text("Second").text()
        lis.eq(1).html(s1 + ' ' + "<em>punkt</em>")
        lis.eq(1).prev().css("background", "#FAF")
        lis.eq(1).next().css("background", "#FEF")
        print1(lis.length, lis.eq(1).text(), 
        lis.eq(1).html(), lis[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.siblings().css("color","red")
        li.closest('ul').css("background", "#FEF")
        print1(uls.length, li.closest().length,li[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.siblings().css("color","red")
        li.closest('ul').css("background", "#FEF")
        print1(uls.length, li.closest().length,li[0].innerHTML)
    break
    case 11:
        var uls = $("ul.myList")
        var li = uls.find("li").eq(1)
        li.css("color","red")
        li.parent().css("background", "#FEF")
        print1(li.parents().length,
        li.closest('div').length,
        li.parent('div').length,
        uls.length, li[0].innerHTML)
    break
    case 1:
        var uls = $("ul.myList")
        var lis = uls.children("li")
        lis.html(function(i,v){
            return i + '-' + v + ";"
        })
        print1(lis.length, lis[0].innerHTML)
    break
    }
//===============================================    
        el = document.getElementById('d_81')
        el.innerHTML = sss
    }f()</script>

    <script>
    </script>





```python
from IPython.display import HTML
form = """
    <base target="_blank">
	<style>
		.myList{
			color:blue;
		}
	</style>
    <div id="box3">
		<form action="demo-2.html">
			<label for="name">Имя</label><br />
			<input type="text" name="name" id="name"/><br />
			<label for="email">Email</label><br />
			<input type="text" name="email" id="email" /><br />
			<label for="books">Книги</label><br />
			<select name="books" id="books">
				<option value="1">AJAX</option>
				<option value="2">XML and XSLT</option>
				<option value="3">PHP</option>
				<option value="4">Java Script</option>
				<option value="5">jQuery</option>
			</select><br />
			<label for="chk">Вы уверены?</label>
			<input type="checkbox" name="chk" id="chk" /><br />
			<input type="submit" value="Отправить" /><br />
		</form>
    </div>
    <div id="d_82">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
    var ins = $("input[type='text']")
    .val("Hello")
    var sels = $("div#box3 select")
    sels.val("2")
    print1(sels.length,sels.text(),ins.length,'2222')
//===============================================    
        el = document.getElementById('d_82')
        el.innerHTML = sss
    }f()</script>
        
    <script>
    </script>
"""
HTML(form)
```





    <base target="_blank">
	<style>
		.myList{
			color:blue;
		}
	</style>
    <div id="box3">
		<form action="demo-2.html">
			<label for="name">Имя</label><br />
			<input type="text" name="name" id="name"/><br />
			<label for="email">Email</label><br />
			<input type="text" name="email" id="email" /><br />
			<label for="books">Книги</label><br />
			<select name="books" id="books">
				<option value="1">AJAX</option>
				<option value="2">XML and XSLT</option>
				<option value="3">PHP</option>
				<option value="4">Java Script</option>
				<option value="5">jQuery</option>
			</select><br />
			<label for="chk">Вы уверены?</label>
			<input type="checkbox" name="chk" id="chk" /><br />
			<input type="submit" value="Отправить" /><br />
		</form>
    </div>
    <div id="d_82">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
    function f(){
//===============================================
    var ins = $("input[type='text']")
    .val("Hello")
    var sels = $("div#box3 select")
    sels.val("2")
    print1(sels.length,sels.text(),ins.length,'2222')
//===============================================    
        el = document.getElementById('d_82')
        el.innerHTML = sss
    }f()</script>

    <script>
    </script>





```python
from IPython.display import HTML
form = """
    <base target="_blank">
	<style>
		.myList{
			color:blue;
		}
	</style>
    <div id="box4">
		<form action="demo-2.html">
			<label for="name">Имя</label><br />
			<input type="text" name="name" id="name" value="John"/><br />
			<label for="email">Email</label><br />
			<input type="text" name="email" id="email" value="john@smith.com"/><br />
			<label for="books">Книги</label><br />
			<select name="books" id="books">
				<option value="1">AJAX</option>
				<option value="2">XML and XSLT</option>
				<option value="3">PHP</option>
				<option value="4">Java Script</option>
				<option value="5">jQuery</option>
			</select><br />
			<label for="chk">Вы уверены?</label>
			<input type="checkbox" name="chk" id="chk" /><br />
			<input type="submit" value="Отправить" /><br />
		</form>
    </div>
    <div id="d_83">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
$(function(){
    var ins = $("div#box4 input[type='text']")
    ins.each(function(i,el){
    console.log(i,$(el).val(),el.value)
    })
})
    function f(){
//===============================================
    print1(ins,'2222')
//===============================================    
        el = document.getElementById('d_83')
        el.innerHTML = sss
    }f()</script>
        
    <script>
    </script>
"""
HTML(form)
```





    <base target="_blank">
	<style>
		.myList{
			color:blue;
		}
	</style>
    <div id="box4">
		<form action="demo-2.html">
			<label for="name">Имя</label><br />
			<input type="text" name="name" id="name" value="John"/><br />
			<label for="email">Email</label><br />
			<input type="text" name="email" id="email" value="john@smith.com"/><br />
			<label for="books">Книги</label><br />
			<select name="books" id="books">
				<option value="1">AJAX</option>
				<option value="2">XML and XSLT</option>
				<option value="3">PHP</option>
				<option value="4">Java Script</option>
				<option value="5">jQuery</option>
			</select><br />
			<label for="chk">Вы уверены?</label>
			<input type="checkbox" name="chk" id="chk" /><br />
			<input type="submit" value="Отправить" /><br />
		</form>
    </div>
    <div id="d_83">____</div>
    <script>
    sss = ''
function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss += s1+' '+s2+' '+s3+' '+s4+' '+s5}
$(function(){
    var ins = $("div#box4 input[type='text']")
    ins.each(function(i,el){
    console.log(i,$(el).val(),el.value)
    })
})
    function f(){
//===============================================
    print1(ins,'2222')
//===============================================    
        el = document.getElementById('d_83')
        el.innerHTML = sss
    }f()</script>

    <script>
    </script>



