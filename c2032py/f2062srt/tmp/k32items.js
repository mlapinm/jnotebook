let objs = [
  {
    "time": [
      0.0,
      3.945217
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
      3.945217,
      7.450119
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
      7.450119,
      14.940711
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
      14.940711,
      20.188776
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
      20.188776,
      24.347059
    ],
    "en": [
      "in this lab we will take a look at single area OSPF"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим OSPF с одной областью"
    ]
  },
  {
    "time": [
      24.347059,
      29.306814
    ],
    "en": [
      "we will configure it on these four routers to achieve full connectivity"
    ],
    "ru": [
      "мы настроим его на этих четырех маршрутизаторах, чтобы обеспечить полное подключение"
    ]
  },
  {
    "time": [
      29.306814,
      34.292008
    ],
    "en": [
      "OSPF also supports a hierarchical multi area design"
    ],
    "ru": [
      "OSPF также поддерживает иерархический многозонный дизайн."
    ]
  },
  {
    "time": [
      34.292008,
      36.70907
    ],
    "en": [
      "but that will be for the next lab"
    ],
    "ru": [
      "но это будет для следующей лаборатории"
    ]
  },
  {
    "time": [
      36.70907,
      45.016886
    ],
    "en": [
      "this time we will do a simple OSPF configuration and then do some tweaking to affect the path traffic takes"
    ],
    "ru": [
      "на этот раз мы сделаем простую конфигурацию OSPF, а затем сделаем некоторые настройки, чтобы повлиять на путь, по которому проходит трафик."
    ]
  },
  {
    "time": [
      45.016886,
      49.785727
    ],
    "en": [
      "the first step is to configure a loopback address on each router"
    ],
    "ru": [
      "первый шаг - настроить адрес обратной связи на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      49.785727,
      53.779688
    ],
    "en": [
      "note that this isn't a necessary step for OSPF"
    ],
    "ru": [
      "обратите внимание, что это необязательный шаг для OSPF"
    ]
  },
  {
    "time": [
      53.779688,
      63.455209
    ],
    "en": [
      "however we will do this first so that the loopback address becomes the OSPF router ID each router uses to identify itself to neighbors"
    ],
    "ru": [
      "однако сначала мы сделаем это, чтобы адрес обратной связи стал идентификатором маршрутизатора OSPF, который каждый маршрутизатор использует для идентификации себя соседям."
    ]
  },
  {
    "time": [
      63.455209,
      69.560163
    ],
    "en": [
      "having router ids of 1.1.1.1 2.2.2.2"
    ],
    "ru": [
      "с идентификаторами маршрутизатора 1.1.1.1 2.2.2.2"
    ]
  },
  {
    "time": [
      69.560163,
      71.374589
    ],
    "en": [
      "and so on will simplify things"
    ],
    "ru": [
      "и так далее упростит"
    ]
  },
  {
    "time": [
      71.374589,
      77.419813
    ],
    "en": [
      "as for how the router ideas can is determined"
    ],
    "ru": [
      "Что касается того, как могут быть определены идеи маршрутизатора"
    ]
  },
  {
    "time": [
      77.419813,
      80.109361
    ],
    "en": [
      "manual configuration takes precedence"
    ],
    "ru": [
      "ручная настройка имеет приоритет"
    ]
  },
  {
    "time": [
      80.109361,
      86.243243
    ],
    "en": [
      "however if it's not manually configured the highest loopback address becomes the red or ID"
    ],
    "ru": [
      "однако, если он не настроен вручную, самый высокий адрес обратной связи становится красным или ID"
    ]
  },
  {
    "time": [
      86.243243,
      93.235905
    ],
    "en": [
      "if there is no loopback interface address the highest address of another interface becomes the router ID"
    ],
    "ru": [
      "если нет адреса интерфейса обратной петли, наивысший адрес другого интерфейса становится идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      93.235905,
      98.311009
    ],
    "en": [
      "we should create these loop backs before we configure OSPF"
    ],
    "ru": [
      "мы должны создать эти петли перед настройкой OSPF"
    ]
  },
  {
    "time": [
      98.311009,
      105.864194
    ],
    "en": [
      "because if we do it after the routers won't update the router IDs unless we reset the OSPF process"
    ],
    "ru": [
      "потому что, если мы сделаем это после того, как маршрутизаторы не обновят идентификаторы маршрутизаторов, если мы не сбросим процесс OSPF"
    ]
  },
  {
    "time": [
      105.864194,
      109.188602
    ],
    "en": [
      "that's no problem in a lab like this"
    ],
    "ru": [
      "это не проблема в такой лаборатории"
    ]
  },
  {
    "time": [
      109.188602,
      113.132527
    ],
    "en": [
      "but in a real network you can't just reset your routing protocols at any time"
    ],
    "ru": [
      "но в реальной сети вы не можете просто сбросить протоколы маршрутизации в любое время"
    ]
  },
  {
    "time": [
      113.132527,
      117.07566
    ],
    "en": [
      "anyway let's make those loopback interfaces"
    ],
    "ru": [
      "в любом случае давайте сделаем эти интерфейсы обратной петли"
    ]
  },
  {
    "time": [
      117.07566,
      135.473974
    ],
    "en": [
      "on r1 enable conf t interface l0 for loop back 0 IP address 1.1.1.1 255.255.255.255 exit"
    ],
    "ru": [
      "на r1 enable conf t interface l0 for loop back 0 IP address 1.1.1.1 255.255.255.255 exit"
    ]
  },
  {
    "time": [
      135.473974,
      139.113685
    ],
    "en": [
      "we don't have to use the no shutdown command on a loopback interface"
    ],
    "ru": [
      "нам не нужно использовать команду no shutdown на интерфейсе обратной связи"
    ]
  },
  {
    "time": [
      139.113685,
      156.573437
    ],
    "en": [
      "next r2 enable conf t interface l0 IP address 2.2.2.2 255.255.255.255 exit"
    ],
    "ru": [
      "следующий r2 enable conf t interface l0 IP address 2.2.2.2 255.255.255.255 exit"
    ]
  },
  {
    "time": [
      156.573437,
      173.662666
    ],
    "en": [
      "next r3 enable conf t interface l0 IP address 3.3.3.3 255.255.255.255 exit"
    ],
    "ru": [
      "следующий r3 enable conf t interface l0 IP address 3.3.3.3 255.255.255.255 exit"
    ]
  },
  {
    "time": [
      173.662666,
      190.144249
    ],
    "en": [
      "finally r4 enable conf t interface l0 IP address 4.4.4.4 255.255.255.255 exit"
    ],
    "ru": [
      "наконец r4 enable conf t interface l0 IP address 4.4.4.4 255.255.255.255 exit"
    ]
  },
  {
    "time": [
      190.144249,
      192.949957
    ],
    "en": [
      "okay that's it for our loopback addresses"
    ],
    "ru": [
      "хорошо, это для наших адресов обратной петли"
    ]
  },
  {
    "time": [
      192.949957,
      198.664936
    ],
    "en": [
      "next let's configure OSPF on each router and advertise the routes"
    ],
    "ru": [
      "Затем давайте настроим OSPF на каждом маршрутизаторе и объявим маршруты"
    ]
  },
  {
    "time": [
      198.664936,
      200.499873
    ],
    "en": [
      "let's go back to r1"
    ],
    "ru": [
      "давай вернемся к r1"
    ]
  },
  {
    "time": [
      200.499873,
      206.09081
    ],
    "en": [
      "router OSPF then we have to enter a process ID"
    ],
    "ru": [
      "маршрутизатор OSPF, тогда мы должны ввести идентификатор процесса"
    ]
  },
  {
    "time": [
      206.09081,
      212.11031
    ],
    "en": [
      "in almost all circumstances you will only use a single OSPF process on a router"
    ],
    "ru": [
      "почти во всех случаях вы будете использовать только один процесс OSPF на маршрутизаторе"
    ]
  },
  {
    "time": [
      212.11031,
      218.02233
    ],
    "en": [
      "however you can create multiple processes and each will keep a separate database"
    ],
    "ru": [
      "однако вы можете создать несколько процессов, и каждый будет хранить отдельную базу данных"
    ]
  },
  {
    "time": [
      218.02233,
      223.40733
    ],
    "en": [
      "also the process ID is locally significant"
    ],
    "ru": [
      "также идентификатор процесса имеет локальное значение"
    ]
  },
  {
    "time": [
      223.40733,
      226.69508
    ],
    "en": [
      "it can be different on each router and they can still become neighbors"
    ],
    "ru": [
      "он может быть разным на каждом роутере, и они все равно могут стать соседями"
    ]
  },
  {
    "time": [
      226.69508,
      233.063684
    ],
    "en": [
      "just to prove that I'll use a different router ID or sorry a different process ID on each router"
    ],
    "ru": [
      "просто чтобы доказать, что я буду использовать другой идентификатор маршрутизатора или, извините, другой идентификатор процесса на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      233.063684,
      236.396392
    ],
    "en": [
      "let's go with one for r1"
    ],
    "ru": [
      "пойдем с одним для r1"
    ]
  },
  {
    "time": [
      236.396392,
      240.135829
    ],
    "en": [
      "now let's advertise our networks"
    ],
    "ru": [
      "теперь давайте прорекламируем наши сети"
    ]
  },
  {
    "time": [
      240.135829,
      243.923079
    ],
    "en": [
      "let me explain a little how OSPF network command works"
    ],
    "ru": [
      "позвольте мне немного объяснить, как работает сетевая команда OSPF"
    ]
  },
  {
    "time": [
      243.923079,
      248.863849
    ],
    "en": [
      "it looks for interfaces within the range stated in the network command"
    ],
    "ru": [
      "он ищет интерфейсы в пределах диапазона, указанного в сетевой команде"
    ]
  },
  {
    "time": [
      248.863849,
      252.934224
    ],
    "en": [
      "and then advertises the network prefix on those interfaces"
    ],
    "ru": [
      "а затем объявляет сетевой префикс на этих интерфейсах"
    ]
  },
  {
    "time": [
      252.934224,
      258.614766
    ],
    "en": [
      "it doesn't necessarily advertise the exact network used in the network command"
    ],
    "ru": [
      "он не обязательно рекламирует точную сеть, используемую в сетевой команде"
    ]
  },
  {
    "time": [
      258.614766,
      269.231516
    ],
    "en": [
      "for example network 12.0.0.0 then i put in a wildcard mask which if you remember is inverse of a regular mask"
    ],
    "ru": [
      "например, сеть 12.0.0.0, тогда я добавляю подстановочную маску, которая, если вы помните, является инверсией обычной маски"
    ]
  },
  {
    "time": [
      269.231516,
      274.600245
    ],
    "en": [
      "the 12.0.0.0 network is configured as a /24"
    ],
    "ru": [
      "сеть 12.0.0.0 настроена как / 24"
    ]
  },
  {
    "time": [
      274.600245,
      281.050995
    ],
    "en": [
      "but if I for example configure a /8 with 0 255 255 255"
    ],
    "ru": [
      "но если я, например, настраиваю / 8 с 0 255 255 255"
    ]
  },
  {
    "time": [
      281.050995,
      286.302307
    ],
    "en": [
      "it will still advertise the slash 24 network on f10"
    ],
    "ru": [
      "он по-прежнему будет рекламировать сеть слэш 24 на f10"
    ]
  },
  {
    "time": [
      286.302307,
      288.187223
    ],
    "en": [
      "not a slash 8"
    ],
    "ru": [
      "не косая черта 8"
    ]
  },
  {
    "time": [
      288.187223,
      293.259806
    ],
    "en": [
      "okay next enter area followed by the area number"
    ],
    "ru": [
      "хорошо, следующая область входа, за которой следует номер области"
    ]
  },
  {
    "time": [
      293.259806,
      298.096931
    ],
    "en": [
      "this is single area OSPF so let's just put 0 on all of these"
    ],
    "ru": [
      "это OSPF с одной областью, поэтому давайте просто поставим 0 на все эти"
    ]
  },
  {
    "time": [
      298.096931,
      302.03293
    ],
    "en": [
      "next one the G 0 0 interface"
    ],
    "ru": [
      "следующий интерфейс G 0 0"
    ]
  },
  {
    "time": [
      302.03293,
      308.945096
    ],
    "en": [
      "network 14.0.0.0 I'll set it as a /16 this time"
    ],
    "ru": [
      "сеть 14.0.0.0 На этот раз я установлю его как / 16"
    ]
  },
  {
    "time": [
      308.945096,
      314.055471
    ],
    "en": [
      "just the show anything works as long as the interface prefix falls within that range"
    ],
    "ru": [
      "просто показать что-нибудь работает, пока префикс интерфейса попадает в этот диапазон"
    ]
  },
  {
    "time": [
      314.055471,
      319.636407
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
      314.055471,
      319.636407
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
      319.636407,
      323.079219
    ],
    "en": [
      "finally the loopback address"
    ],
    "ru": [
      "наконец адрес обратной связи"
    ]
  },
  {
    "time": [
      323.079219,
      330.279863
    ],
    "en": [
      "network 1.1.1.1 0.0.0.0 area 0"
    ],
    "ru": [
      "сеть 1.1.1.1 0.0.0.0 область 0"
    ]
  },
  {
    "time": [
      330.279863,
      335.341863
    ],
    "en": [
      "this time i configured the exact / 32 mask on the interface"
    ],
    "ru": [
      "на этот раз я настроил точную маску / 32 на интерфейсе"
    ]
  },
  {
    "time": [
      335.341863,
      340.110113
    ],
    "en": [
      "I'll state it one more time because it's very important to understand this"
    ],
    "ru": [
      "Я скажу это еще раз, потому что это очень важно понимать"
    ]
  },
  {
    "time": [
      340.110113,
      347.311946
    ],
    "en": [
      "G 0 0 and F 1 0 will advertise the network prefix actually configured on the interface"
    ],
    "ru": [
      "G 0 0 и F 1 0 будут анонсировать сетевой префикс, фактически настроенный на интерфейсе."
    ]
  },
  {
    "time": [
      347.311946,
      352.346716
    ],
    "en": [
      "not the /8 / 16 prefixes I configured here"
    ],
    "ru": [
      "не префиксы / 8/16, которые я настроил здесь"
    ]
  },
  {
    "time": [
      352.346716,
      356.755736
    ],
    "en": [
      "okay now let's set up OSPF on the other routers"
    ],
    "ru": [
      "хорошо, теперь давайте настроим OSPF на других маршрутизаторах"
    ]
  },
  {
    "time": [
      356.755736,
      359.115903
    ],
    "en": [
      "and I'll show you a useful shortcut"
    ],
    "ru": [
      "и я покажу вам полезный ярлык"
    ]
  },
  {
    "time": [
      359.115903,
      361.231966
    ],
    "en": [
      "I'll go on r2"
    ],
    "ru": [
      "Я пойду на r2"
    ]
  },
  {
    "time": [
      361.231966,
      365.103653
    ],
    "en": [
      "routes OSPF"
    ],
    "ru": [
      "маршруты OSPF"
    ]
  },
  {
    "time": [
      365.103653,
      370.934257
    ],
    "en": [
      "and again I'll use a different process ID to show that it can still become neighbors with r1 and r3"
    ],
    "ru": [
      "и снова я буду использовать другой идентификатор процесса, чтобы показать, что он все еще может стать соседом с r1 и r3"
    ]
  },
  {
    "time": [
      370.934257,
      373.998007
    ],
    "en": [
      "so I'll use a process ID of two"
    ],
    "ru": [
      "поэтому я буду использовать идентификатор процесса два"
    ]
  },
  {
    "time": [
      373.998007,
      381.477861
    ],
    "en": [
      "now as for that shortcut I mentioned it's a way to activate OSPF on all interfaces with a single command"
    ],
    "ru": [
      "теперь, что касается этого ярлыка, я упомянул, что это способ активировать OSPF на всех интерфейсах с помощью одной команды"
    ]
  },
  {
    "time": [
      381.477861,
      391.915673
    ],
    "en": [
      "this is useful for labs but perhaps you might not want to do it on a real network where you want a more precisely control which interfaces OSPF is activated on"
    ],
    "ru": [
      "это полезно для лабораторий, но, возможно, вы не захотите делать это в реальной сети, где вы хотите более точно контролировать, на каких интерфейсах активирован OSPF."
    ]
  },
  {
    "time": [
      391.915673,
      402.539068
    ],
    "en": [
      "network 0.0.0.0 followed by a /0 mask which is usually 0.0.0.0"
    ],
    "ru": [
      "сеть 0.0.0.0, за которой следует маска / 0, которая обычно равна 0.0.0.0"
    ]
  },
  {
    "time": [
      402.539068,
      411.885693
    ],
    "en": [
      "but because we have to use a wildcard mask it is inverse it is 255 255 255 255 area 0"
    ],
    "ru": [
      "но поскольку мы должны использовать подстановочную маску, она обратная, это 255 255 255 255 255 область 0"
    ]
  },
  {
    "time": [
      411.885693,
      421.669213
    ],
    "en": [
      "ok all networks fall within the 0.0.0.0/0 range so OSPF will be activated on all interfaces"
    ],
    "ru": [
      "хорошо, все сети попадают в диапазон 0.0.0.0/0, поэтому OSPF будет активирован на всех интерфейсах"
    ]
  },
  {
    "time": [
      421.669213,
      425.717005
    ],
    "en": [
      "let's do the same quickly on r3 and r4"
    ],
    "ru": [
      "давайте сделаем то же самое быстро на r3 и r4"
    ]
  },
  {
    "time": [
      425.717005,
      438.987856
    ],
    "en": [
      "r3 first router OSPF 3 network 0.0.0.0 255.255.255.255 area 0"
    ],
    "ru": [
      "r3 первый маршрутизатор OSPF 3 сеть 0.0.0.0 255.255.255.255 область 0"
    ]
  },
  {
    "time": [
      438.987856,
      444.566856
    ],
    "en": [
      "then R4"
    ],
    "ru": [
      "затем R4"
    ]
  },
  {
    "time": [
      444.566856,
      452.472105
    ],
    "en": [
      "router OSPF 4 network 0.0.0.0 255.255.255.255 area 0"
    ],
    "ru": [
      "маршрутизатор OSPF 4 сеть 0.0.0.0 255.255.255.255 область 0"
    ]
  },
  {
    "time": [
      452.472105,
      456.423334
    ],
    "en": [
      "ok now let's go back to r1 and see what's up"
    ],
    "ru": [
      "Хорошо, теперь вернемся к r1 и посмотрим, что случилось"
    ]
  },
  {
    "time": [
      456.423334,
      462.522396
    ],
    "en": [
      "do show IP ospf neighbor"
    ],
    "ru": [
      "показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      462.522396,
      467.783709
    ],
    "en": [
      "now we can see that r1 has become neighbors with r2 and r4"
    ],
    "ru": [
      "теперь мы видим, что r1 стал соседом с r2 и r4"
    ]
  },
  {
    "time": [
      467.783709,
      475.032334
    ],
    "en": [
      "also notice that the loopback interfaces we configured have indeed become the router IDs of r2 and r4"
    ],
    "ru": [
      "также обратите внимание, что настроенные нами интерфейсы обратной связи действительно стали идентификаторами маршрутизатора r2 и r4."
    ]
  },
  {
    "time": [
      475.032334,
      482.687521
    ],
    "en": [
      "also the router successfully became neighbors even though we use different process IDs on each router"
    ],
    "ru": [
      "также маршрутизатор успешно стал соседом, хотя мы используем разные идентификаторы процесса на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      482.687521,
      485.872354
    ],
    "en": [
      "proving that the process ID is only locally significant"
    ],
    "ru": [
      "доказательство того, что идентификатор процесса имеет значение только локально"
    ]
  },
  {
    "time": [
      485.872354,
      490.770292
    ],
    "en": [
      "next let's check the routes we received here on r 1"
    ],
    "ru": [
      "Затем давайте проверим маршруты, которые мы получили здесь на r 1"
    ]
  },
  {
    "time": [
      490.770292,
      493.561958
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
      493.561958,
      506.858832
    ],
    "en": [
      "here are the loop backs of r2 r3 and r4 and here are the 2300 and 3400 networks to which our one isn't directly connected"
    ],
    "ru": [
      "вот петли r2, r3 и r4, а вот сети 2300 и 3400, к которым наша сеть напрямую не подключена."
    ]
  },
  {
    "time": [
      506.858832,
      510.245186
    ],
    "en": [
      "note that they have an O beside them"
    ],
    "ru": [
      "обратите внимание, что рядом с ними стоит буква O"
    ]
  },
  {
    "time": [
      510.245186,
      513.366498
    ],
    "en": [
      "meaning that they were learned via OSPF"
    ],
    "ru": [
      "означает, что они были изучены через OSPF"
    ]
  },
  {
    "time": [
      513.366498,
      519.66329
    ],
    "en": [
      "also notice that r1 learned the network prefix is configured on each of the interfaces"
    ],
    "ru": [
      "также обратите внимание, что r1 узнал, что сетевой префикс настроен на каждом из интерфейсов"
    ]
  },
  {
    "time": [
      519.66329,
      524.576956
    ],
    "en": [
      "not the network prefix we actually configured on r2 r3 and r4"
    ],
    "ru": [
      "не сетевой префикс, который мы на самом деле настроили на r2 r3 и r4"
    ]
  },
  {
    "time": [
      524.576956,
      534.596788
    ],
    "en": [
      "actually we configured 0.0.0.0/0 on them and there is no 0.0.0.0/0 Network in the table here"
    ],
    "ru": [
      "на самом деле мы настроили на них 0.0.0.0/0 и в таблице здесь нет сети 0.0.0.0/0"
    ]
  },
  {
    "time": [
      534.596788,
      536.927141
    ],
    "en": [
      "so that demonstrates the point as well"
    ],
    "ru": [
      "так что это тоже демонстрирует суть"
    ]
  },
  {
    "time": [
      536.927141,
      546.314558
    ],
    "en": [
      "now the next step is to suppress OSPF messages on the loopback addresses or sorry loopback interfaces of each router"
    ],
    "ru": [
      "теперь следующий шаг - подавить сообщения OSPF на адресах обратной связи или на интерфейсах обратной петли каждого маршрутизатора."
    ]
  },
  {
    "time": [
      546.314558,
      550.548745
    ],
    "en": [
      "because OSPF is activated on the loopback interfaces"
    ],
    "ru": [
      "потому что OSPF активирован на интерфейсах обратной связи"
    ]
  },
  {
    "time": [
      550.548745,
      554.398849
    ],
    "en": [
      "each router is sending OSPF advertisements on them"
    ],
    "ru": [
      "каждый маршрутизатор отправляет на них рекламные объявления OSPF"
    ]
  },
  {
    "time": [
      554.398849,
      559.90087
    ],
    "en": [
      "however the loopback interface doesn't actually lead to anywhere beyond the router itself"
    ],
    "ru": [
      "однако интерфейс обратной петли фактически не ведет ни к чему, кроме самого маршрутизатора."
    ]
  },
  {
    "time": [
      559.90087,
      562.724661
    ],
    "en": [
      "so there's no point of advertising anything on them"
    ],
    "ru": [
      "так что нет смысла что-либо рекламировать на них"
    ]
  },
  {
    "time": [
      562.724661,
      569.685411
    ],
    "en": [
      "to suppress the advertisements we configure the loop backs as passive interfaces with this command"
    ],
    "ru": [
      "для подавления рекламы мы настраиваем петли как пассивные интерфейсы с помощью этой команды"
    ]
  },
  {
    "time": [
      569.685411,
      573.15314
    ],
    "en": [
      "passive interface l0"
    ],
    "ru": [
      "пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      573.15314,
      574.977807
    ],
    "en": [
      "that's all"
    ],
    "ru": [
      "это все"
    ]
  },
  {
    "time": [
      574.977807,
      577.87637
    ],
    "en": [
      "let's quickly do the same on the other routers"
    ],
    "ru": [
      "давайте быстро сделаем то же самое на других роутерах"
    ]
  },
  {
    "time": [
      577.87637,
      581.061557
    ],
    "en": [
      "first r2"
    ],
    "ru": [
      "первый r2"
    ]
  },
  {
    "time": [
      581.061557,
      583.977244
    ],
    "en": [
      "passive interface l0"
    ],
    "ru": [
      "пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      583.977244,
      586.250452
    ],
    "en": [
      "then r3"
    ],
    "ru": [
      "затем r3"
    ]
  },
  {
    "time": [
      586.250452,
      589.940556
    ],
    "en": [
      "passive interface l0"
    ],
    "ru": [
      "пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      589.940556,
      592.625306
    ],
    "en": [
      "finally r4"
    ],
    "ru": [
      "наконец r4"
    ]
  },
  {
    "time": [
      592.625306,
      596.405118
    ],
    "en": [
      "passive interface l0"
    ],
    "ru": [
      "пассивный интерфейс l0"
    ]
  },
  {
    "time": [
      596.405118,
      603.111055
    ],
    "en": [
      "the next step is to configure the OSPF reference bandwidth of each router"
    ],
    "ru": [
      "следующим шагом является настройка эталонной полосы пропускания OSPF для каждого маршрутизатора."
    ]
  },
  {
    "time": [
      603.111055,
      608.922138
    ],
    "en": [
      "so that a 10 Gigabit Ethernet interface would have an OSPF cost of 1"
    ],
    "ru": [
      "так что интерфейс 10 Gigabit Ethernet будет иметь стоимость OSPF 1"
    ]
  },
  {
    "time": [
      608.922138,
      611.605722
    ],
    "en": [
      "what exactly does that mean"
    ],
    "ru": [
      "Что именно это означает"
    ]
  },
  {
    "time": [
      611.605722,
      617.647034
    ],
    "en": [
      "well from r1s perspective it has two routes to reach r3"
    ],
    "ru": [
      "Что ж, с точки зрения r1s, у него есть два пути, чтобы добраться до r3"
    ]
  },
  {
    "time": [
      617.647034,
      621.8992
    ],
    "en": [
      "it can go via r2 or via r4"
    ],
    "ru": [
      "он может идти через r2 или через r4"
    ]
  },
  {
    "time": [
      621.8992,
      625.762825
    ],
    "en": [
      "how does it decide which path to use"
    ],
    "ru": [
      "как он решает, какой путь использовать"
    ]
  },
  {
    "time": [
      625.762825,
      629.663075
    ],
    "en": [
      "let's go back to r1 and look at their routing table"
    ],
    "ru": [
      "вернемся к r1 и посмотрим на их таблицу маршрутизации"
    ]
  },
  {
    "time": [
      629.663075,
      635.701741
    ],
    "en": [
      "notice beside these OSPF routes there is a 110"
    ],
    "ru": [
      "обратите внимание, что рядом с этими маршрутами OSPF есть 110"
    ]
  },
  {
    "time": [
      635.701741,
      639.245886
    ],
    "en": [
      "which is the administrative distance for OSPF"
    ],
    "ru": [
      "которое является административным расстоянием для OSPF"
    ]
  },
  {
    "time": [
      639.245886,
      644.030845
    ],
    "en": [
      "I won't talk about administrative distance now hopefully you've studied it"
    ],
    "ru": [
      "Я не буду сейчас говорить об административном расстоянии, надеюсь, вы его изучили."
    ]
  },
  {
    "time": [
      644.030845,
      647.330928
    ],
    "en": [
      "however next to it is the metric"
    ],
    "ru": [
      "однако рядом с ним метрика"
    ]
  },
  {
    "time": [
      647.330928,
      655.585782
    ],
    "en": [
      "notice that the metric via r2 and the metric via r4 are the same so both are in the routing table"
    ],
    "ru": [
      "обратите внимание, что метрика через r2 и метрика через r4 одинаковы, поэтому оба находятся в таблице маршрутизации"
    ]
  },
  {
    "time": [
      655.585782,
      659.749073
    ],
    "en": [
      "however why are both the same"
    ],
    "ru": [
      "но почему оба одинаковые"
    ]
  },
  {
    "time": [
      659.749073,
      664.171135
    ],
    "en": [
      "when the path via r4 includes a faster gigabit ethernet interface"
    ],
    "ru": [
      "когда путь через r4 включает более быстрый интерфейс Gigabit Ethernet"
    ]
  },
  {
    "time": [
      664.171135,
      673.082718
    ],
    "en": [
      "well to calculate metric OSPF divides a reference bandwidth by the bandwidth on the interface"
    ],
    "ru": [
      "хорошо для вычисления метрики OSPF делит эталонную полосу пропускания на пропускную способность интерфейса"
    ]
  },
  {
    "time": [
      673.082718,
      677.931073
    ],
    "en": [
      "the reference bandwidth by default is 100 megabits per second"
    ],
    "ru": [
      "эталонная пропускная способность по умолчанию - 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      677.931073,
      682.701823
    ],
    "en": [
      "and a fast ethernet interface is 100 megabits per second"
    ],
    "ru": [
      "а быстрый интерфейс Ethernet - 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      682.701823,
      688.635968
    ],
    "en": [
      "so a fast ethernet interface has a metric of 1 which is 100 divided by 100"
    ],
    "ru": [
      "Таким образом, для интерфейса Fast Ethernet используется показатель 1, который равен 100, разделенному на 100."
    ]
  },
  {
    "time": [
      688.635968,
      694.449114
    ],
    "en": [
      "a Gigabit Ethernet interface has a bandwidth of 1,000 megabits per second"
    ],
    "ru": [
      "интерфейс Gigabit Ethernet имеет пропускную способность 1000 мегабит в секунду"
    ]
  },
  {
    "time": [
      694.449114,
      698.760947
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
      694.449114,
      698.760947
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
      698.760947,
      703.809759
    ],
    "en": [
      "however the lowest possible metric in OSPF is 1"
    ],
    "ru": [
      "однако наименьшая возможная метрика в OSPF - 1"
    ]
  },
  {
    "time": [
      703.809759,
      709.343905
    ],
    "en": [
      "so gigabit and fast ethernet interfaces have the same metric by default 1"
    ],
    "ru": [
      "поэтому по умолчанию у гигабитных и быстрых Ethernet-интерфейсов одинаковая метрика 1"
    ]
  },
  {
    "time": [
      709.343905,
      715.76203
    ],
    "en": [
      "even a 10 gigabit or 100 gigabit interface would have a metric of 1"
    ],
    "ru": [
      "даже интерфейс 10 или 100 гигабит будет иметь метрику 1"
    ]
  },
  {
    "time": [
      715.76203,
      721.732739
    ],
    "en": [
      "to change this default behavior we can change the reference bandwidth with this command"
    ],
    "ru": [
      "чтобы изменить это поведение по умолчанию, мы можем изменить эталонную полосу пропускания с помощью этой команды"
    ]
  },
  {
    "time": [
      721.732739,
      728.780093
    ],
    "en": [
      "auto cost reference bandwidth then the bandwidth in terms of megabits per second"
    ],
    "ru": [
      "автоматическая эталонная пропускная способность, затем пропускная способность в мегабитах в секунду"
    ]
  },
  {
    "time": [
      728.780093,
      738.471259
    ],
    "en": [
      "our instructions say to make it so that a 100 gigabit interface oh sorry a 10 gigabit interface would have a cost of 1"
    ],
    "ru": [
      "в наших инструкциях говорится, что 100-гигабитный интерфейс, извините, 10-гигабитный интерфейс будет стоить 1"
    ]
  },
  {
    "time": [
      738.471259,
      742.614342
    ],
    "en": [
      "so we should set the reference equal to 10 gigabits per second"
    ],
    "ru": [
      "поэтому мы должны установить эталон равным 10 гигабит в секунду"
    ]
  },
  {
    "time": [
      742.614342,
      746.180988
    ],
    "en": [
      "so I'll enter 10,000"
    ],
    "ru": [
      "поэтому я ввожу 10 000"
    ]
  },
  {
    "time": [
      746.180988,
      752.169779
    ],
    "en": [
      "as this message says here make sure the reference is consistent across all routers"
    ],
    "ru": [
      "как говорится в этом сообщении, убедитесь, что ссылка согласована на всех маршрутизаторах."
    ]
  },
  {
    "time": [
      752.169779,
      754.375404
    ],
    "en": [
      "let's go on r2"
    ],
    "ru": [
      "пойдем на r2"
    ]
  },
  {
    "time": [
      754.375404,
      761.808508
    ],
    "en": [
      "auto cost reference bandwidth ten thousand"
    ],
    "ru": [
      "автоматическая стоимость эталонной полосы пропускания десять тысяч"
    ]
  },
  {
    "time": [
      761.808508,
      764.739862
    ],
    "en": [
      "okay next r3"
    ],
    "ru": [
      "хорошо, следующий r3"
    ]
  },
  {
    "time": [
      764.739862,
      769.607882
    ],
    "en": [
      "auto cost reference bandwidth ten thousand"
    ],
    "ru": [
      "автоматическая стоимость эталонной полосы пропускания десять тысяч"
    ]
  },
  {
    "time": [
      769.607882,
      772.149382
    ],
    "en": [
      "finally r4"
    ],
    "ru": [
      "наконец r4"
    ]
  },
  {
    "time": [
      772.149382,
      777.236527
    ],
    "en": [
      "auto cost reference bandwidth ten thousand"
    ],
    "ru": [
      "автоматическая стоимость эталонной полосы пропускания десять тысяч"
    ]
  },
  {
    "time": [
      777.236527,
      780.789257
    ],
    "en": [
      "okay let's check again on r1"
    ],
    "ru": [
      "хорошо давай проверим еще раз на r1"
    ]
  },
  {
    "time": [
      780.789257,
      784.75134
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
      784.75134,
      791.585735
    ],
    "en": [
      "now we only have one route 3.3.3.3 via the gig 00 interface"
    ],
    "ru": [
      "теперь у нас есть только один маршрут 3.3.3.3 через интерфейс gig 00"
    ]
  },
  {
    "time": [
      791.585735,
      798.777026
    ],
    "en": [
      "because OSPF now distinguishes between the cost of a gig Ethernet and the cost of a Fast Ethernet interface"
    ],
    "ru": [
      "потому что OSPF теперь различает стоимость гигабитного Ethernet и стоимость интерфейса Fast Ethernet."
    ]
  },
  {
    "time": [
      798.777026,
      803.725713
    ],
    "en": [
      "now our last step isn't something you'd likely do in a real network"
    ],
    "ru": [
      "теперь наш последний шаг - это не то, что вы, вероятно, сделали бы в реальной сети"
    ]
  },
  {
    "time": [
      803.725713,
      807.75365
    ],
    "en": [
      "but I want to show you that you can do it"
    ],
    "ru": [
      "но я хочу показать тебе, что ты можешь это сделать"
    ]
  },
  {
    "time": [
      807.75365,
      814.585712
    ],
    "en": [
      "after adjusting the reference bandwidth so that r1 will take the path of via r4 to our freeze loopback exclusively"
    ],
    "ru": [
      "после настройки эталонной полосы пропускания так, чтобы r1 проходил по пути через r4 исключительно к нашей замораживающей петле"
    ]
  },
  {
    "time": [
      814.585712,
      817.567399
    ],
    "en": [
      "we are now going to configure the opposite"
    ],
    "ru": [
      "теперь мы собираемся настроить противоположное"
    ]
  },
  {
    "time": [
      817.567399,
      820.159836
    ],
    "en": [
      "and make it use the path to r2 exclusively"
    ],
    "ru": [
      "и использовать путь к r2 исключительно"
    ]
  },
  {
    "time": [
      820.159836,
      825.409148
    ],
    "en": [
      "we will do this by configuring the OSPF cost of some interfaces"
    ],
    "ru": [
      "мы сделаем это, настроив стоимость OSPF для некоторых интерфейсов"
    ]
  },
  {
    "time": [
      825.409148,
      828.740189
    ],
    "en": [
      "now there are multiple ways to do this"
    ],
    "ru": [
      "теперь есть несколько способов сделать это"
    ]
  },
  {
    "time": [
      828.740189,
      836.016376
    ],
    "en": [
      "we can do it by lowering the cost of some interfaces or by raising the cost of others or a combination"
    ],
    "ru": [
      "мы можем сделать это, снизив стоимость некоторых интерфейсов или повысив стоимость других или их комбинации."
    ]
  },
  {
    "time": [
      836.016376,
      845.707313
    ],
    "en": [
      "just to make this quick for the video I'll raise the cost of the g00 link between r1 and r4 to 10000"
    ],
    "ru": [
      "просто чтобы сделать это быстро для видео, я увеличу стоимость соединения g00 между r1 и r4 до 10000"
    ]
  },
  {
    "time": [
      845.707313,
      848.281688
    ],
    "en": [
      "I'll start on r1"
    ],
    "ru": [
      "Я начну на r1"
    ]
  },
  {
    "time": [
      848.281688,
      855.308563
    ],
    "en": [
      "interface g00 to change the cost use this command"
    ],
    "ru": [
      "интерфейс g00, чтобы изменить стоимость, используйте эту команду"
    ]
  },
  {
    "time": [
      855.308563,
      859.193792
    ],
    "en": [
      "IP ospf cost 10000"
    ],
    "ru": [
      "IP ospf стоимость 10000"
    ]
  },
  {
    "time": [
      859.193792,
      862.272958
    ],
    "en": [
      "okay now let's do the same on r4s end"
    ],
    "ru": [
      "хорошо, теперь давайте сделаем то же самое на конце r4s"
    ]
  },
  {
    "time": [
      862.272958,
      866.669583
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
      866.669583,
      870.359478
    ],
    "en": [
      "IP ospf cost 10000"
    ],
    "ru": [
      "IP ospf стоимость 10000"
    ]
  },
  {
    "time": [
      870.359478,
      873.439207
    ],
    "en": [
      "now let's go back on r1"
    ],
    "ru": [
      "теперь давайте вернемся на r1"
    ]
  },
  {
    "time": [
      873.439207,
      876.650727
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
      876.650727,
      883.955248
    ],
    "en": [
      "okay now the route to 3.3.3.3 has changed back to r2 exclusively"
    ],
    "ru": [
      "хорошо теперь маршрут к 3.3.3.3 изменился обратно исключительно на r2"
    ]
  },
  {
    "time": [
      883.955248,
      887.858789
    ],
    "en": [
      "because we manually adjusted the cost of Gig 00 your interface"
    ],
    "ru": [
      "потому что мы вручную скорректировали стоимость Gig 00 для вашего интерфейса"
    ]
  },
  {
    "time": [
      887.858789,
      891.872518
    ],
    "en": [
      "despite the fact that the path via r4 is actually faster"
    ],
    "ru": [
      "несмотря на то, что путь через r4 на самом деле быстрее"
    ]
  },
  {
    "time": [
      891.872518,
      896.13183
    ],
    "en": [
      "we covered a lot of different things in this lab"
    ],
    "ru": [
      "мы рассмотрели много разных вещей в этой лаборатории"
    ]
  },
  {
    "time": [
      896.13183,
      902.372517
    ],
    "en": [
      "OSPF is very important both for the exam and because it's widely used in real networks"
    ],
    "ru": [
      "OSPF очень важен как для экзамена, так и потому, что он широко используется в реальных сетях."
    ]
  },
  {
    "time": [
      902.372517,
      905.4186
    ],
    "en": [
      "make sure you know the commands required"
    ],
    "ru": [
      "убедитесь, что вы знаете необходимые команды"
    ]
  },
  {
    "time": [
      905.4186,
      908.813892
    ],
    "en": [
      "I will also be making a few more OSPF labs"
    ],
    "ru": [
      "Я также буду делать еще несколько лабораторий OSPF"
    ]
  },
  {
    "time": [
      908.813892,
      911.311412
    ],
    "en": [
      "so be sure to practice further with those"
    ],
    "ru": [
      "так что обязательно попрактикуйтесь с этими"
    ]
  },
  {
    "time": [
      911.311412,
      913.302704
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
      913.302704,
      918.15485
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
      918.15485,
      921.107537
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
      921.107537,
      924.301787
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
      924.301787,
      926.049162
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
      926.049162,
      931.218725
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comments section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      931.218725,
      938.21635
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
      938.21635,
      947.78237
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
      947.78237,
      947.78237
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
      947.78237,
      947.78237
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
      947.78237,
      947.78237
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]