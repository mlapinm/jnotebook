import re
import os
import shutil


def d02():
    files0 = os.listdir()
    name = '1.mp3'
    for f in files0:
        match = re.search(r'\.mp3$', f)
        if match:
            name = f
            print(1)
    shutil.copy(name, 'd02.mp3')
    pass

d02()

