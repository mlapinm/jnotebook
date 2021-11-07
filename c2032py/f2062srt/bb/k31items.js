let objs = [
  {
    "time": [
      0.0,
      3.0
    ],
    "en": [
      "welcome to this free CCNA packet tracer"
    ],
    "ru": [
      "добро пожаловать в этот бесплатный трассировщик пакетов CCNA"
    ]
  },
  {
    "time": [
      3.0,
      5.0
    ],
    "en": [
      "practice lab you can download the lab"
    ],
    "ru": [
      "Практическая лаборатория вы можете скачать лабораторию"
    ]
  },
  {
    "time": [
      5.0,
      7.0
    ],
    "en": [
      "file from the link in the description if"
    ],
    "ru": [
      "файл по ссылке в описании, если"
    ]
  },
  {
    "time": [
      7.0,
      10.0
    ],
    "en": [
      "you like these labs please consider"
    ],
    "ru": [
      "Вам нравятся эти лаборатории, пожалуйста, примите во внимание"
    ]
  },
  {
    "time": [
      10.0,
      12.0
    ],
    "en": [
      "supporting me via my patreon or the"
    ],
    "ru": [
      "поддерживая меня через моего патреона или"
    ]
  },
  {
    "time": [
      12.0,
      14.0
    ],
    "en": [
      "cryptocurrency options in the"
    ],
    "ru": [
      "варианты криптовалюты в"
    ]
  },
  {
    "time": [
      14.0,
      18.0
    ],
    "en": [
      "description this lab will be one last"
    ],
    "ru": [
      "описание, эта лаборатория будет последней"
    ]
  },
  {
    "time": [
      18.0,
      22.0
    ],
    "en": [
      "lab focusing exclusively on ACLs this"
    ],
    "ru": [
      "лаборатория, специализирующаяся исключительно на ACL, это"
    ]
  },
  {
    "time": [
      22.0,
      24.0
    ],
    "en": [
      "time we will configure named standard"
    ],
    "ru": [
      "раз мы настроим именованный стандарт"
    ]
  },
  {
    "time": [
      24.0,
      27.0
    ],
    "en": [
      "ACLs as opposed to the numbered ACLs we"
    ],
    "ru": [
      "ACL в отличие от нумерованных ACL, которые мы"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "configured in previous labs also"
    ],
    "ru": [
      "настроен в предыдущих лабораторных работах также"
    ]
  },
  {
    "time": [
      30.0,
      32.0
    ],
    "en": [
      "remember that standard ACLs filter based"
    ],
    "ru": [
      "помните, что стандартный фильтр ACL основан на"
    ]
  },
  {
    "time": [
      32.0,
      35.0
    ],
    "en": [
      "only on source address as opposed to"
    ],
    "ru": [
      "только на исходном адресе, а не на"
    ]
  },
  {
    "time": [
      35.0,
      37.0
    ],
    "en": [
      "extended ACLs which use other parameters"
    ],
    "ru": [
      "расширенные ACL, использующие другие параметры"
    ]
  },
  {
    "time": [
      37.0,
      42.0
    ],
    "en": [
      "such as destination address as well our"
    ],
    "ru": [
      "например, адрес назначения, а также наш"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "first requirement is that hosts in the"
    ],
    "ru": [
      "первое требование состоит в том, чтобы хосты в"
    ]
  },
  {
    "time": [
      45.0,
      58.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      45.0,
      58.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      58.0,
      62.0
    ],
    "en": [
      "zon are ones F 0 0 and F 1 0 interfaces"
    ],
    "ru": [
      "zon - это интерфейсы F 0 0 и F 1 0."
    ]
  },
  {
    "time": [
      62.0,
      65.0
    ],
    "en": [
      "first let's create the ACL preventing"
    ],
    "ru": [
      "сначала давайте создадим ACL, предотвращающий"
    ]
  },
  {
    "time": [
      65.0,
      69.0
    ],
    "en": [
      "hosts in the 192.168 2's last 24 network"
    ],
    "ru": [
      "хосты в последних 24 сетях 192.168 2"
    ]
  },
  {
    "time": [
      69.0,
      72.0
    ],
    "en": [
      "from communicating with the 192.168.1.0"
    ],
    "ru": [
      "от связи с 192.168.1.0"
    ]
  },
  {
    "time": [
      72.0,
      80.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      72.0,
      80.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      80.0,
      82.0
    ],
    "en": [
      "number ACLs are configured with the"
    ],
    "ru": [
      "списки ACL настроены с"
    ]
  },
  {
    "time": [
      82.0,
      86.0
    ],
    "en": [
      "command access list but named ACLs are"
    ],
    "ru": [
      "список доступа к командам, но именованные ACL"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "configured with this command IP access"
    ],
    "ru": [
      "настроен с помощью этой команды IP-доступ"
    ]
  },
  {
    "time": [
      89.0,
      93.0
    ],
    "en": [
      "list now let's check the options we'll"
    ],
    "ru": [
      "список сейчас давайте проверим варианты, которые мы"
    ]
  },
  {
    "time": [
      93.0,
      95.0
    ],
    "en": [
      "go with standard for this lab let's"
    ],
    "ru": [
      "пойдем со стандартом для этой лаборатории давайте"
    ]
  },
  {
    "time": [
      95.0,
      98.0
    ],
    "en": [
      "check the game now notice you can also"
    ],
    "ru": [
      "проверьте игру сейчас обратите внимание, что вы также можете"
    ]
  },
  {
    "time": [
      98.0,
      100.0
    ],
    "en": [
      "create a numbered ACL with this command"
    ],
    "ru": [
      "создать нумерованный ACL с помощью этой команды"
    ]
  },
  {
    "time": [
      100.0,
      105.0
    ],
    "en": [
      "however let's give it a name to two one"
    ],
    "ru": [
      "однако давайте назовем его два"
    ]
  },
  {
    "time": [
      105.0,
      109.0
    ],
    "en": [
      "meaning from the 192.168.20.10 at work"
    ],
    "ru": [
      "имеется ввиду из 192.168.20.10 на работе"
    ]
  },
  {
    "time": [
      109.0,
      115.0
    ],
    "en": [
      "to the 192.168.1.2 last 24 network now"
    ],
    "ru": [
      "в сеть 192.168.1.2 последних 24 сейчас"
    ]
  },
  {
    "time": [
      115.0,
      118.0
    ],
    "en": [
      "let's check the options there are none"
    ],
    "ru": [
      "давайте проверим варианты нет"
    ]
  },
  {
    "time": [
      118.0,
      120.0
    ],
    "en": [
      "so clearly this is different from our"
    ],
    "ru": [
      "так ясно это отличается от нашего"
    ]
  },
  {
    "time": [
      120.0,
      123.0
    ],
    "en": [
      "previous ACL configuration let's hit"
    ],
    "ru": [
      "предыдущая конфигурация ACL давай ударим"
    ]
  },
  {
    "time": [
      123.0,
      127.0
    ],
    "en": [
      "enter to see what happens as you can see"
    ],
    "ru": [
      "войдите, чтобы увидеть, что происходит, как вы можете видеть"
    ]
  },
  {
    "time": [
      127.0,
      129.0
    ],
    "en": [
      "we have created a sorry we have entered"
    ],
    "ru": [
      "мы создали извините, что вошли"
    ]
  },
  {
    "time": [
      129.0,
      132.0
    ],
    "en": [
      "a separate configuration mode from here"
    ],
    "ru": [
      "отдельный режим конфигурации отсюда"
    ]
  },
  {
    "time": [
      132.0,
      133.0
    ],
    "en": [
      "we will configure the contents of this"
    ],
    "ru": [
      "мы настроим содержимое этого"
    ]
  },
  {
    "time": [
      133.0,
      137.0
    ],
    "en": [
      "a CL let's check what options there are"
    ],
    "ru": [
      "CL давайте проверим, какие есть варианты"
    ]
  },
  {
    "time": [
      137.0,
      142.0
    ],
    "en": [
      "let's create a deny statement first deny"
    ],
    "ru": [
      "давайте сначала создадим заявление deny deny"
    ]
  },
  {
    "time": [
      142.0,
      149.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      142.0,
      149.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      149.0,
      152.0
    ],
    "en": [
      "options there are none because this is a"
    ],
    "ru": [
      "вариантов нет, потому что это"
    ]
  },
  {
    "time": [
      152.0,
      155.0
    ],
    "en": [
      "standard ACL so we only configure the"
    ],
    "ru": [
      "стандартный ACL, поэтому мы настраиваем только"
    ]
  },
  {
    "time": [
      155.0,
      158.0
    ],
    "en": [
      "source IP that we are filtering now"
    ],
    "ru": [
      "исходный IP-адрес, который мы сейчас фильтруем"
    ]
  },
  {
    "time": [
      158.0,
      160.0
    ],
    "en": [
      "let's create one more entry to allow all"
    ],
    "ru": [
      "давайте создадим еще одну запись, чтобы разрешить всем"
    ]
  },
  {
    "time": [
      160.0,
      162.0
    ],
    "en": [
      "other traffic because there is still"
    ],
    "ru": [
      "другой трафик, потому что еще есть"
    ]
  },
  {
    "time": [
      162.0,
      164.0
    ],
    "en": [
      "that implicit deny any at the end of the"
    ],
    "ru": [
      "что неявно отрицать что-либо в конце"
    ]
  },
  {
    "time": [
      164.0,
      172.0
    ],
    "en": [
      "ACL permit any exit okay that's it"
    ],
    "ru": [
      "ACL разрешает любой выход, ладно, вот и все"
    ]
  },
  {
    "time": [
      172.0,
      175.0
    ],
    "en": [
      "before applying that ACL let's create"
    ],
    "ru": [
      "перед применением этого ACL давайте создадим"
    ]
  },
  {
    "time": [
      175.0,
      177.0
    ],
    "en": [
      "the second ACL to prevent traffic from"
    ],
    "ru": [
      "второй ACL для предотвращения трафика"
    ]
  },
  {
    "time": [
      177.0,
      181.0
    ],
    "en": [
      "the 192.168.1.0 slash 24 network from"
    ],
    "ru": [
      "сеть 192.168.1.0 с косой чертой 24 из"
    ]
  },
  {
    "time": [
      181.0,
      184.0
    ],
    "en": [
      "reaching the 1 & 2 - 1 6 8 - 0 / 24"
    ],
    "ru": [
      "достижение 1 и 2 - 1 6 8 - 0/24"
    ]
  },
  {
    "time": [
      184.0,
      191.0
    ],
    "en": [
      "network IP access list standard 1 - to"
    ],
    "ru": [
      "список IP-доступа к сети стандартный 1 - до"
    ]
  },
  {
    "time": [
      191.0,
      200.0
    ],
    "en": [
      "deny 192.168.1.0 oh oh oh 255 permit any"
    ],
    "ru": [
      "запретить 192.168.1.0 ой ой ой 255 разрешить любой"
    ]
  },
  {
    "time": [
      200.0,
      204.0
    ],
    "en": [
      "ok we have created both ACLs necessary"
    ],
    "ru": [
      "хорошо, мы создали оба необходимых ACL"
    ]
  },
  {
    "time": [
      204.0,
      205.0
    ],
    "en": [
      "for the first requirement now let's"
    ],
    "ru": [
      "для первого требования теперь давайте"
    ]
  },
  {
    "time": [
      205.0,
      212.0
    ],
    "en": [
      "apply them exit first let's go on f00"
    ],
    "ru": [
      "примените их сначала выйдите, давайте перейдем к f00"
    ]
  },
  {
    "time": [
      212.0,
      216.0
    ],
    "en": [
      "interface f00 on this interface we will"
    ],
    "ru": [
      "interface f00 на этом интерфейсе мы будем"
    ]
  },
  {
    "time": [
      216.0,
      222.0
    ],
    "en": [
      "block traffic from 192.168.0"
    ],
    "ru": [
      "заблокировать трафик с 192.168.0"
    ]
  },
  {
    "time": [
      222.0,
      225.0
    ],
    "en": [
      "the interface so IP access group 2 - 1"
    ],
    "ru": [
      "интерфейс так группа доступа IP 2 - 1"
    ]
  },
  {
    "time": [
      225.0,
      231.0
    ],
    "en": [
      "out now let's apply the other ACL to f10"
    ],
    "ru": [
      "Теперь давайте применим другой ACL к f10"
    ]
  },
  {
    "time": [
      231.0,
      238.0
    ],
    "en": [
      "interface f10 IP access group 1 - 2 out"
    ],
    "ru": [
      "интерфейс f10 IP группа доступа 1-2 выход"
    ]
  },
  {
    "time": [
      238.0,
      242.0
    ],
    "en": [
      "now let's test this configuration I'll"
    ],
    "ru": [
      "теперь давайте протестируем эту конфигурацию я"
    ]
  },
  {
    "time": [
      242.0,
      253.0
    ],
    "en": [
      "try to ping from pc1 to pc2 192.168 2000"
    ],
    "ru": [
      "попробуйте пинговать с pc1 на pc2 192.168 2000"
    ]
  },
  {
    "time": [
      253.0,
      255.0
    ],
    "en": [
      "work we get a message saying destination"
    ],
    "ru": [
      "работа, мы получаем сообщение о пункте назначения"
    ]
  },
  {
    "time": [
      255.0,
      259.0
    ],
    "en": [
      "host unreachable and to pc for pig"
    ],
    "ru": [
      "хост недоступен и к ПК для свиньи"
    ]
  },
  {
    "time": [
      259.0,
      264.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      259.0,
      264.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      264.0,
      266.0
    ],
    "en": [
      "I'll do some pings from PC"
    ],
    "ru": [
      "Я сделаю пинги с ПК"
    ]
  },
  {
    "time": [
      266.0,
      273.0
    ],
    "en": [
      "three as well ping 192.168.1 11 doesn't"
    ],
    "ru": [
      "три тоже пинг 192.168.1 11 нет"
    ]
  },
  {
    "time": [
      273.0,
      279.0
    ],
    "en": [
      "work and ping 192.168.1.2 elv okay so"
    ],
    "ru": [
      "работа и пинг 192.168.1.2 elv хорошо так"
    ]
  },
  {
    "time": [
      279.0,
      282.0
    ],
    "en": [
      "looks like our configuration worked now"
    ],
    "ru": [
      "похоже, что наша конфигурация сейчас работает"
    ]
  },
  {
    "time": [
      282.0,
      285.0
    ],
    "en": [
      "let's go to the next requirement hosts"
    ],
    "ru": [
      "перейдем к следующему требованию хостов"
    ]
  },
  {
    "time": [
      285.0,
      294.0
    ],
    "en": [
      "in the 192.168.20.10 160 8.3 o / 24"
    ],
    "ru": [
      "в 192.168.20.10 160 8,3 о / 24"
    ]
  },
  {
    "time": [
      294.0,
      297.0
    ],
    "en": [
      "network remember the general rule that"
    ],
    "ru": [
      "сети помните общее правило, что"
    ]
  },
  {
    "time": [
      297.0,
      300.0
    ],
    "en": [
      "standard ACLs should be applied as close"
    ],
    "ru": [
      "стандартные ACL должны применяться как можно ближе"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "as possible to the destination in this"
    ],
    "ru": [
      "как можно к месту назначения в этом"
    ]
  },
  {
    "time": [
      303.0,
      308.0
    ],
    "en": [
      "case the destination is 192.168.0 / 24"
    ],
    "ru": [
      "если пункт назначения - 192.168.0 / 24"
    ]
  },
  {
    "time": [
      308.0,
      312.0
    ],
    "en": [
      "so let's configure the ACL on our to"
    ],
    "ru": [
      "так что давайте настроим ACL на нашем"
    ]
  },
  {
    "time": [
      312.0,
      319.0
    ],
    "en": [
      "enable conf t IP access list standard 2"
    ],
    "ru": [
      "enable conf t Список IP-доступа стандарт 2"
    ]
  },
  {
    "time": [
      319.0,
      329.0
    ],
    "en": [
      "to 3 deny 192.168 200 200 255 permit any"
    ],
    "ru": [
      "до 3 запретить 192.168 200 200 255 разрешить любой"
    ]
  },
  {
    "time": [
      329.0,
      334.0
    ],
    "en": [
      "exit now let's apply it outbound on our"
    ],
    "ru": [
      "выход сейчас давайте применим его исходящий к нашему"
    ]
  },
  {
    "time": [
      334.0,
      340.0
    ],
    "en": [
      "to s f00 interface interface f00 IP"
    ],
    "ru": [
      "к s интерфейс f00 интерфейс f00 IP"
    ]
  },
  {
    "time": [
      340.0,
      345.0
    ],
    "en": [
      "access group 2 to 3 out finally let's"
    ],
    "ru": [
      "группы доступа с 2 по 3, наконец, давайте"
    ]
  },
  {
    "time": [
      345.0,
      348.0
    ],
    "en": [
      "test I'll try to ping from PC 3 to"
    ],
    "ru": [
      "test Попробую пинговать с ПК 3 на"
    ]
  },
  {
    "time": [
      348.0,
      354.0
    ],
    "en": [
      "server 1 and server to ping 192.168.1"
    ],
    "ru": [
      "сервер 1 и сервер для пинга 192.168.1"
    ]
  },
  {
    "time": [
      354.0,
      357.0
    ],
    "en": [
      "hundred destination host unreachable"
    ],
    "ru": [
      "сотня хостов назначения недоступна"
    ]
  },
  {
    "time": [
      357.0,
      363.0
    ],
    "en": [
      "ping 192.168.1 o1 destination host"
    ],
    "ru": [
      "ping 192.168.1 o1 целевой хост"
    ]
  },
  {
    "time": [
      363.0,
      364.0
    ],
    "en": [
      "unreachable"
    ],
    "ru": [
      "недоступен"
    ]
  },
  {
    "time": [
      364.0,
      369.0
    ],
    "en": [
      "we have successfully completed this lab"
    ],
    "ru": [
      "мы успешно завершили эту лабораторную работу"
    ]
  },
  {
    "time": [
      369.0,
      372.0
    ],
    "en": [
      "thank you for watching I hope this lab"
    ],
    "ru": [
      "спасибо за просмотр, надеюсь, эта лаборатория"
    ]
  },
  {
    "time": [
      372.0,
      373.0
    ],
    "en": [
      "and video have been helpful for you"
    ],
    "ru": [
      "и видео были для вас полезны"
    ]
  },
  {
    "time": [
      373.0,
      376.0
    ],
    "en": [
      "please subscribe for future labs like"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, такие как"
    ]
  },
  {
    "time": [
      376.0,
      380.0
    ],
    "en": [
      "this which we be released weekly if you"
    ],
    "ru": [
      "это мы будем выпускать еженедельно, если вы"
    ]
  },
  {
    "time": [
      380.0,
      382.0
    ],
    "en": [
      "have requests for any specific labs let"
    ],
    "ru": [
      "есть запросы на любые конкретные лаборатории, позволяющие"
    ]
  },
  {
    "time": [
      382.0,
      384.0
    ],
    "en": [
      "me know in the comment section if you"
    ],
    "ru": [
      "я знаю в разделе комментариев, если вы"
    ]
  },
  {
    "time": [
      384.0,
      386.0
    ],
    "en": [
      "want to support my channel please"
    ],
    "ru": [
      "хочу поддержать мой канал пожалуйста"
    ]
  },
  {
    "time": [
      386.0,
      388.0
    ],
    "en": [
      "consider contributing to my patreon"
    ],
    "ru": [
      "подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      388.0,
      394.0
    ],
    "en": [
      "patreon comm / Jeremy's IT lab I accept"
    ],
    "ru": [
      "patreon comm / ИТ-лаборатория Джереми Принимаю"
    ]
  },
  {
    "time": [
      394.0,
      397.0
    ],
    "en": [
      "Bitcoin and aetherium donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфириума через"
    ]
  },
  {
    "time": [
      397.0,
      399.0
    ],
    "en": [
      "addresses in the description"
    ],
    "ru": [
      "адреса в описании"
    ]
  },
  {
    "time": [
      399.0,
      402.0
    ],
    "en": [
      "I am also a brave verified publisher and"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      402.0,
      405.0
    ],
    "en": [
      "accept bat or basic attention token"
    ],
    "ru": [
      "принять летучую мышь или жетон основного внимания"
    ]
  },
  {
    "time": [
      405.0,
      405.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]