let objs = [
  {
    "time": [
      0.0,
      4.473874
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
      4.473874,
      7.539894
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
      7.539894,
      15.000561
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
      15.000561,
      24.988374
    ],
    "en": [
      "in this lab we will configure the system clock including the timezone as well as Network Time Protocol or NTP on three routers"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим системные часы, включая часовой пояс, а также протокол сетевого времени или NTP на трех маршрутизаторах."
    ]
  },
  {
    "time": [
      24.988374,
      29.681228
    ],
    "en": [
      "this lab will only cover the absolute basics of NTP configuration"
    ],
    "ru": [
      "в этой лабораторной работе будут рассмотрены только абсолютные основы конфигурации NTP."
    ]
  },
  {
    "time": [
      29.681228,
      33.809019
    ],
    "en": [
      "and in the following lab we will configure NTP authentication"
    ],
    "ru": [
      "и в следующей лабораторной работе мы настроим аутентификацию NTP."
    ]
  },
  {
    "time": [
      33.809019,
      39.04529
    ],
    "en": [
      "NTP is used to synchronize time across devices"
    ],
    "ru": [
      "NTP используется для синхронизации времени между устройствами"
    ]
  },
  {
    "time": [
      39.04529,
      43.95304
    ],
    "en": [
      "it's very important to have synchronized time for a variety of reasons"
    ],
    "ru": [
      "очень важно иметь синхронизированное время по разным причинам"
    ]
  },
  {
    "time": [
      43.95304,
      47.912956
    ],
    "en": [
      "for example to help identify when a particular problem occurred"
    ],
    "ru": [
      "например, чтобы помочь определить, когда возникла конкретная проблема"
    ]
  },
  {
    "time": [
      47.912956,
      49.954414
    ],
    "en": [
      "when looking through logs on a device"
    ],
    "ru": [
      "при просмотре журналов на устройстве"
    ]
  },
  {
    "time": [
      49.954414,
      59.288685
    ],
    "en": [
      "in this lab we will manually configure the time on r1 and then use it as an NTP server for r2 to sync it's time too"
    ],
    "ru": [
      "в этой лабораторной работе мы вручную настроим время на r1, а затем будем использовать его в качестве NTP-сервера для r2, чтобы синхронизировать время."
    ]
  },
  {
    "time": [
      59.288685,
      63.329622
    ],
    "en": [
      "we will then configure r3 to sync it's time to r2"
    ],
    "ru": [
      "Затем мы настроим r3 для синхронизации, пора с r2"
    ]
  },
  {
    "time": [
      63.329622,
      66.256497
    ],
    "en": [
      "and our network devices will have synchronized time"
    ],
    "ru": [
      "и наши сетевые устройства будут иметь синхронизированное время"
    ]
  },
  {
    "time": [
      66.256497,
      70.553872
    ],
    "en": [
      "first let's set the clock on r1"
    ],
    "ru": [
      "сначала давайте установим часы на r1"
    ]
  },
  {
    "time": [
      70.553872,
      75.236413
    ],
    "en": [
      "enable show clock"
    ],
    "ru": [
      "включить показывать часы"
    ]
  },
  {
    "time": [
      75.236413,
      78.455538
    ],
    "en": [
      "this command is used to display the time of the device"
    ],
    "ru": [
      "эта команда используется для отображения времени устройства"
    ]
  },
  {
    "time": [
      78.455538,
      82.401705
    ],
    "en": [
      "this is the default time but where is it getting this time"
    ],
    "ru": [
      "это время по умолчанию, но где он берется на этот раз"
    ]
  },
  {
    "time": [
      82.401705,
      87.483621
    ],
    "en": [
      "here's another useful command show clock detail"
    ],
    "ru": [
      "вот еще одна полезная команда показать детали часов"
    ]
  },
  {
    "time": [
      87.483621,
      90.18035
    ],
    "en": [
      "now we can see the time source"
    ],
    "ru": [
      "теперь мы можем видеть источник времени"
    ]
  },
  {
    "time": [
      90.18035,
      91.872308
    ],
    "en": [
      "which is the hardware calendar"
    ],
    "ru": [
      "это аппаратный календарь"
    ]
  },
  {
    "time": [
      91.872308,
      96.115558
    ],
    "en": [
      "Cisco devices have a hardware calendar built into them"
    ],
    "ru": [
      "В устройства Cisco встроен аппаратный календарь."
    ]
  },
  {
    "time": [
      96.115558,
      98.841329
    ],
    "en": [
      "and as you can see it is being used by default"
    ],
    "ru": [
      "и, как видите, он используется по умолчанию"
    ]
  },
  {
    "time": [
      98.841329,
      100.965829
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
      100.965829,
      103.830308
    ],
    "en": [
      "first let's set the time zone"
    ],
    "ru": [
      "сначала давайте установим часовой пояс"
    ]
  },
  {
    "time": [
      103.830308,
      105.929287
    ],
    "en": [
      "which is UTC by default"
    ],
    "ru": [
      "который по умолчанию является UTC"
    ]
  },
  {
    "time": [
      105.929287,
      109.63737
    ],
    "en": [
      "this is done from global configuration mode"
    ],
    "ru": [
      "это делается из режима глобальной конфигурации"
    ]
  },
  {
    "time": [
      109.63737,
      114.218015
    ],
    "en": [
      "conf t clock time zone"
    ],
    "ru": [
      "conf t часовой пояс часов"
    ]
  },
  {
    "time": [
      114.218015,
      116.613015
    ],
    "en": [
      "now let's check the next option"
    ],
    "ru": [
      "теперь давайте проверим следующий вариант"
    ]
  },
  {
    "time": [
      116.613015,
      119.885285
    ],
    "en": [
      "we have to enter the name of the time zone"
    ],
    "ru": [
      "мы должны ввести название часового пояса"
    ]
  },
  {
    "time": [
      119.885285,
      124.364139
    ],
    "en": [
      "I'm in Japan so I'll set it to jst"
    ],
    "ru": [
      "Я в Японии, поэтому установлю jst"
    ]
  },
  {
    "time": [
      124.364139,
      126.793285
    ],
    "en": [
      "now let's check the next option"
    ],
    "ru": [
      "теперь давайте проверим следующий вариант"
    ]
  },
  {
    "time": [
      126.793285,
      130.04591
    ],
    "en": [
      "hours offset from UTC"
    ],
    "ru": [
      "смещение часов от UTC"
    ]
  },
  {
    "time": [
      130.04591,
      135.039889
    ],
    "en": [
      "in my case jst is 9 hours ahead of UTC"
    ],
    "ru": [
      "в моем случае jst на 9 часов опережает UTC"
    ]
  },
  {
    "time": [
      135.039889,
      140.376014
    ],
    "en": [
      "so 9 the next option is minutes offset from UTC"
    ],
    "ru": [
      "Итак, 9 следующий вариант - это смещение минут от UTC"
    ]
  },
  {
    "time": [
      140.376014,
      144.915618
    ],
    "en": [
      "which is zero in my case so I'll just leave them in it's option edit"
    ],
    "ru": [
      "который в моем случае равен нулю, поэтому я просто оставлю их в его опции редактирования"
    ]
  },
  {
    "time": [
      144.915618,
      147.428305
    ],
    "en": [
      "do show clock"
    ],
    "ru": [
      "показывать часы"
    ]
  },
  {
    "time": [
      147.428305,
      152.042784
    ],
    "en": [
      "now as you can see the time has changed and the time zone has changed"
    ],
    "ru": [
      "теперь, как вы можете видеть, время изменилось, и часовой пояс изменился"
    ]
  },
  {
    "time": [
      152.042784,
      154.373034
    ],
    "en": [
      "now let's set the time itself"
    ],
    "ru": [
      "теперь давайте установим само время"
    ]
  },
  {
    "time": [
      154.373034,
      158.758096
    ],
    "en": [
      "to do this we have to go back to privileged exec mode"
    ],
    "ru": [
      "для этого нам нужно вернуться в привилегированный режим exec"
    ]
  },
  {
    "time": [
      158.758096,
      162.654137
    ],
    "en": [
      "exit we can set the time with this command"
    ],
    "ru": [
      "exit мы можем установить время с помощью этой команды"
    ]
  },
  {
    "time": [
      162.654137,
      172.938699
    ],
    "en": [
      "clock set now one important thing to remember is this the clock set command sets the time in UTC"
    ],
    "ru": [
      "часы устанавливаются сейчас одна важная вещь, которую следует помнить, это то, что команда установки часов устанавливает время в формате UTC"
    ]
  },
  {
    "time": [
      172.938699,
      177.947094
    ],
    "en": [
      "the time zone command we set before only affects how the time is displayed"
    ],
    "ru": [
      "команда часового пояса, которую мы установили ранее, влияет только на то, как отображается время"
    ]
  },
  {
    "time": [
      177.947094,
      183.397802
    ],
    "en": [
      "for example in my case jst is nine hours ahead of UTC"
    ],
    "ru": [
      "например, в моем случае jst на девять часов опережает UTC"
    ]
  },
  {
    "time": [
      183.397802,
      540.0
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
      540.0,
      191.34751
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
      191.34751,
      720.0
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
      720.0,
      195.839094
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
      195.839094,
      540.0
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
      540.0,
      201.241906
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
      201.241906,
      207.45699
    ],
    "en": [
      "I won't set the clock to the current time of my computer since I record the audio and video at separate times"
    ],
    "ru": [
      "Я не буду устанавливать часы на текущее время своего компьютера, так как я записываю аудио и видео в разное время"
    ]
  },
  {
    "time": [
      207.45699,
      213.399156
    ],
    "en": [
      "after clock set we have to enter the time in the format shown here"
    ],
    "ru": [
      "после установки часов мы должны ввести время в формате, показанном здесь"
    ]
  },
  {
    "time": [
      213.399156,
      540.0
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
      540.0,
      220.050718
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
      220.050718,
      226.442489
    ],
    "en": [
      "the next option is the month and date and we can enter them in either order"
    ],
    "ru": [
      "следующая опция - месяц и дата, и мы можем вводить их в любом порядке."
    ]
  },
  {
    "time": [
      226.442489,
      230.583509
    ],
    "en": [
      "aughh 21 for August 21st"
    ],
    "ru": [
      "21 августа по 21 августа"
    ]
  },
  {
    "time": [
      230.583509,
      232.397884
    ],
    "en": [
      "the date I am recording this video"
    ],
    "ru": [
      "дата, когда я записываю это видео"
    ]
  },
  {
    "time": [
      232.397884,
      242.37305
    ],
    "en": [
      "next is the year 2019 and that's it show clock detail"
    ],
    "ru": [
      "следующий год 2019, и он показывает детали часов"
    ]
  },
  {
    "time": [
      242.37305,
      720.0
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
      720.0,
      251.542446
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
      251.542446,
      254.425217
    ],
    "en": [
      "and the time source is now user configuration"
    ],
    "ru": [
      "а источником времени теперь является пользовательская конфигурация"
    ]
  },
  {
    "time": [
      254.425217,
      262.280634
    ],
    "en": [
      "next let's configure our one as an NTP server which our two will sync it's time to"
    ],
    "ru": [
      "Затем давайте настроим наш сервер как NTP-сервер, который наши двое будут синхронизировать, пора"
    ]
  },
  {
    "time": [
      262.280634,
      268.865945
    ],
    "en": [
      "conf t NTP now let's check the options"
    ],
    "ru": [
      "conf t NTP теперь давайте проверим параметры"
    ]
  },
  {
    "time": [
      268.865945,
      271.40182
    ],
    "en": [
      "here's one interesting quirk"
    ],
    "ru": [
      "вот одна интересная причуда"
    ]
  },
  {
    "time": [
      271.40182,
      277.102007
    ],
    "en": [
      "to set this router as an NTP server you don't use the NTP server command"
    ],
    "ru": [
      "чтобы установить этот маршрутизатор в качестве сервера NTP, вы не используете команду сервера NTP"
    ]
  },
  {
    "time": [
      277.102007,
      281.281632
    ],
    "en": [
      "but rather the option above that NTP master"
    ],
    "ru": [
      "а вариант выше этого мастера NTP"
    ]
  },
  {
    "time": [
      281.281632,
      287.805173
    ],
    "en": [
      "NTP server will be used on r2 to identify our one as an NTP server to sink it's time to"
    ],
    "ru": [
      "NTP-сервер будет использоваться на r2, чтобы идентифицировать наш сервер как NTP-сервер, чтобы пора"
    ]
  },
  {
    "time": [
      287.805173,
      298.671381
    ],
    "en": [
      "ok so NTP master and the next option is what's called the stratum level indicating how authoritative the time on this server is"
    ],
    "ru": [
      "Хорошо, так что мастер NTP, и следующая опция - это так называемый уровень страты, указывающий, насколько авторитетным является время на этом сервере"
    ]
  },
  {
    "time": [
      298.671381,
      301.889151
    ],
    "en": [
      "the lower the number the more authoritative"
    ],
    "ru": [
      "чем меньше число, тем авторитетнее"
    ]
  },
  {
    "time": [
      301.889151,
      306.572505
    ],
    "en": [
      "we are instructed however to use the default which will be 8"
    ],
    "ru": [
      "однако мы проинструктированы использовать значение по умолчанию, которое будет 8"
    ]
  },
  {
    "time": [
      306.572505,
      310.370505
    ],
    "en": [
      "to use the default just enter the command as is"
    ],
    "ru": [
      "чтобы использовать значение по умолчанию, просто введите команду как есть"
    ]
  },
  {
    "time": [
      310.370505,
      312.632005
    ],
    "en": [
      "without adding the stratum level at the end"
    ],
    "ru": [
      "без добавления уровня страты в конце"
    ]
  },
  {
    "time": [
      312.632005,
      319.236817
    ],
    "en": [
      "next let's configure our to to sink it's time to r1 using NTP"
    ],
    "ru": [
      "Затем давайте настроим наш to, чтобы он погрузился в r1, используя NTP"
    ]
  },
  {
    "time": [
      319.236817,
      324.468734
    ],
    "en": [
      "enable show clock"
    ],
    "ru": [
      "включить показывать часы"
    ]
  },
  {
    "time": [
      324.468734,
      329.87138
    ],
    "en": [
      "as you can see our twos time is the default and is set to UTC"
    ],
    "ru": [
      "как вы можете видеть, время для двоек установлено по умолчанию и установлено в UTC"
    ]
  },
  {
    "time": [
      329.87138,
      334.378567
    ],
    "en": [
      "first I'll set the time zone to my local time zone jst again"
    ],
    "ru": [
      "сначала я снова установлю часовой пояс на мой местный часовой пояс jst"
    ]
  },
  {
    "time": [
      334.378567,
      338.453921
    ],
    "en": [
      "note that NTP does not sync the time zone"
    ],
    "ru": [
      "обратите внимание, что NTP не синхронизирует часовой пояс"
    ]
  },
  {
    "time": [
      338.453921,
      340.558067
    ],
    "en": [
      "it will sync the time in UTC"
    ],
    "ru": [
      "он синхронизирует время в формате UTC"
    ]
  },
  {
    "time": [
      340.558067,
      345.424087
    ],
    "en": [
      "and then it's up to you to configure which time zone that time is displayed in on your device"
    ],
    "ru": [
      "а затем вам решать, в каком часовом поясе отображается время на вашем устройстве."
    ]
  },
  {
    "time": [
      345.424087,
      353.107357
    ],
    "en": [
      "conf t clock time zone is jst9"
    ],
    "ru": [
      "conf t часовой пояс часов - jst9"
    ]
  },
  {
    "time": [
      353.107357,
      356.747377
    ],
    "en": [
      "ok now let's configure NTP"
    ],
    "ru": [
      "хорошо, теперь давайте настроим NTP"
    ]
  },
  {
    "time": [
      356.747377,
      366.198711
    ],
    "en": [
      "NTP server remember I said I'd use this command on r2 to identify our one as an NTP server to sync our twos time too"
    ],
    "ru": [
      "Сервер NTP помните, я сказал, что использую эту команду на r2, чтобы идентифицировать наш сервер как сервер NTP, чтобы синхронизировать время наших двоих"
    ]
  },
  {
    "time": [
      366.198711,
      371.072523
    ],
    "en": [
      "now we have to set the IP address of the NTP server"
    ],
    "ru": [
      "теперь нам нужно установить IP-адрес NTP-сервера"
    ]
  },
  {
    "time": [
      371.072523,
      377.378856
    ],
    "en": [
      "let's use our ones address 192.168.12.1"
    ],
    "ru": [
      "воспользуемся своим адресом 192.168.12.1"
    ]
  },
  {
    "time": [
      377.378856,
      383.56871
    ],
    "en": [
      "exit now normally I'd use show commands immediately to check the configuration"
    ],
    "ru": [
      "выйти сейчас, как правило, я бы сразу использовал команды show, чтобы проверить конфигурацию"
    ]
  },
  {
    "time": [
      383.56871,
      388.407585
    ],
    "en": [
      "however NTP can take a very long time to synchronize"
    ],
    "ru": [
      "однако для синхронизации NTP может потребоваться очень много времени."
    ]
  },
  {
    "time": [
      388.407585,
      392.24946
    ],
    "en": [
      "for example show clock detail"
    ],
    "ru": [
      "например, показать детали часов"
    ]
  },
  {
    "time": [
      392.24946,
      398.67198
    ],
    "en": [
      "this still shows the time source as Hardware calendar because NTP hasn't finished syncing yet"
    ],
    "ru": [
      "это по-прежнему показывает источник времени как Аппаратный календарь, потому что NTP еще не завершил синхронизацию"
    ]
  },
  {
    "time": [
      398.67198,
      403.242105
    ],
    "en": [
      "in fact I'm gonna cut this video here and wait for NTP to sink"
    ],
    "ru": [
      "на самом деле я собираюсь вырезать это видео здесь и ждать, пока NTP утонет"
    ]
  },
  {
    "time": [
      403.242105,
      409.443063
    ],
    "en": [
      "welcome back artoo has now synced its clock to our one"
    ],
    "ru": [
      "добро пожаловать обратно, artoo синхронизировал свои часы с нашими"
    ]
  },
  {
    "time": [
      409.443063,
      416.161959
    ],
    "en": [
      "show clock detail as you can see the time source is now ntp"
    ],
    "ru": [
      "показать детали часов, поскольку вы можете видеть, что источник времени теперь ntp"
    ]
  },
  {
    "time": [
      416.161959,
      426.290125
    ],
    "en": [
      "show ntp associations 192.168.12.1 is the address of r1 which we set as our ntp server"
    ],
    "ru": [
      "показать ассоциации ntp 192.168.12.1 - это адрес r1, который мы установили в качестве нашего сервера ntp"
    ]
  },
  {
    "time": [
      426.290125,
      432.479205
    ],
    "en": [
      "the reference clock of 127.127.1.1 is our ones reference clock"
    ],
    "ru": [
      "эталонные часы 127.127.1.1 - наши эталонные часы"
    ]
  },
  {
    "time": [
      432.479205,
      439.052829
    ],
    "en": [
      "if you remember when studying about IP addresses the 127 range is for loopback addresses"
    ],
    "ru": [
      "если вы помните, изучая IP-адреса, диапазон 127 предназначен для адресов обратной связи."
    ]
  },
  {
    "time": [
      439.052829,
      441.747349
    ],
    "en": [
      "so this is a loopback address on r1"
    ],
    "ru": [
      "так что это адрес обратной связи на r1"
    ]
  },
  {
    "time": [
      441.747349,
      448.254224
    ],
    "en": [
      "okay now let's configure r3 to sink it's time to r2"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим r3, чтобы он погрузился в r2"
    ]
  },
  {
    "time": [
      448.254224,
      455.496953
    ],
    "en": [
      "enable conf t I'll set the time zone again first"
    ],
    "ru": [
      "enable conf t Сначала я снова установлю часовой пояс"
    ]
  },
  {
    "time": [
      455.496953,
      460.416203
    ],
    "en": [
      "clock time zone is jst9"
    ],
    "ru": [
      "часовой пояс часов jst9"
    ]
  },
  {
    "time": [
      460.416203,
      465.207119
    ],
    "en": [
      "now I'll configure r3 to sync to r2"
    ],
    "ru": [
      "теперь я настрою r3 для синхронизации с r2"
    ]
  },
  {
    "time": [
      465.207119,
      478.311347
    ],
    "en": [
      "NTP server 192.168.23.2 exit now once again I'll cut the video here to give NTP time to synchronize"
    ],
    "ru": [
      "NTP-сервер 192.168.23.2 выйдите сейчас еще раз Я разрежу видео здесь, чтобы дать NTP время для синхронизации"
    ]
  },
  {
    "time": [
      478.311347,
      483.840451
    ],
    "en": [
      "ok our 3 is now synced to r2"
    ],
    "ru": [
      "хорошо, наш 3 теперь синхронизирован с r2"
    ]
  },
  {
    "time": [
      483.840451,
      486.164076
    ],
    "en": [
      "show ntp associations"
    ],
    "ru": [
      "показать ассоциации ntp"
    ]
  },
  {
    "time": [
      486.164076,
      494.362742
    ],
    "en": [
      "here is the address of r2 and it's reference clock is our ones address of 192.168.12.0"
    ],
    "ru": [
      "вот адрес r2, а его опорные часы - это наш адрес 192.168.12.0"
    ]
  },
  {
    "time": [
      494.362742,
      500.70022
    ],
    "en": [
      "this lab"
    ],
    "ru": [
      "эта лаборатория"
    ]
  },
  {
    "time": [
      500.70022,
      507.188928
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
      507.188928,
      510.191324
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
      510.191324,
      511.96874
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
      511.96874,
      516.82922
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
      516.82922,
      525.164449
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm slots Jeremy's IT lab"
    ],
    "ru": [
      "Если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm slots ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      525.164449,
      530.643386
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      530.643386,
      539.223449
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
      539.223449,
      539.223449
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
      539.223449,
      539.223449
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
      539.223449,
      539.223449
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]