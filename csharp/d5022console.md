

## Learn How To Master The Fundamentals Of C Programming, From Simple Expressions To The Wpf Application.
##  Diploma in C# Programming - Resource Files and Links
## Section 1: C# Programming

## MODULE 1 Introduction To C# ProgrammingComplete

In this module you will learn how to install Visual Studio Express 2013 for Windows Desktop, how to use the C# programming language and how to review the written C# code for errors.  
### Introduction To C# Programming - Learning OutcomesTopic Completed
### IntroductionTopic Completed
### Installing Visual Studio ExpressTopic Completed
### Creating Your First C# ProgramTopic Completed
### Dissecting The First C# Program You CreatedTopic Completed
### Introduction To C# Programming - Lesson Summary

## MODULE 2 Using The Visual Studio Express Integrated Development Environment20% Complete
In this module you will learn how to put together the Visual C# Express Edition Integrated Development Environment. You will learn how to declare variables and assign values in C#, and how to create branches with the if .. else ... the conditional operator and the decision statement.  
### Using The Visual Studio Express Integrated Development Environment - Learning OutcomesTopic Completed
### Quick Overview Of The Visual C# Express Edition
### Declaring Variables And Assigning Values Duration
### Branching With The If Decision Statement And The Conditional Operator
```
            string message = "";
            int value = 1;
            value = 2;
            if(value == 1)
            {
                message = 1.ToString();
            } else if(value == 2)
            {
                message = 2.ToString();
            }
            Console.WriteLine(message);
            Console.ReadLine();
            //2

```

```
            string message = "";
            int value = 1;
            value = 2;

            message = value == 1 ? "1" : "2";
            //2
			
	message = value == 1 ? "1" 
		: value == 2 ? "2" 
		: "-1";

```


### Using The Visual Studio Express Integrated Development Environment - Lesson Summary
```
The following are windows that appear during the debug context in Visual Studio Express.
• Locals window
• Watch 1 windows
• Call Stack window
• Immediate Window

The Step Into button - Shortcut F11
The Step Over button - Shortcut F10
The Step Out button - Shortcut Shift + F11

Keyboard characters allow you to insert a comment into C# code: // keyboard characters
Keyboard characters allow you to comment out multiple lines of C# code: /* */
In Visual Studio Express the Code roll-up feature allows you hide blocks of code.

The yellow vertical bar on the left indicate that the file needs to be saved. 

When a data type is automatically converted from  one data type to another is known as Implicit data conversion. 

For predefined value types, the equality operator (= returns true if the values of its operands are equal, false otherwise.

Predefined value types: The equality operator (==) returns true if the values of its operands are equal, false otherwise.

Reference types other than string: The equality operator (==) returns true if its two operands refer to the same object.
The string type: The equality operator (==) compares the values of the strings.

if... then ... else conditional statements:
The conditional statement if., else in C# is used for checking the conditions in the head of if statement and making a decision based on that condition.


```
## MODULE 3 C# Programming - Working With For Iterations And Arrays
In this module you will learn how to write correct syntax for operators, expressions, and statements of duration. You will also learn how to declare and use for iterations, as well as create arrays of values and create and call simple overloaded helper methods.  
### C# Programming - Working With For Iterations And Arrays - Learning Outcomes

```


Upon successful completion of this module you will be able to:
Write correct syntax for operators, expressions, and statements of duration.
Declare and use for iterations.
Create arrays of values.
Create and call simple overloaded helper methods.



```

### Operators, Expressions And Statements Duration
```
==, != , <, >, <=, >=  

```

### For Iterations
```
            for(int i = 0; i < 10; i++)
            {
                message += " " + i;
            }
            // 0 1 2 3 4 5 6 7 8 9

```
### Creating Arrays Of Values
```
            int[] items = new int[5];
            for(int i = 0; i < items.Length; i++)
            {
                items[i] = i * 2;
            }
            for (int i = 0; i < items.Length; i++)
            {
                message += " " + items[i].ToString();
            }

```
### Creating And Calling Simple Overloaded Helper Methods
```
            int age = 33;
            string text = String.Format("Your age is {0}", age);
            //Your age is 33


```

```
        private static string readFile(string path)
        {
            //https://docs.microsoft.com/ru-ru/dotnet/api/system.io.file.opentext?view=netframework-4.8
            string text = "";
            if (!File.Exists(path))
            {
                // Create the file.
                using (FileStream fs = File.Create(path))
                {
                    Byte[] info =
                        new UTF8Encoding(true).GetBytes("This is some text in the file.");

                    // Add some information to the file.
                    fs.Write(info, 0, info.Length);
                }
            }

            // Open the stream and read it back.
            using (StreamReader sr = File.OpenText(path))
            {
                string s = "";
                while ((s = sr.ReadLine()) != null)
                {
                    text += s + "\n";
                }
            }
            return text;
        }

```

