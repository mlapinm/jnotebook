D:\mailCloud\prjother\tmp\1\c111_HSRP Details and configuration.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
All right everybody.|All right everybody.
Let's get down to the details of HSRP before we start the configuration.|Let's get down to the details of HSRP before we start the configuration.
Now, as we talked earlier, in the previous lesson, HSRP is a redundancy protocol.|Now, as we talked earlier, in the previous lesson, HSRP is a redundancy protocol.
And as you can see there, the routers or gateways are organized into, you're gonna have different groups for different gateways, if that's what you wanna do.|And as you can see there, the routers or gateways are organized into, you're gonna have different groups for different gateways, if that's what you wanna do.
We're only gonna have one group, just so you can understand the concept of what HSRP or these redundancy protocols do.|We're only gonna have one group, just so you can understand the concept of what HSRP or these redundancy protocols do.
In the case of HSRP, you have one active router,|In the case of HSRP, you have one active router,
one standby router, and it's based on the priority number.|one standby router, and it's based on the priority number.
The higher the priority number, that's the one that becomes the active router.|The higher the priority number, that's the one that becomes the active router.
And you'll see that now in the config.|And you'll see that now in the config.
Virtual router ID, and a MAC address are generated.|Virtual router ID, and a MAC address are generated.
You are going to actually create the virtual IP, or ID, that should have been IP, virtual IP, all right, that you you assign within that subnet.|You are going to actually create the virtual IP, or ID, that should have been IP, virtual IP, all right, that you you assign within that subnet.
The MAC address is what gets virtually created.|The MAC address is what gets virtually created.
Hello messages every three seconds.|Hello messages every three seconds.
We know that.|We know that.
Dead after ten, cuz, and those hellos are important, because they keep talking.|Dead after ten, cuz, and those hellos are important, because they keep talking.
Remember, again I said that you can have more than just the active and standby router.|Remember, again I said that you can have more than just the active and standby router.
You can have up to eight routers.|You can have up to eight routers.
The other routers are really just not,|The other routers are really just not,
they're just looking and,|they're just looking and,
at the active and standby, at those messages.|at the active and standby, at those messages.
They do send their messages.|They do send their messages.
Are, but they're called speak, right.|Are, but they're called speak, right.
Just, they're just like in the waiting mode,|Just, they're just like in the waiting mode,
not to say standby, in case something happens.|not to say standby, in case something happens.
But they are actually watching.|But they are actually watching.
But the ones that are the two routers,|But the ones that are the two routers,
that are actually doing something,|that are actually doing something,
are the active and standby routers.|are the active and standby routers.
All right now, this is important.|All right now, this is important.
Whatever virtual IP you decide to use that's completely up to you.|Whatever virtual IP you decide to use that's completely up to you.
You, as long as you use the subnet because remember the type of,|You, as long as you use the subnet because remember the type of,
IP addressing scheme we have, it will be within that particular subnet.|IP addressing scheme we have, it will be within that particular subnet.
[BLANK_AUDIO]|[BLANK_AUDIO]
What gets generated automatically, it's that virtual MAC address.|What gets generated automatically, it's that virtual MAC address.
Now remember, this right here, hm, hm,|Now remember, this right here, hm, hm,
is it here or here, hm, oh, well I have it broken down here ha, ha, ha, ha.|is it here or here, hm, oh, well I have it broken down here ha, ha, ha, ha.
Here it is, yes it's the c as well.|Here it is, yes it's the c as well.
All right.|All right.
The first one, two, three, four, five,|The first one, two, three, four, five,
six, 24 bits, right,|six, 24 bits, right,
these are hex numbers.|these are hex numbers.
Vendor ID.|Vendor ID.
That's for Cisco.|That's for Cisco.
They say hey, this is Cisco.|They say hey, this is Cisco.
All right.|All right.
The next 16 is the one for HSRP, the one for HSRP ID.|The next 16 is the one for HSRP, the one for HSRP ID.
And the last two, okay, is gonna be the group.|And the last two, okay, is gonna be the group.
The group number you'd be assigned to, if your assigned to group number one,|The group number you'd be assigned to, if your assigned to group number one,
group number two, it actually turns it into a hexidecimal number, all right?|group number two, it actually turns it into a hexidecimal number, all right?
So the last eight bits are the one that that creates that, okay?|So the last eight bits are the one that that creates that, okay?
Now let me see here anything else important that I need to say about this right here, HSRP obviously as it says here oh, how would you do it?|Now let me see here anything else important that I need to say about this right here, HSRP obviously as it says here oh, how would you do it?
Okay, so now we get into configuration.|Okay, so now we get into configuration.
So, what you need to for the certification, but you need to be,|So, what you need to for the certification, but you need to be,
very familiar with, one, the HSRP, VRP,|very familiar with, one, the HSRP, VRP,
GLBP, r redundancy protocols.|GLBP, r redundancy protocols.
Two, for HSRP you need to know the default, hellos and the default,|Two, for HSRP you need to know the default, hellos and the default,
you know, which is three seconds, and then ten seconds for the dead, all right?|you know, which is three seconds, and then ten seconds for the dead, all right?
Only the hold.|Only the hold.
You need to know it's based on an active standby router.|You need to know it's based on an active standby router.
And the active and standby are elected,|And the active and standby are elected,
right?|right?
That's why the hello's, sending messages back and forth.|That's why the hello's, sending messages back and forth.
That's one of the things that they determine, they talk to each other,|That's one of the things that they determine, they talk to each other,
they send.|they send.
Hey, my priority number's higher than yours, so therefore I am the active router.|Hey, my priority number's higher than yours, so therefore I am the active router.
Okay, so, these are things that you need to be aware of.|Okay, so, these are things that you need to be aware of.
And, definitely that virtual MAC address,|And, definitely that virtual MAC address,
because you will be,|because you will be,
more than likely be asked a question, is this a valid HSRP MAC address?|more than likely be asked a question, is this a valid HSRP MAC address?
All right?|All right?
But, let's look at configuration.|But, let's look at configuration.
As you can see here Window 192.168.1.0|As you can see here Window 192.168.1.0
network.|network.
We won't do the virtual wiping first.|We won't do the virtual wiping first.
We'll first configure it like any other router with normal gateways.|We'll first configure it like any other router with normal gateways.
We'll do this one as 1.254.|We'll do this one as 1.254.
This will be 1.253.|This will be 1.253.
Five and six.|Five and six.
Nine and ten.|Nine and ten.
This will be 1.254 right there, for that web server.|This will be 1.254 right there, for that web server.
All right.|All right.
And here in the PC, we have the 1.1, and we already have the gateway as 1.254.|And here in the PC, we have the 1.1, and we already have the gateway as 1.254.
Just so you can understand what's going on, or what, you know, the advantages of using these redundancy protocols.|Just so you can understand what's going on, or what, you know, the advantages of using these redundancy protocols.
So let's go to this router, and we'll just stick to the name that's there, R0.|So let's go to this router, and we'll just stick to the name that's there, R0.
Just so, you know, not to change anything or confuse anyone.|Just so, you know, not to change anything or confuse anyone.
Bring this down right there.|Bring this down right there.
See that.|See that.
Say no, all right, enable, config T, host name.|Say no, all right, enable, config T, host name.
Host name, R0, I'm gonna use capital.|Host name, R0, I'm gonna use capital.
R0 [COUGH] interface, f zero slash zero,|R0 [COUGH] interface, f zero slash zero,
Enter.|Enter.
IP address, [NOISE] 192.168.|IP address, [NOISE] 192.168.
[NOISE] What is it, is it 100 or 1?|[NOISE] What is it, is it 100 or 1?
[INAUDIBLE] remembering.|[INAUDIBLE] remembering.
Okay, it's one.|Okay, it's one.
Okay.|Okay.
[BLANK_AUDIO]|[BLANK_AUDIO]
1.254, 255.255.255.0,|1.254, 255.255.255.0,
and then we just do a no shut on that.|and then we just do a no shut on that.
I know the one is 10.1.1.5 for the add zero one I believe.|I know the one is 10.1.1.5 for the add zero one I believe.
Yup.|Yup.
So INT F0/1.|So INT F0/1.
IP address 10.1.1.5 255.255.255.252.|IP address 10.1.1.5 255.255.255.252.
No shut.|No shut.
No need to worry about clock rates here.|No need to worry about clock rates here.
We're using fast ethernet, so no need for clock rates.|We're using fast ethernet, so no need for clock rates.
Do WR.|Do WR.
Ctrl+Z.|Ctrl+Z.
Let's just take a look at a summary real quick.|Let's just take a look at a summary real quick.
All right.|All right.
One, obviously, one's gonna be up and down,|One, obviously, one's gonna be up and down,
because the other one is not, you know,|because the other one is not, you know,
its neighbor is not configured.|its neighbor is not configured.
So, 0.0.0.1.254, up up, that's our gateway to the pc.|So, 0.0.0.1.254, up up, that's our gateway to the pc.
And then F0/1 get.|And then F0/1 get.
All right so that one is good to go.|All right so that one is good to go.
With its its IPs.|With its its IPs.
All right, let's bring this out here,|All right, let's bring this out here,
bring this a little further down.|bring this a little further down.
All right, we're going to say no at this point.|All right, we're going to say no at this point.
Enable config T host name.|Enable config T host name.
Where am I?|Where am I?
Did I choose it?|Did I choose it?
Okay.|Okay.
There's router one, R1.|There's router one, R1.
Okay, and then interface.|Okay, and then interface.
I'm pretty sure it's F0/0, but I'm just gonna make sure.|I'm pretty sure it's F0/0, but I'm just gonna make sure.
Yep, F0/0.|Yep, F0/0.
I don't know what's wrong with my brain today.|I don't know what's wrong with my brain today.
IP address 192.168.1.253|IP address 192.168.1.253
255.255.255.0 okay and then we do a no shut then we go into the int F zero one and I'll be nine.|255.255.255.0 okay and then we do a no shut then we go into the int F zero one and I'll be nine.
IP address.|IP address.
Oh, not too many of these.|Oh, not too many of these.
10.1.1.9.|10.1.1.9.
255.2555.255.252.|255.2555.255.252.
No shut.|No shut.
EWR Ctrl+Shift+6 if I finger with the keyboard.|EWR Ctrl+Shift+6 if I finger with the keyboard.
EWR, you show IP Int Brief.|EWR, you show IP Int Brief.
All right so obviously, again, we see that it's up, up.|All right so obviously, again, we see that it's up, up.
Up down because again, the neighbor upstairs, not configured it.|Up down because again, the neighbor upstairs, not configured it.
So let's go ahead and do so.|So let's go ahead and do so.
So there's gonna be 10.1.1.6, 10.1.1.8,|So there's gonna be 10.1.1.6, 10.1.1.8,
and this will be 1.1.1.1.|and this will be 1.1.1.1.
284.|284.
[BLANK_AUDIO]|[BLANK_AUDIO]
We'll go right into that.|We'll go right into that.
[BLANK_AUDIO]|[BLANK_AUDIO]
Just maximize this [UNKNOWN] adjusting it.|Just maximize this [UNKNOWN] adjusting it.
Enable [UNKNOWN] brief, doing this just look at the interfaces it's really a, I have so many interfaces.|Enable [UNKNOWN] brief, doing this just look at the interfaces it's really a, I have so many interfaces.
[COUGH] Wow [UNKNOWN] F00,|[COUGH] Wow [UNKNOWN] F00,
F01, F01, okay.|F01, F01, okay.
F00.|F00.
[BLANK_AUDIO]|[BLANK_AUDIO]
Config T interface F0/0 IP address 10.1.1.6 255,|Config T interface F0/0 IP address 10.1.1.6 255,
255, 255, 252.|255, 255, 252.
Shut it.|Shut it.
Up arrow.|Up arrow.
And we'll leave this at zero.|And we'll leave this at zero.
Zero one over here, okay, zero one.|Zero one over here, okay, zero one.
IP address, 101110.|IP address, 101110.
Now shut.|Now shut.
Okay.|Okay.
And then we have the, I think this is an E, E00.|And then we have the, I think this is an E, E00.
E000, wow.|E000, wow.
Int E0/0/0.|Int E0/0/0.
Ethernet.|Ethernet.
IP address 1.1.1.254,|IP address 1.1.1.254,
255.255.255.0.|255.255.255.0.
No shuts.|No shuts.
[BLANK_AUDIO]|[BLANK_AUDIO]
We do R, Ctrl+V.|We do R, Ctrl+V.
Let's make sure everything's up.|Let's make sure everything's up.
Show IP in brief.|Show IP in brief.
[BLANK_AUDIO]|[BLANK_AUDIO]
And [NOISE].|And [NOISE].
We got up all the way across.|We got up all the way across.
Let's see if we can ping our neighbors.|Let's see if we can ping our neighbors.
[BLANK_AUDIO]|[BLANK_AUDIO]
Ping, 1001.5, no, that's [UNKNOWN] 15.|Ping, 1001.5, no, that's [UNKNOWN] 15.
[BLANK_AUDIO]|[BLANK_AUDIO]
[SOUND].|[SOUND].
Okay.|Okay.
And then nine.|And then nine.
[BLANK_AUDIO]|[BLANK_AUDIO]
Once you get that [UNKNOWN] it's fast Ethernet, okay?|Once you get that [UNKNOWN] it's fast Ethernet, okay?
And then we wanna ping, or hopefully the server has an IP address.|And then we wanna ping, or hopefully the server has an IP address.
[BLANK_AUDIO]|[BLANK_AUDIO]
And it does.|And it does.
So we have connectivity to our routers.|So we have connectivity to our routers.
Obviously, we'll have connectivity to our gateway.|Obviously, we'll have connectivity to our gateway.
All right, so let's ping from the computer.|All right, so let's ping from the computer.
Wow.|Wow.
That's a big black screen.|That's a big black screen.
Put it right here.|Put it right here.
There we go.|There we go.
You can see that right there.|You can see that right there.
Ping 192.168.1.254.|Ping 192.168.1.254.
That's my gateway 253, that's the other guy.|That's my gateway 253, that's the other guy.
All right, but obviously we can't get to the server.|All right, but obviously we can't get to the server.
[BLANK_AUDIO]|[BLANK_AUDIO]
1.1.1.1.|1.1.1.1.
Destination unreachable because we have no routing protocol.|Destination unreachable because we have no routing protocol.
There's no routing in place.|There's no routing in place.
So we go ahead and put some routing, let's just use two, let's use rip real quick.|So we go ahead and put some routing, let's just use two, let's use rip real quick.
No big deal there,|No big deal there,
config T, router rip V2,|config T, router rip V2,
net 192.168.1.0|net 192.168.1.0
net ten triple zero,|net ten triple zero,
remember glass full boundary.|remember glass full boundary.
No auto summary.|No auto summary.
[UNKNOWN].|[UNKNOWN].
All right.|All right.
We'll move on this one.|We'll move on this one.
Same exact thing.|Same exact thing.
All right.|All right.
Config T, router RIP Version R if this one will take that.|Config T, router RIP Version R if this one will take that.
Wow I was trying an abbreviation,|Wow I was trying an abbreviation,
v2 huh, v space 2 okay.|v2 huh, v space 2 okay.
Network ten triple zero, network 119.168.1.0|Network ten triple zero, network 119.168.1.0
No auto summary Do WR and then we'll go ahead and do the stop router it is really easy config T Router RIP.|No auto summary Do WR and then we'll go ahead and do the stop router it is really easy config T Router RIP.
V space two.|V space two.
I like that.|I like that.
You can't do it in [INAUDIBLE], you gotta type out the whole thing.|You can't do it in [INAUDIBLE], you gotta type out the whole thing.
Network ten triple zero.|Network ten triple zero.
Network one triple zero.|Network one triple zero.
Normal summary DWR.|Normal summary DWR.
Control Z.|Control Z.
Let's take a look at the routing tables.|Let's take a look at the routing tables.
Show IP route.|Show IP route.
And now we're getting RIP updates from the, the ten network.|And now we're getting RIP updates from the, the ten network.
All right.|All right.
And the 1.0 network.|And the 1.0 network.
Awesome.|Awesome.
Right?|Right?
So we can see all that.|So we can see all that.
So now, let's just go To the PC again.|So now, let's just go To the PC again.
Let's just try to ping the server one more time.|Let's just try to ping the server one more time.
And now we do get a reply from the web server, so we are routing.|And now we do get a reply from the web server, so we are routing.
But here comes the problem, here's where the redundancy protocols come into play.|But here comes the problem, here's where the redundancy protocols come into play.
Yes, we have two connections.|Yes, we have two connections.
Right?|Right?
A little redundancy going on there.|A little redundancy going on there.
As we move this all the way over here.|As we move this all the way over here.
We haven't configured any redundancy,|We haven't configured any redundancy,
well, physically,|well, physically,
we should have redundancy.|we should have redundancy.
You know we're pinging this web server, so I'm just gonna put this right here.|You know we're pinging this web server, so I'm just gonna put this right here.
No, that's too far away from you guys.|No, that's too far away from you guys.
You guys can't see.|You guys can't see.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right, so I'm gonna put it right there [BLANK_AUDIO]|All right, so I'm gonna put it right there [BLANK_AUDIO]
All right.|All right.
And we'll do a ping, minus T.|And we'll do a ping, minus T.
1.1.1.1.|1.1.1.1.
And that's if, for those of you that don't know, that's just a never ending ping.|And that's if, for those of you that don't know, that's just a never ending ping.
As the switches give them, you can tell them which size of packet you wanna send.|As the switches give them, you can tell them which size of packet you wanna send.
But this actually is just pinging the web server over and over and over again.|But this actually is just pinging the web server over and over and over again.
We're doing like a little DOS attack.|We're doing like a little DOS attack.
A very small DOS attack.|A very small DOS attack.
But anyway, we're sending a constant ping.|But anyway, we're sending a constant ping.
All right?|All right?
So we do have connectivity.|So we do have connectivity.
Now, what would happen if I go inside here and, you know,|Now, what would happen if I go inside here and, you know,
for whatever reason, the interface [UNKNOWN]|for whatever reason, the interface [UNKNOWN]
zero slash, slash zero.|zero slash, slash zero.
Somebody just said, shut.|Somebody just said, shut.
[BLANK_AUDIO]|[BLANK_AUDIO]
So somebody shut down that interface.|So somebody shut down that interface.
So what's gonna happen to the connectivity?|So what's gonna happen to the connectivity?
Well I can't reach it, it's request time out.|Well I can't reach it, it's request time out.
[BLANK_AUDIO]|[BLANK_AUDIO]
So now, hey.|So now, hey.
How do we fix that problem?|How do we fix that problem?
Call somebody?|Call somebody?
Hey, change the gateway on the computer.|Hey, change the gateway on the computer.
So we can go ahead and get connectivity again.|So we can go ahead and get connectivity again.
Yeah, but there's nobody there.|Yeah, but there's nobody there.
I think the guy is out to lunch.|I think the guy is out to lunch.
Okay, let me drive over there.|Okay, let me drive over there.
I'm only 20 minutes away.|I'm only 20 minutes away.
So you drive over there and you go on to the computer, you change the gateway.|So you drive over there and you go on to the computer, you change the gateway.
That's not very feasible.|That's not very feasible.
That's not very feasible.|That's not very feasible.
Okay?|Okay?
So definitely, this is not the way you wanna do it.|So definitely, this is not the way you wanna do it.
You wanna have redundancy protocols, so that way it can go back and forth.|You wanna have redundancy protocols, so that way it can go back and forth.
So let's go ahead and turn that interface back on.|So let's go ahead and turn that interface back on.
No shut.|No shut.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right.|All right.
And it's gonna take a while looking as you can see STP is doing its thing.|And it's gonna take a while looking as you can see STP is doing its thing.
Right there, STP is doing its thing, so we gotta wait for STP, huh?|Right there, STP is doing its thing, so we gotta wait for STP, huh?
That's why a Rapid Spanning Tree and the types of spanning tree that you're gonna be using, so the convergence can be a lot|That's why a Rapid Spanning Tree and the types of spanning tree that you're gonna be using, so the convergence can be a lot
quicker than what it originally is.|quicker than what it originally is.
Obviously, there's the packet tracer.|Obviously, there's the packet tracer.
It's not that packet tracers are similar nonetheless, but, I mean, it's good.|It's not that packet tracers are similar nonetheless, but, I mean, it's good.
It's a good simulator because it's based specifically for the CCNA, and like,|It's a good simulator because it's based specifically for the CCNA, and like,
like I've been telling you throughout the whole course, this is geared to the CCNA.|like I've been telling you throughout the whole course, this is geared to the CCNA.
Will you be doing this in the real world?|Will you be doing this in the real world?
Of course.|Of course.
You know, putting in IP addresses,|You know, putting in IP addresses,
configuring routing protocols, same thing,|configuring routing protocols, same thing,
same thing.|same thing.
All right.|All right.
But gear to the CCNA.|But gear to the CCNA.
All right, so we're back in business,|All right, so we're back in business,
we're back in business, great.|we're back in business, great.
So we do have connectivity to our, to our web server.|So we do have connectivity to our, to our web server.
But we want redundancy and redundancy is needed.|But we want redundancy and redundancy is needed.
So what we're gonna do is, we're gonna configure this router right here as our active router with HSRP and this will be our stand by.|So what we're gonna do is, we're gonna configure this router right here as our active router with HSRP and this will be our stand by.
This one is going here.|This one is going here.
Now if you do this, you do it inside the interface and it's not gonna say HSRP.|Now if you do this, you do it inside the interface and it's not gonna say HSRP.
They put a question mark, you see where it says standby.|They put a question mark, you see where it says standby.
HSRP interface configuration command.|HSRP interface configuration command.
So that's what you need to do.|So that's what you need to do.
You're not gonna see something that says standby.|You're not gonna see something that says standby.
I mean you're not gonna see something that says HSRP.|I mean you're not gonna see something that says HSRP.
VRP, yes, GLVP, yes, but we don't have that in the packet tracer, so sorry.|VRP, yes, GLVP, yes, but we don't have that in the packet tracer, so sorry.
But I'll show you the configs.|But I'll show you the configs.
So standby and what do you put next?|So standby and what do you put next?
Well, you're gonna put a group number.|Well, you're gonna put a group number.
That's the first thing you wanna do.|That's the first thing you wanna do.
And you can see the group numbers are there, from 0 to 4095.|And you can see the group numbers are there, from 0 to 4095.
So okay, so what group number are we gonna use?|So okay, so what group number are we gonna use?
Let's just use one.|Let's just use one.
All right so after, now what do you put,|All right so after, now what do you put,
want me to put an IP.|want me to put an IP.
Okay so what's the IP?|Okay so what's the IP?
192.168.1.100 that is the standby IP.|192.168.1.100 that is the standby IP.
We just created this virtual IP address.|We just created this virtual IP address.
Now the priority number, who's gonna be active and who's not gonna be active, right, who's gonna be standby.|Now the priority number, who's gonna be active and who's not gonna be active, right, who's gonna be standby.
By default the priority number is 100.|By default the priority number is 100.
But, I'm gonna make this bigger, I'm gonna make the priority number.|But, I'm gonna make this bigger, I'm gonna make the priority number.
Here let's look at the range, is 1 through 16.|Here let's look at the range, is 1 through 16.
So what we're gonna do is I'm gonna just make it really interesting what we're do with priority, no really?|So what we're gonna do is I'm gonna just make it really interesting what we're do with priority, no really?
That's very.|That's very.
Oh, [LAUGH].|Oh, [LAUGH].
Standby, sorry.|Standby, sorry.
Standby 1 priority.|Standby 1 priority.
I knew there was something.|I knew there was something.
Wait, what?|Wait, what?
What's.|What's.
Whoops.|Whoops.
What's going on here, laugh.|What's going on here, laugh.
That's incorrect.|That's incorrect.
There we go, 0255.|There we go, 0255.
[SOUND] All right, that was like, that was kind of weird, okay.|[SOUND] All right, that was like, that was kind of weird, okay.
150, we're gonna change the actual priority of the interface and I hope I didn't.|150, we're gonna change the actual priority of the interface and I hope I didn't.
No because it gave me an error so that's good.|No because it gave me an error so that's good.
All right so, standby 1, priority 150.|All right so, standby 1, priority 150.
So I'm just gonna leave it at that.|So I'm just gonna leave it at that.
And then we'll do a Ctrl+Z after I copy it and I'm gonna do a Schule standby.|And then we'll do a Ctrl+Z after I copy it and I'm gonna do a Schule standby.
That's the only command you're gonna do.|That's the only command you're gonna do.
That way you're not gonna do it, but you need to know.|That way you're not gonna do it, but you need to know.
All right.|All right.
And, this shows you, hey,|And, this shows you, hey,
this state is active.|this state is active.
All right.|All right.
Your virtual IP is 192.100.1.100.|Your virtual IP is 192.100.1.100.
Your virtual MAC address, which it created, you see it's not that 7f or that 7c, right, it's 9f.|Your virtual MAC address, which it created, you see it's not that 7f or that 7c, right, it's 9f.
All right, so not a big deal,|All right, so not a big deal,
[INAUDIBLE] when you go take your test it'll probably be 7c.|[INAUDIBLE] when you go take your test it'll probably be 7c.
But again this is the Cisco vendor ID, all right.|But again this is the Cisco vendor ID, all right.
These next four okay, or yeah, 16,|These next four okay, or yeah, 16,
all right, these next 16 is specifically for hey that's HSRP.|all right, these next 16 is specifically for hey that's HSRP.
And then group number one, which is,|And then group number one, which is,
that's what I created.|that's what I created.
Here it is right here, group number one.|Here it is right here, group number one.
That's how they break down the Mac address, alright so that is your virtual Mac address.|That's how they break down the Mac address, alright so that is your virtual Mac address.
You see your hello time it's set to three seconds right here, right three seconds and then your whole time ten seconds the|You see your hello time it's set to three seconds right here, right three seconds and then your whole time ten seconds the
next hello will be sent in 1.995 seconds.|next hello will be sent in 1.995 seconds.
All right?|All right?
We'll talk about preemption in a little bit.|We'll talk about preemption in a little bit.
The active router is the local router, the standby router is unknown cuz we haven't configured it yet, we haven't configured it yet.|The active router is the local router, the standby router is unknown cuz we haven't configured it yet, we haven't configured it yet.
The priority for this particular group is 150, all right.|The priority for this particular group is 150, all right.
So this is why this is the active router.|So this is why this is the active router.
So now we can configure the standby router which is going to be this guy right here.|So now we can configure the standby router which is going to be this guy right here.
So, we're gonna actually type out the priority number of 100 or 110, let's just type 110.|So, we're gonna actually type out the priority number of 100 or 110, let's just type 110.
You can leave that the default, you really don't have to type it.|You can leave that the default, you really don't have to type it.
You can just leave it at the default.|You can just leave it at the default.
But just so you can see the command, let's just type it in.|But just so you can see the command, let's just type it in.
So let's go inside the interface,|So let's go inside the interface,
interface F0/0 right standby 1 IP 192.16 oops .168.1.100 okay.|interface F0/0 right standby 1 IP 192.16 oops .168.1.100 okay.
And then we're going to do standby 1,|And then we're going to do standby 1,
priority, 110.|priority, 110.
Which is smaller.|Which is smaller.
The WR Ctrl+Z shows standby and then it's going through it and typing faster than the actual router can.|The WR Ctrl+Z shows standby and then it's going through it and typing faster than the actual router can.
Keep obviously I just changed it right there to standby right here all right.|Keep obviously I just changed it right there to standby right here all right.
So let's type in again so we can go ahead and see it alright so the state is standby this is a standby router this is the virtual|So let's type in again so we can go ahead and see it alright so the state is standby this is a standby router this is the virtual
IP address the active virtual Mac address is still unknown hasn't Yet,|IP address the active virtual Mac address is still unknown hasn't Yet,
you know, talking back and forth to recognize it, it will after a little bit.|you know, talking back and forth to recognize it, it will after a little bit.
And then, it's telling you a local virtual Mac address, there it is right there.|And then, it's telling you a local virtual Mac address, there it is right there.
And, then the next hello will be sent in 2.35 seconds.|And, then the next hello will be sent in 2.35 seconds.
We're going faster than the router can think, so, hey.|We're going faster than the router can think, so, hey.
All right, so all of this information will be filled out eventually.|Хорошо, так что вся эта информация со временем будет заполнена.
All right, so, now, let's see what happens.|Хорошо, теперь давайте посмотрим, что произойдет.
All right, now let's first see if we can ping this wall.|Хорошо, теперь давайте сначала посмотрим, сможем ли мы пропинговать эту стену.
First of all, I haven't changed the IP address of the client yet.|Во-первых, я еще не изменил IP-адрес клиента.
So, let's see if I can ping.|Итак, посмотрим, смогу ли я пинговать.
I still have connectivity.|У меня все еще есть связь.
Look at that.|Посмотри на это.
All right, cuz I am so going through there.|Хорошо, потому что я так переживаю.
But let's see if we can ping that that 1.100.|Но давайте посмотрим, сможем ли мы пинговать, что 1.100.
I sure can.|Я точно могу.
I sure can.|Я точно могу.
All right, so it exists.|Хорошо, так оно и есть.
It exists in there, so we can go ahead and use this.|Он существует там, поэтому мы можем использовать его.
So, we're gonna change, we have to tweak our client, and we're gonna,|Итак, мы собираемся измениться, нам нужно настроить нашего клиента, и мы собираемся,
instead of having the physical IP address,|вместо физического IP-адреса,
we're gonna give it this virtual,|мы дадим ему это виртуальное,
this ghost IP address, all right, as the gateway.|этот призрачный IP-адрес, ладно, как шлюз.
Now what I like to do it is.|Сейчас мне нравится это делать.
Because if I were to ping again, I still won't get connectivity.|Потому что, если я снова запингуюсь, у меня все равно не будет подключения.
Well how do we really know that's the way we're going?|Хорошо, как мы действительно знаем, что мы идем по этому пути?
The easiest test to do, instead of going to simulation mode or anything like that.|Самый простой тест, вместо того, чтобы переходить в режим моделирования или что-то в этом роде.
I'm gonna go ahead and configure my telnet lines real quick.|Я собираюсь очень быстро настроить свои линии Telnet.
Line bty, zero space 15.|Строка bty, нулевой пробел 15.
Password Cisco.|Пароль Cisco.
Login.|Авторизоваться.
And I just put some enable password just to have it on there.|И я просто поставил пароль для включения, чтобы он был там.
ENABLE PASSWORD CISCO and yes, and that's it.|ВКЛЮЧИТЬ ПАРОЛЬ CISCO и да, вот и все.
Ctrl+Z.|Ctrl + Z.
And let's do the same thing on the other one.|И давайте сделаем то же самое с другим.
Config T, LINE V LINE VTY 0.15.|Конфиг T, LINE V LINE VTY 0.15.
Password.|Пароль.
So let's go, login,|Итак, пойдем, авторизуемся,
enable password, Cisco.|включить пароль, Cisco.
You [UNKNOWN], all right.|Вы [НЕИЗВЕСТНО], хорошо.
So what we're gonna do is, I'm actually gonna TelNet to that virtual IP address.|Итак, что мы собираемся сделать, я собираюсь использовать TelNet на этот виртуальный IP-адрес.
And I'm gonna see which router I end up in.|И я посмотрю, в какой роутер я попаду.
Remember, this is router zero and this is router one on this side.|Помните, что это нулевой маршрутизатор, а это первый маршрутизатор с этой стороны.
So the active router is r0.|Итак, активный маршрутизатор - r0.
So let's go ahead and TELNET-|Итак, давайте продолжим и TELNET-
[BLANK_AUDIO]|[BLANK_AUDIO]
To 192.168.1.100.|Кому 192.168.1.100.
That is the virtual IP address, Cisco.|Это виртуальный IP-адрес Cisco.
[BLANK_AUDIO]|[BLANK_AUDIO]
I'm a router 0.|Я роутер 0.
This is where we're headed to.|Вот куда мы направляемся.
This is where we're going.|Вот куда мы идем.
Okay?|Ладно?
So that's the direction the packets are flowing.|Вот в каком направлении текут пакеты.
So now we know.|Итак, теперь мы знаем.
We've verified, hey, I'm actually going that way.|Мы проверили, эй, я действительно иду туда.
Cuz I'm, the virtual IP address is on both routers.|Потому что виртуальный IP-адрес есть на обоих маршрутизаторах.
But since router zero has a higher priority number, became the active router.|Но поскольку нулевой маршрутизатор имеет более высокий приоритет, он стал активным маршрутизатором.
So packets are flowing that way.|Так что пакеты текут именно так.
So let's go ahead.|Так что вперед.
Raise exit out of here.|Поднимите выход отсюда.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right.|Отлично.
Back at the PC.|Вернемся к ПК.
Let's do our PING minus T.|Давайте сделаем наш PING минус T.
[BLANK_AUDIO]|[BLANK_AUDIO]
Okay?|Ладно?
And it's enough space right there.|И места там достаточно.
So you can see what's going on, cuz after I ping here.|Так что вы можете видеть, что происходит, после того, как я пингую здесь.
You have a couple of pings.|У вас есть пара пингов.
I'm going to shut down that interface again and let's see how long it takes it to throw over.|Я собираюсь снова закрыть этот интерфейс и посмотрим, сколько времени потребуется, чтобы его сбросить.
Remember, every three seconds says, hey,|Помните, каждые три секунды говорит, эй,
everything is still good.|все еще хорошо.
Hey, everything's still good.|Эй, все еще хорошо.
[BLANK_AUDIO]|[BLANK_AUDIO]
Wait a minute, ten seconds.|Подожди минутку, десять секунд.
Oh!|Ой!
Something happened.|Что-то произошло.
Quick!|Быстрый!
Switch it over.|Переключите это.
So let's see how long it takes.|Итак, посмотрим, сколько времени это займет.
So lets start the pinging.|Итак, приступим к пингу.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right, the never ending ping.|Ладно, бесконечный пинг.
The ping minus t.|Пинг минус т. Д.
And now we're gonna go ahead, and I'm going to do it quickly,|И теперь мы пойдем вперед, и я сделаю это быстро,
enter, or I thought quicker, enter interface add 0,|введите, или я подумал быстрее, введите интерфейс добавить 0,
slash 0, shut, and let's go here.|косая черта 0, закройте и пойдем сюда.
Boom.|Бум.
And whoa, we lost connectivity.|И эй, мы потеряли связь.
We saw that.|Мы это видели.
Boom, request time out.|Бум, тайм-аут запроса.
Oh my god, what's happening?|Боже мой, что происходит?
All right?|Отлично?
The client's like, hey,|Клиент любит, эй,
I can't get to my email server, oh I can't send.|Я не могу попасть на свой почтовый сервер, о, я не могу отправить.
Oh, I'm back up again, never mind.|О, я снова вернулся, неважно.
It automatically switched over to the other router.|Он автоматически переключился на другой маршрутизатор.
That is cool.|Это круто.
You don't have to worry about it.|Вам не о чем беспокоиться.
And that's what HSRP is there for.|И для этого существует HSRP.
Obviously, you will, do have to worry about it.|Очевидно, вам придется об этом беспокоиться.
You will have third party monitoring software,|У вас будет стороннее программное обеспечение для мониторинга,
which we'll talk about in the next session, all right?|о чем мы поговорим на следующем занятии, хорошо?
That will alert you to like hey, on this router, this interface went down.|Это предупредит вас, что на этом маршрутизаторе этот интерфейс вышел из строя.
Traffic is now flowing this way.|Трафик сейчас идет по этой дороге.
So, you know, you'll see it pop up on the screen, or you'll get a beep, or you'll get a phone call, text, whatever the case may be, smoke signals.|Итак, вы знаете, вы увидите, как это всплывает на экране, или вы услышите звуковой сигнал, или вы получите телефонный звонок, текстовое сообщение, в любом случае, дымовые сигналы.
Something to let you know that, hey that router just went down,|Что-то, чтобы вы знали об этом, эй, этот маршрутизатор только что вышел из строя,
or that interface just went down, but packets are now flowing the other way, so you're gonna start investigating, saying hey, what's going on?|или этот интерфейс только что вышел из строя, но пакеты теперь идут в обратном направлении, так что вы собираетесь начать расследование, говоря: эй, что происходит?
But at least you still have connectivity.|Но, по крайней мере, у вас все еще есть возможность подключения.
People are gonna still route traffic through, to the destination.|Люди по-прежнему будут направлять трафик к месту назначения.
All right?|Отлично?
So let's take a look and see what happens over here.|Итак, давайте посмотрим, что здесь происходит.
Let's take a look at the, look, it says it changed the state.|Давайте посмотрим, посмотрим, там написано, что изменилось состояние.
Over here, and let's take a look at it.|Вот сюда, и давайте взглянем на это.
Let's go to privilege mode and do a show stand by.|Давайте перейдем в привилегированный режим и сделаем шоу в режиме ожидания.
And it says, is, state is initialization,|И он говорит, что состояние - это инициализация,
the virtual IP address is such.|виртуальный IP-адрес такой.
The active router is unknown, I guess we're, we're too quick for it.|Активный маршрутизатор неизвестен, я думаю, мы слишком быстрые для этого.
What it should say is that this is the standby router [LAUGH] and then the other one is the active router.|Он должен сказать, что это резервный маршрутизатор [СМЕЕТСЯ], а второй - активный маршрутизатор.
Let's take a look at the other one,|Давайте посмотрим на другой,
I guess the packet traders are just working too slow for us.|Я полагаю, что пакетные трейдеры работают для нас слишком медленно.
[BLANK_AUDIO]|[BLANK_AUDIO]
CSS standby just changed to active.|Режим ожидания CSS просто изменен на активный.
Let's do control Z, show standby, and the state is active.|Сделаем управление Z, покажем режим ожидания и состояние активно.
This state is active.|Это состояние активно.
So now package are flowing through this router,|Итак, теперь пакеты проходят через этот маршрутизатор,
even thought it has that lower priority,|даже подумал, что у него более низкий приоритет,
but the other one is down.|но другой не работает.
So it's gotta go through this one.|Так что надо пройти через это.
Let's take, let's prove that.|Давайте, давайте это докажем.
Let's prove that by using our Telnet.|Давайте докажем это с помощью нашего Telnet.
All right, let's stop this ping real quick.|Хорошо, давайте поскорее остановим этот пинг.
[BLANK_AUDIO]|[BLANK_AUDIO]
>> And let's do that Telnet to the virtual, the virtual IP address.|>> И давайте сделаем Telnet виртуальным, виртуальным IP-адресом.
Hit Enter.|Нажмите Enter.
[BLANK_AUDIO]|[BLANK_AUDIO]
Now we're inside a router, which router are we in?|Теперь мы внутри маршрутизатора, в каком мы находимся?
[BLANK_AUDIO]|[BLANK_AUDIO]
We're inside router one.|Мы внутри первого роутера.
It switched over to the other router.|Он переключился на другой маршрутизатор.
This is so cool.|Это так круто.
And HSRP is used in today's environment.|И HSRP используется в сегодняшней среде.
And really, that's all you really, you know need to be aware of.|И действительно, это все, о чем вы действительно знаете, что вам нужно знать.
There's other things.|Есть еще кое-что.
Not to be aware of, but really need to concentrate on.|Не осознавать, но на самом деле нужно сосредоточиться.
Just that right there.|Просто прямо здесь.
Just doing that right there is good enough.|Достаточно просто сделать это прямо сейчас.
Or, well,|Или ну
I don't wanna say that because what happens if your WLAN goes down, right?|Я не хочу этого говорить, потому что что произойдет, если ваша WLAN выйдет из строя, верно?
So let's talk about that and also.|Так что давайте поговорим об этом и тоже.
So there's other commands, as you can see here, just for the basic configuration of HSRP, just by putting the virtual IP address,|Итак, есть и другие команды, как вы можете видеть здесь, только для базовой конфигурации HSRP, просто помещая виртуальный IP-адрес,
putting you know, giving a group virtual IP address and then actually giving a priority number, so one can be active, one can be standby, and|сообщая вам, давая групповой виртуальный IP-адрес, а затем фактически давая номер приоритета, чтобы один мог быть активным, другой мог быть резервным и
boom, it's up and running, it's working,|бум, он работает, он работает,
no big, no biggie.|не большой, не большой.
Now, can you tweak that?|Теперь вы можете это настроить?
Can you tweak that?|Вы можете это настроить?
Of course.|Конечно.
But what's gonna happen if I go back and turn on?|Но что произойдет, если я вернусь и включу?
I'd fix the issue.|Я бы исправил проблему.
And I'd go inside, config t,|И я бы пошел внутрь, конфиг т,
Interface F 0/0, and do a no shut.|Интерфейс F 0/0 и ничего не закрыл.
It was a mistake.|Это была ошибка.
Somebody went in there for what ever reason and they decided to do a no shut.|Кто-то вошел туда по какой-либо причине, и они решили не закрывать глаза.
And let's see whats gonna happen.|И посмотрим, что произойдет.
Let's take a look, let's standby here.|Давайте посмотрим, давайте здесь подождем.
See if things are going to change, the states change.|Посмотрите, не изменится ли что-то, состояние изменится.
Oh, so you can see that that's gonna take a while.|Oh, so you can see that that's gonna take a while.
[BLANK_AUDIO]|[BLANK_AUDIO]
And let's do that ping.|And let's do that ping.
[BLANK_AUDIO]|[BLANK_AUDIO]
You see?|You see?
We're, it's thinking about the ping now.|We're, it's thinking about the ping now.
Oh, we're, we're, we're getting there,|Oh, we're, we're, we're getting there,
because it's still, woo,|because it's still, woo,
now we've got a full green light, I guess SCP decided.|now we've got a full green light, I guess SCP decided.
Everything is good to go.|Everything is good to go.
We're in and out, in and out, in and out.|We're in and out, in and out, in and out.
Takes a little bit, I mean, oh, there we go.|Takes a little bit, I mean, oh, there we go.
We're once again, back in, back in action,|We're once again, back in, back in action,
and we take a look at our router, it says [UNKNOWN] says standby.|and we take a look at our router, it says [UNKNOWN] says standby.
Really?|Really?
Let's take a look at it.|Let's take a look at it.
Show a standby.|Show a standby.
[BLANK_AUDIO]|[BLANK_AUDIO]
It says state is standby.|It says state is standby.
Oh, [INAUDIBLE] is going crazy.|Oh, [INAUDIBLE] is going crazy.
It should say active, obviously.|It should say active, obviously.
It might take a while for it to do, but let's find out.|It might take a while for it to do, but let's find out.
Let's see if it's actually going to be Standby or active.|Let's see if it's actually going to be Standby or active.
What's going on there?|What's going on there?
The other one says active, this one says standby, we're going crazy today.|The other one says active, this one says standby, we're going crazy today.
And let's see, let's telnet.|And let's see, let's telnet.
Whoa.|Whoa.
Let's telnet, Ctrl+C, let's telnet to the virtual IP,|Let's telnet, Ctrl+C, let's telnet to the virtual IP,
C-I-S-C-O, and we're still going to router one.|C-I-S-C-O, and we're still going to router one.
Why is that?|Why is that?
Because, there's a command called preempt.|Because, there's a command called preempt.
And I'll show it to you.|And I'll show it to you.
[BLANK_AUDIO]|[BLANK_AUDIO]
Oh, config T.|Oh, config T.
[BLANK_AUDIO]|[BLANK_AUDIO]
Standby.|Standby.
One.|One.
[BLANK_AUDIO]|[BLANK_AUDIO]
My typing skills.|My typing skills.
[BLANK_AUDIO]|[BLANK_AUDIO]
Oh, sorry.|Oh, sorry.
[BLANK_AUDIO]|[BLANK_AUDIO]
Inside the interface there lies, inside the interface, add 0, slide 0.|Inside the interface there lies, inside the interface, add 0, slide 0.
Standby.|Standby.
[BLANK_AUDIO]|[BLANK_AUDIO]
One.|One.
All right preempt.|All right preempt.
Look where it says, overthrow lower priority.|Look where it says, overthrow lower priority.
Active routers.|Active routers.
So, that was acting as the active router,|So, that was acting as the active router,
but see I didn't put in preempts saying,|but see I didn't put in preempts saying,
hey, when I come back, you give me back my spot.|hey, when I come back, you give me back my spot.
That's what that means.|That's what that means.
So, let's go ahead and do that.|So, let's go ahead and do that.
STANDBY 1 PREEMPT.|STANDBY 1 PREEMPT.
Boom!|Boom!
Look at that.|Look at that.
[SOUND] I'm active now.|[SOUND] I'm active now.
All right?|All right?
So, it overthrows, all right?|So, it overthrows, all right?
It dominated the other one, it said, I'm active again.|It dominated the other one, it said, I'm active again.
All right?|All right?
That's the whole purpose of the preempt command.|That's the whole purpose of the preempt command.
You WR, Ctrl+Z, show STANDBY, and now, I'm active.|You WR, Ctrl+Z, show STANDBY, and now, I'm active.
Right?|Right?
I have the higher priority.|I have the higher priority.
I should be active.|I should be active.
The other one was still active because I didn't do the preemption command.|The other one was still active because I didn't do the preemption command.
So, preempt is, it's, it's a double-edged sword really, because it is interface that went down, goes down again, then it's|So, preempt is, it's, it's a double-edged sword really, because it is interface that went down, goes down again, then it's
gonna change back to the other one.|gonna change back to the other one.
And then when it comes back up again, then you're gonna go back again over here.|And then when it comes back up again, then you're gonna go back again over here.
So, it could be a back and forth, so it depends on you.|So, it could be a back and forth, so it depends on you.
If you know that,|If you know that,
that's a troublesome, it could be the actual interface of the router.|that's a troublesome, it could be the actual interface of the router.
You know, the [UNKNOWN] speed has messed up, then you need to swap it out, or it could be a bad cable, or whatever the case may be.|You know, the [UNKNOWN] speed has messed up, then you need to swap it out, or it could be a bad cable, or whatever the case may be.
You know, you may not want that to be the active router, so,|You know, you may not want that to be the active router, so,
when choosing the active router, choose appropriately, correctly.|when choosing the active router, choose appropriately, correctly.
Make sure that those interfaces are good to go, and that the cables are good to go.|Make sure that those interfaces are good to go, and that the cables are good to go.
Cuz if it's constantly going up and down,|Cuz if it's constantly going up and down,
it's gonna be an issue regardless.|it's gonna be an issue regardless.
Okay?|Okay?
Now, one of the last commands that I wanna show you, with HSRP, is tracking.|Now, one of the last commands that I wanna show you, with HSRP, is tracking.
Right?|Right?
Because, now, and I, what tracking does,|Because, now, and I, what tracking does,
and let's look at the actually topology,|and let's look at the actually topology,
so you can understand, I'm gonna track these links right here, right?|so you can understand, I'm gonna track these links right here, right?
And, you know, right now, we're going this way, going across.|And, you know, right now, we're going this way, going across.
But if this goes down, then it, if you have the tracking,|But if this goes down, then it, if you have the tracking,
the tracking says, hey, wait a minute.|the tracking says, hey, wait a minute.
This link went down.|This link went down.
We need to decrement the priority number,|We need to decrement the priority number,
and make this one the active router, and send it this way, but unfortunately,|and make this one the active router, and send it this way, but unfortunately,
the programming behind the package tracer we can do the tracking command, but it only decrements by ten.|the programming behind the package tracer we can do the tracking command, but it only decrements by ten.
So, this 150 will always be higher than that one.|So, this 150 will always be higher than that one.
And you'll still see connectivity, that'll be flowing this way, but you'll see that this will remain active because the higher priority,|And you'll still see connectivity, that'll be flowing this way, but you'll see that this will remain active because the higher priority,
and this all will be standby, but packets will be flowing this way.|and this all will be standby, but packets will be flowing this way.
All right?|All right?
Don't let it confuse you.|Don't let it confuse you.
All right, what it, what the tracking is,|All right, what it, what the tracking is,
what it allows you to do,|what it allows you to do,
is actually put in a number, so if this is 150, and this is 110,|is actually put in a number, so if this is 150, and this is 110,
I wanna subtract, I don't know, I wanna subtract a 100 from it.|I wanna subtract, I don't know, I wanna subtract a 100 from it.
All right?|All right?
And then, it, they'll, this area, this goes down, and you're tracking this one up here, also track the 100 from it, and then|And then, it, they'll, this area, this goes down, and you're tracking this one up here, also track the 100 from it, and then
this will become ten.|this will become ten.
So, automatically, boom this is will be an active router, and this be a standby router, and that information will flow that way.|So, automatically, boom this is will be an active router, and this be a standby router, and that information will flow that way.
Unfortunately the package tracer doesn't allow you to put in whatever number you want to subtract.|Unfortunately the package tracer doesn't allow you to put in whatever number you want to subtract.
It subtracts automatically by ten.|It subtracts automatically by ten.
All right so, we're happy.|All right so, we're happy.
So, but it'll still do the correct job.|So, but it'll still do the correct job.
So, let's go ahead, and do the tracking first.|So, let's go ahead, and do the tracking first.
Let's do the tracking.|Let's do the tracking.
So, we're gonna track the [INAUDIBLE]|So, we're gonna track the [INAUDIBLE]
zero, zero.|zero, zero.
We're gonna go config config T interface F0/0 STANDBY 1 TRACKING, and then you put the, okay, standby,|We're gonna go config config T interface F0/0 STANDBY 1 TRACKING, and then you put the, okay, standby,
oh sorry standby its one, it has to be standby one,|oh sorry standby its one, it has to be standby one,
okay, standby, this should be one.|okay, standby, this should be one.
[INAUDIBLE] Okay, STANDBY TRACK F0/1.|[INAUDIBLE] Okay, STANDBY TRACK F0/1.
All right?|All right?
We WR.|We WR.
Let's take a look at the commands,|Let's take a look at the commands,
let's make sure that it's all hunky dory.|let's make sure that it's all hunky dory.
Show standby.|Show standby.
Wow, all right.|Wow, all right.
[SOUND] Here's our priority, expires,|[SOUND] Here's our priority, expires,
where's my tracking?|where's my tracking?
It should be in there somewhere.|It should be in there somewhere.
Your name, priority 150, stand by, active router, preemption is enabled.|Your name, priority 150, stand by, active router, preemption is enabled.
It should show you that it is tracking.|It should show you that it is tracking.
It should have let me do a by a stand by,|It should have let me do a by a stand by,
and the group number, but, okay.|and the group number, but, okay.
Hm.|Hm.
Hm, hm, hm, hm, hm.|Hm, hm, hm, hm, hm.
Okay, all right, so we're tracking that F0/1 interface.|Okay, all right, so we're tracking that F0/1 interface.
All right, let's go to the other routers,|All right, let's go to the other routers,
do the same thing,|do the same thing,
let's try that interface in case it goes out.|let's try that interface in case it goes out.
Config T STANDBY, and it's funny,|Config T STANDBY, and it's funny,
now this one says that,|now this one says that,
cuz this isn't global configuration interface at 0/0 STANDBY TRACK.|cuz this isn't global configuration interface at 0/0 STANDBY TRACK.
Oh, all right, and then you put in the interface that you are tracking F 0/1,|Oh, all right, and then you put in the interface that you are tracking F 0/1,
let me see something before I do that.|let me see something before I do that.
Before, because, now, you see, STANDBY 1,|Before, because, now, you see, STANDBY 1,
the only one's giving an error.|the only one's giving an error.
That's why you can't see it.|That's why you can't see it.
STANDBY 1, TRACK F0/1.|STANDBY 1, TRACK F0/1.
Hello, and there you go.|Hello, and there you go.
[UNKNOWN] Ctrl+Z, show STANBY,|[UNKNOWN] Ctrl+Z, show STANBY,
and there it is right there.|and there it is right there.
Track interface at F 0/1 decrement by ten.|Track interface at F 0/1 decrement by ten.
So, lets go back to router zero, cuz it was acting silly.|So, lets go back to router zero, cuz it was acting silly.
Not doing what it was supposed to do.|Not doing what it was supposed to do.
All right, and lets do that same command again.|All right, and lets do that same command again.
Config T, or maybe it was just me.|Config T, or maybe it was just me.
Config T Interface F0/0 STANDBY 1 TRACK F0/1.|Config T Interface F0/0 STANDBY 1 TRACK F0/1.
And here we are.|And here we are.
Ctrl+Z.|Ctrl+Z.
Show STANBY.|Show STANBY.
All right, and there it is here.|All right, and there it is here.
Now you can actually see it.|Now you can actually see it.
[SOUND] And you can see it only let's you [UNKNOWN].|[SOUND] And you can see it only let's you [UNKNOWN].
You should be able to put an actual number, that you wanna subtract,|You should be able to put an actual number, that you wanna subtract,
from the priority number, if that interface going down.|from the priority number, if that interface going down.
All right, so let's see how this is gonna work.|All right, so let's see how this is gonna work.
So, again, let's exit outta here.|So, again, let's exit outta here.
Okay, and we're going to ping, or ping minus t.|Okay, and we're going to ping, or ping minus t.
All right, to our web server.|All right, to our web server.
Awesome, awesome.|Awesome, awesome.
We're going through that router zero.|We're going through that router zero.
So, now we're going to change, well, we're gonna kill this F/01 right here.|So, now we're going to change, well, we're gonna kill this F/01 right here.
So, Config T INTERFACE F0/1,|So, Config T INTERFACE F0/1,
shut.|shut.
Let's minimize.|Let's minimize.
Get to the PC there it is right here.|Get to the PC there it is right here.
We lost connectivity.|We lost connectivity.
Look at that.|Look at that.
Destination unreachable.|Destination unreachable.
Destination unreachable.|Destination unreachable.
Request timeout.|Request timeout.
It's thinking.|It's thinking.
It's trying to change things over.|It's trying to change things over.
Request timeout.|Request timeout.
Boom!|Boom!
Now we're going again.|Now we're going again.
Now we're going again.|Now we're going again.
All right.|All right.
So, now we should be going the other way.|So, now we should be going the other way.
Now we're going the other way.|Now we're going the other way.
Let's, let's see if that's true.|Let's, let's see if that's true.
Let's tell MET why did I close that.|Let's tell MET why did I close that.
Let's tell MET to the virtual IP, Cisco.|Let's tell MET to the virtual IP, Cisco.
And it says, I'm going to router zero.|And it says, I'm going to router zero.
How in the world is that possible?|How in the world is that possible?
Cuz this is what it's doing.|Cuz this is what it's doing.
What's happening is, it's going up this way, then finding that it can't go that way, then it comes back down, and it goes|What's happening is, it's going up this way, then finding that it can't go that way, then it comes back down, and it goes
this way.|this way.
And I can show you that in simulation mode.|And I can show you that in simulation mode.
In simulation mode.|In simulation mode.
So, let me show you, gonna click here.|So, let me show you, gonna click here.
PC zero, to destination.|PC zero, to destination.
Auto capture and play.|Auto capture and play.
Let's sit back and watch the movie.|Let's sit back and watch the movie.
Here comes this ping.|Here comes this ping.
This ICMP packet right?|This ICMP packet right?
Goes out both interfaces.|Goes out both interfaces.
Floods that out, right.|Floods that out, right.
Boom boom boom.|Boom boom boom.
You've got an X over here.|You've got an X over here.
Oh well, okay, got an X over here because that's the active router, and then it came back down.|Oh well, okay, got an X over here because that's the active router, and then it came back down.
And then it sends it the right way,|And then it sends it the right way,
because it says hey you can't go through there.|because it says hey you can't go through there.
Can't get to that destination that way, go up and then come to the actual server.|Can't get to that destination that way, go up and then come to the actual server.
So you can see that that's the way the packet is going.|So you can see that that's the way the packet is going.
Alright.|Alright.
So in the fire trace it is a little bit funky in the way that it works but you get to understand what's going on alright you understand what's going on.|So in the fire trace it is a little bit funky in the way that it works but you get to understand what's going on alright you understand what's going on.
When you're tracking this interface okay,|When you're tracking this interface okay,
your suppose to be able to bring back or bring down the priority number to something lower.|your suppose to be able to bring back or bring down the priority number to something lower.
Than this one, but we can't.|Than this one, but we can't.
This, this priority number and that priority is 140, alright?|This, this priority number and that priority is 140, alright?
This is 110.|This is 110.
So this is still the active router.|So this is still the active router.
So that's why it still wants to go that way.|So that's why it still wants to go that way.
But then when it sees that it can go that way, it brings it back down, and then comes this way.|But then when it sees that it can go that way, it brings it back down, and then comes this way.
So even though, it's not working like we want it to work well, we can subtract it,|So even though, it's not working like we want it to work well, we can subtract it,
make this a standby and it's inactive, is to say, hey, listen, that's down.|make this a standby and it's inactive, is to say, hey, listen, that's down.
I can't send you that way, so let me send you over to the next router.|I can't send you that way, so let me send you over to the next router.
It still sends it over to the next router regardless.|It still sends it over to the next router regardless.
Alright.|Alright.
So, because these are,|So, because these are,
these guys are talking to each other with those three-second hellos.|these guys are talking to each other with those three-second hellos.
They're saying, hey, something's going on here.|They're saying, hey, something's going on here.
I'm gonna send it to that way.|I'm gonna send it to that way.
It took a little bit.|It took a little bit.
It took a little bit to do so but the reason is because the priority number.|It took a little bit to do so but the reason is because the priority number.
Because if you look at it, if you look at the priority number here,|Because if you look at it, if you look at the priority number here,
so control Z, show standby.|so control Z, show standby.
Not tanby It still shows as active.|Not tanby It still shows as active.
You see priority numbers 140.|You see priority numbers 140.
Because it's subtracted ten from it,|Because it's subtracted ten from it,
that's all.|that's all.
Where the other one is still 110, so it still shows standby as the other one and we have the preemption saying hey,|Where the other one is still 110, so it still shows standby as the other one and we have the preemption saying hey,
I'll throw anything that's lower priority number than mine.|I'll throw anything that's lower priority number than mine.
So I'm always gonna be active so they're,|So I'm always gonna be active so they're,
they're playing against each other, right,|they're playing against each other, right,
because we can put the number we want it to.|because we can put the number we want it to.
If I would have done the math correctly,|If I would have done the math correctly,
and I would have, you know, said,|and I would have, you know, said,
okay, this is, so this is 105, alright,|okay, this is, so this is 105, alright,
and,|and,
I would have said 105 on this one, I would have 100, the other one.|I would have said 105 on this one, I would have 100, the other one.
Then if I also tried ten on that one, then it would have been okay cool.|Then if I also tried ten on that one, then it would have been okay cool.
This would be 95, then this will be a 100|This would be 95, then this will be a 100
and this will be the active router, and this will be the standby router.|and this will be the active router, and this will be the standby router.
But we didn't do the math correctly,|But we didn't do the math correctly,
that's why.|that's why.
But still the point is these are redundant protocols.|But still the point is these are redundant protocols.
They talk to each other to allow traffic to be switched automatically to a router that is working properly to get to your|They talk to each other to allow traffic to be switched automatically to a router that is working properly to get to your
destination.|destination.
And that is so cool and again the other writing the other relation protocols the they do the same thing and we'll talk about those in this next lesson to come so|And that is so cool and again the other writing the other relation protocols the they do the same thing and we'll talk about those in this next lesson to come so
I hope you understood it and you will be using this in the real world I guarantee you and you will be seeing this in your|I hope you understood it and you will be using this in the real world I guarantee you and you will be seeing this in your
certification so read up on it.|certification so read up on it.
To get a lot more, you know, I guess, wet,|To get a lot more, you know, I guess, wet,
as we would say.|as we would say.
I get more in, in-depth in it, all right.|I get more in, in-depth in it, all right.
More than the, the video so you can really, you know, get a full, full,|More than the, the video so you can really, you know, get a full, full,
full understanding of it.|full understanding of it.
I'll see you in the next one.|I'll see you in the next one.
[BLANK_AUDIO]|[BLANK_AUDIO]