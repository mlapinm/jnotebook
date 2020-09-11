[codecademy-learn-ph](https://www.codecademy.com/learn/learn-php)  

#### Introduction to PHP
LESSON
Learn why PHP was created and what it is used for in today’s web development environment. See samples of PHP in action!

Exercises

1. History of PHP

2. How is PHP used in HTML?

3. How is PHP Executed?

4. PHP Comments

5. Todo: Learn PHP

6. Review


```python
%%html
<?php
echo "Hello, World!";
```


<?php
echo "Hello, World!";




```python
%%html
<?php
// I will always remember this
echo "Hello, World!"; # My first PHP statement

/* "I've never thought of PHP as more 
than a simple tool to solve problems."
- Rasmus Lerdorf */
echo "\nRasmus is the creator of PHP!";
```


```python
%%html
<?php
require 'vendor/autoload.php';
# This logic handles connecting to the database, where we store our todo status
$pdo = new \PDO("sqlite:" . "db/sqlite.db");

# This PHP logic handles user actions
# New TODO
if (isset($_POST['submit'])) 
{
  $description = $_POST['description'];
  $sth = $pdo->prepare("INSERT INTO todos (description) VALUES (:description)");
  $sth->bindValue(':description', $description, PDO::PARAM_STR);
  $sth->execute();
}
# Delete TODO
elseif (isset($_POST['delete']))
{ 
  $id = $_POST['id'];
  $sth = $pdo->prepare("delete from todos where id = :id");
  $sth->bindValue(':id', $id, PDO::PARAM_INT);
  $sth->execute();
}
# Update completion status
elseif (isset($_POST['complete']))
{
    $id = $_POST['id'];
    $sth = $pdo->prepare("UPDATE todos SET complete = 1 where id = :id");
    $sth->bindValue(':id', $id, PDO::PARAM_INT);
    $sth->execute();
}
# Here is the HTML:
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Todo List</title>
</head>

<body class="container">
  <h1>Todo List</h1>
  <form method="post" action="">
    <input type="text" name="description" value="">
    <input type="submit" name="submit" value="Add">
  </form>
  <h2>Current Todos</h2>
  <table class="table table-striped">
    <thead><th>Task</th><th></th><th></th></thead>
    <tbody>

<?php
  # Entering PHP mode, 
$sth = $pdo->prepare("SELECT * FROM todos ORDER BY id DESC");
$sth->execute();

foreach ($sth as $row) {
  # Exiting PHP Mode
    ?> 
<tr>
  <td>
      <!-- This is PHP shorthand for inserting dynamic text into HTML -->
      <?=htmlspecialchars($row['description'])?></td>
  <td>
    <?php # Here we are mixing HTML and PHP to get the desired document
if (!$row['complete']) {
        ?>
    <form method="POST">
      <button type="submit" name="complete">Complete</button>
      <input type="hidden" name="id" value="<?=$row['id']?>">
      <input type="hidden" name="complete" value="true">
    </form>
    <?php
} else {
        ?>
    Task Complete!
    <?php
}
    ?>
  </td>
  <td>
    <form method="POST">
      <button type="submit" name="delete">Delete</button>
      <input type="hidden" name="id" value="<?=$row['id']?>">
      <input type="hidden" name="delete" value="true">
    </form>
  </td>
</tr>
<?php
}
?>
    </tbody>
  </table>
</body>
</html>
```


```python
%%html
<?php
// Write your code below:
  echo "1. Teach PHP";
  echo "\n2. Teach PHP";
 echo "\n3. Learn to have \"fun\"";
```


```python
%%html
<?php
// Write your code below:   

echo "Code" . "cademy";
echo "\nMy name is:" . " Michael"; 
echo "\n" . "tur" . "duck" . "en"; 
```


```python
%%html
<?php
// Write your code below:
 $s = "text\n"; 
 $biography ="\nborn leav"; 
 $favorite_food =  "\n". "tur". "duck". "en" ;
```


```python
%%html
<?php
// Write your code below:
$name = "Michael";
$language = "english";
echo "Hello " . $name;  
echo "\n" . $language; 
```


```python
%%html
<?php
// Fill in the blanks in the code below:
  $noun = "noun";
  $adjective = "adjective";
  $verb = "verb";

  echo "The world's most beloved $noun was very $adjective and loved to $verb every single day.";


//Fix the code below and uncomment it:

  echo "\nI have always been obsessed with ${noun}s. I'm ${adjective}ish. I'm always ${verb}ing.";
```

%%html
<?php
  $movie = "Holop";
// Add your code here:



  echo "I'm a fickle person, my favorite movie used to be $movie.";
  
// Add a statement here:
$old_favorite = $movie;  
$movie = "Monah";  
  echo "\nBut now my favorite is $movie.";
  
// Add a statement below:
echo " $old_favorite \n";



```python
%html 
<?php
  echo "I'm going on a picnic!";

  $sentence = "\nI'm going on a picnic, and I'm taking apples";

  echo $sentence;

// Write your code below:
  $sentence .= ", bread";
  echo $sentence;
 $sentence .= ", coffe";
  echo $sentence;
```


```python
%html 
<?php
  
/* Imagine a lot of code here */  
  $very_bad_unclear_name = "15 chicken wings";

// Write your code here:
$order = & $very_bad_unclear_name;

$order .="aaa";


    
  // Don't change the line below
  echo "\nYour order is: $very_bad_unclear_name.";
```

#### PHP Numbers
LESSON
Learn about the PHP number data types and arithmetic operators.

Exercises

1. Numbers

2. Addition and Subtraction

3. Using Number Variables

4. Multiplication and Division

5. Exponentiation

6. Modulo

7. Order of Operations

8. Mathematical Assignment Operators

9. Review


```python
%%http
<?php
// Write your code below:
  $a = 3;
  $b = 1.5; 
  echo $a;
  echo "\n";
  echo $b;
```


```python
%%http
<?php
// Write your code below:
echo 14-2;
echo " ";
echo 10+2;
```


```python
%%http
<?php
// Write your code below:
  
$last_month = 1187.23;
$this_month = 1089.98;
echo $last_month - $this_month; 
```


```python
%%http
<?php
// Write your code below:
  $num_languages = 4;
  $months = 11;
  $days = $months * 16;
  $days_per_language = $days/$num_languages;
  echo $days_per_language;
  //Ruby, Python, JavaScript, and C++
```


```python
%%http
<?php
// Write your code below:
  echo 8**2;
```


```python
%%http
<?php
// Write your code below:
 echo 82 % 6;
```


```python
%%http
<?php
// Write your code below:
 echo 94-4.25+7-23.5-23.5*0.2+20/4; 
```


```python
%%http
<?php
// Write your code below:
$my_num = 3;
$answer  = $my_num;
$answer+=2;  
$answer-=2;  
$answer/=2;  
$answer-=$my_num;  
echo $answer;   
```

#### Introduction to PHP Functions
LESSON
Learn how to create functions, reusable blocks of code, in PHP.

Exercises

1. Introduction

2. Defining Functions

3. Invoking Functions

4. Return Statements

5. More on Return Statements

6. Return Values

7. Returning NULL

8. Parameters

9. Multiple Parameters

10. Default Parameters

11. Pass By Reference

12. Variable Scope

13. Review


```python
%%http
<?php
// Write your code below:
 function praisePHP(){
  echo "PHP";
} 
```


```python
%%http
<?php
// Write your code below:
  
  function inflateEgo(){
  echo "compliment";
}
inflateEgo();
inflateEgo();

```


```python
%%http
<?php

// Write your code below:
function printStringReturnNumber(){
  $value = 3;
  echo $value;

  return $value;
}  
$my_num = printStringReturnNumber();
echo $my_num;
```

%%http
<?php

function notFound()
{
  echo "ERROR: Page not found!\n";
  return 404;
}

function greetLearner()
{
  echo "Hello, Learner!\n";
  echo "I hope you're (still) enjoying PHP!\n";
  echo "Love, Codecademy\n";
  return "<3";
}

// Don't change the code below:

$error = notFound(); 
$heart = greetLearner();

echo "I received a $error, but it's ok because I also received $heart.";

%http 
<?php
function first()
{
  return "You did it!\n";
}

function second()
{
  return "You're amazing!\n";
}

function third()
{
  return "You're a coding hero!\n";
}
echo first().second().third();


%http 
<?php

// Write your code below:
 function createVacuum(){
  return NULL;
} 

echo createVacuum() * 10;

%http 
<?php
// Write your code below:
function increaseEnthusiasm($string){
  return $string . "!";
}
echo increaseEnthusiasm("Hi");
function repeatThreeTimes($string){
  return $string.$string.$string;
}
echo repeatThreeTimes("hi");
echo increaseEnthusiasm(repeatThreeTimes("hi"));

%http 
<?php
// Write your code below:
function calculateArea($height, $width){
  return $height*$width;
}
echo calculateArea(3,2);
function calculateVolume($height, $width, $depth){
  return $height*$width*$depth;
}
echo calculateVolume(2,3,4);

%http 
<?php
// Write your code below:
function calculateTip($meal,$tip=20){
 return $meal+$meal*$tip/100; 
}
echo calculateTip(100);
echo "\n".calculateTip(65,15);


%http 
<?php

$string_one = "you have teeth";
$string_two = "toads are nice";
$string_three = "brown is my favorite color";

// Write your code below:
function convertToQuestion(&$string){
$string = "Do you think $string?\n";  
  
}


convertToQuestion($string_one);
convertToQuestion($string_two);
convertToQuestion($string_three);

echo $string_one;
echo $string_two;
echo $string_three;


%http 
<?php

$language = "PHP";
$topic = "scope";

function generateLessonName( $concept)
{
  global $language;
  return $language . ": " . $concept;
}

echo generateLessonName($topic);


%http 
<?php
namespace Codecademy;

$first = "Welcome to the magical world of built-in functions.";
  
$second = 82137012983; 

//Write your code below:
echo gettype($first);
echo "\n";
echo gettype($second);
echo "\n";
var_dump($first);
echo "\n";
var_dump($second);
// string
// integer
// string(51) "Welcome to the magical world of built-in functions."

// int(82137012983)
 

%http 
You're doing great. Keep it up.
soon, this will look normal.
There's no place like home.

There's no place like home.

There's no place like home.

%http 
<?php
namespace Codecademy;

$essay_one = "I really enjoyed the book. I thought the characters were really interesting. The plot of the novel was really engaging. I really felt the characters' emotions. They were really well-written. I really wish the ending had been different though.";
  
$essay_two = "Obviously this is a really good book. You obviously would not have made us read it if it wasn't. I felt like the ending was too obvious though. It was so obvious who did it right away. I think the thing with the light was obviously a metaphor for life. It would have been better if the characters were less obvious about their secrets.";  

// Write your code below:
echo substr_count($essay_one,"really");
echo "\n".substr_count($essay_two,"obvious");

%http 
<?php
namespace Codecademy;

// Write your code below:
function calculateDistance($a, $b){
  return abs($a-$b);
}
echo calculateDistance(3, -7);
echo "\n";
function calculateTip($cost){
  return round($cost+$cost*0.18);
}
echo calculateTip(100);

%http 
<?php
namespace Codecademy;

// Write your code below:
echo getrandmax(); 
echo "\n";
echo rand();
echo "\n";
echo rand(1, 52);

%http 
<?php
namespace Codecademy;

$a = 29;
$b = "You did it!";
$c = STR_PAD_BOTH;
$d = "*~*";

// Write your code below:
echo str_pad($b,29,"*~*", STR_PAD_BOTH,);
//*~**~**~*You did it!*~**~**~*

%http 
<?php
namespace Codecademy;

// Write your code below:
function convertToShout($s){
  return strtoupper($s)."!";
}
echo convertToShout("Hi");
echo "\n";
function tipGenerously($cost){
  return ceil($cost+$cost*0.2);
}
echo tipGenerously(15.67);
echo "\n";
function calculateCircleArea($d){
  return pi()*$d*$d/4;
}
echo calculateCircleArea(2);

### Ordered Arrays
LESSON
Learn about storing data in ordered lists with the PHP ordered arrays data structure.

Exercises

1. Introduction

2. Creating Arrays with array()

3. Creating Arrays with Short Syntax

4. Printing Arrays

5. Accessing an Element

6. Adding and Changing Elements

7. More Array Methods: Pushing and Popping

8. Shifting and Unshifting

9. Nested Arrays

10. Review
Close and return to main application

%http 
<?php
// Write your code below:
$first_array = array("null",1,"second",3,"fourth");
echo count($first_array);

%http 
<?php
namespace Codecademy;

// Write your code below:
$with_function = array("PHP","popcorn",555.55);
$with_short = ["PHP","popcorn",555.55];

%http 
Oh hey! You're doing great! Keep up the good work!
// Array
// (
//     [0] => 7
//     [1] => 201
//     [2] => 33
//     [3] => 88
//     [4] => 91
// )


%http 
<?php
namespace Codecademy;

$round_one = ["X", "X", "first winner"];

$round_two = ["second winner", "X", "X", "X"];

$round_three = ["X", "X", "X", "X", "third winner"];

// Write your code below:
$winners = [$round_one[2],$round_two[0],$round_three[4]];
print_r($winners);

%http 
<?php
namespace Codecademy;

$change_me = [3, 6, 9];
// Write your code below:
$change_me[] = "1"; $change_me[] = 8;
$change_me[1] = "tadpole";
echo implode(",",$change_me);
// 3,tadpole,9,1,8 

%http 
<?php
namespace Codecademy;

$stack = ["wild success", "failure", "struggle"];
// Write your code below:
array_push($stack,"blocker","impediment");
$a="";
while($a!="failure"){$a=array_pop($stack);}
 print_r($stack);

%http 
<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:
array_unshift($record_holders,"Tim Montgomery","Maurice Greene","Donovan Bailey","Leroy Burrell","Carl Lewis");
array_shift($record_holders);
array_unshift($record_holders,"Justin Gatlin","Asafa Powell");
array_shift($record_holders);
array_unshift($record_holders,"Usain Bolt");

%http 
<?php
namespace Codecademy;


$treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];
echo $treasure_hunt[3][4][2][0]; 
//GOLD!

