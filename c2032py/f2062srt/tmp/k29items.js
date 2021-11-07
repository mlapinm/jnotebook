let objs = [
  {
    "time": [
      0.0,
      4.683104
    ],
    "en": [
      "welcome to this free CCNA packet racer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA пакетного гонщика"
    ]
  },
  {
    "time": [
      4.683104,
      8.108979
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
      8.108979,
      14.50752
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
      14.50752,
      18.766582
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
      18.766582,
      24.506727
    ],
    "en": [
      "in this lab we will troubleshoot the topology we configured in the previous lab"
    ],
    "ru": [
      "в этой лабораторной работе мы будем устранять проблемы с топологией, которую мы настроили в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      24.506727,
      29.456997
    ],
    "en": [
      "several miss configurations are preventing our ether channels from operating as intended"
    ],
    "ru": [
      "несколько неудачных конфигураций мешают нашим эфирным каналам работать должным образом"
    ]
  },
  {
    "time": [
      29.456997,
      32.176601
    ],
    "en": [
      "let's troubleshoot the errors and fix them"
    ],
    "ru": [
      "давайте устраним ошибки и исправим их"
    ]
  },
  {
    "time": [
      32.176601,
      36.325726
    ],
    "en": [
      "first let's take a look at switch 1"
    ],
    "ru": [
      "сначала давайте посмотрим на переключатель 1"
    ]
  },
  {
    "time": [
      36.325726,
      41.739809
    ],
    "en": [
      "enable show ether channel summary"
    ],
    "ru": [
      "включить показ сводки эфирного канала"
    ]
  },
  {
    "time": [
      41.739809,
      49.090412
    ],
    "en": [
      "so we have port channel 1 configured and it's layer 2 however it is down as this D indicates"
    ],
    "ru": [
      "Итак, у нас настроен канал порта 1, и это уровень 2, но он не работает, как указывает этот D"
    ]
  },
  {
    "time": [
      49.090412,
      57.416412
    ],
    "en": [
      "the eye next to the interfaces indicates standalone meaning they aren't properly paired with interfaces on switch 2 to make the ether channel"
    ],
    "ru": [
      "глаз рядом с интерфейсами указывает на автономность, что означает, что они не соединены должным образом с интерфейсами на переключателе 2, чтобы создать эфирный канал."
    ]
  },
  {
    "time": [
      57.416412,
      61.364287
    ],
    "en": [
      "however you should be able to spot the problem here"
    ],
    "ru": [
      "однако вы сможете найти здесь проблему"
    ]
  },
  {
    "time": [
      61.364287,
      68.895391
    ],
    "en": [
      "the ether channel between switch 1 and switch 2 is supposed to be using pagp not LACP"
    ],
    "ru": [
      "канал эфира между коммутатором 1 и коммутатором 2 должен использовать pagp, а не LACP"
    ]
  },
  {
    "time": [
      68.895391,
      73.563391
    ],
    "en": [
      "that could be why switch 1 and switch 2 aren't successfully forming either channel"
    ],
    "ru": [
      "это может быть причиной того, что переключатель 1 и переключатель 2 не формируют ни один из каналов."
    ]
  },
  {
    "time": [
      73.563391,
      75.461786
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
      75.461786,
      83.626681
    ],
    "en": [
      "conf t interface range f 0 1 through 4 no channel group 1"
    ],
    "ru": [
      "conf t interface range f 0 от 1 до 4 no channel group 1"
    ]
  },
  {
    "time": [
      83.626681,
      88.171889
    ],
    "en": [
      "also just to be safe I'll delete the port channel interface as well"
    ],
    "ru": [
      "также на всякий случай удалю интерфейс канала порта"
    ]
  },
  {
    "time": [
      88.171889,
      90.806118
    ],
    "en": [
      "no interface po1"
    ],
    "ru": [
      "нет интерфейса po1"
    ]
  },
  {
    "time": [
      90.806118,
      93.506784
    ],
    "en": [
      "okay let's reconfigure that"
    ],
    "ru": [
      "хорошо, давай изменим это"
    ]
  },
  {
    "time": [
      93.506784,
      100.191264
    ],
    "en": [
      "interface range F 0 1 through 4 channel Group 1 mode desirable"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 - 4 канал желателен режим группы 1"
    ]
  },
  {
    "time": [
      100.191264,
      103.576201
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      103.576201,
      108.199242
    ],
    "en": [
      "ok our port channel is working"
    ],
    "ru": [
      "хорошо, наш канал порта работает"
    ]
  },
  {
    "time": [
      108.199242,
      111.151117
    ],
    "en": [
      "however F 0 1 is down"
    ],
    "ru": [
      "однако F 0 1 не работает"
    ]
  },
  {
    "time": [
      111.151117,
      113.863804
    ],
    "en": [
      "let's see what's up on switch 2"
    ],
    "ru": [
      "давай посмотрим, что происходит на переключателе 2"
    ]
  },
  {
    "time": [
      113.863804,
      118.875866
    ],
    "en": [
      "enable show ether channel summary"
    ],
    "ru": [
      "включить показ сводки эфирного канала"
    ]
  },
  {
    "time": [
      118.875866,
      124.959929
    ],
    "en": [
      "F 0 4 which is connected to switch ones F 0 1 is down as well"
    ],
    "ru": [
      "F 0 4, который подключен к переключателям F 0 1 также не работает"
    ]
  },
  {
    "time": [
      124.959929,
      133.107491
    ],
    "en": [
      "remember in the previous video I said port speed duplex etc had to match for the ether channel to work"
    ],
    "ru": [
      "помните, в предыдущем видео я сказал, что дуплекс скорости порта и т. д. должен соответствовать для работы эфирного канала"
    ]
  },
  {
    "time": [
      133.107491,
      136.274824
    ],
    "en": [
      "when one interface isn't properly joining the port channel"
    ],
    "ru": [
      "когда один интерфейс не подключается должным образом к каналу порта"
    ]
  },
  {
    "time": [
      136.274824,
      138.773011
    ],
    "en": [
      "one of those things could be the problem"
    ],
    "ru": [
      "одна из этих вещей может быть проблемой"
    ]
  },
  {
    "time": [
      138.773011,
      143.313469
    ],
    "en": [
      "show interface f0 4"
    ],
    "ru": [
      "показать интерфейс f0 4"
    ]
  },
  {
    "time": [
      143.313469,
      146.725594
    ],
    "en": [
      "full duplex 10 megabits per second"
    ],
    "ru": [
      "полный дуплекс 10 мегабит в секунду"
    ]
  },
  {
    "time": [
      146.725594,
      150.126052
    ],
    "en": [
      "let's check other interfaces"
    ],
    "ru": [
      "давайте проверим другие интерфейсы"
    ]
  },
  {
    "time": [
      150.126052,
      155.859198
    ],
    "en": [
      "show interface f03 full duplex a hundred megabits per second"
    ],
    "ru": [
      "показать интерфейс f03 full duplex сто мегабит в секунду"
    ]
  },
  {
    "time": [
      155.859198,
      158.626802
    ],
    "en": [
      "show interface f0 2"
    ],
    "ru": [
      "показать интерфейс f0 2"
    ]
  },
  {
    "time": [
      158.626802,
      161.501822
    ],
    "en": [
      "again 100 megabits per second"
    ],
    "ru": [
      "снова 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      161.501822,
      166.533322
    ],
    "en": [
      "show interface F 0 1 100 megabits per second"
    ],
    "ru": [
      "показать интерфейс F 0 1 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      166.533322,
      170.146009
    ],
    "en": [
      "let's also quickly check switch once F 0 1 interface"
    ],
    "ru": [
      "давайте также быстро проверим переключатель один раз F 0 1 интерфейс"
    ]
  },
  {
    "time": [
      170.146009,
      175.752884
    ],
    "en": [
      "do show interface F 0 1"
    ],
    "ru": [
      "показать интерфейс F 0 1"
    ]
  },
  {
    "time": [
      175.752884,
      179.416738
    ],
    "en": [
      "again 100 megabits per second"
    ],
    "ru": [
      "снова 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      179.416738,
      184.6623
    ],
    "en": [
      "there's a problem the other interfaces are all using a speed of 100 megabits per second"
    ],
    "ru": [
      "есть проблема, все остальные интерфейсы используют скорость 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      184.6623,
      188.635675
    ],
    "en": [
      "let's adjust f0 4 is speed to the same"
    ],
    "ru": [
      "давайте отрегулируем f0 4 скорость такая же"
    ]
  },
  {
    "time": [
      188.635675,
      196.597466
    ],
    "en": [
      "conf t interface f0 for speed 100"
    ],
    "ru": [
      "conf t interface f0 для скорости 100"
    ]
  },
  {
    "time": [
      196.597466,
      199.309695
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      199.309695,
      201.432382
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
      201.432382,
      205.793216
    ],
    "en": [
      "all interfaces now have the PFLAG beside them meaning import channel"
    ],
    "ru": [
      "все интерфейсы теперь имеют PFLAG рядом с ними, что означает канал импорта"
    ]
  },
  {
    "time": [
      205.793216,
      212.952903
    ],
    "en": [
      "however notice port channel 1 the ether channel with switch 3 is down"
    ],
    "ru": [
      "однако обратите внимание на порт канала 1, эфирный канал с коммутатором 3 не работает"
    ]
  },
  {
    "time": [
      212.952903,
      216.765256
    ],
    "en": [
      "gig 0 1 and gig 0 2 don't show up here"
    ],
    "ru": [
      "gig 0 1 и gig 0 2 здесь не отображаются"
    ]
  },
  {
    "time": [
      216.765256,
      218.318839
    ],
    "en": [
      "I'll add them quickly"
    ],
    "ru": [
      "Я добавлю их быстро"
    ]
  },
  {
    "time": [
      218.318839,
      225.72138
    ],
    "en": [
      "interface range G 0 1 to 2 channel Group 1 mode on"
    ],
    "ru": [
      "диапазон интерфейса G 0 1-2 канала Режим группы 1 включен"
    ]
  },
  {
    "time": [
      225.72138,
      229.409859
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      229.409859,
      234.731984
    ],
    "en": [
      "looks like it's up now let's check on switch 3"
    ],
    "ru": [
      "Похоже, теперь все, давайте проверим переключатель 3"
    ]
  },
  {
    "time": [
      234.731984,
      239.123692
    ],
    "en": [
      "enable show ether channel summary"
    ],
    "ru": [
      "включить показ сводки эфирного канала"
    ]
  },
  {
    "time": [
      239.123692,
      242.268609
    ],
    "en": [
      "look at poor channel 1"
    ],
    "ru": [
      "посмотри на плохой канал 1"
    ]
  },
  {
    "time": [
      242.268609,
      244.963172
    ],
    "en": [
      "it has the flags s and u"
    ],
    "ru": [
      "у него есть флаги s и u"
    ]
  },
  {
    "time": [
      244.963172,
      250.096255
    ],
    "en": [
      "s means layer 2 that's not correct it's supposed to be layer 3"
    ],
    "ru": [
      "s означает слой 2, это неправильно, это должен быть слой 3"
    ]
  },
  {
    "time": [
      250.096255,
      256.4029
    ],
    "en": [
      "it's showing you 4 in use here but on switch to its at layer 3 down"
    ],
    "ru": [
      "он показывает вам 4 в использовании здесь, но при переключении на его уровень 3 ниже"
    ]
  },
  {
    "time": [
      256.4029,
      259.736795
    ],
    "en": [
      "show IP interface g0 1"
    ],
    "ru": [
      "показать IP-интерфейс g0 1"
    ]
  },
  {
    "time": [
      259.736795,
      262.94794
    ],
    "en": [
      "show IP interface g0 2"
    ],
    "ru": [
      "показать IP-интерфейс g0 2"
    ]
  },
  {
    "time": [
      262.94794,
      269.652169
    ],
    "en": [
      "notice both interfaces state internet protocol processing disabled"
    ],
    "ru": [
      "обратите внимание, что оба интерфейса отключили обработку интернет-протокола"
    ]
  },
  {
    "time": [
      269.652169,
      273.766315
    ],
    "en": [
      "that means the interface is our layer 2 not layer three"
    ],
    "ru": [
      "это означает, что интерфейс - это наш уровень 2, а не уровень три"
    ]
  },
  {
    "time": [
      273.766315,
      276.51319
    ],
    "en": [
      "and thus the port channel is layer two as well"
    ],
    "ru": [
      "Таким образом, канал порта также является вторым уровнем."
    ]
  },
  {
    "time": [
      276.51319,
      287.472106
    ],
    "en": [
      "show run indeed the gig zero one and gigs zero two interfaces do not have that no switch port command configured"
    ],
    "ru": [
      "show run действительно gig zero one и gigs zero два интерфейса не имеют, что команда порта коммутатора не настроена"
    ]
  },
  {
    "time": [
      287.472106,
      295.74021
    ],
    "en": [
      "let's configure it conf t interface range G zero one to two"
    ],
    "ru": [
      "давайте настроим его конф т интерфейс диапазон G от нуля до двух"
    ]
  },
  {
    "time": [
      295.74021,
      297.738897
    ],
    "en": [
      "no switch port"
    ],
    "ru": [
      "нет порта коммутатора"
    ]
  },
  {
    "time": [
      297.738897,
      299.995251
    ],
    "en": [
      "notice the command is rejected"
    ],
    "ru": [
      "обратите внимание, что команда отклонена"
    ]
  },
  {
    "time": [
      299.995251,
      303.817272
    ],
    "en": [
      "switch three is already configured for a layer two ether channel"
    ],
    "ru": [
      "Третий коммутатор уже настроен для эфирного канала второго уровня"
    ]
  },
  {
    "time": [
      303.817272,
      306.426334
    ],
    "en": [
      "let's undo that configuration and then redo it"
    ],
    "ru": [
      "давайте отменим эту конфигурацию, а затем повторим ее"
    ]
  },
  {
    "time": [
      306.426334,
      322.78223
    ],
    "en": [
      "no channel Group one no interface po1 interface range G zero one to two no switch port channel Group one mode on"
    ],
    "ru": [
      "нет канала Группа один нет интерфейса Диапазон интерфейса po1 G от нуля до двух без порта коммутатора канал Группа один режим включен"
    ]
  },
  {
    "time": [
      322.78223,
      325.790292
    ],
    "en": [
      "all so let's give it an IP address"
    ],
    "ru": [
      "все так давайте дадим ему IP-адрес"
    ]
  },
  {
    "time": [
      325.790292,
      334.939375
    ],
    "en": [
      "interface po1 IP address 23.0.0.2 255.255.255.0"
    ],
    "ru": [
      "интерфейс po1 IP-адрес 23.0.0.2 255.255.255.0"
    ]
  },
  {
    "time": [
      334.939375,
      337.815895
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      337.815895,
      339.779874
    ],
    "en": [
      "looks good here"
    ],
    "ru": [
      "здесь хорошо выглядит"
    ]
  },
  {
    "time": [
      339.779874,
      343.748624
    ],
    "en": [
      "it's layer three now let's check once more on switch 2"
    ],
    "ru": [
      "Это третий слой, теперь давайте проверим еще раз на переключателе 2"
    ]
  },
  {
    "time": [
      343.748624,
      348.480061
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      348.480061,
      351.151102
    ],
    "en": [
      "ok it looks good here"
    ],
    "ru": [
      "хорошо здесь выглядит хорошо"
    ]
  },
  {
    "time": [
      351.151102,
      357.128748
    ],
    "en": [
      "let's do one last check do ping 23.0.0.2"
    ],
    "ru": [
      "давайте сделаем последнюю проверку, сделаем пинг 23.0.0.2"
    ]
  },
  {
    "time": [
      357.128748,
      364.134373
    ],
    "en": [
      "okay it looks good we can ping switch threes end of the ether channel"
    ],
    "ru": [
      "ладно, похоже, мы можем переключить пинг на три конца эфирного канала"
    ]
  },
  {
    "time": [
      364.134373,
      368.014935
    ],
    "en": [
      "now let's go back to switch 3"
    ],
    "ru": [
      "теперь вернемся к переключателю 3"
    ]
  },
  {
    "time": [
      368.014935,
      373.287873
    ],
    "en": [
      "notice the port channel with switch 4 is down"
    ],
    "ru": [
      "обратите внимание, что канал порта с коммутатором 4 не работает"
    ]
  },
  {
    "time": [
      373.287873,
      376.425602
    ],
    "en": [
      "all of the interfaces have the standalone flag"
    ],
    "ru": [
      "все интерфейсы имеют автономный флаг"
    ]
  },
  {
    "time": [
      376.425602,
      379.453227
    ],
    "en": [
      "let's take a look at the configuration"
    ],
    "ru": [
      "давайте посмотрим на конфигурацию"
    ]
  },
  {
    "time": [
      379.453227,
      382.367352
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
      382.367352,
      385.895581
    ],
    "en": [
      "channel group 2 mode passive"
    ],
    "ru": [
      "группа каналов 2 режим пассивный"
    ]
  },
  {
    "time": [
      385.895581,
      388.83606
    ],
    "en": [
      "ok now let's look at switch 4"
    ],
    "ru": [
      "хорошо, теперь давайте посмотрим на переключатель 4"
    ]
  },
  {
    "time": [
      388.83606,
      394.309164
    ],
    "en": [
      "enable show ether channel summary"
    ],
    "ru": [
      "включить показ сводки эфирного канала"
    ]
  },
  {
    "time": [
      394.309164,
      395.973102
    ],
    "en": [
      "same thing here"
    ],
    "ru": [
      "то же самое здесь"
    ]
  },
  {
    "time": [
      395.973102,
      402.198268
    ],
    "en": [
      "show run okay here's our problem"
    ],
    "ru": [
      "показать бег хорошо вот наша проблема"
    ]
  },
  {
    "time": [
      402.198268,
      405.605914
    ],
    "en": [
      "both switches are in LACP passive mode"
    ],
    "ru": [
      "оба коммутатора находятся в пассивном режиме LACP"
    ]
  },
  {
    "time": [
      405.605914,
      409.716581
    ],
    "en": [
      "passive mode and passive mode won't form an ether channel"
    ],
    "ru": [
      "пассивный режим и пассивный режим не образуют эфирный канал"
    ]
  },
  {
    "time": [
      409.716581,
      411.934768
    ],
    "en": [
      "at least one side has to be active"
    ],
    "ru": [
      "хотя бы одна сторона должна быть активной"
    ]
  },
  {
    "time": [
      411.934768,
      415.594122
    ],
    "en": [
      "let's make switch for active and see if that solves the problem"
    ],
    "ru": [
      "давайте сделаем переключатель активным и посмотрим, решит ли это проблему"
    ]
  },
  {
    "time": [
      415.594122,
      425.673247
    ],
    "en": [
      "conf t interface range F 0 1 through 4 channel Group 1 mode active"
    ],
    "ru": [
      "conf t interface range F 0 Активен режим группы 1 каналов с 1 по 4"
    ]
  },
  {
    "time": [
      425.673247,
      429.085122
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      429.085122,
      435.865913
    ],
    "en": [
      "there we go the port channel is up and all interfaces have the import channel flag"
    ],
    "ru": [
      "вот мы идем, канал порта активен, и все интерфейсы имеют флаг канала импорта"
    ]
  },
  {
    "time": [
      435.865913,
      438.823122
    ],
    "en": [
      "let's confirm on switch 3 as well"
    ],
    "ru": [
      "давайте также подтвердим на переключателе 3"
    ]
  },
  {
    "time": [
      438.823122,
      442.965559
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      442.965559,
      445.432246
    ],
    "en": [
      "okay looks good"
    ],
    "ru": [
      "хорошо выглядит хорошо"
    ]
  },
  {
    "time": [
      445.432246,
      448.458329
    ],
    "en": [
      "we have fixed all of the problems with our ether channels"
    ],
    "ru": [
      "мы устранили все проблемы с нашими эфирными каналами"
    ]
  },
  {
    "time": [
      448.458329,
      450.135787
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
      450.135787,
      457.686995
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
      457.686995,
      460.509558
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      460.509558,
      462.226641
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      462.226641,
      467.186245
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
      467.186245,
      473.829536
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
      473.829536,
      481.758765
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
      481.758765,
      481.758765
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
      481.758765,
      481.758765
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
      481.758765,
      481.758765
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]