first_value = '  FIRST challenge         '

print(f"{first_value.strip().capitalize():^35}")
#       First Challenge        

second_value = '-  second challenge  -'

print(second_value.replace('-', ' ').strip().capitalize())
# Second challenge

print(first_value.strip().lower().replace("first", "second").capitalize().rjust(30))
#               Second challenge

fourth_value = 'fourth'
fifth_value = 'fifth'
sixth_value = 'sixth'
print(fourth_value, fifth_value, sixth_value, sep = '#')
# fourth#fifth#sixth
print()

print("    ", fourth_value)
print("    ", fifth_value)
print("    ", sixth_value)
#      fourth
#      fifth
#      sixth