#### Associative Arrays
LESSON
Learn how to create and use PHP associative arrays.

Exercises

1. Introduction

2. Associative Arrays

3. Printing Associative Arrays

4. Accessing and Adding Elements

5. Changing and Removing Elements

6. Numerical Keys

7. Joining Arrays

8. Assign by Value or by Reference

9. Review
Close and return to main application



```python
%http 
<?php
namespace Codecademy;

// Write your code below:
$php_array = array("language" => "PHP", "creator" => "Rasmus Lerdorf", "year_created" => 1995, "filename_extensions" => [".php", ".phtml",".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]);
$php_short = ["language" => "PHP", "creator" => "Rasmus Lerdorf", "year_created" => 1995, "filename_extensions" => [".php", ".phtml",".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]];
print_r ($php_short);

Array
(
    [language] => PHP
    [creator] => Rasmus Lerdorf
    [year_created] => 1995
    [filename_extensions] => Array
        (
            [0] => .php
            [1] => .phtml
            [2] => .php3
            [3] => .php4
            [4] => .php5
            [5] => .php7
            [6] => .phps
            [7] => .php-s
            [8] => .pht
            [9] => .phar
        )

)
```


      File "<ipython-input-1-1556e0af2a8c>", line 2
        <?php
        ^
    SyntaxError: invalid syntax
    



