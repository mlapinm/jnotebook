let objs = [
  {
    "time": [
      0.0,
      5.106291
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
      5.106291,
      8.064916
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
      8.064916,
      15.340811
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
      15.340811,
      19.648415
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
      19.648415,
      25.702227
    ],
    "en": [
      "in this lab we will configure the enhanced interior gateway routing protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим расширенный протокол маршрутизации внутреннего шлюза."
    ]
  },
  {
    "time": [
      25.702227,
      27.280019
    ],
    "en": [
      "e IG RP"
    ],
    "ru": [
      "e IG RP"
    ]
  },
  {
    "time": [
      27.280019,
      36.743248
    ],
    "en": [
      "e IG RP is as the name suggests an enhanced version of Cisco's interior gateway routing protocol IG RP"
    ],
    "ru": [
      "e IG RP - это, как следует из названия, улучшенная версия протокола маршрутизации внутреннего шлюза Cisco IG RP"
    ]
  },
  {
    "time": [
      36.743248,
      46.874269
    ],
    "en": [
      "although EIGRP used to be a cisco proprietary routing protocol meaning was available only on cisco routers it has been moved to an open standard"
    ],
    "ru": [
      "хотя раньше EIGRP был проприетарным протоколом маршрутизации cisco, то есть был доступен только на маршрутизаторах cisco, он был перемещен в открытый стандарт"
    ]
  },
  {
    "time": [
      46.874269,
      53.292539
    ],
    "en": [
      "however in a multi-vendor environment you're almost certainly going to see OSPF used over a EIGRP"
    ],
    "ru": [
      "однако в среде с несколькими поставщиками вы почти наверняка увидите, что OSPF используется поверх EIGRP."
    ]
  },
  {
    "time": [
      53.292539,
      54.843747
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
      54.843747,
      59.748768
    ],
    "en": [
      "the first step is to configure loopback address on each router"
    ],
    "ru": [
      "первый шаг - настроить адрес обратной связи на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      59.748768,
      65.373226
    ],
    "en": [
      "these addresses will later become the EIG RP router IDs used for each router"
    ],
    "ru": [
      "эти адреса позже станут идентификаторами маршрутизатора EIG RP, используемыми для каждого маршрутизатора."
    ]
  },
  {
    "time": [
      65.373226,
      70.816955
    ],
    "en": [
      "the eigrp router ID functions the same way as the OSPF router ID"
    ],
    "ru": [
      "идентификатор маршрутизатора eigrp работает так же, как идентификатор маршрутизатора OSPF"
    ]
  },
  {
    "time": [
      70.816955,
      74.035955
    ],
    "en": [
      "manual configuration takes priority"
    ],
    "ru": [
      "ручная настройка имеет приоритет"
    ]
  },
  {
    "time": [
      74.035955,
      80.852351
    ],
    "en": [
      "if the router ID is not manually configured the highest IP address on a loopback interface is used"
    ],
    "ru": [
      "если идентификатор маршрутизатора не настроен вручную, используется наивысший IP-адрес на интерфейсе обратной связи."
    ]
  },
  {
    "time": [
      80.852351,
      86.991268
    ],
    "en": [
      "if there is no loopback interface the highest IP address on a regular interface is used"
    ],
    "ru": [
      "если нет интерфейса обратной связи, используется самый высокий IP-адрес на обычном интерфейсе"
    ]
  },
  {
    "time": [
      86.991268,
      91.291914
    ],
    "en": [
      "we've configured loopback to plenty of times so let's go through this quickly"
    ],
    "ru": [
      "мы настраивали loopback много раз, так что давайте быстро рассмотрим это"
    ]
  },
  {
    "time": [
      91.291914,
      92.796976
    ],
    "en": [
      "I'll start on r1"
    ],
    "ru": [
      "Я начну на r1"
    ]
  },
  {
    "time": [
      92.796976,
      107.903684
    ],
    "en": [
      "enable coffee/tea interface l0 IP address 1.1.11 255.255.255.0 v ok"
    ],
    "ru": [
      "включить интерфейс кофе / чая l0 IP-адрес 1.1.11 255.255.255.0 v ok"
    ]
  },
  {
    "time": [
      107.903684,
      110.796684
    ],
    "en": [
      "next are to"
    ],
    "ru": [
      "рядом с"
    ]
  },
  {
    "time": [
      110.796684,
      121.983496
    ],
    "en": [
      "enable call T interface l0 IP address - 2 - 2 255.255.255.0 5"
    ],
    "ru": [
      "включить вызов интерфейса T l0 IP-адрес - 2-2 255.255.255.0 5"
    ]
  },
  {
    "time": [
      121.983496,
      124.4946
    ],
    "en": [
      "ok next r3"
    ],
    "ru": [
      "хорошо, следующий r3"
    ]
  },
  {
    "time": [
      124.4946,
      138.016204
    ],
    "en": [
      "enable compte interface l0 IP address 3.33 255.255.255.0 5"
    ],
    "ru": [
      "включить интерфейс compte l0 IP-адрес 3.33 255.255.255.0 5"
    ]
  },
  {
    "time": [
      138.016204,
      140.481579
    ],
    "en": [
      "next is r4"
    ],
    "ru": [
      "Далее идет r4"
    ]
  },
  {
    "time": [
      140.481579,
      153.502975
    ],
    "en": [
      "enable coffee tea interface l0 IP address 4.4.4 255.255.255.0 5"
    ],
    "ru": [
      "включить интерфейс кофе / чая l0 IP-адрес 4.4.4 255.255.255.0 5"
    ]
  },
  {
    "time": [
      153.502975,
      158.010121
    ],
    "en": [
      "ok finally let's go on our five"
    ],
    "ru": [
      "хорошо, наконец, давай пойдем на нашу пятерку"
    ]
  },
  {
    "time": [
      158.010121,
      173.807767
    ],
    "en": [
      "enable coffee tea interface l0 IP address v dot v dot v dot v 255.255.255.0 v okay that's all for step one"
    ],
    "ru": [
      "включить интерфейс кофе-чая l0 IP-адрес v dot v dot v dot v 255.255.255.0 v хорошо, это все для первого шага"
    ]
  },
  {
    "time": [
      173.807767,
      177.571662
    ],
    "en": [
      "now let's actually configure a EIGRP on each router"
    ],
    "ru": [
      "теперь давайте фактически настроим EIGRP на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      177.571662,
      181.587579
    ],
    "en": [
      "the configuration is similar to OSPF configuration"
    ],
    "ru": [
      "конфигурация аналогична конфигурации OSPF"
    ]
  },
  {
    "time": [
      181.587579,
      183.598558
    ],
    "en": [
      "let's go back to our one"
    ],
    "ru": [
      "давай вернемся к нашему"
    ]
  },
  {
    "time": [
      183.598558,
      189.386599
    ],
    "en": [
      "to enter a EIGRP configuration mode use this command"
    ],
    "ru": [
      "чтобы войти в режим конфигурации EIGRP, используйте эту команду"
    ]
  },
  {
    "time": [
      189.386599,
      194.931683
    ],
    "en": [
      "router EA GRP followed by the autonomous system or a s number"
    ],
    "ru": [
      "маршрутизатор EA GRP, за которым следует автономная система или номер s"
    ]
  },
  {
    "time": [
      194.931683,
      197.478828
    ],
    "en": [
      "in this case we'll use 100"
    ],
    "ru": [
      "в этом случае мы будем использовать 100"
    ]
  },
  {
    "time": [
      197.478828,
      207.441099
    ],
    "en": [
      "well in OSPF the process ID used in the router OSPF command was only locally significant and could be different on each router in the network"
    ],
    "ru": [
      "в OSPF идентификатор процесса, используемый в команде OSPF маршрутизатора, имеет значение только локально и может отличаться на каждом маршрутизаторе в сети."
    ]
  },
  {
    "time": [
      207.441099,
      212.352058
    ],
    "en": [
      "the EIG our pas number has to be the same on each router in the network"
    ],
    "ru": [
      "номер EIG должен быть одинаковым на каждом маршрутизаторе в сети."
    ]
  },
  {
    "time": [
      212.352058,
      218.182953
    ],
    "en": [
      "if the a s number is different routers will not become e IG RP neighbors"
    ],
    "ru": [
      "если номер a s другой, маршрутизаторы не станут соседями e IG RP"
    ]
  },
  {
    "time": [
      218.182953,
      224.548766
    ],
    "en": [
      "keep that in mind and definitely look out for a s mismatches in any troubleshooting problems on the test"
    ],
    "ru": [
      "имейте это в виду и обязательно обратите внимание на несоответствия в любых проблемах по устранению неполадок в тесте."
    ]
  },
  {
    "time": [
      224.548766,
      230.173224
    ],
    "en": [
      "ok so from here we use the network command just like OSPF"
    ],
    "ru": [
      "хорошо, отсюда мы используем сетевую команду точно так же, как OSPF"
    ]
  },
  {
    "time": [
      230.173224,
      234.479078
    ],
    "en": [
      "however VI GRP doesn't have the concept of areas"
    ],
    "ru": [
      "однако VI GRP не имеет понятия площадей"
    ]
  },
  {
    "time": [
      234.479078,
      238.578015
    ],
    "en": [
      "so we just need the IP address and network mask"
    ],
    "ru": [
      "поэтому нам просто нужен IP-адрес и маска сети"
    ]
  },
  {
    "time": [
      238.578015,
      248.009203
    ],
    "en": [
      "now the eigrp network command works the same as the OSPF network command in that it doesn't actually specify the networks you are going to advertise"
    ],
    "ru": [
      "теперь команда сети eigrp работает так же, как команда сети OSPF, в том смысле, что она фактически не указывает сети, которые вы собираетесь рекламировать."
    ]
  },
  {
    "time": [
      248.009203,
      253.795599
    ],
    "en": [
      "it is used only to identify which interfaces to activate a eigrp on"
    ],
    "ru": [
      "он используется только для определения интерфейсов для активации eigrp на"
    ]
  },
  {
    "time": [
      253.795599,
      257.55862
    ],
    "en": [
      "and then those interfaces will advertise their configured networks"
    ],
    "ru": [
      "а затем эти интерфейсы будут рекламировать свои настроенные сети"
    ]
  },
  {
    "time": [
      257.55862,
      265.787202
    ],
    "en": [
      "another feature of the eigrp network command is that it defaults to classful network boundaries if you don't enter a mask"
    ],
    "ru": [
      "Еще одна особенность сетевой команды eigrp заключается в том, что по умолчанию используются классовые границы сети, если вы не вводите маску"
    ]
  },
  {
    "time": [
      265.787202,
      276.962223
    ],
    "en": [
      "so for example our ones G 0 0 and F 1 0 interfaces both fall within the class a 10.08 range"
    ],
    "ru": [
      "так, например, наши интерфейсы G 0 0 и F 1 0 попадают в диапазон класса 10,08"
    ]
  },
  {
    "time": [
      276.962223,
      281.670702
    ],
    "en": [
      "so I'll just type Network 1000"
    ],
    "ru": [
      "поэтому я просто наберу Network 1000"
    ]
  },
  {
    "time": [
      281.670702,
      286.009431
    ],
    "en": [
      "and now EIGRP will be activated on both interfaces"
    ],
    "ru": [
      "и теперь EIGRP будет активирован на обоих интерфейсах"
    ]
  },
  {
    "time": [
      286.009431,
      289.563244
    ],
    "en": [
      "next I'll just enable it on the loopback"
    ],
    "ru": [
      "далее я просто включу его в петле"
    ]
  },
  {
    "time": [
      289.563244,
      296.255765
    ],
    "en": [
      "network 1.1.11 and this time let's enter the exact wildcard mask"
    ],
    "ru": [
      "сеть 1.1.11 и на этот раз введем точную маску подстановки"
    ]
  },
  {
    "time": [
      296.255765,
      298.238577
    ],
    "en": [
      "oh-oh-oh-oh"
    ],
    "ru": [
      "ой ой ой ой"
    ]
  },
  {
    "time": [
      298.238577,
      307.563619
    ],
    "en": [
      "now let's make the loopback passive since we don't want to waste resources sending advertisements on an interface that isn't connected to any other router"
    ],
    "ru": [
      "теперь давайте сделаем петлю пассивной, так как мы не хотим тратить ресурсы на отправку рекламы на интерфейсе, который не подключен к какому-либо другому маршрутизатору"
    ]
  },
  {
    "time": [
      307.563619,
      310.88016
    ],
    "en": [
      "this is exactly the same as in OSPF"
    ],
    "ru": [
      "это точно так же, как в OSPF"
    ]
  },
  {
    "time": [
      310.88016,
      314.105681
    ],
    "en": [
      "passive interface l 0"
    ],
    "ru": [
      "пассивный интерфейс l 0"
    ]
  },
  {
    "time": [
      314.105681,
      318.077619
    ],
    "en": [
      "finally we should disable auto summary Auto summary"
    ],
    "ru": [
      "наконец, мы должны отключить автоматическое резюме Автоматическое резюме"
    ]
  },
  {
    "time": [
      318.077619,
      321.630327
    ],
    "en": [
      "can be on or off by default"
    ],
    "ru": [
      "может быть включен или выключен по умолчанию"
    ]
  },
  {
    "time": [
      321.630327,
      325.709306
    ],
    "en": [
      "I assume depending on either the OS version or router model"
    ],
    "ru": [
      "Я предполагаю, что в зависимости от версии ОС или модели маршрутизатора"
    ]
  },
  {
    "time": [
      325.709306,
      330.474701
    ],
    "en": [
      "in packet tracer and on these routers however it is enabled by default"
    ],
    "ru": [
      "в пакетном трассировщике и на этих маршрутизаторах, однако он включен по умолчанию"
    ]
  },
  {
    "time": [
      330.474701,
      337.161055
    ],
    "en": [
      "you should always turn it off any summarization should be done manually and only where intended"
    ],
    "ru": [
      "вы всегда должны выключать его, любое суммирование должно выполняться вручную и только там, где это необходимо"
    ]
  },
  {
    "time": [
      337.161055,
      340.14868
    ],
    "en": [
      "no Auto summary that's it"
    ],
    "ru": [
      "нет авто сводки вот и все"
    ]
  },
  {
    "time": [
      340.14868,
      343.4207
    ],
    "en": [
      "ok let's continue on to r2"
    ],
    "ru": [
      "хорошо, перейдем к r2"
    ]
  },
  {
    "time": [
      343.4207,
      346.104742
    ],
    "en": [
      "I'll go through these steps quickly for the other routers"
    ],
    "ru": [
      "Я быстро выполню эти шаги для других маршрутизаторов."
    ]
  },
  {
    "time": [
      346.104742,
      350.233221
    ],
    "en": [
      "router EAG RP 100"
    ],
    "ru": [
      "роутер EAG RP 100"
    ]
  },
  {
    "time": [
      350.233221,
      354.287638
    ],
    "en": [
      "again make sure that a s number is consistent throughout the network"
    ],
    "ru": [
      "еще раз убедитесь, что номер s согласован во всей сети"
    ]
  },
  {
    "time": [
      354.287638,
      367.294659
    ],
    "en": [
      "network 10000 network to 2 to 200 200 passive interface l 0 no Auto summary"
    ],
    "ru": [
      "сеть 10000 сеть к от 2 до 200 200 пассивных интерфейсов l 0 нет Автоматическая сводка"
    ]
  },
  {
    "time": [
      367.294659,
      369.814075
    ],
    "en": [
      "ok next let's go on R 3"
    ],
    "ru": [
      "хорошо, дальше поехали на R 3"
    ]
  },
  {
    "time": [
      369.814075,
      388.320325
    ],
    "en": [
      "router EAG RP 100 Network 10000 network 3 3 3 3 0 0 passive interface l 0 no auto summary"
    ],
    "ru": [
      "маршрутизатор EAG RP 100 Сеть 10000 сеть 3 3 3 3 0 0 пассивный интерфейс l 0 без автосводки"
    ]
  },
  {
    "time": [
      388.320325,
      408.36045
    ],
    "en": [
      "next r4 router EAG RP 100 Network 10000 network 4.4.4 dot 400 dead Oh passive interface L 0 no Auto summary"
    ],
    "ru": [
      "следующий маршрутизатор r4 EAG RP 100 Сеть 10000 сеть 4.4.4 точка 400 мертв Ой пассивный интерфейс L 0 нет Авто сводка"
    ]
  },
  {
    "time": [
      408.36045,
      413.27418
    ],
    "en": [
      "okay finally let's go to our 5"
    ],
    "ru": [
      "ладно наконец перейдем к нашему 5"
    ]
  },
  {
    "time": [
      413.27418,
      415.933409
    ],
    "en": [
      "router EAG RP 100"
    ],
    "ru": [
      "роутер EAG RP 100"
    ]
  },
  {
    "time": [
      415.933409,
      430.195638
    ],
    "en": [
      "Network 10000 network v dot v dot v dot v oh oh oh oh passive interface l 0 no auto summary"
    ],
    "ru": [
      "Сеть 10000 сеть v точка v точка v точка v ой ой ой пассивный интерфейс l 0 без автоматического вывода"
    ]
  },
  {
    "time": [
      430.195638,
      431.972784
    ],
    "en": [
      "okay that's all"
    ],
    "ru": [
      "хорошо это все"
    ]
  },
  {
    "time": [
      431.972784,
      436.273159
    ],
    "en": [
      "let's go on our one and see what routes it is learned"
    ],
    "ru": [
      "пойдем на наш и посмотрим, какие маршруты он изучил"
    ]
  },
  {
    "time": [
      436.273159,
      442.18195
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
      442.18195,
      448.239388
    ],
    "en": [
      "the d beside these routes indicates that they were learned via a EIGRP"
    ],
    "ru": [
      "d рядом с этими маршрутами означает, что они были изучены через EIGRP."
    ]
  },
  {
    "time": [
      448.239388,
      454.683846
    ],
    "en": [
      "notice the administrative distance of 90 as opposed to OSPF s 110"
    ],
    "ru": [
      "обратите внимание на административное расстояние 90 в отличие от 110 OSPF"
    ]
  },
  {
    "time": [
      454.683846,
      464.323221
    ],
    "en": [
      "this means if two routes are learned to a destination 1 via EIGRP and one via OSPF the eigrp route will be preferred"
    ],
    "ru": [
      "это означает, что если два маршрута изучены до пункта назначения 1 через EIGRP и один через OSPF, предпочтительным будет маршрут eigrp."
    ]
  },
  {
    "time": [
      464.323221,
      468.007554
    ],
    "en": [
      "also notice these huge metric numbers"
    ],
    "ru": [
      "также обратите внимание на эти огромные метрические числа"
    ]
  },
  {
    "time": [
      468.007554,
      473.417367
    ],
    "en": [
      "OSPF metric numbers were quite small and simple to understand"
    ],
    "ru": [
      "Показатели OSPF были довольно маленькими и простыми для понимания."
    ]
  },
  {
    "time": [
      473.417367,
      476.903429
    ],
    "en": [
      "however aig our P's metric numbers can get quite large"
    ],
    "ru": [
      "однако метрические числа нашего P могут стать довольно большими."
    ]
  },
  {
    "time": [
      476.903429,
      485.562242
    ],
    "en": [
      "this is a small network in our ones path to R 5 has a metric of 150 6672"
    ],
    "ru": [
      "это небольшая сеть на нашем пути к R 5 с метрикой 150 6672"
    ]
  },
  {
    "time": [
      485.562242,
      490.348221
    ],
    "en": [
      "this is the path via our 4 because it has one gigabit ethernet link"
    ],
    "ru": [
      "это путь через наш 4, потому что он имеет одно гигабитное соединение Ethernet"
    ]
  },
  {
    "time": [
      490.348221,
      493.311034
    ],
    "en": [
      "well the Rev via r2 is all Fast Ethernet"
    ],
    "ru": [
      "ну Rev via r2 - это все Fast Ethernet"
    ]
  },
  {
    "time": [
      493.311034,
      503.973804
    ],
    "en": [
      "however our next task is to configure our one to perform unequal cost load balancing when sending traffic to our five"
    ],
    "ru": [
      "однако наша следующая задача - настроить наш один так, чтобы он выполнял неравномерную балансировку нагрузки при отправке трафика на наши пять"
    ]
  },
  {
    "time": [
      503.973804,
      507.854534
    ],
    "en": [
      "Oh SPF can only do equal cost load balancing"
    ],
    "ru": [
      "О, SPF может только балансировать нагрузку с равной стоимостью"
    ]
  },
  {
    "time": [
      507.854534,
      511.203638
    ],
    "en": [
      "but II IG RP can do unequal cost load balancing"
    ],
    "ru": [
      "но II IG RP может выполнять балансировку нагрузки с неравной стоимостью"
    ]
  },
  {
    "time": [
      511.203638,
      518.009242
    ],
    "en": [
      "however it can't be configured to do unequal cost load balancing over just any path"
    ],
    "ru": [
      "однако его нельзя настроить для балансировки нагрузки с неравной стоимостью по любому пути."
    ]
  },
  {
    "time": [
      518.009242,
      519.993117
    ],
    "en": [
      "it has to meet a certain requirement"
    ],
    "ru": [
      "он должен соответствовать определенному требованию"
    ]
  },
  {
    "time": [
      519.993117,
      521.814471
    ],
    "en": [
      "let's look further"
    ],
    "ru": [
      "давай посмотрим дальше"
    ]
  },
  {
    "time": [
      521.814471,
      526.815617
    ],
    "en": [
      "do show IP e IG RP topology"
    ],
    "ru": [
      "показывать топологию IP и IG RP"
    ]
  },
  {
    "time": [
      526.815617,
      533.254179
    ],
    "en": [
      "this command shows the successor routes meaning the best routes to each destination"
    ],
    "ru": [
      "эта команда показывает последующие маршруты, означающие лучшие маршруты к каждому пункту назначения."
    ]
  },
  {
    "time": [
      533.254179,
      536.755575
    ],
    "en": [
      "as well as the feasible successor routes"
    ],
    "ru": [
      "а также возможные последующие маршруты"
    ]
  },
  {
    "time": [
      536.755575,
      539.614471
    ],
    "en": [
      "meaning routes that weren't picked as the successor"
    ],
    "ru": [
      "то есть маршруты, которые не были выбраны в качестве преемника"
    ]
  },
  {
    "time": [
      539.614471,
      541.508846
    ],
    "en": [
      "but meet that certain requirement"
    ],
    "ru": [
      "но соответствовать этому определенному требованию"
    ]
  },
  {
    "time": [
      541.508846,
      545.768575
    ],
    "en": [
      "and will also serve as backups in the case the successor route goes down"
    ],
    "ru": [
      "а также будет служить в качестве резервных копий на случай, если следующий маршрут прервется."
    ]
  },
  {
    "time": [
      545.768575,
      552.673929
    ],
    "en": [
      "if you don't understand the EIG RP concepts of successor and feasible successor"
    ],
    "ru": [
      "если вы не понимаете концепции преемника и возможного преемника EIG RP"
    ]
  },
  {
    "time": [
      552.673929,
      557.266658
    ],
    "en": [
      "as well as feasible distance and reported or advertised distance"
    ],
    "ru": [
      "а также возможное расстояние и заявленное или объявленное расстояние"
    ]
  },
  {
    "time": [
      557.266658,
      561.520971
    ],
    "en": [
      "make sure you learn them in whatever video course or book you are using"
    ],
    "ru": [
      "убедитесь, что вы изучаете их в любом видеокурсе или книге, которую используете"
    ]
  },
  {
    "time": [
      561.520971,
      566.016846
    ],
    "en": [
      "they can be a little difficult to understand at first and I'm not going to explain them here"
    ],
    "ru": [
      "сначала их может быть немного сложно понять, и я не собираюсь их здесь объяснять"
    ]
  },
  {
    "time": [
      566.016846,
      569.644532
    ],
    "en": [
      "so in this a I gr p topology table"
    ],
    "ru": [
      "Итак, в этой таблице топологии I gr p"
    ]
  },
  {
    "time": [
      569.644532,
      574.287719
    ],
    "en": [
      "these numbers on the Left indicate the feasible distance to a destination"
    ],
    "ru": [
      "эти числа слева указывают возможное расстояние до пункта назначения."
    ]
  },
  {
    "time": [
      574.287719,
      578.956219
    ],
    "en": [
      "and the numbers on the right indicate the reported distance"
    ],
    "ru": [
      "а числа справа обозначают заявленное расстояние"
    ]
  },
  {
    "time": [
      578.956219,
      583.245323
    ],
    "en": [
      "remember in order for a route to be a feasible successor"
    ],
    "ru": [
      "помните, чтобы маршрут мог стать возможным преемником"
    ]
  },
  {
    "time": [
      583.245323,
      588.247927
    ],
    "en": [
      "it's reported distance must be lower than the successors feasible distance"
    ],
    "ru": [
      "это сообщаемое расстояние должно быть меньше, чем возможное расстояние последующих"
    ]
  },
  {
    "time": [
      588.247927,
      593.589219
    ],
    "en": [
      "routes which don't meet this criteria will not show up in this table"
    ],
    "ru": [
      "маршруты, которые не соответствуют этим критериям, не будут отображаться в этой таблице."
    ]
  },
  {
    "time": [
      593.589219,
      602.55399
    ],
    "en": [
      "however do show IP eigrp topology all links will display them"
    ],
    "ru": [
      "однако показывать топологию IP eigrp все ссылки будут отображать их"
    ]
  },
  {
    "time": [
      602.55399,
      606.070323
    ],
    "en": [
      "in this network however there aren't any such routes"
    ],
    "ru": [
      "в этой сети нет таких маршрутов"
    ]
  },
  {
    "time": [
      606.070323,
      615.525073
    ],
    "en": [
      "okay so our one has a successor route to our five via 10.14 o4 which is our four"
    ],
    "ru": [
      "хорошо, так что у нашего есть маршрут-преемник нашей пятерки через 10.14 o4, которая является нашей четверкой"
    ]
  },
  {
    "time": [
      615.525073,
      620.320802
    ],
    "en": [
      "with a metric of 150 6672"
    ],
    "ru": [
      "с метрикой 150 6672"
    ]
  },
  {
    "time": [
      620.320802,
      631.62626
    ],
    "en": [
      "it also has a feasible successor route via 10.12 o2 which is r2 with a metric of one hundred fifty eight thousand nine hundred seventy six"
    ],
    "ru": [
      "у него также есть возможный маршрут-преемник через 10.12 o2, который равен r2 с метрикой сто пятьдесят восемь тысяч девятьсот семьдесят шесть"
    ]
  },
  {
    "time": [
      631.62626,
      638.002323
    ],
    "en": [
      "to enable r1 to load balance over these use the variance command"
    ],
    "ru": [
      "чтобы позволить r1 балансировать нагрузку поверх них, используйте команду variance"
    ]
  },
  {
    "time": [
      638.002323,
      652.054718
    ],
    "en": [
      "then we enter a multiplier for example variance to will allow r1 to load balance over feasible successor routes that have up to double the feasible distance of the successor rep"
    ],
    "ru": [
      "затем мы вводим множитель, например, дисперсия, чтобы позволить r1 балансировать нагрузку по возможным маршрутам-преемникам, которые имеют вдвое большее возможное расстояние, чем репутация-преемник."
    ]
  },
  {
    "time": [
      652.054718,
      656.099052
    ],
    "en": [
      "or triple the distance if we used variance three"
    ],
    "ru": [
      "или утроить расстояние, если мы использовали дисперсию три"
    ]
  },
  {
    "time": [
      656.099052,
      663.124343
    ],
    "en": [
      "the difference between these two metrics is fairly small so in this case we can just use variance to"
    ],
    "ru": [
      "разница между этими двумя показателями довольно мала, поэтому в этом случае мы можем просто использовать дисперсию для"
    ]
  },
  {
    "time": [
      663.124343,
      668.129885
    ],
    "en": [
      "that's it do show IP route"
    ],
    "ru": [
      "вот он показывает IP-маршрут"
    ]
  },
  {
    "time": [
      668.129885,
      672.741531
    ],
    "en": [
      "now you can see both paths are in the routing table"
    ],
    "ru": [
      "теперь вы можете видеть, что оба пути находятся в таблице маршрутизации"
    ]
  },
  {
    "time": [
      672.741531,
      679.584614
    ],
    "en": [
      "both for the v dot v dot v dot v loopback address and the 10.35 0 network"
    ],
    "ru": [
      "как для адреса обратной связи v dot v dot v dot v, так и для сети 10.35 0"
    ]
  },
  {
    "time": [
      679.584614,
      682.478552
    ],
    "en": [
      "let me just emphasize one point"
    ],
    "ru": [
      "позвольте мне подчеркнуть один момент"
    ]
  },
  {
    "time": [
      682.478552,
      688.080531
    ],
    "en": [
      "e IG RP will never load balance over paths which aren't feasible successors"
    ],
    "ru": [
      "IG RP никогда не будет балансировать нагрузку по путям, которые не являются возможными преемниками."
    ]
  },
  {
    "time": [
      688.080531,
      692.470926
    ],
    "en": [
      "you can set the maximum variance 128"
    ],
    "ru": [
      "вы можете установить максимальную дисперсию 128"
    ]
  },
  {
    "time": [
      692.470926,
      698.021447
    ],
    "en": [
      "but if the other pads aren't feasible successors ew g RP won't load balance over them"
    ],
    "ru": [
      "но если другие площадки не являются возможными преемниками, ew g RP не будет загружать балансировку по ним"
    ]
  },
  {
    "time": [
      698.021447,
      701.417593
    ],
    "en": [
      "this is an important feature to prevent routing loops"
    ],
    "ru": [
      "это важная функция для предотвращения петель маршрутизации"
    ]
  },
  {
    "time": [
      701.417593,
      711.604343
    ],
    "en": [
      "okay our last task is to configure r3 to advertise a 1000 / 8 summary network to r5"
    ],
    "ru": [
      "Хорошо, наша последняя задача - настроить r3 для объявления суммарной сети 1000/8 на r5"
    ]
  },
  {
    "time": [
      711.604343,
      717.855383
    ],
    "en": [
      "manual summarization is actually not in the exam topics for icnd2"
    ],
    "ru": [
      "ручное суммирование фактически не входит в темы экзамена для icnd2"
    ]
  },
  {
    "time": [
      717.855383,
      724.132321
    ],
    "en": [
      "however i included it in my oh s PF labs and will hear in my ear g RP labs"
    ],
    "ru": [
      "Тем не менее, я включил его в свои лаборатории PF и услышу на ухо в лабораториях RP"
    ]
  },
  {
    "time": [
      724.132321,
      729.338988
    ],
    "en": [
      "simply for the reason that it is often included in other CCNA learning materials"
    ],
    "ru": [
      "просто по той причине, что его часто включают в другие учебные материалы CCNA."
    ]
  },
  {
    "time": [
      729.338988,
      734.919279
    ],
    "en": [
      "Cisco's exam topics don't necessarily list everything that is on the exam"
    ],
    "ru": [
      "Темы экзаменов Cisco не обязательно включают в себя все, что входит в экзамен."
    ]
  },
  {
    "time": [
      734.919279,
      738.551633
    ],
    "en": [
      "so summarization may actually be something you should know for the exam"
    ],
    "ru": [
      "поэтому резюме может быть тем, что вам следует знать перед экзаменом"
    ]
  },
  {
    "time": [
      738.551633,
      744.248904
    ],
    "en": [
      "and in either case it's just a single command so let's try it out on r3"
    ],
    "ru": [
      "и в любом случае это всего лишь одна команда, так что давайте попробуем ее на r3"
    ]
  },
  {
    "time": [
      744.248904,
      751.735383
    ],
    "en": [
      "to configure a summary route in AI GRP we configure it at the interface level"
    ],
    "ru": [
      "для настройки сводного маршрута в AI GRP настраиваем его на уровне интерфейса"
    ]
  },
  {
    "time": [
      751.735383,
      756.577758
    ],
    "en": [
      "unlike in OSPF where we configure that oh s PF configuration mode"
    ],
    "ru": [
      "в отличие от OSPF, где мы настраиваем этот режим конфигурации PF"
    ]
  },
  {
    "time": [
      756.577758,
      761.589842
    ],
    "en": [
      "in this case we'll configure it on the g00 interface"
    ],
    "ru": [
      "в этом случае мы настроим его на интерфейсе g00"
    ]
  },
  {
    "time": [
      761.589842,
      763.185592
    ],
    "en": [
      "the one facing our v"
    ],
    "ru": [
      "тот, стоящий перед нашим v"
    ]
  },
  {
    "time": [
      763.185592,
      766.061717
    ],
    "en": [
      "interface g 0 0"
    ],
    "ru": [
      "интерфейс g 0 0"
    ]
  },
  {
    "time": [
      766.061717,
      781.923071
    ],
    "en": [
      "this is the command IP summary address eh ERP followed by the a s number 100 then the network address 10000 followed by the mask"
    ],
    "ru": [
      "это сводный IP-адрес команды eh ERP, за которым следует номер a s 100, затем сетевой адрес 10000, за которым следует маска"
    ]
  },
  {
    "time": [
      781.923071,
      791.185508
    ],
    "en": [
      "much like with OSPF summarization ew GRP summarization uses a normal network mask not a wildcard mask"
    ],
    "ru": [
      "так же, как с суммированием OSPF, при суммировании ew GRP используется обычная сетевая маска, а не подстановочная маска"
    ]
  },
  {
    "time": [
      791.185508,
      794.970821
    ],
    "en": [
      "unlike the network command which does use a wildcard mask"
    ],
    "ru": [
      "в отличие от сетевой команды, которая использует подстановочную маску"
    ]
  },
  {
    "time": [
      794.970821,
      799.335196
    ],
    "en": [
      "so in this case 255 0 0 0"
    ],
    "ru": [
      "так что в данном случае 255 0 0 0"
    ]
  },
  {
    "time": [
      799.335196,
      802.511883
    ],
    "en": [
      "ok that's all there is to it"
    ],
    "ru": [
      "хорошо, вот и все, что нужно об этом"
    ]
  },
  {
    "time": [
      802.511883,
      804.677299
    ],
    "en": [
      "let's check it out on our 5"
    ],
    "ru": [
      "давай проверим это на наших 5"
    ]
  },
  {
    "time": [
      804.677299,
      811.643195
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
      811.643195,
      819.833195
    ],
    "en": [
      "there it is our 5 has now learned at 1000 / 8 summary address instead of all of those separate networks"
    ],
    "ru": [
      "Вот и наш 5 теперь узнал по суммарному адресу 1000/8 вместо всех этих отдельных сетей"
    ]
  },
  {
    "time": [
      819.833195,
      828.776987
    ],
    "en": [
      "in this slob we did a basic AIG RP configuration with unequal cost load balancing and some manual summarization"
    ],
    "ru": [
      "в этом слое мы сделали базовую конфигурацию AIG RP с неравномерной балансировкой нагрузки и некоторым ручным резюмированием."
    ]
  },
  {
    "time": [
      828.776987,
      830.728237
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
      830.728237,
      837.594695
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
      837.594695,
      842.845195
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
      842.845195,
      847.427195
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
      847.427195,
      854.028008
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
      854.028008,
      862.626653
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
      862.626653,
      862.626653
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
      862.626653,
      862.626653
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
      862.626653,
      862.626653
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]