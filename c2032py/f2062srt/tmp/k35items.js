let objs = [
  {
    "time": [
      0.0,
      5.025707
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
      5.025707,
      8.184373
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
      8.184373,
      17.227165
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
      17.227165,
      21.73079
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторий"
    ]
  },
  {
    "time": [
      21.73079,
      26.310957
    ],
    "en": [
      "in this lab we will configure OSPF version 3"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим OSPF версии 3"
    ]
  },
  {
    "time": [
      26.310957,
      32.620602
    ],
    "en": [
      "until now the OSPF we have been configuring is OSPF version 2"
    ],
    "ru": [
      "до сих пор настраиваемый нами OSPF - это OSPF версии 2."
    ]
  },
  {
    "time": [
      32.620602,
      37.275415
    ],
    "en": [
      "OSPF version 3 however is used with ipv6"
    ],
    "ru": [
      "Однако OSPF версии 3 используется с ipv6."
    ]
  },
  {
    "time": [
      37.275415,
      46.365332
    ],
    "en": [
      "the configuration is largely similar with one major difference that actually makes OSPF v3 simpler to configure"
    ],
    "ru": [
      "конфигурация во многом схожа с одним важным отличием, которое на самом деле упрощает настройку OSPF v3."
    ]
  },
  {
    "time": [
      46.365332,
      47.608644
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
      47.608644,
      52.861644
    ],
    "en": [
      "the first step is to create loopback interfaces on each router"
    ],
    "ru": [
      "первый шаг - создать интерфейсы обратной связи на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      52.861644,
      56.741936
    ],
    "en": [
      "these will become the router ID for OSPF"
    ],
    "ru": [
      "они станут идентификатором маршрутизатора для OSPF"
    ]
  },
  {
    "time": [
      56.741936,
      65.464227
    ],
    "en": [
      "although OSPF v3 is used with ipv6 the router ID still comes in the form of an ipv4 address"
    ],
    "ru": [
      "хотя OSPF v3 используется с ipv6, идентификатор маршрутизатора по-прежнему имеет форму адреса ipv4."
    ]
  },
  {
    "time": [
      65.464227,
      69.031998
    ],
    "en": [
      "that is a 32-bit number in dotted decimal format"
    ],
    "ru": [
      "это 32-битное число в десятичном формате с точками"
    ]
  },
  {
    "time": [
      69.031998,
      75.642873
    ],
    "en": [
      "same with OSPF v to the router ID can be manually configured"
    ],
    "ru": [
      "то же самое с OSPF v для идентификатора маршрутизатора можно настроить вручную"
    ]
  },
  {
    "time": [
      75.642873,
      83.439748
    ],
    "en": [
      "if it's not manually configured the highest ipv4 address on the loopback interface will be used"
    ],
    "ru": [
      "если он не настроен вручную, будет использоваться самый высокий IPv4-адрес на интерфейсе обратной связи."
    ]
  },
  {
    "time": [
      83.439748,
      90.289561
    ],
    "en": [
      "if there is no loopback interface the highest ipv4 address on a regular interface will be used"
    ],
    "ru": [
      "если нет интерфейса обратной связи, будет использоваться наивысший адрес ipv4 на обычном интерфейсе"
    ]
  },
  {
    "time": [
      90.289561,
      94.32779
    ],
    "en": [
      "let's quickly make these loop backs on our one first"
    ],
    "ru": [
      "давайте быстро сделаем эти петли на нашем первом"
    ]
  },
  {
    "time": [
      94.32779,
      111.197957
    ],
    "en": [
      "enable compte interface l0 IP address 1.1 1.1 255 255 255 255 exit"
    ],
    "ru": [
      "включить интерфейс compte l0 IP-адрес 1.1 1.1 255 255 255 255 выйти"
    ]
  },
  {
    "time": [
      111.197957,
      113.908394
    ],
    "en": [
      "next are to"
    ],
    "ru": [
      "рядом с"
    ]
  },
  {
    "time": [
      113.908394,
      127.211894
    ],
    "en": [
      "enable compte interface l0 IP address 2 2 2 2 255 255 255 255 exit"
    ],
    "ru": [
      "включить интерфейс compte l0 IP-адрес 2 2 2 2255 255 255 255 выйти"
    ]
  },
  {
    "time": [
      127.211894,
      144.248894
    ],
    "en": [
      "next r3 enable coffee/tea interface l0 IP address 3 3 3 3 255 255 255 255 exit"
    ],
    "ru": [
      "следующий r3 включить интерфейс кофе / чая l0 IP-адрес 3 3 3 3 255 255 255 255 выйти"
    ]
  },
  {
    "time": [
      144.248894,
      159.760581
    ],
    "en": [
      "ok next are 4 enable coffee tea interface l0 IP address 4.4.4 for 255 255 255 255 exit"
    ],
    "ru": [
      "ОК далее 4 включить интерфейс кофе-чая l0 IP-адрес 4.4.4 для 255 255 255 255 255 выход"
    ]
  },
  {
    "time": [
      159.760581,
      163.060185
    ],
    "en": [
      "ok finally r5"
    ],
    "ru": [
      "хорошо, наконец, r5"
    ]
  },
  {
    "time": [
      163.060185,
      178.606704
    ],
    "en": [
      "enable compte interface l0 IP address v dot v dot v dot v 255.255.255.0"
    ],
    "ru": [
      "включить интерфейс compte l0 IP-адрес v dot v dot v dot v 255.255.255.0"
    ]
  },
  {
    "time": [
      178.606704,
      181.175329
    ],
    "en": [
      "all for step 1"
    ],
    "ru": [
      "все для шага 1"
    ]
  },
  {
    "time": [
      181.175329,
      186.256558
    ],
    "en": [
      "now let's enable OSPF v3 on each router"
    ],
    "ru": [
      "теперь давайте включим OSPF v3 на каждом роутере"
    ]
  },
  {
    "time": [
      186.256558,
      187.865787
    ],
    "en": [
      "let's go back to our one"
    ],
    "ru": [
      "давай вернемся к нашему"
    ]
  },
  {
    "time": [
      187.865787,
      197.697266
    ],
    "en": [
      "to enter OSPF v3 configuration mode just type ipv6 in front of the regular OSPF command"
    ],
    "ru": [
      "чтобы войти в режим конфигурации OSPF v3, просто введите ipv6 перед обычной командой OSPF"
    ]
  },
  {
    "time": [
      197.697266,
      202.083829
    ],
    "en": [
      "ipv6 router OSPF one"
    ],
    "ru": [
      "маршрутизатор ipv6 OSPF one"
    ]
  },
  {
    "time": [
      202.083829,
      211.154641
    ],
    "en": [
      "however in OSPF v3 we don't activate OSPF on each interface from OSPF configuration mode"
    ],
    "ru": [
      "однако в OSPF v3 мы не активируем OSPF на каждом интерфейсе из режима конфигурации OSPF"
    ]
  },
  {
    "time": [
      211.154641,
      215.496537
    ],
    "en": [
      "we configure it on each interface in interface configuration mode"
    ],
    "ru": [
      "настраиваем его на каждом интерфейсе в режиме настройки интерфейса"
    ]
  },
  {
    "time": [
      215.496537,
      222.019995
    ],
    "en": [
      "so by using the ipv6 router or SOS PF one command"
    ],
    "ru": [
      "поэтому с помощью маршрутизатора ipv6 или SOS PF одна команда"
    ]
  },
  {
    "time": [
      222.019995,
      225.977724
    ],
    "en": [
      "we simply created the OSPF v3 process number one"
    ],
    "ru": [
      "мы просто создали процесс номер один OSPF v3"
    ]
  },
  {
    "time": [
      225.977724,
      233.206412
    ],
    "en": [
      "now let's activate OSPF v3 on G 0 0 and G 0 1"
    ],
    "ru": [
      "теперь давайте активируем OSPF v3 на G 0 0 и G 0 1"
    ]
  },
  {
    "time": [
      233.206412,
      235.600391
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
      235.600391,
      238.080891
    ],
    "en": [
      "we activate it with this command"
    ],
    "ru": [
      "мы активируем его с помощью этой команды"
    ]
  },
  {
    "time": [
      238.080891,
      244.38962
    ],
    "en": [
      "ipv6 OSPF followed by the process ID 1"
    ],
    "ru": [
      "ipv6 OSPF, за которым следует идентификатор процесса 1"
    ]
  },
  {
    "time": [
      244.38962,
      248.214745
    ],
    "en": [
      "then area then the area number 1"
    ],
    "ru": [
      "затем область, затем область номер 1"
    ]
  },
  {
    "time": [
      248.214745,
      250.076911
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      250.076911,
      258.260869
    ],
    "en": [
      "interface G 0 1 IP v6 OSPF one area 1 ok"
    ],
    "ru": [
      "интерфейс G 0 1 IP v6 OSPF одна область 1 ОК"
    ]
  },
  {
    "time": [
      258.260869,
      260.906994
    ],
    "en": [
      "now let's go to our for also an area 1"
    ],
    "ru": [
      "Теперь перейдем к нашему, также для области 1"
    ]
  },
  {
    "time": [
      260.906994,
      271.813744
    ],
    "en": [
      "now on our one we use the command ipv6 router OSPF one"
    ],
    "ru": [
      "теперь на нашем используем команду ipv6 router OSPF one"
    ]
  },
  {
    "time": [
      271.813744,
      274.699952
    ],
    "en": [
      "but we didn't actually do any commands from that configuration mode"
    ],
    "ru": [
      "но мы фактически не выполняли никаких команд из этого режима конфигурации"
    ]
  },
  {
    "time": [
      274.699952,
      280.783556
    ],
    "en": [
      "if we go directly to the interface and enable OSPF v3 on it let's see what happens"
    ],
    "ru": [
      "если мы перейдем непосредственно к интерфейсу и включим на нем OSPF v3, посмотрим, что произойдет"
    ]
  },
  {
    "time": [
      280.783556,
      283.343827
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
      283.343827,
      288.516077
    ],
    "en": [
      "ipv6 OSPF one area one"
    ],
    "ru": [
      "ipv6 OSPF одна область один"
    ]
  },
  {
    "time": [
      288.516077,
      290.805952
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
      290.805952,
      295.687972
    ],
    "en": [
      "ok there it is on the interface"
    ],
    "ru": [
      "хорошо, вот оно на интерфейсе"
    ]
  },
  {
    "time": [
      295.687972,
      303.476035
    ],
    "en": [
      "and there you can see that the router created the OSPF v3 process number one for us"
    ],
    "ru": [
      "и там вы можете видеть, что маршрутизатор создал для нас процесс номер один OSPF v3"
    ]
  },
  {
    "time": [
      303.476035,
      308.78918
    ],
    "en": [
      "ok next let's configure OSPF v3 on the remaining routers"
    ],
    "ru": [
      "хорошо, теперь давайте настроим OSPF v3 на оставшихся маршрутизаторах"
    ]
  },
  {
    "time": [
      308.78918,
      312.295951
    ],
    "en": [
      "make sure to put each interface in the correct area"
    ],
    "ru": [
      "убедитесь, что каждый интерфейс размещен в правильной области"
    ]
  },
  {
    "time": [
      312.295951,
      313.916535
    ],
    "en": [
      "our two next"
    ],
    "ru": [
      "наши два следующих"
    ]
  },
  {
    "time": [
      313.916535,
      323.723701
    ],
    "en": [
      "interface g00 ipv6 OSPF one area one"
    ],
    "ru": [
      "интерфейс g00 ipv6 OSPF одна область один"
    ]
  },
  {
    "time": [
      323.723701,
      331.24391
    ],
    "en": [
      "interface g0 1 IP v6 OSPF one area zero"
    ],
    "ru": [
      "интерфейс g0 1 IP v6 OSPF одна нулевая область"
    ]
  },
  {
    "time": [
      331.24391,
      334.874868
    ],
    "en": [
      "ok next is our 3"
    ],
    "ru": [
      "хорошо, дальше наши 3"
    ]
  },
  {
    "time": [
      334.874868,
      344.37593
    ],
    "en": [
      "interface g 0 0 ipv6 OSPF one area 0"
    ],
    "ru": [
      "интерфейс g 0 0 ipv6 OSPF одна область 0"
    ]
  },
  {
    "time": [
      344.37593,
      347.885243
    ],
    "en": [
      "interface g 0 1"
    ],
    "ru": [
      "интерфейс g 0 1"
    ]
  },
  {
    "time": [
      347.885243,
      351.457138
    ],
    "en": [
      "IP v6 OSPF one area -"
    ],
    "ru": [
      "IP v6 OSPF одна область -"
    ]
  },
  {
    "time": [
      351.457138,
      354.701263
    ],
    "en": [
      "ok finally let's go on our 5"
    ],
    "ru": [
      "хорошо, наконец, давайте перейдем к нашему 5"
    ]
  },
  {
    "time": [
      354.701263,
      363.330346
    ],
    "en": [
      "interface g 0 0 ipv6 OSPF one area -"
    ],
    "ru": [
      "интерфейс g 0 0 ipv6 OSPF одна область -"
    ]
  },
  {
    "time": [
      363.330346,
      368.374263
    ],
    "en": [
      "ok we have configured OSPF v3 on each router"
    ],
    "ru": [
      "хорошо, мы настроили OSPF v3 на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      368.374263,
      374.979179
    ],
    "en": [
      "let's wait a few seconds and then check if r5 has received all the routes it should be receiving"
    ],
    "ru": [
      "подождем несколько секунд, а затем проверим, получил ли r5 все маршруты, которые он должен получать"
    ]
  },
  {
    "time": [
      374.979179,
      382.992867
    ],
    "en": [
      "okay now before we check that"
    ],
    "ru": [
      "хорошо, прежде чем мы проверим это"
    ]
  },
  {
    "time": [
      382.992867,
      386.674971
    ],
    "en": [
      "let's use a couple of show commands here on r5"
    ],
    "ru": [
      "давайте воспользуемся парой команд show здесь, на r5"
    ]
  },
  {
    "time": [
      386.674971,
      390.558721
    ],
    "en": [
      "typically I'd use commands like show IP protocols"
    ],
    "ru": [
      "обычно я использую такие команды, как показать IP-протоколы"
    ]
  },
  {
    "time": [
      390.558721,
      394.650596
    ],
    "en": [
      "show IP ospf for show IP ospf neighbor"
    ],
    "ru": [
      "показать IP ospf для показа IP ospf соседа"
    ]
  },
  {
    "time": [
      394.650596,
      401.502804
    ],
    "en": [
      "however for OSPF v3 we have to change the IP in those commands to ipv6"
    ],
    "ru": [
      "однако для OSPF v3 мы должны изменить IP в этих командах на ipv6"
    ]
  },
  {
    "time": [
      401.502804,
      404.679429
    ],
    "en": [
      "show ipv6 protocols"
    ],
    "ru": [
      "показать протоколы ipv6"
    ]
  },
  {
    "time": [
      404.679429,
      408.891367
    ],
    "en": [
      "as you can see this gives us minimal information"
    ],
    "ru": [
      "как видите, это дает нам минимум информации"
    ]
  },
  {
    "time": [
      408.891367,
      413.108763
    ],
    "en": [
      "but it does show which interfaces are when are in which areas which is useful"
    ],
    "ru": [
      "но он показывает, какие интерфейсы и в каких областях полезны."
    ]
  },
  {
    "time": [
      413.108763,
      422.347263
    ],
    "en": [
      "show ipv6 OSPF this command gives us more details including things like timers"
    ],
    "ru": [
      "show ipv6 OSPF эта команда дает нам более подробную информацию, включая таймеры"
    ]
  },
  {
    "time": [
      422.347263,
      430.701513
    ],
    "en": [
      "you can see the router idea of v dot v dot v dot v which was inherited from loopback zeros ipv4 address"
    ],
    "ru": [
      "вы можете увидеть идею маршрутизатора v dot v dot v dot v, которая была унаследована от адреса ipv4 с нулями обратной петли"
    ]
  },
  {
    "time": [
      430.701513,
      435.769158
    ],
    "en": [
      "show ipv6 OSPF neighbor"
    ],
    "ru": [
      "показать ipv6 соседа OSPF"
    ]
  },
  {
    "time": [
      435.769158,
      440.770492
    ],
    "en": [
      "here you can see our 5s OSPF v3 neighbor ship with r3"
    ],
    "ru": [
      "здесь вы можете увидеть наш соседский корабль 5s OSPF v3 с r3"
    ]
  },
  {
    "time": [
      440.770492,
      443.577554
    ],
    "en": [
      "ok now let's check those reps"
    ],
    "ru": [
      "хорошо, теперь давайте проверим этих представителей"
    ]
  },
  {
    "time": [
      443.577554,
      448.410992
    ],
    "en": [
      "do show ipv6 repped"
    ],
    "ru": [
      "показывать ipv6 repped"
    ]
  },
  {
    "time": [
      448.410992,
      453.711575
    ],
    "en": [
      "looks like we have the OSPF routes we need"
    ],
    "ru": [
      "похоже у нас есть нужные маршруты OSPF"
    ]
  },
  {
    "time": [
      453.711575,
      458.469137
    ],
    "en": [
      "and the o i indicates OSPF inter area routes"
    ],
    "ru": [
      "и o i указывает маршруты между областями OSPF"
    ]
  },
  {
    "time": [
      458.469137,
      462.43495
    ],
    "en": [
      "since these networks are all outside of our 5s area -"
    ],
    "ru": [
      "поскольку все эти сети находятся за пределами нашей зоны 5 -"
    ]
  },
  {
    "time": [
      462.43495,
      465.987054
    ],
    "en": [
      "ok now we have one more task"
    ],
    "ru": [
      "хорошо, теперь у нас есть еще одна задача"
    ]
  },
  {
    "time": [
      465.987054,
      468.750846
    ],
    "en": [
      "our one is connected to the internet"
    ],
    "ru": [
      "наш подключен к интернету"
    ]
  },
  {
    "time": [
      468.750846,
      471.635679
    ],
    "en": [
      "so let's make a default route on r1"
    ],
    "ru": [
      "так что давайте сделаем маршрут по умолчанию на r1"
    ]
  },
  {
    "time": [
      471.635679,
      474.165179
    ],
    "en": [
      "and then advertise it into OSPF"
    ],
    "ru": [
      "а затем рекламировать его в OSPF"
    ]
  },
  {
    "time": [
      474.165179,
      479.069783
    ],
    "en": [
      "first let's create the default route"
    ],
    "ru": [
      "сначала давайте создадим маршрут по умолчанию"
    ]
  },
  {
    "time": [
      479.069783,
      484.925846
    ],
    "en": [
      "so we start with ipv6 route"
    ],
    "ru": [
      "Итак, мы начинаем с маршрута ipv6"
    ]
  },
  {
    "time": [
      484.925846,
      490.663075
    ],
    "en": [
      "and then to make a default route type a double colon followed by a slash 0 mask"
    ],
    "ru": [
      "а затем сделать тип маршрута по умолчанию двойным двоеточием, за которым следует маска косой черты 0"
    ]
  },
  {
    "time": [
      490.663075,
      503.226346
    ],
    "en": [
      "then let's give it a next hop of 2001 DB 8 0 1 0 1 double colon -"
    ],
    "ru": [
      "тогда давайте дадим ему следующий переход 2001 DB 8 0 1 0 1 двойное двоеточие -"
    ]
  },
  {
    "time": [
      503.226346,
      506.615742
    ],
    "en": [
      "ok do show ipv6 route"
    ],
    "ru": [
      "хорошо, покажи маршрут ipv6"
    ]
  },
  {
    "time": [
      506.615742,
      508.809908
    ],
    "en": [
      "okay there's the route"
    ],
    "ru": [
      "хорошо, есть маршрут"
    ]
  },
  {
    "time": [
      508.809908,
      513.079012
    ],
    "en": [
      "now to advertise the route into OSPF v3"
    ],
    "ru": [
      "теперь объявить маршрут в OSPF v3"
    ]
  },
  {
    "time": [
      513.079012,
      516.091762
    ],
    "en": [
      "first enter OSPF v3 configuration mode"
    ],
    "ru": [
      "сначала войдите в режим конфигурации OSPF v3"
    ]
  },
  {
    "time": [
      516.091762,
      521.051179
    ],
    "en": [
      "ipv6 router OSPF one"
    ],
    "ru": [
      "маршрутизатор ipv6 OSPF one"
    ]
  },
  {
    "time": [
      521.051179,
      531.235887
    ],
    "en": [
      "now the command to advertise a default route into OSPF v3 is the same as in OSPF v2 for ipv4"
    ],
    "ru": [
      "теперь команда для объявления маршрута по умолчанию в OSPF v3 такая же, как в OSPF v2 для ipv4"
    ]
  },
  {
    "time": [
      531.235887,
      533.676075
    ],
    "en": [
      "however I didn't include this command in the previous lab"
    ],
    "ru": [
      "однако я не включил эту команду в предыдущую лабораторную работу"
    ]
  },
  {
    "time": [
      533.676075,
      535.798408
    ],
    "en": [
      "so I wanted to show it in this lab"
    ],
    "ru": [
      "поэтому я хотел показать это в этой лаборатории"
    ]
  },
  {
    "time": [
      535.798408,
      541.624929
    ],
    "en": [
      "that command is default information originate"
    ],
    "ru": [
      "эта команда является источником информации по умолчанию"
    ]
  },
  {
    "time": [
      541.624929,
      543.372345
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      543.372345,
      549.477158
    ],
    "en": [
      "okay so now let's go to one of the other routers and see if the default route appears"
    ],
    "ru": [
      "хорошо, теперь давайте перейдем к одному из других маршрутизаторов и посмотрим, появится ли маршрут по умолчанию"
    ]
  },
  {
    "time": [
      549.477158,
      551.748908
    ],
    "en": [
      "I'll go check out our to"
    ],
    "ru": [
      "Я пойду проверю наш"
    ]
  },
  {
    "time": [
      551.748908,
      558.49472
    ],
    "en": [
      "do show ipv6 route"
    ],
    "ru": [
      "показывать маршрут ipv6"
    ]
  },
  {
    "time": [
      558.49472,
      561.336741
    ],
    "en": [
      "there it is right at the top"
    ],
    "ru": [
      "вот оно прямо наверху"
    ]
  },
  {
    "time": [
      561.336741,
      568.095991
    ],
    "en": [
      "in this lab we looked at OSPF v3 which is used for ipv6"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрели OSPF v3, который используется для ipv6"
    ]
  },
  {
    "time": [
      568.095991,
      572.643325
    ],
    "en": [
      "there isn't much difference between it and OSPF v2"
    ],
    "ru": [
      "нет большой разницы между ним и OSPF v2"
    ]
  },
  {
    "time": [
      572.643325,
      575.979575
    ],
    "en": [
      "just remember to configure it at the interface level"
    ],
    "ru": [
      "просто не забудьте настроить его на уровне интерфейса"
    ]
  },
  {
    "time": [
      575.979575,
      578.047991
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
      578.047991,
      584.684449
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
      584.684449,
      589.487303
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
      589.487303,
      594.489824
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
      594.489824,
      600.889511
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      600.889511,
      610.139616
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
      610.139616,
      610.139616
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
      610.139616,
      610.139616
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
      610.139616,
      610.139616
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]