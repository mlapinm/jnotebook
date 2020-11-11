D:\mailCloud\prjother\tmp\1\c115_NETFLOW and its Configuration.md  


__|__
--|--
All right.|All right.
We've made it to the very last lesson in the CCNA course.|We've made it to the very last lesson in the CCNA course.
All right, this it NetFlow.|All right, this it NetFlow.
All right?|All right?
This is one of the last IP services that we need to talk about and NetFlow really, what it is.|This is one of the last IP services that we need to talk about and NetFlow really, what it is.
It actually shows you who is doing the naughty things on our network that they shouldn't be doing.|It actually shows you who is doing the naughty things on our network that they shouldn't be doing.
Right?|Right?
That's why we have to do all these group policies, and all these access lists, and all these switchport security stuff.|That's why we have to do all these group policies, and all these access lists, and all these switchport security stuff.
Right?|Right?
On our network to make sure that people don't go or plug in where they don't need to be plugging in.|On our network to make sure that people don't go or plug in where they don't need to be plugging in.
Or going where they don't need to be going.|Or going where they don't need to be going.
Or sending email back and forth within a network.|Or sending email back and forth within a network.
Or because you just came back from a cruise and you want to show your family pictures,|Or because you just came back from a cruise and you want to show your family pictures,
which is very nice.|which is very nice.
But it's not supposed to be done within the network, or across the water, or water and network, right?|But it's not supposed to be done within the network, or across the water, or water and network, right?
It's taking up bandwidth.|It's taking up bandwidth.
I mean, we have bandwidth issues as enough.|I mean, we have bandwidth issues as enough.
SNMP just told us we're peaking, we're peaking at our bandwidth right?|SNMP just told us we're peaking, we're peaking at our bandwidth right?
Because we're really typing [INAUDIBLE]|Because we're really typing [INAUDIBLE]
right?|right?
We're looking at those feckin and beckin bits yeah, no, only for the test.|We're looking at those feckin and beckin bits yeah, no, only for the test.
After that, you've got monitoring software, trust me.|After that, you've got monitoring software, trust me.
Using SNMP, sys log, and now NetFlow.|Using SNMP, sys log, and now NetFlow.
Who, what does NetFlow do?|Who, what does NetFlow do?
NetFlow actually tells us, hey, Laz is sending email pictures of all his big,|NetFlow actually tells us, hey, Laz is sending email pictures of all his big,
his vacations for the past year that has been going on.|his vacations for the past year that has been going on.
Okay, Susie is showing us her photo shoot that she did for,|Okay, Susie is showing us her photo shoot that she did for,
I don't know, some modeling agency.|I don't know, some modeling agency.
You know, and that's where this actually takes you down to the IP address,|You know, and that's where this actually takes you down to the IP address,
the MAC level.|the MAC level.
Whoa, the user, what is it they're doing?|Whoa, the user, what is it they're doing?
All right?|All right?
But again, if you're using a third party software,|But again, if you're using a third party software,
like the ones we've mentioned before.|like the ones we've mentioned before.
Says, says look PRTG, Cisco Works, or Solar Winds.|Says, says look PRTG, Cisco Works, or Solar Winds.
It's going to build that histogram.|It's going to build that histogram.
It's going to build that graph.|It's going to build that graph.
It's going to show you in red.|It's going to show you in red.
[SOUND] Right?|[SOUND] Right?
It's like whoa, wait a minute, what's going on there?|It's like whoa, wait a minute, what's going on there?
Then you start drilling down, and finding out down to the MAC address,|Then you start drilling down, and finding out down to the MAC address,
down to the driver, right?|down to the driver, right?
Who is the cause of, of our bandwidth slowing down.|Who is the cause of, of our bandwidth slowing down.
Who is the cause of all these problems that's happening?|Who is the cause of all these problems that's happening?
So, NetFlow will tell you why things are happening, which is great, which is great.|So, NetFlow will tell you why things are happening, which is great, which is great.
Unfortunately, packet tracer cannot.|Unfortunately, packet tracer cannot.
Doesn't support it as of yet, as of yet.|Doesn't support it as of yet, as of yet.
I'm sure they are working on it.|I'm sure they are working on it.
But this is how you would do it.|But this is how you would do it.
This is how you would do it.|This is how you would do it.
You go into the interface.|You go into the interface.
Whatever it is.|Whatever it is.
Whatever interface you are going to do.|Whatever interface you are going to do.
And you are going to look at what's coming in,|And you are going to look at what's coming in,
the ingress, the flow of packets in or the flow of packets coming out, egress.|the ingress, the flow of packets in or the flow of packets coming out, egress.
In global configuration,|In global configuration,
you're going to export that information to whoever's monitoring it right?|you're going to export that information to whoever's monitoring it right?
Then you're going to export the version.|Then you're going to export the version.
There's only three versions, one, five and nine.|There's only three versions, one, five and nine.
So you pick nine.|So you pick nine.
That's the latest version.|That's the latest version.
Okay?|Okay?
But whatever you put on the router,|But whatever you put on the router,
you gotta put it on your monitoring software okay?|you gotta put it on your monitoring software okay?
And that's it.|And that's it.
That's all you do.|That's all you do.
And then you just make sure that on monitoring software you put the same thing.|And then you just make sure that on monitoring software you put the same thing.
That's it.|That's it.
And then, you want to look at the show IP flow export.|And then, you want to look at the show IP flow export.
But again, you rarely do this.|But again, you rarely do this.
You look at your monitoring software.|You look at your monitoring software.
You'll get, you know, alarms, calls,|You'll get, you know, alarms, calls,
whatever the case may be.|whatever the case may be.
How it tells you.|How it tells you.
Because you may be sitting down there,|Because you may be sitting down there,
you're that guy or gal that works overnight, so you got nothing better to do than to look at all these 20 screens.|you're that guy or gal that works overnight, so you got nothing better to do than to look at all these 20 screens.
And the same things are going to pop up.|And the same things are going to pop up.
You're like, oh, wait a minute, that's red.|You're like, oh, wait a minute, that's red.
Let me take a look at that.|Let me take a look at that.
You take a look at it then you go into the router and you can find out what happened.|You take a look at it then you go into the router and you can find out what happened.
But a lot of these third party applications,|But a lot of these third party applications,
you can stop people right from there.|you can stop people right from there.
Oh, you can't go to that website.|Oh, you can't go to that website.
[NOISE] and you deny right from right there.|[NOISE] and you deny right from right there.
So, so sometimes people get slick and they know how to circumvent the security of, that you configured.|So, so sometimes people get slick and they know how to circumvent the security of, that you configured.
So you that's why you really need to you know,|So you that's why you really need to you know,
people say man, that's a that administrator is harsh.|people say man, that's a that administrator is harsh.
We can't use anything on here.|We can't use anything on here.
We can't bring in our USB.|We can't bring in our USB.
Right, you can't.|Right, you can't.
Because if this is your network and it should be up and running 100% of the time.|Because if this is your network and it should be up and running 100% of the time.
That may not be a realistic number, but it's a goal that we want to have.|That may not be a realistic number, but it's a goal that we want to have.
All right, but NetFlow again, really.|All right, but NetFlow again, really.
This is the configuration right here.|This is the configuration right here.
If you want to look inside the router, you can use these show,|If you want to look inside the router, you can use these show,
these three show command.|these three show command.
So look at, hey, where is that exporting to?|So look at, hey, where is that exporting to?
You wanna look at the interface and see how much information is going through there.|You wanna look at the interface and see how much information is going through there.
What interface is it actually using.|What interface is it actually using.
And the size of the packets that are going through.|And the size of the packets that are going through.
That's it.|That's it.
That's it.|That's it.
But again,|But again,
you're not gonna be really looking into it through the router.|you're not gonna be really looking into it through the router.
You're not even gonna to be doing it on the certification.|You're not even gonna to be doing it on the certification.
They'll ask you questions, maybe, on what NetFlow is and, what would, how would,|They'll ask you questions, maybe, on what NetFlow is and, what would, how would,
what would be the command, a, b, c, d or e.|what would be the command, a, b, c, d or e.
That you want to monitor things going in,|That you want to monitor things going in,
or things going out.|or things going out.
But this is it right here.|But this is it right here.
These, this, whoa, whoa, whoa, wait a minute.|These, this, whoa, whoa, whoa, wait a minute.
Okay.|Okay.
I can fix that.|I can fix that.
Right there.|Right there.
That, that's it.|That, that's it.
This is how you configure NetFlow.|This is how you configure NetFlow.
It's no big deal.|It's no big deal.
It's a big deal when, in a network, when you actually are monitoring and because there's something going on.|It's a big deal when, in a network, when you actually are monitoring and because there's something going on.
And you need to take back to the higher ups and let them know, hey,|And you need to take back to the higher ups and let them know, hey,
listen these are the reports that I can pull.|listen these are the reports that I can pull.
Because that's what's important.|Because that's what's important.
You're pulling all of these reports you know, weekly, monthly,|You're pulling all of these reports you know, weekly, monthly,
whatever the case may be.|whatever the case may be.
Hey, and this is what's going on.|Hey, and this is what's going on.
All right?|All right?
You know, like, I want to see,|You know, like, I want to see,
I want to go to a certain website of some bodybuilding.|I want to go to a certain website of some bodybuilding.
I'm not supposed to be doing that during the work day.|I'm not supposed to be doing that during the work day.
All right, so all these different things that's why,|All right, so all these different things that's why,
when we're doing our logging or when we're doing our SNMP.|when we're doing our logging or when we're doing our SNMP.
We tweak it to see what is it that we want to manage and they'll tell you.|We tweak it to see what is it that we want to manage and they'll tell you.
Okay and that's why we have our firewalls.|Okay and that's why we have our firewalls.
All these different things, the third party softwares, the firewalls, all,|All these different things, the third party softwares, the firewalls, all,
that's what they do.|that's what they do.
To make sure and maintain, you know, that,|To make sure and maintain, you know, that,
hey,|hey,
control over our network, because bandwidth is an issue.|control over our network, because bandwidth is an issue.
And security, there may be certain websites,|And security, there may be certain websites,
that could be a bodybuilding website or it could be supplementation website,|that could be a bodybuilding website or it could be supplementation website,
or it could be, you know, vacation website that you're going to.|or it could be, you know, vacation website that you're going to.
But they've been hacked, or it's, whatever re-, they may have something on there.|But they've been hacked, or it's, whatever re-, they may have something on there.
Then they might have a virus, and then you get infected.|Then they might have a virus, and then you get infected.
So, you gotta protect the network as much as possible.|So, you gotta protect the network as much as possible.
So, monitoring your network is extremely important.|So, monitoring your network is extremely important.
Don't think that I'm saying, I'm just,|Don't think that I'm saying, I'm just,
whatever,|whatever,
I'll set SNMP, no, no, no, no, no or syslog.|I'll set SNMP, no, no, no, no, no or syslog.
No, no, the configuration of it is, it's simple, it's easy to use.|No, no, the configuration of it is, it's simple, it's easy to use.
And with these monitoring software's that exist it really makes life a whole lot easier.|And with these monitoring software's that exist it really makes life a whole lot easier.
But again, there's three things that we need to at least be monitoring for.|But again, there's three things that we need to at least be monitoring for.
SNMP is telling you, hey, this is what's going on with the system.|SNMP is telling you, hey, this is what's going on with the system.
Okay?|Okay?
Or, this is what's, this is what's going on with this particular device.|Or, this is what's, this is what's going on with this particular device.
I'm sorry, this is what's going on with this particular device.|I'm sorry, this is what's going on with this particular device.
The other one, the syslog.|The other one, the syslog.
Hey, this is what's going on with the actual system.|Hey, this is what's going on with the actual system.
We're getting system messages now.|We're getting system messages now.
Right?|Right?
Like that debug that we saw.|Like that debug that we saw.
Or, hey, who's messing up the network?|Or, hey, who's messing up the network?
Why is our bandwidth messed up?|Why is our bandwidth messed up?
Why is the processor on that particular device going crazy?|Why is the processor on that particular device going crazy?
So now we get to know exactly what's going on.|So now we get to know exactly what's going on.
So when we take these reports and we take them to the higher ups.|So when we take these reports and we take them to the higher ups.
They get a better understanding as to why you want newer computers,|They get a better understanding as to why you want newer computers,
as to why you want to go gigabit, as to why we to, we need more bandwidth.|as to why you want to go gigabit, as to why we to, we need more bandwidth.
That's the whole point of NetFlow.|That's the whole point of NetFlow.
Very simple to configure, very important.|Very simple to configure, very important.
All three of them are very important,|All three of them are very important,
okay?|okay?
And they will be in your certification.|And they will be in your certification.
Again, from what I gather, gather from my students that have taken the test,|Again, from what I gather, gather from my students that have taken the test,
they do have a couple questions on all three, all right?|they do have a couple questions on all three, all right?
But they're not as much as you would think.|But they're not as much as you would think.
It's a brand new, brand new thing that they have on there, which is good.|It's a brand new, brand new thing that they have on there, which is good.
It's good.|It's good.
It gives you more ammunition so when you get out there you're like okay I'm ready I understand what you're telling me.|It gives you more ammunition so when you get out there you're like okay I'm ready I understand what you're telling me.
So it's gonna be good for you when you get to your interviews.|So it's gonna be good for you when you get to your interviews.
So as long as you understand the concepts of what SNMP does,|So as long as you understand the concepts of what SNMP does,
syslog and NetFlow, you should be good to go.|syslog and NetFlow, you should be good to go.
All right?|All right?
You should be good to go.|You should be good to go.
But always keep this in mind.|But always keep this in mind.
It is monitoring software, what you use.|It is monitoring software, what you use.
I'll see you in the next.|I'll see you in the next.
[BLANK_AUDIO]|[BLANK_AUDIO]