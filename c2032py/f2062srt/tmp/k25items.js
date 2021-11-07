let objs = [
  {
    "time": [
      0.0,
      4.610062
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
      4.610062,
      7.604395
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
      7.604395,
      14.744624
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
      14.744624,
      19.015749
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
      19.015749,
      24.722061
    ],
    "en": [
      "this lab takes the same topology you configured in the previous lab"
    ],
    "ru": [
      "эта лабораторная работа использует ту же топологию, которую вы настроили в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      24.722061,
      27.831874
    ],
    "en": [
      "and asks you to troubleshoot and fix some errors"
    ],
    "ru": [
      "и просит вас устранить неполадки и исправить некоторые ошибки"
    ]
  },
  {
    "time": [
      27.831874,
      31.584936
    ],
    "en": [
      "I have made one miss configuration plus switch"
    ],
    "ru": [
      "Я сделал одну конфигурацию пропуска плюс переключатель"
    ]
  },
  {
    "time": [
      31.584936,
      33.758331
    ],
    "en": [
      "that is affecting connectivity in this network"
    ],
    "ru": [
      "что влияет на возможность подключения в этой сети"
    ]
  },
  {
    "time": [
      33.758331,
      37.498581
    ],
    "en": [
      "find the errors and fix them to restore connectivity"
    ],
    "ru": [
      "найти ошибки и исправить их, чтобы восстановить подключение"
    ]
  },
  {
    "time": [
      37.498581,
      44.652247
    ],
    "en": [
      "in troubleshooting it's important to always confirm the problem and know the exact extent of what's wrong"
    ],
    "ru": [
      "при устранении неполадок важно всегда подтверждать проблему и точно знать, что именно не так."
    ]
  },
  {
    "time": [
      44.652247,
      48.523601
    ],
    "en": [
      "so let's try to ping other pcs within the same VLAN"
    ],
    "ru": [
      "так что давайте попробуем пинговать другие компьютеры в той же VLAN"
    ]
  },
  {
    "time": [
      48.523601,
      52.05383
    ],
    "en": [
      "let's ping from pc1 first"
    ],
    "ru": [
      "давайте сначала пингуем с pc1"
    ]
  },
  {
    "time": [
      52.05383,
      61.46308
    ],
    "en": [
      "I'll ping PC 2 ping 10.0.0.2 okay it works"
    ],
    "ru": [
      "Я пингую комп 2 пинг 10.0.0.2 нормально работает"
    ]
  },
  {
    "time": [
      61.46308,
      62.595934
    ],
    "en": [
      "that's good to know"
    ],
    "ru": [
      "это хорошо знать"
    ]
  },
  {
    "time": [
      62.595934,
      67.986954
    ],
    "en": [
      "now how about PC 5 ping 10.0.0.5"
    ],
    "ru": [
      "а теперь как насчет ПК 5 пинг 10.0.0.5"
    ]
  },
  {
    "time": [
      67.986954,
      73.556829
    ],
    "en": [
      "doesn't work"
    ],
    "ru": [
      "не работает"
    ]
  },
  {
    "time": [
      73.556829,
      76.876329
    ],
    "en": [
      "ok now how about in VLAN 20"
    ],
    "ru": [
      "хорошо, а как насчет VLAN 20"
    ]
  },
  {
    "time": [
      76.876329,
      90.28489
    ],
    "en": [
      "let's ping from PC 8 10 PC 9 at 10.0.0.9 doesn't work"
    ],
    "ru": [
      "пинговать с ПК 8 10 ПК 9 на 10.0.0.9 не работает"
    ]
  },
  {
    "time": [
      90.28489,
      104.433681
    ],
    "en": [
      "now VLAN 30 let's ping from PC 6 to PC 7 ping 10.0.0.7 ok it doesn't work"
    ],
    "ru": [
      "теперь VLAN 30 давайте пинговать с ПК 6 на ПК 7 пинг 10.0.0.7 нормально, это не работает"
    ]
  },
  {
    "time": [
      104.433681,
      106.432869
    ],
    "en": [
      "and finally VLAN 40"
    ],
    "ru": [
      "и наконец VLAN 40"
    ]
  },
  {
    "time": [
      106.432869,
      109.257577
    ],
    "en": [
      "I'll ping from PC 3 to PC 4"
    ],
    "ru": [
      "Я пингую с ПК 3 на ПК 4"
    ]
  },
  {
    "time": [
      109.257577,
      117.650055
    ],
    "en": [
      "ping 10.0.0.4 it doesn't work"
    ],
    "ru": [
      "пинг 10.0.0.4 не работает"
    ]
  },
  {
    "time": [
      117.650055,
      123.599659
    ],
    "en": [
      "okay so pc1 & pc2 can ping each other but otherwise there is no connectivity"
    ],
    "ru": [
      "хорошо, так что pc1 и pc2 могут пинговать друг друга, но в противном случае нет подключения"
    ]
  },
  {
    "time": [
      123.599659,
      132.426158
    ],
    "en": [
      "let's focus on one problem at a time and solve it and perhaps solving that problem will fix the other problems as well"
    ],
    "ru": [
      "давайте сосредоточимся на одной проблеме за раз и решим ее, и, возможно, решение этой проблемы устранит и другие проблемы"
    ]
  },
  {
    "time": [
      132.426158,
      136.176324
    ],
    "en": [
      "let's focus on the problem of connectivity within VLAN 10"
    ],
    "ru": [
      "давайте сосредоточимся на проблеме подключения внутри VLAN 10"
    ]
  },
  {
    "time": [
      136.176324,
      139.780678
    ],
    "en": [
      "let's go on switch 1 and investigate"
    ],
    "ru": [
      "давай перейдем на переключатель 1 и исследуем"
    ]
  },
  {
    "time": [
      139.780678,
      145.711574
    ],
    "en": [
      "enable let's see if there are problems with our VLANs"
    ],
    "ru": [
      "включить посмотрим, есть ли проблемы с нашими VLAN"
    ]
  },
  {
    "time": [
      145.711574,
      147.722699
    ],
    "en": [
      "show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      147.722699,
      153.268615
    ],
    "en": [
      "looks like we have the VLANs we want and the correct interfaces are assigned to them"
    ],
    "ru": [
      "похоже, у нас есть нужные VLAN и им назначены правильные интерфейсы"
    ]
  },
  {
    "time": [
      153.268615,
      158.60099
    ],
    "en": [
      "however if you look carefully you can spot something wrong here"
    ],
    "ru": [
      "однако, если вы посмотрите внимательно, вы можете заметить здесь что-то не так"
    ]
  },
  {
    "time": [
      158.60099,
      163.863073
    ],
    "en": [
      "gig 0 1 is shown under the default VLAN VLAN 1"
    ],
    "ru": [
      "gig 0 1 отображается под VLAN по умолчанию VLAN 1"
    ]
  },
  {
    "time": [
      163.863073,
      166.344573
    ],
    "en": [
      "it's supposed to be a trunk link"
    ],
    "ru": [
      "это должно быть магистральное соединение"
    ]
  },
  {
    "time": [
      166.344573,
      168.668844
    ],
    "en": [
      "show interfaces trunk"
    ],
    "ru": [
      "показать магистраль интерфейсов"
    ]
  },
  {
    "time": [
      168.668844,
      171.991719
    ],
    "en": [
      "indeed we have no trunk configured"
    ],
    "ru": [
      "действительно, у нас нет настроенного ствола"
    ]
  },
  {
    "time": [
      171.991719,
      179.748073
    ],
    "en": [
      "show run gig 0 1 is configured in access mode"
    ],
    "ru": [
      "show run gig 0 1 настроен в режиме доступа"
    ]
  },
  {
    "time": [
      179.748073,
      180.792323
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
      180.792323,
      190.238635
    ],
    "en": [
      "conf t interface G 0 1 switch port mode trunk do show interfaces trunk"
    ],
    "ru": [
      "conf t interface G 0 1 switch port mode trunk do show interfaces trunk"
    ]
  },
  {
    "time": [
      190.238635,
      192.449072
    ],
    "en": [
      "ok now our trunk is working"
    ],
    "ru": [
      "хорошо, теперь наш багажник работает"
    ]
  },
  {
    "time": [
      192.449072,
      196.806072
    ],
    "en": [
      "can you ping from pc1 to pc2"
    ],
    "ru": [
      "Можете ли вы пинговать с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      196.806072,
      206.331197
    ],
    "en": [
      "ping 10.0.0.5 no we still can't"
    ],
    "ru": [
      "пинг 10.0.0.5 нет, мы все еще не можем"
    ]
  },
  {
    "time": [
      206.331197,
      210.020154
    ],
    "en": [
      "let's move on to switch 2"
    ],
    "ru": [
      "давай перейдем к переключателю 2"
    ]
  },
  {
    "time": [
      210.020154,
      214.213404
    ],
    "en": [
      "enable let's check the VLANs here"
    ],
    "ru": [
      "включить давайте проверим VLAN здесь"
    ]
  },
  {
    "time": [
      214.213404,
      216.838945
    ],
    "en": [
      "show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      216.838945,
      222.694966
    ],
    "en": [
      "so we don't see our gig 0 1 & gig 0 2 interfaces"
    ],
    "ru": [
      "поэтому мы не видим наши интерфейсы gig 0 1 и gig 0 2"
    ]
  },
  {
    "time": [
      222.694966,
      223.735966
    ],
    "en": [
      "which is good"
    ],
    "ru": [
      "и это хорошо"
    ]
  },
  {
    "time": [
      223.735966,
      225.456341
    ],
    "en": [
      "because there trunks"
    ],
    "ru": [
      "потому что есть чемоданы"
    ]
  },
  {
    "time": [
      225.456341,
      226.640278
    ],
    "en": [
      "but there is a problem here"
    ],
    "ru": [
      "но здесь есть проблема"
    ]
  },
  {
    "time": [
      226.640278,
      232.439486
    ],
    "en": [
      "this problem actually isn't relevant to VLAN 10 connectivity but it will solve another problem"
    ],
    "ru": [
      "эта проблема на самом деле не имеет отношения к подключению к VLAN 10, но решит другую проблему."
    ]
  },
  {
    "time": [
      232.439486,
      237.696403
    ],
    "en": [
      "F 0 1 and F 0 2 are both supposed to be in VLAN 40"
    ],
    "ru": [
      "F 0 1 и F 0 2 должны быть в VLAN 40"
    ]
  },
  {
    "time": [
      237.696403,
      246.394444
    ],
    "en": [
      "but F 0 2 is in VLAN 50 let's move f02 to the correct VLAN and see if that solves the problem of VLAN 40 connectivity"
    ],
    "ru": [
      "но F 0 2 находится в VLAN 50, давайте переместим f02 в правильную VLAN и посмотрим, решит ли это проблему подключения к VLAN 40"
    ]
  },
  {
    "time": [
      246.394444,
      253.70136
    ],
    "en": [
      "conf t 50 interface f0 2 switch port access VLAN 40"
    ],
    "ru": [
      "conf t 50 interface f0 2 switch port access VLAN 40"
    ]
  },
  {
    "time": [
      253.70136,
      259.137506
    ],
    "en": [
      "exit also let's delete VLAN 50"
    ],
    "ru": [
      "выходим и удаляем VLAN 50"
    ]
  },
  {
    "time": [
      259.137506,
      264.352839
    ],
    "en": [
      "no VLAN 50 do show VLAN brief"
    ],
    "ru": [
      "нет VLAN 50 не показывать краткую информацию о VLAN"
    ]
  },
  {
    "time": [
      264.352839,
      267.304964
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
      267.304964,
      271.083151
    ],
    "en": [
      "let's see if that solved our VLAN 40 connectivity problem"
    ],
    "ru": [
      "посмотрим, решило ли это нашу проблему подключения к VLAN 40"
    ]
  },
  {
    "time": [
      271.083151,
      281.725984
    ],
    "en": [
      "I'll ping from PC 3 to pc 4 ping 10.0.0.4"
    ],
    "ru": [
      "Я пингую с ПК 3 на ПК 4 пинг 10.0.0.4"
    ]
  },
  {
    "time": [
      281.725984,
      284.915422
    ],
    "en": [
      "ok it works now"
    ],
    "ru": [
      "хорошо, теперь работает"
    ]
  },
  {
    "time": [
      284.915422,
      287.579734
    ],
    "en": [
      "that's not the problem we were focusing on"
    ],
    "ru": [
      "это не та проблема, на которой мы сосредоточились"
    ]
  },
  {
    "time": [
      287.579734,
      288.887609
    ],
    "en": [
      "but we solved it"
    ],
    "ru": [
      "но мы решили это"
    ]
  },
  {
    "time": [
      288.887609,
      291.219213
    ],
    "en": [
      "let's go on to switch 3 now"
    ],
    "ru": [
      "давай перейдем к переключателю 3 сейчас"
    ]
  },
  {
    "time": [
      291.219213,
      296.623088
    ],
    "en": [
      "enable show VLAN brief"
    ],
    "ru": [
      "включить показать краткую информацию о VLAN"
    ]
  },
  {
    "time": [
      296.623088,
      300.697838
    ],
    "en": [
      "ok I think the problem here is pretty clear"
    ],
    "ru": [
      "хорошо, я думаю, проблема здесь довольно ясна"
    ]
  },
  {
    "time": [
      300.697838,
      303.534588
    ],
    "en": [
      "VLANs 10 20 and 30 don't exist"
    ],
    "ru": [
      "VLAN 10, 20 и 30 не существуют"
    ]
  },
  {
    "time": [
      303.534588,
      313.999046
    ],
    "en": [
      "show run the interfaces are assigned to the correct VLANs but the VLANs must have been deleted afterward"
    ],
    "ru": [
      "show run интерфейсы назначены правильным VLAN, но VLAN должны были быть впоследствии удалены"
    ]
  },
  {
    "time": [
      313.999046,
      316.035588
    ],
    "en": [
      "let's create the VLANs again"
    ],
    "ru": [
      "давайте снова создадим VLAN"
    ]
  },
  {
    "time": [
      316.035588,
      319.207796
    ],
    "en": [
      "conf t VLAN 10"
    ],
    "ru": [
      "conf t VLAN 10"
    ]
  },
  {
    "time": [
      319.207796,
      323.436796
    ],
    "en": [
      "we can't create VLANs because we are a VTP client"
    ],
    "ru": [
      "мы не можем создавать VLAN, потому что мы являемся VTP-клиентом"
    ]
  },
  {
    "time": [
      323.436796,
      326.947858
    ],
    "en": [
      "so that suggests the real problem is with VTP"
    ],
    "ru": [
      "Это говорит о том, что настоящая проблема связана с VTP."
    ]
  },
  {
    "time": [
      326.947858,
      328.377274
    ],
    "en": [
      "let's check"
    ],
    "ru": [
      "Давайте проверим"
    ]
  },
  {
    "time": [
      328.377274,
      331.747878
    ],
    "en": [
      "do show VTP status"
    ],
    "ru": [
      "показывать статус VTP"
    ]
  },
  {
    "time": [
      331.747878,
      338.153336
    ],
    "en": [
      "there's a problem switch 3 is in VTP domain ccnp"
    ],
    "ru": [
      "есть проблема, переключатель 3 находится в домене VTP ccnp"
    ]
  },
  {
    "time": [
      338.153336,
      341.164065
    ],
    "en": [
      "it's supposed to be CCNA"
    ],
    "ru": [
      "это должно быть CCNA"
    ]
  },
  {
    "time": [
      341.164065,
      345.703294
    ],
    "en": [
      "let's change that VTP domain CCNA"
    ],
    "ru": [
      "давайте изменим этот домен VTP CCNA"
    ]
  },
  {
    "time": [
      345.703294,
      349.23596
    ],
    "en": [
      "do show VTP status"
    ],
    "ru": [
      "показывать статус VTP"
    ]
  },
  {
    "time": [
      349.23596,
      353.70696
    ],
    "en": [
      "ok now we're back in the correct domain"
    ],
    "ru": [
      "хорошо, теперь мы вернулись в правильный домен"
    ]
  },
  {
    "time": [
      353.70696,
      355.74019
    ],
    "en": [
      "let's check if our VLANs are back"
    ],
    "ru": [
      "давайте проверим, вернулись ли наши VLAN"
    ]
  },
  {
    "time": [
      355.74019,
      358.639835
    ],
    "en": [
      "do show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      358.639835,
      362.828565
    ],
    "en": [
      "there they are"
    ],
    "ru": [
      "там они"
    ]
  },
  {
    "time": [
      362.828565,
      365.84119
    ],
    "en": [
      "ok so that probably solved the remaining problems"
    ],
    "ru": [
      "хорошо, так что, вероятно, решены оставшиеся проблемы"
    ]
  },
  {
    "time": [
      365.84119,
      368.16544
    ],
    "en": [
      "let's try to ping within the same VLANs again"
    ],
    "ru": [
      "давайте снова попробуем пинговать в тех же VLAN"
    ]
  },
  {
    "time": [
      368.16544,
      381.00546
    ],
    "en": [
      "I'll ping from pc1 to pc5 10.0.0.5 okay it works this time"
    ],
    "ru": [
      "Я пингую с pc1 на pc5 10.0.0.5, на этот раз все работает"
    ]
  },
  {
    "time": [
      381.00546,
      386.498855
    ],
    "en": [
      "now let's try in VLAN 20 I'll ping from PC 8 to PC 9"
    ],
    "ru": [
      "теперь попробуем в VLAN 20 пингую с ПК 8 на ПК 9"
    ]
  },
  {
    "time": [
      386.498855,
      395.557042
    ],
    "en": [
      "ping 10.0.0.9 okay no problems there"
    ],
    "ru": [
      "пинг 10.0.0.9 нормально никаких проблем нет"
    ]
  },
  {
    "time": [
      395.557042,
      410.962084
    ],
    "en": [
      "now and finally VLAN 30 I'll ping from PC 6 to PC 7 pin 10.0.0.7 ok now it works"
    ],
    "ru": [
      "теперь и наконец VLAN 30 Я пингую с ПК 6 на ПК 7 pin 10.0.0.7 хорошо, теперь он работает"
    ]
  },
  {
    "time": [
      410.962084,
      414.62725
    ],
    "en": [
      "we have fixed the errors and achieved connectivity in the network"
    ],
    "ru": [
      "мы исправили ошибки и добились подключения к сети"
    ]
  },
  {
    "time": [
      414.62725,
      416.223104
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
      416.223104,
      423.266583
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
      423.266583,
      427.869375
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
      427.869375,
      432.607166
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
      432.607166,
      439.499478
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
      439.499478,
      447.562228
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
      447.562228,
      447.562228
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
      447.562228,
      447.562228
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
      447.562228,
      447.562228
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]