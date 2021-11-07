let objs = [
  {
    "time": [
      0.0,
      4.669332
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
      4.669332,
      7.566103
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
      7.566103,
      14.421082
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
      14.421082,
      18.17004
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
      18.17004,
      23.009749
    ],
    "en": [
      "in this lab we will once again configure a IG RP"
    ],
    "ru": [
      "в этой лабораторной работе мы еще раз настроим IG RP"
    ]
  },
  {
    "time": [
      23.009749,
      26.109228
    ],
    "en": [
      "this time in a network that uses ipv6"
    ],
    "ru": [
      "на этот раз в сети, которая использует ipv6"
    ]
  },
  {
    "time": [
      26.109228,
      33.841082
    ],
    "en": [
      "configuring a IG RP for ipv6 is very similar to configuring OSPF v3 for ipv6"
    ],
    "ru": [
      "настройка IG RP для ipv6 очень похожа на настройку OSPF v3 для ipv6"
    ]
  },
  {
    "time": [
      33.841082,
      41.958978
    ],
    "en": [
      "rather than using the network command in Eid RP configuration mode you can figure it directly on the interfaces"
    ],
    "ru": [
      "вместо того, чтобы использовать сетевую команду в режиме конфигурации Eid RP, вы можете использовать ее непосредственно на интерфейсах."
    ]
  },
  {
    "time": [
      41.958978,
      47.859395
    ],
    "en": [
      "aside from that there isn't much different between configuring a EIGRP for ipv6"
    ],
    "ru": [
      "помимо этого нет большой разницы между настройкой EIGRP для ipv6"
    ]
  },
  {
    "time": [
      47.859395,
      49.577332
    ],
    "en": [
      "and for ipv4"
    ],
    "ru": [
      "и для ipv4"
    ]
  },
  {
    "time": [
      49.577332,
      51.079832
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
      51.079832,
      55.880332
    ],
    "en": [
      "the first step is to configure loopback interfaces on each router"
    ],
    "ru": [
      "первый шаг - настроить интерфейсы обратной связи на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      55.880332,
      59.352498
    ],
    "en": [
      "these will become the EIG RP router IDs"
    ],
    "ru": [
      "они станут идентификаторами маршрутизатора EIG RP"
    ]
  },
  {
    "time": [
      59.352498,
      69.997165
    ],
    "en": [
      "like OSPF v3 for ipv6 ERG RP for ipv6 uses a 32-bit router ID in the form of an ipv4 address"
    ],
    "ru": [
      "как OSPF v3 для ipv6 ERG RP для ipv6 использует 32-битный идентификатор маршрутизатора в форме адреса ipv4"
    ]
  },
  {
    "time": [
      69.997165,
      73.849332
    ],
    "en": [
      "although it doesn't have to actually be an address on the device"
    ],
    "ru": [
      "хотя на самом деле это не обязательно должен быть адрес на устройстве"
    ]
  },
  {
    "time": [
      73.849332,
      76.992165
    ],
    "en": [
      "you can manually configure the ID"
    ],
    "ru": [
      "вы можете вручную настроить ID"
    ]
  },
  {
    "time": [
      76.992165,
      83.384935
    ],
    "en": [
      "however if you don't the highest ipv4 address on a loopback interface will become the router ID"
    ],
    "ru": [
      "однако, если вы этого не сделаете, самый высокий IPv4-адрес на интерфейсе обратной связи станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      83.384935,
      90.506706
    ],
    "en": [
      "if there is no loopback interface the highest ipv4 address on a regular interface will become the router ID"
    ],
    "ru": [
      "если нет интерфейса обратной связи, наивысший адрес ipv4 на обычном интерфейсе станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      90.506706,
      95.263956
    ],
    "en": [
      "I think I've configured enough loopback interfaces for these videos by now"
    ],
    "ru": [
      "Я думаю, что к настоящему времени я настроил достаточно интерфейсов обратной связи для этих видео."
    ]
  },
  {
    "time": [
      95.263956,
      100.995289
    ],
    "en": [
      "so just for this video I've already configured that loopback interfaces on are two three four and five"
    ],
    "ru": [
      "так что только для этого видео я уже настроил, что интерфейсы обратной связи на два, три, четыре и пять"
    ]
  },
  {
    "time": [
      100.995289,
      104.115122
    ],
    "en": [
      "let's just quickly do it on our one"
    ],
    "ru": [
      "давай быстро сделаем это на нашем"
    ]
  },
  {
    "time": [
      104.115122,
      108.310934
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      108.310934,
      110.746142
    ],
    "en": [
      "interface l0"
    ],
    "ru": [
      "интерфейс l0"
    ]
  },
  {
    "time": [
      110.746142,
      118.4086
    ],
    "en": [
      "IP address 1.1 1.1 255.255.255.0 5"
    ],
    "ru": [
      "IP-адрес 1.1 1.1 255.255.255.0 5"
    ]
  },
  {
    "time": [
      118.4086,
      119.987892
    ],
    "en": [
      "ok that's all"
    ],
    "ru": [
      "хорошо, это все"
    ]
  },
  {
    "time": [
      119.987892,
      124.255246
    ],
    "en": [
      "next is to configure a IG RP on this network"
    ],
    "ru": [
      "далее нужно настроить IG RP в этой сети"
    ]
  },
  {
    "time": [
      124.255246,
      126.486808
    ],
    "en": [
      "let's start here on r1"
    ],
    "ru": [
      "давай начнем здесь на r1"
    ]
  },
  {
    "time": [
      126.486808,
      133.639225
    ],
    "en": [
      "to configure a IG RP for ipv6 just put ipv6 in front of the usual command"
    ],
    "ru": [
      "чтобы настроить IG RP для ipv6, просто поставьте ipv6 перед обычной командой"
    ]
  },
  {
    "time": [
      133.639225,
      137.529412
    ],
    "en": [
      "ipv6 router EAG RP"
    ],
    "ru": [
      "маршрутизатор ipv6 EAG RP"
    ]
  },
  {
    "time": [
      137.529412,
      140.858162
    ],
    "en": [
      "and once again we'll use the a s number 100"
    ],
    "ru": [
      "и еще раз мы будем использовать число 100"
    ]
  },
  {
    "time": [
      140.858162,
      146.963203
    ],
    "en": [
      "now as I mentioned before we don't actually activate ERG RP on the interfaces from here"
    ],
    "ru": [
      "теперь, как я упоминал ранее, мы фактически не активируем ERG RP на интерфейсах отсюда"
    ]
  },
  {
    "time": [
      146.963203,
      153.623162
    ],
    "en": [
      "however one of the requirements for the lab is to make our ones g02 interface passive"
    ],
    "ru": [
      "однако одно из требований к лаборатории - сделать наш интерфейс g02 пассивным."
    ]
  },
  {
    "time": [
      153.623162,
      159.672203
    ],
    "en": [
      "previously we use this command to suppress advertisements on loopback interfaces"
    ],
    "ru": [
      "ранее мы использовали эту команду для подавления рекламы на интерфейсах обратной связи"
    ]
  },
  {
    "time": [
      159.672203,
      164.427578
    ],
    "en": [
      "because there's no point in sending advertisements on interfaces leading to nowhere"
    ],
    "ru": [
      "потому что нет смысла рассылать рекламу по интерфейсам, ведущим в никуда"
    ]
  },
  {
    "time": [
      164.427578,
      170.600953
    ],
    "en": [
      "in this case however we want to advertise the network on the g02 interface into EIGRP"
    ],
    "ru": [
      "в этом случае, однако, мы хотим анонсировать сеть на интерфейсе g02 в EIGRP."
    ]
  },
  {
    "time": [
      170.600953,
      179.516599
    ],
    "en": [
      "but want to suppress advertisements on the interface because of possible security risks of sending AI GRP advertisements out towards the internet"
    ],
    "ru": [
      "но хотите подавить рекламу на интерфейсе из-за возможных рисков для безопасности отправки рекламных объявлений AI GRP в Интернет."
    ]
  },
  {
    "time": [
      179.516599,
      183.715286
    ],
    "en": [
      "the command is the same as with ipv4"
    ],
    "ru": [
      "команда такая же, как с ipv4"
    ]
  },
  {
    "time": [
      183.715286,
      186.729369
    ],
    "en": [
      "passive interface g02"
    ],
    "ru": [
      "пассивный интерфейс g02"
    ]
  },
  {
    "time": [
      186.729369,
      191.106744
    ],
    "en": [
      "okay now let's activate a IG r p on the interfaces"
    ],
    "ru": [
      "хорошо, теперь давайте активируем IG r p на интерфейсах"
    ]
  },
  {
    "time": [
      191.106744,
      200.188328
    ],
    "en": [
      "interface g00 ipv6 zi g RP followed by the a.s number 100"
    ],
    "ru": [
      "interface g00 ipv6 zi g RP, за которым следует номер a.s 100"
    ]
  },
  {
    "time": [
      200.188328,
      201.930953
    ],
    "en": [
      "that's all there is to it"
    ],
    "ru": [
      "это все, что нужно для этого"
    ]
  },
  {
    "time": [
      201.930953,
      207.497223
    ],
    "en": [
      "interface G 0 1 IP v6 z IG RP 100"
    ],
    "ru": [
      "интерфейс G 0 1 IP v6 z IG RP 100"
    ]
  },
  {
    "time": [
      207.497223,
      212.881598
    ],
    "en": [
      "interface G 0 to ipv6 AI g RP 100"
    ],
    "ru": [
      "интерфейс G 0 - ipv6 AI g RP 100"
    ]
  },
  {
    "time": [
      212.881598,
      217.440078
    ],
    "en": [
      "ok we've activated AI g RP on all of our ones interfaces"
    ],
    "ru": [
      "хорошо, мы активировали AI g RP на всех наших интерфейсах"
    ]
  },
  {
    "time": [
      217.440078,
      219.645744
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      219.645744,
      225.573181
    ],
    "en": [
      "here's the EIG RP configuration"
    ],
    "ru": [
      "вот конфигурация EIG RP"
    ]
  },
  {
    "time": [
      225.573181,
      228.02341
    ],
    "en": [
      "but what's this shut down"
    ],
    "ru": [
      "но что это за закрытие"
    ]
  },
  {
    "time": [
      228.02341,
      232.479514
    ],
    "en": [
      "yes ERG RP for ipv6 has a shutdown feature"
    ],
    "ru": [
      "да ERG RP для ipv6 имеет функцию выключения"
    ]
  },
  {
    "time": [
      232.479514,
      239.598077
    ],
    "en": [
      "I think that whether the process is shut down by defaults depends on either the OS version or the router model"
    ],
    "ru": [
      "Я думаю, что то, будет ли процесс завершен по умолчанию, зависит либо от версии ОС, либо от модели маршрутизатора."
    ]
  },
  {
    "time": [
      239.598077,
      242.07491
    ],
    "en": [
      "in this case it's shut down by default"
    ],
    "ru": [
      "в этом случае он выключен по умолчанию"
    ]
  },
  {
    "time": [
      242.07491,
      244.825347
    ],
    "en": [
      "so let's go back to a IG RP configuration mode"
    ],
    "ru": [
      "так что вернемся в режим конфигурации IG RP"
    ]
  },
  {
    "time": [
      244.825347,
      246.153472
    ],
    "en": [
      "and activate it"
    ],
    "ru": [
      "и активируй это"
    ]
  },
  {
    "time": [
      246.153472,
      250.25916
    ],
    "en": [
      "ipv6 router ew g RP 100"
    ],
    "ru": [
      "маршрутизатор ipv6 ew g RP 100"
    ]
  },
  {
    "time": [
      250.25916,
      251.705889
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
      251.705889,
      256.372305
    ],
    "en": [
      "now I'll go through and do the same thing on the other routers"
    ],
    "ru": [
      "сейчас я пройду и сделаю то же самое на других роутерах"
    ]
  },
  {
    "time": [
      256.372305,
      257.948367
    ],
    "en": [
      "are to next"
    ],
    "ru": [
      "следующие"
    ]
  },
  {
    "time": [
      257.948367,
      262.381429
    ],
    "en": [
      "enable coffee tea"
    ],
    "ru": [
      "включить кофе чай"
    ]
  },
  {
    "time": [
      262.381429,
      267.333096
    ],
    "en": [
      "now we don't actually have to create the EIG RP process here"
    ],
    "ru": [
      "теперь нам фактически не нужно создавать здесь процесс EIG RP"
    ]
  },
  {
    "time": [
      267.333096,
      269.869678
    ],
    "en": [
      "we can go directly to the interface"
    ],
    "ru": [
      "мы можем перейти прямо к интерфейсу"
    ]
  },
  {
    "time": [
      269.869678,
      274.462012
    ],
    "en": [
      "and if we activate AIG our pas 100 on that interface"
    ],
    "ru": [
      "и если мы активируем AIG, наш pas 100 на этом интерфейсе"
    ]
  },
  {
    "time": [
      274.462012,
      277.367074
    ],
    "en": [
      "the router will create the eigrp process for us"
    ],
    "ru": [
      "маршрутизатор создаст для нас процесс eigrp"
    ]
  },
  {
    "time": [
      277.367074,
      280.046907
    ],
    "en": [
      "interface g00"
    ],
    "ru": [
      "интерфейс g00"
    ]
  },
  {
    "time": [
      280.046907,
      284.105366
    ],
    "en": [
      "ipv6 AIG RP 100"
    ],
    "ru": [
      "ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      284.105366,
      286.585053
    ],
    "en": [
      "interface G 0 1"
    ],
    "ru": [
      "интерфейс G 0 1"
    ]
  },
  {
    "time": [
      286.585053,
      289.851616
    ],
    "en": [
      "IP v6 AIG RP 100"
    ],
    "ru": [
      "IP v6 AIG RP 100"
    ]
  },
  {
    "time": [
      289.851616,
      294.054011
    ],
    "en": [
      "ok so that activates AI gr p on the interfaces"
    ],
    "ru": [
      "Хорошо, так что активирует AI gr p на интерфейсах"
    ]
  },
  {
    "time": [
      294.054011,
      296.361282
    ],
    "en": [
      "and creates the EIGRP process"
    ],
    "ru": [
      "и создает процесс EIGRP"
    ]
  },
  {
    "time": [
      296.361282,
      301.427136
    ],
    "en": [
      "however we haven't gotten any messages about an adjacency with our one yet"
    ],
    "ru": [
      "однако мы еще не получали сообщений о смежности с нашим"
    ]
  },
  {
    "time": [
      301.427136,
      302.848344
    ],
    "en": [
      "why is that"
    ],
    "ru": [
      "это почему"
    ]
  },
  {
    "time": [
      302.848344,
      305.943656
    ],
    "en": [
      "once again the shut down feature"
    ],
    "ru": [
      "еще раз функция выключения"
    ]
  },
  {
    "time": [
      305.943656,
      309.898615
    ],
    "en": [
      "to be honest from my CCNA and CCNP studies"
    ],
    "ru": [
      "честно говоря, из моих исследований CCNA и CCNP"
    ]
  },
  {
    "time": [
      309.898615,
      314.665198
    ],
    "en": [
      "I don't remember having to enable AIG RP for ipv6 with no shutdown"
    ],
    "ru": [
      "Я не помню, чтобы мне приходилось включать AIG RP для ipv6 без выключения"
    ]
  },
  {
    "time": [
      314.665198,
      317.237114
    ],
    "en": [
      "but it seems some routers require that by default"
    ],
    "ru": [
      "но кажется, что некоторые маршрутизаторы требуют, чтобы по умолчанию"
    ]
  },
  {
    "time": [
      317.237114,
      325.622155
    ],
    "en": [
      "so for the test and real world situations just be aware that EA GRP for ipv6 has a shutdown feature"
    ],
    "ru": [
      "поэтому для тестирования и реальных ситуаций просто имейте в виду, что EA GRP для ipv6 имеет функцию выключения"
    ]
  },
  {
    "time": [
      325.622155,
      331.279968
    ],
    "en": [
      "ipv6 router AIG RP 100 no shutdown"
    ],
    "ru": [
      "ipv6 роутер AIG RP 100 без выключения"
    ]
  },
  {
    "time": [
      331.279968,
      334.050322
    ],
    "en": [
      "next let's go to our 3"
    ],
    "ru": [
      "Далее перейдем к нашим 3"
    ]
  },
  {
    "time": [
      334.050322,
      338.592572
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      338.592572,
      342.217197
    ],
    "en": [
      "ipv6 router AIG RP 100"
    ],
    "ru": [
      "ipv6 роутер AIG RP 100"
    ]
  },
  {
    "time": [
      342.217197,
      344.256592
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
      344.256592,
      347.158697
    ],
    "en": [
      "interface G 0 0"
    ],
    "ru": [
      "интерфейс G 0 0"
    ]
  },
  {
    "time": [
      347.158697,
      350.299905
    ],
    "en": [
      "ipv6 AIG RP 100"
    ],
    "ru": [
      "ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      350.299905,
      352.781551
    ],
    "en": [
      "interface G 0 1"
    ],
    "ru": [
      "интерфейс G 0 1"
    ]
  },
  {
    "time": [
      352.781551,
      356.299697
    ],
    "en": [
      "IP v6 g IG RP 100"
    ],
    "ru": [
      "IP v6 g IG RP 100"
    ]
  },
  {
    "time": [
      356.299697,
      358.602342
    ],
    "en": [
      "interface g 0 to"
    ],
    "ru": [
      "интерфейс g 0 к"
    ]
  },
  {
    "time": [
      358.602342,
      361.700322
    ],
    "en": [
      "ipv6 ERG RP 100"
    ],
    "ru": [
      "ipv6 ERG RP 100"
    ]
  },
  {
    "time": [
      361.700322,
      364.301592
    ],
    "en": [
      "ok let's go on our 4"
    ],
    "ru": [
      "хорошо, давай продолжим наш 4"
    ]
  },
  {
    "time": [
      364.301592,
      369.006196
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      369.006196,
      372.604821
    ],
    "en": [
      "ipv6 router AIG RP 100"
    ],
    "ru": [
      "ipv6 роутер AIG RP 100"
    ]
  },
  {
    "time": [
      372.604821,
      374.136821
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
      374.136821,
      376.8713
    ],
    "en": [
      "interface g 0 0"
    ],
    "ru": [
      "интерфейс g 0 0"
    ]
  },
  {
    "time": [
      376.8713,
      379.876383
    ],
    "en": [
      "ipv6 AIG RP 100"
    ],
    "ru": [
      "ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      379.876383,
      382.853279
    ],
    "en": [
      "interface g 0 1"
    ],
    "ru": [
      "интерфейс g 0 1"
    ]
  },
  {
    "time": [
      382.853279,
      386.187529
    ],
    "en": [
      "IP v6 e IG RP 100"
    ],
    "ru": [
      "IP v6 и IG RP 100"
    ]
  },
  {
    "time": [
      386.187529,
      388.800071
    ],
    "en": [
      "finally r 5"
    ],
    "ru": [
      "наконец г 5"
    ]
  },
  {
    "time": [
      388.800071,
      394.298217
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      394.298217,
      397.817862
    ],
    "en": [
      "ipv6 router AIG RP 100"
    ],
    "ru": [
      "ipv6 роутер AIG RP 100"
    ]
  },
  {
    "time": [
      397.817862,
      400.291612
    ],
    "en": [
      "interface g 0 0"
    ],
    "ru": [
      "интерфейс g 0 0"
    ]
  },
  {
    "time": [
      400.291612,
      403.29855
    ],
    "en": [
      "ipv6 AIG RP 100"
    ],
    "ru": [
      "ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      403.29855,
      407.717175
    ],
    "en": [
      "ok we've configured ew g RP on all of the routers"
    ],
    "ru": [
      "хорошо, мы настроили ew g RP на всех маршрутизаторах"
    ]
  },
  {
    "time": [
      407.717175,
      410.137508
    ],
    "en": [
      "let's go back on R 1"
    ],
    "ru": [
      "давай вернемся на R 1"
    ]
  },
  {
    "time": [
      410.137508,
      412.045404
    ],
    "en": [
      "and see if we have all of the roads"
    ],
    "ru": [
      "и посмотрим, есть ли у нас все дороги"
    ]
  },
  {
    "time": [
      412.045404,
      417.715654
    ],
    "en": [
      "do show ipv6 route"
    ],
    "ru": [
      "показывать маршрут ipv6"
    ]
  },
  {
    "time": [
      417.715654,
      423.782445
    ],
    "en": [
      "looks like we've got the 23 34 and 35 networks we want"
    ],
    "ru": [
      "похоже, у нас есть 23 34 и 35 сетей, которые мы хотим"
    ]
  },
  {
    "time": [
      423.782445,
      429.622591
    ],
    "en": [
      "next we have to advertise a default route to the internet from R 1"
    ],
    "ru": [
      "Затем мы должны объявить маршрут в Интернет по умолчанию от R 1"
    ]
  },
  {
    "time": [
      429.622591,
      436.068883
    ],
    "en": [
      "now ew g RP doesn't have the default information originated command that OSPF has"
    ],
    "ru": [
      "теперь у ew g RP нет команды создания информации по умолчанию, которая есть у OSPF"
    ]
  },
  {
    "time": [
      436.068883,
      438.918945
    ],
    "en": [
      "so how can we go about this"
    ],
    "ru": [
      "так как мы можем это сделать"
    ]
  },
  {
    "time": [
      438.918945,
      446.717174
    ],
    "en": [
      "well we can advertise the default route as a summary route on the g 0 0 & g 0 1 interfaces"
    ],
    "ru": [
      "ну, мы можем объявить маршрут по умолчанию как сводный маршрут на интерфейсах g 0 0 и g 0 1"
    ]
  },
  {
    "time": [
      446.717174,
      448.581549
    ],
    "en": [
      "let's try on our one"
    ],
    "ru": [
      "давай попробуем на нашем"
    ]
  },
  {
    "time": [
      448.581549,
      452.293278
    ],
    "en": [
      "interface g 0 0"
    ],
    "ru": [
      "интерфейс g 0 0"
    ]
  },
  {
    "time": [
      452.293278,
      459.606049
    ],
    "en": [
      "the command is the same as for ipv4 just use ipv6 at the beginning instead of IP"
    ],
    "ru": [
      "команда такая же, как для ipv4, просто используйте ipv6 в начале вместо IP"
    ]
  },
  {
    "time": [
      459.606049,
      465.483944
    ],
    "en": [
      "ipv6 summary address ew g RP 100"
    ],
    "ru": [
      "итоговый адрес ipv6 ew g RP 100"
    ]
  },
  {
    "time": [
      465.483944,
      472.092444
    ],
    "en": [
      "and remember the default route for ipv6 is colon colon slash 0"
    ],
    "ru": [
      "и помните, что маршрут по умолчанию для ipv6 - двоеточие, косая черта, двоеточие, 0"
    ]
  },
  {
    "time": [
      472.092444,
      475.905903
    ],
    "en": [
      "now let's go on g 0 1 and do the same"
    ],
    "ru": [
      "теперь давайте продолжим g 0 1 и сделаем то же самое"
    ]
  },
  {
    "time": [
      475.905903,
      481.179528
    ],
    "en": [
      "interface g 0 1 IP v6 summary address"
    ],
    "ru": [
      "интерфейс g 0 1 сводный адрес IP v6"
    ]
  },
  {
    "time": [
      481.179528,
      484.574278
    ],
    "en": [
      "key ID RP 100 colon colon slash 0"
    ],
    "ru": [
      "идентификатор ключа RP 100 двоеточие косая черта 0"
    ]
  },
  {
    "time": [
      484.574278,
      487.61784
    ],
    "en": [
      "let's go check on one of the routers"
    ],
    "ru": [
      "пойдем проверим на одном из роутеров"
    ]
  },
  {
    "time": [
      487.61784,
      494.086611
    ],
    "en": [
      "i'll check on our v because if our v has the route r2 r3 and r4 a must as well"
    ],
    "ru": [
      "Я проверю наш v, потому что, если у нашего v есть маршрут r2, r3 и r4, также необходимо"
    ]
  },
  {
    "time": [
      494.086611,
      499.180069
    ],
    "en": [
      "do show ipv6 red"
    ],
    "ru": [
      "показывать ipv6 красный"
    ]
  },
  {
    "time": [
      499.180069,
      501.613652
    ],
    "en": [
      "there it is right at the top"
    ],
    "ru": [
      "вот оно прямо наверху"
    ]
  },
  {
    "time": [
      501.613652,
      506.828214
    ],
    "en": [
      "ok in this slab we configured AI GRP for ipv6"
    ],
    "ru": [
      "хорошо, в этой плите мы настроили AI GRP для ipv6"
    ]
  },
  {
    "time": [
      506.828214,
      511.84336
    ],
    "en": [
      "the configuration is similar to EIGRP for ipv4"
    ],
    "ru": [
      "конфигурация аналогична EIGRP для ipv4"
    ]
  },
  {
    "time": [
      511.84336,
      515.393819
    ],
    "en": [
      "however remember you must configure it at the interface level"
    ],
    "ru": [
      "однако помните, что вы должны настроить его на уровне интерфейса"
    ]
  },
  {
    "time": [
      515.393819,
      517.238131
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
      517.238131,
      521.380547
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
      521.380547,
      523.987464
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
      523.987464,
      528.342735
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
      528.342735,
      533.507256
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
      533.507256,
      540.537776
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
      540.537776,
      549.203526
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
      549.203526,
      549.203526
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
      549.203526,
      549.203526
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
      549.203526,
      549.203526
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]