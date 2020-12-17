1 [C# Console Project Visual Studio - YouTube](#C#-Console-Project-Visual-Studio---YouTube)  
2 [C# While Loop - YouTube](#C#-While-Loop---YouTube)  
3 [C# Switch Statement - YouTube](#C#-Switch-Statement---YouTube)  
4 [C# Stack Collection - YouTube](#C#-Stack-Collection---YouTube)  
5 [C# SortedList Class - YouTube](#C#-SortedList-Class---YouTube)  
6 [C# Read Text File - YouTube](#C#-Read-Text-File---YouTube)  
7 [C# Queue Collection Class - YouTube](#C#-Queue-Collection-Class---YouTube)  
8 [C# List Collection Class - YouTube](#C#-List-Collection-Class---YouTube)  
9 [C# Inheritance - YouTube](#C#-Inheritance---YouTube)  
10 [C# If Else Condition - YouTube](#C#-If-Else-Condition---YouTube)  
11 [C# Hashtable - YouTube](#C#-Hashtable---YouTube)  
12 [C# Functions - YouTube](#C#-Functions---YouTube)  
13 [C# For Loop - YouTube](#C#-For-Loop---YouTube)  
14 [C# For Each Loop - YouTube](#C#-For-Each-Loop---YouTube)  
15 [C# Exception Handling - YouTube](#C#-Exception-Handling---YouTube)  
16 [C# Do While Loop - YouTube](#C#-Do-While-Loop---YouTube)  
17 [C# Dictionary Collection - YouTube](#C#-Dictionary-Collection---YouTube)  
18 [C# Create Thread - YouTube](#C#-Create-Thread---YouTube)  
19 [C# Create Text File - YouTube](#C#-Create-Text-File---YouTube)  
20 [C# Create Class - YouTube](#C#-Create-Class---YouTube)  
21 [C# constructor - YouTube](#C#-constructor---YouTube)  
22 [C# Arrays - YouTube](#C#-Arrays---YouTube)  
23 [C# ArrayList Class - YouTube](#C#-ArrayList-Class---YouTube)  
24 [C# Append Data to Text File - YouTube](#C#-Append-Data-to-Text-File---YouTube)  
25 [C# Variables and Data Types - YouTube](#C#-Variables-and-Data-Types---YouTube)  
26 [C# Arithmetic Operators - YouTube](#C#-Arithmetic-Operators---YouTube)  
27 [C# Connect to SQLite Database - YouTube](#C#-Connect-to-SQLite-Database---YouTube)  
28 [C# Connect to MS SQL Server Database - YouTube](#C#-Connect-to-MS-SQL-Server-Database---YouTube)  
29 [C# Connect to Redis Database - YouTube](#C#-Connect-to-Redis-Database---YouTube)  
30 [Connect MySQL Database in C# - YouTube](#Connect-MySQL-Database-in-C#---YouTube)  
31 [Read MongoDB Document in C# - YouTube](#Read-MongoDB-Document-in-C#---YouTube)  
32 [Insert Data to MongoDB Database in C# - YouTube](#Insert-Data-to-MongoDB-Database-in-C#---YouTube)  
33 [C# Create Markdown File - YouTube](#C#-Create-Markdown-File---YouTube)  
34 [C# Read PDF File - YouTube](#C#-Read-PDF-File---YouTube)  
35 [C# Read JSON as Text File - YouTube](#C#-Read-JSON-as-Text-File---YouTube)  
36 [C# Read XML File - YouTube](#C#-Read-XML-File---YouTube)  
37 [C# Read TSV File - YouTube](#C#-Read-TSV-File---YouTube)  
38 [C# Read CSV File - YouTube](#C#-Read-CSV-File---YouTube)  
39 [C# Create XML File using LINQ - YouTube](#C#-Create-XML-File-using-LINQ---YouTube)  
40 [C# Create TSV File - YouTube](#C#-Create-TSV-File---YouTube)  
41 [Connect MS Access Database to C# Application - YouTube](#Connect-MS-Access-Database-to-C#-Application---YouTube)  
42 [Connect to SQL Server Compact using C# - YouTube](#Connect-to-SQL-Server-Compact-using-C#---YouTube)  
43 [Draw Graphics in C# - YouTube](#Draw-Graphics-in-C#---YouTube)  
44 [Google Search Using C# Script Console Application - YouTube](#Google-Search-Using-C#-Script-Console-Application---YouTube)  
[footer](#footer)  

## C# Console Project Visual Studio - YouTube  
[C# Console Project Visual Studio - YouTube]https://dotnet.microsoft.com/download
https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.404-windows-x64-installer
dotnet new console
- C# ms-dotnettools.csharp  
- https://dotnet.microsoft.com/download/dotnet-core
- dotnet new console
- dotnet run
## winform
- https://www.youtube.com/watch?v=1HZBlw3xsak
- PowerShell
- dotnet new winforms
- dotnet run  
https://code.visualstudio.com/docs/languages/csharp  
https://docs.microsoft.com/ru-ru/dotnet/api/system.collections.queue?view=netframework-4.8#examples  


```
using System;

namespace d2022hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```


## C# While Loop - YouTube  
[C# While Loop - YouTube](https://www.youtube.com/watch?v=f_RQMIY8H3U&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=43)  
```
           int a = 10;

            while(a < 20){
                Console.WriteLine("Value of a: " + a);
                a++;
            }
            Console.Read();

Value of a: 10
Value of a: 11
Value of a: 12
Value of a: 13
Value of a: 14
Value of a: 15
Value of a: 16
Value of a: 17
Value of a: 18
Value of a: 19
```
  
## C# Switch Statement - YouTube  
[C# Switch Statement - YouTube](https://www.youtube.com/watch?v=5Jnb2ifDZx4&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=42)  
```
            string color = "yellow";

            switch(color){
                case "white":
                Console.WriteLine("white");
                break;
                case "blue":
                Console.WriteLine("blue");
                break;
                default:
                Console.WriteLine("invalid color : " + color);
                break;
            }
			// invalid color : yellow
```  
## C# Stack Collection - YouTube  
[C# Stack Collection - YouTube](https://www.youtube.com/watch?v=k_NHIJ-zB4k&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=41)  

```
using System.Collections.Generic;


            Stack<String> st = new Stack<String>();
            st.Push("abc");
            st.Push("bbc");
            st.Push("cbc");
            st.Push("dbc");

            Console.WriteLine(st.Pop() + " pop");

            foreach(String v in st){
                Console.WriteLine(v);
            }
            Console.Read();
```
  
## C# SortedList Class - YouTube  
[C# SortedList Class - YouTube](https://www.youtube.com/watch?v=gHd4hmqPm18&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=40)  
```
using System.IO;
using System.Text;

            SortedList<String, String> st = new SortedList<String, String>();
            st.Add("01", "abc");
            st.Add("02", "bbc");
            st.Add("03", "cbc");
            st.Add("04", "dbc");

            ICollection<String> keys = st.Keys;

            foreach(String k in keys){
                Console.WriteLine(k + " - " + st[k]);
            }
            Console.ReadLine();
// 01 - abc
// 02 - bbc
// 03 - cbc
// 04 - dbc
```  
## C# Read Text File - YouTube  
[C# Read Text File - YouTube](https://www.youtube.com/watch?v=1KoQpdoreVc&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=39)  
```
            try{
                string text1;
                var FileStream = new FileStream(@"./d2022.txt",
                FileMode.Open, FileAccess.Read);

                using(var StreamReader = new StreamReader(FileStream, Encoding.UTF8)){
                    text1 = StreamReader.ReadToEnd();
                }

                Console.WriteLine(text1);

            }catch(Exception e){
                Console.WriteLine(e);
            }

            Console.Read();
// sunday
// monday
```  
## C# Queue Collection Class - YouTube  
[C# Queue Collection Class - YouTube](https://www.youtube.com/watch?v=kgmfFQ5SYK8&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=38)  

```
using System.Collections;

            Queue qt = new Queue();

            qt.Enqueue('A');
            qt.Enqueue('B');
            qt.Enqueue('C');
            qt.Enqueue('D');

            qt.Dequeue();
            foreach(char c in qt){
                Console.WriteLine(c);
            }

            Console.Read();
// B
// C
// D
```
  
## C# List Collection Class - YouTube  
[C# List Collection Class - YouTube](https://www.youtube.com/watch?v=_F6FHUxjT08&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=37)  
```
using System.Collections.Generic;

            List<String> lt = new List<string>();
            lt.Add("abc");
            lt.Add("bbc");
            lt.Add("cbc");
            lt.Add("dbc");

            foreach(String value in lt){
                Console.WriteLine(value);
            }

            Console.Read();
// abc
// bbc
// cbc
// dbc
```  
## C# Inheritance - YouTube  
[C# Inheritance - YouTube](https://www.youtube.com/watch?v=_duFHdJBZ8c&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=36)  
```

        class addition{
            protected int x = 3;
            protected int y = 4;
        }

        class multiply : addition{
            public int result(){
                return x*y;
            }
        }


        static void Main(string[] args)
        {
            multiply obj = new multiply();
            Console.WriteLine(obj.result());

            Console.Read();
        }
        // 12
```  
## C# If Else Condition - YouTube  
[C# If Else Condition - YouTube](https://www.youtube.com/watch?v=0pA2iT1EnOs&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=35)  
```
            int a = 30;

            if(a<20){
                Console.WriteLine("a is less than 20");
            }else{
                Console.WriteLine("a is greater than 20");
            }

            Console.Read();
        }
        // a is greater than 20
```  
## C# Hashtable - YouTube  
[C# Hashtable - YouTube](https://www.youtube.com/watch?v=equBeaoP6ls&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=34)  
```
using System.Collections;

Hashtable hashtable = new Hashtable();

hashtable.Add("01", "abc");
hashtable.Add("02", "bbc");
hashtable.Add("03", "cbc");
hashtable.Add("04", "dbc");

ICollection keys = hashtable.Keys;

foreach(String key in keys){
	Console.WriteLine(key + " : " + hashtable[key]);
}

 Console.Read();
// 01 : abc
// 04 : dbc
// 03 : cbc
// 02 : bbc        
```  
## C# Functions - YouTube  
[C# Functions - YouTube](https://www.youtube.com/watch?v=jqcMBsmEH9I&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=33)  
```
public static int Add(int x, int y){
	return x + y;
}
static void Main(string[] args)
{
	int result = Add(3, 4);
	Console.WriteLine(result);
}
// 7
```  
## C# For Loop - YouTube  
[C# For Loop - YouTube](https://www.youtube.com/watch?v=LaRSlbCEius&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=32)  
```
for(int i=10;i<20;i++){
	Console.WriteLine("Value of i : " + i);
}

Console.Read();

// Value of i : 10
// Value of i : 11
// Value of i : 12
// Value of i : 13
// Value of i : 14
// Value of i : 15
// Value of i : 16
// Value of i : 17
// Value of i : 18
// Value of i : 19
```  
## C# For Each Loop - YouTube  
[C# For Each Loop - YouTube](https://www.youtube.com/watch?v=eUzPj57sxvU&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=31)  
```
String[] color = {"blue", "yellow", "red", "green"};

foreach(String value in color){
	Console.WriteLine(value);
}

Console.Read();
// blue
// yellow
// red
// green
```  
## C# Exception Handling - YouTube  
[C# Exception Handling - YouTube](https://www.youtube.com/watch?v=apjJn1bV7jU&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=30)  
```
try{
	int count = Convert.ToInt16("22");
	Console.WriteLine(count);
}catch(Exception e){
	Console.WriteLine(e);
}finally{
	Console.WriteLine("String to int failed");
}
```  
## C# Do While Loop - YouTube  
[C# Do While Loop - YouTube](https://www.youtube.com/watch?v=n9GXhA8V6qc&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=29)  
```
int a = 10;
do{
	Console.WriteLine("Value of A : " + a);
	a++;
}while(a < 21);
// Value of A : 10
// Value of A : 11
// Value of A : 12
// Value of A : 13
// Value of A : 14
// Value of A : 15
// Value of A : 16
// Value of A : 17
// Value of A : 18
// Value of A : 19
// Value of A : 20
```  
## C# Dictionary Collection - YouTube  
[C# Dictionary Collection - YouTube](https://www.youtube.com/watch?v=pwI4r1KO5HQ&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=28)  
```
using System.Collections.Generic;

Dictionary<String, int> dic = new Dictionary<String, int>(){
	{"abc", 1},
	{"bbc", 2},
	{"cbc", 3},
	{"dbc", 4}
};

foreach(KeyValuePair<String, int> pair in dic){
	Console.WriteLine("{0}, {1}", pair.Key, pair.Value);
}
// abc, 1
// bbc, 2
// cbc, 3
// dbc, 4            
```  
## C# Create Thread - YouTube  
[C# Create Thread - YouTube](https://www.youtube.com/watch?v=NL9fcmkPW3g&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=27)  
```
try{
	Thread thread = new Thread(new ThreadStart(stuff));
	thread.Start();
}catch(Exception e){
	Console.WriteLine(e);
}

static void stuff(){
	Console.WriteLine("Thread 1 running");
}
```  
## C# Create Text File - YouTube  
[C# Create Text File - YouTube](https://www.youtube.com/watch?v=av1ZuT8Lf3A&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=26)  
```
try{
	TextWriter textWriter = new StreamWriter("./new02.txt", true);
	textWriter.WriteLine("123");
	textWriter.Close();
	Console.WriteLine("File Worked");
}catch(Exception e){
	Console.WriteLine(e);
}
```  
## C# Create Class - YouTube  
[C# Create Class - YouTube](https://www.youtube.com/watch?v=npxJIL8MpwQ&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=25)  
  
## C# constructor - YouTube  
[C# constructor - YouTube](https://www.youtube.com/watch?v=XBk3ZDOSB3o&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=24)  
  
## C# Arrays - YouTube  
[C# Arrays - YouTube](https://www.youtube.com/watch?v=q0Zgq5thQ3s&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=23)  
  
## C# ArrayList Class - YouTube  
[C# ArrayList Class - YouTube](https://www.youtube.com/watch?v=vkwyY_gfTB4&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=22)  
  
## C# Append Data to Text File - YouTube  
[C# Append Data to Text File - YouTube](https://www.youtube.com/watch?v=8Z74n03bj2Y&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=21)  
  
## C# Variables and Data Types - YouTube  
[C# Variables and Data Types - YouTube](https://www.youtube.com/watch?v=CDSg9gd7bas&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=20)  
  
## C# Arithmetic Operators - YouTube  
[C# Arithmetic Operators - YouTube](https://www.youtube.com/watch?v=B5-sFa0DUD4&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=19)  
  
## C# Connect to SQLite Database - YouTube  
[C# Connect to SQLite Database - YouTube](https://www.youtube.com/watch?v=APVit-pynwQ&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=18)  
  
## C# Connect to MS SQL Server Database - YouTube  
[C# Connect to MS SQL Server Database - YouTube](https://www.youtube.com/watch?v=R-6GAP9Tpcs&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=17)  
  
## C# Connect to Redis Database - YouTube  
[C# Connect to Redis Database - YouTube](https://www.youtube.com/watch?v=KvQJFzI765c&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=16)  
  
## Connect MySQL Database in C# - YouTube  
[Connect MySQL Database in C# - YouTube](https://www.youtube.com/watch?v=bRmKK7nUMFo&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=15)  
  
## Read MongoDB Document in C# - YouTube  
[Read MongoDB Document in C# - YouTube](https://www.youtube.com/watch?v=AKN2BSLsUe8&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=14)  
  
## Insert Data to MongoDB Database in C# - YouTube  
[Insert Data to MongoDB Database in C# - YouTube](https://www.youtube.com/watch?v=ARpCSzW2eOg&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=13)  
  
## C# Create Markdown File - YouTube  
[C# Create Markdown File - YouTube](https://www.youtube.com/watch?v=X_U664aKUeU&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=12)  
  
## C# Read PDF File - YouTube  
[C# Read PDF File - YouTube](https://www.youtube.com/watch?v=e1b9oZHByyE&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=11)  
  
## C# Read JSON as Text File - YouTube  
[C# Read JSON as Text File - YouTube](https://www.youtube.com/watch?v=P7piom9c3U4&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=10)  
  
## C# Read XML File - YouTube  
[C# Read XML File - YouTube](https://www.youtube.com/watch?v=IfhXq049WWo&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=9)  
  
## C# Read TSV File - YouTube  
[C# Read TSV File - YouTube](https://www.youtube.com/watch?v=dactPqYXjCI&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=8)  
  
## C# Read CSV File - YouTube  
[C# Read CSV File - YouTube](https://www.youtube.com/watch?v=I-ZWSxGM_8s&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=7)  
  
## C# Create XML File using LINQ - YouTube  
[C# Create XML File using LINQ - YouTube](https://www.youtube.com/watch?v=ciDtY0Aj_Cc&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=6)  
  
## C# Create TSV File - YouTube  
[C# Create TSV File - YouTube](https://www.youtube.com/watch?v=e3HCb0eZClQ&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=5)  
  
## Connect MS Access Database to C# Application - YouTube  
[Connect MS Access Database to C# Application - YouTube](https://www.youtube.com/watch?v=h5cOU65WA-c&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=4)  
  
## Connect to SQL Server Compact using C# - YouTube  
[Connect to SQL Server Compact using C# - YouTube](https://www.youtube.com/watch?v=IherHtwBGXY&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=3)  
  
## Draw Graphics in C# - YouTube  
[Draw Graphics in C# - YouTube](https://www.youtube.com/watch?v=pV0M-za-7eI&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=2)  
  
## Google Search Using C# Script Console Application - YouTube  
[Google Search Using C# Script Console Application - YouTube](https://www.youtube.com/watch?v=qgRgxhxFTUU&list=PLUY1lsOTtPeL7c58TruqNKAEwxNUBAy7b&index=1)  

## footer
[setup](d4022setup.md)  