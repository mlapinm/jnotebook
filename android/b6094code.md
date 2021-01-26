## Images, Animations, Transitions - Android Programming
## Easily Create Animations with the AndroidViewAnimation Library - Android Studio Tutorial
[Easily Create Animations with the AndroidViewAnimation Library - Android Studio Tutorial](https://www.youtube.com/watch?v=otMSB-dFuY8&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=1)  
  
## Batch Import Images for Different Screen Resolutions - Android Studio Tutorial
[Batch Import Images for Different Screen Resolutions - Android Studio Tutorial](https://www.youtube.com/watch?v=bbFLDR6X2D8&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=2)  
  
## Image Slider - Android Studio Tutorial
[Image Slider - Android Studio Tutorial](https://www.youtube.com/watch?v=Q2FPDI99-as&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=4)  
### b609032imag
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
3 [ImageAdapter.java](#ImageAdapterjava)   
## MainActivity.java
```
package com.example.b609032imag;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager.widget.PagerAdapter;
import androidx.viewpager.widget.ViewPager;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;
import android.widget.Adapter;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ViewPager viewPager = findViewById(R.id.viewPager);
        ImageAdapter adapter = new ImageAdapter(this);
        viewPager.setAdapter( adapter);

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

    <androidx.viewpager.widget.ViewPager
        android:id="@+id/viewPager"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:layout_editor_absoluteX="177dp"
        tools:layout_editor_absoluteY="270dp" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
## ImageAdapter.java
```
package com.example.b609032imag;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

public class ImageAdapter extends PagerAdapter {
    private Context context;
    private int[] imageIds = new int[]{R.drawable.img_flow,
            R.drawable.img_fur,
            R.drawable.img_pavlin,
            R.drawable.img_ride};

    public ImageAdapter(Context context) {
        this.context = context;
    }

    @Override
    public int getCount() {
        return imageIds.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == object;
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
        ImageView imageView = new ImageView(context);
        imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
        imageView.setImageResource(imageIds[position]);
        container.addView(imageView, 0);
        return imageView;
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((ImageView)object);
    }
}

```  
## How to Load an Image from a Url with Picasso - Android Studio Tutorial
[How to Load an Image from a Url with Picasso - Android Studio Tutorial](https://www.youtube.com/watch?v=Tdb_WSEEZbQ&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=5)  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
## MainActivity.java
```
package com.example.b609204pica;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView imageView = findViewById(R.id.imageView);
        String url = "https://cdn.pixabay.com/photo/2017/11/06/18/39/apple-2924531__480.jpg";
        url = "https://cdn.pixabay.com/photo/2017/11/06/18/39/apple-2924531_1280.jpg";
        Picasso.with(this).load(url).into(imageView);
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

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```  
## Picasso Resizing & Scaling - Android Studio Tutorial
[Picasso Resizing & Scaling - Android Studio Tutorial](https://www.youtube.com/watch?v=0rJM67GFO4Y&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=6)  
b609052scal  
com\example\b609052scal\MainActivity.java  
```
package com.example.b609052scal;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

import com.squareup.picasso.Picasso;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView imageView = findViewById(R.id.imageView);
        String url = "https://cdn.pixabay.com/photo/2017/11/06/18/39/apple-2924531__480.jpg";
        url = "https://cdn.pixabay.com/photo/2017/11/06/18/39/apple-2924531_1280.jpg";
        Picasso.with(this)
                .load(url)
//                .resize(500, 0)
                .fit()
                .centerCrop()
                .into(imageView);
    }
}
```  
## How to Create an Image Slider with Picasso + ViewPager - Android Studio Tutorial
[How to Create an Image Slider with Picasso + ViewPager - Android Studio Tutorial](https://www.youtube.com/watch?v=tM7rwJoK-18&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=7)  
b609062page  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
3 [ViewPagerAdapter.java](#ViewPagerAdapterjava)   
## MainActivity.java
```
package com.example.b609062page;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    private String[] imageUrls = new String[]{
            "https://cdn.pixabay.com/photo/2021/01/05/01/50/elephants-5889403_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/04/04/21/11/hummingbird-5003882_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/12/27/15/51/pheasant-5864490_1280.jpg",
            "https://cdn.pixabay.com/photo/2021/01/04/21/46/nutria-5888958_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/12/30/07/43/squirrel-5872759_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/12/27/05/59/house-mouse-5863083_1280.jpg",
            "https://cdn.pixabay.com/photo/2020/12/10/05/17/flamingos-5819381_1280.jpg",
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ViewPager viewPager = findViewById(R.id.viewPager);

        ViewPagerAdapter adapter = new ViewPagerAdapter(this, imageUrls);
        viewPager.setAdapter(adapter);

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

    <androidx.viewpager.widget.ViewPager
        android:id="@+id/viewPager"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```
## ViewPagerAdapter.java
```
package com.example.b609062page;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

import com.squareup.picasso.Picasso;

public class ViewPagerAdapter extends PagerAdapter {
    private Context context;
    private String[] imageUrls;

    public ViewPagerAdapter(Context context, String[] imageUrls) {
        this.context = context;
        this.imageUrls = imageUrls;
    }

    @Override
    public int getCount() {
        return imageUrls.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == object;
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
        ImageView imageView = new ImageView(context);
        Picasso.get()
                .load(imageUrls[position])
                .fit()
                .centerCrop()
                .into(imageView);
        container.addView(imageView);
        return imageView;
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((View) object);
    }
}

```

  
## How to Create a Custom Button (With XML ShapeDrawables) in Android Studio
[How to Create a Custom Button (With XML ShapeDrawables) in Android Studio](https://www.youtube.com/watch?v=Z1w3y0saKjY&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=8)  
  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
3 [custom_button.xml](#custom_buttonxml)   
4 [button_default.xml](#button_defaultxml)   
5 [button_pressed.xml](#button_pressedxml)   
6 [button_disabled.xml](#button_disabledxml)   
7 [themes.xml](#themesxml)   
## MainActivity.java
```
package com.example.b609072butt;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.RadioGroup;
import android.widget.Switch;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button customButton = findViewById(R.id.custom_button);
        Switch switchEnableButton = findViewById(R.id.switch_enable_button);

        customButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Click", Toast.LENGTH_SHORT).show();
            }
        });

        switchEnableButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked){
                    customButton.setEnabled(true);
                }else {
                    customButton.setEnabled(false);
                }
            }
        });
    }
}
```
## activity_main.xml
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Press me" />

    <Button
        android:id="@+id/custom_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:background="@drawable/custom_button"
        android:text="Press me" />


    <Switch
        android:id="@+id/switch_enable_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:checked="true"
        android:text="Switch"
        android:textSize="24sp" />

</LinearLayout>
```
## custom_button.xml
```
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@drawable/button_pressed"
        android:state_pressed="true" />
    <item android:drawable="@drawable/button_disabled"
        android:state_enabled="false" />
    <item android:drawable="@drawable/button_default" />
</selector>
```
## button_default.xml
```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <gradient
        android:angle="90"
        android:endColor="#6ca752"
        android:startColor="#9dcf87" />

    <padding
        android:bottom="7dp"
        android:left="7dp"
        android:right="7dp"
        android:top="7dp" />

    <stroke
        android:width="2dp"
        android:color="#fff" />

    <corners android:radius="15dp" />
</shape>
```
## button_pressed.xml
```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <gradient
        android:angle="90"
        android:endColor="#86c66a"
        android:startColor="#b0de9d" />

    <padding
        android:bottom="7dp"
        android:left="7dp"
        android:right="7dp"
        android:top="7dp" />

    <stroke
        android:width="2dp"
        android:color="#fff" />

    <corners android:radius="15dp" />
</shape>
```
## button_disabled.xml
```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <solid android:color="#b6b7b5" />

    <padding
        android:bottom="7dp"
        android:left="7dp"
        android:right="7dp"
        android:top="7dp" />

    <stroke
        android:width="2dp"
        android:color="#fff" />

    <corners android:radius="15dp" />
</shape>
```
## themes.xml
```
<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Theme.B609072butt" parent="Theme.AppCompat.Light.DarkActionBar">
        <!-- Primary brand color. -->
        <item name="colorPrimary">@color/purple_500</item>
        <item name="colorPrimaryVariant">@color/purple_700</item>
        <item name="colorOnPrimary">@color/white</item>
        <!-- Secondary brand color. -->
        <item name="colorSecondary">@color/teal_200</item>
        <item name="colorSecondaryVariant">@color/teal_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">?attr/colorPrimaryVariant</item>
        <!-- Customize your theme here. -->
        <item name="buttonStyle">@style/CustomButton</item>
    </style>

    <style name="CustomButton" parent="Widget.AppCompat.Button">
        <item name="background">@drawable/custom_button</item>
        <item name="android:textColor">#00F</item>
    </style>
</resources>
```  
## Collapsing Toolbar with Image - Android Studio Tutorial
[Collapsing Toolbar with Image - Android Studio Tutorial](https://www.youtube.com/watch?v=6UmHGn076To&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=9)  
  
## TextSwitcher with Animation - Android Studio Tutorial
[TextSwitcher with Animation - Android Studio Tutorial](https://www.youtube.com/watch?v=Aybw0wDeaSQ&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=10)  
b609092imag  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
## MainActivity.java
```
package com.example.b609092imag;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.TextSwitcher;
import android.widget.TextView;
import android.widget.ViewSwitcher;

public class MainActivity extends AppCompatActivity {
    private TextSwitcher textSwitcher;
    private Button buttonNext;
    private int stringIndex = 0;
    private String[] strings = {
            "ONE",
            "TWO",
            "THREE",
            "FOUR",
            "FIVE",
            "SIX",
            "SEVEN"
    };
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textSwitcher = findViewById(R.id.textSwitcher1);
        buttonNext = findViewById(R.id.buttonNext);

        buttonNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(stringIndex == strings.length - 1){
                    stringIndex = 0 ;
                    textSwitcher.setText(strings[stringIndex]);
                }else{
                    textSwitcher.setText(strings[++stringIndex]);
                }
            }
        });

        textSwitcher.setFactory(new ViewSwitcher.ViewFactory() {
            @Override
            public View makeView() {
                textView = new TextView(MainActivity.this);
                textView.setTextColor(Color.BLUE);
                textView.setTextSize(50);
                textView.setGravity(Gravity.CENTER_HORIZONTAL);

                return textView;
            }
        });

        textSwitcher.setText(strings[stringIndex]);
    }
}
```
## activity_main.xml
```
package com.example.b609092imag;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.TextSwitcher;
import android.widget.TextView;
import android.widget.ViewSwitcher;

public class MainActivity extends AppCompatActivity {
    private TextSwitcher textSwitcher;
    private Button buttonNext;
    private int stringIndex = 0;
    private String[] strings = {
            "ONE",
            "TWO",
            "THREE",
            "FOUR",
            "FIVE",
            "SIX",
            "SEVEN"
    };
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textSwitcher = findViewById(R.id.textSwitcher1);
        buttonNext = findViewById(R.id.buttonNext);

        buttonNext.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(stringIndex == strings.length - 1){
                    stringIndex = 0 ;
                    textSwitcher.setText(strings[stringIndex]);
                }else{
                    textSwitcher.setText(strings[++stringIndex]);
                }
            }
        });

        textSwitcher.setFactory(new ViewSwitcher.ViewFactory() {
            @Override
            public View makeView() {
                textView = new TextView(MainActivity.this);
                textView.setTextColor(Color.BLUE);
                textView.setTextSize(50);
                textView.setGravity(Gravity.CENTER_HORIZONTAL);

                return textView;
            }
        });

        textSwitcher.setText(strings[stringIndex]);
    }
}
```  
## How to Add a Fading Text Animation with the FadingTextView Library - Android Studio Tutorial
[How to Add a Fading Text Animation with the FadingTextView Library - Android Studio Tutorial](https://www.youtube.com/watch?v=-3N2xeNiq98&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=11)  
b609102fad  
1 [build.gradle](#buildgradle)   
2 [MainActivity.java](#MainActivityjava)   
3 [activity_main.xml](#activity_mainxml)   
4 [arrays.xml](#arraysxml)   
## build.gradle
```
dependencies {
    implementation 'com.tomer:fadingtextview:2.6'
}
```
## MainActivity.java
```
package com.example.b609102fad;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;

import com.tomer.fadingtextview.FadingTextView;

import java.util.concurrent.TimeUnit;

public class MainActivity extends AppCompatActivity {
    private FadingTextView fadingTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        fadingTextView = findViewById(R.id.fading_text_view);


    }

    public void onClickButton(View view) {
        String[] little2 = {
                "And",
                "this",
                "is",
                "little 2",
        };
        fadingTextView.setTexts(little2);
        fadingTextView.setTimeout(300, TimeUnit.MILLISECONDS);

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

    <com.tomer.fadingtextview.FadingTextView
        android:id="@+id/fading_text_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="30sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:texts="@array/little_one"
        app:timeout="1000" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="onClickButton"
        android:text="Little 2"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/fading_text_view" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
## arrays.xml
```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string-array name="little_one">
        <item>This</item>
        <item>is</item>
        <item>little 1</item>
    </string-array>
</resources>
```
  
## Shared Element Transition - Android Studio Tutorial
[Shared Element Transition - Android Studio Tutorial](https://www.youtube.com/watch?v=DkSlk03-opA&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=12)  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
3 [Activity2.java](#Activity2java)   
4 [activity_2.xml](#activity_2xml)   
## MainActivity.java
```
package com.example.b609112trans;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityOptionsCompat;
import androidx.core.view.ViewCompat;

import android.content.Intent;
import android.os.Bundle;
import android.transition.Fade;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setTitle("Activity 1");


        Fade fade = new Fade();
        View decor = getWindow().getDecorView();
        fade.excludeTarget(android.R.id.statusBarBackground, true);
        fade.excludeTarget(android.R.id.navigationBarBackground, true);

        getWindow().setEnterTransition(fade);
        getWindow().setExitTransition(fade);

        ImageView imageView = findViewById(R.id.image_activity_1);
        Button button = findViewById(R.id.button);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, Activity2.class);
                ActivityOptionsCompat options = ActivityOptionsCompat.makeSceneTransitionAnimation(
                        MainActivity.this,
                        imageView,
                        ViewCompat.getTransitionName(imageView)
                );
                startActivity(intent, options.toBundle());
            }
        });

    }
}
```
## activity_main.xml
```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <ImageView
        android:id="@+id/image_activity_1"
        android:layout_width="180dp"
        android:layout_height="100dp"
        android:layout_alignParentBottom="true"
        android:layout_centerHorizontal="true"
        android:layout_marginBottom="100dp"
        android:scaleType="centerCrop"
        android:transitionName="little_transition"
        app:srcCompat="@drawable/img_hours"
        tools:layout_editor_absoluteX="-16dp"
        tools:layout_editor_absoluteY="264dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_centerHorizontal="true"
        android:layout_marginBottom="20dp"
        android:text="Open activity 2" />
</RelativeLayout>
```
## Activity2.java
```
package com.example.b609112trans;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.transition.Fade;
import android.view.View;

public class Activity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_2);

        setTitle("Activity 2");

        ActionBar actionBar = getSupportActionBar();
        actionBar.hide();

        Fade fade = new Fade();
        View decor = getWindow().getDecorView();
        fade.excludeTarget(android.R.id.statusBarBackground, true);
        fade.excludeTarget(android.R.id.navigationBarBackground, true);

        getWindow().setEnterTransition(fade);
        getWindow().setExitTransition(fade);

    }
}
```
## activity_2.xml
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@android:color/darker_gray"
    android:orientation="vertical"
    tools:context=".Activity2">

    <ImageView
        android:id="@+id/image_activity_2"
        android:layout_width="match_parent"
        android:layout_height="290dp"
        android:scaleType="centerCrop"
        android:transitionName="little_transition"
        app:srcCompat="@drawable/img_hours"
        tools:layout_editor_absoluteX="144dp"
        tools:layout_editor_absoluteY="125dp" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos aliquam numquam nobis in molestiae similique temporibus iure laudantium laborum, dolor placeat molestias soluta porro maiores ea saepe doloremque possimus!" />
</LinearLayout>
```  
## How to Create a Custom Button (With Images) in Android Studio
[How to Create a Custom Button (With Images) in Android Studio](https://www.youtube.com/watch?v=Nn4-Vn7qk9k&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=13)  
b609122cust  
    
## Create Resizable 9 Patch Images - Android Studio Tutorial
[Create Resizable 9 Patch Images - Android Studio Tutorial](https://www.youtube.com/watch?v=FZEPg-8tJgo&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=14)  
  
## Drawable Animations - Android Studio Tutorial
[Drawable Animations - Android Studio Tutorial](https://www.youtube.com/watch?v=scZYIAZrMWk&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=15)  

1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
3 [animation.xml](#animationxml)   
4 [ic_wifi_1.xml](#ic_wifi_1xml)   
5 [ic_wifi_2.xml](#ic_wifi_2xml)   
6 [ic_wifi_3.xml](#ic_wifi_3xml)   
7 [ic_wifi_4.xml](#ic_wifi_4xml)   
8 [ic_wifi_5.xml](#ic_wifi_5xml)   
9 [ic_wifi_6.xml](#ic_wifi_6xml)   
## MainActivity.java
```
package com.example.freon.b609142anim2;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {
    AnimationDrawable wifiAnimation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView imageView = (ImageView) findViewById(R.id.imageView);
        imageView.setBackgroundResource(R.drawable.animation);
        wifiAnimation = (AnimationDrawable) imageView.getBackground();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        wifiAnimation.start();
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

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="150dp"
        android:layout_height="150dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
## animation.xml
```
<?xml version="1.0" encoding="utf-8"?>
<animation-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@drawable/ic_wifi_1" android:duration="400" />
    <item android:drawable="@drawable/ic_wifi_2" android:duration="400" />
    <item android:drawable="@drawable/ic_wifi_3" android:duration="400" />
    <item android:drawable="@drawable/ic_wifi_5" android:duration="400" />
    <item android:drawable="@drawable/ic_wifi_6" android:duration="400" />
</animation-list>
```
## ic_wifi_1.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#00000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
## ic_wifi_2.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#00000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
  <path
      android:pathData="m0.63783,5.54678 l1.21635,-1.15121 -0.03341,1.1359z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
## ic_wifi_3.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#00000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
  <path
      android:pathData="m0.85644,5.45184 l2.08407,-1.80906 -0.02383,1.785z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.43415111"
      android:fillColor="#000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
## ic_wifi_4.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#00000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
  <path
      android:pathData="m0.85644,5.45184 l2.93599,-2.66098 -0.00713,2.68703z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.43415111"
      android:fillColor="#000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
## ic_wifi_5.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#00000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
  <path
      android:pathData="m0.85644,5.45184 l3.95496,-3.62983 -0.02383,3.62247z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.43415111"
      android:fillColor="#000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
## ic_wifi_6.xml
```
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="6.35"
    android:viewportHeight="6.3500004">
  <path
      android:pathData="m0.63783,5.54678 l5.25623,-5.02v5.03181z"
      android:strokeLineJoin="miter"
      android:strokeWidth="0.26458332"
      android:fillColor="#000000"
      android:strokeColor="#000000"
      android:strokeLineCap="butt"/>
</vector>

```
  
## Circular Reveal Animation - Android Studio Tutorial
[Circular Reveal Animation - Android Studio Tutorial](https://www.youtube.com/watch?v=o2dUAm_ruSg&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=16)  
1 [MainActivity.java](#MainActivityjava)   
2 [activity_main.xml](#activity_mainxml)   
  
## MainActivity.java
```
package com.example.freon.b609152float;

import androidx.appcompat.app.AppCompatActivity;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.os.Bundle;
import android.view.View;
import android.view.ViewAnimationUtils;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClickButtonShow(View view) {
        revealFab();

    }

    public void onClickButtonHide(View view) {
        hideFab();

    }

    private void revealFab() {
        View view = findViewById(R.id.floatingActionButton);

        int cx = view.getWidth() / 2;
        int cy = view.getHeight() / 2;

        float finalRadius = (float) Math.hypot(cx, cy);

        Animator animator = ViewAnimationUtils.createCircularReveal(view,
                cx, cy, 0, finalRadius);
        view.setVisibility(View.VISIBLE);
        animator.start();
    }

    private void hideFab() {
        View view = findViewById(R.id.floatingActionButton);

        int cx = view.getWidth() / 2;
        int cy = view.getHeight() / 2;

        float initialRadius = (float) Math.hypot(cx, cy);

        Animator animator = ViewAnimationUtils.createCircularReveal(view,
                cx, cy, initialRadius, 0);

        animator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                super.onAnimationEnd(animation);
                view.setVisibility(View.INVISIBLE);
            }
        });
        animator.start();
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

    <Button
        android:id="@+id/buttonShow"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="20dp"
        android:layout_marginBottom="20dp"
        android:onClick="onClickButtonShow"
        android:text="Show"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintStart_toStartOf="parent" />

    <Button
        android:id="@+id/buttonHide"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="20dp"
        android:layout_marginBottom="20dp"
        android:onClick="onClickButtonHide"
        android:text="Hide"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintStart_toEndOf="@+id/buttonShow" />

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/floatingActionButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="24dp"
        android:layout_marginBottom="24dp"
        android:clickable="true"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:srcCompat="@drawable/ic_launcher_foreground" />
</androidx.constraintlayout.widget.ConstraintLayout>
```  
## ViewFlipper - Android Studio Tutorial
[ViewFlipper - Android Studio Tutorial](https://www.youtube.com/watch?v=2c-GbJ-c_eA&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=17)  
  
## Blur Effect on an Image - Android Studio Tutorial
[Blur Effect on an Image - Android Studio Tutorial](https://www.youtube.com/watch?v=3oOVdZpeUww&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=18)  
  
## Animated Gradient Background like Instagram - Android Studio Tutorial
[Animated Gradient Background like Instagram - Android Studio Tutorial](https://www.youtube.com/watch?v=x_DXXGvyfh8&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=19)  
  
## How to Use the Palette Class to Extract Colors from An Image - Android Studio Tutorial
[How to Use the Palette Class to Extract Colors from An Image - Android Studio Tutorial](https://www.youtube.com/watch?v=-s13C93-v_Q&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=20)  
  
## KenBurnsView Library - Android Studio Tutorial
[KenBurnsView Library - Android Studio Tutorial](https://www.youtube.com/watch?v=tjERNKtUo6s&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=21)  
  
## Persistent Bottom Sheet - Android Studio Tutorial
[Persistent Bottom Sheet - Android Studio Tutorial](https://www.youtube.com/watch?v=x_juFIQeTgI&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=27)  
  
## Move Views out of the Way with dodgeInsetEdges - Android Studio Tutorial
[Move Views out of the Way with dodgeInsetEdges - Android Studio Tutorial](https://www.youtube.com/watch?v=jpRBlNHeUcs&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=28)  
  
## How to Build a Simple Spin the Bottle Game in Android Studio (Incl. Code and Image Files)
[How to Build a Simple Spin the Bottle Game in Android Studio (Incl. Code and Image Files)](https://www.youtube.com/watch?v=bqgseI9pHwE&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=30)  
  
## ConstraintLayout Tutorial Part 5 - PLACEHOLDERS & ANIMATIONS - Android Studio Tutorial
[ConstraintLayout Tutorial Part 5 - PLACEHOLDERS & ANIMATIONS - Android Studio Tutorial](https://www.youtube.com/watch?v=LQ1DKrCYwz4&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=31)  
  
## ConstraintLayout Tutorial Part 6 - CONSTRAINTSETS - Android Studio Tutorial
[ConstraintLayout Tutorial Part 6 - CONSTRAINTSETS - Android Studio Tutorial](https://www.youtube.com/watch?v=-sPOtGqd5OA&list=PLrnPJCHvNZuARS1W7qMt-zxBNqWYZpOg6&index=32)  
  