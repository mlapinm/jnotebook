
[Connect Four in JavaScript](https://www.youtube.com/watch?v=aroYjgQH8Tw&list=PLRD1Niz0lz1uR4W3ms6DygWMjXW-6hDB_&index=3)  

```
okay are we ready
hey everyone and welcome to another
javascript gaming specifically to
practice our js skills

so if you want to do that or you know
you simply just want a gamer connect for
and want to try code along then please
go for it

it's gonna be fun 

now if you watched my
videos before you will know that we
don't really do styling in these 

these
are videos just for you to practice your
logical thinking
which means it's gonna look ugly 
but hey

that part is gonna be totally up to you
i want you to take the game make it your
own level it up it's yours 
this is essentially 
what we're going to end up
with by the end 

so like i said super basic now for those of
you who perhaps have never played connect 4 before 
let's actually go through
how we're going to solve making this game 
so of course we're first going to make our grid
we are then going to make a event listener 
listen out for on clicks
and
on the click it's going to put either player 1
or player 2's piece now
we can't put the pieces anywhere on the
board right because you know
gravity they have to sink to the bottom
so if you want to go
in a square that perhaps you can't go in
we're gonna have an alert
that tells you you can't go there you of
course
win connect four by having four
dots all in the line so that
horizontally
vertically or diagonally so we're going
to be doing
that part as well now here's my favorite
part when you have
finished your game please do share it
with me
i would absolutely love to see how you
have taken this tutorial
taken the game and really made it your
own so you know if you want to put like
batman's on your coins 
then please do if
you want to make the grid bigger
or have some sort of like level up
feature 
when you go to the next
level then please go ahead and do that
share your game with me on twitter
youtube instagram
whatever you wish 
okay what are we
waiting for
let's do it as always please do like and
sub to my channel
as it really does mean that i have the
means to keep creating
more content for you guys 
so let's do it
okay so let's do it 
as you can see here
i've already have
my project set up with an index html
file
an index a js file and a styles css file
which we now have to hook up to work
together
i have gone ahead and put in some html
boilerplate for us 
we have a title which
no will not appear in the browser it
will however appear
in the tab which i'll show you later
and a link tag so we can link our style
sheet
now as our style sheet is in the root of
our project i simply have to write
styles
css to hook it up

i'm also gonna put in a script tag and
if you know me
i'm gonna show you two ways to put in
the script tag
we can put in a script tag
at the bottom of our body so if i just
put a script tag with the source and
once again
it's in the root of our project so the
index.js file
so that is what our script tag
um is linked to 
i'm just going to put a
chart set
as well whoops
so char set
uh that one thank you very much
now if you know me you i will now tell
you
that you can't be your script tag at the
bottom of the body but make sure 
that is
after any html that we want uh to put in
or alternatively you can also put it
in the header so in the head
i'm gonna just put it here just to show
you another option because we can
also use a dom content loaded we can use
an event listener to listen out for
uh once everything here is loaded and
some people say that is a more foolproof
way so i'm going to show you how to do
it now
as always the option is up to you if you
prefer to use the script tag at the
bottom
of your um body that is fine just don't
use both
otherwise you'll have two scripts
running 
so i'm just going to leave mine
here 
because i want to show you how to
do this
you can also use the document and use
add event listener
to listen out for when the dom content
has loaded
okay and then once it has all our
javascript 
we're gonna put in between
these two little curly braces
okay done now
let's move on now 
because i want this to
be a sort of beginner
lesson we could use javascript to add
all these divs for our connectful game
but i'm just gonna
keep it very simple and put them in here
in our html
so our connect four game is gonna have
it's gonna be seven
squares wide and six squares high
okay but i also want to put in like a
secret seven
squares at the bottom because we want to
tell
our browser where the bottom of the grid
is and this is just a solution that i
thought of of course
like you don't have to use it but this
is just the way that i would
solve it in order to build our game
so what's that seven times seven is 49
let's do it
i'm gonna make a div that i'm gonna give
the class
of grid because this is where all the
magic is gonna happen this is gonna be
our game grid
okay so let's call it a class now any
div that i'm gonna put in here i
essentially want to be
or represent the little squares on my
connect for
game 
so as i said i'm gonna need seven
times six for the game but then a secret
seven which we will go into later so i
need 49 of these
so i'm still just gonna face one two
three four five six seven
eight nine ten of course like i said we
could do this in javascript

um i do do it i do add these divs with
javascript in a lot of my other games so
if you want to check out how i do that
it's a create board function that i use
pretty
generically please go ahead and check
those out
so one two three four five that's 50
divs i'm just gonna get rid of the
last one to make it 49.
okay now i did say i wanted the last
seven to have like
a like uh represent the end of our
you know connect four board so i'm just
gonna give them a class of
taken again you will see why
later on so there's one
two three four five
six seven great
so we've got a div with a classic grid
with 49 divs in it
now let's actually style it up to uh see
it visually
so because we want to grab the grid 
i'm
going to grab the class 
so use a dot for
class
of grid and i'm going to decide
that i want all my squares to be 20 by
20 pixels

which means that i need to make the grid

well let's first give it a border of one
pixel solid and as a default it's going
to appear
black solid one pixel black
and then height i'm going to go with 120
pixels of course
and then width 7 x 20 is 140 pixels
okay and now while i'm here i'm also
going to style every single div
inside the div with the class of grid
and i can do so like this
by once again grabbing the class of grid
and then every div inside of that so
that's how i would write that
is going to have the following styling i
just want them to be
height 20 pixels and
width 20 pixels now i'm just going to
give
a background color for now so we can see
what's going on
so now if i just copy
the relative oops copy the path sorry
and then go to a browser
and paste it you will see there's my
grid
and there are all the squares but it
obviously doesn't look right right we
need the squares to fit in the grid
so i want them to sort of like snake
over
so i'm going to do this by adding
display flex
so now if i show you what that looks
like and refresh
whoops fresh
okay 
now they're in there but they're
all squashed look how
thin they are i don't want that i wanted
to snake over
so i'm also going to use flex wrap
wrap and there we go
okay so now oh i think we've got too
many one
two three four five six seven yeah 
we have too many but that's
that is fine seven times one two three
four five six seven so we need to delete
seven ten more ten of these is to leave
ten we did a few too many so
one two three four five six seven eight
nine ten delete
okay great so now they all fit 
if i just go over the one two you will see
how they are snaking over
and then of course we have the last
seven which have the class of taken
so so they're outside of my grid and
we're just using them
to let our code know that this is the
bottom of the connect4
uh board game is that a board game you
know what i mean game
okay so i'm just gonna get rid of the
background color blue
and while we're here i'm gonna add a
class
of player player player
one i'm gonna give it a background color
of let's say red
and then a border radius because i'm
gonna make them
circles of 10 pixels because border
radius
on a 20 by 20 square is gonna make this
a circle
so we've got play one and let's make
player two
let's move to player two blue
okay cool 
so we've got everything we
need
now let's start picking out elements
from our html
and our javascript so we can work with
them 
so the first thing i'm going to do
is actually pick out the squares
so i'm going to save them as squares 
i'm
going to use
document query selector 
all thank you
tab 9
to pick out and once again this is going
to be useful 
because we just learnt this
to pick out all the divs inside the div
with the class of grid
so that's how i would do that
so we've just picked out all the squares
uh now
i also want a way to i guess tell the
user whose go is
so i'm going to use an h3 tag for this
and i'm just going to write
the current player
is player and then i'm going to use a
span tag to just interrupt that h3 tag
and i'm going to hard code a one
and i'm just gonna use an id just in
case we wanna use another span
right 
so i'm just gonna put current
player
and while we're here i'm also just going
to
put a place we can show the result 
i'm going to leave it empty for now 
and just give an id of results
okay so that's looking good 
and in here let's also pick out
uh let's pick out the result
so const result equals document query selector 
i could use get element by id
but it's totally up to you 
i'm gonna use
query selector to look for an id
so we use a hash for id 
we're looking for the id of result
and another id we need to pick out 
which is the display for the current player 
so i'm just going to display current player equals 
once again 
we get the document oops 
and we use i'm going to use query selector again 
just to make everything

consistent i'm going to look for the id
and save it for our javascript

okay we also need to let our javascript
know who the current player is 
and we hardcoded one so i'm just gonna put this
here two
i've used the let as this will not
always be one 
it might be player two so
that's why i use the let
there okay now i think the next thing 
i want to do
is add um an on click to all our squares
okay so i want uh essentially
something to happen every time i click
any of the squares in
our connectful grid 
so i'm going to use
a for loop for this 
oops making sure
that i'm in the curly braces
four let i equals zero
and now because we're dealing with the squares
uh i could use the square's
length that'll mean even including all
the taken squares
and
i think that's fine 
let's just carry on
and see what happens
okay so for each of the squares in my
squares in my uh grid sorry
i want to get the squares
and then for each one because they're
looping so i'm going into the array
and i'm looping i just want to add it on
click
and then on the click and we need a
function so i just use an arrow function
for now i'm just going to make an alert
that says you have clicked square
just so you can see what's happening 
i want to show you 
so i'm just going to use the i and
save 
now let's refresh
so if i click here
oops 
you have clicked square 13.
let's refresh 
i'm going to click the first one 
you have clicked square zero 
because as you know we start erase from zero
okay so this is working 
we have added an on clip to each of these squares including these ones 
but for now let's just ignore it
um we'll decide what we want to do with
that later 
but i think that's fine
cool it's pretty fun isn't it 
we know exactly which square we have clicked 
yeah
okay so we actually don't want this alert 
i've just done that so we you can
see what's going on before me
coding any further 
because i think that is important
okay to delete well the first thing that
we want to do is decide how we're going to solve this
so obviously in connect four when you
drop the little um
[Music]
token we need to account for gravity
right so i think

let's do it that if the square below
your current square that you want to go
is taken you can go on top of it right
simple so that's why we added the class
of taken
at the very bottom because at the moment


we're going to write something that
says you can only go on that bottom
so only on this
row because all of these are the class
taken


so if the square
below your current
square is taken
you can
go on top of it


cool i'm just going to minimize this
because we don't need it
so how do we write this in code if
we go into our squares array
i'm just going to use i but i'm going to
add 7
because i want to check what's directly
below the current square that we are so
we do that by adding seven to the
index number of it and then
if that square class list contains
t can well we can go right
so i would do it like
oops this so if that is
true and the square directly below us is
taken
uh if the current player equals
player one thank you tab nine if the
current player equals
player one i don't know why it keeps
formatting like that i don't like it
um well then to that square so once
again that square
i'm gonna add the class list
um i'm gonna add well i'm gonna add
taken for one
because it's obviously taken but i'm
also gonna
add squareless class
list add player
one okay
and then of course we want to change it
to player two so current player
equals two um and then let's display it
so display
current player
in uh html uh
and let's just display whatever the
current player is because we've just
changed it to two so let's actually show
that visually to our user
okay ah click okay call is changing
okay now let's play a twos go so we
can't do anything so now
now let's write some logic for if it's
player two
um if
current player equals two
well then essentially we just it's going
to copy this really because we're doing
the same
but just we're gonna add player
two and then change it back to player
one
cool um and then i'm also just gonna add
an you know like an else because we've
got these if if
this or we could just um
we might have to do an else if
i think we might have to do that
okay yes we might have to do that else
if
else alert
uh can't go here
okay so now
change player two player two goes let's
play one again
player two oh can't go there where's my
alert
where's my loud it's annoying
hmm what did i do ah right i put it in
the wrong place ah
else if alert
okay so now one
can't go here can't go here but play two
can go there
can player one go here yes it can so
awesome
so that's why i did the else if if i
just got rid of this
and just did an alert well obviously
yes i know i can't go there i can click
here it'll just tell me i can't go there
even though i can
because it's uh sort of like executing
this and then
executing that anyway so that's why i
did else if
else cool
okay so we've done that part of the
logic
the last thing i need to do is check the
board for
wins so i'm going to do that with a
function
um this i do actually want to execute
every time we click
so there's no need for else if if we
just want to check the board every time
we click on the square
so now let's write our function i'm
going to do up here of course because
we need to write it um
you need to write the function before
use the function so function
checkboard
like so now this might not be
like the most uh
i guess it's a lazy way to check for
wins
i mean if you want to uh i guess make
this cleverer please do and share with
me i just couldn't be bothered it's a
small board right
so i've just gone ahead and figured out
all the winning combinations on it
so please feel free to take this i'm
gonna obviously put it
in my um github
but i've just got a winning uh a raise
array again if i've got any wrong in
here i'm sorry
um let me know but con swinging arrays
and there we go so i have literally just
pasted
all the possible winning arrays
uh so by using my index number of course
on our board
once again if you can think of something
clever then please do i'm really lazy
this was fine okay so we've got our
winning arrays
now let's actually use them in order to
check our board
if any of the players have a winning
array
so to do this um well again i'm just
going to use a
for loop so for this time let
uh i we can use i we can use y
like it's totally up to you whatever you
want
okay so as long as y
i'm gonna get the winning arrays uh
length it's gonna loop over
but we're gonna loop over each one of
these right we're not looping over this
this this this we're just looping over
one two
three each of these so however many of
those are
that's however many times we're going to
loop and increment by one
now um it's always i think it's always
important to use const as much as
possible we don't use a let this is
blocked scoped
so that's why i'm using a const we're
gonna say
for each time we loop we're gonna save
square one square two square
square three square four so i'm
literally just gonna name it square one
squares for the square one we're going
to go into the squares array this time
so it's const square one well let's just
say we want to get
the index 13 we need to go into our
squares array
and then i'm going to literally pass
through so i'm going to go into the
winning arrays
and go into the so i'm going to loop
over the first one
so let's just say we're doing our first
loop i'm going to grab this so i'm going
into the winning arrays going into the
array and i'm grabbing this
and then i want to get the first item
from it
so i need to pass through a zero
so that is how i would do that and
whatever that
is i'm saving a square one
okay so i hope that makes sense i'll
talk you through it again
we now need to get square two
so what i would do is um of course we're
checking on our squares grid
so if i've just uh checked
yeah the square on our board with index
zero
so for example let's go back to our
board
say i want to check this is what we're
checking we're taking the square with
index zero one
two three four so we're checking those
so of course i would then need to go
into my squares array
i'm gonna go into it and then i'm just
gonna pass
through this value so i'm gonna i need
to now get this value which is a one
so i need to go into my winnings array
this is an array
so why still because we're still in the
same ones whatever y
is is going to be the same for this so
winning
arrays and then i need to get the
item with index one so zero one so this
will return
all of this essentially is returning
back
one the number one okay so i'm going
into the squares array i'm going into
the squares with index
one okay so hopefully you get that
i'm just gonna carry on if you don't
please feel free to reach out and i'm
happy
to explain further
and one more of course because we need
to check for four matches
and there we go so we are looping we're
grabbing all four squares that we want
to
check okay so now
we want to check um
check those squares
to see if
they all have the class
of player one okay
so if um
i mean this is probably the easiest way
to do it i'm gonna go
if squares one i mean we could do
another loop but there's only four so
i don't think it's worth it but please
feel free to do another loop if you wish
i'm just gonna go squares class
if square if that first square that we
picked out if it has a class
that contains oh god contains
uh player one
so if that is true
and the second square contains play one
how do i do this so it looks neat
ah there we go and
the third square contains the class of
player one
and the fourth square contains a class
of player one
and if all that is true
well then we want to get our results
that we picked out was it result
oops don't want that i think it was
result
result okay
you want to get a result and use inner
html to say
player one
wins okay and of course
i mean let's just copy this for player
two
just make sure that that's an if
statement
i'm just going to copy all of this
actually so we have the pseudocoders as
well
oops okay
i'm just gonna use command d
two player two wins
okay i think that's all we need
whoops we did this outside of our for
loop
so i'm just going to get all of this
right here's our
function okay then we need to actually
put all of this
inside
okay
i'm just gonna make sure
if then this
oops then
otherwise this
so that is our loop great
i'm just gonna format this a little bit
better so just go command
so just tab it out and click save
and there we go
so now we play the game
uh just need to make sure we can only
add players
if that space is not currently taken
okay now let's play so now
we play the game
and we get a four so there we go
three four tada
we have now finished our game of connect
four you will see that the game
works okay so that is how
i would build a gamer connect four in a
super simple way
please do feel free to take this game
make your own
silent up uh give it next extra levels
if you can think of a funky way
uh to not have to write out all the
winning arrays
uh then please do let me no like i said
i was pretty lazy with this and i just
stuck them all in there because i
thought you know like it's
it's a small grid thanks so much again
for watching and i do really want this
to be a conversation so yeah please do
show me your games okay
nice later



```