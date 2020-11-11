[1](2)
D:\mailCloud\prjother\tmp\1\c109_Configuring PPP and Verifying PPP.md  




[BLANK_AUDIO]
And now it comes time to configure P-P-P.
Very simple only two routers, not a big deal.
This is gonna example that you will see in the certification.
Alright, so we'll make it simple, straight to the point so we get there you know what to look for.
So we're going to configure [UNKNOWN].
The first thing obviously, let's put the ip addresses.
These routers are not configured,
you can see with the red dots that's there no ip address on there.
I will wave my magic wand, no I'm just kidding.
So like Vanna White here, all right.
So let's go ahead, this is 10114 network,
very simple, very simple.
S triple zero.
Okay.
So we're gonna enable config T.
Now I'm actually configuring.
When you do these labs be careful.
Because I know one of the students in the classroom they actually start doing these labs even with two routers, they for whatever reason,
the labs become an ordeal and this is why,
and this is what I tell them.
This is not an English class, don't worry about proper grammar meaning capitalize the first letter and on the list though
because they forget.
And then, they don't have, their passwords don't match or their username don't match.
So either do everything in lowercase or do everything in upper case, or have very good memory, cuz my memory is pretty much trashed.
On how you type these usernames and host names,
because they're important, especially when it comes to PBP.
All right, so I'm doing everything in caps, that doesn't mean you have to.
I just CONFIG T, ho, HOSTNAME, R1.
[BLANK_AUDIO]
So when I create the username on the other router it has to be, the same,
if it's different it will not work.
All right so what am I gonna do?
What do I think?
Well the IP address.
Interface F0/0/0.
IP address 10.1.1.5,
255.255.255.252 using a slider 30.
So we need a clock rate.
Clock rate.
No frame relay cloud here right?
Clock rate.
Formulating.
One, two, three.
One, two, three.
Because we've got it like that.
Do WR.
Cool?
Ctrl+Z.
Ctrl+Z.
All right.
So that's all we're going to do for right now.
We'll go to the IP addresses.
And let's go to this one.
And this is router two, router two.
We're going to say no.
We want to do things from scratch.
Ctrl+Shift+6 config t false name r2.
All right so we go, what is this?
This is interface 001 right?
I'm pretty sure.
All right [INAUDIBLE],
yes 001.
Hint 0/0/1 IP address,
depends on what I want to fix.
255.255.255.252.
No shut is the DTE portion of it and change state to down.
You know, if I did it on the S, 00,
both, no, no, okay, why is it down?
It should have came up.
10116, okay, hm, interesting.
All right, interface is 001, right, is that yeah 001, okay.
IP address [UNKNOWN] okay, Ctrl+Z.
Ctrl+Z, WR show IP in brief its telling me down down that's a physical error problem, okay interesting,
let's take a look at the other side there,
not doing no shut over here.
Oh yes I forgot to do a no shut.
You see?
Brain is gone.
Int S 0/0/0.
No shut.
DO WR.
Ctrl+Z.
Show IP and brief, and now it's up down.
Change date to up to go a little bit.
Now it's up, up.
We can ping.
10.1.1.6.
So we have connectivity, right?
Point to point.
We haven't configured any, any protocols or anything.
They're just connected.
You know, one router to the next.
So let's take a look at the interface.
Show IP interface S0/0/0.
Wrong command.
Show interface S0/0/0.
So [UNKNOWN].
All right, what is it that we're looking at?
Right here, by default Encapsulation HDLC.
That's why it's working.
Because that's the default encapsulation.
They're both Cisco routers, so they're going to be talking to each other.
They have the same proprietary information within their headers so there are no issues.
So once you put in the IP addresses, hey we're talking.
Not a big deal.
But it's gonna be a big deal now because we're gonna change the encapsulation time to PPP all right?
So let's go ahead and do that.
So, show interface as 000 you see, that's gonna be [UNKNOWN] by default.
Let's change that.
Config T.
Interface.
S, 0/0/0.
WNCAP, PPP.
That's all we're going to do.
Do WR, Ctrl+Z, show IP in brief.
[BLANK_AUDIO].
Now we have an up, down.
When you have that, that means there's an encapsulation issue.
All right.
There's, and you'll see print screens,
I'll show you maybe this.
All right?
But it's, when they show you that it's up,
down, you know it's either a clock rate that's not on there or some sort of protocol right?
Encapsulation mismatch.
That will be the errors that you'd be getting or it could also be CRC errors.
Okay.
That you're getting duplex mismatch.
All right or it will give you that as well.
But normally we're looking for encapsulation issues, or clock rate issues here.
But we know for a fact show interface as 0/0/0.
Then now we see this is what we don't wanna see.
We see, well here we see that the encap is now PPP.
But look what goes on.
LCP, the link control protocol is closed.
And the discovery protocol, control protocol, all right, it also closed.
Those major two and internet protocol,
closed.
So, but this one, this is what creates the link, right?
This is the one with the authentication,
with the compression.
And remember, PPP has an establishment phase and the first part of that phase is the link.
So, it tries to create a link with the other router.
It can't.
They can't at this point, because now the other router's running ACLC this was running PPP so it's not gonna work.
All right, well let's go to the other router.
Let's go to the other router and change it to PPP and see what happens.
So a RNCAP, PPP look at this!
Something came up there.
Look at that, interesting.
Show IP INT BRIEF.
Now it came back up, up, up.
Look at that, all right?
Up, up, let's take a look at the interface.
What is the interface telling us?
Show interface S0/01/1.
Now, this is what we wanna see.
LCP is open.
Internet protocol control protocol, open.
Discovery protocol control protocol is open.
That is what we wanna see when we're troubleshooting PVP.
If you see that these lines are closed.
There's something going on.
Either there's a mismatch and, and, and I encapsulation type.
Or the wrong user name.
Or the wrong authentication.
Things of that nature.
All right, so we gotten our both routers running PPP.
But we need to add authentication, for this add authentication.
So we need to create a username, and we need to decide what type of authentication to use.
PPP can use two types of authentication.
CHAP, PAP.
And it just so happens that the second part of the link establishment phase of PPP Is authentication.
So there is an authentication in this point, so they didn't even bother to look at it.
But now when we configure it, now it will look at it.
So, let's go in first.
Go to global configuration.
Let's create a username.
Username R1 goes right in R2, password CISCO.
And then we go inside the interface,
S0/0/1 and go PPP authentication check path.
Why are you gonna do both?
If one fails, the other one takes over.
Obviously, we want CHAP first because it uses MV5.
Where PAP is plain text.
But at least it will be something right?
So you can use either both or just use CHAP.
The one second one will always be the fallback.
Now you gotta do it in the same order in the other side as well.
So if in this side you do CHAP PAP, you can't do PAP CHAP on the other side because it will look at the first type of authentication that you're using.
All right?
So, what's going on?
It said it changed state to down.
Let's take a look again.
Let's do a WR, let's do a show IP INT brief, and again, up down.
Let me take a look here.
Show Interface S0/0/1 and,
again, we have our LCP closed.
And then our [INAUDIBLE] protocol closed.
Right?
CDP control protocol closed.
So, and the reason is, now we're using authentication on one side but we're not on the other.
So again, they both sides must be match.
Must match.
So let's go to router one.
And this is exactly, I'm telling you now,
this is what they're gonna be looking for in the certification.
Again, another configuration because you're not gonna be configuring this.
But you'll have print screens.
So, these are the things you need to look for.
Now, that's why I'm doing it like this,
okay?
So, again, let's configure a user name so if I'm on router one,
it will be router two.
So, user name, R2, password, Cisco.
Passwords must be identical.
You're gonna have different passwords.
Must be identical, everything is case sensitive.
Okay?
Look at that.
Just by putting the username, you see it changed state up.
But we still need to do the authentication.
So we go end, as 0/0/0.
PPP authentication chap pac.
Do WR.
Ctrl+Z.
Show IP in brief.
Now we're up, up again.
So we look at the interface.
Show interface as 0/0 oops.
Slide zero.
Enter.
Now we see again.
LCP is open.
And IP CP and CDP CP is open.
And that is what you want to see.
You want to see that that's open.
So ways that they, they'll trick you in the exams,
is just that you've got two routers.
And they'll show you the passwords for either or, or for both, and usernames for both.
And you gotta look and see if everything's okay.
Cuz now remember, the username.
[BLANK_AUDIO]
Should start.
The username is of the other router.
And it's plain text you see there, that's why it's zero.
I didn't put it in there, it put it in there by itself.
All right.
So, R2, right, on R1 and R1 on R2.
So the username is the host name of the other router.
And, the passwords must be identical.
So that's something that we'll mess around with as well.
Also, look to see if the end of print screen, again,
when you're looking at it, that the encapsulation type.
So they give you a screenshot like show interface.
S0, where am I, 1/0/0.
Make sure the, cuz they'll give you, you know, a side by side comparison.
That they're, you know, look at the encapsulation.
You look at the encapsulation.
Make sure that they're both using the same, all right?
Cuz if you have PPP on one, HDLC on the other, [NOISE], not gonna work.
Not going to work so these are the things that they look for.
PPP is not difficult at all and the questions related to PPP is exactly what I just showed you.
They're going to be looking that you know they're going to be looking for that you know that has to be the same type of encapsulation.
That if you're going to use PPP, it can be whatever manufacturer or router.
If you're going to use ADLC, they better be the same.
That's another way they can trick you.
They can have Cisco router, Juniper router.
They're both using ADLC.
Will they talk?
No they won't, because it's proprietary.
These are the pitfalls right there.
This is the configuration of PPP.
There's nothing to it.
And you can see, let's ping again.
10.1.1.6.
We're back in business.
We're back in business.
We have the same, we have the correct username and password.
We have the right type of authentication,
the right order.
[UNKNOWN] on bull.
And we have the right encapsulation type,
which is PBP.
Though obviously, the IP address has to be correct.
All right.
So PBP most definitely is the most popular one of all.
It's an open standard.
You don't have to worry about it.
Everybody uses it.
But on your test, please be aware of that.
Be aware, and be careful, pay attention to detail, that the routers are,
the routers are Cisco, or they're not Cis,
well yeah Cisco or non Cisco, all right,
for the encapsulation.
All right ladies and gentleman, this is PPP.
I'll see you in the next one.
[BLANK_AUDIO]