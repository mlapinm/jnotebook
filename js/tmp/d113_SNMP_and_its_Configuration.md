[1](2)
D:\mailCloud\prjother\tmp\1\c113_SNMP and its Configuration.md  




[BLANK_AUDIO]
All right.
We've made it to the the last session in the book.
My book, that is.
All right, which is the last part of these IP services that CISCO threw in there.
We're gonna talk about SNMP on this lesson.
Then, the next lesson will be Syslog.
And then, Netflow.
And again, SNMP and Syslog are the only two that really, we have labs with.
And, the labs are okay, I mean they're not bad, you can see what they do.
But, really, honestly?
This is why I have these softwares up here.
MRTG, PRTG, Splunk, Cisco Works, or Solar Winds.
These are the sum of the monitoring devices that you're going to be using.
All you need to understand for your test is, you know,
is the very basics of what this does.
Now, SNMP has been around forever.
We've used SNMP, I remember using SNMP in Netmon.
Remember Network Monitor, for those of you that have been in IT for a while?
All right.
Netmon in Windows 2000,
we were, Windows 98.
You had all these different oh my God, I want to say clocks.
Counters, all these different counters that you'd,
you'd actually put in there and you, you look at all these different counters that would create a histogram and all that.
That's what this is.
SNMP, as it says here, it monitors all devices on the network.
What does that mean, what do you mean all devices on a network?
Yes, anything that supports SNMP, SNMP,
you have an,
you have an actual work station that's actually going out to the network.
And you've enabled this SNMP and now they are talking about simple management network protocol, they are talking back and forth, right?
They are sending information, hey, this is going out with me, this is going out with me and it's telling you, hey, this is
what's going on with this router.
You will go into your managing work station, whatever software they said that you have, and you take a look at each device that you're monitoring and
you see if there's anything wrong.
The CPU usage is too high or whatever it is, whatever it is.
It could be a server, you know, you want to look at the, the paging files or the router's you know, error rates or whatever.
All right?
SN, that's what SNMP is all about.
And here where it says it polls the MIB,
right,
the management information base, for the OID, object identifier.
Everything in the router, everything in the router that we've seen so far when we do show IP in brief, when we do show interface, when we do show start,
all, everything in there CISCO has assigned an OID.
What is an OID?
And everyone actually uses this analogy I guess, 69.1.3.4.6.89 dot whatever.
It's a huge number.
They call it, everyone calls it an IP address gone bad.
All right?
Because it's a huge number.
Do you need to memorize these numbers?
No you do not, if you do, wow hey man, or gal, more power to you.
But because what you're gonna do is your managing work station will work off these numbers and give you back, hey, what is it that you wanna look at?
Well I wanna look at the error rates, I wanna look at the debug.
I want to look at different things that's going on with this particular, so I will bring back that information.
All right?
That's what the OID and you actually, when you purchase a router, you know,
here's your router, okay, and then you have your iOS.
And then you want to download the latest and greatest MIB right, for that particular router.
If there's any updated stuff there with it.
So definitely, yeah, you're going to go ahead and, this is what.
Now for.
For the packet tracer we're going to use an actual PC to look at the MIB, and it works based on something called a community string.
And that's the only problem, it's plain text.
It's a plain text, and then, since it's a plain text what happens is that,
if it's, it can be intercepted, they can see what you're looking at.
Now, the good thing is, it could be read-only or read-write.
Now, there's different versions of SNMP.
You have SNMP one, SNMP version two C.
You have SNMP version three.
Version two C, by far, is the most popular, okay.
But, it's still plain text, right.
You can do read-only or read-write.
Definitely only do read-only, because if you do read-write, meaning now the person,
if he intercepts it, he can actually re-write stuff, passwords, right?
IP addresses, security configurations.
So you do read only, so they only see it.
Version three, you can actually assign groups for a particular counter let's say.
So, so you can end, it's username and password and things like that.
So version three is the latest one and it's the one that's, more secure,
because it encrypts and you have, I have user names and passwords.
You can assign them by groups.
So it's very secure, but again, the most popular is version two C cuz again,
the change to resistance syndrome.
All right.
Here no security, I just talked about that.
String for version of yeah, community string, we'll look at it now.
Version three has a community string, but I encourage you.
Okay, I just told you all that, okay,
cool.
So that's what SNMP does.
I'm going to show you right now.
But again, ladies and gentlemen, and this is what I'm trying to, you know, ingrain.
You're not gonna be sitting at your router at your desk looking at your router to see when the interface goes down, to see.
No you're gonna be looking at a big plasma screen TV or your management work station has the software in it.
And you'll be monitoring that particular you know, in a desktop you have a little thing right there, you know, you have two
or three desktops.
Then you'll have that software off to the side taking a look at and monitoring,
you know, certain things that, cuz you'll probably be hey,
I want you to monitor this.
Now, if you're the lucky individual that you need, you get to monitor, you know,
300 different sites that have 2,000
different routers and,
you know, 4,000 you know, servers and all sorts of crazy stuff.
I hope you're getting paid a lot of money,
all right?
But again you'll be looking at management software.
And since I'm on the subject of that,
management software.
One of the things when you get out there and you guys, you guys put your resumes out there so recruiters and all that can
call you and what have you.
Keep this in mind, obviously, I want most of you to get your certification.
I definitely want you to get you know,
your job, your promotion,
whatever reason it is you're getting this certification.
Well one of the things that you need to ask these recruiters in a very nice way,
and a very humble way.
What you need to ask the recruiter is,
because they have questions like this, I think I've said this before.
Have you ever managed or analyzed a enterprise network?
Well, this would be one of my questions to that particular recruiter.
What is your definition of an enterprised network, and what software is your client using to analyze his network?
Because, SNMP is just the underlying protocol that talks back and forth to the software.
So what software are they using?
Because not everyone uses the same software.
I can tell you this much,
Splunk that I had up there before were, in TelCo they use Splunk.
In other places they use Solar Winds.
PRTG is also very popular and easy to use.
But again, if you've never used PRTG.
So now you don't know how to analyze a network?
So these are the kind of things that I don't want you to get fear of,
because I know when you read these interesting for a lack of a better word that I really want to say job descriptions,
you must know how, you, you should have experience with,
you know, enterprise networks and analyzing enterprise networks.
Okay.
But what software are they using?
So keep that in mind.
Be very alert at what these recruiters are asking you.
Ask questions back.
Be humble, cuz I want you to get the job.
Okay?
But still, don't let nobody intimidate you to say, well,
you know, we need somebody that knows how to do.
Well, you know, because again, out there in the, the,
I don't know who put these descriptions out there.
You know, cuz you've seen descriptions that say no high school diploma needed, two years of Cisco experience.
I said, my God.
This guy has no high school degree, but he must have known somebody to get that job in, you know, doing Cisco.
They have two years of experience.
So what is it you want?
Or even better, you must be a CCNA.
CCNP preferred.
What are, you know, it's confusing.
So be careful when you're, you know, don't not be careful, just don't be intimidated.
Sometimes these descriptions that prefer jobs.
All this is to scare people off, say, oh,
my God.
I don't know that, I don't know that.
And they're not and you don't go for the job.
You go for the job and then you ask the questions or you do your research before you give a call.
You know, okay, okay, you want somebody who knows how to monitor network.
Take a look at all the different monitoring devices that exists out there.
All right.
Take a look at it.
So when you speak, you can speak intelligently about certain things.
But again, not every company is going to do everything the same way.
Each company has a different way of doing it.
Once you get the certification, it's a matter of understanding the concepts,
like SNMP.
What does SNMP do?
It talks, it monitors the devices that talk SNMP.
And pretty much, 99.9% of all devices talk SNMP, because every,
SNMP has been around since Fred Flintstone.
Okay?
So, okay.
I'm getting, I'm getting a little bit off the subject.
But anyway, but the work station is what you're going to configure.
Here's your MIB.
And what you do and we're gonna, we're gonna put this,
you go to the advance and we'll put the address, okay?
We'll put the the actual address, hold on.
Let me cancel this real quick and let me move this over here.
All right.
And we go to advance, we can actually put the,
the address that we're trying to monitor,
the port that it's using.
And here see it says that the read community and the write community.
What that means is the read-only or write.
You never want to give them write permissions,
because they can change things around.
So you wanna give the just read and you can see that,
you can pick the version that you want.
Again, I'm just gonna leave out version one.
Nobody uses version one anymore at all.
All right?
So, it really doesn't matter just understand the concepts.
Obviously, it would be cool if you can use version three, so you can put user name and passwords and so forth.
And sign into different groups or version two C,
it's really version two C or we can put version two, what have you.
But again, we're gonna do it first on the router and then we'll come down to the and you see here, you can expand on what is it
that you want to look at.
But let's go ahead and configure it on the router.
We need to gonna to create an SMP server community string.
All right.
So here we go.
Let's maximize the screen, cuz I laugh.
I love when people call me for no, for no reason.
I use it for fun.
All right.
SNMP server.
P, Q, R, S.
Here it is.
SNMP server community and you see that's all, that's all they let you do.
Community and then you put a word, you put a word.
I like, you know, me and movies and what have you.
But I'm gonna pick okay, Spartacus.
Sparta, Sparta.
I just went Sparta, okay?
And then you gotta tell it, hey, is this only read-only or re-write?
We're just gonna put read-only.
Okay.
SNMP server community the community string is Sparta and it's, I put R0.
Read-only.
Sorry, read-only.
Okay?
And then [SOUND] you see, interface F0/0.
Invalid interface type of number.
Really?
Do show IP IN BRIEF.
Oh, we're fancy now.
All right.
INT G0/0.
Whoa.
Cool.
All right.
And let's see if anything, [SOUND] we didn't put no grooves for anything like that.
All right.
So we did the community string and now we go to our MIB, right?
And we do the same thing.
[BLANK_AUDIO]
So the address is 192.168.
What 0.3.284.
[BLANK_AUDIO]
Okay?
Because something just went,
just right here.
Oh, oh here we go.
Advanced, just bring it over here.
All right.
492.168.3.254 and then the read community strain is Sparta.
Okay and we click OK.
And we'll just keep it at version one, cuz we're not worried about any of that.
And then what you do is if you wanted to take a look,
we're pretending this is our management software that we're using.
All right.
If you want to take a look at something and let's bring this up a little bit,
cuz we need to expand the [INAUDIBLE]
tree.
And we're going to go to router, advance IPs,
the ISO dot .org,do dod, internet.
We'll go to management, there you go,
system.
All right.
And let's bring this out a little bit [BLANK_AUDIO]
And [SOUND] you see the system name.
And then you see, there's your OID for the system name.
That's the OID.
You don't gotta memorize that.
All right?
And then you get it.
Operations a go, get and then you go.
So what is the system name?
R2.
That's what that is.
Now this is the packet tracer.
This is the packet tracer.
If you had any of the subs that we talked before.
The number one software, in my personal humble opinion, would be solar lens.
That you configure SNMP to monitor your entire infrastructure enterprise across the world.
All right?
You can monitor all your devices.
You'll be looking at something very colorful.
Nice graphs.
Things that you can you know, it makes sense to to see.
If you actually had to drill down,
cuz this reminds me of net mon way back in the day.
They had to drill down and take a look at a bunch of hex numbers and all sorts of crazy stuff.
That was more of a pain than anything else.
It, it hurt my eyes.
Just like when people now see IPv6.
It's like, oh my God, right?
Because it's a long address, what have you.
The same thing.
I can, I can't even imagine having to drill down.
Now, one thing is drilling down on charts and taking a look at more in,
information that makes a little bit more sense or easier on the eyes.
Because it's color coded or what have you.
Then looking at something, okay.
System name, just to get the system name,
I have to drill down all through this.
But that's what it's doing, you see that SNMP is now giving your management workstation that particular information, and that's all we're really managing right now
is that particular router.
So we can take a look at all the different things about the router.
Lets say, that SNMP was configured.
Let's say the system uptime.
How long has the system uptime and got a different OID.
Click, oh, well, it's been up for zero hours and 54 minutes.
Whatever the case may be.
So all these things, if configured, you can see and you can configure.
Let me look at I think the writing protocol we are using is RIP.
Let's see if we can look at our RIP entry or something and see.
[BLANK_AUDIO]
There you go, 2.1, that will be my RIP peer a, whatever that means.
So again.
Oh, it's your RIP to peer address.
Okay.
So that's my peer address, all right?
1921682.1.
And let's take a look and see what address is that.
Just, just to find out.
2.1.
My peer.
This guy right here.
2.1.
So now I know who my peer address is.
But again this is a package ratio.
So when they talk about, I mean,
as far as the test is concerned, yeah,
know the different versions of.
Know what the different versions of SNP is.
Is it version one, two and three or 2c and three?
One, nobody uses.
2c, plain text.
Uses a community string.
Read-write, read-only.
Or version three that you can use actual groups, username, and it has encryption.
And its purpose is to actually look at the devices and see what's going on and bring back information to you so you can monitor these devices.
Okay.
[SOUND] as far as a certification, is concerned, oh and remember your OID.
Your OID.
Your OID is this, like I said,
we looked at the system name and certain things, the RIP.
Because every time you type something,
show IP in brief, let's say.
Everything in there.
Everything, interface, Gigabit F00 all this is an OID, the IP address.
All right, yes, unset, administratively down down.
Now, all that is an, is an OID, is an object identifier.
That's what SNMP looks at.
So you download.
You download the latest management information base, right?
Management soft, you download that so you can have, you know, the the latest MIB.
So you can go ahead and monitor your device, your devices properly.
And have them updated with certain things.
But again, this goes to your management software.
And I can't repeat this enough.
Because in the test, all they want you to know is what SNMP does.
That's it.
No versions.
And, you have to create a community string and pretty much, that's about it.
And what the MIB is and the OID is.
That's it.
Do you need to memorize OIDs?
No.
Are you gonna be using something that looks like plain text or whatever to monitor things?
I surely hope not.
Okay.
Once you go into a company, you will be using software to manage everything, so don't be too worried about that.
All right.
Whether it's PRTG or MRTG or Splunk or Cisco works, or whatever it is,
okay?
You'll be using some sort of management software.
And again depending on the company,
depending on what they use,
maybe the ones that I mentioned, they won't even use.
Something proprietary to that particular company that was created specifically for them.
So, again the underlying protocol is what we need to be concerned with, all right?
SNMP, it's been around here for quite a while and it's going to be here to stay until they find something new, or a newer
version of it, but that's it.
That's what SNMP is and that's what you need to know.
So if you wanted to practice with SNMP,
you go home and create your community string on your router.
All right, you may get read only, all right, and then you configure it on your workstations down here.
And then you can just start saying, okay let me drill down and see what I can see on on the router.
And if you get information back, hey, you did it correctly.
You did it correctly.
And that's all to SNMP there is.
All right.
I'll see you in the next lesson.
We're gonna be looking at cis log next.
[BLANK_AUDIO]