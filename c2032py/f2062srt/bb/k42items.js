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
      23.0
    ],
    "en": [
      "lab we will practice some basic ipv6"
    ],
    "ru": [
      "lab мы попрактикуемся в базовом ipv6"
    ]
  },
  {
    "time": [
      23.0,
      27.0
    ],
    "en": [
      "configurations including ipv6 address"
    ],
    "ru": [
      "конфигурации, включая адрес ipv6"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "configuration slack or stateless address"
    ],
    "ru": [
      "резерв конфигурации или адрес без состояния"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "auto-configuration and ipv6 static"
    ],
    "ru": [
      "автоконфигурация и статический ipv6"
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "revving let's get right into it"
    ],
    "ru": [
      "обороты давай прямо в это"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "the first step is to enable ipv6 on the"
    ],
    "ru": [
      "первый шаг - включить ipv6 на"
    ]
  },
  {
    "time": [
      39.0,
      41.0
    ],
    "en": [
      "routers and configure some ipv6"
    ],
    "ru": [
      "роутеры и настроить ipv6"
    ]
  },
  {
    "time": [
      41.0,
      47.0
    ],
    "en": [
      "addresses I'll go on r1 first enable"
    ],
    "ru": [
      "адреса пойду на r1 сначала включу"
    ]
  },
  {
    "time": [
      47.0,
      53.0
    ],
    "en": [
      "compte ipv6 is not enabled by default to"
    ],
    "ru": [
      "compte ipv6 не включен по умолчанию для"
    ]
  },
  {
    "time": [
      53.0,
      57.0
    ],
    "en": [
      "enable it use this command ipv6 unicast"
    ],
    "ru": [
      "включить его, используйте эту команду ipv6 unicast"
    ]
  },
  {
    "time": [
      57.0,
      60.0
    ],
    "en": [
      "routing now let's configure the"
    ],
    "ru": [
      "маршрутизация теперь давайте настроим"
    ]
  },
  {
    "time": [
      60.0,
      61.0
    ],
    "en": [
      "addresses according to the network"
    ],
    "ru": [
      "адреса по сети"
    ]
  },
  {
    "time": [
      61.0,
      69.0
    ],
    "en": [
      "diagram interface g00 ipv6 address 2001"
    ],
    "ru": [
      "схема интерфейса g00 ipv6 адрес 2001"
    ]
  },
  {
    "time": [
      69.0,
      77.0
    ],
    "en": [
      "DB 8 1 2 3 1 2 3 double colon 1/64 also"
    ],
    "ru": [
      "DB 8 1 2 3 1 2 3 двойное двоеточие 1/64 также"
    ]
  },
  {
    "time": [
      77.0,
      80.0
    ],
    "en": [
      "let's enable the interface no chef"
    ],
    "ru": [
      "давайте включим интерфейс без повара"
    ]
  },
  {
    "time": [
      80.0,
      86.0
    ],
    "en": [
      "interface G 0 1 IP v6 address 2001 DB 8"
    ],
    "ru": [
      "интерфейс G 0 1 IP адрес v6 2001 DB 8"
    ]
  },
  {
    "time": [
      86.0,
      93.0
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
      86.0,
      93.0
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
      93.0,
      97.0
    ],
    "en": [
      "okay let's check do show ipv6 interface"
    ],
    "ru": [
      "хорошо, давайте проверим, покажем ли интерфейс ipv6"
    ]
  },
  {
    "time": [
      97.0,
      100.0
    ],
    "en": [
      "brief there are the addresses we"
    ],
    "ru": [
      "кратко есть адреса, которые мы"
    ]
  },
  {
    "time": [
      100.0,
      102.0
    ],
    "en": [
      "configured but what are these other"
    ],
    "ru": [
      "настроено, но что это за другие"
    ]
  },
  {
    "time": [
      102.0,
      106.0
    ],
    "en": [
      "addresses there link local addresses and"
    ],
    "ru": [
      "адреса там связывают локальные адреса и"
    ]
  },
  {
    "time": [
      106.0,
      108.0
    ],
    "en": [
      "they are automatically generated on ipv6"
    ],
    "ru": [
      "они автоматически генерируются на ipv6"
    ]
  },
  {
    "time": [
      108.0,
      112.0
    ],
    "en": [
      "interfaces these addresses are never"
    ],
    "ru": [
      "интерфейсы эти адреса никогда не"
    ]
  },
  {
    "time": [
      112.0,
      114.0
    ],
    "en": [
      "routed they only work on the local link"
    ],
    "ru": [
      "маршрутизированные они работают только по локальной ссылке"
    ]
  },
  {
    "time": [
      114.0,
      118.0
    ],
    "en": [
      "link local addresses are in the fe80"
    ],
    "ru": [
      "локальные адреса ссылки находятся в fe80"
    ]
  },
  {
    "time": [
      118.0,
      122.0
    ],
    "en": [
      "slash 10 range ok that's it for our one"
    ],
    "ru": [
      "слэш 10 диапазон ок, это для нашего"
    ]
  },
  {
    "time": [
      122.0,
      130.0
    ],
    "en": [
      "next let's go on our to enable compte on"
    ],
    "ru": [
      "дальше давайте продолжим, чтобы включить compte on"
    ]
  },
  {
    "time": [
      130.0,
      133.0
    ],
    "en": [
      "our 2 we will only configure the g0 one"
    ],
    "ru": [
      "наши 2 мы будем настраивать только g0 one"
    ]
  },
  {
    "time": [
      133.0,
      133.0
    ],
    "en": [
      "in"
    ],
    "ru": [
      "в"
    ]
  },
  {
    "time": [
      133.0,
      135.0
    ],
    "en": [
      "face for now as in the next step we will"
    ],
    "ru": [
      "лицо на данный момент, так как на следующем шаге мы будем"
    ]
  },
  {
    "time": [
      135.0,
      137.0
    ],
    "en": [
      "use slack to configure the address for"
    ],
    "ru": [
      "используйте слабину, чтобы настроить адрес для"
    ]
  },
  {
    "time": [
      137.0,
      143.0
    ],
    "en": [
      "the g00 interface interface G 0 1 IP p6"
    ],
    "ru": [
      "интерфейс g00 интерфейс G 0 1 IP p6"
    ]
  },
  {
    "time": [
      143.0,
      150.0
    ],
    "en": [
      "address 2001 DB 8 2 2 double colon 1/64"
    ],
    "ru": [
      "адрес 2001 DB 8 2 2 двойное двоеточие 1/64"
    ]
  },
  {
    "time": [
      150.0,
      155.0
    ],
    "en": [
      "no shutdown ok let's go on r3 and do the"
    ],
    "ru": [
      "нет выключения хорошо, давай перейдем на r3 и сделаем"
    ]
  },
  {
    "time": [
      155.0,
      164.0
    ],
    "en": [
      "same in abel compte interface g 0 1 IP"
    ],
    "ru": [
      "то же самое в интерфейсе abel compte g 0 1 IP"
    ]
  },
  {
    "time": [
      164.0,
      171.0
    ],
    "en": [
      "v6 address 2001 DB 8 3 3 double colon"
    ],
    "ru": [
      "v6 адрес 2001 DB 8 3 3 двойное двоеточие"
    ]
  },
  {
    "time": [
      171.0,
      177.0
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
      171.0,
      177.0
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
      177.0,
      179.0
    ],
    "en": [
      "will use slack stateless address"
    ],
    "ru": [
      "будет использовать слабый адрес без гражданства"
    ]
  },
  {
    "time": [
      179.0,
      182.0
    ],
    "en": [
      "auto-configuration to automatically"
    ],
    "ru": [
      "автоконфигурация автоматически"
    ]
  },
  {
    "time": [
      182.0,
      186.0
    ],
    "en": [
      "generate ipv6 addresses for r2 and r3 SG"
    ],
    "ru": [
      "сгенерировать адреса ipv6 для r2 и r3 SG"
    ]
  },
  {
    "time": [
      186.0,
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
      186.0,
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
      194.0
    ],
    "en": [
      "put it briefly ipv6 uses NDP or neighbor"
    ],
    "ru": [
      "короче говоря ipv6 использует NDP или сосед"
    ]
  },
  {
    "time": [
      194.0,
      198.0
    ],
    "en": [
      "discovery protocol and as part of NDP r1"
    ],
    "ru": [
      "протокол обнаружения и как часть NDP r1"
    ]
  },
  {
    "time": [
      198.0,
      201.0
    ],
    "en": [
      "is currently sending RA or router"
    ],
    "ru": [
      "в настоящее время отправляет RA или маршрутизатор"
    ]
  },
  {
    "time": [
      201.0,
      203.0
    ],
    "en": [
      "advertisement messages on its G 0 0"
    ],
    "ru": [
      "рекламные сообщения на своем G 0 0"
    ]
  },
  {
    "time": [
      203.0,
      208.0
    ],
    "en": [
      "interface when we configure slack r2 and"
    ],
    "ru": [
      "интерфейс, когда мы настраиваем slack r2 и"
    ]
  },
  {
    "time": [
      208.0,
      211.0
    ],
    "en": [
      "r3 will receive these messages and use"
    ],
    "ru": [
      "r3 получит эти сообщения и будет использовать"
    ]
  },
  {
    "time": [
      211.0,
      213.0
    ],
    "en": [
      "them to learn the network prefix which"
    ],
    "ru": [
      "им, чтобы узнать префикс сети, который"
    ]
  },
  {
    "time": [
      213.0,
      218.0
    ],
    "en": [
      "is 2001 DB 8 1 2 3 1 2 3 / 64 in this"
    ],
    "ru": [
      "2001 DB 8 1 2 3 1 2 3/64 в этом"
    ]
  },
  {
    "time": [
      218.0,
      221.0
    ],
    "en": [
      "case they will take that prefix and use"
    ],
    "ru": [
      "если они возьмут этот префикс и используют"
    ]
  },
  {
    "time": [
      221.0,
      223.0
    ],
    "en": [
      "a modified version of their own MAC"
    ],
    "ru": [
      "модифицированная версия собственного MAC"
    ]
  },
  {
    "time": [
      223.0,
      224.0
    ],
    "en": [
      "address to generate the rest of the IP"
    ],
    "ru": [
      "адрес для генерации остальной части IP"
    ]
  },
  {
    "time": [
      224.0,
      227.0
    ],
    "en": [
      "address hopefully you've learned this in"
    ],
    "ru": [
      "адрес, надеюсь, вы узнали это в"
    ]
  },
  {
    "time": [
      227.0,
      229.0
    ],
    "en": [
      "your studies if you're not familiar with"
    ],
    "ru": [
      "ваша учеба, если вы не знакомы с"
    ]
  },
  {
    "time": [
      229.0,
      230.0
    ],
    "en": [
      "it now make sure you are for the test"
    ],
    "ru": [
      "теперь убедитесь, что вы для теста"
    ]
  },
  {
    "time": [
      230.0,
      234.0
    ],
    "en": [
      "anyway the configuration is simple we"
    ],
    "ru": [
      "в любом случае конфигурация проста, мы"
    ]
  },
  {
    "time": [
      234.0,
      236.0
    ],
    "en": [
      "are on our 3 already so let's do it here"
    ],
    "ru": [
      "уже на наших 3, так что давайте сделаем это здесь"
    ]
  },
  {
    "time": [
      236.0,
      242.0
    ],
    "en": [
      "first interface G 0 0 no shutdown"
    ],
    "ru": [
      "первый интерфейс G 0 0 без отключения"
    ]
  },
  {
    "time": [
      242.0,
      248.0
    ],
    "en": [
      "ipv6 address Auto config exit next I'll"
    ],
    "ru": [
      "IPv6-адрес Далее автоконфигурация выйдет"
    ]
  },
  {
    "time": [
      248.0,
      254.0
    ],
    "en": [
      "go on r2 interface G 0 0 no shutdown"
    ],
    "ru": [
      "перейти на интерфейс r2 G 0 0 выключения нет"
    ]
  },
  {
    "time": [
      254.0,
      260.0
    ],
    "en": [
      "ipv6 address Auto config exit these"
    ],
    "ru": [
      "IPv6-адрес Автоконфигурация выйдите из этих"
    ]
  },
  {
    "time": [
      260.0,
      261.0
    ],
    "en": [
      "routers won't generate their addresses"
    ],
    "ru": [
      "маршрутизаторы не будут генерировать свои адреса"
    ]
  },
  {
    "time": [
      261.0,
      263.0
    ],
    "en": [
      "immediately so I'll pause the video as"
    ],
    "ru": [
      "немедленно, так что я поставлю видео на паузу, как"
    ]
  },
  {
    "time": [
      263.0,
      265.0
    ],
    "en": [
      "we wait for the router advertisements"
    ],
    "ru": [
      "ждем рекламы роутера"
    ]
  },
  {
    "time": [
      265.0,
      269.0
    ],
    "en": [
      "from R 1 to reach them"
    ],
    "ru": [
      "от R 1 до них добраться"
    ]
  },
  {
    "time": [
      269.0,
      272.0
    ],
    "en": [
      "okay I'm on r2 and as you can see from"
    ],
    "ru": [
      "хорошо, я на r2 и как видно из"
    ]
  },
  {
    "time": [
      272.0,
      275.0
    ],
    "en": [
      "the output of the show ipv6 interface"
    ],
    "ru": [
      "вывод интерфейса show ipv6"
    ]
  },
  {
    "time": [
      275.0,
      278.0
    ],
    "en": [
      "brief command r2 has generated an ipv6"
    ],
    "ru": [
      "краткая команда r2 сгенерировала ipv6"
    ]
  },
  {
    "time": [
      278.0,
      284.0
    ],
    "en": [
      "address for its g0z interface and on r3"
    ],
    "ru": [
      "адрес для его интерфейса g0z и на r3"
    ]
  },
  {
    "time": [
      284.0,
      290.0
    ],
    "en": [
      "you can see the same next let's"
    ],
    "ru": [
      "вы можете увидеть то же самое дальше давайте"
    ]
  },
  {
    "time": [
      290.0,
      293.0
    ],
    "en": [
      "configure some ipv6 static Reds on each"
    ],
    "ru": [
      "настроить несколько статических красных IPv6 на каждом"
    ]
  },
  {
    "time": [
      293.0,
      295.0
    ],
    "en": [
      "router will have to configure two static"
    ],
    "ru": [
      "роутеру придется настроить два статических"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "routes one for each of the other routers"
    ],
    "ru": [
      "маршрутизирует один для каждого из других маршрутизаторов"
    ]
  },
  {
    "time": [
      298.0,
      303.0
    ],
    "en": [
      "internal networks now to configure an"
    ],
    "ru": [
      "внутренние сети, чтобы настроить"
    ]
  },
  {
    "time": [
      303.0,
      307.0
    ],
    "en": [
      "next hop address of r2 and r3 we will"
    ],
    "ru": [
      "адрес следующего перехода для r2 и r3 мы будем"
    ]
  },
  {
    "time": [
      307.0,
      309.0
    ],
    "en": [
      "have to use their slack addresses which"
    ],
    "ru": [
      "должны использовать свои резервные адреса, которые"
    ]
  },
  {
    "time": [
      309.0,
      312.0
    ],
    "en": [
      "are not easy to remember so to do so"
    ],
    "ru": [
      "непросто запомнить, так что сделать это"
    ]
  },
  {
    "time": [
      312.0,
      315.0
    ],
    "en": [
      "I'll be copy and pasting their addresses"
    ],
    "ru": [
      "Я буду копировать и вставлять их адреса"
    ]
  },
  {
    "time": [
      315.0,
      323.0
    ],
    "en": [
      "first let me copy our twos g00 address"
    ],
    "ru": [
      "сначала позвольте мне скопировать наши два адреса g00"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "okay now I'll create the first route on"
    ],
    "ru": [
      "ладно сейчас я проложу первый маршрут на"
    ]
  },
  {
    "time": [
      326.0,
      333.0
    ],
    "en": [
      "r1 to our two's internal network ipv6"
    ],
    "ru": [
      "r1 во внутреннюю сеть наших двоих ipv6"
    ]
  },
  {
    "time": [
      333.0,
      340.0
    ],
    "en": [
      "route 2001 DB 8 2 2 double colon slash"
    ],
    "ru": [
      "маршрут 2001 DB 8 2 2 двойная косая черта с двоеточием"
    ]
  },
  {
    "time": [
      340.0,
      345.0
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
      340.0,
      345.0
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
      345.0,
      348.0
    ],
    "en": [
      "there we go now since I already have our"
    ],
    "ru": [
      "вот и мы, так как у меня уже есть наши"
    ]
  },
  {
    "time": [
      348.0,
      352.0
    ],
    "en": [
      "two SG 0 0 address copied I'm going to"
    ],
    "ru": [
      "скопированы два адреса SG 0 0 Я собираюсь"
    ]
  },
  {
    "time": [
      352.0,
      356.0
    ],
    "en": [
      "configure the same route on our three"
    ],
    "ru": [
      "настроить такой же маршрут на трех наших"
    ]
  },
  {
    "time": [
      356.0,
      363.0
    ],
    "en": [
      "ipv6 route 2001 DB 8 2 2 double colon"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 2 2 двойное двоеточие"
    ]
  },
  {
    "time": [
      363.0,
      368.0
    ],
    "en": [
      "slash 64 and paste our two's address in"
    ],
    "ru": [
      "косая черта 64 и вставьте адрес наших двоих в"
    ]
  },
  {
    "time": [
      368.0,
      370.0
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
      370.0,
      373.0
    ],
    "en": [
      "now I'll copy our fries jeez user"
    ],
    "ru": [
      "Теперь я скопирую нашего пользователя фри-джиз"
    ]
  },
  {
    "time": [
      373.0,
      375.0
    ],
    "en": [
      "interface address and make a route to"
    ],
    "ru": [
      "адрес интерфейса и проложить маршрут к"
    ]
  },
  {
    "time": [
      375.0,
      379.0
    ],
    "en": [
      "its internal network on r1 and r2 there"
    ],
    "ru": [
      "его внутренняя сеть на r1 и r2 там"
    ]
  },
  {
    "time": [
      379.0,
      380.0
    ],
    "en": [
      "we go"
    ],
    "ru": [
      "мы идем"
    ]
  },
  {
    "time": [
      380.0,
      387.0
    ],
    "en": [
      "now I'll go on our one IP v6 route 2001"
    ],
    "ru": [
      "теперь я пойду на наш единственный IP v6 маршрут 2001"
    ]
  },
  {
    "time": [
      387.0,
      394.0
    ],
    "en": [
      "DV 8 3 3 double colon slash 64 and paste"
    ],
    "ru": [
      "DV 8 3 3 двойная косая черта с двоеточием 64 и вставка"
    ]
  },
  {
    "time": [
      394.0,
      396.0
    ],
    "en": [
      "in the address"
    ],
    "ru": [
      "в адресе"
    ]
  },
  {
    "time": [
      396.0,
      402.0
    ],
    "en": [
      "there we go next on our to high six"
    ],
    "ru": [
      "вот и мы идем дальше на нашу шестерку"
    ]
  },
  {
    "time": [
      402.0,
      407.0
    ],
    "en": [
      "route 2001 DB 8 3 3 double colon slash"
    ],
    "ru": [
      "маршрут 2001 DB 8 3 3 двойная косая черта с двоеточием"
    ]
  },
  {
    "time": [
      407.0,
      413.0
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
      407.0,
      413.0
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
      413.0,
      414.0
    ],
    "en": [
      "okay"
    ],
    "ru": [
      "Ладно"
    ]
  },
  {
    "time": [
      414.0,
      416.0
    ],
    "en": [
      "now let's configure routes to our ones"
    ],
    "ru": [
      "теперь настроим маршруты на наши"
    ]
  },
  {
    "time": [
      416.0,
      420.0
    ],
    "en": [
      "internal network on r2 and r3 since i'm"
    ],
    "ru": [
      "внутренняя сеть на r2 и r3, так как я"
    ]
  },
  {
    "time": [
      420.0,
      423.0
    ],
    "en": [
      "on r2 already let's start here"
    ],
    "ru": [
      "на r2 уже давайте начнем здесь"
    ]
  },
  {
    "time": [
      423.0,
      430.0
    ],
    "en": [
      "ipv6 route 2001 DB 8 1 1 double colon"
    ],
    "ru": [
      "ipv6 route 2001 DB 8 1 1 двойное двоеточие"
    ]
  },
  {
    "time": [
      430.0,
      436.0
    ],
    "en": [
      "slash 64 2001 DB 8 1 2 3 1 2 3 double"
    ],
    "ru": [
      "слэш 64 2001 DB 8 1 2 3 1 2 3 двойной"
    ]
  },
  {
    "time": [
      436.0,
      443.0
    ],
    "en": [
      "colon 1 ok now on our three ipv6 route"
    ],
    "ru": [
      "двоеточие 1 хорошо, теперь на нашем маршруте из трех ipv6"
    ]
  },
  {
    "time": [
      443.0,
      451.0
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
      443.0,
      451.0
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
      460.0
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
      460.0
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
      460.0,
      462.0
    ],
    "en": [
      "all of our routes are now configured for"
    ],
    "ru": [
      "все наши маршруты теперь настроены для"
    ]
  },
  {
    "time": [
      462.0,
      464.0
    ],
    "en": [
      "this video I won't ping from each router"
    ],
    "ru": [
      "это видео я не буду пинговать с каждого роутера"
    ]
  },
  {
    "time": [
      464.0,
      466.0
    ],
    "en": [
      "but let's just try out some things from"
    ],
    "ru": [
      "но давайте просто попробуем кое-что из"
    ]
  },
  {
    "time": [
      466.0,
      471.0
    ],
    "en": [
      "r3 to test first I'll ping PC ones"
    ],
    "ru": [
      "r3 для тестирования сначала пингую на ПК"
    ]
  },
  {
    "time": [
      471.0,
      478.0
    ],
    "en": [
      "address exit ping 2001 DB 8 1 1 double"
    ],
    "ru": [
      "адрес выход ping 2001 DB 8 1 1 двойной"
    ]
  },
  {
    "time": [
      478.0,
      484.0
    ],
    "en": [
      "colon 64 ok the ping works and now I'll"
    ],
    "ru": [
      "двоеточие 64 хорошо, пинг работает, а теперь я"
    ]
  },
  {
    "time": [
      484.0,
      490.0
    ],
    "en": [
      "ping PC to ping 2001 DB 8 2 2 double"
    ],
    "ru": [
      "ping PC для ping 2001 DB 8 2 2 двойной"
    ]
  },
  {
    "time": [
      490.0,
      497.0
    ],
    "en": [
      "colon 64 again the ping works in this"
    ],
    "ru": [
      "двоеточие 64 снова пинг работает в этом"
    ]
  },
  {
    "time": [
      497.0,
      500.0
    ],
    "en": [
      "lab we configured manual ipv6 addresses"
    ],
    "ru": [
      "lab мы настроили IPv6-адреса вручную"
    ]
  },
  {
    "time": [
      500.0,
      503.0
    ],
    "en": [
      "slack addressing and ipv6 static ribs"
    ],
    "ru": [
      "слабая адресация и статические ребра ipv6"
    ]
  },
  {
    "time": [
      503.0,
      509.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "это все для этой лаборатории, спасибо за"
    ]
  },
  {
    "time": [
      509.0,
      511.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      511.0,
      513.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      513.0,
      515.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      515.0,
      518.0
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
      518.0,
      520.0
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
      520.0,
      523.0
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
      523.0,
      525.0
    ],
    "en": [
      "my channel I accept a Bitcoin and"
    ],
    "ru": [
      "мой канал я принимаю биткойны и"
    ]
  },
  {
    "time": [
      525.0,
      526.0
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
      526.0,
      530.0
    ],
    "en": [
      "the description I am also a brave"
    ],
    "ru": [
      "по описанию я тоже храбрый"
    ]
  },
  {
    "time": [
      530.0,
      530.0
    ],
    "en": [
      "verified"
    ],
    "ru": [
      "проверено"
    ]
  },
  {
    "time": [
      530.0,
      533.0
    ],
    "en": [
      "publisher and accept bat or basic"
    ],
    "ru": [
      "издатель и принять летучую мышь или базовый"
    ]
  },
  {
    "time": [
      533.0,
      535.0
    ],
    "en": [
      "attention token donations in the brave"
    ],
    "ru": [
      "пожертвования токенов внимания в храбрых"
    ]
  },
  {
    "time": [
      535.0,
      535.0
    ],
    "en": [
      "browser"
    ],
    "ru": [
      "браузер"
    ]
  }
]