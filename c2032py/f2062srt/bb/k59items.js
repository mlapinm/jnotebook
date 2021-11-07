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
      17.0
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
      17.0,
      21.0
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
      21.0,
      23.0
    ],
    "en": [
      "lab we will troubleshoot the AI GRP"
    ],
    "ru": [
      "лаборатории мы будем устранять неполадки AI GRP"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "network we configured in the previous"
    ],
    "ru": [
      "сеть, которую мы настроили в предыдущем"
    ]
  },
  {
    "time": [
      25.0,
      28.0
    ],
    "en": [
      "lab I have made one miss configuration"
    ],
    "ru": [
      "лаборатория Я сделал одну конфигурацию промаха"
    ]
  },
  {
    "time": [
      28.0,
      31.0
    ],
    "en": [
      "per router so let's find the issues and"
    ],
    "ru": [
      "на маршрутизатор, так что давайте найдем проблемы и"
    ]
  },
  {
    "time": [
      31.0,
      33.0
    ],
    "en": [
      "get AI GRP working in the network I'll"
    ],
    "ru": [
      "получить AI GRP, работающий в сети, я"
    ]
  },
  {
    "time": [
      33.0,
      39.0
    ],
    "en": [
      "get started on our one enable let's see"
    ],
    "ru": [
      "приступим к нашему единственному включению, давайте посмотрим"
    ]
  },
  {
    "time": [
      39.0,
      43.0
    ],
    "en": [
      "if our one has any EIGRP neighbors show"
    ],
    "ru": [
      "если у нашего есть какие-нибудь соседи EIGRP показывают"
    ]
  },
  {
    "time": [
      43.0,
      48.0
    ],
    "en": [
      "IP e IG RP neighbors nothing however"
    ],
    "ru": [
      "IP e IG RP, однако, ничего не соседствует"
    ]
  },
  {
    "time": [
      48.0,
      51.0
    ],
    "en": [
      "this message is a big hint showing a"
    ],
    "ru": [
      "это сообщение - большая подсказка, показывающая"
    ]
  },
  {
    "time": [
      51.0,
      55.0
    ],
    "en": [
      "EIGRP neighbors for process 10 this"
    ],
    "ru": [
      "Соседи EIGRP для процесса 10 это"
    ]
  },
  {
    "time": [
      55.0,
      57.0
    ],
    "en": [
      "process number is the autonomous system"
    ],
    "ru": [
      "номер процесса - автономная система"
    ]
  },
  {
    "time": [
      57.0,
      59.0
    ],
    "en": [
      "number this network is supposed to be"
    ],
    "ru": [
      "номер, которым должна быть эта сеть"
    ]
  },
  {
    "time": [
      59.0,
      66.0
    ],
    "en": [
      "using an a s number of 100 so run here"
    ],
    "ru": [
      "используя число 100, поэтому запустите здесь"
    ]
  },
  {
    "time": [
      66.0,
      68.0
    ],
    "en": [
      "we have all the correct ew g RP"
    ],
    "ru": [
      "у нас есть все правильные ew g RP"
    ]
  },
  {
    "time": [
      68.0,
      69.0
    ],
    "en": [
      "configurations"
    ],
    "ru": [
      "конфигурации"
    ]
  },
  {
    "time": [
      69.0,
      72.0
    ],
    "en": [
      "however because r1 is using an incorrect"
    ],
    "ru": [
      "однако, поскольку r1 использует неверный"
    ]
  },
  {
    "time": [
      72.0,
      76.0
    ],
    "en": [
      "a s number of 10 none of it works"
    ],
    "ru": [
      "число 10 ничего из этого не работает"
    ]
  },
  {
    "time": [
      76.0,
      80.0
    ],
    "en": [
      "coffee tea let's delete the current ew g"
    ],
    "ru": [
      "кофе чай давайте удалим текущий ew g"
    ]
  },
  {
    "time": [
      80.0,
      86.0
    ],
    "en": [
      "RP configuration no router EA g RP 10 do"
    ],
    "ru": [
      "Конфигурация RP без маршрутизатора EA g RP 10 do"
    ]
  },
  {
    "time": [
      86.0,
      91.0
    ],
    "en": [
      "show run as you can see that removed all"
    ],
    "ru": [
      "показать, как вы можете видеть, что удалили все"
    ]
  },
  {
    "time": [
      91.0,
      94.0
    ],
    "en": [
      "of the EIG RP configurations for a s 10"
    ],
    "ru": [
      "конфигураций ЭИГ РП за 10 с"
    ]
  },
  {
    "time": [
      94.0,
      96.0
    ],
    "en": [
      "now let's reconfigure it with the"
    ],
    "ru": [
      "теперь давайте переконфигурируем его с помощью"
    ]
  },
  {
    "time": [
      96.0,
      102.0
    ],
    "en": [
      "correct a s number router EA g RP 100"
    ],
    "ru": [
      "правильный номер маршрутизатора EA g RP 100"
    ]
  },
  {
    "time": [
      102.0,
      109.0
    ],
    "en": [
      "network 10000 network 1.1 1.1"
    ],
    "ru": [
      "сеть 10000 сеть 1.1 1.1"
    ]
  },
  {
    "time": [
      109.0,
      114.0
    ],
    "en": [
      "oh-oh-oh-oh passive interface l 0 no"
    ],
    "ru": [
      "ой-ой-ой-ой пассивный интерфейс l 0 нет"
    ]
  },
  {
    "time": [
      114.0,
      118.0
    ],
    "en": [
      "auto summary well as you can see one"
    ],
    "ru": [
      "автоматическое резюме хорошо, как вы можете видеть один"
    ]
  },
  {
    "time": [
      118.0,
      121.0
    ],
    "en": [
      "neighbor has come up r4"
    ],
    "ru": [
      "подошел сосед r4"
    ]
  },
  {
    "time": [
      121.0,
      123.0
    ],
    "en": [
      "let's see what routes were getting from"
    ],
    "ru": [
      "давайте посмотрим, из каких маршрутов"
    ]
  },
  {
    "time": [
      123.0,
      129.0
    ],
    "en": [
      "our 4 do show IP route looks like we're"
    ],
    "ru": [
      "наши 4 показа IP-маршрута выглядят так, как будто мы"
    ]
  },
  {
    "time": [
      129.0,
      131.0
    ],
    "en": [
      "getting quite a few routes already"
    ],
    "ru": [
      "уже довольно много маршрутов"
    ]
  },
  {
    "time": [
      131.0,
      133.0
    ],
    "en": [
      "however if you look carefully although"
    ],
    "ru": [
      "однако, если вы посмотрите внимательно, хотя"
    ]
  },
  {
    "time": [
      133.0,
      135.0
    ],
    "en": [
      "our neighbor ship with r4 is up and"
    ],
    "ru": [
      "наш соседский корабль с r4 встал и"
    ]
  },
  {
    "time": [
      135.0,
      138.0
    ],
    "en": [
      "we're receiving reds from it we're not"
    ],
    "ru": [
      "мы получаем красные от этого мы не"
    ]
  },
  {
    "time": [
      138.0,
      141.0
    ],
    "en": [
      "getting our fours 4.4.4 for loopback"
    ],
    "ru": [
      "получаем четверку 4.4.4 для loopback"
    ]
  },
  {
    "time": [
      141.0,
      141.0
    ],
    "en": [
      "address"
    ],
    "ru": [
      "адрес"
    ]
  },
  {
    "time": [
      141.0,
      147.0
    ],
    "en": [
      "let's see what's wrong on our 4 enable"
    ],
    "ru": [
      "посмотрим, что не так с нашим 4 включением"
    ]
  },
  {
    "time": [
      147.0,
      154.0
    ],
    "en": [
      "show IP protocols look here routing for"
    ],
    "ru": [
      "показать протоколы IP посмотрите здесь маршрутизацию для"
    ]
  },
  {
    "time": [
      154.0,
      161.0
    ],
    "en": [
      "networks 10000 and 40 4.4.4 4/32"
    ],
    "ru": [
      "сети 10000 и 40 4.4.4 4/32"
    ]
  },
  {
    "time": [
      161.0,
      166.0
    ],
    "en": [
      "show IP interface brief our 4 is"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса наши 4"
    ]
  },
  {
    "time": [
      166.0,
      168.0
    ],
    "en": [
      "loopback interface has an IP address of"
    ],
    "ru": [
      "шлейфовый интерфейс имеет IP-адрес"
    ]
  },
  {
    "time": [
      168.0,
      173.0
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
      168.0,
      173.0
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
      173.0,
      174.0
    ],
    "en": [
      "problem"
    ],
    "ru": [
      "проблема"
    ]
  },
  {
    "time": [
      174.0,
      181.0
    ],
    "en": [
      "coffee tea router EAG RP 100 no network"
    ],
    "ru": [
      "кофе чай роутер EAG RP 100 без сети"
    ]
  },
  {
    "time": [
      181.0,
      188.0
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
      181.0,
      188.0
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
      188.0,
      193.0
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
      188.0,
      193.0
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
      193.0,
      199.0
    ],
    "en": [
      "I'll just quickly check on r1 do show IP"
    ],
    "ru": [
      "Я просто быстро проверю, действительно ли r1 показывает IP"
    ]
  },
  {
    "time": [
      199.0,
      203.0
    ],
    "en": [
      "route there it is so we fix the issues"
    ],
    "ru": [
      "маршрут там, так что мы исправляем проблемы"
    ]
  },
  {
    "time": [
      203.0,
      208.0
    ],
    "en": [
      "on r1 and r4 now r1 formed a neighbor"
    ],
    "ru": [
      "на r1 и r4 теперь r1 сформировал соседа"
    ]
  },
  {
    "time": [
      208.0,
      210.0
    ],
    "en": [
      "relationship with our 4 but what about"
    ],
    "ru": [
      "отношения с нашими 4, но как насчет"
    ]
  },
  {
    "time": [
      210.0,
      217.0
    ],
    "en": [
      "our to do show IP e IG RP neighbor only"
    ],
    "ru": [
      "наша задача показать только соседа IP и IG RP"
    ]
  },
  {
    "time": [
      217.0,
      223.0
    ],
    "en": [
      "our four appears let's check out our to"
    ],
    "ru": [
      "появляется наша четверка, давайте посмотрим на нашу"
    ]
  },
  {
    "time": [
      223.0,
      229.0
    ],
    "en": [
      "enable show IP protocols can you spot"
    ],
    "ru": [
      "включить показывать IP-протоколы, вы можете заметить"
    ]
  },
  {
    "time": [
      229.0,
      233.0
    ],
    "en": [
      "the issue r2 is fast ethernet 1 0"
    ],
    "ru": [
      "проблема r2 - быстрый Ethernet 1 0"
    ]
  },
  {
    "time": [
      233.0,
      236.0
    ],
    "en": [
      "interface which is used to connect to r1"
    ],
    "ru": [
      "интерфейс, который используется для подключения к r1"
    ]
  },
  {
    "time": [
      236.0,
      239.0
    ],
    "en": [
      "is configured as a passive interface"
    ],
    "ru": [
      "настроен как пассивный интерфейс"
    ]
  },
  {
    "time": [
      239.0,
      242.0
    ],
    "en": [
      "this means r2 will advertise that 1012"
    ],
    "ru": [
      "это означает, что r2 будет рекламировать, что 1012"
    ]
  },
  {
    "time": [
      242.0,
      247.0
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
      242.0,
      247.0
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
      247.0,
      250.0
    ],
    "en": [
      "form a neighbor relationship with r1 on"
    ],
    "ru": [
      "сформировать отношения соседа с r1 на"
    ]
  },
  {
    "time": [
      250.0,
      256.0
    ],
    "en": [
      "that interface compte router aig RP 100"
    ],
    "ru": [
      "этот интерфейс compte router aig RP 100"
    ]
  },
  {
    "time": [
      256.0,
      261.0
    ],
    "en": [
      "no passive interface f10 there we go"
    ],
    "ru": [
      "нет пассивного интерфейса f10 поехали"
    ]
  },
  {
    "time": [
      261.0,
      263.0
    ],
    "en": [
      "immediately we get a message"
    ],
    "ru": [
      "сразу мы получаем сообщение"
    ]
  },
  {
    "time": [
      263.0,
      268.0
    ],
    "en": [
      "do show IPE a GRP neighbor there are two"
    ],
    "ru": [
      "показывать IPE соседа GRP есть два"
    ]
  },
  {
    "time": [
      268.0,
      272.0
    ],
    "en": [
      "is a neighbor with both r1 and r3"
    ],
    "ru": [
      "является соседом как с r1, так и с r3"
    ]
  },
  {
    "time": [
      272.0,
      279.0
    ],
    "en": [
      "let's see what's wrong on r3 enable show"
    ],
    "ru": [
      "посмотрим, что не так на r3 enable show"
    ]
  },
  {
    "time": [
      279.0,
      284.0
    ],
    "en": [
      "IP protocols everything looks good"
    ],
    "ru": [
      "IP протоколы все выглядит хорошо"
    ]
  },
  {
    "time": [
      284.0,
      289.0
    ],
    "en": [
      "advertising the 3.3 3.3 loopback and"
    ],
    "ru": [
      "реклама петли 3.3 3.3 и"
    ]
  },
  {
    "time": [
      289.0,
      293.0
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
      289.0,
      293.0
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
      293.0,
      299.0
    ],
    "en": [
      "passive show IP e IG RP neighbor okay so"
    ],
    "ru": [
      "пассивный показать IP e IG RP сосед в порядке, так"
    ]
  },
  {
    "time": [
      299.0,
      305.0
    ],
    "en": [
      "it's neighbors with r2 and r4 but not r5"
    ],
    "ru": [
      "это соседи с r2 и r4, но не с r5"
    ]
  },
  {
    "time": [
      305.0,
      311.0
    ],
    "en": [
      "show run I don't see any problems with"
    ],
    "ru": [
      "шоу-пробег не вижу проблем с"
    ]
  },
  {
    "time": [
      311.0,
      314.0
    ],
    "en": [
      "our 3zi GRP configuration so let's check"
    ],
    "ru": [
      "наша конфигурация 3zi GRP, так что давайте проверим"
    ]
  },
  {
    "time": [
      314.0,
      323.0
    ],
    "en": [
      "on our v enable show IP protocols can"
    ],
    "ru": [
      "на нашем v enable show IP-протоколы могут"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "you identify the problem here under the"
    ],
    "ru": [
      "вы определяете проблему здесь под"
    ]
  },
  {
    "time": [
      326.0,
      329.0
    ],
    "en": [
      "routing for networks section it lists"
    ],
    "ru": [
      "раздел маршрутизации для сетей, который он перечисляет"
    ]
  },
  {
    "time": [
      329.0,
      334.0
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
      329.0,
      334.0
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
      334.0,
      342.0
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
      334.0,
      342.0
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
      342.0,
      345.0
    ],
    "en": [
      "can see the / 32 wildcard mask was added"
    ],
    "ru": [
      "можно увидеть, что добавлена ​​подстановочная маска / 32"
    ]
  },
  {
    "time": [
      345.0,
      347.0
    ],
    "en": [
      "so yeah GRP isn't activated on our 5s"
    ],
    "ru": [
      "так что да, GRP не активирован на наших 5s"
    ]
  },
  {
    "time": [
      347.0,
      350.0
    ],
    "en": [
      "g00 interface which has an address in"
    ],
    "ru": [
      "g00, который имеет адрес в"
    ]
  },
  {
    "time": [
      350.0,
      357.0
    ],
    "en": [
      "the 10.35 0/24 network coughed e router"
    ],
    "ru": [
      "сеть 10.35 0/24 кашляла е роутер"
    ]
  },
  {
    "time": [
      357.0,
      366.0
    ],
    "en": [
      "ya g RP 100 no network 1000 odo odo now"
    ],
    "ru": [
      "ya g RP 100 нет сети 1000 одо сейчас"
    ]
  },
  {
    "time": [
      366.0,
      367.0
    ],
    "en": [
      "there are a couple of ways we could"
    ],
    "ru": [
      "есть несколько способов"
    ]
  },
  {
    "time": [
      367.0,
      370.0
    ],
    "en": [
      "activate di g RP on the interface let's"
    ],
    "ru": [
      "активировать di g RP на интерфейсе давайте"
    ]
  },
  {
    "time": [
      370.0,
      371.0
    ],
    "en": [
      "do what is configured on the other"
    ],
    "ru": [
      "делать то, что настроено на другом"
    ]
  },
  {
    "time": [
      371.0,
      375.0
    ],
    "en": [
      "routers and just type network 1000 and"
    ],
    "ru": [
      "маршрутизаторы и просто введите сеть 1000 и"
    ]
  },
  {
    "time": [
      375.0,
      377.0
    ],
    "en": [
      "leave it at that"
    ],
    "ru": [
      "оставь это на этом"
    ]
  },
  {
    "time": [
      377.0,
      380.0
    ],
    "en": [
      "remember Vig our P's Network command"
    ],
    "ru": [
      "Помните команду Vig нашего P Network"
    ]
  },
  {
    "time": [
      380.0,
      381.0
    ],
    "en": [
      "will default to the class full"
    ],
    "ru": [
      "по умолчанию будет полный класс"
    ]
  },
  {
    "time": [
      381.0,
      386.0
    ],
    "en": [
      "boundaries in this case a / 8 network"
    ],
    "ru": [
      "границы в этом случае сеть / 8"
    ]
  },
  {
    "time": [
      386.0,
      391.0
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
      386.0,
      391.0
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
      391.0,
      394.0
    ],
    "en": [
      "network so yeah GRP is now activated on"
    ],
    "ru": [
      "сеть, так что да, GRP теперь активирован на"
    ]
  },
  {
    "time": [
      394.0,
      396.0
    ],
    "en": [
      "our 5"
    ],
    "ru": [
      "наш 5"
    ]
  },
  {
    "time": [
      396.0,
      401.0
    ],
    "en": [
      "do show IP route now we're receiving a"
    ],
    "ru": [
      "показывать IP-маршрут, теперь мы получаем"
    ]
  },
  {
    "time": [
      401.0,
      403.0
    ],
    "en": [
      "EIGRP reps"
    ],
    "ru": [
      "Представители EIGRP"
    ]
  },
  {
    "time": [
      403.0,
      405.0
    ],
    "en": [
      "however our five is supposed to receive"
    ],
    "ru": [
      "однако наша пятерка должна получить"
    ]
  },
  {
    "time": [
      405.0,
      410.0
    ],
    "en": [
      "a 1000 / 8 summary from our 3 rather"
    ],
    "ru": [
      "краткое изложение 1000/8 из наших 3 довольно"
    ]
  },
  {
    "time": [
      410.0,
      413.0
    ],
    "en": [
      "than these individual reps this problem"
    ],
    "ru": [
      "чем эти отдельные представители этой проблемы"
    ]
  },
  {
    "time": [
      413.0,
      418.0
    ],
    "en": [
      "is likely on our three let's go back do"
    ],
    "ru": [
      "скорее всего на наших трех вернемся делать"
    ]
  },
  {
    "time": [
      418.0,
      423.0
    ],
    "en": [
      "show run the IP summary address command"
    ],
    "ru": [
      "show запустить команду сводного IP-адреса"
    ]
  },
  {
    "time": [
      423.0,
      426.0
    ],
    "en": [
      "isn't configured on the gig 0/0"
    ],
    "ru": [
      "не настроен на гиге 0/0"
    ]
  },
  {
    "time": [
      426.0,
      428.0
    ],
    "en": [
      "interface which connects to our five but"
    ],
    "ru": [
      "интерфейс, который подключается к нашим пяти, но"
    ]
  },
  {
    "time": [
      428.0,
      431.0
    ],
    "en": [
      "rather the f10 interface let's put it"
    ],
    "ru": [
      "скорее интерфейс f10 давай поставим"
    ]
  },
  {
    "time": [
      431.0,
      434.0
    ],
    "en": [
      "back on the correct interface let me"
    ],
    "ru": [
      "вернувшись к правильному интерфейсу, позвольте мне"
    ]
  },
  {
    "time": [
      434.0,
      439.0
    ],
    "en": [
      "copy the command first then I'll remove"
    ],
    "ru": [
      "сначала скопируйте команду, затем я удалю"
    ]
  },
  {
    "time": [
      439.0,
      444.0
    ],
    "en": [
      "it interface f10 now I'll paste it here"
    ],
    "ru": [
      "это интерфейс f10 сейчас вставлю сюда"
    ]
  },
  {
    "time": [
      444.0,
      450.0
    ],
    "en": [
      "and then I'll cancel it with no ok and"
    ],
    "ru": [
      "а затем я отменю его без согласия и"
    ]
  },
  {
    "time": [
      450.0,
      456.0
    ],
    "en": [
      "now let's put it on g00 interface g00"
    ],
    "ru": [
      "теперь поставим на g00 интерфейс g00"
    ]
  },
  {
    "time": [
      456.0,
      461.0
    ],
    "en": [
      "now I'll paste it here and there we go"
    ],
    "ru": [
      "сейчас я вставлю его сюда и поехали"
    ]
  },
  {
    "time": [
      461.0,
      463.0
    ],
    "en": [
      "let's check if r5 is receiving the"
    ],
    "ru": [
      "давайте проверим, получает ли r5"
    ]
  },
  {
    "time": [
      463.0,
      470.0
    ],
    "en": [
      "summary do show IP route there it is"
    ],
    "ru": [
      "сводка показать IP-маршрут вот он"
    ]
  },
  {
    "time": [
      470.0,
      474.0
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
      470.0,
      474.0
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
      474.0,
      476.0
    ],
    "en": [
      "issues in this network that's all for"
    ],
    "ru": [
      "проблемы в этой сети, это все для"
    ]
  },
  {
    "time": [
      476.0,
      481.0
    ],
    "en": [
      "this lab thank you for watching I hope"
    ],
    "ru": [
      "эта лаборатория спасибо за просмотр надеюсь"
    ]
  },
  {
    "time": [
      481.0,
      483.0
    ],
    "en": [
      "this lab and video have been helpful for"
    ],
    "ru": [
      "эта лабораторная работа и видео были полезны для"
    ]
  },
  {
    "time": [
      483.0,
      486.0
    ],
    "en": [
      "you please subscribe for future labs"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы"
    ]
  },
  {
    "time": [
      486.0,
      487.0
    ],
    "en": [
      "like this which will be released weekly"
    ],
    "ru": [
      "как это, которое будет выходить еженедельно"
    ]
  },
  {
    "time": [
      487.0,
      490.0
    ],
    "en": [
      "if you have requests for any specific"
    ],
    "ru": [
      "если у вас есть запросы на какие-либо конкретные"
    ]
  },
  {
    "time": [
      490.0,
      493.0
    ],
    "en": [
      "labs let me know in the comment section"
    ],
    "ru": [
      "лаборатории дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      493.0,
      495.0
    ],
    "en": [
      "if you want to support my channel I"
    ],
    "ru": [
      "если вы хотите поддержать мой канал я"
    ]
  },
  {
    "time": [
      495.0,
      497.0
    ],
    "en": [
      "accept Bitcoin and aetherium donations"
    ],
    "ru": [
      "принимать пожертвования биткойнами и эфиром"
    ]
  },
  {
    "time": [
      497.0,
      501.0
    ],
    "en": [
      "via addresses in the description I am"
    ],
    "ru": [
      "по адресам в описании я"
    ]
  },
  {
    "time": [
      501.0,
      503.0
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
      503.0,
      505.0
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
      505.0,
      505.0
    ],
    "en": [
      "donations in the brave browser"
    ],
    "ru": [
      "пожертвования в смелом браузере"
    ]
  }
]