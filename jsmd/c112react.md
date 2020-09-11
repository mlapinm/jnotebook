[Learn ReactJS: Part I](https://www.codecademy.com/learn/react-101)  

#### Your First React Component
LESSON
Learn how to create your first react component.

Exercises

#### 1. Hello World, Part II... THE COMPONENT  
import React from 'react'  
#### 2. Import React

#### 3. Import ReactDOM  
import React from 'react'  
import ReactDOM from 'react-dom'  
#### 4. Create a Component Class  
```
import React from 'react';
import ReactDOM from 'react-dom';

class x extends React.Component {

}
ReactDOM.render(
	x, 
	document.getElementById('app')
);
```
#### 5. Name a Component Class
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {

}
ReactDOM.render(
	MyComponentClass, 
	document.getElementById('app')
);
```
#### 6. Component Class Instructions
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
render(){
  return <h1>Hello world</h1>
}
}
ReactDOM.render(
	MyComponentClass, 
	document.getElementById('app')
);
```
#### 7. The Render Function
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(
<MyComponentClass />,
document.getElementById('app')  
);
```
#### 8. Create a Component Instance

9. Render A Component

#### Components and Advanced JSX
LESSON
Apply your knowledge of JSX to React components.

Exercises

#### 1. Use Multiline JSX in a Component
```
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render(){
    return (
   <blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="https://en.wikipedia.org/wiki/Susan_Sontag">
      Susan Sontag
    </a>
  </cite>
</blockquote>
      );
  }
}

ReactDOM.render(
<QuoteMaker />,
 document.getElementById('app')
);
```
#### 2. Use a Variable Attribute in a Component
```
import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render(){
    return (
    <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
    </div>
    );
  }
}
ReactDOM.render(
<Owl />,
  document.getElementById('app')
);
```
#### 3. Put Logic in a Render Function
```
import React from 'react';
import ReactDOM from 'react-dom';



const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component
{
  render(){
    const friend = friends[1];
    return(
    <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
       
    </div>
    );
  }
}
ReactDOM.render(
<Friend />,
  document.getElementById("app")
);
```
#### 4. Use a Conditional in a Render Function
```
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render(){
    let plan;
    if(fiftyFifty){
       
      plan = "Tonight I'm going out WOOO"
    }else{
      plan = "Tonight I'm going to bed WOOO"
    }
    return(
    <div>
        <h1>{plan}</h1>
      </div>
    );
  }
}
ReactDOM.render(
<TonightsPlan />,
  document.getElementById('app')
);
```
#### 5. Use this in a Component
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name(){
  return 'Michael';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
```
#### 6. Use an Event Listener in a Component
```
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}
ReactDOM.render(
<Button/>,
  document.getElementById('app')
);
```
#### 7. Components Recap

#### Components Render Other Components
LESSON
Learn how and why components render other components.

Exercises

1. Components Interact

2. A Component in a Render Function

3. Apply a Component in a Render Function
<NavBar />
4. Require A File  
import {NavBar} from './NavBar.js';  
5. export  
export class NavBar;  
6. Component Rendering In Action  


import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
ReactDOM.render(
<ProfilePage />,
  document.getElementById('app')
);

#### this.props
LESSON
Learn about one of the ways to store dynamic information in React: this.props.

Exercises

1. this.props

2. Access a Component's props
```
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
<PropsDisplayer />,
document.getElementById('app'));
```
3. Pass `props` to a Component
<PropsDisplayer  myProp="Hello"/>
4. Render a Component's props
```
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Michael' />, 
  document.getElementById('app')
);
```
5. Pass props From Component To Component
```
import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Michael"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

import React from 'react';


export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
```
6. Render Different UI Based on props  
<Greeting name="Alison" signedIn={false} />  
7. Put an Event Handler in a Component Class  
```
class Talker extends React.Component {
  render() {
    return <Button />;
  }
talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
```
8. Pass an Event Handler as a prop  
```
  render() {
    return <Button talk={this.talk} />;
  }
```
9. Receive an Event Handler as a prop  
```
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
```
10. handleEvent, onEvent, and this.props.onEvent
```
  render() {
    return <Button onClick={this.handleClick} />;
  }
  
      <button onClick={this.props.onClick}>
        Click me!
      </button>
  
```
11. this.props.children
```
<ul>{this.props.children}</ul>


    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
```
12. defaultProps
```
// defaultProps goes here:
Button.defaultProps = {text:'I am a button'};

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
```
13. this.props Recap

#### this.state
LESSON
Learn about the other way to store dynamic information in React: this.state.

Exercises

1. State

2. Setting Initial State

3. Access a Component's state

4. Update state with this.setState

5. Call this.setState from Another Function

6. this.setState Automatically Calls render

7. Components Interacting Recap

#### this.state
LESSON
Learn about the other way to store dynamic information in React: this.state.

Exercises

1. State

2. Setting Initial State
```
constructor(props){
  super(props);
  this.state = { title: 'Best App'}
}
```
3. Access a Component's state
```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props){
  super(props);
  this.state = { title: 'Best App'}
}
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(
<App />,
  document.getElementById('app')
);
```
4. Update state with this.setState

5. Call this.setState from Another Function
```
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {color:green};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    
    const newColor = this.state.color == yellow ? green : yellow;
    this.setState({color: newColor});
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
<button onClick={this.changeColor}>
  Change color
</button>
      </div>
    );
  }
}
ReactDOM.render(
<Toggle />,
  document.getElementById('app')
);
```
6. this.setState Automatically Calls render

7. Components Interacting Recap



import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
super(props);
this.state={color:'green'};    
  }
  changeColor(){
  if( this.state.color === 'green'){
    this.state.color='yellow';
  }else{
    this.state.color='green';
  }
  }
  render() {
    return (
      <div style ={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}
ReactDOM.render(
<Toggle />,
document.getElementById('app')  
);
















```python
s1='_|_|_|_|_|_'
s2='--|--|--|--|--|--'
s3='|||||'
s=s1+'\n'+s2+'\n'+s3 +'\n'+s3 +'\n'+s3
print(s)
```

    _|_|_|_|_|_
    --|--|--|--|--|--
    |||||
    |||||
    |||||
    

_|_|_|_|_|_
--|--|--|--|--|--
involves|включает в себя|adheres|придерживается|soon|вскоре
reason|причина|distinguish|различать|dozen|дюжина
however|однако|properly|должным образом|mood|настроение
|||||
|||||


25.02 42   
26.02 57-71  
07.03 85  


