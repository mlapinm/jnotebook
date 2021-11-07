let objs = [
  {
    "time": [
      0.0,
      4.434625
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
      4.434625,
      8.487686
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
      8.487686,
      14.981949
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
      14.981949,
      19.482311
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
      19.482311,
      22.503468
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
      22.503468,
      27.171064
    ],
    "en": [
      "in this lab we will configure H SRP"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим H SRP"
    ]
  },
  {
    "time": [
      27.171064,
      29.784624
    ],
    "en": [
      "the hot standby router protocol"
    ],
    "ru": [
      "протокол маршрутизатора горячего резервирования"
    ]
  },
  {
    "time": [
      29.784624,
      34.916824
    ],
    "en": [
      "H SRP is an example of an F H R P"
    ],
    "ru": [
      "H SRP является примером F H R P"
    ]
  },
  {
    "time": [
      34.916824,
      37.130407
    ],
    "en": [
      "a first hop redundancy protocol"
    ],
    "ru": [
      "протокол резервирования первого перехода"
    ]
  },
  {
    "time": [
      37.130407,
      41.73467
    ],
    "en": [
      "H SRP is a cisco proprietary protocol by the way"
    ],
    "ru": [
      "Кстати, H SRP - это проприетарный протокол cisco."
    ]
  },
  {
    "time": [
      41.73467,
      45.197481
    ],
    "en": [
      "so it operates only on cisco equipment"
    ],
    "ru": [
      "поэтому он работает только на оборудовании cisco"
    ]
  },
  {
    "time": [
      45.197481,
      53.254647
    ],
    "en": [
      "vrrp virtual router redundancy protocol is a vendor neutral standard similar to HSR P"
    ],
    "ru": [
      "Протокол резервирования виртуального маршрутизатора vrrp - это независимый от производителя стандарт, аналогичный HSR P"
    ]
  },
  {
    "time": [
      53.254647,
      58.791654
    ],
    "en": [
      "redundancy is important in a network because failures can occur"
    ],
    "ru": [
      "избыточность важна в сети, потому что могут произойти сбои"
    ]
  },
  {
    "time": [
      58.791654,
      63.70578
    ],
    "en": [
      "and redundancy can prevent service outages if a failure occurs somewhere in the network"
    ],
    "ru": [
      "и резервирование может предотвратить сбои в обслуживании, если сбой происходит где-то в сети."
    ]
  },
  {
    "time": [
      63.70578,
      66.901562
    ],
    "en": [
      "in this network for example"
    ],
    "ru": [
      "в этой сети например"
    ]
  },
  {
    "time": [
      66.901562,
      69.900519
    ],
    "en": [
      "we will configure pcs in VLAN 10"
    ],
    "ru": [
      "настроим ПК в VLAN 10"
    ]
  },
  {
    "time": [
      69.900519,
      72.392787
    ],
    "en": [
      "to use R 1 as their default gateway"
    ],
    "ru": [
      "использовать R 1 в качестве шлюза по умолчанию"
    ]
  },
  {
    "time": [
      72.392787,
      78.599793
    ],
    "en": [
      "but in the event that our one fails pcs will automatically transition to using R 2"
    ],
    "ru": [
      "но в случае, если наш один выйдет из строя, ПК автоматически перейдут на использование R 2"
    ]
  },
  {
    "time": [
      78.599793,
      82.703172
    ],
    "en": [
      "which is functioning as the standby router as their default gateway"
    ],
    "ru": [
      "который работает как резервный маршрутизатор в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      82.703172,
      87.867662
    ],
    "en": [
      "now this means that one router will be inactive until the other fails"
    ],
    "ru": [
      "теперь это означает, что один маршрутизатор будет неактивен, пока другой не выйдет из строя"
    ]
  },
  {
    "time": [
      87.867662,
      89.901154
    ],
    "en": [
      "which is a waste of bandwidth"
    ],
    "ru": [
      "что является пустой тратой полосы пропускания"
    ]
  },
  {
    "time": [
      89.901154,
      96.045371
    ],
    "en": [
      "however we can achieve load balancing by assigning different default gateways for different VLANs"
    ],
    "ru": [
      "однако мы можем добиться балансировки нагрузки, назначив разные шлюзы по умолчанию для разных VLAN."
    ]
  },
  {
    "time": [
      96.045371,
      102.571606
    ],
    "en": [
      "in this network well as I said before VLAN 10 will use R 1 as the active router"
    ],
    "ru": [
      "в этой сети, как я уже говорил ранее, VLAN 10 будет использовать R 1 в качестве активного маршрутизатора."
    ]
  },
  {
    "time": [
      102.571606,
      104.657139
    ],
    "en": [
      "and R 2 as the standby"
    ],
    "ru": [
      "и R 2 в качестве резервного"
    ]
  },
  {
    "time": [
      104.657139,
      108.506595
    ],
    "en": [
      "we will configure VLAN 20 to use R 2 as the active router"
    ],
    "ru": [
      "мы настроим VLAN 20 для использования R 2 в качестве активного маршрутизатора"
    ]
  },
  {
    "time": [
      108.506595,
      110.617751
    ],
    "en": [
      "and R 1 as the standby"
    ],
    "ru": [
      "и R 1 в качестве резервного"
    ]
  },
  {
    "time": [
      110.617751,
      112.487048
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
      112.487048,
      116.188113
    ],
    "en": [
      "let's start with our ones configuration"
    ],
    "ru": [
      "начнем с нашей конфигурации"
    ]
  },
  {
    "time": [
      116.188113,
      125.213102
    ],
    "en": [
      "enable call T H SRP is configured at the interface level"
    ],
    "ru": [
      "enable call T H SRP настраивается на уровне интерфейса"
    ]
  },
  {
    "time": [
      125.213102,
      127.08902
    ],
    "en": [
      "let's start with G 0 1"
    ],
    "ru": [
      "начнем с G 0 1"
    ]
  },
  {
    "time": [
      127.08902,
      130.016118
    ],
    "en": [
      "interface G 0 1"
    ],
    "ru": [
      "интерфейс G 0 1"
    ]
  },
  {
    "time": [
      130.016118,
      134.524077
    ],
    "en": [
      "H SRP is configured with the command standby"
    ],
    "ru": [
      "H SRP настроен с помощью команды ожидания"
    ]
  },
  {
    "time": [
      134.524077,
      136.53546
    ],
    "en": [
      "followed by a group number"
    ],
    "ru": [
      "за которым следует номер группы"
    ]
  },
  {
    "time": [
      136.53546,
      141.017524
    ],
    "en": [
      "I'll use 10 since this will be the default gateway for VLAN 10"
    ],
    "ru": [
      "Я буду использовать 10, так как это будет шлюз по умолчанию для VLAN 10."
    ]
  },
  {
    "time": [
      141.017524,
      147.041038
    ],
    "en": [
      "then type IP followed by the virtual IP address"
    ],
    "ru": [
      "затем введите IP, а затем виртуальный IP-адрес"
    ]
  },
  {
    "time": [
      147.041038,
      154.027138
    ],
    "en": [
      "this is an IP address which isn't necessarily assigned to a physical interface on either router"
    ],
    "ru": [
      "это IP-адрес, который не обязательно назначен физическому интерфейсу на любом из маршрутизаторов."
    ]
  },
  {
    "time": [
      154.027138,
      158.034462
    ],
    "en": [
      "but the PCs have been configured to use it as their default gateway"
    ],
    "ru": [
      "но ПК были настроены на использование его в качестве шлюза по умолчанию"
    ]
  },
  {
    "time": [
      158.034462,
      163.308726
    ],
    "en": [
      "so when the PCs send an ARP request for the virtual IP"
    ],
    "ru": [
      "поэтому, когда ПК отправляют запрос ARP для виртуального IP"
    ]
  },
  {
    "time": [
      163.308726,
      168.208952
    ],
    "en": [
      "whichever router is the active router will reply with its own MAC address"
    ],
    "ru": [
      "Какой бы маршрутизатор ни был активным, маршрутизатор ответит своим собственным MAC-адресом."
    ]
  },
  {
    "time": [
      168.208952,
      171.202127
    ],
    "en": [
      "so pcs will send traffic to that router"
    ],
    "ru": [
      "поэтому компьютеры будут отправлять трафик на этот маршрутизатор"
    ]
  },
  {
    "time": [
      171.202127,
      177.683737
    ],
    "en": [
      "our our instructions say to use 10.10 10.1 as the default gateway for VLAN 10"
    ],
    "ru": [
      "наши инструкции говорят использовать 10.10 10.1 в качестве шлюза по умолчанию для VLAN 10"
    ]
  },
  {
    "time": [
      177.683737,
      180.707637
    ],
    "en": [
      "so 10 dot N Da 10.1"
    ],
    "ru": [
      "так 10 точек N Da 10,1"
    ]
  },
  {
    "time": [
      180.707637,
      184.837138
    ],
    "en": [
      "now we want to ensure that our 1 will be the active router"
    ],
    "ru": [
      "теперь мы хотим убедиться, что наша 1 будет активным маршрутизатором"
    ]
  },
  {
    "time": [
      184.837138,
      186.528929
    ],
    "en": [
      "so let's increase the priority"
    ],
    "ru": [
      "так давайте увеличим приоритет"
    ]
  },
  {
    "time": [
      186.528929,
      189.28843
    ],
    "en": [
      "first what's the default priority"
    ],
    "ru": [
      "во-первых, какой приоритет по умолчанию"
    ]
  },
  {
    "time": [
      189.28843,
      192.277999
    ],
    "en": [
      "you can check with this command"
    ],
    "ru": [
      "вы можете проверить с помощью этой команды"
    ]
  },
  {
    "time": [
      192.277999,
      194.259858
    ],
    "en": [
      "do show standby"
    ],
    "ru": [
      "показывать режим ожидания"
    ]
  },
  {
    "time": [
      194.259858,
      198.002034
    ],
    "en": [
      "so it's priority 100"
    ],
    "ru": [
      "так что приоритет 100"
    ]
  },
  {
    "time": [
      198.002034,
      199.087113
    ],
    "en": [
      "which is the default"
    ],
    "ru": [
      "что по умолчанию"
    ]
  },
  {
    "time": [
      199.087113,
      202.638361
    ],
    "en": [
      "let's increase the priority for a standby group 10"
    ],
    "ru": [
      "давайте увеличим приоритет для резервной группы 10"
    ]
  },
  {
    "time": [
      202.638361,
      205.075209
    ],
    "en": [
      "standby 10 priority"
    ],
    "ru": [
      "режим ожидания 10 приоритет"
    ]
  },
  {
    "time": [
      205.075209,
      208.788429
    ],
    "en": [
      "and let's increase it to 110"
    ],
    "ru": [
      "и увеличим до 110"
    ]
  },
  {
    "time": [
      208.788429,
      214.568157
    ],
    "en": [
      "another part of our instructions is to use HS RP version 2"
    ],
    "ru": [
      "другая часть наших инструкций - использовать HS RP версии 2"
    ]
  },
  {
    "time": [
      214.568157,
      217.604211
    ],
    "en": [
      "which offers some minor improvements over a version 1"
    ],
    "ru": [
      "который предлагает некоторые незначительные улучшения по сравнению с версией 1"
    ]
  },
  {
    "time": [
      217.604211,
      220.227975
    ],
    "en": [
      "standby version 2"
    ],
    "ru": [
      "резервная версия 2"
    ]
  },
  {
    "time": [
      220.227975,
      225.09115
    ],
    "en": [
      "as you may have noticed standby version 2 doesn't include the group number"
    ],
    "ru": [
      "как вы могли заметить, резервная версия 2 не включает номер группы"
    ]
  },
  {
    "time": [
      225.09115,
      228.203394
    ],
    "en": [
      "it applies to all standby groups on the interface"
    ],
    "ru": [
      "это применимо ко всем резервным группам на интерфейсе"
    ]
  },
  {
    "time": [
      228.203394,
      231.674278
    ],
    "en": [
      "ok finally let's enable preemption"
    ],
    "ru": [
      "хорошо, наконец, давайте включим приоритетное прерывание"
    ]
  },
  {
    "time": [
      231.674278,
      234.06337
    ],
    "en": [
      "well what is preemption"
    ],
    "ru": [
      "ну что такое упреждение"
    ]
  },
  {
    "time": [
      234.06337,
      236.650967
    ],
    "en": [
      "if r1 fails"
    ],
    "ru": [
      "если r1 терпит неудачу"
    ]
  },
  {
    "time": [
      236.650967,
      239.478971
    ],
    "en": [
      "r2 will become the active router for VLAN 10"
    ],
    "ru": [
      "r2 станет активным маршрутизатором для VLAN 10"
    ]
  },
  {
    "time": [
      239.478971,
      242.471126
    ],
    "en": [
      "if preemption is disabled"
    ],
    "ru": [
      "если приоритетное отключение отключено"
    ]
  },
  {
    "time": [
      242.471126,
      244.608473
    ],
    "en": [
      "even if r1 recovers"
    ],
    "ru": [
      "даже если r1 выздоровеет"
    ]
  },
  {
    "time": [
      244.608473,
      246.576364
    ],
    "en": [
      "it won't become the active router again"
    ],
    "ru": [
      "он больше не станет активным маршрутизатором"
    ]
  },
  {
    "time": [
      246.576364,
      249.90346
    ],
    "en": [
      "if preemption is enabled however"
    ],
    "ru": [
      "однако если приоритетное прерывание включено"
    ]
  },
  {
    "time": [
      249.90346,
      252.866046
    ],
    "en": [
      "hour 1 will become active again when it recovers"
    ],
    "ru": [
      "час 1 снова станет активным, когда он выздоровеет"
    ]
  },
  {
    "time": [
      252.866046,
      254.942758
    ],
    "en": [
      "here's the command"
    ],
    "ru": [
      "вот команда"
    ]
  },
  {
    "time": [
      254.942758,
      258.202055
    ],
    "en": [
      "standby 10 preempt"
    ],
    "ru": [
      "резервный 10 вытесненный"
    ]
  },
  {
    "time": [
      258.202055,
      261.718857
    ],
    "en": [
      "ok that's all for our ones G 0 1 interface"
    ],
    "ru": [
      "ок вот и все для наших G 0 1 интерфейс"
    ]
  },
  {
    "time": [
      261.718857,
      266.710014
    ],
    "en": [
      "instead of finishing the configuration on r1"
    ],
    "ru": [
      "вместо завершения настройки на r1"
    ]
  },
  {
    "time": [
      266.710014,
      269.710218
    ],
    "en": [
      "let to Artoo's VLAN 10 configuration"
    ],
    "ru": [
      "пусть к конфигурации Artoo VLAN 10"
    ]
  },
  {
    "time": [
      269.710218,
      270.940218
    ],
    "en": [
      "and then test it"
    ],
    "ru": [
      "а затем проверьте это"
    ]
  },
  {
    "time": [
      270.940218,
      275.884549
    ],
    "en": [
      "enable Conti"
    ],
    "ru": [
      "включить Conti"
    ]
  },
  {
    "time": [
      275.884549,
      278.679763
    ],
    "en": [
      "r2 will use the GZ ur to interface"
    ],
    "ru": [
      "r2 будет использовать GZ ur для интерфейса"
    ]
  },
  {
    "time": [
      278.679763,
      280.575455
    ],
    "en": [
      "so interface g0 -"
    ],
    "ru": [
      "так интерфейс g0 -"
    ]
  },
  {
    "time": [
      280.575455,
      285.680875
    ],
    "en": [
      "all we have to do for r2 is standby version 2"
    ],
    "ru": [
      "все, что нам нужно сделать для R2, ​​это резервная версия 2"
    ]
  },
  {
    "time": [
      285.680875,
      291.198992
    ],
    "en": [
      "and standby 10 IP 10 10 10 1"
    ],
    "ru": [
      "и в режиме ожидания 10 IP 10 10 10 1"
    ]
  },
  {
    "time": [
      291.198992,
      292.901056
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
      292.901056,
      295.772303
    ],
    "en": [
      "we don't need to configure preemption here"
    ],
    "ru": [
      "здесь нам не нужно настраивать приоритетное прерывание"
    ]
  },
  {
    "time": [
      295.772303,
      298.358312
    ],
    "en": [
      "we only need to configure it on the active router"
    ],
    "ru": [
      "нам нужно только настроить его на активном роутере"
    ]
  },
  {
    "time": [
      298.358312,
      300.905205
    ],
    "en": [
      "we also don't need to change the priority"
    ],
    "ru": [
      "нам также не нужно менять приоритет"
    ]
  },
  {
    "time": [
      300.905205,
      303.575341
    ],
    "en": [
      "since we already made our ones higher"
    ],
    "ru": [
      "так как мы уже сделали наши выше"
    ]
  },
  {
    "time": [
      303.575341,
      307.938833
    ],
    "en": [
      "okay let's go on pc-12 test"
    ],
    "ru": [
      "хорошо, давай пойдем на тест pc-12"
    ]
  },
  {
    "time": [
      307.938833,
      313.897245
    ],
    "en": [
      "first I'll see if I can ping the virtual IP of 10 10 10 1"
    ],
    "ru": [
      "сначала я посмотрю, смогу ли я пропинговать виртуальный IP 10 10 10 1"
    ]
  },
  {
    "time": [
      313.897245,
      317.342846
    ],
    "en": [
      "ping 10 10 10 1"
    ],
    "ru": [
      "пинг 10 10 10 1"
    ]
  },
  {
    "time": [
      317.342846,
      324.410442
    ],
    "en": [
      "ok it works"
    ],
    "ru": [
      "хорошо, это работает"
    ]
  },
  {
    "time": [
      324.410442,
      330.006315
    ],
    "en": [
      "now let's try to ping the external server at 1500 one"
    ],
    "ru": [
      "теперь попробуем пинговать внешний сервер на 1500"
    ]
  },
  {
    "time": [
      330.006315,
      333.020578
    ],
    "en": [
      "ping 1500 1"
    ],
    "ru": [
      "пинг 1500 1"
    ]
  },
  {
    "time": [
      333.020578,
      340.024025
    ],
    "en": [
      "ok it works too"
    ],
    "ru": [
      "хорошо, это тоже работает"
    ]
  },
  {
    "time": [
      340.024025,
      343.346224
    ],
    "en": [
      "now let's confirm the path being taken"
    ],
    "ru": [
      "теперь давайте подтвердим выбранный путь"
    ]
  },
  {
    "time": [
      343.346224,
      347.286927
    ],
    "en": [
      "traceroute 1500 1"
    ],
    "ru": [
      "traceroute 1500 1"
    ]
  },
  {
    "time": [
      347.286927,
      354.723662
    ],
    "en": [
      "as you can see traceroute shows our ones IP address"
    ],
    "ru": [
      "как вы можете видеть, traceroute показывает наш IP-адрес"
    ]
  },
  {
    "time": [
      354.723662,
      356.483322
    ],
    "en": [
      "not the virtual IP address"
    ],
    "ru": [
      "не виртуальный IP-адрес"
    ]
  },
  {
    "time": [
      356.483322,
      358.977585
    ],
    "en": [
      "so you can use it to confirm the path"
    ],
    "ru": [
      "так что вы можете использовать его для подтверждения пути"
    ]
  },
  {
    "time": [
      358.977585,
      362.463707
    ],
    "en": [
      "let's go do a reload on our one"
    ],
    "ru": [
      "давай сделаем перезагрузку на нашем"
    ]
  },
  {
    "time": [
      362.463707,
      364.396723
    ],
    "en": [
      "and see if r2 takes over"
    ],
    "ru": [
      "и посмотрим, берет ли на себя r2"
    ]
  },
  {
    "time": [
      364.396723,
      370.533911
    ],
    "en": [
      "and reload"
    ],
    "ru": [
      "и перезагрузить"
    ]
  },
  {
    "time": [
      370.533911,
      375.016337
    ],
    "en": [
      "okay let's go on r2"
    ],
    "ru": [
      "хорошо, пойдем на R2"
    ]
  },
  {
    "time": [
      375.016337,
      377.232777
    ],
    "en": [
      "and check if it took over for r1"
    ],
    "ru": [
      "и проверьте, вступил ли он в силу для r1"
    ]
  },
  {
    "time": [
      377.232777,
      382.919081
    ],
    "en": [
      "do show standby"
    ],
    "ru": [
      "показывать режим ожидания"
    ]
  },
  {
    "time": [
      382.919081,
      386.444727
    ],
    "en": [
      "as you can see our two is now active"
    ],
    "ru": [
      "как видите, наши двое сейчас активны"
    ]
  },
  {
    "time": [
      386.444727,
      389.778695
    ],
    "en": [
      "let's quickly try that traceroute from pc1 again"
    ],
    "ru": [
      "давайте быстро попробуем этот traceroute с pc1 еще раз"
    ]
  },
  {
    "time": [
      389.778695,
      395.110827
    ],
    "en": [
      "traceroute 1500 1"
    ],
    "ru": [
      "traceroute 1500 1"
    ]
  },
  {
    "time": [
      395.110827,
      400.125203
    ],
    "en": [
      "now you can see it goes via r2"
    ],
    "ru": [
      "теперь вы можете видеть, что он идет через r2"
    ]
  },
  {
    "time": [
      400.125203,
      402.120283
    ],
    "en": [
      "at 10 10 10 3"
    ],
    "ru": [
      "в 10 10 10 3"
    ]
  },
  {
    "time": [
      402.120283,
      406.143366
    ],
    "en": [
      "now r1 is in the process of booting up"
    ],
    "ru": [
      "теперь r1 загружается"
    ]
  },
  {
    "time": [
      406.143366,
      410.408537
    ],
    "en": [
      "however when it finishes it should take over again as the active router"
    ],
    "ru": [
      "однако по завершении он должен снова стать активным маршрутизатором."
    ]
  },
  {
    "time": [
      410.408537,
      412.345271
    ],
    "en": [
      "since we configure preemption"
    ],
    "ru": [
      "так как мы настраиваем приоритетное прерывание"
    ]
  },
  {
    "time": [
      412.345271,
      417.234976
    ],
    "en": [
      "I'll just wait for another 10 seconds or so and then go check"
    ],
    "ru": [
      "Я просто подожду еще секунд 10 или около того, а затем пойду проверю"
    ]
  },
  {
    "time": [
      417.234976,
      427.48543
    ],
    "en": [
      "okay hopefully that's enough time"
    ],
    "ru": [
      "хорошо, надеюсь, достаточно времени"
    ]
  },
  {
    "time": [
      427.48543,
      429.66416
    ],
    "en": [
      "let's go on our one in check"
    ],
    "ru": [
      "давай продолжим нашу проверку"
    ]
  },
  {
    "time": [
      429.66416,
      435.678649
    ],
    "en": [
      "an able show standby"
    ],
    "ru": [
      "способное шоу в режиме ожидания"
    ]
  },
  {
    "time": [
      435.678649,
      440.706858
    ],
    "en": [
      "there are one is the active router once again"
    ],
    "ru": [
      "есть один активный маршрутизатор еще раз"
    ]
  },
  {
    "time": [
      440.706858,
      444.180101
    ],
    "en": [
      "let's trace route one last time from pc1"
    ],
    "ru": [
      "давайте проследим маршрут в последний раз от pc1"
    ]
  },
  {
    "time": [
      444.180101,
      449.44738
    ],
    "en": [
      "trace route 1500 1"
    ],
    "ru": [
      "проследить маршрут 1500 1"
    ]
  },
  {
    "time": [
      449.44738,
      455.460169
    ],
    "en": [
      "now it's going via our one again not our two"
    ],
    "ru": [
      "Теперь он снова проходит через наш, а не через два"
    ]
  },
  {
    "time": [
      455.460169,
      464.961733
    ],
    "en": [
      "so the configuration for VLAN 10 is complete"
    ],
    "ru": [
      "Итак, настройка для VLAN 10 завершена"
    ]
  },
  {
    "time": [
      464.961733,
      469.45484
    ],
    "en": [
      "now let's configure the opposite set up for VLAN 20"
    ],
    "ru": [
      "Теперь давайте настроим противоположную настройку для VLAN 20"
    ]
  },
  {
    "time": [
      469.45484,
      474.754545
    ],
    "en": [
      "r2 should be the active router with our one as backup or standby"
    ],
    "ru": [
      "r2 должен быть активным маршрутизатором, а наш - резервным или резервным"
    ]
  },
  {
    "time": [
      474.754545,
      478.679466
    ],
    "en": [
      "I'll configure the active r2 first"
    ],
    "ru": [
      "Я сначала настрою активный r2"
    ]
  },
  {
    "time": [
      478.679466,
      483.188083
    ],
    "en": [
      "interface g0 one"
    ],
    "ru": [
      "интерфейс g0 one"
    ]
  },
  {
    "time": [
      483.188083,
      485.94221
    ],
    "en": [
      "standby version to"
    ],
    "ru": [
      "резервная версия для"
    ]
  },
  {
    "time": [
      485.94221,
      491.857312
    ],
    "en": [
      "standby 20 I P 10 20 21"
    ],
    "ru": [
      "в режиме ожидания 20 I P 10 20 21"
    ]
  },
  {
    "time": [
      491.857312,
      494.355475
    ],
    "en": [
      "standby 20 preempt"
    ],
    "ru": [
      "режим ожидания 20 вытесн."
    ]
  },
  {
    "time": [
      494.355475,
      499.432686
    ],
    "en": [
      "just to make things different I won't increase the priority on the active"
    ],
    "ru": [
      "просто чтобы все было по-другому, я не буду увеличивать приоритет активных"
    ]
  },
  {
    "time": [
      499.432686,
      502.715112
    ],
    "en": [
      "let's decrease the priority on the standby instead"
    ],
    "ru": [
      "давайте вместо этого уменьшим приоритет в режиме ожидания"
    ]
  },
  {
    "time": [
      502.715112,
      505.220509
    ],
    "en": [
      "so that's all for our two"
    ],
    "ru": [
      "так что это все для наших двоих"
    ]
  },
  {
    "time": [
      505.220509,
      507.505611
    ],
    "en": [
      "let's go to our one"
    ],
    "ru": [
      "пойдем к нашему"
    ]
  },
  {
    "time": [
      507.505611,
      510.472912
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
      510.472912,
      512.959284
    ],
    "en": [
      "interface g0 to"
    ],
    "ru": [
      "интерфейс g0 к"
    ]
  },
  {
    "time": [
      512.959284,
      516.95747
    ],
    "en": [
      "standby version to"
    ],
    "ru": [
      "резервная версия для"
    ]
  },
  {
    "time": [
      516.95747,
      521.479828
    ],
    "en": [
      "standby 20 I P 10 20 21"
    ],
    "ru": [
      "в режиме ожидания 20 I P 10 20 21"
    ]
  },
  {
    "time": [
      521.479828,
      524.483978
    ],
    "en": [
      "standby 20"
    ],
    "ru": [
      "в режиме ожидания 20"
    ]
  },
  {
    "time": [
      524.483978,
      525.474998
    ],
    "en": [
      "priority 90"
    ],
    "ru": [
      "приоритет 90"
    ]
  },
  {
    "time": [
      525.474998,
      529.120985
    ],
    "en": [
      "okay that's all"
    ],
    "ru": [
      "хорошо это все"
    ]
  },
  {
    "time": [
      529.120985,
      531.433546
    ],
    "en": [
      "give them some time to talk with each other"
    ],
    "ru": [
      "дайте им время поговорить друг с другом"
    ]
  },
  {
    "time": [
      531.433546,
      531.433546
    ],
    "en": [
      "and figure things out but soon r2 should become the active and r1 the stand by for VLAN 20 let's try a ping from PC three first I'll try to ping the virtual router to make sure ping 10 20 21 okay we can reach it now let's try to ping out to the external server ping 1500 1 okay it's reachable so now let's check the path it's taking traceroute 1501 as you can see it's going via r2 at 10.20 22 let's test the failover again I'll reload our to end reload okay let's give our one a few seconds to take its role as active for VLAN 20 ok let's try let's hop back on PC 3 and traceroute again traceroute 1500 1 great the failover worked and the ping is now going via r1 at 10.20 23 this time let's wait another 10 seconds or so for r2 to come back online and take over once again as the active router okay hopefully that's enough time let's give that traceroute one more try here on PC three traceroute 1500 one alright now it's back to using R 2 as the gateway in this lab we configured HS RP and also showed how you can configure load balancing by configuring different active routers for different VLANs that's all for this lab thank you for watching I hope this lab and video have been helpful for you please subscribe for future labs like this which will be released weekly if you have requests for any specific labs let me know in the comments section if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и разберемся, но вскоре r2 должен стать активным, а r1 - резервным для VLAN 20, давайте сначала попробуем пинговать с ПК три Я попробую пинговать виртуальный маршрутизатор, чтобы убедиться, что пинг 10 20 21 хорошо, мы можем добраться до него сейчас давайте попробуйте выполнить ping на внешний сервер ping 1500 1 хорошо, он доступен, так что теперь давайте проверим путь, по которому он проходит traceroute 1501, поскольку вы можете видеть, что он проходит через r2 в 10.20 22 давайте снова протестируем переключение при отказе Я перезагружаю наш, чтобы завершить перезагрузку хорошо давайте дайте нашему одному несколько секунд, чтобы он стал активным для VLAN 20, хорошо, давайте попробуем, давайте вернемся на ПК 3 и снова проведем трассировку traceroute 1500 1 отлично, отработка отказа сработала, и теперь пинг проходит через r1 в 10.20 23, на этот раз давайте подождем еще 10 секунд или около того, чтобы r2 вернулся в сеть и снова взял на себя управление, поскольку активный маршрутизатор хорошо, надеюсь, этого достаточно, давайте дадим этому traceroute еще одну попытку здесь, на ПК три traceroute 1500 один хорошо, теперь он вернулся к использованию R 2 в качестве шлюза в в этой лаборатории мы настроили HS RP, а также sh узнал, как вы можете настроить балансировку нагрузки, настроив разные активные маршрутизаторы для разных VLAN, и все это для этой лабораторной работы. Спасибо за просмотр. Я надеюсь, что эта лабораторная работа и видео были полезны для вас. Подпишитесь на будущие лабораторные работы, подобные этой, которые будут выпускаться еженедельно запросы на какие-либо конкретные лаборатории дайте мне знать в разделе комментариев, если вы хотите поддержать мой канал Я принимаю пожертвования биткойнами и эфириумом по адресам в описании Я также храбрый проверенный издатель и принимаю пожертвования биткойнов или токенов основного внимания в смелом браузере"
    ]
  }
]