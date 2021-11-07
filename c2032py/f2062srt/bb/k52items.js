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
      10.0
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
      10.0,
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
      "lab we will take a look at two methods"
    ],
    "ru": [
      "lab мы рассмотрим два метода"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "of inter VLAN routing using two small"
    ],
    "ru": [
      "маршрутизации между VLAN с использованием двух небольших"
    ]
  },
  {
    "time": [
      25.0,
      29.0
    ],
    "en": [
      "networks one is known as router on a"
    ],
    "ru": [
      "сети один известен как маршрутизатор на"
    ]
  },
  {
    "time": [
      29.0,
      31.0
    ],
    "en": [
      "stick which we already covered in the"
    ],
    "ru": [
      "палка, которую мы уже рассмотрели в"
    ]
  },
  {
    "time": [
      31.0,
      33.0
    ],
    "en": [
      "icnd1 labs but we will do a little"
    ],
    "ru": [
      "icnd1 labs но мы сделаем немного"
    ]
  },
  {
    "time": [
      33.0,
      37.0
    ],
    "en": [
      "review here the other method is using"
    ],
    "ru": [
      "просмотрите здесь другой метод, использующий"
    ]
  },
  {
    "time": [
      37.0,
      40.0
    ],
    "en": [
      "SBI's on a multi-layer switch which is a"
    ],
    "ru": [
      "SBI на многослойном переключателе, который является"
    ]
  },
  {
    "time": [
      40.0,
      43.0
    ],
    "en": [
      "switch with routing capabilities let's"
    ],
    "ru": [
      "коммутатор с возможностью маршрутизации давайте"
    ]
  },
  {
    "time": [
      43.0,
      47.0
    ],
    "en": [
      "get started first let's configure switch"
    ],
    "ru": [
      "начнем сначала давайте настроим коммутатор"
    ]
  },
  {
    "time": [
      47.0,
      51.0
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
      47.0,
      51.0
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
      51.0,
      54.0
    ],
    "en": [
      "switch 1 isn't connected to a router in"
    ],
    "ru": [
      "коммутатор 1 не подключен к маршрутизатору в"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "this small network and even if it were"
    ],
    "ru": [
      "эта небольшая сеть, и даже если бы она была"
    ]
  },
  {
    "time": [
      56.0,
      58.0
    ],
    "en": [
      "it might be preferable for a switch 1 to"
    ],
    "ru": [
      "было бы предпочтительнее переключить 1 на"
    ]
  },
  {
    "time": [
      58.0,
      61.0
    ],
    "en": [
      "rub between VLANs itself without having"
    ],
    "ru": [
      "протирать между самими VLAN, не имея"
    ]
  },
  {
    "time": [
      61.0,
      64.0
    ],
    "en": [
      "to send the traffic to a router now pc1"
    ],
    "ru": [
      "теперь отправлять трафик на роутер pc1"
    ]
  },
  {
    "time": [
      64.0,
      66.0
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
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      66.0,
      72.0
    ],
    "en": [
      "other at the moment let's try from PC 1"
    ],
    "ru": [
      "другое на данный момент попробуем с ПК 1"
    ]
  },
  {
    "time": [
      72.0,
      81.0
    ],
    "en": [
      "ping 1002 10"
    ],
    "ru": [
      "пинг 1002 10"
    ]
  },
  {
    "time": [
      81.0,
      83.0
    ],
    "en": [
      "doesn't work let's go on switch one and"
    ],
    "ru": [
      "не работает, давай включим первый переключатель и"
    ]
  },
  {
    "time": [
      83.0,
      90.0
    ],
    "en": [
      "make it work an able coffee tea ok the"
    ],
    "ru": [
      "заставить его работать способный кофе чай хорошо"
    ]
  },
  {
    "time": [
      90.0,
      92.0
    ],
    "en": [
      "first step is to enable IP routing on"
    ],
    "ru": [
      "Первый шаг - включить IP-маршрутизацию на"
    ]
  },
  {
    "time": [
      92.0,
      94.0
    ],
    "en": [
      "the switch which is done with the"
    ],
    "ru": [
      "переключатель, который делается с"
    ]
  },
  {
    "time": [
      94.0,
      98.0
    ],
    "en": [
      "command IP routing this enables the"
    ],
    "ru": [
      "командная IP-маршрутизация, это позволяет"
    ]
  },
  {
    "time": [
      98.0,
      100.0
    ],
    "en": [
      "layer 3 capabilities of this multi-layer"
    ],
    "ru": [
      "уровень 3 возможности этого многоуровневого"
    ]
  },
  {
    "time": [
      100.0,
      104.0
    ],
    "en": [
      "switch next we just have to configure"
    ],
    "ru": [
      "перейти дальше, нам просто нужно настроить"
    ]
  },
  {
    "time": [
      104.0,
      107.0
    ],
    "en": [
      "the VLANs with IP addresses interface"
    ],
    "ru": [
      "Интерфейс VLAN с IP-адресами"
    ]
  },
  {
    "time": [
      107.0,
      111.0
    ],
    "en": [
      "VLAN 10 I configured each PC to use the"
    ],
    "ru": [
      "VLAN 10 Я настроил каждый ПК на использование"
    ]
  },
  {
    "time": [
      111.0,
      113.0
    ],
    "en": [
      "dot 1 address of their subnet as a"
    ],
    "ru": [
      "точка 1 адрес своей подсети как"
    ]
  },
  {
    "time": [
      113.0,
      114.0
    ],
    "en": [
      "default gateway"
    ],
    "ru": [
      "шлюз по умолчанию"
    ]
  },
  {
    "time": [
      114.0,
      122.0
    ],
    "en": [
      "so for VLAN 10 IP address 1001 one"
    ],
    "ru": [
      "так что для VLAN 10 IP-адрес 1001 один"
    ]
  },
  {
    "time": [
      122.0,
      127.0
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
      122.0,
      127.0
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
      127.0,
      131.0
    ],
    "en": [
      "by default so remember no shutdown now"
    ],
    "ru": [
      "по умолчанию, поэтому помните, что сейчас выключения нет"
    ]
  },
  {
    "time": [
      131.0,
      136.0
    ],
    "en": [
      "let's configure VLAN 20 interface VLAN"
    ],
    "ru": [
      "настроим интерфейс VLAN 20 VLAN"
    ]
  },
  {
    "time": [
      136.0,
      144.0
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
      136.0,
      144.0
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
      144.0,
      147.0
    ],
    "en": [
      "shutdown that's all there is to it"
    ],
    "ru": [
      "выключение, вот и все, что нужно сделать"
    ]
  },
  {
    "time": [
      147.0,
      150.0
    ],
    "en": [
      "keep in mind I already configured switch"
    ],
    "ru": [
      "имейте в виду, я уже настроил переключатель"
    ]
  },
  {
    "time": [
      150.0,
      152.0
    ],
    "en": [
      "ones interfaces connected to a PC one"
    ],
    "ru": [
      "один интерфейс подключен к ПК один"
    ]
  },
  {
    "time": [
      152.0,
      155.0
    ],
    "en": [
      "and PC two to be in VLAN 10 and VLAN 20"
    ],
    "ru": [
      "и ПК два должны быть в VLAN 10 и VLAN 20"
    ]
  },
  {
    "time": [
      155.0,
      160.0
    ],
    "en": [
      "do show VLAN brief there you go"
    ],
    "ru": [
      "покажите краткое описание VLAN, вот и все"
    ]
  },
  {
    "time": [
      160.0,
      163.0
    ],
    "en": [
      "now let's try our ping once more from PC"
    ],
    "ru": [
      "теперь давайте попробуем наш пинг еще раз с ПК"
    ]
  },
  {
    "time": [
      163.0,
      175.0
    ],
    "en": [
      "one ping 1000 two 1000 all there is to"
    ],
    "ru": [
      "один пинг 1000 два 1000 все, что нужно"
    ]
  },
  {
    "time": [
      175.0,
      179.0
    ],
    "en": [
      "inter VLAN routing using SBI's for a"
    ],
    "ru": [
      "маршрутизация между VLAN с использованием SBI для"
    ]
  },
  {
    "time": [
      179.0,
      182.0
    ],
    "en": [
      "quick review enable IP routing on the"
    ],
    "ru": [
      "быстрый обзор включить IP-маршрутизацию на"
    ]
  },
  {
    "time": [
      182.0,
      184.0
    ],
    "en": [
      "multi-layer switch create the"
    ],
    "ru": [
      "многослойный переключатель создать"
    ]
  },
  {
    "time": [
      184.0,
      186.0
    ],
    "en": [
      "appropriate SV eyes with the interface"
    ],
    "ru": [
      "соответствующие глаза SV с интерфейсом"
    ]
  },
  {
    "time": [
      186.0,
      190.0
    ],
    "en": [
      "VLAN command configure IP addresses on"
    ],
    "ru": [
      "Команда VLAN настраивает IP-адреса на"
    ]
  },
  {
    "time": [
      190.0,
      192.0
    ],
    "en": [
      "the SV eyes and enable them with no"
    ],
    "ru": [
      "глаза SV и включить их без"
    ]
  },
  {
    "time": [
      192.0,
      197.0
    ],
    "en": [
      "shutdown next let's configure inter VLAN"
    ],
    "ru": [
      "завершение работы далее давайте настроим меж VLAN"
    ]
  },
  {
    "time": [
      197.0,
      200.0
    ],
    "en": [
      "routing in our other small network using"
    ],
    "ru": [
      "маршрутизация в другой нашей небольшой сети с использованием"
    ]
  },
  {
    "time": [
      200.0,
      203.0
    ],
    "en": [
      "the router on a stick method by using"
    ],
    "ru": [
      "роутер на флеш-накопителе с помощью"
    ]
  },
  {
    "time": [
      203.0,
      206.0
    ],
    "en": [
      "sub interfaces r2 can act as a default"
    ],
    "ru": [
      "субинтерфейсы r2 могут действовать по умолчанию"
    ]
  },
  {
    "time": [
      206.0,
      208.0
    ],
    "en": [
      "gateway for multiple subnets using a"
    ],
    "ru": [
      "шлюз для нескольких подсетей с использованием"
    ]
  },
  {
    "time": [
      208.0,
      212.0
    ],
    "en": [
      "single physical interface again I"
    ],
    "ru": [
      "один физический интерфейс снова я"
    ]
  },
  {
    "time": [
      212.0,
      214.0
    ],
    "en": [
      "already configured the switch to"
    ],
    "ru": [
      "уже настроил коммутатор на"
    ]
  },
  {
    "time": [
      214.0,
      214.0
    ],
    "en": [
      "interface"
    ],
    "ru": [
      "интерфейс"
    ]
  },
  {
    "time": [
      214.0,
      218.0
    ],
    "en": [
      "is connected to a PC 3 and PC for to be"
    ],
    "ru": [
      "подключен к ПК 3 и ПК, чтобы быть"
    ]
  },
  {
    "time": [
      218.0,
      220.0
    ],
    "en": [
      "in VLAN 30 and VLAN 40 so we just have"
    ],
    "ru": [
      "в VLAN 30 и VLAN 40, поэтому у нас просто есть"
    ]
  },
  {
    "time": [
      220.0,
      221.0
    ],
    "en": [
      "to configure the connection between"
    ],
    "ru": [
      "для настройки соединения между"
    ]
  },
  {
    "time": [
      221.0,
      226.0
    ],
    "en": [
      "switch 2 and R 2 let's just show that PC"
    ],
    "ru": [
      "переключатель 2 и R 2, давайте просто покажем этот ПК"
    ]
  },
  {
    "time": [
      226.0,
      228.0
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
      226.0,
      228.0
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
      229.0
    ],
    "en": [
      "moment"
    ],
    "ru": [
      "момент"
    ]
  },
  {
    "time": [
      229.0,
      243.0
    ],
    "en": [
      "upping from PC 3 to PC for ping 1004 10"
    ],
    "ru": [
      "переход с ПК 3 на ПК для проверки связи 1004 10"
    ]
  },
  {
    "time": [
      243.0,
      245.0
    ],
    "en": [
      "doesn't work"
    ],
    "ru": [
      "не работает"
    ]
  },
  {
    "time": [
      245.0,
      252.0
    ],
    "en": [
      "first let's go on switch to enable golf"
    ],
    "ru": [
      "сначала давайте включим переключатель, чтобы включить гольф"
    ]
  },
  {
    "time": [
      252.0,
      255.0
    ],
    "en": [
      "tee all we have to do here is configure"
    ],
    "ru": [
      "Все, что нам нужно сделать, это настроить"
    ]
  },
  {
    "time": [
      255.0,
      260.0
    ],
    "en": [
      "g0 one as a trunk interface g0 1 switch"
    ],
    "ru": [
      "g0 one в качестве магистрального интерфейса g0 1 коммутатор"
    ]
  },
  {
    "time": [
      260.0,
      262.0
    ],
    "en": [
      "port mode trunk"
    ],
    "ru": [
      "транк в режиме порта"
    ]
  },
  {
    "time": [
      262.0,
      269.0
    ],
    "en": [
      "that's all now let's go to our to enable"
    ],
    "ru": [
      "вот и все, теперь давайте перейдем к нашему, чтобы включить"
    ]
  },
  {
    "time": [
      269.0,
      275.0
    ],
    "en": [
      "golf tee let's enable the g00 interface"
    ],
    "ru": [
      "гольф тройник давайте включим интерфейс g00"
    ]
  },
  {
    "time": [
      275.0,
      281.0
    ],
    "en": [
      "interface G 0 0 no shutdown now let's"
    ],
    "ru": [
      "интерфейс G 0 0 без выключения теперь давайте"
    ]
  },
  {
    "time": [
      281.0,
      283.0
    ],
    "en": [
      "create a sub interface for VLAN 30"
    ],
    "ru": [
      "создать субинтерфейс для VLAN 30"
    ]
  },
  {
    "time": [
      283.0,
      289.0
    ],
    "en": [
      "interface G 0 0 30 next specify this sub"
    ],
    "ru": [
      "интерфейс G 0 0 30 затем укажите этот суб"
    ]
  },
  {
    "time": [
      289.0,
      293.0
    ],
    "en": [
      "interface as being before VLAN 30"
    ],
    "ru": [
      "интерфейс как до VLAN 30"
    ]
  },
  {
    "time": [
      293.0,
      299.0
    ],
    "en": [
      "encapsulation dot1q 30 next we just add"
    ],
    "ru": [
      "инкапсуляция dot1q 30 далее мы просто добавляем"
    ]
  },
  {
    "time": [
      299.0,
      305.0
    ],
    "en": [
      "the IP address IP address 1003 1 255 255"
    ],
    "ru": [
      "IP-адрес IP-адрес 1003 1 255 255"
    ]
  },
  {
    "time": [
      305.0,
      309.0
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
      305.0,
      309.0
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
      309.0,
      312.0
    ],
    "en": [
      "sub interface for VLAN 40 and do the"
    ],
    "ru": [
      "вспомогательный интерфейс для VLAN 40 и выполните"
    ]
  },
  {
    "time": [
      312.0,
      318.0
    ],
    "en": [
      "same interface G 0 0.40 encapsulation"
    ],
    "ru": [
      "тот же интерфейс G 0 0,40 инкапсуляция"
    ]
  },
  {
    "time": [
      318.0,
      329.0
    ],
    "en": [
      "dot1q 40 IP address 1004 1 255.255.255.0"
    ],
    "ru": [
      "dot1q 40 IP-адрес 1004 1 255.255.255.0"
    ]
  },
  {
    "time": [
      329.0,
      331.0
    ],
    "en": [
      "that's all there is to router on a stick"
    ],
    "ru": [
      "это все, что нужно для роутера на флешке"
    ]
  },
  {
    "time": [
      331.0,
      337.0
    ],
    "en": [
      "let's try that ping again from pc 3 ping"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с пк 3 пинг"
    ]
  },
  {
    "time": [
      337.0,
      346.0
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
      337.0,
      346.0
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
      346.0,
      348.0
    ],
    "en": [
      "okay there we go"
    ],
    "ru": [
      "хорошо, мы идем"
    ]
  },
  {
    "time": [
      348.0,
      350.0
    ],
    "en": [
      "in this slob we looked at two methods of"
    ],
    "ru": [
      "в этой лабиринте мы рассмотрели два метода"
    ]
  },
  {
    "time": [
      350.0,
      354.0
    ],
    "en": [
      "inter VLAN routing SV eyes and router on"
    ],
    "ru": [
      "маршрутизация между VLAN глазами SV и маршрутизатор включены"
    ]
  },
  {
    "time": [
      354.0,
      361.0
    ],
    "en": [
      "a stick that's all for this lab thank"
    ],
    "ru": [
      "палка вот и все для этой лаборатории спасибо"
    ]
  },
  {
    "time": [
      361.0,
      363.0
    ],
    "en": [
      "you for watching I hope this lab and"
    ],
    "ru": [
      "вы за просмотр, надеюсь, эта лаборатория и"
    ]
  },
  {
    "time": [
      363.0,
      365.0
    ],
    "en": [
      "video have been helpful for you please"
    ],
    "ru": [
      "видео были для вас полезны, пожалуйста"
    ]
  },
  {
    "time": [
      365.0,
      367.0
    ],
    "en": [
      "subscribe for future labs like this"
    ],
    "ru": [
      "подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      367.0,
      370.0
    ],
    "en": [
      "which will be released weekly if you"
    ],
    "ru": [
      "который будет выходить еженедельно, если вы"
    ]
  },
  {
    "time": [
      370.0,
      372.0
    ],
    "en": [
      "have requests for any specific labs let"
    ],
    "ru": [
      "есть запросы на любые конкретные лаборатории, позволяющие"
    ]
  },
  {
    "time": [
      372.0,
      375.0
    ],
    "en": [
      "me know in the comment section if you"
    ],
    "ru": [
      "я знаю в разделе комментариев, если вы"
    ]
  },
  {
    "time": [
      375.0,
      377.0
    ],
    "en": [
      "want to support my channel I accept"
    ],
    "ru": [
      "хочу поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      377.0,
      379.0
    ],
    "en": [
      "Bitcoin and aetherium donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфириума через"
    ]
  },
  {
    "time": [
      379.0,
      383.0
    ],
    "en": [
      "addresses in the description I am also a"
    ],
    "ru": [
      "адреса в описании я тоже"
    ]
  },
  {
    "time": [
      383.0,
      385.0
    ],
    "en": [
      "brave verified publisher and accept bat"
    ],
    "ru": [
      "храбрый проверенный издатель и прими летучую мышь"
    ]
  },
  {
    "time": [
      385.0,
      388.0
    ],
    "en": [
      "or basic attention token donations in"
    ],
    "ru": [
      "или основные пожертвования токенов внимания в"
    ]
  },
  {
    "time": [
      388.0,
      388.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]