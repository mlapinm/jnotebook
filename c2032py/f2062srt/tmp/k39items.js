let objs = [
  {
    "time": [
      0.0,
      4.191479
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
      4.191479,
      7.697708
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
      7.697708,
      16.731354
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
      16.731354,
      19.71177
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
      19.71177,
      25.564124
    ],
    "en": [
      "in this lab we will take a look at the point-to-point protocol PPP"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим протокол точка-точка PPP."
    ]
  },
  {
    "time": [
      25.564124,
      34.241645
    ],
    "en": [
      "PPP is a layer 2 protocol often used over serial LAN or wide area network connections"
    ],
    "ru": [
      "PPP - это протокол уровня 2, который часто используется в последовательной локальной сети или в глобальных сетевых соединениях."
    ]
  },
  {
    "time": [
      34.241645,
      42.681853
    ],
    "en": [
      "on a Cisco router the default layer 2 encapsulation on a serial connection is Cisco hdl-c"
    ],
    "ru": [
      "на маршрутизаторе Cisco инкапсуляция уровня 2 по умолчанию для последовательного соединения - Cisco hdl-c"
    ]
  },
  {
    "time": [
      42.681853,
      49.804457
    ],
    "en": [
      "however PPP provides superior security through authentication functionality"
    ],
    "ru": [
      "однако PPP обеспечивает превосходную безопасность за счет функции аутентификации"
    ]
  },
  {
    "time": [
      49.804457,
      55.834499
    ],
    "en": [
      "so in this lab we will configure PPP with two different authentication methods"
    ],
    "ru": [
      "поэтому в этой лабораторной работе мы настроим PPP с двумя разными методами аутентификации."
    ]
  },
  {
    "time": [
      55.834499,
      59.891353
    ],
    "en": [
      "on the connection between r1 and SPR one"
    ],
    "ru": [
      "на связи между r1 и SPR one"
    ]
  },
  {
    "time": [
      59.891353,
      62.881853
    ],
    "en": [
      "meaning service provider router 1"
    ],
    "ru": [
      "означает маршрутизатор поставщика услуг 1"
    ]
  },
  {
    "time": [
      62.881853,
      68.136582
    ],
    "en": [
      "we will configure PPP with PAP the password authentication protocol"
    ],
    "ru": [
      "настроим PPP с PAP протокол аутентификации по паролю"
    ]
  },
  {
    "time": [
      68.136582,
      71.731665
    ],
    "en": [
      "which uses a static password to authenticate the connection"
    ],
    "ru": [
      "который использует статический пароль для аутентификации соединения"
    ]
  },
  {
    "time": [
      71.731665,
      76.69429
    ],
    "en": [
      "on the connection between r2 and SPR 2"
    ],
    "ru": [
      "на связи между r2 и SPR 2"
    ]
  },
  {
    "time": [
      76.69429,
      81.864186
    ],
    "en": [
      "we will configure PPP with chap the challenge handshake authentication protocol"
    ],
    "ru": [
      "мы настроим PPP с помощью протокола аутентификации с вызовом рукопожатия"
    ]
  },
  {
    "time": [
      81.864186,
      85.613998
    ],
    "en": [
      "which uses a dynamic randomly generated string"
    ],
    "ru": [
      "который использует динамическую случайно сгенерированную строку"
    ]
  },
  {
    "time": [
      85.613998,
      89.415623
    ],
    "en": [
      "providing greater security than a static never changing password"
    ],
    "ru": [
      "обеспечение большей безопасности, чем статический, никогда не меняющийся пароль"
    ]
  },
  {
    "time": [
      89.415623,
      91.034644
    ],
    "en": [
      "let's get started"
    ],
    "ru": [
      "Давайте начнем"
    ]
  },
  {
    "time": [
      91.034644,
      93.060352
    ],
    "en": [
      "let's start with r1"
    ],
    "ru": [
      "начнем с r1"
    ]
  },
  {
    "time": [
      93.060352,
      100.588311
    ],
    "en": [
      "enable first let's check what the encapsulation on s00 is"
    ],
    "ru": [
      "сначала включить, давайте проверим, что такое инкапсуляция на s00"
    ]
  },
  {
    "time": [
      100.588311,
      103.691519
    ],
    "en": [
      "show interfaces s0 0"
    ],
    "ru": [
      "показать интерфейсы s0 0"
    ]
  },
  {
    "time": [
      103.691519,
      109.564165
    ],
    "en": [
      "there it is encapsulation hdl-c"
    ],
    "ru": [
      "вот и инкапсуляция hdl-c"
    ]
  },
  {
    "time": [
      109.564165,
      113.819061
    ],
    "en": [
      "also notice that the interface is in the up-down State"
    ],
    "ru": [
      "также обратите внимание, что интерфейс находится в состоянии вверх-вниз"
    ]
  },
  {
    "time": [
      113.819061,
      117.426894
    ],
    "en": [
      "this is because there is an encapsulation mismatch"
    ],
    "ru": [
      "это потому, что есть несоответствие инкапсуляции"
    ]
  },
  {
    "time": [
      117.426894,
      120.726352
    ],
    "en": [
      "I've already configured the service provider routers"
    ],
    "ru": [
      "Я уже настроил маршрутизаторы поставщика услуг"
    ]
  },
  {
    "time": [
      120.726352,
      127.222893
    ],
    "en": [
      "and SPR ones s00 interface is already configured with PPP encapsulation"
    ],
    "ru": [
      "и SPR тот интерфейс s00 уже настроен с инкапсуляцией PPP"
    ]
  },
  {
    "time": [
      127.222893,
      130.697956
    ],
    "en": [
      "let's try to ping SPR 1"
    ],
    "ru": [
      "попробуем пинговать SPR 1"
    ]
  },
  {
    "time": [
      130.697956,
      134.340498
    ],
    "en": [
      "ping 100 0.1"
    ],
    "ru": [
      "пинг 100 0,1"
    ]
  },
  {
    "time": [
      134.340498,
      139.857643
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
      139.857643,
      142.716393
    ],
    "en": [
      "let's enable PPP on our one"
    ],
    "ru": [
      "давайте включим PPP на нашем"
    ]
  },
  {
    "time": [
      142.716393,
      147.385143
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
      147.385143,
      150.207455
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      150.207455,
      153.180372
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
      153.180372,
      156.852413
    ],
    "en": [
      "now the interface is still up down"
    ],
    "ru": [
      "теперь интерфейс все еще не работает"
    ]
  },
  {
    "time": [
      156.852413,
      160.295371
    ],
    "en": [
      "because we haven't configured authentication yet on our one"
    ],
    "ru": [
      "потому что мы еще не настроили аутентификацию на нашем"
    ]
  },
  {
    "time": [
      160.295371,
      162.74235
    ],
    "en": [
      "but it's already configured on SPR one"
    ],
    "ru": [
      "но он уже настроен на SPR один"
    ]
  },
  {
    "time": [
      162.74235,
      167.249892
    ],
    "en": [
      "I've already configured a username of Cisco"
    ],
    "ru": [
      "Я уже настроил имя пользователя Cisco"
    ]
  },
  {
    "time": [
      167.249892,
      169.987142
    ],
    "en": [
      "and a password of CCNA on SP r1"
    ],
    "ru": [
      "и пароль CCNA на SP r1"
    ]
  },
  {
    "time": [
      169.987142,
      176.019142
    ],
    "en": [
      "so we have to configure our one to send that username and password to SP r1 to authenticate"
    ],
    "ru": [
      "поэтому мы должны настроить наш, чтобы отправить это имя пользователя и пароль в SP r1 для аутентификации"
    ]
  },
  {
    "time": [
      176.019142,
      182.724913
    ],
    "en": [
      "likewise SP r 1 is currently trying to authenticate with the username of packet"
    ],
    "ru": [
      "аналогично SP r 1 в настоящее время пытается аутентифицироваться с именем пользователя пакета"
    ]
  },
  {
    "time": [
      182.724913,
      184.400371
    ],
    "en": [
      "and a password of tracer"
    ],
    "ru": [
      "и пароль трассировщика"
    ]
  },
  {
    "time": [
      184.400371,
      187.869621
    ],
    "en": [
      "so we have to configure that username and password on r1"
    ],
    "ru": [
      "поэтому нам нужно настроить это имя пользователя и пароль на r1"
    ]
  },
  {
    "time": [
      187.869621,
      190.9761
    ],
    "en": [
      "I'll do that first"
    ],
    "ru": [
      "Я сделаю это первым"
    ]
  },
  {
    "time": [
      190.9761,
      196.042267
    ],
    "en": [
      "exit username packet password tracer"
    ],
    "ru": [
      "трассировщик паролей пакета имени пользователя выхода"
    ]
  },
  {
    "time": [
      196.042267,
      198.770975
    ],
    "en": [
      "now let's go back to the interface"
    ],
    "ru": [
      "теперь вернемся к интерфейсу"
    ]
  },
  {
    "time": [
      198.770975,
      201.45635
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
      201.45635,
      205.4646
    ],
    "en": [
      "ok next let's enable authentication"
    ],
    "ru": [
      "хорошо, теперь давайте включим аутентификацию"
    ]
  },
  {
    "time": [
      205.4646,
      208.848079
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
      208.848079,
      215.915517
    ],
    "en": [
      "now let's configure it to send the username of Cisco and password of CCNA to SPR 1"
    ],
    "ru": [
      "теперь давайте настроим его для отправки имени пользователя Cisco и пароля CCNA в SPR 1"
    ]
  },
  {
    "time": [
      215.915517,
      224.454996
    ],
    "en": [
      "PPP PAP sent - username Cisco password CCNA"
    ],
    "ru": [
      "PPP PAP отправлен - имя пользователя пароль Cisco CCNA"
    ]
  },
  {
    "time": [
      224.454996,
      230.421204
    ],
    "en": [
      "now it can take a little time for the interface to come up so I'll reset it to speed things up"
    ],
    "ru": [
      "теперь интерфейс может появиться через некоторое время, поэтому я сброшу его, чтобы ускорить процесс."
    ]
  },
  {
    "time": [
      230.421204,
      233.698287
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
      233.698287,
      236.878974
    ],
    "en": [
      "and I'll wait a few seconds just in case"
    ],
    "ru": [
      "и я подожду несколько секунд на всякий случай"
    ]
  },
  {
    "time": [
      236.878974,
      241.532391
    ],
    "en": [
      "okay let's check"
    ],
    "ru": [
      "хорошо давай проверим"
    ]
  },
  {
    "time": [
      241.532391,
      243.817204
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
      243.817204,
      248.293787
    ],
    "en": [
      "great now the interface is up up"
    ],
    "ru": [
      "отлично, теперь интерфейс работает"
    ]
  },
  {
    "time": [
      248.293787,
      250.588641
    ],
    "en": [
      "let's see if we can ping SPR one"
    ],
    "ru": [
      "посмотрим, сможем ли мы пинговать SPR один"
    ]
  },
  {
    "time": [
      250.588641,
      254.905411
    ],
    "en": [
      "do ping 100 0 1"
    ],
    "ru": [
      "сделать пинг 100 0 1"
    ]
  },
  {
    "time": [
      254.905411,
      260.892349
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
      260.892349,
      265.023599
    ],
    "en": [
      "so to summarize PPP with pap"
    ],
    "ru": [
      "Итак, чтобы резюмировать PPP с pap"
    ]
  },
  {
    "time": [
      265.023599,
      269.613557
    ],
    "en": [
      "first you must configure a username and password on your router"
    ],
    "ru": [
      "сначала вы должны настроить имя пользователя и пароль на вашем роутере"
    ]
  },
  {
    "time": [
      269.613557,
      273.091057
    ],
    "en": [
      "which the router on the other end will use to authenticate"
    ],
    "ru": [
      "который маршрутизатор на другом конце будет использовать для аутентификации"
    ]
  },
  {
    "time": [
      273.091057,
      281.185349
    ],
    "en": [
      "then you must configure the encapsulation of PPP on the interface with the command encapsulation PPP"
    ],
    "ru": [
      "то вы должны настроить инкапсуляцию PPP на интерфейсе с помощью команды инкапсуляции PPP"
    ]
  },
  {
    "time": [
      281.185349,
      287.126786
    ],
    "en": [
      "then you enable PAP authentication with PPP authentication PAP"
    ],
    "ru": [
      "затем вы включаете аутентификацию PAP с аутентификацией PPP PAP"
    ]
  },
  {
    "time": [
      287.126786,
      295.116745
    ],
    "en": [
      "then you configure your router to send a username and password to the other router with a PPP PAP"
    ],
    "ru": [
      "затем вы настраиваете свой маршрутизатор для отправки имени пользователя и пароля другому маршрутизатору с помощью PPP PAP"
    ]
  },
  {
    "time": [
      295.116745,
      297.968474
    ],
    "en": [
      "sent to username password command"
    ],
    "ru": [
      "отправлено на имя пользователя, пароль, команда"
    ]
  },
  {
    "time": [
      297.968474,
      303.202536
    ],
    "en": [
      "of course the road around the other end must have that username and password configured on it"
    ],
    "ru": [
      "конечно, дорога вокруг другого конца должна иметь это имя пользователя и пароль, настроенные на нем"
    ]
  },
  {
    "time": [
      303.202536,
      309.89014
    ],
    "en": [
      "in this lab I pre-configured the username of Cisco and password of CCNA on SPR 1"
    ],
    "ru": [
      "в этой лабораторной работе я предварительно настроил имя пользователя Cisco и пароль CCNA на SPR 1."
    ]
  },
  {
    "time": [
      309.89014,
      316.611473
    ],
    "en": [
      "next let's configure PPP with chap authentication on our -"
    ],
    "ru": [
      "Затем давайте настроим PPP с аутентификацией chap на нашем -"
    ]
  },
  {
    "time": [
      316.611473,
      325.426556
    ],
    "en": [
      "once again chap is more secure than PAP because it uses dynamic randomly generated strings for each authentication"
    ],
    "ru": [
      "еще раз chap более безопасен, чем PAP, потому что он использует динамические случайно сгенерированные строки для каждой аутентификации"
    ]
  },
  {
    "time": [
      325.426556,
      327.90216
    ],
    "en": [
      "rather than a static password"
    ],
    "ru": [
      "а не статический пароль"
    ]
  },
  {
    "time": [
      327.90216,
      332.396473
    ],
    "en": [
      "however you still have to configure a username and password on the router"
    ],
    "ru": [
      "однако вам все равно нужно настроить имя пользователя и пароль на маршрутизаторе"
    ]
  },
  {
    "time": [
      332.396473,
      334.58791
    ],
    "en": [
      "which is then used to generate the string"
    ],
    "ru": [
      "который затем используется для генерации строки"
    ]
  },
  {
    "time": [
      334.58791,
      337.36918
    ],
    "en": [
      "so let's go on our to"
    ],
    "ru": [
      "так что давай продолжим"
    ]
  },
  {
    "time": [
      337.36918,
      344.243305
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
      344.243305,
      347.897284
    ],
    "en": [
      "just like on r1 before"
    ],
    "ru": [
      "точно так же, как на r1 раньше"
    ]
  },
  {
    "time": [
      347.897284,
      350.753867
    ],
    "en": [
      "the default encapsulation is hdl-c"
    ],
    "ru": [
      "инкапсуляция по умолчанию - hdl-c"
    ]
  },
  {
    "time": [
      350.753867,
      354.298492
    ],
    "en": [
      "and the interface is in an up-down state"
    ],
    "ru": [
      "и интерфейс находится в верхнем-нижнем состоянии"
    ]
  },
  {
    "time": [
      354.298492,
      359.343825
    ],
    "en": [
      "because the SPR 2 router has already been configured to use PPP with chap"
    ],
    "ru": [
      "поскольку маршрутизатор SPR 2 уже настроен для использования PPP с chap"
    ]
  },
  {
    "time": [
      359.343825,
      362.062221
    ],
    "en": [
      "let's see if we can ping SPR to"
    ],
    "ru": [
      "посмотрим, сможем ли мы пинговать SPR на"
    ]
  },
  {
    "time": [
      362.062221,
      365.489304
    ],
    "en": [
      "ping 200 oh you won"
    ],
    "ru": [
      "пинг 200 о, ты выиграл"
    ]
  },
  {
    "time": [
      365.489304,
      371.607158
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
      371.607158,
      374.014012
    ],
    "en": [
      "conf T"
    ],
    "ru": [
      "conf T"
    ]
  },
  {
    "time": [
      374.014012,
      377.691074
    ],
    "en": [
      "now let's create the user name and password required for a chap"
    ],
    "ru": [
      "теперь давайте создадим имя пользователя и пароль, необходимые для парня"
    ]
  },
  {
    "time": [
      377.691074,
      381.742283
    ],
    "en": [
      "the instructions say to use a password of CCNA"
    ],
    "ru": [
      "в инструкции сказано использовать пароль CCNA"
    ]
  },
  {
    "time": [
      381.742283,
      383.729137
    ],
    "en": [
      "but what username should we use"
    ],
    "ru": [
      "но какое имя пользователя мы должны использовать"
    ]
  },
  {
    "time": [
      383.729137,
      388.81772
    ],
    "en": [
      "the answer is that we must use the other routers host name"
    ],
    "ru": [
      "ответ заключается в том, что мы должны использовать имя хоста другого маршрутизатора"
    ]
  },
  {
    "time": [
      388.81772,
      392.287304
    ],
    "en": [
      "in this case that is SPR two"
    ],
    "ru": [
      "в данном случае это SPR два"
    ]
  },
  {
    "time": [
      392.287304,
      399.282116
    ],
    "en": [
      "so username SPR two password CCNA"
    ],
    "ru": [
      "так имя пользователя SPR два пароля CCNA"
    ]
  },
  {
    "time": [
      399.282116,
      403.280449
    ],
    "en": [
      "this password has to match between the two routers"
    ],
    "ru": [
      "этот пароль должен совпадать между двумя маршрутизаторами"
    ]
  },
  {
    "time": [
      403.280449,
      409.429824
    ],
    "en": [
      "so I've already configured username our two passwords CCNA on the service provider side"
    ],
    "ru": [
      "поэтому я уже настроил имя пользователя для наших двух паролей CCNA на стороне поставщика услуг"
    ]
  },
  {
    "time": [
      409.429824,
      414.689199
    ],
    "en": [
      "for the CCNA routing and switching you don't have to worry about the service provider end"
    ],
    "ru": [
      "для маршрутизации и коммутации CCNA вам не нужно беспокоиться о конце поставщика услуг"
    ]
  },
  {
    "time": [
      414.689199,
      418.110615
    ],
    "en": [
      "that's for the service provider track of certifications"
    ],
    "ru": [
      "это для отслеживания сертификатов поставщика услуг"
    ]
  },
  {
    "time": [
      418.110615,
      421.640489
    ],
    "en": [
      "now let's configure the interface"
    ],
    "ru": [
      "теперь настроим интерфейс"
    ]
  },
  {
    "time": [
      421.640489,
      424.604447
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
      424.604447,
      430.07628
    ],
    "en": [
      "let's set it down while we do the configurations and then bring it back up when we're done"
    ],
    "ru": [
      "давайте установим его, пока мы делаем конфигурации, а затем вернем его, когда мы закончим"
    ]
  },
  {
    "time": [
      430.07628,
      431.457738
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
      431.457738,
      435.803613
    ],
    "en": [
      "set the encapsulation dat PPP like on our 1"
    ],
    "ru": [
      "установите PPP инкапсуляции, как на нашем 1"
    ]
  },
  {
    "time": [
      435.803613,
      438.527738
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      438.527738,
      441.961113
    ],
    "en": [
      "now we only have one more command"
    ],
    "ru": [
      "теперь у нас есть только одна команда"
    ]
  },
  {
    "time": [
      441.961113,
      445.62828
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
      445.62828,
      448.073613
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      448.073613,
      449.768009
    ],
    "en": [
      "let's enable the interface"
    ],
    "ru": [
      "давайте включим интерфейс"
    ]
  },
  {
    "time": [
      449.768009,
      451.181217
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
      451.181217,
      455.575342
    ],
    "en": [
      "ok and now let's check the status of the interface"
    ],
    "ru": [
      "ок, а теперь давайте проверим статус интерфейса"
    ]
  },
  {
    "time": [
      455.575342,
      459.140446
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
      459.140446,
      462.115988
    ],
    "en": [
      "the interface is up up"
    ],
    "ru": [
      "интерфейс работает"
    ]
  },
  {
    "time": [
      462.115988,
      465.257634
    ],
    "en": [
      "now let's try to ping the service provider"
    ],
    "ru": [
      "теперь давайте попробуем пинговать поставщика услуг"
    ]
  },
  {
    "time": [
      465.257634,
      469.896488
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
      469.896488,
      474.3588
    ],
    "en": [
      "okay it works now"
    ],
    "ru": [
      "хорошо, теперь работает"
    ]
  },
  {
    "time": [
      474.3588,
      478.933487
    ],
    "en": [
      "I've already configured static default routes to the service provider"
    ],
    "ru": [
      "Я уже настроил статические маршруты по умолчанию для поставщика услуг"
    ]
  },
  {
    "time": [
      478.933487,
      481.572841
    ],
    "en": [
      "as you would often do in a real enterprise network"
    ],
    "ru": [
      "как вы это часто делаете в реальной корпоративной сети"
    ]
  },
  {
    "time": [
      481.572841,
      484.94507
    ],
    "en": [
      "so let's see if we can ping r1 on the other side"
    ],
    "ru": [
      "так что давайте посмотрим, сможем ли мы пинговать r1 на другой стороне"
    ]
  },
  {
    "time": [
      484.94507,
      491.073923
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
      491.073923,
      493.560152
    ],
    "en": [
      "and it works as well"
    ],
    "ru": [
      "и это тоже работает"
    ]
  },
  {
    "time": [
      493.560152,
      497.072986
    ],
    "en": [
      "so to review PPP with chap"
    ],
    "ru": [
      "Итак, чтобы рассмотреть PPP с главой"
    ]
  },
  {
    "time": [
      497.072986,
      503.254507
    ],
    "en": [
      "you must configure a user on the router with a username that is the other routers hostname"
    ],
    "ru": [
      "вы должны настроить пользователя на маршрутизаторе с именем пользователя, которое является именем хоста другого маршрутизатора"
    ]
  },
  {
    "time": [
      503.254507,
      505.945486
    ],
    "en": [
      "in this case SP r2"
    ],
    "ru": [
      "в этом случае SP r2"
    ]
  },
  {
    "time": [
      505.945486,
      509.780694
    ],
    "en": [
      "and the password must be the same on both routers"
    ],
    "ru": [
      "и пароль должен быть одинаковым на обоих роутерах"
    ]
  },
  {
    "time": [
      509.780694,
      516.063694
    ],
    "en": [
      "then enable PPP on the interface with the encapsulation PPP command"
    ],
    "ru": [
      "затем включите PPP на интерфейсе с помощью команды инкапсуляции PPP"
    ]
  },
  {
    "time": [
      516.063694,
      521.668964
    ],
    "en": [
      "and enable chap authentication with PPP authentication chap"
    ],
    "ru": [
      "и включить аутентификацию chap с аутентификацией PPP chap"
    ]
  },
  {
    "time": [
      521.668964,
      524.068839
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
      524.068839,
      531.08761
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
      531.08761,
      536.009777
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
      536.009777,
      540.762693
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
      540.762693,
      548.160651
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
      548.160651,
      556.458463
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
      556.458463,
      556.458463
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
      556.458463,
      556.458463
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
      556.458463,
      556.458463
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]