### C# Programming - Working With For Iterations And Arrays - Lesson Summary
```
Lesson Summary
In C# Programming statements are made up of one or more expressions.
In C# Programming expressions are made up of operators and operands.
In C# programming statements are made up of Expressions.
In C# programming expressions are made up of operators and operands

In C#, An operator is the name given to a program element that is applied to one or more operands in an expression.
unary operators - Operators that take one operand, such as the increment operator (++)
binary operators - Operators that take two operands, such as arithmetic operators (+,-,*,/)

The following are examples of operators:
 + operator : math and string concatenation
 = operator : variable assignment
 () operator : method invocation
 
 
In C# there are two 'conditional' operators that can be used to expand and enhance an evaluation.
The following is the conditional AND operator:    &&
The following is the conditional OR operator:  11

In C# conditional operators can be combined together.

The following is the equality operator: if (x==y) {}
The following is the less than or equal to operator: if (x<=y) {} 
x=3; is an example of an assignment operator

int x; is an example of a Declaration statement.
someValue = (3*x)/100; is an example of an Expression statement.
if (x > y)z-’John"; is an example of a Decision statement.


The following keywords are used in iteration statements:
• do 
• for
• in             

Iteration statements cause embedded statements to be executed a number of times, subject to the loop-termination criteria.

By using a for iteration loop, you can run a statement or a block of statements repeatedly until a specified expression evaluates to false.
i = 1; the initial value of variable i is established.
i <= 5; to evaluate the condition, the value of i is compared to 5.
i++ the iteration statement defines what happens after each iteration of the body of the loop

The keyword break allows you to break out of a for iteration loop.

The following is used to declare a single-dimensional integer array in C#: int[] numbers;
In C#, when declaring an array, the square brackets [] must come after the type, not the identifier.
In C#, arrays are zero indexed, that is, the array indexes start at zero.

The following is used to declare a single-dimensional string array in C#: string[] names;

The foreach statement repeats a group of embedded statements for each element in an array.

In C#, a method is a code block that contains a series of statements. A program causes the statements to be executed by calling the method and specifying any required method arguments.

Methods are declared in the following types of class:
Private
Public

Method parameters are enclosed in parentheses and are separated by commas.
The keyword void is used to indicate that the method doesn't return any value.


 

```
## MODULE 4 C# Programming - Working With While Iterations And Data Types
In this module you will learn how to declare and use while Iterations and Reading Data from a Text File. You will also learn how to code with Strings and with DateTime.  
### C# Programming - Working With While Iterations And Data Types - Learning Outcomes
```

Upon successful completion of this module you will be able to:
Declare and use while Iterations and Reading Data from a Text File.
Work with Strings.
Work with DateTime.

```
### While Iterations And Reading Data From A Text File
### Working With Strings
http://is.gd/string_format  
```
            text = "c\\tmp";
            //c\tmp


```

```
      int[] years = { 201, 2014, 2015 };
      int[] population = { 1025632, 110596, 1148203 };
      String s = String.Format("{0,-10} {1,-10}\n\n", "Year", "Population");
      for (int index = 0; index < years.Length; index++)
        s += String.Format("{0,-10} {1,10:N0}\n",
                           years[index], population[index]);
      Console.WriteLine($"\n{s}");
      // Result:
      //    Year       Population
      //
      //    013        1,025,632
      //    2014         105,967
      //    2015       1,148,203

```
https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#standard-format-specifiers  
```

      var i = 3;
      var s = $"{i,4:D2}";
      //  03

      var i = 3.3;
      var s = $"{i:C} ";
      s += $"{i:N3} ";
      i = 0.45;
      s += $"{i:P1} ";
      //3,30 ? 3,300 45,0%
      i = 1234567890;
      s += $"{i:(###) ###-####}";
      Console.WriteLine(s);
      //(123) 456-7890

      var s = "";
      StringBuilder sb = new StringBuilder();
      sb.Append("123");
      s = sb.ToString();
      //123

      var s = "0123456789";
      s = s.Substring(2, 3);
      //234

      var s = "Monkey";
      var s1 = s.ToUpper();
      var s2 = s.ToLower();
      //Monkey  MONKEY  monkey
      Console.Write(s + "  " + s1 + "  " + s2);

      var s = "That summer we took threes across the board.";
      s = s.Replace(" ", "--");
      Console.Write(s);
      //That--summer--we--took--threes--across--the--board.

      var s = " 2 ";
      var text = $"before - {s.Length} , after - {s.Trim().Length}";
      Console.Write(text);
      //before - 3 , after - 1

```
  
