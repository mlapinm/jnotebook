let objs = [
  {
    "time": [
      0.0,
      8.474875
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab you can download the lab file from the link in the description"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную лабораторную практику по трассировщику пакетов CCNA, вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      8.474875,
      12.773916
    ],
    "en": [
      "in this lab we will look at DNS"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим DNS"
    ]
  },
  {
    "time": [
      12.773916,
      22.897269
    ],
    "en": [
      "the domain name System DNS is used to translate names such as Cisco.com or google.com to their appropriate IP addresses"
    ],
    "ru": [
      "DNS системы доменных имен используется для преобразования таких имен, как Cisco.com или google.com, в соответствующие IP-адреса."
    ]
  },
  {
    "time": [
      22.897269,
      27.329394
    ],
    "en": [
      "for us humans these names are easier to remember than IP addresses"
    ],
    "ru": [
      "для нас, людей, эти имена легче запомнить, чем IP-адреса"
    ]
  },
  {
    "time": [
      27.329394,
      32.781602
    ],
    "en": [
      "and I'm sure very few of us actually know the IP address of google.com for example"
    ],
    "ru": [
      "и я уверен, что очень немногие из нас действительно знают IP-адрес google.com, например"
    ]
  },
  {
    "time": [
      32.781602,
      35.473206
    ],
    "en": [
      "so DNS is very useful"
    ],
    "ru": [
      "так что DNS очень полезен"
    ]
  },
  {
    "time": [
      35.473206,
      45.524622
    ],
    "en": [
      "in this lab I have set up a DNS server DNS one with the host names of all the servers and networking devices and their corresponding IP addresses configured"
    ],
    "ru": [
      "в этой лабораторной работе я настроил DNS-сервер DNS с именами узлов всех серверов и сетевых устройств и их соответствующими IP-адресами."
    ]
  },
  {
    "time": [
      45.524622,
      55.310517
    ],
    "en": [
      "we will use DHCP again to give pc1 & pc2 their IP addresses as well as tell them to use DNS 1 as a DNS server"
    ],
    "ru": [
      "мы снова будем использовать DHCP, чтобы дать pc1 и pc2 их IP-адреса, а также указать им использовать DNS 1 в качестве DNS-сервера."
    ]
  },
  {
    "time": [
      55.310517,
      63.750225
    ],
    "en": [
      "let's get started the first step is to set up a DHCP pool on r one like we did in the previous lab"
    ],
    "ru": [
      "давайте начнем, первый шаг - настроить пул DHCP на r one, как мы делали в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      63.750225,
      76.952245
    ],
    "en": [
      "enable conf t before I make the pool I'll set up the excluded address range which if you remember is configured outside of DHCP configuration mode"
    ],
    "ru": [
      "enable conf t, прежде чем я сделаю пул, я настрою исключенный диапазон адресов, который, если вы помните, настроен вне режима конфигурации DHCP"
    ]
  },
  {
    "time": [
      76.952245,
      88.378015
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
      88.378015,
      91.191265
    ],
    "en": [
      "ok now let's make the pool"
    ],
    "ru": [
      "хорошо, теперь давайте сделаем бассейн"
    ]
  },
  {
    "time": [
      91.191265,
      106.306285
    ],
    "en": [
      "IP dhcp pool one pool network 192.168.1.0 255.255.255.0 default router 192.168.1.1"
    ],
    "ru": [
      "IP dhcp pool one pool network 192.168.1.0 255.255.255.0 маршрутизатор по умолчанию 192.168.1.1"
    ]
  },
  {
    "time": [
      106.306285,
      109.533326
    ],
    "en": [
      "we won't specify a DNS server just yet"
    ],
    "ru": [
      "мы пока не будем указывать DNS-сервер"
    ]
  },
  {
    "time": [
      109.533326,
      116.262075
    ],
    "en": [
      "now let's go on pc one just to make sure i'll do our release and renew"
    ],
    "ru": [
      "теперь давайте перейдем на один компьютер, чтобы убедиться, что я выпущу наш релиз и продлю"
    ]
  },
  {
    "time": [
      116.262075,
      121.865075
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
      121.865075,
      126.63597
    ],
    "en": [
      "okay now pc one has an IP address and default gateway"
    ],
    "ru": [
      "хорошо, теперь у ПК есть IP-адрес и шлюз по умолчанию"
    ]
  },
  {
    "time": [
      126.63597,
      129.465054
    ],
    "en": [
      "however it has no dns server yet"
    ],
    "ru": [
      "однако у него еще нет DNS-сервера"
    ]
  },
  {
    "time": [
      129.465054,
      133.267595
    ],
    "en": [
      "let's try to ping server 1 by IP address"
    ],
    "ru": [
      "давайте попробуем пинговать сервер 1 по IP-адресу"
    ]
  },
  {
    "time": [
      133.267595,
      144.59947
    ],
    "en": [
      "ping 10.0.0.101 the ping works"
    ],
    "ru": [
      "ping 10.0.0.101 ping работает"
    ]
  },
  {
    "time": [
      144.59947,
      149.537615
    ],
    "en": [
      "it sends the ping to its default gateway r1 which then fords it to a server 1"
    ],
    "ru": [
      "он отправляет эхо-запрос на свой шлюз по умолчанию r1, который затем перенаправляет его на сервер 1"
    ]
  },
  {
    "time": [
      149.537615,
      152.312594
    ],
    "en": [
      "now let's try to ping by name"
    ],
    "ru": [
      "теперь попробуем пинговать по имени"
    ]
  },
  {
    "time": [
      152.312594,
      158.507094
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
      158.507094,
      165.263988
    ],
    "en": [
      "ping request could not find host server one without a DNS server assigned PC one can't translate the name server 1 to the appropriate IP address"
    ],
    "ru": [
      "запрос ping не смог найти хост-сервер 1 без назначенного DNS-сервера ПК, невозможно преобразовать сервер имен 1 в соответствующий IP-адрес"
    ]
  },
  {
    "time": [
      165.263988,
      166.682571
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
      166.682571,
      174.948508
    ],
    "en": [
      "let's go back on r1 and add the DNS 1 server as a DNS server to the DHCP pool"
    ],
    "ru": [
      "вернемся к r1 и добавим сервер DNS 1 в качестве DNS-сервера в пул DHCP"
    ]
  },
  {
    "time": [
      174.948508,
      181.673737
    ],
    "en": [
      "DNS server 20.0.0.100"
    ],
    "ru": [
      "DNS-сервер 20.0.0.100"
    ]
  },
  {
    "time": [
      181.673737,
      188.756007
    ],
    "en": [
      "now I'll go back on PC 1 and do another release and renew to refresh the information and get the DNS server"
    ],
    "ru": [
      "теперь я вернусь к ПК 1 и сделаю еще один выпуск и обновлю, чтобы обновить информацию и получить DNS-сервер"
    ]
  },
  {
    "time": [
      188.756007,
      194.586152
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
      194.586152,
      198.599547
    ],
    "en": [
      "ok now we've got the DNS server information"
    ],
    "ru": [
      "хорошо, теперь у нас есть информация о DNS-сервере"
    ]
  },
  {
    "time": [
      198.599547,
      201.544338
    ],
    "en": [
      "let's try to ping server 1 and server 2 by name"
    ],
    "ru": [
      "давайте попробуем пинговать сервер 1 и сервер 2 по имени"
    ]
  },
  {
    "time": [
      201.544338,
      204.6489
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
      204.6489,
      214.201962
    ],
    "en": [
      "it can take some time to reach the DNS server to resolve the name to the IP address but in the end the ping works"
    ],
    "ru": [
      "может потребоваться некоторое время, чтобы связаться с DNS-сервером и преобразовать имя в IP-адрес, но в конце концов эхо-запрос работает."
    ]
  },
  {
    "time": [
      214.201962,
      219.283462
    ],
    "en": [
      "okay now let's ping server 2 by name as well"
    ],
    "ru": [
      "Хорошо, теперь давайте также пингуем сервер 2 по имени"
    ]
  },
  {
    "time": [
      219.283462,
      231.594982
    ],
    "en": [
      "ping server 2 again the ping works"
    ],
    "ru": [
      "ping server 2 снова ping работает"
    ]
  },
  {
    "time": [
      231.594982,
      243.540252
    ],
    "en": [
      "notice that although we use the command ping server 2 immediately under it says pinging 10.0.0.102 as the DNS server result the name to the proper IP address"
    ],
    "ru": [
      "обратите внимание, что хотя мы используем команду ping server 2 непосредственно под ней, она говорит pinging 10.0.0.102, поскольку DNS-сервер приводит имя к правильному IP-адресу"
    ]
  },
  {
    "time": [
      243.540252,
      248.91596
    ],
    "en": [
      "next is to try the same from switch 1"
    ],
    "ru": [
      "Далее следует попробовать то же самое с переключателя 1"
    ]
  },
  {
    "time": [
      248.91596,
      252.640897
    ],
    "en": [
      "switch 1 has an IP address on its VLAN 1 interface"
    ],
    "ru": [
      "коммутатор 1 имеет IP-адрес на своем интерфейсе VLAN 1"
    ]
  },
  {
    "time": [
      252.640897,
      254.963855
    ],
    "en": [
      "so it can send and receive pings"
    ],
    "ru": [
      "чтобы он мог отправлять и получать пинги"
    ]
  },
  {
    "time": [
      254.963855,
      258.606396
    ],
    "en": [
      "however let's see if you can do so without any further setup"
    ],
    "ru": [
      "однако давайте посмотрим, сможете ли вы сделать это без дополнительной настройки"
    ]
  },
  {
    "time": [
      258.606396,
      271.754125
    ],
    "en": [
      "enable ping 10.0.0.101 the ping fails"
    ],
    "ru": [
      "включить пинг 10.0.0.101 пинг не работает"
    ]
  },
  {
    "time": [
      271.754125,
      276.659979
    ],
    "en": [
      "since the ping by IP address fails there's no need to try to ping by name"
    ],
    "ru": [
      "так как пинг по IP-адресу не выполняется, нет необходимости пытаться пинговать по имени"
    ]
  },
  {
    "time": [
      276.659979,
      279.814249
    ],
    "en": [
      "if PC one camp in server 1"
    ],
    "ru": [
      "если ПК один лагерь на сервере 1"
    ]
  },
  {
    "time": [
      279.814249,
      281.272186
    ],
    "en": [
      "Y can't switch 1"
    ],
    "ru": [
      "Y не могу переключиться 1"
    ]
  },
  {
    "time": [
      281.272186,
      289.766061
    ],
    "en": [
      "well r1 has distributed default gateway and DNS information to PC 1 via DHCP"
    ],
    "ru": [
      "ну, r1 распространил шлюз по умолчанию и информацию DNS на ПК 1 через DHCP"
    ]
  },
  {
    "time": [
      289.766061,
      292.456165
    ],
    "en": [
      "however it's not giving that information to switch 1"
    ],
    "ru": [
      "однако он не дает этой информации переключателю 1"
    ]
  },
  {
    "time": [
      292.456165,
      301.041248
    ],
    "en": [
      "so let's manually configure r1 as switch ones default gateway and DNS 1 as switch ones DNS server"
    ],
    "ru": [
      "поэтому давайте вручную настроим r1 в качестве шлюза по умолчанию для коммутатора и DNS 1 в качестве DNS-сервера коммутатора"
    ]
  },
  {
    "time": [
      301.041248,
      306.739706
    ],
    "en": [
      "conf t to specify a default gateway use this command"
    ],
    "ru": [
      "conf t, чтобы указать шлюз по умолчанию, используйте эту команду"
    ]
  },
  {
    "time": [
      306.739706,
      312.818393
    ],
    "en": [
      "IP default gateway 192.168.1.1"
    ],
    "ru": [
      "IP-шлюз по умолчанию 192.168.1.1"
    ]
  },
  {
    "time": [
      312.818393,
      316.78833
    ],
    "en": [
      "ok now to specify a DNS server use this command"
    ],
    "ru": [
      "Хорошо, теперь, чтобы указать DNS-сервер, используйте эту команду"
    ]
  },
  {
    "time": [
      316.78833,
      323.537809
    ],
    "en": [
      "IP name server 20.0.0.100 exit"
    ],
    "ru": [
      "Сервер IP-имен 20.0.0.100 выход"
    ]
  },
  {
    "time": [
      323.537809,
      325.892475
    ],
    "en": [
      "ok let's try those pings again"
    ],
    "ru": [
      "хорошо, давай попробуем эти пинги еще раз"
    ]
  },
  {
    "time": [
      325.892475,
      330.184829
    ],
    "en": [
      "ping 1000 101"
    ],
    "ru": [
      "пинг 1000101"
    ]
  },
  {
    "time": [
      330.184829,
      336.472724
    ],
    "en": [
      "ping works this time"
    ],
    "ru": [
      "пинг работает на этот раз"
    ]
  },
  {
    "time": [
      336.472724,
      341.103349
    ],
    "en": [
      "and now let's try to ping by name and see if our dns configuration works"
    ],
    "ru": [
      "а теперь давайте попробуем пинговать по имени и посмотреть, работает ли наша конфигурация DNS"
    ]
  },
  {
    "time": [
      341.103349,
      364.241869
    ],
    "en": [
      "ping server one it works again and actually you can see the message here translating server 1 domain server 20.0.0.100 and then down here the IP address of server 1 10.0.0.101"
    ],
    "ru": [
      "ping server one, он снова работает, и на самом деле вы можете увидеть здесь сообщение, переводящее сервер 1 домена, сервер 20.0.0.100, а затем здесь IP-адрес сервера 1 10.0.0.101"
    ]
  },
  {
    "time": [
      364.241869,
      369.901452
    ],
    "en": [
      "ok in this lab we took a bit of a look at DNS the domain name system"
    ],
    "ru": [
      "хорошо, в этой лабораторной работе мы немного взглянули на DNS, систему доменных имен"
    ]
  },
  {
    "time": [
      369.901452,
      371.199618
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
      371.199618,
      377.880513
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
      377.880513,
      382.434304
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
      382.434304,
      387.398908
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
      387.398908,
      394.742137
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      394.742137,
      403.406553
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
      403.406553,
      403.406553
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
      403.406553,
      403.406553
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
      403.406553,
      403.406553
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]