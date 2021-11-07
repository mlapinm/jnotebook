let objs = [
  {
    "time": [
      0.0,
      4.450229
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
      4.450229,
      8.002687
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
      8.002687,
      15.230562
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
      15.230562,
      22.000687
    ],
    "en": [
      "this lab is the second of our labs focusing on NAT network address translation"
    ],
    "ru": [
      "Эта лабораторная работа является второй из наших лабораторных работ, посвященных преобразованию сетевых адресов NAT."
    ]
  },
  {
    "time": [
      22.000687,
      25.843791
    ],
    "en": [
      "this time we will configure dynamic NAT"
    ],
    "ru": [
      "на этот раз настроим динамический NAT"
    ]
  },
  {
    "time": [
      25.843791,
      40.374499
    ],
    "en": [
      "unlike static map which creates a one-to-one translation from an inside address to an outside address dynamic NAT dynamically assigns addresses as needed from a pool of outside addresses that you configure beforehand"
    ],
    "ru": [
      "в отличие от статической карты, которая создает однозначное преобразование внутреннего адреса во внешний, динамический NAT динамически назначает адреса по мере необходимости из пула внешних адресов, который вы настраиваете заранее"
    ]
  },
  {
    "time": [
      40.374499,
      43.929894
    ],
    "en": [
      "this is much more efficient than static NAT"
    ],
    "ru": [
      "это намного эффективнее статического NAT"
    ]
  },
  {
    "time": [
      43.929894,
      58.471664
    ],
    "en": [
      "in this lab we will use dynamic map to translate private IP addresses in the 192.168.1.0 / 24 network to public IP addresses in the 1.2.3.0 / 24 network"
    ],
    "ru": [
      "в этой лабораторной работе мы будем использовать динамическую карту для преобразования частных IP-адресов в сети 192.168.1.0 / 24 в общедоступные IP-адреса в сети 1.2.3.0 / 24."
    ]
  },
  {
    "time": [
      58.471664,
      63.403039
    ],
    "en": [
      "this lab uses the same topology as the previous lab"
    ],
    "ru": [
      "в этой лабораторной работе используется та же топология, что и в предыдущей."
    ]
  },
  {
    "time": [
      63.403039,
      68.390663
    ],
    "en": [
      "and once again rip has been pre-configured so that all points in the network should be reachable"
    ],
    "ru": [
      "и снова рип был предварительно настроен так, чтобы все точки в сети были доступны"
    ]
  },
  {
    "time": [
      68.390663,
      78.623454
    ],
    "en": [
      "once again however I have configured ACLs on the routers blocking private addresses from being routed over the serial connection between them which simulates the Internet"
    ],
    "ru": [
      "еще раз, однако, я настроил ACL на маршрутизаторах, блокируя маршрутизацию частных адресов через последовательное соединение между ними, которое имитирует Интернет."
    ]
  },
  {
    "time": [
      78.623454,
      84.688702
    ],
    "en": [
      "let's ping from pc-1 to server one just to confirm that PC one cannot reach server one"
    ],
    "ru": [
      "давайте пинг от ПК-1 на сервер один раз, чтобы подтвердить, что компьютер не может достигнуть одного сервера"
    ]
  },
  {
    "time": [
      84.688702,
      99.057514
    ],
    "en": [
      "ping 1.1.1.100 as expected the pink fails"
    ],
    "ru": [
      "ping 1.1.1.100 как и ожидалось розовый не работает"
    ]
  },
  {
    "time": [
      99.057514,
      103.381723
    ],
    "en": [
      "so let's configure dynamic NAT on r 1"
    ],
    "ru": [
      "Итак, давайте настроим динамический NAT на r 1"
    ]
  },
  {
    "time": [
      103.381723,
      108.052827
    ],
    "en": [
      "first I'll configure that inside and outside interfaces"
    ],
    "ru": [
      "сначала я настрою это внутри и снаружи интерфейсов"
    ]
  },
  {
    "time": [
      108.052827,
      115.972556
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
      115.972556,
      122.254764
    ],
    "en": [
      "IP NAT inside interface s 0 3 0"
    ],
    "ru": [
      "IP NAT внутри интерфейса s 0 3 0"
    ]
  },
  {
    "time": [
      122.254764,
      124.897868
    ],
    "en": [
      "IP NAT outside exit"
    ],
    "ru": [
      "IP NAT внешний выход"
    ]
  },
  {
    "time": [
      124.897868,
      129.782305
    ],
    "en": [
      "dynamic NAT involves a few extra steps beyond static NAT"
    ],
    "ru": [
      "динамический NAT включает в себя несколько дополнительных шагов помимо статического NAT"
    ]
  },
  {
    "time": [
      129.782305,
      135.702096
    ],
    "en": [
      "we have to create an ACL which we use to identify the inside addresses that we will translate"
    ],
    "ru": [
      "мы должны создать ACL, который мы используем для идентификации внутренних адресов, которые мы будем переводить"
    ]
  },
  {
    "time": [
      135.702096,
      138.728846
    ],
    "en": [
      "we also have to create an app pool"
    ],
    "ru": [
      "мы также должны создать приложение бассейн"
    ]
  },
  {
    "time": [
      138.728846,
      143.39045
    ],
    "en": [
      "which is the range of outside addresses we will translate our inside addresses to"
    ],
    "ru": [
      "это диапазон внешних адресов, в которые мы переведем наши внутренние адреса"
    ]
  },
  {
    "time": [
      143.39045,
      146.326845
    ],
    "en": [
      "first let's create the access list"
    ],
    "ru": [
      "сначала создадим список доступа"
    ]
  },
  {
    "time": [
      146.326845,
      151.911282
    ],
    "en": [
      "keep in mind this use of an ACL is different than how we previously used it"
    ],
    "ru": [
      "имейте в виду, что использование ACL отличается от того, как мы его использовали ранее."
    ]
  },
  {
    "time": [
      151.911282,
      158.126449
    ],
    "en": [
      "before we used ACLs to block or allow traffic from entering or exiting an interface"
    ],
    "ru": [
      "до того, как мы использовали ACL, чтобы блокировать или разрешать трафику входить или выходить из интерфейса"
    ]
  },
  {
    "time": [
      158.126449,
      164.323094
    ],
    "en": [
      "this time however we will use an ACL to identify which traffic we want to translate"
    ],
    "ru": [
      "на этот раз, однако, мы будем использовать ACL, чтобы определить, какой трафик мы хотим транслировать."
    ]
  },
  {
    "time": [
      164.323094,
      169.132385
    ],
    "en": [
      "traffic which is permitted by the ACL will be translated"
    ],
    "ru": [
      "трафик, разрешенный ACL, будет переведен"
    ]
  },
  {
    "time": [
      169.132385,
      175.042739
    ],
    "en": [
      "traffic which is denied by the ACL won't be blocked it simply won't be translated"
    ],
    "ru": [
      "трафик, который запрещен ACL, не будет заблокирован, он просто не будет транслироваться"
    ]
  },
  {
    "time": [
      175.042739,
      182.705468
    ],
    "en": [
      "so let's create a standard ACL which permits the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "поэтому давайте создадим стандартный ACL, который разрешает сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      182.705468,
      191.867884
    ],
    "en": [
      "access list 1 permit 192.168.1.0 0.0.0.255"
    ],
    "ru": [
      "список доступа 1 разрешение 192.168.1.0 0.0.0.255"
    ]
  },
  {
    "time": [
      191.867884,
      194.276488
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
      194.276488,
      203.976613
    ],
    "en": [
      "the implicit deny any at the end of the ACL will prevent traffic from outside of the 192.168.1.0 / 24 network from being translated"
    ],
    "ru": [
      "неявное deny any в конце ACL предотвратит преобразование трафика из-за пределов сети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      203.976613,
      207.783654
    ],
    "en": [
      "next let's create the NAT pool"
    ],
    "ru": [
      "Далее давайте создадим пул NAT"
    ]
  },
  {
    "time": [
      207.783654,
      210.436487
    ],
    "en": [
      "to do so use this command"
    ],
    "ru": [
      "для этого используйте эту команду"
    ]
  },
  {
    "time": [
      210.436487,
      214.858278
    ],
    "en": [
      "IP NAT pool followed by the pool name"
    ],
    "ru": [
      "Пул IP NAT, за которым следует имя пула"
    ]
  },
  {
    "time": [
      214.858278,
      216.727528
    ],
    "en": [
      "I'll use pool 1"
    ],
    "ru": [
      "Я воспользуюсь пулом 1"
    ]
  },
  {
    "time": [
      216.727528,
      222.754965
    ],
    "en": [
      "then we enter the first address in the range of addresses we want to include in this pool"
    ],
    "ru": [
      "затем мы вводим первый адрес из диапазона адресов, который хотим включить в этот пул."
    ]
  },
  {
    "time": [
      222.754965,
      227.266381
    ],
    "en": [
      "which is 1.2.3.10 according to our instructions"
    ],
    "ru": [
      "что 1.2.3.10 согласно нашим инструкциям"
    ]
  },
  {
    "time": [
      227.266381,
      237.022359
    ],
    "en": [
      "next we put the last address in the range 1.2.3.20 next we type netmask followed by the subnet mask"
    ],
    "ru": [
      "рядом положить последний адрес в диапазоне 1.2.3.20 следующих Набирают маску подсети и затем маска подсети"
    ]
  },
  {
    "time": [
      237.022359,
      243.713838
    ],
    "en": [
      "which is 255.255.255.0 so our command is IP nat pool"
    ],
    "ru": [
      "это 255.255.255.0, поэтому наша команда - IP nat pool"
    ]
  },
  {
    "time": [
      243.713838,
      253.508941
    ],
    "en": [
      "pool 1 1.2.3.10 1.2.3.20 net mask 255.255.255.0"
    ],
    "ru": [
      "пул 1 1.2.3.10 1.2.3.20 маска сети 255.255.255.0"
    ]
  },
  {
    "time": [
      253.508941,
      256.57767
    ],
    "en": [
      "ok our pool is now configured"
    ],
    "ru": [
      "ок наш бассейн теперь настроен"
    ]
  },
  {
    "time": [
      256.57767,
      259.970565
    ],
    "en": [
      "finally let's configure NAT itself"
    ],
    "ru": [
      "наконец-то настроим сам NAT"
    ]
  },
  {
    "time": [
      259.970565,
      270.673814
    ],
    "en": [
      "the command starts the same as with static NAT IP NAT inside source now with static NAT we use IP NAT inside source static"
    ],
    "ru": [
      "команда запускается так же, как при статическом NAT IP NAT внутри источника, теперь со статическим NAT мы используем IP NAT внутри статического источника"
    ]
  },
  {
    "time": [
      270.673814,
      279.889772
    ],
    "en": [
      "however for dynamic NAT we will use IP net inside source list followed by the name or number of our ACL which is 1"
    ],
    "ru": [
      "однако для динамического NAT мы будем использовать IP-сеть внутри списка источников, за которой следует имя или номер нашего ACL, который равен 1"
    ]
  },
  {
    "time": [
      279.889772,
      283.536647
    ],
    "en": [
      "then pool followed by the pool name which is pool 1"
    ],
    "ru": [
      "затем пул, за которым следует имя пула, которое является пулом 1"
    ]
  },
  {
    "time": [
      283.536647,
      291.653291
    ],
    "en": [
      "so our command is IP net inside source list 1 pool pool 1"
    ],
    "ru": [
      "Итак, наша команда - IP net inside source list 1 pool pool 1"
    ]
  },
  {
    "time": [
      291.653291,
      295.238145
    ],
    "en": [
      "our dynamic map configuration is now complete"
    ],
    "ru": [
      "наша конфигурация динамической карты теперь завершена"
    ]
  },
  {
    "time": [
      295.238145,
      298.824999
    ],
    "en": [
      "I'll go on each PC and quickly ping server 1"
    ],
    "ru": [
      "Захожу на каждый ПК и быстро пингую сервер 1"
    ]
  },
  {
    "time": [
      298.824999,
      304.513852
    ],
    "en": [
      "then go on r1 to check the translations on PC 1 first"
    ],
    "ru": [
      "затем перейдите на r1, чтобы сначала проверить переводы на ПК 1"
    ]
  },
  {
    "time": [
      304.513852,
      310.423727
    ],
    "en": [
      "ping 1.1.1.100"
    ],
    "ru": [
      "пинг 1.1.1.100"
    ]
  },
  {
    "time": [
      310.423727,
      322.760872
    ],
    "en": [
      "okay next I'll go on PC 2 and ping server one ping 1.1 1.1 hundred"
    ],
    "ru": [
      "ладно дальше пойду на комп 2 и пинг сервер один пинг 1.1 1.1 сотка"
    ]
  },
  {
    "time": [
      322.760872,
      334.519142
    ],
    "en": [
      "okay and next I'll go on PC 3 ping 1.1.1.100"
    ],
    "ru": [
      "ладно а дальше пойду на комп 3 пинг 1.1.1.100"
    ]
  },
  {
    "time": [
      334.519142,
      341.743746
    ],
    "en": [
      "okay now let's go on r1 to check these translations"
    ],
    "ru": [
      "хорошо, теперь давайте перейдем к r1, чтобы проверить эти переводы"
    ]
  },
  {
    "time": [
      341.743746,
      349.006058
    ],
    "en": [
      "exit to check the net translations use this command"
    ],
    "ru": [
      "выйти, чтобы проверить сетевые переводы, используйте эту команду"
    ]
  },
  {
    "time": [
      349.006058,
      351.338433
    ],
    "en": [
      "show IP nat translations"
    ],
    "ru": [
      "показать переводы IP nat"
    ]
  },
  {
    "time": [
      351.338433,
      360.896849
    ],
    "en": [
      "notice at the top the terms inside global inside local outside local outside global"
    ],
    "ru": [
      "обратите внимание на термины внутри глобального внутри локального за пределами локального за пределами глобального"
    ]
  },
  {
    "time": [
      360.896849,
      364.971287
    ],
    "en": [
      "we want to focus on inside global and inside local"
    ],
    "ru": [
      "мы хотим сосредоточиться на внутреннем глобальном и внутреннем локальном"
    ]
  },
  {
    "time": [
      364.971287,
      372.789932
    ],
    "en": [
      "inside global is the Abbas's we translate it to in the 1.2.3.0 / 24 subnet"
    ],
    "ru": [
      "внутри global - это аббас, который мы переводим в подсеть 1.2.3.0 / 24"
    ]
  },
  {
    "time": [
      372.789932,
      377.533661
    ],
    "en": [
      "and inside local is the original private IP address range"
    ],
    "ru": [
      "а внутри local - исходный диапазон частных IP-адресов."
    ]
  },
  {
    "time": [
      377.533661,
      381.920077
    ],
    "en": [
      "in the 192.168.1.0 / 24 subnet"
    ],
    "ru": [
      "в подсети 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      381.920077,
      387.617535
    ],
    "en": [
      "note that the number after the colon in these IP addresses indicates a port number"
    ],
    "ru": [
      "обратите внимание, что число после двоеточия в этих IP-адресах указывает номер порта."
    ]
  },
  {
    "time": [
      387.617535,
      392.570847
    ],
    "en": [
      "here is 192.168.1.11 pc 1"
    ],
    "ru": [
      "вот 192.168.1.11 шт 1"
    ]
  },
  {
    "time": [
      392.570847,
      395.911263
    ],
    "en": [
      "and address it was translated to"
    ],
    "ru": [
      "и адрес был переведен на"
    ]
  },
  {
    "time": [
      395.911263,
      401.1332
    ],
    "en": [
      "here is 192.168.1.11 pc 2"
    ],
    "ru": [
      "вот 192.168.1.11 пк 2"
    ]
  },
  {
    "time": [
      401.1332,
      403.171384
    ],
    "en": [
      "and the address it was translated to"
    ],
    "ru": [
      "и адрес, на который он был переведен"
    ]
  },
  {
    "time": [
      403.171384,
      410.464945
    ],
    "en": [
      "and here is 192.168.1.13 pc 3 and the address it was translated to"
    ],
    "ru": [
      "а вот 192.168.1.13 pc 3 и адрес, на который он был переведен"
    ]
  },
  {
    "time": [
      410.464945,
      416.283174
    ],
    "en": [
      "if you want to clear all of these dynamic translations use this command"
    ],
    "ru": [
      "если вы хотите очистить все эти динамические переводы, используйте эту команду"
    ]
  },
  {
    "time": [
      416.283174,
      421.876757
    ],
    "en": [
      "clear IP neck translation followed by an asterisk"
    ],
    "ru": [
      "четкий перевод шейки IP со звездочкой"
    ]
  },
  {
    "time": [
      421.876757,
      425.438215
    ],
    "en": [
      "okay now let's do that show command one more time"
    ],
    "ru": [
      "Хорошо, теперь давайте сделаем эту команду show еще раз"
    ]
  },
  {
    "time": [
      425.438215,
      427.910819
    ],
    "en": [
      "show IP NAT translations"
    ],
    "ru": [
      "показать переводы IP NAT"
    ]
  },
  {
    "time": [
      427.910819,
      432.364673
    ],
    "en": [
      "there we go our translations are cleared"
    ],
    "ru": [
      "вот и мы, наши переводы очищены"
    ]
  },
  {
    "time": [
      432.364673,
      434.814048
    ],
    "en": [
      "we have successfully configured dynamic NAT"
    ],
    "ru": [
      "мы успешно настроили динамический NAT"
    ]
  },
  {
    "time": [
      434.814048,
      436.609027
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
      436.609027,
      444.81711
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
      444.81711,
      447.66911
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
      447.66911,
      449.213714
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
      449.213714,
      452.526422
    ],
    "en": [
      "if you have requests for any specific labs"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      452.526422,
      454.188547
    ],
    "en": [
      "let me know in the comment section"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      454.188547,
      461.028234
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
      461.028234,
      468.926192
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
      468.926192,
      468.926192
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
      468.926192,
      468.926192
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
      468.926192,
      468.926192
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]