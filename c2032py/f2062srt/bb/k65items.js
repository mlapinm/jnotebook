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
      6.0
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
      6.0,
      9.0
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
      9.0,
      11.0
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
      11.0,
      13.0
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
      13.0,
      15.0
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
      15.0,
      19.0
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
      19.0,
      20.0
    ],
    "en": [
      "channel for more labs like this and"
    ],
    "ru": [
      "канал для других подобных лабораторий и"
    ]
  },
  {
    "time": [
      20.0,
      22.0
    ],
    "en": [
      "share these videos with anyone else"
    ],
    "ru": [
      "поделитесь этими видео с кем угодно"
    ]
  },
  {
    "time": [
      22.0,
      27.0
    ],
    "en": [
      "studying for the CCNA in this lab we"
    ],
    "ru": [
      "изучая CCNA в этой лаборатории, мы"
    ]
  },
  {
    "time": [
      27.0,
      32.0
    ],
    "en": [
      "will configure a GRE tunnel gr e stands"
    ],
    "ru": [
      "настрою GRE туннель gr e стоит"
    ]
  },
  {
    "time": [
      32.0,
      36.0
    ],
    "en": [
      "for a generic routing encapsulation r1"
    ],
    "ru": [
      "для общей инкапсуляции маршрутизации r1"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "and r2 are not directly connected"
    ],
    "ru": [
      "и r2 напрямую не связаны"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "however we can use GRE to create a"
    ],
    "ru": [
      "однако мы можем использовать GRE для создания"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "virtual tunnel between them which will"
    ],
    "ru": [
      "виртуальный туннель между ними, который будет"
    ]
  },
  {
    "time": [
      45.0,
      46.0
    ],
    "en": [
      "enable them to behave as if they are"
    ],
    "ru": [
      "дать им возможность вести себя так, как если бы они"
    ]
  },
  {
    "time": [
      46.0,
      49.0
    ],
    "en": [
      "directly connected and their tunnel"
    ],
    "ru": [
      "напрямую связаны и их туннель"
    ]
  },
  {
    "time": [
      49.0,
      51.0
    ],
    "en": [
      "interfaces will have IP addresses from"
    ],
    "ru": [
      "интерфейсы будут иметь IP-адреса из"
    ]
  },
  {
    "time": [
      51.0,
      57.0
    ],
    "en": [
      "the same network 192.168.1.0 / 30 we"
    ],
    "ru": [
      "та же сеть 192.168.1.0 / 30 мы"
    ]
  },
  {
    "time": [
      57.0,
      59.0
    ],
    "en": [
      "will then configure a IG RP on these"
    ],
    "ru": [
      "затем настроит IG RP на этих"
    ]
  },
  {
    "time": [
      59.0,
      62.0
    ],
    "en": [
      "interfaces so they can learn about each"
    ],
    "ru": [
      "интерфейсы, чтобы они могли узнать о каждом"
    ]
  },
  {
    "time": [
      62.0,
      64.0
    ],
    "en": [
      "other's internal networks the"
    ],
    "ru": [
      "другие внутренние сети"
    ]
  },
  {
    "time": [
      64.0,
      67.0
    ],
    "en": [
      "configuration is quite simple so let's"
    ],
    "ru": [
      "конфигурация довольно проста, поэтому давайте"
    ]
  },
  {
    "time": [
      67.0,
      72.0
    ],
    "en": [
      "get started I'll start on r1 first"
    ],
    "ru": [
      "начать я сначала начну с r1"
    ]
  },
  {
    "time": [
      72.0,
      78.0
    ],
    "en": [
      "enable conf t we have to make a tunnel"
    ],
    "ru": [
      "enable conf t мы должны сделать туннель"
    ]
  },
  {
    "time": [
      78.0,
      81.0
    ],
    "en": [
      "interface on the router this isn't a"
    ],
    "ru": [
      "интерфейс на маршрутизаторе это не"
    ]
  },
  {
    "time": [
      81.0,
      83.0
    ],
    "en": [
      "physical interface on the device but a"
    ],
    "ru": [
      "физический интерфейс на устройстве, но"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "logical interface to which we will"
    ],
    "ru": [
      "логический интерфейс, к которому мы будем"
    ]
  },
  {
    "time": [
      85.0,
      88.0
    ],
    "en": [
      "assign an IP address you can type"
    ],
    "ru": [
      "назначьте IP-адрес, который вы можете ввести"
    ]
  },
  {
    "time": [
      88.0,
      92.0
    ],
    "en": [
      "interface tunnel 0 or the fast and easy"
    ],
    "ru": [
      "интерфейсный туннель 0 или быстрый и простой"
    ]
  },
  {
    "time": [
      92.0,
      97.0
    ],
    "en": [
      "way as interface t0 let's assign an IP"
    ],
    "ru": [
      "путь как интерфейс t0 давайте назначим IP"
    ]
  },
  {
    "time": [
      97.0,
      104.0
    ],
    "en": [
      "address to it IP address 192.168.1.1 255"
    ],
    "ru": [
      "адрес к нему IP-адрес 192.168.1.1 255"
    ]
  },
  {
    "time": [
      104.0,
      112.0
    ],
    "en": [
      "dot 255 dot 255 dot 255 @ UNASUR s--"
    ],
    "ru": [
      "точка 255 точка 255 точка 255 @ UNASUR s--"
    ]
  },
  {
    "time": [
      112.0,
      114.0
    ],
    "en": [
      "which interface do you think will be the"
    ],
    "ru": [
      "какой интерфейс, по вашему мнению, будет"
    ]
  },
  {
    "time": [
      114.0,
      118.0
    ],
    "en": [
      "source in this case it's the s 0 0 0"
    ],
    "ru": [
      "источник в данном случае это s 0 0 0"
    ]
  },
  {
    "time": [
      118.0,
      120.0
    ],
    "en": [
      "interface because that's the interface"
    ],
    "ru": [
      "интерфейс, потому что это интерфейс"
    ]
  },
  {
    "time": [
      120.0,
      123.0
    ],
    "en": [
      "we will actually be using to reach r2"
    ],
    "ru": [
      "мы фактически будем использовать для достижения r2"
    ]
  },
  {
    "time": [
      123.0,
      126.0
    ],
    "en": [
      "via the service provider network so"
    ],
    "ru": [
      "через сеть поставщика услуг, чтобы"
    ]
  },
  {
    "time": [
      126.0,
      131.0
    ],
    "en": [
      "tunnel source s 0 0 0"
    ],
    "ru": [
      "туннельный источник s 0 0 0"
    ]
  },
  {
    "time": [
      131.0,
      135.0
    ],
    "en": [
      "next to the tunnel destination tunnel"
    ],
    "ru": [
      "рядом с туннелем назначения туннель"
    ]
  },
  {
    "time": [
      135.0,
      139.0
    ],
    "en": [
      "destination now what IP address do you"
    ],
    "ru": [
      "пункт назначения сейчас какой у тебя IP-адрес"
    ]
  },
  {
    "time": [
      139.0,
      140.0
    ],
    "en": [
      "think is correct here"
    ],
    "ru": [
      "думаю здесь правильно"
    ]
  },
  {
    "time": [
      140.0,
      145.0
    ],
    "en": [
      "it's the IP address on r2 s s0 0 0"
    ],
    "ru": [
      "это IP-адрес на r2 s s0 0 0"
    ]
  },
  {
    "time": [
      145.0,
      147.0
    ],
    "en": [
      "interface the one facing the service"
    ],
    "ru": [
      "интерфейс того, кто обращен к сервису"
    ]
  },
  {
    "time": [
      147.0,
      153.0
    ],
    "en": [
      "provider so 200 oh oh - that's all there"
    ],
    "ru": [
      "провайдер так 200 ой ой - вот и все"
    ]
  },
  {
    "time": [
      153.0,
      161.0
    ],
    "en": [
      "is to it now let's go on our to enable"
    ],
    "ru": [
      "теперь давайте перейдем к включению"
    ]
  },
  {
    "time": [
      161.0,
      167.0
    ],
    "en": [
      "compte interface tunnel 0 IP address"
    ],
    "ru": [
      "Compte interface tunnel 0 IP-адрес"
    ]
  },
  {
    "time": [
      167.0,
      172.0
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
      167.0,
      172.0
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
      172.0,
      176.0
    ],
    "en": [
      "five to the source and destination will"
    ],
    "ru": [
      "пять до источника и назначения будут"
    ]
  },
  {
    "time": [
      176.0,
      178.0
    ],
    "en": [
      "be the opposite of our ones"
    ],
    "ru": [
      "быть противоположным нашим"
    ]
  },
  {
    "time": [
      178.0,
      181.0
    ],
    "en": [
      "configuration the source will be R to s"
    ],
    "ru": [
      "Конфигурация источника будет от R до s"
    ]
  },
  {
    "time": [
      181.0,
      185.0
    ],
    "en": [
      "s 0 0 0 interface and the destination R"
    ],
    "ru": [
      "s 0 0 0 интерфейс и пункт назначения R"
    ]
  },
  {
    "time": [
      185.0,
      192.0
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
      192.0
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
      192.0,
      200.0
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
      192.0,
      200.0
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
      200.0,
      202.0
    ],
    "en": [
      "that's all there is to configuring the"
    ],
    "ru": [
      "это все, что нужно для настройки"
    ]
  },
  {
    "time": [
      202.0,
      203.0
    ],
    "en": [
      "tunnel"
    ],
    "ru": [
      "туннель"
    ]
  },
  {
    "time": [
      203.0,
      207.0
    ],
    "en": [
      "however I've missed one very important"
    ],
    "ru": [
      "однако я пропустил один очень важный"
    ]
  },
  {
    "time": [
      207.0,
      213.0
    ],
    "en": [
      "thing do show IP route Artoo's tunnel"
    ],
    "ru": [
      "вещь показывает IP-маршрут туннель Арту"
    ]
  },
  {
    "time": [
      213.0,
      217.0
    ],
    "en": [
      "destination is 100 oh oh - but it has no"
    ],
    "ru": [
      "пункт назначения - 100 ой ой - но у него нет"
    ]
  },
  {
    "time": [
      217.0,
      221.0
    ],
    "en": [
      "idea how to get there if I try to ping"
    ],
    "ru": [
      "идея, как добраться, если я попытаюсь пинговать"
    ]
  },
  {
    "time": [
      221.0,
      223.0
    ],
    "en": [
      "our one side of the tunnel it will fail"
    ],
    "ru": [
      "наша одна сторона туннеля это не удастся"
    ]
  },
  {
    "time": [
      223.0,
      236.0
    ],
    "en": [
      "do ping 192.168.1.1 no response let's"
    ],
    "ru": [
      "делать пинг 192.168.1.1 нет ответа давай"
    ]
  },
  {
    "time": [
      236.0,
      239.0
    ],
    "en": [
      "configure a static default route via SPR"
    ],
    "ru": [
      "настроить статический маршрут по умолчанию через SPR"
    ]
  },
  {
    "time": [
      239.0,
      246.0
    ],
    "en": [
      "to exit IP route"
    ],
    "ru": [
      "для выхода из IP маршрута"
    ]
  },
  {
    "time": [
      246.0,
      252.0
    ],
    "en": [
      "oh-oh-oh-oh-oh-oh-oh-oh-oh 201 now we"
    ],
    "ru": [
      "ой-ой-ой-ой-ой-ой-ой-ой-ой 201 теперь мы"
    ]
  },
  {
    "time": [
      252.0,
      259.0
    ],
    "en": [
      "have to do the same on our one exit IP"
    ],
    "ru": [
      "нужно сделать то же самое с нашим единственным выходным IP"
    ]
  },
  {
    "time": [
      259.0,
      262.0
    ],
    "en": [
      "route"
    ],
    "ru": [
      "маршрут"
    ]
  },
  {
    "time": [
      262.0,
      265.0
    ],
    "en": [
      "oh-oh-oh-oh-oh-oh-oh-oh-oh"
    ],
    "ru": [
      "ой-ой-ой-ой-ой-ой-ой-ой-ой"
    ]
  },
  {
    "time": [
      265.0,
      269.0
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
      265.0,
      269.0
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
      269.0,
      271.0
    ],
    "en": [
      "default route the important thing is"
    ],
    "ru": [
      "маршрут по умолчанию, важная вещь"
    ]
  },
  {
    "time": [
      271.0,
      273.0
    ],
    "en": [
      "that the routers can reach the IP"
    ],
    "ru": [
      "что маршрутизаторы могут подключиться к IP"
    ]
  },
  {
    "time": [
      273.0,
      275.0
    ],
    "en": [
      "addresses configured as the tunnel"
    ],
    "ru": [
      "адреса настроены как туннель"
    ]
  },
  {
    "time": [
      275.0,
      280.0
    ],
    "en": [
      "destination okay now r1 and r2 can reach"
    ],
    "ru": [
      "пункт назначения хорошо, теперь r1 и r2 могут добраться"
    ]
  },
  {
    "time": [
      280.0,
      283.0
    ],
    "en": [
      "each other let's try to ping our two"
    ],
    "ru": [
      "друг друга давайте попробуем пинговать наших двоих"
    ]
  },
  {
    "time": [
      283.0,
      287.0
    ],
    "en": [
      "side of the tunnel from here on r1 do"
    ],
    "ru": [
      "сторона туннеля отсюда на r1 делать"
    ]
  },
  {
    "time": [
      287.0,
      297.0
    ],
    "en": [
      "ping 192.168.1.2 okay it works this time"
    ],
    "ru": [
      "пинг 192.168.1.2 хорошо, на этот раз работает"
    ]
  },
  {
    "time": [
      297.0,
      301.0
    ],
    "en": [
      "let's check the interface do show IP"
    ],
    "ru": [
      "давайте проверим интерфейс показывает IP"
    ]
  },
  {
    "time": [
      301.0,
      305.0
    ],
    "en": [
      "interface brief our tunnel interface is"
    ],
    "ru": [
      "краткое описание интерфейса наш туннельный интерфейс"
    ]
  },
  {
    "time": [
      305.0,
      312.0
    ],
    "en": [
      "up and up do show interface tunnel zero"
    ],
    "ru": [
      "вверх и вверх показывать нулевой интерфейсный туннель"
    ]
  },
  {
    "time": [
      312.0,
      314.0
    ],
    "en": [
      "there's the tunnel source and"
    ],
    "ru": [
      "там источник туннеля и"
    ]
  },
  {
    "time": [
      314.0,
      317.0
    ],
    "en": [
      "destination we configured and you can"
    ],
    "ru": [
      "место назначения мы настроили, и вы можете"
    ]
  },
  {
    "time": [
      317.0,
      320.0
    ],
    "en": [
      "see the tunnel protocol is gr e being"
    ],
    "ru": [
      "см. туннельный протокол"
    ]
  },
  {
    "time": [
      320.0,
      323.0
    ],
    "en": [
      "transported over IP"
    ],
    "ru": [
      "транспортируется по IP"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "ok now let's configure AI GRP over the"
    ],
    "ru": [
      "хорошо, теперь давайте настроим AI GRP через"
    ]
  },
  {
    "time": [
      326.0,
      332.0
    ],
    "en": [
      "tunnel router ERP and I'll use an a s"
    ],
    "ru": [
      "туннельный маршрутизатор ERP, и я буду использовать a s"
    ]
  },
  {
    "time": [
      332.0,
      336.0
    ],
    "en": [
      "number of 100 so I want to advertise the"
    ],
    "ru": [
      "число 100, поэтому я хочу рекламировать"
    ]
  },
  {
    "time": [
      336.0,
      342.0
    ],
    "en": [
      "inside network so Network 1000 100 200"
    ],
    "ru": [
      "внутри сети, поэтому Сеть 1000 100 200"
    ]
  },
  {
    "time": [
      342.0,
      347.0
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
      342.0,
      347.0
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
      347.0,
      349.0
    ],
    "en": [
      "remember it's not always needed for EIG"
    ],
    "ru": [
      "помните, что это не всегда нужно для EIG"
    ]
  },
  {
    "time": [
      349.0,
      354.0
    ],
    "en": [
      "RP just network 10000 would have"
    ],
    "ru": [
      "RP просто сеть 10000 имела бы"
    ]
  },
  {
    "time": [
      354.0,
      357.0
    ],
    "en": [
      "activated AI GRP on the G 0 0 interface"
    ],
    "ru": [
      "активирован AI GRP на интерфейсе G 0 0"
    ]
  },
  {
    "time": [
      357.0,
      358.0
    ],
    "en": [
      "as well"
    ],
    "ru": [
      "также"
    ]
  },
  {
    "time": [
      358.0,
      362.0
    ],
    "en": [
      "okay now let's activate di GRP on the"
    ],
    "ru": [
      "хорошо, теперь давайте активируем di GRP на"
    ]
  },
  {
    "time": [
      362.0,
      367.0
    ],
    "en": [
      "tunnel network 192.168.1.0 again I'll"
    ],
    "ru": [
      "туннельная сеть 192.168.1.0 снова я"
    ]
  },
  {
    "time": [
      367.0,
      369.0
    ],
    "en": [
      "use the exact wildcard mask"
    ],
    "ru": [
      "используйте точную маску подстановки"
    ]
  },
  {
    "time": [
      369.0,
      3.0
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
      3.0,
      377.0
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
      377.0,
      383.0
    ],
    "en": [
      "rotary IG RP 100 Network 1002"
    ],
    "ru": [
      "поворотный ИГ РП 100 Сеть 1002"
    ]
  },
  {
    "time": [
      383.0,
      390.0
    ],
    "en": [
      "oh-oh-oh-oh 255 network 192.168.1.0 oh"
    ],
    "ru": [
      "ой-ой-ой-ой 255 сеть 192.168.1.0 ой"
    ]
  },
  {
    "time": [
      390.0,
      395.0
    ],
    "en": [
      "oh oh 3 immediately we get a message"
    ],
    "ru": [
      "ой ой 3 сразу мы получаем сообщение"
    ]
  },
  {
    "time": [
      395.0,
      397.0
    ],
    "en": [
      "saying we have a new AI GRP adjacency Oh"
    ],
    "ru": [
      "говоря, что у нас есть новая смежность AI GRP Oh"
    ]
  },
  {
    "time": [
      397.0,
      400.0
    ],
    "en": [
      "where the tunnel interface and the"
    ],
    "ru": [
      "где туннельный интерфейс и"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "neighbor address is our ones tunnel"
    ],
    "ru": [
      "соседний адрес - это наш туннель"
    ]
  },
  {
    "time": [
      402.0,
      409.0
    ],
    "en": [
      "address 192.168.1.1 do show IP route"
    ],
    "ru": [
      "адрес 192.168.1.1 показывает IP-маршрут"
    ]
  },
  {
    "time": [
      409.0,
      415.0
    ],
    "en": [
      "look are two learned our ones 1001 0/24"
    ],
    "ru": [
      "посмотри, двое узнали наши 1001 0/24"
    ]
  },
  {
    "time": [
      415.0,
      420.0
    ],
    "en": [
      "network let's try a ping from PC to 2 PC"
    ],
    "ru": [
      "сеть попробуем пинг с ПК на 2 ПК"
    ]
  },
  {
    "time": [
      420.0,
      437.0
    ],
    "en": [
      "one ping 1001 100"
    ],
    "ru": [
      "один пинг 1001100"
    ]
  },
  {
    "time": [
      437.0,
      440.0
    ],
    "en": [
      "okay it works our GRE tunnel is up and"
    ],
    "ru": [
      "хорошо, все работает, наш туннель GRE запущен и"
    ]
  },
  {
    "time": [
      440.0,
      443.0
    ],
    "en": [
      "working and we successfully configured a"
    ],
    "ru": [
      "работает, и мы успешно настроили"
    ]
  },
  {
    "time": [
      443.0,
      445.0
    ],
    "en": [
      "IG RP over the tunnel to share the"
    ],
    "ru": [
      "IG RP через туннель для совместного использования"
    ]
  },
  {
    "time": [
      445.0,
      451.0
    ],
    "en": [
      "inside networks that's all for this lab"
    ],
    "ru": [
      "внутри сетей это все для этой лаборатории"
    ]
  },
  {
    "time": [
      451.0,
      454.0
    ],
    "en": [
      "thank you for watching I hope this lab"
    ],
    "ru": [
      "спасибо за просмотр, надеюсь, эта лаборатория"
    ]
  },
  {
    "time": [
      454.0,
      455.0
    ],
    "en": [
      "and video have been helpful for you"
    ],
    "ru": [
      "и видео были для вас полезны"
    ]
  },
  {
    "time": [
      455.0,
      458.0
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
      458.0,
      461.0
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
      461.0,
      463.0
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
      463.0,
      466.0
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
      466.0,
      468.0
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
      468.0,
      471.0
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
      471.0,
      474.0
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
      474.0,
      477.0
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
      477.0,
      479.0
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
      479.0,
      479.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]