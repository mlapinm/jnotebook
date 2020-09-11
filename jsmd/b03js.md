[Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)  

#### The onFulfilled and onRejected Functions
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:

const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'
Let’s break down what’s happening in the example code:

prom is a promise which will resolve to 'Yay!'.
We define a function, handleSuccess(), which prints the argument passed to it.
We invoke prom‘s .then() function passing in our handleSuccess() function.
Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.
With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both an onFulfilled and onRejected callback to .then().

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
Let’s break down what’s happening in the example code:

prom is a promise which will randomly either resolve with 'Yay!'or reject with 'Ohhh noooo!'.
We pass two handler functions to .then(). The first will be invoked with 'Yay!' if the promise resolves, and the second will be invoked with 'Ohhh noooo!' if the promise rejects.
Let’s write some onFulfilled and onRejected functions!

Instructions
1.
Take a look at the provided code. We require in a function, checkInventory(). It builds on the logic of the orderSunglasses() function you wrote in a previous exercise.

checkInventory() takes in an array representing an order and returns a promise.
If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".
We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.

If you’d like, look at the library.js file to see how it works. Press “Check Work” when you’re ready to move on.

2.
Write a function, handleSuccess(). You’ll use this function later on as your success handler. handleSuccess() should have one parameter, representing a resolved value. Inside the body of handleSuccess(), log the parameter to the console.

3.
Write a function, handleFailure(). You’ll use this function later on as your failure handler. handleFailure() should have one parameter, representing a rejection reason. Inside the body of handleFailure(), log the parameter to the console.

4.
Invoke checkInventory() with order. This will return a promise. Attach a .then() function to this. Pass into .then() the two handlers you wrote as callback functions.

5.
Type node app.js in the terminal and hit enter


```python
//library.js
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };
```


```python
//app.js
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(parameter){
  console.log(parameter);
  
}
function handleFailure(parameter){
  console.log(parameter);  
}
checkInventory(order).then(handleSuccess, handleFailure);

```

node app.js

CRIPT PROMISES
#### Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

Let’s look at an example using .catch():

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
Let’s break down what’s happening in the example code:

prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
We pass a success handler to .then() and a failure handler to .catch().
If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.
Let’s practice writing .catch() functions.

Instructions
1.
We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! First invoke the checkInventory() function with the order. Remember, this function will return a promise.

2.
Add a .then() to the returned promise. Pass in the success handler handleSuccess().

3.
Add a .catch() to the returned promise. Pass in the failure handler handleFailure().

4.
We set our inventory of sunglasses to 0, so the order shouldn’t go through. Let’s make sure our code has the expected results. Type node app.js in the terminal and hit enter.


```python
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
let prom = checkInventory(order).then(handleSuccess)
.catch(handleFailure);
```

#### Chaining Multiple Promises
One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
Let’s break down what’s happening in the example:

We invoke a function firstPromiseFunction() which returns a promise.
We invoke .then() with an anonymous function as the success handler.
Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
We invoke a second .then() to handle the logic for the second promise settling.
Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.
In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal). This ensured that the return value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.

Let’s write some promise chains!

Instructions
1.
Take a look at the provided code. We require in three functions: checkInventory(), processPayment(), shipOrder(). These functions each return a promise.

checkInventory() expects an order argument and returns a promise. If there are enough items in stock to fill the order, the promise will resolve to an array. The first element in the resolved value array will be the same order and the second element will be the total cost of the order as a number.

processPayment() expects an array argument with the order as the first element and the purchase total as the second. This function returns a promise. If there is a large enough balance on the giftcard associated with the order, it will resolve to an array. The first element in the resolved value array will be the same order and the second element will be a tracking number.

shipOrder() expects an array argument with the order as the first element and a tracking number as the second. It returns a promise which resolves to a string confirming the order has shipped.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.

2.
We set up a promise chain but it’s missing a couple important lines of code to make it function properly.

We invoked checkInventory() with order and chained a .then() function to it. This .then() has an anonymous function as its success handler, but it’s missing a return statement.

