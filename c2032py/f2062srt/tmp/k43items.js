let objs = [
  {
    "time": [
      0.0,
      5.435691
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
      5.435691,
      8.416915
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
      8.416915,
      16.768412
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
      16.768412,
      21.195781
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторий"
    ]
  },
  {
    "time": [
      21.195781,
      24.611904
    ],
    "en": [
      "and share these videos with anyone else studying for the CCNA"
    ],
    "ru": [
      "и поделитесь этими видео со всеми, кто учится на CCNA"
    ]
  },
  {
    "time": [
      24.611904,
      29.650566
    ],
    "en": [
      "in this lab we will configure a GRE tunnel"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим туннель GRE"
    ]
  },
  {
    "time": [
      29.650566,
      34.841654
    ],
    "en": [
      "gr e stands for a generic routing encapsulation"
    ],
    "ru": [
      "gr e обозначает общую инкапсуляцию маршрутизации"
    ]
  },
  {
    "time": [
      34.841654,
      38.962765
    ],
    "en": [
      "r1 and r2 are not directly connected"
    ],
    "ru": [
      "r1 и r2 напрямую не связаны"
    ]
  },
  {
    "time": [
      38.962765,
      44.001087
    ],
    "en": [
      "however we can use GRE to create a virtual tunnel between them"
    ],
    "ru": [
      "однако мы можем использовать GRE для создания виртуального туннеля между ними"
    ]
  },
  {
    "time": [
      44.001087,
      48.163854
    ],
    "en": [
      "which will enable them to behave as if they are directly connected"
    ],
    "ru": [
      "что позволит им вести себя так, как если бы они были напрямую подключены"
    ]
  },
  {
    "time": [
      48.163854,
      52.66882
    ],
    "en": [
      "and their tunnel interfaces will have IP addresses from the same network"
    ],
    "ru": [
      "и их туннельные интерфейсы будут иметь IP-адреса из одной сети"
    ]
  },
  {
    "time": [
      52.66882,
      56.484738
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
      52.66882,
      56.484738
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
      56.484738,
      60.65891
    ],
    "en": [
      "we will then configure a IG RP on these interfaces"
    ],
    "ru": [
      "Затем мы настроим IG RP на этих интерфейсах"
    ]
  },
  {
    "time": [
      60.65891,
      63.52052
    ],
    "en": [
      "so they can learn about each other's internal networks"
    ],
    "ru": [
      "чтобы они могли узнать о внутренних сетях друг друга"
    ]
  },
  {
    "time": [
      63.52052,
      66.686393
    ],
    "en": [
      "the configuration is quite simple"
    ],
    "ru": [
      "конфигурация довольно проста"
    ]
  },
  {
    "time": [
      66.686393,
      68.000996
    ],
    "en": [
      "so let's get started"
    ],
    "ru": [
      "так что давайте начнем"
    ]
  },
  {
    "time": [
      68.000996,
      71.318978
    ],
    "en": [
      "I'll start on r1 first"
    ],
    "ru": [
      "Я сначала начну с r1"
    ]
  },
  {
    "time": [
      71.318978,
      76.125803
    ],
    "en": [
      "enable conf t"
    ],
    "ru": [
      "включить конф т"
    ]
  },
  {
    "time": [
      76.125803,
      79.925123
    ],
    "en": [
      "we have to make a tunnel interface on the router"
    ],
    "ru": [
      "мы должны сделать туннельный интерфейс на роутере"
    ]
  },
  {
    "time": [
      79.925123,
      84.759408
    ],
    "en": [
      "this isn't a physical interface on the device but a logical interface"
    ],
    "ru": [
      "это не физический интерфейс на устройстве, а логический интерфейс"
    ]
  },
  {
    "time": [
      84.759408,
      87.100609
    ],
    "en": [
      "to which we will assign an IP address"
    ],
    "ru": [
      "которому мы присвоим IP-адрес"
    ]
  },
  {
    "time": [
      87.100609,
      91.878432
    ],
    "en": [
      "you can type interface tunnel 0"
    ],
    "ru": [
      "вы можете ввести интерфейсный туннель 0"
    ]
  },
  {
    "time": [
      91.878432,
      95.397616
    ],
    "en": [
      "or the fast and easy way as interface t0"
    ],
    "ru": [
      "или быстрый и простой способ, как интерфейс t0"
    ]
  },
  {
    "time": [
      95.397616,
      99.36689
    ],
    "en": [
      "let's assign an IP address to it"
    ],
    "ru": [
      "давайте назначим ему IP-адрес"
    ]
  },
  {
    "time": [
      99.36689,
      25599.36689
    ],
    "en": [
      "IP address 192.168.1.1 255 dot 255 dot 255 dot"
    ],
    "ru": [
      "IP-адрес 192.168.1.1 255 точек 255 точек 255 точек"
    ]
  },
  {
    "time": [
      25599.36689,
      107.736028
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
      107.736028,
      111.446729
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
      107.736028,
      111.446729
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
      111.446729,
      115.1214
    ],
    "en": [
      "which interface do you think will be the source"
    ],
    "ru": [
      "какой интерфейс, по вашему мнению, будет источником"
    ]
  },
  {
    "time": [
      115.1214,
      119.87301
    ],
    "en": [
      "in this case it's the s 0 0 0 interface"
    ],
    "ru": [
      "в данном случае это интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      119.87301,
      123.892761
    ],
    "en": [
      "because that's the interface we will actually be using to reach r2"
    ],
    "ru": [
      "потому что это интерфейс, который мы на самом деле будем использовать для достижения r2"
    ]
  },
  {
    "time": [
      123.892761,
      126.37047
    ],
    "en": [
      "via the service provider network"
    ],
    "ru": [
      "через сеть поставщика услуг"
    ]
  },
  {
    "time": [
      126.37047,
      130.879223
    ],
    "en": [
      "so tunnel source s 0 0 0"
    ],
    "ru": [
      "так туннельный источник s 0 0 0"
    ]
  },
  {
    "time": [
      130.879223,
      134.735618
    ],
    "en": [
      "next to the tunnel destination"
    ],
    "ru": [
      "рядом с пунктом назначения туннеля"
    ]
  },
  {
    "time": [
      134.735618,
      137.532647
    ],
    "en": [
      "tunnel destination"
    ],
    "ru": [
      "пункт назначения туннеля"
    ]
  },
  {
    "time": [
      137.532647,
      141.000992
    ],
    "en": [
      "now what IP address do you think is correct here"
    ],
    "ru": [
      "теперь, какой IP-адрес, по вашему мнению, здесь правильный"
    ]
  },
  {
    "time": [
      141.000992,
      146.182669
    ],
    "en": [
      "it's the IP address on r2 s s0 0 0 interface"
    ],
    "ru": [
      "это IP-адрес на интерфейсе r2 s s0 0 0"
    ]
  },
  {
    "time": [
      146.182669,
      148.683712
    ],
    "en": [
      "the one facing the service provider"
    ],
    "ru": [
      "тот, с которым сталкивается поставщик услуг"
    ]
  },
  {
    "time": [
      148.683712,
      152.96827
    ],
    "en": [
      "so 200 oh oh -"
    ],
    "ru": [
      "так 200 ой ой -"
    ]
  },
  {
    "time": [
      152.96827,
      154.685776
    ],
    "en": [
      "that's all there is to it"
    ],
    "ru": [
      "это все, что нужно для этого"
    ]
  },
  {
    "time": [
      154.685776,
      158.296728
    ],
    "en": [
      "now let's go on our to"
    ],
    "ru": [
      "теперь давайте перейдем к"
    ]
  },
  {
    "time": [
      158.296728,
      162.385844
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      162.385844,
      165.873984
    ],
    "en": [
      "interface tunnel 0"
    ],
    "ru": [
      "интерфейсный туннель 0"
    ]
  },
  {
    "time": [
      165.873984,
      170.3709
    ],
    "en": [
      "IP address 192.168.1.1"
    ],
    "ru": [
      "IP-адрес 192.168.1.1"
    ]
  },
  {
    "time": [
      170.3709,
      174.382465
    ],
    "en": [
      "fifty five to fifty five to five to"
    ],
    "ru": [
      "от пятидесяти пяти до пятидесяти пяти до пяти до"
    ]
  },
  {
    "time": [
      174.382465,
      179.252237
    ],
    "en": [
      "the source and destination will be the opposite of our ones configuration"
    ],
    "ru": [
      "источник и пункт назначения будут противоположны нашей конфигурации"
    ]
  },
  {
    "time": [
      179.252237,
      184.895775
    ],
    "en": [
      "the source will be R to s s 0 0 0 interface"
    ],
    "ru": [
      "источником будет R to s s 0 0 0 интерфейс"
    ]
  },
  {
    "time": [
      184.895775,
      188.789312
    ],
    "en": [
      "and the destination R 1 s s 0 0 0 interface"
    ],
    "ru": [
      "и интерфейс назначения R 1 s s 0 0 0"
    ]
  },
  {
    "time": [
      188.789312,
      193.678835
    ],
    "en": [
      "tunnel source s 0 0 0"
    ],
    "ru": [
      "туннельный источник s 0 0 0"
    ]
  },
  {
    "time": [
      193.678835,
      199.295502
    ],
    "en": [
      "tunnel destination 100 odo - ok"
    ],
    "ru": [
      "пункт назначения туннеля 100 одо - ок"
    ]
  },
  {
    "time": [
      199.295502,
      203.076205
    ],
    "en": [
      "that's all there is to configuring the tunnel"
    ],
    "ru": [
      "это все, что нужно для настройки туннеля"
    ]
  },
  {
    "time": [
      203.076205,
      208.050355
    ],
    "en": [
      "however I've missed one very important thing"
    ],
    "ru": [
      "однако я упустил одну очень важную вещь"
    ]
  },
  {
    "time": [
      208.050355,
      211.004346
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
      211.004346,
      216.222804
    ],
    "en": [
      "Artoo's tunnel destination is 100 oh oh -"
    ],
    "ru": [
      "Пункт назначения туннеля Арту - 100 ой ой -"
    ]
  },
  {
    "time": [
      216.222804,
      219.401602
    ],
    "en": [
      "but it has no idea how to get there"
    ],
    "ru": [
      "но он не знает, как туда добраться"
    ]
  },
  {
    "time": [
      219.401602,
      222.862123
    ],
    "en": [
      "if I try to ping our one side of the tunnel"
    ],
    "ru": [
      "если я попытаюсь пинговать нашу сторону туннеля"
    ]
  },
  {
    "time": [
      222.862123,
      223.743824
    ],
    "en": [
      "it will fail"
    ],
    "ru": [
      "это не удастся"
    ]
  },
  {
    "time": [
      223.743824,
      228.795502
    ],
    "en": [
      "do ping 192.168.1.1"
    ],
    "ru": [
      "сделать пинг 192.168.1.1"
    ]
  },
  {
    "time": [
      228.795502,
      235.803076
    ],
    "en": [
      "no response"
    ],
    "ru": [
      "нет ответа"
    ]
  },
  {
    "time": [
      235.803076,
      240.39328
    ],
    "en": [
      "let's configure a static default route via SPR to"
    ],
    "ru": [
      "давайте настроим статический маршрут по умолчанию через SPR на"
    ]
  },
  {
    "time": [
      240.39328,
      250.965547
    ],
    "en": [
      "exit IP route oh-oh-oh-oh-oh-oh-oh-oh-oh 201"
    ],
    "ru": [
      "выход IP-маршрута ой-ой-ой-ой-ой-ой-ой-ой-ой 201"
    ]
  },
  {
    "time": [
      250.965547,
      254.287611
    ],
    "en": [
      "now we have to do the same on our one"
    ],
    "ru": [
      "теперь мы должны сделать то же самое с нашим"
    ]
  },
  {
    "time": [
      254.287611,
      266.663869
    ],
    "en": [
      "exit IP route oh-oh-oh-oh-oh-oh-oh-oh-oh 101"
    ],
    "ru": [
      "выход IP-маршрута о-о-о-о-о-о-о-о-о 101"
    ]
  },
  {
    "time": [
      266.663869,
      270.203846
    ],
    "en": [
      "keep in mind it doesn't have to be a default route"
    ],
    "ru": [
      "имейте в виду, что это не обязательно маршрут по умолчанию"
    ]
  },
  {
    "time": [
      270.203846,
      276.339629
    ],
    "en": [
      "the important thing is that the routers can reach the IP addresses configured as the tunnel destination"
    ],
    "ru": [
      "важно то, что маршрутизаторы могут достигать IP-адресов, настроенных в качестве пункта назначения туннеля."
    ]
  },
  {
    "time": [
      276.339629,
      281.47201
    ],
    "en": [
      "okay now r1 and r2 can reach each other"
    ],
    "ru": [
      "хорошо, теперь r1 и r2 могут связаться друг с другом"
    ]
  },
  {
    "time": [
      281.47201,
      285.839243
    ],
    "en": [
      "let's try to ping our two side of the tunnel from here on r1"
    ],
    "ru": [
      "давайте попробуем пинговать наши две стороны туннеля отсюда на r1"
    ]
  },
  {
    "time": [
      285.839243,
      291.248676
    ],
    "en": [
      "do ping 192.168.1.2"
    ],
    "ru": [
      "сделать пинг 192.168.1.2"
    ]
  },
  {
    "time": [
      291.248676,
      297.997792
    ],
    "en": [
      "okay it works this time"
    ],
    "ru": [
      "хорошо, на этот раз работает"
    ]
  },
  {
    "time": [
      297.997792,
      300.178563
    ],
    "en": [
      "let's check the interface"
    ],
    "ru": [
      "давайте проверим интерфейс"
    ]
  },
  {
    "time": [
      300.178563,
      303.677021
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      303.677021,
      307.188041
    ],
    "en": [
      "our tunnel interface is up and up"
    ],
    "ru": [
      "наш туннельный интерфейс работает и работает"
    ]
  },
  {
    "time": [
      307.188041,
      311.689447
    ],
    "en": [
      "do show interface tunnel zero"
    ],
    "ru": [
      "показывать нулевой интерфейсный туннель"
    ]
  },
  {
    "time": [
      311.689447,
      316.249674
    ],
    "en": [
      "there's the tunnel source and destination we configured"
    ],
    "ru": [
      "есть источник и пункт назначения туннеля, которые мы настроили"
    ]
  },
  {
    "time": [
      316.249674,
      322.465569
    ],
    "en": [
      "and you can see the tunnel protocol is gr e being transported over IP"
    ],
    "ru": [
      "и вы можете видеть, что туннельный протокол транспортируется по IP"
    ]
  },
  {
    "time": [
      322.465569,
      327.0538
    ],
    "en": [
      "ok now let's configure AI GRP over the tunnel"
    ],
    "ru": [
      "хорошо, теперь давайте настроим AI GRP через туннель"
    ]
  },
  {
    "time": [
      327.0538,
      330.73151
    ],
    "en": [
      "router ERP"
    ],
    "ru": [
      "маршрутизатор ERP"
    ]
  },
  {
    "time": [
      330.73151,
      333.784708
    ],
    "en": [
      "and I'll use an a s number of 100"
    ],
    "ru": [
      "и я использую число 100"
    ]
  },
  {
    "time": [
      333.784708,
      337.344776
    ],
    "en": [
      "so I want to advertise the inside network"
    ],
    "ru": [
      "поэтому я хочу рекламировать внутреннюю сеть"
    ]
  },
  {
    "time": [
      337.344776,
      344.164503
    ],
    "en": [
      "so Network 1000 100 200 255"
    ],
    "ru": [
      "так Сеть 1000 100 200 255"
    ]
  },
  {
    "time": [
      344.164503,
      346.957723
    ],
    "en": [
      "I used the exact wildcard mask"
    ],
    "ru": [
      "Я использовал точную маску подстановки"
    ]
  },
  {
    "time": [
      346.957723,
      349.986816
    ],
    "en": [
      "but remember it's not always needed for EIG RP"
    ],
    "ru": [
      "но помните, что это не всегда нужно для EIG RP"
    ]
  },
  {
    "time": [
      349.986816,
      358.386203
    ],
    "en": [
      "just network 10000 would have activated AI GRP on the G 0 0 interface as well"
    ],
    "ru": [
      "просто сеть 10000 также активировала AI GRP на интерфейсе G 0 0"
    ]
  },
  {
    "time": [
      358.386203,
      363.100376
    ],
    "en": [
      "okay now let's activate di GRP on the tunnel"
    ],
    "ru": [
      "Хорошо, теперь давайте активируем ди GRP в туннеле"
    ]
  },
  {
    "time": [
      363.100376,
      370.05507
    ],
    "en": [
      "network 192.168.1.0 again I'll use the exact wildcard mask"
    ],
    "ru": [
      "сеть 192.168.1.0 снова я буду использовать точную маску подстановки"
    ]
  },
  {
    "time": [
      370.05507,
      3.0
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
      3.0,
      372.551124
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
      372.551124,
      374.968902
    ],
    "en": [
      "ok let's do the same on our two"
    ],
    "ru": [
      "хорошо, давай сделаем то же самое с нашими двумя"
    ]
  },
  {
    "time": [
      374.968902,
      380.397859
    ],
    "en": [
      "rotary IG RP 100"
    ],
    "ru": [
      "роторный ИГ РП 100"
    ]
  },
  {
    "time": [
      380.397859,
      386.406884
    ],
    "en": [
      "Network 1002 oh-oh-oh-oh 255"
    ],
    "ru": [
      "Сеть 1002 ой-ой-ой-ой 255"
    ]
  },
  {
    "time": [
      386.406884,
      392.40643
    ],
    "en": [
      "network 192.168.1.0 oh oh oh 3"
    ],
    "ru": [
      "сеть 192.168.1.0 ой ой ой 3"
    ]
  },
  {
    "time": [
      392.40643,
      397.856702
    ],
    "en": [
      "immediately we get a message saying we have a new AI GRP adjacency"
    ],
    "ru": [
      "сразу же мы получаем сообщение о том, что у нас есть новая смежность AI GRP"
    ]
  },
  {
    "time": [
      397.856702,
      398.977904
    ],
    "en": [
      "Oh where the tunnel interface"
    ],
    "ru": [
      "О, где туннельный интерфейс"
    ]
  },
  {
    "time": [
      398.977904,
      402.947518
    ],
    "en": [
      "and the neighbor address is our ones tunnel address"
    ],
    "ru": [
      "а соседний адрес - это адрес нашего туннеля"
    ]
  },
  {
    "time": [
      402.947518,
      405.450148
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
      402.947518,
      405.450148
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
      405.450148,
      409.459332
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
      409.459332,
      412.86457
    ],
    "en": [
      "look are two learned our ones"
    ],
    "ru": [
      "смотри, двое узнали наши"
    ]
  },
  {
    "time": [
      412.86457,
      415.953776
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
      412.86457,
      415.953776
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
      415.953776,
      420.774434
    ],
    "en": [
      "let's try a ping from PC to 2 PC one"
    ],
    "ru": [
      "попробуем пинг с ПК на 2 ПК один"
    ]
  },
  {
    "time": [
      420.774434,
      428.740669
    ],
    "en": [
      "ping 1001 100"
    ],
    "ru": [
      "пинг 1001 100"
    ]
  },
  {
    "time": [
      428.740669,
      438.750375
    ],
    "en": [
      "okay it works"
    ],
    "ru": [
      "хорошо, это работает"
    ]
  },
  {
    "time": [
      438.750375,
      441.717586
    ],
    "en": [
      "our GRE tunnel is up and working"
    ],
    "ru": [
      "наш туннель GRE запущен и работает"
    ]
  },
  {
    "time": [
      441.717586,
      446.579241
    ],
    "en": [
      "and we successfully configured a IG RP over the tunnel to share the inside networks"
    ],
    "ru": [
      "и мы успешно настроили IG RP через туннель для совместного использования внутренних сетей"
    ]
  },
  {
    "time": [
      446.579241,
      448.649467
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
      448.649467,
      456.179308
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
      456.179308,
      460.677131
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
      460.677131,
      465.977086
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
      465.977086,
      472.45153
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      472.45153,
      481.347698
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
      481.347698,
      481.347698
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
      481.347698,
      481.347698
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
      481.347698,
      481.347698
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]