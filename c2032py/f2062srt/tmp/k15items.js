let objs = [
  {
    "time": [
      0.0,
      4.619333
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
      4.619333,
      7.064187
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
      7.064187,
      14.370978
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
      14.370978,
      19.65104
    ],
    "en": [
      "this lab will be the first in a series of three labs on nat"
    ],
    "ru": [
      "эта лаборатория будет первой из трех лабораторий по физ."
    ]
  },
  {
    "time": [
      19.65104,
      21.52106
    ],
    "en": [
      "network address translation"
    ],
    "ru": [
      "преобразование сетевых адресов"
    ]
  },
  {
    "time": [
      21.52106,
      24.654227
    ],
    "en": [
      "this first lab will cover static NAT"
    ],
    "ru": [
      "эта первая лабораторная работа будет посвящена статическому NAT"
    ]
  },
  {
    "time": [
      24.654227,
      35.688352
    ],
    "en": [
      "static NAT creates a one-to-one relationship between an inside address typically an IP address in a private address range such as 192.168.1.0"
    ],
    "ru": [
      "статический NAT создает взаимно-однозначные отношения между внутренним адресом, обычно IP-адресом в диапазоне частных адресов, например 192.168.1.0."
    ]
  },
  {
    "time": [
      35.688352,
      40.248039
    ],
    "en": [
      "and an outside address typically a public IP address on the Internet"
    ],
    "ru": [
      "и внешний адрес, как правило, публичный IP-адрес в Интернете."
    ]
  },
  {
    "time": [
      40.248039,
      45.527434
    ],
    "en": [
      "I won't explain in detail how NAT works hopefully you've already studied it"
    ],
    "ru": [
      "Я не буду подробно объяснять, как работает NAT, надеюсь, вы уже его изучили."
    ]
  },
  {
    "time": [
      45.527434,
      48.876975
    ],
    "en": [
      "this lab will give you some basic practice in configuring static NAT"
    ],
    "ru": [
      "эта лабораторная работа даст вам базовый опыт настройки статического NAT."
    ]
  },
  {
    "time": [
      48.876975,
      52.390495
    ],
    "en": [
      "let's look at step 1"
    ],
    "ru": [
      "давайте посмотрим на шаг 1"
    ]
  },
  {
    "time": [
      52.390495,
      57.679724
    ],
    "en": [
      "rip has been pre-configured so that any device on this network should be able to reach any other device"
    ],
    "ru": [
      "rip был предварительно настроен так, чтобы любое устройство в этой сети могло подключиться к любому другому устройству"
    ]
  },
  {
    "time": [
      57.679724,
      61.691661
    ],
    "en": [
      "let's try a ping from pc-1 server one"
    ],
    "ru": [
      "давайте попробуем пинг с первого сервера pc-1"
    ]
  },
  {
    "time": [
      61.691661,
      67.807911
    ],
    "en": [
      "ping 1.1.1.100"
    ],
    "ru": [
      "пинг 1.1.1.100"
    ]
  },
  {
    "time": [
      67.807911,
      75.442452
    ],
    "en": [
      "it doesn't work why could this be"
    ],
    "ru": [
      "не работает, почему это могло быть"
    ]
  },
  {
    "time": [
      75.442452,
      84.317285
    ],
    "en": [
      "I wrote a hint here stating that the serial connection between r1 and r2 is using ACLs to simulate the Internet"
    ],
    "ru": [
      "Я написал здесь подсказку о том, что последовательное соединение между r1 и r2 использует ACL для имитации Интернета."
    ]
  },
  {
    "time": [
      84.317285,
      86.642639
    ],
    "en": [
      "what exactly does that mean"
    ],
    "ru": [
      "Что именно это означает"
    ]
  },
  {
    "time": [
      86.642639,
      92.007784
    ],
    "en": [
      "well PC ones address is 192.168.1.12"
    ],
    "ru": [
      "ну адрес ПК 192.168.1.12"
    ]
  },
  {
    "time": [
      92.007784,
      94.333284
    ],
    "en": [
      "this is a private IP address"
    ],
    "ru": [
      "это частный IP-адрес"
    ]
  },
  {
    "time": [
      94.333284,
      98.347637
    ],
    "en": [
      "these private IP addresses cannot be routed over the internet"
    ],
    "ru": [
      "эти частные IP-адреса не могут быть маршрутизированы через Интернет"
    ]
  },
  {
    "time": [
      98.347637,
      105.990178
    ],
    "en": [
      "so when PC one attempts to ping server one the source IP is 192.168.1.12"
    ],
    "ru": [
      "поэтому, когда ПК пытается пинговать сервер один, исходный IP-адрес 192.168.1.12"
    ]
  },
  {
    "time": [
      105.990178,
      110.224573
    ],
    "en": [
      "and the destination is 1.1.1.100"
    ],
    "ru": [
      "а пункт назначения - 1.1.1.100"
    ]
  },
  {
    "time": [
      110.224573,
      115.270698
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
      110.224573,
      115.270698
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
      115.270698,
      120.893427
    ],
    "en": [
      "however when server one sends a reply the addresses are swapped"
    ],
    "ru": [
      "однако, когда сервер отправляет ответ, адреса меняются местами"
    ]
  },
  {
    "time": [
      120.893427,
      129.016635
    ],
    "en": [
      "the source addresses 1.1.1.100 and the destination addresses 192.168.1.11"
    ],
    "ru": [
      "адреса источника 1.1.1.100 и адреса назначения 192.168.1.11"
    ]
  },
  {
    "time": [
      129.016635,
      138.210863
    ],
    "en": [
      "because 192.168.1.11 is in the IP address range it cannot be routed over the Internet and is dropped"
    ],
    "ru": [
      "поскольку 192.168.1.11 находится в диапазоне IP-адресов, он не может быть маршрутизирован через Интернет и отбрасывается"
    ]
  },
  {
    "time": [
      138.210863,
      150.4913
    ],
    "en": [
      "so our goal is to configure static NAT on r1 to translate the private IP addresses of pc-1 pc2 and pc3 to public IP addresses"
    ],
    "ru": [
      "поэтому наша цель - настроить статический NAT на r1 для преобразования частных IP-адресов pc-1 pc2 и pc3 в общедоступные IP-адреса."
    ]
  },
  {
    "time": [
      150.4913,
      159.345695
    ],
    "en": [
      "if we do that PC one will send a ping to server one and once again the source address will be 192.168.1.11"
    ],
    "ru": [
      "если мы сделаем этот компьютер, один отправит пинг на первый сервер, и снова адрес источника будет 192.168.1.11"
    ]
  },
  {
    "time": [
      159.345695,
      162.747007
    ],
    "en": [
      "and the destination 1.1.1.100"
    ],
    "ru": [
      "и пункт назначения 1.1.1.100"
    ]
  },
  {
    "time": [
      162.747007,
      166.137611
    ],
    "en": [
      "however when the packet reaches r1"
    ],
    "ru": [
      "однако когда пакет достигает r1"
    ]
  },
  {
    "time": [
      166.137611,
      172.839318
    ],
    "en": [
      "r1 will translate the source address to whatever we specify 1.2.3.11 in this case"
    ],
    "ru": [
      "r1 преобразует исходный адрес в то, что мы укажем 1.2.3.11 в этом случае"
    ]
  },
  {
    "time": [
      172.839318,
      184.239026
    ],
    "en": [
      "when server 1 sends its reply the source address will be once again 1.1.1.100 and the destination 1.2.3.11"
    ],
    "ru": [
      "когда сервер 1 отправляет свой ответ, адрес источника снова будет 1.1.1.100, а адрес назначения - 1.2.3.11."
    ]
  },
  {
    "time": [
      184.239026,
      187.601859
    ],
    "en": [
      "when the reply reaches r1"
    ],
    "ru": [
      "когда ответ достигает r1"
    ]
  },
  {
    "time": [
      187.601859,
      196.954588
    ],
    "en": [
      "r1 will translate the destination address from 1.2.3.11 back to PC ones address of 192.168.1.11"
    ],
    "ru": [
      "r1 переведет адрес назначения из 1.2.3.11 обратно в адрес компьютера 192.168.1.11."
    ]
  },
  {
    "time": [
      196.954588,
      200.716775
    ],
    "en": [
      "so let's get to the configuration on r1"
    ],
    "ru": [
      "так что перейдем к настройке на r1"
    ]
  },
  {
    "time": [
      200.716775,
      211.820129
    ],
    "en": [
      "enable conf t first we have to specify r1s interfaces as inside or outside nat interfaces"
    ],
    "ru": [
      "сначала enable conf t, мы должны указать интерфейсы r1s как внутренние или внешние интерфейсы nat"
    ]
  },
  {
    "time": [
      211.820129,
      218.424356
    ],
    "en": [
      "the inside interface faces our inside private network so G 0 0 in this case"
    ],
    "ru": [
      "внутренний интерфейс обращен к нашей внутренней частной сети, поэтому G 0 0 в этом случае"
    ]
  },
  {
    "time": [
      218.424356,
      224.46898
    ],
    "en": [
      "interface G 0 0 IP NAT inside"
    ],
    "ru": [
      "интерфейс G 0 0 IP NAT внутри"
    ]
  },
  {
    "time": [
      224.46898,
      228.146188
    ],
    "en": [
      "the outside interface will be s 0 3 0"
    ],
    "ru": [
      "внешний интерфейс будет s 0 3 0"
    ]
  },
  {
    "time": [
      228.146188,
      231.055271
    ],
    "en": [
      "our interface facing the internet"
    ],
    "ru": [
      "наш интерфейс обращен к Интернету"
    ]
  },
  {
    "time": [
      231.055271,
      237.902812
    ],
    "en": [
      "interface as a 0 3 0 IP NAT outside exit"
    ],
    "ru": [
      "интерфейс как внешний выход 0 3 0 IP NAT"
    ]
  },
  {
    "time": [
      237.902812,
      241.478312
    ],
    "en": [
      "now let's configure the translations themselves"
    ],
    "ru": [
      "теперь давайте настроим сами переводы"
    ]
  },
  {
    "time": [
      241.478312,
      244.823249
    ],
    "en": [
      "static NAT is configured with the following command"
    ],
    "ru": [
      "статический NAT настраивается с помощью следующей команды"
    ]
  },
  {
    "time": [
      244.823249,
      254.36979
    ],
    "en": [
      "IP NAT inside source static followed by the inside private address then the outside public address"
    ],
    "ru": [
      "IP NAT внутри статического источника, за которым следует внутренний частный адрес, а затем внешний общедоступный адрес"
    ]
  },
  {
    "time": [
      254.36979,
      264.81306
    ],
    "en": [
      "so for PC 1 are inside addresses 192.168.1.11 and our outside addresses 1.2.3.11"
    ],
    "ru": [
      "так что для ПК 1 это внутренние адреса 192.168.1.11 и наши внешние адреса 1.2.3.11"
    ]
  },
  {
    "time": [
      264.81306,
      267.472518
    ],
    "en": [
      "okay that's it for a PC 1"
    ],
    "ru": [
      "ладно это для ПК 1"
    ]
  },
  {
    "time": [
      267.472518,
      272.13633
    ],
    "en": [
      "now let's do the same command for PC 2 just changing the addresses"
    ],
    "ru": [
      "теперь давайте сделаем ту же команду для ПК 2, просто изменим адреса"
    ]
  },
  {
    "time": [
      272.13633,
      282.166705
    ],
    "en": [
      "IP nat inside source static 192.168.1.12 1.2.3.12"
    ],
    "ru": [
      "IP-адрес внутри источника статический 192.168.1.12 1.2.3.12"
    ]
  },
  {
    "time": [
      282.166705,
      284.493017
    ],
    "en": [
      "finally for pc 3"
    ],
    "ru": [
      "наконец для ПК 3"
    ]
  },
  {
    "time": [
      284.493017,
      294.918267
    ],
    "en": [
      "IP nat inside source static 192.168.1.13 1.2.3.13"
    ],
    "ru": [
      "IP-адрес внутри источника статический 192.168.1.13 1.2.3.13"
    ]
  },
  {
    "time": [
      294.918267,
      298.565683
    ],
    "en": [
      "ok our nat configuration is now complete"
    ],
    "ru": [
      "хорошо, наша конфигурация nat теперь завершена"
    ]
  },
  {
    "time": [
      298.565683,
      302.212683
    ],
    "en": [
      "let's go on the PCs and try to ping server 1 again"
    ],
    "ru": [
      "пойдем на ПК и попробуем снова пинговать сервер 1"
    ]
  },
  {
    "time": [
      302.212683,
      305.232183
    ],
    "en": [
      "from pc1 first"
    ],
    "ru": [
      "сначала с ПК1"
    ]
  },
  {
    "time": [
      305.232183,
      316.230766
    ],
    "en": [
      "ping 1.1.1.100 the ping works this time"
    ],
    "ru": [
      "ping 1.1.1.100 на этот раз пинг работает"
    ]
  },
  {
    "time": [
      316.230766,
      319.347682
    ],
    "en": [
      "so our NAT configuration has been successful"
    ],
    "ru": [
      "Итак, наша конфигурация NAT была успешной"
    ]
  },
  {
    "time": [
      319.347682,
      323.432078
    ],
    "en": [
      "just to make sure I'll ping from PC 2 and PC 3 as well"
    ],
    "ru": [
      "просто чтобы убедиться, что я пингую с ПК 2 и ПК 3"
    ]
  },
  {
    "time": [
      323.432078,
      334.928432
    ],
    "en": [
      "PC 2 first ping 1.1.1.100 again the ping works"
    ],
    "ru": [
      "ПК 2 первый пинг 1.1.1.100 снова пинг работает"
    ]
  },
  {
    "time": [
      334.928432,
      338.319911
    ],
    "en": [
      "finally let's ping from PC 3"
    ],
    "ru": [
      "наконец-то пингуем с ПК 3"
    ]
  },
  {
    "time": [
      338.319911,
      347.299181
    ],
    "en": [
      "ping 1.1.1.100 PC 3 works as well"
    ],
    "ru": [
      "ping 1.1.1.100 PC 3 тоже работает"
    ]
  },
  {
    "time": [
      347.299181,
      348.87966
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
      348.87966,
      355.49166
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
      355.49166,
      359.738805
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
      359.738805,
      364.593596
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
      364.593596,
      371.895408
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
      371.895408,
      379.191699
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
      379.191699,
      379.191699
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
      379.191699,
      379.191699
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
      379.191699,
      379.191699
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]