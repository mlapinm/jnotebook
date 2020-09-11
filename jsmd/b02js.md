```javascript
%%javascript
//Замыкания
function createCalcFunction(n){
    return function(){
        return n*1000;
    }
}
const calc = createCalcFunction(42)
element.text(calc())
//element.text(calc)
// element.text(createCalcFunction(42)())

```


    <IPython.core.display.Javascript object>


[Introduction to JavaScript](#Introduction-to-JavaScript)  
[](#)  



```javascript
%%javascript
var s = " "
var x = '5'
s+=typeof(x)
s+=' '+x+' '
x *=1
s+=typeof(x)
s+=' '+x+' '
x = parseInt('5.3')
s+=' '+x+' '

s += "x = '5'*1 "
s += typeof(x)
element.text(s)
```


    <IPython.core.display.Javascript object>



```javascript
%%javascript
var o = {0:'Guest', 1:0, 2:false}
var s = ''
for(var i=0;i in o; i++){
s += i + ": " + o[i] + '; '
}
element.text(s)
```


    <IPython.core.display.Javascript object>



```javascript
%%javascript
function f(){
    var s = ''
    for(var p in navigator){
        s += " " + p + " --- " + navigator[p] + " -|- "
    }
    element.text(s)
}
// f()
```


    <IPython.core.display.Javascript object>


[Regular Expressions: Using the Test Method](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method)  



```javascript
%%javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
element.text(result)
```


    <IPython.core.display.Javascript object>


[Топ 5 сайтов для изучения JavaScript](https://www.youtube.com/watch?v=PsWIKvBeQ4k&list=PLVfMKQXDAhGUaEtJ_fOUz0F7TJtidE7Qw&index=39)  
[www.freecodecamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method)  
[www.codecademy.com](https://www.codecademy.com/courses/learn-html/lessons/intro-to-html/exercises/intro?action=resume_content_item)  
[www.codecademy.com](https://www.codecademy.com/courses/introduction-to-javascript/lessons/introduction-to-javascript/exercises/math-operators)  
[]()  
[]()  
[]()  
[]()  
[]()  
[developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  


### Introduction to JavaScript
[Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)  

#### Arithmetic Operators

1.Inside of a console.log(), add 3.5 to your age.
This is the age you’ll be when we start sending people to live on Mars.
console.log(50+3.5)  
53.5  


2.On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.  
The answer is how many years it’s been since the 1969 moon landing.  


3.Create another console.log(). Inside the parentheses divide 65 by 240.

4.Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.

That’s the percent of the sun that is made up of helium. Assuming we could stand on the sun, we’d all sound like chipmunks!

INTRODUCTION TO JAVASCRIPT
#### String Concatenation

1.Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.

Note: You should concatenate the two strings exactly (without introducing any additional characters).


2.We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.

INTRODUCTION TO JAVASCRIPT
#### Properties

1.Use the .length property to log the number of characters in the following string to the console:

'Teaching the world how to code'  
console.log('Teaching the world how to code'.length)

INTRODUCTION TO JAVASCRIPT
#### Methods

2.In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.




// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');



INTRODUCTION TO JAVASCRIPT
#### Built-in Objects

1.Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.

console.log(Math.random()*100)

2.Now, use Math.floor() to make the output a whole number.

Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor().

3.Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.

[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)  


Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.

```
console.log(Math.random()*100)
console.log(Math.floor(Math.random()*100))
console.log(Math.floor(43.8))
console.log(Math.ceil(43.8))
console.log(Math.round(43.8))
console.log(Number.isInteger(2017))
```

1.
Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.

2.
Declare a variable named numOfSlices using the var keyword and assign to it the number 8.

3.
Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.

On the following line, use console.log() to print the value saved to numOfSlices.

```
var favoriteFood = 'pizza'
var numOfSlices = 8
console.log(favoriteFood)
console.log(numOfSlices)
```

#### Create a Variable: let
1.
Create a let variable called `changeMe` and set it equal to the boolean `true`.

2.
On the line after changeMe is declared, set the value of `changeMe` to be the boolean `false`.

To check if `changeMe` was reassigned, log the value saved to `changeMe` to the console.

```
let changeMe = true
changeMe = false
if(!changeMe){
  console.log(changeMe)
}```

#### Create a Variable: const

1.
Create a constant variable named `entree` and set it to equal to the string 'Enchiladas'.

2.
Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.

3.
Great, let’s see what happens if you try to reassign a constant variable.

Paste the following code to the bottom of your program.

entree = 'Tacos'
This code throws the following error when you run your code:

TypeError: Assignment to constant variable.
After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!

```
const entree = 'Enchiladas'
if(entree == 'Enchiladas'){
  console.log(entree)
}
entree = 'Tacos'
```

#### Mathematical Assignment Operators
1.
Use the += mathematical assignment operator to increase the value stored in `levelUp` by 5.

2.
Use the -= mathematical assignment operator to decrease the value stored in `powerLevel` by 100.

3.
Use the *= mathematical assignment operator to multiply the value stored in `multiplyMe` by 11.

4.
Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

```
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:


levelUp += 5
powerLevel -= 100
multiplyMe *= 11
quarterMe /=4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
```

#### The Increment and Decrement Operator
1.
Using the increment operator, increase the value of gainedDollar.

2.
Using the decrement operator, decrease the value of lostDollar.

```
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
--lostDollar;
```

#### String Concatenation with Variables
1.
Create a variable named favoriteAnimal and set it equal to your favorite animal.

2.
Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.

```
var favoriteAnimal = 'rabbit'
console.log('My favorite animal: ' + favoriteAnimal);
console.log(`My favorite animal: ${favoriteAnimal}`)
```


```javascript
%%javascript
var name1 = "Alex";
var str1 = 
  `Привет, ${name1}`;

element.text(str1)
```


    <IPython.core.display.Javascript object>



```javascript
%%javascript
var fa = "rabbit";
var str='My favorite animal: ${fa}';

element.text(str)
```


    <IPython.core.display.Javascript object>


#### String Interpolation
1.
Create a variable called myName and assign it your name.

2.
Create a variable called myCity and assign it your favorite city’s name.

3.
Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

My name is NAME. My favorite city is CITY.
Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.

```
var myName = "Michael"
var myCity = "London"
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
```

#### typeof operator
1.
Use console.log() to print the typeof newVariable.

2.
Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.

```
let newVariable = 'Playing around with typeof.';
console.log(typeof(newVariable))
newVariable = 1
console.log(typeof(newVariable))
```

#### The if keyword
1.
Using the let keyword, declare a variable named sale. Assign the value true to it.

2.
Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.

3.
Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.

Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.

```
let sale = true
// sale = false
if(sale){
  console.log('Time to buy!')
}
```

#### If...Else Statements
1.
Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'


#### Comparison Operators
1.
Using let, create a variable named `hungerLevel` and set it equal to `7`.

2.
Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.

```
let hungerLevel = 7

if(hungerLevel>7){
  console.log("Time to eat!")
}else{
  console.log("We can eat later!")
}```

#### Logical Operators
1.
In main.js there are two variables `mood` and `tirednessLevel`.

Let’s create an if...else statement that checks if `mood` is 'sleepy' and tirednessLevel is greater than 8.

If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.

After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?



if(mood =='leepy' && terednessLevel>8){
    conslole.log('time to sleep')
}

#### Truthy and Falsy
1.
Change the value of wordCount so that it is truthy. This value should still be a number.

After you make this change and run your code, 'Great! You've started your work!' should log to the console.

2.
Change the value of favoritePhrase so that it is still a string but falsy.

After you make this change and run your code, 'This string is definitely empty.' should log to the console.

```
let wordCount = 0;
wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';
favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
```

#### Truthy and Falsy Assignment

Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.

Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.

2.
Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.

What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

```
let tool = '';
tool = 'marker'
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
```

#### Ternary Operator
1.
Refactor, or edit, the first if...else block to use a ternary operator.

2.
Refactor the second if...else block to use a ternary operator.

3.
Refactor the third if...else block to use a ternary operator.


```javascript
%%javascript
let isLocked = false;
if (isLocked) {
  element.text('You will need a key to open the door.');
} else {
  element.text('You will not need a key to open the door.');
}
```


    <IPython.core.display.Javascript object>



```javascript
%%javascript
let isLocked = false;
if (isLocked) {
  element.text('You will need a key to open the door.');
} else {
  element.text('You will not need a key to open the door.');
}
let s = isLocked ? 'You will need a key to open the door.' : 'You will not need a key to open the door.'
element.text(s)
```


    <IPython.core.display.Javascript object>


#### Else If Statements
1.
Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen!

In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'.

Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'.

2.
Add another else if statement that checks if season is equal to 'fall'.

Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.

```
let season = 'summer';
season = 'winter'
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter'){
 console.log('It\'s winter! Everything is covered in snow.') 
}else if(season === 'fall'){
 console.log('It\'s fall! Leaves are falling!') 
}else if(season === 'summer'){
 console.log('It\'s sunny and warm because it\'s summer!') 
}else {
  console.log('Invalid season.');
}
```

#### The switch keyword
1.
Let’s write a switch statement to decide what medal to award an athlete.

`athleteFinalPosition` is already defined at the top of main.js. So start by writing a switch statement with `athleteFinalPosition` as its expression.

2.
Inside the switch statement, add three cases:

The first case checks for the value 'first place'
If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!'
The second case checks for the value 'second place'
If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'
The third case checks for the value 'third place'
If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'
Remember to add a break after each console.log().


```javascript
%%javascript
function consolelog(s){element.text(s)}
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
   case 'first place':
       consolelog('You get the gold medal!')
   break;
   case 'second place':
       consolelog('You get the silver medal!')
   break;
   case 'third place':
       consolelog('You get the bronze medal!')
   break;
}
```


    <IPython.core.display.Javascript object>


#### Function Declarations
1.
Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().

```
function getReminder(){
  console.log('Water the plants.')
}
function greetInSpanish(){
  console.log('Buenas Tardes.')
}
```

#### Calling a Function
1.
Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:

Define a function called `sayThanks()` as a function declaration.
In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'
2.
Call sayThanks() to view the thank you message in the console.

3.
Functions can be called as many times as you need them.

Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times.


```javascript
%%javascript
function sayThanks(){
   console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks()
sayThanks()
sayThanks()

```


    <IPython.core.display.Javascript object>


#### Parameters and Arguments
1.
The sayThanks() function works well, but let’s add the customer’s name in the message.

Add a parameter called name to the function declaration for sayThanks().

2.
With name as a parameter, it can be used as a variable in the function body of sayThanks().

Using name and string concatenation, change the thank you message into the following:

'Thank you for your purchase '+ name + '! We appreciate your business.'
Copy and paste the above message into your code.

3.
A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.


```javascript
%%javascript
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');
```

#### Default Parameters
1.
The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().

Change the parameters of makeShoppingList() into default parameters :

Assign ‘milk’ as the default value of item1.
Assign ‘bread’ as the default value of item2.
Assign ‘eggs’ as the default value of item3.


```python
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
```

#### Return
1.
Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!

Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.

2.
Let’s compute the number of monitors by multiplying rows and columns and then returning the value.

In the function body of the function you just wrote, use the return keyword to return rows * columns.

3.
Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.

Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.

4.
To check that the function worked properly, log numOfMonitors to the console.


```javascript
%%javascript
function monitorCount(rows,columns){
    return rows*columns;
}

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
```


    <IPython.core.display.Javascript object>


#### Helper Functions
1.
In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.

Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.

2.
Time to add some code to the function body of costOfMonitors to calculate the total cost.

Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

3.
We should save the cost to a variable.

Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

4.
To check that the function worked properly, log totalCost to the console.




```javascript
%%javascript
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns)*200;
}
const totalCost = costOfMonitors(4,5)
element.text(totalCost)
```


    <IPython.core.display.Javascript object>


#### Function Expressions
1.
Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:

Create a variable named plantNeedsWater using the const variable keyword.
Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
2.
Now we need to add some code to the function body of plantNeedsWater():

In the function body add an if conditional that checks day === 'Wednesday'.
If the conditional is truthy, inside the if code block, use the return keyword to return true.
3.
On days that aren’t 'Wednesday', plantNeedsWater() should return false:

Add an else statement after the if statement.
Inside the else statement use the return keyword to return false.
4.
Call the plantNeedsWater() and pass in 'Tuesday' as an argument.

5.
Let’s check that plantNeedsWater() returned the expected value.

Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.


```javascript
%%javascript
const plantNeedsWater = function plantNeedsWater (day){
    if(day === 'Wednesday'){
        return true;
    }else{
        return false;
    }
}
 plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))
```


    <IPython.core.display.Javascript object>


%%javascript
#### Arrow Functions
1.
Change plantNeedsWater() to use arrow function syntax.


```python
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```


```python
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```

#### Concise Body Arrow Functions
Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.


```python
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
```

#### Concise Body Arrow Functions
1.
Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.


```python
const plantNeedsWater = day =>  day === 'Wednesday' ? true : false;
```

#### Scope

1.
At the top of main.js, declare a const variable, named `city` set equal to 'New York City'. This variable will exist outside of the block.

2.
Below the city variable, write a function named logCitySkyline.

3.
Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.


```python
const city = "New York City"
function logCitySkyline(){
 let skyscraper = 'Empire State Building';

  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

```

#### Global Scope
1.
At the top of main.js, write three global variables:

Name the first variable satellite and set it equal to 'The Moon'.
Name the second variable galaxy and set it equal to 'The Milky Way'.
Name the third variable stars and set it equal to 'North Star'.
2.
Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;


```python
var satellite  = 'The Moon'
var galaxy  = 'The Milky Way'
var stars  = 'North Star'
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

```

#### Block Scope


```python
function logVisibleLightWaves(){
 const lightWaves = 'Moonlight' 
 console.log(lightWaves)
 }
logVisibleLightWaves();
 console.log(lightWaves)

```

#### Scope Pollution
1.
Let’s see what happens if we create a variable that overwrites a global variable.

Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:

stars = 'Sirius';
2.
Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.

You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.




```python
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)
```

#### Practice Good Scoping

Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.  
Учитывая проблемы, связанные с глобальными переменными и загрязнением области, мы должны следовать лучшим практикам для определения области ваших переменных как можно более плотно, используя область блока.  


```python
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
  console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
```

#### Arrays


```python
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);
```

#### Create an Array


```python
const hobbies = ['fs','rollers','language']
console.log(hobbies)
```

#### Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2])
console.log(famousSayings[3])

#### Update Elements


```python
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'

```

#### Arrays with let and const


```python
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3]='Spoon';
console.log(utensils)
condiments=['Mayo']
condiments[0]='Mayo'
console.log(condiments)
```

#### The .length property



#### The .push() Method


```python
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('vacuum','tidy up')
console.log(chores)
```

#### The .pop() Method


```python
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores)
```

#### More Array Methods


```python
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
groceryList.unshift('popcorn')
console.log(groceryList)
console.log(groceryList.slice(1,4))
console.log(groceryList)
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
```

#### Arrays and Functions



#### Nested Arrays


```python
var numberClusters=[
  [1,2],[3,4],[5,6]
]
const target = numberClusters[2][1]
```

#### Loops
#### Repeating Tasks Manually


```javascript
%%javascript
// Write your code below
var vacationSpots =[
  'London','Moscow',"Greece"
]
var s = ''
vacationSpots.forEach(function(i){
  s+=i+' '
})
element.text(s)
```


    <IPython.core.display.Javascript object>



```python
// Write your code below
var vacationSpots =[
  'London','Moscow',"Greece"
]
console.log(vacationSpots[0])
console.log(vacationSpots[1])

console.log(vacationSpots[2])
for(var i=0;i<3;i++){
console.log(vacationSpots[i])
}
```

#### The For Loop
1.
Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.




```python
// Write your code below
for(let i=5;i<11;i++){
  console.log(i)
}
```

#### Looping in Reverse


```python
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
```

#### Looping through Arrays


```python
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i=0;i<vacationSpots.length;i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}
```

#### Nested Loops



```python
// Write your code below
let bobsFollowers=['John','Michael','Peter','Vasya',] 
let tinasFollowers=['Zina','Peter','Vasya']
mutualFollowers = []
for(let i = 0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
```

#### The While Loop


```python
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below
while(currentCard!=='spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
```


```javascript
%%javascript
element.text(Math.floor(Math.random() * 4))
```


    <IPython.core.display.Javascript object>


#### Do...While Statements


```python
// Write your code below
let cupsOfSugarNeeded=3
let cupsAdded=0
do{
  cupsAdded++;
} while (cupsAdded<cupsOfSugarNeeded)

```

#### The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i=0;i<rapperArray.length;i++){
  console.log(rapperArray[i])
  if(rapperArray[i]==='Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don\'t know, now you know.")


#### Functions as Data


```python
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2()
console.log(is2p2.name)
```

#### Functions as Parameters


```javascript
%%javascript
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
function checkConsistentOutput(f,a){
  let b =   f(a);
  let c =   f(a);
  if(b==c)
    return b
  else
   return 'This function returned inconsistent results'
}
checkConsistentOutput(addTwo,4)

```


    <IPython.core.display.Javascript object>


Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'

Напишите функцию более высокого порядка, проверьте согласованность вывода(). Эта функция должна иметь два параметра: функцию и значение. Он должен вызывать функцию аргумента со значением два раза. Если функция обратного вызова дважды выдает один и тот же результат, она должна вернуть результат вызова функции, в противном случае она должна вернуть строку "эта функция вернула несогласованные результаты".

#### Introduction to Iterators

.forEach()
.map()
.filter()


```python
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (i){
  console.log('I want to eat a ' + i)
});
```

#### The .map() Method


```python
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(function(animal){
  return animal[0];
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(function(number){
  return number/100;
  
})
```

#### The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(function(number){
  return number<250
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(function(word){ 
  return word.length>7
  
})


#### The .findIndex() Method


```javascript
%%javascript
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
element.text(lessThanTen)
```


    <IPython.core.display.Javascript object>



```python
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(function(animal){
  return animal==='elephant'
})
const startsWithS =
animals.findIndex(function(animal){
  return animal[0]==='s'
})
```

#### The .reduce() Method

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,currentValue){
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return  accumulator + currentValue;
},10)
console.log(newSum)

#### Iterator Documentation


```python
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(function(word){
  return word.length>5
})
// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length>5 } ));

```

#### Choose the Right Iterator


```python
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?')
                   );

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
   return acc + currVal[0]
 }, "C");

 console.log(word)

 // Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

```

#### Creating Object Literals


```python
// Write your fasterShip object literal below
let fasterShip  = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};
```

#### Accessing Properties


```python
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew 
let planetArray = spaceship.flightPath 
```

#### Bracket Notation


```python
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission']
console.log(spaceship['Active Mission'])
```

#### Property Assignment


```python
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold'
spaceship.numEngines = 3
delete spaceship['Secret Mission']
```

#### Methods


```python
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip={
  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat()
alienShip.takeOff()
```

#### Nested Objects


```python
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew.captain['favorite foods'][0]
spaceship.passengers = [{name:'Michael'}]
let firstPassenger = spaceship.passengers[0]
```

#### Pass By Reference


```python
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj){
  obj['Fuel Type']='avocado oil'
}
function remotelyDisable(obj){
  obj.disabled = true
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)
```

#### Looping Through Objects


```python
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
```

#### Advanced Objects Introduction


```python
const robot = {
  model :'1E78V2',
  energyLevel:100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}. `;
  }
};
console.log(robot.provideInfo())
```

#### Arrow Functions and this


```javascript
%%javascript


const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(goat.dietType);
  }
};

goat.diet();
```


    <IPython.core.display.Javascript object>



```python
const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
```

#### Privacy


```python
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
//robot._energyLevel='high'
robot.recharge()
```

#### Getters


```javascript
%%javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof(this._energyLevel)==='number'){
      return `My current energy level is ${this._energyLevel}`
    }else{
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
console.log(robot.energyLevel)

```


    <IPython.core.display.Javascript object>


#### Setters


```python
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof(num)==='number' && num>=0){
      this._numOfSensors = num;
    }else{
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
  
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors)

