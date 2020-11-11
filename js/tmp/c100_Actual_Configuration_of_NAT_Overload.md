D:\mailCloud\prjother\tmp\1\c100_Actual Configuration of NAT Overload.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
Alright, so let's go ahead and take these configurations that we did in Notepad,|Alright, so let's go ahead and take these configurations that we did in Notepad,
and we're going to go ahead and do it from scratch on the actual router.|and we're going to go ahead and do it from scratch on the actual router.
Alright, now you see that we have no IP addresses or anything,|Alright, now you see that we have no IP addresses or anything,
cause they're, that, oops.|cause they're, that, oops.
The lines are, you see we have red dots there.|The lines are, you see we have red dots there.
I'll put this over here.|I'll put this over here.
So, we are going to need to put an IP address here.|So, we are going to need to put an IP address here.
It'll be 1.254.|It'll be 1.254.
This'll be 1.254.|This'll be 1.254.
All right.|All right.
Then we'll start with our NAT configurations.|Then we'll start with our NAT configurations.
So why don't I just maximize the router right there.|So why don't I just maximize the router right there.
I want to say nope.|I want to say nope.
Enable, config T,|Enable, config T,
host name, NAT.|host name, NAT.
Okay.|Okay.
So now we're going to go into interface.|So now we're going to go into interface.
F0/0.|F0/0.
IP address.|IP address.
192.168.100.254.|192.168.100.254.
Is it 100254, you see how my brain is all messed up?|Is it 100254, you see how my brain is all messed up?
It's 1.254.|It's 1.254.
[BLANK_AUDIO]|[BLANK_AUDIO]
1.254 255, 255, 255 now zero.|1.254 255, 255, 255 now zero.
Okay we'll do a no shut on that.|Okay we'll do a no shut on that.
And since we're here already let's tell it hey, your the inside part of the NAT.|And since we're here already let's tell it hey, your the inside part of the NAT.
So, i p NAT, inside.|So, i p NAT, inside.
Boom, now we're gonna go to the other side.|Boom, now we're gonna go to the other side.
Interface add zero slash one, IP address,|Interface add zero slash one, IP address,
not that many of these.|not that many of these.
1.1.1.254, 255,|1.1.1.254, 255,
255, 255.0, no shots.|255, 255.0, no shots.
And then we're gonna go ahead and tell it,|And then we're gonna go ahead and tell it,
hey you're the outside IP NAT, outside.|hey you're the outside IP NAT, outside.
DWR.|DWR.
All right..|All right..
And that's pretty much it for that.|And that's pretty much it for that.
Let's take a look to see show IP in brief.|Let's take a look to see show IP in brief.
We are up, up.|We are up, up.
Probably have connectivity already going across.|Probably have connectivity already going across.
Now what we're gonna do.|Now what we're gonna do.
We're gonna routing table.|We're gonna routing table.
Show IP route.|Show IP route.
We're connected to both sides, so no issues there.|We're connected to both sides, so no issues there.
So, what we're gonna do now is, we're gonna create our pool of addresses,|So, what we're gonna do now is, we're gonna create our pool of addresses,
since now we know which is inside and which is outside.|since now we know which is inside and which is outside.
So, config t, IP NAT pool, laz.|So, config t, IP NAT pool, laz.
The pool is gonna be 1.1.1.254.|The pool is gonna be 1.1.1.254.
1.1.1.254.|1.1.1.254.
We don't have real addresses.|We don't have real addresses.
I'm gonna use that one.|I'm gonna use that one.
All right.|All right.
And net mask.|And net mask.
It's going to be 255.255.255.0.|It's going to be 255.255.255.0.
Standard access list.|Standard access list.
Access hyphen list.|Access hyphen list.
I'm gonna use 10.|I'm gonna use 10.
Permit the 192 168.1.0,|Permit the 192 168.1.0,
0.00 255 network.|0.00 255 network.
Again that access lives by itself, doesn't do anything,|Again that access lives by itself, doesn't do anything,
we're not applying it to any lines, we're not applying it to any interfaces.|we're not applying it to any lines, we're not applying it to any interfaces.
It's listening for interesting traffic.|It's listening for interesting traffic.
How does it do that?|How does it do that?
By this third line.|By this third line.
IP NAT inside source list, what list?|IP NAT inside source list, what list?
Ten.|Ten.
What pool?|What pool?
Laz.|Laz.
Magical word?|Magical word?
Overload.|Overload.
DO WR and you're done.|DO WR and you're done.
That is it.|That is it.
Easy peasey Japanesey, very simple, very simple.|Easy peasey Japanesey, very simple, very simple.
Okay?|Okay?
So let's see if we're actually translating.|So let's see if we're actually translating.
In order to translate, we have to go through the NAT router.|In order to translate, we have to go through the NAT router.
So what we're going to do.|So what we're going to do.
We're going to get one of these PCs that say PC zero.|We're going to get one of these PCs that say PC zero.
And we'll ping.|And we'll ping.
Let's see if this server has an IP address.|Let's see if this server has an IP address.
Sure does.|Sure does.
Awesome, awesome.|Awesome, awesome.
So, look at that.|So, look at that.
Still recovering from that accident.|Still recovering from that accident.
And though the humerus is on this side,|And though the humerus is on this side,
it's really this side.|it's really this side.
I should have a plate showing nine screws.|I should have a plate showing nine screws.
Not fun.|Not fun.
So, let's ping.|So, let's ping.
Ping, 1.1.1.1.|Ping, 1.1.1.1.
Come on, IPv4.|Come on, IPv4.
All right, we have connectivity.|All right, we have connectivity.
We would have had connectivity with or without the net, we just want to make sure that we're translating.|We would have had connectivity with or without the net, we just want to make sure that we're translating.
All right.|All right.
So, supposedly we are.|So, supposedly we are.
Let's see.|Let's see.
How do we check to see if we're translating?|How do we check to see if we're translating?
Do a control Z here.|Do a control Z here.
Come on.|Come on.
Show IP NAT trans, short for translation.|Show IP NAT trans, short for translation.
And we are.|And we are.
There is your, the protocol that you're using, obviously, is PNG.|There is your, the protocol that you're using, obviously, is PNG.
Here is your inside global.|Here is your inside global.
This is the IP address that got translated, right?|Это IP-адрес, который был переведен, верно?
Well after a translation, this is the IP address that got translated,|После перевода это IP-адрес, который был переведен,
to the global or public IP address.|на глобальный или общедоступный IP-адрес.
You can see the port numbers that it's using cuz really paint doesn't have a port number.|Вы можете видеть номера портов, которые он использует, потому что на самом деле у paint нет номера порта.
But if you take a look at the outside local or global they're both the same cuz this is the destination.|Но если вы посмотрите на внешнее, локальное или глобальное, они оба одинаковы, потому что это пункт назначения.
So it's gonna be the same.|Так что все будет так же.
Let's try and go through the browser and see if we see anything different.|Давайте попробуем пройтись по браузеру и посмотреть, увидим ли мы что-нибудь другое.
Let's go back to the PC, let's use the browser and we'll go one dot one dot one dot one.|Вернемся к ПК, воспользуемся браузером и перейдем одна точка, одна точка, одна точка.
Oops.|Ой.
Alright so we went to the server.|Итак, мы пошли на сервер.
But this time we went through the browser.|Но на этот раз мы пошли через браузер.
So now the protocol should have changed.|Итак, теперь протокол должен был измениться.
So I.|Так что я.
[BLANK_AUDIO]|[BLANK_AUDIO]
Okay, now we're using the tcp protocol.|Хорошо, теперь мы используем протокол tcp.
You can see you have an actual now port number.|Вы можете видеть, что у вас есть текущий номер порта.
Remember the first 1024 are known ports.|Помните, что первые 1024 порта являются известными.
So it starts on the very first port 1025|Итак, он запускается на самом первом порту 1025
and it goes up.|и он идет вверх.
Again, this is the IP address of your PC that got translated to this inside global and you can see that your outside local destination port is 80.|Опять же, это IP-адрес вашего ПК, который был преобразован в этот внутренний глобальный, и вы можете видеть, что ваш внешний локальный порт назначения - 80.
It is 80 but the IP addresses do not change.|Это 80, но IP-адреса не меняются.
The IP addresses do not change.|IP-адреса не меняются.
So that's all there is to configuring NAT,|Вот и все, что нужно для настройки NAT,
as long as you remember because you'll see a screen it will give you maybe like a show start or a show run and you'll be right there.|пока вы помните, потому что вы увидите экран, он может показаться вам как начало шоу или запуск шоу, и вы будете прямо там.
Be sure that you look for this IP NAT inside.|Убедитесь, что вы ищете IP NAT внутри.
I've been at outside.|Я был снаружи.
And there is your, you know, your NAT configuration.|И есть ваша, знаете ли, ваша конфигурация NAT.
All right.|Отлично.
Next lesson, that we're gonna get into,|Следующий урок, которым мы займемся,
which will be your final lesson for NAT will be the pitfalls, what to look for in your certification exam.|который будет вашим последним уроком по NAT, будет подводным камнем, на что следует обратить внимание на сертификационном экзамене.
I'll see you there.|Увидимся там.
[BLANK_AUDIO]|[BLANK_AUDIO]