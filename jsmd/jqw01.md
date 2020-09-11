[jQuery для начинающих](https://habr.com/ru/post/38208/)  


```python
import lib01
s = '''\
<head>                                                               
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
    <p>
    123
    <p/>
</body>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

https://s-sd.ru/blog_studio_design/vydvizhnaya_panel_na_jquery/  
##### Выдвижная панель


```python
import lib01
s = '''\
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Simple Slide Panel</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	
	 
});
</script>

<style type="text/css">
body {
	margin: 0 auto;
	padding: 0;
	width: 570px;
	font: 75%/120% Arial, Helvetica, sans-serif;
}
a:focus {
	outline: none;
}
#panel {
	background: #FDF;
	height: 200px;
	display: none;
}
.slide {
	margin: 0;
	padding: 0;
	border-top: solid 4px #422410;
	background: url(images/btn-slide.gif) no-repeat center top;
}
.btn-slide {
	background: url(images/white-arrow.gif) no-repeat right -50px;
	text-align: center;
	width: 144px;
	height: 31px;
	padding: 10px 10px 0 0;
	margin: 0 auto;
	display: block;
	font: bold 120%/100% Arial, Helvetica, sans-serif;
	color: #fff;
	text-decoration: none;
}
.active {
	background-position: right 12px;
}
</style>
</head>

<body>

<div id="panel">
	<!-- you can put content here -->
    22222223333333
</div>

<p class="slide"><a href="#" class="btn-slide">Slide Panel</a></p>
   <p>
    	<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, obcaecati. Dolore et laborum tempore veniam beatae porro cupiditate iure unde modi minima corrupti aliquam, officia blanditiis, eius eos ab voluptates!</span>
    	<span>Voluptatibus provident, dolor quidem quia quas expedita eligendi sit non adipisci temporibus iste ipsum aspernatur earum, deserunt velit numquam esse placeat eaque? Deleniti dolores consectetur quae, dolore ad, illo repudiandae.</span>
    	<span>Inventore molestias magni sed placeat eaque quibusdam, aut libero earum fugiat, excepturi necessitatibus error minus, provident odio molestiae, voluptatibus. Adipisci, voluptate. Asperiores dicta voluptas ut iure cum voluptatibus, nisi blanditiis?</span>
    	<span>Autem corporis dolor, ratione, hic dicta aperiam eaque impedit quisquam deserunt saepe. Ipsum quia, beatae nihil. Dolor corporis, accusamus repellendus, quia nemo maiores! Dolorem animi voluptas quos, impedit reiciendis non.</span>
    	<span>Ea inventore, a optio minus eos est ullam reprehenderit culpa non porro, laboriosam beatae quae obcaecati cum voluptatem minima, aperiam, ratione cumque molestiae. Nisi aspernatur sint dignissimos maiores, vel eos?</span>
    	<span>Quod doloribus dolore natus voluptatibus velit aliquam voluptatem laudantium nesciunt, maiores temporibus totam ex possimus provident libero, odio consectetur pariatur eligendi in, eos, quis soluta unde facere. A, fuga, doloremque!</span>
    	<span>Provident maxime temporibus perferendis autem pariatur eos in, ullam id reiciendis nemo doloribus a harum nihil, sequi tempore, praesentium tenetur recusandae libero quis cumque eligendi debitis repellendus! Quaerat, fugiat, similique.</span>
    	<span>Dignissimos libero quod, repellendus sed quisquam, ullam magnam quis itaque placeat excepturi ratione sapiente eum quidem, eveniet incidunt nulla. Maiores molestiae magnam dignissimos sapiente consectetur enim veniam earum. Velit, nulla?</span>
    	<span>Eum qui, tempora sint officia odio dolorem quae, nam provident reiciendis asperiores ab accusantium non earum molestiae maxime. Harum officia, tempora est rem nobis vel non nihil sunt. Ipsam, sit.</span>
    	<span>Harum aut quae est! Natus omnis quas cumque amet, similique maiores. Dolor facilis ea sit eveniet ullam, asperiores maiores aspernatur saepe nam quos ipsum. Nobis, quidem. Incidunt nobis rerum voluptatem!</span>
    	<span>Id qui officia dignissimos corporis fugit, assumenda odio, deserunt vero ipsam repellat incidunt impedit, molestiae facilis aperiam architecto! Molestiae, ad, culpa? Aspernatur eaque dolorem nihil iure nesciunt minima omnis ullam!</span>
    	<span>Hic dolor non tempore officiis culpa cupiditate, iste delectus iusto fugit! Omnis, molestiae nemo. Quisquam ut suscipit ullam, quasi vitae voluptas repellat rerum necessitatibus tenetur repudiandae? Eum inventore, placeat amet.</span>
    	<span>Debitis natus eius culpa nam doloremque, quam distinctio quae quos. Aspernatur blanditiis, est rerum dolorum totam ipsam doloremque distinctio cum magnam repudiandae quia quam, amet impedit animi corporis corrupti cumque.</span>
    	<span>Explicabo porro tenetur soluta similique itaque saepe cum! Nesciunt in pariatur excepturi cumque natus ipsum veritatis temporibus rem perspiciatis saepe repudiandae, sequi perferendis itaque sint vel voluptates. Placeat, necessitatibus aut.</span>
    	<span>Minima quos harum odio deleniti eligendi magni ipsum cupiditate voluptate aut ut unde, labore dolore similique laudantium molestiae quaerat doloremque dolores eveniet enim consequatur nulla fugiat voluptatem vel! Atque, cum!</span>
    	<span>Nostrum eligendi facere fuga, excepturi repellat sunt tenetur, ducimus, ab quia distinctio, porro aliquam! Tenetur blanditiis quod debitis, placeat deserunt totam, dolore dolorum sequi, est non aliquid delectus illo architecto!</span>
    	<span>Tenetur fugiat laborum sunt impedit quis repellat rem nemo, asperiores itaque, unde minima voluptatem ipsum omnis, quibusdam qui atque accusantium, labore delectus? Rem explicabo, laudantium nesciunt voluptate unde at praesentium.</span>
    	<span>Adipisci consequuntur sunt, illo expedita explicabo laboriosam enim, repudiandae recusandae voluptas beatae placeat nulla perferendis ducimus. Dolore harum, reprehenderit odit pariatur, fugiat qui modi natus, similique facilis aut, deserunt necessitatibus.</span>
    	<span>Doloribus voluptatem beatae quia, odit fugit delectus libero placeat eius dolore magnam nulla veritatis provident voluptas molestiae, rerum similique blanditiis id architecto cupiditate sed maiores sapiente vel quas aliquid. Dicta.</span>
    	<span>Accusantium omnis unde dolorem similique, repellendus dignissimos facere, quo. Necessitatibus unde itaque, ex sit illum a porro perspiciatis ipsa quia delectus? Itaque recusandae error sint quam doloribus assumenda, blanditiis vitae.</span>
    </p>

</body>
</html>'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Магические исчезновения


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Disappear</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){
						   
	$(".pane .delete").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});

});
</script>

<style type="text/css">
body {
	margin: 10px auto;
	width: 470px;
}
h3 {
	margin: 0;
	padding: 0 0 .3em;
}
p {
	margin: 0;
	padding: 0 0 .5em;
}
.pane {
	background: #edf5e1;
	padding: 10px 20px 10px;
	position: relative;
	border-top: solid 2px #c4df9b;
}
.pane .delete {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
}
</style>
</head>

<body>
<div class="pane">
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<img src="images/btn-delete.gif" alt="delete" class="delete" />
</div>
<div class="pane">
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<img src="images/btn-delete.gif" alt="delete" class="delete" />
</div>
<div class="pane">
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<img src="images/btn-delete.gif" alt="delete" class="delete" />
</div>
<div class="pane">
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<img src="images/btn-delete.gif" alt="delete" class="delete" />
</div>
<div class="pane">
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<img src="images/btn-delete.gif" alt="delete" class="delete" />
</div>
</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Связанная анимация


```python
import lib01
s = '''\
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Chainable Transition Effects</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){


	$(".run").click(function(){
	
		$("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
		.animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
		.animate({top: "0"}, "fast")
		.slideUp()
		.slideDown("slow")
		return false;
	
	});

});
</script>

