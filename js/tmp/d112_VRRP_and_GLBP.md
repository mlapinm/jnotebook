[1](2)
D:\mailCloud\prjother\tmp\1\c112_VRRP and GLBP.md  




[BLANK_AUDIO]
All righty then, HSRP is, welcome back.
Let's just say it, cuz I always say that.
All right, so, HSRP is the big one.
All right.
It is the one that you need to be really,
really, really, really, really, really,
really, really familiar with, all right?
You, like I said, you will be using it.
I've used it.
And I've been part of a trouble shooting process out there in the real world,
all right?
So, HSRP is a popular redundancy protocol,
VRRP is basically the same thing.
The same thing.
The only difference, like I, we said in the overview, it's, you know, any, any,
you can use any manufactural routers, an open standard.
Right, so you're not bound to just one particular manufacturer.
But, the terminology changes a little bit Instead of active and standby like we did HSRP, it uses master and backup.
Okay?
Standby group you can use a standby group as the vrrp group.
That's what it's called.
The master router can share the virtual ip address.
So, that's all it is, is just the terminology that it's using but it's basically the same thing.
Obviously, the timers are different.
The timers are different.
They're faster, but as like I told you in the overview,
you can change the timers on HSRP to match VRRP.
All right?
Through down time.
And then the advertise and then the master and learns only.
Basically, the, the master is the one that holds all the information.
That would be the active, right?
And then just send out to everybody else,
and everybody else is learning based off that.
Obviously, the master goes down, the old ones take over.
Okay, that's, it's does vrrp.
As far as the configuration, it would be the same exact thing.
But, this time you actually, when you go on the interface,
you actually would type vrrp.
And, as you saw it wasn't there in the CISCO packet tracer.
And then you put the group number, the ip,
and then, the virtual ip you're gonna use.
Then the preempt, right through overthrow,
the lore, active, or master routers, or not master routers,
backup routers.
Or is it, was it backup?
Yes.
Backup.
Okay?
And then the and then you're gonna mess around with the timers to millisecond.
And you can do the same thing, I mean, do you really wanna do milliseconds?
I mean, it's completely up to you.
You know, depending on your bandwidth.
Remember, this is, they are going across wireless networks allow these routers,
if you have, you know, multiple routers,
so you really gotta be careful how you're gonna go ahead and do this.
Do you really want every so, you know,
in less than a second, information is going back and forth?
I can understand why, so then the switchover happens a lot quicker,
you know, cuz think about it.
If it's 3 seconds, 3, 1, 2, 3, 1, 2, 3.
You know, to say hey, I'm still here, I'm still good.
But then it's 10 seconds to say I'm dead,
I'm gone.
Then it's 1, 2, 3, 4, 5, I mean really,
seriously.
So, and yeah, you can tweak it to milliseconds.
Just be careful on how quickly you want those milliseconds to be how fast.
Because, again, it all determines on your bandwidth.
But HSRP can do the exact same thing.
All right.
The only reason that the timers were at 3
seconds, and at 10 seconds because it's 1994.
You know?
That's why we did, the, the speed wasn't there.
But now the speed is there.
So you can actually tweak those timers the same way you can for vrrp.
So it's basically the exact same thing.
It's basically the exact same thing.
Again, no low bounds, no low bounds.
And the way that you can play around,
with the low balancing to pretend that you're low balancing.
Let's say you have three or four routers, you can separate them into different groups.
And then you can tell hey, if this group fails go to this one,
if that group fails go to this one, if this group fail then go to this one.
So you can use them that way but that's not real redundancy.
The one that has real redundancy is GLBP.
GLBP really has redundancy,
because it's active-active, meaning every router is active, and they work on a round robin type, where,
hey, let's go ahead and take this traffic, and then let's send it all to this particular router.
Let's send part of it to this one, and part of it to that one.
That's how GLBP works.
So, it's really truly doing some load-balancing.
So, it uses a single, virtual IP address with multiple MAC, eh,
it didn't highlight, with multiple MAC addresses.
That is really cool.
So, I mean, think about it.
You're doing your arp, right?
So for every, you know, for every gateway that you're gonna using,
it's gonna have it's own virtual MAC address too.
So that's pretty cool.
That's why they're active-active.
So that they can do those low balancing.
Right?
So everybody has an active virtual gateway, that's what they call AVGs.
All the routers are active-active.
And they're virtual forwarders, they forward the information,
and there's different ways you can forward the information, and as you can see there,
more than one router can be active.
You're always gonna have one IP address.
One IP address, one virtual IP address.
That's what a VIP stands for, one virtual IP address.
But you will have virtual MAC addresses,
and it makes sense, and it makes sense,
because we're going the layer two, right?
The layer two, do you want that MAC address to be different for every gateway.
Okay.
Cuz you're again,
low balancing to different different routers.
And look that, that's an o, not a 0.
What's up with that?
Okay.
So GLBP, pretty much the same.
GLBP 1, the virtual IP address.
GLBP 1, the priority.
Again, the one with the highest priority is your active virtual gateway.
Where the other ones are your virtual forwarders, all right?
And then you can do the load-balancing,
and then you gonna do it host-dependent,
you gonna do it round-robin, or weighted.
The one that I put the asterisk on is the one that's the most popular one.
Round-robin, meaning it takes turns.
Okay?
It's gonna see.
Okay, who's gonna be better, more available, less traffic?
I'm gonna send it that way.
Okay?
Round-robin type of effect.
So this is the configuration for it.
This is the only one that's a little,
well,
it's a lot different in the sense of that it does a little balancing commands.
And they have multiple MAC addresses and all, well,
you have one active virtual gateway and they're all forwarded, but they're all sending the information, which in the other ones are not,
they're either an active or standby, or they are a master and a backup.
So they gotta wait until one does before the other one gets the info.
Right?
The other one takes over.
In here, you're low at,
truly low balancing the information that's going to various routers.
And you almost keep forwarding that information.
So when one dies the other one has that information already.
So and it keeps going and keeps going.
So what you can see where GLBP, Cisco proprietary, all right.
Only Cisco routers only.
Which is not a bad thing.
All right.
GLBP is is very good to use.
Okay.
And to be honest with you, I see it very little.
I seen more of HSRP than I have of GLBP.
Why?
I really don't know a reason to,
to tell you.
But again, every company, they gonna go out there.
It's not gonna be the same.
So as far as for your certification, yeah definitely.
What is it that you need to take from here is that you need a priority number,
that you have to have at least one router that's gonna be considered like here,
active virtual gateway or a master or an active router.
And then the, the other ones are waiting to see what happens.
We're here with GLBP.
You have all the routers constantly actively doing something.
All right?
And with GLBP remember the round-robin.
That is the most popular way to send information.
All right.
It makes the decision.
Okay, it's your turn, it's your turn, it's your turn, it's your turn,
it's your turn, okay?
Obviously, it's making a smart decision based on the analysis of traffic.
But this is the, the way to go.
All right?
Using the round-robin.
But that's it, that's all there is to the redundancy protocols.
That's all it is.
And remember, when you're monitoring all this,
which we're gonna talk about now in this next session.
When you're monitoring all this, you're not really looking, you,
you're only going to the router when you're third party software monitoring system tells you hey, there's a problem.
Oh, okay, let me go inside my router now and take a look.
You're not sitting there looking at your hundreds or thousands of interfaces to see if hey,
something is going on.
Okay?
So, in the next section now, we're gonna discuss about the monitoring,
the monitoring, the, the network using these different types of protocols.
All right?
So, with this, again, don't sweat it too much.
HSRP, VRRP, GLBP, just one of the new things that Cisco's putting in the test.
It's not as difficult as you think.
Again just read upon your chapters, and you'll be good to go.
I'll see you in the next session.
[BLANK_AUDIO]