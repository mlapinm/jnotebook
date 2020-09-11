[Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)  
[Learn Java](https://www.codecademy.com/learn/learn-java)  

#### fetch() GET Requests II
We are going to reconstruct the boilerplate code necessary to create a GET request using the fetch() function step-by-step.

Feel free to refer to the fetch() GET diagram at any point while completing this exercise:

fetch() GET diagram
Instructions
1.
First, call the fetch() function and pass it this URL as a string:

https://api-to-call.com/endpoint
This first argument determines the endpoint of the request.

2.
Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument. The success callback function takes one parameter, response.

.then() will fire only after the promise status of fetch() has been resolved.

3.
Inside of the response callback function, check the ok property of response inside of a conditional statement. In the code block of the conditional statement, return response.json().

The reason we’re testing the ok property of the response object is that it will be a Boolean value. If there were no errors response.ok will be true and then your code will return response.json().

4.
Below the curly braces of the conditional statement, create a new error with this code:

throw new Error('Request failed!');
Your code will throw this error when response.ok is falsy.

5.
Add a second argument to .then(), it will be an arrow function that will handle our failures. Separate the first callback function from the second with a comma. The second callback function takes a single parameter, networkError.

In the code block of the second callback function, log networkError.message to the console.

If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.

6.
Chain another .then() method to the end of the first .then() method.

Pass the new .then() method a callback function that takes jsonResponse as its parameter and return jsonResponse.

The second .then()‘s success callback won’t run until the previous .then() method has finished running. It will also not run if there was an error was thrown previously.


```python
fetch('https://api-to-call.com/endpoint').then(
(response) => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
},(networkError)=>{
  console.log(networkError.message);
}).then((jsonResponse)=>{
  return jsonResponse;
});
```

#### fetch() GET Requests III
In the previous exercise, you wrote the boilerplate code for a GET request using fetch() and .then(). In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser.

Datamuse API.
If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field.

You may get some errors as you complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, you should be receiving no errors.

Instructions
1.
At the top of main.js, create a const called url. Assign url to the following URL as a string:

https://api.datamuse.com/words
2.
Below url, create another const and call it queryParams. Assign it a value of '?sl='

queryParams will be the start of your query string and will narrow your search to words that sounds like your word.

3.
Inside the getSuggestions() function, create a const called wordQuery and assign it inputField.value.

You’ll need wordQuery to store the value of what is being typed into the input field.

You will be working inside getSuggestions() for the remainder of this exercise.

4.
Now it’s time to add a query string to the URL with all the necessary parameters.

Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

5.
Call the fetch() function and pass in endpoint as an argument. For this API to work within the provided browser, add {cache: 'no-cache'} as the second argument.

6.
Chain a .then() method to the fetch() function. Pass it a success arrow callback function as an argument. The callback function should take response as its single parameter.

7.
Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value. If so, call the function renderJsonResponse() and pass in response as an argument. Then, run your code.

Then type in a word to and click the submit button to view the JSON that came back. The status of the promise return from fetch() will be resolved.

The code for renderJsonResponse() can be viewed at public/helperFunctions.js.

8.
Delete renderJsonResponse(response) and replace it with return response.json().

By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.

9.
Below the condition’s code block, add this code to raise an exception if the request failed: throw new Error('Request failed!');

10.
Separate the success callback function and the error callback function with a comma. The error callback function will also be an arrow function that takes one parameter, networkError. In the code block of the arrow function, log networkError.message to the console.

{"type":"cors", 
"url":"https://api.datamuse.com/words?sl=home", 
"redirected":false, 
"status":200, 
"ok":true, 
"statusText":"OK", 
"headers":{}, 
"body":{}, 
"bodyUsed":false}


```python
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams  = '?sl=';
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url+queryParams+wordQuery;
  fetch(endpoint, {cache: 'no-cache'}).then((response)=>{
    if(response.ok){
     // renderJsonResponse(response);
      return response.json();
    }
    throw new Error('Request failed!');
  },(networkError)=>{
    console.log(networkError.message);
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

```

#### fetch() GET Requests IV
Great job making it this far!

In the previous exercise, you created the query URL, called the fetch() function and passed it the query URL and a settings object. Then, you chained a .then() method and passed it two functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, you’ll now take the information that was returned with the promise and manipulate the webpage!

Instructions
1.
At the end of the .then() method, chain another .then() method.

Pass .then() an anonymous arrow callback function that takes jsonResponse as its single parameter.

2.
Inside the callback function, call the function renderRawResponse() and pass in jsonResponse as an argument. Run the code.

In the input field, you can type in a word and click the submit button.

If all went well, you should see an array of words that the Datamuse API responded with!

You can view the purpose of renderRawResponse at public/helperFunctions.js.

3.
Time to clean up that response a bit. Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse).

