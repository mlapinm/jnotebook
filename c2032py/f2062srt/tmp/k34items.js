let objs = [
  {
    "time": [
      0.0,
      5.188707
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
      5.188707,
      7.760187
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
      7.760187,
      15.568145
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
      15.568145,
      19.679999
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
      19.679999,
      30.086853
    ],
    "en": [
      "in this lab we will troubleshoot a multi area OSPF network in which neighbor relationships aren't properly forming and roads that should be advertised are not"
    ],
    "ru": [
      "В этой лабораторной работе мы будем устранять неполадки в многозональной сети OSPF, в которой отношения между соседями не формируются должным образом, а дороги, которые следует рекламировать, не"
    ]
  },
  {
    "time": [
      30.086853,
      31.55654
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
      31.55654,
      34.688684
    ],
    "en": [
      "first let's go on our one"
    ],
    "ru": [
      "сначала давайте перейдем к нашему"
    ]
  },
  {
    "time": [
      34.688684,
      41.237205
    ],
    "en": [
      "enable show IP ospf neighbor"
    ],
    "ru": [
      "включить показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      41.237205,
      46.53933
    ],
    "en": [
      "our one has become OSPF neighbors with our two"
    ],
    "ru": [
      "наш один стал соседом OSPF с двумя нашими"
    ]
  },
  {
    "time": [
      46.53933,
      47.96708
    ],
    "en": [
      "but not our four"
    ],
    "ru": [
      "но не наша четверка"
    ]
  },
  {
    "time": [
      47.96708,
      55.47683
    ],
    "en": [
      "show IP protocols looks like our ones interfaces are in the proper areas"
    ],
    "ru": [
      "Показать IP-протоколы выглядят так, как будто наши интерфейсы находятся в нужных областях"
    ]
  },
  {
    "time": [
      55.47683,
      57.918642
    ],
    "en": [
      "as you can see they're both in area one"
    ],
    "ru": [
      "как вы можете видеть, они оба в области один"
    ]
  },
  {
    "time": [
      57.918642,
      61.651121
    ],
    "en": [
      "however you may notice one problem here on our one our one"
    ],
    "ru": [
      "однако вы можете заметить одну проблему здесь, на нашем"
    ]
  },
  {
    "time": [
      61.651121,
      65.855725
    ],
    "en": [
      "isn't advertising it's loopback of 1.1.1.1"
    ],
    "ru": [
      "не рекламирует это шлейф 1.1.1.1"
    ]
  },
  {
    "time": [
      65.855725,
      68.626016
    ],
    "en": [
      "if I go on our -"
    ],
    "ru": [
      "если я пойду по нашему -"
    ]
  },
  {
    "time": [
      68.626016,
      70.390474
    ],
    "en": [
      "it won't appear in the routing table"
    ],
    "ru": [
      "он не появится в таблице маршрутизации"
    ]
  },
  {
    "time": [
      70.390474,
      81.025078
    ],
    "en": [
      "enable show IP route indeed it's receiving the 10.14.0"
    ],
    "ru": [
      "включить показ IP-маршрута, он действительно получает 10.14.0"
    ]
  },
  {
    "time": [
      81.025078,
      83.941036
    ],
    "en": [
      "but not 1.1.1.1 from our one"
    ],
    "ru": [
      "а не 1.1.1.1 из нашего"
    ]
  },
  {
    "time": [
      83.941036,
      87.629015
    ],
    "en": [
      "let's fix that on our one"
    ],
    "ru": [
      "давайте исправим это на нашем"
    ]
  },
  {
    "time": [
      87.629015,
      94.237702
    ],
    "en": [
      "coffee tea router OSPF one"
    ],
    "ru": [
      "кофе-чай роутер OSPF one"
    ]
  },
  {
    "time": [
      94.237702,
      101.598764
    ],
    "en": [
      "network 1.1.1 1.00 200 area 1"
    ],
    "ru": [
      "сеть 1.1.1 1.00 200 область 1"
    ]
  },
  {
    "time": [
      101.598764,
      105.349118
    ],
    "en": [
      "also the loopback should be a passive interface"
    ],
    "ru": [
      "также loopback должен быть пассивным интерфейсом"
    ]
  },
  {
    "time": [
      105.349118,
      108.990784
    ],
    "en": [
      "passive interface l0"
    ],
    "ru": [
      "пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      108.990784,
      112.17218
    ],
    "en": [
      "ok now let's check again on our to"
    ],
    "ru": [
      "хорошо, теперь давайте еще раз проверим наш"
    ]
  },
  {
    "time": [
      112.17218,
      117.300618
    ],
    "en": [
      "show IP route"
    ],
    "ru": [
      "показать IP-маршрут"
    ]
  },
  {
    "time": [
      117.300618,
      123.347493
    ],
    "en": [
      "there it is so we fix our problem on our one"
    ],
    "ru": [
      "вот так мы исправляем нашу проблему на нашем"
    ]
  },
  {
    "time": [
      123.347493,
      127.83643
    ],
    "en": [
      "let's go on our four and see what's the issue"
    ],
    "ru": [
      "пойдем на нашу четверку и посмотрим, в чем проблема"
    ]
  },
  {
    "time": [
      127.83643,
      134.134659
    ],
    "en": [
      "enable show IP ospf neighbors"
    ],
    "ru": [
      "включить показывать IP-адреса соседей ospf"
    ]
  },
  {
    "time": [
      134.134659,
      137.657722
    ],
    "en": [
      "indeed our four has no OSPF neighbors"
    ],
    "ru": [
      "действительно у нашей четверки нет соседей по OSPF"
    ]
  },
  {
    "time": [
      137.657722,
      140.598888
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
      140.598888,
      143.918055
    ],
    "en": [
      "can you spot the problem"
    ],
    "ru": [
      "ты можешь определить проблему?"
    ]
  },
  {
    "time": [
      143.918055,
      147.77843
    ],
    "en": [
      "our 4s g00 interface is a passive interface"
    ],
    "ru": [
      "наш интерфейс 4s g00 - пассивный интерфейс"
    ]
  },
  {
    "time": [
      147.77843,
      151.958847
    ],
    "en": [
      "this means it won't form neighbor relationships on that interface"
    ],
    "ru": [
      "это означает, что он не будет формировать отношения между соседями на этом интерфейсе"
    ]
  },
  {
    "time": [
      151.958847,
      155.562784
    ],
    "en": [
      "it will still advertise the network on that interface"
    ],
    "ru": [
      "он по-прежнему будет рекламировать сеть на этом интерфейсе"
    ]
  },
  {
    "time": [
      155.562784,
      158.911138
    ],
    "en": [
      "although in this case it has no neighbors to advertise it to"
    ],
    "ru": [
      "хотя в этом случае у него нет соседей, чтобы рекламировать его"
    ]
  },
  {
    "time": [
      158.911138,
      160.522867
    ],
    "en": [
      "let's fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      160.522867,
      165.822783
    ],
    "en": [
      "conf T router OSPF one"
    ],
    "ru": [
      "conf T маршрутизатор OSPF one"
    ]
  },
  {
    "time": [
      165.822783,
      170.425762
    ],
    "en": [
      "no passive interface G zero zero"
    ],
    "ru": [
      "нет пассивного интерфейса G ноль ноль"
    ]
  },
  {
    "time": [
      170.425762,
      176.654845
    ],
    "en": [
      "now r1 and r4 should be trying to form an OSPF neighbor relationship"
    ],
    "ru": [
      "теперь r1 и r4 должны пытаться сформировать отношения соседства OSPF"
    ]
  },
  {
    "time": [
      176.654845,
      178.86824
    ],
    "en": [
      "I'll wait a few seconds"
    ],
    "ru": [
      "Я подожду несколько секунд"
    ]
  },
  {
    "time": [
      178.86824,
      188.140761
    ],
    "en": [
      "okay now let's confirm with a show command"
    ],
    "ru": [
      "хорошо, теперь давайте подтвердим с помощью команды show"
    ]
  },
  {
    "time": [
      188.140761,
      192.110365
    ],
    "en": [
      "do show IP ospf neighbor"
    ],
    "ru": [
      "показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      192.110365,
      196.496511
    ],
    "en": [
      "there it is r1 and r4 are OSPF neighbors"
    ],
    "ru": [
      "там r1 и r4 - соседи OSPF"
    ]
  },
  {
    "time": [
      196.496511,
      201.87749
    ],
    "en": [
      "next let's check out our to"
    ],
    "ru": [
      "Далее давайте посмотрим на нашу"
    ]
  },
  {
    "time": [
      201.87749,
      206.785032
    ],
    "en": [
      "show IP ospf neighbors"
    ],
    "ru": [
      "показать IP соседей ospf"
    ]
  },
  {
    "time": [
      206.785032,
      211.589782
    ],
    "en": [
      "it's formed a relationship with r1 but not r3"
    ],
    "ru": [
      "он сформировал отношения с r1, но не с r3"
    ]
  },
  {
    "time": [
      211.589782,
      213.702053
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
      213.702053,
      220.29072
    ],
    "en": [
      "I don't see any problems here 10.12 da da o is in area 1"
    ],
    "ru": [
      "Я не вижу здесь проблем 10.12 da da o в зоне 1"
    ]
  },
  {
    "time": [
      220.29072,
      225.052865
    ],
    "en": [
      "and 10.20 300 and the loopback interface are in area 0"
    ],
    "ru": [
      "и 10.20 300 и интерфейс обратной связи находятся в области 0"
    ]
  },
  {
    "time": [
      225.052865,
      228.620095
    ],
    "en": [
      "show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      228.620095,
      231.43597
    ],
    "en": [
      "here's our issue"
    ],
    "ru": [
      "вот наша проблема"
    ]
  },
  {
    "time": [
      231.43597,
      237.637011
    ],
    "en": [
      "it's not an OSPF configuration issue the f20 interface itself is administratively down"
    ],
    "ru": [
      "это не проблема конфигурации OSPF, сам интерфейс f20 отключен административно"
    ]
  },
  {
    "time": [
      237.637011,
      239.80974
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      239.80974,
      246.116906
    ],
    "en": [
      "there you can see it has the shutdown command configured"
    ],
    "ru": [
      "там вы можете видеть, что у него настроена команда выключения"
    ]
  },
  {
    "time": [
      246.116906,
      251.782698
    ],
    "en": [
      "compte interface f2 0 no shutdown"
    ],
    "ru": [
      "интерфейс compte f2 0 без выключения"
    ]
  },
  {
    "time": [
      251.782698,
      258.202552
    ],
    "en": [
      "ok now let's see if it's forming a OSPF neighbor ship with r3"
    ],
    "ru": [
      "хорошо, теперь давайте посмотрим, образует ли он соседний корабль OSPF с r3"
    ]
  },
  {
    "time": [
      258.202552,
      261.894614
    ],
    "en": [
      "do show IP ospf neighbor"
    ],
    "ru": [
      "показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      261.894614,
      267.109468
    ],
    "en": [
      "that's odd r2 still isn't forming an OSPF relationship with r3"
    ],
    "ru": [
      "это странно, r2 все еще не формирует отношения OSPF с r3"
    ]
  },
  {
    "time": [
      267.109468,
      273.162072
    ],
    "en": [
      "well we fix the issue here on r2 so let's go on r3"
    ],
    "ru": [
      "Что ж, мы исправим проблему здесь, на r2, так что давайте перейдем к r3"
    ]
  },
  {
    "time": [
      273.162072,
      279.790092
    ],
    "en": [
      "enable show IP ospf neighbor"
    ],
    "ru": [
      "включить показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      279.790092,
      284.236426
    ],
    "en": [
      "so r3 has 1 OSPF neighbor"
    ],
    "ru": [
      "так что у r3 есть 1 сосед OSPF"
    ]
  },
  {
    "time": [
      284.236426,
      288.534051
    ],
    "en": [
      "r5 show IP protocols"
    ],
    "ru": [
      "r5 показать IP-протоколы"
    ]
  },
  {
    "time": [
      288.534051,
      292.298613
    ],
    "en": [
      "can you spot the issue on r3"
    ],
    "ru": [
      "Вы можете найти проблему на r3"
    ]
  },
  {
    "time": [
      292.298613,
      296.474988
    ],
    "en": [
      "it's 10.20 300 network should be in area 0"
    ],
    "ru": [
      "это 10.20 300 сеть должна быть в области 0"
    ]
  },
  {
    "time": [
      296.474988,
      297.879655
    ],
    "en": [
      "not area 2"
    ],
    "ru": [
      "не область 2"
    ]
  },
  {
    "time": [
      297.879655,
      309.42403
    ],
    "en": [
      "coughed T router OSPF one network 10.23.0.0 0.0.0.255 area 0"
    ],
    "ru": [
      "кашлял T роутер OSPF одна сеть 10.23.0.0 0.0.0.255 область 0"
    ]
  },
  {
    "time": [
      309.42403,
      312.228801
    ],
    "en": [
      "ok now let's wait a few seconds"
    ],
    "ru": [
      "хорошо, теперь подождем несколько секунд"
    ]
  },
  {
    "time": [
      312.228801,
      325.369738
    ],
    "en": [
      "okay and now let's check and see if it's forming a SPF neighbor ship with our to"
    ],
    "ru": [
      "хорошо, а теперь давайте проверим и посмотрим, образует ли он соседний корабль SPF с нашим"
    ]
  },
  {
    "time": [
      325.369738,
      330.130071
    ],
    "en": [
      "do show IP ospf neighbor"
    ],
    "ru": [
      "показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      330.130071,
      335.647905
    ],
    "en": [
      "okay there it is r2 and r3 are now OSPF neighbors"
    ],
    "ru": [
      "хорошо, это r2 и r3 теперь соседи OSPF"
    ]
  },
  {
    "time": [
      335.647905,
      339.658134
    ],
    "en": [
      "finally let's see what's wrong on r5"
    ],
    "ru": [
      "наконец-то посмотрим, что не так на r5"
    ]
  },
  {
    "time": [
      339.658134,
      346.475551
    ],
    "en": [
      "an able show IP ospf neighbor"
    ],
    "ru": [
      "способный показать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      346.475551,
      352.123426
    ],
    "en": [
      "so r5 has successfully become OSPF neighbors with r3"
    ],
    "ru": [
      "поэтому r5 успешно стал соседом OSPF с r3"
    ]
  },
  {
    "time": [
      352.123426,
      358.895551
    ],
    "en": [
      "however in the lab instructions it says that the ropes r5 is receiving aren't being properly summarized"
    ],
    "ru": [
      "однако в лабораторных инструкциях говорится, что веревки, которые получает r5, не суммируются должным образом"
    ]
  },
  {
    "time": [
      358.895551,
      361.614821
    ],
    "en": [
      "show IP route"
    ],
    "ru": [
      "показать IP-маршрут"
    ]
  },
  {
    "time": [
      361.614821,
      371.214009
    ],
    "en": [
      "indeed r5 should be receiving a 10.0.0.0 / 8 summary but it's receiving individual network routes instead"
    ],
    "ru": [
      "действительно, r5 должен получать сводку 10.0.0.0 / 8, но вместо этого он получает отдельные сетевые маршруты"
    ]
  },
  {
    "time": [
      371.214009,
      375.157571
    ],
    "en": [
      "so there's probably another issue on r3 let's go back"
    ],
    "ru": [
      "так что, вероятно, на r3 есть еще одна проблема, давайте вернемся"
    ]
  },
  {
    "time": [
      375.157571,
      380.474341
    ],
    "en": [
      "let's see how or if r3 is summarizing"
    ],
    "ru": [
      "давайте посмотрим, как или если r3 подводит итоги"
    ]
  },
  {
    "time": [
      380.474341,
      392.526404
    ],
    "en": [
      "do show run area to range 10.0.0.0 to 5500"
    ],
    "ru": [
      "показывать область бега в диапазоне от 10.0.0.0 до 5500"
    ]
  },
  {
    "time": [
      392.526404,
      398.184821
    ],
    "en": [
      "there's the problem it's an easy mistake to make because you want to advertise the summary to area 2"
    ],
    "ru": [
      "есть проблема, которую легко сделать, потому что вы хотите рекламировать резюме в области 2"
    ]
  },
  {
    "time": [
      398.184821,
      401.278321
    ],
    "en": [
      "you might want to use the area to range command"
    ],
    "ru": [
      "вы можете использовать команду области для диапазона"
    ]
  },
  {
    "time": [
      401.278321,
      405.034175
    ],
    "en": [
      "however the correct answer is area 0 range"
    ],
    "ru": [
      "однако правильный ответ - диапазон 0"
    ]
  },
  {
    "time": [
      405.034175,
      409.541112
    ],
    "en": [
      "I'll copy this command"
    ],
    "ru": [
      "Я скопирую эту команду"
    ]
  },
  {
    "time": [
      409.541112,
      413.817882
    ],
    "en": [
      "and then paste it here and cancel it with no"
    ],
    "ru": [
      "а затем вставьте его сюда и отмените без"
    ]
  },
  {
    "time": [
      413.817882,
      416.561777
    ],
    "en": [
      "now let's put in the correct command"
    ],
    "ru": [
      "теперь давайте введем правильную команду"
    ]
  },
  {
    "time": [
      416.561777,
      425.834277
    ],
    "en": [
      "area 0 range 10.0.0.0 255 0 0 0"
    ],
    "ru": [
      "область 0 диапазон 10.0.0.0 255 0 0 0"
    ]
  },
  {
    "time": [
      425.834277,
      429.385715
    ],
    "en": [
      "remember the area range command uses a regular mask"
    ],
    "ru": [
      "помните, что команда диапазона области использует обычную маску"
    ]
  },
  {
    "time": [
      429.385715,
      431.245819
    ],
    "en": [
      "not a wildcard mask"
    ],
    "ru": [
      "не подстановочная маска"
    ]
  },
  {
    "time": [
      431.245819,
      435.636236
    ],
    "en": [
      "ok let's go back to our 5 and see if it's receiving the summary read"
    ],
    "ru": [
      "хорошо, давайте вернемся к нашему 5 и посмотрим, получает ли он прочитанное резюме"
    ]
  },
  {
    "time": [
      435.636236,
      440.62859
    ],
    "en": [
      "show IP route"
    ],
    "ru": [
      "показать IP-маршрут"
    ]
  },
  {
    "time": [
      440.62859,
      446.197507
    ],
    "en": [
      "okay there it is we have successfully fixed the problems"
    ],
    "ru": [
      "хорошо, мы успешно исправили проблемы"
    ]
  },
  {
    "time": [
      446.197507,
      448.028402
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
      448.028402,
      454.941277
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
      454.941277,
      459.198569
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
      459.198569,
      463.718569
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
      463.718569,
      470.168715
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      470.168715,
      479.269757
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
      479.269757,
      479.269757
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
      479.269757,
      479.269757
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
      479.269757,
      479.269757
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]