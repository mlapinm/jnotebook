let objs = [
  {
    "time": [
      0.0,
      4.640471
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
      4.640471,
      8.035683
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
      8.035683,
      15.795921
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
      15.795921,
      24.29932
    ],
    "en": [
      "in this lab we are going to configure static routing to allow pc1 & pc2 to communicate with each other"
    ],
    "ru": [
      "В этой лабораторной работе мы собираемся настроить статическую маршрутизацию, чтобы компьютеры pc1 и pc2 могли взаимодействовать друг с другом."
    ]
  },
  {
    "time": [
      24.29932,
      32.266722
    ],
    "en": [
      "static routing as opposed to dynamic routing involves manually configuring routes to networks that you want to reach"
    ],
    "ru": [
      "статическая маршрутизация, в отличие от динамической, включает в себя ручную настройку маршрутов к сетям, которые вы хотите достичь."
    ]
  },
  {
    "time": [
      32.266722,
      40.845451
    ],
    "en": [
      "as a network grows it quickly becomes unfeasible to manually configure both primary and backup routes to each destination network"
    ],
    "ru": [
      "по мере роста сети быстро становится невозможным вручную настраивать как основной, так и резервный маршруты к каждой целевой сети."
    ]
  },
  {
    "time": [
      40.845451,
      45.373223
    ],
    "en": [
      "however for small networks like this example here it is no problem"
    ],
    "ru": [
      "однако для небольших сетей, подобных этому примеру, это не проблема"
    ]
  },
  {
    "time": [
      45.373223,
      57.061157
    ],
    "en": [
      "even in large networks you will often want to use static routes in combination with dynamic routing protocols like ERG RP and OSPF which we will practice in future labs"
    ],
    "ru": [
      "даже в больших сетях вы часто захотите использовать статические маршруты в сочетании с протоколами динамической маршрутизации, такими как ERG RP и OSPF, которые мы будем практиковать в будущих лабораториях."
    ]
  },
  {
    "time": [
      57.061157,
      63.041728
    ],
    "en": [
      "try to complete the lab yourself first then continue watching if you have trouble or"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторию самостоятельно, а затем продолжайте смотреть, если у вас возникнут проблемы или"
    ]
  },
  {
    "time": [
      63.041728,
      66.034348
    ],
    "en": [
      "watch the video after to check your solution"
    ],
    "ru": [
      "посмотрите видео после, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      66.034348,
      73.526449
    ],
    "en": [
      "if you haven't learned the required commands to complete this lab yet in your studies feel free to watch this video to learn them"
    ],
    "ru": [
      "Если вы еще не выучили команды, необходимые для выполнения этой лабораторной работы, во время учебы, не стесняйтесь смотреть это видео, чтобы изучить их"
    ]
  },
  {
    "time": [
      73.526449,
      77.619929
    ],
    "en": [
      "note that no static routes have been pre-configured in this lab"
    ],
    "ru": [
      "обратите внимание, что в этой лабораторной работе не были предварительно настроены статические маршруты."
    ]
  },
  {
    "time": [
      77.619929,
      85.588898
    ],
    "en": [
      "I have only configured the default gateways of pc1 & pc2 being the g0 one interfaces of their respective routers"
    ],
    "ru": [
      "Я настроил только шлюзы по умолчанию для pc1 и pc2, которые являются интерфейсами g0 one их соответствующих маршрутизаторов."
    ]
  },
  {
    "time": [
      85.588898,
      96.370854
    ],
    "en": [
      "step one is to configure the G zero zero and G zero one interfaces of r1 and r2 according to the network diagram"
    ],
    "ru": [
      "Шаг первый - настроить интерфейсы G zero zero и G zero one для r1 и r2 в соответствии с сетевой схемой."
    ]
  },
  {
    "time": [
      96.370854,
      98.209211
    ],
    "en": [
      "and enable the interfaces"
    ],
    "ru": [
      "и включите интерфейсы"
    ]
  },
  {
    "time": [
      98.209211,
      101.539471
    ],
    "en": [
      "there are three subnets in this network"
    ],
    "ru": [
      "в этой сети три подсети"
    ]
  },
  {
    "time": [
      101.539471,
      110.416806
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
      101.539471,
      110.416806
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
      110.416806,
      118.965802
    ],
    "en": [
      "also 10.0.0.0 / 24 which includes the G 0 0 interfaces of r1 and r2"
    ],
    "ru": [
      "также 10.0.0.0 / 24, который включает интерфейсы G 0 0 для r1 и r2"
    ]
  },
  {
    "time": [
      118.965802,
      128.401893
    ],
    "en": [
      "also 192.168.20.10 /24 Artoo's G 0 1 interface"
    ],
    "ru": [
      "также 192.168.20.10 / 24 интерфейс Artoo G 0 1"
    ]
  },
  {
    "time": [
      128.401893,
      131.538455
    ],
    "en": [
      "let's configure r1 first"
    ],
    "ru": [
      "давайте сначала настроим r1"
    ]
  },
  {
    "time": [
      131.538455,
      146.847428
    ],
    "en": [
      "enable conf t interface g00 IP address 10.0.0.1 255.255.255.0 no shut down"
    ],
    "ru": [
      "enable conf t interface g00 IP-адрес 10.0.0.1 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      146.847428,
      153.069223
    ],
    "en": [
      "okay so that's our ones g00 interface which is connected to our two"
    ],
    "ru": [
      "хорошо, так что это наш интерфейс g00, который подключен к нашим двум"
    ]
  },
  {
    "time": [
      153.069223,
      155.503941
    ],
    "en": [
      "now let's do the G zero one interface interface"
    ],
    "ru": [
      "теперь давайте сделаем интерфейс интерфейса G zero one"
    ]
  },
  {
    "time": [
      155.503941,
      166.127653
    ],
    "en": [
      "G 0 1 IP address 192.168.1.1 255.255.255.0 no shutdown"
    ],
    "ru": [
      "G 0 1 IP-адрес 192.168.1.1 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      166.127653,
      169.327316
    ],
    "en": [
      "now let's configure r 2s interfaces"
    ],
    "ru": [
      "теперь настроим интерфейсы r 2s"
    ]
  },
  {
    "time": [
      169.327316,
      185.217701
    ],
    "en": [
      "enable conf t interface G 0 0 IP address 10.0.0.2 255.255.255.0 no shutdown"
    ],
    "ru": [
      "enable conf t interface G 0 0 IP-адрес 10.0.0.2 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      185.217701,
      195.590304
    ],
    "en": [
      "interface G 0 1 IP address 192.168.2.1 255.255.255.0 no shutdown"
    ],
    "ru": [
      "интерфейс G 0 1 IP-адрес 192.168.2.1 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      195.590304,
      197.425261
    ],
    "en": [
      "that's all for step 1"
    ],
    "ru": [
      "это все для шага 1"
    ]
  },
  {
    "time": [
      197.425261,
      205.245964
    ],
    "en": [
      "step two is to ping from pc1 to our ones g0 one interface"
    ],
    "ru": [
      "Шаг второй - пинговать с pc1 на наши g0 один интерфейс"
    ]
  },
  {
    "time": [
      205.245964,
      210.543976
    ],
    "en": [
      "then progressively ping toward PC two and see which pings succeed and which fail"
    ],
    "ru": [
      "затем постепенно ping к компьютеру 2 и посмотрите, какие ping успешны, а какие нет"
    ]
  },
  {
    "time": [
      210.543976,
      212.740343
    ],
    "en": [
      "let's try that"
    ],
    "ru": [
      "давай попробуем это"
    ]
  },
  {
    "time": [
      212.740343,
      225.498901
    ],
    "en": [
      "first our ones g0 one interface ping 192.168.1.1 it works"
    ],
    "ru": [
      "первые наши g0 один интерфейс пинг 192.168.1.1 работает"
    ]
  },
  {
    "time": [
      225.498901,
      234.948164
    ],
    "en": [
      "next our ones G 0 0 interface ping 10.0.0.1 it works too"
    ],
    "ru": [
      "рядом наши G 0 0 интерфейс пинг 10.0.0.1 тоже работает"
    ]
  },
  {
    "time": [
      234.948164,
      238.565099
    ],
    "en": [
      "now let's try our two SG 0 0 interface"
    ],
    "ru": [
      "теперь давайте попробуем наши два интерфейса SG 0 0"
    ]
  },
  {
    "time": [
      238.565099,
      249.429052
    ],
    "en": [
      "ping 10.0.0.2 this pink fails"
    ],
    "ru": [
      "ping 10.0.0.2 этот розовый не работает"
    ]
  },
  {
    "time": [
      249.429052,
      253.634072
    ],
    "en": [
      "I won't bother pinging beyond here those things will fail as well"
    ],
    "ru": [
      "Я не буду беспокоиться о том, чтобы пинговать дальше, эти вещи тоже не работают"
    ]
  },
  {
    "time": [
      253.634072,
      255.310926
    ],
    "en": [
      "why is that"
    ],
    "ru": [
      "это почему"
    ]
  },
  {
    "time": [
      255.310926,
      260.216557
    ],
    "en": [
      "well for a pin to succeed you need to weigh connectivity"
    ],
    "ru": [
      "ну, чтобы булавка преуспела, вам нужно взвесить возможность подключения"
    ]
  },
  {
    "time": [
      260.216557,
      268.570853
    ],
    "en": [
      "PC one needs to be able to reach the destination and the destination needs to know how to reach PC one to send the reply to the ping"
    ],
    "ru": [
      "ПК должен быть в состоянии достичь пункта назначения, а пункт назначения должен знать, как достичь ПК один, чтобы отправить ответ на пинг."
    ]
  },
  {
    "time": [
      268.570853,
      273.837192
    ],
    "en": [
      "the first two pings we send to satisfy both requirements thus they worked"
    ],
    "ru": [
      "первые два эхо-запроса, которые мы отправляем, чтобы удовлетворить оба требования, таким образом, они работали"
    ]
  },
  {
    "time": [
      273.837192,
      278.557256
    ],
    "en": [
      "PC one and our ones G zero one interface are part of the same network"
    ],
    "ru": [
      "PC one и наши G zero one интерфейс являются частью одной сети"
    ]
  },
  {
    "time": [
      278.557256,
      280.518528
    ],
    "en": [
      "thus they can reach each other"
    ],
    "ru": [
      "таким образом они могут связаться друг с другом"
    ]
  },
  {
    "time": [
      280.518528,
      285.995634
    ],
    "en": [
      "PC one isn't part of the same network as our ones G zero zero interface"
    ],
    "ru": [
      "Первый ПК не является частью той же сети, что и наши G zero zero interface"
    ]
  },
  {
    "time": [
      285.995634,
      288.992486
    ],
    "en": [
      "but it sends the packet to its default gateway"
    ],
    "ru": [
      "но он отправляет пакет на свой шлюз по умолчанию"
    ]
  },
  {
    "time": [
      288.992486,
      292.380386
    ],
    "en": [
      "which I pre-configured as our ones G zero one interface"
    ],
    "ru": [
      "которые я предварительно настроил как наши G ноль один интерфейс"
    ]
  },
  {
    "time": [
      292.380386,
      297.901111
    ],
    "en": [
      "then our one of course knows the destination because it's one of its other interfaces"
    ],
    "ru": [
      "тогда наш, конечно, знает пункт назначения, потому что это один из других его интерфейсов"
    ]
  },
  {
    "time": [
      297.901111,
      305.2898
    ],
    "en": [
      "it can then send the ping back to PC one which is again directly connected to the same network as its G zero one interface"
    ],
    "ru": [
      "Затем он может отправить эхо-запрос обратно на ПК, который снова напрямую подключен к той же сети, что и его интерфейс G zero one."
    ]
  },
  {
    "time": [
      305.2898,
      307.694434
    ],
    "en": [
      "that's why the first two pings worked"
    ],
    "ru": [
      "вот почему первые два пинга сработали"
    ]
  },
  {
    "time": [
      307.694434,
      311.203748
    ],
    "en": [
      "now why did the third ping fail"
    ],
    "ru": [
      "теперь почему третий пинг не удался"
    ]
  },
  {
    "time": [
      311.203748,
      314.082751
    ],
    "en": [
      "let's think about the path the ping takes"
    ],
    "ru": [
      "давайте подумаем о пути, по которому пинг идет"
    ]
  },
  {
    "time": [
      314.082751,
      317.867565
    ],
    "en": [
      "PC one sends the ping to its default"
    ],
    "ru": [
      "ПК отправляет пинг по умолчанию"
    ]
  },
  {
    "time": [
      317.867565,
      320.041834
    ],
    "en": [
      "gateway our ones G zero one interface"
    ],
    "ru": [
      "шлюз наши G ноль один интерфейс"
    ]
  },
  {
    "time": [
      320.041834,
      329.147195
    ],
    "en": [
      "the destination is 10.0.0.2 which our one knows the way to because it's part of the same network as its G zero zero interface"
    ],
    "ru": [
      "пункт назначения - 10.0.0.2, к которому наш знает путь, потому что он является частью той же сети, что и его интерфейс G zero zero"
    ]
  },
  {
    "time": [
      329.147195,
      332.456081
    ],
    "en": [
      "the 10.0.0.0 / 24 network"
    ],
    "ru": [
      "сеть 10.0.0.0 / 24"
    ]
  },
  {
    "time": [
      332.456081,
      338.267975
    ],
    "en": [
      "so it sends the ping out of its G zero zero interface toward our two"
    ],
    "ru": [
      "поэтому он отправляет эхо-запрос из своего интерфейса G-ноль-ноль к нашим двум"
    ]
  },
  {
    "time": [
      338.267975,
      346.056864
    ],
    "en": [
      "now the ping reaches our two however our two doesn't know how to send the reply back to PC one"
    ],
    "ru": [
      "теперь пинг доходит до наших двоих, но наши двое не знают, как отправить ответ обратно на ПК."
    ]
  },
  {
    "time": [
      346.056864,
      353.544302
    ],
    "en": [
      "r2 has no route back to the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "r2 не имеет маршрута обратно в сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      353.544302,
      356.315147
    ],
    "en": [
      "because we haven't configured any reps yet and"
    ],
    "ru": [
      "потому что мы еще не настроили представителей и"
    ]
  },
  {
    "time": [
      356.315147,
      358.594721
    ],
    "en": [
      "it's not a directly connected network"
    ],
    "ru": [
      "это не напрямую подключенная сеть"
    ]
  },
  {
    "time": [
      358.594721,
      361.124319
    ],
    "en": [
      "so that's why the ping fails"
    ],
    "ru": [
      "вот почему пинг не работает"
    ]
  },
  {
    "time": [
      361.124319,
      363.560034
    ],
    "en": [
      "I'll go on are too quickly to check"
    ],
    "ru": [
      "Я пойду слишком быстро, чтобы проверить"
    ]
  },
  {
    "time": [
      363.560034,
      369.233707
    ],
    "en": [
      "exit show IP ripped"
    ],
    "ru": [
      "выход показать IP разорван"
    ]
  },
  {
    "time": [
      369.233707,
      378.103293
    ],
    "en": [
      "as you can see the 192.168.1.0 network is not present"
    ],
    "ru": [
      "как видите, сети 192.168.1.0 нет"
    ]
  },
  {
    "time": [
      378.103293,
      383.077619
    ],
    "en": [
      "now let's move on to step three"
    ],
    "ru": [
      "теперь перейдем к третьему шагу"
    ]
  },
  {
    "time": [
      383.077619,
      387.028697
    ],
    "en": [
      "basically we are going to do the same thing but from PC 2"
    ],
    "ru": [
      "в основном мы собираемся сделать то же самое, но с ПК 2"
    ]
  },
  {
    "time": [
      387.028697,
      389.889384
    ],
    "en": [
      "can you guess which pings will work"
    ],
    "ru": [
      "Можете ли вы угадать, какие пинги будут работать?"
    ]
  },
  {
    "time": [
      389.889384,
      392.05158
    ],
    "en": [
      "let's check on PC 2"
    ],
    "ru": [
      "давай проверим на ПК 2"
    ]
  },
  {
    "time": [
      392.05158,
      397.086695
    ],
    "en": [
      "first ping 192.168.2.1"
    ],
    "ru": [
      "первый пинг 192.168.2.1"
    ]
  },
  {
    "time": [
      397.086695,
      398.900305
    ],
    "en": [
      "r2 is g0 one interface"
    ],
    "ru": [
      "r2 - это g0 один интерфейс"
    ]
  },
  {
    "time": [
      398.900305,
      409.837997
    ],
    "en": [
      "it works next ping 10.0.0.2 R 2 s G zero zero interface it works also"
    ],
    "ru": [
      "он работает следующий ping 10.0.0.2 R 2 s G zero zero interface он также работает"
    ]
  },
  {
    "time": [
      409.837997,
      414.112686
    ],
    "en": [
      "now ping 10.0.0.1"
    ],
    "ru": [
      "сейчас пинг 10.0.0.1"
    ]
  },
  {
    "time": [
      414.112686,
      416.25794
    ],
    "en": [
      "r1s G zero zero interface"
    ],
    "ru": [
      "r1s G нулевой нулевой интерфейс"
    ]
  },
  {
    "time": [
      416.25794,
      425.587432
    ],
    "en": [
      "it fails this is for the same reason as before"
    ],
    "ru": [
      "он терпит неудачу по той же причине, что и раньше"
    ]
  },
  {
    "time": [
      425.587432,
      435.410698
    ],
    "en": [
      "PC 2 sends the ping to r2 which then sends it to r1 but r1 doesn't have a route back to PC 2 subnet in its routing table"
    ],
    "ru": [
      "ПК 2 отправляет эхо-запрос на r2, который затем отправляет его на r1, но r1 не имеет маршрута обратно к подсети ПК 2 в своей таблице маршрутизации."
    ]
  },
  {
    "time": [
      435.410698,
      437.320954
    ],
    "en": [
      "so the ping ends there"
    ],
    "ru": [
      "так что пинг на этом заканчивается"
    ]
  },
  {
    "time": [
      437.320954,
      448.602044
    ],
    "en": [
      "step four is to configure static routes on r1 and r2 to allow PC one to reach PC two and vice versa"
    ],
    "ru": [
      "Шаг четвертый - настроить статические маршруты на r1 и r2, чтобы позволить ПК один достигать ПК два, и наоборот."
    ]
  },
  {
    "time": [
      448.602044,
      471.901731
    ],
    "en": [
      "we should also make sure we configure the route to the subnets meaning 192.168.1.0 / 24 and 192.168 2.0 /24 to the other PC meaning 192.168.1.11 / 32 and 192.168 1 12 / 32"
    ],
    "ru": [
      "мы также должны убедиться, что мы настроили маршрут к подсетям, то есть 192.168.1.0 / 24 и 192.168 2.0 / 24, к другому ПК, что означает 192.168.1.11 / 32 и 192.168 1 12/32"
    ]
  },
  {
    "time": [
      471.901731,
      477.122616
    ],
    "en": [
      "in this very small Network we only have to create one static route on each router"
    ],
    "ru": [
      "в этой очень маленькой сети нам нужно создать только один статический маршрут на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      477.122616,
      485.109118
    ],
    "en": [
      "on r1 we need a route to 192.168.2.0 / 24"
    ],
    "ru": [
      "на r1 нам нужен маршрут к 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      485.109118,
      494.723567
    ],
    "en": [
      "okay let's do that on r1 first"
    ],
    "ru": [
      "хорошо, давайте сначала сделаем это на r1"
    ]
  },
  {
    "time": [
      494.723567,
      502.75317
    ],
    "en": [
      "exit now we create a static route with the command IP route"
    ],
    "ru": [
      "exit теперь мы создаем статический маршрут с помощью команды IP route"
    ]
  },
  {
    "time": [
      502.75317,
      505.851118
    ],
    "en": [
      "now I'll use the question mark to show what comes next"
    ],
    "ru": [
      "теперь я использую вопросительный знак, чтобы показать, что будет дальше"
    ]
  },
  {
    "time": [
      505.851118,
      513.266181
    ],
    "en": [
      "first is the destination prefix in this case it's 192.168.2.0"
    ],
    "ru": [
      "сначала префикс назначения, в данном случае это 192.168.2.0"
    ]
  },
  {
    "time": [
      513.266181,
      514.474509
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
      513.266181,
      514.474509
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
      514.474509,
      517.282627
    ],
    "en": [
      "destination prefix mask"
    ],
    "ru": [
      "маска префикса назначения"
    ]
  },
  {
    "time": [
      517.282627,
      523.444446
    ],
    "en": [
      "it's slash 24 so that equals 255 255 255 0"
    ],
    "ru": [
      "это косая черта 24, что равно 255 255 255 0"
    ]
  },
  {
    "time": [
      523.444446,
      525.809463
    ],
    "en": [
      "question mark one more time"
    ],
    "ru": [
      "вопросительный знак еще раз"
    ]
  },
  {
    "time": [
      525.809463,
      528.250252
    ],
    "en": [
      "now we have a list of options"
    ],
    "ru": [
      "теперь у нас есть список вариантов"
    ]
  },
  {
    "time": [
      528.250252,
      530.304308
    ],
    "en": [
      "but really there are just two"
    ],
    "ru": [
      "но на самом деле их всего два"
    ]
  },
  {
    "time": [
      530.304308,
      537.583194
    ],
    "en": [
      "the option at the top of the list forwarding routers address means the next hop address in the route"
    ],
    "ru": [
      "опция в верхней части списка адресов переадресации маршрутизаторов означает адрес следующего перехода в маршруте"
    ]
  },
  {
    "time": [
      537.583194,
      541.201691
    ],
    "en": [
      "make sure this is an address the router knows how to get to"
    ],
    "ru": [
      "убедитесь, что это адрес, к которому маршрутизатор знает, как добраться"
    ]
  },
  {
    "time": [
      541.201691,
      546.028631
    ],
    "en": [
      "if the router can't reach the next hop address it obviously can't reach the destination"
    ],
    "ru": [
      "если маршрутизатор не может достичь адреса следующего перехода, очевидно, что он не может достичь пункта назначения"
    ]
  },
  {
    "time": [
      546.028631,
      554.102057
    ],
    "en": [
      "if we choose this option the next hop address will be r2 SG 0 0 interface 10.0.0.2"
    ],
    "ru": [
      "если мы выберем эту опцию, адрес следующего перехода будет r2 SG 0 0 interface 10.0.0.2"
    ]
  },
  {
    "time": [
      554.102057,
      558.927235
    ],
    "en": [
      "the other options are to specify an interface"
    ],
    "ru": [
      "другие варианты - указать интерфейс"
    ]
  },
  {
    "time": [
      558.927235,
      563.012428
    ],
    "en": [
      "meaning the exit interface we will send the packets out of on the way to the destination"
    ],
    "ru": [
      "означает интерфейс выхода, из которого мы будем отправлять пакеты по пути к месту назначения"
    ]
  },
  {
    "time": [
      563.012428,
      568.90946
    ],
    "en": [
      "if we choose this option we will use gigabit gigabit ethernet 0 0"
    ],
    "ru": [
      "если мы выберем эту опцию, мы будем использовать гигабитный гигабитный Ethernet 0 0"
    ]
  },
  {
    "time": [
      568.90946,
      573.111302
    ],
    "en": [
      "let's go with the first option of the next hop IP address"
    ],
    "ru": [
      "давайте перейдем к первому варианту IP-адреса следующего перехода"
    ]
  },
  {
    "time": [
      573.111302,
      577.881884
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
      573.111302,
      577.881884
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
      577.881884,
      581.172356
    ],
    "en": [
      "now let's check the routing table"
    ],
    "ru": [
      "теперь давайте проверим таблицу маршрутизации"
    ]
  },
  {
    "time": [
      581.172356,
      583.795675
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
      583.795675,
      592.324551
    ],
    "en": [
      "here with an S indicating static we see our route to the 192.168.2.0 / 24 network"
    ],
    "ru": [
      "здесь со знаком S, указывающим на статичность, мы видим наш маршрут к сети 192.168.2.0 / 24"
    ]
  },
  {
    "time": [
      592.324551,
      596.493612
    ],
    "en": [
      "to the next hop address"
    ],
    "ru": [
      "до адреса следующего перехода"
    ]
  },
  {
    "time": [
      596.493612,
      600.118678
    ],
    "en": [
      "since we're looking at the table anyway"
    ],
    "ru": [
      "так как мы все равно смотрим на стол"
    ]
  },
  {
    "time": [
      600.118678,
      603.647085
    ],
    "en": [
      "notice these other routes have C or L next to them"
    ],
    "ru": [
      "обратите внимание, что рядом с этими другими маршрутами стоит C или L."
    ]
  },
  {
    "time": [
      603.647085,
      607.68628
    ],
    "en": [
      "C refers to a connected network"
    ],
    "ru": [
      "C относится к подключенной сети"
    ]
  },
  {
    "time": [
      607.68628,
      612.527726
    ],
    "en": [
      "in this case that 10.0.0.0 / 24 network"
    ],
    "ru": [
      "в этом случае сеть 10.0.0.0 / 24"
    ]
  },
  {
    "time": [
      612.527726,
      615.861231
    ],
    "en": [
      "and 192.168.1.0 24 network"
    ],
    "ru": [
      "и сеть 192.168.1.0 24"
    ]
  },
  {
    "time": [
      615.861231,
      621.010114
    ],
    "en": [
      "l refers to a local address on the router itself"
    ],
    "ru": [
      "l относится к локальному адресу на самом роутере"
    ]
  },
  {
    "time": [
      621.010114,
      629.740014
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
      621.010114,
      629.740014
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
      629.740014,
      635.268797
    ],
    "en": [
      "ok now let's configure the route on r2"
    ],
    "ru": [
      "хорошо, теперь давайте настроим маршрут на r2"
    ]
  },
  {
    "time": [
      635.268797,
      646.231031
    ],
    "en": [
      "ip routes 192.168.1.0 255.255.255.0"
    ],
    "ru": [
      "IP-маршруты 192.168.1.0 255.255.255.0"
    ]
  },
  {
    "time": [
      646.231031,
      651.358922
    ],
    "en": [
      "and now let's configure the exit interface instead of the next hop address just to try it"
    ],
    "ru": [
      "а теперь давайте настроим интерфейс выхода вместо адреса следующего перехода, просто чтобы попробовать"
    ]
  },
  {
    "time": [
      651.358922,
      653.534294
    ],
    "en": [
      "out G 0 0"
    ],
    "ru": [
      "из G 0 0"
    ]
  },
  {
    "time": [
      653.534294,
      659.401708
    ],
    "en": [
      "ok now we should be able to ping from pc1 to pc2"
    ],
    "ru": [
      "Хорошо, теперь мы можем пинговать с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      659.401708,
      662.699544
    ],
    "en": [
      "let's go on pc 1 and try it"
    ],
    "ru": [
      "пойдем на ПК 1 и попробуем"
    ]
  },
  {
    "time": [
      662.699544,
      668.691237
    ],
    "en": [
      "out ping 192.168.2.11"
    ],
    "ru": [
      "из пинг 192.168.2.11"
    ]
  },
  {
    "time": [
      668.691237,
      685.062991
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
      685.062991,
      688.070218
    ],
    "en": [
      "the ping worked that's all for this lab"
    ],
    "ru": [
      "пинг сработал, вот и все для этой лаборатории"
    ]
  },
  {
    "time": [
      688.070218,
      691.486549
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
      691.486549,
      694.536703
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
      694.536703,
      699.444099
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
      699.444099,
      704.289797
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
      704.289797,
      713.079543
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon patreon comm / Jeremy's IT lab"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon patreon comm / ИТ-лабораторию Джереми"
    ]
  },
  {
    "time": [
      713.079543,
      718.563012
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
      718.563012,
      727.254291
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
      727.254291,
      727.254291
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
      727.254291,
      727.254291
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
      727.254291,
      727.254291
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]