Run your code.

Try the webpage again with another word!

```[{"word":"home","score":100,"numSyllables":1},{"word":"holm","score":100,"numSyllables":1},{"word":"heaume","score":100,"numSyllables":1},{"word":"him","score":95,"numSyllables":1},{"word":"ham","score":95,"numSyllables":1},{"word":"hum","score":95,"numSyllables":1},{"word":"hem","score":95,"numSyllables":1},{"word":"hone","score":95,"numSyllables":1},{"word":"hymn","score":95,"numSyllables":1},{"word":"whom","score":95,"numSyllables":1}]```

```
You might be interested in:

home
holm
heaume
him
ham
hum
hem
hone
hymn
whom```


```python
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then((jsonResponse)=>{
    //renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

```

#### fetch() POST Requests I
In the previous exercise, you successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

Now, you’re going to learn how to use fetch() to construct POST requests!

Take a look at the diagram to the right. It has the boilerplate code for a POST request using fetch().

Notice that the initial call takes two arguments: an endpoint and an object that contains information needed for the POST request. The rest of the request is identical to the GET request.

#### fetch() POST Requests II
We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete POST request using fetch() and .then().

Feel free to refer to the fetch() POST diagram at any point while completing this exercise:

fetch() POST diagram
Instructions
1.
Call the fetch() function, pass it the URL below as a string as its first argument, and pass it an empty object ({}) as its second argument.

https://api-to-call.com/endpoint
We’re calling fetch() and providing an endpoint. In the next step we’ll fill in the empty object with the necessary information.

2.
The settings object you passed to the fetch() function will contain two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'}).

This second argument determines that this request is a POST request and what information will be sent to the API.

3.
Chain a .then() method to the fetch() function and pass it the success callback function as its first parameter. Pass in response as an argument for the callback function. Leave the code block of the callback function empty for now.

The code inside .then() will execute when the promise returned from fetch() is resolved.

4.
Inside the callback function’s code block, check the ok property of the response object inside of a conditional statement. In the code block of the conditional statement, return response.json().

When returned, this information will be passed on to the next .then() callback function.

5.
Below the curly braces of the conditional statement, create a new error with this code:

throw new Error('Request failed!');
This error will be raised if we get back some status error.

6.
Create the failure callback function. This function takes a single parameter, networkError. Separate the first callback function from the second with a comma. This function is still inside of the .then() method.

In the code block of the function you just made, log networkError.message to the console.

7.
Chain another .then() method to the end of the first .then() method.

In the new .then() method, create an arrow callback function that takes jsonResponse as its parameter.

Then in the code block return jsonResponse.

The purpose of this step is to view the JSON that was returned from the previous .then().


```python
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body:  JSON.stringify({id: '200'}),
  }).then((response)=>{
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
},(networkError)=>{
  console.log(networkError.message);
}).then((jsonResponse)=>{
  return jsonResponse;
});
```

#### fetch() Post Requests III
In the previous exercise, you created the boilerplate code for making a POST request using fetch() and .then(). In this exercise, you’re going to update that boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API.

Rebrandly API.
If you haven’t already created a Rebrandly API key, read through the Rebrandly sign up guide:

