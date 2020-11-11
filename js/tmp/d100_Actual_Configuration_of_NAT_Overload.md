[1](2)
D:\mailCloud\prjother\tmp\1\c100_Actual Configuration of NAT Overload.md  




[BLANK_AUDIO]
Alright, so let's go ahead and take these configurations that we did in Notepad,
and we're going to go ahead and do it from scratch on the actual router.
Alright, now you see that we have no IP addresses or anything,
cause they're, that, oops.
The lines are, you see we have red dots there.
I'll put this over here.
So, we are going to need to put an IP address here.
It'll be 1.254.
This'll be 1.254.
All right.
Then we'll start with our NAT configurations.
So why don't I just maximize the router right there.
I want to say nope.
Enable, config T,
host name, NAT.
Okay.
So now we're going to go into interface.
F0/0.
IP address.
192.168.100.254.
Is it 100254, you see how my brain is all messed up?
It's 1.254.
[BLANK_AUDIO]
1.254 255, 255, 255 now zero.
Okay we'll do a no shut on that.
And since we're here already let's tell it hey, your the inside part of the NAT.
So, i p NAT, inside.
Boom, now we're gonna go to the other side.
Interface add zero slash one, IP address,
not that many of these.
1.1.1.254, 255,
255, 255.0, no shots.
And then we're gonna go ahead and tell it,
hey you're the outside IP NAT, outside.
DWR.
All right..
And that's pretty much it for that.
Let's take a look to see show IP in brief.
We are up, up.
Probably have connectivity already going across.
Now what we're gonna do.
We're gonna routing table.
Show IP route.
We're connected to both sides, so no issues there.
So, what we're gonna do now is, we're gonna create our pool of addresses,
since now we know which is inside and which is outside.
So, config t, IP NAT pool, laz.
The pool is gonna be 1.1.1.254.
1.1.1.254.
We don't have real addresses.
I'm gonna use that one.
All right.
And net mask.
It's going to be 255.255.255.0.
Standard access list.
Access hyphen list.
I'm gonna use 10.
Permit the 192 168.1.0,
0.00 255 network.
Again that access lives by itself, doesn't do anything,
we're not applying it to any lines, we're not applying it to any interfaces.
It's listening for interesting traffic.
How does it do that?
By this third line.
IP NAT inside source list, what list?
Ten.
What pool?
Laz.
Magical word?
Overload.
DO WR and you're done.
That is it.
Easy peasey Japanesey, very simple, very simple.
Okay?
So let's see if we're actually translating.
In order to translate, we have to go through the NAT router.
So what we're going to do.
We're going to get one of these PCs that say PC zero.
And we'll ping.
Let's see if this server has an IP address.
Sure does.
Awesome, awesome.
So, look at that.
Still recovering from that accident.
And though the humerus is on this side,
it's really this side.
I should have a plate showing nine screws.
Not fun.
So, let's ping.
Ping, 1.1.1.1.
Come on, IPv4.
All right, we have connectivity.
We would have had connectivity with or without the net, we just want to make sure that we're translating.
All right.
So, supposedly we are.
Let's see.
How do we check to see if we're translating?
Do a control Z here.
Come on.
Show IP NAT trans, short for translation.
And we are.
There is your, the protocol that you're using, obviously, is PNG.
Here is your inside global.
This is the IP address that got translated, right?
Well after a translation, this is the IP address that got translated,
to the global or public IP address.
You can see the port numbers that it's using cuz really paint doesn't have a port number.
But if you take a look at the outside local or global they're both the same cuz this is the destination.
So it's gonna be the same.
Let's try and go through the browser and see if we see anything different.
Let's go back to the PC, let's use the browser and we'll go one dot one dot one dot one.
Oops.
Alright so we went to the server.
But this time we went through the browser.
So now the protocol should have changed.
So I.
[BLANK_AUDIO]
Okay, now we're using the tcp protocol.
You can see you have an actual now port number.
Remember the first 1024 are known ports.
So it starts on the very first port 1025
and it goes up.
Again, this is the IP address of your PC that got translated to this inside global and you can see that your outside local destination port is 80.
It is 80 but the IP addresses do not change.
The IP addresses do not change.
So that's all there is to configuring NAT,
as long as you remember because you'll see a screen it will give you maybe like a show start or a show run and you'll be right there.
Be sure that you look for this IP NAT inside.
I've been at outside.
And there is your, you know, your NAT configuration.
All right.
Next lesson, that we're gonna get into,
which will be your final lesson for NAT will be the pitfalls, what to look for in your certification exam.
I'll see you there.
[BLANK_AUDIO]