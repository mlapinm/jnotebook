## Fragments/Dialogs - Android Programming
## How to Send Data to a New Fragment with a Factory Method - Android Studio Tutorial
[How to Send Data to a New Fragment with a Factory Method - Android Studio Tutorial](https://www.youtube.com/watch?v=HZYYjY2NSKk&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=1)  
```
package com.example.b601201frag;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        LittleFragment littleFragment = LittleFragment
                .newInstance("little text ", 1234);

        getSupportFragmentManager().beginTransaction()
                .replace(R.id.container1, littleFragment)
                .commit();
    }
}


package com.example.b601201frag;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class LittleFragment extends Fragment {
    private static final String ARG_TEXT = "argText";
    private static final String ARG_NUMBER = "argNumber";
    private String text;
    private int number;

    public static LittleFragment newInstance(String text, int number){
        Bundle args = new Bundle();
        args.putString(ARG_TEXT, text);
        args.putInt(ARG_NUMBER, number);
        LittleFragment littleFragment = new LittleFragment();
        littleFragment.setArguments(args);
        return littleFragment;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.little_fragment, container, false);
        TextView textView = v.findViewById(R.id.textView);

        if(getArguments() != null){
            text = getArguments().getString(ARG_TEXT);
            number = getArguments().getInt(ARG_NUMBER);
        }

        textView.setText(text + " : " + number);
        return v;
    }
}
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@android:color/holo_green_light"
    android:gravity="center"
    android:orientation="vertical">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Fragment Text"
        android:textSize="30sp" />

</LinearLayout>

<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/container1"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity" />


```  
## Fragment to Fragment/Activity Communication - Android Studio Tutorial
[Fragment to Fragment/Activity Communication - Android Studio Tutorial](https://www.youtube.com/watch?v=i22INe14JUc&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=2)  
```
package com.example.b601202frag;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity implements FragmentA.FragmentAListener, FragmentB.FragmentBListener {
    private FragmentA fragmentA;
    private FragmentB fragmentB;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        fragmentA = new FragmentA();
        fragmentB = new FragmentB();

        getSupportFragmentManager().beginTransaction()
                .replace(R.id.container_a, fragmentA)
                .replace(R.id.container_b, fragmentB)
                .commit();
    }

    @Override
    public void onInputASent(CharSequence input) {
        fragmentB.updateEditText(input);
    }

    @Override
    public void onInputBSent(CharSequence input) {
        fragmentA.updateEditText(input);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <FrameLayout
        android:id="@+id/container_a"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

    </FrameLayout>

    <FrameLayout
        android:id="@+id/container_b"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

    </FrameLayout>
</LinearLayout>

package com.example.b601202frag;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class FragmentA extends Fragment {
    private FragmentAListener listener;
    private Button buttonOk;
    private EditText editText;

    public interface FragmentAListener{
        void onInputASent(CharSequence input);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_a, container, false);
        editText = view.findViewById(R.id.editText);
        buttonOk = view.findViewById(R.id.button_ok);
        buttonOk.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CharSequence input = editText.getText();
                listener.onInputASent(input);
            }
        });

        return view;
    }

    public void updateEditText(CharSequence newText){
        editText.setText(newText);
    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        if(context instanceof FragmentAListener){
            listener = (FragmentAListener) context;

        }else {
            throw new RuntimeException( context.toString()
            + " must implement FragmentBListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }
}

package com.example.b601202frag;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class FragmentB extends Fragment {
    private FragmentBListener listener;
    private Button buttonOk;
    private EditText editText;

    public interface FragmentBListener{
        void onInputBSent(CharSequence input);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_b, container, false);
        editText = view.findViewById(R.id.editText);
        buttonOk = view.findViewById(R.id.button_ok);
        buttonOk.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CharSequence input = editText.getText();
                listener.onInputBSent(input);
            }
        });

        return view;
    }

    public void updateEditText(CharSequence newText){
        editText.setText(newText);
    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        if(context instanceof FragmentBListener){
            listener = (FragmentBListener) context;

        }else {
            throw new RuntimeException( context.toString()
            + " must implement FragmentBListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }
}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="@android:color/holo_green_light"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    android:padding="16dp">

    <EditText
        android:id="@+id/editText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="text a"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button_ok"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Ok" />
</LinearLayout>

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="@android:color/holo_blue_light"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    android:padding="16dp">

    <EditText
        android:id="@+id/editText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="text b"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button_ok"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Ok" />
</LinearLayout>


```  
## How to Send Data Between 2 Fragments Using a Shared ViewModel - Android Studio Tutorial
[How to Send Data Between 2 Fragments Using a Shared ViewModel - Android Studio Tutorial](https://www.youtube.com/watch?v=ACK67xU1Y3s&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=3)  
  
```




```  
## BottomNavigationView with Fragments - Android Studio Tutorial
[BottomNavigationView with Fragments - Android Studio Tutorial](https://www.youtube.com/watch?v=tPV8xA7m-iw&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=4)  
```
package com.example.b601204frag;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationMenu;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        BottomNavigationView bottomNav = findViewById(R.id.bottom_navigation);
        bottomNav.setOnNavigationItemSelectedListener(navListener);

        getSupportFragmentManager().beginTransaction()
                .replace(R.id.fragment_container, new HomeFragment())
                .commit();
    }

    private BottomNavigationView.OnNavigationItemSelectedListener navListener =
            new BottomNavigationView.OnNavigationItemSelectedListener() {

                @Override
                public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                    Fragment selectedFragment = null;
                    switch (item.getItemId()){
                        case R.id.nav_home:
                            selectedFragment = new HomeFragment();
                            break;
                        case R.id.nav_favorites:
                            selectedFragment = new FavoritesFragment();
                            break;
                        case R.id.nav_search:
                            selectedFragment = new SearchFragment();
                            break;
                    }
                    getSupportFragmentManager().beginTransaction()
                            .replace(R.id.fragment_container, selectedFragment)
                            .commit();
                    return true;
                }
            };
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    tools:context=".MainActivity">


    <FrameLayout
        android:id="@+id/fragment_container"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_above="@id/bottom_navigation">

    </FrameLayout>

    <com.google.android.material.bottomnavigation.BottomNavigationView
        android:id="@+id/bottom_navigation"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:background="?android:attr/windowBackground"
        app:menu="@menu/bottom_navigation" />
</RelativeLayout>

<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@id/bottom_navigation">

    <item
        android:id="@+id/nav_home"
        android:icon="@drawable/ic_baseline_home_24"
        android:title="Home" />
    <item
        android:id="@+id/nav_favorites"
        android:icon="@drawable/ic_baseline_favorite_24"
        android:title="Favorits" />
    <item
        android:id="@+id/nav_search"
        android:icon="@drawable/ic_baseline_search_24"
        android:title="Search" />
</menu>

package com.example.b601204frag;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class HomeFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_home, container, false);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@android:color/holo_red_light">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="Home Fragment"
        android:textSize="30sp" />
</RelativeLayout>

```  
## Custom Dialog + Sending Information to Activity - Android Studio Tutorial
[Custom Dialog + Sending Information to Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=ARezg1D9Zd0&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=5)  
```
package com.example.b601205frag;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements LittleDialog.LittleDialogListener {
    private TextView textViewUsername;
    private TextView textViewPassword;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textViewUsername = findViewById(R.id.textview_username);
        textViewPassword = findViewById(R.id.textview_password);
        button = findViewById(R.id.button);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDialog();
            }
        });
    }

    private void openDialog() {
        LittleDialog littleDialog = new LittleDialog();
        littleDialog.show(getSupportFragmentManager(), "little dialog");
    }

    @Override
    public void applyTexts(String username, String password) {
        textViewUsername.setText(username);
        textViewPassword.setText(password);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textview_username"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:gravity="center_horizontal"
        android:text="here will be our username"
        android:textSize="24sp" />

    <TextView
        android:id="@+id/textview_password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/textview_username"
        android:gravity="center_horizontal"
        android:text="here will be our password"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/textview_password"
        android:text="Open Dialog" />

</RelativeLayout>

package com.example.b601205frag;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatDialogFragment;

public class LittleDialog extends AppCompatDialogFragment  {
    private EditText editTextUsername;
    private EditText editTextPassword;
    private LittleDialogListener listener;

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());

        LayoutInflater inflater = getActivity().getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_dialog, null);

        builder.setView(view)
                .setTitle("Login")
                .setNegativeButton("cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                    }
                })
                .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        String username = editTextUsername.getText().toString();
                        String password = editTextPassword.getText().toString();
                        listener.applyTexts(username, password);
                    }
                });
        editTextUsername = view.findViewById(R.id.edit_username);
        editTextPassword = view.findViewById(R.id.edit_password);

        return builder.create();
    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);

        try {
            listener = (LittleDialogListener) context;
        } catch (ClassCastException e) {
            throw  new ClassCastException(context.toString() +
                    "must implement LittleDialogListener");
        }
    }

    public interface LittleDialogListener{
        void applyTexts(String username, String password);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <EditText
        android:id="@+id/edit_username"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Username"
        android:inputType="text"
        android:text="Username1"
        android:textSize="24sp" />

    <EditText
        android:id="@+id/edit_password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/edit_username"
        android:hint="Password"
        android:inputType="textPassword"
        android:text="Password1"
        android:textSize="24sp" />
</RelativeLayout>

```  
## Open a Fragment with an Animation + Communicate with Activity - Android Studio Tutorial
[Open a Fragment with an Animation + Communicate with Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=BMTNaPcPjdw&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=6)  
```
package com.example.b601206anim;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity implements BlankFragment.OnFragmentInteractionListener {
    EditText editText;
    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editText = findViewById(R.id.edittext);
        button = findViewById(R.id.button);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String text = editText.getText().toString();
                openFragment(text);
            }
        });
    }

    private void openFragment(String text) {
        BlankFragment fragment = BlankFragment.newInstance(text);
        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        transaction.setCustomAnimations(R.anim.enter_from_right, R.anim.exit_to_right,
                R.anim.enter_from_right, R.anim.exit_to_right);
        transaction.addToBackStack(null);
        transaction.add(R.id.fragment_container, fragment, "BLANK_FRAGMENT")
                .commit();
    }

    @Override
    public void onFragmentInteraction(String sendBackText) {
        editText.setText(sendBackText);
        onBackPressed();
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/edittext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="text1"
        android:textSize="24sp"
        tools:layout_editor_absoluteX="100dp"
        tools:layout_editor_absoluteY="82dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:stateListAnimator="@null"
        android:text="Send" />

    <FrameLayout
        android:id="@+id/fragment_container"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

    </FrameLayout>
</RelativeLayout>

package com.example.b601206anim;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

public class BlankFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_TEXT = "text";

    // TODO: Rename and change types of parameters
    private String mText;

    private OnFragmentInteractionListener mListener;

    private EditText editTextFragment;
    private Button buttonFragment;

    public BlankFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static BlankFragment newInstance(String text) {
        BlankFragment fragment = new BlankFragment();
        Bundle args = new Bundle();
        args.putString(ARG_TEXT, text);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mText = getArguments().getString(ARG_TEXT);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_blank, container, false);

        buttonFragment = view.findViewById(R.id.button_fragment);
        editTextFragment = view.findViewById(R.id.edittext_fragment);
        editTextFragment.setText(mText);
        editTextFragment.requestFocus();

        buttonFragment.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String sendBackText = editTextFragment.getText().toString();
                sendBack(sendBackText);
            }
        });
        return view;
    }

    private void sendBack(String sendBackText) {
        if(mListener != null){
            mListener.onFragmentInteraction(sendBackText);
        }
    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        if(context instanceof OnFragmentInteractionListener){
            mListener = (OnFragmentInteractionListener) context;
        }else {
            throw new RuntimeException(context.toString() +
                    " must implement OnFragmentInteractionListener ");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    public interface OnFragmentInteractionListener{
        void onFragmentInteraction(String sendBackText);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@android:color/holo_green_light"
    tools:context=".BlankFragment">

    <EditText
        android:id="@+id/edittext_fragment"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="text"
        android:text="blank fragment"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button_fragment"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal|center_vertical"
        android:text="Send Back" />
</FrameLayout>

<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android"
    android:shareInterpolator="false">
    <translate
        android:fromXDelta="100%" android:toXDelta="0%"
        android:fromYDelta="0%" android:toYDelta="0%"
        android:duration="200" />

</set>

<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android"
    android:shareInterpolator="false">
    <translate
        android:fromXDelta="0%" android:toXDelta="100%"
        android:fromYDelta="0%" android:toYDelta="0%"
        android:duration="200" />

</set>

```  
## Navigation Drawer with Fragments Part 1 - MENU AND ACTIVITY THEME - Android Studio Tutorial
[Navigation Drawer with Fragments Part 1 - MENU AND ACTIVITY THEME - Android Studio Tutorial](https://www.youtube.com/watch?v=fGcMLu1GJEc&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=7)  
```










```  
## Navigation Drawer with Fragments Part 2 - LAYOUT AND HAMBURGER ICON - Android Studio Tutorial
[Navigation Drawer with Fragments Part 2 - LAYOUT AND HAMBURGER ICON - Android Studio Tutorial](https://www.youtube.com/watch?v=zYVEMCiDcmY&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=8)  
  
## Navigation Drawer with Fragments Part 3 - HANDLING MENU ITEM CLICKS - Android Studio Tutorial
[Navigation Drawer with Fragments Part 3 - HANDLING MENU ITEM CLICKS - Android Studio Tutorial](https://www.youtube.com/watch?v=bjYstsO1PgI&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=9)  
  
## Modal Bottom Sheet - Android Studio Tutorial
[Modal Bottom Sheet - Android Studio Tutorial](https://www.youtube.com/watch?v=IfpRL2K1hJk&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=10)  
```
package com.example.b601210bott;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements ExampleBottomSheetDialog.BottomSheetListener {
    TextView mTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTextView = findViewById(R.id.text_view_button_clicked);

        Button buttonOpenBottomSheet = findViewById(R.id.button_open_bottom_sheet);

        buttonOpenBottomSheet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ExampleBottomSheetDialog bottomSheet = new ExampleBottomSheetDialog();
                bottomSheet.show(getSupportFragmentManager(), "exampleBottomSheet");
            }
        });
    }

    @Override
    public void onButtonClicked(String text) {
        mTextView.setText(text);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/button_open_bottom_sheet"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Open Modal Bottom Sheet"
        tools:layout_editor_absoluteX="196dp"
        tools:layout_editor_absoluteY="351dp" />

    <TextView
        android:id="@+id/text_view_button_clicked"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Button X clicked"
        android:textSize="24sp" />
</LinearLayout>

package com.example.b601210bott;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.google.android.material.bottomsheet.BottomSheetDialogFragment;

public class ExampleBottomSheetDialog extends BottomSheetDialogFragment {
    private BottomSheetListener mListener;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.bottom_sheet_layout, container, false);

        Button button1 = view.findViewById(R.id.button1);
        Button button2 = view.findViewById(R.id.button2);
        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mListener.onButtonClicked("Button 1 clicked");
                dismiss();
            }
        });
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mListener.onButtonClicked("Button 2 clicked");
                dismiss();
            }
        });
        return view;
    }

    public interface BottomSheetListener{
        void onButtonClicked(String text);
    }

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);

        try {
            mListener = (BottomSheetListener) context;
        } catch (ClassCastException e) {
            throw  new ClassCastException(context.toString() +
                    " mast implement BottomSheetListener ");
        }
    }
}

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="This is a BottomSheet"
        android:textSize="30sp" />

    <Button
        android:id="@+id/button1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Button 1" />

    <Button
        android:id="@+id/button2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Button 2" />
</LinearLayout>

```  
## Tab Layout with Different Fragments - Android Studio Tutorial
[Tab Layout with Different Fragments - Android Studio Tutorial](https://www.youtube.com/watch?v=h4HwU_ENXYM&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=11)  
```












```  
## Swipe View + Animations - Android Studio Tutorial
[Swipe View + Animations - Android Studio Tutorial](https://www.youtube.com/watch?v=g1zhXdixh50&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=12)  
```
package com.example.b601212swip;

import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.tabs.TabLayout;

import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.app.AppCompatActivity;

import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.example.b601212swip.ui.main.SectionsPagerAdapter;

public class MainActivity extends AppCompatActivity {
    ViewPager viewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        SectionsPagerAdapter sectionsPagerAdapter = new SectionsPagerAdapter(this, getSupportFragmentManager());
        viewPager = findViewById(R.id.view_pager);

//        viewPager.setPageTransformer(true, new DepthPageTransformer());
        viewPager.setPageTransformer(true, new ZoomOutPageTransformer());

        viewPager.setAdapter(sectionsPagerAdapter);
        TabLayout tabs = findViewById(R.id.tabs);
        tabs.setupWithViewPager(viewPager);
        FloatingActionButton fab = findViewById(R.id.fab);

        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    @Override
    public void onBackPressed() {
        if(viewPager.getCurrentItem() == 0){
            super.onBackPressed();
        }else {
            viewPager.setCurrentItem(viewPager.getCurrentItem()-1);
        }
    }
}

package com.example.b601212swip;

import android.view.View;

import androidx.viewpager.widget.ViewPager;

public class ZoomOutPageTransformer implements ViewPager.PageTransformer {
    private static final float MIN_SCALE = 0.85f;
    private static final float MIN_ALPHA = 0.5f;

    public void transformPage(View view, float position) {
        int pageWidth = view.getWidth();
        int pageHeight = view.getHeight();

        if (position < -1) { // [-Infinity,-1)
            // This page is way off-screen to the left.
            view.setAlpha(0f);

        } else if (position <= 1) { // [-1,1]
            // Modify the default slide transition to shrink the page as well
            float scaleFactor = Math.max(MIN_SCALE, 1 - Math.abs(position));
            float vertMargin = pageHeight * (1 - scaleFactor) / 2;
            float horzMargin = pageWidth * (1 - scaleFactor) / 2;
            if (position < 0) {
                view.setTranslationX(horzMargin - vertMargin / 2);
            } else {
                view.setTranslationX(-horzMargin + vertMargin / 2);
            }

            // Scale the page down (between MIN_SCALE and 1)
            view.setScaleX(scaleFactor);
            view.setScaleY(scaleFactor);

            // Fade the page relative to its size.
            view.setAlpha(MIN_ALPHA +
                    (scaleFactor - MIN_SCALE) /
                            (1 - MIN_SCALE) * (1 - MIN_ALPHA));

        } else { // (1,+Infinity]
            // This page is way off-screen to the right.
            view.setAlpha(0f);
        }
    }
}

package com.example.b601212swip;

import android.view.View;

import androidx.viewpager.widget.ViewPager;

public class DepthPageTransformer implements ViewPager.PageTransformer {
    private static final float MIN_SCALE = 0.75f;

    public void transformPage(View view, float position) {
        int pageWidth = view.getWidth();

        if (position < -1) { // [-Infinity,-1)
            // This page is way off-screen to the left.
            view.setAlpha(0f);

        } else if (position <= 0) { // [-1,0]
            // Use the default slide transition when moving to the left page
            view.setAlpha(1f);
            view.setTranslationX(0f);
            view.setScaleX(1f);
            view.setScaleY(1f);

        } else if (position <= 1) { // (0,1]
            // Fade the page out.
            view.setAlpha(1 - position);

            // Counteract the default slide transition
            view.setTranslationX(pageWidth * -position);

            // Scale the page down (between MIN_SCALE and 1)
            float scaleFactor = MIN_SCALE
                    + (1 - MIN_SCALE) * (1 - Math.abs(position));
            view.setScaleX(scaleFactor);
            view.setScaleY(scaleFactor);

        } else { // (1,+Infinity]
            // This page is way off-screen to the right.
            view.setAlpha(0f);
        }
    }
}

```  
## DatePickerDialog - Android Studio Tutorial
[DatePickerDialog - Android Studio Tutorial](https://www.youtube.com/watch?v=33BFCdL0Di0&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=13)  
```
package com.example.b601213date;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.DialogFragment;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;

import java.text.DateFormat;
import java.util.Calendar;

public class MainActivity extends AppCompatActivity implements DatePickerDialog.OnDateSetListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DialogFragment datePicker = new DatePickerFragment();
                datePicker.show(getSupportFragmentManager(), "date picker");

            }
        });
    }

    @Override
    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DAY_OF_MONTH, dayOfMonth);
        String currentDateString = DateFormat
                .getDateInstance(DateFormat.FULL).format(calendar.getTime());

        TextView textView = findViewById(R.id.textView);
        textView.setText(currentDateString);
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@+id/button"
        android:layout_centerHorizontal="true"
        android:layout_centerVertical="false"
        android:text="Date"
        android:textSize="30sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="Open Date Picker"
        />

</RelativeLayout>

package com.example.b601213date;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;

import java.util.Calendar;

public class DatePickerFragment extends DialogFragment {
    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int day = calendar.get(Calendar.DAY_OF_MONTH);

        return new DatePickerDialog(getActivity(),
                (DatePickerDialog.OnDateSetListener)getActivity(),
                year, month, day);
    }
}



```  
## TimePickerDialog - Android Studio Tutorial
[TimePickerDialog - Android Studio Tutorial](https://www.youtube.com/watch?v=QMwaNN_aM3U&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=14)  
```
package com.example.b601214time;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.DialogFragment;

import android.app.TimePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.TimePicker;

import java.util.Calendar;

public class MainActivity extends AppCompatActivity implements TimePickerDialog.OnTimeSetListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DialogFragment timePicker = new TimePickerFragment();
                timePicker.show(getSupportFragmentManager(), "time picker");
            }
        });
    }

    @Override
    public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
        TextView textView = findViewById(R.id.textView);
        textView.setText(String.format("%02d : %02d", hourOfDay, minute));
    }
}

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@+id/button"
        android:layout_centerHorizontal="true"
        android:text="Time"
        android:textSize="30sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="Open Time Picker"
        tools:layout_editor_absoluteX="161dp"
        tools:layout_editor_absoluteY="300dp" />
</RelativeLayout>

package com.example.b601214time;

import android.app.Dialog;
import android.app.TimePickerDialog;
import android.os.Bundle;
import android.text.format.DateFormat;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;

import java.util.Calendar;

public class TimePickerFragment extends DialogFragment {

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        Calendar calendar = Calendar.getInstance();
        int hour = calendar.get(Calendar.HOUR);
        int minute = calendar.get(Calendar.MINUTE);

        return new TimePickerDialog(getActivity(),
                (TimePickerDialog.OnTimeSetListener) getActivity(),
        hour, minute, DateFormat.is24HourFormat(getActivity()));
    }
}
```  
## Color Picker Dialog (AmbilWarna) - Android Studio Tutorial
[Color Picker Dialog (AmbilWarna) - Android Studio Tutorial](https://www.youtube.com/watch?v=7qXwgD45b4w&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=15)  
```
package com.example.b601215color;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.content.ContextCompat;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import yuku.ambilwarna.AmbilWarnaDialog;

public class MainActivity extends AppCompatActivity {
    ConstraintLayout mLayout;
    int mDefaultColor;
    Button mButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mLayout = (ConstraintLayout) findViewById(R.id.layout);
        mDefaultColor = ContextCompat.getColor(MainActivity.this,
                R.color.design_default_color_primary);
        mButton = findViewById(R.id.button);
        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openColorPicker();
            }
        });
    }

    private void openColorPicker() {
        AmbilWarnaDialog colorPicker = new AmbilWarnaDialog(this,
                mDefaultColor, new AmbilWarnaDialog.OnAmbilWarnaListener() {
            @Override
            public void onCancel(AmbilWarnaDialog dialog) {

            }

            @Override
            public void onOk(AmbilWarnaDialog dialog, int color) {
                mDefaultColor = color;
                mLayout.setBackgroundColor(mDefaultColor);

            }
        });
        colorPicker.show();

    }
}

<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Open Color Picker"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>

plugins {
    id 'com.android.application'
}

android {
    compileSdkVersion 30
    buildToolsVersion "30.0.2"

    defaultConfig {
        applicationId "com.example.b601215color"
        minSdkVersion 23
        targetSdkVersion 30
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}

dependencies {

    implementation 'androidx.appcompat:appcompat:1.2.0'
    implementation 'com.github.yukuku:ambilwarna:2.0.1'
 
}
```  
## How to Create a Rate Me Dialog with the Android-Rate Library - Android Studio Tutorial
[How to Create a Rate Me Dialog with the Android-Rate Library - Android Studio Tutorial](https://www.youtube.com/watch?v=lS26PLG1_Ws&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=16)  
```
package com.example.b601216rate;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import hotchemi.android.rate.AppRate;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        AppRate.with(this)
                .setInstallDays(0)
                .setLaunchTimes(3)
                .setRemindInterval(2)
                .monitor();
        AppRate.showRateDialogIfMeetsConditions(this);
//        AppRate.with(this).clearAgreeShowDialog();
        AppRate.with(this).showRateDialog(this);
    }
}

plugins {
    id 'com.android.application'
}

android {
    compileSdkVersion 30
    buildToolsVersion "30.0.2"

    defaultConfig {
        applicationId "com.example.b601216rate"
        minSdkVersion 23
        targetSdkVersion 30
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}

dependencies {

    implementation 'com.github.hotchemi:android-rate:1.0.1'
}

<resources>
    <string name="app_name">b601216rate</string>
    <string name="rate_dialog_title">Rate this app2</string>
    <string name="rate_dialog_message">If you enjoy playing this app, would you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!</string>
    <string name="rate_dialog_ok">Rate It Now</string>
    <string name="rate_dialog_cancel">Remind Me Later</string>
    <string name="rate_dialog_no">No, Thanks</string>
</resources>

```  
## Do Not Dismiss AlertDialog After Clicking a Button - Android Studio Tutorial
[Do Not Dismiss AlertDialog After Clicking a Button - Android Studio Tutorial](https://www.youtube.com/watch?v=Kz9TkDY2sP8&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=17)  
```
package com.example.b601217alert;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final AlertDialog alertDialog = new AlertDialog.Builder(this)
                .setTitle("Title")
                .setMessage("Example Message")
                .setPositiveButton("Ok", null)
                .setNegativeButton("Cancel", null)
                .show();

        Button positiveButton = alertDialog.getButton(AlertDialog.BUTTON_POSITIVE);
        positiveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Closing", Toast.LENGTH_SHORT).show();
                alertDialog.dismiss();
            }
        });
    }
}
```  
## Simple Dialog with 1 Button - Android Studio Tutorial
[Simple Dialog with 1 Button - Android Studio Tutorial](https://www.youtube.com/watch?v=Bsm-BlXo2SI&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=18)  
```
package com.example.freon.b601218dialog3;

import androidx.appcompat.app.AppCompatActivity;

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
            public void onClick(View view) {
                new LittleDialog().show(getSupportFragmentManager(),
                        "little dialog");
            }
        });
    }
}

package com.example.freon.b601218dialog3;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatDialogFragment;

public class LittleDialog extends AppCompatDialogFragment {

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle("Title")
                .setMessage("Message")
                .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });
        return builder.create();
    }
}




```  
## AlertDialog + Passing Event to Activity - Android Studio Tutorial
[AlertDialog + Passing Event to Activity - Android Studio Tutorial](https://www.youtube.com/watch?v=r_87U6oHLFc&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=19)  
  
## Fragments, Alternative Layout Files & Include - Android Data Binding Tutorial Part 2
[Fragments, Alternative Layout Files & Include - Android Data Binding Tutorial Part 2](https://www.youtube.com/watch?v=uDU_cKgnBzk&list=PLrnPJCHvNZuBkhcesO6DfdCghl6ZejVPc&index=20)  
  