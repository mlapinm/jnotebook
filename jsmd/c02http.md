[html_codecademy](https://www.codecademy.com/learn/learn-html)  

#### Displaying Text
paragraph span


```python
%%html
<!DOCTYPE html>
<html>

<head>
  <title>Brown Bears</title>
</head>

<body>
  <a href="./index.html">Brown Bear</a>
  <a href="./aboutme.html">About Me</a>
  <h1>The Brown Bear</h1>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#habitat">Habitat</a></li>
    <li><a href="#media">Media</a></li>
  </ul>
  <div id="introduction">
    <h2>About Brown Bears</h2>
    <p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies within the brown bear species, including the
      Atlas bear and the Himalayan brown bear.</p>
    <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">Learn More</a>
    <h3>Species</h3>
    <ul>
      <li>Arctos</li>
      <li>Collarus</li>
      <li>Horribilis</li>
      <li>Nelsoni (extinct)</li>
    </ul>
    <h3>Features</h3>
    <p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5 feet to 9 feet from head to toe.</p>
  </div>
  <div id="habitat">
    <h2>Habitat</h2>
    <h3>Countries with Large Brown Bear Populations</h3>
    <ol>
      <li>Russia</li>
      <li>United States</li>
      <li>Canada</li>
    </ol>
    <h3>Countries with Small Brown Bear Populations</h3>
    <p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland, France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
  </div>
  <div id="media">
    <h2>Media</h2>
    <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank"><img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg"/></a>
    <video src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" height="240" width="320" controls>Video not supported</video>
  </div>
</body>

</html>
```


<!DOCTYPE html>
<html>

<head>
  <title>Brown Bears</title>
</head>

<body>
  <a href="./index.html">Brown Bear</a>
  <a href="./aboutme.html">About Me</a>
  <h1>The Brown Bear</h1>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#habitat">Habitat</a></li>
    <li><a href="#media">Media</a></li>
  </ul>
  <div id="introduction">
    <h2>About Brown Bears</h2>
    <p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies within the brown bear species, including the
      Atlas bear and the Himalayan brown bear.</p>
    <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">Learn More</a>
    <h3>Species</h3>
    <ul>
      <li>Arctos</li>
      <li>Collarus</li>
      <li>Horribilis</li>
      <li>Nelsoni (extinct)</li>
    </ul>
    <h3>Features</h3>
    <p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5 feet to 9 feet from head to toe.</p>
  </div>
  <div id="habitat">
    <h2>Habitat</h2>
    <h3>Countries with Large Brown Bear Populations</h3>
    <ol>
      <li>Russia</li>
      <li>United States</li>
      <li>Canada</li>
    </ol>
    <h3>Countries with Small Brown Bear Populations</h3>
    <p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland, France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
  </div>
  <div id="media">
    <h2>Media</h2>
    <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank"><img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg"/></a>
    <video src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" height="240" width="320" controls>Video not supported</video>
  </div>
</body>

</html>



#### Styling Text
 The <em> tag emphasizes text, while the <strong> tag highlights important text.

#### Line Breaks
<br>

#### Unordered Lists
<ul>
  <li>

#### Ordered Lists
<ol>
  <li>

#### Images
<img src="image-location.jpg" />

#### Image Alts
<img src="image-location.jpg" alt="this image"/>

#### Videos
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>

### Preparing for HTML

#### The <html> tag

#### The Head

#### Page Titles
<title></title>

#### Linking to Other Web Pages
<a href="">text</a>

#### Opening Links in a New Window
target="_blank"

#### Linking to Relative Page

#### Linking At Will
    <a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank"><img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg" /></a>

#### Linking to Same Page
id #

#### Whitespace
W3C standards

#### comment
<!-- comment -->

### Why Tables?

#### Create a Table
Table Rows  Table Data  Table Headings  Table Borders  Spanning Columns    Spanning Rows  Table Footer


%%html
<table>
  <tr>
    <th>Company Name</th>
    <th>Number of Items to Ship</th>
    <th>Next Action</th>
  </tr>
  <tr>
    <td>Adam’s Greenworks</td>
    <td>14</td>
    <td>Package Items</td>
  </tr>
  <tr>
    <td colspan = "2">Package Items</td>
    <td></td>
    <td></td>
  </tr>
    
</table>



```python
%%html
</tr>
  <tr>
  <td rowspan="2">1</td>
  <td colspan="2">2</td>
</tr>
  <tr>
  <td>3</td>
  <td>4</td>
  </tr>

```


</tr>
  <tr>
  <td rowspan="2">1</td>
  <td colspan="2">2</td>
</tr>
  <tr>
  <td>3</td>
  <td>4</td>
  </tr>




```python
%%html
<table>
  <thead>
  <tr>
    <th>Company Name</th>
    <th>Number of Items to Ship</th>
    <th>Next Action</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>Adam’s Greenworks</td>
    <td>14</td>
    <td>Package Items</td>
  </tr>
<tr>
  <td>Davie's Burgers</td>
  <td>2</td>
  <td>Send Invoice</td>
</tr>
<tr>
  <td>Baker's Bike Shop</td>
  <td>3</td>
  <td>Send Invoice</td>
</tr>
<tr>
  <td>Miss Sally's Southern</td>
  <td>4</td>
  <td>Ship</td>
</tr>
<tr>
  <td>Summit Resort Rentals</td>
  <td>4</td>
  <td>Ship</td>
</tr>
<tr>
  <td>Strike Fitness</td>
  <td>1</td>
  <td>Enter Order</td>
</tr>
</tbody>
<tfoot>
<td>Total</td>
<td>28</td>
</tfoot>  
  </table>

```


<table>
  <thead>
  <tr>
    <th>Company Name</th>
    <th>Number of Items to Ship</th>
    <th>Next Action</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>Adam’s Greenworks</td>
    <td>14</td>
    <td>Package Items</td>
  </tr>
<tr>
  <td>Davie's Burgers</td>
  <td>2</td>
  <td>Send Invoice</td>
</tr>
<tr>
  <td>Baker's Bike Shop</td>
  <td>3</td>
  <td>Send Invoice</td>
</tr>
<tr>
  <td>Miss Sally's Southern</td>
  <td>4</td>
  <td>Ship</td>
</tr>
<tr>
  <td>Summit Resort Rentals</td>
  <td>4</td>
  <td>Ship</td>
</tr>
<tr>
  <td>Strike Fitness</td>
  <td>1</td>
  <td>Enter Order</td>
</tr>
</tbody>
<tfoot>
<td>Total</td>
<td>28</td>
</tfoot>  
  </table>



#### Styling with CSS
table {
  font-size: 18px;
}

### Introduction to HTML Forms

#### How a Form Works
Text Input Adding a Label Password Input  Number Input


```python
%%html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Adding a Text Input</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <form>
				<h1>Login to start creating a burger!</h1>  
	      <!--Add your code below-->
		<input type="text" name="username" 
value="Davie"/>	
      </form>
    </section>
  </body>
</html>

```


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Adding a Text Input</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <form>
				<h1>Login to start creating a burger!</h1>  
	      <!--Add your code below-->
		<input type="text" name="username" 
value="Davie"/>	
      </form>
    </section>
  </body>
</html>




```python
%%html
      <form>
				<h1>Login to start creating a burger!</h1>
        <label for="username">Username:</label>
  			<input type="text" name="username" id="username">
        <br>
        <label for="user-pw">Password:</label>
        <!--Add your code below-->
				<input id="user-pw" type="password" name="user-pw"/>
      </form>

```


      <form>
				<h1>Login to start creating a burger!</h1>
        <label for="username">Username:</label>
  			<input type="text" name="username" id="username">
        <br>
        <label for="user-pw">Password:</label>
        <!--Add your code below-->
				<input id="user-pw" type="password" name="user-pw"/>
      </form>








```python
%%html
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">

  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>
```


<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">

  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>



#### Range Input
 `Radio Button` `Input Dropdown list` `Datalist Input` Textarea element

#### Submit Form


```python
%%html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Textarea element</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <form action="submission.html" method="POST">
        <h1>Create a burger!</h1>
					<section class="protein">
          <label for="patty">What type of protein would you like?</label>
    			<input type="text" name="patty" id="patty">
        </section>
        <hr>
        <section class="patties">
          <label for="amount">How many patties would you like?</label>
          <input type="number" name="amount" id="amount">
        </section>
        <hr>
        <section class="cooked">
          <label for="doneness">How do you want your patty cooked</label>
          <br>
          <span>Rare</span>
          <input type="range" name="doneness" id="doneness" value="3" min="1" max="5">
          <span>Well-Done</span>
        </section>
        <hr>
        <section class="toppings">
          <span>What toppings would you like?</span>
          <br>
          <input type="checkbox" name="topping" id="lettuce" value="lettuce">
          <label for="lettuce">Lettuce</label>
          <input type="checkbox" name="topping" id="tomato" value="tomato">
          <label for="tomato">Tomato</label>
          <input type="checkbox" name="topping" id="onion" value="onion">
          <label for="onion">Onion</label>
        </section>
        <hr>
        <section class="cheesy">
          <span>Would you like to add cheese?</span>
          <br>
          <input type="radio" name="cheese" id="yes" value="yes">
          <label for="yes">Yes</label>
          <input type="radio" name="cheese" id="no" value="yes">
          <label for="no">No</label>
        </section>
        <hr>
        <section class="bun-type">
          <label for="bun">What type of bun would you like?</label>
          <select name="bun" id="bun">
            <option value="sesame">Sesame</option>
            <option value="potatoe">Potato</option>
            <option value="pretzel">Pretzel</option>
          </select>
        </section>
        <hr>
        <section class="sauce-selection">
          <label for="sauce">What type of sauce would you like?</label>
          <input list="sauces" id="sauce" name="sauce">
          <datalist id="sauces">
            <option value="ketchup"></option>
            <option value="mayo"></option>
            <option value="mustard"></option>
          </datalist>
        </section>
        <hr>
        <section class="extra-info">
          <label for="extra">Anything else you want to add?</label>
          <br>
          <textarea id="extra" name="extra" rows="3" cols="40"></textarea>
        </section>
        <hr>

        <section class="submission">
          <!--Add your code below-->
<input type="submit" value="Submit">          
        </section>
        
      </form>
    </section>
  </body>
</html>

```


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Textarea element</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <form action="submission.html" method="POST">
        <h1>Create a burger!</h1>
					<section class="protein">
          <label for="patty">What type of protein would you like?</label>
    			<input type="text" name="patty" id="patty">
        </section>
        <hr>
        <section class="patties">
          <label for="amount">How many patties would you like?</label>
          <input type="number" name="amount" id="amount">
        </section>
        <hr>
        <section class="cooked">
          <label for="doneness">How do you want your patty cooked</label>
          <br>
          <span>Rare</span>
          <input type="range" name="doneness" id="doneness" value="3" min="1" max="5">
          <span>Well-Done</span>
        </section>
        <hr>
        <section class="toppings">
          <span>What toppings would you like?</span>
          <br>
          <input type="checkbox" name="topping" id="lettuce" value="lettuce">
          <label for="lettuce">Lettuce</label>
          <input type="checkbox" name="topping" id="tomato" value="tomato">
          <label for="tomato">Tomato</label>
          <input type="checkbox" name="topping" id="onion" value="onion">
          <label for="onion">Onion</label>
        </section>
        <hr>
        <section class="cheesy">
          <span>Would you like to add cheese?</span>
          <br>
          <input type="radio" name="cheese" id="yes" value="yes">
          <label for="yes">Yes</label>
          <input type="radio" name="cheese" id="no" value="yes">
          <label for="no">No</label>
        </section>
        <hr>
        <section class="bun-type">
          <label for="bun">What type of bun would you like?</label>
          <select name="bun" id="bun">
            <option value="sesame">Sesame</option>
            <option value="potatoe">Potato</option>
            <option value="pretzel">Pretzel</option>
          </select>
        </section>
        <hr>
        <section class="sauce-selection">
          <label for="sauce">What type of sauce would you like?</label>
          <input list="sauces" id="sauce" name="sauce">
          <datalist id="sauces">
            <option value="ketchup"></option>
            <option value="mayo"></option>
            <option value="mustard"></option>
          </datalist>
        </section>
        <hr>
        <section class="extra-info">
          <label for="extra">Anything else you want to add?</label>
          <br>
          <textarea id="extra" name="extra" rows="3" cols="40"></textarea>
        </section>
        <hr>

        <section class="submission">
          <!--Add your code below-->
<input type="submit" value="Submit">          
        </section>

      </form>
    </section>
  </body>
</html>




```python
%%html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Forms Review</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <h1>Thanks for your submission!</h1>
      <img id="burger" src="https://s3.amazonaws.com/codecademy-content/courses/learn-html-forms/burger.svg" alt="finished burger">
    </section>
  </body>
</html>
```


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Forms Review</title>
  </head>
  <body>
    <section id="overlay">
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo">
      <hr>
      <h1>Thanks for your submission!</h1>
      <img id="burger" src="https://s3.amazonaws.com/codecademy-content/courses/learn-html-forms/burger.svg" alt="finished burger">
    </section>
  </body>
</html>



### Introduction to HTML Form Validation

 
1|2
---|---
Requiring an Input | required
Set a Minimum and Maximum | min max type="number"
Checking Text Length |minlength="3" maxlength="15"
Matching a Pattern |pattern="[a-zA-Z0-9]+"


### Introduction to Semantic HTML
1|2
--|--
Header and Nav  |  &lt;header&gt; &lt;nav&gt;
Main and Footer  | &lt;main&gt; &lt;footer&gt; 
Article and Section  | &lt;article&gt; &lt;section&gt; 
The Aside Element  | lt;aside&gt; 
Figure and Figcaption  | &lt;figure&gt; &lt;figcaption&gt; 
Audio and Attributes  | &lt;audio&gt; controls 
Video and Embed  | controls autoplay loop 
  |  
  


```python
    %%html
    <figure>
      <img src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dogimage.jpeg"/>
      <figcaption>Dog</figcaption>
 
    </figure> 
    <audio controls><source src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dogBarking.mp3" type="audio/mp3"></audio>
          <video src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dog+video.mp4" controls>video is unable to load</video>      
<embed src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dog-on-beach.gif">      

    
```


<figure>
  <img src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dogimage.jpeg"/>
  <figcaption>Dog</figcaption>

</figure> 
<audio controls><source src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dogBarking.mp3" type="audio/mp3"></audio>
      <video src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dog+video.mp4" controls>video is unable to load</video>      
<embed src="https://codecademy-content.s3.amazonaws.com/courses/Semantic+HTML/dog-on-beach.gif">      





#### 

#### 

#### 

#### 





 1 | 2 | 3 | 4 | 5 | 6 
---|---|---|---|---|---  
 restrictions | ограничения | Matching  |соответствует  |stated  |заявлено  
  |  |  |  |  |  
  |  |  |  |  |  
 

07.02 - 50-83
