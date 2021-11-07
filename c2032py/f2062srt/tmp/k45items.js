let objs = [
  {
    "time": [
      0.0,
      4.883696
    ],
    "en": [
      "welcome to this free CCNA packet racer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA пакетного гонщика"
    ]
  },
  {
    "time": [
      4.883696,
      8.924126
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
      8.924126,
      15.921224
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
      15.921224,
      20.461292
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
      20.461292,
      23.845532
    ],
    "en": [
      "and share these videos with anyone else studying for the CCNA"
    ],
    "ru": [
      "и поделитесь этими видео со всеми, кто учится на CCNA"
    ]
  },
  {
    "time": [
      23.845532,
      30.108412
    ],
    "en": [
      "in this lab we will configure BGP the border gateway protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим протокол пограничного шлюза BGP."
    ]
  },
  {
    "time": [
      30.108412,
      38.532719
    ],
    "en": [
      "unlike rip AIG RP and OSPF which are iGPS or interior gateway protocols"
    ],
    "ru": [
      "в отличие от rip AIG RP и OSPF, которые являются протоколами iGPS или внутреннего шлюза"
    ]
  },
  {
    "time": [
      38.532719,
      43.59442
    ],
    "en": [
      "BGP is an eg P an exterior gateway protocol"
    ],
    "ru": [
      "BGP - это, например, P протокол внешнего шлюза."
    ]
  },
  {
    "time": [
      43.59442,
      48.562241
    ],
    "en": [
      "while I GPS are used for routing within an organization"
    ],
    "ru": [
      "в то время как I GPS используются для маршрутизации внутри организации"
    ]
  },
  {
    "time": [
      48.562241,
      52.273057
    ],
    "en": [
      "eg PS are used for routing between organizations"
    ],
    "ru": [
      "например, PS используются для маршрутизации между организациями"
    ]
  },
  {
    "time": [
      52.273057,
      57.323873
    ],
    "en": [
      "and these days BGP is really the only EGP in use"
    ],
    "ru": [
      "и в наши дни BGP действительно единственный используемый EGP"
    ]
  },
  {
    "time": [
      57.323873,
      63.701832
    ],
    "en": [
      "the extent to which you have to know BGP is fairly limited for the CCNA"
    ],
    "ru": [
      "степень, в которой вы должны знать, что BGP довольно ограничена для CCNA"
    ]
  },
  {
    "time": [
      63.701832,
      71.899383
    ],
    "en": [
      "you can go deeper into BGP by continuing to the ccnp or by looking at the service provider track of certifications"
    ],
    "ru": [
      "вы можете углубиться в BGP, перейдя к ccnp или просмотрев список сертификатов поставщика услуг"
    ]
  },
  {
    "time": [
      71.899383,
      78.494757
    ],
    "en": [
      "for the CCNA routing and switching you have to be able to configure external bgp"
    ],
    "ru": [
      "для маршрутизации и коммутации CCNA вы должны иметь возможность настроить внешний bgp"
    ]
  },
  {
    "time": [
      78.494757,
      82.536684
    ],
    "en": [
      "or ebgp for single home to branch connectivity"
    ],
    "ru": [
      "или ebgp для подключения одного дома к филиалу"
    ]
  },
  {
    "time": [
      82.536684,
      88.703713
    ],
    "en": [
      "single home means a single connection to a single internet service provider"
    ],
    "ru": [
      "один дом означает одно подключение к одному интернет-провайдеру"
    ]
  },
  {
    "time": [
      88.703713,
      91.239269
    ],
    "en": [
      "as is the case here in this network"
    ],
    "ru": [
      "как и здесь, в этой сети"
    ]
  },
  {
    "time": [
      91.239269,
      97.691944
    ],
    "en": [
      "our organization is using BGP autonomous system number 65,000"
    ],
    "ru": [
      "наша организация использует автономную систему BGP номер 65000"
    ]
  },
  {
    "time": [
      97.691944,
      103.599359
    ],
    "en": [
      "and is connected to an Internet service provider in a s60 5001"
    ],
    "ru": [
      "и подключен к интернет-провайдеру в s60 5001"
    ]
  },
  {
    "time": [
      103.599359,
      110.216185
    ],
    "en": [
      "we will create a bgp peering between r1 and SPR 1"
    ],
    "ru": [
      "мы создадим пиринг bgp между r1 и SPR 1"
    ]
  },
  {
    "time": [
      110.216185,
      114.375617
    ],
    "en": [
      "so r1 will learn various desired routes from SP r1"
    ],
    "ru": [
      "поэтому r1 узнает различные желаемые маршруты от SP r1"
    ]
  },
  {
    "time": [
      114.375617,
      117.816071
    ],
    "en": [
      "and r1 will advertise our internal networks"
    ],
    "ru": [
      "а r1 будет рекламировать наши внутренние сети"
    ]
  },
  {
    "time": [
      117.816071,
      119.082488
    ],
    "en": [
      "out to the service provider"
    ],
    "ru": [
      "к поставщику услуг"
    ]
  },
  {
    "time": [
      119.082488,
      126.326456
    ],
    "en": [
      "in this case we will test by pinging to an external server at 1500 won"
    ],
    "ru": [
      "в этом случае мы будем тестировать пингом на внешний сервер на 1500 вон"
    ]
  },
  {
    "time": [
      126.326456,
      127.931853
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
      127.931853,
      131.414619
    ],
    "en": [
      "first I'll go on r2"
    ],
    "ru": [
      "сначала я пойду на r2"
    ]
  },
  {
    "time": [
      131.414619,
      136.320401
    ],
    "en": [
      "enable show IP route"
    ],
    "ru": [
      "включить показ IP-маршрута"
    ]
  },
  {
    "time": [
      136.320401,
      141.993485
    ],
    "en": [
      "as you can see r2 has already learned various routes from OSPF"
    ],
    "ru": [
      "как вы можете видеть, r2 уже изучил различные маршруты от OSPF"
    ]
  },
  {
    "time": [
      141.993485,
      143.877045
    ],
    "en": [
      "which is used within the organization"
    ],
    "ru": [
      "который используется в организации"
    ]
  },
  {
    "time": [
      143.877045,
      147.756478
    ],
    "en": [
      "and has learned a default route to the internet from r1"
    ],
    "ru": [
      "и узнал маршрут в Интернет по умолчанию от r1"
    ]
  },
  {
    "time": [
      147.756478,
      152.277635
    ],
    "en": [
      "which use the default information originated command in OSPF"
    ],
    "ru": [
      "которые используют исходную информацию по умолчанию в OSPF"
    ]
  },
  {
    "time": [
      152.277635,
      901.0
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
      901.0,
      158.080446
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
      158.080446,
      159.301874
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
      159.301874,
      169.273756
    ],
    "en": [
      "ping 1500 dot 1 as expected the ping fails"
    ],
    "ru": [
      "ping 1500 точка 1, как и ожидалось, ping не выполняется"
    ]
  },
  {
    "time": [
      169.273756,
      174.37938
    ],
    "en": [
      "this is because we haven't advertised our internal networks to the service provider"
    ],
    "ru": [
      "это потому, что мы не рекламировали наши внутренние сети поставщику услуг"
    ]
  },
  {
    "time": [
      174.37938,
      176.488178
    ],
    "en": [
      "so the pings have no return path"
    ],
    "ru": [
      "поэтому у пингов нет обратного пути"
    ]
  },
  {
    "time": [
      176.488178,
      181.285684
    ],
    "en": [
      "so let's go on r1 and configure BGP"
    ],
    "ru": [
      "так что давайте перейдем к r1 и настроим BGP"
    ]
  },
  {
    "time": [
      181.285684,
      189.602396
    ],
    "en": [
      "enable con 47 mode"
    ],
    "ru": [
      "включить режим con 47"
    ]
  },
  {
    "time": [
      189.602396,
      192.191284
    ],
    "en": [
      "type router bgp"
    ],
    "ru": [
      "тип router bgp"
    ]
  },
  {
    "time": [
      192.191284,
      195.516636
    ],
    "en": [
      "followed by the a s or autonomous system number"
    ],
    "ru": [
      "за которым следует a s или номер автономной системы"
    ]
  },
  {
    "time": [
      195.516636,
      198.236953
    ],
    "en": [
      "in this case 65,000"
    ],
    "ru": [
      "в данном случае 65 000"
    ]
  },
  {
    "time": [
      198.236953,
      202.103053
    ],
    "en": [
      "a s numbers are very important for BGP"
    ],
    "ru": [
      "числа очень важны для BGP"
    ]
  },
  {
    "time": [
      202.103053,
      203.884187
    ],
    "en": [
      "so make sure you type them correctly"
    ],
    "ru": [
      "поэтому убедитесь, что вы вводите их правильно"
    ]
  },
  {
    "time": [
      203.884187,
      209.704935
    ],
    "en": [
      "now unlike OSPF and EIGRP which dynamically discover neighbors"
    ],
    "ru": [
      "теперь в отличие от OSPF и EIGRP, которые динамически обнаруживают соседей"
    ]
  },
  {
    "time": [
      209.704935,
      211.801035
    ],
    "en": [
      "by being activated on interfaces"
    ],
    "ru": [
      "путем активации на интерфейсах"
    ]
  },
  {
    "time": [
      211.801035,
      213.71888
    ],
    "en": [
      "and sending multicast messages"
    ],
    "ru": [
      "и отправка многоадресных сообщений"
    ]
  },
  {
    "time": [
      213.71888,
      217.996295
    ],
    "en": [
      "in BGP we must manually specify each neighbor"
    ],
    "ru": [
      "в BGP мы должны вручную указывать каждого соседа"
    ]
  },
  {
    "time": [
      217.996295,
      222.192848
    ],
    "en": [
      "and a TCP connection is then made to form the peering"
    ],
    "ru": [
      "и затем создается TCP-соединение для формирования пиринга"
    ]
  },
  {
    "time": [
      222.192848,
      225.025002
    ],
    "en": [
      "you can do that with this command"
    ],
    "ru": [
      "вы можете сделать это с помощью этой команды"
    ]
  },
  {
    "time": [
      225.025002,
      228.324163
    ],
    "en": [
      "neighbor 101"
    ],
    "ru": [
      "сосед 101"
    ]
  },
  {
    "time": [
      228.324163,
      231.597201
    ],
    "en": [
      "that being the IP address of SP r1"
    ],
    "ru": [
      "это IP-адрес SP r1"
    ]
  },
  {
    "time": [
      231.597201,
      233.242961
    ],
    "en": [
      "the service provider router"
    ],
    "ru": [
      "маршрутизатор поставщика услуг"
    ]
  },
  {
    "time": [
      233.242961,
      237.112462
    ],
    "en": [
      "and that next remote - a s"
    ],
    "ru": [
      "и этот следующий пульт - а с"
    ]
  },
  {
    "time": [
      237.112462,
      240.413505
    ],
    "en": [
      "followed by the a s number of the neighbor"
    ],
    "ru": [
      "за которым следует номер соседа"
    ]
  },
  {
    "time": [
      240.413505,
      243.934231
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
      240.413505,
      243.934231
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
      243.934231,
      247.072212
    ],
    "en": [
      "again a s numbers are very important for BGP"
    ],
    "ru": [
      "опять же числа очень важны для BGP"
    ]
  },
  {
    "time": [
      247.072212,
      250.551578
    ],
    "en": [
      "so make sure you enter your own a s number correctly"
    ],
    "ru": [
      "поэтому убедитесь, что вы правильно ввели свой собственный номер"
    ]
  },
  {
    "time": [
      250.551578,
      251.945228
    ],
    "en": [
      "when entering BGP mode"
    ],
    "ru": [
      "при входе в режим BGP"
    ]
  },
  {
    "time": [
      251.945228,
      255.970693
    ],
    "en": [
      "and make sure you type the neighbors a s number correctly when using the neighbor command"
    ],
    "ru": [
      "и убедитесь, что вы правильно ввели номер соседа a s при использовании команды Neighbor"
    ]
  },
  {
    "time": [
      255.970693,
      259.990829
    ],
    "en": [
      "next let's move on to advertising networks"
    ],
    "ru": [
      "дальше перейдем к рекламным сетям"
    ]
  },
  {
    "time": [
      259.990829,
      265.242053
    ],
    "en": [
      "to review the Network statement used in a EIGRP and OSPF"
    ],
    "ru": [
      "для просмотра оператора сети, используемого в протоколах EIGRP и OSPF"
    ]
  },
  {
    "time": [
      265.242053,
      269.175273
    ],
    "en": [
      "the network command doesn't actually specify which networks to advertise"
    ],
    "ru": [
      "команда network на самом деле не указывает, какие сети рекламировать"
    ]
  },
  {
    "time": [
      269.175273,
      273.759196
    ],
    "en": [
      "it specifies which interfaces to activate the protocol on"
    ],
    "ru": [
      "он указывает, на каких интерфейсах активировать протокол"
    ]
  },
  {
    "time": [
      273.759196,
      276.642665
    ],
    "en": [
      "and then those interfaces networks are advertised"
    ],
    "ru": [
      "а затем рекламируются эти интерфейсные сети"
    ]
  },
  {
    "time": [
      276.642665,
      279.396339
    ],
    "en": [
      "so when using the network command"
    ],
    "ru": [
      "поэтому при использовании сетевой команды"
    ]
  },
  {
    "time": [
      279.396339,
      282.917495
    ],
    "en": [
      "you don't have to enter the exact network prefix and mask"
    ],
    "ru": [
      "вам не нужно вводить точный префикс сети и маску"
    ]
  },
  {
    "time": [
      282.917495,
      286.029332
    ],
    "en": [
      "however BGP is different"
    ],
    "ru": [
      "однако BGP отличается"
    ]
  },
  {
    "time": [
      286.029332,
      290.398652
    ],
    "en": [
      "in BGP you have to enter the exact network and mask"
    ],
    "ru": [
      "в BGP необходимо ввести точную сеть и маску"
    ]
  },
  {
    "time": [
      290.398652,
      293.422824
    ],
    "en": [
      "and a matching route must be in your routing table"
    ],
    "ru": [
      "и соответствующий маршрут должен быть в вашей таблице маршрутизации"
    ]
  },
  {
    "time": [
      293.422824,
      299.555953
    ],
    "en": [
      "for example our one has a loopback of 1.1.1 1/32"
    ],
    "ru": [
      "например у нашего есть шлейф 1.1.1 1/32"
    ]
  },
  {
    "time": [
      299.555953,
      305.624774
    ],
    "en": [
      "if I enter 100 with a / 8 mask in the network command"
    ],
    "ru": [
      "если я введу 100 с маской / 8 в сетевой команде"
    ]
  },
  {
    "time": [
      305.624774,
      306.867109
    ],
    "en": [
      "it won't work"
    ],
    "ru": [
      "это не сработает"
    ]
  },
  {
    "time": [
      306.867109,
      312.930601
    ],
    "en": [
      "I have to enter the exact 1.1.11 / 32 network to advertise it"
    ],
    "ru": [
      "Мне нужно ввести точную сеть 1.1.11 / 32, чтобы рекламировать ее"
    ]
  },
  {
    "time": [
      312.930601,
      316.201168
    ],
    "en": [
      "so let's advertise the loop Beck's"
    ],
    "ru": [
      "так что давайте рекламировать петлю Бека"
    ]
  },
  {
    "time": [
      316.201168,
      319.635046
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      319.635046,
      331.251712
    ],
    "en": [
      "as you can see I have rights to 1.1.11 / 32 - 2 - 2 / 32 and 3.33 3/32"
    ],
    "ru": [
      "как видите, у меня есть права на 1.1.11 / 32-2-2 / 32 и 3.33 3/32"
    ]
  },
  {
    "time": [
      331.251712,
      333.50432
    ],
    "en": [
      "so I can advertise them in BGP"
    ],
    "ru": [
      "так что я могу рекламировать их в BGP"
    ]
  },
  {
    "time": [
      333.50432,
      337.28339
    ],
    "en": [
      "the BGP Network command goes like this"
    ],
    "ru": [
      "команда BGP Network выглядит так"
    ]
  },
  {
    "time": [
      337.28339,
      346.988696
    ],
    "en": [
      "Network 1.1.11 mask 255.255.255.0 5"
    ],
    "ru": [
      "Маска сети 1.1.11 255.255.255.0 5"
    ]
  },
  {
    "time": [
      346.988696,
      349.493708
    ],
    "en": [
      "you have to type mask in the command"
    ],
    "ru": [
      "вы должны ввести маску в команде"
    ]
  },
  {
    "time": [
      349.493708,
      353.843934
    ],
    "en": [
      "and also it's not a wildcard mask like in Eid RP and OSPF"
    ],
    "ru": [
      "а также это не подстановочная маска, как в Eid RP и OSPF"
    ]
  },
  {
    "time": [
      353.843934,
      355.483413
    ],
    "en": [
      "it's a standard Network mask"
    ],
    "ru": [
      "это стандартная маска сети"
    ]
  },
  {
    "time": [
      355.483413,
      357.866678
    ],
    "en": [
      "okay let's do the others"
    ],
    "ru": [
      "хорошо, давайте сделаем остальные"
    ]
  },
  {
    "time": [
      357.866678,
      365.571984
    ],
    "en": [
      "Network - - - - mask 255.255.255.0 5"
    ],
    "ru": [
      "Сеть - - - - маска 255.255.255.0 5"
    ]
  },
  {
    "time": [
      365.571984,
      373.113299
    ],
    "en": [
      "Network 3 3 3 3 mask 255.255.255.0 5"
    ],
    "ru": [
      "Сеть 3 3 3 3 маска 255.255.255.0 5"
    ]
  },
  {
    "time": [
      373.113299,
      379.7028
    ],
    "en": [
      "ok the next step is to advertise a summary of the Tendo 12/30 10.23 o / 30"
    ],
    "ru": [
      "хорошо, следующий шаг - рекламировать резюме Tendo 12/30 10.23 o / 30"
    ]
  },
  {
    "time": [
      379.7028,
      382.336768
    ],
    "en": [
      "and 10.30"
    ],
    "ru": [
      "и 10.30"
    ]
  },
  {
    "time": [
      382.336768,
      385.639988
    ],
    "en": [
      "know / 30 networks"
    ],
    "ru": [
      "знать / 30 сетей"
    ]
  },
  {
    "time": [
      385.639988,
      389.446405
    ],
    "en": [
      "with a single Network command using a slash 16 mask"
    ],
    "ru": [
      "с помощью одной сетевой команды с использованием маски косой черты 16"
    ]
  },
  {
    "time": [
      389.446405,
      391.955883
    ],
    "en": [
      "now this is a problem"
    ],
    "ru": [
      "теперь это проблема"
    ]
  },
  {
    "time": [
      391.955883,
      397.194908
    ],
    "en": [
      "I said before there has to be a match in the route table to advertise something in BGP"
    ],
    "ru": [
      "Я уже говорил, что в таблице маршрутов должно быть совпадение, чтобы что-то прорекламировать в BGP."
    ]
  },
  {
    "time": [
      397.194908,
      400.201801
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      400.201801,
      405.944568
    ],
    "en": [
      "there is no 1000 2/16 network in the routing table"
    ],
    "ru": [
      "в таблице маршрутизации нет сети 1000 2/16"
    ]
  },
  {
    "time": [
      405.944568,
      408.698467
    ],
    "en": [
      "here I'll do the network command"
    ],
    "ru": [
      "здесь я сделаю сетевую команду"
    ]
  },
  {
    "time": [
      408.698467,
      416.457809
    ],
    "en": [
      "network 10000 mask 255.255.255.0"
    ],
    "ru": [
      "сеть 10000 маска 255.255.255.0"
    ]
  },
  {
    "time": [
      416.457809,
      431.42885
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
      431.42885,
      432.787921
    ],
    "en": [
      "it still doesn't work"
    ],
    "ru": [
      "это все еще не работает"
    ]
  },
  {
    "time": [
      432.787921,
      437.773431
    ],
    "en": [
      "because r1 is in advertising that 1000 / 16 Network yet"
    ],
    "ru": [
      "потому что r1 рекламирует сеть 1000/16."
    ]
  },
  {
    "time": [
      437.773431,
      440.362161
    ],
    "en": [
      "because it doesn't have the route in its route table"
    ],
    "ru": [
      "потому что у него нет маршрута в его таблице маршрутов"
    ]
  },
  {
    "time": [
      440.362161,
      443.531526
    ],
    "en": [
      "so let's go back to our 1 and make a route"
    ],
    "ru": [
      "так что вернемся к нашему 1 и проложим маршрут"
    ]
  },
  {
    "time": [
      443.531526,
      453.48699
    ],
    "en": [
      "exit IP route 10000 255 255 0 0"
    ],
    "ru": [
      "выход из IP-маршрута 10000255255 0 0"
    ]
  },
  {
    "time": [
      453.48699,
      454.946197
    ],
    "en": [
      "now what should we enter next"
    ],
    "ru": [
      "теперь что мы должны ввести дальше"
    ]
  },
  {
    "time": [
      454.946197,
      459.473271
    ],
    "en": [
      "the answer is null 0"
    ],
    "ru": [
      "ответ нулевой 0"
    ]
  },
  {
    "time": [
      459.473271,
      463.41606
    ],
    "en": [
      "the null 0 interface essentially discards anything that is sent to it"
    ],
    "ru": [
      "интерфейс с нулевым 0 по существу отбрасывает все, что ему отправлено"
    ]
  },
  {
    "time": [
      463.41606,
      466.220392
    ],
    "en": [
      "why would we want to use that"
    ],
    "ru": [
      "зачем нам это использовать"
    ]
  },
  {
    "time": [
      466.220392,
      470.590505
    ],
    "en": [
      "well we wanted to create the route to advertise it in BGP"
    ],
    "ru": [
      "ну, мы хотели создать маршрут для рекламы в BGP"
    ]
  },
  {
    "time": [
      470.590505,
      473.344632
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      473.344632,
      478.656333
    ],
    "en": [
      "there's the 10000 / 16 route"
    ],
    "ru": [
      "есть маршрут 10000/16"
    ]
  },
  {
    "time": [
      478.656333,
      481.021049
    ],
    "en": [
      "and here are our more specific routes"
    ],
    "ru": [
      "и вот наши более конкретные маршруты"
    ]
  },
  {
    "time": [
      481.021049,
      493.806332
    ],
    "en": [
      "any traffic that comes for the Tendo 12/30 10.30 no / 30 or 10.23 o / 30 networks will be sent out their appropriate interfaces"
    ],
    "ru": [
      "любой трафик, который поступает для сетей Tendo 12/30 10.30 no / 30 или 10.23 o / 30, будет отправлен через соответствующие интерфейсы"
    ]
  },
  {
    "time": [
      493.806332,
      501.859824
    ],
    "en": [
      "because these have a more specific meaning a longer network mask / 30 vs / 16"
    ],
    "ru": [
      "потому что они имеют более конкретное значение более длинная сетевая маска / 30 против / 16"
    ]
  },
  {
    "time": [
      501.859824,
      508.024381
    ],
    "en": [
      "however if something comes for the 1001 o / 24 Network for example"
    ],
    "ru": [
      "однако, если что-то приходит, например, для сети 1001 o / 24"
    ]
  },
  {
    "time": [
      508.024381,
      512.85098
    ],
    "en": [
      "it won't match any of those and will instead be sent to the null 0 interface"
    ],
    "ru": [
      "он не будет соответствовать ни одному из них и вместо этого будет отправлен в интерфейс с нулевым значением 0"
    ]
  },
  {
    "time": [
      512.85098,
      513.895991
    ],
    "en": [
      "and discarded"
    ],
    "ru": [
      "и отброшен"
    ]
  },
  {
    "time": [
      513.895991,
      518.706443
    ],
    "en": [
      "this is good because the 10.10 / 24 network"
    ],
    "ru": [
      "это хорошо, потому что сеть 10.10 / 24"
    ]
  },
  {
    "time": [
      518.706443,
      521.252634
    ],
    "en": [
      "isn't present in our internal network"
    ],
    "ru": [
      "нет в нашей внутренней сети"
    ]
  },
  {
    "time": [
      521.252634,
      525.844085
    ],
    "en": [
      "so there's no point in sending a packet destined for that network any further than our one"
    ],
    "ru": [
      "поэтому нет смысла отправлять пакет, предназначенный для этой сети, дальше, чем наш"
    ]
  },
  {
    "time": [
      525.844085,
      530.781137
    ],
    "en": [
      "the use of that null 0 interface can be a little difficult to understand"
    ],
    "ru": [
      "использование этого интерфейса с нулевым значением 0 может быть немного трудным для понимания"
    ]
  },
  {
    "time": [
      530.781137,
      533.500025
    ],
    "en": [
      "feel free to ask questions if you're not sure about it"
    ],
    "ru": [
      "не стесняйтесь задавать вопросы, если вы не уверены в этом"
    ]
  },
  {
    "time": [
      533.500025,
      539.164855
    ],
    "en": [
      "this use of a null interface is often called a discard route by the way"
    ],
    "ru": [
      "кстати, такое использование нулевого интерфейса часто называют маршрутом сброса."
    ]
  },
  {
    "time": [
      539.164855,
      546.722814
    ],
    "en": [
      "anyway now the 10000 / 60 network is present in our Rev table"
    ],
    "ru": [
      "в любом случае теперь сеть 10000/60 присутствует в нашей таблице Rev."
    ]
  },
  {
    "time": [
      546.722814,
      550.377122
    ],
    "en": [
      "so that means r1 will be advertising it to the service provider"
    ],
    "ru": [
      "это означает, что r1 будет рекламировать его поставщику услуг"
    ]
  },
  {
    "time": [
      550.377122,
      554.634061
    ],
    "en": [
      "so if we send a ping to the remote server from r2"
    ],
    "ru": [
      "поэтому, если мы отправим пинг на удаленный сервер с r2"
    ]
  },
  {
    "time": [
      554.634061,
      557.939639
    ],
    "en": [
      "the ping reply should be able to find its way back now"
    ],
    "ru": [
      "ответ ping должен быть в состоянии вернуться назад"
    ]
  },
  {
    "time": [
      557.939639,
      559.684287
    ],
    "en": [
      "let's try on r2"
    ],
    "ru": [
      "давай попробуем на r2"
    ]
  },
  {
    "time": [
      559.684287,
      564.002472
    ],
    "en": [
      "ping 1500 won"
    ],
    "ru": [
      "ping 1500 вон"
    ]
  },
  {
    "time": [
      564.002472,
      570.56347
    ],
    "en": [
      "there we go the ping works this time"
    ],
    "ru": [
      "на этот раз пинг работает"
    ]
  },
  {
    "time": [
      570.56347,
      574.965194
    ],
    "en": [
      "so in this lab we configured an external bgp neighbor"
    ],
    "ru": [
      "поэтому в этой лабораторной работе мы настроили внешнего соседа по bgp"
    ]
  },
  {
    "time": [
      574.965194,
      577.590273
    ],
    "en": [
      "advertised our internal networks"
    ],
    "ru": [
      "рекламировал наши внутренние сети"
    ]
  },
  {
    "time": [
      577.590273,
      580.153538
    ],
    "en": [
      "and looked at the idea of a discard route"
    ],
    "ru": [
      "и посмотрел на идею сброса маршрута"
    ]
  },
  {
    "time": [
      580.153538,
      581.877506
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
      581.877506,
      585.92483
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
      585.92483,
      588.542926
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
      588.542926,
      591.668005
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
      591.668005,
      593.326214
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
      593.326214,
      598.659003
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
      598.659003,
      605.760227
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
      605.760227,
      614.896304
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
      614.896304,
      614.896304
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
      614.896304,
      614.896304
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
      614.896304,
      614.896304
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]