import codecs

string0 = '''\
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<base target="_blank">
</head>
<body>
'''
string2 = '''\
</body>
</html>
'''

def writeHTML(name, string1):
    global string0, string2
    with codecs.open(name, 'w', 'utf-8') as file:
        file.write(string0 + string1 + string2)


def writeFile(name, string1):
    with codecs.open(name, 'w', 'utf-8') as file:
        file.write(string1)

def readFile(name):
    string1 = ''
    with codecs.open(name, 'r', 'utf-8') as file:
        string1 = file.read()
    return string1
	