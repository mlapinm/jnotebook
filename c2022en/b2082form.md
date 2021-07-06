


```

hello internet and welcome to another
one of my videos

this time all about making a contact
form that actually sends
the email 

so if you're anything like me
and love to watch web dev tutorials
you might notice 

there's so much out
there on the internet about contact
forms
how to create them so how to make them
in html and css

but there's not that much out there
about how to actually you know like
link up the logic for it to do something

so i am
here to show you how to do that in a
super
simple way 

i'm gonna be doing this with
html
and just html 

okay so i'm gonna be
making the contact form in html 

i'm
gonna be then choosing
what kind of inputs i wanna have 

so
perhaps i wanna
have like a first name input and then an
email input so the person can put in
their emails 

so i
know to email them back and then just
like a little text form or something

and then a submit button now the submit
button will essentially send whatever we
put in
to your email address 

so we'll be
testing that out too
and then send you to a thank you page


this tutorial is a great way to
essentially
hide your email address to the i guess
average user's eyes 

we're going to be
taking away the email address that you
sometimes put
on your static web page and hiding it
behind a form

okay so if you inspect the page it's
going to be there okay

so hopefully that makes sense if not
don't worry because i'm going to be
showing you how to do this step by step

contact form let's go please do like and
subscribe to my
channel it would really mean a lot as

that is how i can keep creating
more content for you guys so thanks very
much and
let's do it

okay so to start off i just have
a simple html file
in my project that i have called contact
form

it's just got some basic boilerplate
html for us
this is what we're going to start with

let's go
now the first thing that i want to do is
actually refer to the documentation that
i'm going to be using
for this 

i'm going to be using form
submit
i'm using form submit for no other
reason that it's the only one that i
really know 

that allows me to
edit the thank you forwarding page
relatively

easily they are free to use so
if you do use them please go ahead and
sponsor them support them 

i really do
appreciate anyone

who opens up their work to us like this
form submit essentially allows us to
connect our form
to their form endpoint 

and they will
email out the submissions
for us so this is going to be super easy

like i said


we are just going to be using html

there are some other options available
but what's the point i mean
html is the easiest 

let's go ahead and
do that
so to start off 

i'm simply going to copy
this here
and put it in our project
so this will essentially create a form
for us with an
action that uses the form submit
endpoint

and i'm just going to put my email
address in here

so i'm just gonna put in my generic
email address
that i use so people can contact me and

don't forget to keep the method as
post okay so if i now save this file
and view this in the browser 

so i'm just
going to get
our browser up 

that's what you will see
that is just a basic form that we can
have
all i've done is left an input for our
name that is required and an input for
the email that is required

and then a button to send
so before we carry on doing this 

i'm
just going to show you how you can
personalize this a little bit further

so we can have a thank you page so that
if we submit
it can take us to our own personal thank
you page 

that we have met
the default is just taking you to form
submits thank you page

so if we have a look at the docs here we
are using the
action attribute to essentially
enable submissions to be sent to our
email address


and next we also have an explanation as
to what the
input tag is and what we have put in our
code

so the other things that we can
personalize are for example if we want
to include a reply to 

so
if we want to make this required so for
example i can put this
in here and what i will be doing with

this
is actually asking the user
to put in their email address so i can
email them back

so now let's refresh our contact form
and there we go so now i am required
to put in my email address in order to
send my form

if i try send it without it i will get
a little message show up that is because
we put
required 

i'm just going to make this
smaller for now

so that is one thing that i've decided

that i want to have another thing that
we have is for example the thank you
page

so i think it's quite nice to have a
personalized thank you page

so i'm going to put that in here too 

it
really is that simple

and then i would just simply put my
domain name
and the file of choice so
i know that i'm going to be deploying
this onto
anya
kugo.com 

and
let's make this a thank you page like so

so now i'm going to actually have to
make that thank you page so let's go in
here

and i'm just going to create a thank you
html file 

let's put in some boilerplate
so i'm just simply going to copy that
paste this here

get rid of the form and let's call this
thank you page

and then in here i'm just going to have
an h1 tag
that says thank you 

this is just going
to be super basic because i'm sure you'd
like to do the styling yourself

i could also put this in a pages folder

just to make things a bit
neater and more realistic 

so now the
thank you html
file is in the pages folder 

and if i go
here well i just have to put pages
like so 

i'm just going to make this
smaller so you can see
we can also choose to have a subject

so i can choose for a subject to be
essentially hard coded for us 

when we
receive the email
so i can even put new
email
like so 

and of course a bunch of other
things autoresponse
template 
and so on

we can even choose to upload files but
i'll leave you to do that
by yourself 

okay so let's look back 

here
i can get rid of this as this is a
duplicate of
this one 
right 

here so i'm just going to
get rid of that and the
text input once again 

i'm just going to
put a place

i'm just going to put a placeholder here

so we can see
in the browser what this is for write
your message here 

and then
we can have other stuff for example a
first name
and so on 

we can make this bigger but as
this is
just a quick uh tutorial i think this
should be
fine 

okay so
now let's actually deploy this onto the
internet
in order to hook it up and so our form
works

and so that we get redirected to the
thank you page
on my domain 

so i'm just going to use
hostinger to do this just purely because
i already have a site that i own
on here 

and i want to essentially host
it on anyakubr.com 

so i
previously bought this 

so i'm just going
to manage my site
and put the files that we have just
written on it

so this will take a short second

i'm simply going to upload my file
select the file
and in my contact form project

i'm just going to upload the files so
i'm uploading the
index html page 

i'm just going to do
this one by one for you

that we made and then i'm also going to
create a directory called pages

so i'm literally just copying the
structure that we had in our project

and once again i'm just going to upload
the
thank you page and upload like so
great so now 

if we visit anyakubr.com
you will see our project now lives on
this
domain 

and if i write an email
so for example
let's put
joeblogs.
at gmail.com 

wants to message me and he
wants to email me something 

he wants to
say
hi i like
your videos for example

so all we are doing if i inspect the
page is we are getting rid of
my email to be visible from the user's
eye

but we can actually still inspect it
we're simply just putting it here
instead okay

so you know if you're a dev or you're
someone who knows what you're looking
for and i want to look then of course
people can see your email but you know

it's nice not to have it
on your page okay so let's click send
i need to activate this first before
using it 

so let's go ahead and do that

okay let's try again and send
we can actually get rid of this
recapture from form submit completely so

that it's just our own branding the
whole way through

i'll show you how to do this even though
it's not recommended so
stick with me got a filter
and we are directed to the thank you
page

that we made see
the correct path and everything

and then of course let's check our email
you will see there is an
email with the title 

new email woo
and if you look into the email you will
see that someone submitted an email
on the website 

the email will do blogs
and the message was hi
i like your videos amazing

if you want to get rid of any external
branding you can disable the recaptcha

however is not really recommended
because
it does help to avoid some technical
limitations

which form submit impose from time to
time in order to filter out bots
spam and other malicious programs 

but
you know if we really wanted to 

i'm just
going to show you what that will look
like

i'm going to take that line here 

and
then i'm going to go back
into my project that i am hosting
online 

i'm going to go into my domains
get annie okubo and then just find my
index.html file and actually edit it
from here so i'm just gonna post it like
so and click save

okay so now if we go to my website
and i'm just gonna put joe blogs
second email click
send 

and you will see it goes straight
to the thank you page

so hopefully you found this useful 

it's
just a quick tutorial that i wanted to
show you

i like form submit however there are a
few others

out there 
so if you have another one
please do comment
in the description below 

i'd love to
check it out too

thanks so much again for watching and
i'll see you soon






```

[Send emails from a HTML Contact Form](https://www.youtube.com/watch?v=r4RQ38EoLds)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  



