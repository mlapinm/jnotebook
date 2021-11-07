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
      8.0
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
      8.0,
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
      "supporting me via my patreon where the"
    ],
    "ru": [
      "поддерживая меня через мой патреон, где"
    ]
  },
  {
    "time": [
      12.0,
      13.0
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
      13.0,
      17.0
    ],
    "en": [
      "description in this lab we will"
    ],
    "ru": [
      "описание в этой лаборатории мы будем"
    ]
  },
  {
    "time": [
      17.0,
      20.0
    ],
    "en": [
      "configure rip version 2 on a network to"
    ],
    "ru": [
      "настроить рип версии 2 в сети, чтобы"
    ]
  },
  {
    "time": [
      20.0,
      23.0
    ],
    "en": [
      "allow full connectivity this is similar"
    ],
    "ru": [
      "разрешить полное подключение, это похоже"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "network to the static routing part to"
    ],
    "ru": [
      "сеть к части статической маршрутизации к"
    ]
  },
  {
    "time": [
      25.0,
      29.0
    ],
    "en": [
      "lab in that lab we had to configure full"
    ],
    "ru": [
      "лаборатории в этой лаборатории нам пришлось настроить полную"
    ]
  },
  {
    "time": [
      29.0,
      32.0
    ],
    "en": [
      "connectivity with static routes this lab"
    ],
    "ru": [
      "подключение со статическими маршрутами в этой лабораторной работе"
    ]
  },
  {
    "time": [
      32.0,
      33.0
    ],
    "en": [
      "will demonstrate how much simpler it is"
    ],
    "ru": [
      "продемонстрирует насколько это проще"
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "to do so with the routing protocol I"
    ],
    "ru": [
      "чтобы сделать это с протоколом маршрутизации I"
    ]
  },
  {
    "time": [
      36.0,
      38.0
    ],
    "en": [
      "have increased the font size of the CLI"
    ],
    "ru": [
      "увеличили размер шрифта CLI"
    ]
  },
  {
    "time": [
      38.0,
      40.0
    ],
    "en": [
      "in the network diagram due to some"
    ],
    "ru": [
      "на схеме сети из-за некоторых"
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "comments let me know if the size is good"
    ],
    "ru": [
      "комментарии дайте мне знать, если размер хороший"
    ]
  },
  {
    "time": [
      42.0,
      44.0
    ],
    "en": [
      "or if it's still difficult to see in the"
    ],
    "ru": [
      "или если это все еще трудно увидеть в"
    ]
  },
  {
    "time": [
      44.0,
      48.0
    ],
    "en": [
      "video so currently the devices have all"
    ],
    "ru": [
      "видео, поэтому в настоящее время на устройствах есть все"
    ]
  },
  {
    "time": [
      48.0,
      50.0
    ],
    "en": [
      "been pre-configured with IP addresses"
    ],
    "ru": [
      "были предварительно настроены с IP-адресами"
    ]
  },
  {
    "time": [
      50.0,
      53.0
    ],
    "en": [
      "but none of the PC should be able to pin"
    ],
    "ru": [
      "но ни один из ПК не должен закреплять"
    ]
  },
  {
    "time": [
      53.0,
      55.0
    ],
    "en": [
      "each other because no routing has been"
    ],
    "ru": [
      "друг друга, потому что маршрутизация не проводилась"
    ]
  },
  {
    "time": [
      55.0,
      58.0
    ],
    "en": [
      "configured let's configure rip version 2"
    ],
    "ru": [
      "настроил давайте настроим рип версии 2"
    ]
  },
  {
    "time": [
      58.0,
      62.0
    ],
    "en": [
      "on each of these routers on r1 first"
    ],
    "ru": [
      "на каждом из этих маршрутизаторов сначала на r1"
    ]
  },
  {
    "time": [
      62.0,
      70.0
    ],
    "en": [
      "enable compte router rip first I'll"
    ],
    "ru": [
      "сначала включите копирование роутера compte я"
    ]
  },
  {
    "time": [
      70.0,
      74.0
    ],
    "en": [
      "enable a version 2 version 2 it's not"
    ],
    "ru": [
      "включить версию 2 версия 2 это не"
    ]
  },
  {
    "time": [
      74.0,
      76.0
    ],
    "en": [
      "necessary for this lab but I'll also"
    ],
    "ru": [
      "необходимо для этой лаборатории, но я также"
    ]
  },
  {
    "time": [
      76.0,
      78.0
    ],
    "en": [
      "disable auto summary which is a good"
    ],
    "ru": [
      "отключить автоматическое резюме, что хорошо"
    ]
  },
  {
    "time": [
      78.0,
      83.0
    ],
    "en": [
      "habit no auto our one is connected to 3"
    ],
    "ru": [
      "привычка нет авто наш один подключен к 3"
    ]
  },
  {
    "time": [
      83.0,
      90.0
    ],
    "en": [
      "networks 1000 1200 and 1300 let's enable"
    ],
    "ru": [
      "сети 1000 1200 и 1300 включим"
    ]
  },
  {
    "time": [
      90.0,
      94.0
    ],
    "en": [
      "rip on each of those interfaces net"
    ],
    "ru": [
      "разорвать сеть каждого из этих интерфейсов"
    ]
  },
  {
    "time": [
      94.0,
      97.0
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
      94.0,
      97.0
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
      97.0,
      104.0
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
      97.0,
      104.0
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
      104.0,
      106.0
    ],
    "en": [
      "disable routing updates on interfaces"
    ],
    "ru": [
      "отключить обновления маршрутизации на интерфейсах"
    ]
  },
  {
    "time": [
      106.0,
      110.0
    ],
    "en": [
      "connected to switches g02 in this case"
    ],
    "ru": [
      "подключен к переключателям g02 в этом случае"
    ]
  },
  {
    "time": [
      110.0,
      113.0
    ],
    "en": [
      "we will still advertise the network on"
    ],
    "ru": [
      "мы по-прежнему будем рекламировать сеть на"
    ]
  },
  {
    "time": [
      113.0,
      116.0
    ],
    "en": [
      "the g0 to interface 10000 to other"
    ],
    "ru": [
      "g0 для взаимодействия 10000 с другими"
    ]
  },
  {
    "time": [
      116.0,
      118.0
    ],
    "en": [
      "routers but because there is no router"
    ],
    "ru": [
      "роутеры а потому что роутера нет"
    ]
  },
  {
    "time": [
      118.0,
      120.0
    ],
    "en": [
      "in this direction it's not necessary to"
    ],
    "ru": [
      "в этом направлении нет необходимости"
    ]
  },
  {
    "time": [
      120.0,
      122.0
    ],
    "en": [
      "send updates out of this interface and"
    ],
    "ru": [
      "отправлять обновления из этого интерфейса и"
    ]
  },
  {
    "time": [
      122.0,
      125.0
    ],
    "en": [
      "for security purposes it can be a good"
    ],
    "ru": [
      "в целях безопасности это может быть хорошим"
    ]
  },
  {
    "time": [
      125.0,
      128.0
    ],
    "en": [
      "idea to stop these updates we can do"
    ],
    "ru": [
      "идея остановить эти обновления мы можем сделать"
    ]
  },
  {
    "time": [
      128.0,
      131.0
    ],
    "en": [
      "that with this command passive interface"
    ],
    "ru": [
      "что с этим командным пассивным интерфейсом"
    ]
  },
  {
    "time": [
      131.0,
      132.0
    ],
    "en": [
      "g0 to"
    ],
    "ru": [
      "g0 к"
    ]
  },
  {
    "time": [
      132.0,
      139.0
    ],
    "en": [
      "okay that's it let's go on to our to"
    ],
    "ru": [
      "хорошо, давай перейдем к нашему"
    ]
  },
  {
    "time": [
      139.0,
      147.0
    ],
    "en": [
      "enable compte router rip version 2 no"
    ],
    "ru": [
      "включить compte router rip версия 2 нет"
    ]
  },
  {
    "time": [
      147.0,
      151.0
    ],
    "en": [
      "oto r2 is connected to three networks"
    ],
    "ru": [
      "oto r2 подключен к трем сетям"
    ]
  },
  {
    "time": [
      151.0,
      159.0
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
      151.0,
      159.0
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
      159.0,
      163.0
    ],
    "en": [
      "rip on each of those interfaces net"
    ],
    "ru": [
      "разорвать сеть каждого из этих интерфейсов"
    ]
  },
  {
    "time": [
      163.0,
      172.0
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
      163.0,
      172.0
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
      172.0,
      176.0
    ],
    "en": [
      "disable routing updates on g0 to passive"
    ],
    "ru": [
      "отключить обновления маршрутизации на g0 до пассивного"
    ]
  },
  {
    "time": [
      176.0,
      181.0
    ],
    "en": [
      "interface g0 - that's all for our tea"
    ],
    "ru": [
      "интерфейс g0 - вот и все для нашего чая"
    ]
  },
  {
    "time": [
      181.0,
      190.0
    ],
    "en": [
      "now let's move on to our 3 enable compte"
    ],
    "ru": [
      "теперь давайте перейдем к нашим 3 включения compte"
    ]
  },
  {
    "time": [
      190.0,
      199.0
    ],
    "en": [
      "router rip version 2 no auto net 30000"
    ],
    "ru": [
      "роутер рип версия 2 нет авто сеть 30000"
    ]
  },
  {
    "time": [
      199.0,
      209.0
    ],
    "en": [
      "net 1300 net 3400 dato passive interface"
    ],
    "ru": [
      "net 1300 net 3400 dato пассивный интерфейс"
    ]
  },
  {
    "time": [
      209.0,
      217.0
    ],
    "en": [
      "g0 - finally once more on our 4 enable"
    ],
    "ru": [
      "g0 - наконец-то еще раз на нашем 4-м включении"
    ]
  },
  {
    "time": [
      217.0,
      228.0
    ],
    "en": [
      "compte router rip version 2 no auto net"
    ],
    "ru": [
      "compte router rip version 2 без автоматической сети"
    ]
  },
  {
    "time": [
      228.0,
      238.0
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
      228.0,
      238.0
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
      238.0,
      243.0
    ],
    "en": [
      "interface g0 - ok now let's wait a bit"
    ],
    "ru": [
      "интерфейс g0 - хорошо, подождем немного"
    ]
  },
  {
    "time": [
      243.0,
      245.0
    ],
    "en": [
      "for the routers to send all the routing"
    ],
    "ru": [
      "для маршрутизаторов, чтобы отправить всю маршрутизацию"
    ]
  },
  {
    "time": [
      245.0,
      246.0
    ],
    "en": [
      "updates to each other and learn the"
    ],
    "ru": [
      "обновляет друг друга и узнает"
    ]
  },
  {
    "time": [
      246.0,
      248.0
    ],
    "en": [
      "network this process is called"
    ],
    "ru": [
      "сеть этот процесс называется"
    ]
  },
  {
    "time": [
      248.0,
      251.0
    ],
    "en": [
      "convergence while we're waiting let's"
    ],
    "ru": [
      "конвергенция пока мы ждем давай"
    ]
  },
  {
    "time": [
      251.0,
      256.0
    ],
    "en": [
      "check out some stuff on our 4 and show"
    ],
    "ru": [
      "проверить кое-что на нашем 4 и показать"
    ]
  },
  {
    "time": [
      256.0,
      260.0
    ],
    "en": [
      "IP protocols this is a very handy show"
    ],
    "ru": [
      "IP-протоколы это очень удобное шоу"
    ]
  },
  {
    "time": [
      260.0,
      262.0
    ],
    "en": [
      "command for checking information about"
    ],
    "ru": [
      "команда для проверки информации о"
    ]
  },
  {
    "time": [
      262.0,
      265.0
    ],
    "en": [
      "whatever routing protocol you are using"
    ],
    "ru": [
      "какой бы протокол маршрутизации вы ни использовали"
    ]
  },
  {
    "time": [
      265.0,
      267.0
    ],
    "en": [
      "routing protocol is"
    ],
    "ru": [
      "протокол маршрутизации"
    ]
  },
  {
    "time": [
      267.0,
      270.0
    ],
    "en": [
      "rip as we configured here you can see"
    ],
    "ru": [
      "рип, как мы настроили здесь, вы можете увидеть"
    ]
  },
  {
    "time": [
      270.0,
      273.0
    ],
    "en": [
      "the default timers rip remember these"
    ],
    "ru": [
      "таймеры по умолчанию рип запоминают эти"
    ]
  },
  {
    "time": [
      273.0,
      276.0
    ],
    "en": [
      "especially for the test update timer of"
    ],
    "ru": [
      "особенно для таймера тестового обновления"
    ]
  },
  {
    "time": [
      276.0,
      279.0
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
      276.0,
      279.0
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
      279.0,
      283.0
    ],
    "en": [
      "of 180 seconds and flush timer of 240"
    ],
    "ru": [
      "180 секунд и таймер промывки 240"
    ]
  },
  {
    "time": [
      283.0,
      285.0
    ],
    "en": [
      "seconds"
    ],
    "ru": [
      "секунды"
    ]
  },
  {
    "time": [
      285.0,
      287.0
    ],
    "en": [
      "consult your study materials for"
    ],
    "ru": [
      "проконсультируйтесь с вашими учебными материалами для"
    ]
  },
  {
    "time": [
      287.0,
      290.0
    ],
    "en": [
      "detailed explanations of each you can"
    ],
    "ru": [
      "подробные объяснения каждого вы можете"
    ]
  },
  {
    "time": [
      290.0,
      292.0
    ],
    "en": [
      "also see information like which"
    ],
    "ru": [
      "также смотрите информацию о том, какая"
    ]
  },
  {
    "time": [
      292.0,
      295.0
    ],
    "en": [
      "interfaces updates are being sent out on"
    ],
    "ru": [
      "обновления интерфейсов рассылаются на"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "notice that the Gigabit Ethernet 0 2"
    ],
    "ru": [
      "обратите внимание, что Gigabit Ethernet 0 2"
    ]
  },
  {
    "time": [
      298.0,
      301.0
    ],
    "en": [
      "interface isn't here although we can see"
    ],
    "ru": [
      "интерфейса здесь нет, хотя мы видим"
    ]
  },
  {
    "time": [
      301.0,
      303.0
    ],
    "en": [
      "it is advertising the network down here"
    ],
    "ru": [
      "это реклама сети здесь"
    ]
  },
  {
    "time": [
      303.0,
      306.0
    ],
    "en": [
      "this is because we made it a passive"
    ],
    "ru": [
      "это потому, что мы сделали его пассивным"
    ]
  },
  {
    "time": [
      306.0,
      310.0
    ],
    "en": [
      "interface which is indicated here we can"
    ],
    "ru": [
      "интерфейс, который здесь указан, мы можем"
    ]
  },
  {
    "time": [
      310.0,
      312.0
    ],
    "en": [
      "also see which neighboring routers we"
    ],
    "ru": [
      "также посмотрите, какие соседние маршрутизаторы мы"
    ]
  },
  {
    "time": [
      312.0,
      314.0
    ],
    "en": [
      "are getting updates from and when we got"
    ],
    "ru": [
      "получаем обновления от и когда мы получили"
    ]
  },
  {
    "time": [
      314.0,
      318.0
    ],
    "en": [
      "the last update anyway let's go on PC"
    ],
    "ru": [
      "последнее обновление все равно пойдем на ПК"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "one now and see if we can ping each"
    ],
    "ru": [
      "один сейчас и посмотрим, сможем ли мы пинговать каждый"
    ]
  },
  {
    "time": [
      321.0,
      336.0
    ],
    "en": [
      "other PC ping 2000 10 that's PC 2"
    ],
    "ru": [
      "другой ПК ping 2000 10 это ПК 2"
    ]
  },
  {
    "time": [
      336.0,
      341.0
    ],
    "en": [
      "it works next let's ping pc3 ping 3000"
    ],
    "ru": [
      "он работает дальше давайте пинг pc3 пинг 3000"
    ]
  },
  {
    "time": [
      341.0,
      355.0
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
      341.0,
      355.0
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
      355.0,
      364.0
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
      355.0,
      364.0
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
      364.0,
      366.0
    ],
    "en": [
      "it works as well we have successfully"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      366.0,
      368.0
    ],
    "en": [
      "configured ripp to allow full"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      368.0,
      370.0
    ],
    "en": [
      "connectivity throughout the network"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      370.0,
      375.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "выпускается еженедельно, если у вас есть запросы на"
    ]
  },
  {
    "time": [
      375.0,
      378.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "любые конкретные лаборатории дайте мне знать в"
    ]
  },
  {
    "time": [
      378.0,
      380.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "мой канал, пожалуйста, рассмотрите возможность участия"
    ]
  },
  {
    "time": [
      383.0,
      386.0
    ],
    "en": [
      "released weekly if you have requests for"
    ],
    "ru": [
      "в мой patreon patreon comm / Jeremy's IT"
    ]
  },
  {
    "time": [
      386.0,
      388.0
    ],
    "en": [
      "any specific labs let me know in the"
    ],
    "ru": [
      "лаборатория я принимаю биткойны и эфириум"
    ]
  },
  {
    "time": [
      388.0,
      391.0
    ],
    "en": [
      "comment section if you want to support"
    ],
    "ru": [
      "пожертвования через адреса в"
    ]
  },
  {
    "time": [
      391.0,
      393.0
    ],
    "en": [
      "my channel please consider contributing"
    ],
    "ru": [
      "описание я тоже храбрый проверил"
    ]
  },
  {
    "time": [
      393.0,
      397.0
    ],
    "en": [
      "to my patreon patreon comm / Jeremy's IT"
    ],
    "ru": [
      "издатель и принять летучую мышь или базовый"
    ]
  },
  {
    "time": [
      397.0,
      400.0
    ],
    "en": [
      "lab I accept Bitcoin and aetherium"
    ],
    "ru": [
      "пожертвования токенов внимания в храбрых"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "donations via the addresses in the"
    ],
    "ru": [
      "браузер"
    ]
  },
  {
    "time": [
      402.0,
      406.0
    ],
    "en": [
      "description I am also a brave verified"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      406.0,
      409.0
    ],
    "en": [
      "publisher and accept bat or basic"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "attention token donations in the brave"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      411.0,
      411.0
    ],
    "en": [
      "browser"
    ],
    "ru": [
      ""
    ]
  }
]