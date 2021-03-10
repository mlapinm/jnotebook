

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
### Gracefully Handling Exceptions
### C# Programming - Decision Statements And Handling Exceptions - Lesson Summary


## MODULE 9 C# Programming - Collections And Event-Driven Programming
In this module you will learn how to create and manage groups of related objects using collections. You will learn about Language-Integrated Query (LINQ) and how it offers a consistent model for working with data across various kinds of data sources and formats. You will learn how to use the C# WPF application and which parameters the AddHandler statement takes.  
### C# Programming - Collections And Event-Driven Programming - Learning Outcomes
### Working With Collections
### Filtering And Managing Data Collections Using LINQ
### Understanding Event-Driven Programming
### Where To Go From Here
### C# Programming - Collections And Event-Driven Programming - Lesson Summary

## MODULE 10 Diploma In C# Programming - Second Assessment
### You must score 80% or more to pass this assessment.
### Diploma In C# Programming - Second AssessmentStart Assessment
### Course Assessment: Diploma In C# Programming - Revised
## MODULE 11 Course Assessment

## footer

https://docs.microsoft.com/ru-ru/dotnet/core/tutorials/with-visual-studio-code  