- p percent
- n number
- d decimal
- c currency

### Working With DateTime
```
      DateTime date = DateTime.Now;

      Console.WriteLine(date.ToString());
      //08.03.2021 13:51:27

      Console.WriteLine(date.ToShortDateString());
      Console.WriteLine(date.ToShortTimeString());
      //08.03.2021
      //13:53

      Console.WriteLine(date.ToLongDateString());
      Console.WriteLine(date.ToLongTimeString());
      //8 марта 2021 г.
      //13:56:28

      Console.WriteLine(date.AddDays(3).ToShortDateString());
      //11.03.2021

      DateTime date = DateTime.Now;

      var sWeek = $"{(int)date.DayOfWeek} - {date.DayOfWeek}";
      var sDate = $"{date.Day}.{date.Month}.{date.Year}";
      var sTime = $"{date.Hour}:{date.Minute}:{date.Second} {date.Ticks}";


      Console.WriteLine(sWeek);
      Console.WriteLine(sDate);
      Console.WriteLine(sTime);

      var str = date.ToString(@"yyyy/MM/dd hh:mm:ss tt", CultureInfo.InvariantCulture);
      Console.WriteLine(str);

      //1 - Monday
      //8.3.2021
      //14:38:35 637508111156503615
      //2021 / 03 / 08 02:38:35 PM

```

```
      DateTime firstMay = new DateTime(2021, 5, 1);
      Console.WriteLine((int)firstMay.DayOfWeek);
      //6
	  
	        DateTime date = DateTime.Now;


      DateTime birthday = DateTime.Parse("15/03/1969");
      birthday = birthday.AddYears(52);
      TimeSpan timeSpan = birthday.Subtract(date);
      Console.WriteLine(timeSpan);
      //6.08:18:05.9333587



```
### C# Programming - Working With While Iterations And Data Types - Lesson Summary
```
The key points from this module are:
The while iteration executes a statement or a block of statements until a specified expression evaluates to false.
The null value is an indeterminate or unknown value

The following are character escape sequences in C#:
• \\ Backslash
• \a Alert
• \n Newline
• \r Carriage return

The string.Format method converts the value of objects to strings based on the formats specified and inserts them into another string.
Concatenation is the process of appending one string to the end of another string.

The StringBuilder class represents a string of characters that is liable to change.
The DateTime class represents an instant in time, typically expressed as a date and time of day.

ToLongDateStringO will print out the following date format:   Monday, August 10, 2016

AddDaysO can be used to add three extra days to a date



```

## MODULE 5 Diploma In C# Programming - First Assessment
### You must score 80% or more to pass this assessment.
### Diploma In C# Programming - First AssessmentStart Assessment


### Section 2: C# Programming

## MODULE 6 C# Programming - Classes And Methods
In this module you will learn how to use classes and methods in C# programming and declare a new instance of a class. You will also learn how to work with classes and inheritances in the .NET Framework class library.  
### C# Programming - Classes And Methods - Learning Outcomes


```
Upon successful completion of this module you will be able to:
Describe the use of classes and methods in C# programming.
Describe how to declare a new instance of a class Work with classes and inheritances in the .NET Framework class library.

```


### Understanding And Creating Classes
### More About Classes And Methods
```
    static void Main(string[] args)
    {

      Car car = new Car();
      car.Make = "Oldmobile";
      car.Model = "Cutlas Supreme";
      car.Year = 1986;
      car.Color = "Silver";


      Console.WriteLine($"{car.Make} - {car.Model} - {car.Year} - {car.Color}");

      Car secondCar = new Car( "Ford",
                               "Escape",
                               2005,
                               "White" );

      double marketValueCar = determineMarketValue(car);

      Console.WriteLine(marketValueCar);

    }

    private static double determineMarketValue(Car car){
      double carValue = car.DetermineMarketValue();

      return carValue;
    }

    class Car{
      public string Make{ get; set; }
      public string Model{ get; set; }
      public int Year { get; set; }
      public string Color { get; set; }

      public Car(){

      }
      public Car(string make, string model, int year, string color){
        Make = make;
        Model = model;
        Year = year;
        Color = color;
      }

      public double DetermineMarketValue(){
          double carValue = 100.0;

          if(this.Year > 1990){
            carValue = 10000.0;
          
          }else{
            carValue = 2000.0;
          }
          return carValue;
      }
    }
  }


```


