let objs = [
  {
    "time": [
      0.0,
      4.795145
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
      4.795145,
      7.979686
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
      7.979686,
      16.680582
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
      16.680582,
      19.929311
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
      19.929311,
      26.04079
    ],
    "en": [
      "in this lab we will troubleshoot PPP the point-to-point protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы будем устранять неполадки PPP протокола точка-точка"
    ]
  },
  {
    "time": [
      26.04079,
      31.344623
    ],
    "en": [
      "I took the topology from the last lab and added two more pairs of routers"
    ],
    "ru": [
      "Я взял топологию из последней лабораторной работы и добавил еще две пары маршрутизаторов."
    ]
  },
  {
    "time": [
      31.344623,
      36.188415
    ],
    "en": [
      "so r1 and r3 are authenticated using pap"
    ],
    "ru": [
      "поэтому r1 и r3 аутентифицируются с помощью pap"
    ]
  },
  {
    "time": [
      36.188415,
      40.149686
    ],
    "en": [
      "and r2 and r4 are authenticating using chap"
    ],
    "ru": [
      "и r2 и r4 аутентифицируются с помощью chap"
    ]
  },
  {
    "time": [
      40.149686,
      44.467019
    ],
    "en": [
      "however there is one miss configuration on each of them"
    ],
    "ru": [
      "однако на каждом из них есть одна конфигурация промаха"
    ]
  },
  {
    "time": [
      44.467019,
      46.953582
    ],
    "en": [
      "which is preventing PPP from working"
    ],
    "ru": [
      "что мешает PPP работать"
    ]
  },
  {
    "time": [
      46.953582,
      50.131644
    ],
    "en": [
      "let's go one by one and find the issues"
    ],
    "ru": [
      "пойдем один за другим и найдем проблемы"
    ]
  },
  {
    "time": [
      50.131644,
      54.203915
    ],
    "en": [
      "let's start on r1"
    ],
    "ru": [
      "давай начнем на r1"
    ]
  },
  {
    "time": [
      54.203915,
      60.067975
    ],
    "en": [
      "enable show interfaces s0 0"
    ],
    "ru": [
      "включить показ интерфейсов s0 0"
    ]
  },
  {
    "time": [
      60.067975,
      64.927537
    ],
    "en": [
      "so the correct encapsulation PPP is used"
    ],
    "ru": [
      "поэтому используется правильный PPP инкапсуляции"
    ]
  },
  {
    "time": [
      64.927537,
      67.233226
    ],
    "en": [
      "however the interface is up-down"
    ],
    "ru": [
      "однако интерфейс вверх-вниз"
    ]
  },
  {
    "time": [
      67.233226,
      71.274421
    ],
    "en": [
      "now r1 should have a username packet"
    ],
    "ru": [
      "теперь у r1 должен быть пакет имени пользователя"
    ]
  },
  {
    "time": [
      71.274421,
      73.340553
    ],
    "en": [
      "and a password tracer configured"
    ],
    "ru": [
      "и настроен трассировщик паролей"
    ]
  },
  {
    "time": [
      73.340553,
      76.727967
    ],
    "en": [
      "which SP r1 will use to authenticate"
    ],
    "ru": [
      "какой SP r1 будет использовать для аутентификации"
    ]
  },
  {
    "time": [
      76.727967,
      77.901699
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
      77.901699,
      79.671005
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      79.671005,
      84.023885
    ],
    "en": [
      "there it is so no problems there"
    ],
    "ru": [
      "там так нет проблем"
    ]
  },
  {
    "time": [
      84.023885,
      90.346641
    ],
    "en": [
      "now is r1 sending the correct username Cisco and password CCNA - SPR one"
    ],
    "ru": [
      "теперь r1 отправляет правильное имя пользователя Cisco и пароль CCNA - SPR one"
    ]
  },
  {
    "time": [
      90.346641,
      93.399929
    ],
    "en": [
      "looks like it isn't"
    ],
    "ru": [
      "похоже, что это не так"
    ]
  },
  {
    "time": [
      93.399929,
      99.027862
    ],
    "en": [
      "the PPP PAP sent username password command isn't configured"
    ],
    "ru": [
      "команда PPP PAP отправила имя пользователя и пароль не настроена"
    ]
  },
  {
    "time": [
      99.027862,
      100.60517
    ],
    "en": [
      "let's go fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      100.60517,
      105.847869
    ],
    "en": [
      "compte interface s0 0"
    ],
    "ru": [
      "compte интерфейс s0 0"
    ]
  },
  {
    "time": [
      105.847869,
      107.843043
    ],
    "en": [
      "shutdown"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      107.843043,
      114.2338
    ],
    "en": [
      "PPP PAP sent a username cisco password CCNA"
    ],
    "ru": [
      "PPP PAP отправил имя пользователя cisco, пароль CCNA"
    ]
  },
  {
    "time": [
      114.2338,
      116.227124
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      116.227124,
      120.233149
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      120.233149,
      123.978667
    ],
    "en": [
      "ok the interface is up up"
    ],
    "ru": [
      "хорошо, интерфейс работает"
    ]
  },
  {
    "time": [
      123.978667,
      126.475804
    ],
    "en": [
      "let's try to ping SP r1"
    ],
    "ru": [
      "попробуем пинговать SP r1"
    ]
  },
  {
    "time": [
      126.475804,
      130.485778
    ],
    "en": [
      "do ping 100 Oh Oh 1"
    ],
    "ru": [
      "сделать пинг 100 ой ой 1"
    ]
  },
  {
    "time": [
      130.485778,
      135.719001
    ],
    "en": [
      "okay looks like it works now"
    ],
    "ru": [
      "хорошо, похоже, теперь это работает"
    ]
  },
  {
    "time": [
      135.719001,
      138.038695
    ],
    "en": [
      "so we've solved the problem on our one"
    ],
    "ru": [
      "Итак, мы решили проблему на нашем"
    ]
  },
  {
    "time": [
      138.038695,
      145.147038
    ],
    "en": [
      "now let's check out our three which is also configured to use PPP with PAP"
    ],
    "ru": [
      "теперь давайте проверим нашу тройку, которая также настроена на использование PPP с PAP"
    ]
  },
  {
    "time": [
      145.147038,
      150.140179
    ],
    "en": [
      "enable show interfaces s0 0"
    ],
    "ru": [
      "включить показ интерфейсов s0 0"
    ]
  },
  {
    "time": [
      150.140179,
      155.251823
    ],
    "en": [
      "again correct encapsulation but the interface is up down"
    ],
    "ru": [
      "снова правильная инкапсуляция, но интерфейс не работает"
    ]
  },
  {
    "time": [
      155.251823,
      163.669368
    ],
    "en": [
      "our three should have a user named CCNA and a password CCENT configure which SP our three will use to authenticate"
    ],
    "ru": [
      "у наших троих должен быть пользователь с именем CCNA и пароль, который CCENT настраивает, какой SP будет использовать наши трое для аутентификации."
    ]
  },
  {
    "time": [
      163.669368,
      164.763405
    ],
    "en": [
      "let's check for that"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      164.763405,
      166.995635
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      166.995635,
      176.491958
    ],
    "en": [
      "there it is is it sending the username Cisco and password CCNP to SP r3 to authenticate"
    ],
    "ru": [
      "вот он, он отправляет имя пользователя Cisco и пароль CCNP в SP r3 для аутентификации"
    ]
  },
  {
    "time": [
      176.491958,
      179.801987
    ],
    "en": [
      "yes it is so what's the issue"
    ],
    "ru": [
      "да, так в чем проблема"
    ]
  },
  {
    "time": [
      179.801987,
      182.210731
    ],
    "en": [
      "it's the line right above here"
    ],
    "ru": [
      "это линия прямо вверху здесь"
    ]
  },
  {
    "time": [
      182.210731,
      185.419356
    ],
    "en": [
      "PPP authentication chap"
    ],
    "ru": [
      "Глава об аутентификации PPP"
    ]
  },
  {
    "time": [
      185.419356,
      190.953705
    ],
    "en": [
      "r3 is supposed to be using PAP not chap authentication"
    ],
    "ru": [
      "r3 должен использовать аутентификацию PAP, а не chap"
    ]
  },
  {
    "time": [
      190.953705,
      194.959028
    ],
    "en": [
      "coffee tea interface s0 0"
    ],
    "ru": [
      "кофе чай интерфейс s0 0"
    ]
  },
  {
    "time": [
      194.959028,
      200.547802
    ],
    "en": [
      "shut down no PPP authentication chap"
    ],
    "ru": [
      "выключить без аутентификации PPP глава"
    ]
  },
  {
    "time": [
      200.547802,
      204.072465
    ],
    "en": [
      "PPP authentication PAP"
    ],
    "ru": [
      "Аутентификация PPP PAP"
    ]
  },
  {
    "time": [
      204.072465,
      206.08586
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      206.08586,
      209.587046
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      209.587046,
      212.82568
    ],
    "en": [
      "ok the interface is up up"
    ],
    "ru": [
      "хорошо, интерфейс работает"
    ]
  },
  {
    "time": [
      212.82568,
      216.059824
    ],
    "en": [
      "let's try a ping to SPR 3"
    ],
    "ru": [
      "попробуем пинг до SPR 3"
    ]
  },
  {
    "time": [
      216.059824,
      221.261489
    ],
    "en": [
      "do ping 1 3000 won"
    ],
    "ru": [
      "do ping 1 3000 вон"
    ]
  },
  {
    "time": [
      221.261489,
      225.24654
    ],
    "en": [
      "great it works"
    ],
    "ru": [
      "отлично работает"
    ]
  },
  {
    "time": [
      225.24654,
      228.86616
    ],
    "en": [
      "next let's go to our to"
    ],
    "ru": [
      "дальше пойдем к нашему"
    ]
  },
  {
    "time": [
      228.86616,
      234.443112
    ],
    "en": [
      "enable show interfaces s0 0"
    ],
    "ru": [
      "включить показ интерфейсов s0 0"
    ]
  },
  {
    "time": [
      234.443112,
      237.001995
    ],
    "en": [
      "same situation"
    ],
    "ru": [
      "Такая же ситуация"
    ]
  },
  {
    "time": [
      237.001995,
      239.207477
    ],
    "en": [
      "correct encapsulation PPP"
    ],
    "ru": [
      "правильная инкапсуляция PPP"
    ]
  },
  {
    "time": [
      239.207477,
      240.973845
    ],
    "en": [
      "but the interface isn't up"
    ],
    "ru": [
      "но интерфейс не работает"
    ]
  },
  {
    "time": [
      240.973845,
      244.621223
    ],
    "en": [
      "r2 is configured to use chap authentication"
    ],
    "ru": [
      "r2 настроен на использование аутентификации chap"
    ]
  },
  {
    "time": [
      244.621223,
      249.615636
    ],
    "en": [
      "so it should have a user account configure with the username SP r2"
    ],
    "ru": [
      "поэтому у него должна быть учетная запись пользователя, настроенная с именем пользователя SP r2"
    ]
  },
  {
    "time": [
      249.615636,
      253.791556
    ],
    "en": [
      "which is the host of the router sorry the host name of the router at the other end"
    ],
    "ru": [
      "который является хостом маршрутизатора, извините, имя хоста маршрутизатора на другом конце"
    ]
  },
  {
    "time": [
      253.791556,
      256.189006
    ],
    "en": [
      "and a password of CCNA"
    ],
    "ru": [
      "и пароль CCNA"
    ]
  },
  {
    "time": [
      256.189006,
      260.413803
    ],
    "en": [
      "which must be identical to the password configured on SPR to"
    ],
    "ru": [
      "который должен совпадать с паролем, настроенным на SPR для"
    ]
  },
  {
    "time": [
      260.413803,
      262.617619
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      262.617619,
      268.113641
    ],
    "en": [
      "username r2 password CCNA"
    ],
    "ru": [
      "имя пользователя r2 пароль CCNA"
    ]
  },
  {
    "time": [
      268.113641,
      270.277405
    ],
    "en": [
      "there's the problem"
    ],
    "ru": [
      "вот проблема"
    ]
  },
  {
    "time": [
      270.277405,
      272.438071
    ],
    "en": [
      "it's configured with its own host name"
    ],
    "ru": [
      "он настроен с собственным именем хоста"
    ]
  },
  {
    "time": [
      272.438071,
      275.139196
    ],
    "en": [
      "but it should be SPR to s host name"
    ],
    "ru": [
      "но это должно быть SPR для имени хоста"
    ]
  },
  {
    "time": [
      275.139196,
      277.193426
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
      277.193426,
      282.77587
    ],
    "en": [
      "no user name are two passwords CCNA"
    ],
    "ru": [
      "нет имени пользователя два пароля CCNA"
    ]
  },
  {
    "time": [
      282.77587,
      288.064462
    ],
    "en": [
      "username SPR two password CCNA"
    ],
    "ru": [
      "имя пользователя SPR два пароля CCNA"
    ]
  },
  {
    "time": [
      288.064462,
      291.148813
    ],
    "en": [
      "now I'll go reset the interface"
    ],
    "ru": [
      "сейчас пойду сбросить интерфейс"
    ]
  },
  {
    "time": [
      291.148813,
      293.431292
    ],
    "en": [
      "interface s00"
    ],
    "ru": [
      "интерфейс s00"
    ]
  },
  {
    "time": [
      293.431292,
      297.437543
    ],
    "en": [
      "shutdown no shutdown"
    ],
    "ru": [
      "выключение нет выключения"
    ]
  },
  {
    "time": [
      297.437543,
      301.930991
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      301.930991,
      305.599015
    ],
    "en": [
      "okay it's up up now"
    ],
    "ru": [
      "хорошо сейчас"
    ]
  },
  {
    "time": [
      305.599015,
      307.826867
    ],
    "en": [
      "let's try a ping"
    ],
    "ru": [
      "давай попробуем пинг"
    ]
  },
  {
    "time": [
      307.826867,
      312.418021
    ],
    "en": [
      "do ping 200 0.1"
    ],
    "ru": [
      "сделать пинг 200 0,1"
    ]
  },
  {
    "time": [
      312.418021,
      317.762464
    ],
    "en": [
      "okay looks like r2 is working now"
    ],
    "ru": [
      "ладно похоже, что R2 сейчас работает"
    ]
  },
  {
    "time": [
      317.762464,
      320.809294
    ],
    "en": [
      "finally let's go to r4"
    ],
    "ru": [
      "наконец-то пойдем на r4"
    ]
  },
  {
    "time": [
      320.809294,
      327.291486
    ],
    "en": [
      "enable show interfaces s0 0"
    ],
    "ru": [
      "включить показ интерфейсов s0 0"
    ]
  },
  {
    "time": [
      327.291486,
      330.773833
    ],
    "en": [
      "encapsulation PPP is correct"
    ],
    "ru": [
      "инкапсуляция PPP верна"
    ]
  },
  {
    "time": [
      330.773833,
      332.818793
    ],
    "en": [
      "but the interface is down"
    ],
    "ru": [
      "но интерфейс не работает"
    ]
  },
  {
    "time": [
      332.818793,
      337.666804
    ],
    "en": [
      "like r2 r4 ship using chap authentication"
    ],
    "ru": [
      "как r2 r4 корабль с аутентификацией парня"
    ]
  },
  {
    "time": [
      337.666804,
      344.13513
    ],
    "en": [
      "so it should have a username s PR for password CCIE configured"
    ],
    "ru": [
      "поэтому он должен иметь PR имени пользователя для пароля CCIE, настроенного"
    ]
  },
  {
    "time": [
      344.13513,
      348.449553
    ],
    "en": [
      "s PR for being the host name of the other router it's connected to"
    ],
    "ru": [
      "s PR за то, что это имя хоста другого маршрутизатора, к которому он подключен"
    ]
  },
  {
    "time": [
      348.449553,
      350.332423
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      350.332423,
      353.83777
    ],
    "en": [
      "ok that looks correct"
    ],
    "ru": [
      "хорошо, выглядит правильно"
    ]
  },
  {
    "time": [
      353.83777,
      356.838923
    ],
    "en": [
      "let's check the interface configuration"
    ],
    "ru": [
      "давайте проверим конфигурацию интерфейса"
    ]
  },
  {
    "time": [
      356.838923,
      361.608765
    ],
    "en": [
      "ok we're missing something here"
    ],
    "ru": [
      "хорошо, мы что-то упускаем"
    ]
  },
  {
    "time": [
      361.608765,
      365.638703
    ],
    "en": [
      "the PPP authentication chap statement is missing"
    ],
    "ru": [
      "утверждение главы аутентификации PPP отсутствует"
    ]
  },
  {
    "time": [
      365.638703,
      369.644674
    ],
    "en": [
      "coffee tea interface s 0 0"
    ],
    "ru": [
      "кофе чай интерфейс s 0 0"
    ]
  },
  {
    "time": [
      369.644674,
      374.639634
    ],
    "en": [
      "shutdown PPP authentication chap"
    ],
    "ru": [
      "выключение аутентификации PPP глава"
    ]
  },
  {
    "time": [
      374.639634,
      376.652027
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      376.652027,
      380.945097
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      380.945097,
      385.448996
    ],
    "en": [
      "ok it's up up now"
    ],
    "ru": [
      "хорошо, сейчас дело"
    ]
  },
  {
    "time": [
      385.448996,
      389.959373
    ],
    "en": [
      "do ping 1 4000 dot 1"
    ],
    "ru": [
      "сделать пинг 1 4000 точек 1"
    ]
  },
  {
    "time": [
      389.959373,
      393.94851
    ],
    "en": [
      "okay it's working"
    ],
    "ru": [
      "хорошо, это работает"
    ]
  },
  {
    "time": [
      393.94851,
      399.026082
    ],
    "en": [
      "I've pre-configured default routes to the service provider on each router"
    ],
    "ru": [
      "Я предварительно настроил маршруты по умолчанию к поставщику услуг на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      399.026082,
      405.168106
    ],
    "en": [
      "so if I try to ping r2 r3 or r1 from our 4 it should work now"
    ],
    "ru": [
      "поэтому, если я попытаюсь пинговать r2 r3 или r1 из наших 4, он должен работать сейчас"
    ]
  },
  {
    "time": [
      405.168106,
      406.739898
    ],
    "en": [
      "let's try"
    ],
    "ru": [
      "давай попробуем"
    ]
  },
  {
    "time": [
      406.739898,
      409.882107
    ],
    "en": [
      "first I'll ping r1"
    ],
    "ru": [
      "сначала я пингую r1"
    ]
  },
  {
    "time": [
      409.882107,
      414.392586
    ],
    "en": [
      "do ping 100 oh oh -"
    ],
    "ru": [
      "сделать пинг 100 ой ой -"
    ]
  },
  {
    "time": [
      414.392586,
      417.89814
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
      417.89814,
      420.898929
    ],
    "en": [
      "how about r3"
    ],
    "ru": [
      "как насчет r3"
    ]
  },
  {
    "time": [
      420.898929,
      428.818686
    ],
    "en": [
      "do ping 1 3000 - it works as well"
    ],
    "ru": [
      "сделать пинг 1 3000 - тоже работает"
    ]
  },
  {
    "time": [
      428.818686,
      430.354138
    ],
    "en": [
      "and let's try our to"
    ],
    "ru": [
      "и давайте попробуем"
    ]
  },
  {
    "time": [
      430.354138,
      438.401157
    ],
    "en": [
      "do ping 200 go - it works as well"
    ],
    "ru": [
      "сделай пинг 200 иди - тоже работает"
    ]
  },
  {
    "time": [
      438.401157,
      440.355331
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
      440.355331,
      443.955661
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      443.955661,
      447.358802
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      447.358802,
      450.185376
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
      450.185376,
      452.067245
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
      452.067245,
      457.076705
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
      457.076705,
      463.789653
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
      463.789653,
      472.419727
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
      472.419727,
      472.419727
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
      472.419727,
      472.419727
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
      472.419727,
      472.419727
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]