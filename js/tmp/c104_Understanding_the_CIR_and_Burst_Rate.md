D:\mailCloud\prjother\tmp\1\c104_Understanding the CIR and Burst Rate.md  


__|__
--|--
Welcome, everyone.|Добро пожаловать.
I have traveled through time,|Я путешествовал во времени,
as you can see, so I can explain to you in bite-sized morsels, frame relay.|Как видите, я могу объяснить вам в небольших количествах, Frame Relay.
Frame relay is the most confusing one to understand.|Frame Relay - это самый непонятный для понимания.
Not that it's confusing to configure,|Не то чтобы это сбивало с толку,
it just has a little different I guess you want to say, components to it.|у него просто немного другие, я думаю, вы хотите сказать, компоненты к нему.
And there's a lot of different ways of configuring frame relay, okay?|И есть много разных способов настройки Frame Relay, хорошо?
The first two things that we need to be aware of in frame relay is these two terms,|Первые две вещи, о которых нам нужно знать в Frame Relay, - это эти два термина,
your CIR and your access rate.|ваш CIR и скорость доступа.
Your CIR is your committed,|Ваш CIR - это ваша приверженность,
I don't know about the spelling here,|Я не знаю, как здесь написано,
committed information rate.|фиксированная скорость передачи информации.
This is what's guaranteed.|Это то, что гарантировано.
Guaranteed.|Гарантированно.
Wow, I can't spell today.|Вау, сегодня я не умею писать.
I don't know.|Я не знаю.
All right.|Отлично.
Meaning that this is what, if you,|Это значит, что если вы,
let's say you call your provider.|допустим, вы звоните своему провайдеру.
Let's say, for example,|Скажем, например,
it's AT&T, or whoever.|это AT&T или кто-то еще.
And you say, listen,|И вы говорите, слушайте,
I wanna run a frame relay and I only need 256 kilobits per second.|Я хочу запустить Frame Relay, и мне нужно всего 256 килобит в секунду.
So 256K, all right, that's all,|Так что 256К, ладно, и все,
that's all you require.|это все, что вам нужно.
So that's what they're gonna guarantee you, that is what that CIR is.|Так вот что они собираются вам гарантировать, это то, что такое CIR.
So from zero, or let's say 33 kilobits per second,|Итак, с нуля, или, скажем, 33 килобита в секунду,
up to 256 kilobits per second,|до 256 килобит в секунду,
they will guarantee you that traffic.|они гарантируют вам этот трафик.
Now, you can, you'll,|Теперь ты можешь, ты,
you can purchase an access rate.|вы можете приобрести скорость доступа.
Of, lets say T1, all right,|Ну, скажем, Т1, хорошо,
a whopping, mega, megabits per second,|колоссальные, мега, мегабиты в секунду,
all right, that's not guaranteed.|хорошо, это не гарантировано.
Anything above 256, it's not guaranteed.|Все, что выше 256, не гарантируется.
If the telco has it available for you, then it will send it.|Если у телефонной компании он есть в наличии, он его отправит.
But if you go beyond that, and I'll give you a sneak peak into the future since I, I can travel through time.|Но если вы выйдете за рамки этого, и я дам вам возможность заглянуть в будущее, поскольку я, я могу путешествовать во времени.
It will mark those bits that go beyond your CIR with something called a DE.|Он пометит те биты, которые выходят за пределы вашего CIR, с помощью так называемого DE.
I'll put that there.|Я положу это туда.
And I, I'll put a little statement here.|И я, я сделаю здесь небольшое заявление.
If you surpass, the CIR,|Если вы превзойдете, CIR,
the bits will be marked.|биты будут отмечены.
I'll get out of the way so you can see it.|Я уйду с дороги, чтобы ты это увидел.
With D.|Вместе с Д.
I'll put it in quotes.|Я заключу это в кавычки.
Quotes DE.|Цитаты DE.
Okay?|Ладно?
So if you go beyond your 256,|Итак, если вы выйдете за пределы своих 256,
which is what they're guaranteeing you,|что они вам гарантируют,
because this is what you said you,|потому что это то, что вы сказали вам,
hey, I need 256.|эй, мне нужно 256.
This is my, you know, that's my analysis.|Это мой, вы знаете, это мой анализ.
This is what I found out that I require.|Это то, что я выяснил, что мне нужно.
So they can guarantee you up to,|Таким образом, они могут гарантировать вам до,
key word, up to 256.|ключевое слово, до 256.
All right, but since you purchased an access rate of a T1,|Хорошо, но поскольку вы приобрели скорость доступа T1,
so, you're saying, hey telco,|Итак, вы говорите, эй, телеком,
if you have the bandwidth available,|если у вас есть доступная пропускная способность,
I would like to go up to that T1 speed,|Я бы хотел разогнаться до скорости Т1,
if it's available.|если он доступен.
Sure, why not, all right?|Конечно, а почему бы и нет, хорошо?
It could be at 1 in the morning,|Это могло быть в час ночи,
it could be you know, 1 in the afternoon.|это может быть вы знаете, час дня.
And you may be sending data, or you may be backing up things or,|И вы можете отправлять данные, или вы можете делать резервные копии, или,
what do you call this synchronizing your domain controllers, what have you.|как вы это называете синхронизацией контроллеров домена, что у вас есть.
Right, DNS servers.|Верно, DNS-серверы.
It could possibly get to 1.544 megabits per second if the telco provide, has the capability.|Он мог бы достичь 1,544 мегабит в секунду, если бы у оператора связи была такая возможность.
Meaning, that they have that bandwidth available for you because you're actually sharing that bandwidth with other people.|Это означает, что у них есть доступная пропускная способность для вас, потому что вы фактически делитесь этой пропускной способностью с другими людьми.
Remember earlier, I said that it was,|Помните, раньше я сказал, что это было,
things you call frctional T1s,|вещи, которые вы называете фракционными Т1,
people share T1 lines.|люди разделяют линии T1.
So they sell them in 64 kilobit chunks.|Поэтому они продают их кусками по 64 килобита.
So you're sharing this line, that's why you're getting this frame relay.|Итак, вы разделяете эту строку, вот почему вы получаете это Frame Relay.
So, that's why they tell you,|Итак, вот почему они говорят вам,
all right, we can guarantee you up to.|хорошо, мы можем гарантировать вам до.
Doesn't mean you have 256|Это не значит, что у вас 256
kilobits per second at all times,|килобит в секунду постоянно,
it means you can go up to 256 and they'll guarantee it.|это означает, что вы можете увеличить количество до 256, и они это гарантируют.
Beyond that,|За гранью этого,
since you got an access rate, of,|поскольку у вас есть скорость доступа,
of T1, if it's available,|Т1, если есть,
they will send it.|они пришлют это.
But again, those bits will be marked and later on, when we do show commands,|Но опять же, эти биты будут отмечены, и позже, когда мы покажем команды,
these are some of the things that you want to look at.|вот некоторые вещи, на которые вы хотите взглянуть.
Cuz if you're constantly getting bits that are being marked DE, and they start growing, growing, growing,|Потому что, если вы постоянно получаете биты с маркировкой DE, и они начинают расти, расти, расти,
growing and growing,|растет и растет,
then you need to purchase more bandwidth.|тогда вам нужно приобрести дополнительную пропускную способность.
Now that's just one of the ways that we monitor our network.|Это лишь один из способов мониторинга нашей сети.
You'll see when we get into the monitoring of our devices and when we get to that particular session.|Вы увидите, когда мы перейдем к мониторингу наших устройств и когда перейдем к конкретному сеансу.
We'll talk about other types of things that we can do to monitor our network.|Мы поговорим о других вещах, которые мы можем делать для мониторинга нашей сети.
Our bandwidth and stuff like that, utilization.|Наша пропускная способность и тому подобное, использование.
But, when using frame relay, definitely,|Но при использовании Frame Relay, безусловно,
one of the things we wanna pay attention to, is that DE, right?|одна из вещей, на которую мы хотим обратить внимание, это DE, верно?
Those DE bits.|Эти биты DE.
That, if they're marked,|Что, если они отмечены,
that means that hey,|это означает, что эй,
I'm going beyond my CIR,|Я выхожу за пределы своего CIR,
my committed information rate.|моя преданная скорость передачи информации.
So that means my analysis wasn't as good,|Значит, мой анализ был не таким хорошим,
or hey, we're doing a lot more business.|или эй, у нас гораздо больше бизнеса.
We're transferring a lot more information out the, you know,|Мы передаем намного больше информации из, вы знаете,
throughout the internet.|по всему Интернету.
Hopefully that's the case.|Надеюсь, это так.
It's not somebody watching movies on YouTube.|Это не кто-то смотрит фильмы на YouTube.
Then that's why it's causing your bandwidth.|Тогда вот почему это вызывает вашу пропускную способность.
But again,|Но опять же,
we'll get into that in the other session.|мы поговорим об этом на другом сеансе.
How you can find out that Joe's been watching YouTube movies throughout the day instead of doing what he's supposed to do.|Как узнать, что Джо весь день смотрел фильмы на YouTube, вместо того, чтобы делать то, что ему положено.
Right?|Правильно?
So definitely, if you have a frame relay connection, these are the two,|Итак, определенно, если у вас есть соединение с ретрансляцией кадров, это два,
first two things that you need to be concerned with.|Первые две вещи, о которых вам нужно позаботиться.
All right, because your, you need to,|Хорошо, потому что тебе нужно,
when you call your provider,|когда вы звоните своему провайдеру,
they're gonna ask you, well, what's your bandwidth, how much bandwidth do you want?|они спросят вас: ну, какая у вас пропускная способность, какая пропускная способность вам нужна?
Because you can actually pay less money using a frame relay,|Поскольку вы можете платить меньше денег, используя Frame Relay,
and you can still make it look like a T1.|и вы все еще можете сделать его похожим на T1.
Now remember, you're not using eight you can make it, I'm sorry,|Теперь помните, вы не используете восемь, вы можете сделать это, извините,
you can make it look like an lease connection, right?|вы можете сделать так, чтобы это выглядело как договор аренды, не так ли?
Remember a lease, we're using HDLC, PPP yeah you need that bandwidth at all times.|Помните об аренде, мы используем HDLC, PPP. Да, вам всегда нужна эта полоса пропускания.
Well you can make frame relay look like a leased line, but pay like if it was a circuit switch.|Что ж, вы можете сделать Frame Relay похожим на выделенную линию, но заплатите, как если бы это был переключатель цепи.
Very cheap, very inexpensive, all right,|Очень дешево, очень недорого, хорошо,
based on your CIR and your access rate.|на основе вашего CIR и вашей скорости доступа.
Because when those two numbers become the same, you know, you can actually,|Потому что, когда эти два числа становятся одинаковыми, вы знаете, что на самом деле вы можете
what they call burst, or maximum burst,|то, что они называют взрывом или максимальной скоростью,
or MBR, you can go up to.|или MBR, вы можете перейти на.
If it goes beyond the T1 obvi,|Если он выходит за пределы T1 obvi,
if it goes beyond that T1,|если он выходит за пределы этого T1,
you can kiss that those bits goodbye.|Вы можете поцеловать эти кусочки на прощание.
But anything up to the access rate,|Но что угодно, вплоть до скорости доступа,
if the telco has the capabilities of it,|если у телекоммуникационной компании есть возможности,
definitely they'll, they'll, you know,|определенно они будут, они, вы знаете,
it'll go through, but again,|это пройдет, но опять же,
they will be marked with the DEs.|они будут отмечены DE.
Now, I was gonna say something, oh, when we're using frame relay, you're not gonna use PPP or ACLC, when you do frame relay,|Я собирался кое-что сказать, о, когда мы используем Frame Relay, вы не будете использовать PPP или ACLC, когда вы используете Frame Relay,
your encapsulation is frame relay.|ваша инкапсуляция - это Frame Relay.
When you do the end cap,|Когда вы делаете заглушку,
you do end cap frame relay.|вы делаете оконечное реле кадра.
Now there's something called signaling methods, all right, within frame relay,|Теперь есть что-то, называемое методами сигнализации, внутри Frame Relay,
which is, you have Cisco, where you look for the default for Cisco devices.|то есть у вас есть Cisco, где вы ищите устройства Cisco по умолчанию.
All right, that's your LMIs.|Хорошо, это ваши LMI.
And you also have ANSI.|А еще у вас есть ANSI.
And, I always forget this last one,|И я всегда забываю это последнее,
which is Q933.A, or Q.933A, or something of that nature.|это Q933.A, или Q.933A, или что-то в этом роде.
I never can remember where that dot is or Q9333A, something like that.|Я никогда не могу вспомнить, где эта точка или Q9333A, что-то в этом роде.
But, normally it's,|But, normally it's,
it's either Cisco or IETF.|it's either Cisco or IETF.
I mean Cisco, ANSI or that last one I just mentioned the Q9333, or 933A, okay?|I mean Cisco, ANSI or that last one I just mentioned the Q9333, or 933A, okay?
But normally, when we configure this,|But normally, when we configure this,
it's going to be Cisco router so we're gonna have it DLMI default at Cisco.|it's going to be Cisco router so we're gonna have it DLMI default at Cisco.
Now, you yourself,|Now, you yourself,
now I'll show you the lab back here this is the basic,|now I'll show you the lab back here this is the basic,
one that we're gonna start with.|one that we're gonna start with.
Cuz remember, you got that huge lab,|Cuz remember, you got that huge lab,
which has a frame relay connection in the middle.|which has a frame relay connection in the middle.
Your devices, normally, I say remember the S00's have the clock rates.|Your devices, normally, I say remember the S00's have the clock rates.
Remember, that's not the case.|Remember, that's not the case.
Your provider,|Your provider,
is where the clock rate goes.|is where the clock rate goes.
You're provider is the DCE.|You're provider is the DCE.
Routers, test question,|Routers, test question,
sounds like it, at least on my exams.|sounds like it, at least on my exams.
Test questions.|Test questions.
Your routers, by default, are DTE.|Your routers, by default, are DTE.
Data terminating equipment.|Data terminating equipment.
It is your provider that gives you the clocking,|It is your provider that gives you the clocking,
the synchronization for information to go across, okay?|the synchronization for information to go across, okay?
But, as far as the test is concerned,|But, as far as the test is concerned,
one of the things that you need to be aware of, as far as this, right now.|one of the things that you need to be aware of, as far as this, right now.
Cuz again, I'm breaking this down into little pieces so you can understand frame relay and then we can actually do the lab.|Cuz again, I'm breaking this down into little pieces so you can understand frame relay and then we can actually do the lab.
The first two things, the first two terminology terms is the CIR,|The first two things, the first two terminology terms is the CIR,
which is the committed information rate,|which is the committed information rate,
that's what's guaranteed.|that's what's guaranteed.
And the access rate, where you would like to go at if the bandwidth is available at your provider, okay?|And the access rate, where you would like to go at if the bandwidth is available at your provider, okay?
Again, and again, you will not,|Again, and again, you will not,
you will not be using PPP or HDLC.|you will not be using PPP or HDLC.
Also, I wanna repeat this again.|Also, I wanna repeat this again.
You can make frame relay look like a leased connection, all right?|You can make frame relay look like a leased connection, all right?
If you can match these two numbers, right?|If you can match these two numbers, right?
You can make then, you know you can be going at 1.544 megabits per second.|You can make then, you know you can be going at 1.544 megabits per second.
But, making it paying for,|But, making it paying for,
like if you were paying for a circuit switch, like an ISDN line.|like if you were paying for a circuit switch, like an ISDN line.
So you can make it look like a leased line.|So you can make it look like a leased line.
All right, frame relay.|All right, frame relay.
Just remember that anything above your access rate,|Just remember that anything above your access rate,
anything above your access rate.|anything above your access rate.
Those bits will be, or anything above,|Those bits will be, or anything above,
I'm sorry, anything above your CIR,|I'm sorry, anything above your CIR,
anything above your CIR,|anything above your CIR,
will be marked with DE which means discard eligible,|will be marked with DE which means discard eligible,
that those are eligible to be discarded.|that those are eligible to be discarded.
Because if the bandwidth is not there,|Because if the bandwidth is not there,
boom.|boom.
And that is a trigger for you to,|And that is a trigger for you to,
when you're monitoring your network,|when you're monitoring your network,
to say hey, these DE bits keep growing,|to say hey, these DE bits keep growing,
growing, growing and growing.|growing, growing and growing.
I'm probably gonna have to call back my provider and increase the number of bandwidth, my number of my CIR to something greater than what I have.|I'm probably gonna have to call back my provider and increase the number of bandwidth, my number of my CIR to something greater than what I have.
It could be the case that you may have to switch over to a lease connection.|It could be the case that you may have to switch over to a lease connection.
But again,|But again,
you have to create that documentation for the justification to your boss, okay?|you have to create that documentation for the justification to your boss, okay?
Because if not, there's you know,|Because if not, there's you know,
people are not just going to dish out money just like that.|people are not just going to dish out money just like that.
If you're the boss, then hey,|If you're the boss, then hey,
it's your money that you're gonna spend.|it's your money that you're gonna spend.
Make sure that,|Make sure that,
this is just not a one time thing.|this is just not a one time thing.
That happened one week and then doesn't happen again until,|That happened one week and then doesn't happen again until,
you know, the following month.|you know, the following month.
If it's happening on an ongoing basis and you're monitoring this.|If it's happening on an ongoing basis and you're monitoring this.
And you should be monitoring this,|And you should be monitoring this,
and creating you know, charts and what have you.|and creating you know, charts and what have you.
Obviously through third party software,|Obviously through third party software,
okay?|okay?
That you can see hey,|That you can see hey,
my balance is usually at a peak already.|мой баланс обычно уже на пике.
So, you need to manage that,|Итак, вам нужно управлять этим,
you need to manage that.|вам нужно управлять этим.
All right, so for this particular part of frame relay, we're done.|Итак, с этой конкретной частью Frame Relay мы закончили.
Just keep these two terms in your mind,|Просто запомните эти два термина,
especially for your certification purposes.|особенно для целей сертификации.
I'll see you in the next one.|Увидимся в следующем.
[BLANK AUDIO].|[ПУСТОЙ АУДИО].