### Working With Classes And Inheritances In The .NET Framework Class Library

```
      Car secondCar = new Car( "Ford",
                               "Escape",
                               2005,
                               "White" );

      printCarDetails(secondCar);


    private static void printCarDetails(Car car){
      Console.WriteLine(car.Format());
    }


      public string Format(){
        string s = $"{Make} - {Model} - {Year} - {Color}";
        return s;
      }


```
http://is.gd/filestream  


### C# Programming - Classes And Methods - Lesson Summary
```
The key points from this module are:
In C# programming classes can be described as a container for a group related methods.
Example: class Sport { } is used to declare the class 'Sport' in C# programming.

In C#, every executed instruction is performed in the context of a method.
A method is a code block that contains a series of statements.
A program causes the statements to be executed by calling the method and specifying any required method arguments.

'new' is the keyword is used to create a new instance of a class.

In C# an object and a class are not considered to be the same.
In C# the name 'object' is given to a new instance of a class.
Example: The following creates a new instance of the class Car.
Car myCar = new CarQ;

Constructor - Class methods that are executed when an object of a given type is created.
Constructors have the same name as the class, and usually initialize the data members of the new object.
Constructor overloading - Name given to constructors with different sets of parameters

It is possible to call constructor from within another constructor.
static keyword - Used to declare a method and then call it without first creating an object because it becomes a class method.

The .NET framework class library is also known as the Base class library.
Inheritance is the ability to create a class from another class, the "parent" class, extending the functionality and state of the parent in the derived or "child" class.

The following are benefits of inheritance:
• Reuse the code functionality
• Speeds up implementation time 

C# does not support multiple inheritance.
Inheritance is the ability to create a class from another class.
• Base class - Derived class
• Parent class - Child class
• Super class - Sub class

FileStream class:
Provides a Stream for a file, supporting both synchronous and asynchronous read and write operations.
Functions of the FileStream class:
• Read from files on a file system
• Write to files on a file system
• Open files on a file system
• Close files on a file system

FileStream class - the following methods perform synchronous operations:
• Read method

FileStream class - the following methods perform asynchronous operations:
• WriteAsync method
• CopyToAsync method
• FlushAsync method 

FileStream inheritance hierarchy:
• System.Object
• System.MarshalByRefObject
• System.lO.Stream
• System.10.FileStream 

System. 10. IsolatedStorage.IsolatedStorageFileStream 

Stream class:
• It provides a generic view of a sequence of bytes.
• It is an abstract class.

The following are children of the System.10.Stream class:
• System.10.BufferedStream
• System.10.Pipes.PipeStream
• System. Printing. PrintQueueStream

Abstract classes:
It is a class that is designed to be specifically used as a base class.
It contains at least one pure virtual function.



• Write method
• CopyTo method


```
## MODULE 7 C# Programming - Namespaces And Modifiers
In this module you will learn how to code in C# using namespaces and add references to assemblies. You will also learn about scope and its use in C# programming. You will learn how to utilize accessibility modifiers.  
### C# Programming - Namespaces And Modifiers - Learning Outcomes
```

Upon successful completion of this module you will be able to:
Code in C# using namespace.
Add References to Assemblies.
Describe scope and its use in C# programming.
Utilize accessibility modifiers.

```
### Understanding Namespaces And Adding References To Assemblies
### Understanding Scope And Utilizing Accessibility Modifiers
### C# Programming - Namespaces And Modifiers - Lesson Summary
```
The key points from this module are:
Namespaces are C# program elements designed to help you organize your programs.

• It is used to declare a scope that contains a set of related objects.
• It can be used to organize code elements and to create globally unique types.
• It is designed for providing a way to keep one set of names separate from another.
• The class names declared in one namespace does not conflict with the same class names declared in another.


The StreamReader class implements a TextReader that reads characters from a byte stream in a particular encoding.

To invoke the StreamReader class:
• System.lO.StreamReader myStreamReader = new
• Sysyem.lO.StreamReaderO;

Examples of .NET framework namespaces:
• System.Core
• System.Data
• System.Xml

Scope of a variable refers to:
• Where the variable can be read from and/or written to
• The variable's lifetime
• How long the variable stays in memory

Accessibility modifiers:
• Public - Anywhere in or outside of a project
• Private - Only in the block where defined
• Protected - Can be used in the class where defined. Can be used within any inherited class

If you declare a variable within a block construct, that variable's scope is only until the end of the block.

Example: If you declare a variable within a block construct such as an If statement, the following statements are true:
• The variable's scope is only until the end of the block.
• The variable's lifetime is until the procedure ends.



```
## MODULE 8 C# Programming - Decision Statements And Handling Exceptions
In this module you will learn how to declare the switch decision statement, declare enumerations using the enum keyword, and use the try-catch statement when handling exceptions.  
### C# Programming - Decision Statements And Handling Exceptions - Learning Outcomes
```
Upon successful completion of this module you will be able to:
Describe how to filter and manage data collections using LINQ.
Use the C# Windows Presentation Foundation application for event-driven programming.

```
### Enumerations And The Switch Decision Statement

