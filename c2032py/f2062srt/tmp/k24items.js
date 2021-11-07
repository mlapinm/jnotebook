let objs = [
  {
    "time": [
      0.0,
      4.132791
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
      4.132791,
      6.634207
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
      6.634207,
      13.921957
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
      13.921957,
      18.159873
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
      18.159873,
      27.895518
    ],
    "en": [
      "in this lab more colorful than usual we will configure VLANs and VTP the VLAN trunking protocol"
    ],
    "ru": [
      "в этой лабораторной работе более красочно, чем обычно, мы настроим VLAN и VTP протокол транкинга VLAN."
    ]
  },
  {
    "time": [
      27.895518,
      33.347309
    ],
    "en": [
      "VTP is used to propagate VLAN configurations among switches"
    ],
    "ru": [
      "VTP используется для распространения конфигураций VLAN между коммутаторами."
    ]
  },
  {
    "time": [
      33.347309,
      45.101975
    ],
    "en": [
      "so you can configure the required VLANs on a single switch and have it share the configurations with other switches instead of having to configure the same VLANs on every individual switch"
    ],
    "ru": [
      "так что вы можете настроить необходимые VLAN на одном коммутаторе и использовать его конфигурации с другими коммутаторами вместо того, чтобы настраивать одни и те же сети VLAN на каждом отдельном коммутаторе."
    ]
  },
  {
    "time": [
      45.101975,
      54.136475
    ],
    "en": [
      "so the first step is to configure the switch ports connecting switches as trunk ports and disable DTP"
    ],
    "ru": [
      "поэтому первым шагом является настройка портов коммутатора, соединяющих коммутаторы, в качестве магистральных портов и отключение DTP."
    ]
  },
  {
    "time": [
      54.136475,
      57.39812
    ],
    "en": [
      "that's simple enough let's go on switch one"
    ],
    "ru": [
      "это достаточно просто, давайте перейдем к первому переключателю"
    ]
  },
  {
    "time": [
      57.39812,
      70.036682
    ],
    "en": [
      "enable conf t interface g0 1 switch port mode trunk switch port no negotiate exit"
    ],
    "ru": [
      "enable conf t interface g0 1 режим порта коммутатора магистральный порт коммутатора без согласования выход"
    ]
  },
  {
    "time": [
      70.036682,
      86.942326
    ],
    "en": [
      "now on switch 2 enable conf t interface range g0 1 to 2 switch port mode trunk switch port no negotiate exit"
    ],
    "ru": [
      "сейчас на коммутаторе 2 enable conf t interface range g0 1 to 2 switch port mode trunk switch port nogotiate exit"
    ]
  },
  {
    "time": [
      86.942326,
      101.54118
    ],
    "en": [
      "finally on switch 3 enable conf t interface g0 1 switch port mode trunk switch port no negotiate exit"
    ],
    "ru": [
      "наконец, на коммутаторе 3 enable conf t interface g0 1 switch port mode trunk switch port nogotiate exit"
    ]
  },
  {
    "time": [
      101.54118,
      104.27943
    ],
    "en": [
      "okay that's all for step 1"
    ],
    "ru": [
      "хорошо, это все для шага 1"
    ]
  },
  {
    "time": [
      104.27943,
      110.121617
    ],
    "en": [
      "step 2 is to configure switch 2 as VTP transparent"
    ],
    "ru": [
      "Шаг 2 - настроить коммутатор 2 как прозрачный VTP."
    ]
  },
  {
    "time": [
      110.121617,
      114.171867
    ],
    "en": [
      "first let's review the different VTB modes"
    ],
    "ru": [
      "сначала давайте рассмотрим различные режимы VTB"
    ]
  },
  {
    "time": [
      114.171867,
      119.423971
    ],
    "en": [
      "there are 3 VTB modes server client and transparent"
    ],
    "ru": [
      "есть 3 режима ВТБ сервер клиент и прозрачный"
    ]
  },
  {
    "time": [
      119.423971,
      126.014992
    ],
    "en": [
      "in this lab switch 1 will be a server and switch 3 will be a client"
    ],
    "ru": [
      "в этой лабораторной работе коммутатор 1 будет сервером, а коммутатор 3 - клиентом."
    ]
  },
  {
    "time": [
      126.014992,
      129.292575
    ],
    "en": [
      "switch 2 will be in transparent mode"
    ],
    "ru": [
      "переключатель 2 будет в прозрачном режиме"
    ]
  },
  {
    "time": [
      129.292575,
      136.250387
    ],
    "en": [
      "VTP servers are able to create and delete VLANs and then share those configurations with other switches"
    ],
    "ru": [
      "Серверы VTP могут создавать и удалять сети VLAN, а затем делиться этими конфигурациями с другими коммутаторами."
    ]
  },
  {
    "time": [
      136.250387,
      143.920408
    ],
    "en": [
      "VTP clients cannot create or delete VLANs but will rather sink their VLAN configuration with a VTP server"
    ],
    "ru": [
      "Клиенты VTP не могут создавать или удалять сети VLAN, а скорее передадут свою конфигурацию VLAN серверу VTP."
    ]
  },
  {
    "time": [
      143.920408,
      150.108554
    ],
    "en": [
      "VTP transparent switches will not sink their VLAN configurations to a server"
    ],
    "ru": [
      "Прозрачные коммутаторы VTP не передают свои конфигурации VLAN серверу"
    ]
  },
  {
    "time": [
      150.108554,
      155.530804
    ],
    "en": [
      "they will however pass along VTP messages from VTP servers"
    ],
    "ru": [
      "однако они будут передавать сообщения VTP от серверов VTP."
    ]
  },
  {
    "time": [
      155.530804,
      160.025074
    ],
    "en": [
      "so in this lab switch 2 will be in transparent mode"
    ],
    "ru": [
      "поэтому в этой лаборатории переключатель 2 будет в прозрачном режиме"
    ]
  },
  {
    "time": [
      160.025074,
      163.152761
    ],
    "en": [
      "and it's between switch 1 and switch 3"
    ],
    "ru": [
      "и это между переключателем 1 и переключателем 3"
    ]
  },
  {
    "time": [
      163.152761,
      170.028719
    ],
    "en": [
      "it won't sink its VLANs to switch 1 but it will pass which ones messages to switch 3"
    ],
    "ru": [
      "он не потратит свои VLAN на коммутатор 1, но передаст какие сообщения коммутатору 3"
    ]
  },
  {
    "time": [
      170.028719,
      173.431949
    ],
    "en": [
      "okay let's do the configuration"
    ],
    "ru": [
      "хорошо, давайте сделаем настройку"
    ]
  },
  {
    "time": [
      173.431949,
      176.930428
    ],
    "en": [
      "first VTP mode transparent"
    ],
    "ru": [
      "первый режим VTP прозрачный"
    ]
  },
  {
    "time": [
      176.930428,
      179.899323
    ],
    "en": [
      "configure switch 2 in VTP transparent mode"
    ],
    "ru": [
      "настроить коммутатор 2 в прозрачном режиме VTP"
    ]
  },
  {
    "time": [
      179.899323,
      188.764239
    ],
    "en": [
      "next the VTP domain name as you can see here is CCNA VTP domain CCNA"
    ],
    "ru": [
      "рядом с доменным именем VTP, как вы можете видеть, это CCNA Домен VTP CCNA"
    ]
  },
  {
    "time": [
      188.764239,
      194.20978
    ],
    "en": [
      "also we are told to configure VTP version 2 VTP version 2"
    ],
    "ru": [
      "также нам говорят настроить VTP версии 2 VTP версии 2"
    ]
  },
  {
    "time": [
      194.20978,
      201.977405
    ],
    "en": [
      "Cisco recommends to avoid using version 1 if possible"
    ],
    "ru": [
      "Cisco рекомендует по возможности избегать использования версии 1."
    ]
  },
  {
    "time": [
      201.977405,
      206.106155
    ],
    "en": [
      "next let's create VLAN 40 on switch 2"
    ],
    "ru": [
      "Далее давайте создадим VLAN 40 на коммутаторе 2"
    ]
  },
  {
    "time": [
      206.106155,
      211.518425
    ],
    "en": [
      "VLAN 40 named accounting exit"
    ],
    "ru": [
      "VLAN 40 именованный выход для учета"
    ]
  },
  {
    "time": [
      211.518425,
      216.122175
    ],
    "en": [
      "let's check do show VLAN brief"
    ],
    "ru": [
      "давайте проверим показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      216.122175,
      220.245363
    ],
    "en": [
      "there we go VLAN 40 named accounting"
    ],
    "ru": [
      "там мы идем VLAN 40 именованный бухгалтерия"
    ]
  },
  {
    "time": [
      220.245363,
      227.016988
    ],
    "en": [
      "the next step is to configure our VTP server switch 1"
    ],
    "ru": [
      "следующим шагом будет настройка нашего коммутатора 1 VTP-сервера."
    ]
  },
  {
    "time": [
      227.016988,
      237.316967
    ],
    "en": [
      "VTP domain CCNA VTP version 2 VTP mode server"
    ],
    "ru": [
      "Домен VTP CCNA VTP версии 2 Сервер режима VTP"
    ]
  },
  {
    "time": [
      237.316967,
      241.4428
    ],
    "en": [
      "VTP server is actually the default VTV mode by the way"
    ],
    "ru": [
      "Кстати, сервер VTP на самом деле является режимом VTV по умолчанию."
    ]
  },
  {
    "time": [
      241.4428,
      246.356841
    ],
    "en": [
      "ok now let's create VLANs 10 20 and 30"
    ],
    "ru": [
      "Хорошо, теперь давайте создадим VLAN 10, 20 и 30"
    ]
  },
  {
    "time": [
      246.356841,
      262.91859
    ],
    "en": [
      "VLAN 10 name HR VLAN 20 name sales VLAN 30 name engineering exit"
    ],
    "ru": [
      "VLAN 10 имя HR VLAN 20 имя продажи VLAN 30 имя инженерный выход"
    ]
  },
  {
    "time": [
      262.91859,
      268.04509
    ],
    "en": [
      "next let's configure switch 3 as a VTP client"
    ],
    "ru": [
      "Далее давайте настроим коммутатор 3 как VTP-клиент"
    ]
  },
  {
    "time": [
      268.04509,
      271.09809
    ],
    "en": [
      "and it should get all of this configuration from switch 1"
    ],
    "ru": [
      "и он должен получить всю эту конфигурацию от переключателя 1"
    ]
  },
  {
    "time": [
      271.09809,
      276.754402
    ],
    "en": [
      "VTP mode client"
    ],
    "ru": [
      "Клиент режима VTP"
    ]
  },
  {
    "time": [
      276.754402,
      280.113444
    ],
    "en": [
      "do you show VTP status"
    ],
    "ru": [
      "вы показываете статус VTP"
    ]
  },
  {
    "time": [
      280.113444,
      289.475048
    ],
    "en": [
      "notice how the VTP version 2 and VTP domain name of CCNA are already set without us having to configure them"
    ],
    "ru": [
      "обратите внимание, как VTP версии 2 и доменное имя VTP CCNA уже установлены без необходимости их настройки"
    ]
  },
  {
    "time": [
      289.475048,
      297.855235
    ],
    "en": [
      "if a VTP switch with the default domain name null receives a message from a VTP switch in another domain"
    ],
    "ru": [
      "если коммутатор VTP с доменным именем по умолчанию null получает сообщение от коммутатора VTP в другом домене"
    ]
  },
  {
    "time": [
      297.855235,
      300.522339
    ],
    "en": [
      "it will automatically join that other switches domain"
    ],
    "ru": [
      "он автоматически присоединится к этому домену других коммутаторов"
    ]
  },
  {
    "time": [
      300.522339,
      303.460214
    ],
    "en": [
      "same thing for the VTP version"
    ],
    "ru": [
      "то же самое для версии VTP"
    ]
  },
  {
    "time": [
      303.460214,
      308.811256
    ],
    "en": [
      "if a version once which receives a VTP message from a VTP version 2 switch"
    ],
    "ru": [
      "если версия один раз, которая получает сообщение VTP от коммутатора VTP версии 2"
    ]
  },
  {
    "time": [
      308.811256,
      313.234839
    ],
    "en": [
      "it will change to the VTP version 2 if it's supported on the switch"
    ],
    "ru": [
      "он изменится на VTP версии 2, если он поддерживается коммутатором."
    ]
  },
  {
    "time": [
      313.234839,
      321.521922
    ],
    "en": [
      "the next step is to assign all switch ports connected to hosts to their proper VLANs and disable VTP"
    ],
    "ru": [
      "следующий шаг - назначить все порты коммутатора, подключенные к хостам, в соответствующие VLAN и отключить VTP."
    ]
  },
  {
    "time": [
      321.521922,
      326.025255
    ],
    "en": [
      "this is pretty repetitive work but let's get into it"
    ],
    "ru": [
      "это довольно повторяющаяся работа, но давайте перейдем к ней"
    ]
  },
  {
    "time": [
      326.025255,
      329.246567
    ],
    "en": [
      "right here on switch 3 first"
    ],
    "ru": [
      "прямо здесь на переключателе 3 сначала"
    ]
  },
  {
    "time": [
      329.246567,
      343.0104
    ],
    "en": [
      "interface f01 switch port mode access switch port access VLAN 10 switch port no negotiate"
    ],
    "ru": [
      "интерфейс f01 режим порта коммутатора доступ порт коммутатора доступ VLAN 10 порт коммутатора без согласования"
    ]
  },
  {
    "time": [
      343.0104,
      371.078649
    ],
    "en": [
      "interface range F 0 2 to 3 switch port mode access switch port access VLAN 30 switch port no negotiate interface F 0 4 switch port mode access switch port access VLAN 20 switch port no negotiate"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 2 до 3 режим порта коммутатора доступ к порту коммутатора VLAN 30 порт коммутатора без согласования интерфейс F 0 4 режим порта коммутатора доступ к порту коммутатора VLAN 20 порт коммутатора без согласования"
    ]
  },
  {
    "time": [
      371.078649,
      391.129648
    ],
    "en": [
      "okay next is switch 2 interface range F 0 1 to 2 switch port mode access switch port access VLAN 40 switch port no negotiate"
    ],
    "ru": [
      "хорошо, далее идет диапазон интерфейса коммутатора 2 F 0 1–2 режим порта коммутатора доступ порта коммутатора доступ VLAN 40 порт коммутатора не согласовывается"
    ]
  },
  {
    "time": [
      391.129648,
      410.243001
    ],
    "en": [
      "finally switch 1 interface range f 0 1 to 2 switch port mode access switch port access VLAN 10 switch port no negotiate"
    ],
    "ru": [
      "наконец, диапазон интерфейса коммутатора 1 f 0 1–2 режим порта коммутатора доступ порт коммутатора доступ VLAN 10 порт коммутатора нет согласования"
    ]
  },
  {
    "time": [
      410.243001,
      422.932834
    ],
    "en": [
      "last one interface F 0 3 switch port mode access switch port access VLAN 20 switch port no negotiate"
    ],
    "ru": [
      "последний интерфейс F 0 3 порт коммутатора режим доступа порт коммутатора доступ VLAN 20 порт коммутатора нет согласования"
    ]
  },
  {
    "time": [
      422.932834,
      426.292084
    ],
    "en": [
      "okay all done"
    ],
    "ru": [
      "хорошо все сделано"
    ]
  },
  {
    "time": [
      426.292084,
      432.592021
    ],
    "en": [
      "finally we are to configure the Chuck ports to allow only VLANs 1 10 and 20"
    ],
    "ru": [
      "наконец, мы должны настроить порты Chuck, чтобы разрешить только VLAN 1, 10 и 20."
    ]
  },
  {
    "time": [
      432.592021,
      441.948396
    ],
    "en": [
      "let's do it here on switch 1 first interface g0 1 switch port trunk allowed VLAN"
    ],
    "ru": [
      "давайте сделаем это здесь на коммутаторе 1 первый интерфейс g0 1 магистраль порта коммутатора разрешена VLAN"
    ]
  },
  {
    "time": [
      441.948396,
      443.661354
    ],
    "en": [
      "now let's check our options"
    ],
    "ru": [
      "теперь давайте проверим наши варианты"
    ]
  },
  {
    "time": [
      443.661354,
      448.32202
    ],
    "en": [
      "this word option allows us to specify a list of allowed VLANs"
    ],
    "ru": [
      "эта опция слова позволяет нам указать список разрешенных VLAN"
    ]
  },
  {
    "time": [
      448.32202,
      456.096707
    ],
    "en": [
      "for example 1 2 3 4 do show interfaces trunk"
    ],
    "ru": [
      "например 1 2 3 4 показывать магистраль интерфейсов"
    ]
  },
  {
    "time": [
      456.096707,
      465.691956
    ],
    "en": [
      "see VLANs 1 2 4 are allowed if I enter the same thing again with different numbers that list will be replaced"
    ],
    "ru": [
      "см. VLAN 1 2 4 разрешены, если я снова введу одно и то же с другими номерами, этот список будет заменен"
    ]
  },
  {
    "time": [
      465.691956,
      471.898539
    ],
    "en": [
      "switch port trunk allowed VLAN 5 6 7 8"
    ],
    "ru": [
      "соединительная линия порта коммутатора разрешена VLAN 5 6 7 8"
    ]
  },
  {
    "time": [
      471.898539,
      474.326351
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      474.326351,
      478.805454
    ],
    "en": [
      "c-1 to 4 has been replaced by 5 - 8"
    ],
    "ru": [
      "c-1 to 4 заменено на 5-8"
    ]
  },
  {
    "time": [
      478.805454,
      483.804349
    ],
    "en": [
      "the next option add adds to the current list let's try"
    ],
    "ru": [
      "следующая опция добавить добавляет в текущий список давайте попробуем"
    ]
  },
  {
    "time": [
      483.804349,
      488.645765
    ],
    "en": [
      "switch port trunk allowed VLAN add 9"
    ],
    "ru": [
      "магистраль порта коммутатора разрешена VLAN добавить 9"
    ]
  },
  {
    "time": [
      488.645765,
      490.764203
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      490.764203,
      493.221911
    ],
    "en": [
      "now it's 5 to 9"
    ],
    "ru": [
      "сейчас с 5 до 9"
    ]
  },
  {
    "time": [
      493.221911,
      497.332494
    ],
    "en": [
      "remove does the opposite removing from the current list"
    ],
    "ru": [
      "remove выполняет противоположное удаление из текущего списка"
    ]
  },
  {
    "time": [
      497.332494,
      502.931307
    ],
    "en": [
      "for example switch port trunk allowed VLAN remove 9"
    ],
    "ru": [
      "например транк порта коммутатора разрешен VLAN удалить 9"
    ]
  },
  {
    "time": [
      502.931307,
      505.450244
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      505.450244,
      507.975828
    ],
    "en": [
      "now it's five to eight again"
    ],
    "ru": [
      "теперь снова без пяти восемь"
    ]
  },
  {
    "time": [
      507.975828,
      511.481119
    ],
    "en": [
      "all allows all VLANs of course"
    ],
    "ru": [
      "конечно все разрешает все VLAN"
    ]
  },
  {
    "time": [
      511.481119,
      515.989327
    ],
    "en": [
      "let's try switch port trunk allowed VLAN all"
    ],
    "ru": [
      "давайте попробуем переключить порт транк разрешен VLAN все"
    ]
  },
  {
    "time": [
      515.989327,
      518.554327
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      518.554327,
      521.626577
    ],
    "en": [
      "now it's 1-1005"
    ],
    "ru": [
      "сейчас 1-1005"
    ]
  },
  {
    "time": [
      521.626577,
      524.960931
    ],
    "en": [
      "we can also do the opposite with none"
    ],
    "ru": [
      "мы также можем сделать обратное без"
    ]
  },
  {
    "time": [
      524.960931,
      529.030431
    ],
    "en": [
      "switch port trunk allowed VLANs not"
    ],
    "ru": [
      "соединительная линия порта коммутатора разрешена VLAN запрещена"
    ]
  },
  {
    "time": [
      529.030431,
      531.286264
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      531.286264,
      532.821181
    ],
    "en": [
      "now nothing appears"
    ],
    "ru": [
      "теперь ничего не появляется"
    ]
  },
  {
    "time": [
      532.821181,
      536.120535
    ],
    "en": [
      "finally there is the accept option"
    ],
    "ru": [
      "наконец, есть опция принятия"
    ]
  },
  {
    "time": [
      536.120535,
      539.30291
    ],
    "en": [
      "we can allow all VLANs except certain ones"
    ],
    "ru": [
      "мы можем разрешить все VLAN, кроме определенных"
    ]
  },
  {
    "time": [
      539.30291,
      544.525243
    ],
    "en": [
      "switch port trunk allowed VLAN except 2"
    ],
    "ru": [
      "магистраль порта коммутатора разрешена VLAN кроме 2"
    ]
  },
  {
    "time": [
      544.525243,
      546.777972
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      546.777972,
      550.850805
    ],
    "en": [
      "now it's 1 & 3 to 1005"
    ],
    "ru": [
      "теперь это 1 и 3 до 1005"
    ]
  },
  {
    "time": [
      550.850805,
      554.360138
    ],
    "en": [
      "ok now let's get back to the task at hand"
    ],
    "ru": [
      "хорошо, теперь давайте вернемся к текущей задаче"
    ]
  },
  {
    "time": [
      554.360138,
      559.771554
    ],
    "en": [
      "switch port trunk allowed VLAN 1 10 20"
    ],
    "ru": [
      "соединительная линия порта коммутатора разрешена VLAN 1 10 20"
    ]
  },
  {
    "time": [
      559.771554,
      562.130992
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      562.130992,
      564.584013
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
      564.584013,
      567.872179
    ],
    "en": [
      "let's do the same thing on the other switches and then we're done"
    ],
    "ru": [
      "давайте сделаем то же самое с другими переключателями, и тогда мы закончим"
    ]
  },
  {
    "time": [
      567.872179,
      570.548616
    ],
    "en": [
      "so next is switch 2"
    ],
    "ru": [
      "Итак, следующий переключатель 2"
    ]
  },
  {
    "time": [
      570.548616,
      581.460553
    ],
    "en": [
      "interface range G 0 1 to 2 switch port trunk allowed VLAN 1 10 20"
    ],
    "ru": [
      "диапазон интерфейса G 0 Допускается от 1 до 2 соединительных линий порта коммутатора VLAN 1 10 20"
    ]
  },
  {
    "time": [
      581.460553,
      585.125282
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
      585.125282,
      592.24149
    ],
    "en": [
      "interface G 0 1 switch port trunk allowed VLAN 1 10 20"
    ],
    "ru": [
      "интерфейс G 0 1 соединительная линия порта коммутатора разрешена VLAN 1 10 20"
    ]
  },
  {
    "time": [
      592.24149,
      600.545803
    ],
    "en": [
      "in this lab we configured VTP and we also looked at how to add and remove allowed VLANs on trunks"
    ],
    "ru": [
      "в этой лабораторной работе мы настроили VTP, а также рассмотрели, как добавлять и удалять разрешенные VLAN на магистралях."
    ]
  },
  {
    "time": [
      600.545803,
      602.367844
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
      602.367844,
      608.041053
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
      608.041053,
      612.865282
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
      612.865282,
      617.611136
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
      617.611136,
      624.543261
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
      624.543261,
      632.989302
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
      632.989302,
      632.989302
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
      632.989302,
      632.989302
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
      632.989302,
      632.989302
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]