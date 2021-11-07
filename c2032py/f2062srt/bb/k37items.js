let objs = [
  {
    "time": [
      0.0,
      2.0
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
      2.0,
      5.0
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
      5.0,
      7.0
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
      7.0,
      9.0
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
      9.0,
      12.0
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
      12.0,
      13.0
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
      13.0,
      17.0
    ],
    "en": [
      "description this lab will be the first"
    ],
    "ru": [
      "описание эта лаборатория будет первой"
    ]
  },
  {
    "time": [
      17.0,
      19.0
    ],
    "en": [
      "in a series of three labs on mat network"
    ],
    "ru": [
      "в серии из трех лабораторий в сети мат"
    ]
  },
  {
    "time": [
      19.0,
      23.0
    ],
    "en": [
      "address translation this first lab will"
    ],
    "ru": [
      "перевод адресов эта первая лаборатория будет"
    ]
  },
  {
    "time": [
      23.0,
      26.0
    ],
    "en": [
      "cover static NAT static NAT creates a"
    ],
    "ru": [
      "покрыть статический NAT статический NAT создает"
    ]
  },
  {
    "time": [
      26.0,
      28.0
    ],
    "en": [
      "one-to-one relationship between an"
    ],
    "ru": [
      "отношения один-к-одному между"
    ]
  },
  {
    "time": [
      28.0,
      30.0
    ],
    "en": [
      "inside address typically an IP address"
    ],
    "ru": [
      "внутренний адрес обычно IP-адрес"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "in a private address range such as"
    ],
    "ru": [
      "в диапазоне частных адресов, например"
    ]
  },
  {
    "time": [
      33.0,
      34.0
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
      33.0,
      34.0
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
      34.0,
      37.0
    ],
    "en": [
      "and an outside address typically a"
    ],
    "ru": [
      "и внешний адрес обычно"
    ]
  },
  {
    "time": [
      37.0,
      39.0
    ],
    "en": [
      "public IP address on the Internet"
    ],
    "ru": [
      "публичный IP-адрес в Интернете"
    ]
  },
  {
    "time": [
      39.0,
      43.0
    ],
    "en": [
      "I won't explain in detail how NAT works"
    ],
    "ru": [
      "Я не буду подробно объяснять, как работает NAT"
    ]
  },
  {
    "time": [
      43.0,
      45.0
    ],
    "en": [
      "hopefully you've already studied it this"
    ],
    "ru": [
      "надеюсь, вы уже изучили это"
    ]
  },
  {
    "time": [
      45.0,
      47.0
    ],
    "en": [
      "lab will give you some basic practice in"
    ],
    "ru": [
      "lab даст вам базовую практику в"
    ]
  },
  {
    "time": [
      47.0,
      50.0
    ],
    "en": [
      "configuring static NAT let's look at"
    ],
    "ru": [
      "настройка статического NAT давайте посмотрим"
    ]
  },
  {
    "time": [
      50.0,
      51.0
    ],
    "en": [
      "step 1"
    ],
    "ru": [
      "шаг 1"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "ripp has been pre-configured so that any"
    ],
    "ru": [
      "ripp был предварительно настроен так, что любой"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "device on this network should be able to"
    ],
    "ru": [
      "устройство в этой сети должно иметь возможность"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "reach any other device let's try a ping"
    ],
    "ru": [
      "подключиться к любому другому устройству давайте попробуем пинг"
    ]
  },
  {
    "time": [
      59.0,
      65.0
    ],
    "en": [
      "from pc-12 server one ping one dot one"
    ],
    "ru": [
      "с сервера pc-12 один пинг одна точка один"
    ]
  },
  {
    "time": [
      65.0,
      73.0
    ],
    "en": [
      "dot one dot one hundred it doesn't work"
    ],
    "ru": [
      "точка одна точка сто это не работает"
    ]
  },
  {
    "time": [
      73.0,
      76.0
    ],
    "en": [
      "why could this be I wrote a hint here"
    ],
    "ru": [
      "почему это могло быть я написал здесь намек"
    ]
  },
  {
    "time": [
      76.0,
      78.0
    ],
    "en": [
      "stating that the serial connection"
    ],
    "ru": [
      "заявляя, что последовательное соединение"
    ]
  },
  {
    "time": [
      78.0,
      82.0
    ],
    "en": [
      "between r1 and r2 is using ACLs to"
    ],
    "ru": [
      "между r1 и r2 используется ACL для"
    ]
  },
  {
    "time": [
      82.0,
      84.0
    ],
    "en": [
      "simulate the Internet"
    ],
    "ru": [
      "имитировать Интернет"
    ]
  },
  {
    "time": [
      84.0,
      88.0
    ],
    "en": [
      "what exactly does that mean well PC ones"
    ],
    "ru": [
      "что именно это значит хорошо ПК"
    ]
  },
  {
    "time": [
      88.0,
      93.0
    ],
    "en": [
      "address is 192.168.1.1 this is a private"
    ],
    "ru": [
      "адрес 192.168.1.1 это частный"
    ]
  },
  {
    "time": [
      93.0,
      96.0
    ],
    "en": [
      "IP address these private IP addresses"
    ],
    "ru": [
      "IP-адрес эти частные IP-адреса"
    ]
  },
  {
    "time": [
      96.0,
      98.0
    ],
    "en": [
      "cannot be routed over the internet so"
    ],
    "ru": [
      "не может быть маршрутизирован через Интернет, поэтому"
    ]
  },
  {
    "time": [
      98.0,
      101.0
    ],
    "en": [
      "when PC one attempts to ping server one"
    ],
    "ru": [
      "когда ПК пытается пинговать сервер"
    ]
  },
  {
    "time": [
      101.0,
      106.0
    ],
    "en": [
      "the source IP is 192.168.1.1 and the"
    ],
    "ru": [
      "исходный IP-адрес - 192.168.1.1, а"
    ]
  },
  {
    "time": [
      106.0,
      109.0
    ],
    "en": [
      "destination is one one one one hundred"
    ],
    "ru": [
      "пункт назначения один сто сто"
    ]
  },
  {
    "time": [
      109.0,
      112.0
    ],
    "en": [
      "one dot one dot one dot one hundred is a"
    ],
    "ru": [
      "одна точка одна точка одна точка сто - это"
    ]
  },
  {
    "time": [
      112.0,
      114.0
    ],
    "en": [
      "public IP address so it can be routed"
    ],
    "ru": [
      "общедоступный IP-адрес, чтобы его можно было маршрутизировать"
    ]
  },
  {
    "time": [
      114.0,
      117.0
    ],
    "en": [
      "over the Internet however when server"
    ],
    "ru": [
      "через Интернет, однако, когда сервер"
    ]
  },
  {
    "time": [
      117.0,
      119.0
    ],
    "en": [
      "one sends a reply the addresses are"
    ],
    "ru": [
      "один отправляет ответ адреса"
    ]
  },
  {
    "time": [
      119.0,
      124.0
    ],
    "en": [
      "swapped the source addresses 1.1.1 100"
    ],
    "ru": [
      "поменял местами исходные адреса 1.1.1 100"
    ]
  },
  {
    "time": [
      124.0,
      128.0
    ],
    "en": [
      "and the destination addresses 192.168.1"
    ],
    "ru": [
      "и адреса назначения 192.168.1"
    ]
  },
  {
    "time": [
      128.0,
      133.0
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
      128.0,
      133.0
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
      133.0,
      135.0
    ],
    "en": [
      "IP address range it cannot be routed"
    ],
    "ru": [
      "Диапазон IP-адресов не может быть маршрутизирован"
    ]
  },
  {
    "time": [
      135.0,
      140.0
    ],
    "en": [
      "over the Internet and is dropped so our"
    ],
    "ru": [
      "через Интернет и сброшен, поэтому наш"
    ]
  },
  {
    "time": [
      140.0,
      143.0
    ],
    "en": [
      "goal is to configure static NAT on r1 to"
    ],
    "ru": [
      "цель - настроить статический NAT на r1 для"
    ]
  },
  {
    "time": [
      143.0,
      145.0
    ],
    "en": [
      "translate the private IP addresses of"
    ],
    "ru": [
      "перевести частные IP-адреса"
    ]
  },
  {
    "time": [
      145.0,
      150.0
    ],
    "en": [
      "pc-1 pc2 and pc3 to public IP addresses"
    ],
    "ru": [
      "pc-1 pc2 и pc3 на общедоступные IP-адреса"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "if we do that PC one will send a ping to"
    ],
    "ru": [
      "если мы сделаем этот компьютер, он отправит пинг на"
    ]
  },
  {
    "time": [
      153.0,
      156.0
    ],
    "en": [
      "server one and once again the source"
    ],
    "ru": [
      "сервер один и еще раз источник"
    ]
  },
  {
    "time": [
      156.0,
      159.0
    ],
    "en": [
      "address will be 192.168.1 elleven and"
    ],
    "ru": [
      "адрес будет 192.168.1 elleven и"
    ]
  },
  {
    "time": [
      159.0,
      163.0
    ],
    "en": [
      "the destination 1.1.1 100 however when"
    ],
    "ru": [
      "пункт назначения 1.1.1 100, однако, когда"
    ]
  },
  {
    "time": [
      163.0,
      166.0
    ],
    "en": [
      "the packet reaches our one our one will"
    ],
    "ru": [
      "пакет доходит до нашего"
    ]
  },
  {
    "time": [
      166.0,
      168.0
    ],
    "en": [
      "translate the source address to whatever"
    ],
    "ru": [
      "перевести исходный адрес на что угодно"
    ]
  },
  {
    "time": [
      168.0,
      174.0
    ],
    "en": [
      "we specify 1 2 3 11 in this case when"
    ],
    "ru": [
      "мы указываем 1 2 3 11 в этом случае, когда"
    ]
  },
  {
    "time": [
      174.0,
      176.0
    ],
    "en": [
      "server 1 sends its reply the source"
    ],
    "ru": [
      "сервер 1 отправляет свой ответ источнику"
    ]
  },
  {
    "time": [
      176.0,
      180.0
    ],
    "en": [
      "address will be once again 1 1 1 100 and"
    ],
    "ru": [
      "адрес снова будет 1 1 1 100 и"
    ]
  },
  {
    "time": [
      180.0,
      185.0
    ],
    "en": [
      "the destination 1 2 3 11 when the reply"
    ],
    "ru": [
      "пункт назначения 1 2 3 11, когда ответ"
    ]
  },
  {
    "time": [
      185.0,
      189.0
    ],
    "en": [
      "reaches r1 r1 will translate the"
    ],
    "ru": [
      "достигает r1 r1 переводит"
    ]
  },
  {
    "time": [
      189.0,
      191.0
    ],
    "en": [
      "destination address from Wanda 2 3 11"
    ],
    "ru": [
      "адрес назначения из Ванды 2 3 11"
    ]
  },
  {
    "time": [
      191.0,
      196.0
    ],
    "en": [
      "back to PC ones address of 192.168.1 11"
    ],
    "ru": [
      "обратно на ПК адрес 192.168.1 11"
    ]
  },
  {
    "time": [
      196.0,
      201.0
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
      201.0,
      207.0
    ],
    "en": [
      "enable coffee tea first we have to"
    ],
    "ru": [
      "сначала включить кофе чай, мы должны"
    ]
  },
  {
    "time": [
      207.0,
      209.0
    ],
    "en": [
      "specify our ones interfaces as inside or"
    ],
    "ru": [
      "укажите наши интерфейсы как внутри или"
    ]
  },
  {
    "time": [
      209.0,
      213.0
    ],
    "en": [
      "outside nap interfaces the inside"
    ],
    "ru": [
      "внешний сон взаимодействует с внутренним"
    ]
  },
  {
    "time": [
      213.0,
      215.0
    ],
    "en": [
      "interface faces our inside private"
    ],
    "ru": [
      "интерфейс обращен к нашему внутреннему частному"
    ]
  },
  {
    "time": [
      215.0,
      219.0
    ],
    "en": [
      "network so G 0 0 in this case interface"
    ],
    "ru": [
      "сеть, поэтому G 0 0 в этом случае интерфейс"
    ]
  },
  {
    "time": [
      219.0,
      225.0
    ],
    "en": [
      "G 0 0 IP NAT inside the outside"
    ],
    "ru": [
      "G 0 0 IP NAT внутри снаружи"
    ]
  },
  {
    "time": [
      225.0,
      229.0
    ],
    "en": [
      "interface will be s 0 3 0 our interface"
    ],
    "ru": [
      "interface будет s 0 3 0 наш интерфейс"
    ]
  },
  {
    "time": [
      229.0,
      233.0
    ],
    "en": [
      "facing the internet interface as a 0 3 0"
    ],
    "ru": [
      "лицом к интернет-интерфейсу как 0 3 0"
    ]
  },
  {
    "time": [
      233.0,
      239.0
    ],
    "en": [
      "IP NAT outside exit now let's configure"
    ],
    "ru": [
      "IP NAT внешний выход теперь давайте настроим"
    ]
  },
  {
    "time": [
      239.0,
      242.0
    ],
    "en": [
      "the translations themselves static NAT"
    ],
    "ru": [
      "сами переводы статический NAT"
    ]
  },
  {
    "time": [
      242.0,
      244.0
    ],
    "en": [
      "is configured with the following command"
    ],
    "ru": [
      "настраивается с помощью следующей команды"
    ]
  },
  {
    "time": [
      244.0,
      248.0
    ],
    "en": [
      "IP NAT inside source"
    ],
    "ru": [
      "IP NAT внутри источника"
    ]
  },
  {
    "time": [
      248.0,
      251.0
    ],
    "en": [
      "static followed by the inside private"
    ],
    "ru": [
      "статический, за которым следует внутренний частный"
    ]
  },
  {
    "time": [
      251.0,
      253.0
    ],
    "en": [
      "address then the outside public address"
    ],
    "ru": [
      "адрес, затем внешний публичный адрес"
    ]
  },
  {
    "time": [
      253.0,
      257.0
    ],
    "en": [
      "so for PC 1 are inside addresses"
    ],
    "ru": [
      "так что для ПК 1 внутренние адреса"
    ]
  },
  {
    "time": [
      257.0,
      262.0
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
      257.0,
      262.0
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
      262.0,
      267.0
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
      262.0,
      267.0
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
      267.0,
      270.0
    ],
    "en": [
      "now let's do the same command for PC -"
    ],
    "ru": [
      "теперь давайте сделаем ту же команду для ПК -"
    ]
  },
  {
    "time": [
      270.0,
      273.0
    ],
    "en": [
      "just changing the addresses IP nat"
    ],
    "ru": [
      "просто меняем адреса IP nat"
    ]
  },
  {
    "time": [
      273.0,
      280.0
    ],
    "en": [
      "inside source static 192.168.1 12 1 2 3"
    ],
    "ru": [
      "внутри исходного статического 192.168.1 12 1 2 3"
    ]
  },
  {
    "time": [
      280.0,
      286.0
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
      280.0,
      286.0
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
      286.0,
      296.0
    ],
    "en": [
      "static 192.168.1.1 2.3 13 ok our nat"
    ],
    "ru": [
      "статический 192.168.1.1 2.3 13 ок наш нац"
    ]
  },
  {
    "time": [
      296.0,
      299.0
    ],
    "en": [
      "configuration is now complete let's go"
    ],
    "ru": [
      "настройка завершена, поехали"
    ]
  },
  {
    "time": [
      299.0,
      301.0
    ],
    "en": [
      "on the PCs and try to ping server 1"
    ],
    "ru": [
      "на ПК и попробуйте пинговать сервер 1"
    ]
  },
  {
    "time": [
      301.0,
      315.0
    ],
    "en": [
      "again from pc1 first ping 1.1.1 100 the"
    ],
    "ru": [
      "снова с pc1 первый пинг 1.1.1 100"
    ]
  },
  {
    "time": [
      315.0,
      316.0
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
      316.0,
      318.0
    ],
    "en": [
      "so our NAT configuration has been"
    ],
    "ru": [
      "так что наша конфигурация NAT была"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "successful just to make sure I'll ping"
    ],
    "ru": [
      "успешно, просто чтобы убедиться, что я пингую"
    ]
  },
  {
    "time": [
      321.0,
      326.0
    ],
    "en": [
      "from PC - and PC 3 as well PC 2 first"
    ],
    "ru": [
      "с ПК - и сначала ПК 3, а также ПК 2"
    ]
  },
  {
    "time": [
      326.0,
      334.0
    ],
    "en": [
      "ping 1.1.1 100 again the ping works"
    ],
    "ru": [
      "пинг 1.1.1 100 снова пинг работает"
    ]
  },
  {
    "time": [
      334.0,
      340.0
    ],
    "en": [
      "finally let's ping from PC 3 ping 1.1.1"
    ],
    "ru": [
      "наконец-то пингуем с пк 3 пинг 1.1.1"
    ]
  },
  {
    "time": [
      340.0,
      348.0
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
      340.0,
      348.0
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
      348.0,
      352.0
    ],
    "en": [
      "this lab thank you for watching I hope"
    ],
    "ru": [
      "эта лаборатория спасибо за просмотр надеюсь"
    ]
  },
  {
    "time": [
      352.0,
      354.0
    ],
    "en": [
      "this lab and video have been helpful for"
    ],
    "ru": [
      "эта лабораторная работа и видео были полезны для"
    ]
  },
  {
    "time": [
      354.0,
      357.0
    ],
    "en": [
      "you please subscribe for future labs"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы"
    ]
  },
  {
    "time": [
      357.0,
      359.0
    ],
    "en": [
      "like this which will be released weekly"
    ],
    "ru": [
      "как это, которое будет выходить еженедельно"
    ]
  },
  {
    "time": [
      359.0,
      361.0
    ],
    "en": [
      "if you have requests for any specific"
    ],
    "ru": [
      "если у вас есть запросы на какие-либо конкретные"
    ]
  },
  {
    "time": [
      361.0,
      363.0
    ],
    "en": [
      "labs let me know in the comment section"
    ],
    "ru": [
      "лаборатории дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      363.0,
      366.0
    ],
    "en": [
      "if you want to support my channel I"
    ],
    "ru": [
      "если вы хотите поддержать мой канал я"
    ]
  },
  {
    "time": [
      366.0,
      368.0
    ],
    "en": [
      "accept a Bitcoin and aetherium donations"
    ],
    "ru": [
      "принимать пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      368.0,
      371.0
    ],
    "en": [
      "via the addresses in the description I"
    ],
    "ru": [
      "по адресам в описании I"
    ]
  },
  {
    "time": [
      371.0,
      374.0
    ],
    "en": [
      "am also a brave verified publisher and"
    ],
    "ru": [
      "я также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      374.0,
      377.0
    ],
    "en": [
      "accept bat or basic attention token"
    ],
    "ru": [
      "принять летучую мышь или жетон основного внимания"
    ]
  },
  {
    "time": [
      377.0,
      377.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]