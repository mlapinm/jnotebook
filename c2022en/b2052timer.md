```
hi today I'm gonna be showing you how to
build a simple counter timer with a
button in pure JavaScript HTML and CSS

there's gonna be a really simple one

it's gonna take you in less than five
minutes 

so if you have viruses there
please watch my video
any questions below 

I will answer this
as well and but for this 

I have started
out by setting up the project like so as
always make sure to link your JS file
and CSS file to your HTML file is in the
script tag and link tag like this 

okay
so in your HTML we need to write some
code that will render the count down in
our browser 

we will do this using the h3
tag and a span with an ID 

I'm going to
hard-code 10 as the starting time of
time left

I'm actually also going to add a button
here with an uneventful this will allow
us to control when we start the
countdown rather 

than the countdown just
starting when we open the page in our
browser 

so now let's flip over to our JS
file and add some functionality to our
button and in our HTML 

first let's pick
them out of the HTML using document
query selectors and put them in the Dom
event listener like this

note 
the hash is to speak to an idea and
is unique to that one element
you

now let's define time left on this
occasion 

I'm going to set time left is
10 

we will need this to write our
function 

now that we have picked out the
adder and the button and defined birth

let's write our function to give on
functionality 

let's call our function
count down 

you will use this in built
set time and set interval to give the
function a time loop 

we will make the
function loop every thousand
milliseconds and what we want our
function to do is take away - 1 - the
time left variable every thousand
milliseconds 

we do this later okay 

now
using in that HTML let's make our time
life variable visible in our browser
like this 

okay so if we simply left our
function like this the countdown would
work but it would not stop it will
continue forever 

to stop this we will
write an if statement if time left is
equal to 0 or less than 0 

we are going
to clear the interval and set the
timeliness to 0 

this will leave our time
left as 0 and stop the counter from
appearing of going into negatives such
as minus 1 minus 2 and so on 

and finally
as ideally we would want the function to
run on the click of a button 

rather than
on the page load we're gonna add an
event listener to start our game like
this and passing through the countdown
function on a click

and now have it your very own countdown
button

that's watching my video as always 

if you
have questions please comment below and
thank you








```

[Build your own COUNTDOWN TIMER in 15 lines of JavaScript code](https://www.youtube.com/watch?v=vSV_Ml2_A88)  
[Countdown timer](https://codepen.io/mlapin/full/YzNoerz)  
[]()  
[]()  
[]()  
