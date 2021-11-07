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
      24.0
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
      24.0,
      27.0
    ],
    "en": [
      "will configure ACLs named ACLs and"
    ],
    "ru": [
      "настроит ACL с именем ACL и"
    ]
  },
  {
    "time": [
      27.0,
      31.0
    ],
    "en": [
      "numbered ACLs standard ACLs and extended"
    ],
    "ru": [
      "нумерованные ACL стандартные и расширенные ACL"
    ]
  },
  {
    "time": [
      31.0,
      35.0
    ],
    "en": [
      "ACLs as well as ipv4 ACLs and ipv6 ACLs"
    ],
    "ru": [
      "ACL, а также списки ACL для ipv4 и ipv6."
    ]
  },
  {
    "time": [
      35.0,
      37.0
    ],
    "en": [
      "mixing them all together let's get"
    ],
    "ru": [
      "смешивая их все вместе, давайте"
    ]
  },
  {
    "time": [
      37.0,
      39.0
    ],
    "en": [
      "started"
    ],
    "ru": [
      "начал"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "so we have to configure and apply a"
    ],
    "ru": [
      "поэтому нам нужно настроить и применить"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "total of four ACLs to filter traffic"
    ],
    "ru": [
      "всего четыре ACL для фильтрации трафика"
    ]
  },
  {
    "time": [
      45.0,
      47.0
    ],
    "en": [
      "according to these instructions the"
    ],
    "ru": [
      "согласно этим инструкциям"
    ]
  },
  {
    "time": [
      47.0,
      49.0
    ],
    "en": [
      "details of how you configure and where"
    ],
    "ru": [
      "подробности о том, как вы настраиваете и где"
    ]
  },
  {
    "time": [
      49.0,
      51.0
    ],
    "en": [
      "you apply the ACLs doesn't have to"
    ],
    "ru": [
      "вы применяете ACL, не обязательно"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "exactly match what I do in this video as"
    ],
    "ru": [
      "точно соответствует тому, что я делаю в этом видео как"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "long as the results are the same it's"
    ],
    "ru": [
      "пока результаты такие же, это"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "okay the first ACL we must configure"
    ],
    "ru": [
      "хорошо, первый ACL мы должны настроить"
    ]
  },
  {
    "time": [
      59.0,
      62.0
    ],
    "en": [
      "should prevent pc4 from accessing the"
    ],
    "ru": [
      "должен предотвратить доступ pc4 к"
    ]
  },
  {
    "time": [
      62.0,
      67.0
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
      62.0,
      67.0
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
      67.0,
      69.0
    ],
    "en": [
      "to apply standard ACLs close to the"
    ],
    "ru": [
      "применять стандартные списки ACL, близкие к"
    ]
  },
  {
    "time": [
      69.0,
      73.0
    ],
    "en": [
      "destination so I'll apply it to r2 SG 0"
    ],
    "ru": [
      "пункт назначения, поэтому я применю его к r2 SG 0"
    ]
  },
  {
    "time": [
      73.0,
      79.0
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
      73.0,
      79.0
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
      79.0,
      84.0
    ],
    "en": [
      "golf tee let's create a deny statement"
    ],
    "ru": [
      "футболка для гольфа давайте создадим отрицательное заявление"
    ]
  },
  {
    "time": [
      84.0,
      89.0
    ],
    "en": [
      "blocking PC for access list I'll make it"
    ],
    "ru": [
      "блокировка ПК для списка доступа я сделаю это"
    ]
  },
  {
    "time": [
      89.0,
      95.0
    ],
    "en": [
      "number 1 deny host and PC for is 10 2 to"
    ],
    "ru": [
      "номер 1 запретить хост и ПК для 10 2 для"
    ]
  },
  {
    "time": [
      95.0,
      98.0
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
      95.0,
      98.0
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
      101.0
    ],
    "en": [
      "now we are told to block other traffic"
    ],
    "ru": [
      "теперь нам говорят заблокировать другой трафик"
    ]
  },
  {
    "time": [
      101.0,
      104.0
    ],
    "en": [
      "to 10 dot 4 dot 4 dot 0 / 24 so we"
    ],
    "ru": [
      "до 10 точек 4 точки 4 точки 0/24, поэтому мы"
    ]
  },
  {
    "time": [
      104.0,
      108.0
    ],
    "en": [
      "should let it through accessed list 1"
    ],
    "ru": [
      "должен пропустить его через список доступа 1"
    ]
  },
  {
    "time": [
      108.0,
      112.0
    ],
    "en": [
      "permit any that's it now let's apply it"
    ],
    "ru": [
      "разрешите все, что это сейчас, давайте применим это"
    ]
  },
  {
    "time": [
      112.0,
      117.0
    ],
    "en": [
      "to the interface interface g0 0 IP"
    ],
    "ru": [
      "к интерфейсному интерфейсу g0 0 IP"
    ]
  },
  {
    "time": [
      117.0,
      122.0
    ],
    "en": [
      "Access Group 1 out I used out because I"
    ],
    "ru": [
      "Группа доступа 1 израсходована, потому что"
    ]
  },
  {
    "time": [
      122.0,
      124.0
    ],
    "en": [
      "want to prevent PC force traffic from"
    ],
    "ru": [
      "хотите предотвратить принудительный трафик ПК от"
    ]
  },
  {
    "time": [
      124.0,
      127.0
    ],
    "en": [
      "exiting out this interface to the 10 dot"
    ],
    "ru": [
      "выход из этого интерфейса до точки 10"
    ]
  },
  {
    "time": [
      127.0,
      132.0
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
      127.0,
      132.0
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
      132.0,
      135.0
    ],
    "en": [
      "I'll try a ping from PC for two server"
    ],
    "ru": [
      "Попробую пинг с ПК на два сервера"
    ]
  },
  {
    "time": [
      135.0,
      143.0
    ],
    "en": [
      "one ping 10.4 for 100 and we get the"
    ],
    "ru": [
      "один пинг 10,4 на 100 и получаем"
    ]
  },
  {
    "time": [
      143.0,
      145.0
    ],
    "en": [
      "destination host unreachable message"
    ],
    "ru": [
      "сообщение о недоступности хоста назначения"
    ]
  },
  {
    "time": [
      145.0,
      150.0
    ],
    "en": [
      "from 10 12 12 2 which is our to perfect"
    ],
    "ru": [
      "от 10 12 12 2 который наш к совершенству"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "just to make sure let's try a ping from"
    ],
    "ru": [
      "просто чтобы убедиться, давайте попробуем пинг от"
    ]
  },
  {
    "time": [
      153.0,
      160.0
    ],
    "en": [
      "PC 3 which should go through ping 4.4.1"
    ],
    "ru": [
      "ПК 3 который должен пройти пинг 4.4.1"
    ]
  },
  {
    "time": [
      160.0,
      167.0
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
      167.0,
      172.0
    ],
    "en": [
      "great it works our first ACL is complete"
    ],
    "ru": [
      "отлично работает, наш первый ACL готов"
    ]
  },
  {
    "time": [
      172.0,
      176.0
    ],
    "en": [
      "okay let's do the second one configure"
    ],
    "ru": [
      "хорошо, давайте сделаем вторую настройку"
    ]
  },
  {
    "time": [
      176.0,
      180.0
    ],
    "en": [
      "an ipv6 ACL to prevent pc5 from"
    ],
    "ru": [
      "список контроля доступа ipv6 для предотвращения доступа pc5"
    ]
  },
  {
    "time": [
      180.0,
      185.0
    ],
    "en": [
      "accessing the 2001 DB 822 22 / 64"
    ],
    "ru": [
      "доступ к 2001 DB 822 22/64"
    ]
  },
  {
    "time": [
      185.0,
      189.0
    ],
    "en": [
      "network so this will be an ipv6 ACL and"
    ],
    "ru": [
      "сеть, так что это будет список контроля доступа ipv6 и"
    ]
  },
  {
    "time": [
      189.0,
      193.0
    ],
    "en": [
      "ipv6 only supports named ACLs although"
    ],
    "ru": [
      "ipv6 поддерживает только именованные ACL, хотя"
    ]
  },
  {
    "time": [
      193.0,
      196.0
    ],
    "en": [
      "ipv4 supports both numbered and named"
    ],
    "ru": [
      "ipv4 поддерживает как пронумерованные, так и именованные"
    ]
  },
  {
    "time": [
      196.0,
      200.0
    ],
    "en": [
      "ACLs I'll apply it to our ones g02"
    ],
    "ru": [
      "ACL применю к нашим g02"
    ]
  },
  {
    "time": [
      200.0,
      206.0
    ],
    "en": [
      "interface let's go on our one enable"
    ],
    "ru": [
      "интерфейс давайте перейдем к нашему включению"
    ]
  },
  {
    "time": [
      206.0,
      212.0
    ],
    "en": [
      "compte since it's an ipv6 ACL start the"
    ],
    "ru": [
      "compte, поскольку это список контроля доступа ipv6, запустите"
    ]
  },
  {
    "time": [
      212.0,
      215.0
    ],
    "en": [
      "command with ipv6 access list then the"
    ],
    "ru": [
      "со списком доступа ipv6, затем"
    ]
  },
  {
    "time": [
      215.0,
      221.0
    ],
    "en": [
      "name I'll say g0 to underscore in to"
    ],
    "ru": [
      "имя я скажу g0 чтобы подчеркнуть"
    ]
  },
  {
    "time": [
      221.0,
      224.0
    ],
    "en": [
      "give it a meaningful name now we're in"
    ],
    "ru": [
      "дайте ему многозначительное имя, теперь мы в"
    ]
  },
  {
    "time": [
      224.0,
      227.0
    ],
    "en": [
      "ipv6 ACL configuration mode and can"
    ],
    "ru": [
      "ipv6 режим настройки ACL и может"
    ]
  },
  {
    "time": [
      227.0,
      230.0
    ],
    "en": [
      "configure each statement so we want to"
    ],
    "ru": [
      "настроить каждый оператор так, чтобы мы"
    ]
  },
  {
    "time": [
      230.0,
      235.0
    ],
    "en": [
      "deny PC 5 and then permit other traffic"
    ],
    "ru": [
      "запретить ПК 5, а затем разрешить другой трафик"
    ]
  },
  {
    "time": [
      235.0,
      240.0
    ],
    "en": [
      "deny ipv6 host followed by PC 5s address"
    ],
    "ru": [
      "запретить хост ipv6, за которым следует адрес ПК 5s"
    ]
  },
  {
    "time": [
      240.0,
      247.0
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
      240.0,
      247.0
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
      247.0,
      255.0
    ],
    "en": [
      "destination subnet 2001 DB 8 22 22 / 64"
    ],
    "ru": [
      "подсеть назначения 2001 DB 8 22 22/64"
    ]
  },
  {
    "time": [
      255.0,
      258.0
    ],
    "en": [
      "okay that's our deny statement now let's"
    ],
    "ru": [
      "хорошо, это наше отрицание, теперь давайте"
    ]
  },
  {
    "time": [
      258.0,
      261.0
    ],
    "en": [
      "allow all other ipv6 traffic through"
    ],
    "ru": [
      "разрешить весь другой трафик ipv6 через"
    ]
  },
  {
    "time": [
      261.0,
      267.0
    ],
    "en": [
      "permit ipv6 any-any ok finally let's"
    ],
    "ru": [
      "разрешить ipv6 любой-любой хорошо наконец давай"
    ]
  },
  {
    "time": [
      267.0,
      274.0
    ],
    "en": [
      "apply it interface G 0 to ipv6 traffic"
    ],
    "ru": [
      "примените его интерфейс G 0 к трафику ipv6"
    ]
  },
  {
    "time": [
      274.0,
      279.0
    ],
    "en": [
      "filter G 0 2 in now you might want to"
    ],
    "ru": [
      "фильтр G 0 2 теперь вы можете захотеть"
    ]
  },
  {
    "time": [
      279.0,
      283.0
    ],
    "en": [
      "apply this with ipv6 access group since"
    ],
    "ru": [
      "примените это с группой доступа ipv6, так как"
    ]
  },
  {
    "time": [
      283.0,
      286.0
    ],
    "en": [
      "ipv4 uses IP access group but for ipv6"
    ],
    "ru": [
      "ipv4 использует группу доступа IP, но для ipv6"
    ]
  },
  {
    "time": [
      286.0,
      291.0
    ],
    "en": [
      "use ipv6 traffic filter okay let's test"
    ],
    "ru": [
      "используйте фильтр трафика ipv6 хорошо, давайте протестируем"
    ]
  },
  {
    "time": [
      291.0,
      298.0
    ],
    "en": [
      "I'll ping from PC 5 to server 2"
    ],
    "ru": [
      "Я пингую с ПК 5 на сервер 2"
    ]
  },
  {
    "time": [
      298.0,
      309.0
    ],
    "en": [
      "ping 2001 db8 22 22 double : 101"
    ],
    "ru": [
      "пинг 2001 db8 22 22 двойной: 101"
    ]
  },
  {
    "time": [
      309.0,
      311.0
    ],
    "en": [
      "reachable message from our one looks"
    ],
    "ru": [
      "доступное сообщение от одного взгляда"
    ]
  },
  {
    "time": [
      311.0,
      314.0
    ],
    "en": [
      "good now just to be sure let's try on PC"
    ],
    "ru": [
      "хорошо сейчас, просто чтобы убедиться, давайте попробуем на ПК"
    ]
  },
  {
    "time": [
      314.0,
      323.0
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
      323.0
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
      323.0,
      334.0
    ],
    "en": [
      "double : 100 great it works as expected"
    ],
    "ru": [
      "double: 100 отлично работает, как ожидалось"
    ]
  },
  {
    "time": [
      334.0,
      338.0
    ],
    "en": [
      "next is to prevent pc3 from reaching PC"
    ],
    "ru": [
      "далее нужно предотвратить попадание pc3 на ПК"
    ]
  },
  {
    "time": [
      338.0,
      343.0
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
      338.0,
      343.0
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
      343.0,
      348.0
    ],
    "en": [
      "let's put it on our ones G 0 1 interface"
    ],
    "ru": [
      "ставим на наши те G 0 1 интерфейс"
    ]
  },
  {
    "time": [
      348.0,
      354.0
    ],
    "en": [
      "exit IP access list extended this time"
    ],
    "ru": [
      "список доступа к выходу расширен на этот раз"
    ]
  },
  {
    "time": [
      354.0,
      359.0
    ],
    "en": [
      "I'll name it G 0 1 underscore in let's"
    ],
    "ru": [
      "Я назову это G 0 1 подчеркивание, давайте"
    ]
  },
  {
    "time": [
      359.0,
      364.0
    ],
    "en": [
      "make the deny statement deny IP host"
    ],
    "ru": [
      "сделать заявление deny deny IP host"
    ]
  },
  {
    "time": [
      364.0,
      372.0
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
      372.0
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
      374.0
    ],
    "en": [
      "other traffic since we weren't told to"
    ],
    "ru": [
      "другой трафик, так как нам не сказали"
    ]
  },
  {
    "time": [
      374.0,
      379.0
    ],
    "en": [
      "block anything else permit IP any-any"
    ],
    "ru": [
      "блокировать все остальное разрешить IP любой-любой"
    ]
  },
  {
    "time": [
      379.0,
      386.0
    ],
    "en": [
      "now let's apply it interface G 0 1 this"
    ],
    "ru": [
      "теперь давайте применим его интерфейс G 0 1 это"
    ]
  },
  {
    "time": [
      386.0,
      391.0
    ],
    "en": [
      "is an ipv4 ACL so IP access group 1"
    ],
    "ru": [
      "это список контроля доступа ipv4, поэтому группа доступа IP 1"
    ]
  },
  {
    "time": [
      391.0,
      396.0
    ],
    "en": [
      "underscore in in okay let's try it out"
    ],
    "ru": [
      "подчеркни в порядке, давай попробуем"
    ]
  },
  {
    "time": [
      396.0,
      405.0
    ],
    "en": [
      "I'll ping from pc 3 to pc 1 ping 10.11"
    ],
    "ru": [
      "Я пингую с пк 3 на пк 1 пинг 10.11"
    ]
  },
  {
    "time": [
      405.0,
      409.0
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
      405.0,
      409.0
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
      409.0,
      413.0
    ],
    "en": [
      "unreachable message how about from PC"
    ],
    "ru": [
      "недоступное сообщение, как насчет с ПК"
    ]
  },
  {
    "time": [
      413.0,
      425.0
    ],
    "en": [
      "for King 10.1 111"
    ],
    "ru": [
      "для King 10,1 111"
    ]
  },
  {
    "time": [
      425.0,
      428.0
    ],
    "en": [
      "okay it works as expected"
    ],
    "ru": [
      "хорошо, это работает как ожидалось"
    ]
  },
  {
    "time": [
      428.0,
      432.0
    ],
    "en": [
      "finally we want to allow PC six to"
    ],
    "ru": [
      "наконец, мы хотим, чтобы ПК 6"
    ]
  },
  {
    "time": [
      432.0,
      435.0
    ],
    "en": [
      "telnet to r2 but to not allow others to"
    ],
    "ru": [
      "telnet на r2, но не позволять другим"
    ]
  },
  {
    "time": [
      435.0,
      436.0
    ],
    "en": [
      "do so"
    ],
    "ru": [
      "Сделай так"
    ]
  },
  {
    "time": [
      436.0,
      439.0
    ],
    "en": [
      "so we could apply this in multiple areas"
    ],
    "ru": [
      "чтобы мы могли применить это во многих областях"
    ]
  },
  {
    "time": [
      439.0,
      441.0
    ],
    "en": [
      "but how about applying it directly to"
    ],
    "ru": [
      "но как насчет того, чтобы применить его непосредственно к"
    ]
  },
  {
    "time": [
      441.0,
      447.0
    ],
    "en": [
      "our two's vty lines let's go on our to"
    ],
    "ru": [
      "наши две строки vty, давайте перейдем к"
    ]
  },
  {
    "time": [
      447.0,
      454.0
    ],
    "en": [
      "exit first I'll make the ACL ipv6 access"
    ],
    "ru": [
      "сначала выйдите я сделаю доступ ACL ipv6"
    ]
  },
  {
    "time": [
      454.0,
      456.0
    ],
    "en": [
      "list telnet to give it an appropriate"
    ],
    "ru": [
      "перечислите telnet, чтобы дать ему соответствующий"
    ]
  },
  {
    "time": [
      456.0,
      458.0
    ],
    "en": [
      "name"
    ],
    "ru": [
      "имя"
    ]
  },
  {
    "time": [
      458.0,
      463.0
    ],
    "en": [
      "so let's permit PC 6 to telnet permit"
    ],
    "ru": [
      "так давайте разрешим ПК 6 разрешить telnet"
    ]
  },
  {
    "time": [
      463.0,
      470.0
    ],
    "en": [
      "TCP because telnet uses TCP host 2000 1"
    ],
    "ru": [
      "TCP, поскольку telnet использует TCP-хост 2000 1"
    ]
  },
  {
    "time": [
      470.0,
      476.0
    ],
    "en": [
      "DB 8 3 3 double colon 12 I'll set the"
    ],
    "ru": [
      "DB 8 3 3 двойное двоеточие 12 Я установлю"
    ]
  },
  {
    "time": [
      476.0,
      479.0
    ],
    "en": [
      "destination to any since I wanted to"
    ],
    "ru": [
      "пункт назначения в любое время, когда я хотел"
    ]
  },
  {
    "time": [
      479.0,
      481.0
    ],
    "en": [
      "apply to whichever of our tooth"
    ],
    "ru": [
      "применить к любому из наших зубов"
    ]
  },
  {
    "time": [
      481.0,
      484.0
    ],
    "en": [
      "interfaces they telnet to then finally"
    ],
    "ru": [
      "интерфейсы, к которым они подключены по telnet, а затем, наконец,"
    ]
  },
  {
    "time": [
      484.0,
      488.0
    ],
    "en": [
      "EQ telnet to specify the port number of"
    ],
    "ru": [
      "EQ telnet, чтобы указать номер порта"
    ]
  },
  {
    "time": [
      488.0,
      493.0
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
      488.0,
      493.0
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
      493.0,
      495.0
    ],
    "en": [
      "have to configure because there is an"
    ],
    "ru": [
      "необходимо настроить, потому что есть"
    ]
  },
  {
    "time": [
      495.0,
      497.0
    ],
    "en": [
      "implicit deny any at the end of the ACL"
    ],
    "ru": [
      "неявное отклонение любого в конце ACL"
    ]
  },
  {
    "time": [
      497.0,
      499.0
    ],
    "en": [
      "so we don't need to configure another"
    ],
    "ru": [
      "поэтому нам не нужно настраивать другой"
    ]
  },
  {
    "time": [
      499.0,
      502.0
    ],
    "en": [
      "statement let's apply it to the vty"
    ],
    "ru": [
      "заявление, давайте применим его к VTY"
    ]
  },
  {
    "time": [
      502.0,
      510.0
    ],
    "en": [
      "lines line vty 0 15 to apply an ipv4 ACL"
    ],
    "ru": [
      "lines line vty 0 15 для применения ipv4 ACL"
    ]
  },
  {
    "time": [
      510.0,
      514.0
    ],
    "en": [
      "to an interface use access group for"
    ],
    "ru": [
      "к интерфейсу использовать группу доступа для"
    ]
  },
  {
    "time": [
      514.0,
      518.0
    ],
    "en": [
      "ipv6 traffic filter now to apply either"
    ],
    "ru": [
      "Фильтр трафика ipv6 теперь, чтобы применить либо"
    ]
  },
  {
    "time": [
      518.0,
      523.0
    ],
    "en": [
      "to vty lines you use XS class so ipv6"
    ],
    "ru": [
      "для строк vty вы используете класс XS, поэтому ipv6"
    ]
  },
  {
    "time": [
      523.0,
      528.0
    ],
    "en": [
      "access class telnet in ok let's test it"
    ],
    "ru": [
      "доступ к классу Telnet в порядке, давайте проверим его"
    ]
  },
  {
    "time": [
      528.0,
      533.0
    ],
    "en": [
      "out I'll try to tell NIT - R - s G 0 0 0"
    ],
    "ru": [
      "out попробую сказать NIT - R - s G 0 0 0"
    ]
  },
  {
    "time": [
      533.0,
      538.0
    ],
    "en": [
      "interface from PC 6"
    ],
    "ru": [
      "интерфейс с ПК 6"
    ]
  },
  {
    "time": [
      538.0,
      732.0
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
      732.0,
      546.0
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
      546.0,
      549.0
    ],
    "en": [
      "good enter the password CCNA in lower"
    ],
    "ru": [
      "хорошо введите пароль CCNA в нижнем"
    ]
  },
  {
    "time": [
      549.0,
      552.0
    ],
    "en": [
      "case and there we go"
    ],
    "ru": [
      "случай и поехали"
    ]
  },
  {
    "time": [
      552.0,
      556.0
    ],
    "en": [
      "exit okay let's confirm that PC five"
    ],
    "ru": [
      "Выход хорошо, давайте подтвердим, что ПК пять"
    ]
  },
  {
    "time": [
      556.0,
      563.0
    ],
    "en": [
      "can't tell net to r2 telnet 2001 DB"
    ],
    "ru": [
      "не могу сказать net to r2 telnet 2001 DB"
    ]
  },
  {
    "time": [
      563.0,
      569.0
    ],
    "en": [
      "eight twelve twelve double colon - great"
    ],
    "ru": [
      "восемь двенадцать двенадцать двойное двоеточие - большой"
    ]
  },
  {
    "time": [
      569.0,
      570.0
    ],
    "en": [
      "looks like we successfully configured"
    ],
    "ru": [
      "похоже, мы успешно настроили"
    ]
  },
  {
    "time": [
      570.0,
      575.0
    ],
    "en": [
      "and applied the ACL in this lab we"
    ],
    "ru": [
      "и применили ACL в этой лабораторной работе, мы"
    ]
  },
  {
    "time": [
      575.0,
      578.0
    ],
    "en": [
      "configured multiple types of ACLs ipv6"
    ],
    "ru": [
      "настроил несколько типов ACL ipv6"
    ]
  },
  {
    "time": [
      578.0,
      581.0
    ],
    "en": [
      "ACLs as well as standard and extended"
    ],
    "ru": [
      "ACL как стандартные, так и расширенные"
    ]
  },
  {
    "time": [
      581.0,
      584.0
    ],
    "en": [
      "ipv4 ACLs using numbered and named"
    ],
    "ru": [
      "ipv4 ACL с использованием пронумерованных и именованных"
    ]
  },
  {
    "time": [
      584.0,
      587.0
    ],
    "en": [
      "methods this was mostly review from what"
    ],
    "ru": [
      "методы это был в основном обзор из того, что"
    ]
  },
  {
    "time": [
      587.0,
      589.0
    ],
    "en": [
      "we did in the icnd1 labs but hopefully"
    ],
    "ru": [
      "мы сделали в лабораториях icnd1, но, надеюсь,"
    ]
  },
  {
    "time": [
      589.0,
      591.0
    ],
    "en": [
      "it was good practice that's all for this"
    ],
    "ru": [
      "это была хорошая практика, вот и все для этого"
    ]
  },
  {
    "time": [
      591.0,
      597.0
    ],
    "en": [
      "lab thank you for watching I hope this"
    ],
    "ru": [
      "лаборатория спасибо за просмотр надеюсь это"
    ]
  },
  {
    "time": [
      597.0,
      599.0
    ],
    "en": [
      "lab and video have been helpful for you"
    ],
    "ru": [
      "лаборатория и видео были вам полезны"
    ]
  },
  {
    "time": [
      599.0,
      601.0
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
      601.0,
      604.0
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
      604.0,
      607.0
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
      607.0,
      610.0
    ],
    "en": [
      "let me know in the comments section if"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев, если"
    ]
  },
  {
    "time": [
      610.0,
      611.0
    ],
    "en": [
      "you want to support my channel"
    ],
    "ru": [
      "ты хочешь поддержать мой канал"
    ]
  },
  {
    "time": [
      611.0,
      613.0
    ],
    "en": [
      "I accept Bitcoin and etherium donations"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      613.0,
      616.0
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
      616.0,
      619.0
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
      619.0,
      622.0
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
      622.0,
      622.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]