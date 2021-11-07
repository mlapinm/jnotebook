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
      18.0
    ],
    "en": [
      "description this slab will be the first"
    ],
    "ru": [
      "описание эта плита будет первой"
    ]
  },
  {
    "time": [
      18.0,
      20.0
    ],
    "en": [
      "in a series of labs about access control"
    ],
    "ru": [
      "в серии лабораторных работ по контролю доступа"
    ]
  },
  {
    "time": [
      20.0,
      24.0
    ],
    "en": [
      "lists or ACLs it's very important to be"
    ],
    "ru": [
      "списки или ACL очень важно быть"
    ]
  },
  {
    "time": [
      24.0,
      27.0
    ],
    "en": [
      "familiar with ACLs for the exam so make"
    ],
    "ru": [
      "знакомы с ACL для экзамена, так что сделайте"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "sure you're comfortable with them this"
    ],
    "ru": [
      "уверен, что тебе комфортно с ними это"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "first lab will be fairly simple we will"
    ],
    "ru": [
      "первая лабораторная работа будет довольно простой, мы будем"
    ]
  },
  {
    "time": [
      33.0,
      36.0
    ],
    "en": [
      "configure numbered standard access lists"
    ],
    "ru": [
      "настроить нумерованные стандартные списки доступа"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "ACLs can be numbered or named and"
    ],
    "ru": [
      "ACL могут быть пронумерованы или названы и"
    ]
  },
  {
    "time": [
      39.0,
      42.0
    ],
    "en": [
      "standard or extended we will configure"
    ],
    "ru": [
      "стандартный или расширенный настроим"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "other types in future labs but for now"
    ],
    "ru": [
      "другие типы в будущих лабораториях, но пока"
    ]
  },
  {
    "time": [
      45.0,
      47.0
    ],
    "en": [
      "let's focus on the simplest type the"
    ],
    "ru": [
      "давайте сосредоточимся на простейшем типе"
    ]
  },
  {
    "time": [
      47.0,
      51.0
    ],
    "en": [
      "numbered standard ACL a standard ACL can"
    ],
    "ru": [
      "нумерованный стандартный ACL стандартный ACL может"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "be numbered from 1 to 99 make sure you"
    ],
    "ru": [
      "быть пронумерованным от 1 до 99 убедитесь, что вы"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "remember that little fact for the exam 1"
    ],
    "ru": [
      "запомните этот маленький факт для экзамена 1"
    ]
  },
  {
    "time": [
      56.0,
      61.0
    ],
    "en": [
      "to 99 is for standard ACLs a standard"
    ],
    "ru": [
      "до 99 для стандартных ACL является стандартным"
    ]
  },
  {
    "time": [
      61.0,
      63.0
    ],
    "en": [
      "ACL controls traffic based only on the"
    ],
    "ru": [
      "ACL контролирует трафик только на основе"
    ]
  },
  {
    "time": [
      63.0,
      66.0
    ],
    "en": [
      "source address on the other hand an"
    ],
    "ru": [
      "адрес источника с другой стороны"
    ]
  },
  {
    "time": [
      66.0,
      68.0
    ],
    "en": [
      "extended ACL can control traffic based"
    ],
    "ru": [
      "расширенный ACL может управлять трафиком на основе"
    ]
  },
  {
    "time": [
      68.0,
      71.0
    ],
    "en": [
      "on the source and destination address as"
    ],
    "ru": [
      "на адрес отправителя и получателя как"
    ]
  },
  {
    "time": [
      71.0,
      73.0
    ],
    "en": [
      "well as other things which we will look"
    ],
    "ru": [
      "ну и другие вещи, которые мы посмотрим"
    ]
  },
  {
    "time": [
      73.0,
      77.0
    ],
    "en": [
      "at in future labs in this lab we have to"
    ],
    "ru": [
      "в будущих лабораториях в этой лаборатории мы должны"
    ]
  },
  {
    "time": [
      77.0,
      79.0
    ],
    "en": [
      "configure these standard ACLs to achieve"
    ],
    "ru": [
      "настроить эти стандартные ACL для достижения"
    ]
  },
  {
    "time": [
      79.0,
      84.0
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
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      84.0,
      86.0
    ],
    "en": [
      "network should be able to access server"
    ],
    "ru": [
      "сеть должна иметь доступ к серверу"
    ]
  },
  {
    "time": [
      86.0,
      89.0
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
      89.0
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
      89.0,
      92.0
    ],
    "en": [
      "communicate with the 192.168.1.0 24"
    ],
    "ru": [
      "общаться с 192.168.1.0 24"
    ]
  },
  {
    "time": [
      92.0,
      96.0
    ],
    "en": [
      "network to achieve the first requirement"
    ],
    "ru": [
      "сеть для достижения первого требования"
    ]
  },
  {
    "time": [
      96.0,
      100.0
    ],
    "en": [
      "let's go on our - now you may wonder why"
    ],
    "ru": [
      "пойдем дальше - теперь вы можете задаться вопросом, почему"
    ]
  },
  {
    "time": [
      100.0,
      104.0
    ],
    "en": [
      "configure r2 as opposed to r1"
    ],
    "ru": [
      "настроить r2 вместо r1"
    ]
  },
  {
    "time": [
      104.0,
      106.0
    ],
    "en": [
      "well standard ACLs should be configured"
    ],
    "ru": [
      "хорошо стандартные ACL должны быть настроены"
    ]
  },
  {
    "time": [
      106.0,
      109.0
    ],
    "en": [
      "as close to the destination as possible"
    ],
    "ru": [
      "как можно ближе к месту назначения"
    ]
  },
  {
    "time": [
      109.0,
      112.0
    ],
    "en": [
      "if we configure it closer to the source"
    ],
    "ru": [
      "если мы настроим его ближе к источнику"
    ]
  },
  {
    "time": [
      112.0,
      115.0
    ],
    "en": [
      "for example on r1 we may inadvertently"
    ],
    "ru": [
      "например, на r1 мы можем случайно"
    ]
  },
  {
    "time": [
      115.0,
      117.0
    ],
    "en": [
      "block traffic that we don't want to"
    ],
    "ru": [
      "блокировать трафик, который мы не хотим"
    ]
  },
  {
    "time": [
      117.0,
      120.0
    ],
    "en": [
      "block since the standard ACL only looks"
    ],
    "ru": [
      "блокировать, так как стандартный ACL выглядит только"
    ]
  },
  {
    "time": [
      120.0,
      124.0
    ],
    "en": [
      "at the source address in this case the"
    ],
    "ru": [
      "в исходном адресе в этом случае"
    ]
  },
  {
    "time": [
      124.0,
      126.0
    ],
    "en": [
      "destination is server 1 so we will"
    ],
    "ru": [
      "пункт назначения - сервер 1, поэтому мы"
    ]
  },
  {
    "time": [
      126.0,
      131.0
    ],
    "en": [
      "configure the ACL on our to enable"
    ],
    "ru": [
      "настроить ACL на нашем, чтобы включить"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "compte"
    ],
    "ru": [
      "compte"
    ]
  },
  {
    "time": [
      133.0,
      136.0
    ],
    "en": [
      "to configure the numbered ACL use the"
    ],
    "ru": [
      "для настройки нумерованного ACL используйте"
    ]
  },
  {
    "time": [
      136.0,
      140.0
    ],
    "en": [
      "command access list now also the options"
    ],
    "ru": [
      "список доступа к командам теперь также параметры"
    ]
  },
  {
    "time": [
      140.0,
      143.0
    ],
    "en": [
      "with the context-sensitive help as you"
    ],
    "ru": [
      "с контекстно-зависимой помощью, когда вы"
    ]
  },
  {
    "time": [
      143.0,
      145.0
    ],
    "en": [
      "can see 1 to 99 is the range for a"
    ],
    "ru": [
      "можно увидеть от 1 до 99 - это диапазон для"
    ]
  },
  {
    "time": [
      145.0,
      148.0
    ],
    "en": [
      "standard ACL you can also see the range"
    ],
    "ru": [
      "стандартный ACL вы также можете увидеть диапазон"
    ]
  },
  {
    "time": [
      148.0,
      152.0
    ],
    "en": [
      "for extended ACLs 100 to 199 I'll use"
    ],
    "ru": [
      "для расширенных ACL от 100 до 199 я буду использовать"
    ]
  },
  {
    "time": [
      152.0,
      155.0
    ],
    "en": [
      "the number 1 now let's check the next"
    ],
    "ru": [
      "номер 1 теперь давайте проверим следующий"
    ]
  },
  {
    "time": [
      155.0,
      159.0
    ],
    "en": [
      "option we can deny permit or add a"
    ],
    "ru": [
      "вариант, мы можем отказать в разрешении или добавить"
    ]
  },
  {
    "time": [
      159.0,
      163.0
    ],
    "en": [
      "remark remarks are useful when on a"
    ],
    "ru": [
      "Замечания Замечания полезны, когда на"
    ]
  },
  {
    "time": [
      163.0,
      165.0
    ],
    "en": [
      "large network you have large amounts of"
    ],
    "ru": [
      "большая сеть у вас большое количество"
    ]
  },
  {
    "time": [
      165.0,
      168.0
    ],
    "en": [
      "ACLs so you can identify what each ACL"
    ],
    "ru": [
      "ACL, чтобы вы могли определить, что каждый ACL"
    ]
  },
  {
    "time": [
      168.0,
      170.0
    ],
    "en": [
      "is for when looking at the configuration"
    ],
    "ru": [
      "предназначен для просмотра конфигурации"
    ]
  },
  {
    "time": [
      170.0,
      170.0
    ],
    "en": [
      "later"
    ],
    "ru": [
      "потом"
    ]
  },
  {
    "time": [
      170.0,
      175.0
    ],
    "en": [
      "I won't configure one now however we"
    ],
    "ru": [
      "Я не буду настраивать его сейчас, но мы"
    ]
  },
  {
    "time": [
      175.0,
      179.0
    ],
    "en": [
      "want to allow only the 192.168.1.0 / 24"
    ],
    "ru": [
      "хотите разрешить только 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      179.0,
      182.0
    ],
    "en": [
      "network to access the server I'll use a"
    ],
    "ru": [
      "сеть для доступа к серверу я буду использовать"
    ]
  },
  {
    "time": [
      182.0,
      184.0
    ],
    "en": [
      "permit statement first to allow the"
    ],
    "ru": [
      "заявление о разрешении сначала, чтобы разрешить"
    ]
  },
  {
    "time": [
      184.0,
      190.0
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
      184.0,
      190.0
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
      190.0,
      193.0
    ],
    "en": [
      "the options again I can input an IP"
    ],
    "ru": [
      "варианты снова я могу ввести IP"
    ]
  },
  {
    "time": [
      193.0,
      196.0
    ],
    "en": [
      "address I can tell it to permit any"
    ],
    "ru": [
      "адрес я могу сказать, чтобы разрешить любой"
    ]
  },
  {
    "time": [
      196.0,
      199.0
    ],
    "en": [
      "source or I can specify a single host"
    ],
    "ru": [
      "источник или я могу указать один хост"
    ]
  },
  {
    "time": [
      199.0,
      206.0
    ],
    "en": [
      "let's put in an IP address 192.168.1.1 X"
    ],
    "ru": [
      "давайте введем IP-адрес 192.168.1.1 X"
    ]
  },
  {
    "time": [
      206.0,
      210.0
    ],
    "en": [
      "top ssin wildcard bits ACLs use a"
    ],
    "ru": [
      "верхние подстановочные знаки ssin ACL используют"
    ]
  },
  {
    "time": [
      210.0,
      213.0
    ],
    "en": [
      "wildcard mask as opposed to a standard"
    ],
    "ru": [
      "маска с подстановочными знаками в отличие от стандартной"
    ]
  },
  {
    "time": [
      213.0,
      216.0
    ],
    "en": [
      "subnet mask I'm not going to explain"
    ],
    "ru": [
      "маска подсети я не буду объяснять"
    ]
  },
  {
    "time": [
      216.0,
      217.0
    ],
    "en": [
      "exactly how these work here but a"
    ],
    "ru": [
      "как именно они здесь работают, но"
    ]
  },
  {
    "time": [
      217.0,
      220.0
    ],
    "en": [
      "wildcard mask is an inverse subnet mask"
    ],
    "ru": [
      "подстановочная маска - это обратная маска подсети"
    ]
  },
  {
    "time": [
      220.0,
      224.0
    ],
    "en": [
      "so if a bit is 1 or 0 in a subnet mask"
    ],
    "ru": [
      "поэтому, если в маске подсети бит равен 1 или 0"
    ]
  },
  {
    "time": [
      224.0,
      226.0
    ],
    "en": [
      "its equivalent bit in a wildcard mask"
    ],
    "ru": [
      "его эквивалентный бит в подстановочной маске"
    ]
  },
  {
    "time": [
      226.0,
      230.0
    ],
    "en": [
      "would be 0 or 1 respectively if you have"
    ],
    "ru": [
      "будет 0 или 1 соответственно, если у вас есть"
    ]
  },
  {
    "time": [
      230.0,
      232.0
    ],
    "en": [
      "no idea what that means I recommend"
    ],
    "ru": [
      "не знаю, что это значит, рекомендую"
    ]
  },
  {
    "time": [
      232.0,
      233.0
    ],
    "en": [
      "reading up on wildcard masks to get"
    ],
    "ru": [
      "Чтение масок с подстановочными знаками, чтобы получить"
    ]
  },
  {
    "time": [
      233.0,
      238.0
    ],
    "en": [
      "familiar with them anyway the subnet"
    ],
    "ru": [
      "все равно знаком с ними подсеть"
    ]
  },
  {
    "time": [
      238.0,
      242.0
    ],
    "en": [
      "mask for a / 24 Network is 255.255.255.0"
    ],
    "ru": [
      "маска для сети / 24 255.255.255.0"
    ]
  },
  {
    "time": [
      242.0,
      249.0
    ],
    "en": [
      "so the wild-card mask is 0 0 255 ok"
    ],
    "ru": [
      "так что маска подстановочного знака равна 0 0 255 нормально"
    ]
  },
  {
    "time": [
      249.0,
      252.0
    ],
    "en": [
      "that's it we have created the ACL which"
    ],
    "ru": [
      "вот и мы создали ACL, который"
    ]
  },
  {
    "time": [
      252.0,
      257.0
    ],
    "en": [
      "permits the 192.168.1.0 / 24 network now"
    ],
    "ru": [
      "разрешает сеть 192.168.1.0 / 24 сейчас"
    ]
  },
  {
    "time": [
      257.0,
      260.0
    ],
    "en": [
      "do we have to create another statement"
    ],
    "ru": [
      "мы должны создать другое заявление"
    ]
  },
  {
    "time": [
      260.0,
      262.0
    ],
    "en": [
      "in this ACL to deny everything else"
    ],
    "ru": [
      "в этом ACL, чтобы отрицать все остальное"
    ]
  },
  {
    "time": [
      262.0,
      266.0
    ],
    "en": [
      "actually we don't at the end of every"
    ],
    "ru": [
      "на самом деле мы не в конце каждого"
    ]
  },
  {
    "time": [
      266.0,
      267.0
    ],
    "en": [
      "ACL there is an employee"
    ],
    "ru": [
      "ACL есть сотрудник"
    ]
  },
  {
    "time": [
      267.0,
      271.0
    ],
    "en": [
      "deny all statement meaning everything"
    ],
    "ru": [
      "отрицать все утверждения, означающие все"
    ]
  },
  {
    "time": [
      271.0,
      273.0
    ],
    "en": [
      "that doesn't apply to a previous entry"
    ],
    "ru": [
      "это не относится к предыдущей записи"
    ]
  },
  {
    "time": [
      273.0,
      277.0
    ],
    "en": [
      "in the ACL will be denied do show access"
    ],
    "ru": [
      "в ACL будет запрещено показывать доступ"
    ]
  },
  {
    "time": [
      277.0,
      281.0
    ],
    "en": [
      "lists as you can see that deny all"
    ],
    "ru": [
      "списки, как видите, отрицают все"
    ]
  },
  {
    "time": [
      281.0,
      284.0
    ],
    "en": [
      "doesn't actually appear in the ACL but"
    ],
    "ru": [
      "на самом деле не отображается в ACL, но"
    ]
  },
  {
    "time": [
      284.0,
      286.0
    ],
    "en": [
      "when we tried to ping later it will work"
    ],
    "ru": [
      "когда мы попытаемся пинговать позже, это сработает"
    ]
  },
  {
    "time": [
      286.0,
      291.0
    ],
    "en": [
      "as intended so we have created the ACL"
    ],
    "ru": [
      "как и предполагалось, поэтому мы создали ACL"
    ]
  },
  {
    "time": [
      291.0,
      295.0
    ],
    "en": [
      "is that all we have to do no we have to"
    ],
    "ru": [
      "это все, что нам нужно делать, мы не должны"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "apply it to an interface following the"
    ],
    "ru": [
      "примените его к интерфейсу после"
    ]
  },
  {
    "time": [
      298.0,
      300.0
    ],
    "en": [
      "rule of applying a standard ACL as close"
    ],
    "ru": [
      "правило применения стандартного ACL как можно ближе"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "to the destination as possible let's"
    ],
    "ru": [
      "до места назначения по возможности давайте"
    ]
  },
  {
    "time": [
      303.0,
      306.0
    ],
    "en": [
      "apply it to the f00 interface interface"
    ],
    "ru": [
      "примените его к интерфейсу интерфейса f00"
    ]
  },
  {
    "time": [
      306.0,
      311.0
    ],
    "en": [
      "f00 you can apply an ACL to an interface"
    ],
    "ru": [
      "f00 вы можете применить ACL к интерфейсу"
    ]
  },
  {
    "time": [
      311.0,
      315.0
    ],
    "en": [
      "with this command IP access group now"
    ],
    "ru": [
      "с помощью этой команды группа доступа IP сейчас"
    ]
  },
  {
    "time": [
      315.0,
      318.0
    ],
    "en": [
      "I'll type 1 the number of the ACL we"
    ],
    "ru": [
      "Я наберу 1 номер ACL, который мы"
    ]
  },
  {
    "time": [
      318.0,
      321.0
    ],
    "en": [
      "created now let's check the options in"
    ],
    "ru": [
      "создан сейчас давайте проверим параметры в"
    ]
  },
  {
    "time": [
      321.0,
      325.0
    ],
    "en": [
      "or out which do you think is appropriate"
    ],
    "ru": [
      "или из того, что, по вашему мнению, уместно"
    ]
  },
  {
    "time": [
      325.0,
      328.0
    ],
    "en": [
      "the answer is out because we aren't"
    ],
    "ru": [
      "ответ отсутствует, потому что мы не"
    ]
  },
  {
    "time": [
      328.0,
      330.0
    ],
    "en": [
      "filtering traffic coming in from this"
    ],
    "ru": [
      "фильтрация трафика, поступающего от этого"
    ]
  },
  {
    "time": [
      330.0,
      332.0
    ],
    "en": [
      "interface we are filtering traffic going"
    ],
    "ru": [
      "интерфейс мы фильтруем идущий трафик"
    ]
  },
  {
    "time": [
      332.0,
      336.0
    ],
    "en": [
      "out from this interface towards server 1"
    ],
    "ru": [
      "из этого интерфейса к серверу 1"
    ]
  },
  {
    "time": [
      336.0,
      339.0
    ],
    "en": [
      "ok we have made and applied our ACL"
    ],
    "ru": [
      "хорошо, мы создали и применили наш ACL"
    ]
  },
  {
    "time": [
      339.0,
      342.0
    ],
    "en": [
      "let's test this ACL first before moving"
    ],
    "ru": [
      "давайте сначала проверим этот ACL перед тем, как двигаться"
    ]
  },
  {
    "time": [
      342.0,
      347.0
    ],
    "en": [
      "on I'll go on PC one PC one should be"
    ],
    "ru": [
      "я пойду на ПК один ПК должен быть"
    ]
  },
  {
    "time": [
      347.0,
      350.0
    ],
    "en": [
      "able to reach the server ping 192.168"
    ],
    "ru": [
      "может выйти на сервер ping 192.168"
    ]
  },
  {
    "time": [
      350.0,
      357.0
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
      350.0,
      357.0
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
      357.0,
      362.0
    ],
    "en": [
      "as expected the ping works now let's try"
    ],
    "ru": [
      "как и ожидалось пинг работает теперь давайте попробуем"
    ]
  },
  {
    "time": [
      362.0,
      369.0
    ],
    "en": [
      "from the 192.168.0 pc 3 pc 3 should not"
    ],
    "ru": [
      "из 192.168.0 пк 3 пк 3 не должно"
    ]
  },
  {
    "time": [
      369.0,
      373.0
    ],
    "en": [
      "be able to reach the server again even"
    ],
    "ru": [
      "иметь возможность снова связаться с сервером даже"
    ]
  },
  {
    "time": [
      373.0,
      374.0
    ],
    "en": [
      "though we didn't configure the ACL"
    ],
    "ru": [
      "хотя мы не настраивали ACL"
    ]
  },
  {
    "time": [
      374.0,
      377.0
    ],
    "en": [
      "explicitly to deny any traffic it will"
    ],
    "ru": [
      "явно запретить любой трафик, который он будет"
    ]
  },
  {
    "time": [
      377.0,
      379.0
    ],
    "en": [
      "by default deny any traffic that doesn't"
    ],
    "ru": [
      "по умолчанию запрещать любой трафик, который не"
    ]
  },
  {
    "time": [
      379.0,
      381.0
    ],
    "en": [
      "match the entry permitting the"
    ],
    "ru": [
      "соответствовать записи, разрешающей"
    ]
  },
  {
    "time": [
      381.0,
      387.0
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
      381.0,
      387.0
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
      387.0,
      390.0
    ],
    "en": [
      "hundred immediately we get a response"
    ],
    "ru": [
      "сто сразу получаем ответ"
    ]
  },
  {
    "time": [
      390.0,
      397.0
    ],
    "en": [
      "from r2 saying the host is unreachable"
    ],
    "ru": [
      "от r2 сообщает, что хост недоступен"
    ]
  },
  {
    "time": [
      397.0,
      400.0
    ],
    "en": [
      "now let's satisfy the second requirement"
    ],
    "ru": [
      "теперь давайте удовлетворим второе требование"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "PC 4 should not be able to communicate"
    ],
    "ru": [
      "ПК 4 не должен иметь возможность общаться"
    ]
  },
  {
    "time": [
      402.0,
      408.0
    ],
    "en": [
      "with 192.168.1.0 / 24 network let's go"
    ],
    "ru": [
      "с сетью 192.168.1.0 / 24 поехали"
    ]
  },
  {
    "time": [
      408.0,
      414.0
    ],
    "en": [
      "on r1 this time enable coffee/tea access"
    ],
    "ru": [
      "на r1 на этот раз включить доступ к кофе / чаю"
    ]
  },
  {
    "time": [
      414.0,
      418.0
    ],
    "en": [
      "list 1 now this time let's create a"
    ],
    "ru": [
      "список 1 теперь, на этот раз давайте создадим"
    ]
  },
  {
    "time": [
      418.0,
      422.0
    ],
    "en": [
      "denies statement let's check the next"
    ],
    "ru": [
      "отрицает заявление, давайте проверим следующее"
    ]
  },
  {
    "time": [
      422.0,
      425.0
    ],
    "en": [
      "options since we are just denying one"
    ],
    "ru": [
      "варианты, так как мы просто отрицаем один"
    ]
  },
  {
    "time": [
      425.0,
      428.0
    ],
    "en": [
      "host let's select that and type in the"
    ],
    "ru": [
      "хост, давайте выберем это и введите"
    ]
  },
  {
    "time": [
      428.0,
      441.0
    ],
    "en": [
      "address 192.168.1.1 at the end of an ACL"
    ],
    "ru": [
      "адрес 192.168.1.1 в конце ACL"
    ]
  },
  {
    "time": [
      441.0,
      445.0
    ],
    "en": [
      "so this ACL will deny PC 4 and if the"
    ],
    "ru": [
      "поэтому этот ACL будет отклонять ПК 4, и если"
    ]
  },
  {
    "time": [
      445.0,
      447.0
    ],
    "en": [
      "traffic comes from anywhere else it will"
    ],
    "ru": [
      "трафик идет откуда угодно"
    ]
  },
  {
    "time": [
      447.0,
      450.0
    ],
    "en": [
      "deny it also that's not what we want"
    ],
    "ru": [
      "отрицать это также это не то, что мы хотим"
    ]
  },
  {
    "time": [
      450.0,
      452.0
    ],
    "en": [
      "let's create a statement to permit"
    ],
    "ru": [
      "давайте создадим заявление, чтобы разрешить"
    ]
  },
  {
    "time": [
      452.0,
      457.0
    ],
    "en": [
      "everything else access list 1 permit any"
    ],
    "ru": [
      "все остальное список доступа 1 разрешить любое"
    ]
  },
  {
    "time": [
      457.0,
      461.0
    ],
    "en": [
      "do show access lists so ACLs are read"
    ],
    "ru": [
      "показывать списки доступа, чтобы ACL читались"
    ]
  },
  {
    "time": [
      461.0,
      464.0
    ],
    "en": [
      "from top to bottom if traffic comes from"
    ],
    "ru": [
      "сверху вниз, если трафик идет из"
    ]
  },
  {
    "time": [
      464.0,
      469.0
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
      464.0,
      469.0
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
      469.0,
      472.0
    ],
    "en": [
      "permit any won't apply if traffic comes"
    ],
    "ru": [
      "разрешение не применяется, если идет трафик"
    ]
  },
  {
    "time": [
      472.0,
      474.0
    ],
    "en": [
      "from anywhere else however it won't be"
    ],
    "ru": [
      "откуда угодно, но не будет"
    ]
  },
  {
    "time": [
      474.0,
      476.0
    ],
    "en": [
      "denied and then our permit any statement"
    ],
    "ru": [
      "отказано, а затем наше разрешение любое заявление"
    ]
  },
  {
    "time": [
      476.0,
      480.0
    ],
    "en": [
      "will allow it through the implicit deny"
    ],
    "ru": [
      "позволит через неявное отрицание"
    ]
  },
  {
    "time": [
      480.0,
      482.0
    ],
    "en": [
      "any still exists but nothing will get"
    ],
    "ru": [
      "все еще существует, но ничего не получится"
    ]
  },
  {
    "time": [
      482.0,
      484.0
    ],
    "en": [
      "that far because this permit any will"
    ],
    "ru": [
      "так далеко, потому что это разрешение любой"
    ]
  },
  {
    "time": [
      484.0,
      486.0
    ],
    "en": [
      "catch everything that the first"
    ],
    "ru": [
      "поймать все, что первым"
    ]
  },
  {
    "time": [
      486.0,
      489.0
    ],
    "en": [
      "statement doesn't"
    ],
    "ru": [
      "заявление не"
    ]
  },
  {
    "time": [
      489.0,
      493.0
    ],
    "en": [
      "now let's apply the ACL f00 is closest"
    ],
    "ru": [
      "теперь давайте применим ACL f00 ближайший"
    ]
  },
  {
    "time": [
      493.0,
      497.0
    ],
    "en": [
      "to the destination so interface f00 IP"
    ],
    "ru": [
      "в пункт назначения, поэтому интерфейс f00 IP"
    ]
  },
  {
    "time": [
      497.0,
      501.0
    ],
    "en": [
      "access group one out before we test this"
    ],
    "ru": [
      "получить доступ к первой группе, прежде чем мы протестируем это"
    ]
  },
  {
    "time": [
      501.0,
      503.0
    ],
    "en": [
      "what do you think would happen if we"
    ],
    "ru": [
      "как вы думаете, что произойдет, если мы"
    ]
  },
  {
    "time": [
      503.0,
      506.0
    ],
    "en": [
      "applied the ACL inbound on f10 as"
    ],
    "ru": [
      "применил входящий ACL на f10 как"
    ]
  },
  {
    "time": [
      506.0,
      510.0
    ],
    "en": [
      "opposed to outbound on f00 it would"
    ],
    "ru": [
      "в отличие от исходящего на f00, он бы"
    ]
  },
  {
    "time": [
      510.0,
      512.0
    ],
    "en": [
      "prevent pc 4 from reaching anywhere"
    ],
    "ru": [
      "предотвратить попадание ПК 4 куда угодно"
    ]
  },
  {
    "time": [
      512.0,
      515.0
    ],
    "en": [
      "outside of its own subnet here because"
    ],
    "ru": [
      "за пределами собственной подсети здесь, потому что"
    ]
  },
  {
    "time": [
      515.0,
      517.0
    ],
    "en": [
      "of any traffic sourced from pc 4 enters"
    ],
    "ru": [
      "любого трафика, полученного с ПК 4, входит"
    ]
  },
  {
    "time": [
      517.0,
      519.0
    ],
    "en": [
      "our ones f10 interface it will be"
    ],
    "ru": [
      "наш интерфейс f10 будет"
    ]
  },
  {
    "time": [
      519.0,
      524.0
    ],
    "en": [
      "dropped ok let's test i'll go on pc 3"
    ],
    "ru": [
      "упал хорошо давай проверим я пойду на пк 3"
    ]
  },
  {
    "time": [
      524.0,
      529.0
    ],
    "en": [
      "again first and I'll ping pc 1 ping"
    ],
    "ru": [
      "снова сначала и я пингую пк 1 пинг"
    ]
  },
  {
    "time": [
      529.0,
      536.0
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
      529.0,
      536.0
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
      536.0,
      538.0
    ],
    "en": [
      "now let's try from pc 4 which shouldn't"
    ],
    "ru": [
      "теперь давайте попробуем с ПК 4, который не должен"
    ]
  },
  {
    "time": [
      538.0,
      544.0
    ],
    "en": [
      "be able to reach pc 1 paying 192.168.1"
    ],
    "ru": [
      "получить доступ к ПК 1, заплатив 192.168.1"
    ]
  },
  {
    "time": [
      544.0,
      549.0
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
      544.0,
      549.0
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
      549.0,
      550.0
    ],
    "en": [
      "that the host is unreachable"
    ],
    "ru": [
      "что хост недоступен"
    ]
  },
  {
    "time": [
      550.0,
      552.0
    ],
    "en": [
      "we have successfully used numbered"
    ],
    "ru": [
      "мы успешно использовали пронумерованные"
    ]
  },
  {
    "time": [
      552.0,
      554.0
    ],
    "en": [
      "standard ACLs to achieve the"
    ],
    "ru": [
      "стандартные ACL для достижения"
    ]
  },
  {
    "time": [
      554.0,
      559.0
    ],
    "en": [
      "requirements that's all for this lab"
    ],
    "ru": [
      "требования это все для этой лаборатории"
    ]
  },
  {
    "time": [
      559.0,
      562.0
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
      562.0,
      564.0
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
      564.0,
      566.0
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
      566.0,
      570.0
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
      570.0,
      572.0
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
      572.0,
      575.0
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
      575.0,
      577.0
    ],
    "en": [
      "you want to support my channel please"
    ],
    "ru": [
      "вы хотите поддержать мой канал, пожалуйста"
    ]
  },
  {
    "time": [
      577.0,
      579.0
    ],
    "en": [
      "consider contributing to my patreon"
    ],
    "ru": [
      "подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      579.0,
      583.0
    ],
    "en": [
      "patreon comm slash Jeremy's IT lab I"
    ],
    "ru": [
      "patreon comm слэш ИТ-лаборатория Джереми I"
    ]
  },
  {
    "time": [
      583.0,
      586.0
    ],
    "en": [
      "accept Bitcoin and aetherium donations"
    ],
    "ru": [
      "принимать пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      586.0,
      588.0
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
      588.0,
      591.0
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
      591.0,
      595.0
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
      595.0,
      595.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]