<style type="text/css">
body {
	margin: 20px auto;
	padding: 0;
	width: 580px;
	font: 80%/120% Arial, Helvetica, sans-serif;
}
a {
	font-weight: bold;
	color: #000000;
}
#box {
	background: #6699FF;
	height: 100px;
	width: 100px;
	position: relative;
}
</style>
</head>

<body>

<p><a href="#" class="run">Run</a></p>
<div id="box">
</div>

</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Гармошка #1


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Accordion 1</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){
	
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});
</script>

<style type="text/css">
body {
	margin: 10px auto;
	width: 570px;
	font: 75%/120% Arial, Helvetica, sans-serif;
}
.accordion {
	width: 480px;
	border-bottom: solid 1px #c4c4c4;
}
.accordion h3 {
	background: #e9e7e7 url(images/arrow-square.gif) no-repeat right -51px;
	padding: 7px 15px;
	margin: 0;
	font: bold 120%/100% Arial, Helvetica, sans-serif;
	border: solid 1px #c4c4c4;
	border-bottom: none;
	cursor: pointer;
}
.accordion h3:hover {
	background-color: #e3e2e2;
}
.accordion h3.active {
	background-position: right 5px;
}
.accordion p {
	background: #f7f7f7;
	margin: 0;
	padding:  10px 15px 20px;
	border-left: solid 1px #c4c4c4;
	border-right: solid 1px #c4c4c4;
}
@media screen and (max-width: 480px) {
	body {
		width:100%;
		margin: 0;
		padding:0;
	}
	.accordion {
		width:98%;
		margin:1%;
	}
	.accordion h3 {
		padding: 12px 15px;
	}
	.goog-zippy-expanded {
		background: #e9e7e7 url(images/arrow-square.gif) no-repeat right 10px;
	}
	.goog-zippy-collapsed {
		background: #e9e7e7 url(images/arrow-square.gif) no-repeat right -46px;
	}
}
</style>
</head>

