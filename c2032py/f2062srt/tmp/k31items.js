let objs = [
  {
    "time": [
      0.0,
      4.944354
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
      4.944354,
      8.158166
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
      8.158166,
      15.398416
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
      15.398416,
      19.315166
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
      19.315166,
      24.991082
    ],
    "en": [
      "in this lab we will troubleshoot inter VLAN routing in these 2 small networks"
    ],
    "ru": [
      "в этой лабораторной работе мы будем устранять неполадки маршрутизации между VLAN в этих двух небольших сетях."
    ]
  },
  {
    "time": [
      24.991082,
      27.470603
    ],
    "en": [
      "which we just configured in the previous lab"
    ],
    "ru": [
      "который мы только что настроили в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      27.470603,
      31.693791
    ],
    "en": [
      "I have made one miss configuration on each networking device"
    ],
    "ru": [
      "Я сделал одну конфигурацию пропуска на каждом сетевом устройстве"
    ]
  },
  {
    "time": [
      31.693791,
      34.819666
    ],
    "en": [
      "see if you can find and fix the errors"
    ],
    "ru": [
      "посмотрим, сможешь ли ты найти и исправить ошибки"
    ]
  },
  {
    "time": [
      34.819666,
      42.128041
    ],
    "en": [
      "first let's test the network of PC one switch 1 and PC 2"
    ],
    "ru": [
      "сначала давайте протестируем сеть ПК один коммутатор 1 и ПК 2"
    ]
  },
  {
    "time": [
      42.128041,
      48.546457
    ],
    "en": [
      "I'll try a ping from PC 1 in VLAN 10 to PC 2 in VLAN 20"
    ],
    "ru": [
      "Я попробую выполнить эхо-запрос с ПК 1 в VLAN 10 на ПК 2 в VLAN 20"
    ]
  },
  {
    "time": [
      48.546457,
      59.363061
    ],
    "en": [
      "ping 10.0.2.10 it fails"
    ],
    "ru": [
      "ping 10.0.2.10 не работает"
    ]
  },
  {
    "time": [
      59.363061,
      61.703019
    ],
    "en": [
      "let's investigate on switch one"
    ],
    "ru": [
      "давай исследуем первый переключатель"
    ]
  },
  {
    "time": [
      61.703019,
      68.612935
    ],
    "en": [
      "enable show IP interface brief"
    ],
    "ru": [
      "включить краткое отображение IP-интерфейса"
    ]
  },
  {
    "time": [
      68.612935,
      74.73431
    ],
    "en": [
      "looks like the VLAN 10 and VLAN 20 interfaces have the correct IP addresses configured"
    ],
    "ru": [
      "похоже, что для интерфейсов VLAN 10 и VLAN 20 настроены правильные IP-адреса"
    ]
  },
  {
    "time": [
      74.73431,
      77.801518
    ],
    "en": [
      "show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      77.801518,
      80.925476
    ],
    "en": [
      "here's our problem"
    ],
    "ru": [
      "вот наша проблема"
    ]
  },
  {
    "time": [
      80.925476,
      88.333267
    ],
    "en": [
      "the fastethernet 0/1 interface to which pc one is connected has been placed in VLAN 11 not VLAN 10"
    ],
    "ru": [
      "интерфейс fastethernet 0/1, к которому подключен компьютер, был помещен в VLAN 11, а не в VLAN 10"
    ]
  },
  {
    "time": [
      88.333267,
      94.071517
    ],
    "en": [
      "let's put f01 into the correct VLAN and see if that solves our issue"
    ],
    "ru": [
      "давайте поместим f01 в правильную VLAN и посмотрим, решит ли это нашу проблему"
    ]
  },
  {
    "time": [
      94.071517,
      102.148767
    ],
    "en": [
      "conf t interface f01 switch port access VLAN 10"
    ],
    "ru": [
      "conf t interface f01 коммутатор порт доступ к VLAN 10"
    ]
  },
  {
    "time": [
      102.148767,
      106.429829
    ],
    "en": [
      "I'll delete VLAN 11 also since we're not using it"
    ],
    "ru": [
      "Я также удалю VLAN 11, так как мы ее не используем"
    ]
  },
  {
    "time": [
      106.429829,
      114.403454
    ],
    "en": [
      "exit no VLAN 11 do show VLAN brief"
    ],
    "ru": [
      "выход нет VLAN 11 показать краткую информацию о VLAN"
    ]
  },
  {
    "time": [
      114.403454,
      117.197787
    ],
    "en": [
      "ok our VLAN configuration looks good"
    ],
    "ru": [
      "хорошо, наша конфигурация VLAN выглядит хорошо"
    ]
  },
  {
    "time": [
      117.197787,
      119.642662
    ],
    "en": [
      "let's try that ping from pc1 again"
    ],
    "ru": [
      "давайте попробуем этот пинг с pc1 еще раз"
    ]
  },
  {
    "time": [
      119.642662,
      129.678995
    ],
    "en": [
      "ping 10.0.2.10 this time the ping is successful"
    ],
    "ru": [
      "ping 10.0.2.10 на этот раз пинг успешен"
    ]
  },
  {
    "time": [
      129.678995,
      132.745953
    ],
    "en": [
      "so we have fixed the issue on this network"
    ],
    "ru": [
      "поэтому мы исправили проблему в этой сети"
    ]
  },
  {
    "time": [
      132.745953,
      136.674848
    ],
    "en": [
      "now let's test the issue on the next network"
    ],
    "ru": [
      "теперь давайте проверим проблему в следующей сети"
    ]
  },
  {
    "time": [
      136.674848,
      143.479618
    ],
    "en": [
      "I'll try to ping from PC 3 in VLAN 30 to pc 4 in VLAN 40"
    ],
    "ru": [
      "Я попробую выполнить эхо-запрос с ПК 3 в VLAN 30 на ПК 4 в VLAN 40"
    ]
  },
  {
    "time": [
      143.479618,
      155.479513
    ],
    "en": [
      "ping 10.0.4.10 the ping is not successful"
    ],
    "ru": [
      "пинг 10.0.4.10 пинг не удался"
    ]
  },
  {
    "time": [
      155.479513,
      163.502117
    ],
    "en": [
      "so let's find the issues there should be one issue on r2 and one issue on switch 2 according to the lab instructions"
    ],
    "ru": [
      "Итак, давайте найдем проблемы, должна быть одна проблема на r2 и одна проблема на коммутаторе 2 в соответствии с лабораторными инструкциями"
    ]
  },
  {
    "time": [
      163.502117,
      166.339887
    ],
    "en": [
      "I'll investigate on our two first"
    ],
    "ru": [
      "Я сначала исследую наши два"
    ]
  },
  {
    "time": [
      166.339887,
      177.838699
    ],
    "en": [
      "enable there could be a few problems here like incorrect IP addresses or encapsulation dot1q configurations on the sub interfaces"
    ],
    "ru": [
      "включить, здесь может быть несколько проблем, таких как неправильные IP-адреса или конфигурации инкапсуляции dot1q на подчиненных интерфейсах"
    ]
  },
  {
    "time": [
      177.838699,
      181.134157
    ],
    "en": [
      "I'll use show running config this time"
    ],
    "ru": [
      "На этот раз я воспользуюсь конфигурацией show running"
    ]
  },
  {
    "time": [
      181.134157,
      190.755052
    ],
    "en": [
      "show run our interface Gigabit Ethernet 0 0 is not shutdown and 2 sub interfaces are configured"
    ],
    "ru": [
      "show run наш интерфейс Gigabit Ethernet 0 0 не выключен и настроены 2 субинтерфейса"
    ]
  },
  {
    "time": [
      190.755052,
      198.040156
    ],
    "en": [
      "they are assigned to the proper VLANs 30 and 40 however look at the IP address on the dot 30 sub-interface"
    ],
    "ru": [
      "они назначаются соответствующим виртуальным локальным сетям 30 и 40, однако посмотрите на IP-адрес в субинтерфейсе с точкой 30."
    ]
  },
  {
    "time": [
      198.040156,
      204.193593
    ],
    "en": [
      "the VLAN 30 subnet is 10.0.3.0 / 24"
    ],
    "ru": [
      "подсеть VLAN 30 - 10.0.3.0 / 24"
    ]
  },
  {
    "time": [
      204.193593,
      220.132655
    ],
    "en": [
      "so we should fix that conf t interface g0 0.30 IP address 10.0.3.1 255 255 255 0"
    ],
    "ru": [
      "поэтому мы должны исправить этот conf t interface g0 0.30 IP-адрес 10.0.3.1 255 255 255 0"
    ]
  },
  {
    "time": [
      220.132655,
      224.002592
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      224.002592,
      229.491717
    ],
    "en": [
      "ok now it has the correct IP address so we fixed the issue on r2"
    ],
    "ru": [
      "хорошо, теперь у него правильный IP-адрес, поэтому мы исправили проблему на r2"
    ]
  },
  {
    "time": [
      229.491717,
      233.948717
    ],
    "en": [
      "let's go to switch 2 next"
    ],
    "ru": [
      "давай перейдем к переключателю 2 дальше"
    ]
  },
  {
    "time": [
      233.948717,
      248.734071
    ],
    "en": [
      "enable so the correct configuration on switch 2 should be f01 connected to pc 3 in VLAN 30 and f0 2 connected to pc 4 in VLAN 40"
    ],
    "ru": [
      "включить, поэтому правильная конфигурация на коммутаторе 2 должна быть подключена f01 к ПК 3 в VLAN 30 и f0 2 подключена к ПК 4 в VLAN 40"
    ]
  },
  {
    "time": [
      248.734071,
      253.174133
    ],
    "en": [
      "and g0 1 connected to r2 should be a trunk"
    ],
    "ru": [
      "а g0 1 подключенный к r2 должен быть стволом"
    ]
  },
  {
    "time": [
      253.174133,
      255.386945
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
      255.386945,
      263.318049
    ],
    "en": [
      "show VLAN brief fast ethernet 0 1 & 0 2 are in the correct VLANs"
    ],
    "ru": [
      "показать VLAN short fast ethernet 0 1 и 0 2 находятся в правильных VLAN"
    ]
  },
  {
    "time": [
      263.318049,
      266.562049
    ],
    "en": [
      "show interfaces trunk"
    ],
    "ru": [
      "показать магистраль интерфейсов"
    ]
  },
  {
    "time": [
      266.562049,
      270.489069
    ],
    "en": [
      "however nothing appears with the show interfaces trunk command"
    ],
    "ru": [
      "однако ничего не появляется с командой show interfaces trunk"
    ]
  },
  {
    "time": [
      270.489069,
      272.703735
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      272.703735,
      281.47386
    ],
    "en": [
      "there's our problem Gigabit Ethernet 0 1 is configured as an access port"
    ],
    "ru": [
      "вот наша проблема Gigabit Ethernet 0 1 настроен как порт доступа"
    ]
  },
  {
    "time": [
      281.47386,
      292.524901
    ],
    "en": [
      "actually in the previous show VLAN brief command you could see it in VLAN 1 that means it won't pass data from either VLAN 30 or VLAN 40"
    ],
    "ru": [
      "на самом деле в предыдущей краткой команде show VLAN вы могли увидеть его в VLAN 1, что означает, что он не будет передавать данные ни из VLAN 30, ни из VLAN 40."
    ]
  },
  {
    "time": [
      292.524901,
      296.068109
    ],
    "en": [
      "let's properly configure it as a trunk"
    ],
    "ru": [
      "давайте правильно настроим его как транк"
    ]
  },
  {
    "time": [
      296.068109,
      303.087254
    ],
    "en": [
      "conf t interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "conf t interface g0 1 коммутатор режим порта магистраль"
    ]
  },
  {
    "time": [
      303.087254,
      307.201609
    ],
    "en": [
      "do show interfaces trunk"
    ],
    "ru": [
      "показывать ствол интерфейсов"
    ]
  },
  {
    "time": [
      307.201609,
      312.259338
    ],
    "en": [
      "ok now we can see the gig 0 1 interface is a trunk"
    ],
    "ru": [
      "Хорошо, теперь мы видим, что интерфейс гиг 0 1 - это ствол"
    ]
  },
  {
    "time": [
      312.259338,
      315.133441
    ],
    "en": [
      "and let's check that VLAN configuration once more"
    ],
    "ru": [
      "и давайте еще раз проверим эту конфигурацию VLAN"
    ]
  },
  {
    "time": [
      315.133441,
      318.338254
    ],
    "en": [
      "do show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      318.338254,
      322.186524
    ],
    "en": [
      "it is also no longer listed in VLAN 1"
    ],
    "ru": [
      "его также больше нет в VLAN 1"
    ]
  },
  {
    "time": [
      322.186524,
      327.474607
    ],
    "en": [
      "so our inter VLAN routing in this network should be properly configured"
    ],
    "ru": [
      "поэтому наша маршрутизация между VLAN в этой сети должна быть правильно настроена"
    ]
  },
  {
    "time": [
      327.474607,
      333.505919
    ],
    "en": [
      "let's try that ping again once more from PC 3 to PC 4"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с ПК 3 на ПК 4"
    ]
  },
  {
    "time": [
      333.505919,
      348.58771
    ],
    "en": [
      "ping 10.0.4.10 okay this time the ping works"
    ],
    "ru": [
      "пинг 10.0.4.10 хорошо, на этот раз пинг работает"
    ]
  },
  {
    "time": [
      348.58771,
      351.078085
    ],
    "en": [
      "we have successfully fixed the problems"
    ],
    "ru": [
      "мы успешно устранили проблемы"
    ]
  },
  {
    "time": [
      351.078085,
      353.004751
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
      353.004751,
      360.723896
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
      360.723896,
      365.381729
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
      365.381729,
      370.757187
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comments section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      370.757187,
      377.643999
    ],
    "en": [
      "if you want to support my channel I accept the Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      377.643999,
      386.603937
    ],
    "en": [
      "I am also a great verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также являюсь отличным проверенным издателем и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      386.603937,
      386.603937
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
      386.603937,
      386.603937
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
      386.603937,
      386.603937
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]