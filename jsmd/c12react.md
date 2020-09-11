[Learn ReactJS: Part II](https://www.codecademy.com/learn/react-102)  
[]()  
[]()  


#### Stateless Components From Stateful Components
LESSON
Learn to pass props from a stateful component to a stateless component

Exercises

1. Stateless Components Inherit From Stateful Components

2. Build a Stateful Component Class

3. Build a Stateless Component Class

4. Pass a Component's State

5. Don't Update props

#### Stateless Components From Stateful Components
LESSON
Learn to pass props from a stateful component to a stateless component

Exercises

#### 1. Stateless Components Inherit From Stateful Components
```
import React from 'react'
import ReactDOM from 'react-dom'


class Parent extends React.Component{
constructor(props){
super(props);
  this.state = {name:'Frarthur'};
}
render() {
  return <div></div>;
}
}
```
#### 2. Build a Stateful Component Class
```
```
#### 3. Build a Stateless Component Class
```
import React from 'react';

export class Child extends React.Component{

render(){
	return <h1>Hey, my name is {this.props.name}!</h1>;
}
}
```
#### 4. Pass a Component's State
```
import React from 'react'
import ReactDOM from 'react-dom'
import {Child} from './Child';

class Parent extends React.Component{
constructor(props){
super(props);
  this.state = {name:'Frarthur'};
}
render() {
  return <Child name = {this.state.name} />;
}
}
ReactDOM.render(
<Parent />,
document.getElementById('app')
);
```
#### 5. Don't Update props
```
```

#### Child Components Update Their Parents' state
LESSON
Learn how to make a child component update its parent.

Exercises

1. Child Components Update Their Parents' state

2. Define an Event Handler

3. Pass the Event Handler

4. Receive the Event Handler

5. Automatic Binding

#### Child Components Update Their Parents' state
LESSON
Learn how to make a child component update its parent.

Exercises
#### 1. Child Components Update Their Parents' state
```
```


#### Step1.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
```

#### Step2.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
```

#### Step3.js
```
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
```

Child Components Update Their Parents' state
In the last lesson, you passed information from a stateful, parent component to a stateless, child component.

In this lesson, you’ll be expanding on that pattern. The stateless, child component will update the state of the parent component.

Here’s how that works:

1

The parent component class defines a method that calls this.setState().

For an example, look in Step1.js at the .handleClick() method.

2

The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

For an example, look in Step2.js at the end of the constructor() method.

3

Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

Look in Step2.js, at the prop on line 28.

4

The child receives the passed-down function, and uses it as an event handler.

Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent’s state.

Click through the three files in order, and try to follow their chronology. Whenever you’re ready, click Next and we’ll build an example!



#### 2. Define an Event Handler
```
changeName(newName) {
  this.setState({
    name: newName
  });
}
```
#### 3. Pass the Event Handler
```
this.changeName = this.changeName.bind(this);


  render() {
    return <Child name={this.state.name} onChange = {this.changeName}/>
  }
```
#### 4. Receive the Event Handler
```
```
#### 5. Automatic Binding
```
```

#### Parent.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange = {this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
```

#### Child.js
```
import React from 'react';

export class Child extends React.Component {
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
```

#### Child Components Update Their Siblings' props
LESSON
Learn the final piece of the pattern: a child component updates the props of its sibling.

Exercises

1. Child Components Update Sibling Components

2. One Sibling to Display, Another to Change

3. Pass the Right props to the Right Siblings

4. Display Information in a Sibling Component

5. Stateless Components Inherit From 

#### Child Components Update Their Siblings' props
LESSON
Learn the final piece of the pattern: a child component updates the props of its sibling.

Exercises

#### 1. Child Components Update Sibling Components
```
```
#### 2. One Sibling to Display, Another to Change
```
```
#### 3. Pass the Right props to the Right Siblings
```
```
#### 4. Display Information in a Sibling Component
```
  render() {
let name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
```
#### 5. Stateless Components Inherit From 
```
```

#### Style
LESSON
Learn simple styling in React.

Exercises

1. Advanced React Techniques

2. Inline Styles

3. Make A Style Object Variable

4. Style Name Syntax

5. Style Value Syntax

6. Share Styles Across Multiple Components

#### Style
LESSON
Learn simple styling in React.

Exercises

#### 1. Advanced React Techniques
```
```
#### 2. Inline Styles
```
const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;
```
#### 3. Make A Style Object Variable
```
const styles = {background: 'lightblue', color: 'darkred'}
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
```
#### 4. Style Name Syntax
```
const styles = {background: 'lightblue', color: 'darkred',
marginTop:'100px', fontSize: '50px'}
```
#### 5. Style Value Syntax
```
const styles = {background: 'lightblue', color: 'darkred',
marginTop:100, fontSize: 50}
```
#### 6. Share Styles Across Multiple Components
```
```

#### Container Components From Presentational Components
LESSON
Learn your second programming pattern: separating presentational components from display components.

Exercises

1. Separate Container Components From Presentational Components: Explanation

2. Separate Container Components From

#### Container Components From Presentational Components
LESSON
Learn your second programming pattern: separating presentational components from display components.

Exercises

#### 1. Separate Container Components From Presentational Components: Explanation
```
```
#### 2. Separate Container Components From
```
```

```
import React from 'react';
import ReactDOM from 'react-dom';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

ReactDOM.render(
  <GuineaPigs />,
  document.getElementById('app')
);
```

#### components
```
import React from 'react';


const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component {

  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
```

#### container
```
import React from 'react';
import ReactDOM from 'react-dom';
import {GuineaPigs} from '../components/GuineaPigs';
const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <GuineaPigs src={src} />
    );
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);
```

#### Stateless Functional Components
LESSON
Learn to write components as functions in React.

Exercises

1. Stateless Functional Components

2. Stateless Functional Components and Props

#### Stateless Functional Components
LESSON
Learn to write components as functions in React.

Exercises

#### 1. Stateless Functional Components
```
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}
```
#### 2. Stateless Functional Components and Props
```
// Normal way to display a prop:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}
```

#### PropTypes
LESSON
Learn to use propTypes to validate props and provide documentation.

Exercises

1. propTypes

2. Apply PropTypes

3. Add Properties to PropTypes

4. PropTypes in Stateless Functional Co

#### PropTypes
LESSON
Learn to use propTypes to validate props and provide documentation.

Exercises

#### 1. propTypes
```
```
#### 2. Apply PropTypes
```
BestSeller.propTypes = {};
```
#### 3. Add Properties to PropTypes
```
```
#### 4. PropTypes in Stateless Functional Co
```
GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired,
}
```

#### React Forms
LESSON
Learn to use forms in React.

Exercises

1. React Forms

2. Input onChange

3. Write an Input Event Handler

4. Set the Input's Initial State

5. Update an Input's Value

6. Controlled vs Uncontrolled

7. React Forms Recap

#### React Forms
LESSON
Learn to use forms in React.

Exercises

#### 1. React Forms
```
```
#### 2. Input onChange
```
<input type="text" onChange={this.handleUserInput}/>
```
#### 3. Write an Input Event Handler
```
  handleUserInput(e){
    this.setState({userInput: e.target.value});
  }
