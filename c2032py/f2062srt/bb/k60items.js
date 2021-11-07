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
      7.0
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
      7.0,
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
      16.0
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
      16.0,
      20.0
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
      20.0,
      22.0
    ],
    "en": [
      "lab we will once again configure a IG RP"
    ],
    "ru": [
      "lab мы еще раз настроим IG RP"
    ]
  },
  {
    "time": [
      22.0,
      27.0
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
      27.0,
      30.0
    ],
    "en": [
      "configuring a IG RP for ipv6 is very"
    ],
    "ru": [
      "настройка IG RP для ipv6 очень"
    ]
  },
  {
    "time": [
      30.0,
      34.0
    ],
    "en": [
      "similar to configuring OSPF v3 for ipv6"
    ],
    "ru": [
      "аналогично настройке OSPF v3 для ipv6"
    ]
  },
  {
    "time": [
      34.0,
      37.0
    ],
    "en": [
      "rather than using the network command in"
    ],
    "ru": [
      "вместо использования сетевой команды в"
    ]
  },
  {
    "time": [
      37.0,
      40.0
    ],
    "en": [
      "Eid RP configuration mode you can figure"
    ],
    "ru": [
      "Режим конфигурации Eid RP вы можете понять"
    ]
  },
  {
    "time": [
      40.0,
      43.0
    ],
    "en": [
      "it directly on the interfaces aside from"
    ],
    "ru": [
      "это прямо на интерфейсах, кроме"
    ]
  },
  {
    "time": [
      43.0,
      44.0
    ],
    "en": [
      "that there isn't much different between"
    ],
    "ru": [
      "что нет большой разницы между"
    ]
  },
  {
    "time": [
      44.0,
      48.0
    ],
    "en": [
      "configuring a EIGRP for ipv6 and for"
    ],
    "ru": [
      "настройка EIGRP для ipv6 и для"
    ]
  },
  {
    "time": [
      48.0,
      53.0
    ],
    "en": [
      "ipv4 let's get started the first step is"
    ],
    "ru": [
      "ipv4 давайте начнем первый шаг"
    ]
  },
  {
    "time": [
      53.0,
      55.0
    ],
    "en": [
      "to configure loopback interfaces on each"
    ],
    "ru": [
      "для настройки интерфейсов обратной связи на каждом"
    ]
  },
  {
    "time": [
      55.0,
      58.0
    ],
    "en": [
      "router these will become the EIG RP"
    ],
    "ru": [
      "маршрутизатор они станут EIG RP"
    ]
  },
  {
    "time": [
      58.0,
      64.0
    ],
    "en": [
      "router IDs like OSPF v3 for ipv6 ERG RP"
    ],
    "ru": [
      "идентификаторы маршрутизатора, такие как OSPF v3 для ipv6 ERG RP"
    ]
  },
  {
    "time": [
      64.0,
      67.0
    ],
    "en": [
      "for ipv6 uses a 32-bit router ID in the"
    ],
    "ru": [
      "для ipv6 используется 32-битный идентификатор маршрутизатора в"
    ]
  },
  {
    "time": [
      67.0,
      71.0
    ],
    "en": [
      "form of an ipv4 address although it"
    ],
    "ru": [
      "форма IPv4-адреса, хотя"
    ]
  },
  {
    "time": [
      71.0,
      72.0
    ],
    "en": [
      "doesn't have to actually be an address"
    ],
    "ru": [
      "на самом деле не обязательно должен быть адрес"
    ]
  },
  {
    "time": [
      72.0,
      75.0
    ],
    "en": [
      "on the device you can manually configure"
    ],
    "ru": [
      "на устройстве можно вручную настроить"
    ]
  },
  {
    "time": [
      75.0,
      79.0
    ],
    "en": [
      "the ID however if you don't the highest"
    ],
    "ru": [
      "ID, однако, если у вас не самый высокий"
    ]
  },
  {
    "time": [
      79.0,
      80.0
    ],
    "en": [
      "ipv4 address on a loopback interface"
    ],
    "ru": [
      "IPv4-адрес на интерфейсе обратной связи"
    ]
  },
  {
    "time": [
      80.0,
      84.0
    ],
    "en": [
      "will become the router ID if there is no"
    ],
    "ru": [
      "станет идентификатором маршрутизатора, если нет"
    ]
  },
  {
    "time": [
      84.0,
      87.0
    ],
    "en": [
      "loopback interface the highest ipv4"
    ],
    "ru": [
      "шлейфовый интерфейс наивысшего ipv4"
    ]
  },
  {
    "time": [
      87.0,
      89.0
    ],
    "en": [
      "address on a regular interface will"
    ],
    "ru": [
      "адрес на обычном интерфейсе будет"
    ]
  },
  {
    "time": [
      89.0,
      91.0
    ],
    "en": [
      "become the router ID I think I've"
    ],
    "ru": [
      "стать идентификатором маршрутизатора, я думаю, что я"
    ]
  },
  {
    "time": [
      91.0,
      93.0
    ],
    "en": [
      "configured enough loopback interfaces"
    ],
    "ru": [
      "настроено достаточно интерфейсов обратной связи"
    ]
  },
  {
    "time": [
      93.0,
      95.0
    ],
    "en": [
      "for these videos by now so just for this"
    ],
    "ru": [
      "для этих видео, так что только для этого"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "video I've already configured that"
    ],
    "ru": [
      "видео я уже настроил это"
    ]
  },
  {
    "time": [
      97.0,
      99.0
    ],
    "en": [
      "loopback interfaces on are two three"
    ],
    "ru": [
      "шлейфовые интерфейсы включены два три"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "four and five let's just quickly do it"
    ],
    "ru": [
      "четыре и пять давай просто сделаем это быстро"
    ]
  },
  {
    "time": [
      102.0,
      111.0
    ],
    "en": [
      "on our one enable compte interface l0 IP"
    ],
    "ru": [
      "на нашем включите интерфейс compte l0 IP"
    ]
  },
  {
    "time": [
      111.0,
      118.0
    ],
    "en": [
      "address 1.1 1.1 255.255.255.0 5 ok"
    ],
    "ru": [
      "адрес 1.1 1.1 255.255.255.0 5 ок"
    ]
  },
  {
    "time": [
      118.0,
      123.0
    ],
    "en": [
      "that's all next is to configure a IG RP"
    ],
    "ru": [
      "вот и все, что дальше, это настроить IG RP"
    ]
  },
  {
    "time": [
      123.0,
      126.0
    ],
    "en": [
      "on this network let's start here on r1"
    ],
    "ru": [
      "в этой сети давайте начнем с r1"
    ]
  },
  {
    "time": [
      126.0,
      130.0
    ],
    "en": [
      "to configure a IG RP for ipv6 just put"
    ],
    "ru": [
      "чтобы настроить IG RP для ipv6, просто поместите"
    ]
  },
  {
    "time": [
      130.0,
      134.0
    ],
    "en": [
      "ipv6 in front of the usual command"
    ],
    "ru": [
      "ipv6 перед обычной командой"
    ]
  },
  {
    "time": [
      134.0,
      138.0
    ],
    "en": [
      "ipv6 router EAG RP and once again we'll"
    ],
    "ru": [
      "ipv6 router EAG RP и еще раз мы"
    ]
  },
  {
    "time": [
      138.0,
      142.0
    ],
    "en": [
      "use the a s number 100 now as I"
    ],
    "ru": [
      "используйте число 100 сейчас, как я"
    ]
  },
  {
    "time": [
      142.0,
      143.0
    ],
    "en": [
      "mentioned before we don't actually"
    ],
    "ru": [
      "упоминалось ранее, мы на самом деле не"
    ]
  },
  {
    "time": [
      143.0,
      146.0
    ],
    "en": [
      "activate ERG RP on the interfaces from"
    ],
    "ru": [
      "активировать ERG RP на интерфейсах из"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "here however one of the requirements for"
    ],
    "ru": [
      "здесь, однако, одно из требований для"
    ]
  },
  {
    "time": [
      149.0,
      151.0
    ],
    "en": [
      "the lab is to make our ones"
    ],
    "ru": [
      "лаборатория должна сделать наши"
    ]
  },
  {
    "time": [
      151.0,
      156.0
    ],
    "en": [
      "g02 interface passive previously we use"
    ],
    "ru": [
      "g02 интерфейс пассивный ранее мы использовали"
    ]
  },
  {
    "time": [
      156.0,
      157.0
    ],
    "en": [
      "this command to suppress advertisements"
    ],
    "ru": [
      "эта команда для подавления рекламы"
    ]
  },
  {
    "time": [
      157.0,
      160.0
    ],
    "en": [
      "on loopback interfaces because there's"
    ],
    "ru": [
      "на интерфейсах обратной связи, потому что есть"
    ]
  },
  {
    "time": [
      160.0,
      162.0
    ],
    "en": [
      "no point in sending advertisements on"
    ],
    "ru": [
      "нет смысла отправлять рекламу на"
    ]
  },
  {
    "time": [
      162.0,
      165.0
    ],
    "en": [
      "interfaces leading to nowhere in this"
    ],
    "ru": [
      "интерфейсы, ведущие в никуда в этом"
    ]
  },
  {
    "time": [
      165.0,
      167.0
    ],
    "en": [
      "case however we want to advertise the"
    ],
    "ru": [
      "случае, однако мы хотим рекламировать"
    ]
  },
  {
    "time": [
      167.0,
      170.0
    ],
    "en": [
      "network on the g02 interface into EIGRP"
    ],
    "ru": [
      "сеть на интерфейсе g02 в EIGRP"
    ]
  },
  {
    "time": [
      170.0,
      172.0
    ],
    "en": [
      "but want to suppress advertisements on"
    ],
    "ru": [
      "но хотите подавить рекламу на"
    ]
  },
  {
    "time": [
      172.0,
      174.0
    ],
    "en": [
      "the interface because of possible"
    ],
    "ru": [
      "интерфейс из-за возможных"
    ]
  },
  {
    "time": [
      174.0,
      177.0
    ],
    "en": [
      "security risks of sending AI GRP"
    ],
    "ru": [
      "риски безопасности отправки AI GRP"
    ]
  },
  {
    "time": [
      177.0,
      180.0
    ],
    "en": [
      "advertisements out towards the internet"
    ],
    "ru": [
      "реклама в Интернете"
    ]
  },
  {
    "time": [
      180.0,
      183.0
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
      183.0,
      186.0
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
      186.0,
      189.0
    ],
    "en": [
      "okay now let's activate a IG r p on the"
    ],
    "ru": [
      "хорошо, теперь давайте активируем IG r p на"
    ]
  },
  {
    "time": [
      189.0,
      197.0
    ],
    "en": [
      "interfaces interface g00 ipv6 zi g RP"
    ],
    "ru": [
      "интерфейсы интерфейс g00 ipv6 zi g RP"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "followed by the a.s number 100 that's"
    ],
    "ru": [
      "с последующим номером 100, который"
    ]
  },
  {
    "time": [
      200.0,
      205.0
    ],
    "en": [
      "all there is to it interface G 0 1 IP v6"
    ],
    "ru": [
      "все что есть к нему интерфейс G 0 1 IP v6"
    ]
  },
  {
    "time": [
      205.0,
      211.0
    ],
    "en": [
      "z IG RP 100 interface G 0 to ipv6 AI g"
    ],
    "ru": [
      "z Интерфейс IG RP 100 G 0 - ipv6 AI g"
    ]
  },
  {
    "time": [
      211.0,
      216.0
    ],
    "en": [
      "RP 100 ok we've activated AI g RP on all"
    ],
    "ru": [
      "RP 100 ОК, мы активировали AI g RP на всех"
    ]
  },
  {
    "time": [
      216.0,
      222.0
    ],
    "en": [
      "of our ones interfaces do show run"
    ],
    "ru": [
      "из наших интерфейсов показывает запуск"
    ]
  },
  {
    "time": [
      222.0,
      225.0
    ],
    "en": [
      "here's the EIG RP configuration but"
    ],
    "ru": [
      "вот конфигурация EIG RP, но"
    ]
  },
  {
    "time": [
      225.0,
      230.0
    ],
    "en": [
      "what's this shut down yes ERG RP for"
    ],
    "ru": [
      "что это выключение да ERG RP для"
    ]
  },
  {
    "time": [
      230.0,
      234.0
    ],
    "en": [
      "ipv6 has a shutdown feature I think that"
    ],
    "ru": [
      "ipv6 имеет функцию выключения, я думаю, что"
    ]
  },
  {
    "time": [
      234.0,
      235.0
    ],
    "en": [
      "whether the process is shut down by"
    ],
    "ru": [
      "остановлен ли процесс"
    ]
  },
  {
    "time": [
      235.0,
      237.0
    ],
    "en": [
      "defaults depends on either the OS"
    ],
    "ru": [
      "значения по умолчанию зависят от ОС"
    ]
  },
  {
    "time": [
      237.0,
      240.0
    ],
    "en": [
      "version or the router model in this case"
    ],
    "ru": [
      "версия или модель роутера в этом случае"
    ]
  },
  {
    "time": [
      240.0,
      242.0
    ],
    "en": [
      "it's shut down by default so let's go"
    ],
    "ru": [
      "по умолчанию он выключен, так что пошли"
    ]
  },
  {
    "time": [
      242.0,
      244.0
    ],
    "en": [
      "back to a IG RP configuration mode and"
    ],
    "ru": [
      "вернуться в режим конфигурации IG RP и"
    ]
  },
  {
    "time": [
      244.0,
      250.0
    ],
    "en": [
      "activate it ipv6 router ew g RP 100 no"
    ],
    "ru": [
      "активировать роутер ipv6 ew g RP 100 нет"
    ]
  },
  {
    "time": [
      250.0,
      254.0
    ],
    "en": [
      "shutdown now I'll go through and do the"
    ],
    "ru": [
      "выключение сейчас я пройду и сделаю"
    ]
  },
  {
    "time": [
      254.0,
      257.0
    ],
    "en": [
      "same thing on the other routers are to"
    ],
    "ru": [
      "то же самое на других маршрутизаторах, чтобы"
    ]
  },
  {
    "time": [
      257.0,
      262.0
    ],
    "en": [
      "next enable coffee tea"
    ],
    "ru": [
      "затем включить кофе чай"
    ]
  },
  {
    "time": [
      262.0,
      265.0
    ],
    "en": [
      "now we don't actually have to create the"
    ],
    "ru": [
      "теперь нам не нужно создавать"
    ]
  },
  {
    "time": [
      265.0,
      268.0
    ],
    "en": [
      "EIG RP process here we can go directly"
    ],
    "ru": [
      "Процесс EIG RP здесь мы можем перейти непосредственно"
    ]
  },
  {
    "time": [
      268.0,
      271.0
    ],
    "en": [
      "to the interface and if we activate AIG"
    ],
    "ru": [
      "к интерфейсу и если мы активируем AIG"
    ]
  },
  {
    "time": [
      271.0,
      274.0
    ],
    "en": [
      "our pas 100 on that interface the router"
    ],
    "ru": [
      "наш pas 100 на этом интерфейсе маршрутизатор"
    ]
  },
  {
    "time": [
      274.0,
      277.0
    ],
    "en": [
      "will create the eigrp process for us"
    ],
    "ru": [
      "создаст для нас процесс eigrp"
    ]
  },
  {
    "time": [
      277.0,
      285.0
    ],
    "en": [
      "interface g00 ipv6 AIG RP 100 interface"
    ],
    "ru": [
      "интерфейс g00 ipv6 интерфейс AIG RP 100"
    ]
  },
  {
    "time": [
      285.0,
      291.0
    ],
    "en": [
      "G 0 1 IP v6 AIG RP 100 ok so that"
    ],
    "ru": [
      "G 0 1 IP v6 AIG RP 100 в порядке, так что"
    ]
  },
  {
    "time": [
      291.0,
      294.0
    ],
    "en": [
      "activates AI gr p on the interfaces and"
    ],
    "ru": [
      "активирует AI gr p на интерфейсах и"
    ]
  },
  {
    "time": [
      294.0,
      297.0
    ],
    "en": [
      "creates the EIGRP process however we"
    ],
    "ru": [
      "создает процесс EIGRP, однако мы"
    ]
  },
  {
    "time": [
      297.0,
      299.0
    ],
    "en": [
      "haven't gotten any messages about an"
    ],
    "ru": [
      "не получал сообщений о"
    ]
  },
  {
    "time": [
      299.0,
      302.0
    ],
    "en": [
      "adjacency with our one yet why is that"
    ],
    "ru": [
      "смежность с нашим, но почему это"
    ]
  },
  {
    "time": [
      302.0,
      306.0
    ],
    "en": [
      "once again the shut down feature to be"
    ],
    "ru": [
      "еще раз функция выключения, чтобы быть"
    ]
  },
  {
    "time": [
      306.0,
      309.0
    ],
    "en": [
      "honest from my CCNA and CCNP studies I"
    ],
    "ru": [
      "честно из моих исследований CCNA и CCNP Я"
    ]
  },
  {
    "time": [
      309.0,
      312.0
    ],
    "en": [
      "don't remember having to enable AIG RP"
    ],
    "ru": [
      "не помню, что нужно было включать AIG RP"
    ]
  },
  {
    "time": [
      312.0,
      315.0
    ],
    "en": [
      "for ipv6 with no shutdown but it seems"
    ],
    "ru": [
      "для ipv6 без выключения, но кажется"
    ]
  },
  {
    "time": [
      315.0,
      318.0
    ],
    "en": [
      "some routers require that by default so"
    ],
    "ru": [
      "некоторые маршрутизаторы требуют этого по умолчанию, поэтому"
    ]
  },
  {
    "time": [
      318.0,
      320.0
    ],
    "en": [
      "for the test and real world situations"
    ],
    "ru": [
      "для тестовых и реальных ситуаций"
    ]
  },
  {
    "time": [
      320.0,
      324.0
    ],
    "en": [
      "just be aware that EA GRP for ipv6 has a"
    ],
    "ru": [
      "просто имейте в виду, что EA GRP для ipv6 имеет"
    ]
  },
  {
    "time": [
      324.0,
      329.0
    ],
    "en": [
      "shutdown feature ipv6 router AIG RP 100"
    ],
    "ru": [
      "функция выключения маршрутизатора ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      329.0,
      335.0
    ],
    "en": [
      "no shutdown next let's go to our 3"
    ],
    "ru": [
      "без выключения перейдем к нашему 3"
    ]
  },
  {
    "time": [
      335.0,
      343.0
    ],
    "en": [
      "enable compte ipv6 router AIG RP 100 no"
    ],
    "ru": [
      "включить compte ipv6 router AIG RP 100 нет"
    ]
  },
  {
    "time": [
      343.0,
      350.0
    ],
    "en": [
      "shutdown interface G 0 0 ipv6 AIG RP 100"
    ],
    "ru": [
      "интерфейс выключения G 0 0 ipv6 AIG RP 100"
    ]
  },
  {
    "time": [
      350.0,
      356.0
    ],
    "en": [
      "interface G 0 1 IP v6 g IG RP 100"
    ],
    "ru": [
      "интерфейс G 0 1 IP v6 g IG RP 100"
    ]
  },
  {
    "time": [
      356.0,
      362.0
    ],
    "en": [
      "interface g 0 to ipv6 ERG RP 100 ok"
    ],
    "ru": [
      "интерфейс от g 0 до ipv6 ERG RP 100 ok"
    ]
  },
  {
    "time": [
      362.0,
      370.0
    ],
    "en": [
      "let's go on our 4 enable compte ipv6"
    ],
    "ru": [
      "давайте перейдем к нашим 4 включить compte ipv6"
    ]
  },
  {
    "time": [
      370.0,
      375.0
    ],
    "en": [
      "router AIG RP 100 no shutdown interface"
    ],
    "ru": [
      "маршрутизатор AIG RP 100 без интерфейса выключения"
    ]
  },
  {
    "time": [
      375.0,
      383.0
    ],
    "en": [
      "g 0 0 ipv6 AIG RP 100 interface g 0 1 IP"
    ],
    "ru": [
      "g 0 0 ipv6 Интерфейс AIG RP 100 g 0 1 IP"
    ]
  },
  {
    "time": [
      383.0,
      394.0
    ],
    "en": [
      "v6 e IG RP 100 finally r 5 enable compte"
    ],
    "ru": [
      "v6 e IG RP 100, наконец, r 5 включить compte"
    ]
  },
  {
    "time": [
      394.0,
      400.0
    ],
    "en": [
      "ipv6 router AIG RP 100 interface g 0 0"
    ],
    "ru": [
      "ipv6 роутер AIG RP 100 интерфейс g 0 0"
    ]
  },
  {
    "time": [
      400.0,
      406.0
    ],
    "en": [
      "ipv6 AIG RP 100 ok we've configured ew g"
    ],
    "ru": [
      "ipv6 AIG RP 100 ok, мы настроили ew g"
    ]
  },
  {
    "time": [
      406.0,
      409.0
    ],
    "en": [
      "RP on all of the routers let's go back"
    ],
    "ru": [
      "RP на всех роутерах, вернемся"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "on R 1 and see if we have all of the"
    ],
    "ru": [
      "на R 1 и посмотрим, все ли"
    ]
  },
  {
    "time": [
      411.0,
      419.0
    ],
    "en": [
      "roads do show ipv6 route looks like"
    ],
    "ru": [
      "дороги действительно показывают маршрут ipv6, как выглядит"
    ]
  },
  {
    "time": [
      419.0,
      423.0
    ],
    "en": [
      "we've got the 23 34 and 35 networks we"
    ],
    "ru": [
      "у нас есть 23 34 и 35 сети, которые мы"
    ]
  },
  {
    "time": [
      423.0,
      427.0
    ],
    "en": [
      "want next we have to advertise a default"
    ],
    "ru": [
      "хочу дальше мы должны рекламировать по умолчанию"
    ]
  },
  {
    "time": [
      427.0,
      431.0
    ],
    "en": [
      "route to the internet from R 1 now ew g"
    ],
    "ru": [
      "маршрут в интернет от R 1 сейчас ew g"
    ]
  },
  {
    "time": [
      431.0,
      433.0
    ],
    "en": [
      "RP doesn't have the default information"
    ],
    "ru": [
      "RP не имеет информации по умолчанию"
    ]
  },
  {
    "time": [
      433.0,
      437.0
    ],
    "en": [
      "originated command that OSPF has so how"
    ],
    "ru": [
      "возникла команда OSPF, так как"
    ]
  },
  {
    "time": [
      437.0,
      440.0
    ],
    "en": [
      "can we go about this well we can"
    ],
    "ru": [
      "мы можем сделать это хорошо мы можем"
    ]
  },
  {
    "time": [
      440.0,
      442.0
    ],
    "en": [
      "advertise the default route as a summary"
    ],
    "ru": [
      "рекламировать маршрут по умолчанию как сводку"
    ]
  },
  {
    "time": [
      442.0,
      446.0
    ],
    "en": [
      "route on the g 0 0 & g 0 1 interfaces"
    ],
    "ru": [
      "маршрут на интерфейсах g 0 0 и g 0 1"
    ]
  },
  {
    "time": [
      446.0,
      453.0
    ],
    "en": [
      "let's try on our one interface g 0 0 the"
    ],
    "ru": [
      "давайте попробуем на нашем единственном интерфейсе g 0 0"
    ]
  },
  {
    "time": [
      453.0,
      456.0
    ],
    "en": [
      "command is the same as for ipv4 just use"
    ],
    "ru": [
      "команда такая же, как и для ipv4, просто используйте"
    ]
  },
  {
    "time": [
      456.0,
      461.0
    ],
    "en": [
      "ipv6 at the beginning instead of IP ipv6"
    ],
    "ru": [
      "ipv6 в начале вместо IP ipv6"
    ]
  },
  {
    "time": [
      461.0,
      467.0
    ],
    "en": [
      "summary address ew g RP 100 and remember"
    ],
    "ru": [
      "итоговый адрес ew g RP 100 и запомнить"
    ]
  },
  {
    "time": [
      467.0,
      470.0
    ],
    "en": [
      "the default route for ipv6 is colon"
    ],
    "ru": [
      "маршрут по умолчанию для ipv6 - двоеточие"
    ]
  },
  {
    "time": [
      470.0,
      475.0
    ],
    "en": [
      "colon slash 0 now let's go on g 0 1 and"
    ],
    "ru": [
      "двоеточие косая черта 0 теперь давайте перейдем к g 0 1 и"
    ]
  },
  {
    "time": [
      475.0,
      478.0
    ],
    "en": [
      "do the same interface g 0 1 IP v6"
    ],
    "ru": [
      "сделать тот же интерфейс g 0 1 IP v6"
    ]
  },
  {
    "time": [
      478.0,
      483.0
    ],
    "en": [
      "summary address key ID RP 100 colon"
    ],
    "ru": [
      "сводный адрес ключ ID RP 100 двоеточие"
    ]
  },
  {
    "time": [
      483.0,
      486.0
    ],
    "en": [
      "colon slash 0 let's go check on one of"
    ],
    "ru": [
      "двоеточие, слэш 0, давайте проверим один из"
    ]
  },
  {
    "time": [
      486.0,
      490.0
    ],
    "en": [
      "the routers i'll check on our v because"
    ],
    "ru": [
      "маршрутизаторы я проверю на нашем v, потому что"
    ]
  },
  {
    "time": [
      490.0,
      493.0
    ],
    "en": [
      "if our v has the route r2 r3 and r4 a"
    ],
    "ru": [
      "если у нашего v есть маршрут r2 r3 и r4 a"
    ]
  },
  {
    "time": [
      493.0,
      500.0
    ],
    "en": [
      "must as well do show ipv6 red there it"
    ],
    "ru": [
      "должен также показать красный IPv6 там"
    ]
  },
  {
    "time": [
      500.0,
      504.0
    ],
    "en": [
      "is right at the top ok in this slab we"
    ],
    "ru": [
      "находится прямо наверху, хорошо, в этой плите мы"
    ]
  },
  {
    "time": [
      504.0,
      508.0
    ],
    "en": [
      "configured AI GRP for ipv6 the"
    ],
    "ru": [
      "настроил AI GRP для ipv6"
    ]
  },
  {
    "time": [
      508.0,
      510.0
    ],
    "en": [
      "configuration is similar to EIGRP for"
    ],
    "ru": [
      "конфигурация аналогична EIGRP для"
    ]
  },
  {
    "time": [
      510.0,
      513.0
    ],
    "en": [
      "ipv4 however remember you must configure"
    ],
    "ru": [
      "ipv4 однако помните, что вы должны настроить"
    ]
  },
  {
    "time": [
      513.0,
      516.0
    ],
    "en": [
      "it at the interface level that's all for"
    ],
    "ru": [
      "это на уровне интерфейса, это все для"
    ]
  },
  {
    "time": [
      516.0,
      521.0
    ],
    "en": [
      "this lab thank you for watching I hope"
    ],
    "ru": [
      "эта лаборатория спасибо за просмотр надеюсь"
    ]
  },
  {
    "time": [
      521.0,
      523.0
    ],
    "en": [
      "this lab and video have been helpful for"
    ],
    "ru": [
      "эта лабораторная работа и видео были полезны для"
    ]
  },
  {
    "time": [
      523.0,
      524.0
    ],
    "en": [
      "you"
    ],
    "ru": [
      "ты"
    ]
  },
  {
    "time": [
      524.0,
      526.0
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
      526.0,
      528.0
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
      528.0,
      531.0
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
      531.0,
      533.0
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
      533.0,
      536.0
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
      536.0,
      538.0
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
      538.0,
      542.0
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
      542.0,
      545.0
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
      545.0,
      547.0
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
      547.0,
      547.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]