```

#### Factory Functions


```python
const robotFactory = (model,mobile) => {
  return {
    model:model,
    mobile:mobile,
    beep(){console.log('Beep Boop')}
    
  }
}
const tinCan = robotFactory('P-500',true)
tinCan.beep()
```

#### Property Value Shorthand


```python
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
```

#### Destructured Assignment


```python
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality } = robot;
functionality.beep()
```

#### Built-in Object Methods


```python
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);


console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = {laserBlaster: true, voiceRecognition: true}
Object.assign(newRobot,robot)
console.log(newRobot);
```

#### Introduction to Classes


```python
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```

#### Constructor


```python
class Surgeon{
  constructor(name,department){
    this.name = name;
    this.department = department;
  }
}
```

#### Instance


```python
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonCurry = new Surgeon('Curry','Cardiovascular')
const surgeonDurant = new Surgeon('Durant','Orthopedics')
```

#### Methods


```python
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays=20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff ){
    this._remainingVacationDays-=daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```

#### Method Calls


```python
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays=20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff ){
    this._remainingVacationDays-=daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry.name)
surgeonCurry.takeVacationDays(3)
console.log(surgeonCurry.remainingVacationDays )
```

#### Inheritance I
#### Inheritance II


```javascript
%%javascript
class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays=20
  }  
      get name(){
      return this._name;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays
    }
     takeVacationDays(daysOff){
     this._remainingVacationDays-= daysOff 
     }
}
class Doctor extends 
  HospitalEmployee {



    constructor(name){
     this._name = name;     this._remainingVacationDays=20;
      this._insurance;
    }
    get name(){
      return this._name;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays
    }
     takeVacationDays(daysOff){
     this._remainingVacationDays-= daysOff 
     }
}
class Nurse extends HospitalEmployee {

;
    constructor(name){
    this._name = name;      this._remainingVacationDays=20;
    this._certifications;  
    }
    get name(){
      return this._name;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays
    }
     takeVacationDays(daysOff){
     this._remainingVacationDays -= daysOff 
     }  
}
```


    <IPython.core.display.Javascript object>


#### Inheritance III


```python
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
class Nurse extends HospitalEmployee{
  constructor(name, certifications){
   super(name) 
   this._certifications=certifications; 
  }
}
const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics'])
```

#### Inheritance IV


```python
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays)
```

#### Inheritance V


```python
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications(){
    return this._certifications;
  }
  addCertification(newCertification){
    this._certifications.push(newCertification)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)
