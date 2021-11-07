let objs = [
  {
    "time": [
      0.0,
      5.181604
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
      5.181604,
      8.311541
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
      8.311541,
      15.826645
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
      15.826645,
      20.24408
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
      20.24408,
      29.094288
    ],
    "en": [
      "in this lab the final lab of my icnd1 series we will troubleshoot some miss configurations in this topology"
    ],
    "ru": [
      "В этой лабораторной работе, заключительной лабораторной работе моей серии icnd1, мы будем устранять некоторые пропущенные конфигурации в этой топологии."
    ]
  },
  {
    "time": [
      29.094288,
      33.344267
    ],
    "en": [
      "this is the same topology from the previous configuration lab"
    ],
    "ru": [
      "это та же топология из предыдущей лабораторной работы по настройке"
    ]
  },
  {
    "time": [
      33.344267,
      36.336454
    ],
    "en": [
      "but I've purposefully made some miss configurations"
    ],
    "ru": [
      "но я специально сделал несколько промахов"
    ]
  },
  {
    "time": [
      36.336454,
      41.970037
    ],
    "en": [
      "I highly recommend you go through this lab yourself to find and fix the errors on your own"
    ],
    "ru": [
      "Я настоятельно рекомендую вам пройти эту лабораторную работу самостоятельно, чтобы найти и исправить ошибки самостоятельно."
    ]
  },
  {
    "time": [
      41.970037,
      44.559474
    ],
    "en": [
      "and just use this video to check your solution"
    ],
    "ru": [
      "и просто используйте это видео, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      44.559474,
      46.274911
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
      46.274911,
      56.904833
    ],
    "en": [
      "the first problem is that R 2 and R 3 aren't receiving a rip route to 192.168.1.0 / 24 from R 1"
    ],
    "ru": [
      "первая проблема заключается в том, что R 2 и R 3 не получают RIP-маршрут на 192.168.1.0 / 24 от R 1"
    ]
  },
  {
    "time": [
      56.904833,
      60.379145
    ],
    "en": [
      "first let's confirm the problem"
    ],
    "ru": [
      "сначала давайте подтвердим проблему"
    ]
  },
  {
    "time": [
      60.379145,
      68.006019
    ],
    "en": [
      "on r2 enable show IP rip database"
    ],
    "ru": [
      "на r2 включить показ базы данных рипов IP"
    ]
  },
  {
    "time": [
      68.006019,
      78.36158
    ],
    "en": [
      "we have a route to r3s inside Network 30.0.0.0 / 24 but not 2 192.168.1.1 /24"
    ],
    "ru": [
      "у нас есть маршрут к r3s внутри сети 30.0.0.0 / 24, но не к 2 192.168.1.1 / 24"
    ]
  },
  {
    "time": [
      78.36158,
      81.151725
    ],
    "en": [
      "let's check on r 3 too"
    ],
    "ru": [
      "давай проверим и r 3"
    ]
  },
  {
    "time": [
      81.151725,
      87.519641
    ],
    "en": [
      "enable show IP rip database"
    ],
    "ru": [
      "включить показ базы данных IP-рипов"
    ]
  },
  {
    "time": [
      87.519641,
      92.46966
    ],
    "en": [
      "there's r2's 192.168.2.0 / 24 network"
    ],
    "ru": [
      "есть сеть 192.168.2.0 / 24 r2"
    ]
  },
  {
    "time": [
      92.46966,
      96.643889
    ],
    "en": [
      "but not 192.168.1.0 / 24"
    ],
    "ru": [
      "но не 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      96.643889,
      101.03368
    ],
    "en": [
      "ok so R 2 and R 3 are exchanging routes with each other"
    ],
    "ru": [
      "Хорошо, так что R 2 и R 3 обмениваются маршрутами друг с другом"
    ]
  },
  {
    "time": [
      101.03368,
      103.942159
    ],
    "en": [
      "so there are probably no issues with R 2 and R 3"
    ],
    "ru": [
      "так что, вероятно, проблем с R 2 и R 3 нет"
    ]
  },
  {
    "time": [
      103.942159,
      106.154367
    ],
    "en": [
      "let's take a look at R 1"
    ],
    "ru": [
      "давайте посмотрим на R 1"
    ]
  },
  {
    "time": [
      106.154367,
      112.5427
    ],
    "en": [
      "enable show IP rip database"
    ],
    "ru": [
      "включить показ базы данных IP-рипов"
    ]
  },
  {
    "time": [
      112.5427,
      123.240825
    ],
    "en": [
      "this is interesting R 1 is receiving routes from R 2 and R 3 but not advertising a route to 192.168.1.0 / 24 to them"
    ],
    "ru": [
      "это интересно, R 1 получает маршруты от R 2 и R 3, но не объявляет им маршрут к 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      123.240825,
      126.3637
    ],
    "en": [
      "there is one very likely cause"
    ],
    "ru": [
      "есть одна очень вероятная причина"
    ]
  },
  {
    "time": [
      126.3637,
      128.955575
    ],
    "en": [
      "show IP protocols"
    ],
    "ru": [
      "показать IP-протоколы"
    ]
  },
  {
    "time": [
      128.955575,
      133.569845
    ],
    "en": [
      "this command is useful for getting information about routing protocols such as rip"
    ],
    "ru": [
      "эта команда полезна для получения информации о протоколах маршрутизации, таких как rip"
    ]
  },
  {
    "time": [
      133.569845,
      135.027408
    ],
    "en": [
      "running on the router"
    ],
    "ru": [
      "работает на роутере"
    ]
  },
  {
    "time": [
      135.027408,
      137.159387
    ],
    "en": [
      "and here is our issue"
    ],
    "ru": [
      "и вот наша проблема"
    ]
  },
  {
    "time": [
      137.159387,
      141.253469
    ],
    "en": [
      "passive interfaces Gigabit Ethernet 0-1"
    ],
    "ru": [
      "пассивные интерфейсы Gigabit Ethernet 0-1"
    ]
  },
  {
    "time": [
      141.253469,
      147.090802
    ],
    "en": [
      "a passive interface we'll listen for advertisements but will not advertise any routes"
    ],
    "ru": [
      "пассивный интерфейс, который мы будем слушать на предмет рекламы, но не будем объявлять какие-либо маршруты"
    ]
  },
  {
    "time": [
      147.090802,
      163.771611
    ],
    "en": [
      "let's fix that conf t router rip no passive interface G 0 1 2 make a passive interface you just use the passive interface command under router rip configuration mode"
    ],
    "ru": [
      "давайте исправим это conf t router rip no passive interface G 0 1 2 сделайте пассивный интерфейс, вы просто используете команду passive interface в режиме конфигурации router rip"
    ]
  },
  {
    "time": [
      163.771611,
      167.360173
    ],
    "en": [
      "and of course to remove it just use no in front of the command"
    ],
    "ru": [
      "и, конечно, чтобы удалить его, просто используйте no перед командой"
    ]
  },
  {
    "time": [
      167.360173,
      178.467152
    ],
    "en": [
      "exit so as long as there are no other problems here r2 and r3 should have a route to 192.168.1.0 / 24 now"
    ],
    "ru": [
      "выйдите, если здесь нет других проблем, r2 и r3 теперь должны иметь маршрут к 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      178.467152,
      181.280922
    ],
    "en": [
      "I'll check on r2"
    ],
    "ru": [
      "Проверю на r2"
    ]
  },
  {
    "time": [
      181.280922,
      185.445109
    ],
    "en": [
      "show IP rip database"
    ],
    "ru": [
      "показать базу данных рипов IP"
    ]
  },
  {
    "time": [
      185.445109,
      195.812651
    ],
    "en": [
      "there it is and on r3 show IP rip database"
    ],
    "ru": [
      "вот и на r3 показать базу данных рипов IP"
    ]
  },
  {
    "time": [
      195.812651,
      198.682838
    ],
    "en": [
      "ok problem one is solved"
    ],
    "ru": [
      "хорошо, проблема решена"
    ]
  },
  {
    "time": [
      198.682838,
      205.837504
    ],
    "en": [
      "the next issue is that hosts in the 192.168.2.0 / 24 network"
    ],
    "ru": [
      "следующая проблема заключается в том, что хосты в сети 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      205.837504,
      209.045358
    ],
    "en": [
      "aren't receiving IP addresses via DHCP"
    ],
    "ru": [
      "не получают IP-адреса через DHCP"
    ]
  },
  {
    "time": [
      209.045358,
      210.935608
    ],
    "en": [
      "let's confirm"
    ],
    "ru": [
      "давай подтвердим"
    ]
  },
  {
    "time": [
      210.935608,
      213.199649
    ],
    "en": [
      "I'll go on PC 4"
    ],
    "ru": [
      "Я пойду на ПК 4"
    ]
  },
  {
    "time": [
      213.199649,
      225.088649
    ],
    "en": [
      "IP config it has an IP address in the 169.254 range an automatic private IP address"
    ],
    "ru": [
      "IP config у него есть IP-адрес в диапазоне 169.254 автоматический частный IP-адрес"
    ]
  },
  {
    "time": [
      225.088649,
      227.868503
    ],
    "en": [
      "let's try our release and renew"
    ],
    "ru": [
      "давайте попробуем наш выпуск и продлим"
    ]
  },
  {
    "time": [
      227.868503,
      233.104336
    ],
    "en": [
      "IP config / release IP config / renew"
    ],
    "ru": [
      "Конфигурация IP / выпуск Конфигурация IP / обновление"
    ]
  },
  {
    "time": [
      233.104336,
      238.180149
    ],
    "en": [
      "it doesn't work"
    ],
    "ru": [
      "это не работает"
    ]
  },
  {
    "time": [
      238.180149,
      243.729398
    ],
    "en": [
      "pc 5 pc6 probably have addresses in the same 169.254 range"
    ],
    "ru": [
      "pc 5 pc6 вероятно имеет адреса в том же диапазоне 169.254"
    ]
  },
  {
    "time": [
      243.729398,
      246.359356
    ],
    "en": [
      "let's check pc 5"
    ],
    "ru": [
      "давай проверим пк 5"
    ]
  },
  {
    "time": [
      246.359356,
      261.534335
    ],
    "en": [
      "IP config yep as expected and pc 6 IP config again an automatic private IP address"
    ],
    "ru": [
      "IP-конфигурация да, как и ожидалось, и IP-конфигурация ПК 6 снова автоматический частный IP-адрес"
    ]
  },
  {
    "time": [
      261.534335,
      263.543
    ],
    "en": [
      "so what could be the problem"
    ],
    "ru": [
      "так в чем может быть проблема"
    ]
  },
  {
    "time": [
      263.543,
      271.085
    ],
    "en": [
      "because the DHCP server is not directly connected to 192.168.2.0 / 24 network"
    ],
    "ru": [
      "потому что DHCP-сервер не подключен напрямую к сети 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      271.085,
      275.009937
    ],
    "en": [
      "there could be a problem with the DHCP relay agent R 2"
    ],
    "ru": [
      "могла быть проблема с агентом ретрансляции DHCP R 2"
    ]
  },
  {
    "time": [
      275.009937,
      276.564707
    ],
    "en": [
      "let's check their"
    ],
    "ru": [
      "давайте проверим их"
    ]
  },
  {
    "time": [
      276.564707,
      281.949228
    ],
    "en": [
      "show IP interface G 0 0"
    ],
    "ru": [
      "показать IP-интерфейс G 0 0"
    ]
  },
  {
    "time": [
      281.949228,
      287.798395
    ],
    "en": [
      "helper address is not set"
    ],
    "ru": [
      "адрес помощника не установлен"
    ]
  },
  {
    "time": [
      287.798395,
      289.099332
    ],
    "en": [
      "there's our problem"
    ],
    "ru": [
      "вот наша проблема"
    ]
  },
  {
    "time": [
      289.099332,
      290.393707
    ],
    "en": [
      "let's fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      290.393707,
      300.149207
    ],
    "en": [
      "conf t interface G 0 0 IP helper address 1.2.3.1 exit"
    ],
    "ru": [
      "conf t interface G 0 0 IP-адрес помощника 1.2.3.1 exit"
    ]
  },
  {
    "time": [
      300.149207,
      303.42804
    ],
    "en": [
      "let's see if we can ping the helper address"
    ],
    "ru": [
      "посмотрим, сможем ли мы пропинговать адрес помощника"
    ]
  },
  {
    "time": [
      303.42804,
      306.751998
    ],
    "en": [
      "do ping one 1.2.3.1"
    ],
    "ru": [
      "сделать пинг один 1.2.3.1"
    ]
  },
  {
    "time": [
      306.751998,
      313.408685
    ],
    "en": [
      "okay we can reach it so DHCP should work now"
    ],
    "ru": [
      "хорошо, мы можем добраться до него, поэтому DHCP должен работать сейчас"
    ]
  },
  {
    "time": [
      313.408685,
      322.777017
    ],
    "en": [
      "let's try on PC 4 IP config / release ipconfig / renew"
    ],
    "ru": [
      "давайте попробуем на ПК 4 IP config / release ipconfig / Renew"
    ]
  },
  {
    "time": [
      322.777017,
      326.304038
    ],
    "en": [
      "okay it works"
    ],
    "ru": [
      "хорошо, это работает"
    ]
  },
  {
    "time": [
      326.304038,
      329.611163
    ],
    "en": [
      "let's go to the next problem"
    ],
    "ru": [
      "перейдем к следующей проблеме"
    ]
  },
  {
    "time": [
      329.611163,
      332.885413
    ],
    "en": [
      "Pat doesn't work on r1"
    ],
    "ru": [
      "Пэт не работает на r1"
    ]
  },
  {
    "time": [
      332.885413,
      335.515329
    ],
    "en": [
      "first let's check the problem"
    ],
    "ru": [
      "сначала давайте проверим проблему"
    ]
  },
  {
    "time": [
      335.515329,
      341.168954
    ],
    "en": [
      "I'll ping from pc1 to server 1 and then check the translations on r1"
    ],
    "ru": [
      "Я пингую с pc1 на сервер 1, а затем проверю переводы на r1"
    ]
  },
  {
    "time": [
      341.168954,
      350.506683
    ],
    "en": [
      "ping 30.0.0.100"
    ],
    "ru": [
      "пинг 30.0.0.100"
    ]
  },
  {
    "time": [
      350.506683,
      354.173037
    ],
    "en": [
      "ok we reached server 1"
    ],
    "ru": [
      "хорошо, мы достигли сервера 1"
    ]
  },
  {
    "time": [
      354.173037,
      356.911412
    ],
    "en": [
      "now let's go on r1 and check the translations"
    ],
    "ru": [
      "теперь пойдем на r1 и проверим переводы"
    ]
  },
  {
    "time": [
      356.911412,
      361.637558
    ],
    "en": [
      "do show IP nat translations"
    ],
    "ru": [
      "показывать переводы IP nat"
    ]
  },
  {
    "time": [
      361.637558,
      364.109578
    ],
    "en": [
      "nothing appears"
    ],
    "ru": [
      "ничего не появляется"
    ]
  },
  {
    "time": [
      364.109578,
      366.612119
    ],
    "en": [
      "so let's find the problem"
    ],
    "ru": [
      "так давай найдем проблему"
    ]
  },
  {
    "time": [
      366.612119,
      369.969619
    ],
    "en": [
      "do show IP nat statistics"
    ],
    "ru": [
      "показывать статистику IP nat"
    ]
  },
  {
    "time": [
      369.969619,
      375.383848
    ],
    "en": [
      "our inside and outside interfaces are correct so that's not a problem"
    ],
    "ru": [
      "наши внутренние и внешние интерфейсы правильные, так что это не проблема"
    ]
  },
  {
    "time": [
      375.383848,
      380.035306
    ],
    "en": [
      "do show run pipe include net"
    ],
    "ru": [
      "показать пробег трубы включить сеть"
    ]
  },
  {
    "time": [
      380.035306,
      386.836056
    ],
    "en": [
      "IP nat inside source list 2 interface g0 1 overload"
    ],
    "ru": [
      "IP nat внутри списка источников 2 интерфейс g0 1 перегрузка"
    ]
  },
  {
    "time": [
      386.836056,
      389.751576
    ],
    "en": [
      "let's check this access list 2"
    ],
    "ru": [
      "давайте проверим этот список доступа 2"
    ]
  },
  {
    "time": [
      389.751576,
      397.47343
    ],
    "en": [
      "do show access lists there's our problem there is no access list 2"
    ],
    "ru": [
      "показывать списки доступа, вот наша проблема, нет списка доступа 2"
    ]
  },
  {
    "time": [
      397.47343,
      399.401867
    ],
    "en": [
      "it's access list 1"
    ],
    "ru": [
      "это список доступа 1"
    ]
  },
  {
    "time": [
      399.401867,
      402.681867
    ],
    "en": [
      "let's fix the net statement"
    ],
    "ru": [
      "давайте исправим чистую выписку"
    ]
  },
  {
    "time": [
      402.681867,
      411.026554
    ],
    "en": [
      "I'll copy it and paste it here and use know to cancel it out"
    ],
    "ru": [
      "Я скопирую его и вставлю сюда и воспользуюсь знать, чтобы отменить его"
    ]
  },
  {
    "time": [
      411.026554,
      416.173219
    ],
    "en": [
      "now I'll rewrite it to use access list 1 instead of access list 2"
    ],
    "ru": [
      "теперь я перепишу его, чтобы использовать список доступа 1 вместо списка доступа 2"
    ]
  },
  {
    "time": [
      416.173219,
      424.938406
    ],
    "en": [
      "IP NAT inside source list one interface g0 1 overload"
    ],
    "ru": [
      "IP NAT внутри списка источников один интерфейс g0 1 перегрузка"
    ]
  },
  {
    "time": [
      424.938406,
      428.315072
    ],
    "en": [
      "okay now let's try again"
    ],
    "ru": [
      "хорошо, давай попробуем еще раз"
    ]
  },
  {
    "time": [
      428.315072,
      430.289551
    ],
    "en": [
      "I'll ping from pc1"
    ],
    "ru": [
      "Я пингую с пк1"
    ]
  },
  {
    "time": [
      430.289551,
      439.942467
    ],
    "en": [
      "ping 30.0.0.100 and check again on r1"
    ],
    "ru": [
      "ping 30.0.0.100 и снова проверьте на r1"
    ]
  },
  {
    "time": [
      439.942467,
      445.2598
    ],
    "en": [
      "do show IP NAT translations"
    ],
    "ru": [
      "показывать переводы IP NAT"
    ]
  },
  {
    "time": [
      445.2598,
      449.679904
    ],
    "en": [
      "there we go r1 is now translating PC ones address"
    ],
    "ru": [
      "Итак, r1 сейчас транслирует адреса ПК"
    ]
  },
  {
    "time": [
      449.679904,
      461.422258
    ],
    "en": [
      "the next issue is that hosts in the 192.168.1.0 / 24 network aren't receiving a DNS server via DHCP"
    ],
    "ru": [
      "следующая проблема заключается в том, что хосты в сети 192.168.1.0 / 24 не получают DNS-сервер через DHCP."
    ]
  },
  {
    "time": [
      461.422258,
      463.414904
    ],
    "en": [
      "let's check the issue"
    ],
    "ru": [
      "давайте проверим проблему"
    ]
  },
  {
    "time": [
      463.414904,
      469.303299
    ],
    "en": [
      "on PC one ipconfig /all"
    ],
    "ru": [
      "на ПК один ipconfig / все"
    ]
  },
  {
    "time": [
      469.303299,
      472.775257
    ],
    "en": [
      "indeed there is no DNS server here"
    ],
    "ru": [
      "действительно, здесь нет DNS-сервера"
    ]
  },
  {
    "time": [
      472.775257,
      478.326153
    ],
    "en": [
      "now the most likely issue is with the DHCP pool on r1 so let's check"
    ],
    "ru": [
      "теперь наиболее вероятная проблема связана с пулом DHCP на r1, поэтому давайте проверим"
    ]
  },
  {
    "time": [
      478.326153,
      490.793923
    ],
    "en": [
      "do show run indeed there is no DNS server configured in the DHCP pool"
    ],
    "ru": [
      "действительно показывать запуск, в пуле DHCP не настроен DNS-сервер"
    ]
  },
  {
    "time": [
      490.793923,
      492.487361
    ],
    "en": [
      "I'll fix that"
    ],
    "ru": [
      "Я исправлю это"
    ]
  },
  {
    "time": [
      492.487361,
      503.579819
    ],
    "en": [
      "IP dhcp pool 1 pool DNS server 30.0.0.100 exit"
    ],
    "ru": [
      "IP dhcp pool 1 pool DNS server 30.0.0.100 exit"
    ]
  },
  {
    "time": [
      503.579819,
      505.946382
    ],
    "en": [
      "ok let's go to pc 1"
    ],
    "ru": [
      "хорошо, пойдем на ПК 1"
    ]
  },
  {
    "time": [
      505.946382,
      514.082736
    ],
    "en": [
      "IP config / release ipconfig / renew"
    ],
    "ru": [
      "Конфигурация IP / выпуск ipconfig / обновление"
    ]
  },
  {
    "time": [
      514.082736,
      517.450736
    ],
    "en": [
      "ok the DNS server appears"
    ],
    "ru": [
      "хорошо, появляется DNS-сервер"
    ]
  },
  {
    "time": [
      517.450736,
      521.022194
    ],
    "en": [
      "let's try to ping the hostname to server 1"
    ],
    "ru": [
      "давайте попробуем пинговать имя хоста на сервер 1"
    ]
  },
  {
    "time": [
      521.022194,
      524.183465
    ],
    "en": [
      "ping server 1"
    ],
    "ru": [
      "пинг сервер 1"
    ]
  },
  {
    "time": [
      524.183465,
      534.678194
    ],
    "en": [
      "there we go DNS is functioning properly"
    ],
    "ru": [
      "Итак, DNS работает нормально"
    ]
  },
  {
    "time": [
      534.678194,
      541.664923
    ],
    "en": [
      "the final issue is that r1 cannot be connected to via SSH"
    ],
    "ru": [
      "последняя проблема заключается в том, что r1 не может быть подключен через SSH"
    ]
  },
  {
    "time": [
      541.664923,
      549.840548
    ],
    "en": [
      "I'll try again from pc1 the username is Cisco and password CCNA same as the previous lab"
    ],
    "ru": [
      "Я попробую еще раз с pc1, имя пользователя - Cisco, а пароль CCNA такой же, как и в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      549.840548,
      558.308527
    ],
    "en": [
      "SSH - el cisco 192.168.1.1"
    ],
    "ru": [
      "SSH - el cisco 192.168.1.1"
    ]
  },
  {
    "time": [
      558.308527,
      561.536485
    ],
    "en": [
      "indeed it doesn't work"
    ],
    "ru": [
      "действительно это не работает"
    ]
  },
  {
    "time": [
      561.536485,
      563.303547
    ],
    "en": [
      "let's investigate on r1"
    ],
    "ru": [
      "давайте исследуем на r1"
    ]
  },
  {
    "time": [
      563.303547,
      569.846547
    ],
    "en": [
      "do show run pipe begin line"
    ],
    "ru": [
      "показывать начальную строку беговой трубы"
    ]
  },
  {
    "time": [
      569.846547,
      573.265276
    ],
    "en": [
      "look at the vty line configurations"
    ],
    "ru": [
      "посмотрите на конфигурации линии VTY"
    ]
  },
  {
    "time": [
      573.265276,
      575.944067
    ],
    "en": [
      "can you spot the misc configuration"
    ],
    "ru": [
      "Вы можете заметить другую конфигурацию?"
    ]
  },
  {
    "time": [
      575.944067,
      579.618692
    ],
    "en": [
      "transport input telnet is set"
    ],
    "ru": [
      "транспортный ввод telnet установлен"
    ]
  },
  {
    "time": [
      579.618692,
      584.271942
    ],
    "en": [
      "this restricts vty line access to telnet so ssh doesn't work"
    ],
    "ru": [
      "это ограничивает доступ к линии vty для telnet, поэтому ssh не работает"
    ]
  },
  {
    "time": [
      584.271942,
      586.028067
    ],
    "en": [
      "let's fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      586.028067,
      593.055212
    ],
    "en": [
      "line vty 0 15 transport input ssh"
    ],
    "ru": [
      "строка vty 0 15 транспортный ввод ssh"
    ]
  },
  {
    "time": [
      593.055212,
      597.041982
    ],
    "en": [
      "ok let's try one more time from pc1"
    ],
    "ru": [
      "хорошо, давайте попробуем еще раз с pc1"
    ]
  },
  {
    "time": [
      597.041982,
      605.922836
    ],
    "en": [
      "ssh - el cisco 192.168.1.1"
    ],
    "ru": [
      "ssh - el cisco 192.168.1.1"
    ]
  },
  {
    "time": [
      605.922836,
      610.243377
    ],
    "en": [
      "there we go password of CCNA and we're in"
    ],
    "ru": [
      "вот и пароль CCNA, и мы в"
    ]
  },
  {
    "time": [
      610.243377,
      618.171064
    ],
    "en": [
      "in this lab we did some troubleshooting of various problems involving technologies we configured in previous labs"
    ],
    "ru": [
      "в этой лабораторной работе мы провели поиск и устранение различных проблем, связанных с технологиями, которые мы настроили в предыдущих лабораторных работах."
    ]
  },
  {
    "time": [
      618.171064,
      622.119814
    ],
    "en": [
      "this was the final lab of my icnd1 series"
    ],
    "ru": [
      "это была последняя лаборатория моей серии icnd1"
    ]
  },
  {
    "time": [
      622.119814,
      625.813772
    ],
    "en": [
      "I hope these labs have helped you practice your skills and prepare for the exam"
    ],
    "ru": [
      "Надеюсь, эти лабораторные работы помогли вам отработать свои навыки и подготовиться к экзамену."
    ]
  },
  {
    "time": [
      625.813772,
      629.480084
    ],
    "en": [
      "I will now be getting to work on the icnd2 labs"
    ],
    "ru": [
      "Теперь я приступлю к работе над лабораториями icnd2"
    ]
  },
  {
    "time": [
      629.480084,
      631.407938
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
      631.407938,
      639.334834
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
      639.334834,
      643.951791
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
      643.951791,
      648.94102
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
      648.94102,
      656.049749
    ],
    "en": [
      "if you want to support my channel I accept a Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      656.049749,
      664.204707
    ],
    "en": [
      "I am also a brave verified publisher and accept a bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также являюсь храбрым проверенным издателем и принимаю пожертвования в виде биты или токенов основного внимания в храбром браузере."
    ]
  },
  {
    "time": [
      664.204707,
      664.204707
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
      664.204707,
      664.204707
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
      664.204707,
      664.204707
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]