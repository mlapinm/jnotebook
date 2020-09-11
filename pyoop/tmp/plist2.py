# импорт модуля

from pytube import YouTube

  
# где сохранить

SAVE_PATH = "d:" #сделать

  
# ссылка на загружаемое видео

link="https://www.youtube.com/watch?v=xWOoBJUqlbI"

  

try:

    # создание объекта с помощью YouTube, который был импортирован в начале

    yt = YouTube(link)
    stream = yt.streams.first()
    stream.download()

except:

    print("Connection Error") # обработать исключение

  
# отфильтровывает все файлы с расширением "mp4"

mp4files = yt.filter('mp4')

  

yt.set_filename('GeeksforGeeks Video') # установить имя файла

  
# получить видео с расширением и разрешением, переданным в функции get ()

d_video = yt.get(mp4files[-1].extension,mp4files[-1].resolution)

try:

    # загрузка видео

    d_video.download(SAVE_PATH)

except:

    print("Some Error!")

print('Task Completed!')