```

#### Static Methods


```python
  static generatePassword(){
    return Math.floor(Math.random()*10000)
  }
```

#### caniuse.com I
[https://caniuse.com/](https://caniuse.com/)  
[]()


```python
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```


```python
// Set the variable below to a number
let esFivePercentageSupport=98;

// Set the variable below to a number
let esSixTemplateLiterals=85;
```

#### Why ES6?


```python
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with'+pasta+', '+'meat+', and a sauce made with ' + sauce;
```

#### Transpilation With Babel

1.
In the terminal window type:

npm install babel-cli
This installs one of the two required Babel packages.

2.
In the terminal window type:

npm install babel-preset-env
This installs the second of two required Babel packages.

3.
In the terminal, type npm run build and press enter.

You can view the ES5 code in ./lib/main.js.

You may need to refresh to see the newly created lib directory.



#### npm init

1.
Run ls in the terminal to see the file structure of your current directory.

2.
Use npm to create a new package.json file. We recommend you set the name and description properties to the following values:

name — learning-babel
description — Use Babel to transpile JavaScript ES6 to ES5
Enter ls into the terminal to see the file structure of your current directory. Notice the addition of package.json.



#### Install Node Packages

```
$ npm install babel-cli -D
$ npm install babel-preset-env -D
```

#### .babelrc

{ "presets": ["env"] }

#### Babel Source Lib

Babel Source Lib
There’s one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...
In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:
```
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
```
In the "scripts" object above, we add a property called "build". The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.  
src — Instructs Babel to transpile all JavaScript code inside the src directory.  
-d — Instructs Babel to write the transpiled code to a directory.  
lib — Babel writes the transpiled code to a directory called lib.  
In the next exercise, we’ll run the babel src -d lib method to transpile our ES6+ code.  

Instructions
1.
In package.json, add a script called "build".

When run, the "build" script should use Babel to transpile JavaScript code inside of the src folder and write it to a folder called lib.

Don’t forget to add a comma after the “test” script.

package.json
```
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "description — Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
```

package.json
```
{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "description — Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
```

#### Build
We’re ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"
Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

From the command line, we type:

`npm run build`  
The command above runs the build script in package.json.

Babel writes the ES5 code to a file named main.js (it’s always the same name as the original file), inside of a folder called lib. The resulting directory structure is:

project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
Notice, the directory contains a new folder named lib, with one file, called main.js.

The npm run build command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files, you only need to run one command (npm run build) to transpile all of your code.

Instructions
1.
Transpile the ES6+ code to lib using the build command.

Once you’ve done this, navigate to the new lib folder and open main.js.

son data.
npm ERR! package.json must be actu
al JSON, not just JavaScript.
npm ERR!
npm ERR! This is not a bug in npm.
npm ERR! Tell the package author t
o fix their package.json file. JSO
N.parse

npm ERR! Please include the follow
ing file with any support request:
npm ERR!     /home/ccuser/.npm/_lo
gs/2020-02-03T06_32_02_106Z-debug.
log

#### Hello Modules
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

find, fix, and debug code more easily;
reuse and recycle defined logic in different parts of our application;
keep information private and protected from other modules;
and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
In this lesson, we’ll cover two ways to implement modules in JavaScript: Node.js’s module.exports and require() syntax, as well as the ES6 import/export syntax.

Instructions
Once you feel like you have a high-level understanding of modules, proceed to the next exercise.

Community Forums
Here are some helpful links to the top questions asked by coders about this exercise:

Why would I select specific variables/behavior to load into a program instead of defining said variables/behavior in the program itself?

#### module.exports
We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js module.exports syntax. Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

Below is an example of how to define a module and how to export it using the statement module.exports.

In menu.js we write:

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; 
Let’s consider what this code means.

let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an empty object.
Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
"Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.
The pattern we use to export modules is thus:

Create an object to represent the module.
Add properties or methods to the module object.
Export the module with module.exports.
Let’s create our first module.

Instructions
1.
Let’s begin by implementing the pattern above in an example. In 1-airplane.js create an object named Airplane.

2.
Within the same file, add a property to the Airplane object named myAirplane and set it equal to "StarJet".

3.
Export the module.


```python
let Airplane ={}
Airplane.myAirplane = "StarJet"
module.exports=Airplane
```

#### require()
To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the require() function to import modules.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require(). require() takes a file path argument pointing to the original module file.

In order.js we would write:

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
We now have the entire behavior of Menu available in order.js. Here, we notice:

In order.js we import the module by creating a const variable called Menu and setting it equal to the value of the require() function. We can set the name of this variable to anything we like, such as menuItems.
require() is a JavaScript function that loads a module. It’s argument is the file path of the module: ./menu.js. With require(), the .js extension is optional and will be assumed if it is not included.
The placeOrder() function then uses the Menu module. By calling Menu.specialty, we access the property specialty defined in the Menu module.
Taking a closer look, the pattern to import a module is:

Import the module with require() and assign it to a local variable.
Use the module and its properties within a program.
Instructions
1.
In 1-missionControl.js use the require() function to import the Airplane module from 1-airplane.js.

Recall that you will need to use the precise name of the file that contains the module.

2.
In 1-missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console.

3.
Call the displayAirplane() function. In the console, you should see the name of the airplane you defined in the module.


```python
const Airplane = require('./1-airplane.js')
function displayAirplane(){
  console.log(Airplane.myAirplane)
}
displayAirplane()
```

#### module.exports II
We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
}; 
In the above code, notice:

module.exports exposes the current module as an object.
specialty and getSpecialty are properties on the object.
Then in order.js, we write:

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
Here we can still access the behavior in the Menu module.

Instructions
1.
In 2-airplane.js, set module.exports equal to an empty object.

2.
Within the object, create a key called myAirplane and set it to a value "CloudJet".

3.
Again, within module.exports, create another key displayAirplane and set it to an anonymous function. The function should use the this statement to return myAirplane.

4.
In 2-missionControl.js use the require() function to import the Airplane module.

5.
In 2-missionControl.js log the result of calling .displayAirplane() to the console, noting that it is a method of the Airplane object.


```python
//2-airplane.js
module.exports = { 
  myAirplane : "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};
```


```python
//2-missionControl.js
const Airplane = require('./2-airplane.js')
console.log(Airplane.displayAirplane())
```

#### export default
Node.js supports require()/module.exports, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

Let’s look at an example in menu.js.

let Menu = {};

export default Menu;
export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features, it is common to transpile code since ES6 is not supported by all browsers.

Instructions
1.
In airplane.js, let’s again create an Airplane module from scratch, this time exporting the module with export default. Create an object to represent the module called Airplane.

2.
Now that we have an object Airplane, we can continue by adding data in the form of properties and values to the Airplane module.

Create an availableAirplanes variable and set it equal to an empty array. Be sure that availableAirplanes is a property of the Airplane object.

3.
In the availableAirplanes array, add two array elements that are both of type object.

The first object should contain a property name with a value 'AeroJet' and a property fuelCapacity with a value of 800.

The second object should have a property name with a value of SkyJet and a property fuelCapacity with a value of 500.

4.
Use export default to export the Airplane module.

Nice work! We added a property that lists the availableAirplanes to the Airplane module.


```python
let Airplane = {
  availableAirplanes:[
    {name:'AeroJet',
    fuelCapacity:800,},
    {
      name:'SkyJet',
    fuelCapacity:500,}]
};
export default Airplane;
```

#### import
ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

import Menu from './menu';  
The import keyword begins the statement.
The keyword Menu here specifies the name of the variable to store the default export in.
from specifies where to load the module from.
'./menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.
We can then continue using the Menu module in the order.js file.

Instructions
1.
In missionControl.js we’ll use the module Airplane to display the fuel capacity of both our airplanes.

Use the import keyword to import the Airplane module.

2.
Define a function displayFuelCapacity().

3.
Within the body of the displayFuelCapacity function, use forEach() to iterate over the Airplane.availableAirplanes array.

The forEach() should take an anonymous function as a parameter. We’ll add more in the next step.

4.
Pass the anonymous function you created in the last step a parameter of element.

5.
Within the displayFuelCapacity function, use console.log() to output the element’s name and its fuel capacity. The output should look like this:

'Fuel Capacity of + (element name) : + (element fuelCapacity)'
6.
Call the displayFuelCapacity function.


```python
import Airplane from './airplane'
function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
  })
}
displayFuelCapacity()
```

#### Named Exports
ES6 introduced a second common approach to export modules. In addition to export default, named exports allow us to export data through the use of variables.

Let’s see how this works. In menu.js we would be sure to give each piece of data a distinct variable name:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };
Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified in the export syntax.
Instructions
1.
Remove the statement that sets Airplane to an empty object, and remove the entire export default line.

You will see an error in the console, but we’ll fix this in the next step.

2.
Modify the availableAirplanes array such that it is a variable defined with let and no longer a property on the Airplane object.

3.
Let’s add some more data to the availableAirplanes array.

In the first object, AeroJet, add a property availableStaff, and set it equal to an array with the elements 'pilots', 'flightAttendants', 'engineers', 'medicalAssistance', and 'sensorOperators'.

In the second object, SkyJet, add a property availableStaff, and set it equal to an array with the elements 'pilots' and 'flightAttendants'.

4.
Define a new variable with let named flightRequirements, and set it equal to an empty object.

5.
Within the flightRequirements object, add a property requiredStaff, and set this equal to 4.

6.
Define a function with the name meetsStaffRequirements() that takes availableStaff and requiredStaff as parameters.

7.
In the body of the meetsStaffRequirements() function, write logic to check if the length of the availableStaff array is greater than or equal to requiredStaff.

The function should contain this logic:

if length of availableStaff is greater than or equal to requiredStaff
  return true
else 
  return false 
8.
Using the export keyword, export the variables availableAirplanes, flightRequirements and meetsStaffRequirements.


```python
let Airplane = {
  availableAirplanes:[
    {name:'AeroJet',
    fuelCapacity:800,},
    {
      name:'SkyJet',
    fuelCapacity:500,}]
};
export default Airplane;
```


```python
{
  let availableAirplanes=[
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],},
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],}]
};
let flightRequirements = {
  requiredStaff : 4,
}
function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
export {availableAirplanes, flightRequirements, meetsStaffRequirements,};
```

#### Named Imports
To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

In the order.js file, for example, we would write:

import { specialty, isVegetarian } from './menu';

console.log(specialty);
Here specialty and isVegetarian are imported.
If we did not want to import either of these variables, we could omit them from the import statement.
We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.
Instructions
1.
Let’s remove any reference to Airplane in our code since we are no longer exporting this module.

For example, Airplane.availableAirplanes should be modified to availableAirplanes.

Again, you will see a ReferenceError in the console for now, but we will fix that in our next step.

2.
Change the import statement such that it imports the availableAirplanes, flightRequirements, and meetsStaffRequirements variables.

Now, modify any instance of the Airplane.availableAirplanes variable, so that you only use availableAirplanes.

3.
Define a function displayStaffStatus().

4.
Within the body of the displayStaffStatus() function, use the forEach to iterate over the availableAirplanes array.

Specifically, the forEach() should take a function as a parameter. The function should in turn take element as a parameter.

5.
Within the displayStaffStatus() function, use console.log() to output the element’s name. We’ll add more in the next step.

6.
Continuing within the displayStaffStatus() function, modify the console.log() statement to output

(element name) + ' meets staff requirements: ' + (true/false)
To do this, we can call the meetsStaffRequirements method, passing in two parameters element.availableStaff and flightRequirements.requiredStaff.

7.
Call the displayStaffStatus() function.


```python
import Airplane from './airplane'
function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
  })
}
displayFuelCapacity()
```

meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)


```python
import {availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane'
function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   })
}
function displayStaffStatus (){
  availableAirplanes.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}
