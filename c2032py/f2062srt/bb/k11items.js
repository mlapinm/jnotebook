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
      "this lab we will review the creation of"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим создание"
    ]
  },
  {
    "time": [
      11.0,
      13.0
    ],
    "en": [
      "a local user database on the router and"
    ],
    "ru": [
      "локальная база данных пользователей на маршрутизаторе и"
    ]
  },
  {
    "time": [
      13.0,
      17.0
    ],
    "en": [
      "introduced the banner function this will"
    ],
    "ru": [
      "представил функцию баннера, это будет"
    ]
  },
  {
    "time": [
      17.0,
      18.0
    ],
    "en": [
      "be a fairly short lab but try to"
    ],
    "ru": [
      "быть довольно короткой лабораторией, но постарайтесь"
    ]
  },
  {
    "time": [
      18.0,
      20.0
    ],
    "en": [
      "complete it on your own first and then"
    ],
    "ru": [
      "завершите это сначала самостоятельно, а затем"
    ]
  },
  {
    "time": [
      20.0,
      22.0
    ],
    "en": [
      "continue watching this video if you have"
    ],
    "ru": [
      "продолжайте смотреть это видео, если у вас есть"
    ]
  },
  {
    "time": [
      22.0,
      24.0
    ],
    "en": [
      "trouble or watch it after to check your"
    ],
    "ru": [
      "проблемы или посмотрите это позже, чтобы проверить свой"
    ]
  },
  {
    "time": [
      24.0,
      30.0
    ],
    "en": [
      "solution step one is to use PC one to"
    ],
    "ru": [
      "Первый шаг решения - использовать ПК один для"
    ]
  },
  {
    "time": [
      30.0,
      33.0
    ],
    "en": [
      "connect to r1 via the console port"
    ],
    "ru": [
      "подключиться к r1 через консольный порт"
    ]
  },
  {
    "time": [
      33.0,
      35.0
    ],
    "en": [
      "they're already connected by a cable so"
    ],
    "ru": [
      "они уже подключены кабелем, поэтому"
    ]
  },
  {
    "time": [
      35.0,
      40.0
    ],
    "en": [
      "let's click on PC one desktop terminal"
    ],
    "ru": [
      "давайте нажмем на ПК один настольный терминал"
    ]
  },
  {
    "time": [
      40.0,
      44.0
    ],
    "en": [
      "and press ok to accept the default"
    ],
    "ru": [
      "и нажмите ОК, чтобы принять значение по умолчанию"
    ]
  },
  {
    "time": [
      44.0,
      48.0
    ],
    "en": [
      "configurations step two is to create two"
    ],
    "ru": [
      "второй шаг конфигурации - создание двух"
    ]
  },
  {
    "time": [
      48.0,
      51.0
    ],
    "en": [
      "users on our one last time we created"
    ],
    "ru": [
      "пользователей в последний раз, когда мы создали"
    ]
  },
  {
    "time": [
      51.0,
      54.0
    ],
    "en": [
      "user accounts with passwords this time"
    ],
    "ru": [
      "учетные записи пользователей с паролями на этот раз"
    ]
  },
  {
    "time": [
      54.0,
      56.0
    ],
    "en": [
      "we will use secrets same as with the"
    ],
    "ru": [
      "мы будем использовать секреты так же, как и с"
    ]
  },
  {
    "time": [
      56.0,
      59.0
    ],
    "en": [
      "enable password and an able secret"
    ],
    "ru": [
      "включить пароль и способный секрет"
    ]
  },
  {
    "time": [
      59.0,
      62.0
    ],
    "en": [
      "passwords are not encrypted but secrets"
    ],
    "ru": [
      "пароли не зашифрованы, но секреты"
    ]
  },
  {
    "time": [
      62.0,
      67.0
    ],
    "en": [
      "are encrypted by default an able conf t"
    ],
    "ru": [
      "по умолчанию зашифрованы"
    ]
  },
  {
    "time": [
      67.0,
      72.0
    ],
    "en": [
      "username CCNA secret Cisco with a"
    ],
    "ru": [
      "имя пользователя CCNA секрет Cisco с"
    ]
  },
  {
    "time": [
      72.0,
      75.0
    ],
    "en": [
      "capital C remember that user name isn't"
    ],
    "ru": [
      "заглавная C помните, что имя пользователя не"
    ]
  },
  {
    "time": [
      75.0,
      77.0
    ],
    "en": [
      "case sensitive but the password or"
    ],
    "ru": [
      "чувствителен к регистру, но пароль или"
    ]
  },
  {
    "time": [
      77.0,
      83.0
    ],
    "en": [
      "secret is next user username CCNP secret"
    ],
    "ru": [
      "секрет - это имя пользователя следующего пользователя Секрет CCNP"
    ]
  },
  {
    "time": [
      83.0,
      88.0
    ],
    "en": [
      "Cisco I'll quickly type do show run to"
    ],
    "ru": [
      "Cisco, я быстро напечатаю, покажи, беги к"
    ]
  },
  {
    "time": [
      88.0,
      93.0
    ],
    "en": [
      "check that their encrypted as you can"
    ],
    "ru": [
      "убедитесь, что они зашифрованы, как вы можете"
    ]
  },
  {
    "time": [
      93.0,
      97.0
    ],
    "en": [
      "see they are encrypted by default step 3"
    ],
    "ru": [
      "увидеть, что они зашифрованы по умолчанию, шаг 3"
    ]
  },
  {
    "time": [
      97.0,
      99.0
    ],
    "en": [
      "is to set the console port to use the"
    ],
    "ru": [
      "- настроить консольный порт для использования"
    ]
  },
  {
    "time": [
      99.0,
      102.0
    ],
    "en": [
      "local database to authenticate users"
    ],
    "ru": [
      "локальная база данных для аутентификации пользователей"
    ]
  },
  {
    "time": [
      102.0,
      112.0
    ],
    "en": [
      "line console 0 login local that's it"
    ],
    "ru": [
      "строка консоли 0 логин локальный вот и все"
    ]
  },
  {
    "time": [
      112.0,
      115.0
    ],
    "en": [
      "step four is to set a message of the day"
    ],
    "ru": [
      "Шаг четвертый - установить сообщение дня"
    ]
  },
  {
    "time": [
      115.0,
      118.0
    ],
    "en": [
      "banner of welcome to packet racer and a"
    ],
    "ru": [
      "баннер с приветствием к пакетному гонщику и"
    ]
  },
  {
    "time": [
      118.0,
      121.0
    ],
    "en": [
      "login banner of authorized users only"
    ],
    "ru": [
      "баннер входа только авторизованных пользователей"
    ]
  },
  {
    "time": [
      121.0,
      124.0
    ],
    "en": [
      "banners are messages that display before"
    ],
    "ru": [
      "баннеры - это сообщения, которые отображаются перед"
    ]
  },
  {
    "time": [
      124.0,
      127.0
    ],
    "en": [
      "or after users log in in this case the"
    ],
    "ru": [
      "или после входа в систему в этом случае"
    ]
  },
  {
    "time": [
      127.0,
      129.0
    ],
    "en": [
      "message of the day banner will be"
    ],
    "ru": [
      "сообщение дня баннер будет"
    ]
  },
  {
    "time": [
      129.0,
      130.0
    ],
    "en": [
      "displayed above the login banner and"
    ],
    "ru": [
      "отображается над баннером входа и"
    ]
  },
  {
    "time": [
      130.0,
      133.0
    ],
    "en": [
      "both will be displayed before our user"
    ],
    "ru": [
      "оба будут отображаться перед нашим пользователем"
    ]
  },
  {
    "time": [
      133.0,
      138.0
    ],
    "en": [
      "logs in so exit to make the banner of"
    ],
    "ru": [
      "входит в систему, поэтому выйдите, чтобы сделать баннер"
    ]
  },
  {
    "time": [
      138.0,
      142.0
    ],
    "en": [
      "the day we use this command banner motd"
    ],
    "ru": [
      "день, когда мы используем эту команду, баннер motd"
    ]
  },
  {
    "time": [
      142.0,
      145.0
    ],
    "en": [
      "then I'll use the question mark to show"
    ],
    "ru": [
      "тогда я использую вопросительный знак, чтобы показать"
    ]
  },
  {
    "time": [
      145.0,
      150.0
    ],
    "en": [
      "the next option as you can see we need"
    ],
    "ru": [
      "следующий вариант, как видите, нам нужен"
    ]
  },
  {
    "time": [
      150.0,
      152.0
    ],
    "en": [
      "to enter a delimited character to"
    ],
    "ru": [
      "ввести символ с разделителями в"
    ]
  },
  {
    "time": [
      152.0,
      153.0
    ],
    "en": [
      "indicate the start and end of the"
    ],
    "ru": [
      "указать начало и конец"
    ]
  },
  {
    "time": [
      153.0,
      157.0
    ],
    "en": [
      "message if you type the message directly"
    ],
    "ru": [
      "сообщение, если вы вводите сообщение напрямую"
    ]
  },
  {
    "time": [
      157.0,
      159.0
    ],
    "en": [
      "it will think that the first character"
    ],
    "ru": [
      "он будет думать, что первый персонаж"
    ]
  },
  {
    "time": [
      159.0,
      162.0
    ],
    "en": [
      "is the delimiting character and it will"
    ],
    "ru": [
      "является ограничивающим символом, и он будет"
    ]
  },
  {
    "time": [
      162.0,
      165.0
    ],
    "en": [
      "be excluded from the message itself you"
    ],
    "ru": [
      "быть исключенным из самого сообщения вы"
    ]
  },
  {
    "time": [
      165.0,
      166.0
    ],
    "en": [
      "can use whatever you want but I'll use"
    ],
    "ru": [
      "можете использовать все, что хотите, но я буду использовать"
    ]
  },
  {
    "time": [
      166.0,
      168.0
    ],
    "en": [
      "an asterisk asterisk"
    ],
    "ru": [
      "звездочка звездочка"
    ]
  },
  {
    "time": [
      168.0,
      173.0
    ],
    "en": [
      "welcome to packet tracer asterisk okay"
    ],
    "ru": [
      "добро пожаловать в пакетный трассировщик звездочка хорошо"
    ]
  },
  {
    "time": [
      173.0,
      175.0
    ],
    "en": [
      "now the same process for the log in"
    ],
    "ru": [
      "теперь тот же процесс для входа в систему"
    ]
  },
  {
    "time": [
      175.0,
      182.0
    ],
    "en": [
      "banner banner login asterisk authorized"
    ],
    "ru": [
      "баннер баннер авторизация звездочка авторизация"
    ]
  },
  {
    "time": [
      182.0,
      187.0
    ],
    "en": [
      "users only asterisk now we've set up the"
    ],
    "ru": [
      "только для пользователей звездочка теперь мы настроили"
    ]
  },
  {
    "time": [
      187.0,
      191.0
    ],
    "en": [
      "two banners finally let's log out and"
    ],
    "ru": [
      "два баннера, наконец, давайте выйдем из системы и"
    ]
  },
  {
    "time": [
      191.0,
      197.0
    ],
    "en": [
      "see if our messages work and logout"
    ],
    "ru": [
      "посмотрите, работают ли наши сообщения и выйдите из системы"
    ]
  },
  {
    "time": [
      197.0,
      198.0
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
      198.0,
      200.0
    ],
    "en": [
      "before we log in you can see our message"
    ],
    "ru": [
      "прежде чем мы войдем в систему, вы можете увидеть наше сообщение"
    ]
  },
  {
    "time": [
      200.0,
      206.0
    ],
    "en": [
      "of the day and then our log in banner"
    ],
    "ru": [
      "дня, а затем наш баннер входа в систему"
    ]
  },
  {
    "time": [
      206.0,
      208.0
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
      208.0,
      209.0
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
      209.0,
      212.0
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
      212.0,
      215.0
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
      215.0,
      217.0
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
      217.0,
      219.0
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
      219.0,
      222.0
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
      222.0,
      225.0
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
      225.0,
      228.0
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
      228.0,
      231.0
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
      231.0,
      234.0
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
      234.0,
      234.0
    ],
    "en": [
      "the brave browser"
    ],
    "ru": [
      "смелый браузер"
    ]
  }
]