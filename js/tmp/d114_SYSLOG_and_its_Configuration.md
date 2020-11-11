[1](2)
D:\mailCloud\prjother\tmp\1\c114_SYSLOG and its Configuration.md  




Welcome back.
Alright, we did SNMP, now we know that we can get some management software and,
have SNMP as the underlying protocol to manage our devices and get information from it.
Another one that Cisco threw in the mix as well is Syslog.
These are system messages.
You know how we do login synchronous?
When we go to the console line so our typing doesn't get interrupted because the router gives us feedback every time something happens.
We're like, oh my god,
my typing gets interrupted.
Turn it off.
No, don't turn it off, just put it where it won't interrupt your typing.
You need those system messages to come up,
and let's go on this router this time.
Okay, you want, let's say, do.
Okay.
I'll maximize this.
Let's do, do.
Come on.
Oh, not do.
Show IP INT BRIEF.
Okay.
CONFIG T.
You see how enter configuration, okay.
All that is system messages.
Let's see if I can generate one here.
[SOUND] let's go to INT G0/0.
I'll do SHUT.
All right.
That right there is,
that's the message is giving you,
hey something went down,
something just happened.
Right?
Even when you're configuring,
if you turn it back on.
You go, you know, NO SHUT.
All these things that keeps giving you back when you're putting in clock rates,
when you're putting in,
turning on interfaces.
Everything that comes up,
it'll let you know that, you know,
that you're configuring all these different things.
Exit, lets say like LINE CON 0.
PASSWORD, CISCO, LOGIN.
All right?
Let's do a DO WR.
When you start configuring your router as we have done, you've seen that as every time we've done something, a message will come up, a message will come up.
Those are system messages.
That's what Syslog is for,
to log all those system messages.
Now, Syslog has different severity levels.
It's funny because on the package tracer,
it only has seven.
Okay?
You have really, zero through seven.
Zero meaning that the device itself,
it's all unusable.
I mean,
something's really bad just happened.
Seven is like debugging.
And that's all the bad trenches report.
But we'll do it, so you can see the messages that keep popping up.
Okay?
And I'll show you how to set that up.
Now, you won't use on,
at least in this case you will not use the PC, you'll actually use the server.
Let me maximize it for you.
You go to the config tab, and you go to Syslog, all right, and you see that it's on, and right now nothing's happening,
nothing's happening at this moment.
But, something will happening shortly.
Okay, when we turn on logging, all right?
So, you do wanna turn on logging, and if you do a question mark under global configuration.
I don't know what keeps going on with this thing.
All right,
you go under global configuration.
It says logging.
All right, you go LOGGING,
you put a question mark, and I know I said incomplete command, but there's a reason I just wanted to bring up so you can see it.
Logging in okay,
what IP addresses do you want to log?
Meaning what devices do you want to log.
Buffered is pretty much on by default,
cuz you can,
how much memory allocation you wanna have.
Console set to logging parameters.
You can, that's on by default.
Host on.
What you're most, worried about is trap.
Set the Syslog server logging level.
If, if you.
Turn on let's say,
normally you would turn on five.
Because you gonna get information from zero to five.
If you turn on seven,
it's going to give you all of them.
So, it could be that maybe that work station or server that you're using to manage the Syslog, information it's gonna get
a bunch of information and may overwhelm it or just too much to keep track of.
So, normally five is the middle ground.
So you need to know those severity levels four or five,
that's the pretty much everybody uses those to manage.
Okay.
It's like the halfway point.
Okay?
So what we do is we'll say, we'll go LOGGING, and we'll log, let's say,
let's find some IP addresses to log.
Let's log our own server.
What's the IP address of the server is 1.1, and this one is 3.1, okay?
So let's maximize this.
So, we're gonna go LOGGING,
192.168.1.1, all right?
And then,
you see that's there nothing else,
and now you see right here sys severity level 6.
This is a Syslog message.
Let me bring it up, so you can see it better.
Okay, all right,
this is your Syslog right here.
The severity level of 6.
Sub component, logging host.
Logging to host 192.168.1.1 on port 514.
And that's started.
Okay.
So we're going to do an up arrow again.
And now we're going to do 3.1.
Okay, now that's logging as well,
okay, for us.
So, usually, you wanna use a remote server anyway, to do this, all right?
To send the messages to.
You don't wanna do it on the router.
All right, and then we're gonna set the trap, which is funny,
because when we put TRAP, right?
There's what we get.
You can apply, you really can put the number which is severity of seven as you can see right here.
And If you can, I'll bring it up,
i'll bring it up.
All right, severity is seven,
that's the high, the highest.
Lowest is zero but it's really kinda backwards, cause zero is like the worst.
Okay?
So we'll put debugging.
Oops.
LOGGING TRAP DEBUGGING.
So now that's on.
DO WR, and it's gonna take these messages on both these servers.
So what we're gonna do is, let's do it from right here on this router.
And I believe that we're running is RIP,
if I'm not mistaken.
Sure are.
So we're gonna debug IP RIP, and that's to make things work quickly.
DEBUG IP RIP, all right, so now you know that RIP, every 30 seconds,
it's actually sending information back and forth, back and forth, back and forth.
So let's take a look at our,
and you can see already that you're getting messages that say,
hey, configured from console by console.
When I started the sixth,
the first one that I did, boom.
Now I'm getting, you scared me.
It, it gave me that, hey,
I'm getting updates from version two.
All right?
From the other router, so you can see how you can keep track of what's going on.
So if RIP goes down, you take a look at your management workstation.
You say, oh.
Okay.
Let me read that.
Oh, yes.
The.
I'm not getting any,
any RIP updates from the other router.
Okay.
That's a problem.
All right?
So this is what Syslog is all about.
What is it that you need to know?
You need to know that, the severity levels, severity levels, not in detail.
Just know that there's zero to seven,
and more or less what each one does.
That's it.
More or less what each one does,
so find key words to learn those,
those severity levels.
It's zero through seven.
Know how to turn it on in the router.
Now, all you really need to do is just do the login trap.
And the, the login IP address,
and then the login trap.
Where are you going to trap,
or capture, these messages coming back from your router?
Those system messages that the router is sending you.
Because, we picked two servers.
So, I should be seeing it on this server as well.
On that other server.
That 3.1 server.
Let's take a look at that.
Oh, not there, config.
Syslog.
And, I see it there as well,
because I chose two servers to get that information in.
Okay?
So that's where,
that's where those IP addresses were.
Then I'm gonna be sending these Syslog messages to a particular server, or workstation, or whatever it is.
To go ahead and capture these particular system messages.
And you never, ever, wanna turn that off.
But again, for your cert, for your cert, what is it you wanna do?
You wanna go ahead and remember those traps, those,
the severity levels, I'm sorry.
The severity levels, and that you wanna send things through a remote server, right.
The IP address of a remote server,
and you do that by using,
you know putting the IP address.
And then the severity levels you do it by saying, hey, login trap.
So that's pretty much it.
But know that, hey,
you're picking up system messages.
And you saw it at the very beginning,
I don't know that you can see it here cuz we've passed over too much.
But was at SYS,
telling you it's a Syslog, message.
The sever, the next one was a number that gives you the severity level, all right?
And then it was a sub-component, and then an explanation of where it's going, so that's all Syslog is.
But again, ladies and gentlemen,
you're not gonna be doing that.
You're not gonna be doing that, on a real world scenario, something like this.
It will be some sort of third party management software,
that's gonna be a lot easier to look at.
All this is, is so you understand what Syslog is, just like SNMP, which is the underlying protocol that you would configure on this management software, and
on the router, so they can talk back and forth, right?
They gotta be identical configs.
They can talk back and forth.
And then you gonna see what's going on your, on your network.
Because one of the main things that you want to see what's going on is.
Let's say they, Syslog is giving you,
okay, you're monitoring the system and what have you.
The SNMP is like,
wait a minute, our bandwidth.
What's going on with our bandwidth?
We have hardly any.
You go to your boss.
You go whoever's in charge in IT.
You know, it goes, you get, obviously,
you're getting help desk tickets.
With SNMP, it's, like, hey,
we got no more bandwidth.
Well, what do you mean?
He goes, you know they're gonna ask you,
well, why is the bandwidth so high?
Nobody knows that Laz is playing Call of Duty on bandwi, on, on war time.
Then that's a problem right?
But none of those two are going to tell you who this next one is.
Netflow.
The next one is the one unfortunately doesn't have the configuration for it.
But all it is is turning numbers.
I'll explain it to you next.
All right so,
I'll see you in the next lesson,
and we'll talk about net flow for a little bit.
See you then.