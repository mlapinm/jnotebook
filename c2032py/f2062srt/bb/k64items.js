let objs = [
  {
    "time": [
      0.0,
      3.0
    ],
    "en": [
      "welcome to this free gns3 practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию gns3"
    ]
  },
  {
    "time": [
      3.0,
      7.0
    ],
    "en": [
      "for the CCNA once again for this video I"
    ],
    "ru": [
      "для CCNA еще раз для этого видео я"
    ]
  },
  {
    "time": [
      7.0,
      11.0
    ],
    "en": [
      "will be using gns3 not packet tracer"
    ],
    "ru": [
      "будет использовать gns3, а не пакетный трассировщик"
    ]
  },
  {
    "time": [
      11.0,
      13.0
    ],
    "en": [
      "packet tracer is great but there are"
    ],
    "ru": [
      "пакетный трассировщик хорош, но есть"
    ]
  },
  {
    "time": [
      13.0,
      15.0
    ],
    "en": [
      "many things which it doesn't support"
    ],
    "ru": [
      "многие вещи, которые он не поддерживает"
    ]
  },
  {
    "time": [
      15.0,
      19.0
    ],
    "en": [
      "such as multi-link PPP from the previous"
    ],
    "ru": [
      "например, многоканальный PPP из предыдущего"
    ]
  },
  {
    "time": [
      19.0,
      22.0
    ],
    "en": [
      "lab and pppoe which we will configure in"
    ],
    "ru": [
      "lab и pppoe, которые мы настроим в"
    ]
  },
  {
    "time": [
      22.0,
      26.0
    ],
    "en": [
      "this lab you can download the gns3 file"
    ],
    "ru": [
      "в этой лабораторной работе вы можете скачать файл gns3"
    ]
  },
  {
    "time": [
      26.0,
      29.0
    ],
    "en": [
      "from the link in the description I will"
    ],
    "ru": [
      "по ссылке в описании буду"
    ]
  },
  {
    "time": [
      29.0,
      31.0
    ],
    "en": [
      "also include the name of the iOS image"
    ],
    "ru": [
      "также укажите имя образа iOS"
    ]
  },
  {
    "time": [
      31.0,
      34.0
    ],
    "en": [
      "file I used however I cannot legally"
    ],
    "ru": [
      "файл, который я использовал, но не могу по закону"
    ]
  },
  {
    "time": [
      34.0,
      37.0
    ],
    "en": [
      "give you the file itself if you need"
    ],
    "ru": [
      "дайте вам сам файл, если вам нужно"
    ]
  },
  {
    "time": [
      37.0,
      40.0
    ],
    "en": [
      "help getting gns3 setup please look"
    ],
    "ru": [
      "помогите получить настройку gns3, пожалуйста, посмотрите"
    ]
  },
  {
    "time": [
      40.0,
      43.0
    ],
    "en": [
      "around on google or youtube david bumble"
    ],
    "ru": [
      "в Google или на YouTube Дэвид Бамбл"
    ]
  },
  {
    "time": [
      43.0,
      45.0
    ],
    "en": [
      "for example has many videos on gns3"
    ],
    "ru": [
      "например есть много видео по gns3"
    ]
  },
  {
    "time": [
      45.0,
      49.0
    ],
    "en": [
      "setup in this lab we will configure"
    ],
    "ru": [
      "настройку в этой лабораторной работе мы настроим"
    ]
  },
  {
    "time": [
      49.0,
      52.0
    ],
    "en": [
      "pppoe which stands for point-to-point"
    ],
    "ru": [
      "pppoe, что означает точка-точка"
    ]
  },
  {
    "time": [
      52.0,
      56.0
    ],
    "en": [
      "protocol over Ethernet the original PPP"
    ],
    "ru": [
      "протокол через Ethernet оригинальный PPP"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "which we have been configuring so far"
    ],
    "ru": [
      "который мы настраивали до сих пор"
    ]
  },
  {
    "time": [
      59.0,
      63.0
    ],
    "en": [
      "was used on serial interfaces pppoe"
    ],
    "ru": [
      "использовался на последовательных интерфейсах pppoe"
    ]
  },
  {
    "time": [
      63.0,
      66.0
    ],
    "en": [
      "however allows us to encapsulate PPP"
    ],
    "ru": [
      "однако позволяет нам инкапсулировать PPP"
    ]
  },
  {
    "time": [
      66.0,
      70.0
    ],
    "en": [
      "into Ethernet frames the service"
    ],
    "ru": [
      "в Ethernet кадры службы"
    ]
  },
  {
    "time": [
      70.0,
      71.0
    ],
    "en": [
      "provider routers have been"
    ],
    "ru": [
      "маршрутизаторы провайдера были"
    ]
  },
  {
    "time": [
      71.0,
      74.0
    ],
    "en": [
      "pre-configured so let's configure the to"
    ],
    "ru": [
      "предварительно настроен, поэтому давайте настроим"
    ]
  },
  {
    "time": [
      74.0,
      78.0
    ],
    "en": [
      "client routers r1 and r2 to use pppoe"
    ],
    "ru": [
      "клиентские маршрутизаторы r1 и r2 для использования pppoe"
    ]
  },
  {
    "time": [
      78.0,
      80.0
    ],
    "en": [
      "for their connections to the service"
    ],
    "ru": [
      "за их связь с сервисом"
    ]
  },
  {
    "time": [
      80.0,
      84.0
    ],
    "en": [
      "provider let's get started I'll"
    ],
    "ru": [
      "провайдер давай начнем я"
    ]
  },
  {
    "time": [
      84.0,
      90.0
    ],
    "en": [
      "configure r1 first compte we are"
    ],
    "ru": [
      "сконфигурируйте r1 первый комп, мы"
    ]
  },
  {
    "time": [
      90.0,
      92.0
    ],
    "en": [
      "instructed to configure pppoe with"
    ],
    "ru": [
      "проинструктирован настроить pppoe с"
    ]
  },
  {
    "time": [
      92.0,
      97.0
    ],
    "en": [
      "two-way PAP authentication SP r1 is"
    ],
    "ru": [
      "двусторонняя аутентификация PAP SP r1"
    ]
  },
  {
    "time": [
      97.0,
      99.0
    ],
    "en": [
      "already configured and is using a host"
    ],
    "ru": [
      "уже настроен и использует хост"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "name of packet and a password of tracer"
    ],
    "ru": [
      "имя пакета и пароль трассировщика"
    ]
  },
  {
    "time": [
      102.0,
      105.0
    ],
    "en": [
      "to authenticate so let's configure that"
    ],
    "ru": [
      "для аутентификации, поэтому давайте настроим это"
    ]
  },
  {
    "time": [
      105.0,
      110.0
    ],
    "en": [
      "user account on r1 user name packet"
    ],
    "ru": [
      "учетная запись пользователя в пакете имени пользователя r1"
    ]
  },
  {
    "time": [
      110.0,
      114.0
    ],
    "en": [
      "password tracer okay now to configure"
    ],
    "ru": [
      "трассировщик паролей теперь можно настроить"
    ]
  },
  {
    "time": [
      114.0,
      117.0
    ],
    "en": [
      "pppoe we need to configure a dialer"
    ],
    "ru": [
      "pppoe нам нужно настроить звонилку"
    ]
  },
  {
    "time": [
      117.0,
      122.0
    ],
    "en": [
      "interface first interface dialer one"
    ],
    "ru": [
      "интерфейс первый интерфейс номеронабиратель один"
    ]
  },
  {
    "time": [
      122.0,
      125.0
    ],
    "en": [
      "this is a logical interface which we"
    ],
    "ru": [
      "это логический интерфейс, который мы"
    ]
  },
  {
    "time": [
      125.0,
      127.0
    ],
    "en": [
      "will later bind to the physical"
    ],
    "ru": [
      "позже привяжется к физическому"
    ]
  },
  {
    "time": [
      127.0,
      132.0
    ],
    "en": [
      "interface g00 first we have to lower the"
    ],
    "ru": [
      "интерфейс g00 сначала мы должны понизить"
    ]
  },
  {
    "time": [
      132.0,
      133.0
    ],
    "en": [
      "MTU"
    ],
    "ru": [
      "MTU"
    ]
  },
  {
    "time": [
      133.0,
      137.0
    ],
    "en": [
      "the maximum transmission unit from 1500"
    ],
    "ru": [
      "максимальная коробка передач от 1500"
    ]
  },
  {
    "time": [
      137.0,
      143.0
    ],
    "en": [
      "to 1492 this is because pppoe adds"
    ],
    "ru": [
      "до 1492 года это потому, что pppoe добавляет"
    ]
  },
  {
    "time": [
      143.0,
      150.0
    ],
    "en": [
      "another 8 byte header so MTU 1492"
    ],
    "ru": [
      "еще один 8-байтовый заголовок, поэтому MTU 1492"
    ]
  },
  {
    "time": [
      150.0,
      155.0
    ],
    "en": [
      "then set the encapsulation encapsulation"
    ],
    "ru": [
      "затем установите инкапсуляцию инкапсуляции"
    ]
  },
  {
    "time": [
      155.0,
      161.0
    ],
    "en": [
      "PPP next the IP address the client r1"
    ],
    "ru": [
      "PPP следующий IP-адрес клиента r1"
    ]
  },
  {
    "time": [
      161.0,
      164.0
    ],
    "en": [
      "will negotiate its IP address with SP r1"
    ],
    "ru": [
      "согласовывает свой IP-адрес с SP r1"
    ]
  },
  {
    "time": [
      164.0,
      170.0
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
      170.0,
      175.0
    ],
    "en": [
      "next let's enable PAP authentication PPP"
    ],
    "ru": [
      "далее давайте включим аутентификацию PAP PPP"
    ]
  },
  {
    "time": [
      175.0,
      179.0
    ],
    "en": [
      "authentication PAP then send the"
    ],
    "ru": [
      "PAP аутентификации, затем отправьте"
    ]
  },
  {
    "time": [
      179.0,
      181.0
    ],
    "en": [
      "username and password as indicated in"
    ],
    "ru": [
      "имя пользователя и пароль, как указано в"
    ]
  },
  {
    "time": [
      181.0,
      186.0
    ],
    "en": [
      "the topology diagram PPP PAP sent"
    ],
    "ru": [
      "диаграмма топологии, отправленная PPP PAP"
    ]
  },
  {
    "time": [
      186.0,
      192.0
    ],
    "en": [
      "username Cisco password CCNA now the"
    ],
    "ru": [
      "имя пользователя Пароль Cisco CCNA теперь"
    ]
  },
  {
    "time": [
      192.0,
      194.0
    ],
    "en": [
      "last step is to assign this to dialer"
    ],
    "ru": [
      "последний шаг - назначить это номеронабирателю"
    ]
  },
  {
    "time": [
      194.0,
      198.0
    ],
    "en": [
      "pool 1 which we will use later to link"
    ],
    "ru": [
      "пул 1, который мы будем использовать позже, чтобы связать"
    ]
  },
  {
    "time": [
      198.0,
      202.0
    ],
    "en": [
      "it to the physical interface dialer pool"
    ],
    "ru": [
      "это в пул дозвона физического интерфейса"
    ]
  },
  {
    "time": [
      202.0,
      207.0
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
      202.0,
      207.0
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
      209.0
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
      209.0,
      216.0
    ],
    "en": [
      "there's the configuration MTU 1492 IP"
    ],
    "ru": [
      "есть конфигурация MTU 1492 IP"
    ]
  },
  {
    "time": [
      216.0,
      220.0
    ],
    "en": [
      "address negotiated encapsulation PPP"
    ],
    "ru": [
      "адрес согласованная инкапсуляция PPP"
    ]
  },
  {
    "time": [
      220.0,
      225.0
    ],
    "en": [
      "dialer pool 1 and our PAP authentication"
    ],
    "ru": [
      "пул номеронабирателя 1 и наша аутентификация PAP"
    ]
  },
  {
    "time": [
      225.0,
      228.0
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
      228.0,
      233.0
    ],
    "en": [
      "now let's link it to G 0 0 interface G 0"
    ],
    "ru": [
      "теперь давайте свяжем его с G 0 0 интерфейсом G 0"
    ]
  },
  {
    "time": [
      233.0,
      237.0
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
      233.0,
      237.0
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
      237.0,
      244.0
    ],
    "en": [
      "pppoe client dial pool number 1 ok let's"
    ],
    "ru": [
      "pppoe client dial pool number 1 ОК, давай"
    ]
  },
  {
    "time": [
      244.0,
      250.0
    ],
    "en": [
      "enable the interface no shutdown end"
    ],
    "ru": [
      "включить интерфейс без завершения работы"
    ]
  },
  {
    "time": [
      250.0,
      253.0
    ],
    "en": [
      "let's check the IP address the interface"
    ],
    "ru": [
      "проверим IP адрес интерфейса"
    ]
  },
  {
    "time": [
      253.0,
      257.0
    ],
    "en": [
      "received from the service provider show"
    ],
    "ru": [
      "получено от поставщика услуг показать"
    ]
  },
  {
    "time": [
      257.0,
      263.0
    ],
    "en": [
      "IP interface brief it's 102 on the"
    ],
    "ru": [
      "Краткое описание IP-интерфейса, это 102 на"
    ]
  },
  {
    "time": [
      263.0,
      266.0
    ],
    "en": [
      "dialer interface but what's this virtual"
    ],
    "ru": [
      "интерфейс номеронабирателя но что это за виртуальный"
    ]
  },
  {
    "time": [
      266.0,
      267.0
    ],
    "en": [
      "access 1 entered"
    ],
    "ru": [
      "доступ 1 введен"
    ]
  },
  {
    "time": [
      267.0,
      270.0
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
      270.0,
      273.0
    ],
    "en": [
      "basically the dialer interface provides"
    ],
    "ru": [
      "в основном интерфейс номеронабирателя предоставляет"
    ]
  },
  {
    "time": [
      273.0,
      276.0
    ],
    "en": [
      "layer 3 information and the virtual"
    ],
    "ru": [
      "информация уровня 3 и виртуальный"
    ]
  },
  {
    "time": [
      276.0,
      278.0
    ],
    "en": [
      "access interface provides layer 2"
    ],
    "ru": [
      "интерфейс доступа обеспечивает уровень 2"
    ]
  },
  {
    "time": [
      278.0,
      281.0
    ],
    "en": [
      "information don't worry too much about"
    ],
    "ru": [
      "информация не беспокойтесь о"
    ]
  },
  {
    "time": [
      281.0,
      284.0
    ],
    "en": [
      "the details about how it works as long"
    ],
    "ru": [
      "подробности о том, как это работает, пока"
    ]
  },
  {
    "time": [
      284.0,
      285.0
    ],
    "en": [
      "as you can configure it you should be"
    ],
    "ru": [
      "как вы можете его настроить, вы должны быть"
    ]
  },
  {
    "time": [
      285.0,
      288.0
    ],
    "en": [
      "okay let's try to ping the service"
    ],
    "ru": [
      "хорошо, давай попробуем проверить связь с сервисом"
    ]
  },
  {
    "time": [
      288.0,
      296.0
    ],
    "en": [
      "provider ping 100 0.1 okay looks good"
    ],
    "ru": [
      "провайдер ping 100 0,1 хорошо выглядит хорошо"
    ]
  },
  {
    "time": [
      296.0,
      300.0
    ],
    "en": [
      "next let's configure our - the only"
    ],
    "ru": [
      "далее настроим наш - единственный"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "difference will be chap authentication"
    ],
    "ru": [
      "разница будет в аутентификации главы"
    ]
  },
  {
    "time": [
      303.0,
      306.0
    ],
    "en": [
      "instead of path golf tee"
    ],
    "ru": [
      "вместо дорожки для гольфа"
    ]
  },
  {
    "time": [
      306.0,
      310.0
    ],
    "en": [
      "I'll make the user account remember the"
    ],
    "ru": [
      "Я заставлю учетную запись пользователя запомнить"
    ]
  },
  {
    "time": [
      310.0,
      312.0
    ],
    "en": [
      "username must be the host name of the"
    ],
    "ru": [
      "имя пользователя должно быть именем хоста"
    ]
  },
  {
    "time": [
      312.0,
      315.0
    ],
    "en": [
      "other router SP r2 and the password must"
    ],
    "ru": [
      "другой роутер SP r2 и пароль должен"
    ]
  },
  {
    "time": [
      315.0,
      318.0
    ],
    "en": [
      "be the same for both routers CCNA in"
    ],
    "ru": [
      "быть одинаковым для обоих маршрутизаторов CCNA в"
    ]
  },
  {
    "time": [
      318.0,
      323.0
    ],
    "en": [
      "this case so user name SPR - password"
    ],
    "ru": [
      "в этом случае так имя пользователя SPR - пароль"
    ]
  },
  {
    "time": [
      323.0,
      327.0
    ],
    "en": [
      "CCNA next let's configure the dialer"
    ],
    "ru": [
      "CCNA дальше давайте настроим звонилку"
    ]
  },
  {
    "time": [
      327.0,
      336.0
    ],
    "en": [
      "interface interface dialer 1 MTU 1492"
    ],
    "ru": [
      "интерфейсный интерфейс номеронабирателя 1 MTU 1492"
    ]
  },
  {
    "time": [
      336.0,
      342.0
    ],
    "en": [
      "encapsulation PPP IP address negotiated"
    ],
    "ru": [
      "инкапсуляция IP-адрес PPP согласован"
    ]
  },
  {
    "time": [
      342.0,
      347.0
    ],
    "en": [
      "PPP authentication chap okay and finally"
    ],
    "ru": [
      "Аутентификация PPP парень окей и наконец"
    ]
  },
  {
    "time": [
      347.0,
      350.0
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
      350.0,
      353.0
    ],
    "en": [
      "now let's link it to the physical"
    ],
    "ru": [
      "теперь давайте свяжем его с физическим"
    ]
  },
  {
    "time": [
      353.0,
      359.0
    ],
    "en": [
      "interface interface g00 pppoe client"
    ],
    "ru": [
      "интерфейс интерфейс g00 pppoe client"
    ]
  },
  {
    "time": [
      359.0,
      367.0
    ],
    "en": [
      "dial pool number 1 no shutdown end ok so"
    ],
    "ru": [
      "набрать номер пула 1, конец выключения нет, хорошо, так"
    ]
  },
  {
    "time": [
      367.0,
      369.0
    ],
    "en": [
      "let's see what IP address the dialer"
    ],
    "ru": [
      "посмотрим какой IP адрес звонилка"
    ]
  },
  {
    "time": [
      369.0,
      372.0
    ],
    "en": [
      "interface got from SPR to show IP"
    ],
    "ru": [
      "интерфейс получил от SPR, чтобы показать IP"
    ]
  },
  {
    "time": [
      372.0,
      378.0
    ],
    "en": [
      "interface brief 202 this time and again"
    ],
    "ru": [
      "краткое описание интерфейса 202 на этот раз"
    ]
  },
  {
    "time": [
      378.0,
      381.0
    ],
    "en": [
      "notice the virtual access 1 interface"
    ],
    "ru": [
      "обратите внимание на интерфейс виртуального доступа 1"
    ]
  },
  {
    "time": [
      381.0,
      384.0
    ],
    "en": [
      "was created as well here's one more"
    ],
    "ru": [
      "был создан вот еще один"
    ]
  },
  {
    "time": [
      384.0,
      391.0
    ],
    "en": [
      "thing show interface dialer one notice"
    ],
    "ru": [
      "вещь показать интерфейс номеронабиратель одно замечание"
    ]
  },
  {
    "time": [
      391.0,
      394.0
    ],
    "en": [
      "here it says bound to and then indicates"
    ],
    "ru": [
      "здесь говорится, что он привязан к, а затем указывает"
    ]
  },
  {
    "time": [
      394.0,
      397.0
    ],
    "en": [
      "the virtual access 1 interface ok let's"
    ],
    "ru": [
      "интерфейс виртуального доступа 1 хорошо, давайте"
    ]
  },
  {
    "time": [
      397.0,
      398.0
    ],
    "en": [
      "try a ping"
    ],
    "ru": [
      "попробуйте пинг"
    ]
  },
  {
    "time": [
      398.0,
      405.0
    ],
    "en": [
      "ping 200 oh you won great it works now"
    ],
    "ru": [
      "пинг 200 о, вы выиграли отлично, теперь работает"
    ]
  },
  {
    "time": [
      405.0,
      407.0
    ],
    "en": [
      "like in the previous lab I'll make"
    ],
    "ru": [
      "как и в предыдущей лабораторной работе, я сделаю"
    ]
  },
  {
    "time": [
      407.0,
      409.0
    ],
    "en": [
      "static default routes pointing to the"
    ],
    "ru": [
      "статические маршруты по умолчанию, указывающие на"
    ]
  },
  {
    "time": [
      409.0,
      411.0
    ],
    "en": [
      "service provider and then try to ping"
    ],
    "ru": [
      "поставщик услуг, а затем попробуйте пинговать"
    ]
  },
  {
    "time": [
      411.0,
      419.0
    ],
    "en": [
      "from r1 to r2 call 40 IP route"
    ],
    "ru": [
      "от r1 до r2 вызов 40 IP-маршрута"
    ]
  },
  {
    "time": [
      419.0,
      425.0
    ],
    "en": [
      "oh-oh-oh-oh-oh-oh 200 200 oh oh one do"
    ],
    "ru": [
      "ой-ой-ой-ой-ой-ой 200 200 ой ой один сделать"
    ]
  },
  {
    "time": [
      425.0,
      432.0
    ],
    "en": [
      "show IP route there it is next on r1"
    ],
    "ru": [
      "показать IP-маршрут, вот он следующий на r1"
    ]
  },
  {
    "time": [
      432.0,
      437.0
    ],
    "en": [
      "coughed e IP route"
    ],
    "ru": [
      "кашлянул e IP route"
    ]
  },
  {
    "time": [
      437.0,
      443.0
    ],
    "en": [
      "oh-oh-oh-oh-oh-oh-oh-oh-oh 101 do show"
    ],
    "ru": [
      "ой-ой-ой-ой-ой-ой-ой-ой-ой 101 показывать"
    ]
  },
  {
    "time": [
      443.0,
      447.0
    ],
    "en": [
      "IP route there's the default route okay"
    ],
    "ru": [
      "IP-маршрут, есть маршрут по умолчанию, хорошо"
    ]
  },
  {
    "time": [
      447.0,
      453.0
    ],
    "en": [
      "let's try that ping to our to do ping"
    ],
    "ru": [
      "давай попробуем этот пинг сделать пинг"
    ]
  },
  {
    "time": [
      453.0,
      456.0
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
      456.0
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
      456.0,
      459.0
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
      459.0,
      465.0
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
      465.0,
      467.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      467.0,
      470.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      470.0,
      472.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      472.0,
      475.0
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
      475.0,
      477.0
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
      477.0,
      480.0
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
      480.0,
      483.0
    ],
    "en": [
      "my channel I accept Bitcoin and etherium"
    ],
    "ru": [
      "мой канал я принимаю биткойны и эфириум"
    ]
  },
  {
    "time": [
      483.0,
      485.0
    ],
    "en": [
      "donations via the addresses in the"
    ],
    "ru": [
      "пожертвования через адреса в"
    ]
  },
  {
    "time": [
      485.0,
      488.0
    ],
    "en": [
      "description I am also a brave verified"
    ],
    "ru": [
      "описание я тоже храбрый проверил"
    ]
  },
  {
    "time": [
      488.0,
      491.0
    ],
    "en": [
      "publisher and accept bat or basic"
    ],
    "ru": [
      "издатель и принять летучую мышь или базовый"
    ]
  },
  {
    "time": [
      491.0,
      493.0
    ],
    "en": [
      "attention token donations in the brave"
    ],
    "ru": [
      "пожертвования токенов внимания в храбрых"
    ]
  },
  {
    "time": [
      493.0,
      493.0
    ],
    "en": [
      "browser"
    ],
    "ru": [
      "браузер"
    ]
  }
]