displayFuelCapacity()
displayStaffStatus()
```

Export Named Exports
Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

In menu.js

export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
We no longer need an export statement at the bottom of our file, since this behavior is handled above.
Instructions
1.
Let’s add some additional data to our airplane.js file.

Continue by adding more data to objects within the availableAirplanes variable.

To the first object AeroJet, add a property maxSpeed with a value of 1200 and a property minSpeed with a value of 300.

To the second object SkyJet, add a property maxSpeed with a value of 800 and a property minSpeed with a value of 200.

2.
Within the flightRequirements object, add a property requiredSpeedRange and set this equal to 700.

3.
Continuing with the same file, add a new function meetsSpeedRangeRequirements() that takes three arguments maxSpeed, minSpeed and requiredSpeedRange.

4.
Within the meetsSpeedRangeRequirements function, create a variable range, and set it to the difference between maxSpeed and minSpeed.

5.
In the body of the meetsSpeedRangeRequirements() function, create logic to check if the range is greater than the requiredSpeedRange.

The function should contain this logic:

if the `range` is greater than the `requiredSpeedRange`
  return true
else 
  return false 
6.
Use export to export the variables as soon as they are declared, and remove the export statement at the bottom of the file.

#### Export Named Exports


```python
 let availableAirplanes=[
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],},
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],}]