<body>

<div class="accordion">
	<h3>Question One Sample Text</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<h3>This is Question Two</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<h3>Another Questio here</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<h3>Sample heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<h3>Sample Question Heading</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
</div>

</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Гармошка #2

Этот пример схож с предыдущим, лишь отличается тем, что мы указываем открытую по умолчанию панельку. (см. пример)

##### Анимация для события hover #1


```python
import lib01
s = '''\
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Animated Menu Hover 1</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){

	$(".menu a").hover(function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "show", top: "-75"}, "slow");
	}, function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "hide", top: "-85"}, "fast");
	});


});
</script>

<style type="text/css">
body {
	margin: 10px auto;
	width: 570px;
	font: 75%/120% Arial, Helvetica, sans-serif;
}
.menu {
	margin: 100px 0 0;
	padding: 0;
	list-style: none;
}
.menu li {
	padding: 0;
	margin: 0 2px;
	float: left;
	position: relative;
	text-align: center;
}
.menu a {
	padding: 14px 10px;
	display: block;
	color: #000000;
	width: 144px;
	text-decoration: none;
	font-weight: bold;
	background: url(images/button.gif) no-repeat center center;
}
.menu li em {
	background: url(images/hover.png) no-repeat;
	width: 180px;
	height: 45px;
	position: absolute;
	top: -85px;
	left: -15px;
	text-align: center;
	padding: 20px 12px 10px;
	font-style: normal;
	z-index: 2;
	display: none;
}
</style>
</head>

<body>

<ul class="menu">
	<li>
		<a href="http://www.webdesignerwall.com">Web Designer Wall</a>		
		<em>A wall of design ideas, web trends, and tutorials</em>
	</li>
	<li>
		<a href="http://bestwebgallery.com">Best Web Gallery</a>
		<em>Featuring the best CSS and Flash web sites</em>
	</li>
	<li>
		<a href="http://www.ndesign-studio.com">N.Design Studio</a>
		<em>Blog and design portfolio of WDW designer, Nick La</em>
	</li>
</ul>

</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Анимация для события hover #2

Данный пример чуть-чуть посложней предыдущего примера: для формирования подсказки используется атрибут linktitle (см. пример)

##### Кликабельные блоки

Этот пример демонстрирует как сделать кликабельным блок с текстом, а не только ссылку (см. пример):


```python
import lib01
s = '''\
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Block clickable</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){
						   
	$(".pane-list li").click(function(){
    	window.location=$(this).find("a").attr("href");return false;
	});

}); //close doc ready
</script>

<style type="text/css">
body {
	margin: 10px auto;
	width: 470px;
}
a {
	color: #333300;
	text-decoration: none;
}
a:visited {
	color: #333300;
}
a:hover {
	color: #333300;
	text-decoration: underline;
}
h3 {
	margin: 0;
	padding: 0 0 .3em;
}
p {
	margin: 0;
	padding: 0 0 .5em;
}
.pane-list {
	margin: 0;
	padding: 0;
	list-style: none;
}
.pane-list li {
	background: #ecfad7;
	padding: 10px 20px 10px;
	border-top: solid 1px #c4df9b;
	cursor: pointer;
}
.pane-list li:hover {
	background: #f6ffe9;
}
</style>
</head>

<body>
<ul class="pane-list">
	<li>
		<h3><a href="http://anton.shevchuk.name">Антон Шевчук</a></h3>
		<p>Блог web-разработчика</p>
	</li>
	<li>
		<h3>Online Charts Builder</h3>
		<p>Если Вы хотите быстро построить графики для вашего сайта, то этот <a href="http://charts.hohli.com">сервис</a> для Вас</p>
	</li>
    	<li>
		<h3><a href="http://www.webdesignerwall.com">Web Designer Wall</a></h3>
		<p>A wall of design ideas, web trends, and tutorials</p>
	</li>
	<li>
		<h3>Best Web Gallery</h3>
		<p>Featuring the best <a href="http://bestwebgallery.com">CSS and Flash web sites</a></p>
	</li>
	<li>
		<h3>N.Design Studio</h3>
		<p><a href="http://www.ndesign-studio.com">Blog</a> and design portfolio of Nick La</p>
	</li>
</ul>
</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Складывающиеся панельки

Ну а теперь чуть-чуть скомбинируем предыдущие примеры и создадим ряд складывающихся панелек (наподобие как в Gmail организован inbox). (см. пример)


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Collapsible Message Panels</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>
<script type="text/javascript">
$(document).ready(function(){
	
	//hide message_body after the first one
	$(".message_list .message_body:gt(0)").hide();
	
	//hide message li after the 5th
	$(".message_list li:gt(4)").hide();

	
	//toggle message_body
	$(".message_head").click(function(){
		$(this).next(".message_body").slideToggle(500)
		return false;
	});

	//collapse all messages
	$(".collpase_all_message").click(function(){
		$(".message_body").slideUp(500)
		return false;
	});

	//show all messages
	$(".show_all_message").click(function(){
		$(this).hide()
		$(".show_recent_only").show()
		$(".message_list li:gt(4)").slideDown()
		return false;
	});

	//show recent messages only
	$(".show_recent_only").click(function(){
		$(this).hide()
		$(".show_all_message").show()
		$(".message_list li:gt(4)").slideUp()
		return false;
	});

});
</script>
<style type="text/css">
* {
	margin: 0;
	padding: 0;
}
body {
	margin: 10px auto;
	width: 570px;
	font: 75%/120% Arial, Helvetica, sans-serif;
}
p {
	padding: 0 0 1em;
}
/* message display page */
.message_list {
	list-style: none;
	margin: 0;
	padding: 0;
	width: 383px;
}
.message_list li {
	padding: 0;
	margin: 0;
	background: url(images/message-bar.gif) no-repeat;
}
.message_head {
	padding: 5px 10px;
	cursor: pointer;
	position: relative;
}
.message_head .timestamp {
	color: #666666;
	font-size: 95%;
	position: absolute;
	right: 10px;
	top: 5px;
}
.message_head cite {
	font-size: 100%;
	font-weight: bold;
	font-style: normal;
}
.message_body {
	padding: 5px 10px 15px;
}
.collapse_buttons {
	text-align: right;
	border-top: solid 1px #e4e4e4;
	padding: 5px 0;
	width: 383px;
}
.collapse_buttons a {
	margin-left: 15px;
	float: right;
}
.show_all_message {
	background: url(images/tall-down-arrow.gif) no-repeat right center;
	padding-right: 12px;
}
.show_recent_only {
	display: none;
	background: url(images/tall-up-arrow.gif) no-repeat right center;
	padding-right: 12px;
}
.collpase_all_message {
	background: url(images/collapse-all.gif) no-repeat right center;
	padding-right: 12px;
	color: #666666;
}
</style>
</head>
<body>
<ol class="message_list">
	<li>
		<p class="message_head"><cite>someone:</cite> <span class="timestamp">1 minute ago</span></p>
		<div class="message_body">
			<p>Hello Nick,<br />
				<br />
				This is the latest message display. The rest are collapsed by default</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>nick:</cite> <span class="timestamp">2 minutes ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>someone:</cite> <span class="timestamp">1 day ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>nick:</cite> <span class="timestamp">2 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>someone:</cite> <span class="timestamp">3 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>nick:</cite> <span class="timestamp">5 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>someone:</cite> <span class="timestamp">6 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>nick:</cite> <span class="timestamp">7 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
	<li>
		<p class="message_head"><cite>someone:</cite> <span class="timestamp">8 days ago</span></p>
		<div class="message_body">
			<p>message here</p>
		</div>
	</li>
</ol>
<p class="collapse_buttons"><a href="#" class="show_all_message">Show all message (9)</a> <a href="#" class="show_recent_only">Show 5 only</a> <a href="#" class="collpase_all_message">Collapse all</a></p>
</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Имитация Backend'a Wordpress'a


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Imitate the WordPress Comment Management</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>
<script type="text/javascript" src="js/jquery.color.js"></script>

<script type="text/javascript">
$(document).ready(function(){

	$(".pane:even").addClass("alt");

	$(".pane .btn-delete").click(function(){
		alert("This comment will be deleted!");
		
		$(this).parents(".pane").animate({ backgroundColor: "#fbc7c7" }, "fast")
		.animate({ opacity: "hide" }, "slow")
		return false;
	});

	$(".pane .btn-unapprove").click(function(){
		$(this).parents(".pane").animate({ backgroundColor: "#fff568" }, "fast")
		.animate({ backgroundColor: "#ffffff" }, "slow")
		.addClass("spam")
		return false;
	});

	$(".pane .btn-approve").click(function(){
		$(this).parents(".pane").animate({ backgroundColor: "#dafda5" }, "fast")
		.animate({ backgroundColor: "#ffffff" }, "slow")
		.removeClass("spam")
		return false;
	});

	$(".pane .btn-spam").click(function(){		
		$(this).parents(".pane").animate({ backgroundColor: "#fbc7c7" }, "fast")
		.animate({ opacity: "hide" }, "slow")
		return false;
	});

});
</script>


<style type="text/css">
body {
	margin: 10px auto;
	width: 470px;
}
a, a:visited {
	color: #000099;
}
a:hover {
	text-decoration: none;
}
h3 {
	margin: 0;
	padding: 0 0 .3em;
}
p {
	margin: 0;
	padding: 0 0 1em;
}
.pane {
	background: #ffffff;
	padding: 10px 20px 10px;
	position: relative;
	border-top: solid 1px #ccc;
}
.alt {
	background: #f5f4f4;
}
.spam {
	color: #999999;
}
</style>
</head>

<body>

<div class="pane">
	<h3>Nick says:</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-unapprove">Unapprove</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane spam">
	<h3>John says:</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-approve">Approve</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane">
	<h3>Smith says:</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-unapprove">Unapprove</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane">
	<h3>Jen says:</h3>
	<p>Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-unapprove">Unapprove</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane">
	<h3>Jen says:</h3>
	<p>Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-unapprove">Unapprove</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane spam">
	<h3>John says:</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-approve">Approve</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
<div class="pane">
	<h3>Smith says:</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.</p>
	<p><a href="#" class="btn-delete">Delete</a> | <a href="#" class="btn-unapprove">Unapprove</a> | <a href="#" class="btn-spam">Spam</a></p>
</div>
</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    

##### Галерея изображений


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Image Replacement</title>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){

	$("h2").append('<em></em>');

	$(".thumbs a").click(function(){
	
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$("#largeImg").attr({ src: largePath, alt: largeAlt });
		
		$("h2 em").html(" (" + largeAlt + ")"); return false;
	});
	
});
</script>

<style type="text/css">
body {
	margin: 20px auto;
	padding: 0;
	width: 580px;
	font: 75%/120% Arial, Helvetica, sans-serif;
}
h2 {
	font: bold 190%/100% Arial, Helvetica, sans-serif;
	margin: 0 0 .2em;
}
h2 em {
	font: normal 80%/100% Arial, Helvetica, sans-serif;
	color: #999999;
}
#largeImg {
	border: solid 1px #ccc;
	width: 550px;
	height: 400px;
	padding: 5px;
}
.thumbs img {
	border: solid 1px #ccc;
	width: 100px;
	height: 100px;
	padding: 4px;
}
.thumbs img:hover {
	border-color: #FF9900;
}
</style>
</head>

<body>

<h2>Illustrations</h2>

<p><img id="largeImg" src="images/img1-lg.jpg" alt="Large image" /></p>

<p class="thumbs">
	<a href="images/img2-lg.jpg" title="Image 2"><img src="images/img2-thumb.jpg" /></a>
	<a href="images/img3-lg.jpg" title="Image 3"><img src="images/img3-thumb.jpg" /></a>
	<a href="images/img4-lg.jpg" title="Image 4"><img src="images/img4-thumb.jpg" /></a>
	<a href="images/img5-lg.jpg" title="Image 5"><img src="images/img5-thumb.jpg" /></a>
	<a href="images/img6-lg.jpg" title="Image 6"><img src="images/img6-thumb.jpg" /></a>
</p>

</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    


```python
import lib01
s = '''\

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>jQuery. Add CSS Class to Link Type</title>


