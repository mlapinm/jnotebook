## FirebaseUI Firestore RecyclerView
## FirebaseUI Firestore RecyclerView
[1 - PREPARATIONS - Android Studio Tutorial](#1---PREPARATIONS---Android-Studio-Tutorial)  
[2 - LAYOUTS & MODEL CLASS - Android Studio Tutorial](#2---LAYOUTS-&-MODEL-CLASS---Android-Studio-Tutorial)  
[3 - FIRESTORE RECYCLER ADAPTER - Android Studio Tutorial](#3---FIRESTORE-RECYCLER-ADAPTER---Android-Studio-Tutorial)  
[4 - NEW NOTE ACTIVITY - Android Studio Tutorial](#4---NEW-NOTE-ACTIVITY---Android-Studio-Tutorial)  
[5 - SWIPE TO DELETE - Android Studio Tutorial](#5---SWIPE-TO-DELETE---Android-Studio-Tutorial)  
[6 - ON CLICK INTERFACE - Android Studio Tutorial](#6---ON-CLICK-INTERFACE---Android-Studio-Tutorial)  
## 1 - PREPARATIONS - Android Studio Tutorial  
[1 - PREPARATIONS - Android Studio Tutorial](https://www.youtube.com/watch?v=ub6mNHWGVHw&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=1)  
### 1
https://github.com/firebase/FirebaseUI-Android/blob/master/README.md  
    implementation 'com.firebaseui:firebase-ui-firestore:7.1.1'
### 2
res drawable new vector assert   
clip art:  
select item: close x color #ffffff  
select item: add + color #ffffff  
name: ic_add  
select item: save  color #ffffff  
name: ic_save  
### 3
res new resourse directory  
resource type: menu  
### 4
menu new menu resource file  
new_note_menu  
```
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
<item
    android:id="@+id/save_note"
    android:icon="@drawable/ic_save"
    android:title="Save"
    app:showAsAction="ifRoom" />
</menu>
```
## 2 - LAYOUTS & MODEL CLASS - Android Studio Tutorial  
[2 - LAYOUTS & MODEL CLASS - Android Studio Tutorial](https://www.youtube.com/watch?v=RFFu3dP5JDk&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=2)  
### 1
androidx.constraintlayout.widget.ConstraintLayout   
androidx.coordinatorlayout.widget.CoordinatorLayout  
### 2
RecyclerView  
recycle_view
### 3
FloatingActionButton  
button_add_note  
### 4
layout new layout resource file  
note_item  
androidx.cardview.widget.CardView  
### 5
TextView  text_view_priority
### 6
TextView  text_view_title  
### 7
TextView  text_view_description  
### 8
java pacage new java class  Note  

## 3 - FIRESTORE RECYCLER ADAPTER - Android Studio Tutorial  
[3 - FIRESTORE RECYCLER ADAPTER - Android Studio Tutorial](https://www.youtube.com/watch?v=lAGI6jGS4vs&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=3)  
java package new java class  NoteAdapter  
### 1
NoteAdapter extends FirestoreRecyclerAdapter  

## 4 - NEW NOTE ACTIVITY - Android Studio Tutorial  
[4 - NEW NOTE ACTIVITY - Android Studio Tutorial](https://www.youtube.com/watch?v=1YMK2SatG8o&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=4)  
package new activity 
NewNoteActivity activity_new_note   
LinearLayout  
EditText edit_text_title  
EditText edit_text_description  
NumberPicker number_picker_priority  


## 5 - SWIPE TO DELETE - Android Studio Tutorial  
[5 - SWIPE TO DELETE - Android Studio Tutorial](https://www.youtube.com/watch?v=dTuhMFP-a1g&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=5)  
  
## 6 - ON CLICK INTERFACE - Android Studio Tutorial  
[6 - ON CLICK INTERFACE - Android Studio Tutorial](https://www.youtube.com/watch?v=3WR4QAiVuCw&list=PLrnPJCHvNZuAXdWxOzsN5rgG2M4uJ8bH1&index=6)  
  
## footer
https://console.firebase.google.com/project/b3022fb/firestore/data~2FNotebook  
