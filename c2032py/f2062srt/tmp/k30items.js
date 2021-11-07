let objs = [
  {
    "time": [
      0.0,
      4.564416
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
      4.564416,
      8.057707
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
      8.057707,
      15.334957
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
      15.334957,
      19.63079
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
      19.63079,
      27.123373
    ],
    "en": [
      "in this lab we will take a look at two methods of inter VLAN routing using two small networks"
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрим два метода маршрутизации между VLAN с использованием двух небольших сетей."
    ]
  },
  {
    "time": [
      27.123373,
      29.894789
    ],
    "en": [
      "one is known as router on a stick"
    ],
    "ru": [
      "один известен как роутер на флешке"
    ]
  },
  {
    "time": [
      29.894789,
      33.131413
    ],
    "en": [
      "which we already covered in the icnd1 labs"
    ],
    "ru": [
      "которые мы уже рассмотрели в лабораторных исследованиях icnd1"
    ]
  },
  {
    "time": [
      33.131413,
      35.104788
    ],
    "en": [
      "but we will do a little review here"
    ],
    "ru": [
      "но мы сделаем небольшой обзор здесь"
    ]
  },
  {
    "time": [
      35.104788,
      39.895079
    ],
    "en": [
      "the other method is using SVIS on a multi-layer switch"
    ],
    "ru": [
      "другой метод - использование SVIS на многослойном коммутаторе."
    ]
  },
  {
    "time": [
      39.895079,
      42.323558
    ],
    "en": [
      "which is a switch with routing capabilities"
    ],
    "ru": [
      "который является коммутатором с возможностью маршрутизации"
    ]
  },
  {
    "time": [
      42.323558,
      44.206328
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
      44.206328,
      51.405474
    ],
    "en": [
      "first let's configure switch 1 for inter VLAN routing using s vis"
    ],
    "ru": [
      "сначала давайте настроим коммутатор 1 для маршрутизации между VLAN, используя s vis"
    ]
  },
  {
    "time": [
      51.405474,
      55.286182
    ],
    "en": [
      "switch 1 isn't connected to a router in this small network"
    ],
    "ru": [
      "коммутатор 1 не подключен к маршрутизатору в этой небольшой сети"
    ]
  },
  {
    "time": [
      55.286182,
      62.91427
    ],
    "en": [
      "and even if it were it might be preferable for a switch 1 to rub between VLANs itself without having to send the traffic to a router"
    ],
    "ru": [
      "и даже если бы это было, было бы предпочтительнее, чтобы коммутатор 1 работал между самими VLAN, не отправляя трафик на маршрутизатор."
    ]
  },
  {
    "time": [
      62.91427,
      67.878582
    ],
    "en": [
      "now pc1 & pc2 shouldn't be able to ping each other at the moment"
    ],
    "ru": [
      "теперь pc1 и pc2 не должны в данный момент пинговать друг друга"
    ]
  },
  {
    "time": [
      67.878582,
      70.880373
    ],
    "en": [
      "let's try from PC 1"
    ],
    "ru": [
      "давайте попробуем с ПК 1"
    ]
  },
  {
    "time": [
      70.880373,
      82.414664
    ],
    "en": [
      "ping 10.0.2.10 doesn't work"
    ],
    "ru": [
      "пинг 10.0.2.10 не работает"
    ]
  },
  {
    "time": [
      82.414664,
      85.010643
    ],
    "en": [
      "let's go on switch one and make it work"
    ],
    "ru": [
      "давай включим один и заставим его работать"
    ]
  },
  {
    "time": [
      85.010643,
      93.748309
    ],
    "en": [
      "enable conf t ok the first step is to enable IP routing on the switch"
    ],
    "ru": [
      "enable conf t ok Первый шаг - включить IP-маршрутизацию на коммутаторе"
    ]
  },
  {
    "time": [
      93.748309,
      97.287663
    ],
    "en": [
      "which is done with the command IP routing"
    ],
    "ru": [
      "что делается с помощью команды IP routing"
    ]
  },
  {
    "time": [
      97.287663,
      101.505121
    ],
    "en": [
      "this enables the layer 3 capabilities of this multi-layer switch"
    ],
    "ru": [
      "это позволяет использовать возможности уровня 3 этого многоуровневого коммутатора."
    ]
  },
  {
    "time": [
      101.505121,
      106.616496
    ],
    "en": [
      "next we just have to configure the VLANs with IP addresses"
    ],
    "ru": [
      "далее нам просто нужно настроить VLAN с IP-адресами."
    ]
  },
  {
    "time": [
      106.616496,
      115.361287
    ],
    "en": [
      "interface VLAN 10 I configured each PC to use the dot 1 address of their subnet as a default gateway"
    ],
    "ru": [
      "interface VLAN 10 Я настроил каждый компьютер на использование адреса точки 1 своей подсети в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      115.361287,
      131.052725
    ],
    "en": [
      "so for VLAN 10 IP address 10.0.1.1 255.255.255.0 also SVIS are shut down by default so remember no shutdown"
    ],
    "ru": [
      "поэтому для IP-адреса VLAN 10 10.0.1.1 255.255.255.0 также SVIS отключены по умолчанию, поэтому не забывайте о выключении"
    ]
  },
  {
    "time": [
      131.052725,
      134.225454
    ],
    "en": [
      "now let's configure VLAN 20"
    ],
    "ru": [
      "теперь настроим VLAN 20"
    ]
  },
  {
    "time": [
      134.225454,
      145.962558
    ],
    "en": [
      "interface VLAN 20 IP address 10.0.2.1 255.255.255.0 no shutdown"
    ],
    "ru": [
      "интерфейс VLAN 20 IP-адрес 10.0.2.1 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      145.962558,
      148.102287
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
      148.102287,
      156.334995
    ],
    "en": [
      "keep in mind I already configured switch ones interfaces connected to a PC one and PC two to be in VLAN 10 and VLAN 20"
    ],
    "ru": [
      "имейте в виду, что я уже настроил интерфейсы коммутатора, подключенные к ПК один и ПК два, чтобы быть в VLAN 10 и VLAN 20"
    ]
  },
  {
    "time": [
      156.334995,
      158.962016
    ],
    "en": [
      "do show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      158.962016,
      160.437328
    ],
    "en": [
      "there you go"
    ],
    "ru": [
      "вот ты идёшь"
    ]
  },
  {
    "time": [
      160.437328,
      163.558494
    ],
    "en": [
      "now let's try our ping once more from PC 1"
    ],
    "ru": [
      "теперь давайте попробуем наш пинг еще раз с ПК 1"
    ]
  },
  {
    "time": [
      163.558494,
      169.309596
    ],
    "en": [
      "ping 10.0.2.10"
    ],
    "ru": [
      "пинг 10.0.2.10"
    ]
  },
  {
    "time": [
      169.309596,
      178.569199
    ],
    "en": [
      "That all there is to inter VLAN routing using SBI's"
    ],
    "ru": [
      "Это все, что нужно для маршрутизации между VLAN с использованием SBI"
    ]
  },
  {
    "time": [
      178.569199,
      183.47701
    ],
    "en": [
      "for a quick review enable IP routing on the multi-layer switch"
    ],
    "ru": [
      "для быстрого просмотра включите IP-маршрутизацию на многоуровневом коммутаторе"
    ]
  },
  {
    "time": [
      183.47701,
      188.105864
    ],
    "en": [
      "create the appropriate SVIS the interface VLAN command"
    ],
    "ru": [
      "создать соответствующую SVIS команду interface VLAN"
    ]
  },
  {
    "time": [
      188.105864,
      193.981343
    ],
    "en": [
      "configure IP addresses on the SVIS and enable them with no shutdown"
    ],
    "ru": [
      "настроить IP-адреса на SVIS и включить их без выключения"
    ]
  },
  {
    "time": [
      193.981343,
      201.908028
    ],
    "en": [
      "next let's configure inter VLAN routing in our other small network using the router on a stick method"
    ],
    "ru": [
      "Затем давайте настроим маршрутизацию между VLAN в нашей другой небольшой сети, используя метод маршрутизатора на палке"
    ]
  },
  {
    "time": [
      201.908028,
      208.399672
    ],
    "en": [
      "by using sub interfaces r2 connect as a default gateway for multiple subnets"
    ],
    "ru": [
      "используя подчиненные интерфейсы r2, подключитесь в качестве шлюза по умолчанию для нескольких подсетей"
    ]
  },
  {
    "time": [
      208.399672,
      210.74663
    ],
    "en": [
      "using a single physical interface"
    ],
    "ru": [
      "с использованием единого физического интерфейса"
    ]
  },
  {
    "time": [
      210.74663,
      219.96942
    ],
    "en": [
      "again I already configured the switch 2 interface is connected to a PC 3 and PC 4 to be in VLAN 30 and VLAN 40"
    ],
    "ru": [
      "снова я уже настроил интерфейс коммутатора 2, подключенный к ПК 3 и ПК 4, чтобы быть в VLAN 30 и VLAN 40"
    ]
  },
  {
    "time": [
      219.96942,
      223.777732
    ],
    "en": [
      "so we just have to configure the connection between switch 2 and R 2"
    ],
    "ru": [
      "поэтому нам просто нужно настроить соединение между коммутатором 2 и R 2"
    ]
  },
  {
    "time": [
      223.777732,
      229.347377
    ],
    "en": [
      "let's just show that PC 3 and PC for can't pin each other at the moment"
    ],
    "ru": [
      "давайте просто покажем, что ПК 3 и ПК на данный момент не могут связывать друг друга"
    ]
  },
  {
    "time": [
      229.347377,
      245.297127
    ],
    "en": [
      "ping from PC 3 to PC 4 vping 10.0.4.10 doesn't work"
    ],
    "ru": [
      "пинг с ПК 3 на ПК 4 vping 10.0.4.10 не работает"
    ]
  },
  {
    "time": [
      245.297127,
      248.009147
    ],
    "en": [
      "first let's go on switch 2"
    ],
    "ru": [
      "сначала пойдем на переключатель 2"
    ]
  },
  {
    "time": [
      248.009147,
      257.142855
    ],
    "en": [
      "enable conf t all we have to do here is configure g0 1 as a trunk"
    ],
    "ru": [
      "enable conf t все, что нам нужно сделать, это настроить g0 1 как магистраль"
    ]
  },
  {
    "time": [
      257.142855,
      262.349813
    ],
    "en": [
      "interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейс g0 1 переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      262.349813,
      265.92475
    ],
    "en": [
      "that's all now let's go to r2"
    ],
    "ru": [
      "вот и все, теперь давайте перейдем к r2"
    ]
  },
  {
    "time": [
      265.92475,
      275.305811
    ],
    "en": [
      "enable conf t let's enable the g00 interface"
    ],
    "ru": [
      "enable conf t давайте включим интерфейс g00"
    ]
  },
  {
    "time": [
      275.305811,
      279.736999
    ],
    "en": [
      "interface G 0 0 no shutdown"
    ],
    "ru": [
      "интерфейс G 0 0 без отключения"
    ]
  },
  {
    "time": [
      279.736999,
      283.829436
    ],
    "en": [
      "now let's create a sub interface for VLAN 30"
    ],
    "ru": [
      "теперь давайте создадим субинтерфейс для VLAN 30"
    ]
  },
  {
    "time": [
      283.829436,
      287.212727
    ],
    "en": [
      "interface G 0 0.30"
    ],
    "ru": [
      "интерфейс G 0 0,30"
    ]
  },
  {
    "time": [
      287.212727,
      292.171581
    ],
    "en": [
      "next specify this sub interface as being before VLAN 30"
    ],
    "ru": [
      "затем укажите этот субинтерфейс до VLAN 30"
    ]
  },
  {
    "time": [
      292.171581,
      297.672685
    ],
    "en": [
      "encapsulation dot1q 30"
    ],
    "ru": [
      "инкапсуляция dot1q 30"
    ]
  },
  {
    "time": [
      297.672685,
      300.29658
    ],
    "en": [
      "next we just add the IP address"
    ],
    "ru": [
      "далее мы просто добавляем IP-адрес"
    ]
  },
  {
    "time": [
      300.29658,
      307.64458
    ],
    "en": [
      "IP address 10.0.3.1 255 255 255 0"
    ],
    "ru": [
      "IP-адрес 10.0.3.1 255 255 255 0"
    ]
  },
  {
    "time": [
      307.64458,
      313.094872
    ],
    "en": [
      "that's all now let's make another sub interface for VLAN 40 and do the same"
    ],
    "ru": [
      "вот и все, теперь давайте сделаем еще один субинтерфейс для VLAN 40 и сделаем то же самое"
    ]
  },
  {
    "time": [
      313.094872,
      321.403247
    ],
    "en": [
      "interface G 0 0.40 encapsulation dot1q 40"
    ],
    "ru": [
      "интерфейс G 0 0,40 инкапсуляция dot1q 40"
    ]
  },
  {
    "time": [
      321.403247,
      332.224913
    ],
    "en": [
      "IP address 10.0.4.1 255.255.255.0 that's all there is to router on a stick"
    ],
    "ru": [
      "IP-адрес 10.0.4.1 255.255.255.0 это все, что есть для роутера на флешке"
    ]
  },
  {
    "time": [
      332.224913,
      334.818246
    ],
    "en": [
      "let's try that ping again from pc 3"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с пк 3"
    ]
  },
  {
    "time": [
      334.818246,
      345.030016
    ],
    "en": [
      "ping 10.0.4.1"
    ],
    "ru": [
      "пинг 10.0.4.1"
    ]
  },
  {
    "time": [
      345.030016,
      348.606411
    ],
    "en": [
      "okay there we go"
    ],
    "ru": [
      "хорошо, мы идем"
    ]
  },
  {
    "time": [
      348.606411,
      352.65989
    ],
    "en": [
      "in this lab we looked at two methods of inter VLAN routing"
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрели два метода маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      352.65989,
      355.669452
    ],
    "en": [
      "SVIS and router on a stick"
    ],
    "ru": [
      "СВИС и роутер на флешке"
    ]
  },
  {
    "time": [
      355.669452,
      357.511306
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
      357.511306,
      365.060368
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
      365.060368,
      369.490743
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
      369.490743,
      374.321596
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
      374.321596,
      381.197179
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
      381.197179,
      389.735116
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
      389.735116,
      389.735116
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
      389.735116,
      389.735116
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
      389.735116,
      389.735116
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]