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
      6.0
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
      6.0,
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
      14.0
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
      14.0,
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
      21.0
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
      21.0,
      23.0
    ],
    "en": [
      "lab we will troubleshoot inter VLAN"
    ],
    "ru": [
      "Лаборатория мы будем устранять неполадки между VLAN"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "routing in these 2 small networks which"
    ],
    "ru": [
      "маршрутизация в этих 2 небольших сетях, которые"
    ]
  },
  {
    "time": [
      25.0,
      27.0
    ],
    "en": [
      "we just configured in the previous lab I"
    ],
    "ru": [
      "мы только что настроили в предыдущей лабораторной работе I"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "have made one miss configuration on each"
    ],
    "ru": [
      "сделали одну конфигурацию промаха на каждом"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "networking device see if you can find"
    ],
    "ru": [
      "сетевое устройство, посмотри, сможешь ли ты найти"
    ]
  },
  {
    "time": [
      33.0,
      38.0
    ],
    "en": [
      "and fix the errors first let's test the"
    ],
    "ru": [
      "и сначала исправим ошибки, давайте протестируем"
    ]
  },
  {
    "time": [
      38.0,
      43.0
    ],
    "en": [
      "network of PC one switch 1 and PC 2 I'll"
    ],
    "ru": [
      "сеть ПК один коммутатор 1 и ПК 2 я"
    ]
  },
  {
    "time": [
      43.0,
      47.0
    ],
    "en": [
      "try a ping from PC 1 in VLAN 10 to PC 2"
    ],
    "ru": [
      "попробуйте выполнить эхо-запрос с ПК 1 в VLAN 10 на ПК 2"
    ]
  },
  {
    "time": [
      47.0,
      57.0
    ],
    "en": [
      "in VLAN 20 ping 1002 10"
    ],
    "ru": [
      "в VLAN 20 пинг 1002 10"
    ]
  },
  {
    "time": [
      57.0,
      63.0
    ],
    "en": [
      "it fails let's investigate on switch one"
    ],
    "ru": [
      "это не удается, давайте рассмотрим первый переключатель"
    ]
  },
  {
    "time": [
      63.0,
      69.0
    ],
    "en": [
      "enable show IP interface brief looks"
    ],
    "ru": [
      "включить показывать краткие обзоры IP-интерфейса"
    ]
  },
  {
    "time": [
      69.0,
      71.0
    ],
    "en": [
      "like the VLAN 10 and VLAN 20 interfaces"
    ],
    "ru": [
      "как интерфейсы VLAN 10 и VLAN 20"
    ]
  },
  {
    "time": [
      71.0,
      75.0
    ],
    "en": [
      "have the correct IP addresses configured"
    ],
    "ru": [
      "иметь правильные настроенные IP-адреса"
    ]
  },
  {
    "time": [
      75.0,
      80.0
    ],
    "en": [
      "show VLAN brief here's our problem"
    ],
    "ru": [
      "показать краткое описание VLAN вот наша проблема"
    ]
  },
  {
    "time": [
      80.0,
      83.0
    ],
    "en": [
      "the fastethernet 0/1 interface to which"
    ],
    "ru": [
      "интерфейс fastethernet 0/1, к которому"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "pc one is connected has been placed in"
    ],
    "ru": [
      "компьютер, который подключен, был помещен в"
    ]
  },
  {
    "time": [
      85.0,
      88.0
    ],
    "en": [
      "v-line 11 not VLAN 10"
    ],
    "ru": [
      "v-line 11, а не VLAN 10"
    ]
  },
  {
    "time": [
      88.0,
      92.0
    ],
    "en": [
      "let's put f01 into the correct VLAN and"
    ],
    "ru": [
      "поместим f01 в правильный VLAN и"
    ]
  },
  {
    "time": [
      92.0,
      96.0
    ],
    "en": [
      "see if that solves our issue coffee/tea"
    ],
    "ru": [
      "посмотрим, решит ли это нашу проблему кофе / чай"
    ]
  },
  {
    "time": [
      96.0,
      102.0
    ],
    "en": [
      "interface f01 switch port access VLAN 10"
    ],
    "ru": [
      "интерфейс f01 коммутатор порт доступа VLAN 10"
    ]
  },
  {
    "time": [
      102.0,
      105.0
    ],
    "en": [
      "I'll delete VLAN 11 also since we're not"
    ],
    "ru": [
      "Я также удалю VLAN 11, так как мы не"
    ]
  },
  {
    "time": [
      105.0,
      112.0
    ],
    "en": [
      "using it exit no VLAN 11 do show VLAN"
    ],
    "ru": [
      "с его помощью не выходить из VLAN 11 показывать VLAN"
    ]
  },
  {
    "time": [
      112.0,
      114.0
    ],
    "en": [
      "brief ok"
    ],
    "ru": [
      "кратко хорошо"
    ]
  },
  {
    "time": [
      114.0,
      117.0
    ],
    "en": [
      "our VLAN configuration looks good let's"
    ],
    "ru": [
      "наша конфигурация VLAN выглядит хорошо, давайте"
    ]
  },
  {
    "time": [
      117.0,
      122.0
    ],
    "en": [
      "try that ping from pc1 again ping 1002"
    ],
    "ru": [
      "попробуйте этот пинг с компьютера еще раз пинг 1002"
    ]
  },
  {
    "time": [
      122.0,
      130.0
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
      122.0,
      130.0
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
      130.0,
      132.0
    ],
    "en": [
      "we have fixed the issue on this network"
    ],
    "ru": [
      "мы исправили проблему в этой сети"
    ]
  },
  {
    "time": [
      132.0,
      135.0
    ],
    "en": [
      "now let's test the issue on the next"
    ],
    "ru": [
      "теперь давайте проверим проблему на следующем"
    ]
  },
  {
    "time": [
      135.0,
      139.0
    ],
    "en": [
      "network I'll try to ping from PC 3 in"
    ],
    "ru": [
      "сеть попробую пинговать с ПК 3 в"
    ]
  },
  {
    "time": [
      139.0,
      152.0
    ],
    "en": [
      "VLAN 30 to pc 4 in VLAN 40 ping 1004 10"
    ],
    "ru": [
      "VLAN 30 на ПК 4 в VLAN 40 эхо-запрос 1004 10"
    ]
  },
  {
    "time": [
      152.0,
      156.0
    ],
    "en": [
      "the ping is not successful so let's find"
    ],
    "ru": [
      "пинг не удался, поэтому давайте найдем"
    ]
  },
  {
    "time": [
      156.0,
      158.0
    ],
    "en": [
      "the issues there should be one issue on"
    ],
    "ru": [
      "по вопросам, по которым должен быть один вопрос"
    ]
  },
  {
    "time": [
      158.0,
      161.0
    ],
    "en": [
      "our two and one issue on switch to"
    ],
    "ru": [
      "наши две и одна проблема при переходе на"
    ]
  },
  {
    "time": [
      161.0,
      164.0
    ],
    "en": [
      "according to the lab instructions I'll"
    ],
    "ru": [
      "согласно лабораторным инструкциям я"
    ]
  },
  {
    "time": [
      164.0,
      169.0
    ],
    "en": [
      "investigate on our two first enable"
    ],
    "ru": [
      "исследуйте наши два первых включения"
    ]
  },
  {
    "time": [
      169.0,
      172.0
    ],
    "en": [
      "there could be a few problems here like"
    ],
    "ru": [
      "здесь может быть несколько проблем, например"
    ]
  },
  {
    "time": [
      172.0,
      174.0
    ],
    "en": [
      "incorrect IP addresses or encapsulation"
    ],
    "ru": [
      "неверные IP-адреса или инкапсуляция"
    ]
  },
  {
    "time": [
      174.0,
      176.0
    ],
    "en": [
      "dot1q configurations on the sub"
    ],
    "ru": [
      "конфигурации dot1q на саб"
    ]
  },
  {
    "time": [
      176.0,
      179.0
    ],
    "en": [
      "interfaces I'll use show running config"
    ],
    "ru": [
      "интерфейсы, которые я буду использовать, покажу текущую конфигурацию"
    ]
  },
  {
    "time": [
      179.0,
      186.0
    ],
    "en": [
      "this time so run our interface Gigabit"
    ],
    "ru": [
      "на этот раз так запустим наш интерфейс Gigabit"
    ]
  },
  {
    "time": [
      186.0,
      189.0
    ],
    "en": [
      "Ethernet 0 0 is not shutdown and 2 sub"
    ],
    "ru": [
      "Ethernet 0 0 не выключен и 2 вспомогательных"
    ]
  },
  {
    "time": [
      189.0,
      191.0
    ],
    "en": [
      "interfaces are configured they are"
    ],
    "ru": [
      "интерфейсы настроены они есть"
    ]
  },
  {
    "time": [
      191.0,
      194.0
    ],
    "en": [
      "assigned to the proper VLANs 30 and 40"
    ],
    "ru": [
      "назначены соответствующим VLAN 30 и 40"
    ]
  },
  {
    "time": [
      194.0,
      196.0
    ],
    "en": [
      "however look at the IP address on the"
    ],
    "ru": [
      "однако посмотрите на IP-адрес на"
    ]
  },
  {
    "time": [
      196.0,
      200.0
    ],
    "en": [
      "dot 30 sub-interface the VLAN 30 subnet"
    ],
    "ru": [
      "точка 30 субинтерфейс подсети VLAN 30"
    ]
  },
  {
    "time": [
      200.0,
      206.0
    ],
    "en": [
      "is 10030 / 24 so we should fix that"
    ],
    "ru": [
      "10030/24, поэтому мы должны исправить это"
    ]
  },
  {
    "time": [
      206.0,
      215.0
    ],
    "en": [
      "Koff t interface g0 0.30 IP address 1003"
    ],
    "ru": [
      "Koff t interface g0 0.30 IP-адрес 1003"
    ]
  },
  {
    "time": [
      215.0,
      222.0
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
      215.0,
      222.0
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
      222.0,
      226.0
    ],
    "en": [
      "brief ok now it has the correct IP"
    ],
    "ru": [
      "кратко, хорошо, теперь у него правильный IP"
    ]
  },
  {
    "time": [
      226.0,
      230.0
    ],
    "en": [
      "address so we fixed the issue on r2"
    ],
    "ru": [
      "адрес, поэтому мы исправили проблему на r2"
    ]
  },
  {
    "time": [
      230.0,
      238.0
    ],
    "en": [
      "let's go to switch to next enable so the"
    ],
    "ru": [
      "давайте перейдем к следующему включению, чтобы"
    ]
  },
  {
    "time": [
      238.0,
      240.0
    ],
    "en": [
      "correct configuration on switch 2 should"
    ],
    "ru": [
      "правильная конфигурация переключателя 2 должна"
    ]
  },
  {
    "time": [
      240.0,
      244.0
    ],
    "en": [
      "be f01 connected to pc 3 in VLAN 30 and"
    ],
    "ru": [
      "быть подключенным f01 к ПК 3 в VLAN 30 и"
    ]
  },
  {
    "time": [
      244.0,
      248.0
    ],
    "en": [
      "f0 to connected to pc 4 in VLAN 40 and"
    ],
    "ru": [
      "f0 для подключения к ПК 4 в VLAN 40 и"
    ]
  },
  {
    "time": [
      248.0,
      252.0
    ],
    "en": [
      "g0 one connected to r2 should be a trunk"
    ],
    "ru": [
      "g0 один, подключенный к r2, должен быть стволом"
    ]
  },
  {
    "time": [
      252.0,
      259.0
    ],
    "en": [
      "let's check show VLAN brief fast"
    ],
    "ru": [
      "давайте быстро проверим показать VLAN кратко"
    ]
  },
  {
    "time": [
      259.0,
      262.0
    ],
    "en": [
      "ethernet 0 1 & 0 2 are in the correct"
    ],
    "ru": [
      "ethernet 0 1 и 0 2 находятся в правильном"
    ]
  },
  {
    "time": [
      262.0,
      267.0
    ],
    "en": [
      "VLANs show interfaces trunk however"
    ],
    "ru": [
      "Однако сети VLAN показывают магистраль интерфейсов"
    ]
  },
  {
    "time": [
      267.0,
      269.0
    ],
    "en": [
      "nothing appears with the show interfaces"
    ],
    "ru": [
      "ничего не появляется с интерфейсами шоу"
    ]
  },
  {
    "time": [
      269.0,
      275.0
    ],
    "en": [
      "trunk command show run"
    ],
    "ru": [
      "команда ствола показать запустить"
    ]
  },
  {
    "time": [
      275.0,
      278.0
    ],
    "en": [
      "there's our problem Gigabit Ethernet 0 1"
    ],
    "ru": [
      "вот наша проблема Gigabit Ethernet 0 1"
    ]
  },
  {
    "time": [
      278.0,
      282.0
    ],
    "en": [
      "is configured as an access port actually"
    ],
    "ru": [
      "настроен как порт доступа на самом деле"
    ]
  },
  {
    "time": [
      282.0,
      285.0
    ],
    "en": [
      "in the previous show VLAN brief command"
    ],
    "ru": [
      "в предыдущей краткой команде show VLAN"
    ]
  },
  {
    "time": [
      285.0,
      289.0
    ],
    "en": [
      "you could see it in VLAN 1 that means it"
    ],
    "ru": [
      "вы могли видеть это в VLAN 1, что означает, что это"
    ]
  },
  {
    "time": [
      289.0,
      291.0
    ],
    "en": [
      "won't pass data from either VLAN 30 or"
    ],
    "ru": [
      "не будет передавать данные ни из VLAN 30, ни из"
    ]
  },
  {
    "time": [
      291.0,
      292.0
    ],
    "en": [
      "VLAN 40"
    ],
    "ru": [
      "VLAN 40"
    ]
  },
  {
    "time": [
      292.0,
      296.0
    ],
    "en": [
      "let's properly configure it as a trunk"
    ],
    "ru": [
      "давайте правильно настроим его как транк"
    ]
  },
  {
    "time": [
      296.0,
      302.0
    ],
    "en": [
      "compte interface g0 1 switch port mode"
    ],
    "ru": [
      "compte interface g0 1 режим порта коммутатора"
    ]
  },
  {
    "time": [
      302.0,
      309.0
    ],
    "en": [
      "trunk do show interfaces trunk ok now we"
    ],
    "ru": [
      "ствол показать интерфейсы ствол хорошо, теперь мы"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "can see the gig 0 1 interface is a trunk"
    ],
    "ru": [
      "видно, что интерфейс гиг 0 1 - это ствол"
    ]
  },
  {
    "time": [
      311.0,
      313.0
    ],
    "en": [
      "and let's check that VLAN configuration"
    ],
    "ru": [
      "и давайте проверим эту конфигурацию VLAN"
    ]
  },
  {
    "time": [
      313.0,
      319.0
    ],
    "en": [
      "once more do show VLAN brief it is also"
    ],
    "ru": [
      "еще раз покажите краткое описание VLAN, это также"
    ]
  },
  {
    "time": [
      319.0,
      324.0
    ],
    "en": [
      "no longer listed in VLAN 1 so our inter"
    ],
    "ru": [
      "больше не указана в VLAN 1, поэтому наш интер"
    ]
  },
  {
    "time": [
      324.0,
      326.0
    ],
    "en": [
      "VLAN routing in this network should be"
    ],
    "ru": [
      "Маршрутизация VLAN в этой сети должна быть"
    ]
  },
  {
    "time": [
      326.0,
      329.0
    ],
    "en": [
      "properly configured let's try that ping"
    ],
    "ru": [
      "правильно настроен давайте попробуем этот пинг"
    ]
  },
  {
    "time": [
      329.0,
      336.0
    ],
    "en": [
      "again once more from PC 3 to PC for ping"
    ],
    "ru": [
      "еще раз еще раз с ПК 3 на ПК на пинг"
    ]
  },
  {
    "time": [
      336.0,
      345.0
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
      336.0,
      345.0
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
      345.0,
      348.0
    ],
    "en": [
      "okay this time the ping works"
    ],
    "ru": [
      "это все для этой лаборатории, спасибо за"
    ]
  },
  {
    "time": [
      348.0,
      350.0
    ],
    "en": [
      "we have successfully fixed the problems"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      350.0,
      357.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      357.0,
      359.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      359.0,
      361.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "выпускается еженедельно, если у вас есть запросы на"
    ]
  },
  {
    "time": [
      361.0,
      364.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "любые конкретные лаборатории дайте мне знать в"
    ]
  },
  {
    "time": [
      364.0,
      367.0
    ],
    "en": [
      "released weekly if you have requests for"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      367.0,
      369.0
    ],
    "en": [
      "any specific labs let me know in the"
    ],
    "ru": [
      "мой канал я принимаю биткойны и"
    ]
  },
  {
    "time": [
      369.0,
      372.0
    ],
    "en": [
      "comments section if you want to support"
    ],
    "ru": [
      "пожертвования эфириума через адреса в"
    ]
  },
  {
    "time": [
      372.0,
      374.0
    ],
    "en": [
      "my channel I accept the Bitcoin and"
    ],
    "ru": [
      "описание я тоже отличный"
    ]
  },
  {
    "time": [
      374.0,
      376.0
    ],
    "en": [
      "aetherium donations via the addresses in"
    ],
    "ru": [
      "проверенный издатель и принять bat или"
    ]
  },
  {
    "time": [
      376.0,
      379.0
    ],
    "en": [
      "the description I am also a great"
    ],
    "ru": [
      "основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      379.0,
      382.0
    ],
    "en": [
      "verified publisher and accept bat or"
    ],
    "ru": [
      "смелый браузер"
    ]
  },
  {
    "time": [
      382.0,
      385.0
    ],
    "en": [
      "basic attention token donations in the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      385.0,
      385.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      ""
    ]
  }
]