

```
hey and welcome to my mind sweeper
walkthrough 

I am so excited to share
this one with you guys mainly because I
actually explain how to play minesweeper
which is something that I actually
didn't know how to do before 

and we also
get to grips with one major theme
recursion but what is recursion 

let's
switch over to children's mode to
explain ah hey Kodaka how's it going no
hey Enya oh good here how's your video
doing very well thanks 

just teaching of
these guys some computer science 

I think
the audience has a question for you 

Wow
well in the least amount of words
recursion is a function that calls
itself until it can't do anymore 

that
calls itself that's right
ah you mean a little bit like this here

we have an ice-cream but I don't like
this ice cream is too small in fact I
know the exact ice cream that I want it
is blue with a flower on it this is my
base case 

now I can apply a function to
this to check for my ice cream and say
the next five surrounding shops if this
ice cream is not the exact one 

I want we
will keep going to the recursive case of
the function meaning we will check the
five stores of those five stores we just
checked until we find my ice cream 

and I
start throwing a tantrum so that was a
simple explanation about what recursion
is all about 

let's have a look at it in
code here is how we will be using
recursion in order for our grid to check
neighboring squares 

what is happening
here is when we click on a square we
have many things that can make us break
this recursion as you can see here by
all the returns if none of these are met
we then go to another function called
check square where we will check our
neighboring squares on the board once
again

 we will then apply the click
function to each square we have just
checked
causing the squares to appear to fan out
like this until a base case is met 

don't
worry if that was a lot for you to take
in it should be this is what the
walkthrough is for 

just think I'm
smuggler fear when we get to the end and
get it 

we are gonna go through this
recursion step by step as we build our
minesweeper game 

for those of you 

who
have never played minesweeper


minesweeper is a simple grid based game
in which you have to find all the hidden
bombs on a board 

if you click on a bomb
then the game is over 

however if you
click on a square two things will happen
if the square is next to any bombs and
you click it 

it will show you the amount
of bombs in the eight surrounding
squares around it 

if you click a square
and it's not a bomb and it's also not
next to any bombs 

we want to clear all
the little squares until we finally hear
a square with a number 

you win by
placing flags on all the squares that
you think have a bomb in them 

we will
also be using the inbuilt JavaScript
method of array and fill which is pretty
cool 

as I don't think I've actually used
them in any of my previous projects as
always please do finish you're finished
games with me 

I'd love to see how you've
styled them made them your own 

as you
know this is a JavaScript walkthrough so


I'm not gonna be focusing that much on
styling that part is totally up to you

once you have finished it or if you are
stuck please do reach out to me on
Twitter YouTube Instagram 

I'm gonna put
my socials here or here I don't know
where yet so yeah 

I'll just feel free to
reach out and let's do this
minesweeper 

as always 
let's make sure we
have our project set up correctly with
our script tag linking our JavaScript
file to our HTML file using the
JavaScript files relative paths 

we do
the same for our CSS file using a link
tag like this 

as we have both files in
the root of our project the relative
path is simply each files name followed
by their file extension 

if you are not
sure any of this means 

I've done a
simple explainer video on how to set up
your project in your code editor along
with preferences 

that I choose for
writing projects definitely check this
out if you haven't already

now I'm gonna start by adding a div with
a class of grids 

this is where all of my
game it's going to visually populate
which is pretty cool 

we're gonna be
appending divs into this div using our
JavaScript 

I'll show you how to do that
a little bit later 

now let's tell the
stip up so we can see what is going on
flip over to your style sheet 

and add
the following so I have predefined on my
mind strip a grid 

it's gonna be ten by
ten squares big and each square is gonna
be 40 pixels height and width 

let's
account for that in our grid so 10 times


40 is 400 pixels let's assign that to
our height and width like this 

now we
also need to use display flex to make
sure our squares appear in line not
stacked over each other like the default
arrangement of divs 

we also need to do
one more thing and that is make them
wrap over each other so there they fit
in the grid 

we have just made and once
they do not they wrap over each other
like a snake 

let's also give it a
background color of gray for now so we
can see what we are doing while we are
here 

I could actually also style any div
that goes inside my grid so the div with
a class of grid 

this is how we tell our
CSS file to do this by writing grid and
then div after like this 

I am saying I
only want to style the divs inside this
grid div or other divs will be
unaffected by this 

I'm gonna give each
div a height and a width of 40 pixels

these are now going to be our squares

that we discussed earlier 

let's see how
this all looks so far by navigating to
the index.html file and left clicking it

we select open and browser from the
drop-down 

this will essentially open our
path in our default browser and there we
have it we can see a gray grid 

as we
intended 

I'm just gonna make it a little
bigger so we can see 

what's going on now

I'm going to inspect
Paige using the left click again 

we
select inspect from the drop-down once

we have this we can now inspect all the
elements so if we never get over to the
grid you will see we are picking up the
div with a class of grid at the moment

it's just one gray square we have as we
haven't added any of the divs inside to
it

ok now great let's flip back to our
project 

we need to start picking out
these elements our JavaScript can talk
to them

flip over to your app GS file 

now the
first thing we're going to do is add a
Dom event listener to our file 

we do so
by getting the document and adding an
event listener then passing through Dom
content loaded like this 

all our code
will now be written in between these
curly braces and parentheses from now on

we are doing this so that we can make
sure all of our HTML file is loaded
before reading this javascript code 

some
people like to do this by placing the
script tag at the bottom of their HTML
files so after all the HTML code 

but
this is my preference as I feel it's
more foolproof both ways are really
correct 

now we have that let's pick our
grid using constants as this will not
change 

I'll use document and attach the
EM belt JavaScript method query selector
to it in it 

I pass through the class
name of grid please note 

I am using a
dot to tell the JavaScript 

I'm looking
for a class name now the JavaScript
knows to select the div or the class
name of grid from my HTML document and
call it grid 

so that we can use it later
on our JavaScript as grid 

lets also tell
our JavaScript that our grid is going to
be 10 squares width 

we will be using
this variable a lot on the walk through

we are now going to write a function to
create at the board 

I have used it quite
a few times in my other web-based game
walkthroughs so if you're familiar with
it 

this is great practice let's call the
function create board 

now the first I'm
going to do is use a for loop to loop
over a blah
of code executing it as many times as I
want as I want to create a hundred
squares to make up my grid game 

I'm
gonna make this loop 100 times so as
long as I is smaller than a hundred so
width x width gives us a hundred 

I want
this block of code to keep repeating
itself incremental B by one each time so

I repeat itself from 0 to 99 going up by
1 each time indicated by this eye and
the increment operator or + + as you may
or may not know when we count times in
an array 

we always start with the zero
index so even though this is gonna keep
going until it hits 99 it will execute
the code 100 times so what do we want to
do a hundred times well we want 100
squares right using the constant of
square 

I'm going to use document and an
import method called create element to
create a hundred divs in my HTML
document every time 

I create one square
I also want to give it a unique ID 

I do
this by grabbing the square 

I just
created and using the inbuilt method of
attributes passing through the string of
ID indicated by the two quick marks

that's a string and I which is the
number from 0 to 99 after 

I've created a
square and given it an ID so I can keep
track of it 

I also now need to put it in
my grid 

I do this by grabbing the grid
constant and using the inbuilt method of
a pen child to pass through the square
as a parameter 

now I'm gonna do one last
thing first that's Korean empty array
called squares so let squares equals
square brackets 

now let's use this array
squares and push the square we have just
created into it 

okay great
now let's invoke this function to make
this happen a hundred times let's save
this file refresh our browser 

and great
if I now inspect the page you will see
my gray grid is filled with lots of
little square

a hundred of them to be exact each with
our own unique ID from 0 to 99

ok let's flip back now now 

that we have
our grid 

we need to round replace bombs
all over it

let's do that in our create board
function 

so I'm going to use a constant
and choose to call it bomb array at the
top of my file 

I'm gonna globally decide
what my bomb count for the game is gonna
be let's go 20 

we can always change this
later
or use this variable to you know level
up 

we choose to make more levels to the
game adding more bombs 

okay so using the
input method of array I'm gonna pass
through the bomb amount like this 

what
we are doing here is making an array of
20 indexes 

now using the inbuilt method
of fill I'm gonna fill each index with a
string of bomb 

let's use the same logic
to make an empty array now for the
remaining squares 

we need to account for
so array and pass through width x width
- the bomb amount this gives us number
80 right now 

we want to fill these 80
indexes with the string of let's say
valid as these are valid moves now
before moving on 

let's see what's
happening using our console.log 

lets
console log out these two newly formed
arrays so console.log bombs array and
console log empty array save the file
flip over to our browser and great 

you
will see in the console that we have two
arrays 1 or 20 bombs and one of 80 valid

let's carry on we now need to do two
things
join the two together and mix and model
all of them up randomly 

let's store this
as a new array called games array 

we
will do so by taking the empty array and
using an inbuilt method of concat to
pass through the bombs array 

this will
result in two arrays being joined once
again 

let's console.log this array to
see you can technically join the MTA
race the
bombs away - it makes no difference for
us 

the order of the words does not count
for us at the moment 

okay great we can
see here that our third array is the two
arrays joined together 

in order now we
need to make one final array 

I'm gonna
call it shuffled array 

this is where we
shuffle the words about we do so by
getting our newly created games array

then adding the inbuilt method of sort
to it 

now using an arrow function 

we
write this and invoke the inbuilt method
of math.random and minus 0.5


let's console.log this to see if it has
worked 

let's save this file and great
you will see that with each page refresh

we are getting a new randomly shuffled
array 

now let's flip back to our
JavaScript file 

I'm just gonna do some
spring cleaning and get rid of these
console logs fast before we move on 

so
delete now that we have our shuffled
array 

let's get to adding these names as
classes to our squares 

so how do we do
this though how do we basically get the
shuffled array and the squares array and
add the words to the class names of the
squares array well we go back to our for
loop right here under 

where we give the
square a unique ID 

we are also gonna
give it a class name so let's grab the
square use the classless method and the
add method to add the class name of
which ever word corresponds to which
ever index 

we are looping over in our
squares array so for example if we are
looping over this code and have just
created a square within index of zero 

we
then want to go to our field array find
the index of zero and that and bring
back the word that has an index of zero

we then do the same for the first index
the second index and so on until we go
through all 100 

I know it can be a bit
hard to visualize 

so let's add some
styling for us to see what is happening
and if it has worked 

let's flip back to
our CSS file in here 

let's add some
color to the class name of BOM 

let's go
with orange as it will stand out over
the gray make sure to put it after the
gray here 

as well in our CSS file so
bomb and then background color of orange
and save 

let's bring up our browser and
refresh and great you will see 

that it's
working we are adding class names to the
squares 

let's refresh again and again to
see if it's generating randomly and
great 

let's move on


it is now time to add numbers to the
neighboring squares of the bombs 

so as
you know in minesweeper if a square has
a bomb and any of the squares to its
left right south north but also south
west northwest southeast and northeast
square 

we totaled that number up and
display it to the user this means we
have to check every squares surrounding
eight squares four bombs and total up
the bombs in the neighboring eight
squares 

we will do this again using a
for loop make sure you are still in the
create board function okay now let's
loop over the length of the squares
array so our squares array and then the
import method of length to give us the
number 100 once again we want to execute
a block of code a hundred times 

now we
also need to account for one more thing
and that is if the square 

we are
checking the names of is in the left
hand side or the right hand side of our
garage if it is say on the right hand
side of our grid 

we do not want to check
the square to the right of it right
as those squares don't count 

they will
visually belong to the other side of our
garage the same goes for any squares the
left-hand side of our grid if we check
the square to the left so square with
the next nine for example it will be
checking the square on the other side of
the grid visually 

so now how do we tell
our JavaScript that we don't want to
check these squares in the same way

let's do it by defining what is a left
edge first so it's left edge if I or
technically the number from 0 to 99 that
we are passing through modulus with
deeply equals zero 

we know we are at the
left edge for example let's take square
of index 10 if 10 is divisible by the
width so 10 and leaves a remainder of 0
this deeply equals to zero this means 10
is at the left edge the same is true for
20 30 40 and so on we do the same to
check for is right edge so if I modulus
with deeply equals
the width minus one we know we are at
the right edge for example the square
would index 19


when divisible by the width so 10 leaves
a remainder of 9 this is deeply equal to
width minus 1 because that's 9 the same
is true for square 29 39 and so on let's
just put these in parentheses for
readability 

now that we have to find
that let's carry on okay so if the
square 

we are looping over if that
square contains the class of valid so
not a bomb in other words 

we want to do
the following if I is bigger than 0 and
is not indicated by the bang is not at
the left edge and these squares to the
left of it contain a bomb we want to add
one to the total
just so we understand a bit more about


what is happening here let's visualize
this a little bit first so we are saying
that if the square index is larger than
zero 

we are saying this as we do not
want to be in this index right here as
we can't check any squares to the left
of it as they do not exist and the code
will break so if the square index is
bigger than zero and is not at the left
edge 

okay so if we are in square index
one we are not at the left edge and this
statement is true 

so both statements are
true and we can check the next statement
which is and so and if these square to
the left of my square so down one index

my squares array contains a bomb we can
execute the code to add one to the total

we only add one if all three of those
statements are true so if we whack a
bomb here and the index of our square is
1 

this statement is true and we add one
to our total got it let's move on 

we
need to do this seven more times as we
mentioned before so hopefully 

we'll get
this by the end so once again 

if I is
larger than nine this time 

as we want to
check these Square to the southwest are
the one we are in right now and this
would mean the earliest 

we can start
checking for the square will be in
square 10 and is not at the right hand
edge and if the square in the index plus
one minus the whole width contains a
bomb 

we can add one to the total and
again so if we are in square index 10 

we
will be checking square of index 1 4 if
it has a bomb or not 

this is true for
even square index 12 17 and so on 

before
carrying on let's see if this works
first 

so we are only checking two
squares around us at this moment but
that's fine let's get the square 

we are
checking and you set attribute to add
the total so far we do so by passing
through a name

so let's say data and the total now

let's use console.log to see what
exactly is happening in our browser so

I'm gonna console each square as it
passes through my loop after going
through the checks above 

let's save this
file 

now let's go over to our browser
and refresh 

great you will now see that
each square along with having a unique
ID and a class of bomb or valid set to
it will also have a data attribute with
a total next to it this total indicates

if any given Square has a bomb in the
squares to the left of it or to the
southwest of it if both it has a total
of two now that we can see how this
works 

let's carry on to account for all
the squares so if I is bigger than ten
and the square directly above it so
minus a whole width contains a bomb 

add
one to the total note we do not need to
check if it's at a right edge or left
edge here as 

we are checking directly
above the square 

so we don't have to
worry about checking if the square
appears on the other side of the grade
by mistake 

now if I is bigger than 11
and is not at the left edge and the
square directly to the left of it and
one row up contains a class of bomb add
one to the total
and again 

if I is now smaller than 98 

so
we are now focusing on the bottom errs
towards the end of the grid and is not
at the right edge and the square
directly to the right of it contain a
bomb 

we add one to the total now if I is
smaller than ninety and not at the left
edge and the squares directly to the
left and one whole width below contain a
bomb add one to the total also if I is
smaller than eighty eight and was not at
the right edge and the squares directly
to the right of it plus one row down
contains a bomb add one to the total

finally if I is smaller than 89 and the
square directly below it contain a bomb
add one to the total 

okay we are done
now let's add an event listener to each
square to see if this has worked so
still in my create board function and
let's say right after 

we push the newly
created squares into the squares array

let's add an event listener 

so let's
take the square and add the inbuilt
JavaScript method of add event listener
to it now we need to pass through two
things the event so in this case the
click and the function 

so now as I also
want to be passing through a parameter
of the function I'm gonna be using this
syntax so on click 

I want to evoke a
function I have called click and I'm yet
to write and into it I want to pass the
square 

now we have that set up 

let's get
to actually writing that click function
this time outside of the create board
function so let's scroll down after the
create put function 

I'm going to define
my click function and pass through these
square as a parameter so because this
function is only being used inside the
create world 

function for now I know
that I am passing through one parameter
into it 

when it's being used and it's
the square 

I have decided to click so if
I do click a square and if that
particular square contains a class of
bomb let's simply alert us that as game
is over 

for now we are doing this just
to see if everything was linked up and
working really 

so let's go ahead and
save this file and head over to our
browser 

now let's hit refresh luckily 

we
can see exactly where our bombs are 

for
now so funny one is not going to be a
problem 

go ahead and click on a bomb you
should get an alert 

and great the event
listener seems to be working

let's carry on now I don't really want
an alert for now as it might be a little
bit annoying 

I'm going to change this to
a console.log identification 

for now you
are free to change this to whatever kind
of alert you
wanted 

your styling whether it's a
pop-up scoreboard attempt alert that's
up to you 

so we have what happens when
you click a bomb 

let's now focus on what
happens when you click on a square with
data attached to it so a number first

let's grab that number so we can use in
our JavaScript

let's choose to call it total as it's
the total of all the bombs surrounding
us 

I'm going to grab the square 

we have
clicked and using get attribute get the
data attribute so the number now 

if the
number is 0 we don't really want it
showing up 

we only care about numbers 1
and above so if total does not equal 0

we want to grab the square again and add
a class of checked to it 

so we know it's
been checked for now 

let's flip over to
our CSS file and add a color to the
checked square 

so we can exceed exactly
what is happening 

I'm gonna give my
checks class a background color of red

so we can see it clearly 

I'm gonna put
it over the grid color but below the
bomb color 

for now okay let's flip back
to our javascript file 

now once a square
has been checked 

we also want to display
that total in the square at the same
time 

we do so by grabbing the square and
using inner HTML to display 

the total we
then want to break this cycle 

so we use
return now 

we've accounted for all the
options apart from one so far and that
is if the square does not fall into the
two categories above the only square
that fits this criteria is a square with
no bomb in there and no data number
higher than zero for all of these
squares 

we simply want to give it a
class that is checked 

let's do that here
after the if-else statement


now let's save this file and head over
to our browser to check 

this has worked

let's hit that refresh and great we can
see a red square pop up 

as it is not
close and bombs so must have a data
number of zero and these numbers 

as they
are close to bombs show up with their
data numbers 

we also get a game over

when we click on the orange square 

here
on our console log 

now what happens when
we click on a square that already has a
check class 

let's flip over to our
javascript file to address this 

as it
will affects us when we do the recursion

we actually also want this to happen if
there is a game over 

so we don't want
anything to happen if the game is over

and we click a square so if it's game
over we return out of this function 

if
this square that has been clicked
contains a class of checks 

we simply
break out this using return 

I'm actually
going to add another segment here as we
want these same to happen if we click on
a square that already has a flag using
the two lines this means or so if this
square contains a class of checked or a
class a flag 

we want to return 

let's
scroll to the top of our file to declare
is game over and assign it the boolean
or false for now

okay great once that has been added

let's get back to our click function 

the
one thing we have not managed to do yet
that is minesweeper USP 

so we say is the
fact that if we click on an empty square
we want it to fan out and fill up all
the squares up to the numbers 

I'm going
to show you this here as it is hard to
visualize 

when I say it 

but when I show
you you will get 

what I mean so how do
we do this well recursion is the answer

and this is pretty cool so once 

I have
clicked an empty square and marked it as
check to make it red 

I need to start
checking all my neighboring empty
squares as well 

let's write a function
called check square and pass through the
square we have just clicked 

I am also
going to pass through one more thing 

and
that is the squares ID 

we can
technically do that and the next
function as the idea is attached to the
square 

we are passing through 

but I'm
gonna do here just to show you what
passing two parameters looks like 

so
check square and pass through these
Square and the squares ID 

let's call it
current ID ah I need to move this out 

so
what I'm saying 

here is I want to check
to happen if the square does not contain
a bomb but also after the check for it
does not equal zero and then once it's
checked 

I want to add the class 

I've
checked I mean I guess technically 

I'd
have kept it where it was 

but I think
this way is much neater now 

we have to
do one more thing before writing our
checks 

where function I did say 

I want
to pass down two parameters 

but I have
not yet to find the current ID 

let's do
that now about anything else 

as we
simply want to get the idea of the
square being passed down 

we simply grab
the square and use dot ID to get his ID

okay great let's move on 

let's get
actually writing the check square
function so as a recap and this function

we are going to be checking the
neighboring squares once a square is
clicked we are choosing to call the
function check square and pass through
this square and the squares ID 

we chose
to pass down as well as I mentioned we
could have technically not passed
through the current ID as its

it's hatch to the square 

but I wanted to
show you that you can pass down two
parameters not just one 

now the first
thing we need to do when checking the
neighboring squares is understand that

we are going to be checking all eight
surrounding squares of any square 

we are
checking so the logic in this is going
to be very similar to the logic for when
we add in numbers to surrounding squares

the first thing we need to do is check
if these square we are checking is in
the left edge or the right edge 

so const
is left edge equals current ID modulus
with deeply equals zero and const is
right edge current ID modulus with
deeply equals 9 or with -1 now the next
thing we want to do is check all the
surrounding squares 

I'm gonna put this
in a set timeout 

as I wanted to happen
just that tiny bit after 

we click a
square this tiny bit is so important 

as
we need to happen after all the checks
and the click function happen 

when it
comes to recursion so using the inbuilt
method of set timeout 

I will write this
and pass through 10 milliseconds as the
time 

I want to pass before executing
this block of code now if the idea of
square 

we have clicked is larger than 0
and it's not at the left edge 

so this
part should be familiar 

we want to get
the ID of the square that is directly to
the left of it so conce 

new ID equals
the squares array and we pass through
the current ID minus 1 

I'm going to use
pass in to make sure that this is a
number not a string 

now that we have
that square 

we need to get its ID once

we have the idea of that square to the
left of the square 

we currently in let's
grab it so we can work with it 

so let's
call this new square equals
document.getelementbyid d as we want to
find the element with a certain ID 

and
this is the new ID 

now that we have this
square 

we are going to do something cool

we are gonna pass this new square back
through the click function to be checked
again so if it passes it continues to go
through the loop again 

and if it gets
returned and click function the loop
stops as you can see here 

we do not
need to pass down the new ID why is this
this is because the ID is attached to
the square 

we are passing down 

so we are
posted on the new square into the clique
function as a parameter 

what the
parameter is called is not important
JavaScript will know to take the first
parameter 

so let's get rid of this new
ID here 

as not only do we not need to
pass it down if we tried it would just
be ignored
anyway by the click function if this is
confusing you 

I've got a great video
about functions it's a quick explainer
video so please feel free to check it
out if you would like some more
clarification 

or what is happening right


so let's carry on with the recursion 

but
let's have a look at this with the help
of a diagram 

first here we have our
click function and here we have our
check square function 

now what we wrote
in our click function is that if a game
is over

we returned so nothing happens if this
square 

we clicked has already been
checked or has a flag on it 

we also
returned so nothing happens if the
square has a data number larger than
zero 

we want to add that data number to
its inner HTML so it shows up and that's
it we mark it as checks and move on
we mark it as checks and move on now if
the square we clicked on is none of the
above

so technically a square with a data
number of zero we want to mark it as
checked and invoke the check square
function that will check all of its
neighbors 

so we check the first neighbor
second third fourth fifth sixth and
eighth neighbour but what if we check
the first neighbor in that check we also
want to check of that squares neighbor
so we go back to the click function and
do all the checks again if again the
square is empty 

we go back to the check
square function and so on and so on
until the loop is broken pretty cool
right recursion 

okay let's get back to
it so once again if current ID is bigger
than nine
and is not at the right edge 

I want to
get the new idea of the square directly
to the right one whole row above it so
the Southwest square 

then I want to get
this actual square by using
document.getelementbyid d and passing

this new square into the click function
to be checked again

now as I am writing this I guess we
could just be getting the new ID by
grabbing the current ID and adding a 1
and a width to that rather than going
into the square right and grabbing the
ID 

that is also a quicker option 

I will
include this refactor option in my
github code if you want to have a look
at that and what I mean

but let's stick to this way for now so
now if the current ID I passed down is
bigger than 10 remember for this one 

we
do not need to check if it's a right
edge or left edge 

as we are simply
checking the square above so new ID
equals the squares array 

then the idea
of the squared directly above the one we
are checking and let's get that squares
ID using doe ID 

now let's grab the
actual element using gate limit by D and
passing down the new ID and pass that
Square into our click function 

are we
getting it yet 

let's talk through it one
more time so once again 

I am saying if
the current ID of the square

I clicked there was an empty square with
a number of 0 and then passed down into

the check square function is bigger than
11 and is not at the left-hand edge 

I
want to grab the new ID of the square
directly one to the left of it and one
right up then use get element by D to
grab that square so 

I composite through
the click function so hopefully now you
understand what is happening here 

we are
using the same logic we did for adding
numbers to the 8 surrounding squares
around any square whilst checking of the
squares of valid 

when they are checked
but also adding an extra layer of things
to be actioned this is a great example
of recursion happening and a super
satisfactory 

when it all works as
intended I'm gonna leave the next four
for us to get on with so see in a bit
you

okay great once we have all eight checks
for the eight surrounding squares any
square our grid let's save this file and
see if it has worked in our browser

let's hit the refresh button and great
just watch how satisfying is to see all
these squares appear and there's top of
the numbers and again amazing

it's like watching one of those videos
with a knife cutting into play-doh or
something 

it's really cool 

I'm just
checking everything works as it should
so the numbers are showing up the
correct totals are showing up and a game
over shows up in my consort 

if I click
on orange bomb square and great I'm
pretty pleased as to where we've gotten
to so far so let's carry on 

now the next
thing we'll do is improve my game over

so let's get rid of this console log

here I want more to happen than just a
notification right 

so let's get rid of
that and write a function called game
over
once again passing through these square

we are working with so down below the
check squares function let's write a
function call game over and pass through
a parameter meant for our square 
I'm
gonna write a console log here saying
boom game over

so far no change the same thing will
happen now 

I also want to tell our
JavaScript that the game is over 

so I
need to set that is game over variable
to true 

this is important for our click
function as it will turn our click if
the game is over

so then nothing could be actioned if a
square is clicked 

now I also want to
show all the bomb locations if there's a
game over for this 

I'm gonna grab all of
our squares and use the inbuilt method
of for each so for each square in our
squares array if the square contains a
class of bomb I want to get the square

and in it I want to write some text in
this case it's a bomb image con ok cool

let's check if that has works so save
the file

flip over to your browser now 
let's
click on a square that we know has a
bomb in it 

and great there are all our
bombs as well as a notification and our
console log 

let's move on so how do we
win a minesweeper well we need to flag
all the bombs on
without hitting a bomb 

we have an equal
number of flags two bombs so can only
flag on the exact squares that the bomb
Tsar in in order to win 

let's tackle
this feature by first writing a function
that will add a flag 

then add a left
click event listener to all our squares
in order to allow us to add flags on a
ctrl + left click of a square so under
the create board function 

I want to
write a function called add flag like
this again 

I want to pass through these
square if the game is over 

I want to
return as I don't want anything to
happen if the squares 

I control left
click has not already been checked so
does not contain a class of checked
indicated by this bang and the flags 

I
placed are less than the bomb amount on
the board 

I want something to happen
fast however let's declare the flags as
a total of 0 at the top of our file 

so
scroll up and let Flags equal 0 now
let's get back to writing our function

so if this is true and also if the
square does not contain a flag already 

I
want to add a class of flag to it


I also want to grab the square and it's
in HTML 

I want to add an emoticon of a
flag to indicate a flag is there 

I also
want to add one to our Flags variable
using the increment operator else if
there is a flag already there I want to
remove the flag so remove the class of
flag and also replace the text in my
square 

so instead of showing a flag
emoticon is simply displays nothing 

we
also need to take away a flag from the
Flies variable using the decrement
operator great now that we have that

let's link it up to you all of our
squares so in the create would function
under the normal click 

let's add a
control and left-click to each square

let's grab the square and add the
inbuilt method of on context menu now we
write function and pass through an e for
event we are passing through your event
into the function now we need to use a
prevent default to prevent the default
action happening and add our add flag
function here passing through the square

we have control left clicked okay great
let's save this file to check it out and
see if it has worked 

so hit refresh on
our browser and amazing look at our
little red flags go if we press ctrl and
left click on our machines 

we will see
the little flags so cool 

now we have one
last thing to do and that is tell our
JavaScript what a win is so once we are
happy with this 

let's go back to our
project now under the game of a function

I'm going to write a check for we're not
function 

so let's scroll down ok great

we need to decide what happens when we
want to check for a win so function
check for win this time 

we do not need
to pass anything through 

as I've decided
that we are going to be checking over
the entire grid each time we check for a
win 

so once again let's use the for loop
to loop over the length of our squares
array incremented by one each
time so if the square 

I'm checking my
squares or it contains a class of flag
and indicated by the double and here and
the same square contains a class of bomb
both of these statements are true 

and we
can execute the following code 

we
increment the variable matches by one so
let matches equal zero
now if the matches 

we are counting
suddenly deeply equal the bomb amount so
what is that 

that's 20 we want the
following block of code to be executed
console.log u14 

now I am fine with that
okay 

now we have done this let's decide
where we want to check for a win 

I guess
it makes sense to check for a win after
each time we place a flag right 

so let's
go ahead and add flag here so add flag
function 

let's put it there so right
under where we add a new fly to our
Flags variable 

let's invoke the check
for win function 

okay cool let's save
this file and see if it has worked hit
refresh and great there's our flag 

let's
go ahead and click all 20 bombs so
click-click click-click click-click

okay I'm great we get a notification or
console.log telling us that we have in
fact one amazing 

now let's do one very
last thing and that is set our is game
over variable to true 

and that's it that
is the functionality down well done for
getting this far now as always 

I would
love to see your finished game 

how
you've styled it taking it to that next
extra level 

we do have a bottom out that
is a variable so feel free to maybe
level up make new levels based on the
bomb amount some people might want to
add you know like a timer 

I think the
original minesweeper game does have a
timer so the user is constrained to a
time limit 

we're trying to find all the
bombs 

there are literally so many
options please do share them with me on
Twitter Instagram YouTube 

I would
absolutely love to see what you've done

if you have any questions please do
comment below 

I'd be more than happy to
help you with this game if you want to
see how I've styled it please again do
look at my github 

I put all my code
there the code is very much for you to
take make your own as well so once again

thank you for watching


```

[Build your own MINESWEEPER game in pure JavaScript, HTML and CSS while learning about RECURSION](https://www.youtube.com/watch?v=rxdGAKRndz8&list=PLRD1Niz0lz1uR4W3ms6DygWMjXW-6hDB_&index=14)  
[]()  
[]()  
[]()  
[]()  
[]()  
