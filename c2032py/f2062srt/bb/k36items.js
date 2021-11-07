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
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      9.0,
      13.0
    ],
    "en": [
      "this lab we will look at DNS the domain"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим DNS домен"
    ]
  },
  {
    "time": [
      13.0,
      16.0
    ],
    "en": [
      "name System DNS is used to translate"
    ],
    "ru": [
      "имя System DNS используется для перевода"
    ]
  },
  {
    "time": [
      16.0,
      19.0
    ],
    "en": [
      "names such as Cisco comm or google.com"
    ],
    "ru": [
      "такие имена, как Cisco comm или google.com"
    ]
  },
  {
    "time": [
      19.0,
      23.0
    ],
    "en": [
      "to their appropriate IP addresses for us"
    ],
    "ru": [
      "на их соответствующие IP-адреса для нас"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "humans these names are easier to"
    ],
    "ru": [
      "люди эти имена легче"
    ]
  },
  {
    "time": [
      25.0,
      28.0
    ],
    "en": [
      "remember than IP addresses and I'm sure"
    ],
    "ru": [
      "помните, чем IP-адреса, и я уверен"
    ]
  },
  {
    "time": [
      28.0,
      29.0
    ],
    "en": [
      "very few of us actually know the IP"
    ],
    "ru": [
      "очень немногие из нас действительно знают IP"
    ]
  },
  {
    "time": [
      29.0,
      33.0
    ],
    "en": [
      "address of google.com for example so DNS"
    ],
    "ru": [
      "адрес google.com например, так что DNS"
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "is very useful in this lab I have set up"
    ],
    "ru": [
      "очень полезен в этой лабораторной работе, которую я настроил"
    ]
  },
  {
    "time": [
      36.0,
      40.0
    ],
    "en": [
      "a DNS server DNS one with the host names"
    ],
    "ru": [
      "DNS-сервер DNS с именами хостов"
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "of all the servers and networking"
    ],
    "ru": [
      "всех серверов и сетей"
    ]
  },
  {
    "time": [
      42.0,
      43.0
    ],
    "en": [
      "devices and their corresponding IP"
    ],
    "ru": [
      "устройства и их соответствующие IP"
    ]
  },
  {
    "time": [
      43.0,
      47.0
    ],
    "en": [
      "addresses configured we will use DHCP"
    ],
    "ru": [
      "настроены адреса, мы будем использовать DHCP"
    ]
  },
  {
    "time": [
      47.0,
      50.0
    ],
    "en": [
      "again to give pc1 & pc2 their IP"
    ],
    "ru": [
      "снова, чтобы дать pc1 и pc2 их IP"
    ]
  },
  {
    "time": [
      50.0,
      52.0
    ],
    "en": [
      "addresses as well as tell them to use"
    ],
    "ru": [
      "адреса, а также скажите им использовать"
    ]
  },
  {
    "time": [
      52.0,
      57.0
    ],
    "en": [
      "DNS 1 as a DNS server let's get started"
    ],
    "ru": [
      "DNS 1 как DNS-сервер приступим"
    ]
  },
  {
    "time": [
      57.0,
      61.0
    ],
    "en": [
      "the first step is to set up a DHCP pool"
    ],
    "ru": [
      "первый шаг - настроить пул DHCP"
    ]
  },
  {
    "time": [
      61.0,
      62.0
    ],
    "en": [
      "on our one like we did in the previous"
    ],
    "ru": [
      "на нашем, как мы делали в предыдущем"
    ]
  },
  {
    "time": [
      62.0,
      69.0
    ],
    "en": [
      "lab enable compte before I make the pool"
    ],
    "ru": [
      "лаборатория включить compte, прежде чем я сделаю пул"
    ]
  },
  {
    "time": [
      69.0,
      72.0
    ],
    "en": [
      "I'll set up the excluded address range"
    ],
    "ru": [
      "Я настрою исключенный диапазон адресов"
    ]
  },
  {
    "time": [
      72.0,
      74.0
    ],
    "en": [
      "which if you remember is configured"
    ],
    "ru": [
      "который, если вы помните, настроен"
    ]
  },
  {
    "time": [
      74.0,
      78.0
    ],
    "en": [
      "outside of DHCP configuration mode IP"
    ],
    "ru": [
      "вне режима конфигурации DHCP IP"
    ]
  },
  {
    "time": [
      78.0,
      86.0
    ],
    "en": [
      "dhcp excluded address 192.168.1.1"
    ],
    "ru": [
      "исключенный адрес dhcp 192.168.1.1"
    ]
  },
  {
    "time": [
      86.0,
      90.0
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
      90.0
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
      90.0,
      96.0
    ],
    "en": [
      "IP dhcp pool one pool network"
    ],
    "ru": [
      "IP dhcp pool one pool network"
    ]
  },
  {
    "time": [
      96.0,
      104.0
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
      96.0,
      104.0
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
      104.0,
      108.0
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
      104.0,
      108.0
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
      108.0,
      112.0
    ],
    "en": [
      "server just yet now let's go on pc one"
    ],
    "ru": [
      "сервер только сейчас давайте перейдем на компьютер один"
    ]
  },
  {
    "time": [
      112.0,
      115.0
    ],
    "en": [
      "just to make sure i'll do our release"
    ],
    "ru": [
      "просто чтобы убедиться, что я сделаю наш релиз"
    ]
  },
  {
    "time": [
      115.0,
      119.0
    ],
    "en": [
      "and renew IP config slash release IP"
    ],
    "ru": [
      "и обновить IP-адрес релиза косой черты IP"
    ]
  },
  {
    "time": [
      119.0,
      122.0
    ],
    "en": [
      "config slash renew"
    ],
    "ru": [
      "косая черта конфигурации обновить"
    ]
  },
  {
    "time": [
      122.0,
      125.0
    ],
    "en": [
      "okay now pc one has an IP address and"
    ],
    "ru": [
      "хорошо, теперь у ПК есть IP-адрес и"
    ]
  },
  {
    "time": [
      125.0,
      128.0
    ],
    "en": [
      "default gateway however it has no dns"
    ],
    "ru": [
      "шлюз по умолчанию, но у него нет DNS"
    ]
  },
  {
    "time": [
      128.0,
      131.0
    ],
    "en": [
      "server yet let's try to ping server 1 by"
    ],
    "ru": [
      "сервер, но давайте попробуем пинговать сервер 1 с помощью"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "IP address"
    ],
    "ru": [
      "айпи адрес"
    ]
  },
  {
    "time": [
      133.0,
      145.0
    ],
    "en": [
      "ting 1000 101 the ping works it sends"
    ],
    "ru": [
      "тинг 1000 101 пинг работает, он отправляет"
    ]
  },
  {
    "time": [
      145.0,
      147.0
    ],
    "en": [
      "the ping to its default gateway r1 which"
    ],
    "ru": [
      "эхо-запрос на свой шлюз по умолчанию r1, который"
    ]
  },
  {
    "time": [
      147.0,
      150.0
    ],
    "en": [
      "then fords it to a server 1 now let's"
    ],
    "ru": [
      "затем отправляет его на сервер 1, теперь давайте"
    ]
  },
  {
    "time": [
      150.0,
      155.0
    ],
    "en": [
      "try to ping by name ping server 1 ping"
    ],
    "ru": [
      "попробуйте пинговать по имени пинг сервер 1 пинг"
    ]
  },
  {
    "time": [
      155.0,
      158.0
    ],
    "en": [
      "request could not find host server one"
    ],
    "ru": [
      "запрос не может найти хост-сервер один"
    ]
  },
  {
    "time": [
      158.0,
      160.0
    ],
    "en": [
      "without a DNS server assigned PC one"
    ],
    "ru": [
      "без DNS-сервера назначен ПК один"
    ]
  },
  {
    "time": [
      160.0,
      163.0
    ],
    "en": [
      "can't translate the name server 1 to the"
    ],
    "ru": [
      "не может перевести имя сервера 1 в"
    ]
  },
  {
    "time": [
      163.0,
      167.0
    ],
    "en": [
      "appropriate IP address let's fix that"
    ],
    "ru": [
      "соответствующий IP-адрес, давайте исправим это"
    ]
  },
  {
    "time": [
      167.0,
      171.0
    ],
    "en": [
      "let's go back on r1 and add the DNS 1"
    ],
    "ru": [
      "вернемся к r1 и добавим DNS 1"
    ]
  },
  {
    "time": [
      171.0,
      176.0
    ],
    "en": [
      "server as a DNS server to the DHCP pool"
    ],
    "ru": [
      "сервер в качестве DNS-сервера для пула DHCP"
    ]
  },
  {
    "time": [
      176.0,
      183.0
    ],
    "en": [
      "DNS server 2000 100 now I'll go back on"
    ],
    "ru": [
      "DNS-сервер 2000 100, теперь я вернусь к"
    ]
  },
  {
    "time": [
      183.0,
      186.0
    ],
    "en": [
      "PC 1 and do another release and renew to"
    ],
    "ru": [
      "ПК 1, сделайте еще один выпуск и обновите его до"
    ]
  },
  {
    "time": [
      186.0,
      187.0
    ],
    "en": [
      "refresh the information and get the DNS"
    ],
    "ru": [
      "обновите информацию и получите DNS"
    ]
  },
  {
    "time": [
      187.0,
      193.0
    ],
    "en": [
      "server IP config slash release IP config"
    ],
    "ru": [
      "IP-конфигурация сервера косая черта релиз IP-конфигурация"
    ]
  },
  {
    "time": [
      193.0,
      197.0
    ],
    "en": [
      "slash renew ok now we've got the DNS"
    ],
    "ru": [
      "косая черта обновить хорошо, теперь у нас есть DNS"
    ]
  },
  {
    "time": [
      197.0,
      199.0
    ],
    "en": [
      "server information let's try to ping"
    ],
    "ru": [
      "информация о сервере давайте попробуем пинговать"
    ]
  },
  {
    "time": [
      199.0,
      202.0
    ],
    "en": [
      "server 1 and serve a2 by name ping"
    ],
    "ru": [
      "сервер 1 и обслужить a2 по имени ping"
    ]
  },
  {
    "time": [
      202.0,
      208.0
    ],
    "en": [
      "server 1 it can take some time to reach"
    ],
    "ru": [
      "сервер 1 может потребоваться некоторое время, чтобы достичь"
    ]
  },
  {
    "time": [
      208.0,
      211.0
    ],
    "en": [
      "the DNS server to resolve the name to"
    ],
    "ru": [
      "DNS-сервер для разрешения имени"
    ]
  },
  {
    "time": [
      211.0,
      213.0
    ],
    "en": [
      "the IP address but in the end the ping"
    ],
    "ru": [
      "IP-адрес, но, в конце концов, пинг"
    ]
  },
  {
    "time": [
      213.0,
      215.0
    ],
    "en": [
      "works"
    ],
    "ru": [
      "работает"
    ]
  },
  {
    "time": [
      215.0,
      218.0
    ],
    "en": [
      "okay now let's ping server 2 by name as"
    ],
    "ru": [
      "хорошо, теперь давайте пингуем сервер 2 по имени как"
    ]
  },
  {
    "time": [
      218.0,
      218.0
    ],
    "en": [
      "well"
    ],
    "ru": [
      "хорошо"
    ]
  },
  {
    "time": [
      218.0,
      229.0
    ],
    "en": [
      "ping server 2"
    ],
    "ru": [
      "пинг сервер 2"
    ]
  },
  {
    "time": [
      229.0,
      232.0
    ],
    "en": [
      "again the ping works notice that"
    ],
    "ru": [
      "снова пинг работает, обратите внимание, что"
    ]
  },
  {
    "time": [
      232.0,
      234.0
    ],
    "en": [
      "although we use the command ping server"
    ],
    "ru": [
      "хотя мы используем команду ping server"
    ]
  },
  {
    "time": [
      234.0,
      237.0
    ],
    "en": [
      "to immediately under it says pinging"
    ],
    "ru": [
      "чтобы сразу под ним говорит пинг"
    ]
  },
  {
    "time": [
      237.0,
      241.0
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
      241.0
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
      241.0,
      246.0
    ],
    "en": [
      "the name to the proper IP address next"
    ],
    "ru": [
      "имя на правильный IP-адрес следующий"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "is to try the same from switch 1 switch"
    ],
    "ru": [
      "это попробовать то же самое с переключателя 1 переключателя"
    ]
  },
  {
    "time": [
      249.0,
      251.0
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
      249.0,
      251.0
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
      251.0,
      253.0
    ],
    "en": [
      "interface so it can send and receive"
    ],
    "ru": [
      "интерфейс, чтобы он мог отправлять и получать"
    ]
  },
  {
    "time": [
      253.0,
      257.0
    ],
    "en": [
      "pings however let's see if you can do so"
    ],
    "ru": [
      "пинги, но давайте посмотрим, сможете ли вы это сделать"
    ]
  },
  {
    "time": [
      257.0,
      261.0
    ],
    "en": [
      "without any further setup an able ping"
    ],
    "ru": [
      "без какой-либо дополнительной настройки способный пинг"
    ]
  },
  {
    "time": [
      261.0,
      271.0
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
      261.0,
      271.0
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
      271.0,
      274.0
    ],
    "en": [
      "since the ping by IP address fails"
    ],
    "ru": [
      "так как пинг по IP-адресу не работает"
    ]
  },
  {
    "time": [
      274.0,
      276.0
    ],
    "en": [
      "there's no need to try to ping by name"
    ],
    "ru": [
      "нет необходимости пытаться пинговать по имени"
    ]
  },
  {
    "time": [
      276.0,
      280.0
    ],
    "en": [
      "if PC one camp in server 1 Y can't"
    ],
    "ru": [
      "если ПК один лагерь на сервере 1 Y не может"
    ]
  },
  {
    "time": [
      280.0,
      284.0
    ],
    "en": [
      "switch 1 well r1 has distributed default"
    ],
    "ru": [
      "переключатель 1 колодец r1 распределил по умолчанию"
    ]
  },
  {
    "time": [
      284.0,
      287.0
    ],
    "en": [
      "gateway and DNS information to PC 1 via"
    ],
    "ru": [
      "информация о шлюзе и DNS на ПК 1 через"
    ]
  },
  {
    "time": [
      287.0,
      290.0
    ],
    "en": [
      "DHCP however it's not giving that"
    ],
    "ru": [
      "DHCP, однако это не дает"
    ]
  },
  {
    "time": [
      290.0,
      293.0
    ],
    "en": [
      "information to switch 1 so let's"
    ],
    "ru": [
      "информация для переключения 1, так что давайте"
    ]
  },
  {
    "time": [
      293.0,
      296.0
    ],
    "en": [
      "manually configure r1 as switch ones"
    ],
    "ru": [
      "вручную настроить r1 как коммутатор"
    ]
  },
  {
    "time": [
      296.0,
      299.0
    ],
    "en": [
      "default gateway and DNS 1 as switch ones"
    ],
    "ru": [
      "шлюз по умолчанию и DNS 1 как переключатели"
    ]
  },
  {
    "time": [
      299.0,
      304.0
    ],
    "en": [
      "DNS server compte to specify a default"
    ],
    "ru": [
      "DNS-сервер compte, чтобы указать значение по умолчанию"
    ]
  },
  {
    "time": [
      304.0,
      308.0
    ],
    "en": [
      "gateway use this command IP default"
    ],
    "ru": [
      "шлюз используйте эту команду IP по умолчанию"
    ]
  },
  {
    "time": [
      308.0,
      314.0
    ],
    "en": [
      "gateway 192.168.1.1 ok now to specify a"
    ],
    "ru": [
      "шлюз 192.168.1.1 теперь хорошо, чтобы указать"
    ]
  },
  {
    "time": [
      314.0,
      318.0
    ],
    "en": [
      "DNS server use this command IP name"
    ],
    "ru": [
      "DNS-сервер использует эту команду IP-имя"
    ]
  },
  {
    "time": [
      318.0,
      324.0
    ],
    "en": [
      "server 2000 100 exit ok let's try those"
    ],
    "ru": [
      "сервер 2000 100 выход хорошо, давайте попробуем те"
    ]
  },
  {
    "time": [
      324.0,
      334.0
    ],
    "en": [
      "pings again ping 1000 dot 101"
    ],
    "ru": [
      "пингует снова пинг 1000 точек 101"
    ]
  },
  {
    "time": [
      334.0,
      337.0
    ],
    "en": [
      "Dapeng works this time and now let's try"
    ],
    "ru": [
      "Дапенг на этот раз работает, а теперь давайте попробуем"
    ]
  },
  {
    "time": [
      337.0,
      339.0
    ],
    "en": [
      "to ping by name and see if our dns"
    ],
    "ru": [
      "пинговать по имени и посмотреть,"
    ]
  },
  {
    "time": [
      339.0,
      349.0
    ],
    "en": [
      "configuration works ping server one"
    ],
    "ru": [
      "конфигурация работает ping server one"
    ]
  },
  {
    "time": [
      349.0,
      352.0
    ],
    "en": [
      "it works again and actually you can see"
    ],
    "ru": [
      "он снова работает, и на самом деле вы можете видеть"
    ]
  },
  {
    "time": [
      352.0,
      355.0
    ],
    "en": [
      "the message here translating server 1"
    ],
    "ru": [
      "сообщение здесь переводит сервер 1"
    ]
  },
  {
    "time": [
      355.0,
      359.0
    ],
    "en": [
      "domain server 2000 100 and then down"
    ],
    "ru": [
      "сервер домена 2000 100, а затем вниз"
    ]
  },
  {
    "time": [
      359.0,
      364.0
    ],
    "en": [
      "here the IP address of server 1 1000 101"
    ],
    "ru": [
      "здесь IP-адрес сервера 1 1000 101"
    ]
  },
  {
    "time": [
      364.0,
      366.0
    ],
    "en": [
      "ok in this lab we took a bit of a look"
    ],
    "ru": [
      "хорошо, в этой лаборатории мы немного взглянули"
    ]
  },
  {
    "time": [
      366.0,
      370.0
    ],
    "en": [
      "at DNS the domain name system that's all"
    ],
    "ru": [
      "в DNS система доменных имен, вот и все"
    ]
  },
  {
    "time": [
      370.0,
      374.0
    ],
    "en": [
      "for this lab thank you for watching I"
    ],
    "ru": [
      "за эту лабораторию спасибо за просмотр я"
    ]
  },
  {
    "time": [
      374.0,
      376.0
    ],
    "en": [
      "hope this lab and video have been"
    ],
    "ru": [
      "надеюсь, что эта лаборатория и видео были"
    ]
  },
  {
    "time": [
      376.0,
      379.0
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
      379.0,
      381.0
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
      381.0,
      384.0
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
      384.0,
      386.0
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
      386.0,
      388.0
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
      388.0,
      391.0
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
      391.0,
      393.0
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
      393.0,
      396.0
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
      396.0,
      399.0
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
      399.0,
      402.0
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
      402.0,
      402.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]