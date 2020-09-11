[Make a Website](https://www.codecademy.com/learn/make-a-website)  

Site Structure
LESSON
Build structure with HTML by adding text, links, images and more.

Exercises

1. What are HTML and CSS?

2. Anatomy of an HTML Element
```
<!DOCTYPE html>
<html>
<head>
	<title>Ollie Bike Sharing</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<h1>I'm Building a Website!</h1>
</body>
</html>
```
3. Add a Heading
```
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
</body>
</html>
```
4. Add a Paragraph
```
<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental.</p>
</body>
</html>
```
5. Anchor Elements

6. A Closer Look

7. Adding Images




```python
%%html
<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/bikes2.jpg" />
</body>
</html>
```


<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/bikes2.jpg" />
</body>
</html>



8. Add a Video


```python
%%html
<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
 </body>
</html>

```


<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
 </body>
</html>



9. Create an Unordered List


```python
%%html
<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h2>Ollie</h2>
  <ul>
  <li>sign up</li>
  <li>search bikes</li>
  <li>reserve a bike</li>
  <li>about us</li>
  </ul>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
 </body>
</html>

```


<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <h2>Ollie</h2>
  <ul>
  <li>sign up</li>
  <li>search bikes</li>
  <li>reserve a bike</li>
  <li>about us</li>
  </ul>
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
 </body>
</html>






```python
%%html
<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <div class="container">
    <div class="nav">
  <h2>Ollie</h2>
  <ul>
  <li>sign up</li>
  <li>search bikes</li>
  <li>reserve a bike</li>
  <li>about us</li>
  </ul>
    </div>
    <div class="main">
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
    </div>
  </div>
 </body>
</html>

```


<!DOCTYPE html>
<html>
<head>
  <title>Ollie Bike Sharing</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <div class="container">
    <div class="nav">
  <h2>Ollie</h2>
  <ul>
  <li>sign up</li>
  <li>search bikes</li>
  <li>reserve a bike</li>
  <li>about us</li>
  </ul>
    </div>
    <div class="main">
  <h1>Ollie Bike Sharing</h1>
  <h2>Share Your Pedals with the World.</h2>
  <p>Need a set of wheels while you're in town? Use Ollie to pair your perfect vacation with a stylish, affordable bike rental. Here is a <a href="cities.html">list</a> of cities where you can find us. </p>
  <video width="320" height="240" controls>
  <source src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-1/ollie.mp4">
  </video>
    </div>
  </div>
 </body>
</html>





10. Parent and Child Elements

11. Add a Div

12. Metadata: The Brains
<meta charset="utf-8"/>
13. HTML Review

### A Closer Look at CSS
LESSON
Learn how to style text and add background images with CSS.

Exercises

1. Why Use CSS?

2. Link to a Stylesheet  
<link rel="stylesheet" type="text/css" href="main.css" />  
3. Anatomy of a CSS Rule  

4. font-family  
  font-family: Palatino,  
    'Palatino Linotype', serif;  

5. color  
  color: rgba(46,105,163,0.9);  
  background-color: blue;  

6. CSS Class Selectors  
  font-family: 'Trebuchet MS', Helvetica, sans-serif;  
7. font-size  
  font-size: 1rem;  
8. A Background Image  
url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");  
  background-size: cover;  
9. CSS id Selectors  
```
#footer{
  font-size: 0.75rem;
}
```
10. CSS Review

#### Boundaries and Space
LESSON
Learn how CSS can manage boundaries and space on webpages.

Exercises

1. The Box Model

2. Create a Border  
  border: 5px solid #FFF;  
3. Working with Padding  
  padding: 30px;  
4. Working with Margin  

5. More Margins  
margin-top: 20px;  
6. Understanding Display  

7. Keep It Inline  
nav li {  
  display: inline;  
8. Using Float  
```
.contact-btn {
 float:right;
}
```
9. Display: Flex
```
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
```
10. Working with Position
```
.contact-btn a { 
  position: relative;
}
```
11. Review



Building with Bootstrap
LESSON
Learn to create a webpage quickly using the Twitter Bootstrap library.

Exercises

1. CSS Frameworks

2. Connecting to Bootstrap  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
3. On the Grid  

4. Header/Navigation



```python
%%html
    <div class="row">
      <h1 class="col-sm-4"> Skillfair </h1>
      <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
      </nav>
    </div>
```


<div class="row">
  <h1 class="col-sm-4"> Skillfair </h1>
  <nav class="col-sm-8 text-right">
    <p>newest</p>
    <p>catalogue</p>
    <p>contact</p>
  </nav>
</div>



5. The Jumbotron


```python
%%html
  <section class="jumbotron">
    <div class="container">
      <div class="row text-center">
        <h2>Homemade Goods</h2>
        <h3>This Year's Best</h3>
        <a class="btn btn-primary" href="#" role="button">See all</a>
      </div>
    </div>
  </section>

```


<section class="jumbotron">
  <div class="container">
    <div class="row text-center">
      <h2>Homemade Goods</h2>
      <h3>This Year's Best</h3>
      <a class="btn btn-primary" href="#" role="button">See all</a>
    </div>
  </div>
</section>



6. Supporting Content


```python
%%html
    <div class="row">
      <figure class="col-sm-6">        <p>gifts</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg"/>
</figure>
      <figure class="col-sm-6">        <p>antiques</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg"/>
</figure>
    </div>

```


    <div class="row">
      <figure class="col-sm-6">        <p>gifts</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg"/>
</figure>
      <figure class="col-sm-6">        <p>antiques</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg"/>
</figure>
    </div>



7. Footers


```python
%%html
<!DOCTYPE html>
<html>
<head>
  <title>Skillfair</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <header class="container">
    <div class="row">
      <h1 class="col-sm-4"> Skillfair </h1>
      <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
      </nav>
    </div>
  </header>
  <section class="jumbotron">
    <div class="container">
      <div class="row text-center">
        <h2>Homemade Goods</h2>
        <h3>This Year's Best</h3>
        <a class="btn btn-primary" href="#" role="button">See all</a>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <figure class="col-sm-6">
        <p>kitchen</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
      </figure>
      <figure class="col-sm-6">        <p>woodwork</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/woodwork.jpg"/>
</figure>
    </div>
    <div class="row">
      <figure class="col-sm-6">        <p>gifts</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg"/>
</figure>
      <figure class="col-sm-6">        <p>antiques</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg"/>
</figure>
    </div>
    </div>
  </section>
  <footer class="container">
    <div class="row">
      <p class="col-sm-4">&copy; 2016 Skillfair</p>
      <ul class="col-sm-8">
        <li class="col-sm-1">  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/twitter.svg"></li>
        <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg"></li>
        <li class="col-sm-1">  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/instagram.svg">
        </li>
        <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/medium.svg"></li>
      </ul>
      </div>
  </footer>
</body>
</html>

```


<!DOCTYPE html>
<html>
<head>
  <title>Skillfair</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
  <header class="container">
    <div class="row">
      <h1 class="col-sm-4"> Skillfair </h1>
      <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
      </nav>
    </div>
  </header>
  <section class="jumbotron">
    <div class="container">
      <div class="row text-center">
        <h2>Homemade Goods</h2>
        <h3>This Year's Best</h3>
        <a class="btn btn-primary" href="#" role="button">See all</a>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <figure class="col-sm-6">
        <p>kitchen</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
      </figure>
      <figure class="col-sm-6">        <p>woodwork</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/woodwork.jpg"/>
</figure>
    </div>
    <div class="row">
      <figure class="col-sm-6">        <p>gifts</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg"/>
</figure>
      <figure class="col-sm-6">        <p>antiques</p>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg"/>
</figure>
    </div>
    </div>
  </section>
  <footer class="container">
    <div class="row">
      <p class="col-sm-4">&copy; 2016 Skillfair</p>
      <ul class="col-sm-8">
        <li class="col-sm-1">  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/twitter.svg"></li>
        <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg"></li>
        <li class="col-sm-1">  <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/instagram.svg">
        </li>
        <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/medium.svg"></li>
      </ul>
      </div>
  </footer>
</body>
</html>



8. Bootstrap Generalizations

### Setting Up Your Domain
LESSON
In this lesson, learn the best strategies for choosing a domain name for your personal portfolio.

Exercises

1. How Websites Work

2. Choosing a Domain Name  
[Namecheap x Codecademy](https://codecademy.namecheap.com/)

3. Registering a Domain Name with Namecheap

4. Hosting your Site with Namecheap





24.02 0-20
25.02 40-60-80-  

_|_|_|_|_|_
--|--|--|--|--|--
referred |называется|skill|навык|Awesome|потрясающе
essential |существенный|bulleted|маркирован|nesting |вложенность
involved |участвуют||||
|||||
|||||
|||||

