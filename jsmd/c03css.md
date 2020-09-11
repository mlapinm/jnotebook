[codecademy-css](https://www.codecademy.com/courses/learn-css/lessons/css-setup-selectors/exercises/intro-to-css)  

#### Inline Styles
style = "font-family:Arial"  


#### The <style> Tag


```python
%%html
<html>
<head>
  <style>
    p{
      font-family:Arial;
    }
  </style>
  <title>Vacation World</title>
</head>
</html>
<body>
    <p>Paragraph</p>
</body>
```


<html>
<head>
  <style>
    p{
      font-family:Arial;
    }
  </style>
  <title>Vacation World</title>
</head>
</html>
<body>
    <p>Paragraph</p>
</body>



#### The .css file

#### Linking the CSS File


```python
%%html
<link href="./style.css"  
type="text/css"  rel="stylesheet" />
```


<link href="./style.css"  
type="text/css"  rel="stylesheet" />



#### Class Name
.title {
  color: teal;
}

#### Multiple Classes
class="title uppercase"

#### ID Name
id="article-title"
#article-title{
font-family: cursive;
text-transform: capitalize;  
}

#### Classes and IDs


#### Specificity

#### Chaining Selectors
h2.destination{
  font-family:cursive;
}

#### Nested Elements
.description h5{
  color: teal;
}

#### Chaining and Specificity
.description h5{
  color: teal;
}
h5{
  color:rebeccapurple;
}

#### Important
.description h5{
  color: teal;
}
h5{
  color:rebeccapurple !important;
}

#### Multiple Selectors
h5,p{
  font-family:Georgia;
}

### Introduction To Visual Rules

#### Font Family
[CSS Font Stack](https://www.cssfontstack.com/)  

#### Font Size
font-size:18px;

#### Font Weight
font-weight normal bold

#### Text Align
text-align left center right  
h1 {
  text-align:center;
}

#### Color
.caption {
  background-color:white;
  color:black;
}

#### Opacity
opacity:0.75;

#### Background Image
background-image: url("https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-2/soccer.jpeg");

### Introduction to the Box Model

height
width
padding
border
margin
overflow

#### The Box Model
#banner{
  height:700px;
}

#banner .content h1{
  width:400px;
}
.pull-quote{
  width:350px;
}

#### Borders
width — thin, medium, or thick.  
style —  none, dotted, and solid.  
color  
#banner .content h1{
  border: solid 3px white;
}

#### Border Radius
border-radius:5px;

#### Padding I
padding-top
padding-right
padding-bottom
padding-left  
h2{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

#### Padding II
padding: 1px 2px 3px 4px (top,right,bottom,left)
padding: 20px 30px; (top,bottom) (left,right)

#### Margins I

#### Margins II

#### Auto
  margin: 0 auto; (центрует)

#### Margin Collapse

#### Minimum and Maximum Height and Width
  min-width: 200px;
  max-width: 800px;
  min-height: 200px;
  max-height: 300px;

#### Overflow
hidden scroll visible  
#main {
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  width: 400px;
  height: 1000px;
  overflow: scroll;
}

#### Resetting Defaults
* {
  margin: 0;
  padding: 0;
}

#### Visibility
hidden visible  
visibility:hidden;

#### Box Model: Content-Box
box-sizing content-box

#### Box Model: Border-Box
border-box


#### The New Box Model
* {
  box-sizing: border-box;
}

#### Flow of HTML

#### Position
static 
relative
absolute
fixed  
.question {
  position: static;
}

#### Position: Relative  
top bottom left right  

#### Position: Absolute
  position: absolute;

#### Position: Fixed 
  position: fixed;

#### Z-Index
  z-index:10;

#### Inline Display
display property: inline, block, and inline-block.

#### Block Display

#### Inline-Block Display

#### Float
left right  
float: left;

#### Clear
 clear: left;

### Introduction to Color

#### Foreground vs Background
  color:MidnightBlue;
  background-color:Aqua;

#### Hexadecimal

#### RGB Colors
color: rgb(23, 45, 23);

#### Hex and RGB

#### Hue, Saturation, and Lightness

#### color: hsl(120, 60%, 70%);

#### Opacity and Alpha
color: hsla(34, 100%, 50%, 0.1);
color: rgba(234, 45, 98, 0.33);


### Typography 

#### Font Family
font-family: Georgia;

#### Font Weight
font-weight: bold;

#### Font Weight II
400 is the default font-weight of most text.  
700 signifies a bold font-weight.  
300 signifies a light font-weight.  
font-weight: 900;  

#### Font Style
font-style: italic;

