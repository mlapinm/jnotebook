D:\mailCloud\prjother\tmp\1\c106_configuring Frame-relay.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
All right, now that we've run over the, I guess the terminology, the CIR,|Хорошо, теперь, когда мы рассмотрели, я полагаю, терминологию, CIR,
the access rate, the DLCI, and we actually looked at more or less a configuration of how we're gonna do this, let's go ahead|скорость доступа, DLCI, и мы фактически рассмотрели более или менее конфигурацию того, как мы будем это делать, давайте продолжим
and configure frame relay.|и настроить ретрансляцию кадров.
And we'll take it a step at a time.|И мы будем делать это шаг за шагом.
We'll first, you know, take a look at our scheme.|Знаете, сначала мы рассмотрим нашу схему.
We're gonna take a look at the routers that we're using, the configuration, and the cloud.|Мы собираемся взглянуть на маршрутизаторы, которые мы используем, конфигурацию и облако.
Since we're not using a router, we're actually using the frame relay cloud,|Поскольку мы не используем маршрутизатор, мы фактически используем облако ретрансляции кадров,
we're gonna have to configure that as well.|нам нужно будет настроить и это.
Well, is there any questions on the frame relay cloud?|Ну есть вопросы по облаку Frame Relay?
No, of course not, and you won't have to configure frame relay, but you'll need, you'll need to understand it,|Нет, конечно, нет, и вам не нужно будет настраивать Frame Relay, но вам нужно, вам нужно это понять,
all right?|отлично?
So let's first, and you've seen this configuration already, but we'll look at it again.|Итак, давайте сначала, и вы уже видели эту конфигурацию, но мы рассмотрим ее еще раз.
Enable, show start.|Включить, показать начало.
First of all,|Прежде всего,
the way we're going to be configuring frame relay is in a point to point method.|мы собираемся настраивать ретрансляцию кадров по принципу точка-точка.
Subinterfaces, all right.|Сабинтерфейсы, все в порядке.
So the encapsulation is going to go under the physical, the physical interface,|Таким образом, инкапсуляция будет проходить под физическим, физическим интерфейсом,
and you're obviously going to turn the physical interface on.|и вы, очевидно, собираетесь включить физический интерфейс.
But we're gonna leave that for last.|Но мы оставим это напоследок.
We're gonna turn the physical interfaces on last,|Мы собираемся включить физические интерфейсы в последнюю очередь,
that way we don't get interrupted with any kind of updates or anything like that.|таким образом, нас не прерывают никакие обновления или что-то в этом роде.
So we'll just turn it on last.|Так что мы просто включим его в последнюю очередь.
Once we put the encapsulation, we're gonna create the subinterface, and we're gonna make it match the DLCI, right,|Как только мы поместим инкапсуляцию, мы создадим субинтерфейс, и мы сделаем так, чтобы он соответствовал DLCI, верно,
the DLCI number, the data link connection identify number.|номер DLCI, идентификационный номер соединения канала передачи данных.
We're going to put in an IP address and put in the DLCI.|Мы собираемся ввести IP-адрес и вставить DLCI.
And we'll do the same thing for the other subinterface,|И мы сделаем то же самое для другого субинтерфейса,
cuz each router is going to have two subinterfaces with a subnet, obviously,|потому что каждый маршрутизатор будет иметь два подинтерфейса с подсетью, очевидно,
a subnet for each, different subnets in each, and different DLCIs for each subinterface, which is that permanent virtual circuit.|подсеть для каждой, разные подсети в каждой и разные DLCI для каждого подинтерфейса, который является постоянным виртуальным каналом.
All right?|Отлично?
So, I mean, the configuration is identical on every router.|Итак, я имею в виду, что конфигурация идентична на каждом маршрутизаторе.
The only difference is gonna be that this DLCI will be 201,|Единственная разница в том, что этот DLCI будет 201,
the IP address here, you can see.|здесь вы видите IP-адрес.
We start at 24's all the way across to make it very simple.|Мы начинаем с 24-го числа, чтобы сделать его очень простым.
This will be dot 1, this will be dot 2.|Это будет точка 1, это будет точка 2.
So this is going from 2 to 1, 1 to 2.|Итак, это идет от 2 к 1, 1 к 2.
That's what these DLCIs are all about.|Вот для чего все эти DLCI.
So you have network 1.0,|Итак, у вас есть сеть 1.0,
2.0, and 3.0, okay?|2.0 и 3.0, ладно?
Very simple, very simple configuration.|Очень простая, очень простая конфигурация.
Once you get to the cloud, or once we get to the cloud.|Как только вы попадете в облако, или как только мы перейдем в облако.
Cuz the, I can do a show start in every router,|Потому что я могу запустить шоу в каждом роутере,
it'll be looking at the same thing.|он будет смотреть на то же самое.
Depending on the serial interfaces that we connected,|В зависимости от подключенных последовательных интерфейсов,
which we're already connected to.|к которому мы уже подключены.
Let me show you that.|Позвольте мне показать вам это.
You see, we're using, you know, Router1,|Видите ли, мы используем, вы знаете, Router1,
Serial1, Router2,|Последовательный1, Маршрутизатор2,
Serial2, Router3, Serial3.|Последовательный 2, Маршрутизатор 3, Последовательный 3.
And again, for simplistic sakes.|И снова для упрощения.
That's why I'm doing that.|Вот почему я это делаю.
So in the Serial1, we actually advert, not advertise, but we tell, hey.|Итак, в Serial1 мы на самом деле рекламируем, а не рекламируем, но мы говорим, привет.
Under Serial1,|Под Serial1,
we have two DLCIs, and this is what they're trying to connect to logically.|у нас есть два DLCI, и это то, к чему они пытаются логически подключиться.
Cuz DLCI 102s, routers 1 to 2, and DLCI 103 is routers 1 to 3.|Потому что DLCI 102s, маршрутизаторы с 1 по 2 и DLCI 103 - это маршрутизаторы с 1 по 3.
So we're giving it an actual description for each DLCI.|Итак, мы даем фактическое описание для каждого DLCI.
And then we have it for two and then we have it for three.|Потом у нас это на двоих, а потом на троих.
Then in the actual frame relay, under the connections,|Затем в самом Frame Relay под соединениями
there is where we make the actual virtual connection to what we wanna do.|именно здесь мы устанавливаем реальную виртуальную связь с тем, что мы хотим делать.
From port 01, then you're going from 1 to 2, to port zero two,|From port 01, then you're going from 1 to 2, to port zero two,
that goes back to routers 2 through 1.|that goes back to routers 2 through 1.
So that is where we actually create the the, the frame relay connections.|So that is where we actually create the the, the frame relay connections.
Now, let me see something under the serial.|Now, let me see something under the serial.
And, you can see here,|And, you can see here,
under the serial, in the frame relay cloud, make sure the port status is on.|under the serial, in the frame relay cloud, make sure the port status is on.
Well, again, for this lab, you won't have to do it.|Well, again, for this lab, you won't have to do it.
But what's important here is that LMI.|But what's important here is that LMI.
Remember I talked about the signaling method?|Remember I talked about the signaling method?
The signaling method that you have Cisco by default on Cisco routers,|The signaling method that you have Cisco by default on Cisco routers,
you have ANSI, and then Q9338.|you have ANSI, and then Q9338.
Those are the signaling methods that frame relay uses.|Those are the signaling methods that frame relay uses.
And obviously, I'm gonna use Cisco as the default.|And obviously, I'm gonna use Cisco as the default.
So what we're going to do, we're actually gonna remove everything from the frame relay cloud.|So what we're going to do, we're actually gonna remove everything from the frame relay cloud.
Remove.|Remove.
And then remove.|And then remove.
We're gonna go into each one and take everything out.|We're gonna go into each one and take everything out.
We're gonna do everything from scratch.|We're gonna do everything from scratch.
We removed that, right?|We removed that, right?
Yeah, removed, all right.|Yeah, removed, all right.
Serial2, remove, remove.|Serial2, remove, remove.
Okay.|Okay.
Serial3, remove, and then remove.|Serial3, remove, and then remove.
All right, so now there should be nothing under each,|All right, so now there should be nothing under each,
01, 02, or 03 in the frame relay.|01, 02, or 03 in the frame relay.
Everything is empty.|Everything is empty.
So we took out everything from the frame relay cloud, and now what we're gonna do is just do an erase start on the routers.|So we took out everything from the frame relay cloud, and now what we're gonna do is just do an erase start on the routers.
You see, we have RIP running on there as well.|You see, we have RIP running on there as well.
So were gonna do an ERASE START.|So were gonna do an ERASE START.
All right.|All right.
[BLANK_AUDIO]|[BLANK_AUDIO]
And then just reload.|And then just reload.
And we'll do that through all the routers so we have blank,|And we'll do that through all the routers so we have blank,
a blank slate to work with, do everything from scratch.|a blank slate to work with, do everything from scratch.
[BLANK_AUDIO]|[BLANK_AUDIO]
And, just so you know, if you close the packet trace, like,|And, just so you know, if you close the packet trace, like,
this router I want to close the rou the router, the, the window for the router as it's booting up, it won't take it, changes won't take effect.|this router I want to close the rou the router, the, the window for the router as it's booting up, it won't take it, changes won't take effect.
So I'll just minimize.|So I'll just minimize.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right.|All right.
Okay, so we're gonna start from Router 1.|Okay, so we're gonna start from Router 1.
We're gonna give it a name.|We're gonna give it a name.
We're gonna go straight into the interface that we're going to be working with.|We're gonna go straight into the interface that we're going to be working with.
We're gonna put the encapsulation and we're gonna create our subinterfaces.|We're gonna put the encapsulation and we're gonna create our subinterfaces.
We'll first create the subinterface for DLCI 102, and then we'll create the second subinterface for DLCI 103.|We'll first create the subinterface for DLCI 102, and then we'll create the second subinterface for DLCI 103.
All right, we'll take it nice and easy,|All right, we'll take it nice and easy,
the first one, so we can see how that is.|the first one, so we can see how that is.
All right.|All right.
Let's maximize this.|Let's maximize this.
Our router has rebooted.|Our router has rebooted.
You know this already.|You know this already.
You're gonna say, no, we're gonna do things from scratch.|You're gonna say, no, we're gonna do things from scratch.
ENABLE, CONFIG T.|ENABLE, CONFIG T.
Let's give it a name, HOSTNAME R1.|Let's give it a name, HOSTNAME R1.
All right, so INT S0/0/0, Enter.|All right, so INT S0/0/0, Enter.
Let's do a NO SHUT, turn that interface on.|Let's do a NO SHUT, turn that interface on.
Remember, we don't need to put clock rates.|Remember, we don't need to put clock rates.
The frame relay cloud, our provider that's giving us the clocking.|The frame relay cloud, our provider that's giving us the clocking.
And then we'll do the ENCAP, which is frame-relay.|And then we'll do the ENCAP, which is frame-relay.
I tabbed, as you can see.|I tabbed, as you can see.
All right, so, we're done as far as the physical interface,|All right, so, we're done as far as the physical interface,
but now we need to create our subinterface.|but now we need to create our subinterface.
So I go back to the interface, I'm gonna put dot 102, but in order to create the subinterface, I have to tell it it's POINT-TO-POINT.|So I go back to the interface, I'm gonna put dot 102, but in order to create the subinterface, I have to tell it it's POINT-TO-POINT.
You don't do that, you won't be able to create the subinterface.|You don't do that, you won't be able to create the subinterface.
Now we're going to do frame relay DLCI.|Now we're going to do frame relay DLCI.
Oh, sorry.|Oh, sorry.
Interface-dlci.|Interface-dlci.
And this is DLCI 102.|And this is DLCI 102.
And now we put the IP address, which I forgot the scheme.|And now we put the IP address, which I forgot the scheme.
It's 1, okay, it's 1 dot, okay, 1.1.|It's 1, okay, it's 1 dot, okay, 1.1.
Lovely, this touch pad just works great.|Как мило, эта сенсорная панель просто отлично работает.
Here we go.|Вот так.
Laptop gone wild.|Ноутбук сошел с ума.
All right?|Отлично?
IP address192.168.1.1,|IP-адрес 192.168.1.1,
255.255.255.0, enter, done.|255.255.255.0, введите, готово.
Simple.|Просто.
All right.|Отлично.
So now let's do a couple of spaces here.|Итак, теперь давайте сделаем здесь пару пробелов.
So we did the encapsulation under the physical interface.|Итак, мы сделали инкапсуляцию под физический интерфейс.
We turned it on.|Мы его включили.
And then we did our sub interface.|А затем мы сделали наш вспомогательный интерфейс.
But you must type point to point.|Но вы должны вводить от точки к точке.
Once we did that.|Однажды мы это сделали.
We did frame relay interface DLCI 102.|Мы сделали интерфейс Frame Relay DLCI 102.
And then put the IP address.|А затем введите IP-адрес.
Now we're going to do the sub interface for 103.|Теперь займемся субинтерфейсом для 103.
Which is a connection from router one to router three.|Это соединение от первого маршрутизатора к третьему.
I'm doing an up arrow, just to save time and mistakes, 103.|Я делаю стрелку вверх, просто чтобы сэкономить время и ошибки, 103.
Point to point.|Точка-точка.
Interface DL, or frame relay interface DLCI 103.|Интерфейс DL или интерфейс Frame Relay DLCI 103.
And then, the IP address will be 3.1.|И тогда IP-адрес будет 3.1.
This is, no, we're three.|Это нет, нас трое.
[BLANK_AUDIO]|[BLANK_AUDIO]
Enter.|Войти.
Done.|Готово.
I'll do control Z, WR.|Я сделаю контроль Z, WR.
Which you would do exit exit copy run start.|Что бы вы сделали, чтобы выйти, выйти из копии, запустить запуск.
Remember.|Помните.
So let's do a show start.|Итак, давайте начнем шоу.
[BLANK_AUDIO]|[BLANK_AUDIO]
All right.|Отлично.
And then we see the same.|И тогда мы видим то же самое.
We see our encapsulation.|Видим нашу инкапсуляцию.
We did turn on the interface even though I said we weren't.|Мы включили интерфейс, хотя я сказал, что нет.
Oh well.|Ну что ж.
And then we did make sure that the sub interface, just to make sure that we're in the right, we did put the right DLCI in|И затем мы убедились, что вспомогательный интерфейс, просто чтобы убедиться, что мы в правильном месте, мы поместили правильный DLCI в
the right sub interface.|правый вспомогательный интерфейс.
And then, the IP address for that particular PVC.|И затем IP-адрес для этого конкретного PVC.
And then, 103, 103 and then the 3.1.|Затем 103, 103, а затем 3.1.
And the right mask.|И правильная маска.
Okay, we're done with router one.|Хорошо, мы закончили с первым маршрутизатором.
It's that simple, that simple.|Это так просто, так просто.
Let's go to router two.|Пойдем к роутеру два.
Maximize the screen there.|Увеличьте экран там.
We're gonna say no, no.|Мы скажем нет, нет.
Enable, config t.|Включить, настроить t.
Host name, r two.|Имя хоста, r два.
We will now interface add zero slash zero.|Теперь мы добавим в интерфейс нулевую косую черту.
Slide zero, slide zero.|Сдвиньте ноль, сдвиньте ноль.
Encap frame relay.|Encap frame relay.
Lets do another shot.|Давайте сделаем еще один снимок.
We're going to create the sub interface now.|Сейчас мы собираемся создать вспомогательный интерфейс.
Now, we're gonna create a sub interface.|Теперь мы собираемся создать вспомогательный интерфейс.
Now this is router two that is facing router one.|Теперь это второй маршрутизатор, обращенный к маршрутизатору 1.
So, inter, sub interface 201.|Итак, внутренний, подчиненный интерфейс 201.
Point to point.|Точка-точка.
[BLANK_AUDIO]|[BLANK_AUDIO]
Frame relay, interface DLCI.|Frame relay, интерфейс DLCI.
Now again, this is going where?|Опять же, это куда?
From router two to router one, 201.|От второго маршрутизатора к первому, 201.
All right, and then the IP address will be the second available IP address.|Хорошо, и тогда IP-адрес будет вторым доступным IP-адресом.
For the 1 dot 0 network IP address.|Для IP-адреса сети 1 точка 0.
192 dot 168 dot 192.|192 точки 168 точек 192.
255255255 dot 0.|255255255 точка 0.
Now, the IP schemes.|Теперь о схемах IP.
You can put whatever IP scheme you want.|Вы можете поставить любую схему IP, какую захотите.
Doesn't really matter.|Неважно.
You can use public IPs to try to get a little closer.|Вы можете использовать общедоступные IP-адреса, чтобы попытаться приблизиться.
Use a slash 30, what have you, it doesn't matter, as long as the,|Используйте косую черту 30, что у вас есть, это не имеет значения, пока,
you know, it works.|знаете, это работает.
But don't try, one of the things is, don't try to use, summarize addresses.|Но не пытайтесь, одна из вещей - не пытайтесь использовать, суммируйте адреса.
Because that's not the way, that's not the purpose of that, okay.|Потому что это не так, не в этом цель, хорошо.
So be careful.|Так что будьте осторожны.
Be careful.|Быть осторожен.
I've seen labs that have been given to me with gateways and summarized addresses, so it's.|Я видел предоставленные мне лаборатории со шлюзами и обобщенными адресами, так что это так.
No.|Нет.
All right.|Отлично.
Now we did two to one.|Теперь мы сделали два к одному.
Now we're gonna do two to three.|Теперь сделаем два-три.
So we're gonna do sub interface 203.|Итак, мы сделаем подинтерфейс 203.
Oops.|Ой.
There it is right there.|Вот оно прямо здесь.
Okay.|Ладно.
Then we do frame relay interface DLCI.|Затем делаем интерфейс Frame Relay DLCI.
203.|203.
Now this network is the 2 network.|Теперь эта сеть является 2 сетью.
So this will be 2.1.|Итак, это будет 2.1.
Let's change that.|Давай изменим это.
Done.|Готово.
DWR that is control z.|DWR, то есть элемент управления z.
Let's do a show start just to verify just make sure I got all my ducks in a row here.|Давайте начнем шоу, просто чтобы убедиться, просто убедитесь, что я собрал здесь всех своих уток подряд.
All right so we end cap frame relay onto the physical interface 201, 201.|Хорошо, мы завершаем ретрансляцию кадров на физическом интерфейсе 201, 201.
1.2, it's part of the same network going this way.|1.2, это часть той же сети, идущей в этом направлении.
203, 203, 2.1 because in the 2 network coming down this way.|203, 203, 2.1, потому что во 2 сети идет именно так.
Cool?|Прохладно?
We should be good to go.|Мы должны быть в порядке.
Let's minimize that.|Давайте минимизируем это.
So you see, this is the 2 network, 2.1.|Итак, вы видите, это сеть 2, 2.1.
And that's what we did for that one [BLANK_AUDIO]|Вот что мы сделали для этого [BLANK_AUDIO]
Coming this way, and then this will be 102|Идут сюда, а потом будет 102
coming this way, all right?|иду сюда, хорошо?
Now, we gotta go to router three.|Теперь нам нужно перейти к третьему маршрутизатору.
And now, we'll be the two and the three network, all right?|А теперь мы будем двумя и тремя сетями, хорошо?
We're gonna say no.|Мы скажем нет.
[BLANK_AUDIO]|[BLANK_AUDIO]
Enable, config T, host name.|Включить, конфигурация T, имя хоста.
R three interface S0/0/0.|R три интерфейса S0 / 0/0.
Encap.|Encap.
Frame relay.|Ретрансляция кадров.
Shot.|Выстрел.
A lot of tabbing a lot of tabbing going on.|Много табуляции, много табуляции.
Remember you've got to type it out.|Помните, вы должны это напечатать.
You can't tab in your test.|Вы не можете использовать табуляцию в своем тесте.
All right, we're going to create the sub interface.|Хорошо, мы собираемся создать вспомогательный интерфейс.
Now at first, I mean, here you can choose what sub interface you want to do first.|Теперь, во-первых, я имею в виду, здесь вы можете выбрать, какой вспомогательный интерфейс вы хотите сделать в первую очередь.
I'm gonna do the sub interface going back to router two.|Я собираюсь вернуть вспомогательный интерфейс к маршрутизатору 2.
So what I do, this is router three going to router two.|Итак, что я делаю, это маршрутизатор три переходит к маршрутизатору два.
Point, don't forget that.|Дело, не забывайте об этом.
To point.|В точку.
Then, the interf-, frame-relay Interface DLCI 302,|Затем интерфейс DLCI 302 с ретрансляцией кадров,
going from router three to router two.|переход от маршрутизатора три к маршрутизатору два.
Then the IP address on this site still will be the 2.2, right?|Тогда IP-адрес на этом сайте по-прежнему будет 2.2, верно?
The 2.0 network.|Сеть 2.0.
So IP address, 192.168.2.2,|Итак, IP-адрес 192.168.2.2,
255, 255, 255.0.|255, 255, 255.0.
All right and then let's space this out a little bit.|Хорошо, а затем давайте немного разберемся.
We're going to do now for three, zero,|Мы собираемся сделать сейчас три, ноль,
one, from router three to router one.|один, от маршрутизатора три к маршрутизатору один.
So,up arrow, up arrow, up arrow.|Итак, стрелка вверх, стрелка вверх, стрелка вверх.
Sub interface but you'll want to remember the sub interface does not need to match the DLCI number.|Вспомогательный интерфейс, но вы должны помнить, что вспомогательный интерфейс не обязательно должен соответствовать номеру DLCI.
That will be, this is just a visualization purpose that we're doing this for.|То есть, это просто цель визуализации, для которой мы это делаем.
So when we look at it and say aha, that's DLCI 301.|Итак, когда мы смотрим на него и говорим ага, это DLCI 301.
All right now we're gonna do the interface, frame relay interface DLCI 301.|Хорошо, сейчас мы займемся интерфейсом, интерфейсом Frame Relay, DLCI 301.
And then this is three dot two.|И тогда это три точки два.
I don't remember doing the v network, did I?|Я не помню, как делал сеть v, не так ли?
On router one, I'll check that.|На первом роутере я это проверю.
And this would be 3.2.|И это будет 3,2.
All right, DWR, do show start.|Хорошо, DWR, начни показывать.
[BLANK_AUDIO]|[BLANK_AUDIO]
Let's check.|Давай проверим.
Encap frame relay, we turned it on.|Encap frame relay, мы его включили.
All right, 301, 301, 3.2, okay?|Хорошо, 301, 301, 3,2, хорошо?
And three zero two, three zero two, two dot two.|И три ноль два, три ноль два, две точки два.
Alright, let me check router one again,|Хорошо, позволь мне еще раз проверить первый маршрутизатор,
for some reason.|по какой-то причине.
I know I did it, I remember doing it, I think, when I, one, O three, yes I did.|Я знаю, что делал это, я помню, как делал это, я думаю, когда я, один, три, да, делал.
Alright, so we're done with the commands on the routers themselves.|Хорошо, мы закончили с командами на самих маршрутизаторах.
They're still not going to be able to communicate because we got to configure the cloud.|Они по-прежнему не смогут общаться, потому что нам нужно настроить облако.
Obviously, you know, I like using the cloud.|Очевидно, вы знаете, мне нравится использовать облако.
It's just a lot easier, cuz what you need to understand is where the DLC is and the point to point.|Это просто намного проще, потому что вам нужно понять, где находится DLC и что нужно делать.
That's what you need to understand, and the encapsulation type.|Вот что нужно понимать, и тип инкапсуляции.
And here you get to see the LMI as well.|И здесь вы также можете увидеть LMI.
But, I like using the frame relay cloud.|Но мне нравится использовать облако Frame Relay.
It just makes things a whole lot easier.|Это просто значительно упрощает жизнь.
Okay, now we have S1, S2 and S3.|Хорошо, теперь у нас есть S1, S2 и S3.
So let's go ahead and I'm going to bring this out this way.|Итак, давайте продолжим, и я собираюсь показать это таким образом.
All right, so we're going to go to serial 1, you see the LLI?|Хорошо, мы перейдем к серии 1, вы видите LLI?
It's Cisco, that's the signaling.|Это Cisco, это сигнализация.
The LCI, 102, that's a connection from router 1 to router 2.|LCI, 102, это соединение от маршрутизатора 1 к маршрутизатору 2.
That's it.|Вот и все.
Then we do the LCI 103,|Затем мы делаем LCI 103,
that's a connection from router 1 to router 3.|это соединение от маршрутизатора 1 к маршрутизатору 3.
No big deal.|Ничего страшного.
We're just telling, hey.|Мы просто говорим, эй.
These DLCIs?|Эти DLCI?
This is what they connect to.|Это то, к чему они подключаются.
That's all we're saying.|Это все, что мы говорим.
On serial one.|По серийному.
And just make sure.|И просто убедитесь.
Because the packet tracer.|Потому что трассировщик пакетов.
This maybe not checked.|Возможно, это не проверено.
Make sure that it is online.|Убедитесь, что он в сети.
All right?|Отлично?
On serial two, we have again, the same LMI.|На втором серийном опять же LMI.
We have, DLC 201.|У нас есть DLC 201.
There's a connection from router two to router one.|Есть соединение от маршрутизатора 2 к маршрутизатору 1.
Just click Add.|Просто нажмите «Добавить».
And then you have DLC 203.|А потом у вас есть DLC 203.
That's a connection from router two to router three.|Это соединение от второго маршрутизатора к третьему.
Okay.|Ладно.
Awesome.|Потрясающие.
And that's for serial two.|И это для второго сериала.
And then go to serial three.|А потом переходим к третьему сериалу.
Serial three, you have DLC 302,|Серийный номер три, у вас DLC 302,
which is from R2 to, I'm sorry,|что от R2 до, извините,
from R3, excuse me, to R2.|с R3, простите, на R2.
And you add, and then you have 301,|И вы добавляете, и тогда у вас есть 301,
which is a connection from router three to router one.|который представляет собой соединение от третьего маршрутизатора к маршрутизатору один.
And you click on it.|И вы нажимаете на нее.
So now we have all our connections, right?|Итак, теперь у нас есть все связи, верно?
That belong to or every DLCI that belongs to that particular interface it sees it on.|Они принадлежат или каждому DLCI, который принадлежит тому конкретному интерфейсу, на котором он его видит.
That's why the DLCs are ones that identify themselves to the frame to the cloud you need to advise them that on this serial, this is what's going on.|Вот почему DLC - это те, которые идентифицируют себя для кадра в облако, вам нужно сообщить им, что в этом сериале именно это и происходит.
So now we got our frame relay.|Итак, теперь у нас есть Frame Relay.
And we say, okay, so we want to do is make the connection.|И мы говорим, хорошо, поэтому мы хотим установить связь.
Let's make the connection first from router one to router two and back.|Давайте сначала подключимся от первого маршрутизатора к второму и обратно.
So we go to serial one,|Итак, переходим к серийному номеру,
there's a connection from router one to router two, okay.|есть соединение от роутера один к роутеру два, хорошо.
So on router two, or serial two I should say is the connection from router two back to router one.|Итак, на втором или втором маршрутизаторе я бы сказал, что это соединение от второго маршрутизатора к маршрутизатору один.
So we click Add.|Итак, мы нажимаем Добавить.
So now what we just did we made this connection right here.|Итак, теперь, что мы только что сделали, мы установили эту связь прямо здесь.
Okay.|Ладно.
So since we're still in serial one,|Итак, поскольку мы все еще в сериале,
let's do the connections from router one through router three.|давайте сделаем соединения от маршрутизатора один до маршрутизатора три.
So that means on router three, or serial three,|Это означает, что на третьем или третьем маршрутизаторе
is a connection from router three to router one.|это соединение от маршрутизатора три к маршрутизатору один.
And click Add.|И жмем Добавить.
So now we just did this connection right here.|Итак, теперь мы установили эту связь прямо здесь.
Now we just got one more connection to make and this is right here.|Теперь нам нужно установить еще одно соединение, и оно прямо здесь.
And there we go.|И вот так.
So we go to serial two.|Итак, мы переходим ко второму сериалу.
[BLANK_AUDIO]|[BLANK_AUDIO]
It's okay.|Все нормально.
Router two to router three.|Маршрутизатор два к маршрутизатору три.
And then serial three, router three to router two, and click add.|И затем последовательный порт три, маршрутизатор три к маршрутизатору два, и нажмите добавить.
And if you do this wrong because you're making the wrong type of connection because you may, you can overlap,|И если вы сделаете это неправильно, потому что вы делаете неправильный тип подключения, потому что это возможно, вы можете перекрыть,
it will let you know you can't make that type of connection.|он сообщит вам, что вы не можете установить соединение такого типа.
It will let you know if you did it right or wrong.|Он сообщит вам, правильно вы сделали это или нет.
It will scream at you right away.|Он сразу закричит на вас.
Okay?|Ладно?
So we have our three virtual connections through the frame relay cloud already made.|Итак, у нас есть три виртуальных подключения через облако Frame Relay.
So all we need to do now is choose a routing protocol.|Итак, все, что нам нужно сделать сейчас, это выбрать протокол маршрутизации.
And let's just use rip for simplistic sake.|И давайте просто воспользуемся рипом для упрощения.
And we have,|И у нас есть,
remember, we have two sub-interface, we have two networks per router.|помните, у нас есть два субинтерфейса, у нас две сети на роутер.
Here you have network 1.0 and 3.0.|Здесь у вас есть сети 1.0 и 3.0.
Here you have 2.0.|Вот и 2.0.
I mean 1.0 and 2.0.|Я имею ввиду 1.0 и 2.0.
Maybe you have 2.0 and 3.0.|Может у вас 2.0 и 3.0.
So here, this is the first one, we have 1.0 and 3.0.|Итак, это первый, у нас 1.0 и 3.0.
So let's advertise that.|Так что давайте это рекламировать.
[BLANK_AUDIO]|[BLANK_AUDIO]
So enable config t router rip version two.|Итак, включите конфигурацию router rip версии два.
Network 192.168.190.|Сеть 192.168.190.
Network 3.0, and can't forget the no auto summary command.|Network 3.0, и нельзя забывать о команде no auto summary.
DWR, okay?|DWR, хорошо?
So we advertise the networks that we are connected to, the 1.0 network and the 3.0.|Поэтому мы рекламируем сети, к которым мы подключены: сеть 1.0 и сеть 3.0.
Simple.|Просто.
Now we go to router two, which is network one still and network two.|Теперь мы переходим к маршрутизатору 2, который по-прежнему остается сетевым и вторым.
One and two.|Один и два.
Okay?|Ладно?
So, config T, router rip,|Итак, конфиг T, роутер рип,
version two net 192.168.1.0 and, 2.0.|версия вторая сеть 192.168.1.0 и, 2.0.
[BLANK_AUDIO]|[BLANK_AUDIO]
No auto summary.|Нет автоматического резюме.
[BLANK_AUDIO]|[BLANK_AUDIO]
And WR.|И WR.
And then we go to the last one.|А потом переходим к последнему.
[BLANK_AUDIO]|[BLANK_AUDIO]
And we have network two.|И у нас есть сеть два.
And we have network three.|А у нас есть сеть три.
So we go router, rip ver two net 192.168.2.0 and then 3.0.|Итак, мы идем к маршрутизатору, разрываем две сети 192.168.2.0 и затем 3.0.
No auto summary.|Нет автоматического резюме.
DWR.|DWR.
And from right here, we can do a show IP URL.|И прямо здесь мы можем показать IP-адрес.
And you're gonna see that you're already learning about the 1.0 network cause you're not directly connected to it.|И вы увидите, что уже изучаете сеть 1.0, потому что не подключены к ней напрямую.
So you're gonna ping 192.168.1.1 and you can ping 2.1, 2.2.|Итак, вы собираетесь пинговать 192.168.1.1 и можете пинговать 2.1, 2.2.
And.|И.
Well, 3.1, obviously, and 3.2.|Ну и 3.1, очевидно, и 3.2.
So you have connectivity going all the way across.|Таким образом, у вас есть возможность подключения на всем протяжении.
And that's it.|И это все.
Really, that's all there is.|Собственно, это все, что есть.
What you need to remember with frame-relay.|Что нужно помнить о Frame Relay.
The key words is the DLCIs, remember that the DLCIs, those are your data link connection identifiers,|Ключевые слова - это DLCI, помните, что DLCI - это идентификаторы вашего соединения по каналу передачи данных,
and they're local to your router.|и они локальны для вашего маршрутизатора.
Their main purpose is to identify you to the frame relay cloud.|Их основная цель - идентифицировать вас в облаке ретрансляции кадров.
So when you configure, the questions that you will be asked will be, hey.|Итак, когда вы настраиваете, вопросы, которые вам будут задавать, будут такими: эй.
When you're configuring frame relay, it will be under a sub-interface.|Когда вы настраиваете Frame Relay, это будет под-интерфейсом.
Each sub-interface will be considered a PBC.|Каждый подчиненный интерфейс будет считаться КПБ.
Each sub-interface will have its own DLCI.|Каждый подчиненный интерфейс будет иметь свой собственный DLCI.
And, each sub-interface will be in its own sub-net, all right?|И каждый субинтерфейс будет в своей собственной подсети, хорошо?
That's what you need to keep in mind.|Это то, что вам нужно иметь в виду.
Plus the fact of what we talked about.|Плюс факт того, о чем мы говорили.
We are committed information rate, your access rate,|Мы привержены скорости передачи информации, скорости вашего доступа,
the discard eligible bits, if they go above your CIR, all right?|отбрасываемые подходящие биты, если они превышают ваш CIR, хорошо?
And then this configuration.|А потом эта конфигурация.
This configuration is vital, all right?|Эта конфигурация жизненно важна, понятно?
Because you may get a press going, which is the best method to do frame relay,|Потому что вы можете получить прессу, это лучший метод для Frame Relay,
there it is right there, okay.|вот оно прямо там, хорошо.
Ended with the view that you need to imprint in your brain.|Заканчивается представлением, которое нужно запечатлеть в мозгу.
So, start.|Итак, приступим.
All right.|Отлично.
So remember that one.|Так что запомни это.
Okay?|Ладно?
In the next lesson I'll show a couple more show commands and couple more screens that you need to look at and know what they're talking about.|В следующем уроке я покажу еще пару команд show и еще пару экранов, на которые вам нужно посмотреть и понять, о чем они говорят.
But definitely, this is the preferred method of frame relay.|Но, безусловно, это предпочтительный метод ретрансляции кадров.
Yes, you can do static mappings.|Да, вы можете делать статические сопоставления.
They are, you're using that depending on the routing protocol that you're using.|Они есть, вы используете это в зависимости от протокола маршрутизации, который вы используете.
Because remember, frame relay is a non broadcast multi access network.|Помните, что Frame Relay - это нешироковещательная сеть с множественным доступом.
So you may, if you're using, let's say OSPF in a in a multi access type of environment,|Итак, если вы используете, скажем, OSPF в среде с множественным доступом,
it will not broadcast out, therefore you will have to do static mappings.|он не будет транслироваться, поэтому вам придется выполнять статические сопоставления.
That you would then, when you do your frame relay static frame relay IP map,|Что вы тогда, когда вы делаете свою статическую IP-карту Frame Relay,
you will be the destination IP address and the local DLCI.|вы будете IP-адресом назначения и локальным DLCI.
Destination IP address and the local DLCI.|IP-адрес назначения и локальный DLCI.
And never forget at the end of that statement you must put the word broadcast.|И никогда не забывайте, что в конце этого утверждения вы должны поставить слово трансляция.
All right ladies and gentlemen I'll see you in the next lesson.|Хорошо, дамы и господа, увидимся на следующем уроке.
We'll be learning some more show commands.|Мы изучим еще несколько команд шоу.
[BLANK_AUDIO]|[BLANK_AUDIO]