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
      7.0
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
      7.0,
      9.0
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
      9.0,
      11.0
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
      11.0,
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
      16.0
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
      16.0,
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
      "lab more colorful than usual we will"
    ],
    "ru": [
      "лаборатория более красочная, чем обычно, мы сделаем"
    ]
  },
  {
    "time": [
      23.0,
      26.0
    ],
    "en": [
      "configure VLANs and VTP the VLAN"
    ],
    "ru": [
      "настроить VLAN и VTP в VLAN"
    ]
  },
  {
    "time": [
      26.0,
      30.0
    ],
    "en": [
      "trunking protocol VTP is used to"
    ],
    "ru": [
      "транкинговый протокол VTP используется для"
    ]
  },
  {
    "time": [
      30.0,
      32.0
    ],
    "en": [
      "propagate VLAN configurations among"
    ],
    "ru": [
      "распространять конфигурации VLAN среди"
    ]
  },
  {
    "time": [
      32.0,
      34.0
    ],
    "en": [
      "switches so you can configure the"
    ],
    "ru": [
      "переключатели, чтобы вы могли настроить"
    ]
  },
  {
    "time": [
      34.0,
      37.0
    ],
    "en": [
      "required VLANs on a single switch and"
    ],
    "ru": [
      "необходимые VLAN на одном коммутаторе и"
    ]
  },
  {
    "time": [
      37.0,
      39.0
    ],
    "en": [
      "have it share the configurations with"
    ],
    "ru": [
      "пусть он поделится конфигурациями с"
    ]
  },
  {
    "time": [
      39.0,
      41.0
    ],
    "en": [
      "other switches instead of having to"
    ],
    "ru": [
      "другие переключатели вместо того, чтобы"
    ]
  },
  {
    "time": [
      41.0,
      43.0
    ],
    "en": [
      "configure the same VLANs on every"
    ],
    "ru": [
      "настроить одни и те же сети VLAN на каждом"
    ]
  },
  {
    "time": [
      43.0,
      48.0
    ],
    "en": [
      "individual switch so the first step is"
    ],
    "ru": [
      "индивидуальный переключатель, поэтому первый шаг"
    ]
  },
  {
    "time": [
      48.0,
      50.0
    ],
    "en": [
      "to configure the switch ports connecting"
    ],
    "ru": [
      "настроить подключение портов коммутатора"
    ]
  },
  {
    "time": [
      50.0,
      53.0
    ],
    "en": [
      "switches as trunk ports and disable DTP"
    ],
    "ru": [
      "коммутаторы как транковые порты и отключите DTP"
    ]
  },
  {
    "time": [
      53.0,
      56.0
    ],
    "en": [
      "that's simple enough let's go on switch"
    ],
    "ru": [
      "это достаточно просто, давай переключимся"
    ]
  },
  {
    "time": [
      56.0,
      64.0
    ],
    "en": [
      "one enable compte interface g0 one"
    ],
    "ru": [
      "один включить интерфейс compte g0 один"
    ]
  },
  {
    "time": [
      64.0,
      67.0
    ],
    "en": [
      "switch port mode trunk switch port no"
    ],
    "ru": [
      "порт коммутатора режим магистральный порт коммутатора нет"
    ]
  },
  {
    "time": [
      67.0,
      75.0
    ],
    "en": [
      "negotiate exit now on switch to enable"
    ],
    "ru": [
      "согласовать выход сейчас на переключатель, чтобы включить"
    ]
  },
  {
    "time": [
      75.0,
      81.0
    ],
    "en": [
      "Conti interface range g0 1 to 2 switch"
    ],
    "ru": [
      "Переключатель Conti interface range g0 с 1 на 2"
    ]
  },
  {
    "time": [
      81.0,
      85.0
    ],
    "en": [
      "port mode trunk switch port no negotiate"
    ],
    "ru": [
      "порт режим магистрального коммутатора порт без согласования"
    ]
  },
  {
    "time": [
      85.0,
      93.0
    ],
    "en": [
      "exit finally on switch 3 enable compte"
    ],
    "ru": [
      "выйти, наконец, на переключателе 3 включить compte"
    ]
  },
  {
    "time": [
      93.0,
      97.0
    ],
    "en": [
      "interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейс g0 1 переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      97.0,
      102.0
    ],
    "en": [
      "switch port no negotiate exit okay"
    ],
    "ru": [
      "порт коммутатора без согласования выход в порядке"
    ]
  },
  {
    "time": [
      102.0,
      106.0
    ],
    "en": [
      "that's all for step 1 step 2 is to"
    ],
    "ru": [
      "это все для шага 1, шаг 2 - это"
    ]
  },
  {
    "time": [
      106.0,
      109.0
    ],
    "en": [
      "configure switch 2 as VTP transparent"
    ],
    "ru": [
      "настроить коммутатор 2 как прозрачный VTP"
    ]
  },
  {
    "time": [
      109.0,
      112.0
    ],
    "en": [
      "first let's review the different VTB"
    ],
    "ru": [
      "сначала давайте рассмотрим разные ВТБ"
    ]
  },
  {
    "time": [
      112.0,
      116.0
    ],
    "en": [
      "modes there are 3 VTB modes server"
    ],
    "ru": [
      "режимы есть 3 режима ВТБ сервер"
    ]
  },
  {
    "time": [
      116.0,
      121.0
    ],
    "en": [
      "client and transparent in this lab"
    ],
    "ru": [
      "клиент и прозрачный в этой лаборатории"
    ]
  },
  {
    "time": [
      121.0,
      124.0
    ],
    "en": [
      "switch 1 will be a server and switch 3"
    ],
    "ru": [
      "коммутатор 1 будет сервером, а коммутатор 3"
    ]
  },
  {
    "time": [
      124.0,
      127.0
    ],
    "en": [
      "will be a client switch 2 will be in"
    ],
    "ru": [
      "будет клиентский коммутатор 2 будет в"
    ]
  },
  {
    "time": [
      127.0,
      131.0
    ],
    "en": [
      "transparent mode VTP servers are able to"
    ],
    "ru": [
      "VTP-серверы в прозрачном режиме могут"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "create and delete VLANs"
    ],
    "ru": [
      "создавать и удалять VLAN"
    ]
  },
  {
    "time": [
      133.0,
      135.0
    ],
    "en": [
      "and then share those configurations with"
    ],
    "ru": [
      "а затем поделитесь этими конфигурациями с"
    ]
  },
  {
    "time": [
      135.0,
      138.0
    ],
    "en": [
      "other switches VTP clients cannot create"
    ],
    "ru": [
      "другие коммутаторы клиенты VTP не могут создавать"
    ]
  },
  {
    "time": [
      138.0,
      140.0
    ],
    "en": [
      "or delete VLANs but will rather sink"
    ],
    "ru": [
      "или удалите VLAN, но скорее утонут"
    ]
  },
  {
    "time": [
      140.0,
      143.0
    ],
    "en": [
      "their VLAN configuration with a VTP"
    ],
    "ru": [
      "их конфигурация VLAN с VTP"
    ]
  },
  {
    "time": [
      143.0,
      147.0
    ],
    "en": [
      "server VTP transparent switches will not"
    ],
    "ru": [
      "прозрачные коммутаторы VTP сервера не будут"
    ]
  },
  {
    "time": [
      147.0,
      149.0
    ],
    "en": [
      "sink their VLAN configurations to a"
    ],
    "ru": [
      "довести свои конфигурации VLAN до"
    ]
  },
  {
    "time": [
      149.0,
      153.0
    ],
    "en": [
      "server they will however pass along VTP"
    ],
    "ru": [
      "сервер они, однако, будут проходить через VTP"
    ]
  },
  {
    "time": [
      153.0,
      157.0
    ],
    "en": [
      "messages from VTP servers so in this lab"
    ],
    "ru": [
      "сообщения от серверов VTP, поэтому в этой лабораторной работе"
    ]
  },
  {
    "time": [
      157.0,
      159.0
    ],
    "en": [
      "switch 2 will be in transparent mode and"
    ],
    "ru": [
      "переключатель 2 будет в прозрачном режиме и"
    ]
  },
  {
    "time": [
      159.0,
      164.0
    ],
    "en": [
      "it's between switch 1 and switch 3 it"
    ],
    "ru": [
      "это между переключателем 1 и переключателем 3 это"
    ]
  },
  {
    "time": [
      164.0,
      166.0
    ],
    "en": [
      "won't sink its VLANs to switch 1 but it"
    ],
    "ru": [
      "не потратит свои VLAN на коммутатор 1, но он"
    ]
  },
  {
    "time": [
      166.0,
      169.0
    ],
    "en": [
      "will pass which ones messages to switch"
    ],
    "ru": [
      "будет передавать какие сообщения переключать"
    ]
  },
  {
    "time": [
      169.0,
      174.0
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
      169.0,
      174.0
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
      174.0,
      178.0
    ],
    "en": [
      "VTP mode transparent configure switch to"
    ],
    "ru": [
      "Переключатель прозрачной настройки режима VTP на"
    ]
  },
  {
    "time": [
      178.0,
      182.0
    ],
    "en": [
      "in VTP transparent mode next the VTP"
    ],
    "ru": [
      "в прозрачном режиме VTP рядом с VTP"
    ]
  },
  {
    "time": [
      182.0,
      185.0
    ],
    "en": [
      "domain name as you can see here is CCNA"
    ],
    "ru": [
      "доменное имя, как вы можете видеть здесь, CCNA"
    ]
  },
  {
    "time": [
      185.0,
      191.0
    ],
    "en": [
      "VTP domain CCNA also we are told to"
    ],
    "ru": [
      "VTP домен CCNA также нам сказали"
    ]
  },
  {
    "time": [
      191.0,
      197.0
    ],
    "en": [
      "configure VTP version 2 VTP version -"
    ],
    "ru": [
      "настроить версию VTP 2 Версия VTP -"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "Cisco recommends to avoid using version"
    ],
    "ru": [
      "Cisco рекомендует избегать использования версии"
    ]
  },
  {
    "time": [
      200.0,
      204.0
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
      200.0,
      204.0
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
      204.0,
      210.0
    ],
    "en": [
      "on switch to VLAN 40 named accounting"
    ],
    "ru": [
      "при переключении на VLAN 40 именованный учет"
    ]
  },
  {
    "time": [
      210.0,
      211.0
    ],
    "en": [
      "exit"
    ],
    "ru": [
      "выход"
    ]
  },
  {
    "time": [
      211.0,
      216.0
    ],
    "en": [
      "let's check do show VLAN brief there we"
    ],
    "ru": [
      "давайте проверим, покажем ли там краткое описание VLAN"
    ]
  },
  {
    "time": [
      216.0,
      217.0
    ],
    "en": [
      "go"
    ],
    "ru": [
      "идти"
    ]
  },
  {
    "time": [
      217.0,
      223.0
    ],
    "en": [
      "VLAN 40 named accounting the next step"
    ],
    "ru": [
      "VLAN 40 назвал учет следующим шагом"
    ]
  },
  {
    "time": [
      223.0,
      226.0
    ],
    "en": [
      "is to configure our VTP server switch"
    ],
    "ru": [
      "это настроить наш коммутатор VTP-сервера"
    ]
  },
  {
    "time": [
      226.0,
      235.0
    ],
    "en": [
      "one VTP domain CCNA VTP version 2 VT P"
    ],
    "ru": [
      "один домен VTP CCNA VTP версии 2 VT P"
    ]
  },
  {
    "time": [
      235.0,
      239.0
    ],
    "en": [
      "mode server VT P server is actually the"
    ],
    "ru": [
      "сервер режима VT P сервер на самом деле"
    ]
  },
  {
    "time": [
      239.0,
      243.0
    ],
    "en": [
      "default VTV mode by the way ok now let's"
    ],
    "ru": [
      "режим VTV по умолчанию, кстати, хорошо, теперь давайте"
    ]
  },
  {
    "time": [
      243.0,
      249.0
    ],
    "en": [
      "create VLANs 10 20 and 30 VLAN 10 name"
    ],
    "ru": [
      "создать VLAN 10 20 и 30 VLAN 10 name"
    ]
  },
  {
    "time": [
      249.0,
      258.0
    ],
    "en": [
      "HR VLAN 20 name sales VLAN 30 name"
    ],
    "ru": [
      "HR VLAN 20 имя продажи VLAN 30 имя"
    ]
  },
  {
    "time": [
      258.0,
      263.0
    ],
    "en": [
      "engineering exit"
    ],
    "ru": [
      "инженерный выход"
    ]
  },
  {
    "time": [
      263.0,
      267.0
    ],
    "en": [
      "next let's configure switch 3 as a VTP"
    ],
    "ru": [
      "Далее давайте настроим коммутатор 3 как VTP"
    ]
  },
  {
    "time": [
      267.0,
      269.0
    ],
    "en": [
      "client and it should get all of this"
    ],
    "ru": [
      "клиент, и он должен получить все это"
    ]
  },
  {
    "time": [
      269.0,
      275.0
    ],
    "en": [
      "configuration from switch 1 VT P mode"
    ],
    "ru": [
      "конфигурация с переключателя 1 Режим VT P"
    ]
  },
  {
    "time": [
      275.0,
      281.0
    ],
    "en": [
      "client do you show VT P status"
    ],
    "ru": [
      "клиент вы показываете статус VT P"
    ]
  },
  {
    "time": [
      281.0,
      285.0
    ],
    "en": [
      "notice how the VT P version 2 and VT v"
    ],
    "ru": [
      "обратите внимание, как VT P версии 2 и VT v"
    ]
  },
  {
    "time": [
      285.0,
      287.0
    ],
    "en": [
      "domain name of CCNA are already set"
    ],
    "ru": [
      "доменное имя CCNA уже установлено"
    ]
  },
  {
    "time": [
      287.0,
      291.0
    ],
    "en": [
      "without us having to configure them if a"
    ],
    "ru": [
      "без необходимости настраивать их, если"
    ]
  },
  {
    "time": [
      291.0,
      293.0
    ],
    "en": [
      "VT P switch with the default domain name"
    ],
    "ru": [
      "Коммутатор VT P с доменным именем по умолчанию"
    ]
  },
  {
    "time": [
      293.0,
      295.0
    ],
    "en": [
      "null receives a message from a VT P"
    ],
    "ru": [
      "null получает сообщение от VT P"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "switch in another domain it will"
    ],
    "ru": [
      "переключиться в другой домен он будет"
    ]
  },
  {
    "time": [
      298.0,
      299.0
    ],
    "en": [
      "automatically join that other switches"
    ],
    "ru": [
      "автоматически присоединиться к другим переключателям"
    ]
  },
  {
    "time": [
      299.0,
      302.0
    ],
    "en": [
      "domain same thing for the VT P version"
    ],
    "ru": [
      "домен то же самое для версии VT P"
    ]
  },
  {
    "time": [
      302.0,
      306.0
    ],
    "en": [
      "if a version once which receives a VT P"
    ],
    "ru": [
      "если версия, однажды получившая VT P"
    ]
  },
  {
    "time": [
      306.0,
      309.0
    ],
    "en": [
      "message from a VT b version to switch it"
    ],
    "ru": [
      "сообщение от версии VT b, чтобы переключить его"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "will change to the VT p version 2 if"
    ],
    "ru": [
      "изменится на VT p версии 2, если"
    ]
  },
  {
    "time": [
      311.0,
      315.0
    ],
    "en": [
      "it's supported on the switch the next"
    ],
    "ru": [
      "он поддерживается на коммутаторе в следующий"
    ]
  },
  {
    "time": [
      315.0,
      317.0
    ],
    "en": [
      "step is to assign all switch ports"
    ],
    "ru": [
      "шаг - назначить все порты коммутатора"
    ]
  },
  {
    "time": [
      317.0,
      319.0
    ],
    "en": [
      "connected to hosts to their proper VLANs"
    ],
    "ru": [
      "подключены к хостам к их собственным VLAN"
    ]
  },
  {
    "time": [
      319.0,
      323.0
    ],
    "en": [
      "and disable VT P this is pretty"
    ],
    "ru": [
      "и отключите VT P, это красиво"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "repetitive work but let's get into it"
    ],
    "ru": [
      "повторяющаяся работа, но давайте перейдем к ней"
    ]
  },
  {
    "time": [
      326.0,
      330.0
    ],
    "en": [
      "right here on switch 3 first interface"
    ],
    "ru": [
      "прямо здесь на переключателе 3 первый интерфейс"
    ]
  },
  {
    "time": [
      330.0,
      336.0
    ],
    "en": [
      "f01 switch port mode access switch port"
    ],
    "ru": [
      "f01 порт коммутатора режим порта коммутатора доступа"
    ]
  },
  {
    "time": [
      336.0,
      343.0
    ],
    "en": [
      "access VLAN 10 switch port no negotiate"
    ],
    "ru": [
      "доступ к порту коммутатора VLAN 10 без согласования"
    ]
  },
  {
    "time": [
      343.0,
      348.0
    ],
    "en": [
      "interface range F 0 2 to 3 switch port"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 2 до 3 портов коммутатора"
    ]
  },
  {
    "time": [
      348.0,
      355.0
    ],
    "en": [
      "mode access switch port access VLAN 30"
    ],
    "ru": [
      "режим коммутатора доступа порт доступа VLAN 30"
    ]
  },
  {
    "time": [
      355.0,
      361.0
    ],
    "en": [
      "switch port no negotiate interface F 0 4"
    ],
    "ru": [
      "порт коммутатора нет интерфейса согласования F 0 4"
    ]
  },
  {
    "time": [
      361.0,
      365.0
    ],
    "en": [
      "switch port mode access switch port"
    ],
    "ru": [
      "режим порта коммутатора порт коммутатора доступа"
    ]
  },
  {
    "time": [
      365.0,
      371.0
    ],
    "en": [
      "access VLAN 20 switch port no negotiate"
    ],
    "ru": [
      "доступ к порту коммутатора VLAN 20 без согласования"
    ]
  },
  {
    "time": [
      371.0,
      377.0
    ],
    "en": [
      "okay next is switch to interface range F"
    ],
    "ru": [
      "Хорошо, затем переключитесь на диапазон интерфейса F"
    ]
  },
  {
    "time": [
      377.0,
      384.0
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
      377.0,
      384.0
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
      384.0,
      389.0
    ],
    "en": [
      "port access VLAN 40 switch port no"
    ],
    "ru": [
      "порт доступа VLAN 40 коммутатор порт нет"
    ]
  },
  {
    "time": [
      389.0,
      395.0
    ],
    "en": [
      "negotiate finally switch 1"
    ],
    "ru": [
      "наконец договориться переключить 1"
    ]
  },
  {
    "time": [
      395.0,
      401.0
    ],
    "en": [
      "interface range f 0 1 2 2 switch port"
    ],
    "ru": [
      "диапазон интерфейса f 0 1 2 2 порт коммутатора"
    ]
  },
  {
    "time": [
      401.0,
      407.0
    ],
    "en": [
      "mode access switch port access VLAN 10"
    ],
    "ru": [
      "режим коммутатора доступа порт доступа VLAN 10"
    ]
  },
  {
    "time": [
      407.0,
      411.0
    ],
    "en": [
      "switch port no negotiate last one"
    ],
    "ru": [
      "порт коммутатора не согласовывать последний"
    ]
  },
  {
    "time": [
      411.0,
      416.0
    ],
    "en": [
      "interface F 0 3 switch port mode access"
    ],
    "ru": [
      "интерфейс F 0 3 режим порта коммутатора"
    ]
  },
  {
    "time": [
      416.0,
      421.0
    ],
    "en": [
      "switch port access VLAN 20 switch port"
    ],
    "ru": [
      "порт коммутатора доступ VLAN 20 порт коммутатора"
    ]
  },
  {
    "time": [
      421.0,
      426.0
    ],
    "en": [
      "no negotiate okay all done"
    ],
    "ru": [
      "нет переговоров хорошо все сделано"
    ]
  },
  {
    "time": [
      426.0,
      428.0
    ],
    "en": [
      "finally we are to configure the Chuck"
    ],
    "ru": [
      "наконец, мы должны настроить Чак"
    ]
  },
  {
    "time": [
      428.0,
      432.0
    ],
    "en": [
      "ports to allow only VLANs 1 10 and 20"
    ],
    "ru": [
      "порты, чтобы разрешить только VLAN 1, 10 и 20"
    ]
  },
  {
    "time": [
      432.0,
      435.0
    ],
    "en": [
      "let's do it here on switch 1 first"
    ],
    "ru": [
      "давайте сначала сделаем это здесь, на переключателе 1"
    ]
  },
  {
    "time": [
      435.0,
      440.0
    ],
    "en": [
      "interface g0 1 switch port trunk allowed"
    ],
    "ru": [
      "интерфейс g0 1 порт коммутатора транк разрешен"
    ]
  },
  {
    "time": [
      440.0,
      443.0
    ],
    "en": [
      "VLAN now let's check our options"
    ],
    "ru": [
      "VLAN теперь давайте проверим наши возможности"
    ]
  },
  {
    "time": [
      443.0,
      446.0
    ],
    "en": [
      "this word option allows us to specify a"
    ],
    "ru": [
      "эта опция слова позволяет нам указать"
    ]
  },
  {
    "time": [
      446.0,
      451.0
    ],
    "en": [
      "list of allowed VLANs for example 1 2 3"
    ],
    "ru": [
      "список разрешенных VLAN, например 1 2 3"
    ]
  },
  {
    "time": [
      451.0,
      458.0
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
      451.0,
      458.0
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
      458.0,
      462.0
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
      458.0,
      462.0
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
      462.0,
      464.0
    ],
    "en": [
      "again with different numbers that list"
    ],
    "ru": [
      "снова с разными номерами, которые перечисляют"
    ]
  },
  {
    "time": [
      464.0,
      467.0
    ],
    "en": [
      "will be replaced switch port trunk"
    ],
    "ru": [
      "будет заменен коммутатор порта магистраль"
    ]
  },
  {
    "time": [
      467.0,
      473.0
    ],
    "en": [
      "allowed VLAN 5 6 7 8 do show interfaces"
    ],
    "ru": [
      "разрешено VLAN 5 6 7 8 показывать интерфейсы"
    ]
  },
  {
    "time": [
      473.0,
      479.0
    ],
    "en": [
      "trunk c-124 has been replaced by 5 - 8"
    ],
    "ru": [
      "Ствол С-124 заменен на 5-8"
    ]
  },
  {
    "time": [
      479.0,
      482.0
    ],
    "en": [
      "the next option add adds to the current"
    ],
    "ru": [
      "следующая опция добавить добавляет к текущему"
    ]
  },
  {
    "time": [
      482.0,
      482.0
    ],
    "en": [
      "list"
    ],
    "ru": [
      "список"
    ]
  },
  {
    "time": [
      482.0,
      486.0
    ],
    "en": [
      "let's try switch port trunk allowed VLAN"
    ],
    "ru": [
      "давайте попробуем переключить порт транк разрешенный VLAN"
    ]
  },
  {
    "time": [
      486.0,
      491.0
    ],
    "en": [
      "add 9 do show interfaces trunk now it's"
    ],
    "ru": [
      "добавить 9, показать ствол интерфейсов, теперь это"
    ]
  },
  {
    "time": [
      491.0,
      495.0
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
      491.0,
      495.0
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
      495.0,
      499.0
    ],
    "en": [
      "from the current list for example switch"
    ],
    "ru": [
      "из текущего списка например переключатель"
    ]
  },
  {
    "time": [
      499.0,
      503.0
    ],
    "en": [
      "port trunk allowed VLAN remove 9 do show"
    ],
    "ru": [
      "порт транк разрешен VLAN удалить 9 показать"
    ]
  },
  {
    "time": [
      503.0,
      507.0
    ],
    "en": [
      "interfaces trunk now it's five to eighty"
    ],
    "ru": [
      "магистраль интерфейсов теперь от пяти до восьмидесяти"
    ]
  },
  {
    "time": [
      507.0,
      511.0
    ],
    "en": [
      "game all allows all VLANs of course"
    ],
    "ru": [
      "game all, конечно же, позволяет использовать все VLAN"
    ]
  },
  {
    "time": [
      511.0,
      514.0
    ],
    "en": [
      "let's try switch port trunk allowed VLAN"
    ],
    "ru": [
      "давайте попробуем переключить порт транк разрешенный VLAN"
    ]
  },
  {
    "time": [
      514.0,
      519.0
    ],
    "en": [
      "all do show interfaces trunk now it's"
    ],
    "ru": [
      "все действительно показывают ствол интерфейсов, теперь это"
    ]
  },
  {
    "time": [
      519.0,
      522.0
    ],
    "en": [
      "one two one thousand five we can also do"
    ],
    "ru": [
      "один, два, тысяча пять, мы также можем сделать"
    ]
  },
  {
    "time": [
      522.0,
      526.0
    ],
    "en": [
      "the opposite with none switch port trunk"
    ],
    "ru": [
      "наоборот, без транка порта коммутатора"
    ]
  },
  {
    "time": [
      526.0,
      527.0
    ],
    "en": [
      "allowed VLANs"
    ],
    "ru": [
      "разрешенные VLAN"
    ]
  },
  {
    "time": [
      527.0,
      528.0
    ],
    "en": [
      "not"
    ],
    "ru": [
      "нет"
    ]
  },
  {
    "time": [
      528.0,
      532.0
    ],
    "en": [
      "do show interfaces trunk now nothing"
    ],
    "ru": [
      "не показывать интерфейсы транк теперь ничего"
    ]
  },
  {
    "time": [
      532.0,
      534.0
    ],
    "en": [
      "appears finally there is the accept"
    ],
    "ru": [
      "наконец появляется"
    ]
  },
  {
    "time": [
      534.0,
      538.0
    ],
    "en": [
      "option we can allow all VLANs except"
    ],
    "ru": [
      "вариант, мы можем разрешить все VLAN, кроме"
    ]
  },
  {
    "time": [
      538.0,
      541.0
    ],
    "en": [
      "certain ones switch port trunk allowed"
    ],
    "ru": [
      "разрешены некоторые из них"
    ]
  },
  {
    "time": [
      541.0,
      546.0
    ],
    "en": [
      "VLAN except to do show interfaces trunk"
    ],
    "ru": [
      "VLAN, за исключением показа транка интерфейсов"
    ]
  },
  {
    "time": [
      546.0,
      552.0
    ],
    "en": [
      "now it's 1 & 3 to 1005 ok now let's get"
    ],
    "ru": [
      "теперь это 1 и 3 до 1005 хорошо, теперь давайте"
    ]
  },
  {
    "time": [
      552.0,
      555.0
    ],
    "en": [
      "back to the task at hand switch port"
    ],
    "ru": [
      "вернуться к текущей задаче переключить порт"
    ]
  },
  {
    "time": [
      555.0,
      560.0
    ],
    "en": [
      "trunk allowed VLAN 1 10 20 do show"
    ],
    "ru": [
      "транк разрешен VLAN 1 10 20 показывать"
    ]
  },
  {
    "time": [
      560.0,
      565.0
    ],
    "en": [
      "interfaces trunk there we go let's do"
    ],
    "ru": [
      "интерфейсы ствол вот мы идем давайте сделаем"
    ]
  },
  {
    "time": [
      565.0,
      566.0
    ],
    "en": [
      "the same thing on the other switches and"
    ],
    "ru": [
      "то же самое на других переключателях и"
    ]
  },
  {
    "time": [
      566.0,
      571.0
    ],
    "en": [
      "then we're done so next is switch to"
    ],
    "ru": [
      "тогда мы закончили, поэтому теперь нужно переключиться на"
    ]
  },
  {
    "time": [
      571.0,
      577.0
    ],
    "en": [
      "interface range G 0 1 2 2 switch port"
    ],
    "ru": [
      "диапазон интерфейса G 0 1 2 2 порт коммутатора"
    ]
  },
  {
    "time": [
      577.0,
      582.0
    ],
    "en": [
      "trunk allowed VLAN 1 10 20 finally"
    ],
    "ru": [
      "транк разрешен VLAN 1 10 20 наконец"
    ]
  },
  {
    "time": [
      582.0,
      588.0
    ],
    "en": [
      "switch 3 interface G 0 1 switch port"
    ],
    "ru": [
      "коммутатор 3 интерфейс G 0 1 порт коммутатора"
    ]
  },
  {
    "time": [
      588.0,
      594.0
    ],
    "en": [
      "trunk allowed VLAN 1 10 20 in this lab"
    ],
    "ru": [
      "транк разрешен VLAN 1 10 20 в этой лабораторной работе"
    ]
  },
  {
    "time": [
      594.0,
      597.0
    ],
    "en": [
      "we configured VTP and we also looked at"
    ],
    "ru": [
      "мы настроили VTP, а также посмотрели"
    ]
  },
  {
    "time": [
      597.0,
      599.0
    ],
    "en": [
      "how to add and remove allowed VLANs on"
    ],
    "ru": [
      "как добавлять и удалять разрешенные VLAN на"
    ]
  },
  {
    "time": [
      599.0,
      604.0
    ],
    "en": [
      "trunks that's all for this lab thank you"
    ],
    "ru": [
      "чемоданы это все для этой лаборатории спасибо"
    ]
  },
  {
    "time": [
      604.0,
      606.0
    ],
    "en": [
      "for watching I hope this lab and video"
    ],
    "ru": [
      "за просмотр, надеюсь, эта лабораторная работа и видео"
    ]
  },
  {
    "time": [
      606.0,
      609.0
    ],
    "en": [
      "have been helpful for you please"
    ],
    "ru": [
      "были полезны для вас, пожалуйста"
    ]
  },
  {
    "time": [
      609.0,
      610.0
    ],
    "en": [
      "subscribe for future labs like this"
    ],
    "ru": [
      "подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      610.0,
      613.0
    ],
    "en": [
      "which will be released weekly if you"
    ],
    "ru": [
      "который будет выходить еженедельно, если вы"
    ]
  },
  {
    "time": [
      613.0,
      616.0
    ],
    "en": [
      "have requests for any specific labs let"
    ],
    "ru": [
      "есть запросы на любые конкретные лаборатории, позволяющие"
    ]
  },
  {
    "time": [
      616.0,
      618.0
    ],
    "en": [
      "me know in the comment section if you"
    ],
    "ru": [
      "я знаю в разделе комментариев, если вы"
    ]
  },
  {
    "time": [
      618.0,
      620.0
    ],
    "en": [
      "want to support my channel I accept"
    ],
    "ru": [
      "хочу поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      620.0,
      622.0
    ],
    "en": [
      "Bitcoin and aetherium donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфириума через"
    ]
  },
  {
    "time": [
      622.0,
      626.0
    ],
    "en": [
      "addresses in the description I am also a"
    ],
    "ru": [
      "адреса в описании я тоже"
    ]
  },
  {
    "time": [
      626.0,
      628.0
    ],
    "en": [
      "brave verified publisher and accept bat"
    ],
    "ru": [
      "храбрый проверенный издатель и прими летучую мышь"
    ]
  },
  {
    "time": [
      628.0,
      631.0
    ],
    "en": [
      "or basic attention token donations in"
    ],
    "ru": [
      "или основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      631.0,
      631.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]