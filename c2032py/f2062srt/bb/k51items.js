let objs = [
  {
    "time": [
      0.0,
      3.0
    ],
    "en": [
      "welcome to this free CCNA packet racer"
    ],
    "ru": [
      "добро пожаловать в этот бесплатный гонщик пакетов CCNA"
    ]
  },
  {
    "time": [
      3.0,
      5.0
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
      5.0,
      7.0
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
      7.0,
      9.0
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
      9.0,
      12.0
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
      12.0,
      13.0
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
      13.0,
      16.0
    ],
    "en": [
      "description also please subscribe to the"
    ],
    "ru": [
      "описание также подпишитесь на"
    ]
  },
  {
    "time": [
      16.0,
      20.0
    ],
    "en": [
      "channel for more labs like this in this"
    ],
    "ru": [
      "канал для других подобных лабораторий в этом"
    ]
  },
  {
    "time": [
      20.0,
      22.0
    ],
    "en": [
      "lab we will troubleshoot the topology we"
    ],
    "ru": [
      "лаборатории мы устраним топологию, которую мы"
    ]
  },
  {
    "time": [
      22.0,
      25.0
    ],
    "en": [
      "configured in the previous lab several"
    ],
    "ru": [
      "настроил в предыдущей лабораторной работе несколько"
    ]
  },
  {
    "time": [
      25.0,
      26.0
    ],
    "en": [
      "miss configurations are preventing our"
    ],
    "ru": [
      "пропущенные конфигурации мешают нашему"
    ]
  },
  {
    "time": [
      26.0,
      28.0
    ],
    "en": [
      "ether channels from operating as"
    ],
    "ru": [
      "эфирные каналы от работы как"
    ]
  },
  {
    "time": [
      28.0,
      28.0
    ],
    "en": [
      "intended"
    ],
    "ru": [
      "предназначены"
    ]
  },
  {
    "time": [
      28.0,
      31.0
    ],
    "en": [
      "let's troubleshoot the errors and fix"
    ],
    "ru": [
      "давайте устраним ошибки и исправим"
    ]
  },
  {
    "time": [
      31.0,
      37.0
    ],
    "en": [
      "them first let's take a look at switch 1"
    ],
    "ru": [
      "сначала давайте взглянем на переключатель 1"
    ]
  },
  {
    "time": [
      37.0,
      42.0
    ],
    "en": [
      "enable show ether channel summary so we"
    ],
    "ru": [
      "включите показ сводки эфирного канала, чтобы мы"
    ]
  },
  {
    "time": [
      42.0,
      45.0
    ],
    "en": [
      "have port channel 1 configured and it's"
    ],
    "ru": [
      "настроили канал порта 1, и это"
    ]
  },
  {
    "time": [
      45.0,
      48.0
    ],
    "en": [
      "layer 2 however it is down as this D"
    ],
    "ru": [
      "слой 2, однако он внизу, так как этот D"
    ]
  },
  {
    "time": [
      48.0,
      51.0
    ],
    "en": [
      "indicates the eye next to the interfaces"
    ],
    "ru": [
      "указывает глаз рядом с интерфейсами"
    ]
  },
  {
    "time": [
      51.0,
      53.0
    ],
    "en": [
      "indicates standalone meaning they aren't"
    ],
    "ru": [
      "указывает на автономность, что означает, что они не"
    ]
  },
  {
    "time": [
      53.0,
      55.0
    ],
    "en": [
      "properly paired with interfaces on"
    ],
    "ru": [
      "правильно соединен с интерфейсами на"
    ]
  },
  {
    "time": [
      55.0,
      57.0
    ],
    "en": [
      "switch 2 to make the ether channel"
    ],
    "ru": [
      "переключатель 2, чтобы сделать эфирный канал"
    ]
  },
  {
    "time": [
      57.0,
      60.0
    ],
    "en": [
      "however you should be able to spot the"
    ],
    "ru": [
      "однако вы сможете заметить"
    ]
  },
  {
    "time": [
      60.0,
      63.0
    ],
    "en": [
      "problem here the ether channel between"
    ],
    "ru": [
      "проблема здесь эфирный канал между"
    ]
  },
  {
    "time": [
      63.0,
      65.0
    ],
    "en": [
      "switch 1 and switch 2 is supposed to be"
    ],
    "ru": [
      "переключатель 1 и переключатель 2 должны быть"
    ]
  },
  {
    "time": [
      65.0,
      70.0
    ],
    "en": [
      "using pagp not LACP that could be why"
    ],
    "ru": [
      "используя pagp, а не LACP, может быть, поэтому"
    ]
  },
  {
    "time": [
      70.0,
      71.0
    ],
    "en": [
      "switch 1 and switch 2 aren't"
    ],
    "ru": [
      "переключатель 1 и переключатель 2 не"
    ]
  },
  {
    "time": [
      71.0,
      73.0
    ],
    "en": [
      "successfully forming either channel"
    ],
    "ru": [
      "успешно формируя любой канал"
    ]
  },
  {
    "time": [
      73.0,
      78.0
    ],
    "en": [
      "let's change that conf t interface range"
    ],
    "ru": [
      "давайте изменим этот диапазон интерфейса conf t"
    ]
  },
  {
    "time": [
      78.0,
      84.0
    ],
    "en": [
      "f 0 1 through 4 no channel group 1 also"
    ],
    "ru": [
      "f 0 от 1 до 4 также нет группы каналов 1"
    ]
  },
  {
    "time": [
      84.0,
      86.0
    ],
    "en": [
      "just to be safe I'll delete the port"
    ],
    "ru": [
      "на всякий случай удалю порт"
    ]
  },
  {
    "time": [
      86.0,
      89.0
    ],
    "en": [
      "channel interface as well no interface"
    ],
    "ru": [
      "интерфейс канала, а также нет интерфейса"
    ]
  },
  {
    "time": [
      89.0,
      93.0
    ],
    "en": [
      "po1 okay let's reconfigure that"
    ],
    "ru": [
      "po1 хорошо, давайте перенастроим это"
    ]
  },
  {
    "time": [
      93.0,
      97.0
    ],
    "en": [
      "interface range F 0 1 through 4 channel"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 1 до 4 каналов"
    ]
  },
  {
    "time": [
      97.0,
      102.0
    ],
    "en": [
      "Group 1 mode desirable do show ether"
    ],
    "ru": [
      "Режим группы 1 желательно показать эфир"
    ]
  },
  {
    "time": [
      102.0,
      107.0
    ],
    "en": [
      "channel summary ok our port channel is"
    ],
    "ru": [
      "сводка канала хорошо, наш порт канал"
    ]
  },
  {
    "time": [
      107.0,
      111.0
    ],
    "en": [
      "working however F 0 1 is down let's see"
    ],
    "ru": [
      "работает, но F 0 1 не работает, давайте посмотрим"
    ]
  },
  {
    "time": [
      111.0,
      117.0
    ],
    "en": [
      "what's up on switch to enable show ether"
    ],
    "ru": [
      "что случилось на переключателе, чтобы включить показ эфира"
    ]
  },
  {
    "time": [
      117.0,
      121.0
    ],
    "en": [
      "channel summary F 0 4 which is connected"
    ],
    "ru": [
      "сводка канала F 0 4, который подключен"
    ]
  },
  {
    "time": [
      121.0,
      125.0
    ],
    "en": [
      "to switch ones F 0 1 is down as well"
    ],
    "ru": [
      "для переключения F 0 1 тоже не работает"
    ]
  },
  {
    "time": [
      125.0,
      127.0
    ],
    "en": [
      "remember in the previous video I said"
    ],
    "ru": [
      "помните, в предыдущем видео я сказал"
    ]
  },
  {
    "time": [
      127.0,
      131.0
    ],
    "en": [
      "port speed duplex etc had to match for"
    ],
    "ru": [
      "дуплекс скорости порта и т. д. должны были соответствовать для"
    ]
  },
  {
    "time": [
      131.0,
      132.0
    ],
    "en": [
      "the ether channel to work"
    ],
    "ru": [
      "эфирный канал для работы"
    ]
  },
  {
    "time": [
      132.0,
      135.0
    ],
    "en": [
      "when one interface isn't properly"
    ],
    "ru": [
      "когда один интерфейс не работает"
    ]
  },
  {
    "time": [
      135.0,
      137.0
    ],
    "en": [
      "joining the port channel one of those"
    ],
    "ru": [
      "присоединение к каналу порта один из тех"
    ]
  },
  {
    "time": [
      137.0,
      138.0
    ],
    "en": [
      "things could be the problem"
    ],
    "ru": [
      "вещи могут быть проблемой"
    ]
  },
  {
    "time": [
      138.0,
      145.0
    ],
    "en": [
      "show interface f0 for full duplex 10"
    ],
    "ru": [
      "показать интерфейс f0 для полного дуплекса 10"
    ]
  },
  {
    "time": [
      145.0,
      147.0
    ],
    "en": [
      "megabits per second"
    ],
    "ru": [
      "мегабит в секунду"
    ]
  },
  {
    "time": [
      147.0,
      150.0
    ],
    "en": [
      "let's check other interfaces show"
    ],
    "ru": [
      "давайте проверим другие интерфейсы покажите"
    ]
  },
  {
    "time": [
      150.0,
      154.0
    ],
    "en": [
      "interface f03 full duplex a hundred"
    ],
    "ru": [
      "интерфейс f03 полный дуплекс на сотку"
    ]
  },
  {
    "time": [
      154.0,
      158.0
    ],
    "en": [
      "megabits per second show interface f0 to"
    ],
    "ru": [
      "мегабит в секунду показать интерфейс от f0 до"
    ]
  },
  {
    "time": [
      158.0,
      162.0
    ],
    "en": [
      "again 100 megabits per second show"
    ],
    "ru": [
      "снова шоу 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      162.0,
      166.0
    ],
    "en": [
      "interface F 0 1 100 megabits per second"
    ],
    "ru": [
      "интерфейс F 0 1 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      166.0,
      169.0
    ],
    "en": [
      "let's also quickly check switch once F 0"
    ],
    "ru": [
      "давайте также быстро проверим переключатель, как только F 0"
    ]
  },
  {
    "time": [
      169.0,
      176.0
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
      169.0,
      176.0
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
      176.0,
      180.0
    ],
    "en": [
      "again 100 megabits per second there's a"
    ],
    "ru": [
      "снова 100 мегабит в секунду есть"
    ]
  },
  {
    "time": [
      180.0,
      182.0
    ],
    "en": [
      "problem the other interfaces are all"
    ],
    "ru": [
      "проблема другие интерфейсы все"
    ]
  },
  {
    "time": [
      182.0,
      184.0
    ],
    "en": [
      "using a speed of 100 megabits per second"
    ],
    "ru": [
      "со скоростью 100 мегабит в секунду"
    ]
  },
  {
    "time": [
      184.0,
      190.0
    ],
    "en": [
      "let's adjust f0 for is speed to the same"
    ],
    "ru": [
      "давайте настроим f0 для такой же скорости"
    ]
  },
  {
    "time": [
      190.0,
      197.0
    ],
    "en": [
      "compte interface f0 for speed 100 do"
    ],
    "ru": [
      "compte interface f0 для скорости 100 делать"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "show ether channel summary there we go"
    ],
    "ru": [
      "показать сводку эфирного канала, мы идем"
    ]
  },
  {
    "time": [
      200.0,
      203.0
    ],
    "en": [
      "all interfaces now have the PFLAG beside"
    ],
    "ru": [
      "все интерфейсы теперь имеют PFLAG рядом"
    ]
  },
  {
    "time": [
      203.0,
      207.0
    ],
    "en": [
      "them meaning import channel however"
    ],
    "ru": [
      "они означают канал импорта, однако"
    ]
  },
  {
    "time": [
      207.0,
      210.0
    ],
    "en": [
      "notice port channel 1 the ether channel"
    ],
    "ru": [
      "обратите внимание на порт канал 1 эфирный канал"
    ]
  },
  {
    "time": [
      210.0,
      215.0
    ],
    "en": [
      "with switch 3 is down gig 0 1 and gig 0"
    ],
    "ru": [
      "с переключателем 3 не работает гиг 0 1 и гиг 0"
    ]
  },
  {
    "time": [
      215.0,
      217.0
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
      215.0,
      217.0
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
      217.0,
      222.0
    ],
    "en": [
      "quickly interface range G 0 1 2 2"
    ],
    "ru": [
      "быстро интерфейс диапазон G 0 1 2 2"
    ]
  },
  {
    "time": [
      222.0,
      228.0
    ],
    "en": [
      "channel Group 1 mode on do show ether"
    ],
    "ru": [
      "режим группы каналов 1 на шоу эфира"
    ]
  },
  {
    "time": [
      228.0,
      231.0
    ],
    "en": [
      "channel summary looks like it's up now"
    ],
    "ru": [
      "сводка канала выглядит так, как будто она готова"
    ]
  },
  {
    "time": [
      231.0,
      237.0
    ],
    "en": [
      "let's check on switch 3 enable show"
    ],
    "ru": [
      "давайте проверим на переключателе 3 включить шоу"
    ]
  },
  {
    "time": [
      237.0,
      241.0
    ],
    "en": [
      "ether channel summary look at poor"
    ],
    "ru": [
      "сводка эфирного канала посмотри на плохую"
    ]
  },
  {
    "time": [
      241.0,
      245.0
    ],
    "en": [
      "channel 1 it has the flags s and u s"
    ],
    "ru": [
      "канал 1 имеет флаги s и u s"
    ]
  },
  {
    "time": [
      245.0,
      248.0
    ],
    "en": [
      "means layer 2 that's not correct it's"
    ],
    "ru": [
      "означает слой 2, это неверно, это"
    ]
  },
  {
    "time": [
      248.0,
      251.0
    ],
    "en": [
      "supposed to be layer 3 it's showing you"
    ],
    "ru": [
      "Предполагается, что это слой 3, он показывает вам"
    ]
  },
  {
    "time": [
      251.0,
      254.0
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
      251.0,
      254.0
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
      254.0,
      260.0
    ],
    "en": [
      "layer 3 down show IP interface g0 1 show"
    ],
    "ru": [
      "уровень 3 вниз показывает IP-интерфейс g0 1 показывает"
    ]
  },
  {
    "time": [
      260.0,
      265.0
    ],
    "en": [
      "IP interface g0 to notice both"
    ],
    "ru": [
      "IP-интерфейс g0, чтобы заметить оба"
    ]
  },
  {
    "time": [
      265.0,
      266.0
    ],
    "en": [
      "interfaces state"
    ],
    "ru": [
      "состояние интерфейсов"
    ]
  },
  {
    "time": [
      266.0,
      269.0
    ],
    "en": [
      "internet protocol processing disabled"
    ],
    "ru": [
      "обработка интернет-протокола отключена"
    ]
  },
  {
    "time": [
      269.0,
      272.0
    ],
    "en": [
      "that means the interface is our layer to"
    ],
    "ru": [
      "это означает, что интерфейс - это наш уровень для"
    ]
  },
  {
    "time": [
      272.0,
      274.0
    ],
    "en": [
      "not layer three and thus the port"
    ],
    "ru": [
      "не третий слой и, следовательно, порт"
    ]
  },
  {
    "time": [
      274.0,
      276.0
    ],
    "en": [
      "channel is layer two as well"
    ],
    "ru": [
      "канал также является вторым слоем"
    ]
  },
  {
    "time": [
      276.0,
      283.0
    ],
    "en": [
      "show run indeed the gig zero one and"
    ],
    "ru": [
      "шоу запустить действительно концерт нулевой и"
    ]
  },
  {
    "time": [
      283.0,
      285.0
    ],
    "en": [
      "gigs zero two interfaces do not have"
    ],
    "ru": [
      "гигов ноль два интерфейса не имеют"
    ]
  },
  {
    "time": [
      285.0,
      286.0
    ],
    "en": [
      "that no switch port command configured"
    ],
    "ru": [
      "что команда порта коммутатора не настроена"
    ]
  },
  {
    "time": [
      286.0,
      289.0
    ],
    "en": [
      "let's configure it"
    ],
    "ru": [
      "давай настроим это"
    ]
  },
  {
    "time": [
      289.0,
      294.0
    ],
    "en": [
      "coffee tea interface range G zero one"
    ],
    "ru": [
      "диапазон интерфейса кофе чай G ноль один"
    ]
  },
  {
    "time": [
      294.0,
      295.0
    ],
    "en": [
      "two two"
    ],
    "ru": [
      "два два"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "no switch port notice the command is"
    ],
    "ru": [
      "нет порта коммутатора, обратите внимание, что команда"
    ]
  },
  {
    "time": [
      298.0,
      301.0
    ],
    "en": [
      "rejected switch three is already"
    ],
    "ru": [
      "отклоненный переключатель три уже"
    ]
  },
  {
    "time": [
      301.0,
      303.0
    ],
    "en": [
      "configured for a layer two ether channel"
    ],
    "ru": [
      "настроен для эфирного канала второго уровня"
    ]
  },
  {
    "time": [
      303.0,
      305.0
    ],
    "en": [
      "let's undo that configuration and then"
    ],
    "ru": [
      "давайте отменим эту конфигурацию, а затем"
    ]
  },
  {
    "time": [
      305.0,
      310.0
    ],
    "en": [
      "redo it no channel Group one no"
    ],
    "ru": [
      "повторить нет канал группа один нет"
    ]
  },
  {
    "time": [
      310.0,
      315.0
    ],
    "en": [
      "interface po1 interface range G zero one"
    ],
    "ru": [
      "интерфейс po1 диапазон интерфейса G ноль один"
    ]
  },
  {
    "time": [
      315.0,
      320.0
    ],
    "en": [
      "two two no switch port channel Group one"
    ],
    "ru": [
      "два два без порта коммутатора канал Группа один"
    ]
  },
  {
    "time": [
      320.0,
      324.0
    ],
    "en": [
      "mode on all so let's give it an IP"
    ],
    "ru": [
      "режим на всех, давайте дадим ему IP"
    ]
  },
  {
    "time": [
      324.0,
      333.0
    ],
    "en": [
      "address interface po1 IP address 2300 to"
    ],
    "ru": [
      "адрес интерфейса po1 IP-адрес 2300 к"
    ]
  },
  {
    "time": [
      333.0,
      336.0
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
      333.0,
      336.0
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
      336.0,
      340.0
    ],
    "en": [
      "summary looks good here it's layer three"
    ],
    "ru": [
      "резюме выглядит хорошо здесь, это третий слой"
    ]
  },
  {
    "time": [
      340.0,
      345.0
    ],
    "en": [
      "now let's check once more on switch to"
    ],
    "ru": [
      "теперь давайте проверим еще раз при переключении на"
    ]
  },
  {
    "time": [
      345.0,
      349.0
    ],
    "en": [
      "do show ether channel summary ok it"
    ],
    "ru": [
      "показать сводку эфирного канала, хорошо"
    ]
  },
  {
    "time": [
      349.0,
      352.0
    ],
    "en": [
      "looks good here let's do one last check"
    ],
    "ru": [
      "здесь хорошо выглядит, давайте сделаем еще одну проверку"
    ]
  },
  {
    "time": [
      352.0,
      361.0
    ],
    "en": [
      "do ping 2300 to okay it looks good we"
    ],
    "ru": [
      "сделайте ping 2300, чтобы хорошо выглядело мы"
    ]
  },
  {
    "time": [
      361.0,
      363.0
    ],
    "en": [
      "can ping switch threes end of the ether"
    ],
    "ru": [
      "может пинг переключить тройку конец эфира"
    ]
  },
  {
    "time": [
      363.0,
      369.0
    ],
    "en": [
      "channel now let's go back to switch 3"
    ],
    "ru": [
      "канал теперь вернемся к переключателю 3"
    ]
  },
  {
    "time": [
      369.0,
      371.0
    ],
    "en": [
      "notice the port channel with switch for"
    ],
    "ru": [
      "обратите внимание на канал порта с переключателем для"
    ]
  },
  {
    "time": [
      371.0,
      374.0
    ],
    "en": [
      "is down all of the interfaces have the"
    ],
    "ru": [
      "не работает все интерфейсы имеют"
    ]
  },
  {
    "time": [
      374.0,
      378.0
    ],
    "en": [
      "standalone flag let's take a look at the"
    ],
    "ru": [
      "автономный флаг, давайте посмотрим на"
    ]
  },
  {
    "time": [
      378.0,
      383.0
    ],
    "en": [
      "configuration do show run channel group"
    ],
    "ru": [
      "конфигурация показать группу каналов запуска"
    ]
  },
  {
    "time": [
      383.0,
      387.0
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
      383.0,
      387.0
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
      387.0,
      393.0
    ],
    "en": [
      "switch for enable show ether channel"
    ],
    "ru": [
      "переключатель для включения показа эфирного канала"
    ]
  },
  {
    "time": [
      393.0,
      399.0
    ],
    "en": [
      "summary same thing here show run"
    ],
    "ru": [
      "Резюме то же самое здесь шоу пробег"
    ]
  },
  {
    "time": [
      399.0,
      402.0
    ],
    "en": [
      "okay here's our problem both switches"
    ],
    "ru": [
      "хорошо вот наша проблема оба переключателя"
    ]
  },
  {
    "time": [
      402.0,
      406.0
    ],
    "en": [
      "are in LACP passive mode passive mode"
    ],
    "ru": [
      "находятся в пассивном режиме LACP в пассивном режиме"
    ]
  },
  {
    "time": [
      406.0,
      408.0
    ],
    "en": [
      "and passive mode won't form an ether"
    ],
    "ru": [
      "и пассивный режим не будет образовывать эфир"
    ]
  },
  {
    "time": [
      408.0,
      410.0
    ],
    "en": [
      "channel at least one side has to be"
    ],
    "ru": [
      "канал хотя бы одна сторона должна быть"
    ]
  },
  {
    "time": [
      410.0,
      411.0
    ],
    "en": [
      "active"
    ],
    "ru": [
      "активный"
    ]
  },
  {
    "time": [
      411.0,
      414.0
    ],
    "en": [
      "let's make switch for active and see if"
    ],
    "ru": [
      "давайте сделаем переключатель активным и посмотрим, если"
    ]
  },
  {
    "time": [
      414.0,
      418.0
    ],
    "en": [
      "that solves the problem compte interface"
    ],
    "ru": [
      "который решает проблему с интерфейсом compte"
    ]
  },
  {
    "time": [
      418.0,
      423.0
    ],
    "en": [
      "range F 0 1 through 4 channel Group 1"
    ],
    "ru": [
      "диапазон F 0 от 1 до 4 каналов Группа 1"
    ]
  },
  {
    "time": [
      423.0,
      428.0
    ],
    "en": [
      "mode active do show ether channel"
    ],
    "ru": [
      "режим активен показать эфирный канал"
    ]
  },
  {
    "time": [
      428.0,
      431.0
    ],
    "en": [
      "summary there we go the port channel is"
    ],
    "ru": [
      "итоги поехали, канал порта есть"
    ]
  },
  {
    "time": [
      431.0,
      434.0
    ],
    "en": [
      "up and all interfaces have the import"
    ],
    "ru": [
      "вверх и все интерфейсы имеют импорт"
    ]
  },
  {
    "time": [
      434.0,
      437.0
    ],
    "en": [
      "channel flag let's confirm on switch 3"
    ],
    "ru": [
      "флаг канала давайте подтвердим на переключателе 3"
    ]
  },
  {
    "time": [
      437.0,
      442.0
    ],
    "en": [
      "as well do show ether channel summary"
    ],
    "ru": [
      "а также показать сводку эфирного канала"
    ]
  },
  {
    "time": [
      442.0,
      446.0
    ],
    "en": [
      "okay looks good we have fixed all of the"
    ],
    "ru": [
      "хорошо выглядит хорошо, мы исправили все"
    ]
  },
  {
    "time": [
      446.0,
      448.0
    ],
    "en": [
      "problems with our ether channels that's"
    ],
    "ru": [
      "проблемы с нашими эфирными каналами, которые"
    ]
  },
  {
    "time": [
      448.0,
      454.0
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
      454.0,
      456.0
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
      456.0,
      458.0
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
      458.0,
      460.0
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
      460.0,
      463.0
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
      463.0,
      465.0
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
      465.0,
      468.0
    ],
    "en": [
      "comments section if you want to support"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      468.0,
      471.0
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
      471.0,
      472.0
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
      472.0,
      476.0
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
      476.0,
      479.0
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
      479.0,
      480.0
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
      480.0,
      480.0
    ],
    "en": [
      "browser"
    ],
    "ru": [
      "браузер"
    ]
  }
]