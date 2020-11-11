[1](2)
D:\mailCloud\prjother\tmp\1\c103_What are the connection types.md  




[BLANK_AUDIO]
Welcome back everyone.
And this is what I was talking about earlier about the different types of connections that you can have from going, from going from point A to point B,
all right?
In a wide area network.
Now the first one is called dedicated, all right?
This is where you actually, let's say this, let's,
as you can see you have a serial, right,
connection, wire connection.
Let's call this a T1.
For whatever reason and I can tell you that I did this a long time ago.
I was doing my own I wanted I purchased a full T1 several years ago.
All right and at that moment, it was costing like $511 and something cents for like, over $500 a month for whopping 1.544 megabits per second.
Yes.
It was in my infancy.
So when I was trying to do my video streaming, definitely,
it was not a good thing.
All right, using just the plain T1.
So, but let's say for argument sake that this particular company they said,
hey, you know, we need a dedicated.
We need that full bandwidth at all times 24/7, 365 days a year.
We need that bandwidth.
So you purchase it.
You say, hey man, this is my T1, all right.
Or my T3 or whatever it is, whatever type of connection, my metro E, whatever it is.
You want that full bandwidth at all times.
You don't wanna share it with anyone.
So you get a dedicated connection.
Now for that, cashola, it's gonna cost you money, money, money, money.
If you've got that kinda cash, then hey,
don't worry about it.
If you don't have that kinda cash then you don't need that, okay?
You need to try and justify, hey, why do we need this connection?
Right?
You would at first analyze the connection,
that thing existing or, let's say, you,
you get a partial T1,
or the, like they used to be called,
fractional T1s.
And you would analyze the bandwidth,
right?
Throughout a week, two weeks, a month,
however you wanna do to create a baseline of people coming in, working during the week, on the weekends, what have you, and
see if it's, you know, going over what it should go over.
And then you can make, you know, you can try and justify and say, hey,
we need that full bandwidth at all times.
So you need to be able to justify that type of connection.
You, you know, we're talking about a T1,
but you still need to justify that you need that full bandwidth.
And, if you're going to use this type of connection, that means the protocols that you're going to use are HDLC.
Or you're going to use is HDLC.
Okay?
Or PPP.
HDLC or PPP.
Now this is the, the whole issue with HDLC and PPP.
If your routers are from the same manufacturer.
Cause if you're using a serial connection,
all right.
The default, sounds like a test question.
The default encapsulation for serial connections is HDLC.
HDLC, its proprietary per manufacturer.
Within the header of that HDLC protocol,
they have specific information for that particular vendor.
So if you have different vendors, and you're using HDLC, you're gonna get an up-down.
You know how you have up-up, or down-down,
up-down in your lines?
You're gonna get an up-down because the HDLC,
you got two different vendors, and this sounds again very similar to something you may see on your certification where if
you have a Cisco here and you have a Juniper, or your F5 or whatever it is, okay?
And you're trying to run across a serial connection using HDLC,
it's not gonna work because its proprietary for that particular vendor.
If you have the same vendor then HDLC, not a problem.
It'll work without a, without a glitch,
hopefully, right?
[LAUGH] But, if you do have, for whatever reason you decided, well,
you know, I wanna use a,a collage of different routers in my network because,
you know, you just wanna be artistic.
Then you would use an open standard WAN protocol which is PPP.
And PPP does give you a lot of different advantages that HDLC doesn't.
And when get to the PPP, cause I wanna leave that for P,
for the PPP lesson, it has a lot of advantages over HDLC.
I just mentioned one, which is something that we did in telecommunications,
or still do in certain cases.
That we bundle.
It allows you to bundle multiple T1s into one,
to make it more bandwidth.
Okay, to have more bandwidth.
So definitely, if you do need,
if you can justify the cash to have that dedicated connection then yes,
you will use a a dedicated connection,
right, lease.
This ISDN, they only people that I, it's,
it's a phone call, it's, it's dial-up.
Okay?
256 megabits per second, 512 if you're lucky.
All right, and as the most complicated thing in the world,
cause when I took my test that's what I had to know was ISDN, okay?
My god, all right, is, is just a headache for the amount of speed that you're gonna get.
It's not worth it.
There are virtual circuits or their circuit switch, it's, again dial-up.
And the only people that I know that still use that type of connection,
either youre using it for a backup in schools, or, or you have where I've seen let's say like check cashing stores and things of that nature.
They, they use it.
You can hear it.
When they go do their little paper and they fax the little paper, what.
You hear that.
[SOUND] That dialing up, annoying noise.
It's, like, wow.
Really?
So for whatever reason, they still use that.
This is something that you don't really need to worry about anymore.
Okay?
You don't need to worry about this anymore.
The, there will be no ISDN questions on all that.
Just know that there are circuit switch and it's, think of a telephone call,
once that circuit is made, boom, it's, you know,
once you've made that connection then that circuit is gone.
The last one I'll leave it right there,
I'll leave it right there.
The last one, cause I don't want you to think that I'm reading to you,
the last one is packet switch, which here,
this is where MPLS, right, the new one now that everybody is turning to.
But you don't get tested on.
Frame relay and its predecessor X.25.
X.25 was very bogged down with a lot of error checking.
All right?
And correction to make sure the packet got to where it needed to go.
And did a lot of, too much checking.
So it's very slow.
Then came along frame relay.
And we still use frame till today.
It is still being used today.
And I'm not talking about, in some corner,
you know, business, you know,
little business.
No, in enterprise businesses, frame relay is still being used, all right.
Frame relay is when you're, again, low on cash.
If you don't have the money to pay for a dedicated connection, you're not gonna use dial-up.
So you're gonna say, okay, listen.
I just need this much bandwidth.
I've analyzed my network.
I only really need this amount of bandwidth, how much would that cost?
So it's cheaper, and you, you really pay what you use for.
And again, I don't wanna get too much into details.
I just wanna talk about the different connection types.
But definitely frame relay, a lot of companies do it.
You look at these strip malls.
They all share T1s.
Cuz remember T1s are chopped up into 64
kilobit chunks.
A lot of these stores that you go to, they don't need a full T1.
Some schools, they've downgraded from, you know, T, and yes, how can you downgrade from a T1?
I, I agree with you.
How can you downgrade from a T1?
Well they do and they go down.
Okay?
They actually go down to something even,
you know, like ISDN type connections.
Because okay, hey, listen.
I only need, you know, 256 kilobits per second, and a frame relay connection,
all right?
I only need 512, and, or something of that nature.
What eh, they've analyzed the network,
this is what I need.
I don't wanna pay that much, and I wanna use a frame relay type of a connection.
Then they go and call a provider and they explains, oh,
okay we can provide you with that service.
So, again, there's three, and really, you don't have to worry about ISDN,.
But the two connection types that you need to be concerned with for the CCNA certification are the dedicated connections where you're gonna use either
HDLC or PPP.
And then you have the packets switched type of connection where you're gonna be using frame relay or MPLS, or like I said, X.25s.
Old news, nobody uses X.25 anymore.
So we have frame relay that's gonna go ahead and that's the one that you're gonna be tested on.
That's the one that you need to understand.
And once you get into that lesson, I'll explain the details of each one.
Right now, hey, these are just the connection types.
This is what we can do to get across a wide area network, okay?
Using these types of connections.
Again, dial-up, stay away from ISDN, old,
old technology.
Old technology.
Dedicated or packet switch.
And again, the latest thing is MPLS.
It was a hard transition to make, but everybody seen the benefits of MPLS using that labeling system where routers actually can pass the information a lot
quicker than frame relay.
But again, it's gonna take a while before everybody transitions over cause I can tell you right now, in telecommunications,
they still use frame relay.
At cert, in certain areas obviously but they still use it.
It's still being used today in today's networks for [UNKNOWN] networks.
So and, this is what you're being tested on so you need to understand the details of it,
all right.
These are your connection types, all right, not an issue.
In our next lesson,
we're gonna start getting into the details of these connection types.
I'll see you there.
[BLANK_AUDIO]