The success handler should return a processPayment() promise.

3.
We have a second .then() function on the chain. This .then() also has an anonymous function as its success handler and is missing a return statement.

The success handler should return a shipOrder() promise.


```python
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
```

#### Avoiding Common Mistakes
Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.

Mistake 1: Nesting promises instead of chaining them.

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
Let’s break down what’s happening in the above code:

We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.
Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!

Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
Let’s break down what’s happening in the example:

We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we create our second promise, but we forget to return it!
We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!
Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!

Instructions
1.
The code in app.js works correctly, but it doesn’t follow best practices.

Type node app.js in the terminal and hit enter, so you can see what the program outputs.

2.
Refactor, or rewrite, the code to avoid the two common mistakes: nesting and forgetting to return properly.

$ node app.js
All of the items are in stock. The
 total cost of the order is 35.97.
Payment processed with giftcard. G
enerating shipping label.
The order has been shipped. The tr
acking number is: 832271.



const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });


```python
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
		})
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
		})
    .then((successMessage) => {
        console.log(successMessage);
        });

```



The order has been shippe
. The tracking number is:
259677.
$ node app.js
All of the items are in stock. The
Payment processed with giftcard. G
The order has been shipped. The tr


#### Using Promise.all()
When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.

For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().

Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
Let’s look at a code example:

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
Let’s break down what’s happening:

We declare myPromises assigned to invoking Promise.all().
We invoke Promise.all() with an array of three promises— the returned values from functions.
We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
Instructions
1.
Our business is doing so well that we’re running low on inventory. We want to reach out to some distributors to see if they have the items we need. We only want to make one restocking order, so we’ll only want to place the order if all of the items are available.

Take a look at the provided code. We require in one function: checkAvailability().

checkAvailability() expects two string arguments: an item and a distributor. It returns a promise. The function simulates checking that the given distributor has a given item. 80% of the time it will resolve the promise with the item, and 20% of the time it will reject the promise with an error message stating that the item isn’t available.

We also provided two functions which will serve as success and failure handlers.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.

2.
Create three variables each assigned to a separate promise:

checkSunglasses should be assigned the value returned from invoking  checkAvailability() with 'sunglasses' as its first argument and 'Favorite Supply Co.' as its second argument.  
checkPants should be assigned the value returned from invoking   checkAvailability() with 'pants' as its first argument and 'Favorite   Supply Co.' as its second argument.
checkBags should be assigned the value returned from invoking checkAvailability() with 'bags' as its first argument and 'Favorite Supply Co.' as its second argument.
3.
Invoke Promise.all() with an array containing checkSunglasses, checkPants, and checkBags.

4.
Chain a .then() to the promise returned from Promise.all(). You should pass in onFulfill to serve as the success handler.

5.
Add a .catch() to the chain. You should pass in onReject to serve as the failure handler.

6.
Type node app.js in the terminal and hit enter to execute your program.

$ node app.js
Checking availability of sunglasses
 at Favorite Supply Co....
Checking availability of pants at F
avorite Supply Co....
Checking availability of bags at Fa
vorite Supply Co....
pants are in stock at Favorite Supp
ly Co.
Error: sunglasses is unavailable fr
om Favorite Supply Co. at this time
.
$


```python
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
let checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.');
let checkPants = checkAvailability('pants','Favorite Supply Co.');
let checkBags = checkAvailability('bags','Favorite Supply Co.');
Promise.all([checkSunglasses,checkPants,checkBags]).then(onFulfill).catch(onReject);

```



$ node app.js
This is the first sentence. This i
s the second sentence.
This is the first sentence. This i
s the second sentence.
This is the first sentence. This i
s the second sentence.


#### The async Keyword
The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.

async function myFunc() {
  // Function body here
};

myFunc();
We’ll be using async function declarations throughout this lesson, but we can also create async function expressions:

const myFunc = async () => {
  // Function body here
};

myFunc();
async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:

If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
If a promise is returned from the function, it will simply return that promise
async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5.

Let’s write an async function!