let flightRequirements = {
  requiredStaff : 4,
}
function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
export {availableAirplanes, flightRequirements, meetsStaffRequirements,};
```


```python

 export let availableAirplanes=[
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],
     maxSpeed:1200,
     minSpeed:300,
    },
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],
     maxSpeed:800,
     minSpeed:200,
    }]

export let flightRequirements = {
  requiredStaff : 4,
  requiredSpeedRange : 700,
}
export function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  const range = maxSpeed - minSpeed;
  if(range>requiredSpeedRange)
    return true
  else
    return false
  
}
```

#### Import Named Imports


```python
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';
function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   })
}
function displayStaffStatus (){
  availableAirplanes.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}
function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange) );
  });
}
displayFuelCapacity()
displayStaffStatus()
displaySpeedRangeStatus()
```

#### Export as


```python
 export let availableAirplanes=[
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],
     maxSpeed:1200,
     minSpeed:300,
    },
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],
     maxSpeed:800,
     minSpeed:200,
    }]

export let flightRequirements = {
  requiredStaff : 4,
  requiredSpeedRange : 700,
}
export function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  const range = maxSpeed - minSpeed;
  if(range>requiredSpeedRange)
    return true
  else
    return false
  
}
//export {availableAirplanes, flightRequirements, meetsStaffRequirements,};
```


```python
let availableAirplanes=[
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],
     maxSpeed:1200,
     minSpeed:300,
    },
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],
     maxSpeed:800,
     minSpeed:200,
    }]

