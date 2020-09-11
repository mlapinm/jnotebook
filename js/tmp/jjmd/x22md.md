## dir to md

## 1 dir


```python
import os
import re

def mMd(s):
    '''
    a*class.md => True
    '''
    match = re.search(r'README.md$', s)
    if match:
        return False

    match = re.search(r'^\w*.ipynb$', s)
    return True if match else False


def mListDir(cwd = '.'):
    lres = []
    lres = list(filter(mMd, os.listdir(cwd)))
    
    return lres
    
l = mListDir()
print(len(l))
```

    7
    

## 2 copy md to dirmd


```python
import shutil

def mCopy(lipynb):
    
    limd = [v.replace('.ipynb', '.md') for v in lipynb]
    cwd = os.getcwd()
    cwd = re.sub(r'^.+\\', '', cwd)
    lcwdp = os.listdir('..')
    smd = f'{cwd}md'
    if lcwdp.count(smd) == 0:
        os.mkdir(f'..\\{smd}')
    print(smd, cwd, lcwdp)
    
    for v in limd:
        shutil.copy2(v, f'..\\{smd}')
        pass
    
    for v in limd:
        os.remove(v)
#     print(limd)
    
    return len(lipynb)
    pass

# count = mCopy(lipynb)
# print(count)
```

## 3 list ipynb to md


```python
import subprocess

def mMakeMd(lmd):
    l2 = []
    for v1 in lmd:
        s1 = f'jupyter nbconvert --to markdown {v1}'
        l2.append(s1)
#         print(v1)
        pass

    for v2 in l2:
        subprocess.check_output(v2, shell=True, text=True)
    return l2    

lipynb = mListDir(cwd = '.')
l2 = mMakeMd(lmd)
count = mCopy(lipynb)
print(count)

```

    jjmd jj ['1', 'jj', 'jjmd']
    7
    


```python
import subprocess

a = subprocess.check_output('jupyter nbconvert --to markdown x07dict.ipynb', shell=True, text=True)
print(a)

```

    
    