Codecademy Articles: Rebrandly URL Shortener API.
If you reset the exercise at any point, you will have to paste in your API key again at the top!

Instructions
1.
Assign apiKey to your Rebrandly API key as a string.

If you do not assign the correct key, you will not see the proper results in the steps afterwards.

2.
Inside the code block of shortenUrl(), create a const named urlToShorten and assign it inputField.value. urlToShorten will keep the value of what is being typed into the input field.

Please note, you will be working inside shortenUrl() for the remainder of this exercise.

3.
Underneath urlToShorten, create another const named data, and assign it to the result of calling the method JSON.stringify() with {destination: urlToShorten} as an argument.

The reason for creating data is to prepare the information needed to send in the body.

4.
Below data, call the fetch() function. Pass it url as its first argument and an empty object as its second argument.

5.
Now it’s time to add some properties to the empty object that you just created. Create a property with the key method and the value 'POST'.

6.
In the same object, create another property. The key for this property is headers and the value will be another object.

Assign headers the value of another object listed below:

{
  'Content-type': 'application/json',
  'apikey': apiKey
}
7.
In that same object that has the properties method and headers, add another property. The key is named body and the value will be data.

Setting up this information now will make chaining .then() in the next exercise much easier!


```python
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

```


```python
// Information to reach API
const apiKey = '887c6b7788f14c14a5c42dcc0df64803';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
const urlToShorten = inputField.value;
const data =  JSON.stringify({destination: urlToShorten});
  fetch(url,{method:'POST',
             headers:{
     'Content-type': 'application/json',
  'apikey': apiKey
             },
             body: data,
            });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

```

#### fetch() POST Requests IV
In the previous exercise you’ve positioned yourself to make the POST request by providing the endpoint and the object containing all the necessary information. In this exercise you’ll handle the response.

The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status. Let’s implement that knowledge into your code!

If you reset the exercise at any point, you will have to paste in your API key again at the top!

Instructions
1.
Chain a .then() method to the end of the fetch() function you wrote in the previous exercise. As its first argument, pass it an arrow function as a callback that takes response as its single parameter.

2.
Inside the block of the function you made in Step 1, use a conditional statement to check the value of the ok property of response. If it evaluates to a truthy value, call renderJsonResponse() and pass in response.

Run the code.

Now, if you post a URL, you should see the object that was sent back!

renderJsonResponse() is a helper function found in public/helperFunctions.js.

3.
Great, now that you see the raw object, you will need to pass the JSON to the next .then(). Delete renderJsonResponse(response) and replace it with return response.json()

4.
Below the curly braces of the conditional statement, throw a new Error in case response.ok is falsy.

The message the error should raise is ‘Request failed!’.

5.
Outside of the code block from the first callback function you wrote, add another arrow callback function that takes networkError as a single parameter.

console.log() the networkError.message inside of the callback function you just wrote.

By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!

{"type":"cors", 
"url":"https://api.rebrandly.com/v1/links", 
"redirected":false, 
"status":200, 
"ok":true, 
"statusText":"", 
"headers":{}, 
"body":{}, 
"bodyUsed":false}


```python
// Information to reach API
const apiKey = '887c6b7788f14c14a5c42dcc0df64803';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
const urlToShorten = inputField.value;
const data =  JSON.stringify({destination: urlToShorten});
  fetch(url,{method:'POST',
             headers:{
     'Content-type': 'application/json',
  'apikey': apiKey
             },
             body: data,
            }).then((response)=>{
    if(response.ok){
//renderJsonResponse(response);
      return response.json();
    }
    throw new Error('Request failed!');
  },(networkError)=>{
    console.log(networkError.message);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

```

#### fetch() POST Requests V
You’re almost done with the POST request you started a few lessons back!

In fact, this time you’ll add another .then() to the chain to finally make the information available to your webpage!

If you reset the exercise at any point, you will have to paste in your API key again at the top!

Instructions
1.
Chain a .then() method to the end of the original .then() method.

2.
Pass in an anonymous arrow function as an argument for .then(). This callback function will take jsonResponse as its single parameter.

