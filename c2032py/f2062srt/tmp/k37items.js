let objs = [
  {
    "time": [
      0.0,
      4.710562
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
      4.710562,
      8.746812
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
      8.746812,
      15.801604
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
      15.801604,
      19.414374
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
      19.414374,
      26.282749
    ],
    "en": [
      "in this lab we will troubleshoot the AI GRP network we configured in the previous lab"
    ],
    "ru": [
      "В этой лабораторной работе мы будем устранять неполадки в сети AI GRP, которую мы настроили в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      26.282749,
      29.99477
    ],
    "en": [
      "I have made one miss configuration per router"
    ],
    "ru": [
      "Я сделал одну конфигурацию пропуска для каждого маршрутизатора"
    ]
  },
  {
    "time": [
      29.99477,
      33.319603
    ],
    "en": [
      "so let's find the issues and get AI GRP working in the network"
    ],
    "ru": [
      "Итак, давайте найдем проблемы и заставим AI GRP работать в сети"
    ]
  },
  {
    "time": [
      33.319603,
      35.662332
    ],
    "en": [
      "I'll get started on our one"
    ],
    "ru": [
      "Я начну с нашего"
    ]
  },
  {
    "time": [
      35.662332,
      42.433019
    ],
    "en": [
      "enable let's see if our one has any EIGRP neighbors"
    ],
    "ru": [
      "enable посмотрим, есть ли у нашего соседа по EIGRP"
    ]
  },
  {
    "time": [
      42.433019,
      46.041935
    ],
    "en": [
      "show IP e IG RP neighbors"
    ],
    "ru": [
      "показать соседей IP и IG RP"
    ]
  },
  {
    "time": [
      46.041935,
      50.43331
    ],
    "en": [
      "nothing however this message is a big hint"
    ],
    "ru": [
      "ничего, однако это сообщение является большим намеком"
    ]
  },
  {
    "time": [
      50.43331,
      54.213227
    ],
    "en": [
      "showing a EIGRP neighbors for process 10"
    ],
    "ru": [
      "показаны соседи EIGRP для процесса 10"
    ]
  },
  {
    "time": [
      54.213227,
      57.959518
    ],
    "en": [
      "this process number is the autonomous system number"
    ],
    "ru": [
      "этот номер процесса является номером автономной системы"
    ]
  },
  {
    "time": [
      57.959518,
      61.940247
    ],
    "en": [
      "this network is supposed to be using an a s number of 100"
    ],
    "ru": [
      "эта сеть должна использовать число 100"
    ]
  },
  {
    "time": [
      61.940247,
      64.069059
    ],
    "en": [
      "so run"
    ],
    "ru": [
      "так беги"
    ]
  },
  {
    "time": [
      64.069059,
      69.614266
    ],
    "en": [
      "here we have all the correct ew g RP configurations"
    ],
    "ru": [
      "здесь у нас есть все правильные конфигурации ew g RP"
    ]
  },
  {
    "time": [
      69.614266,
      76.290641
    ],
    "en": [
      "however because r1 is using an incorrect a s number of 10 none of it works"
    ],
    "ru": [
      "однако из-за того, что r1 использует неправильное число 10, ни один из них не работает"
    ]
  },
  {
    "time": [
      76.290641,
      79.278307
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
      79.278307,
      82.02489
    ],
    "en": [
      "let's delete the current ew g RP configuration"
    ],
    "ru": [
      "удалим текущую конфигурацию ew g RP"
    ]
  },
  {
    "time": [
      82.02489,
      85.939994
    ],
    "en": [
      "no router EA g RP 10"
    ],
    "ru": [
      "без маршрутизатора EA g RP 10"
    ]
  },
  {
    "time": [
      85.939994,
      88.178682
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
      88.178682,
      94.762911
    ],
    "en": [
      "as you can see that removed all of the EIG RP configurations for a s 10"
    ],
    "ru": [
      "как вы можете видеть, удалены все конфигурации EIG RP за 10 секунд."
    ]
  },
  {
    "time": [
      94.762911,
      98.253431
    ],
    "en": [
      "now let's reconfigure it with the correct a s number"
    ],
    "ru": [
      "теперь давайте изменим его конфигурацию с правильным номером a s"
    ]
  },
  {
    "time": [
      98.253431,
      114.260597
    ],
    "en": [
      "router EA g RP 100 network 10000 network 1.1 1.1 oh-oh-oh-oh passive interface l 0"
    ],
    "ru": [
      "маршрутизатор EA g RP 100 сеть 10000 сеть 1.1 1.1 oh-oh-oh-oh пассивный интерфейс l 0"
    ]
  },
  {
    "time": [
      114.260597,
      116.34868
    ],
    "en": [
      "no auto summary"
    ],
    "ru": [
      "нет автоматической сводки"
    ]
  },
  {
    "time": [
      116.34868,
      120.580951
    ],
    "en": [
      "well as you can see one neighbor has come up r4"
    ],
    "ru": [
      "ну, как вы можете видеть, подошел один сосед r4"
    ]
  },
  {
    "time": [
      120.580951,
      124.398055
    ],
    "en": [
      "let's see what routes were getting from our 4"
    ],
    "ru": [
      "посмотрим, какие маршруты попадали из наших 4"
    ]
  },
  {
    "time": [
      124.398055,
      127.111638
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
      127.111638,
      130.966867
    ],
    "en": [
      "looks like we're getting quite a few routes already"
    ],
    "ru": [
      "похоже, у нас уже есть довольно много маршрутов"
    ]
  },
  {
    "time": [
      130.966867,
      137.453075
    ],
    "en": [
      "however if you look carefully although our neighbor ship with r4 is up and we're receiving reds from it"
    ],
    "ru": [
      "однако, если вы посмотрите внимательно, хотя наш соседский корабль с r4 поднялся, и мы получаем от него красные"
    ]
  },
  {
    "time": [
      137.453075,
      141.893658
    ],
    "en": [
      "we're not getting our fours 4.4.4 for loopback address"
    ],
    "ru": [
      "мы не получаем нашу четверку 4.4.4 для адреса обратной связи"
    ]
  },
  {
    "time": [
      141.893658,
      144.5737
    ],
    "en": [
      "let's see what's wrong on our 4"
    ],
    "ru": [
      "давай посмотрим, что не так на нашем 4"
    ]
  },
  {
    "time": [
      144.5737,
      150.710471
    ],
    "en": [
      "enable show IP protocols"
    ],
    "ru": [
      "включить показывать IP-протоколы"
    ]
  },
  {
    "time": [
      150.710471,
      153.519262
    ],
    "en": [
      "look here"
    ],
    "ru": [
      "Смотри сюда"
    ]
  },
  {
    "time": [
      153.519262,
      160.277929
    ],
    "en": [
      "routing for networks 10000 and 40 4.4.4 4/32"
    ],
    "ru": [
      "маршрутизация для сетей 10000 и 40 4.4.4 4/32"
    ]
  },
  {
    "time": [
      160.277929,
      164.255846
    ],
    "en": [
      "show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      164.255846,
      173.177325
    ],
    "en": [
      "our 4 is loopback interface has an IP address of 4 4 4 4 not 40 4.4.4 4"
    ],
    "ru": [
      "наш 4-шлейфовый интерфейс имеет IP-адрес 4 4 4 4, а не 40 4.4.4 4"
    ]
  },
  {
    "time": [
      173.177325,
      174.384033
    ],
    "en": [
      "so there's our problem"
    ],
    "ru": [
      "так вот наша проблема"
    ]
  },
  {
    "time": [
      174.384033,
      179.600971
    ],
    "en": [
      "coffee tea router EAG RP 100"
    ],
    "ru": [
      "кофе-чайный маршрутизатор EAG RP 100"
    ]
  },
  {
    "time": [
      179.600971,
      186.385325
    ],
    "en": [
      "no network 44.4 dot 4 dot 400 200"
    ],
    "ru": [
      "нет сети 44,4 точки 4 точки 400200"
    ]
  },
  {
    "time": [
      186.385325,
      192.124075
    ],
    "en": [
      "network for dot 4.4.4 oh oh oh oh ok"
    ],
    "ru": [
      "сеть для точки 4.4.4 ой ой ой ой хорошо"
    ]
  },
  {
    "time": [
      192.124075,
      193.930908
    ],
    "en": [
      "that should fix it"
    ],
    "ru": [
      "это должно исправить это"
    ]
  },
  {
    "time": [
      193.930908,
      196.053408
    ],
    "en": [
      "I'll just quickly check on r1"
    ],
    "ru": [
      "Я просто быстро проверю на r1"
    ]
  },
  {
    "time": [
      196.053408,
      200.444116
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
      200.444116,
      205.612762
    ],
    "en": [
      "there it is so we fix the issues on r1 and r4"
    ],
    "ru": [
      "вот так мы исправляем проблемы на r1 и r4"
    ]
  },
  {
    "time": [
      205.612762,
      211.932741
    ],
    "en": [
      "now r1 formed a neighbor relationship with our 4 but what about our to"
    ],
    "ru": [
      "теперь r1 сформировал отношения соседа с нашими 4, но как насчет наших"
    ]
  },
  {
    "time": [
      211.932741,
      216.072616
    ],
    "en": [
      "do show IP e IG RP neighbor"
    ],
    "ru": [
      "показывать IP и IG RP соседа"
    ]
  },
  {
    "time": [
      216.072616,
      219.114178
    ],
    "en": [
      "only our four appears"
    ],
    "ru": [
      "появляется только наша четверка"
    ]
  },
  {
    "time": [
      219.114178,
      221.708386
    ],
    "en": [
      "let's check out our to"
    ],
    "ru": [
      "давай проверим наш"
    ]
  },
  {
    "time": [
      221.708386,
      227.79274
    ],
    "en": [
      "enable show IP protocols"
    ],
    "ru": [
      "включить показывать IP-протоколы"
    ]
  },
  {
    "time": [
      227.79274,
      230.33251
    ],
    "en": [
      "can you spot the issue"
    ],
    "ru": [
      "ты можешь определить проблему?"
    ]
  },
  {
    "time": [
      230.33251,
      234.77276
    ],
    "en": [
      "r2 is fast ethernet 1 0 interface"
    ],
    "ru": [
      "r2 - это быстрый интерфейс Ethernet 1 0"
    ]
  },
  {
    "time": [
      234.77276,
      239.122115
    ],
    "en": [
      "which is used to connect to r1 is configured as a passive interface"
    ],
    "ru": [
      "который используется для подключения к r1 настроен как пассивный интерфейс"
    ]
  },
  {
    "time": [
      239.122115,
      247.119281
    ],
    "en": [
      "this means r2 will advertise that 1012 0/24 network on f10 to r3"
    ],
    "ru": [
      "это означает, что r2 будет рекламировать эту сеть 1012 0/24 на f10 - r3"
    ]
  },
  {
    "time": [
      247.119281,
      251.090531
    ],
    "en": [
      "but it won't form a neighbor relationship with r1 on that interface"
    ],
    "ru": [
      "но он не будет формировать отношения соседа с r1 на этом интерфейсе"
    ]
  },
  {
    "time": [
      251.090531,
      256.230614
    ],
    "en": [
      "compte router aig RP 100"
    ],
    "ru": [
      "compte роутер AIG RP 100"
    ]
  },
  {
    "time": [
      256.230614,
      259.841551
    ],
    "en": [
      "no passive interface f10"
    ],
    "ru": [
      "нет пассивного интерфейса f10"
    ]
  },
  {
    "time": [
      259.841551,
      263.156801
    ],
    "en": [
      "there we go immediately we get a message"
    ],
    "ru": [
      "вот и мы сразу получаем сообщение"
    ]
  },
  {
    "time": [
      263.156801,
      266.959156
    ],
    "en": [
      "do show IPE a GRP neighbor"
    ],
    "ru": [
      "показывать IPE соседа по GRP"
    ]
  },
  {
    "time": [
      266.959156,
      271.807156
    ],
    "en": [
      "there are two is a neighbor with both r1 and r3"
    ],
    "ru": [
      "есть два соседа с r1 и r3"
    ]
  },
  {
    "time": [
      271.807156,
      275.63101
    ],
    "en": [
      "let's see what's wrong on r3"
    ],
    "ru": [
      "давай посмотрим, что не так на r3"
    ]
  },
  {
    "time": [
      275.63101,
      281.276197
    ],
    "en": [
      "enable show IP protocols"
    ],
    "ru": [
      "включить показывать IP-протоколы"
    ]
  },
  {
    "time": [
      281.276197,
      284.671072
    ],
    "en": [
      "everything looks good"
    ],
    "ru": [
      "все выглядит хорошо"
    ]
  },
  {
    "time": [
      284.671072,
      292.34701
    ],
    "en": [
      "advertising the 3.3 3.3 loopback and 1000 dot o interfaces"
    ],
    "ru": [
      "реклама интерфейсов 3.3 3.3 loopback и 1000 dot o"
    ]
  },
  {
    "time": [
      292.34701,
      295.424905
    ],
    "en": [
      "the loopback is passive"
    ],
    "ru": [
      "петля пассивна"
    ]
  },
  {
    "time": [
      295.424905,
      298.598114
    ],
    "en": [
      "show IP e IG RP neighbor"
    ],
    "ru": [
      "показать IP e IG RP соседа"
    ]
  },
  {
    "time": [
      298.598114,
      304.557614
    ],
    "en": [
      "okay so it's neighbors with r2 and r4 but not r5"
    ],
    "ru": [
      "хорошо, значит, это соседи с r2 и r4, но не с r5"
    ]
  },
  {
    "time": [
      304.557614,
      307.09151
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
      307.09151,
      313.713385
    ],
    "en": [
      "I don't see any problems with our 3zi GRP configuration"
    ],
    "ru": [
      "Не вижу проблем с нашей конфигурацией 3zi GRP"
    ]
  },
  {
    "time": [
      313.713385,
      315.449885
    ],
    "en": [
      "so let's check on our v"
    ],
    "ru": [
      "так что давайте проверим наш v"
    ]
  },
  {
    "time": [
      315.449885,
      321.06403
    ],
    "en": [
      "enable show IP protocols"
    ],
    "ru": [
      "включить показывать IP-протоколы"
    ]
  },
  {
    "time": [
      321.06403,
      325.190447
    ],
    "en": [
      "can you identify the problem here"
    ],
    "ru": [
      "Вы можете определить проблему здесь"
    ]
  },
  {
    "time": [
      325.190447,
      331.845822
    ],
    "en": [
      "under the routing for networks section it lists 1000 / 32"
    ],
    "ru": [
      "в разделе маршрутизации для сетей указано 1000/32"
    ]
  },
  {
    "time": [
      331.845822,
      337.068947
    ],
    "en": [
      "however r5 doesn't have any 1000 / 32 interfaces"
    ],
    "ru": [
      "однако в r5 нет интерфейсов 1000/32"
    ]
  },
  {
    "time": [
      337.068947,
      339.473947
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
      339.473947,
      345.213987
    ],
    "en": [
      "as you can see the / 32 wildcard mask was added"
    ],
    "ru": [
      "как вы можете увидеть / 32 подстановочной маска была добавлена"
    ]
  },
  {
    "time": [
      345.213987,
      349.348446
    ],
    "en": [
      "so yeah GRP isn't activated on our 5s g00 interface"
    ],
    "ru": [
      "так что да GRP не активирована на наших 5S G00 интерфейс"
    ]
  },
  {
    "time": [
      349.348446,
      353.739154
    ],
    "en": [
      "which has an address in the 10.35 0/24 network"
    ],
    "ru": [
      "который имеет адрес в сети 10.35 0/24"
    ]
  },
  {
    "time": [
      353.739154,
      359.359716
    ],
    "en": [
      "coughed e router ya g RP 100"
    ],
    "ru": [
      "кашлянул й маршрутизатор уа г RP 100"
    ]
  },
  {
    "time": [
      359.359716,
      365.776425
    ],
    "en": [
      "no network 1000 odo odo"
    ],
    "ru": [
      "нет сети 1000 одометра одометра"
    ]
  },
  {
    "time": [
      365.776425,
      369.883508
    ],
    "en": [
      "now there are a couple of ways we could activate di g RP on the interface"
    ],
    "ru": [
      "Теперь есть несколько способов, которыми мы могли бы активировать ди г RP на интерфейсе"
    ]
  },
  {
    "time": [
      369.883508,
      375.690362
    ],
    "en": [
      "let's do what is configured on the other routers and just type network 1000"
    ],
    "ru": [
      "давайте делать то, что настроен на другие маршрутизаторы и просто тип сети 1000"
    ]
  },
  {
    "time": [
      375.690362,
      377.217695
    ],
    "en": [
      "and leave it at that"
    ],
    "ru": [
      "и оставим все как есть"
    ]
  },
  {
    "time": [
      377.217695,
      384.744778
    ],
    "en": [
      "remember Vig our P's Network command will default to the class full boundaries in this case a / 8 network"
    ],
    "ru": [
      "помните команду VIG Наши P в сети по умолчанию будет в полной мере границ классов в этом случае / 8 сети"
    ]
  },
  {
    "time": [
      384.744778,
      392.381652
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
      384.744778,
      392.381652
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
      392.381652,
      395.781256
    ],
    "en": [
      "so yeah GRP is now activated on our 5"
    ],
    "ru": [
      "так что да GRP активирован на нашем 5"
    ]
  },
  {
    "time": [
      395.781256,
      398.970006
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
      398.970006,
      402.60759
    ],
    "en": [
      "now we're receiving a EIGRP reps"
    ],
    "ru": [
      "Теперь мы, получающий EIGRP повторения"
    ]
  },
  {
    "time": [
      402.60759,
      409.642485
    ],
    "en": [
      "however our five is supposed to receive a 1000 / 8 summary from our 3"
    ],
    "ru": [
      "Однако наши пяти предполагается получить сводку 1000/8 от наших 3"
    ]
  },
  {
    "time": [
      409.642485,
      411.874215
    ],
    "en": [
      "rather than these individual reps"
    ],
    "ru": [
      "а не эти отдельные представители"
    ]
  },
  {
    "time": [
      411.874215,
      415.399568
    ],
    "en": [
      "this problem is likely on our three"
    ],
    "ru": [
      "эта проблема, скорее всего, на наших три"
    ]
  },
  {
    "time": [
      415.399568,
      416.497047
    ],
    "en": [
      "let's go back"
    ],
    "ru": [
      "давай вернемся"
    ]
  },
  {
    "time": [
      416.497047,
      420.331713
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
      420.331713,
      428.050588
    ],
    "en": [
      "the IP summary address command isn't configured on the gig 0/0 interface which connects to our five"
    ],
    "ru": [
      "команда IP-адрес резюме не настроена на 0/0 интерфейсе кабриолета, который подключается к нашим пяти"
    ]
  },
  {
    "time": [
      428.050588,
      430.533817
    ],
    "en": [
      "but rather the f10 interface"
    ],
    "ru": [
      "а интерфейс f10"
    ]
  },
  {
    "time": [
      430.533817,
      433.59688
    ],
    "en": [
      "let's put it back on the correct interface"
    ],
    "ru": [
      "давайте положить его обратно на правильный интерфейс"
    ]
  },
  {
    "time": [
      433.59688,
      435.915047
    ],
    "en": [
      "let me copy the command first"
    ],
    "ru": [
      "дайте мне скопировать команду первой"
    ]
  },
  {
    "time": [
      435.915047,
      440.428817
    ],
    "en": [
      "then I'll remove it"
    ],
    "ru": [
      "то я его удалю"
    ]
  },
  {
    "time": [
      440.428817,
      442.798234
    ],
    "en": [
      "interface f10"
    ],
    "ru": [
      "интерфейс f10"
    ]
  },
  {
    "time": [
      442.798234,
      445.393442
    ],
    "en": [
      "now I'll paste it here"
    ],
    "ru": [
      "Теперь я вставить здесь"
    ]
  },
  {
    "time": [
      445.393442,
      449.036692
    ],
    "en": [
      "and then I'll cancel it with no"
    ],
    "ru": [
      "и тогда я не отменю его нет"
    ]
  },
  {
    "time": [
      449.036692,
      452.726713
    ],
    "en": [
      "ok and now let's put it on g00"
    ],
    "ru": [
      "ОК, а теперь давайте его на g00"
    ]
  },
  {
    "time": [
      452.726713,
      456.835942
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
      456.835942,
      459.12165
    ],
    "en": [
      "now I'll paste it here"
    ],
    "ru": [
      "Теперь я вставить здесь"
    ]
  },
  {
    "time": [
      459.12165,
      461.275567
    ],
    "en": [
      "and there we go"
    ],
    "ru": [
      "и вот мы идем"
    ]
  },
  {
    "time": [
      461.275567,
      464.5054
    ],
    "en": [
      "let's check if r5 is receiving the summary"
    ],
    "ru": [
      "проверка ДАВАЙТЕ если r5 получает резюме"
    ]
  },
  {
    "time": [
      464.5054,
      467.781754
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
      467.781754,
      473.1144
    ],
    "en": [
      "there it is 10000 / 8"
    ],
    "ru": [
      "там 10000/8"
    ]
  },
  {
    "time": [
      473.1144,
      476.251942
    ],
    "en": [
      "okay we have solved all the issues in this network"
    ],
    "ru": [
      "хорошо мы решили все вопросы в этой сети"
    ]
  },
  {
    "time": [
      476.251942,
      477.711358
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
      477.711358,
      484.132004
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
      484.132004,
      488.455212
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
      488.455212,
      493.260295
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
      493.260295,
      499.775961
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via addresses in the description"
    ],
    "ru": [
      "если вы хотите, чтобы поддержать мой канал Я принимаю Bitcoin и aetherium пожертвование через адрес в описании"
    ]
  },
  {
    "time": [
      499.775961,
      508.05142
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
      508.05142,
      508.05142
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
      508.05142,
      508.05142
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
      508.05142,
      508.05142
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]