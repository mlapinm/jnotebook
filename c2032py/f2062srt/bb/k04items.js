let objs = [
  {
    "time": [
      1.0,
      4.0
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
      4.0,
      7.0
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
      7.0,
      9.0
    ],
    "en": [
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      9.0,
      12.0
    ],
    "en": [
      "this lab we will be working with two"
    ],
    "ru": [
      "в этой лаборатории мы будем работать с двумя"
    ]
  },
  {
    "time": [
      12.0,
      16.0
    ],
    "en": [
      "routers r1 and r2 and two switches"
    ],
    "ru": [
      "маршрутизаторы r1 и r2 и два коммутатора"
    ]
  },
  {
    "time": [
      16.0,
      20.0
    ],
    "en": [
      "switch 1 and switch 2 we will configure"
    ],
    "ru": [
      "переключатель 1 и переключатель 2 мы настроим"
    ]
  },
  {
    "time": [
      20.0,
      22.0
    ],
    "en": [
      "and test a serial connection between the"
    ],
    "ru": [
      "и проверьте последовательное соединение между"
    ]
  },
  {
    "time": [
      22.0,
      24.0
    ],
    "en": [
      "two routers note that I have already"
    ],
    "ru": [
      "два роутера обратите внимание, что я уже"
    ]
  },
  {
    "time": [
      24.0,
      26.0
    ],
    "en": [
      "configured the host names of each of the"
    ],
    "ru": [
      "настроил имена хостов каждого из"
    ]
  },
  {
    "time": [
      26.0,
      30.0
    ],
    "en": [
      "devices beforehand try to complete the"
    ],
    "ru": [
      "устройства заранее постарайтесь завершить"
    ]
  },
  {
    "time": [
      30.0,
      32.0
    ],
    "en": [
      "lab yourself first then continue"
    ],
    "ru": [
      "сначала пробуй себя, а потом продолжай"
    ]
  },
  {
    "time": [
      32.0,
      33.0
    ],
    "en": [
      "watching this video if you have trouble"
    ],
    "ru": [
      "посмотрите это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      33.0,
      38.0
    ],
    "en": [
      "or watch after to check your solution"
    ],
    "ru": [
      "или посмотрите после, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      38.0,
      42.0
    ],
    "en": [
      "step one asks us to use CVP to discover"
    ],
    "ru": [
      "на первом шаге нас просят использовать CVP для обнаружения"
    ]
  },
  {
    "time": [
      42.0,
      44.0
    ],
    "en": [
      "which interfaces are used to connect the"
    ],
    "ru": [
      "какие интерфейсы используются для подключения"
    ]
  },
  {
    "time": [
      44.0,
      47.0
    ],
    "en": [
      "routers and switches if you have the"
    ],
    "ru": [
      "маршрутизаторы и коммутаторы, если у вас есть"
    ]
  },
  {
    "time": [
      47.0,
      49.0
    ],
    "en": [
      "option always show port labels and"
    ],
    "ru": [
      "опция всегда показывать метки портов и"
    ]
  },
  {
    "time": [
      49.0,
      51.0
    ],
    "en": [
      "logical workspace in the Preferences"
    ],
    "ru": [
      "логическая рабочая область в настройках"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "menu of packet tracer enabled the labels"
    ],
    "ru": [
      "в меню пакетного трассировщика включены метки"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "will appear next to the devices but I"
    ],
    "ru": [
      "появится рядом с устройствами, но я"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "have this option turned off we will use"
    ],
    "ru": [
      "отключите эту опцию, мы будем использовать"
    ]
  },
  {
    "time": [
      59.0,
      63.0
    ],
    "en": [
      "CDP or Cisco discovery protocol to"
    ],
    "ru": [
      "CDP или протокол обнаружения Cisco для"
    ]
  },
  {
    "time": [
      63.0,
      67.0
    ],
    "en": [
      "identify the interfaces CDP is a very"
    ],
    "ru": [
      "определить интерфейсы CDP очень"
    ]
  },
  {
    "time": [
      67.0,
      69.0
    ],
    "en": [
      "useful tool and I will create a lab"
    ],
    "ru": [
      "полезный инструмент и я создам лабораторию"
    ]
  },
  {
    "time": [
      69.0,
      72.0
    ],
    "en": [
      "dedicated to using CDP in the future but"
    ],
    "ru": [
      "посвящен использованию CDP в будущем, но"
    ]
  },
  {
    "time": [
      72.0,
      74.0
    ],
    "en": [
      "for this lab all we need to know is one"
    ],
    "ru": [
      "для этой лаборатории все, что нам нужно знать, это один"
    ]
  },
  {
    "time": [
      74.0,
      79.0
    ],
    "en": [
      "command that is show CDP neighbors let's"
    ],
    "ru": [
      "команда, которая показывает соседей CDP, давайте"
    ]
  },
  {
    "time": [
      79.0,
      82.0
    ],
    "en": [
      "give it a try on switch one first I'll"
    ],
    "ru": [
      "сначала попробуй переключиться, я"
    ]
  },
  {
    "time": [
      82.0,
      84.0
    ],
    "en": [
      "type in able to enter privileged exec"
    ],
    "ru": [
      "введите возможность войти в привилегированный exec"
    ]
  },
  {
    "time": [
      84.0,
      88.0
    ],
    "en": [
      "mode this is where we use the command"
    ],
    "ru": [
      "режим здесь мы используем команду"
    ]
  },
  {
    "time": [
      88.0,
      93.0
    ],
    "en": [
      "show CDP neighbors as you can see switch"
    ],
    "ru": [
      "показать соседей CDP, как вы видите переключатель"
    ]
  },
  {
    "time": [
      93.0,
      95.0
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
      93.0,
      95.0
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
      "interface meaning the interface on this"
    ],
    "ru": [
      "интерфейс, означающий интерфейс на этом"
    ]
  },
  {
    "time": [
      98.0,
      102.0
    ],
    "en": [
      "device is fastethernet 0/1 let's go to"
    ],
    "ru": [
      "устройство - fastethernet 0/1, перейдем к"
    ]
  },
  {
    "time": [
      102.0,
      109.0
    ],
    "en": [
      "r1 enable show CDP neighbors our one is"
    ],
    "ru": [
      "r1 включить показать соседей CDP, наш один"
    ]
  },
  {
    "time": [
      109.0,
      111.0
    ],
    "en": [
      "connected to switch 1 on the Fast"
    ],
    "ru": [
      "подключен к переключателю 1 на Fast"
    ]
  },
  {
    "time": [
      111.0,
      114.0
    ],
    "en": [
      "Ethernet 0 interface but something's"
    ],
    "ru": [
      "Интерфейс Ethernet 0, но что-то"
    ]
  },
  {
    "time": [
      114.0,
      119.0
    ],
    "en": [
      "missing where's our - well because I"
    ],
    "ru": [
      "не хватает где наш - ну потому что я"
    ]
  },
  {
    "time": [
      119.0,
      120.0
    ],
    "en": [
      "have linked lights enabled on packet"
    ],
    "ru": [
      "включили связанные огни на пакете"
    ]
  },
  {
    "time": [
      120.0,
      122.0
    ],
    "en": [
      "tracer you might have noticed something"
    ],
    "ru": [
      "трассировщик вы могли что-то заметить"
    ]
  },
  {
    "time": [
      122.0,
      125.0
    ],
    "en": [
      "is wrong let's troubleshoot a little bit"
    ],
    "ru": [
      "не так давайте устраним неполадки немного"
    ]
  },
  {
    "time": [
      125.0,
      128.0
    ],
    "en": [
      "think of potential causes first at layer"
    ],
    "ru": [
      "сначала подумайте о потенциальных причинах"
    ]
  },
  {
    "time": [
      128.0,
      131.0
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
      128.0,
      131.0
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
      131.0,
      134.0
    ],
    "en": [
      "is the cable plugged in"
    ],
    "ru": [
      "подключен ли кабель"
    ]
  },
  {
    "time": [
      134.0,
      137.0
    ],
    "en": [
      "yes it is as you can see here in packet"
    ],
    "ru": [
      "да, это так, как вы можете видеть здесь, в пакете"
    ]
  },
  {
    "time": [
      137.0,
      139.0
    ],
    "en": [
      "tracer are the interfaces turned on"
    ],
    "ru": [
      "tracer включены ли интерфейсы"
    ]
  },
  {
    "time": [
      139.0,
      144.0
    ],
    "en": [
      "let's check I'll use the show IP"
    ],
    "ru": [
      "давайте проверим, я буду использовать IP шоу"
    ]
  },
  {
    "time": [
      144.0,
      148.0
    ],
    "en": [
      "interface brief command to check well we"
    ],
    "ru": [
      "краткая команда интерфейса, чтобы хорошо проверить, мы"
    ]
  },
  {
    "time": [
      148.0,
      150.0
    ],
    "en": [
      "were going to use CDP to discover which"
    ],
    "ru": [
      "собирались использовать CDP, чтобы узнать, какие"
    ]
  },
  {
    "time": [
      150.0,
      152.0
    ],
    "en": [
      "interface r1 is connected to are to"
    ],
    "ru": [
      "интерфейс r1 подключен к"
    ]
  },
  {
    "time": [
      152.0,
      155.0
    ],
    "en": [
      "through but as we can see there is only"
    ],
    "ru": [
      "через, но, как мы видим, есть только"
    ]
  },
  {
    "time": [
      155.0,
      158.0
    ],
    "en": [
      "one serial interface serial zero and"
    ],
    "ru": [
      "один последовательный интерфейс, серийный ноль и"
    ]
  },
  {
    "time": [
      158.0,
      162.0
    ],
    "en": [
      "it's administrative lead áown that means"
    ],
    "ru": [
      "это административное руководство, что означает"
    ]
  },
  {
    "time": [
      162.0,
      165.0
    ],
    "en": [
      "if we do a show run command which I will"
    ],
    "ru": [
      "если мы выполним команду show run, которую я"
    ]
  },
  {
    "time": [
      165.0,
      167.0
    ],
    "en": [
      "do now we should see the shutdown"
    ],
    "ru": [
      "теперь мы должны увидеть выключение"
    ]
  },
  {
    "time": [
      167.0,
      169.0
    ],
    "en": [
      "command on the serial interface"
    ],
    "ru": [
      "команда на последовательном интерфейсе"
    ]
  },
  {
    "time": [
      169.0,
      172.0
    ],
    "en": [
      "I didn't configure this this is by"
    ],
    "ru": [
      "Я не настраивал это"
    ]
  },
  {
    "time": [
      172.0,
      177.0
    ],
    "en": [
      "default let's fix that conf"
    ],
    "ru": [
      "по умолчанию давайте исправим этот конф"
    ]
  },
  {
    "time": [
      177.0,
      182.0
    ],
    "en": [
      "no shutdown let's check on our to also"
    ],
    "ru": [
      "нет выключения, давайте также проверим"
    ]
  },
  {
    "time": [
      182.0,
      187.0
    ],
    "en": [
      "enable show IP interface brief again it"
    ],
    "ru": [
      "снова включить краткое отображение IP-интерфейса"
    ]
  },
  {
    "time": [
      187.0,
      192.0
    ],
    "en": [
      "is shutdown conf T interface serial zero"
    ],
    "ru": [
      "is shutdown conf T интерфейс серийный ноль"
    ]
  },
  {
    "time": [
      192.0,
      195.0
    ],
    "en": [
      "no shutdown okay"
    ],
    "ru": [
      "без выключения, хорошо"
    ]
  },
  {
    "time": [
      195.0,
      199.0
    ],
    "en": [
      "now let's return to r1 this can take"
    ],
    "ru": [
      "теперь давайте вернемся к r1, это может занять"
    ]
  },
  {
    "time": [
      199.0,
      202.0
    ],
    "en": [
      "some time but if I enter show CDP"
    ],
    "ru": [
      "какое-то время, но если я войду, покажу CDP"
    ]
  },
  {
    "time": [
      202.0,
      207.0
    ],
    "en": [
      "neighbors again I should see our - there"
    ],
    "ru": [
      "соседи снова я должен увидеть наших - там"
    ]
  },
  {
    "time": [
      207.0,
      207.0
    ],
    "en": [
      "it is"
    ],
    "ru": [
      "это"
    ]
  },
  {
    "time": [
      207.0,
      210.0
    ],
    "en": [
      "r1 is connected to our - through the"
    ],
    "ru": [
      "r1 подключен к нашему - через"
    ]
  },
  {
    "time": [
      210.0,
      213.0
    ],
    "en": [
      "serial zero interface let's run the"
    ],
    "ru": [
      "последовательный нулевой интерфейс давайте запустим"
    ]
  },
  {
    "time": [
      213.0,
      218.0
    ],
    "en": [
      "command on our to type end to return to"
    ],
    "ru": [
      "команда на нашем, чтобы ввести конец, чтобы вернуться к"
    ]
  },
  {
    "time": [
      218.0,
      228.0
    ],
    "en": [
      "privileged exec mode show CDP neighbors"
    ],
    "ru": [
      "привилегированный режим exec показать соседей CDP"
    ]
  },
  {
    "time": [
      228.0,
      231.0
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
      228.0,
      231.0
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
      231.0,
      233.0
    ],
    "en": [
      "serial zero interface and switch -"
    ],
    "ru": [
      "последовательный нулевой интерфейс и переключатель -"
    ]
  },
  {
    "time": [
      233.0,
      236.0
    ],
    "en": [
      "through the Fast Ethernet zero interface"
    ],
    "ru": [
      "через нулевой интерфейс Fast Ethernet"
    ]
  },
  {
    "time": [
      236.0,
      242.0
    ],
    "en": [
      "finally let's move on to switch to"
    ],
    "ru": [
      "наконец, перейдем к переключению на"
    ]
  },
  {
    "time": [
      242.0,
      247.0
    ],
    "en": [
      "enable show CDP neighbors as you can see"
    ],
    "ru": [
      "включить показывать соседей CDP, как вы можете видеть"
    ]
  },
  {
    "time": [
      247.0,
      250.0
    ],
    "en": [
      "switch 2 is connected to R 2 through the"
    ],
    "ru": [
      "переключатель 2 подключен к R 2 через"
    ]
  },
  {
    "time": [
      250.0,
      254.0
    ],
    "en": [
      "Fast Ethernet 0-1 interface step 1 is"
    ],
    "ru": [
      "Шаг 1 интерфейса Fast Ethernet 0-1:"
    ]
  },
  {
    "time": [
      254.0,
      259.0
    ],
    "en": [
      "now complete"
    ],
    "ru": [
      "теперь завершено"
    ]
  },
  {
    "time": [
      259.0,
      262.0
    ],
    "en": [
      "step2 asks us to identify which end of"
    ],
    "ru": [
      "step2 просит нас определить, какой конец"
    ]
  },
  {
    "time": [
      262.0,
      264.0
    ],
    "en": [
      "the serial connection is DCE"
    ],
    "ru": [
      "последовательное соединение - DCE"
    ]
  },
  {
    "time": [
      264.0,
      268.0
    ],
    "en": [
      "and which end is DTE in serial"
    ],
    "ru": [
      "и какой конец - DTE в последовательном"
    ]
  },
  {
    "time": [
      268.0,
      270.0
    ],
    "en": [
      "connections one side is DCE"
    ],
    "ru": [
      "подключения с одной стороны - DCE"
    ]
  },
  {
    "time": [
      270.0,
      272.0
    ],
    "en": [
      "or data communications equipment and one"
    ],
    "ru": [
      "или оборудование для передачи данных и один"
    ]
  },
  {
    "time": [
      272.0,
      276.0
    ],
    "en": [
      "side is DTE or data terminal equipment"
    ],
    "ru": [
      "сторона - DTE или оконечное оборудование данных"
    ]
  },
  {
    "time": [
      276.0,
      278.0
    ],
    "en": [
      "the most important difference between"
    ],
    "ru": [
      "самое важное различие между"
    ]
  },
  {
    "time": [
      278.0,
      281.0
    ],
    "en": [
      "the two is that the DCE device supplies"
    ],
    "ru": [
      "два - то, что устройство DCE поставляет"
    ]
  },
  {
    "time": [
      281.0,
      283.0
    ],
    "en": [
      "the clock signal that paces the"
    ],
    "ru": [
      "тактовый сигнал, который шагает по"
    ]
  },
  {
    "time": [
      283.0,
      285.0
    ],
    "en": [
      "communications which will adjust in the"
    ],
    "ru": [
      "коммуникации, которые будут корректироваться в"
    ]
  },
  {
    "time": [
      285.0,
      288.0
    ],
    "en": [
      "next step to identify which is which"
    ],
    "ru": [
      "следующий шаг, чтобы определить, что есть что"
    ]
  },
  {
    "time": [
      288.0,
      292.0
    ],
    "en": [
      "let's go to r1 first we'll use the"
    ],
    "ru": [
      "давайте сначала перейдем к r1, мы будем использовать"
    ]
  },
  {
    "time": [
      292.0,
      296.0
    ],
    "en": [
      "command show controllers serial zero if"
    ],
    "ru": [
      "команда show controllers serial zero if"
    ]
  },
  {
    "time": [
      296.0,
      299.0
    ],
    "en": [
      "we just type show controllers we would"
    ],
    "ru": [
      "мы просто набираем контроллеры шоу, которые мы бы"
    ]
  },
  {
    "time": [
      299.0,
      300.0
    ],
    "en": [
      "be overwhelmed with information about"
    ],
    "ru": [
      "быть заваленным информацией о"
    ]
  },
  {
    "time": [
      300.0,
      303.0
    ],
    "en": [
      "every interface on the router so make"
    ],
    "ru": [
      "каждый интерфейс на маршрутизаторе, так что сделайте"
    ]
  },
  {
    "time": [
      303.0,
      307.0
    ],
    "en": [
      "sure to specify serial zero can you find"
    ],
    "ru": [
      "обязательно укажите серийный ноль, можете ли вы найти"
    ]
  },
  {
    "time": [
      307.0,
      310.0
    ],
    "en": [
      "what we're looking for there it is and"
    ],
    "ru": [
      "то, что мы ищем, вот оно и"
    ]
  },
  {
    "time": [
      310.0,
      312.0
    ],
    "en": [
      "this side is the DCE"
    ],
    "ru": [
      "эта сторона - DCE"
    ]
  },
  {
    "time": [
      312.0,
      315.0
    ],
    "en": [
      "you can also see the clock rate"
    ],
    "ru": [
      "вы также можете увидеть тактовую частоту"
    ]
  },
  {
    "time": [
      315.0,
      318.0
    ],
    "en": [
      "mentioned earlier well now I know which"
    ],
    "ru": [
      "уже упоминалось ранее, теперь я знаю, что"
    ]
  },
  {
    "time": [
      318.0,
      322.0
    ],
    "en": [
      "side is DC e that means R 2 should be"
    ],
    "ru": [
      "сторона - DC e, что означает, что R 2 должен быть"
    ]
  },
  {
    "time": [
      322.0,
      325.0
    ],
    "en": [
      "DTE but let's check anyway"
    ],
    "ru": [
      "DTE, но давайте все равно проверим"
    ]
  },
  {
    "time": [
      325.0,
      329.0
    ],
    "en": [
      "let's hop onto our to show controllers"
    ],
    "ru": [
      "Давайте перейдем к нам, чтобы показать контроллеры"
    ]
  },
  {
    "time": [
      329.0,
      335.0
    ],
    "en": [
      "serial zero as expected R 2 is DTE step"
    ],
    "ru": [
      "серийный ноль, как и ожидалось, R 2 - шаг DTE"
    ]
  },
  {
    "time": [
      335.0,
      338.0
    ],
    "en": [
      "two is now complete"
    ],
    "ru": [
      "два теперь завершены"
    ]
  },
  {
    "time": [
      338.0,
      341.0
    ],
    "en": [
      "for step three we have to set the clock"
    ],
    "ru": [
      "для третьего шага мы должны установить часы"
    ]
  },
  {
    "time": [
      341.0,
      344.0
    ],
    "en": [
      "rate on the DCE end to 64 kilobits per"
    ],
    "ru": [
      "скорость на конце DCE до 64 килобит на"
    ]
  },
  {
    "time": [
      344.0,
      349.0
    ],
    "en": [
      "second so let's go back to our one we"
    ],
    "ru": [
      "во-вторых, так что давайте вернемся к нашему"
    ]
  },
  {
    "time": [
      349.0,
      350.0
    ],
    "en": [
      "have to configure the serial zero"
    ],
    "ru": [
      "необходимо настроить серийный ноль"
    ]
  },
  {
    "time": [
      350.0,
      355.0
    ],
    "en": [
      "interface so compte then interface"
    ],
    "ru": [
      "интерфейс, так что комп, затем интерфейс"
    ]
  },
  {
    "time": [
      355.0,
      358.0
    ],
    "en": [
      "serial zero now we are in interface"
    ],
    "ru": [
      "серийный ноль, теперь мы находимся в интерфейсе"
    ]
  },
  {
    "time": [
      358.0,
      362.0
    ],
    "en": [
      "configuration mode the clock rate is set"
    ],
    "ru": [
      "режим конфигурации устанавливается тактовая частота"
    ]
  },
  {
    "time": [
      362.0,
      365.0
    ],
    "en": [
      "with the clock rate command let's use"
    ],
    "ru": [
      "с командой тактовой частоты давайте использовать"
    ]
  },
  {
    "time": [
      365.0,
      366.0
    ],
    "en": [
      "the question mark to see what options we"
    ],
    "ru": [
      "знак вопроса, чтобы увидеть, какие варианты мы"
    ]
  },
  {
    "time": [
      366.0,
      370.0
    ],
    "en": [
      "have as you can see here these options"
    ],
    "ru": [
      "как вы можете видеть здесь эти параметры"
    ]
  },
  {
    "time": [
      370.0,
      373.0
    ],
    "en": [
      "are listed in bits per second our task"
    ],
    "ru": [
      "указаны в битах в секунду наша задача"
    ]
  },
  {
    "time": [
      373.0,
      376.0
    ],
    "en": [
      "is to set the speed to 64 kilobits per"
    ],
    "ru": [
      "установить скорость 64 килобит на"
    ]
  },
  {
    "time": [
      376.0,
      380.0
    ],
    "en": [
      "second which is 64,000 bits per second"
    ],
    "ru": [
      "секунда, что составляет 64000 бит в секунду"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "so let's do that that's all for step"
    ],
    "ru": [
      "так что давайте сделаем это, это все для шага"
    ]
  },
  {
    "time": [
      383.0,
      385.0
    ],
    "en": [
      "three we don't have to do anything on"
    ],
    "ru": [
      "три, нам не нужно ничего делать"
    ]
  },
  {
    "time": [
      385.0,
      389.0
    ],
    "en": [
      "the DTE side step four tells us to set"
    ],
    "ru": [
      "четвертый побочный шаг DTE говорит нам установить"
    ]
  },
  {
    "time": [
      389.0,
      391.0
    ],
    "en": [
      "the IP addresses of the serial"
    ],
    "ru": [
      "IP-адреса серийного"
    ]
  },
  {
    "time": [
      391.0,
      398.0
    ],
    "en": [
      "interfaces of r1 and r2 to 192.168.1 /"
    ],
    "ru": [
      "интерфейсы r1 и r2 к 192.168.1 /"
    ]
  },
  {
    "time": [
      398.0,
      405.0
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
      398.0,
      405.0
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
      "interface configuration mode on r1 so"
    ],
    "ru": [
      "режим настройки интерфейса на r1, поэтому"
    ]
  },
  {
    "time": [
      409.0,
      412.0
    ],
    "en": [
      "let's configure r1 IP address"
    ],
    "ru": [
      "давайте настроим IP-адрес r1"
    ]
  },
  {
    "time": [
      412.0,
      423.0
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
      412.0,
      423.0
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
      423.0,
      426.0
    ],
    "en": [
      "should know if not don't worry about it"
    ],
    "ru": [
      "должен знать, если не беспокойтесь об этом"
    ]
  },
  {
    "time": [
      426.0,
      432.0
    ],
    "en": [
      "it's 255.255.255.0 there we go now let's"
    ],
    "ru": [
      "это 255.255.255.0 поехали"
    ]
  },
  {
    "time": [
      432.0,
      438.0
    ],
    "en": [
      "do the same on r2 conf t interface"
    ],
    "ru": [
      "сделайте то же самое на интерфейсе r2 conf t"
    ]
  },
  {
    "time": [
      438.0,
      447.0
    ],
    "en": [
      "serial zero IP address 192.168.0.0"
    ],
    "ru": [
      "серийный нулевой IP-адрес 192.168.0.0"
    ]
  },
  {
    "time": [
      447.0,
      451.0
    ],
    "en": [
      "that's all for step four"
    ],
    "ru": [
      "это все для четвертого шага"
    ]
  },
  {
    "time": [
      451.0,
      454.0
    ],
    "en": [
      "finally Step five asks us to test"
    ],
    "ru": [
      "наконец Шаг пятый просит нас протестировать"
    ]
  },
  {
    "time": [
      454.0,
      457.0
    ],
    "en": [
      "connectivity between the routers since"
    ],
    "ru": [
      "связь между маршрутизаторами, так как"
    ]
  },
  {
    "time": [
      457.0,
      459.0
    ],
    "en": [
      "we're already on our - let's do it from"
    ],
    "ru": [
      "мы уже на нашем - давайте сделаем это с"
    ]
  },
  {
    "time": [
      459.0,
      462.0
    ],
    "en": [
      "here type end to return to privileged"
    ],
    "ru": [
      "здесь введите конец, чтобы вернуться к привилегированному"
    ]
  },
  {
    "time": [
      462.0,
      465.0
    ],
    "en": [
      "exec mode the IP address of our one"
    ],
    "ru": [
      "exec mode IP адрес нашего"
    ]
  },
  {
    "time": [
      465.0,
      470.0
    ],
    "en": [
      "serial zero interface is 192.168.0.1 so"
    ],
    "ru": [
      "последовательный нулевой интерфейс - 192.168.0.1, поэтому"
    ]
  },
  {
    "time": [
      470.0,
      476.0
    ],
    "en": [
      "ping 192.168.0.1 as you can see we have"
    ],
    "ru": [
      "ping 192.168.0.1, как видите, у нас есть"
    ]
  },
  {
    "time": [
      476.0,
      478.0
    ],
    "en": [
      "connectivity between the routers that's"
    ],
    "ru": [
      "связь между маршрутизаторами,"
    ]
  },
  {
    "time": [
      478.0,
      484.0
    ],
    "en": [
      "all for this lab thank you for watching"
    ],
    "ru": [
      "всем для этой лаборатории спасибо за просмотр"
    ]
  },
  {
    "time": [
      484.0,
      486.0
    ],
    "en": [
      "I hope this lab and video have been"
    ],
    "ru": [
      "Я надеюсь, что эта лабораторная работа и видео были"
    ]
  },
  {
    "time": [
      486.0,
      489.0
    ],
    "en": [
      "helpful for you please subscribe for"
    ],
    "ru": [
      "полезно для вас, пожалуйста, подпишитесь на"
    ]
  },
  {
    "time": [
      489.0,
      491.0
    ],
    "en": [
      "future labs like this which will be"
    ],
    "ru": [
      "будущие лаборатории, подобные этой, которые будут"
    ]
  },
  {
    "time": [
      491.0,
      494.0
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
      494.0,
      496.0
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
      496.0,
      499.0
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
      499.0,
      501.0
    ],
    "en": [
      "my channel I accept Bitcoin donations"
    ],
    "ru": [
      "мой канал я принимаю пожертвования биткойнами"
    ]
  },
  {
    "time": [
      501.0,
      504.0
    ],
    "en": [
      "via the address in the description I am"
    ],
    "ru": [
      "по адресу в описании я"
    ]
  },
  {
    "time": [
      504.0,
      506.0
    ],
    "en": [
      "also a brave verified publisher and"
    ],
    "ru": [
      "также храбрый проверенный издатель и"
    ]
  },
  {
    "time": [
      506.0,
      510.0
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
      510.0,
      510.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]