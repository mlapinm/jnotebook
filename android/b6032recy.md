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
  
[b603202rec](b6034code.md)  
## RecyclerView + CardView - Part 3 - INSERT & REMOVE ITEMS - Android Studio Tutorial
[RecyclerView + CardView - Part 3 - INSERT & REMOVE ITEMS - Android Studio Tutorial](https://www.youtube.com/watch?v=kaf2dCd8Zfs&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=3)  
editTextInsert buttonInsert editTextRemove buttonRemove  
Integer.parseInt  
RecyclerView.Adapter notifyItemInserted notifyItemRemoved  

[b603203rec](b6034code.md)  
## RecyclerView + CardView - Part 4 - ON-ITEM-CLICK INTERFACE - Android Studio Tutorial
[RecyclerView + CardView - Part 4 - ON-ITEM-CLICK INTERFACE - Android Studio Tutorial](https://www.youtube.com/watch?v=bhhs4bwYyhc&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=4)  
  
[b603204rec](b6034code.md)  
OnClickListener onClickItem(position)  
## создание ListenerLittle в AdapterLittle
- public interface ListenerLittle
- void onClick(position)
- listenerLittle
- метод setOnClickListener
## подключнение listenerLittle в AdapterLittle
- конструктор ViewHolderLittle принимает itemView и listenerLittle
- на itemView устанавливается(View.setOnClickListener) OnClickListener c метедом onClick
- в onClick проверяется, что listenerLittle не null
- то вызывается listenerLittle.onItemClick  
## MainActivity
- mAdapterLittle.setOnClickListener(new ListenerLittle)
- `реализация` ListenerLittle.onClick(position) 
 - Toast 
 - itemLittles change element mAdapter.notifyItemChanged(position)
 - intent new Activity

## RecyclerView + CardView - Part 5 - CLICKING SPECIFIC ITEMS - Android Studio Tutorial
[RecyclerView + CardView - Part 5 - CLICKING SPECIFIC ITEMS - Android Studio Tutorial](https://www.youtube.com/watch?v=HMjI7cLsyfw&list=PLrnPJCHvNZuBtTYUuc5Pyo4V7xZ2HNtf4&index=5)  
  
[b603205rec](b6034code.md)  
copy of b603204rec