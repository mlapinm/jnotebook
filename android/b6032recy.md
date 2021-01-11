## RecyclerView + CardView Tutorial - Android
## RecyclerView + CardView - Part 1 - LAYOUTS AND CUSTOM OBJECTS - Android Studio Tutorial
[RecyclerView + CardView - Part 1 - LAYOUTS AND CUSTOM OBJECTS - Android Studio Tutorial](https://www.youtube.com/watch?v=Nw9JF55LDzE&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4)  
  
Names: layout_item ItemLittle AdapterLittle    
relative  
layout\layout_item.xml  
CardView  
RelativeLayout  
ItemLittle
class AdapterLittle    
  
  
[b603201rec](b6034code.md)  
## RecyclerView + CardView - Part 2 - ADAPTER, LAYOUTMANAGER, RECYCLERVIEW - Android Studio
[RecyclerView + CardView - Part 2 - ADAPTER, LAYOUTMANAGER, RECYCLERVIEW - Android Studio](https://www.youtube.com/watch?v=17NbUcEts9c&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=2)  
  

ExampleAdapter  
## 1 MainActivity
- есть itemLittles для отображения
- создается adapter из itemLittles
- leanerLayoutManager от this
- recycleVew устанавливается leanerLayoutManager
- recycleVew устанавливается adapter  
## 2 adapter  
ItemLittle - поле из itemLittles  
itemLittles  
itemView  
- viewHolder - содержит все view из itemView
- в конструкторе принимается экземпляр itemView и обычно инициализируются все поля такие же как в itemView
- в onCreateViewHolder создается c помощью inflate View из itemView и group parent, которая передается в создаваемый viewHolder  
(viewHolder возвращается)
- onBindViewHolder заполняет поля holder из list item в соответствии с position
- getItemCount возвращает size itemLittles  
  
[b6032recy](b6034code.md)  
## RecyclerView + CardView - Part 3 - INSERT & REMOVE ITEMS - Android Studio Tutorial
[RecyclerView + CardView - Part 3 - INSERT & REMOVE ITEMS - Android Studio Tutorial](https://www.youtube.com/watch?v=kaf2dCd8Zfs&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=3)  
  
[b603204rec](b6034code.md)  
## RecyclerView + CardView - Part 4 - ON-ITEM-CLICK INTERFACE - Android Studio Tutorial
[RecyclerView + CardView - Part 4 - ON-ITEM-CLICK INTERFACE - Android Studio Tutorial](https://www.youtube.com/watch?v=bhhs4bwYyhc&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=4)  
  
[b6032recy](b6034code.md)  
## RecyclerView + CardView - Part 5 - CLICKING SPECIFIC ITEMS - Android Studio Tutorial
[RecyclerView + CardView - Part 5 - CLICKING SPECIFIC ITEMS - Android Studio Tutorial](https://www.youtube.com/watch?v=HMjI7cLsyfw&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=5)  
  
[b6032recy](b6034code.md)  