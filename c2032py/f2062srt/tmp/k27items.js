let objs = [
  {
    "time": [
      0.0,
      5.072229
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
      5.072229,
      8.160958
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
      8.160958,
      14.987666
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
      14.987666,
      19.243499
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
      19.243499,
      29.330583
    ],
    "en": [
      "this lab will be a little different than other labs there will be no configurations although we will use show commands later to confirm our answers"
    ],
    "ru": [
      "эта лабораторная работа будет немного отличаться от других лабораторных работ, здесь не будет никаких конфигураций, хотя мы будем использовать команды show позже, чтобы подтвердить наши ответы."
    ]
  },
  {
    "time": [
      29.330583,
      35.415603
    ],
    "en": [
      "using the information on the lab topology here we must answer these questions"
    ],
    "ru": [
      "используя информацию о топологии лаборатории здесь, мы должны ответить на эти вопросы"
    ]
  },
  {
    "time": [
      35.415603,
      47.664228
    ],
    "en": [
      "in this topology of 4 switches we must identify the root bridge and then which ports are route ports designated ports and alternate or blocked ports across all these switches"
    ],
    "ru": [
      "в этой топологии из 4 коммутаторов мы должны идентифицировать корневой мост, а затем какие порты являются портами маршрутизации, назначенными портами, и альтернативными или заблокированными портами для всех этих коммутаторов."
    ]
  },
  {
    "time": [
      47.664228,
      53.004436
    ],
    "en": [
      "this should test your knowledge of STP and how STP elections actually work"
    ],
    "ru": [
      "это должно проверить ваши знания STP и то, как на самом деле работают выборы STP"
    ]
  },
  {
    "time": [
      53.004436,
      57.216061
    ],
    "en": [
      "there could very well be questions similar to this on the test as well so"
    ],
    "ru": [
      "вполне могут быть вопросы, похожие на этот, и в тесте, поэтому"
    ]
  },
  {
    "time": [
      57.216061,
      59.298561
    ],
    "en": [
      "make sure you can solve problems like this"
    ],
    "ru": [
      "убедитесь, что вы можете решать подобные проблемы"
    ]
  },
  {
    "time": [
      59.298561,
      62.786727
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
      62.786727,
      64.880206
    ],
    "en": [
      "which switch is the root bridge"
    ],
    "ru": [
      "какой коммутатор является корневым мостом"
    ]
  },
  {
    "time": [
      64.880206,
      69.445831
    ],
    "en": [
      "the switch with the lowest bridge ID will become the root bridge"
    ],
    "ru": [
      "коммутатор с наименьшим идентификатором моста станет корневым мостом"
    ]
  },
  {
    "time": [
      69.445831,
      74.903768
    ],
    "en": [
      "remember the bridge ID consists of the priority and the MAC address of the switch"
    ],
    "ru": [
      "помните, что идентификатор моста состоит из приоритета и MAC-адреса коммутатора"
    ]
  },
  {
    "time": [
      74.903768,
      81.923143
    ],
    "en": [
      "so the switch with the lowest priority will become the root or if there is a tie the switch with the lowest MAC address"
    ],
    "ru": [
      "поэтому коммутатор с самым низким приоритетом станет корневым, или, если есть связь, коммутатор с наименьшим MAC-адресом"
    ]
  },
  {
    "time": [
      81.923143,
      85.924538
    ],
    "en": [
      "well all four switches have the same priority"
    ],
    "ru": [
      "все четыре переключателя имеют одинаковый приоритет"
    ]
  },
  {
    "time": [
      85.924538,
      89.374913
    ],
    "en": [
      "of 3 to 769 so let's compare the MAC addresses"
    ],
    "ru": [
      "от 3 до 769, поэтому давайте сравним MAC-адреса"
    ]
  },
  {
    "time": [
      89.374913,
      94.416038
    ],
    "en": [
      "by looking at the first four characters of each mac"
    ],
    "ru": [
      "посмотрев на первые четыре символа каждого Mac"
    ]
  },
  {
    "time": [
      94.416038,
      96.5491
    ],
    "en": [
      "we can rule out - switch - and switch 4"
    ],
    "ru": [
      "мы можем исключить - переключить - и переключить 4"
    ]
  },
  {
    "time": [
      96.5491,
      99.428954
    ],
    "en": [
      "neither of them has the lowest MAC address"
    ],
    "ru": [
      "ни один из них не имеет наименьшего MAC-адреса"
    ]
  },
  {
    "time": [
      99.428954,
      107.618329
    ],
    "en": [
      "switch 1 and switch two have the same first 4 characters but if you look at the next 4 you can tell that switch 1 has the lowest Mac"
    ],
    "ru": [
      "переключатель 1 и переключатель 2 имеют те же первые 4 символа, но если вы посмотрите на следующие 4, вы можете сказать, что переключатель 1 имеет самый низкий Mac"
    ]
  },
  {
    "time": [
      107.618329,
      109.55164
    ],
    "en": [
      "so let me type in the answer"
    ],
    "ru": [
      "так что позвольте мне ввести ответ"
    ]
  },
  {
    "time": [
      109.55164,
      113.717765
    ],
    "en": [
      "which switch is the root bridge switch 1"
    ],
    "ru": [
      "какой коммутатор является коммутатором корневого моста 1"
    ]
  },
  {
    "time": [
      113.717765,
      118.710765
    ],
    "en": [
      "now on the root bridge all ports are designated ports"
    ],
    "ru": [
      "теперь на корневом мосту все порты назначены портами"
    ]
  },
  {
    "time": [
      118.710765,
      120.549619
    ],
    "en": [
      "so I'll type those in as well"
    ],
    "ru": [
      "так что я их тоже напечатаю"
    ]
  },
  {
    "time": [
      120.549619,
      127.649869
    ],
    "en": [
      "designated ports switch 1 F 0 1 F 2 0 2"
    ],
    "ru": [
      "коммутатор назначенных портов 1 F 0 1 F 2 0 2"
    ]
  },
  {
    "time": [
      127.649869,
      131.102244
    ],
    "en": [
      "okay now let's continue"
    ],
    "ru": [
      "хорошо, теперь давайте продолжим"
    ]
  },
  {
    "time": [
      131.102244,
      137.539306
    ],
    "en": [
      "each of the other three switches will set their interface with the lowest cost to the root as a report"
    ],
    "ru": [
      "каждый из трех других коммутаторов установит свой интерфейс с наименьшей стоимостью для корня в качестве отчета"
    ]
  },
  {
    "time": [
      137.539306,
      144.090076
    ],
    "en": [
      "on switch 2 that's obviously f02 and on switch three that's F 0 1"
    ],
    "ru": [
      "на переключателе 2 это, очевидно, f02, а на переключателе 3 это F 0 1"
    ]
  },
  {
    "time": [
      144.090076,
      145.522221
    ],
    "en": [
      "let me write those down"
    ],
    "ru": [
      "позвольте мне записать это"
    ]
  },
  {
    "time": [
      145.522221,
      151.905409
    ],
    "en": [
      "now on switch for which port is it"
    ],
    "ru": [
      "Теперь на коммутаторе, для какого порта это"
    ]
  },
  {
    "time": [
      151.905409,
      162.440346
    ],
    "en": [
      "well F 0 1 is a fast ethernet interface so the spanning tree cost will be 19 to switch 2 plus 19 to switch 1 so 38"
    ],
    "ru": [
      "ну F 0 1 - это быстрый интерфейс Ethernet, поэтому стоимость связующего дерева будет 19 для коммутатора 2 плюс 19 для коммутатора 1, так что 38"
    ]
  },
  {
    "time": [
      162.440346,
      170.983721
    ],
    "en": [
      "G 0 1 is a Gigabit Ethernet interface so the cost will be 4 to switch 3 plus 19 to switch 1 so 23"
    ],
    "ru": [
      "G 0 1 - это интерфейс Gigabit Ethernet, поэтому стоимость коммутатора 3 составит 4 плюс 19 для коммутатора 1, поэтому 23"
    ]
  },
  {
    "time": [
      170.983721,
      175.933408
    ],
    "en": [
      "therefore G 0 1 will be the route port on switch 4"
    ],
    "ru": [
      "поэтому G 0 1 будет портом маршрута на коммутаторе 4"
    ]
  },
  {
    "time": [
      175.933408,
      181.13172
    ],
    "en": [
      "now the interface across from a root port has to be designated"
    ],
    "ru": [
      "теперь должен быть назначен интерфейс напротив корневого порта"
    ]
  },
  {
    "time": [
      181.13172,
      185.339095
    ],
    "en": [
      "so a switch 3 SG 0 on interface will be designated also"
    ],
    "ru": [
      "поэтому переключатель 3 SG 0 на интерфейсе также будет обозначен"
    ]
  },
  {
    "time": [
      185.339095,
      189.886553
    ],
    "en": [
      "now the question is which port is blocked"
    ],
    "ru": [
      "теперь вопрос какой порт заблокирован"
    ]
  },
  {
    "time": [
      189.886553,
      195.640178
    ],
    "en": [
      "switch 2 sf0 one interface or switch 4 Zepp 0 one interface"
    ],
    "ru": [
      "переключатель 2 sf0 один интерфейс или переключатель 4 Zepp 0 один интерфейс"
    ]
  },
  {
    "time": [
      195.640178,
      203.599428
    ],
    "en": [
      "to determine this we first compare the route cost the total cost to the root bridge"
    ],
    "ru": [
      "чтобы определить это, мы сначала сравниваем стоимость маршрута с общей стоимостью до корневого моста"
    ]
  },
  {
    "time": [
      203.599428,
      212.80024
    ],
    "en": [
      "switch 2 has a lower cost to the root bridge so it's f0 one interface will be designated and switch 4 is f0 one interface will be blocked"
    ],
    "ru": [
      "Коммутатор 2 имеет более низкую стоимость для корневого моста, поэтому он будет обозначен как f0, один интерфейс будет назначен, а коммутатор 4 - как f0, один интерфейс будет заблокирован"
    ]
  },
  {
    "time": [
      212.80024,
      219.80226
    ],
    "en": [
      "ok let's check our answers with some show commands"
    ],
    "ru": [
      "хорошо, давайте проверим наши ответы с помощью некоторых команд шоу"
    ]
  },
  {
    "time": [
      219.80226,
      222.147468
    ],
    "en": [
      "I'll go on switch one first"
    ],
    "ru": [
      "Я сначала пойду на переключение"
    ]
  },
  {
    "time": [
      222.147468,
      227.359176
    ],
    "en": [
      "enable show spanning tree"
    ],
    "ru": [
      "включить показывать связующее дерево"
    ]
  },
  {
    "time": [
      227.359176,
      233.670821
    ],
    "en": [
      "this bridge is the root and F 0 1 and F 0 2 are indeed designated ports"
    ],
    "ru": [
      "этот мост является корневым, а F 0 1 и F 0 2 действительно назначенные порты"
    ]
  },
  {
    "time": [
      233.670821,
      236.3943
    ],
    "en": [
      "next let's go on switch 2"
    ],
    "ru": [
      "Далее пойдем на переключатель 2"
    ]
  },
  {
    "time": [
      236.3943,
      241.060237
    ],
    "en": [
      "enable show spanning tree"
    ],
    "ru": [
      "включить показывать связующее дерево"
    ]
  },
  {
    "time": [
      241.060237,
      246.694258
    ],
    "en": [
      "F 0 1 is designated and F 0 2 is the root port"
    ],
    "ru": [
      "F 0 1 обозначается, а F 0 2 - корневой порт."
    ]
  },
  {
    "time": [
      246.694258,
      249.614008
    ],
    "en": [
      "great now let's check on switch 3"
    ],
    "ru": [
      "отлично, теперь давайте проверим переключатель 3"
    ]
  },
  {
    "time": [
      249.614008,
      255.70532
    ],
    "en": [
      "enable show spanning tree"
    ],
    "ru": [
      "включить показывать связующее дерево"
    ]
  },
  {
    "time": [
      255.70532,
      261.147445
    ],
    "en": [
      "F 0 1 is the report and G 0 1 is designated"
    ],
    "ru": [
      "F 0 1 - это отчет, а G 0 1 обозначается"
    ]
  },
  {
    "time": [
      261.147445,
      264.503674
    ],
    "en": [
      "finally let's check on switch 4"
    ],
    "ru": [
      "наконец, давайте проверим переключатель 4"
    ]
  },
  {
    "time": [
      264.503674,
      269.535549
    ],
    "en": [
      "enable show spanning tree"
    ],
    "ru": [
      "включить показывать связующее дерево"
    ]
  },
  {
    "time": [
      269.535549,
      276.015799
    ],
    "en": [
      "F 0 1 is alternate meaning it is blocked and G 0 1 is the root port"
    ],
    "ru": [
      "F 0 1 является альтернативным, что означает, что он заблокирован, а G 0 1 - это корневой порт."
    ]
  },
  {
    "time": [
      276.015799,
      278.338402
    ],
    "en": [
      "ok our answers are correct"
    ],
    "ru": [
      "хорошо, наши ответы верны"
    ]
  },
  {
    "time": [
      278.338402,
      285.098048
    ],
    "en": [
      "this has been a fairly short lab but hopefully you're able to improve your understanding of spanning tree protocol"
    ],
    "ru": [
      "это была довольно короткая лабораторная работа, но, надеюсь, вы сможете улучшить свое понимание протокола связующего дерева."
    ]
  },
  {
    "time": [
      285.098048,
      286.88109
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
      286.88109,
      293.77636
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
      293.77636,
      298.339068
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
      298.339068,
      303.287005
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
      303.287005,
      310.525234
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
      310.525234,
      318.247671
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
      318.247671,
      318.247671
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
      318.247671,
      318.247671
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
      318.247671,
      318.247671
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]