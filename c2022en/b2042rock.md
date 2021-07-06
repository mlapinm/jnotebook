


```
okay and welcome to my second ever video tutorial 
this tutorial were actually gonna build a really simple game of
rock-paper-scissors 
I mean like super simple using pure JavaScript HTML CSS
it's literally gonna take us like three minutes 
so I hope you're ready 
I've got the styling out so again if you want to
go ahead and add that or check out my
github what I've done feel free to do that 
this video is really cool because
we're going to be using a lot of get
element by ID and query selector 
so if
you haven't used them before definitely
watch this video 
so let's get started
first we need to set up our feature with
a JavaScript file HTML file and
stylesheet 
I've named them up Jess
in the exhibition out and style.css 
as always make sure we link the javascript
file to the HTML file for setting the
script tag under the body do the
simplest 
I'll cheat using a link tag in
the header like 
so so we're gonna head
and set up the HTML for you as you can
see I've given the h2 tag below computer
choice a unique ID of computer choice
but left the inner HTML is blank 
this is
I can later display results in it from
our JavaScript file 
I will do the same
for the user choice or your choice and
also the same for results lastly 
I added
three buttons for the users react with
these three buttons will be how they use
and makes his or her choice of rock
paper or scissors to playing with
against the computer 
I've added the class name of choices here and will for
a J's file to know which buttons 
we're
talking about when you refer to the
possible choices for the user
okay now that hTML is setup let's flip
over to our JavaScript file we do just
set the user chosen and the
chosen as null like this now let's write
the logic of rock-paper-scissors and the
results we will get in any situation you
write this little function called
results right so this is our saying that
whatever is set as the user chosen
computer chosen if there's two equal
then the result returned is a tie
otherwise we will need to write a bunch
of other else ifs so he we can see that
computers and if computer chosen it was
rock and user chosen equals paper then
the result is that the user loses so
I've actually written it all up already
because it's quite lengthy but feel free
to pause and have a look at this in more
detail 

okay we will set this these
results as a result of function and
result
so whatever returns as a result will be
set as the variable result next 
we need
add the following so what we are doing
here is starting to use the get element
by ID in order to pick our ID names we
used in our HTML file and set them as
constants for example you will see that
the ID computer choice 
I have named here
as computer choice so we can use it
further down the line rjs file ID and
class are pretty similar but it's super
important to know which one to use ID is
unique in a page and can only apply to
at most one element or class selector
can apply to multiple elements using
math.random than math.round we are able
to get a whole integer for the next
randomly selected option from the
computer 
now using the two constants I
have written we can write the generated
computer choice
I began this will be an if-elsif
statement the function
cuz like hopefully 
this should be pretty
straightforward it's the same logic as
we used
okay
okay now we need to select the user true
so again constant use a choice document
get an ID we will also need to select
all the choices so you'll use query
selector all for this when years
increase elector 
we need to specify it
as a class or ID on this occasion
because we want to pick up more than one
element 
we are using query selectable
and choosing choices as the class name
we need to tell the computer this by
putting a dot in front of it just like
keyword to style in the solution next we
will use for each an arrow function and
I know that listen up with all click to
or just click and sorry like to write
what happens if any of the possible
choices are selected 
all right this is
quite cool because our base are gonna
use everything all you written above and
just walk it in here 
first we just put
user chosen so whatever we target the
IDS event listener whenever the user
chooses the button will get chose the ID
name will then get allocated to user
chosen next 
we walk and they generate a
computer choice so the computer choice
ah and then we invoke the results so the
results using the user chosen computer
chosen from the two above 
then we
obviously want to display this visually
so using inner HTML we can then display
the user choice and results the computer
choose and result and our result
it's not work let's see why okay so I
got the idna wrong it's result not
results let's quickly to that
and there you have it you can now play
rock-paper-scissors against the computer
as you know javascript is read from top
to bottom if you're getting undefined as
some of you or your computers choices
makes you have the computer chips and
unusual chosen defiant for the results
function as we need to get it to get the
results to make sure this happens put
your results function at the bottom of
your JavaScript for it is good practice
keep all the variables as well I can
sense a little you file as well so yeah
make sure to do that analytics you can
see that's what I did in our tutorials
it's just good practice so yeah at the
moment it's just a simple game right so
you need to refresh the page if you want
to start another game but there are
plenty of cool ways to improve on this
simple pure Java scripts in
rock-paper-scissors including adding a
reset button or a school count once
again I hope you enjoyed my video if you
have any questions in regard to the code
please leave them below
I know make sure to get back to you with
help what time is really if you want to
leave some feedback feel free to do so


```


[rock-paper-scissors](https://www.youtube.com/watch?v=RwFeg0cEZvQ)  
[github](https://github.com/kubowania/rock-paper-scissors-x3/blob/main/rock-paper-scissors-examples/rock-paper-scissors-example-1/app.js)  
[3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)](https://www.youtube.com/watch?v=RwFeg0cEZvQ&list=RDCMUC5DNytAJ6_FISueUfzZCVsw&index=1)  
[]()  
[]()  
[]()  
[]()  