```
      Console.WriteLine("Type in a super hero's name to see his hickname:");
      string userValue = "superman";
      Console.WriteLine(userValue);
      switch(userValue.ToUpper()){
        case "BATMAN":
          Console.WriteLine("Caped Crusader");
          break;
        case "SUPERMAN":
          Console.WriteLine("Man of Steel");
          break;
        case "GREENLANTERN":
          Console.WriteLine("Emerald Knight");
          break;
        default:
          Console.WriteLine("Does not compute");
          break;
      }

```

```
      Console.WriteLine("ForegroundColor - " + Console.ForegroundColor);
      Console.WriteLine("ForegroundColor number - " + (int)Console.ForegroundColor);
      Console.BackgroundColor = ConsoleColor.Red;
 
      string[] colors = Enum.GetNames(typeof( ConsoleColor));
      Console.WriteLine("Count of colors - " + colors.Length);
      int k = 0;
      foreach(var color in colors){
        Console.WriteLine($"{k++:d2} {color}");
      }
//ForegroundColor - Gray
//ForegroundColor number -7
//Count of colors - 16
//00 Black
//01 DarkBlue
//02 DarkGreen
//03 DarkCyan
//04 DarkRed
//05 DarkMagenta
//06 DarkYellow
//07 Gray
//08 DarkGray
//09 Blue
//10 Green
//11 Cyan
//12 Red
//13 Magenta
//14 Yellow
//15 White

```

```
      SuperHero superHero = SuperHero.Superman;
      Console.WriteLine(superHero + " - " + (int)superHero);


```

```

      Console.WriteLine("Type in a superhero's name to see his nickname: ");
      string userValue = "Superman";

      SuperHero superHero;

      if(Enum.TryParse<SuperHero>(userValue, true, out superHero)){
        Console.WriteLine(superHero);
        switch (superHero)
        {
          case SuperHero.Batman:
            Console.WriteLine("Caped Crusader");
            break;
          case SuperHero.Superman:
            Console.WriteLine("Man of Steel");
            break;
          case SuperHero.GreenLantern:
            Console.WriteLine("Emerald Knight");
            break;
          default:
            break;
        }
      }else{
        Console.WriteLine("Does not compute");
      }
      Console.ReadLine();
    }

    enum SuperHero{
      Batman,
      Superman,
      GreenLantern
    }
    // Type in a superhero's name to see his nickname:
    // Superman
    // Man of Steel

```


### Gracefully Handling Exceptions
```
      string text = "";
      try
      {
        StreamReader reader = new StreamReader("values1.txt");
        string line = "";
        while(line != null){
           line = reader.ReadLine();
           if(line != null){
            text += line + "\n";
           }
          }

      }catch(Exception e){
          Console.WriteLine(e.Message);

      }finally{
        Console.WriteLine("finally");
        // Perform any cleanup to roll back the data or close connections
        // to files, database, network, etc.
      }
      Console.WriteLine(text);

```

### C# Programming - Decision Statements And Handling Exceptions - Lesson Summary