```python
%%html
<?php
namespace Codecademy;

// Write your code below:
$september_hits = ["The Sixth Sense" => 22896967, "Stigmata" => 18309666, "Blue Streak" => 19208806, "Double Jeopardy" => 23162542];
echo implode(" ", $september_hits);
print_r($september_hits);

// 22896967 18309666 19208806 23162542Array
// (
//     [The Sixth Sense] => 22896967
//     [Stigmata] => 18309666
//     [Blue Streak] => 19208806
//     [Double Jeopardy] => 23162542
// )
```


<?php
namespace Codecademy;

// Write your code below:
$september_hits = ["The Sixth Sense" => 22896967, "Stigmata" => 18309666, "Blue Streak" => 19208806, "Double Jeopardy" => 23162542];
echo implode(" ", $september_hits);
print_r($september_hits);

// 22896967 18309666 19208806 23162542Array
// (
//     [The Sixth Sense] => 22896967
//     [Stigmata] => 18309666
//     [Blue Streak] => 19208806
//     [Double Jeopardy] => 23162542
// )




```python
%%html
<?php
namespace Codecademy;
$assignment_one = ["Alex"=> 87, "Kenny"=> 91, "Natalia"=> 91, "Lily"=> 67, "Dan"=> 81, "Kat"=> 77, "Sara" => 65];

$assignment_two = ["Alex"=> 91, "Kenny"=> 99, "Natalia"=> 100, "Lily"=> 61, "Dan"=> 88, "Kat"=> 90];

$assignment_three = ["Alex"=> 78, "Kenny"=> 92, "Natalia"=> 94, "Lily"=> 79, "Dan"=> 73, "Sara" => 61];

$student_name = "Alex";
// Write your code below:
$assignment_two["Sara"]=65;
$assignment_three["Kat"]=97;
$dans_grades = array($assignment_one["Dan"],$assignment_two["Dan"],$assignment_three["Dan"],);
echo $assignment_two[$student_name];
```


<?php
namespace Codecademy;
$assignment_one = ["Alex"=> 87, "Kenny"=> 91, "Natalia"=> 91, "Lily"=> 67, "Dan"=> 81, "Kat"=> 77, "Sara" => 65];

$assignment_two = ["Alex"=> 91, "Kenny"=> 99, "Natalia"=> 100, "Lily"=> 61, "Dan"=> 88, "Kat"=> 90];

$assignment_three = ["Alex"=> 78, "Kenny"=> 92, "Natalia"=> 94, "Lily"=> 79, "Dan"=> 73, "Sara" => 61];

$student_name = "Alex";
// Write your code below:
$assignment_two["Sara"]=65;
$assignment_three["Kat"]=97;
$dans_grades = array($assignment_one["Dan"],$assignment_two["Dan"],$assignment_three["Dan"],);
echo $assignment_two[$student_name];



%%html
```
<?php
namespace Codecademy;

$my_car = [
  "oil" => "black and clumpy",
  "brakes" => "new",
  "tires" => "old with worn treads",
  "filth" => "bird droppings", 
  "wiper fluid" => "full", 
  "headlights" => "bright"
];
print_r($my_car);

// Write your code below:
$my_car["oil"] = "new and premium";
$my_car["tires"] = "new with deep treads";
unset($my_car["filth"]);
```

%%html
```
<?php
namespace Codecademy;

// Write your code below:
$hybrid_array = ["0","1","2","3"];
$hybrid_array[8] =  "five more";
array_push($hybrid_array,rand());
print_r($hybrid_array);
echo $hybrid_array[9];```

%%html
```
<?php
namespace Codecademy;

$giraffe_foods = ["dip"=>"guacamole", "chips"=>"corn", "entree"=>"grilled chicken"];

$impala_foods = ["dessert"=>"cookies", "vegetable"=>"asparagus", "side"=>"mashed potatoes"];

$rat_foods = ["dip"=>"mashed earth worms", "entree"=>"trash pizza", "dessert"=>"sugar cubes", "drink"=>"lemon water"];
$potluck = $giraffe_foods + $impala_foods;
// Write your code below:
print_r($potluck);
$potluck += $rat_foods;
// Array
// (
//     [dip] => guacamole
//     [chips] => corn
//     [entree] => grilled chicken
//     [dessert] => cookies
//     [vegetable] => asparagus
//     [side] => mashed potatoes
// )
```

%%html
```
<?php
namespace Codecademy;
$doge_meme = ["top_text" => "Such Python", "bottom_text" => "Very language. Wow.", "img" => "very-cute-dog.jpg", "description" => "An adorable doge looks confused."];

$bad_meme = ["top_text" => "i don't know", "bottom_text" => "i can't think of anything", "img" => "very-fat-cat.jpg", "description" => "A very fat cat looks happy."];

// Write your code below:
function createMeme($meme){
  $meme["top_text"]="Much PHP";
  $meme["bottom_text"]="Very programming. Wow.";
  return $meme;
}
$php_doge = createMeme($doge_meme);
print_r($php_doge);
function fixMeme(&$meme){
  $meme["top_text"]="1";
  $meme["bottom_text"]="2";
}
fixMeme($bad_meme);
```

#### PHP and HTML
LESSON
Learn how you can use PHP to interact with HTML.

Exercises

1. Introduction

2. What is the Front-End?

3. What is the Back-End?

4. PHP in HTML

5. Beyond Strings

6. Review
Close and return to main application


#### PHP and HTML
LESSON
Learn how you can use PHP to interact with HTML.

Exercises

1. Introduction

2. What is the Front-End?

3. What is the Back-End?

4. PHP in HTML

5. Beyond Strings

6. Review
Close and return to main application


```python
%%html
<!doctype html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>A Static Site</title>
</head>
<body>
  <h1>Static?</h1>
  <p>We call this type of site static, because it never changes.</p>
  <p>Every time you visit this site, you see the same thing. If it was located on a public website, other users would also see the same thing.</p>
</body>
</html>
```


<!doctype html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>A Static Site</title>
</head>
<body>
  <h1>Static?</h1>
  <p>We call this type of site static, because it never changes.</p>
  <p>Every time you visit this site, you see the same thing. If it was located on a public website, other users would also see the same thing.</p>
</body>
</html>




```python
%%html
<html>
<body>
<h1>PHP and HTML</h1>
<p>This is HTML</p>
<?php
  echo "<p>This is PHP</p>";
  ?>
</body>
</html>
```


<html>
<body>
<h1>PHP and HTML</h1>
<p>This is HTML</p>
<?php
  echo "<p>This is PHP</p>";
  ?>
</body>
</html>




```python
%%html
<?php 
$about_me = [
  "name" => "Aisle Nevertell",
  "birth_year" => 1902,
  "favorite_food" => "pizza"
];

function calculateAge ($person_arr){
  $current_year = date("Y");
  $age = $current_year - $person_arr["birth_year"];
  return $age;
}
?>
<h1>Welcome!</h1>
<h2>About me:</h2>
<?php
#Add your code here
echo "<h3>${about_me["name"]}</h3>";
echo "<p>".calculateAge($about_me)."</p>";
echo "<div>${about_me["favorite_food"]}</div>"
?>

<h2>Now tell me a little about you.</h2>

```

