let objs = [
  {
    "time": [
      0.0,
      4.624875
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
      4.624875,
      14.862166
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
      14.862166,
      14.79256
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
      14.79256,
      18.992518
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
      18.992518,
      23.668768
    ],
    "en": [
      "we're coming to the end of the icnd1 labs"
    ],
    "ru": [
      "мы подошли к концу лаборатории icnd1"
    ]
  },
  {
    "time": [
      23.668768,
      28.081684
    ],
    "en": [
      "in this lab we will configure a variety of things which we learned before"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим множество вещей, которые мы узнали ранее"
    ]
  },
  {
    "time": [
      28.081684,
      32.697393
    ],
    "en": [
      "and then in the next lab will troubleshoot some problems with the same network topology"
    ],
    "ru": [
      "а затем в следующей лабораторной работе будут устранены некоторые проблемы с той же топологией сети."
    ]
  },
  {
    "time": [
      32.697393,
      40.762788
    ],
    "en": [
      "we will configure rip syslog NAT DHCP and SSH"
    ],
    "ru": [
      "настроим rip syslog NAT DHCP и SSH"
    ]
  },
  {
    "time": [
      40.762788,
      42.300475
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
      42.300475,
      48.281371
    ],
    "en": [
      "the first step is to configure rip on r1 r2 and r3"
    ],
    "ru": [
      "первый шаг - настроить рип на r1 r2 и r3"
    ]
  },
  {
    "time": [
      48.281371,
      50.108975
    ],
    "en": [
      "let's start on r1"
    ],
    "ru": [
      "давай начнем на r1"
    ]
  },
  {
    "time": [
      50.108975,
      56.508537
    ],
    "en": [
      "enable conf t router rip"
    ],
    "ru": [
      "включить копирование маршрутизатора конфигурации"
    ]
  },
  {
    "time": [
      56.508537,
      64.04935
    ],
    "en": [
      "we're instructed to use rip version 2 and disable auto summary so version 2 no auto"
    ],
    "ru": [
      "мы проинструктированы использовать рип версии 2 и отключить автоматическую сводку, поэтому версия 2 не будет автоматически"
    ]
  },
  {
    "time": [
      64.04935,
      67.145912
    ],
    "en": [
      "now lets advertise r1s connected networks"
    ],
    "ru": [
      "теперь позволяет рекламировать подключенные сети r1s"
    ]
  },
  {
    "time": [
      67.145912,
      75.978599
    ],
    "en": [
      "network 192.168.1.0 network 1.2.3.0 exit"
    ],
    "ru": [
      "сеть 192.168.1.0 сеть 1.2.3.0 выход"
    ]
  },
  {
    "time": [
      75.978599,
      78.621599
    ],
    "en": [
      "okay let's go to r2"
    ],
    "ru": [
      "хорошо, пойдем на r2"
    ]
  },
  {
    "time": [
      78.621599,
      94.788138
    ],
    "en": [
      "enable conf t router rip version 2 no Auto network 192.168.2.0 network 192.168.3.0 exit"
    ],
    "ru": [
      "enable conf t router rip version 2 no Auto network 192.168.2.0 network 192.168.3.0 exit"
    ]
  },
  {
    "time": [
      94.788138,
      97.780533
    ],
    "en": [
      "finally let's go on r3"
    ],
    "ru": [
      "наконец-то пойдем на r3"
    ]
  },
  {
    "time": [
      97.780533,
      114.14474
    ],
    "en": [
      "enable conf t router rip version 2 no Auto network 3.0.0.0 Network 1.2.3.0 exit"
    ],
    "ru": [
      "enable conf t router rip version 2 no Auto network 3.0.0.0 Network 1.2.3.0 exit"
    ]
  },
  {
    "time": [
      114.14474,
      117.241739
    ],
    "en": [
      "ok that's all for the rip configuration"
    ],
    "ru": [
      "хорошо, это все для конфигурации рипа"
    ]
  },
  {
    "time": [
      117.241739,
      125.001843
    ],
    "en": [
      "it may take some time for all routes to show up in the database but you can confirm with do show IP rip database"
    ],
    "ru": [
      "может потребоваться некоторое время, чтобы все маршруты отобразились в базе данных, но вы можете подтвердить это с помощью do show IP rip database"
    ]
  },
  {
    "time": [
      125.001843,
      134.075384
    ],
    "en": [
      "step 2 is to configure r1 r2 and r3 to send syslog messages to server 1"
    ],
    "ru": [
      "Шаг 2 - настроить r1, r2 и r3 для отправки сообщений системного журнала на сервер 1"
    ]
  },
  {
    "time": [
      134.075384,
      138.021968
    ],
    "en": [
      "all we need is one command on each router to do this"
    ],
    "ru": [
      "все, что нам нужно, это одна команда на каждом маршрутизаторе, чтобы сделать это"
    ]
  },
  {
    "time": [
      138.021968,
      141.298509
    ],
    "en": [
      "since I'm already on r3 let's start here"
    ],
    "ru": [
      "так как я уже на r3 давай начнем здесь"
    ]
  },
  {
    "time": [
      141.298509,
      152.239968
    ],
    "en": [
      "logging 3.0.0.100 that's it logging host 3.0.0.100 would also have the same effect"
    ],
    "ru": [
      "logging 3.0.0.100, что он регистрирует хост 3.0.0.100, также будет иметь такой же эффект"
    ]
  },
  {
    "time": [
      152.239968,
      161.249801
    ],
    "en": [
      "next r2 logging 3.0.0.100"
    ],
    "ru": [
      "следующая запись r2 3.0.0.100"
    ]
  },
  {
    "time": [
      161.249801,
      167.679592
    ],
    "en": [
      "okay and finally r1 logging 3.0.0.100"
    ],
    "ru": [
      "хорошо и наконец r1 logging 3.0.0.100"
    ]
  },
  {
    "time": [
      167.679592,
      170.337029
    ],
    "en": [
      "that's all for step two"
    ],
    "ru": [
      "это все для второго шага"
    ]
  },
  {
    "time": [
      170.337029,
      177.844924
    ],
    "en": [
      "the next step is to configure Pat port address translation on r1 and r2"
    ],
    "ru": [
      "следующий шаг - настроить трансляцию адресов порта Pat на r1 и r2"
    ]
  },
  {
    "time": [
      177.844924,
      187.429569
    ],
    "en": [
      "the network's 192.168.1.0 / 24 and 192.168.2.0 / 24 are private networks"
    ],
    "ru": [
      "сети 192.168.1.0 / 24 и 192.168.2.0 / 24 являются частными сетями"
    ]
  },
  {
    "time": [
      187.429569,
      189.884985
    ],
    "en": [
      "and they cannot be routed over the Internet"
    ],
    "ru": [
      "и они не могут быть маршрутизированы через Интернет"
    ]
  },
  {
    "time": [
      189.884985,
      197.143173
    ],
    "en": [
      "like in our previous NAT labs i've pre-configured ACLs on r1 r2 and r3 to prevent them from being routed"
    ],
    "ru": [
      "как и в наших предыдущих лабораторных занятиях по NAT, я предварительно настроил ACL на r1, r2 и r3, чтобы предотвратить их маршрутизацию"
    ]
  },
  {
    "time": [
      197.143173,
      205.433256
    ],
    "en": [
      "so let's translate their addresses to the address on r1 and r2 s gigabit 0 1 interfaces"
    ],
    "ru": [
      "поэтому давайте переведем их адреса в адреса на интерфейсах r1 и r2 s gigabit 0 1"
    ]
  },
  {
    "time": [
      205.433256,
      208.030798
    ],
    "en": [
      "let's start here on r1"
    ],
    "ru": [
      "давай начнем здесь на r1"
    ]
  },
  {
    "time": [
      208.030798,
      212.999839
    ],
    "en": [
      "first I'll configure the inside and outside NAT interfaces"
    ],
    "ru": [
      "сначала я настрою внутренний и внешний интерфейсы NAT"
    ]
  },
  {
    "time": [
      212.999839,
      223.072651
    ],
    "en": [
      "interface G 0 0 IP NAT inside interface G 0 1 IP NAT outside"
    ],
    "ru": [
      "интерфейс G 0 0 IP NAT внутри интерфейса G 0 1 IP NAT снаружи"
    ]
  },
  {
    "time": [
      223.072651,
      228.388005
    ],
    "en": [
      "next let's create the ACL to identify which traffic to translate"
    ],
    "ru": [
      "затем давайте создадим ACL, чтобы определить, какой трафик переводить"
    ]
  },
  {
    "time": [
      228.388005,
      237.311442
    ],
    "en": [
      "I'll make an ACL permitting the 192.168.1.0 / 24 network exit"
    ],
    "ru": [
      "Я сделаю ACL разрешающий выход из сети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      237.311442,
      248.359129
    ],
    "en": [
      "access list 1 permit 192.168.1.0 0.0.0.255 ok finally"
    ],
    "ru": [
      "список доступа 1 разрешение 192.168.1.0 0.0.0.255 хорошо наконец"
    ]
  },
  {
    "time": [
      248.359129,
      250.67992
    ],
    "en": [
      "let's make the NAT statement itself"
    ],
    "ru": [
      "сделаем сам оператор NAT"
    ]
  },
  {
    "time": [
      250.67992,
      257.442732
    ],
    "en": [
      "IP net inside source list 1 interface g0 1 overload"
    ],
    "ru": [
      "IP-сеть внутри списка источников 1 интерфейс g0 1 перегрузка"
    ]
  },
  {
    "time": [
      257.442732,
      263.848148
    ],
    "en": [
      "that's it now let's do the same thing on r2"
    ],
    "ru": [
      "вот и все, давайте сделаем то же самое на r2"
    ]
  },
  {
    "time": [
      263.848148,
      289.343085
    ],
    "en": [
      "interface G 0 0 IP net inside interface G 0 1 IP net outside exit access list 1 permit 192.168.2.0 0.0.0.255 IP NAT inside source list 1 interface G 0 1 overload"
    ],
    "ru": [
      "интерфейс G 0 0 IP-сеть внутри интерфейса G 0 1 IP-сеть за пределами выхода список доступа 1 разрешение 192.168.2.0 0.0.0.255 IP NAT внутри списка источников 1 интерфейс G 0 1 перегрузка"
    ]
  },
  {
    "time": [
      289.343085,
      291.880751
    ],
    "en": [
      "that's all for our pad configuration"
    ],
    "ru": [
      "это все для нашей конфигурации пэда"
    ]
  },
  {
    "time": [
      291.880751,
      297.161792
    ],
    "en": [
      "however our pcs still don't have IP addresses"
    ],
    "ru": [
      "однако у наших компьютеров до сих пор нет IP-адресов"
    ]
  },
  {
    "time": [
      297.161792,
      304.153915
    ],
    "en": [
      "so next is to configure r1 as a DHCP server with two dhcp pools"
    ],
    "ru": [
      "так что дальше нужно настроить r1 как DHCP-сервер с двумя пулами DHCP"
    ]
  },
  {
    "time": [
      304.153915,
      310.141331
    ],
    "en": [
      "since we're in global configuration mode i'll configure the excluded address ranges first"
    ],
    "ru": [
      "поскольку мы находимся в режиме глобальной конфигурации, я сначала настрою исключенные диапазоны адресов"
    ]
  },
  {
    "time": [
      310.141331,
      317.531476
    ],
    "en": [
      "remember excluded ranges aren't configured in DHCP configuration mode but rather in global configuration mode"
    ],
    "ru": [
      "помните, что исключенные диапазоны настраиваются не в режиме конфигурации DHCP, а в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      317.531476,
      328.577371
    ],
    "en": [
      "IP dhcp excluded address 192.168.1.1 192.168.1.10"
    ],
    "ru": [
      "IP dhcp исключенный адрес 192.168.1.1 192.168.1.10"
    ]
  },
  {
    "time": [
      328.577371,
      339.702911
    ],
    "en": [
      "and for the second pool IP dhcp excluded address 192.168.2.1 192.168.2.10"
    ],
    "ru": [
      "а для второго пула IP dhcp исключил адрес 192.168.2.1 192.168.2.10"
    ]
  },
  {
    "time": [
      339.702911,
      344.139931
    ],
    "en": [
      "ok now let's create and configure the first pool"
    ],
    "ru": [
      "хорошо, теперь давайте создадим и настроим первый пул"
    ]
  },
  {
    "time": [
      344.139931,
      366.570909
    ],
    "en": [
      "IP dhcp pool one pool network 192.168.1.0 255.255.255.0 default router 192.168.1.1 dns server 3.0.0.0.100 exit"
    ],
    "ru": [
      "IP dhcp pool one pool network 192.168.1.0 255.255.255.0 маршрутизатор по умолчанию 192.168.1.1 dns server 3.0.0.0.100 exit"
    ]
  },
  {
    "time": [
      366.570909,
      369.671075
    ],
    "en": [
      "ok and now let's create the second pool"
    ],
    "ru": [
      "хорошо, а теперь давайте создадим второй пул"
    ]
  },
  {
    "time": [
      369.671075,
      390.971177
    ],
    "en": [
      "IP dhcp pool 2 pool network 192.168.2.0 255.255.255.0 default router 192.168.2.1 dns server 3.0.0.100 exit"
    ],
    "ru": [
      "IP dhcp pool 2 pool network 192.168.2.0 255.255.255.0 маршрутизатор по умолчанию 192.168.2.1 dns server 3.0.0.100 exit"
    ]
  },
  {
    "time": [
      390.971177,
      395.179406
    ],
    "en": [
      "let's check if pc one can get an IP address"
    ],
    "ru": [
      "давайте проверим, можно ли на ПК получить IP-адрес"
    ]
  },
  {
    "time": [
      395.179406,
      406.779676
    ],
    "en": [
      "IP config / release IP config / renew there we go"
    ],
    "ru": [
      "Конфигурация IP / выпуск IP-конфигурации / обновление, вот и все."
    ]
  },
  {
    "time": [
      406.779676,
      418.289113
    ],
    "en": [
      "now how about PC 4 IP config / release IP config / renew"
    ],
    "ru": [
      "А теперь как насчет IP-конфигурации ПК 4 / выпуска IP-конфигурации / обновления"
    ]
  },
  {
    "time": [
      418.289113,
      430.838404
    ],
    "en": [
      "it doesn't work now that's because r1 isn't connected to the 192.168.2.0 / 24 network"
    ],
    "ru": [
      "теперь это не работает, потому что r1 не подключен к сети 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      430.838404,
      434.687424
    ],
    "en": [
      "so their DHCP discovery messages don't reach r1"
    ],
    "ru": [
      "поэтому их сообщения об обнаружении DHCP не достигают r1"
    ]
  },
  {
    "time": [
      434.687424,
      439.309966
    ],
    "en": [
      "so let's configure r2 as a DHCP relay agent"
    ],
    "ru": [
      "Итак, давайте настроим r2 как агент DHCP-ретрансляции"
    ]
  },
  {
    "time": [
      439.309966,
      442.662382
    ],
    "en": [
      "so it will relay DHCP messages between them"
    ],
    "ru": [
      "поэтому он будет передавать сообщения DHCP между ними"
    ]
  },
  {
    "time": [
      442.662382,
      455.368611
    ],
    "en": [
      "interface g00 IP helper address followed by r1s address 1.2.3.1 exit"
    ],
    "ru": [
      "интерфейс g00 IP-адрес помощника, за которым следует адрес r1s 1.2.3.1 exit"
    ]
  },
  {
    "time": [
      455.368611,
      458.237319
    ],
    "en": [
      "now let's try again on PC 4"
    ],
    "ru": [
      "А теперь попробуем еще раз на ПК 4"
    ]
  },
  {
    "time": [
      458.237319,
      463.281464
    ],
    "en": [
      "IP config / renew"
    ],
    "ru": [
      "Конфигурация / обновление IP"
    ]
  },
  {
    "time": [
      463.281464,
      468.277255
    ],
    "en": [
      "there we go DHCP is now working"
    ],
    "ru": [
      "вот и DHCP теперь работает"
    ]
  },
  {
    "time": [
      468.277255,
      475.583609
    ],
    "en": [
      "next we must configure SSH access on the vty lines of router 1"
    ],
    "ru": [
      "Далее мы должны настроить доступ по SSH на линиях VTY маршрутизатора 1"
    ]
  },
  {
    "time": [
      475.583609,
      481.707504
    ],
    "en": [
      "really you should do this on all of these routers and switches but let's keep it to just r1 for this lab"
    ],
    "ru": [
      "на самом деле вам следует сделать это на всех этих маршрутизаторах и коммутаторах, но давайте оставим его только на r1 для этой лабораторной работы."
    ]
  },
  {
    "time": [
      481.707504,
      486.622399
    ],
    "en": [
      "so there are a few requirements to configure SSH"
    ],
    "ru": [
      "поэтому есть несколько требований для настройки SSH"
    ]
  },
  {
    "time": [
      486.622399,
      490.469274
    ],
    "en": [
      "one is a hostname which is already pre-configured r1"
    ],
    "ru": [
      "one - это имя хоста, которое уже предварительно настроено r1"
    ]
  },
  {
    "time": [
      490.469274,
      494.536607
    ],
    "en": [
      "but if it wasn't you could configure it with this command"
    ],
    "ru": [
      "но если это не так, вы можете настроить его с помощью этой команды"
    ]
  },
  {
    "time": [
      494.536607,
      500.406232
    ],
    "en": [
      "hostname r1 next is a domain name"
    ],
    "ru": [
      "hostname r1 next - это доменное имя"
    ]
  },
  {
    "time": [
      500.406232,
      506.559585
    ],
    "en": [
      "let's go with cisco comm IP domain name cisco com"
    ],
    "ru": [
      "пойдем с cisco comm IP-доменное имя cisco com"
    ]
  },
  {
    "time": [
      506.559585,
      510.351522
    ],
    "en": [
      "also we need a user account on this device"
    ],
    "ru": [
      "также нам нужна учетная запись пользователя на этом устройстве"
    ]
  },
  {
    "time": [
      510.351522,
      515.46773
    ],
    "en": [
      "username cisco password CCNA"
    ],
    "ru": [
      "имя пользователя пароль cisco CCNA"
    ]
  },
  {
    "time": [
      515.46773,
      521.183959
    ],
    "en": [
      "next you must generate an RSA key with 1024 bit modulus"
    ],
    "ru": [
      "затем вы должны сгенерировать ключ RSA с модулем 1024 бит"
    ]
  },
  {
    "time": [
      521.183959,
      529.479813
    ],
    "en": [
      "crypto key generate RSA then enter the modulus size here of 1024"
    ],
    "ru": [
      "криптоключ генерирует RSA, затем введите здесь размер модуля 1024"
    ]
  },
  {
    "time": [
      529.479813,
      533.71073
    ],
    "en": [
      "okay now let's configure the vty lines"
    ],
    "ru": [
      "хорошо, теперь давайте настроим линии VTY"
    ]
  },
  {
    "time": [
      533.71073,
      538.173667
    ],
    "en": [
      "line vty 0 15"
    ],
    "ru": [
      "строка vty 0 15"
    ]
  },
  {
    "time": [
      538.173667,
      541.105729
    ],
    "en": [
      "first let's enable local authentication"
    ],
    "ru": [
      "сначала давайте включим локальную аутентификацию"
    ]
  },
  {
    "time": [
      541.105729,
      543.204417
    ],
    "en": [
      "login local"
    ],
    "ru": [
      "войти в систему"
    ]
  },
  {
    "time": [
      543.204417,
      550.911542
    ],
    "en": [
      "next let's enable ssh transport input ssh exit"
    ],
    "ru": [
      "Затем давайте включим транспортный ввод ssh ssh exit"
    ]
  },
  {
    "time": [
      550.911542,
      555.7215
    ],
    "en": [
      "also I forgot to configure ssh version 2"
    ],
    "ru": [
      "также забыл настроить ssh версии 2"
    ]
  },
  {
    "time": [
      555.7215,
      558.386562
    ],
    "en": [
      "so let's do that here from global configuration mode"
    ],
    "ru": [
      "так что давайте сделаем это здесь из режима глобальной конфигурации"
    ]
  },
  {
    "time": [
      558.386562,
      561.927708
    ],
    "en": [
      "IP ssh version 2"
    ],
    "ru": [
      "IP ssh версии 2"
    ]
  },
  {
    "time": [
      561.927708,
      563.927916
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      563.927916,
      567.928749
    ],
    "en": [
      "now let's try to ssh to r1 from pc1"
    ],
    "ru": [
      "теперь давайте попробуем ssh на r1 с pc1"
    ]
  },
  {
    "time": [
      567.928749,
      579.71179
    ],
    "en": [
      "ssh - l cisco which is the username 192.168.1.1"
    ],
    "ru": [
      "ssh - l cisco, имя пользователя 192.168.1.1"
    ]
  },
  {
    "time": [
      579.71179,
      584.833206
    ],
    "en": [
      "now enter the password for our account cisco which is CCNA"
    ],
    "ru": [
      "теперь введите пароль для нашей учетной записи cisco, которая является CCNA"
    ]
  },
  {
    "time": [
      584.833206,
      589.005997
    ],
    "en": [
      "there we go we're in exit"
    ],
    "ru": [
      "вот мы идем мы на выходе"
    ]
  },
  {
    "time": [
      589.005997,
      595.880331
    ],
    "en": [
      "so in this lab we did some configurations of various technologies we learned throughout these labs"
    ],
    "ru": [
      "поэтому в этой лабораторной работе мы выполнили некоторые конфигурации различных технологий, которые мы изучили в ходе этих лабораторных работ."
    ]
  },
  {
    "time": [
      595.880331,
      601.246393
    ],
    "en": [
      "now I will take this completed lab break some of the configurations"
    ],
    "ru": [
      "Теперь я возьму этот завершенный лабораторный перерыв на некоторые конфигурации"
    ]
  },
  {
    "time": [
      601.246393,
      606.213372
    ],
    "en": [
      "and will troubleshoot it in the next and final lab of the icnd1 series"
    ],
    "ru": [
      "и будет устранять его в следующей и последней лабораторной работе серии icnd1."
    ]
  },
  {
    "time": [
      606.213372,
      607.799851
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
      607.799851,
      614.789392
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
      614.789392,
      619.277392
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
      619.277392,
      624.455059
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
      624.455059,
      631.642121
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
      631.642121,
      640.168246
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
      640.168246,
      640.168246
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
      640.168246,
      640.168246
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
      640.168246,
      640.168246
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]