import os
import re

files = os.listdir()

def checked(x):
    match = re.search(r'^m\d\d\d\d$', x)
    return True if match else False

files = list(filter(checked, files))
name = files[-1]
match = re.search('\d\d$', name)
num = match[0] if match else '00'
num = int(num) + 1
name = f'{name[:-2]}{num:02}'

if len(name) == 5:
    os.mkdir(name)

print(name)
