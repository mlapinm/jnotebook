```python
# Code
import re

class Code(object):
    change = [["<", "&lt;"], [">", "&gt;"]]
    
    def __init__(self):
        self.listIn = []
        for i in self.change:
            self.listIn.append(i[0])
        self.listOut = []
        for i in self.change:
            self.listOut.append(i[1])
        self.pattern = "".join(self.listIn)    
        pass
    def foo(self):
        print(self.listIn, self.listOut, self.change)
    def test(self, s):
        regExp = re.compile(f'[{self.pattern}]')
        kis = False if regExp.search(s) == None else True
        print(regExp.search(s))
        return kis
    
    def replace(self, s):
        s=s.strip()
        sOut = ''
        for i in s:
            index = 0
            bchange = False
            for j in self.listIn:
                if i == j:
                    sOut += self.listOut[index]
                    bchange = True
                    break
                index += 1
            if not bchange:
                sOut += i
#         sOut = f"<code>{sOut}<code>"        
        return sOut
        
code = Code()
# code.test('dd>ddd')
s = '''
<h2 style="color: blue;">CatPhotoApp</h2>
'''
print(code.replace(s))
```

    &lt;h2 style="color: blue;"&gt;CatPhotoApp&lt;/h2&gt;
    


```python
s = '''
CSS Variables can simplify the way you use media queries.

For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.




'''
l = s.split('\n')
l2 = []
for i in l:
    if i.find("Passed") == -1 \
    and i.strip() != "":
        l2.append(i)
l3 = []
index = 1
code = Code()
for i in l2: 
   shead = code.replace(i)
   slink = shead.replace(" ", "-")
   sli = f"      <p>{shead}</p>"
   l3.append(sli)
   index += 1
s2 = "\n".join(l3)
print(s2)
```

          <p>CSS Variables can simplify the way you use media queries.</p>
          <p>For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.</p>
    


```python
s = '''

'''
l = s.split('\n')
l2 = []
for i in l:
    if i.find("Passed") == -1 \
    and i.strip() != "":
        l2.append(i)
l3 = []
index = 1
for i in l2: 
   shead = i
   slink = shead.replace(" ", "-")
   sli = f"<li><a class=\"nav-link\" href=\"#{slink}\">{shead}</a></li>"
   l3.append(sli)
   index += 1
s2 = "\n".join(l3)
print(s2)
```

    
    


```python
import re
# s = '''
# '''
l = s.split('\n')
l2 = []
for i in l:
    if i.find("Passed") == -1 \
    and i.strip() != "":
        l2.append(i)
l3 = []
index = 1
for i in l2: 
#    i = re.sub(r'User.*: ', "", i) 
   shead = i
   slink = shead.replace(" ", "-")
   l3.append(f"  <section class=\"main-section\" id=\"{slink}\">") 
   l3.append(f"    <header>{shead}</header>")
   l3.append(f"    <article>")
   l3.append(f"      <p>")
   l3.append(f"      </p>")
   l3.append(f"      <p>")
   l3.append(f"      </p>")
   l3.append(f"    </article>")
   l3.append(f"  </section>")
   index += 1
s2 = "\n".join(l3)
print(s2)
```

    
    


```python

```
