[learn-c-sharp](https://www.codecademy.com/learn/learn-c-sharp)  


```python

```

```
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("Michael");    
     }
  }
}
```

Hello World
LESSON
Learn about the C# programming language: what is it, how it’s used, and why you should learn it.

Exercises

1. What is C#?

2. Run Some C#  
dotnet run  
```
using System;

namespace GettingInput
{
  class Program
  {
    static void Main()
    {
      Console.WriteLine("How old are you?");
      string input = Console.ReadLine();
      Console.WriteLine($"You are {input} years old!");
    }
  }
}
```
3. Getting Input

4. Comments  
////your age  
5. C# in the Wild  

6. Review

#### Data Types and Variables
LESSON
Learn about the basics of data types and creating variables in C#.

Exercises

1. Introduction to Data Types and Variables in C#

2. C# Data Types

3. Creating Variables with Types  
string, int, double, bool  
4. Handling Errors  

5. Converting Data Types
```
using System;

namespace FavoriteNumber
{
  class Program
  {
    static void Main(string[] args)
    {
      // Ask user for fave number
      Console.Write("Enter your favorite number!: ");
int faveNumber = Convert.ToInt32(Console.ReadLine());
      // Turn that answer into an int
Console.WriteLine(faveNumber);


    }
  }
}
```
6. Review

#### Working with Numbers
LESSON
Learn how to write short programs with numbers.

Exercises

1. Introduction to Working with Numbers

2. Numerical Data Types  
decimal variableName = 489872.76m;  
3. Arithmetic Operators

4. Operator Shortcuts

5. Modulo

6. Built-In Methods

7. Using Documentation  
Math.Pow()  
Math.Max()  
Math.Ceiling()  
8. Review  
Close and return to main application


#### Working with Text
LESSON
Learn how to write short programs with text.

Exercises

1. Introduction to Working with Text

2. Building Strings  
\"  
3. String Concatenation
```
      // Declare the variables
string beginning = "1";
string middle = "2";
string end = "3";

      // Concatenate the string and the variables
string story = beginning + middle + end;

      // Print the story to the console 
Console.WriteLine(story);
```
4. String Interpolation  
string story = $"{beginning}{middle}{end}";  
5. Get Info About Strings  
```
      // Create password
      string password = "a92301j2add";

      // Get password length
int passwordLength = password.Length;

      // Check if password uses symbol
int passwordCheck = password.IndexOf("!");
```
6. Get Parts of Strings
```
      // User Name
      string name = "Farhad Hesam Abbasi";

      // Get first letter
int charPosition = name.IndexOf("F");
char firstLetter = name[charPosition];

      // Get last name
charPosition = name.IndexOf("Abbasi");
string lastName = name.Substring(charPosition);
      // Print results
Console.WriteLine(lastName);
```
7. Manipulate Strings
```
using System;

namespace MovieScript
{
  class Program
  {
    static void Main(string[] args)
    {
      // Script line
      string script = "Close on a portrait of the HANDSOME PRINCE -- as the BEAST'S giant paw slashes it.";

      // Get camera directions
      int charPosition = script.IndexOf("Close");
      int length = "Close on".Length;
      string cameraDirections = script.Substring(charPosition, length);

      // Get scene description
      charPosition = script.IndexOf("a portrait");
      string sceneDescription = script.Substring(charPosition);

      // Make camera directions uppercase
cameraDirections = cameraDirections.ToUpper();

      // Make scene description lowercase
sceneDescription = sceneDescription.ToLower();

      // Print results
Console.WriteLine(cameraDirections + " " + sceneDescription);
    }
  }
}
// CLOSE ON a portrait of the handsome prince -- as the beast's giant paw slashes it.
```
8. Review

```
using System;

namespace MadTeaParty
{
  class Program
  {
    static void Main(string[] args)
    {
      string drink = "wine";
      string madTeaParty = $"\"Have some {drink},\" the March Hare said in an encouraging tone. \nAlice looked all round the table, but there was nothing on it but tea.\n\"I don't see any {drink},\" she remarked.\n\"There isn't any,\" said the March Hare.";

      int storyLength = madTeaParty.Length;
      string toFind = "March Hare";

      string findLowerCase = toFind.ToLower(); 
      int findMarchHare = madTeaParty.IndexOf(toFind);

      Console.WriteLine(madTeaParty.Substring(findMarchHare));
      Console.WriteLine($"This scene is {storyLength} long.\n");
      Console.WriteLine($"The term we're looking for is {toFind} and is located at index {findMarchHare}.");

    }
  }
}
```

```
March Hare said in an encouraging tone. 
Alice looked all round the table, but there was nothing on it but tea.
"I don't see any wine," she remarked.
"There isn't any," said the March Hare.
This scene is 211 long.

The term we're looking for is March Hare and is located at index 22.
```

#### Understanding Logic in C#
LESSON
Learn about how Boolean logic works in C#.

Exercises

1. Introduction to Logic in C#

2. Boolean Data Types

3. Comparison Operators

4. Truth Table

5. Logical Operators

6. Review
Close and return to main application


#### Understanding Logic in C#
LESSON
Learn about how Boolean logic works in C#.

Exercises

1. Introduction to Logic in C#

2. Boolean Data Types
```
bool answerOne = true;
bool answerTwo = false; 
```
3. Comparison Operators
```
double timeToDinner = 4;
double distance = 95;
double rate = 30;
double tripDuration = distance/rate;
bool answer = tripDuration <= timeToDinner;
Console.WriteLine(answer);
```
4. Truth Table

5. Logical Operators

6. Review
Close and return to main application


#### Understanding Logic in C#
LESSON
Learn about how Boolean logic works in C#.

Exercises

1. Introduction to Logic in C#

2. Boolean Data Types

3. Comparison Operators

4. Truth Table

5. Logical Operators

6. Review
Close and return to main application


#### Understanding Logic in C#
LESSON
Learn about how Boolean logic works in C#.

Exercises

1. Introduction to Logic in C#

2. Boolean Data Types

3. Comparison Operators

4. Truth Table

5. Logical Operators
```
      bool beach = true;
      bool hiking = false;
      bool city = true;

      bool yourNeeds = beach && city;
      bool friendNeeds = beach && city;
      bool tripDecision = yourNeeds && friendNeeds;
      Console.WriteLine(tripDecision);
```
6. Review
Close and return to main application


#### Conditional Statements
LESSON
Learn how to use conditional and switch statements to add logic to programs.

Exercises

1. Introduction to Conditional Statements

2. If Statements

3. If...Else... Statements

4. Else If Statements

5. Switch Statements

6. Ternary Operators

7. Review
Close and return to main application


#### Conditional Statements
LESSON
Learn how to use conditional and switch statements to add logic to programs.

Exercises

1. Introduction to Conditional Statements

2. If Statements
```
      int socks = 3;
if(socks <= 3){
  Console.WriteLine("Time to do laundry!");
}
```
3. If...Else... Statements
```
      int people = 12;
      string weather = "bad";
  if(people <= 10 && weather == "nice"){
    Console.WriteLine("SaladMart");
  }else{
    Console.WriteLine("Soup N Sandwich");
  }

```
4. Else If Statements
```
   int guests = 3;
if (guests >= 4){
  Console.WriteLine("Catan");
}else if(guests >= 1){
  Console.WriteLine("Innovation");
}else {
  Console.WriteLine("Solitaire");
}
```
5. Switch Statements
```
using System;

namespace SwitchStatement
{
  class Program
  {
    static void Main(string[] args)
    {
string genre = Console.ReadLine();
switch(genre){
  case "Drama":
Console.WriteLine("Citizen Kane");
    break;
  case "Comedy":
Console.WriteLine("Duck Soup");
    break;
  case "Adventure":
Console.WriteLine("King Kong");
    break;
  case "Horror":
Console.WriteLine("Psycho");
    break;
  case "Science Fiction":
Console.WriteLine("2001: A Space Odyssey");
    break;
    default:
Console.WriteLine("No movie found");
    break;

}
    }
  }
}
```
6. Ternary Operators
```
using System;

namespace TernaryOperator
{
  class Program
  {
    static void Main(string[] args)
    {
      int pepperLength = 4;
string message = "pepperLength >= 3.5";
      message = (pepperLength >= 3.5) ? "ready!" : "wait a little longer";
     Console.WriteLine(message);


    }
  }
}
```
7. Review
Close and return to main application


#### Method Calls and Input
LESSON
Learn to recognize methods, call them with multiple arguments, capture their returned values, and define a basic method yourself.

Exercises

1. Introduction to Methods

2. Call a Method

3. Capture Output

4. Define a Method

5. Define Parameters

6. A Note on Parameters

7. Optional Parameters

8. Named Arguments

9. Method Overloading

10. Review

#### Method Calls and Input
LESSON
Learn to recognize methods, call them with multiple arguments, capture their returned values, and define a basic method yourself.

Exercises

1. Introduction to Methods

2. Call a Method
```
      string msg = "Yabba dabba doo!";
      Math.Min(1,3);
      Console.WriteLine(msg);
      msg.Substring(0,1);
```
3. Capture Output
```
      string designer = "Anders Hejlsberg";
      int indexOfSpace = designer.IndexOf(" ");
      string secondName = designer.Substring(indexOfSpace+1);
      Console.WriteLine(secondName);
```
4. Define a Method
```
using System;

namespace DefineAMethod
{
  class Program
  {
    static void VisitPlanets(){
      Console.WriteLine("You visited many new planets…");
    }
    static void Main(string[] args)
    {
      VisitPlanets();
    }
  }
}
```
5. Define Parameters
```
using System;

namespace DefineParameters
{
  class Program
  {
    static void Main(string[] args)
    {
      VisitPlanets(1);
      VisitPlanets(3);
      VisitPlanets(4);
    }
    
    static void VisitPlanets(int numberOfPlanets)
    {
      Console.WriteLine($"You visited {numberOfPlanets} new planets...");
    }
  }
}
```
6. A Note on Parameters

7. Optional Parameters
```
    static void VisitPlanets(int numberOfPlanets = 0)
```
8. Named Arguments
```
using System;

namespace NamedArguments
{
  class Program
  {
    static void Main(string[] args)
    {
  VisitPlanets();
  VisitPlanets(numberOfPlanets:2);
    }
    
    static void VisitPlanets(
      string adjective = "brave",
      string name = "Cosmonaut", 
      int numberOfPlanets = 0,
      double gForce = 4.2)
    {
      Console.WriteLine($"Welcome back, {adjective} {name}.");
      Console.WriteLine($"You visited {numberOfPlanets} new planets...");
      Console.WriteLine($"...while experiencing a g-force of {gForce} g!");
    }
  }
}
```
9. Method Overloading
```
using System;

namespace MethodOverloading
{
  class Program
  {
    static void Main(string[] args)
    {
NamePets("Laika", "Albert");
NamePets("Mango", "Puddy", "Bucket");
NamePets();
    }
   static void NamePets(string s1, string s2){
  Console.WriteLine($"Your pets {s1} and {s2} will be joining your voyage across space!");   
   } 
   static void NamePets(string s1, string s2, string s3){
  Console.WriteLine($"Your pets {s1}, {s2} and {s3} will be joining your voyage across space!");   
   }
    static void NamePets(){
  Console.WriteLine("Aw, you have no spacefaring pets :(");    
    }
  }
}
```
10. Review

#### Method Output
LESSON
Define methods with output and recognize and resolve errors related to method output

Exercises

1. Introduction to Method Output

2. Return

3. Return Errors

4. Out

5. Using Out

6. Out Errors

7. Review

#### Method Output
LESSON
Define methods with output and recognize and resolve errors related to method output

Exercises

1. Introduction to Method Output

2. Return

3. Return Errors

4. Out  
public static bool TryParse (string s, out int result);  
```
using System;

namespace OutParameters
{
  class Program
  {
    static void Main(string[] args)
    {
      string ageAsString = "102";
      string nameAsString = "Granny";
      int ageAsInt;
      bool outcome;
      outcome =  Int32.TryParse(ageAsString, out ageAsInt);
      Console.WriteLine(outcome);
 Console.WriteLine(ageAsInt);
    }    
	}
}
```
5. Using Out
```
using System;

namespace UsingOut
{
  class Program
  {
    static void Main(string[] args)
    {
 bool b1;
      Console.WriteLine(Whisper("AAA", out b1));     
    }
  static string Whisper(string s1, out bool b1){
    b1 = true;
    return s1.ToLower();
  }
	}
}
```
6. Out Errors

7. Review

#### Alternate Expressions
LESSON
Learn other ways to write methods in C#

Exercises

1. Introduction to Alternate Expressions

2. Expression-bodied Definitions

3. Methods as Arguments

4. Lambda Expressions

5. Shorter Lambda Expressions

6. Review

#### Alternate Expressions
LESSON
Learn other ways to write methods in C#

Exercises

1. Introduction to Alternate Expressions

2. Expression-bodied Definitions
```
using System;

namespace AlternateExpressions
{
  class Program
  {
    static void Main(string[] args)
    {
      Welcome("Earth");
      double days = 500;
      double rotations = DaysToRotations(days);
      Console.WriteLine($"In {days} days, the Earth has rotated {rotations} time(s).");
    } 
    
    // static double DaysToRotations(double days)
    // {
    //   return days / 365;
    // }
    static double DaysToRotations(double days) => days / 365;
    
    // static void Welcome(string planet)
    // {
    //   Console.WriteLine($"Welcome to {planet}!");
    // }
    static void Welcome(string planet) => Console.WriteLine($"Welcome to {planet}!");
  }
}
```
3. Methods as Arguments
```
using System;

namespace AlternateExpressions
{
  class Program
  {
  	// Method to be used as second argument
   	public static bool IsLong(string word)
    {
      return word.Length > 8;
    }
      
    static void Main(string[] args)
    {
      // Array to be used as first argument
      string[] adjectives = {"rocky", "mountainous", "cosmic", "extraterrestrial"};
     
      // Call Array.Find() and 
      // Pass in the array and method as arguments
      string firstLongAdjective = Array.Find(adjectives, IsLong);
      
      Console.WriteLine($"The first long word is: {firstLongAdjective}.");
    }
  }
}
```
4. Lambda Expressions
```
      bool makesContact = Array.Exists(spaceRocks, (string s) => s == "meteorite");
```
5. Shorter Lambda Expressions  
Array.Exists(spaceRocks, (s) => s == "meteorite");  
6. Review

#### Arrays
LESSON
Learn about how to build and use arrays in C#.

Exercises

1. Introduction to Arrays

2. Building Arrays

3. Array Length

4. Accessing Array Items

5. Editing Arrays

6. Built-In Methods

7. Documentation Hunt

8. Review
Close and return to main application

#### Arrays
LESSON
Learn about how to build and use arrays in C#.

Exercises

1. Introduction to Arrays

2. Building Arrays
```
string[] summerStrut;        
summerStrut = new string[]{"Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles",};
int[] ratings = new int[]{1,1,1,1,1,1,1,1,};
```
3. Array Length
```
      string[] summerStrut;

      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
if(summerStrut.Length == 8){
  Console.WriteLine("summerStrut Playlist is ready to go!");
}else if(summerStrut.Length > 8){
  Console.WriteLine("Too many songs!");
}else {
  Console.WriteLine("Add some songs!");
}
```
4. Accessing Array Items
```
Console.WriteLine($"You rated the song {summerStrut[1]} {ratings[1]} stars.");
```
5. Editing Arrays
```
summerStrut[7] = "I Like It";   
ratings[7] = 3;   
```
6. Built-In Methods
```
      
      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
      
      int[] ratings = { 5, 4, 4, 3, 3, 5, 5, 4 };
int x = Array.IndexOf(ratings, 3);
Console.WriteLine($"Song number {x+1} is rated three stars");

string s3 = Array.Find(summerStrut, (string y) => y.Length > 10);      
Console.WriteLine($"The first song that has more than 10 characters in the title is {s3}.");
Array.Sort(summerStrut);
Console.WriteLine(summerStrut[0]);
Console.WriteLine(summerStrut[7]);
```
7. Documentation Hunt
```
      string[] summerStrut;
      
      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
      
      int[] ratings = { 5, 4, 4, 3, 3, 5, 5, 4 };
string[] summerStrutCopy = new string[8];
      Array.Copy(summerStrut, 0, summerStrutCopy, 0, 1);
Console.WriteLine(summerStrut[0]);
Console.WriteLine(summerStrutCopy[0]);
Array.Reverse(summerStrut);
Console.WriteLine(summerStrut[0]);
Array.Clear(ratings, 0, 8);
Console.WriteLine(ratings[0]);
```
8. Review
Close and return to main application

#### Loops
LESSON
Learn about how to use different loops in C#.

Exercises

1. Introduction to Loops

2. While Loop

3. Do...While Loop

4. For Loop

5. For Each Loop

6. Comparing Loops

7. Jump Statements

8. Review
Close and return to main application

#### Loops
LESSON
Learn about how to use different loops in C#.

Exercises

1. Introduction to Loops

2. While Loop
```
      int emails = 20;  
      while(emails > 0){
        Console.WriteLine(emails--);
      }
      Console.WriteLine("INBOX ZERO ACHIEVED!");
```
3. Do...While Loop
```
      bool buttonClick = true;
      do{
        Console.WriteLine("BLARRRRRRRRR");
      }while(!buttonClick);
 Console.WriteLine("Time for a five minute break.");
```
4. For Loop

5. For Each Loop
      string[] todo = { "respond to email", "make wireframe", "program feature", "fix bugs" };
      foreach(string item in todo){
      CreateTodoItem(item);  
      }
6. Comparing Loops

7. Jump Statements

8. Review
Close and return to main application

#### Basic Classes and Objects
LESSON
Create your own custom C# types with classes and objects.

Exercises

1. Introduction to Classes

2. Making Classes

3. Fields

4. Properties

5. Automatic Properties

6. Public vs. Private

7. Get-Only Properties

8. Methods

9. Constructors

10. this

11. Overloading Constructors

12. Review

#### Basic Classes and Objects
LESSON
Create your own custom C# types with classes and objects.

Exercises

1. Introduction to Classes

2. Making Classes  
Forest f = new Forest();  
3. Fields  

4. Properties
```
namespace BasicClasses
{
  class Forest
  {
    public string name;
    public int trees;
    public int age;
    public string biome;
    public string Name{
      get{return name;}
      set{name = value;}}
    public int Trees{
      get{return trees;}
      set{trees = value;}}
  }

}

      Forest f = new Forest();
      f.Name = "Congo";
      f.Trees = 0;
      f.age = 0;
      f.biome = "Tropical";
      
      Console.WriteLine(f.Name);

```
5. Automatic Properties
```
  class Forest
  {
    public int age;
    public string biome;
    
    public string Name
    { get; set; }
    
    public int Trees
    { get; set; }
    
    public string Biome
    {
      get { return biome; }
      set
      {
        if (value == "Tropical" ||
            value == "Temperate" ||
            value == "Boreal")
        {
          biome = value;
        }
        else
        {
          biome = "Unknown";
        }
      }
    }
  }

```
6. Public vs. Private
```
    public int Age
    {
      get{return age;}
      private set{ age = value;  }
```
7. Get-Only Properties

8. Methods
```
  public int Burn(){
    Trees -= 20;
    Age += 1;
    return Trees;
  }
```
9. Constructors
```
    public Forest(string name1, string biome1){
      Name = name1;
      Biome = biome1;
    }
```
10. this
```
    public Forest(string name, string biome)
    {
      this.Name = name;
      this.Biome = biome;
      Age = 0;
    }
```
11. Overloading Constructors
```
    public Forest(string name, string biome)
    {
      this.Name = name;
      this.Biome = biome;
      Age = 0;
    }
    
    public Forest(string name): this(name, "Unknown"){
     Console.WriteLine("Unknown"); 
    }
```
12. Review
```
Forest f = new Forest("Amazon");
Console.WriteLine(f.Trees);
f.Grow();
Console.WriteLine(f.Trees);     
```

#### Static Members
LESSON
Enhance your classes with static members.

Exercises

1. Introduction to Static

2. Static Fields and Properties
```
    private static int forestsCreated;
    
    // PROPERTIES
    public static int ForestsCreated{
      get; private set;
    }
    
      ForestsCreated += 1;
```
3. Static Methods

4. Static Constructors

5. Static Classes

6. Common Static Errors

7. Main()

8. Review

#### Static Members
LESSON
Enhance your classes with static members.

Exercises

1. Introduction to Static

2. Static Fields and Properties

3. Static Methods

4. Static Constructors

5. Static Classes

6. Common Static Errors

7. Main()

8. Review

#### Interfaces
LESSON
Further specify class behavior with C# interfaces.

Exercises

1. Introduction to Interfaces

2. Build an Interface

3. Implementing an Interface

4. What Interfaces Cannot Do

5. Implementing an Interface Again

6. Finish Truck Class

7. Testing Interfaces

8. Review

#### Interfaces
LESSON
Further specify class behavior with C# interfaces.

Exercises

1. Introduction to Interfaces

2. Build an Interface
```
interface IAutomobile{
  string LicensePlate{get;}
  double Speed{get;}
  int Wheels{get;}
  int Id{get;}
  void Honk();
}
```
3. Implementing an Interface
```
class Sedan : IAutomobile{
    public string LicensePlate { get; }
    public double Speed { get; }
    public int Wheels { get; }
    public void Honk(){
      Console.WriteLine();
    }
  
}
```
4. What Interfaces Cannot Do
```
  class Sedan : IAutomobile
  {
  
  	public string LicensePlate
    { get; }

    public double Speed
    { get; private set;}

    public int Wheels
    { get;}
    
    public Sedan(double speed){
    this.Speed = speed;
    this.LicensePlate = Tools.GenerateLicensePlate();
   this.Wheels = 4;
    }
    
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
    public void SpeedUp(){
    this.Speed += 5;
    }
    public void SlowDown(){
    this.Speed -=5;
    }
  }
```
5. Implementing an Interface Again
```
class Truck: IAutomobile{
    public string LicensePlate { get; }
    public double Speed { get; }
    public int Wheels { get; }
    public void Honk(){
    Console.WriteLine();
    }
  
}
```
6. Finish Truck Class
```
  class Truck : IAutomobile
  {
  	public string LicensePlate
    { get; }

    public double Speed
    { get; private set;}

    public int Wheels
    { get; }
    
    public double Weight{get;}
    
    public Truck(double speed, double weight){
    this.Speed = speed;
    this.Weight = weight;
    this.LicensePlate = Tools.GenerateLicensePlate();
    if(this.Weight<400){
    this.Wheels = 8;
    }else{
    this.Wheels = 12;
    }
    }
     
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
    public void SpeedUp(){
    this.Speed += 5;
    }
    public void SlowDown(){
    this.Speed -= 5;
    }
  }
```
7. Testing Interfaces
```
      Sedan sedan1 = new Sedan(60);
      Sedan sedan2 = new Sedan(70);
      Truck truck = new Truck(45, 500);
      Console.WriteLine(sedan1.Speed);
 Console.WriteLine(sedan1.Wheels);
 Console.WriteLine(sedan1.LicensePlate);
 Console.WriteLine(sedan2.Speed);
 Console.WriteLine(sedan2.Wheels);
 Console.WriteLine(sedan2.LicensePlate);
 Console.WriteLine(truck.Speed);
 Console.WriteLine(truck.Wheels);
 Console.WriteLine(truck.LicensePlate);

sedan1.SpeedUp();      
 Console.WriteLine(sedan1.Speed);
      sedan2.SpeedUp();      
 Console.WriteLine(sedan2.Speed);
      truck.SpeedUp();      
 Console.WriteLine(truck.Speed);
      
```
8. Review

#### Inheritance
LESSON
Avoid code duplication with C# inheritance

Exercises

1. Introduction to Inheritance

2. Superclass and Subclass

3. Create a Superclass

4. Access Inherited Members with Protected

5. Remove Duplicate Code

6. Access Inherited Members with Base

7. Override Inherited Members

8. Make Inherited Members Abstract

9. Review

#### Inheritance
LESSON
Avoid code duplication with C# inheritance

Exercises

1. Introduction to Inheritance

2. Superclass and Subclass

3. Create a Superclass
```
using System;

namespace LearnInheritance
{
class Vehicle{
  public string LicensePlate{get;}
  public double Speed{get; private set;}
  public int Wheels{get;}
  
  public void Honk(){
    
  }
  public void SpeedUp(){
    
  }
  public void SlowDown(){
    
  }
}
  
}
```
4. Access Inherited Members with Protected
```
  class Vehicle
  {
    public string LicensePlate
    { get; protected set;}

    public double Speed
    { get; protected set;}

    public int Wheels
    { get; protected set;}
```
5. Remove Duplicate Code
```
using System;

namespace LearnInheritance
{
  class Truck : Vehicle, IAutomobile
  {
    
    public double Weight
    { get; }

    public Truck(double speed, double weight)
    {
      Speed = speed;
      LicensePlate = Tools.GenerateLicensePlate();
      Weight = weight;

      if (weight < 400)
      {
        Wheels = 8;
      }
      else
      {
        Wheels = 12;
      }
    }
    
  }
}
```
6. Access Inherited Members with Base  
base.SpeedUp();  
```
    public Sedan(double speed):base(speed)
    {
      Wheels = 4;
    }
```
7. Override Inherited Members
```
    public virtual void SpeedUp()
    {
      Speed += 5;
    }

    public override void SpeedUp(){
      Speed += 5;
      Speed = Speed>15?15:Speed;
    }

```
8. Make Inherited Members Abstract
```
  abstract class Vehicle
    public abstract string Describe();
    static void Main(string[] args)
    {
      Sedan s = new Sedan(60);
      Console.WriteLine(s.Describe());
      Truck t = new Truck(45, 500);
 Console.WriteLine(t.Describe());      
      Bicycle b = new Bicycle(10);
 Console.WriteLine(b.Describe());    }
```
9. Review

#### Reference Fundamentals
LESSON
Learn the difference between reference and value types in C#

Exercises

1. Introduction to References

2. References of the Same Type

3. References vs. Values

4. References vs. Values II

5. Reference vs. Value Comparison

6. References of Different Types

7. Arrays of References

8. Polymorphism

9. Casting

10. Null and Unassigned References

11. Review

#### Reference Fundamentals
LESSON
Learn the difference between reference and value types in C#

Exercises

1. Introduction to References

2. References of the Same Type
```
     Diary dy1 = new Diary(5);
     Diary dy2 = dy1;
     dy2.Flip();
     Console.WriteLine(dy1.CurrentPage); 
Console.WriteLine(dy2.CurrentPage); 
```
3. References vs. Values

4. References vs. Values II
```
      Book bookLocation = new Book();
      Book sameBookLocation = bookLocation;
      bool falseValue = false;
      bool anotherFalseValue = falseValue;
```
5. Reference vs. Value Comparison
```
      Book b1 = new Book();
      Book b2 = b1;
      Console.WriteLine(b1 == b2); //True
```
6. References of Different Types
```
      Dissertation diss = new Dissertation();
			IFlippable fdiss = diss;
      Book bdiss = diss;
			fdiss.CurrentPage = 42;
      //bdiss.CurrentPage = 43;
      //fdiss.Stringify();
      bdiss.Stringify();
      Console.WriteLine(fdiss == bdiss);
```
7. Arrays of References
```
      Dissertation diss1 = new Dissertation(32, "Anna Knowles-Smith", "Refugees and Theatre");
			Dissertation diss2 = new Dissertation(19, "Lajos Kossuth", "Shiny Happy People");
			Diary dy1 = new Diary(48, "Anne Frank", "The Diary of a Young Girl");
			Diary dy2 = new Diary(23, "Lili Elbe", "Man into Woman");
     
Book[] books = new Book[]{diss1, diss2, dy1, dy2};			
foreach(Book book in books){
  Console.WriteLine(book.Title);
}
// Refugees and Theatre
// Shiny Happy People
// The Diary of a Young Girl
// Man into Woman
```
8. Polymorphism
```
      Book b1 = new Book();
      Book b2 = new Diary();
      Console.WriteLine(b1.Stringify());
 Console.WriteLine(b2.Stringify());
```
9. Casting
```
			Dissertation diss = new Dissertation();
      Diary dy = new Diary();
      
      Book bdiss = diss;
      Book bdy = dy;
```
10. Null and Unassigned References
```
     Book book = null; 
     Console.WriteLine(book); 
     Console.WriteLine(book==null); 
      //True
```
11. Review

Polymorphism
We just saw how useful it is to have the same interface for multiple data types. This is a common concept across many programming languages, and it’s called polymorphism.

The concept really includes two related ideas. A programming language supports polymorphism if:

Objects of different types have a common interface (interface in the general meaning, not just a C# interface), and
The objects can maintain functionality unique to their data type
Let’s prove to ourselves that this is true in C#. We’ll use the example of Stringify: Dissertation and Book have different Stringify() methods but can both be referenced as Books.

Here are snippets from each class:

class Dissertation : Book
{
  public override string Stringify()
  {
    return "This is a Dissertation object!;
  }
}


class Book
{
  public virtual string Stringify()
  {
    return "This is a Book object!;
  }
}
Given that information, what will the below program print?

Book bk = new Book();
Book bdiss = new Dissertation();
Console.WriteLine(bk.Stringify());
Console.WriteLine(bdiss.Stringify());
The answer is:

This is a Book reference!
This is a Dissertation reference!
Even though bk and bdiss are both Book type references, their behavior is different. Dissertation overrides the Stringify() method, so all Dissertation objects (regardless of reference type) will use that method.

Therefore, C# support polymorphism!

You’ll never have to write polymorphism in your code, but this vocabulary is essential to communicating with other developers!

So remember: polymorphism is the ability in programming to present the same interface for differing data types.



#### The Object Class
LESSON
Discover the superclass of all data types: the Object class.

Exercises

1. Introduction to Object

2. The Object Type

3. Object Members

4. Overriding Object Members

5. Object in Plain Sight

6. Review

#### The Object Class
LESSON
Discover the superclass of all data types: the Object class.

Exercises

1. Introduction to Object

2. The Object Type

3. Object Members
```
      Book b = new Book();      
      Diary d = new Diary(38);
      Random r = new Random();
      int i = 9;
      Object[] oa=new Object[]{
        b,d,r,i
      };
      foreach(Object o in oa){
        Console.WriteLine(o.GetType());
// TheObjectClass.Book
// TheObjectClass.Diary
// System.Random
// System.Int32
```
4. Overriding Object Members
```
    public override string ToString(){
      return $"{Author} {Title}";
    }
```
5. Object in Plain Sight

6. Review

#### String, The Exception
LESSON
Understand why strings in C# are so unique

Exercises

1. Re-introduction to Strings

2. Strings Can Look Like Values

3. Strings can be Null or Empty or Unassigned

4. String as Class

5. Review

#### String, The Exception
LESSON
Understand why strings in C# are so unique

Exercises

1. Re-introduction to Strings

2. Strings Can Look Like Values
```
      string s1 = "immutable";
      string s2 = "immutable";
      bool b1 = (s1 == s2);
      Console.WriteLine(b1);
      Object o1 = new Object();
      Object o2 = new Object();
      bool bo = (o1 == o2);
      Console.WriteLine(bo);
      // True
      // False
```
3. Strings can be Null or Empty or Unassigned
```
    static void Main(string[] args)
    {
    string s3 = Console.ReadLine();
Console.Write(s3);
      if(String.IsNullOrEmpty(s3)){
       Console.WriteLine("You didn't enter anything!"); 
      }else{
      Console.WriteLine("Thank you for your submission!");  
      }
    }
```
4. String as Class
```
    static void Main(string[] args)
    {
      string lyrics = 
        "Dollie, Dollie, bo-bollie,\n" +
        "Banana-fana fo-follie\n" +
        "Fee-fi-mo-mollie\n" +
        "Dollie!";
      
      // Call `Replace()` here
Console.WriteLine(lyrics);
 lyrics = lyrics.Replace("ollie", "ana");      
      
      Console.WriteLine(lyrics);
    }
```
5. Review







27.02 - 5-    
1.03 - 16-22-27-33-38-44-50-55-   
2.03 - 61-  
3.03 - 66-72-  
4.03 - 77-88  
6.03 - 96  

_|_|_|_|_|_
--|--|--|--|--|--
rate|скорость|duration|продолжительность|least|наименьший
parentheses|скобки|mentioned|упомянутый|grasp|понять
Diary|дневник||||
|||||
|||||


[docs.microsoft.com](https://docs.microsoft.com/en-us/dotnet/api/system.convert?view=netframework-4.7.2)  
[]()  
[]()  
[]()  
[]()  

