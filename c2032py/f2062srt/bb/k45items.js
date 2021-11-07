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
      "file from the link in the description if"
    ],
    "ru": [
      "файл по ссылке в описании, если"
    ]
  },
  {
    "time": [
      9.0,
      11.0
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
      11.0,
      13.0
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
      13.0,
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
      18.0
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
      18.0,
      22.0
    ],
    "en": [
      "channel for more labs like this this lab"
    ],
    "ru": [
      "канал для других лабораторий, подобных этой"
    ]
  },
  {
    "time": [
      22.0,
      24.0
    ],
    "en": [
      "is really a review of material we have"
    ],
    "ru": [
      "это действительно обзор материала, который у нас есть"
    ]
  },
  {
    "time": [
      24.0,
      28.0
    ],
    "en": [
      "practiced in the icnd1 labs VLANs trunks"
    ],
    "ru": [
      "практикуется в магистральных сетях VLAN лабораторий icnd1"
    ]
  },
  {
    "time": [
      28.0,
      32.0
    ],
    "en": [
      "and DTP however these topics are in the"
    ],
    "ru": [
      "и DTP, однако эти темы находятся в"
    ]
  },
  {
    "time": [
      32.0,
      36.0
    ],
    "en": [
      "icnd2 exam topics as well so let's"
    ],
    "ru": [
      "темы экзамена icnd2, так что давайте"
    ]
  },
  {
    "time": [
      36.0,
      40.0
    ],
    "en": [
      "review them one more time the first step"
    ],
    "ru": [
      "просмотрите их еще раз, первый шаг"
    ]
  },
  {
    "time": [
      40.0,
      43.0
    ],
    "en": [
      "is to disable negotiation of trunk ports"
    ],
    "ru": [
      "отключить согласование магистральных портов"
    ]
  },
  {
    "time": [
      43.0,
      45.0
    ],
    "en": [
      "and manually configure the mode of each"
    ],
    "ru": [
      "и вручную настроить режим каждого"
    ]
  },
  {
    "time": [
      45.0,
      49.0
    ],
    "en": [
      "switch port in use DTP can dynamically"
    ],
    "ru": [
      "используемый порт коммутатора DTP может динамически"
    ]
  },
  {
    "time": [
      49.0,
      50.0
    ],
    "en": [
      "determine whether a switch port should"
    ],
    "ru": [
      "определить, должен ли порт коммутатора"
    ]
  },
  {
    "time": [
      50.0,
      54.0
    ],
    "en": [
      "be a trunk or an access port for example"
    ],
    "ru": [
      "быть транком или портом доступа, например"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "if you connect a switch port to a port"
    ],
    "ru": [
      "если вы подключаете порт коммутатора к порту"
    ]
  },
  {
    "time": [
      56.0,
      58.0
    ],
    "en": [
      "on another switch that is a trunk the"
    ],
    "ru": [
      "на другом коммутаторе, который является магистралью,"
    ]
  },
  {
    "time": [
      58.0,
      60.0
    ],
    "en": [
      "switch port will become a trunk as well"
    ],
    "ru": [
      "порт коммутатора также станет магистралью"
    ]
  },
  {
    "time": [
      60.0,
      63.0
    ],
    "en": [
      "let's check on switch 1 and switch 2 I"
    ],
    "ru": [
      "давайте проверим на переключателе 1 и переключателе 2 I"
    ]
  },
  {
    "time": [
      63.0,
      65.0
    ],
    "en": [
      "haven't done any configuration yet so"
    ],
    "ru": [
      "еще не сделали никакой конфигурации, так что"
    ]
  },
  {
    "time": [
      65.0,
      69.0
    ],
    "en": [
      "DTP is enabled on both and there should"
    ],
    "ru": [
      "DTP включен на обоих и должен"
    ]
  },
  {
    "time": [
      69.0,
      71.0
    ],
    "en": [
      "be an access mode at the moment I'll go"
    ],
    "ru": [
      "быть режимом доступа на данный момент я пойду"
    ]
  },
  {
    "time": [
      71.0,
      78.0
    ],
    "en": [
      "on switch 1 enable show interface g0 to"
    ],
    "ru": [
      "на переключателе 1 включить показ интерфейса g0 для"
    ]
  },
  {
    "time": [
      78.0,
      83.0
    ],
    "en": [
      "switchboard see it's in dynamic auto"
    ],
    "ru": [
      "Коммутатор видит, что он в динамическом автоматическом режиме"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "mode by default meaning if it's"
    ],
    "ru": [
      "режим по умолчанию означает, что если он"
    ]
  },
  {
    "time": [
      85.0,
      87.0
    ],
    "en": [
      "connected to a trunk or a port in"
    ],
    "ru": [
      "подключен к транку или порту в"
    ]
  },
  {
    "time": [
      87.0,
      90.0
    ],
    "en": [
      "dynamic desireable mode it will become a"
    ],
    "ru": [
      "динамический желаемый режим он станет"
    ]
  },
  {
    "time": [
      90.0,
      94.0
    ],
    "en": [
      "trunk port as well however really these"
    ],
    "ru": [
      "магистральный порт, но на самом деле эти"
    ]
  },
  {
    "time": [
      94.0,
      95.0
    ],
    "en": [
      "configuration should all be done"
    ],
    "ru": [
      "конфигурация должна быть сделана"
    ]
  },
  {
    "time": [
      95.0,
      96.0
    ],
    "en": [
      "manually"
    ],
    "ru": [
      "вручную"
    ]
  },
  {
    "time": [
      96.0,
      99.0
    ],
    "en": [
      "for security reasons also Saudi TP is"
    ],
    "ru": [
      "по соображениям безопасности также саудовский ТП"
    ]
  },
  {
    "time": [
      99.0,
      101.0
    ],
    "en": [
      "something you should always disable just"
    ],
    "ru": [
      "то, что вы всегда должны отключать, просто"
    ]
  },
  {
    "time": [
      101.0,
      105.0
    ],
    "en": [
      "to show you the commands however compte"
    ],
    "ru": [
      "чтобы показать вам команды, однако compte"
    ]
  },
  {
    "time": [
      105.0,
      110.0
    ],
    "en": [
      "interface g0 to switch port mode dynamic"
    ],
    "ru": [
      "интерфейс g0 для переключения режима порта динамически"
    ]
  },
  {
    "time": [
      110.0,
      115.0
    ],
    "en": [
      "and let's check the options auto is as I"
    ],
    "ru": [
      "и давайте проверим параметры авто как я"
    ]
  },
  {
    "time": [
      115.0,
      117.0
    ],
    "en": [
      "said before it will become a trunk port"
    ],
    "ru": [
      "сказал, прежде чем он станет магистральным портом"
    ]
  },
  {
    "time": [
      117.0,
      119.0
    ],
    "en": [
      "if connected to a dynamic desirable port"
    ],
    "ru": [
      "если подключен к желаемому динамическому порту"
    ]
  },
  {
    "time": [
      119.0,
      122.0
    ],
    "en": [
      "and desirable mode actively tries to"
    ],
    "ru": [
      "и желаемый режим активно пытается"
    ]
  },
  {
    "time": [
      122.0,
      124.0
    ],
    "en": [
      "form trunk ports with both auto and"
    ],
    "ru": [
      "формируют магистральные порты как с авто, так и с"
    ]
  },
  {
    "time": [
      124.0,
      129.0
    ],
    "en": [
      "other desirable mode ports let's do the"
    ],
    "ru": [
      "другие желаемые порты режима давайте сделаем"
    ]
  },
  {
    "time": [
      129.0,
      131.0
    ],
    "en": [
      "smart thing and disable DTP then"
    ],
    "ru": [
      "умная вещь и отключите DTP тогда"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "manually set the mode of each switch"
    ],
    "ru": [
      "вручную установить режим каждого переключателя"
    ]
  },
  {
    "time": [
      133.0,
      133.0
    ],
    "en": [
      "port"
    ],
    "ru": [
      "порт"
    ]
  },
  {
    "time": [
      133.0,
      138.0
    ],
    "en": [
      "so switchport no negotiate that disables"
    ],
    "ru": [
      "так что switchport без согласования, который отключает"
    ]
  },
  {
    "time": [
      138.0,
      141.0
    ],
    "en": [
      "DTP switchport mode trunk"
    ],
    "ru": [
      "Транк в режиме коммутации DTP"
    ]
  },
  {
    "time": [
      141.0,
      143.0
    ],
    "en": [
      "okay now let's configure switch ones"
    ],
    "ru": [
      "хорошо, теперь давайте настроим переключатели"
    ]
  },
  {
    "time": [
      143.0,
      147.0
    ],
    "en": [
      "other ports g1 should be a trunk as it"
    ],
    "ru": [
      "другие порты g1 должны быть транком, так как"
    ]
  },
  {
    "time": [
      147.0,
      151.0
    ],
    "en": [
      "leads to r1 for inter VLAN routing and F"
    ],
    "ru": [
      "приводит к r1 для маршрутизации между VLAN и F"
    ]
  },
  {
    "time": [
      151.0,
      154.0
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
      154.0
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
      154.0,
      159.0
    ],
    "en": [
      "interface G 0 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейс G 0 1 режим порта коммутатора магистраль"
    ]
  },
  {
    "time": [
      159.0,
      163.0
    ],
    "en": [
      "switch port no negotiate interface range"
    ],
    "ru": [
      "порт коммутатора без согласования диапазона интерфейса"
    ]
  },
  {
    "time": [
      163.0,
      170.0
    ],
    "en": [
      "F 0 1 2 - switch port mode access switch"
    ],
    "ru": [
      "F 0 1 2 - переключатель режима порта коммутатора"
    ]
  },
  {
    "time": [
      170.0,
      174.0
    ],
    "en": [
      "port no negotiate ok let's go to switch"
    ],
    "ru": [
      "порт нет согласования хорошо давай перейдем к переключению"
    ]
  },
  {
    "time": [
      174.0,
      178.0
    ],
    "en": [
      "to now enable look at this message we"
    ],
    "ru": [
      "чтобы теперь включить, посмотрите это сообщение, мы"
    ]
  },
  {
    "time": [
      178.0,
      181.0
    ],
    "en": [
      "got on switch to blocking Gigabit"
    ],
    "ru": [
      "перешел на блокировку Gigabit"
    ]
  },
  {
    "time": [
      181.0,
      185.0
    ],
    "en": [
      "Ethernet 0 1 inconsistent port type"
    ],
    "ru": [
      "Ethernet 0 1 несовместимый тип порта"
    ]
  },
  {
    "time": [
      185.0,
      189.0
    ],
    "en": [
      "switch ones G 0 2 interface is a trunk"
    ],
    "ru": [
      "переключить их G 0 2 интерфейс является магистралью"
    ]
  },
  {
    "time": [
      189.0,
      193.0
    ],
    "en": [
      "however because DTP is disabled it's not"
    ],
    "ru": [
      "однако, поскольку DTP отключен, это не"
    ]
  },
  {
    "time": [
      193.0,
      195.0
    ],
    "en": [
      "sending packets to switch to so that"
    ],
    "ru": [
      "отправка пакетов для переключения, чтобы"
    ]
  },
  {
    "time": [
      195.0,
      197.0
    ],
    "en": [
      "switch twos dynamic G user 1 interface"
    ],
    "ru": [
      "переключатель двух динамических G пользовательский 1 интерфейс"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "can become a trunk as well therefore"
    ],
    "ru": [
      "тоже может стать стволом поэтому"
    ]
  },
  {
    "time": [
      200.0,
      203.0
    ],
    "en": [
      "well switch ones G 0 2 interface is a"
    ],
    "ru": [
      "хорошо поменять местами G 0 2 интерфейс - это"
    ]
  },
  {
    "time": [
      203.0,
      206.0
    ],
    "en": [
      "trunk switch to SG 0 1 interface remains"
    ],
    "ru": [
      "магистральный переключатель на SG 0 1 интерфейс остается"
    ]
  },
  {
    "time": [
      206.0,
      208.0
    ],
    "en": [
      "an access port so there is an"
    ],
    "ru": [
      "порт доступа, так что есть"
    ]
  },
  {
    "time": [
      208.0,
      211.0
    ],
    "en": [
      "inconsistent port type let's make this a"
    ],
    "ru": [
      "несовместимый тип порта, давайте сделаем это"
    ]
  },
  {
    "time": [
      211.0,
      217.0
    ],
    "en": [
      "trunk to compte interface G 0 1 switch"
    ],
    "ru": [
      "магистраль к интерфейсу compte G 0 1 переключатель"
    ]
  },
  {
    "time": [
      217.0,
      220.0
    ],
    "en": [
      "port mode trunk switch port no negotiate"
    ],
    "ru": [
      "порт режим магистрального коммутатора порт без согласования"
    ]
  },
  {
    "time": [
      220.0,
      225.0
    ],
    "en": [
      "okay next interface range F 0 1 - 2"
    ],
    "ru": [
      "хорошо следующий диапазон интерфейса F 0 1-2"
    ]
  },
  {
    "time": [
      225.0,
      229.0
    ],
    "en": [
      "switch port mode access switch port no"
    ],
    "ru": [
      "порт коммутатора режим доступа порт коммутатора нет"
    ]
  },
  {
    "time": [
      229.0,
      234.0
    ],
    "en": [
      "negotiate okay that's all for step 1"
    ],
    "ru": [
      "договориться хорошо, это все для шага 1"
    ]
  },
  {
    "time": [
      234.0,
      237.0
    ],
    "en": [
      "step 2 is to assign the pcs to the"
    ],
    "ru": [
      "Шаг 2 - назначить ПК на"
    ]
  },
  {
    "time": [
      237.0,
      242.0
    ],
    "en": [
      "correct VLANs pc1 & pc2 P&V line 13 and"
    ],
    "ru": [
      "правильные VLAN pc1 и pc2 P&V line 13 и"
    ]
  },
  {
    "time": [
      242.0,
      247.0
    ],
    "en": [
      "PC 2 and PC for should be in VLAN 24 I'm"
    ],
    "ru": [
      "ПК 2 и ПК должны быть в VLAN 24."
    ]
  },
  {
    "time": [
      247.0,
      250.0
    ],
    "en": [
      "on switched to now so let's assign PC 3"
    ],
    "ru": [
      "включен сейчас, поэтому давайте назначим ПК 3"
    ]
  },
  {
    "time": [
      250.0,
      252.0
    ],
    "en": [
      "and PC for to the correct VLANs"
    ],
    "ru": [
      "и ПК для правильных VLAN"
    ]
  },
  {
    "time": [
      252.0,
      257.0
    ],
    "en": [
      "interface F 0 1 switch port access VLAN"
    ],
    "ru": [
      "интерфейс F 0 1 порт коммутатора доступа VLAN"
    ]
  },
  {
    "time": [
      257.0,
      262.0
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
      257.0,
      262.0
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
      262.0,
      267.0
    ],
    "en": [
      "VLAN 24 now let's go back to switch 1"
    ],
    "ru": [
      "VLAN 24 теперь вернемся к коммутатору 1"
    ]
  },
  {
    "time": [
      267.0,
      273.0
    ],
    "en": [
      "interface f01 switch port access VLAN 13"
    ],
    "ru": [
      "интерфейс f01 коммутатор порт доступа VLAN 13"
    ]
  },
  {
    "time": [
      273.0,
      280.0
    ],
    "en": [
      "interface f02 switch for access VLAN 24"
    ],
    "ru": [
      "интерфейсный коммутатор f02 для доступа к VLAN 24"
    ]
  },
  {
    "time": [
      280.0,
      283.0
    ],
    "en": [
      "okay we have assigned the PCs to the"
    ],
    "ru": [
      "хорошо, мы назначили ПК на"
    ]
  },
  {
    "time": [
      283.0,
      286.0
    ],
    "en": [
      "correct VLANs r1 has already been"
    ],
    "ru": [
      "правильные VLAN r1 уже были"
    ]
  },
  {
    "time": [
      286.0,
      288.0
    ],
    "en": [
      "configured for inter VLAN routing let's"
    ],
    "ru": [
      "настроен для маршрутизации между VLAN, давайте"
    ]
  },
  {
    "time": [
      288.0,
      293.0
    ],
    "en": [
      "just check the configuration enable"
    ],
    "ru": [
      "просто проверьте конфигурацию включить"
    ]
  },
  {
    "time": [
      293.0,
      298.0
    ],
    "en": [
      "shall run the gig 0/0 interface itself"
    ],
    "ru": [
      "должен запускать сам интерфейс гиг 0/0"
    ]
  },
  {
    "time": [
      298.0,
      300.0
    ],
    "en": [
      "has no IP address but I've configured"
    ],
    "ru": [
      "не имеет IP-адреса, но я настроил"
    ]
  },
  {
    "time": [
      300.0,
      304.0
    ],
    "en": [
      "two sub interfaces one for each VLAN the"
    ],
    "ru": [
      "два субинтерфейса по одному для каждой VLAN"
    ]
  },
  {
    "time": [
      304.0,
      307.0
    ],
    "en": [
      "encapsulation dot1q command sets the"
    ],
    "ru": [
      "команда encapsulation dot1q устанавливает"
    ]
  },
  {
    "time": [
      307.0,
      310.0
    ],
    "en": [
      "VLAN of the sub interface thirteen and"
    ],
    "ru": [
      "VLAN субинтерфейса тринадцать и"
    ]
  },
  {
    "time": [
      310.0,
      312.0
    ],
    "en": [
      "fourteen and then we set the IP address"
    ],
    "ru": [
      "четырнадцать, а затем мы устанавливаем IP-адрес"
    ]
  },
  {
    "time": [
      312.0,
      315.0
    ],
    "en": [
      "for the sub interface make sure these"
    ],
    "ru": [
      "для вспомогательного интерфейса убедитесь, что эти"
    ]
  },
  {
    "time": [
      315.0,
      317.0
    ],
    "en": [
      "addresses are set as the default"
    ],
    "ru": [
      "адреса установлены по умолчанию"
    ]
  },
  {
    "time": [
      317.0,
      320.0
    ],
    "en": [
      "gateways for the pcs I already configure"
    ],
    "ru": [
      "шлюзы для ПК, которые я уже настроил"
    ]
  },
  {
    "time": [
      320.0,
      322.0
    ],
    "en": [
      "the pcs so everything should work fine"
    ],
    "ru": [
      "ПК, так что все должно работать нормально"
    ]
  },
  {
    "time": [
      322.0,
      325.0
    ],
    "en": [
      "now let's try some pings from pc1 to"
    ],
    "ru": [
      "теперь давайте попробуем пинги с pc1 на"
    ]
  },
  {
    "time": [
      325.0,
      329.0
    ],
    "en": [
      "make sure we have connectivity let's"
    ],
    "ru": [
      "убедитесь, что у нас есть подключение, давайте"
    ]
  },
  {
    "time": [
      329.0,
      331.0
    ],
    "en": [
      "ping PC three first which is in the same"
    ],
    "ru": [
      "пингует компьютер три первых, который находится в том же"
    ]
  },
  {
    "time": [
      331.0,
      334.0
    ],
    "en": [
      "VLAN but connected to a different switch"
    ],
    "ru": [
      "VLAN, но подключен к другому коммутатору"
    ]
  },
  {
    "time": [
      334.0,
      345.0
    ],
    "en": [
      "pink 1300 13 it works okay and now let's"
    ],
    "ru": [
      "розовый 1300 13 работает нормально а теперь давайте"
    ]
  },
  {
    "time": [
      345.0,
      348.0
    ],
    "en": [
      "ping PC 2 which is in a different VLAN"
    ],
    "ru": [
      "ping PC 2, который находится в другой VLAN"
    ]
  },
  {
    "time": [
      348.0,
      353.0
    ],
    "en": [
      "but connected to the same switch ping"
    ],
    "ru": [
      "но подключил к тому же свичу пинг"
    ]
  },
  {
    "time": [
      353.0,
      362.0
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
      353.0,
      362.0
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
      362.0,
      365.0
    ],
    "en": [
      "routing is working let's try to ping PC"
    ],
    "ru": [
      "маршрутизация работает давайте попробуем пинговать ПК"
    ]
  },
  {
    "time": [
      365.0,
      368.0
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
      365.0,
      368.0
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
      368.0,
      371.0
    ],
    "en": [
      "connected to a different switch ping"
    ],
    "ru": [
      "подключен к другому коммутатору ping"
    ]
  },
  {
    "time": [
      371.0,
      378.0
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
      371.0,
      378.0
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
      378.0,
      383.0
    ],
    "en": [
      "it works too in this lab we took a brief"
    ],
    "ru": [
      "это тоже работает в этой лаборатории, мы кратко"
    ]
  },
  {
    "time": [
      383.0,
      386.0
    ],
    "en": [
      "look at DTP disabled it and configured"
    ],
    "ru": [
      "посмотрите на DTP отключил его и настроил"
    ]
  },
  {
    "time": [
      386.0,
      389.0
    ],
    "en": [
      "VLANs and switch port mode that's all"
    ],
    "ru": [
      "VLAN и режим порта коммутатора, вот и все"
    ]
  },
  {
    "time": [
      389.0,
      395.0
    ],
    "en": [
      "for this lab thank you for watching I"
    ],
    "ru": [
      "за эту лабораторию спасибо за просмотр я"
    ]
  },
  {
    "time": [
      395.0,
      397.0
    ],
    "en": [
      "hope this lab and video have been"
    ],
    "ru": [
      "надеюсь, что эта лаборатория и видео были"
    ]
  },
  {
    "time": [
      397.0,
      399.0
    ],
    "en": [
      "helpful for you please subscribe for"
    ],
    "ru": [
      "полезно для вас, пожалуйста, подпишитесь на"
    ]
  },
  {
    "time": [
      399.0,
      401.0
    ],
    "en": [
      "future labs like this which will be"
    ],
    "ru": [
      "будущие лаборатории, подобные этой, которые будут"
    ]
  },
  {
    "time": [
      401.0,
      404.0
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
      404.0,
      406.0
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
      406.0,
      409.0
    ],
    "en": [
      "comments section if you want to support"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "my channel I accept Bitcoin and"
    ],
    "ru": [
      "мой канал я принимаю биткойны и"
    ]
  },
  {
    "time": [
      411.0,
      413.0
    ],
    "en": [
      "aetherium donations via the addresses in"
    ],
    "ru": [
      "пожертвования эфириума через адреса в"
    ]
  },
  {
    "time": [
      413.0,
      416.0
    ],
    "en": [
      "the description I am also a brave"
    ],
    "ru": [
      "по описанию я тоже храбрый"
    ]
  },
  {
    "time": [
      416.0,
      419.0
    ],
    "en": [
      "verified publisher and accept bat or"
    ],
    "ru": [
      "проверенный издатель и принять bat или"
    ]
  },
  {
    "time": [
      419.0,
      421.0
    ],
    "en": [
      "basic attention token donations in the"
    ],
    "ru": [
      "основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      421.0,
      421.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]