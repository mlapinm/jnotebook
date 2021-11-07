let objs = [
  {
    "time": [
      0.0,
      4.806864
    ],
    "en": [
      "welcome to this free gns3 practice lab for the CCNA"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию gns3 для CCNA"
    ]
  },
  {
    "time": [
      4.806864,
      10.208229
    ],
    "en": [
      "that's right in this video as well as the next one I will be using gns3"
    ],
    "ru": [
      "это верно в этом видео, а также в следующем, я буду использовать gns3"
    ]
  },
  {
    "time": [
      10.208229,
      11.624965
    ],
    "en": [
      "not packet tracer"
    ],
    "ru": [
      "не трассировщик пакетов"
    ]
  },
  {
    "time": [
      11.624965,
      19.246905
    ],
    "en": [
      "as much as I love packet tracer even today it doesn't support everything that is on the CCNA exam topics"
    ],
    "ru": [
      "как бы я ни любил пакетный трассировщик, даже сегодня он не поддерживает все, что есть в темах экзамена CCNA"
    ]
  },
  {
    "time": [
      19.246905,
      29.118494
    ],
    "en": [
      "so for this video on multi-link PPP and the next video on pppoe I had to choose between skipping the topics"
    ],
    "ru": [
      "так что для этого видео по multi-link PPP и следующего видео по pppoe мне пришлось выбирать между пропуском тем"
    ]
  },
  {
    "time": [
      29.118494,
      31.137976
    ],
    "en": [
      "or using gns3 instead"
    ],
    "ru": [
      "или используя вместо этого gns3"
    ]
  },
  {
    "time": [
      31.137976,
      34.561648
    ],
    "en": [
      "I will still put the lab file in the description"
    ],
    "ru": [
      "Я еще выложу лабораторный файл в описание"
    ]
  },
  {
    "time": [
      34.561648,
      36.979936
    ],
    "en": [
      "which you can use to load up the topology"
    ],
    "ru": [
      "который вы можете использовать для загрузки топологии"
    ]
  },
  {
    "time": [
      36.979936,
      41.344359
    ],
    "en": [
      "these routers are cisco c 7200 routers"
    ],
    "ru": [
      "эти маршрутизаторы являются маршрутизаторами cisco c 7200"
    ]
  },
  {
    "time": [
      41.344359,
      44.898351
    ],
    "en": [
      "however I can't legally include the iOS image files"
    ],
    "ru": [
      "однако я не могу юридически включить файлы изображений iOS"
    ]
  },
  {
    "time": [
      44.898351,
      46.605326
    ],
    "en": [
      "so you'll have to get those yourself"
    ],
    "ru": [
      "так что вам придется получить их самостоятельно"
    ]
  },
  {
    "time": [
      46.605326,
      50.731536
    ],
    "en": [
      "I'll put the name of the iOS image I used in the description"
    ],
    "ru": [
      "Я укажу имя образа iOS, который я использовал в описании"
    ]
  },
  {
    "time": [
      50.731536,
      54.74164
    ],
    "en": [
      "if you want to know how to get gns3 working"
    ],
    "ru": [
      "если вы хотите знать, как заставить работать gns3"
    ]
  },
  {
    "time": [
      54.74164,
      56.677979
    ],
    "en": [
      "do a quick search on google"
    ],
    "ru": [
      "сделай быстрый поиск в гугле"
    ]
  },
  {
    "time": [
      56.677979,
      60.232097
    ],
    "en": [
      "there are plenty of people who can teach you how to get gns3 up and running"
    ],
    "ru": [
      "есть много людей, которые могут научить вас, как запустить gns3"
    ]
  },
  {
    "time": [
      60.232097,
      64.459896
    ],
    "en": [
      "now if you just can't get gns3 working"
    ],
    "ru": [
      "теперь, если вы просто не можете заставить работать gns3"
    ]
  },
  {
    "time": [
      64.459896,
      69.245584
    ],
    "en": [
      "make sure you watch the video and learn the commands as these topics are on the exam topics list"
    ],
    "ru": [
      "обязательно посмотрите видео и изучите команды, так как эти темы находятся в списке тем экзамена"
    ]
  },
  {
    "time": [
      69.245584,
      70.991033
    ],
    "en": [
      "let's get started"
    ],
    "ru": [
      "Давайте начнем"
    ]
  },
  {
    "time": [
      70.991033,
      77.249134
    ],
    "en": [
      "in this lab we will configure multi-link PPP or ml PPP"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим multi-link PPP или ml PPP"
    ]
  },
  {
    "time": [
      77.249134,
      82.087767
    ],
    "en": [
      "much like ether channel which we configured a few labs ago"
    ],
    "ru": [
      "очень похоже на эфирный канал, который мы настроили несколько лабораторий назад"
    ]
  },
  {
    "time": [
      82.087767,
      89.001604
    ],
    "en": [
      "ml PPP groups multiple physical interfaces together to operate as one logical interface"
    ],
    "ru": [
      "ml PPP группирует несколько физических интерфейсов вместе, чтобы работать как один логический интерфейс"
    ]
  },
  {
    "time": [
      89.001604,
      92.052939
    ],
    "en": [
      "this provides multiple benefits"
    ],
    "ru": [
      "это дает множество преимуществ"
    ]
  },
  {
    "time": [
      92.052939,
      95.674269
    ],
    "en": [
      "you get the redundancy of having multiple links"
    ],
    "ru": [
      "вы получаете избыточность наличия нескольких ссылок"
    ]
  },
  {
    "time": [
      95.674269,
      99.26506
    ],
    "en": [
      "so if one link fails the others can keep forwarding traffic"
    ],
    "ru": [
      "поэтому, если одна ссылка не работает, другие могут продолжать пересылать трафик"
    ]
  },
  {
    "time": [
      99.26506,
      105.180745
    ],
    "en": [
      "however you also get the increased bandwidth of having multiple links forwarding at the same time"
    ],
    "ru": [
      "однако вы также получаете увеличенную пропускную способность за счет одновременной переадресации нескольких ссылок"
    ]
  },
  {
    "time": [
      105.180745,
      113.43445
    ],
    "en": [
      "so in this lab we will configure multi-link PPP with PAP authentication between r1 and SPR 1"
    ],
    "ru": [
      "поэтому в этой лабораторной работе мы настроим многоканальный PPP с аутентификацией PAP между r1 и SPR 1."
    ]
  },
  {
    "time": [
      113.43445,
      117.619167
    ],
    "en": [
      "and chap authentication between r2 and SPR -"
    ],
    "ru": [
      "и аутентификация главы между r2 и SPR -"
    ]
  },
  {
    "time": [
      117.619167,
      120.469847
    ],
    "en": [
      "I'll go on r1 first"
    ],
    "ru": [
      "Я сначала пойду на r1"
    ]
  },
  {
    "time": [
      120.469847,
      122.728577
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
      122.728577,
      130.267828
    ],
    "en": [
      "now SP r1 is currently configured for ml PPP with pap authentication"
    ],
    "ru": [
      "теперь SP r1 в настоящее время настроен для ml PPP с аутентификацией pap"
    ]
  },
  {
    "time": [
      130.267828,
      135.759302
    ],
    "en": [
      "and is trying to authenticate with the username packet and password tracer"
    ],
    "ru": [
      "и пытается пройти аутентификацию с помощью пакета имени пользователя и средства отслеживания паролей"
    ]
  },
  {
    "time": [
      135.759302,
      138.908486
    ],
    "en": [
      "so let's configure that user account on our one"
    ],
    "ru": [
      "так что давайте настроим эту учетную запись пользователя на нашем"
    ]
  },
  {
    "time": [
      138.908486,
      143.399008
    ],
    "en": [
      "username packet password tracer"
    ],
    "ru": [
      "трассировщик паролей пакета имени пользователя"
    ]
  },
  {
    "time": [
      143.399008,
      148.277874
    ],
    "en": [
      "okay now to configure ml PPP"
    ],
    "ru": [
      "ладно теперь настроить ml PPP"
    ]
  },
  {
    "time": [
      148.277874,
      153.449756
    ],
    "en": [
      "let's first create the logical interface which is called multi link"
    ],
    "ru": [
      "давайте сначала создадим логический интерфейс, который называется multi link"
    ]
  },
  {
    "time": [
      153.449756,
      156.806241
    ],
    "en": [
      "interface multi-link one"
    ],
    "ru": [
      "интерфейс многоканальный"
    ]
  },
  {
    "time": [
      156.806241,
      160.655742
    ],
    "en": [
      "okay there are a few commands we need to put here"
    ],
    "ru": [
      "хорошо, нам нужно добавить сюда несколько команд"
    ]
  },
  {
    "time": [
      160.655742,
      164.237329
    ],
    "en": [
      "the first is PPP multi link"
    ],
    "ru": [
      "первый - это PPP multi link"
    ]
  },
  {
    "time": [
      164.237329,
      169.749438
    ],
    "en": [
      "that is followed by PPP multi-link group one"
    ],
    "ru": [
      "за которым следует PPP multi-link group one"
    ]
  },
  {
    "time": [
      169.749438,
      174.089687
    ],
    "en": [
      "we will put that command on the physical interfaces two later"
    ],
    "ru": [
      "мы поместим эту команду на физические интерфейсы двумя позже"
    ]
  },
  {
    "time": [
      174.089687,
      176.604381
    ],
    "en": [
      "to tell them to join this multi link group"
    ],
    "ru": [
      "сказать им присоединиться к этой многосвязной группе"
    ]
  },
  {
    "time": [
      176.604381,
      179.011388
    ],
    "en": [
      "keep in mind"
    ],
    "ru": [
      "иметь ввиду"
    ]
  },
  {
    "time": [
      179.011388,
      185.198214
    ],
    "en": [
      "this multi link group number and the multi link interface number have to be the same as on the neighboring router"
    ],
    "ru": [
      "этот номер многоканальной группы и номер многоканального интерфейса должны быть такими же, как на соседнем маршрутизаторе."
    ]
  },
  {
    "time": [
      185.198214,
      189.468576
    ],
    "en": [
      "next let's activate PAP authentication"
    ],
    "ru": [
      "далее давайте активируем аутентификацию PAP"
    ]
  },
  {
    "time": [
      189.468576,
      193.497307
    ],
    "en": [
      "PPP authentication tap"
    ],
    "ru": [
      "Кран аутентификации PPP"
    ]
  },
  {
    "time": [
      193.497307,
      198.477511
    ],
    "en": [
      "the network diagram says to send a username of Cisco"
    ],
    "ru": [
      "схема сети говорит, что нужно отправить имя пользователя Cisco"
    ]
  },
  {
    "time": [
      198.477511,
      200.758894
    ],
    "en": [
      "and password of CCNA"
    ],
    "ru": [
      "и пароль CCNA"
    ]
  },
  {
    "time": [
      200.758894,
      207.842839
    ],
    "en": [
      "PPP PAP sent username cisco password CCNA"
    ],
    "ru": [
      "PPP PAP отправил имя пользователя cisco, пароль CCNA"
    ]
  },
  {
    "time": [
      207.842839,
      212.782544
    ],
    "en": [
      "finally we have to configure the IP address here"
    ],
    "ru": [
      "наконец, нам нужно настроить IP-адрес здесь"
    ]
  },
  {
    "time": [
      212.782544,
      215.179641
    ],
    "en": [
      "not on the physical interfaces"
    ],
    "ru": [
      "не на физических интерфейсах"
    ]
  },
  {
    "time": [
      215.179641,
      220.124629
    ],
    "en": [
      "IP address 100 0 to"
    ],
    "ru": [
      "IP-адрес 100 от 0 до"
    ]
  },
  {
    "time": [
      220.124629,
      223.970865
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
      220.124629,
      223.970865
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
      223.970865,
      234.63345
    ],
    "en": [
      "in interface multi-link 1"
    ],
    "ru": [
      "в интерфейсе multi-link 1"
    ]
  },
  {
    "time": [
      234.63345,
      239.320865
    ],
    "en": [
      "the order is different but there's everything I configured"
    ],
    "ru": [
      "порядок другой, но есть все, что я настроил"
    ]
  },
  {
    "time": [
      239.320865,
      243.047645
    ],
    "en": [
      "IP address PAP authentication"
    ],
    "ru": [
      "IP-адрес PAP аутентификация"
    ]
  },
  {
    "time": [
      243.047645,
      247.793087
    ],
    "en": [
      "and PPP multi-link configuration"
    ],
    "ru": [
      "и многосвязная конфигурация PPP"
    ]
  },
  {
    "time": [
      247.793087,
      254.310796
    ],
    "en": [
      "ok now let's configure the two physical interfaces to join this multi link group"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим два физических интерфейса для присоединения к этой многоканальной группе"
    ]
  },
  {
    "time": [
      254.310796,
      257.353699
    ],
    "en": [
      "interface s1 zero"
    ],
    "ru": [
      "интерфейс s1 ноль"
    ]
  },
  {
    "time": [
      257.353699,
      260.362701
    ],
    "en": [
      "there are just three commands I need here"
    ],
    "ru": [
      "мне нужны всего три команды"
    ]
  },
  {
    "time": [
      260.362701,
      265.237916
    ],
    "en": [
      "we have to set the encapsulation on the physical interfaces to PPP"
    ],
    "ru": [
      "мы должны установить инкапсуляцию на физических интерфейсах на PPP"
    ]
  },
  {
    "time": [
      265.237916,
      268.935036
    ],
    "en": [
      "so encapsulation PPP"
    ],
    "ru": [
      "так инкапсуляция PPP"
    ]
  },
  {
    "time": [
      268.935036,
      273.853857
    ],
    "en": [
      "next tell it had joined the multi link group we created"
    ],
    "ru": [
      "Затем скажите, что он присоединился к созданной нами группе с несколькими ссылками"
    ]
  },
  {
    "time": [
      273.853857,
      277.918551
    ],
    "en": [
      "PPP multi-link group one"
    ],
    "ru": [
      "PPP multi-link group one"
    ]
  },
  {
    "time": [
      277.918551,
      283.61549
    ],
    "en": [
      "finally make sure the physical interfaces aren't shutdown"
    ],
    "ru": [
      "наконец, убедитесь, что физические интерфейсы не отключены"
    ]
  },
  {
    "time": [
      283.61549,
      285.634673
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      285.634673,
      290.375966
    ],
    "en": [
      "okay now I'll do the same on s1 one"
    ],
    "ru": [
      "хорошо, теперь я сделаю то же самое на s1 one"
    ]
  },
  {
    "time": [
      290.375966,
      293.295784
    ],
    "en": [
      "interface s1 1"
    ],
    "ru": [
      "интерфейс s1 1"
    ]
  },
  {
    "time": [
      293.295784,
      296.920613
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      296.920613,
      300.023856
    ],
    "en": [
      "PPP multi-link group 1"
    ],
    "ru": [
      "Многоканальная группа PPP 1"
    ]
  },
  {
    "time": [
      300.023856,
      302.078913
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      302.078913,
      303.599071
    ],
    "en": [
      "end"
    ],
    "ru": [
      "конец"
    ]
  },
  {
    "time": [
      303.599071,
      306.931498
    ],
    "en": [
      "ok let's do some show commands to verify"
    ],
    "ru": [
      "хорошо, давайте сделаем несколько команд для проверки"
    ]
  },
  {
    "time": [
      306.931498,
      311.092473
    ],
    "en": [
      "first a general PPP show command"
    ],
    "ru": [
      "сначала общая команда PPP show"
    ]
  },
  {
    "time": [
      311.092473,
      313.691838
    ],
    "en": [
      "show PPP all"
    ],
    "ru": [
      "показать PPP все"
    ]
  },
  {
    "time": [
      313.691838,
      323.965942
    ],
    "en": [
      "notice our two physical interfaces as well as the multi link interface all with the same peer address of 101"
    ],
    "ru": [
      "обратите внимание на наши два физических интерфейса, а также на многоканальный интерфейс с одним и тем же адресом равноправного узла 101."
    ]
  },
  {
    "time": [
      323.965942,
      326.71855
    ],
    "en": [
      "which is the address of SPR 1"
    ],
    "ru": [
      "который является адресом SPR 1"
    ]
  },
  {
    "time": [
      326.71855,
      329.300205
    ],
    "en": [
      "also the peer name of packet"
    ],
    "ru": [
      "также одноранговое имя пакета"
    ]
  },
  {
    "time": [
      329.300205,
      332.512223
    ],
    "en": [
      "which SPR 1 is using to authenticate"
    ],
    "ru": [
      "какой SPR 1 использует для аутентификации"
    ]
  },
  {
    "time": [
      332.512223,
      337.761747
    ],
    "en": [
      "next show PPP multi-link"
    ],
    "ru": [
      "следующее шоу PPP multi-link"
    ]
  },
  {
    "time": [
      337.761747,
      342.117734
    ],
    "en": [
      "there's the remote user name of packet again"
    ],
    "ru": [
      "снова имя удаленного пользователя пакета"
    ]
  },
  {
    "time": [
      342.117734,
      344.682745
    ],
    "en": [
      "and our local user name of cisco"
    ],
    "ru": [
      "и наше локальное имя пользователя cisco"
    ]
  },
  {
    "time": [
      344.682745,
      348.134242
    ],
    "en": [
      "dan here you can see our two member links"
    ],
    "ru": [
      "дан здесь вы можете увидеть наши две ссылки для участников"
    ]
  },
  {
    "time": [
      348.134242,
      350.542586
    ],
    "en": [
      "serial 1 0 and 1 1"
    ],
    "ru": [
      "серийный 1 0 и 1 1"
    ]
  },
  {
    "time": [
      350.542586,
      354.443176
    ],
    "en": [
      "ok let's try a ping to see if it works"
    ],
    "ru": [
      "хорошо, давайте попробуем пинг, чтобы увидеть, работает ли он"
    ]
  },
  {
    "time": [
      354.443176,
      357.960069
    ],
    "en": [
      "ping 100 0 1"
    ],
    "ru": [
      "пинг 100 0 1"
    ]
  },
  {
    "time": [
      357.960069,
      359.976078
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
      359.976078,
      364.475262
    ],
    "en": [
      "ok let's move on to our to"
    ],
    "ru": [
      "хорошо, перейдем к нашему"
    ]
  },
  {
    "time": [
      364.475262,
      367.633856
    ],
    "en": [
      "the multi-link configuration will be the same"
    ],
    "ru": [
      "Многоканальная конфигурация будет такой же"
    ]
  },
  {
    "time": [
      367.633856,
      371.634037
    ],
    "en": [
      "just with chap authentication instead of PAP"
    ],
    "ru": [
      "только с аутентификацией парня вместо PAP"
    ]
  },
  {
    "time": [
      371.634037,
      373.138141
    ],
    "en": [
      "coffee tea"
    ],
    "ru": [
      "кофе чай"
    ]
  },
  {
    "time": [
      373.138141,
      379.140658
    ],
    "en": [
      "first I'll create the user account that SP r2 will use to authenticate"
    ],
    "ru": [
      "сначала я создам учетную запись пользователя, которую SP r2 будет использовать для аутентификации"
    ]
  },
  {
    "time": [
      379.140658,
      383.42576
    ],
    "en": [
      "remember the username should be the same as the remote routers hostname"
    ],
    "ru": [
      "помните, что имя пользователя должно быть таким же, как имя хоста удаленного маршрутизатора"
    ]
  },
  {
    "time": [
      383.42576,
      386.420635
    ],
    "en": [
      "so username SPR 2"
    ],
    "ru": [
      "так имя пользователя SPR 2"
    ]
  },
  {
    "time": [
      386.420635,
      391.057528
    ],
    "en": [
      "and then the password should be the same on both route"
    ],
    "ru": [
      "и тогда пароль должен быть одинаковым на обоих маршрутах"
    ]
  },
  {
    "time": [
      391.057528,
      394.754762
    ],
    "en": [
      "in this case password CCNA"
    ],
    "ru": [
      "в этом случае пароль CCNA"
    ]
  },
  {
    "time": [
      394.754762,
      398.763832
    ],
    "en": [
      "interface multi-link 1"
    ],
    "ru": [
      "интерфейс multi-link 1"
    ]
  },
  {
    "time": [
      398.763832,
      401.772041
    ],
    "en": [
      "PPP multi-link"
    ],
    "ru": [
      "Многоканальный PPP"
    ]
  },
  {
    "time": [
      401.772041,
      405.255374
    ],
    "en": [
      "PPP multi-link group 1"
    ],
    "ru": [
      "Многоканальная группа PPP 1"
    ]
  },
  {
    "time": [
      405.255374,
      408.772449
    ],
    "en": [
      "PPP authentication chap"
    ],
    "ru": [
      "Глава об аутентификации PPP"
    ]
  },
  {
    "time": [
      408.772449,
      411.755669
    ],
    "en": [
      "and finally the IP address"
    ],
    "ru": [
      "и, наконец, IP-адрес"
    ]
  },
  {
    "time": [
      411.755669,
      420.270113
    ],
    "en": [
      "IP address 200 0 to 255 255 dot 255 dot 255"
    ],
    "ru": [
      "IP-адрес 200 от 0 до 255 255 точек 255 точек 255"
    ]
  },
  {
    "time": [
      420.270113,
      435.773785
    ],
    "en": [
      "in there's the IP address followed by chap authentication"
    ],
    "ru": [
      "там IP-адрес, за которым следует аутентификация главы"
    ]
  },
  {
    "time": [
      435.773785,
      438.686165
    ],
    "en": [
      "and our multi-link configuration"
    ],
    "ru": [
      "и наша многосвязная конфигурация"
    ]
  },
  {
    "time": [
      438.686165,
      440.2507
    ],
    "en": [
      "looks good"
    ],
    "ru": [
      "выглядит неплохо"
    ]
  },
  {
    "time": [
      440.2507,
      444.782264
    ],
    "en": [
      "next we just have to prepare the physical interfaces"
    ],
    "ru": [
      "далее нам просто нужно подготовить физические интерфейсы"
    ]
  },
  {
    "time": [
      444.782264,
      448.109249
    ],
    "en": [
      "interface s10"
    ],
    "ru": [
      "интерфейс s10"
    ]
  },
  {
    "time": [
      448.109249,
      453.832922
    ],
    "en": [
      "encapsulation PPP PPP multi-link group 1"
    ],
    "ru": [
      "инкапсуляция PPP PPP multi-link group 1"
    ]
  },
  {
    "time": [
      453.832922,
      455.343035
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      455.343035,
      458.373489
    ],
    "en": [
      "interface s1 1"
    ],
    "ru": [
      "интерфейс s1 1"
    ]
  },
  {
    "time": [
      458.373489,
      461.379271
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      461.379271,
      464.884509
    ],
    "en": [
      "PPP multi-link group 1"
    ],
    "ru": [
      "Многоканальная группа PPP 1"
    ]
  },
  {
    "time": [
      464.884509,
      466.391698
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      466.391698,
      469.979838
    ],
    "en": [
      "and ok let's confirm"
    ],
    "ru": [
      "и хорошо, давайте подтвердим"
    ]
  },
  {
    "time": [
      469.979838,
      472.901403
    ],
    "en": [
      "show PPP all"
    ],
    "ru": [
      "показать PPP все"
    ]
  },
  {
    "time": [
      472.901403,
      478.659203
    ],
    "en": [
      "again our physical interfaces as well as the multi link interface"
    ],
    "ru": [
      "снова наши физические интерфейсы, а также многоканальный интерфейс"
    ]
  },
  {
    "time": [
      478.659203,
      480.526097
    ],
    "en": [
      "all have the same peer address"
    ],
    "ru": [
      "у всех один и тот же одноранговый адрес"
    ]
  },
  {
    "time": [
      480.526097,
      482.338319
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
      480.526097,
      482.338319
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
      482.338319,
      485.33528
    ],
    "en": [
      "and that peers name is spr to"
    ],
    "ru": [
      "и имя этого партнера - spr to"
    ]
  },
  {
    "time": [
      485.33528,
      489.214963
    ],
    "en": [
      "show PPP multi-link"
    ],
    "ru": [
      "показать PPP multi-link"
    ]
  },
  {
    "time": [
      489.214963,
      493.499861
    ],
    "en": [
      "the remote user name of SPR 2 again"
    ],
    "ru": [
      "имя удаленного пользователя SPR 2 снова"
    ]
  },
  {
    "time": [
      493.499861,
      496.18299
    ],
    "en": [
      "our local user name of r2"
    ],
    "ru": [
      "наше локальное имя пользователя r2"
    ]
  },
  {
    "time": [
      496.18299,
      499.023647
    ],
    "en": [
      "and down here the two member links"
    ],
    "ru": [
      "и здесь две ссылки на членство"
    ]
  },
  {
    "time": [
      499.023647,
      502.271493
    ],
    "en": [
      "serial 1 0 and 1 1"
    ],
    "ru": [
      "серийный 1 0 и 1 1"
    ]
  },
  {
    "time": [
      502.271493,
      506.327955
    ],
    "en": [
      "let's try to ping SPR to"
    ],
    "ru": [
      "давайте попробуем пинговать SPR на"
    ]
  },
  {
    "time": [
      506.327955,
      509.52655
    ],
    "en": [
      "ping 201"
    ],
    "ru": [
      "пинг 201"
    ]
  },
  {
    "time": [
      509.52655,
      513.566844
    ],
    "en": [
      "ok no problems here"
    ],
    "ru": [
      "хорошо, здесь нет проблем"
    ]
  },
  {
    "time": [
      513.566844,
      518.811062
    ],
    "en": [
      "now let's configure static default routes on our routers"
    ],
    "ru": [
      "теперь давайте настроим статические маршруты по умолчанию на наших роутерах"
    ]
  },
  {
    "time": [
      518.811062,
      520.521833
    ],
    "en": [
      "so that they can reach each other"
    ],
    "ru": [
      "чтобы они могли достучаться друг до друга"
    ]
  },
  {
    "time": [
      520.521833,
      522.435688
    ],
    "en": [
      "via the service provider network"
    ],
    "ru": [
      "через сеть поставщика услуг"
    ]
  },
  {
    "time": [
      522.435688,
      524.968613
    ],
    "en": [
      "here on r2 first"
    ],
    "ru": [
      "здесь на r2 сначала"
    ]
  },
  {
    "time": [
      524.968613,
      533.249724
    ],
    "en": [
      "compte IP route oh-oh-oh-oh-oh-oh-oh-oh-oh"
    ],
    "ru": [
      "Compte IP route ой-ой-ой-ой-ой-ой-ой-ой-ой"
    ]
  },
  {
    "time": [
      533.249724,
      537.458204
    ],
    "en": [
      "and the next hop is 201"
    ],
    "ru": [
      "и следующий переход - 201"
    ]
  },
  {
    "time": [
      537.458204,
      540.485415
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      540.485415,
      548.449701
    ],
    "en": [
      "there's our default route 200 g o / o"
    ],
    "ru": [
      "есть наш маршрут по умолчанию 200 г о / о"
    ]
  },
  {
    "time": [
      548.449701,
      551.576776
    ],
    "en": [
      "next let's configure it on our one"
    ],
    "ru": [
      "далее давайте настроим его на нашем"
    ]
  },
  {
    "time": [
      551.576776,
      561.147048
    ],
    "en": [
      "coughed e IP route oh-oh-oh-oh-oh-oh-oh-oh-oh"
    ],
    "ru": [
      "кашлянул е IP маршрут ой-ой-ой-ой-ой-ой-ой-ой-ой"
    ]
  },
  {
    "time": [
      561.147048,
      564.103783
    ],
    "en": [
      "the next hop is 101"
    ],
    "ru": [
      "следующий прыжок - 101"
    ]
  },
  {
    "time": [
      564.103783,
      567.295642
    ],
    "en": [
      "do show IP rent"
    ],
    "ru": [
      "показывать аренду IP"
    ]
  },
  {
    "time": [
      567.295642,
      569.498885
    ],
    "en": [
      "there's the default route"
    ],
    "ru": [
      "есть маршрут по умолчанию"
    ]
  },
  {
    "time": [
      569.498885,
      572.719724
    ],
    "en": [
      "let's try a ping to r2 from r1"
    ],
    "ru": [
      "давайте попробуем пинг на r2 от r1"
    ]
  },
  {
    "time": [
      572.719724,
      576.869361
    ],
    "en": [
      "do ping 200 go to"
    ],
    "ru": [
      "сделать пинг 200 перейти к"
    ]
  },
  {
    "time": [
      576.869361,
      582.870359
    ],
    "en": [
      "great looks like our multi-link PPP configuration is working"
    ],
    "ru": [
      "отлично выглядит, как будто наша конфигурация multi-link PPP работает"
    ]
  },
  {
    "time": [
      582.870359,
      584.518907
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
      584.518907,
      587.558204
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      587.558204,
      591.07376
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      591.07376,
      595.74342
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
      595.74342,
      601.754758
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
      601.754758,
      607.98664
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      607.98664,
      617.249179
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
      617.249179,
      617.249179
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
      617.249179,
      617.249179
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
      617.249179,
      617.249179
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]