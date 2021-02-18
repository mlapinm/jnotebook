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