Instructions
1.
We provided a function withConstructor() which takes in a number. If the number is 0, it returns a promise that resolves to the string 'zero'. If the number is not 0, it returns a promise that resolves to the string 'not zero'. Take a moment to understand this function and the code that follows. When you’re ready to run it, type node app.js in to the terminal and press enter.

2.
Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise.

When you’re ready, check your work to move on to the next step.

3.
Now test your code! Uncomment the test code we wrote at the bottom of app.js. In the terminal, type node app.js and press enter to execute the code.

$ node app.js
 withConstructor(0) returned a pro
mise which resolved to: zero.
$


```python
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:
async function withAsync(num){
    if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}
// Leave this commented out until step 3:

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
```

$ node app.js
 withConstructor(0) returned a pro
mise which resolved to: zero.
 withAsync(100) returned a promise
 which resolved to: not zero.
$

#### The await Operator
In the last exercise, we covered the async keyword. By itself, it doesn’t do much; async functions are almost always used with the additional keyword await inside the function body.

The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.

In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".

async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

Instructions
1.
In the provided code, we’ve required in the function brainstormDinner(). This function expects no arguments and returns a new promise with a resolved value of a string representing a meal. (You can look at the code for this function by navigating to the library.js file.)

Look at the nativePromiseDinner() function in app.js. Take a moment to understand this function and predict its expected outcome. In the next step, you’ll be recreating its functionality using async...await rather than native promises.

It’s not necessary to execute the nativePromiseDinner() function, but, if you’d like to, check out the hint for some guidance. Press “Check Work” when you’re ready to move on to the next step.

2.
Fill in the body of the announceDinner() function so that it has the same functionality as nativePromiseDinner(). It should wait for the promise returned from brainstormDinner() to resolve, and then log a string to the console in the same format as did nativePromiseDinner(). You’ll need to use the await operator inside your function.

When you’re ready, check your work to move on to the next step.

3.
At the bottom of app.js, beneath the function declaration, invoke the announceDinner() function.


```python
const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();

```

#### Writing async Functions
We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
Now we’ll write two async functions which invoke myPromise():

async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.

Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.

Instructions
1.
Take a look at the provided code. We required in the shopForBeans() function from library.js which returns a promise with a resolved value of a string representing a type of bean, eg. ‘kidney’.

Next, we declared the getBeans() function. Let’s summarize its intended functionality:

Log '1. Heading to the store to buy beans...' to the console.
Capture the resolved value of the promise returned when we invoke shopForBeans().
The promise returned from shopForBeans() prints a string in the format '2. I bought [the resolved type of beans] beans because they were on sale.'
Finally, the function prints a string in the format '3. Great! I'm making [the bean type] beans for dinner tonight!' to the console.
Execute app.js in the terminal to see if getBeans() is working as intended.

2.
Uh oh, getBeans() is logging '3. Great! I'm making [object Promise] beans for dinner tonight!' to the console. Take a moment to understand why this is happening, and then refactor getBeans() so it works as intended. Check your work when you’re ready to move on to the next step.

3.
To test that the code is now functioning properly, execute app.js in the terminal again.


```python
const shopForBeans = require('./library.js');

function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
```

$ node app.js
1. Heading to the store to buy bea
ns...
3. Great! I'm making [object Promi
se] beans for dinner tonight!
2. I bought pinto beans because th
ey were on sale.


```python
$ node app.js
1. Heading to the store to buy bea
ns...
2. I bought pinto beans because th
ey were on sale.
3. Great! I'm making pinto beans f
or dinner tonight!
$
```


```python
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

```

#### Handling Dependent Promises
The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:

function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}
Let’s break down what’s happening in the nativePromiseVersion() function:

Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
We use another .then() to print the second promise’s resolved value to the console.
Here’s how we’d write an async function to accomplish the same thing:

async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}
Let’s break down what’s happening in our asyncAwaitVersion() function:

We mark our function as async.
Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.
Next, we log firstValue to the console.
Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.
Finally, we log secondValue to the console.
Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some async functions with multiple await statements!

