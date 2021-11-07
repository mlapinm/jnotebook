let objs = [
  {
    "time": [
      0.0,
      4.39727
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      4.39727,
      7.710895
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "скачать лабораторный файл можно по ссылке в описании"
    ]
  },
  {
    "time": [
      7.710895,
      14.967436
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon or the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, пожалуйста, подумайте о поддержке меня через мой патреон или варианты криптовалюты в описании"
    ]
  },
  {
    "time": [
      14.967436,
      21.40704
    ],
    "en": [
      "this lab will be one last lab focusing exclusively on ACLs"
    ],
    "ru": [
      "эта лаборатория будет последней лабораторией, сосредоточенной исключительно на ACL"
    ]
  },
  {
    "time": [
      21.40704,
      25.619894
    ],
    "en": [
      "this time we will configure named standard ACLs"
    ],
    "ru": [
      "на этот раз мы настроим именованные стандартные ACL"
    ]
  },
  {
    "time": [
      25.619894,
      29.453956
    ],
    "en": [
      "as opposed to the numbered ACLs we configured in previous labs"
    ],
    "ru": [
      "в отличие от нумерованных списков ACL, которые мы настроили в предыдущих лабораторных работах."
    ]
  },
  {
    "time": [
      29.453956,
      34.759498
    ],
    "en": [
      "also remember that standard ACLs filter based only on source address"
    ],
    "ru": [
      "также помните, что стандартный фильтр ACL основан только на исходном адресе"
    ]
  },
  {
    "time": [
      34.759498,
      40.146081
    ],
    "en": [
      "as opposed to extended ACLs which use other parameters such as destination address as well"
    ],
    "ru": [
      "в отличие от расширенных списков контроля доступа, которые также используют другие параметры, такие как адрес назначения."
    ]
  },
  {
    "time": [
      40.146081,
      61.990309
    ],
    "en": [
      "our first requirement is that hosts in the 192.168.1.0 / 24 and 192.168.2.0 a CL zon are ones F 0 0 and F 1 0 interfaces"
    ],
    "ru": [
      "наше первое требование состоит в том, что хосты в зоне 192.168.1.0 / 24 и 192.168.2.0 в зоне CL должны быть интерфейсами F 0 0 и F 1 0."
    ]
  },
  {
    "time": [
      61.990309,
      69.890579
    ],
    "en": [
      "first let's create the ACL preventing hosts in the 192.168.2.0/24 network"
    ],
    "ru": [
      "сначала создадим ACL, предотвращающий хосты в сети 192.168.2.0/24"
    ]
  },
  {
    "time": [
      69.890579,
      74.513558
    ],
    "en": [
      "from communicating with the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "от связи с сетью 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      74.513558,
      84.979473
    ],
    "en": [
      "on r one an able conf t number ACLs are configured with the command access list"
    ],
    "ru": [
      "на одном доступном номере конфигурации ACL настроены с помощью списка доступа к командам"
    ]
  },
  {
    "time": [
      84.979473,
      90.273181
    ],
    "en": [
      "but named ACLs are configured with this command IP access list"
    ],
    "ru": [
      "но именованные ACL настроены с помощью этого командного списка доступа IP"
    ]
  },
  {
    "time": [
      90.273181,
      92.633701
    ],
    "en": [
      "now let's check the options"
    ],
    "ru": [
      "теперь давайте проверим варианты"
    ]
  },
  {
    "time": [
      92.633701,
      95.166096
    ],
    "en": [
      "we'll go with standard for this lab"
    ],
    "ru": [
      "мы будем придерживаться стандарта для этой лаборатории"
    ]
  },
  {
    "time": [
      95.166096,
      100.700866
    ],
    "en": [
      "let's check the game now notice you can also create a numbered ACL with this command"
    ],
    "ru": [
      "давайте проверим игру, обратите внимание, что вы также можете создать нумерованный ACL с помощью этой команды"
    ]
  },
  {
    "time": [
      100.700866,
      110.638593
    ],
    "en": [
      "however let's give it a name to two one meaning from the 192.168.2.0 at work"
    ],
    "ru": [
      "однако давайте дадим ему имя для двух, одно значение из 192.168.2.0 на работе"
    ]
  },
  {
    "time": [
      110.638593,
      113.389176
    ],
    "en": [
      "to the 192.168.1.0 last 24 network"
    ],
    "ru": [
      "в сеть 192.168.1.0 последних 24"
    ]
  },
  {
    "time": [
      113.389176,
      117.034467
    ],
    "en": [
      "now let's check the options"
    ],
    "ru": [
      "теперь давайте проверим варианты"
    ]
  },
  {
    "time": [
      117.034467,
      122.284842
    ],
    "en": [
      "there are none so clearly this is different from our previous ACL configuration"
    ],
    "ru": [
      "их нет, так что это явно отличается от нашей предыдущей конфигурации ACL"
    ]
  },
  {
    "time": [
      122.284842,
      124.566467
    ],
    "en": [
      "let's hit enter to see what happens"
    ],
    "ru": [
      "давай нажмем Enter, чтобы посмотреть, что произойдет"
    ]
  },
  {
    "time": [
      124.566467,
      131.538904
    ],
    "en": [
      "as you can see we have created a sorry we have entered a separate configuration mode"
    ],
    "ru": [
      "как вы можете видеть, мы создали извините, что вошли в отдельный режим конфигурации"
    ]
  },
  {
    "time": [
      131.538904,
      134.707029
    ],
    "en": [
      "from here we will configure the contents of this a CL"
    ],
    "ru": [
      "отсюда мы настроим содержимое этого CL"
    ]
  },
  {
    "time": [
      134.707029,
      136.863154
    ],
    "en": [
      "let's check what options there are"
    ],
    "ru": [
      "давайте проверим, какие есть варианты"
    ]
  },
  {
    "time": [
      136.863154,
      140.361237
    ],
    "en": [
      "let's create a deny statement first"
    ],
    "ru": [
      "давайте сначала создадим заявление об отказе"
    ]
  },
  {
    "time": [
      140.361237,
      148.078236
    ],
    "en": [
      "deny 192.168.2.0 0.0.0.255"
    ],
    "ru": [
      "отрицать 192.168.2.0 0.0.0.255"
    ]
  },
  {
    "time": [
      148.078236,
      150.281214
    ],
    "en": [
      "now let's check the options"
    ],
    "ru": [
      "теперь давайте проверим варианты"
    ]
  },
  {
    "time": [
      150.281214,
      153.695381
    ],
    "en": [
      "there are none because this is a standard ACL"
    ],
    "ru": [
      "их нет, потому что это стандартный ACL"
    ]
  },
  {
    "time": [
      153.695381,
      157.151693
    ],
    "en": [
      "so we only configure the source IP that we are filtering"
    ],
    "ru": [
      "поэтому мы настраиваем только исходный IP-адрес, который мы фильтруем"
    ]
  },
  {
    "time": [
      157.151693,
      161.613109
    ],
    "en": [
      "now let's create one more entry to allow all other traffic"
    ],
    "ru": [
      "теперь давайте создадим еще одну запись, чтобы разрешить весь другой трафик"
    ]
  },
  {
    "time": [
      161.613109,
      165.791859
    ],
    "en": [
      "because there is still that implicit deny any at the end of the ACL"
    ],
    "ru": [
      "потому что все еще есть неявное запрещение любого в конце ACL"
    ]
  },
  {
    "time": [
      165.791859,
      170.455421
    ],
    "en": [
      "permit any exit okay"
    ],
    "ru": [
      "разрешить любой выход, хорошо"
    ]
  },
  {
    "time": [
      170.455421,
      174.920608
    ],
    "en": [
      "that's it before applying that ACL"
    ],
    "ru": [
      "это все, прежде чем применять этот ACL"
    ]
  },
  {
    "time": [
      174.920608,
      181.542337
    ],
    "en": [
      "let's create the second ACL to prevent traffic from the 192.168.1.0 slash 24 network"
    ],
    "ru": [
      "давайте создадим второй ACL для предотвращения трафика из сети 192.168.1.0 slash 24"
    ]
  },
  {
    "time": [
      181.542337,
      185.998128
    ],
    "en": [
      "from reaching the 192.168.2.0 / 24 network"
    ],
    "ru": [
      "от достижения сети 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      185.998128,
      189.167274
    ],
    "en": [
      "IP access list standard"
    ],
    "ru": [
      "Стандарт списка IP-доступа"
    ]
  },
  {
    "time": [
      189.167274,
      199.658961
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
      189.167274,
      199.658961
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
      199.658961,
      205.608711
    ],
    "en": [
      "ok we have created both ACLs necessary for the first requirement"
    ],
    "ru": [
      "хорошо, мы создали оба ACL, необходимые для первого требования"
    ]
  },
  {
    "time": [
      205.608711,
      207.191419
    ],
    "en": [
      "now let's apply them"
    ],
    "ru": [
      "теперь давайте применим их"
    ]
  },
  {
    "time": [
      207.191419,
      214.691815
    ],
    "en": [
      "exit first let's go on f00 interface f00"
    ],
    "ru": [
      "сначала выйдите, перейдем к интерфейсу f00 f00"
    ]
  },
  {
    "time": [
      214.691815,
      220.907919
    ],
    "en": [
      "on this interface we will block traffic from 192.168.2.0 the interface"
    ],
    "ru": [
      "на этом интерфейсе мы заблокируем трафик с 192.168.2.0 интерфейса"
    ]
  },
  {
    "time": [
      220.907919,
      226.703585
    ],
    "en": [
      "so IP access group 2 - 1 out"
    ],
    "ru": [
      "поэтому группа доступа IP 2 - 1 выход"
    ]
  },
  {
    "time": [
      226.703585,
      237.577168
    ],
    "en": [
      "now let's apply the other ACL to f10 interface f10 IP access group 1 - 2 out"
    ],
    "ru": [
      "теперь давайте применим другой ACL к интерфейсу f10 f10 IP access group 1-2 out"
    ]
  },
  {
    "time": [
      237.577168,
      241.81371
    ],
    "en": [
      "now let's test this configuration"
    ],
    "ru": [
      "теперь давайте протестируем эту конфигурацию"
    ]
  },
  {
    "time": [
      241.81371,
      245.486397
    ],
    "en": [
      "I'll try to ping from pc1 to pc2"
    ],
    "ru": [
      "Попробую пинговать с pc1 на pc2"
    ]
  },
  {
    "time": [
      245.486397,
      256.973417
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
      245.486397,
      256.973417
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
      256.973417,
      263.968374
    ],
    "en": [
      "and to pc 4 ping 192.168.2.14 to same thing"
    ],
    "ru": [
      "а на пк 4 пинг 192.168.2.14 на одно и то же"
    ]
  },
  {
    "time": [
      263.968374,
      268.017394
    ],
    "en": [
      "just to make sure I'll do some pings from PC three as well"
    ],
    "ru": [
      "просто чтобы убедиться, что я тоже сделаю пинги с третьего компьютера"
    ]
  },
  {
    "time": [
      268.017394,
      272.099456
    ],
    "en": [
      "ping 192.168.1.11"
    ],
    "ru": [
      "пинг 192.168.1.11"
    ]
  },
  {
    "time": [
      272.099456,
      281.52483
    ],
    "en": [
      "doesn't work and ping 192.168.1.11 okay so looks like our configuration worked"
    ],
    "ru": [
      "не работает и пинг 192.168.1.11 в порядке, похоже, наша конфигурация сработала"
    ]
  },
  {
    "time": [
      281.52483,
      285.323705
    ],
    "en": [
      "now let's go to the next requirement"
    ],
    "ru": [
      "теперь перейдем к следующему требованию"
    ]
  },
  {
    "time": [
      285.323705,
      294.88085
    ],
    "en": [
      "hosts in the 192.168.2.0 192.168.3.0 / 24 network"
    ],
    "ru": [
      "хосты в сети 192.168.2.0 192.168.3.0 / 24"
    ]
  },
  {
    "time": [
      294.88085,
      302.201579
    ],
    "en": [
      "remember the general rule that standard ACLs should be applied as close as possible to the destination"
    ],
    "ru": [
      "помните общее правило, что стандартные ACL должны применяться как можно ближе к месту назначения"
    ]
  },
  {
    "time": [
      302.201579,
      308.585558
    ],
    "en": [
      "in this case the destination is 192.168.3.0 / 24"
    ],
    "ru": [
      "в этом случае адресатом 192.168.3.0 / 24"
    ]
  },
  {
    "time": [
      308.585558,
      311.823516
    ],
    "en": [
      "so let's configure the ACL on r2"
    ],
    "ru": [
      "Итак, давайте настроим ACL на r2"
    ]
  },
  {
    "time": [
      311.823516,
      320.227599
    ],
    "en": [
      "enable conf t IP access list standard 2 to 3"
    ],
    "ru": [
      "enable conf t Список IP-доступа стандарт от 2 до 3"
    ]
  },
  {
    "time": [
      320.227599,
      331.427723
    ],
    "en": [
      "deny 192.168.2.0 0.0.0.255 permit any exit"
    ],
    "ru": [
      "запретить 192.168.2.0 0.0.0.255 разрешить любой выход"
    ]
  },
  {
    "time": [
      331.427723,
      335.917681
    ],
    "en": [
      "now let's apply it outbound on r2 f00 interface"
    ],
    "ru": [
      "теперь применим его исходящий на интерфейсе r2 f00"
    ]
  },
  {
    "time": [
      335.917681,
      339.470972
    ],
    "en": [
      "interface f00"
    ],
    "ru": [
      "интерфейс f00"
    ]
  },
  {
    "time": [
      339.470972,
      343.139472
    ],
    "en": [
      "IP access group 2 to 3 out"
    ],
    "ru": [
      "Группа доступа IP с 2 по 3 выход"
    ]
  },
  {
    "time": [
      343.139472,
      346.129013
    ],
    "en": [
      "finally let's test"
    ],
    "ru": [
      "наконец-то давайте протестируем"
    ]
  },
  {
    "time": [
      346.129013,
      350.389451
    ],
    "en": [
      "I'll try to ping from PC 3 to server 1 and server 2"
    ],
    "ru": [
      "Попробую пинговать с ПК 3 на сервер 1 и сервер 2"
    ]
  },
  {
    "time": [
      350.389451,
      357.708054
    ],
    "en": [
      "ping 192.168.3.100 destination host unreachable"
    ],
    "ru": [
      "ping 192.168.3.100 целевой хост недоступен"
    ]
  },
  {
    "time": [
      357.708054,
      364.276783
    ],
    "en": [
      "ping 192.168.3.101 destination host unreachable"
    ],
    "ru": [
      "ping 192.168.3.101 целевой хост недоступен"
    ]
  },
  {
    "time": [
      364.276783,
      367.054324
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
      367.054324,
      374.458533
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны."
    ]
  },
  {
    "time": [
      374.458533,
      377.464408
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      377.464408,
      379.316366
    ],
    "en": [
      "which we be released weekly"
    ],
    "ru": [
      "который мы будем выпускать еженедельно"
    ]
  },
  {
    "time": [
      379.316366,
      383.912032
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      383.912032,
      392.971928
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm / Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm / ИТ-лабораторию Джереми"
    ]
  },
  {
    "time": [
      392.971928,
      399.042782
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      399.042782,
      407.90599
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      407.90599,
      407.90599
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
      407.90599,
      407.90599
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
      407.90599,
      407.90599
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]