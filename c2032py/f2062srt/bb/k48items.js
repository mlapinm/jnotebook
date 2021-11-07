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
      5.0
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
      5.0,
      8.0
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
      8.0,
      10.0
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
      10.0,
      12.0
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
      12.0,
      13.0
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
      13.0,
      17.0
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
      17.0,
      20.0
    ],
    "en": [
      "channel for more labs like this in this"
    ],
    "ru": [
      "канал для других подобных лабораторий в этом"
    ]
  },
  {
    "time": [
      20.0,
      23.0
    ],
    "en": [
      "lab we will take a look at STP spanning"
    ],
    "ru": [
      "lab мы рассмотрим охват STP"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "tree protocol and do some basic"
    ],
    "ru": [
      "древовидный протокол и выполнить некоторые основные"
    ]
  },
  {
    "time": [
      25.0,
      29.0
    ],
    "en": [
      "configurations spanning tree is"
    ],
    "ru": [
      "связующее дерево конфигураций"
    ]
  },
  {
    "time": [
      29.0,
      31.0
    ],
    "en": [
      "necessary to prevent layer 2 loops which"
    ],
    "ru": [
      "необходимо для предотвращения петель слоя 2, которые"
    ]
  },
  {
    "time": [
      31.0,
      33.0
    ],
    "en": [
      "would otherwise render your network"
    ],
    "ru": [
      "в противном случае отобразит вашу сеть"
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "useless in this topology for example"
    ],
    "ru": [
      "бесполезен в этой топологии например"
    ]
  },
  {
    "time": [
      36.0,
      38.0
    ],
    "en": [
      "without spanning tree a layer 2"
    ],
    "ru": [
      "без остовного дерева слой 2"
    ]
  },
  {
    "time": [
      38.0,
      40.0
    ],
    "en": [
      "broadcast would loop around the 3"
    ],
    "ru": [
      "трансляция будет зацикливаться на 3"
    ]
  },
  {
    "time": [
      40.0,
      41.0
    ],
    "en": [
      "switches endlessly"
    ],
    "ru": [
      "переключается бесконечно"
    ]
  },
  {
    "time": [
      41.0,
      43.0
    ],
    "en": [
      "and with enough of that in your network"
    ],
    "ru": [
      "и с достаточным количеством этого в вашей сети"
    ]
  },
  {
    "time": [
      43.0,
      45.0
    ],
    "en": [
      "your networker is not going to be"
    ],
    "ru": [
      "ваш сетевик не будет"
    ]
  },
  {
    "time": [
      45.0,
      48.0
    ],
    "en": [
      "operating well just to clarify that if"
    ],
    "ru": [
      "работает хорошо, просто чтобы уточнить, что если"
    ]
  },
  {
    "time": [
      48.0,
      51.0
    ],
    "en": [
      "switch 1 sends a broadcast it goes to"
    ],
    "ru": [
      "коммутатор 1 отправляет широковещательную рассылку, на которую он направляется"
    ]
  },
  {
    "time": [
      51.0,
      55.0
    ],
    "en": [
      "switch 2 and switch 3 then both of them"
    ],
    "ru": [
      "переключатель 2 и переключатель 3, затем оба из них"
    ]
  },
  {
    "time": [
      55.0,
      56.0
    ],
    "en": [
      "flood the broadcast out every port"
    ],
    "ru": [
      "Залить трансляцию через каждый порт"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "except the one they received it on then"
    ],
    "ru": [
      "кроме того, что они получили тогда"
    ]
  },
  {
    "time": [
      59.0,
      61.0
    ],
    "en": [
      "the process repeats and it will go from"
    ],
    "ru": [
      "процесс повторяется, и он будет продолжаться с"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "switch 1 2 switch 2 to switch 3 to"
    ],
    "ru": [
      "переключатель 1 2 переключатель 2 для переключателя 3 в положение"
    ]
  },
  {
    "time": [
      64.0,
      67.0
    ],
    "en": [
      "switch 1 2 switch 2 to switch 3 and also"
    ],
    "ru": [
      "переключатель 1 2 переключатель 2 в переключатель 3, а также"
    ]
  },
  {
    "time": [
      67.0,
      69.0
    ],
    "en": [
      "the same thing in the other direction"
    ],
    "ru": [
      "то же самое в другом направлении"
    ]
  },
  {
    "time": [
      69.0,
      71.0
    ],
    "en": [
      "that's why spanning tree is essential in"
    ],
    "ru": [
      "вот почему остовное дерево важно в"
    ]
  },
  {
    "time": [
      71.0,
      74.0
    ],
    "en": [
      "a case like this anyway let's get"
    ],
    "ru": [
      "в любом случае такой случай давай"
    ]
  },
  {
    "time": [
      74.0,
      78.0
    ],
    "en": [
      "started the first step just asks us some"
    ],
    "ru": [
      "начал первый шаг просто просит нас немного"
    ]
  },
  {
    "time": [
      78.0,
      82.0
    ],
    "en": [
      "questions about STP the first is which"
    ],
    "ru": [
      "вопросы о STP, первый из которых"
    ]
  },
  {
    "time": [
      82.0,
      83.0
    ],
    "en": [
      "version is currently running on the"
    ],
    "ru": [
      "версия в настоящее время работает на"
    ]
  },
  {
    "time": [
      83.0,
      87.0
    ],
    "en": [
      "switches there are multiple versions for"
    ],
    "ru": [
      "переключателей существует несколько версий для"
    ]
  },
  {
    "time": [
      87.0,
      89.0
    ],
    "en": [
      "example common spanning tree the old"
    ],
    "ru": [
      "пример общего остовного дерева старый"
    ]
  },
  {
    "time": [
      89.0,
      92.0
    ],
    "en": [
      "original version also per VLAN spanning"
    ],
    "ru": [
      "исходная версия также на охват VLAN"
    ]
  },
  {
    "time": [
      92.0,
      95.0
    ],
    "en": [
      "tree rapid spanning tree rapid per VLAN"
    ],
    "ru": [
      "дерево быстрое связующее дерево быстрое для каждой VLAN"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "spanning tree so which is running on"
    ],
    "ru": [
      "связующее дерево, которое работает на"
    ]
  },
  {
    "time": [
      97.0,
      100.0
    ],
    "en": [
      "these switches by default these are all"
    ],
    "ru": [
      "эти переключатели по умолчанию это все"
    ]
  },
  {
    "time": [
      100.0,
      102.0
    ],
    "en": [
      "the same models so let's just check on"
    ],
    "ru": [
      "те же модели, так что давайте просто проверим"
    ]
  },
  {
    "time": [
      102.0,
      107.0
    ],
    "en": [
      "switch one enable show spanning tree"
    ],
    "ru": [
      "переключить один включить показать связующее дерево"
    ]
  },
  {
    "time": [
      107.0,
      112.0
    ],
    "en": [
      "summary right here the first line switch"
    ],
    "ru": [
      "Резюме прямо здесь переключатель первой строки"
    ]
  },
  {
    "time": [
      112.0,
      115.0
    ],
    "en": [
      "is in P vs T mode so there's our answer"
    ],
    "ru": [
      "находится в режиме P vs T, так что вот наш ответ"
    ]
  },
  {
    "time": [
      115.0,
      120.0
    ],
    "en": [
      "p vs t is per VLAN spanning tree that"
    ],
    "ru": [
      "p vs t для связующего дерева VLAN, которое"
    ]
  },
  {
    "time": [
      120.0,
      122.0
    ],
    "en": [
      "means each VLAN has its own spanning"
    ],
    "ru": [
      "означает, что каждая VLAN имеет собственное покрытие"
    ]
  },
  {
    "time": [
      122.0,
      124.0
    ],
    "en": [
      "tree instance running which we can"
    ],
    "ru": [
      "запущен экземпляр дерева, который мы можем"
    ]
  },
  {
    "time": [
      124.0,
      128.0
    ],
    "en": [
      "configure individually you can see that"
    ],
    "ru": [
      "настроить индивидуально, вы можете увидеть, что"
    ]
  },
  {
    "time": [
      128.0,
      131.0
    ],
    "en": [
      "down here there is VLAN 1 the default di"
    ],
    "ru": [
      "внизу есть VLAN 1 по умолчанию di"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "on which all generally ignore"
    ],
    "ru": [
      "на котором все вообще игнорируют"
    ]
  },
  {
    "time": [
      133.0,
      136.0
    ],
    "en": [
      "for this lab and then our three VLANs 10"
    ],
    "ru": [
      "для этой лабораторной работы, а затем наши три сети VLAN 10"
    ]
  },
  {
    "time": [
      136.0,
      138.0
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
      136.0,
      138.0
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
      138.0,
      141.0
    ],
    "en": [
      "the next question is what is the bridge"
    ],
    "ru": [
      "следующий вопрос, что такое мост"
    ]
  },
  {
    "time": [
      141.0,
      146.0
    ],
    "en": [
      "ID for each switch first what exactly is"
    ],
    "ru": [
      "Идентификатор каждого переключателя в первую очередь, что именно"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "a bridge ID it is a value used to"
    ],
    "ru": [
      "идентификатор моста, это значение, используемое для"
    ]
  },
  {
    "time": [
      149.0,
      151.0
    ],
    "en": [
      "determine the root bridge in spanning"
    ],
    "ru": [
      "определить корневой мост в покрытии"
    ]
  },
  {
    "time": [
      151.0,
      154.0
    ],
    "en": [
      "tree it consists of two parts the bridge"
    ],
    "ru": [
      "дерево состоит из двух частей мост"
    ]
  },
  {
    "time": [
      154.0,
      159.0
    ],
    "en": [
      "priority which is 3 2 7 6 8 by default"
    ],
    "ru": [
      "приоритет, который по умолчанию равен 3 2 7 6 8"
    ]
  },
  {
    "time": [
      159.0,
      161.0
    ],
    "en": [
      "plus the MAC address which is used as a"
    ],
    "ru": [
      "плюс MAC-адрес, который используется как"
    ]
  },
  {
    "time": [
      161.0,
      163.0
    ],
    "en": [
      "tie breaker if the bridge priorities are"
    ],
    "ru": [
      "разрешить ничью, если приоритеты моста"
    ]
  },
  {
    "time": [
      163.0,
      166.0
    ],
    "en": [
      "the same the switch with the lowest"
    ],
    "ru": [
      "такой же переключатель с самым низким"
    ]
  },
  {
    "time": [
      166.0,
      169.0
    ],
    "en": [
      "bridge ID becomes the root bridge so"
    ],
    "ru": [
      "идентификатор моста становится корневым мостом, поэтому"
    ]
  },
  {
    "time": [
      169.0,
      173.0
    ],
    "en": [
      "let's checks which ones bridge ID show"
    ],
    "ru": [
      "давайте проверим, какие мосты показывают ID"
    ]
  },
  {
    "time": [
      173.0,
      175.0
    ],
    "en": [
      "spanning tree"
    ],
    "ru": [
      "остовное дерево"
    ]
  },
  {
    "time": [
      175.0,
      180.0
    ],
    "en": [
      "so for VLAN 1 the priority is 3 2 7 6 9"
    ],
    "ru": [
      "поэтому для VLAN 1 приоритет равен 3 2 7 6 9"
    ]
  },
  {
    "time": [
      180.0,
      183.0
    ],
    "en": [
      "which is the default priority of 3 2 7 6"
    ],
    "ru": [
      "который является приоритетом по умолчанию 3 2 7 6"
    ]
  },
  {
    "time": [
      183.0,
      187.0
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
      183.0,
      187.0
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
      187.0,
      188.0
    ],
    "en": [
      "address is here"
    ],
    "ru": [
      "адрес здесь"
    ]
  },
  {
    "time": [
      188.0,
      192.0
    ],
    "en": [
      "beginning with zero zero six zero note"
    ],
    "ru": [
      "начало с нуля ноль шесть ноль нота"
    ]
  },
  {
    "time": [
      192.0,
      194.0
    ],
    "en": [
      "that the information up here is for the"
    ],
    "ru": [
      "что информация здесь предназначена для"
    ]
  },
  {
    "time": [
      194.0,
      197.0
    ],
    "en": [
      "root bridge and down here is for this"
    ],
    "ru": [
      "корневой мост и вот для этого"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "switch itself the information is"
    ],
    "ru": [
      "сам переключатель информация"
    ]
  },
  {
    "time": [
      200.0,
      202.0
    ],
    "en": [
      "different so clearly switch 1 is not the"
    ],
    "ru": [
      "разные, так что ясно, что переключатель 1 не"
    ]
  },
  {
    "time": [
      202.0,
      206.0
    ],
    "en": [
      "root bridge switch ones bridge ID will"
    ],
    "ru": [
      "переключатель корневого моста, идентификатор моста будет"
    ]
  },
  {
    "time": [
      206.0,
      207.0
    ],
    "en": [
      "be essentially the same for each VLAN"
    ],
    "ru": [
      "быть практически одинаковым для каждой VLAN"
    ]
  },
  {
    "time": [
      207.0,
      209.0
    ],
    "en": [
      "but the priority will differ because the"
    ],
    "ru": [
      "но приоритет будет другим, потому что"
    ]
  },
  {
    "time": [
      209.0,
      212.0
    ],
    "en": [
      "VLAN ID is added to the default priority"
    ],
    "ru": [
      "Идентификатор VLAN добавлен к приоритету по умолчанию"
    ]
  },
  {
    "time": [
      212.0,
      224.0
    ],
    "en": [
      "C 3 2 7 7 8 3 2 7 8 8 & 3 2 7 9 8 okay"
    ],
    "ru": [
      "C 3 2 7 7 8 3 2 7 8 8 и 3 2 7 9 8 хорошо"
    ]
  },
  {
    "time": [
      224.0,
      225.0
    ],
    "en": [
      "now let's check the bridge ID on switch"
    ],
    "ru": [
      "теперь давайте проверим идентификатор моста на коммутаторе"
    ]
  },
  {
    "time": [
      225.0,
      234.0
    ],
    "en": [
      "to enable show spanning tree again the"
    ],
    "ru": [
      "чтобы снова включить отображение связующего дерева,"
    ]
  },
  {
    "time": [
      234.0,
      235.0
    ],
    "en": [
      "priorities will be the same as on switch"
    ],
    "ru": [
      "приоритеты будут такими же, как на переключателе"
    ]
  },
  {
    "time": [
      235.0,
      241.0
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
      235.0,
      241.0
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
      241.0,
      244.0
    ],
    "en": [
      "etc and here is the MAC address"
    ],
    "ru": [
      "и т.д. и вот MAC-адрес"
    ]
  },
  {
    "time": [
      244.0,
      249.0
    ],
    "en": [
      "beginning with 0 0 0 1 note that the"
    ],
    "ru": [
      "начиная с 0 0 0 1 обратите внимание, что"
    ]
  },
  {
    "time": [
      249.0,
      251.0
    ],
    "en": [
      "info down here is the same as the info"
    ],
    "ru": [
      "информация здесь такая же, как и информация"
    ]
  },
  {
    "time": [
      251.0,
      254.0
    ],
    "en": [
      "in the route ID section and the route ID"
    ],
    "ru": [
      "в разделе идентификатора маршрута и идентификатор маршрута"
    ]
  },
  {
    "time": [
      254.0,
      256.0
    ],
    "en": [
      "section itself says this bridge is the"
    ],
    "ru": [
      "в самом разделе говорится, что этот мост является"
    ]
  },
  {
    "time": [
      256.0,
      259.0
    ],
    "en": [
      "root so that answers the next question -"
    ],
    "ru": [
      "root, чтобы ответить на следующий вопрос -"
    ]
  },
  {
    "time": [
      259.0,
      261.0
    ],
    "en": [
      "as to what is the root bridge for each"
    ],
    "ru": [
      "относительно того, какой корневой мост для каждого"
    ]
  },
  {
    "time": [
      261.0,
      264.0
    ],
    "en": [
      "VLAN because we haven't done any"
    ],
    "ru": [
      "VLAN, потому что мы ничего не сделали"
    ]
  },
  {
    "time": [
      264.0,
      266.0
    ],
    "en": [
      "configurations yet the priorities are"
    ],
    "ru": [
      "конфигурации, но приоритеты"
    ]
  },
  {
    "time": [
      266.0,
      266.0
    ],
    "en": [
      "all the same"
    ],
    "ru": [
      "все так же"
    ]
  },
  {
    "time": [
      266.0,
      268.0
    ],
    "en": [
      "so the switch with the lowest MAC"
    ],
    "ru": [
      "поэтому коммутатор с наименьшим MAC"
    ]
  },
  {
    "time": [
      268.0,
      270.0
    ],
    "en": [
      "address will become the root for all"
    ],
    "ru": [
      "адрес станет корнем для всех"
    ]
  },
  {
    "time": [
      270.0,
      274.0
    ],
    "en": [
      "VLANs switch to in this case let's"
    ],
    "ru": [
      "Переключиться на VLAN в этом случае давайте"
    ]
  },
  {
    "time": [
      274.0,
      276.0
    ],
    "en": [
      "quickly take a look at switch threes"
    ],
    "ru": [
      "быстро взгляни на тройки переключателей"
    ]
  },
  {
    "time": [
      276.0,
      283.0
    ],
    "en": [
      "bridge ID also enable show spanning tree"
    ],
    "ru": [
      "идентификатор моста также включает отображение связующего дерева"
    ]
  },
  {
    "time": [
      283.0,
      286.0
    ],
    "en": [
      "again the priorities are the same and"
    ],
    "ru": [
      "снова приоритеты те же и"
    ]
  },
  {
    "time": [
      286.0,
      290.0
    ],
    "en": [
      "the MAC address begins with 0 0 0 4 so"
    ],
    "ru": [
      "MAC-адрес начинается с 0 0 0 4, поэтому"
    ]
  },
  {
    "time": [
      290.0,
      292.0
    ],
    "en": [
      "indeed switch 2 has the lowest Mac"
    ],
    "ru": [
      "действительно, у коммутатора 2 самый низкий Mac"
    ]
  },
  {
    "time": [
      292.0,
      296.0
    ],
    "en": [
      "switch ones Mac began with 0 0 6 0 the"
    ],
    "ru": [
      "поменять местами Mac начинался с 0 0 6 0"
    ]
  },
  {
    "time": [
      296.0,
      300.0
    ],
    "en": [
      "highest then switch 3 with 0 0 0 4 and"
    ],
    "ru": [
      "наивысший, затем переключите 3 на 0 0 0 4 и"
    ]
  },
  {
    "time": [
      300.0,
      305.0
    ],
    "en": [
      "then switch to at 0 0 0 1 the lowest"
    ],
    "ru": [
      "затем переключитесь на 0 0 0 1 самый низкий"
    ]
  },
  {
    "time": [
      305.0,
      307.0
    ],
    "en": [
      "okay the next question is what is the"
    ],
    "ru": [
      "хорошо, следующий вопрос - что это за"
    ]
  },
  {
    "time": [
      307.0,
      311.0
    ],
    "en": [
      "STP cost of each interface"
    ],
    "ru": [
      "Стоимость STP каждого интерфейса"
    ]
  },
  {
    "time": [
      311.0,
      313.0
    ],
    "en": [
      "well the interface is connecting the"
    ],
    "ru": [
      "хорошо интерфейс соединяет"
    ]
  },
  {
    "time": [
      313.0,
      315.0
    ],
    "en": [
      "switches are Gigabit Ethernet interfaces"
    ],
    "ru": [
      "коммутаторы представляют собой интерфейсы Gigabit Ethernet"
    ]
  },
  {
    "time": [
      315.0,
      320.0
    ],
    "en": [
      "they have a default STP cost of 4 on the"
    ],
    "ru": [
      "по умолчанию они имеют стоимость STP 4 на"
    ]
  },
  {
    "time": [
      320.0,
      321.0
    ],
    "en": [
      "other hand the interface is connected to"
    ],
    "ru": [
      "с другой стороны интерфейс подключен к"
    ]
  },
  {
    "time": [
      321.0,
      324.0
    ],
    "en": [
      "the PCs which are still actively sending"
    ],
    "ru": [
      "ПК, которые все еще активно отправляют"
    ]
  },
  {
    "time": [
      324.0,
      327.0
    ],
    "en": [
      "spanning TB PDUs or bridge protocol data"
    ],
    "ru": [
      "охват TB PDU или данных протокола моста"
    ]
  },
  {
    "time": [
      327.0,
      328.0
    ],
    "en": [
      "units even though a switch isn't"
    ],
    "ru": [
      "единиц, даже если переключатель не"
    ]
  },
  {
    "time": [
      328.0,
      331.0
    ],
    "en": [
      "connected to them our Fast Ethernet"
    ],
    "ru": [
      "подключил к ним наш Fast Ethernet"
    ]
  },
  {
    "time": [
      331.0,
      333.0
    ],
    "en": [
      "interfaces which have a default cost of"
    ],
    "ru": [
      "интерфейсы со стоимостью по умолчанию"
    ]
  },
  {
    "time": [
      333.0,
      338.0
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
      333.0,
      338.0
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
      338.0,
      340.0
    ],
    "en": [
      "command here you can see Gigabit"
    ],
    "ru": [
      "команда здесь вы можете увидеть Gigabit"
    ]
  },
  {
    "time": [
      340.0,
      342.0
    ],
    "en": [
      "Ethernet interfaces with the cost of 4"
    ],
    "ru": [
      "Интерфейсы Ethernet стоимостью 4"
    ]
  },
  {
    "time": [
      342.0,
      346.0
    ],
    "en": [
      "and Fast Ethernet interfaces with a cost"
    ],
    "ru": [
      "и интерфейсы Fast Ethernet по цене"
    ]
  },
  {
    "time": [
      346.0,
      351.0
    ],
    "en": [
      "of 19 the next question is which"
    ],
    "ru": [
      "из 19 следующий вопрос: какой"
    ]
  },
  {
    "time": [
      351.0,
      354.0
    ],
    "en": [
      "interface is blocked and why well you"
    ],
    "ru": [
      "интерфейс заблокирован и почему ты"
    ]
  },
  {
    "time": [
      354.0,
      356.0
    ],
    "en": [
      "can see on packet tracer which is"
    ],
    "ru": [
      "можно увидеть на трассировщике пакетов, которая"
    ]
  },
  {
    "time": [
      356.0,
      359.0
    ],
    "en": [
      "blocked due to the port lights let's"
    ],
    "ru": [
      "заблокирован из-за освещения порта давайте"
    ]
  },
  {
    "time": [
      359.0,
      360.0
    ],
    "en": [
      "just check with the show command on"
    ],
    "ru": [
      "просто проверьте с помощью команды show на"
    ]
  },
  {
    "time": [
      360.0,
      364.0
    ],
    "en": [
      "switch 1 let's look at the output of"
    ],
    "ru": [
      "переключатель 1 давайте посмотрим на вывод"
    ]
  },
  {
    "time": [
      364.0,
      369.0
    ],
    "en": [
      "show spanning tree again you can see"
    ],
    "ru": [
      "снова показать остовное дерево, вы можете увидеть"
    ]
  },
  {
    "time": [
      369.0,
      371.0
    ],
    "en": [
      "that gig 0 1 interface is blocking as"
    ],
    "ru": [
      "этот интерфейс gig 0 1 блокируется как"
    ]
  },
  {
    "time": [
      371.0,
      376.0
    ],
    "en": [
      "BLK indicates here why is that well"
    ],
    "ru": [
      "BLK указывает здесь, почему это хорошо"
    ]
  },
  {
    "time": [
      376.0,
      379.0
    ],
    "en": [
      "switch to is the root bridge so all of"
    ],
    "ru": [
      "переключиться на корневой мост, поэтому все"
    ]
  },
  {
    "time": [
      379.0,
      382.0
    ],
    "en": [
      "its ports are designated ports switch"
    ],
    "ru": [
      "его порты обозначены переключателем портов"
    ]
  },
  {
    "time": [
      382.0,
      385.0
    ],
    "en": [
      "ones gig 0 2 interface and switch 3s gig"
    ],
    "ru": [
      "один гиг 0 2 интерфейса и коммутатор 3 гига"
    ]
  },
  {
    "time": [
      385.0,
      387.0
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
      385.0,
      387.0
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
      387.0,
      390.0
    ],
    "en": [
      "the root for them so they are route"
    ],
    "ru": [
      "корень для них так они маршрут"
    ]
  },
  {
    "time": [
      390.0,
      394.0
    ],
    "en": [
      "ports and it will forward traffic now we"
    ],
    "ru": [
      "порты, и он будет пересылать трафик, теперь мы"
    ]
  },
  {
    "time": [
      394.0,
      396.0
    ],
    "en": [
      "have to block one part between switch 1"
    ],
    "ru": [
      "нужно заблокировать одну часть между переключателем 1"
    ]
  },
  {
    "time": [
      396.0,
      399.0
    ],
    "en": [
      "and switch 3 to prevent loops so switch"
    ],
    "ru": [
      "и переключатель 3, чтобы предотвратить петли, поэтому переключите"
    ]
  },
  {
    "time": [
      399.0,
      400.0
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
      399.0,
      400.0
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
      400.0,
      403.0
    ],
    "en": [
      "compare their bridge IDs and because"
    ],
    "ru": [
      "сравнить их идентификаторы мостов и потому что"
    ]
  },
  {
    "time": [
      403.0,
      405.0
    ],
    "en": [
      "switch ones is the highest it blocks the"
    ],
    "ru": [
      "переключить - самый высокий, он блокирует"
    ]
  },
  {
    "time": [
      405.0,
      409.0
    ],
    "en": [
      "gig zero one port okay"
    ],
    "ru": [
      "гиг ноль один порт хорошо"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "finally let's get to some configurations"
    ],
    "ru": [
      "наконец, давайте перейдем к некоторым конфигурациям"
    ]
  },
  {
    "time": [
      411.0,
      414.0
    ],
    "en": [
      "step two says to change the spanning"
    ],
    "ru": [
      "на втором шаге говорится, что нужно изменить охват"
    ]
  },
  {
    "time": [
      414.0,
      417.0
    ],
    "en": [
      "tree mota RP VST rapid per VLAN spanning"
    ],
    "ru": [
      "tree mota RP VST quick на охват VLAN"
    ]
  },
  {
    "time": [
      417.0,
      421.0
    ],
    "en": [
      "tree if your switches support rapid P"
    ],
    "ru": [
      "дерево, если ваши коммутаторы поддерживают быстрый P"
    ]
  },
  {
    "time": [
      421.0,
      423.0
    ],
    "en": [
      "VST you really should use it because it"
    ],
    "ru": [
      "VST, вам действительно стоит его использовать, потому что он"
    ]
  },
  {
    "time": [
      423.0,
      425.0
    ],
    "en": [
      "allows the network to converge much"
    ],
    "ru": [
      "позволяет сети сильно сходиться"
    ]
  },
  {
    "time": [
      425.0,
      428.0
    ],
    "en": [
      "faster when there are changes all it"
    ],
    "ru": [
      "быстрее, когда есть изменения все это"
    ]
  },
  {
    "time": [
      428.0,
      430.0
    ],
    "en": [
      "takes is one command on each switch ON"
    ],
    "ru": [
      "берет по одной команде на каждый переключатель ВКЛ."
    ]
  },
  {
    "time": [
      430.0,
      435.0
    ],
    "en": [
      "switch one first comp T spanning tree"
    ],
    "ru": [
      "переключить одно первое связующее дерево Comp T"
    ]
  },
  {
    "time": [
      435.0,
      440.0
    ],
    "en": [
      "mode rapid P vs T that's it now switch"
    ],
    "ru": [
      "режим быстрый P vs T вот теперь переключение"
    ]
  },
  {
    "time": [
      440.0,
      447.0
    ],
    "en": [
      "to coffee t spanning tree mode rapid P"
    ],
    "ru": [
      "в кофе t режим связующего дерева быстрый P"
    ]
  },
  {
    "time": [
      447.0,
      453.0
    ],
    "en": [
      "vs T and finally switch three golf t"
    ],
    "ru": [
      "vs T и, наконец, переключить три гольфа t"
    ]
  },
  {
    "time": [
      453.0,
      457.0
    ],
    "en": [
      "spanning tree mode rapid P vs T okay"
    ],
    "ru": [
      "режим связующего дерева быстрый P vs T хорошо"
    ]
  },
  {
    "time": [
      457.0,
      461.0
    ],
    "en": [
      "that's it now it's time to manipulate"
    ],
    "ru": [
      "вот и пора манипулировать"
    ]
  },
  {
    "time": [
      461.0,
      463.0
    ],
    "en": [
      "the spanning trees a little bit we're"
    ],
    "ru": [
      "остовные деревья немного мы"
    ]
  },
  {
    "time": [
      463.0,
      465.0
    ],
    "en": [
      "going to change the root bridge for each"
    ],
    "ru": [
      "собираюсь менять корневой мост для каждого"
    ]
  },
  {
    "time": [
      465.0,
      467.0
    ],
    "en": [
      "VLAN and also configure a secondary"
    ],
    "ru": [
      "VLAN, а также настроить вторичный"
    ]
  },
  {
    "time": [
      467.0,
      469.0
    ],
    "en": [
      "route to specify which switch we want to"
    ],
    "ru": [
      "маршрут, чтобы указать, какой переключатель мы хотим"
    ]
  },
  {
    "time": [
      469.0,
      473.0
    ],
    "en": [
      "be the route if the route fails let's go"
    ],
    "ru": [
      "быть маршрутом, если маршрут не удастся пойдем"
    ]
  },
  {
    "time": [
      473.0,
      476.0
    ],
    "en": [
      "and configure our primary routes on"
    ],
    "ru": [
      "и настройте наши основные маршруты на"
    ]
  },
  {
    "time": [
      476.0,
      483.0
    ],
    "en": [
      "switch one spanning tree VLAN 10 root"
    ],
    "ru": [
      "переключить одно связующее дерево VLAN 10 root"
    ]
  },
  {
    "time": [
      483.0,
      489.0
    ],
    "en": [
      "primary okay then switch to spanning"
    ],
    "ru": [
      "первичный хорошо, затем переключитесь на охват"
    ]
  },
  {
    "time": [
      489.0,
      494.0
    ],
    "en": [
      "tree VLAN 20 root primary and then"
    ],
    "ru": [
      "tree VLAN 20 root primary, а затем"
    ]
  },
  {
    "time": [
      494.0,
      499.0
    ],
    "en": [
      "switch three spanning tree VLAN 30 root"
    ],
    "ru": [
      "переключить три связующего дерева VLAN 30 root"
    ]
  },
  {
    "time": [
      499.0,
      503.0
    ],
    "en": [
      "primary okay now let's set the secondary"
    ],
    "ru": [
      "первичный ладно теперь давайте установим вторичный"
    ]
  },
  {
    "time": [
      503.0,
      506.0
    ],
    "en": [
      "VLANs switch three here should be the"
    ],
    "ru": [
      "Три коммутатора VLAN здесь должны быть"
    ]
  },
  {
    "time": [
      506.0,
      510.0
    ],
    "en": [
      "secondary route for VLAN 20 so spanning"
    ],
    "ru": [
      "вторичный маршрут для VLAN 20, охватывающий"
    ]
  },
  {
    "time": [
      510.0,
      515.0
    ],
    "en": [
      "tree VLAN 20 route secondary then switch"
    ],
    "ru": [
      "дерево VLAN 20 маршрут вторичный, затем коммутатор"
    ]
  },
  {
    "time": [
      515.0,
      520.0
    ],
    "en": [
      "one spanning tree VLAN 30 route"
    ],
    "ru": [
      "один маршрут связующего дерева VLAN 30"
    ]
  },
  {
    "time": [
      520.0,
      524.0
    ],
    "en": [
      "secondary and finally switched to"
    ],
    "ru": [
      "вторичный и, наконец, переключился на"
    ]
  },
  {
    "time": [
      524.0,
      530.0
    ],
    "en": [
      "spanning tree VLAN 10 route secondary ok"
    ],
    "ru": [
      "связующее дерево VLAN 10 вторичный маршрут ОК"
    ]
  },
  {
    "time": [
      530.0,
      532.0
    ],
    "en": [
      "now both of these commands adjust the"
    ],
    "ru": [
      "теперь обе эти команды регулируют"
    ]
  },
  {
    "time": [
      532.0,
      534.0
    ],
    "en": [
      "span to be priority of the switch down"
    ],
    "ru": [
      "диапазон будет приоритетом переключения вниз"
    ]
  },
  {
    "time": [
      534.0,
      536.0
    ],
    "en": [
      "let's check what the priorities are here"
    ],
    "ru": [
      "давайте проверим, какие здесь приоритеты"
    ]
  },
  {
    "time": [
      536.0,
      543.0
    ],
    "en": [
      "on switch to do show spanning-tree look"
    ],
    "ru": [
      "на переключателе, чтобы показать внешний вид связующего дерева"
    ]
  },
  {
    "time": [
      543.0,
      545.0
    ],
    "en": [
      "at VLAN 10 for which switch 2 is the"
    ],
    "ru": [
      "в VLAN 10, для которой коммутатор 2 является"
    ]
  },
  {
    "time": [
      545.0,
      548.0
    ],
    "en": [
      "secondary route it brings the priority"
    ],
    "ru": [
      "второстепенный маршрут приносит приоритет"
    ]
  },
  {
    "time": [
      548.0,
      551.0
    ],
    "en": [
      "down to two eight six seven two plus ten"
    ],
    "ru": [
      "до двух восемь шесть семь два плюс десять"
    ]
  },
  {
    "time": [
      551.0,
      556.0
    ],
    "en": [
      "for the VLAN ID now look at VLAN 24 rich"
    ],
    "ru": [
      "для идентификатора VLAN теперь посмотрите на VLAN 24 rich"
    ]
  },
  {
    "time": [
      556.0,
      563.0
    ],
    "en": [
      "it is the route 2 4 5 7 6 plus 24 the"
    ],
    "ru": [
      "это маршрут 2 4 5 7 6 плюс 24"
    ]
  },
  {
    "time": [
      563.0,
      567.0
    ],
    "en": [
      "VLAN ID ok finally we are going to"
    ],
    "ru": [
      "Идентификатор VLAN хорошо, наконец, мы собираемся"
    ]
  },
  {
    "time": [
      567.0,
      570.0
    ],
    "en": [
      "enable port fast and bpdu guard on the"
    ],
    "ru": [
      "включить быстрый порт и защиту bpdu на"
    ]
  },
  {
    "time": [
      570.0,
      573.0
    ],
    "en": [
      "appropriate interfaces these should be"
    ],
    "ru": [
      "соответствующие интерфейсы они должны быть"
    ]
  },
  {
    "time": [
      573.0,
      575.0
    ],
    "en": [
      "enabled on interfaces not connected to"
    ],
    "ru": [
      "включен на интерфейсах, не подключенных к"
    ]
  },
  {
    "time": [
      575.0,
      579.0
    ],
    "en": [
      "another switch bpdu guide will put an"
    ],
    "ru": [
      "другое руководство по переключателю bpdu поместит"
    ]
  },
  {
    "time": [
      579.0,
      581.0
    ],
    "en": [
      "interface in the air disabled mode if a"
    ],
    "ru": [
      "интерфейс в режиме отключения по воздуху, если"
    ]
  },
  {
    "time": [
      581.0,
      584.0
    ],
    "en": [
      "bpdu is received on the port and port"
    ],
    "ru": [
      "bpdu принимается на порт и порт"
    ]
  },
  {
    "time": [
      584.0,
      585.0
    ],
    "en": [
      "fast allows interfaces to start"
    ],
    "ru": [
      "fast позволяет запускать интерфейсы"
    ]
  },
  {
    "time": [
      585.0,
      586.0
    ],
    "en": [
      "forwarding without having to wait for"
    ],
    "ru": [
      "пересылка без ожидания"
    ]
  },
  {
    "time": [
      586.0,
      589.0
    ],
    "en": [
      "the spanning tree to converge"
    ],
    "ru": [
      "остовное дерево сходиться"
    ]
  },
  {
    "time": [
      589.0,
      592.0
    ],
    "en": [
      "now you can enable port fest here from"
    ],
    "ru": [
      "теперь вы можете включить портирование здесь из"
    ]
  },
  {
    "time": [
      592.0,
      594.0
    ],
    "en": [
      "global configuration mode with spending"
    ],
    "ru": [
      "режим глобальной конфигурации с расходами"
    ]
  },
  {
    "time": [
      594.0,
      596.0
    ],
    "en": [
      "to the port fast default which will"
    ],
    "ru": [
      "на порт по умолчанию, который будет"
    ]
  },
  {
    "time": [
      596.0,
      598.0
    ],
    "en": [
      "enable it on all access ports"
    ],
    "ru": [
      "включить его на всех портах доступа"
    ]
  },
  {
    "time": [
      598.0,
      600.0
    ],
    "en": [
      "you can also configure it at the"
    ],
    "ru": [
      "вы также можете настроить его на"
    ]
  },
  {
    "time": [
      600.0,
      604.0
    ],
    "en": [
      "interface level let's do that interface"
    ],
    "ru": [
      "уровень интерфейса давайте сделаем этот интерфейс"
    ]
  },
  {
    "time": [
      604.0,
      611.0
    ],
    "en": [
      "range F 0 1 2 3 spanning-tree portfast"
    ],
    "ru": [
      "диапазон F 0 1 2 3 spanning-tree portfast"
    ]
  },
  {
    "time": [
      611.0,
      617.0
    ],
    "en": [
      "spanning tree bpdu guard enable ok let's"
    ],
    "ru": [
      "связующее дерево bpdu guard включить ок давайте"
    ]
  },
  {
    "time": [
      617.0,
      622.0
    ],
    "en": [
      "do it on switch 1 next interface range F"
    ],
    "ru": [
      "сделать это на переключателе 1 следующий диапазон интерфейса F"
    ]
  },
  {
    "time": [
      622.0,
      627.0
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
      622.0,
      627.0
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
      627.0,
      632.0
    ],
    "en": [
      "to the bpdu guard enable finally switch"
    ],
    "ru": [
      "к включению защиты bpdu, наконец, переключить"
    ]
  },
  {
    "time": [
      632.0,
      639.0
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
      632.0,
      639.0
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
      639.0,
      643.0
    ],
    "en": [
      "spanning-tree portfast spanning tree"
    ],
    "ru": [
      "связующее дерево, быстрое связующее дерево"
    ]
  },
  {
    "time": [
      643.0,
      648.0
    ],
    "en": [
      "bpdu guard enable okay so this slab was"
    ],
    "ru": [
      "bpdu guard включить нормально, поэтому эта плита была"
    ]
  },
  {
    "time": [
      648.0,
      650.0
    ],
    "en": [
      "a little longer than usual but there's a"
    ],
    "ru": [
      "немного дольше, чем обычно, но есть"
    ]
  },
  {
    "time": [
      650.0,
      652.0
    ],
    "en": [
      "lot to say about spanning tree and it's"
    ],
    "ru": [
      "много сказать о связующем дереве, и это"
    ]
  },
  {
    "time": [
      652.0,
      654.0
    ],
    "en": [
      "a big exam topic make sure you're"
    ],
    "ru": [
      "большая тема экзамена убедитесь, что вы"
    ]
  },
  {
    "time": [
      654.0,
      655.0
    ],
    "en": [
      "familiar with everything on the exam"
    ],
    "ru": [
      "знаком со всем на экзамене"
    ]
  },
  {
    "time": [
      655.0,
      657.0
    ],
    "en": [
      "topics list before you write the exam"
    ],
    "ru": [
      "список тем перед тем, как писать экзамен"
    ]
  },
  {
    "time": [
      657.0,
      663.0
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
      663.0,
      665.0
    ],
    "en": [
      "thank you for watching I hope this lab"
    ],
    "ru": [
      "спасибо за просмотр, надеюсь, эта лаборатория"
    ]
  },
  {
    "time": [
      665.0,
      667.0
    ],
    "en": [
      "and video have been helpful for you"
    ],
    "ru": [
      "и видео были для вас полезны"
    ]
  },
  {
    "time": [
      667.0,
      670.0
    ],
    "en": [
      "please subscribe for future labs like"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, такие как"
    ]
  },
  {
    "time": [
      670.0,
      672.0
    ],
    "en": [
      "this which will be released weekly if"
    ],
    "ru": [
      "это будет выпускаться еженедельно, если"
    ]
  },
  {
    "time": [
      672.0,
      674.0
    ],
    "en": [
      "you have requests for any specific labs"
    ],
    "ru": [
      "у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      674.0,
      677.0
    ],
    "en": [
      "let me know in the comment section if"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев, если"
    ]
  },
  {
    "time": [
      677.0,
      679.0
    ],
    "en": [
      "you want to support my channel I accept"
    ],
    "ru": [
      "вы хотите поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      679.0,
      682.0
    ],
    "en": [
      "the Bitcoin and aetherium donations via"
    ],
    "ru": [
      "пожертвования биткойнов и эфириума через"
    ]
  },
  {
    "time": [
      682.0,
      685.0
    ],
    "en": [
      "the addresses in the description I am"
    ],
    "ru": [
      "адреса в описании я"
    ]
  },
  {
    "time": [
      685.0,
      687.0
    ],
    "en": [
      "also a brave verified publisher and"
    ],
    "ru": [
      "также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      687.0,
      689.0
    ],
    "en": [
      "accept bat or basic attention token"
    ],
    "ru": [
      "принять летучую мышь или жетон основного внимания"
    ]
  },
  {
    "time": [
      689.0,
      689.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]