Instructions
1.
Take a look at the provided code. We require in three functions: shopForBeans(), soakTheBeans(), and cookTheBeans(). These functions each return a promise.

shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.
soakTheBeans() expects a bean type string as an argument and returns a promise which resolves to a boolean indicating whether or not the beans are softened.
cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a string announcing that dinner is ready.
If you’d like, look at the library.js file to see how these functions work. Press “Check Work” to move on to the next step.

2.
In the following checkpoints, you’ll create an async function that handles the three dependent promises we just walked through. It will simulate shopping for, soaking, and then cooking the beans. To get started, declare an async function, makeBeans(). You can leave the function body blank for now.

Check your work to move on to the next step.

3.
Inside your function, declare a variable, type, assigned to the resolved value of shopForBeans(). This must be accomplished in one statement.

4.
Next inside your function, declare a variable, isSoft, assigned to the resolved value of soakTheBeans(). Don’t forget: the soakTheBeans() function expects an argument. Make sure to pass the expected value into soakTheBeans().

5.
Next inside your function, declare a variable, dinner, assigned to the resolved of cookTheBeans(). Don’t forget: the cookTheBeans() function also expects an argument. Make sure to pass the expected value into cookTheBeans().

6.
Next inside your function, log your dinner variable to the console.

7.
Beneath your function declaration, invoke the makeBeans() function.

8.
Let’s see your async function in action! In the terminal, type node app.js and press enter to execute the code.


```python
$ node app.js
I bought pinto beans because they
were on sale.
Time to soak the beans.
... The pinto beans are softened.
Time to cook the beans.
... The beans are cooked!


Dinner is served!
$
```

#### Handling Errors
When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.

With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!

async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}

usingTryCatch();
Remember, since async functions return promises we can still use native promise’s .catch() with an async function

async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
This is sometimes used in the global scope to catch final errors in complex code.

Instructions
1.
For convenience, we’ve been working with a lot of promises that never reject, but this isn’t very realistic!

This time we’ve required in a function, cookBeanSouffle() which returns a promise that resolves or rejects randomly. When it resolves, the promise resolves with a value of 'Bean Souffle' and, when it rejects, it rejects with a value of 'Dinner is ruined!'. If you’re interested, you can see how the function works by looking in the library.js file.

Press “Check Work” when you’re ready to move on to the next step.

2.
Declare an async function, hostDinnerParty(). Inside your function, create a try...catch statement. The catch statement should specify an identifier, error. You can leave both the try and catch blocks empty.

3.
Inside your try block, log a string in the following format: '[resolved value of cookBeanSouffle() promise] is served!' ie. 'Bean Souffle is served!'. Make sure to await the cookBeanSouffle() promise. For more guidance, check out the hint.

4.
Now let’s fill in the catch block! First log the error to the console, and then log the string: 'Ordering a pizza!' to the console.

5.
Awesome! Beneath your function declaration, invoke hostDinnerParty().

6.
Let’s see your function in action. In the terminal type node app.js and press enter to run the code. If you keep executing app.js you’ll see the results of the promise resolving or rejecting.

$ node app.js
Fingers crossed... Putting the Bea
n Souffle in the oven
Dinner is ruined!
Ordering a pizza!



```python
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty(){
try {
  let resolved = await cookBeanSouffle();
  console.log(`${resolved} is served!`);
 } catch (error) {
   console.log(error);
   console.log('Ordering a pizza!');
 }
}
hostDinnerParty();
```

#### Handling Independent Promises
Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?

async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.

In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.

With our concurrent() function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, the ability to perform asynchronous actions at the same time.

Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await.

Instructions
1.
Take a look at the provided code. We require in four functions: cookBeans(), steamBroccoli(), cookRice(), and bakeChicken(). These functions each return a promise which will resolve to a string representing a part of a meal.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on.

2.
Declare an async function, serveDinner(). Create four variables:

vegetablePromise which should be assigned the return value of steamBroccoli()
starchPromise which should be assigned the return value of cookRice()
proteinPromise which should be assigned the return value of bakeChicken()
and sidePromise which should be assigned the return value of cookBeans()
These variables should be assigned the promise objects themselves not their resolved values.

3.
Next console.log() a string in the following format: Dinner is served. We’re having [resolved value of the vegetablePromise], [resolved value of the starchPromise], [resolved value of the proteinPromise], and [resolved value of the sidePromise]. ie. ‘Dinner is served. We’re having broccoli, rice, chicken, and beans.’

You’ll need to await each promise, but there are a few different ways you can accomplish the desired functionality. Check out the hint if you want some guidance.

4.
Awesome! Let’s see your function in action. Beneath your function declaration, invoke serveDinner().

5.
In the terminal type node app.js and press enter to run the code.


```python
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

async function serveDinner(){
// Write your code below:
const vegetablePromise =   steamBroccoli();
const starchPromise =  cookRice();
  const proteinPromise =  bakeChicken();
const sidePromise =  cookBeans();
let s1 = await vegetablePromise;
let s2 = await starchPromise;
let s3 = await proteinPromise;
let s4 = await sidePromise;
console.log('Dinner is served. We\'re having '+s1+', '+  s2+', '+ s3+', and '+s4+'.');  
}
serveDinner();
```

#### Await Promise.all()
Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().

We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
In our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, the second is the value of the asyncTask2() promise, and so on.

Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

Instructions
1.
In this exercise, we require in the same four functions as in the last exercise: cookBeans(), steamBroccoli(), cookRice(), and bakeChicken().

These functions each return a promise which will resolve to a string representing a part of a meal. You can check them out in the library.js file. Press “Check Work” to move on to the next step.

2.
You’re going to create a very similar function to the serveDinner() function you created in the last exercise. This time, you’ll use Promise.all()!

Create an async function serveDinnerAgain(). Inside your function, declare a variable foodArray and assign it the resolved value of the promise returned from Promise.all().

Remember that Promise.all() takes in an array of promises. Pass in an array containing the steamBroccoli(), cookRice(), bakeChicken(), and cookBeans() functions in that order.

3.
Next console.log() a string in the following format: Dinner is served. We’re having [first item in foodArray ], [second item in foodArray ], [third item in foodArray], and [fourth item in foodArray ]. eg. ‘Dinner is served. We’re having broccoli, rice, chicken, and beans.’

There are a few different ways you can accomplish the desired functionality. Check out the hint if you want some guidance.

4.
Ok great! Now let’s see your function in action. Beneath your function declaration, invoke serveDinnerAgain().

5.
In the terminal type node app.js and press enter to run the code.

#### Await Promise.all()


```python
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
 let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
console.log('Dinner is served. We\'re having '+foodArray[0]+', '+foodArray[1]+', '+foodArray[2]+', and '+foodArray[3]+'.');
}
serveDinnerAgain();
```

#### Introduction to Requests


```python
{
  "id":5,
  "name":"Chelsey Dietrich",
  "username":"Kamren",
  "email":"Lucio_Hettinger@annie.ca",
  "address":{
    "street":"Skiles Walks",
    "suite":"Suite 351",
    "city":"Roscoeview",
    "zipcode":"33263",
    "geo":{
      "lat":"-31.8129",
      "lng":"62.5342"
    }
  },
  "phone":"(254)954-1289",
  "website":"demarco.info",
  "company":{
    "name":"Keebler LLC",
    "catchPhrase":"User-centric fault-tolerant solution",
    "bs":"revolutionize end-to-end systems"
  }
}
```




    {'id': 5,
     'name': 'Chelsey Dietrich',
     'username': 'Kamren',
     'email': 'Lucio_Hettinger@annie.ca',
     'address': {'street': 'Skiles Walks',
      'suite': 'Suite 351',
      'city': 'Roscoeview',
      'zipcode': '33263',
      'geo': {'lat': '-31.8129', 'lng': '62.5342'}},
     'phone': '(254)954-1289',
     'website': 'demarco.info',
     'company': {'name': 'Keebler LLC',
      'catchPhrase': 'User-centric fault-tolerant solution',
      'bs': 'revolutionize end-to-end systems'}}