## MODULE 9 C# Programming - Collections And Event-Driven Programming
In this module you will learn how to create and manage groups of related objects using collections. You will learn about Language-Integrated Query (LINQ) and how it offers a consistent model for working with data across various kinds of data sources and formats. You will learn how to use the C# WPF application and which parameters the AddHandler statement takes.  
### C# Programming - Collections And Event-Driven Programming - Learning Outcomes
### Working With Collections
```
      ArrayList arrayList = new ArrayList();
      List<int> list = new List<int>();

      arrayList.Add(1);
      arrayList.Add("String");
      foreach (var e in arrayList)
      {
        Console.WriteLine(e);
      }
      // 1
      // String



      Dictionary<string, int> dict = new Dictionary<string, int>();
      dict.Add("first", 1);
      dict.Add("cecond", 2);
      Console.WriteLine(dict["first"]);
      foreach(var e in dict){
        Console.WriteLine(e.Key + " - " + e.Value);
      }
      //1
      //first - 1
      //second - 2

      List<Car> cars = new List<Car>
      {
        new Car {Make = "OldMobile", Model = "Cutlas Supreme"},
        new Car {Make = "Geo", Model = "Prism"},
        new Car {Make = "Nissan", Model = "Altima"},
      };

      foreach (var e in cars){
        Console.WriteLine(e.Format());
      }
      //OldMobile - Cutlas Supreme - 0 -
      //Geo - Prism - 0 -
      //Nissan - Altima - 0 -

```
### Filtering And Managing Data Collections Using LINQ
https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/working-with-linq  
```
            List<Car> myCars = new List<Car>() {
                new Car() { Make="BMW", Model="550i", Color=CarColor.Blue, StickerPrice=55000, Year=2009 },
                new Car() { Make="Toyota", Model="4Runner", Color=CarColor.White, StickerPrice=35000, Year=2010 },
                new Car() { Make="BMW", Model="745li", Color=CarColor.Black, StickerPrice=75000, Year=2008 },
                new Car() { Make="Ford", Model="Escape", Color=CarColor.White, StickerPrice=28000, Year=2008 },
                new Car() { Make="BMW", Model="550i", Color=CarColor.Black, StickerPrice=57000, Year=2010 }
            };


      // We'll add code here!
      /*
            var bmws = from car in myCars
                       where car.Make == "BMW"
                       && car.Year == 2010
                       //select car;
                       select new { car.Make, car.Model, car.Year };
      */
      var orderedCars = from car in myCars
                        orderby car.Year descending
                        select car;


            foreach (var car in orderedCars)
            {
                Console.WriteLine("{0} - {1} - {2}", car.Make, car.Model, car.Year);
            }

      //Toyota - 4Runner - 2010
      //BMW - 550i - 2010
      //BMW - 550i - 2009
      //BMW - 745li - 2008
      //Ford - Escape - 2008



```

```

var _bmws = myCars.Where(p => p.Year == 2010).Where(p => p.Make == "BMW");

      var _orderedCars = myCars.OrderByDescending(p => p.Year);

      var sum = myCars.Sum(p => p.StickerPrice);


```

### Understanding Event-Driven Programming
https://docs.microsoft.com/ru-ru/dotnet/desktop/wpf/introduction-to-wpf?view=netframeworkdesktop-4.8  
```
  public partial class MainWindow : Window
  {
    public MainWindow()
    {
      InitializeComponent();

      button.Click += buttonClicked;
    }

    private void buttonClicked(object sender, RoutedEventArgs e)
    {
      //throw new NotImplementedException();
      label.Content = "Hello World";
    }
  }


```

```
  public partial class WebForm1 : System.Web.UI.Page
  {
    protected void Page_Load(object sender, EventArgs e)
    {
      Button1.Click += ButtonClicked;

    }

    private void ButtonClicked(object sender, EventArgs e)
    {
      Label1.Text = "Hello World";
      //throw new NotImplementedException();
    }
  }


```
http://is.gd/application_lifecycle  
http://is.gd/page_lifecycle  
http://is.gd/wpf_lifetime  
  

