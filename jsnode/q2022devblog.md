1 [Введение. Синтаксис - YouTube](#Введение.-Синтаксис---YouTube)  
2 [Выбор селекторов. Оптимизация выборки - YouTube](#Выбор-селекторов.-Оптимизация-выборки---YouTube)  
3 [Работа с CSS. Изменения атрибутов элемента. - YouTube](#Работа-с-CSS.-Изменения-атрибутов-элемента.---YouTube)  
4 [События в jquery - YouTube](#События-в-jquery---YouTube)  
5 [Анимация. Часть 1.Hide.Show.SlideUp.SlideDown - YouTube](#Анимация.-Часть-1.Hide.Show.SlideUp.SlideDown---YouTube)  
6 [Анимация. Часть 2.Fade.Animate - YouTube](#Анимация.-Часть-2.Fade.Animate---YouTube)  
7 [Манипуляции с DOM . Часть 1.After.Before.Append - YouTube](#Манипуляции-с-DOM-.-Часть-1.After.Before.Append---YouTube)  
8 [Манипуляции с DOM . Часть 2.Replace.Wrap.Clone.Detach - YouTube](#Манипуляции-с-DOM-.-Часть-2.Replace.Wrap.Clone.Detach---YouTube)  
9 [Манипуляции с DOM.Offset,Position,Height,innerHeight - YouTube](#Манипуляции-с-DOM.Offset,Position,Height,innerHeight---YouTube)  
10 [Как сделать адаптивное меню на jQuery. уроки jQuery. - YouTube](#Как-сделать-адаптивное-меню-на-jQuery.-уроки-jQuery.---YouTube)  
11 [Уроки jQuery практика- как сделать адаптивное меню с Flexbox и jQuery - YouTube](#Уроки-jQuery-практика--как-сделать-адаптивное-меню-с-Flexbox-и-jQuery---YouTube)  
12 [Уроки jQuery практика- как сделать слайдер - YouTube](#Уроки-jQuery-практика--как-сделать-слайдер---YouTube)  
13 [Уроки jQuery практика- как сделать кнопку наверх (back to top) как вконтакте - YouTube](#Уроки-jQuery-практика--как-сделать-кнопку-наверх-(back-to-top)-как-вконтакте---YouTube)  
14 [Уроки jQuery практика- анимация счетчика чисел - YouTube](#Уроки-jQuery-практика--анимация-счетчика-чисел---YouTube)  
15 [Уроки jQuery практика- делаем To Do приложение - YouTube](#Уроки-jQuery-практика--делаем-To-Do-приложение---YouTube)  
16 [Уроки jQuery практика- делаем Skill bar для портфолио - YouTube](#Уроки-jQuery-практика--делаем-Skill-bar-для-портфолио---YouTube)  
17 [Уроки jQuery практика- делаем простой аккордеон - YouTube](#Уроки-jQuery-практика--делаем-простой-аккордеон---YouTube)  
18 [Уроки jQuery практика- меняем фон страницы при скролле - YouTube](#Уроки-jQuery-практика--меняем-фон-страницы-при-скролле---YouTube)  
## Введение. Синтаксис - YouTube  
[Введение. Синтаксис - YouTube](https://www.youtube.com/watch?v=B4jWRrz3FUM&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=1)  
### 00
https://github.com/mlapinm/mlapinm.github.io  
D:\programs\b01io\b2022test
```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="app.js"></script>
```
### 1
```
$(document).ready(()=>{
  $("h1").css("color", "blue")
})
```
### 2
```
$(()=>{
  $("h1").css("color", "yellow")
})
```
### 3 
```
$(()=>{
  $("h1").css("color", "yellow")
})
$(()=>{
  $("h1").css("background", "black")
})
```
### 4
```
$(()=>{
  $("h1").html("new text")
})
```
### 5
```
$("#bu_start").click(()=>{
  $("#message")
  .css("background", "green")
  .css("color", "blue")
})
$("#bu_reset").click(()=>{
location.reload()
})
```
## Выбор селекторов. Оптимизация выборки - YouTube  
[Выбор селекторов. Оптимизация выборки - YouTube](https://www.youtube.com/watch?v=pfsef_VWFR8&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=2)  
```
  <header>
    <h3>like to see you</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </header>
  <div id="content" class="wrapper box">
    <article>
      <h4>Title1</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum fugit architecto minima aliquid aperiam! Possimus, nobis! Repudiandae exercitationem rerum nemo reprehenderit. 
        Assumenda officiis alias unde porro quos distinctio quas.
      </p>
      </article>
      <article>
        <h4>Title2</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum fugit architecto minima aliquid aperiam! Possimus, nobis! Repudiandae exercitationem rerum nemo reprehenderit. 
          Assumenda officiis alias unde porro quos distinctio quas.
        </p>
        </article>
      </div>
    <footer>&copy;copyright 2021</footer>
```
```
$("#content").css("background", "yellow")
// $(".wrapper").css("background", "yellow")
// $("h3, h4").css("background", "yellow")
// $("article h4").css("background", "yellow")
// $("article").find("h4").css("background", "yellow")
// $("h3 + p").css("background", "yellow")
// $("footer").prev().css("background", "yellow")
// $("h3").next().css("background", "yellow")
// $("*").css("background", "yellow")
// $("article > h4").css("background", "yellow")
// $("article > *").css("background", "yellow")
```  
  
## Работа с CSS. Изменения атрибутов элемента. - YouTube  
[Работа с CSS. Изменения атрибутов элемента. - YouTube](https://www.youtube.com/watch?v=eFrtW9O7Rtk&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=3)  
### 1
```
$(".box").css({
  'color' : 'yellow',
  'background' : "green",
  'margin' : "30px"
})
```
### 2  
```
$(".box").css({
  color : 'yellow',
  background : "green",
  margin : "60px",
  fontSize: "30px"
})
```
### 3
```
/// $("#content").css('height',"300px")
$("#content").css('height', (i, value)=>{
  return parseFloat(value) * 1.5
})
```
### 4
```
$("#content").addClass("name")
$(".name").css("background", "green")
console.log($("#content").attr("class"))
// wrapper box name
```
### 5
```
$(".name").css("background", "green")
var k = 3
$("#content").addClass((i, value)=>{
  return value + k +"-"+ i
})
console.log($("#content").attr("class"))
// wrapper box box3-0
```
### 6
```
console.log($("#content").hasClass("box"))
// true
```
### 7
```
$("#content").removeClass("box")
console.log($("#content").attr("class"))
// wrapper
```
### 8
```
$("#content").toggle()
// $("#content").toggle()
```
### 9
```
var altText = $('img').attr('alt')
$('img').attr('src', '/img/default.jpg')

$('a').attr({
	'href' : 'https://yandex.ru/',
	'title' : 'hhh'
})
```
  
## События в jquery - YouTube  
[События в jquery - YouTube](https://www.youtube.com/watch?v=p7ey_crD_UY&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=4)  
### 1
http://jquery.page2page.ru/index.php5/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F  
### 2
```
$('a').click((event)=>{
    alert("hello")
    event.preventDefault()
})
```
### 3
```
$('a').click((event)=>{
    alert("hello")
    event.preventDefault()
})

$('header').click((event)=>{
    alert("hello header")
})
```
### 4
```
$('a').click((event)=>{
    alert("hello")
    event.preventDefault()
    event.stopPropagation()
})

$('header').click((event)=>{
    alert("hello header")
})
```
### 5
```
$('a').click((event)=>{
    alert("hello")
    return false
})

$('header').click((event)=>{
    alert("hello header")
})
```
### 6
```
    <input type="text" name="quantity" id="quantity">
    <span id="msg"></span>
```

```
$('#quantity').keyup(()=>{
    var value1 = $('#quantity').val()
    $('#msg').text(value1)
})
```  
## Анимация. Часть 1.Hide.Show.SlideUp.SlideDown - YouTube  
[Анимация. Часть 1.Hide.Show.SlideUp.SlideDown - YouTube](https://www.youtube.com/watch?v=Ydx9h2HrHeg&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=5)  
### 1
```
  <div class="anim">

    </div>

.anim {
    width: 100px;
    height: 100px;
    background-color: green;
}

// $('.anim').hide("slow") //fast
// $('.anim').hide(3000) //fast
$('.anim').click(()=>{
    $('.anim').hide(3000) 
})
```  
### 2
```
$('.anim').click(()=>{
    $('.anim').hide(3000, ()=>{
        alert('anim')
    }) 
})
```
### 3
```
    <article class="box" id="stick">
      <h3 class="active" id="click">Article</h3>
      <p style="display: none;" id="hide">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt dolor perspiciatis illum sed incidunt error dolorum. Cum, accusamus officia voluptates sit sequi quis earum impedit ipsum veniam suscipit numquam fugit! Optio nulla dolorum earum perspiciatis. Maxime iusto nesciunt amet.
      </p>
    </article>

$('#stick').click(()=>{
    $('#hide').slideDown('slow')
})
```
### 4
```
    $('h3').click(()=>{
        $('h3').next().slideToggle(1000)
        console.log($(this))
    })

```
### 5
```
    $(()=>{
        $('article h4').click(()=>{
            $('article h4').next().slideToggle();
        })
    })
```
## Анимация. Часть 2.Fade.Animate - YouTube  
[Анимация. Часть 2.Fade.Animate - YouTube](https://www.youtube.com/watch?v=TM78nW0oEMU&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=6)  
  
## Манипуляции с DOM . Часть 1.After.Before.Append - YouTube  
[Манипуляции с DOM . Часть 1.After.Before.Append - YouTube](https://www.youtube.com/watch?v=q7zjIHJXuSg&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=7)  
  
## Манипуляции с DOM . Часть 2.Replace.Wrap.Clone.Detach - YouTube  
[Манипуляции с DOM . Часть 2.Replace.Wrap.Clone.Detach - YouTube](https://www.youtube.com/watch?v=xE0tNP2SEDg&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=8)  
  
## Манипуляции с DOM.Offset,Position,Height,innerHeight - YouTube  
[Манипуляции с DOM.Offset,Position,Height,innerHeight - YouTube](https://www.youtube.com/watch?v=wurHaYZR9ck&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=9)  
  
## Как сделать адаптивное меню на jQuery. уроки jQuery. - YouTube  
[Как сделать адаптивное меню на jQuery. уроки jQuery. - YouTube](https://www.youtube.com/watch?v=TOlHXNINzUU&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=10)  
  
## Уроки jQuery практика- как сделать адаптивное меню с Flexbox и jQuery - YouTube  
[Уроки jQuery практика- как сделать адаптивное меню с Flexbox и jQuery - YouTube](https://www.youtube.com/watch?v=tgVen6pc6i0&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=11)  
  
## Уроки jQuery практика- как сделать слайдер - YouTube  
[Уроки jQuery практика- как сделать слайдер - YouTube](https://www.youtube.com/watch?v=u4qJcO5hLdQ&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=12)  
  
## Уроки jQuery практика- как сделать кнопку наверх (back to top) как вконтакте - YouTube  
[Уроки jQuery практика- как сделать кнопку наверх (back to top) как вконтакте - YouTube](https://www.youtube.com/watch?v=d049Mr1WSFE&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=13)  
  
## Уроки jQuery практика- анимация счетчика чисел - YouTube  
[Уроки jQuery практика- анимация счетчика чисел - YouTube](https://www.youtube.com/watch?v=ykS16GArbTk&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=14)  
  
## Уроки jQuery практика- делаем To Do приложение - YouTube  
[Уроки jQuery практика- делаем To Do приложение - YouTube](https://www.youtube.com/watch?v=BygJB_h5n2w&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=15)  
  
## Уроки jQuery практика- делаем Skill bar для портфолио - YouTube  
[Уроки jQuery практика- делаем Skill bar для портфолио - YouTube](https://www.youtube.com/watch?v=r_3FcNmYwL0&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=16)  
  
## Уроки jQuery практика- делаем простой аккордеон - YouTube  
[Уроки jQuery практика- делаем простой аккордеон - YouTube](https://www.youtube.com/watch?v=nWmN_yn0IHI&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=17)  
  
## Уроки jQuery практика- меняем фон страницы при скролле - YouTube  
[Уроки jQuery практика- меняем фон страницы при скролле - YouTube](https://www.youtube.com/watch?v=7eU48GpO2y8&list=PLVfMKQXDAhGXQcouhIblV910Rv7lRscH3&index=18)  
  