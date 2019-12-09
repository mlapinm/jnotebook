# -*- coding: utf8 -*-
# dbsn.py
def getcod(file):
    cod_table = ['utf8','cp1251','cp866',]
    
    file_coding = ''
    fh= open(file)
    text = fh.read(8192)
    fh.close()
    
    for enc in cod_table:
        try:
            text_dec = text.decode(enc)
        except(UnicodeDecodeError, LookupError):
            pass
        else:
            file_coding = enc
            break
    return file_coding

def cod(st, dec_enc):
    # == перекодировать строку
    # -- dec_enc задает режим перекодировки
    # -- dec = "u","w","c","p" - декодировать
    # -- enc = "u","w","c","p" - кодировать
    # -- пример: st = cod(st,"up")
    dec = dec_enc[0]; enc = dec_enc[1]
    
    if dec == "u":
        st = st.decode("utf-8")
    if dec == "w":
        st = st.decode("cp1251")
    if dec == "c":
        st = st.decode("cp866")

    if enc == "u":
        st = st.encode("utf-8")
    if enc == "w":
        st = st.encode("cp1251")
    if enc == "c":
        st = st.encode("cp866")
    return st