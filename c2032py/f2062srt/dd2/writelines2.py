

def toCon():
	print('aa')


def toCon1():
	print('aa')
	

def read(name):
	lines = []
	readLines(name, lines)
	text = '\n'.join(lines)
	return text

def readLines(name, items):
	with open(name, 'r', encoding='utf8') as file:
		for line in file:
			line2 = line.strip()
			len(line2) == 0 or items.append(line2)
	


def write(name, text):
	with open(name, 'w', encoding='utf8') as file:
		file.write(text)

def writeLines(name, items):
	text = '\n'.join(items)
	with open(name, 'w', encoding='utf8') as file:
		file.write(text)