#### HTML Form Handling in PHP
LESSON
Learn how to handle HTML forms using PHP.

Exercises

1. Introduction

2. Request Superglobals

3. GET Form Handling

4. POST Form Handling

5. Using the "action" Attribute

6. Review



```python
%%html
<h1>Learning PHP and HTML</h1>
<p>This first paragraph is standard HTML</p>
<?= "<p>Let's insert some text into our HTML using PHP!</p>";?>
<p>This last paragraph is also standard HTML</p>
```


<h1>Learning PHP and HTML</h1>
<p>This first paragraph is standard HTML</p>
<?= "<p>Let's insert some text into our HTML using PHP!</p>";?>
<p>This last paragraph is also standard HTML</p>




```python
%%html
<html>
<body>
$_REQUEST:
<?php print_r($_REQUEST); ?>
<br>
$_GET:
<?php print_r($_GET); ?>
<br>
$_POST:
<?php print_r($_POST); ?>
<form method="get">
GET Form: <input type="text" name="get_name">
<input type="submit" value="Submit GET">
</form>
<form method="post">
POST Form: <input type="text" name="post_name">
<input type="submit" value="Submit POST">
</form>
<a href="index.php">Reset</a>
  <? print_r($_REQUEST);
print_r($_GET);
print_r($_POST);?>
</body>
</html>
```


```python
%%html
<html>
<body>
<form method="get">
Country:
<input type="text" name="country">
<br>
Language:
<input type="text" name="language">
<br>
<input type="submit" value="Submit">
</form>
<br>
<p>Your language is: 
<?= $_GET["language"]; ?>
  </p>
<p>Your country is: 
<?= $_GET["country"]; ?>
  </p>
<a href="index.php">Reset</a>
</body>
</html>

```


<html>
<body>
<form method="get">
Country:
<input type="text" name="country">
<br>
Language:
<input type="text" name="language">
<br>
<input type="submit" value="Submit">
</form>
<br>
<p>Your language is: 
<?= $_GET["language"]; ?>
  </p>
<p>Your country is: 
<?= $_GET["country"]; ?>
  </p>
<a href="index.php">Reset</a>
</body>
</html>




```python
%%html
<html>
<body>
<form method="post">
Favorite Color:
<input type="text" name="color">
<br>
Favorite Food:
<input type="text" name="food">
<br>
<input type="submit" value="Submit">
</form>
<br>
<p>Best food is: <?= $_POST["food"] ?></p>
<p>Best color is: <?= $_POST["color"] ?></p>
<a href="index.php">Reset</a>
</body>
</html>
```


<html>
<body>
<form method="post">
Favorite Color:
<input type="text" name="color">
<br>
Favorite Food:
<input type="text" name="food">
<br>
<input type="submit" value="Submit">
</form>
<br>
<p>Best food is: <?= $_POST["food"] ?></p>
<p>Best color is: <?= $_POST["color"] ?></p>
<a href="index.php">Reset</a>
</body>
</html>



http://localhost:8888/notebooks/js/c06php.ipynb?country=11&language=22#


%%html


https://localhost/?first=1&last=2



```python
%%html
<html>
<body>
<form method="get" action="greet_user.php">
First Name:
<input type="text" name="first">
<br>
Last Name:
<input type="text" name="last">
<br>
<input type="submit" value="Submit">
</form>

<a href="index.php">Reset</a>
</body>
</html>
```


```python
%%html
<html>
<body>
<p>Thanks!</p>
<p>Your name has been recorded as:</p>
<p><?= $_GET["first"]." ".$_GET["last"] ?></p>
<a href="index.php">Reset</a>
</body>
</html>
```

https://localhost/greet_user.php?first=1&last=2


#### Booleans and Comparison Operators
LESSON
Learn how to write complex programs which can make decisions using boolean values, conditional statements, and comparison operators.

Exercises

1. Introduction

2. If Statements

3. Comparison Operators

4. Identical and Not Identical Operators

5. Elseif Statements

6. Switch Statement

7. Switch Statements: Fall through

8. Ternary Operator

9. Truthy and Falsy

10. User Input: readline()

11. Review



```python
%%html
<?php
namespace Codecademy;

$learner_one = ["is_correct"=>FALSE, "box"=>["shape"=>"none", "color"=>"none"]];
   
$learner_two = ["is_correct"=>TRUE, "box"=>["shape"=>"none", "color"=>"none"]];
 
function markAnswer($b,&$ar){
  if($b){
    $ar["shape"]="checkmark";
    $ar["color"]="green";
  }else{
    $ar["shape"]="x";
    $ar["color"]="red";
  }
}
markAnswer($learner_one["is_correct"], $learner_one["box"]);
markAnswer($learner_two["is_correct"], $learner_two["box"]);

print_r($learner_one);  
print_r($learner_two);  

```


```python
%%html
<?php
namespace Codecademy;
function chooseCheckoutLane($items){
  if($items<=12){
    return "express lane";
  }else{
    return "regular lane";
  }
}
function canIVote($age){
  if($age>=18){
    return "yes";
  }else{
    return "no";
  }
}
echo chooseCheckoutLane(9);
echo "\n";
echo chooseCheckoutLane(14);
echo "\n";
echo canIVote(20);
echo "\n";
echo canIVote(16);

```


<?php
namespace Codecademy;
function chooseCheckoutLane($items){
  if($items<=12){
    return "express lane";
  }else{
    return "regular lane";
  }
}
function canIVote($age){
  if($age>=18){
    return "yes";
  }else{
    return "no";
  }
}
echo chooseCheckoutLane(9);
echo "\n";
echo chooseCheckoutLane(14);
echo "\n";
echo canIVote(20);
echo "\n";
echo canIVote(16);




```python
%%html
<?php
namespace Codecademy;
function agreeOrDisagree($s1,$s2){
  if($s1===$s2){
    return "You agree!";
  }else{
    return "You disagree!";
  }
}
echo agreeOrDisagree("1","1");
echo "\n";
echo agreeOrDisagree("1","2");
echo "\n";
function checkRenewalMonth($month){
  //echo date('F');
  if($month === date('F')){
    return "Time to renew";
  }else{
    return "Welcome!";
  }

}
echo checkRenewalMonth("February");
echo "\n";
echo checkRenewalMonth("Janiary");

```


<?php
namespace Codecademy;
function agreeOrDisagree($s1,$s2){
  if($s1===$s2){
    return "You agree!";
  }else{
    return "You disagree!";
  }
}
echo agreeOrDisagree("1","1");
echo "\n";
echo agreeOrDisagree("1","2");
echo "\n";
function checkRenewalMonth($month){
  //echo date('F');
  if($month === date('F')){
    return "Time to renew";
  }else{
    return "Welcome!";
  }

}
echo checkRenewalMonth("February");
echo "\n";
echo checkRenewalMonth("Janiary");




```python
%%html
<?php
namespace Codecademy;
function whatRelation($percent){
  if($percent==100){
    echo "identical twins";
  }elseif($percent>=35){
    echo "parent and child or full siblings";
  }elseif($percent>=14){
    echo "grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings";
  }elseif($percent>=6){
    echo "first cousins";
  }elseif($percent>=3){
    echo "second cousins";
  }elseif($percent>=1){
    echo "third cousins";
  }else{
    echo "not genetically related";
  }
}
whatRelation(100);
echo "\n";
whatRelation(35);
echo "\n";
whatRelation(14);
echo "\n";
whatRelation(6);
echo "\n";
whatRelation(3);
echo "\n";
whatRelation(1);
echo "\n";
whatRelation(0);
echo "\n";


// identical twins
// parent and child or full siblings
// grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings
// first cousins
// second cousins
// third cousins
// not genetically related

```