let flightRequirements = {
  requiredStaff : 4,
  requiredSpeedRange : 700,
}
function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  const range = maxSpeed - minSpeed;
  if(range>requiredSpeedRange)
    return true
  else
    return false
  
}
export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs,};
```

#### Import as

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';
function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   })
}
function displayStaffStatus (){
  availableAirplanes.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}
function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange) );
  });
}
displayFuelCapacity()
displayStaffStatus()
displaySpeedRangeStatus()




```python

import {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs } from './airplane';
function displayFuelCapacity(){
  aircrafts.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   });
}
function displayStaffStatus (){
  aircrafts.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  })
}
function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange) );
  });
}
displayFuelCapacity()
displayStaffStatus()
displaySpeedRangeStatus()
```

#### Combining Export Statements


```python
export let availableAirplanes = [
    {name:'AeroJet',
    fuelCapacity:800,
    availableStaff:['pilots', 'flightAttendants', 'engineers', 'medicalAssistance',  'sensorOperators'
    ],
     maxSpeed:1200,
     minSpeed:300,
    },
    {
      name:'SkyJet',
    fuelCapacity:500,
    availableStaff:[
      'pilots',  'flightAttendants',
    ],
     maxSpeed:800,
     minSpeed:200,
    }];

export let flightRequirements = {
  requiredStaff : 4,
  requiredSpeedRange : 700,
}
export function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true
  }else{
    return false
  }  
}
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  const range = maxSpeed - minSpeed;
  if(range>requiredSpeedRange)
    return true
  else
    return false
  
}
export default meetsSpeedRangeRequirements;
```



#### Combining Import Statements


```python
//import {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs } from './airplane';
function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   });
}
function displayStaffStatus (){
  availableAirplanes.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}