Inside the callback function, call renderRawResponse() and pass in jsonResponse.

Run the code.

Put in any URL in the text field, and then click the shorten button on the webpage. Make sure you include the entire link, including ‘http://‘ or ‘https://‘.

You’ll see the JSON of the response sent back from the API.

The renderRawResponse() helper function can be viewed at public/helperFunctions.js.

3.
Delete renderRawResponse(jsonResponse). In its place, call renderResponse() and passing in jsonResponse.

Run the code.

Put a URL into the text field again and then click the Shorten button on the web page. Notice the difference?

The renderResponse() helper function can be viewed at public/helperFunctions.j

{"id":"c81bc1dc62ad46c28cade4c33d118ae6", 
"title":"Link at1jmb3", 
"slashtag":"at1jmb3", 
"destination":"http://google.com", 
"createdAt":"2020-02-05T10:42:31.000Z", 
"updatedAt":"2020-02-05T10:42:31.000Z", 
"status":"active", 
"tags":[], 
"clicks":0, 
"isPublic":false, 
"shortUrl":"rebrand.ly/at1jmb3", 
"domainId":"8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"domainName":"rebrand.ly", 
"domain":{"id":"8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"ref":"/domains/8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"fullName":"rebrand.ly", 
"active":true}, 
"https":true, 
"favourite":false, 
"creator":{"id":"45e147ada6024b0f98b631b357004fbc", 
"fullName":"mmlapinm", 
"avatarUrl":"https://s.gravatar.com/avatar/4a397cd9e053f484a82621d1797d6881?size=80&d=retro&rating=g"}, 
"integrated":false}

Your shortened url is:

rebrand.ly/vu9xxek

rebrand.ly/ymicogc

#### async GET Requests I
Let’s take a minute to appreciate what you’ve accomplished so far:

used fetch() to make GET and POST requests.
check the status of the responses coming back
catch errors that might possibly arise
taking successful responses and rendering it on the webpage
That is fantastic! It’s the basis of how the internet works!

In the following exercises, we’re going to take what you’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already, now it’s time to make it easier.

The structure for this request will also be slightly different. Notice the new keywords async and await, as well as the try and catch statements.

We’ll be going over how to write the boilerplate code for async GET requests in the next lesson.

Instructions
Move on to the next exercise when you’re ready!

#### async GET Requests II
We are going to walk through and recreate the boilerplate code necessary to create a GET request using the async and await.

Here are some key points to keep in mind as we walk through the code:

Using an async function that will return a promise.
await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.
Feel free to refer to the async/await GET diagram at any point while completing this exercise:

async/await GET diagram
Instructions
1.
In main.js, create an arrow function using the async keyword and save it to a const getData.

The async keyword will ensure that the function returns a promise.

Check the hint for syntax help.

2.
In the code block for getData, we should add a try statement with an empty code block.

Below the try statement’s code block, add a catch(error) statement.

The code in the try block will send a request and handle the response. The catch statement will then take care of an error if it is thrown.

Check the hint for syntax help.

3.
Inside the catch code block, log error to the console.

Since this exercise is an example, we’re using console.log() to view the error. Generally, developers create a more sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment.

4.
Now we have to consider what to do inside of the code block of the try statement. We should start by using the await keyword before calling fetch(). Pass in the following URL, as a string, to the function as its first argument:

https://api-to-call.com/endpoint
We’ll have to save the returned promise in a variable called response using the const keyword. response will save the the response of endpoint once that information has been sent back.

Check the hint for syntax help.

5.
Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

6.
Inside the code block of the conditional statement, await the resolution of calling the .json() method on response.

Save the returned object to a variable called jsonResponse using the keyword const.

Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what data the JSON holds.

7.
Return jsonResponse directly below the code you wrote in the previous step.

Normally, we’d want to use the information from jsonResponse in a different manner. In this exercise, we’re practicing how to write the boilerplate code.

8.
Below the conditional statement, throw a new Error. The message the error should raise is ‘Request failed!’.


