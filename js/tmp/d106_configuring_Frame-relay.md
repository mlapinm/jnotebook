[1](2)
D:\mailCloud\prjother\tmp\1\c106_configuring Frame-relay.md  




[BLANK_AUDIO]
All right, now that we've run over the, I guess the terminology, the CIR,
the access rate, the DLCI, and we actually looked at more or less a configuration of how we're gonna do this, let's go ahead
and configure frame relay.
And we'll take it a step at a time.
We'll first, you know, take a look at our scheme.
We're gonna take a look at the routers that we're using, the configuration, and the cloud.
Since we're not using a router, we're actually using the frame relay cloud,
we're gonna have to configure that as well.
Well, is there any questions on the frame relay cloud?
No, of course not, and you won't have to configure frame relay, but you'll need, you'll need to understand it,
all right?
So let's first, and you've seen this configuration already, but we'll look at it again.
Enable, show start.
First of all,
the way we're going to be configuring frame relay is in a point to point method.
Subinterfaces, all right.
So the encapsulation is going to go under the physical, the physical interface,
and you're obviously going to turn the physical interface on.
But we're gonna leave that for last.
We're gonna turn the physical interfaces on last,
that way we don't get interrupted with any kind of updates or anything like that.
So we'll just turn it on last.
Once we put the encapsulation, we're gonna create the subinterface, and we're gonna make it match the DLCI, right,
the DLCI number, the data link connection identify number.
We're going to put in an IP address and put in the DLCI.
And we'll do the same thing for the other subinterface,
cuz each router is going to have two subinterfaces with a subnet, obviously,
a subnet for each, different subnets in each, and different DLCIs for each subinterface, which is that permanent virtual circuit.
All right?
So, I mean, the configuration is identical on every router.
The only difference is gonna be that this DLCI will be 201,
the IP address here, you can see.
We start at 24's all the way across to make it very simple.
This will be dot 1, this will be dot 2.
So this is going from 2 to 1, 1 to 2.
That's what these DLCIs are all about.
So you have network 1.0,
2.0, and 3.0, okay?
Very simple, very simple configuration.
Once you get to the cloud, or once we get to the cloud.
Cuz the, I can do a show start in every router,
it'll be looking at the same thing.
Depending on the serial interfaces that we connected,
which we're already connected to.
Let me show you that.
You see, we're using, you know, Router1,
Serial1, Router2,
Serial2, Router3, Serial3.
And again, for simplistic sakes.
That's why I'm doing that.
So in the Serial1, we actually advert, not advertise, but we tell, hey.
Under Serial1,
we have two DLCIs, and this is what they're trying to connect to logically.
Cuz DLCI 102s, routers 1 to 2, and DLCI 103 is routers 1 to 3.
So we're giving it an actual description for each DLCI.
And then we have it for two and then we have it for three.
Then in the actual frame relay, under the connections,
there is where we make the actual virtual connection to what we wanna do.
From port 01, then you're going from 1 to 2, to port zero two,
that goes back to routers 2 through 1.
So that is where we actually create the the, the frame relay connections.
Now, let me see something under the serial.
And, you can see here,
under the serial, in the frame relay cloud, make sure the port status is on.
Well, again, for this lab, you won't have to do it.
But what's important here is that LMI.
Remember I talked about the signaling method?
The signaling method that you have Cisco by default on Cisco routers,
you have ANSI, and then Q9338.
Those are the signaling methods that frame relay uses.
And obviously, I'm gonna use Cisco as the default.
So what we're going to do, we're actually gonna remove everything from the frame relay cloud.
Remove.
And then remove.
We're gonna go into each one and take everything out.
We're gonna do everything from scratch.
We removed that, right?
Yeah, removed, all right.
Serial2, remove, remove.
Okay.
Serial3, remove, and then remove.
All right, so now there should be nothing under each,
01, 02, or 03 in the frame relay.
Everything is empty.
So we took out everything from the frame relay cloud, and now what we're gonna do is just do an erase start on the routers.
You see, we have RIP running on there as well.
So were gonna do an ERASE START.
All right.
[BLANK_AUDIO]
And then just reload.
And we'll do that through all the routers so we have blank,
a blank slate to work with, do everything from scratch.
[BLANK_AUDIO]
And, just so you know, if you close the packet trace, like,
this router I want to close the rou the router, the, the window for the router as it's booting up, it won't take it, changes won't take effect.
So I'll just minimize.
[BLANK_AUDIO]
All right.
Okay, so we're gonna start from Router 1.
We're gonna give it a name.
We're gonna go straight into the interface that we're going to be working with.
We're gonna put the encapsulation and we're gonna create our subinterfaces.
We'll first create the subinterface for DLCI 102, and then we'll create the second subinterface for DLCI 103.
All right, we'll take it nice and easy,
the first one, so we can see how that is.
All right.
Let's maximize this.
Our router has rebooted.
You know this already.
You're gonna say, no, we're gonna do things from scratch.
ENABLE, CONFIG T.
Let's give it a name, HOSTNAME R1.
All right, so INT S0/0/0, Enter.
Let's do a NO SHUT, turn that interface on.
Remember, we don't need to put clock rates.
The frame relay cloud, our provider that's giving us the clocking.
And then we'll do the ENCAP, which is frame-relay.
I tabbed, as you can see.
All right, so, we're done as far as the physical interface,
but now we need to create our subinterface.
So I go back to the interface, I'm gonna put dot 102, but in order to create the subinterface, I have to tell it it's POINT-TO-POINT.
You don't do that, you won't be able to create the subinterface.
Now we're going to do frame relay DLCI.
Oh, sorry.
Interface-dlci.
And this is DLCI 102.
And now we put the IP address, which I forgot the scheme.
It's 1, okay, it's 1 dot, okay, 1.1.
Lovely, this touch pad just works great.
Here we go.
Laptop gone wild.
All right?
IP address192.168.1.1,
255.255.255.0, enter, done.
Simple.
All right.
So now let's do a couple of spaces here.
So we did the encapsulation under the physical interface.
We turned it on.
And then we did our sub interface.
But you must type point to point.
Once we did that.
We did frame relay interface DLCI 102.
And then put the IP address.
Now we're going to do the sub interface for 103.
Which is a connection from router one to router three.
I'm doing an up arrow, just to save time and mistakes, 103.
Point to point.
Interface DL, or frame relay interface DLCI 103.
And then, the IP address will be 3.1.
This is, no, we're three.
[BLANK_AUDIO]
Enter.
Done.
I'll do control Z, WR.
Which you would do exit exit copy run start.
Remember.
So let's do a show start.
[BLANK_AUDIO]
All right.
And then we see the same.
We see our encapsulation.
We did turn on the interface even though I said we weren't.
Oh well.
And then we did make sure that the sub interface, just to make sure that we're in the right, we did put the right DLCI in
the right sub interface.
And then, the IP address for that particular PVC.
And then, 103, 103 and then the 3.1.
And the right mask.
Okay, we're done with router one.
It's that simple, that simple.
Let's go to router two.
Maximize the screen there.
We're gonna say no, no.
Enable, config t.
Host name, r two.
We will now interface add zero slash zero.
Slide zero, slide zero.
Encap frame relay.
Lets do another shot.
We're going to create the sub interface now.
Now, we're gonna create a sub interface.
Now this is router two that is facing router one.
So, inter, sub interface 201.
Point to point.
[BLANK_AUDIO]
Frame relay, interface DLCI.
Now again, this is going where?
From router two to router one, 201.
All right, and then the IP address will be the second available IP address.
For the 1 dot 0 network IP address.
192 dot 168 dot 192.
255255255 dot 0.
Now, the IP schemes.
You can put whatever IP scheme you want.
Doesn't really matter.
You can use public IPs to try to get a little closer.
Use a slash 30, what have you, it doesn't matter, as long as the,
you know, it works.
But don't try, one of the things is, don't try to use, summarize addresses.
Because that's not the way, that's not the purpose of that, okay.
So be careful.
Be careful.
I've seen labs that have been given to me with gateways and summarized addresses, so it's.
No.
All right.
Now we did two to one.
Now we're gonna do two to three.
So we're gonna do sub interface 203.
Oops.
There it is right there.
Okay.
Then we do frame relay interface DLCI.
203.
Now this network is the 2 network.
So this will be 2.1.
Let's change that.
Done.
DWR that is control z.
Let's do a show start just to verify just make sure I got all my ducks in a row here.
All right so we end cap frame relay onto the physical interface 201, 201.
1.2, it's part of the same network going this way.
203, 203, 2.1 because in the 2 network coming down this way.
Cool?
We should be good to go.
Let's minimize that.
So you see, this is the 2 network, 2.1.
And that's what we did for that one [BLANK_AUDIO]
Coming this way, and then this will be 102
coming this way, all right?
Now, we gotta go to router three.
And now, we'll be the two and the three network, all right?
We're gonna say no.
[BLANK_AUDIO]
Enable, config T, host name.
R three interface S0/0/0.
Encap.
Frame relay.
Shot.
A lot of tabbing a lot of tabbing going on.
Remember you've got to type it out.
You can't tab in your test.
All right, we're going to create the sub interface.
Now at first, I mean, here you can choose what sub interface you want to do first.
I'm gonna do the sub interface going back to router two.
So what I do, this is router three going to router two.
Point, don't forget that.
To point.
Then, the interf-, frame-relay Interface DLCI 302,
going from router three to router two.
Then the IP address on this site still will be the 2.2, right?
The 2.0 network.
So IP address, 192.168.2.2,
255, 255, 255.0.
All right and then let's space this out a little bit.
We're going to do now for three, zero,
one, from router three to router one.
So,up arrow, up arrow, up arrow.
Sub interface but you'll want to remember the sub interface does not need to match the DLCI number.
That will be, this is just a visualization purpose that we're doing this for.
So when we look at it and say aha, that's DLCI 301.
All right now we're gonna do the interface, frame relay interface DLCI 301.
And then this is three dot two.
I don't remember doing the v network, did I?
On router one, I'll check that.
And this would be 3.2.
All right, DWR, do show start.
[BLANK_AUDIO]
Let's check.
Encap frame relay, we turned it on.
All right, 301, 301, 3.2, okay?
And three zero two, three zero two, two dot two.
Alright, let me check router one again,
for some reason.
I know I did it, I remember doing it, I think, when I, one, O three, yes I did.
Alright, so we're done with the commands on the routers themselves.
They're still not going to be able to communicate because we got to configure the cloud.
Obviously, you know, I like using the cloud.
It's just a lot easier, cuz what you need to understand is where the DLC is and the point to point.
That's what you need to understand, and the encapsulation type.
And here you get to see the LMI as well.
But, I like using the frame relay cloud.
It just makes things a whole lot easier.
Okay, now we have S1, S2 and S3.
So let's go ahead and I'm going to bring this out this way.
All right, so we're going to go to serial 1, you see the LLI?
It's Cisco, that's the signaling.
The LCI, 102, that's a connection from router 1 to router 2.
That's it.
Then we do the LCI 103,
that's a connection from router 1 to router 3.
No big deal.
We're just telling, hey.
These DLCIs?
This is what they connect to.
That's all we're saying.
On serial one.
And just make sure.
Because the packet tracer.
This maybe not checked.
Make sure that it is online.
All right?
On serial two, we have again, the same LMI.
We have, DLC 201.
There's a connection from router two to router one.
Just click Add.
And then you have DLC 203.
That's a connection from router two to router three.
Okay.
Awesome.
And that's for serial two.
And then go to serial three.
Serial three, you have DLC 302,
which is from R2 to, I'm sorry,
from R3, excuse me, to R2.
And you add, and then you have 301,
which is a connection from router three to router one.
And you click on it.
So now we have all our connections, right?
That belong to or every DLCI that belongs to that particular interface it sees it on.
That's why the DLCs are ones that identify themselves to the frame to the cloud you need to advise them that on this serial, this is what's going on.
So now we got our frame relay.
And we say, okay, so we want to do is make the connection.
Let's make the connection first from router one to router two and back.
So we go to serial one,
there's a connection from router one to router two, okay.
So on router two, or serial two I should say is the connection from router two back to router one.
So we click Add.
So now what we just did we made this connection right here.
Okay.
So since we're still in serial one,
let's do the connections from router one through router three.
So that means on router three, or serial three,
is a connection from router three to router one.
And click Add.
So now we just did this connection right here.
Now we just got one more connection to make and this is right here.
And there we go.
So we go to serial two.
[BLANK_AUDIO]
It's okay.
Router two to router three.
And then serial three, router three to router two, and click add.
And if you do this wrong because you're making the wrong type of connection because you may, you can overlap,
it will let you know you can't make that type of connection.
It will let you know if you did it right or wrong.
It will scream at you right away.
Okay?
So we have our three virtual connections through the frame relay cloud already made.
So all we need to do now is choose a routing protocol.
And let's just use rip for simplistic sake.
And we have,
remember, we have two sub-interface, we have two networks per router.
Here you have network 1.0 and 3.0.
Here you have 2.0.
I mean 1.0 and 2.0.
Maybe you have 2.0 and 3.0.
So here, this is the first one, we have 1.0 and 3.0.
So let's advertise that.
[BLANK_AUDIO]
So enable config t router rip version two.
Network 192.168.190.
Network 3.0, and can't forget the no auto summary command.
DWR, okay?
So we advertise the networks that we are connected to, the 1.0 network and the 3.0.
Simple.
Now we go to router two, which is network one still and network two.
One and two.
Okay?
So, config T, router rip,
version two net 192.168.1.0 and, 2.0.
[BLANK_AUDIO]
No auto summary.
[BLANK_AUDIO]
And WR.
And then we go to the last one.
[BLANK_AUDIO]
And we have network two.
And we have network three.
So we go router, rip ver two net 192.168.2.0 and then 3.0.
No auto summary.
DWR.
And from right here, we can do a show IP URL.
And you're gonna see that you're already learning about the 1.0 network cause you're not directly connected to it.
So you're gonna ping 192.168.1.1 and you can ping 2.1, 2.2.
And.
Well, 3.1, obviously, and 3.2.
So you have connectivity going all the way across.
And that's it.
Really, that's all there is.
What you need to remember with frame-relay.
The key words is the DLCIs, remember that the DLCIs, those are your data link connection identifiers,
and they're local to your router.
Their main purpose is to identify you to the frame relay cloud.
So when you configure, the questions that you will be asked will be, hey.
When you're configuring frame relay, it will be under a sub-interface.
Each sub-interface will be considered a PBC.
Each sub-interface will have its own DLCI.
And, each sub-interface will be in its own sub-net, all right?
That's what you need to keep in mind.
Plus the fact of what we talked about.
We are committed information rate, your access rate,
the discard eligible bits, if they go above your CIR, all right?
And then this configuration.
This configuration is vital, all right?
Because you may get a press going, which is the best method to do frame relay,
there it is right there, okay.
Ended with the view that you need to imprint in your brain.
So, start.
All right.
So remember that one.
Okay?
In the next lesson I'll show a couple more show commands and couple more screens that you need to look at and know what they're talking about.
But definitely, this is the preferred method of frame relay.
Yes, you can do static mappings.
They are, you're using that depending on the routing protocol that you're using.
Because remember, frame relay is a non broadcast multi access network.
So you may, if you're using, let's say OSPF in a in a multi access type of environment,
it will not broadcast out, therefore you will have to do static mappings.
That you would then, when you do your frame relay static frame relay IP map,
you will be the destination IP address and the local DLCI.
Destination IP address and the local DLCI.
And never forget at the end of that statement you must put the word broadcast.
All right ladies and gentlemen I'll see you in the next lesson.
We'll be learning some more show commands.
[BLANK_AUDIO]