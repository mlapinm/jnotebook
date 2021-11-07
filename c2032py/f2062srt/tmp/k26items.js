let objs = [
  {
    "time": [
      0.0,
      4.609875
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
      4.609875,
      7.665083
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
      7.665083,
      14.851166
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
      14.851166,
      19.432249
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
      19.432249,
      24.909351
    ],
    "en": [
      "in this lab we will take a look at STP spanning tree protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим протокол связующего дерева STP."
    ]
  },
  {
    "time": [
      24.909351,
      27.085037
    ],
    "en": [
      "and do some basic configurations"
    ],
    "ru": [
      "и сделаем некоторые базовые настройки"
    ]
  },
  {
    "time": [
      27.085037,
      34.082099
    ],
    "en": [
      "spanning tree is necessary to prevent layer 2 loops which would otherwise render your network useless"
    ],
    "ru": [
      "связующее дерево необходимо для предотвращения зацикливания уровня 2, которое в противном случае сделало бы вашу сеть бесполезной."
    ]
  },
  {
    "time": [
      34.082099,
      42.018786
    ],
    "en": [
      "in this topology for example without spanning tree a layer 2 broadcast would loop around the 3 switches endlessly"
    ],
    "ru": [
      "в этой топологии, например, без связующего дерева, широковещательная передача уровня 2 будет бесконечно зацикливаться на трех коммутаторах."
    ]
  },
  {
    "time": [
      42.018786,
      46.070623
    ],
    "en": [
      "and with enough of that in your network your networker is not going to be operating well"
    ],
    "ru": [
      "и с достаточным количеством этого в вашей сети ваш сетевик не будет работать хорошо"
    ]
  },
  {
    "time": [
      46.070623,
      53.314998
    ],
    "en": [
      "just to clarify that if switch 1 sends a broadcast it goes to switch 2 and switch 3"
    ],
    "ru": [
      "просто чтобы уточнить, что если коммутатор 1 отправляет широковещательную рассылку, он переходит на коммутатор 2 и коммутатор 3"
    ]
  },
  {
    "time": [
      53.314998,
      58.719852
    ],
    "en": [
      "then both of them flood the broadcast out every port except the one they received it on"
    ],
    "ru": [
      "затем они оба заливают широковещательную рассылку на каждый порт, кроме того, на котором они ее получили"
    ]
  },
  {
    "time": [
      58.719852,
      69.196435
    ],
    "en": [
      "then the process repeats and it will go from switch 1 2 switch 2 to switch 3 to switch 1 2 switch 2 to switch 3 and also the same thing in the other direction"
    ],
    "ru": [
      "затем процесс повторяется, и он переходит от переключателя 1 2 переключателя 2 к переключателю 3 к переключателю 1 2 переключателя 2 к переключателю 3, а также то же самое в другом направлении"
    ]
  },
  {
    "time": [
      69.196435,
      72.730685
    ],
    "en": [
      "that's why spanning tree is essential in a case like this"
    ],
    "ru": [
      "вот почему связующее дерево необходимо в таком случае"
    ]
  },
  {
    "time": [
      72.730685,
      75.11106
    ],
    "en": [
      "anyway let's get started"
    ],
    "ru": [
      "в любом случае давайте начнем"
    ]
  },
  {
    "time": [
      75.11106,
      80.519789
    ],
    "en": [
      "the first step just asks us some questions about STP"
    ],
    "ru": [
      "первый шаг просто задает нам несколько вопросов о STP"
    ]
  },
  {
    "time": [
      80.519789,
      84.626955
    ],
    "en": [
      "the first is which version is currently running on the switches"
    ],
    "ru": [
      "во-первых, какая версия в настоящее время работает на коммутаторах."
    ]
  },
  {
    "time": [
      84.626955,
      99.474914
    ],
    "en": [
      "there are multiple versions for example common spanning tree the old original version also per VLAN spanning tree rapid spanning tree rapid per VLAN spanning tree so which is running on these switches by default"
    ],
    "ru": [
      "существует несколько версий, например, общее связующее дерево; старая оригинальная версия также на связующее дерево VLAN; быстрое связующее дерево; быстрое связующее дерево для каждой виртуальной локальной сети; оно работает на этих коммутаторах по умолчанию."
    ]
  },
  {
    "time": [
      99.474914,
      103.116268
    ],
    "en": [
      "these are all the same models so let's just check on switch one"
    ],
    "ru": [
      "это все те же модели, так что давайте просто проверим первый переключатель"
    ]
  },
  {
    "time": [
      103.116268,
      109.081435
    ],
    "en": [
      "enable show spanning tree summary"
    ],
    "ru": [
      "включить отображение сводки связующего дерева"
    ]
  },
  {
    "time": [
      109.081435,
      111.92506
    ],
    "en": [
      "right here the first line"
    ],
    "ru": [
      "прямо здесь первая линия"
    ]
  },
  {
    "time": [
      111.92506,
      114.181226
    ],
    "en": [
      "switch is in P vs T mode"
    ],
    "ru": [
      "переключатель находится в режиме P vs T"
    ]
  },
  {
    "time": [
      114.181226,
      116.568663
    ],
    "en": [
      "so there's our answer"
    ],
    "ru": [
      "так вот наш ответ"
    ]
  },
  {
    "time": [
      116.568663,
      119.491496
    ],
    "en": [
      "p vs t is per VLAN spanning tree"
    ],
    "ru": [
      "p vs t для связующего дерева VLAN"
    ]
  },
  {
    "time": [
      119.491496,
      125.721329
    ],
    "en": [
      "that means each VLAN has its own spanning tree instance running which we can configure individually"
    ],
    "ru": [
      "это означает, что каждая VLAN имеет свой собственный экземпляр связующего дерева, который мы можем настроить индивидуально."
    ]
  },
  {
    "time": [
      125.721329,
      129.230454
    ],
    "en": [
      "you can see that down here"
    ],
    "ru": [
      "вы можете увидеть это здесь"
    ]
  },
  {
    "time": [
      129.230454,
      134.098537
    ],
    "en": [
      "there is VLAN 1 the default di on which all generally ignore for this lab"
    ],
    "ru": [
      "есть VLAN 1, di по умолчанию, которую все обычно игнорируют для этой лабораторной работы"
    ]
  },
  {
    "time": [
      134.098537,
      137.642766
    ],
    "en": [
      "and then our three VLANs 10 20 and 30"
    ],
    "ru": [
      "а затем наши три VLAN 10 20 и 30"
    ]
  },
  {
    "time": [
      137.642766,
      143.802016
    ],
    "en": [
      "the next question is what is the bridge ID for each switch"
    ],
    "ru": [
      "следующий вопрос: какой идентификатор моста у каждого коммутатора"
    ]
  },
  {
    "time": [
      143.802016,
      147.759536
    ],
    "en": [
      "first what exactly is a bridge ID"
    ],
    "ru": [
      "во-первых, что такое идентификатор моста"
    ]
  },
  {
    "time": [
      147.759536,
      152.048598
    ],
    "en": [
      "it is a value used to determine the root bridge in spanning tree"
    ],
    "ru": [
      "это значение, используемое для определения корневого моста в связующем дереве"
    ]
  },
  {
    "time": [
      152.048598,
      154.582577
    ],
    "en": [
      "it consists of two parts"
    ],
    "ru": [
      "он состоит из двух частей"
    ]
  },
  {
    "time": [
      154.582577,
      161.035785
    ],
    "en": [
      "the bridge priority which is 3 2 7 6 8 by default plus the MAC address"
    ],
    "ru": [
      "приоритет моста, который по умолчанию равен 3 2 7 6 8 плюс MAC-адрес"
    ]
  },
  {
    "time": [
      161.035785,
      164.58091
    ],
    "en": [
      "which is used as a tie breaker if the bridge priorities are the same"
    ],
    "ru": [
      "который используется как переключатель разрешения конфликтов, если приоритеты моста совпадают."
    ]
  },
  {
    "time": [
      164.58091,
      169.069847
    ],
    "en": [
      "the switch with the lowest bridge ID becomes the root bridge"
    ],
    "ru": [
      "коммутатор с наименьшим идентификатором моста становится корневым мостом"
    ]
  },
  {
    "time": [
      169.069847,
      172.327242
    ],
    "en": [
      "so let's checks which ones bridge ID"
    ],
    "ru": [
      "поэтому давайте проверим, какие из них ID моста"
    ]
  },
  {
    "time": [
      172.327242,
      174.625617
    ],
    "en": [
      "show spanning tree"
    ],
    "ru": [
      "показать остовное дерево"
    ]
  },
  {
    "time": [
      174.625617,
      185.877471
    ],
    "en": [
      "so for VLAN 1 the priority is 3 2 7 6 9 which is the default priority of 3 2 7 6 8 plus the VLAN number one"
    ],
    "ru": [
      "поэтому для VLAN 1 приоритетом является 3 2 7 6 9, который является приоритетом по умолчанию 3 2 7 6 8 плюс номер VLAN номер один."
    ]
  },
  {
    "time": [
      185.877471,
      190.993366
    ],
    "en": [
      "then the MAC address is here beginning with zero zero six zero"
    ],
    "ru": [
      "тогда MAC-адрес здесь начинается с нуля, нуля, шести, нуля."
    ]
  },
  {
    "time": [
      190.993366,
      195.604346
    ],
    "en": [
      "note that the information up here is for the root bridge"
    ],
    "ru": [
      "обратите внимание, что информация здесь предназначена для корневого моста"
    ]
  },
  {
    "time": [
      195.604346,
      198.759241
    ],
    "en": [
      "and down here is for this switch itself"
    ],
    "ru": [
      "и вот для этого переключателя"
    ]
  },
  {
    "time": [
      198.759241,
      203.577846
    ],
    "en": [
      "the information is different so clearly switch 1 is not the root bridge"
    ],
    "ru": [
      "информация отличается, поэтому ясно, что переключатель 1 не является корневым мостом"
    ]
  },
  {
    "time": [
      203.577846,
      212.353095
    ],
    "en": [
      "switch ones bridge ID will be essentially the same for each VLAN but the priority will differ because the VLAN ID is added to the default priority"
    ],
    "ru": [
      "идентификатор моста коммутатора будет по существу одинаковым для каждой VLAN, но приоритет будет отличаться, потому что идентификатор VLAN добавлен к приоритету по умолчанию"
    ]
  },
  {
    "time": [
      212.353095,
      223.493074
    ],
    "en": [
      "C 3 2 7 7 8 3 2 7 8 8 & 3 2 7 9 8"
    ],
    "ru": [
      "С 3 2 7 7 8 3 2 7 8 8 и 3 2 7 9 8"
    ]
  },
  {
    "time": [
      223.493074,
      226.530782
    ],
    "en": [
      "okay now let's check the bridge ID on switch 2"
    ],
    "ru": [
      "Хорошо, теперь давайте проверим идентификатор моста на переключателе 2"
    ]
  },
  {
    "time": [
      226.530782,
      233.173615
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
      233.173615,
      236.343865
    ],
    "en": [
      "again the priorities will be the same as on switch 1"
    ],
    "ru": [
      "снова приоритеты будут такими же, как на переключателе 1"
    ]
  },
  {
    "time": [
      236.343865,
      242.235072
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
      236.343865,
      242.235072
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
      242.235072,
      247.450738
    ],
    "en": [
      "and here is the MAC address beginning with 0 0 0 1"
    ],
    "ru": [
      "а вот MAC-адрес, начинающийся с 0 0 0 1"
    ]
  },
  {
    "time": [
      247.450738,
      253.295447
    ],
    "en": [
      "note that the info down here is the same as the info in the route ID section"
    ],
    "ru": [
      "обратите внимание, что информация здесь такая же, как информация в разделе идентификатора маршрута"
    ]
  },
  {
    "time": [
      253.295447,
      257.164613
    ],
    "en": [
      "and the route ID section itself says this bridge is the root"
    ],
    "ru": [
      "и в самом разделе идентификатора маршрута говорится, что этот мост является корневым"
    ]
  },
  {
    "time": [
      257.164613,
      262.50207
    ],
    "en": [
      "so that answers the next question - as to what is the root bridge for each VLAN"
    ],
    "ru": [
      "так что это отвечает на следующий вопрос - что является корневым мостом для каждой VLAN."
    ]
  },
  {
    "time": [
      262.50207,
      265.490527
    ],
    "en": [
      "because we haven't done any configurations yet"
    ],
    "ru": [
      "потому что мы еще не сделали никаких настроек"
    ]
  },
  {
    "time": [
      265.490527,
      267.336381
    ],
    "en": [
      "the priorities are all the same"
    ],
    "ru": [
      "приоритеты все те же"
    ]
  },
  {
    "time": [
      267.336381,
      271.60836
    ],
    "en": [
      "so the switch with the lowest MAC address will become the root for all VLANs"
    ],
    "ru": [
      "поэтому коммутатор с наименьшим MAC-адресом станет корневым для всех VLAN."
    ]
  },
  {
    "time": [
      271.60836,
      273.100922
    ],
    "en": [
      "switch 2 in this case"
    ],
    "ru": [
      "переключатель 2 в этом случае"
    ]
  },
  {
    "time": [
      273.100922,
      277.513942
    ],
    "en": [
      "let's quickly take a look at switch threes bridge ID also"
    ],
    "ru": [
      "Давайте также быстро взглянем на идентификатор моста коммутатора threes"
    ]
  },
  {
    "time": [
      277.513942,
      283.550067
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
      283.550067,
      290.180629
    ],
    "en": [
      "again the priorities are the same and the MAC address begins with 0 0 0 4"
    ],
    "ru": [
      "снова приоритеты те же, и MAC-адрес начинается с 0 0 0 4"
    ]
  },
  {
    "time": [
      290.180629,
      292.974441
    ],
    "en": [
      "so indeed switch 2 has the lowest Mac"
    ],
    "ru": [
      "так что действительно у коммутатора 2 самый низкий Mac"
    ]
  },
  {
    "time": [
      292.974441,
      297.72692
    ],
    "en": [
      "switch ones Mac began with 0 0 6 0 the highest"
    ],
    "ru": [
      "поменять местами Mac начал с 0 0 6 0 наивысшего"
    ]
  },
  {
    "time": [
      297.72692,
      303.797045
    ],
    "en": [
      "then switch 3 with 0 0 0 4 and then switch 2 at 0 0 0 1 the lowest"
    ],
    "ru": [
      "затем переключите 3 на 0 0 0 4, а затем переключите 2 на 0 0 0 1 самый низкий"
    ]
  },
  {
    "time": [
      303.797045,
      310.35817
    ],
    "en": [
      "okay the next question is what is the STP cost of each interface"
    ],
    "ru": [
      "хорошо, следующий вопрос - какова стоимость STP каждого интерфейса"
    ]
  },
  {
    "time": [
      310.35817,
      315.874545
    ],
    "en": [
      "well the interface is connecting the switches are Gigabit Ethernet interfaces"
    ],
    "ru": [
      "хорошо интерфейс соединяет коммутаторы интерфейсы Gigabit Ethernet"
    ]
  },
  {
    "time": [
      315.874545,
      319.06192
    ],
    "en": [
      "they have a default STP cost of 4"
    ],
    "ru": [
      "у них стандартная стоимость STP по умолчанию 4"
    ]
  },
  {
    "time": [
      319.06192,
      330.167503
    ],
    "en": [
      "on the other hand the interface is connected to the PCs which are still actively sending spanning TB PDUs or bridge protocol data units even though a switch isn't connected to them"
    ],
    "ru": [
      "с другой стороны, интерфейс подключен к ПК, которые все еще активно отправляют PDU охватывающего TB или блоки данных протокола моста, даже если к ним не подключен коммутатор."
    ]
  },
  {
    "time": [
      330.167503,
      332.427357
    ],
    "en": [
      "our Fast Ethernet interfaces"
    ],
    "ru": [
      "наши интерфейсы Fast Ethernet"
    ]
  },
  {
    "time": [
      332.427357,
      334.998711
    ],
    "en": [
      "which have a default cost of 19"
    ],
    "ru": [
      "которые имеют стоимость по умолчанию 19"
    ]
  },
  {
    "time": [
      334.998711,
      339.152336
    ],
    "en": [
      "look at the show spanning tree command here"
    ],
    "ru": [
      "посмотрите на команду show spanning tree здесь"
    ]
  },
  {
    "time": [
      339.152336,
      347.568273
    ],
    "en": [
      "you can see Gigabit Ethernet interfaces with the cost of 4 and Fast Ethernet interfaces with a cost of 19"
    ],
    "ru": [
      "можно увидеть интерфейсы Gigabit Ethernet стоимостью 4 и интерфейсы Fast Ethernet стоимостью 19"
    ]
  },
  {
    "time": [
      347.568273,
      354.164168
    ],
    "en": [
      "the next question is which interface is blocked and why"
    ],
    "ru": [
      "следующий вопрос - какой интерфейс заблокирован и почему"
    ]
  },
  {
    "time": [
      354.164168,
      358.438814
    ],
    "en": [
      "well you can see on packet tracer which is blocked due to the port lights"
    ],
    "ru": [
      "хорошо вы можете видеть на трассировщике пакетов, который заблокирован из-за индикаторов порта"
    ]
  },
  {
    "time": [
      358.438814,
      362.106647
    ],
    "en": [
      "let's just check with the show command on switch 1"
    ],
    "ru": [
      "давайте просто проверим с помощью команды show на переключателе 1"
    ]
  },
  {
    "time": [
      362.106647,
      367.043793
    ],
    "en": [
      "let's look at the output of show spanning tree again"
    ],
    "ru": [
      "давайте снова посмотрим на результат show spanning tree"
    ]
  },
  {
    "time": [
      367.043793,
      373.360772
    ],
    "en": [
      "you can see that gig 0 1 interface is blocking as BLK indicates here"
    ],
    "ru": [
      "вы можете видеть, что интерфейс gig 0 1 блокируется, как указывает здесь BLK"
    ]
  },
  {
    "time": [
      373.360772,
      375.623147
    ],
    "en": [
      "why is that"
    ],
    "ru": [
      "это почему"
    ]
  },
  {
    "time": [
      375.623147,
      381.194251
    ],
    "en": [
      "well switch 2 is the root bridge so all of its ports are designated ports"
    ],
    "ru": [
      "ну, коммутатор 2 является корневым мостом, поэтому все его порты назначены портами"
    ]
  },
  {
    "time": [
      381.194251,
      390.176021
    ],
    "en": [
      "switch ones gig 0 2 interface and switch 3s gig 0 one interface have the lowest cost to the root for them"
    ],
    "ru": [
      "переключить один интерфейс гиг 0 2 и переключить 3 гиг 0 один интерфейс имеют самую низкую стоимость для рута для них"
    ]
  },
  {
    "time": [
      390.176021,
      392.967125
    ],
    "en": [
      "so they are route ports and it will forward traffic"
    ],
    "ru": [
      "поэтому они являются портами маршрутизации, и он будет перенаправлять трафик"
    ]
  },
  {
    "time": [
      392.967125,
      398.54625
    ],
    "en": [
      "now we have to block one part between switch 1 and switch 3 to prevent loops"
    ],
    "ru": [
      "теперь мы должны заблокировать одну часть между переключателем 1 и переключателем 3, чтобы предотвратить петли"
    ]
  },
  {
    "time": [
      398.54625,
      406.810646
    ],
    "en": [
      "so switch 1 and switch 3 compare their bridge IDs and because switch ones is the highest it blocks the gig zero one port"
    ],
    "ru": [
      "поэтому коммутатор 1 и коммутатор 3 сравнивают свои идентификаторы моста, и поскольку коммутаторы являются самыми высокими, он блокирует порт гига ноль один"
    ]
  },
  {
    "time": [
      406.810646,
      411.964708
    ],
    "en": [
      "okay finally let's get to some configurations"
    ],
    "ru": [
      "ладно, наконец, давайте перейдем к некоторым конфигурациям"
    ]
  },
  {
    "time": [
      411.964708,
      418.559979
    ],
    "en": [
      "step two says to change the spanning tree mota RP VST rapid per VLAN spanning tree"
    ],
    "ru": [
      "на втором шаге говорится, что нужно изменить связующее дерево mota RP VST quick для связующего дерева VLAN"
    ]
  },
  {
    "time": [
      418.559979,
      426.814416
    ],
    "en": [
      "if your switches support rapid P VST you really should use it because it allows the network to converge much faster when there are changes"
    ],
    "ru": [
      "если ваши коммутаторы поддерживают быстрый P VST, вам действительно следует использовать его, потому что он позволяет сети намного быстрее сходиться при изменениях"
    ]
  },
  {
    "time": [
      426.814416,
      430.173916
    ],
    "en": [
      "all it takes is one command on each switch"
    ],
    "ru": [
      "все, что нужно, - это по одной команде на каждом переключателе"
    ]
  },
  {
    "time": [
      430.173916,
      432.288521
    ],
    "en": [
      "ON switch one first"
    ],
    "ru": [
      "Включите сначала один"
    ]
  },
  {
    "time": [
      432.288521,
      438.218416
    ],
    "en": [
      "conf T spanning tree mode rapid P vs T"
    ],
    "ru": [
      "conf T режим связующего дерева быстрый P vs T"
    ]
  },
  {
    "time": [
      438.218416,
      439.976561
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
      439.976561,
      441.946248
    ],
    "en": [
      "now switch 2"
    ],
    "ru": [
      "теперь переключитесь 2"
    ]
  },
  {
    "time": [
      441.946248,
      448.36331
    ],
    "en": [
      "conf t spanning tree mode rapid P vs T"
    ],
    "ru": [
      "conf t режим связующего дерева quick P vs T"
    ]
  },
  {
    "time": [
      448.36331,
      450.600268
    ],
    "en": [
      "and finally switch three"
    ],
    "ru": [
      "и, наконец, переключите три"
    ]
  },
  {
    "time": [
      450.600268,
      456.923268
    ],
    "en": [
      "conf t spanning tree mode rapid P vs T"
    ],
    "ru": [
      "conf t режим связующего дерева quick P vs T"
    ]
  },
  {
    "time": [
      456.923268,
      458.742851
    ],
    "en": [
      "okay that's it"
    ],
    "ru": [
      "хорошо, вот и все"
    ]
  },
  {
    "time": [
      458.742851,
      463.452663
    ],
    "en": [
      "now it's time to manipulate the spanning trees a little bit"
    ],
    "ru": [
      "теперь пришло время немного поработать с остовными деревьями"
    ]
  },
  {
    "time": [
      463.452663,
      466.277454
    ],
    "en": [
      "we're going to change the root bridge for each VLAN"
    ],
    "ru": [
      "мы собираемся изменить корневой мост для каждой VLAN"
    ]
  },
  {
    "time": [
      466.277454,
      472.218329
    ],
    "en": [
      "and also configure a secondary route to specify which switch we want to be the route if the route fails"
    ],
    "ru": [
      "а также настроить вторичный маршрут, чтобы указать, какой коммутатор мы хотим быть маршрутом в случае сбоя маршрута"
    ]
  },
  {
    "time": [
      472.218329,
      475.877266
    ],
    "en": [
      "let's go and configure our primary routes"
    ],
    "ru": [
      "пойдем и настроим наши основные маршруты"
    ]
  },
  {
    "time": [
      475.877266,
      484.786578
    ],
    "en": [
      "on switch 1 spanning tree VLAN 10 root primary"
    ],
    "ru": [
      "на коммутаторе 1 связующее дерево VLAN 10 основной корень"
    ]
  },
  {
    "time": [
      484.786578,
      487.024912
    ],
    "en": [
      "okay then switch 2"
    ],
    "ru": [
      "хорошо, тогда переключи 2"
    ]
  },
  {
    "time": [
      487.024912,
      492.649703
    ],
    "en": [
      "spanning tree VLAN 20 root primary"
    ],
    "ru": [
      "связующее дерево VLAN 20 корень первичный"
    ]
  },
  {
    "time": [
      492.649703,
      496.846453
    ],
    "en": [
      "and then switch three"
    ],
    "ru": [
      "а затем переключите три"
    ]
  },
  {
    "time": [
      496.846453,
      500.53789
    ],
    "en": [
      "spanning tree VLAN 30 root primary"
    ],
    "ru": [
      "связующее дерево VLAN 30 корень первичный"
    ]
  },
  {
    "time": [
      500.53789,
      504.385911
    ],
    "en": [
      "okay now let's set the secondary VLANs"
    ],
    "ru": [
      "хорошо, теперь давайте установим вторичные VLAN"
    ]
  },
  {
    "time": [
      504.385911,
      513.550994
    ],
    "en": [
      "switch three here should be the secondary route for VLAN 20 so spanning tree VLAN 20 route secondary"
    ],
    "ru": [
      "коммутатор три здесь должен быть вторичным маршрутом для VLAN 20, так что связующее дерево VLAN 20 будет вторичным маршрутом"
    ]
  },
  {
    "time": [
      513.550994,
      516.307931
    ],
    "en": [
      "then switch 1"
    ],
    "ru": [
      "затем переключите 1"
    ]
  },
  {
    "time": [
      516.307931,
      524.898306
    ],
    "en": [
      "spanning tree VLAN 30 route secondary and finally switched 2"
    ],
    "ru": [
      "связующее дерево VLAN 30 вторичный и окончательно коммутируемый маршрут 2"
    ]
  },
  {
    "time": [
      524.898306,
      529.157243
    ],
    "en": [
      "spanning tree VLAN 10 route secondary"
    ],
    "ru": [
      "связующее дерево VLAN 10 маршрут вторичный"
    ]
  },
  {
    "time": [
      529.157243,
      534.704951
    ],
    "en": [
      "ok now both of these commands adjust the span to be priority of the switch down"
    ],
    "ru": [
      "Хорошо, теперь обе эти команды регулируют диапазон, чтобы он был приоритетом переключения вниз"
    ]
  },
  {
    "time": [
      534.704951,
      537.895451
    ],
    "en": [
      "let's check what the priorities are here on switch 2"
    ],
    "ru": [
      "давайте проверим, какие приоритеты здесь на переключателе 2"
    ]
  },
  {
    "time": [
      537.895451,
      547.072513
    ],
    "en": [
      "do show spanning-tree look at VLAN 10 for which switch 2 is the secondary route"
    ],
    "ru": [
      "покажите связующее дерево, посмотрите на VLAN 10, для которой коммутатор 2 является вторичным маршрутом"
    ]
  },
  {
    "time": [
      547.072513,
      553.146013
    ],
    "en": [
      "it brings the priority down to two eight six seven two plus ten for the VLAN ID"
    ],
    "ru": [
      "он снижает приоритет до два восемь шесть семь два плюс десять для идентификатора VLAN"
    ]
  },
  {
    "time": [
      553.146013,
      558.303867
    ],
    "en": [
      "now look at VLAN 24 rich it is the route"
    ],
    "ru": [
      "теперь посмотрите на VLAN 24 rich, это маршрут"
    ]
  },
  {
    "time": [
      558.303867,
      564.612512
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
      558.303867,
      564.612512
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
      564.612512,
      571.994408
    ],
    "en": [
      "ok finally we are going to enable port fast and bpdu guard on the appropriate interfaces"
    ],
    "ru": [
      "Хорошо, наконец, мы собираемся включить быстрый порт и защиту bpdu на соответствующих интерфейсах"
    ]
  },
  {
    "time": [
      571.994408,
      576.697616
    ],
    "en": [
      "these should be enabled on interfaces not connected to another switch"
    ],
    "ru": [
      "они должны быть включены на интерфейсах, не подключенных к другому коммутатору."
    ]
  },
  {
    "time": [
      576.697616,
      583.545262
    ],
    "en": [
      "bpdu guide will put an interface in the air disabled mode if a bpdu is received on the port"
    ],
    "ru": [
      "Руководство по bpdu переведет интерфейс в режим отключения по воздуху, если на порт получен bpdu"
    ]
  },
  {
    "time": [
      583.545262,
      588.951928
    ],
    "en": [
      "and port fast allows interfaces to start forwarding without having to wait for the spanning tree to converge"
    ],
    "ru": [
      "и port fast позволяет интерфейсам начать пересылку, не дожидаясь схождения связующего дерева"
    ]
  },
  {
    "time": [
      588.951928,
      596.210428
    ],
    "en": [
      "now you can enable port fest here from global configuration mode with spending to the port fast default"
    ],
    "ru": [
      "теперь вы можете включить здесь порт fest из режима глобальной конфигурации с быстрым расходом на порт по умолчанию"
    ]
  },
  {
    "time": [
      596.210428,
      598.846886
    ],
    "en": [
      "which will enable it on all access ports"
    ],
    "ru": [
      "который включит его на всех портах доступа"
    ]
  },
  {
    "time": [
      598.846886,
      602.378657
    ],
    "en": [
      "you can also configure it at the interface level"
    ],
    "ru": [
      "вы также можете настроить его на уровне интерфейса"
    ]
  },
  {
    "time": [
      602.378657,
      603.595428
    ],
    "en": [
      "let's do that"
    ],
    "ru": [
      "Давайте сделаем это"
    ]
  },
  {
    "time": [
      603.595428,
      608.758719
    ],
    "en": [
      "interface range F 0 1 to 3"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 1 до 3"
    ]
  },
  {
    "time": [
      608.758719,
      615.394552
    ],
    "en": [
      "spanning-tree portfast spanning tree bpdu guard enable"
    ],
    "ru": [
      "Spanning Tree Portfast Spanning Tree Bpdu Guard включить"
    ]
  },
  {
    "time": [
      615.394552,
      619.068593
    ],
    "en": [
      "ok let's do it on switch 1 next"
    ],
    "ru": [
      "хорошо, давай сделаем это на переключателе 1 дальше"
    ]
  },
  {
    "time": [
      619.068593,
      630.111009
    ],
    "en": [
      "interface range F 0 1 to 3 spanning-tree portfast spending to the bpdu guard enable"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 1 до 3 порт связующего дерева быстрое расходование на bpdu guard включить"
    ]
  },
  {
    "time": [
      630.111009,
      633.546301
    ],
    "en": [
      "finally switch 3"
    ],
    "ru": [
      "наконец переключатель 3"
    ]
  },
  {
    "time": [
      633.546301,
      645.51678
    ],
    "en": [
      "interface range F 0 1 to 3 spanning-tree portfast spanning tree bpdu guard enable"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 1 до 3 spanning-tree portfast spanning tree bpdu guard enable"
    ]
  },
  {
    "time": [
      645.51678,
      650.357217
    ],
    "en": [
      "okay so this slab was a little longer than usual"
    ],
    "ru": [
      "хорошо, эта плита была немного длиннее, чем обычно"
    ]
  },
  {
    "time": [
      650.357217,
      653.562446
    ],
    "en": [
      "but there's a lot to say about spanning tree and it's a big exam topic"
    ],
    "ru": [
      "но о связующем дереве можно много сказать, и это большая тема для экзамена"
    ]
  },
  {
    "time": [
      653.562446,
      658.076424
    ],
    "en": [
      "make sure you're familiar with everything on the exam topics list before you write the exam"
    ],
    "ru": [
      "убедитесь, что вы знакомы со всем, что указано в списке тем экзамена, прежде чем писать экзамен"
    ]
  },
  {
    "time": [
      658.076424,
      660.508444
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
      660.508444,
      668.034402
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
      668.034402,
      672.32911
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
      672.32911,
      676.999214
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
      676.999214,
      683.789255
    ],
    "en": [
      "if you want to support my channel I accept the Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      683.789255,
      692.107505
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
      692.107505,
      692.107505
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
      692.107505,
      692.107505
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
      692.107505,
      692.107505
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]