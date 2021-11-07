let objs = [
  {
    "time": [
      0.0,
      4.161972
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
      4.161972,
      8.164103
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
      8.164103,
      14.651768
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
      14.651768,
      19.364648
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
      19.364648,
      22.749568
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
      22.749568,
      27.370861
    ],
    "en": [
      "in this lab we will troubleshoot bgp"
    ],
    "ru": [
      "в этой лабораторной работе мы устраним проблемы с bgp"
    ]
  },
  {
    "time": [
      27.370861,
      30.338684
    ],
    "en": [
      "using the same network we configured in the previous lab"
    ],
    "ru": [
      "используя ту же сеть, которую мы настроили в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      30.338684,
      34.846507
    ],
    "en": [
      "there are three misconfigurations all on our one"
    ],
    "ru": [
      "у нас всего три неправильной конфигурации"
    ]
  },
  {
    "time": [
      34.846507,
      36.542765
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
      36.542765,
      45.014466
    ],
    "en": [
      "enable our one is displaying lots of messages regarding OSPF and BGP"
    ],
    "ru": [
      "включить наш, отображает много сообщений относительно OSPF и BGP"
    ]
  },
  {
    "time": [
      45.014466,
      47.953514
    ],
    "en": [
      "let's focus on this BGP one first"
    ],
    "ru": [
      "давайте сначала сосредоточимся на этом BGP"
    ]
  },
  {
    "time": [
      47.953514,
      50.205985
    ],
    "en": [
      "peer in wrong a s"
    ],
    "ru": [
      "заглядывать не так"
    ]
  },
  {
    "time": [
      50.205985,
      52.327504
    ],
    "en": [
      "let's investigate here"
    ],
    "ru": [
      "давайте исследуем здесь"
    ]
  },
  {
    "time": [
      52.327504,
      56.001087
    ],
    "en": [
      "show IP BGP summary"
    ],
    "ru": [
      "показать сводку IP BGP"
    ]
  },
  {
    "time": [
      56.001087,
      60.986371
    ],
    "en": [
      "notice the bgp router ID of one 1.1.1"
    ],
    "ru": [
      "обратите внимание на идентификатор маршрутизатора bgp 1.1.1"
    ]
  },
  {
    "time": [
      60.986371,
      62.803808
    ],
    "en": [
      "taken from the loopback interface"
    ],
    "ru": [
      "взято из интерфейса обратной связи"
    ]
  },
  {
    "time": [
      62.803808,
      65.529341
    ],
    "en": [
      "just like in Eid RP and OSPF"
    ],
    "ru": [
      "как в Eid RP и OSPF"
    ]
  },
  {
    "time": [
      65.529341,
      68.783967
    ],
    "en": [
      "look down at our neighbor here"
    ],
    "ru": [
      "посмотри на нашего соседа здесь"
    ]
  },
  {
    "time": [
      68.783967,
      1.0
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
      1.0,
      72.914965
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
      72.914965,
      76.755464
    ],
    "en": [
      "however the AS IS 6500"
    ],
    "ru": [
      "однако AS IS 6500"
    ]
  },
  {
    "time": [
      76.755464,
      80.684897
    ],
    "en": [
      "which is why r1 is displaying the peer in wrong a s message"
    ],
    "ru": [
      "вот почему r1 отображает однорангового узла в неправильном сообщении s"
    ]
  },
  {
    "time": [
      80.684897,
      85.333445
    ],
    "en": [
      "SP r 1 is actually in a s 65,000 one"
    ],
    "ru": [
      "SP r 1 на самом деле составляет 65000 единиц."
    ]
  },
  {
    "time": [
      85.333445,
      89.042628
    ],
    "en": [
      "show IP BGP neighbor"
    ],
    "ru": [
      "показать соседа IP BGP"
    ]
  },
  {
    "time": [
      89.042628,
      96.257866
    ],
    "en": [
      "up here by the top you can see BGP state equals idle"
    ],
    "ru": [
      "здесь вверху видно, что состояние BGP равно простоя"
    ]
  },
  {
    "time": [
      96.257866,
      98.699612
    ],
    "en": [
      "that's the initial BGP state"
    ],
    "ru": [
      "это начальное состояние BGP"
    ]
  },
  {
    "time": [
      98.699612,
      102.510905
    ],
    "en": [
      "and if a wrong peer a s is configured"
    ],
    "ru": [
      "и если настроен неправильный одноранговый узел"
    ]
  },
  {
    "time": [
      102.510905,
      104.944057
    ],
    "en": [
      "BGP won't proceed further than this state"
    ],
    "ru": [
      "BGP не продвинется дальше этого состояния"
    ]
  },
  {
    "time": [
      104.944057,
      106.760157
    ],
    "en": [
      "let's fix it"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      106.760157,
      108.400882
    ],
    "en": [
      "coffee tea"
    ],
    "ru": [
      "кофе чай"
    ]
  },
  {
    "time": [
      108.400882,
      113.381902
    ],
    "en": [
      "router bgp 65,000"
    ],
    "ru": [
      "маршрутизатор bgp 65,000"
    ]
  },
  {
    "time": [
      113.381902,
      119.407027
    ],
    "en": [
      "neighbor 101 remote a s 65 thousand won"
    ],
    "ru": [
      "Neighbor 101 Remote A S 65 тысяч вон"
    ]
  },
  {
    "time": [
      119.407027,
      123.184986
    ],
    "en": [
      "immediately we get a message saying the neighbor is up"
    ],
    "ru": [
      "сразу мы получаем сообщение о том, что сосед встал"
    ]
  },
  {
    "time": [
      123.184986,
      126.375462
    ],
    "en": [
      "do show IP BGP neighbour"
    ],
    "ru": [
      "показывать IP BGP соседа"
    ]
  },
  {
    "time": [
      126.375462,
      130.373716
    ],
    "en": [
      "now the state is established"
    ],
    "ru": [
      "теперь государство установлено"
    ]
  },
  {
    "time": [
      130.373716,
      131.719815
    ],
    "en": [
      "that's what we want"
    ],
    "ru": [
      "это то, что мы хотим"
    ]
  },
  {
    "time": [
      131.719815,
      135.744961
    ],
    "en": [
      "however we keep getting these OSPF messages"
    ],
    "ru": [
      "однако мы продолжаем получать эти сообщения OSPF"
    ]
  },
  {
    "time": [
      135.744961,
      137.066775
    ],
    "en": [
      "something's up there"
    ],
    "ru": [
      "что-то там наверху"
    ]
  },
  {
    "time": [
      137.066775,
      140.462693
    ],
    "en": [
      "the message clearly tells us what's up actually"
    ],
    "ru": [
      "сообщение ясно говорит нам, что происходит на самом деле"
    ]
  },
  {
    "time": [
      140.462693,
      142.564461
    ],
    "en": [
      "mismatch area ID"
    ],
    "ru": [
      "несовпадение ID области"
    ]
  },
  {
    "time": [
      142.564461,
      145.782398
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
      145.782398,
      149.29174
    ],
    "en": [
      "we aren't getting any OSPF routes"
    ],
    "ru": [
      "у нас нет маршрутов OSPF"
    ]
  },
  {
    "time": [
      149.29174,
      151.739563
    ],
    "en": [
      "because of the area ID mismatch"
    ],
    "ru": [
      "из-за несоответствия идентификатора области"
    ]
  },
  {
    "time": [
      151.739563,
      154.898248
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
      154.898248,
      158.872715
    ],
    "en": [
      "there's the problem"
    ],
    "ru": [
      "вот проблема"
    ]
  },
  {
    "time": [
      158.872715,
      162.460221
    ],
    "en": [
      "oh SPF is activated on all interfaces in area 1"
    ],
    "ru": [
      "oh SPF активирован на всех интерфейсах в области 1"
    ]
  },
  {
    "time": [
      162.460221,
      164.458452
    ],
    "en": [
      "it should be area 0"
    ],
    "ru": [
      "это должна быть область 0"
    ]
  },
  {
    "time": [
      164.458452,
      168.271354
    ],
    "en": [
      "I'll remove the current network statement and fix it"
    ],
    "ru": [
      "Я удалю текущий сетевой оператор и исправлю его"
    ]
  },
  {
    "time": [
      168.271354,
      171.67149
    ],
    "en": [
      "router OSPF 1"
    ],
    "ru": [
      "роутер OSPF 1"
    ]
  },
  {
    "time": [
      171.67149,
      173.412125
    ],
    "en": [
      "no network"
    ],
    "ru": [
      "нет сети"
    ]
  },
  {
    "time": [
      173.412125,
      179.868633
    ],
    "en": [
      "oh-oh-oh-oh 255 255 dot 255 dot 255 area 1"
    ],
    "ru": [
      "ой-ой-ой-ой 255 255 точек 255 точек 255 область 1"
    ]
  },
  {
    "time": [
      179.868633,
      187.518406
    ],
    "en": [
      "Network oh-oh-oh-oh 255 dot 255 dot 255 dot 255 area 0"
    ],
    "ru": [
      "Сеть ой-ой-ой-ой 255 точек 255 точек 255 точек 255 областей 0"
    ]
  },
  {
    "time": [
      187.518406,
      191.763531
    ],
    "en": [
      "ok that should fix our OSPF problem"
    ],
    "ru": [
      "хорошо, это должно решить нашу проблему с OSPF"
    ]
  },
  {
    "time": [
      191.763531,
      194.852919
    ],
    "en": [
      "although this was an OSPF problem"
    ],
    "ru": [
      "хотя это была проблема OSPF"
    ]
  },
  {
    "time": [
      194.852919,
      196.472374
    ],
    "en": [
      "it's relevant to BGP"
    ],
    "ru": [
      "это относится к BGP"
    ]
  },
  {
    "time": [
      196.472374,
      201.3031
    ],
    "en": [
      "because the OSPF problem was causing routes not to appear in our ones route table"
    ],
    "ru": [
      "потому что проблема OSPF привела к тому, что маршруты не отображались в нашей таблице маршрутов"
    ]
  },
  {
    "time": [
      201.3031,
      203.397204
    ],
    "en": [
      "which affects BGP"
    ],
    "ru": [
      "что влияет на BGP"
    ]
  },
  {
    "time": [
      203.397204,
      206.841148
    ],
    "en": [
      "there should still be one more issue on our one"
    ],
    "ru": [
      "по-прежнему должна быть еще одна проблема по нашему"
    ]
  },
  {
    "time": [
      206.841148,
      212.078903
    ],
    "en": [
      "but I'll head to r2 and test if we can reach the external server at 1501"
    ],
    "ru": [
      "но я пойду на r2 и проверю, сможем ли мы связаться с внешним сервером по адресу 1501"
    ]
  },
  {
    "time": [
      212.078903,
      219.11523
    ],
    "en": [
      "enable pin 1500 1"
    ],
    "ru": [
      "включить контакт 1500 1"
    ]
  },
  {
    "time": [
      219.11523,
      231.39879
    ],
    "en": [
      "nope the ping still fail"
    ],
    "ru": [
      "нет, пинг все еще не работает"
    ]
  },
  {
    "time": [
      231.39879,
      233.200196
    ],
    "en": [
      "so let's go back to our one"
    ],
    "ru": [
      "так что вернемся к нашему"
    ]
  },
  {
    "time": [
      233.200196,
      242.193688
    ],
    "en": [
      "our one should be advertising at 1000s 516 summary to the service provider"
    ],
    "ru": [
      "наш должен рекламировать на 1000s 516 резюме поставщику услуг"
    ]
  },
  {
    "time": [
      242.193688,
      245.311896
    ],
    "en": [
      "let's check if it's in the rev table on our one"
    ],
    "ru": [
      "давайте проверим, есть ли это в таблице оборотов на нашем"
    ]
  },
  {
    "time": [
      245.311896,
      248.06269
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
      248.06269,
      251.056431
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
      251.056431,
      253.844821
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
      251.056431,
      253.844821
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
      253.844821,
      256.958789
    ],
    "en": [
      "let's check the BGP table"
    ],
    "ru": [
      "давайте проверим таблицу BGP"
    ]
  },
  {
    "time": [
      256.958789,
      260.067882
    ],
    "en": [
      "show IP BGP"
    ],
    "ru": [
      "показать IP BGP"
    ]
  },
  {
    "time": [
      260.067882,
      264.040127
    ],
    "en": [
      "however it doesn't show up in the BGP table"
    ],
    "ru": [
      "однако он не отображается в таблице BGP"
    ]
  },
  {
    "time": [
      264.040127,
      266.573052
    ],
    "en": [
      "let's check the running config"
    ],
    "ru": [
      "давайте проверим работающую конфигурацию"
    ]
  },
  {
    "time": [
      266.573052,
      269.045365
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      269.045365,
      272.561669
    ],
    "en": [
      "there's the problem"
    ],
    "ru": [
      "вот проблема"
    ]
  },
  {
    "time": [
      272.561669,
      277.055864
    ],
    "en": [
      "the 10000 network is configured with a slash 8 mask"
    ],
    "ru": [
      "сеть 10000 настроена с маской косой черты 8"
    ]
  },
  {
    "time": [
      277.055864,
      281.323982
    ],
    "en": [
      "although it doesn't appear here because it defaults to the class a boundary"
    ],
    "ru": [
      "хотя он не отображается здесь, потому что по умолчанию он соответствует классу граница"
    ]
  },
  {
    "time": [
      281.323982,
      285.537859
    ],
    "en": [
      "but remember BGP requires an exact match in the router table"
    ],
    "ru": [
      "но помните, что BGP требует точного совпадения в таблице маршрутизатора"
    ]
  },
  {
    "time": [
      285.537859,
      287.972825
    ],
    "en": [
      "let's fix that Network statement"
    ],
    "ru": [
      "давайте исправим это заявление о сети"
    ]
  },
  {
    "time": [
      287.972825,
      293.02609
    ],
    "en": [
      "router bgp 65,000"
    ],
    "ru": [
      "маршрутизатор bgp 65,000"
    ]
  },
  {
    "time": [
      293.02609,
      304.77618
    ],
    "en": [
      "no network 10000 Network 10000 mask 255.255.255.0 dot 1"
    ],
    "ru": [
      "нет сети 10000 Сеть 10000 маска 255.255.255.0 точка 1"
    ]
  },
  {
    "time": [
      304.77618,
      328.091847
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
      328.091847,
      329.379806
    ],
    "en": [
      "ok the ping works now"
    ],
    "ru": [
      "хорошо, пинг теперь работает"
    ]
  },
  {
    "time": [
      329.379806,
      332.730441
    ],
    "en": [
      "we've successfully solved the problems on the network"
    ],
    "ru": [
      "мы успешно решили проблемы в сети"
    ]
  },
  {
    "time": [
      332.730441,
      334.452731
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
      334.452731,
      338.593525
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      338.593525,
      341.946949
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      341.946949,
      346.949534
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
      346.949534,
      351.451234
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
      351.451234,
      357.939874
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
      357.939874,
      367.198422
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
      367.198422,
      367.198422
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
      367.198422,
      367.198422
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
      367.198422,
      367.198422
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]