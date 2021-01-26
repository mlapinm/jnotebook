## Notifications - Android Programming
## Simple Firebase Notification in 3 Minutes - Android Studio Tutorial
[Simple Firebase Notification in 3 Minutes - Android Studio Tutorial](https://www.youtube.com/watch?v=JVokoelQ1RI&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=1)  
  
## Notifications Tutorial Part 1 - NOTIFICATION CHANNELS - Android Studio Tutorial
[Notifications Tutorial Part 1 - NOTIFICATION CHANNELS - Android Studio Tutorial](https://www.youtube.com/watch?v=tTbd1Mfi-Sk&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=2)  
1 [AndroidManifest.xml](#AndroidManifestxml)   
2 [app.java](#appjava)   
3 [MainActivity.java](#MainActivityjava)   
4 [activity_main.xml](#activity_mainxml)   
5 [ic_channel_1_24.xml](#ic_channel_1_24xml)   
6 [ic_channel_2_24.xml](#ic_channel_2_24xml)   
## AndroidManifest.xml
```
    <application
        android:name=".App"
```
## app.java
```
package com.example.freon.b607202noti;

import android.app.Application;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;

import androidx.core.app.NotificationManagerCompat;

public class App extends Application {
    public static final String CHANNEL_1_ID = "channel1";
    public static final String CHANNEL_2_ID = "channel2";

    @Override
    public void onCreate() {
        super.onCreate();

        createChannels();
    }

    private void createChannels() {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
            NotificationChannel channel1 = new
                    NotificationChannel(
                            CHANNEL_1_ID,
                    "Channel 1",
                    NotificationManagerCompat.IMPORTANCE_HIGH
            );
            channel1.setDescription("This is Channel 1");

            NotificationChannel channel2 = new
                    NotificationChannel(
                    CHANNEL_2_ID,
                    "Channel 2",
                    NotificationManagerCompat.IMPORTANCE_LOW
            );
            channel2.setDescription("This is Channel 2");

            NotificationManager manager =
                    getSystemService(NotificationManager.class);
            manager.createNotificationChannel(channel1);
            manager.createNotificationChannel(channel2);
        }

    }
}

```
## MainActivity.java
```
package com.example.freon.b607202noti;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import android.app.Notification;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import static com.example.freon.b607202noti.App.CHANNEL_1_ID;
import static com.example.freon.b607202noti.App.CHANNEL_2_ID;

public class MainActivity extends AppCompatActivity {

    private NotificationManagerCompat notificationManager;
    private EditText editTextTitle;
    private EditText editTextMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        notificationManager = NotificationManagerCompat.from(this);

        editTextTitle = findViewById(R.id.editTextTitle);
        editTextMessage = findViewById(R.id.editTextMessage);
    }

    public void onClickButton1(View view) {
        String title = editTextTitle.getText().toString();
        String message = editTextMessage.getText().toString();

        Notification notification = new
                NotificationCompat.Builder(this, CHANNEL_1_ID)
                .setSmallIcon(R.drawable.ic_channel_1_24)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(Notification.PRIORITY_HIGH)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .build();

        notificationManager.notify(1, notification);
    }

    public void onClickButton2(View view) {
        String title = editTextTitle.getText().toString();
        String message = editTextMessage.getText().toString();

        Notification notification = new
                NotificationCompat.Builder(this, CHANNEL_2_ID)
                .setSmallIcon(R.drawable.ic_channel_2_24)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(Notification.PRIORITY_HIGH)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .build();

        notificationManager.notify(2, notification);
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

    <EditText
        android:id="@+id/editTextTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="Title1"
        android:textSize="24sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <EditText
        android:id="@+id/editTextMessage"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="Message"
        android:textSize="24sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.496"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/editTextTitle" />

    <Button
        android:id="@+id/button1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onClickButton1"
        android:text="Channel 1"
        app:layout_constraintBottom_toTopOf="@+id/button2"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onClickButton2"
        android:text="Channel 2"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="@+id/editTextTitle" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
## ic_channel_1_24.xml
```

```
## ic_channel_2_24.xml
```

```  
## Notifications Tutorial Part 2 - ACTION BUTTONS & COLOR - Android Studio Tutorial
[Notifications Tutorial Part 2 - ACTION BUTTONS & COLOR - Android Studio Tutorial](https://www.youtube.com/watch?v=CZ575BuLBo4&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=3)  
  
## Notifications Tutorial Part 3 - BIG TEXT STYLE + INBOX STYLE - Android Studio Tutorial
[Notifications Tutorial Part 3 - BIG TEXT STYLE + INBOX STYLE - Android Studio Tutorial](https://www.youtube.com/watch?v=lVzhzi2e_Zw&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=4)  
  
1 [AndroidManifest.xml](#AndroidManifestxml)   
2 [app.java](#appjava)   
3 [MainActivity.java](#MainActivityjava)   
4 [activity_main.xml](#activity_mainxml)   
5 [NotificationReceiver.java](#NotificationReceiverjava)   
6 [ic_channel_1_24.xml](#ic_channel_1_24xml)   
7 [ic_channel_2_24.xml](#ic_channel_2_24xml)   
## AndroidManifest.xml
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.freon.b607203noti">

    <application
        android:name=".App"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.B607203noti">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <receiver android:name=".NotificationReceiver" />
    </application>

</manifest>
```
## app.java
```
package com.example.freon.b607203noti;

import android.app.Application;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;

import androidx.core.app.NotificationManagerCompat;

public class App extends Application {
    public static final String CHANNEL_1_ID = "channel1";
    public static final String CHANNEL_2_ID = "channel2";

    @Override
    public void onCreate() {
        super.onCreate();

        createChannels();
    }

    private void createChannels() {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
            NotificationChannel channel1 = new
                    NotificationChannel(
                            CHANNEL_1_ID,
                    "Channel 1",
                    NotificationManagerCompat.IMPORTANCE_HIGH
            );
            channel1.setDescription("This is Channel 1");

            NotificationChannel channel2 = new
                    NotificationChannel(
                    CHANNEL_2_ID,
                    "Channel 2",
                    NotificationManagerCompat.IMPORTANCE_LOW
            );
            channel2.setDescription("This is Channel 2");

            NotificationManager manager =
                    getSystemService(NotificationManager.class);
            manager.createNotificationChannel(channel1);
            manager.createNotificationChannel(channel2);
        }

    }
}

```
## MainActivity.java
```
package com.example.freon.b607203noti;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import static com.example.freon.b607203noti.App.CHANNEL_1_ID;
import static com.example.freon.b607203noti.App.CHANNEL_2_ID;

public class MainActivity extends AppCompatActivity {

    private NotificationManagerCompat notificationManager;
    private EditText editTextTitle;
    private EditText editTextMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        notificationManager = NotificationManagerCompat.from(this);

        editTextTitle = findViewById(R.id.editTextTitle);
        editTextMessage = findViewById(R.id.editTextMessage);
    }

    public void onClickButton1(View view) {
        String title = editTextTitle.getText().toString();
        String message = editTextMessage.getText().toString();

        Intent activityIntent = new Intent(this, MainActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(this,0, activityIntent,0);

        Intent broadcastIntent = new Intent(this, NotificationReceiver.class);
        broadcastIntent.putExtra("toastMessage", message);
        PendingIntent actionIntent = PendingIntent.getBroadcast(this,
                0, broadcastIntent, PendingIntent.FLAG_UPDATE_CURRENT);

        Notification notification = new
                NotificationCompat.Builder(this, CHANNEL_1_ID)
                .setSmallIcon(R.drawable.ic_channel_1_24)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(Notification.PRIORITY_HIGH)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .setColor(Color.BLUE)
                .setContentIntent(contentIntent)
                .setAutoCancel(true)
                .setOnlyAlertOnce(true)
                .addAction(R.drawable.ic_channel_1_24, "Toast", actionIntent)
                .build();

        notificationManager.notify(1, notification);
    }

    public void onClickButton2(View view) {
        String title = editTextTitle.getText().toString();
        String message = editTextMessage.getText().toString();

        Notification notification = new
                NotificationCompat.Builder(this, CHANNEL_2_ID)
                .setSmallIcon(R.drawable.ic_channel_2_24)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(Notification.PRIORITY_HIGH)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .build();

        notificationManager.notify(2, notification);
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

    <EditText
        android:id="@+id/editTextTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="Title1"
        android:textSize="24sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <EditText
        android:id="@+id/editTextMessage"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="Message"
        android:textSize="24sp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintHorizontal_bias="0.496"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/editTextTitle" />

    <Button
        android:id="@+id/button1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onClickButton1"
        android:text="Channel 1"
        app:layout_constraintBottom_toTopOf="@+id/button2"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onClickButton2"
        android:text="Channel 2"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="@+id/editTextTitle" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
## NotificationReceiver.java
```
package com.example.freon.b607203noti;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class NotificationReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        String message = intent.getStringExtra("toastMessage");
        Toast.makeText(context, message, Toast.LENGTH_LONG).show();
    }
}

```
## ic_channel_1_24.xml
```

```
## ic_channel_2_24.xml
```

```
  
## Notifications Tutorial Part 4 - BIG PICTURE STYLE + MEDIA STYLE - Android Studio Tutorial
[Notifications Tutorial Part 4 - BIG PICTURE STYLE + MEDIA STYLE - Android Studio Tutorial](https://www.youtube.com/watch?v=s0Q2QKZ4OP8&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=5)  
  
## Notifications Tutorial Part 5 - MESSAGING STYLE + DIRECT REPLY - Android Studio Tutorial
[Notifications Tutorial Part 5 - MESSAGING STYLE + DIRECT REPLY - Android Studio Tutorial](https://www.youtube.com/watch?v=DsFYPTnCbs8&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=6)  
  
## Notifications Tutorial Part 6 - PROGRESS BAR NOTIFICATION - Android Studio Tutorial
[Notifications Tutorial Part 6 - PROGRESS BAR NOTIFICATION - Android Studio Tutorial](https://www.youtube.com/watch?v=IHNC7OtOEI4&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=7)  
  
## Notifications Tutorial Part 7 - NOTIFICATION GROUPS - Android Studio Tutorial
[Notifications Tutorial Part 7 - NOTIFICATION GROUPS - Android Studio Tutorial](https://www.youtube.com/watch?v=ZC4x4eEBU9U&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=8)  
  
## Notifications Tutorial Part 8 - NOTIFICATION CHANNEL GROUPS - Android Studio Tutorial
[Notifications Tutorial Part 8 - NOTIFICATION CHANNEL GROUPS - Android Studio Tutorial](https://www.youtube.com/watch?v=KspZ0N0NK40&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=9)  
  
## Notifications Tutorial Part 9 - NOTIFICATION CHANNEL SETTINGS - Android Studio Tutorial
[Notifications Tutorial Part 9 - NOTIFICATION CHANNEL SETTINGS - Android Studio Tutorial](https://www.youtube.com/watch?v=kfaZTF95Pt4&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=10)  
  
## Notifications Tutorial Part 10 - DELETE NOTIFICATION CHANNELS - Android Studio Tutorial
[Notifications Tutorial Part 10 - DELETE NOTIFICATION CHANNELS - Android Studio Tutorial](https://www.youtube.com/watch?v=3Je9ZEAAjfA&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=11)  
  
## How to Create a Custom Notification on Android
[How to Create a Custom Notification on Android](https://www.youtube.com/watch?v=axcdnRAcqLw&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=12)  
  
## AlarmManager - Android Studio Tutorial
[AlarmManager - Android Studio Tutorial](https://www.youtube.com/watch?v=yrpimdBRk5Q&list=PLrnPJCHvNZuDR7-cBjRXssxYK0Y5EEKzr&index=13)  
  