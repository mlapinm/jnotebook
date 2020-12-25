[timer](#timer)  



## timer d2022timer
com\example\freon\d2022timer\MainActivity.java  
D:\programs\b02andr\d2022timer\app\src\main\java\com\example\freon\d2022timer\MainActivity.java  
```
        timer1 = new Timer();
        timer1.schedule(new TimerTask() {

            @Override
            public void run() {
                k += 1;
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        textView1.setText("" + k);
                    }
                });
            }
        },500, 1000);
```
```
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView1 = (TextView)findViewById(R.id.textView1);
        Context context = this;

        IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);

        timer1 = new Timer();
        timer1.schedule(new TimerTask() {

            @Override
            public void run() {
                k += 1;
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        String s1 = "";
                        textView1.setText(s1 + " " + k);
                    }
                });
            }
        },500, 1000);
    }
}
```
