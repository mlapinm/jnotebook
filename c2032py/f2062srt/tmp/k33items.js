let objs = [
  {
    "time": [
      0.0,
      7.51777
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab you can download the lab file from the link in the description"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную лабораторную практику по трассировщику пакетов CCNA, вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      7.51777,
      14.149018
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
      14.149018,
      18.204726
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
      18.204726,
      23.244809
    ],
    "en": [
      "in this lab we will expand upon what we did in the previous lab"
    ],
    "ru": [
      "в этой лабораторной работе мы расширим то, что мы делали в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      23.244809,
      30.555411
    ],
    "en": [
      "I have added an additional router change the IP addresses and we will configure multi area OSPF"
    ],
    "ru": [
      "Я добавил дополнительный роутер, изменим IP-адреса, и мы настроим многозонный OSPF"
    ]
  },
  {
    "time": [
      30.555411,
      33.556181
    ],
    "en": [
      "the middle area is area 0"
    ],
    "ru": [
      "средняя область - область 0"
    ]
  },
  {
    "time": [
      33.556181,
      39.517201
    ],
    "en": [
      "also known as the backbone all other areas must be attached to the backbone area"
    ],
    "ru": [
      "также известный как позвоночник, все остальные области должны быть прикреплены к области позвоночника."
    ]
  },
  {
    "time": [
      39.517201,
      43.958388
    ],
    "en": [
      "and traffic from one area to another must pass through the backbone"
    ],
    "ru": [
      "и трафик из одной области в другую должен проходить через магистраль"
    ]
  },
  {
    "time": [
      43.958388,
      49.463138
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
      43.958388,
      49.463138
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
      49.463138,
      52.086179
    ],
    "en": [
      "because they have interfaces in multiple areas"
    ],
    "ru": [
      "потому что у них есть интерфейсы в нескольких областях"
    ]
  },
  {
    "time": [
      52.086179,
      60.977116
    ],
    "en": [
      "r2 has interfaces in area 0 and area 1 and r3 has interfaces in area 0 and area 2"
    ],
    "ru": [
      "r2 имеет интерфейсы в области 0 и области 1, а r3 имеет интерфейсы в области 0 и области 2"
    ]
  },
  {
    "time": [
      60.977116,
      62.860761
    ],
    "en": [
      "let's get started"
    ],
    "ru": [
      "Давайте начнем"
    ]
  },
  {
    "time": [
      62.860761,
      67.214303
    ],
    "en": [
      "I'll configure these routers in order from 1 to 5"
    ],
    "ru": [
      "Я настрою эти роутеры по порядку от 1 до 5."
    ]
  },
  {
    "time": [
      67.214303,
      71.04899
    ],
    "en": [
      "make sure you configure the interfaces in the proper areas"
    ],
    "ru": [
      "убедитесь, что вы настроили интерфейсы в правильных областях"
    ]
  },
  {
    "time": [
      71.04899,
      76.737635
    ],
    "en": [
      "also we should configure the loopback interfaces as passive interfaces"
    ],
    "ru": [
      "также мы должны настроить интерфейсы обратной связи как пассивные интерфейсы"
    ]
  },
  {
    "time": [
      76.737635,
      82.837573
    ],
    "en": [
      "and configure the reference bandwidth so that a 100 gigabit interface would have a cost of 1"
    ],
    "ru": [
      "и настройте эталонную полосу пропускания так, чтобы 100-гигабитный интерфейс стоил 1"
    ]
  },
  {
    "time": [
      82.837573,
      85.224615
    ],
    "en": [
      "let's go on r1"
    ],
    "ru": [
      "пойдем на r1"
    ]
  },
  {
    "time": [
      85.224615,
      96.855843
    ],
    "en": [
      "enable conf t router OSPF 1 remember the OSPF process ID doesn't have to match between routers"
    ],
    "ru": [
      "enable conf t router OSPF 1 помните, что идентификатор процесса OSPF не обязательно должен совпадать между маршрутизаторами"
    ]
  },
  {
    "time": [
      96.855843,
      102.583093
    ],
    "en": [
      "in the last lab I purposefully configured a different process ID on each router"
    ],
    "ru": [
      "в последней лабораторной работе я специально настроил разные идентификаторы процесса на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      102.583093,
      109.016468
    ],
    "en": [
      "in this lab however I'll do the typical thing and just use a process ID of one for each router"
    ],
    "ru": [
      "однако в этой лабораторной работе я сделаю типичную вещь и просто буду использовать идентификатор процесса, равный одному для каждого маршрутизатора."
    ]
  },
  {
    "time": [
      109.016468,
      113.954384
    ],
    "en": [
      "ok now our ones interfaces are all in a single area"
    ],
    "ru": [
      "хорошо, теперь наши интерфейсы все в одной области"
    ]
  },
  {
    "time": [
      113.954384,
      116.573218
    ],
    "en": [
      "so I'll use our shortcut from last time"
    ],
    "ru": [
      "так что я воспользуюсь нашим ярлыком из прошлого раза"
    ]
  },
  {
    "time": [
      116.573218,
      124.594529
    ],
    "en": [
      "Network 0.0.0.0 255 255 255 255 area 1"
    ],
    "ru": [
      "Сеть 0.0.0.0 255255255255 область 1"
    ]
  },
  {
    "time": [
      124.594529,
      129.580529
    ],
    "en": [
      "now OSPF is activated on all interfaces with an IP address"
    ],
    "ru": [
      "теперь OSPF активирован на всех интерфейсах с IP-адресом"
    ]
  },
  {
    "time": [
      129.580529,
      132.697966
    ],
    "en": [
      "let's make the loopback passive passive"
    ],
    "ru": [
      "давайте сделаем петлю пассивной пассивной"
    ]
  },
  {
    "time": [
      132.697966,
      135.577237
    ],
    "en": [
      "interface l0"
    ],
    "ru": [
      "интерфейс l0"
    ]
  },
  {
    "time": [
      135.577237,
      138.471466
    ],
    "en": [
      "finally the reference bandwidth"
    ],
    "ru": [
      "наконец, эталонная полоса пропускания"
    ]
  },
  {
    "time": [
      138.471466,
      138.238466
    ],
    "en": [
      "Auto cost reference bandwidth"
    ],
    "ru": [
      "Автоматическая эталонная пропускная способность"
    ]
  },
  {
    "time": [
      138.238466,
      143.971361
    ],
    "en": [
      "now what should the value B"
    ],
    "ru": [
      "теперь какое значение должно быть B"
    ]
  },
  {
    "time": [
      143.971361,
      147.97534
    ],
    "en": [
      "we should configure it to be equivalent to 100 gigabits per second"
    ],
    "ru": [
      "мы должны настроить его, чтобы он был эквивалентен 100 гигабитам в секунду"
    ]
  },
  {
    "time": [
      147.97534,
      151.160007
    ],
    "en": [
      "that's 100,000 megabits per second"
    ],
    "ru": [
      "это 100 000 мегабит в секунду"
    ]
  },
  {
    "time": [
      151.160007,
      155.132465
    ],
    "en": [
      "so configure the reference bandwidth as 100,000"
    ],
    "ru": [
      "поэтому настройте эталонную полосу пропускания как 100000"
    ]
  },
  {
    "time": [
      155.132465,
      157.874924
    ],
    "en": [
      "okay that's all for r1"
    ],
    "ru": [
      "хорошо, это все для r1"
    ]
  },
  {
    "time": [
      157.874924,
      163.110757
    ],
    "en": [
      "now I'll go through the rest of these devices fairly quickly"
    ],
    "ru": [
      "теперь я довольно быстро пройдусь по остальным устройствам"
    ]
  },
  {
    "time": [
      163.110757,
      167.915736
    ],
    "en": [
      "again make sure to configure the correct interfaces in the correct areas"
    ],
    "ru": [
      "снова убедитесь, что настроили правильные интерфейсы в правильных областях"
    ]
  },
  {
    "time": [
      167.915736,
      175.916194
    ],
    "en": [
      "for routers 2 & 3 the loop backs could be in either area but the instructions say to put them in area 0"
    ],
    "ru": [
      "для маршрутизаторов 2 и 3 петли могут быть в любой области, но в инструкциях говорится, что нужно поместить их в область 0"
    ]
  },
  {
    "time": [
      175.916194,
      177.906174
    ],
    "en": [
      "let's go on r2"
    ],
    "ru": [
      "пойдем на r2"
    ]
  },
  {
    "time": [
      177.906174,
      191.818653
    ],
    "en": [
      "an able Conti router OSPF one network 10.12.0.0 0.0.0.255 area 1"
    ],
    "ru": [
      "работоспособный маршрутизатор Conti OSPF одна сеть 10.12.0.0 0.0.0.255 область 1"
    ]
  },
  {
    "time": [
      191.818653,
      196.210589
    ],
    "en": [
      "I configure the same slash 24 mask as on the interface"
    ],
    "ru": [
      "Я настраиваю ту же маску косой черты 24, что и на интерфейсе"
    ]
  },
  {
    "time": [
      196.210589,
      199.035423
    ],
    "en": [
      "but remember that a slash 16 would work as well"
    ],
    "ru": [
      "но помните, что слэш 16 тоже подойдет"
    ]
  },
  {
    "time": [
      199.035423,
      202.667339
    ],
    "en": [
      "a /8 would not work however"
    ],
    "ru": [
      "а / 8 не будет работать, однако"
    ]
  },
  {
    "time": [
      202.667339,
      207.864214
    ],
    "en": [
      "because 10.0.0.0 / 8 includes f2 0 also"
    ],
    "ru": [
      "потому что 10.0.0.0 / 8 также включает f2 0"
    ]
  },
  {
    "time": [
      207.864214,
      209.77536
    ],
    "en": [
      "which has to be in a different area"
    ],
    "ru": [
      "который должен быть в другой области"
    ]
  },
  {
    "time": [
      209.77536,
      211.767631
    ],
    "en": [
      "okay let's continue"
    ],
    "ru": [
      "хорошо давай продолжим"
    ]
  },
  {
    "time": [
      211.767631,
      219.113464
    ],
    "en": [
      "Network 10.23.0.0 0.0.0.255 area 0"
    ],
    "ru": [
      "Сеть 10.23.0.0 0.0.0.255 область 0"
    ]
  },
  {
    "time": [
      219.113464,
      225.176901
    ],
    "en": [
      "network 2.2.2.2 0.0.0.0 area 0"
    ],
    "ru": [
      "сеть 2.2.2.2 0.0.0.0 область 0"
    ]
  },
  {
    "time": [
      225.176901,
      232.886796
    ],
    "en": [
      "passive interface l0 auto cost reference bandwidth 100000"
    ],
    "ru": [
      "пассивный интерфейс l0 автоматическая стоимость эталонная полоса пропускания 100000"
    ]
  },
  {
    "time": [
      232.886796,
      235.590504
    ],
    "en": [
      "okay next is r3"
    ],
    "ru": [
      "хорошо, дальше идет r3"
    ]
  },
  {
    "time": [
      235.590504,
      249.41367
    ],
    "en": [
      "enable conf t router OSPF one network 10.23.0.0 0.0.0.255 area 0"
    ],
    "ru": [
      "включить конф т роутер OSPF one network 10.23.0.0 0.0.0.255 area 0"
    ]
  },
  {
    "time": [
      249.41367,
      256.534919
    ],
    "en": [
      "network 10.35.0.0 0.0.0.255 area 2"
    ],
    "ru": [
      "сеть 10.35.0.0 0.0.0.255 область 2"
    ]
  },
  {
    "time": [
      256.534919,
      262.392063
    ],
    "en": [
      "network 3.3.3.3 0.0.0.0 area 0"
    ],
    "ru": [
      "сеть 3.3.3.3 0.0.0.0 область 0"
    ]
  },
  {
    "time": [
      262.392063,
      270.564021
    ],
    "en": [
      "passive interface l0 auto cost reference bandwidth 100,000"
    ],
    "ru": [
      "пассивный интерфейс l0 автоматическая стоимость эталонная полоса пропускания 100000"
    ]
  },
  {
    "time": [
      270.564021,
      273.111646
    ],
    "en": [
      "okay next is r4"
    ],
    "ru": [
      "хорошо, дальше идет r4"
    ]
  },
  {
    "time": [
      273.111646,
      285.023228
    ],
    "en": [
      "enable conf T Network 0.0.0.0 255.255.255.0 v area 1"
    ],
    "ru": [
      "enable conf T Network 0.0.0.0 255.255.255.0 v область 1"
    ]
  },
  {
    "time": [
      285.023228,
      292.018061
    ],
    "en": [
      "passive interface l 0 auto cost reference bandwidth 100,000"
    ],
    "ru": [
      "пассивный интерфейс l 0 автоматическая стоимость эталонной полосы пропускания 100000"
    ]
  },
  {
    "time": [
      292.018061,
      294.722977
    ],
    "en": [
      "okay last router r5"
    ],
    "ru": [
      "хорошо последний роутер r5"
    ]
  },
  {
    "time": [
      294.722977,
      301.291121
    ],
    "en": [
      "enable conf t router OSPF 1"
    ],
    "ru": [
      "включить конф т роутер OSPF 1"
    ]
  },
  {
    "time": [
      301.291121,
      306.203141
    ],
    "en": [
      "our five is only part of area 2 so let's use this shortcut again"
    ],
    "ru": [
      "наша пятерка - это только часть области 2, поэтому давайте снова воспользуемся этим ярлыком"
    ]
  },
  {
    "time": [
      306.203141,
      313.574536
    ],
    "en": [
      "network 0.0.0.0 255.255.255.255 area 2"
    ],
    "ru": [
      "сеть 0.0.0.0 255.255.255.255 область 2"
    ]
  },
  {
    "time": [
      313.574536,
      320.547223
    ],
    "en": [
      "passive interface L 0 auto cost reference bandwidth 100000"
    ],
    "ru": [
      "пассивный интерфейс L 0 автоматическая стоимость эталонная полоса пропускания 100000"
    ]
  },
  {
    "time": [
      320.547223,
      322.575265
    ],
    "en": [
      "that's all for step 1"
    ],
    "ru": [
      "это все для шага 1"
    ]
  },
  {
    "time": [
      322.575265,
      328.073056
    ],
    "en": [
      "now step 2 is to configure route summarization on the ABR's"
    ],
    "ru": [
      "теперь шаг 2 - настроить суммирование маршрута на ABR"
    ]
  },
  {
    "time": [
      328.073056,
      332.359972
    ],
    "en": [
      "here on our 5 let me show you the route table"
    ],
    "ru": [
      "здесь, на нашем 5, позвольте мне показать вам таблицу маршрутов"
    ]
  },
  {
    "time": [
      332.359972,
      334.77518
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
      334.77518,
      346.547344
    ],
    "en": [
      "we have all of these routes 10.12.0.0 10.14.0.0 10.23.0.0 but our 5 only has one path to them"
    ],
    "ru": [
      "у нас есть все эти маршруты 10.12.0.0 10.14.0.0 10.23.0.0, но у наших 5 только один путь к ним"
    ]
  },
  {
    "time": [
      346.547344,
      354.712552
    ],
    "en": [
      "so our three could instead advertise a single 10.0.0.0 / 8 route to r5"
    ],
    "ru": [
      "так что наши трое могли вместо этого объявить один маршрут 10.0.0.0 / 8 к r5"
    ]
  },
  {
    "time": [
      354.712552,
      357.164864
    ],
    "en": [
      "and it would help clean up our 5s routing table"
    ],
    "ru": [
      "и это поможет очистить нашу таблицу маршрутизации 5s"
    ]
  },
  {
    "time": [
      357.164864,
      362.868176
    ],
    "en": [
      "this isn't a very large network but in very large networks this is very beneficial"
    ],
    "ru": [
      "это не очень большая сеть, но в очень больших сетях это очень полезно"
    ]
  },
  {
    "time": [
      362.868176,
      366.423072
    ],
    "en": [
      "let's configure that on r3"
    ],
    "ru": [
      "давайте настроим это на r3"
    ]
  },
  {
    "time": [
      366.423072,
      372.896467
    ],
    "en": [
      "we want to summarize these routes are 3 is receiving an area 0"
    ],
    "ru": [
      "мы хотим суммировать эти маршруты: 3 получает область 0"
    ]
  },
  {
    "time": [
      372.896467,
      375.506572
    ],
    "en": [
      "so we begin the command with area 0"
    ],
    "ru": [
      "поэтому мы начинаем команду с области 0"
    ]
  },
  {
    "time": [
      375.506572,
      376.960884
    ],
    "en": [
      "not with area 1"
    ],
    "ru": [
      "не с областью 1"
    ]
  },
  {
    "time": [
      376.960884,
      379.311384
    ],
    "en": [
      "the area to which we will advertise the summary"
    ],
    "ru": [
      "область, в которой мы будем рекламировать резюме"
    ]
  },
  {
    "time": [
      379.311384,
      391.238509
    ],
    "en": [
      "ok next to the keyword range then the address 10.0.0.0 followed by the mask 255.0.0.0"
    ],
    "ru": [
      "ОК рядом с диапазоном ключевых слов, затем адрес 10.0.0.0, за которым следует маска 255.0.0.0"
    ]
  },
  {
    "time": [
      391.238509,
      395.4868
    ],
    "en": [
      "keep in mind that this is not a wildcard mask"
    ],
    "ru": [
      "имейте в виду, что это не подстановочная маска"
    ]
  },
  {
    "time": [
      395.4868,
      399.740487
    ],
    "en": [
      "that's easy to mix up since the network command uses a wildcard mask"
    ],
    "ru": [
      "это легко перепутать, так как сетевая команда использует подстановочную маску"
    ]
  },
  {
    "time": [
      399.740487,
      414.315736
    ],
    "en": [
      "so if we go and check on r5 instead of having learned routes to 10.23.0.0/24 10.12.0.0/24 and 10.14.0.0/24"
    ],
    "ru": [
      "поэтому, если мы пойдем и проверим r5 вместо того, чтобы изучать маршруты до 10.23.0.0/24, 10.12.0.0/24 и 10.14.0.0/24"
    ]
  },
  {
    "time": [
      414.315736,
      418.525652
    ],
    "en": [
      "it should have a single 10.0.0.0 / 8th route"
    ],
    "ru": [
      "у него должен быть один 10.0.0.0 / 8-й маршрут"
    ]
  },
  {
    "time": [
      418.525652,
      420.07911
    ],
    "en": [
      "learned via OSPF"
    ],
    "ru": [
      "изучено через OSPF"
    ]
  },
  {
    "time": [
      420.07911,
      425.224589
    ],
    "en": [
      "however the loop backs don't fit in the summary so they will be unchanged"
    ],
    "ru": [
      "однако петлицы не помещаются в сводку, поэтому они останутся без изменений."
    ]
  },
  {
    "time": [
      425.224589,
      428.791839
    ],
    "en": [
      "okay let's go check r5s route table"
    ],
    "ru": [
      "хорошо, давайте проверим таблицу маршрутов r5s"
    ]
  },
  {
    "time": [
      428.791839,
      433.106297
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
      433.106297,
      436.028276
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      436.028276,
      442.831109
    ],
    "en": [
      "r5 has learned a single route to all of the routes that fit within the 10.0.0.0/ 8 range"
    ],
    "ru": [
      "r5 изучил один маршрут для всех маршрутов, которые попадают в диапазон 10.0.0.0/ 8"
    ]
  },
  {
    "time": [
      442.831109,
      448.926129
    ],
    "en": [
      "of course it still has its directly connected network of 10.35.0.0/24 here"
    ],
    "ru": [
      "конечно, у него все еще есть напрямую подключенная сеть 10.35.0.0/24 здесь"
    ]
  },
  {
    "time": [
      448.926129,
      453.654732
    ],
    "en": [
      "now let's configure the same thing on r2"
    ],
    "ru": [
      "теперь настроим то же самое на r2"
    ]
  },
  {
    "time": [
      453.654732,
      464.534731
    ],
    "en": [
      "r1 and r4 don't need to learn about that 10.23.0.0/24 and 10.35.0.0/24"
    ],
    "ru": [
      "r1 и r4 не нужно знать об этом 10.23.0.0/24 и 10.35.0.0/24"
    ]
  },
  {
    "time": [
      464.534731,
      490.361539
    ],
    "en": [
      "the routing tables of r1 and r4 we shouldn't see routes"
    ],
    "ru": [
      "таблицы маршрутизации r1 и r4 мы не должны видеть маршруты"
    ]
  },
  {
    "time": [
      490.361539,
      495.957809
    ],
    "en": [
      "to 10.20 300 / 24 and 10.35 0/24"
    ],
    "ru": [
      "до 10.20 300/24 ​​и 10.35 0/24"
    ]
  },
  {
    "time": [
      495.957809,
      500.716475
    ],
    "en": [
      "but rather a summary 10000 / 8 address"
    ],
    "ru": [
      "а скорее краткий адрес 10000/8"
    ]
  },
  {
    "time": [
      500.716475,
      506.877475
    ],
    "en": [
      "keep in mind it can take a few seconds for the network to converge and this changed to show in the routing table"
    ],
    "ru": [
      "имейте в виду, что для схождения сети может потребоваться несколько секунд, и это изменилось, чтобы отобразиться в таблице маршрутизации"
    ]
  },
  {
    "time": [
      506.877475,
      509.239516
    ],
    "en": [
      "but let's check on r4"
    ],
    "ru": [
      "но давай проверим на r4"
    ]
  },
  {
    "time": [
      509.239516,
      514.462161
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
      514.462161,
      517.671995
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      517.671995,
      520.985599
    ],
    "en": [
      "there's that 1000 / 8 summary"
    ],
    "ru": [
      "вот эта сводка 1000/8"
    ]
  },
  {
    "time": [
      520.985599,
      526.244661
    ],
    "en": [
      "in this lab we looked at multi area OSPF"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрели многоблочный OSPF"
    ]
  },
  {
    "time": [
      526.244661,
      536.341202
    ],
    "en": [
      "we could have more areas area 3 area for area 5 etc but remember that all areas must connect to the backbone area area zero"
    ],
    "ru": [
      "мы могли бы иметь больше областей, область 3, область 5 и т. д., но помните, что все области должны подключаться к нулевой области магистрали."
    ]
  },
  {
    "time": [
      536.341202,
      540.777994
    ],
    "en": [
      "we also used summarization to reduce the size of our routing table"
    ],
    "ru": [
      "мы также использовали суммирование, чтобы уменьшить размер нашей таблицы маршрутизации"
    ]
  },
  {
    "time": [
      540.777994,
      543.060786
    ],
    "en": [
      "which is highly recommended in large networks"
    ],
    "ru": [
      "что настоятельно рекомендуется в больших сетях"
    ]
  },
  {
    "time": [
      543.060786,
      544.800411
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
      544.800411,
      552.188536
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
      552.188536,
      557.142098
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
      557.142098,
      562.057077
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
      562.057077,
      569.125597
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
      569.125597,
      577.996785
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
      577.996785,
      577.996785
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
      577.996785,
      577.996785
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
      577.996785,
      577.996785
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]