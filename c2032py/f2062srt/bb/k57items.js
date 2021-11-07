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
      22.0
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
      22.0,
      25.0
    ],
    "en": [
      "lab we will configure OSPF version 3"
    ],
    "ru": [
      "lab настроим OSPF версии 3"
    ]
  },
  {
    "time": [
      25.0,
      28.0
    ],
    "en": [
      "until now the OSPF we have been"
    ],
    "ru": [
      "до сих пор мы были OSPF"
    ]
  },
  {
    "time": [
      28.0,
      33.0
    ],
    "en": [
      "configuring is OSPF version 2 OSPF"
    ],
    "ru": [
      "настройка OSPF версии 2 OSPF"
    ]
  },
  {
    "time": [
      33.0,
      38.0
    ],
    "en": [
      "version 3 however is used with ipv6 the"
    ],
    "ru": [
      "версия 3, однако, используется с ipv6"
    ]
  },
  {
    "time": [
      38.0,
      40.0
    ],
    "en": [
      "configuration is largely similar with"
    ],
    "ru": [
      "конфигурация во многом схожа с"
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "one major difference that actually makes"
    ],
    "ru": [
      "одно важное отличие, которое на самом деле делает"
    ]
  },
  {
    "time": [
      42.0,
      46.0
    ],
    "en": [
      "OSPF v3 simpler to configure let's get"
    ],
    "ru": [
      "OSPF v3 проще в настройке, давайте"
    ]
  },
  {
    "time": [
      46.0,
      50.0
    ],
    "en": [
      "started the first step is to create"
    ],
    "ru": [
      "начал первый шаг - создать"
    ]
  },
  {
    "time": [
      50.0,
      53.0
    ],
    "en": [
      "loopback interfaces on each router these"
    ],
    "ru": [
      "петлевые интерфейсы на каждом маршрутизаторе эти"
    ]
  },
  {
    "time": [
      53.0,
      56.0
    ],
    "en": [
      "will become the router ID for OSPF"
    ],
    "ru": [
      "станет идентификатором маршрутизатора для OSPF"
    ]
  },
  {
    "time": [
      56.0,
      61.0
    ],
    "en": [
      "although OSPF v3 is used with ipv6 the"
    ],
    "ru": [
      "хотя OSPF v3 используется с ipv6,"
    ]
  },
  {
    "time": [
      61.0,
      63.0
    ],
    "en": [
      "router ID still comes in the form of an"
    ],
    "ru": [
      "идентификатор маршрутизатора по-прежнему представлен в виде"
    ]
  },
  {
    "time": [
      63.0,
      67.0
    ],
    "en": [
      "ipv4 address that is a 32-bit number in"
    ],
    "ru": [
      "IPv4-адрес, который представляет собой 32-битное число в"
    ]
  },
  {
    "time": [
      67.0,
      69.0
    ],
    "en": [
      "dotted decimal format"
    ],
    "ru": [
      "десятичный формат с разделительными точками"
    ]
  },
  {
    "time": [
      69.0,
      74.0
    ],
    "en": [
      "same with OSPF v to the router ID can be"
    ],
    "ru": [
      "то же самое с OSPF v для идентификатора маршрутизатора может быть"
    ]
  },
  {
    "time": [
      74.0,
      77.0
    ],
    "en": [
      "manually configured if it's not manually"
    ],
    "ru": [
      "настраивается вручную, если не вручную"
    ]
  },
  {
    "time": [
      77.0,
      80.0
    ],
    "en": [
      "configured the highest ipv4 address on"
    ],
    "ru": [
      "настроил наивысший адрес ipv4 на"
    ]
  },
  {
    "time": [
      80.0,
      83.0
    ],
    "en": [
      "the loopback interface will be used if"
    ],
    "ru": [
      "петлевой интерфейс будет использоваться, если"
    ]
  },
  {
    "time": [
      83.0,
      86.0
    ],
    "en": [
      "there is no loopback interface the"
    ],
    "ru": [
      "нет интерфейса обратной связи"
    ]
  },
  {
    "time": [
      86.0,
      88.0
    ],
    "en": [
      "highest ipv4 address on a regular"
    ],
    "ru": [
      "самый высокий IPv4-адрес на обычном"
    ]
  },
  {
    "time": [
      88.0,
      90.0
    ],
    "en": [
      "interface will be used let's quickly"
    ],
    "ru": [
      "интерфейс будет использоваться давайте быстро"
    ]
  },
  {
    "time": [
      90.0,
      95.0
    ],
    "en": [
      "make these loop backs on our one first"
    ],
    "ru": [
      "Сделайте эти петли на нашем первом"
    ]
  },
  {
    "time": [
      95.0,
      103.0
    ],
    "en": [
      "enable compte interface l0 IP address"
    ],
    "ru": [
      "включить compte interface l0 IP-адрес"
    ]
  },
  {
    "time": [
      103.0,
      114.0
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
      114.0
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
      114.0,
      120.0
    ],
    "en": [
      "enable compte interface l0 IP address 2"
    ],
    "ru": [
      "включить интерфейс compte l0 IP-адрес 2"
    ]
  },
  {
    "time": [
      120.0,
      131.0
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
      131.0
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
      131.0,
      136.0
    ],
    "en": [
      "enable coffee/tea interface l0 IP"
    ],
    "ru": [
      "включить интерфейс кофе / чая l0 IP"
    ]
  },
  {
    "time": [
      136.0,
      144.0
    ],
    "en": [
      "address 3 3 3 3 255 255 255 255 exit"
    ],
    "ru": [
      "адрес 3 3 3 3 255 255 255 255 255 выход"
    ]
  },
  {
    "time": [
      144.0,
      150.0
    ],
    "en": [
      "ok next are 4 enable coffee tea"
    ],
    "ru": [
      "хорошо, дальше 4 включить кофе чай"
    ]
  },
  {
    "time": [
      150.0,
      156.0
    ],
    "en": [
      "interface l0 IP address 4.4.4 for 255"
    ],
    "ru": [
      "интерфейс l0 IP-адрес 4.4.4 для 255"
    ]
  },
  {
    "time": [
      156.0,
      165.0
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
      156.0,
      165.0
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
      165.0,
      172.0
    ],
    "en": [
      "compte interface l0 IP address v dot v"
    ],
    "ru": [
      "интерфейс compte l0 IP-адрес v точка v"
    ]
  },
  {
    "time": [
      172.0,
      181.0
    ],
    "en": [
      "dot v dot v 255.255.255.0 all for step 1"
    ],
    "ru": [
      "dot v dot v 255.255.255.0 все для шага 1"
    ]
  },
  {
    "time": [
      181.0,
      185.0
    ],
    "en": [
      "now let's enable OSPF v3 on each router"
    ],
    "ru": [
      "теперь давайте включим OSPF v3 на каждом роутере"
    ]
  },
  {
    "time": [
      185.0,
      190.0
    ],
    "en": [
      "let's go back to our one to enter OSPF"
    ],
    "ru": [
      "вернемся к нашему, чтобы войти в OSPF"
    ]
  },
  {
    "time": [
      190.0,
      194.0
    ],
    "en": [
      "v3 configuration mode just type ipv6 in"
    ],
    "ru": [
      "режим конфигурации v3 просто введите ipv6 в"
    ]
  },
  {
    "time": [
      194.0,
      199.0
    ],
    "en": [
      "front of the regular OSPF command ipv6"
    ],
    "ru": [
      "перед обычной командой OSPF ipv6"
    ]
  },
  {
    "time": [
      199.0,
      205.0
    ],
    "en": [
      "router OSPF one however in OSPF v3 we"
    ],
    "ru": [
      "маршрутизатор OSPF one, однако в OSPF v3 мы"
    ]
  },
  {
    "time": [
      205.0,
      208.0
    ],
    "en": [
      "don't activate OSPF on each interface"
    ],
    "ru": [
      "не активируйте OSPF на каждом интерфейсе"
    ]
  },
  {
    "time": [
      208.0,
      211.0
    ],
    "en": [
      "from OSPF configuration mode we"
    ],
    "ru": [
      "из режима конфигурации OSPF мы"
    ]
  },
  {
    "time": [
      211.0,
      213.0
    ],
    "en": [
      "configure it on each interface in"
    ],
    "ru": [
      "настроить его на каждом интерфейсе в"
    ]
  },
  {
    "time": [
      213.0,
      217.0
    ],
    "en": [
      "interface configuration mode so by using"
    ],
    "ru": [
      "режим настройки интерфейса, поэтому с помощью"
    ]
  },
  {
    "time": [
      217.0,
      221.0
    ],
    "en": [
      "the ipv6 router or SOS PF one command we"
    ],
    "ru": [
      "маршрутизатор ipv6 или SOS PF одной командой мы"
    ]
  },
  {
    "time": [
      221.0,
      224.0
    ],
    "en": [
      "simply created the OSPF v3 process"
    ],
    "ru": [
      "просто создал процесс OSPF v3"
    ]
  },
  {
    "time": [
      224.0,
      225.0
    ],
    "en": [
      "number one"
    ],
    "ru": [
      "номер один"
    ]
  },
  {
    "time": [
      225.0,
      230.0
    ],
    "en": [
      "now let's activate OSPF v3 on G 0 0 and"
    ],
    "ru": [
      "теперь давайте активируем OSPF v3 на G 0 0 и"
    ]
  },
  {
    "time": [
      230.0,
      236.0
    ],
    "en": [
      "G 0 1 interface G 0 0 we activate it"
    ],
    "ru": [
      "G 0 1 интерфейс G 0 0 активируем его"
    ]
  },
  {
    "time": [
      236.0,
      242.0
    ],
    "en": [
      "with this command ipv6 OSPF followed by"
    ],
    "ru": [
      "с помощью этой команды ipv6 OSPF, за которой следует"
    ]
  },
  {
    "time": [
      242.0,
      246.0
    ],
    "en": [
      "the process ID 1 then area then the area"
    ],
    "ru": [
      "идентификатор процесса 1, затем область, затем область"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "number 1 that's it"
    ],
    "ru": [
      "номер 1 вот и все"
    ]
  },
  {
    "time": [
      249.0,
      257.0
    ],
    "en": [
      "interface G 0 1 IP v6 OSPF one area 1 ok"
    ],
    "ru": [
      "интерфейс G 0 1 IP v6 OSPF одна область 1 ОК"
    ]
  },
  {
    "time": [
      257.0,
      265.0
    ],
    "en": [
      "now let's go to our for also an area 1"
    ],
    "ru": [
      "Теперь перейдем к нашему, также для области 1"
    ]
  },
  {
    "time": [
      265.0,
      269.0
    ],
    "en": [
      "now on our one we use the command ipv6"
    ],
    "ru": [
      "теперь на нашем используем команду ipv6"
    ]
  },
  {
    "time": [
      269.0,
      272.0
    ],
    "en": [
      "router OSPF one but we didn't actually"
    ],
    "ru": [
      "роутер OSPF один, но мы на самом деле не"
    ]
  },
  {
    "time": [
      272.0,
      273.0
    ],
    "en": [
      "do any commands from that configuration"
    ],
    "ru": [
      "выполнять любые команды из этой конфигурации"
    ]
  },
  {
    "time": [
      273.0,
      276.0
    ],
    "en": [
      "mode if we go directly to the interface"
    ],
    "ru": [
      "режим, если мы перейдем прямо к интерфейсу"
    ]
  },
  {
    "time": [
      276.0,
      279.0
    ],
    "en": [
      "and enable OSPF v3 on it let's see what"
    ],
    "ru": [
      "и включите на нем OSPF v3, посмотрим, что"
    ]
  },
  {
    "time": [
      279.0,
      287.0
    ],
    "en": [
      "happens interface g00 ipv6 OSPF one area"
    ],
    "ru": [
      "бывает интерфейс g00 ipv6 OSPF одна область"
    ]
  },
  {
    "time": [
      287.0,
      293.0
    ],
    "en": [
      "one do show run ok there it is on the"
    ],
    "ru": [
      "один показываю, беги нормально, вот он на"
    ]
  },
  {
    "time": [
      293.0,
      298.0
    ],
    "en": [
      "interface and there you can see that the"
    ],
    "ru": [
      "интерфейс, и вы можете увидеть, что"
    ]
  },
  {
    "time": [
      298.0,
      301.0
    ],
    "en": [
      "router created the OSPF v3 process"
    ],
    "ru": [
      "маршрутизатор создал процесс OSPF v3"
    ]
  },
  {
    "time": [
      301.0,
      305.0
    ],
    "en": [
      "number one for us ok next let's"
    ],
    "ru": [
      "номер один для нас, хорошо, дальше, давай"
    ]
  },
  {
    "time": [
      305.0,
      307.0
    ],
    "en": [
      "configure OSPF v3 on the remaining"
    ],
    "ru": [
      "настроить OSPF v3 на оставшихся"
    ]
  },
  {
    "time": [
      307.0,
      310.0
    ],
    "en": [
      "routers make sure to put each interface"
    ],
    "ru": [
      "маршрутизаторы не забудьте поставить каждый интерфейс"
    ]
  },
  {
    "time": [
      310.0,
      316.0
    ],
    "en": [
      "in the correct area our two next"
    ],
    "ru": [
      "в правильном месте наши два следующих"
    ]
  },
  {
    "time": [
      316.0,
      323.0
    ],
    "en": [
      "interface g00 ipv6 OSPF one area one"
    ],
    "ru": [
      "интерфейс g00 ipv6 OSPF одна область один"
    ]
  },
  {
    "time": [
      323.0,
      331.0
    ],
    "en": [
      "interface g0 1 IP v6 OSPF one area zero"
    ],
    "ru": [
      "интерфейс g0 1 IP v6 OSPF одна нулевая область"
    ]
  },
  {
    "time": [
      331.0,
      341.0
    ],
    "en": [
      "ok next is our 3 interface g 0 0 ipv6"
    ],
    "ru": [
      "Хорошо, дальше идет наш 3 интерфейса g 0 0 ipv6"
    ]
  },
  {
    "time": [
      341.0,
      348.0
    ],
    "en": [
      "OSPF one area 0 interface g 0 1 IP v6"
    ],
    "ru": [
      "OSPF одна область 0 интерфейс g 0 1 IP v6"
    ]
  },
  {
    "time": [
      348.0,
      353.0
    ],
    "en": [
      "OSPF one area - ok finally let's go on"
    ],
    "ru": [
      "OSPF одна область - хорошо, наконец, давайте продолжим"
    ]
  },
  {
    "time": [
      353.0,
      362.0
    ],
    "en": [
      "our 5 interface g 0 0 ipv6 OSPF one area"
    ],
    "ru": [
      "наш 5 интерфейс g 0 0 ipv6 OSPF одна область"
    ]
  },
  {
    "time": [
      362.0,
      367.0
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
      362.0,
      367.0
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
      367.0,
      370.0
    ],
    "en": [
      "router let's wait a few seconds and then"
    ],
    "ru": [
      "маршрутизатор, подождем несколько секунд, а затем"
    ]
  },
  {
    "time": [
      370.0,
      372.0
    ],
    "en": [
      "check if r5 has received all the routes"
    ],
    "ru": [
      "проверьте, получил ли r5 все маршруты"
    ]
  },
  {
    "time": [
      372.0,
      380.0
    ],
    "en": [
      "it should be receiving"
    ],
    "ru": [
      "он должен получать"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "okay now before we check that let's use"
    ],
    "ru": [
      "хорошо, прежде чем мы проверим, давайте использовать"
    ]
  },
  {
    "time": [
      383.0,
      386.0
    ],
    "en": [
      "a couple of show commands here on r5"
    ],
    "ru": [
      "пара команд show здесь, на r5"
    ]
  },
  {
    "time": [
      386.0,
      389.0
    ],
    "en": [
      "typically I'd use commands like show IP"
    ],
    "ru": [
      "обычно я использую такие команды, как show IP"
    ]
  },
  {
    "time": [
      389.0,
      392.0
    ],
    "en": [
      "protocols show IP ospf for show IP ospf"
    ],
    "ru": [
      "протоколы показывают IP ospf для показа IP ospf"
    ]
  },
  {
    "time": [
      392.0,
      394.0
    ],
    "en": [
      "neighbor"
    ],
    "ru": [
      "сосед"
    ]
  },
  {
    "time": [
      394.0,
      398.0
    ],
    "en": [
      "however for OSPF v3 we have to change"
    ],
    "ru": [
      "однако для OSPF v3 мы должны изменить"
    ]
  },
  {
    "time": [
      398.0,
      402.0
    ],
    "en": [
      "the IP in those commands to ipv6 show"
    ],
    "ru": [
      "IP в этих командах для показа ipv6"
    ]
  },
  {
    "time": [
      402.0,
      406.0
    ],
    "en": [
      "ipv6 protocols as you can see this gives"
    ],
    "ru": [
      "протоколы ipv6, как видите, это дает"
    ]
  },
  {
    "time": [
      406.0,
      409.0
    ],
    "en": [
      "us minimal information but it does show"
    ],
    "ru": [
      "нам минимальная информация, но она показывает"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "which interfaces are when are in which"
    ],
    "ru": [
      "какие интерфейсы когда в каких"
    ]
  },
  {
    "time": [
      411.0,
      418.0
    ],
    "en": [
      "areas which is useful show ipv6 OSPF"
    ],
    "ru": [
      "полезные области показывают ipv6 OSPF"
    ]
  },
  {
    "time": [
      418.0,
      420.0
    ],
    "en": [
      "this command gives us more details"
    ],
    "ru": [
      "эта команда дает нам более подробную информацию"
    ]
  },
  {
    "time": [
      420.0,
      423.0
    ],
    "en": [
      "including things like timers you can see"
    ],
    "ru": [
      "включая такие вещи, как таймеры, которые вы можете увидеть"
    ]
  },
  {
    "time": [
      423.0,
      426.0
    ],
    "en": [
      "the router idea of v dot v dot v dot v"
    ],
    "ru": [
      "идея маршрутизатора v dot v dot v dot v"
    ]
  },
  {
    "time": [
      426.0,
      428.0
    ],
    "en": [
      "which was inherited from loopback zeros"
    ],
    "ru": [
      "который был унаследован от нулей обратной петли"
    ]
  },
  {
    "time": [
      428.0,
      435.0
    ],
    "en": [
      "ipv4 address show ipv6 OSPF neighbor"
    ],
    "ru": [
      "адрес ipv4 показать ipv6 сосед OSPF"
    ]
  },
  {
    "time": [
      435.0,
      438.0
    ],
    "en": [
      "here you can see our 5s OSPF v3 neighbor"
    ],
    "ru": [
      "здесь вы можете увидеть нашего соседа 5s OSPF v3"
    ]
  },
  {
    "time": [
      438.0,
      440.0
    ],
    "en": [
      "ship with r3"
    ],
    "ru": [
      "корабль с r3"
    ]
  },
  {
    "time": [
      440.0,
      446.0
    ],
    "en": [
      "ok now let's check those reps do show"
    ],
    "ru": [
      "Хорошо, теперь давайте проверим, что представители действительно показывают"
    ]
  },
  {
    "time": [
      446.0,
      452.0
    ],
    "en": [
      "ipv6 repped looks like we have the OSPF"
    ],
    "ru": [
      "ipv6 repped выглядит так, будто у нас есть OSPF"
    ]
  },
  {
    "time": [
      452.0,
      455.0
    ],
    "en": [
      "routes we need and the o i indicates"
    ],
    "ru": [
      "маршруты, которые нам нужны, а буква o i указывает"
    ]
  },
  {
    "time": [
      455.0,
      458.0
    ],
    "en": [
      "OSPF inter area routes since these"
    ],
    "ru": [
      "Межзональные маршруты OSPF, поскольку эти"
    ]
  },
  {
    "time": [
      458.0,
      461.0
    ],
    "en": [
      "networks are all outside of our 5s area"
    ],
    "ru": [
      "все сети находятся за пределами нашей зоны 5"
    ]
  },
  {
    "time": [
      461.0,
      466.0
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
      461.0,
      466.0
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
      466.0,
      469.0
    ],
    "en": [
      "is connected to the internet so let's"
    ],
    "ru": [
      "подключен к Интернету, так что давайте"
    ]
  },
  {
    "time": [
      469.0,
      471.0
    ],
    "en": [
      "make a default route on r1 and then"
    ],
    "ru": [
      "сделайте маршрут по умолчанию на r1, а затем"
    ]
  },
  {
    "time": [
      471.0,
      477.0
    ],
    "en": [
      "advertise it into OSPF first let's"
    ],
    "ru": [
      "сначала прорекламируйте это в OSPF, давайте"
    ]
  },
  {
    "time": [
      477.0,
      481.0
    ],
    "en": [
      "create the default route so we start"
    ],
    "ru": [
      "создать маршрут по умолчанию, чтобы мы начали"
    ]
  },
  {
    "time": [
      481.0,
      485.0
    ],
    "en": [
      "with ipv6 route and then to make a"
    ],
    "ru": [
      "с маршрутом ipv6, а затем сделать"
    ]
  },
  {
    "time": [
      485.0,
      487.0
    ],
    "en": [
      "default route type a double colon"
    ],
    "ru": [
      "Тип маршрута по умолчанию - двойное двоеточие"
    ]
  },
  {
    "time": [
      487.0,
      492.0
    ],
    "en": [
      "followed by a slash 0 mask then let's"
    ],
    "ru": [
      "за которым следует маска с косой чертой 0, тогда давайте"
    ]
  },
  {
    "time": [
      492.0,
      499.0
    ],
    "en": [
      "give it a next hop of 2001 DB 8 0 1 0 1"
    ],
    "ru": [
      "дать ему следующий переход 2001 DB 8 0 1 0 1"
    ]
  },
  {
    "time": [
      499.0,
      506.0
    ],
    "en": [
      "double colon - ok do show ipv6 route"
    ],
    "ru": [
      "двойное двоеточие - хорошо, показывать маршрут ipv6"
    ]
  },
  {
    "time": [
      506.0,
      510.0
    ],
    "en": [
      "okay there's the route now to advertise"
    ],
    "ru": [
      "хорошо, теперь есть способ рекламировать"
    ]
  },
  {
    "time": [
      510.0,
      512.0
    ],
    "en": [
      "the route into OSPF v3"
    ],
    "ru": [
      "маршрут в OSPF v3"
    ]
  },
  {
    "time": [
      512.0,
      516.0
    ],
    "en": [
      "first enter OSPF v3 configuration mode"
    ],
    "ru": [
      "сначала войдите в режим конфигурации OSPF v3"
    ]
  },
  {
    "time": [
      516.0,
      523.0
    ],
    "en": [
      "ipv6 router OSPF one now the command to"
    ],
    "ru": [
      "ipv6 router OSPF one теперь команда для"
    ]
  },
  {
    "time": [
      523.0,
      526.0
    ],
    "en": [
      "advertise a default route into OSPF v3"
    ],
    "ru": [
      "объявить маршрут по умолчанию в OSPF v3"
    ]
  },
  {
    "time": [
      526.0,
      530.0
    ],
    "en": [
      "is the same as in OSPF v2 for ipv4"
    ],
    "ru": [
      "то же, что и в OSPF v2 для ipv4"
    ]
  },
  {
    "time": [
      530.0,
      532.0
    ],
    "en": [
      "however I didn't include this command in"
    ],
    "ru": [
      "однако я не включил эту команду в"
    ]
  },
  {
    "time": [
      532.0,
      534.0
    ],
    "en": [
      "the previous lab so I wanted to show it"
    ],
    "ru": [
      "предыдущая лаборатория, поэтому я хотел показать это"
    ]
  },
  {
    "time": [
      534.0,
      538.0
    ],
    "en": [
      "in this lab that command is default"
    ],
    "ru": [
      "в этой лабораторной работе эта команда используется по умолчанию"
    ]
  },
  {
    "time": [
      538.0,
      544.0
    ],
    "en": [
      "information originate that's it okay so"
    ],
    "ru": [
      "информация исходит, это нормально, так что"
    ]
  },
  {
    "time": [
      544.0,
      546.0
    ],
    "en": [
      "now let's go to one of the other routers"
    ],
    "ru": [
      "теперь перейдем к одному из других роутеров"
    ]
  },
  {
    "time": [
      546.0,
      548.0
    ],
    "en": [
      "and see if the default route appears"
    ],
    "ru": [
      "и посмотрите, появится ли маршрут по умолчанию"
    ]
  },
  {
    "time": [
      548.0,
      557.0
    ],
    "en": [
      "I'll go check out our to do show ipv6"
    ],
    "ru": [
      "Я пойду посмотрю, что нужно сделать, чтобы показать ipv6"
    ]
  },
  {
    "time": [
      557.0,
      562.0
    ],
    "en": [
      "route there it is right at the top in"
    ],
    "ru": [
      "Маршрут там он находится прямо наверху в"
    ]
  },
  {
    "time": [
      562.0,
      566.0
    ],
    "en": [
      "this lab we looked at OSPF v3 which is"
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрели OSPF v3, который"
    ]
  },
  {
    "time": [
      566.0,
      569.0
    ],
    "en": [
      "used for ipv6 there isn't much"
    ],
    "ru": [
      "используется для ipv6 не так много"
    ]
  },
  {
    "time": [
      569.0,
      573.0
    ],
    "en": [
      "difference between it and OSPF v2 just"
    ],
    "ru": [
      "разница между ним и OSPF v2 просто"
    ]
  },
  {
    "time": [
      573.0,
      574.0
    ],
    "en": [
      "remember to configure it at the"
    ],
    "ru": [
      "не забудьте настроить его на"
    ]
  },
  {
    "time": [
      574.0,
      578.0
    ],
    "en": [
      "interface level that's all for this lab"
    ],
    "ru": [
      "уровень интерфейса вот и все для этой лаборатории"
    ]
  },
  {
    "time": [
      578.0,
      581.0
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
      581.0,
      583.0
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
      583.0,
      586.0
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
      586.0,
      589.0
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
      589.0,
      591.0
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
      591.0,
      594.0
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
      594.0,
      597.0
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
      597.0,
      599.0
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
      599.0,
      602.0
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
      602.0,
      605.0
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
      605.0,
      608.0
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
      608.0,
      608.0
    ],
    "en": [
      "the brave browser",
      "CCNA Routing & Switch"
    ],
    "ru": [
      "смелый браузер",
      "Маршрутизация и коммутатор CCNA"
    ]
  }
]