```python
%%html
<?php
namespace Codecademy;
function airQuality($color){
  switch($color){
    case "green":
      echo "good";
      break;
    case "yellow":
      echo "moderate";
      break;
    case "orange":
      echo "unhealthy for sensitive groups";
      break;
    case "red":
      echo "unhealthy";
      break;
    case "purple":
      echo "very unhealthy";
      break;
    case "maroon":
      echo "hazardous";
      break;
    default:
      echo "invalid color";
  }
}
airQuality("orange");
echo "\n";
airQuality("red");
echo "\n";
airQuality("maroon");

```


```python
%%html
<?php
namespace Codecademy;
function returnSeason($month){
  switch($month){
    case "December":
    case "January":
    case "February":
      return "winter";
      break;
    case "March":
    case "April":
    case "May":
      return "spring";
      break;
    case "June":
    case "July":
    case "August":
      return "summer";
      break;
    case "September":
    case "October":
    case "November":
      return "fall";
    default:
      return "";
  }
}
echo returnSeason("September");
```


```python
%%html
<?php
namespace Codecademy;
function ternaryCheckout($items){
  return $items<=12?"express lane":"regular lane";
}
echo ternaryCheckout(3);
echo "\n";
echo ternaryCheckout(14);
function ternaryVote($age){
  return $age>=18?"yes":"no";
}
echo "\n".ternaryVote(18);
echo "\n";
echo ternaryVote(17);

```


```python
Your function should return the string "True" if invoked with a truthy value. We tested your function with several truthy values (like non-zero negative numbers, arrays with elements, and strings) and expected "True" but instead it returned False

```


```python
%%html
<?php
namespace Codecademy;
function truthyOrFalsy($any){
  if($any == true){
    return "True";
  }else{
    return "False";
  }
}

echo truthyOrFalsy("truthy")."\n";
echo truthyOrFalsy("");

```


```python
%%html
<?php
namespace Codecademy;

echo "Hello, there. What's your first name?\n";
$name = readline(">> ");
$len_name=strlen($name);
if($len_name>8){
  echo "Hi, ${name}. That's a long name.";
}elseif($len_name>=4 && $len_name<=8){
  echo "Hi, $name.";
}else{
  echo "Hi, ${name}. That's a short name.";
}

```

```
$ php src/index.php
Hello, there. What's your first na
me?
>> dd
Hi, dd. That's a short name.$
```

%%html
<?php
$gryffindor = 0;
$hufflepuff = 0;
$ravenclaw = 0;
$slytherin = 0;

//$answer1, $answer2, $answer3;

echo  "================\nThe Sorting Hat!\n================\n\n";


  // ~~~~~~~~~~ Question 1 ~~~~~~~~~~

  echo "Q1) When I'm dead, I want people to remember me as:\n\n  1) The Good\n  2) The Great\n  3) The Wise\n  4) The Bold\n\nEnter your answer (1-4): ";
  
  

  $answer1 = readline(">>");

  if ($answer1 === "1")
    $hufflepuff++;
  elseif ($answer1 === "2")
    $slytherin++;
  elseif ($answer1 === "3")
    $ravenclaw++;
  elseif ($answer1 === "4")
    $gryffindor++;

  // ~~~~~~~~~~ Question 2 ~~~~~~~~~~

  echo "\nQ2) Dawn or Dusk?\n\n  1) Dawn\n  2) Dusk\n\nEnter your answer (1-2): ";

  $answer2 = readline(">>");

  if ($answer2 === "1") 
  {
    
    $gryffindor++;
    $ravenclaw++;
  
  } 
  elseif ($answer2 === "2") 
  {

    $hufflepuff++;
    $slytherin++;

  }
  else 
  {

    echo "Invalid input\n";

  }

  // ~~~~~~~~~~ Question 3 ~~~~~~~~~~

  echo "\nQ3) Which kind of instrument most pleases your ear?\n\n  1) The violin\n  2) The trumpet\n  3) The piano\n  4) The drum\n\nEnter your answer (1-4): ";

  $answer3 = readline(">>");

  if ($answer3 === "1")
    $slytherin++;
  elseif ($answer3 === "2")
    $hufflepuff++;
  elseif ($answer3 === "3")
    $ravenclaw++;
  elseif ($answer3 === "4")
    $gryffindor++;

  // ~~~~~~~~~~ Question 4 ~~~~~~~~~~

  echo "\nQ4) Which road tempts you the most?\n\n  1) The wide, sunny grassy lane\n  2) The narrow, dark, lantern-lit alley\n  3) The twisting, leaf-strewn path through woods\n  4) The cobbled street lined (ancient buildings)\n\nEnter your answer (1-4): ";

  $answer4 = readline(">>");

  if ($answer4 === "1")
    $hufflepuff++;
  elseif ($answer4 === "2")
    $slytherin++;
  elseif ($answer4 === "3")
    $gryffindor++;
  elseif ($answer4 === "4")
    $ravenclaw++;
  
  // ========== Sorting ==========

  echo "Congrats on being sorted into... ";

  $max = 0;
  $house = "";

  if ($gryffindor > $max) 
  {

    $max = $gryffindor;
    $house = "Gryffindor";
    
  }

  if ($hufflepuff > $max) 
  {

    $max = $hufflepuff;
    $house = "Hufflepuff";

  }
  
  if ($ravenclaw > $max) 
  {

    $max = $ravenclaw;
    $house = "Ravenclaw";

  }
  
  if ($slytherin > $max) 
  {

    $max = $slytherin;
    $house = "Slytherin";

  }
  
  echo $house . "!\n";




#### Logical Operators and Compound Conditions
LESSON
In this lesson, you’ll deepen your understanding of conditionals with logical operators and compound conditions.

Exercises

1. Nested Conditional Statements

2. The || Operator

3. The && Operator

4. The Not Operator

5. The Xor Operator

6. Alternate Syntax

7. Multi-File Programs: include

8. Review



```python
%%html
<?php
namespace Codecademy;

function both($b1, $b2){
  if($b1){
    if($b2){
      return "both";
	}else{
	  return "not both";
	}
  }else{
    return "not both";
  }
}
echo both(true,true);
echo "\n";
echo both(true,false);
echo "\n";

```


```python
%%html
<?php
namespace Codecademy;
function willWeEat($meal, $hungry){
  if($meal==="dessert"||$hungry==true){
    return "Yum. Thanks!";
  }else{
    return "No thanks. We're not hungry.";
  }
}

echo willWeEat("dessert",false);
echo "\n";
echo willWeEat("milk",true);
echo "\n";
echo willWeEat("milk",false);

```


```python
%%html
<?php
namespace Codecademy;
function clapYourHands($happy, $know){
  if($happy && $know){
    return "CLAP!";
  }else{
    return ":(";
  }
}
echo clapYourHands(true,true);
echo "\n";
echo clapYourHands(true,false);
echo "\n";
echo clapYourHands(false,true);
echo "\n";

```


```python
%%html
<?php
namespace Codecademy;
function duckDuckGoose($is_goose){
  if(!$is_goose){
    return "duck";
  }else{
    return "goose!";
  }
}
echo duckDuckGoose(true);
echo "\n";
echo duckDuckGoose(false);
echo "\n";
echo duckDuckGoose(false);
echo "\n";

```


