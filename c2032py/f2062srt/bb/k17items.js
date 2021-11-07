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
      6.0
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
      6.0,
      9.0
    ],
    "en": [
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      9.0,
      12.0
    ],
    "en": [
      "this lab we will take a look at port"
    ],
    "ru": [
      "в этой лаборатории мы рассмотрим порт"
    ]
  },
  {
    "time": [
      12.0,
      15.0
    ],
    "en": [
      "security port security is a security"
    ],
    "ru": [
      "безопасность порт безопасность - это безопасность"
    ]
  },
  {
    "time": [
      15.0,
      16.0
    ],
    "en": [
      "function which can be configured on"
    ],
    "ru": [
      "функция, которая может быть настроена на"
    ]
  },
  {
    "time": [
      16.0,
      20.0
    ],
    "en": [
      "switch interfaces and controls which MAC"
    ],
    "ru": [
      "переключать интерфейсы и контролировать, какой MAC"
    ]
  },
  {
    "time": [
      20.0,
      21.0
    ],
    "en": [
      "addresses are allowed on which"
    ],
    "ru": [
      "разрешены адреса, на которых"
    ]
  },
  {
    "time": [
      21.0,
      25.0
    ],
    "en": [
      "interfaces MAC addresses are 48 bit"
    ],
    "ru": [
      "MAC-адреса интерфейсов 48 бит"
    ]
  },
  {
    "time": [
      25.0,
      28.0
    ],
    "en": [
      "addresses which are tied to the physical"
    ],
    "ru": [
      "адреса, привязанные к физическим"
    ]
  },
  {
    "time": [
      28.0,
      30.0
    ],
    "en": [
      "device such as a network interface card"
    ],
    "ru": [
      "устройство, такое как сетевая карта"
    ]
  },
  {
    "time": [
      30.0,
      35.0
    ],
    "en": [
      "on a computer port security allows us to"
    ],
    "ru": [
      "безопасность порта компьютера позволяет нам"
    ]
  },
  {
    "time": [
      35.0,
      36.0
    ],
    "en": [
      "ensure that only the intended devices"
    ],
    "ru": [
      "убедитесь, что только предполагаемые устройства"
    ]
  },
  {
    "time": [
      36.0,
      38.0
    ],
    "en": [
      "are allowed to communicate over a given"
    ],
    "ru": [
      "разрешено общаться по заданному"
    ]
  },
  {
    "time": [
      38.0,
      42.0
    ],
    "en": [
      "switchboard we will do a few labs to"
    ],
    "ru": [
      "коммутатор, мы проведем несколько лабораторных работ, чтобы"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "practice port security in this first lab"
    ],
    "ru": [
      "Практикуйте безопасность порта в этой первой лаборатории"
    ]
  },
  {
    "time": [
      45.0,
      48.0
    ],
    "en": [
      "let's look at and configure some basic"
    ],
    "ru": [
      "давайте посмотрим и настроим некоторые основные"
    ]
  },
  {
    "time": [
      48.0,
      49.0
    ],
    "en": [
      "functions of port security on two"
    ],
    "ru": [
      "функции безопасности порта на два"
    ]
  },
  {
    "time": [
      49.0,
      54.0
    ],
    "en": [
      "switches switch 1 and switch 2 which"
    ],
    "ru": [
      "переключатели переключатель 1 и переключатель 2, которые"
    ]
  },
  {
    "time": [
      54.0,
      57.0
    ],
    "en": [
      "each have one pc connected to them try"
    ],
    "ru": [
      "у каждого есть один компьютер, подключенный к ним, попробуйте"
    ]
  },
  {
    "time": [
      57.0,
      60.0
    ],
    "en": [
      "to complete the lab yourself first then"
    ],
    "ru": [
      "сначала самостоятельно завершить лабораторию, а затем"
    ]
  },
  {
    "time": [
      60.0,
      61.0
    ],
    "en": [
      "continue watching this video if you have"
    ],
    "ru": [
      "продолжайте смотреть это видео, если у вас есть"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "trouble or watch it after to check your"
    ],
    "ru": [
      "проблемы или посмотрите это позже, чтобы проверить свой"
    ]
  },
  {
    "time": [
      64.0,
      68.0
    ],
    "en": [
      "solution"
    ],
    "ru": [
      "решение"
    ]
  },
  {
    "time": [
      68.0,
      70.0
    ],
    "en": [
      "step1 tells us to find the MAC address"
    ],
    "ru": [
      "step1 говорит нам найти MAC-адрес"
    ]
  },
  {
    "time": [
      70.0,
      73.0
    ],
    "en": [
      "of switch to by using the CLI of switch"
    ],
    "ru": [
      "переключиться на с помощью интерфейса командной строки переключателя"
    ]
  },
  {
    "time": [
      73.0,
      76.0
    ],
    "en": [
      "one and the reverse so let's go on"
    ],
    "ru": [
      "один и наоборот, так что давайте продолжим"
    ]
  },
  {
    "time": [
      76.0,
      81.0
    ],
    "en": [
      "switch one first enable use the command"
    ],
    "ru": [
      "сначала переключитесь, включите, используйте команду"
    ]
  },
  {
    "time": [
      81.0,
      85.0
    ],
    "en": [
      "show MAC address - table to display the"
    ],
    "ru": [
      "показать MAC-адрес - таблица для отображения"
    ]
  },
  {
    "time": [
      85.0,
      86.0
    ],
    "en": [
      "list of known MAC addresses on the"
    ],
    "ru": [
      "список известных MAC-адресов на"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "switch switch one knows one"
    ],
    "ru": [
      "переключатель переключатель один знает один"
    ]
  },
  {
    "time": [
      89.0,
      93.0
    ],
    "en": [
      "MAC address it's type is dynamic meaning"
    ],
    "ru": [
      "MAC-адрес его тип имеет динамическое значение"
    ]
  },
  {
    "time": [
      93.0,
      95.0
    ],
    "en": [
      "that we didn't manually configure this"
    ],
    "ru": [
      "что мы не настраивали это вручную"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "MAC address it was learned by receiving"
    ],
    "ru": [
      "MAC-адрес был получен при получении"
    ]
  },
  {
    "time": [
      97.0,
      99.0
    ],
    "en": [
      "a packet on the port displayed here"
    ],
    "ru": [
      "пакет на порт, отображаемый здесь"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "fastethernet 0/1 that's the MAC address"
    ],
    "ru": [
      "fastethernet 0/1, это MAC-адрес"
    ]
  },
  {
    "time": [
      102.0,
      107.0
    ],
    "en": [
      "of switch - now let's go on switch to"
    ],
    "ru": [
      "переключателя - теперь перейдем к переключению"
    ]
  },
  {
    "time": [
      107.0,
      113.0
    ],
    "en": [
      "enable show MAC address table this here"
    ],
    "ru": [
      "включить показать таблицу MAC-адресов здесь"
    ]
  },
  {
    "time": [
      113.0,
      115.0
    ],
    "en": [
      "is the MAC address of switch 1 learned"
    ],
    "ru": [
      "запрограммирован MAC-адрес коммутатора 1"
    ]
  },
  {
    "time": [
      115.0,
      119.0
    ],
    "en": [
      "dynamically on the fastethernet 0/1 port"
    ],
    "ru": [
      "динамически на порту fastethernet 0/1"
    ]
  },
  {
    "time": [
      119.0,
      122.0
    ],
    "en": [
      "step 2 asks us why the MAC addresses of"
    ],
    "ru": [
      "шаг 2 спрашивает нас, почему MAC-адреса"
    ]
  },
  {
    "time": [
      122.0,
      125.0
    ],
    "en": [
      "pc1 & pc2 don't appear in the MAC"
    ],
    "ru": [
      "pc1 и pc2 не отображаются в MAC"
    ]
  },
  {
    "time": [
      125.0,
      127.0
    ],
    "en": [
      "address table even though switch 1 and"
    ],
    "ru": [
      "таблица адресов, даже если переключатель 1 и"
    ]
  },
  {
    "time": [
      127.0,
      130.0
    ],
    "en": [
      "switch to appear in each other's tables"
    ],
    "ru": [
      "переключаться, чтобы появляться в таблицах друг друга"
    ]
  },
  {
    "time": [
      130.0,
      132.0
    ],
    "en": [
      "if you have studied spanning tree"
    ],
    "ru": [
      "если вы изучили остовное дерево"
    ]
  },
  {
    "time": [
      132.0,
      134.0
    ],
    "en": [
      "protocol already you know that switches"
    ],
    "ru": [
      "протокол уже вы знаете, что переключает"
    ]
  },
  {
    "time": [
      134.0,
      137.0
    ],
    "en": [
      "send each other BPD use bridge protocol"
    ],
    "ru": [
      "отправлять друг другу BPD использовать протокол моста"
    ]
  },
  {
    "time": [
      137.0,
      141.0
    ],
    "en": [
      "data units at regular intervals the"
    ],
    "ru": [
      "блоки данных через равные промежутки времени"
    ]
  },
  {
    "time": [
      141.0,
      142.0
    ],
    "en": [
      "switches learned each other's MAC"
    ],
    "ru": [
      "коммутаторы узнали MAC-адреса друг друга"
    ]
  },
  {
    "time": [
      142.0,
      146.0
    ],
    "en": [
      "addresses via these bpdu packets however"
    ],
    "ru": [
      "адреса через эти пакеты bpdu, однако"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "no traffic has passed from the PCs to"
    ],
    "ru": [
      "трафик с ПК на"
    ]
  },
  {
    "time": [
      149.0,
      151.0
    ],
    "en": [
      "the switches yet so they are unaware of"
    ],
    "ru": [
      "переключатели еще не знают"
    ]
  },
  {
    "time": [
      151.0,
      156.0
    ],
    "en": [
      "the PCs MAC addresses at this point"
    ],
    "ru": [
      "MAC-адреса ПК на этом этапе"
    ]
  },
  {
    "time": [
      156.0,
      160.0
    ],
    "en": [
      "step3 tells us to ping between the PCs"
    ],
    "ru": [
      "step3 говорит нам пинговать между ПК"
    ]
  },
  {
    "time": [
      160.0,
      162.0
    ],
    "en": [
      "and then check the MAC address tables of"
    ],
    "ru": [
      "а затем проверьте таблицы MAC-адресов"
    ]
  },
  {
    "time": [
      162.0,
      165.0
    ],
    "en": [
      "the switches if we ping between the PCs"
    ],
    "ru": [
      "переключатели, если мы пингуем между ПК"
    ]
  },
  {
    "time": [
      165.0,
      168.0
    ],
    "en": [
      "switch one should have one dynamically"
    ],
    "ru": [
      "переключать нужно иметь один динамически"
    ]
  },
  {
    "time": [
      168.0,
      170.0
    ],
    "en": [
      "learned MAC address on his Fast Ethernet"
    ],
    "ru": [
      "узнал MAC-адрес на его Fast Ethernet"
    ]
  },
  {
    "time": [
      170.0,
      173.0
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
      170.0,
      173.0
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
      173.0,
      175.0
    ],
    "en": [
      "dynamically learned MAC addresses on his"
    ],
    "ru": [
      "динамически изученные MAC-адреса на его"
    ]
  },
  {
    "time": [
      175.0,
      178.0
    ],
    "en": [
      "fastethernet 0/1 port those of switch 2"
    ],
    "ru": [
      "порт fastethernet 0/1 - порт коммутатора 2"
    ]
  },
  {
    "time": [
      178.0,
      183.0
    ],
    "en": [
      "and PC 2 likewise switch 2 should have"
    ],
    "ru": [
      "и ПК 2 аналогично переключатель 2 должен иметь"
    ]
  },
  {
    "time": [
      183.0,
      185.0
    ],
    "en": [
      "one dynamically learned MAC address on"
    ],
    "ru": [
      "один динамически узнаваемый MAC-адрес на"
    ]
  },
  {
    "time": [
      185.0,
      187.0
    ],
    "en": [
      "his Fast Ethernet 0 to port that of PC 2"
    ],
    "ru": [
      "его Fast Ethernet 0 для порта ПК 2"
    ]
  },
  {
    "time": [
      187.0,
      190.0
    ],
    "en": [
      "and to dynamically learned MAC addresses"
    ],
    "ru": [
      "и на динамически изученные MAC-адреса"
    ]
  },
  {
    "time": [
      190.0,
      193.0
    ],
    "en": [
      "on its fastethernet 0/1 port those of"
    ],
    "ru": [
      "на его порту fastethernet 0/1 те из"
    ]
  },
  {
    "time": [
      193.0,
      196.0
    ],
    "en": [
      "switch one and pc 1 so I'll go on PC 1"
    ],
    "ru": [
      "переключить один и ПК 1, чтобы я пошел на ПК 1"
    ]
  },
  {
    "time": [
      196.0,
      206.0
    ],
    "en": [
      "and ping PC to ping 192.168.1.2 elv"
    ],
    "ru": [
      "и ping PC для ping 192.168.1.2 elv"
    ]
  },
  {
    "time": [
      206.0,
      211.0
    ],
    "en": [
      "there we go now let's go on switch 1"
    ],
    "ru": [
      "Ну вот, теперь давайте перейдем к переключателю 1"
    ]
  },
  {
    "time": [
      211.0,
      216.0
    ],
    "en": [
      "show MAC address table here is the MAC"
    ],
    "ru": [
      "показать таблицу MAC-адресов вот MAC"
    ]
  },
  {
    "time": [
      216.0,
      220.0
    ],
    "en": [
      "address of switch 2 we saw before this"
    ],
    "ru": [
      "адрес коммутатора 2, который мы видели до этого"
    ]
  },
  {
    "time": [
      220.0,
      222.0
    ],
    "en": [
      "other mac address on fastethernet 0/1"
    ],
    "ru": [
      "другой MAC-адрес в fastethernet 0/1"
    ]
  },
  {
    "time": [
      222.0,
      225.0
    ],
    "en": [
      "must be PC twos and the MAC address on"
    ],
    "ru": [
      "должны быть два компьютера и MAC-адрес на"
    ]
  },
  {
    "time": [
      225.0,
      230.0
    ],
    "en": [
      "Fast Ethernet 0 2 must be PC ones let's"
    ],
    "ru": [
      "Fast Ethernet 0 2 должен быть ПК, давайте"
    ]
  },
  {
    "time": [
      230.0,
      236.0
    ],
    "en": [
      "check on switch to also show MAC address"
    ],
    "ru": [
      "установите переключатель, чтобы также показать MAC-адрес"
    ]
  },
  {
    "time": [
      236.0,
      240.0
    ],
    "en": [
      "table here switch ones MAC address this"
    ],
    "ru": [
      "таблица здесь переключить один MAC-адрес это"
    ]
  },
  {
    "time": [
      240.0,
      243.0
    ],
    "en": [
      "one is also on Fast Ethernet 0 1 so it"
    ],
    "ru": [
      "один также находится в Fast Ethernet 0 1, поэтому он"
    ]
  },
  {
    "time": [
      243.0,
      246.0
    ],
    "en": [
      "must be PC ones and this MAC address"
    ],
    "ru": [
      "должны быть ПК и этот MAC-адрес"
    ]
  },
  {
    "time": [
      246.0,
      248.0
    ],
    "en": [
      "went on Fast Ethernet 0 2 must be PC"
    ],
    "ru": [
      "перешел на Fast Ethernet 0 2 должен быть ПК"
    ]
  },
  {
    "time": [
      248.0,
      251.0
    ],
    "en": [
      "twos"
    ],
    "ru": [
      "двое"
    ]
  },
  {
    "time": [
      251.0,
      254.0
    ],
    "en": [
      "step four is to enable port security on"
    ],
    "ru": [
      "Шаг четвертый - включить безопасность порта на"
    ]
  },
  {
    "time": [
      254.0,
      256.0
    ],
    "en": [
      "the switch interfaces connected to PCs"
    ],
    "ru": [
      "интерфейсы коммутатора, подключенные к ПК"
    ]
  },
  {
    "time": [
      256.0,
      262.0
    ],
    "en": [
      "so fastethernet 0 2 of each switch in"
    ],
    "ru": [
      "так fastethernet 0 2 каждого коммутатора в"
    ]
  },
  {
    "time": [
      262.0,
      263.0
    ],
    "en": [
      "this lab we will configure the switches"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим переключатели"
    ]
  },
  {
    "time": [
      263.0,
      265.0
    ],
    "en": [
      "so that switch 1 only accepts traffic"
    ],
    "ru": [
      "так что коммутатор 1 принимает только трафик"
    ]
  },
  {
    "time": [
      265.0,
      268.0
    ],
    "en": [
      "from PC 1 on its Fast Ethernet 0 2"
    ],
    "ru": [
      "с ПК 1 на его Fast Ethernet 0 2"
    ]
  },
  {
    "time": [
      268.0,
      270.0
    ],
    "en": [
      "interface and switch 2 only accepts"
    ],
    "ru": [
      "интерфейс и переключатель 2 принимает только"
    ]
  },
  {
    "time": [
      270.0,
      273.0
    ],
    "en": [
      "traffic from PC 2 on its Fast Ethernet 0"
    ],
    "ru": [
      "трафик от ПК 2 по его Fast Ethernet 0"
    ]
  },
  {
    "time": [
      273.0,
      277.0
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
      273.0,
      277.0
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
      277.0,
      280.0
    ],
    "en": [
      "the interface level let's go on switch 1"
    ],
    "ru": [
      "уровень интерфейса давайте перейдем к переключателю 1"
    ]
  },
  {
    "time": [
      280.0,
      287.0
    ],
    "en": [
      "again count 50 interface f02 you can"
    ],
    "ru": [
      "снова посчитать 50 интерфейс f02 можно"
    ]
  },
  {
    "time": [
      287.0,
      289.0
    ],
    "en": [
      "enable port security with the command"
    ],
    "ru": [
      "включить безопасность порта с помощью команды"
    ]
  },
  {
    "time": [
      289.0,
      294.0
    ],
    "en": [
      "switch port port security but command"
    ],
    "ru": [
      "безопасность порта порта коммутатора, но команда"
    ]
  },
  {
    "time": [
      294.0,
      297.0
    ],
    "en": [
      "rejected Fast Ethernet 0 2 is a dynamic"
    ],
    "ru": [
      "отклонено Fast Ethernet 0 2 является динамическим"
    ]
  },
  {
    "time": [
      297.0,
      300.0
    ],
    "en": [
      "port what does this mean well one rule"
    ],
    "ru": [
      "порт что это значит хорошо одно правило"
    ]
  },
  {
    "time": [
      300.0,
      302.0
    ],
    "en": [
      "of port security is that it can't be"
    ],
    "ru": [
      "безопасности порта в том, что этого не может быть"
    ]
  },
  {
    "time": [
      302.0,
      304.0
    ],
    "en": [
      "enabled on a trunk port"
    ],
    "ru": [
      "включен на магистральном порту"
    ]
  },
  {
    "time": [
      304.0,
      307.0
    ],
    "en": [
      "it can only be enabled on an access port"
    ],
    "ru": [
      "его можно включить только на порте доступа"
    ]
  },
  {
    "time": [
      307.0,
      310.0
    ],
    "en": [
      "although this switch port is currently"
    ],
    "ru": [
      "хотя этот порт коммутатора в настоящее время"
    ]
  },
  {
    "time": [
      310.0,
      312.0
    ],
    "en": [
      "functioning as an access port it's"
    ],
    "ru": [
      "функционирует как порт доступа, это"
    ]
  },
  {
    "time": [
      312.0,
      314.0
    ],
    "en": [
      "actually in dynamic mode meaning that if"
    ],
    "ru": [
      "фактически в динамическом режиме, что означает, что если"
    ]
  },
  {
    "time": [
      314.0,
      316.0
    ],
    "en": [
      "it were to be connected to a switch port"
    ],
    "ru": [
      "он должен был быть подключен к порту коммутатора"
    ]
  },
  {
    "time": [
      316.0,
      318.0
    ],
    "en": [
      "configured as a trunk it would start"
    ],
    "ru": [
      "настроен как транк, он запустится"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "functioning as a trunk the switch board"
    ],
    "ru": [
      "функционирует как магистраль распределительный щит"
    ]
  },
  {
    "time": [
      321.0,
      323.0
    ],
    "en": [
      "has to be explicitly configured as an"
    ],
    "ru": [
      "должен быть явно настроен как"
    ]
  },
  {
    "time": [
      323.0,
      325.0
    ],
    "en": [
      "access port if you want to enable port"
    ],
    "ru": [
      "доступ к порту, если вы хотите включить порт"
    ]
  },
  {
    "time": [
      325.0,
      329.0
    ],
    "en": [
      "security on it so switch port mode"
    ],
    "ru": [
      "безопасность на нем, поэтому переключите режим порта"
    ]
  },
  {
    "time": [
      329.0,
      333.0
    ],
    "en": [
      "access switch port port security that's"
    ],
    "ru": [
      "доступ к коммутатору порта безопасности порта, который"
    ]
  },
  {
    "time": [
      333.0,
      340.0
    ],
    "en": [
      "it let's go on switch to now compte"
    ],
    "ru": [
      "это давайте перейдем к сейчас compte"
    ]
  },
  {
    "time": [
      340.0,
      345.0
    ],
    "en": [
      "interface f02 switch port mode access"
    ],
    "ru": [
      "интерфейс f02 переключатель режима порта доступа"
    ]
  },
  {
    "time": [
      345.0,
      349.0
    ],
    "en": [
      "switch port port security that's all you"
    ],
    "ru": [
      "коммутатор порт безопасность порта это все, что вам нужно"
    ]
  },
  {
    "time": [
      349.0,
      351.0
    ],
    "en": [
      "have to do to initially configure port"
    ],
    "ru": [
      "необходимо сделать для первоначальной настройки порта"
    ]
  },
  {
    "time": [
      351.0,
      353.0
    ],
    "en": [
      "security"
    ],
    "ru": [
      "безопасность"
    ]
  },
  {
    "time": [
      353.0,
      356.0
    ],
    "en": [
      "Step five first asks us how many MAC"
    ],
    "ru": [
      "На пятом шаге нас сначала спрашивают, сколько MAC"
    ]
  },
  {
    "time": [
      356.0,
      358.0
    ],
    "en": [
      "addresses are allowed on a port security"
    ],
    "ru": [
      "адреса разрешены в безопасности порта"
    ]
  },
  {
    "time": [
      358.0,
      360.0
    ],
    "en": [
      "interface by default"
    ],
    "ru": [
      "интерфейс по умолчанию"
    ]
  },
  {
    "time": [
      360.0,
      363.0
    ],
    "en": [
      "well let's use a show command to find"
    ],
    "ru": [
      "ну давайте воспользуемся командой show, чтобы найти"
    ]
  },
  {
    "time": [
      363.0,
      366.0
    ],
    "en": [
      "out since we're already on switch to"
    ],
    "ru": [
      "из-за того, что мы уже находимся на переключении на"
    ]
  },
  {
    "time": [
      366.0,
      370.0
    ],
    "en": [
      "let's start here do show port security"
    ],
    "ru": [
      "давайте начнем здесь, покажем безопасность порта"
    ]
  },
  {
    "time": [
      370.0,
      374.0
    ],
    "en": [
      "look here next to fast ethernet zero to"
    ],
    "ru": [
      "посмотрите здесь, рядом с Fast Ethernet от нуля до"
    ]
  },
  {
    "time": [
      374.0,
      377.0
    ],
    "en": [
      "the max secure address count is 1"
    ],
    "ru": [
      "максимальное количество безопасных адресов - 1"
    ]
  },
  {
    "time": [
      377.0,
      380.0
    ],
    "en": [
      "remember that for the test that is the"
    ],
    "ru": [
      "помните, что для теста это"
    ]
  },
  {
    "time": [
      380.0,
      382.0
    ],
    "en": [
      "default number of MAC addresses allowed"
    ],
    "ru": [
      "количество разрешенных MAC-адресов по умолчанию"
    ]
  },
  {
    "time": [
      382.0,
      385.0
    ],
    "en": [
      "on the switchboard because this is the"
    ],
    "ru": [
      "на распределительном щите, потому что это"
    ]
  },
  {
    "time": [
      385.0,
      387.0
    ],
    "en": [
      "default we don't technically have to"
    ],
    "ru": [
      "по умолчанию мы технически не обязаны"
    ]
  },
  {
    "time": [
      387.0,
      390.0
    ],
    "en": [
      "configure this however it's often a good"
    ],
    "ru": [
      "настройте это, но часто это хорошо"
    ]
  },
  {
    "time": [
      390.0,
      392.0
    ],
    "en": [
      "idea to configure important settings"
    ],
    "ru": [
      "идея настроить важные параметры"
    ]
  },
  {
    "time": [
      392.0,
      394.0
    ],
    "en": [
      "like this just to be sure and for our"
    ],
    "ru": [
      "как это на всякий случай и для наших"
    ]
  },
  {
    "time": [
      394.0,
      396.0
    ],
    "en": [
      "purposes it's good to go through the"
    ],
    "ru": [
      "целей хорошо пройти через"
    ]
  },
  {
    "time": [
      396.0,
      399.0
    ],
    "en": [
      "motions to practice so use this command"
    ],
    "ru": [
      "движения для практики, поэтому используйте эту команду"
    ]
  },
  {
    "time": [
      399.0,
      404.0
    ],
    "en": [
      "switch port port security maximum one"
    ],
    "ru": [
      "порт коммутатора безопасность порта максимум один"
    ]
  },
  {
    "time": [
      404.0,
      409.0
    ],
    "en": [
      "now let's do it on switch 1 to switch"
    ],
    "ru": [
      "теперь давайте сделаем это на переключателе 1, чтобы переключить"
    ]
  },
  {
    "time": [
      409.0,
      414.0
    ],
    "en": [
      "port port security maximum 1 that's all"
    ],
    "ru": [
      "порт безопасность порта максимум 1 вот и все"
    ]
  },
  {
    "time": [
      414.0,
      417.0
    ],
    "en": [
      "for step 5"
    ],
    "ru": [
      "для шага 5"
    ]
  },
  {
    "time": [
      417.0,
      421.0
    ],
    "en": [
      "step six asks us another question what"
    ],
    "ru": [
      "Шаг шестой задает нам еще один вопрос, что"
    ]
  },
  {
    "time": [
      421.0,
      422.0
    ],
    "en": [
      "is the default action in the event of a"
    ],
    "ru": [
      "является действием по умолчанию в случае"
    ]
  },
  {
    "time": [
      422.0,
      426.0
    ],
    "en": [
      "port security violation of course when"
    ],
    "ru": [
      "нарушение безопасности порта, конечно, когда"
    ]
  },
  {
    "time": [
      426.0,
      428.0
    ],
    "en": [
      "we configure port security there has to"
    ],
    "ru": [
      "мы настраиваем безопасность порта там должен"
    ]
  },
  {
    "time": [
      428.0,
      430.0
    ],
    "en": [
      "be some action that the switch takes in"
    ],
    "ru": [
      "быть каким-то действием, которое выполняет переключатель"
    ]
  },
  {
    "time": [
      430.0,
      432.0
    ],
    "en": [
      "the event that the rules we configured"
    ],
    "ru": [
      "событие, которое мы настроили правила"
    ]
  },
  {
    "time": [
      432.0,
      434.0
    ],
    "en": [
      "are violated there are three"
    ],
    "ru": [
      "нарушены есть три"
    ]
  },
  {
    "time": [
      434.0,
      435.0
    ],
    "en": [
      "possibilities"
    ],
    "ru": [
      "возможности"
    ]
  },
  {
    "time": [
      435.0,
      439.0
    ],
    "en": [
      "the first is protect which drops traffic"
    ],
    "ru": [
      "первый - защита, которая сбрасывает трафик"
    ]
  },
  {
    "time": [
      439.0,
      441.0
    ],
    "en": [
      "from any MAC addresses which are not"
    ],
    "ru": [
      "с любых MAC-адресов, которые не"
    ]
  },
  {
    "time": [
      441.0,
      445.0
    ],
    "en": [
      "allowed on the port that's it it doesn't"
    ],
    "ru": [
      "разрешено на порте, это не так"
    ]
  },
  {
    "time": [
      445.0,
      447.0
    ],
    "en": [
      "shut down the interface or display any"
    ],
    "ru": [
      "выключить интерфейс или отобразить любой"
    ]
  },
  {
    "time": [
      447.0,
      449.0
    ],
    "en": [
      "messages it doesn't even increase the"
    ],
    "ru": [
      "сообщения это даже не увеличивает"
    ]
  },
  {
    "time": [
      449.0,
      452.0
    ],
    "en": [
      "violation counter that the switch keeps"
    ],
    "ru": [
      "счетчик нарушений, который держит переключатель"
    ]
  },
  {
    "time": [
      452.0,
      455.0
    ],
    "en": [
      "the second option is restrict which"
    ],
    "ru": [
      "второй вариант - ограничение, которое"
    ]
  },
  {
    "time": [
      455.0,
      457.0
    ],
    "en": [
      "again drops all traffic from MAC"
    ],
    "ru": [
      "снова сбрасывает весь трафик с MAC"
    ]
  },
  {
    "time": [
      457.0,
      460.0
    ],
    "en": [
      "addresses which aren't allowed it also"
    ],
    "ru": [
      "адреса, которые не разрешены"
    ]
  },
  {
    "time": [
      460.0,
      461.0
    ],
    "en": [
      "displays a message on the switch and"
    ],
    "ru": [
      "отображает сообщение на переключателе и"
    ]
  },
  {
    "time": [
      461.0,
      463.0
    ],
    "en": [
      "increases the violation counter on the"
    ],
    "ru": [
      "увеличивает счетчик нарушений на"
    ]
  },
  {
    "time": [
      463.0,
      468.0
    ],
    "en": [
      "switch the third one is shut down which"
    ],
    "ru": [
      "выключить третий выключен, который"
    ]
  },
  {
    "time": [
      468.0,
      469.0
    ],
    "en": [
      "puts the switchboard into an error"
    ],
    "ru": [
      "переводит коммутатор в состояние ошибки"
    ]
  },
  {
    "time": [
      469.0,
      472.0
    ],
    "en": [
      "disabled state effectively shutting down"
    ],
    "ru": [
      "отключенное состояние, эффективное отключение"
    ]
  },
  {
    "time": [
      472.0,
      474.0
    ],
    "en": [
      "the interface as well as increasing the"
    ],
    "ru": [
      "интерфейс, а также увеличение"
    ]
  },
  {
    "time": [
      474.0,
      477.0
    ],
    "en": [
      "violation counter make sure you know the"
    ],
    "ru": [
      "счетчик нарушений убедитесь, что вы знаете"
    ]
  },
  {
    "time": [
      477.0,
      479.0
    ],
    "en": [
      "differences between these three for the"
    ],
    "ru": [
      "различия между этими тремя для"
    ]
  },
  {
    "time": [
      479.0,
      482.0
    ],
    "en": [
      "test now as for which one is the default"
    ],
    "ru": [
      "проверьте сейчас, какой из них используется по умолчанию"
    ]
  },
  {
    "time": [
      482.0,
      486.0
    ],
    "en": [
      "we can use the same command as before do"
    ],
    "ru": [
      "мы можем использовать ту же команду, что и раньше do"
    ]
  },
  {
    "time": [
      486.0,
      491.0
    ],
    "en": [
      "show port security here at the end under"
    ],
    "ru": [
      "показать безопасность порта здесь, в конце под"
    ]
  },
  {
    "time": [
      491.0,
      494.0
    ],
    "en": [
      "security action it says shutdown so"
    ],
    "ru": [
      "Действие безопасности говорит о выключении, так что"
    ]
  },
  {
    "time": [
      494.0,
      496.0
    ],
    "en": [
      "there's our answer the default port"
    ],
    "ru": [
      "вот наш ответ порт по умолчанию"
    ]
  },
  {
    "time": [
      496.0,
      499.0
    ],
    "en": [
      "security violation action is shut down"
    ],
    "ru": [
      "действие нарушения безопасности отключено"
    ]
  },
  {
    "time": [
      499.0,
      502.0
    ],
    "en": [
      "another thing to remember for the test"
    ],
    "ru": [
      "еще одна вещь, которую нужно запомнить для теста"
    ]
  },
  {
    "time": [
      502.0,
      505.0
    ],
    "en": [
      "again even though this is default let's"
    ],
    "ru": [
      "снова, хотя это по умолчанию, давайте"
    ]
  },
  {
    "time": [
      505.0,
      507.0
    ],
    "en": [
      "go through the command to configure it"
    ],
    "ru": [
      "пройдите команду, чтобы настроить его"
    ]
  },
  {
    "time": [
      507.0,
      511.0
    ],
    "en": [
      "switch port port security violation now"
    ],
    "ru": [
      "нарушение безопасности порта порта коммутатора сейчас"
    ]
  },
  {
    "time": [
      511.0,
      513.0
    ],
    "en": [
      "I'll use the question mark to show you"
    ],
    "ru": [
      "Я использую вопросительный знак, чтобы показать вам"
    ]
  },
  {
    "time": [
      513.0,
      516.0
    ],
    "en": [
      "the options here are the three options I"
    ],
    "ru": [
      "варианты здесь три варианта I"
    ]
  },
  {
    "time": [
      516.0,
      518.0
    ],
    "en": [
      "mentioned earlier protect restrict"
    ],
    "ru": [
      "упоминалось ранее защитить ограничение"
    ]
  },
  {
    "time": [
      518.0,
      521.0
    ],
    "en": [
      "shutdown let's go with the default of"
    ],
    "ru": [
      "выключение по умолчанию"
    ]
  },
  {
    "time": [
      521.0,
      527.0
    ],
    "en": [
      "shutdown now on switch to switch port"
    ],
    "ru": [
      "выключение сейчас при переключении на порт переключения"
    ]
  },
  {
    "time": [
      527.0,
      533.0
    ],
    "en": [
      "port security violation shutdown"
    ],
    "ru": [
      "отключение нарушения безопасности порта"
    ]
  },
  {
    "time": [
      533.0,
      536.0
    ],
    "en": [
      "the steps are all complete but I want to"
    ],
    "ru": [
      "все шаги выполнены, но я хочу"
    ]
  },
  {
    "time": [
      536.0,
      539.0
    ],
    "en": [
      "show one more thing let me ping from pc1"
    ],
    "ru": [
      "покажи еще одну вещь, позволь мне пинговать с ПК1"
    ]
  },
  {
    "time": [
      539.0,
      546.0
    ],
    "en": [
      "to pc2 again ping 192.168.1 12 now I'll"
    ],
    "ru": [
      "к pc2 снова пинг 192.168.1 12 сейчас я"
    ]
  },
  {
    "time": [
      546.0,
      551.0
    ],
    "en": [
      "go on switch 1 and show port security"
    ],
    "ru": [
      "перейти на коммутатор 1 и показать безопасность порта"
    ]
  },
  {
    "time": [
      551.0,
      555.0
    ],
    "en": [
      "address as you can see this command"
    ],
    "ru": [
      "адрес, как вы можете видеть эту команду"
    ]
  },
  {
    "time": [
      555.0,
      558.0
    ],
    "en": [
      "shows the MAC address of PC 1 which"
    ],
    "ru": [
      "показывает MAC-адрес ПК 1, который"
    ]
  },
  {
    "time": [
      558.0,
      560.0
    ],
    "en": [
      "switch one has dynamically added as a"
    ],
    "ru": [
      "переключатель один динамически добавлен как"
    ]
  },
  {
    "time": [
      560.0,
      564.0
    ],
    "en": [
      "secure MAC address on Fast Ethernet 0 -"
    ],
    "ru": [
      "безопасный MAC-адрес в Fast Ethernet 0 -"
    ]
  },
  {
    "time": [
      564.0,
      568.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "это все для этой лаборатории, спасибо за"
    ]
  },
  {
    "time": [
      568.0,
      570.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      570.0,
      573.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      573.0,
      575.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      575.0,
      578.0
    ],
    "en": [
      "released weekly if you have requests for"
    ],
    "ru": [
      "выпускается еженедельно, если у вас есть запросы на"
    ]
  },
  {
    "time": [
      578.0,
      580.0
    ],
    "en": [
      "any specific labs let me know in the"
    ],
    "ru": [
      "любые конкретные лаборатории дайте мне знать в"
    ]
  },
  {
    "time": [
      580.0,
      583.0
    ],
    "en": [
      "comment section if you want to support"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      583.0,
      586.0
    ],
    "en": [
      "my channel I accept Bitcoin and etherion"
    ],
    "ru": [
      "мой канал я принимаю биткойны и эфирион"
    ]
  },
  {
    "time": [
      586.0,
      588.0
    ],
    "en": [
      "donations via the addresses in the"
    ],
    "ru": [
      "пожертвования через адреса в"
    ]
  },
  {
    "time": [
      588.0,
      591.0
    ],
    "en": [
      "description I am also a brave verified"
    ],
    "ru": [
      "описание я тоже храбрый проверил"
    ]
  },
  {
    "time": [
      591.0,
      594.0
    ],
    "en": [
      "publisher and accept bat or basic"
    ],
    "ru": [
      "издатель и принять летучую мышь или базовый"
    ]
  },
  {
    "time": [
      594.0,
      596.0
    ],
    "en": [
      "attention token donations in the brave"
    ],
    "ru": [
      "пожертвования токенов внимания в храбрых"
    ]
  },
  {
    "time": [
      596.0,
      596.0
    ],
    "en": [
      "browser"
    ],
    "ru": [
      "браузер"
    ]
  }
]