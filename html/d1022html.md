### Section 1: Html5 And Css3 Web Programming
## MODULE 1 Using HTML5 And CSS3 To Build A Web Page50% Complete
#### In this module you will learn how HTML structures the content on a web page and how CSS styles the content on a web page. The course begins by showing you the structure of a HTML5 web page - you will learn how to declare a HTML5 document and set up the head and body sections of a web page. You will then learn about a wide range of HTML5 elements and their functions and uses.
[l032](https://mlapinm.github.io/d1024/l032.html)  
### Using HTML5 And CSS3 To Build A Web Page - Learning Outcomes
### Introduction To Course
### Creating Your First HTML5 Web Page With CSS3
http://127.0.0.1:5500/d1024/l0322.html  

### Styling Your First HTML5 Web Page With CSS3
http://127.0.0.1:5500/d1024/l032.html  

### Understanding The HTML5 You Wrote
### Using HTML5 And CSS3 To Build A Web Page - Lesson Summary
```
The key points from this module are: 
The latest version of HMTL is HTML5. The latest version of CSS is CSS3.

HTML is the acronym for Hyper-text Markup Language
CSS is the acronym for Cascading Style Sheets

When saving a .html file in Notepad the encoding should be changed to UTF-8

Web pages have the following file extension name: .html

The file extension for a CSS file: .css

 <> keys are used to create tags in HTML
Example: Paragraph element:
<p> the opening paragraph tag
</p> the closing paragraph tag
<!DOCTYPE html> declares an HTML5 document:
<html> </html> define the boundaries of an HTML web page

Every HTML web page contains Head section and Body section:
<head> </head> represent the head section of a web page
<body> </body> represent the body section of a web page 

Cascading Style Sheets:
A correctly formatted CSS style: hi {font-size:2em; >, use {} keys

Progressive enhancement: a strategy for web design which emphasizes accessibility, semantic HTML
markup, and external stylesheet and scripting technologies.

Web links:
      Absolute URL - href="http://www.alison.com"
      Relative URL - href="another.html"

Attributes:
      <html lang="en"> the 'lang' is known as the Attribute of the tag
      <!DOCTYPE html> declares an HTML5 document
      <html> </html> define the boundaries of an HTML web page

Every HTML web page contains Head section and Body section:
      <head> </head> represent the head section of a web page
      <body> </body> represent the body section of a web page

Global attributes:
Global attributes that can be added to virtually any HTML5 element:
• id attribute
• name attribute
• class attribute

id attribute - Provides programmatic access via JavaScript (on client)
name attribute - Provides programmatic access (on the server)
class attribute - CSS hook for stylings

```
https://mlapinm.github.io/d1024/l032.html  
https://mlapinm.github.io/index.html  
  
https://caniuse.com/  
## MODULE 2 Using HTML5 And CSS3 To Format A Web Page
#### In this module you will learn about global attributes that can be added to virtually any HTML5 element and how to correctly format them within a HTML5 element. The course then shows you how to link a HTML web page to a cascading style sheet file. You will learn how to code style sheet instructions that style the various HTML5 elements in the web page. You will also learn about Progressive enhancement in web design that emphasizes accessibility, semantic HTML markup, and external style sheet.
### Using HTML5 And CSS3 To Format A Web Page - Learning Outcomes
### Working With Paragraphs And Text
### cite цитировать
```
<p>My favorite book is <cite>The Reality Dysfunction</cite> by Peter F. Hamilton. My favorite comic is 
<cite>Pearls Before Swine</cite> 
by Stephan Pastis. My favorite track is 
<cite>Jive Samba</cite> by the Cannonball Adderley Sextet.</p>
```
<p>My favorite book is <cite>The Reality Dysfunction</cite> by Peter F. Hamilton. My favorite comic is 
<cite>Pearls Before Swine</cite> 
by Stephan Pastis. My favorite track is 
<cite>Jive Samba</cite> by the Cannonball Adderley Sextet.</p>
### blockquote цитата

```
<blockquote>
 <p>I contend that we are both atheists. I just believe in one fewer
 god than you do. When you understand why you dismiss all the other
 possible gods, you will understand why I dismiss yours.</p>
</blockquote>
<p>— Stephen Roberts</p>
```  

<blockquote>
 <p>I contend that we are both atheists. I just believe in one fewer
 god than you do. When you understand why you dismiss all the other
 possible gods, you will understand why I dismiss yours.</p>
</blockquote>
<p>— Stephen Roberts</p>
  
### code
<pre><code>
    1
  2
3
</code></pre>
### q

<q>234</q>

### l052.html
http://127.0.0.1:5500/d1024/l052.html  
  
## URL encoding
http://en.wikipedia.org/wiki/Query_string#URL_encoding
## Query string
http://www.whatever.com/default.aspx?val1=Hello&val2=Word  
## Global Attributes
- class
- name
- id


### Defining The Structure Of Your Document
- 4.4 Sections
  - 4.4.1 The body element
  - 4.4.2 The section element
  - 4.4.3 The nav element
  - 4.4.4 The article element
  - 4.4.5 The aside element
  - 4.4.6 The h1, h2, h3, h4, h5, and h6 elements
  - 4.4.7 The hgroup element
  - 4.4.8 The header element
  - 4.4.9 The footer element
  - 4.4.10 The address element
  - 4.4.11 Headings and sections
  - 4.4.11.1 Creating an outline


### Working With Figures And Images
### img
The img element
Content attributes:
Global attributes
alt
src
crossorigin
usemap
ismap
width
height
  
###  figure
The figure element represents some flow content, optionally with a caption, that is self-contained and is typically referenced as a single unit from the main flow of the document.  
  
The element can thus be used to annotate illustrations, diagrams, photos, code listings, etc, that are referred to from the main content of the document, but that could, without affecting the flow of the document, be moved away from that primary content, e.g. to the side of the page, to dedicated pages, or to an appendix.  
```

Here, a part of a poem is marked up using figure.

<figure>
 <p>'Twas brillig, and the slithy toves<br>
 Did gyre and gimble in the wabe;<br>
 All mimsy were the borogoves,<br>
 And the mome raths outgrabe.</p>
 <figcaption><cite>Jabberwocky</cite> (first verse). Lewis Carroll, 1832-98</figcaption>
</figure>

```

Here, a part of a poem is marked up using figure.

<figure>
 <p>'Twas brillig, and the slithy toves<br>
 Did gyre and gimble in the wabe;<br>
 All mimsy were the borogoves,<br>
 And the mome raths outgrabe.</p>
 <figcaption><cite>Jabberwocky</cite> (first verse). Lewis Carroll, 1832-98</figcaption>
</figure>
  
  

### Working With Lists
4.5 Grouping content  
4.5.3 The pre element  
4.5.4 The blockquote element  
4.5.5 The ol element  
4.5.6 The ul element  
4.5.7 The li element  
4.5.11 The figure element  
4.5.12 The figcaption element  



```
<p>I have lived in the following countries:</p>
<ul>
 <li>Norway
 <li>Switzerland
 <li>United Kingdom
 <li>United States
</ul>

```

<figure>
 <figcaption>The top 10 movies of all time</figcaption>
 <ol>
  <li value="10"><cite>Josie and the Pussycats</cite>, 2001</li>
  <li value="9"><cite lang="sh">Црна мачка, бели мачор</cite>, 1998</li>
  <li value="8"><cite>A Bug's Life</cite>, 1998</li>
  <li value="7"><cite>Toy Story</cite>, 1995</li>
  <li value="6"><cite>Monsters, Inc</cite>, 2001</li>
  <li value="5"><cite>Cars</cite>, 2006</li>
  <li value="4"><cite>Toy Story 2</cite>, 1999</li>
  <li value="3"><cite>Finding Nemo</cite>, 2003</li>
  <li value="2"><cite>The Incredibles</cite>, 2004</li>
  <li value="1"><cite>Ratatouille</cite>, 2007</li>
 </ol>
</figure>
  
4.5.8 The dl element  
4.5.9 The dt element  
4.5.10 The dd element  



```

<dl>
 <dt><dfn>happiness</dfn></dt>
 <dd class="pronunciation">/'hæ p. nes/</dd>
 <dd class="part-of-speech"><i><abbr>n.</abbr></i></dd>
 <dd>The state of being happy.</dd>
 <dd>Good fortune; success. <q>Oh <b>happiness</b>! It worked!</q></dd>
 <dt><dfn>rejoice</dfn></dt>
 <dd class="pronunciation">/ri jois'/</dd>
 <dd><i class="part-of-speech"><abbr>v.intr.</abbr></i> To be delighted oneself.</dd>
 <dd><i class="part-of-speech"><abbr>v.tr.</abbr></i> To cause one to be delighted.</dd>
</dl>

```

<dl>
 <dt><dfn>happiness</dfn></dt>
 <dd class="pronunciation">/'hæ p. nes/</dd>
 <dd class="part-of-speech"><i><abbr>n.</abbr></i></dd>
 <dd>The state of being happy.</dd>
 <dd>Good fortune; success. <q>Oh <b>happiness</b>! It worked!</q></dd>
 <dt><dfn>rejoice</dfn></dt>
 <dd class="pronunciation">/ri jois'/</dd>
 <dd><i class="part-of-speech"><abbr>v.intr.</abbr></i> To be delighted oneself.</dd>
 <dd><i class="part-of-speech"><abbr>v.tr.</abbr></i> To cause one to be delighted.</dd>
</dl>


4.5.2 The hr element  

<hr>

4.5.13 The div element  
### Creating Tables
4.9 Tabular data  
4.9.1 The table element  
4.9.1.1 Techniques for describing tables  
4.9.1.2 Techniques for table layout  
4.9.2 The caption element  
4.9.3 The colgroup element  
4.9.4 The col element  
4.9.5 The tbody element  
4.9.6 The thead element  
4.9.7 The tfoot element  
4.9.8 The tr element  
4.9.9 The td element  
4.9.10 The th element  
4.9.11 Attributes common to td and th elements  
4.9.12 Processing model  
4.9.12.1 Forming a table  
4.9.12.2 Forming relationships between data cells and header cells  
4.9.13 Examples  


```

<table>
 <caption>Specification values: <b>Steel</b>, <b>Castings</b>,
 Ann. A.S.T.M. A27-16, Class B;* P max. 0.06; S max. 0.05.</caption>
 <thead>
  <tr>
   <th rowspan=2>Grade.</th>
   <th rowspan=2>Yield Point.</th>
   <th colspan=2>Ultimate tensile strength</th>
   <th rowspan=2>Per cent elong. 50.8mm or 2 in.</th>
   <th rowspan=2>Per cent reduct. area.</th>
  </tr>
  <tr>
   <th>kg/mm<sup>2</sup></th>
   <th>lb/in<sup>2</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Hard</td>
   <td>0.45 ultimate</td>
   <td>56.2</td>
   <td>80,000</td>
   <td>15</td>
   <td>20</td>
  </tr>
  <tr>
   <td>Medium</td>
   <td>0.45 ultimate</td>
   <td>49.2</td>
   <td>70,000</td>
   <td>18</td>
   <td>25</td>
  </tr>
  <tr>
   <td>Soft</td>
   <td>0.45 ultimate</td>
   <td>42.2</td>
   <td>60,000</td>
   <td>22</td>
   <td>30</td>
  </tr>
 </tbody>
</table>

```
  
  
<table>
 <caption>Specification values: <b>Steel</b>, <b>Castings</b>,
 Ann. A.S.T.M. A27-16, Class B;* P max. 0.06; S max. 0.05.</caption>
 <thead>
  <tr>
   <th rowspan=2>Grade.</th>
   <th rowspan=2>Yield Point.</th>
   <th colspan=2>Ultimate tensile strength</th>
   <th rowspan=2>Per cent elong. 50.8mm or 2 in.</th>
   <th rowspan=2>Per cent reduct. area.</th>
  </tr>
  <tr>
   <th>kg/mm<sup>2</sup></th>
   <th>lb/in<sup>2</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Hard</td>
   <td>0.45 ultimate</td>
   <td>56.2</td>
   <td>80,000</td>
   <td>15</td>
   <td>20</td>
  </tr>
  <tr>
   <td>Medium</td>
   <td>0.45 ultimate</td>
   <td>49.2</td>
   <td>70,000</td>
   <td>18</td>
   <td>25</td>
  </tr>
  <tr>
   <td>Soft</td>
   <td>0.45 ultimate</td>
   <td>42.2</td>
   <td>60,000</td>
   <td>22</td>
   <td>30</td>
  </tr>
 </tbody>
</table>



### Using HTML5 And CSS3 To Format A Web Page - Lesson Summary
```
The key points from this module are:
Headings:  (h1, h2, h3, h4, h5 and h6)
     For heading elements the h1 element represents the highest ranking heading 
     The h6 element represents the lowest ranking heading.

There is a default style setting for all of the heading elements: h1, h2, h3, h4, h5 and h6. 

The img element needs the following attributes
      • src=" "
      • alt=" " 
     src attribute - The location of the image file
     alt attribute - Alternative name for image (important for screen readers to identify and describe image)

The following are types of lists in HTML5:
• ul element - Unordered list
• ol element - Ordered list
• dl element - Description list (in HTML5)
• ul element - represents a list of items, where the order of the items is not important
• ol element - represents a list of items, where the items have been intentionally ordered
• dl element - represents an association list consisting of zero or more name-value group

Description lists:
     <dl> element - description list (in HTML5)
     <dt> element - description term
     <dd> element - description ps (in HTML5)

The following are elements for creating table:
• tbody element
• thead element
• tr element
• td element
• th element

tr element - represents a row of cells in a table
td element - represents a data cell in a table
th element - represents a header cell in a table




```
## MODULE 3 Working With Forms
#### In this module you will learn how to create a correctly formatted form using the HTML5 element and create different types of form inputs. You will also learn how to identify and use input types for the input element, and identify and use attributes for the input element.
[Creating Forms 1](https://mlapinm.github.io/d1024/l102.html)  
[Creating Forms 2](https://mlapinm.github.io/d1024/l112.html)  
```
Upon successful completion of this module you will be able to:  
Identify how to create a correctly formatted form using the <form> </form> HTMI5 element.  
Discuss creating different types of form inputs.  
Identify and use input types for the input element.  
Identify and use attributes for the input element.    
```

### Working With Forms - Learning Outcomes
http://127.0.0.1:5500/d1024/
form.aspx
?customerName=
&size=small
&toppings=bacon
&comments=
### Creating Forms
http://particletree.com/features/rediscovering-the-button-element/
### Form Validation And Other Future HTML5 Form Enhancements
### Working With Forms - Lesson Summary

```

The key points from this module are:
The following elements are used to create a form 
     <form> </form>

The following are important attributes associated with form element
      method-'" attribute
      action-’" attribute
      link="" attribute

HTTP POST - encode form data in body of HTTP message
HTTP GET - encode form and other data in URL

The following is a correctly formatted form element:
<form method-'POST"action="form.aspx"></form>

The attribute that limits the number of characters which can be typed into a form text box
        maxlength-' " attribute

fieldset element: represents a set of form controls optionally grouped under a common name.
legend element: represents a caption for the rest of the contents of the legend element's parent fieldset element.
label element: represents a caption in a user interface.
select element: represents a control for selecting amongst a set of options.
textarea element: represents a multi-line plain text edit control.









```


## MODULE 4 Using CSS3 Selectors To Style Web Pages
#### In this module you will learn how to identify different types of CSS3 selectors and apply CSS3 selectors to style web pages. You will know how to list CSS styles in cascading order of precedence. You will learn how to identify and use inline HTML5 elements, and identify and use block style HTML5 elements.

```

Upon successful completion of this module you will be able to:
Identify different types of CSS3 selectors.
Recognise how to apply CSS3 selectors to style web pages.
List CSS Styles in cascading order of precedence.
Identify and use inline HTML5 elements.
Identify and use block style HTML5 elements.



```








### Using CSS3 Selectors To Style Web Pages - Learning Outcomes
[Lesson 12 - Fun With CSS Selectors](https://mlapinm.github.io/d1024/l122.html)  
### Understanding Cascading Style Sheets
### CSS3 Font And Text Properties
https://mlapinm.github.io/d1024/l132.html  


<h1>font-family</h1>
<p style="font-family:Arial;">font-family:Arial;</p>
<p style="font-family:Times;">font-family:Times;</p>
<p style="font-family:Georgia;">font-family:Georgia;</p>
<p style="font-family:Constantia;">font-family:Constantia;</p>

<hr>

<h1>font-size</h1>
<p style="font-size:1em;">font-size:1em;</p>
<p style="font-size:1.3em;">font-size:1.3em;</p>
<p style="font-size:110%;">font-size:110%;</p>
<p style="font-size:14px;">font-size:14px;</p>
<p style="font-size:smaller;">font-size:smaller;</p>
<p style="font-size:small;">font-size:small;</p>
<p style="font-size:medium;">font-size:medium;</p>
<p style="font-size:large;">font-size:large;</p>
<p style="font-size:larger;">font-size:larger;</p>
<p style="font-size:x-large;">font-size:x-large;</p>
<p style="font-size:xx-large;">font-size:xx-large;</p>

<hr>

<h1>font-weight</h1>
<p style="font-weight:normal;">font-weight:normal;</p>
<p style="font-weight:lighter;">font-weight:lighter;</p>
<p style="font-weight:bold;">font-weight:bold;</p>
<p style="font-weight:bolder;">font-weight:bolder;</p>
<p style="font-weight:100;">font-weight:100;</p>
<p style="font-weight:900;">font-weight:900;</p>

<hr>

<h1>font-style</h1>
<p style="font-style:normal;">font-style:normal;</p>
<p style="font-style:italic;">font-style:italic;</p>
<p style="font-style:oblique;">font-style:oblique;</p>

<hr>

<h1>font-variant</h1>
<p style="font-variant:normal;">font-variant:normal;</p>
<p style="font-variant:small-caps;">font-variant:small-caps;</p>

<hr>

<h1>letter-spacing</h1>
<p style="letter-spacing:normal;">letter-spacing:normal;</p>
<p style="letter-spacing:.2em;">letter-spacing:.2em;</p>

<hr>

<h1>word-spacing</h1>
<p style="word-spacing:normal;">word-spacing:normal; This is a test.</p>
<p style="word-spacing:.5em;">word-spacing:.5em; This is a test.</p>

<hr>

<h1>line-height</h1>
<p style="line-height:normal;">Line height example 1 - If one is master of one thing and understands one thing well, one has at the same time, insight into and understanding of many things. - Vincent Van Gogh</p>
<p style="line-height:2em;">Line height example 2 - When I'm painting, I'm not aware of what I'm doing. It's only after a get acquainted period that I see what I've been about. I've no fears about making changes for the painting has a life of its own. - Jackson Pollock</p>

<hr>

<h1>text-transform</h1>
<p style="text-transform:capitalize;">text-transform: capitalize;</p>
<p style="text-transform:uppercase;">text-transform: uppercase;</p>
<p style="text-transform:lowercase;">Text-transform: lowercase;</p>

<hr>

<h1>text-align</h1>
<p style="text-align:left;">text-align:left;</p>
<p style="text-align:center;">text-align:center;</p>
<p style="text-align:right;">text-align:right;</p>

<hr>

<h1>vertical-align</h1>


<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:top;">vertical-align:top;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:middle;">vertical-align:middle;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:bottom;">vertical-align:bottom;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:super;">vertical-align:super;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:sub;">vertical-align:sub;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:baseline;">vertical-align:baseline;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:text-top;">vertical-align:text-top;</span>
  </h1>
</p>

<p>
  <h1 style="font-size:36px;line-height:1.2em;">Text
    <span style="font-size:14px;vertical-align:text-bottom;">vertical-align:text-bottom;</span>
  </h1>
</p>



<hr>

<h1>text-indent</h1>
<p style="text-indent:0px;">text-indent:0px;</p>
<p style="text-indent:25px;">text-indent:25px;</p>

<hr>

<h1>white-space</h1>
<p style="white-space:normal">white-space:normal - If one is master of one thing and understands one thing well, one has at the same time, insight into and understanding of many things. - Vincent Van Gogh</p>
<p style="white-space:pre">white-space:pre - If   one   is   master of one thing and understands one thing well, one has at the same time, insight into and understanding of many things. - Vincent Van Gogh</p>
<p style="white-space:nowrap">white-space:nowrap - If   one   is   master of one thing and understands one thing well, one has at the same time, insight into and understanding of many things. - Vincent Van Gogh</p>

<hr>

<h1>text-decoration</h1>
<p style="text-decoration:none;">text-decoration:none;</p>
<p style="text-decoration:underline;">text-decoration:underline;</p>
<p style="text-decoration:overline;">text-decoration:overline;</p>
<p style="text-decoration:line-through;">text-decoration:line-through;</p>

<hr>


### !important

h1{
  color: red !impotant;
}
  
  
https://kyleschaeffer.com/css-font-size-em-vs-px-vs-pt-vs-percent  
  
### CSS3 Color And Background Properties
https://mlapinm.github.io/d1024/l142.html  

### CSS3 List And Table Properties
https://mlapinm.github.io/d1024/l152.html  
### CSS3 Box Properties
https://mlapinm.github.io/d1024/l162.html  
### Working With CSS3 Font-Face
Lesson 17 - font-face
### Using CSS3 Selectors To Style Web Pages - Lesson Summary

```

The key points from this module are:
CSS styles are sets of 'name:value' pairs that represent visual attributes to apply to one or more HTML elements.

Web browsers already have a built-in style sheet that you can override with your own style sheet.

CSS Selectors are used to attach a style to one or more HTML elements.

If two or more selectors apply to the same element an order of precedence determines which style is applied.

Types of CSS Selectors
      element selector   Example: p
      .class selector       Example: .intro
      #id selector            Example: #firstname
      <selector>/             Example: <selector>/paragraph

CSS Selectors Examples:
div, p - Selects all <div> elements and all <p> elements
div p - Selects all <p> elements inside <div> elements
div > p - Selects all <p> elements where the parent is a <div> element

a*b - Universal, 'b' within 'a' regardless of 'b's parents
a > b - 'b' is a direct child of 'a'
a + b - 'b' is a sibling of 'a' immediately following 'a'
a ~ b - 'b' is a 'general' sibling of’a'

The following values can be used to control inheritance:
• inherit
• none
• normal
• auto

Cascading order of precedence:
• User
• Inline
• Media
• Important
• Specific
• Order
• Inherited from Parent
• Browser Default

The following can be used to insert comments into CSS code;  /* This is a comment */

The following allow you define colour in CSS3
• Hexadecimal values
• RGB values
• HSL values



The following are attributes of the background element in CSS3
     background-image
     background-repeat 
     background-attachment 

Inline Style Elements - Elements stack horizontally

Block Style Elements - Elements stack vertically
 
The following CSS style can make HTML5 elements display as inline elements
     display:inline

The following HTML5 elements are inline elements:
<a> element
<code> element
<i> element
<u> element
<img> element
<label> element
<legend> element
<nav> element
<small> element



The following HTML5 elements are block-style elements
      <article> element
      <body> element
      <div> element
      <h1> element
      <form> element
      <table> element

Overflow styles in CSS3:
overflow:auto;
overflow:scroll;
overflow:hidden;
overflow:visible;

- correct formatting for the margin style in CSS3 margin: [top] [right] [bottom] [left]
- correct formatting for the padding style in CSS3 padding: [top] [right] [bottom] [left]

Types of cursor styles in CSS3:
cursor:default;
cursor:crosshair;
cursor:text;
cursor:e-resize;






```





## MODULE 5 HTML5 Canvas, Video And SVG Elements
#### In this module you will learn how to embed a video using the HTML5 element and add video controls to a video. You will also learn how to work with HTML5 Canvas and with Scalable Vector Graphics (SVG) in HTML5.

```

Upon successful completion of this module you will be able to:
Describe how to embed a video using the HTML5 <video> element.
Describe how add video controls to a video.
Describe how to work with HTML5 <canvas> element.
Describe how to work with Scalable Vector Graphics (SVG) in HTML5.



```

https://mlapinm.github.io/d1024/l192.html  

### HTML5 Canvas, Video And SVG Elements - Learning Outcomes
### Embedding Video In HTML5
### Working With The HTML5 Canvas
### Working With SVG In HTML5
### Where To Go From Here
### HTML5 Canvas, Video And SVG Elements - Lesson Summary
### Section 2: Learn Javascript And Jquery Web Programming Skills

```

The key points from this module are:
The following HTML5 element plays video on a web page <video> element:
      Attributes for the <video> element.
      poster - what is to be displayed during download of video.
      controls - turns on the video player controls.
      autoplay - starts playing video automatically when downloaded.
      preload - download video immediately loop - video plays in continuous loop.
      width/height - set width and height dimensions of video .

HMTL5 <canvas> element:
      It can be used to draw graphs, make photo compositions.
      It can also do simple (and not so simple) animations using JavaScript.

SVG stands for Scalable Vector Graphics.
SVG images are resolution and device independent.












```












## MODULE 7 Writing Your First JavaScript Application
#### In this module you will learn about JavaScript variables, and programming concepts such as declaring variables using the var key word and naming JavaScript variables using identifiers. You will learn about HTML events such as onclick and how JavaScript methods can be used to work with events. You will learn about the different types of conditional statements, their correct syntax and examples of their use.
### Writing Your First JavaScript Application - Learning Outcomes
### Series Introduction
### Writing Your First JavaScript Application
### Dissecting The First JavaScript Application You Wrote
### Writing JavaScript In Visual Web Developer Express
### JavaScript Variables, Types, Operators And Expressions
### Writing Your First JavaScript Application - Lesson Summary
## MODULE 8 JavaScript Programming Concepts
#### In this module you will learn about the different types of JavaScript loops (for, for/in, while and do/while loops) and their correct syntax. You will learn about JavaScript arrays which are objects used to store multiple values in a single variable. You will also learn about the different types of 'falsy' values and 'truthy' values. Finally, you will learn about the main types of errors in JavaScript code and how to minimize these errors.
### JavaScript Programming Concepts - Learning Outcomes
### Conditional Logic In JavaScript
### JavaScript Functions
### JavaScript Array
### Looping Statements In JavaScript
### Understanding Function Versus Global Scope
### JavaScript Programming Concepts - Lesson Summary
## MODULE 9 JavaScript And The Document Object Model
#### In this module you will be introduced to the concept of the Document Object Model and how you can add greater functionality to your web pages using jQuery plugins. When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. The HTML DOM model is constructed as a tree of objects and JavaScript can interact with elements in the DOM to add much greater functionality and interactivity to web pages.
### JavaScript And The Document Object Model - Learning Outcomes
### Working With External JavaScript Files
### Organizing And Simplifying JavaScript With Object
### Understanding The Document Object Model
### JavaScript And The Document Object Model - Lesson Summary
## MODULE 10 Introduction To JQuery
#### In this module you will learn about jQuery which is the most popular JavaScript library in use today. You will learn how jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. You will learn about jQuery plug-ins which are available on the Web and cover a range of functions such as drag and drop, dynamic lists, events and many others. You will learn how to link your web pages to a jQuery plugin.
### Introduction To JQuery - Learning Outcomes
### Getting Started With JQuery
### JQuery Selectors
### JQuery Events
### Installing And Utilizing JQuery Plugins
### Unobtrusive JavaScript
### Using JQuery To Retrieve JSON Via AJAX
### Fundamentals Of JavaScript Closures
### Series Wrap-Up
### Introduction To JQuery - Lesson Summary  
  
## Footer
  
  
  
  
https://mlapinm.github.io/d1024/l032.html  
https://mlapinm.github.io/index.html  

https://channel9.msdn.com/  
  
https://www.w3.org/TR/html5-author/  


https://caniuse.com/  
  
https://validator.nu/  
  
ext install htmltagwrap  
ctrl shift w  
  
npm install prettier -D --save-exact  
 alt + Shift + f -> Format Document
OR  
