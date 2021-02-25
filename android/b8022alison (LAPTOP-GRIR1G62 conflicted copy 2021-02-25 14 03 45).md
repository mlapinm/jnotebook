## Firestore and Android (Part 1) - Learning Outcomes
## Module One Learning Outcomes
## Module One Learning Outcomes
http://localhost:54398/  
After completing this module you will be able to:  
- Set up a new project using Firebase and Android Studio
- Develop the user interface (UI) for an Android app
- Link a post to the Firestore database
- Create and customise toggle buttons for an app
- Configure the 'recycler view' to the database
- Set listener values and snapshots
- Solve the problem of one-time fetching
- Implement the app 'like' function

## 2 Android App Project Setup
[2 Android App Project Setup](https://alison.com/topic/learn/76016/android-app-project-setup)  
B8022base  
B8023base  
B8024bind  
[Kotlin Synthetic (Deprecated) - Migrate to View Binding | Android Studio Tutorial
](https://www.youtube.com/watch?v=MXZz438aCDM&list=PLSrm9z4zp4mG9o873gDqCuGZkgOb_TR4N&index=104)  
```
android {
    buildFeatures{
        viewBinding = true
    }
}
```
```
class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 31.5f)
        binding.textView.setText("olleH")
    }
}
```
[b3022fb](https://console.firebase.google.com/project/b3022fb/overview)  
In this lesson, the android app project is set up; build gradle code and gradle dependency lines are copied from Firebase and the app's colour theme is updated.  
- kotlin
- base activity
- B8022base
  
```
build.gradle (project-level)

    Add rules to include the Google Services Gradle plugin:
        classpath 'com.google.gms:google-services:4.3.4'


 
app/build.gradle

    Apply the Google Services Gradle plugin:
        apply plugin: 'com.google.gms.google-services'

    Add the library dependency:
        implementation 'com.google.firebase:firebase-database:19.6.0'
```  
Reveal in finder
[Cloud Firestore](https://console.firebase.google.com/project/b3022fb/firestore/data~2FNotebook~2FY7UWcwEvKA1Mmu94HaQJ)

## Post View UI
In this lesson, elements are added to the 'post new thoughts' view of the app and customised, i.e. toggle buttons, username field; text field and submit button.  
## Database Connection
In this lesson, fields are added to the database for number of comments, number of likes, timestamp and text field and a test post is performed successfully.  
[Database Connection](https://alison.com/topic/learn/76018/database-connection)  
B8032base   
add collection  
collection name  
thought  
Document id  auto  
Field username
type string
Value MichaelL
field add
category fanny
field add
numComments number 0
numLikes number 0
timestamp timestamp  
thoughtText string This is random thought  


## B8042base
B8042base  

[Create dynamic lists with RecyclerView  ](https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=ru)  


## B8052base
B8052base  
[SimpleDateFormat](https://developer.android.com/reference/java/text/SimpleDateFormat)  

## B8062base
B8062base  

## B8072base
B8072base  

## B8082base
B8082base  

https://console.firebase.google.com/project/b3022fb/firestore/indexes?create_composite=Ckhwcm9qZWN0cy9iMzAyMmZiL2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy90aG91Z2h0cy9pbmRleGVzL18QARoMCghjYXRlZ29yeRABGg0KCXRpbWVzdGFtcBACGgwKCF9fbmFtZV9fEAI  


## B8232base
B8232base  


## B8242base
B8242base  


## B8252base
B8252base  


## B8262base
B8262base  


## B8272base
B8272base  
commentListUsername
commentListTimestamp
commentListCommentText


## B8282base
B8282base  




## B8292base
B8292base  

service cloud.firestore {
  match /databases/(database)/documents{
    match /thoughts/{thought=**} {
      allow read, write : if request.auth != null;
	}
	
	match /users/{userId}{
	  allow create;
	  allow read, write : if request.auth.uid == userId;
	}
  }
}


1  
  
service cloud.firestore {
  match /databases/(database)/documents{
    match /thoughts/{thought=**} {
      allow read, write : if request.auth != null;
	}
  }
}

2  

service cloud.firestore {
  match /databases/(database)/documents{
    match /thoughts/{thought=**} {
      allow read, write : if request.auth != null;
	}
	
	match /thoughts/{thought}/comments/{comment}{
      allow read, write : if request.auth != null;
	}
  }
}

3  

service cloud.firestore {
  match /databases/(database)/documents{
    match /thoughts/{thought=**} {
      allow read, write : if request.auth != null;

      match /comments/{comment}{
        allow read, write : if request.auth != null;
	  }
	}
  }
}

## B8332base
B8332base  


## B8342base
B8342base  



## B8352base
B8352base  



## B8362base
B8362base empty 


https://console.cloud.google.com/firestore/data?hl=ru&project=b3022fb  

8995
7022
1973   21 eur

b8024alison.txt