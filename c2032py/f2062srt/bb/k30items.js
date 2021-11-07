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
      9.0
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
      9.0,
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
      13.0
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
      13.0,
      14.0
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
      14.0,
      19.0
    ],
    "en": [
      "description in this lab the second of"
    ],
    "ru": [
      "описание в этой лаборатории второе из"
    ]
  },
  {
    "time": [
      19.0,
      22.0
    ],
    "en": [
      "our labs focusing on ACLs we will"
    ],
    "ru": [
      "в наших лабораториях, посвященных спискам ACL, мы будем"
    ]
  },
  {
    "time": [
      22.0,
      26.0
    ],
    "en": [
      "configure extended ACLs unlike standard"
    ],
    "ru": [
      "настроить расширенные ACL в отличие от стандартных"
    ]
  },
  {
    "time": [
      26.0,
      28.0
    ],
    "en": [
      "ACLs which only filter traffic based on"
    ],
    "ru": [
      "ACL, которые фильтруют трафик только на основе"
    ]
  },
  {
    "time": [
      28.0,
      32.0
    ],
    "en": [
      "the source IP address extended ACLs can"
    ],
    "ru": [
      "расширенные списки ACL исходного IP-адреса могут"
    ]
  },
  {
    "time": [
      32.0,
      35.0
    ],
    "en": [
      "filter on things like protocol source IP"
    ],
    "ru": [
      "фильтровать такие вещи, как IP-адрес источника протокола"
    ]
  },
  {
    "time": [
      35.0,
      39.0
    ],
    "en": [
      "address and destination IP address our"
    ],
    "ru": [
      "адрес и IP-адрес назначения наши"
    ]
  },
  {
    "time": [
      39.0,
      41.0
    ],
    "en": [
      "task is to configure and apply a single"
    ],
    "ru": [
      "задача - настроить и применить единый"
    ]
  },
  {
    "time": [
      41.0,
      45.0
    ],
    "en": [
      "extended ACL to allow only pc-12 access"
    ],
    "ru": [
      "расширенный ACL для доступа только к pc-12"
    ]
  },
  {
    "time": [
      45.0,
      49.0
    ],
    "en": [
      "server one and only hosts on the 192.168"
    ],
    "ru": [
      "один-единственный сервер на 192.168"
    ]
  },
  {
    "time": [
      49.0,
      55.0
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
      49.0,
      55.0
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
      55.0,
      58.0
    ],
    "en": [
      "where should I apply the ACL the general"
    ],
    "ru": [
      "где я должен применять ACL общие"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "rule is to apply extended ACLs as close"
    ],
    "ru": [
      "Правило состоит в том, чтобы применять расширенные списки ACL как можно ближе"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "as possible to the source as opposed to"
    ],
    "ru": [
      "по возможности к источнику, а не к"
    ]
  },
  {
    "time": [
      64.0,
      67.0
    ],
    "en": [
      "standard ACLs which should be applied as"
    ],
    "ru": [
      "стандартные ACL, которые следует применять как"
    ]
  },
  {
    "time": [
      67.0,
      70.0
    ],
    "en": [
      "close as possible to the destination I"
    ],
    "ru": [
      "как можно ближе к пункту назначения I"
    ]
  },
  {
    "time": [
      70.0,
      73.0
    ],
    "en": [
      "want to achieve this in a single ACL so"
    ],
    "ru": [
      "хотите добиться этого в одном ACL, поэтому"
    ]
  },
  {
    "time": [
      73.0,
      77.0
    ],
    "en": [
      "I'll apply it to our ones s20 interface"
    ],
    "ru": [
      "Применим к нашему интерфейсу s20"
    ]
  },
  {
    "time": [
      77.0,
      84.0
    ],
    "en": [
      "so let's go on our one an able CAUTI to"
    ],
    "ru": [
      "так что давайте перейдем к нашему ОСТОРОЖНО, чтобы"
    ]
  },
  {
    "time": [
      84.0,
      87.0
    ],
    "en": [
      "create an extended ACL you begin with"
    ],
    "ru": [
      "создайте расширенный ACL, с которого вы начнете"
    ]
  },
  {
    "time": [
      87.0,
      89.0
    ],
    "en": [
      "the same command as for standard ACLs"
    ],
    "ru": [
      "та же команда, что и для стандартных ACL"
    ]
  },
  {
    "time": [
      89.0,
      92.0
    ],
    "en": [
      "access lists now I'll use"
    ],
    "ru": [
      "списки доступа сейчас я буду использовать"
    ]
  },
  {
    "time": [
      92.0,
      95.0
    ],
    "en": [
      "context-sensitive help I mentioned this"
    ],
    "ru": [
      "контекстно-зависимая помощь Я уже упоминал об этом"
    ]
  },
  {
    "time": [
      95.0,
      97.0
    ],
    "en": [
      "in the previous video but remember that"
    ],
    "ru": [
      "в предыдущем видео, но помните, что"
    ]
  },
  {
    "time": [
      97.0,
      100.0
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
      97.0,
      100.0
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
      100.0,
      104.0
    ],
    "en": [
      "and 100 to 199 is the range for extended"
    ],
    "ru": [
      "а от 100 до 199 - это диапазон для расширенного"
    ]
  },
  {
    "time": [
      104.0,
      108.0
    ],
    "en": [
      "ACLs I'll go with 100 context-sensitive"
    ],
    "ru": [
      "ACL я использую 100 контекстно-зависимых"
    ]
  },
  {
    "time": [
      108.0,
      112.0
    ],
    "en": [
      "help again I'll choose permit to allow"
    ],
    "ru": [
      "еще раз помогите я выберу разрешение, чтобы разрешить"
    ]
  },
  {
    "time": [
      112.0,
      116.0
    ],
    "en": [
      "pc-12 access server 1 afterward I'll"
    ],
    "ru": [
      "pc-12 доступ к серверу 1 после этого я"
    ]
  },
  {
    "time": [
      116.0,
      118.0
    ],
    "en": [
      "create another statement to deny all"
    ],
    "ru": [
      "создать еще одно заявление, чтобы отрицать все"
    ]
  },
  {
    "time": [
      118.0,
      121.0
    ],
    "en": [
      "other traffic to server 1 let's do"
    ],
    "ru": [
      "другой трафик на сервер 1 сделаем"
    ]
  },
  {
    "time": [
      121.0,
      124.0
    ],
    "en": [
      "contact sensitive help again now you can"
    ],
    "ru": [
      "контактная помощь снова теперь вы можете"
    ]
  },
  {
    "time": [
      124.0,
      126.0
    ],
    "en": [
      "see that this is different than for"
    ],
    "ru": [
      "видеть, что это отличается от"
    ]
  },
  {
    "time": [
      126.0,
      128.0
    ],
    "en": [
      "standard ACLs here are a bunch of"
    ],
    "ru": [
      "стандартные ACL - это набор"
    ]
  },
  {
    "time": [
      128.0,
      130.0
    ],
    "en": [
      "protocols which you can use to filter"
    ],
    "ru": [
      "протоколы, которые можно использовать для фильтрации"
    ]
  },
  {
    "time": [
      130.0,
      131.0
    ],
    "en": [
      "traffic"
    ],
    "ru": [
      "движение"
    ]
  },
  {
    "time": [
      131.0,
      135.0
    ],
    "en": [
      "the general catch-all is IP so let's go"
    ],
    "ru": [
      "общая сводка - IP, так что поехали"
    ]
  },
  {
    "time": [
      135.0,
      138.0
    ],
    "en": [
      "with that let's check the options again"
    ],
    "ru": [
      "с этим давайте снова проверим варианты"
    ]
  },
  {
    "time": [
      138.0,
      141.0
    ],
    "en": [
      "now I'll choose host since we're"
    ],
    "ru": [
      "сейчас я выберу хоста, раз уж мы"
    ]
  },
  {
    "time": [
      141.0,
      146.0
    ],
    "en": [
      "filtering from one host 192.168.1 11"
    ],
    "ru": [
      "фильтрация с одного хоста 192.168.1 11"
    ]
  },
  {
    "time": [
      146.0,
      149.0
    ],
    "en": [
      "next I'll enter host again and set the"
    ],
    "ru": [
      "затем я снова вхожу в хост и устанавливаю"
    ]
  },
  {
    "time": [
      149.0,
      154.0
    ],
    "en": [
      "destination 192.168 3 dot 100 contact"
    ],
    "ru": [
      "пункт назначения 192.168 3 точки 100 контактов"
    ]
  },
  {
    "time": [
      154.0,
      157.0
    ],
    "en": [
      "sensitive help again you can see there"
    ],
    "ru": [
      "чуткая помощь снова вы можете увидеть там"
    ]
  },
  {
    "time": [
      157.0,
      159.0
    ],
    "en": [
      "are other options but we'll end the"
    ],
    "ru": [
      "другие варианты, но мы закончим"
    ]
  },
  {
    "time": [
      159.0,
      163.0
    ],
    "en": [
      "command here ok so that's our first"
    ],
    "ru": [
      "команда здесь хорошо, так что это наш первый"
    ]
  },
  {
    "time": [
      163.0,
      166.0
    ],
    "en": [
      "entry in the ACL now let's create"
    ],
    "ru": [
      "запись в ACL теперь давайте создадим"
    ]
  },
  {
    "time": [
      166.0,
      168.0
    ],
    "en": [
      "another one to deny all other traffic to"
    ],
    "ru": [
      "еще один, чтобы запретить весь другой трафик"
    ]
  },
  {
    "time": [
      168.0,
      173.0
    ],
    "en": [
      "server 1 access list 100 deny IP any"
    ],
    "ru": [
      "список доступа сервера 1 100 запретить IP любой"
    ]
  },
  {
    "time": [
      173.0,
      178.0
    ],
    "en": [
      "host 192.168.1 hundred this denies"
    ],
    "ru": [
      "хост 192.168.1 сотня это отрицает"
    ]
  },
  {
    "time": [
      178.0,
      181.0
    ],
    "en": [
      "traffic from any host to server 1 and"
    ],
    "ru": [
      "трафик с любого хоста на сервер 1 и"
    ]
  },
  {
    "time": [
      181.0,
      184.0
    ],
    "en": [
      "will apply to any traffic except PC 1"
    ],
    "ru": [
      "будет применяться к любому трафику, кроме ПК 1"
    ]
  },
  {
    "time": [
      184.0,
      188.0
    ],
    "en": [
      "now let's satisfy the second requirement"
    ],
    "ru": [
      "теперь давайте удовлетворим второе требование"
    ]
  },
  {
    "time": [
      188.0,
      190.0
    ],
    "en": [
      "we have to allow only hosts on the"
    ],
    "ru": [
      "мы должны разрешить только хосты на"
    ]
  },
  {
    "time": [
      190.0,
      194.0
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
      190.0,
      194.0
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
      194.0,
      198.0
    ],
    "en": [
      "server 2 first let's create another"
    ],
    "ru": [
      "сервер 2 сначала создадим другой"
    ]
  },
  {
    "time": [
      198.0,
      202.0
    ],
    "en": [
      "permit statement access list 100 permit"
    ],
    "ru": [
      "разрешение заявление список доступа 100 разрешение"
    ]
  },
  {
    "time": [
      202.0,
      214.0
    ],
    "en": [
      "IP 192.168.20.10 168 3 dot 101 this"
    ],
    "ru": [
      "IP 192.168.20.10 168 3 точки 101 это"
    ]
  },
  {
    "time": [
      214.0,
      216.0
    ],
    "en": [
      "command permits any hosts in the"
    ],
    "ru": [
      "команда разрешает любые хосты в"
    ]
  },
  {
    "time": [
      216.0,
      220.0
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
      216.0,
      220.0
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
      220.0,
      224.0
    ],
    "en": [
      "host 192.168.1 o one which is server 2"
    ],
    "ru": [
      "хост 192.168.1 o тот, который является сервером 2"
    ]
  },
  {
    "time": [
      224.0,
      227.0
    ],
    "en": [
      "now lets deny all other traffic to"
    ],
    "ru": [
      "теперь давайте запретим весь другой трафик на"
    ]
  },
  {
    "time": [
      227.0,
      231.0
    ],
    "en": [
      "server to access list 100 deny IP any"
    ],
    "ru": [
      "сервер для доступа список 100 запретить IP любой"
    ]
  },
  {
    "time": [
      231.0,
      237.0
    ],
    "en": [
      "host 192.168.0.1 o1 ok we have fulfilled"
    ],
    "ru": [
      "host 192.168.0.1 o1 ок мы выполнили"
    ]
  },
  {
    "time": [
      237.0,
      241.0
    ],
    "en": [
      "both requirements now let's create one"
    ],
    "ru": [
      "оба требования теперь давайте создадим один"
    ]
  },
  {
    "time": [
      241.0,
      243.0
    ],
    "en": [
      "more statement to allow any other"
    ],
    "ru": [
      "еще заявление, чтобы разрешить любой другой"
    ]
  },
  {
    "time": [
      243.0,
      246.0
    ],
    "en": [
      "traffic remember at the end of any ACL"
    ],
    "ru": [
      "трафик запоминать в конце любого ACL"
    ]
  },
  {
    "time": [
      246.0,
      250.0
    ],
    "en": [
      "there is an implicit deny any our"
    ],
    "ru": [
      "есть неявное отрицание любого нашего"
    ]
  },
  {
    "time": [
      250.0,
      252.0
    ],
    "en": [
      "requirements didn't state to deny all"
    ],
    "ru": [
      "требования не заявили, чтобы отрицать все"
    ]
  },
  {
    "time": [
      252.0,
      253.0
    ],
    "en": [
      "other traffic so let's override that"
    ],
    "ru": [
      "другой трафик, так что давайте переопределим это"
    ]
  },
  {
    "time": [
      253.0,
      257.0
    ],
    "en": [
      "implicit deny any access list 100 permit"
    ],
    "ru": [
      "неявно запретить любой список доступа 100 разрешить"
    ]
  },
  {
    "time": [
      257.0,
      264.0
    ],
    "en": [
      "IP any any that's it finally let's apply"
    ],
    "ru": [
      "IP любой, что угодно, наконец, давайте применим"
    ]
  },
  {
    "time": [
      264.0,
      265.0
    ],
    "en": [
      "the ACL to r1"
    ],
    "ru": [
      "ACL к r1"
    ]
  },
  {
    "time": [
      265.0,
      271.0
    ],
    "en": [
      "s20 interface interface s20 IP access"
    ],
    "ru": [
      "s20 interface interface s20 IP-доступ"
    ]
  },
  {
    "time": [
      271.0,
      272.0
    ],
    "en": [
      "group 100 out"
    ],
    "ru": [
      "группа 100 из"
    ]
  },
  {
    "time": [
      272.0,
      275.0
    ],
    "en": [
      "now this ACL will apply to all outbound"
    ],
    "ru": [
      "теперь этот ACL будет применяться ко всем исходящим"
    ]
  },
  {
    "time": [
      275.0,
      279.0
    ],
    "en": [
      "traffic on our ones s20 interface let's"
    ],
    "ru": [
      "трафик на нашем s20 интерфейсе давайте"
    ]
  },
  {
    "time": [
      279.0,
      283.0
    ],
    "en": [
      "test it out from each PC I'll ping each"
    ],
    "ru": [
      "проверить это с каждого ПК Я пингую каждый"
    ]
  },
  {
    "time": [
      283.0,
      286.0
    ],
    "en": [
      "server first PC one it should be able to"
    ],
    "ru": [
      "сервер первый компьютер один он должен уметь"
    ]
  },
  {
    "time": [
      286.0,
      290.0
    ],
    "en": [
      "access server one but not server two"
    ],
    "ru": [
      "доступ к серверу один, но не серверу два"
    ]
  },
  {
    "time": [
      290.0,
      302.0
    ],
    "en": [
      "ping 192.168.1 hundred it works next"
    ],
    "ru": [
      "пинг 192.168.1 сотня работает дальше"
    ]
  },
  {
    "time": [
      302.0,
      306.0
    ],
    "en": [
      "ping 192.168 3 dot 101 it doesn't work"
    ],
    "ru": [
      "пинг 192.168 3 точка 101 не работает"
    ]
  },
  {
    "time": [
      306.0,
      311.0
    ],
    "en": [
      "ok functioning as intended so far now PC"
    ],
    "ru": [
      "нормально работает, как и предполагалось до сих пор ПК"
    ]
  },
  {
    "time": [
      311.0,
      314.0
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
      311.0,
      314.0
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
      314.0,
      319.0
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
      314.0,
      319.0
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
      319.0,
      324.0
    ],
    "en": [
      "doesn't work ping 192.168.1 o 1 doesn't"
    ],
    "ru": [
      "платите 192.168.1 сотку не работает"
    ]
  },
  {
    "time": [
      324.0,
      328.0
    ],
    "en": [
      "work again now let's go on PC 3 it"
    ],
    "ru": [
      "платит 192.168.1 или 1"
    ]
  },
  {
    "time": [
      328.0,
      330.0
    ],
    "en": [
      "shouldn't be able to ping server 1 but"
    ],
    "ru": [
      "он работает как ожидалось наконец ПК четыре"
    ]
  },
  {
    "time": [
      330.0,
      332.0
    ],
    "en": [
      "it should be able to ping the server to"
    ],
    "ru": [
      "который должен быть таким же, как и ПК три"
    ]
  },
  {
    "time": [
      332.0,
      338.0
    ],
    "en": [
      "pay 192.168.1 hundred doesn't work"
    ],
    "ru": [
      "пришел один девяносто две точки один шестьдесят восемь"
    ]
  },
  {
    "time": [
      338.0,
      347.0
    ],
    "en": [
      "paying 192.168.1 o 1"
    ],
    "ru": [
      "точка три точка сто не работает"
    ]
  },
  {
    "time": [
      347.0,
      352.0
    ],
    "en": [
      "it works as expected finally PC four"
    ],
    "ru": [
      "пинг 192.168.1 ох, он работает"
    ]
  },
  {
    "time": [
      352.0,
      354.0
    ],
    "en": [
      "which should be the same as PC three"
    ],
    "ru": [
      "так что наш ACL работает как задумано"
    ]
  },
  {
    "time": [
      354.0,
      356.0
    ],
    "en": [
      "came one ninety two dot one sixty eight"
    ],
    "ru": [
      "это все для этой лаборатории, спасибо за"
    ]
  },
  {
    "time": [
      356.0,
      359.0
    ],
    "en": [
      "dot three dot one hundred doesn't work"
    ],
    "ru": [
      "смотрю, надеюсь, эта лаборатория и видео"
    ]
  },
  {
    "time": [
      359.0,
      366.0
    ],
    "en": [
      "ping 192.168.1 oh one it works"
    ],
    "ru": [
      "был полезным для вас, пожалуйста, подпишитесь"
    ]
  },
  {
    "time": [
      366.0,
      369.0
    ],
    "en": [
      "so our ACL is functioning as intended"
    ],
    "ru": [
      "для будущих лабораторий, подобных этой, которые будут"
    ]
  },
  {
    "time": [
      369.0,
      375.0
    ],
    "en": [
      "that's all for this lab thank you for"
    ],
    "ru": [
      "выпускается еженедельно, если у вас есть запросы на"
    ]
  },
  {
    "time": [
      375.0,
      378.0
    ],
    "en": [
      "watching I hope this lab and video have"
    ],
    "ru": [
      "любые конкретные лаборатории дайте мне знать в"
    ]
  },
  {
    "time": [
      378.0,
      380.0
    ],
    "en": [
      "been helpful for you please subscribe"
    ],
    "ru": [
      "раздел комментариев, если вы хотите поддержать"
    ]
  },
  {
    "time": [
      380.0,
      383.0
    ],
    "en": [
      "for future labs like this which will be"
    ],
    "ru": [
      "мой канал, пожалуйста, рассмотрите возможность участия"
    ]
  },
  {
    "time": [
      383.0,
      386.0
    ],
    "en": [
      "released weekly if you have requests for"
    ],
    "ru": [
      "на мой patreon patreon comm слэш"
    ]
  },
  {
    "time": [
      386.0,
      388.0
    ],
    "en": [
      "any specific labs let me know in the"
    ],
    "ru": [
      "ИТ-лаборатория Джереми Я принимаю биткойны и"
    ]
  },
  {
    "time": [
      388.0,
      391.0
    ],
    "en": [
      "comment section if you want to support"
    ],
    "ru": [
      "пожертвования эфириума через адреса в"
    ]
  },
  {
    "time": [
      391.0,
      392.0
    ],
    "en": [
      "my channel please consider contributing"
    ],
    "ru": [
      "по описанию я тоже храбрый"
    ]
  },
  {
    "time": [
      392.0,
      396.0
    ],
    "en": [
      "to my patreon patreon comm slash"
    ],
    "ru": [
      "проверенный издатель и принять bat или"
    ]
  },
  {
    "time": [
      396.0,
      400.0
    ],
    "en": [
      "Jeremy's IT lab I accept Bitcoin and"
    ],
    "ru": [
      "основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      400.0,
      402.0
    ],
    "en": [
      "etherium donations via the addresses in"
    ],
    "ru": [
      "смелый браузер"
    ]
  },
  {
    "time": [
      402.0,
      405.0
    ],
    "en": [
      "the description I am also a brave"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      405.0,
      408.0
    ],
    "en": [
      "verified publisher and accept bat or"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      408.0,
      411.0
    ],
    "en": [
      "basic attention token donations in the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      411.0,
      411.0
    ],
    "en": [
      "brave browser"
    ],
    "ru": [
      ""
    ]
  }
]