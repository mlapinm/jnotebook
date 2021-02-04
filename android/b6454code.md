## Threading - Android Programming
## How to Start a Background Thread in Android
[How to Start a Background Thread in Android](https://www.youtube.com/watch?v=QfQE1ayCzf8&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa)  
B645012thre  
```
package com.example.freon.b645012thre;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {
    public static final String TAG = "MainActivity";
    private Handler handler = new Handler();
    private volatile boolean isStopThread = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onStartThread(View view) {
        isStopThread = false;

        LittleThread thread = new LittleThread(10);
        thread.start();

    }

    public void onStopThread(View view) {
    }

    class LittleThread extends Thread{

        private int seconds;

        public LittleThread(int seconds) {
            this.seconds = seconds;
        }

        @Override
        public void run() {

            for(int i=0;i<seconds;i++){
                Log.d(TAG, "startThread: " + i);

                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }

        }
    }
}
```  
B645014thre  
```
package com.example.freon.b645014thre;

import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private TextView textView1;
    private TextView textView2;
    private TextView textView3;
    public static final String TAG = "MainActivity";
    private Handler handler = new Handler();
    private volatile boolean isStopThread = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView1 = findViewById(R.id.text_view1);
        textView2 = findViewById(R.id.text_view2);
        textView3 = findViewById(R.id.text_view3);
    }

    public void onStartThread(View view) {
        isStopThread = false;
        LittleRunnable littleRunnable = new LittleRunnable(10);
        new Thread(littleRunnable).start();
    }

    public void onStopThread(View view) {
        isStopThread = true;
        Toast.makeText(this, "stop", Toast.LENGTH_SHORT).show();
    }

    class LittleRunnable implements Runnable {
        public int seconds;

        public LittleRunnable(int seconds) {
            this.seconds = seconds;
        }


        @Override
        public void run() {
            for(int i = 0; i < seconds; i++){
                if(isStopThread){
                    return;
                }
                Log.d(TAG, "startThread: " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
//                2
                int finalI = i;
                handler.post(new Runnable() {
                    @Override
                    public void run() {
                        textView1.setText("step: " + finalI);
                    }
                });
//                3
                int k = i;
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        textView2.setText("next: " + k);
                    }
                });
//                4
                textView3.post(new Runnable() {
                    @Override
                    public void run() {
                        textView3.setText("last: " + k);
                    }
                });
            }
        }
    }

}
```  
## Looper, MessageQueue & Handler Explained - Android Studio Tutorial
[Looper, MessageQueue & Handler Explained - Android Studio Tutorial](https://www.youtube.com/watch?v=TN-CGfzvBhc&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa&index=2)  
  
```

```  
  
## HandlerThread - Android Studio Tutorial
[HandlerThread - Android Studio Tutorial](https://www.youtube.com/watch?v=n0mkYSjldeA&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa&index=3)  
  
  
```

```  
## AsyncTask + WeakReference - Android Studio Tutorial
[AsyncTask + WeakReference - Android Studio Tutorial](https://www.youtube.com/watch?v=uKx0FuVriqA&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa&index=4)  
  
  
```

```  
## IntentService on Android Oreo
[IntentService on Android Oreo](https://www.youtube.com/watch?v=Oenqq3ZCo9Q&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa&index=5)  
  
  
```

```  
## JobIntentService - Android Studio Tutorial
[JobIntentService - Android Studio Tutorial](https://www.youtube.com/watch?v=B4gFbWnNpac&list=PLrnPJCHvNZuD52mtV8NvazNYIyIVPVZRa&index=6)  
  
```

```  
  