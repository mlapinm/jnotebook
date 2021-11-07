let objs = [
  {
    "time": [
      0.0,
      4.689582
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
      4.689582,
      8.325894
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
      8.325894,
      15.861477
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
      15.861477,
      21.88231
    ],
    "en": [
      "in this lab the second of our labs focusing on ACLs"
    ],
    "ru": [
      "в этой лабораторной работе вторая из наших лабораторных работ посвящена спискам контроля доступа."
    ]
  },
  {
    "time": [
      21.88231,
      24.37483
    ],
    "en": [
      "we will configure extended ACLs"
    ],
    "ru": [
      "настроим расширенные ACL"
    ]
  },
  {
    "time": [
      24.37483,
      30.772476
    ],
    "en": [
      "unlike standard ACLs which only filter traffic based on the source IP address"
    ],
    "ru": [
      "в отличие от стандартных ACL, которые фильтруют трафик только на основе IP-адреса источника"
    ]
  },
  {
    "time": [
      30.772476,
      37.710059
    ],
    "en": [
      "extended ACLs can filter on things like protocol source IP address and destination IP address"
    ],
    "ru": [
      "расширенные ACL могут фильтровать такие вещи, как IP-адрес источника протокола и IP-адрес назначения"
    ]
  },
  {
    "time": [
      37.710059,
      46.553412
    ],
    "en": [
      "our task is to configure and apply a single extended ACL to allow only pc-1 to access server one"
    ],
    "ru": [
      "наша задача - настроить и применить единый расширенный ACL, чтобы позволить только pc-1 получить доступ к серверу 1"
    ]
  },
  {
    "time": [
      46.553412,
      53.778785
    ],
    "en": [
      "and only hosts on the 192.168.2.0/24 network to access server 2"
    ],
    "ru": [
      "и только хосты в сети 192.168.2.0/24 для доступа к серверу 2"
    ]
  },
  {
    "time": [
      53.778785,
      58.118764
    ],
    "en": [
      "first where should I apply the ACL"
    ],
    "ru": [
      "сначала, где я должен применить ACL"
    ]
  },
  {
    "time": [
      58.118764,
      63.526451
    ],
    "en": [
      "the general rule is to apply extended ACLs as close as possible to the source"
    ],
    "ru": [
      "общее правило - применять расширенные ACL как можно ближе к источнику"
    ]
  },
  {
    "time": [
      63.526451,
      69.399367
    ],
    "en": [
      "as opposed to standard ACLs which should be applied as close as possible to the destination"
    ],
    "ru": [
      "в отличие от стандартных ACL, которые должны применяться как можно ближе к месту назначения"
    ]
  },
  {
    "time": [
      69.399367,
      73.43745
    ],
    "en": [
      "I want to achieve this in a single ACL"
    ],
    "ru": [
      "Я хочу добиться этого в одном ACL"
    ]
  },
  {
    "time": [
      73.43745,
      77.095595
    ],
    "en": [
      "so I'll apply it to our ones s20 interface"
    ],
    "ru": [
      "так что я применим его к нашему интерфейсу s20"
    ]
  },
  {
    "time": [
      77.095595,
      79.984011
    ],
    "en": [
      "so let's go on r 1"
    ],
    "ru": [
      "так что пойдем на r 1"
    ]
  },
  {
    "time": [
      79.984011,
      91.54428
    ],
    "en": [
      "enable conf t create an extended ACL you begin with the same command as for standard ACLs access lists"
    ],
    "ru": [
      "enable conf t создать расширенный ACL, который вы начинаете с той же команды, что и для стандартных списков доступа ACL"
    ]
  },
  {
    "time": [
      91.54428,
      94.396571
    ],
    "en": [
      "now I'll use context-sensitive help"
    ],
    "ru": [
      "теперь я воспользуюсь контекстно-зависимой помощью"
    ]
  },
  {
    "time": [
      94.396571,
      105.659634
    ],
    "en": [
      "I mentioned this in the previous video but remember that 1 to 99 is the range for standard ACLs and 100 to 199 is the range for extended ACLs"
    ],
    "ru": [
      "Я упоминал об этом в предыдущем видео, но помните, что от 1 до 99 - это диапазон для стандартных ACL, а от 100 до 199 - это диапазон для расширенных ACL."
    ]
  },
  {
    "time": [
      105.659634,
      107.82505
    ],
    "en": [
      "I'll go with 100"
    ],
    "ru": [
      "Я пойду с 100"
    ]
  },
  {
    "time": [
      107.82505,
      110.470987
    ],
    "en": [
      "context-sensitive help again"
    ],
    "ru": [
      "контекстно-зависимая справка снова"
    ]
  },
  {
    "time": [
      110.470987,
      114.79007
    ],
    "en": [
      "I'll choose permit to allow pc-1 to access server 1"
    ],
    "ru": [
      "Я выберу разрешение, чтобы разрешить pc-1 доступ к серверу 1"
    ]
  },
  {
    "time": [
      114.79007,
      120.111632
    ],
    "en": [
      "afterward I'll create another statement to deny all other traffic to server 1"
    ],
    "ru": [
      "после этого я создам еще один оператор, чтобы запретить весь другой трафик на сервер 1"
    ]
  },
  {
    "time": [
      120.111632,
      123.214965
    ],
    "en": [
      "let's do contact sensitive help again"
    ],
    "ru": [
      "давай снова сделаем контактную помощь"
    ]
  },
  {
    "time": [
      123.214965,
      127.356277
    ],
    "en": [
      "now you can see that this is different than for standard ACLs"
    ],
    "ru": [
      "теперь вы можете видеть, что это отличается от стандартных ACL"
    ]
  },
  {
    "time": [
      127.356277,
      131.524089
    ],
    "en": [
      "here are a bunch of protocols which you can use to filter traffic"
    ],
    "ru": [
      "вот несколько протоколов, которые вы можете использовать для фильтрации трафика"
    ]
  },
  {
    "time": [
      131.524089,
      136.400318
    ],
    "en": [
      "the general catch-all is IP so let's go with that"
    ],
    "ru": [
      "общая сводка - IP, так что давайте с этим"
    ]
  },
  {
    "time": [
      136.400318,
      138.720026
    ],
    "en": [
      "let's check the options again"
    ],
    "ru": [
      "давайте еще раз проверим варианты"
    ]
  },
  {
    "time": [
      138.720026,
      142.653026
    ],
    "en": [
      "now I'll choose host since we're filtering from one host"
    ],
    "ru": [
      "сейчас выберу хост, так как мы фильтруем с одного хоста"
    ]
  },
  {
    "time": [
      142.653026,
      146.121213
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
      142.653026,
      146.121213
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
      146.121213,
      153.531504
    ],
    "en": [
      "next I'll enter host again and set the destination 192.168.3.100"
    ],
    "ru": [
      "Затем я снова вхожу в хост и устанавливаю пункт назначения 192.168.3.100"
    ]
  },
  {
    "time": [
      153.531504,
      156.466524
    ],
    "en": [
      "contact sensitive help again"
    ],
    "ru": [
      "контактная помощь снова"
    ]
  },
  {
    "time": [
      156.466524,
      160.407753
    ],
    "en": [
      "you can see there are other options but we'll end the command here"
    ],
    "ru": [
      "вы можете видеть, что есть и другие варианты, но мы закончим команду здесь"
    ]
  },
  {
    "time": [
      160.407753,
      164.919836
    ],
    "en": [
      "ok so that's our first entry in the ACL"
    ],
    "ru": [
      "хорошо, это наша первая запись в ACL"
    ]
  },
  {
    "time": [
      164.919836,
      169.34069
    ],
    "en": [
      "now let's create another one to deny all other traffic to server 1"
    ],
    "ru": [
      "теперь давайте создадим еще один, чтобы запретить весь другой трафик на сервер 1"
    ]
  },
  {
    "time": [
      169.34069,
      177.652148
    ],
    "en": [
      "access list 100 deny IP any host 192.168.3.100"
    ],
    "ru": [
      "список доступа 100 запретить IP любой хост 192.168.3.100"
    ]
  },
  {
    "time": [
      177.652148,
      181.332314
    ],
    "en": [
      "this denies traffic from any host to server 1"
    ],
    "ru": [
      "это запрещает трафик с любого хоста на сервер 1"
    ]
  },
  {
    "time": [
      181.332314,
      184.353418
    ],
    "en": [
      "and will apply to any traffic except PC 1"
    ],
    "ru": [
      "и будет применяться к любому трафику, кроме ПК 1"
    ]
  },
  {
    "time": [
      184.353418,
      188.212876
    ],
    "en": [
      "now let's satisfy the second requirement"
    ],
    "ru": [
      "теперь давайте удовлетворим второе требование"
    ]
  },
  {
    "time": [
      188.212876,
      196.282854
    ],
    "en": [
      "we have to allow only hosts on the 192.168.2.0/24 network to access server 2"
    ],
    "ru": [
      "мы должны разрешить доступ к серверу 2 только хостам в сети 192.168.2.0/24"
    ]
  },
  {
    "time": [
      196.282854,
      199.562666
    ],
    "en": [
      "first let's create another permit statement"
    ],
    "ru": [
      "сначала давайте создадим еще одно разрешение"
    ]
  },
  {
    "time": [
      199.562666,
      213.977892
    ],
    "en": [
      "access list 100 permit IP 192.168.2.0 0.0.0.255 192.168.3.101"
    ],
    "ru": [
      "список доступа 100 разрешение IP 192.168.2.0 0.0.0.255 192.168.3.101"
    ]
  },
  {
    "time": [
      213.977892,
      219.460954
    ],
    "en": [
      "this command permits any hosts in the 192.168.20.0 slash 24 network"
    ],
    "ru": [
      "эта команда разрешает любые хосты в сети 192.168.20.0 с косой чертой 24"
    ]
  },
  {
    "time": [
      219.460954,
      223.595972
    ],
    "en": [
      "to access the host 192.168.1.1"
    ],
    "ru": [
      "для доступа к хосту 192.168.1.1"
    ]
  },
  {
    "time": [
      223.595972,
      224.974722
    ],
    "en": [
      "which is server 2"
    ],
    "ru": [
      "который является сервером 2"
    ]
  },
  {
    "time": [
      224.974722,
      228.76295
    ],
    "en": [
      "now lets deny all other traffic to server 2"
    ],
    "ru": [
      "теперь позволяет запретить весь другой трафик на сервер 2"
    ]
  },
  {
    "time": [
      228.76295,
      239.32849
    ],
    "en": [
      "access list 100 deny IP any host 192.168.3.101 ok we have fulfilled both requirements"
    ],
    "ru": [
      "список доступа 100 запретить IP любой хост 192.168.3.101 хорошо, мы выполнили оба требования"
    ]
  },
  {
    "time": [
      239.32849,
      244.155823
    ],
    "en": [
      "now let's create one more statement to allow any other traffic"
    ],
    "ru": [
      "теперь давайте создадим еще один оператор, чтобы разрешить любой другой трафик"
    ]
  },
  {
    "time": [
      244.155823,
      249.44751
    ],
    "en": [
      "remember at the end of any ACL there is an implicit deny any"
    ],
    "ru": [
      "помните, что в конце любого ACL есть неявное отклонение любого"
    ]
  },
  {
    "time": [
      249.44751,
      254.906218
    ],
    "en": [
      "our requirements didn't state to deny all other traffic so let's override that implicit deny any"
    ],
    "ru": [
      "в наших требованиях не говорилось о запрете всего остального трафика, поэтому давайте переопределим это неявное запрещение любого"
    ]
  },
  {
    "time": [
      254.906218,
      260.118384
    ],
    "en": [
      "access list 100 permit IP any any"
    ],
    "ru": [
      "список доступа 100 разрешить IP любой любой"
    ]
  },
  {
    "time": [
      260.118384,
      267.178238
    ],
    "en": [
      "that's it finally let's apply the ACL to r1 s20 interface"
    ],
    "ru": [
      "вот и все, наконец, давайте применим ACL к интерфейсу r1 s20"
    ]
  },
  {
    "time": [
      267.178238,
      269.915717
    ],
    "en": [
      "interface s20"
    ],
    "ru": [
      "интерфейс s20"
    ]
  },
  {
    "time": [
      269.915717,
      273.35655
    ],
    "en": [
      "IP access group 100 out"
    ],
    "ru": [
      "Группа доступа IP 100 из"
    ]
  },
  {
    "time": [
      273.35655,
      278.810717
    ],
    "en": [
      "now this ACL will apply to all outbound traffic on our ones s20 interface"
    ],
    "ru": [
      "теперь этот ACL будет применяться ко всему исходящему трафику на нашем интерфейсе s20"
    ]
  },
  {
    "time": [
      278.810717,
      280.957196
    ],
    "en": [
      "let's test it out"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      280.957196,
      284.022529
    ],
    "en": [
      "from each PC I'll ping each server"
    ],
    "ru": [
      "с каждого ПК пингую каждый сервер"
    ]
  },
  {
    "time": [
      284.022529,
      289.719341
    ],
    "en": [
      "first PC one it should be able to access server one but not server two"
    ],
    "ru": [
      "первый компьютер, он должен иметь доступ к серверу один, но не серверу два"
    ]
  },
  {
    "time": [
      289.719341,
      294.758195
    ],
    "en": [
      "ping 192.168.3.100"
    ],
    "ru": [
      "пинг 192.168.3.100"
    ]
  },
  {
    "time": [
      294.758195,
      305.572278
    ],
    "en": [
      "it works next ping 192.168.3.101"
    ],
    "ru": [
      "работает следующий пинг 192.168.3.101"
    ]
  },
  {
    "time": [
      305.572278,
      307.401965
    ],
    "en": [
      "it doesn't work"
    ],
    "ru": [
      "это не работает"
    ]
  },
  {
    "time": [
      307.401965,
      310.460006
    ],
    "en": [
      "ok functioning as intended so far"
    ],
    "ru": [
      "нормально работает, как и предполагалось"
    ]
  },
  {
    "time": [
      310.460006,
      315.839047
    ],
    "en": [
      "now PC 2 it shouldn't be able to access server 1 or server 2"
    ],
    "ru": [
      "теперь ПК 2 не должен иметь доступ к серверу 1 или серверу 2"
    ]
  },
  {
    "time": [
      315.839047,
      320.735859
    ],
    "en": [
      "ping 192.168.3.100 doesn't work"
    ],
    "ru": [
      "пинг 192.168.3.100 не работает"
    ]
  },
  {
    "time": [
      320.735859,
      325.383942
    ],
    "en": [
      "ping 192.168.3.101 doesn't work again"
    ],
    "ru": [
      "пинг 192.168.3.101 снова не работает"
    ]
  },
  {
    "time": [
      325.383942,
      328.206337
    ],
    "en": [
      "now let's go on PC 3"
    ],
    "ru": [
      "теперь пойдем на ПК 3"
    ]
  },
  {
    "time": [
      328.206337,
      332.753212
    ],
    "en": [
      "it shouldn't be able to ping server 1 but it should be able to ping the server 2"
    ],
    "ru": [
      "он не должен иметь возможность пинговать сервер 1, но он должен иметь возможность пинговать сервер 2"
    ]
  },
  {
    "time": [
      332.753212,
      338.526044
    ],
    "en": [
      "ping 192.168.3.100 doesn't work"
    ],
    "ru": [
      "пинг 192.168.3.100 не работает"
    ]
  },
  {
    "time": [
      338.526044,
      349.784709
    ],
    "en": [
      "ping 192.168.c it works as expected"
    ],
    "ru": [
      "ping 192.168.c работает как положено"
    ]
  },
  {
    "time": [
      349.784709,
      354.948584
    ],
    "en": [
      "finally PC four which should be the same as PC three"
    ],
    "ru": [
      "наконец, ПК 4, который должен быть таким же, как ПК 3"
    ]
  },
  {
    "time": [
      354.948584,
      367.40904
    ],
    "en": [
      "came 192.168.3.100 doesn't work vping 192.168.3.101 it works"
    ],
    "ru": [
      "пришел 192.168.3.100 не работает впинг 192.168.3.101 работает"
    ]
  },
  {
    "time": [
      367.40904,
      369.934727
    ],
    "en": [
      "so our ACL is functioning as intended"
    ],
    "ru": [
      "так что наш ACL функционирует как задумано"
    ]
  },
  {
    "time": [
      369.934727,
      371.478352
    ],
    "en": [
      "that's all for this lab"
    ],
    "ru": [
      "это все для этой лаборатории"
    ]
  },
  {
    "time": [
      371.478352,
      379.593185
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
      379.593185,
      384.97556
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, подобные этой, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      384.97556,
      389.425351
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
      389.425351,
      398.079435
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      398.079435,
      403.599872
    ],
    "en": [
      "I accept Bitcoin and etherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      403.599872,
      412.539101
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
      412.539101,
      412.539101
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
      412.539101,
      412.539101
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
      412.539101,
      412.539101
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]