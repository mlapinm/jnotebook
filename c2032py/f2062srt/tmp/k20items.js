let objs = [
  {
    "time": [
      0.0,
      4.572374
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
      4.572374,
      7.847915
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
      7.847915,
      14.667769
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
      14.667769,
      19.117269
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
      19.117269,
      25.307415
    ],
    "en": [
      "in this lab we will practice some basic ipv6 configurations"
    ],
    "ru": [
      "в этой лабораторной работе мы попрактикуемся в некоторых основных конфигурациях ipv6."
    ]
  },
  {
    "time": [
      25.307415,
      31.783769
    ],
    "en": [
      "including ipv6 address configuration slack or stateless address auto-configuration"
    ],
    "ru": [
      "включая резерв конфигурации адреса IPv6 или автоконфигурацию адреса без сохранения состояния"
    ]
  },
  {
    "time": [
      31.783769,
      34.538727
    ],
    "en": [
      "and ipv6 static routing"
    ],
    "ru": [
      "и статическая маршрутизация ipv6"
    ]
  },
  {
    "time": [
      34.538727,
      36.291518
    ],
    "en": [
      "let's get right into it"
    ],
    "ru": [
      "давай займемся этим"
    ]
  },
  {
    "time": [
      36.291518,
      42.703038
    ],
    "en": [
      "the first step is to enable ipv6 on the routers and configure some ipv6 addresses"
    ],
    "ru": [
      "первый шаг - включить ipv6 на маршрутизаторах и настроить некоторые адреса ipv6"
    ]
  },
  {
    "time": [
      42.703038,
      44.995288
    ],
    "en": [
      "I'll go on r1 first"
    ],
    "ru": [
      "Я сначала пойду на r1"
    ]
  },
  {
    "time": [
      44.995288,
      52.514121
    ],
    "en": [
      "enable conf t ipv6 is not enabled by default"
    ],
    "ru": [
      "enable conf t ipv6 не включен по умолчанию"
    ]
  },
  {
    "time": [
      52.514121,
      55.449579
    ],
    "en": [
      "to enable it use this command"
    ],
    "ru": [
      "чтобы включить его, используйте эту команду"
    ]
  },
  {
    "time": [
      55.449579,
      58.471704
    ],
    "en": [
      "ipv6 unicast routing"
    ],
    "ru": [
      "IPv6 одноадресная маршрутизация"
    ]
  },
  {
    "time": [
      58.471704,
      62.443516
    ],
    "en": [
      "now let's configure the addresses according to the network diagram"
    ],
    "ru": [
      "теперь настроим адреса согласно сетевой схеме"
    ]
  },
  {
    "time": [
      62.443516,
      76.755557
    ],
    "en": [
      "interface g00 ipv6 address 2001 DB 8 1 2 3 1 2 3 : 1/64"
    ],
    "ru": [
      "интерфейс g00 адрес ipv6 2001 DB 8 1 2 3 1 2 3: 1/64"
    ]
  },
  {
    "time": [
      76.755557,
      79.441145
    ],
    "en": [
      "also let's enable the interface"
    ],
    "ru": [
      "также давайте включим интерфейс"
    ]
  },
  {
    "time": [
      79.441145,
      80.852082
    ],
    "en": [
      "no chef"
    ],
    "ru": [
      "нет повара"
    ]
  },
  {
    "time": [
      80.852082,
      92.346769
    ],
    "en": [
      "interface G 0 1 IP v6 address 2001 DB 8 1 1 : 1/64 no chef"
    ],
    "ru": [
      "интерфейс G 0 1 IP-адрес v6 2001 DB 8 1 1: 1/64 no chef"
    ]
  },
  {
    "time": [
      92.346769,
      93.766748
    ],
    "en": [
      "makes it"
    ],
    "ru": [
      "делает это"
    ]
  },
  {
    "time": [
      93.766748,
      95.306873
    ],
    "en": [
      "okay let's check"
    ],
    "ru": [
      "хорошо давай проверим"
    ]
  },
  {
    "time": [
      95.306873,
      98.617123
    ],
    "en": [
      "do show ipv6 interface brief"
    ],
    "ru": [
      "показать краткое описание интерфейса ipv6"
    ]
  },
  {
    "time": [
      98.617123,
      103.534268
    ],
    "en": [
      "there are the addresses we configured but what are these other addresses"
    ],
    "ru": [
      "есть адреса, которые мы настроили, но что это за другие адреса"
    ]
  },
  {
    "time": [
      103.534268,
      109.979768
    ],
    "en": [
      "there link local addresses and they are automatically generated on ipv6 interfaces"
    ],
    "ru": [
      "там связываются локальные адреса, и они автоматически генерируются на интерфейсах ipv6"
    ]
  },
  {
    "time": [
      109.979768,
      114.817309
    ],
    "en": [
      "these addresses are never routed they only work on the local link"
    ],
    "ru": [
      "эти адреса никогда не маршрутизируются, они работают только по локальной ссылке"
    ]
  },
  {
    "time": [
      114.817309,
      120.369101
    ],
    "en": [
      "link local addresses are in the fe80 slash 10 range"
    ],
    "ru": [
      "локальные адреса ссылки находятся в диапазоне fe80 слэш 10"
    ]
  },
  {
    "time": [
      120.369101,
      123.182017
    ],
    "en": [
      "ok that's it for r one"
    ],
    "ru": [
      "хорошо, это все для одного"
    ]
  },
  {
    "time": [
      123.182017,
      125.258225
    ],
    "en": [
      "next let's go on r2"
    ],
    "ru": [
      "дальше пойдем на r2"
    ]
  },
  {
    "time": [
      125.258225,
      134.544015
    ],
    "en": [
      "enable conf t on r 2 we will only configure the g0 one interface for now"
    ],
    "ru": [
      "enable conf t on r 2, пока мы будем настраивать только интерфейс g0 one"
    ]
  },
  {
    "time": [
      134.544015,
      139.436992
    ],
    "en": [
      "as in the next step we will use slack to configure the address for the g00 interface"
    ],
    "ru": [
      "так как на следующем шаге мы будем использовать slack для настройки адреса для интерфейса g00."
    ]
  },
  {
    "time": [
      139.436992,
      152.297055
    ],
    "en": [
      "interface G 0 1 IP p6 address 2001 DB 8 2 2 : 1/64 no shutdown"
    ],
    "ru": [
      "интерфейс G 0 1 IP адрес p6 2001 DB 8 2 2: 1/64 без отключения"
    ]
  },
  {
    "time": [
      152.297055,
      156.776555
    ],
    "en": [
      "ok let's go on r3 and do the same"
    ],
    "ru": [
      "хорошо, давай пойдем на r3 и сделаем то же самое"
    ]
  },
  {
    "time": [
      156.776555,
      174.583158
    ],
    "en": [
      "enable conf t interface g 0 1 IP v6 address 2001 DB 8 3 3 : 1/64 no shutdown"
    ],
    "ru": [
      "enable conf t interface g 0 1 IP-адрес v6 2001 DB 8 3 3: 1/64 без выключения"
    ]
  },
  {
    "time": [
      174.583158,
      187.729845
    ],
    "en": [
      "ok now in step 2 we will use slack stateless address auto-configuration to automatically generate ipv6 addresses for r2 and r3 SG 0 0 interfaces"
    ],
    "ru": [
      "Хорошо, теперь на шаге 2 мы будем использовать автоматическую настройку адреса без сохранения состояния для автоматической генерации IPv6-адресов для интерфейсов r2 и r3 SG 0 0"
    ]
  },
  {
    "time": [
      187.729845,
      190.632115
    ],
    "en": [
      "how does slack work"
    ],
    "ru": [
      "как работает слабина"
    ]
  },
  {
    "time": [
      190.632115,
      196.258281
    ],
    "en": [
      "to put it briefly ipv6 uses NDP or neighbor discovery protocol"
    ],
    "ru": [
      "короче говоря, ipv6 использует протокол NDP или соседнего обнаружения"
    ]
  },
  {
    "time": [
      196.258281,
      204.471864
    ],
    "en": [
      "and as part of NDP r1 is currently sending RA or router advertisement messages on its G 0 0 interface"
    ],
    "ru": [
      "и как часть NDP r1 в настоящее время отправляет рекламные сообщения RA или маршрутизатора на свой интерфейс G 0 0"
    ]
  },
  {
    "time": [
      204.471864,
      213.368906
    ],
    "en": [
      "when we configure slack r2 and r3 will receive these messages and use them to learn the network prefix"
    ],
    "ru": [
      "когда мы настраиваем Slack, r2 и r3 будут получать эти сообщения и использовать их для изучения префикса сети"
    ]
  },
  {
    "time": [
      213.368906,
      218.940926
    ],
    "en": [
      "which is 2001 DB 8 1 2 3 1 2 3 / 64 in this case"
    ],
    "ru": [
      "это 2001 DB 8 1 2 3 1 2 3/64 в данном случае"
    ]
  },
  {
    "time": [
      218.940926,
      225.686156
    ],
    "en": [
      "they will take that prefix and use a modified version of their own MAC address to generate the rest of the IP address"
    ],
    "ru": [
      "они возьмут этот префикс и будут использовать модифицированную версию своего собственного MAC-адреса для генерации остальной части IP-адреса."
    ]
  },
  {
    "time": [
      225.686156,
      230.928364
    ],
    "en": [
      "hopefully you've learned this in your studies if you're not familiar with it now make sure you are for the test"
    ],
    "ru": [
      "надеюсь, вы усвоили это во время учебы, если вы еще не знакомы с этим, убедитесь, что вы готовы к тесту"
    ]
  },
  {
    "time": [
      230.928364,
      234.081468
    ],
    "en": [
      "anyway the configuration is simple"
    ],
    "ru": [
      "в любом случае конфигурация проста"
    ]
  },
  {
    "time": [
      234.081468,
      237.643509
    ],
    "en": [
      "we are on our 3 already so let's do it here first"
    ],
    "ru": [
      "мы уже на нашем 3, так что давайте сначала сделаем это здесь"
    ]
  },
  {
    "time": [
      237.643509,
      247.026738
    ],
    "en": [
      "interface G 0 0 no shutdown ipv6 address Auto config exit"
    ],
    "ru": [
      "интерфейс G 0 0 без выключения IPv6-адрес Автоматическая настройка Выход"
    ]
  },
  {
    "time": [
      247.026738,
      249.510904
    ],
    "en": [
      "next I'll go on r2"
    ],
    "ru": [
      "дальше я пойду на r2"
    ]
  },
  {
    "time": [
      249.510904,
      259.020967
    ],
    "en": [
      "interface G 0 0 no shutdown ipv6 address Auto config exit"
    ],
    "ru": [
      "интерфейс G 0 0 без выключения IPv6-адрес Автоматическая настройка Выход"
    ]
  },
  {
    "time": [
      259.020967,
      266.668779
    ],
    "en": [
      "these routers won't generate their addresses immediately so I'll pause the video as we wait for the router advertisements from R 1 to reach them"
    ],
    "ru": [
      "эти маршрутизаторы не будут генерировать свои адреса немедленно, поэтому я приостановлю видео, пока мы ждем, пока объявления маршрутизатора от R 1 достигнут их"
    ]
  },
  {
    "time": [
      266.668779,
      276.483237
    ],
    "en": [
      "okay I'm on r2 and as you can see from the output of the show ipv6 interface brief command"
    ],
    "ru": [
      "хорошо, я на r2 и, как вы можете видеть из вывода краткой команды show ipv6 interface"
    ]
  },
  {
    "time": [
      276.483237,
      281.357278
    ],
    "en": [
      "r2 has generated an ipv6 address for its g00 interface"
    ],
    "ru": [
      "r2 сгенерировал IPv6-адрес для своего интерфейса g00"
    ]
  },
  {
    "time": [
      281.357278,
      286.675632
    ],
    "en": [
      "and on r3 you can see the same"
    ],
    "ru": [
      "и на r3 можно увидеть то же самое"
    ]
  },
  {
    "time": [
      286.675632,
      293.076986
    ],
    "en": [
      "next let's configure some ipv6 static routes"
    ],
    "ru": [
      "Затем давайте настроим некоторые статические маршруты ipv6"
    ]
  },
  {
    "time": [
      293.076986,
      296.835277
    ],
    "en": [
      "on each router will have to configure two static routes"
    ],
    "ru": [
      "на каждом роутере придется настроить два статических маршрута"
    ]
  },
  {
    "time": [
      296.835277,
      300.221777
    ],
    "en": [
      "one for each of the other routers internal networks"
    ],
    "ru": [
      "по одному для каждой из внутренних сетей других маршрутизаторов"
    ]
  },
  {
    "time": [
      300.221777,
      307.227236
    ],
    "en": [
      "now to configure an next hop address of r2 and r3"
    ],
    "ru": [
      "теперь настроить адрес следующего перехода для r2 и r3"
    ]
  },
  {
    "time": [
      307.227236,
      310.955652
    ],
    "en": [
      "we will have to use their slack addresses which are not easy to remember"
    ],
    "ru": [
      "нам придется использовать их резервные адреса, которые нелегко запомнить"
    ]
  },
  {
    "time": [
      310.955652,
      315.208318
    ],
    "en": [
      "so to do so I'll be copy and pasting their addresses"
    ],
    "ru": [
      "поэтому для этого я буду копировать и вставлять их адреса"
    ]
  },
  {
    "time": [
      315.208318,
      319.237776
    ],
    "en": [
      "first let me copy r2s g00 address"
    ],
    "ru": [
      "сначала позвольте мне скопировать адрес r2s g00"
    ]
  },
  {
    "time": [
      319.237776,
      329.829609
    ],
    "en": [
      "okay now I'll create the first route on r1 to r2's internal network"
    ],
    "ru": [
      "Хорошо, теперь я создам первый маршрут на r1 во внутреннюю сеть r2"
    ]
  },
  {
    "time": [
      329.829609,
      341.740546
    ],
    "en": [
      "ipv6 route 2001 DB 8 2 2 : / 64"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 2 2: / 64"
    ]
  },
  {
    "time": [
      341.740546,
      344.930316
    ],
    "en": [
      "now let me paste in r2's address"
    ],
    "ru": [
      "теперь позвольте мне вставить адрес R2"
    ]
  },
  {
    "time": [
      344.930316,
      346.9949
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
      346.9949,
      354.553649
    ],
    "en": [
      "now since I already have r2 SG 0 0 address copied I'm going to configure the same route on r3"
    ],
    "ru": [
      "Теперь, поскольку у меня уже скопирован адрес r2 SG 0 0, я собираюсь настроить тот же маршрут на r3"
    ]
  },
  {
    "time": [
      354.553649,
      365.39919
    ],
    "en": [
      "ipv6 route 2001 DB 8 2 2 : / 64"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 2 2: / 64"
    ]
  },
  {
    "time": [
      365.39919,
      368.363689
    ],
    "en": [
      "and paste r2's address in"
    ],
    "ru": [
      "и вставьте адрес r2 в"
    ]
  },
  {
    "time": [
      368.363689,
      370.849022
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
      370.849022,
      374.707854
    ],
    "en": [
      "now I'll copy r3s G00 interface address"
    ],
    "ru": [
      "сейчас скопирую адрес интерфейса r3s G00"
    ]
  },
  {
    "time": [
      374.707854,
      378.723041
    ],
    "en": [
      "and make a route to its internal network on r1 and r2"
    ],
    "ru": [
      "и проложим маршрут к своей внутренней сети на r1 и r2"
    ]
  },
  {
    "time": [
      378.723041,
      380.716957
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
      380.716957,
      383.19654
    ],
    "en": [
      "now I'll go on r1"
    ],
    "ru": [
      "сейчас я пойду на r1"
    ]
  },
  {
    "time": [
      383.19654,
      395.948185
    ],
    "en": [
      "IP v6 route 2001 DB 8 3 3 : / 64 and paste in the address"
    ],
    "ru": [
      "IP v6 route 2001 DB 8 3 3: / 64 и вставьте адрес"
    ]
  },
  {
    "time": [
      395.948185,
      400.305664
    ],
    "en": [
      "there we go next on r2"
    ],
    "ru": [
      "вот и мы идем дальше на r2"
    ]
  },
  {
    "time": [
      400.305664,
      412.189163
    ],
    "en": [
      "ipv6 route 2001 DB 8 3 3 : / 64 and once again paste in the address"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 3 3: / 64 и еще раз вставьте адрес"
    ]
  },
  {
    "time": [
      412.189163,
      419.895767
    ],
    "en": [
      "okay now let's configure routes to r1s internal network on r2 and r3"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим маршруты во внутреннюю сеть r1s на r2 и r3"
    ]
  },
  {
    "time": [
      419.895767,
      422.964892
    ],
    "en": [
      "since i'm on r2 already let's start here"
    ],
    "ru": [
      "так как я уже на R2, давайте начнем здесь"
    ]
  },
  {
    "time": [
      422.964892,
      437.179725
    ],
    "en": [
      "ipv6 route 2001 DB 8 1 1 : / 64 2001 DB 8 1 2 3 1 2 3 : 1"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 1 1: / 64 2001 DB 8 1 2 3 1 2 3: 1"
    ]
  },
  {
    "time": [
      437.179725,
      440.702995
    ],
    "en": [
      "ok now on r3"
    ],
    "ru": [
      "хорошо, теперь на r3"
    ]
  },
  {
    "time": [
      440.702995,
      458.661744
    ],
    "en": [
      "ipv6 route 2001 DB 8 1 1 : / 64 2001 DB 8 1 2 3 1 2 3 : 1"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 1 1: / 64 2001 DB 8 1 2 3 1 2 3: 1"
    ]
  },
  {
    "time": [
      458.661744,
      462.344639
    ],
    "en": [
      "ok all of our routes are now configured"
    ],
    "ru": [
      "хорошо, теперь все наши маршруты настроены"
    ]
  },
  {
    "time": [
      462.344639,
      468.169826
    ],
    "en": [
      "for this video I won't ping from each router but let's just try out some things from r3 to test"
    ],
    "ru": [
      "в этом видео я не буду пинговать с каждого маршрутизатора, но давайте просто попробуем кое-что из r3, чтобы проверить"
    ]
  },
  {
    "time": [
      468.169826,
      480.043367
    ],
    "en": [
      "first I'll ping PC ones address exit ping 2001 DB 8 1 1 : 64"
    ],
    "ru": [
      "сначала я пингую их адреса ПК exit ping 2001 DB 8 1 1:64"
    ]
  },
  {
    "time": [
      480.043367,
      483.682158
    ],
    "en": [
      "ok the ping works"
    ],
    "ru": [
      "хорошо, пинг работает"
    ]
  },
  {
    "time": [
      483.682158,
      496.386095
    ],
    "en": [
      "and now I'll ping PC 2 ping 2001 DB 8 2 2 : 64 again the ping works"
    ],
    "ru": [
      "а теперь пингую комп 2 пинг 2001 DB 8 2 2:64 опять пинг работает"
    ]
  },
  {
    "time": [
      496.386095,
      504.447448
    ],
    "en": [
      "in this lab we configured manual ipv6 addresses slack addressing and ipv6 static routes"
    ],
    "ru": [
      "В этой лабораторной работе мы настроили ручную адресацию резервных адресов IPv6 и статические маршруты IPv6."
    ]
  },
  {
    "time": [
      504.447448,
      505.953698
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
      505.953698,
      512.599906
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
      512.599906,
      516.740572
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
      516.740572,
      521.108135
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
      521.108135,
      528.074135
    ],
    "en": [
      "if you want to support my channel I accept a Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      528.074135,
      536.151864
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
      536.151864,
      536.151864
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
      536.151864,
      536.151864
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
      536.151864,
      536.151864
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]