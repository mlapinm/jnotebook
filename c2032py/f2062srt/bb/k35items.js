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
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      8.0,
      13.0
    ],
    "en": [
      "this lab we will configure DHCP dynamic"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим динамический DHCP"
    ]
  },
  {
    "time": [
      13.0,
      17.0
    ],
    "en": [
      "host configuration protocol DHCP"
    ],
    "ru": [
      "протокол конфигурации хоста DHCP"
    ]
  },
  {
    "time": [
      17.0,
      19.0
    ],
    "en": [
      "dynamically provides IP addresses as"
    ],
    "ru": [
      "динамически предоставляет IP-адреса как"
    ]
  },
  {
    "time": [
      19.0,
      22.0
    ],
    "en": [
      "well as information like default gateway"
    ],
    "ru": [
      "а также такую ​​информацию, как шлюз по умолчанию"
    ]
  },
  {
    "time": [
      22.0,
      26.0
    ],
    "en": [
      "and DNS server addresses to hosts so"
    ],
    "ru": [
      "и адреса DNS-серверов к хостам, поэтому"
    ]
  },
  {
    "time": [
      26.0,
      27.0
    ],
    "en": [
      "that each host doesn't have to be"
    ],
    "ru": [
      "что каждый хост не должен быть"
    ]
  },
  {
    "time": [
      27.0,
      31.0
    ],
    "en": [
      "manually configured in this lab we will"
    ],
    "ru": [
      "настроенный вручную в этой лабораторной работе, мы будем"
    ]
  },
  {
    "time": [
      31.0,
      35.0
    ],
    "en": [
      "configure r1 as a DHCP server which will"
    ],
    "ru": [
      "настроить r1 как DHCP-сервер, который будет"
    ]
  },
  {
    "time": [
      35.0,
      37.0
    ],
    "en": [
      "provide this information to the other"
    ],
    "ru": [
      "предоставить эту информацию другому"
    ]
  },
  {
    "time": [
      37.0,
      40.0
    ],
    "en": [
      "devices on the network we will also"
    ],
    "ru": [
      "устройств в сети мы также"
    ]
  },
  {
    "time": [
      40.0,
      44.0
    ],
    "en": [
      "configure r2 as a DHCP client on one"
    ],
    "ru": [
      "настроить r2 как DHCP-клиент на одном"
    ]
  },
  {
    "time": [
      44.0,
      48.0
    ],
    "en": [
      "interface and as a DHCP relay agent on"
    ],
    "ru": [
      "интерфейс и как агент ретрансляции DHCP на"
    ]
  },
  {
    "time": [
      48.0,
      53.0
    ],
    "en": [
      "another interface let's get started"
    ],
    "ru": [
      "другой интерфейс, приступим"
    ]
  },
  {
    "time": [
      53.0,
      56.0
    ],
    "en": [
      "first I want to show that our pcs don't"
    ],
    "ru": [
      "Сначала я хочу показать, что наши компьютеры не"
    ]
  },
  {
    "time": [
      56.0,
      63.0
    ],
    "en": [
      "have IP addresses let's go on PC one IP"
    ],
    "ru": [
      "есть IP адреса пойдем на ПК один IP"
    ]
  },
  {
    "time": [
      63.0,
      68.0
    ],
    "en": [
      "config it has an address in the 169.254"
    ],
    "ru": [
      "config он имеет адрес в 169.254"
    ]
  },
  {
    "time": [
      68.0,
      71.0
    ],
    "en": [
      "range this is an automatic private IP"
    ],
    "ru": [
      "диапазон это автоматический частный IP"
    ]
  },
  {
    "time": [
      71.0,
      77.0
    ],
    "en": [
      "address or apipa pc one is configured to"
    ],
    "ru": [
      "адрес или apipa pc один настроен на"
    ]
  },
  {
    "time": [
      77.0,
      80.0
    ],
    "en": [
      "get its address via DHCP but there is no"
    ],
    "ru": [
      "получить его адрес через DHCP, но нет"
    ]
  },
  {
    "time": [
      80.0,
      83.0
    ],
    "en": [
      "DHCP server configured yet so this"
    ],
    "ru": [
      "DHCP-сервер еще не настроен, так что это"
    ]
  },
  {
    "time": [
      83.0,
      85.0
    ],
    "en": [
      "address was automatically generated"
    ],
    "ru": [
      "адрес был создан автоматически"
    ]
  },
  {
    "time": [
      85.0,
      89.0
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
      89.0,
      92.0
    ],
    "en": [
      "the first step is to configure our DHCP"
    ],
    "ru": [
      "первый шаг - настроить наш DHCP"
    ]
  },
  {
    "time": [
      92.0,
      101.0
    ],
    "en": [
      "server r1 an able compte let's create"
    ],
    "ru": [
      "сервер r1 способный комп, давайте создадим"
    ]
  },
  {
    "time": [
      101.0,
      107.0
    ],
    "en": [
      "the first DHCP pool IP dhcp pool 10 pool"
    ],
    "ru": [
      "первый пул DHCP IP dhcp pool 10 pool"
    ]
  },
  {
    "time": [
      107.0,
      110.0
    ],
    "en": [
      "now we've created the pool and entered"
    ],
    "ru": [
      "теперь мы создали пул и вошли"
    ]
  },
  {
    "time": [
      110.0,
      114.0
    ],
    "en": [
      "DHCP configuration mode now let's"
    ],
    "ru": [
      "Режим настройки DHCP теперь давайте"
    ]
  },
  {
    "time": [
      114.0,
      116.0
    ],
    "en": [
      "specify the range of addresses we will"
    ],
    "ru": [
      "укажите диапазон адресов, которые мы будем"
    ]
  },
  {
    "time": [
      116.0,
      120.0
    ],
    "en": [
      "be handing out to hosts 10000 / 24 in"
    ],
    "ru": [
      "раздавать хостам 10000/24 ​​в"
    ]
  },
  {
    "time": [
      120.0,
      129.0
    ],
    "en": [
      "this case network 10000 255.255.255.0"
    ],
    "ru": [
      "в данном случае сеть 10000 255.255.255.0"
    ]
  },
  {
    "time": [
      129.0,
      135.0
    ],
    "en": [
      "next the default gateway default router"
    ],
    "ru": [
      "далее шлюз по умолчанию маршрутизатор по умолчанию"
    ]
  },
  {
    "time": [
      135.0,
      142.0
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
      135.0,
      142.0
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
      142.0,
      147.0
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
      142.0,
      147.0
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
      147.0,
      149.0
    ],
    "en": [
      "configured a DNS server in this lab I"
    ],
    "ru": [
      "настроил DNS-сервер в этой лабораторной работе I"
    ]
  },
  {
    "time": [
      149.0,
      152.0
    ],
    "en": [
      "just wanted to show that command finally"
    ],
    "ru": [
      "просто хотел наконец показать эту команду"
    ]
  },
  {
    "time": [
      152.0,
      156.0
    ],
    "en": [
      "a range of excluded addresses these are"
    ],
    "ru": [
      "диапазон исключенных адресов это"
    ]
  },
  {
    "time": [
      156.0,
      158.0
    ],
    "en": [
      "Abbas's that our DHCP server won't"
    ],
    "ru": [
      "Аббас, что наш DHCP-сервер не будет"
    ]
  },
  {
    "time": [
      158.0,
      161.0
    ],
    "en": [
      "distribute to hosts addresses that we"
    ],
    "ru": [
      "распространять по хостам адреса, которые мы"
    ]
  },
  {
    "time": [
      161.0,
      164.0
    ],
    "en": [
      "want to keep reserved this is actually"
    ],
    "ru": [
      "хочу сохранить за собой, это на самом деле"
    ]
  },
  {
    "time": [
      164.0,
      166.0
    ],
    "en": [
      "not configured in DHCP mode its"
    ],
    "ru": [
      "не настроен в режиме DHCP, его"
    ]
  },
  {
    "time": [
      166.0,
      168.0
    ],
    "en": [
      "configured in global configuration mode"
    ],
    "ru": [
      "настроен в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      168.0,
      176.0
    ],
    "en": [
      "so exit IP dhcp excluded address now we"
    ],
    "ru": [
      "так что выйдите из IP-адреса, исключенного dhcp, теперь мы"
    ]
  },
  {
    "time": [
      176.0,
      178.0
    ],
    "en": [
      "enter the first address in the range"
    ],
    "ru": [
      "введите первый адрес в диапазоне"
    ]
  },
  {
    "time": [
      178.0,
      182.0
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
      178.0,
      182.0
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
      182.0,
      186.0
    ],
    "en": [
      "range 1000 10 that will exclude all"
    ],
    "ru": [
      "диапазон 1000 10, который исключит все"
    ]
  },
  {
    "time": [
      186.0,
      191.0
    ],
    "en": [
      "addresses from 1000 1 to 1000 10 from"
    ],
    "ru": [
      "адреса от 1000 1 до 1000 10 от"
    ]
  },
  {
    "time": [
      191.0,
      195.0
    ],
    "en": [
      "being distributed by the DHCP server now"
    ],
    "ru": [
      "сейчас распространяется DHCP-сервером"
    ]
  },
  {
    "time": [
      195.0,
      199.0
    ],
    "en": [
      "let's configure the next DHCP pool IP"
    ],
    "ru": [
      "настроим IP следующего DHCP-пула"
    ]
  },
  {
    "time": [
      199.0,
      207.0
    ],
    "en": [
      "dhcp pool 20 pool network 20000"
    ],
    "ru": [
      "пул dhcp 20 сеть пулов 20000"
    ]
  },
  {
    "time": [
      207.0,
      213.0
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
      213.0
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
      213.0,
      220.0
    ],
    "en": [
      "DNS server 2000 one exit now let's"
    ],
    "ru": [
      "DNS сервер 2000 один выход теперь давайте"
    ]
  },
  {
    "time": [
      220.0,
      221.0
    ],
    "en": [
      "configure an excluded address range"
    ],
    "ru": [
      "настроить исключенный диапазон адресов"
    ]
  },
  {
    "time": [
      221.0,
      229.0
    ],
    "en": [
      "again IP dhcp excluded address 2000 1"
    ],
    "ru": [
      "снова IP dhcp исключенный адрес 2000 1"
    ]
  },
  {
    "time": [
      229.0,
      235.0
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
      229.0,
      235.0
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
      235.0,
      241.0
    ],
    "en": [
      "configure IP dhcp pool 12 pool network"
    ],
    "ru": [
      "настроить IP dhcp pool 12 pool network"
    ]
  },
  {
    "time": [
      241.0,
      250.0
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
      250.0
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
      250.0,
      255.0
    ],
    "en": [
      "DHCP server is now configured now hosts"
    ],
    "ru": [
      "DHCP-сервер теперь настроен, теперь хосты"
    ]
  },
  {
    "time": [
      255.0,
      258.0
    ],
    "en": [
      "in the 10000 / 24 network should have an"
    ],
    "ru": [
      "в сети 10000/24 ​​должен иметь"
    ]
  },
  {
    "time": [
      258.0,
      263.0
    ],
    "en": [
      "IP address I'll go on PC one"
    ],
    "ru": [
      "IP-адрес я пойду на ПК один"
    ]
  },
  {
    "time": [
      263.0,
      268.0
    ],
    "en": [
      "IP config slash release ipconfig slash"
    ],
    "ru": [
      "Слэш IP config освобождает косую черту ipconfig"
    ]
  },
  {
    "time": [
      268.0,
      273.0
    ],
    "en": [
      "renew this will make PC 1 refresh its IP"
    ],
    "ru": [
      "обновить, это заставит ПК 1 обновить свой IP-адрес"
    ]
  },
  {
    "time": [
      273.0,
      278.0
    ],
    "en": [
      "configuration as you can see PC 1 now"
    ],
    "ru": [
      "конфигурация, как вы видите ПК 1 сейчас"
    ]
  },
  {
    "time": [
      278.0,
      281.0
    ],
    "en": [
      "has an IP address and a default gateway"
    ],
    "ru": [
      "имеет IP-адрес и шлюз по умолчанию"
    ]
  },
  {
    "time": [
      281.0,
      284.0
    ],
    "en": [
      "and DNS server as we configured on our"
    ],
    "ru": [
      "и DNS-сервер, как мы настроили на нашем"
    ]
  },
  {
    "time": [
      284.0,
      289.0
    ],
    "en": [
      "DHCP server r1 now let's go to step 2"
    ],
    "ru": [
      "DHCP-сервер r1 теперь перейдем к шагу 2"
    ]
  },
  {
    "time": [
      289.0,
      292.0
    ],
    "en": [
      "art to SG 0 0 interface has no IP"
    ],
    "ru": [
      "art к SG 0 0 интерфейс не имеет IP"
    ]
  },
  {
    "time": [
      292.0,
      296.0
    ],
    "en": [
      "address configured typically we would"
    ],
    "ru": [
      "адрес настроен обычно, мы бы"
    ]
  },
  {
    "time": [
      296.0,
      298.0
    ],
    "en": [
      "manually configure an IP address but I"
    ],
    "ru": [
      "вручную настроить IP-адрес, но я"
    ]
  },
  {
    "time": [
      298.0,
      301.0
    ],
    "en": [
      "want to show you how to use DHCP to get"
    ],
    "ru": [
      "хочу показать вам, как использовать DHCP для получения"
    ]
  },
  {
    "time": [
      301.0,
      304.0
    ],
    "en": [
      "an IP address for r2 we configured a"
    ],
    "ru": [
      "IP-адрес для r2 мы настроили"
    ]
  },
  {
    "time": [
      304.0,
      309.0
    ],
    "en": [
      "pool on our one with the 192.168 12/24"
    ],
    "ru": [
      "бассейн на нашем с 192.168 12/24"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "range and r2 will get an address from"
    ],
    "ru": [
      "диапазон и r2 получит адрес из"
    ]
  },
  {
    "time": [
      311.0,
      319.0
    ],
    "en": [
      "that network let's go on our to enable"
    ],
    "ru": [
      "эту сеть давайте продолжим, чтобы включить"
    ]
  },
  {
    "time": [
      319.0,
      325.0
    ],
    "en": [
      "coffee/tea interface g 0 0 to make it"
    ],
    "ru": [
      "кофе / чай интерфейс g 0 0, чтобы сделать это"
    ]
  },
  {
    "time": [
      325.0,
      327.0
    ],
    "en": [
      "use DHCP to get an IP address use this"
    ],
    "ru": [
      "используйте DHCP, чтобы получить IP-адрес, используйте это"
    ]
  },
  {
    "time": [
      327.0,
      333.0
    ],
    "en": [
      "command IP address DHCP that's it"
    ],
    "ru": [
      "команда IP-адрес DHCP вот и все"
    ]
  },
  {
    "time": [
      333.0,
      340.0
    ],
    "en": [
      "now let's enable the interface no shut"
    ],
    "ru": [
      "теперь давайте включим интерфейс, не закрываясь"
    ]
  },
  {
    "time": [
      340.0,
      342.0
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      342.0,
      344.0
    ],
    "en": [
      "we get a message stating that r2 was"
    ],
    "ru": [
      "мы получаем сообщение о том, что r2 был"
    ]
  },
  {
    "time": [
      344.0,
      349.0
    ],
    "en": [
      "assigned a DHCP address exit step 2 is"
    ],
    "ru": [
      "назначен DHCP-адрес, шаг выхода 2 -"
    ]
  },
  {
    "time": [
      349.0,
      354.0
    ],
    "en": [
      "now complete step 3 is to configure our"
    ],
    "ru": [
      "Теперь завершите шаг 3, чтобы настроить наш"
    ]
  },
  {
    "time": [
      354.0,
      357.0
    ],
    "en": [
      "to SG 0 1 interface as a DHCP relay"
    ],
    "ru": [
      "к интерфейсу SG 0 1 в качестве DHCP-реле"
    ]
  },
  {
    "time": [
      357.0,
      361.0
    ],
    "en": [
      "agent so that hosts on the 2000 0 / 24"
    ],
    "ru": [
      "агент так что хосты на 2000 0/24"
    ]
  },
  {
    "time": [
      361.0,
      364.0
    ],
    "en": [
      "network can get IP addresses"
    ],
    "ru": [
      "сеть может получать IP-адреса"
    ]
  },
  {
    "time": [
      364.0,
      367.0
    ],
    "en": [
      "although r1 is configured to give"
    ],
    "ru": [
      "хотя r1 настроен так, чтобы давать"
    ]
  },
  {
    "time": [
      367.0,
      370.0
    ],
    "en": [
      "addresses to the 2000 / 24 Network"
    ],
    "ru": [
      "адресов в Сеть 2000/24"
    ]
  },
  {
    "time": [
      370.0,
      372.0
    ],
    "en": [
      "because the hosts aren't connected to"
    ],
    "ru": [
      "потому что хосты не подключены к"
    ]
  },
  {
    "time": [
      372.0,
      374.0
    ],
    "en": [
      "the same network as r1 we need to"
    ],
    "ru": [
      "ту же сеть, что и r1, нам нужно"
    ]
  },
  {
    "time": [
      374.0,
      378.0
    ],
    "en": [
      "configure a DHCP relay agent the rule is"
    ],
    "ru": [
      "настроить агент ретрансляции DHCP, правило"
    ]
  },
  {
    "time": [
      378.0,
      380.0
    ],
    "en": [
      "to configure the relay agent on the"
    ],
    "ru": [
      "для настройки агента ретрансляции на"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "layer 3 interface closest to the hosts"
    ],
    "ru": [
      "интерфейс уровня 3, ближайший к хостам"
    ]
  },
  {
    "time": [
      383.0,
      388.0
    ],
    "en": [
      "in this case r2 sg0 one interface first"
    ],
    "ru": [
      "в этом случае r2 sg0 сначала один интерфейс"
    ]
  },
  {
    "time": [
      388.0,
      389.0
    ],
    "en": [
      "let's check that that pcs don't have"
    ],
    "ru": [
      "давайте проверим, что на ПК нет"
    ]
  },
  {
    "time": [
      389.0,
      393.0
    ],
    "en": [
      "addresses in the 2000 0/24 range yet"
    ],
    "ru": [
      "адресов в диапазоне 2000 0/24 пока нет"
    ]
  },
  {
    "time": [
      393.0,
      398.0
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
      398.0,
      403.0
    ],
    "en": [
      "IP config once again the IP addresses in"
    ],
    "ru": [
      "IP config еще раз IP-адреса в"
    ]
  },
  {
    "time": [
      403.0,
      406.0
    ],
    "en": [
      "the 169.254 range an automatic private"
    ],
    "ru": [
      "диапазон 169.254 автоматический частный"
    ]
  },
  {
    "time": [
      406.0,
      410.0
    ],
    "en": [
      "IP address let's go configure the relay"
    ],
    "ru": [
      "IP-адрес пойдем настраиваем реле"
    ]
  },
  {
    "time": [
      410.0,
      418.0
    ],
    "en": [
      "agent on our two interface G 0 1 to"
    ],
    "ru": [
      "агент на наших двух интерфейсах G 0 1 для"
    ]
  },
  {
    "time": [
      418.0,
      420.0
    ],
    "en": [
      "configure the relay agent we just have"
    ],
    "ru": [
      "настроить агент ретрансляции, который у нас есть"
    ]
  },
  {
    "time": [
      420.0,
      424.0
    ],
    "en": [
      "to use one command IP helper address"
    ],
    "ru": [
      "использовать одну команду IP-адрес помощника"
    ]
  },
  {
    "time": [
      424.0,
      427.0
    ],
    "en": [
      "followed by the address of the DHCP"
    ],
    "ru": [
      "за которым следует адрес DHCP"
    ]
  },
  {
    "time": [
      427.0,
      433.0
    ],
    "en": [
      "server which is R 1 so 192.168.1 that's"
    ],
    "ru": [
      "сервер, который является R 1, поэтому 192.168.1, что"
    ]
  },
  {
    "time": [
      433.0,
      440.0
    ],
    "en": [
      "it now let's go back to pc 3 IP config"
    ],
    "ru": [
      "теперь давайте вернемся к конфигурации IP ПК 3"
    ]
  },
  {
    "time": [
      440.0,
      450.0
    ],
    "en": [
      "slash release IP config slash renew and"
    ],
    "ru": [
      "косая черта отпустить IP-конфигурацию косую черту обновить и"
    ]
  },
  {
    "time": [
      450.0,
      451.0
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      451.0,
      456.0
    ],
    "en": [
      "pc 3 now has an IP address in the 2000"
    ],
    "ru": [
      "pc 3 теперь имеет IP-адрес в 2000"
    ]
  },
  {
    "time": [
      456.0,
      459.0
    ],
    "en": [
      "slash 24 range as well as a default"
    ],
    "ru": [
      "косая черта 24 диапазона, а также значение по умолчанию"
    ]
  },
  {
    "time": [
      459.0,
      462.0
    ],
    "en": [
      "gateway and dns server since our DHCP"
    ],
    "ru": [
      "шлюз и днс сервер с нашего DHCP"
    ]
  },
  {
    "time": [
      462.0,
      465.0
    ],
    "en": [
      "relay agent relayed the DHCP messages"
    ],
    "ru": [
      "агент ретрансляции ретранслировал сообщения DHCP"
    ]
  },
  {
    "time": [
      465.0,
      469.0
    ],
    "en": [
      "between the PC and the DHCP server"
    ],
    "ru": [
      "между ПК и DHCP-сервером"
    ]
  },
  {
    "time": [
      469.0,
      477.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "это все для этой лаборатории, спасибо за"
    ]
  },
  {
    "time": [
      477.0,
      477.0
    ],
    "en": [
      "watching"
    ],
    "ru": [
      "наблюдая"
    ]
  },
  {
    "time": [
      477.0,
      479.0
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
      479.0,
      482.0
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
      482.0,
      484.0
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
      484.0,
      486.0
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
      486.0,
      488.0
    ],
    "en": [
      "any specific labs"
    ],
    "ru": [
      "любые конкретные лаборатории"
    ]
  },
  {
    "time": [
      488.0,
      490.0
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
      490.0,
      493.0
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
      493.0,
      496.0
    ],
    "en": [
      "Bitcoin and a theorem donations via the"
    ],
    "ru": [
      "Биткойн и пожертвования теорем через"
    ]
  },
  {
    "time": [
      496.0,
      499.0
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
      499.0,
      502.0
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
      502.0,
      504.0
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
      504.0,
      504.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]