```python
%%html
<?php
namespace Codecademy;
$banana_cream = ["whole milk", "sugar", "cornstarch", "salt", "egg yolks", "butter", "vanilla extract", "bananas", "heavy cream", "powdered sugar"];
$experimental_pie = ["whole milk", "sugar", "bananas", "chicken", "salmon", "garlic"];

// Write your code below:
function eatPie($ar){
  if(in_array("chicken",$ar) xor in_array("bananas",$ar)){
    return "Delicious pie!";
  }else
    return "Disgusting!";
}
echo eatPie($banana_cream);
echo "\n";
echo eatPie($experimental_pie);

```


```python
%%html
<?php
namespace Codecademy;

$is_admin = FALSE;
$is_user = TRUE;
if ($is_admin or $is_user){
  echo "You can change the password.\n";
}


$correct_pin = TRUE;
$sufficient_funds = TRUE;
if ($correct_pin and $sufficient_funds){
  echo "You can make the withdrawal.";
}
```


```python
%%html
<?php
  
include "top_bread.php";
include "mayo.php";
include "lettuce.php";
echo "Hello! ";
include "bottom_bread.php";

```


```python
#### Loops
LESSON
Learn how to repeat code execution using loops in PHP.

Exercises

1. Why Use Loops?

2. while

3. do while

4. for

5. foreach

6. break and continue

7. Review

```


```python
%%html
<?php
$count=1;
while($count<=100){
  if($count%33===0){
    echo $count." is divisible by 33\n";
  }
  $count += 1;
}

// 33 is divisible by 33
// 66 is divisible by 33
// 99 is divisible by 33

```


```python
%%html
<?php
  $plant_height = 22;

do{
echo "The plant is ${plant_height} tall.\n";
  echo "The plant is ${plant_height} tall.\n";
  if($plant_height>=30){
    echo "And can produce fruit.";
  }
  $plant_height+=1;
}while($plant_height<=30);

```


```python
%%html
<?php
for($i=10;$i>=0;$i--){
  if($i>=3){
  echo $i."\n";
  }elseif($i==2){
    echo "Ready!\n";
  }elseif($i==1){
    echo "Set!\n";
  }else{
    echo "Go!\n";
  }
} 
```


```python
%%html
<?php
$scores = [
  "Alice" => 99,
  "Bob" => 95,
  "Charlie" => 98,
  "Destiny" => 91,
  "Edward" => 88
];

foreach($scores as $name => $num){
  echo $name." received a score of ${num}.\n";
}

// Alice received a score of 99.
// Bob received a score of 95.
// Charlie received a score of 98.
// Destiny received a score of 91.
// Edward received a score of 88.
```


```python
%%html
<?php
  for ($i = 10; $i >= 0; $i--) {
  if($i === 6){
    continue;
  }elseif($i === 2){
      echo "Ready!\n";
    } elseif ($i === 1) {
      echo "Set!\n";
      break;
    } elseif ($i === 0) {
      echo "Go!\n";
    } else {
      echo $i . "\n";
    }
  }
```

#### Loops in HTML
LESSON
PHP provides some useful shorthand for using loops in HTML. Learn how to use this shorthand to create repetitive HTML without copying and pasting.

Exercises

1. Why Use Shorthand?

2. Loop Shorthand

3. Code Block Considerations

4. Review



```python
%%html
<?php
for ($i = 0; $i < 5; $i++) :
?>
<p>We sell shoes</p>
<?php
endfor;
?>
```


```python
%%html
<h1>Only Shoes Shoe Shop</h1>
<?php
$i = 0;
$repeats = [0, 1];
while ($i < 5) :
?>
<p>We sell shoes</p>
  <?php
  foreach ($repeats as $value): 
  ?>
  <p>(only shoes)</p>
  <?php
  endforeach;
  ?>
<?php
  $i++;
endwhile;
?>
```


```python
%%html
<h1>Shoe Shop</h1>
<?php
$footwear = [
  "sandals" => 4,
  "sneakers" => 7,
	"boots" => 3
];
?>
<p>Our footwear:</p>
<?php
foreach ($footwear as $type => $brands):
?>
<p>We sell <?=$brands?> brands of <?=$type?></p>
<?php
endforeach;
?>
```

#### Introduction to Form Validation
LESSON
Learn about why validating form input is so important and various methods to accomplish it.

Exercises

1. Introduction

2. Why Validate Forms?

3. Regular Expressions

4. Client-side Validation: HTML

5. Client-side Validation: JavaScript

6. Back-end Validation

7. Review



```python
%%html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <body>
    <h1>Basic HTML Validation</h1>
    <form action="" method="POST">
      <label for="text">Enter your name here:</label>
    	<input id="name" name="name" type="text" required minlength="3" maxlength="100">
      <br><br>
      <label for="number">Enter your age here:</label>
      <input type="number" name="age" id="age" required min="1" max="123">
      <br><br>
        <label for="code">Best place to learn to code: (hint: starts with a "C")</label>
  <input id="code" name="code" type="text" required pattern="[cC]odecademy">
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <body>
    <h1>Basic HTML Validation</h1>
    <form action="" method="POST">
      <label for="text">Enter your name here:</label>
    	<input id="name" name="name" type="text" required minlength="3" maxlength="100">
      <br><br>
      <label for="number">Enter your age here:</label>
      <input type="number" name="age" id="age" required min="1" max="123">
      <br><br>
        <label for="code">Best place to learn to code: (hint: starts with a "C")</label>
  <input id="code" name="code" type="text" required pattern="[cC]odecademy">
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>



#### Introduction to Regular Expressions
LESSON
In this lesson you will learn the syntax of regular expressions and how you can utilize them to match and search text data!

Exercises

1. Introduction

2. Literals

3. Alternation

4. Character Sets

5. Wild for Wildcards

6. Ranges

7. Shorthand Character Classes

8. Grouping

9. Quantifiers - Fixed

10. Quantifiers - Optional

11. Quantifiers - 0 or More, 1 or More

12. Anchors

13. Review


https://s3.amazonaws.com/codecademy-content/courses/regex/on


```python
%%html
cat
dog
cat|dog
```


```python
%%html
cat
hat
rat
[chr]at
```


```python
%%html
....\.
bear.
lion.
orca.

```


```python
%%html
Ranges

cub
dog
elk
..[bgk]
```


```python
%%html
Shorthand Character Classes
\d ......

5 sloths
8 llamas
7 hyenas
```


```python
%%html
Grouping
puppies are my favorite!
kitty cats are my favorite!

(puppies|kitty cats) are my favorite!
```


```python
%%html
Quantifiers - Fixed

squea{3,5}k

Match these strings
✅squeaaak
✅squeaaaak
✅squeaaaaak
Don't match these strings
🚫squeak
🚫squeaak
🚫squeaaaaaak
```


```python
%%html
Quantifiers - Optional

\d ducks? for adoption\?

Match these strings
✅1 duck for adoption?
✅5 ducks for adoption?
✅7 ducks for adoption?
```


```python
%%html
Quantifiers - 0 or More, 1 or More
```


```python
%%html

hoo+t

Match these strings
✅hoot
✅hoooooot
✅hooooooooooot
Don't match these strings
🚫hot
🚫hoat
🚫hoo
```


```python
%%html
Anchors
^penguins are cooler than regular expressions$

Match this string
✅penguins are cooler than regular expressions
Don't match these strings
🚫king penguins are cooler than regular expressions
🚫penguins are cooler than regular expressions!
```


```python
%%html

([.\(\) -]?\d[.\(\) -]?){10,11}

