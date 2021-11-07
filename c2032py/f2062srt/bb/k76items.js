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
      19.0
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
      19.0,
      21.0
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
      21.0,
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
      "will troubleshoot a few problems in the"
    ],
    "ru": [
      "устранит несколько проблем в"
    ]
  },
  {
    "time": [
      27.0,
      28.0
    ],
    "en": [
      "network we configured in the previous"
    ],
    "ru": [
      "сеть, которую мы настроили в предыдущем"
    ]
  },
  {
    "time": [
      28.0,
      31.0
    ],
    "en": [
      "lab there are three issues listed in the"
    ],
    "ru": [
      "лаборатории есть три проблемы, перечисленные в"
    ]
  },
  {
    "time": [
      31.0,
      32.0
    ],
    "en": [
      "instructions"
    ],
    "ru": [
      "инструкции"
    ]
  },
  {
    "time": [
      32.0,
      36.0
    ],
    "en": [
      "let's fix them one by one the first"
    ],
    "ru": [
      "давайте исправим их один за другим первыми"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "issue is that PC 2 cannot ping PC 1"
    ],
    "ru": [
      "проблема в том, что ПК 2 не может пинговать ПК 1"
    ]
  },
  {
    "time": [
      39.0,
      46.0
    ],
    "en": [
      "let's test it I'll ping PC 1 from PC to"
    ],
    "ru": [
      "давайте протестируем я пингую PC 1 с ПК на"
    ]
  },
  {
    "time": [
      46.0,
      53.0
    ],
    "en": [
      "ping 192.168.1.1 hundred ok we get a"
    ],
    "ru": [
      "пинг 192.168.1.1 сотню ок получаем"
    ]
  },
  {
    "time": [
      53.0,
      56.0
    ],
    "en": [
      "reply from our default gateway saying"
    ],
    "ru": [
      "ответ от нашего шлюза по умолчанию, говорящий"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "the destination host is unreachable this"
    ],
    "ru": [
      "целевой хост недоступен"
    ]
  },
  {
    "time": [
      59.0,
      62.0
    ],
    "en": [
      "probably means the default gateway R 2"
    ],
    "ru": [
      "вероятно означает шлюз по умолчанию R 2"
    ]
  },
  {
    "time": [
      62.0,
      64.0
    ],
    "en": [
      "doesn't have a route to the network"
    ],
    "ru": [
      "не имеет маршрута к сети"
    ]
  },
  {
    "time": [
      64.0,
      71.0
    ],
    "en": [
      "let's investigate on our to enable show"
    ],
    "ru": [
      "давайте исследуем на нашем, чтобы включить шоу"
    ]
  },
  {
    "time": [
      71.0,
      76.0
    ],
    "en": [
      "IP route indeed our two only knows local"
    ],
    "ru": [
      "IP-маршрут действительно наши двое знают только местные"
    ]
  },
  {
    "time": [
      76.0,
      78.0
    ],
    "en": [
      "and connected routes it's missing the"
    ],
    "ru": [
      "и связанных маршрутов отсутствует"
    ]
  },
  {
    "time": [
      78.0,
      80.0
    ],
    "en": [
      "default route out to the Internet we"
    ],
    "ru": [
      "по умолчанию выход в Интернет мы"
    ]
  },
  {
    "time": [
      80.0,
      83.0
    ],
    "en": [
      "configured in the previous lab let's fix"
    ],
    "ru": [
      "настроен в предыдущей лабораторной работе, давайте исправим"
    ]
  },
  {
    "time": [
      83.0,
      84.0
    ],
    "en": [
      "that"
    ],
    "ru": [
      "что"
    ]
  },
  {
    "time": [
      84.0,
      90.0
    ],
    "en": [
      "comte IP route"
    ],
    "ru": [
      "comte IP route"
    ]
  },
  {
    "time": [
      90.0,
      95.0
    ],
    "en": [
      "oh-oh-oh-oh-oh-oh-oh-oh-oh g 0 0 0 ok"
    ],
    "ru": [
      "ой-ой-ой-ой-ой-ой-ой-ой-ой г 0 0 0 ок"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "immediately we get a message saying our"
    ],
    "ru": [
      "сразу мы получаем сообщение о том, что наш"
    ]
  },
  {
    "time": [
      97.0,
      99.0
    ],
    "en": [
      "tunnel interface is up because we now"
    ],
    "ru": [
      "туннельный интерфейс работает, потому что мы сейчас"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "have a route to the destination and if"
    ],
    "ru": [
      "иметь маршрут к месту назначения, и если"
    ]
  },
  {
    "time": [
      102.0,
      104.0
    ],
    "en": [
      "we wait a few seconds the OSPF neighbor"
    ],
    "ru": [
      "ждем несколько секунд сосед OSPF"
    ]
  },
  {
    "time": [
      104.0,
      110.0
    ],
    "en": [
      "r1 should come up as well let's try that"
    ],
    "ru": [
      "r1 тоже должен появиться, давайте попробуем это"
    ]
  },
  {
    "time": [
      110.0,
      117.0
    ],
    "en": [
      "ping from PC to again ping 192.168.1.1"
    ],
    "ru": [
      "пинг с ПК, чтобы снова пинговать 192.168.1.1"
    ]
  },
  {
    "time": [
      117.0,
      123.0
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
      123.0,
      126.0
    ],
    "en": [
      "okay the ping works this time we've"
    ],
    "ru": [
      "хорошо, на этот раз пинг работает, мы"
    ]
  },
  {
    "time": [
      126.0,
      130.0
    ],
    "en": [
      "solved the first issue the next problem"
    ],
    "ru": [
      "решил первую проблему следующая проблема"
    ]
  },
  {
    "time": [
      130.0,
      134.0
    ],
    "en": [
      "is that PC for cannot pain pc3 let's"
    ],
    "ru": [
      "это тот компьютер для не может болеть pc3 давайте"
    ]
  },
  {
    "time": [
      134.0,
      139.0
    ],
    "en": [
      "test that out I'll ping pc 3 from PC for"
    ],
    "ru": [
      "проверить это я пингую компьютер 3 с ПК для"
    ]
  },
  {
    "time": [
      139.0,
      150.0
    ],
    "en": [
      "ping 192.168 3.1 hundred ok the thing"
    ],
    "ru": [
      "пинг 192.168 3.1 сотка ок вещь"
    ]
  },
  {
    "time": [
      150.0,
      152.0
    ],
    "en": [
      "fails this time our default gateway"
    ],
    "ru": [
      "на этот раз не работает наш шлюз по умолчанию"
    ]
  },
  {
    "time": [
      152.0,
      154.0
    ],
    "en": [
      "doesn't send destination host"
    ],
    "ru": [
      "не отправляет целевой хост"
    ]
  },
  {
    "time": [
      154.0,
      157.0
    ],
    "en": [
      "unreachable so it's probably a different"
    ],
    "ru": [
      "недоступен, так что это, вероятно, другое"
    ]
  },
  {
    "time": [
      157.0,
      158.0
    ],
    "en": [
      "issue"
    ],
    "ru": [
      "проблема"
    ]
  },
  {
    "time": [
      158.0,
      165.0
    ],
    "en": [
      "let's check out our for enable show IP"
    ],
    "ru": [
      "давайте проверим наш для включения показа IP"
    ]
  },
  {
    "time": [
      165.0,
      170.0
    ],
    "en": [
      "route as you can see our 4 has a default"
    ],
    "ru": [
      "маршрут, как вы можете видеть, у нашего 4-го маршрута по умолчанию"
    ]
  },
  {
    "time": [
      170.0,
      172.0
    ],
    "en": [
      "route so it should be able to reach the"
    ],
    "ru": [
      "маршрут, чтобы он мог добраться до"
    ]
  },
  {
    "time": [
      172.0,
      176.0
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
      172.0,
      176.0
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
      176.0,
      179.0
    ],
    "en": [
      "is connected to our 3 let's check out"
    ],
    "ru": [
      "подключен к нашим 3, давайте проверим"
    ]
  },
  {
    "time": [
      179.0,
      188.0
    ],
    "en": [
      "our 3 enable show IP route ok our 3 only"
    ],
    "ru": [
      "наши 3 позволяют показывать IP-маршрут в порядке, только наши 3"
    ]
  },
  {
    "time": [
      188.0,
      191.0
    ],
    "en": [
      "has connected and local roads no AI GRP"
    ],
    "ru": [
      "подключено и местных дорог нет AI GRP"
    ]
  },
  {
    "time": [
      191.0,
      195.0
    ],
    "en": [
      "or even BGP routes this means that the"
    ],
    "ru": [
      "или даже маршруты BGP, это означает, что"
    ]
  },
  {
    "time": [
      195.0,
      198.0
    ],
    "en": [
      "ping from pc 4 was able to reach pc 3"
    ],
    "ru": [
      "пинг с ПК 4 смог достичь ПК 3"
    ]
  },
  {
    "time": [
      198.0,
      201.0
    ],
    "en": [
      "but our 3 couldn't send the reply back"
    ],
    "ru": [
      "но наши трое не смогли отправить ответ"
    ]
  },
  {
    "time": [
      201.0,
      204.0
    ],
    "en": [
      "because it doesn't have a route to"
    ],
    "ru": [
      "потому что у него нет пути к"
    ]
  },
  {
    "time": [
      204.0,
      208.0
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
      204.0,
      208.0
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
      208.0,
      210.0
    ],
    "en": [
      "routes isn't relevant to this current"
    ],
    "ru": [
      "маршруты не имеют отношения к этому текущему"
    ]
  },
  {
    "time": [
      210.0,
      214.0
    ],
    "en": [
      "issue so let's look at the EA grpe issue"
    ],
    "ru": [
      "проблема, поэтому давайте посмотрим на проблему с EA grpe"
    ]
  },
  {
    "time": [
      214.0,
      219.0
    ],
    "en": [
      "show IP erp neighbors no neighbors"
    ],
    "ru": [
      "показать IP erp соседи нет соседей"
    ]
  },
  {
    "time": [
      219.0,
      226.0
    ],
    "en": [
      "that's a problem show IP protocols can"
    ],
    "ru": [
      "это проблема показать, что IP-протоколы могут"
    ]
  },
  {
    "time": [
      226.0,
      231.0
    ],
    "en": [
      "you identify the issue under routing for"
    ],
    "ru": [
      "вы определяете проблему при маршрутизации для"
    ]
  },
  {
    "time": [
      231.0,
      235.0
    ],
    "en": [
      "networks 203 OD 1 1 3 8 / 30 is listed"
    ],
    "ru": [
      "сети 203 OD 1 1 3 8/30 указано"
    ]
  },
  {
    "time": [
      235.0,
      241.0
    ],
    "en": [
      "which is fine 192.168.0 is listed which"
    ],
    "ru": [
      "что нормально 192.168.0 указан, который"
    ]
  },
  {
    "time": [
      241.0,
      243.0
    ],
    "en": [
      "is fine it's a class full / 24 network"
    ],
    "ru": [
      "нормально это сеть класса full / 24"
    ]
  },
  {
    "time": [
      243.0,
      248.0
    ],
    "en": [
      "so the prefix length isn't displayed but"
    ],
    "ru": [
      "поэтому длина префикса не отображается, но"
    ]
  },
  {
    "time": [
      248.0,
      252.0
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
      248.0,
      252.0
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
      252.0,
      256.0
    ],
    "en": [
      "r 3 doesn't have any interface in"
    ],
    "ru": [
      "r 3 не имеет интерфейса в"
    ]
  },
  {
    "time": [
      256.0,
      260.0
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
      256.0,
      260.0
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
      260.0,
      265.0
    ],
    "en": [
      "interface is 192.168.0.1 let's fix that"
    ],
    "ru": [
      "интерфейс 192.168.0.1 давайте исправим это"
    ]
  },
  {
    "time": [
      265.0,
      272.0
    ],
    "en": [
      "statement coffee tea red ER e IG RP 100"
    ],
    "ru": [
      "заявление кофе чай красный ER e IG RP 100"
    ]
  },
  {
    "time": [
      272.0,
      283.0
    ],
    "en": [
      "no network 192.168.0 oh-oh-oh-oh network"
    ],
    "ru": [
      "нет сети 192.168.0 ой-ой-ой-ой сеть"
    ]
  },
  {
    "time": [
      283.0,
      289.0
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
      283.0,
      289.0
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
      289.0,
      294.0
    ],
    "en": [
      "the adjacency comes up do show IP route"
    ],
    "ru": [
      "появляется смежность, показывать IP-маршрут"
    ]
  },
  {
    "time": [
      294.0,
      295.0
    ],
    "en": [
      "okay"
    ],
    "ru": [
      "Ладно"
    ]
  },
  {
    "time": [
      295.0,
      300.0
    ],
    "en": [
      "now R 3 has a route to 192.168.0 / 24"
    ],
    "ru": [
      "теперь у R 3 есть маршрут к 192.168.0 / 24"
    ]
  },
  {
    "time": [
      300.0,
      307.0
    ],
    "en": [
      "let's try that ping again from pc 4 in"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с ПК 4 в"
    ]
  },
  {
    "time": [
      307.0,
      314.0
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
      307.0,
      314.0
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
      314.0,
      318.0
    ],
    "en": [
      "this time now the last problem is that"
    ],
    "ru": [
      "на этот раз последняя проблема в том, что"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "hosts in enterprise B cannot ping hosts"
    ],
    "ru": [
      "хосты на предприятии B не могут пинговать хосты"
    ]
  },
  {
    "time": [
      321.0,
      324.0
    ],
    "en": [
      "in enterprise a that probably has to do"
    ],
    "ru": [
      "на предприятии, что, вероятно, нужно сделать"
    ]
  },
  {
    "time": [
      324.0,
      326.0
    ],
    "en": [
      "with the fact that our 3 still has no"
    ],
    "ru": [
      "с тем, что у нашей 3 еще нет"
    ]
  },
  {
    "time": [
      326.0,
      329.0
    ],
    "en": [
      "BGP routes let's go back on our three to"
    ],
    "ru": [
      "Маршруты BGP, давайте вернемся к нашим трем маршрутам."
    ]
  },
  {
    "time": [
      329.0,
      339.0
    ],
    "en": [
      "investigate and show IP BGP summary ok"
    ],
    "ru": [
      "изучить и показать сводку IP BGP в порядке"
    ]
  },
  {
    "time": [
      339.0,
      345.0
    ],
    "en": [
      "so two of 302 139 in a s 65 thousand one"
    ],
    "ru": [
      "так два из 302 139 в с 65 тысяч один"
    ]
  },
  {
    "time": [
      345.0,
      347.0
    ],
    "en": [
      "is configured as our neighbor that's"
    ],
    "ru": [
      "настроен как наш сосед, который"
    ]
  },
  {
    "time": [
      347.0,
      348.0
    ],
    "en": [
      "correct"
    ],
    "ru": [
      "верный"
    ]
  },
  {
    "time": [
      348.0,
      355.0
    ],
    "en": [
      "show IP bgp neighbors ok here at the top"
    ],
    "ru": [
      "показать соседей IP bgp ok здесь вверху"
    ]
  },
  {
    "time": [
      355.0,
      360.0
    ],
    "en": [
      "it says BGP state equals active that"
    ],
    "ru": [
      "он говорит, что состояние BGP равно активному, что"
    ]
  },
  {
    "time": [
      360.0,
      362.0
    ],
    "en": [
      "sounds like a good thing but really it"
    ],
    "ru": [
      "звучит хорошо, но на самом деле это"
    ]
  },
  {
    "time": [
      362.0,
      364.0
    ],
    "en": [
      "means that BGP is actively trying to"
    ],
    "ru": [
      "означает, что BGP активно пытается"
    ]
  },
  {
    "time": [
      364.0,
      367.0
    ],
    "en": [
      "form an adjacency the state we really"
    ],
    "ru": [
      "образуют смежность, состояние, в котором мы действительно"
    ]
  },
  {
    "time": [
      367.0,
      371.0
    ],
    "en": [
      "want is established the BGP"
    ],
    "ru": [
      "хочу установлен BGP"
    ]
  },
  {
    "time": [
      371.0,
      373.0
    ],
    "en": [
      "configuration looks fine however so"
    ],
    "ru": [
      "конфигурация выглядит хорошо, но так"
    ]
  },
  {
    "time": [
      373.0,
      375.0
    ],
    "en": [
      "maybe there is something wrong with the"
    ],
    "ru": [
      "может что-то не так с"
    ]
  },
  {
    "time": [
      375.0,
      382.0
    ],
    "en": [
      "interface show interface s 0 0 0"
    ],
    "ru": [
      "интерфейс показать интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      382.0,
      385.0
    ],
    "en": [
      "encapsulation hdl-c"
    ],
    "ru": [
      "инкапсуляция hdl-c"
    ]
  },
  {
    "time": [
      385.0,
      387.0
    ],
    "en": [
      "there's a problem"
    ],
    "ru": [
      "есть проблема"
    ]
  },
  {
    "time": [
      387.0,
      390.0
    ],
    "en": [
      "it's supposed to be using PPP as we"
    ],
    "ru": [
      "предполагается использование PPP, поскольку мы"
    ]
  },
  {
    "time": [
      390.0,
      397.0
    ],
    "en": [
      "configured in the last lab show run"
    ],
    "ru": [
      "настроен в последнем лабораторном шоу"
    ]
  },
  {
    "time": [
      397.0,
      400.0
    ],
    "en": [
      "indeed PPP isn't configured on the"
    ],
    "ru": [
      "действительно PPP не настроен на"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "interface if I scroll up a little"
    ],
    "ru": [
      "интерфейс, если я немного прокручу вверх"
    ]
  },
  {
    "time": [
      402.0,
      405.0
    ],
    "en": [
      "however you can see the appropriate"
    ],
    "ru": [
      "однако вы можете увидеть соответствующие"
    ]
  },
  {
    "time": [
      405.0,
      406.0
    ],
    "en": [
      "username and password combination is"
    ],
    "ru": [
      "комбинация имени пользователя и пароля"
    ]
  },
  {
    "time": [
      406.0,
      409.0
    ],
    "en": [
      "configured so we just have to configure"
    ],
    "ru": [
      "настроен, поэтому нам просто нужно настроить"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "the encapsulation and authentication"
    ],
    "ru": [
      "инкапсуляция и аутентификация"
    ]
  },
  {
    "time": [
      411.0,
      417.0
    ],
    "en": [
      "mode coffee/tea interface s 0 0 0"
    ],
    "ru": [
      "режим кофе / чай интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      417.0,
      423.0
    ],
    "en": [
      "shutdown encapsulation PPP PPP"
    ],
    "ru": [
      "выключение инкапсуляция PPP PPP"
    ]
  },
  {
    "time": [
      423.0,
      429.0
    ],
    "en": [
      "authentication chap no shutdown okay"
    ],
    "ru": [
      "аутентификация, парень, выключение нормально"
    ]
  },
  {
    "time": [
      429.0,
      432.0
    ],
    "en": [
      "let's wait 10 seconds or so for the BGP"
    ],
    "ru": [
      "подождем 10 секунд или около того для BGP"
    ]
  },
  {
    "time": [
      432.0,
      443.0
    ],
    "en": [
      "adjacency to come up"
    ],
    "ru": [
      "смежность придумать"
    ]
  },
  {
    "time": [
      443.0,
      448.0
    ],
    "en": [
      "okay now let's check the route table do"
    ],
    "ru": [
      "хорошо, теперь давайте проверим таблицу маршрутов"
    ]
  },
  {
    "time": [
      448.0,
      455.0
    ],
    "en": [
      "show IP route okay now we have all of"
    ],
    "ru": [
      "показать IP-маршрут хорошо, теперь у нас есть все"
    ]
  },
  {
    "time": [
      455.0,
      457.0
    ],
    "en": [
      "those BGP routes let's try a ping from"
    ],
    "ru": [
      "эти маршруты BGP, давайте попробуем пинг от"
    ]
  },
  {
    "time": [
      457.0,
      465.0
    ],
    "en": [
      "PC for two PC one ping 192.168.1.1"
    ],
    "ru": [
      "ПК на два ПК один пинг 192.168.1.1"
    ]
  },
  {
    "time": [
      465.0,
      475.0
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
      475.0,
      477.0
    ],
    "en": [
      "okay the ping works we've solved the"
    ],
    "ru": [
      "хорошо, пинг работает, мы решили"
    ]
  },
  {
    "time": [
      477.0,
      481.0
    ],
    "en": [
      "network issues that's all for this lab"
    ],
    "ru": [
      "проблемы с сетью, вот и все для этой лаборатории"
    ]
  },
  {
    "time": [
      481.0,
      484.0
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
      484.0,
      487.0
    ],
    "en": [
      "and video have been helpful for you this"
    ],
    "ru": [
      "и видео были для вас полезны"
    ]
  },
  {
    "time": [
      487.0,
      490.0
    ],
    "en": [
      "is the final video in my CCNA lab series"
    ],
    "ru": [
      "это последнее видео в моей лабораторной серии CCNA"
    ]
  },
  {
    "time": [
      490.0,
      494.0
    ],
    "en": [
      "thank you all for your support as of now"
    ],
    "ru": [
      "спасибо всем за вашу поддержку на данный момент"
    ]
  },
  {
    "time": [
      494.0,
      497.0
    ],
    "en": [
      "I have over 1200 subscribers which is"
    ],
    "ru": [
      "У меня более 1200 подписчиков, что"
    ]
  },
  {
    "time": [
      497.0,
      499.0
    ],
    "en": [
      "amazing and the channel keeps growing I"
    ],
    "ru": [
      "потрясающе, и канал продолжает расти Я"
    ]
  },
  {
    "time": [
      499.0,
      502.0
    ],
    "en": [
      "have another project planned and I will"
    ],
    "ru": [
      "у меня запланирован еще один проект, и я буду"
    ]
  },
  {
    "time": [
      502.0,
      504.0
    ],
    "en": [
      "make a video to let you know about it"
    ],
    "ru": [
      "сделайте видео, чтобы вы знали об этом"
    ]
  },
  {
    "time": [
      504.0,
      507.0
    ],
    "en": [
      "soon please subscribe for updates on"
    ],
    "ru": [
      "скоро подпишитесь на обновления на"
    ]
  },
  {
    "time": [
      507.0,
      511.0
    ],
    "en": [
      "that and for future content if you want"
    ],
    "ru": [
      "это и для будущего контента, если вы хотите"
    ]
  },
  {
    "time": [
      511.0,
      512.0
    ],
    "en": [
      "to support my channel"
    ],
    "ru": [
      "чтобы поддержать мой канал"
    ]
  },
  {
    "time": [
      512.0,
      514.0
    ],
    "en": [
      "I accept cryptocurrency donations via"
    ],
    "ru": [
      "Я принимаю пожертвования в криптовалюте через"
    ]
  },
  {
    "time": [
      514.0,
      517.0
    ],
    "en": [
      "the addresses in the description I am"
    ],
    "ru": [
      "адреса в описании я"
    ]
  },
  {
    "time": [
      517.0,
      519.0
    ],
    "en": [
      "also a brave verified publisher and"
    ],
    "ru": [
      "также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      519.0,
      522.0
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
      522.0,
      522.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]