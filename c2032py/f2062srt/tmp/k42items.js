let objs = [
  {
    "time": [
      0.0,
      4.433401
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
      4.433401,
      10.827686
    ],
    "en": [
      "once again for this video I will be using gns3 not packet tracer"
    ],
    "ru": [
      "еще раз для этого видео я буду использовать gns3, а не трассировщик пакетов"
    ]
  },
  {
    "time": [
      10.827686,
      15.799817
    ],
    "en": [
      "packet tracer is great but there are many things which it doesn't support"
    ],
    "ru": [
      "пакетный трассировщик хорош, но есть много вещей, которые он не поддерживает"
    ]
  },
  {
    "time": [
      15.799817,
      23.696869
    ],
    "en": [
      "such as multi-link PPP from the previous lab and pppoe which we will configure in this lab"
    ],
    "ru": [
      "такие как multi-link PPP из предыдущей лабораторной работы и pppoe, которую мы настроим в этой лабораторной работе."
    ]
  },
  {
    "time": [
      23.696869,
      28.259658
    ],
    "en": [
      "you can download the gns3 file from the link in the description"
    ],
    "ru": [
      "вы можете скачать файл gns3 по ссылке в описании"
    ]
  },
  {
    "time": [
      28.259658,
      32.585894
    ],
    "en": [
      "I will also include the name of the iOS image file I used"
    ],
    "ru": [
      "Я также включу имя файла изображения iOS, который я использовал"
    ]
  },
  {
    "time": [
      32.585894,
      35.906347
    ],
    "en": [
      "however I cannot legally give you the file itself"
    ],
    "ru": [
      "однако я не могу юридически передать вам сам файл"
    ]
  },
  {
    "time": [
      35.906347,
      39.639226
    ],
    "en": [
      "if you need help getting gns3 setup"
    ],
    "ru": [
      "если вам нужна помощь в настройке gns3"
    ]
  },
  {
    "time": [
      39.639226,
      42.060722
    ],
    "en": [
      "please look around on google or youtube"
    ],
    "ru": [
      "пожалуйста, посмотрите вокруг в Google или на YouTube"
    ]
  },
  {
    "time": [
      42.060722,
      46.600835
    ],
    "en": [
      "david bumble for example has many videos on gns3 setup"
    ],
    "ru": [
      "у Дэвида Бамбла, например, есть много видео по настройке gns3"
    ]
  },
  {
    "time": [
      46.600835,
      51.324054
    ],
    "en": [
      "in this lab we will configure pppoe"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим pppoe"
    ]
  },
  {
    "time": [
      51.324054,
      54.695302
    ],
    "en": [
      "which stands for point-to-point protocol over Ethernet"
    ],
    "ru": [
      "что означает протокол точка-точка через Ethernet."
    ]
  },
  {
    "time": [
      54.695302,
      61.231151
    ],
    "en": [
      "the original PPP which we have been configuring so far was used on serial interfaces"
    ],
    "ru": [
      "оригинальный PPP, который мы настраивали до сих пор, использовался на последовательных интерфейсах"
    ]
  },
  {
    "time": [
      61.231151,
      68.98063
    ],
    "en": [
      "pppoe however allows us to encapsulate PPP into Ethernet frames"
    ],
    "ru": [
      "Однако pppoe позволяет нам инкапсулировать PPP в кадры Ethernet."
    ]
  },
  {
    "time": [
      68.98063,
      73.163351
    ],
    "en": [
      "the service provider routers have been pre-configured"
    ],
    "ru": [
      "маршрутизаторы поставщика услуг были предварительно настроены"
    ]
  },
  {
    "time": [
      73.163351,
      75.651786
    ],
    "en": [
      "so let's configure the to client routers"
    ],
    "ru": [
      "Итак, давайте настроим клиентские маршрутизаторы"
    ]
  },
  {
    "time": [
      75.651786,
      81.606049
    ],
    "en": [
      "r1 and r2 to use pppoe for their connections to the service provider"
    ],
    "ru": [
      "r1 и r2 для использования pppoe для своих подключений к поставщику услуг"
    ]
  },
  {
    "time": [
      81.606049,
      83.131876
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
      83.131876,
      86.302556
    ],
    "en": [
      "I'll configure r1 first"
    ],
    "ru": [
      "Я сначала настрою r1"
    ]
  },
  {
    "time": [
      86.302556,
      89.377636
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
      89.377636,
      95.464552
    ],
    "en": [
      "we are instructed to configure pppoe with two-way PAP authentication"
    ],
    "ru": [
      "мы проинструктированы настроить pppoe с двусторонней аутентификацией PAP"
    ]
  },
  {
    "time": [
      95.464552,
      98.962262
    ],
    "en": [
      "SP r1 is already configured"
    ],
    "ru": [
      "SP r1 уже настроен"
    ]
  },
  {
    "time": [
      98.962262,
      104.077114
    ],
    "en": [
      "and is using a host name of packet and a password of tracer to authenticate"
    ],
    "ru": [
      "и использует имя хоста пакета и пароль трассировщика для аутентификации"
    ]
  },
  {
    "time": [
      104.077114,
      106.874528
    ],
    "en": [
      "so let's configure that user account on r1"
    ],
    "ru": [
      "Итак, давайте настроим эту учетную запись пользователя на r1"
    ]
  },
  {
    "time": [
      106.874528,
      112.22115
    ],
    "en": [
      "user name packet password tracer"
    ],
    "ru": [
      "отслеживание паролей пакетов имени пользователя"
    ]
  },
  {
    "time": [
      112.22115,
      118.680719
    ],
    "en": [
      "okay now to configure pppoe we need to configure a dialer interface"
    ],
    "ru": [
      "хорошо, теперь, чтобы настроить pppoe, нам нужно настроить интерфейс номеронабирателя"
    ]
  },
  {
    "time": [
      118.680719,
      121.728247
    ],
    "en": [
      "first interface dialer one"
    ],
    "ru": [
      "первый интерфейс номеронабиратель один"
    ]
  },
  {
    "time": [
      121.728247,
      124.866637
    ],
    "en": [
      "this is a logical interface"
    ],
    "ru": [
      "это логический интерфейс"
    ]
  },
  {
    "time": [
      124.866637,
      128.873576
    ],
    "en": [
      "which we will later bind to the physical interface g00"
    ],
    "ru": [
      "который мы позже привяжем к физическому интерфейсу g00"
    ]
  },
  {
    "time": [
      128.873576,
      133.391694
    ],
    "en": [
      "first we have to lower the MTU"
    ],
    "ru": [
      "сначала нам нужно снизить MTU"
    ]
  },
  {
    "time": [
      133.391694,
      135.861852
    ],
    "en": [
      "the maximum transmission unit"
    ],
    "ru": [
      "максимальный блок передачи"
    ]
  },
  {
    "time": [
      135.861852,
      139.888179
    ],
    "en": [
      "from 1500 to 1492"
    ],
    "ru": [
      "с 1500 по 1492 г."
    ]
  },
  {
    "time": [
      139.888179,
      145.36158
    ],
    "en": [
      "this is because pppoe adds another 8 byte header"
    ],
    "ru": [
      "это потому, что pppoe добавляет еще 8-байтовый заголовок"
    ]
  },
  {
    "time": [
      145.36158,
      150.03514
    ],
    "en": [
      "so MTU 1492"
    ],
    "ru": [
      "итак MTU 1492"
    ]
  },
  {
    "time": [
      150.03514,
      153.638972
    ],
    "en": [
      "then set the encapsulation"
    ],
    "ru": [
      "затем установите инкапсуляцию"
    ]
  },
  {
    "time": [
      153.638972,
      156.129652
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
      156.129652,
      159.148745
    ],
    "en": [
      "next the IP address"
    ],
    "ru": [
      "следующий IP-адрес"
    ]
  },
  {
    "time": [
      159.148745,
      164.92031
    ],
    "en": [
      "the client r1 will negotiate its IP address with SP r1"
    ],
    "ru": [
      "клиент r1 согласовывает свой IP-адрес с SP r1"
    ]
  },
  {
    "time": [
      164.92031,
      169.773643
    ],
    "en": [
      "with this command IP address negotiated"
    ],
    "ru": [
      "с помощью этой команды согласовывается IP-адрес"
    ]
  },
  {
    "time": [
      169.773643,
      173.13913
    ],
    "en": [
      "next let's enable PAP authentication"
    ],
    "ru": [
      "далее давайте включим аутентификацию PAP"
    ]
  },
  {
    "time": [
      173.13913,
      177.8665
    ],
    "en": [
      "PPP authentication PAP"
    ],
    "ru": [
      "Аутентификация PPP PAP"
    ]
  },
  {
    "time": [
      177.8665,
      183.647293
    ],
    "en": [
      "then send the username and password as indicated in the topology diagram"
    ],
    "ru": [
      "затем отправьте имя пользователя и пароль, как указано на схеме топологии"
    ]
  },
  {
    "time": [
      183.647293,
      190.146295
    ],
    "en": [
      "PPP PAP sent username Cisco password CCNA"
    ],
    "ru": [
      "PPP PAP отправил имя пользователя Пароль Cisco CCNA"
    ]
  },
  {
    "time": [
      190.146295,
      196.168722
    ],
    "en": [
      "now the last step is to assign this to dialer pool 1"
    ],
    "ru": [
      "теперь последний шаг - назначить это пулу номеронабирателя 1"
    ]
  },
  {
    "time": [
      196.168722,
      200.666885
    ],
    "en": [
      "which we will use later to link it to the physical interface"
    ],
    "ru": [
      "который мы будем использовать позже, чтобы связать его с физическим интерфейсом"
    ]
  },
  {
    "time": [
      200.666885,
      204.432055
    ],
    "en": [
      "dialer pool 1 is the command"
    ],
    "ru": [
      "пул номеронабирателя 1 - это команда"
    ]
  },
  {
    "time": [
      204.432055,
      205.652418
    ],
    "en": [
      "let's check"
    ],
    "ru": [
      "Давайте проверим"
    ]
  },
  {
    "time": [
      205.652418,
      207.459152
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      207.459152,
      209.388563
    ],
    "en": [
      "interface dialer 1"
    ],
    "ru": [
      "интерфейс номеронабирателя 1"
    ]
  },
  {
    "time": [
      209.388563,
      212.247837
    ],
    "en": [
      "there's the configuration"
    ],
    "ru": [
      "вот конфигурация"
    ]
  },
  {
    "time": [
      212.247837,
      218.452599
    ],
    "en": [
      "MTU 1492 IP address negotiated"
    ],
    "ru": [
      "MTU 1492 IP-адрес согласован"
    ]
  },
  {
    "time": [
      218.452599,
      220.946703
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
      220.946703,
      222.455819
    ],
    "en": [
      "dialer pool 1"
    ],
    "ru": [
      "пул дозвона 1"
    ]
  },
  {
    "time": [
      222.455819,
      225.466771
    ],
    "en": [
      "and our PAP authentication"
    ],
    "ru": [
      "и наша аутентификация PAP"
    ]
  },
  {
    "time": [
      225.466771,
      229.459266
    ],
    "en": [
      "ok that's all for the dialer interface"
    ],
    "ru": [
      "хорошо, это все для интерфейса номеронабирателя"
    ]
  },
  {
    "time": [
      229.459266,
      231.954368
    ],
    "en": [
      "now let's link it to G 0 0"
    ],
    "ru": [
      "теперь давайте свяжем его с G 0 0"
    ]
  },
  {
    "time": [
      231.954368,
      234.292576
    ],
    "en": [
      "interface G 0 0"
    ],
    "ru": [
      "интерфейс G 0 0"
    ]
  },
  {
    "time": [
      234.292576,
      237.180966
    ],
    "en": [
      "there's just one command we need here"
    ],
    "ru": [
      "здесь нам нужна только одна команда"
    ]
  },
  {
    "time": [
      237.180966,
      240.023506
    ],
    "en": [
      "pppoe client"
    ],
    "ru": [
      "клиент pppoe"
    ]
  },
  {
    "time": [
      240.023506,
      242.908381
    ],
    "en": [
      "dial pool number 1"
    ],
    "ru": [
      "набрать номер пула 1"
    ]
  },
  {
    "time": [
      242.908381,
      246.414935
    ],
    "en": [
      "ok let's enable the interface"
    ],
    "ru": [
      "хорошо, давайте включим интерфейс"
    ]
  },
  {
    "time": [
      246.414935,
      247.920762
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
      247.920762,
      256.427996
    ],
    "en": [
      "end let's check the IP address the interface received from the service provider"
    ],
    "ru": [
      "конец проверим IP-адрес интерфейса, полученный от поставщика услуг"
    ]
  },
  {
    "time": [
      256.427996,
      259.428948
    ],
    "en": [
      "show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      259.428948,
      264.376499
    ],
    "en": [
      "it's 102 on the dialer interface"
    ],
    "ru": [
      "это 102 на интерфейсе номеронабирателя"
    ]
  },
  {
    "time": [
      264.376499,
      267.898109
    ],
    "en": [
      "but what's this virtual access 1 entered"
    ],
    "ru": [
      "но что это за виртуальный доступ 1 вошел"
    ]
  },
  {
    "time": [
      267.898109,
      270.799537
    ],
    "en": [
      "well it was automatically created"
    ],
    "ru": [
      "ну это было автоматически создано"
    ]
  },
  {
    "time": [
      270.799537,
      275.503687
    ],
    "en": [
      "basically the dialer interface provides layer 3 information"
    ],
    "ru": [
      "в основном интерфейс номеронабирателя предоставляет информацию уровня 3"
    ]
  },
  {
    "time": [
      275.503687,
      279.472417
    ],
    "en": [
      "and the virtual access interface provides layer 2 information"
    ],
    "ru": [
      "а интерфейс виртуального доступа предоставляет информацию уровня 2"
    ]
  },
  {
    "time": [
      279.472417,
      283.513256
    ],
    "en": [
      "don't worry too much about the details about how it works"
    ],
    "ru": [
      "не беспокойтесь о деталях того, как это работает"
    ]
  },
  {
    "time": [
      283.513256,
      285.454729
    ],
    "en": [
      "as long as you can configure it"
    ],
    "ru": [
      "пока вы можете его настроить"
    ]
  },
  {
    "time": [
      285.454729,
      286.701215
    ],
    "en": [
      "you should be okay"
    ],
    "ru": [
      "ты должен быть в порядке"
    ]
  },
  {
    "time": [
      286.701215,
      289.676453
    ],
    "en": [
      "let's try to ping the service provider"
    ],
    "ru": [
      "давайте попробуем пинговать поставщика услуг"
    ]
  },
  {
    "time": [
      289.676453,
      293.676906
    ],
    "en": [
      "ping 100 0.1"
    ],
    "ru": [
      "пинг 100 0,1"
    ]
  },
  {
    "time": [
      293.676906,
      296.751147
    ],
    "en": [
      "okay looks good"
    ],
    "ru": [
      "хорошо выглядит хорошо"
    ]
  },
  {
    "time": [
      296.751147,
      299.660512
    ],
    "en": [
      "next let's configure our -"
    ],
    "ru": [
      "затем давайте настроим наш -"
    ]
  },
  {
    "time": [
      299.660512,
      304.70092
    ],
    "en": [
      "the only difference will be chap authentication instead of path"
    ],
    "ru": [
      "единственная разница будет заключаться в аутентификации главы вместо пути"
    ]
  },
  {
    "time": [
      304.70092,
      307.155319
    ],
    "en": [
      "golf tee"
    ],
    "ru": [
      "футболка для гольфа"
    ]
  },
  {
    "time": [
      307.155319,
      313.38058
    ],
    "en": [
      "I'll make the user account remember the username must be the host name of the other router"
    ],
    "ru": [
      "Я заставлю учетную запись пользователя помнить, что имя пользователя должно быть именем хоста другого маршрутизатора."
    ]
  },
  {
    "time": [
      313.38058,
      314.494911
    ],
    "en": [
      "SP r2"
    ],
    "ru": [
      "SP r2"
    ]
  },
  {
    "time": [
      314.494911,
      319.233459
    ],
    "en": [
      "and the password must be the same for both routers CCNA in this case"
    ],
    "ru": [
      "и пароль должен быть одинаковым для обоих маршрутизаторов CCNA в этом случае"
    ]
  },
  {
    "time": [
      319.233459,
      325.122121
    ],
    "en": [
      "so user name SPR - password CCNA"
    ],
    "ru": [
      "итак имя пользователя SPR - пароль CCNA"
    ]
  },
  {
    "time": [
      325.122121,
      329.130239
    ],
    "en": [
      "next let's configure the dialer interface"
    ],
    "ru": [
      "далее давайте настроим интерфейс номеронабирателя"
    ]
  },
  {
    "time": [
      329.130239,
      331.149264
    ],
    "en": [
      "interface dialer 1"
    ],
    "ru": [
      "интерфейс номеронабирателя 1"
    ]
  },
  {
    "time": [
      331.149264,
      338.387177
    ],
    "en": [
      "MTU 1492 encapsulation PPP"
    ],
    "ru": [
      "MTU 1492 инкапсуляция PPP"
    ]
  },
  {
    "time": [
      338.387177,
      342.397722
    ],
    "en": [
      "IP address negotiated"
    ],
    "ru": [
      "IP-адрес согласован"
    ]
  },
  {
    "time": [
      342.397722,
      345.910737
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
      345.910737,
      348.49432
    ],
    "en": [
      "okay and finally"
    ],
    "ru": [
      "хорошо и наконец"
    ]
  },
  {
    "time": [
      348.49432,
      350.047948
    ],
    "en": [
      "dialer pool 1"
    ],
    "ru": [
      "пул дозвона 1"
    ]
  },
  {
    "time": [
      350.047948,
      354.51525
    ],
    "en": [
      "now let's link it to the physical interface"
    ],
    "ru": [
      "теперь давайте свяжем его с физическим интерфейсом"
    ]
  },
  {
    "time": [
      354.51525,
      356.802574
    ],
    "en": [
      "interface g00"
    ],
    "ru": [
      "интерфейс g00"
    ]
  },
  {
    "time": [
      356.802574,
      359.839104
    ],
    "en": [
      "pppoe client"
    ],
    "ru": [
      "клиент pppoe"
    ]
  },
  {
    "time": [
      359.839104,
      361.895045
    ],
    "en": [
      "dial pool number 1"
    ],
    "ru": [
      "набрать номер пула 1"
    ]
  },
  {
    "time": [
      361.895045,
      363.866156
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
      363.866156,
      366.035295
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
      366.035295,
      371.62305
    ],
    "en": [
      "ok so let's see what IP address the dialer interface got from SPR to"
    ],
    "ru": [
      "хорошо, давайте посмотрим, какой IP-адрес получил интерфейс номеронабирателя от SPR до"
    ]
  },
  {
    "time": [
      371.62305,
      374.660827
    ],
    "en": [
      "show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      374.660827,
      377.894682
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
      374.660827,
      377.894682
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
      377.894682,
      382.615567
    ],
    "en": [
      "and again notice the virtual access 1 interface was created as well"
    ],
    "ru": [
      "и снова обратите внимание, что интерфейс виртуального доступа 1 также был создан"
    ]
  },
  {
    "time": [
      382.615567,
      384.830805
    ],
    "en": [
      "here's one more thing"
    ],
    "ru": [
      "вот еще одна вещь"
    ]
  },
  {
    "time": [
      384.830805,
      388.39407
    ],
    "en": [
      "show interface dialer one"
    ],
    "ru": [
      "показать интерфейс номеронабирателя один"
    ]
  },
  {
    "time": [
      388.39407,
      393.308492
    ],
    "en": [
      "notice here it says bound to"
    ],
    "ru": [
      "обратите внимание, здесь говорится, что он привязан к"
    ]
  },
  {
    "time": [
      393.308492,
      396.16441
    ],
    "en": [
      "and then indicates the virtual access 1 interface"
    ],
    "ru": [
      "а затем указывает интерфейс виртуального доступа 1"
    ]
  },
  {
    "time": [
      396.16441,
      398.578787
    ],
    "en": [
      "ok let's try a ping"
    ],
    "ru": [
      "хорошо, давай попробуем пинг"
    ]
  },
  {
    "time": [
      398.578787,
      402.203637
    ],
    "en": [
      "ping 200 oh you won"
    ],
    "ru": [
      "пинг 200 о, ты выиграл"
    ]
  },
  {
    "time": [
      402.203637,
      404.761664
    ],
    "en": [
      "great it works"
    ],
    "ru": [
      "отлично работает"
    ]
  },
  {
    "time": [
      404.761664,
      409.157673
    ],
    "en": [
      "now like in the previous lab I'll make static default routes"
    ],
    "ru": [
      "теперь, как и в предыдущей лабораторной работе, я сделаю статические маршруты по умолчанию"
    ]
  },
  {
    "time": [
      409.157673,
      413.991846
    ],
    "en": [
      "pointing to the service provider and then try to ping from r1 to r2"
    ],
    "ru": [
      "указывая на поставщика услуг, а затем попробуйте выполнить эхо-запрос с r1 на r2"
    ]
  },
  {
    "time": [
      413.991846,
      424.757129
    ],
    "en": [
      "call 40 IP route oh-oh-oh-oh-oh-oh 200 200 oh oh one"
    ],
    "ru": [
      "вызов 40 IP-маршрут ой-ой-ой-ой-ой-ой 200200 ой ой один"
    ]
  },
  {
    "time": [
      424.757129,
      427.218671
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
      427.218671,
      429.394249
    ],
    "en": [
      "there it is"
    ],
    "ru": [
      "вот оно"
    ]
  },
  {
    "time": [
      429.394249,
      431.286766
    ],
    "en": [
      "next on r1"
    ],
    "ru": [
      "следующий на r1"
    ]
  },
  {
    "time": [
      431.286766,
      441.754952
    ],
    "en": [
      "coughed e IP route oh-oh-oh-oh-oh-oh-oh-oh-oh 101"
    ],
    "ru": [
      "кашлянул е IP маршрут о-о-о-о-о-о-о-о-о 101"
    ]
  },
  {
    "time": [
      441.754952,
      444.777175
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
      444.777175,
      447.274272
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
      447.274272,
      449.882345
    ],
    "en": [
      "okay let's try that ping to our to"
    ],
    "ru": [
      "хорошо, давай попробуем пинг к нашему"
    ]
  },
  {
    "time": [
      449.882345,
      454.727333
    ],
    "en": [
      "do ping 202"
    ],
    "ru": [
      "сделать пинг 202"
    ]
  },
  {
    "time": [
      454.727333,
      456.239487
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      456.239487,
      460.251505
    ],
    "en": [
      "our pppoe configuration was successful"
    ],
    "ru": [
      "наша конфигурация pppoe прошла успешно"
    ]
  },
  {
    "time": [
      460.251505,
      461.758081
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
      461.758081,
      468.977379
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
      468.977379,
      473.350939
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
      473.350939,
      478.855519
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
      478.855519,
      486.352979
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
      486.352979,
      494.387401
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
      494.387401,
      494.387401
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
      494.387401,
      494.387401
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
      494.387401,
      494.387401
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]