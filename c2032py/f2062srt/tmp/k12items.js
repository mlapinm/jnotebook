let objs = [
  {
    "time": [
      0.0,
      4.80927
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
      4.80927,
      8.199957
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
      8.199957,
      14.594145
    ],
    "en": [
      "in this lab we will look at lldp link layer discovery protocol"
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрим протокол обнаружения на канальном уровне lldp."
    ]
  },
  {
    "time": [
      14.594145,
      22.333145
    ],
    "en": [
      "this protocol is very similar to a CDP Cisco discovery protocol which we covered in a couple previous labs"
    ],
    "ru": [
      "этот протокол очень похож на протокол обнаружения Cisco CDP, который мы рассмотрели в нескольких предыдущих лабораторных работах."
    ]
  },
  {
    "time": [
      22.333145,
      26.839332
    ],
    "en": [
      "CDP however is a cisco proprietary protocol"
    ],
    "ru": [
      "CDP, однако, является проприетарным протоколом cisco."
    ]
  },
  {
    "time": [
      26.839332,
      29.245582
    ],
    "en": [
      "meaning it only works with cisco devices"
    ],
    "ru": [
      "это означает, что он работает только с устройствами cisco"
    ]
  },
  {
    "time": [
      29.245582,
      37.33904
    ],
    "en": [
      "lldp is an open standard protocol and can be used on both cisco devices and devices from other vendors"
    ],
    "ru": [
      "lldp - это открытый стандартный протокол, который может использоваться как на устройствах cisco, так и на устройствах других производителей."
    ]
  },
  {
    "time": [
      37.33904,
      45.006394
    ],
    "en": [
      "the first step is to disable CDP and enable lldp on each networking device"
    ],
    "ru": [
      "первый шаг - отключить CDP и включить lldp на каждом сетевом устройстве."
    ]
  },
  {
    "time": [
      45.006394,
      48.688123
    ],
    "en": [
      "these four devices are Cisco devices"
    ],
    "ru": [
      "эти четыре устройства являются устройствами Cisco"
    ]
  },
  {
    "time": [
      48.688123,
      50.972164
    ],
    "en": [
      "so CDP is enabled by default"
    ],
    "ru": [
      "поэтому CDP включен по умолчанию"
    ]
  },
  {
    "time": [
      50.972164,
      58.811705
    ],
    "en": [
      "for this lab let's disable CDP and enable lldp on switch one first"
    ],
    "ru": [
      "для этой лабораторной работы давайте сначала отключим CDP и включим lldp на первом переключателе"
    ]
  },
  {
    "time": [
      58.811705,
      69.56485
    ],
    "en": [
      "enable conf t no CDP run lldp run exit"
    ],
    "ru": [
      "enable conf t no CDP run lldp run exit"
    ]
  },
  {
    "time": [
      69.56485,
      71.768079
    ],
    "en": [
      "that's it pretty simple"
    ],
    "ru": [
      "это довольно просто"
    ]
  },
  {
    "time": [
      71.768079,
      83.879745
    ],
    "en": [
      "now r1 enable conf t no CDP run lldp run exit"
    ],
    "ru": [
      "теперь r1 enable conf t no CDP run lldp run exit"
    ]
  },
  {
    "time": [
      83.879745,
      96.682557
    ],
    "en": [
      "next r2 enable conf t no CDP run lldp run exit finally switch 2"
    ],
    "ru": [
      "следующий r2 enable conf t no CDP run lldp run exit finally switch 2"
    ]
  },
  {
    "time": [
      96.682557,
      108.559536
    ],
    "en": [
      "enable conf t no CDP run lldp run exit"
    ],
    "ru": [
      "enable conf t no CDP run lldp run exit"
    ]
  },
  {
    "time": [
      108.559536,
      115.69164
    ],
    "en": [
      "okay so we have disabled CDP and enabled lldp on each networking device"
    ],
    "ru": [
      "хорошо, поэтому мы отключили CDP и включили lldp на каждом сетевом устройстве"
    ]
  },
  {
    "time": [
      115.69164,
      118.590848
    ],
    "en": [
      "let's go back to switch one"
    ],
    "ru": [
      "давай вернемся, чтобы переключить один"
    ]
  },
  {
    "time": [
      118.590848,
      125.18866
    ],
    "en": [
      "the next step is to use a show command to find the default timer values for lldp"
    ],
    "ru": [
      "следующий шаг - использовать команду show, чтобы найти значения таймера по умолчанию для lldp"
    ]
  },
  {
    "time": [
      125.18866,
      127.582098
    ],
    "en": [
      "we can do that with this command"
    ],
    "ru": [
      "мы можем сделать это с помощью этой команды"
    ]
  },
  {
    "time": [
      127.582098,
      135.692348
    ],
    "en": [
      "show lldp the status is active which is what we want and below are the timers"
    ],
    "ru": [
      "show lldp статус активен, что мы и хотим, а ниже указаны таймеры"
    ]
  },
  {
    "time": [
      135.692348,
      146.003202
    ],
    "en": [
      "the advertisement timer is 30 seconds old timer is 120 seconds and interface re-initialization delay is 2 seconds"
    ],
    "ru": [
      "таймер рекламы - 30 секунд, старый таймер - 120 секунд, а задержка повторной инициализации интерфейса - 2 секунды"
    ]
  },
  {
    "time": [
      146.003202,
      148.287181
    ],
    "en": [
      "these are the default timers"
    ],
    "ru": [
      "это таймеры по умолчанию"
    ]
  },
  {
    "time": [
      148.287181,
      153.496263
    ],
    "en": [
      "you might want to remember these for the test especially the advertisement and hold timers"
    ],
    "ru": [
      "вы можете запомнить их для теста, особенно рекламу и таймеры"
    ]
  },
  {
    "time": [
      153.496263,
      161.877763
    ],
    "en": [
      "next is to use lldp to identify which interfaces are used to connect the networking devices"
    ],
    "ru": [
      "далее следует использовать lldp для определения интерфейсов, используемых для подключения сетевых устройств."
    ]
  },
  {
    "time": [
      161.877763,
      165.066367
    ],
    "en": [
      "let's use this command on switch 1"
    ],
    "ru": [
      "давайте использовать эту команду на переключателе 1"
    ]
  },
  {
    "time": [
      165.066367,
      169.467742
    ],
    "en": [
      "first show lldp neighbors"
    ],
    "ru": [
      "первое шоу lldp соседи"
    ]
  },
  {
    "time": [
      169.467742,
      173.189137
    ],
    "en": [
      "switch 1 has one neighbor r1"
    ],
    "ru": [
      "коммутатор 1 имеет одного соседа r1"
    ]
  },
  {
    "time": [
      173.189137,
      187.726762
    ],
    "en": [
      "the local interface meaning the interface here on switch one is Gigabit Ethernet 1 0 1 and the port ID meaning the interface on r1 is Gigabit Ethernet 0 0"
    ],
    "ru": [
      "локальный интерфейс означает, что интерфейс здесь на первом коммутаторе - Gigabit Ethernet 1 0 1, а идентификатор порта означает, что интерфейс на r1 - Gigabit Ethernet 0 0"
    ]
  },
  {
    "time": [
      187.726762,
      190.783762
    ],
    "en": [
      "let's use the same command on r1"
    ],
    "ru": [
      "давайте использовать ту же команду на r1"
    ]
  },
  {
    "time": [
      190.783762,
      201.898324
    ],
    "en": [
      "show lldp neighbors r1s gig 0 0 interface is connected to switch ones gig 1 0 1 interface"
    ],
    "ru": [
      "показать lldp соседи r1s gig 0 0 интерфейс подключен к коммутатору gig 1 0 1 interface"
    ]
  },
  {
    "time": [
      201.898324,
      209.614217
    ],
    "en": [
      "which we saw before r1s gig 0 1 interface is connected to r2s gig 0 0 interface"
    ],
    "ru": [
      "который мы видели до того, как интерфейс r1s gig 0 1 подключен к интерфейсу r2s gig 0 0"
    ]
  },
  {
    "time": [
      209.614217,
      212.83755
    ],
    "en": [
      "ok let's go on r2 now"
    ],
    "ru": [
      "хорошо, давай сейчас на R2"
    ]
  },
  {
    "time": [
      212.83755,
      217.630758
    ],
    "en": [
      "show lldp neighbors"
    ],
    "ru": [
      "показать lldp соседи"
    ]
  },
  {
    "time": [
      217.630758,
      226.529383
    ],
    "en": [
      "as we saw on r1 r2 s gig 0 0 interface is connected to r1s gig 0 1 interface"
    ],
    "ru": [
      "как мы видели на r1 r2 s gig 0 0 интерфейс подключен к r1s gig 0 1 интерфейсу"
    ]
  },
  {
    "time": [
      226.529383,
      233.149194
    ],
    "en": [
      "also r2 s gig 0 1 interface is connected to switch2s gig 0 1 interface"
    ],
    "ru": [
      "также интерфейс r2 s gig 0 1 подключен к интерфейсу switch2s gig 0 1"
    ]
  },
  {
    "time": [
      233.149194,
      240.77736
    ],
    "en": [
      "let's hop on switch 2 to confirm show lldp neighbors"
    ],
    "ru": [
      "Давайте переключимся на переключатель 2, чтобы подтвердить, что показать lldp neighbors"
    ]
  },
  {
    "time": [
      240.77736,
      247.899025
    ],
    "en": [
      "there we go switch 2 s gig 0 on interface is connected to r2's gig 0 1 interface"
    ],
    "ru": [
      "там мы идем переключатель 2 s gig 0 на интерфейсе подключен к интерфейсу r2 gig 0 1"
    ]
  },
  {
    "time": [
      247.899025,
      256.08967
    ],
    "en": [
      "the next task is to use lldp to identify the iOS version of each neighboring device"
    ],
    "ru": [
      "следующая задача - использовать lldp для определения версии iOS каждого соседнего устройства"
    ]
  },
  {
    "time": [
      256.08967,
      258.994565
    ],
    "en": [
      "let's start here on switch 2"
    ],
    "ru": [
      "давай начнем с переключателя 2"
    ]
  },
  {
    "time": [
      258.994565,
      263.45896
    ],
    "en": [
      "to view this information about a neighboring device use this command"
    ],
    "ru": [
      "чтобы просмотреть эту информацию о соседнем устройстве, используйте эту команду"
    ]
  },
  {
    "time": [
      263.45896,
      265.908564
    ],
    "en": [
      "show lldp neighbors detail"
    ],
    "ru": [
      "показать подробности о соседях lldp"
    ]
  },
  {
    "time": [
      265.908564,
      271.539272
    ],
    "en": [
      "you can see the iOS information for r2 here"
    ],
    "ru": [
      "вы можете увидеть информацию iOS для r2 здесь"
    ]
  },
  {
    "time": [
      271.539272,
      278.283833
    ],
    "en": [
      "see 2900 software running version 15.144"
    ],
    "ru": [
      "см. программное обеспечение 2900 с версией 15.144"
    ]
  },
  {
    "time": [
      278.283833,
      285.988999
    ],
    "en": [
      "now let's go on r2 show lldp neighbors detail"
    ],
    "ru": [
      "теперь давайте перейдем к r2 покажем детали соседей lldp"
    ]
  },
  {
    "time": [
      285.988999,
      12.2371
    ],
    "en": [
      "first we can see switch 2 is running see 3560 software version"
    ],
    "ru": [
      "Сначала мы видим, что коммутатор 2 работает, см. версию программного обеспечения 3560"
    ]
  },
  {
    "time": [
      12.2371,
      296.857894
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
      296.857894,
      306.148144
    ],
    "en": [
      "also the neighboring r1 is running see 2900 software version 15.144"
    ],
    "ru": [
      "также работает соседний r1 см. программное обеспечение 2900 версии 15.144"
    ]
  },
  {
    "time": [
      306.148144,
      312.057539
    ],
    "en": [
      "finally let's go on r1 to find the version of switch 1"
    ],
    "ru": [
      "наконец, давайте перейдем к r1, чтобы найти версию переключателя 1"
    ]
  },
  {
    "time": [
      312.057539,
      317.349268
    ],
    "en": [
      "show lldp neighbors detail"
    ],
    "ru": [
      "показать подробности о соседях lldp"
    ]
  },
  {
    "time": [
      317.349268,
      325.887934
    ],
    "en": [
      "switch 1 is running catalyst layer 3 switch software version 16.3.2"
    ],
    "ru": [
      "коммутатор 1 работает под управлением уровня катализатора 3; версия программного обеспечения коммутатора 16.3.2."
    ]
  },
  {
    "time": [
      325.887934,
      338.385746
    ],
    "en": [
      "the final step is to prevent switch to sf01 interface which is connected to a pc 1 from sending or receiving lldp updates"
    ],
    "ru": [
      "последний шаг - предотвратить переключение на интерфейс sf01, который подключен к ПК 1, от отправки или получения обновлений lldp"
    ]
  },
  {
    "time": [
      338.385746,
      340.790975
    ],
    "en": [
      "let's go on switch 2"
    ],
    "ru": [
      "давай включим выключатель 2"
    ]
  },
  {
    "time": [
      340.790975,
      351.070391
    ],
    "en": [
      "conf t interface f01 to disable lldp reception use this command"
    ],
    "ru": [
      "conf t interface f01, чтобы отключить прием lldp, используйте эту команду"
    ]
  },
  {
    "time": [
      351.070391,
      354.433016
    ],
    "en": [
      "no lldp receive"
    ],
    "ru": [
      "нет lldp получить"
    ]
  },
  {
    "time": [
      354.433016,
      361.737995
    ],
    "en": [
      "ok now to turn off lldp transmission no lldp transmitted"
    ],
    "ru": [
      "Хорошо, теперь, чтобы отключить передачу lldp, lldp не передается"
    ]
  },
  {
    "time": [
      361.737995,
      368.991306
    ],
    "en": [
      "whereas CDP uses one command CDP enable for both reception and transmission"
    ],
    "ru": [
      "тогда как CDP использует одну команду CDP enable как для приема, так и для передачи"
    ]
  },
  {
    "time": [
      368.991306,
      371.683618
    ],
    "en": [
      "lldps is two separate commands"
    ],
    "ru": [
      "lldps - это две отдельные команды"
    ]
  },
  {
    "time": [
      371.683618,
      375.864826
    ],
    "en": [
      "lldp receive and lldp transmit"
    ],
    "ru": [
      "lldp получение и lldp передача"
    ]
  },
  {
    "time": [
      375.864826,
      377.738826
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
      377.738826,
      384.062159
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
      384.062159,
      387.179117
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      387.179117,
      388.929908
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      388.929908,
      393.974616
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
      393.974616,
      401.10697
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
      401.10697,
      409.437115
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
      409.437115,
      409.437115
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
      409.437115,
      409.437115
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
      409.437115,
      409.437115
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]