Match these strings
✅718-555-3810
✅9175552849
✅1 212 555 3821
✅(917)5551298
✅212.555.8731
```

#### Introduction to PHP Form Validation
LESSON
Learn the basic theory and practice of validating and sanitizing user input.

Exercises

1. Introduction

2. Form Handling

3. Simple Validation

4. Basic Data Sanitizing

5. Basic Sanitization with filter_var()

6. Basic Validation with filter_var()

7. Using Options with filter_var()

8. Custom Validations

9. Validating Against Back-end Data

10. Sanitizing for Back-end Storage

11. Rerouting

12. Review



```python
%%html
<?php
// Define checkWord() here:
function checkWord($word, $letter){
  if($_SERVER["REQUEST_METHOD"] === "POST"){
    if($word[0]!=$letter){
      return "* This word must start with the letter ${letter}!";
    }
  }
  return "";
}  
  
  
  
  
?>
  
<h1>Time to Practice our ABCs</h1>
<form method="post" action="">
    Enter a word that starts with the letter "a":
    <br>
    <input type="text" name="a-word" id="a-word" value="<?= $_POST["a-word"]?>">
    <br>      
      <p class="error" id="a-error"><?="". checkWord($_POST["a-word"], "a") ?></p>
      
    <br>     
    Enter a word that starts with the letter "b":
    <br>
    <input type="text" id="b-word" name="b-word" value="<?= $_POST["b-word"]?>">
    <br>      
      <p class="error" id="b-error"><?= checkWord($_POST["b-word"],"b")?></p>
      
    <br>
    Enter a word that starts with the letter "c":
    <br>
    <input type="text" id="c-word" name="c-word" value="<?= $_POST["c-word"]?>">
      <p class="error" id="c-error"><?= checkWord($_POST["c-word"],"c")?></p>
    <br>      
      
    <br>
    <input type="submit" value="Submit Words">
</form>
<div>
    <h3>"a" is for: <?= $_POST["a-word"];?><h3>
    <h3>"b" is for: <?= $_POST["b-word"];?><h3>
    <h3>"c" is for: <?= $_POST["c-word"];?><h3>    
<div>  
```


```python
%%html
<form method="post" action="">
Enter some HTML:
<br>
<input type="text" name="html">
<br>  
<input type="submit" value="Submit">
</form>
<div>
  You entered:
	<?= htmlspecialchars($_POST["html"]);
//You entered: <h1>Hello, world!</h1> 
    ?> 
</div>  
```


<form method="post" action="">
Enter some HTML:
<br>
<input type="text" name="html">
<br>  
<input type="submit" value="Submit">
</form>
<div>
  You entered:
	<?= htmlspecialchars($_POST["html"]);
//You entered: <h1>Hello, world!</h1> 
    ?> 
</div>  




```python
%%html
<?php
$validation_error = "";
$user_answer = "";
$submission_response = "";

// Write your code here:
if ($_SERVER["REQUEST_METHOD"] === "POST"){
  $user_answer = filter_var($_POST["answer"], FILTER_SANITIZE_NUMBER_INT);
  if($user_answer == -5){
    $submission_response = "Correct!";
  }else{
    $validation_error = "* Wrong answer. Try again.";
  }
}







?>
<h2>Time for a math quiz!</h2>
<form method="post" action="">
<h4>Question 1:</h4>  
<p>What is 6 - 11?</p> 
<input type="text" name="answer" id="answer" value="<?= $user_answer;?>">
<br>
<span class="error" id="error"><?= $validation_error;?></span> 
<br> 
<input type="submit" value="Submit Your Answer">
</form>
<div>
  <p id="answer-display">Your answer was: <?= $user_answer;?></p>
  <p id="submission-response"><?= $submission_response;?></p>
</div>
```


```python
%%html
<?php
$validation_error = "";
$user_url = "";
$form_message = "";

// Write your code here:
if($_SERVER["REQUEST_METHOD"]=== "POST"){
  $user_url = $_POST["url"];
  if(filter_var($user_url, FILTER_VALIDATE_URL)){
    $form_message = "Thank you for your submission.";
  }else{
    $validation_error = "* This is an invalid URL.";
    $form_message = "Please retry and submit your form again.";
  }
}

```


```python
%%html

```


```python
%%html
<?php
$message = "";
$month_error = "";
$day_error = "";
$year_error = "";
  
// Create your variables here:
$month_options = ["options" => ["min_range" => 1, "max_range" => 12]];
$day_options = ["options" => ["min_range" => 1, "max_range" => 31]];
$year_options = ["options" => ["min_range" => 1903, "max_range" => 2020]];



// Define your function here:
function validateInput($type, &$error, $options_arr){
  
}






  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Uncomment the code below:
    $test_month/* = validateInput("month", $month_error, $month_options)*/;
    $test_day/* = validateInput("day", $day_error, $day_options)*/;
    $test_year/* = validateInput("year", $year_error, $year_options)*/;    
    if ($test_month && $test_day && $test_year){
      $message = "Your birthday is: {$_POST["month"]}/{$_POST["day"]}/{$_POST["year"]}";
    }  
  }

?>

<form method="post" action="">
	Enter your birthday:
	<br>
	Month: <input type="number" name="month" value="<?= $_POST["month"];?>">
	<span class="error"><?= $month_error;?>		</span>
  <br>
	Day: <input type="number" name="day" value="<?= $_POST["day"];?>">
  <span class="error"><?= $day_error;?>		</span>
	<br>  
	Year: <input type="number" name="year" value="<?= $_POST["year"];?>">  
	<span class="error"><?= $year_error;?>		</span>
	<br>
	<input type="submit" value="Submit">
</form>
    <p><?= $message;?></p>
```


```python
%%html
<?php
$message = "";
$month_error = "";
$day_error = "";
$year_error = "";
  
// Create your variables here:
$month_options = ["options" => ["min_range" => 1, "max_range" => 12]];
$day_options = ["options" => ["min_range" => 1, "max_range" => 31]];
$year_options = ["options" => ["min_range" => 1903, "max_range" => 2020]];



// Define your function here:
function validateInput($type, &$error, $options_arr){
  if(filter_var($_POST[$type], FILTER_VALIDATE_INT,$options_arr)){
    return true;
  }else{
    $error = "* Invalid ${type}";
    return false;
  }
}
// $month = $_POST["month"];





  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Uncomment the code below:
    $test_month= validateInput("month", $month_error, $month_options);
    $test_day= validateInput("day", $day_error, $day_options);
    $test_year= validateInput("year", $year_error, $year_options);    
    if ($test_month && $test_day && $test_year){
      $message = "Your birthday is: {$_POST["month"]}/{$_POST["day"]}/{$_POST["year"]}";
    }  
  }

?>

<form method="post" action="">
	Enter your birthday:
	<br>
	Month: <input type="number" name="month" value="<?= $_POST["month"];?>">
	<span class="error"><?= $month_error;?>		</span>
  <br>
	Day: <input type="number" name="day" value="<?= $_POST["day"];?>">
  <span class="error"><?= $day_error;?>		</span>
	<br>  
	Year: <input type="number" name="year" value="<?= $_POST["year"];?>">  
	<span class="error"><?= $year_error;?>		</span>
	<br>
	<input type="submit" value="Submit">
</form>
    <p><?= $message;?></p>

```

```
Enter your birthday:
Month: 
3

Day: 
3

Year: 
2000

Your birthday is: 3/3/2000
```

If the form has been submitted, and the card number provided is greater than 100 digits, $feedback should be assigned the value of $error_message. Expected $feedback to equal "* There was an error with your card. Please try again." but found it to equal: ""


```python
%%html
<?php
$feedback = "";
$success_message = "Thank you for your donation!";
$error_message = "* There was an error with your card. Please try again.";

