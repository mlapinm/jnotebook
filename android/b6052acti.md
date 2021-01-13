## Activites - Android Programming
## How to Make a Button Open a New Activity - Android Studio Tutorial
[How to Make a Button Open a New Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=bgIUdb-7Rqo&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk)   
  
[b605201acti](b6054code.md)  
Intent startActivity    
## How to Open a New Activity and Pass Variables to It - Android Studio Tutorial
[How to Open a New Activity and Pass Variables to It - Android Studio Tutorial](https://www.youtube.com/watch?v=eL69kj-_Wvs&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=2)  
  
[b605202pass](b6054code.md)  
```
Intent intent = new Intent(this, SecondActivity.class);
intent.putExtra("count", count);

startActivity(intent);


Intent intent = getIntent();
int count = 0;
count = intent.getIntExtra("count", 0);

<activity android:name=".SecondActivity"
	android:parentActivityName=".MainActivity"></activity>


```
## Send Data Back from Child Activity with startActivityForResult - Android Studio Tutorial
[Send Data Back from Child Activity with startActivityForResult - Android Studio Tutorial](https://www.youtube.com/watch?v=AD5qt7xoUU8&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=3)  
  
[b605203back](b6054code.md)  
startActivityForResult onActivityResult    
finish()  
  
## Send Custom Object to Activity Using Parcelable - Android Studio Tutorial
[Send Custom Object to Activity Using Parcelable - Android Studio Tutorial](https://www.youtube.com/watch?v=WBbsvqSu0is&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=4)  
  
[b605204rec6](b6054code.md)  
implements Parcelable
Select Methods to Implement  
discribeContents():int
writeToParcel(parcel:Parcel, i:int):void  
  
Add parcelable implementation    

getParcelableExtra 
```
## The Activity Lifecycle Explained - Android Studio Tutorial
[The Activity Lifecycle Explained - Android Studio Tutorial](https://www.youtube.com/watch?v=UJN3AL4tiqw&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=5)  
  
[b6052acti](b6054code.md)  
## Slide Animation Between Activites - Android Studio Tutorial
[Slide Animation Between Activites - Android Studio Tutorial](https://www.youtube.com/watch?v=0s6x3Sn4eYo&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=6)  
  
[b6052acti](b6054code.md)  
## Intent Animation Library - Android Studio Tutorial
[Intent Animation Library - Android Studio Tutorial](https://www.youtube.com/watch?v=C8MrscyUXz8&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=7)  
  
[b6052acti](b6054code.md)  
## Swipe Close Activity with Slidr Library - Android Studio Tutorial
[Swipe Close Activity with Slidr Library - Android Studio Tutorial](https://www.youtube.com/watch?v=Ci5146VOyg4&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=8)  
  
[b6052acti](b6054code.md)  
## How to Change the Apps Starting (Default) Activity - Android Studio Tutorial
[How to Change the Apps Starting (Default) Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=6eES56mxfMs&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=9)  
  
[b6052acti](b6054code.md)  