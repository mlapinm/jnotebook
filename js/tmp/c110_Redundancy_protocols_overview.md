D:\mailCloud\prjother\tmp\1\c110_Redundancy protocols overview.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
All right.|Отлично.
We're near the end.|Мы близки к концу.
I saved the two best for last.|Два лучших я оставил напоследок.
What we're about to talk about it is one of the latest things that Cisco has implemented into the new certification,|То, о чем мы собираемся поговорить, - это одна из последних вещей, которые Cisco внедрила в новую сертификацию,
which was not part of the old certification.|что не было частью старой сертификации.
That's why they implemented it in the new certification.|Вот почему они реализовали это в новой сертификации.
This, for this particular session, we're gonna talk about redundancy protocols.|В данном конкретном сеансе мы поговорим о протоколах резервирования.
In the other session, we're gonna talk about monitoring protocols.|В другом сеансе мы поговорим о протоколах мониторинга.
How are we going to monitor the network and the importance of it.|Как мы собираемся отслеживать сеть и насколько она важна.
But for here, we're gonna talk about redundancy.|Но здесь мы поговорим о избыточности.
Now we've, we've gone through a slew of things with IP addressing,|Итак, мы прошли через множество вещей с IP-адресацией,
standards, cabling, routing protocols,|стандарты, кабели, протоколы маршрутизации,
VLANs, Inter VLANs.|VLAN, Inter VLAN.
Now with a wide area network, some frame relays and PvP.|Теперь с глобальной сетью, некоторыми ретрансляторами кадров и PvP.
So we know how to put a network together,|Итак, мы знаем, как собрать сеть,
but what about redundancy?|а как насчет избыточности?
Redundancy is an important part of a network.|Резервирование - важная часть сети.
We had that spanning tree, right?|У нас было это остовное дерево, верно?
That was looking for routing or switching loops.|То искал петли маршрутизации или коммутации.
All right.|Отлично.
We have some redundant connections, but it is not truly redundant.|У нас есть несколько избыточных соединений, но они не являются полностью избыточными.
I can tell you right now that one of these routing redundancy protocols,|Я могу сказать вам прямо сейчас, что один из этих протоколов избыточности маршрутизации,
HSRP is in use today, right now in telecommunications companies.|HSRP используется сегодня в телекоммуникационных компаниях.
They use HSRP, all right?|Они используют HSRP, понятно?
So definitely, this is something that you will be seeing not only on your certification, but you will be seeing it when you get out to the real world.|Так что это определенно то, что вы увидите не только в своей сертификации, но вы увидите это, когда выйдете в реальный мир.
Now the other ones, VR, VRRP.|Теперь другие, VR, VRRP.
HSRP is Cisco proprietary.|HSRP является собственностью Cisco.
VRRP, open standard and GLBP, Cisco proprietary, but it has load balance, where they other two do not.|VRRP, открытый стандарт и GLBP, проприетарный Cisco, но у него есть балансировка нагрузки, в отличие от двух других.
They can pretend to have load balancing,|Они могут симулировать балансировку нагрузки,
depending on how you configure them and we'll talk about those details in a little bit.|в зависимости от того, как вы их настраиваете, и мы поговорим об этих деталях чуть позже.
But these are questions that, you know,|Но это вопросы, которые, как вы знаете,
you would ask.|спросите вы.
Well, redundancy, we always need in a network and the questions are how fast can fail over happen?|Что ж, избыточность, нам всегда нужна в сети, и вопрос в том, как быстро может произойти аварийное переключение?
Because when you have a redundancy protocol, if one link goes down, the whole purpose of this redundancy protocol is for it to switch over to another router.|Потому что, когда у вас есть протокол резервирования, если одно соединение выходит из строя, вся цель этого протокола резервирования - переключиться на другой маршрутизатор.
So, information can then be automatically transferred over.|Таким образом, информация может быть автоматически передана.
That's the whole point.|В этом весь смысл.
So how quickly can this happen?|Так как быстро это может произойти?
Are the individual users gonna be aware of it, they may be aware of a little skip,|Будут ли отдельные пользователи знать об этом, они могут знать о небольшом пропуске,
a little heartbeat that they miss, but no big deal.|небольшое сердцебиение, которое они пропускают, но ничего страшного.
Your network's up and running again.|Ваша сеть снова в рабочем состоянии.
And what would happen instead of the LAN line going down, the LAN line going down iIs that redundancy protocol going to do|И что произойдет вместо того, чтобы линия LAN вышла из строя, линия LAN вышла из строя, если протокол резервирования
something about that?|что-то об этом?
And yes, it will.|И да, будет.
There's configurations that you do within these redundancy protocols,|Есть конфигурации, которые вы выполняете в этих протоколах резервирования,
which we'll do with HSRP, with HSRP.|что мы сделаем с HSRP, с HSRP.
VRRP unfortunately, and GLBP, we cannot do in the Cisco packet tracer.|VRRP, к сожалению, и GLBP мы не можем сделать в трассировщике пакетов Cisco.
But I will show you their configurations,|Но я покажу вам их конфигурации,
anyway.|тем не мение.
All right?|Отлично?
Just so you can be aware of it.|Просто чтобы вы знали об этом.
But definitely, these are things they'll ask you.|Но определенно они вас спросят об этом.
I'll ask you and I'll make a point to say,|Я спрошу вас и обязательно скажу:
hey,|Привет,
this is what you need to pay attention to for your certification.|это то, на что вам нужно обратить внимание при сертификации.
Now, as I said, HSRP or you may not see it.|Теперь, как я уже сказал, HSRP вы можете не увидеть.
Okay.|Ладно.
I've got to magnify it.|Я должен это увеличить.
HSRP has been around for awhile.|HSRP существует уже некоторое время.
It's been around since 1994, so it's been around, you know, it's a long time.|Он существует с 1994 года, так что он существует уже давно.
And finally, you know, Cisco decided.|И наконец, знаете, решила Cisco.
Hey, these guys need to know about this.|Эй, этим парням нужно знать об этом.
Because in the 640-802 exam,|Потому что на экзамене 640–802
there was nothing mentioned on re,|на re ничего не упоминалось,
redundancy protocol.|протокол резервирования.
This chapter was called IP services and this is one of the things that's in there.|Эта глава называлась IP-услугами, и это одна из вещей, которые там есть.
So definitely, you need to know about HSRP.|Так что вам определенно нужно знать о HSRP.
And again, it's, you know, it was made back in 1994.|И опять же, это, знаете ли, было сделано еще в 1994 году.
Now remember, look at, look at the date,|Теперь вспомни, посмотри, посмотри на дату,
1994.|1994 г.
So that you know, it says here uses by default, hello timers three secs and a hold timer of ten seconds.|Чтобы вы знали, здесь говорится, что по умолчанию используются таймеры приветствия на три секунды и таймер удержания на десять секунд.
And what does that mean?|И что это значит?
That means you have, cuz you can use up to eight routers with this HSRP and they talk to each other.|Это означает, что у вас есть, потому что вы можете использовать до восьми маршрутизаторов с этим HSRP, и они общаются друг с другом.
So, every three seconds, they're sending.|Итак, каждые три секунды они отправляют.
Hey, I'm still good.|Эй, я все еще в порядке.
Hey, I'm still good.|Эй, я все еще в порядке.
Hey, I'm still good.|Эй, я все еще в порядке.
All right?|Отлично?
They're sending each other back and forth little hellos.|Они передают друг другу небольшие приветы.
They're talking to each other, making sure everything is cool.|Они разговаривают друг с другом, чтобы убедиться, что все в порядке.
But if at that tenth second, they don't receive a hello,|Но если на этой десятой секунде они не получат привет,
one of them is going to decide, hey, that guy is dead.|один из них решит, эй, этот парень мертв.
I'm gonna take over for him, because HSRP,|Я собираюсь заменить его, потому что HSRP,
not to get into too much detail.|не вдаваться в подробности.
I don't want to get too much into detail.|Я не хочу вдаваться в подробности.
HSRP works on a standby active or active standby router.|HSRP работает на резервном активном или на активном резервном маршрутизаторе.
One router will be active and the others will be standby.|Один маршрутизатор будет активен, а остальные - в режиме ожидания.
So when the active router goes down or a link on the router goes down,|Поэтому, когда активный маршрутизатор выходит из строя или канал на маршрутизаторе отключается,
then the standby router will take over and we'll see how that works.|тогда резервный маршрутизатор возьмет на себя управление, и мы посмотрим, как это работает.
But definitely, definitely,|Но определенно, определенно,
you do need these redundancy protocols in your network.|вам действительно нужны эти протоколы резервирования в вашей сети.
And we'll see and I have a lab back here.|Посмотрим, и у меня здесь лаборатория.
All right.|Отлично.
That we will do from scratch for HSRP,|Что мы будем делать с нуля для HSRP,
all right?|отлично?
And you're gonna see here that in the middle, this should cause your attention.|И вы увидите, что посередине это должно привлечь ваше внимание.
I don't know if I'm in the way here.|Не знаю, мешаю ли я здесь.
Let me move this to one side.|Позвольте мне отодвинуть это в сторону.
This would be the active router.|Это будет активный маршрутизатор.
This would be the standby router based on priority numbers.|Это будет резервный маршрутизатор на основе номеров приоритетов.
The higher priority, you're the active router.|Чем выше приоритет, тем активнее ваш маршрутизатор.
The lower priority, you're the standby.|Чем ниже приоритет, тем вы ждете.
So here, we have a virtual IP address.|Итак, у нас есть виртуальный IP-адрес.
That is how we have the redundancy.|Вот как у нас есть избыточность.
This virtual IP address will be placed on the clients.|Этот виртуальный IP-адрес будет размещен на клиентах.
The clients will have a virtual gateway,|У клиентов будет виртуальный шлюз,
basically with these redundancy protocols and they're gateway goes down here.|в основном с этими протоколами резервирования, и они шлюз идет сюда.
Well, automatically, if this line goes down,|Что ж, автоматически, если эта линия опускается,
that means he is not receiving a hello.|это означает, что он не получает приветствия.
Once the ten second hits, boom.|Как только десять секунд попадут, бум.
That tra, that traffic is trans,|Этот тра, этот трафик транс,
transferred over to this particular router and then traffic will still keep flowing where it needs to go.|передается на этот конкретный маршрутизатор, и тогда трафик по-прежнему будет идти туда, куда ему нужно.
And that's what the redundancy protocol is.|Вот что такое протокол резервирования.
Also, we said hey, but what about the WAN length?|Мы также сказали: «Эй, а как насчет длины WAN?»
In this case, this would be like the WAN length right here.|В этом случае это была бы длина WAN прямо здесь.
If that goes down, there is something called tracking,|Если это не так, есть что-то, что называется отслеживанием,
where you are tracking the interfaces to see what happens.|где вы отслеживаете интерфейсы, чтобы увидеть, что происходит.
If that goes down, same thing.|Если это произойдет, то же самое.
This will switch it over to this one and he will take over for that particular router.|Это переключит его на этот, и он возьмет на себя управление этим конкретным маршрутизатором.
So there's a lot of, a lot of,|Так что есть много, много,
configurations that, a lot of option.|конфигураций то, вариантов много.
And then these redundancy protocols that you can do to make it work for your particular infrastructure.|А затем эти протоколы резервирования, которые вы можете использовать, чтобы заставить его работать для вашей конкретной инфраструктуры.
This is something that you will definitely need.|Это то, что вам обязательно понадобится.
Now, this is a very simplistic network for you to understand what these redundancy protocol, what they do.|Теперь это очень упрощенная сеть, чтобы вы могли понять, что это за протоколы резервирования, что они делают.
All right?|Отлично?
So this is what I'm gonna show you, but we need to talk about it a little bit first.|Вот что я вам покажу, но сначала нам нужно немного об этом поговорить.
All right.|All right.
So we said that HSRP, three seconds and then the whole timer ten seconds.|So we said that HSRP, three seconds and then the whole timer ten seconds.
And that's one of the problems people say,|And that's one of the problems people say,
well,|well,
you know I want you to use HSRP, cuz HSRP is too slow.|you know I want you to use HSRP, cuz HSRP is too slow.
Right?|Right?
We live in a world where, you know, the elevator button, right?|We live in a world where, you know, the elevator button, right?
And we hit the up or down arrow, we expect that door to open right away.|And we hit the up or down arrow, we expect that door to open right away.
When, when it doesn't, we keep hitting that elevator button.|When, when it doesn't, we keep hitting that elevator button.
On our computers, usually people on their computers.|On our computers, usually people on their computers.
They click, nothing happens.|They click, nothing happens.
They click again, nothing happens.|They click again, nothing happens.
They click again, nothing happens.|They click again, nothing happens.
They click again, the computer freezes.|They click again, the computer freezes.
Like let it do what it's gotta do, but we want instant gratification.|Like let it do what it's gotta do, but we want instant gratification.
So what do people say, well, I'm gonna go to VRRP.|So what do people say, well, I'm gonna go to VRRP.
Look at that.|Look at that.
VRRP, its timers, it was invented later.|VRRP, its timers, it was invented later.
So hey, we got faster speeds.|So hey, we got faster speeds.
So now hey, the timers are one second versus three seconds of hellos and then the hold time is three seconds.|So now hey, the timers are one second versus three seconds of hellos and then the hold time is three seconds.
My God, it's awesome.|My God, it's awesome.
It's quicker.|It's quicker.
I wanna use VRRP and I am not bound to Cisco routers.|I wanna use VRRP and I am not bound to Cisco routers.
I can use any router I want, because it's industry standard.|I can use any router I want, because it's industry standard.
Any open standard, anybody can use VRRP.|Any open standard, anybody can use VRRP.
So you're not stuck to Cisco routers.|So you're not stuck to Cisco routers.
That's not a bad thing to be stuck to a Cisco router, but people were looking at these timers.|That's not a bad thing to be stuck to a Cisco router, but people were looking at these timers.
But in today's world, you can tweak the timers to look just like VRRP.|But in today's world, you can tweak the timers to look just like VRRP.
So really, [LAUGH] that doesn't matter.|So really, [LAUGH] that doesn't matter.
That shouldn't be, your choice shouldn't be well I'm gonna use VRRP,|That shouldn't be, your choice shouldn't be well I'm gonna use VRRP,
cuz it's faster.|cuz it's faster.
That makes no sense.|That makes no sense.
Because you can tweak the timers down to milliseconds if that's what you want.|Because you can tweak the timers down to milliseconds if that's what you want.
On both the VRRP and HSRP.|On both the VRRP and HSRP.
So, it really doesn't matter.|So, it really doesn't matter.
It just comes down to hey, are you using Cisco routers?|It just comes down to hey, are you using Cisco routers?
Or are you not us, or are you using,|Or are you not us, or are you using,
again, a collage of different routers.|again, a collage of different routers.
So, it's completely up to you.|So, it's completely up to you.
And you can see Cisco is the one that created this.|And you can see Cisco is the one that created this.
And here, the IETF was the one that created it.|And here, the IETF was the one that created it.
All right?|All right?
And oops, oops, what happened here?|And oops, oops, what happened here?
And the last one is GLBP is Cisco only.|And the last one is GLBP is Cisco only.
Again, created in 2005.|Again, created in 2005.
It's is just like HSRP, but, but it's active to active routers.|It's is just like HSRP, but, but it's active to active routers.
What it does is just pretty cool,|What it does is just pretty cool,
because I don't wanna get too much into the details.|because I don't wanna get too much into the details.
I want to get into the details later on in HSRP, but what it does,|I want to get into the details later on in HSRP, but what it does,
it actually creates not only a virtual,|it actually creates not only a virtual,
well you create a virtual IP address.|well you create a virtual IP address.
But it creates, multiple, virtual MAC addresses.|But it creates, multiple, virtual MAC addresses.
HSRP creates only virtual MAC address,|HSRP creates only virtual MAC address,
just like VRRP creates one virtual MAC address.|just like VRRP creates one virtual MAC address.
All right.|All right.
Cuz we need VR.|Cuz we need VR.
Well, GLBP creates multiple, virtual MAC addresses.|Well, GLBP creates multiple, virtual MAC addresses.
That is cool, okay?|That is cool, okay?
And they're specific MAC addresses,|And they're specific MAC addresses,
you will be asked questions on the format of that MAC address.|you will be asked questions on the format of that MAC address.
Because, you can take a look at that MAC address and, you know,|Because, you can take a look at that MAC address and, you know,
hey, that's and HSRP MAC address.|hey, that's and HSRP MAC address.
Hey, that's a VRRP MAC address.|Hey, that's a VRRP MAC address.
You can tell based on the MAC address and they will ask you is this the format?|You can tell based on the MAC address and they will ask you is this the format?
Which of the following is a format of an HSRP MAC address?|Which of the following is a format of an HSRP MAC address?
So we will get into that and you need to learn what that is.|So we will get into that and you need to learn what that is.
But again, these are the three.|But again, these are the three.
The best out of the three, obviously is GLBP, because it has the low-balancing.|The best out of the three, obviously is GLBP, because it has the low-balancing.
Since we have a big network, you can do a load-balancing.|Since we have a big network, you can do a load-balancing.
Like I told you, Telco over 11,000 sites,|Как я уже говорил, у Telco более 11 000 сайтов,
HSRP.|HSRP.
Backbone routers are using HSRP.|Магистральные маршрутизаторы используют HSRP.
So you can use a combination, you want different segments of a network.|Итак, вы можете использовать комбинацию, вам нужны разные сегменты сети.
But HSRP is the one that is used.|Но используется именно HSRP.
Now, have there been problems?|Были ли проблемы?
Sure.|Конечно.
But it really wasn't, because of the protocol.|Но на самом деле это не так из-за протокола.
It was because of a static route.|Это было из-за статического маршрута.
So, again, you need this redundancy in your network.|Итак, опять же, вам нужна эта избыточность в вашей сети.
And to implement something like this,|И чтобы реализовать что-то подобное,
especially at an enterprise level is extremely important.|особенно на уровне предприятия, это чрезвычайно важно.
Because imagine this, you're sitting down.|Потому что представьте это, вы садитесь.
All right.|Отлично.
Let's use the lab as an example.|В качестве примера возьмем лабораторию.
You're sitting down here and you're monitoring your network,|Вы сидите здесь и следите за своей сетью,
you're doing your thing.|ты делаешь свое дело.
And all of a sudden, this link goes down.|И вдруг эта ссылка отключается.
This is your gateway.|Это ваш шлюз.
That link goes down.|Эта ссылка не работает.
What are you gonna do?|Что ты собираешься делать?
Are you gonna change your gateway address?|Вы собираетесь изменить свой адрес шлюза?
But what if it's some guy somewhere else?|Но что, если это какой-то парень где-то еще?
What are you tell him to do?|Что ты ему скажешь?
Oh, change your gateway address.|О, измени свой адрес шлюза.
You're not gonna do that.|Ты не будешь этого делать.
You want something to happen automatically to switch you over.|Вы хотите, чтобы что-то произошло автоматически, чтобы переключить вас.
So this is where these guys come in.|Вот тут и появляются эти парни.
So what we're gonna be doing in the next session is definitely we're gonna be talking about.|Так что то, что мы будем делать на следующей сессии, определенно будем обсуждать.
HSRP in a lot more detail to take a look at the MAC address and to take a look at these virtual IP addresses and how can we configure HSRP to do what we|HSRP более подробно, чтобы взглянуть на MAC-адрес и взглянуть на эти виртуальные IP-адреса, а также на то, как мы можем настроить HSRP на то, что мы
need it to do.|нужно это делать.
The rest are pretty much similar and we'll talk about those as well, but in a very general sense.|Остальные в значительной степени похожи, и мы поговорим о них, но в очень общем смысле.
Our focus is on that HSRP.|Наше внимание сосредоточено на HSRP.
I'll see you in the next session.|Увидимся на следующем сеансе.
[BLANK_AUDIO]|[BLANK_AUDIO]