#### Word Spacing
word-spacing: 0.05em;

#### letter spacing
letter-spacing:0.02em;

#### Text Transformation
text-transform: uppercase;

#### Text Alignment
text-align: left;
text-align: center;

#### Line Height Anatomy

#### Line Height
1.2 12px default  
line-height: 1.4;  

#### Serif and Sans Serif

#### Fallback Fonts
  font-family: "Helvetica", sans-serif;

#### Linking Fonts I
[https://fonts.google.com/](https://fonts.google.com/)  

<link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">  
font-family: 'Space Mono', monospace;  

#### Font-Face II

```
/* latin */
@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  src: local('Space Mono'), local('SpaceMono-Regular'), url(https://fonts.gstatic.com/s/spacemono/v5/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  src: local('Space Mono Bold'), local('SpaceMono-Bold'), url(https://fonts.gstatic.com/s/spacemono/v5/i7dMIFZifjKcF5UAWdDRaPpZUFWaHg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

#### Font-Face III

```
@font-face {
  font-family: 'Glegoo';
  src: url(../fonts/Glegoo-Bold.ttf)
  format('truetype')
    
}


  font-family: Glegoo;
  font-size: 20px;
```

#### Introduction to Grids
 display: grid;

#### Creating Columns
grid-template-columns: 100px 50% 200px;

#### Creating Rows
  grid-template-rows: 40% 50% 50px;

#### Grid Template
  grid-template: 40% 50% 50px / 100px 50% 200px;

#### Fraction
grid-template: 1fr 1fr 1fr / 3fr 50% 1fr;

#### Repeat
grid-template: repeat(3,1fr) / 3fr 50% 1fr;

#### minmax
grid-template: repeat(3, 1fr) / 3fr minmax(50px,300px) 1fr;

#### Grid Gap
/*   grid-row-gap: 20px;
  grid-column-gap: 5px; */
    grid-gap: 20px  5px;

#### Grid Items

#### Multiple Row Items
.a {
  grid-row-start: 5;
  grid-row-end: 7;
}

#### Grid Row
grid-row: 5 / 7;

#### Grid Column
```
.a {
  grid-row: 5 / 7;
  grid-column: 1/ span 2;
}

.b {
 grid-column: 2 / span 6; 
 grid-row: 2 / span 3; 
}


.a {
grid-column: 1 span 2;
grid-row-start: 1; 
grid-row-end: 3; 
  
}
.a {
  grid-area: 1 / 1 / span 2 / span 1;
}

```

#### Grid Area
grid-row-start
grid-column-start
grid-row-end
grid-column-end
```
.c {
  grid-area: 6 / 8 / span 3 / span 1;
}
```

### Introduction 


#### Grid Template Areas
grid-template-areas
justify-items
justify-content
justify-self
align-items
align-content
align-self
grid-auto-rows
grid-auto-columns
grid-auto-flow

```
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-gap: 10px;
  grid-template-areas: "header header"
    "nav nav"
    "left right"
    "footer footer";
  grid-template-rows: 150px 200px 600px 200px;
  grid-template-columns: 200px 400px; 
  
}
header {
  grid-area: header;
} 

nav {
  grid-area: nav;
}

.left {
  grid-area: left;
}

.right {
  grid-area: right;
}

footer {
  grid-area: footer;
}

h1, h2 {
  font-family: monospace;
  text-align: center;
}

header {
  background-color: dodgerblue;
}

nav {
  background-color: beige;
}

.left {
  background-color: dodgerblue;
}

.right {
  background-color: beige;
}

footer {
  background-color: dodgerblue;
}```

#### Overlapping Elements

#### Justify Items
justify-items start end center stretch  
  justify-items: end;
  justify-items: center;

#### Justify Content
justify-content start end center stretch space-around space-between space-evenly  
```  
justify-content: space-around;

```

#### Align Items
align-items start end center stretch

#### Align Content
start end center stretch space-around space-between space-evenly  


#### Justify Self and Align Self

#### Implicit vs. Explicit Grid

#### Grid Auto Rows and Grid Auto Columns

#### Grid Auto Flow
grid-auto-flow row column dense

#### 

#### 

#### 

#### 

#### 

#### 

#### 









08.02 11-22-44-55-66-  
09.02 66-77
10.02 88-

A|B|C|D|E|F
--|--|--|--|--|--
period|точка|require |требовать|stand out more|выделит
Nested |вложенный|consider |рассмотрим|prevents |предотвращает
concise|лаконичный|typefaces |шрифты|distinctions |различия
|||||
|||||
|||||

