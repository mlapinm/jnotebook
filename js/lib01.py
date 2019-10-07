import codecs

string1jqh = '''\
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<base target="_blank">
'''

string3jqh = '''	
	<link rel="stylesheet" href="css/style.css" type="text/css" />  
	<script src="lib/jquery.js" type="text/javascript"></script>
<script>

</script>
</head>
<body>
<script>
		sss111 = ''
		function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss111 += s1+' '+s2+' '+s3+' '+s4+' '+s5}
</script>

'''
string5jqh = '''\
    <div id="d_78">____</div>
    <script>
		var el = document.getElementById('d_78')
		el.innerHTML = sss111
	</script>

</body>
</html>
'''

def writeJQH(name, string2, string1 = ''):
    global string1jqh, string3jqh, string5jqh
    with codecs.open(name, 'w', 'utf-8') as file:
        file.write(string1jqh + string1 + string3jqh + string2 + string5jqh)

string0jq = '''\
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<base target="_blank">
	<style>
		.myList{
			color:green;
		}
	</style>
	<link rel="stylesheet" href="css/style.css" type="text/css" />  
	<script src="lib/jquery.js" type="text/javascript"></script>
<script>

</script>
</head>
<body>
<script>
		sss111 = ''
		function print1(s1, s2='',s3='',s4 ='', s5='<br>'){sss111 += s1+' '+s2+' '+s3+' '+s4+' '+s5}
</script>

'''
string2jq = '''\
    <div id="d_78">____</div>
    <script>
		var el = document.getElementById('d_78')
		el.innerHTML = sss111
	</script>

</body>
</html>
'''

def writeJQ(name, string1):
    global string0jq, string2jq
    with codecs.open(name, 'w', 'utf-8') as file:
        file.write(string0jq + string1 + string2jq)

# writeJQ("1.txt", "33333")


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
	