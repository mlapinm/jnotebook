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
      22.0
    ],
    "en": [
      "lab we will take a look at the"
    ],
    "ru": [
      "лаборатории мы взглянем на"
    ]
  },
  {
    "time": [
      22.0,
      27.0
    ],
    "en": [
      "point-to-point protocol PPP PPP"
    ],
    "ru": [
      "протокол точка-точка PPP PPP"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "is a layer 2 protocol often used over"
    ],
    "ru": [
      "протокол уровня 2, часто используемый поверх"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "serial LAN or wide area network"
    ],
    "ru": [
      "последовательная ЛВС или глобальная сеть"
    ]
  },
  {
    "time": [
      33.0,
      37.0
    ],
    "en": [
      "connections on a Cisco router the"
    ],
    "ru": [
      "подключений на маршрутизаторе Cisco"
    ]
  },
  {
    "time": [
      37.0,
      39.0
    ],
    "en": [
      "default layer 2 encapsulation on a"
    ],
    "ru": [
      "инкапсуляция уровня 2 по умолчанию на"
    ]
  },
  {
    "time": [
      39.0,
      44.0
    ],
    "en": [
      "serial connection is Cisco hdl-c however"
    ],
    "ru": [
      "последовательное соединение - это Cisco hdl-c, однако"
    ]
  },
  {
    "time": [
      44.0,
      47.0
    ],
    "en": [
      "PPP provides superior security through"
    ],
    "ru": [
      "PPP обеспечивает превосходную безопасность за счет"
    ]
  },
  {
    "time": [
      47.0,
      51.0
    ],
    "en": [
      "authentication functionality so in this"
    ],
    "ru": [
      "функция аутентификации, поэтому в этом"
    ]
  },
  {
    "time": [
      51.0,
      53.0
    ],
    "en": [
      "lab we will configure PPP with two"
    ],
    "ru": [
      "lab настроим PPP с двумя"
    ]
  },
  {
    "time": [
      53.0,
      56.0
    ],
    "en": [
      "different authentication methods on the"
    ],
    "ru": [
      "различные методы аутентификации на"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "connection between r1 and SPR one"
    ],
    "ru": [
      "соединение между r1 и SPR one"
    ]
  },
  {
    "time": [
      59.0,
      63.0
    ],
    "en": [
      "meaning service provider router 1 we"
    ],
    "ru": [
      "означает маршрутизатор поставщика услуг 1, мы"
    ]
  },
  {
    "time": [
      63.0,
      66.0
    ],
    "en": [
      "will configure PPP with PAP the password"
    ],
    "ru": [
      "настроит PPP с PAP пароль"
    ]
  },
  {
    "time": [
      66.0,
      69.0
    ],
    "en": [
      "authentication protocol which uses a"
    ],
    "ru": [
      "протокол аутентификации, который использует"
    ]
  },
  {
    "time": [
      69.0,
      70.0
    ],
    "en": [
      "static password to authenticate the"
    ],
    "ru": [
      "статический пароль для аутентификации"
    ]
  },
  {
    "time": [
      70.0,
      74.0
    ],
    "en": [
      "connection on the connection between r2"
    ],
    "ru": [
      "соединение на соединении между r2"
    ]
  },
  {
    "time": [
      74.0,
      78.0
    ],
    "en": [
      "and SPR 2 we will configure PPP with"
    ],
    "ru": [
      "и SPR 2 мы настроим PPP с"
    ]
  },
  {
    "time": [
      78.0,
      80.0
    ],
    "en": [
      "chap the challenge handshake"
    ],
    "ru": [
      "парень вызов рукопожатие"
    ]
  },
  {
    "time": [
      80.0,
      82.0
    ],
    "en": [
      "authentication protocol which uses a"
    ],
    "ru": [
      "протокол аутентификации, который использует"
    ]
  },
  {
    "time": [
      82.0,
      85.0
    ],
    "en": [
      "dynamic randomly generated string"
    ],
    "ru": [
      "динамическая случайно сгенерированная строка"
    ]
  },
  {
    "time": [
      85.0,
      87.0
    ],
    "en": [
      "providing greater security than a static"
    ],
    "ru": [
      "обеспечение большей безопасности, чем статический"
    ]
  },
  {
    "time": [
      87.0,
      90.0
    ],
    "en": [
      "never changing password let's get"
    ],
    "ru": [
      "никогда не меняя пароль, давай"
    ]
  },
  {
    "time": [
      90.0,
      96.0
    ],
    "en": [
      "started let's start with r1 enable first"
    ],
    "ru": [
      "начал давайте начнем с r1 включить сначала"
    ]
  },
  {
    "time": [
      96.0,
      98.0
    ],
    "en": [
      "let's check what the encapsulation on"
    ],
    "ru": [
      "давайте проверим, что за инкапсуляция"
    ]
  },
  {
    "time": [
      98.0,
      106.0
    ],
    "en": [
      "s00 is show interfaces s0 0 there it is"
    ],
    "ru": [
      "s00 - показать интерфейсы s0 0 вот и все"
    ]
  },
  {
    "time": [
      106.0,
      109.0
    ],
    "en": [
      "encapsulation hdl-c"
    ],
    "ru": [
      "инкапсуляция hdl-c"
    ]
  },
  {
    "time": [
      109.0,
      111.0
    ],
    "en": [
      "also notice that the interface is in the"
    ],
    "ru": [
      "также обратите внимание, что интерфейс находится в"
    ]
  },
  {
    "time": [
      111.0,
      115.0
    ],
    "en": [
      "up-down State this is because there is"
    ],
    "ru": [
      "состояние вверх-вниз, потому что есть"
    ]
  },
  {
    "time": [
      115.0,
      118.0
    ],
    "en": [
      "an encapsulation mismatch I've already"
    ],
    "ru": [
      "несоответствие инкапсуляции я уже"
    ]
  },
  {
    "time": [
      118.0,
      120.0
    ],
    "en": [
      "configured the service provider routers"
    ],
    "ru": [
      "настроил маршрутизаторы поставщика услуг"
    ]
  },
  {
    "time": [
      120.0,
      124.0
    ],
    "en": [
      "and SPR ones s00 interface is already"
    ],
    "ru": [
      "и SPR один интерфейс s00 уже есть"
    ]
  },
  {
    "time": [
      124.0,
      127.0
    ],
    "en": [
      "configured with PPP encapsulation"
    ],
    "ru": [
      "настроен с инкапсуляцией PPP"
    ]
  },
  {
    "time": [
      127.0,
      138.0
    ],
    "en": [
      "let's try to ping SPR 1 ping 100 0.1"
    ],
    "ru": [
      "попробуем пинговать SPR 1 пинг 100 0,1"
    ]
  },
  {
    "time": [
      138.0,
      142.0
    ],
    "en": [
      "doesn't work let's enable PPP on our one"
    ],
    "ru": [
      "не работает давайте включим PPP на нашем"
    ]
  },
  {
    "time": [
      142.0,
      148.0
    ],
    "en": [
      "coffee tea interface s 0 0 encapsulation"
    ],
    "ru": [
      "кофе чай интерфейс s 0 0 инкапсуляция"
    ]
  },
  {
    "time": [
      148.0,
      154.0
    ],
    "en": [
      "PPP do show IP interface brief now the"
    ],
    "ru": [
      "PPP действительно показывает краткое описание IP-интерфейса."
    ]
  },
  {
    "time": [
      154.0,
      157.0
    ],
    "en": [
      "interface is still up down because we"
    ],
    "ru": [
      "интерфейс все еще не работает, потому что мы"
    ]
  },
  {
    "time": [
      157.0,
      159.0
    ],
    "en": [
      "haven't configured authentication yet on"
    ],
    "ru": [
      "еще не настроил аутентификацию на"
    ]
  },
  {
    "time": [
      159.0,
      161.0
    ],
    "en": [
      "our one but it's already configured on"
    ],
    "ru": [
      "наш, но он уже настроен на"
    ]
  },
  {
    "time": [
      161.0,
      165.0
    ],
    "en": [
      "SPR one I've already configured a"
    ],
    "ru": [
      "SPR one Я уже настроил"
    ]
  },
  {
    "time": [
      165.0,
      168.0
    ],
    "en": [
      "username of Cisco and a password of CCNA"
    ],
    "ru": [
      "имя пользователя Cisco и пароль CCNA"
    ]
  },
  {
    "time": [
      168.0,
      171.0
    ],
    "en": [
      "on SP r1 so we have to configure our one"
    ],
    "ru": [
      "на SP r1, поэтому нам нужно настроить наш"
    ]
  },
  {
    "time": [
      171.0,
      174.0
    ],
    "en": [
      "to send that username and password to SP"
    ],
    "ru": [
      "отправить это имя пользователя и пароль в SP"
    ]
  },
  {
    "time": [
      174.0,
      179.0
    ],
    "en": [
      "r1 to authenticate likewise SP r 1 is"
    ],
    "ru": [
      "r1 для аутентификации аналогично SP r 1"
    ]
  },
  {
    "time": [
      179.0,
      180.0
    ],
    "en": [
      "currently trying to authenticate with"
    ],
    "ru": [
      "в настоящее время пытается пройти аутентификацию с помощью"
    ]
  },
  {
    "time": [
      180.0,
      183.0
    ],
    "en": [
      "the username of packet and a password of"
    ],
    "ru": [
      "имя пользователя пакета и пароль"
    ]
  },
  {
    "time": [
      183.0,
      185.0
    ],
    "en": [
      "tracer so we have to configure that"
    ],
    "ru": [
      "tracer, поэтому мы должны настроить это"
    ]
  },
  {
    "time": [
      185.0,
      189.0
    ],
    "en": [
      "username and password on r1 I'll do that"
    ],
    "ru": [
      "имя пользователя и пароль на r1 я сделаю это"
    ]
  },
  {
    "time": [
      189.0,
      195.0
    ],
    "en": [
      "first exit username packet password"
    ],
    "ru": [
      "пароль для первого выхода имя пользователя"
    ]
  },
  {
    "time": [
      195.0,
      198.0
    ],
    "en": [
      "tracer now let's go back to the"
    ],
    "ru": [
      "Tracer теперь вернемся к"
    ]
  },
  {
    "time": [
      198.0,
      203.0
    ],
    "en": [
      "interface interface s0 0 ok next let's"
    ],
    "ru": [
      "интерфейс интерфейс s0 0 хорошо далее давайте"
    ]
  },
  {
    "time": [
      203.0,
      207.0
    ],
    "en": [
      "enable authentication PPP authentication"
    ],
    "ru": [
      "включить аутентификацию PPP аутентификацию"
    ]
  },
  {
    "time": [
      207.0,
      211.0
    ],
    "en": [
      "PAP now let's configure it to send the"
    ],
    "ru": [
      "PAP теперь давайте настроим его для отправки"
    ]
  },
  {
    "time": [
      211.0,
      214.0
    ],
    "en": [
      "username of Cisco and password of CCNA"
    ],
    "ru": [
      "имя пользователя Cisco и пароль CCNA"
    ]
  },
  {
    "time": [
      214.0,
      222.0
    ],
    "en": [
      "to SPR 1 PPP PAP sent - username Cisco"
    ],
    "ru": [
      "в SPR 1 PPP Отправлено PAP - имя пользователя Cisco"
    ]
  },
  {
    "time": [
      222.0,
      226.0
    ],
    "en": [
      "password CCNA now it can take a little"
    ],
    "ru": [
      "пароль CCNA теперь может занять немного"
    ]
  },
  {
    "time": [
      226.0,
      228.0
    ],
    "en": [
      "time for the interface to come up so"
    ],
    "ru": [
      "время для интерфейса, чтобы появиться так"
    ]
  },
  {
    "time": [
      228.0,
      230.0
    ],
    "en": [
      "I'll reset it to speed things up"
    ],
    "ru": [
      "Я сброшу его, чтобы ускорить процесс"
    ]
  },
  {
    "time": [
      230.0,
      235.0
    ],
    "en": [
      "shutdown no shutdown and I'll wait a few"
    ],
    "ru": [
      "выключение нет выключения и я подожду несколько"
    ]
  },
  {
    "time": [
      235.0,
      241.0
    ],
    "en": [
      "seconds just in case okay let's check do"
    ],
    "ru": [
      "секунд на всякий случай хорошо давай проверим делаем"
    ]
  },
  {
    "time": [
      241.0,
      246.0
    ],
    "en": [
      "show IP interface brief great now the"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "interface is up up let's see if we can"
    ],
    "ru": [
      "интерфейс работает, давайте посмотрим, сможем ли мы"
    ]
  },
  {
    "time": [
      249.0,
      258.0
    ],
    "en": [
      "ping SPR one do ping 100 0 1"
    ],
    "ru": [
      "пинг SPR один сделать пинг 100 0 1"
    ]
  },
  {
    "time": [
      258.0,
      260.0
    ],
    "en": [
      "okay now it works"
    ],
    "ru": [
      "хорошо, теперь это работает"
    ]
  },
  {
    "time": [
      260.0,
      266.0
    ],
    "en": [
      "so to summarize PPP with pap first you"
    ],
    "ru": [
      "Итак, чтобы подвести итог PPP с pap сначала вы"
    ]
  },
  {
    "time": [
      266.0,
      267.0
    ],
    "en": [
      "must configure a username and password"
    ],
    "ru": [
      "необходимо настроить имя пользователя и пароль"
    ]
  },
  {
    "time": [
      267.0,
      270.0
    ],
    "en": [
      "on your router which the router on the"
    ],
    "ru": [
      "на вашем маршрутизаторе, который маршрутизатор на"
    ]
  },
  {
    "time": [
      270.0,
      274.0
    ],
    "en": [
      "other end will use to authenticate then"
    ],
    "ru": [
      "другой конец будет использоваться для аутентификации, тогда"
    ]
  },
  {
    "time": [
      274.0,
      276.0
    ],
    "en": [
      "you must configure the encapsulation of"
    ],
    "ru": [
      "вы должны настроить инкапсуляцию"
    ]
  },
  {
    "time": [
      276.0,
      279.0
    ],
    "en": [
      "PPP on the interface with the command"
    ],
    "ru": [
      "PPP на интерфейсе командой"
    ]
  },
  {
    "time": [
      279.0,
      283.0
    ],
    "en": [
      "encapsulation PPP then you enable PAP"
    ],
    "ru": [
      "инкапсуляция PPP, затем вы включаете PAP"
    ]
  },
  {
    "time": [
      283.0,
      286.0
    ],
    "en": [
      "authentication with PPP authentication"
    ],
    "ru": [
      "аутентификация с аутентификацией PPP"
    ]
  },
  {
    "time": [
      286.0,
      290.0
    ],
    "en": [
      "PAP then you configure your router to"
    ],
    "ru": [
      "PAP, затем вы настраиваете свой маршрутизатор на"
    ]
  },
  {
    "time": [
      290.0,
      292.0
    ],
    "en": [
      "send a username and password to the"
    ],
    "ru": [
      "отправьте имя пользователя и пароль на"
    ]
  },
  {
    "time": [
      292.0,
      295.0
    ],
    "en": [
      "other router with a PPP PAP sent to"
    ],
    "ru": [
      "другой маршрутизатор с PPP PAP, отправленным на"
    ]
  },
  {
    "time": [
      295.0,
      299.0
    ],
    "en": [
      "username password command of course the"
    ],
    "ru": [
      "имя пользователя и пароль, конечно же,"
    ]
  },
  {
    "time": [
      299.0,
      301.0
    ],
    "en": [
      "road around the other end must have that"
    ],
    "ru": [
      "дорога вокруг другого конца должна иметь это"
    ]
  },
  {
    "time": [
      301.0,
      302.0
    ],
    "en": [
      "username and password configured on it"
    ],
    "ru": [
      "имя пользователя и пароль настроены на нем"
    ]
  },
  {
    "time": [
      302.0,
      305.0
    ],
    "en": [
      "in this lab I pre-configured the"
    ],
    "ru": [
      "в этой лабораторной работе я предварительно настроил"
    ]
  },
  {
    "time": [
      305.0,
      308.0
    ],
    "en": [
      "username of Cisco and password of CCNA"
    ],
    "ru": [
      "имя пользователя Cisco и пароль CCNA"
    ]
  },
  {
    "time": [
      308.0,
      313.0
    ],
    "en": [
      "on SPR 1 next let's configure PPP with"
    ],
    "ru": [
      "на SPR 1 далее давайте настроим PPP с"
    ]
  },
  {
    "time": [
      313.0,
      318.0
    ],
    "en": [
      "chap authentication on our - once again"
    ],
    "ru": [
      "глава аутентификации на нашем - еще раз"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "chap is more secure than PAP because it"
    ],
    "ru": [
      "chap более безопасен, чем PAP, потому что он"
    ]
  },
  {
    "time": [
      321.0,
      323.0
    ],
    "en": [
      "uses dynamic randomly generated strings"
    ],
    "ru": [
      "использует динамические случайно сгенерированные строки"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "for each authentication rather than a"
    ],
    "ru": [
      "для каждой аутентификации, а не"
    ]
  },
  {
    "time": [
      326.0,
      329.0
    ],
    "en": [
      "static password however you still have"
    ],
    "ru": [
      "статический пароль, но у вас все еще есть"
    ]
  },
  {
    "time": [
      329.0,
      331.0
    ],
    "en": [
      "to configure a username and password on"
    ],
    "ru": [
      "настроить имя пользователя и пароль на"
    ]
  },
  {
    "time": [
      331.0,
      333.0
    ],
    "en": [
      "the router which is then used to"
    ],
    "ru": [
      "маршрутизатор, который затем используется для"
    ]
  },
  {
    "time": [
      333.0,
      336.0
    ],
    "en": [
      "generate the string so let's go on our"
    ],
    "ru": [
      "сгенерируйте строку, так что давайте продолжим"
    ]
  },
  {
    "time": [
      336.0,
      345.0
    ],
    "en": [
      "to enable show interfaces s0 0 just like"
    ],
    "ru": [
      "включить показ интерфейсов s0 0 точно так же, как"
    ]
  },
  {
    "time": [
      345.0,
      349.0
    ],
    "en": [
      "on r1 before the default encapsulation"
    ],
    "ru": [
      "на r1 до инкапсуляции по умолчанию"
    ]
  },
  {
    "time": [
      349.0,
      352.0
    ],
    "en": [
      "is hdl-c and the interface is in an"
    ],
    "ru": [
      "это hdl-c, а интерфейс находится в"
    ]
  },
  {
    "time": [
      352.0,
      356.0
    ],
    "en": [
      "up-down state because the SPR 2 router"
    ],
    "ru": [
      "состояние вверх-вниз, потому что маршрутизатор SPR 2"
    ]
  },
  {
    "time": [
      356.0,
      358.0
    ],
    "en": [
      "has already been configured to use PPP"
    ],
    "ru": [
      "уже настроен для использования PPP"
    ]
  },
  {
    "time": [
      358.0,
      361.0
    ],
    "en": [
      "with chap let's see if we can ping SPR"
    ],
    "ru": [
      "с парнем, давайте посмотрим, сможем ли мы пинговать SPR"
    ]
  },
  {
    "time": [
      361.0,
      367.0
    ],
    "en": [
      "to ping 200 oh you won"
    ],
    "ru": [
      "Пинг 200 о, ты выиграл"
    ]
  },
  {
    "time": [
      367.0,
      371.0
    ],
    "en": [
      "as expected it doesn't work"
    ],
    "ru": [
      "как и ожидалось это не работает"
    ]
  },
  {
    "time": [
      371.0,
      375.0
    ],
    "en": [
      "conf T now let's create the user name"
    ],
    "ru": [
      "conf T теперь давайте создадим имя пользователя"
    ]
  },
  {
    "time": [
      375.0,
      378.0
    ],
    "en": [
      "and password required for a chap the"
    ],
    "ru": [
      "и пароль, необходимый для главы"
    ]
  },
  {
    "time": [
      378.0,
      380.0
    ],
    "en": [
      "instructions say to use a password of"
    ],
    "ru": [
      "инструкции говорят использовать пароль"
    ]
  },
  {
    "time": [
      380.0,
      385.0
    ],
    "en": [
      "CCNA but what username should we use the"
    ],
    "ru": [
      "CCNA, но какое имя пользователя мы должны использовать"
    ]
  },
  {
    "time": [
      385.0,
      387.0
    ],
    "en": [
      "answer is that we must use the other"
    ],
    "ru": [
      "ответ в том, что мы должны использовать другой"
    ]
  },
  {
    "time": [
      387.0,
      390.0
    ],
    "en": [
      "routers host name in this case that is"
    ],
    "ru": [
      "имя хоста маршрутизатора в данном случае"
    ]
  },
  {
    "time": [
      390.0,
      397.0
    ],
    "en": [
      "SPR two so username SPR two password"
    ],
    "ru": [
      "SPR два так имя пользователя SPR два пароль"
    ]
  },
  {
    "time": [
      397.0,
      401.0
    ],
    "en": [
      "CCNA this password has to match between"
    ],
    "ru": [
      "CCNA этот пароль должен совпадать между"
    ]
  },
  {
    "time": [
      401.0,
      403.0
    ],
    "en": [
      "the two routers so I've already"
    ],
    "ru": [
      "два маршрутизатора, так что я уже"
    ]
  },
  {
    "time": [
      403.0,
      406.0
    ],
    "en": [
      "configured username our two passwords"
    ],
    "ru": [
      "настроенное имя пользователя наши два пароля"
    ]
  },
  {
    "time": [
      406.0,
      410.0
    ],
    "en": [
      "CCNA on the service provider side for"
    ],
    "ru": [
      "CCNA на стороне поставщика услуг для"
    ]
  },
  {
    "time": [
      410.0,
      412.0
    ],
    "en": [
      "the CCNA routing and switching you don't"
    ],
    "ru": [
      "маршрутизацию и коммутацию CCNA вы не"
    ]
  },
  {
    "time": [
      412.0,
      414.0
    ],
    "en": [
      "have to worry about the service provider"
    ],
    "ru": [
      "нужно беспокоиться о поставщике услуг"
    ]
  },
  {
    "time": [
      414.0,
      416.0
    ],
    "en": [
      "end that's for the service provider"
    ],
    "ru": [
      "конец, это для поставщика услуг"
    ]
  },
  {
    "time": [
      416.0,
      420.0
    ],
    "en": [
      "track of certifications now let's"
    ],
    "ru": [
      "отслеживание сертификатов теперь давайте"
    ]
  },
  {
    "time": [
      420.0,
      425.0
    ],
    "en": [
      "configure the interface interface s0 0"
    ],
    "ru": [
      "настроить интерфейсный интерфейс s0 0"
    ]
  },
  {
    "time": [
      425.0,
      427.0
    ],
    "en": [
      "let's set it down while we do the"
    ],
    "ru": [
      "давай установим это, пока мы делаем"
    ]
  },
  {
    "time": [
      427.0,
      429.0
    ],
    "en": [
      "configurations and then bring it back up"
    ],
    "ru": [
      "конфигурации, а затем верните их"
    ]
  },
  {
    "time": [
      429.0,
      429.0
    ],
    "en": [
      "when we're done"
    ],
    "ru": [
      "когда мы закончим"
    ]
  },
  {
    "time": [
      429.0,
      434.0
    ],
    "en": [
      "shutdown set the encapsulation dat PPP"
    ],
    "ru": [
      "выключение установить инкапсуляцию dat PPP"
    ]
  },
  {
    "time": [
      434.0,
      440.0
    ],
    "en": [
      "like on our 1 encapsulation PPP now we"
    ],
    "ru": [
      "как и в нашем PPP с инкапсуляцией, теперь мы"
    ]
  },
  {
    "time": [
      440.0,
      443.0
    ],
    "en": [
      "only have one more command PPP"
    ],
    "ru": [
      "есть только еще одна команда PPP"
    ]
  },
  {
    "time": [
      443.0,
      448.0
    ],
    "en": [
      "authentication chap that's it let's"
    ],
    "ru": [
      "аутентификация парень вот и все давайте"
    ]
  },
  {
    "time": [
      448.0,
      453.0
    ],
    "en": [
      "enable the interface no shutdown ok and"
    ],
    "ru": [
      "включить интерфейс без выключения нормально и"
    ]
  },
  {
    "time": [
      453.0,
      454.0
    ],
    "en": [
      "now let's check the status of the"
    ],
    "ru": [
      "теперь давайте проверим статус"
    ]
  },
  {
    "time": [
      454.0,
      459.0
    ],
    "en": [
      "interface do show IP interface brief"
    ],
    "ru": [
      "интерфейс действительно показывает краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      459.0,
      463.0
    ],
    "en": [
      "the interface is up up now let's try to"
    ],
    "ru": [
      "интерфейс работает, давайте попробуем"
    ]
  },
  {
    "time": [
      463.0,
      468.0
    ],
    "en": [
      "ping the service provider do ping 200"
    ],
    "ru": [
      "пинг поставщика услуг сделать пинг 200"
    ]
  },
  {
    "time": [
      468.0,
      475.0
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
      468.0,
      475.0
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
      475.0,
      477.0
    ],
    "en": [
      "configured static default routes to the"
    ],
    "ru": [
      "настроенные статические маршруты по умолчанию к"
    ]
  },
  {
    "time": [
      477.0,
      480.0
    ],
    "en": [
      "service provider as you would often do"
    ],
    "ru": [
      "поставщик услуг, как вы это часто делаете"
    ]
  },
  {
    "time": [
      480.0,
      481.0
    ],
    "en": [
      "in a real enterprise network so let's"
    ],
    "ru": [
      "в реальной корпоративной сети, так что давайте"
    ]
  },
  {
    "time": [
      481.0,
      485.0
    ],
    "en": [
      "see if we can ping r1 on the other side"
    ],
    "ru": [
      "посмотрим, сможем ли мы пинговать r1 на другой стороне"
    ]
  },
  {
    "time": [
      485.0,
      493.0
    ],
    "en": [
      "do ping 100 oh oh - and it works as well"
    ],
    "ru": [
      "сделать пинг 100 ой ой - и он тоже работает"
    ]
  },
  {
    "time": [
      493.0,
      498.0
    ],
    "en": [
      "so to review PPP with chap you must"
    ],
    "ru": [
      "поэтому, чтобы просмотреть PPP с парнем, вы должны"
    ]
  },
  {
    "time": [
      498.0,
      500.0
    ],
    "en": [
      "configure a user on the router with a"
    ],
    "ru": [
      "настроить пользователя на маршрутизаторе с"
    ]
  },
  {
    "time": [
      500.0,
      502.0
    ],
    "en": [
      "username that is the other routers"
    ],
    "ru": [
      "имя пользователя, которое является другим маршрутизатором"
    ]
  },
  {
    "time": [
      502.0,
      507.0
    ],
    "en": [
      "hostname in this case SP r2 and the"
    ],
    "ru": [
      "имя хоста в этом случае SP r2 и"
    ]
  },
  {
    "time": [
      507.0,
      508.0
    ],
    "en": [
      "password must be the same on both"
    ],
    "ru": [
      "пароль должен быть одинаковым на обоих"
    ]
  },
  {
    "time": [
      508.0,
      513.0
    ],
    "en": [
      "routers then enable PPP on the interface"
    ],
    "ru": [
      "маршрутизаторы затем включают PPP на интерфейсе"
    ]
  },
  {
    "time": [
      513.0,
      516.0
    ],
    "en": [
      "with the encapsulation PPP command and"
    ],
    "ru": [
      "с командой инкапсуляции PPP и"
    ]
  },
  {
    "time": [
      516.0,
      519.0
    ],
    "en": [
      "enable chap authentication with PPP"
    ],
    "ru": [
      "включить аутентификацию пользователя с помощью PPP"
    ]
  },
  {
    "time": [
      519.0,
      523.0
    ],
    "en": [
      "authentication chap that's all for this"
    ],
    "ru": [
      "парень аутентификации, вот и все для этого"
    ]
  },
  {
    "time": [
      523.0,
      528.0
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
      528.0,
      529.0
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
      529.0,
      533.0
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
      533.0,
      536.0
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
      536.0,
      538.0
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
      538.0,
      541.0
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
      541.0,
      543.0
    ],
    "en": [
      "you want to support my channel I accept"
    ],
    "ru": [
      "вы хотите поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      543.0,
      546.0
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
      546.0,
      549.0
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
      549.0,
      551.0
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
      551.0,
      554.0
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
      554.0,
      554.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]