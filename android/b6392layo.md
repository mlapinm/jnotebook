## Layout Tutorials - Android Programming
## How to Reuse Views and Layouts With INCLUDE and MERGE - Android Studio Tutorial
[How to Reuse Views and Layouts With INCLUDE and MERGE - Android Studio Tutorial](https://www.youtube.com/watch?v=b0gNkXdUfl0&list=PLrnPJCHvNZuBtcos16XJnfFx2fSUOyW_-&index=3)  
  
[B639012layo](b6394code.md)  
activity_main.xml  
circular_progressbar.xml  
circle.xml  
two_buttons.xml  
  
<?xml version="1.0" encoding="utf-8"?>

<ProgressBar
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="150dp"
    android:layout_height="150dp"
    xmlns:tools="http://schemas.android.com/tools"
    style="?android:progressBarStyleHorizontal"
    android:progressDrawable="@drawable/circle"
    android:background="@color/purple_200"
    tools:progress="20" />
	
	
