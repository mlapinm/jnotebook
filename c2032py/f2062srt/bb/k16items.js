let objs = [
  {
    "time": [
      1.0,
      4.0
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
      4.0,
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
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      9.0,
      12.0
    ],
    "en": [
      "this lab we will configure loopback"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим loopback"
    ]
  },
  {
    "time": [
      12.0,
      16.0
    ],
    "en": [
      "interfaces on two routers r1 and r2"
    ],
    "ru": [
      "интерфейсы на двух маршрутизаторах r1 и r2"
    ]
  },
  {
    "time": [
      16.0,
      19.0
    ],
    "en": [
      "loopback interfaces are logical"
    ],
    "ru": [
      "петлевые интерфейсы логичны"
    ]
  },
  {
    "time": [
      19.0,
      22.0
    ],
    "en": [
      "interfaces meaning that they are not"
    ],
    "ru": [
      "интерфейсы, означающие, что они не"
    ]
  },
  {
    "time": [
      22.0,
      24.0
    ],
    "en": [
      "interfaces that physically exist on the"
    ],
    "ru": [
      "интерфейсы, которые физически существуют на"
    ]
  },
  {
    "time": [
      24.0,
      27.0
    ],
    "en": [
      "router they can be used for testing"
    ],
    "ru": [
      "роутер их можно использовать для тестирования"
    ]
  },
  {
    "time": [
      27.0,
      31.0
    ],
    "en": [
      "purposes among others another important"
    ],
    "ru": [
      "целей среди прочего еще одно важное"
    ]
  },
  {
    "time": [
      31.0,
      32.0
    ],
    "en": [
      "characteristic is that a loopback"
    ],
    "ru": [
      "характеристика заключается в том, что петлевой"
    ]
  },
  {
    "time": [
      32.0,
      34.0
    ],
    "en": [
      "interface never goes down unlike a"
    ],
    "ru": [
      "интерфейс никогда не выходит из строя в отличие от"
    ]
  },
  {
    "time": [
      34.0,
      37.0
    ],
    "en": [
      "physical interface which can fail"
    ],
    "ru": [
      "физический интерфейс, который может выйти из строя"
    ]
  },
  {
    "time": [
      37.0,
      40.0
    ],
    "en": [
      "loopback interfaces are something we'll"
    ],
    "ru": [
      "петлевые интерфейсы - это то, что мы"
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "be using a lot in future labs so I want"
    ],
    "ru": [
      "много использовать в будущих лабораториях, поэтому я хочу"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "to use this simple lab to introduce them"
    ],
    "ru": [
      "использовать эту простую лабораторную работу, чтобы познакомить их"
    ]
  },
  {
    "time": [
      45.0,
      47.0
    ],
    "en": [
      "try to complete the lab on your own"
    ],
    "ru": [
      "попробуйте пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      47.0,
      49.0
    ],
    "en": [
      "first then continue watching this video"
    ],
    "ru": [
      "сначала продолжайте смотреть это видео"
    ]
  },
  {
    "time": [
      49.0,
      52.0
    ],
    "en": [
      "if you have trouble or watch it after to"
    ],
    "ru": [
      "если у вас возникнут проблемы или посмотрите это после"
    ]
  },
  {
    "time": [
      52.0,
      58.0
    ],
    "en": [
      "check your solution"
    ],
    "ru": [
      "проверьте свое решение"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "step one is to set the IP addresses of"
    ],
    "ru": [
      "Шаг первый - установить IP-адреса"
    ]
  },
  {
    "time": [
      61.0,
      63.0
    ],
    "en": [
      "the interfaces connecting the two"
    ],
    "ru": [
      "интерфейсы, соединяющие два"
    ]
  },
  {
    "time": [
      63.0,
      67.0
    ],
    "en": [
      "routers and to enable them let's hop on"
    ],
    "ru": [
      "маршрутизаторы, и чтобы включить их, давайте перейдем к"
    ]
  },
  {
    "time": [
      67.0,
      75.0
    ],
    "en": [
      "our one first enable compte both routers"
    ],
    "ru": [
      "наш один первый включить оба маршрутизатора"
    ]
  },
  {
    "time": [
      75.0,
      77.0
    ],
    "en": [
      "are connected using their gig 0 0"
    ],
    "ru": [
      "подключены с помощью своего концерта 0 0"
    ]
  },
  {
    "time": [
      77.0,
      83.0
    ],
    "en": [
      "interfaces so interface gig 0 0 now"
    ],
    "ru": [
      "интерфейсы так интерфейс гиг 0 0 сейчас"
    ]
  },
  {
    "time": [
      83.0,
      86.0
    ],
    "en": [
      "let's set the IP address IP address"
    ],
    "ru": [
      "давайте установим IP-адрес IP-адрес"
    ]
  },
  {
    "time": [
      86.0,
      91.0
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
      86.0,
      91.0
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
      91.0,
      97.0
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
      91.0,
      97.0
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
      97.0,
      100.0
    ],
    "en": [
      "the interface no shutdown there we go"
    ],
    "ru": [
      "интерфейс без выключения поехали"
    ]
  },
  {
    "time": [
      100.0,
      106.0
    ],
    "en": [
      "our one is done now let's go to our to"
    ],
    "ru": [
      "наш готов, теперь давайте перейдем к нашему"
    ]
  },
  {
    "time": [
      106.0,
      113.0
    ],
    "en": [
      "enable compte interface g00 IP address"
    ],
    "ru": [
      "включить IP-адрес g00 интерфейса compte"
    ]
  },
  {
    "time": [
      113.0,
      123.0
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
      113.0,
      123.0
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
      123.0,
      132.0
    ],
    "en": [
      "ping to check do ping 192.168.1.1 the"
    ],
    "ru": [
      "пинг для проверки сделать пинг 192.168.1.1"
    ]
  },
  {
    "time": [
      132.0,
      136.0
    ],
    "en": [
      "ping works step 2 is to create a"
    ],
    "ru": [
      "ping works шаг 2 - создать"
    ]
  },
  {
    "time": [
      136.0,
      140.0
    ],
    "en": [
      "loopback interface on each router 1.1.11"
    ],
    "ru": [
      "петлевой интерфейс на каждом маршрутизаторе 1.1.11"
    ]
  },
  {
    "time": [
      140.0,
      146.0
    ],
    "en": [
      "on our 1 & 2 - 2 - on our 2 they should"
    ],
    "ru": [
      "на наших 1 и 2 - 2 - на нашем 2 они должны"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "each use a / 32 subnet mask which is"
    ],
    "ru": [
      "каждый использует маску подсети / 32, которая"
    ]
  },
  {
    "time": [
      149.0,
      156.0
    ],
    "en": [
      "equivalent to 255 dot 255 255 255 ok"
    ],
    "ru": [
      "эквивалент 255 точек 255 255 255 ок"
    ]
  },
  {
    "time": [
      156.0,
      159.0
    ],
    "en": [
      "let's go on our one to create a loopback"
    ],
    "ru": [
      "давайте перейдем к нашему, чтобы создать петлю"
    ]
  },
  {
    "time": [
      159.0,
      162.0
    ],
    "en": [
      "interface just enter interface"
    ],
    "ru": [
      "интерфейс просто войдите в интерфейс"
    ]
  },
  {
    "time": [
      162.0,
      164.0
    ],
    "en": [
      "configuration mode for the loopback"
    ],
    "ru": [
      "режим конфигурации для петли"
    ]
  },
  {
    "time": [
      164.0,
      169.0
    ],
    "en": [
      "interface interface loopback 0 note that"
    ],
    "ru": [
      "interface interface loopback 0 обратите внимание, что"
    ]
  },
  {
    "time": [
      169.0,
      173.0
    ],
    "en": [
      "you can shorten it to interface l 0 so"
    ],
    "ru": [
      "вы можете сократить его до интерфейса l 0, чтобы"
    ]
  },
  {
    "time": [
      173.0,
      174.0
    ],
    "en": [
      "we have now created the loopback"
    ],
    "ru": [
      "мы создали петлю"
    ]
  },
  {
    "time": [
      174.0,
      177.0
    ],
    "en": [
      "interface the loopback interface is up"
    ],
    "ru": [
      "интерфейс петлевой интерфейс включен"
    ]
  },
  {
    "time": [
      177.0,
      179.0
    ],
    "en": [
      "by default and will never go down"
    ],
    "ru": [
      "по умолчанию и никогда не опустится"
    ]
  },
  {
    "time": [
      179.0,
      182.0
    ],
    "en": [
      "however you can still issue the shutdown"
    ],
    "ru": [
      "однако вы все равно можете вызвать выключение"
    ]
  },
  {
    "time": [
      182.0,
      184.0
    ],
    "en": [
      "command to administrative lead issei"
    ],
    "ru": [
      "команда к административному руководителю issei"
    ]
  },
  {
    "time": [
      184.0,
      188.0
    ],
    "en": [
      "belit now let's set the IP address IP"
    ],
    "ru": [
      "belit теперь давайте установим IP-адрес IP"
    ]
  },
  {
    "time": [
      188.0,
      191.0
    ],
    "en": [
      "address 1.1 1.1"
    ],
    "ru": [
      "адрес 1.1 1.1"
    ]
  },
  {
    "time": [
      191.0,
      197.0
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
      191.0,
      197.0
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
      197.0,
      207.0
    ],
    "en": [
      "to interface l0 IP address 2 2 2 2 255"
    ],
    "ru": [
      "к интерфейсу l0 IP-адрес 2 2 2 2255"
    ]
  },
  {
    "time": [
      207.0,
      212.0
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
      207.0,
      212.0
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
      212.0,
      217.0
    ],
    "en": [
      "a loopback interface on each device"
    ],
    "ru": [
      "петлевой интерфейс на каждом устройстве"
    ]
  },
  {
    "time": [
      217.0,
      220.0
    ],
    "en": [
      "step three is to ping both the local"
    ],
    "ru": [
      "Шаг третий - пинговать оба локальных"
    ]
  },
  {
    "time": [
      220.0,
      222.0
    ],
    "en": [
      "loopback interface and the loopback"
    ],
    "ru": [
      "шлейфовый интерфейс и шлейф"
    ]
  },
  {
    "time": [
      222.0,
      224.0
    ],
    "en": [
      "interface of the remote device from each"
    ],
    "ru": [
      "интерфейс удаленного устройства с каждого"
    ]
  },
  {
    "time": [
      224.0,
      227.0
    ],
    "en": [
      "router the router should be able to ping"
    ],
    "ru": [
      "маршрутизатор маршрутизатор должен иметь возможность пинговать"
    ]
  },
  {
    "time": [
      227.0,
      229.0
    ],
    "en": [
      "its own loopback interface with no"
    ],
    "ru": [
      "собственный петлевой интерфейс без"
    ]
  },
  {
    "time": [
      229.0,
      232.0
    ],
    "en": [
      "issues by default however it has no way"
    ],
    "ru": [
      "проблемы по умолчанию, но у него нет возможности"
    ]
  },
  {
    "time": [
      232.0,
      234.0
    ],
    "en": [
      "of knowing about the loopback interface"
    ],
    "ru": [
      "знания о петлевом интерфейсе"
    ]
  },
  {
    "time": [
      234.0,
      238.0
    ],
    "en": [
      "of the remote router by default the"
    ],
    "ru": [
      "удаленного маршрутизатора по умолчанию"
    ]
  },
  {
    "time": [
      238.0,
      239.0
    ],
    "en": [
      "routers can pin each other's physical"
    ],
    "ru": [
      "маршрутизаторы могут закреплять друг друга на физическом"
    ]
  },
  {
    "time": [
      239.0,
      241.0
    ],
    "en": [
      "interfaces because they are part of a"
    ],
    "ru": [
      "интерфейсы, потому что они являются частью"
    ]
  },
  {
    "time": [
      241.0,
      243.0
    ],
    "en": [
      "connected network which they share"
    ],
    "ru": [
      "подключенная сеть, которую они разделяют"
    ]
  },
  {
    "time": [
      243.0,
      246.0
    ],
    "en": [
      "however the loopback interfaces are on"
    ],
    "ru": [
      "однако интерфейсы обратной связи включены"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "separate networks because we haven't"
    ],
    "ru": [
      "отдельные сети, потому что у нас нет"
    ]
  },
  {
    "time": [
      249.0,
      251.0
    ],
    "en": [
      "done any labs for IP ropes yet I"
    ],
    "ru": [
      "сделал какие-либо лабораторные работы для IP-тросов, но я"
    ]
  },
  {
    "time": [
      251.0,
      253.0
    ],
    "en": [
      "pre-configured static routes on each"
    ],
    "ru": [
      "предварительно настроенные статические маршруты на каждом"
    ]
  },
  {
    "time": [
      253.0,
      257.0
    ],
    "en": [
      "router beforehand this isn't a topic for"
    ],
    "ru": [
      "маршрутизатор заранее это не тема для"
    ]
  },
  {
    "time": [
      257.0,
      259.0
    ],
    "en": [
      "this lab but let me show you the IP"
    ],
    "ru": [
      "эта лаборатория, но позвольте мне показать вам IP"
    ]
  },
  {
    "time": [
      259.0,
      266.0
    ],
    "en": [
      "route table let me hop on r1 and show IP"
    ],
    "ru": [
      "таблица маршрутов позволяет мне перейти на r1 и показать IP"
    ]
  },
  {
    "time": [
      266.0,
      271.0
    ],
    "en": [
      "route you see here the C indicating"
    ],
    "ru": [
      "маршрут, который вы видите здесь, C указывает"
    ]
  },
  {
    "time": [
      271.0,
      275.0
    ],
    "en": [
      "connected of the 192.168.1.0 Network and"
    ],
    "ru": [
      "подключен к сети 192.168.1.0 и"
    ]
  },
  {
    "time": [
      275.0,
      279.0
    ],
    "en": [
      "the l indicating local of the"
    ],
    "ru": [
      "l указывает на местный"
    ]
  },
  {
    "time": [
      279.0,
      281.0
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
      279.0,
      281.0
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
      281.0,
      285.0
    ],
    "en": [
      "gig 0/0 interface above that is an S"
    ],
    "ru": [
      "gig 0/0 интерфейс выше, это S"
    ]
  },
  {
    "time": [
      285.0,
      288.0
    ],
    "en": [
      "indicating static this is the route I"
    ],
    "ru": [
      "с указанием статики это маршрут I"
    ]
  },
  {
    "time": [
      288.0,
      292.0
    ],
    "en": [
      "pre-configured to the loopback of r2"
    ],
    "ru": [
      "предварительно настроен на шлейф r2"
    ]
  },
  {
    "time": [
      292.0,
      294.0
    ],
    "en": [
      "also at the top is the loopback here on"
    ],
    "ru": [
      "также вверху находится петля здесь, на"
    ]
  },
  {
    "time": [
      294.0,
      299.0
    ],
    "en": [
      "r1 now let's try the pings which both"
    ],
    "ru": [
      "r1 теперь давайте попробуем пинги, которые оба"
    ]
  },
  {
    "time": [
      299.0,
      302.0
    ],
    "en": [
      "should be successful first the local"
    ],
    "ru": [
      "должен быть успешным сначала местный"
    ]
  },
  {
    "time": [
      302.0,
      308.0
    ],
    "en": [
      "loopback ping 1.1.11"
    ],
    "ru": [
      "шлейфовый пинг 1.1.11"
    ]
  },
  {
    "time": [
      308.0,
      316.0
    ],
    "en": [
      "it works now our twos ping - - - - it"
    ],
    "ru": [
      "теперь работает наши двойки пинг - - - - это"
    ]
  },
  {
    "time": [
      316.0,
      318.0
    ],
    "en": [
      "works as well now let's do the same on"
    ],
    "ru": [
      "работает, теперь давайте сделаем то же самое на"
    ]
  },
  {
    "time": [
      318.0,
      322.0
    ],
    "en": [
      "our two end"
    ],
    "ru": [
      "наши два конца"
    ]
  },
  {
    "time": [
      322.0,
      333.0
    ],
    "en": [
      "ping - two - - it works ping 1.1.11 it"
    ],
    "ru": [
      "пинг - два - - работает пинг 1.1.11 это"
    ]
  },
  {
    "time": [
      333.0,
      338.0
    ],
    "en": [
      "works as well"
    ],
    "ru": [
      "тоже работает"
    ]
  },
  {
    "time": [
      338.0,
      341.0
    ],
    "en": [
      "step four is to remove the loopback"
    ],
    "ru": [
      "Шаг четвертый - удалить петлю"
    ]
  },
  {
    "time": [
      341.0,
      344.0
    ],
    "en": [
      "interfaces this is just to point out a"
    ],
    "ru": [
      "интерфейсы, это просто указать на"
    ]
  },
  {
    "time": [
      344.0,
      346.0
    ],
    "en": [
      "difference between physical interfaces"
    ],
    "ru": [
      "разница между физическими интерфейсами"
    ]
  },
  {
    "time": [
      346.0,
      349.0
    ],
    "en": [
      "and loopback interfaces you can't delete"
    ],
    "ru": [
      "и интерфейсы обратной связи, которые нельзя удалить"
    ]
  },
  {
    "time": [
      349.0,
      351.0
    ],
    "en": [
      "a physical interface using the command"
    ],
    "ru": [
      "физический интерфейс с помощью команды"
    ]
  },
  {
    "time": [
      351.0,
      355.0
    ],
    "en": [
      "line let's confirm that first on our two"
    ],
    "ru": [
      "строка, давайте подтвердим, что сначала на наших двух"
    ]
  },
  {
    "time": [
      355.0,
      362.0
    ],
    "en": [
      "conf T no interface G zero zero we get"
    ],
    "ru": [
      "conf T no interface G zero zero получаем"
    ]
  },
  {
    "time": [
      362.0,
      362.0
    ],
    "en": [
      "the message"
    ],
    "ru": [
      "сообщение"
    ]
  },
  {
    "time": [
      362.0,
      365.0
    ],
    "en": [
      "removal of physical interfaces is not"
    ],
    "ru": [
      "удаление физических интерфейсов не"
    ]
  },
  {
    "time": [
      365.0,
      368.0
    ],
    "en": [
      "permitted now let's do the same thing ad"
    ],
    "ru": [
      "разрешено, теперь давайте сделаем то же самое объявление"
    ]
  },
  {
    "time": [
      368.0,
      370.0
    ],
    "en": [
      "no in front of the interface command for"
    ],
    "ru": [
      "нет перед командой интерфейса для"
    ]
  },
  {
    "time": [
      370.0,
      374.0
    ],
    "en": [
      "loopback zero first however let's use"
    ],
    "ru": [
      "сначала нулевой шлейф, но давайте воспользуемся"
    ]
  },
  {
    "time": [
      374.0,
      378.0
    ],
    "en": [
      "the do show IP interface brief command"
    ],
    "ru": [
      "краткая команда do show IP interface"
    ]
  },
  {
    "time": [
      378.0,
      380.0
    ],
    "en": [
      "there is gig zero zero which we were"
    ],
    "ru": [
      "есть концерт ноль ноль, который мы были"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "unable to delete before and loopback"
    ],
    "ru": [
      "невозможно удалить до и петля"
    ]
  },
  {
    "time": [
      383.0,
      387.0
    ],
    "en": [
      "zero now let's try to delete it no"
    ],
    "ru": [
      "ноль сейчас попробуем удалить нет"
    ]
  },
  {
    "time": [
      387.0,
      392.0
    ],
    "en": [
      "interface l0 do show IP interface brief"
    ],
    "ru": [
      "interface l0 показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      392.0,
      396.0
    ],
    "en": [
      "as you can see we are able to delete"
    ],
    "ru": [
      "как видите, мы можем удалить"
    ]
  },
  {
    "time": [
      396.0,
      399.0
    ],
    "en": [
      "loopback interfaces and loop X zero is"
    ],
    "ru": [
      "шлейфовые интерфейсы и ноль цикла X"
    ]
  },
  {
    "time": [
      399.0,
      402.0
    ],
    "en": [
      "no longer listed here let's do the same"
    ],
    "ru": [
      "здесь больше нет, давайте сделаем то же самое"
    ]
  },
  {
    "time": [
      402.0,
      408.0
    ],
    "en": [
      "on r1 show IP interface brief there's"
    ],
    "ru": [
      "на r1 показать краткое описание IP-интерфейса есть"
    ]
  },
  {
    "time": [
      408.0,
      415.0
    ],
    "en": [
      "loopback zero compte no interface l0 do"
    ],
    "ru": [
      "loopback ноль compte без интерфейса l0 do"
    ]
  },
  {
    "time": [
      415.0,
      418.0
    ],
    "en": [
      "show IP interface brief we have"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса у нас есть"
    ]
  },
  {
    "time": [
      418.0,
      420.0
    ],
    "en": [
      "successfully removed the loopback"
    ],
    "ru": [
      "успешно удалена петля"
    ]
  },
  {
    "time": [
      420.0,
      422.0
    ],
    "en": [
      "interface of each router that's all for"
    ],
    "ru": [
      "интерфейс каждого роутера, все для"
    ]
  },
  {
    "time": [
      422.0,
      425.0
    ],
    "en": [
      "this lab"
    ],
    "ru": [
      "эта лаборатория"
    ]
  },
  {
    "time": [
      425.0,
      427.0
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
      427.0,
      429.0
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
      429.0,
      431.0
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
      431.0,
      435.0
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
      435.0,
      436.0
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
      436.0,
      439.0
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
      439.0,
      442.0
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
      442.0,
      444.0
    ],
    "en": [
      "Bitcoin and etherion donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфирионов через"
    ]
  },
  {
    "time": [
      444.0,
      448.0
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
      448.0,
      450.0
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
      450.0,
      453.0
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
      453.0,
      453.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]