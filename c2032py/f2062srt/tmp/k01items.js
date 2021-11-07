let objs = [
  {
    "time": [
      0.0,
      4.441302
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
      4.441302,
      8.104074
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
      8.104074,
      15.675164
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
      15.675164,
      23.075096
    ],
    "en": [
      "this lab will be similar to the previous lab in which we use telnet to connect to a switch and router"
    ],
    "ru": [
      "эта лабораторная работа будет аналогична предыдущей, в которой мы используем telnet для подключения к коммутатору и маршрутизатору."
    ]
  },
  {
    "time": [
      23.075096,
      28.612822
    ],
    "en": [
      "in this lab however we will use the more secure option SSH"
    ],
    "ru": [
      "однако в этой лабораторной работе мы будем использовать более безопасный вариант SSH"
    ]
  },
  {
    "time": [
      28.612822,
      30.163418
    ],
    "en": [
      "which stands for secure shell"
    ],
    "ru": [
      "что означает безопасную оболочку"
    ]
  },
  {
    "time": [
      30.163418,
      36.386534
    ],
    "en": [
      "ssh is more secure because it encrypts packets between the devices"
    ],
    "ru": [
      "ssh более безопасен, потому что он шифрует пакеты между устройствами"
    ]
  },
  {
    "time": [
      36.386534,
      39.764439
    ],
    "en": [
      "so that even if the packets are intercepted by an attacker"
    ],
    "ru": [
      "так что даже если пакеты будут перехвачены злоумышленником"
    ]
  },
  {
    "time": [
      39.764439,
      41.295479
    ],
    "en": [
      "they can't be read"
    ],
    "ru": [
      "их нельзя прочитать"
    ]
  },
  {
    "time": [
      41.295479,
      46.394102
    ],
    "en": [
      "there are a few extra steps involved in configuring SSH"
    ],
    "ru": [
      "есть несколько дополнительных шагов, связанных с настройкой SSH"
    ]
  },
  {
    "time": [
      46.394102,
      47.994835
    ],
    "en": [
      "but it's not so complicated"
    ],
    "ru": [
      "но это не так уж и сложно"
    ]
  },
  {
    "time": [
      47.994835,
      56.005866
    ],
    "en": [
      "the four requirements are first you must use the hostname command to configure the hostname of the device"
    ],
    "ru": [
      "четыре требования: сначала вы должны использовать команду hostname для настройки имени хоста устройства."
    ]
  },
  {
    "time": [
      56.005866,
      61.302971
    ],
    "en": [
      "to reinforce this I haven't pre-configured the host names of the devices for this lab"
    ],
    "ru": [
      "чтобы усилить это, я заранее не настраивал имена хостов устройств для этой лаборатории"
    ]
  },
  {
    "time": [
      61.302971,
      68.618413
    ],
    "en": [
      "second you must configure the DNS domain name using the IP domain name command"
    ],
    "ru": [
      "во-вторых, вы должны настроить DNS-имя домена с помощью команды IP-имени домена"
    ]
  },
  {
    "time": [
      68.618413,
      74.281381
    ],
    "en": [
      "third you must generate the SSH key to be used to encrypt the packets"
    ],
    "ru": [
      "в-третьих, вы должны сгенерировать SSH-ключ, который будет использоваться для шифрования пакетов."
    ]
  },
  {
    "time": [
      74.281381,
      78.639071
    ],
    "en": [
      "and fourth SSH must be enabled on the vti lines"
    ],
    "ru": [
      "и четвертый SSH должен быть включен на линиях vti"
    ]
  },
  {
    "time": [
      78.639071,
      82.963312
    ],
    "en": [
      "we will go through these steps and a couple others in this lab"
    ],
    "ru": [
      "мы пройдем через эти и еще несколько шагов в этой лабораторной работе"
    ]
  },
  {
    "time": [
      82.963312,
      85.533388
    ],
    "en": [
      "try to complete the lab yourself first"
    ],
    "ru": [
      "сначала попробуйте пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      85.533388,
      90.999633
    ],
    "en": [
      "then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      90.999633,
      95.915768
    ],
    "en": [
      "if you haven't learned the commands necessary to complete the tasks yet in your studies"
    ],
    "ru": [
      "если вы еще не выучили команды, необходимые для выполнения заданий в процессе обучения"
    ]
  },
  {
    "time": [
      95.915768,
      98.534667
    ],
    "en": [
      "feel free to watch this video to learn them"
    ],
    "ru": [
      "не стесняйтесь смотреть это видео, чтобы узнать их"
    ]
  },
  {
    "time": [
      98.534667,
      104.746805
    ],
    "en": [
      "step one is to configure the host names of switch 1 and r1"
    ],
    "ru": [
      "Шаг первый - настроить имена хостов коммутатора 1 и r1"
    ]
  },
  {
    "time": [
      104.746805,
      107.723137
    ],
    "en": [
      "this is a requirement for SSH"
    ],
    "ru": [
      "это требование для SSH"
    ]
  },
  {
    "time": [
      107.723137,
      109.163438
    ],
    "en": [
      "so let's do that now"
    ],
    "ru": [
      "так давай сделаем это сейчас"
    ]
  },
  {
    "time": [
      109.163438,
      111.544977
    ],
    "en": [
      "on switch 1 first"
    ],
    "ru": [
      "сначала на переключателе 1"
    ]
  },
  {
    "time": [
      111.544977,
      118.657285
    ],
    "en": [
      "enable conf t hostname switch 1"
    ],
    "ru": [
      "enable conf t hostname switch 1"
    ]
  },
  {
    "time": [
      118.657285,
      126.500177
    ],
    "en": [
      "now on r1 enable conf t hostname r1"
    ],
    "ru": [
      "теперь на r1 включить conf t hostname r1"
    ]
  },
  {
    "time": [
      126.500177,
      128.74228
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
      128.74228,
      132.743981
    ],
    "en": [
      "step 2 is to configure that IP addresses indicated"
    ],
    "ru": [
      "Шаг 2 - настроить указанные IP-адреса."
    ]
  },
  {
    "time": [
      132.743981,
      135.022253
    ],
    "en": [
      "this is the same as in the previous lab"
    ],
    "ru": [
      "это то же самое, что и в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      135.022253,
      138.588561
    ],
    "en": [
      "I'll start on our 1 first since we're already here"
    ],
    "ru": [
      "Я начну сначала с нашего 1, так как мы уже здесь"
    ]
  },
  {
    "time": [
      138.588561,
      148.089224
    ],
    "en": [
      "interface g00 IP address 192.168.1.1 255.255.255.0"
    ],
    "ru": [
      "интерфейс g00 IP-адрес 192.168.1.1 255.255.255.0"
    ]
  },
  {
    "time": [
      148.089224,
      151.80933
    ],
    "en": [
      "no shutdown because the interface is disabled by default"
    ],
    "ru": [
      "выключения нет, потому что интерфейс отключен по умолчанию"
    ]
  },
  {
    "time": [
      151.80933,
      156.700461
    ],
    "en": [
      "now let's configure a switch ones VLAN 1 interface"
    ],
    "ru": [
      "теперь настроим коммутатор на интерфейс VLAN 1"
    ]
  },
  {
    "time": [
      156.700461,
      170.083868
    ],
    "en": [
      "interface VLAN 1 IP address 192.168.1.2 4 255.255.255.0 no shutdown"
    ],
    "ru": [
      "интерфейс VLAN 1 IP-адрес 192.168.1.2 4 255.255.255.0 без выключения"
    ]
  },
  {
    "time": [
      170.083868,
      172.361119
    ],
    "en": [
      "that's all for step 2"
    ],
    "ru": [
      "это все для шага 2"
    ]
  },
  {
    "time": [
      172.361119,
      179.394619
    ],
    "en": [
      "step 3 is to configure a single user account on each device"
    ],
    "ru": [
      "Шаг 3 - настроить одну учетную запись пользователя на каждом устройстве"
    ]
  },
  {
    "time": [
      179.394619,
      184.023534
    ],
    "en": [
      "which we will use to login to the device when we SSH from pc1"
    ],
    "ru": [
      "который мы будем использовать для входа на устройство, когда мы будем SSH с pc1"
    ]
  },
  {
    "time": [
      184.023534,
      191.085652
    ],
    "en": [
      "on switch 1 first exit username Cisco password CCNA"
    ],
    "ru": [
      "на коммутаторе 1 имя пользователя первого выхода Пароль Cisco CCNA"
    ]
  },
  {
    "time": [
      191.085652,
      197.032271
    ],
    "en": [
      "I've said it many times before but remember passwords are case sensitive"
    ],
    "ru": [
      "Я уже много раз говорил об этом, но помните, что пароли чувствительны к регистру."
    ]
  },
  {
    "time": [
      197.032271,
      205.571587
    ],
    "en": [
      "now on r1 exit username cisco password CCNA"
    ],
    "ru": [
      "теперь на r1 выход имя пользователя cisco пароль CCNA"
    ]
  },
  {
    "time": [
      205.571587,
      207.979048
    ],
    "en": [
      "that's all for step 3"
    ],
    "ru": [
      "это все для шага 3"
    ]
  },
  {
    "time": [
      207.979048,
      214.415336
    ],
    "en": [
      "step 4 is to configure a dns domain name on each device"
    ],
    "ru": [
      "Шаг 4 - настроить доменное имя DNS на каждом устройстве"
    ]
  },
  {
    "time": [
      214.415336,
      218.927526
    ],
    "en": [
      "this is an another required step for configuring SSH"
    ],
    "ru": [
      "это еще один обязательный шаг для настройки SSH"
    ]
  },
  {
    "time": [
      218.927526,
      223.433688
    ],
    "en": [
      "and we will use a domain name of cisco.com for this lab"
    ],
    "ru": [
      "и мы будем использовать доменное имя cisco.com для этой лабораторной работы."
    ]
  },
  {
    "time": [
      223.433688,
      226.972464
    ],
    "en": [
      "this only requires one command"
    ],
    "ru": [
      "для этого требуется только одна команда"
    ]
  },
  {
    "time": [
      226.972464,
      228.893685
    ],
    "en": [
      "here on r1 first"
    ],
    "ru": [
      "здесь на r1 сначала"
    ]
  },
  {
    "time": [
      228.893685,
      233.483987
    ],
    "en": [
      "IP domain name cisco.com"
    ],
    "ru": [
      "IP-доменное имя cisco.com"
    ]
  },
  {
    "time": [
      233.483987,
      235.299358
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
      235.299358,
      236.949232
    ],
    "en": [
      "now on switch 1"
    ],
    "ru": [
      "сейчас на переключателе 1"
    ]
  },
  {
    "time": [
      236.949232,
      242.51694
    ],
    "en": [
      "IP domain name Cisco com"
    ],
    "ru": [
      "IP-доменное имя Cisco com"
    ]
  },
  {
    "time": [
      242.51694,
      244.682831
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
      244.682831,
      251.153486
    ],
    "en": [
      "Step five is to generate the keys used to encrypt the packets"
    ],
    "ru": [
      "Шаг пятый - сгенерировать ключи, используемые для шифрования пакетов."
    ]
  },
  {
    "time": [
      251.153486,
      253.464683
    ],
    "en": [
      "this is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      253.464683,
      258.412043
    ],
    "en": [
      "crypto key generate RSA"
    ],
    "ru": [
      "криптоключ генерирует RSA"
    ]
  },
  {
    "time": [
      258.412043,
      265.057786
    ],
    "en": [
      "now we are asked for the modulus size the length of the keys used for the encryption and decryption process"
    ],
    "ru": [
      "теперь нас спрашивают размер модуля, длину ключей, используемых для процесса шифрования и дешифрования."
    ]
  },
  {
    "time": [
      265.057786,
      268.949657
    ],
    "en": [
      "we're instructed to use 1024"
    ],
    "ru": [
      "нам приказано использовать 1024"
    ]
  },
  {
    "time": [
      268.949657,
      270.606586
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
      270.606586,
      273.744951
    ],
    "en": [
      "now let's do the same on r 1"
    ],
    "ru": [
      "теперь давайте сделаем то же самое на r 1"
    ]
  },
  {
    "time": [
      273.744951,
      280.920911
    ],
    "en": [
      "crypto key generate RSA 1024"
    ],
    "ru": [
      "криптоключ генерирует RSA 1024"
    ]
  },
  {
    "time": [
      280.920911,
      282.502767
    ],
    "en": [
      "that's all for step 5"
    ],
    "ru": [
      "это все для шага 5"
    ]
  },
  {
    "time": [
      282.502767,
      289.890528
    ],
    "en": [
      "step six is now to configure the vty lines"
    ],
    "ru": [
      "Шаг шестой - теперь настроить линии VTY"
    ]
  },
  {
    "time": [
      289.890528,
      293.351254
    ],
    "en": [
      "there are a few requirements and let's configure them one by one"
    ],
    "ru": [
      "есть несколько требований и давайте настроим их по очереди"
    ]
  },
  {
    "time": [
      293.351254,
      299.151696
    ],
    "en": [
      "on our one first line vty 0 15"
    ],
    "ru": [
      "на нашей одной первой строке vty 0 15"
    ]
  },
  {
    "time": [
      299.151696,
      304.405024
    ],
    "en": [
      "again meaning line 0 through 15 login local"
    ],
    "ru": [
      "снова означает строки с 0 по 15 локальный логин"
    ]
  },
  {
    "time": [
      304.405024,
      312.556345
    ],
    "en": [
      "that's the same command used last time meaning we will have to use the user account we created previously to log into the vty lines when we connect"
    ],
    "ru": [
      "это та же команда, что использовалась в прошлый раз, что означает, что нам придется использовать учетную запись пользователя, которую мы создали ранее, для входа в строки vty при подключении"
    ]
  },
  {
    "time": [
      312.556345,
      318.689429
    ],
    "en": [
      "transport input last time we use telnet now we'll enter SSH"
    ],
    "ru": [
      "транспортный ввод в прошлый раз, когда мы используем telnet, теперь мы войдем в SSH"
    ]
  },
  {
    "time": [
      318.689429,
      324.870002
    ],
    "en": [
      "this will allow only SSH not telnet to be used to connect to the vty lines"
    ],
    "ru": [
      "это позволит использовать только SSH, а не telnet, для подключения к линиям VTY."
    ]
  },
  {
    "time": [
      324.870002,
      331.415334
    ],
    "en": [
      "the third requirement for this lab is to terminate connections after five minutes of inactivity"
    ],
    "ru": [
      "третье требование для этой лабораторной работы - разрывать соединения после пяти минут бездействия."
    ]
  },
  {
    "time": [
      331.415334,
      334.028971
    ],
    "en": [
      "this is an important security measure"
    ],
    "ru": [
      "это важная мера безопасности"
    ]
  },
  {
    "time": [
      334.028971,
      336.392802
    ],
    "en": [
      "it is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      336.392802,
      340.683516
    ],
    "en": [
      "exact timeout now I'll use the question mark"
    ],
    "ru": [
      "точный тайм-аут сейчас я использую вопросительный знак"
    ]
  },
  {
    "time": [
      340.683516,
      344.480616
    ],
    "en": [
      "any time you have to input some amount of time"
    ],
    "ru": [
      "каждый раз, когда вам нужно ввести некоторое количество времени"
    ]
  },
  {
    "time": [
      344.480616,
      347.272614
    ],
    "en": [
      "check the unit of time used for the commands"
    ],
    "ru": [
      "проверьте единицу времени, используемую для команд"
    ]
  },
  {
    "time": [
      347.272614,
      352.190214
    ],
    "en": [
      "you don't want to enter 5 for 5 minutes if it ends up being 5 seconds"
    ],
    "ru": [
      "вы не хотите вводить 5 в течение 5 минут, если в итоге получается 5 секунд"
    ]
  },
  {
    "time": [
      352.190214,
      357.693095
    ],
    "en": [
      "in this case we can see it is entered in minutes so I'll just enter 5"
    ],
    "ru": [
      "в этом случае мы видим, что вводится через несколько минут, поэтому я просто ввожу 5"
    ]
  },
  {
    "time": [
      357.693095,
      361.803121
    ],
    "en": [
      "always remember that for commands involving time"
    ],
    "ru": [
      "всегда помните, что для команд, связанных со временем"
    ]
  },
  {
    "time": [
      361.803121,
      367.1503
    ],
    "en": [
      "now I'll quickly hop on switch 1 and enter the same commands"
    ],
    "ru": [
      "теперь я быстро переключусь на переключатель 1 и введу те же команды"
    ]
  },
  {
    "time": [
      367.1503,
      381.010363
    ],
    "en": [
      "line vty 0 15 login local transport input ssh exec timeout 5"
    ],
    "ru": [
      "строка vty 0 15 вход в систему локальный транспорт ввод ssh время ожидания выполнения 5"
    ]
  },
  {
    "time": [
      381.010363,
      382.959121
    ],
    "en": [
      "that's all for step 6"
    ],
    "ru": [
      "это все для шага 6"
    ]
  },
  {
    "time": [
      382.959121,
      389.594967
    ],
    "en": [
      "step seven is to enable SSH version 2"
    ],
    "ru": [
      "Шаг седьмой - включить SSH версии 2"
    ]
  },
  {
    "time": [
      389.594967,
      392.804064
    ],
    "en": [
      "version 2 improves on weaknesses of version 1"
    ],
    "ru": [
      "версия 2 улучшает слабые стороны версии 1"
    ]
  },
  {
    "time": [
      392.804064,
      398.464446
    ],
    "en": [
      "if you want to learn more about this sort of thing I recommend pursuing Cisco's security certification path"
    ],
    "ru": [
      "Если вы хотите узнать больше об этом, я рекомендую пройти путь сертификации безопасности Cisco"
    ]
  },
  {
    "time": [
      398.464446,
      401.634984
    ],
    "en": [
      "where you will learn all about this sort of thing"
    ],
    "ru": [
      "где вы узнаете все об этом"
    ]
  },
  {
    "time": [
      401.634984,
      406.571666
    ],
    "en": [
      "for now just remember that you should use SSH version 2 whenever possible"
    ],
    "ru": [
      "пока просто помните, что вы должны использовать SSH версии 2, когда это возможно."
    ]
  },
  {
    "time": [
      406.571666,
      409.758915
    ],
    "en": [
      "you can enable it with this command"
    ],
    "ru": [
      "вы можете включить его с помощью этой команды"
    ]
  },
  {
    "time": [
      409.758915,
      415.3226
    ],
    "en": [
      "exit IP SSH version 2 that's it"
    ],
    "ru": [
      "выйти из IP SSH версии 2 вот и все"
    ]
  },
  {
    "time": [
      415.3226,
      418.088832
    ],
    "en": [
      "now we'll do it on r 1"
    ],
    "ru": [
      "теперь мы сделаем это на r 1"
    ]
  },
  {
    "time": [
      418.088832,
      426.321447
    ],
    "en": [
      "exit IP SSH version 2 that's it"
    ],
    "ru": [
      "выйти из IP SSH версии 2 вот и все"
    ]
  },
  {
    "time": [
      426.321447,
      434.154856
    ],
    "en": [
      "finally let's see if we can connect to the command line of each device from pc1 by using SSH"
    ],
    "ru": [
      "наконец, давайте посмотрим, сможем ли мы подключиться к командной строке каждого устройства с pc1 с помощью SSH"
    ]
  },
  {
    "time": [
      434.154856,
      439.610212
    ],
    "en": [
      "first let's see if telnet works"
    ],
    "ru": [
      "сначала посмотрим, работает ли telnet"
    ]
  },
  {
    "time": [
      439.610212,
      442.144376
    ],
    "en": [
      "I'll try to tell net to switch one"
    ],
    "ru": [
      "Я попытаюсь сказать net, чтобы переключить один"
    ]
  },
  {
    "time": [
      442.144376,
      451.170359
    ],
    "en": [
      "telnet 192.168.1.2 as you can see it doesn't work"
    ],
    "ru": [
      "telnet 192.168.1.2, как видите, не работает"
    ]
  },
  {
    "time": [
      451.170359,
      455.250715
    ],
    "en": [
      "this is because of that transport input SSH command we used before"
    ],
    "ru": [
      "это из-за той команды транспортного ввода SSH, которую мы использовали раньше"
    ]
  },
  {
    "time": [
      455.250715,
      458.953644
    ],
    "en": [
      "now let's try SSH"
    ],
    "ru": [
      "теперь попробуем SSH"
    ]
  },
  {
    "time": [
      458.953644,
      460.723278
    ],
    "en": [
      "that is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      460.723278,
      470.570994
    ],
    "en": [
      "SSH - L Cisco Cisco being the username we are connecting with which we configured on switch 1 and R 1"
    ],
    "ru": [
      "SSH - L Cisco Cisco - это имя пользователя, с которым мы подключаемся, которое мы настроили на коммутаторе 1 и R 1."
    ]
  },
  {
    "time": [
      470.570994,
      481.394587
    ],
    "en": [
      "followed by the IP address 192.168.1.2 the password of CCNA in all caps and there we go"
    ],
    "ru": [
      "затем IP-адрес 192.168.1.2 пароль CCNA заглавными буквами и мы идем"
    ]
  },
  {
    "time": [
      481.394587,
      482.655763
    ],
    "en": [
      "we're on switch 1"
    ],
    "ru": [
      "мы на переключателе 1"
    ]
  },
  {
    "time": [
      482.655763,
      485.975417
    ],
    "en": [
      "now I'll type exit and try r1"
    ],
    "ru": [
      "теперь я наберу exit и попробую r1"
    ]
  },
  {
    "time": [
      485.975417,
      496.152611
    ],
    "en": [
      "SSH - L Cisco 192.168.1.1 password of CCNA"
    ],
    "ru": [
      "SSH - L Cisco 192.168.1.1 пароль CCNA"
    ]
  },
  {
    "time": [
      496.152611,
      498.529575
    ],
    "en": [
      "and now we're on our one"
    ],
    "ru": [
      "и теперь мы находимся на нашем единственном"
    ]
  },
  {
    "time": [
      498.529575,
      506.222144
    ],
    "en": [
      "take note of the difference between the command used to tell net and the command used to SSH onto the switches and routers"
    ],
    "ru": [
      "обратите внимание на разницу между командой, используемой для сообщения сети, и командой, используемой для SSH на коммутаторах и маршрутизаторах."
    ]
  },
  {
    "time": [
      506.222144,
      509.253113
    ],
    "en": [
      "these are the standard commands used on windows"
    ],
    "ru": [
      "это стандартные команды, используемые в Windows"
    ]
  },
  {
    "time": [
      509.253113,
      512.245117
    ],
    "en": [
      "anyway that's all for this lab"
    ],
    "ru": [
      "в любом случае это все для этой лаборатории"
    ]
  },
  {
    "time": [
      512.245117,
      518.530305
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
      518.530305,
      521.875335
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
      521.875335,
      523.605893
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
      523.605893,
      528.29744
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
      528.29744,
      536.984263
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
      536.984263,
      542.730163
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
      542.730163,
      551.557429
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
      551.557429,
      551.557429
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
      551.557429,
      551.557429
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
      551.557429,
      551.557429
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]