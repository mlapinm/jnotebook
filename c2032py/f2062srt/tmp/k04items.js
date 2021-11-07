let objs = [
  {
    "time": [
      0.0,
      3.684538
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
      3.684538,
      7.358958
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
      7.358958,
      14.976834
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
      14.976834,
      20.790838
    ],
    "en": [
      "this lab will be the last of our labs focused on static routing"
    ],
    "ru": [
      "эта лабораторная работа будет последней из наших лабораторных работ, посвященных статической маршрутизации."
    ]
  },
  {
    "time": [
      20.790838,
      27.432261
    ],
    "en": [
      "in this lab we will configure a backup static route known as a floating static route on r1"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим резервный статический маршрут, известный как плавающий статический маршрут на r1."
    ]
  },
  {
    "time": [
      27.432261,
      33.507073
    ],
    "en": [
      "all routers are pre-configured with the routing protocol RIP pronounced rip"
    ],
    "ru": [
      "все маршрутизаторы предварительно настроены на протокол маршрутизации RIP, произносится как rip"
    ]
  },
  {
    "time": [
      33.507073,
      37.075822
    ],
    "en": [
      "we haven't done any labs on routing protocols yet"
    ],
    "ru": [
      "мы еще не проводили лабораторных работ по протоколам маршрутизации"
    ]
  },
  {
    "time": [
      37.075822,
      39.730615
    ],
    "en": [
      "but rip configuration will be coming soon"
    ],
    "ru": [
      "но конфигурация рипа будет в ближайшее время"
    ]
  },
  {
    "time": [
      39.730615,
      46.726244
    ],
    "en": [
      "we will configure r one with a floating static route so that in the event that it's s30 interface fails"
    ],
    "ru": [
      "мы настроим r one с плавающим статическим маршрутом, чтобы в случае сбоя интерфейса s30"
    ]
  },
  {
    "time": [
      46.726244,
      52.365734
    ],
    "en": [
      "it will use the s20 interface instead to reach the 10.0.0.0 slash 24 network"
    ],
    "ru": [
      "вместо этого он будет использовать интерфейс s20 для доступа к сети 10.0.0.0 slash 24"
    ]
  },
  {
    "time": [
      52.365734,
      60.273923
    ],
    "en": [
      "try to complete the lab yourself first then continue watching if you have trouble or watch the video after to check your solution"
    ],
    "ru": [
      "попробуйте сначала выполнить лабораторную работу самостоятельно, а затем продолжайте просмотр, если у вас возникнут проблемы, или посмотрите видео, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      60.273923,
      66.386193
    ],
    "en": [
      "so as it says in the lab the routing protocol rip is configured everywhere"
    ],
    "ru": [
      "так как говорят в лаборатории, рип протокола маршрутизации настроен везде"
    ]
  },
  {
    "time": [
      66.386193,
      73.895002
    ],
    "en": [
      "except between r1 and r3 meaning it's not activated for the s20 interfaces of r1 and r3"
    ],
    "ru": [
      "кроме между r1 и r3, что означает, что он не активирован для интерфейсов s20 r1 и r3"
    ]
  },
  {
    "time": [
      73.895002,
      78.744987
    ],
    "en": [
      "however our goal is to configure what's called a floating static route"
    ],
    "ru": [
      "однако наша цель - настроить так называемый плавающий статический маршрут."
    ]
  },
  {
    "time": [
      78.744987,
      84.88497
    ],
    "en": [
      "which will cause r1 to send traffic destined to the 10.0.0.0 slash 24 network"
    ],
    "ru": [
      "что заставит r1 отправлять трафик, предназначенный для сети 10.0.0.0 slash 24"
    ]
  },
  {
    "time": [
      84.88497,
      86.97142
    ],
    "en": [
      "using its s20 interface"
    ],
    "ru": [
      "используя его интерфейс s20"
    ]
  },
  {
    "time": [
      86.97142,
      89.133642
    ],
    "en": [
      "when it's read via r3 goes down"
    ],
    "ru": [
      "когда он читается через r3 идет вниз"
    ]
  },
  {
    "time": [
      89.133642,
      93.55827
    ],
    "en": [
      "we actually only need one command to complete this lab"
    ],
    "ru": [
      "на самом деле нам нужна только одна команда для выполнения этой лабораторной работы"
    ]
  },
  {
    "time": [
      93.55827,
      95.730565
    ],
    "en": [
      "but let me explain some things first"
    ],
    "ru": [
      "но позвольте мне сначала объяснить некоторые вещи"
    ]
  },
  {
    "time": [
      95.730565,
      100.010734
    ],
    "en": [
      "if you have already learned these things in your studies this can just be a review"
    ],
    "ru": [
      "если вы уже изучили эти вещи во время учебы, это может быть просто обзор"
    ]
  },
  {
    "time": [
      100.010734,
      102.886428
    ],
    "en": [
      "let me go on r1"
    ],
    "ru": [
      "позволь мне пойти на r1"
    ]
  },
  {
    "time": [
      102.886428,
      107.456067
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
      107.456067,
      116.074488
    ],
    "en": [
      "there are two connected routes the 192.168.12.0 and 192.168.13.0 networks"
    ],
    "ru": [
      "есть два связанных маршрута: сети 192.168.12.0 и 192.168.13.0"
    ]
  },
  {
    "time": [
      116.074488,
      119.670602
    ],
    "en": [
      "r1 has also learned two routes from rip"
    ],
    "ru": [
      "r1 также узнал два маршрута от rip"
    ]
  },
  {
    "time": [
      119.670602,
      121.907877
    ],
    "en": [
      "as indicated by the are here"
    ],
    "ru": [
      "как указано здесь"
    ]
  },
  {
    "time": [
      121.907877,
      126.019587
    ],
    "en": [
      "one is the 192.168.33.0 network"
    ],
    "ru": [
      "один - сеть 192.168.33.0"
    ]
  },
  {
    "time": [
      126.019587,
      127.961038
    ],
    "en": [
      "which are too advertised"
    ],
    "ru": [
      "которые слишком разрекламированы"
    ]
  },
  {
    "time": [
      127.961038,
      129.957597
    ],
    "en": [
      "look right next to the address"
    ],
    "ru": [
      "посмотри прямо рядом с адресом"
    ]
  },
  {
    "time": [
      129.957597,
      132.848276
    ],
    "en": [
      "there are two numbers here in square brackets"
    ],
    "ru": [
      "здесь два числа в квадратных скобках"
    ]
  },
  {
    "time": [
      132.848276,
      137.801715
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
      132.848276,
      137.801715
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
      137.801715,
      141.559468
    ],
    "en": [
      "first the one this is known as the metric"
    ],
    "ru": [
      "сначала тот, который известен как метрика"
    ]
  },
  {
    "time": [
      141.559468,
      147.64208
    ],
    "en": [
      "the metric depends on the routing protocols such as AI EGRP OSPF or rip"
    ],
    "ru": [
      "метрика зависит от протоколов маршрутизации, таких как AI EGRP OSPF или rip"
    ]
  },
  {
    "time": [
      147.64208,
      151.324778
    ],
    "en": [
      "rip uses hop count to calculate the metric"
    ],
    "ru": [
      "rip использует количество переходов для вычисления метрики"
    ]
  },
  {
    "time": [
      151.324778,
      155.665442
    ],
    "en": [
      "the metric of one here indicates one hop"
    ],
    "ru": [
      "метрика, равная единице, здесь указывает на один переход"
    ]
  },
  {
    "time": [
      155.665442,
      161.036964
    ],
    "en": [
      "as we can rich reach it by a single router hop over to r2"
    ],
    "ru": [
      "поскольку мы можем достичь его с помощью одного маршрутизатора, переключившись на r2"
    ]
  },
  {
    "time": [
      161.036964,
      163.463764
    ],
    "en": [
      "to which it is a directly connected network"
    ],
    "ru": [
      "к которой это напрямую подключенная сеть"
    ]
  },
  {
    "time": [
      163.463764,
      167.853265
    ],
    "en": [
      "now look at the entry for the 10.0.0.0 network"
    ],
    "ru": [
      "теперь посмотрите на запись для сети 10.0.0.0"
    ]
  },
  {
    "time": [
      167.853265,
      172.841197
    ],
    "en": [
      "its metric is 2 that is because there are 2 router hops to reach it"
    ],
    "ru": [
      "его метрика - 2, потому что есть 2 перехода к маршрутизатору, чтобы добраться до него."
    ]
  },
  {
    "time": [
      172.841197,
      178.063486
    ],
    "en": [
      "first to r2 then to r3 to which it is a directly connected network"
    ],
    "ru": [
      "сначала к r2, затем к r3, к которому это напрямую подключенная сеть"
    ]
  },
  {
    "time": [
      178.063486,
      182.18067
    ],
    "en": [
      "lower the metric the more desirable the route"
    ],
    "ru": [
      "чем ниже метрика, тем желательнее маршрут"
    ]
  },
  {
    "time": [
      182.18067,
      186.031687
    ],
    "en": [
      "but there is one factor of higher priority than the metric"
    ],
    "ru": [
      "но есть один фактор более приоритетный, чем метрика"
    ]
  },
  {
    "time": [
      186.031687,
      188.480863
    ],
    "en": [
      "that is the administrative distance"
    ],
    "ru": [
      "это административное расстояние"
    ]
  },
  {
    "time": [
      188.480863,
      190.613963
    ],
    "en": [
      "which is the number to the left of the metric"
    ],
    "ru": [
      "число слева от метрики"
    ]
  },
  {
    "time": [
      190.613963,
      193.329767
    ],
    "en": [
      "in both cases it is 120"
    ],
    "ru": [
      "в обоих случаях это 120"
    ]
  },
  {
    "time": [
      193.329767,
      196.616794
    ],
    "en": [
      "because that is the default metric of a route learned from rip"
    ],
    "ru": [
      "потому что это метрика по умолчанию для маршрута, полученного из рипа"
    ]
  },
  {
    "time": [
      196.616794,
      201.724357
    ],
    "en": [
      "because the administrative distance is higher priority than the metric"
    ],
    "ru": [
      "потому что административное расстояние имеет более высокий приоритет, чем метрика"
    ]
  },
  {
    "time": [
      201.724357,
      205.436682
    ],
    "en": [
      "if a router learns multiple possible routes to a destination"
    ],
    "ru": [
      "если маршрутизатор изучает несколько возможных маршрутов к месту назначения"
    ]
  },
  {
    "time": [
      205.436682,
      208.50349
    ],
    "en": [
      "it first compares the administrative distances"
    ],
    "ru": [
      "сначала сравниваются административные расстояния"
    ]
  },
  {
    "time": [
      208.50349,
      211.993692
    ],
    "en": [
      "and chooses the lowest distance route to put in the routing table"
    ],
    "ru": [
      "и выбирает маршрут с наименьшим расстоянием для занесения в таблицу маршрутизации"
    ]
  },
  {
    "time": [
      211.993692,
      217.534133
    ],
    "en": [
      "only if the administrative distances are the same does it compare the metrics"
    ],
    "ru": [
      "только если административные расстояния одинаковы, он сравнивает метрики"
    ]
  },
  {
    "time": [
      217.534133,
      223.201439
    ],
    "en": [
      "now I said rip has an administrative distance of 120"
    ],
    "ru": [
      "теперь я сказал, что у рипа административное расстояние 120"
    ]
  },
  {
    "time": [
      223.201439,
      226.576376
    ],
    "en": [
      "how about if we create a normal static route"
    ],
    "ru": [
      "как насчет создания нормального статического маршрута"
    ]
  },
  {
    "time": [
      226.576376,
      233.987031
    ],
    "en": [
      "let's try conf t let's create a static route to the 10.0.0.0 network"
    ],
    "ru": [
      "давайте попробуем conf t давайте создадим статический маршрут в сеть 10.0.0.0"
    ]
  },
  {
    "time": [
      233.987031,
      246.643488
    ],
    "en": [
      "IP route 10.0.0.0 255.255.255.0 192.168.13.3 - next table to r3"
    ],
    "ru": [
      "IP-маршрут 10.0.0.0 255.255.255.0 192.168.13.3 - следующая таблица в r3"
    ]
  },
  {
    "time": [
      246.643488,
      257.263647
    ],
    "en": [
      "do show IP route well now the route to 10.0.0.0 learned via rip isn't displayed in the routing table"
    ],
    "ru": [
      "действительно хорошо показывать IP-маршрут, теперь маршрут до 10.0.0.0, полученный через rip, не отображается в таблице маршрутизации"
    ]
  },
  {
    "time": [
      257.263647,
      263.32847
    ],
    "en": [
      "it has been replaced with our static route because it has a lower administrative distance"
    ],
    "ru": [
      "он был заменен нашим статическим маршрутом, потому что он имеет меньшее административное расстояние"
    ]
  },
  {
    "time": [
      263.32847,
      267.437197
    ],
    "en": [
      "the default administrative distance of a static route is 1"
    ],
    "ru": [
      "административное расстояние статического маршрута по умолчанию - 1"
    ]
  },
  {
    "time": [
      267.437197,
      269.069368
    ],
    "en": [
      "as you can see here"
    ],
    "ru": [
      "как вы можете видеть здесь"
    ]
  },
  {
    "time": [
      269.069368,
      278.055467
    ],
    "en": [
      "so have we completed the lab no our instructions are to configure what's called a floating static rift"
    ],
    "ru": [
      "Итак, мы завершили лабораторную работу, нет наших инструкций по настройке так называемого плавающего статического разлома"
    ]
  },
  {
    "time": [
      278.055467,
      281.463454
    ],
    "en": [
      "that is a static route which is only entered into the routing table"
    ],
    "ru": [
      "это статический маршрут, который вводится только в таблицу маршрутизации"
    ]
  },
  {
    "time": [
      281.463454,
      283.900539
    ],
    "en": [
      "when the regular route is not available"
    ],
    "ru": [
      "когда регулярный маршрут недоступен"
    ]
  },
  {
    "time": [
      283.900539,
      286.211522
    ],
    "en": [
      "such as when an interface goes down"
    ],
    "ru": [
      "например, когда интерфейс выходит из строя"
    ]
  },
  {
    "time": [
      286.211522,
      288.265679
    ],
    "en": [
      "how can we do that"
    ],
    "ru": [
      "Как мы можем сделать это"
    ]
  },
  {
    "time": [
      288.265679,
      294.74954
    ],
    "en": [
      "well when configuring a static route we can also specify the administrative distance for that route"
    ],
    "ru": [
      "хорошо, при настройке статического маршрута мы также можем указать административное расстояние для этого маршрута"
    ]
  },
  {
    "time": [
      294.74954,
      299.132671
    ],
    "en": [
      "if we specify an administrative distance higher than that of the RIP route"
    ],
    "ru": [
      "если мы укажем административное расстояние больше, чем у RIP-маршрута"
    ]
  },
  {
    "time": [
      299.132671,
      303.736737
    ],
    "en": [
      "the static route will not appear in the routing table and thus not be used"
    ],
    "ru": [
      "статический маршрут не будет отображаться в таблице маршрутизации и, следовательно, не будет использоваться"
    ]
  },
  {
    "time": [
      303.736737,
      306.261395
    ],
    "en": [
      "unless we stop receiving the RIP route from r 2"
    ],
    "ru": [
      "если мы не перестанем получать RIP-маршрут от r 2"
    ]
  },
  {
    "time": [
      306.261395,
      308.766602
    ],
    "en": [
      "do to an interface failure or something"
    ],
    "ru": [
      "сделать с ошибкой интерфейса или что-то в этом роде"
    ]
  },
  {
    "time": [
      308.766602,
      313.834846
    ],
    "en": [
      "so let's undo our static route by putting no in front of the command"
    ],
    "ru": [
      "так что давайте отменим наш статический маршрут, поставив нет перед командой"
    ]
  },
  {
    "time": [
      313.834846,
      318.96724
    ],
    "en": [
      "now let's use the command at gain"
    ],
    "ru": [
      "теперь давайте воспользуемся командой при усилении"
    ]
  },
  {
    "time": [
      318.96724,
      323.014629
    ],
    "en": [
      "and here I'll use the context-sensitive help question mark"
    ],
    "ru": [
      "и здесь я использую вопросительный знак контекстной справки"
    ]
  },
  {
    "time": [
      323.014629,
      326.727565
    ],
    "en": [
      "and you can see we can set the distance of the route"
    ],
    "ru": [
      "и вы можете видеть, что мы можем установить расстояние маршрута"
    ]
  },
  {
    "time": [
      326.727565,
      330.635987
    ],
    "en": [
      "the administrative distance of RIP is 120"
    ],
    "ru": [
      "административное расстояние RIP - 120"
    ]
  },
  {
    "time": [
      330.635987,
      335.882735
    ],
    "en": [
      "so let's just set it to one higher 121 okay"
    ],
    "ru": [
      "так что давайте просто установим его на единицу выше 121, хорошо"
    ]
  },
  {
    "time": [
      335.882735,
      338.200772
    ],
    "en": [
      "now let's check the routing table again"
    ],
    "ru": [
      "теперь давайте еще раз проверим таблицу маршрутизации"
    ]
  },
  {
    "time": [
      338.200772,
      340.151464
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
      340.151464,
      343.670919
    ],
    "en": [
      "this time the static route is not displayed"
    ],
    "ru": [
      "на этот раз статический маршрут не отображается"
    ]
  },
  {
    "time": [
      343.670919,
      354.009059
    ],
    "en": [
      "let's use the traceroute command to ensure that it is still taking the path through r2 to r3"
    ],
    "ru": [
      "давайте воспользуемся командой traceroute, чтобы убедиться, что он все еще идет по пути через r2 к r3"
    ]
  },
  {
    "time": [
      354.009059,
      357.14961
    ],
    "en": [
      "we haven't used the traceroute command yet in these labs"
    ],
    "ru": [
      "мы еще не использовали команду traceroute в этих лабораторных работах"
    ]
  },
  {
    "time": [
      357.14961,
      358.752076
    ],
    "en": [
      "but it's very useful"
    ],
    "ru": [
      "но это очень полезно"
    ]
  },
  {
    "time": [
      358.752076,
      364.705773
    ],
    "en": [
      "it's like the ping command but it sends a reply back from each router on the way to its destination"
    ],
    "ru": [
      "это похоже на команду ping, но она отправляет ответ от каждого маршрутизатора по пути к месту назначения"
    ]
  },
  {
    "time": [
      364.705773,
      367.614195
    ],
    "en": [
      "so you can trace the path it takes through the network"
    ],
    "ru": [
      "чтобы вы могли проследить путь, который он проходит через сеть"
    ]
  },
  {
    "time": [
      367.614195,
      369.821616
    ],
    "en": [
      "I'll trace to PC 1"
    ],
    "ru": [
      "Я прослежу до ПК 1"
    ]
  },
  {
    "time": [
      369.821616,
      376.29414
    ],
    "en": [
      "do trace route 10.0.0.11"
    ],
    "ru": [
      "сделать трассировку маршрута 10.0.0.11"
    ]
  },
  {
    "time": [
      376.29414,
      384.639598
    ],
    "en": [
      "as you can see it is indeed going to r2 before going to r3 and then ending up at PC 1"
    ],
    "ru": [
      "как вы можете видеть, он действительно переходит на r2, прежде чем перейти к r3, а затем в конечном итоге на ПК 1"
    ]
  },
  {
    "time": [
      384.639598,
      387.694668
    ],
    "en": [
      "now let's simulate an interphase error"
    ],
    "ru": [
      "теперь давайте смоделируем межфазную ошибку"
    ]
  },
  {
    "time": [
      387.694668,
      395.826337
    ],
    "en": [
      "I'll turn off the s30 interface which is connected to r 2 interface s30 shutdown"
    ],
    "ru": [
      "Я отключу интерфейс s30 который подключен к интерфейсу r 2 выключение s30"
    ]
  },
  {
    "time": [
      395.826337,
      399.425154
    ],
    "en": [
      "okay now do show IP route"
    ],
    "ru": [
      "хорошо, теперь покажи IP-маршрут"
    ]
  },
  {
    "time": [
      399.425154,
      402.890784
    ],
    "en": [
      "our rip routes are gone"
    ],
    "ru": [
      "наши маршруты разрыва ушли"
    ]
  },
  {
    "time": [
      402.890784,
      409.825921
    ],
    "en": [
      "however immediately the floating static route which we configured takes the place of the previous route to 10.0.0.0"
    ],
    "ru": [
      "однако сразу же настроенный нами плавающий статический маршрут заменяет предыдущий маршрут до 10.0.0.0"
    ]
  },
  {
    "time": [
      409.825921,
      415.463376
    ],
    "en": [
      "let's try a trace route from router 1 to PC 1 again"
    ],
    "ru": [
      "давайте снова попробуем проследить маршрут от маршрутизатора 1 до ПК 1"
    ]
  },
  {
    "time": [
      415.463376,
      420.704484
    ],
    "en": [
      "do trace route 10.0.0.11"
    ],
    "ru": [
      "сделать трассировку маршрута 10.0.0.11"
    ]
  },
  {
    "time": [
      420.704484,
      426.963798
    ],
    "en": [
      "this time it goes straight to r3 and then ends up at PC 11"
    ],
    "ru": [
      "на этот раз он идет прямо на r3, а затем заканчивается на ПК 11"
    ]
  },
  {
    "time": [
      426.963798,
      428.950173
    ],
    "en": [
      "I'm sorry PC 1"
    ],
    "ru": [
      "Извините ПК 1"
    ]
  },
  {
    "time": [
      428.950173,
      432.295903
    ],
    "en": [
      "our floating static route is functioning exactly as intended"
    ],
    "ru": [
      "наш плавающий статический маршрут работает точно так, как задумано"
    ]
  },
  {
    "time": [
      432.295903,
      435.177007
    ],
    "en": [
      "now let's turn on this interface again"
    ],
    "ru": [
      "теперь давайте снова включим этот интерфейс"
    ]
  },
  {
    "time": [
      435.177007,
      436.625389
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
      436.625389,
      439.158759
    ],
    "en": [
      "what do you think will happen"
    ],
    "ru": [
      "Как ты думаешь, что произойдет"
    ]
  },
  {
    "time": [
      439.158759,
      444.098598
    ],
    "en": [
      "it can take a bit of time but hopefully as I'm talking the process will finish"
    ],
    "ru": [
      "это может занять немного времени, но, надеюсь, пока я говорю, процесс завершится"
    ]
  },
  {
    "time": [
      444.098598,
      451.907932
    ],
    "en": [
      "currently art 2 is regularly sending rip advertisements of its route to 10.0.0.0 to r1"
    ],
    "ru": [
      "в настоящее время Art 2 регулярно отправляет рекламные объявления о своем маршруте от 10.0.0.0 до r1"
    ]
  },
  {
    "time": [
      451.907932,
      456.078674
    ],
    "en": [
      "now that our ones s30 interface is up again"
    ],
    "ru": [
      "теперь, когда наш интерфейс s30 снова работает"
    ]
  },
  {
    "time": [
      456.078674,
      459.849758
    ],
    "en": [
      "when r1 receives one of those advertisements on the interface"
    ],
    "ru": [
      "когда r1 получает одно из этих рекламных объявлений на интерфейсе"
    ]
  },
  {
    "time": [
      459.849758,
      464.853939
    ],
    "en": [
      "it will replace the floating static route in the routing table with the route learned by rip"
    ],
    "ru": [
      "он заменит плавающий статический маршрут в таблице маршрутизации маршрутом, полученным методом rip"
    ]
  },
  {
    "time": [
      464.853939,
      473.556057
    ],
    "en": [
      "because the administrative distance of RIP is 120 and the floating static route we configured has an id of 121"
    ],
    "ru": [
      "поскольку административное расстояние RIP составляет 120, а настроенный нами плавающий статический маршрут имеет идентификатор 121"
    ]
  },
  {
    "time": [
      473.556057,
      476.234733
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
      476.234733,
      478.514026
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
      478.514026,
      483.098141
    ],
    "en": [
      "as you can see the floating static route is gone"
    ],
    "ru": [
      "как вы можете видеть, плавающий статический маршрут исчез"
    ]
  },
  {
    "time": [
      483.098141,
      485.684773
    ],
    "en": [
      "and now the RIP route is back in the routing table"
    ],
    "ru": [
      "и теперь RIP-маршрут снова в таблице маршрутизации"
    ]
  },
  {
    "time": [
      485.684773,
      491.855033
    ],
    "en": [
      "I hope this lab helped you understand a little about administrative distance and floating static routes"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа помогла вам немного разобраться в административном расстоянии и плавающих статических маршрутах."
    ]
  },
  {
    "time": [
      491.855033,
      498.162812
    ],
    "en": [
      "soon we will do more labs focusing on routing protocols like egrp and OSPF and also rip"
    ],
    "ru": [
      "скоро мы проведем больше лабораторных работ, посвященных протоколам маршрутизации, таким как egrp и OSPF, а также rip"
    ]
  },
  {
    "time": [
      498.162812,
      500.048814
    ],
    "en": [
      "which we saw a little in this lab"
    ],
    "ru": [
      "что мы видели немного в этой лаборатории"
    ]
  },
  {
    "time": [
      500.048814,
      501.789651
    ],
    "en": [
      "that's all for the lab"
    ],
    "ru": [
      "это все для лаборатории"
    ]
  },
  {
    "time": [
      501.789651,
      507.700122
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
      507.700122,
      510.870462
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
      510.870462,
      512.669134
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
      512.669134,
      517.312649
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
      517.312649,
      526.069445
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      526.069445,
      531.822736
    ],
    "en": [
      "I accept Bitcoin and etherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      531.822736,
      535.563137
    ],
    "en": [
      "I am also a brave verified publisher"
    ],
    "ru": [
      "Я также храбрый проверенный издатель"
    ]
  },
  {
    "time": [
      535.563137,
      540.482156
    ],
    "en": [
      "and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и принимайте пожертвования летучих мышей или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      540.482156,
      540.482156
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
      540.482156,
      540.482156
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
      540.482156,
      540.482156
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]