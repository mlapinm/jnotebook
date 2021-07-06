


```

hey everyone today we're not only going
to be building battleships we're going
to be making
multiplayer and styling it to the max
with youtubers code stacker
and web dev simplified it's great as
we're going to be doing this in a
three-part series we're going to be
doing the logic of the game so
just this simple javascript logic on my
channel right here
we're then going to move over to code
saga's channel
for part two so you're gonna go over to
his channel to watch here make it
multiplayer
then finally we're gonna go over to
kyle's channel on web dev simplified
where he's gonna start it up
really take it to the max this game is
gonna be insane i'm super excited i mean
i can't even imagine what's gonna look
like by the end
also this project for me personally this
is gonna be my longest
javascript game tutorial because we are
gonna have to cover a lot
so this is gonna include the computer
randomly generating ships on the
computer grid
the computer then taking goes after
yours
being able to drag and drop ships into
the exact locations that you want
being able to rotate ships as you choose
making sure these ships don't go
off the grid if you place them too close
to the left or right hand edge
and making the computer notify us if you
have sunk its battleship or
it has chunk your battleship and all
that this tutorial was a lot but it's so
worth it i'm super excited
in this tutorial we're gonna be going
through a lot of javascript methods such
as slice and push
and many many others this walkthrough is
a little bit more on the advanced side
but please do have a go
anyway if you get stuck comment below
i'm more than happy to help you out
so the rules of battleship where there's
a few you start off with your five
ships so the battleship cruiser
destroyer
what else carrier and submarine you then
have to
position each other ships onto your own
grid you can choose whether to happen
vertically or horizontally that's up to
you
once you have finished placing your
ships you press the start button
and that allows our computer to take its
go against you
now the computer unbeknown to you has
already generated all its random chips
your goal is to sync all its ships
before it sync yours
once you have finished making your game
please do share it with us or twitter on
youtube make sure to tag myself because
soccer and web dev simplified
we would absolutely love to see your
finished games
okay so what are we waiting for let's do
this battleships with code stacker and
web dev simplified
okay so the first thing we're going to
do is check that
our html file is set up correctly so we
want to link
the style sheet with the link tag and
this script
tag is going to link our app.js file so
our javascript file
now i've gone ahead and actually set up
some html
for us already mainly our container
so this div is gonna hold our user grid
and our computer grid
as we're gonna have a grid for us the
user
and the computer as well
now i also have a div called
hidden info which is going to hold a
button
that i've given the id of start and
a button with the idea of rotate so as
you can imagine
the button here is going to start our
game
and the button here is going to rotate
our ships
i also have an h3 tag with an idea of
who's go who's going to tell her who's
whose ghost it is who's go it is as well
as an
extra idea for info that will give us
information
such as you have sunk destroyer or
computer sunk your destroyer or game
over or you win
so that's just like a generic info space
where information will go
now finally i have a grid display what
is this well this is actually going to
be where we
have our ships so our user ships that we
drag and drop
into our grid okay so now that we have
that
obviously this is really basic i don't
want to go too much over it because
i think it's quite straightforward why
don't we style it up a bit first so we
can see actually what's going on so
where do we do that in our style sheet
clicking to our star sheet now
okay so once we are in our style sheet
let's decide that we're going to style
up the grid so our user grid
all these grids are going to be the same
but it's important to differentiate
which is which
so let's just give it a standard width
of i don't know 400 pixels that should
be fine
height also 400 pixels
we are going to use display flex to make
our squares and we put inside this user
grid wrap over each other
so using flex wrap we'll make them wrap
as well and for now let's just give it a
background
color of blue so we can see on our
browser
now to show you what i mean by display
flex and flex wrap i'm going to save
this file
i'm also going gonna go ahead and
style divs to go inside our user grid
so by getting the class of grid like
this so dot means class
and using div like this this means that
any
div that is now inside our div with the
class of
grid is going to be started like this so
let's go ahead and
give each div a width of 40 pixels
and a height of 40 pixels
okay just so we can see what's happening
i'm also going to give it a background
color
of i don't know reg okay
so what this means is now that any div
that goes inside our grid
it's going to be styled like that so
let's flip over here so what was it we
did
user grid that's here now if we put some
divs in here
what do you think's gonna happen
so let's let's just put two in for now
let's save this
let's head over to our browser hit
refresh okay so those are the two
divs i put in my div with a class of
grid
which is blue now the reason they're
like next to each other is because i use
display flex naturally divs want to
appear stacked over each other so if i
actually got rid of this
let's combine that out this is what they
would look like
see now flex wrap also would make them
wrap if there was
more than two so if it was one two three
four zeros 11
they would stack over each other
hopefully that makes sense if not i go
over this in a lot of detail in
many of my tutorials okay let's get back
to the styling i'm actually going to
keep this grid there but i'm going to
get rid of the background color red
quite happy with that so we've got our
grid for users we also need our computer
grid right so grid
computer once again i'm pretty much
going to copy the styling so make it
width
400 pixels because they're going to be
the same height
400 pixels once again display flex
flex wrap
wrap and let's give it another
background color just so we can see what
is happening
let's make it i don't know like green
cool let's save that hit refresh
and amazing now once again what do you
think we do
if we want our green box to appear here
that's right we use display flex so
let's get the pattern of what these two
are in well they're both in the
container
i'm just going to get rid of this here
too because we don't need that let's get
rid of that
so let's pick out the container to style
that i'm going to put it up above here
because it's neater really isn't it
container
display flex
great save fresh looks fantastic
okay so maybe let's just give it a
margin space them out margin 20 pixels
and here two why not margin
20 pixels
okay so we've started those two let's go
ahead and
get to styling the rest let's do our
grid display
so remember what i said the grid
displays actually just where i'm going
to show
my ships that are available to me to
move
into our grid user let's just make it
width
400 pixels height 400 pixels
margin 20 pixels
and background color
yellow
save fresh
and perfect okay this is looking good
i'm happy with that as a base now
to get to adding these ships so i want
to add
the five ships that we have in here that
we can then
drag into here okay so i'm actually
going to hard code them
i don't think we really need to add them
in javascript i'm happy to hard code
them so we can do that in our html
so we open up our grid display because
we want to put the ships
in here now let's make a div because all
our ships are going to be div
let's give this a class name
because we want to style up we need to
give it a class name really don't we
let's call it destroyer but container
okay so we're gonna have a div
consisting of little squares that make
up our destroyer ship in here
let's also give it a class of ship here
as well just so we
can use it to identify all our five
ships as well
so ship and then destroy a container as
one word
now in here how many squares are gonna
make up
a destroyer it's actually two
so let's go ahead and give it two divs
there's one div
there's another div
now okay this is quite important i want
to give each of these
ids so we can pick them out so we're
gonna go with
destroyer zero
and give this one id of destroyer
one this is going to be important later
in our drag and drop feature as we're
going to want to know exactly which of
the square we are dragging
now we also need to do one more thing
and actually make this container so not
each div
we need to make the container draggable
we do this by going draggable so it's
property
and giving it draggable true
okay this is looking good obviously we
won't be able to see it so let's go
ahead and give it some
styling so once again i'm gonna get the
class name of destroyer
container now destroying container
because we're working with squares and
each of these squares are gonna be 40
pixels
and we know the destroyer is going to be
made up of two squares we need to give
it a width
of 80 pixels right and a height
of 40 pixels this is gonna look like
it's i don't know horizontal i guess
it's fine
let's also give it a color i don't know
what color should we go with this time
let's go with orange
and i'm just gonna give it a margin of
10 just because i don't want it to be
like
flush with the grid it's in
okay so now if we save
refresh there is our ship container
now there's going to be a problem with
this because if we inspect
element so let's go ahead and expect
that this is draggable however
these divs don't have any styling so you
can't really see them
we're going to have to give them styling
so to do this i'm actually going to use
this class here ship as i want to do
this for all the future containers we
make
and once again just like with grid and
div
we get the ship class and put div so now
any div in a div with a class of ship is
gonna have
the following styling once again i'm
gonna make it with
40 pixels height 40 pixels
and ah they appear to be stacking over
each other so what do we need to do
we need to go into this destroy
container and use display flex
so that the two squares appear next to
each other
great let's check that out
great perfect let's carry on
we are now gonna have to do the same for
all the other ships so all five
i'm simply gonna copy and paste this as
i feel pretty comfortable with this so
making sure to grab this outer div that
has
the class name of the ship container and
ship okay just copy that
so what is the next ship down well it's
actually the submarine
so we've got the destroyer then we get
the submarine
now the submarine actually we need to
also replace these
submarine oops
make sure i spell it correctly
now submarine actually has three squares
that will make it up
so just make sure to add a another
div with the id of submarine
two great equals
it looks good now i'm gonna do again
because after the submarine we need to
add
the cruiser so once again
now the cruiser also has three squares
that make it up so
this actually looks good we now have the
so we've got the destroyer summary
cruiser battleship next
that'll ship that's right yeah the
battleship
has one two three four so
one two three four note i'm starting
with zero this is because indexes are
counting from
zero so i'm just being consistent and
then finally we have the
carrier let me just change this to
battleship before i forget
do do do battle ship
okay and now the carrier so
ship carrier great
and carrier
and we just need to add one more square
that's not right there we go three and
four
perfect now let's go ahead and start
this up so
back to our style sheet we don't need to
worry about the
little squares as we've already styled
that and as we can see
each of these has a class of ship too so
they will be affected by this
we need to just let's just copy paste
this
so destroyer submarine
submarine's gonna be longer so we add 40
here right so that's what
120 let's also make it
pink for fun then we have
destroyer submarine cruiser is next
cruiser is the same as submarine right
so
let's just change the color to purple
120 pixels width and it's the battleship
which is longer so we're going to have
to increase it by one
square so by 40 pixels
there we go what should we make the
battleship container
let's make aqua
and finally the carrier container
carrier let's make it green
okay and increase this by 40 again so
200 pixels
fab cool let's see what that looks like
this should all appear here
and great there we have our ships each
with our own little ids so we can pick
them out and drag them later
looking good let's carry on
okay i think we are now ready to start
adding some
javascript so let's flip over to our app
js file now because i have my
script up up here my script tag up here
i want to make sure that all of this is
loaded before like reading any
javascript at all
we do this with a dom event listener so
we grab our document and using add event
listener like this
we then pass through the dom content
loaded event this is not a made up event
this is a real event from the internet
that i have found and we use it to make
sure that
all our html is loaded before running
this javascript
okay now the first i'm going to do is
actually pick out
these things that we have just made
using their class names and ids
so using document and then a
method called query selector
i'm going to pick out the div with the
class names we do
go dot we go dot for grid user so i'm
picking out
the div with the class name of grid user
now i want to store this as something so
i'm going to store as user grid
so we can use it later in our javascript
without having to type this all out
again
pretty cool okay let's do the same for i
guess
the what you call it computer grid
computer
bridge so let's grab the document use
query
selector and then pass through
dot grid computer
okay so we've grabbed the computer grid
now what else we do the display
grid so display great let's call it that
pretty simple
once again
document query
selector and grab the class name of
grid display
cool while we are here let's actually
pick everything else that we're going to
need
so for example the ships you know how i
gave all the ships the class name of
ship
i'm going to use document and this time
query selector
all
okay so i'm picking out everything with
the classroom of ship
that's queer select all this time
let's also pick out the destroyer the
destroyer ship
document query
selector and then the class name
of destroyer container because i
actually want to grab the container that
holds all the little squares that make
up
the ship right okay so
i'm gonna cheat here and just copy paste
this i'm pretty happy with that and
there's five of them
so one two three four five destroyer
using shift d or command d you can
actually highlight both words and change
them at the same time
so i'm going to do that for submarine
and then the next one so what's the next
one i should know by now
cruiser because we're going to select
the cruiser container
and the battleship the battleship
and then finally the carrier the largest
one is the carrier
cool okay so we've got all the shits
we've got the grids
and now we need to get the buttons
so what do we have we have the start
button this time we're going to be
grabbing ids
it's very similar so we use document
obviously that needs to be an equal
document now i can use query selector
again that's not a problem
you could get select element by id but
i'm going to use this
and we're going to grab the hash because
we're looking for an id so it's a hash
start okay why is this because we gave
it
the id of start so let's do the same for
the rotate
and the who's go and the info now so
const let's call it rotate button
shouldn't be a capital because i'm
writing camelcase
document query selector
rotate
okay now const
turn display i'm going to call it this
is for the who's go
selector once again i'm going to
id so whose go was the id
name
const info display now
document query selector
spell it right and hashtag
info okay this is looking good we
have picked out everything we need i
believe it's not a problem if it's not
but i think it is so
i'm pretty ready to carry on
now the first thing we do is actually
create our boards
i know we've created them here but they
don't currently have any squares
in them there's not really much
happening okay so
to do this is gonna be pretty cool i'm
actually gonna create both boards
using one function called create board
so this is how we're gonna do that
create boards now so my function
let's call it create board why not
pretty easy
now in this create board function i need
to
essentially generate 100 squares
okay because our grid is 100 by 100
let's just tell our javascript that
comes with
10 okay so it's going to be 10 by 10.
let's generate 100 squares i'm going to
show you how to do this
it's quite cool we're going to use a for
loop to do this so this
is the syntax or fall if you don't know
we're literally going to be looping over
something
a hundred times to make it or we can use
the width so width
times width is 100 and we're going to be
incrementing by once this is an
increment operator
so this is the syntax for a for loop so
we want to generate something 100 times
right what do we want to generate 100
times a
div or a square so i'm going to do this
again using document and i'm going to
use a javascript method
called create element
now the element i want to make is a div
so this is how you write that
if i want to make a div this is how you
do it let's say this is square we have
now
made a div if we let this run
it will create 100 times but we're not
putting it anywhere at the moment
so we can do this again using
a method called append child what we do
is we grab the grid
so for example let's just say we're
going to get the display grid now
okay so we're grabbing the display grid
and using append child
we are actually putting in the square
into this div and we're doing that 100
times
cool display good wasn't the best one
let's use the grid okay
because obviously we care about the user
grid and the computer grid
so that's where we want to put the
squares into we don't really care about
this one
so use a grid now let's also make an
array
called user squares
now each time we put a square into or
use a grid
i also want to keep track of it in a way
i guess and put it into a separate array
called const user squares
i'm going to keep it empty for now
because we're going to be literally
putting
things into it thanks to this we're
going to do this with push
so we're actually also going to push a
square into it
so each time this runs i'm going to be
pushing a square into this 100 times
cool now just to make our life easier i
also want to give each square as i make
it
a data set id okay and i'm going to make
this i
so each time it loops it's going to give
the id of 0 1
2 all the way to 99
great so this is how i would create a
board
but as i said i want to use this to
create two boards because i want to fill
both with 100 divs each so this is quite
cool
i'm going to show you how to do it i'm
going to do this by passing
through parameters
so i'm going to make this up these are
made up parameters grid
squares width
now using this i'm going to pass through
known parameters
so for example i'm going to pass through
my user grid which is going to be
essentially the same as a grid here
so i can replace this with grid okay so
use the grid passing through my user
grid
to replace the grid here now squares
that's simply going to be user squares
so this one here use the squares i'm
passing through
and i replace this with just squares
because essentially we'll just replace
oh we're just replacing
this here with actually i just want to
keep that the same
so perhaps we don't need to pass that
through now let's part we need to pass
that through this position
just in case we want to change anything
later ah
square sorry okay save that now if you
refresh that
you will see here that this div has
99 or 100 squares from
id 0 to 99 in it okay
however this one does not so how do we
fix that well we use the function
and pass through not use the grid but
computer grid this time
computer grid and let's make a new
empty array let's call it computer
squares
and then pass through the width again
great
save fresh
cool now both of them have 100 squares
we actually don't need to pass us
through it i don't think i'm going to
change it let's just keep this
like so because it's constant it's not
going to change for us
i don't think i actually do want it to
change so yeah
safe fresh perfect
looking good let's carry
on now the next thing i want to do
is actually show you how to randomly
generate
ships in the computer grid so that each
time you start a new game
you're gonna randomly generate ones in
the computer's
square so you can play against the
computer
okay i'm gonna show you how to do that
now
so the first i'm actually going to do
is create an array of our ships so you
can see what they look like
vertically and horizontally okay this is
going to be important for when we
randomly generate them
so let's call this ship array
okay so it's gonna be an array with
objects
the name of the first object is
destroyer
so the destroyer ship and the directions
i want to go
in so this is going to be the destroyer
ship as
if it were in our array and our user in
our computer squares array
so that's what it looked like if it was
horizontal and this
is going to look what this is how we
would show it if it was vertical
so what's happening here this is
obviously 10.
if i save this it would be like if the
destroyer was
here and here so in like zero and one
if it was horizontal and zero and ten
if it was vertical okay because zero and
10.
got it cool so that's our destroyer
now let's carry on i'm going to make the
uh
this time it's going to be for the
submarine
to give it a name and once again
directions directionals
okay so this time we know it's three so
one
just don't go that's how it will look
like horizontally
and if i was to paint it in the squares
in my computer grid i would paint it in
index 0 in index 10 and then index
20 right okay
next one so as we know this is i can
copy paste this one
because the submarine and the cruiser
are exactly the same
so let's just change that to cruiser
then we've got the battleship and the
carrier so i'm actually just going to
copy
that too so battleship carrier
and what do we need to do well we need
to add
let's add a three and a four because we
know this one is longer
and width times three because we wanted
to appear in index 30
and this one
with times three but also
width times four
cool okay so we now have our ship
array okay now we want to draw each
ship in random locations so we're going
to do this again with a function that i
am going to use to generate all five
ships so similar like we did to the
create board function will be passing
things through in order to generate each
ship draw
their computers ships
ships shops ships and random
occasions cool
i'm going to call it function generate
ship
because that's what we will be doing in
here
or maybe let's just call it generate why
not generate
okay now first we're going to get a
random direction so it's either going to
be this one or this one
for each ship we do this so let random
directions let's call it just to be very
precise about what this is
random direction now we're going to use
a javascript method called math random
this is pretty cool as if we use math
random and invoke it like this
and multiply by any number it will give
us a number
from in that range okay so if i get the
ships
so ship direction
length so what i'm actually doing here
is getting the ships because this is i'm
just going to call each of these a ship
so we're going to pass through a ship
or ship array
now i'm getting its direction and then
length so each one's length is two
because there's two
things in our array there's two uh items
in our array
so that's two essentially i'm gonna
actually wrap this in
mouth floor we wanna round this
down we don't want any weird outliers so
let's just wrap that round
now this number will be a full integer
the math random okay
yeah it's either going to be 0 1 because
the length is 2
and we count from 0 so 0 and 1. now
let the current so
once again let's grab the ship direction
there should be directions because this
is directions i don't want to make that
mistake because everything will break
okay so now we're going to grab the
ship's direction and we're going to pass
through the random direction
why are we doing this because we want to
choose one or the other this is how you
do it
by putting through a number into this
ship's direction
we're essentially choosing this or this
and we're assigning it as courage
okay now if the random direction
deeply equals zero because you know it's
gonna it's either gonna be zero
one so let's go ahead and just do that
if random extremes becomes one
so if it equals zero we want direction
to be one and if equals one we want
direction
to be ten i'm doing this
as i want to then be able to
paint out each of these onto our grid
now we have a random ship
we now need a random start on our grid
so let's call it
le random start
now using math random again
we want a random square on our grid so
i guess we can grab the computer squares
array get its length because we know
that's 100
and we are working with a computer
square anyway so it makes sense to grab
this
okay so we now have a random number
from 0 to 99 assigned to a random start
which will be
any square on here but we also need to
do something
well obviously we need to wrap it in
mouth floor let's not forget to do that
so there we go we also need to minus
the let's put that in bracket ship
directions
so the first item this one
length
multiplied by direction which is
this okay so
if the random direction we have chosen
is the first one
so we are going horizontally we want
direction to be
one and if it is however the second one
so if random direction was one
we know that we want to render our
ship downwards which is why we have to
minus
the length times the direction so we
actually have to make sure
that the random number isn't anywhere in
these last
squares so if it's the carrier we don't
want it to
be appearing anywhere past here and if
it's a destroyer it's smaller
okay now that we have a random start
square we need to also make sure a few
other things won't break what we're
about to do
and that is we need to make sure that
the square we want to go in
or any of the squares actually that we
want to go in are not already taken
we want to make sure that they're not at
the right edge and we want to make sure
they're not on the left edge
const is taken now using current so that
is the current ship
and the rotation i guess that we are in
we use some
because we want to check we want to
check that basically like some of its
squares
aren't don't have taken so we do it like
this
so this is the syntax with sum
and go into our computer squares array
and pass through our random start so
this is obviously a number
plus index because we're going to be
looping over to make sure that
any of these sort of i guess indexes of
our ship don't contain
a class of taken so class
list
contains taken
okay so if it is taken this would be
true and that means that any of the
squares that we want to go in
so we're going to we're going into our
computer squares array we're passing
through the number we want to start at
so say for example if it was 2 we would
be going here
and then we loop through it plus index
we want to add essentially each one of
these so we'd be checking like
so if any of them or some contained
taken
we know that the space is taken okay
cool
now we need to also do it for is at
right edge because we don't really want
to be at the right edge
there's lots of problems with being at
the right edge as in like we can't start
here and then go out that way otherwise
our ship will appear here right
doesn't look great can't do that so is
at right edge
because again we grab the current and if
some
index
random start
plus index
modulus width deeply equals
with okay so what this is essentially
saying
is that if our current ship if
any or some of the squares are modulus
width
so modulus is i guess if you modulus 10
and the remainder so the remainder is
what is get what gets returned
if that remainder deeply equals 9
because to width is 10
and -1 then we know that we are in this
column
right here okay because modulus 10 gives
a remainder of nine
in this column and then this is true and
we
are at the right edge great let's do the
same for his left edge so
const is at
left edge similarly we're gonna actually
use modulus for this too so current
let's grab our current
ship we are working with and it's
current rotation and if any
index it's got this random
start that we have chosen to the random
start
plus the index because we're going to be
looping over the current one
and then modulus width
now if this deeply equals zero okay then
we know there are a lot
then we know we are at the left edge
because 0
10 20 these are all modulus 10 gonna
give us a remainder of zero
and we know this is true so we know the
left edge
cool
okay now if
is not taken so none of the squares in
our current
ship have a class of taken in them
and is not at the right edge
okay and it's not at the left edge so
this is false this is false this is
false they all come back with false
then and only then can we add so we use
four
each so there's a javascript method of
four each
then we can add
the class of ship and taken
to each of our current ships okay but to
do this we need to go into our computer
squares array
and we need to pass through the random
start
index plus the index of our looping over
and then we use class list
add we want to add two classes i'm going
to add a class of taken
i'm also going to add the class of the
ship
name so what i'm doing here is going
into our
ships object and getting the name
so carrier battleship blah blah blah
blah blah they're all gonna get applied
if that is true
it's gonna minimize this so you can read
it better
okay cool
now if any of these are true
when you do something else right because
nothing's going to happen so
else you actually want to run the
function again
so we want to regenerate a new ship a
new random number
and so on and so on until all these are
false
and we can add a class of ship to the
place we are in cool now because i've
just passed through a generic
ship here we actually want to go through
and replace this with
each of these ships
so to do this we obviously want to close
off this function this function is now
done so our generate function is done
so just like we did with the create
board i'm going to use the function
and pass through if i do like this
ship array and get the first item now
ship array
so i'm going to get our destroyer
so we got a destroyer and pass it
through this function
so if i now save this fresh
now the reason it's not adding it is
because we actually haven't decided
so ship name destroyer we need to
actually get
class call destroyer so
i'm going to go ahead and go dot
destroyer and background color
orange just making it sort of i guess
consistent with the destroyer container
save fresh and great
our destroyer is randomly generating
now it looks weird but that's because
i've done that so let's refresh
fantastic and you will see it is
not spilling over into here or the other
side
or going off our grid here let's do the
rest now
so
i'm just going to copy paste this
because as we know
we just want to access the second item
in our ships array now
third fourth and fifth
safe refresh
oh once again we didn't add the styling
did we so we've got the destroyer
okay submarine pink cruiser purple
so dot submarine
pink
okay let's do cruiser user
background color purple
what else is there left battleship and
carrier battleship is aqua
carrier's green
aqua
green great okay moment of truth
refresh whoo there we go
carrier isn't working though why is that
strange
ah undefined why is that
that shouldn't be the case i think it's
something to do with
the random number not being exact
okay if i actually do maths abs
so this is like an absolute number
because i have a feeling
that this month floor is not enough
let's
save that
okay great we are now getting ships
generate
randomly so for those of you don't know
math abs is
this is math abs it's just a nice
javascript method that returns an
absolute value of number
okay so really useful
cool let's carry on
i think the next thing i think we should
do is perhaps
i don't know get to dragon dropping our
ships that could be a good one
okay so let's do it
okay so the first i'm going to show you
how to actually rotate
these because we actually want this
button to do stuff right when we drag
and drop we want to actually have to
choose or be able to choose
which sort of like direction our ships
are going in
so i'm going to write a function called
rotate
and do it right below here rotate
the ships
okay let's go ahead and call it function
rotate
[Music]
now if is horizontal we're going to
actually want to define
this or just save it here as a variable
actually so let's
scroll to the top let is horizontal
equal true because we're starting off
we've hard coded them to be horizontal
let's save that now if is horizontal
which is currently true we want to
actually
toggle so when actually just toggle a
class list i think that's the easiest
way to do it
let's grab the destroyers we are
grabbing the destroyer ship
i'm going to use class list actually
assign a different class all together
so toggle i'm going to make a class i
made this yet called destroyer container
and i'm gonna say vertical okay so what
i need to do now is go into here
let's get the destroyer container and
make a destroyer container
vertical cool
if we save that now
now at the moment it's pretty much the
same right i'm actually going to use
the what do i need to use flex wrap
because i want it to wrap around
in its container
okay so now cool i think that should be
fine
just having a think we actually need to
actually hook up
the um button don't we so we can
actually give it some sort of like
functionality so here's our rotate
function we've only got one thing
happening in it right now
let's get the rotate button i'm going to
use add event listener
i'm going to postulate click so again
this is not made up this is a click
event that i want to pass through i want
to invoke the rotate function
on the click rotate that's right yeah
cool so we're sort of changing the class
name but then it's not toggling back
so if we do click is the horizontal and
we change it to destroy a container
vertical
so this one destroy a container vertical
yeah
we also need to change the width so 40
80.
so we do need to change it to actually
physically look like it's vertical
and then we want to put is horizontal
false so refresh
or is it ships and there we go obviously
that
doesn't look the best but you know what
i mean is it because i styled it
incorrectly
that's right 40. cool let's just make
sure that the
squares inside it are correctly wrapping
over each other
and they are perfect cool this is
looking good
okay so we've done it for one let's
actually go ahead and quickly
just copy paste again one two three four
five
you think i know all the names off by
heart but i really don't yeah
i think it's submarine
marine there's a third one
submarine cruiser battleship carrier
okay submarine
cruiser
battle ship
carrier cool now save
and also let's go ahead and do it for
all of these so copy
here container
vertical swap these round 40
120 and add
this flex wrap right so flex
wrap wrap see that's wrong so just take
that away
cruiser container paste
vertical swap these round again for
120 flex
wrap wrap cool battleship
container copy paste
container vertical
40 160 and blue blue blue
flex wrap wrap
okay
carry a container vertical
40 200
flex wrap wrap cool
now let's refresh rotate ships
and great okay
this is looking good
okay
i'm just gonna console logs what's
happening to the is
horizontal
so and so log
is horizontal
i'm going to actually do it here so each
time just want to see if it's
so rotate refresh rotate it rotate it
rotate shift
now it's always false that's obviously
not ideal we need to change that so hmm
i guess the easiest way of doing this
would just be
so if copying this
pasting it if is false you just change
this to true
and get rid of all these
i mean that's just like the easiest way
can think of right now obviously it's a
lot of repetition here it's not the
nicest but
this will definitely work you also need
to put a return
in here and a return in here so it
doesn't keep like
changing or it's horizontal okay so now
rotate
rotate rotate oh i didn't contour
console.log did i
console log
it's horizontal and then
into log just to see if it's actually
changing
rotate rotate rotate hmm
ah that's okay okay so it's horizontal
i've misspelled i knew
this is what happens when you're speed
coding a lot of sparling mistake it's
horizontal okay now let's save that
okay no that's not going to work because
we actually need to return out of this
statement
so if it is horizontal you want to
toggle all the ships
we want to change his horizons to false
and we want to return out the statement
same for this one okay let's save that
okay now rotate rotate rotate great
you'll see false true false true
based on if our ships are horizontal or
not i could probably refactor this a bit
but i'm just going to carry on for now
this is something we can do
at the end there's a lot of repetition
here let's move on
okay so we have our ships generating
randomly we can also
toggle the ships so we can rotate them
we now need to be able to drag and
drop our ships into our user grid
okay so i'm going to do it like this if
you have seen my candy crush game it is
really similar we're simply going to
list
out all the drag events from dragstart
to drag end
so move around use a ship
okay now we're gonna use four
each okay so we're gonna grab all the
ships
and use four each
and then ship we can always whatever we
want we can call it index but just for
the sake of readability
for each ship we want to add the event
listener drag
start okay so we want to be able to drag
each ship
and then when we drag it we want to
invoke
the drag start function which we are yet
to write
okay so we can drag the shapes we also
now need to add event listeners to our
user squares okay so let's grab the user
squares
and similarly like we did for ships so
this is obviously an array as is this
for each square in our user squares
array you want to add an eventlessness
we grab the square individual square
and use add event listener and drag
start
dragstart great
so if you don't know this i'm actually
just going to copy and paste this
because it's
the same just listing out each of our
drag events so we've got drag star
here we then want drag
over drag over
then after we drag something over a
square we need to drag
enter so another event is called drag
enter you'll see what i mean later on
then we have the drag leave event so
what happens when
we leave a square we are dragging over
i'm going to write a function called
drag leave
drop so this is when we drop something
into a square we're going to write a
function called
drag drop just for consistency
and the last one we have is drag end
so these are events you can google them
but they are what we need in order to
make our drag
drop function work so once again we're
gonna write
a drag and function okay so
let's get to it
let's write our function start drag
start first
and then i'm just going to copy paste
this it's literally going to be
all one two three four five
six let's write six one
two three four five
six
drag over function then we wrote the
drag
enter function
now with the drag leave drag
drop a drag end
great okay now the first thing you want
to do is actually grab the
id of whatever ship
index we are grabbing so for example
remember how we gave this
a destroyer zero and a destroyer one we
want to be able to know which one of
those we have picked
when we drag it to do this i am going to
grab our ships array and use four
each and then once again same syntax
for each syntax add an event listener
this time of mouse down
i'm going to pass through an event so
this is
have your posture an event pass through
an e
and then select
this is i'm going to make something up
called selected ship
name with index
so that's pretty clear i guess it's long
but it makes sense because we are
selecting the ship name
with its individual index
and whatever id we pick we then assign
it to the selected ship named with index
let's actually go ahead and declare that
up here
okay just so we know what we're working
with at all times
okay once we have that index we can
actually start with our drag start
function once again we pass through an
event i'm just going to show you
if i console.log e
target what happens i'm also going to
console log
this
now let's save this let's just
perhaps format that a little nicer save
now if we drag this you'll see i
am grabbing the ship so it's the same
thing
i can use either or really this and e
target
so in this i'm actually going to go
ahead and maybe just go with this just
so it's a little bit different to what
we've done before
so we don't need to pass an event and
then
let's save this as dragged ship
just so we know what we are doing so the
drag ship
i'm also going ahead and get the drag
shipped length
so dragged ship length we're going to be
using this
in order to know exactly how far we are
so if we're here we want to know that
you know if it's three squares long that
this is going to be a problem
so drag chip length is simply going to
be dragged
ship dot length great
again i'm going to declare these here so
we can use them at all times so let's
grab
ship drag to ship let drag ship
and let dragged ship
length okay so
now if we console log each one of these
selected ship name with index
console log dragged
ship put them in these
perspective functions
save fresh and great
you will see here we've got the name
with id
and the dragged ship cool
okay so we've got the drag start well we
only really care about what happens when
you drop
the ship into our user grid so i'm
actually gonna omit
these for now so we do need these here
but we need to pass through prevent
default okay
like this for drag over
drag enter to pass through an e drag
leave
i'm not sure let's go ahead and
see what happens drag leave probably
not much
okay so drag leave i guess whenever it's
leaving a square
you get the drag leave we don't really
need anything here either
now the drag drop okay so this is
essentially where
most stuff is going to happen because as
we drop it we want to make sure that
it's going to be in a valid square
so this is going to be long but exciting
in our drag drop function i'm actually
going to get the dragged
ship so as we know we know what the drag
ship does right it's this thing here
that's a drag
ship with all its little divs inside of
it that make it up
i'm gonna get the last child id
okay so i want the id of whatever the
last child is so for example here
it'll be submarine two here be cruiser
two here we battleship three and so on
cool so and then we're going to change
this well i'm just going to save it as
something else really
let ship name
let ship name
with last id great
i'm gonna need that we're also actually
gonna need the ship class itself so we
can actually
use the ship id quite cleverly okay so i
can actually grab
this and then using slice
okay so now we're going to use slice i'm
going to show you how slice is going to
work to literally slice
the beginning part of the ship id so we
just get the name
okay so let's go ahead and console log
this console
log ship class
and refresh now if you drag and
oh that's strange slice is unidentified
meaning that it doesn't like ship name
with last id
meaning it doesn't like last child of
our dragged
ship i think it's probably something to
do with this because it should be
picking up
the last div so this one here and
these id names right here
ah it would seem
i've added an extra div that is not
necessary oops
okay so there's obviously some weird
formatting that's happening i did try to
make it more readable
but if we just get rid of any
formatting here just to make sure
that our javascript knows what we mean
by last
child so there we've got our destroyer
container
i'm just getting rid of all the spaces
okay so
any sort of formatting okay
it's gonna take a little while but
hopefully should
solve our problems so once again
just get rid of the spacing
it's very
fickle so make sure you don't delete any
divs
okay delete that's looking good
it's a few more
and last one just getting rid of
any potential spaces
messing up our code
okay great now let's save this file
refresh
you will see here how slice has cut out
just the name for us to use as a class
as a string let's carry on
i'm just gonna make sure that this is
all correct before we go on so
this drag ship length that's not going
to work
we actually need the dragged ship
so this we're going to grab this and get
it to child
nodes and then get its length because
we're going
into the drag shift okay and we're
looking at all the nodes it has
and however many nerves it has we want
to get that number and a shot
and assign it to the dragged ship length
cool save okay so just
how we now have our ship class name our
ship name or the last id
we also want to get the actual future
square of wherever
our last element in our whatever
ship we have is going to be in so for
this we need the data set id
because as we know this square is made
up of indexes from 0
1 2 3 all the way to 99 we want to know
what square the last element
of our drag ship is going to be in okay
so how do we do this well okay so just
how we got the ship class and the ship
name or last id
we now just want the id so i'm going to
show you how to do that
so let's i don't know what should we
call it less
last ship index that makes sense i guess
i'm going to grab the ship name with
last id now i'm going to use something
called substr
and the password minus 1. this is
because i want to actually just take off
whatever is the last item
in my string so i just want that zero
here or a one or
two or three or four or five this is
gonna be our last ship index
okay this is gonna be a string and
because i want to add it
to the index later on so our index from
0 to 99
i need to make this a number rather than
string for this i use
pass inch okay great
so now we have the last ship index so
you know if it's a destroyer the last
one could be one
if it's a carrier it's going to be two
and so on or carriers
longer isn't it the longest one so four
so now that we have that we need to add
this to whatever
data set id we have here to know exactly
where
what location the last element of our
ship is going to be in
so i'm going to call this let ship
last id i'm going to get the last ship
index i'm going to add it to this
data set id
once again i need to put this through
pass int to make sure it's a number
and not a string so we're just doing a
lot of picking out here so we've got
the index of the ship so it's last
element
we also have where that would be on our
grid i'm also going to need to pick out
the
selected ship so you know we have the
selected ship index
so that's going to be exactly which one
we pick so whether it's this one
or this one so i get the selected ship
index
and just like we did here
i'm gonna get the selected ship name
with index
and use sub string like this to get
the last item of the string and throw it
back to us
again we need to make this a number okay
so like that
so now if i console log selected
ship index
okay so we get a number if i get if i
click this one i should get two
and i do i get a two great so we're
getting the selected ship index cool
we're also getting the last shipping
looks great
let's carry on i'm gonna start cleaning
this up a little bit as well
okay now that we have all of those we're
ready to start writing our drag drop
function
okay i'm gonna try explain this as best
i can so
if we for example we're just trying to
get the length
of whatever wherever we are on the ship
so for example
if i grab this one here so submarine at
index number one i then need to know
that the end of our ship is only one
square ahead of us okay not two because
it was here it'd be two out of us
if it's here it's only one ahead of us
and if it's here it's zero ahead of us
we need this so that we know if we're
the left and the right hand side
of our grid so to do this it's quite
nifty i'm gonna actually get our
selected ship index
now if we get the ship
last id these are two numbers okay so
the last id
and the selected ship index i'm going to
console.log the ship
last id so you can see it as well
ship last id
ship last id minus selected ship index
okay so now if i refresh 66
okay that's because that
wherever my last id is
that's where the ship is landing so okay
for example to give it a test
if i grab this ship this here is going
to be index
nine if i drop this here i should get
nine
and i do great it's all working fine
now for example so let's go ahead and
console.log last ship last id here
because what i'm doing is i'm getting
the ship loss id
and minusing the selected ship index
from it
so this is to make sure that even if i
grab
my ship here i should still get a nine
and i do great perfect let's try another
one
so i'm gonna grab from here i should
still get a nine and i do
amazing simple
now if we are horizontal
okay so if horizontal
meaning that whatever shiva picked up is
currently
horizontal so it means that if is
horizontal is true
and we are picking up a shape it means
our shape is horizontal
we want to do the following we
essentially want a for loop so this is
how you write a for loop and we want a
loop
over the entire ship so however many
nodes it has
to render it in our user grid so
let i equals zero i
is smaller than dragged ship
length see so this is why we need the
dragged ship
length right here
we increment by one
okay so for example if you take the
destroyer that's only two
so we're going to loop over something
twice one two and we wanna add
the class of the ship which we also got
here so that's quite clever right okay
so well how do we do this we go into our
user squares
we then pass through this data set
id don't forget we need to wrap this in
parse
int to make it a number
okay now we need to plus i because don't
forget we're looping
then we take the class list add
and we add the ship class cool
so no matter which ship we choose now we
are setting the ship length and the ship
name class
which is pretty cool we can use this
drag drop function for any single ship
we want
now i'm also going to do something else
here
okay and i'm actually also going to add
another class of taken
this is just so we can use this later on
in our game
okay we just need to do one more thing
and let's account for the selected ship
index
because as you know what happens if we
pick the ship up from the middle
or the towards the end we need to minus
select a ship index here okay so that
means that if we start
here it will go minus minus and render
the whole thing
got it if this is zero it will unaffect
this
so if you're picking up the ship from
here it will just render it normally
okay cool so we've got is horizontal now
if we've got that for if is horizontal
else if so we can actually just be
really specific here so it's not
horizontal
so if this is false we also want to
follow it but we want a loop
so that it doesn't go by one each time
because this way we'll be going one two
three
we want to add width each time so we're
going to be rendering down
okay we're going to be literally adding
10 and 10 and 10 to the width
so it's literally rendering square 9
square 19
when 29 so 10 each time we're going to
do this using the width
constant so once again we get the for
loop i'm just going to copy it because
i'm lazy okay once again
we go into our user squares we pass
through
this data set by d
we make sure to make it
an number and not a
string then we add
width okay width
times i so this means i'm going to
either add pass through
0 or 10 or 20. call because with we set
as
10. once again we need to account for
minus selected
ship index and use
class list ad
to add the class i've taken and the ship
class looking good and if money doesn't
matter
i mean it will be but you know it's just
like a safety we return
okay this would look good good uh we do
one more thing
and that is so once we've already placed
our ship here we actually want to remove
it from the
display grid we do this simply by
grabbing the display
grid and using remove child so this is a
javascript method remove child
and we remove the dragged ship
great i think we are ready to test
this out let's save fresh
and grey there we go amazing
let's rotate ship to see if that works
too and fantastic
this is looking really good now we do
have a problem and that is that we don't
account
for if we're here so you can see our
ship sort of like
veers off i'm going to show you a quick
way to fix this
for this i'm actually just going to have
an array that of squares that you're not
allowed
to have your last ship index in okay
so const not allowed
so i'm going to imagine i'm actually the
longest
one so the carrier and essentially what
i'm saying is that the last ship index
is not allowed to be
in this entire column or this one or
this one or this one so all these
columns
three by 10 squares i don't want my last
ship index there right because
you know like otherwise it just it just
can't go there otherwise it will
this will stop it wrapping around
essentially
so which ones isn't allowed in well as
we said
this whole entire column here so index 0
10 20 all the way to 90. so let's add
that
not allowed i'm going to say horizontal
because we're working with the
horizontal right so
not allowed in 0 10 20
30 40 50 60 70 80
90. okay it's also not allowed in
anything from
11 21 12 31 so on to 91
so 1 11 21 31 41
51 61 71 81 91
and once again 2
22 32 42 52 62 72
82 92 and last one
3 13 23
24 33
43 53 63 73 83
93 cool let's close off that array
okay so that is our not
allowed array i'm gonna actually
set so let new not
allowed horizontal
now we grab this array
and then using splice we pass through
zero
because we want to start here and then
we
actually splice 10 multiply
the ship by multiply by the last
ship index how clever is that
so for example if it's a destroyer that
has
two squares so the last index is going
to be one
i take out i get this right here
but i only take the first ten okay that
makes sense right because if we have a
destroyer
the last ship index we don't want to go
in this
column right here again if it's a
carrier or
to take all of these so that's quite
clever i really
like that i think that's quite a good
solution i'm really proud of that one
once again let's do this for not allowed
vertical okay so this is going to be
similar
imagine if we rotate these we're
obviously not going to be allowed
in certain squares so
square 99 98 97
96 i'm actually gonna just gonna go away
all the way down to 60 so
95 94 three
okay and once again i'm probably just
going to copy paste oh
copy and paste
changing this to vertical
okay
great so now we just have to include
that here so
if our shape is horizontal and
we grab the new not allowed
horizontal and this
if this array includes
our ship last id but actually if it does
not include then we execute this
code okay so we execute this block of
code
if our shape is horizontal and our last
ship index does not
include any number in this
array that has been spliced by the last
ship index
great let's do the same for here so if
our shape is vertical
or essentially not horizontal and does
not include and not allowed or
not allowed vertical so once again it's
passed through the
ship last id
okay cool so now if we save that and
refresh this
we should great so now we can't place
our shapes here or here cool i think
we're ready to carry on
okay so now that we have
let's actually just get console log here
just so we know there's a drag end
okay now that we have finished our drag
and drop functionality
let's actually get to writing how to win
this game
let's call this game logic
for this i'm actually going to set two
more
variables here and that is going to be
let is
game over equals true
and let current player
equal user as default so the user is all
going to be the first player
we're going to use this to switch out
and make our browser tell us whose goal
is okay
so let's write a function
called play game firstly if it is a game
over
any point we just want to return okay we
don't want anything to happen
now if the current players what we set
above
deeply equals
user so it's the users go we want
to grab the element called turn display
okay so as a refresher is this whose go
right here that says you'll go right now
you want to grab that and then using
inner html we keep it as your go
okay just so we know same
if for example if current player equals
computer
we want it to say computers
go great now we also want to write a
function
that makes our computer take its go so
computer let's call a computer go
something we're going to write later so
if it's
my go so the users go i want to be able
to
click one of the squares and make
something happen right so i want to be
able to click
here imagine i can't see where these are
and try and guess
where the computer's gone so
i'm gonna grab the computer squares
and then using four each okay it's again
square this is the syntax for for each
so for each
square in there i want to add an event
listener
i'll pass through the event of click
because if i clicked one i want
something to happen
okay i actually want to
pass through an event i want to pass
through
the square that i've just clicked so
this square
into a function i'm going to write
that's called reveal square
okay so i'm actually gonna probably
actually let's attach this to an event
listener first so let's get the start
button
and use add event listener
now if we click the start button
we want to start the game so play a game
so on the click of the start button we
invoke
this function okay start button let's
probably spell that correctly
great now let's actually get to writing
our function called reveal square
now because our function is in here we
need to pass something through so
remember we're passing through the
square we just clicked
now if the square we just clicked
class list contains
destroyer we actually want to
add one to a destroyer account
like that so actually let's make a note
of these
let destroyer count we're gonna start at
zero
so keep that zero
what else we need we need a submarine
couch
we also need a cruiser count
battle ship count
and a carrier count okay
so i'm just going to copy this out
hopefully
this is quite easy to understand so if
the square we click on contains
this time a submarine
we add one to the submarine count
remember this is for the user right not
the computer
and once again if the square contains
cruiser so the class of cruiser we add
one to the cruiser count
and if the square contains
battle ship we add one
to the battleship count and finally
carrier
and we add one to the carrier count
great okay now we need something to
happen
okay if the square class
list contains one of the ships but
remember if what i did i gave each ship
a class of taken
so now if we click on any of the ships
because they all have a class of taken
added to them
we actually
can add a square class list i'm going to
add this time of
boom okay
this means that we've hit a ship so i'm
actually going to go ahead and probably
style the boom
once we make the boom let's make the
boom red
okay i'm actually going to change this
game over to
default at false so you're going to
start with the game
being playable so it's game over is
false
now going back here
so if it's game over we return if it's
not over we can play we then go into the
reveal square function
if the square contains a class of taken
so there's a ship in it we can't see it
because obviously it'll be hidden
then we add a class of boom
which we have then gone ahead and added
as red here
so let's save that refresh now if you
click the start button
let me click here great there goes our
boom
and it doesn't apply if the class is not
taken
you can see here that now this will have
taken submarine and boom as class names
pretty cool okay so some
more logic we can also add a miss so
else square
class list
add a class of miss so we would go here
which we might miss let's make it black
maybe background color
black fresh
start game there we go great
that's for hits and this is for misses
let's carry on
now we also want to make sure that we
don't
press on squares again because if you
press this again it will count as a go
and we don't want that so if
square class
list contains
boom this actually means we put bang
here
so if the square does not contain a boom
already
then we can carry this code ouch
okay that sort of prevents duplicate
clicks
on squares that have already been taken
so once we have this function reveal
square function
i guess the last thing we want to do is
actually change the player
so we want to change the current player
to the computer so now when we run this
function
we'll know that it's computers go and we
will be able
to implement the computer functionality
so again we need to invoke this function
again for that to happen
so next we need to write the computers
go
so yeah we're going to write a compute a
function called computer go
i'm actually going to put this on a set
timeout because i don't want it to
you know invoke straight away i want to
give it like a few tiny milliseconds
just so it looks
smoother so i do it like this i pass
through the function
and i'm going to pass through a thousand
milliseconds so that the function gets
invoked a thousand milliseconds later
now let's get to writing our function
computer go
okay i'm gonna do something similar so
like we have the count here we
also need to account for the computer so
i'm actually going to go destroyer let's
go
cpu destroyer account
cpu for computer
cpu for computer cpu
cpu and
cpu carrier not
cop cpu great now computer go
well we know that the computer goes
randomly so i'm literally gonna
use math random math random is a
javascript function
and if i multiply it by the amount of
user squares
or let's do com no let's use the squares
i mean it doesn't matter the same
amount in length but still i guess it
just makes more sense and it's nice to
read
and let's wrap this in math floor just
we
round down to the nearest integer got a
random number
okay so i'm going to use actually very
much the logic like we did here
so if user
squares random
so i'm passing through a random number
into our user squares
class list contains
boom so it doesn't contain boom then we
can carry out the following
i'm actually just going to copy paste
this to save us some time
but to change this so like that
to user squares and pass through
the random number that we have generated
okay and once again let's change this to
adding a score but this time for the
computer
cpu don't want to make any
spelling mistakes okay great that looks
good
once again obviously if it does
hit a square with boom we want to invoke
this function again so then we're just
essentially selecting another random
number for it to have a go
okay so once that is done we also need
to change the current player
to user
and i'm also going to use the turn
display
to display your go
i'm going to actually need to do that
because that's already done here
so yeah let's get rid of that cool
ah we also need to actually add a boom
so we can
see it in our browser so let's go ahead
and do that
class list add boom
okay so now if you refresh
start game click click
click click it's not changing back
that's strange let's actually turn
display in our html
your go let's save
fresh start game
great now it's changing back fantastic
we are now playing the computer randomly
let's carry on
the last thing we actually need to do is
check for wins so
this chapel wins that actually game over
so let's do that now
function check for wins
okay how are we going to do this well
it's simple
if destroyer count
so if the destroyer account for the user
deeply equals two because there's only
two squares
we want to get the info display grab the
inner html
and say so this is a check for wins but
we're also like telling you what's
happening on the way i guess
you sunk the computers destroyer which
is quite cool we're gonna
have it as an info and a check for wins
we also then add
we're gonna add 10 to the square account
i'll tell you why in a bit
essentially because you know like each
of the destroyers
or the ships has different amounts in it
i reckon if we get to the high score of
50
it means that we have sunk all the ships
right because if we were adding like two
and three and four and five because like
we could reach
the highest score we can get five which
is the carrier just by sinking the
destroyer
and the um submarine so this was just a
little more
foolproof i guess so count
10 so you're going to get 10 for each
ship you sync
so you've got that one so again i'm just
going to copy paste
so destroy account what else we have
submarine count
submarine and that's
three
then we have the perusa again that's
three
battle ship
okay so that's all yours as the user
let's just change
and finally the cruiser
okay so that's all yours as the user
cruiser carrier sorry oops
okay now that we've done that we need to
do the computer ones as well
so i'm just going to copy paste the
entire thing
now we need to change the destroyer to
cp
you destroyer just make sure
everything's spelt correctly
because that is a nightmare if it's not
cpu submarine
cpu cruiser count
cpu battle ship
and cpu
carrier count cool okay
now if destroyer count
plus submarine
count plus cruiser
catch plus battleship count
plus carrier
couch
let's put that actually in its
so just confine that deeply equals
50 okay it means you win
html you win
great and we game is over okay so game
over
should we write a function yeah let's
write a function so we can disable
everything
okay so once again that's if that's you
in and we need one for the computer ends
so cpu submarine
cpu cruiser cpu
battleship cpu carry account
computer wins
and came over okay this is looking good
and finally just the game over function
so if there is a game over
what do we want to do well we want to
get rid i guess of the
event listener so is game over equals
true
and start button remove
event listener
click start
or let's play games in it play
okay okay great that means we won't be
able to play the game we won't be able
to start it
if the game is over fantastic let's have
a look at that now
so let's place our ships rotate our
ships
start the game
and great
this is looking fantastic i'm so excited
to see
how this game is going to be made
multiplayer and styled
please take it uh please do follow the
other two
in this series so obviously i've paired
up with code stacker and web dev
simplified
they're going to show you how to make
this multiplayer and style it up to the
max
can't wait to see please do follow them
in my descriptions below












```

[youtube](https://www.youtube.com/watch?v=U64vIhh0TyM&list=PLRD1Niz0lz1uR4W3ms6DygWMjXW-6hDB_&index=9)  
[github](https://github.com/kubowania/battleships/blob/single-player/app.js)  
[ships one](https://codepen.io/mlapin/full/oNZxeWa)  
[]()  
[]()  