### Where To Go From Here
### C# Programming - Collections And Event-Driven Programming - Lesson Summary
```
The key points from this module are:
For many applications, you want to create and manage groups of related objects.

The following are ways to group objects:
• Create arrays of objects
• Create collections of objects

A collection is a class, so you must declare an instance of the class before you can add elements to that collection.
Generic collection - A collection which enforces type safety so that no other data type can be added to it.

 The following statements is true about retrieving an element from a generic collection:
• You do not have to determine its data type or convert it.
• You do have to determine its data type or convert it.

Arrays - A fixed number of strongly-typed objects

Collections - Can grow and shrink dynamically as the needs of the application change.
For some collections, you can assign a key to any object that you put into the collection so that you can quickly retrieve the object by using the key.

The acronym LINQ stands for Language-Integrated Query

All LINQ query operations consist of the following distinct actions:
• Obtain the data source.
• Create the query.
• Execute the query.

LINQ offers a consistent model for working with data across various kinds of data sources and formats.
In LINQ the actual execution of the query is deferred until you iterate over the query variable in a foreach statement.
In LINQ the query results are retrieved using the for each statement.

In the C# WPF application the abbreviation 'WPF' stands for Windows Presentation Foundation.
In the C# WPF application, the acronym XAML stands for Extensible Application Markup Language

In the Initialized method of a project, the AddHandler statement registers the event.

The AddHandler statement takes the following parameters:
• A parameter that specifies the resource and event.
• A parameter that specifies the event handler method that will be run.




```
## MODULE 10 Diploma In C# Programming - Second Assessment
### You must score 80% or more to pass this assessment.  
```
When using the FileStream class which of the following methods perform synchronous operations? Choose three.
Duplicate method x
CopyTo method
Read method
Write method

True or False - Constructors have the same name as the class, and usually initialize the data members of the new object.
True v
False

Inheritance is the ability to create a class from another class. Click and drag the classes on the right to match the classes on the left.
Super class 
Sub 
class

Derived 
class
Base 
class

Parent 
class
Child class



In try-catch statements the catch clauses specify which of the following? 
Choose one.
Collections of different data types.
Enumerations of different objects.
Handlers for different exceptions. v


Which keyword is used to declare an enumerated type? 
Choose one.
declare keyword
enum keyword v
enumer keyword
enumer_Type keyword

Which of the following creates a new instance of the class Car? 
Choose one.
Car new myCar = Car();
Car myCar = new Car(); v
Car new car = myCar();
Car myCar() = new Car;

True or False - In C# programming a method defines an attribute of a class.
True x
False v

True or False - For some collections, you can assign a key to any object that you put into the collection so that you can quickly retrieve the object by using the key.
True v
False

When using the FileStream class which of the following methods perform asynchronous operations? Choose three.
DeleteAsync method x
FlushAsync method
CopyToAsync method
WriteAsync method

True or False - A method is a code block that contains a series of statements.
True v
False x

True or False - LINQ offers a consistent model for working with data across various kinds of data sources and formats.
True
False

Click and drag the statements on the right to match the headings on the left.
ArraysA fixed number of strongly-typed objects.CollectionsCan grow and shrink dynamically as the needs of the application change.
Can grow and shrink dynamically as the needs of the application change.

True or False - For the C# WPF application the abbreviation 'WPF' stands for Windows Presentation Foundation.
True v
False

True or False - A collection can only contain a fixed number of strongly-typed objects.
True
False

Which of the following type of collection enforces type safety so that no other data type can be added to it? Choose one.
Specific collection
Generic collection v
Standard collection
Normal collection

True or False - In C# programming Switch statements can evaluate only one variable while If…Else statements evaluate multiple variables.
True
False v

Click and drag the statements on the right to match the headings on the left.
Switch statementsCan evaluate multiple variablesIf … Else statementsEvaluates only one variable
Evaluates only one variable

Which of the following statements are true about using a finally block? 
Choose two.
You can clean up any resources that are allocated in a try block. v
You can run code even if an exception occurs in the try block. v
You can declare variables of an object using the finally statement.

True or False - LINQ only works with data from a relational database such as Microsoft SQL Server.
True
False

True or False - A collection is a class, so you must declare an instance of the class before you can add elements to that collection.
True v
False

All LINQ query operations consist of which of the following distinct actions? Choose three.
Execute the query. v
Create the query. v
Obtain the data source. v
Convert the query. x

True or False - In C# an object and a class are considered to be the same.
True
False v

True or False - It is not possible to use more than one specific catch clause in the same try-catch statement.
True
False v

In C# programming the try-catch statement consists of which of the following? Choose two.
One or more catch clauses
A try block
Two or more methods

What keyword can you use to declare a method and then call it without first creating an object because it becomes a class method? Choose one.
property keyword
void keyword
static keyword v

80


```
### Diploma In C# Programming - Second AssessmentStart Assessment
### Course Assessment: Diploma In C# Programming - Revised
## MODULE 11 Course Assessment
```
Which of the following is a correctly formatted code in C#? 
Choose one.
Console.WriteLine("Hello World"):
Console.WriteLine(Hello World);
Console.WriteLine("Hello World"); v

What feature in Visual Studio Express allows you to insert small blocks of reusable code in a code file using a combination of hotkeys? Choose one.
Code Snippets v
Code Blocks
Code Samples

Which of the following is used to declare the class 'Sport' in C# programming? Choose one.
NameClass Sport { }
className Sport { }
class Sport { }
sport Class { }


True or False - C# directly supports multiple inheritance.
True
False v


Click and drag the FileStream inheritance hierarchy into their correct order.
Drag answers into the correct sequence.
System.Object
System.MarshalByRefObject
System.IO.IsolatedStorage.IsolatedStorageFileStream
System.IO.FileStream
System.IO.Stream

Click and drag the FileStream inheritance hierarchy into their correct order.
Drag answers into the correct sequence.
System.Object
System.MarshalByRefObject
System.IO.IsolatedStorage.IsolatedStorageFileStream

Which of the following are functions of the FileStream class? 
Choose four.
Open files on a file system
Write to files on a file system
Read from files on a file system
Close files on a file system
Duplicate files on a file system x


The .NET framework class library is also known by which of the following? 
Choose one.
Central class library
Base class library v
Record class library

Which keyboard characters allow you to insert a comment into C# code? Choose one.
|| keyboard characters
// keyboard characters v
\\ keyboard characters

True or False - In C#, when declaring an array, the square brackets [] must come after the identifier, not the type.
True
False v

When using the FileStream class which of the following methods perform synchronous operations? Choose three.
Read method
Write method
CopyTo method
Duplicate method 

Which of the following statements is true about retrieving an element from a generic collection? Choose one.
A retrieved element can only contain a fixed number of variables.
You do not have to determine its data type or convert it. v
You have to determine the size of the element.


Click and drag the statements on the right to match the headings on the left.
Switch statementsCan evaluate multiple variablesIf … Else statementsEvaluates only one variable
Evaluates only one variable


Which of the following is the conditional OR operator? 
Choose one.
[]
()
||
<>


What is the name of the method in the piece of code below? Choose one.
 
static
Main v
void
string

In C# what keyword is used to create a new instance of a class? 
Choose one.
newClass
instance
new v
Classnew

someValue = (3*x)/100; is an example of which type of statement? 
Choose one.
Event statement
Declaration statement
Expression statement v

True or False - A collection can only contain a fixed number of strongly-typed objects.
True
False v

In the image below what does the yellow vertical bar on the left indicate? 
Choose one.
There is an error in the code. x
The file needs to be saved.  v
The code has been commented out.

What keyword can you use to declare a method and then call it without first creating an object because it becomes a class method? Choose one.
property keyword
static keyword v
void keyword

In Visual Studio Express what feature allows you hide blocks of code? 
Choose one.
Code roll-up feature v
Code hide feature
Code visible feature

Which of the following keywords allows you to break out of a for iteration loop? Choose one.
close
break v
stop
exit

True or False - The foreach statement repeats a group of embedded statements for each element in an array.
True v
False

Which of the following statements are true about the namespace keyword? Choose two.
It is designed for providing a way to keep one set of names separate from another. v
The class names declared in one namespace does not conflict with the same class names declared in another. v
It contains at least one pure virtual function.

True or False - C# is not case sensitive. Commands can be written using upper case or lower case letters.
True
False v

Which of the following is the equality operator? 
Choose one.
if (x==y) { }
if (x>y) { }
if (x+y) { }
if (x<=y) { }


Which of the following will print out the following date format? 
                            Monday, August 10, 2016
Choose one.
ToShortTimeString()
ToLongTimeString()
ToLongDateString() v
ToString()

In C# what name is given to a new instance of a class? 
Choose one.
An attribute
A function
An object v
A method


True or False - Concatenation is the process of appending one string to the end of another string.
True v
False

True or False - For predefined value types, the equality operator (==) returns true if the values of its operands are equal, false otherwise.
True v
False

True or False - If you declare a variable within a block construct, that variable's scope is only until the end of the block.
True v
False

In Visual Studio Express multiple projects can be managed in which of the following? Choose one.
Windows Explorer
File Explorer
Solution Explorer
.NET Explorer

In LINQ where are the query results retrieved? Choose one.
The results statement
The foreach statement v
The var statement x

True or False - The debug version of a C# application is the version which is usually released to the general public.
True
False

Which of the following is the correct statement for the FileStream class? 
Choose one.
Provides a Stream for a file, supporting both synchronous and asynchronous read and write operations. v
Provides a Stream for a file, only supporting synchronous read and write operations.
Provides a Stream for a file, only supporting asynchronous read and write operations.

True or False - In C# there are two 'conditional' operators that can be used to expand and enhance an evaluation.
True v
False

True or False - In C# programming Switch statements can evaluate only one variable while If…Else statements evaluate multiple variables.
True
False v

Which keyboard characters allow you to comment out multiple lines of C# code? Choose one.
<* *>
{* *}
/* */
|* *|
Choose one answer.


Which of the following are children of the System.IO.Stream class? 
Choose three.
System.IO.Pipes.PipeStream
System.IO.BufferedStream
System.Printing.PrintQueueStream
System.MarshalByRefObject x


When starting a new project in Visual Studio Express which of the applications do you select to start writing C# code? Click on the correct section in the image below.
conole.application


In try-catch statements the catch clauses specify which of the following? 
Choose one.
Collections of different data types.
Handlers for different exceptions. v
Enumerations of different objects.


93














```
## footer

https://docs.microsoft.com/ru-ru/dotnet/core/tutorials/with-visual-studio-code  