```
#### 4. Set the Input's Initial State
```
constructor(props){
  super(props);
  this.state={userInput: ''};
		this.handleUserInput = this.handleUserInput.bind(this);}  
```
#### 5. Update an Input's Value
```
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
        <h1>{this.state.userInput}</h1>
```
#### 6. Controlled vs Uncontrolled
```
```
#### 7. React Forms Recap

#### Input
```
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
constructor(props){
  super(props);
  this.state={userInput: ''};
		this.handleUserInput = this.handleUserInput.bind(this);}  
  handleUserInput(e){
    this.setState({userInput: e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
```

#### Mounting Lifecycle Methods
LESSON
Learn about lifecycle methods that occur when a component first mounts to the DOM.

Exercises

1. What's a Lifecycle Method?

2. Mounting Lifecycle Methods

3. componentWillMount

4. render

5. componentDidMount

#### Mounting Lifecycle Methods
LESSON
Learn about lifecycle methods that occur when a component first mounts to the DOM.

Exercises

#### 1. What's a Lifecycle Method?
```
Lifecycle methods are methods that get called at certain moments in a component’s life.
```
#### 2. Mounting Lifecycle Methods
```
There are three categories of lifecycle methods: mounting, updating, and unmounting.
```
#### 3. componentWillMount
```
componentWillMount() {
  	alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');   
 } 
```
#### 4. render
```
```
#### 5. componentDidMount
```
componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');  
}
```

```
import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');  
}
  render() {

    alert('Flashy is rendering!');



    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);
```

#### Updating/Unmounting Lifecycle Methods
LESSON
Learn about lifecycle methods that occur when a component updates or unmounts from the DOM.

Exercises

1. Updating Lifecycle Methods

2. componentWillReceiveProps

3. shouldComponentUpdate

4. componentWillUpdate

5. componentDidUpdate

6. componentWillUnmount

7. Lifecycle Methods Recap


#### Updating/Unmounting Lifecycle Methods
LESSON
Learn about lifecycle methods that occur when a component updates or unmounts from the DOM.

Exercises

#### 1. Updating Lifecycle Methods
```
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
```
#### 2. componentWillReceiveProps
```
componentWillReceiveProps(nextProps){
  if (nextProps.number > this.state.highest) {
this.setState({
  highest: nextProps.number
});
}
}
```
#### 3. shouldComponentUpdate
```
shouldComponentUpdate(nextProps, nextState){
return this.props.number != nextProps.number;  
}   
```
#### 4. componentWillUpdate
```
componentWillUpdate(nextProps, nextState){
if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
}}   
```
#### 5. componentDidUpdate
```
componentDidUpdate(prevProps, prevState){
if (this.state.latestClick < prevState.latestClick) {
  this.endGame();
}
} 
```
#### 6. componentWillUnmount
```
```
#### 7. Lifecycle Methods Recap


```
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }
componentDidUpdate(prevProps, prevState){
if (this.state.latestClick < prevState.latestClick) {
  this.endGame();
}
} 
  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
```

#### Enthused.js
```
import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }
componentWillUnmount(prevProps, prevState) {
  clearInterval(this.interval);
}
  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}
```

HTML  
CSS  
JavaScript  
React







10.03 - 10  
12.03 - 20-30  
13.03 - 40-50-60-  
14.03 - 70-80    
15.03 - 90-

_|_|_|_|_|_
--|--|--|--|--|--
reuse|повторно|Notice|объявление|deduce|сделать вывод
guess|догадка|certain|определенные|WITNESS|свидетель
|||||
|||||


[ru.reactjs.org](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)  
[Creating a React App](https://www.codecademy.com/articles/how-to-create-a-react-app)  

