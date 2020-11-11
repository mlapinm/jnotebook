[1](2)
D:\mailCloud\prjother\tmp\1\c107_show commands for frame-relay.md  




[BLANK_AUDIO]
Welcome back everybody.
All right.
This is the last lesson for this session in frame relay.
And basically what I'm gonna do is show you some show commands that you should familiarize yourself with.
That will help you on your certification.
So, let's hit Enter here, we're in router two, doesn't really matter, same thing for all the routers.
Show frame relay, and remember, packet tracer is there for,
to help you pass certification, so these three right there,
is what you need to know.
So, show frame relay.
LMI, let's do the first one.
All right, this one, if they run into a question, if you run into a question,
that says, hey, what command will show you the signaling method that the router is using to communicate with the others in the frame relay?
Right?
The LMI type that is what you're looking for.
Signalling method LMI type.
I didn't tell you LMI cause then you just type in show frame-relay LMI.
So today, what, what command can you type to see the signalling method?
Show frame-relay LMI that will show you the signaling method.
There it is right there.
All right?
And this is really the,
all this information that you see here is between the router and the frame relay cloud.
Obviously, there's nothing going on.
[LAUGH] There's no information going back and forth.
So that's why you see all the zeroes and things like that.
But that command show frame-relay LMI,
that's what it's showing you, the signalling method.
That's what do you wanna see.
Now of course you only show the errors and things like that, and how many links sent and received and,
between you and the friend and the cloud but your thing to remember is the signalling method.
What type is it using?
All right.
So that's for the frame-relay LMI.
The next one is show frame-relay PVC.
A little bit, a little bit more and I'm telling you right now,
in your book, this is, this, this print screen is right there.
All right, so what do you want, what are things you look for here?
One, this'll show you your local DLCI,
those DLCIs are local to your router,
okay?
It will show you the status, that is active, which is good.
Cause it will be, if it would say delete it, that means there's something going on,
on the far end.
There's something going on, on the far end.
So the status of this DLCI is active which is a good thing.
That's how you wanna see.
You see delete it here, there's a problem across on the other side.
The next thing that you wanna look at here are these in BECNs, all right.
Your DE, look at your DE bits right there.
All right, and you have out FECNs.
All right?
So BECN and FECN.
What in the world is that?
Backward explicit congestion and forward explicit congestion.
BECN really your routers don't act upon it unless you tell them to.
BECN says, hey, I am experiencing traffic towards the destination,
meaning where I just came from okay, cause they went back there and we came back.
Where I came from, I'm experiencing congestion.
Forward explicit congestion, right?
FECNs is telling the destination router,
say hey, I'm experiencing traffic.
So, if these numbers start going up,
because usually they'll tell you how people in the corporate or people in your company are whining about that they're experiencing congestion going
to their corporate office.
So the number you're looking for it's like okay so I'm experiencing going to over there.
That means as I'm traversing this network,
right?
Cause the information is coming back to me is the BECN.
All right.
BECN, so these two right here are things you should look at,
all right, for congestion avoidance.
These are your DE.
Obviously, we're not going over CIR,
right?
Cause we're not transmitting anything but these are your discard eligible bits.
Discard that means if they are marked with DE bit,
that means that they're eligible to be dropped, eligible to be dropped.
Remember you purchase an access rate.
If the toggle has the bandwidth available,
it will send out your information but if it doesn't, [SOUND] that traffic is gone.
Definitely, if you go above your access rate, all right?
If you're doing the maximum burst rate,
your packets are not going anywhere,
period.
So, you need to pay attention to these numbers right here, because if those numbers, on a weekly basis, keeps going, keep going up, that's an issue.
You need to analyze the network better,
and find out,
hey why are we having this bandwidth issue?
Why am I getting all these help desk tickets to you know, that I,
you know, getting to the destinations, or sending email, or what have you.
It's, it's, it takes forever.
So, you need to keep an eye on this.
Now, obviously, you're not gonna be sitting in your router doing show frame-relay PVC to take a look to see if there's congestion.
You will know there's congestion.
One, you'll be getting a lot of calls at the help desk.
And two, you're gonna be using a third party software.
Whatever it is to monitor, and which we'll be talking about in lessons to come, all right.
You'll be monitoring your network through these third party softwares that will send you an email.
Right?
That will send you if you have a beeper,
if you're from the 80s and you have a beeper still.
All right.
You will, you will get a beep.
All right?
I don't know.
I mean you might get strike by lightning to let you know that, hey, go take a look at your router,
there's something going on or whatever the case may be, all right?
You'll be using third party software.
You're not gonna sit there and type show frame-relay PVC console.
You're not gonna be staring at your router.
Okay, I'm looking at it, I'm looking at it, yeah, okay, I.
No, that doesn't happen that way, okay?
But again, for your test, if you get asked, these are the things you look at.
BECN and FECN, and DE.
Backward explicit congestion, forward explicit congestion.
I'm experiencing traffic where I just came from,
I'm experiencing traffic where I'm going to.
All right, and then the discart eligible,
it can go beyond your CIR.
So that's what the show, show frame-relay PVC does show you a lot of things.
All the congestion information, plus your local DLCI and if the PVC is actually active, so it does show you a lot of things.
Now as well,
the sub-interface, but again that's not a big deal, you can see that in the start.
But the FECN, the BECN, the DE bit, all that is crucial,
this screen right here is in your book.
That should tell you something, all right,
so be looking for that.
So that's show frame-relay PVC, and that's your show frame-relay LMI.
And the last one, a show frame-relay map,
we haven't done any map statements,
all right?
But again, here it's telling you, oops.
Ctrl+Shift+6 by finger on the keyboard.
[BLANK_AUDIO]
All right.
Show frame-relay MAP.
They're showing you your local DLCI and it's broadcing,
broadcasting out the information.
It's on a point-to-point.
If they show you a print screen of a frame-relay map statement,
always remember it has to be the destination IP address, and the local DLCI.
If it's the other way around, it's wrong.
Period.
It is not the destination DLCI.
It is not the source IP address.
The correct way, I'm gonna say it again,
would be the destination IP address and the local DLCI.
Okay?
So if they were to show a frame-relay map statement.
If they do, then you know.
If they don't, then don't worry about it.
But definitely, be familiarized with the show frame-relay PVC for those congestions.
And with a show frame-relay LMI so you know what type of signaling method the routers are using.
All right, this is frame relay everyone.
Next session, we get into PBP which is really easy to do.
I'll see you then.
[BLANK_AUDIO]