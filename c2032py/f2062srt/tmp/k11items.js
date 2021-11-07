let objs = [
  {
    "time": [
      0.0,
      3.922645
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
      3.922645,
      7.564686
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
      7.564686,
      14.926853
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
      14.926853,
      21.221978
    ],
    "en": [
      "in this lab we will once again configure NTP Network Time Protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы еще раз настроим протокол сетевого времени NTP."
    ]
  },
  {
    "time": [
      21.221978,
      32.913395
    ],
    "en": [
      "unlike last lab however we will also configure authentication to ensure that our routers r2 and r3 only sing to a trusted time source r1"
    ],
    "ru": [
      "Однако в отличие от предыдущей лабораторной работы мы также настроим аутентификацию, чтобы наши маршрутизаторы r2 и r3 работали только с надежным источником времени r1."
    ]
  },
  {
    "time": [
      32.913395,
      38.404103
    ],
    "en": [
      "first we will once again configure the time zone and time on r1"
    ],
    "ru": [
      "сначала мы еще раз настроим часовой пояс и время на r1"
    ]
  },
  {
    "time": [
      38.404103,
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
      45.170999
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
      45.170999,
      51.153332
    ],
    "en": [
      "remember the clock set command we are going to use sets the timing UTC"
    ],
    "ru": [
      "помните, что команда установки часов, которую мы собираемся использовать, устанавливает время по Гринвичу"
    ]
  },
  {
    "time": [
      51.153332,
      58.944915
    ],
    "en": [
      "my time zone is nine hours ahead of UTC so I have to set the time to nine hours behind what I actually want the time to be"
    ],
    "ru": [
      "мой часовой пояс на девять часов опережает всемирное координированное время, поэтому я должен установить время на девять часов позже, чем я действительно хочу, чтобы время было"
    ]
  },
  {
    "time": [
      58.944915,
      69.048831
    ],
    "en": [
      "clock set 12 o'clock August 22nd 2019"
    ],
    "ru": [
      "часы установлены на 12 часов 22 августа 2019 г."
    ]
  },
  {
    "time": [
      69.048831,
      71.486269
    ],
    "en": [
      "now let's set the time zone"
    ],
    "ru": [
      "теперь давайте установим часовой пояс"
    ]
  },
  {
    "time": [
      71.486269,
      77.235914
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
      77.235914,
      80.224393
    ],
    "en": [
      "now let's configure NTP"
    ],
    "ru": [
      "теперь настроим NTP"
    ]
  },
  {
    "time": [
      80.224393,
      86.092747
    ],
    "en": [
      "first I'll configure it as an NTP server with a default stratum level which is 8"
    ],
    "ru": [
      "сначала я настрою его как NTP-сервер с уровнем слоя по умолчанию, равным 8"
    ]
  },
  {
    "time": [
      86.092747,
      92.528351
    ],
    "en": [
      "NTP master now let's set up NTP authentication"
    ],
    "ru": [
      "Мастер NTP теперь давайте настроим аутентификацию NTP"
    ]
  },
  {
    "time": [
      92.528351,
      97.253622
    ],
    "en": [
      "the first command is NTP authenticate"
    ],
    "ru": [
      "первая команда - аутентификация NTP"
    ]
  },
  {
    "time": [
      97.253622,
      99.739976
    ],
    "en": [
      "now we have to set up two keys"
    ],
    "ru": [
      "теперь нам нужно настроить два ключа"
    ]
  },
  {
    "time": [
      99.739976,
      102.546142
    ],
    "en": [
      "one for r2 and one for r3"
    ],
    "ru": [
      "один для r2 и один для r3"
    ]
  },
  {
    "time": [
      102.546142,
      108.562288
    ],
    "en": [
      "we could actually use a single key for both routers but the instructions say to use two"
    ],
    "ru": [
      "на самом деле мы могли бы использовать один ключ для обоих маршрутизаторов, но в инструкциях говорится, что нужно использовать два"
    ]
  },
  {
    "time": [
      108.562288,
      123.456183
    ],
    "en": [
      "to make a key we use this command NTP authentication key followed by the key number one md5 then the key string Cisco 1"
    ],
    "ru": [
      "чтобы создать ключ, мы используем эту команду ключ аутентификации NTP, за которой следует номер ключа один md5, затем строка ключа Cisco 1"
    ]
  },
  {
    "time": [
      123.456183,
      126.493558
    ],
    "en": [
      "now let's create key number two as well"
    ],
    "ru": [
      "теперь давайте также создадим ключ номер два"
    ]
  },
  {
    "time": [
      126.493558,
      133.443745
    ],
    "en": [
      "NTP authentication key to md5 cisco2"
    ],
    "ru": [
      "Ключ аутентификации NTP для md5 cisco2"
    ]
  },
  {
    "time": [
      133.443745,
      138.160432
    ],
    "en": [
      "we're not done yet however let's configure these as trusted keys"
    ],
    "ru": [
      "мы еще не закончили, но давайте настроим их как доверенные ключи"
    ]
  },
  {
    "time": [
      138.160432,
      144.831682
    ],
    "en": [
      "ntp trusted key 1 ntp trusted key 2"
    ],
    "ru": [
      "доверенный ключ ntp 1 доверенный ключ ntp 2"
    ]
  },
  {
    "time": [
      144.831682,
      149.298369
    ],
    "en": [
      "ok we have completed the configuration on r1"
    ],
    "ru": [
      "хорошо, мы завершили настройку на r1"
    ]
  },
  {
    "time": [
      149.298369,
      153.18266
    ],
    "en": [
      "now let's set up r2"
    ],
    "ru": [
      "теперь давайте настроим r2"
    ]
  },
  {
    "time": [
      153.18266,
      161.924929
    ],
    "en": [
      "enable conf t clock time zones JST 9"
    ],
    "ru": [
      "включить настройку часов часовых поясов JST 9"
    ]
  },
  {
    "time": [
      161.924929,
      165.688783
    ],
    "en": [
      "remember ntp doesn't sync the time zone"
    ],
    "ru": [
      "помните, что ntp не синхронизирует часовой пояс"
    ]
  },
  {
    "time": [
      165.688783,
      169.529137
    ],
    "en": [
      "so we still have to configure which time zone we want to display the time in"
    ],
    "ru": [
      "поэтому нам все еще нужно настроить, в каком часовом поясе мы хотим отображать время в"
    ]
  },
  {
    "time": [
      169.529137,
      175.23422
    ],
    "en": [
      "now let's setup NTP authentication and then set r1 as the server"
    ],
    "ru": [
      "теперь давайте настроим аутентификацию NTP, а затем установим r1 в качестве сервера"
    ]
  },
  {
    "time": [
      175.23422,
      186.13874
    ],
    "en": [
      "NTP authenticate NTP authentication key 1 md5 Cisco 1"
    ],
    "ru": [
      "NTP аутентификация ключ аутентификации NTP 1 md5 Cisco 1"
    ]
  },
  {
    "time": [
      186.13874,
      190.09472
    ],
    "en": [
      "NTP trusted key 1"
    ],
    "ru": [
      "Доверенный ключ NTP 1"
    ]
  },
  {
    "time": [
      190.09472,
      196.73997
    ],
    "en": [
      "now to set R 1 as the server we have to add something to the command we used in the previous lab"
    ],
    "ru": [
      "теперь, чтобы установить R 1 в качестве сервера, мы должны добавить что-то к команде, которую мы использовали в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      196.73997,
      204.303282
    ],
    "en": [
      "NTP server 192.168.12.1 key 1"
    ],
    "ru": [
      "NTP-сервер 192.168.12.1 ключ 1"
    ]
  },
  {
    "time": [
      204.303282,
      209.435657
    ],
    "en": [
      "we add key followed by the key number to the end of the command"
    ],
    "ru": [
      "мы добавляем ключ, за которым следует номер ключа, в конец команды"
    ]
  },
  {
    "time": [
      209.435657,
      215.878261
    ],
    "en": [
      "as I mentioned in the previous lab NTP can take some time to synchronize"
    ],
    "ru": [
      "как я упоминал в предыдущей лабораторной работе, для синхронизации NTP может потребоваться некоторое время."
    ]
  },
  {
    "time": [
      215.878261,
      220.334448
    ],
    "en": [
      "I'm going to configure r3 first before we check on r2"
    ],
    "ru": [
      "Я собираюсь сначала настроить r3, прежде чем мы проверим r2"
    ]
  },
  {
    "time": [
      220.334448,
      224.049302
    ],
    "en": [
      "then I'll cut the video and wait for everything to synchronize"
    ],
    "ru": [
      "потом нарежу видео и жду пока все синхронизируется"
    ]
  },
  {
    "time": [
      224.049302,
      245.827135
    ],
    "en": [
      "enable conf t clock time zone jst 9 NTP authenticate NTP authentication to md5 Cisco 2 NTP trusted key 2"
    ],
    "ru": [
      "enable conf t clock time zone jst 9 NTP аутентифицировать аутентификацию NTP на md5 Cisco 2 NTP доверенный ключ 2"
    ]
  },
  {
    "time": [
      245.827135,
      252.737196
    ],
    "en": [
      "NTP server 192.168.13.1 key 2"
    ],
    "ru": [
      "NTP-сервер 192.168.13.1 ключ 2"
    ]
  },
  {
    "time": [
      252.737196,
      259.514946
    ],
    "en": [
      "now that the configuration is complete I'll cut the video and wait for the time to synchronize"
    ],
    "ru": [
      "теперь, когда настройка завершена, я вырежу видео и дождусь времени для синхронизации"
    ]
  },
  {
    "time": [
      259.514946,
      264.897862
    ],
    "en": [
      "okay we're back"
    ],
    "ru": [
      "хорошо мы вернулись"
    ]
  },
  {
    "time": [
      264.897862,
      266.933966
    ],
    "en": [
      "let's check if everything is good on r2"
    ],
    "ru": [
      "проверим все ли хорошо на r2"
    ]
  },
  {
    "time": [
      266.933966,
      270.039153
    ],
    "en": [
      "show clock detail"
    ],
    "ru": [
      "показать детали часов"
    ]
  },
  {
    "time": [
      270.039153,
      272.401132
    ],
    "en": [
      "time sources NTP looks good"
    ],
    "ru": [
      "источники времени NTP выглядит хорошо"
    ]
  },
  {
    "time": [
      272.401132,
      277.031507
    ],
    "en": [
      "show NTP associations"
    ],
    "ru": [
      "показать ассоциации NTP"
    ]
  },
  {
    "time": [
      277.031507,
      281.702777
    ],
    "en": [
      "we are synched to r one 192.168.12.1"
    ],
    "ru": [
      "мы синхронизированы с r one 192.168.12.1"
    ]
  },
  {
    "time": [
      281.702777,
      289.364172
    ],
    "en": [
      "its reference clock is a loopback address on r one 127.127.1.1 and it's stratum level is eight"
    ],
    "ru": [
      "его опорные часы - это адрес обратной связи на r one 127.127.1.1, а его уровень слоя - восемь"
    ]
  },
  {
    "time": [
      289.364172,
      293.952817
    ],
    "en": [
      "note the asterisk and the tilled on the Left"
    ],
    "ru": [
      "обратите внимание на звездочку и пашню слева"
    ]
  },
  {
    "time": [
      293.952817,
      297.914129
    ],
    "en": [
      "the tilde indicates that this association has been configured"
    ],
    "ru": [
      "тильда указывает, что эта ассоциация была настроена"
    ]
  },
  {
    "time": [
      297.914129,
      301.819921
    ],
    "en": [
      "and the asterisk essentially means that we're synced to the pier"
    ],
    "ru": [
      "а звездочка означает, что мы синхронизированы с причалом"
    ]
  },
  {
    "time": [
      301.819921,
      307.202733
    ],
    "en": [
      "now let's check on r3 show clock detail"
    ],
    "ru": [
      "теперь давайте проверим на r3 показать детали часов"
    ]
  },
  {
    "time": [
      307.202733,
      314.631587
    ],
    "en": [
      "again time sources NTP show NTP associations"
    ],
    "ru": [
      "снова источники времени NTP показывают ассоциации NTP"
    ]
  },
  {
    "time": [
      314.631587,
      319.824628
    ],
    "en": [
      "our server is r1 at 192.168.13.1"
    ],
    "ru": [
      "наш сервер r1 по адресу 192.168.13.1"
    ]
  },
  {
    "time": [
      319.824628,
      323.74542
    ],
    "en": [
      "and again notice the asterisk and tilled on the Left"
    ],
    "ru": [
      "и снова обратите внимание на звездочку и отметку слева"
    ]
  },
  {
    "time": [
      323.74542,
      327.180253
    ],
    "en": [
      "we have successfully synchronized the time with NTP"
    ],
    "ru": [
      "мы успешно синхронизировали время с NTP"
    ]
  },
  {
    "time": [
      327.180253,
      329.049919
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
      329.049919,
      334.573856
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
      334.573856,
      339.602169
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
      339.602169,
      344.212189
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
      344.212189,
      352.705105
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      352.705105,
      358.19075
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
      358.19075,
      366.710042
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
      366.710042,
      366.710042
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
      366.710042,
      366.710042
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
      366.710042,
      366.710042
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]