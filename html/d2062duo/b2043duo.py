from google_trans_new import google_translator  

translator = google_translator()  
text = 'this is a pen'
translate_text = translator.translate(text)  
print(translate_text)
