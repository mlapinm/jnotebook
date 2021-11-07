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
      11.0
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
      11.0,
      13.0
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
      13.0,
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
      18.0
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
      18.0,
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
      24.0
    ],
    "en": [
      "lab we will troubleshoot PPP the"
    ],
    "ru": [
      "лаборатории мы будем устранять неполадки PPP"
    ]
  },
  {
    "time": [
      24.0,
      25.0
    ],
    "en": [
      "point-to-point protocol"
    ],
    "ru": [
      "двухточечный протокол"
    ]
  },
  {
    "time": [
      25.0,
      28.0
    ],
    "en": [
      "I took the topology from the last lab"
    ],
    "ru": [
      "Я взял топологию из последней лаборатории"
    ]
  },
  {
    "time": [
      28.0,
      31.0
    ],
    "en": [
      "and added two more pairs of routers so"
    ],
    "ru": [
      "и добавил еще две пары роутеров так"
    ]
  },
  {
    "time": [
      31.0,
      35.0
    ],
    "en": [
      "r1 and r3 are authenticated using pap"
    ],
    "ru": [
      "r1 и r3 аутентифицируются с помощью pap"
    ]
  },
  {
    "time": [
      35.0,
      39.0
    ],
    "en": [
      "and r2 and r4 are authenticating using"
    ],
    "ru": [
      "и r2 и r4 аутентифицируются с использованием"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "chap however there is one miss"
    ],
    "ru": [
      "парень, но есть один промах"
    ]
  },
  {
    "time": [
      42.0,
      44.0
    ],
    "en": [
      "configuration on each of them which is"
    ],
    "ru": [
      "конфигурация на каждом из них, которая"
    ]
  },
  {
    "time": [
      44.0,
      48.0
    ],
    "en": [
      "preventing PPP from working let's go one"
    ],
    "ru": [
      "предотвращение работы PPP, давайте, один"
    ]
  },
  {
    "time": [
      48.0,
      52.0
    ],
    "en": [
      "by one and find the issues let's start"
    ],
    "ru": [
      "по одному и найдите проблемы, давайте начнем"
    ]
  },
  {
    "time": [
      52.0,
      61.0
    ],
    "en": [
      "on r1 enable show interfaces s0 0 so the"
    ],
    "ru": [
      "на r1 включите показ интерфейсов s0 0, чтобы"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "correct encapsulation PPP is used"
    ],
    "ru": [
      "используется правильная инкапсуляция PPP"
    ]
  },
  {
    "time": [
      64.0,
      69.0
    ],
    "en": [
      "however the interface is up-down now r1"
    ],
    "ru": [
      "однако интерфейс теперь вверх-вниз r1"
    ]
  },
  {
    "time": [
      69.0,
      71.0
    ],
    "en": [
      "should have a username packet and a"
    ],
    "ru": [
      "должен иметь пакет имени пользователя и"
    ]
  },
  {
    "time": [
      71.0,
      74.0
    ],
    "en": [
      "password tracer configured which SP r1"
    ],
    "ru": [
      "настроил трассировщик паролей какой SP r1"
    ]
  },
  {
    "time": [
      74.0,
      76.0
    ],
    "en": [
      "will use to authenticate"
    ],
    "ru": [
      "будет использовать для аутентификации"
    ]
  },
  {
    "time": [
      76.0,
      82.0
    ],
    "en": [
      "let's check show run there it is so no"
    ],
    "ru": [
      "давай проверим шоу, прогон там, так что нет"
    ]
  },
  {
    "time": [
      82.0,
      85.0
    ],
    "en": [
      "problems there now is r1 sending the"
    ],
    "ru": [
      "проблемы сейчас r1 отправляет"
    ]
  },
  {
    "time": [
      85.0,
      88.0
    ],
    "en": [
      "correct username Cisco and password CCNA"
    ],
    "ru": [
      "правильный логин Cisco и пароль CCNA"
    ]
  },
  {
    "time": [
      88.0,
      95.0
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
      88.0,
      95.0
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
      95.0,
      98.0
    ],
    "en": [
      "PAP sent username password command isn't"
    ],
    "ru": [
      "PAP отправил команду пароля имени пользователя не"
    ]
  },
  {
    "time": [
      98.0,
      103.0
    ],
    "en": [
      "configured let's go fix that compte"
    ],
    "ru": [
      "настроен, пойдем исправим этот комп"
    ]
  },
  {
    "time": [
      103.0,
      105.0
    ],
    "en": [
      "interface s0 0"
    ],
    "ru": [
      "интерфейс s0 0"
    ]
  },
  {
    "time": [
      105.0,
      111.0
    ],
    "en": [
      "shutdown PPP PAP sent a username cisco"
    ],
    "ru": [
      "выключение PPP PAP отправил имя пользователя cisco"
    ]
  },
  {
    "time": [
      111.0,
      118.0
    ],
    "en": [
      "password CCNA no shutdown do show IP"
    ],
    "ru": [
      "пароль CCNA без выключения показывать IP"
    ]
  },
  {
    "time": [
      118.0,
      122.0
    ],
    "en": [
      "interface brief ok the interface is up"
    ],
    "ru": [
      "краткое описание интерфейса хорошо, интерфейс работает"
    ]
  },
  {
    "time": [
      122.0,
      128.0
    ],
    "en": [
      "up let's try to ping SP r1 do ping 100"
    ],
    "ru": [
      "вверх давайте попробуем пинговать SP r1 сделать пинг 100"
    ]
  },
  {
    "time": [
      128.0,
      133.0
    ],
    "en": [
      "Oh Oh 1"
    ],
    "ru": [
      "Ой ой 1"
    ]
  },
  {
    "time": [
      133.0,
      136.0
    ],
    "en": [
      "okay looks like it works now so we've"
    ],
    "ru": [
      "ладно, похоже, теперь это работает, так что мы"
    ]
  },
  {
    "time": [
      136.0,
      140.0
    ],
    "en": [
      "solved the problem on our one now let's"
    ],
    "ru": [
      "решил проблему на нашем теперь давайте"
    ]
  },
  {
    "time": [
      140.0,
      142.0
    ],
    "en": [
      "check out our three which is also"
    ],
    "ru": [
      "посмотрите наши три, которые также"
    ]
  },
  {
    "time": [
      142.0,
      147.0
    ],
    "en": [
      "configured to use PPP with PAP enable"
    ],
    "ru": [
      "настроен на использование PPP с включением PAP"
    ]
  },
  {
    "time": [
      147.0,
      151.0
    ],
    "en": [
      "show interfaces s0 0 again"
    ],
    "ru": [
      "снова показать интерфейсы s0 0"
    ]
  },
  {
    "time": [
      151.0,
      153.0
    ],
    "en": [
      "correct encapsulation but the interface"
    ],
    "ru": [
      "правильная инкапсуляция, но интерфейс"
    ]
  },
  {
    "time": [
      153.0,
      157.0
    ],
    "en": [
      "is up down our three should have a user"
    ],
    "ru": [
      "вверх вниз у нашей тройки должен быть пользователь"
    ]
  },
  {
    "time": [
      157.0,
      160.0
    ],
    "en": [
      "named CCNA and a password CCENT"
    ],
    "ru": [
      "с именем CCNA и паролем CCENT"
    ]
  },
  {
    "time": [
      160.0,
      162.0
    ],
    "en": [
      "configure which SP our three will use to"
    ],
    "ru": [
      "настроить, какой SP будут использовать наши трое для"
    ]
  },
  {
    "time": [
      162.0,
      166.0
    ],
    "en": [
      "authenticate let's check for that show"
    ],
    "ru": [
      "аутентифицировать давайте проверим это шоу"
    ]
  },
  {
    "time": [
      166.0,
      169.0
    ],
    "en": [
      "run there it is"
    ],
    "ru": [
      "беги туда, это"
    ]
  },
  {
    "time": [
      169.0,
      172.0
    ],
    "en": [
      "is it sending the username Cisco and"
    ],
    "ru": [
      "отправляет ли он имя пользователя Cisco и"
    ]
  },
  {
    "time": [
      172.0,
      176.0
    ],
    "en": [
      "password CCNP to SP r3 to authenticate"
    ],
    "ru": [
      "пароль CCNP для SP r3 для аутентификации"
    ]
  },
  {
    "time": [
      176.0,
      180.0
    ],
    "en": [
      "yes it is so what's the issue it's the"
    ],
    "ru": [
      "да, так в чем проблема"
    ]
  },
  {
    "time": [
      180.0,
      184.0
    ],
    "en": [
      "line right above here PPP authentication"
    ],
    "ru": [
      "строка справа вверху здесь аутентификация PPP"
    ]
  },
  {
    "time": [
      184.0,
      188.0
    ],
    "en": [
      "chap r3 is supposed to be using PAP not"
    ],
    "ru": [
      "глава r3 должен использовать PAP, а не"
    ]
  },
  {
    "time": [
      188.0,
      193.0
    ],
    "en": [
      "chap authentication coffee tea interface"
    ],
    "ru": [
      "парень аутентификация кофе чай интерфейс"
    ]
  },
  {
    "time": [
      193.0,
      195.0
    ],
    "en": [
      "s0 0"
    ],
    "ru": [
      "s0 0"
    ]
  },
  {
    "time": [
      195.0,
      202.0
    ],
    "en": [
      "shut down no PPP authentication chap PPP"
    ],
    "ru": [
      "выключить без аутентификации PPP глава PPP"
    ]
  },
  {
    "time": [
      202.0,
      207.0
    ],
    "en": [
      "authentication PAP no shutdown do show"
    ],
    "ru": [
      "аутентификация PAP без выключения показывать"
    ]
  },
  {
    "time": [
      207.0,
      212.0
    ],
    "en": [
      "IP interface brief ok the interface is"
    ],
    "ru": [
      "Краткое описание IP-интерфейса в порядке, интерфейс"
    ]
  },
  {
    "time": [
      212.0,
      217.0
    ],
    "en": [
      "up up let's try a ping to SPR 3 do ping"
    ],
    "ru": [
      "вверх вверх давайте попробуем пинг до SPR 3 сделать пинг"
    ]
  },
  {
    "time": [
      217.0,
      227.0
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
      217.0,
      227.0
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
      227.0,
      234.0
    ],
    "en": [
      "to our to enable show interfaces s0 0"
    ],
    "ru": [
      "к нашему, чтобы включить показ интерфейсов s0 0"
    ]
  },
  {
    "time": [
      234.0,
      238.0
    ],
    "en": [
      "same situation correct encapsulation PPP"
    ],
    "ru": [
      "такая же ситуация правильная инкапсуляция PPP"
    ]
  },
  {
    "time": [
      238.0,
      242.0
    ],
    "en": [
      "but the interface isn't up r2 is"
    ],
    "ru": [
      "но интерфейс не работает r2"
    ]
  },
  {
    "time": [
      242.0,
      245.0
    ],
    "en": [
      "configured to use chap authentication so"
    ],
    "ru": [
      "настроен на использование аутентификации chap, поэтому"
    ]
  },
  {
    "time": [
      245.0,
      246.0
    ],
    "en": [
      "it should have a user account configure"
    ],
    "ru": [
      "у него должна быть настроена учетная запись пользователя"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "with the username SP r2 which is the"
    ],
    "ru": [
      "с именем пользователя SP r2, которое является"
    ]
  },
  {
    "time": [
      249.0,
      252.0
    ],
    "en": [
      "host of the router sorry the host name"
    ],
    "ru": [
      "хост маршрутизатора извините имя хоста"
    ]
  },
  {
    "time": [
      252.0,
      254.0
    ],
    "en": [
      "of the router at the other end and a"
    ],
    "ru": [
      "маршрутизатора на другом конце и"
    ]
  },
  {
    "time": [
      254.0,
      257.0
    ],
    "en": [
      "password of CCNA which must be identical"
    ],
    "ru": [
      "пароль CCNA, который должен быть идентичным"
    ]
  },
  {
    "time": [
      257.0,
      260.0
    ],
    "en": [
      "to the password configured on SPR to"
    ],
    "ru": [
      "к паролю, настроенному на SPR, чтобы"
    ]
  },
  {
    "time": [
      260.0,
      264.0
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
      264.0,
      269.0
    ],
    "en": [
      "username r2 password CCNA there's the"
    ],
    "ru": [
      "имя пользователя r2 пароль CCNA есть"
    ]
  },
  {
    "time": [
      269.0,
      271.0
    ],
    "en": [
      "problem it's configured with its own"
    ],
    "ru": [
      "проблема, она настроена с ее собственным"
    ]
  },
  {
    "time": [
      271.0,
      274.0
    ],
    "en": [
      "host name but it should be SPR to s host"
    ],
    "ru": [
      "имя хоста, но это должно быть SPR для хоста"
    ]
  },
  {
    "time": [
      274.0,
      280.0
    ],
    "en": [
      "name coffee tea no user name are two"
    ],
    "ru": [
      "имя кофе чай нет имени пользователя два"
    ]
  },
  {
    "time": [
      280.0,
      286.0
    ],
    "en": [
      "passwords CCNA username SPR two password"
    ],
    "ru": [
      "пароли CCNA имя пользователя SPR два пароля"
    ]
  },
  {
    "time": [
      286.0,
      290.0
    ],
    "en": [
      "CCNA now I'll go reset the interface"
    ],
    "ru": [
      "CCNA сейчас пойду сбросить интерфейс"
    ]
  },
  {
    "time": [
      290.0,
      293.0
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
      293.0,
      299.0
    ],
    "en": [
      "shutdown no shutdown do show IP"
    ],
    "ru": [
      "выключение нет выключения показывать IP"
    ]
  },
  {
    "time": [
      299.0,
      305.0
    ],
    "en": [
      "interface brief okay it's up up now"
    ],
    "ru": [
      "краткое описание интерфейса, ладно, теперь все готово"
    ]
  },
  {
    "time": [
      305.0,
      315.0
    ],
    "en": [
      "let's try a ping do ping 200 0.1 okay"
    ],
    "ru": [
      "давай попробуем пинг сделать пинг 200 0,1 ладно"
    ]
  },
  {
    "time": [
      315.0,
      319.0
    ],
    "en": [
      "looks like r2 is working now finally"
    ],
    "ru": [
      "похоже, что r2 наконец-то работает"
    ]
  },
  {
    "time": [
      319.0,
      326.0
    ],
    "en": [
      "let's go to r4 enable show interfaces s0"
    ],
    "ru": [
      "перейдем к r4, включим показ интерфейсов s0"
    ]
  },
  {
    "time": [
      326.0,
      328.0
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
      326.0,
      328.0
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
      328.0,
      331.0
    ],
    "en": [
      "encapsulation PPP is correct but the"
    ],
    "ru": [
      "инкапсуляция PPP верна, но"
    ]
  },
  {
    "time": [
      331.0,
      336.0
    ],
    "en": [
      "interface is down like r2 r4 ship using"
    ],
    "ru": [
      "интерфейс не работает, как корабль r2 r4, использующий"
    ]
  },
  {
    "time": [
      336.0,
      339.0
    ],
    "en": [
      "chap authentication so it should have a"
    ],
    "ru": [
      "проверка подлинности парня, поэтому он должен иметь"
    ]
  },
  {
    "time": [
      339.0,
      343.0
    ],
    "en": [
      "username s PR for password CCIE"
    ],
    "ru": [
      "имя пользователя s PR для пароля CCIE"
    ]
  },
  {
    "time": [
      343.0,
      346.0
    ],
    "en": [
      "configured s PR for being the host name"
    ],
    "ru": [
      "настроен s PR как имя хоста"
    ]
  },
  {
    "time": [
      346.0,
      348.0
    ],
    "en": [
      "of the other router it's connected to"
    ],
    "ru": [
      "другого маршрутизатора, к которому он подключен"
    ]
  },
  {
    "time": [
      348.0,
      353.0
    ],
    "en": [
      "show run ok that looks correct"
    ],
    "ru": [
      "показать запустить нормально, выглядит правильно"
    ]
  },
  {
    "time": [
      353.0,
      358.0
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
      358.0,
      362.0
    ],
    "en": [
      "ok we're missing something here the PPP"
    ],
    "ru": [
      "хорошо, нам что-то не хватает здесь PPP"
    ]
  },
  {
    "time": [
      362.0,
      365.0
    ],
    "en": [
      "authentication chap statement is missing"
    ],
    "ru": [
      "утверждение главы аутентификации отсутствует"
    ]
  },
  {
    "time": [
      365.0,
      372.0
    ],
    "en": [
      "coffee tea interface s 0 0 shutdown PPP"
    ],
    "ru": [
      "кофе чай интерфейс s 0 0 выключение PPP"
    ]
  },
  {
    "time": [
      372.0,
      378.0
    ],
    "en": [
      "authentication chap no shutdown do show"
    ],
    "ru": [
      "проверка подлинности глава нет выключения показывать"
    ]
  },
  {
    "time": [
      378.0,
      386.0
    ],
    "en": [
      "IP interface brief ok it's up up now do"
    ],
    "ru": [
      "Краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      386.0,
      392.0
    ],
    "en": [
      "ping 1 4000 dot 1"
    ],
    "ru": [
      "пинг 1 4000 точек 1"
    ]
  },
  {
    "time": [
      392.0,
      394.0
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
      394.0,
      397.0
    ],
    "en": [
      "I've pre-configured default routes to"
    ],
    "ru": [
      "Я предварительно настроил маршруты по умолчанию для"
    ]
  },
  {
    "time": [
      397.0,
      399.0
    ],
    "en": [
      "the service provider on each router so"
    ],
    "ru": [
      "поставщик услуг на каждом маршрутизаторе, поэтому"
    ]
  },
  {
    "time": [
      399.0,
      404.0
    ],
    "en": [
      "if I try to ping r2 r3 or r1 from our 4"
    ],
    "ru": [
      "если я попробую пинговать r2 r3 или r1 с наших 4"
    ]
  },
  {
    "time": [
      404.0,
      408.0
    ],
    "en": [
      "it should work now let's try first I'll"
    ],
    "ru": [
      "теперь должно работать, давай сначала попробуем я"
    ]
  },
  {
    "time": [
      408.0,
      418.0
    ],
    "en": [
      "ping r1 do ping 100 oh oh - ok it works"
    ],
    "ru": [
      "ping r1 do ping 100 ой ой - ок, это работает"
    ]
  },
  {
    "time": [
      418.0,
      427.0
    ],
    "en": [
      "how about r3 do ping 1 3000 - it works"
    ],
    "ru": [
      "как насчет r3 сделать пинг 1 3000 - работает"
    ]
  },
  {
    "time": [
      427.0,
      433.0
    ],
    "en": [
      "as well and let's try our to do ping 200"
    ],
    "ru": [
      "также и давайте попробуем сделать пинг 200"
    ]
  },
  {
    "time": [
      433.0,
      439.0
    ],
    "en": [
      "go - it works as well that's all for"
    ],
    "ru": [
      "иди - тоже работает, вот и все для"
    ]
  },
  {
    "time": [
      439.0,
      444.0
    ],
    "en": [
      "this lab thank you for watching I hope"
    ],
    "ru": [
      "эта лаборатория спасибо за просмотр надеюсь"
    ]
  },
  {
    "time": [
      444.0,
      446.0
    ],
    "en": [
      "this lab and video have been helpful for"
    ],
    "ru": [
      "эта лабораторная работа и видео были полезны для"
    ]
  },
  {
    "time": [
      446.0,
      449.0
    ],
    "en": [
      "you please subscribe for future labs"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы"
    ]
  },
  {
    "time": [
      449.0,
      451.0
    ],
    "en": [
      "like this which will be released weekly"
    ],
    "ru": [
      "как это, которое будет выходить еженедельно"
    ]
  },
  {
    "time": [
      451.0,
      454.0
    ],
    "en": [
      "if you have requests for any specific"
    ],
    "ru": [
      "если у вас есть запросы на какие-либо конкретные"
    ]
  },
  {
    "time": [
      454.0,
      456.0
    ],
    "en": [
      "labs let me know in the comment section"
    ],
    "ru": [
      "лаборатории дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      456.0,
      459.0
    ],
    "en": [
      "if you want to support my channel I"
    ],
    "ru": [
      "если вы хотите поддержать мой канал я"
    ]
  },
  {
    "time": [
      459.0,
      462.0
    ],
    "en": [
      "accept Bitcoin and etherium donations"
    ],
    "ru": [
      "принимать пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      462.0,
      464.0
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
      464.0,
      467.0
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
      467.0,
      470.0
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
      470.0,
      470.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]