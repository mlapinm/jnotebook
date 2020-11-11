[1](2)
D:\mailCloud\prjother\tmp\1\c110_Redundancy protocols overview.md  




[BLANK_AUDIO]
All right.
We're near the end.
I saved the two best for last.
What we're about to talk about it is one of the latest things that Cisco has implemented into the new certification,
which was not part of the old certification.
That's why they implemented it in the new certification.
This, for this particular session, we're gonna talk about redundancy protocols.
In the other session, we're gonna talk about monitoring protocols.
How are we going to monitor the network and the importance of it.
But for here, we're gonna talk about redundancy.
Now we've, we've gone through a slew of things with IP addressing,
standards, cabling, routing protocols,
VLANs, Inter VLANs.
Now with a wide area network, some frame relays and PvP.
So we know how to put a network together,
but what about redundancy?
Redundancy is an important part of a network.
We had that spanning tree, right?
That was looking for routing or switching loops.
All right.
We have some redundant connections, but it is not truly redundant.
I can tell you right now that one of these routing redundancy protocols,
HSRP is in use today, right now in telecommunications companies.
They use HSRP, all right?
So definitely, this is something that you will be seeing not only on your certification, but you will be seeing it when you get out to the real world.
Now the other ones, VR, VRRP.
HSRP is Cisco proprietary.
VRRP, open standard and GLBP, Cisco proprietary, but it has load balance, where they other two do not.
They can pretend to have load balancing,
depending on how you configure them and we'll talk about those details in a little bit.
But these are questions that, you know,
you would ask.
Well, redundancy, we always need in a network and the questions are how fast can fail over happen?
Because when you have a redundancy protocol, if one link goes down, the whole purpose of this redundancy protocol is for it to switch over to another router.
So, information can then be automatically transferred over.
That's the whole point.
So how quickly can this happen?
Are the individual users gonna be aware of it, they may be aware of a little skip,
a little heartbeat that they miss, but no big deal.
Your network's up and running again.
And what would happen instead of the LAN line going down, the LAN line going down iIs that redundancy protocol going to do
something about that?
And yes, it will.
There's configurations that you do within these redundancy protocols,
which we'll do with HSRP, with HSRP.
VRRP unfortunately, and GLBP, we cannot do in the Cisco packet tracer.
But I will show you their configurations,
anyway.
All right?
Just so you can be aware of it.
But definitely, these are things they'll ask you.
I'll ask you and I'll make a point to say,
hey,
this is what you need to pay attention to for your certification.
Now, as I said, HSRP or you may not see it.
Okay.
I've got to magnify it.
HSRP has been around for awhile.
It's been around since 1994, so it's been around, you know, it's a long time.
And finally, you know, Cisco decided.
Hey, these guys need to know about this.
Because in the 640-802 exam,
there was nothing mentioned on re,
redundancy protocol.
This chapter was called IP services and this is one of the things that's in there.
So definitely, you need to know about HSRP.
And again, it's, you know, it was made back in 1994.
Now remember, look at, look at the date,
1994.
So that you know, it says here uses by default, hello timers three secs and a hold timer of ten seconds.
And what does that mean?
That means you have, cuz you can use up to eight routers with this HSRP and they talk to each other.
So, every three seconds, they're sending.
Hey, I'm still good.
Hey, I'm still good.
Hey, I'm still good.
All right?
They're sending each other back and forth little hellos.
They're talking to each other, making sure everything is cool.
But if at that tenth second, they don't receive a hello,
one of them is going to decide, hey, that guy is dead.
I'm gonna take over for him, because HSRP,
not to get into too much detail.
I don't want to get too much into detail.
HSRP works on a standby active or active standby router.
One router will be active and the others will be standby.
So when the active router goes down or a link on the router goes down,
then the standby router will take over and we'll see how that works.
But definitely, definitely,
you do need these redundancy protocols in your network.
And we'll see and I have a lab back here.
All right.
That we will do from scratch for HSRP,
all right?
And you're gonna see here that in the middle, this should cause your attention.
I don't know if I'm in the way here.
Let me move this to one side.
This would be the active router.
This would be the standby router based on priority numbers.
The higher priority, you're the active router.
The lower priority, you're the standby.
So here, we have a virtual IP address.
That is how we have the redundancy.
This virtual IP address will be placed on the clients.
The clients will have a virtual gateway,
basically with these redundancy protocols and they're gateway goes down here.
Well, automatically, if this line goes down,
that means he is not receiving a hello.
Once the ten second hits, boom.
That tra, that traffic is trans,
transferred over to this particular router and then traffic will still keep flowing where it needs to go.
And that's what the redundancy protocol is.
Also, we said hey, but what about the WAN length?
In this case, this would be like the WAN length right here.
If that goes down, there is something called tracking,
where you are tracking the interfaces to see what happens.
If that goes down, same thing.
This will switch it over to this one and he will take over for that particular router.
So there's a lot of, a lot of,
configurations that, a lot of option.
And then these redundancy protocols that you can do to make it work for your particular infrastructure.
This is something that you will definitely need.
Now, this is a very simplistic network for you to understand what these redundancy protocol, what they do.
All right?
So this is what I'm gonna show you, but we need to talk about it a little bit first.
All right.
So we said that HSRP, three seconds and then the whole timer ten seconds.
And that's one of the problems people say,
well,
you know I want you to use HSRP, cuz HSRP is too slow.
Right?
We live in a world where, you know, the elevator button, right?
And we hit the up or down arrow, we expect that door to open right away.
When, when it doesn't, we keep hitting that elevator button.
On our computers, usually people on their computers.
They click, nothing happens.
They click again, nothing happens.
They click again, nothing happens.
They click again, the computer freezes.
Like let it do what it's gotta do, but we want instant gratification.
So what do people say, well, I'm gonna go to VRRP.
Look at that.
VRRP, its timers, it was invented later.
So hey, we got faster speeds.
So now hey, the timers are one second versus three seconds of hellos and then the hold time is three seconds.
My God, it's awesome.
It's quicker.
I wanna use VRRP and I am not bound to Cisco routers.
I can use any router I want, because it's industry standard.
Any open standard, anybody can use VRRP.
So you're not stuck to Cisco routers.
That's not a bad thing to be stuck to a Cisco router, but people were looking at these timers.
But in today's world, you can tweak the timers to look just like VRRP.
So really, [LAUGH] that doesn't matter.
That shouldn't be, your choice shouldn't be well I'm gonna use VRRP,
cuz it's faster.
That makes no sense.
Because you can tweak the timers down to milliseconds if that's what you want.
On both the VRRP and HSRP.
So, it really doesn't matter.
It just comes down to hey, are you using Cisco routers?
Or are you not us, or are you using,
again, a collage of different routers.
So, it's completely up to you.
And you can see Cisco is the one that created this.
And here, the IETF was the one that created it.
All right?
And oops, oops, what happened here?
And the last one is GLBP is Cisco only.
Again, created in 2005.
It's is just like HSRP, but, but it's active to active routers.
What it does is just pretty cool,
because I don't wanna get too much into the details.
I want to get into the details later on in HSRP, but what it does,
it actually creates not only a virtual,
well you create a virtual IP address.
But it creates, multiple, virtual MAC addresses.
HSRP creates only virtual MAC address,
just like VRRP creates one virtual MAC address.
All right.
Cuz we need VR.
Well, GLBP creates multiple, virtual MAC addresses.
That is cool, okay?
And they're specific MAC addresses,
you will be asked questions on the format of that MAC address.
Because, you can take a look at that MAC address and, you know,
hey, that's and HSRP MAC address.
Hey, that's a VRRP MAC address.
You can tell based on the MAC address and they will ask you is this the format?
Which of the following is a format of an HSRP MAC address?
So we will get into that and you need to learn what that is.
But again, these are the three.
The best out of the three, obviously is GLBP, because it has the low-balancing.
Since we have a big network, you can do a load-balancing.
Like I told you, Telco over 11,000 sites,
HSRP.
Backbone routers are using HSRP.
So you can use a combination, you want different segments of a network.
But HSRP is the one that is used.
Now, have there been problems?
Sure.
But it really wasn't, because of the protocol.
It was because of a static route.
So, again, you need this redundancy in your network.
And to implement something like this,
especially at an enterprise level is extremely important.
Because imagine this, you're sitting down.
All right.
Let's use the lab as an example.
You're sitting down here and you're monitoring your network,
you're doing your thing.
And all of a sudden, this link goes down.
This is your gateway.
That link goes down.
What are you gonna do?
Are you gonna change your gateway address?
But what if it's some guy somewhere else?
What are you tell him to do?
Oh, change your gateway address.
You're not gonna do that.
You want something to happen automatically to switch you over.
So this is where these guys come in.
So what we're gonna be doing in the next session is definitely we're gonna be talking about.
HSRP in a lot more detail to take a look at the MAC address and to take a look at these virtual IP addresses and how can we configure HSRP to do what we
need it to do.
The rest are pretty much similar and we'll talk about those as well, but in a very general sense.
Our focus is on that HSRP.
I'll see you in the next session.
[BLANK_AUDIO]