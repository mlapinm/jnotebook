[Learn ReactJS: Part I](https://www.codecademy.com/learn/react-101)  

#### Intro to JSX
LESSON
An introduction to JSX fundamentals.

Exercises

1. Why React?

2. Hello World  
const h1 = <h1>Hello world</h1>;  
3. The Mystery, Revealed

4. What is JSX?

5. JSX Elements 
<p>Hello World</p>  
6. JSX Elements And Their Surroundings  
const myArticle = <article> </article>;  
7. Attributes In JSX  
const p1 = <p id="large">foo</p>;  
const p2 = <p id="small">bar</p>;  
8. Nested JSX
```
const myDiv = (
<div>
  <h1>
    Hello World
  </h1>
  </div>
)
```
9. JSX Outer Elements
```
const blog = (
  <div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
  </article>
    </div>
);
```


10. Rendering JSX



```python
%%html
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello World</h1>,
document.getElementById('app'));

```


```python
11. ReactDOM.render() I
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>Render me!</h1>, document.getElementById('app'));
```

```

12. ReactDOM.render() II
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
```
13. Passing a Variable to ReactDOM.render()
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
<ul>
  <li>Learn React</li>
  <li>Become a Developer</li>
  </ul>
);
ReactDOM.render(
myList,
document.getElementById("app"));
```
14. The Virtual DOM

15. JSX Recap

#### Advanced JSX
LESSON
Learn more about JSX!

Exercises

1. class vs className
```
// Write code here:
const myDiv = (
<div className="big">
  I AM A BIG DIV
  </div>
);
ReactDOM.render(
myDiv,
document.getElementById('app')
);
```
2. Self-Closing Tags
```
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br/>
      JENKINS IS MY NAME
      <br/>
      THANKS HA LOT
    </article>
  </div>
);
```
3. JavaScript In Your JSX In Your JavaScript
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
<h1>2 + 3</h1>,
document.getElementById('app')
);
```
4. Curly Braces in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
<h1>{2 + 3}</h1>,
document.getElementById('app')
);
```
5. 20 Digits of Pi in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = (
<h1> 2 + 3 = {2 + 3}; {Math.PI.toFixed(3)}</h1>
);

ReactDOM.render(
math,
document.getElementById('app'));
```
6. Variables in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
```
7. Variable Attributes in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
<img src = {goose} />
);
ReactDOM.render(
gooseImg,
document.getElementById('app')
);
```
8. Event Listeners in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
onClick = {makeDoggy}		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, 
document.getElementById('app'));
```
9. JSX Conditionals: If Statements That Don't Work

10. JSX Conditionals: If Statements That Do Work
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;
if (coinToss() === 'heads'){
  img = <img src={pics.kitty} />}else{
  img = <img src={pics.doggy} />
}        
// img = <img src={pics.doggy} />;
ReactDOM.render(
img,
document.getElementById('app'));
```
11. JSX Conditionals: The Ternary Operator
```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);
```
12. JSX Conditionals: &&
```
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
```
13. .map in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleLis}</ul>,
  document.getElementById('app'));
```
14. Keys
```
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
<li key={'person_'+i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleLis}</ul>,
  document.getElementById('app'));
```
15. React.createElement
```
const greatestDivEver = <div>i am div</div>;

const greatestDivEver = React.createElement(
"div",null,"i am div");
```
16. JSX Recap

#### Your First React Component
LESSON
Learn how to create your first react component.

Exercises

1. Hello World, Part II... THE COMPONENT
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
2. Import React

3. Import ReactDOM

4. Create a Component Class

5. Name a Component Class

6. Component Class Instructions

7. The Render Function

8. Create a Component Instance

9. Render A Component











[JavaScript.ru](https://www.youtube.com/watch?v=ol4OVMJZC1w&list=PLDyvV36pndZEz2unvD0a2Spv7RehBrpDO) 
[]()  
[]()  
[]()  
24.02 0-14-28  

