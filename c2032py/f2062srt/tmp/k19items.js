let objs = [
  {
    "time": [
      0.0,
      4.539458
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
      4.539458,
      7.970895
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
      7.970895,
      14.990103
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
      14.990103,
      19.564165
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
      19.564165,
      25.85977
    ],
    "en": [
      "in this lab we are going to do some important device management tasks"
    ],
    "ru": [
      "в этой лабораторной работе мы собираемся выполнить несколько важных задач по управлению устройствами."
    ]
  },
  {
    "time": [
      25.85977,
      31.634561
    ],
    "en": [
      "including password recovery configuration backup and operating system upgrading"
    ],
    "ru": [
      "включая резервное копирование конфигурации восстановления пароля и обновление операционной системы"
    ]
  },
  {
    "time": [
      31.634561,
      34.968395
    ],
    "en": [
      "first we are locked out of r one"
    ],
    "ru": [
      "Сначала мы заблокированы из одного"
    ]
  },
  {
    "time": [
      34.968395,
      40.711311
    ],
    "en": [
      "someone else configured an enable password and forgot it so we can't enter privileged exec mode"
    ],
    "ru": [
      "кто-то другой настроил пароль включения и забыл его, поэтому мы не можем войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      40.711311,
      44.296061
    ],
    "en": [
      "and thus can't enter global configuration mode to change the password"
    ],
    "ru": [
      "и поэтому не может войти в режим глобальной конфигурации, чтобы изменить пароль"
    ]
  },
  {
    "time": [
      44.296061,
      47.18129
    ],
    "en": [
      "so how can we solve this"
    ],
    "ru": [
      "так как мы можем решить эту проблему"
    ]
  },
  {
    "time": [
      47.18129,
      51.50554
    ],
    "en": [
      "we have to use the rom monitor command line AKA rahman"
    ],
    "ru": [
      "мы должны использовать командную строку монитора ROM AKA rahman"
    ]
  },
  {
    "time": [
      51.50554,
      59.083165
    ],
    "en": [
      "to enter rahman reset the router and then press control break before it finishes booting"
    ],
    "ru": [
      "чтобы войти в rahman, сбросьте маршрутизатор, а затем нажмите кнопку управления, прежде чем он завершит загрузку"
    ]
  },
  {
    "time": [
      59.083165,
      72.497436
    ],
    "en": [
      "to do that in packet tracer click on r1 and under the physical tab here flick the power switch off and on then switch to the CLI and press control break"
    ],
    "ru": [
      "для этого в пакетном трассировщике нажмите r1 и под физической вкладкой выключите и снова включите питание, затем переключитесь на интерфейс командной строки и нажмите контрольную паузу."
    ]
  },
  {
    "time": [
      72.497436,
      76.594394
    ],
    "en": [
      "there we are we're now in ROM on"
    ],
    "ru": [
      "вот и мы, мы сейчас в ПЗУ на"
    ]
  },
  {
    "time": [
      76.594394,
      85.977998
    ],
    "en": [
      "the next step in password recovery is to change the configuration register to make r1 startup and ignore the startup configuration in NVRAM"
    ],
    "ru": [
      "следующий шаг в восстановлении пароля - изменить регистр конфигурации, чтобы запустить r1 и игнорировать конфигурацию запуска в NVRAM."
    ]
  },
  {
    "time": [
      85.977998,
      88.291102
    ],
    "en": [
      "and startup with a default configuration"
    ],
    "ru": [
      "и запуск с конфигурацией по умолчанию"
    ]
  },
  {
    "time": [
      88.291102,
      100.695352
    ],
    "en": [
      "then we will enter privileged exec mode without needing a password copy the startup config to the running config to make it active and then change the password and save the configuration again"
    ],
    "ru": [
      "затем мы войдем в привилегированный режим exec без необходимости пароля, скопируйте конфигурацию запуска в текущую конфигурацию, чтобы сделать ее активной, а затем измените пароль и снова сохраните конфигурацию"
    ]
  },
  {
    "time": [
      100.695352,
      106.972622
    ],
    "en": [
      "so to change the configuration register from rahman use this command"
    ],
    "ru": [
      "поэтому, чтобы изменить регистр конфигурации из rahman, используйте эту команду"
    ]
  },
  {
    "time": [
      106.972622,
      115.094122
    ],
    "en": [
      "conf reg and to make it ignore the contents of nvram type 0 x2 1 4 2"
    ],
    "ru": [
      "conf reg и заставить его игнорировать содержимое типа NVRAM 0 x2 1 4 2"
    ]
  },
  {
    "time": [
      115.094122,
      118.447309
    ],
    "en": [
      "then type reset to reset the router"
    ],
    "ru": [
      "затем введите сброс, чтобы сбросить маршрутизатор"
    ]
  },
  {
    "time": [
      118.447309,
      133.280642
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
      133.280642,
      136.306329
    ],
    "en": [
      "Arwen has now booted ignoring this startup-config"
    ],
    "ru": [
      "Арвен загрузилась, игнорируя эту конфигурацию запуска."
    ]
  },
  {
    "time": [
      136.306329,
      141.898246
    ],
    "en": [
      "enable see no password was needed"
    ],
    "ru": [
      "включить видеть, что пароль не нужен"
    ]
  },
  {
    "time": [
      141.898246,
      147.854911
    ],
    "en": [
      "now that we are safely in privileged exec mode I will copy the start config to the running config"
    ],
    "ru": [
      "теперь, когда мы безопасно находимся в привилегированном режиме exec, я скопирую стартовую конфигурацию в текущую конфигурацию"
    ]
  },
  {
    "time": [
      147.854911,
      150.863724
    ],
    "en": [
      "copy start run"
    ],
    "ru": [
      "копировать начать запуск"
    ]
  },
  {
    "time": [
      150.863724,
      158.142765
    ],
    "en": [
      "as you can see the host name has changed to r1 as the startup config is now the running config"
    ],
    "ru": [
      "как вы можете видеть, имя хоста изменилось на r1, поскольку конфигурация запуска теперь является текущей конфигурацией"
    ]
  },
  {
    "time": [
      158.142765,
      162.156035
    ],
    "en": [
      "let's change the password to CCNA"
    ],
    "ru": [
      "давайте сменим пароль на CCNA"
    ]
  },
  {
    "time": [
      162.156035,
      167.482722
    ],
    "en": [
      "conf t enable secret CCNA"
    ],
    "ru": [
      "conf t включить секретный CCNA"
    ]
  },
  {
    "time": [
      167.482722,
      171.96268
    ],
    "en": [
      "I'll also enable the g00 interface"
    ],
    "ru": [
      "Я также включу интерфейс g00"
    ]
  },
  {
    "time": [
      171.96268,
      175.781035
    ],
    "en": [
      "interface g00 no shut"
    ],
    "ru": [
      "интерфейс g00 не закрывается"
    ]
  },
  {
    "time": [
      175.781035,
      184.003576
    ],
    "en": [
      "now it's important to restore the configuration register to its default so it doesn't always ignore the startup config when booting up"
    ],
    "ru": [
      "теперь важно восстановить регистр конфигурации по умолчанию, чтобы он не всегда игнорировал конфигурацию запуска при загрузке"
    ]
  },
  {
    "time": [
      184.003576,
      189.781555
    ],
    "en": [
      "exit from ramen we used the contract command"
    ],
    "ru": [
      "выход из рамена мы использовали команду контракта"
    ]
  },
  {
    "time": [
      189.781555,
      195.420617
    ],
    "en": [
      "but from the regular CLI use config register"
    ],
    "ru": [
      "но из обычного CLI используйте регистр конфигурации"
    ]
  },
  {
    "time": [
      195.420617,
      199.266158
    ],
    "en": [
      "and the default setting is 0 X 2 1 0 2"
    ],
    "ru": [
      "а настройка по умолчанию - 0 X 2 1 0 2"
    ]
  },
  {
    "time": [
      199.266158,
      202.833949
    ],
    "en": [
      "exit now let's save the configuration"
    ],
    "ru": [
      "теперь выходим, давайте сохраним конфигурацию"
    ]
  },
  {
    "time": [
      202.833949,
      211.002928
    ],
    "en": [
      "right step 2 is to backup our ones startup configuration to our server TFTP 1"
    ],
    "ru": [
      "Правильный шаг 2 - создать резервную копию нашей начальной конфигурации на нашем сервере TFTP 1"
    ]
  },
  {
    "time": [
      211.002928,
      215.489553
    ],
    "en": [
      "first I'll ping it to make sure it's reachable"
    ],
    "ru": [
      "сначала я пингую его, чтобы убедиться, что он доступен"
    ]
  },
  {
    "time": [
      215.489553,
      222.12974
    ],
    "en": [
      "ping 192.168.1.100"
    ],
    "ru": [
      "пинг 192.168.1.100"
    ]
  },
  {
    "time": [
      222.12974,
      226.857803
    ],
    "en": [
      "ok looks good"
    ],
    "ru": [
      "хорошо выглядит хорошо"
    ]
  },
  {
    "time": [
      226.857803,
      232.082177
    ],
    "en": [
      "To copy the configuration to a TFTP server use this command"
    ],
    "ru": [
      "Чтобы скопировать конфигурацию на сервер TFTP, используйте эту команду"
    ]
  },
  {
    "time": [
      232.082177,
      235.910656
    ],
    "en": [
      "copy startup config TFTP"
    ],
    "ru": [
      "скопировать конфигурацию запуска TFTP"
    ]
  },
  {
    "time": [
      235.910656,
      241.356447
    ],
    "en": [
      "now it asks us the IP address 192.168.1.100"
    ],
    "ru": [
      "теперь он запрашивает у нас IP-адрес 192.168.1.100"
    ]
  },
  {
    "time": [
      241.356447,
      244.103134
    ],
    "en": [
      "and the file name let's accept the default"
    ],
    "ru": [
      "и имя файла принимаем значение по умолчанию"
    ]
  },
  {
    "time": [
      244.103134,
      246.885759
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
      246.885759,
      250.118196
    ],
    "en": [
      "I'll go on TFTP one to check if it's there"
    ],
    "ru": [
      "Я пойду по TFTP, чтобы проверить, есть ли он там"
    ]
  },
  {
    "time": [
      250.118196,
      256.799508
    ],
    "en": [
      "click on the server and packet tracer click services and then click TFTP"
    ],
    "ru": [
      "щелкните по серверу и службам отслеживания пакетов, а затем щелкните по TFTP"
    ]
  },
  {
    "time": [
      256.799508,
      259.202883
    ],
    "en": [
      "there it is r one config"
    ],
    "ru": [
      "вот он один конфиг"
    ]
  },
  {
    "time": [
      259.202883,
      263.120799
    ],
    "en": [
      "we have successfully backed up our one startup configuration"
    ],
    "ru": [
      "мы успешно создали резервную копию нашей единственной стартовой конфигурации"
    ]
  },
  {
    "time": [
      263.120799,
      271.233049
    ],
    "en": [
      "the final step is to upgrade our ones iOS image to a newer version which is on our TFTP server"
    ],
    "ru": [
      "последний шаг - обновить наш образ iOS до более новой версии, которая находится на нашем TFTP-сервере."
    ]
  },
  {
    "time": [
      271.233049,
      275.284944
    ],
    "en": [
      "first let's check the iOS version on r one"
    ],
    "ru": [
      "сначала давайте проверим версию iOS на r one"
    ]
  },
  {
    "time": [
      275.284944,
      278.678506
    ],
    "en": [
      "show version"
    ],
    "ru": [
      "показать версию"
    ]
  },
  {
    "time": [
      278.678506,
      286.974735
    ],
    "en": [
      "here it says the version C 2900 software version 15.14"
    ],
    "ru": [
      "здесь говорится о версии C 2900, программное обеспечение версии 15.14"
    ]
  },
  {
    "time": [
      286.974735,
      290.494839
    ],
    "en": [
      "and down here is the image file"
    ],
    "ru": [
      "и вот файл изображения"
    ]
  },
  {
    "time": [
      290.494839,
      293.835464
    ],
    "en": [
      "now let's find the new image on TFTP one"
    ],
    "ru": [
      "теперь давайте найдем новый образ на TFTP one"
    ]
  },
  {
    "time": [
      293.835464,
      301.549297
    ],
    "en": [
      "here it is the C 2900 image"
    ],
    "ru": [
      "вот это изображение C 2900"
    ]
  },
  {
    "time": [
      301.549297,
      306.141567
    ],
    "en": [
      "and it's version 15.53 indeed a newer version"
    ],
    "ru": [
      "и это версия 15.53 действительно более новая версия"
    ]
  },
  {
    "time": [
      306.141567,
      309.536108
    ],
    "en": [
      "I'll copy the name with ctrl C"
    ],
    "ru": [
      "Скопирую имя с помощью ctrl C"
    ]
  },
  {
    "time": [
      309.536108,
      312.791442
    ],
    "en": [
      "now let's go back to r1"
    ],
    "ru": [
      "теперь вернемся к r1"
    ]
  },
  {
    "time": [
      312.791442,
      322.117296
    ],
    "en": [
      "I want to copy the file from the TFTP server to flash storage so copy TFTP flash"
    ],
    "ru": [
      "Я хочу скопировать файл с TFTP-сервера во флеш-хранилище, поэтому скопируйте TFTP-флешку."
    ]
  },
  {
    "time": [
      322.117296,
      326.889128
    ],
    "en": [
      "enter the IP address 192.168.1.100"
    ],
    "ru": [
      "введите IP-адрес 192.168.1.100"
    ]
  },
  {
    "time": [
      326.889128,
      329.274774
    ],
    "en": [
      "and then paste the file name"
    ],
    "ru": [
      "а затем вставьте имя файла"
    ]
  },
  {
    "time": [
      329.274774,
      338.655045
    ],
    "en": [
      "great we've copied the image from TFTP to flash"
    ],
    "ru": [
      "отлично, мы скопировали образ с TFTP на флешку"
    ]
  },
  {
    "time": [
      338.655045,
      340.220503
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
      340.220503,
      345.650607
    ],
    "en": [
      "show flash now there are two iOS images in flash"
    ],
    "ru": [
      "показать flash теперь есть два образа iOS во flash"
    ]
  },
  {
    "time": [
      345.650607,
      347.14619
    ],
    "en": [
      "let's delete the old one"
    ],
    "ru": [
      "давай удалим старую"
    ]
  },
  {
    "time": [
      347.14619,
      354.522648
    ],
    "en": [
      "I'll copy the file name here then delete it with this command"
    ],
    "ru": [
      "Я скопирую сюда имя файла и удалю его с помощью этой команды"
    ]
  },
  {
    "time": [
      354.522648,
      359.240356
    ],
    "en": [
      "delete flash : and then paste the file name"
    ],
    "ru": [
      "удалить flash: а затем вставить имя файла"
    ]
  },
  {
    "time": [
      359.240356,
      366.19921
    ],
    "en": [
      "okay show flash now we only have one iOS image on flash"
    ],
    "ru": [
      "Хорошо, покажи флеш, теперь у нас есть только один образ iOS во флеш-памяти"
    ]
  },
  {
    "time": [
      366.19921,
      369.902523
    ],
    "en": [
      "let's reload the router so it uses the new iOS version"
    ],
    "ru": [
      "давайте перезагрузим роутер, чтобы он использовал новую версию iOS"
    ]
  },
  {
    "time": [
      369.902523,
      371.521168
    ],
    "en": [
      "reload"
    ],
    "ru": [
      "перезагрузить"
    ]
  },
  {
    "time": [
      371.521168,
      386.162209
    ],
    "en": [
      "okay r1 has booted up"
    ],
    "ru": [
      "хорошо, r1 загрузился"
    ]
  },
  {
    "time": [
      386.162209,
      389.720104
    ],
    "en": [
      "enabale okay"
    ],
    "ru": [
      "Enabale хорошо"
    ]
  },
  {
    "time": [
      389.720104,
      391.829812
    ],
    "en": [
      "now let's check to the iOS version"
    ],
    "ru": [
      "теперь давайте проверим версию iOS"
    ]
  },
  {
    "time": [
      391.829812,
      396.937583
    ],
    "en": [
      "show version there we go"
    ],
    "ru": [
      "покажи версию поехали"
    ]
  },
  {
    "time": [
      396.937583,
      401.354291
    ],
    "en": [
      "we're using the new iOS version and here's the new image file"
    ],
    "ru": [
      "мы используем новую версию iOS и вот новый файл изображения"
    ]
  },
  {
    "time": [
      401.354291,
      409.056416
    ],
    "en": [
      "okay in this lab we performed password recovery configuration backup and an iOS upgrade"
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы выполнили резервное копирование конфигурации восстановления пароля и обновление iOS"
    ]
  },
  {
    "time": [
      409.056416,
      410.47177
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
      410.47177,
      418.509478
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
      418.509478,
      421.562541
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
      421.562541,
      423.291207
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
      423.291207,
      428.161623
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
      428.161623,
      435.129706
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
      435.129706,
      443.563789
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
      443.563789,
      443.563789
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
      443.563789,
      443.563789
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
      443.563789,
      443.563789
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]