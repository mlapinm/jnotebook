let objs = [
  {
    "time": [
      0.0,
      4.298184
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
      4.298184,
      7.604396
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
      7.604396,
      15.305666
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
      15.305666,
      22.083035
    ],
    "en": [
      "in this lab we will take a look at the routing information protocol known as rip"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим протокол информации о маршрутизации, известный как rip"
    ]
  },
  {
    "time": [
      22.083035,
      28.675555
    ],
    "en": [
      "rip is a dynamic routing protocol as opposed to the static routing we configured in the previous few labs"
    ],
    "ru": [
      "rip - это протокол динамической маршрутизации, в отличие от статической маршрутизации, которую мы настроили в нескольких предыдущих лабораторных работах."
    ]
  },
  {
    "time": [
      28.675555,
      37.257468
    ],
    "en": [
      "in dynamic routing protocols routers share information with each other to determine the best paths to destinations in the network"
    ],
    "ru": [
      "в протоколах динамической маршрутизации маршрутизаторы обмениваются информацией друг с другом для определения наилучших путей к пунктам назначения в сети."
    ]
  },
  {
    "time": [
      37.257468,
      41.30679
    ],
    "en": [
      "rip is a very simple but limited routing protocol"
    ],
    "ru": [
      "rip - очень простой, но ограниченный протокол маршрутизации"
    ]
  },
  {
    "time": [
      41.30679,
      45.83471
    ],
    "en": [
      "you probably won't find it in use in a real life networking scenario"
    ],
    "ru": [
      "вы, вероятно, не найдете его в использовании в реальном сетевом сценарии"
    ]
  },
  {
    "time": [
      45.83471,
      49.389079
    ],
    "en": [
      "you'll rather find a EIGRP or OSPF"
    ],
    "ru": [
      "вы скорее найдете EIGRP или OSPF"
    ]
  },
  {
    "time": [
      49.389079,
      55.362969
    ],
    "en": [
      "however rip is nice and simple and good for learning the basics of routing protocols"
    ],
    "ru": [
      "однако рип хорош, прост и хорош для изучения основ протоколов маршрутизации."
    ]
  },
  {
    "time": [
      55.362969,
      57.285565
    ],
    "en": [
      "and for setting up quick labs"
    ],
    "ru": [
      "и для создания быстрых лабораторий"
    ]
  },
  {
    "time": [
      57.285565,
      60.628357
    ],
    "en": [
      "you should also be familiar with it for the test"
    ],
    "ru": [
      "вы также должны быть знакомы с ним для теста"
    ]
  },
  {
    "time": [
      60.628357,
      66.986836
    ],
    "en": [
      "in this lab we will do some basic rip configurations on two routers r1 and r2"
    ],
    "ru": [
      "В этой лабораторной работе мы сделаем несколько основных конфигураций рипа на двух маршрутизаторах r1 и r2."
    ]
  },
  {
    "time": [
      66.986836,
      72.75884
    ],
    "en": [
      "try to complete the lab yourself first then continue watching this video if you have trouble"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      72.75884,
      75.147343
    ],
    "en": [
      "or watch it after to check your solution"
    ],
    "ru": [
      "или просмотрите его позже, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      75.147343,
      83.104037
    ],
    "en": [
      "step one is to configure rip on r1 and r2 without enabling version two"
    ],
    "ru": [
      "Шаг первый - настроить рип на r1 и r2 без включения второй версии"
    ]
  },
  {
    "time": [
      83.104037,
      85.482525
    ],
    "en": [
      "so we'll keep that rip version one"
    ],
    "ru": [
      "так что мы сохраним эту версию рипа один"
    ]
  },
  {
    "time": [
      85.482525,
      88.020809
    ],
    "en": [
      "I'll go on r1 first"
    ],
    "ru": [
      "Я сначала пойду на r1"
    ]
  },
  {
    "time": [
      88.020809,
      95.41308
    ],
    "en": [
      "enable conf t we configure rip with this command"
    ],
    "ru": [
      "enable conf t мы настраиваем рип с помощью этой команды"
    ]
  },
  {
    "time": [
      95.41308,
      96.936878
    ],
    "en": [
      "router rip"
    ],
    "ru": [
      "роутер"
    ]
  },
  {
    "time": [
      96.936878,
      100.774801
    ],
    "en": [
      "now our one is only connected to one network"
    ],
    "ru": [
      "теперь наш подключен только к одной сети"
    ]
  },
  {
    "time": [
      100.774801,
      105.433844
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
      100.774801,
      105.433844
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
      105.433844,
      108.067482
    ],
    "en": [
      "we can do that with the network command"
    ],
    "ru": [
      "мы можем сделать это с помощью сетевой команды"
    ]
  },
  {
    "time": [
      108.067482,
      112.37732
    ],
    "en": [
      "network 192.168.1.0"
    ],
    "ru": [
      "сеть 192.168.1.0"
    ]
  },
  {
    "time": [
      112.37732,
      114.907305
    ],
    "en": [
      "now let's go on r2"
    ],
    "ru": [
      "теперь пойдем на r2"
    ]
  },
  {
    "time": [
      114.907305,
      121.670664
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
      121.670664,
      131.771647
    ],
    "en": [
      "network 192.168.1.0 now we can activate rip on r2's two other interfaces with just one command"
    ],
    "ru": [
      "сеть 192.168.1.0 теперь мы можем активировать рип на двух других интерфейсах R2 с помощью всего одной команды"
    ]
  },
  {
    "time": [
      131.771647,
      136.494188
    ],
    "en": [
      "that is network 10.0.0.0"
    ],
    "ru": [
      "то есть сеть 10.0.0.0"
    ]
  },
  {
    "time": [
      136.494188,
      144.287191
    ],
    "en": [
      "this will activate rip on all interfaces with an IP address falling within the 10.0.0.0 / 8 class a network"
    ],
    "ru": [
      "это активирует рип на всех интерфейсах с IP-адресом, попадающим в сеть 10.0.0.0 / 8 класса a"
    ]
  },
  {
    "time": [
      144.287191,
      149.75705
    ],
    "en": [
      "the 10.0.1.0 network connected to F 0 0"
    ],
    "ru": [
      "сеть 10.0.1.0, подключенная к F 0 0"
    ]
  },
  {
    "time": [
      149.75705,
      154.316066
    ],
    "en": [
      "and the 10.0.2.0 network connected to F 1 0"
    ],
    "ru": [
      "и сеть 10.0.2.0, подключенная к F 1 0"
    ]
  },
  {
    "time": [
      154.316066,
      157.440102
    ],
    "en": [
      "both fall within this larger class a network"
    ],
    "ru": [
      "оба подпадают под этот более крупный класс сети"
    ]
  },
  {
    "time": [
      157.440102,
      160.363423
    ],
    "en": [
      "and thus rip will be activated on them"
    ],
    "ru": [
      "и таким образом на них будет активирован рип"
    ]
  },
  {
    "time": [
      160.363423,
      166.22346
    ],
    "en": [
      "note that when you use the network command you are telling the router which network to advertise"
    ],
    "ru": [
      "обратите внимание, что когда вы используете команду network, вы сообщаете маршрутизатору, какую сеть рекламировать."
    ]
  },
  {
    "time": [
      166.22346,
      170.143509
    ],
    "en": [
      "your tongue the router which interfaces to activate rip on"
    ],
    "ru": [
      "ваш язык роутер, который интерфейсы для активации рипа"
    ]
  },
  {
    "time": [
      170.143509,
      172.560189
    ],
    "en": [
      "and then it will advertise those networks to neighbors"
    ],
    "ru": [
      "а затем он будет рекламировать эти сети соседям"
    ]
  },
  {
    "time": [
      172.560189,
      176.297825
    ],
    "en": [
      "or that would be the case however"
    ],
    "ru": [
      "или это было бы так, однако"
    ]
  },
  {
    "time": [
      176.297825,
      180.596236
    ],
    "en": [
      "rip version 1 is by its nature a classful routing protocol"
    ],
    "ru": [
      "rip версии 1 по своей природе является классическим протоколом маршрутизации"
    ]
  },
  {
    "time": [
      180.596236,
      183.428391
    ],
    "en": [
      "let's see what that means"
    ],
    "ru": [
      "посмотрим, что это значит"
    ]
  },
  {
    "time": [
      183.428391,
      185.883095
    ],
    "en": [
      "let's go back on r 1"
    ],
    "ru": [
      "давай вернемся на r 1"
    ]
  },
  {
    "time": [
      185.883095,
      190.454984
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      190.454984,
      204.918459
    ],
    "en": [
      "as you can see r1 has learned not the 10.0.1.0/24 and 10.0.2.0 / 24 networks but rather the 10.0.0.0 / 8 network from r2"
    ],
    "ru": [
      "как вы можете видеть, r1 изучил не сети 10.0.1.0/24 и 10.0.2.0 / 24, а сеть 10.0.0.0 / 8 от r2"
    ]
  },
  {
    "time": [
      204.918459,
      212.289274
    ],
    "en": [
      "this is because rip version 1 automatically summarizes network to their classful network"
    ],
    "ru": [
      "это потому, что rip версии 1 автоматически суммирует сеть в свою классовую сеть"
    ]
  },
  {
    "time": [
      212.289274,
      217.018117
    ],
    "en": [
      "if you don't know about class-a ABC and such networks"
    ],
    "ru": [
      "если вы не знаете про класс-азбуку и подобные сети"
    ]
  },
  {
    "time": [
      217.018117,
      220.718708
    ],
    "en": [
      "I won't go into a full explanation here but you will learn about them in your studies"
    ],
    "ru": [
      "Я не буду вдаваться в подробное объяснение здесь, но вы узнаете о них во время учебы."
    ]
  },
  {
    "time": [
      220.718708,
      231.030881
    ],
    "en": [
      "that was step 2 now let's go to step 3 and enable rip version 2 and disable that Auto summarization"
    ],
    "ru": [
      "это был шаг 2, теперь перейдем к шагу 3, включим копирование версии 2 и отключим автоматическое суммирование"
    ]
  },
  {
    "time": [
      231.030881,
      234.111131
    ],
    "en": [
      "since we're on r1 let's do it here first"
    ],
    "ru": [
      "поскольку мы находимся на r1, давайте сначала сделаем это здесь"
    ]
  },
  {
    "time": [
      234.111131,
      238.950036
    ],
    "en": [
      "version 2 that enables rip version 2"
    ],
    "ru": [
      "версия 2, которая позволяет копировать версию 2"
    ]
  },
  {
    "time": [
      238.950036,
      241.324472
    ],
    "en": [
      "no Auto summary"
    ],
    "ru": [
      "нет авто сводки"
    ]
  },
  {
    "time": [
      241.324472,
      243.670736
    ],
    "en": [
      "that disables Auto summary"
    ],
    "ru": [
      "что отключает автоматическое резюме"
    ]
  },
  {
    "time": [
      243.670736,
      246.239246
    ],
    "en": [
      "now let's go on r1"
    ],
    "ru": [
      "теперь пойдем на r1"
    ]
  },
  {
    "time": [
      246.239246,
      251.564592
    ],
    "en": [
      "version 2 no Auto summary"
    ],
    "ru": [
      "версия 2 нет Авто сводка"
    ]
  },
  {
    "time": [
      251.564592,
      262.220431
    ],
    "en": [
      "ok now our two will start advertising it's 10.0.1.0/24 and 10.0.2.0/24 networks to r1"
    ],
    "ru": [
      "Хорошо, теперь наши двое начнут рекламировать это сети 10.0.1.0/24 и 10.0.2.0/24 на r1"
    ]
  },
  {
    "time": [
      262.220431,
      267.579725
    ],
    "en": [
      "instead of summarizing them to the class a network 10.0.0.0 / 8"
    ],
    "ru": [
      "вместо объединения их в класс сеть 10.0.0.0 / 8"
    ]
  },
  {
    "time": [
      267.579725,
      273.896309
    ],
    "en": [
      "summarization is often a good thing in networks and actually in this little network here it makes sense"
    ],
    "ru": [
      "резюмирование часто бывает полезным в сетях, и на самом деле в этой маленькой сети это имеет смысл."
    ]
  },
  {
    "time": [
      273.896309,
      276.679737
    ],
    "en": [
      "however it can also cause a lot of problems"
    ],
    "ru": [
      "однако это также может вызвать множество проблем"
    ]
  },
  {
    "time": [
      276.679737,
      281.028551
    ],
    "en": [
      "and if you're going to be summarizing in networks you'll want to do it manually"
    ],
    "ru": [
      "и если вы собираетесь подводить итоги в сетях, вы захотите сделать это вручную"
    ]
  },
  {
    "time": [
      281.028551,
      283.532838
    ],
    "en": [
      "that's a topic for another time though"
    ],
    "ru": [
      "это тема для другого раза"
    ]
  },
  {
    "time": [
      283.532838,
      285.733738
    ],
    "en": [
      "let's go check on r1"
    ],
    "ru": [
      "давай проверим на r1"
    ]
  },
  {
    "time": [
      285.733738,
      289.618457
    ],
    "en": [
      "do you show IP route"
    ],
    "ru": [
      "вы показываете IP-маршрут?"
    ]
  },
  {
    "time": [
      289.618457,
      295.540824
    ],
    "en": [
      "well we still see that 10.0.0.0 / 8 network"
    ],
    "ru": [
      "ну, мы все еще видим, что сеть 10.0.0.0 / 8"
    ]
  },
  {
    "time": [
      295.540824,
      299.249504
    ],
    "en": [
      "don't worry about that it will be cleared out of the route table in time"
    ],
    "ru": [
      "не беспокойтесь о том, что он будет удален из таблицы маршрутов вовремя"
    ]
  },
  {
    "time": [
      299.249504,
      303.070051
    ],
    "en": [
      "since it has stopped receiving updates for it from r2"
    ],
    "ru": [
      "поскольку он перестал получать обновления для него от r2"
    ]
  },
  {
    "time": [
      303.070051,
      311.276046
    ],
    "en": [
      "but now we can also see the 10.0.1.0/24 and 10.0.2.0/24 networks"
    ],
    "ru": [
      "но теперь мы также можем видеть сети 10.0.1.0/24 и 10.0.2.0/24"
    ]
  },
  {
    "time": [
      311.276046,
      316.002356
    ],
    "en": [
      "so there's the big difference between rip version 1 and rip version 2"
    ],
    "ru": [
      "так что есть большая разница между рипом версии 1 и рипом версии 2"
    ]
  },
  {
    "time": [
      316.002356,
      320.973475
    ],
    "en": [
      "rip version 1 always automatically summarizes networks"
    ],
    "ru": [
      "rip версии 1 всегда автоматически суммирует сети"
    ]
  },
  {
    "time": [
      320.973475,
      325.839522
    ],
    "en": [
      "whereas in version 2 you can and should disable auto summarization"
    ],
    "ru": [
      "тогда как в версии 2 вы можете и должны отключить автоматическое суммирование"
    ]
  },
  {
    "time": [
      325.839522,
      327.649912
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
      327.649912,
      333.85185
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
      333.85185,
      337.10972
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
      337.10972,
      338.967177
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      338.967177,
      343.561275
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
      343.561275,
      352.370153
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
      352.370153,
      357.990074
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
      357.990074,
      366.807249
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
      366.807249,
      366.807249
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
      366.807249,
      366.807249
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
      366.807249,
      366.807249
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]