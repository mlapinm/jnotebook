[1 - WHAT IS CLOUD FIRESTORE?](#1---WHAT-IS-CLOUD-FIRESTORE?)  
[2 - SETTING UP FIREBASE & FIRST DOCUMENT](#2---SETTING-UP-FIREBASE-&-FIRST-DOCUMENT)  
[3 - RETRIEVE DATA FROM DOCUMENT](#3---RETRIEVE-DATA-FROM-DOCUMENT)  
[4 - SNAPSHOT LISTENER](#4---SNAPSHOT-LISTENER)  
[5 - MERGE AND UPDATE](#5---MERGE-AND-UPDATE)  
[6 - DELETE DATA](#6---DELETE-DATA)  
[7 - CUSTOM JAVA OBJECT](#7---CUSTOM-JAVA-OBJECT)  
[8 - ADD AND RETRIEVE MULTIPLE DOCUMENTS](#8---ADD-AND-RETRIEVE-MULTIPLE-DOCUMENTS)  
[9 - SIMPLE QUERIES](#9---SIMPLE-QUERIES)  
[10 - COMPOUND QUERIES](#10---COMPOUND-QUERIES)  
[11 - MERGE TASKS TO CREATE OR-QUERIES](#11---MERGE-TASKS-TO-CREATE-OR-QUERIES)  
[12 - PAGINATION](#12---PAGINATION)  
[13 - DOCUMENT CHANGES](#13---DOCUMENT-CHANGES)  
[14 - BATCHED WRITES](#14---BATCHED-WRITES)  
[15 - TRANSACTIONS](#15---TRANSACTIONS)  
[16 - ARRAYS](#16---ARRAYS)  
[17 - NESTED OBJECTS](#17---NESTED-OBJECTS)  
[18 - SUBCOLLECTIONS AND CONSIDERATIONS](#18---SUBCOLLECTIONS-AND-CONSIDERATIONS)  
## 1 - WHAT IS CLOUD FIRESTORE?  
[1 - WHAT IS CLOUD FIRESTORE?](https://www.youtube.com/watch?v=vMnCU6KKHd4&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=1)  
  
## 2 - SETTING UP FIREBASE & FIRST DOCUMENT  
[2 - SETTING UP FIREBASE & FIRST DOCUMENT](https://www.youtube.com/watch?v=MILE4PVx1kE&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=2)  
  
## 3 - RETRIEVE DATA FROM DOCUMENT  
[3 - RETRIEVE DATA FROM DOCUMENT](https://www.youtube.com/watch?v=di5qmolrFVs&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=3)  
  
## 4 - SNAPSHOT LISTENER  
[4 - SNAPSHOT LISTENER](https://www.youtube.com/watch?v=LfkhFCDnkS0&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=4)  
  
## 5 - MERGE AND UPDATE  
[5 - MERGE AND UPDATE](https://www.youtube.com/watch?v=TBr_5QH1EvQ&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=5)  
  
## 6 - DELETE DATA  
[6 - DELETE DATA](https://www.youtube.com/watch?v=1gerxvFAGio&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=6)  
  
## 7 - CUSTOM JAVA OBJECT  
[7 - CUSTOM JAVA OBJECT](https://www.youtube.com/watch?v=jJnm3YKfAUI&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=7)  
  
## 8 - ADD AND RETRIEVE MULTIPLE DOCUMENTS  
[8 - ADD AND RETRIEVE MULTIPLE DOCUMENTS](https://www.youtube.com/watch?v=Bh0h_ZhX-Qg&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=8)  
  
## 9 - SIMPLE QUERIES  
[9 - SIMPLE QUERIES](https://www.youtube.com/watch?v=X5AGMpMV7Ks&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=9)  
```
package com.example.b3032fb;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FieldValue;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.ListenerRegistration;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;
import com.google.firebase.firestore.SetOptions;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MainActivity";

    public static final String  KEY_TITLE = "title";
    public static final String KEY_DESCRIPTION = "description";

    private EditText editTextTitle;
    private EditText editTextDescription;
    private EditText editTextPriority;
    private TextView textViewData;

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference notebookRef = db.collection("Notebook");
    private DocumentReference noteRef = db.document("Notebook/My First Note");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextTitle = findViewById(R.id.edit_text_title);
        editTextDescription = findViewById(R.id.edit_text_description);
        editTextPriority = findViewById(R.id.edit_text_priority);
        textViewData = findViewById(R.id.text_view_data);
    }

    @Override
    protected void onStart() {
        super.onStart();
        notebookRef.addSnapshotListener(this, new EventListener<QuerySnapshot>() {
            @Override
            public void onEvent(@Nullable QuerySnapshot queryDocumentSnapshots, @Nullable FirebaseFirestoreException e) {
                if(e != null){
                    return;
                }
                String data = "";
                for(QueryDocumentSnapshot documentSnapshot: queryDocumentSnapshots){
                    Note note = documentSnapshot.toObject(Note.class);
                    note.setDocumentId(documentSnapshot.getId());

                    String documentId = note.getDocumentId();
                    String title = note.getTitle();
                    String description = note.getDescription();
                    int priority = note.getPriority();
                    data += "ID : " + documentId
                            + "Title : " + title + "\n"
                            + "Description : " + description + "\n"
                            + "Priority : " + priority  + "\n\n";
                }
                textViewData.setText(data);
            }
        });
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public void addNote(View view) {
        String title = editTextTitle.getText().toString();
        String description = editTextDescription.getText().toString();
        if(editTextPriority.length()==0){
            editTextPriority.setText("0");
        }

        int priority = Integer.parseInt(editTextPriority.getText().toString());

        Note note = new Note(title, description, priority);

        notebookRef.add(note);
    }

    public void loadNotes(View view) {
        notebookRef
//                .whereEqualTo("priority", 2)
                .whereGreaterThanOrEqualTo("priority", 2)
                .orderBy("priority", Query.Direction.DESCENDING)
                .limit(2)
                .get()
                .addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                    @Override
                    public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                        String data = "";
                        for(QueryDocumentSnapshot documentSnapshot : queryDocumentSnapshots){
                            Note note = documentSnapshot.toObject(Note.class);
                            note.setDocumentId(documentSnapshot.getId());

                            String documentId = note.getDocumentId();
                            String title = note.getTitle();
                            String description = note.getDescription();
                            int priority = note.getPriority();
                            data += "ID : " + documentId
                                  + "Title : " + title + "\n"
                                  + "Description : " + description + "\n"
                                  + "Priority : " + priority  + "\n\n";
                        }
                        textViewData.setText(data);
                    }
                });
    }
}
```
```
package com.example.b3032fb;

import com.google.firebase.firestore.Exclude;

public class Note {
    private String documentId;
    private String title;
    private  String description;
    private int priority;

    public Note() {
    }

    public Note(String title, String description, int priority){
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    @Exclude
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}

```
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/edit_text_title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Title"
        android:ems="10"
        android:inputType="text"
        android:text="Title01" />

    <EditText
        android:id="@+id/edit_text_description"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Description"
        android:ems="10"
        android:inputType="text"
        android:text="Description01" />

    <EditText
        android:id="@+id/edit_text_priority"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Priority"
        android:inputType="number"
        android:text="1"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="addNote"
        android:text="Add" />

    <Button
        android:id="@+id/button2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="loadNotes"
        android:text="Load" />


    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical">
            <TextView
                android:id="@+id/text_view_data"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:textSize="24sp" />

        </LinearLayout>
    </ScrollView>


</LinearLayout>
```
## 10 - COMPOUND QUERIES  
[10 - COMPOUND QUERIES](https://www.youtube.com/watch?v=VBEzqahgKmw&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=10)  
```
    public void loadNotes(View view) {
        notebookRef
                .whereGreaterThanOrEqualTo("priority", 2)
                .orderBy("priority")
                .orderBy("title")
                .get()
                .addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                    @Override
                    public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                        String data = "";
                        for(QueryDocumentSnapshot documentSnapshot : queryDocumentSnapshots){
                            Note note = documentSnapshot.toObject(Note.class);
                            note.setDocumentId(documentSnapshot.getId());

                            String documentId = note.getDocumentId();
                            String title = note.getTitle();
                            String description = note.getDescription();
                            int priority = note.getPriority();
                            data += "ID : " + documentId + "\n"
                                  + "Title : " + title + "\n"
                                  + "Description : " + description + "\n"
                                  + "Priority : " + priority  + "\n\n";
                        }
                        textViewData.setText(data);
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.d(TAG, e.toString());
                    }
                });
    }
```
### 3  
```
    public void loadNotes(View view) {
        Task task1 = notebookRef
                .whereLessThan("priority", 2)
                .orderBy("priority")
                .get();

        Task task2 = notebookRef
                .whereGreaterThanOrEqualTo("priority", 2)
                .orderBy("priority")
                .limit(3)
                .get();

        Task<List<QuerySnapshot>> allTasks = Tasks.whenAllSuccess(task1, task2);
        allTasks.addOnSuccessListener(new OnSuccessListener<List<QuerySnapshot>>() {
            @Override
            public void onSuccess(List<QuerySnapshot> querySnapshots) {
                String data = "";

                for (QuerySnapshot queryDocumentSnapshots : querySnapshots) {
                    for (QueryDocumentSnapshot documentSnapshot : queryDocumentSnapshots) {
                        Note note = documentSnapshot.toObject(Note.class);
                        note.setDocumentId(documentSnapshot.getId());

                        String documentId = note.getDocumentId();
                        String title = note.getTitle();
                        String description = note.getDescription();
                        int priority = note.getPriority();
                        data += "ID : " + documentId + "\n"
                                + "Title : " + title + "\n"
                                + "Description : " + description + "\n"
                                + "Priority : " + priority + "\n\n";
                    }
                    data += "---------\n\n";
                }
                textViewData.setText(data);

            }
        })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.d(TAG, e.toString());
                    }
                });
```
## 11 - MERGE TASKS TO CREATE OR-QUERIES  
[11 - MERGE TASKS TO CREATE OR-QUERIES](https://www.youtube.com/watch?v=lneYmqe0qRI&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=11)  
```
package com.example.b3032fb;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FieldValue;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.ListenerRegistration;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;
import com.google.firebase.firestore.SetOptions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MainActivity";

    public static final String KEY_TITLE = "title";
    public static final String KEY_DESCRIPTION = "description";

    private EditText editTextTitle;
    private EditText editTextDescription;
    private EditText editTextPriority;
    private TextView textViewData;

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference notebookRef = db.collection("Notebook");
    private DocumentReference noteRef = db.document("Notebook/My First Note");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editTextTitle = findViewById(R.id.edit_text_title);
        editTextDescription = findViewById(R.id.edit_text_description);
        editTextPriority = findViewById(R.id.edit_text_priority);
        textViewData = findViewById(R.id.text_view_data);
    }

    @Override
    protected void onStart() {
        super.onStart();
        notebookRef.addSnapshotListener(this, new EventListener<QuerySnapshot>() {
            @Override
            public void onEvent(@Nullable QuerySnapshot queryDocumentSnapshots, @Nullable FirebaseFirestoreException e) {
                if (e != null) {
                    return;
                }
                String data = "";
                for (QueryDocumentSnapshot documentSnapshot : queryDocumentSnapshots) {
                    Note note = documentSnapshot.toObject(Note.class);
                    note.setDocumentId(documentSnapshot.getId());

                    String documentId = note.getDocumentId();
                    String title = note.getTitle();
                    String description = note.getDescription();
                    int priority = note.getPriority();
                    data += "ID : " + documentId + "\n"
                            + "Title : " + title + "\n"
                            + "Description : " + description + "\n"
                            + "Priority : " + priority + "\n\n";
                }
                textViewData.setText(data);
            }
        });
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public void addNote(View view) {
        String title = editTextTitle.getText().toString();
        String description = editTextDescription.getText().toString();
        if (editTextPriority.length() == 0) {
            editTextPriority.setText("0");
        }

        int priority = Integer.parseInt(editTextPriority.getText().toString());

        Note note = new Note(title, description, priority);

        notebookRef.add(note);
    }

    public void loadNotes(View view) {
        Task task1 = notebookRef
                .whereLessThan("priority", 2)
                .orderBy("priority")
                .get();

        Task task2 = notebookRef
                .whereGreaterThanOrEqualTo("priority", 2)
                .orderBy("priority")
//                .orderBy("title", Query.Direction.DESCENDING)
                .get();

        Task<List<QuerySnapshot>> allTasks = Tasks.whenAllSuccess(task1, task2);
        allTasks.addOnSuccessListener(new OnSuccessListener<List<QuerySnapshot>>() {
            @Override
            public void onSuccess(List<QuerySnapshot> querySnapshots) {
                String data = "";

                for (QuerySnapshot queryDocumentSnapshots : querySnapshots) {
                    for (QueryDocumentSnapshot documentSnapshot : queryDocumentSnapshots) {
                        Note note = documentSnapshot.toObject(Note.class);
                        note.setDocumentId(documentSnapshot.getId());

                        String documentId = note.getDocumentId();
                        String title = note.getTitle();
                        String description = note.getDescription();
                        int priority = note.getPriority();
                        data += "ID : " + documentId + "\n"
                                + "Title : " + title + "\n"
                                + "Description : " + description + "\n"
                                + "Priority : " + priority + "\n\n";
                    }
                    data += "---------\n\n";
                }
                textViewData.setText(data);

            }
        })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.d(TAG, e.toString());
                    }
                });


    }
}
```
```
package com.example.b3032fb;

import com.google.firebase.firestore.Exclude;

public class Note {
    private String documentId;
    private String title;
    private  String description;
    private int priority;

    public Note() {
    }

    public Note(String title, String description, int priority){
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    @Exclude
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
```
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/edit_text_title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Title"
        android:ems="10"
        android:inputType="text"
        android:text="Title01" />

    <EditText
        android:id="@+id/edit_text_description"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Description"
        android:ems="10"
        android:inputType="text"
        android:text="Description01" />

    <EditText
        android:id="@+id/edit_text_priority"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Priority"
        android:inputType="number"
        android:text="3"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="addNote"
        android:text="Add" />

    <Button
        android:id="@+id/button2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="loadNotes"
        android:text="Load" />


    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical">
            <TextView
                android:id="@+id/text_view_data"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:textSize="24sp" />

        </LinearLayout>
    </ScrollView>


</LinearLayout>
```  
## 12 - PAGINATION  
[12 - PAGINATION](https://www.youtube.com/watch?v=HQgJvHXsNOQ&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=12)  
  
## 13 - DOCUMENT CHANGES  
[13 - DOCUMENT CHANGES](https://www.youtube.com/watch?v=-kre5cmoR8Q&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=13)  
  
## 14 - BATCHED WRITES  
[14 - BATCHED WRITES](https://www.youtube.com/watch?v=haubwSCTPm4&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=14)  
  
## 15 - TRANSACTIONS  
[15 - TRANSACTIONS](https://www.youtube.com/watch?v=U-hNE4wRTjU&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=15)  

## 16 - ARRAYS  
[16 - ARRAYS](https://www.youtube.com/watch?v=CErMzfBS5cc&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=16)  
```
package com.example.b3042fb;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.FieldValue;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private EditText editTextTitle;
    private EditText editTextDescription;
    private EditText editTextPriority;
    private EditText editTextTags;
    private TextView textViewData;

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference notebookRef = db.collection("Notebook");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        View view = findViewById(R.layout.activity_main);

        editTextTitle = findViewById(R.id.edit_text_title);
        editTextDescription = findViewById(R.id.edit_text_description);
        editTextPriority = findViewById(R.id.edit_text_priority);
        editTextTags = findViewById(R.id.edit_text_tags);
        textViewData = findViewById(R.id.text_view_data);

        updateArray();
        loadNotes(view);
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public void addNote(View view) {
        String title = editTextTitle.getText().toString();
        String description = editTextDescription.getText().toString();
        if (editTextPriority.length() == 0) {
            editTextPriority.setText("0");
        }

        int priority = Integer.parseInt(editTextPriority.getText().toString());

        String tagInput = editTextTags.getText().toString();
        String[] tagArray = tagInput.split("\\s*,\\s*");
        List<String> tags = Arrays.asList(tagArray);

        Note note = new Note(title, description, priority, tags);
        notebookRef.add(note);
    }

    public void loadNotes(View view) {
        notebookRef
//                .whereArrayContains("tags", "tag3")
                .get()
                .addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                    @Override
                    public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                        String data = "";

                        for(QueryDocumentSnapshot documentSnapshot: queryDocumentSnapshots){
                            Note note = documentSnapshot.toObject(Note.class);
                            note.setDocumentId(documentSnapshot.getId());

                            String documentId = note.getDocumentId();
                            data += "Document ID: " + documentId;

                            for(String tag: note.getTags()){
                                data += "\n - " + tag;
                            }
                            data += "\n";
                        }
                        textViewData.setText(data);
                    }
                });
    }

    private void updateArray() {
        notebookRef.document("TarEbvZyzhMn1rtE3Zgu")
                .update("tags", FieldValue.arrayUnion("tag5"));
//                .update("tags", FieldValue.arrayRemove("tag5"));
    }
}
```
```
package com.example.b3042fb;

import com.google.firebase.firestore.Exclude;

import java.util.List;

public class Note {
    private String documentId;
    private String title;
    private  String description;
    private int priority;
    List<String> tags;

    public Note() {
    }

    public Note(String title, String description, int priority, List<String> tags){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.tags = tags;
    }

    @Exclude
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getPriority() {
        return priority;
    }

    public List<String> getTags() {
        return tags;
    }
}
```
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/edit_text_title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Title"
        android:ems="10"
        android:inputType="text"
        android:text="Title01" />

    <EditText
        android:id="@+id/edit_text_description"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:textSize="28sp"
        android:hint="Description"
        android:ems="10"
        android:inputType="text"
        android:text="Description01" />

    <EditText
        android:id="@+id/edit_text_priority"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Priority"
        android:inputType="number"
        android:text="3"
        android:textSize="24sp" />

    <EditText
        android:id="@+id/edit_text_tags"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Tags"
        android:inputType="text"
        android:text="tag1, tag2"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="addNote"
        android:text="Add" />

    <Button
        android:id="@+id/button2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:onClick="loadNotes"
        android:text="Load" />


    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical">
            <TextView
                android:id="@+id/text_view_data"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:textSize="24sp" />

        </LinearLayout>
    </ScrollView>


</LinearLayout>
```     
## 17 - NESTED OBJECTS  
[17 - NESTED OBJECTS](https://www.youtube.com/watch?v=errtXHEvzsc&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=17)  
```
package com.example.b3052fb;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    private EditText editTextTitle;
    private EditText editTextDescription;
    private EditText editTextPriority;
    private EditText editTextTags;
    private TextView textViewData;
    private View view;

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference notebookRef = db.collection("Notebook");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        view = findViewById(R.layout.activity_main);

        editTextTitle = findViewById(R.id.edit_text_title);
        editTextDescription = findViewById(R.id.edit_text_description);
        editTextPriority = findViewById(R.id.edit_text_priority);
        editTextTags = findViewById(R.id.edit_text_tags);
        textViewData = findViewById(R.id.text_view_data);

        updateNestedValue();
        this.loadNotes(view);
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public void addNote(View view) {
        String title = editTextTitle.getText().toString();
        String description = editTextDescription.getText().toString();
        if (editTextPriority.length() == 0) {
            editTextPriority.setText("0");
        }

        int priority = Integer.parseInt(editTextPriority.getText().toString());

        String tagInput = editTextTags.getText().toString();
        String[] tagArray = tagInput.split("\\s*,\\s*");
        Map<String, Boolean> tags = new HashMap<>();

        for(String tag: tagArray){
            tags.put(tag, true);
        }
        Note note = new Note(title, description, priority, tags);
        notebookRef.add(note);
    }

    public void loadNotes(View view) {
        notebookRef
                .whereEqualTo("tags.tag1", true)
                .get()
                .addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                    @Override
                    public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                        String data = "";

                        for(QueryDocumentSnapshot documentSnapshot: queryDocumentSnapshots){
                            Note note = documentSnapshot.toObject(Note.class);
                            note.setDocumentId(documentSnapshot.getId());

                            String documentId = note.getDocumentId();
                            data += "Document ID: " + documentId;

                            for(String tag: note.getTags().keySet()){
                                data += "\n - " + tag;
                            }
                            data += "\n";
                        }
                        textViewData.setText(data);
                    }
                });
    }

    private void updateNestedValue() {
        notebookRef.document("XjDFeFxDrHhSKbyaigdP")
//                .update("tags.tag1", false);
//                .update("tags.tag1", FieldValue.delete());
                 .update("tags.tag1.nested1.nested2", true);
    }
}
```
```
package com.example.b3052fb;

import com.google.firebase.firestore.Exclude;
import java.util.List;
import java.util.Map;

public class Note {
    private String documentId;
    private String title;
    private  String description;
    private int priority;
    Map<String, Boolean> tags;

    public Note() {
    }

    public Note(String title, String description, int priority, Map<String, Boolean> tags){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.tags = tags;
    }

    @Exclude
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public int getPriority() {
        return priority;
    }

    public Map<String, Boolean> getTags() {
        return tags;
    }
}
```  
## 18 - SUBCOLLECTIONS AND CONSIDERATIONS  
[18 - SUBCOLLECTIONS AND CONSIDERATIONS](https://www.youtube.com/watch?v=eej37qxPsPo&list=PLrnPJCHvNZuDrSqu-dKdDi3Q6nM-VUyxD&index=18)  
  