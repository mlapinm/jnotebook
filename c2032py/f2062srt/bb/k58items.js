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
      "lab we will configure the enhanced"
    ],
    "ru": [
      "lab настроим расширенный"
    ]
  },
  {
    "time": [
      23.0,
      26.0
    ],
    "en": [
      "interior gateway routing protocol e IG"
    ],
    "ru": [
      "протокол маршрутизации внутреннего шлюза e IG"
    ]
  },
  {
    "time": [
      26.0,
      30.0
    ],
    "en": [
      "RP e IG RP is as the name suggests an"
    ],
    "ru": [
      "RP e IG RP - это, как следует из названия,"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "enhanced version of Cisco's interior"
    ],
    "ru": [
      "улучшенная версия интерьера Cisco"
    ]
  },
  {
    "time": [
      33.0,
      38.0
    ],
    "en": [
      "gateway routing protocol IG RP although"
    ],
    "ru": [
      "протокол маршрутизации шлюза IG RP, хотя"
    ]
  },
  {
    "time": [
      38.0,
      40.0
    ],
    "en": [
      "EIGRP used to be a cisco proprietary"
    ],
    "ru": [
      "EIGRP раньше был проприетарным протоколом cisco."
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "routing protocol meaning was available"
    ],
    "ru": [
      "значение протокола маршрутизации было доступно"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "only on cisco routers it has been moved"
    ],
    "ru": [
      "только на роутерах cisco перенесено"
    ]
  },
  {
    "time": [
      45.0,
      48.0
    ],
    "en": [
      "to an open standard however in a"
    ],
    "ru": [
      "к открытому стандарту, однако в"
    ]
  },
  {
    "time": [
      48.0,
      49.0
    ],
    "en": [
      "multi-vendor environment you're almost"
    ],
    "ru": [
      "мультивендорная среда вы почти"
    ]
  },
  {
    "time": [
      49.0,
      52.0
    ],
    "en": [
      "certainly going to see OSPF used over a"
    ],
    "ru": [
      "наверняка увидим, что OSPF будет использоваться в"
    ]
  },
  {
    "time": [
      52.0,
      57.0
    ],
    "en": [
      "EIGRP let's get started the first step"
    ],
    "ru": [
      "EIGRP давайте начнем первый шаг"
    ]
  },
  {
    "time": [
      57.0,
      58.0
    ],
    "en": [
      "is to configure loopback address on each"
    ],
    "ru": [
      "настроить адрес обратной связи на каждом"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "router these addresses will later become"
    ],
    "ru": [
      "маршрутизатор эти адреса позже станут"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "the EIG RP router IDs used for each"
    ],
    "ru": [
      "идентификаторы маршрутизатора EIG RP, используемые для каждого"
    ]
  },
  {
    "time": [
      64.0,
      68.0
    ],
    "en": [
      "router the eigrp router ID functions the"
    ],
    "ru": [
      "маршрутизатор идентификатор маршрутизатора eigrp функционирует"
    ]
  },
  {
    "time": [
      68.0,
      72.0
    ],
    "en": [
      "same way as the OSPF router ID manual"
    ],
    "ru": [
      "так же, как в руководстве по идентификатору маршрутизатора OSPF"
    ]
  },
  {
    "time": [
      72.0,
      74.0
    ],
    "en": [
      "configuration takes priority if the"
    ],
    "ru": [
      "конфигурация имеет приоритет, если"
    ]
  },
  {
    "time": [
      74.0,
      77.0
    ],
    "en": [
      "router ID is not manually configured the"
    ],
    "ru": [
      "идентификатор маршрутизатора не настроен вручную"
    ]
  },
  {
    "time": [
      77.0,
      79.0
    ],
    "en": [
      "highest IP address on a loopback"
    ],
    "ru": [
      "наивысший IP-адрес в петле"
    ]
  },
  {
    "time": [
      79.0,
      82.0
    ],
    "en": [
      "interface is used if there is no"
    ],
    "ru": [
      "интерфейс используется, если нет"
    ]
  },
  {
    "time": [
      82.0,
      84.0
    ],
    "en": [
      "loopback interface the highest IP"
    ],
    "ru": [
      "шлейфовый интерфейс наивысшего IP"
    ]
  },
  {
    "time": [
      84.0,
      86.0
    ],
    "en": [
      "address on a regular interface is used"
    ],
    "ru": [
      "адрес на обычном интерфейсе используется"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "we've configured loopback to plenty of"
    ],
    "ru": [
      "мы настроили шлейф для множества"
    ]
  },
  {
    "time": [
      89.0,
      90.0
    ],
    "en": [
      "times so let's go through this quickly"
    ],
    "ru": [
      "раз, так что давайте пройдемся через это быстро"
    ]
  },
  {
    "time": [
      90.0,
      97.0
    ],
    "en": [
      "I'll start on r1 enable coffee/tea"
    ],
    "ru": [
      "Начну на r1 включить кофе / чай"
    ]
  },
  {
    "time": [
      97.0,
      104.0
    ],
    "en": [
      "interface l0 IP address 1.1.11"
    ],
    "ru": [
      "интерфейс l0 IP-адрес 1.1.11"
    ]
  },
  {
    "time": [
      104.0,
      111.0
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
      111.0
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
      111.0,
      119.0
    ],
    "en": [
      "call T interface l0 IP address - 2 - 2"
    ],
    "ru": [
      "вызов интерфейса T l0 IP-адрес - 2 - 2"
    ]
  },
  {
    "time": [
      119.0,
      128.0
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
      119.0,
      128.0
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
      128.0,
      131.0
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
      131.0,
      139.0
    ],
    "en": [
      "IP address 3.33 255.255.255.0 5 next is"
    ],
    "ru": [
      "IP-адрес 3.33 255.255.255.0 5 следующий"
    ]
  },
  {
    "time": [
      139.0,
      147.0
    ],
    "en": [
      "r4 enable coffee tea interface l0 IP"
    ],
    "ru": [
      "r4 включить интерфейс кофе-чая l0 IP"
    ]
  },
  {
    "time": [
      147.0,
      155.0
    ],
    "en": [
      "address 4.4.4 255.255.255.0 5 ok finally"
    ],
    "ru": [
      "адрес 4.4.4 255.255.255.0 5 ок наконец"
    ]
  },
  {
    "time": [
      155.0,
      162.0
    ],
    "en": [
      "let's go on our five enable coffee tea"
    ],
    "ru": [
      "Давайте продолжим наши пять включений кофе-чая"
    ]
  },
  {
    "time": [
      162.0,
      166.0
    ],
    "en": [
      "interface l0 IP address v dot v dot v"
    ],
    "ru": [
      "интерфейс l0 IP-адрес v точка v точка v"
    ]
  },
  {
    "time": [
      166.0,
      172.0
    ],
    "en": [
      "dot v 255.255.255.0 v okay that's all"
    ],
    "ru": [
      "точка v 255.255.255.0 v ладно, это все"
    ]
  },
  {
    "time": [
      172.0,
      174.0
    ],
    "en": [
      "for step one now let's actually"
    ],
    "ru": [
      "для первого шага теперь давайте на самом деле"
    ]
  },
  {
    "time": [
      174.0,
      178.0
    ],
    "en": [
      "configure a EIGRP on each router the"
    ],
    "ru": [
      "настроить EIGRP на каждом маршрутизаторе,"
    ]
  },
  {
    "time": [
      178.0,
      180.0
    ],
    "en": [
      "configuration is similar to OSPF"
    ],
    "ru": [
      "конфигурация аналогична OSPF"
    ]
  },
  {
    "time": [
      180.0,
      184.0
    ],
    "en": [
      "configuration let's go back to our one"
    ],
    "ru": [
      "конфигурация вернемся к нашей"
    ]
  },
  {
    "time": [
      184.0,
      188.0
    ],
    "en": [
      "to enter a EIGRP configuration mode use"
    ],
    "ru": [
      "для входа в режим конфигурации EIGRP используйте"
    ]
  },
  {
    "time": [
      188.0,
      192.0
    ],
    "en": [
      "this command router EA GRP followed by"
    ],
    "ru": [
      "эта команда маршрутизатора EA GRP, за которой следует"
    ]
  },
  {
    "time": [
      192.0,
      194.0
    ],
    "en": [
      "the autonomous system or a s number in"
    ],
    "ru": [
      "автономная система или номер s в"
    ]
  },
  {
    "time": [
      194.0,
      199.0
    ],
    "en": [
      "this case we'll use 100 well in OSPF the"
    ],
    "ru": [
      "в этом случае мы будем использовать 100 хорошо в OSPF"
    ]
  },
  {
    "time": [
      199.0,
      202.0
    ],
    "en": [
      "process ID used in the router OSPF"
    ],
    "ru": [
      "идентификатор процесса, используемый в маршрутизаторе OSPF"
    ]
  },
  {
    "time": [
      202.0,
      204.0
    ],
    "en": [
      "command was only locally significant and"
    ],
    "ru": [
      "команда была только локально значимой и"
    ]
  },
  {
    "time": [
      204.0,
      206.0
    ],
    "en": [
      "could be different on each router in the"
    ],
    "ru": [
      "может отличаться на каждом маршрутизаторе в"
    ]
  },
  {
    "time": [
      206.0,
      210.0
    ],
    "en": [
      "network the EIG our pas number has to be"
    ],
    "ru": [
      "сеть EIG наш номер pas должен быть"
    ]
  },
  {
    "time": [
      210.0,
      212.0
    ],
    "en": [
      "the same on each router in the network"
    ],
    "ru": [
      "то же самое на каждом роутере в сети"
    ]
  },
  {
    "time": [
      212.0,
      215.0
    ],
    "en": [
      "if the a s number is different routers"
    ],
    "ru": [
      "если номер a s другой роутеры"
    ]
  },
  {
    "time": [
      215.0,
      219.0
    ],
    "en": [
      "will not become e IG RP neighbors keep"
    ],
    "ru": [
      "не станут соседями IG RP"
    ]
  },
  {
    "time": [
      219.0,
      221.0
    ],
    "en": [
      "that in mind and definitely look out for"
    ],
    "ru": [
      "это в виду и обязательно обратите внимание на"
    ]
  },
  {
    "time": [
      221.0,
      222.0
    ],
    "en": [
      "a s mismatches in any troubleshooting"
    ],
    "ru": [
      "a s несоответствия при поиске и устранении неисправностей"
    ]
  },
  {
    "time": [
      222.0,
      227.0
    ],
    "en": [
      "problems on the test ok so from here we"
    ],
    "ru": [
      "проблемы на тесте хорошо, так что отсюда мы"
    ]
  },
  {
    "time": [
      227.0,
      230.0
    ],
    "en": [
      "use the network command just like OSPF"
    ],
    "ru": [
      "используйте сетевую команду точно так же, как OSPF"
    ]
  },
  {
    "time": [
      230.0,
      233.0
    ],
    "en": [
      "however VI GRP doesn't have the concept"
    ],
    "ru": [
      "однако VI GRP не имеет концепции"
    ]
  },
  {
    "time": [
      233.0,
      236.0
    ],
    "en": [
      "of areas so we just need the IP address"
    ],
    "ru": [
      "областей, поэтому нам просто нужен IP-адрес"
    ]
  },
  {
    "time": [
      236.0,
      238.0
    ],
    "en": [
      "and network mask"
    ],
    "ru": [
      "и маска сети"
    ]
  },
  {
    "time": [
      238.0,
      242.0
    ],
    "en": [
      "now the eigrp network command works the"
    ],
    "ru": [
      "теперь сетевая команда eigrp работает"
    ]
  },
  {
    "time": [
      242.0,
      244.0
    ],
    "en": [
      "same as the OSPF network command in that"
    ],
    "ru": [
      "то же, что и сетевая команда OSPF в этом"
    ]
  },
  {
    "time": [
      244.0,
      246.0
    ],
    "en": [
      "it doesn't actually specify the networks"
    ],
    "ru": [
      "на самом деле он не указывает сети"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "you are going to advertise it is used"
    ],
    "ru": [
      "вы собираетесь рекламировать это используется"
    ]
  },
  {
    "time": [
      249.0,
      251.0
    ],
    "en": [
      "only to identify which interfaces to"
    ],
    "ru": [
      "только для определения, какие интерфейсы к"
    ]
  },
  {
    "time": [
      251.0,
      254.0
    ],
    "en": [
      "activate a eigrp on and then those"
    ],
    "ru": [
      "активируйте eigrp, а затем те"
    ]
  },
  {
    "time": [
      254.0,
      256.0
    ],
    "en": [
      "interfaces will advertise their"
    ],
    "ru": [
      "интерфейсы будут рекламировать свои"
    ]
  },
  {
    "time": [
      256.0,
      259.0
    ],
    "en": [
      "configured networks another feature of"
    ],
    "ru": [
      "настроенные сети еще одна особенность"
    ]
  },
  {
    "time": [
      259.0,
      262.0
    ],
    "en": [
      "the eigrp network command is that it"
    ],
    "ru": [
      "сетевая команда eigrp заключается в том, что она"
    ]
  },
  {
    "time": [
      262.0,
      264.0
    ],
    "en": [
      "defaults to classful network boundaries"
    ],
    "ru": [
      "по умолчанию - классовые границы сети"
    ]
  },
  {
    "time": [
      264.0,
      267.0
    ],
    "en": [
      "if you don't enter a mask so for example"
    ],
    "ru": [
      "если вы не вводите маску, например,"
    ]
  },
  {
    "time": [
      267.0,
      271.0
    ],
    "en": [
      "our ones G 0 0 and F 1 0 interfaces both"
    ],
    "ru": [
      "наши G 0 0 и F 1 0 взаимодействуют с обоими"
    ]
  },
  {
    "time": [
      271.0,
      277.0
    ],
    "en": [
      "fall within the class a 10.08 range so"
    ],
    "ru": [
      "попадают в класс диапазона 10,08, поэтому"
    ]
  },
  {
    "time": [
      277.0,
      282.0
    ],
    "en": [
      "I'll just type Network 1000 and now"
    ],
    "ru": [
      "Я просто наберу Network 1000 и сейчас"
    ]
  },
  {
    "time": [
      282.0,
      284.0
    ],
    "en": [
      "EIGRP will be activated on both"
    ],
    "ru": [
      "EIGRP будет активирован на обоих"
    ]
  },
  {
    "time": [
      284.0,
      288.0
    ],
    "en": [
      "interfaces next I'll just enable it on"
    ],
    "ru": [
      "интерфейсы дальше я просто включу его"
    ]
  },
  {
    "time": [
      288.0,
      292.0
    ],
    "en": [
      "the loopback network 1.1.11"
    ],
    "ru": [
      "кольцевая сеть 1.1.11"
    ]
  },
  {
    "time": [
      292.0,
      294.0
    ],
    "en": [
      "and this time let's enter the exact"
    ],
    "ru": [
      "и на этот раз введем точное"
    ]
  },
  {
    "time": [
      294.0,
      296.0
    ],
    "en": [
      "wildcard mask"
    ],
    "ru": [
      "маска подстановки"
    ]
  },
  {
    "time": [
      296.0,
      300.0
    ],
    "en": [
      "oh-oh-oh-oh now let's make the loopback"
    ],
    "ru": [
      "о-о-о-о, теперь давайте сделаем петлю"
    ]
  },
  {
    "time": [
      300.0,
      302.0
    ],
    "en": [
      "passive since we don't want to waste"
    ],
    "ru": [
      "пассивный, так как мы не хотим тратить впустую"
    ]
  },
  {
    "time": [
      302.0,
      304.0
    ],
    "en": [
      "resources sending advertisements on an"
    ],
    "ru": [
      "ресурсы, отправляющие рекламу на"
    ]
  },
  {
    "time": [
      304.0,
      306.0
    ],
    "en": [
      "interface that isn't connected to any"
    ],
    "ru": [
      "интерфейс, который не подключен к какому-либо"
    ]
  },
  {
    "time": [
      306.0,
      309.0
    ],
    "en": [
      "other router this is exactly the same as"
    ],
    "ru": [
      "другой роутер это точно так же, как"
    ]
  },
  {
    "time": [
      309.0,
      316.0
    ],
    "en": [
      "in OSPF passive interface l 0 finally we"
    ],
    "ru": [
      "в пассивном интерфейсе OSPF l 0, наконец, мы"
    ]
  },
  {
    "time": [
      316.0,
      319.0
    ],
    "en": [
      "should disable auto summary Auto summary"
    ],
    "ru": [
      "следует отключить автоматическое резюме Автоматическое резюме"
    ]
  },
  {
    "time": [
      319.0,
      321.0
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
      321.0,
      323.0
    ],
    "en": [
      "I assume depending on either the OS"
    ],
    "ru": [
      "Я предполагаю, что в зависимости от ОС"
    ]
  },
  {
    "time": [
      323.0,
      327.0
    ],
    "en": [
      "version or router model in packet tracer"
    ],
    "ru": [
      "версия или модель маршрутизатора в пакетном трассировщике"
    ]
  },
  {
    "time": [
      327.0,
      328.0
    ],
    "en": [
      "and on these routers however it is"
    ],
    "ru": [
      "и на этих маршрутизаторах, однако,"
    ]
  },
  {
    "time": [
      328.0,
      330.0
    ],
    "en": [
      "enabled by default"
    ],
    "ru": [
      "включен по умолчанию"
    ]
  },
  {
    "time": [
      330.0,
      332.0
    ],
    "en": [
      "you should always turn it off any"
    ],
    "ru": [
      "вы всегда должны выключать его"
    ]
  },
  {
    "time": [
      332.0,
      334.0
    ],
    "en": [
      "summarization should be done manually"
    ],
    "ru": [
      "резюмирование следует производить вручную"
    ]
  },
  {
    "time": [
      334.0,
      338.0
    ],
    "en": [
      "and only where intended no Auto summary"
    ],
    "ru": [
      "и только там, где это предполагалось, без автоматического резюме"
    ]
  },
  {
    "time": [
      338.0,
      343.0
    ],
    "en": [
      "that's it ok let's continue on to r2"
    ],
    "ru": [
      "все в порядке, давайте продолжим к r2"
    ]
  },
  {
    "time": [
      343.0,
      344.0
    ],
    "en": [
      "I'll go through these steps quickly for"
    ],
    "ru": [
      "Я быстро выполню эти шаги для"
    ]
  },
  {
    "time": [
      344.0,
      349.0
    ],
    "en": [
      "the other routers router EAG RP 100"
    ],
    "ru": [
      "другие роутеры роутер EAG RP 100"
    ]
  },
  {
    "time": [
      349.0,
      351.0
    ],
    "en": [
      "again make sure that a s number is"
    ],
    "ru": [
      "еще раз убедитесь, что номер s"
    ]
  },
  {
    "time": [
      351.0,
      353.0
    ],
    "en": [
      "consistent throughout the network"
    ],
    "ru": [
      "единообразно по всей сети"
    ]
  },
  {
    "time": [
      353.0,
      362.0
    ],
    "en": [
      "network 10000 network to 2 to 200 200"
    ],
    "ru": [
      "сеть 10000 сеть до 2 до 200 200"
    ]
  },
  {
    "time": [
      362.0,
      368.0
    ],
    "en": [
      "passive interface l 0 no Auto summary ok"
    ],
    "ru": [
      "пассивный интерфейс l 0 нет Автоматическая сводка в порядке"
    ]
  },
  {
    "time": [
      368.0,
      371.0
    ],
    "en": [
      "next let's go on R 3"
    ],
    "ru": [
      "Далее поехали на R 3"
    ]
  },
  {
    "time": [
      371.0,
      379.0
    ],
    "en": [
      "router EAG RP 100 Network 10000 network"
    ],
    "ru": [
      "роутер EAG RP 100 Network 10000 сеть"
    ]
  },
  {
    "time": [
      379.0,
      386.0
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
      379.0,
      386.0
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
      386.0,
      395.0
    ],
    "en": [
      "auto summary next r4 router EAG RP 100"
    ],
    "ru": [
      "авто сводка следующий маршрутизатор r4 EAG RP 100"
    ]
  },
  {
    "time": [
      395.0,
      402.0
    ],
    "en": [
      "Network 10000 network 4.4.4 dot 400 dead"
    ],
    "ru": [
      "Сеть 10000 сеть 4.4.4 точка 400 мертва"
    ]
  },
  {
    "time": [
      402.0,
      403.0
    ],
    "en": [
      "Oh"
    ],
    "ru": [
      "ой"
    ]
  },
  {
    "time": [
      403.0,
      408.0
    ],
    "en": [
      "passive interface L 0 no Auto summary"
    ],
    "ru": [
      "пассивный интерфейс L 0 нет Автоматическая сводка"
    ]
  },
  {
    "time": [
      408.0,
      413.0
    ],
    "en": [
      "okay finally let's go to our 5 router"
    ],
    "ru": [
      "ладно наконец перейдем к нашему 5 роутеру"
    ]
  },
  {
    "time": [
      413.0,
      421.0
    ],
    "en": [
      "EAG RP 100 Network 10000 network v dot v"
    ],
    "ru": [
      "EAG RP 100 Сеть 10000 сеть v точка v"
    ]
  },
  {
    "time": [
      421.0,
      426.0
    ],
    "en": [
      "dot v dot v oh oh oh oh passive"
    ],
    "ru": [
      "точка v точка v о, о, о, о пассивном"
    ]
  },
  {
    "time": [
      426.0,
      430.0
    ],
    "en": [
      "interface l 0 no auto summary okay"
    ],
    "ru": [
      "интерфейс l 0 нет авто сводки хорошо"
    ]
  },
  {
    "time": [
      430.0,
      434.0
    ],
    "en": [
      "that's all let's go on our one and see"
    ],
    "ru": [
      "вот и все, пойдем на наш и посмотрим"
    ]
  },
  {
    "time": [
      434.0,
      440.0
    ],
    "en": [
      "what routes it is learned do show IP"
    ],
    "ru": [
      "какие маршруты он узнал, показывает IP"
    ]
  },
  {
    "time": [
      440.0,
      445.0
    ],
    "en": [
      "route the d beside these routes"
    ],
    "ru": [
      "Маршрут d рядом с этими маршрутами"
    ]
  },
  {
    "time": [
      445.0,
      446.0
    ],
    "en": [
      "indicates that they were learned via a"
    ],
    "ru": [
      "указывает, что они были изучены через"
    ]
  },
  {
    "time": [
      446.0,
      450.0
    ],
    "en": [
      "EIGRP notice the administrative distance"
    ],
    "ru": [
      "EIGRP замечает административное расстояние"
    ]
  },
  {
    "time": [
      450.0,
      455.0
    ],
    "en": [
      "of 90 as opposed to OSPF s 110 this"
    ],
    "ru": [
      "90, в отличие от OSPF 110, это"
    ]
  },
  {
    "time": [
      455.0,
      457.0
    ],
    "en": [
      "means if two routes are learned to a"
    ],
    "ru": [
      "означает, что если два маршрута изучены к"
    ]
  },
  {
    "time": [
      457.0,
      461.0
    ],
    "en": [
      "destination 1 via EIGRP and one via OSPF"
    ],
    "ru": [
      "пункт назначения 1 через EIGRP и один через OSPF"
    ]
  },
  {
    "time": [
      461.0,
      465.0
    ],
    "en": [
      "the eigrp route will be preferred also"
    ],
    "ru": [
      "также будет предпочтительным маршрут eigrp"
    ]
  },
  {
    "time": [
      465.0,
      469.0
    ],
    "en": [
      "notice these huge metric numbers OSPF"
    ],
    "ru": [
      "обратите внимание на эти огромные метрические числа OSPF"
    ]
  },
  {
    "time": [
      469.0,
      471.0
    ],
    "en": [
      "metric numbers were quite small and"
    ],
    "ru": [
      "метрические числа были довольно маленькими и"
    ]
  },
  {
    "time": [
      471.0,
      472.0
    ],
    "en": [
      "simple to understand"
    ],
    "ru": [
      "просто понять"
    ]
  },
  {
    "time": [
      472.0,
      475.0
    ],
    "en": [
      "however aig our P's metric numbers can"
    ],
    "ru": [
      "однако метрические числа нашего P могут"
    ]
  },
  {
    "time": [
      475.0,
      478.0
    ],
    "en": [
      "get quite large this is a small network"
    ],
    "ru": [
      "получить довольно большой, это небольшая сеть"
    ]
  },
  {
    "time": [
      478.0,
      482.0
    ],
    "en": [
      "in our ones path to R 5 has a metric of"
    ],
    "ru": [
      "в нашем пути к R 5 метрика"
    ]
  },
  {
    "time": [
      482.0,
      487.0
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
      482.0,
      487.0
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
      487.0,
      489.0
    ],
    "en": [
      "because it has one gigabit ethernet link"
    ],
    "ru": [
      "потому что у него есть одно гигабитное соединение Ethernet"
    ]
  },
  {
    "time": [
      489.0,
      493.0
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
      493.0,
      496.0
    ],
    "en": [
      "however our next task is to configure"
    ],
    "ru": [
      "однако наша следующая задача - настроить"
    ]
  },
  {
    "time": [
      496.0,
      499.0
    ],
    "en": [
      "our one to perform unequal cost load"
    ],
    "ru": [
      "наш для выполнения нагрузки с неравной стоимостью"
    ]
  },
  {
    "time": [
      499.0,
      502.0
    ],
    "en": [
      "balancing when sending traffic to our"
    ],
    "ru": [
      "балансировка при отправке трафика на наш"
    ]
  },
  {
    "time": [
      502.0,
      503.0
    ],
    "en": [
      "five"
    ],
    "ru": [
      "пять"
    ]
  },
  {
    "time": [
      503.0,
      506.0
    ],
    "en": [
      "Oh SPF can only do equal cost load"
    ],
    "ru": [
      "О, SPF может выполнять только нагрузку с равной стоимостью"
    ]
  },
  {
    "time": [
      506.0,
      509.0
    ],
    "en": [
      "balancing but II IG RP can do unequal"
    ],
    "ru": [
      "балансировка, но II IG RP может делать неравные"
    ]
  },
  {
    "time": [
      509.0,
      514.0
    ],
    "en": [
      "cost load balancing however it can't be"
    ],
    "ru": [
      "стоимость балансировки нагрузки, но это не может быть"
    ]
  },
  {
    "time": [
      514.0,
      515.0
    ],
    "en": [
      "configured to do unequal cost load"
    ],
    "ru": [
      "настроен на загрузку с неравной стоимостью"
    ]
  },
  {
    "time": [
      515.0,
      518.0
    ],
    "en": [
      "balancing over just any path it has to"
    ],
    "ru": [
      "балансируя по любому пути, который он должен"
    ]
  },
  {
    "time": [
      518.0,
      520.0
    ],
    "en": [
      "meet a certain requirement let's look"
    ],
    "ru": [
      "соответствовать определенному требованию давайте посмотрим"
    ]
  },
  {
    "time": [
      520.0,
      528.0
    ],
    "en": [
      "further do show IP e IG RP topology this"
    ],
    "ru": [
      "далее покажите топологию IP и IG RP"
    ]
  },
  {
    "time": [
      528.0,
      530.0
    ],
    "en": [
      "command shows the successor routes"
    ],
    "ru": [
      "команда показывает следующие маршруты"
    ]
  },
  {
    "time": [
      530.0,
      532.0
    ],
    "en": [
      "meaning the best routes to each"
    ],
    "ru": [
      "имеется в виду лучшие маршруты к каждому"
    ]
  },
  {
    "time": [
      532.0,
      535.0
    ],
    "en": [
      "destination as well as the feasible"
    ],
    "ru": [
      "место назначения, а также возможное"
    ]
  },
  {
    "time": [
      535.0,
      537.0
    ],
    "en": [
      "successor routes meaning routes that"
    ],
    "ru": [
      "маршруты-преемники, означающие маршруты, которые"
    ]
  },
  {
    "time": [
      537.0,
      539.0
    ],
    "en": [
      "weren't picked as the successor but meet"
    ],
    "ru": [
      "не были выбраны в качестве преемника, но встречались"
    ]
  },
  {
    "time": [
      539.0,
      542.0
    ],
    "en": [
      "that certain requirement and will also"
    ],
    "ru": [
      "это определенное требование, а также будет"
    ]
  },
  {
    "time": [
      542.0,
      544.0
    ],
    "en": [
      "serve as backups in the case the"
    ],
    "ru": [
      "служат в качестве резервных копий в случае"
    ]
  },
  {
    "time": [
      544.0,
      548.0
    ],
    "en": [
      "successor route goes down if you don't"
    ],
    "ru": [
      "преемник идет вниз, если вы этого не сделаете"
    ]
  },
  {
    "time": [
      548.0,
      550.0
    ],
    "en": [
      "understand the EIG RP concepts of"
    ],
    "ru": [
      "понять концепции EIG RP"
    ]
  },
  {
    "time": [
      550.0,
      553.0
    ],
    "en": [
      "successor and feasible successor as well"
    ],
    "ru": [
      "преемник, а также возможный преемник"
    ]
  },
  {
    "time": [
      553.0,
      555.0
    ],
    "en": [
      "as feasible distance and reported or"
    ],
    "ru": [
      "как возможное расстояние и сообщается или"
    ]
  },
  {
    "time": [
      555.0,
      558.0
    ],
    "en": [
      "advertised distance make sure you learn"
    ],
    "ru": [
      "рекламируемое расстояние убедитесь, что вы учитесь"
    ]
  },
  {
    "time": [
      558.0,
      560.0
    ],
    "en": [
      "them in whatever video course or book"
    ],
    "ru": [
      "их в любом видеокурсе или книге"
    ]
  },
  {
    "time": [
      560.0,
      562.0
    ],
    "en": [
      "you are using they can be a little"
    ],
    "ru": [
      "вы используете их может быть немного"
    ]
  },
  {
    "time": [
      562.0,
      564.0
    ],
    "en": [
      "difficult to understand at first and I'm"
    ],
    "ru": [
      "сначала трудно понять, и я"
    ]
  },
  {
    "time": [
      564.0,
      566.0
    ],
    "en": [
      "not going to explain them here"
    ],
    "ru": [
      "не собираюсь объяснять их здесь"
    ]
  },
  {
    "time": [
      566.0,
      570.0
    ],
    "en": [
      "so in this a I gr p topology table these"
    ],
    "ru": [
      "поэтому в этой таблице топологии эти"
    ]
  },
  {
    "time": [
      570.0,
      571.0
    ],
    "en": [
      "numbers on the Left indicate the"
    ],
    "ru": [
      "цифры слева указывают"
    ]
  },
  {
    "time": [
      571.0,
      574.0
    ],
    "en": [
      "feasible distance to a destination and"
    ],
    "ru": [
      "возможное расстояние до пункта назначения и"
    ]
  },
  {
    "time": [
      574.0,
      576.0
    ],
    "en": [
      "the numbers on the right indicate the"
    ],
    "ru": [
      "цифры справа указывают"
    ]
  },
  {
    "time": [
      576.0,
      580.0
    ],
    "en": [
      "reported distance remember in order for"
    ],
    "ru": [
      "сообщенное расстояние запомнить для того, чтобы"
    ]
  },
  {
    "time": [
      580.0,
      583.0
    ],
    "en": [
      "a route to be a feasible successor it's"
    ],
    "ru": [
      "путь к возможному преемнику это"
    ]
  },
  {
    "time": [
      583.0,
      586.0
    ],
    "en": [
      "reported distance must be lower than the"
    ],
    "ru": [
      "сообщаемое расстояние должно быть меньше, чем"
    ]
  },
  {
    "time": [
      586.0,
      589.0
    ],
    "en": [
      "successors feasible distance routes"
    ],
    "ru": [
      "преемники возможные дистанционные маршруты"
    ]
  },
  {
    "time": [
      589.0,
      592.0
    ],
    "en": [
      "which don't meet this criteria will not"
    ],
    "ru": [
      "которые не соответствуют этим критериям, не будут"
    ]
  },
  {
    "time": [
      592.0,
      597.0
    ],
    "en": [
      "show up in this table however do show IP"
    ],
    "ru": [
      "отображаются в этой таблице, но показывают IP"
    ]
  },
  {
    "time": [
      597.0,
      601.0
    ],
    "en": [
      "eigrp topology all links will display"
    ],
    "ru": [
      "топология eigrp все ссылки будут отображаться"
    ]
  },
  {
    "time": [
      601.0,
      604.0
    ],
    "en": [
      "them in this network however there"
    ],
    "ru": [
      "их в этой сети, однако там"
    ]
  },
  {
    "time": [
      604.0,
      607.0
    ],
    "en": [
      "aren't any such routes"
    ],
    "ru": [
      "нет таких маршрутов"
    ]
  },
  {
    "time": [
      607.0,
      610.0
    ],
    "en": [
      "okay so our one has a successor route to"
    ],
    "ru": [
      "хорошо, так что у нашего есть следующий путь к"
    ]
  },
  {
    "time": [
      610.0,
      614.0
    ],
    "en": [
      "our five via 10.14 o4 which is our four"
    ],
    "ru": [
      "наша пятерка через 10.14 o4, которая является нашей четверкой"
    ]
  },
  {
    "time": [
      614.0,
      621.0
    ],
    "en": [
      "with a metric of 150 6672 it also has a"
    ],
    "ru": [
      "с метрикой 150 6672 он также имеет"
    ]
  },
  {
    "time": [
      621.0,
      624.0
    ],
    "en": [
      "feasible successor route via 10.12"
    ],
    "ru": [
      "возможный маршрут-преемник через 10.12"
    ]
  },
  {
    "time": [
      624.0,
      628.0
    ],
    "en": [
      "o2 which is r2 with a metric of one"
    ],
    "ru": [
      "o2, который есть r2 с метрикой, равной единице."
    ]
  },
  {
    "time": [
      628.0,
      630.0
    ],
    "en": [
      "hundred fifty eight thousand nine"
    ],
    "ru": [
      "сто пятьдесят восемь тысяч девять"
    ]
  },
  {
    "time": [
      630.0,
      634.0
    ],
    "en": [
      "hundred seventy six to enable r1 to load"
    ],
    "ru": [
      "сто семьдесят шесть, чтобы позволить r1 загрузить"
    ]
  },
  {
    "time": [
      634.0,
      636.0
    ],
    "en": [
      "balance over these use the"
    ],
    "ru": [
      "баланс над ними использовать"
    ]
  },
  {
    "time": [
      636.0,
      639.0
    ],
    "en": [
      "variance command then we enter a"
    ],
    "ru": [
      "команда дисперсии, затем мы вводим"
    ]
  },
  {
    "time": [
      639.0,
      644.0
    ],
    "en": [
      "multiplier for example variance to will"
    ],
    "ru": [
      "множитель, например, отклонение от воли"
    ]
  },
  {
    "time": [
      644.0,
      647.0
    ],
    "en": [
      "allow r1 to load balance over feasible"
    ],
    "ru": [
      "позволить r1 загружать баланс сверх допустимого"
    ]
  },
  {
    "time": [
      647.0,
      649.0
    ],
    "en": [
      "successor routes that have up to double"
    ],
    "ru": [
      "маршруты-преемники, которые имеют до удвоения"
    ]
  },
  {
    "time": [
      649.0,
      651.0
    ],
    "en": [
      "the feasible distance of the successor"
    ],
    "ru": [
      "возможное расстояние до преемника"
    ]
  },
  {
    "time": [
      651.0,
      654.0
    ],
    "en": [
      "rep or triple the distance if we used"
    ],
    "ru": [
      "повторить или утроить дистанцию, если мы использовали"
    ]
  },
  {
    "time": [
      654.0,
      658.0
    ],
    "en": [
      "variance three the difference between"
    ],
    "ru": [
      "разница три разница между"
    ]
  },
  {
    "time": [
      658.0,
      660.0
    ],
    "en": [
      "these two metrics is fairly small so in"
    ],
    "ru": [
      "эти два показателя довольно малы, поэтому в"
    ]
  },
  {
    "time": [
      660.0,
      663.0
    ],
    "en": [
      "this case we can just use variance to"
    ],
    "ru": [
      "в этом случае мы можем просто использовать дисперсию, чтобы"
    ]
  },
  {
    "time": [
      663.0,
      664.0
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      664.0,
      670.0
    ],
    "en": [
      "do show IP route now you can see both"
    ],
    "ru": [
      "показывать IP-маршрут, теперь вы можете видеть оба"
    ]
  },
  {
    "time": [
      670.0,
      673.0
    ],
    "en": [
      "paths are in the routing table both for"
    ],
    "ru": [
      "пути находятся в таблице маршрутизации как для"
    ]
  },
  {
    "time": [
      673.0,
      675.0
    ],
    "en": [
      "the v dot v dot v dot v loopback address"
    ],
    "ru": [
      "v точка v точка v точка v адрес обратной связи"
    ]
  },
  {
    "time": [
      675.0,
      680.0
    ],
    "en": [
      "and the 10.35 0 network let me just"
    ],
    "ru": [
      "и сеть 10.35 0 позволила мне просто"
    ]
  },
  {
    "time": [
      680.0,
      684.0
    ],
    "en": [
      "emphasize one point e IG RP will never"
    ],
    "ru": [
      "Подчеркните один момент, и IG RP никогда не будет"
    ]
  },
  {
    "time": [
      684.0,
      686.0
    ],
    "en": [
      "load balance over paths which aren't"
    ],
    "ru": [
      "балансировка нагрузки по путям, которые не"
    ]
  },
  {
    "time": [
      686.0,
      689.0
    ],
    "en": [
      "feasible successors you can set the"
    ],
    "ru": [
      "возможных преемников вы можете установить"
    ]
  },
  {
    "time": [
      689.0,
      693.0
    ],
    "en": [
      "maximum variance 128 but if the other"
    ],
    "ru": [
      "максимальная дисперсия 128, но если другой"
    ]
  },
  {
    "time": [
      693.0,
      696.0
    ],
    "en": [
      "pads aren't feasible successors ew g RP"
    ],
    "ru": [
      "колодки невозможны преемники ew g RP"
    ]
  },
  {
    "time": [
      696.0,
      699.0
    ],
    "en": [
      "won't load balance over them this is an"
    ],
    "ru": [
      "не будет загружать баланс по ним, это"
    ]
  },
  {
    "time": [
      699.0,
      700.0
    ],
    "en": [
      "important feature to prevent routing"
    ],
    "ru": [
      "важная функция для предотвращения маршрутизации"
    ]
  },
  {
    "time": [
      700.0,
      705.0
    ],
    "en": [
      "loops okay our last task is to configure"
    ],
    "ru": [
      "петли хорошо, наша последняя задача - настроить"
    ]
  },
  {
    "time": [
      705.0,
      709.0
    ],
    "en": [
      "r3 to advertise a 1000 / 8 summary"
    ],
    "ru": [
      "r3 для рекламы резюме 1000/8"
    ]
  },
  {
    "time": [
      709.0,
      714.0
    ],
    "en": [
      "network to r5 manual summarization is"
    ],
    "ru": [
      "ручное резюмирование сети до r5 есть"
    ]
  },
  {
    "time": [
      714.0,
      716.0
    ],
    "en": [
      "actually not in the exam topics for"
    ],
    "ru": [
      "на самом деле не в темах экзамена для"
    ]
  },
  {
    "time": [
      716.0,
      720.0
    ],
    "en": [
      "icnd2 however i included it in my oh s"
    ],
    "ru": [
      "icnd2, однако я включил его в свой ой"
    ]
  },
  {
    "time": [
      720.0,
      723.0
    ],
    "en": [
      "PF labs and will hear in my ear g RP"
    ],
    "ru": [
      "PF labs и услышу на ухо g RP"
    ]
  },
  {
    "time": [
      723.0,
      725.0
    ],
    "en": [
      "labs simply for the reason that it is"
    ],
    "ru": [
      "лаборатории просто потому, что это"
    ]
  },
  {
    "time": [
      725.0,
      728.0
    ],
    "en": [
      "often included in other CCNA learning"
    ],
    "ru": [
      "часто включается в другие программы обучения CCNA"
    ]
  },
  {
    "time": [
      728.0,
      729.0
    ],
    "en": [
      "materials"
    ],
    "ru": [
      "материалы"
    ]
  },
  {
    "time": [
      729.0,
      732.0
    ],
    "en": [
      "Cisco's exam topics don't necessarily"
    ],
    "ru": [
      "Темы экзаменов Cisco не обязательно"
    ]
  },
  {
    "time": [
      732.0,
      735.0
    ],
    "en": [
      "list everything that is on the exam so"
    ],
    "ru": [
      "перечислите все, что находится на экзамене, так"
    ]
  },
  {
    "time": [
      735.0,
      736.0
    ],
    "en": [
      "summarization may actually be something"
    ],
    "ru": [
      "резюмирование на самом деле может быть чем-то"
    ]
  },
  {
    "time": [
      736.0,
      739.0
    ],
    "en": [
      "you should know for the exam and in"
    ],
    "ru": [
      "вы должны знать для экзамена и в"
    ]
  },
  {
    "time": [
      739.0,
      741.0
    ],
    "en": [
      "either case it's just a single command"
    ],
    "ru": [
      "в любом случае это всего лишь одна команда"
    ]
  },
  {
    "time": [
      741.0,
      746.0
    ],
    "en": [
      "so let's try it out on r3 to configure a"
    ],
    "ru": [
      "так что давайте попробуем это на r3, чтобы настроить"
    ]
  },
  {
    "time": [
      746.0,
      749.0
    ],
    "en": [
      "summary route in AI GRP we configure it"
    ],
    "ru": [
      "сводный маршрут в AI GRP настраиваем"
    ]
  },
  {
    "time": [
      749.0,
      752.0
    ],
    "en": [
      "at the interface level unlike in OSPF"
    ],
    "ru": [
      "на уровне интерфейса в отличие от OSPF"
    ]
  },
  {
    "time": [
      752.0,
      755.0
    ],
    "en": [
      "where we configure that oh s PF"
    ],
    "ru": [
      "где мы настраиваем это oh s PF"
    ]
  },
  {
    "time": [
      755.0,
      758.0
    ],
    "en": [
      "configuration mode in this case we'll"
    ],
    "ru": [
      "режим конфигурации в этом случае мы"
    ]
  },
  {
    "time": [
      758.0,
      761.0
    ],
    "en": [
      "configure it on the g00 interface the"
    ],
    "ru": [
      "настроить его на интерфейсе g00"
    ]
  },
  {
    "time": [
      761.0,
      766.0
    ],
    "en": [
      "one facing our v interface g 0 0"
    ],
    "ru": [
      "один обращен к нашему интерфейсу v g 0 0"
    ]
  },
  {
    "time": [
      766.0,
      770.0
    ],
    "en": [
      "this is the command IP summary address"
    ],
    "ru": [
      "это сводный IP-адрес команды"
    ]
  },
  {
    "time": [
      770.0,
      775.0
    ],
    "en": [
      "eh ERP followed by the a s number 100"
    ],
    "ru": [
      "eh ERP, за которым следует a s номер 100"
    ]
  },
  {
    "time": [
      775.0,
      780.0
    ],
    "en": [
      "then the network address 10000 followed"
    ],
    "ru": [
      "затем последовал сетевой адрес 10000"
    ]
  },
  {
    "time": [
      780.0,
      784.0
    ],
    "en": [
      "by the mask much like with OSPF"
    ],
    "ru": [
      "по маске очень похоже на OSPF"
    ]
  },
  {
    "time": [
      784.0,
      787.0
    ],
    "en": [
      "summarization ew GRP summarization uses"
    ],
    "ru": [
      "обобщение ew обобщение GRP использует"
    ]
  },
  {
    "time": [
      787.0,
      790.0
    ],
    "en": [
      "a normal network mask not a wildcard"
    ],
    "ru": [
      "обычная сетевая маска, а не подстановочный знак"
    ]
  },
  {
    "time": [
      790.0,
      790.0
    ],
    "en": [
      "mask"
    ],
    "ru": [
      "маска"
    ]
  },
  {
    "time": [
      790.0,
      793.0
    ],
    "en": [
      "unlike the network command which does"
    ],
    "ru": [
      "в отличие от сетевой команды, которая делает"
    ]
  },
  {
    "time": [
      793.0,
      797.0
    ],
    "en": [
      "use a wildcard mask so in this case 255"
    ],
    "ru": [
      "используйте подстановочную маску, поэтому в этом случае 255"
    ]
  },
  {
    "time": [
      797.0,
      799.0
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
      797.0,
      799.0
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
      799.0,
      802.0
    ],
    "en": [
      "ok that's all there is to it let's check"
    ],
    "ru": [
      "хорошо, это все, что нужно, давайте проверим"
    ]
  },
  {
    "time": [
      802.0,
      812.0
    ],
    "en": [
      "it out on our 5 do show IP route there"
    ],
    "ru": [
      "это на наших 5 действительно показывает IP-маршрут там"
    ]
  },
  {
    "time": [
      812.0,
      815.0
    ],
    "en": [
      "it is our 5 has now learned at 1000 / 8"
    ],
    "ru": [
      "это наша 5 теперь выучила на 1000/8"
    ]
  },
  {
    "time": [
      815.0,
      818.0
    ],
    "en": [
      "summary address instead of all of those"
    ],
    "ru": [
      "сводный адрес вместо всех этих"
    ]
  },
  {
    "time": [
      818.0,
      822.0
    ],
    "en": [
      "separate networks in this slob we did a"
    ],
    "ru": [
      "отдельные сети в этой слякоти мы сделали"
    ]
  },
  {
    "time": [
      822.0,
      825.0
    ],
    "en": [
      "basic AIG RP configuration with unequal"
    ],
    "ru": [
      "базовая конфигурация AIG RP с неравным"
    ]
  },
  {
    "time": [
      825.0,
      827.0
    ],
    "en": [
      "cost load balancing and some manual"
    ],
    "ru": [
      "стоить балансировку нагрузки и немного вручную"
    ]
  },
  {
    "time": [
      827.0,
      832.0
    ],
    "en": [
      "summarization that's all for this lab"
    ],
    "ru": [
      "обобщение, вот и все для этой лаборатории"
    ]
  },
  {
    "time": [
      832.0,
      835.0
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
      835.0,
      837.0
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
      837.0,
      840.0
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
      840.0,
      842.0
    ],
    "en": [
      "this which will be released weekly if"
    ],
    "ru": [
      "это будет выпускаться еженедельно, если"
    ]
  },
  {
    "time": [
      842.0,
      844.0
    ],
    "en": [
      "you have requests for any specific labs"
    ],
    "ru": [
      "у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      844.0,
      848.0
    ],
    "en": [
      "let me know in the comment section if"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев, если"
    ]
  },
  {
    "time": [
      848.0,
      850.0
    ],
    "en": [
      "you want to support my channel I accept"
    ],
    "ru": [
      "вы хотите поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      850.0,
      852.0
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
      852.0,
      855.0
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
      855.0,
      858.0
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
      858.0,
      860.0
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
      860.0,
      860.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]