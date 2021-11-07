import json
import re
import os

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
			items.append(line2)
	


def write(name, text):
	with open(name, 'w', encoding='utf8') as file:
		file.write(text)

def writeLines(name, items):
	text = '\n'.join(items)
	with open(name, 'w', encoding='utf8') as file:
		file.write(text)

def mTextObjs(text, lines):
    lines0 = json.loads(text)
    for e in lines0:
        lines.append(e)


def mObjText(objl):
	k = 0
	text = json.dumps([ob for ob in objl], indent=2, ensure_ascii=False)
	return text

def mPairs(lines, pairs):
	max = len(lines)
	note = ['', '']
	lines.reverse()
	for i in range(max):
		e = lines[i]
		match = re.search(r'^\d+$', e)
		if not match:
			note[1] = e
		else:
			note[0] = e
			pairs.append(note)
			note = ['', '']
		pass
	pairs.reverse()
	lines.reverse()
	pass





