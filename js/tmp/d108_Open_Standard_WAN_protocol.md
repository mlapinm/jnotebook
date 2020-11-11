[1](2)
D:\mailCloud\prjother\tmp\1\c108_Open Standard WAN protocol.md  




[BLANK_AUDIO]
All right, now that you've configured and learned about frame relay, and saw how simple that was, just a couple terms that we needed to identify.
We now go into PPP.
And PPP, people, it's not a punishment.
Okay?
It's very easy.
Easy as pie.
All right?
It's a lot of Ps in there.
So I've gotta make things up.
All right.
PPP, as you can see here, as I put in my notes, is for dedicated connections.
And we talked about that when we started talking about what error network.
It's for dedicated, dedicated connections,
but when you're using Cisco routers, all right, and this is the example that you'll be given throughout your certifications,
you'll have only really two Cisco routers,
and they'll be connected through a serial interface.
Well, if you're connected through a serial interface and you have two Cisco routers,
the default ACLC and it'll work fine.
Why would you want to change that default encapsulation of HDLC to PPP?
Well, first thing we can talk about it's an open standard.
What if for whatever reason one of those routers goes down and you don't have another Cisco router?
And you'd have to put it in, you know, a temporary you know, HP router,
Dell router, a fiber router, whatever.
Put another router in there.
So, if you're running HDLC, you're gonna have that up down encapsulation issue.
Okay?
So, if you have PPP as an open standard,
it is not, you know,
it's not you're not tied down to a particular manufacturer, you can use PPP.
So that's one advantage.
PPP has a lot of components within it that gives it it's advantages.
These two main ones right here.
NCP and LCP, these are the things that you look at when you're troubleshooting PPP, okay?
NCP is your network control protocol and that is responsible for the layer 3 router protocols.
It will support IP, IPv4, IPX,
not that we use it, as much as we used to use it before.
But it has support for those layer to your router protocols.
LCP, that's your Link Control Protocol.
That definitely, as you can see here.
Authentication, compression, error detection, multilink capabilities, right?
Multilink PPP, bringing in all these different T1's and bundling them up through PPP and even call by features, as you see there in the notes.
So a lot of things that HDLC will not give you.
So this is the reason why you would want to move over to PPP.
So, that way, if you have a, again, a collage of different routers,
or if you have a Cisco router that you need to replace but you don't have a Cisco router on hand, and for the time being you
have to use another manufacturer.
Understandable.
So, if you have PPP, you have no issues.
And this is the, the, the, the way that a certification is going to test you.
Hey, you got two routers connected.
The IP addresses are okay, seems like, but they're not talking to each other.
Why is that?
Mismatch encapsulation, because if you're running HDLC on both,
one's, again, Dell, one is Cisco, they're not gonna talk to each other,
because the HDLC is proprietary to each manufacturer, in this occasion we do PPP.
The other way would be if you have PPP,
okay, they're not talking to each other,
why is that, and when we start doing the configurations you'll see it, well, because PPP if you configure authentication the passwords and
user names have to be the same.
User names and passwords must be the same,
and I'm gonna repeat that several times because that is key to the certification when you're troubleshooting for a PPP.
Not that you will be inside a router doing this.
Know you'll be given print screens.
And why aren't these routers talking to each other?
Because either the username are not the same, right?
You have the wrong username because when you are configuring PPP you need to create a user name.
So if I'm router one, and I got it back here, I'll show you.
All right.
This is let's say this is,
let's change this to R1.
[BLANK_AUDIO]
And this is R2.
All right.
You're gonna get something as simple as that.
Simple as this right here.
Okay, router 1, router 2.
You need to create a user name on this router, using the host name of this router, so this would be user name router 2, password Cisco.
On this one will be user name router 1,
password Cisco.
If the username does not match the host name of the router, you will not talk.
If the password are not identical on either side,
case sensitive, it will not work.
So it's the host thing, case sensitive.
So again, this is how you will be tested,
but it's not difficult at all to troubleshoot and it's not difficult at all to configure.
It does give us a lot of capabilities, a lot of capabilities, that HDLC does not.
So this is the reason what you see right here,
all right, that we want to go ahead and do that.
We wanna have these network control protocol,
that looks add the layer three routed protocols.
We wanna have this link control protocol.
That's gonna look at the authentication.
That's gonna go ahead and compress as we send the information across.
That will do error detection to see if there's any problems with that package going across.
That would allow us to bundle multiple T1's into one.
And, and we put this for last.
That's callback features.
But again, it has a lot of capabilities.
And when it comes to the certification exam, when it comes to the certification,
this is the goal, again.
I don't want you to lose sight of the goal.
Because I know you've been through, it's been a long journey.
I wanna make sure that you keep that goal in mind is to pass this test,
this 200-120 test.
When they test you for a PPP these are the things that they're looking for.
All right?
Did you understand that there's two,
those two protocols, NCP and LCP, what they do, all right?
And when you're talking about the authentication and all that, they need to match.
But once we get into the configuration,
you'll, you'll see what I'm talking about.
You'll see how the, the lines will go down and they'll come back up.
And if the passwords don't match, they're not gonna talk.
So because PPP does have a PPP establishment or link establishment phase,
and we'll talk about that, when we get into the configuration portion of it,
which will be our next lesson, all right?
So this is PPP, definitely is a protocol that's very popular.
Everybody uses it, and so will you.
I'll see you in the next session.
[BLANK_AUDIO]