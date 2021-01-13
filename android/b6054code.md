## Activites - Android Programming
## How to Make a Button Open a New Activity - Android Studio Tutorial
[How to Make a Button Open a New Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=bgIUdb-7Rqo&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk)  
```
package com.example.b605201acti;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSecondActivity();
            }
        });
    }

    private void openSecondActivity() {
        Intent intent = new Intent(this, SecondActivity.class);
        startActivity(intent);
    }
}
```  
## How to Open a New Activity and Pass Variables to It - Android Studio Tutorial
[How to Open a New Activity and Pass Variables to It - Android Studio Tutorial](https://www.youtube.com/watch?v=eL69kj-_Wvs&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=2)  
  
## Send Data Back from Child Activity with startActivityForResult - Android Studio Tutorial
[Send Data Back from Child Activity with startActivityForResult - Android Studio Tutorial](https://www.youtube.com/watch?v=AD5qt7xoUU8&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=3)  
  
## Send Custom Object to Activity Using Parcelable - Android Studio Tutorial
[Send Custom Object to Activity Using Parcelable - Android Studio Tutorial](https://www.youtube.com/watch?v=WBbsvqSu0is&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=4)  
1 [AndroidManifest.xml](#AndroidManifestxml)   
2 [MainActivity.java](#MainActivityjava)   
3 [ItemLittle.java](#ItemLittlejava)   
4 [AdapterLittle.java](#AdapterLittlejava)   
5 [SecondActivity.java](#SecondActivityjava)   
6 [activity_main.xml](#activity_mainxml)   
7 [layout_item.xml](#layout_itemxml)   
8 [activity_second.xml](#activity_secondxml)   
9 [ic_android2.xml](#ic_android2xml)   
10 [ic_audio.xml](#ic_audioxml)   
11 [ic_sun.xml](#ic_sunxml)   
## AndroidManifest.xml
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.freon.b605204rec6">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.B605204rec6">
        <activity android:name=".SecondActivity"></activity>
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```
## MainActivity.java
```
package com.example.freon.b605204rec6;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    public static String EXTRA_ITEM_LITTLE = "EXTRA_ITEM_LITTLE";



    private RecyclerView mRecyclerView;
    private AdapterLittle mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private ArrayList<ItemLittle> itemLittles;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mRecyclerView = findViewById(R.id.recycleView);

        itemLittles = new ArrayList<>();
        itemLittles.add(new ItemLittle(R.drawable.ic_android2, "Line 11", "Line 12"));
        itemLittles.add(new ItemLittle(R.drawable.ic_audio, "Line 21", "Line 22"));
        itemLittles.add(new ItemLittle(R.drawable.ic_sun, "Line 31", "Line 32"));

        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);
        mAdapter = new AdapterLittle(itemLittles);
        mRecyclerView.setAdapter(mAdapter);

        mAdapter.setOnItemClickListener(new AdapterLittle.OnItemClickListener() {
            @Override
            public void onItemClick(int position) {
                startNewActivity(position);
            }
        });
    }
    public void startNewActivity(int position){
        Intent intent = new Intent(this, SecondActivity.class);

        ItemLittle itemLittle = itemLittles.get(position);
        intent.putExtra(EXTRA_ITEM_LITTLE, itemLittle);
        startActivity(intent);
    }
}

```
## ItemLittle.java
```
package com.example.freon.b605204rec6;


import android.os.Parcel;
import android.os.Parcelable;

public class ItemLittle implements Parcelable {
    private int mImageResource;
    private String mText1;
    private String mText2;

    public ItemLittle(int imageResource, String text1, String text2){
        mImageResource = imageResource;
        mText1 = text1;
        mText2 = text2;
    }

    protected ItemLittle(Parcel in) {
        mImageResource = in.readInt();
        mText1 = in.readString();
        mText2 = in.readString();
    }

    public static final Creator<ItemLittle> CREATOR = new Creator<ItemLittle>() {
        @Override
        public ItemLittle createFromParcel(Parcel in) {
            return new ItemLittle(in);
        }

        @Override
        public ItemLittle[] newArray(int size) {
            return new ItemLittle[size];
        }
    };

    public int getmImageResource() {
        return mImageResource;
    }

    public String getmText1() {
        return mText1;
    }

    public String getmText2() {
        return mText2;
    }

    public void setmText1(String mText1) {
        this.mText1 = mText1;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeInt(mImageResource);
        parcel.writeString(mText1);
        parcel.writeString(mText2);
    }
}

```
## AdapterLittle.java
```
package com.example.freon.b605204rec6;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class AdapterLittle extends RecyclerView.Adapter<AdapterLittle.ViewHolderLittle> {

    private ArrayList <ItemLittle> itemLittles;
    public OnItemClickListener onItemClickListener;


    public interface OnItemClickListener {
        void onItemClick(int position);
    }

    public void setOnItemClickListener(OnItemClickListener onItemClickListener){
        this.onItemClickListener = onItemClickListener;
    }

    public static class ViewHolderLittle extends RecyclerView.ViewHolder {
        public ImageView mImageView;
        public TextView mTextview1;
        public TextView mTextview2;

        public ViewHolderLittle(@NonNull View itemView, OnItemClickListener onItemClickListener) {
            super(itemView);
            mImageView = itemView.findViewById(R.id.imageView);
            mTextview1 = itemView.findViewById(R.id.textView);
            mTextview2 = itemView.findViewById(R.id.textView2);
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if(onItemClickListener != null){
                        int position = getAdapterPosition();
                        if(position != RecyclerView.NO_POSITION){
                            onItemClickListener.onItemClick(position);
                        }
                    }
                }
            });
        }
    }

    public AdapterLittle(ArrayList<ItemLittle> itemLittles) {
        this.itemLittles = itemLittles;
    }

    @NonNull
    @Override
    public ViewHolderLittle onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.layout_item, parent, false);
        ViewHolderLittle vhl = new ViewHolderLittle(v, onItemClickListener);
        return vhl;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolderLittle holder, int position) {
        ItemLittle currentItem = itemLittles.get(position);
        holder.mImageView.setImageResource(currentItem.getmImageResource());
//        holder.mImageView.setImageResource(R.drawable.ic_android2);
        holder.mTextview1.setText(currentItem.getmText1());
        holder.mTextview2.setText(currentItem.getmText2());
    }

    @Override
    public int getItemCount() {
        return itemLittles.size();
    }

}

```
## SecondActivity.java
```
package com.example.freon.b605204rec6;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {
    TextView textView1;
    TextView textView2;
    ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        textView1 = findViewById(R.id.textViewSecond1);
        textView2 = findViewById(R.id.textViewSecond2);
        imageView = findViewById(R.id.imageView2);

        Intent intent = getIntent();
        ItemLittle itemLittle = intent.getParcelableExtra(MainActivity.EXTRA_ITEM_LITTLE);
        int icon = itemLittle.getmImageResource();
        String text1 = itemLittle.getmText1();
        String text2 = itemLittle.getmText2();
        imageView.setImageResource(icon);
        textView1.setText(text1);
        textView2.setText(text2);
    }
}
```
## activity_main.xml
```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycleView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="@android:color/darker_gray"
        android:padding="4dp"
        android:scrollbars="vertical" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
## layout_item.xml
```
<?xml version="1.0" encoding="utf-8"?>
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="2dp"
    app:cardCornerRadius="4dp">

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <ImageView
            android:id="@+id/imageView"
            android:layout_width="50dp"
            android:layout_height="50dp"
            android:padding="2dp" />

        <TextView
            android:id="@+id/textView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="0dp"
            android:layout_toEndOf="@+id/imageView"
            android:text="Line 1"
            android:textColor="#000000"
            android:textColorHighlight="@color/black"
            android:textSize="24sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/textView2"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@+id/textView"
            android:layout_marginStart="8dp"
            android:layout_marginTop="0dp"
            android:layout_toEndOf="@+id/imageView"
            android:text="Line 2"
            android:textSize="20sp" />
    </RelativeLayout>
</androidx.cardview.widget.CardView>
```
## activity_second.xml
```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".SecondActivity">

    <ImageView
        android:id="@+id/imageView2"
        android:layout_width="100dp"
        android:layout_height="100dp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:srcCompat="@drawable/ic_launcher_background" />

    <TextView
        android:id="@+id/textViewSecond1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="_"
        android:textSize="30sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/imageView2" />

    <TextView
        android:id="@+id/textViewSecond2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="_"
        android:textSize="30sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.501"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/textViewSecond1" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
## ic_android2.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24"
        android:viewportHeight="24"
        android:tint="?attr/colorControlNormal">
    <path
        android:pathData="M17.6,11.48 L19.44,8.3a0.63,0.63 0,0 0,-1.09 -0.63l-1.88,3.24a11.43,11.43 0,0 0,-8.94 0L5.65,7.67a0.63,0.63 0,0 0,-1.09 0.63L6.4,11.48A10.81,10.81 0,0 0,1 20L23,20A10.81,10.81 0,0 0,17.6 11.48ZM7,17.25A1.25,1.25 0,1 1,8.25 16,1.25 1.25,0 0,1 7,17.25ZM17,17.25A1.25,1.25 0,1 1,18.25 16,1.25 1.25,0 0,1 17,17.25Z"
        android:fillColor="@android:color/white"/>
</vector>
```
## ic_audio.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24"
    android:tint="?attr/colorControlNormal">
  <path
      android:fillColor="@android:color/white"
      android:pathData="M12,3v9.28c-0.47,-0.17 -0.97,-0.28 -1.5,-0.28C8.01,12 6,14.01 6,16.5S8.01,21 10.5,21c2.31,0 4.2,-1.75 4.45,-4H15V6h4V3h-7z"/>
</vector>

```
## ic_sun.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24"
    android:tint="?attr/colorControlNormal">
  <path
      android:fillColor="@android:color/white"
      android:pathData="M6.76,4.84l-1.8,-1.79 -1.41,1.41 1.79,1.79 1.42,-1.41zM4,10.5L1,10.5v2h3v-2zM13,0.55h-2L11,3.5h2L13,0.55zM20.45,4.46l-1.41,-1.41 -1.79,1.79 1.41,1.41 1.79,-1.79zM17.24,18.16l1.79,1.8 1.41,-1.41 -1.8,-1.79 -1.4,1.4zM20,10.5v2h3v-2h-3zM12,5.5c-3.31,0 -6,2.69 -6,6s2.69,6 6,6 6,-2.69 6,-6 -2.69,-6 -6,-6zM11,22.45h2L13,19.5h-2v2.95zM3.55,18.54l1.41,1.41 1.79,-1.8 -1.41,-1.41 -1.79,1.8z"/>
</vector>

 
## The Activity Lifecycle Explained - Android Studio Tutorial
[The Activity Lifecycle Explained - Android Studio Tutorial](https://www.youtube.com/watch?v=UJN3AL4tiqw&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=5)  
  
## Slide Animation Between Activites - Android Studio Tutorial
[Slide Animation Between Activites - Android Studio Tutorial](https://www.youtube.com/watch?v=0s6x3Sn4eYo&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=6)  
  
## Intent Animation Library - Android Studio Tutorial
[Intent Animation Library - Android Studio Tutorial](https://www.youtube.com/watch?v=C8MrscyUXz8&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=7)  
  
## Swipe Close Activity with Slidr Library - Android Studio Tutorial
[Swipe Close Activity with Slidr Library - Android Studio Tutorial](https://www.youtube.com/watch?v=Ci5146VOyg4&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=8)  
  
## How to Change the Apps Starting (Default) Activity - Android Studio Tutorial
[How to Change the Apps Starting (Default) Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=6eES56mxfMs&list=PLrnPJCHvNZuAe5r049EpzxQGZSybBX_tk&index=9)  
  
