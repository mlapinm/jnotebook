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
      "description this lab is the second of"
    ],
    "ru": [
      "описание эта лаборатория - вторая из"
    ]
  },
  {
    "time": [
      18.0,
      20.0
    ],
    "en": [
      "our labs focusing on Matt network"
    ],
    "ru": [
      "наши лаборатории сосредоточены на сети Matt"
    ]
  },
  {
    "time": [
      20.0,
      24.0
    ],
    "en": [
      "address translation this time we will"
    ],
    "ru": [
      "перевод адресов на этот раз мы"
    ]
  },
  {
    "time": [
      24.0,
      27.0
    ],
    "en": [
      "configure dynamic NAT unlike static map"
    ],
    "ru": [
      "настроить динамический NAT в отличие от статической карты"
    ]
  },
  {
    "time": [
      27.0,
      29.0
    ],
    "en": [
      "which creates a one-to-one translation"
    ],
    "ru": [
      "который создает однозначный перевод"
    ]
  },
  {
    "time": [
      29.0,
      31.0
    ],
    "en": [
      "from an inside address to an outside"
    ],
    "ru": [
      "от внутреннего адреса к внешнему"
    ]
  },
  {
    "time": [
      31.0,
      35.0
    ],
    "en": [
      "address dynamic NAT dynamically assigns"
    ],
    "ru": [
      "адрес динамический NAT динамически назначается"
    ]
  },
  {
    "time": [
      35.0,
      37.0
    ],
    "en": [
      "addresses as needed from a pool of"
    ],
    "ru": [
      "адресов по мере необходимости из пула"
    ]
  },
  {
    "time": [
      37.0,
      39.0
    ],
    "en": [
      "outside addresses that you configure"
    ],
    "ru": [
      "внешние адреса, которые вы настраиваете"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "beforehand this is much more efficient"
    ],
    "ru": [
      "заранее это намного эффективнее"
    ]
  },
  {
    "time": [
      42.0,
      46.0
    ],
    "en": [
      "than static NAT in this lab we will use"
    ],
    "ru": [
      "чем статический NAT в этой лабораторной работе мы будем использовать"
    ]
  },
  {
    "time": [
      46.0,
      48.0
    ],
    "en": [
      "dynamic map to translate private IP"
    ],
    "ru": [
      "динамическая карта для перевода частного IP"
    ]
  },
  {
    "time": [
      48.0,
      52.0
    ],
    "en": [
      "addresses in the 192.168.1.0 / 24"
    ],
    "ru": [
      "адреса в 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      52.0,
      55.0
    ],
    "en": [
      "network to public IP addresses in the"
    ],
    "ru": [
      "сети на общедоступные IP-адреса в"
    ]
  },
  {
    "time": [
      55.0,
      61.0
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
      55.0,
      61.0
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
      61.0,
      63.0
    ],
    "en": [
      "same topology as the previous lab and"
    ],
    "ru": [
      "та же топология, что и в предыдущей лабораторной работе, и"
    ]
  },
  {
    "time": [
      63.0,
      63.0
    ],
    "en": [
      "once again"
    ],
    "ru": [
      "снова"
    ]
  },
  {
    "time": [
      63.0,
      66.0
    ],
    "en": [
      "ripp has been pre-configured so that all"
    ],
    "ru": [
      "ripp был предварительно настроен так, что все"
    ]
  },
  {
    "time": [
      66.0,
      67.0
    ],
    "en": [
      "points in the network should be"
    ],
    "ru": [
      "точки в сети должны быть"
    ]
  },
  {
    "time": [
      67.0,
      70.0
    ],
    "en": [
      "reachable once again however I have"
    ],
    "ru": [
      "достижимо еще раз, но у меня есть"
    ]
  },
  {
    "time": [
      70.0,
      72.0
    ],
    "en": [
      "configured ACLs on the routers blocking"
    ],
    "ru": [
      "настроенные ACL на блокировку роутеров"
    ]
  },
  {
    "time": [
      72.0,
      74.0
    ],
    "en": [
      "private addresses from being routed over"
    ],
    "ru": [
      "частные адреса от маршрутизации"
    ]
  },
  {
    "time": [
      74.0,
      76.0
    ],
    "en": [
      "the serial connection between them which"
    ],
    "ru": [
      "последовательное соединение между ними, которое"
    ]
  },
  {
    "time": [
      76.0,
      80.0
    ],
    "en": [
      "simulates the Internet let's ping from"
    ],
    "ru": [
      "имитирует интернет, давайте пинговать от"
    ]
  },
  {
    "time": [
      80.0,
      82.0
    ],
    "en": [
      "pc-12 server one just to confirm that PC"
    ],
    "ru": [
      "pc-12 server one только для подтверждения того, что ПК"
    ]
  },
  {
    "time": [
      82.0,
      87.0
    ],
    "en": [
      "one cannot reach server one ping one dot"
    ],
    "ru": [
      "невозможно связаться с сервером один пинг одна точка"
    ]
  },
  {
    "time": [
      87.0,
      94.0
    ],
    "en": [
      "one dot one dot 100"
    ],
    "ru": [
      "одна точка одна точка 100"
    ]
  },
  {
    "time": [
      94.0,
      99.0
    ],
    "en": [
      "as expected the pink fails"
    ],
    "ru": [
      "как и ожидалось розовый провалился"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "so let's configure dynamic NAT on our"
    ],
    "ru": [
      "так что давайте настроим динамический NAT на нашем"
    ]
  },
  {
    "time": [
      102.0,
      106.0
    ],
    "en": [
      "one first I'll configure that inside and"
    ],
    "ru": [
      "сначала я настрою это внутри и"
    ]
  },
  {
    "time": [
      106.0,
      113.0
    ],
    "en": [
      "outside interfaces enable Conti"
    ],
    "ru": [
      "внешние интерфейсы позволяют Conti"
    ]
  },
  {
    "time": [
      113.0,
      120.0
    ],
    "en": [
      "interface g00 IP NAT inside interface s"
    ],
    "ru": [
      "интерфейс g00 IP NAT внутри интерфейса s"
    ]
  },
  {
    "time": [
      120.0,
      126.0
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
      120.0,
      126.0
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
      126.0,
      129.0
    ],
    "en": [
      "involves a few extra steps beyond static"
    ],
    "ru": [
      "включает в себя несколько дополнительных шагов помимо статического"
    ]
  },
  {
    "time": [
      129.0,
      132.0
    ],
    "en": [
      "NAT we have to create an ACL which we"
    ],
    "ru": [
      "NAT мы должны создать ACL, который мы"
    ]
  },
  {
    "time": [
      132.0,
      134.0
    ],
    "en": [
      "use to identify the inside addresses"
    ],
    "ru": [
      "использовать для определения внутренних адресов"
    ]
  },
  {
    "time": [
      134.0,
      136.0
    ],
    "en": [
      "that we will translate we also have to"
    ],
    "ru": [
      "что мы будем переводить, мы также должны"
    ]
  },
  {
    "time": [
      136.0,
      139.0
    ],
    "en": [
      "create an app pool which is the range of"
    ],
    "ru": [
      "создать пул приложений, который представляет собой диапазон"
    ]
  },
  {
    "time": [
      139.0,
      141.0
    ],
    "en": [
      "outside addresses we will translate our"
    ],
    "ru": [
      "внешние адреса мы переведем наши"
    ]
  },
  {
    "time": [
      141.0,
      144.0
    ],
    "en": [
      "inside addresses to first let's create"
    ],
    "ru": [
      "внутренние адреса, чтобы сначала создать"
    ]
  },
  {
    "time": [
      144.0,
      148.0
    ],
    "en": [
      "the access list keep in mind this use of"
    ],
    "ru": [
      "список доступа помните об использовании"
    ]
  },
  {
    "time": [
      148.0,
      150.0
    ],
    "en": [
      "an ACL is different than how we"
    ],
    "ru": [
      "ACL отличается от того, как мы"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "previously used it before we used ACLs"
    ],
    "ru": [
      "ранее использовали его, прежде чем мы использовали ACL"
    ]
  },
  {
    "time": [
      153.0,
      156.0
    ],
    "en": [
      "to block or allow traffic from entering"
    ],
    "ru": [
      "чтобы заблокировать или разрешить вход трафика"
    ]
  },
  {
    "time": [
      156.0,
      159.0
    ],
    "en": [
      "or exiting an interface this time"
    ],
    "ru": [
      "или выйти из интерфейса на этот раз"
    ]
  },
  {
    "time": [
      159.0,
      162.0
    ],
    "en": [
      "however we will use an ACL to identify"
    ],
    "ru": [
      "однако мы будем использовать ACL для идентификации"
    ]
  },
  {
    "time": [
      162.0,
      164.0
    ],
    "en": [
      "which traffic we want to translate"
    ],
    "ru": [
      "какой трафик мы хотим перевести"
    ]
  },
  {
    "time": [
      164.0,
      167.0
    ],
    "en": [
      "traffic which is permitted by the ACL"
    ],
    "ru": [
      "трафик, разрешенный ACL"
    ]
  },
  {
    "time": [
      167.0,
      170.0
    ],
    "en": [
      "will be translated traffic which is"
    ],
    "ru": [
      "будет переведен трафик, который"
    ]
  },
  {
    "time": [
      170.0,
      173.0
    ],
    "en": [
      "denied by the ACL won't be blocked it"
    ],
    "ru": [
      "отклонено ACL не будет заблокировано"
    ]
  },
  {
    "time": [
      173.0,
      176.0
    ],
    "en": [
      "simply won't be translated so let's"
    ],
    "ru": [
      "просто не будет переведено так давайте"
    ]
  },
  {
    "time": [
      176.0,
      179.0
    ],
    "en": [
      "create a standard ACL which permits the"
    ],
    "ru": [
      "создать стандартный ACL, который позволяет"
    ]
  },
  {
    "time": [
      179.0,
      185.0
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
      179.0,
      185.0
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
      185.0,
      189.0
    ],
    "en": [
      "permit 192.168.1.0"
    ],
    "ru": [
      "разрешение 192.168.1.0"
    ]
  },
  {
    "time": [
      189.0,
      194.0
    ],
    "en": [
      "oh-oh-oh 255 that's it the implicit deny"
    ],
    "ru": [
      "о-о-о 255 вот и неявное отрицание"
    ]
  },
  {
    "time": [
      194.0,
      197.0
    ],
    "en": [
      "any at the end of the ACL will prevent"
    ],
    "ru": [
      "любой в конце ACL предотвратит"
    ]
  },
  {
    "time": [
      197.0,
      201.0
    ],
    "en": [
      "traffic from outside of the 192.168.1.0"
    ],
    "ru": [
      "трафик из-за пределов 192.168.1.0"
    ]
  },
  {
    "time": [
      201.0,
      205.0
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
      201.0,
      205.0
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
      205.0,
      209.0
    ],
    "en": [
      "let's create the NAT pool to do so use"
    ],
    "ru": [
      "давайте создадим пул NAT, чтобы использовать"
    ]
  },
  {
    "time": [
      209.0,
      213.0
    ],
    "en": [
      "this command IP NAT pool followed by the"
    ],
    "ru": [
      "эта команда IP NAT pool, за которой следует"
    ]
  },
  {
    "time": [
      213.0,
      218.0
    ],
    "en": [
      "pool name I'll use pool 1 then we enter"
    ],
    "ru": [
      "имя пула Я буду использовать пул 1, затем мы вводим"
    ]
  },
  {
    "time": [
      218.0,
      220.0
    ],
    "en": [
      "the first address in the range of"
    ],
    "ru": [
      "первый адрес в диапазоне"
    ]
  },
  {
    "time": [
      220.0,
      221.0
    ],
    "en": [
      "addresses we want to include in this"
    ],
    "ru": [
      "адреса, которые мы хотим включить в это"
    ]
  },
  {
    "time": [
      221.0,
      226.0
    ],
    "en": [
      "pool which is 1 2 3 10 according to our"
    ],
    "ru": [
      "бассейн, который составляет 1 2 3 10 по нашему"
    ]
  },
  {
    "time": [
      226.0,
      227.0
    ],
    "en": [
      "instructions"
    ],
    "ru": [
      "инструкции"
    ]
  },
  {
    "time": [
      227.0,
      229.0
    ],
    "en": [
      "next we put the last address in the"
    ],
    "ru": [
      "затем мы помещаем последний адрес в"
    ]
  },
  {
    "time": [
      229.0,
      234.0
    ],
    "en": [
      "range 1 to 320 X twe type netmask"
    ],
    "ru": [
      "диапазон от 1 до 320 X twe type netmask"
    ]
  },
  {
    "time": [
      234.0,
      237.0
    ],
    "en": [
      "followed by the subnet mask which is"
    ],
    "ru": [
      "за которым следует маска подсети, которая"
    ]
  },
  {
    "time": [
      237.0,
      240.0
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
      237.0,
      240.0
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
      240.0,
      245.0
    ],
    "en": [
      "so our command is IP nat pool pool 1 1 2"
    ],
    "ru": [
      "Итак, наша команда - IP nat pool pool 1 1 2"
    ]
  },
  {
    "time": [
      245.0,
      254.0
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
      245.0,
      254.0
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
      254.0,
      258.0
    ],
    "en": [
      "our pool is now configured finally let's"
    ],
    "ru": [
      "наш пул теперь настроен, наконец, давайте"
    ]
  },
  {
    "time": [
      258.0,
      261.0
    ],
    "en": [
      "configure NAT itself the command starts"
    ],
    "ru": [
      "настроить сам NAT команда запускается"
    ]
  },
  {
    "time": [
      261.0,
      264.0
    ],
    "en": [
      "the same as with static NAT IP NAT"
    ],
    "ru": [
      "то же, что и со статическим NAT IP NAT"
    ]
  },
  {
    "time": [
      264.0,
      265.0
    ],
    "en": [
      "inside source"
    ],
    "ru": [
      "внутренний источник"
    ]
  },
  {
    "time": [
      265.0,
      269.0
    ],
    "en": [
      "now with static NAT we use IP NAT inside"
    ],
    "ru": [
      "теперь со статическим NAT мы используем IP NAT внутри"
    ]
  },
  {
    "time": [
      269.0,
      273.0
    ],
    "en": [
      "source static however for dynamic NAT we"
    ],
    "ru": [
      "источник статический, однако для динамического NAT мы"
    ]
  },
  {
    "time": [
      273.0,
      275.0
    ],
    "en": [
      "will use IP net inside source list"
    ],
    "ru": [
      "будет использовать IP-сеть внутри списка источников"
    ]
  },
  {
    "time": [
      275.0,
      278.0
    ],
    "en": [
      "followed by the name or number of our"
    ],
    "ru": [
      "за которым следует имя или номер нашего"
    ]
  },
  {
    "time": [
      278.0,
      281.0
    ],
    "en": [
      "ACL which is 1 then pool followed by the"
    ],
    "ru": [
      "ACL, который равен 1, затем пул, за которым следует"
    ]
  },
  {
    "time": [
      281.0,
      284.0
    ],
    "en": [
      "pool name which is pool 1 so our command"
    ],
    "ru": [
      "имя пула, которое является пулом 1, поэтому наша команда"
    ]
  },
  {
    "time": [
      284.0,
      289.0
    ],
    "en": [
      "is IP net inside source list 1 pool pool"
    ],
    "ru": [
      "IP-сеть внутри пула пула списка источников 1"
    ]
  },
  {
    "time": [
      289.0,
      294.0
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
      289.0,
      294.0
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
      294.0,
      294.0
    ],
    "en": [
      "complete"
    ],
    "ru": [
      "полный"
    ]
  },
  {
    "time": [
      294.0,
      297.0
    ],
    "en": [
      "I'll go on each PC and quickly ping"
    ],
    "ru": [
      "Захожу на каждый комп и быстро пингую"
    ]
  },
  {
    "time": [
      297.0,
      300.0
    ],
    "en": [
      "server 1 then go on r1 to check the"
    ],
    "ru": [
      "сервер 1, затем перейдите на r1, чтобы проверить"
    ]
  },
  {
    "time": [
      300.0,
      307.0
    ],
    "en": [
      "translations on PC 1 first ping 1.1.1"
    ],
    "ru": [
      "переводы на ПК 1 первый пинг 1.1.1"
    ]
  },
  {
    "time": [
      307.0,
      314.0
    ],
    "en": [
      "dot 100"
    ],
    "ru": [
      "точка 100"
    ]
  },
  {
    "time": [
      314.0,
      317.0
    ],
    "en": [
      "okay next I'll go on PC to and ping"
    ],
    "ru": [
      "хорошо, дальше я пойду на компьютер и пингую"
    ]
  },
  {
    "time": [
      317.0,
      328.0
    ],
    "en": [
      "server one ping 1.1 1.1 hundred okay and"
    ],
    "ru": [
      "сервер один пинг 1.1 1.1 сотка окей и"
    ]
  },
  {
    "time": [
      328.0,
      333.0
    ],
    "en": [
      "next I'll go on PC three ping 1.1 1.1"
    ],
    "ru": [
      "дальше пойду на ПК три пинга 1.1 1.1"
    ]
  },
  {
    "time": [
      333.0,
      340.0
    ],
    "en": [
      "hundred okay now let's go on r1 to check"
    ],
    "ru": [
      "сто хорошо, теперь пойдем на r1, чтобы проверить"
    ]
  },
  {
    "time": [
      340.0,
      346.0
    ],
    "en": [
      "these translations exit to check the net"
    ],
    "ru": [
      "эти переводы выходят, чтобы проверить сеть"
    ]
  },
  {
    "time": [
      346.0,
      349.0
    ],
    "en": [
      "translations use this command show IP"
    ],
    "ru": [
      "переводы используют эту команду show IP"
    ]
  },
  {
    "time": [
      349.0,
      354.0
    ],
    "en": [
      "nak translations notice at the top the"
    ],
    "ru": [
      "уведомление nak translations вверху"
    ]
  },
  {
    "time": [
      354.0,
      358.0
    ],
    "en": [
      "terms inside global inside local outside"
    ],
    "ru": [
      "термины внутри глобальный внутри локальный снаружи"
    ]
  },
  {
    "time": [
      358.0,
      362.0
    ],
    "en": [
      "local outside global we want to focus on"
    ],
    "ru": [
      "локальный за пределами глобального, на котором мы хотим сосредоточиться"
    ]
  },
  {
    "time": [
      362.0,
      366.0
    ],
    "en": [
      "inside global and inside local inside"
    ],
    "ru": [
      "внутри глобально и внутри локально внутри"
    ]
  },
  {
    "time": [
      366.0,
      368.0
    ],
    "en": [
      "global is the Abbas's we translate it to"
    ],
    "ru": [
      "global - это слова Аббаса, на которые мы переводим"
    ]
  },
  {
    "time": [
      368.0,
      374.0
    ],
    "en": [
      "in the 12.30 / 24 subnet and inside"
    ],
    "ru": [
      "в подсети 12.30 / 24 и внутри"
    ]
  },
  {
    "time": [
      374.0,
      376.0
    ],
    "en": [
      "local is the original private IP address"
    ],
    "ru": [
      "local - это исходный частный IP-адрес"
    ]
  },
  {
    "time": [
      376.0,
      382.0
    ],
    "en": [
      "range in the 192.168.1.0 / 24 subnet"
    ],
    "ru": [
      "диапазон в подсети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      382.0,
      384.0
    ],
    "en": [
      "note that the number after the colon in"
    ],
    "ru": [
      "обратите внимание, что число после двоеточия в"
    ]
  },
  {
    "time": [
      384.0,
      386.0
    ],
    "en": [
      "these IP addresses indicates a port"
    ],
    "ru": [
      "эти IP-адреса указывают порт"
    ]
  },
  {
    "time": [
      386.0,
      393.0
    ],
    "en": [
      "number here is 192.168.1.1 pc 1 and"
    ],
    "ru": [
      "номер здесь 192.168.1.1 шт 1 и"
    ]
  },
  {
    "time": [
      393.0,
      397.0
    ],
    "en": [
      "address it was translated to here is"
    ],
    "ru": [
      "адрес, на который он был переведен вот"
    ]
  },
  {
    "time": [
      397.0,
      402.0
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
      397.0,
      402.0
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
      402.0,
      405.0
    ],
    "en": [
      "was translated to and here is"
    ],
    "ru": [
      "был переведен на и вот"
    ]
  },
  {
    "time": [
      405.0,
      407.0
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
      405.0,
      407.0
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
      409.0
    ],
    "en": [
      "pc 3 and the address it was translated"
    ],
    "ru": [
      "pc 3 и адрес, на котором он был переведен"
    ]
  },
  {
    "time": [
      409.0,
      413.0
    ],
    "en": [
      "to if you want to clear all of these"
    ],
    "ru": [
      "чтобы, если вы хотите очистить все эти"
    ]
  },
  {
    "time": [
      413.0,
      416.0
    ],
    "en": [
      "dynamic translations use this command"
    ],
    "ru": [
      "динамические переводы используют эту команду"
    ]
  },
  {
    "time": [
      416.0,
      420.0
    ],
    "en": [
      "clear IP neck translation followed by an"
    ],
    "ru": [
      "четкий перевод шеи IP с последующим"
    ]
  },
  {
    "time": [
      420.0,
      422.0
    ],
    "en": [
      "asterisk"
    ],
    "ru": [
      "звездочка"
    ]
  },
  {
    "time": [
      422.0,
      424.0
    ],
    "en": [
      "okay now let's do that show command one"
    ],
    "ru": [
      "Хорошо, теперь давайте сделаем эту команду show one"
    ]
  },
  {
    "time": [
      424.0,
      429.0
    ],
    "en": [
      "more time show IP NAT translations there"
    ],
    "ru": [
      "еще раз показать там переводы IP NAT"
    ]
  },
  {
    "time": [
      429.0,
      431.0
    ],
    "en": [
      "we go our translations are cleared"
    ],
    "ru": [
      "мы идем наши переводы очищены"
    ]
  },
  {
    "time": [
      431.0,
      434.0
    ],
    "en": [
      "we have successfully configured dynamic"
    ],
    "ru": [
      "мы успешно настроили динамический"
    ]
  },
  {
    "time": [
      434.0,
      440.0
    ],
    "en": [
      "NAT that's all for this lab thank you"
    ],
    "ru": [
      "NAT вот и все для этой лаборатории спасибо"
    ]
  },
  {
    "time": [
      440.0,
      443.0
    ],
    "en": [
      "for watching I hope this lab and video"
    ],
    "ru": [
      "за просмотр, надеюсь, эта лабораторная работа и видео"
    ]
  },
  {
    "time": [
      443.0,
      444.0
    ],
    "en": [
      "have been helpful for you please"
    ],
    "ru": [
      "были полезны для вас, пожалуйста"
    ]
  },
  {
    "time": [
      444.0,
      446.0
    ],
    "en": [
      "subscribe for future labs like this"
    ],
    "ru": [
      "подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      446.0,
      450.0
    ],
    "en": [
      "which will be released weekly if you"
    ],
    "ru": [
      "который будет выходить еженедельно, если вы"
    ]
  },
  {
    "time": [
      450.0,
      452.0
    ],
    "en": [
      "have requests for any specific labs let"
    ],
    "ru": [
      "есть запросы на любые конкретные лаборатории, позволяющие"
    ]
  },
  {
    "time": [
      452.0,
      455.0
    ],
    "en": [
      "me know in the comment section if you"
    ],
    "ru": [
      "я знаю в разделе комментариев, если вы"
    ]
  },
  {
    "time": [
      455.0,
      457.0
    ],
    "en": [
      "want to support my channel I accept"
    ],
    "ru": [
      "хочу поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      457.0,
      459.0
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
      459.0,
      462.0
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
      462.0,
      465.0
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
      465.0,
      467.0
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
      467.0,
      467.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]