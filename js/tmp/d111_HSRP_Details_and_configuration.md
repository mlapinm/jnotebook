[1](2)
D:\mailCloud\prjother\tmp\1\c111_HSRP Details and configuration.md  




[BLANK_AUDIO]
All right everybody.
Let's get down to the details of HSRP before we start the configuration.
Now, as we talked earlier, in the previous lesson, HSRP is a redundancy protocol.
And as you can see there, the routers or gateways are organized into, you're gonna have different groups for different gateways, if that's what you wanna do.
We're only gonna have one group, just so you can understand the concept of what HSRP or these redundancy protocols do.
In the case of HSRP, you have one active router,
one standby router, and it's based on the priority number.
The higher the priority number, that's the one that becomes the active router.
And you'll see that now in the config.
Virtual router ID, and a MAC address are generated.
You are going to actually create the virtual IP, or ID, that should have been IP, virtual IP, all right, that you you assign within that subnet.
The MAC address is what gets virtually created.
Hello messages every three seconds.
We know that.
Dead after ten, cuz, and those hellos are important, because they keep talking.
Remember, again I said that you can have more than just the active and standby router.
You can have up to eight routers.
The other routers are really just not,
they're just looking and,
at the active and standby, at those messages.
They do send their messages.
Are, but they're called speak, right.
Just, they're just like in the waiting mode,
not to say standby, in case something happens.
But they are actually watching.
But the ones that are the two routers,
that are actually doing something,
are the active and standby routers.
All right now, this is important.
Whatever virtual IP you decide to use that's completely up to you.
You, as long as you use the subnet because remember the type of,
IP addressing scheme we have, it will be within that particular subnet.
[BLANK_AUDIO]
What gets generated automatically, it's that virtual MAC address.
Now remember, this right here, hm, hm,
is it here or here, hm, oh, well I have it broken down here ha, ha, ha, ha.
Here it is, yes it's the c as well.
All right.
The first one, two, three, four, five,
six, 24 bits, right,
these are hex numbers.
Vendor ID.
That's for Cisco.
They say hey, this is Cisco.
All right.
The next 16 is the one for HSRP, the one for HSRP ID.
And the last two, okay, is gonna be the group.
The group number you'd be assigned to, if your assigned to group number one,
group number two, it actually turns it into a hexidecimal number, all right?
So the last eight bits are the one that that creates that, okay?
Now let me see here anything else important that I need to say about this right here, HSRP obviously as it says here oh, how would you do it?
Okay, so now we get into configuration.
So, what you need to for the certification, but you need to be,
very familiar with, one, the HSRP, VRP,
GLBP, r redundancy protocols.
Two, for HSRP you need to know the default, hellos and the default,
you know, which is three seconds, and then ten seconds for the dead, all right?
Only the hold.
You need to know it's based on an active standby router.
And the active and standby are elected,
right?
That's why the hello's, sending messages back and forth.
That's one of the things that they determine, they talk to each other,
they send.
Hey, my priority number's higher than yours, so therefore I am the active router.
Okay, so, these are things that you need to be aware of.
And, definitely that virtual MAC address,
because you will be,
more than likely be asked a question, is this a valid HSRP MAC address?
All right?
But, let's look at configuration.
As you can see here Window 192.168.1.0
network.
We won't do the virtual wiping first.
We'll first configure it like any other router with normal gateways.
We'll do this one as 1.254.
This will be 1.253.
Five and six.
Nine and ten.
This will be 1.254 right there, for that web server.
All right.
And here in the PC, we have the 1.1, and we already have the gateway as 1.254.
Just so you can understand what's going on, or what, you know, the advantages of using these redundancy protocols.
So let's go to this router, and we'll just stick to the name that's there, R0.
Just so, you know, not to change anything or confuse anyone.
Bring this down right there.
See that.
Say no, all right, enable, config T, host name.
Host name, R0, I'm gonna use capital.
R0 [COUGH] interface, f zero slash zero,
Enter.
IP address, [NOISE] 192.168.
[NOISE] What is it, is it 100 or 1?
[INAUDIBLE] remembering.
Okay, it's one.
Okay.
[BLANK_AUDIO]
1.254, 255.255.255.0,
and then we just do a no shut on that.
I know the one is 10.1.1.5 for the add zero one I believe.
Yup.
So INT F0/1.
IP address 10.1.1.5 255.255.255.252.
No shut.
No need to worry about clock rates here.
We're using fast ethernet, so no need for clock rates.
Do WR.
Ctrl+Z.
Let's just take a look at a summary real quick.
All right.
One, obviously, one's gonna be up and down,
because the other one is not, you know,
its neighbor is not configured.
So, 0.0.0.1.254, up up, that's our gateway to the pc.
And then F0/1 get.
All right so that one is good to go.
With its its IPs.
All right, let's bring this out here,
bring this a little further down.
All right, we're going to say no at this point.
Enable config T host name.
Where am I?
Did I choose it?
Okay.
There's router one, R1.
Okay, and then interface.
I'm pretty sure it's F0/0, but I'm just gonna make sure.
Yep, F0/0.
I don't know what's wrong with my brain today.
IP address 192.168.1.253
255.255.255.0 okay and then we do a no shut then we go into the int F zero one and I'll be nine.
IP address.
Oh, not too many of these.
10.1.1.9.
255.2555.255.252.
No shut.
EWR Ctrl+Shift+6 if I finger with the keyboard.
EWR, you show IP Int Brief.
All right so obviously, again, we see that it's up, up.
Up down because again, the neighbor upstairs, not configured it.
So let's go ahead and do so.
So there's gonna be 10.1.1.6, 10.1.1.8,
and this will be 1.1.1.1.
284.
[BLANK_AUDIO]
We'll go right into that.
[BLANK_AUDIO]
Just maximize this [UNKNOWN] adjusting it.
Enable [UNKNOWN] brief, doing this just look at the interfaces it's really a, I have so many interfaces.
[COUGH] Wow [UNKNOWN] F00,
F01, F01, okay.
F00.
[BLANK_AUDIO]
Config T interface F0/0 IP address 10.1.1.6 255,
255, 255, 252.
Shut it.
Up arrow.
And we'll leave this at zero.
Zero one over here, okay, zero one.
IP address, 101110.
Now shut.
Okay.
And then we have the, I think this is an E, E00.
E000, wow.
Int E0/0/0.
Ethernet.
IP address 1.1.1.254,
255.255.255.0.
No shuts.
[BLANK_AUDIO]
We do R, Ctrl+V.
Let's make sure everything's up.
Show IP in brief.
[BLANK_AUDIO]
And [NOISE].
We got up all the way across.
Let's see if we can ping our neighbors.
[BLANK_AUDIO]
Ping, 1001.5, no, that's [UNKNOWN] 15.
[BLANK_AUDIO]
[SOUND].
Okay.
And then nine.
[BLANK_AUDIO]
Once you get that [UNKNOWN] it's fast Ethernet, okay?
And then we wanna ping, or hopefully the server has an IP address.
[BLANK_AUDIO]
And it does.
So we have connectivity to our routers.
Obviously, we'll have connectivity to our gateway.
All right, so let's ping from the computer.
Wow.
That's a big black screen.
Put it right here.
There we go.
You can see that right there.
Ping 192.168.1.254.
That's my gateway 253, that's the other guy.
All right, but obviously we can't get to the server.
[BLANK_AUDIO]
1.1.1.1.
Destination unreachable because we have no routing protocol.
There's no routing in place.
So we go ahead and put some routing, let's just use two, let's use rip real quick.
No big deal there,
config T, router rip V2,
net 192.168.1.0
net ten triple zero,
remember glass full boundary.
No auto summary.
[UNKNOWN].
All right.
We'll move on this one.
Same exact thing.
All right.
Config T, router RIP Version R if this one will take that.
Wow I was trying an abbreviation,
v2 huh, v space 2 okay.
Network ten triple zero, network 119.168.1.0
No auto summary Do WR and then we'll go ahead and do the stop router it is really easy config T Router RIP.
V space two.
I like that.
You can't do it in [INAUDIBLE], you gotta type out the whole thing.
Network ten triple zero.
Network one triple zero.
Normal summary DWR.
Control Z.
Let's take a look at the routing tables.
Show IP route.
And now we're getting RIP updates from the, the ten network.
All right.
And the 1.0 network.
Awesome.
Right?
So we can see all that.
So now, let's just go To the PC again.
Let's just try to ping the server one more time.
And now we do get a reply from the web server, so we are routing.
But here comes the problem, here's where the redundancy protocols come into play.
Yes, we have two connections.
Right?
A little redundancy going on there.
As we move this all the way over here.
We haven't configured any redundancy,
well, physically,
we should have redundancy.
You know we're pinging this web server, so I'm just gonna put this right here.
No, that's too far away from you guys.
You guys can't see.
[BLANK_AUDIO]
All right, so I'm gonna put it right there [BLANK_AUDIO]
All right.
And we'll do a ping, minus T.
1.1.1.1.
And that's if, for those of you that don't know, that's just a never ending ping.
As the switches give them, you can tell them which size of packet you wanna send.
But this actually is just pinging the web server over and over and over again.
We're doing like a little DOS attack.
A very small DOS attack.
But anyway, we're sending a constant ping.
All right?
So we do have connectivity.
Now, what would happen if I go inside here and, you know,
for whatever reason, the interface [UNKNOWN]
zero slash, slash zero.
Somebody just said, shut.
[BLANK_AUDIO]
So somebody shut down that interface.
So what's gonna happen to the connectivity?
Well I can't reach it, it's request time out.
[BLANK_AUDIO]
So now, hey.
How do we fix that problem?
Call somebody?
Hey, change the gateway on the computer.
So we can go ahead and get connectivity again.
Yeah, but there's nobody there.
I think the guy is out to lunch.
Okay, let me drive over there.
I'm only 20 minutes away.
So you drive over there and you go on to the computer, you change the gateway.
That's not very feasible.
That's not very feasible.
Okay?
So definitely, this is not the way you wanna do it.
You wanna have redundancy protocols, so that way it can go back and forth.
So let's go ahead and turn that interface back on.
No shut.
[BLANK_AUDIO]
All right.
And it's gonna take a while looking as you can see STP is doing its thing.
Right there, STP is doing its thing, so we gotta wait for STP, huh?
That's why a Rapid Spanning Tree and the types of spanning tree that you're gonna be using, so the convergence can be a lot
quicker than what it originally is.
Obviously, there's the packet tracer.
It's not that packet tracers are similar nonetheless, but, I mean, it's good.
It's a good simulator because it's based specifically for the CCNA, and like,
like I've been telling you throughout the whole course, this is geared to the CCNA.
Will you be doing this in the real world?
Of course.
You know, putting in IP addresses,
configuring routing protocols, same thing,
same thing.
All right.
But gear to the CCNA.
All right, so we're back in business,
we're back in business, great.
So we do have connectivity to our, to our web server.
But we want redundancy and redundancy is needed.
So what we're gonna do is, we're gonna configure this router right here as our active router with HSRP and this will be our stand by.
This one is going here.
Now if you do this, you do it inside the interface and it's not gonna say HSRP.
They put a question mark, you see where it says standby.
HSRP interface configuration command.
So that's what you need to do.
You're not gonna see something that says standby.
I mean you're not gonna see something that says HSRP.
VRP, yes, GLVP, yes, but we don't have that in the packet tracer, so sorry.
But I'll show you the configs.
So standby and what do you put next?
Well, you're gonna put a group number.
That's the first thing you wanna do.
And you can see the group numbers are there, from 0 to 4095.
So okay, so what group number are we gonna use?
Let's just use one.
All right so after, now what do you put,
want me to put an IP.
Okay so what's the IP?
192.168.1.100 that is the standby IP.
We just created this virtual IP address.
Now the priority number, who's gonna be active and who's not gonna be active, right, who's gonna be standby.
By default the priority number is 100.
But, I'm gonna make this bigger, I'm gonna make the priority number.
Here let's look at the range, is 1 through 16.
So what we're gonna do is I'm gonna just make it really interesting what we're do with priority, no really?
That's very.
Oh, [LAUGH].
Standby, sorry.
Standby 1 priority.
I knew there was something.
Wait, what?
What's.
Whoops.
What's going on here, laugh.
That's incorrect.
There we go, 0255.
[SOUND] All right, that was like, that was kind of weird, okay.
150, we're gonna change the actual priority of the interface and I hope I didn't.
No because it gave me an error so that's good.
All right so, standby 1, priority 150.
So I'm just gonna leave it at that.
And then we'll do a Ctrl+Z after I copy it and I'm gonna do a Schule standby.
That's the only command you're gonna do.
That way you're not gonna do it, but you need to know.
All right.
And, this shows you, hey,
this state is active.
All right.
Your virtual IP is 192.100.1.100.
Your virtual MAC address, which it created, you see it's not that 7f or that 7c, right, it's 9f.
All right, so not a big deal,
[INAUDIBLE] when you go take your test it'll probably be 7c.
But again this is the Cisco vendor ID, all right.
These next four okay, or yeah, 16,
all right, these next 16 is specifically for hey that's HSRP.
And then group number one, which is,
that's what I created.
Here it is right here, group number one.
That's how they break down the Mac address, alright so that is your virtual Mac address.
You see your hello time it's set to three seconds right here, right three seconds and then your whole time ten seconds the
next hello will be sent in 1.995 seconds.
All right?
We'll talk about preemption in a little bit.
The active router is the local router, the standby router is unknown cuz we haven't configured it yet, we haven't configured it yet.
The priority for this particular group is 150, all right.
So this is why this is the active router.
So now we can configure the standby router which is going to be this guy right here.
So, we're gonna actually type out the priority number of 100 or 110, let's just type 110.
You can leave that the default, you really don't have to type it.
You can just leave it at the default.
But just so you can see the command, let's just type it in.
So let's go inside the interface,
interface F0/0 right standby 1 IP 192.16 oops .168.1.100 okay.
And then we're going to do standby 1,
priority, 110.
Which is smaller.
The WR Ctrl+Z shows standby and then it's going through it and typing faster than the actual router can.
Keep obviously I just changed it right there to standby right here all right.
So let's type in again so we can go ahead and see it alright so the state is standby this is a standby router this is the virtual
IP address the active virtual Mac address is still unknown hasn't Yet,
you know, talking back and forth to recognize it, it will after a little bit.
And then, it's telling you a local virtual Mac address, there it is right there.
And, then the next hello will be sent in 2.35 seconds.
We're going faster than the router can think, so, hey.
All right, so all of this information will be filled out eventually.
All right, so, now, let's see what happens.
All right, now let's first see if we can ping this wall.
First of all, I haven't changed the IP address of the client yet.
So, let's see if I can ping.
I still have connectivity.
Look at that.
All right, cuz I am so going through there.
But let's see if we can ping that that 1.100.
I sure can.
I sure can.
All right, so it exists.
It exists in there, so we can go ahead and use this.
So, we're gonna change, we have to tweak our client, and we're gonna,
instead of having the physical IP address,
we're gonna give it this virtual,
this ghost IP address, all right, as the gateway.
Now what I like to do it is.
Because if I were to ping again, I still won't get connectivity.
Well how do we really know that's the way we're going?
The easiest test to do, instead of going to simulation mode or anything like that.
I'm gonna go ahead and configure my telnet lines real quick.
Line bty, zero space 15.
Password Cisco.
Login.
And I just put some enable password just to have it on there.
ENABLE PASSWORD CISCO and yes, and that's it.
Ctrl+Z.
And let's do the same thing on the other one.
Config T, LINE V LINE VTY 0.15.
Password.
So let's go, login,
enable password, Cisco.
You [UNKNOWN], all right.
So what we're gonna do is, I'm actually gonna TelNet to that virtual IP address.
And I'm gonna see which router I end up in.
Remember, this is router zero and this is router one on this side.
So the active router is r0.
So let's go ahead and TELNET-
[BLANK_AUDIO]
To 192.168.1.100.
That is the virtual IP address, Cisco.
[BLANK_AUDIO]
I'm a router 0.
This is where we're headed to.
This is where we're going.
Okay?
So that's the direction the packets are flowing.
So now we know.
We've verified, hey, I'm actually going that way.
Cuz I'm, the virtual IP address is on both routers.
But since router zero has a higher priority number, became the active router.
So packets are flowing that way.
So let's go ahead.
Raise exit out of here.
[BLANK_AUDIO]
All right.
Back at the PC.
Let's do our PING minus T.
[BLANK_AUDIO]
Okay?
And it's enough space right there.
So you can see what's going on, cuz after I ping here.
You have a couple of pings.
I'm going to shut down that interface again and let's see how long it takes it to throw over.
Remember, every three seconds says, hey,
everything is still good.
Hey, everything's still good.
[BLANK_AUDIO]
Wait a minute, ten seconds.
Oh!
Something happened.
Quick!
Switch it over.
So let's see how long it takes.
So lets start the pinging.
[BLANK_AUDIO]
All right, the never ending ping.
The ping minus t.
And now we're gonna go ahead, and I'm going to do it quickly,
enter, or I thought quicker, enter interface add 0,
slash 0, shut, and let's go here.
Boom.
And whoa, we lost connectivity.
We saw that.
Boom, request time out.
Oh my god, what's happening?
All right?
The client's like, hey,
I can't get to my email server, oh I can't send.
Oh, I'm back up again, never mind.
It automatically switched over to the other router.
That is cool.
You don't have to worry about it.
And that's what HSRP is there for.
Obviously, you will, do have to worry about it.
You will have third party monitoring software,
which we'll talk about in the next session, all right?
That will alert you to like hey, on this router, this interface went down.
Traffic is now flowing this way.
So, you know, you'll see it pop up on the screen, or you'll get a beep, or you'll get a phone call, text, whatever the case may be, smoke signals.
Something to let you know that, hey that router just went down,
or that interface just went down, but packets are now flowing the other way, so you're gonna start investigating, saying hey, what's going on?
But at least you still have connectivity.
People are gonna still route traffic through, to the destination.
All right?
So let's take a look and see what happens over here.
Let's take a look at the, look, it says it changed the state.
Over here, and let's take a look at it.
Let's go to privilege mode and do a show stand by.
And it says, is, state is initialization,
the virtual IP address is such.
The active router is unknown, I guess we're, we're too quick for it.
What it should say is that this is the standby router [LAUGH] and then the other one is the active router.
Let's take a look at the other one,
I guess the packet traders are just working too slow for us.
[BLANK_AUDIO]
CSS standby just changed to active.
Let's do control Z, show standby, and the state is active.
This state is active.
So now package are flowing through this router,
even thought it has that lower priority,
but the other one is down.
So it's gotta go through this one.
Let's take, let's prove that.
Let's prove that by using our Telnet.
All right, let's stop this ping real quick.
[BLANK_AUDIO]
>> And let's do that Telnet to the virtual, the virtual IP address.
Hit Enter.
[BLANK_AUDIO]
Now we're inside a router, which router are we in?
[BLANK_AUDIO]
We're inside router one.
It switched over to the other router.
This is so cool.
And HSRP is used in today's environment.
And really, that's all you really, you know need to be aware of.
There's other things.
Not to be aware of, but really need to concentrate on.
Just that right there.
Just doing that right there is good enough.
Or, well,
I don't wanna say that because what happens if your WLAN goes down, right?
So let's talk about that and also.
So there's other commands, as you can see here, just for the basic configuration of HSRP, just by putting the virtual IP address,
putting you know, giving a group virtual IP address and then actually giving a priority number, so one can be active, one can be standby, and
boom, it's up and running, it's working,
no big, no biggie.
Now, can you tweak that?
Can you tweak that?
Of course.
But what's gonna happen if I go back and turn on?
I'd fix the issue.
And I'd go inside, config t,
Interface F 0/0, and do a no shut.
It was a mistake.
Somebody went in there for what ever reason and they decided to do a no shut.
And let's see whats gonna happen.
Let's take a look, let's standby here.
See if things are going to change, the states change.
Oh, so you can see that that's gonna take a while.
[BLANK_AUDIO]
And let's do that ping.
[BLANK_AUDIO]
You see?
We're, it's thinking about the ping now.
Oh, we're, we're, we're getting there,
because it's still, woo,
now we've got a full green light, I guess SCP decided.
Everything is good to go.
We're in and out, in and out, in and out.
Takes a little bit, I mean, oh, there we go.
We're once again, back in, back in action,
and we take a look at our router, it says [UNKNOWN] says standby.
Really?
Let's take a look at it.
Show a standby.
[BLANK_AUDIO]
It says state is standby.
Oh, [INAUDIBLE] is going crazy.
It should say active, obviously.
It might take a while for it to do, but let's find out.
Let's see if it's actually going to be Standby or active.
What's going on there?
The other one says active, this one says standby, we're going crazy today.
And let's see, let's telnet.
Whoa.
Let's telnet, Ctrl+C, let's telnet to the virtual IP,
C-I-S-C-O, and we're still going to router one.
Why is that?
Because, there's a command called preempt.
And I'll show it to you.
[BLANK_AUDIO]
Oh, config T.
[BLANK_AUDIO]
Standby.
One.
[BLANK_AUDIO]
My typing skills.
[BLANK_AUDIO]
Oh, sorry.
[BLANK_AUDIO]
Inside the interface there lies, inside the interface, add 0, slide 0.
Standby.
[BLANK_AUDIO]
One.
All right preempt.
Look where it says, overthrow lower priority.
Active routers.
So, that was acting as the active router,
but see I didn't put in preempts saying,
hey, when I come back, you give me back my spot.
That's what that means.
So, let's go ahead and do that.
STANDBY 1 PREEMPT.
Boom!
Look at that.
[SOUND] I'm active now.
All right?
So, it overthrows, all right?
It dominated the other one, it said, I'm active again.
All right?
That's the whole purpose of the preempt command.
You WR, Ctrl+Z, show STANDBY, and now, I'm active.
Right?
I have the higher priority.
I should be active.
The other one was still active because I didn't do the preemption command.
So, preempt is, it's, it's a double-edged sword really, because it is interface that went down, goes down again, then it's
gonna change back to the other one.
And then when it comes back up again, then you're gonna go back again over here.
So, it could be a back and forth, so it depends on you.
If you know that,
that's a troublesome, it could be the actual interface of the router.
You know, the [UNKNOWN] speed has messed up, then you need to swap it out, or it could be a bad cable, or whatever the case may be.
You know, you may not want that to be the active router, so,
when choosing the active router, choose appropriately, correctly.
Make sure that those interfaces are good to go, and that the cables are good to go.
Cuz if it's constantly going up and down,
it's gonna be an issue regardless.
Okay?
Now, one of the last commands that I wanna show you, with HSRP, is tracking.
Right?
Because, now, and I, what tracking does,
and let's look at the actually topology,
so you can understand, I'm gonna track these links right here, right?
And, you know, right now, we're going this way, going across.
But if this goes down, then it, if you have the tracking,
the tracking says, hey, wait a minute.
This link went down.
We need to decrement the priority number,
and make this one the active router, and send it this way, but unfortunately,
the programming behind the package tracer we can do the tracking command, but it only decrements by ten.
So, this 150 will always be higher than that one.
And you'll still see connectivity, that'll be flowing this way, but you'll see that this will remain active because the higher priority,
and this all will be standby, but packets will be flowing this way.
All right?
Don't let it confuse you.
All right, what it, what the tracking is,
what it allows you to do,
is actually put in a number, so if this is 150, and this is 110,
I wanna subtract, I don't know, I wanna subtract a 100 from it.
All right?
And then, it, they'll, this area, this goes down, and you're tracking this one up here, also track the 100 from it, and then
this will become ten.
So, automatically, boom this is will be an active router, and this be a standby router, and that information will flow that way.
Unfortunately the package tracer doesn't allow you to put in whatever number you want to subtract.
It subtracts automatically by ten.
All right so, we're happy.
So, but it'll still do the correct job.
So, let's go ahead, and do the tracking first.
Let's do the tracking.
So, we're gonna track the [INAUDIBLE]
zero, zero.
We're gonna go config config T interface F0/0 STANDBY 1 TRACKING, and then you put the, okay, standby,
oh sorry standby its one, it has to be standby one,
okay, standby, this should be one.
[INAUDIBLE] Okay, STANDBY TRACK F0/1.
All right?
We WR.
Let's take a look at the commands,
let's make sure that it's all hunky dory.
Show standby.
Wow, all right.
[SOUND] Here's our priority, expires,
where's my tracking?
It should be in there somewhere.
Your name, priority 150, stand by, active router, preemption is enabled.
It should show you that it is tracking.
It should have let me do a by a stand by,
and the group number, but, okay.
Hm.
Hm, hm, hm, hm, hm.
Okay, all right, so we're tracking that F0/1 interface.
All right, let's go to the other routers,
do the same thing,
let's try that interface in case it goes out.
Config T STANDBY, and it's funny,
now this one says that,
cuz this isn't global configuration interface at 0/0 STANDBY TRACK.
Oh, all right, and then you put in the interface that you are tracking F 0/1,
let me see something before I do that.
Before, because, now, you see, STANDBY 1,
the only one's giving an error.
That's why you can't see it.
STANDBY 1, TRACK F0/1.
Hello, and there you go.
[UNKNOWN] Ctrl+Z, show STANBY,
and there it is right there.
Track interface at F 0/1 decrement by ten.
So, lets go back to router zero, cuz it was acting silly.
Not doing what it was supposed to do.
All right, and lets do that same command again.
Config T, or maybe it was just me.
Config T Interface F0/0 STANDBY 1 TRACK F0/1.
And here we are.
Ctrl+Z.
Show STANBY.
All right, and there it is here.
Now you can actually see it.
[SOUND] And you can see it only let's you [UNKNOWN].
You should be able to put an actual number, that you wanna subtract,
from the priority number, if that interface going down.
All right, so let's see how this is gonna work.
So, again, let's exit outta here.
Okay, and we're going to ping, or ping minus t.
All right, to our web server.
Awesome, awesome.
We're going through that router zero.
So, now we're going to change, well, we're gonna kill this F/01 right here.
So, Config T INTERFACE F0/1,
shut.
Let's minimize.
Get to the PC there it is right here.
We lost connectivity.
Look at that.
Destination unreachable.
Destination unreachable.
Request timeout.
It's thinking.
It's trying to change things over.
Request timeout.
Boom!
Now we're going again.
Now we're going again.
All right.
So, now we should be going the other way.
Now we're going the other way.
Let's, let's see if that's true.
Let's tell MET why did I close that.
Let's tell MET to the virtual IP, Cisco.
And it says, I'm going to router zero.
How in the world is that possible?
Cuz this is what it's doing.
What's happening is, it's going up this way, then finding that it can't go that way, then it comes back down, and it goes
this way.
And I can show you that in simulation mode.
In simulation mode.
So, let me show you, gonna click here.
PC zero, to destination.
Auto capture and play.
Let's sit back and watch the movie.
Here comes this ping.
This ICMP packet right?
Goes out both interfaces.
Floods that out, right.
Boom boom boom.
You've got an X over here.
Oh well, okay, got an X over here because that's the active router, and then it came back down.
And then it sends it the right way,
because it says hey you can't go through there.
Can't get to that destination that way, go up and then come to the actual server.
So you can see that that's the way the packet is going.
Alright.
So in the fire trace it is a little bit funky in the way that it works but you get to understand what's going on alright you understand what's going on.
When you're tracking this interface okay,
your suppose to be able to bring back or bring down the priority number to something lower.
Than this one, but we can't.
This, this priority number and that priority is 140, alright?
This is 110.
So this is still the active router.
So that's why it still wants to go that way.
But then when it sees that it can go that way, it brings it back down, and then comes this way.
So even though, it's not working like we want it to work well, we can subtract it,
make this a standby and it's inactive, is to say, hey, listen, that's down.
I can't send you that way, so let me send you over to the next router.
It still sends it over to the next router regardless.
Alright.
So, because these are,
these guys are talking to each other with those three-second hellos.
They're saying, hey, something's going on here.
I'm gonna send it to that way.
It took a little bit.
It took a little bit to do so but the reason is because the priority number.
Because if you look at it, if you look at the priority number here,
so control Z, show standby.
Not tanby It still shows as active.
You see priority numbers 140.
Because it's subtracted ten from it,
that's all.
Where the other one is still 110, so it still shows standby as the other one and we have the preemption saying hey,
I'll throw anything that's lower priority number than mine.
So I'm always gonna be active so they're,
they're playing against each other, right,
because we can put the number we want it to.
If I would have done the math correctly,
and I would have, you know, said,
okay, this is, so this is 105, alright,
and,
I would have said 105 on this one, I would have 100, the other one.
Then if I also tried ten on that one, then it would have been okay cool.
This would be 95, then this will be a 100
and this will be the active router, and this will be the standby router.
But we didn't do the math correctly,
that's why.
But still the point is these are redundant protocols.
They talk to each other to allow traffic to be switched automatically to a router that is working properly to get to your
destination.
And that is so cool and again the other writing the other relation protocols the they do the same thing and we'll talk about those in this next lesson to come so
I hope you understood it and you will be using this in the real world I guarantee you and you will be seeing this in your
certification so read up on it.
To get a lot more, you know, I guess, wet,
as we would say.
I get more in, in-depth in it, all right.
More than the, the video so you can really, you know, get a full, full,
full understanding of it.
I'll see you in the next one.
[BLANK_AUDIO]