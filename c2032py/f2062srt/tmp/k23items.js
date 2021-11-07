let objs = [
  {
    "time": [
      0.0,
      8.525895
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
      8.525895,
      15.517728
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
      15.517728,
      20.050123
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
      20.050123,
      30.102144
    ],
    "en": [
      "this lab is really a review of material we have practiced in the icnd1 labs VLANs trunks and DTP"
    ],
    "ru": [
      "Эта лабораторная работа представляет собой действительно обзор материала, который мы практиковали в лабораториях icnd1 в магистралях VLAN и DTP."
    ]
  },
  {
    "time": [
      30.102144,
      35.54406
    ],
    "en": [
      "however these topics are in the icnd2 exam topics as well"
    ],
    "ru": [
      "однако эти темы также находятся в темах экзамена icnd2"
    ]
  },
  {
    "time": [
      35.54406,
      37.961851
    ],
    "en": [
      "so let's review them one more time"
    ],
    "ru": [
      "так что давайте рассмотрим их еще раз"
    ]
  },
  {
    "time": [
      37.961851,
      46.792496
    ],
    "en": [
      "the first step is to disable negotiation of trunk ports and manually configure the mode of each switch port in use"
    ],
    "ru": [
      "первый шаг - отключить согласование магистральных портов и вручную настроить режим каждого используемого порта коммутатора."
    ]
  },
  {
    "time": [
      46.792496,
      52.785037
    ],
    "en": [
      "DTP can dynamically determine whether a switch port should be a trunk or an access port"
    ],
    "ru": [
      "DTP может динамически определять, должен ли порт коммутатора быть магистральным или портом доступа."
    ]
  },
  {
    "time": [
      52.785037,
      58.487203
    ],
    "en": [
      "for example if you connect a switch port to a port on another switch that is a trunk"
    ],
    "ru": [
      "например, если вы подключаете порт коммутатора к порту другого коммутатора, который является магистралью"
    ]
  },
  {
    "time": [
      58.487203,
      60.70389
    ],
    "en": [
      "the switch port will become a trunk as well"
    ],
    "ru": [
      "порт коммутатора также станет магистралью"
    ]
  },
  {
    "time": [
      60.70389,
      63.868119
    ],
    "en": [
      "let's check on switch 1 and switch 2"
    ],
    "ru": [
      "давайте проверим на переключателе 1 и переключателе 2"
    ]
  },
  {
    "time": [
      63.868119,
      70.663619
    ],
    "en": [
      "I haven't done any configuration yet so DTP is enabled on both and there should be an access mode at the moment"
    ],
    "ru": [
      "Я еще не выполнял никаких настроек, поэтому DTP включен на обоих, и на данный момент должен быть режим доступа"
    ]
  },
  {
    "time": [
      70.663619,
      85.325368
    ],
    "en": [
      "I'll go on switch 1 enable show interface g0 2 switchport see it's in dynamic auto mode by default"
    ],
    "ru": [
      "Я перейду к переключателю 1, включу show interface g0 2 switchport, по умолчанию он в динамическом автоматическом режиме"
    ]
  },
  {
    "time": [
      85.325368,
      91.516388
    ],
    "en": [
      "meaning if it's connected to a trunk or a port in dynamic desireable mode it will become a trunk port as well"
    ],
    "ru": [
      "это означает, что если он подключен к магистрали или порту в желаемом динамическом режиме, он также станет магистральным портом"
    ]
  },
  {
    "time": [
      91.516388,
      98.036325
    ],
    "en": [
      "however really these configuration should all be done manually for security reasons also"
    ],
    "ru": [
      "однако на самом деле эти настройки должны выполняться вручную из соображений безопасности."
    ]
  },
  {
    "time": [
      98.036325,
      100.847198
    ],
    "en": [
      "so DTP is something you should always disable"
    ],
    "ru": [
      "поэтому DTP - это то, что вы всегда должны отключать"
    ]
  },
  {
    "time": [
      100.847198,
      111.09353
    ],
    "en": [
      "just to show you the commands however conf t interface g0 2 switch port mode dynamic"
    ],
    "ru": [
      "просто чтобы показать вам команды, однако conf t interface g0 2 switch port mode dynamic"
    ]
  },
  {
    "time": [
      111.09353,
      120.080509
    ],
    "en": [
      "and let's check the options auto is as I said before it will become a trunk port if connected to a dynamic desirable port"
    ],
    "ru": [
      "и давайте проверим параметры auto, как я сказал ранее, он станет магистральным портом, если подключен к желаемому динамическому порту."
    ]
  },
  {
    "time": [
      120.080509,
      126.198009
    ],
    "en": [
      "and desirable mode actively tries to form trunk ports with both auto and other desirable mode ports"
    ],
    "ru": [
      "и желаемый режим активно пытается сформировать магистральные порты как с автоматическим, так и с другим желаемым режимом портов"
    ]
  },
  {
    "time": [
      126.198009,
      131.65155
    ],
    "en": [
      "let's do the smart thing and disable DTP"
    ],
    "ru": [
      "давайте сделаем умную вещь и отключим DTP"
    ]
  },
  {
    "time": [
      131.65155,
      134.066196
    ],
    "en": [
      "then manually set the mode of each switch port"
    ],
    "ru": [
      "затем вручную установите режим каждого порта коммутатора"
    ]
  },
  {
    "time": [
      134.066196,
      137.557259
    ],
    "en": [
      "so switchport no negotiate"
    ],
    "ru": [
      "так что Switchport никаких переговоров"
    ]
  },
  {
    "time": [
      137.557259,
      139.61105
    ],
    "en": [
      "that disables DTP"
    ],
    "ru": [
      "что отключает DTP"
    ]
  },
  {
    "time": [
      139.61105,
      141.870279
    ],
    "en": [
      "switchport mode trunk"
    ],
    "ru": [
      "соединительная линия в режиме коммутационного порта"
    ]
  },
  {
    "time": [
      141.870279,
      145.072404
    ],
    "en": [
      "okay now let's configure switch ones other ports"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим переключатели на другие порты"
    ]
  },
  {
    "time": [
      145.072404,
      150.474008
    ],
    "en": [
      "g1 should be a trunk as it leads to r1 for inter VLAN routing"
    ],
    "ru": [
      "g1 должен быть транком, так как он ведет к r1 для маршрутизации между VLAN"
    ]
  },
  {
    "time": [
      150.474008,
      154.399362
    ],
    "en": [
      "and F 0 1 and F 0 2 should be access ports"
    ],
    "ru": [
      "и F 0 1 и F 0 2 должны быть портами доступа"
    ]
  },
  {
    "time": [
      154.399362,
      159.419174
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
      159.419174,
      161.846653
    ],
    "en": [
      "switch port no negotiate"
    ],
    "ru": [
      "порт коммутатора не согласовывается"
    ]
  },
  {
    "time": [
      161.846653,
      171.841985
    ],
    "en": [
      "interface range F 0 1 to 2 switch port mode access switch port no negotiate"
    ],
    "ru": [
      "диапазон интерфейса F 0 1-2 порта коммутатора режим порта коммутатора нет согласования"
    ]
  },
  {
    "time": [
      171.841985,
      175.477964
    ],
    "en": [
      "ok let's go to switch to now"
    ],
    "ru": [
      "хорошо, давай перейдем к сейчас"
    ]
  },
  {
    "time": [
      175.477964,
      183.551984
    ],
    "en": [
      "enable look at this message we got on switch 2 blocking Gigabit Ethernet 0 1"
    ],
    "ru": [
      "включить, посмотрите это сообщение, которое мы получили на коммутаторе 2, блокирующем Gigabit Ethernet 0 1"
    ]
  },
  {
    "time": [
      183.551984,
      185.810463
    ],
    "en": [
      "inconsistent port type"
    ],
    "ru": [
      "несовместимый тип порта"
    ]
  },
  {
    "time": [
      185.810463,
      189.644129
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
      189.644129,
      199.545753
    ],
    "en": [
      "however because DTP is disabled it's not sending packets to switch 2 so that switch 2s dynamic G user 1 interface can become a trunk as well"
    ],
    "ru": [
      "однако, поскольку DTP отключен, он не отправляет пакеты на коммутатор 2, поэтому динамический интерфейс пользователя 1 G коммутатора 2 также может стать магистралью"
    ]
  },
  {
    "time": [
      199.545753,
      207.937398
    ],
    "en": [
      "therefore well switch 1s G 0 2 interface is a trunk switch 2 SG 0 1 interface remains an access port"
    ],
    "ru": [
      "поэтому хорошо коммутатор 1s G 0 2 интерфейс является магистральным коммутатором 2 SG 0 1 интерфейс остается портом доступа"
    ]
  },
  {
    "time": [
      207.937398,
      210.071481
    ],
    "en": [
      "so there is an inconsistent port type"
    ],
    "ru": [
      "поэтому существует несовместимый тип порта"
    ]
  },
  {
    "time": [
      210.071481,
      212.330189
    ],
    "en": [
      "let's make this a trunk too"
    ],
    "ru": [
      "давай сделаем это тоже чемоданом"
    ]
  },
  {
    "time": [
      212.330189,
      220.941314
    ],
    "en": [
      "conf t interface G 0 1 switch port mode trunk switch port no negotiate"
    ],
    "ru": [
      "conf t interface G 0 1 порт коммутатора режим магистрального порта коммутатора нет согласования"
    ]
  },
  {
    "time": [
      220.941314,
      230.474147
    ],
    "en": [
      "okay next interface range F 0 1 - 2 switch port mode access switch port no negotiate"
    ],
    "ru": [
      "нормально следующий диапазон интерфейса F 0 1-2 порт коммутатора режим порта коммутатора нет согласования"
    ]
  },
  {
    "time": [
      230.474147,
      232.922126
    ],
    "en": [
      "okay that's all for step 1"
    ],
    "ru": [
      "хорошо, это все для шага 1"
    ]
  },
  {
    "time": [
      232.922126,
      238.868814
    ],
    "en": [
      "step 2 is to assign the pcs to the correct VLANs"
    ],
    "ru": [
      "Шаг 2 - назначить ПК правильным сетям VLAN."
    ]
  },
  {
    "time": [
      238.868814,
      246.205646
    ],
    "en": [
      "pc1 & pc2 should be in VLAN 13 and PC 2 and PC 4 should be in VLAN 24"
    ],
    "ru": [
      "pc1 и pc2 должны быть в VLAN 13, а ПК 2 и ПК 4 должны быть в VLAN 24."
    ]
  },
  {
    "time": [
      246.205646,
      252.199
    ],
    "en": [
      "I'm on switched 2 now so let's assign PC 3 and PC 4 to the correct VLANs"
    ],
    "ru": [
      "Я сейчас на коммутации 2, поэтому давайте назначим ПК 3 и ПК 4 правильным VLAN."
    ]
  },
  {
    "time": [
      252.199,
      264.020291
    ],
    "en": [
      "interface F 0 1 switch port access VLAN 13 interface F 0 2 switch port access VLAN 24"
    ],
    "ru": [
      "интерфейс F 0 1 доступ к порту коммутатора VLAN 13 интерфейс F 0 2 доступ к порту коммутатора VLAN 24"
    ]
  },
  {
    "time": [
      264.020291,
      266.739895
    ],
    "en": [
      "now let's go back to switch 1"
    ],
    "ru": [
      "теперь вернемся к переключателю 1"
    ]
  },
  {
    "time": [
      266.739895,
      278.500749
    ],
    "en": [
      "interface f01 switch port access VLAN 13 interface f02 switch for access VLAN 24"
    ],
    "ru": [
      "интерфейс f01 коммутатор порт доступа VLAN 13 интерфейс f02 коммутатор доступа VLAN 24"
    ]
  },
  {
    "time": [
      278.500749,
      284.480728
    ],
    "en": [
      "okay we have assigned the PCs to the correct VLANs"
    ],
    "ru": [
      "хорошо, мы назначили ПК правильным VLAN"
    ]
  },
  {
    "time": [
      284.480728,
      288.682457
    ],
    "en": [
      "r1 has already been configured for inter VLAN routing"
    ],
    "ru": [
      "r1 уже настроен для маршрутизации между VLAN"
    ]
  },
  {
    "time": [
      288.682457,
      290.232352
    ],
    "en": [
      "let's just check the configuration"
    ],
    "ru": [
      "давайте просто проверим конфигурацию"
    ]
  },
  {
    "time": [
      290.232352,
      303.688913
    ],
    "en": [
      "enable show run the gig 0/0 interface itself has no IP address but I've configured two sub interfaces one for each VLAN"
    ],
    "ru": [
      "enable show run сам интерфейс gig 0/0 не имеет IP-адреса, но я настроил два дополнительных интерфейса по одному для каждой VLAN"
    ]
  },
  {
    "time": [
      303.688913,
      313.852413
    ],
    "en": [
      "the encapsulation dot1q command sets the VLAN of the sub interface thirteen and fourteen and then we set the IP address for the sub interface"
    ],
    "ru": [
      "команда encapsulation dot1q устанавливает VLAN субинтерфейса тринадцать и четырнадцать, а затем мы устанавливаем IP-адрес для субинтерфейса"
    ]
  },
  {
    "time": [
      313.852413,
      318.7331
    ],
    "en": [
      "make sure these addresses are set as the default gateways for the pcs"
    ],
    "ru": [
      "убедитесь, что эти адреса установлены как шлюзы по умолчанию для ПК"
    ]
  },
  {
    "time": [
      318.7331,
      323.125808
    ],
    "en": [
      "I already configure the pcs so everything should work fine now"
    ],
    "ru": [
      "Я уже настроил компьютеры, так что теперь все должно работать нормально"
    ]
  },
  {
    "time": [
      323.125808,
      327.495579
    ],
    "en": [
      "let's try some pings from pc1 to make sure we have connectivity"
    ],
    "ru": [
      "давайте попробуем пинги от pc1, чтобы убедиться, что у нас есть соединение"
    ]
  },
  {
    "time": [
      327.495579,
      334.569474
    ],
    "en": [
      "let's ping PC three first which is in the same VLAN but connected to a different switch"
    ],
    "ru": [
      "давайте сначала пингуем три компьютера, которые находятся в той же VLAN, но подключены к другому коммутатору"
    ]
  },
  {
    "time": [
      334.569474,
      347.218328
    ],
    "en": [
      "pink 13.0.0.13 it works okay and now let's ping PC 2"
    ],
    "ru": [
      "розовый 13.0.0.13 работает нормально, а теперь пингуем ПК 2"
    ]
  },
  {
    "time": [
      347.218328,
      351.111182
    ],
    "en": [
      "which is in a different VLAN but connected to the same switch"
    ],
    "ru": [
      "который находится в другой VLAN, но подключен к тому же коммутатору"
    ]
  },
  {
    "time": [
      351.111182,
      355.153202
    ],
    "en": [
      "ping 24.0.0.12"
    ],
    "ru": [
      "пинг 24.0.0.12"
    ]
  },
  {
    "time": [
      355.153202,
      364.142618
    ],
    "en": [
      "it works so our inter VLAN routing is working"
    ],
    "ru": [
      "это работает, поэтому наша маршрутизация между VLAN работает"
    ]
  },
  {
    "time": [
      364.142618,
      366.816055
    ],
    "en": [
      "let's try to ping PC 4 as well"
    ],
    "ru": [
      "попробуем пинговать и ПК 4"
    ]
  },
  {
    "time": [
      366.816055,
      370.232034
    ],
    "en": [
      "in a different VLAN and connected to a different switch"
    ],
    "ru": [
      "в другой VLAN и подключен к другому коммутатору"
    ]
  },
  {
    "time": [
      370.232034,
      379.994575
    ],
    "en": [
      "ping 24.0.0.14 it works too"
    ],
    "ru": [
      "пинг 24.0.0.14 тоже работает"
    ]
  },
  {
    "time": [
      379.994575,
      388.89097
    ],
    "en": [
      "in this lab we took a brief look at DTP disabled it and configured VLANs and switch port mode"
    ],
    "ru": [
      "в этой лабораторной работе мы кратко рассмотрели, как DTP отключил его и настроил VLAN и режим порта коммутатора."
    ]
  },
  {
    "time": [
      388.89097,
      390.482532
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
      390.482532,
      398.332866
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
      398.332866,
      402.624366
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
      402.624366,
      407.650574
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comments section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      407.650574,
      414.177532
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
      414.177532,
      422.635886
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
      422.635886,
      422.635886
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
      422.635886,
      422.635886
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
      422.635886,
      422.635886
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]