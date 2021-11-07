let objs = [
  {
    "time": [
      0.0,
      2.0
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
      2.0,
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
      "description in this lab we will once"
    ],
    "ru": [
      "описание в этой лаборатории мы однажды"
    ]
  },
  {
    "time": [
      17.0,
      20.0
    ],
    "en": [
      "again configure NTP Network Time"
    ],
    "ru": [
      "снова настроить NTP Network Time"
    ]
  },
  {
    "time": [
      20.0,
      24.0
    ],
    "en": [
      "Protocol unlike last lab however we will"
    ],
    "ru": [
      "Протокол в отличие от предыдущей лаборатории, однако мы будем"
    ]
  },
  {
    "time": [
      24.0,
      27.0
    ],
    "en": [
      "also configure authentication to ensure"
    ],
    "ru": [
      "также настройте аутентификацию, чтобы гарантировать"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "that our routers r2 and r3 only sing to"
    ],
    "ru": [
      "что наши маршрутизаторы r2 и r3 поют только для"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "a trusted time source r1"
    ],
    "ru": [
      "надежный источник времени r1"
    ]
  },
  {
    "time": [
      33.0,
      35.0
    ],
    "en": [
      "first we will once again configure the"
    ],
    "ru": [
      "сначала мы еще раз настроим"
    ]
  },
  {
    "time": [
      35.0,
      41.0
    ],
    "en": [
      "time zone and time on r1 unable I'll set"
    ],
    "ru": [
      "часовой пояс и время на r1 не могу установить"
    ]
  },
  {
    "time": [
      41.0,
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
      44.0
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
      44.0,
      47.0
    ],
    "en": [
      "previous lab remember the clock set"
    ],
    "ru": [
      "предыдущая лаборатория запомните набор часов"
    ]
  },
  {
    "time": [
      47.0,
      49.0
    ],
    "en": [
      "command we are going to use sets the"
    ],
    "ru": [
      "команда, которую мы собираемся использовать, устанавливает"
    ]
  },
  {
    "time": [
      49.0,
      53.0
    ],
    "en": [
      "timing UTC my time zone is nine hours"
    ],
    "ru": [
      "время UTC, мой часовой пояс девять часов"
    ]
  },
  {
    "time": [
      53.0,
      55.0
    ],
    "en": [
      "ahead of UTC so I have to set the time"
    ],
    "ru": [
      "впереди UTC, поэтому я должен установить время"
    ]
  },
  {
    "time": [
      55.0,
      57.0
    ],
    "en": [
      "to nine hours behind what I actually"
    ],
    "ru": [
      "на девять часов отстает от того, что я на самом деле"
    ]
  },
  {
    "time": [
      57.0,
      64.0
    ],
    "en": [
      "want the time to be clock set 12 o'clock"
    ],
    "ru": [
      "хочу, чтобы время было установлено на 12 часов"
    ]
  },
  {
    "time": [
      64.0,
      70.0
    ],
    "en": [
      "August 22nd 2019 now let's set the time"
    ],
    "ru": [
      "22 августа 2019 теперь давайте установим время"
    ]
  },
  {
    "time": [
      70.0,
      71.0
    ],
    "en": [
      "zone"
    ],
    "ru": [
      "зона"
    ]
  },
  {
    "time": [
      71.0,
      78.0
    ],
    "en": [
      "comte clock time zone is t9 now let's"
    ],
    "ru": [
      "часовой пояс comte clock - t9, теперь давайте"
    ]
  },
  {
    "time": [
      78.0,
      82.0
    ],
    "en": [
      "configure NTP first I'll configure it as"
    ],
    "ru": [
      "сначала настройте NTP, я настрою его как"
    ]
  },
  {
    "time": [
      82.0,
      84.0
    ],
    "en": [
      "an NTP server with a default stratum"
    ],
    "ru": [
      "NTP-сервер со слоем по умолчанию"
    ]
  },
  {
    "time": [
      84.0,
      90.0
    ],
    "en": [
      "level which is 8 NTP master now let's"
    ],
    "ru": [
      "уровень, который является 8-м мастером NTP, теперь давайте"
    ]
  },
  {
    "time": [
      90.0,
      93.0
    ],
    "en": [
      "set up NTP authentication the first"
    ],
    "ru": [
      "настроить аутентификацию NTP первым"
    ]
  },
  {
    "time": [
      93.0,
      98.0
    ],
    "en": [
      "command is NTP authenticate now we have"
    ],
    "ru": [
      "команда - это NTP-аутентификация, теперь у нас есть"
    ]
  },
  {
    "time": [
      98.0,
      101.0
    ],
    "en": [
      "to set up two keys one for r2 and one"
    ],
    "ru": [
      "настроить два ключа один для r2 и один"
    ]
  },
  {
    "time": [
      101.0,
      104.0
    ],
    "en": [
      "for r3 we could actually use a single"
    ],
    "ru": [
      "для r3 мы могли бы использовать один"
    ]
  },
  {
    "time": [
      104.0,
      106.0
    ],
    "en": [
      "key for both routers but the"
    ],
    "ru": [
      "ключ для обоих маршрутизаторов, но"
    ]
  },
  {
    "time": [
      106.0,
      109.0
    ],
    "en": [
      "instructions say to use two to make a"
    ],
    "ru": [
      "инструкции говорят использовать два, чтобы сделать"
    ]
  },
  {
    "time": [
      109.0,
      113.0
    ],
    "en": [
      "key we use this command NTP"
    ],
    "ru": [
      "ключ мы используем эту команду NTP"
    ]
  },
  {
    "time": [
      113.0,
      117.0
    ],
    "en": [
      "authentication key followed by the key"
    ],
    "ru": [
      "ключ аутентификации, за которым следует ключ"
    ]
  },
  {
    "time": [
      117.0,
      122.0
    ],
    "en": [
      "number one md5 then the key string Cisco"
    ],
    "ru": [
      "номер один md5, затем строка ключей Cisco"
    ]
  },
  {
    "time": [
      122.0,
      125.0
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
      125.0
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
      125.0,
      132.0
    ],
    "en": [
      "well NTP authentication key to md5"
    ],
    "ru": [
      "ну ключ аутентификации NTP к md5"
    ]
  },
  {
    "time": [
      132.0,
      135.0
    ],
    "en": [
      "go to we're not done yet however let's"
    ],
    "ru": [
      "идти мы еще не закончили, но давайте"
    ]
  },
  {
    "time": [
      135.0,
      139.0
    ],
    "en": [
      "configure these as trusted keys ntp"
    ],
    "ru": [
      "настроить их как доверенные ключи ntp"
    ]
  },
  {
    "time": [
      139.0,
      146.0
    ],
    "en": [
      "trusted key 1 ntp trusted key - ok we"
    ],
    "ru": [
      "доверенный ключ 1 доверенный ключ NTP - хорошо, мы"
    ]
  },
  {
    "time": [
      146.0,
      150.0
    ],
    "en": [
      "have completed the configuration on r1"
    ],
    "ru": [
      "завершили настройку на r1"
    ]
  },
  {
    "time": [
      150.0,
      157.0
    ],
    "en": [
      "now let's set up our to enable compte"
    ],
    "ru": [
      "теперь давайте настроим наш, чтобы включить compte"
    ]
  },
  {
    "time": [
      157.0,
      163.0
    ],
    "en": [
      "clock time zones AST 9 remember ntp"
    ],
    "ru": [
      "часы часовые пояса AST 9 запомнить ntp"
    ]
  },
  {
    "time": [
      163.0,
      166.0
    ],
    "en": [
      "doesn't sync the time zone so we still"
    ],
    "ru": [
      "не синхронизирует часовой пояс, поэтому мы по-прежнему"
    ]
  },
  {
    "time": [
      166.0,
      167.0
    ],
    "en": [
      "have to configure which time zone we"
    ],
    "ru": [
      "нужно настроить, в каком часовом поясе мы"
    ]
  },
  {
    "time": [
      167.0,
      171.0
    ],
    "en": [
      "want to display the time in now let's"
    ],
    "ru": [
      "хочу отобразить время сейчас давайте"
    ]
  },
  {
    "time": [
      171.0,
      173.0
    ],
    "en": [
      "setup NTP authentication and then set r1"
    ],
    "ru": [
      "настройте аутентификацию NTP, а затем установите r1"
    ]
  },
  {
    "time": [
      173.0,
      180.0
    ],
    "en": [
      "as the server NTP authenticate NTP"
    ],
    "ru": [
      "как сервер NTP аутентифицирует NTP"
    ]
  },
  {
    "time": [
      180.0,
      187.0
    ],
    "en": [
      "authentication key 1 md5 Cisco 1 NTP"
    ],
    "ru": [
      "ключ аутентификации 1 md5 Cisco 1 NTP"
    ]
  },
  {
    "time": [
      187.0,
      192.0
    ],
    "en": [
      "trusted key 1 now to set R 1 as the"
    ],
    "ru": [
      "доверенный ключ 1, чтобы установить R 1 как"
    ]
  },
  {
    "time": [
      192.0,
      194.0
    ],
    "en": [
      "server we have to add something to the"
    ],
    "ru": [
      "сервер, мы должны добавить что-то в"
    ]
  },
  {
    "time": [
      194.0,
      198.0
    ],
    "en": [
      "command we used in the previous lab NTP"
    ],
    "ru": [
      "команда, которую мы использовали в предыдущей лабораторной работе NTP"
    ]
  },
  {
    "time": [
      198.0,
      205.0
    ],
    "en": [
      "server 192.168 12.1 key 1 we add key"
    ],
    "ru": [
      "сервер 192.168 12.1 ключ 1 добавляем ключ"
    ]
  },
  {
    "time": [
      205.0,
      208.0
    ],
    "en": [
      "followed by the key number to the end of"
    ],
    "ru": [
      "за которым следует номер ключа до конца"
    ]
  },
  {
    "time": [
      208.0,
      212.0
    ],
    "en": [
      "the command as I mentioned in the"
    ],
    "ru": [
      "команда, как я упоминал в"
    ]
  },
  {
    "time": [
      212.0,
      214.0
    ],
    "en": [
      "previous lab NTP can take some time to"
    ],
    "ru": [
      "предыдущая лабораторная работа NTP может занять некоторое время, чтобы"
    ]
  },
  {
    "time": [
      214.0,
      217.0
    ],
    "en": [
      "synchronize I'm going to configure r3"
    ],
    "ru": [
      "синхронизировать собираюсь настроить r3"
    ]
  },
  {
    "time": [
      217.0,
      219.0
    ],
    "en": [
      "first before we check on r2"
    ],
    "ru": [
      "сначала, прежде чем мы проверим r2"
    ]
  },
  {
    "time": [
      219.0,
      222.0
    ],
    "en": [
      "then I'll cut the video and wait for"
    ],
    "ru": [
      "тогда я вырежу видео и буду ждать"
    ]
  },
  {
    "time": [
      222.0,
      228.0
    ],
    "en": [
      "everything to synchronize enable compte"
    ],
    "ru": [
      "все для синхронизации включить комп"
    ]
  },
  {
    "time": [
      228.0,
      235.0
    ],
    "en": [
      "clock time zone jst 9 NTP authenticate"
    ],
    "ru": [
      "часы часовой пояс jst 9 NTP аутентификация"
    ]
  },
  {
    "time": [
      235.0,
      243.0
    ],
    "en": [
      "NTP authentication to md5 Cisco to NTP"
    ],
    "ru": [
      "Аутентификация NTP для md5 Cisco для NTP"
    ]
  },
  {
    "time": [
      243.0,
      251.0
    ],
    "en": [
      "trusted key to NTP server 192.168.1 key"
    ],
    "ru": [
      "доверенный ключ к серверу NTP ключ 192.168.1"
    ]
  },
  {
    "time": [
      251.0,
      255.0
    ],
    "en": [
      "to now that the configuration is"
    ],
    "ru": [
      "до сих пор, когда конфигурация"
    ]
  },
  {
    "time": [
      255.0,
      258.0
    ],
    "en": [
      "complete I'll cut the video and wait for"
    ],
    "ru": [
      "готово я вырежу видео и буду ждать"
    ]
  },
  {
    "time": [
      258.0,
      262.0
    ],
    "en": [
      "the time to synchronize"
    ],
    "ru": [
      "время для синхронизации"
    ]
  },
  {
    "time": [
      262.0,
      265.0
    ],
    "en": [
      "okay we're back let's check if"
    ],
    "ru": [
      "хорошо, мы вернулись, давайте проверим, если"
    ]
  },
  {
    "time": [
      265.0,
      268.0
    ],
    "en": [
      "everything is good on our to show clock"
    ],
    "ru": [
      "на наших часах все хорошо"
    ]
  },
  {
    "time": [
      268.0,
      274.0
    ],
    "en": [
      "detail time sources NTP looks good show"
    ],
    "ru": [
      "подробно источники времени NTP выглядит хорошо показать"
    ]
  },
  {
    "time": [
      274.0,
      278.0
    ],
    "en": [
      "NTP associations we are synched to our"
    ],
    "ru": [
      "Ассоциации NTP, которые мы синхронизируем с нашими"
    ]
  },
  {
    "time": [
      278.0,
      283.0
    ],
    "en": [
      "one 192.168.1.1 its reference clock is a"
    ],
    "ru": [
      "один 192.168.1.1 его эталонные часы - это"
    ]
  },
  {
    "time": [
      283.0,
      285.0
    ],
    "en": [
      "loopback address on our one one two 7.1"
    ],
    "ru": [
      "адрес обратной связи на нашем один один два 7.1"
    ]
  },
  {
    "time": [
      285.0,
      290.0
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
      285.0,
      290.0
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
      290.0,
      293.0
    ],
    "en": [
      "note the asterisk and the tilled on the"
    ],
    "ru": [
      "обратите внимание на звездочку и отметку на"
    ]
  },
  {
    "time": [
      293.0,
      295.0
    ],
    "en": [
      "Left the tilde indicates that this"
    ],
    "ru": [
      "Слева тильда означает, что это"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "association has been configured and the"
    ],
    "ru": [
      "ассоциация была настроена, и"
    ]
  },
  {
    "time": [
      298.0,
      300.0
    ],
    "en": [
      "asterisk essentially means that we're"
    ],
    "ru": [
      "звездочка означает, что мы"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "synced to the pier now let's check on"
    ],
    "ru": [
      "синхронизирован с пирсом, теперь давайте проверим"
    ]
  },
  {
    "time": [
      303.0,
      309.0
    ],
    "en": [
      "our three show clock detail again time"
    ],
    "ru": [
      "наши три показывают детали часов снова время"
    ]
  },
  {
    "time": [
      309.0,
      315.0
    ],
    "en": [
      "sources NTP show NTP associations our"
    ],
    "ru": [
      "источники NTP показывают ассоциации NTP наши"
    ]
  },
  {
    "time": [
      315.0,
      320.0
    ],
    "en": [
      "server is r1 at 192.168.1 and again"
    ],
    "ru": [
      "сервер r1 на 192.168.1 и снова"
    ]
  },
  {
    "time": [
      320.0,
      322.0
    ],
    "en": [
      "notice the asterisk and tilled on the"
    ],
    "ru": [
      "обратите внимание на звездочку и отметьте на"
    ]
  },
  {
    "time": [
      322.0,
      325.0
    ],
    "en": [
      "Left we have successfully synchronized"
    ],
    "ru": [
      "Осталось мы успешно синхронизировались"
    ]
  },
  {
    "time": [
      325.0,
      328.0
    ],
    "en": [
      "the time with NTP that's all for this"
    ],
    "ru": [
      "время с NTP это все для этого"
    ]
  },
  {
    "time": [
      328.0,
      332.0
    ],
    "en": [
      "lab thank you for watching I hope this"
    ],
    "ru": [
      "лаборатория спасибо за просмотр надеюсь это"
    ]
  },
  {
    "time": [
      332.0,
      334.0
    ],
    "en": [
      "lab and video have been helpful for you"
    ],
    "ru": [
      "лаборатория и видео были вам полезны"
    ]
  },
  {
    "time": [
      334.0,
      336.0
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
      336.0,
      339.0
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
      339.0,
      341.0
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
      341.0,
      345.0
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
      345.0,
      347.0
    ],
    "en": [
      "you want to support my channel please"
    ],
    "ru": [
      "вы хотите поддержать мой канал, пожалуйста"
    ]
  },
  {
    "time": [
      347.0,
      349.0
    ],
    "en": [
      "consider contributing to my patreon"
    ],
    "ru": [
      "подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      349.0,
      353.0
    ],
    "en": [
      "patreon comm slash Jeremy's IT lab I"
    ],
    "ru": [
      "patreon comm слэш ИТ-лаборатория Джереми I"
    ]
  },
  {
    "time": [
      353.0,
      356.0
    ],
    "en": [
      "accept Bitcoin and aetherium donations"
    ],
    "ru": [
      "принимать пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      356.0,
      358.0
    ],
    "en": [
      "via the addresses in the description I"
    ],
    "ru": [
      "по адресам в описании I"
    ]
  },
  {
    "time": [
      358.0,
      361.0
    ],
    "en": [
      "am also a brave verified publisher and"
    ],
    "ru": [
      "я также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      361.0,
      364.0
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
      364.0,
      364.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]