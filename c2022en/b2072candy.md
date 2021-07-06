

```

#candy_crush #javscript_game #ania_kubow
Build your own CANDY CRUSH using JavaScript, HTML and CSS | Ania Kubow
36 938 просмотров•7 мая 2020 г.

1,4 ТЫС.

12

ПОДЕЛИТЬСЯ

СОХРАНИТЬ


Code with Ania Kubów
67,4 тыс. подписчиков
Hey everyone,  hope you are doing well!

In this walkthrough, I show you how to build Candy Crush in pure JavaScript, HTML, and CSS. 

This walkthrough is great as it will show you how to drag and drop elements in JavaScript. This is a very popular element in building many JavaScript projects.

In addition to this, we will also be practising using inbuilt methods such as:

- addEventListener()
- setAttribute()
- setInterval()
- some()
- every()
- forEach()
- includes()
- contains()
- add()
- remove()
- createElement()
- appendChild()
- push()
- continue

And many more.

I would love to see your finished game to please do tag me on YouTube, Twitter (@ania_kubow) or Instagram (@aniakubow) :)

I made the background myself, so if you want to use it go for it! I don't mind :) You will find it in the link below.

For images or my final code, please see my GitHub here: https://github.com/kubowania/candy-crush​

#candy_crush​
#javscript_game​
#ania_kubow​
Расшифровка видео


hi and welcome to my walkthrough in
which I'm gonna show you how to build
your very own game of candy crush 

this
game is gonna be super simple 

I say
super simple as we're not going to be
focusing too much on styling 

this is a
JavaScript walkthrough very much gonna
be focusing on the logic of the game 

I
am doing this so you can take the game
start up as you want truly make it your
own 

this game has a lot of potential
especially with the drag and drop
movements 

we're going to be doing 

so I'm
excited to see what you guys come up
with in this walkthrough 

I'm going to be
showing you how to create a board
randomly generate candies all over the
board
switch out colors of candies on the
board drag and drop candies check for
matches check for valid matches so check

that the row of candies doesn't go off
into the next row move all the candies
down if you get a match and generate new
candies by the end of this walkthrough

you should have also got to grips with
inbuilt JavaScript functions such as
every sum for each includes
set attribute and many more 

I would love
to see your finished games so please do
share them with me on youtube or Twitter

my Twitter handle is Anja underscore
Kubo or Instagram whatever okay 

so as
always let's make sure our javascript
file and style sheet are linked up
properly using these script tag and link
tag respectively 

if you have put the two
files in the root of your folder make
sure that reflects and the path you put
in your tags 

if you are not sure what
any of this means please 
do watch my
video that I've linked as a card here 

I
am putting my script tag in the header

as I want to use a Dom event listener on
my JavaScript file 

this is a choice that
I'm making on my preference as opposed
to putting the script tag in the footer

now we need to go ahead and put a div
tag here and give it a class of grid

this div tag is where all the magic
happens 

so let's give it the respect and
deserves and style it up to look like an
actual courage for this 

we flip over to
our style sheet or CSS file 

now to pick
out our div element 
that we gave a class
name to we get the name 

we also put a
dot in front of it
this means class

I have pre decided that when my grid to
be made up of 8 by 8 squares

I thought 70 pixels squares are nice so
70 x 8 that's 560 pixels 

let's give our
grid a height of 5 to 60 pixels and a
width of 560 pixels 

as I've done this
many times 

I know that if we want to put
divs inside the squared the divs will
appear stacked over each other 

we used
to make them snake over each other row
by row 

so we need to do this by using at
display flags and then flexwrap

so that they break when they can't fit
in the grid we have made and start a new
row 

I'm also gonna give the grid a
background color just so we can see
what's happening in our browser 

let's go
ahead so right click on HTML file to see
this in our browser 

okay call a blue
grid if you inspect the page 

you will
see that information has been passed to
our browser 

now let's our CSS file what
we want our future squares to look like
as we said 

I'm pre decided I want to be
70 by 70 pixels big so height 70 and
width 70 now 

let's create some squares
go my grid using JavaScript 

you will see
here I have already put in my Dom event
listener as part of my boiler plate 

to
set up I will now be writing all my
JavaScript in this event listener for it
to be picked up on my script tag which I
placed in the header of my HTML as
mentioned some people liked with a
script tag on the footer of the HTML and
skip the Dom event listener the choice
is up to you 

this Dom event listener is
essentially saying in laymen terms that
I want all of my HTML file to be read
before loading this javascript file and
is a more foolproof way of making sure
that 

these events happen in order now
using an inbuilt method called a query
selector 

I am telling my JavaScript file
to look at my HTML file and find the
element with the class name of grid
indicated by this dot and save it as
constant grid 

we are doing this 

we can
reuse this line of code over and over
again just by typing grid

let's also tell our JavaScript file 

we
want our width to be 8 from now on let's
store that as a
and as it won't change 

so the first
thing we're going to do is show you how
to create a board using javascript 

I
will do this in a function 

I am choosing
to call create board now using a for
loop 

I want to imagine our future grinch

we decided it was going to be 8 by 8
squares 

so let's use width x width to
tell our JavaScript that this is the
syntax for a for loop 

what we are doing
here is looping over something 64 times
incrementing by 1 each time from 0 now
every time it does loop over 

we want to
create a div using an inbuilt method
called create element 

we are creating a
div element 

I'm going to call this
square for our HTML file 

next we need to
put that square into a div with a class
of grid 

we do so using another input
method called append child 

we do so by
passing through the newly created square
into a grid constant like this

lastly each time we create a div and add
it into a grid 

I also want to store it
in an array for us to work with 

so let's
create an empty array first called
squares like this 

and now as well as put
a square and their grid 

I also want to
push that square into my array that I
called squares 

we do that using an
inbuilt method called push 

now that we
have done all this 

let's see if it works
by invoking the function like this 

so
save the page go over to our browser and
yep it has works 

if we inspect the page
we can now see all our divs happily
sitting in our garage

ok let's flip back now 

I'm gonna start
off by going an array of all the candy
colors 

I'm gonna work with 

so I'm going
to call those candy colors as they do
not change 

I'm gonna put them in a
constant so there 

we go red yellow
orange purple and green

now let's go back to our create board
function instead of just creating the
square after the square has been created

I also want to give it a candy color 

I
also wanted to be random to get a random
number from our array 

we need three
input methods 

we use math.random and
multiply it by the arrays like this 

now
we want to make sure the number 

we get
back as a full integer for this 

we're
going to use math.floor to round this
number down to the nearest full number

and there we go 

we now have a random
number from zero to five 

we are starting
at zero as Index start count at zero

this is important 

so if you're not
comfortable this yet please make sure a
note to research into this later 

once we
have a random number 

we want to pass
that through our candy colors array to
get a color and assignor to the square

so let's get the square and using style
background color like this 

we want to
assign it to that random color here 

we
are getting our candy colors array and
passing through a number to it 

so say my
random number came out as 1 

I'm gonna go
into my array and get the item with
index number 

one in this case is yellow

so my square will not be yellow okay

let's go into our style sheet to get rid
of the blue background 

we gave our grid
to see if this has worked remember what
we have written is that now each time
you create a square 

we are assigning it
a random color from our array 

okay let's
say well the files flip over to our
browser 

hit refresh and great we have
our board 

let's refresh again just to
make sure the colors are coming up
randomly each time 

awesome now that we
have our board let's move on now each
time 

I create a square 

I also want to
make it draggable 

this is that we can
drag candies into different locations
around our edge using the import method
set attribute 

I add draggable like this
and make it true 

let's say this and see
if this worked hit refresh and great
each square is now pluggable 

I'm going
to do one more thing before we move on

and that is given ID to each square 

this
is so that when we move a square or drag
one you know 

exactly which one in our
grid 

we are moving this is going to be
super useful for later 

so again using
setattribute 

we write this and pass
through ideas of string 

and I as we are
looping over with an I so now you shall

we loop over this 

we're gonna give it a
number from 0 to 63 y 63 

this is because
we have 64 squares in our grid of
indexes from 0 to 63 

ok cool we are now
done with creating the board 

the next
thing we need to do is concentrate on
the draggable feature 

now to drag the
candies I actually got taught this a
while back 

and it invokes event
listeners that listen at each stage of
dragging 

each stage of the dragon
consists of five events 

this is cool
especially for our styling later as it
allows us to add styling and timers each
of the five stages 

I'm gonna do the bare
minimum for us to get to the game going
and leave these go wild on the styling
later on 

so here I'm writing out each of
the five event listener events 

the first
one is drag start a scene in the green
string so for each item or as 

I'm gonna
choose to call square + y square x'
array 

I'm adding an event listener that
will listen out for an event 

the event
is green here and in bolt then if the
event is triggered

I want a function to get invoked the
five events 

we have are drag start drag
and drag over drag enter drag leave and
drop remember these are in built once 

we
have all the event listeners attached to
each square on our grid 

we need to write
functions for what happens with your
triggers 

so let's do that now all five
of them 

I'm going to put a console log
in each one 

just so I can show you
exactly what is happening

now it's also pass through the ID of
these squares being listened to we do so
using this ID 

this will pick up the
element 

it's being listened to 

and it's
ID which we set using the set attribute
method 

just so we are clear on what is
happening and wasn't gonna write the
event happening in the console log like
this 

okay I'm just gonna move drag end
and put it towards the bottom of our
file 

just so I can show you what is
happening in order

once we are happy with this 

let's click
Save
now go to your browser and refresh 

now
when we pick an element to drag you will
see exactly what was happening in our
console log 

this is super useful

okay great now back to our javascript
file 

let's focus on the drag start
function as this is the first event 

I
want to say the color we were decided to
pick up and drag 

let's store this as
quite literally color being dragged now
in our drag start function this style
background color 

I'm gonna save this
into a variable 

I'm doing this because I
want to use it again 

let's see if that
has worked using the console.log

okay great we can now see that we are
picking up the color of the square 

we
are dragging

if we click another one that works too

now let's focus on the drag edge so and
candy crush 

when you select a candy to
put into another location you actually
first swap it out with another candy in
that location so the Candy's essentially
swap place 

we can do this in JavaScript

we just need to store another candy
color 

so let's do that
in the drag drop function 

if I drop a
element in here 

I want to store the
original color in that square 

so let's
do that let's store this color as color
being replaced 

so again using this style
background color let's store that up
here too

so let color being replaced 

okay great
we now have the colors stored to replace
them in the correct squares 

however we
need to rely on the squares IDs that we
set 

so I'm going to call this square ID
being dragged in our drag star function
and assign it this squares ID 

we need to
make sure this is a number so using an
inbuilt method called pass int 

we are
doing just that
so now as well as the colors 

let's store
the IDS of the squares being selected
and drugs 

and the square we are dropping
our candy in all right 

so square ID
being dragged and to our ID being
replaced now in the drug drop is where
we assign the ID 

we need to make sure
this is the number by using the mbot
method passed int so parse the IDS
through that method and store it again

okay now passing through the ID of the
scribing drugs into the squares array 

I
want to add this squares color so just
to be clear 

this will give the original
square being dragged this color after we
have draw
in a new color in here

let's say what we have done so far to
check if this is working so head over to
our browser hit refresh 

you will see
that if I drag a square and let it go it
goes back 

now if I drag a square and
drop it in another square it doesn't get
dropped this is not what we expected

right this is because like I said there
are five stages that we need to account
for 

let's skip over the drug over and
drag enter event 

for now I do this using
be prevent default so using an ephah
event 

we pass through an event into the
function and using prevent default 

we
prevent it from doing a c4 action if you
do want something to happen while we are
dragging the squares ever each other or
as it enters a new square 

you are free
to go back after this walk through and
add some animations and stylings and
whatever 

okay now let's flip back and
refresh 

and great now when we drag a
Square and drop it into a new one 

we
change or the original square into a
color being replaced 

we are one step in
the right direction

however the square we are dropping into
stays the same color 

let's fix that so

and the drag drop function 

we need to
make the color of the square change into
the color being dragged 

let's do that
like this 

okay great now in candy crush
we can switch out your candies 

however
these two candies NewsView directly and
a square above below to the left or to
the right of our current candy 

we need
to tell our JavaScript this and define
what is a valid move so what is a valid
move 

let's define this and store it

let's first get an array of all of our
moves for any square being dragged 

I'm
going to call it valid moves
so Arthur 

solid move is any square being
dragged ID minus one 

so say it's ID is
67 we are saying 

we are allowed to
switch out with a square with the ID 66

now let's do the same with a square
visually above our chosen square so
exactly one width back in our array so
this I am square with the ID 59 as our
width is defined as H

I'm just going to tie this up a bit
giving them each their own space 

do the
same for square 68 so our chosen ID plus
1 and square 75 so I chose an ID square
plus 8 this time this is the square that
is visually appearing below our square
on the garage 

okay now we have all our
Valley News live Allen move using an
input JavaScript method called includes

I am also going to pass through a value
here 

so what I'm saying is that if the
number passed through so the square ID
being replaced is included in our value
moves array this statement is true 

and
we store the billion of true for our
value news variable now using an if
statement if the ID of my squares being
replaced exists 

as we want to make sure
that this is only going to happen if my
square is being dropped in another
square and not if it's going off the
grid and so double and if this move is
valid 

we execute the block of code 

we
need both these variables to be true or
truthy in order to execute this code 

so
if they are true we clear the value of
square being replaced ready for a fresh
start if however there is a square that
the dried square can be dropped in 

but
it's not a valid move indicated by this
bang here so in other words 

it's a
square that is too far we execute
another block of code 

we can't go here
so we want to return the square being
replaced with original spot by simply
giving it back its color
you

we then also need to do the same for the
original square so using the same method

we get the square D being dragged pass
it through our squares array and using
star background color assign it the
color being dragged 

if none of these
statements are true so the square 

we are
dragging has nowhere to go and is
outside our grid 

we simply add the color
being drive back to its original space

okay great all three scenarios are now
covered 

let's save and refresh our
browser 

great you will see the square
switching other colors 

you will also see
are squares return back if we try and
drop it outside of The Grudge 

everything
seems to be working out for us so far in
candy crush if you get a matching row or
column of three four or five three
things happen the candies disappear 

all
the candies in the grid move down into
free space 

and we gain points in the
actual game a few more things happen
like animation wires 

but as I mentioned
this is a JavaScript walkthrough so
styling 

and we leave that up to you at
the end 

let's get going on the first
part checking for matches 

I am going to
concentrate on finding a row of three
fast as we will use this logic to find
matches for the rest 

let's call our
function check row for three in our
function 

and we're going to fast aside
how many squares we need to loop over
exactly 

this is because if you think
about our as compiled of three squares
if we check for three squares starting
from index 63 in our grid this will
break the game as there's no squares
after a square index 33 

using maths we
figure out that the last square we could
possibly loop over is 61 so that the
loop would check 61 62 and 63 for a
match of three colors 

now let's define
our row so if we used indexes to draw
our row it would look like this

and I followed by an I plus 1 and an I
plus 2 

each time we loop over this we
are swapping out the I for a number from
0 to 61 

now each time we loop over we
also when a grab the color the first
square is an assign it to the decided
color 

let's also define what a blank
spaces as we account for this when we
are looping so it's blank
if the squares background colors empty
so DV equals empty this statement is
true 

now that we have these two things
to find let's get to writing our logic
so you
if statement let's get the row of food a
row using a nimble method called every
if every index in our three array deeply
equals the decided color so the color of
our first square 

we want to execute some
code
so if we find a match we want to take
the row of three array and for every
index in it 

we want to give it an empty
background color 

great now we also said
we want to add a score 

let's make this a
score of three points each time 

we find
a row of three 

let's scroll to the top
of our javascript file and add this as a
global variable to our file 

we will also
set the score as zero to start that
makes sense 

right great
now let's scroll back down and invoke
this function 

we wrote to see if it
works 

let's go ahead and save this
refresh the browser 

and amazing we can
see here that one row has been deleted

now we want to actually invoke this
function 

constantly while we are playing
the game at the moment there's only get
some vote 

once we start up the browser
meaning that if we get any matches from
now on they will not be cleared 

we can
do this using a set interval and
grabbing our window 

so with us here I'm
getting our window
adding the M up method of set interval
turret and saying that any code in this
function 

so in my case the Czech refer
three function 

I want to invoke every
100 milliseconds 

let's say this and
check it in our browser 

now it's
important to note that this will keep
running indefinitely until you close
your tab 

I am gonna keep it like this

but if you want to take your game to the
next level and also you know for best
practice 

I will suggest adding a button
to activate this set interval 

and also
maybe add some pause and stop
functionality 

I do this son of the game

so if you want to see how to do that
please do check out my Tetris game for
example 

ok now that that works 

let's
carry on okay 

now that we have that I'm
literally gonna copy/paste this to make
our check column for three function with
a few changes 

of course so let's start
by changing the name of the function
change the pseudocode for good measure
change the name of the array here here
and here
change when the loop stops 

so as these
are columns the last square 

we can check
for a column of 3 is square 47 change
the array itself to be a column using
width and width or multiply by 2 

and
change the name of the function here

when we invoke it we also now add it to
our set interval

okay that should do it 

let's head over
to our browser 

okay fantastic
it looks like our game is working 

as we
wanted to you can see here that the
columns and rows are deleting if they
find a match 

now I'm trying to find an
example here even though it's hard to
come by 

but what do you think happens
when a row starts at the left or right
hand edge or half of its body is in the
right hand column or edge 

it will appear
to be broken up into 

but still valid as
we haven't told our JavaScript that this
is not a valid move 

we need to fix this
as this can only happen for rows 

let's
go back into our check row for three
function back in our function 

let's
define or what is a valid move again

let's get an array of all the indexes

that are not valid 

what I am typing here
is every index 

I do not want my row of
three to start at 

so I don't want to
start it in like six otherwise a row
would appear on the other side of my
grid same for index seven and so on 

and
so on all of these are not valid for me
to start my checking for three are so
once again 

let's get the array and use
the includes input javascript method 

and
then we pass through I so the number we
are looping if this number is included
in the array not valid 

we want to skip
it

 we do so like this using continue 
 
 and
that's it let's check this in our
browser 

let's save and hit refresh 

it's
hard to tell but we have now fixed our
problem of rows of threes splitting up
and still counting as valid rows

remember we do not need to do this for
columns as we already have stopped our
columns from going through the bottom by
stopping the loop at square 47 the only
thing 

we do now are copy exactly what we
have done for rows and columns of three

but do the same but checking for four
this time in my code 

I'm literally gonna
copy and paste the check row for three

and check for column of four function 

I
mean you probably shouldn't really do

this you should type each one out as
copying basically really dangerous
especially when you know just
probably places something really similar

but hey I feel comfortable with it so
I'm just gonna go for her 

okay so this
is my piece of code I appreciate it's
hard to tell

once again I'm going to change the three
here to afford the pseudocode rename the
function change the array name change
the loop to stop at 60 and add an item
to the array to make it on row four 

I'm
also going to update the not valid index
errors include indexes starting at five
and so on as now each row needs to be
checked one square earlier for each row
change the array name here change the
score to add for change the Iranian here
and change the functioning to check for
a row of four and finally you change the
column of three copy version to column
of four in the pseudocode

check the function name change that make
the array an actual column of four
change the name of the array here change
the school to add for change the name

here being in the function to say check
for color for now we add these two new
functions into the set interval 

I want
to check for four before checking three
as we want to get rid of the big ones
first

okay let's save that refresh the page

I'm getting an error message 

I told you
copy and pasting was dangerous

what's it saying it seems that why a Rea
name has not been defined in our check
column up for four 

let's go fix that now

oh yes I forgot to change the a rare
name 

we were still using the old one
here 

okay that's not fixed 
let's go
ahead and save and there we have it 

I am
actually going to leave this here 

if you
want to go ahead and add a check for
five please do 

I feel we do not need to
go over this because it's simply a case
of copy and pasting 

hopefully you get
the idea now of what we need to do 

and
what needs to be changed in order to
check for five

let's now instead focus on how to get
the candies to move down if some have
been cleared 

and also how to get new
candies to generate 

we need to write a
function that will move all our candies
down if a certain condition is met 

so
let's do that before checking any of our
matches here in our code 

let's start by
writing out what we want to happen now

I'm going to choose to call my function
and move candies actually 

let's call it
move down 

I'm going to use a for loop
here again to check all our squares up
to square 55 so essentially the first
seven rows 

I'm going to do this as I
want to check the squares below each of
the indexes for an empty square so in
this 

if statement I am getting at the
index number plus the width and passing
it through our squares array once 

I am
in that square 

I want to check that
squares background color if that square
has an empty background color I want
this statement to be true 

so what we are
saying here if the square directly below
our square we are looping has an empty
background color 

we want to execute the
following code 

we want to essentially
give our squares background color to it

so
we are simply using the style background
color to do this 

I'm passing a color to
the empty square 

now we want to remove
any color from a square making up here
empty 

the final thing we need to do is
put it in our set interval 

so let's copy
this scroll down into our set interval
and place it there 

I'm gonna put it
before the others just so excuse first

okay now let's save and refresh our
browser 

and great we can see that the
squares are all clearing 

as we get
matches 

now we do one last thing and
that's generating new candies to show up
in our first row 

now let us think about
the logic here 

I think it's safe to say
that if the first row contains an empty
square 

we want to fill it with a colored
one 

and we keep doing this until the
first row is not empty anymore 

so let's
do it 

let's define the first row fast

I'm simply going to write an array
putting an index at 0 to 7

now to check if something is in the
first row 

we do this get the first row a
touch includes to it and pass through 
I
now if I is in the first row 

row the
statement will come back as the boolean
of true 

so if is first row comes back is
true and the square as a background
color of Mt and this is true 

we need to
do something 

we use a fill it with a
color using this line 

we wrote before we
get a random color this should be
familiar to you 

it is literally the
exact same long you read before

I know I call it a random color but its
secondly a random number from my candy
colors array so a number from 0 to 5

once we get a random number from our
candy colors array 

we need to pass it
through our array to get a string of a
color name 

we then assign it to our
square and the first row

cool let's look at this in action 

let's
refresh an amazing that has now worked

now let's get the score to display 

as we
are collecting the school 

they're not
really doing much with it at the moment
for this 

let's decide we're gonna make a
div with an ID of score and call it a
score dislike 

we will need to add this
to our HTML file 

but for now let's just
add it in our JavaScript 

first so let's
scroll down to every time we add a score
using the constant 

I'm going to use an
inbuilt method of inner HTML 

we then
assign the school to it 

I'm now going to
add this all for about checking the
matches functions 

after every time we
add to our school's variable 

once we
have done that 

let's flip over to our
age shimmer in our HTML file 

I'm
actually going to add a deer with a
class of scoreboard first 

this is so
that we can start a board where we want
our school to show up inside 

I am
placing two h3 tags one with the word
score and one with the ID of score 

this
is what we sign a Const of score display
two in our JavaScript 

now let's save and
head over to our browser 

okay great we
now have a fully functioning game of
candy crush as mentioned this is a super
simple version of the game 

I have not
added in checks for matches of five
please feel free to do that if you want

also and the official candy crush game
we have a lot more funky stuff going on

I hope that by getting to where we are
so far you are now countable and other
tools to go ahead and add all these
funky features to your game 

hopefully
you can also create your own and hey the
world's your oyster 

I am going to show
you one more thing and that's how to add
images each candy color so if you
understand this 

please do carry on let's
go ahead and do that 

now so let's flip
back to our code
in this list of candy colors 

here I'm
gonna want to replace them with images

now I'm going to create a folder here to
drop some images 

I have pre-made
if you want these images I'm going to
share them all with you 

I'm gonna put a
link to my github in the description or
you know you can feel free to also make
your own 

I have made each image 70 by 70
pixels so that it will fit in each of my
squares perfectly once 

I have made this
folder 

I'm simply gonna drag all my made
images into this folder so here are my
images

I am simply selecting them and dragging
them into my project folder if I click
on this images folder 

now you will see
all my image files 

now I'm gonna copy
each relative path of each image like
this note 

I'm using the one URL 

I'm
placing each part in brackets like this

you need to get the exact path name for
this to work

now because we are not using the
background color anymore 

we are using
background image 

we need to find all the
instances of when I say background color
in my file
and replace them as M was a cool finder
in place function that helps me replace
each one without missing any 

you can see
here I have used the word 30 times 

I'm
gonna go ahead and click replace for

okay great let's go ahead and see if
that has worked and amazing there are
all my candies 

I obviously serve a whole
bunch of console looks of my code one
thing 

I would suggest is definitely
clearing this up before you publish your
code anywhere just for good practice 

now
I'm just gonna show you something that I
baked a little earlier this is my style
version on my candy crush like game 

we
mentioned earlier in the walkthrough
that a button starting and stopping this
game 

would be wise as we are essentially
invoking the functions every 100
milliseconds so adding a button would be
best practice if you want to take this
game to that extra level 

so that's it
thank you very much for watching 

as
always I would love to see your finished
games please do tag me on YouTube
Twitter Instagram whatever 

I'd love to
see what you've built how you taking the
game made it your own taking it to the
next extra level 

so yeah enjoy and
thanks again





```


[Build your own CANDY CRUSH using JavaScript, HTML and CSS | Ania Kubow](https://www.youtube.com/watch?v=XD5sZWxwJUk&list=PLRD1Niz0lz1uR4W3ms6DygWMjXW-6hDB_&index=19)   
[candy crush](https://codepen.io/mlapin/full/JjWPqYO)   
[]()   
[]()   
[]()   
[]()   






