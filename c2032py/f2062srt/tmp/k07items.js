let objs = [
  {
    "time": [
      0.0,
      4.049645
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
      4.049645,
      7.606561
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
      7.606561,
      15.157956
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
      15.157956,
      22.596414
    ],
    "en": [
      "this slab will be the first in a series of labs about access control lists or ACLs"
    ],
    "ru": [
      "эта плита будет первой в серии лабораторных работ по спискам управления доступом или ACL"
    ]
  },
  {
    "time": [
      22.596414,
      26.898205
    ],
    "en": [
      "it's very important to be familiar with ACLs for the exam"
    ],
    "ru": [
      "очень важно знать ACL для экзамена"
    ]
  },
  {
    "time": [
      26.898205,
      28.856725
    ],
    "en": [
      "so make sure you're comfortable with them"
    ],
    "ru": [
      "так что убедитесь, что вам комфортно с ними"
    ]
  },
  {
    "time": [
      28.856725,
      32.205704
    ],
    "en": [
      "this first lab will be fairly simple"
    ],
    "ru": [
      "эта первая лабораторная работа будет довольно простой"
    ]
  },
  {
    "time": [
      32.205704,
      36.360934
    ],
    "en": [
      "we will configure numbered standard access lists"
    ],
    "ru": [
      "настроим нумерованные стандартные списки доступа"
    ]
  },
  {
    "time": [
      36.360934,
      39.587829
    ],
    "en": [
      "ACLs can be numbered or named"
    ],
    "ru": [
      "ACL могут быть пронумерованы или названы"
    ]
  },
  {
    "time": [
      39.587829,
      41.830745
    ],
    "en": [
      "and standard or extended"
    ],
    "ru": [
      "и стандартный или расширенный"
    ]
  },
  {
    "time": [
      41.830745,
      49.148432
    ],
    "en": [
      "we will configure other types in future labs but for now let's focus on the simplest type the numbered standard ACL"
    ],
    "ru": [
      "мы настроим другие типы в будущих лабораторных работах, а пока давайте сосредоточимся на простейшем типе - нумерованном стандартном ACL."
    ]
  },
  {
    "time": [
      49.148432,
      53.621244
    ],
    "en": [
      "a standard ACL can be numbered from 1 to 99"
    ],
    "ru": [
      "стандартный ACL может быть пронумерован от 1 до 99"
    ]
  },
  {
    "time": [
      53.621244,
      56.601348
    ],
    "en": [
      "make sure you remember that little fact for the exam"
    ],
    "ru": [
      "убедитесь, что вы запомнили этот маленький факт перед экзаменом"
    ]
  },
  {
    "time": [
      56.601348,
      59.545493
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
      56.601348,
      59.545493
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
      59.545493,
      64.835597
    ],
    "en": [
      "controls traffic based only on the source address"
    ],
    "ru": [
      "контролирует трафик на основе только исходного адреса"
    ]
  },
  {
    "time": [
      64.835597,
      71.481138
    ],
    "en": [
      "on the other hand an extended ACL can control traffic based on the source and destination address"
    ],
    "ru": [
      "с другой стороны, расширенный ACL может управлять трафиком на основе адреса источника и получателя."
    ]
  },
  {
    "time": [
      71.481138,
      74.917013
    ],
    "en": [
      "as well as other things which we will look at in future labs"
    ],
    "ru": [
      "а также другие вещи, которые мы рассмотрим в будущих лабораториях"
    ]
  },
  {
    "time": [
      74.917013,
      80.647242
    ],
    "en": [
      "in this lab we have to configure these standard ACLs to achieve 2 requirements"
    ],
    "ru": [
      "В этой лабораторной работе мы должны настроить эти стандартные списки ACL для достижения 2 требований."
    ]
  },
  {
    "time": [
      80.647242,
      87.535971
    ],
    "en": [
      "only the 192.168.1.0 / 24 network should be able to access server 1"
    ],
    "ru": [
      "только сеть 192.168.1.0 / 24 должна иметь доступ к серверу 1"
    ]
  },
  {
    "time": [
      87.535971,
      93.810241
    ],
    "en": [
      "and PC 4 should not be able to communicate with the 192.168.1.0 24 network"
    ],
    "ru": [
      "и ПК 4 не должен иметь возможность связываться с сетью 192.168.1.0 24"
    ]
  },
  {
    "time": [
      93.810241,
      104.021115
    ],
    "en": [
      "to achieve the first requirement let's go on r2 now you may wonder why configure r2 as opposed to r1"
    ],
    "ru": [
      "чтобы выполнить первое требование, давайте перейдем к r2, теперь вы можете задаться вопросом, почему настраивают r2, а не r1"
    ]
  },
  {
    "time": [
      104.021115,
      109.986365
    ],
    "en": [
      "well standard ACLs should be configured as close to the destination as possible"
    ],
    "ru": [
      "ну стандартные ACL должны быть настроены как можно ближе к месту назначения"
    ]
  },
  {
    "time": [
      109.986365,
      114.386323
    ],
    "en": [
      "if we configure it closer to the source for example on r1"
    ],
    "ru": [
      "если мы настроим его ближе к источнику например на r1"
    ]
  },
  {
    "time": [
      114.386323,
      118.449177
    ],
    "en": [
      "we may inadvertently block traffic that we don't want to block"
    ],
    "ru": [
      "мы можем непреднамеренно заблокировать трафик, который не хотим блокировать"
    ]
  },
  {
    "time": [
      118.449177,
      121.559468
    ],
    "en": [
      "since the standard ACL only looks at the source address"
    ],
    "ru": [
      "поскольку стандартный ACL смотрит только на исходный адрес"
    ]
  },
  {
    "time": [
      121.559468,
      129.228884
    ],
    "en": [
      "in this case the destination is server 1 so we will configure the ACL on r2"
    ],
    "ru": [
      "в этом случае местом назначения является сервер 1, поэтому мы настроим ACL на r2"
    ]
  },
  {
    "time": [
      129.228884,
      138.598009
    ],
    "en": [
      "enable conf t to configure the numbered ACL use the command access list"
    ],
    "ru": [
      "enable conf t, чтобы настроить нумерованный ACL, используйте список доступа к командам"
    ]
  },
  {
    "time": [
      138.598009,
      142.240675
    ],
    "en": [
      "now also the options with the context-sensitive help"
    ],
    "ru": [
      "теперь также опции с контекстно-зависимой справкой"
    ]
  },
  {
    "time": [
      142.240675,
      151.874862
    ],
    "en": [
      "as you can see 1 to 99 is the range for a standard ACL you can also see the range for extended ACLs 100 to 199"
    ],
    "ru": [
      "как вы можете видеть от 1 до 99 - это диапазон для стандартного ACL, вы также можете увидеть диапазон для расширенных ACL от 100 до 199"
    ]
  },
  {
    "time": [
      151.874862,
      154.198528
    ],
    "en": [
      "I'll use the number 1"
    ],
    "ru": [
      "Я использую номер 1"
    ]
  },
  {
    "time": [
      154.198528,
      156.771923
    ],
    "en": [
      "now let's check the next option"
    ],
    "ru": [
      "теперь давайте проверим следующий вариант"
    ]
  },
  {
    "time": [
      156.771923,
      160.516715
    ],
    "en": [
      "we can deny permit or add a remark"
    ],
    "ru": [
      "мы можем отказать в разрешении или добавить замечание"
    ]
  },
  {
    "time": [
      160.516715,
      166.378881
    ],
    "en": [
      "remarks are useful when on a large network you have large amounts of ACLs"
    ],
    "ru": [
      "Замечания полезны, когда в большой сети у вас есть большое количество ACL"
    ]
  },
  {
    "time": [
      166.378881,
      171.473048
    ],
    "en": [
      "so you can identify what each ACL is for when looking at the configuration later"
    ],
    "ru": [
      "чтобы вы могли определить, для чего предназначен каждый ACL, когда позже посмотрите конфигурацию"
    ]
  },
  {
    "time": [
      171.473048,
      174.757901
    ],
    "en": [
      "I won't configure one now however"
    ],
    "ru": [
      "Однако сейчас я не буду его настраивать"
    ]
  },
  {
    "time": [
      174.757901,
      181.264588
    ],
    "en": [
      "we want to allow only the 192.168.1.0 / 24 network to access the server"
    ],
    "ru": [
      "мы хотим разрешить доступ к серверу только сети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      181.264588,
      187.460025
    ],
    "en": [
      "I'll use a permit statement first to allow the 192.168.1.0 / 24 Network"
    ],
    "ru": [
      "Сначала я использую оператор разрешения, чтобы разрешить сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      187.460025,
      192.130212
    ],
    "en": [
      "now let's check the options again"
    ],
    "ru": [
      "теперь давайте снова проверим варианты"
    ]
  },
  {
    "time": [
      192.130212,
      194.824587
    ],
    "en": [
      "I can input an IP address"
    ],
    "ru": [
      "Я могу ввести IP-адрес"
    ]
  },
  {
    "time": [
      194.824587,
      200.194795
    ],
    "en": [
      "I can tell it to permit any source or I can specify a single host"
    ],
    "ru": [
      "Я могу сказать ему разрешить любой источник, или я могу указать один хост"
    ]
  },
  {
    "time": [
      200.194795,
      205.16042
    ],
    "en": [
      "let's put in an IP address 192.168.1.0"
    ],
    "ru": [
      "давайте введем IP-адрес 192.168.1.0"
    ]
  },
  {
    "time": [
      205.16042,
      209.681002
    ],
    "en": [
      "X wildcard bits"
    ],
    "ru": [
      "Биты подстановочного знака X"
    ]
  },
  {
    "time": [
      209.681002,
      212.418293
    ],
    "en": [
      "ACLs use a wildcard mask"
    ],
    "ru": [
      "ACL используют подстановочную маску"
    ]
  },
  {
    "time": [
      212.418293,
      214.614834
    ],
    "en": [
      "as opposed to a standard subnet mask"
    ],
    "ru": [
      "в отличие от стандартной маски подсети"
    ]
  },
  {
    "time": [
      214.614834,
      220.960375
    ],
    "en": [
      "I'm not going to explain exactly how these work here but a wildcard mask is an inverse subnet mask"
    ],
    "ru": [
      "Я не собираюсь подробно объяснять, как они здесь работают, но подстановочная маска - это обратная маска подсети."
    ]
  },
  {
    "time": [
      220.960375,
      229.264604
    ],
    "en": [
      "so if a bit is 1 or 0 in a subnet mask its equivalent bit in a wildcard mask would be 0 or 1 respectively"
    ],
    "ru": [
      "поэтому, если бит в маске подсети равен 1 или 0, его эквивалентный бит в подстановочной маске будет 0 или 1 соответственно"
    ]
  },
  {
    "time": [
      229.264604,
      234.92202
    ],
    "en": [
      "if you have no idea what that means I recommend reading up on wildcard masks to get familiar with them"
    ],
    "ru": [
      "если вы не понимаете, что это значит, рекомендую почитать маски с подстановочными знаками, чтобы познакомиться с ними"
    ]
  },
  {
    "time": [
      234.92202,
      243.566708
    ],
    "en": [
      "anyway the subnet mask for a / 24 Network is 255.255.255.0"
    ],
    "ru": [
      "в любом случае маска подсети для сети / 24 255.255.255.0"
    ]
  },
  {
    "time": [
      243.566708,
      248.034708
    ],
    "en": [
      "so the wild-card mask is 0 0.0.255 ok"
    ],
    "ru": [
      "так что маска подстановочного знака равна 0 0,0.255 ОК"
    ]
  },
  {
    "time": [
      248.034708,
      256.580187
    ],
    "en": [
      "that's it we have created the ACL which permits the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "вот и все, что мы создали ACL, который разрешает сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      256.580187,
      262.868062
    ],
    "en": [
      "now do we have to create another statement in this ACL to deny everything else"
    ],
    "ru": [
      "теперь нам нужно создать еще один оператор в этом ACL, чтобы отрицать все остальное"
    ]
  },
  {
    "time": [
      262.868062,
      269.939103
    ],
    "en": [
      "actually we don't at the end of every ACL there is an employee deny all statement"
    ],
    "ru": [
      "на самом деле у нас нет в конце каждого ACL сотрудника, который запрещает все утверждения"
    ]
  },
  {
    "time": [
      269.939103,
      275.768061
    ],
    "en": [
      "meaning everything that doesn't apply to a previous entry in the ACL will be denied"
    ],
    "ru": [
      "это означает, что все, что не относится к предыдущей записи в ACL, будет отклонено"
    ]
  },
  {
    "time": [
      275.768061,
      283.892311
    ],
    "en": [
      "do show access lists as you can see that deny all doesn't actually appear in the ACL"
    ],
    "ru": [
      "показывать списки доступа, поскольку вы можете видеть, что запретить все на самом деле не отображается в ACL"
    ]
  },
  {
    "time": [
      283.892311,
      287.746477
    ],
    "en": [
      "but when we tried to ping later it will work as intended"
    ],
    "ru": [
      "но когда мы попытались пинговать позже, он будет работать как задумано"
    ]
  },
  {
    "time": [
      287.746477,
      293.733977
    ],
    "en": [
      "so we have created the ACL is that all we have to do"
    ],
    "ru": [
      "Итак, мы создали ACL, и все, что нам нужно сделать"
    ]
  },
  {
    "time": [
      293.733977,
      297.04581
    ],
    "en": [
      "no we have to apply it to an interface"
    ],
    "ru": [
      "нет, мы должны применить это к интерфейсу"
    ]
  },
  {
    "time": [
      297.04581,
      302.922122
    ],
    "en": [
      "following the rule of applying a standard ACL as close to the destination as possible"
    ],
    "ru": [
      "следуя правилу применения стандартного ACL как можно ближе к месту назначения"
    ]
  },
  {
    "time": [
      302.922122,
      308.399913
    ],
    "en": [
      "let's apply it to the f00 interface interface f00"
    ],
    "ru": [
      "применим его к интерфейсу f00 interface f00"
    ]
  },
  {
    "time": [
      308.399913,
      312.621621
    ],
    "en": [
      "you can apply an ACL to an interface with this command"
    ],
    "ru": [
      "вы можете применить ACL к интерфейсу с помощью этой команды"
    ]
  },
  {
    "time": [
      312.621621,
      315.234912
    ],
    "en": [
      "IP access group"
    ],
    "ru": [
      "Группа доступа IP"
    ]
  },
  {
    "time": [
      315.234912,
      319.167974
    ],
    "en": [
      "now I'll type 1 the number of the ACL we created"
    ],
    "ru": [
      "теперь я наберу 1 номер созданного нами ACL"
    ]
  },
  {
    "time": [
      319.167974,
      321.322974
    ],
    "en": [
      "now let's check the options"
    ],
    "ru": [
      "теперь давайте проверим варианты"
    ]
  },
  {
    "time": [
      321.322974,
      325.173161
    ],
    "en": [
      "in or out which do you think is appropriate"
    ],
    "ru": [
      "в или вне, что вы думаете уместно"
    ]
  },
  {
    "time": [
      325.173161,
      327.403513
    ],
    "en": [
      "the answer is out"
    ],
    "ru": [
      "ответ отсутствует"
    ]
  },
  {
    "time": [
      327.403513,
      331.290013
    ],
    "en": [
      "because we aren't filtering traffic coming in from this interface"
    ],
    "ru": [
      "потому что мы не фильтруем трафик, поступающий с этого интерфейса"
    ]
  },
  {
    "time": [
      331.290013,
      335.479513
    ],
    "en": [
      "we are filtering traffic going out from this interface towards server 1"
    ],
    "ru": [
      "мы фильтруем трафик, идущий от этого интерфейса к серверу 1"
    ]
  },
  {
    "time": [
      335.479513,
      340.315012
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
      340.315012,
      343.417074
    ],
    "en": [
      "let's test this ACL first before moving on"
    ],
    "ru": [
      "давайте сначала проверим этот ACL, прежде чем двигаться дальше"
    ]
  },
  {
    "time": [
      343.417074,
      345.581532
    ],
    "en": [
      "I'll go on PC one PC"
    ],
    "ru": [
      "Я пойду на ПК один ПК"
    ]
  },
  {
    "time": [
      345.581532,
      348.774115
    ],
    "en": [
      "one should be able to reach the server"
    ],
    "ru": [
      "нужно иметь доступ к серверу"
    ]
  },
  {
    "time": [
      348.774115,
      353.38703
    ],
    "en": [
      "ping 192.168.3.100"
    ],
    "ru": [
      "пинг 192.168.3.100"
    ]
  },
  {
    "time": [
      353.38703,
      361.298675
    ],
    "en": [
      "as expected the ping works"
    ],
    "ru": [
      "как и ожидалось пинг работает"
    ]
  },
  {
    "time": [
      361.298675,
      367.209507
    ],
    "en": [
      "now let's try from the 192.168.2.0 network pc 3"
    ],
    "ru": [
      "теперь давайте попробуем из сети 192.168.2.0 pc 3"
    ]
  },
  {
    "time": [
      367.209507,
      370.971944
    ],
    "en": [
      "pc 3 should not be able to reach the server"
    ],
    "ru": [
      "pc 3 не должен иметь доступ к серверу"
    ]
  },
  {
    "time": [
      370.971944,
      376.74636
    ],
    "en": [
      "again even though we didn't configure the ACL explicitly to deny any traffic"
    ],
    "ru": [
      "снова, даже если мы не настроили ACL явно для запрета любого трафика"
    ]
  },
  {
    "time": [
      376.74636,
      384.545401
    ],
    "en": [
      "it will by default deny any traffic that doesn't match the entry permitting the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "по умолчанию он будет запрещать любой трафик, который не соответствует записи, разрешающей сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      384.545401,
      393.802546
    ],
    "en": [
      "ping 192.168.3.100 immediately we get a response from r2 saying the host is unreachable"
    ],
    "ru": [
      "ping 192.168.3.100 сразу же получаем ответ от r2 о том, что хост недоступен"
    ]
  },
  {
    "time": [
      393.802546,
      400.522254
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
      400.522254,
      407.007483
    ],
    "en": [
      "PC 4 should not be able to communicate with 192.168.1.0 / 24 network"
    ],
    "ru": [
      "ПК 4 не должен иметь возможность связываться с сетью 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      407.007483,
      410.114128
    ],
    "en": [
      "let's go on r1 this time"
    ],
    "ru": [
      "давай на этот раз пойдем на r1"
    ]
  },
  {
    "time": [
      410.114128,
      416.137961
    ],
    "en": [
      "enable conf t access list 1"
    ],
    "ru": [
      "включить конф т список доступа 1"
    ]
  },
  {
    "time": [
      416.137961,
      420.304169
    ],
    "en": [
      "now this time let's create a denies statement"
    ],
    "ru": [
      "теперь на этот раз давайте создадим заявление об отказе"
    ]
  },
  {
    "time": [
      420.304169,
      423.286669
    ],
    "en": [
      "let's check the next options"
    ],
    "ru": [
      "давайте проверим следующие варианты"
    ]
  },
  {
    "time": [
      423.286669,
      427.937064
    ],
    "en": [
      "since we are just denying one host let's select that"
    ],
    "ru": [
      "поскольку мы просто запрещаем один хост, давайте выберем этот"
    ]
  },
  {
    "time": [
      427.937064,
      441.996978
    ],
    "en": [
      "and type in the address 192.168.1.14 at the end of an ACL"
    ],
    "ru": [
      "и введите адрес 192.168.1.14 в конце ACL"
    ]
  },
  {
    "time": [
      441.996978,
      445.301478
    ],
    "en": [
      "so this ACL will deny PC 4"
    ],
    "ru": [
      "так что этот ACL будет отклонять ПК 4"
    ]
  },
  {
    "time": [
      445.301478,
      447.540894
    ],
    "en": [
      "and if the traffic comes from anywhere else"
    ],
    "ru": [
      "и если трафик идет откуда-то еще"
    ]
  },
  {
    "time": [
      447.540894,
      449.825227
    ],
    "en": [
      "it will deny it also"
    ],
    "ru": [
      "это также будет отрицать"
    ]
  },
  {
    "time": [
      449.825227,
      451.410643
    ],
    "en": [
      "that's not what we want"
    ],
    "ru": [
      "это не то, что мы хотим"
    ]
  },
  {
    "time": [
      451.410643,
      454.069997
    ],
    "en": [
      "let's create a statement to permit everything else"
    ],
    "ru": [
      "давайте создадим заявление, чтобы разрешить все остальное"
    ]
  },
  {
    "time": [
      454.069997,
      457.295747
    ],
    "en": [
      "access list 1 permit any"
    ],
    "ru": [
      "список доступа 1 разрешить любой"
    ]
  },
  {
    "time": [
      457.295747,
      459.949537
    ],
    "en": [
      "do show access lists"
    ],
    "ru": [
      "показывать списки доступа"
    ]
  },
  {
    "time": [
      459.949537,
      463.469787
    ],
    "en": [
      "so ACLs are read from top to bottom"
    ],
    "ru": [
      "поэтому ACL читаются сверху вниз"
    ]
  },
  {
    "time": [
      463.469787,
      467.435099
    ],
    "en": [
      "if traffic comes from 192.168.2.14"
    ],
    "ru": [
      "если трафик идет с 192.168.2.14"
    ]
  },
  {
    "time": [
      467.435099,
      471.086078
    ],
    "en": [
      "it will be denied and this permit any won't apply"
    ],
    "ru": [
      "ему будет отказано, и это разрешение не будет применяться"
    ]
  },
  {
    "time": [
      471.086078,
      473.868244
    ],
    "en": [
      "if traffic comes from anywhere else however"
    ],
    "ru": [
      "если трафик идет откуда-то еще"
    ]
  },
  {
    "time": [
      473.868244,
      478.377785
    ],
    "en": [
      "it won't be denied and then our permit any statement will allow it through"
    ],
    "ru": [
      "это не будет отказано, и тогда наше разрешение любое заявление пропустит его через"
    ]
  },
  {
    "time": [
      478.377785,
      481.635846
    ],
    "en": [
      "the implicit deny any still exists"
    ],
    "ru": [
      "неявное отрицание все еще существует"
    ]
  },
  {
    "time": [
      481.635846,
      483.634221
    ],
    "en": [
      "but nothing will get that far"
    ],
    "ru": [
      "но ничто не зайдет так далеко"
    ]
  },
  {
    "time": [
      483.634221,
      487.290866
    ],
    "en": [
      "because this permit any will catch everything that the first statement doesn't"
    ],
    "ru": [
      "потому что это разрешение будет улавливать все, чего не делает первый оператор."
    ]
  },
  {
    "time": [
      487.290866,
      491.895096
    ],
    "en": [
      "now let's apply the ACL"
    ],
    "ru": [
      "теперь давайте применим ACL"
    ]
  },
  {
    "time": [
      491.895096,
      497.411679
    ],
    "en": [
      "f00 is closest to the destination so interface f00"
    ],
    "ru": [
      "f00 находится ближе всего к месту назначения, поэтому интерфейс f00"
    ]
  },
  {
    "time": [
      497.411679,
      500.313929
    ],
    "en": [
      "IP access group one out"
    ],
    "ru": [
      "Группа доступа IP один из"
    ]
  },
  {
    "time": [
      500.313929,
      509.707241
    ],
    "en": [
      "before we test this what do you think would happen if we applied the ACL inbound on f10 as opposed to outbound on f00"
    ],
    "ru": [
      "прежде чем мы проверим это, как вы думаете, что произойдет, если мы применим входящий ACL на f10, а не исходящий на f00"
    ]
  },
  {
    "time": [
      509.707241,
      520.573491
    ],
    "en": [
      "it would prevent pc 4 from reaching anywhere outside of its own subnet here because of any traffic sourced from pc 4 enters our ones f10 interface it will be dropped"
    ],
    "ru": [
      "это предотвратит доступ ПК 4 к чему-либо за пределами его собственной подсети, потому что любой трафик, полученный с ПК 4, входит в наш интерфейс f10, он будет отброшен"
    ]
  },
  {
    "time": [
      520.573491,
      522.825199
    ],
    "en": [
      "ok let's test"
    ],
    "ru": [
      "хорошо давай проверим"
    ]
  },
  {
    "time": [
      522.825199,
      527.037636
    ],
    "en": [
      "i'll go on pc 3 again first and I'll ping pc 1"
    ],
    "ru": [
      "Сначала я снова перейду на компьютер 3 и пингую на ПК 1"
    ]
  },
  {
    "time": [
      527.037636,
      539.696906
    ],
    "en": [
      "ping 192.168.1.12 ok it works as expected now let's try from pc 4 which shouldn't be able to reach pc 1"
    ],
    "ru": [
      "ping 192.168.1.12 хорошо, он работает, как ожидалось, теперь давайте попробуем с ПК 4, который не должен иметь доступ к ПК 1"
    ]
  },
  {
    "time": [
      539.696906,
      545.278406
    ],
    "en": [
      "ping 192.168.1.11"
    ],
    "ru": [
      "пинг 192.168.1.11"
    ]
  },
  {
    "time": [
      545.278406,
      550.859822
    ],
    "en": [
      "again we get a message from r1 saying that the host is unreachable"
    ],
    "ru": [
      "снова мы получаем сообщение от r1 о том, что хост недоступен"
    ]
  },
  {
    "time": [
      550.859822,
      555.409322
    ],
    "en": [
      "we have successfully used numbered standard ACLs to achieve the requirements"
    ],
    "ru": [
      "мы успешно использовали нумерованные стандартные ACL для достижения требований"
    ]
  },
  {
    "time": [
      555.409322,
      557.197988
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
      557.197988,
      564.874654
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
      564.874654,
      569.619508
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
      569.619508,
      574.23557
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
      574.23557,
      582.93809
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      582.93809,
      588.522173
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      588.522173,
      598.485985
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
      598.485985,
      598.485985
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
      598.485985,
      598.485985
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
      598.485985,
      598.485985
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]