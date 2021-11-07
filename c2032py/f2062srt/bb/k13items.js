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
      "file from the link in the description in"
    ],
    "ru": [
      "файл по ссылке в описании в"
    ]
  },
  {
    "time": [
      8.0,
      11.0
    ],
    "en": [
      "this lab we will take a basic look at"
    ],
    "ru": [
      "в этой лаборатории мы кратко рассмотрим"
    ]
  },
  {
    "time": [
      11.0,
      16.0
    ],
    "en": [
      "CDP cisco discovery protocol CDP is a"
    ],
    "ru": [
      "CDP Протокол обнаружения Cisco CDP - это"
    ]
  },
  {
    "time": [
      16.0,
      19.0
    ],
    "en": [
      "cisco proprietary protocol it is used to"
    ],
    "ru": [
      "проприетарный протокол cisco, который используется для"
    ]
  },
  {
    "time": [
      19.0,
      21.0
    ],
    "en": [
      "share information about other directly"
    ],
    "ru": [
      "делиться информацией о других напрямую"
    ]
  },
  {
    "time": [
      21.0,
      23.0
    ],
    "en": [
      "connected cisco equipment such as the"
    ],
    "ru": [
      "подключенное оборудование cisco, такое как"
    ]
  },
  {
    "time": [
      23.0,
      25.0
    ],
    "en": [
      "operating system version and the"
    ],
    "ru": [
      "версия операционной системы и"
    ]
  },
  {
    "time": [
      25.0,
      27.0
    ],
    "en": [
      "interfaces by which they are connected"
    ],
    "ru": [
      "интерфейсы, которыми они связаны"
    ]
  },
  {
    "time": [
      27.0,
      30.0
    ],
    "en": [
      "there is also a vendor-neutral protocol"
    ],
    "ru": [
      "есть также протокол, не зависящий от производителя"
    ]
  },
  {
    "time": [
      30.0,
      34.0
    ],
    "en": [
      "called lldp or link layer discovery"
    ],
    "ru": [
      "называется lldp или обнаружением канального уровня"
    ]
  },
  {
    "time": [
      34.0,
      36.0
    ],
    "en": [
      "protocol which I will talk about in"
    ],
    "ru": [
      "протокол, о котором я расскажу в"
    ]
  },
  {
    "time": [
      36.0,
      39.0
    ],
    "en": [
      "another video try to complete the lab"
    ],
    "ru": [
      "еще одно видео попробуйте пройти лабораторию"
    ]
  },
  {
    "time": [
      39.0,
      41.0
    ],
    "en": [
      "yourself first then continue watching"
    ],
    "ru": [
      "сначала себя, а потом продолжай смотреть"
    ]
  },
  {
    "time": [
      41.0,
      43.0
    ],
    "en": [
      "this video if you have trouble or watch"
    ],
    "ru": [
      "это видео, если у вас возникли проблемы, или посмотрите"
    ]
  },
  {
    "time": [
      43.0,
      49.0
    ],
    "en": [
      "it after to check your solution step 1"
    ],
    "ru": [
      "это после, чтобы проверить свое решение, шаг 1"
    ]
  },
  {
    "time": [
      49.0,
      51.0
    ],
    "en": [
      "is to use CDP to identify which"
    ],
    "ru": [
      "заключается в использовании CDP для определения"
    ]
  },
  {
    "time": [
      51.0,
      52.0
    ],
    "en": [
      "interfaces are used to connect the"
    ],
    "ru": [
      "интерфейсы используются для подключения"
    ]
  },
  {
    "time": [
      52.0,
      55.0
    ],
    "en": [
      "routers and switches CDP can only"
    ],
    "ru": [
      "маршрутизаторы и коммутаторы CDP могут только"
    ]
  },
  {
    "time": [
      55.0,
      58.0
    ],
    "en": [
      "display directly connected neighbors so"
    ],
    "ru": [
      "отображать напрямую подключенных соседей, чтобы"
    ]
  },
  {
    "time": [
      58.0,
      60.0
    ],
    "en": [
      "switch one should have one neighbor r1"
    ],
    "ru": [
      "переключатель должен иметь одного соседа r1"
    ]
  },
  {
    "time": [
      60.0,
      63.0
    ],
    "en": [
      "r1 should have two neighbors switch 1"
    ],
    "ru": [
      "r1 должен иметь двух соседей switch 1"
    ]
  },
  {
    "time": [
      63.0,
      67.0
    ],
    "en": [
      "and r2 r2 should have two neighbors r1"
    ],
    "ru": [
      "и r2 r2 должно иметь двух соседей r1"
    ]
  },
  {
    "time": [
      67.0,
      70.0
    ],
    "en": [
      "and switch two and switch two should"
    ],
    "ru": [
      "и переключить два и переключить два должны"
    ]
  },
  {
    "time": [
      70.0,
      74.0
    ],
    "en": [
      "have one neighbor r2 let's check on"
    ],
    "ru": [
      "есть один сосед r2 давайте проверим"
    ]
  },
  {
    "time": [
      74.0,
      80.0
    ],
    "en": [
      "switch 1 first enable now let's use the"
    ],
    "ru": [
      "переключатель 1 сначала включить, теперь давайте воспользуемся"
    ]
  },
  {
    "time": [
      80.0,
      85.0
    ],
    "en": [
      "command show CDP neighbors as you can"
    ],
    "ru": [
      "команда покажет соседей CDP, как вы можете"
    ]
  },
  {
    "time": [
      85.0,
      89.0
    ],
    "en": [
      "see switch 1 has one neighbor r1 it is"
    ],
    "ru": [
      "см., что у коммутатора 1 есть один сосед r1, это"
    ]
  },
  {
    "time": [
      89.0,
      91.0
    ],
    "en": [
      "connected to the fastethernet 0/1"
    ],
    "ru": [
      "подключен к fastethernet 0/1"
    ]
  },
  {
    "time": [
      91.0,
      95.0
    ],
    "en": [
      "interface remember local interface means"
    ],
    "ru": [
      "интерфейс запомнить средства локального интерфейса"
    ]
  },
  {
    "time": [
      95.0,
      98.0
    ],
    "en": [
      "the interface on this device switch 1"
    ],
    "ru": [
      "интерфейс на этом переключателе устройства 1"
    ]
  },
  {
    "time": [
      98.0,
      102.0
    ],
    "en": [
      "under capability there is an R and if"
    ],
    "ru": [
      "под возможностями стоит R, а если"
    ]
  },
  {
    "time": [
      102.0,
      104.0
    ],
    "en": [
      "you check the capability codes list up"
    ],
    "ru": [
      "вы проверяете список кодов возможностей"
    ]
  },
  {
    "time": [
      104.0,
      107.0
    ],
    "en": [
      "here you can see that that means router"
    ],
    "ru": [
      "здесь вы можете видеть, что это означает маршрутизатор"
    ]
  },
  {
    "time": [
      107.0,
      111.0
    ],
    "en": [
      "also check the pork ID this is the"
    ],
    "ru": [
      "также проверьте идентификатор свинины, это"
    ]
  },
  {
    "time": [
      111.0,
      114.0
    ],
    "en": [
      "interface of the remote device in this"
    ],
    "ru": [
      "интерфейс удаленного устройства в этом"
    ]
  },
  {
    "time": [
      114.0,
      119.0
    ],
    "en": [
      "case r1 so now you know switch 1 is"
    ],
    "ru": [
      "case r1, так что теперь вы знаете, что переключатель 1"
    ]
  },
  {
    "time": [
      119.0,
      121.0
    ],
    "en": [
      "connected to r1 by its fastethernet 0/1"
    ],
    "ru": [
      "подключен к r1 через его fastethernet 0/1"
    ]
  },
  {
    "time": [
      121.0,
      124.0
    ],
    "en": [
      "interface and it's connected to our ones"
    ],
    "ru": [
      "интерфейс и он связан с нашими"
    ]
  },
  {
    "time": [
      124.0,
      130.0
    ],
    "en": [
      "fastethernet 0/0 interface let's hop on"
    ],
    "ru": [
      "Интерфейс fastethernet 0/0, давайте перейдем"
    ]
  },
  {
    "time": [
      130.0,
      133.0
    ],
    "en": [
      "r1 now"
    ],
    "ru": [
      "r1 сейчас"
    ]
  },
  {
    "time": [
      133.0,
      140.0
    ],
    "en": [
      "enable show CDP neighbors are one has"
    ],
    "ru": [
      "включить показать соседей CDP, есть ли у одного"
    ]
  },
  {
    "time": [
      140.0,
      143.0
    ],
    "en": [
      "two neighbors switch 1 and r2"
    ],
    "ru": [
      "два соседа переключаются 1 и r2"
    ]
  },
  {
    "time": [
      143.0,
      145.0
    ],
    "en": [
      "it's connected to switch 1 via the"
    ],
    "ru": [
      "он подключен к переключателю 1 через"
    ]
  },
  {
    "time": [
      145.0,
      147.0
    ],
    "en": [
      "fastethernet 0/0 interface which we"
    ],
    "ru": [
      "fastethernet 0/0 интерфейс, который мы"
    ]
  },
  {
    "time": [
      147.0,
      150.0
    ],
    "en": [
      "already learned from switch 1 it's"
    ],
    "ru": [
      "уже узнал от переключателя 1, это"
    ]
  },
  {
    "time": [
      150.0,
      153.0
    ],
    "en": [
      "connected to r2 by its serial to zero"
    ],
    "ru": [
      "подключен к r2 по серийнику на ноль"
    ]
  },
  {
    "time": [
      153.0,
      155.0
    ],
    "en": [
      "interface and it's connected to our"
    ],
    "ru": [
      "интерфейс и он подключен к нашему"
    ]
  },
  {
    "time": [
      155.0,
      158.0
    ],
    "en": [
      "two's serial to zero interface as well"
    ],
    "ru": [
      "двух последовательный интерфейс к нулю, а также"
    ]
  },
  {
    "time": [
      158.0,
      166.0
    ],
    "en": [
      "let's do the same on art to enable show"
    ],
    "ru": [
      "давайте сделаем то же самое с искусством, чтобы включить показ"
    ]
  },
  {
    "time": [
      166.0,
      171.0
    ],
    "en": [
      "CDP neighbors as we already saw in our"
    ],
    "ru": [
      "Соседи CDP, как мы уже видели в нашем"
    ]
  },
  {
    "time": [
      171.0,
      172.0
    ],
    "en": [
      "one the two routers are connected by"
    ],
    "ru": [
      "один два маршрутизатора соединены"
    ]
  },
  {
    "time": [
      172.0,
      176.0
    ],
    "en": [
      "their serial to zero interfaces also r2"
    ],
    "ru": [
      "их последовательные к нулю интерфейсы также r2"
    ]
  },
  {
    "time": [
      176.0,
      178.0
    ],
    "en": [
      "is connected by its fastethernet 0/0"
    ],
    "ru": [
      "подключен через его fastethernet 0/0"
    ]
  },
  {
    "time": [
      178.0,
      181.0
    ],
    "en": [
      "interface to switch twos fastethernet"
    ],
    "ru": [
      "интерфейс для переключения двух fastethernet"
    ]
  },
  {
    "time": [
      181.0,
      185.0
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
      185.0
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
      185.0,
      193.0
    ],
    "en": [
      "to enable show CDP neighbors as we"
    ],
    "ru": [
      "чтобы включить показ соседей CDP, как мы"
    ]
  },
  {
    "time": [
      193.0,
      195.0
    ],
    "en": [
      "already saw switch to is connected via"
    ],
    "ru": [
      "уже видел переключатель к подключен через"
    ]
  },
  {
    "time": [
      195.0,
      198.0
    ],
    "en": [
      "its fastethernet 0/1 interface to our"
    ],
    "ru": [
      "его интерфейс fastethernet 0/1 с нашим"
    ]
  },
  {
    "time": [
      198.0,
      201.0
    ],
    "en": [
      "two's fastethernet 0/0 interface that's"
    ],
    "ru": [
      "два интерфейса fastethernet 0/0, который"
    ]
  },
  {
    "time": [
      201.0,
      206.0
    ],
    "en": [
      "all for step one"
    ],
    "ru": [
      "все для первого шага"
    ]
  },
  {
    "time": [
      206.0,
      209.0
    ],
    "en": [
      "step two is to determine which side of"
    ],
    "ru": [
      "Шаг второй - определить, с какой стороны"
    ]
  },
  {
    "time": [
      209.0,
      212.0
    ],
    "en": [
      "the connection between r1 and r2 is DCE"
    ],
    "ru": [
      "связь между r1 и r2 - DCE"
    ]
  },
  {
    "time": [
      212.0,
      216.0
    ],
    "en": [
      "and which is DTE I mentioned in a"
    ],
    "ru": [
      "и это DTE, о котором я упоминал в"
    ]
  },
  {
    "time": [
      216.0,
      218.0
    ],
    "en": [
      "previous lab that serial connections"
    ],
    "ru": [
      "предыдущая лаборатория, что последовательные соединения"
    ]
  },
  {
    "time": [
      218.0,
      220.0
    ],
    "en": [
      "have a DC e or data communications"
    ],
    "ru": [
      "иметь DC e или передачу данных"
    ]
  },
  {
    "time": [
      220.0,
      223.0
    ],
    "en": [
      "equipment side and a DTE or data"
    ],
    "ru": [
      "сторона оборудования и DTE или данные"
    ]
  },
  {
    "time": [
      223.0,
      226.0
    ],
    "en": [
      "terminal equipment side remember that"
    ],
    "ru": [
      "сторона оконечного оборудования помните, что"
    ]
  },
  {
    "time": [
      226.0,
      229.0
    ],
    "en": [
      "the important difference is that the DCE"
    ],
    "ru": [
      "важное отличие состоит в том, что DCE"
    ]
  },
  {
    "time": [
      229.0,
      231.0
    ],
    "en": [
      "side has to provide the clock rate of"
    ],
    "ru": [
      "сторона должна обеспечивать тактовую частоту"
    ]
  },
  {
    "time": [
      231.0,
      234.0
    ],
    "en": [
      "the connection we don't use CDP for this"
    ],
    "ru": [
      "соединение, мы не используем CDP для этого"
    ]
  },
  {
    "time": [
      234.0,
      240.0
    ],
    "en": [
      "it's just a bit of review let's go on r1"
    ],
    "ru": [
      "это всего лишь небольшой обзор, давайте перейдем к r1"
    ]
  },
  {
    "time": [
      240.0,
      244.0
    ],
    "en": [
      "show controllers s20 remember that the"
    ],
    "ru": [
      "показать контроллеры s20 помните, что"
    ]
  },
  {
    "time": [
      244.0,
      246.0
    ],
    "en": [
      "routers are connected by their serial to"
    ],
    "ru": [
      "маршрутизаторы подключены по их последовательному к"
    ]
  },
  {
    "time": [
      246.0,
      251.0
    ],
    "en": [
      "zero interfaces as you can see our one"
    ],
    "ru": [
      "ноль интерфейсов, как видите наш"
    ]
  },
  {
    "time": [
      251.0,
      252.0
    ],
    "en": [
      "is in fact the DCE side of the"
    ],
    "ru": [
      "фактически является стороной DCE"
    ]
  },
  {
    "time": [
      252.0,
      255.0
    ],
    "en": [
      "connection now let's set the clock rate"
    ],
    "ru": [
      "соединение теперь давайте установим тактовую частоту"
    ]
  },
  {
    "time": [
      255.0,
      260.0
    ],
    "en": [
      "to 64 kilobits per second compte"
    ],
    "ru": [
      "до 64 килобит в секунду компте"
    ]
  },
  {
    "time": [
      260.0,
      268.0
    ],
    "en": [
      "interface s20 clock rate 64,000 that's"
    ],
    "ru": [
      "интерфейс s20 тактовая частота 64000 это"
    ]
  },
  {
    "time": [
      268.0,
      272.0
    ],
    "en": [
      "it step 3 asks us what the default CDP"
    ],
    "ru": [
      "на шаге 3 мы спрашиваем, какой CDP по умолчанию"
    ]
  },
  {
    "time": [
      272.0,
      275.0
    ],
    "en": [
      "send and hold timers are and to confirm"
    ],
    "ru": [
      "таймеры отправки и удержания есть и для подтверждения"
    ]
  },
  {
    "time": [
      275.0,
      278.0
    ],
    "en": [
      "it with a show command you may have"
    ],
    "ru": [
      "это с помощью команды show, которую вы можете иметь"
    ]
  },
  {
    "time": [
      278.0,
      280.0
    ],
    "en": [
      "learned these timers in your studies but"
    ],
    "ru": [
      "выучили эти таймеры в своих исследованиях, но"
    ]
  },
  {
    "time": [
      280.0,
      282.0
    ],
    "en": [
      "let's check on a device to make sure"
    ],
    "ru": [
      "давайте проверим устройство, чтобы убедиться"
    ]
  },
  {
    "time": [
      282.0,
      285.0
    ],
    "en": [
      "I'll type end to go back to privileged"
    ],
    "ru": [
      "Я наберу конец, чтобы вернуться к привилегированным"
    ]
  },
  {
    "time": [
      285.0,
      288.0
    ],
    "en": [
      "exec mode here on r1 now let's use the"
    ],
    "ru": [
      "режим exec здесь, на r1, теперь давайте воспользуемся"
    ]
  },
  {
    "time": [
      288.0,
      293.0
    ],
    "en": [
      "command show CDP interface this gives us"
    ],
    "ru": [
      "команда show CDP interface это дает нам"
    ]
  },
  {
    "time": [
      293.0,
      295.0
    ],
    "en": [
      "information about all interfaces their"
    ],
    "ru": [
      "информация обо всех интерфейсах их"
    ]
  },
  {
    "time": [
      295.0,
      298.0
    ],
    "en": [
      "status whether CDP is activated on them"
    ],
    "ru": [
      "статус, активирован ли на них CDP"
    ]
  },
  {
    "time": [
      298.0,
      302.0
    ],
    "en": [
      "or not and their send and hold times all"
    ],
    "ru": [
      "или нет, и их время отправки и удержания все"
    ]
  },
  {
    "time": [
      302.0,
      304.0
    ],
    "en": [
      "of these interfaces have the default"
    ],
    "ru": [
      "из этих интерфейсов по умолчанию"
    ]
  },
  {
    "time": [
      304.0,
      306.0
    ],
    "en": [
      "setting and as you can see that is a"
    ],
    "ru": [
      "настройки, и, как видите, это"
    ]
  },
  {
    "time": [
      306.0,
      309.0
    ],
    "en": [
      "sent time of 60 seconds and the whole"
    ],
    "ru": [
      "отправлено время 60 секунд и все"
    ]
  },
  {
    "time": [
      309.0,
      313.0
    ],
    "en": [
      "time of 180 seconds so CDP"
    ],
    "ru": [
      "время 180 секунд, поэтому CDP"
    ]
  },
  {
    "time": [
      313.0,
      315.0
    ],
    "en": [
      "advertisements will be sent out of each"
    ],
    "ru": [
      "рекламные объявления будут отправляться из каждого"
    ]
  },
  {
    "time": [
      315.0,
      317.0
    ],
    "en": [
      "interface that is up once every 60"
    ],
    "ru": [
      "интерфейс, который запускается каждые 60"
    ]
  },
  {
    "time": [
      317.0,
      321.0
    ],
    "en": [
      "seconds also if r1 doesn't receive an"
    ],
    "ru": [
      "секунд также, если r1 не получает"
    ]
  },
  {
    "time": [
      321.0,
      323.0
    ],
    "en": [
      "advertisement on a particular interface"
    ],
    "ru": [
      "реклама на определенном интерфейсе"
    ]
  },
  {
    "time": [
      323.0,
      326.0
    ],
    "en": [
      "within 180 seconds it will assume that"
    ],
    "ru": [
      "в течение 180 секунд он предположит, что"
    ]
  },
  {
    "time": [
      326.0,
      328.0
    ],
    "en": [
      "whatever neighbor that was there no"
    ],
    "ru": [
      "какого бы соседа там не было"
    ]
  },
  {
    "time": [
      328.0,
      333.0
    ],
    "en": [
      "longer is that's all for step 3"
    ],
    "ru": [
      "длиннее это все для шага 3"
    ]
  },
  {
    "time": [
      333.0,
      337.0
    ],
    "en": [
      "step four says to disable CDP globally"
    ],
    "ru": [
      "четвертый шаг говорит о глобальном отключении CDP"
    ]
  },
  {
    "time": [
      337.0,
      340.0
    ],
    "en": [
      "on r1 and attempt to view CDP neighbors"
    ],
    "ru": [
      "на r1 и попытаться просмотреть соседей CDP"
    ]
  },
  {
    "time": [
      340.0,
      342.0
    ],
    "en": [
      "so let's go into global configuration"
    ],
    "ru": [
      "так что давайте перейдем к глобальной конфигурации"
    ]
  },
  {
    "time": [
      342.0,
      347.0
    ],
    "en": [
      "mode conf the command to enable CDP is"
    ],
    "ru": [
      "mode conf команда для включения CDP:"
    ]
  },
  {
    "time": [
      347.0,
      350.0
    ],
    "en": [
      "CDP run although it's enabled by default"
    ],
    "ru": [
      "CDP работает, хотя по умолчанию включен"
    ]
  },
  {
    "time": [
      350.0,
      353.0
    ],
    "en": [
      "we want to disable it and that is done"
    ],
    "ru": [
      "мы хотим отключить его, и это сделано"
    ]
  },
  {
    "time": [
      353.0,
      358.0
    ],
    "en": [
      "with no CDP run now let's check CDP"
    ],
    "ru": [
      "без запуска CDP теперь давайте проверим CDP"
    ]
  },
  {
    "time": [
      358.0,
      362.0
    ],
    "en": [
      "neighbors do show CDP neighbor we get a"
    ],
    "ru": [
      "соседи показывают соседу CDP, мы получаем"
    ]
  },
  {
    "time": [
      362.0,
      364.0
    ],
    "en": [
      "message indicating that CDP is not"
    ],
    "ru": [
      "сообщение, указывающее, что CDP не"
    ]
  },
  {
    "time": [
      364.0,
      367.0
    ],
    "en": [
      "enabled our one won't send any"
    ],
    "ru": [
      "включен наш не будет отправлять"
    ]
  },
  {
    "time": [
      367.0,
      370.0
    ],
    "en": [
      "advertisements and will ignore any it"
    ],
    "ru": [
      "рекламные объявления и проигнорируем их"
    ]
  },
  {
    "time": [
      370.0,
      374.0
    ],
    "en": [
      "receives step 5 is to enable CDP"
    ],
    "ru": [
      "получает шаг 5, чтобы включить CDP"
    ]
  },
  {
    "time": [
      374.0,
      377.0
    ],
    "en": [
      "globally again on r1 and immediately"
    ],
    "ru": [
      "глобально снова на r1 и сразу"
    ]
  },
  {
    "time": [
      377.0,
      384.0
    ],
    "en": [
      "view the CDP neighbours CDP run do show"
    ],
    "ru": [
      "просмотреть соседей CDP CDP запустить показать"
    ]
  },
  {
    "time": [
      384.0,
      388.0
    ],
    "en": [
      "CDP neighbors we re enabled CDP but no"
    ],
    "ru": [
      "Соседи CDP, мы включили CDP, но нет"
    ]
  },
  {
    "time": [
      388.0,
      392.0
    ],
    "en": [
      "neighbors appear why is that well"
    ],
    "ru": [
      "появляются соседи, почему это хорошо"
    ]
  },
  {
    "time": [
      392.0,
      395.0
    ],
    "en": [
      "because the CDP sent time is 60 seconds"
    ],
    "ru": [
      "потому что время отправки CDP составляет 60 секунд"
    ]
  },
  {
    "time": [
      395.0,
      398.0
    ],
    "en": [
      "by default it can take a bit for our"
    ],
    "ru": [
      "по умолчанию это может занять немного времени для наших"
    ]
  },
  {
    "time": [
      398.0,
      401.0
    ],
    "en": [
      "neighbors to appear again if we were to"
    ],
    "ru": [
      "соседи появятся снова, если мы"
    ]
  },
  {
    "time": [
      401.0,
      402.0
    ],
    "en": [
      "wait a minute and enter the command"
    ],
    "ru": [
      "подождите минуту и ​​введите команду"
    ]
  },
  {
    "time": [
      402.0,
      407.0
    ],
    "en": [
      "again they would appear"
    ],
    "ru": [
      "снова они появятся"
    ]
  },
  {
    "time": [
      407.0,
      410.0
    ],
    "en": [
      "step six is to disable CDP on the switch"
    ],
    "ru": [
      "Шаг шестой - отключить CDP на коммутаторе"
    ]
  },
  {
    "time": [
      410.0,
      415.0
    ],
    "en": [
      "interfaces connected to pcs because CDP"
    ],
    "ru": [
      "интерфейсы, подключенные к ПК, потому что CDP"
    ]
  },
  {
    "time": [
      415.0,
      418.0
    ],
    "en": [
      "sends information about the device for"
    ],
    "ru": [
      "отправляет информацию об устройстве для"
    ]
  },
  {
    "time": [
      418.0,
      420.0
    ],
    "en": [
      "security purposes it is a good idea to"
    ],
    "ru": [
      "в целях безопасности рекомендуется"
    ]
  },
  {
    "time": [
      420.0,
      423.0
    ],
    "en": [
      "disable it where it isn't needed 2 pcs"
    ],
    "ru": [
      "отключить там, где он не нужен 2 шт."
    ]
  },
  {
    "time": [
      423.0,
      426.0
    ],
    "en": [
      "are connected to each switch so let's go"
    ],
    "ru": [
      "подключены к каждому переключателю, так что поехали"
    ]
  },
  {
    "time": [
      426.0,
      434.0
    ],
    "en": [
      "on switch one first compte now we don't"
    ],
    "ru": [
      "на переключении один первый комп, теперь мы не"
    ]
  },
  {
    "time": [
      434.0,
      437.0
    ],
    "en": [
      "want to disable CDP globally so we won't"
    ],
    "ru": [
      "хотите отключить CDP глобально, чтобы мы не"
    ]
  },
  {
    "time": [
      437.0,
      441.0
    ],
    "en": [
      "use no CDP run we want to only disable"
    ],
    "ru": [
      "не использовать CDP, мы хотим только отключить"
    ]
  },
  {
    "time": [
      441.0,
      445.0
    ],
    "en": [
      "it on Fast Ethernet 0 3 and 0 4 we have"
    ],
    "ru": [
      "это на Fast Ethernet 0 3 и 0 4 мы имеем"
    ]
  },
  {
    "time": [
      445.0,
      447.0
    ],
    "en": [
      "to use interface configuration mode for"
    ],
    "ru": [
      "использовать режим настройки интерфейса для"
    ]
  },
  {
    "time": [
      447.0,
      450.0
    ],
    "en": [
      "this since we'll be using the same"
    ],
    "ru": [
      "это, поскольку мы будем использовать тот же"
    ]
  },
  {
    "time": [
      450.0,
      452.0
    ],
    "en": [
      "command on each interface let's"
    ],
    "ru": [
      "команда на каждом интерфейсе давайте"
    ]
  },
  {
    "time": [
      452.0,
      455.0
    ],
    "en": [
      "configure both at the same time you can"
    ],
    "ru": [
      "настроить оба одновременно, вы можете"
    ]
  },
  {
    "time": [
      455.0,
      457.0
    ],
    "en": [
      "do this by configuring an interface"
    ],
    "ru": [
      "сделайте это, настроив интерфейс"
    ]
  },
  {
    "time": [
      457.0,
      460.0
    ],
    "en": [
      "range you can enter interface range"
    ],
    "ru": [
      "диапазон вы можете ввести диапазон интерфейса"
    ]
  },
  {
    "time": [
      460.0,
      462.0
    ],
    "en": [
      "configuration mode for Fast Ethernet 0 3"
    ],
    "ru": [
      "режим конфигурации для Fast Ethernet 0 3"
    ]
  },
  {
    "time": [
      462.0,
      466.0
    ],
    "en": [
      "and 0 4 with this command interface"
    ],
    "ru": [
      "и 0 4 с этим командным интерфейсом"
    ]
  },
  {
    "time": [
      466.0,
      473.0
    ],
    "en": [
      "range f03 space - space for as you can"
    ],
    "ru": [
      "диапазон f03 пробел - место как можно"
    ]
  },
  {
    "time": [
      473.0,
      475.0
    ],
    "en": [
      "see we are now in interface range"
    ],
    "ru": [
      "Видите, мы сейчас находимся в диапазоне интерфейса"
    ]
  },
  {
    "time": [
      475.0,
      477.0
    ],
    "en": [
      "configuration mode this is very"
    ],
    "ru": [
      "режим конфигурации это очень"
    ]
  },
  {
    "time": [
      477.0,
      479.0
    ],
    "en": [
      "convenient when you are doing the same"
    ],
    "ru": [
      "удобно, когда ты делаешь то же самое"
    ]
  },
  {
    "time": [
      479.0,
      480.0
    ],
    "en": [
      "configurations on multiple interfaces"
    ],
    "ru": [
      "конфигурации на нескольких интерфейсах"
    ]
  },
  {
    "time": [
      480.0,
      486.0
    ],
    "en": [
      "now CDP and naval is used to enable CDP"
    ],
    "ru": [
      "теперь CDP и naval используются для включения CDP"
    ]
  },
  {
    "time": [
      486.0,
      488.0
    ],
    "en": [
      "on an interface but it is enabled by"
    ],
    "ru": [
      "на интерфейсе, но он включен"
    ]
  },
  {
    "time": [
      488.0,
      492.0
    ],
    "en": [
      "default to disable you once again use no"
    ],
    "ru": [
      "по умолчанию отключить вы еще раз использовать нет"
    ]
  },
  {
    "time": [
      492.0,
      497.0
    ],
    "en": [
      "in front of the command no CDP enable ok"
    ],
    "ru": [
      "перед командой no CDP enable ok"
    ]
  },
  {
    "time": [
      497.0,
      500.0
    ],
    "en": [
      "that's it now let's go to switch to and"
    ],
    "ru": [
      "вот и все, теперь давайте переключимся на и"
    ]
  },
  {
    "time": [
      500.0,
      506.0
    ],
    "en": [
      "do the same thing comte interface range"
    ],
    "ru": [
      "сделать то же самое comte interface range"
    ]
  },
  {
    "time": [
      506.0,
      514.0
    ],
    "en": [
      "of 0 3 to 4 no CDP enable that's all for"
    ],
    "ru": [
      "от 0 3 до 4 нет включения CDP, это все для"
    ]
  },
  {
    "time": [
      514.0,
      517.0
    ],
    "en": [
      "this lab"
    ],
    "ru": [
      "эта лаборатория"
    ]
  },
  {
    "time": [
      517.0,
      520.0
    ],
    "en": [
      "thank you for watching I hope this lab"
    ],
    "ru": [
      "спасибо за просмотр, надеюсь, эта лаборатория"
    ]
  },
  {
    "time": [
      520.0,
      521.0
    ],
    "en": [
      "and video have been helpful for you"
    ],
    "ru": [
      "и видео были для вас полезны"
    ]
  },
  {
    "time": [
      521.0,
      524.0
    ],
    "en": [
      "please subscribe for future labs like"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, такие как"
    ]
  },
  {
    "time": [
      524.0,
      527.0
    ],
    "en": [
      "this which will be released weekly if"
    ],
    "ru": [
      "это будет выпускаться еженедельно, если"
    ]
  },
  {
    "time": [
      527.0,
      529.0
    ],
    "en": [
      "you have requests for any specific labs"
    ],
    "ru": [
      "у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      529.0,
      531.0
    ],
    "en": [
      "let me know in the comment section if"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев, если"
    ]
  },
  {
    "time": [
      531.0,
      534.0
    ],
    "en": [
      "you want to support my channel I accept"
    ],
    "ru": [
      "вы хотите поддержать мой канал я принимаю"
    ]
  },
  {
    "time": [
      534.0,
      537.0
    ],
    "en": [
      "Bitcoin and etherion donations via the"
    ],
    "ru": [
      "Пожертвования биткойнов и эфирионов через"
    ]
  },
  {
    "time": [
      537.0,
      540.0
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
      540.0,
      543.0
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
      543.0,
      546.0
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
      546.0,
      546.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]