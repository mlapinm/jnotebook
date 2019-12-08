# coding: utf-8
# вспомогательные функции для формирования тестов
import re
import codecs

# записать текст в файл
def write_text( fil_name, text ):
    fh = codecs.open( fil_name, 'w','utf-8' )
    fh.write(text)
    fh.close( )

# прочитать текст из файла    
def read_text(fil_name ):
    fh = codecs.open( fil_name ,'r','cp1251')
    text = fh.read( )
    fh.close( )
    return text

# удалить непарный тэг     
def cut_tag( tag, text ):
    st = "<" + tag + "[^>]*?>"
    rex = re.compile( st )
    return re.sub( rex, "", text)

# очистить параметры тэгв
def clear_tagparams( tag, text ):
    st = "<" + tag + "[^>]*?>"
    rex = re.compile( st )
    return re.sub( rex, "<" + tag + ">" , text)

# удалить тэг и его завершение
def cut_tagpair( tag, text ):
    st = "<" + tag + "[^>]*?>"
    rex = re.compile( st )
    text = re.sub( rex, "", text)
    rex = re.compile( r"<\/"+tag+">" )
    return re.sub( rex, "", text)

# удалить полностью тэг с содержимым до завершающего включительно
def cut_fulltag( tag, text ):
    st = "<" + tag + r"[\s\S]*?<\/" + tag + ">"
    rex = re.compile( st )
    return re.sub( rex, "", text)

# извлечь содержимое тега
def get_tagcontent(tag, text):
    st = "<"+tag+"[^>]*?>([\s\S]*?)<\/"+tag+">"
    rex = re.compile(st)
    res = re.search( rex, text)
    return res.group(1)
            
# очистить группы неразрывных пробелов
def clear_nbsp( text ):
    rex = re.compile( "(&nbsp;)+" )
    return re.sub( rex, " ", text)

# очистить группы пустых строк
def clear_eol( text ):
    rex = re.compile( "[\n\r]+" )
    return re.sub( rex, "\n", text)
