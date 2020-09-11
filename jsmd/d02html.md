[https://www.freecodecamp.org/learn/](https://www.freecodecamp.org/learn/)  
#### Responsive Web Design Certification (300 hours)
[Introduction to Basic HTML and HTML5 (28)](#Introduction-to-Basic-HTML-and-HTML5)  
[Introduction to Basic CSS (44)](#Introduction-to-Basic-CSS)  
[Applied Visual Design](#Applied-Visual-Design)  
[]()  
[]()  
[]()  
[]()  
[]()  




#### Introduction to Basic HTML and HTML5
```
```
#### Say Hello to HTML Elements
```
<h1>Hello</h1>
```
#### Headline with the h2 Element
```
<h2>CatPhotoApp</h2>
```
#### Inform with the Paragraph Element
```
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
#### Fill in the Blank with Placeholder Text
```
```
#### Uncomment HTML
```
<!--     -->
```
#### Comment out HTML
```
<!--     -->
```
#### Delete HTML Elements
```
```
#### Introduction to HTML5 Elements
```
main, header, footer, nav, video, article, section
```
#### Add Images to Your Website
```
<img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
```
#### Link to External Pages with Anchor Elements
```
a (anchor)
<a href="http://freecatphotoapp.com" target="_blank">cat photos</a>
```
#### Link to Internal Sections of a Page with Anchor Elements
```
  <a href="#footer">Jump to Bottom</a>
  
<footer id="footer">Copyright Cat Photo App</footer>
```
#### Nest an Anchor Element within a Paragraph
```
<p>View more cat photos
  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>
</p>
```
#### Make Dead Links Using the Hash Symbol
```
<p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
```
#### Turn an Image into a Link
```
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  </a>
```
#### Create a Bulleted Unordered List
```
<ul>
  <li>milk</li>
  <li>cheese</li>
  <li>grass</li>
</ul>
```
#### Create an Ordered List
```
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>dogs</li>
    <li>water</li>
    <li>thunder</li>
  </ol>
```
#### Create a Text Field
```
<input type="text" />
```
#### Add Placeholder Text to a Text Field
```
  <input type="text" placeholder="cat photo URL">
```
#### Create a Form Element
```
  <form action="/submit-cat-photo">
  <input type="text" placeholder="cat photo URL">
  </form>
```
#### Add a Submit Button to a Form
```
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
```
#### Use HTML5 to Require a Field
```
    <input type="text" placeholder="cat photo URL" required>
```
#### Create a Set of Radio Buttons
```
    <label for="indoor">
      <input id="indoor" type="radio" name="indoor-outdoor">Indoor
    </label>
    <label for="outdoor">
      <input id="outdoor" type="radio" name="indoor-outdoor">Outdoor
    </label>
```
#### Create a Set of Checkboxes
```
<label for="checkbox1">
  <input id="checkbox1" type="checkbox" name="personality">CheckBox1
</label>    
<label for="checkbox2">
  <input id="checkbox2" type="checkbox" name="personality">CheckBox2
</label>    
<label for="checkbox3">
  <input id="checkbox3" type="checkbox" name="personality">CheckBox3
</label>    
```
#### Use the value attribute with Radio Buttons and Checkboxes
```
    <label><input type="radio" value="indoor" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" value="outdoor" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" value="loving" name="personality"> Loving</label>
    <label><input type="checkbox" value="lazy" name="personality"> Lazy</label>
    <label><input type="checkbox" value="energetic" name="personality"> Energetic</label><br>
```
#### Check Radio Buttons and Checkboxes by Default
```
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
```
#### Nest Many Elements within a Single div Element
```
div  division-отдел

```
#### Declare the Doctype of an HTML Document
```
<!DOCTYPE html>
<html>

<h1>Header one</h1>    
</html>
```
#### Define the Head and Body of an HTML Document
```
<head></head><body></body>
```


```python
%%html
<a href="http://freecatphotoapp.com" target="_blank">cat photos</a>
```


<a href="http://freecatphotoapp.com" target="_blank">cat photos</a>



### Introduction to Basic CSS


```python

```

#### Introduction to Basic CSS

#### 1. Introduction to Basic CSS
```
color
fonts
positioning
spacing
sizing
decorations
transitions
```
#### 2. Change the Color of Text
```
<h2 style="color: red;>CatPhotoApp</h2>
```
#### 3. Use CSS Selectors to Style Elements
```
<style>
  h2 {
    color: blue;
  }
</style>
```
#### 4. Use a CSS Class to Style an Element
```
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
```
#### 5. Style Multiple Elements with a CSS Class
```
<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
```
#### 6. Change the Font Size of an Element
```
  p {
    font-size: 16px;
  }
```
#### 7. Set the Font Family of an Element
```
    font-family: monospace;
```
#### 8. Import a Google Font
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
h2{
  font-family: Lobster;
}
```
#### 9. Specify How Fonts Should Degrade
```
  h2 {
    font-family: Lobster, monospace;
    //если нет Lobster, сработает monospace
  }
```
#### 10. Size Your Images
```
 .smaller-image {
    width: 100px;
  }
```
#### 11. Add Borders Around Your Elements
```
class="think-green-border"
.think-green-border{
 border: 10px solid green;
}
```
#### 12. Add Rounded Corners with border-radius
```
border-radius: 10px;
```
#### 13. Make Circular Images with a border-radius
```
    border-radius: 50%;
```
#### 14. Give a Background Color to a div Element
```
.silver-background{
  background-color: silver;
}
 class="silver-background"
```
#### 15. Set the id of an Element
```
 id="cat-photo-form"
```
#### 16. Use an id Attribute to Style an Element
```
#cat-photo-form{
 background-color: green;
}
```
#### 17. Adjust the Padding of an Element
```
    padding: 20px;
```
#### 18. Adjust the Margin of an Element
```
    margin: 20px;.
```
#### 19. Add a Negative Margin to an Element
```
margin: -15px;
```
#### 20. Add Different Padding to Each Side of an Element
```
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
```
#### 21. Add Different Margins to Each Side of an Element
```
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
```
#### 22. Use Clockwise Notation to Specify the Padding of an Element
```
padding: 40px 20px 20px 40px;
```
#### 23. Use Clockwise Notation to Specify the Margin of an Element
```
margin: 40px 20px 20px 40px;
```
#### 24. Use Attribute Selectors to Style Elements
```
[type='checkbox'] {
  margin: 10px 0px 15px 0px;
}
```
#### 25. Understand Absolute versus Relative Units
```
padding: 1.5em;
```
#### 26. Style the HTML Body Element
```
body {
  background-color: black;
}
```
#### 27. Inherit Styles from the Body Element
```
<h1>Hello World</h1>
color: green;
font-family: monospace;
```
#### 28. Prioritize One Style Over Another
```
.pink-text{
  color: pink;
}
 class="pink-text"
```
#### 29. Override Styles in Subsequent CSS
```
в css - style последний элемент имеет значение - blue
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="blue-text pink-text">Hello World!</h1>
```
#### 30. Override Class Declarations by Styling ID Attributes
```
  #orange-text{
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```
#### 31. Override Class Declarations with Inline Styles
```
<h1 style="color: white" id="orange-text" class="pink-text blue-text">Hello World!</h1>

color white
```
#### 32. Override All Other Styles by using Important
```
  .pink-text {
    color: pink !important; 
  }
```
#### 33. Use Hex Code for Specific Colors
```
  body {
    background-color: #000000;
  }
```
#### 34. Use Hex Code to Mix Colors
```
Color	Hex Code
Dodger Blue	#1E90FF
Green	#00FF00
Orange	#FFA500
Red	#FF0000
```
#### 35. Use Abbreviated Hex Code
```
Color	Short Hex Code
Cyan	#0FF
Green	#0F0
Red	#F00
Fuchsia	#F0F
```
#### 36. Use RGB values to Color Elements
```
  body {
    background-color: rgb(0, 0, 0);
  }
```
#### 37. Use RGB to Mix Colors
```
Color	RGB
Blue	rgb(0, 0, 255)
Red	rgb(255, 0, 0)
Orchid	rgb(218, 112, 214)
Sienna	rgb(160, 82, 45)
```
#### 38. Use CSS Variables to change several elements at once
```
--penguin-beak: yellow;
background: var(--penguin-beak, orange);
```
#### 39. Create a custom CSS Variable
```
--penguin-skin: gray;
```
#### 40. Use a custom CSS Variable
```
    background: var(--penguin-skin);
```
#### 41. Attach a Fallback value to a CSS Variable
```
    background: var(--penguin-skin, black);
```
#### 42. Improve Compatibility with Browser Fallbacks
```
    background: red;
    background: var(--red-color);
    
    //срабатывает 1-й, потом 2-й, 
    //если второго нет то работает только 1-й
    //1-я строка fallback
```
#### 43. Inherit CSS Variables
```
  :root {
    /* Only change code below this line */
  --penguin-belly: pink;
    /* Only change code above this line */
  }
```
#### 44. Change a variable for a specific area
```
  .penguin {
    /* Only change code below this line */
  --penguin-belly: white;
    /* Only change code above this line */
```
#### 45. Use a media query to change a variable
```
  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */
--penguin-size: 200px;
--penguin-skin: black;
      /* Only change code above this line */
    }
  }
```

### Applied Visual Design

#### 1. IntroInformation
```
```
#### 2. Introduction to the Applied Visual Design Challenges
```
This section covers some of the basic tools developers use to create their own visual designs.
```
#### 3. Create Visual Balance Using the text-align Property
```
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
```
#### 4. Adjust the Width of an Element Using the width Property
```
    width: 245px;
```
#### 5. Adjust the Height of an Element Using the height Property
```
    height: 25px;
```
#### 6. Use the strong Tag to Make Text Bold
```
<p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
```
#### 7. Use the u Tag to Underline Text
```
<u>Ph.D. students</u>
```
#### 8. Use the em Tag to Italicize Text
```
<p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
```
#### 9. Use the s Tag to Strikethrough Text
```
<h4>Alphabet<s>Google</s>Alphabet</h4>
```
#### 10. Create a Horizontal Line Using the hr Element
```
  <hr>
```
#### 11. Adjust the background-color Property of Text
```
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
```
#### 12. Adjust the Size of a Header Versus a Paragraph Tag
```
font-size: 27px;
```
#### 13. Add a box-shadow to a Card-like Element
```
//тень объем
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```
#### 14. Decrease the Opacity of an Element
```
  .links{
    opacity: 0.7;
  }
```
#### 15. Use the text-transform Property to Make Text Uppercase
```
Value	Result
lowercase	"transform me"
uppercase	"TRANSFORM ME"
capitalize	"Transform Me"
initial	Use the default value
inherit	Use the text-transform value from the parent element
none	Default: Use the original text

text-transform: uppercase;

h4:hover{text-transform: uppercase;}
```
#### 16. Set the font-size for Multiple Heading Elements
```
h5{
    font-size: 21px;
}
```
#### 17. Set the font-weight for Multiple Heading Elements
```
 h5 {
    font-size: 21px;
    font-weight: 300;
  }
```
#### 18. Set the font-size of Paragraph Text
```
font-size: 16px;
```
#### 19. Set the line-height of Paragraphs
```
    line-height: 25px;
```
#### 20. Adjust the Hover State of an Anchor Tag
```
  a:hover {
    color: blue;
  }
```
#### 21. Change an Element's Relative Position
```
  h2 {
position: relative;
top: 15px;
  }
```
#### 22. Move a Relatively Positioned Element with CSS Offsets
```
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
```
#### 23. Lock an Element to its Parent with Absolute Positioning
```
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
```
#### 24. Lock an Element to the Browser Window with Fixed Positioning
```
  #navbar {
position: fixed;
top:0px;
left:0px;
    width: 100%;
    background-color: #767676;
  }
```
#### 25. Push Elements Left or Right with the float Property
```
    #left {
   float: left;
      width: 50%;
    }
    #right {
float: right;
      width: 40%;
    }
```
#### 26. Change the Position of Overlapping Elements with the z-index Property
```
 .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
```
#### 27. Center an Element Horizontally Using the margin Property
```
    margin: auto;
```
#### 28. Learn about Complementary Colors
```
  .blue {
    background-color: #0000FF;
  }
  .yellow {
    background-color: #FFFF00;
  }
```
#### 29. Learn about Tertiary Colors
```
  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }
```
#### 30. Adjust the Color of Various Elements to Complementary Colors
```
This page will use a shade of teal (#09A7A1) as the dominant color, and its orange (#FF790E) complement to visually highlight the sign-up buttons. Change the background-color of both the header and footer from black to the teal color. Then change the h2 text color to teal as well. Finally, change the background-color of the button to the orange color.
```
#### 31. Adjust the Hue of a Color
```
Color	HSL
red	hsl(0, 100%, 50%)
yellow	hsl(60, 100%, 50%)
green	hsl(120, 100%, 50%)
cyan	hsl(180, 100%, 50%)
blue	hsl(240, 100%, 50%)
magenta	hsl(300, 100%, 50%)

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color: hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

```
#### 32. Adjust the Tone of a Color
```
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
background-color: hsl(180, 80%, 25%);
  }
```
#### 33. Create a Gradual CSS Linear Gradient
```
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }

</style>

<div></div>
```
#### 34. Use a CSS Linear Gradient to Create a Striped Element
```
repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
```
#### 35. Create Texture by Adding a Subtle Pattern as a Background Image
```
<style>
  body {
background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
#### 36. Use the CSS Transform scale Property to Change the Size of an Element
```
     transform: scale(1.5);
```
#### 37. Use the CSS Transform scale Property to Scale an Element on Hover
```
div:hover {
  transform: scale(1.1);
}
```
#### 38. Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
```
transform: skewX(24deg);
//параллелограм
```
#### 39. Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
```
transform: skewY(-10deg);
```
#### 40. Create a Graphic Using CSS
```
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }

</style>
<div class="center"></div>
```
#### 41. Create a More Complex Shape Using CSS and HTML
```
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
#### 42. Learn How the CSS @keyframes and animation Properties Work
```
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;

  }
  @keyframes rainbow {
    0% {
background-color: blue;
    }
    50% {
background-color: green;
    }
    100% {
background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
#### 43. Use CSS Animation to Change the Hover State of a Button
```
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }
@keyframes background-color {
100% {
background-color: #4791d0;
}
}
```
#### 44. Modify Fill Mode of an Animation
```
animation-fill-mode: forwards;
```
#### 45. Create Movement Using CSS Animation
```
  @keyframes rainbow {
    0% {
      background-color: blue;
      left: 0px;

    }
    50% {
      background-color: green;
      left: 25px;

    }
    100% {
      background-color: yellow;
      left: -25px;

    }
  }
```
#### 46. Create Visual Direction by Fading an Element from Left to Right
```
  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
```
#### 47. Animate Elements Continually Using an Infinite Animation Count
```
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
#### 48. Make a CSS Heartbeat using an Infinite Animation Count
```
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
animation-iteration-count: infinite;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```
#### 49. Animate Elements at Variable Rates
```
  @keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }
```
#### 50. Animate Multiple Elements at Variable Rates
```
    animation-duration: 1s;
    animation-duration: 0.9s;
    animation-duration: 1.1s;
```
#### 51. Change Animation Timing with Keywords
```
  #ball1 {
    left:27%;
animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
animation-timing-function: ease-out;
  }
```
#### 52. Learn How Bezier Curves Work
```
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```
#### 53. Use a Bezier Curve to Move a Graphic
```
```
#### 54. Make Motion More Natural Using a Bezier Curve
```
animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
```



```python
%%html

```


<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }

</style>

<div></div>





















_|_|_|_|_|_
--|--|--|--|--|--
preferred|предпочтительный|challenge|проблема|tied|связанный
matter|значение|Fallback|запасной вариант|Inherit|наследовать
Hover|парить|Adjust|настройте|shade|оттенок
Hue|оттенок|Subtle|тонкий|Skew|скос
Fading|затухание||||
|||||

