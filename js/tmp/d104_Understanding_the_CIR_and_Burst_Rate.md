[1](2)
D:\mailCloud\prjother\tmp\1\c104_Understanding the CIR and Burst Rate.md  




Welcome, everyone.
I have traveled through time,
as you can see, so I can explain to you in bite-sized morsels, frame relay.
Frame relay is the most confusing one to understand.
Not that it's confusing to configure,
it just has a little different I guess you want to say, components to it.
And there's a lot of different ways of configuring frame relay, okay?
The first two things that we need to be aware of in frame relay is these two terms,
your CIR and your access rate.
Your CIR is your committed,
I don't know about the spelling here,
committed information rate.
This is what's guaranteed.
Guaranteed.
Wow, I can't spell today.
I don't know.
All right.
Meaning that this is what, if you,
let's say you call your provider.
Let's say, for example,
it's AT&T, or whoever.
And you say, listen,
I wanna run a frame relay and I only need 256 kilobits per second.
So 256K, all right, that's all,
that's all you require.
So that's what they're gonna guarantee you, that is what that CIR is.
So from zero, or let's say 33 kilobits per second,
up to 256 kilobits per second,
they will guarantee you that traffic.
Now, you can, you'll,
you can purchase an access rate.
Of, lets say T1, all right,
a whopping, mega, megabits per second,
all right, that's not guaranteed.
Anything above 256, it's not guaranteed.
If the telco has it available for you, then it will send it.
But if you go beyond that, and I'll give you a sneak peak into the future since I, I can travel through time.
It will mark those bits that go beyond your CIR with something called a DE.
I'll put that there.
And I, I'll put a little statement here.
If you surpass, the CIR,
the bits will be marked.
I'll get out of the way so you can see it.
With D.
I'll put it in quotes.
Quotes DE.
Okay?
So if you go beyond your 256,
which is what they're guaranteeing you,
because this is what you said you,
hey, I need 256.
This is my, you know, that's my analysis.
This is what I found out that I require.
So they can guarantee you up to,
key word, up to 256.
All right, but since you purchased an access rate of a T1,
so, you're saying, hey telco,
if you have the bandwidth available,
I would like to go up to that T1 speed,
if it's available.
Sure, why not, all right?
It could be at 1 in the morning,
it could be you know, 1 in the afternoon.
And you may be sending data, or you may be backing up things or,
what do you call this synchronizing your domain controllers, what have you.
Right, DNS servers.
It could possibly get to 1.544 megabits per second if the telco provide, has the capability.
Meaning, that they have that bandwidth available for you because you're actually sharing that bandwidth with other people.
Remember earlier, I said that it was,
things you call frctional T1s,
people share T1 lines.
So they sell them in 64 kilobit chunks.
So you're sharing this line, that's why you're getting this frame relay.
So, that's why they tell you,
all right, we can guarantee you up to.
Doesn't mean you have 256
kilobits per second at all times,
it means you can go up to 256 and they'll guarantee it.
Beyond that,
since you got an access rate, of,
of T1, if it's available,
they will send it.
But again, those bits will be marked and later on, when we do show commands,
these are some of the things that you want to look at.
Cuz if you're constantly getting bits that are being marked DE, and they start growing, growing, growing,
growing and growing,
then you need to purchase more bandwidth.
Now that's just one of the ways that we monitor our network.
You'll see when we get into the monitoring of our devices and when we get to that particular session.
We'll talk about other types of things that we can do to monitor our network.
Our bandwidth and stuff like that, utilization.
But, when using frame relay, definitely,
one of the things we wanna pay attention to, is that DE, right?
Those DE bits.
That, if they're marked,
that means that hey,
I'm going beyond my CIR,
my committed information rate.
So that means my analysis wasn't as good,
or hey, we're doing a lot more business.
We're transferring a lot more information out the, you know,
throughout the internet.
Hopefully that's the case.
It's not somebody watching movies on YouTube.
Then that's why it's causing your bandwidth.
But again,
we'll get into that in the other session.
How you can find out that Joe's been watching YouTube movies throughout the day instead of doing what he's supposed to do.
Right?
So definitely, if you have a frame relay connection, these are the two,
first two things that you need to be concerned with.
All right, because your, you need to,
when you call your provider,
they're gonna ask you, well, what's your bandwidth, how much bandwidth do you want?
Because you can actually pay less money using a frame relay,
and you can still make it look like a T1.
Now remember, you're not using eight you can make it, I'm sorry,
you can make it look like an lease connection, right?
Remember a lease, we're using HDLC, PPP yeah you need that bandwidth at all times.
Well you can make frame relay look like a leased line, but pay like if it was a circuit switch.
Very cheap, very inexpensive, all right,
based on your CIR and your access rate.
Because when those two numbers become the same, you know, you can actually,
what they call burst, or maximum burst,
or MBR, you can go up to.
If it goes beyond the T1 obvi,
if it goes beyond that T1,
you can kiss that those bits goodbye.
But anything up to the access rate,
if the telco has the capabilities of it,
definitely they'll, they'll, you know,
it'll go through, but again,
they will be marked with the DEs.
Now, I was gonna say something, oh, when we're using frame relay, you're not gonna use PPP or ACLC, when you do frame relay,
your encapsulation is frame relay.
When you do the end cap,
you do end cap frame relay.
Now there's something called signaling methods, all right, within frame relay,
which is, you have Cisco, where you look for the default for Cisco devices.
All right, that's your LMIs.
And you also have ANSI.
And, I always forget this last one,
which is Q933.A, or Q.933A, or something of that nature.
I never can remember where that dot is or Q9333A, something like that.
But, normally it's,
it's either Cisco or IETF.
I mean Cisco, ANSI or that last one I just mentioned the Q9333, or 933A, okay?
But normally, when we configure this,
it's going to be Cisco router so we're gonna have it DLMI default at Cisco.
Now, you yourself,
now I'll show you the lab back here this is the basic,
one that we're gonna start with.
Cuz remember, you got that huge lab,
which has a frame relay connection in the middle.
Your devices, normally, I say remember the S00's have the clock rates.
Remember, that's not the case.
Your provider,
is where the clock rate goes.
You're provider is the DCE.
Routers, test question,
sounds like it, at least on my exams.
Test questions.
Your routers, by default, are DTE.
Data terminating equipment.
It is your provider that gives you the clocking,
the synchronization for information to go across, okay?
But, as far as the test is concerned,
one of the things that you need to be aware of, as far as this, right now.
Cuz again, I'm breaking this down into little pieces so you can understand frame relay and then we can actually do the lab.
The first two things, the first two terminology terms is the CIR,
which is the committed information rate,
that's what's guaranteed.
And the access rate, where you would like to go at if the bandwidth is available at your provider, okay?
Again, and again, you will not,
you will not be using PPP or HDLC.
Also, I wanna repeat this again.
You can make frame relay look like a leased connection, all right?
If you can match these two numbers, right?
You can make then, you know you can be going at 1.544 megabits per second.
But, making it paying for,
like if you were paying for a circuit switch, like an ISDN line.
So you can make it look like a leased line.
All right, frame relay.
Just remember that anything above your access rate,
anything above your access rate.
Those bits will be, or anything above,
I'm sorry, anything above your CIR,
anything above your CIR,
will be marked with DE which means discard eligible,
that those are eligible to be discarded.
Because if the bandwidth is not there,
boom.
And that is a trigger for you to,
when you're monitoring your network,
to say hey, these DE bits keep growing,
growing, growing and growing.
I'm probably gonna have to call back my provider and increase the number of bandwidth, my number of my CIR to something greater than what I have.
It could be the case that you may have to switch over to a lease connection.
But again,
you have to create that documentation for the justification to your boss, okay?
Because if not, there's you know,
people are not just going to dish out money just like that.
If you're the boss, then hey,
it's your money that you're gonna spend.
Make sure that,
this is just not a one time thing.
That happened one week and then doesn't happen again until,
you know, the following month.
If it's happening on an ongoing basis and you're monitoring this.
And you should be monitoring this,
and creating you know, charts and what have you.
Obviously through third party software,
okay?
That you can see hey,
my balance is usually at a peak already.
So, you need to manage that,
you need to manage that.
All right, so for this particular part of frame relay, we're done.
Just keep these two terms in your mind,
especially for your certification purposes.
I'll see you in the next one.
[BLANK AUDIO].