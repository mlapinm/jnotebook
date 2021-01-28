## Kotlin Course for Beginners and Java DevsKotlin Course for Beginners and Java Devs
## Kotlin for Beginners - Part 1 - WHY LEARN KOTLIN?
[Kotlin for Beginners - Part 1 - WHY LEARN KOTLIN?](https://www.youtube.com/watch?v=k9K71QkrHGE&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=1)  
  
[b6492kotl](b6494code.md)  
## Kotlin for Beginners - Part 2.1 - INSTALL INTELLIJ IDEA ON WINDOWS
[Kotlin for Beginners - Part 2.1 - INSTALL INTELLIJ IDEA ON WINDOWS](https://www.youtube.com/watch?v=fwZyfudxnNo&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=2)  
  
[b6492kotl](b6494code.md)  
## Kotlin for Beginners - Part 2.2 - INSTALL INTELLIJ IDEA ON MAC
[Kotlin for Beginners - Part 2.2 - INSTALL INTELLIJ IDEA ON MAC](https://www.youtube.com/watch?v=zGCRnqSUJn4&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=3)  
  
[B649036kotl](b6494code.md)  
## Kotlin for Beginners - Part 3 - HELLO WORLD!
[Kotlin for Beginners - Part 3 - HELLO WORLD!](https://www.youtube.com/watch?v=1676actiiME&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=4)  
  
[b649038kotl](b6494code.md)  
```
fun main() {
    println("Hello, world!")
}
```
## Kotlin for Beginners - Part 4 - VARIABLES
[Kotlin for Beginners - Part 4 - VARIABLES](https://www.youtube.com/watch?v=kYO7YWVB3jY&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=5)  
  
[b649042kotl](b6494code.md)  
```
fun main() {
    val userName = "Florian"
    var age = 28

    println("Hello, world! My name is $userName. I am $age years old. In 2 years, I'll be ${age + 2}.")
}

```
## Kotlin for Beginners - Part 5 - BASIC DATA TYPES
[Kotlin for Beginners - Part 5 - BASIC DATA TYPES](https://www.youtube.com/watch?v=b_qtmAL9540&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=6)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val exampleString = "\"Florian\nWalther\""
    val exampleRawString = """ "Florian
Walther" """
    print(exampleRawString)

    val exampleNumber: Double
    exampleNumber = 2_000_000.12
    val exampleLong: Long = exampleNumber.toLong()

    val exampleChar = '?'
    val exampleInt: Int = exampleChar.toInt()

    val exampleBoolean = false
}

```
## Kotlin for Beginners - Part 6 - ARITHMETIC OPERATORS
[Kotlin for Beginners - Part 6 - ARITHMETIC OPERATORS](https://www.youtube.com/watch?v=zzYKHR7nTe0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=7)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    var a = 5
    val b = 3.0

    println("a = " + a + " b = " + b)

    println("a + b = ${a + b}")
    println("a - b = ${a - b}")
    println("a * b = ${a * b}")
    println("a / b = ${a / b}")
    println("a % b = ${a % b}")

    println("(2 + 2) * 3 = ${(2 + 2) * 3}")

    println("-a = ${-a}")

    a += 2
    println("a += 2: $a")

    println("a++: ${a++}")
    println("++a: ${++a}")

    a -= 2
    println("a -= 2: $a")

    println("a--: ${a--}")
    println("--a: ${--a}")

    a *= 2
    println("a *= 2: $a")

    a /= 2
    println("a /= 2: $a")

    a %= 2
    println("a %= 2: $a")
}
```
## Kotlin for Beginners - Part 7 - READ, EVAL, PRINT, LOOP (REPL)
[Kotlin for Beginners - Part 7 - READ, EVAL, PRINT, LOOP (REPL)](https://www.youtube.com/watch?v=lUiePALzrQs&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=8)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    var a = 5
    val b = 3.0

    println("a = " + a + " b = " + b)

    println("a + b = ${a + b}")
    println("a - b = ${a - b}")
    println("a * b = ${a * b}")
    println("a / b = ${a / b}")
    println("a % b = ${a % b}")

    println("(2 + 2) * 3 = ${(2 + 2) * 3}")

    println("-a = ${-a}")

    a += 2
    println("a += 2: $a")

    println("a++: ${a++}")
    println("++a: ${++a}")

    a -= 2
    println("a -= 2: $a")

    println("a--: ${a--}")
    println("--a: ${--a}")

    a *= 2
    println("a *= 2: $a")

    a /= 2
    println("a /= 2: $a")

    a %= 2
    println("a %= 2: $a")
}
```
## Kotlin for Beginners - Part 8 - COMMENTS
[Kotlin for Beginners - Part 8 - COMMENTS](https://www.youtube.com/watch?v=4CjchnS02ys&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=9)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    var a = 5
    val b = a.toLong()

    println("a = " + a + " b = " + b)

   // println("a + b = ${a + b}")
    println("a - b = ${a - b}") // subtracts b from a
    println("a * b = ${a * b}")
    println("a / b = ${a / b}")
    println("a % b = ${a % b}")
/*
    println("(2 + 2) * 3 = ${(2 + 2) * 3}")

    println("-a = ${-a}")

    a += 2
    println("a += 2: $a")
*/
    println("a++: ${a++}")
    println("++a: ${++a}")

    a -= 2
    println("a -= 2: $a")

    println("a--: ${a--}")
    println("--a: ${--a}")

    a *= 2
    println("a *= 2: $a")

    a /= 2
    println("a /= 2: $a")

    a %= 2
    println("a %= 2: $a")
}
```
## Kotlin for Beginners - Part 9 - ARRAYS
[Kotlin for Beginners - Part 9 - ARRAYS](https://www.youtube.com/watch?v=lWd6TYhnJAk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=10)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val names = arrayOf("Jim", "John", "Jenny", "Jamie")

    names[0] = "Jeremy"

    println("Number of elements: ${names.size}")
    println("First element: ${names[0]}")
    println("Last element: ${names[2]}")
}
```
## Kotlin for Beginners - Part 10 - FOR-LOOP & RANGES
[Kotlin for Beginners - Part 10 - FOR-LOOP & RANGES](https://www.youtube.com/watch?v=N0p2XUqmU1k&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=11)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val names = arrayOf("Jim", "John", "Jenny", "Jamie")

    //for (name in names) println(name)

    names.indices
    //Index: ___ Element: ___

    //for (i in 1..10) println(i)

    //for (i in 1 until 10) println(i)

    //for (i in 10L downTo 1) println(i)

    //for (i in 'a'..'z' step 2) println(i)
}
```
## Kotlin for Beginners - Part 11 - COMPARISON & LOGICAL OPERATORS
[Kotlin for Beginners - Part 11 - COMPARISON & LOGICAL OPERATORS](https://www.youtube.com/watch?v=NrmFU1womI0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=12)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    println("2 > 1 is ${2 > 1}")
    println("2 < 1 is ${2 < 1}")
    println("1 >= 1 is ${1 >= 1}")

    println("1 == 1 is ${1 == 1}")
    println("1 == 2 is ${1 == 2}")
    println("1 != 2 is ${1 != 2}")

    println("!(2 > 1) is ${!(2 > 1)}")

    println("true && false = ${true && false}")
    println("true || false = ${true || false}")

    val condition = (2 > 1) || (3 > 2) && (2 > 3)
    println(condition)
}
```
## Kotlin for Beginners - Part 12 - WHILE, DO-WHILE & LABELS
[Kotlin for Beginners - Part 12 - WHILE, DO-WHILE & LABELS](https://www.youtube.com/watch?v=U9UzVgLsqDQ&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=13)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    var i = 0

    outer@ do {
        println(i)
        i++
        //continue

        var j = 0

        while (j < 5) {
            println("---$j")
            j++
            break@outer
            println("I'm not printed")
        }

        println("I'm printed")

    } while (i < 5)

    var number = 8
}
```
## Kotlin for Beginners - Part 13 - IF/ELSE
[Kotlin for Beginners - Part 13 - IF/ELSE](https://www.youtube.com/watch?v=RfRbDIxXLtg&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=14)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    for (i in 1..10) {

        val prefix = if (i == 1) {
            "*"
        } else if (i !in 4..7) {
            "-"
        } else {
            print("-")
            ">"
        }

        println("$prefix $i")
    }

    val time = 10
}
```
## Kotlin for Beginners - Part 14 - WHEN
[Kotlin for Beginners - Part 14 - WHEN](https://www.youtube.com/watch?v=J4uBhZKzH3U&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=15)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val time = 14
    val isSunday = true

    val greeting = when {
        isSunday -> "I'm gonna stay in bed all day!"
        time < 5 -> "Why up so early?"
        in 0..11 -> "Good morning!"
        12 -> "Time for lunch!"
        13, 14 -> {
            println("Yawn...")
            "Time for a nap!"
        }
        else -> "Good day!"
    }

    println(greeting)
}```
## Kotlin for Beginners - Part 15 - FUNCTION PARAMETERS (ARGUMENTS)
[Kotlin for Beginners - Part 15 - FUNCTION PARAMETERS (ARGUMENTS)](https://www.youtube.com/watch?v=gDibWtiAkUQ&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=16)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    greet("Herbert", 5)
}

fun greet(name: String, reps: Int) {
    var repsLeft = reps

    while (repsLeft > 0) {
        println("Hello, $name! Nice to meet you!")
        repsLeft--
    }
}
```
## Kotlin for Beginners - Part 16 - FUNCTION RETURN VALUES & THE UNIT TYPE
[Kotlin for Beginners - Part 16 - FUNCTION RETURN VALUES & THE UNIT TYPE](https://www.youtube.com/watch?v=fuArubmkPrk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=17)  
  
[b6492kotl](b6494code.md)  
Unit -==- void
```
fun main(): Unit {
    val max = getMax(12, 2)
    println(max)
}

fun getMax(num1: Int, num2: Int): Int {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }

    println("This will not be printed")
}
```
## Kotlin for Beginners - Part 17 - SINGLE EXPRESSION FUNCTIONS
[Kotlin for Beginners - Part 17 - SINGLE EXPRESSION FUNCTIONS](https://www.youtube.com/watch?v=0Mj_FBEq7hk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=18)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    println(double(12))
}

fun double(num: Int) = num * 2
```
## Kotlin for Beginners - Part 18 - WHAT IS FUNCTION OVERLOADING?
[Kotlin for Beginners - Part 18 - WHAT IS FUNCTION OVERLOADING?](https://www.youtube.com/watch?v=eflRGEzUfOo&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=19)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    println(getMax(14, 100, 9))
}

fun getMax(a: Int, b: Int) = if (a > b) a else b

fun getMax(a: Double, b: Double) = if (a > b) a else b

fun getMax(a: Int, b: Int, c: Int) =
    when {
        a >= b && a >= c -> a
        b >= a && b >= c -> b
        else -> c
    }

fun greet(name: String, reps: Int) {
    for (i in 0 until reps) println("Hello, $name!")
}

fun greet(message: String, reps: Int) {
    for (i in 0 until reps) println(message)
}
```
## Kotlin for Beginners - Part 19 - DEFAULT & NAMED ARGUMENTS
[Kotlin for Beginners - Part 19 - DEFAULT & NAMED ARGUMENTS](https://www.youtube.com/watch?v=Iueco68n1j4&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=20)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    greet(
        "How are you?",
        name = "Hans",
        reps = 3
    )
}

fun greet(message: String, name: String = "User", reps: Int = 1) {
    for (i in 0 until reps) println("Hello, $name! $message")
}
```
## Kotlin for Beginners - Part 20 - VARARG & SPREAD OPERATOR
[Kotlin for Beginners - Part 20 - VARARG & SPREAD OPERATOR](https://www.youtube.com/watch?v=cXoiqrkHNdg&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=21)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val array = intArrayOf(1, 2, 3, 4, 5, 6)

    println(getSum(10, 20, *array, 30, b = 40))
}

fun getSum(a: Int, vararg numbers: Int, b: Int): Int {
    var sum = a + b

    for (number in numbers) sum += number

    return sum
}
```
## Kotlin for Beginners - Part 21 - WHAT IS CONST VAL?
[Kotlin for Beginners - Part 21 - WHAT IS CONST VAL?](https://www.youtube.com/watch?v=eBMHWZpvA6c&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=22)  
  
[b6492kotl](b6494code.md)  
```
const val STRING_CONSTANT = "I am a constant"

fun main() {
    println(STRING_CONSTANT)

    println(getMax(900, 4000, 50, 10, 11, 2))
}

fun getMax(first: Int, vararg remaining: Int): Int {
    println(STRING_CONSTANT)

    var max = first

    for (i in remaining) {
        if (i > max) max = i
    }

    return max
}
```
## Kotlin for Beginners - Part 23 - CREATING OUR FIRST CLASS
[Kotlin for Beginners - Part 23 - CREATING OUR FIRST CLASS](https://www.youtube.com/watch?v=F4m7CR0CfP0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=24)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val user1 = User("Hans", 30)

    println("user name: ${user1.name}")
    println("user age: ${user1.age}")

    val user2 = User("Elfriede", 60)

    println("user name: ${user2.name}")
    println("user age: ${user2.age}")
}

class User(val name: String, var age: Int) {
}
```
## Kotlin for Beginners - Part 24 - INIT BLOCKS
[Kotlin for Beginners - Part 24 - INIT BLOCKS](https://www.youtube.com/watch?v=5mnrMDI73-8&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=25)  
  
[b6492kotl](b6494code.md)  
```
fun main() {
    val user1 = User("   Hans   ", 30)
    val user2 = User("  Elfriede   ", 60)
    val user3 = User(age = 60)
    val user4 = User("    ", 20)
}

class User(name: String = "No Name", var age: Int) {
    init {
        print("New user created. Age: $age,")
    }

    val name: String

    init {
        if (name.isBlank()) {
            this.name = "No Name"
        } else {
            this.name = name.trim()
        }

        println(" Name: ${this.name}")
    }
}
//New user created. Age: 30, Name: Hans
//New user created. Age: 60, Name: Elfriede
//New user created. Age: 60, Name: No Name
//New user created. Age: 20, Name: No Name
```