<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>

<script type="text/javascript">
$(document).ready(function(){

	$("a[href$=pdf]").addClass("pdf");

	$("a[href$=zip]").addClass("zip");

	$("a[href$=psd]").addClass("psd");
	
	$("a:not([href*=http://www.webdesignerwall.com])").not("[href^=#]")
		.addClass("external")
		.attr({ target: "_blank" });

});
</script>

<style type="text/css">
body {
	margin: 10px auto;
	width: 570px;
	font: 75%/120% Arial, Helvetica, sans-serif;
	color: #999999;
}
a {
	color:#333399;
}
a:hover {
	text-decoration: none;
}
a.pdf {
	background: url(images/file-red.gif) no-repeat;
	padding-left: 16px;
}
a.zip {
	background: url(images/file-orange.gif) no-repeat;
	padding-left: 16px;
}
a.psd {
	background: url(images/file-blue.gif) no-repeat;
	padding-left: 16px;
}
a.external {
	background: url(images/window.gif) no-repeat;
	padding-left: 16px;
}
</style>
</head>

<body>
<p>
	<p><a href="http://anton.shevchuk.name#file/wdw-logo.pdf">PDF file</a> (wdw-logo.pdf)</p>
	<p><a href="http://anton.shevchuk.name#file/wdw-logo.psd">PSD file</a> (wdw-logo.psd)</p>
	<p><a href="http://anton.shevchuk.name#file/wdw-logo.zip">Zip file</a> (wdw-logo.zip)</p>

	<p><a href="#anchor">#anchor link</a> (#anchor)</p>
	<p><a href="#anchor">#anchor link</a> (#anchor)</p>
	<p><a href="http://anton.shevchuk.name">Anton Shevchuk</a> (http://anton.shevchuk.name)</p>
	<p><a href="http://photo.hohli.com">Photo Blog</a> (http://photo.hohli.com)</p>
</p>
</body>
</html>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    


```python
import lib01
s = '''\
<head>                                                               
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
    <p>
    123
    <p/>
</body>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    


```python
import lib01
s = '''\
<head>                                                               
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
    <p>
    123
    <p/>
</body>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    


```python
import lib01
s = '''\
<head>                                                               
<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
    <p>
    123
    <p/>
</body>
'''
lib01.writeFile('index2.html', s)
print('ok')
```

    ok
    
