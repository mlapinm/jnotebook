let objs = [
  {
    "time": [
      0.0,
      4.778
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
      4.778,
      8.290062
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
      8.290062,
      15.527207
    ],
    "en": [
      "in this lab we will configure DHCP dynamic host configuration protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим протокол динамической конфигурации хоста DHCP."
    ]
  },
  {
    "time": [
      15.527207,
      20.284665
    ],
    "en": [
      "DHCP dynamically provides IP addresses"
    ],
    "ru": [
      "DHCP динамически предоставляет IP-адреса"
    ]
  },
  {
    "time": [
      20.284665,
      25.409415
    ],
    "en": [
      "as well as information like default gateway and DNS server addresses to hosts"
    ],
    "ru": [
      "а также информацию, такую ​​как адрес шлюза по умолчанию и DNS-сервера для хостов"
    ]
  },
  {
    "time": [
      25.409415,
      29.507894
    ],
    "en": [
      "so that each host doesn't have to be manually configured"
    ],
    "ru": [
      "так что каждый хост не нужно настраивать вручную"
    ]
  },
  {
    "time": [
      29.507894,
      35.247581
    ],
    "en": [
      "in this lab we will configure r1 as a DHCP server"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим r1 как DHCP-сервер."
    ]
  },
  {
    "time": [
      35.247581,
      39.215997
    ],
    "en": [
      "which will provide this information to the other devices on the network"
    ],
    "ru": [
      "который предоставит эту информацию другим устройствам в сети"
    ]
  },
  {
    "time": [
      39.215997,
      49.728934
    ],
    "en": [
      "we will also configure r2 as a DHCP client on one interface and as a DHCP relay agent on another interface"
    ],
    "ru": [
      "мы также настроим r2 как DHCP-клиент на одном интерфейсе и как агент DHCP-ретрансляции на другом интерфейсе"
    ]
  },
  {
    "time": [
      49.728934,
      52.145996
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
      52.145996,
      57.628141
    ],
    "en": [
      "first I want to show that our pcs don't have IP addresses"
    ],
    "ru": [
      "Сначала я хочу показать, что у наших компьютеров нет IP-адресов"
    ]
  },
  {
    "time": [
      57.628141,
      60.696641
    ],
    "en": [
      "let's go on PC one"
    ],
    "ru": [
      "пойдем на один ПК"
    ]
  },
  {
    "time": [
      60.696641,
      69.56062
    ],
    "en": [
      "IP config it has an address in the 169.254 range"
    ],
    "ru": [
      "IP-конфигурация имеет адрес в диапазоне 169.254"
    ]
  },
  {
    "time": [
      69.56062,
      75.179099
    ],
    "en": [
      "this is an automatic private IP address or apipa"
    ],
    "ru": [
      "это автоматический частный IP-адрес или apipa"
    ]
  },
  {
    "time": [
      75.179099,
      79.688057
    ],
    "en": [
      "pc 1 is configured to get its address via DHCP"
    ],
    "ru": [
      "pc 1 настроен на получение своего адреса через DHCP"
    ]
  },
  {
    "time": [
      79.688057,
      82.837202
    ],
    "en": [
      "but there is no DHCP server configured yet"
    ],
    "ru": [
      "но DHCP-сервер еще не настроен"
    ]
  },
  {
    "time": [
      82.837202,
      85.288514
    ],
    "en": [
      "so this address was automatically generated"
    ],
    "ru": [
      "поэтому этот адрес был автоматически сгенерирован"
    ]
  },
  {
    "time": [
      85.288514,
      88.929805
    ],
    "en": [
      "let's get in a real usable IP address"
    ],
    "ru": [
      "давайте получим реальный пригодный для использования IP-адрес"
    ]
  },
  {
    "time": [
      88.929805,
      94.311513
    ],
    "en": [
      "the first step is to configure our DHCP server r1"
    ],
    "ru": [
      "первый шаг - настроить наш DHCP-сервер r1"
    ]
  },
  {
    "time": [
      94.311513,
      100.142763
    ],
    "en": [
      "enable conf t"
    ],
    "ru": [
      "включить конф т"
    ]
  },
  {
    "time": [
      100.142763,
      103.615575
    ],
    "en": [
      "let's create the first DHCP pool"
    ],
    "ru": [
      "создадим первый пул DHCP"
    ]
  },
  {
    "time": [
      103.615575,
      107.461554
    ],
    "en": [
      "IP dhcp pool 10 pool"
    ],
    "ru": [
      "IP dhcp pool 10 пул"
    ]
  },
  {
    "time": [
      107.461554,
      112.882137
    ],
    "en": [
      "now we've created the pool and entered DHCP configuration mode"
    ],
    "ru": [
      "теперь мы создали пул и вошли в режим настройки DHCP"
    ]
  },
  {
    "time": [
      112.882137,
      118.169199
    ],
    "en": [
      "now let's specify the range of addresses we will be handing out to hosts"
    ],
    "ru": [
      "теперь давайте укажем диапазон адресов, которые мы будем раздавать хостам"
    ]
  },
  {
    "time": [
      118.169199,
      121.278032
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
      118.169199,
      121.278032
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
      121.278032,
      129.498115
    ],
    "en": [
      "network 10.0.0.0 255.255.255.0"
    ],
    "ru": [
      "сеть 10.0.0.0 255.255.255.0"
    ]
  },
  {
    "time": [
      129.498115,
      137.19351
    ],
    "en": [
      "next the default gateway default router 10.0.0.1"
    ],
    "ru": [
      "далее шлюз по умолчанию маршрутизатор по умолчанию 10.0.0.1"
    ]
  },
  {
    "time": [
      137.19351,
      145.967364
    ],
    "en": [
      "next the DNS server DNS server 10.0.0.1"
    ],
    "ru": [
      "далее DNS сервер DNS server 10.0.0.1"
    ]
  },
  {
    "time": [
      145.967364,
      149.77353
    ],
    "en": [
      "note that I haven't actually configured a DNS server in this lab"
    ],
    "ru": [
      "обратите внимание, что я на самом деле не настраивал DNS-сервер в этой лабораторной работе."
    ]
  },
  {
    "time": [
      149.77353,
      151.690717
    ],
    "en": [
      "I just wanted to show that command"
    ],
    "ru": [
      "Я просто хотел показать эту команду"
    ]
  },
  {
    "time": [
      151.690717,
      155.490654
    ],
    "en": [
      "finally a range of excluded addresses"
    ],
    "ru": [
      "наконец, диапазон исключенных адресов"
    ]
  },
  {
    "time": [
      155.490654,
      160.25107
    ],
    "en": [
      "these are addresses that our DHCP server won't distribute to hosts"
    ],
    "ru": [
      "это адреса, которые наш DHCP-сервер не раздает хостам"
    ]
  },
  {
    "time": [
      160.25107,
      162.657757
    ],
    "en": [
      "addresses that we want to keep reserved"
    ],
    "ru": [
      "адреса, которые мы хотим сохранить зарезервированными"
    ]
  },
  {
    "time": [
      162.657757,
      166.633673
    ],
    "en": [
      "this is actually not configured in DHCP mode"
    ],
    "ru": [
      "это фактически не настроено в режиме DHCP"
    ]
  },
  {
    "time": [
      166.633673,
      169.325798
    ],
    "en": [
      "its configured in global configuration mode"
    ],
    "ru": [
      "он настроен в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      169.325798,
      176.144464
    ],
    "en": [
      "so exit IP dhcp excluded address"
    ],
    "ru": [
      "поэтому выйдите из IP dhcp excluded address"
    ]
  },
  {
    "time": [
      176.144464,
      178.91286
    ],
    "en": [
      "now we enter the first address in the range"
    ],
    "ru": [
      "теперь мы вводим первый адрес в диапазоне"
    ]
  },
  {
    "time": [
      178.91286,
      185.369318
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
      178.91286,
      185.369318
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
      185.369318,
      194.168693
    ],
    "en": [
      "that will exclude all addresses from 10.0.0.1 to 10.0.0.10 from being distributed by the DHCP server"
    ],
    "ru": [
      "это исключит все адреса от 10.0.0.1 до 10.0.0.10 из распределения DHCP-сервером"
    ]
  },
  {
    "time": [
      194.168693,
      198.718005
    ],
    "en": [
      "now let's configure the next DHCP pool"
    ],
    "ru": [
      "теперь давайте настроим следующий пул DHCP"
    ]
  },
  {
    "time": [
      198.718005,
      209.458838
    ],
    "en": [
      "IP dhcp pool 20 pool network 20.0.0.0 255.255.255.0"
    ],
    "ru": [
      "IP dhcp pool 20 pool network 20.0.0.0 255.255.255.0"
    ]
  },
  {
    "time": [
      209.458838,
      219.400629
    ],
    "en": [
      "default router 20.0.0.1 DNS server 20.0.0.1 exit"
    ],
    "ru": [
      "маршрутизатор по умолчанию 20.0.0.1 DNS-сервер 20.0.0.1 выход"
    ]
  },
  {
    "time": [
      219.400629,
      222.507941
    ],
    "en": [
      "now let's configure an excluded address range again"
    ],
    "ru": [
      "теперь давайте снова настроим исключенный диапазон адресов"
    ]
  },
  {
    "time": [
      222.507941,
      231.985003
    ],
    "en": [
      "IP dhcp excluded address 20.0.0.1 20.0.0.10"
    ],
    "ru": [
      "IP dhcp исключенный адрес 20.0.0.1 20.0.0.10"
    ]
  },
  {
    "time": [
      231.985003,
      236.023941
    ],
    "en": [
      "ok now one more DHCP pool to configure"
    ],
    "ru": [
      "хорошо, теперь еще один пул DHCP для настройки"
    ]
  },
  {
    "time": [
      236.023941,
      240.75267
    ],
    "en": [
      "IP dhcp pool 12 pool"
    ],
    "ru": [
      "IP dhcp pool 12 пул"
    ]
  },
  {
    "time": [
      240.75267,
      249.565898
    ],
    "en": [
      "network 192.168.12.0 255.255.255.0 exit"
    ],
    "ru": [
      "сеть 192.168.12.0 255.255.255.0 выход"
    ]
  },
  {
    "time": [
      249.565898,
      253.451648
    ],
    "en": [
      "ok our DHCP server is now configured"
    ],
    "ru": [
      "хорошо, наш DHCP-сервер теперь настроен"
    ]
  },
  {
    "time": [
      253.451648,
      259.651981
    ],
    "en": [
      "now hosts in the 10.0.0.0 / 24 network should have an IP address"
    ],
    "ru": [
      "теперь хосты в сети 10.0.0.0 / 24 должны иметь IP-адрес"
    ]
  },
  {
    "time": [
      259.651981,
      261.937043
    ],
    "en": [
      "I'll go on PC one"
    ],
    "ru": [
      "Я пойду на ПК один"
    ]
  },
  {
    "time": [
      261.937043,
      270.031522
    ],
    "en": [
      "IP config slash release ipconfig slash renew"
    ],
    "ru": [
      "Выпуск косой черты IP config ipconfig slash обновить"
    ]
  },
  {
    "time": [
      270.031522,
      274.669876
    ],
    "en": [
      "this will make PC 1 refresh its IP configuration"
    ],
    "ru": [
      "это заставит ПК 1 обновить свою IP-конфигурацию"
    ]
  },
  {
    "time": [
      274.669876,
      280.289584
    ],
    "en": [
      "as you can see PC 1 now has an IP address"
    ],
    "ru": [
      "как вы можете видеть, у ПК 1 теперь есть IP-адрес"
    ]
  },
  {
    "time": [
      280.289584,
      286.6525
    ],
    "en": [
      "and a default gateway and DNS server as we configured on our DHCP server r1"
    ],
    "ru": [
      "а также шлюз по умолчанию и DNS-сервер, как мы настроили на нашем DHCP-сервере r1"
    ]
  },
  {
    "time": [
      286.6525,
      289.967
    ],
    "en": [
      "now let's go to step 2"
    ],
    "ru": [
      "теперь перейдем к шагу 2"
    ]
  },
  {
    "time": [
      289.967,
      293.833249
    ],
    "en": [
      "r2 G 0 0 interface has no IP address configured"
    ],
    "ru": [
      "r2 G 0 0 интерфейс не имеет настроенного IP-адреса"
    ]
  },
  {
    "time": [
      293.833249,
      298.299186
    ],
    "en": [
      "typically we would manually configure an IP address"
    ],
    "ru": [
      "обычно мы вручную настраиваем IP-адрес"
    ]
  },
  {
    "time": [
      298.299186,
      303.047186
    ],
    "en": [
      "but I want to show you how to use DHCP to get an IP address for r2"
    ],
    "ru": [
      "но я хочу показать вам, как использовать DHCP для получения IP-адреса для r2"
    ]
  },
  {
    "time": [
      303.047186,
      310.008956
    ],
    "en": [
      "we configured a pool on r1 with the 192.168 12/24 range"
    ],
    "ru": [
      "мы настроили пул на r1 с диапазоном 192.168 12/24"
    ]
  },
  {
    "time": [
      310.008956,
      313.00431
    ],
    "en": [
      "and r2 will get an address from that network"
    ],
    "ru": [
      "и r2 получит адрес из этой сети"
    ]
  },
  {
    "time": [
      313.00431,
      324.099287
    ],
    "en": [
      "let's go on r2 enable conf t interface g 0 0"
    ],
    "ru": [
      "давайте перейдем к r2 enable conf t interface g 0 0"
    ]
  },
  {
    "time": [
      324.099287,
      328.83664
    ],
    "en": [
      "to make it use DHCP to get an IP address use this command"
    ],
    "ru": [
      "чтобы использовать DHCP для получения IP-адреса, используйте эту команду"
    ]
  },
  {
    "time": [
      328.83664,
      332.184265
    ],
    "en": [
      "IP address DHCP"
    ],
    "ru": [
      "IP-адрес DHCP"
    ]
  },
  {
    "time": [
      332.184265,
      335.381515
    ],
    "en": [
      "that's it now let's enable the interface"
    ],
    "ru": [
      "вот и все, теперь давайте включим интерфейс"
    ]
  },
  {
    "time": [
      335.381515,
      337.583494
    ],
    "en": [
      "no shut"
    ],
    "ru": [
      "не закрывай"
    ]
  },
  {
    "time": [
      337.583494,
      346.923077
    ],
    "en": [
      "there we go we get a message stating that r2 was assigned a DHCP address"
    ],
    "ru": [
      "мы идем, мы получаем сообщение о том, что r2 был назначен адрес DHCP"
    ]
  },
  {
    "time": [
      346.923077,
      349.290639
    ],
    "en": [
      "exit"
    ],
    "ru": [
      "выход"
    ]
  },
  {
    "time": [
      349.290639,
      351.082347
    ],
    "en": [
      "step 2 is now complete"
    ],
    "ru": [
      "шаг 2 теперь завершен"
    ]
  },
  {
    "time": [
      351.082347,
      358.843242
    ],
    "en": [
      "step 3 is to configure our to SG 0 1 interface as a DHCP relay agent"
    ],
    "ru": [
      "Шаг 3 - настроить наш интерфейс на SG 0 1 в качестве агента ретрансляции DHCP."
    ]
  },
  {
    "time": [
      358.843242,
      364.017637
    ],
    "en": [
      "so that hosts on the 20.0.0.0 / 24 network can get IP addresses"
    ],
    "ru": [
      "чтобы хосты в сети 20.0.0.0 / 24 могли получать IP-адреса"
    ]
  },
  {
    "time": [
      364.017637,
      373.698198
    ],
    "en": [
      "although r1 is configured to give addresses to the 20.0.0.0 / 24 Network because the hosts aren't connected to the same network as r1"
    ],
    "ru": [
      "хотя r1 настроен для предоставления адресов сети 20.0.0.0 / 24, потому что хосты не подключены к той же сети, что и r1"
    ]
  },
  {
    "time": [
      373.698198,
      377.336531
    ],
    "en": [
      "we need to configure a DHCP relay agent"
    ],
    "ru": [
      "нам нужно настроить агент ретрансляции DHCP"
    ]
  },
  {
    "time": [
      377.336531,
      383.652072
    ],
    "en": [
      "the rule is to configure the relay agent on the layer 3 interface closest to the hosts"
    ],
    "ru": [
      "правило состоит в том, чтобы настроить агент ретрансляции на интерфейсе уровня 3, ближайшем к хостам."
    ]
  },
  {
    "time": [
      383.652072,
      386.92703
    ],
    "en": [
      "in this case r2 sg0 1 interface"
    ],
    "ru": [
      "в этом случае интерфейс r2 sg0 1"
    ]
  },
  {
    "time": [
      386.92703,
      393.821071
    ],
    "en": [
      "first let's check that that pcs don't have addresses in the 2000 0/24 range yet"
    ],
    "ru": [
      "сначала давайте проверим, что у этих компьютеров еще нет адресов в диапазоне 2000 0/24"
    ]
  },
  {
    "time": [
      393.821071,
      396.517383
    ],
    "en": [
      "I'll go on PC 3"
    ],
    "ru": [
      "Я пойду на ПК 3"
    ]
  },
  {
    "time": [
      396.517383,
      407.746799
    ],
    "en": [
      "IP config once again the IP addresses in the 169.254 range an automatic private IP address"
    ],
    "ru": [
      "IP config еще раз IP-адреса в диапазоне 169.254 автоматический частный IP-адрес"
    ]
  },
  {
    "time": [
      407.746799,
      411.982757
    ],
    "en": [
      "let's go configure the relay agent on r2"
    ],
    "ru": [
      "давайте настроим агент ретрансляции на r2"
    ]
  },
  {
    "time": [
      411.982757,
      422.072527
    ],
    "en": [
      "interface G 0 1 to configure the relay agent we just have to use one command"
    ],
    "ru": [
      "интерфейс G 0 1, чтобы настроить агент ретрансляции, нам просто нужно использовать одну команду"
    ]
  },
  {
    "time": [
      422.072527,
      432.179152
    ],
    "en": [
      "IP helper address followed by the address of the DHCP server which is R 1 so 192.168.12.1"
    ],
    "ru": [
      "IP-адрес помощника, за которым следует адрес DHCP-сервера, который является R 1, поэтому 192.168.12.1"
    ]
  },
  {
    "time": [
      432.179152,
      434.253339
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
      434.253339,
      436.900734
    ],
    "en": [
      "now let's go back to pc 3"
    ],
    "ru": [
      "теперь вернемся к пк 3"
    ]
  },
  {
    "time": [
      436.900734,
      446.750567
    ],
    "en": [
      "IP config slash release IP config slash renew"
    ],
    "ru": [
      "Косая черта в IP-конфигурации. Обновить IP-конфигурацию."
    ]
  },
  {
    "time": [
      446.750567,
      452.824379
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
      452.824379,
      461.149212
    ],
    "en": [
      "pc 3 now has an IP address in the 20.0.0.0 slash 24 range as well as a default gateway and dns server"
    ],
    "ru": [
      "pc 3 теперь имеет IP-адрес в диапазоне 20.0.0.0 косой черты 24, а также шлюз по умолчанию и DNS-сервер"
    ]
  },
  {
    "time": [
      461.149212,
      469.385274
    ],
    "en": [
      "since our DHCP relay agent relayed the DHCP messages between the PC and the DHCP server"
    ],
    "ru": [
      "поскольку наш агент ретрансляции DHCP ретранслирует сообщения DHCP между ПК и сервером DHCP."
    ]
  },
  {
    "time": [
      469.385274,
      471.286566
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
      471.286566,
      480.741919
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
      480.741919,
      485.440149
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
      485.440149,
      490.318711
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
      490.318711,
      497.840127
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and a theorem donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и теоремы по адресам в описании"
    ]
  },
  {
    "time": [
      497.840127,
      506.285418
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
      506.285418,
      506.285418
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
      506.285418,
      506.285418
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
      506.285418,
      506.285418
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]