```python
const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }catch(error){
    console.log(error);
  }
}
```

#### async GET Requests III
In the previous exercise, we created the boilerplate code for making a GET request using async and await.

In this exercise, you’re going to build on previously created boilerplate code to get nouns that describe the inputted word from the Datamuse API:

Datamuse API Documentation.
Instructions
1.
Under the comment “AJAX function”, create a new arrow function called getSuggestions() using the async keyword.

You’ll be coding inside the arrow function of const getSuggestions for the remainder of this exercise.

2.
Inside the code block of the async arrow function, create a const variable named wordQuery and assign it inputField.value.

3.
Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

4.
Add a try statement with an empty code block. Outside the code block for try, add a catch(error) statement with a code block that logs error to the console.

5.
Inside the try code block, using const, create a variable named response and assign it to await the result of calling fetch() with endpoint as the first argument. For this API to work within the provided browser, add {cache: 'no-cache'} as the second argument.

6.
Below the variable response from the previous step, create a conditional statement that the checks if the ok property of the response evaluates to a truthy value.

Inside the code block of the conditional statement, await response.json() and save it to a variable called jsonResponse using the const keyword.

7.
Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.

In the response field, type in a word and click the submit button on the web page.

You should now see an array of objects that contain nouns that describe the word you typed in!

You can view the purpose of the renderRawResponse helper function at public/helperFunctions.js.

8.
Now that you can see the body of response, you should clean it up to display on the webpage.

Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse). Run the code. Then type in another word and click the submit button.

Great, now you have an organized list of words and you finished your GET request!

You can view the purpose of renderResponse function at public/helperFunctions.js.

[{"word":"care","score":1001},{"word":"pay","score":1000},{"word":"school","score":999},{"word":"services","score":998},{"word":"making","score":997},{"word":"mom","score":996},{"word":"life","score":995},{"word":"owners","score":994},{"word":"based","score":993},{"word":"work","score":992}]

home
You might be interested in:

care
pay
school
services
making
mom
life
owners
based
work


```python
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url+ queryParams+wordQuery;
  try{
    const response = await fetch(endpoint,{cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json();
     // renderRawResponse(jsonResponse);
 renderResponse(jsonResponse);
    }
  }catch(error){
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

```

#### async POST Requests I
Now that you’ve made an async GET request, let’s start on getting you familiar the async POST request.

As with the other GET and POST requests that you’ve been making, an async POST request requires more information. Take a look at the diagram.

We still have the same structure of using try and catch as before. But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

We’ll be explaining the why’s and how’s of the boilerplate code for async POST requests in the next lesson.

#### async POST Requests II
Now we’re going to piece together a POST request using async and await.

Feel free to refer to the async/await diagram below at any point while completing this exercise:

async/await POST diagram
Instructions
1.
At the top of main.js create an async arrow function and save it to a const getData().

The async keyword will ensure that the function returns a promise.

2.
In the code block for getData, we should add a try statement with an empty code block.

In case things go wrong, we need to some code to handle that. Below the try code block, add a catch statement and pass in error as an argument.

Then, in the catch statement code block, log error to the console.

3.
We now have to consider what we want to do inside of the try code block. Since we are making a POST request, we should start by using the await keyword before calling the fetch() function.

We will have to save the returned promise in a variable called response using the const keyword.

4.
In the fetch() call that we just made, pass in the following URL to the function as a string for the first argument:

https://api-to-call.com/endpoint
Then as our second argument, let’s pass in an empty object for now.

5.
Let’s now fill in the request options in our second argument.

First, add the method property and the value is 'POST'. Then we have to include a body property and the value is JSON.stringify({id: 200}).

Remember to separate the properties with a comma.

6.
After the code block of response, we should create an if statement that checks the ok property of the response object.

Inside the code block of the conditional statement, await the resolution of calling the .json() method on response. Save the returned object to a variable called jsonResponse using the keyword const.

7.
Now that we have what we want, we should return jsonResponse directly below the code written in the previous step.

