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
      "description also please subscribe to the"
    ],
    "ru": [
      "описание также подпишитесь на"
    ]
  },
  {
    "time": [
      17.0,
      18.0
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
      18.0,
      20.0
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
      20.0,
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
      "will troubleshoot some problems with ACL"
    ],
    "ru": [
      "устранит некоторые проблемы с ACL"
    ]
  },
  {
    "time": [
      27.0,
      31.0
    ],
    "en": [
      "configurations this is the same topology"
    ],
    "ru": [
      "конфигурации это та же топология"
    ]
  },
  {
    "time": [
      31.0,
      33.0
    ],
    "en": [
      "as the previous lab with the same ACLs"
    ],
    "ru": [
      "как в предыдущей лабораторной работе с теми же списками управления доступом"
    ]
  },
  {
    "time": [
      33.0,
      35.0
    ],
    "en": [
      "except I have made three miss"
    ],
    "ru": [
      "за исключением того, что я сделал три промаха"
    ]
  },
  {
    "time": [
      35.0,
      40.0
    ],
    "en": [
      "configurations there are four ACLs one"
    ],
    "ru": [
      "конфигурации есть четыре ACL один"
    ]
  },
  {
    "time": [
      40.0,
      42.0
    ],
    "en": [
      "is correct and the other three have"
    ],
    "ru": [
      "правильно, а остальные три имеют"
    ]
  },
  {
    "time": [
      42.0,
      46.0
    ],
    "en": [
      "mistakes let's get started so the first"
    ],
    "ru": [
      "ошибки давайте начнем так что первый"
    ]
  },
  {
    "time": [
      46.0,
      49.0
    ],
    "en": [
      "ACL should prevent pc4 from accessing"
    ],
    "ru": [
      "ACL должен препятствовать доступу pc4"
    ]
  },
  {
    "time": [
      49.0,
      55.0
    ],
    "en": [
      "the 10440 / 24 network let's see if pc4"
    ],
    "ru": [
      "сеть 10440/24 посмотрим, если pc4"
    ]
  },
  {
    "time": [
      55.0,
      58.0
    ],
    "en": [
      "can ping server one which is in the"
    ],
    "ru": [
      "может пинговать сервер, который находится в"
    ]
  },
  {
    "time": [
      58.0,
      71.0
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
      58.0,
      71.0
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
      71.0,
      73.0
    ],
    "en": [
      "looks like pc4 is able to reach server"
    ],
    "ru": [
      "похоже, что pc4 может подключиться к серверу"
    ]
  },
  {
    "time": [
      73.0,
      75.0
    ],
    "en": [
      "one so there must be a miss"
    ],
    "ru": [
      "один, так что должен быть промах"
    ]
  },
  {
    "time": [
      75.0,
      80.0
    ],
    "en": [
      "configuration I applied the ACL on r2 so"
    ],
    "ru": [
      "конфигурация Я применил ACL на r2, поэтому"
    ]
  },
  {
    "time": [
      80.0,
      86.0
    ],
    "en": [
      "let's check there enable show access"
    ],
    "ru": [
      "давайте проверим там разрешить доступ к показу"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "lists okay"
    ],
    "ru": [
      "списки в порядке"
    ]
  },
  {
    "time": [
      89.0,
      91.0
    ],
    "en": [
      "there's the issue the order of"
    ],
    "ru": [
      "есть проблема порядка"
    ]
  },
  {
    "time": [
      91.0,
      95.0
    ],
    "en": [
      "statements in the ACL is wrong because"
    ],
    "ru": [
      "инструкции в ACL неверны, потому что"
    ]
  },
  {
    "time": [
      95.0,
      98.0
    ],
    "en": [
      "the permit any statement is first all"
    ],
    "ru": [
      "разрешение любое заявление в первую очередь"
    ]
  },
  {
    "time": [
      98.0,
      101.0
    ],
    "en": [
      "traffic is allowed I have to put the"
    ],
    "ru": [
      "движение разрешено, я должен поставить"
    ]
  },
  {
    "time": [
      101.0,
      105.0
    ],
    "en": [
      "deny host before the permit any so 10.22"
    ],
    "ru": [
      "запретить хост перед разрешением так 10.22"
    ]
  },
  {
    "time": [
      105.0,
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
      105.0,
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
      111.0
    ],
    "en": [
      "traffic will be allowed I'll remove the"
    ],
    "ru": [
      "трафик будет разрешен, я удалю"
    ]
  },
  {
    "time": [
      111.0,
      115.0
    ],
    "en": [
      "ACL and then redo it coughed II know"
    ],
    "ru": [
      "ACL, а затем повторить кашель, я знаю"
    ]
  },
  {
    "time": [
      115.0,
      120.0
    ],
    "en": [
      "access list one access list one deny"
    ],
    "ru": [
      "список доступа один список доступа один запретить"
    ]
  },
  {
    "time": [
      120.0,
      126.0
    ],
    "en": [
      "host 10 to 212 access list one permit"
    ],
    "ru": [
      "хост с 10 по 212 список доступа одно разрешение"
    ]
  },
  {
    "time": [
      126.0,
      130.0
    ],
    "en": [
      "any ok let's try that ping again from PC"
    ],
    "ru": [
      "в порядке, давайте попробуем пинг еще раз с ПК"
    ]
  },
  {
    "time": [
      130.0,
      137.0
    ],
    "en": [
      "for pink tent 4.4.1 hundred ok now we"
    ],
    "ru": [
      "за розовую палатку 4.4.1 сотку ок теперь мы"
    ]
  },
  {
    "time": [
      137.0,
      139.0
    ],
    "en": [
      "get the destination host unreachable"
    ],
    "ru": [
      "получить целевой хост недоступен"
    ]
  },
  {
    "time": [
      139.0,
      142.0
    ],
    "en": [
      "message that's good can other hosts"
    ],
    "ru": [
      "сообщение, что хорошо, могут ли другие хосты"
    ]
  },
  {
    "time": [
      142.0,
      143.0
    ],
    "en": [
      "reach server one"
    ],
    "ru": [
      "добраться до первого сервера"
    ]
  },
  {
    "time": [
      143.0,
      149.0
    ],
    "en": [
      "I'll try from PC three content for 4.1"
    ],
    "ru": [
      "Попробую с ПК три контента для 4.1"
    ]
  },
  {
    "time": [
      149.0,
      156.0
    ],
    "en": [
      "hundred"
    ],
    "ru": [
      "сотня"
    ]
  },
  {
    "time": [
      156.0,
      160.0
    ],
    "en": [
      "okay it's working now let's move on to"
    ],
    "ru": [
      "хорошо, теперь работает, перейдем к"
    ]
  },
  {
    "time": [
      160.0,
      164.0
    ],
    "en": [
      "the next ACL pc5 shouldn't be able to"
    ],
    "ru": [
      "следующий ACL pc5 не должен"
    ]
  },
  {
    "time": [
      164.0,
      171.0
    ],
    "en": [
      "access the 2001 db8 22 22 / 64 network"
    ],
    "ru": [
      "доступ к сети 2001 db8 22 22/64"
    ]
  },
  {
    "time": [
      171.0,
      176.0
    ],
    "en": [
      "let's try to ping from PC 5 to server to"
    ],
    "ru": [
      "давайте попробуем пинговать с ПК 5 на сервер, чтобы"
    ]
  },
  {
    "time": [
      176.0,
      190.0
    ],
    "en": [
      "ping 2001 DB 8 22 22 double colon 100 ok"
    ],
    "ru": [
      "ping 2001 DB 8 22 22 двойное двоеточие 100 ok"
    ]
  },
  {
    "time": [
      190.0,
      191.0
    ],
    "en": [
      "the ping works"
    ],
    "ru": [
      "пинг работает"
    ]
  },
  {
    "time": [
      191.0,
      192.0
    ],
    "en": [
      "so there's another miss configuration"
    ],
    "ru": [
      "так что есть еще одна пропущенная конфигурация"
    ]
  },
  {
    "time": [
      192.0,
      196.0
    ],
    "en": [
      "here I applied the ACL on our one"
    ],
    "ru": [
      "вот я применил ACL к нашему"
    ]
  },
  {
    "time": [
      196.0,
      202.0
    ],
    "en": [
      "so let's investigate enable show access"
    ],
    "ru": [
      "Итак, давайте исследуем включить доступ к показу"
    ]
  },
  {
    "time": [
      202.0,
      206.0
    ],
    "en": [
      "lists here's the access list it looks"
    ],
    "ru": [
      "списки вот список доступа он выглядит"
    ]
  },
  {
    "time": [
      206.0,
      207.0
    ],
    "en": [
      "good"
    ],
    "ru": [
      "хороший"
    ]
  },
  {
    "time": [
      207.0,
      210.0
    ],
    "en": [
      "denying from PC 5 to the correct subnet"
    ],
    "ru": [
      "отказ от ПК 5 к правильной подсети"
    ]
  },
  {
    "time": [
      210.0,
      214.0
    ],
    "en": [
      "maybe it isn't applied correctly show"
    ],
    "ru": [
      "может быть, это неправильно показано"
    ]
  },
  {
    "time": [
      214.0,
      221.0
    ],
    "en": [
      "ipv6 interface g0 to outgoing access"
    ],
    "ru": [
      "ipv6 интерфейс g0 для исходящего доступа"
    ]
  },
  {
    "time": [
      221.0,
      227.0
    ],
    "en": [
      "list g0 - in there's the problem the ACL"
    ],
    "ru": [
      "list g0 - в этом проблема ACL"
    ]
  },
  {
    "time": [
      227.0,
      229.0
    ],
    "en": [
      "should be inbound not outbound or"
    ],
    "ru": [
      "должен быть входящим, а не исходящим или"
    ]
  },
  {
    "time": [
      229.0,
      232.0
    ],
    "en": [
      "outgoing because traffic from PC 5 to"
    ],
    "ru": [
      "исходящий, потому что трафик с ПК 5 на"
    ]
  },
  {
    "time": [
      232.0,
      237.0
    ],
    "en": [
      "the 2001 DB 8 2222 subnet will be"
    ],
    "ru": [
      "подсеть 2001 DB 8 2222 будет"
    ]
  },
  {
    "time": [
      237.0,
      240.0
    ],
    "en": [
      "entering the g0 to interface not exiting"
    ],
    "ru": [
      "ввод g0 в интерфейс не выход"
    ]
  },
  {
    "time": [
      240.0,
      243.0
    ],
    "en": [
      "the return traffic coming back from"
    ],
    "ru": [
      "обратный трафик возвращается из"
    ]
  },
  {
    "time": [
      243.0,
      246.0
    ],
    "en": [
      "server to has the source and destination"
    ],
    "ru": [
      "на сервере есть источник и место назначения"
    ]
  },
  {
    "time": [
      246.0,
      249.0
    ],
    "en": [
      "IP addresses reversed so the ACL lets"
    ],
    "ru": [
      "IP-адреса поменяны местами, поэтому ACL позволяет"
    ]
  },
  {
    "time": [
      249.0,
      255.0
    ],
    "en": [
      "them by let's reapply the ACL inbound"
    ],
    "ru": [
      "их, давайте повторно применим входящий ACL"
    ]
  },
  {
    "time": [
      255.0,
      262.0
    ],
    "en": [
      "compte interface g0 - no ipv6 traffic"
    ],
    "ru": [
      "compte interface g0 - нет трафика ipv6"
    ]
  },
  {
    "time": [
      262.0,
      269.0
    ],
    "en": [
      "filter g0 - in out ipv6 traffic filter"
    ],
    "ru": [
      "filter g0 - входящий фильтр ipv6 трафика"
    ]
  },
  {
    "time": [
      269.0,
      277.0
    ],
    "en": [
      "g0 - in in ok let's try that ping again"
    ],
    "ru": [
      "g0 - в порядке, давайте попробуем этот пинг еще раз"
    ]
  },
  {
    "time": [
      277.0,
      285.0
    ],
    "en": [
      "paying 2001 DB 8 20 - 20 to 100 ok now"
    ],
    "ru": [
      "платит 2001 DB 8 20-20 до 100 хорошо сейчас"
    ]
  },
  {
    "time": [
      285.0,
      287.0
    ],
    "en": [
      "we get the destination host unreachable"
    ],
    "ru": [
      "мы получаем, что целевой хост недоступен"
    ]
  },
  {
    "time": [
      287.0,
      290.0
    ],
    "en": [
      "message from r1"
    ],
    "ru": [
      "сообщение от r1"
    ]
  },
  {
    "time": [
      290.0,
      294.0
    ],
    "en": [
      "let's test the next ACL pc3 shouldn't be"
    ],
    "ru": [
      "давайте протестируем следующий ACL pc3 не должно быть"
    ]
  },
  {
    "time": [
      294.0,
      297.0
    ],
    "en": [
      "able to communicate with PC one let's"
    ],
    "ru": [
      "возможность общаться с ПК один давайте"
    ]
  },
  {
    "time": [
      297.0,
      304.0
    ],
    "en": [
      "try a ping from pc 3 2 pc 1 ping 10 1 1"
    ],
    "ru": [
      "попробуйте пинг с пк 3 2 пк 1 пинг 10 1 1"
    ]
  },
  {
    "time": [
      304.0,
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
      304.0,
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
      312.0
    ],
    "en": [
      "good now pc 4 should be able to reach pc"
    ],
    "ru": [
      "хорошо, теперь ПК 4 должен иметь доступ к ПК"
    ]
  },
  {
    "time": [
      312.0,
      325.0
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
      312.0,
      325.0
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
      325.0,
      326.0
    ],
    "en": [
      "ping is successful"
    ],
    "ru": [
      "пинг успешен"
    ]
  },
  {
    "time": [
      326.0,
      328.0
    ],
    "en": [
      "so this ACL seems to be functioning"
    ],
    "ru": [
      "так что этот ACL, кажется, функционирует"
    ]
  },
  {
    "time": [
      328.0,
      333.0
    ],
    "en": [
      "properly now our final ACL should allow"
    ],
    "ru": [
      "правильно, теперь наш последний ACL должен позволять"
    ]
  },
  {
    "time": [
      333.0,
      337.0
    ],
    "en": [
      "pc 6 to telnet to r2 but not other ipv6"
    ],
    "ru": [
      "pc 6 на telnet на r2, но не на другой ipv6"
    ]
  },
  {
    "time": [
      337.0,
      341.0
    ],
    "en": [
      "hosts like PC 5 let's try to tell net"
    ],
    "ru": [
      "такие хосты, как ПК 5, давайте попробуем сказать net"
    ]
  },
  {
    "time": [
      341.0,
      350.0
    ],
    "en": [
      "from PC 6 telnet 2001 DB 8 12 12 double"
    ],
    "ru": [
      "с ПК 6 telnet 2001 DB 8 12 12 двойной"
    ]
  },
  {
    "time": [
      350.0,
      354.0
    ],
    "en": [
      "colon - looks good I'll enter the"
    ],
    "ru": [
      "двоеточие - выглядит хорошо, я войду в"
    ]
  },
  {
    "time": [
      354.0,
      360.0
    ],
    "en": [
      "password of CCNA okay we're in exit so"
    ],
    "ru": [
      "пароль CCNA хорошо, мы на выходе, так что"
    ]
  },
  {
    "time": [
      360.0,
      363.0
    ],
    "en": [
      "that seems fine but pc v shouldn't be"
    ],
    "ru": [
      "это кажется прекрасным, но pc v не должно быть"
    ]
  },
  {
    "time": [
      363.0,
      365.0
    ],
    "en": [
      "able to tell met to our - let's try to"
    ],
    "ru": [
      "в состоянии рассказать встретились с нашими - попробуем"
    ]
  },
  {
    "time": [
      365.0,
      372.0
    ],
    "en": [
      "tell net from PC 5 telnet 2001 DB 8 12"
    ],
    "ru": [
      "скажите net с ПК 5 telnet 2001 DB 8 12"
    ]
  },
  {
    "time": [
      372.0,
      377.0
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
      372.0,
      377.0
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
      377.0,
      380.0
    ],
    "en": [
      "problem PC 5 is also able to tell net to"
    ],
    "ru": [
      "проблема ПК 5 также может сообщить сеть"
    ]
  },
  {
    "time": [
      380.0,
      387.0
    ],
    "en": [
      "r2 let's investigate on our to do show"
    ],
    "ru": [
      "r2 давайте исследуем наше шоу"
    ]
  },
  {
    "time": [
      387.0,
      390.0
    ],
    "en": [
      "access lists"
    ],
    "ru": [
      "списки доступа"
    ]
  },
  {
    "time": [
      390.0,
      393.0
    ],
    "en": [
      "permit TCP host with the IP address of"
    ],
    "ru": [
      "разрешить TCP-хост с IP-адресом"
    ]
  },
  {
    "time": [
      393.0,
      399.0
    ],
    "en": [
      "PC 6ne equals telnet that looks good"
    ],
    "ru": [
      "PC 6ne - это telnet, который выглядит хорошо"
    ]
  },
  {
    "time": [
      399.0,
      403.0
    ],
    "en": [
      "so let's check how the ACL is applied do"
    ],
    "ru": [
      "так что давайте проверим, как применяется ACL."
    ]
  },
  {
    "time": [
      403.0,
      410.0
    ],
    "en": [
      "show run okay there's the issue the ACL"
    ],
    "ru": [
      "показать запустить хорошо, проблема в ACL"
    ]
  },
  {
    "time": [
      410.0,
      413.0
    ],
    "en": [
      "is applied to the console line not the"
    ],
    "ru": [
      "применяется к строке консоли, а не к"
    ]
  },
  {
    "time": [
      413.0,
      415.0
    ],
    "en": [
      "vty lines which are used for telnet"
    ],
    "ru": [
      "vty линии, которые используются для telnet"
    ]
  },
  {
    "time": [
      415.0,
      419.0
    ],
    "en": [
      "let's remove and then reapply it let me"
    ],
    "ru": [
      "давайте удалим, а затем снова применим, позвольте мне"
    ]
  },
  {
    "time": [
      419.0,
      424.0
    ],
    "en": [
      "copy the command first and then let's"
    ],
    "ru": [
      "сначала скопируйте команду, а затем давайте"
    ]
  },
  {
    "time": [
      424.0,
      429.0
    ],
    "en": [
      "remove it line console 0 I'll paste it"
    ],
    "ru": [
      "удалить строку консоли 0 я вставлю это"
    ]
  },
  {
    "time": [
      429.0,
      434.0
    ],
    "en": [
      "here and then cancel it with no okay now"
    ],
    "ru": [
      "здесь, а затем отмените это без согласия сейчас"
    ]
  },
  {
    "time": [
      434.0,
      440.0
    ],
    "en": [
      "let's reapply it line vty 0 15 and now"
    ],
    "ru": [
      "давайте повторно применим его строку vty 0 15 и теперь"
    ]
  },
  {
    "time": [
      440.0,
      445.0
    ],
    "en": [
      "I'll paste it here once more ok let's"
    ],
    "ru": [
      "Я вставлю его сюда еще раз, ладно, давай"
    ]
  },
  {
    "time": [
      445.0,
      446.0
    ],
    "en": [
      "test again"
    ],
    "ru": [
      "тест снова"
    ]
  },
  {
    "time": [
      446.0,
      453.0
    ],
    "en": [
      "I'll tell net from PC 5 telnet 2001 DB 8"
    ],
    "ru": [
      "Скажу инет с ПК 5 telnet 2001 DB 8"
    ]
  },
  {
    "time": [
      453.0,
      458.0
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
      453.0,
      458.0
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
      458.0,
      463.0
    ],
    "en": [
      "but can PC 6 still telnet let's try"
    ],
    "ru": [
      "а может ПК 6 еще телнет давай попробуем"
    ]
  },
  {
    "time": [
      463.0,
      472.0
    ],
    "en": [
      "telnet 2001 DB 8 12 12 - hazard CCNA ok"
    ],
    "ru": [
      "telnet 2001 DB 8 12 12 - опасность CCNA ok"
    ]
  },
  {
    "time": [
      472.0,
      475.0
    ],
    "en": [
      "all of our ACLs are working now that's"
    ],
    "ru": [
      "все наши ACL теперь работают,"
    ]
  },
  {
    "time": [
      475.0,
      480.0
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
      480.0,
      482.0
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
      482.0,
      485.0
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
      485.0,
      487.0
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
      487.0,
      490.0
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
      490.0,
      492.0
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
      492.0,
      495.0
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
      495.0,
      497.0
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
      497.0,
      499.0
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
      499.0,
      502.0
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
      502.0,
      505.0
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
      505.0,
      507.0
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
      507.0,
      507.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]