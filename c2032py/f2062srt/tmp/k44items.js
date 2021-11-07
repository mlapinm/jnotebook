let objs = [
  {
    "time": [
      0.0,
      4.106553
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
      4.106553,
      8.113877
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
      8.113877,
      15.613401
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
      15.613401,
      20.112789
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
      20.112789,
      23.571746
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
      23.571746,
      29.914829
    ],
    "en": [
      "in this lab we will troubleshoot the GRE tunnel configuration from the previous lab"
    ],
    "ru": [
      "в этой лабораторной работе мы будем устранять неполадки конфигурации туннеля GRE из предыдущей лабораторной работы."
    ]
  },
  {
    "time": [
      29.914829,
      34.242402
    ],
    "en": [
      "the GRE tunnel should be working with E I gr P over"
    ],
    "ru": [
      "туннель GRE должен работать с E I gr P поверх"
    ]
  },
  {
    "time": [
      34.242402,
      36.850044
    ],
    "en": [
      "it so pc1 & pc2 can reach each other"
    ],
    "ru": [
      "это так, чтобы pc1 и pc2 могли связаться друг с другом"
    ]
  },
  {
    "time": [
      36.850044,
      40.116098
    ],
    "en": [
      "there are two misconfigurations on each router"
    ],
    "ru": [
      "на каждом роутере есть две неправильные настройки"
    ]
  },
  {
    "time": [
      40.116098,
      41.801699
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
      41.801699,
      46.278275
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
      46.278275,
      53.592742
    ],
    "en": [
      "enable show IP interface brief"
    ],
    "ru": [
      "включить краткое отображение IP-интерфейса"
    ]
  },
  {
    "time": [
      53.592742,
      57.130588
    ],
    "en": [
      "the tunnel interface is up down"
    ],
    "ru": [
      "интерфейс туннеля вверх вниз"
    ]
  },
  {
    "time": [
      57.130588,
      58.802787
    ],
    "en": [
      "so it's not working"
    ],
    "ru": [
      "так что это не работает"
    ]
  },
  {
    "time": [
      58.802787,
      62.496325
    ],
    "en": [
      "notice the error message we're getting"
    ],
    "ru": [
      "обратите внимание на сообщение об ошибке, которое мы получаем"
    ]
  },
  {
    "time": [
      62.496325,
      66.734987
    ],
    "en": [
      "temporarily disabled due to recursive routing"
    ],
    "ru": [
      "временно отключен из-за рекурсивной маршрутизации"
    ]
  },
  {
    "time": [
      66.734987,
      70.657776
    ],
    "en": [
      "this is a common problem in tunnel configuration"
    ],
    "ru": [
      "это обычная проблема в конфигурации туннеля"
    ]
  },
  {
    "time": [
      70.657776,
      74.673921
    ],
    "en": [
      "show interface tunnel 0"
    ],
    "ru": [
      "показать интерфейсный туннель 0"
    ]
  },
  {
    "time": [
      74.673921,
      79.19417
    ],
    "en": [
      "tunnel source of serial zero zero zero is okay"
    ],
    "ru": [
      "Туннельный источник серийного нуля нуля нуля в порядке"
    ]
  },
  {
    "time": [
      79.19417,
      81.71315
    ],
    "en": [
      "but look at the destination"
    ],
    "ru": [
      "но посмотри на пункт назначения"
    ]
  },
  {
    "time": [
      81.71315,
      86.861086
    ],
    "en": [
      "the destination has to be the address of the physical interface"
    ],
    "ru": [
      "пункт назначения должен быть адресом физического интерфейса"
    ]
  },
  {
    "time": [
      86.861086,
      88.497164
    ],
    "en": [
      "which is at the other end of the tunnel"
    ],
    "ru": [
      "который находится на другом конце туннеля"
    ]
  },
  {
    "time": [
      88.497164,
      90.642107
    ],
    "en": [
      "not the tunnels address itself"
    ],
    "ru": [
      "не туннели адресуют себя"
    ]
  },
  {
    "time": [
      90.642107,
      94.580814
    ],
    "en": [
      "that's what's causing the recursive routing error message"
    ],
    "ru": [
      "вот что вызывает сообщение об ошибке рекурсивной маршрутизации"
    ]
  },
  {
    "time": [
      94.580814,
      98.475576
    ],
    "en": [
      "call T"
    ],
    "ru": [
      "позвонить T"
    ]
  },
  {
    "time": [
      98.475576,
      100.660678
    ],
    "en": [
      "interface tunnel zero"
    ],
    "ru": [
      "нулевой интерфейсный туннель"
    ]
  },
  {
    "time": [
      100.660678,
      106.685871
    ],
    "en": [
      "tunnel destination 200 oh oh -"
    ],
    "ru": [
      "Пункт назначения туннеля 200 ой ой -"
    ]
  },
  {
    "time": [
      106.685871,
      110.90993
    ],
    "en": [
      "okay that should end the error messages"
    ],
    "ru": [
      "хорошо, это должно закончить сообщения об ошибках"
    ]
  },
  {
    "time": [
      110.90993,
      116.823898
    ],
    "en": [
      "let's check the AIG RP configuration here to"
    ],
    "ru": [
      "давайте проверим конфигурацию AIG RP здесь, чтобы"
    ]
  },
  {
    "time": [
      116.823898,
      119.093557
    ],
    "en": [
      "do show IP protocols"
    ],
    "ru": [
      "показывать IP-протоколы"
    ]
  },
  {
    "time": [
      119.093557,
      126.039839
    ],
    "en": [
      "routing for networks 1001 0/24"
    ],
    "ru": [
      "маршрутизация для сетей 1001 0/24"
    ]
  },
  {
    "time": [
      126.039839,
      129.025666
    ],
    "en": [
      "and 100 0 0 / 30"
    ],
    "ru": [
      "и 100 0 0/30"
    ]
  },
  {
    "time": [
      129.025666,
      131.354986
    ],
    "en": [
      "there's a problem"
    ],
    "ru": [
      "есть проблема"
    ]
  },
  {
    "time": [
      131.354986,
      136.935326
    ],
    "en": [
      "we want to activate a idrp on the G zero zero interface which we are"
    ],
    "ru": [
      "мы хотим активировать idrp на интерфейсе G zero zero, который мы"
    ]
  },
  {
    "time": [
      136.935326,
      139.609316
    ],
    "en": [
      "and the tunnel interface"
    ],
    "ru": [
      "и туннельный интерфейс"
    ]
  },
  {
    "time": [
      139.609316,
      142.825915
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
      139.609316,
      142.825915
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
      142.825915,
      146.021992
    ],
    "en": [
      "which is the s zero zero zero interface"
    ],
    "ru": [
      "который является нулевым нулевым нулевым интерфейсом s"
    ]
  },
  {
    "time": [
      146.021992,
      148.041357
    ],
    "en": [
      "isn't the tunnel interface"
    ],
    "ru": [
      "не туннельный интерфейс"
    ]
  },
  {
    "time": [
      148.041357,
      149.472468
    ],
    "en": [
      "it's the tunnel source"
    ],
    "ru": [
      "это источник туннеля"
    ]
  },
  {
    "time": [
      149.472468,
      151.270608
    ],
    "en": [
      "let's change that"
    ],
    "ru": [
      "давай изменим это"
    ]
  },
  {
    "time": [
      151.270608,
      155.140064
    ],
    "en": [
      "router ew g RP 100"
    ],
    "ru": [
      "маршрутизатор ew g RP 100"
    ]
  },
  {
    "time": [
      155.140064,
      162.043828
    ],
    "en": [
      "no network 100 oh oh oh oh oh three"
    ],
    "ru": [
      "нет сети 100 ой ой ой ой три"
    ]
  },
  {
    "time": [
      162.043828,
      171.998499
    ],
    "en": [
      "network 192.168.1.0 oh oh oh three end"
    ],
    "ru": [
      "сеть 192.168.1.0 ой ой ой три конца"
    ]
  },
  {
    "time": [
      171.998499,
      174.624031
    ],
    "en": [
      "ok we've solved two problems here on our one"
    ],
    "ru": [
      "хорошо, мы решили две проблемы здесь, по нашей"
    ]
  },
  {
    "time": [
      174.624031,
      179.138657
    ],
    "en": [
      "however there are still problems on our two so our tunnel won't be working yet"
    ],
    "ru": [
      "однако на наших двух все еще есть проблемы, поэтому наш туннель еще не работает"
    ]
  },
  {
    "time": [
      179.138657,
      182.499451
    ],
    "en": [
      "let's go on our to"
    ],
    "ru": [
      "давай продолжим"
    ]
  },
  {
    "time": [
      182.499451,
      191.521696
    ],
    "en": [
      "enable I'll quickly check the EIG RP configuration here on our to"
    ],
    "ru": [
      "включить Я быстро проверю конфигурацию EIG RP здесь, на нашем сайте"
    ]
  },
  {
    "time": [
      191.521696,
      194.224666
    ],
    "en": [
      "show IP protocols"
    ],
    "ru": [
      "показать IP-протоколы"
    ]
  },
  {
    "time": [
      194.224666,
      201.604009
    ],
    "en": [
      "EW GFP is activated for 1002 0/24"
    ],
    "ru": [
      "EW GFP активирован для 1002 0/24"
    ]
  },
  {
    "time": [
      201.604009,
      207.124077
    ],
    "en": [
      "which is G 0 0 and 192.168.1.0 / 30"
    ],
    "ru": [
      "что G 0 0 и 192.168.1.0 / 30"
    ]
  },
  {
    "time": [
      207.124077,
      208.695052
    ],
    "en": [
      "which is the tunnel interface"
    ],
    "ru": [
      "который является туннельным интерфейсом"
    ]
  },
  {
    "time": [
      208.695052,
      211.668317
    ],
    "en": [
      "so the AI g RP configuration looks good"
    ],
    "ru": [
      "так что конфигурация AI g RP выглядит хорошо"
    ]
  },
  {
    "time": [
      211.668317,
      214.875233
    ],
    "en": [
      "let's check the tunnel"
    ],
    "ru": [
      "давай проверим туннель"
    ]
  },
  {
    "time": [
      214.875233,
      218.337025
    ],
    "en": [
      "show interface Tunnel zero"
    ],
    "ru": [
      "показать интерфейс Tunnel zero"
    ]
  },
  {
    "time": [
      218.337025,
      222.834258
    ],
    "en": [
      "the tunnel destination is correct"
    ],
    "ru": [
      "пункт назначения туннеля правильный"
    ]
  },
  {
    "time": [
      222.834258,
      224.78317
    ],
    "en": [
      "but the source isn't"
    ],
    "ru": [
      "но источник не"
    ]
  },
  {
    "time": [
      224.78317,
      230.029224
    ],
    "en": [
      "the tunnel source is the inside interface Gigabit Ethernet 0 0"
    ],
    "ru": [
      "источником туннеля является внутренний интерфейс Gigabit Ethernet 0 0"
    ]
  },
  {
    "time": [
      230.029224,
      233.928453
    ],
    "en": [
      "but it should be the interface connected to the service provider"
    ],
    "ru": [
      "но это должен быть интерфейс, подключенный к поставщику услуг"
    ]
  },
  {
    "time": [
      233.928453,
      235.745188
    ],
    "en": [
      "serial 0 0 0"
    ],
    "ru": [
      "серийный 0 0 0"
    ]
  },
  {
    "time": [
      235.745188,
      238.07004
    ],
    "en": [
      "Koff t"
    ],
    "ru": [
      "Кофф т"
    ]
  },
  {
    "time": [
      238.07004,
      240.554122
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
      240.554122,
      244.575211
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
      244.575211,
      248.089564
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
      248.089564,
      252.460789
    ],
    "en": [
      "the tunnel still isn't up"
    ],
    "ru": [
      "туннель все еще не открыт"
    ]
  },
  {
    "time": [
      252.460789,
      255.272988
    ],
    "en": [
      "let's check one other important thing"
    ],
    "ru": [
      "давайте проверим еще одну важную вещь"
    ]
  },
  {
    "time": [
      255.272988,
      258.77131
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
      258.77131,
      268.282059
    ],
    "en": [
      "there is no route allowing us to reach the tunnel destination of 100 oh oh -"
    ],
    "ru": [
      "нет маршрута, который позволил бы нам добраться до пункта назначения туннеля 100 ой ой -"
    ]
  },
  {
    "time": [
      268.282059,
      271.795256
    ],
    "en": [
      "remember the tunnel destination address must be reachable"
    ],
    "ru": [
      "помните, что адрес назначения туннеля должен быть доступен"
    ]
  },
  {
    "time": [
      271.795256,
      276.748589
    ],
    "en": [
      "let's configure a static default route pointing to the service provider"
    ],
    "ru": [
      "давайте настроим статический маршрут по умолчанию, указывающий на поставщика услуг"
    ]
  },
  {
    "time": [
      276.748589,
      288.686412
    ],
    "en": [
      "exit IP route oh oh oh oh oh oh oh oh 201"
    ],
    "ru": [
      "выход IP-маршрута ой ой ой ой ой ой ой ой 201"
    ]
  },
  {
    "time": [
      288.686412,
      292.166367
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
      292.166367,
      295.059609
    ],
    "en": [
      "okay looks like it's up now"
    ],
    "ru": [
      "хорошо, похоже, что это сейчас"
    ]
  },
  {
    "time": [
      295.059609,
      297.71902
    ],
    "en": [
      "let's try to ping the other end"
    ],
    "ru": [
      "давай попробуем пинговать другой конец"
    ]
  },
  {
    "time": [
      297.71902,
      302.225097
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
      302.225097,
      308.741401
    ],
    "en": [
      "okay it's working now"
    ],
    "ru": [
      "хорошо, сейчас работает"
    ]
  },
  {
    "time": [
      308.741401,
      313.623827
    ],
    "en": [
      "now are we getting the EIG our peer out to our ones internal network"
    ],
    "ru": [
      "теперь мы выводим EIG, наш одноранговый узел, в нашу внутреннюю сеть"
    ]
  },
  {
    "time": [
      313.623827,
      316.440766
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
      316.440766,
      319.664893
    ],
    "en": [
      "there it is"
    ],
    "ru": [
      "вот оно"
    ]
  },
  {
    "time": [
      319.664893,
      322.773714
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
      319.664893,
      322.773714
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
      322.773714,
      326.036979
    ],
    "en": [
      "finally let's try a ping from PC to 2 PC one"
    ],
    "ru": [
      "наконец-то попробуем пинг с ПК на 2 ПК один"
    ]
  },
  {
    "time": [
      326.036979,
      334.34326
    ],
    "en": [
      "ting 1001 dot 100"
    ],
    "ru": [
      "ting 1001 точка 100"
    ]
  },
  {
    "time": [
      334.34326,
      345.845981
    ],
    "en": [
      "okay our ping worked"
    ],
    "ru": [
      "хорошо, наш пинг работал"
    ]
  },
  {
    "time": [
      345.845981,
      349.169744
    ],
    "en": [
      "we have solved the issues and fixed the GRE tunnel"
    ],
    "ru": [
      "мы решили проблемы и исправили туннель GRE"
    ]
  },
  {
    "time": [
      349.169744,
      351.091876
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
      351.091876,
      359.362375
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
      359.362375,
      363.826547
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
      363.826547,
      369.069472
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
      369.069472,
      377.059019
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
      377.059019,
      385.510583
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
      385.510583,
      385.510583
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
      385.510583,
      385.510583
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
      385.510583,
      385.510583
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]