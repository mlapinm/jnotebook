[1](2)
D:\mailCloud\prjother\tmp\1\c105_What is a DLCI and who assigns it.md  




[BLANK_AUDIO]
Alrighty welcome back.
The next term that we're gonna talk about in frame relay is something called a DLCI.
This is actually your data link connection, whoops,
iden, whoo, identifier.
I think that's how you spell it,
identifier.
This number is getting to you by your provider.
At the moment that you purchase your CIR.
You get your access right.
They're gonna give you a number.
This DLCI, I'll show you here in the lab.
Will represent what's called a PVC.
Which is a permanent virtual circuit.
As you can see here in the lab, there are two networks, right?
This is one network here.
This is one network here.
This is one network here.
Obviously, we're using sub interfaces in order to create this.
We have only one physical connection, so we create sub interfaces.
And, for each sub interface you'll have a data link connection identifier number.
That, that is your PVC, your permanent virtual circuit.
That DLCI is going to identify you to the frame relay switch or your provider.
All right, to the cloud.
So that number will identify you to the cloud, to whoever your provider is.
So it's important.
Those DLCIs, that's why I said, are local numbers.
They're local numbers.
And that becomes important when you start doing things like frame relay map.
Lot of problems with people doing,
questions based on frame relay.
Cuz you really don't configure frame relay whatsoever.
That's why I want you to get an understanding of what the CIR,
the access rate, and now the DLCI.
Cause you will get questions.
Hey, what is the path?
What DLCI.
Wow, I didn't think I touched that.
What DLCI would you use, well, I'm standing right in front of it.
Okay?
So, if you're trying to get from here to here.
Is the DLCI 201 to 102.
So once you identify yourself to the frame relay cloud he'll say, okay he wants to go to you know he, he's part of this company
and he's trying to get to that DLCI.
So you will get questions with something that looks like this and then you'll have to match up which pathway it's it's going to use.
Well in order to get over here, this will be the pathway, this will be your local DLCI number for this particular permanent
virtual circuit, for this sub-interface.
Cuz when you're configuring frame relay,
you do it du, let me rephrase that.
The preferred method to configure frame relay.
Sounds like a test question.
To avoid split horizon issues, and remember what split horizon is.
Split horizon is do not update me on the same interface that I just sent you information on.
So to avoid that split horizon issue you go ahead and create sub interfaces.
Each sub interface will be its own sub net.
It will have its own DLCI, which creates that permanent virtual circuit that will be identified to the frame relay cloud.
All right.
And that's how we're gonna configure this particular frame relay lab.
We'll take a look at it first and then we'll do it.
But this DLCI represents this connection path right here.
This DLCI is this pathway here cuz really what it's saying here is DLCI one to two.
Two to one.
Two to three.
Three to two.
And this one should be three to one.
I have to change that.
Okay?
And they'll be three to one and then one to three.
All right?
Now again, it's.
Those are not gonna be the numbers that they use.
They'll use completely different numbers.
But this is so you understand the concept of what's going on.
You're creating these logical paths between each particular router.
But again, it is your provider that gives you that DLCI number.
And you will then assign it to the PVC that you choose, obviously.
All right, in this case, this DLCI would be on that particular PVC.
Let me just show you, let me just show you, so you can, instead of just taking a look at something there,
you can see how it would come into play.
I'm gonna do a show start.
It's a lot easier to look at that.
And you can see, right here.
You're having your encapsulation.
We're using frame relay.
All right.
In this particular sub interface, all right, which I'm using 102.
Right, to match up to the DLCI.
I'm using the frame relay DLCI of 102.
That now says, okay.
I am this PVC.
102.
And then, I can take this number and identify myself to a frame relay cloud.
And, like I was saying earlier, that's important if you're doing,
let's say a frame relay map, a static mapping.
Because, when you do a static mapping,
you do frame relay map, you do the destination IP.
And the local DLCI, and it ends in broadcast,
because the nature of frame relay is a non-broadcast multi-access network.
Non-broadcast.
It doesn't broadcast, all right?
So, that's why we do these point to point connections.
This is the best way to do frame relay.
It really, really is.
Once you strike because imagine using and I don't want to get off the topic.
But if you are using OSPF which is also non broadcast in nature and you are using frame relay non broadcast in nature.
So there's a lot of different things that you may need to do in order to make that happen.
Goes beyond the CCNA.
Goes beyond the CCNA.
Disregard, disregard what I said just.
Keep it in the back of your mind, all right, but this is where the DLCI comes in, this is where you would put it.
You'd put it in the sub interface, or the PVC right that you're gonna use,
this permanent virtual circuit.
And they're point-to-point,
point-to-point,
it is a type of frame relay that we're going to go ahead and configure.
Take a look at the screen.
Take a look at the screen.
You seen the encapsulation, you see the sub interface.
Now you know, again, this number does not need to match the DLCI by, but why not.
Just like in VLANs remember, when we did the subinterfaces in VLAN.
That the subinterface matched the VLAN ID,
is that a requirement?
No.
But did I do it?
Yes, visualization purposes.
Same thing here.
So when I look at a sub interface I already know off the top of my head,
oh that's that DLCI so you know, so you know which DLCI it is.
So, but this is how you would use the DLCI once the provider gives it to you.
And that is what identifies you to a frame relay cloud.
But this is, I mean the configuration you can see.
It's not that difficult, it's not that difficult.
All right.
So this is where you would use that DLCI,
the DLCI.
No clock-rates you didn't see any clock-rates on there.
Unless they had it already there by default, no clock-rates,
I don't have no clock-rates on here.
The clock rate, remember your routers.
Routers are DTE.
Again, I can't help but saying it.
Sounds like a test question.
Routers are DTE by nature.
They determining the equipment.
DTE.
It is your provider that gives you the clocking.
Unless, you have some sort of internal or external CSUDSU, and for whatever you're doing your own clocking.
Then okay.
Other than that, it's your provider.
It's your provider that gives you the clocking and synchronization.
Cuz everyone plugs in now a days, not with a server, but with what.
With some T1 line to a T1 jack line, you know or something of that nature.
Or you'll plug it in straight to a fiber line or what have you.
But it's not going.
You know, it's.
No.
You don't provide the clocking.
It's your provider.
All right?
So again, that is what your DLCI is and it is local.
To your particular segment.
To your router.
Okay, and it is actually your provider who gives it to you.
That's it.
So, I wanted to explain so that once we start doing the configurations,
you understand what I'm doing.
So you know where I'm getting these numbers from, and what they mean.
Alright, and again the questions that you are going to be asked on the test for frame relay.
They're not going to be as difficult and they're going to be very basic questions.
You need to understand the terms that I'm giving you and then when we do the show commands, I'll share the print screens for that.
See you in the next lesson.