$card_type = "";
$card_num = "";
$donation_amount = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $card_type = $_POST["credit"];
    $card_num = $_POST["card-num"];
    $donation_amount = $_POST["amount"];

// Write your code here:
echo $card_type;
  if(strlen($card_num)>100){
    $feedback = $error_message;
  }else{
    if($card_type==="mastercard"){
      if(preg_match("/5[1-5][0-9]{14}/", $card_num)){
        $feedback = $success_message;
      }else{
        $feedback = $error_message;
        
      }
  }else{
      if(preg_match("/4[0-9]{12}([0-9]{3})?([0-9]{3})?/", $card_num)){
        $feedback = $success_message;
      }else{
        $feedback = $error_message;
        
      }
    
  }
  }
}
?>
<form action="" method="POST">
  <h1>Make a donation</h1>
    <label for="amount">Donation amount?</label>
      <input type="number" name="amount" value="<?= $donation_amount;?>">
      <br><br>
    <label for="credit">Credit card type?</label>
      <select name="credit" value="<?= $card_type;?>">
        <option value="mastercard">Mastercard</option>
        <option value="visa">Visa</option>
      </select>
      <br><br>
      <label for="card-num">Card number?</label>
      <input type="number" name="card-num" value="<?= $card_num;?>">
      <br><br>   
      <input type="submit" value="Submit">
</form>
<span class="feedback"><?= $feedback;?></span>

```


```python
%%html
<?php
$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];  
  
  
$feedback = "";
$message = "You're logged in!";
$validation_error = "* Incorrect username or password.";
$username = "";

// Write your code here:
if($_SERVER["REQUEST_METHOD"]=="POST"){
  $username = $_POST["username"];
  $password = $_POST["password"];
  if(isset($users[$username]) && $users[$username]===$password){
    $feedback = $message;
  }else{
    $feedback = $validation_error;
  }
}








?>
  
<h3>Welcome back!</h3>
<form method="post" action="">
Username:<input type="text" name="username" value="<?php echo $username;?>">
<br>
Password:<input type="text" name="password" value="">
<br>
<input type="submit" value="Log in">
</form>
<span class="feedback"><?= $feedback;?></span>
```


```python
%%html
<?php
$contacts = ["Susan" => "5551236666", "Alex" => "7779991717", "Lily" => "8181117777"];  
$message = "";
$validation_error = "* Please enter a 10-digit North American phone number.";
$name = "";
$number = "";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = $_POST["name"];
   $number  = $_POST["number"];
   // Write your code here:
      if(strlen($number)>30){
     $message = $validation_error;
   }else{

    $number1 = preg_replace("/[^0-9]/","", $number);

     if(strlen($number1)==10){
       // if(!array_key_exists($number1,$contacts)){
       // $contacts[$number1] = $name; }
       $contacts[$name] = $number1; 
       
       echo $number1." ".$name;
       // print_r $contacts;
       $message = "Thanks ${name}, we'll be in touch.";
     }else{
       $message = $validation_error;
     }
   }

   
  
   
   

};
?>
<html>
	<body>
  <h3>Contact Form:</h3>
		<form method="post" action="">
			Name:
			<br>
  		<input type="text" name="name" value="<?= $name;?>">
 			<br><br>
  		Phone Number:
  		<br>
  		<input type="number" name="number" value="<?= $number;?>">
  		<br><br> 
  		<input type="submit" value="Submit">
		</form>
		<div id="form-output">
			<p id="response"><?= $message?></p>
    </div>
	</body>
</html>

```


```python
%%html
<?php
$validation_error = "";
$username = "";
$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];

 if ($_SERVER["REQUEST_METHOD"] === "POST") {
   $username = $_POST["username"];
   $password  = $_POST["password"];
   if (isset($users[$username]) && $users[$username] === $password){
// Add your code here:
  header("Location:success.html");;
     exit;
     
     
   } else {
     $validation_error = "* Incorrect username or password.";
   }
 }

?>
  
<h3>Welcome back!</h3>
<form method="post" action="">
Username:<input type="text" name="username" value="<?php echo $username;?>">
<br>
Password:<input type="text" name="password" value="">
<br>
<span class="error"><?= $validation_error;?></span>
<br>
<input type="submit" value="Log in">
</form>

```


```python
#### Classes and Objects
LESSON
Learn what classes are and how to create your own in PHP.

Exercises

1. Introduction

2. What are Classes?

3. Instantiating

4. Methods

5. Constructor Method

6. Inheritance

7. Overloading Methods

8. Visibility - Private Members

9. Visibility - Protected Members

10. Getters and Setters

11. Static Members

12. Review

```


```python
%%html
<?php
class Beverage {
  public $temperature, $color, $opacity;
  function getInfo(){
    return "This beverage is $this->temperature and {$this->color}.";
  }
}

$soda = new Beverage();
$soda->color = "black";
$soda->temperature = "cold";
echo $soda->getInfo();
 

```


```python
%%html
<?php
class Beverage {
  public $temperature, $color, $opacity;
  function __construct($temperature,$color){
$this->temperature = $temperature;
    $this->color = $color;
  }
  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }
}
echo (new Beverage("cold","black"))->getInfo();

```


```python
%%html
<?php
class Beverage {
  public $temperature;
  
  function getInfo() {
    return "This beverage is $this->temperature.";
  }
}
class Milk extends Beverage{
  function __construct(){
    $this->temperature="cold";
  }
}

```


```python
%%html
<?php
class Beverage {
  public $temperature;
  
  function getInfo() {
    return "This beverage is $this->temperature.";
  }
}

class Milk extends Beverage {
  function __construct() {
    $this->temperature = "cold";
  }
  function getInfo(){
    return "This beverage is ". $this->temperature .". I like my milk this way.";
  }
}
$milk = new Milk();
echo $milk->getInfo();

```


```python
%%html
<?php
class Beverage {
  private $temperature, $color;
  public $opacity;
  function __construct($temperature, $color) {
    $this->temperature = $temperature;
    $this->color = $color;
  }
  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }
}
class Milk extends Beverage {
  function setOpacity($opacity) {
    $this->opacity = $opacity;
  }
}

```


```python
%%html
<?php
class Beverage {
  private $temperature, $color;
  protected $opacity;
  function __construct($temperature, $color) {
    $this->temperature = $temperature;
    $this->color = $color;
  }
  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }
}
class Milk extends Beverage {
  function setOpacity($opacity) {
    $this->opacity = $opacity;
  }
}

```


```python
%%html
<?php
class Beverage {
  private $color;
  function setColor($color){
    $this->color = strtolower($color);
  }
  function getColor(){
    return $this->color;
  }
}

$soda = new Beverage();

```


```python
%%html
<?php
class AdamsUtils {
  static $the_answer = 42;
  static function addTowel($string) {
    return $string . " and a towel.";
  }
}

$items = "I brought apples";
echo AdamsUtils::$the_answer;
echo "\n";
echo AdamsUtils::addTowel($items);

```


```python
%%html

```


```python
%%html

```


```python
%%html

```

14.02 0-11-17-23  
15.02 23-29-35  
16.02 35-41  
17.02 41-47-52  
18.02 52-58-64-70-76-82-  
19.02 82-88-
21.02 88-94



a|b|c|d|e|f
--|--|--|--|--|--
conversation|беседа|Sequences|последовательность|off with |с того, что
meal |еда|tip|чаевые|couple|пара
glue|клей|grades |оценки||
|||||
|||||
|||||
|||||


