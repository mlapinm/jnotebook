s1 = '''
Создание доступных для многократного использования функций с помощью функций в Python


'''
s1 = s1.strip()
items = ["#", "!", ","]
s2 = s1.lower()
for item in items:
    s2 = s2.replace(item, "")
s2 = "#" + s2.replace(" ", "-")
s = f"[{s1}]({s2})  "
print(s)