[**Help**](#Help)   
[**1. Responsive Web Design Projects**](#1.-Responsive-Web-Design-Projects)  
[1. Build a Tribute Page](#1.-Build-a-Tribute-Page)  
[2. Build a Survey Form](#2.-Build-a-Survey-Form)  
[3. Build a Product Landing Page](#3.-Build-a-Product-Landing-Page)  
[4. Build a Technical Documentation Page](#4.-Build-a-Technical-Documentation-Page)  
[5. Build a Personal Portfolio Webpage](#5.-Build-a-Personal-Portfolio-Webpage) 
[**2. Front End Libraries Projects**](#2.-Front-End-Libraries-Projects)  
[2.1. Build a Random Quote Machine](#2.1.-Build-a-Random-Quote-Machine)  
[2.2. Build a Markdown Previewer](#2.2.-Build-a-Markdown-Previewer)  
[2.3. Build a Drum Machine](#2.3.-Build-a-Drum-Machine)  
[2.4. Build a JavaScript Calculator](#2.4.-Build-a-JavaScript-Calculator)  
[2.5. Build a Pomodoro Clock](#2.5.-Build-a-Pomodoro-Clock)   
[**3. Data Visualization Projects**](#3.-Data-Visualization-Projects)  
[3.1. Visualize Data with a Bar Chart](#3.1.-Visualize-Data-with-a-Bar-Chart)  
[3.2. Visualize Data with a Scatterplot Graph](#3.2.-Visualize-Data-with-a-Scatterplot-Graph)  
[3.3. Visualize Data with a Heat Map](#3.3.-Visualize-Data-with-a-Heat-Map)  
[3.4. Visualize Data with a Choropleth Map](#3.4.-Visualize-Data-with-a-Choropleth-Map)  
[3.5. Visualize Data with a Treemap Diagram](#3.5.-Visualize-Data-with-a-Treemap-Diagram)   

[**4. APIs and Microservices Projects**](#4.-APIs-and-Microservices-Projects)   

[**5. Information Security and Quality Assurance Projects**](#5.-Information-Security-and-Quality-Assurance-Projects)  
[**gmail api**](#gmail-api)  


#### Help
1. Ссылка .hover-link при наведении переключить на большие буквы.
```
.hover-link:hover{text-transform: uppercase;}
```
1. При padding margin - изменяется габарит элемента, следовательно изменяется положение других элементов(они сдвигаются относительно данного элемента). 
1. [Position](d02html.ipynb#22.-Move-a-Relatively-Positioned-Element-with-CSS-Offsets)  
При `position: relative; top: 15px;` элемент сдвигается от верха на 15px.  
  При этом: 
  - положение других элементов не меняется
  - без relative сдвиг не работает
1. position: absolut - если у него парент c relative, то смещения отсчитываются от парента(в другом случае от края экрана). Парент уже не содержит этот элемент и схлапывается. На d3 надо пополучать свойства.
```
element = document.getElementById('foo');
color = window.getComputedStyle(element).backgroundColor;
```
1. 1vh = 1% `высата браузера`
1. display: inline; - хорошо  
float: left - плохо
1. Центрирование и текста и блока(картинки)
  - text-align:center;  
  - margin: auto;
1. @media (max-width: 350px)
1. [anchor-fixed](https://codepen.io/anon/pen/gXqQJp)
1. 
1. 


### 1. Responsive Web Design Projects

#### 1. Build a Tribute Page
##### e01TributePage
[Tribute Page](https://codepen.io/mlapin/full/MWawwVr)  
```
```



##### 1. User Story #1: My tribute page should have an element with a corresponding id="main", which contains all other elements.
```
<main id="main">
```
##### 2. User Story #2: I should see an element with a corresponding id="title", which contains a string (i.e. text) that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug").
```
<h1 id="title">Оденкерк, Боб</h1>
```
##### 3. User Story #3: I should see a div element with a corresponding id="img-div".
```
<figure id="img-div">
```
##### 4. User Story #4: Within the img-div element, I should see an img element with a corresponding id="image".
```
<img id="image" src="">
```
##### 5. User Story #5: Within the img-div element, I should see an element with a corresponding id="img-caption" that contains textual content describing the image shown in img-div.
```
<figcaption id="img-caption">
```
##### 6. User Story #6: I should see an element with a corresponding id="tribute-info", which contains textual content describing the subject of the tribute page.
```
<section id="tribute-info">
```
##### 7. User Story #7: I should see an a element with a corresponding id="tribute-link", which links to an outside site that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of target and set it to _blank in order for your link to open in a new tab (i.e. target="_blank").
```
<h3>Подробнее ... <a target="_blank" href="">смотри в Wikipedia</a></h3>
```
##### 8. User Story #8: The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.
```
img {
  max-width: 100%;
  display: block;
  height: auto;
  margin: 0 auto;
}
```
##### 9. User Story #9: The img element should be centered within its parent element.
```
```





#### 2. Build a Survey Form
##### e02ServeyForm  
[Survey Form](https://codepen.io/mlapin/full/jObPbRJ)  

##### 1. User Story #1: I can see a title with id="title" in H1 sized text.
```
<div class="container">
<header class="header">
<h1 id="title">Survey Form</h1>
```
##### 2. User Story #2: I can see a short explanation with id="description" in P sized text.
```
<p id="description">description</p>  
```
##### 3. User Story #3: I can see a form with id="survey-form".
```
<form id="survey-form">
```
##### 4. User Story #4: Inside the form element, I am required to enter my name in a field with id="name".
```
  <div class="form-group">
  <label for="name" class="name-label">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your Name"></input>
  </div>
```
##### 5. User Story #5: Inside the form element, I am required to enter an email in a field with id="email".
```
  <div class="form-group">
  <label for="email" class="email-label">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your Email" required></input>
  </div>
```
##### 6. User Story #6: If I enter an email that is not formatted correctly, I will see an HTML5 validation error.
```
type="email"
```
##### 7. User Story #7: Inside the form, I can enter a number in a field with id="number".
```
  <div class="form-group">
  <label for="number" class="number-label">Age: (optional)</label>
  <input type="number" max="119" min="3" id="number" class="form-control" name="number" placeholder="Age" required></input>
  </div>
```
##### 8. User Story #8: If I enter non-numbers in the number input, I will see an HTML5 validation error.
```
type="number"
```
##### 9. User Story #9: If I enter numbers outside the range of the number input, which are defined by the min and max attributes, I will see an HTML5 validation error.
```
max="119" min="3"
```
##### 10. User Story #10: For the name, email, and number input fields inside the form I can see corresponding labels that describe the purpose of each field with the following ids: id="name-label", id="email-label", and id="number-label".
```
<label for="name" class="name-label">
<label for="email" class="email-label">
<label for="number" class="number-label">
```
##### 11. User Story #11: For the name, email, and number input fields, I can see placeholder text that gives me a description or instructions for each field.
```
placeholder="Enter your Name"
placeholder="Enter your Email"
placeholder="Age (optional)"
```
##### 12. User Story #12: Inside the form element, I can select an option from a dropdown that has a corresponding id="dropdown".
```
  <div class="form-group">
  <p>Options</p>
  <select id="dropdown" class="form-control" name="role" required>
  <option disabled selected value>select role
  </option>
  <option value="student">Student
  </option>
  <option value="other">Other</option>
  </select>
  </div>
```
##### 13. User Story #13: Inside the form element, I can select a field from one or more groups of radio buttons. Each group should be grouped using the name attribute.
```
 <div class="form-group">
      <p>Would you recommend freeCodeCamp to a friend?</p>
      <label>
        <input
          name="user-recommend"
          value="definitely"
          type="radio"
          class="input-radio"
          checked />Definitely</label>
      <label>
        <input
          name="user-recommend"
          value="maybe"
          type="radio"
          class="input-radio" />Maybe</label>

      <label><input
          name="user-recommend"
          value="not-sure"
          type="radio"
          class="input-radio" />Not sure</label>
    </div>
```
##### 14. User Story #14: Inside the form element, I can select several fields from a series of checkboxes, each of which must have a value attribute.
```
value="not-sure"
```
##### 15. User Story #15: Inside the form element, I am presented with a textarea at the end for additional comments.
```
    <div class="form-group">
      <p>Any comments or suggestions?</p>
      <textarea
        id="comments"
        class="input-textarea"
        name="comment"
        placeholder="Enter your comment here..."></textarea>
    </div>
```
##### 16. User Story #16: Inside the form element, I am presented with a button with id="submit" to submit all my inputs.
```
```





#### 3. Build a Product Landing Page
[](https://codepen.io/mlapin/full/xxwGprq)  
[bbc-microbit](http://wiki.amperka.ru/products:bbc-microbit)  
```
```

##### 1. User Story #1: My product landing page should have a header element with a corresponding id="header".
```
```
##### 2. User Story #2: I can see an image within the header element with a corresponding id="header-img". A company logo would make a good image here.
```
```
##### 3. User Story #3: Within the #header element I can see a nav element with a corresponding id="nav-bar".
```
```
##### 4. User Story #4: I can see at least three clickable elements inside the nav element, each with the class nav-link.
```
```
##### 5. User Story #5: When I click a .nav-link button in the nav element, I am taken to the corresponding section of the landing page.
```
```
##### 6. User Story #6: I can watch an embedded product video with id="video".
```
```
##### 7. User Story #7: My landing page has a form element with a corresponding id="form".
```
```
##### 8. User Story #8: Within the form, there is an input field with id="email" where I can enter an email address.
```
```
##### 9. User Story #9: The #email input field should have placeholder text to let the user know what the field is for.
```
```
##### 10. User Story #10: The #email input field uses HTML5 validation to confirm that the entered text is an email address.
```
```
##### 11. User Story #11: Within the form, there is a submit input with a corresponding id="submit".
```
```
##### 12. User Story #12: When I click the #submit element, the email is submitted to a static page (use this mock URL: https://www.freecodecamp.com/email-submit).
```
```
##### 13. User Story #13: The navbar should always be at the top of the viewport.
```
```
##### 14. User Story #14: My product landing page should have at least one media query.
```
```
##### 15. User Story #15: My product landing page should utilize CSS flexbox at least once.
```
```

#### 4. Build a Technical Documentation Page
[Technical Documentation Page](https://codepen.io/mlapin/full/RwWPyzE)  
```
```

##### 1. I can see a main element with a corresponding id="main-doc", which contains the page's main content (technical documentation).
```
```
##### 2. Within the #main-doc element, I can see several section elements, each with a class of main-section. There should be a minimum of 5.
```
```
##### 3. The first element within each .main-section should be a header element which contains text that describes the topic of that section.
```
```
##### 4. Each section element with the class of main-section should also have an id that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "JavaScript and Java" should have a corresponding id="JavaScript_and_Java").
```
```
##### 5. The .main-section elements should contain at least 10 p elements total (not each).
```
```
##### 6. The .main-section elements should contain at least 5 code elements total (not each).
```
```
##### 7. The .main-section elements should contain at least 5 li items total (not each).
```
```
##### 8. I can see a nav element with a corresponding id="navbar".
```
```
##### 9. The navbar element should contain one header element which contains text that describes the topic of the technical documentation.
```
```
##### 10. Additionally, the navbar should contain link (a) elements with the class of nav-link. There should be one for every element with the class main-section.
```
```
##### 11. The header element in the navbar must come before any link (a) elements in the navbar.
```
```
##### 12. Each element with the class of nav-link should contain text that corresponds to the header text within each section (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").
```
```
##### 13. When I click on a navbar element, the page should navigate to the corresponding section of the main-doc element (e.g. If I click on a nav-link element that contains the text "Hello world", the page navigates to a section element that has that id and contains the corresponding header.
```
```
##### 14. On regular sized devices (laptops, desktops), the element with id="navbar" should be shown on the left side of the screen and should always be visible to the user.
```
```
##### 15. My Technical Documentation page should use at least one media query.
```
```









#### 5. Build a Personal Portfolio Webpage
```
```

### 2. Front End Libraries Projects
[2.1. Build a Random Quote Machine](#2.1.-Build-a-Random-Quote-Machine)  
[2.2. Build a Markdown Previewer](#2.2.-Build-a-Markdown-Previewer)  
[2.3. Build a Drum Machine](#2.3.-Build-a-Drum-Machine)  
[2.4. Build a JavaScript Calculator](#2.4.-Build-a-JavaScript-Calculator)  
[2.5. Build a Pomodoro Clock](#2.5.-Build-a-Pomodoro-Clock) 

#### 2.1. Build a Random Quote Machine
[Цитаты на английском с переводом на русский](http://oftob.com/%D1%86%D0%B8%D1%82%D0%B0%D1%82%D1%8B)  

Life is what we make it, always has been, always will be.   
Жизнь такова, какой мы ее делаем, всегда была и всегда будет.  
Grandma Moses  

When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.  

#### Алгоритм
- jQuery
- Когда документ загрузится `$(document).ready`
- Вызывается функция `getQuotes()`, возвращающая массив объектов `quotesData.quotes`.
- При успешном завершении `.then()`
- Вызывается `getQuotes`
- Вешается обработчик `on('click', getQuote)` на `#new-quote`, который вызывает `getQuote()`
<hr>
- Функция `getQuote()` получает локальную переменную `randomQuote` после вызова `getRandomQuote()`
- Глобальные `currentQuote` и `currentAuthor` заполняются из `randomQuote`
- Текстовое поле элемент `#text` заполняется `currentQuote`
- html содержимое элемента `#author` заполняется `currentAuthor`
<hr>
- Функция `randomQuote` генерит номер элемента из числа полученного массива элементов и возвращает соответствующий элемент. `Math.floor(Math.random() * N`, где N длина `quotesData.quotes`

- 
- 
- 
- 
- 


- 1. I can see a wrapper element with a corresponding `div id="wrapper"` with `div id="quote-box"`.
- 2. Within #quote-box, I can see an element with a corresponding `div id="quote-text"` with `i class="fa fa-quote-left"`, `span id="text"`.
- 3. Within #quote-box, I can see an element with a corresponding `div id="quote-author"` with `span id="author"`.
- 4. Within #quote-box `div class="buttons"`, I can see a clickable element with a corresponding `button class="button" id="new-quote"`.
- 5. Within #quote-box, I can see a clickable a element with a corresponding `a class="button" id="tweet-quote" target="_blank"` with `i class="fa fa-twitter"`.
- 6. On first load, my quote machine displays a random quote in the element with id="text".
- 7. On first load, my quote machine displays the random quote's author in the element with id="author".
- 8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
- 9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
- 10. I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
- 11. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.


#### 2.2. Build a Markdown Previewer
[marked.js.org](https://marked.js.org/#/USING_ADVANCED.md)  
##### Перенос без двух пробелов в конце строки
```
marked.setOptions({
breaks: true
});
```

- Страница на React. class `App` вставляется в элемент #app 
- Есть три класса: 
  `editorWrap`
  `viewerWrap`
  `toolbarWrap`
- Есть три реакт компонента
  `Toolbar`
  `Editor`
  `Viewer`
- Внутри `editorWrap` - `Toolbar`, `Editor`
- Внутри `viewerWrap` - `Toolbar`, `Viewer`
- Компонент `Editor` содержит `textarea#editor`
- Компонент `Viewer` содержит `div#preview`
```
```
- dangerouslySetInnerHTML засовывает в `div#preview` некоторое содержимое


```
class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    const classes = //this.state.editorMaximized ?
          0 ?
          ['editorWrap maximized', 
           'previewWrap hide', 
           'fa fa-compress'] : 
//          this.state.previewMaximized ?
          0 ?
          ['editorWrap hide', 
           'previewWrap maximized', 
           'fa fa-compress'] :
          ['editorWrap', 
           'previewWrap', 
           'fa fa-arrows-alt'];
    return (
      <div>
        <div className={classes[0]}>
          <Toolbar icon={classes[2]} />
          <Editor />
        </div>		
        <div className={classes[1]}>
          <Toolbar icon={classes[2]} />
          <Preview />
        </div>		
      </div>
    );
  }
};

const Toolbar = (props) => {
return (
  <div className="toolbar" >111
  
  </div>
)}

const Editor = (props) => {
return (
  <textarea id="editor" />
)}

const Preview = (props) => {
return (
  <div id="preview" >333
  </div>
)}

ReactDOM.render(<App />, 
document.getElementById('app'));
```

##### Заполнение Viewer из Editor
- `state` содержит:
  `markdown` - `placeholder`
  `editorMaximized` - `false`
  `previewMaximized` - `false`
- есть глобальная переменная `placeholder` с начальным содержимым `Editor`
- `state` `markdown` с помощью свойства `markdown` передается в `Editor` и `Preview`.
- `value` `textarea` из `Editor` приравнивается к свойству `markdown`
- `div` из `Preview` заполняется к свойству `markdown` странным способом.
  dangerouslySetInnerHTML={{__html: props.markdown}}
- итог - видим `placeholder` в обоих окнах  
- обработчик handleChange(e) вешается на `onChange`.
- внутри `Editor` свойство `onChange` надо прикрутить к внутреннему `onChange` - без этого не работает
- прикрутить `bind`
- изменить `state` по части `markdown` `e.target.value`  
 
- 
- 
- 


##### Передача Toolbar-у свойства text
- свойство text делаю Editor, Priview
- внутри Toolbar-а в div помещаю props.text 

##### Вывешивание иконки и подключения обработчика онклика для максимизирования окна
- через проперти icon в Toolbar передается имя класса из render-овского массива classes[2]
- тагу i.className присваивается проперти icon
- обработчики handleEditorMaximize(), handlePreviewMaximize()   
- изменяют в state editorMaximize, previewMaximize
на обратное
- bind
- передаем Toolbar обработчики через свойство onClick
- в Toolbar tag-у i onClick назначаем переданный обработчик


- 1. I can see a textarea element with a corresponding id="editor".
- 2. I can see an element with a corresponding id="preview".
- 3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
- 4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
- 5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
- 6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

#### 2.3. Build a Drum Machine

#### Как работает
- исходные данные для клавиш `Bank` в массивах из 9 объектов `bankOne` и `BankTwo`
- объект содержит
  - keyCode
  - keyTrigger
  - id
  - url
- App передает клавиатуре PadBank
  - соответствующий массив currentPadBank
  - функцию updateDisplay, которая забирает название клавиши Drum
  - состояние power
  - состояние clipVolume  
- PadBank возврацает div.pad-name c массивом реакт объектов DrumPad  
- DrumPad возвращает div.drum-pad c audio компонентом  

#### Что в render App
- все в элементе  div#drum-machine.inner-container
- PadBank
- div.logo
- div.controls-container
  - div.control
    - p[text]=Power
	- div.Select
	  - div.inner
  - p#display
  - div.volume-slider
    - input type range
  - div.control
    - p[text]=Bank
	- div.Select
	  - div.inner
#### Зарисовка
- DrumPad state
  padStyle: inactiveStyle
- DrupPad div
  className="drum-pad" 
  style={this.state.padStyle}
- в App state currentPadBank : назначу глобальный массив bankOne  
- в App передам свойство массив currentPadBank из state в PadBank  
- в PadBank сформирую массив padBank  объектов react DrumPad со свойствами
  - keyCode
  - keyTrigger
  - id
  - url


#### Отображение информации свойства clipId DrumPad в App div#display
- App добавляю поле display в state
- div#display показывает это поле 
- метод displayClipName c параметром name изменяет это поле
- bind displayClipName
```
this.displayClipName = this.displayClipName.bind(this);

this.displayClipName('789');
```
- displayClipName передается BankPad как свойство updateDisplay
- в BankPad updateDisplay передается DrumPad
<hr>
- в DrumPad обработчик playSound
- bind playSound
- div DrumPad на событие onClick вывешивается обработчик playSound
- в DrumPad updateDisplay playSound(e) вызывает updateDisplay и передает ему свое свойство clipId


#### Проигрывание музыки DrumPad
- добавляю audio.clip#keyTrigger в div#clipId
  clip = 'clip'
  keyTrigger= keyTrigger свойсв
  src= clip свойств
- в playSound() нахожу элемент по id(clip)
- вызываю метод play

#### Обработка клавиш QWEASDZXC Drumpad
- пишется обработчик кнопок handleKeyPress

- биндится
- сравнивает нажатая кнопка e.keyCode соответствует this keyCode
- да - this.playSound()
- обработчик монтируется при загрузке страницы
```
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
```
- обработчик размонтируется при закрытии страницы
```
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
```

#### Оживление кнопок
#### Power - включение отключение
#### Bank - выбор банка мелодий
#### Slider - громкость

```

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>11
      </div>
    );
  }
};

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DrumPad />
      </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
	  <PadBank />
      </div>
    );
  }
};

ReactDOM.render(<App />, 
document.getElementById('root'));

```

- 1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
- 2. Within #drum-machine I can see an element with a corresponding id="display".
- 3. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
- 4. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
- 5. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.





#### 2.4. Build a JavaScript Calculator

#### Calculator
- передается значение state currentValue в Output свойство currenValue
#### Buttons
- на обработчик button onClick вешаются 
  - numbers  handleNumbers
  - operators  handleOperators
  - initialize  initialize
  - evaluate   handleEvaluate
  - decimal   handleDecimal


```
- Calculator
  div.calculator
  Formula
   div.formulaScreen
  Output
   div.outputScreen#display
  Buttons
   button.jumbo#clear
   button#divide
   button#multiply
   button#seven
   button#eight
   button#nine
   button#subtract
   button#four
   button#five
   button#six
   button#add
   button#one
   button#two
   button#three
   button#jumbo
   button#decimal
   button#equals
   ```

##### Clear
- state
       prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: ""

```
  initialize() {
    this.setState({
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: "",
      evaluated: false
    });

```
##### handleNumber
- handleEvalute evaluted true

- evaluted false
- если evaluted, currentVal и formula, пишем value

- если currenVal и value 0
  currentVal и formula, пишем value
- если это не так
- currenValue: если currentVal==0, то пишем value, в другом случае дописываем currentVal+value
- formula: если formula заканчивается N*0 или равна 0, то заменяем последний символ 0 на value
- в противном случае дописываем символ


##### handleOperators
- value formula, prevVal, evaluated
- всегда текущее значение становится равным введенному, признак равно сбрасывается
- если был признак равно, то формула предыдущее значение и знак
- если формула заканчивается цифрой, то предыдущее значение становится формулой, а к формуле добавляется знак
- если заканчивается знаком то формула становится предыдущим значением плюс знак(знак перетирается)
- если формула заканчивается *,/ и value == - , то к формуле дебавляется -
- Резюме: при вводе оператора и была цифра на конце, то предыдущее значение становится формулой, а если был знак, то этот знак перетирается введенным знаком(реализация - предыдущее значение и введенный знак)
##### handleEvaluate
- expresFormula: в формуле убираем последний оператор

- expression: в формуле expresFormula заменяем x на *
- answer: вычисляем eval expression
- в formula записываем expresFormula + "=" + answer
- evaluted делаем true
##### handleEvaluate
- если после равно то вводится .0 и в формулу и текущее значение, evaluted = false
- если текущее значени оператор, то вводится 0. формула тоже дополняется
- если текущее значение имеет точку, то ничего не делается
- если текущее значение цифра, то дополняются . и формула и текущее значение





#### Только графика
```
// VARS:
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /[x/+]‑$/,
  clearStyle = { background: "#ac3939" },
  operatorStyle = { background: "#666666" },
  equalsStyle = {
    background: "#004466",
    position: "absolute",
    height: 130,
    bottom: 5
  };


class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator">
        <Formula classname="formulaScreen" />
        <Output />
        <Buttons />	  
      </div>
    );
  }
};

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button
          className="jumbo"
          id="clear"
          onClick={this.props.initialize}
          style={clearStyle}
          value="AC"
        >
          AC
        </button>
        <button
          id="divide"
          onClick={this.props.operators}
          style={operatorStyle}
          value="/"
        >
          /
        </button>
        <button
          id="multiply"
          onClick={this.props.operators}
          style={operatorStyle}
          value="x"
        >
          x
        </button>
        <button id="seven" onClick={this.props.numbers} value="7">
          7
        </button>
        <button id="eight" onClick={this.props.numbers} value="8">
          8
        </button>
        <button id="nine" onClick={this.props.numbers} value="9">
          9
        </button>
        <button
          id="subtract"
          onClick={this.props.operators}
          style={operatorStyle}
          value="‑"
        >
          -
        </button>
        <button id="four" onClick={this.props.numbers} value="4">
          4
        </button>
        <button id="five" onClick={this.props.numbers} value="5">
          5
        </button>
        <button id="six" onClick={this.props.numbers} value="6">
          6
        </button>
        <button
          id="add"
          onClick={this.props.operators}
          style={operatorStyle}
          value="+"
        >
          +
        </button>
        <button id="one" onClick={this.props.numbers} value="1">
          1
        </button>
        <button id="two" onClick={this.props.numbers} value="2">
          2
        </button>
        <button id="three" onClick={this.props.numbers} value="3">
          3
        </button>
        <button
          className="jumbo"
          id="zero"
          onClick={this.props.numbers}
          value="0"
        >
          0
        </button>
        <button id="decimal" onClick={this.props.decimal} value=".">
          .
        </button>
        <button
          id="equals"
          onClick={this.props.evaluate}
          style={equalsStyle}
          value="="
        >
          =
        </button>
      </div>
    );
  }
}

class Output extends React.Component {
  render() {
    return (
      <div className="outputScreen" id="display">
        {this.props.currentValue}
      </div>
    );
  }
}

class Formula extends React.Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>;
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
```

- 1. My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
- 2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
- 3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
- 4. My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".
- 5. My calculator should contain a clickable element with an id="clear".
- 6. My calculator should contain an element to display values with a corresponding id="display".
- 7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
- 8. As I input numbers, I should be able to see my input in the element with the id of display.
- 9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
- 10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
- 11. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
- 12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
- 13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).
- 14. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
- 15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).




#### 2.5. Build a Pomodoro Clock

#### Pomodoro Clock
Timer  
TimerLengthControl (without props)  

#### Timer render
div  
- div.main-title
- TimerLengthControl
  titleID="break-label"
  minID="break-decrement"
  lengthID="break-length"
  addID="break-increment"
- TimerLengthControl
  titleID="session-label"
  minID="session-decrement"
  lengthID="session-length"
  addID="session-increment"
- div.timer
  div.timer-wrapper
    div#timer-label
    div#timer-left
- div.timer-control
  button#start_stop
    i.fa fa-play fa-2x
	i.fa fa-pause fa-2x
  button#reset
    i.fa fa-refresh fa-2x
- audio#beep  
#### TimerLengthControl render
div.length-control  
- div id titleID
- button id minID
  i.fa fa-arrow-down fa-2x
- div.btn-level id lengthID
- button id addID
  i.fa fa fa-arrow-up fa-2x


```
class TimerLengthControl extends React.Component {
  render() {
    return (
      <div className="length-control">
        <div id={this.props.titleID}>
        </div>
        <button id={this.props.minID}>
          <i className="fa fa-arrow-down fa-2x"></i>
        </button>
        <div className="btn-level" id={this.props.lengthID}>
        </div>
        <button id={this.props.addID}>
          <i className="fa fa-arrow-up fa-2x"></i>
        </button>
      </div>
    );
  }
};
class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="main-title">
        </div>
        <TimerLengthControl 
          titleID="break-label"
          minID="break-decrement"
          lengthID="break-length"
          addID="break-increment"
          />
        <TimerLengthControl 
          titleID="session-label"
          minID="session-decrement"
          lengthID="session-length"
          addID="session-increment"
          />
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">
            </div>
            <div id="timer-left">
            </div>
          </div>
        </div>
        <div className="timer-control">
          <button id="start_stop">
            <i className="fa fa-play fa-2x"></i>
            <i className="fa fa-pause fa-2x"></i>
          </button>
          <button id="start_stop">
            <i className="fa fa-refresh fa-2x"></i>
          </button>
        </div>
        <audio id="beep" />
      </div>
    );
  }
};

ReactDOM.render(<Timer />, 
  document.getElementById("app"));
  ```

##### 1. I can see an element with id="break-label" that contains a string (e.g. “Break Length”)
- title="Break Length"
##### I can see an element with id="session-label" that contains a string (e.g. "Session Length”).
- title="Session Length"
##### I can see an element, with corresponding id="break-length", which by default (on load) displays a value of 5.
```
    this.state = {
      brkLength: 5,
      seshLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    }
```
- length={this.state.brkLength}
- length={this.state.seshLength}
##### I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
```
  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
```
- this.clockify = this.clockify.bind(this);
##### length break session
```
  setBrkLength(e) {
    this.lengthControl('brkLength', e.currentTarget.value, 
    this.state.brkLength, 'Session');
  }
  setSeshLength(e) {
    this.lengthControl('seshLength', e.currentTarget.value, 
    this.state.seshLength, 'Break');
  }
```
```
- onClick={this.setBrkLength}
- onClick={this.setSeshLength}

- value="-" onClick={this.props.onClick}
- value="+" onClick={this.props.onClick}
```
```
  lengthControl(stateToChange, sign, currentLength, timerType) {
    if (this.state.timerState == 'running') return;
    if (this.state.timerType == timerType) {
      if (sign == "-" && currentLength != 1 ) {
        this.setState({[stateToChange]: currentLength - 1});
      } else if (sign == "+" && currentLength != 60) {
        this.setState({[stateToChange]: currentLength + 1});
      } 
    } else {
      if (sign == "-" && currentLength != 1 ) {
        this.setState({[stateToChange]: currentLength - 1,
        timer: currentLength * 60 - 60});
      } else if (sign == "+" && currentLength != 60) {
        this.setState({[stateToChange]: currentLength + 1,
        timer: currentLength * 60 + 60});
      } 
    }
  }
```  

- {this.state.timerType}
##### I can see a clickable element with corresponding id="start_stop".
10. I can see a clickable element with corresponding id="reset".
```
  timerControl() {
    let control = this.state.timerState == 'stopped' ? (
      this.beginCountDown(),
      this.setState({timerState: 'running'})
    ) : (
      this.setState({timerState: 'stopped'}),
      this.state.intervalID && this.state.intervalID.cancel()
    );
  }
  beginCountDown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decrementTimer(); 
        this.phaseControl();
       }, 1000)
    })
  }
  decrementTimer() {
    this.setState({timer: this.state.timer - 1});
  }
  phaseControl() {
    let timer = this.state.timer;
    this.warning(timer);
    this.buzzer(timer);
    if (timer < 0) { 
      this.state.timerType == 'Session' ? (
        this.state.intervalID && this.state.intervalID.cancel(),
        this.beginCountDown(),
        this.switchTimer(this.state.brkLength * 60, 'Break')
      ) : (
        this.state.intervalID && this.state.intervalID.cancel(),
        this.beginCountDown(),
        this.switchTimer(this.state.seshLength * 60, 'Session')
      );
    }  
  }
  warning(_timer) {
    let warn = _timer < 61 ? 
    this.setState({alarmColor: {color: '#a50d0d'}}) : 
    this.setState({alarmColor: {color: 'white'}});
  }
  buzzer(_timer) {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  }
  switchTimer(num, str) {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: {color: 'white'}
    })
  }
```
- reset
```
  reset() {
    this.setState({
      brkLength: 5,
      seshLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    });
    this.state.intervalID && this.state.intervalID.cancel();
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
```
onClick={this.reset}



- 1. I can see an element with id="break-label" that contains a string (e.g. "Break Length").
- 2. I can see an element with id="session-label" that contains a string (e.g. "Session Length").
- 3. I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".
- 4. I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
- 5. I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.
- 6. I can see an element with a corresponding id="session-length", which by default displays a value of 25.
- 7. I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").
- 8. I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
- 9. I can see a clickable element with a corresponding id="start_stop".
- 10. I can see a clickable element with a corresponding id="reset".
- 11. When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
- 12. When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.
- 13. When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.
- 14. When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.
- 15. When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.
- 16. I should not be able to set a session or break length to <= 0.
- 17. I should not be able to set a session or break length to > 60.
- 18. When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.
- 19. If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).
- 20. If the timer is running and I click the element with id="start_stop", the countdown should pause.
- 21. If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.
- 22. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.
- 23. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
- 24. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.
- 25. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
- 26. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".
- 27. The audio element with id="beep" must be 1 second or longer.
- 28. The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.



### 3. Data Visualization Projects

#### D3 remane
```
d3.select('body')
.append('h1')
.text("Learning D3")

d3.selectAll('li')
.text('list item')

d3.select('body')
.selectAll('h2')
.data(dataset)
.enter()
.append('h2')
.text('New Title')

.text((d) => d + ' USD' );

.style('font-family', 'verdana')

.style('color', (d) => d < 20 ? 'red' : 'green' )

.attr('class', 'bar')

.style('height', (d) => d)

margin: 2px;

.append('svg')
.style('width', w)
.style('height', h)

.append('rect')
.attr('x', '0')
.attr('y', '0')
.attr('width', '25')
.attr('height', '100')

.data(dataset)
.enter()
.append('rect')

.append("rect")
.attr("x", (d, i) => {
return i * 30;
})

.attr("height", (d, i) => {
return d*3;
});

.attr("y", (d, i) => {
return h - d * 3;
})

.attr('fill', 'navy')

.append('text')
.attr('x', (d,i) => i*30)
.attr('y', (d) => h - 3 - d * 3)
.text((d) => d)

.style('font-size', 25)
.attr('fill','red')

.attr('class', 'bar')
.style('bar:hover')

.append('title')
.text((d) => d)

.data(dataset)
.enter()
.append('circle')

.attr('cx', (d) => d[0])
.attr('cy', (d) => h - d[1])
.attr('r', 5)

.attr('x', (d) => d[0] + 5)
.attr('y', (d) => h - d[1])
.text((d) => d[0] + ', ' + d[1])

const scale = d3.scaleLinear(); // Create the scale here
const output = scale(50); // Call the scale with an argument here

const scale = d3.scaleLinear();
scale.domain([250, 500]);
scale.range([10, 150]);

const output = d3.max(positionData, (d) => d[2]); // Change this line

const yScale =
d3.scaleLinear()
.domain([0, d3.max(dataset, (d) => d[1])])
.range([h - padding,  padding]);

// Add your code below this line
.attr('cx', (d) => xScale(d[0]))
.attr('cy', (d) => yScale(d[1]))
.attr('r', 5)
// Add your code above this line
// Add your code below this line
.attr('x', (d) => xScale(d[0] + 10))
.attr('y', (d) => yScale(d[1]))
// Add your code above this line

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line
svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);
// Add your code below this line
svg.append("g")
.attr("transform", "translate(" + padding +  ",0)")
.call(yAxis)
// Add your code above this line




```

#### Chart1
```
<body>
   <div id="out"></div>
   <div id="out2"></div>
  <script>
const w = 300;
const h = 200;
const padding = 30;

let div1 = d3.selectAll("div#out")
.append("text")
.text("a") 
let div2 = d3.selectAll("div#out2")
.append("text")
.text("b")
let dataset = [];
for(let i = 0; i < 100; i++){
let e = [];
e.push(i);   
e.push(i);   
dataset.push(e);
} 

const xScale = d3
.scaleLinear()
.domain([0, dataset.length])
.range([padding, w - padding]);
const yScale = d3
.scaleLinear()
.domain([d3.max(dataset,(d) => d[1]),  0 ])
.range([padding, h - padding]);

div1.text(xScale(0) + " " + yScale(0));
div2.text(dataset[3]);

 const svg = d3.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line
svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);
// Add your code below this line
svg.append("g")
.attr("transform", "translate(" + padding +  ",0)")
.call(yAxis)
// Add your code above this line

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 1);

  </script>
</body>
```

#### Chart2 rect
```
<body>
   <style>
.bar:hover {
   fill: #aaa;
}      
   </style>
   <div id="out"></div>
   <div id="out2"></div>
  <script>

const w = 300;
const h = 200;
const padding = 30; 

let div1 = d3.selectAll("div#out")  
.append("text")
.text("a") 
let div2 = d3.selectAll("div#out2")
.append("text")
.text("b")

let dataset = [];
for(let i = 0; i < 100; i++){
let e = [];
e.push(i);   
e.push(i);   
dataset.push(e);
} 

const xScale = 
d3.scaleLinear()
.domain([0, dataset.length])
.range([padding, w - padding]);
div1.text(dataset)
const yScale = 
d3.scaleLinear()
.domain([d3.max(dataset,(d) => d[1]),  0 ])
.range([padding, h - padding]);

const hScale = d3
.scaleLinear()
.domain([0, d3.max(dataset,(d) => d[1])])
.range([0, h - padding * 2]);


 const svg = d3.select(".visHolder")
.append("svg")
.attr("width", w)
.attr("height", h);

// Add your code below this line
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);
svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);
svg.append("g")
.attr("transform", "translate(" + padding +  ",0)")
.call(yAxis)
// Add your code above this line
rectWidth = (w-2*padding)/dataset.length
svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", (d) => xScale(d[0]))
.attr("y",(d) => yScale(d[1]))
.attr("width", rectWidth)
.attr("height", (d) => hScale(d[1]))
.attr("fill", "blue")
.attr("stroke", "white")
.attr('class', 'bar')
.append('title')
.text((d)=>d[1])


div1.text("function");
div2.text("x=y");

  </script>
</body>
```



#### 3.1. Visualize Data with a Bar Chart


#### Html
- div.main
  - div.container
    - div#title
    - div.visHolder


##### Begin
- 800x400
- url  
  https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
- data
  d3.json(url,(data) => {
  data.data -> dataset 
  });   
##### tooltip
- в класс visHolder добавляю div id tooltip style opacity 0.5 
- text 145 для проверки
- css style visHolder margin-top:3em;
- делаю переменную rects выбираю все по классу bar 
- два обработчика on (d,i)
  mouseover
  mouseout
- где меняю у tooltip style opacity  
- записываю в tooltip text dataset[i] 
- позиционирование tooltip
  style left i*barWidth 
  style top h
##### x scale

- .attr("x", (d, i) => xScale(yearsDate[i])) 
 
  var yearsDate = data.data.map(function(item) {
    return new Date(item[0]);
  });

  var xMax = new Date(d3.max(yearsDate));
  xMax.setMonth(xMax.getMonth() + 3);
  var xScale = d3.scaleTime()
    .domain([d3.min(yearsDate), xMax])
    .range([0, width]);
  
##### y scale
 - const yScale = d3
.scaleLinear()
.domain([d3.max(dataset,(d) => d[1]),  0 ])
.range([padding, h - padding]);


let scaledGDP = dataset.map(function(item) {
  return yScale(item[1]); 
});	






- 3.1. My chart should have a title with a corresponding id="title".
- 3.2. My chart should have a g element x-axis with a corresponding id="x-axis".
- 3.3. My chart should have a g element y-axis with a corresponding id="y-axis".
- 3.4. Both axes should contain multiple tick labels, each with the corresponding class="tick".
- 3.5. My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.
- 3.6. Each bar should have the properties data-date and data-gdp containing date and GDP values.
- 3.7. The bar elements' data-date properties should match the order of the provided data.
- 3.8. The bar elements' data-gdp properties should match the order of the provided data.
- 3.9. Each bar element's height should accurately represent the data's corresponding GDP.
- 3.10. The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.
- 3.11. The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.
- 3.12. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
- 3.13. My tooltip should have a data-date property that corresponds to the data-date of the active area.

#### 3.2. Visualize Data with a Scatterplot Graph








- 3.1. I can see a title element that has a corresponding id="title".
- 3.2. I can see an x-axis that has a corresponding id="x-axis".
- 3.3. I can see a y-axis that has a corresponding id="y-axis".
- 3.4. I can see dots, that each have a class of dot, which represent the data being plotted.
- 3.5. Each dot should have the properties data-xvalue and data-yvalue containing their corresponding x and y values.
- 3.6. The data-xvalue and data-yvalue of each dot should be within the range of the actual data and in the correct data format. For data-xvalue, integers (full years) or Date objects are acceptable for test evaluation. For data-yvalue (minutes), use Date objects.
- 3.7. The data-xvalue and its corresponding dot should align with the corresponding point/value on the x-axis.
- 3.8. The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.
- 3.9. I can see multiple tick labels on the y-axis with %M:%S time format.
- 3.10. I can see multiple tick labels on the x-axis that show the year.
- 3.11. I can see that the range of the x-axis labels are within the range of the actual x-axis data.
- 3.12. I can see that the range of the y-axis labels are within the range of the actual y-axis data.
- 3.13. I can see a legend containing descriptive text that has id="legend".
- 3.14. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
- 3.15. My tooltip should have a data-year property that corresponds to the data-xvalue of the active area.



#### 3.3. Visualize Data with a Heat Map




#### 3.4. Visualize Data with a Choropleth Map


```
Отрисовка и раскраска картограммы.

  svg.append("g")
  .attr("class", "region")
  .selectAll("path")
  .data(topojson.object(map, map.objects.russia).geometries)
  //.data(topojson.feature(map, map.objects.russia).features) <-- in case topojson.v1.js
  .enter().append("path")
  .attr("d", path)
  .style("fill", function(d) {
    return color(rateById[d.properties.region]); 
  })
  .style("opacity", 0.8)
 ```

#### rect
- .description display: none
- .title font-size: 1rem
- svg width 960, height 500=>560,200
- div1 fixed top 3em
- div2 fixed top 3em
- var svg
- svg append rect
#### map
- url URL_FILE
  https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json 
- url URL_MAP
  https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json
  
  
- var path = geoPath(); 
  
- d3.queue().defer(d3.json, URL_MAP).await(ready)
- ready(error, map)
- error throw error
- g selectAll path data topojson.feature(map, map.objects.counties).features
- enter append path
- attr("d", path)
- fill, stroke
- on mouseover fill
- d3.select(this).style("fill", d3.select(this).attr('stroke'))
          .attr('fill-opacity', 0.3);
##### class="county" that represent the data 
##### Получить education
- .defer(d3.json, URL_FILE)
- ready 3-й параметр education
- 
- 
	
##### 4.  4 different fill colors for the counties	
- принимает знаения от 2 до 80 и возваращает один из 8 цветов
```
var color = d3.scaleThreshold()
    .domain(d3.range(2.6, 75.1, (75.1-2.6)/8))
    .range(d3.schemeGreens[9]);
```  
- 
- 
```
      .attr("fill", function(d) { 
        var result = education.filter(function( obj ) {
          return obj.fips == d.id;
        });
        if(result[0]){
          return color(result[0].bachelorsOrHigher)
        }
        //could not find a matching fips id in the data
        return color(0)
       })
```
##### My counties should each have "data-fips" and "data-education" properties containing their corresponding fips and education values
```
.attr("data-fips", function(d) {
        return d.id
       })
      .attr("data-education", function(d) {
        var result = education.filter(function( obj ) {
          return obj.fips == d.id;
        });
        if(result[0]){
          return result[0].bachelorsOrHigher
        }
        //could not find a matching fips id in the data
        console.log('could find data for: ', d.id);
        return 0
       })

```
##### 8. My Choropleth should have a legend with a corresponding id="legend"
```
var x = d3.scaleLinear()
    .domain([2.6, 75.1])
    .rangeRound([600, 860]);


var g = svg.append("g")
    .attr("class", "key")
    .attr("id", "legend")
    .attr("transform", "translate(0,40)");

g.selectAll("rect")
  .data(color.range().map(function(d) {
      d = color.invertExtent(d);
      if (d[0] == null) d[0] = x.domain()[0];
      if (d[1] == null) d[1] = x.domain()[1];
      return d;
    }))
  .enter().append("rect")
    .attr("height", 8)
    .attr("x", function(d) { return x(d[0]); })
    .attr("width", function(d) { return x(d[1]) - x(d[0]); })
    .attr("fill", function(d) { return color(d[0]); });

g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")

g.call(d3.axisBottom(x)
    .tickSize(13)
    .tickFormat(function(x) { return Math.round(x) + '%' })
    .tickValues(color.domain()))
    .select(".domain")
    .remove();
```
##### TooltipTests
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area
```
// Define the div for the tooltip
var tooltip = body.append("div")
  .attr("class", "tooltip")
  .attr("id", "tooltip")
  .style("opacity", 0);

```

- margin: 5em;

- on over
```
      .on("mouseover", function(d) {      
        tooltip.style("opacity", .9); 
        tooltip.html(function() {
          var result = education.filter(function( obj ) {
            return obj.fips == d.id;
          });
          if(result[0]){
            return result[0]['area_name'] + ', ' + result[0]['state'] + ': ' + result[0].bachelorsOrHigher + '%'
          }
          //could not find a matching fips id in the data
          return 0
        })
      .attr("data-education", function() {
        var result = education.filter(function( obj ) {
          return obj.fips == d.id;
        });
        if(result[0]){
          return result[0].bachelorsOrHigher
        }
        //could not find a matching fips id in the data
        return 0
       })
          .style("left", (d3.event.pageX + 10) + "px") 
          .style("top", (d3.event.pageY - 28) + "px"); }) 
          .on("mouseout", function(d) { 
            tooltip.style("opacity", 0); 
          });
```

#### 3.5. Visualize Data with a Treemap Diagram







### 4. APIs and Microservices Projects



### 5. Information Security and Quality Assurance Projects





#### gmail api
```
525780894931-opdr9m7o5msv7m6mfq5rro2r6l4diusn.apps.googleusercontent.com

Yr8nk-c2fgmyaDmTdC-h1YIP
aaaaa
AIzaSyBbs5NJQg1In55W3Ezitcih8w031ihbVx0
aaaaaaa
You're all set!
You're ready to start developing!

https://developers.google.com/gmail/api/quickstart/js?hl=ru

https://developers.google.com/gmail/api/quickstart/js?hl=ru

https://github.com/gsuitedevs/browser-samples/blob/master/gmail/quickstart/index.html



```

```
<!DOCTYPE html>
<html>
  <head>
    <title>Gmail API Quickstart</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>Gmail API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>

    <script type="text/javascript">
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '<YOUR_CLIENT_ID>';
      var API_KEY = '<YOUR_API_KEY>';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          appendPre(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listLabels();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Print all Labels in the authorized user's inbox. If no labels
       * are found an appropriate message is printed.
       */
      function listLabels() {
        gapi.client.gmail.users.labels.list({
          'userId': 'me'
        }).then(function(response) {
          var labels = response.result.labels;
          appendPre('Labels:');

          if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
              var label = labels[i];
              appendPre(label.name)
            }
          } else {
            appendPre('No Labels found.');
          }
        });
      }

    </script>

    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
  </body>
</html>
```





[https://www.freecodecamp.org/learn/](https://www.freecodecamp.org/learn/)  
[Как пользоваться CodePen: подробное руководство для новичков](https://yandex.ru/turbo?text=https%3A%2F%2Fru.hexlet.io%2Fblog%2Fposts%2Fkak-polzovatsya-codepen-podrobnoe-rukovodstvo-dlya-novichkov)  
[Просто о D3.js](https://habr.com/ru/post/342106/)  
[Интерактивная SVG картограмма с помощью d3.js](https://habr.com/ru/post/181766/)  
[https://d3js.org/](https://d3js.org/)  
[counties.json](https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json)  
[Rotating globe with SVG and D3.js](https://codepen.io/gartempe/pen/onckm)  
[Спецификация формата GeoJSON](https://gis-lab.info/docs/geojson_ru.html)  
[wiki/GeoJSON](https://ru.wikipedia.org/wiki/GeoJSON)  
[Introduction](https://github.com/topojson/topojson/wiki/Introduction)  
[D3.js - Graphs](https://www.tutorialspoint.com/d3js/d3js_graphs.htm)  
[]()  
[]()  
[]()  

