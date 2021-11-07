let objs = [
  {
    "time": [
      0.0,
      4.330625
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
      4.330625,
      7.747604
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
      7.747604,
      14.65402
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
      14.65402,
      18.736
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
      18.736,
      24.085375
    ],
    "en": [
      "in this lab we will take a look at some aspects of syslog"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим некоторые аспекты системного журнала"
    ]
  },
  {
    "time": [
      24.085375,
      28.368937
    ],
    "en": [
      "you have surely seen syslog messages as you configure routers and switches"
    ],
    "ru": [
      "вы наверняка видели сообщения системного журнала при настройке маршрутизаторов и коммутаторов"
    ]
  },
  {
    "time": [
      28.368937,
      34.323228
    ],
    "en": [
      "some syslog messages inform you of things like interfaces being enabled and disabled"
    ],
    "ru": [
      "некоторые сообщения системного журнала информируют вас о таких вещах, как включение и отключение интерфейсов"
    ]
  },
  {
    "time": [
      34.323228,
      38.717623
    ],
    "en": [
      "others indicate major problems with the device which can render it unfunctional"
    ],
    "ru": [
      "другие указывают на серьезные проблемы с устройством, которые могут сделать его нефункциональным."
    ]
  },
  {
    "time": [
      38.717623,
      48.235706
    ],
    "en": [
      "you can configure these messages to be displayed in real time on the CLI and also to be stored in RAM or in a server for later reference"
    ],
    "ru": [
      "вы можете настроить эти сообщения для отображения в реальном времени в интерфейсе командной строки, а также для сохранения в ОЗУ или на сервере для дальнейшего использования."
    ]
  },
  {
    "time": [
      48.235706,
      57.002768
    ],
    "en": [
      "there are 8 levels of severity from level 0 aka emergency to level 7 aka debug"
    ],
    "ru": [
      "есть 8 уровней серьезности от уровня 0, также известного как чрезвычайная ситуация, до уровня 7, также известного как отладка"
    ]
  },
  {
    "time": [
      57.002768,
      60.068601
    ],
    "en": [
      "make sure you learn all eight severity levels for your exam"
    ],
    "ru": [
      "убедитесь, что вы изучили все восемь уровней серьезности экзамена"
    ]
  },
  {
    "time": [
      60.068601,
      62.887663
    ],
    "en": [
      "okay let's get started"
    ],
    "ru": [
      "хорошо, давай начнем"
    ]
  },
  {
    "time": [
      62.887663,
      69.034725
    ],
    "en": [
      "step 1 is to connect to our ones console port using PC 2"
    ],
    "ru": [
      "Шаг 1 - подключиться к нашему консольному порту с помощью ПК 2"
    ]
  },
  {
    "time": [
      69.034725,
      77.616245
    ],
    "en": [
      "to do so in packet tracer click on PC 2 click desktop then terminal and accept these defaults"
    ],
    "ru": [
      "для этого в пакетном трассировщике щелкните на ПК 2 щелкните на рабочем столе, затем на терминале и примите эти значения по умолчанию"
    ]
  },
  {
    "time": [
      77.616245,
      81.466453
    ],
    "en": [
      "ok now we are in the CLI for r1"
    ],
    "ru": [
      "Хорошо, теперь мы находимся в CLI для r1"
    ]
  },
  {
    "time": [
      81.466453,
      87.783765
    ],
    "en": [
      "let's shut down and then enable the g00 interface and then check the syslog messages"
    ],
    "ru": [
      "давайте выключим, а затем включим интерфейс g00, а затем проверим сообщения системного журнала"
    ]
  },
  {
    "time": [
      87.783765,
      93.781723
    ],
    "en": [
      "enable conf t interface g00"
    ],
    "ru": [
      "включить конф т интерфейс g00"
    ]
  },
  {
    "time": [
      93.781723,
      95.422223
    ],
    "en": [
      "shutdown"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      95.422223,
      99.127389
    ],
    "en": [
      "yeah we got a couple messages already now let's enable it"
    ],
    "ru": [
      "да, у нас уже есть пара сообщений, давайте включим его"
    ]
  },
  {
    "time": [
      99.127389,
      101.042159
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
      101.042159,
      104.814096
    ],
    "en": [
      "so what is the severity level of these messages"
    ],
    "ru": [
      "Итак, каков уровень серьезности этих сообщений"
    ]
  },
  {
    "time": [
      104.814096,
      108.377512
    ],
    "en": [
      "that is indicated by the number 5 here"
    ],
    "ru": [
      "что обозначено здесь цифрой 5"
    ]
  },
  {
    "time": [
      108.377512,
      115.729762
    ],
    "en": [
      "level 5 is aka informational meaning these aren't critical messages which require urgent attention"
    ],
    "ru": [
      "уровень 5 также известен как информационный, что означает, что это не критические сообщения, требующие срочного внимания."
    ]
  },
  {
    "time": [
      115.729762,
      120.071741
    ],
    "en": [
      "now we are instructed to enable date and time stamps for these messages"
    ],
    "ru": [
      "теперь нам поручено включить отметки даты и времени для этих сообщений"
    ]
  },
  {
    "time": [
      120.071741,
      126.43347
    ],
    "en": [
      "without time stamps these logging messages aren't very helpful when you look back at them at a later time"
    ],
    "ru": [
      "без временных меток эти сообщения журнала не очень полезны, если вы посмотрите на них позже"
    ]
  },
  {
    "time": [
      126.43347,
      132.200157
    ],
    "en": [
      "exit to enable these date and time stamps use this command"
    ],
    "ru": [
      "выйти, чтобы включить эти отметки даты и времени, используйте эту команду"
    ]
  },
  {
    "time": [
      132.200157,
      138.519615
    ],
    "en": [
      "service timestamps log date time m/sec four milliseconds"
    ],
    "ru": [
      "отметки времени службы дата в журнале время м / сек четыре миллисекунды"
    ]
  },
  {
    "time": [
      138.519615,
      142.755407
    ],
    "en": [
      "now let's shut down and enable the interface again"
    ],
    "ru": [
      "теперь давайте выключим и снова включим интерфейс"
    ]
  },
  {
    "time": [
      142.755407,
      148.493177
    ],
    "en": [
      "interface g00 shutdown no shutdown"
    ],
    "ru": [
      "интерфейс g00 выключение без выключения"
    ]
  },
  {
    "time": [
      148.493177,
      154.099032
    ],
    "en": [
      "we've got the same messages but now there are date and time stamps at the beginning"
    ],
    "ru": [
      "у нас есть те же сообщения, но теперь в начале есть отметки даты и времени"
    ]
  },
  {
    "time": [
      154.099032,
      160.501282
    ],
    "en": [
      "the three zero one indicates March first by the way as I haven't configured the date on our one"
    ],
    "ru": [
      "кстати, три нуля означает первый март, так как я не настроил дату на нашем"
    ]
  },
  {
    "time": [
      160.501282,
      169.324677
    ],
    "en": [
      "okay step two is to configure an enable secret of CCNA and then configure the vty lines for telnet"
    ],
    "ru": [
      "Хорошо, шаг два - настроить секрет включения CCNA, а затем настроить линии VTY для telnet"
    ]
  },
  {
    "time": [
      169.324677,
      174.743468
    ],
    "en": [
      "exit enable secret CCNA"
    ],
    "ru": [
      "выход включить секрет CCNA"
    ]
  },
  {
    "time": [
      174.743468,
      178.09353
    ],
    "en": [
      "now let's configure the vty lines"
    ],
    "ru": [
      "теперь давайте настроим линии VTY"
    ]
  },
  {
    "time": [
      178.09353,
      188.238425
    ],
    "en": [
      "line vty 0 15 password CCENT login transport input telnet"
    ],
    "ru": [
      "строка vty 0 15 пароль CCENT логин транспорт ввод telnet"
    ]
  },
  {
    "time": [
      188.238425,
      194.486654
    ],
    "en": [
      "next let's telnet from pc1 to our ones g00 interface"
    ],
    "ru": [
      "Далее давайте подключимся по telnet с pc1 к нашему интерфейсу g00"
    ]
  },
  {
    "time": [
      194.486654,
      207.442029
    ],
    "en": [
      "telnet 192.168.1.1 the vty line password is CCENT"
    ],
    "ru": [
      "telnet 192.168.1.1 пароль линии VTY - CCENT"
    ]
  },
  {
    "time": [
      207.442029,
      209.403966
    ],
    "en": [
      "okay we're in r1"
    ],
    "ru": [
      "хорошо, мы в r1"
    ]
  },
  {
    "time": [
      209.403966,
      215.282611
    ],
    "en": [
      "enable password of CCNA conf t"
    ],
    "ru": [
      "включить пароль CCNA conf t"
    ]
  },
  {
    "time": [
      215.282611,
      220.444298
    ],
    "en": [
      "now let's try to generate some syslog messages here by enabling an unused interface"
    ],
    "ru": [
      "теперь давайте попробуем сгенерировать здесь несколько сообщений системного журнала, включив неиспользуемый интерфейс"
    ]
  },
  {
    "time": [
      220.444298,
      230.74961
    ],
    "en": [
      "note that since I'm connecting to r1 via the g00 interface if I shut down that interface the tongue at connection would of course cut off so let's use g0 one"
    ],
    "ru": [
      "обратите внимание, поскольку я подключаюсь к r1 через интерфейс g00, если я отключу этот интерфейс, язык при подключении, конечно, отключится, поэтому давайте использовать g0 one"
    ]
  },
  {
    "time": [
      230.74961,
      235.384193
    ],
    "en": [
      "interface g0 one no shutdown"
    ],
    "ru": [
      "интерфейс g0 one нет выключения"
    ]
  },
  {
    "time": [
      235.384193,
      238.038463
    ],
    "en": [
      "and no message appears"
    ],
    "ru": [
      "и сообщение не появляется"
    ]
  },
  {
    "time": [
      238.038463,
      243.93138
    ],
    "en": [
      "if you go back to our console connection on PC 2 however a syslog message appeared"
    ],
    "ru": [
      "если вы вернетесь к нашему консольному подключению на ПК 2, однако появится сообщение системного журнала"
    ]
  },
  {
    "time": [
      243.93138,
      249.506504
    ],
    "en": [
      "that's because by default syslog messages are not displayed over the vty lines"
    ],
    "ru": [
      "это потому, что по умолчанию сообщения системного журнала не отображаются в строках VTY"
    ]
  },
  {
    "time": [
      249.506504,
      251.569317
    ],
    "en": [
      "let's change that"
    ],
    "ru": [
      "давай изменим это"
    ]
  },
  {
    "time": [
      251.569317,
      255.893046
    ],
    "en": [
      "type end to go back to a privileged exec mode"
    ],
    "ru": [
      "введите end, чтобы вернуться в привилегированный режим exec"
    ]
  },
  {
    "time": [
      255.893046,
      258.207671
    ],
    "en": [
      "then use this command"
    ],
    "ru": [
      "затем используйте эту команду"
    ]
  },
  {
    "time": [
      258.207671,
      260.303004
    ],
    "en": [
      "terminal monitor"
    ],
    "ru": [
      "терминальный монитор"
    ]
  },
  {
    "time": [
      260.303004,
      263.858545
    ],
    "en": [
      "that should enable syslog messages to the vty lines"
    ],
    "ru": [
      "это должно разрешить сообщения системного журнала для строк VTY"
    ]
  },
  {
    "time": [
      263.858545,
      270.35817
    ],
    "en": [
      "conf T interphase G 0 1 now let's shut it down"
    ],
    "ru": [
      "conf T interphase G 0 1 теперь давайте выключим его"
    ]
  },
  {
    "time": [
      270.35817,
      271.720629
    ],
    "en": [
      "shut down"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      271.720629,
      278.435524
    ],
    "en": [
      "there we go now the message is displayed over telnet as well as over the console connection"
    ],
    "ru": [
      "вот и мы, теперь сообщение отображается как через telnet, так и через консольное соединение"
    ]
  },
  {
    "time": [
      278.435524,
      286.201357
    ],
    "en": [
      "exit the next step is to configure synchronous logging on the console and vty lines"
    ],
    "ru": [
      "Выход следующий шаг - настроить синхронное ведение журнала на консоли и строках vty"
    ]
  },
  {
    "time": [
      286.201357,
      289.024273
    ],
    "en": [
      "now what exactly is synchronous logging"
    ],
    "ru": [
      "теперь что такое синхронное ведение журнала"
    ]
  },
  {
    "time": [
      289.024273,
      294.359627
    ],
    "en": [
      "well it's a little difficult to recreate on packet tracer but without it enabled"
    ],
    "ru": [
      "ну, это немного сложно воссоздать на трассировщике пакетов, но без его включения"
    ]
  },
  {
    "time": [
      294.359627,
      298.128752
    ],
    "en": [
      "if you are typing something into the CLI and a syslog message appears"
    ],
    "ru": [
      "если вы вводите что-то в CLI и появляется сообщение системного журнала"
    ]
  },
  {
    "time": [
      298.128752,
      302.261481
    ],
    "en": [
      "the syslog message appears right in the middle of what you're typing"
    ],
    "ru": [
      "сообщение системного журнала появляется прямо в середине того, что вы вводите"
    ]
  },
  {
    "time": [
      302.261481,
      304.870356
    ],
    "en": [
      "and it becomes very difficult to read your commands"
    ],
    "ru": [
      "и становится очень трудно читать ваши команды"
    ]
  },
  {
    "time": [
      304.870356,
      310.947522
    ],
    "en": [
      "if we enable synchronous logging if a syslog message appears in the middle of you typing"
    ],
    "ru": [
      "если мы включим синхронное ведение журнала, если сообщение системного журнала появляется в середине вашего ввода"
    ]
  },
  {
    "time": [
      310.947522,
      316.338772
    ],
    "en": [
      "a command iOS will then rewrite the command on a new line below the syslog message"
    ],
    "ru": [
      "команда iOS затем перепишет команду в новой строке под сообщением системного журнала"
    ]
  },
  {
    "time": [
      316.338772,
      320.678209
    ],
    "en": [
      "so you can read it clearly before finishing and entering the command"
    ],
    "ru": [
      "чтобы вы могли ясно прочитать его, прежде чем закончить и ввести команду"
    ]
  },
  {
    "time": [
      320.678209,
      324.847542
    ],
    "en": [
      "just make sure you know this command for the test"
    ],
    "ru": [
      "просто убедитесь, что вы знаете эту команду для теста"
    ]
  },
  {
    "time": [
      324.847542,
      330.323229
    ],
    "en": [
      "so to enable it let's go first to the console line line con 0"
    ],
    "ru": [
      "поэтому, чтобы включить его, сначала перейдем к строке консоли con 0"
    ]
  },
  {
    "time": [
      330.323229,
      333.261645
    ],
    "en": [
      "then we just use a single command"
    ],
    "ru": [
      "тогда мы просто используем одну команду"
    ]
  },
  {
    "time": [
      333.261645,
      335.466311
    ],
    "en": [
      "logging synchronous"
    ],
    "ru": [
      "синхронная запись"
    ]
  },
  {
    "time": [
      335.466311,
      339.891644
    ],
    "en": [
      "that's it now let's do it on the vty lines also"
    ],
    "ru": [
      "вот и все, теперь давайте сделаем это и на строках VTY"
    ]
  },
  {
    "time": [
      339.891644,
      343.325435
    ],
    "en": [
      "line vty 0 15"
    ],
    "ru": [
      "строка vty 0 15"
    ]
  },
  {
    "time": [
      343.325435,
      347.744539
    ],
    "en": [
      "logging synchronous exit that's it"
    ],
    "ru": [
      "регистрация синхронного выхода вот и все"
    ]
  },
  {
    "time": [
      347.744539,
      352.356373
    ],
    "en": [
      "the next step is to enable logging to the buffer"
    ],
    "ru": [
      "следующий шаг - включить запись в буфер"
    ]
  },
  {
    "time": [
      352.356373,
      356.391977
    ],
    "en": [
      "this stores logging messages in RAM for you to view later"
    ],
    "ru": [
      "это сохраняет сообщения журнала в ОЗУ, чтобы вы могли просмотреть их позже"
    ]
  },
  {
    "time": [
      356.391977,
      362.603956
    ],
    "en": [
      "if I enter do show logging you can see buffer logging is disabled"
    ],
    "ru": [
      "если я введу do show logging, вы увидите, что ведение журнала буфера отключено"
    ]
  },
  {
    "time": [
      362.603956,
      365.130789
    ],
    "en": [
      "let's enable it with this command"
    ],
    "ru": [
      "давайте включим это с помощью этой команды"
    ]
  },
  {
    "time": [
      365.130789,
      367.415872
    ],
    "en": [
      "logging buffered"
    ],
    "ru": [
      "журналирование буферизовано"
    ]
  },
  {
    "time": [
      367.415872,
      376.583955
    ],
    "en": [
      "do show logging now as you can see down here the default size of this buffer is 4096 bytes"
    ],
    "ru": [
      "покажите ведение журнала сейчас, как вы можете видеть здесь, размер этого буфера по умолчанию составляет 4096 байт"
    ]
  },
  {
    "time": [
      376.583955,
      380.310475
    ],
    "en": [
      "let's double the size to 8000 192 bytes"
    ],
    "ru": [
      "удвоим размер до 8000 192 байта"
    ]
  },
  {
    "time": [
      380.310475,
      387.711912
    ],
    "en": [
      "logging buffered 8 1 9 2 do show logging"
    ],
    "ru": [
      "ведение журнала с буферизацией 8 1 9 2 показывать ведение журнала"
    ]
  },
  {
    "time": [
      387.711912,
      397.160745
    ],
    "en": [
      "there we go finally let's configure our one to send syslog messages to our server server one"
    ],
    "ru": [
      "вот и мы, наконец, давайте настроим наш для отправки сообщений системного журнала на наш сервер-сервер"
    ]
  },
  {
    "time": [
      397.160745,
      403.13987
    ],
    "en": [
      "this is a really good idea as the logging messages in the buffer disappear if you shut down the device"
    ],
    "ru": [
      "это действительно хорошая идея, поскольку сообщения журнала в буфере исчезают, если вы выключаете устройство."
    ]
  },
  {
    "time": [
      403.13987,
      410.024974
    ],
    "en": [
      "and you also don't want to take up a bunch of RAM space with logging messages so an external syslog server is valuable"
    ],
    "ru": [
      "и вы также не хотите занимать кучу места в ОЗУ сообщениями журнала, поэтому внешний сервер системного журнала полезен"
    ]
  },
  {
    "time": [
      410.024974,
      421.334349
    ],
    "en": [
      "to configure this we can either enter logging followed by the IP address of the server or logging host followed by the IP"
    ],
    "ru": [
      "чтобы настроить это, мы можем либо ввести журнал, за которым следует IP-адрес сервера, либо узел регистрации, за которым следует IP"
    ]
  },
  {
    "time": [
      421.334349,
      424.509203
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
      421.334349,
      424.509203
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
      424.509203,
      427.701182
    ],
    "en": [
      "there we go do show logging"
    ],
    "ru": [
      "поехали, ведем журнал шоу"
    ]
  },
  {
    "time": [
      427.701182,
      434.06991
    ],
    "en": [
      "there it is logging to 192.168.1.100"
    ],
    "ru": [
      "там он логируется на 192.168.1.100"
    ]
  },
  {
    "time": [
      434.06991,
      438.360077
    ],
    "en": [
      "let's shut and no shut an interface and then check on server one"
    ],
    "ru": [
      "давайте закроем и не закрываем интерфейс, а затем проверим на сервере один"
    ]
  },
  {
    "time": [
      438.360077,
      443.930493
    ],
    "en": [
      "interface g0 one shut no show"
    ],
    "ru": [
      "интерфейс g0 один закрыл не показывать"
    ]
  },
  {
    "time": [
      443.930493,
      452.985264
    ],
    "en": [
      "now to check messages on a syslog server on packet tracer click the server click services"
    ],
    "ru": [
      "теперь, чтобы проверить сообщения на сервере системного журнала на трассировщике пакетов, щелкните по серверу, щелкните по службам"
    ]
  },
  {
    "time": [
      452.985264,
      455.199722
    ],
    "en": [
      "then click syslog here on the left"
    ],
    "ru": [
      "затем нажмите syslog здесь слева"
    ]
  },
  {
    "time": [
      455.199722,
      460.143889
    ],
    "en": [
      "in this lab we took a look at some aspects of syslog"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрели некоторые аспекты системного журнала"
    ]
  },
  {
    "time": [
      460.143889,
      461.540785
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
      461.540785,
      468.503014
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
      468.503014,
      473.00641
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
      473.00641,
      477.696014
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
      477.696014,
      484.510868
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
      484.510868,
      492.185056
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
      492.185056,
      492.185056
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
      492.185056,
      492.185056
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
      492.185056,
      492.185056
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]