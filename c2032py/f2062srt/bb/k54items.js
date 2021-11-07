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
      17.0
    ],
    "en": [
      "description also please subscribe to the"
    ],
    "ru": [
      "описание также подпишитесь на"
    ]
  },
  {
    "time": [
      17.0,
      21.0
    ],
    "en": [
      "channel for more labs like this in this"
    ],
    "ru": [
      "канал для других подобных лабораторий в этом"
    ]
  },
  {
    "time": [
      21.0,
      23.0
    ],
    "en": [
      "lab we will take a look at single area"
    ],
    "ru": [
      "лаборатории мы рассмотрим одну область"
    ]
  },
  {
    "time": [
      23.0,
      26.0
    ],
    "en": [
      "OSPF we will configure it on these four"
    ],
    "ru": [
      "OSPF мы настроим его на эти четыре"
    ]
  },
  {
    "time": [
      26.0,
      30.0
    ],
    "en": [
      "routers to achieve full connectivity"
    ],
    "ru": [
      "маршрутизаторы для обеспечения полного подключения"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "OSPF also supports a hierarchical multi"
    ],
    "ru": [
      "OSPF также поддерживает иерархическую мульти"
    ]
  },
  {
    "time": [
      33.0,
      35.0
    ],
    "en": [
      "area design but that will be for the"
    ],
    "ru": [
      "дизайн области, но это будет для"
    ]
  },
  {
    "time": [
      35.0,
      39.0
    ],
    "en": [
      "next lab this time we will do a simple"
    ],
    "ru": [
      "в следующей лабораторной работе на этот раз мы сделаем простой"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "OSPF configuration and then do some"
    ],
    "ru": [
      "Конфигурация OSPF, а затем выполните некоторые"
    ]
  },
  {
    "time": [
      42.0,
      44.0
    ],
    "en": [
      "tweaking to affect the path traffic"
    ],
    "ru": [
      "настройка, чтобы повлиять на трафик пути"
    ]
  },
  {
    "time": [
      44.0,
      47.0
    ],
    "en": [
      "takes the first step is to configure a"
    ],
    "ru": [
      "первым делом нужно настроить"
    ]
  },
  {
    "time": [
      47.0,
      50.0
    ],
    "en": [
      "loopback address on each router note"
    ],
    "ru": [
      "адрес обратной связи на каждом примечании маршрутизатора"
    ]
  },
  {
    "time": [
      50.0,
      52.0
    ],
    "en": [
      "that this isn't a necessary step for"
    ],
    "ru": [
      "что это не обязательный шаг для"
    ]
  },
  {
    "time": [
      52.0,
      56.0
    ],
    "en": [
      "OSPF however we will do this first so"
    ],
    "ru": [
      "OSPF, однако мы сделаем это в первую очередь, поэтому"
    ]
  },
  {
    "time": [
      56.0,
      58.0
    ],
    "en": [
      "that the loopback address becomes the"
    ],
    "ru": [
      "что адрес обратной связи становится"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "OSPF router ID each router uses to"
    ],
    "ru": [
      "Идентификатор маршрутизатора OSPF, который каждый маршрутизатор использует для"
    ]
  },
  {
    "time": [
      61.0,
      65.0
    ],
    "en": [
      "identify itself to neighbors having"
    ],
    "ru": [
      "идентифицировать себя с соседями, имеющими"
    ]
  },
  {
    "time": [
      65.0,
      69.0
    ],
    "en": [
      "router ids of 1.1.1 1 2 2 2 2 and so on"
    ],
    "ru": [
      "идентификаторы маршрутизатора 1.1.1 1 2 2 2 2 и т. д."
    ]
  },
  {
    "time": [
      69.0,
      74.0
    ],
    "en": [
      "will simplify things as for how the"
    ],
    "ru": [
      "упростит то, как"
    ]
  },
  {
    "time": [
      74.0,
      78.0
    ],
    "en": [
      "router ideas can is determined manual"
    ],
    "ru": [
      "Идеи маршрутизатора могут быть определены вручную"
    ]
  },
  {
    "time": [
      78.0,
      81.0
    ],
    "en": [
      "configuration takes precedence however"
    ],
    "ru": [
      "однако конфигурация имеет приоритет"
    ]
  },
  {
    "time": [
      81.0,
      83.0
    ],
    "en": [
      "if it's not manually configured the"
    ],
    "ru": [
      "если он не настроен вручную,"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "highest loopback address becomes the red"
    ],
    "ru": [
      "наивысший адрес обратной связи становится красным"
    ]
  },
  {
    "time": [
      85.0,
      86.0
    ],
    "en": [
      "or ID"
    ],
    "ru": [
      "или ID"
    ]
  },
  {
    "time": [
      86.0,
      88.0
    ],
    "en": [
      "if there is no loopback interface"
    ],
    "ru": [
      "если нет интерфейса обратной петли"
    ]
  },
  {
    "time": [
      88.0,
      91.0
    ],
    "en": [
      "address the highest address of another"
    ],
    "ru": [
      "адрес наивысший адрес другого"
    ]
  },
  {
    "time": [
      91.0,
      95.0
    ],
    "en": [
      "interface becomes the router ID we"
    ],
    "ru": [
      "интерфейс становится идентификатором маршрутизатора, который мы"
    ]
  },
  {
    "time": [
      95.0,
      96.0
    ],
    "en": [
      "should create these loop backs before we"
    ],
    "ru": [
      "должны создать эти петли перед тем, как мы"
    ]
  },
  {
    "time": [
      96.0,
      99.0
    ],
    "en": [
      "configure OSPF because if we do it after"
    ],
    "ru": [
      "настроить OSPF, потому что если мы сделаем это после"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "the routers won't update the router IDs"
    ],
    "ru": [
      "маршрутизаторы не обновляют идентификаторы маршрутизаторов"
    ]
  },
  {
    "time": [
      102.0,
      107.0
    ],
    "en": [
      "unless we reset the OSPF process that's"
    ],
    "ru": [
      "если мы не сбросим процесс OSPF,"
    ]
  },
  {
    "time": [
      107.0,
      109.0
    ],
    "en": [
      "no problem in a lab like this but in a"
    ],
    "ru": [
      "нет проблем в такой лаборатории, но в"
    ]
  },
  {
    "time": [
      109.0,
      111.0
    ],
    "en": [
      "real network you can't just reset your"
    ],
    "ru": [
      "реальная сеть, вы не можете просто сбросить"
    ]
  },
  {
    "time": [
      111.0,
      114.0
    ],
    "en": [
      "routing protocols at any time anyway"
    ],
    "ru": [
      "протоколы маршрутизации в любом случае"
    ]
  },
  {
    "time": [
      114.0,
      117.0
    ],
    "en": [
      "let's make those loopback interfaces on"
    ],
    "ru": [
      "давайте сделаем эти петлевые интерфейсы на"
    ]
  },
  {
    "time": [
      117.0,
      125.0
    ],
    "en": [
      "our one an able call 40 interface l0 for"
    ],
    "ru": [
      "наш один способный вызов 40 интерфейс l0 для"
    ]
  },
  {
    "time": [
      125.0,
      133.0
    ],
    "en": [
      "loop x0 IP address 1.1.11"
    ],
    "ru": [
      "loop x0 IP-адрес 1.1.11"
    ]
  },
  {
    "time": [
      133.0,
      137.0
    ],
    "en": [
      "five exit we don't have to use the no"
    ],
    "ru": [
      "пять выход, нам не нужно использовать нет"
    ]
  },
  {
    "time": [
      137.0,
      139.0
    ],
    "en": [
      "shutdown command on a loopback interface"
    ],
    "ru": [
      "команда выключения на интерфейсе обратной связи"
    ]
  },
  {
    "time": [
      139.0,
      147.0
    ],
    "en": [
      "next are to enable coffee/tea interface"
    ],
    "ru": [
      "далее нужно включить интерфейс кофе / чая"
    ]
  },
  {
    "time": [
      147.0,
      155.0
    ],
    "en": [
      "l0 IP address - - - - 255 255 255 255"
    ],
    "ru": [
      "l0 IP-адрес - - - - 255 255 255 255 255"
    ]
  },
  {
    "time": [
      155.0,
      164.0
    ],
    "en": [
      "exit next r3 enable coffee/tea interface"
    ],
    "ru": [
      "выйти следующий r3 включить интерфейс кофе / чая"
    ]
  },
  {
    "time": [
      164.0,
      168.0
    ],
    "en": [
      "l0 IP address three three three three"
    ],
    "ru": [
      "l0 IP-адрес три три три три"
    ]
  },
  {
    "time": [
      168.0,
      177.0
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
      168.0,
      177.0
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
      177.0,
      182.0
    ],
    "en": [
      "enable coffee/tea interface l0 IP"
    ],
    "ru": [
      "включить интерфейс кофе / чая l0 IP"
    ]
  },
  {
    "time": [
      182.0,
      189.0
    ],
    "en": [
      "address for 4.4.4 255 255 255 255 exit"
    ],
    "ru": [
      "адрес для 4.4.4 255 255 255 255 255 выход"
    ]
  },
  {
    "time": [
      189.0,
      191.0
    ],
    "en": [
      "okay that's it for our loopback"
    ],
    "ru": [
      "хорошо, это для нашей петли"
    ]
  },
  {
    "time": [
      191.0,
      195.0
    ],
    "en": [
      "addresses next let's configure OSPF on"
    ],
    "ru": [
      "адреса далее давайте настроим OSPF на"
    ]
  },
  {
    "time": [
      195.0,
      198.0
    ],
    "en": [
      "each router and advertise the routes"
    ],
    "ru": [
      "каждый маршрутизатор и объявляет маршруты"
    ]
  },
  {
    "time": [
      198.0,
      202.0
    ],
    "en": [
      "let's go back to our one router OSPF"
    ],
    "ru": [
      "вернемся к нашему единственному роутеру OSPF"
    ]
  },
  {
    "time": [
      202.0,
      206.0
    ],
    "en": [
      "then we have to enter a process ID in"
    ],
    "ru": [
      "тогда мы должны ввести идентификатор процесса в"
    ]
  },
  {
    "time": [
      206.0,
      208.0
    ],
    "en": [
      "almost all circumstances you will only"
    ],
    "ru": [
      "почти все обстоятельства вы будете только"
    ]
  },
  {
    "time": [
      208.0,
      212.0
    ],
    "en": [
      "use a single OSPF process on a router"
    ],
    "ru": [
      "использовать один процесс OSPF на маршрутизаторе"
    ]
  },
  {
    "time": [
      212.0,
      214.0
    ],
    "en": [
      "however you can create multiple"
    ],
    "ru": [
      "однако вы можете создать несколько"
    ]
  },
  {
    "time": [
      214.0,
      216.0
    ],
    "en": [
      "processes and each will keep a separate"
    ],
    "ru": [
      "процессов, и каждый будет вести отдельный"
    ]
  },
  {
    "time": [
      216.0,
      220.0
    ],
    "en": [
      "database"
    ],
    "ru": [
      "база данных"
    ]
  },
  {
    "time": [
      220.0,
      222.0
    ],
    "en": [
      "also the process ID is locally"
    ],
    "ru": [
      "также идентификатор процесса локально"
    ]
  },
  {
    "time": [
      222.0,
      224.0
    ],
    "en": [
      "significant it can be different on each"
    ],
    "ru": [
      "значительный это может быть разным по каждому"
    ]
  },
  {
    "time": [
      224.0,
      225.0
    ],
    "en": [
      "router and they can still become"
    ],
    "ru": [
      "маршрутизатор и они все еще могут стать"
    ]
  },
  {
    "time": [
      225.0,
      228.0
    ],
    "en": [
      "neighbors just to prove that I'll use a"
    ],
    "ru": [
      "соседи просто чтобы доказать, что я использую"
    ]
  },
  {
    "time": [
      228.0,
      231.0
    ],
    "en": [
      "different router ID or sorry a different"
    ],
    "ru": [
      "другой идентификатор маршрутизатора или извините другой"
    ]
  },
  {
    "time": [
      231.0,
      234.0
    ],
    "en": [
      "process ID on each router let's go with"
    ],
    "ru": [
      "идентификатор процесса на каждом маршрутизаторе, давайте пойдем с"
    ]
  },
  {
    "time": [
      234.0,
      239.0
    ],
    "en": [
      "one for our one now let's advertise our"
    ],
    "ru": [
      "один для нашего теперь давайте рекламировать наши"
    ]
  },
  {
    "time": [
      239.0,
      241.0
    ],
    "en": [
      "networks let me explain a little how"
    ],
    "ru": [
      "сети, позвольте мне немного объяснить, как"
    ]
  },
  {
    "time": [
      241.0,
      245.0
    ],
    "en": [
      "OSPF network command works it looks for"
    ],
    "ru": [
      "Сетевая команда OSPF работает, которую ищет"
    ]
  },
  {
    "time": [
      245.0,
      247.0
    ],
    "en": [
      "interfaces within the range stated in"
    ],
    "ru": [
      "интерфейсы в пределах диапазона, указанного в"
    ]
  },
  {
    "time": [
      247.0,
      250.0
    ],
    "en": [
      "the network command and then advertises"
    ],
    "ru": [
      "сетевая команда, а затем объявляет"
    ]
  },
  {
    "time": [
      250.0,
      253.0
    ],
    "en": [
      "the network prefix on those interfaces"
    ],
    "ru": [
      "сетевой префикс на этих интерфейсах"
    ]
  },
  {
    "time": [
      253.0,
      255.0
    ],
    "en": [
      "it doesn't necessarily advertise the"
    ],
    "ru": [
      "это не обязательно рекламирует"
    ]
  },
  {
    "time": [
      255.0,
      257.0
    ],
    "en": [
      "exact network used in the network"
    ],
    "ru": [
      "точная сеть, используемая в сети"
    ]
  },
  {
    "time": [
      257.0,
      265.0
    ],
    "en": [
      "command for example network 12000 then i"
    ],
    "ru": [
      "команда, например, сеть 12000, затем я"
    ]
  },
  {
    "time": [
      265.0,
      267.0
    ],
    "en": [
      "put in a wildcard mask which if you"
    ],
    "ru": [
      "вставьте подстановочную маску, которая, если вы"
    ]
  },
  {
    "time": [
      267.0,
      269.0
    ],
    "en": [
      "remember is inverse of a regular mask"
    ],
    "ru": [
      "помните, это инверсия обычной маски"
    ]
  },
  {
    "time": [
      269.0,
      273.0
    ],
    "en": [
      "the 12000 network is configured as a"
    ],
    "ru": [
      "сеть 12000 настроена как"
    ]
  },
  {
    "time": [
      273.0,
      277.0
    ],
    "en": [
      "slash 24 but if I for example configure"
    ],
    "ru": [
      "косая черта 24, но если я, например, настрою"
    ]
  },
  {
    "time": [
      277.0,
      282.0
    ],
    "en": [
      "a slash 8 with O 255 255 255 it will"
    ],
    "ru": [
      "косая черта 8 с O 255 ​​255 255 это будет"
    ]
  },
  {
    "time": [
      282.0,
      284.0
    ],
    "en": [
      "still advertise the slash 24 network on"
    ],
    "ru": [
      "все еще рекламируют сеть слэш 24 на"
    ]
  },
  {
    "time": [
      284.0,
      290.0
    ],
    "en": [
      "f10 not a slash 8 okay next enter area"
    ],
    "ru": [
      "f10 не косая черта 8 хорошо, следующий вход в зону"
    ]
  },
  {
    "time": [
      290.0,
      294.0
    ],
    "en": [
      "followed by the area number this is"
    ],
    "ru": [
      "за которым следует номер области, это"
    ]
  },
  {
    "time": [
      294.0,
      296.0
    ],
    "en": [
      "single area OSPF so let's just put 0 on"
    ],
    "ru": [
      "OSPF с одной областью, так что давайте просто поставим 0 на"
    ]
  },
  {
    "time": [
      296.0,
      301.0
    ],
    "en": [
      "all of these next one the G 0 0"
    ],
    "ru": [
      "все эти следующие G 0 0"
    ]
  },
  {
    "time": [
      301.0,
      307.0
    ],
    "en": [
      "interface network 14000 I'll set it as a"
    ],
    "ru": [
      "интерфейсная сеть 14000 Я поставлю его как"
    ]
  },
  {
    "time": [
      307.0,
      309.0
    ],
    "en": [
      "slash 16 this time just the show"
    ],
    "ru": [
      "слэш 16 на этот раз просто шоу"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "anything works as long as the interface"
    ],
    "ru": [
      "все работает, пока интерфейс"
    ]
  },
  {
    "time": [
      311.0,
      314.0
    ],
    "en": [
      "prefix falls within that range"
    ],
    "ru": [
      "префикс попадает в этот диапазон"
    ]
  },
  {
    "time": [
      314.0,
      321.0
    ],
    "en": [
      "ohh-ohh 255 dot 255 area 0 finally the"
    ],
    "ru": [
      "ох-ох 255 точек 255 область 0 наконец"
    ]
  },
  {
    "time": [
      321.0,
      328.0
    ],
    "en": [
      "loopback address network 1.1.1 100 200"
    ],
    "ru": [
      "шлейфовая адресная сеть 1.1.1 100200"
    ]
  },
  {
    "time": [
      328.0,
      332.0
    ],
    "en": [
      "area 0 this time i configured the exact"
    ],
    "ru": [
      "область 0 на этот раз я настроил точную"
    ]
  },
  {
    "time": [
      332.0,
      336.0
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
      332.0,
      336.0
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
      336.0,
      338.0
    ],
    "en": [
      "one more time because it's very"
    ],
    "ru": [
      "еще раз, потому что это очень"
    ]
  },
  {
    "time": [
      338.0,
      342.0
    ],
    "en": [
      "important to understand this G 0 0 and F"
    ],
    "ru": [
      "важно понимать это G 0 0 и F"
    ]
  },
  {
    "time": [
      342.0,
      345.0
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
      342.0,
      345.0
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
      345.0,
      348.0
    ],
    "en": [
      "actually configured on the interface not"
    ],
    "ru": [
      "на самом деле настроен на интерфейсе не"
    ]
  },
  {
    "time": [
      348.0,
      351.0
    ],
    "en": [
      "the slash 8 + / 16 prefixes I configured"
    ],
    "ru": [
      "префиксы косой черты 8 + / 16, которые я настроил"
    ]
  },
  {
    "time": [
      351.0,
      353.0
    ],
    "en": [
      "here"
    ],
    "ru": [
      "здесь"
    ]
  },
  {
    "time": [
      353.0,
      355.0
    ],
    "en": [
      "okay now let's set up OSPF on the other"
    ],
    "ru": [
      "хорошо, теперь давайте настроим OSPF на другом"
    ]
  },
  {
    "time": [
      355.0,
      358.0
    ],
    "en": [
      "routers and I'll show you a useful"
    ],
    "ru": [
      "маршрутизаторы, и я покажу вам полезный"
    ]
  },
  {
    "time": [
      358.0,
      364.0
    ],
    "en": [
      "shortcut I'll go on are two routes is P"
    ],
    "ru": [
      "ярлык, по которому я пойду, это два маршрута - P"
    ]
  },
  {
    "time": [
      364.0,
      366.0
    ],
    "en": [
      "F and again I'll use a different process"
    ],
    "ru": [
      "F и снова я воспользуюсь другим процессом"
    ]
  },
  {
    "time": [
      366.0,
      368.0
    ],
    "en": [
      "ID to show that it can still become"
    ],
    "ru": [
      "ID, чтобы показать, что он все еще может стать"
    ]
  },
  {
    "time": [
      368.0,
      371.0
    ],
    "en": [
      "neighbors with r1 and r3 so I'll use a"
    ],
    "ru": [
      "соседи с r1 и r3, поэтому я буду использовать"
    ]
  },
  {
    "time": [
      371.0,
      375.0
    ],
    "en": [
      "process ID of two now as for that"
    ],
    "ru": [
      "Идентификатор процесса теперь равен двум, что касается этого"
    ]
  },
  {
    "time": [
      375.0,
      377.0
    ],
    "en": [
      "shortcut I mentioned it's a way to"
    ],
    "ru": [
      "ярлык Я уже упоминал, что это способ"
    ]
  },
  {
    "time": [
      377.0,
      380.0
    ],
    "en": [
      "activate OSPF on all interfaces with a"
    ],
    "ru": [
      "активировать OSPF на всех интерфейсах с помощью"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "single command this is useful for labs"
    ],
    "ru": [
      "одна команда, это полезно для лабораторий"
    ]
  },
  {
    "time": [
      383.0,
      386.0
    ],
    "en": [
      "but perhaps you might not want to do it"
    ],
    "ru": [
      "но, возможно, ты не захочешь этого делать"
    ]
  },
  {
    "time": [
      386.0,
      387.0
    ],
    "en": [
      "on a real network where you want a more"
    ],
    "ru": [
      "в реальной сети, где вам нужно больше"
    ]
  },
  {
    "time": [
      387.0,
      390.0
    ],
    "en": [
      "precisely control which interfaces OSPF"
    ],
    "ru": [
      "точно контролировать, какие интерфейсы OSPF"
    ]
  },
  {
    "time": [
      390.0,
      396.0
    ],
    "en": [
      "is activated on network 0.0.0.0"
    ],
    "ru": [
      "активирован в сети 0.0.0.0"
    ]
  },
  {
    "time": [
      396.0,
      399.0
    ],
    "en": [
      "followed by a slash zero mask which is"
    ],
    "ru": [
      "за которым следует маска с нулевым слэшем, которая"
    ]
  },
  {
    "time": [
      399.0,
      403.0
    ],
    "en": [
      "usually 0.0.0.0 but because we have to"
    ],
    "ru": [
      "обычно 0.0.0.0, но потому что мы должны"
    ]
  },
  {
    "time": [
      403.0,
      406.0
    ],
    "en": [
      "use a wildcard mask it is inverse it is"
    ],
    "ru": [
      "используйте подстановочную маску, это инверсия, это"
    ]
  },
  {
    "time": [
      406.0,
      413.0
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
      406.0,
      413.0
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
      413.0,
      416.0
    ],
    "en": [
      "networks fall within the odo odo slash"
    ],
    "ru": [
      "сети попадают в одо одо слэш"
    ]
  },
  {
    "time": [
      416.0,
      420.0
    ],
    "en": [
      "zero range so OSPF will be activated on"
    ],
    "ru": [
      "нулевой диапазон, поэтому OSPF будет активирован"
    ]
  },
  {
    "time": [
      420.0,
      423.0
    ],
    "en": [
      "all interfaces let's do the same quickly"
    ],
    "ru": [
      "все интерфейсы давайте сделаем то же самое быстро"
    ]
  },
  {
    "time": [
      423.0,
      431.0
    ],
    "en": [
      "on r3 and r4 r3 first router OSPF 3"
    ],
    "ru": [
      "на r3 и r4 r3 первый роутер OSPF 3"
    ]
  },
  {
    "time": [
      431.0,
      438.0
    ],
    "en": [
      "network oh-oh-oh-oh 255.255.255.0 5 area"
    ],
    "ru": [
      "сеть ой-ой-ой-ой 255.255.255.0 5 зон"
    ]
  },
  {
    "time": [
      438.0,
      446.0
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
      438.0,
      446.0
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
      446.0,
      450.0
    ],
    "en": [
      "oh-oh-oh-oh 255 dot 255 dot 255 dot 255"
    ],
    "ru": [
      "о-о-о-о 255 точек 255 точек 255 точек 255"
    ]
  },
  {
    "time": [
      450.0,
      455.0
    ],
    "en": [
      "area 0 ok now let's go back to our 1 and"
    ],
    "ru": [
      "область 0 хорошо, теперь вернемся к нашим 1 и"
    ]
  },
  {
    "time": [
      455.0,
      462.0
    ],
    "en": [
      "see what's up do show IP ospf neighbor"
    ],
    "ru": [
      "Посмотри, что случилось, покажи IP соседа ospf"
    ]
  },
  {
    "time": [
      462.0,
      465.0
    ],
    "en": [
      "now we can see that r1 has become"
    ],
    "ru": [
      "теперь мы видим, что r1 стал"
    ]
  },
  {
    "time": [
      465.0,
      469.0
    ],
    "en": [
      "neighbors with r2 and r4 also notice"
    ],
    "ru": [
      "соседи с r2 и r4 также замечают"
    ]
  },
  {
    "time": [
      469.0,
      471.0
    ],
    "en": [
      "that the loopback interfaces we"
    ],
    "ru": [
      "что петлевые интерфейсы мы"
    ]
  },
  {
    "time": [
      471.0,
      472.0
    ],
    "en": [
      "configured have indeed become the router"
    ],
    "ru": [
      "настроены действительно стали роутером"
    ]
  },
  {
    "time": [
      472.0,
      477.0
    ],
    "en": [
      "IDs of r2 and r4 also the router"
    ],
    "ru": [
      "Идентификаторы r2 и r4 также маршрутизатор"
    ]
  },
  {
    "time": [
      477.0,
      479.0
    ],
    "en": [
      "successfully became neighbors even"
    ],
    "ru": [
      "успешно стали соседями даже"
    ]
  },
  {
    "time": [
      479.0,
      481.0
    ],
    "en": [
      "though we use different process IDs on"
    ],
    "ru": [
      "хотя мы используем разные идентификаторы процессов на"
    ]
  },
  {
    "time": [
      481.0,
      484.0
    ],
    "en": [
      "each router proving that the process ID"
    ],
    "ru": [
      "каждый маршрутизатор, подтверждающий, что идентификатор процесса"
    ]
  },
  {
    "time": [
      484.0,
      486.0
    ],
    "en": [
      "is only locally significant"
    ],
    "ru": [
      "имеет только местное значение"
    ]
  },
  {
    "time": [
      486.0,
      489.0
    ],
    "en": [
      "next let's check the routes we received"
    ],
    "ru": [
      "Далее давайте проверим полученные маршруты"
    ]
  },
  {
    "time": [
      489.0,
      495.0
    ],
    "en": [
      "here on our one do show IP route here"
    ],
    "ru": [
      "здесь, на нашем, показывать IP-маршрут здесь"
    ]
  },
  {
    "time": [
      495.0,
      498.0
    ],
    "en": [
      "are the loop backs of r2 r3 and r4 and"
    ],
    "ru": [
      "являются петлей r2 r3 и r4 и"
    ]
  },
  {
    "time": [
      498.0,
      504.0
    ],
    "en": [
      "here are the 2300 and 3400 networks to"
    ],
    "ru": [
      "вот сети 2300 и 3400 для"
    ]
  },
  {
    "time": [
      504.0,
      507.0
    ],
    "en": [
      "which our one isn't directly connected"
    ],
    "ru": [
      "который наш напрямую не связан"
    ]
  },
  {
    "time": [
      507.0,
      510.0
    ],
    "en": [
      "note that they have an O beside them"
    ],
    "ru": [
      "обратите внимание, что рядом с ними стоит буква O"
    ]
  },
  {
    "time": [
      510.0,
      513.0
    ],
    "en": [
      "meaning that they were learned via OSPF"
    ],
    "ru": [
      "означает, что они были изучены через OSPF"
    ]
  },
  {
    "time": [
      513.0,
      516.0
    ],
    "en": [
      "also notice that r1 learned the network"
    ],
    "ru": [
      "также обратите внимание, что r1 изучил сеть"
    ]
  },
  {
    "time": [
      516.0,
      518.0
    ],
    "en": [
      "prefix is configured on each of the"
    ],
    "ru": [
      "префикс настраивается на каждом из"
    ]
  },
  {
    "time": [
      518.0,
      521.0
    ],
    "en": [
      "interfaces not the network prefix we"
    ],
    "ru": [
      "интерфейсы, а не сетевой префикс, который мы"
    ]
  },
  {
    "time": [
      521.0,
      525.0
    ],
    "en": [
      "actually configured on r2 r3 and r4"
    ],
    "ru": [
      "на самом деле настроен на r2 r3 и r4"
    ]
  },
  {
    "time": [
      525.0,
      528.0
    ],
    "en": [
      "actually we configured oh-oh-oh-oh-oh-oh"
    ],
    "ru": [
      "собственно мы настроили ой-ой-ой-ой-ой-ой"
    ]
  },
  {
    "time": [
      528.0,
      532.0
    ],
    "en": [
      "on them and there is no odor odor odor o"
    ],
    "ru": [
      "на них и нет запаха запаха запаха o"
    ]
  },
  {
    "time": [
      532.0,
      535.0
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
      532.0,
      535.0
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
      535.0,
      538.0
    ],
    "en": [
      "demonstrates the point as well now the"
    ],
    "ru": [
      "демонстрирует точку, а теперь"
    ]
  },
  {
    "time": [
      538.0,
      541.0
    ],
    "en": [
      "next step is to suppress OSPF messages"
    ],
    "ru": [
      "следующий шаг - подавить сообщения OSPF"
    ]
  },
  {
    "time": [
      541.0,
      543.0
    ],
    "en": [
      "on the loopback addresses or sorry"
    ],
    "ru": [
      "на обратных адресах или извините"
    ]
  },
  {
    "time": [
      543.0,
      546.0
    ],
    "en": [
      "loopback interfaces of each router"
    ],
    "ru": [
      "петлевые интерфейсы каждого маршрутизатора"
    ]
  },
  {
    "time": [
      546.0,
      549.0
    ],
    "en": [
      "because OSPF is activated on the"
    ],
    "ru": [
      "потому что OSPF активирован на"
    ]
  },
  {
    "time": [
      549.0,
      551.0
    ],
    "en": [
      "loopback interfaces each router is"
    ],
    "ru": [
      "петлевые интерфейсы каждый маршрутизатор"
    ]
  },
  {
    "time": [
      551.0,
      554.0
    ],
    "en": [
      "sending OSPF advertisements on them"
    ],
    "ru": [
      "отправка на них рекламы OSPF"
    ]
  },
  {
    "time": [
      554.0,
      557.0
    ],
    "en": [
      "however the loopback interface doesn't"
    ],
    "ru": [
      "однако интерфейс обратной петли не"
    ]
  },
  {
    "time": [
      557.0,
      558.0
    ],
    "en": [
      "actually lead to anywhere beyond the"
    ],
    "ru": [
      "на самом деле ведет к чему-либо за пределами"
    ]
  },
  {
    "time": [
      558.0,
      560.0
    ],
    "en": [
      "router itself so there's no point of"
    ],
    "ru": [
      "сам маршрутизатор, так что нет смысла"
    ]
  },
  {
    "time": [
      560.0,
      564.0
    ],
    "en": [
      "advertising anything on them to suppress"
    ],
    "ru": [
      "рекламировать что-либо на них, чтобы подавить"
    ]
  },
  {
    "time": [
      564.0,
      566.0
    ],
    "en": [
      "the advertisements we configure the loop"
    ],
    "ru": [
      "рекламные объявления настраиваем шлейф"
    ]
  },
  {
    "time": [
      566.0,
      568.0
    ],
    "en": [
      "backs as passive interfaces with this"
    ],
    "ru": [
      "спины как пассивные интерфейсы с этим"
    ]
  },
  {
    "time": [
      568.0,
      574.0
    ],
    "en": [
      "command passive interface l0 that's all"
    ],
    "ru": [
      "командный пассивный интерфейс l0 вот и все"
    ]
  },
  {
    "time": [
      574.0,
      576.0
    ],
    "en": [
      "let's quickly do the same on the other"
    ],
    "ru": [
      "давай быстро сделаем то же самое с другим"
    ]
  },
  {
    "time": [
      576.0,
      582.0
    ],
    "en": [
      "routers first are too passive interface"
    ],
    "ru": [
      "роутеры сначала слишком пассивный интерфейс"
    ]
  },
  {
    "time": [
      582.0,
      590.0
    ],
    "en": [
      "l0 then our three passive interface l0"
    ],
    "ru": [
      "l0 то наши три пассивных интерфейса l0"
    ]
  },
  {
    "time": [
      590.0,
      598.0
    ],
    "en": [
      "finally our for passive interface l0 the"
    ],
    "ru": [
      "наконец, наш пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      598.0,
      600.0
    ],
    "en": [
      "next step is to configure the OSPF"
    ],
    "ru": [
      "следующий шаг - настроить OSPF"
    ]
  },
  {
    "time": [
      600.0,
      603.0
    ],
    "en": [
      "reference bandwidth of each router so"
    ],
    "ru": [
      "эталонная пропускная способность каждого маршрутизатора, поэтому"
    ]
  },
  {
    "time": [
      603.0,
      605.0
    ],
    "en": [
      "that a 10 Gigabit Ethernet interface"
    ],
    "ru": [
      "что интерфейс 10 Gigabit Ethernet"
    ]
  },
  {
    "time": [
      605.0,
      610.0
    ],
    "en": [
      "would have an OSPF cost of 1 what"
    ],
    "ru": [
      "будет стоить OSPF 1, что"
    ]
  },
  {
    "time": [
      610.0,
      613.0
    ],
    "en": [
      "exactly does that mean well from our"
    ],
    "ru": [
      "точно ли это хорошо для наших"
    ]
  },
  {
    "time": [
      613.0,
      616.0
    ],
    "en": [
      "ones perspective it has two routes to"
    ],
    "ru": [
      "с одной точки зрения, у него есть два пути к"
    ]
  },
  {
    "time": [
      616.0,
      619.0
    ],
    "en": [
      "reach r3 it can go via r2"
    ],
    "ru": [
      "достичь r3 он может пройти через r2"
    ]
  },
  {
    "time": [
      619.0,
      624.0
    ],
    "en": [
      "or via r4 how does it decide which path"
    ],
    "ru": [
      "или через r4 как он решает какой путь"
    ]
  },
  {
    "time": [
      624.0,
      628.0
    ],
    "en": [
      "to use let's go back to r1 and look at"
    ],
    "ru": [
      "для использования вернемся к r1 и посмотрим на"
    ]
  },
  {
    "time": [
      628.0,
      633.0
    ],
    "en": [
      "their routing table notice beside these"
    ],
    "ru": [
      "их таблица маршрутизации примечание рядом с этими"
    ]
  },
  {
    "time": [
      633.0,
      636.0
    ],
    "en": [
      "OSPF routes there is a 110 which is the"
    ],
    "ru": [
      "Маршруты OSPF есть 110, который является"
    ]
  },
  {
    "time": [
      636.0,
      640.0
    ],
    "en": [
      "administrative distance for OSPF I won't"
    ],
    "ru": [
      "административное расстояние для OSPF я не буду"
    ]
  },
  {
    "time": [
      640.0,
      642.0
    ],
    "en": [
      "talk about administrative distance now"
    ],
    "ru": [
      "поговорим об административном расстоянии сейчас"
    ]
  },
  {
    "time": [
      642.0,
      645.0
    ],
    "en": [
      "hopefully you've studied it however next"
    ],
    "ru": [
      "надеюсь, вы изучили это, однако в следующий раз"
    ]
  },
  {
    "time": [
      645.0,
      648.0
    ],
    "en": [
      "to it is the metric notice that the"
    ],
    "ru": [
      "к этому метрическому примечанию, что"
    ]
  },
  {
    "time": [
      648.0,
      652.0
    ],
    "en": [
      "metric via r2 and the metric via r4 are"
    ],
    "ru": [
      "метрика через r2 и метрика через r4"
    ]
  },
  {
    "time": [
      652.0,
      654.0
    ],
    "en": [
      "the same so both are in the routing"
    ],
    "ru": [
      "то же самое, так что оба находятся в маршрутизации"
    ]
  },
  {
    "time": [
      654.0,
      660.0
    ],
    "en": [
      "table however why are both the same when"
    ],
    "ru": [
      "таблица, однако, почему оба одинаковые, когда"
    ]
  },
  {
    "time": [
      660.0,
      662.0
    ],
    "en": [
      "the path via r4 includes a faster"
    ],
    "ru": [
      "путь через r4 включает более быстрый"
    ]
  },
  {
    "time": [
      662.0,
      665.0
    ],
    "en": [
      "gigabit ethernet interface well to"
    ],
    "ru": [
      "гигабитный интерфейс Ethernet хорошо для"
    ]
  },
  {
    "time": [
      665.0,
      669.0
    ],
    "en": [
      "calculate metric OSPF divides a"
    ],
    "ru": [
      "вычислить метрику OSPF делит"
    ]
  },
  {
    "time": [
      669.0,
      671.0
    ],
    "en": [
      "reference bandwidth by the bandwidth on"
    ],
    "ru": [
      "эталонная пропускная способность по пропускной способности на"
    ]
  },
  {
    "time": [
      671.0,
      675.0
    ],
    "en": [
      "the interface the reference bandwidth by"
    ],
    "ru": [
      "интерфейс эталонная пропускная способность на"
    ]
  },
  {
    "time": [
      675.0,
      679.0
    ],
    "en": [
      "default is 100 megabits per second and a"
    ],
    "ru": [
      "по умолчанию 100 мегабит в секунду и"
    ]
  },
  {
    "time": [
      679.0,
      681.0
    ],
    "en": [
      "fast ethernet interface is 100 megabits"
    ],
    "ru": [
      "интерфейс Fast Ethernet 100 мегабит"
    ]
  },
  {
    "time": [
      681.0,
      684.0
    ],
    "en": [
      "per second so a fast ethernet interface"
    ],
    "ru": [
      "в секунду, так что быстрый интерфейс Ethernet"
    ]
  },
  {
    "time": [
      684.0,
      687.0
    ],
    "en": [
      "has a metric of 1 which is 100 divided"
    ],
    "ru": [
      "имеет показатель 1, который делится на 100"
    ]
  },
  {
    "time": [
      687.0,
      691.0
    ],
    "en": [
      "by 100 a Gigabit Ethernet interface has"
    ],
    "ru": [
      "на 100 интерфейс Gigabit Ethernet имеет"
    ]
  },
  {
    "time": [
      691.0,
      694.0
    ],
    "en": [
      "a bandwidth of 1,000 megabits per second"
    ],
    "ru": [
      "пропускная способность 1000 мегабит в секунду"
    ]
  },
  {
    "time": [
      694.0,
      700.0
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
      694.0,
      700.0
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
      700.0,
      704.0
    ],
    "en": [
      "lowest possible metric in OSPF is 1 so"
    ],
    "ru": [
      "наименьшая возможная метрика в OSPF - 1, поэтому"
    ]
  },
  {
    "time": [
      704.0,
      706.0
    ],
    "en": [
      "gigabit and fast ethernet interfaces"
    ],
    "ru": [
      "гигабитный и быстрый Ethernet-интерфейсы"
    ]
  },
  {
    "time": [
      706.0,
      711.0
    ],
    "en": [
      "have the same metric by default 1 even a"
    ],
    "ru": [
      "имеют одинаковую метрику по умолчанию 1 даже"
    ]
  },
  {
    "time": [
      711.0,
      713.0
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
      711.0,
      713.0
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
      713.0,
      717.0
    ],
    "en": [
      "would have a metric of 1 to change this"
    ],
    "ru": [
      "будет иметь показатель 1, чтобы изменить это"
    ]
  },
  {
    "time": [
      717.0,
      719.0
    ],
    "en": [
      "default behavior we can change the"
    ],
    "ru": [
      "поведение по умолчанию, мы можем изменить"
    ]
  },
  {
    "time": [
      719.0,
      721.0
    ],
    "en": [
      "reference bandwidth with this command"
    ],
    "ru": [
      "эталонная пропускная способность с помощью этой команды"
    ]
  },
  {
    "time": [
      721.0,
      726.0
    ],
    "en": [
      "auto cost reference bandwidth then the"
    ],
    "ru": [
      "эталонная пропускная способность автоматической стоимости, затем"
    ]
  },
  {
    "time": [
      726.0,
      727.0
    ],
    "en": [
      "bandwidth in terms of megabits per"
    ],
    "ru": [
      "пропускная способность в мегабитах на"
    ]
  },
  {
    "time": [
      727.0,
      731.0
    ],
    "en": [
      "second our instructions say to make it"
    ],
    "ru": [
      "во-вторых, наши инструкции говорят сделать это"
    ]
  },
  {
    "time": [
      731.0,
      734.0
    ],
    "en": [
      "so that a 100 gigabit interface oh sorry"
    ],
    "ru": [
      "так что интерфейс 100 гигабит ой извините"
    ]
  },
  {
    "time": [
      734.0,
      737.0
    ],
    "en": [
      "a 10 gigabit interface would have a cost"
    ],
    "ru": [
      "10-гигабитный интерфейс будет стоить"
    ]
  },
  {
    "time": [
      737.0,
      739.0
    ],
    "en": [
      "of 1 so we should set the reference"
    ],
    "ru": [
      "из 1, поэтому мы должны установить ссылку"
    ]
  },
  {
    "time": [
      739.0,
      744.0
    ],
    "en": [
      "equal to 10 gigabits per second so I'll"
    ],
    "ru": [
      "равно 10 гигабит в секунду, поэтому я"
    ]
  },
  {
    "time": [
      744.0,
      748.0
    ],
    "en": [
      "enter 10,000 as this message says here"
    ],
    "ru": [
      "введите 10 000, как написано в этом сообщении"
    ]
  },
  {
    "time": [
      748.0,
      750.0
    ],
    "en": [
      "make sure the reference is consistent"
    ],
    "ru": [
      "убедитесь, что ссылка согласована"
    ]
  },
  {
    "time": [
      750.0,
      752.0
    ],
    "en": [
      "across all routers"
    ],
    "ru": [
      "на всех роутерах"
    ]
  },
  {
    "time": [
      752.0,
      759.0
    ],
    "en": [
      "let's go on our to auto cost reference"
    ],
    "ru": [
      "давайте перейдем к справочнику по стоимости авто"
    ]
  },
  {
    "time": [
      759.0,
      761.0
    ],
    "en": [
      "bandwidth ten thousand"
    ],
    "ru": [
      "пропускная способность десять тысяч"
    ]
  },
  {
    "time": [
      761.0,
      767.0
    ],
    "en": [
      "okay next are three auto cost reference"
    ],
    "ru": [
      "хорошо, далее - три авто справки по стоимости"
    ]
  },
  {
    "time": [
      767.0,
      772.0
    ],
    "en": [
      "bandwidth ten thousand finally are for"
    ],
    "ru": [
      "пропускная способность десять тысяч наконец для"
    ]
  },
  {
    "time": [
      772.0,
      776.0
    ],
    "en": [
      "auto cost reference bandwidth ten"
    ],
    "ru": [
      "автоматическая стоимость эталонной полосы пропускания десять"
    ]
  },
  {
    "time": [
      776.0,
      779.0
    ],
    "en": [
      "thousand okay let's check again on our"
    ],
    "ru": [
      "тысяча хорошо давай проверим еще раз на нашем"
    ]
  },
  {
    "time": [
      779.0,
      786.0
    ],
    "en": [
      "one do show IP route now we only have"
    ],
    "ru": [
      "один показывает IP-маршрут, теперь у нас есть только"
    ]
  },
  {
    "time": [
      786.0,
      788.0
    ],
    "en": [
      "one route two three three three three"
    ],
    "ru": [
      "один маршрут два три три три три"
    ]
  },
  {
    "time": [
      788.0,
      792.0
    ],
    "en": [
      "via the gig zero zero interface because"
    ],
    "ru": [
      "через интерфейс gig zero zero, потому что"
    ]
  },
  {
    "time": [
      792.0,
      794.0
    ],
    "en": [
      "OSPF now distinguishes between the cost"
    ],
    "ru": [
      "OSPF теперь различает стоимость"
    ]
  },
  {
    "time": [
      794.0,
      797.0
    ],
    "en": [
      "of a gig Ethernet and the cost of a Fast"
    ],
    "ru": [
      "гигабайта Ethernet и стоимость Fast"
    ]
  },
  {
    "time": [
      797.0,
      801.0
    ],
    "en": [
      "Ethernet interface now our last step"
    ],
    "ru": [
      "Интерфейс Ethernet теперь наш последний шаг"
    ]
  },
  {
    "time": [
      801.0,
      803.0
    ],
    "en": [
      "isn't something you'd likely do in a"
    ],
    "ru": [
      "это не то, что вы, вероятно, сделали бы в"
    ]
  },
  {
    "time": [
      803.0,
      805.0
    ],
    "en": [
      "real network but I want to show you that"
    ],
    "ru": [
      "реальная сеть, но я хочу показать вам, что"
    ]
  },
  {
    "time": [
      805.0,
      808.0
    ],
    "en": [
      "you can do it after adjusting the"
    ],
    "ru": [
      "вы можете сделать это после настройки"
    ]
  },
  {
    "time": [
      808.0,
      810.0
    ],
    "en": [
      "reference bandwidth so that r1 will take"
    ],
    "ru": [
      "эталонная полоса пропускания, так что r1 займет"
    ]
  },
  {
    "time": [
      810.0,
      813.0
    ],
    "en": [
      "the path of via r4 to our freeze"
    ],
    "ru": [
      "путь через r4 к нашему замораживанию"
    ]
  },
  {
    "time": [
      813.0,
      815.0
    ],
    "en": [
      "loopback exclusively we are now going to"
    ],
    "ru": [
      "исключительно loopback, теперь мы собираемся"
    ]
  },
  {
    "time": [
      815.0,
      817.0
    ],
    "en": [
      "configure the opposite and make it use"
    ],
    "ru": [
      "настройте противоположное и заставьте его использовать"
    ]
  },
  {
    "time": [
      817.0,
      821.0
    ],
    "en": [
      "the path to r2 exclusively we will do"
    ],
    "ru": [
      "путь к r2 исключительно сделаем"
    ]
  },
  {
    "time": [
      821.0,
      824.0
    ],
    "en": [
      "this by configuring the OSPF cost of"
    ],
    "ru": [
      "это путем настройки стоимости OSPF"
    ]
  },
  {
    "time": [
      824.0,
      827.0
    ],
    "en": [
      "some interfaces now there are multiple"
    ],
    "ru": [
      "некоторые интерфейсы теперь есть несколько"
    ]
  },
  {
    "time": [
      827.0,
      830.0
    ],
    "en": [
      "ways to do this we can do it by lowering"
    ],
    "ru": [
      "способы сделать это мы можем сделать это, снизив"
    ]
  },
  {
    "time": [
      830.0,
      833.0
    ],
    "en": [
      "the cost of some interfaces or by"
    ],
    "ru": [
      "стоимость некоторых интерфейсов или"
    ]
  },
  {
    "time": [
      833.0,
      834.0
    ],
    "en": [
      "raising the cost of others or a"
    ],
    "ru": [
      "повышение стоимости других или"
    ]
  },
  {
    "time": [
      834.0,
      838.0
    ],
    "en": [
      "combination just to make this quick for"
    ],
    "ru": [
      "комбинация, чтобы сделать это быстро для"
    ]
  },
  {
    "time": [
      838.0,
      841.0
    ],
    "en": [
      "the video I'll raise the cost of the g00"
    ],
    "ru": [
      "видео подниму стоимость g00"
    ]
  },
  {
    "time": [
      841.0,
      845.0
    ],
    "en": [
      "link between r1 and r4 to ten thousand"
    ],
    "ru": [
      "связь между r1 и r4 до десяти тысяч"
    ]
  },
  {
    "time": [
      845.0,
      853.0
    ],
    "en": [
      "I'll start on our one interface g00 to"
    ],
    "ru": [
      "Я начну с одного нашего интерфейса от g00 до"
    ]
  },
  {
    "time": [
      853.0,
      856.0
    ],
    "en": [
      "change the cost use this command IP ospf"
    ],
    "ru": [
      "изменить стоимость используйте эту команду IP ospf"
    ]
  },
  {
    "time": [
      856.0,
      860.0
    ],
    "en": [
      "cost ten thousand okay now let's do the"
    ],
    "ru": [
      "стоил десять тысяч, ладно, теперь давайте сделаем"
    ]
  },
  {
    "time": [
      860.0,
      867.0
    ],
    "en": [
      "same on our for Zend interface g00 IP"
    ],
    "ru": [
      "то же самое на нашем для Zend interface g00 IP"
    ]
  },
  {
    "time": [
      867.0,
      871.0
    ],
    "en": [
      "ospf cost ten thousand now let's go back"
    ],
    "ru": [
      "ospf стоил десять тысяч, теперь давайте вернемся"
    ]
  },
  {
    "time": [
      871.0,
      878.0
    ],
    "en": [
      "on our one do show IP route okay now the"
    ],
    "ru": [
      "на нашем показывать IP-маршрут хорошо, теперь"
    ]
  },
  {
    "time": [
      878.0,
      881.0
    ],
    "en": [
      "route two three three three three has"
    ],
    "ru": [
      "Маршрут два, три, три, три, три"
    ]
  },
  {
    "time": [
      881.0,
      884.0
    ],
    "en": [
      "changed back to r2 exclusively because"
    ],
    "ru": [
      "изменился обратно на r2 исключительно потому, что"
    ]
  },
  {
    "time": [
      884.0,
      886.0
    ],
    "en": [
      "we manually adjusted the cost of"
    ],
    "ru": [
      "мы вручную скорректировали стоимость"
    ]
  },
  {
    "time": [
      886.0,
      888.0
    ],
    "en": [
      "Giggsy rose your interface despite the"
    ],
    "ru": [
      "Гиггси улучшил ваш интерфейс, несмотря на"
    ]
  },
  {
    "time": [
      888.0,
      891.0
    ],
    "en": [
      "fact that the path via r4 is actually"
    ],
    "ru": [
      "факт, что путь через r4 на самом деле"
    ]
  },
  {
    "time": [
      891.0,
      894.0
    ],
    "en": [
      "faster we covered a lot of different"
    ],
    "ru": [
      "быстрее мы покрыли много разных"
    ]
  },
  {
    "time": [
      894.0,
      897.0
    ],
    "en": [
      "things in this lab OSPF is very"
    ],
    "ru": [
      "вещи в этой лаборатории OSPF очень"
    ]
  },
  {
    "time": [
      897.0,
      900.0
    ],
    "en": [
      "important both for the exam and because"
    ],
    "ru": [
      "важно как для экзамена, так и потому, что"
    ]
  },
  {
    "time": [
      900.0,
      903.0
    ],
    "en": [
      "it's widely used in real networks make"
    ],
    "ru": [
      "он широко используется в реальных сетях, делает"
    ]
  },
  {
    "time": [
      903.0,
      905.0
    ],
    "en": [
      "sure you know the commands required I"
    ],
    "ru": [
      "уверен, что вы знаете, какие команды требуются я"
    ]
  },
  {
    "time": [
      905.0,
      908.0
    ],
    "en": [
      "will also be making a few more OSPF labs"
    ],
    "ru": [
      "также будет создавать еще несколько лабораторий OSPF"
    ]
  },
  {
    "time": [
      908.0,
      910.0
    ],
    "en": [
      "so be sure to practice further with"
    ],
    "ru": [
      "так что не забудьте попрактиковаться дальше с"
    ]
  },
  {
    "time": [
      910.0,
      917.0
    ],
    "en": [
      "those that's all for this lab thank you"
    ],
    "ru": [
      "тем, что это все для этой лаборатории, спасибо"
    ]
  },
  {
    "time": [
      917.0,
      919.0
    ],
    "en": [
      "for watching I hope this lab and video"
    ],
    "ru": [
      "за просмотр, надеюсь, эта лабораторная работа и видео"
    ]
  },
  {
    "time": [
      919.0,
      921.0
    ],
    "en": [
      "have been helpful for you please"
    ],
    "ru": [
      "были полезны для вас, пожалуйста"
    ]
  },
  {
    "time": [
      921.0,
      923.0
    ],
    "en": [
      "subscribe for future labs like this"
    ],
    "ru": [
      "подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      923.0,
      927.0
    ],
    "en": [
      "which will be released weekly if you"
    ],
    "ru": [
      "который будет выходить еженедельно, если вы"
    ]
  },
  {
    "time": [
      927.0,
      929.0
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
      929.0,
      932.0
    ],
    "en": [
      "me know in the comments section if you"
    ],
    "ru": [
      "я знаю в разделе комментариев, если вы"
    ]
  },
  {
    "time": [
      932.0,
      934.0
    ],
    "en": [
      "want to support my channel I accept"
    ],
    "ru": [
      "хочу поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      934.0,
      936.0
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
      936.0,
      940.0
    ],
    "en": [
      "addresses in the description I am also a"
    ],
    "ru": [
      "адреса в описании я тоже"
    ]
  },
  {
    "time": [
      940.0,
      943.0
    ],
    "en": [
      "brave verified publisher and accept bat"
    ],
    "ru": [
      "храбрый проверенный издатель и прими летучую мышь"
    ]
  },
  {
    "time": [
      943.0,
      945.0
    ],
    "en": [
      "or basic attention token donations in"
    ],
    "ru": [
      "или основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      945.0,
      945.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]