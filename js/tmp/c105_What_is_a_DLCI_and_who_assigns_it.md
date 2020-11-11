D:\mailCloud\prjother\tmp\1\c105_What is a DLCI and who assigns it.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
Alrighty welcome back.|Alrighty welcome back.
The next term that we're gonna talk about in frame relay is something called a DLCI.|The next term that we're gonna talk about in frame relay is something called a DLCI.
This is actually your data link connection, whoops,|This is actually your data link connection, whoops,
iden, whoo, identifier.|iden, whoo, identifier.
I think that's how you spell it,|I think that's how you spell it,
identifier.|identifier.
This number is getting to you by your provider.|This number is getting to you by your provider.
At the moment that you purchase your CIR.|At the moment that you purchase your CIR.
You get your access right.|You get your access right.
They're gonna give you a number.|They're gonna give you a number.
This DLCI, I'll show you here in the lab.|This DLCI, I'll show you here in the lab.
Will represent what's called a PVC.|Will represent what's called a PVC.
Which is a permanent virtual circuit.|Which is a permanent virtual circuit.
As you can see here in the lab, there are two networks, right?|As you can see here in the lab, there are two networks, right?
This is one network here.|This is one network here.
This is one network here.|This is one network here.
This is one network here.|This is one network here.
Obviously, we're using sub interfaces in order to create this.|Obviously, we're using sub interfaces in order to create this.
We have only one physical connection, so we create sub interfaces.|We have only one physical connection, so we create sub interfaces.
And, for each sub interface you'll have a data link connection identifier number.|And, for each sub interface you'll have a data link connection identifier number.
That, that is your PVC, your permanent virtual circuit.|That, that is your PVC, your permanent virtual circuit.
That DLCI is going to identify you to the frame relay switch or your provider.|That DLCI is going to identify you to the frame relay switch or your provider.
All right, to the cloud.|All right, to the cloud.
So that number will identify you to the cloud, to whoever your provider is.|So that number will identify you to the cloud, to whoever your provider is.
So it's important.|So it's important.
Those DLCIs, that's why I said, are local numbers.|Those DLCIs, that's why I said, are local numbers.
They're local numbers.|They're local numbers.
And that becomes important when you start doing things like frame relay map.|And that becomes important when you start doing things like frame relay map.
Lot of problems with people doing,|Lot of problems with people doing,
questions based on frame relay.|questions based on frame relay.
Cuz you really don't configure frame relay whatsoever.|Cuz you really don't configure frame relay whatsoever.
That's why I want you to get an understanding of what the CIR,|That's why I want you to get an understanding of what the CIR,
the access rate, and now the DLCI.|the access rate, and now the DLCI.
Cause you will get questions.|Cause you will get questions.
Hey, what is the path?|Hey, what is the path?
What DLCI.|What DLCI.
Wow, I didn't think I touched that.|Wow, I didn't think I touched that.
What DLCI would you use, well, I'm standing right in front of it.|What DLCI would you use, well, I'm standing right in front of it.
Okay?|Okay?
So, if you're trying to get from here to here.|So, if you're trying to get from here to here.
Is the DLCI 201 to 102.|Is the DLCI 201 to 102.
So once you identify yourself to the frame relay cloud he'll say, okay he wants to go to you know he, he's part of this company|So once you identify yourself to the frame relay cloud he'll say, okay he wants to go to you know he, he's part of this company
and he's trying to get to that DLCI.|and he's trying to get to that DLCI.
So you will get questions with something that looks like this and then you'll have to match up which pathway it's it's going to use.|So you will get questions with something that looks like this and then you'll have to match up which pathway it's it's going to use.
Well in order to get over here, this will be the pathway, this will be your local DLCI number for this particular permanent|Well in order to get over here, this will be the pathway, this will be your local DLCI number for this particular permanent
virtual circuit, for this sub-interface.|virtual circuit, for this sub-interface.
Cuz when you're configuring frame relay,|Cuz when you're configuring frame relay,
you do it du, let me rephrase that.|you do it du, let me rephrase that.
The preferred method to configure frame relay.|The preferred method to configure frame relay.
Sounds like a test question.|Sounds like a test question.
To avoid split horizon issues, and remember what split horizon is.|To avoid split horizon issues, and remember what split horizon is.
Split horizon is do not update me on the same interface that I just sent you information on.|Split horizon is do not update me on the same interface that I just sent you information on.
So to avoid that split horizon issue you go ahead and create sub interfaces.|So to avoid that split horizon issue you go ahead and create sub interfaces.
Each sub interface will be its own sub net.|Each sub interface will be its own sub net.
It will have its own DLCI, which creates that permanent virtual circuit that will be identified to the frame relay cloud.|It will have its own DLCI, which creates that permanent virtual circuit that will be identified to the frame relay cloud.
All right.|All right.
And that's how we're gonna configure this particular frame relay lab.|And that's how we're gonna configure this particular frame relay lab.
We'll take a look at it first and then we'll do it.|We'll take a look at it first and then we'll do it.
But this DLCI represents this connection path right here.|But this DLCI represents this connection path right here.
This DLCI is this pathway here cuz really what it's saying here is DLCI one to two.|This DLCI is this pathway here cuz really what it's saying here is DLCI one to two.
Two to one.|Two to one.
Two to three.|Two to three.
Three to two.|Three to two.
And this one should be three to one.|И это должно быть три к одному.
I have to change that.|Я должен это изменить.
Okay?|Ладно?
And they'll be three to one and then one to three.|И они будут три к одному, а затем один к трем.
All right?|Отлично?
Now again, it's.|Опять же, это.
Those are not gonna be the numbers that they use.|Это не будут числа, которые они используют.
They'll use completely different numbers.|Они будут использовать совершенно другие числа.
But this is so you understand the concept of what's going on.|Но это так, чтобы вы понимали концепцию того, что происходит.
You're creating these logical paths between each particular router.|Вы создаете эти логические пути между каждым конкретным маршрутизатором.
But again, it is your provider that gives you that DLCI number.|Но опять же, это ваш провайдер, который дает вам этот номер DLCI.
And you will then assign it to the PVC that you choose, obviously.|И, конечно же, вы назначите его выбранному PVC.
All right, in this case, this DLCI would be on that particular PVC.|Хорошо, в этом случае этот DLCI будет на этом конкретном PVC.
Let me just show you, let me just show you, so you can, instead of just taking a look at something there,|Позвольте мне просто показать вам, позвольте мне просто показать вам, чтобы вы могли, вместо того, чтобы просто смотреть на что-то там,
you can see how it would come into play.|вы можете увидеть, как это повлияет на игру.
I'm gonna do a show start.|Я собираюсь начать шоу.
It's a lot easier to look at that.|На это намного легче смотреть.
And you can see, right here.|И вы можете видеть прямо здесь.
You're having your encapsulation.|У вас есть инкапсуляция.
We're using frame relay.|Мы используем ретрансляцию кадров.
All right.|Отлично.
In this particular sub interface, all right, which I'm using 102.|В этом конкретном субинтерфейсе все в порядке, я использую 102.
Right, to match up to the DLCI.|Верно, чтобы соответствовать DLCI.
I'm using the frame relay DLCI of 102.|Я использую DLCI ретрансляции кадров 102.
That now says, okay.|Теперь это говорит: "Хорошо".
I am this PVC.|Я этот ПВХ.
102.|102.
And then, I can take this number and identify myself to a frame relay cloud.|А затем я могу взять этот номер и идентифицировать себя в облаке Frame Relay.
And, like I was saying earlier, that's important if you're doing,|И, как я уже говорил ранее, это важно, если вы делаете,
let's say a frame relay map, a static mapping.|скажем, карта ретрансляции кадров, статическое отображение.
Because, when you do a static mapping,|Потому что, когда вы делаете статическое сопоставление,
you do frame relay map, you do the destination IP.|вы делаете карту ретрансляции кадров, вы делаете IP-адрес назначения.
And the local DLCI, and it ends in broadcast,|И локальный DLCI, и он заканчивается трансляцией,
because the nature of frame relay is a non-broadcast multi-access network.|потому что по своей природе ретрансляция кадров не является широковещательной сетью с множественным доступом.
Non-broadcast.|Без трансляции.
It doesn't broadcast, all right?|Он не транслируется, понятно?
So, that's why we do these point to point connections.|Вот почему мы делаем эти соединения точка-точка.
This is the best way to do frame relay.|Это лучший способ использовать Frame Relay.
It really, really is.|Это действительно так.
Once you strike because imagine using and I don't want to get off the topic.|Как только вы нанесете удар, потому что представьте, что используете, и я не хочу уходить от темы.
But if you are using OSPF which is also non broadcast in nature and you are using frame relay non broadcast in nature.|Но если вы используете OSPF, который также не является широковещательным по своей природе, и вы используете ретрансляцию кадров без широковещательной передачи.
So there's a lot of different things that you may need to do in order to make that happen.|Так что есть много разных вещей, которые вам нужно сделать, чтобы это произошло.
Goes beyond the CCNA.|Выходит за рамки CCNA.
Goes beyond the CCNA.|Выходит за рамки CCNA.
Disregard, disregard what I said just.|Не обращайте внимания, не обращайте внимания на то, что я только что сказал.
Keep it in the back of your mind, all right, but this is where the DLCI comes in, this is where you would put it.|Держите это в уме, хорошо, но здесь DLCI входит, вот где вы бы его поместили.
You'd put it in the sub interface, or the PVC right that you're gonna use,|Вы бы поместили его во вспомогательный интерфейс или прямо в PVC, который вы собираетесь использовать,
this permanent virtual circuit.|этот постоянный виртуальный контур.
And they're point-to-point,|И они точка-точка,
point-to-point,|точка-точка,
it is a type of frame relay that we're going to go ahead and configure.|это тип Frame Relay, который мы собираемся настроить.
Take a look at the screen.|Взгляните на экран.
Take a look at the screen.|Взгляните на экран.
You seen the encapsulation, you see the sub interface.|Вы видели инкапсуляцию, вы видите субинтерфейс.
Now you know, again, this number does not need to match the DLCI by, but why not.|Теперь вы знаете, что это число не обязательно должно соответствовать DLCI by, но почему бы и нет.
Just like in VLANs remember, when we did the subinterfaces in VLAN.|Точно так же, как в VLAN, помните, когда мы делали субинтерфейсы в VLAN.
That the subinterface matched the VLAN ID,|Что субинтерфейс соответствует идентификатору VLAN,
is that a requirement?|это требование?
No.|Нет.
But did I do it?|Но сделал ли я это?
Yes, visualization purposes.|Да, в визуальных целях.
Same thing here.|То же самое и здесь.
So when I look at a sub interface I already know off the top of my head,|Поэтому, когда я смотрю на вспомогательный интерфейс, я уже знаю это с головы до ног,
oh that's that DLCI so you know, so you know which DLCI it is.|О, это тот DLCI, чтобы вы знали, чтобы вы знали, что это за DLCI.
So, but this is how you would use the DLCI once the provider gives it to you.|Итак, но вот как вы будете использовать DLCI после того, как провайдер предоставит его вам.
And that is what identifies you to a frame relay cloud.|И это то, что отличает вас от облака Frame Relay.
But this is, I mean the configuration you can see.|Но это я имею в виду конфигурацию, которую вы видите.
It's not that difficult, it's not that difficult.|Это не так уж и сложно, это не так уж и сложно.
All right.|Отлично.
So this is where you would use that DLCI,|Вот где вы могли бы использовать этот DLCI,
the DLCI.|DLCI.
No clock-rates you didn't see any clock-rates on there.|Никаких тактовых частот, вы не видели там никаких тактовых частот.
Unless they had it already there by default, no clock-rates,|Если он уже не установлен по умолчанию, никаких тактовых частот,
I don't have no clock-rates on here.|У меня здесь нет тарифов.
The clock rate, remember your routers.|Тактовая частота, помните свои маршрутизаторы.
Routers are DTE.|Роутеры DTE.
Again, I can't help but saying it.|Опять же, я не могу не сказать это.
Sounds like a test question.|Похоже на контрольный вопрос.
Routers are DTE by nature.|Маршрутизаторы по своей природе являются DTE.
They determining the equipment.|Они определяют оборудование.
DTE.|DTE.
It is your provider that gives you the clocking.|Это ваш провайдер, который дает вам синхронизацию.
Unless, you have some sort of internal or external CSUDSU, and for whatever you're doing your own clocking.|Если только у вас нет какого-то внутреннего или внешнего CSUDSU, и для всего, что вы делаете, ваша собственная синхронизация.
Then okay.|Тогда ладно.
Other than that, it's your provider.|В остальном это ваш провайдер.
It's your provider that gives you the clocking and synchronization.|Это ваш провайдер, который обеспечивает синхронизацию и синхронизацию.
Cuz everyone plugs in now a days, not with a server, but with what.|Потому что сейчас все подключаются не к серверу, а к чему.
With some T1 line to a T1 jack line, you know or something of that nature.|С какой-нибудь линией T1 на линию jack T1, ну или что-то в этом роде.
Or you'll plug it in straight to a fiber line or what have you.|Или вы подключите его прямо к оптоволоконной линии или что у вас есть.
But it's not going.|Но не пойдет.
You know, it's.|Вы знаете, это.
No.|Нет.
You don't provide the clocking.|Вы не обеспечиваете часы.
It's your provider.|Это ваш провайдер.
All right?|Отлично?
So again, that is what your DLCI is and it is local.|Опять же, это ваш DLCI, и он локален.
To your particular segment.|Для вашего конкретного сегмента.
To your router.|К вашему роутеру.
Okay, and it is actually your provider who gives it to you.|Хорошо, и на самом деле это ваш провайдер дает вам это.
That's it.|Вот и все.
So, I wanted to explain so that once we start doing the configurations,|Итак, я хотел объяснить, что как только мы начнем выполнять конфигурации,
you understand what I'm doing.|ты понимаешь, что я делаю.
So you know where I'm getting these numbers from, and what they mean.|Итак, вы знаете, откуда я беру эти цифры и что они означают.
Alright, and again the questions that you are going to be asked on the test for frame relay.|Хорошо, и снова вопросы, которые вам зададут на тесте для Frame Relay.
They're not going to be as difficult and they're going to be very basic questions.|Они не будут такими сложными, и это будут очень простые вопросы.
You need to understand the terms that I'm giving you and then when we do the show commands, I'll share the print screens for that.|Вам нужно понять термины, которые я вам даю, а затем, когда мы выполним команды show, я поделюсь с ними экранами печати.
See you in the next lesson.|Увидимся на следующем уроке.