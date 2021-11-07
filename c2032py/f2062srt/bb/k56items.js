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
      9.0
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
      9.0,
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
      21.0
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
      21.0,
      22.0
    ],
    "en": [
      "lab we will troubleshoot a multi area"
    ],
    "ru": [
      "лаборатория мы устраним неполадки в нескольких областях"
    ]
  },
  {
    "time": [
      22.0,
      25.0
    ],
    "en": [
      "OSPF network in which neighbor"
    ],
    "ru": [
      "Сеть OSPF, в которой сосед"
    ]
  },
  {
    "time": [
      25.0,
      27.0
    ],
    "en": [
      "relationships aren't properly forming"
    ],
    "ru": [
      "отношения не формируются должным образом"
    ]
  },
  {
    "time": [
      27.0,
      29.0
    ],
    "en": [
      "and roads that should be advertised are"
    ],
    "ru": [
      "и дороги, которые следует рекламировать,"
    ]
  },
  {
    "time": [
      29.0,
      33.0
    ],
    "en": [
      "not let's get started first let's go on"
    ],
    "ru": [
      "не давай сначала начнем, давай продолжим"
    ]
  },
  {
    "time": [
      33.0,
      42.0
    ],
    "en": [
      "our one enable show IP ospf neighbor"
    ],
    "ru": [
      "наш единственный включить показ IP ospf соседа"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "our one has become OSPF neighbors with"
    ],
    "ru": [
      "наш стал соседом OSPF с"
    ]
  },
  {
    "time": [
      45.0,
      49.0
    ],
    "en": [
      "our two but not our four show IP"
    ],
    "ru": [
      "наши двое, но не наши четыре, показывают IP"
    ]
  },
  {
    "time": [
      49.0,
      51.0
    ],
    "en": [
      "protocols"
    ],
    "ru": [
      "протоколы"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "looks like our ones interfaces are in"
    ],
    "ru": [
      "похоже, что наши интерфейсы находятся в"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "the proper areas as you can see they're"
    ],
    "ru": [
      "правильные области, как вы видите, они"
    ]
  },
  {
    "time": [
      56.0,
      58.0
    ],
    "en": [
      "both in area one"
    ],
    "ru": [
      "оба в области один"
    ]
  },
  {
    "time": [
      58.0,
      60.0
    ],
    "en": [
      "however you may notice one problem here"
    ],
    "ru": [
      "однако вы можете заметить здесь одну проблему"
    ]
  },
  {
    "time": [
      60.0,
      63.0
    ],
    "en": [
      "on our one our one isn't advertising"
    ],
    "ru": [
      "на нашем один наш не реклама"
    ]
  },
  {
    "time": [
      63.0,
      68.0
    ],
    "en": [
      "it's loopback of 1.1.11 if I go on our -"
    ],
    "ru": [
      "это петля 1.1.11, если я пойду по нашему -"
    ]
  },
  {
    "time": [
      68.0,
      72.0
    ],
    "en": [
      "it won't appear in the routing table"
    ],
    "ru": [
      "он не появится в таблице маршрутизации"
    ]
  },
  {
    "time": [
      72.0,
      77.0
    ],
    "en": [
      "enable show IP route indeed it's"
    ],
    "ru": [
      "включить показ IP-маршрута действительно"
    ]
  },
  {
    "time": [
      77.0,
      82.0
    ],
    "en": [
      "receiving the 10.14 0 but not 1.1 1.1"
    ],
    "ru": [
      "получает 10,14 0, но не 1,1 1,1"
    ]
  },
  {
    "time": [
      82.0,
      89.0
    ],
    "en": [
      "from our one let's fix that on our one"
    ],
    "ru": [
      "с нашего, давайте исправим это на нашем"
    ]
  },
  {
    "time": [
      89.0,
      98.0
    ],
    "en": [
      "coffee tea router OSPF one network 1.1.1"
    ],
    "ru": [
      "кофе чай роутер OSPF одна сеть 1.1.1"
    ]
  },
  {
    "time": [
      98.0,
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
      98.0,
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
      107.0
    ],
    "en": [
      "be a passive interface passive interface"
    ],
    "ru": [
      "быть пассивным интерфейсом пассивным интерфейсом"
    ]
  },
  {
    "time": [
      107.0,
      114.0
    ],
    "en": [
      "l0 ok now let's check again on our to"
    ],
    "ru": [
      "l0 хорошо, теперь давайте проверим еще раз на нашем"
    ]
  },
  {
    "time": [
      114.0,
      119.0
    ],
    "en": [
      "show IP route"
    ],
    "ru": [
      "показать IP-маршрут"
    ]
  },
  {
    "time": [
      119.0,
      122.0
    ],
    "en": [
      "there it is so we fix our problem on our"
    ],
    "ru": [
      "вот так, поэтому мы исправляем нашу проблему на нашем"
    ]
  },
  {
    "time": [
      122.0,
      126.0
    ],
    "en": [
      "one let's go on our four and see what's"
    ],
    "ru": [
      "один пойдем на нашу четверку и посмотрим, что"
    ]
  },
  {
    "time": [
      126.0,
      129.0
    ],
    "en": [
      "the issue"
    ],
    "ru": [
      "проблема"
    ]
  },
  {
    "time": [
      129.0,
      135.0
    ],
    "en": [
      "enable show IP ospf neighbors indeed our"
    ],
    "ru": [
      "включить показывать IP ospf соседей действительно наши"
    ]
  },
  {
    "time": [
      135.0,
      138.0
    ],
    "en": [
      "four has no OSPF neighbors show IP"
    ],
    "ru": [
      "четыре не имеют соседей OSPF показывают IP"
    ]
  },
  {
    "time": [
      138.0,
      143.0
    ],
    "en": [
      "protocols can you spot the problem our"
    ],
    "ru": [
      "протоколы, вы можете определить проблему?"
    ]
  },
  {
    "time": [
      143.0,
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
      143.0,
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
      150.0
    ],
    "en": [
      "this means it won't form neighbor"
    ],
    "ru": [
      "это означает, что он не будет образовывать соседа"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "relationships on that interface it will"
    ],
    "ru": [
      "отношения на этом интерфейсе это будет"
    ]
  },
  {
    "time": [
      153.0,
      154.0
    ],
    "en": [
      "still advertise the network on that"
    ],
    "ru": [
      "все еще рекламируют сеть на этом"
    ]
  },
  {
    "time": [
      154.0,
      156.0
    ],
    "en": [
      "interface although in this case it has"
    ],
    "ru": [
      "интерфейс, хотя в этом случае он имеет"
    ]
  },
  {
    "time": [
      156.0,
      159.0
    ],
    "en": [
      "no neighbors to advertise it to let's"
    ],
    "ru": [
      "нет соседей, чтобы рекламировать это давай"
    ]
  },
  {
    "time": [
      159.0,
      167.0
    ],
    "en": [
      "fix that conf T router OSPF one no"
    ],
    "ru": [
      "исправить эту конфигурацию маршрутизатора OSPF один нет"
    ]
  },
  {
    "time": [
      167.0,
      172.0
    ],
    "en": [
      "passive interface G zero zero now r1 and"
    ],
    "ru": [
      "пассивный интерфейс G ноль ноль теперь r1 и"
    ]
  },
  {
    "time": [
      172.0,
      175.0
    ],
    "en": [
      "r4 should be trying to form an OSPF"
    ],
    "ru": [
      "r4 должен пытаться сформировать OSPF"
    ]
  },
  {
    "time": [
      175.0,
      178.0
    ],
    "en": [
      "neighbor relationship I'll wait a few"
    ],
    "ru": [
      "соседские отношения, я подожду немного"
    ]
  },
  {
    "time": [
      178.0,
      185.0
    ],
    "en": [
      "seconds"
    ],
    "ru": [
      "секунды"
    ]
  },
  {
    "time": [
      185.0,
      187.0
    ],
    "en": [
      "okay now let's confirm with a show"
    ],
    "ru": [
      "хорошо, теперь давайте подтвердим шоу"
    ]
  },
  {
    "time": [
      187.0,
      192.0
    ],
    "en": [
      "command do show IP ospf neighbor"
    ],
    "ru": [
      "команда показать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      192.0,
      198.0
    ],
    "en": [
      "there it is r1 and r4 are OSPF neighbors"
    ],
    "ru": [
      "там r1 и r4 - соседи OSPF"
    ]
  },
  {
    "time": [
      198.0,
      204.0
    ],
    "en": [
      "next let's check out our to show IP ospf"
    ],
    "ru": [
      "затем давайте проверим наш, чтобы показать IP ospf"
    ]
  },
  {
    "time": [
      204.0,
      207.0
    ],
    "en": [
      "neighbors it's formed a relationship"
    ],
    "ru": [
      "соседи сформировались отношения"
    ]
  },
  {
    "time": [
      207.0,
      215.0
    ],
    "en": [
      "with r1 but not r3 show IP protocols I"
    ],
    "ru": [
      "с r1, но не r3 показывают IP-протоколы I"
    ]
  },
  {
    "time": [
      215.0,
      218.0
    ],
    "en": [
      "don't see any problems here 10.12 da da"
    ],
    "ru": [
      "не вижу здесь проблем 10.12 da da"
    ]
  },
  {
    "time": [
      218.0,
      222.0
    ],
    "en": [
      "o is in area 1 and 10.20 300 and the"
    ],
    "ru": [
      "o находится в области 1 и 10.20 300, а"
    ]
  },
  {
    "time": [
      222.0,
      226.0
    ],
    "en": [
      "loopback interface are in area 0 show IP"
    ],
    "ru": [
      "шлейфовый интерфейс находится в области 0 показать IP"
    ]
  },
  {
    "time": [
      226.0,
      231.0
    ],
    "en": [
      "interface brief here's our issue it's"
    ],
    "ru": [
      "краткое описание интерфейса вот наша проблема, это"
    ]
  },
  {
    "time": [
      231.0,
      235.0
    ],
    "en": [
      "not an OSPF configuration issue the f20"
    ],
    "ru": [
      "не проблема конфигурации OSPF, f20"
    ]
  },
  {
    "time": [
      235.0,
      236.0
    ],
    "en": [
      "interface itself is administratively"
    ],
    "ru": [
      "сам интерфейс административно"
    ]
  },
  {
    "time": [
      236.0,
      243.0
    ],
    "en": [
      "down show run there you can see it has"
    ],
    "ru": [
      "вниз шоу, там вы можете увидеть, что у него есть"
    ]
  },
  {
    "time": [
      243.0,
      247.0
    ],
    "en": [
      "the shutdown command configured compte"
    ],
    "ru": [
      "команда выключения сконфигурирована compte"
    ]
  },
  {
    "time": [
      247.0,
      254.0
    ],
    "en": [
      "interface f2 0 no shutdown ok now let's"
    ],
    "ru": [
      "интерфейс f2 0 без выключения хорошо теперь давайте"
    ]
  },
  {
    "time": [
      254.0,
      256.0
    ],
    "en": [
      "see if it's forming a OSPF neighbor ship"
    ],
    "ru": [
      "посмотрим, образует ли он соседнее судно OSPF"
    ]
  },
  {
    "time": [
      256.0,
      262.0
    ],
    "en": [
      "with r3 do show IP ospf neighbor that's"
    ],
    "ru": [
      "с r3 показывать IP-адрес соседа ospf, который"
    ]
  },
  {
    "time": [
      262.0,
      263.0
    ],
    "en": [
      "odd"
    ],
    "ru": [
      "странный"
    ]
  },
  {
    "time": [
      263.0,
      265.0
    ],
    "en": [
      "r2 still isn't forming an OSPF"
    ],
    "ru": [
      "r2 все еще не формирует OSPF"
    ]
  },
  {
    "time": [
      265.0,
      267.0
    ],
    "en": [
      "relationship with r3"
    ],
    "ru": [
      "отношения с r3"
    ]
  },
  {
    "time": [
      267.0,
      271.0
    ],
    "en": [
      "well we fix the issue here on r2 so"
    ],
    "ru": [
      "хорошо, мы исправляем проблему здесь, на r2, поэтому"
    ]
  },
  {
    "time": [
      271.0,
      278.0
    ],
    "en": [
      "let's go on r3 enable show IP ospf"
    ],
    "ru": [
      "пойдем на r3, включим, покажем IP ospf"
    ]
  },
  {
    "time": [
      278.0,
      285.0
    ],
    "en": [
      "neighbor so r3 has 1 OSPF neighbor r5"
    ],
    "ru": [
      "сосед, поэтому у r3 есть 1 сосед по OSPF, r5"
    ]
  },
  {
    "time": [
      285.0,
      290.0
    ],
    "en": [
      "show IP protocols can you spot the issue"
    ],
    "ru": [
      "показать IP-протоколы, можете ли вы определить проблему"
    ]
  },
  {
    "time": [
      290.0,
      291.0
    ],
    "en": [
      "on r3"
    ],
    "ru": [
      "на r3"
    ]
  },
  {
    "time": [
      291.0,
      295.0
    ],
    "en": [
      "it's 10.20 300 network should be in area"
    ],
    "ru": [
      "это 10.20 300 сеть должна быть в районе"
    ]
  },
  {
    "time": [
      295.0,
      301.0
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
      295.0,
      301.0
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
      301.0,
      309.0
    ],
    "en": [
      "network 10.23 oh-oh-oh-oh-oh 255 area 0"
    ],
    "ru": [
      "сеть 10,23 ой-ой-ой-ой-ой 255 область 0"
    ]
  },
  {
    "time": [
      309.0,
      320.0
    ],
    "en": [
      "ok now let's wait a few seconds"
    ],
    "ru": [
      "хорошо, теперь подождем несколько секунд"
    ]
  },
  {
    "time": [
      320.0,
      322.0
    ],
    "en": [
      "okay and now let's check and see if it's"
    ],
    "ru": [
      "хорошо, а теперь давайте проверим и посмотрим,"
    ]
  },
  {
    "time": [
      322.0,
      325.0
    ],
    "en": [
      "forming a SPF neighbor ship with our to"
    ],
    "ru": [
      "формирование соседнего корабля SPF с нашим"
    ]
  },
  {
    "time": [
      325.0,
      331.0
    ],
    "en": [
      "do show IP ospf neighbor okay there it"
    ],
    "ru": [
      "показать IP ospf соседа ладно там"
    ]
  },
  {
    "time": [
      331.0,
      335.0
    ],
    "en": [
      "is r2 and r3 are now OSPF neighbors"
    ],
    "ru": [
      "r2 и r3 теперь соседи OSPF"
    ]
  },
  {
    "time": [
      335.0,
      341.0
    ],
    "en": [
      "finally let's see what's wrong on r5 an"
    ],
    "ru": [
      "наконец-то посмотрим, что не так на r5 и"
    ]
  },
  {
    "time": [
      341.0,
      349.0
    ],
    "en": [
      "able show IP ospf neighbor so r5 has"
    ],
    "ru": [
      "может показать IP-адрес соседа ospf, поэтому r5 имеет"
    ]
  },
  {
    "time": [
      349.0,
      350.0
    ],
    "en": [
      "successfully become OSPF neighbors with"
    ],
    "ru": [
      "успешно стать соседями OSPF с"
    ]
  },
  {
    "time": [
      350.0,
      354.0
    ],
    "en": [
      "r3 however in the lab instructions it"
    ],
    "ru": [
      "r3, однако в лабораторных инструкциях он"
    ]
  },
  {
    "time": [
      354.0,
      356.0
    ],
    "en": [
      "says that the ropes r5 is receiving"
    ],
    "ru": [
      "говорит, что веревки r5 получает"
    ]
  },
  {
    "time": [
      356.0,
      360.0
    ],
    "en": [
      "aren't being properly summarized show IP"
    ],
    "ru": [
      "не суммируются должным образом показать IP"
    ]
  },
  {
    "time": [
      360.0,
      364.0
    ],
    "en": [
      "route indeed r5 should be receiving a"
    ],
    "ru": [
      "маршрут действительно r5 должен получать"
    ]
  },
  {
    "time": [
      364.0,
      368.0
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
      364.0,
      368.0
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
      368.0,
      371.0
    ],
    "en": [
      "individual network routes instead so"
    ],
    "ru": [
      "отдельные сетевые маршруты вместо этого"
    ]
  },
  {
    "time": [
      371.0,
      373.0
    ],
    "en": [
      "there's probably another issue on r3"
    ],
    "ru": [
      "на r3, вероятно, есть еще одна проблема"
    ]
  },
  {
    "time": [
      373.0,
      379.0
    ],
    "en": [
      "let's go back let's see how or if r3 is"
    ],
    "ru": [
      "давайте вернемся, давайте посмотрим, как или если r3"
    ]
  },
  {
    "time": [
      379.0,
      388.0
    ],
    "en": [
      "summarizing do show run area to range"
    ],
    "ru": [
      "резюмируя показать область пробега до диапазона"
    ]
  },
  {
    "time": [
      388.0,
      393.0
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
      388.0,
      393.0
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
      393.0,
      395.0
    ],
    "en": [
      "an easy mistake to make because you want"
    ],
    "ru": [
      "легко сделать ошибку, потому что ты хочешь"
    ]
  },
  {
    "time": [
      395.0,
      398.0
    ],
    "en": [
      "to advertise the summary to area 2 you"
    ],
    "ru": [
      "рекламировать резюме в области 2 вы"
    ]
  },
  {
    "time": [
      398.0,
      400.0
    ],
    "en": [
      "might want to use the area to range"
    ],
    "ru": [
      "может захотеть использовать область для диапазона"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "command however the correct answer is"
    ],
    "ru": [
      "команда, однако правильный ответ"
    ]
  },
  {
    "time": [
      402.0,
      409.0
    ],
    "en": [
      "area 0 range I'll copy this command and"
    ],
    "ru": [
      "область 0 диапазон Я скопирую эту команду и"
    ]
  },
  {
    "time": [
      409.0,
      413.0
    ],
    "en": [
      "then paste it here and cancel it with no"
    ],
    "ru": [
      "затем вставьте его сюда и отмените без"
    ]
  },
  {
    "time": [
      413.0,
      416.0
    ],
    "en": [
      "now let's put in the correct command"
    ],
    "ru": [
      "теперь давайте введем правильную команду"
    ]
  },
  {
    "time": [
      416.0,
      419.0
    ],
    "en": [
      "area 0 range"
    ],
    "ru": [
      "область 0 диапазон"
    ]
  },
  {
    "time": [
      419.0,
      427.0
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
      419.0,
      427.0
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
      427.0,
      429.0
    ],
    "en": [
      "command uses a regular mask not a"
    ],
    "ru": [
      "команда использует обычную маску, а не"
    ]
  },
  {
    "time": [
      429.0,
      433.0
    ],
    "en": [
      "wildcard mask ok let's go back to our 5"
    ],
    "ru": [
      "маска с подстановочными знаками, хорошо, давайте вернемся к нашим 5"
    ]
  },
  {
    "time": [
      433.0,
      434.0
    ],
    "en": [
      "and see if it's receiving the summary"
    ],
    "ru": [
      "и посмотрите, получает ли он сводку"
    ]
  },
  {
    "time": [
      434.0,
      444.0
    ],
    "en": [
      "read show IP route okay there it is we"
    ],
    "ru": [
      "прочитайте покажите IP-маршрут хорошо, вот и мы"
    ]
  },
  {
    "time": [
      444.0,
      445.0
    ],
    "en": [
      "have successfully fixed the problems"
    ],
    "ru": [
      "успешно исправили проблемы"
    ]
  },
  {
    "time": [
      445.0,
      450.0
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
      450.0,
      452.0
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
      452.0,
      454.0
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
      454.0,
      456.0
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
      456.0,
      458.0
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
      458.0,
      461.0
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
      461.0,
      463.0
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
      463.0,
      466.0
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
      466.0,
      468.0
    ],
    "en": [
      "Bitcoin and etherium donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфириума через"
    ]
  },
  {
    "time": [
      468.0,
      472.0
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
      472.0,
      474.0
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
      474.0,
      477.0
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
      477.0,
      477.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]