Like with previous boilerplate exercises, we’re practicing writing code. Normally, we would want to do more beyond this step of returning jsonResponse.

8.
Below the if conditional, throw a new Error() with the message 'Request failed!'

Nice work, didn’t that feel very similar to making a GET request?


```python
const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint',
    {
     method: 'POST',
     body: JSON.stringify({id: 200}), 
    });
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  }catch(error){
    console.log(error);}
}
```

#### async POST Requests III
Since you’ve created the boilerplate code for a POST request, the next step is to incorporate that experience and logic into making a real request.

In this exercise, you’ll need to retrieve your Rebrandly API key to access the Rebrandly API.

Rebrandly API Keys.
If you reset the exercise at any point, you will have to paste in your API key again at the top!

Instructions
1.
At the top of main.js, assign apiKey to your Rebrandly API key.

2.
Under the comment “AJAX functions”, create a new arrow function and assign it to a const shortenUrl() using the async keyword.

3.
Inside the code block of the arrow function of shortenUrl create two consts:

One named urlToShorten and assign it inputField.value.

The other named data and assign it the value of calling JSON.stringify() and passing in {destination: urlToShorten}.

Please note, we will be working inside shortenUrl() for the remainder of the exercise.

4.
Add a try statement and leave the code block empty for now. After the try code block, create a catch statement and pass in error.

In the code block of catch(error), log error to the console.

5.
Inside the try code block, using const, create a variable named response and assign it to await the value of calling calling fetch().

6.
In the fetch() call, pass in url as the first argument and an empty object as the second argument.

In that empty object you just created. It will have the following three properties:

method with a value of 'POST'
body with a value of data
headers with a value of the object below:
{
'Content-type': 'application/json',
'apikey': apiKey
}
7.
Below the variable response from the previous step, create a conditional statement that the checks if the ok property of response evaluates to a truthy value.

8.
Inside the code block of the conditional statement, await response.json() and save it to a variable called jsonResponse using the const keyword.

9.
Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.

In the response field, you can paste in a URL and click the shorten button.

You should now see an object containing all the information the Rebrandly API sent back!

You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.

10.
Now it’s time to clean up the response sent back.

Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse). Run the code. Then paste in the URL again and click the shorten button.

Notice the formatted response.

Great job using Rebrandly to shorten your URL!

You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.

{"id":"9f47db2b51e3495d995e770c0224adfd", 
"title":"Link zno7kfo", 
"slashtag":"zno7kfo", 
"destination":"http://google.com", 
"createdAt":"2020-02-05T11:36:13.000Z", 
"updatedAt":"2020-02-05T11:36:13.000Z", 
"status":"active", 
"tags":[], 
"clicks":0, 
"isPublic":false, 
"shortUrl":"rebrand.ly/zno7kfo", 
"domainId":"8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"domainName":"rebrand.ly", 
"domain":{"id":"8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"ref":"/domains/8f104cc5b6ee4a4ba7897b06ac2ddcfb", 
"fullName":"rebrand.ly", 
"active":true}, 
"https":true, 
"favourite":false, 
"creator":{"id":"45e147ada6024b0f98b631b357004fbc", 
"fullName":"mmlapinm", 
"avatarUrl":"https://s.gravatar.com/avatar/4a397cd9e053f484a82621d1797d6881?size=80&d=retro&rating=g"}, 
"integrated":false}

Shorten
Your shortened url is:

rebrand.ly/qsghpde


```python
// information to reach API
const apiKey = '887c6b7788f14c14a5c42dcc0df64803';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try{
    const response = await fetch(url,{
      method:'POST',
      body: data,
      headers:{
        'Content-type': 'application/json',
'apikey': apiKey
      }
    });
    if(response.ok){
      const jsonResponse = await response.json();
 // renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);    
    }
  }catch(error){console.log(error);}
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







 1 | 1 | 1 | 1 | 1 | 1 
 --|---|---|---|---|---
  boilerplate |   | necessary  |   | narrow  |   
  Suggestions | rest  |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   
   |   |   |   |   |   

