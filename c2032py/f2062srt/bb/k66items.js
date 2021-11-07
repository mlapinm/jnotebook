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
      "description also please subscribe to the"
    ],
    "ru": [
      "описание также подпишитесь на"
    ]
  },
  {
    "time": [
      18.0,
      19.0
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
      19.0,
      21.0
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
      21.0,
      25.0
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
      25.0,
      27.0
    ],
    "en": [
      "will troubleshoot the GRE tunnel"
    ],
    "ru": [
      "устранит неполадки в туннеле GRE"
    ]
  },
  {
    "time": [
      27.0,
      31.0
    ],
    "en": [
      "configuration from the previous lab the"
    ],
    "ru": [
      "конфигурация из предыдущей лабораторной работы"
    ]
  },
  {
    "time": [
      31.0,
      33.0
    ],
    "en": [
      "GRE tunnel should be working with E I gr"
    ],
    "ru": [
      "Туннель GRE должен работать с E I gr."
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "P over it so pc1 & pc2 can reach each"
    ],
    "ru": [
      "P, чтобы pc1 и pc2 могли подключиться к каждому"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "other there are two misconfigurations on"
    ],
    "ru": [
      "другое есть две неправильные конфигурации на"
    ]
  },
  {
    "time": [
      39.0,
      44.0
    ],
    "en": [
      "each router let's get started I'll go on"
    ],
    "ru": [
      "каждый роутер давайте начнем я продолжу"
    ]
  },
  {
    "time": [
      44.0,
      53.0
    ],
    "en": [
      "r1 first enable show IP interface brief"
    ],
    "ru": [
      "r1 сначала включить отображение краткого описания IP-интерфейса"
    ]
  },
  {
    "time": [
      53.0,
      57.0
    ],
    "en": [
      "the tunnel interface is up down so it's"
    ],
    "ru": [
      "туннельный интерфейс не работает, поэтому он"
    ]
  },
  {
    "time": [
      57.0,
      61.0
    ],
    "en": [
      "not working notice the error message"
    ],
    "ru": [
      "не работает, обратите внимание на сообщение об ошибке"
    ]
  },
  {
    "time": [
      61.0,
      65.0
    ],
    "en": [
      "we're getting temporarily disabled due"
    ],
    "ru": [
      "мы временно отключены из-за"
    ]
  },
  {
    "time": [
      65.0,
      68.0
    ],
    "en": [
      "to recursive routing this is a common"
    ],
    "ru": [
      "для рекурсивной маршрутизации это обычная"
    ]
  },
  {
    "time": [
      68.0,
      72.0
    ],
    "en": [
      "problem in tunnel configuration show"
    ],
    "ru": [
      "проблема в показе конфигурации туннеля"
    ]
  },
  {
    "time": [
      72.0,
      76.0
    ],
    "en": [
      "interface tunnel 0 tunnel source of"
    ],
    "ru": [
      "интерфейс туннель 0 туннель источник"
    ]
  },
  {
    "time": [
      76.0,
      80.0
    ],
    "en": [
      "serial zero zero zero is okay but look"
    ],
    "ru": [
      "серийный ноль ноль ноль в порядке, но посмотрите"
    ]
  },
  {
    "time": [
      80.0,
      83.0
    ],
    "en": [
      "at the destination the destination has"
    ],
    "ru": [
      "в пункте назначения в пункте назначения есть"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "to be the address of the physical"
    ],
    "ru": [
      "быть адресом физического"
    ]
  },
  {
    "time": [
      85.0,
      87.0
    ],
    "en": [
      "interface which is at the other end of"
    ],
    "ru": [
      "интерфейс, который находится на другом конце"
    ]
  },
  {
    "time": [
      87.0,
      89.0
    ],
    "en": [
      "the tunnel not the tunnels address"
    ],
    "ru": [
      "туннель, а не адрес туннелей"
    ]
  },
  {
    "time": [
      89.0,
      92.0
    ],
    "en": [
      "itself that's what's causing the"
    ],
    "ru": [
      "это то, что вызывает"
    ]
  },
  {
    "time": [
      92.0,
      98.0
    ],
    "en": [
      "recursive routing error message call T"
    ],
    "ru": [
      "сообщение об ошибке рекурсивной маршрутизации вызов T"
    ]
  },
  {
    "time": [
      98.0,
      103.0
    ],
    "en": [
      "interface tunnel zero tunnel destination"
    ],
    "ru": [
      "интерфейсный туннель нулевой туннель назначения"
    ]
  },
  {
    "time": [
      103.0,
      109.0
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
      103.0,
      109.0
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
      109.0,
      113.0
    ],
    "en": [
      "error messages let's check the AIG RP"
    ],
    "ru": [
      "сообщения об ошибках давайте проверим AIG RP"
    ]
  },
  {
    "time": [
      113.0,
      117.0
    ],
    "en": [
      "configuration here to do show IP"
    ],
    "ru": [
      "конфигурация здесь, чтобы показать IP"
    ]
  },
  {
    "time": [
      117.0,
      125.0
    ],
    "en": [
      "protocols routing for networks 1001 0/24"
    ],
    "ru": [
      "протоколы маршрутизации для сетей 1001 0/24"
    ]
  },
  {
    "time": [
      125.0,
      131.0
    ],
    "en": [
      "and 100 0 0 / 30 there's a problem"
    ],
    "ru": [
      "и 100 0 0/30 есть проблема"
    ]
  },
  {
    "time": [
      131.0,
      134.0
    ],
    "en": [
      "we want to activate a idrp on the G zero"
    ],
    "ru": [
      "мы хотим активировать idrp на нулевом G"
    ]
  },
  {
    "time": [
      134.0,
      137.0
    ],
    "en": [
      "zero interface which we are and the"
    ],
    "ru": [
      "нулевой интерфейс, которым мы являемся, и"
    ]
  },
  {
    "time": [
      137.0,
      143.0
    ],
    "en": [
      "tunnel interface 100 euro / 30 which is"
    ],
    "ru": [
      "туннельный интерфейс 100 евро / 30, что"
    ]
  },
  {
    "time": [
      143.0,
      146.0
    ],
    "en": [
      "the s zero zero zero interface isn't the"
    ],
    "ru": [
      "интерфейс s zero zero zero не является"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "tunnel interface it's the tunnel source"
    ],
    "ru": [
      "туннельный интерфейс это туннельный источник"
    ]
  },
  {
    "time": [
      149.0,
      156.0
    ],
    "en": [
      "let's change that router ew g RP 100 no"
    ],
    "ru": [
      "давайте поменяем роутер ew g RP 100 нет"
    ]
  },
  {
    "time": [
      156.0,
      163.0
    ],
    "en": [
      "network 100 oh oh oh oh oh three network"
    ],
    "ru": [
      "сеть 100 ой ой ой ой три сети"
    ]
  },
  {
    "time": [
      163.0,
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
      163.0,
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
      174.0
    ],
    "en": [
      "solved two problems here on our one"
    ],
    "ru": [
      "решил две проблемы здесь на нашей"
    ]
  },
  {
    "time": [
      174.0,
      176.0
    ],
    "en": [
      "however there are still problems on our"
    ],
    "ru": [
      "однако на нашем"
    ]
  },
  {
    "time": [
      176.0,
      180.0
    ],
    "en": [
      "two so our tunnel won't be working yet"
    ],
    "ru": [
      "два, так что наш туннель еще не будет работать"
    ]
  },
  {
    "time": [
      180.0,
      188.0
    ],
    "en": [
      "let's go on our to enable I'll quickly"
    ],
    "ru": [
      "давай продолжим, чтобы я быстро"
    ]
  },
  {
    "time": [
      188.0,
      190.0
    ],
    "en": [
      "check the EIG RP configuration here on"
    ],
    "ru": [
      "проверьте конфигурацию EIG RP здесь на"
    ]
  },
  {
    "time": [
      190.0,
      195.0
    ],
    "en": [
      "our to show IP protocols"
    ],
    "ru": [
      "наш, чтобы показать протоколы IP"
    ]
  },
  {
    "time": [
      195.0,
      201.0
    ],
    "en": [
      "EW GFP is activated for 1002 0/24 which"
    ],
    "ru": [
      "EW GFP активирован для 1002 0/24, что"
    ]
  },
  {
    "time": [
      201.0,
      207.0
    ],
    "en": [
      "is G 0 0 and 192.168.1.0 / 30 which is"
    ],
    "ru": [
      "это G 0 0 и 192.168.1.0 / 30, что является"
    ]
  },
  {
    "time": [
      207.0,
      210.0
    ],
    "en": [
      "the tunnel interface so the AI g RP"
    ],
    "ru": [
      "интерфейс туннеля, поэтому AI g RP"
    ]
  },
  {
    "time": [
      210.0,
      214.0
    ],
    "en": [
      "configuration looks good let's check the"
    ],
    "ru": [
      "конфигурация выглядит хорошо, давайте проверим"
    ]
  },
  {
    "time": [
      214.0,
      220.0
    ],
    "en": [
      "tunnel show interface Tunnel zero the"
    ],
    "ru": [
      "туннель показать интерфейс Tunnel zero the"
    ]
  },
  {
    "time": [
      220.0,
      223.0
    ],
    "en": [
      "tunnel destination is correct but the"
    ],
    "ru": [
      "пункт назначения туннеля правильный, но"
    ]
  },
  {
    "time": [
      223.0,
      226.0
    ],
    "en": [
      "source isn't the tunnel source is the"
    ],
    "ru": [
      "источник не туннель источник - это"
    ]
  },
  {
    "time": [
      226.0,
      229.0
    ],
    "en": [
      "inside interface Gigabit Ethernet 0 0"
    ],
    "ru": [
      "внутренний интерфейс Gigabit Ethernet 0 0"
    ]
  },
  {
    "time": [
      229.0,
      232.0
    ],
    "en": [
      "but it should be the interface connected"
    ],
    "ru": [
      "но это должен быть интерфейс, подключенный"
    ]
  },
  {
    "time": [
      232.0,
      236.0
    ],
    "en": [
      "to the service provider serial 0 0 0"
    ],
    "ru": [
      "на номер оператора связи 0 0 0"
    ]
  },
  {
    "time": [
      236.0,
      242.0
    ],
    "en": [
      "Koff t interface tunnel 0 tunnel source"
    ],
    "ru": [
      "Кофф t интерфейс туннель 0 туннель источник"
    ]
  },
  {
    "time": [
      242.0,
      250.0
    ],
    "en": [
      "s 0 0 0 do show IP interface brief the"
    ],
    "ru": [
      "s 0 0 0 показывать IP-интерфейс кратко"
    ]
  },
  {
    "time": [
      250.0,
      254.0
    ],
    "en": [
      "tunnel still isn't up let's check one"
    ],
    "ru": [
      "туннель все еще не работает, давайте проверим один"
    ]
  },
  {
    "time": [
      254.0,
      261.0
    ],
    "en": [
      "other important thing do show IP route"
    ],
    "ru": [
      "другая важная вещь показывает IP-маршрут"
    ]
  },
  {
    "time": [
      261.0,
      264.0
    ],
    "en": [
      "there is no route allowing us to reach"
    ],
    "ru": [
      "нет маршрута, позволяющего нам добраться"
    ]
  },
  {
    "time": [
      264.0,
      267.0
    ],
    "en": [
      "the tunnel destination of 100 oh oh -"
    ],
    "ru": [
      "туннель назначения 100 ой ой -"
    ]
  },
  {
    "time": [
      267.0,
      270.0
    ],
    "en": [
      "remember the tunnel destination address"
    ],
    "ru": [
      "запомнить адрес назначения туннеля"
    ]
  },
  {
    "time": [
      270.0,
      273.0
    ],
    "en": [
      "must be reachable let's configure a"
    ],
    "ru": [
      "должен быть доступен, давайте настроим"
    ]
  },
  {
    "time": [
      273.0,
      275.0
    ],
    "en": [
      "static default route pointing to the"
    ],
    "ru": [
      "статический маршрут по умолчанию, указывающий на"
    ]
  },
  {
    "time": [
      275.0,
      282.0
    ],
    "en": [
      "service provider exit IP route oh oh oh"
    ],
    "ru": [
      "поставщик услуг выход IP-маршрута ой ой ой"
    ]
  },
  {
    "time": [
      282.0,
      290.0
    ],
    "en": [
      "oh oh oh oh oh 201 do show IP interface"
    ],
    "ru": [
      "ой ой ой ой ой 201 показать IP интерфейс"
    ]
  },
  {
    "time": [
      290.0,
      295.0
    ],
    "en": [
      "brief okay looks like it's up now let's"
    ],
    "ru": [
      "кратко, ладно, похоже, все кончено, давай"
    ]
  },
  {
    "time": [
      295.0,
      300.0
    ],
    "en": [
      "try to ping the other end do ping"
    ],
    "ru": [
      "попробуйте пинговать другой конец сделать пинг"
    ]
  },
  {
    "time": [
      300.0,
      308.0
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
      300.0,
      308.0
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
      308.0,
      311.0
    ],
    "en": [
      "now are we getting the EIG our peer out"
    ],
    "ru": [
      "теперь мы выводим EIG, наш сверстник"
    ]
  },
  {
    "time": [
      311.0,
      315.0
    ],
    "en": [
      "to our ones internal network do show IP"
    ],
    "ru": [
      "в нашу внутреннюю сеть действительно показывает IP"
    ]
  },
  {
    "time": [
      315.0,
      323.0
    ],
    "en": [
      "route there it is 1001 Oh finally let's"
    ],
    "ru": [
      "маршрут вот он 1001 ну наконец давай"
    ]
  },
  {
    "time": [
      323.0,
      332.0
    ],
    "en": [
      "try a ping from PC to 2 PC one ting 1001"
    ],
    "ru": [
      "попробуйте пинг с ПК на 2 ПК один тинг 1001"
    ]
  },
  {
    "time": [
      332.0,
      343.0
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
      343.0,
      346.0
    ],
    "en": [
      "okay our ping worked we have solved the"
    ],
    "ru": [
      "хорошо, наш пинг сработал, мы решили"
    ]
  },
  {
    "time": [
      346.0,
      349.0
    ],
    "en": [
      "issues and fixed the GRE tunnel that's"
    ],
    "ru": [
      "проблемы и исправил туннель GRE, который"
    ]
  },
  {
    "time": [
      349.0,
      355.0
    ],
    "en": [
      "all for this lab thank you for watching"
    ],
    "ru": [
      "всем для этой лаборатории спасибо за просмотр"
    ]
  },
  {
    "time": [
      355.0,
      358.0
    ],
    "en": [
      "I hope this lab and video have been"
    ],
    "ru": [
      "Я надеюсь, что эта лабораторная работа и видео были"
    ]
  },
  {
    "time": [
      358.0,
      360.0
    ],
    "en": [
      "helpful for you please subscribe for"
    ],
    "ru": [
      "полезно для вас, пожалуйста, подпишитесь на"
    ]
  },
  {
    "time": [
      360.0,
      362.0
    ],
    "en": [
      "future labs like this which will be"
    ],
    "ru": [
      "будущие лаборатории, подобные этой, которые будут"
    ]
  },
  {
    "time": [
      362.0,
      366.0
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
      366.0,
      368.0
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
      368.0,
      371.0
    ],
    "en": [
      "comment section if you want to support"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      371.0,
      373.0
    ],
    "en": [
      "my channel I accept Bitcoin and"
    ],
    "ru": [
      "мой канал я принимаю биткойны и"
    ]
  },
  {
    "time": [
      373.0,
      375.0
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
      375.0,
      379.0
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
      379.0,
      381.0
    ],
    "en": [
      "verified publisher and accept bat or"
    ],
    "ru": [
      "проверенный издатель и принять bat или"
    ]
  },
  {
    "time": [
      381.0,
      384.0
    ],
    "en": [
      "basic attention token donations in the"
    ],
    "ru": [
      "основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      384.0,
      384.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]