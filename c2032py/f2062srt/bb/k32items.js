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
      "description in this lab we will"
    ],
    "ru": [
      "описание в этой лаборатории мы будем"
    ]
  },
  {
    "time": [
      17.0,
      19.0
    ],
    "en": [
      "configure the system clock including the"
    ],
    "ru": [
      "настроить системные часы, включая"
    ]
  },
  {
    "time": [
      19.0,
      21.0
    ],
    "en": [
      "timezone as well as Network Time"
    ],
    "ru": [
      "часовой пояс, а также время в сети"
    ]
  },
  {
    "time": [
      21.0,
      26.0
    ],
    "en": [
      "Protocol or NTP on three routers this"
    ],
    "ru": [
      "Протокол или NTP на трех роутерах это"
    ]
  },
  {
    "time": [
      26.0,
      27.0
    ],
    "en": [
      "lab will only cover the absolute basics"
    ],
    "ru": [
      "лаборатория будет охватывать только самые основы"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "of NTP configuration and in the"
    ],
    "ru": [
      "конфигурации NTP и в"
    ]
  },
  {
    "time": [
      30.0,
      32.0
    ],
    "en": [
      "following lab we will configure NTP"
    ],
    "ru": [
      "В следующей лабораторной работе мы настроим NTP"
    ]
  },
  {
    "time": [
      32.0,
      36.0
    ],
    "en": [
      "authentication NTP is used to"
    ],
    "ru": [
      "аутентификация NTP используется для"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "synchronize time across devices it's"
    ],
    "ru": [
      "синхронизировать время между устройствами, это"
    ]
  },
  {
    "time": [
      39.0,
      41.0
    ],
    "en": [
      "very important to have synchronized time"
    ],
    "ru": [
      "очень важно иметь синхронизированное время"
    ]
  },
  {
    "time": [
      41.0,
      44.0
    ],
    "en": [
      "for a variety of reasons for example to"
    ],
    "ru": [
      "по разным причинам, например, чтобы"
    ]
  },
  {
    "time": [
      44.0,
      46.0
    ],
    "en": [
      "help identify when a particular problem"
    ],
    "ru": [
      "помочь определить, когда возникает конкретная проблема"
    ]
  },
  {
    "time": [
      46.0,
      48.0
    ],
    "en": [
      "occurred when looking through logs on a"
    ],
    "ru": [
      "произошло при просмотре журналов на"
    ]
  },
  {
    "time": [
      48.0,
      52.0
    ],
    "en": [
      "device in this lab we will manually"
    ],
    "ru": [
      "устройство в этой лаборатории мы будем вручную"
    ]
  },
  {
    "time": [
      52.0,
      55.0
    ],
    "en": [
      "configure the time on r1 and then use it"
    ],
    "ru": [
      "настройте время на r1, а затем используйте его"
    ]
  },
  {
    "time": [
      55.0,
      58.0
    ],
    "en": [
      "as an NTP server for r2 to sync it's"
    ],
    "ru": [
      "в качестве NTP-сервера для r2, чтобы синхронизировать его"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "time - we will then configure r3 to sync"
    ],
    "ru": [
      "время - затем мы настроим r3 для синхронизации"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "it's time to r2 and our network devices"
    ],
    "ru": [
      "пора r2 и наши сетевые устройства"
    ]
  },
  {
    "time": [
      64.0,
      68.0
    ],
    "en": [
      "will have synchronized time first let's"
    ],
    "ru": [
      "сначала будет синхронизировано время, давайте"
    ]
  },
  {
    "time": [
      68.0,
      74.0
    ],
    "en": [
      "set the clock on r1 enable show clock"
    ],
    "ru": [
      "установить часы на r1 включить показывать часы"
    ]
  },
  {
    "time": [
      74.0,
      77.0
    ],
    "en": [
      "this command is used to display the time"
    ],
    "ru": [
      "эта команда используется для отображения времени"
    ]
  },
  {
    "time": [
      77.0,
      80.0
    ],
    "en": [
      "of the device this is the default time"
    ],
    "ru": [
      "устройства это время по умолчанию"
    ]
  },
  {
    "time": [
      80.0,
      82.0
    ],
    "en": [
      "but where is it getting this time"
    ],
    "ru": [
      "но откуда он берется на этот раз"
    ]
  },
  {
    "time": [
      82.0,
      86.0
    ],
    "en": [
      "here's another useful command show clock"
    ],
    "ru": [
      "вот еще одна полезная команда show clock"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "detail now we can see the time source"
    ],
    "ru": [
      "подробно теперь мы можем увидеть источник времени"
    ]
  },
  {
    "time": [
      89.0,
      93.0
    ],
    "en": [
      "which is the hardware calendar Cisco"
    ],
    "ru": [
      "это аппаратный календарь Cisco"
    ]
  },
  {
    "time": [
      93.0,
      95.0
    ],
    "en": [
      "devices have a hardware calendar built"
    ],
    "ru": [
      "устройства имеют встроенный календарь оборудования"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "into them and as you can see it is being"
    ],
    "ru": [
      "в них, и, как вы можете видеть, это"
    ]
  },
  {
    "time": [
      97.0,
      101.0
    ],
    "en": [
      "used by default let's change that first"
    ],
    "ru": [
      "используется по умолчанию, давайте сначала изменим это"
    ]
  },
  {
    "time": [
      101.0,
      105.0
    ],
    "en": [
      "let's set the time zone which is UTC by"
    ],
    "ru": [
      "давайте установим часовой пояс, который является UTC, на"
    ]
  },
  {
    "time": [
      105.0,
      108.0
    ],
    "en": [
      "default this is done from global"
    ],
    "ru": [
      "по умолчанию это делается из глобального"
    ]
  },
  {
    "time": [
      108.0,
      113.0
    ],
    "en": [
      "configuration mode compte clock time"
    ],
    "ru": [
      "режим конфигурации время вычислений"
    ]
  },
  {
    "time": [
      113.0,
      117.0
    ],
    "en": [
      "zone now let's check the next option we"
    ],
    "ru": [
      "зона теперь давайте проверим следующий вариант, который мы"
    ]
  },
  {
    "time": [
      117.0,
      119.0
    ],
    "en": [
      "have to enter the name of the time zone"
    ],
    "ru": [
      "необходимо ввести название часового пояса"
    ]
  },
  {
    "time": [
      119.0,
      121.0
    ],
    "en": [
      "I'm in Japan"
    ],
    "ru": [
      "Я в японии"
    ]
  },
  {
    "time": [
      121.0,
      125.0
    ],
    "en": [
      "so I'll set it to jst now let's check"
    ],
    "ru": [
      "поэтому я установил его на jst, теперь давайте проверим"
    ]
  },
  {
    "time": [
      125.0,
      130.0
    ],
    "en": [
      "the next option hours offset from UTC in"
    ],
    "ru": [
      "следующий вариант смещения часов от UTC в"
    ]
  },
  {
    "time": [
      130.0,
      133.0
    ],
    "en": [
      "my case jst is 9 hours ahead"
    ],
    "ru": [
      "мой кейс jst на 9 часов впереди"
    ]
  },
  {
    "time": [
      133.0,
      138.0
    ],
    "en": [
      "of UTC so 9 the next option is minutes"
    ],
    "ru": [
      "UTC, поэтому 9 следующий вариант - минуты"
    ]
  },
  {
    "time": [
      138.0,
      141.0
    ],
    "en": [
      "offset from UTC which is zero in my case"
    ],
    "ru": [
      "смещение от UTC, которое в моем случае равно нулю"
    ]
  },
  {
    "time": [
      141.0,
      143.0
    ],
    "en": [
      "so I'll just leave them in it's option"
    ],
    "ru": [
      "так что я просто оставлю их в этом варианте"
    ]
  },
  {
    "time": [
      143.0,
      148.0
    ],
    "en": [
      "edit do show clock now as you can see"
    ],
    "ru": [
      "редактировать показывать часы сейчас, как вы можете видеть"
    ]
  },
  {
    "time": [
      148.0,
      150.0
    ],
    "en": [
      "the time has changed and the time zone"
    ],
    "ru": [
      "время изменилось и часовой пояс"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "has changed now let's set the time"
    ],
    "ru": [
      "изменилось теперь давайте установим время"
    ]
  },
  {
    "time": [
      153.0,
      154.0
    ],
    "en": [
      "itself"
    ],
    "ru": [
      "сам"
    ]
  },
  {
    "time": [
      154.0,
      156.0
    ],
    "en": [
      "to do this we have to go back to"
    ],
    "ru": [
      "чтобы сделать это, мы должны вернуться к"
    ]
  },
  {
    "time": [
      156.0,
      160.0
    ],
    "en": [
      "privileged exec mode exit we can set the"
    ],
    "ru": [
      "привилегированный выход из режима exec, мы можем установить"
    ]
  },
  {
    "time": [
      160.0,
      166.0
    ],
    "en": [
      "time with this command clock set now one"
    ],
    "ru": [
      "время с этими часами команды установлено сейчас одно"
    ]
  },
  {
    "time": [
      166.0,
      169.0
    ],
    "en": [
      "important thing to remember is this the"
    ],
    "ru": [
      "важно помнить, что это"
    ]
  },
  {
    "time": [
      169.0,
      172.0
    ],
    "en": [
      "clock set command sets the time in UTC"
    ],
    "ru": [
      "Команда clock set устанавливает время в формате UTC"
    ]
  },
  {
    "time": [
      172.0,
      175.0
    ],
    "en": [
      "the time zone command we set before only"
    ],
    "ru": [
      "команда часового пояса, которую мы установили только раньше"
    ]
  },
  {
    "time": [
      175.0,
      178.0
    ],
    "en": [
      "affects how the time is displayed for"
    ],
    "ru": [
      "влияет на отображение времени для"
    ]
  },
  {
    "time": [
      178.0,
      181.0
    ],
    "en": [
      "example in my case jst is nine hours"
    ],
    "ru": [
      "пример в моем случае jst - девять часов"
    ]
  },
  {
    "time": [
      181.0,
      185.0
    ],
    "en": [
      "ahead of UTC so if I want to set the"
    ],
    "ru": [
      "впереди UTC, поэтому, если я хочу установить"
    ]
  },
  {
    "time": [
      185.0,
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
      189.0
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
      189.0,
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
      190.0
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
      190.0,
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
      194.0
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
      194.0,
      199.0
    ],
    "en": [
      "jst for this video I'll do that set the"
    ],
    "ru": [
      "jst для этого видео я сделаю это, установив"
    ]
  },
  {
    "time": [
      199.0,
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
      202.0
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
      202.0,
      204.0
    ],
    "en": [
      "clock to the current time of my computer"
    ],
    "ru": [
      "часы на текущее время моего компьютера"
    ]
  },
  {
    "time": [
      204.0,
      206.0
    ],
    "en": [
      "since I record the audio and video at"
    ],
    "ru": [
      "так как я записываю аудио и видео на"
    ]
  },
  {
    "time": [
      206.0,
      210.0
    ],
    "en": [
      "separate times after clock set we have"
    ],
    "ru": [
      "отдельные времена после установки часов у нас есть"
    ]
  },
  {
    "time": [
      210.0,
      212.0
    ],
    "en": [
      "to enter the time in the format shown"
    ],
    "ru": [
      "для ввода времени в показанном формате"
    ]
  },
  {
    "time": [
      212.0,
      217.0
    ],
    "en": [
      "here twelve o'clock is what I have to"
    ],
    "ru": [
      "здесь двенадцать часов это то, что я должен"
    ]
  },
  {
    "time": [
      217.0,
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
      221.0
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
      221.0,
      224.0
    ],
    "en": [
      "next option is the month and date and we"
    ],
    "ru": [
      "следующий вариант - месяц и число, и мы"
    ]
  },
  {
    "time": [
      224.0,
      226.0
    ],
    "en": [
      "can enter them in either order"
    ],
    "ru": [
      "можно вводить их в любом порядке"
    ]
  },
  {
    "time": [
      226.0,
      230.0
    ],
    "en": [
      "aughh 21 for August 21st the date I am"
    ],
    "ru": [
      "21 августа по 21 августа в день, когда я"
    ]
  },
  {
    "time": [
      230.0,
      232.0
    ],
    "en": [
      "recording this video"
    ],
    "ru": [
      "запись этого видео"
    ]
  },
  {
    "time": [
      232.0,
      239.0
    ],
    "en": [
      "next is the year 2019 and that's it"
    ],
    "ru": [
      "следующий год 2019 и все"
    ]
  },
  {
    "time": [
      239.0,
      244.0
    ],
    "en": [
      "show clock detail as you can see I"
    ],
    "ru": [
      "показать детали часов, как вы можете видеть I"
    ]
  },
  {
    "time": [
      244.0,
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
      246.0
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
      246.0,
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
      249.0
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
      249.0,
      252.0
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
      249.0,
      252.0
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
      252.0,
      256.0
    ],
    "en": [
      "now user configuration next let's"
    ],
    "ru": [
      "теперь пользовательская конфигурация дальше давайте"
    ]
  },
  {
    "time": [
      256.0,
      260.0
    ],
    "en": [
      "configure our one as an NTP server which"
    ],
    "ru": [
      "настройте наш как NTP-сервер, который"
    ]
  },
  {
    "time": [
      260.0,
      264.0
    ],
    "en": [
      "our two will sync it's time to call 50"
    ],
    "ru": [
      "наши двое синхронизируются, пора звонить 50"
    ]
  },
  {
    "time": [
      264.0,
      266.0
    ],
    "en": [
      "NTP"
    ],
    "ru": [
      "NTP"
    ]
  },
  {
    "time": [
      266.0,
      269.0
    ],
    "en": [
      "now let's check the options here's one"
    ],
    "ru": [
      "теперь давайте проверим варианты вот один"
    ]
  },
  {
    "time": [
      269.0,
      272.0
    ],
    "en": [
      "interesting quirk to set this router as"
    ],
    "ru": [
      "интересная причуда установить этот роутер как"
    ]
  },
  {
    "time": [
      272.0,
      275.0
    ],
    "en": [
      "an NTP server you don't use the NTP"
    ],
    "ru": [
      "NTP-сервер, вы не используете NTP"
    ]
  },
  {
    "time": [
      275.0,
      278.0
    ],
    "en": [
      "server command but rather the option"
    ],
    "ru": [
      "серверная команда, а скорее опция"
    ]
  },
  {
    "time": [
      278.0,
      282.0
    ],
    "en": [
      "above that NTP master NTP server will be"
    ],
    "ru": [
      "выше этот главный NTP-сервер NTP будет"
    ]
  },
  {
    "time": [
      282.0,
      285.0
    ],
    "en": [
      "used on r2 to identify our one as an NTP"
    ],
    "ru": [
      "используется на r2, чтобы идентифицировать наш как NTP"
    ]
  },
  {
    "time": [
      285.0,
      290.0
    ],
    "en": [
      "server to sink it's time to ok so NTP"
    ],
    "ru": [
      "сервер потопить, пора ОК, так что NTP"
    ]
  },
  {
    "time": [
      290.0,
      293.0
    ],
    "en": [
      "master and the next option is what's"
    ],
    "ru": [
      "мастер, а следующий вариант - что"
    ]
  },
  {
    "time": [
      293.0,
      296.0
    ],
    "en": [
      "called the stratum level indicating how"
    ],
    "ru": [
      "называется уровнем страты, указывающим, как"
    ]
  },
  {
    "time": [
      296.0,
      298.0
    ],
    "en": [
      "authoritative the time on this server is"
    ],
    "ru": [
      "авторитетное время на этом сервере"
    ]
  },
  {
    "time": [
      298.0,
      300.0
    ],
    "en": [
      "the lower the number the more"
    ],
    "ru": [
      "чем меньше число, тем больше"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "authoritative we are instructed however"
    ],
    "ru": [
      "авторитетный, мы проинструктированы, однако"
    ]
  },
  {
    "time": [
      303.0,
      307.0
    ],
    "en": [
      "to use the default which will be 8 to"
    ],
    "ru": [
      "использовать значение по умолчанию, которое будет от 8 до"
    ]
  },
  {
    "time": [
      307.0,
      309.0
    ],
    "en": [
      "use the default just enter the command"
    ],
    "ru": [
      "используйте значение по умолчанию, просто введите команду"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "as is without adding the stratum level"
    ],
    "ru": [
      "как есть без добавления уровня страты"
    ]
  },
  {
    "time": [
      311.0,
      315.0
    ],
    "en": [
      "at the end next let's configure our to"
    ],
    "ru": [
      "в конце давайте настроим наш"
    ]
  },
  {
    "time": [
      315.0,
      322.0
    ],
    "en": [
      "to sink it's time to r1 using NTP enable"
    ],
    "ru": [
      "Пришло время утопить r1 с помощью NTP enable"
    ]
  },
  {
    "time": [
      322.0,
      326.0
    ],
    "en": [
      "show clock as you can see our twos time"
    ],
    "ru": [
      "покажи часы, как ты видишь время наших двоих"
    ]
  },
  {
    "time": [
      326.0,
      330.0
    ],
    "en": [
      "is the default and is set to UTC first"
    ],
    "ru": [
      "является значением по умолчанию и сначала устанавливается в UTC."
    ]
  },
  {
    "time": [
      330.0,
      332.0
    ],
    "en": [
      "I'll set the time zone to my local time"
    ],
    "ru": [
      "Я установлю часовой пояс на свое местное время"
    ]
  },
  {
    "time": [
      332.0,
      337.0
    ],
    "en": [
      "zone jst again note that NTP does not"
    ],
    "ru": [
      "zone jst еще раз обратите внимание, что NTP не"
    ]
  },
  {
    "time": [
      337.0,
      339.0
    ],
    "en": [
      "sync the time zone it will sync the time"
    ],
    "ru": [
      "синхронизировать часовой пояс, он синхронизирует время"
    ]
  },
  {
    "time": [
      339.0,
      341.0
    ],
    "en": [
      "in UTC and then it's up to you to"
    ],
    "ru": [
      "в UTC, а затем решать вам"
    ]
  },
  {
    "time": [
      341.0,
      343.0
    ],
    "en": [
      "configure which time zone that time is"
    ],
    "ru": [
      "настроить, в каком часовом поясе это время"
    ]
  },
  {
    "time": [
      343.0,
      348.0
    ],
    "en": [
      "displayed in on your device compte clock"
    ],
    "ru": [
      "отображается в часах вашего устройства"
    ]
  },
  {
    "time": [
      348.0,
      354.0
    ],
    "en": [
      "time zone is t9 ok now let's configure"
    ],
    "ru": [
      "часовой пояс t9 хорошо, теперь давайте настроим"
    ]
  },
  {
    "time": [
      354.0,
      360.0
    ],
    "en": [
      "NTP NTP server remember I said I'd use"
    ],
    "ru": [
      "NTP Сервер NTP помните, я сказал, что буду использовать"
    ]
  },
  {
    "time": [
      360.0,
      362.0
    ],
    "en": [
      "this command on r2 to identify our one"
    ],
    "ru": [
      "эта команда на r2, чтобы идентифицировать наш"
    ]
  },
  {
    "time": [
      362.0,
      365.0
    ],
    "en": [
      "as an NTP server to sync our twos time"
    ],
    "ru": [
      "как NTP-сервер для синхронизации времени наших двоих"
    ]
  },
  {
    "time": [
      365.0,
      369.0
    ],
    "en": [
      "to now we have to set the IP address of"
    ],
    "ru": [
      "теперь мы должны установить IP-адрес"
    ]
  },
  {
    "time": [
      369.0,
      372.0
    ],
    "en": [
      "the NTP server let's use our ones"
    ],
    "ru": [
      "сервер NTP давайте использовать наши"
    ]
  },
  {
    "time": [
      372.0,
      380.0
    ],
    "en": [
      "address 192.168.1.1 exit now normally"
    ],
    "ru": [
      "адрес 192.168.1.1 теперь выходим нормально"
    ]
  },
  {
    "time": [
      380.0,
      382.0
    ],
    "en": [
      "I'd use show commands immediately to"
    ],
    "ru": [
      "Я бы сразу использовал команды show, чтобы"
    ]
  },
  {
    "time": [
      382.0,
      385.0
    ],
    "en": [
      "check the configuration however NTP can"
    ],
    "ru": [
      "проверьте конфигурацию, однако NTP может"
    ]
  },
  {
    "time": [
      385.0,
      388.0
    ],
    "en": [
      "take a very long time to synchronize for"
    ],
    "ru": [
      "требуется очень много времени для синхронизации"
    ]
  },
  {
    "time": [
      388.0,
      393.0
    ],
    "en": [
      "example show clock detail this still"
    ],
    "ru": [
      "пример показать детали часов это еще"
    ]
  },
  {
    "time": [
      393.0,
      394.0
    ],
    "en": [
      "shows the time source as Hardware"
    ],
    "ru": [
      "показывает источник времени как Аппаратное обеспечение"
    ]
  },
  {
    "time": [
      394.0,
      397.0
    ],
    "en": [
      "calendar because NTP hasn't finished"
    ],
    "ru": [
      "календарь, потому что NTP не завершен"
    ]
  },
  {
    "time": [
      397.0,
      398.0
    ],
    "en": [
      "syncing yet"
    ],
    "ru": [
      "синхронизация еще"
    ]
  },
  {
    "time": [
      398.0,
      401.0
    ],
    "en": [
      "in fact I'm gonna cut this video here"
    ],
    "ru": [
      "на самом деле я собираюсь вырезать это видео здесь"
    ]
  },
  {
    "time": [
      401.0,
      406.0
    ],
    "en": [
      "and wait for NTP to sink welcome back"
    ],
    "ru": [
      "и подождите, пока NTP утонет, добро пожаловать обратно"
    ]
  },
  {
    "time": [
      406.0,
      408.0
    ],
    "en": [
      "artoo has now synced its clock to our"
    ],
    "ru": [
      "artoo синхронизировал свои часы с нашим"
    ]
  },
  {
    "time": [
      408.0,
      413.0
    ],
    "en": [
      "one show clock detail as you can see the"
    ],
    "ru": [
      "одна деталь показа часов, как вы можете видеть"
    ]
  },
  {
    "time": [
      413.0,
      417.0
    ],
    "en": [
      "time source is now ntp show ntp"
    ],
    "ru": [
      "источник времени теперь ntp show ntp"
    ]
  },
  {
    "time": [
      417.0,
      423.0
    ],
    "en": [
      "associations 192.168 12.1 is the address"
    ],
    "ru": [
      "ассоциации 192.168 12.1 это адрес"
    ]
  },
  {
    "time": [
      423.0,
      427.0
    ],
    "en": [
      "of r1 which we set as our ntp server the"
    ],
    "ru": [
      "из r1, который мы установили в качестве нашего ntp-сервера,"
    ]
  },
  {
    "time": [
      427.0,
      430.0
    ],
    "en": [
      "reference clock of 1 to 7.1 to 7.1.1 is"
    ],
    "ru": [
      "опорные часы от 1 до 7.1 до 7.1.1"
    ]
  },
  {
    "time": [
      430.0,
      434.0
    ],
    "en": [
      "our ones reference clock if you remember"
    ],
    "ru": [
      "наши эталонные часы, если вы помните"
    ]
  },
  {
    "time": [
      434.0,
      436.0
    ],
    "en": [
      "when studying about IP addresses the 1"
    ],
    "ru": [
      "при изучении IP-адресов 1"
    ]
  },
  {
    "time": [
      436.0,
      439.0
    ],
    "en": [
      "to 7 range is for loopback addresses so"
    ],
    "ru": [
      "диапазон до 7 предназначен для адресов обратной связи, поэтому"
    ]
  },
  {
    "time": [
      439.0,
      444.0
    ],
    "en": [
      "this is a loopback address on r1 okay"
    ],
    "ru": [
      "это адрес обратной связи на r1, хорошо"
    ]
  },
  {
    "time": [
      444.0,
      447.0
    ],
    "en": [
      "now let's configure r3 to sink it's time"
    ],
    "ru": [
      "теперь давайте настроим r3, чтобы пора тонуть"
    ]
  },
  {
    "time": [
      447.0,
      454.0
    ],
    "en": [
      "to are to enable coffee tea I'll set the"
    ],
    "ru": [
      "чтобы включить кофе-чай, я установлю"
    ]
  },
  {
    "time": [
      454.0,
      459.0
    ],
    "en": [
      "time zone again first clock time zone is"
    ],
    "ru": [
      "часовой пояс снова первый часовой пояс часов"
    ]
  },
  {
    "time": [
      459.0,
      464.0
    ],
    "en": [
      "t9 now I'll configure r3 to sync to our"
    ],
    "ru": [
      "t9 сейчас я настрою r3 для синхронизации с нашим"
    ]
  },
  {
    "time": [
      464.0,
      474.0
    ],
    "en": [
      "to NTP server 192.168 23.2 exit now once"
    ],
    "ru": [
      "к серверу NTP 192.168 23.2 выйти сейчас один раз"
    ]
  },
  {
    "time": [
      474.0,
      476.0
    ],
    "en": [
      "again I'll cut the video here to give"
    ],
    "ru": [
      "снова я разрежу видео здесь, чтобы дать"
    ]
  },
  {
    "time": [
      476.0,
      482.0
    ],
    "en": [
      "NTP time to synchronize ok our 3 is now"
    ],
    "ru": [
      "Время NTP для синхронизации ОК, наше 3 сейчас"
    ]
  },
  {
    "time": [
      482.0,
      486.0
    ],
    "en": [
      "synced to our to show ntp associations"
    ],
    "ru": [
      "синхронизировано с нашим, чтобы показать ассоциации ntp"
    ]
  },
  {
    "time": [
      486.0,
      489.0
    ],
    "en": [
      "here is the address of r2 and it's"
    ],
    "ru": [
      "вот адрес r2, и это"
    ]
  },
  {
    "time": [
      489.0,
      491.0
    ],
    "en": [
      "reference clock is our ones address of"
    ],
    "ru": [
      "референсные часы - это наш адрес"
    ]
  },
  {
    "time": [
      491.0,
      505.0
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
      505.0
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
      505.0,
      508.0
    ],
    "en": [
      "helpful for you please subscribe for"
    ],
    "ru": [
      "полезно для вас, пожалуйста, подпишитесь на"
    ]
  },
  {
    "time": [
      508.0,
      510.0
    ],
    "en": [
      "future labs like this which will be"
    ],
    "ru": [
      "будущие лаборатории, подобные этой, которые будут"
    ]
  },
  {
    "time": [
      510.0,
      513.0
    ],
    "en": [
      "released weekly if you have requests for"
    ],
    "ru": [
      "выпускается еженедельно, если у вас есть запросы на"
    ]
  },
  {
    "time": [
      513.0,
      515.0
    ],
    "en": [
      "any specific labs let me know in the"
    ],
    "ru": [
      "любые конкретные лаборатории дайте мне знать в"
    ]
  },
  {
    "time": [
      515.0,
      518.0
    ],
    "en": [
      "comments section if you want to support"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      518.0,
      519.0
    ],
    "en": [
      "my channel please consider contributing"
    ],
    "ru": [
      "мой канал, пожалуйста, рассмотрите возможность участия"
    ]
  },
  {
    "time": [
      519.0,
      523.0
    ],
    "en": [
      "to my patreon patreon comm slots"
    ],
    "ru": [
      "в мой патреон патреон комм-слоты"
    ]
  },
  {
    "time": [
      523.0,
      527.0
    ],
    "en": [
      "Jeremy's IT lab I accept Bitcoin and"
    ],
    "ru": [
      "ИТ-лаборатория Джереми Я принимаю биткойны и"
    ]
  },
  {
    "time": [
      527.0,
      529.0
    ],
    "en": [
      "aetherium donations via the addresses in"
    ],
    "ru": [
      "пожертвования эфириума через адреса в"
    ]
  },
  {
    "time": [
      529.0,
      530.0
    ],
    "en": [
      "the description"
    ],
    "ru": [
      "описание"
    ]
  },
  {
    "time": [
      530.0,
      533.0
    ],
    "en": [
      "I am also a brave verified publisher and"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      533.0,
      536.0
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
      536.0,
      536.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]