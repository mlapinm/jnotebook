D:\mailCloud\prjother\tmp\1\c101_Pitfalls to look for on your test.md  


__|__
--|--
[BLANK_AUDIO]|[BLANK_AUDIO]
Hi everyone, welcome back.|Всем привет, с возвращением.
This is your last lesson in net and it's all about the pitfalls that you may actually encounter in your net encounters.|Это ваш последний урок в сети, и он посвящен подводным камням, с которыми вы можете столкнуться во время встреч в сети.
All right.|Отлично.
Things you need to look for, things you need to look for,|Вещи, которые нужно искать, вещи, которые нужно искать,
whether it's overload or dynamic.|будь то перегрузка или динамичность.
It is case sensitive.|Это чувствительно к регистру.
So if your pool is in lower case,|Итак, если ваш пул в нижнем регистре,
make sure that your pool here is in lower case as well.|убедитесь, что ваш пул здесь тоже в нижнем регистре.
Because if this is lower case and this is upper case, it will not work.|Потому что, если это строчные буквы, а это прописные, это не сработает.
It will not work because it'll think, it's a different pool.|Не получится, потому что подумает, что это другой пул.
If your access list is 1, and this is pointing to access list 11, it's pointing to a different access list.|Если ваш список доступа равен 1, и он указывает на список доступа 11, он указывает на другой список доступа.
It will not work.|Он не будет работать.
So those right there are the major wants to look for, when they're saying hey,|Так что те, кто правы, больше всего хотят искать, когда они говорят: "Эй,
not every, no, no one is able to be able,|не каждый, нет, никто не умеет,
no one is able to get out to the internet after the nat configuration was done, what is the problem?|после настройки nat никто не может выйти в инет, в чем проблема?
All right?|Отлично?
Those can be a problems, the, the names,|Это могут быть проблемы, имена,
the pool names do not coincide because of upper case, you know,|имена пулов не совпадают из-за верхнего регистра, понимаете,
case sensitivity or is pointing to the wrong access list.|чувствительность к регистру или указывает на неправильный список доступа.
Okay?|Ладно?
Now, this is nat overload.|Теперь это нац перегрузка.
Those are, the only other problem would be if it's a nat overload issue then you're looking at they forgot to put the word overload.|Это единственная другая проблема, если это проблема перегрузки nat, тогда вы смотрите на то, что они забыли поставить слово перегрузка.
Those are the only three things that I would see here as far as main things.|Это единственные три вещи, которые я хотел бы здесь увидеть в качестве основных.
The case sensitivities of the pool.|Чувствительность корпуса к бассейну.
Pointing to the wrong access lists.|Указывая на неправильные списки доступа.
And they forgot to put overload, they forgot to put overload.|И забыли поставить перегруз, забыли поставить перегруз.
The only other thing I can think of as far as overload would be definitely that they don't have enough.|Единственное, что я могу придумать в отношении перегрузки, это определенно то, что им не хватает.
They put the wrong wild card mask.|Они поставили неправильную маску wild card.
They only allow, let's say, 14 people to get to.|Допускают только, скажем, 14 человек.
So they're all the first 14 to get there,|Итак, они все первые 14, кто попал туда,
they're good.|они хороши.
But the rest of the, everybody else, hey,|Но остальные, все остальные, эй,
man, we can't get there.|чувак, мы не можем туда добраться.
So, take a look at the wildcard mask.|Итак, взгляните на маску подстановки.
The wildcard mask is not matching for the amount of people that you want to go out.|Подстановочная маска не соответствует количеству людей, с которыми вы хотите выйти.
All right?|Отлично?
So, be very careful that you're permitting to go out, so these are the pitfalls that you look for.|Так что будьте очень осторожны, позволяя выйти на улицу, так что это ловушки, которые вы ищете.
Again, the case sensitivity in the pool,|Опять же, чувствительность к регистру в пуле,
point to the wrong access list, not wrong wild card mask.|указывают на неправильный список доступа, а не на неправильную маску подстановки.
Right here you're only allowing 14 people not 254 people.|Здесь вы разрешаете только 14 человек, а не 254 человека.
So, you need to make sure that the wildcard mask is correct, and of course,|Итак, вам нужно убедиться, что маска подстановочного знака верна, и, конечно же,
they forgot to put the word overload.|они забыли поставить слово «перегрузка».
That's for nat overload, for dynamic, for dynamic obviously,|Это для перегрузки nat, для динамического, очевидно, для динамического,
not enough IP addresses you want 254|недостаточно IP-адресов 254
people to get out,|люди, чтобы выйти,
but you only have let's say 15, well, you don't have enough.|но у вас есть, скажем, 15, ну, вам не хватает.
You didn't purchase enough public IP addresses to get out.|Вы не купили достаточно общедоступных IP-адресов для выхода.
So that will be a big issue with dynamic,|Это будет большой проблемой для динамических,
because dynamic is a one-to-one mapping.|потому что динамическое отображение взаимно однозначное.
So you definitely need to make sure if it's a dynamic question,|Так что вам определенно нужно убедиться, что это динамический вопрос,
that you take a look at that range of IP addresses.|что вы посмотрите на этот диапазон IP-адресов.
They can also mess around with you in the mask.|Они также могут возиться с вами в маске.
All right?|Отлично?
But normally, they'll just use the range.|Но обычно они просто используют диапазон.
And again, take a look at the wildcard mask.|И снова взгляните на маску подстановки.
How many people are they allowing to get out?|Скольким людям они позволяют выйти?
The case sensitivity, just like in overload, it's the same thing.|Чувствительность к регистру, как и в перегрузке, тоже самое.
Laz, lowercase, laz lowercase.|Laz, строчные, laz строчные.
Point to the right access list,|Наведите курсор на правый список доступа,
point to the right access list, these are things that could, are the gotchas.|укажите на правильный список доступа, это то, что может, и есть подводные камни.
Not to mention that they may have forgotten to put the IP nat inside.|Не говоря уже о том, что они, возможно, забыли поместить IP-адрес внутрь.
Or, they could have forgotten to put the IP nat outside.|Или они могли забыть вынести IP-адрес снаружи.
So when they show you this screen right here.|Итак, когда они показывают вам этот экран прямо здесь.
What you're looking for is IP nat inside.|Вам нужен IP-адрес внутри.
IP nat outside.|ИП нац снаружи.
That indeed, this is the outside.|Что действительно, это снаружи.
That it's pointing to the public address and that this is pointing to the private address.|Что он указывает на публичный адрес и что это указывает на частный адрес.
So be on the lookout for that.|Так что будьте начеку.
And what we just talked about now in the pool, in the pool.|И то, о чем мы только что говорили в бассейне, в бассейне.
Case sensitivity, point to the right access list, correct wildcard mask for the access list permitting a certain network.|Учитывайте регистр, укажите правильный список доступа, исправьте подстановочную маску для списка доступа, разрешающего определенную сеть.
Those are the pitfalls that get people when they do the nat, all right?|Это подводные камни, с которыми сталкиваются люди, когда они занимаются нац, понятно?
That is what you're looking for.|Это то, что вы ищете.
Remember, three types of nat, static,|Помните, что три типа nat, static,
dynamic,|динамический
and nat overload, or call it pat, all right?|и нац перегрузка, или назови это погладкой, ладно?
You're gonna go ahead and, more likely it's gonna be an overload or dynamic question and the pitfalls that we just talked about.|Вы собираетесь идти вперед, и, скорее всего, это будет перегрузочный или динамический вопрос и подводные камни, о которых мы только что говорили.
The IP not inside, IP not outside, make sure they're in their correct order.|IP не внутри, IP не снаружи, убедитесь, что они в правильном порядке.
And obviously that the pools match,|И очевидно, что бассейны совпадают,
pointing to the right access list.|указывая на правильный список доступа.
Things of that nature and you should be fine.|Вещи такого рода, и с вами все должно быть в порядке.
Nat is not difficult at all, you should have no issues,|Нат это совсем не сложно, проблем быть не должно,
play this video over and over again.|воспроизводить это видео снова и снова.
Go to sleep with it, so you have nightmares about me,|Иди спать с этим, так что тебе снятся кошмары обо мне,
and then hey, but you'll pass your certification, right?|а потом, эй, но вы же пройдете сертификацию, верно?
That's the whole goal of the whole thing.|В этом вся цель всего этого.
All right?|Отлично?
Nat is over.|Нат закончился.
Nat is over, we now know nat, now will move on to the next session,|Нат закончился, теперь мы знаем нат, теперь перейдем к следующему сеансу,
which I believe is wide area networks.|я считаю, что это глобальные сети.
I will be seeing you there.|Увидимся там.
[BLANK_AUDIO]|[BLANK_AUDIO]