function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange) );
  });
}
displayFuelCapacity()
displayStaffStatus()
displaySpeedRangeStatus()
```


```python
import {availableAirplanes, flightRequirements, meetsStaffRequirements, } from './airplane';
import meetsSpeedRangeRequirements from './airplane';
function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
     console.log('Fuel Capacity of ' + element.name + ': '+ element.fuelCapacity);
   });
}
function displayStaffStatus (){
  availableAirplanes.forEach(function(element){
console.log( element.name+ 
            ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}
function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange) );
  });
}
displayFuelCapacity()
displayStaffStatus()
displaySpeedRangeStatus()
```

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';


#### Promise Object
Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
Let’s look at an example executor function in a Promise constructor:

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
Let’s break down what’s happening above:

We declare a variable myFirstPromise
myFirstPromise is constructed using new Promise() which is the Promise constructor method.
executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
If not, we invoke reject() with the string 'I rejected!'
In our example, myFirstPromise resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.

Instructions
1.
You’ll be writing your code in the code-editor, but we won’t be running it until the final step. To check your code for a step, you can press the “Check Work” button.

We’re going to create a promise representing ordering sunglasses from an online store. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

myExecutor() should:

Have two parameters: resolve and reject
Check if the sunglasses property on the inventory object has a value greater than zero
If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'
When you’re ready, press the “Check Work” button.

In this exercise and throughout the lesson, we’ll provide you with a bash terminal to execute your code. To run the app.js program, you’ll type node app.js in the terminal and hit enter (or return). You’ll be able to see the output of the program in the terminal.

Let’s try it! Type node app.js in the terminal and hit enter.

If you’d like, you can see an alternate output by changing the sunglasses property in the inventory object to 0 and executing app.js from the terminal again.

When you’re ready to move on, press the “Check Work” button.


```python
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
function myExecutor(resolve, reject){
if (inventory.sunglasses>0) {
      resolve('Sunglasses order processed.');
  } else {
      reject('That item is sold out.'); 
  }  
}
// Write your code below:
function  orderSunglasses(){
let orderPromise  = new Promise(myExecutor);  
  return orderPromise ;
}
let orderPromise = orderSunglasses();
console.log(orderPromise);
```

node app.js  
node app.js


```python
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
  console.log("This is the  first line of synchronous code.");
}
setTimeout(usingSTO,1000);
```

#### Consuming Promises
#### The onFulfilled and onRejected Functions



1.02 32-55  
2.02 55-61-66  
3.02 66-72-77  
4.02 77-88  

[Text_formatting rus MOzilla javascript](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Text_formatting)  
[]()  

