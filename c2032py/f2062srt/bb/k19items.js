let objs = [
  {
    "time": [
      0.0,
      3.0
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
      3.0,
      6.0
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
      6.0,
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
      11.0
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
      11.0,
      14.0
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
      14.0,
      15.0
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
      15.0,
      19.0
    ],
    "en": [
      "description in this lab we will take"
    ],
    "ru": [
      "описание в этой лаборатории мы возьмем"
    ]
  },
  {
    "time": [
      19.0,
      23.0
    ],
    "en": [
      "another look at port security although"
    ],
    "ru": [
      "еще один взгляд на безопасность порта, хотя"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "we will certainly revisit it again this"
    ],
    "ru": [
      "мы обязательно вернемся к этому еще раз"
    ]
  },
  {
    "time": [
      25.0,
      27.0
    ],
    "en": [
      "lab will be the final one in this"
    ],
    "ru": [
      "лаборатория будет последней в этом"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "introductory series in the previous lab"
    ],
    "ru": [
      "вводная серия в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      30.0,
      32.0
    ],
    "en": [
      "we configured sticky MAC address"
    ],
    "ru": [
      "мы настроили липкий MAC-адрес"
    ]
  },
  {
    "time": [
      32.0,
      35.0
    ],
    "en": [
      "learning however this time we will"
    ],
    "ru": [
      "учимся, однако на этот раз мы будем"
    ]
  },
  {
    "time": [
      35.0,
      37.0
    ],
    "en": [
      "manually configure the MAC addresses of"
    ],
    "ru": [
      "вручную настроить MAC-адреса"
    ]
  },
  {
    "time": [
      37.0,
      41.0
    ],
    "en": [
      "pc1 & pc2 as secure MAC addresses on"
    ],
    "ru": [
      "pc1 и pc2 в качестве безопасных MAC-адресов на"
    ]
  },
  {
    "time": [
      41.0,
      48.0
    ],
    "en": [
      "switch 1 and switch 2 respectively step"
    ],
    "ru": [
      "переключатель 1 и переключатель 2 соответственно шаг"
    ]
  },
  {
    "time": [
      48.0,
      51.0
    ],
    "en": [
      "one is to ping from pc1 to pc2 to"
    ],
    "ru": [
      "один - пинговать с ПК1 на ПК2 на"
    ]
  },
  {
    "time": [
      51.0,
      58.0
    ],
    "en": [
      "generate traffic let's go on pc one ping"
    ],
    "ru": [
      "генерировать трафик пойдем на пк один пинг"
    ]
  },
  {
    "time": [
      58.0,
      64.0
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
      58.0,
      64.0
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
      64.0,
      66.0
    ],
    "en": [
      "to view the MAC address table of switch"
    ],
    "ru": [
      "для просмотра таблицы MAC-адресов коммутатора"
    ]
  },
  {
    "time": [
      66.0,
      69.0
    ],
    "en": [
      "one switch one should have dynamically"
    ],
    "ru": [
      "один переключатель нужно иметь динамически"
    ]
  },
  {
    "time": [
      69.0,
      72.0
    ],
    "en": [
      "learned the MAC address of PC one on f0"
    ],
    "ru": [
      "узнал MAC-адрес ПК один на f0"
    ]
  },
  {
    "time": [
      72.0,
      75.0
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
      72.0,
      75.0
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
      75.0,
      80.0
    ],
    "en": [
      "PC 2 on f0 one let's check on switch 1"
    ],
    "ru": [
      "ПК 2 на f0 один проверим на переключателе 1"
    ]
  },
  {
    "time": [
      80.0,
      85.0
    ],
    "en": [
      "enable show MAC address table as"
    ],
    "ru": [
      "включить показывать таблицу MAC-адресов как"
    ]
  },
  {
    "time": [
      85.0,
      87.0
    ],
    "en": [
      "expected there are two MAC addresses on"
    ],
    "ru": [
      "ожидается, что есть два MAC-адреса на"
    ]
  },
  {
    "time": [
      87.0,
      92.0
    ],
    "en": [
      "F 0 1 and 1 MAC address on F 0 2 we"
    ],
    "ru": [
      "F 0 1 и 1 MAC-адрес на F 0 2 мы"
    ]
  },
  {
    "time": [
      92.0,
      94.0
    ],
    "en": [
      "don't know which of the two addresses on"
    ],
    "ru": [
      "не знаю, какой из двух адресов на"
    ]
  },
  {
    "time": [
      94.0,
      99.0
    ],
    "en": [
      "F 0 1 is switch 2 and which is PC 2 but"
    ],
    "ru": [
      "F 0 1 - это переключатель 2, а это ПК 2, но"
    ]
  },
  {
    "time": [
      99.0,
      101.0
    ],
    "en": [
      "that doesn't matter in this lab we just"
    ],
    "ru": [
      "это не имеет значения, в этой лаборатории мы просто"
    ]
  },
  {
    "time": [
      101.0,
      103.0
    ],
    "en": [
      "want to know the MAC address of PC 1"
    ],
    "ru": [
      "хотите узнать MAC-адрес ПК 1"
    ]
  },
  {
    "time": [
      103.0,
      108.0
    ],
    "en": [
      "which is this"
    ],
    "ru": [
      "что это"
    ]
  },
  {
    "time": [
      108.0,
      111.0
    ],
    "en": [
      "step three is to enable port security on"
    ],
    "ru": [
      "Шаг третий - включить безопасность порта на"
    ]
  },
  {
    "time": [
      111.0,
      112.0
    ],
    "en": [
      "switch ones"
    ],
    "ru": [
      "поменять местами"
    ]
  },
  {
    "time": [
      112.0,
      115.0
    ],
    "en": [
      "f02 interface and manually configure PC"
    ],
    "ru": [
      "f02 и вручную настроить ПК"
    ]
  },
  {
    "time": [
      115.0,
      118.0
    ],
    "en": [
      "ones MAC address as a secure MAC address"
    ],
    "ru": [
      "один MAC-адрес как безопасный MAC-адрес"
    ]
  },
  {
    "time": [
      118.0,
      122.0
    ],
    "en": [
      "first let me copy the MAC address of PC"
    ],
    "ru": [
      "сначала позвольте мне скопировать MAC-адрес ПК"
    ]
  },
  {
    "time": [
      122.0,
      126.0
    ],
    "en": [
      "one there we go now let's configure the"
    ],
    "ru": [
      "один, мы идем, теперь давайте настроим"
    ]
  },
  {
    "time": [
      126.0,
      132.0
    ],
    "en": [
      "f02 interface comte interface f0 to"
    ],
    "ru": [
      "f02 интерфейс comte интерфейс f0 к"
    ]
  },
  {
    "time": [
      132.0,
      135.0
    ],
    "en": [
      "remember we have to configure it as an"
    ],
    "ru": [
      "помните, что мы должны настроить его как"
    ]
  },
  {
    "time": [
      135.0,
      137.0
    ],
    "en": [
      "access port first so switch port mode"
    ],
    "ru": [
      "сначала получить доступ к порту, чтобы переключить режим порта"
    ]
  },
  {
    "time": [
      137.0,
      142.0
    ],
    "en": [
      "access switch port port security okay"
    ],
    "ru": [
      "доступ к порту коммутатора порт безопасность в порядке"
    ]
  },
  {
    "time": [
      142.0,
      145.0
    ],
    "en": [
      "we've done that before now to manually"
    ],
    "ru": [
      "мы делали это раньше, чтобы вручную"
    ]
  },
  {
    "time": [
      145.0,
      147.0
    ],
    "en": [
      "configure a secure MAC address we use"
    ],
    "ru": [
      "настроить безопасный MAC-адрес, который мы используем"
    ]
  },
  {
    "time": [
      147.0,
      150.0
    ],
    "en": [
      "this command switch port port security"
    ],
    "ru": [
      "эта команда коммутатора порт порт безопасности"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "MAC address followed by the MAC address"
    ],
    "ru": [
      "MAC-адрес, за которым следует MAC-адрес"
    ]
  },
  {
    "time": [
      153.0,
      155.0
    ],
    "en": [
      "we want to configure which I will paste"
    ],
    "ru": [
      "мы хотим настроить, что я буду вставлять"
    ]
  },
  {
    "time": [
      155.0,
      161.0
    ],
    "en": [
      "right here there we go"
    ],
    "ru": [
      "прямо здесь мы идем"
    ]
  },
  {
    "time": [
      161.0,
      164.0
    ],
    "en": [
      "next we must repeat the process on"
    ],
    "ru": [
      "Затем мы должны повторить процесс на"
    ]
  },
  {
    "time": [
      164.0,
      168.0
    ],
    "en": [
      "switch 2 for PC 2 now the MAC address of"
    ],
    "ru": [
      "переключатель 2 для ПК 2 теперь MAC-адрес"
    ]
  },
  {
    "time": [
      168.0,
      171.0
    ],
    "en": [
      "PC 2 should already be in the MAC"
    ],
    "ru": [
      "ПК 2 уже должен быть в MAC"
    ]
  },
  {
    "time": [
      171.0,
      174.0
    ],
    "en": [
      "address table of switch to the default"
    ],
    "ru": [
      "адресная таблица переключения на значение по умолчанию"
    ]
  },
  {
    "time": [
      174.0,
      176.0
    ],
    "en": [
      "aging time of a MAC address in the MAC"
    ],
    "ru": [
      "время старения MAC-адреса в MAC"
    ]
  },
  {
    "time": [
      176.0,
      179.0
    ],
    "en": [
      "address table is 5 minutes meaning if"
    ],
    "ru": [
      "адресная таблица составляет 5 минут, что означает, что если"
    ]
  },
  {
    "time": [
      179.0,
      181.0
    ],
    "en": [
      "nothing is heard from that address on"
    ],
    "ru": [
      "ничего не слышно с этого адреса на"
    ]
  },
  {
    "time": [
      181.0,
      183.0
    ],
    "en": [
      "the interface for 5 minutes it is"
    ],
    "ru": [
      "интерфейс на 5 минут это"
    ]
  },
  {
    "time": [
      183.0,
      186.0
    ],
    "en": [
      "cleared from the table each time a"
    ],
    "ru": [
      "удаляется из таблицы каждый раз, когда"
    ]
  },
  {
    "time": [
      186.0,
      188.0
    ],
    "en": [
      "packet from that address is received the"
    ],
    "ru": [
      "пакет с этого адреса получен"
    ]
  },
  {
    "time": [
      188.0,
      192.0
    ],
    "en": [
      "timer resets to 5 minutes however let's"
    ],
    "ru": [
      "таймер сбрасывается до 5 минут, но давайте"
    ]
  },
  {
    "time": [
      192.0,
      196.0
    ],
    "en": [
      "ping from PC to 2 PC one just in case"
    ],
    "ru": [
      "пинг с ПК на 2 ПК один на всякий случай"
    ]
  },
  {
    "time": [
      196.0,
      204.0
    ],
    "en": [
      "ping 192.168.1.1 there we go now under"
    ],
    "ru": [
      "ping 192.168.1.1 там мы идем теперь под"
    ]
  },
  {
    "time": [
      204.0,
      211.0
    ],
    "en": [
      "switch to enable show MAC address table"
    ],
    "ru": [
      "переключатель, чтобы включить отображение таблицы MAC-адресов"
    ]
  },
  {
    "time": [
      211.0,
      214.0
    ],
    "en": [
      "again there are two addresses on the f01"
    ],
    "ru": [
      "снова есть два адреса на f01"
    ]
  },
  {
    "time": [
      214.0,
      217.0
    ],
    "en": [
      "interface those of switch one and pc 1"
    ],
    "ru": [
      "интерфейсы переключателя 1 и ПК 1"
    ]
  },
  {
    "time": [
      217.0,
      221.0
    ],
    "en": [
      "and 1 on the f02 interface that of pc 2"
    ],
    "ru": [
      "и 1 на интерфейсе f02, что на ПК 2"
    ]
  },
  {
    "time": [
      221.0,
      223.0
    ],
    "en": [
      "which is the one we're interested in now"
    ],
    "ru": [
      "который нас сейчас интересует"
    ]
  },
  {
    "time": [
      223.0,
      226.0
    ],
    "en": [
      "so I'll copy that"
    ],
    "ru": [
      "так что я скопирую это"
    ]
  },
  {
    "time": [
      226.0,
      230.0
    ],
    "en": [
      "ok now let's configure the interface"
    ],
    "ru": [
      "хорошо, теперь давайте настроим интерфейс"
    ]
  },
  {
    "time": [
      230.0,
      236.0
    ],
    "en": [
      "coffee interface f0 to switch port mode"
    ],
    "ru": [
      "кофе интерфейс f0 для переключения режима порта"
    ]
  },
  {
    "time": [
      236.0,
      241.0
    ],
    "en": [
      "access switch port port security switch"
    ],
    "ru": [
      "коммутатор доступа порт порт переключатель безопасности"
    ]
  },
  {
    "time": [
      241.0,
      243.0
    ],
    "en": [
      "port port security MAC address and now"
    ],
    "ru": [
      "порт MAC-адрес безопасности порта и сейчас"
    ]
  },
  {
    "time": [
      243.0,
      247.0
    ],
    "en": [
      "I'll paste in PC twos MAC address there"
    ],
    "ru": [
      "Я вставлю туда два MAC-адреса ПК"
    ]
  },
  {
    "time": [
      247.0,
      251.0
    ],
    "en": [
      "we go now let's do a quick ping from pc1"
    ],
    "ru": [
      "мы идем, давайте сделаем быстрый пинг с pc1"
    ]
  },
  {
    "time": [
      251.0,
      254.0
    ],
    "en": [
      "to pc2 to test which is step 5"
    ],
    "ru": [
      "на pc2 для проверки, что является шагом 5"
    ]
  },
  {
    "time": [
      254.0,
      257.0
    ],
    "en": [
      "if we configure the correct addresses"
    ],
    "ru": [
      "если мы настроим правильные адреса"
    ]
  },
  {
    "time": [
      257.0,
      262.0
    ],
    "en": [
      "there should be no problems ping"
    ],
    "ru": [
      "пинговать проблем быть не должно"
    ]
  },
  {
    "time": [
      262.0,
      267.0
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
      262.0,
      267.0
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
      267.0,
      270.0
    ],
    "en": [
      "now on step 6 we're going to try to"
    ],
    "ru": [
      "теперь на шаге 6 мы попробуем"
    ]
  },
  {
    "time": [
      270.0,
      273.0
    ],
    "en": [
      "trigger a port security violation let's"
    ],
    "ru": [
      "вызвать нарушение безопасности порта давайте"
    ]
  },
  {
    "time": [
      273.0,
      276.0
    ],
    "en": [
      "remove the cables first which we can do"
    ],
    "ru": [
      "сначала удалите кабели, что мы можем сделать"
    ]
  },
  {
    "time": [
      276.0,
      281.0
    ],
    "en": [
      "with this tool in packet tracer there we"
    ],
    "ru": [
      "с помощью этого инструмента в пакетном трассировщике мы"
    ]
  },
  {
    "time": [
      281.0,
      285.0
    ],
    "en": [
      "go now I'll connect PC one to switch to"
    ],
    "ru": [
      "иди сейчас я подключу ПК один, чтобы переключиться на"
    ]
  },
  {
    "time": [
      285.0,
      291.0
    ],
    "en": [
      "by clicking on the cable down here there"
    ],
    "ru": [
      "щелкнув по кабелю здесь, там"
    ]
  },
  {
    "time": [
      291.0,
      294.0
    ],
    "en": [
      "we go and now I'll connect PC two to"
    ],
    "ru": [
      "мы идем и теперь я подключу два ПК к"
    ]
  },
  {
    "time": [
      294.0,
      301.0
    ],
    "en": [
      "switch one there we go"
    ],
    "ru": [
      "переключи один, мы идем"
    ]
  },
  {
    "time": [
      301.0,
      305.0
    ],
    "en": [
      "step seven is to pin from pc1 to pc2"
    ],
    "ru": [
      "Шаг седьмой - подключить от pc1 к pc2"
    ]
  },
  {
    "time": [
      305.0,
      308.0
    ],
    "en": [
      "what do you expect will be the result of"
    ],
    "ru": [
      "как вы ожидаете, будет результатом"
    ]
  },
  {
    "time": [
      308.0,
      311.0
    ],
    "en": [
      "this ping we manually configured the MAC"
    ],
    "ru": [
      "этот пинг мы вручную настроили MAC"
    ]
  },
  {
    "time": [
      311.0,
      314.0
    ],
    "en": [
      "address of PC 1 as a secure MAC address"
    ],
    "ru": [
      "адрес ПК 1 как безопасный MAC-адрес"
    ]
  },
  {
    "time": [
      314.0,
      317.0
    ],
    "en": [
      "on switch ones f02 interface and"
    ],
    "ru": [
      "на переключателях интерфейса f02 и"
    ]
  },
  {
    "time": [
      317.0,
      319.0
    ],
    "en": [
      "manually configured the MAC address of"
    ],
    "ru": [
      "вручную настроил MAC-адрес"
    ]
  },
  {
    "time": [
      319.0,
      322.0
    ],
    "en": [
      "PC 2 as a secure MAC address on switch"
    ],
    "ru": [
      "ПК 2 в качестве безопасного MAC-адреса на коммутаторе"
    ]
  },
  {
    "time": [
      322.0,
      327.0
    ],
    "en": [
      "twos f02 interface remember the default"
    ],
    "ru": [
      "twos f02 интерфейс запомнить значение по умолчанию"
    ]
  },
  {
    "time": [
      327.0,
      329.0
    ],
    "en": [
      "number of secure MAC addresses on the"
    ],
    "ru": [
      "количество безопасных MAC-адресов на"
    ]
  },
  {
    "time": [
      329.0,
      332.0
    ],
    "en": [
      "port security enabled interface is 1 so"
    ],
    "ru": [
      "Интерфейс с включенной защитой порта равен 1, поэтому"
    ]
  },
  {
    "time": [
      332.0,
      336.0
    ],
    "en": [
      "if we attempt a ping from pc1 to pc2 now"
    ],
    "ru": [
      "если мы сейчас попытаемся пинговать с pc1 на pc2"
    ]
  },
  {
    "time": [
      336.0,
      338.0
    ],
    "en": [
      "a port security violation should be"
    ],
    "ru": [
      "нарушение безопасности порта должно быть"
    ]
  },
  {
    "time": [
      338.0,
      340.0
    ],
    "en": [
      "triggered when the packet with a"
    ],
    "ru": [
      "срабатывает, когда пакет с"
    ]
  },
  {
    "time": [
      340.0,
      342.0
    ],
    "en": [
      "different MAC address is received on the"
    ],
    "ru": [
      "другой MAC-адрес получен на"
    ]
  },
  {
    "time": [
      342.0,
      346.0
    ],
    "en": [
      "port security enabled interface what"
    ],
    "ru": [
      "интерфейс с включенной безопасностью портов что"
    ]
  },
  {
    "time": [
      346.0,
      349.0
    ],
    "en": [
      "exactly will happen if you remember from"
    ],
    "ru": [
      "точно произойдет, если вы помните из"
    ]
  },
  {
    "time": [
      349.0,
      351.0
    ],
    "en": [
      "a previous lab the default action in the"
    ],
    "ru": [
      "предыдущая лабораторная работа по умолчанию в"
    ]
  },
  {
    "time": [
      351.0,
      353.0
    ],
    "en": [
      "event of a port security violation is"
    ],
    "ru": [
      "событие нарушения безопасности порта"
    ]
  },
  {
    "time": [
      353.0,
      355.0
    ],
    "en": [
      "shut down meaning that the switch port"
    ],
    "ru": [
      "выключение означает, что порт коммутатора"
    ]
  },
  {
    "time": [
      355.0,
      357.0
    ],
    "en": [
      "will enter an error disabled state"
    ],
    "ru": [
      "войдет в состояние отключения из-за ошибки"
    ]
  },
  {
    "time": [
      357.0,
      361.0
    ],
    "en": [
      "effectively shutting it down let's try"
    ],
    "ru": [
      "эффективно выключить его давайте попробуем"
    ]
  },
  {
    "time": [
      361.0,
      368.0
    ],
    "en": [
      "that ping on PC 1 ping 192.168.1 12 as"
    ],
    "ru": [
      "что пинг на ПК 1 пинг 192.168.1 12 как"
    ]
  },
  {
    "time": [
      368.0,
      372.0
    ],
    "en": [
      "you can see the ping fails also if you"
    ],
    "ru": [
      "вы также можете увидеть, что пинг не работает, если вы"
    ]
  },
  {
    "time": [
      372.0,
      374.0
    ],
    "en": [
      "check the port lights on packet tracer"
    ],
    "ru": [
      "проверьте индикаторы портов на пакетном трассировщике"
    ]
  },
  {
    "time": [
      374.0,
      377.0
    ],
    "en": [
      "you'll notice that the port light on the"
    ],
    "ru": [
      "вы заметите, что индикатор порта на"
    ]
  },
  {
    "time": [
      377.0,
      380.0
    ],
    "en": [
      "f02 interface of switch 2 has gone red"
    ],
    "ru": [
      "f02 интерфейс переключателя 2 стал красным"
    ]
  },
  {
    "time": [
      380.0,
      384.0
    ],
    "en": [
      "this means it is shut down however why"
    ],
    "ru": [
      "это означает, что он выключен, но почему"
    ]
  },
  {
    "time": [
      384.0,
      386.0
    ],
    "en": [
      "hasn't the f02 interface of switch 1"
    ],
    "ru": [
      "не имеет интерфейса f02 переключателя 1"
    ]
  },
  {
    "time": [
      386.0,
      389.0
    ],
    "en": [
      "been shut down this is because the"
    ],
    "ru": [
      "был закрыт, потому что"
    ]
  },
  {
    "time": [
      389.0,
      391.0
    ],
    "en": [
      "packet was stopped right at the f02"
    ],
    "ru": [
      "пакет был остановлен прямо на f02"
    ]
  },
  {
    "time": [
      391.0,
      394.0
    ],
    "en": [
      "interface of switch 2 so it never"
    ],
    "ru": [
      "интерфейс переключателя 2, поэтому он никогда не"
    ]
  },
  {
    "time": [
      394.0,
      397.0
    ],
    "en": [
      "reached PC 2 and thus PC to never sent a"
    ],
    "ru": [
      "достиг ПК 2 и, следовательно, ПК никогда не отправлял"
    ]
  },
  {
    "time": [
      397.0,
      399.0
    ],
    "en": [
      "reply to the ping which would have"
    ],
    "ru": [
      "ответить на пинг, который"
    ]
  },
  {
    "time": [
      399.0,
      401.0
    ],
    "en": [
      "triggered a port security violation on"
    ],
    "ru": [
      "вызвало нарушение безопасности порта на"
    ]
  },
  {
    "time": [
      401.0,
      408.0
    ],
    "en": [
      "switch 1 step 8 is to reconnect the"
    ],
    "ru": [
      "Переключатель 1 шаг 8 предназначен для повторного подключения"
    ]
  },
  {
    "time": [
      408.0,
      414.0
    ],
    "en": [
      "cables so I'll remove these cables first"
    ],
    "ru": [
      "кабели, поэтому я сначала сниму эти кабели"
    ]
  },
  {
    "time": [
      414.0,
      417.0
    ],
    "en": [
      "there we go now let's connect them as"
    ],
    "ru": [
      "поехали, теперь давайте соединим их как"
    ]
  },
  {
    "time": [
      417.0,
      423.0
    ],
    "en": [
      "they were originally pc 1 2 switch 1"
    ],
    "ru": [
      "они изначально были ПК 1 2 переключатель 1"
    ]
  },
  {
    "time": [
      423.0,
      429.0
    ],
    "en": [
      "there we go and now pc 2 to switch 2"
    ],
    "ru": [
      "вот и мы, и теперь компьютер 2 для переключения 2"
    ]
  },
  {
    "time": [
      429.0,
      431.0
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
      431.0,
      434.0
    ],
    "en": [
      "you"
    ],
    "ru": [
      "ты"
    ]
  },
  {
    "time": [
      434.0,
      439.0
    ],
    "en": [
      "now let's ping from pc1 to pc2 do you"
    ],
    "ru": [
      "теперь давай пинг с ПК1 на ПК2 ты?"
    ]
  },
  {
    "time": [
      439.0,
      442.0
    ],
    "en": [
      "expect a pin to work PC one is once"
    ],
    "ru": [
      "Ожидайте, что пин-код будет работать на ПК, один раз"
    ]
  },
  {
    "time": [
      442.0,
      444.0
    ],
    "en": [
      "again connected to switch ones"
    ],
    "ru": [
      "снова подключил к переключателям"
    ]
  },
  {
    "time": [
      444.0,
      447.0
    ],
    "en": [
      "f02 interface and its MAC address is"
    ],
    "ru": [
      "f02 и его MAC-адрес"
    ]
  },
  {
    "time": [
      447.0,
      449.0
    ],
    "en": [
      "configured on the interface as a secure"
    ],
    "ru": [
      "настроен на интерфейсе как безопасный"
    ]
  },
  {
    "time": [
      449.0,
      452.0
    ],
    "en": [
      "address so it should be fine"
    ],
    "ru": [
      "адрес, так что все должно быть в порядке"
    ]
  },
  {
    "time": [
      452.0,
      455.0
    ],
    "en": [
      "likewise for PC 2 it is now connected"
    ],
    "ru": [
      "аналогично для ПК 2 он теперь подключен"
    ]
  },
  {
    "time": [
      455.0,
      458.0
    ],
    "en": [
      "again to switch twos f02 interface and"
    ],
    "ru": [
      "снова переключить интерфейс twos f02 и"
    ]
  },
  {
    "time": [
      458.0,
      460.0
    ],
    "en": [
      "its MAC address is configured as a"
    ],
    "ru": [
      "его MAC-адрес настроен как"
    ]
  },
  {
    "time": [
      460.0,
      462.0
    ],
    "en": [
      "secure address on switch twos"
    ],
    "ru": [
      "безопасный адрес на коммутаторе два"
    ]
  },
  {
    "time": [
      462.0,
      466.0
    ],
    "en": [
      "f02 interface let's try that ping on PC"
    ],
    "ru": [
      "f02 interface давайте попробуем этот пинг на ПК"
    ]
  },
  {
    "time": [
      466.0,
      475.0
    ],
    "en": [
      "one ping 192.168.1.2 12 it doesn't work"
    ],
    "ru": [
      "один пинг 192.168.1.2 12 не работает"
    ]
  },
  {
    "time": [
      475.0,
      477.0
    ],
    "en": [
      "why is that even though we connected the"
    ],
    "ru": [
      "почему, хотя мы подключили"
    ]
  },
  {
    "time": [
      477.0,
      479.0
    ],
    "en": [
      "cables back the way they are supposed to"
    ],
    "ru": [
      "кабели обратно так, как они должны"
    ]
  },
  {
    "time": [
      479.0,
      484.0
    ],
    "en": [
      "be well switch twos f02 interface is"
    ],
    "ru": [
      "be well switch twos интерфейс f02 есть"
    ]
  },
  {
    "time": [
      484.0,
      487.0
    ],
    "en": [
      "still down it doesn't automatically"
    ],
    "ru": [
      "все еще вниз это не происходит автоматически"
    ]
  },
  {
    "time": [
      487.0,
      491.0
    ],
    "en": [
      "recover and become enabled again it can"
    ],
    "ru": [
      "восстановиться и снова стать включенным, он может"
    ]
  },
  {
    "time": [
      491.0,
      492.0
    ],
    "en": [
      "be configured to automatically recover"
    ],
    "ru": [
      "быть настроенным на автоматическое восстановление"
    ]
  },
  {
    "time": [
      492.0,
      495.0
    ],
    "en": [
      "from a port security error but that will"
    ],
    "ru": [
      "из-за ошибки безопасности порта, но это"
    ]
  },
  {
    "time": [
      495.0,
      499.0
    ],
    "en": [
      "be a topic for another lab for now let's"
    ],
    "ru": [
      "быть темой для другой лаборатории, а пока давайте"
    ]
  },
  {
    "time": [
      499.0,
      503.0
    ],
    "en": [
      "do it manually I'll go on switch to and"
    ],
    "ru": [
      "сделай это вручную я перейду на и"
    ]
  },
  {
    "time": [
      503.0,
      506.0
    ],
    "en": [
      "first let's check the status of the"
    ],
    "ru": [
      "сначала давайте проверим статус"
    ]
  },
  {
    "time": [
      506.0,
      510.0
    ],
    "en": [
      "interface show interface f02"
    ],
    "ru": [
      "интерфейс показать интерфейс f02"
    ]
  },
  {
    "time": [
      510.0,
      514.0
    ],
    "en": [
      "as you can see here the interface is"
    ],
    "ru": [
      "как вы можете видеть здесь, интерфейс"
    ]
  },
  {
    "time": [
      514.0,
      519.0
    ],
    "en": [
      "down and it's in an error disabled State"
    ],
    "ru": [
      "вниз, и он находится в состоянии отключения из-за ошибки"
    ]
  },
  {
    "time": [
      519.0,
      523.0
    ],
    "en": [
      "how do we manually fix this it's simple"
    ],
    "ru": [
      "как мы вручную исправить это просто"
    ]
  },
  {
    "time": [
      523.0,
      530.0
    ],
    "en": [
      "shutdown no shutdown this will reset the"
    ],
    "ru": [
      "выключение без выключения это сбросит"
    ]
  },
  {
    "time": [
      530.0,
      532.0
    ],
    "en": [
      "interface and it will no longer be in an"
    ],
    "ru": [
      "интерфейс, и его больше не будет в"
    ]
  },
  {
    "time": [
      532.0,
      536.0
    ],
    "en": [
      "error disabled State that's how you"
    ],
    "ru": [
      "ошибка отключена состояние вот как вы"
    ]
  },
  {
    "time": [
      536.0,
      537.0
    ],
    "en": [
      "manually recover an error disabled"
    ],
    "ru": [
      "вручную восстановить ошибку отключено"
    ]
  },
  {
    "time": [
      537.0,
      539.0
    ],
    "en": [
      "interface with the command shutdown"
    ],
    "ru": [
      "интерфейс с командой shutdown"
    ]
  },
  {
    "time": [
      539.0,
      546.0
    ],
    "en": [
      "followed by no shutdown"
    ],
    "ru": [
      "с последующим отключением"
    ]
  },
  {
    "time": [
      546.0,
      550.0
    ],
    "en": [
      "finally let's do one last ping from pc1"
    ],
    "ru": [
      "наконец, давайте сделаем последний пинг от pc1"
    ]
  },
  {
    "time": [
      550.0,
      552.0
    ],
    "en": [
      "to pc2 just to make sure that everything"
    ],
    "ru": [
      "на pc2 просто чтобы убедиться, что все"
    ]
  },
  {
    "time": [
      552.0,
      554.0
    ],
    "en": [
      "is working right again after we did that"
    ],
    "ru": [
      "снова работает сразу после того, как мы это сделали"
    ]
  },
  {
    "time": [
      554.0,
      556.0
    ],
    "en": [
      "little experiment with port security"
    ],
    "ru": [
      "небольшой эксперимент с безопасностью портов"
    ]
  },
  {
    "time": [
      556.0,
      560.0
    ],
    "en": [
      "violations I'll go on PC one one more"
    ],
    "ru": [
      "нарушения пойду на ПК еще одно"
    ]
  },
  {
    "time": [
      560.0,
      568.0
    ],
    "en": [
      "time ping 192.168.1 twelve it works"
    ],
    "ru": [
      "время пинг 192.168.1 двенадцать он работает"
    ]
  },
  {
    "time": [
      568.0,
      573.0
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
      573.0,
      575.0
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
      575.0,
      578.0
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
      578.0,
      580.0
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
      580.0,
      583.0
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
      583.0,
      585.0
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
      585.0,
      588.0
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
      588.0,
      590.0
    ],
    "en": [
      "my channel please consider contributing"
    ],
    "ru": [
      "мой канал, пожалуйста, рассмотрите возможность участия"
    ]
  },
  {
    "time": [
      590.0,
      593.0
    ],
    "en": [
      "to my patreon patreon comm slash"
    ],
    "ru": [
      "на мой patreon patreon comm слэш"
    ]
  },
  {
    "time": [
      593.0,
      597.0
    ],
    "en": [
      "Jeremy's IT lab I accept Bitcoin and"
    ],
    "ru": [
      "ИТ-лаборатория Джереми Я принимаю биткойны и"
    ]
  },
  {
    "time": [
      597.0,
      599.0
    ],
    "en": [
      "aetherium donations via the addresses in"
    ],
    "ru": [
      "пожертвования эфириума через адреса в"
    ]
  },
  {
    "time": [
      599.0,
      603.0
    ],
    "en": [
      "the description I am also a brave"
    ],
    "ru": [
      "по описанию я тоже храбрый"
    ]
  },
  {
    "time": [
      603.0,
      605.0
    ],
    "en": [
      "verified publisher and accept bat or"
    ],
    "ru": [
      "проверенный издатель и принять bat или"
    ]
  },
  {
    "time": [
      605.0,
      608.0
    ],
    "en": [
      "basic attention token donations in the"
    ],
    "ru": [
      "основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      608.0,
      608.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]