```python
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
      changeButton();
    }
  }
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
}

const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
}

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
}

jsonButton.addEventListener('click', generateJson);
```

#### HTTP Requests


```python
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

```

#### XHR GET Requests I
#### XHR GET Requests II


```python
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
if (xhr.readyState === XMLHttpRequest.DONE) {
  return xhr.response;
}  
}
xhr.open('GET', url);
xhr.send();
```

#### XHR GET Requests III

// Information to reach API


// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {

}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


home You might be interested in:

syndrome
gloam
comb
tome
dome
biome
gnome
chrome
foam
shalom


```python
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value
const endpoint = url+queryParams+wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
   if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
} 
  }
  xhr.open('GET',endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
```

#### XHR GET Requests IV


```python
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams  = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
const topicQuery =  topicField.value; 
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
```

#### XHR POST Requests I


```python
const xhr = new XMLHttpRequest ();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState===XMLHttpRequest.DONE){
    return xhr.response;
  }
}
xhr.open('POST',url);
xhr.send(data);
```

#### XHR Post Requests III


```python
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';
const apiKey = '887c6b7788f14c14a5c42dcc0df64803'
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```

#### Introduction to Requests with ES6
#### fetch() GET Requests I
#### fetch() GET Requests II











 1 | 1 | 1 | 1 | 1 | 1 
 --|---|---|---|---|---
cover   | покрытие  | require  | запросить  | understanding   | понимание  
behavior   | характеристики  | soon  | вскоре  | concerns  | проблемы  
 means   | означает  | appropriate  | соответствующий  | certain  | определенном  
 nesting  | вложенность  | required  | требуемый  | obvious  | очевидный  
 advantage   | преимущества  | resolved  | решены  | concurrency   | параллельный  
 wondered   | задумывались  | glimpse   | взгляд  |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   

Your balance is 2000
You just withdrew 300
Hello!
Your balance is 1700
You just deposited 600
Hello!
Your balance is 2300
You just deposited 600
Hello!
Your balance is 2900

public class SavingsAccount {
  
  int balance;
  
  public SavingsAccount(int initialBalance){
    balance = initialBalance;
  }
  public void checkBalance(){
    System.out.println("Hello! Your balance is " + balance);
  }
  public void deposit(int amountToDeposit){
    balance += amountToDeposit;
    System.out.println("You just deposited " + amountToDeposit);
  }
  public int withdraw(int amountToWithdraw){
    balance -= amountToWithdraw;
    System.out.println("You just withdrew " + amountToWithdraw);
    return amountToWithdraw;
  }
  
  public static void main(String[] args){
    SavingsAccount savings = new SavingsAccount(2000);
    
    //Check balance:
    System.out.println("Hello!");
   // System.out.println("Your balance is "+savings.balance);
    
    //Withdrawing:
    //int afterWithdraw = savings.balance - 300;
    //savings.balance = afterWithdraw;
    //System.out.println("You just withdrew "+300);
    
    //Check balance:
    // System.out.println("Hello!");
    // System.out.println("Your balance is "+savings.balance);
    
    //Deposit:
    // int afterDeposit = savings.balance + 600;
    // savings.balance = afterDeposit;
    // System.out.println("You just deposited "+600);
    
    //Check balance:
    // System.out.println("Hello!");
    // System.out.println("Your balance is "+savings.balance);
    
    //Deposit:
    // int afterDeposit2 = savings.balance + 600;
    // savings.balance = afterDeposit2;
    // System.out.println("You just deposited "+600);
    
    //Check balance:
    // System.out.println("Hello!");
    // System.out.println("Your balance is "+savings.balance);
    savings.checkBalance();
    savings.withdraw(300);
    savings.checkBalance();
    savings.deposit(600);
    savings.checkBalance();
    savings.deposit(600);
    savings.checkBalance();
  }       
}








