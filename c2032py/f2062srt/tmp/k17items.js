let objs = [
  {
    "time": [
      0.0,
      4.72127
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
      4.72127,
      8.038478
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
      8.038478,
      15.957623
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
      15.957623,
      22.974185
    ],
    "en": [
      "this is the third and last of our labs focusing on nat network address translation"
    ],
    "ru": [
      "это третья и последняя из наших лабораторных работ, посвященных трансляции сетевых адресов nat."
    ]
  },
  {
    "time": [
      22.974185,
      27.762934
    ],
    "en": [
      "this lab will focus on Pat port address translation"
    ],
    "ru": [
      "Эта лабораторная работа будет посвящена преобразованию адресов порта Pat."
    ]
  },
  {
    "time": [
      27.762934,
      36.393704
    ],
    "en": [
      "static NAT is sometimes referred to as one-to-one and dynamic NAT is sometimes referred to as many to many"
    ],
    "ru": [
      "статический NAT иногда называют «один-к-одному», а динамический NAT иногда называют «многие ко многим»."
    ]
  },
  {
    "time": [
      36.393704,
      39.921808
    ],
    "en": [
      "by that logic Pat is many to one"
    ],
    "ru": [
      "по этой логике Пэт много к одному"
    ]
  },
  {
    "time": [
      39.921808,
      43.72287
    ],
    "en": [
      "many addresses are translated to a single IP address"
    ],
    "ru": [
      "многие адреса переводятся в один IP-адрес"
    ]
  },
  {
    "time": [
      43.72287,
      47.393953
    ],
    "en": [
      "but the router keeps track of the layer for port number used"
    ],
    "ru": [
      "но маршрутизатор отслеживает уровень используемого номера порта"
    ]
  },
  {
    "time": [
      47.393953,
      50.378953
    ],
    "en": [
      "so it can identify each of the inside hosts"
    ],
    "ru": [
      "чтобы он мог идентифицировать каждый из внутренних хостов"
    ]
  },
  {
    "time": [
      50.378953,
      60.536307
    ],
    "en": [
      "for example when we configure Pat in this network we can then ping from pc-1 pc2 and pc 3 to server 1 at the same time"
    ],
    "ru": [
      "например, когда мы настраиваем Pat в этой сети, мы можем затем пинговать с pc-1 pc2 и pc 3 на сервер 1 одновременно"
    ]
  },
  {
    "time": [
      60.536307,
      69.264202
    ],
    "en": [
      "all of them will use the same address that of our ones as 0 3 0 interface 1.2.3.1"
    ],
    "ru": [
      "все они будут использовать тот же адрес, что и наши, как 0 3 0 интерфейс 1.2.3.1"
    ]
  },
  {
    "time": [
      69.264202,
      72.413243
    ],
    "en": [
      "however each of them will use a different port number"
    ],
    "ru": [
      "однако каждый из них будет использовать другой номер порта"
    ]
  },
  {
    "time": [
      72.413243,
      77.394888
    ],
    "en": [
      "so our one can forward the return traffic from server 1 back to the correct PC"
    ],
    "ru": [
      "так что наш может перенаправить обратный трафик с сервера 1 обратно на правильный ПК"
    ]
  },
  {
    "time": [
      77.394888,
      82.022263
    ],
    "en": [
      "we are using the same topology as in the previous net labs"
    ],
    "ru": [
      "мы используем ту же топологию, что и в предыдущих сетевых лабораториях"
    ]
  },
  {
    "time": [
      82.022263,
      87.328783
    ],
    "en": [
      "if we try to ping server one from PC one it should fail once again"
    ],
    "ru": [
      "если мы попытаемся пинговать один сервер с ПК, он снова потерпит неудачу"
    ]
  },
  {
    "time": [
      87.328783,
      99.868949
    ],
    "en": [
      "let's try ping 1.1.1.100 the pink fails"
    ],
    "ru": [
      "попробуем пинговать 1.1.1.100 розовый не получается"
    ]
  },
  {
    "time": [
      99.868949,
      105.078115
    ],
    "en": [
      "once again this is because PC one has an IP address in a private IP range"
    ],
    "ru": [
      "еще раз это связано с тем, что у ПК есть IP-адрес в частном IP-диапазоне"
    ]
  },
  {
    "time": [
      105.078115,
      108.260219
    ],
    "en": [
      "these addresses are not routable on the Internet"
    ],
    "ru": [
      "эти адреса не маршрутизируются в Интернете"
    ]
  },
  {
    "time": [
      108.260219,
      117.412594
    ],
    "en": [
      "to simulate the Internet I have configured ACLs on r1 and r2 to prevent private IP addresses from being routed on the serial link between them"
    ],
    "ru": [
      "для имитации Интернета я настроил ACL на r1 и r2, чтобы предотвратить маршрутизацию частных IP-адресов по последовательному каналу между ними"
    ]
  },
  {
    "time": [
      117.412594,
      130.235135
    ],
    "en": [
      "so let's configure Pat on r1 to translate the IP addresses of pc-1 pc2 and pc 3 to the IP address of our ones s0 3-0 interface"
    ],
    "ru": [
      "Итак, давайте настроим Pat на r1 для преобразования IP-адресов pc-1 pc2 и pc 3 в IP-адрес нашего интерфейса s0 3-0"
    ]
  },
  {
    "time": [
      130.235135,
      133.91526
    ],
    "en": [
      "I'll go on r1"
    ],
    "ru": [
      "Я пойду на r1"
    ]
  },
  {
    "time": [
      133.91526,
      143.055718
    ],
    "en": [
      "enable conf t again I'll set the inside and outside NAT interfaces"
    ],
    "ru": [
      "enable conf t снова, я настрою внутренний и внешний интерфейсы NAT"
    ]
  },
  {
    "time": [
      143.055718,
      146.325863
    ],
    "en": [
      "interface g00"
    ],
    "ru": [
      "интерфейс g00"
    ]
  },
  {
    "time": [
      146.325863,
      149.067258
    ],
    "en": [
      "IP NAT inside"
    ],
    "ru": [
      "IP NAT внутри"
    ]
  },
  {
    "time": [
      149.067258,
      153.804342
    ],
    "en": [
      "interface s 0 3 0 IP NAT outside"
    ],
    "ru": [
      "интерфейс s 0 3 0 IP NAT снаружи"
    ]
  },
  {
    "time": [
      153.804342,
      163.396195
    ],
    "en": [
      "exit now to configure a dynamic NAT we had to configure an ACL and NAT pool before we configure the NAT statement itself"
    ],
    "ru": [
      "выйти сейчас, чтобы настроить динамический NAT, нам нужно было настроить пул ACL и NAT, прежде чем мы настроим сам оператор NAT"
    ]
  },
  {
    "time": [
      163.396195,
      169.215215
    ],
    "en": [
      "for Pat we just create an ACL to identify the inside address range to translate"
    ],
    "ru": [
      "для Пэта мы просто создаем ACL для определения диапазона внутренних адресов для перевода"
    ]
  },
  {
    "time": [
      169.215215,
      173.721069
    ],
    "en": [
      "and then we create a NAT statement to translate them to the outside interface"
    ],
    "ru": [
      "а затем мы создаем оператор NAT, чтобы транслировать их во внешний интерфейс"
    ]
  },
  {
    "time": [
      173.721069,
      176.148777
    ],
    "en": [
      "let's make the ACL"
    ],
    "ru": [
      "давайте сделаем ACL"
    ]
  },
  {
    "time": [
      176.148777,
      182.342735
    ],
    "en": [
      "remember this ACL is used to identify traffic not to allow or block traffic"
    ],
    "ru": [
      "помните, что этот ACL используется для идентификации трафика, чтобы не разрешать или блокировать трафик."
    ]
  },
  {
    "time": [
      182.342735,
      186.51511
    ],
    "en": [
      "traffic permitted by the ACL will be translated"
    ],
    "ru": [
      "трафик, разрешенный ACL, будет переведен"
    ]
  },
  {
    "time": [
      186.51511,
      190.28386
    ],
    "en": [
      "traffic denied by the ACL won't be translated"
    ],
    "ru": [
      "трафик, запрещенный ACL, не будет переведен"
    ]
  },
  {
    "time": [
      190.28386,
      191.827818
    ],
    "en": [
      "but won't be blocked"
    ],
    "ru": [
      "но не будет заблокирован"
    ]
  },
  {
    "time": [
      191.827818,
      198.338255
    ],
    "en": [
      "let's make an ACL to permit traffic from the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "давайте сделаем ACL для разрешения трафика из сети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      198.338255,
      208.322234
    ],
    "en": [
      "access list 1 permit 192.168.0.1 0.0.0.255"
    ],
    "ru": [
      "список доступа 1 разрешение 192.168.0.1 0.0.0.255"
    ]
  },
  {
    "time": [
      208.322234,
      210.279525
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
      210.279525,
      213.063233
    ],
    "en": [
      "now we just have to make the NAT statement"
    ],
    "ru": [
      "теперь нам просто нужно сделать заявление NAT"
    ]
  },
  {
    "time": [
      213.063233,
      216.461108
    ],
    "en": [
      "the first half is identical to dynamic NAT"
    ],
    "ru": [
      "первая половина идентична динамическому NAT"
    ]
  },
  {
    "time": [
      216.461108,
      221.829795
    ],
    "en": [
      "IP NAT inside source list 1"
    ],
    "ru": [
      "IP NAT внутри списка источников 1"
    ]
  },
  {
    "time": [
      221.829795,
      223.944274
    ],
    "en": [
      "which identifies ACL 1"
    ],
    "ru": [
      "который идентифицирует ACL 1"
    ]
  },
  {
    "time": [
      223.944274,
      231.750732
    ],
    "en": [
      "next however we type interface followed by the outside interface s 0 3 0 in this case"
    ],
    "ru": [
      "затем, однако, мы вводим интерфейс, за которым следует внешний интерфейс s 0 3 0 в этом случае"
    ]
  },
  {
    "time": [
      231.750732,
      236.835523
    ],
    "en": [
      "finally remember to add overload at the end"
    ],
    "ru": [
      "наконец, не забудьте добавить перегрузку в конце"
    ]
  },
  {
    "time": [
      236.835523,
      241.61669
    ],
    "en": [
      "this is what allows the router to translate multiple hosts to the same IP address"
    ],
    "ru": [
      "это то, что позволяет маршрутизатору переводить несколько хостов на один и тот же IP-адрес."
    ]
  },
  {
    "time": [
      241.61669,
      246.065023
    ],
    "en": [
      "and keep track of the layer for port number to identify each host"
    ],
    "ru": [
      "и отслеживайте уровень для номера порта, чтобы идентифицировать каждый хост"
    ]
  },
  {
    "time": [
      246.065023,
      254.975877
    ],
    "en": [
      "so our command is IP NAT inside source list one interface s 030 overload"
    ],
    "ru": [
      "так что наша команда IP NAT внутри списка источников один интерфейс s 030 перегрузка"
    ]
  },
  {
    "time": [
      254.975877,
      259.274772
    ],
    "en": [
      "our PAP configuration is complete"
    ],
    "ru": [
      "наша конфигурация PAP завершена"
    ]
  },
  {
    "time": [
      259.274772,
      262.248189
    ],
    "en": [
      "now let's test and then check the translations on r one"
    ],
    "ru": [
      "теперь давайте протестируем, а затем проверим переводы на r one"
    ]
  },
  {
    "time": [
      262.248189,
      266.084584
    ],
    "en": [
      "out paying server one from each of the PCs"
    ],
    "ru": [
      "платный сервер по одному с каждого ПК"
    ]
  },
  {
    "time": [
      266.084584,
      267.646855
    ],
    "en": [
      "PC one first"
    ],
    "ru": [
      "ПК один первый"
    ]
  },
  {
    "time": [
      267.646855,
      272.277105
    ],
    "en": [
      "ping 1.1.1.100"
    ],
    "ru": [
      "пинг 1.1.1.100"
    ]
  },
  {
    "time": [
      272.277105,
      283.174729
    ],
    "en": [
      "next PC 2 ping 1.1.1.100"
    ],
    "ru": [
      "следующий ПК 2 пинг 1.1.1.100"
    ]
  },
  {
    "time": [
      283.174729,
      294.031895
    ],
    "en": [
      "finally pc 3 ping 1.1.1.100"
    ],
    "ru": [
      "наконец pc 3 ping 1.1.1.100"
    ]
  },
  {
    "time": [
      294.031895,
      299.52252
    ],
    "en": [
      "ok now let's go on r1 and check the translations"
    ],
    "ru": [
      "хорошо, теперь давайте перейдем к r1 и проверим переводы"
    ]
  },
  {
    "time": [
      299.52252,
      305.999103
    ],
    "en": [
      "exit show IP NAT translations"
    ],
    "ru": [
      "выход показать переводы IP NAT"
    ]
  },
  {
    "time": [
      305.999103,
      311.557436
    ],
    "en": [
      "as you can see our inside local addresses look the same as in the previous lab"
    ],
    "ru": [
      "как вы можете видеть, наши внутренние локальные адреса выглядят так же, как в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      311.557436,
      316.017186
    ],
    "en": [
      "but the inside global addresses are all the same"
    ],
    "ru": [
      "но внутренние глобальные адреса все те же"
    ]
  },
  {
    "time": [
      316.017186,
      321.823144
    ],
    "en": [
      "as I said before however r1 keeps track of these layer for port numbers"
    ],
    "ru": [
      "как я уже говорил ранее, однако r1 отслеживает эти уровни для номеров портов."
    ]
  },
  {
    "time": [
      321.823144,
      325.968373
    ],
    "en": [
      "so it knows which PC to send the return traffic from server 1 too"
    ],
    "ru": [
      "поэтому он знает, с какого ПК отправлять обратный трафик с сервера 1"
    ]
  },
  {
    "time": [
      325.968373,
      330.556102
    ],
    "en": [
      "now do you remember the command to use if you want to clear these translations"
    ],
    "ru": [
      "теперь вы помните команду, которую нужно использовать, если хотите очистить эти переводы"
    ]
  },
  {
    "time": [
      330.556102,
      335.765477
    ],
    "en": [
      "clear IP NAT translation asterisk"
    ],
    "ru": [
      "очистить звездочку трансляции IP NAT"
    ]
  },
  {
    "time": [
      335.765477,
      338.454018
    ],
    "en": [
      "show IP NAT translations"
    ],
    "ru": [
      "показать переводы IP NAT"
    ]
  },
  {
    "time": [
      338.454018,
      340.944559
    ],
    "en": [
      "the translation table is empty"
    ],
    "ru": [
      "таблица перевода пуста"
    ]
  },
  {
    "time": [
      340.944559,
      342.803434
    ],
    "en": [
      "ok that's all for this lab"
    ],
    "ru": [
      "хорошо, это все для этой лаборатории"
    ]
  },
  {
    "time": [
      342.803434,
      348.595205
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
      348.595205,
      352.798809
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
      352.798809,
      357.513225
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
      357.513225,
      364.566891
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
      364.566891,
      372.683204
    ],
    "en": [
      "I am also a brave verified publisher and accept bass or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также являюсь храбрым проверенным издателем и принимаю пожертвования в виде басовых или базовых токенов внимания в храбром браузере."
    ]
  },
  {
    "time": [
      372.683204,
      372.683204
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
      372.683204,
      372.683204
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
      372.683204,
      372.683204
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]