# Импорт библиотек

import bs4 as bs

import sys

import urllib.request

from PyQt5.QtWebEngineWidgets import QWebEnginePage

from PyQt5.QtWidgets import QApplication

from PyQt5.QtCore import QUrl

import pytube # библиотека для скачивания видео на YouTube



class Page(QWebEnginePage):

    def __init__(self, url):

        self.app = QApplication(sys.argv)

        QWebEnginePage.__init__(self)

        self.html = ''

        self.loadFinished.connect(self._on_load_finished)

        self.load(QUrl(url))

        self.app.exec_()

  

    def _on_load_finished(self):

        self.html = self.toHtml(self.Callable)

        print('Load finished')

  

    def Callable(self, html_str):

        self.html = html_str

        self.app.quit()

  

  

links = []

  

  

def exact_link(link):

    vid_id = link.split('=')

    # print (vid_id)

    str = ""

    for i in vid_id[0:2]:

        str += i + "="

  

    str_new = str[0:len(str) - 1]

    index = str_new.find("&")

  

    new_link = "https://www.youtube.com" + str_new[0:index]

    return new_link

  

  

url = "https://www.youtube.com/watch?v=lcJzw0JGfeE&list=PLqM7alHXFySENpNgw27MzGxLzNJuC_Kdj"



# Соскоб и извлечение видео
# ссылки из заданного URL плейлиста

page = Page(url)

count = 0

  

soup = bs.BeautifulSoup(page.html, 'html.parser')
# print(soup)

with open("1.html","w",encoding="utf8") as fh:
	fh.write(str(soup))

for link in soup.find_all('a', id='thumbnail'):

    print(44, link)  

    # не использует первую ссылку, потому что это

    # ссылка на плейлист, а не ссылка на видео

    if count == 0: 

        count += 1

        continue

    else:
        print(333, link)
        vid_src = link['href']

        # print (vid_src)

        # сохраняя формат ссылки, чтобы быть

        # передается pytube в других случаях

        new_link = exact_link(vid_src) 

          

        # ошибка может возникнуть из-за этого

        print (new_link)

          

        # добавление ссылки в массив ссылок

        links.append(new_link) 

  
# печать (ссылки)

  
# загрузка каждого видео с
# ссылка в массиве ссылок

print(333, len(links))
yt = pytube.YouTube(url)
print(444)
for link in links: 

    yt = pytube.YouTube(link)

      

    # Загруженное видео будет видео лучшего качества

    stream = yt.streams.filter(progressive=True,

                file_extension='mp4').order_by('resolution').desc().first() 

    try:

        stream.download()

        # печать загруженных ссылок

        print("Downloaded: ", link) 

    except:

        print('Some error in downloading: ', link)


print(333)