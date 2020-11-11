D:\mailCloud\prjother\tmp\1\c108_Open Standard WAN protocol.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
All right, now that you've configured and learned about frame relay, and saw how simple that was, just a couple terms that we needed to identify.|Хорошо, теперь, когда вы настроили и узнали о Frame Relay и увидели, насколько это просто, осталось всего несколько терминов, которые нам нужно было определить.
We now go into PPP.|Теперь перейдем к ГЧП.
And PPP, people, it's not a punishment.|И ППС, народ, это не наказание.
Okay?|Ладно?
It's very easy.|Это очень просто.
Easy as pie.|Проще простого.
All right?|Отлично?
It's a lot of Ps in there.|Там много Пс.
So I've gotta make things up.|Так что я должен все придумать.
All right.|Отлично.
PPP, as you can see here, as I put in my notes, is for dedicated connections.|PPP, как вы можете видеть здесь, как я добавил в своих заметках, предназначен для выделенных соединений.
And we talked about that when we started talking about what error network.|И мы говорили об этом, когда начали говорить о том, что такое ошибка сети.
It's for dedicated, dedicated connections,|Это для выделенных, выделенных соединений,
but when you're using Cisco routers, all right, and this is the example that you'll be given throughout your certifications,|но когда вы используете маршрутизаторы Cisco, все в порядке, и это пример, который вы будете приводить в процессе сертификации,
you'll have only really two Cisco routers,|у вас будет всего два маршрутизатора Cisco,
and they'll be connected through a serial interface.|и они будут подключены через последовательный интерфейс.
Well, if you're connected through a serial interface and you have two Cisco routers,|Что ж, если вы подключены через последовательный интерфейс и у вас есть два маршрутизатора Cisco,
the default ACLC and it'll work fine.|ACLC по умолчанию, и он будет работать нормально.
Why would you want to change that default encapsulation of HDLC to PPP?|Почему вы хотите изменить инкапсуляцию HDLC по умолчанию на PPP?
Well, first thing we can talk about it's an open standard.|Ну, первое, о чем мы можем поговорить, это открытый стандарт.
What if for whatever reason one of those routers goes down and you don't have another Cisco router?|Что, если по какой-либо причине один из этих маршрутизаторов выйдет из строя, а у вас нет другого маршрутизатора Cisco?
And you'd have to put it in, you know, a temporary you know, HP router,|И вам придется вставить его, ну, знаете, временный маршрутизатор HP,
Dell router, a fiber router, whatever.|Маршрутизатор Dell, оптоволоконный маршрутизатор, что угодно.
Put another router in there.|Вставьте туда другой роутер.
So, if you're running HDLC, you're gonna have that up down encapsulation issue.|Итак, если вы используете HDLC, у вас будет проблема инкапсуляции вверх-вниз.
Okay?|Ладно?
So, if you have PPP as an open standard,|Итак, если у вас PPP как открытый стандарт,
it is not, you know,|это не так, вы знаете,
it's not you're not tied down to a particular manufacturer, you can use PPP.|дело не в том, что вы не привязаны к конкретному производителю, можно использовать PPP.
So that's one advantage.|Так что это одно из преимуществ.
PPP has a lot of components within it that gives it it's advantages.|PPP имеет множество компонентов, что дает ему преимущества.
These two main ones right here.|Вот эти два основных.
NCP and LCP, these are the things that you look at when you're troubleshooting PPP, okay?|NCP и LCP, это то, на что вы обращаете внимание при устранении неполадок PPP, хорошо?
NCP is your network control protocol and that is responsible for the layer 3 router protocols.|NCP - это протокол управления вашей сетью, который отвечает за протоколы маршрутизатора уровня 3.
It will support IP, IPv4, IPX,|Он будет поддерживать IP, IPv4, IPX,
not that we use it, as much as we used to use it before.|не то чтобы мы его использовали, как раньше.
But it has support for those layer to your router protocols.|Но он поддерживает этот уровень для протоколов вашего маршрутизатора.
LCP, that's your Link Control Protocol.|LCP, это ваш протокол управления каналом.
That definitely, as you can see here.|Это определенно, как вы можете видеть здесь.
Authentication, compression, error detection, multilink capabilities, right?|Аутентификация, сжатие, обнаружение ошибок, многоканальность, верно?
Multilink PPP, bringing in all these different T1's and bundling them up through PPP and even call by features, as you see there in the notes.|Многоканальный PPP, включающий все эти разные T1 и объединяющий их через PPP и даже вызывающий по функциям, как вы видите в примечаниях.
So a lot of things that HDLC will not give you.|Так много чего HDLC вам не даст.
So this is the reason why you would want to move over to PPP.|Вот почему вы захотите перейти на PPP.
So, that way, if you have a, again, a collage of different routers,|Таким образом, если у вас снова есть коллаж из разных маршрутизаторов,
or if you have a Cisco router that you need to replace but you don't have a Cisco router on hand, and for the time being you|или если у вас есть маршрутизатор Cisco, который необходимо заменить, но у вас нет под рукой маршрутизатора Cisco, и в настоящее время вы
have to use another manufacturer.|придется использовать другого производителя.
Understandable.|Понятно.
So, if you have PPP, you have no issues.|Итак, если у вас есть PPP, у вас нет проблем.
And this is the, the, the, the way that a certification is going to test you.|И это, тот, тот способ, которым сертификация будет вас проверять.
Hey, you got two routers connected.|Эй, у вас подключены два маршрутизатора.
The IP addresses are okay, seems like, but they're not talking to each other.|IP-адреса в порядке, вроде бы, но они не разговаривают друг с другом.
Why is that?|Это почему?
Mismatch encapsulation, because if you're running HDLC on both,|Несоответствие инкапсуляции, потому что если вы используете HDLC на обоих,
one's, again, Dell, one is Cisco, they're not gonna talk to each other,|один, опять же, Делл, один - Cisco, они не будут разговаривать друг с другом,
because the HDLC is proprietary to each manufacturer, in this occasion we do PPP.|поскольку HDLC является собственностью каждого производителя, в данном случае мы используем PPP.
The other way would be if you have PPP,|Другой вариант - если у вас есть PPP,
okay, they're not talking to each other,|хорошо, они не разговаривают друг с другом,
why is that, and when we start doing the configurations you'll see it, well, because PPP if you configure authentication the passwords and|почему это так, и когда мы начнем делать конфигурации, вы увидите это, ну, потому что PPP, если вы настроите аутентификацию, пароли и
user names have to be the same.|имена пользователей должны быть одинаковыми.
User names and passwords must be the same,|Имена пользователей и пароли должны быть одинаковыми,
and I'm gonna repeat that several times because that is key to the certification when you're troubleshooting for a PPP.|и я собираюсь повторить это несколько раз, потому что это ключ к сертификации при поиске и устранении неисправностей PPP.
Not that you will be inside a router doing this.|Не то чтобы вы выполняли это внутри маршрутизатора.
Know you'll be given print screens.|Знайте, что вам дадут печатные экраны.
And why aren't these routers talking to each other?|И почему эти маршрутизаторы не разговаривают друг с другом?
Because either the username are not the same, right?|Потому что либо имя пользователя не то же самое, не так ли?
You have the wrong username because when you are configuring PPP you need to create a user name.|У вас неправильное имя пользователя, потому что при настройке PPP вам нужно создать имя пользователя.
So if I'm router one, and I got it back here, I'll show you.|Так что если у меня первый маршрутизатор, и я получил его сюда, я вам покажу.
All right.|Отлично.
This is let's say this is,|Это, скажем так,
let's change this to R1.|давайте изменим это на R1.
[BLANK_AUDIO]|[BLANK_AUDIO]
And this is R2.|А это R2.
All right.|Отлично.
You're gonna get something as simple as that.|Вы получите что-то такое простое.
Simple as this right here.|Вот так просто.
Okay, router 1, router 2.|Хорошо, роутер 1, роутер 2.
You need to create a user name on this router, using the host name of this router, so this would be user name router 2, password Cisco.|Вам необходимо создать имя пользователя на этом маршрутизаторе, используя имя хоста этого маршрутизатора, таким образом, это будет имя пользователя маршрутизатора 2, пароль Cisco.
On this one will be user name router 1,|На этом будет имя пользователя router 1,
password Cisco.|пароль Cisco.
If the username does not match the host name of the router, you will not talk.|Если имя пользователя не совпадает с именем хоста маршрутизатора, вы не будете разговаривать.
If the password are not identical on either side,|Если пароли не совпадают с обеих сторон,
case sensitive, it will not work.|с учетом регистра, это не сработает.
So it's the host thing, case sensitive.|Так что это хост, чувствительный к регистру.
So again, this is how you will be tested,|Итак, снова вот как вас будут проверять,
but it's not difficult at all to troubleshoot and it's not difficult at all to configure.|но устранить неполадки совсем несложно и совсем несложно настроить.
It does give us a lot of capabilities, a lot of capabilities, that HDLC does not.|Это действительно дает нам много возможностей, много возможностей, которых нет у HDLC.
So this is the reason what you see right here,|Это причина того, что вы видите здесь,
all right, that we want to go ahead and do that.|хорошо, что мы хотим продолжить и сделать это.
We wanna have these network control protocol,|Мы хотим иметь этот протокол управления сетью,
that looks add the layer three routed protocols.|это выглядит добавлением маршрутизируемых протоколов третьего уровня.
We wanna have this link control protocol.|Мы хотим иметь этот протокол управления ссылками.
That's gonna look at the authentication.|Вот посмотрим на аутентификацию.
That's gonna go ahead and compress as we send the information across.|Это будет продолжаться и сжиматься, когда мы будем отправлять информацию.
That will do error detection to see if there's any problems with that package going across.|Это выполнит обнаружение ошибок, чтобы увидеть, есть ли какие-либо проблемы с этим пакетом.
That would allow us to bundle multiple T1's into one.|Это позволило бы объединить несколько T1 в один.
And, and we put this for last.|И, и мы ставим это напоследок.
That's callback features.|Это функции обратного вызова.
But again, it has a lot of capabilities.|Но опять же, у него много возможностей.
And when it comes to the certification exam, when it comes to the certification,|А что касается сертификационного экзамена, когда дело касается сертификации,
this is the goal, again.|это снова цель.
I don't want you to lose sight of the goal.|Я не хочу, чтобы вы упускали из виду цель.
Because I know you've been through, it's been a long journey.|Поскольку я знаю, что вы прошли через это, это был долгий путь.
I wanna make sure that you keep that goal in mind is to pass this test,|Я хочу убедиться, что вы помните, что цель - пройти этот тест,
this 200-120 test.|это 200-120 тест.
When they test you for a PPP these are the things that they're looking for.|Когда они проверяют вас на предмет PPP, они именно этого и ищут.
All right?|Отлично?
Did you understand that there's two,|Вы поняли, что их двое,
those two protocols, NCP and LCP, what they do, all right?|эти два протокола, NCP и LCP, что они делают, хорошо?
And when you're talking about the authentication and all that, they need to match.|И когда вы говорите об аутентификации и прочем, они должны совпадать.
But once we get into the configuration,|Но как только мы перейдем к настройке,
you'll, you'll see what I'm talking about.|ты поймешь, о чем я говорю.
You'll see how the, the lines will go down and they'll come back up.|Вы увидите, как линии опускаются, а они снова поднимаются.
And if the passwords don't match, they're not gonna talk.|И если пароли не совпадают, они не будут разговаривать.
So because PPP does have a PPP establishment or link establishment phase,|Итак, поскольку PPP действительно имеет этап установления PPP или установления соединения,
and we'll talk about that, when we get into the configuration portion of it,|и мы поговорим об этом, когда перейдем к части конфигурации,
which will be our next lesson, all right?|каким будет следующий урок, хорошо?
So this is PPP, definitely is a protocol that's very popular.|So this is PPP, definitely is a protocol that's very popular.
Everybody uses it, and so will you.|Everybody uses it, and so will you.
I'll see you in the next session.|I'll see you in the next session.
[BLANK_AUDIO]|[BLANK_AUDIO]