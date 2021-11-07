let objs = [
  {
    "time": [
      0.0,
      4.075696
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
      4.075696,
      7.502437
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
      7.502437,
      14.756163
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon where the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, пожалуйста, подумайте о поддержке меня через мой патреон, где параметры криптовалюты в описании"
    ]
  },
  {
    "time": [
      14.756163,
      22.278097
    ],
    "en": [
      "in this lab we will configure rip version 2 on a network to allow full connectivity"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим rip версии 2 в сети, чтобы обеспечить полное подключение"
    ]
  },
  {
    "time": [
      22.278097,
      26.671865
    ],
    "en": [
      "this is similar network to the static routing part 2 lab"
    ],
    "ru": [
      "это похожая сеть на статическую маршрутизацию, часть 2."
    ]
  },
  {
    "time": [
      26.671865,
      31.454445
    ],
    "en": [
      "in that lab we had to configure full connectivity with static routes"
    ],
    "ru": [
      "в этой лабораторной работе нам нужно было настроить полное подключение со статическими маршрутами."
    ]
  },
  {
    "time": [
      31.454445,
      36.045342
    ],
    "en": [
      "this lab will demonstrate how much simpler it is to do so with the routing protocol"
    ],
    "ru": [
      "эта лабораторная работа продемонстрирует, насколько проще сделать это с помощью протокола маршрутизации."
    ]
  },
  {
    "time": [
      36.045342,
      41.469296
    ],
    "en": [
      "I have increased the font size of the CLI in the network diagram due to some comments"
    ],
    "ru": [
      "Я увеличил размер шрифта интерфейса командной строки на сетевой диаграмме из-за некоторых комментариев"
    ]
  },
  {
    "time": [
      41.469296,
      44.842341
    ],
    "en": [
      "let me know if the size is good or if it's still difficult to see in the video"
    ],
    "ru": [
      "дайте мне знать, если размер хороший или его все еще трудно увидеть на видео"
    ]
  },
  {
    "time": [
      44.842341,
      51.016682
    ],
    "en": [
      "so currently the devices have all been pre-configured with IP addresses"
    ],
    "ru": [
      "поэтому в настоящее время все устройства предварительно настроены с IP-адресами"
    ]
  },
  {
    "time": [
      51.016682,
      56.245834
    ],
    "en": [
      "but none of the PC should be able to pin each other because no routing has been configured"
    ],
    "ru": [
      "но ни один из ПК не должен иметь возможность закреплять друг друга, потому что маршрутизация не была настроена"
    ]
  },
  {
    "time": [
      56.245834,
      60.190859
    ],
    "en": [
      "let's configure rip version 2 on each of these routers"
    ],
    "ru": [
      "настроим рип версии 2 на каждом из этих роутеров"
    ]
  },
  {
    "time": [
      60.190859,
      62.527533
    ],
    "en": [
      "on r1 first"
    ],
    "ru": [
      "на r1 сначала"
    ]
  },
  {
    "time": [
      62.527533,
      68.559086
    ],
    "en": [
      "enable conf t router rip"
    ],
    "ru": [
      "включить копирование маршрутизатора конфигурации"
    ]
  },
  {
    "time": [
      68.559086,
      72.255245
    ],
    "en": [
      "first I'll enable a version 2"
    ],
    "ru": [
      "сначала включу версию 2"
    ]
  },
  {
    "time": [
      72.255245,
      77.919249
    ],
    "en": [
      "version 2 it's not necessary for this lab but I'll also disable auto summary"
    ],
    "ru": [
      "версия 2 не требуется для этой лабораторной работы, но я также отключу автоматическое резюме"
    ]
  },
  {
    "time": [
      77.919249,
      79.433937
    ],
    "en": [
      "which is a good habit"
    ],
    "ru": [
      "это хорошая привычка"
    ]
  },
  {
    "time": [
      79.433937,
      81.167271
    ],
    "en": [
      "no auto"
    ],
    "ru": [
      "нет авто"
    ]
  },
  {
    "time": [
      81.167271,
      90.441407
    ],
    "en": [
      "r1 is connected to 3 networks 10.0.0.0 12.0.0.0 and 13.0.0.0"
    ],
    "ru": [
      "r1 подключен к 3 сетям 10.0.0.0 12.0.0.0 и 13.0.0.0"
    ]
  },
  {
    "time": [
      90.441407,
      93.03583
    ],
    "en": [
      "let's enable rip on each of those interfaces"
    ],
    "ru": [
      "давайте включим рип на каждом из этих интерфейсов"
    ]
  },
  {
    "time": [
      93.03583,
      102.80563
    ],
    "en": [
      "net 10.0.0.0 net 12.0.0.0 net 13.0.0.0"
    ],
    "ru": [
      "нетто 10.0.0.0 нетто 12.0.0.0 нетто 13.0.0.0"
    ]
  },
  {
    "time": [
      102.80563,
      108.534522
    ],
    "en": [
      "now we also have to disable routing updates on interfaces connected to switches"
    ],
    "ru": [
      "теперь нам также нужно отключить обновления маршрутизации на интерфейсах, подключенных к коммутаторам"
    ]
  },
  {
    "time": [
      108.534522,
      110.945545
    ],
    "en": [
      "g02 in this case"
    ],
    "ru": [
      "g02 в этом случае"
    ]
  },
  {
    "time": [
      110.945545,
      117.550208
    ],
    "en": [
      "we will still advertise the network on the g0 to interface 10.0.0.0 to other routers"
    ],
    "ru": [
      "мы по-прежнему будем рекламировать сеть на g0 для взаимодействия 10.0.0.0 с другими маршрутизаторами"
    ]
  },
  {
    "time": [
      117.550208,
      123.211369
    ],
    "en": [
      "but because there is no router in this direction it's not necessary to send updates out of this interface"
    ],
    "ru": [
      "но поскольку в этом направлении нет маршрутизатора, нет необходимости отправлять обновления из этого интерфейса"
    ]
  },
  {
    "time": [
      123.211369,
      127.444661
    ],
    "en": [
      "and for security purposes it can be a good idea to stop these updates"
    ],
    "ru": [
      "и в целях безопасности было бы неплохо остановить эти обновления"
    ]
  },
  {
    "time": [
      127.444661,
      129.568268
    ],
    "en": [
      "we can do that with this command"
    ],
    "ru": [
      "мы можем сделать это с помощью этой команды"
    ]
  },
  {
    "time": [
      129.568268,
      133.040996
    ],
    "en": [
      "passive interface g0 2"
    ],
    "ru": [
      "пассивный интерфейс g0 2"
    ]
  },
  {
    "time": [
      133.040996,
      135.174496
    ],
    "en": [
      "okay that's it"
    ],
    "ru": [
      "хорошо, вот и все"
    ]
  },
  {
    "time": [
      135.174496,
      138.081334
    ],
    "en": [
      "let's go on to r2"
    ],
    "ru": [
      "давай перейдем к r2"
    ]
  },
  {
    "time": [
      138.081334,
      144.921116
    ],
    "en": [
      "enable conf t router rip"
    ],
    "ru": [
      "включить копирование маршрутизатора конфигурации"
    ]
  },
  {
    "time": [
      144.921116,
      151.289706
    ],
    "en": [
      "version 2 no outo r2 is connected to three networks"
    ],
    "ru": [
      "версия 2 no outo r2 подключен к трем сетям"
    ]
  },
  {
    "time": [
      151.289706,
      158.100229
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
      151.289706,
      158.100229
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
      158.100229,
      161.747604
    ],
    "en": [
      "so let's configure rip on each of those interfaces"
    ],
    "ru": [
      "так что давайте настроим рип на каждом из этих интерфейсов"
    ]
  },
  {
    "time": [
      161.747604,
      171.763249
    ],
    "en": [
      "net 20.0.0.0 net 12.0.0.0 net 24.0.0.0"
    ],
    "ru": [
      "нетто 20.0.0.0 нетто 12.0.0.0 нетто 24.0.0.0"
    ]
  },
  {
    "time": [
      171.763249,
      175.937103
    ],
    "en": [
      "now let's disable routing updates on g0 2"
    ],
    "ru": [
      "теперь давайте отключим обновления маршрутизации на g0 2"
    ]
  },
  {
    "time": [
      175.937103,
      179.209978
    ],
    "en": [
      "passive interface g0 2"
    ],
    "ru": [
      "пассивный интерфейс g0 2"
    ]
  },
  {
    "time": [
      179.209978,
      181.41029
    ],
    "en": [
      "that's all for r2"
    ],
    "ru": [
      "это все для R2"
    ]
  },
  {
    "time": [
      181.41029,
      196.769456
    ],
    "en": [
      "now let's move on to r 3 enable conf t router rip version 2 no auto"
    ],
    "ru": [
      "теперь перейдем к r 3 включить conf t router rip version 2 no auto"
    ]
  },
  {
    "time": [
      196.769456,
      211.463226
    ],
    "en": [
      "net 30.0.0.0 net 13.0.0.0 net 34.0.0.0 auto passive interface g0 2"
    ],
    "ru": [
      "net 30.0.0.0 net 13.0.0.0 net 34.0.0.0 автоматический пассивный интерфейс g0 2"
    ]
  },
  {
    "time": [
      211.463226,
      215.602226
    ],
    "en": [
      "finally once more on r 4"
    ],
    "ru": [
      "наконец еще раз на р 4"
    ]
  },
  {
    "time": [
      215.602226,
      237.771392
    ],
    "en": [
      "enable conf t router rip version 2 no auto net 40.0.0.0 net 24.0.0.0 net 34.0.0.0"
    ],
    "ru": [
      "включить conf t router rip version 2 no auto net 40.0.0.0 net 24.0.0.0 net 34.0.0.0"
    ]
  },
  {
    "time": [
      237.771392,
      243.248121
    ],
    "en": [
      "passive interface g0 2 ok"
    ],
    "ru": [
      "пассивный интерфейс g0 2 ok"
    ]
  },
  {
    "time": [
      243.248121,
      247.257433
    ],
    "en": [
      "now let's wait a bit for the routers to send all the routing updates to each other and learn the network"
    ],
    "ru": [
      "теперь давайте немного подождем, пока маршрутизаторы отправят друг другу все обновления маршрутизации и изучим сеть"
    ]
  },
  {
    "time": [
      247.257433,
      250.323516
    ],
    "en": [
      "this process is called convergence"
    ],
    "ru": [
      "этот процесс называется сходимостью"
    ]
  },
  {
    "time": [
      250.323516,
      254.282599
    ],
    "en": [
      "while we're waiting let's check out some stuff on r 4"
    ],
    "ru": [
      "пока мы ждем, давайте проверим кое-что на r 4"
    ]
  },
  {
    "time": [
      254.282599,
      258.790724
    ],
    "en": [
      "and show IP protocols"
    ],
    "ru": [
      "и показать IP-протоколы"
    ]
  },
  {
    "time": [
      258.790724,
      264.575453
    ],
    "en": [
      "this is a very handy show command for checking information about whatever routing protocol you are using"
    ],
    "ru": [
      "это очень удобная команда show для проверки информации о том, какой протокол маршрутизации вы используете."
    ]
  },
  {
    "time": [
      264.575453,
      272.373786
    ],
    "en": [
      "routing protocol is rip as we configured here you can see the default timers rip"
    ],
    "ru": [
      "протокол маршрутизации рип, как мы настроили здесь, вы можете увидеть рип таймеров по умолчанию"
    ]
  },
  {
    "time": [
      272.373786,
      284.642265
    ],
    "en": [
      "remember these especially for the test update timer of 30 seconds invalid and hold-down timers of 180 seconds and flush timer of 240 seconds"
    ],
    "ru": [
      "запомните это особенно для таймера тестового обновления на 30 секунд недействительным, таймеров удержания на 180 секунд и таймера промывки на 240 секунд"
    ]
  },
  {
    "time": [
      284.642265,
      289.762473
    ],
    "en": [
      "consult your study materials for detailed explanations of each"
    ],
    "ru": [
      "обратитесь к своим учебным материалам для подробного объяснения каждого"
    ]
  },
  {
    "time": [
      289.762473,
      295.368014
    ],
    "en": [
      "you can also see information like which interfaces updates are being sent out on"
    ],
    "ru": [
      "вы также можете увидеть информацию о том, какие обновления интерфейсов отправляются на"
    ]
  },
  {
    "time": [
      295.368014,
      299.918639
    ],
    "en": [
      "notice that the Gigabit Ethernet 0 2 interface isn't here"
    ],
    "ru": [
      "обратите внимание, что интерфейса Gigabit Ethernet 0 2 здесь нет"
    ]
  },
  {
    "time": [
      299.918639,
      303.64368
    ],
    "en": [
      "although we can see it is advertising the network down here"
    ],
    "ru": [
      "хотя мы видим, что это реклама сети здесь"
    ]
  },
  {
    "time": [
      303.64368,
      306.9912
    ],
    "en": [
      "this is because we made it a passive interface"
    ],
    "ru": [
      "это потому, что мы сделали его пассивным интерфейсом"
    ]
  },
  {
    "time": [
      306.9912,
      308.982804
    ],
    "en": [
      "which is indicated here"
    ],
    "ru": [
      "что здесь указано"
    ]
  },
  {
    "time": [
      308.982804,
      315.22922
    ],
    "en": [
      "we can also see which neighboring routers we are getting updates from and when we got the last update"
    ],
    "ru": [
      "мы также можем видеть, с каких соседних маршрутизаторов мы получаем обновления, и когда мы получили последнее обновление"
    ]
  },
  {
    "time": [
      315.22922,
      322.467865
    ],
    "en": [
      "anyway let's go on PC one now and see if we can ping each other PC"
    ],
    "ru": [
      "в любом случае, давайте сейчас пойдем на один ПК и посмотрим, сможем ли мы пинговать друг друга на ПК"
    ]
  },
  {
    "time": [
      322.467865,
      330.580093
    ],
    "en": [
      "ping 20.0.0.10 that's PC 2"
    ],
    "ru": [
      "пинг 20.0.0.10 это ПК 2"
    ]
  },
  {
    "time": [
      330.580093,
      338.360863
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      338.360863,
      341.091154
    ],
    "en": [
      "next let's ping pc3"
    ],
    "ru": [
      "дальше давайте пингуем pc3"
    ]
  },
  {
    "time": [
      341.091154,
      352.012425
    ],
    "en": [
      "ping 30.0.0.10 it works too"
    ],
    "ru": [
      "пинг 30.0.0.10 тоже работает"
    ]
  },
  {
    "time": [
      352.012425,
      365.739925
    ],
    "en": [
      "finally PC for ping 40.0.0.10 it works as well"
    ],
    "ru": [
      "наконец ПК для ping 40.0.0.10 тоже работает"
    ]
  },
  {
    "time": [
      365.739925,
      370.45455
    ],
    "en": [
      "we have successfully configured ripp to allow full connectivity throughout the network"
    ],
    "ru": [
      "мы успешно настроили ripp, чтобы обеспечить полное подключение по всей сети"
    ]
  },
  {
    "time": [
      370.45455,
      372.492529
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
      372.492529,
      379.634445
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
      379.634445,
      384.692653
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
      384.692653,
      389.284715
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
      389.284715,
      398.083903
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
      398.083903,
      403.701423
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
      403.701423,
      412.469257
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
      412.469257,
      412.469257
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
      412.469257,
      412.469257
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
      412.469257,
      412.469257
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]