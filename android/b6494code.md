
## Kotlin Course for Beginners and Java DevsKotlin Course for Beginners and Java Devs

```
fun p03hello() {
    println("Hello")
}
//Hello

//Part 4 – Variables
fun p04variables() {
    val userName = "Florian"
    var age = 28

    println("Hello, world! My name is $userName. I am $age years old. In 2 years, I'll be ${age + 2}.")
}
//Hello, world! My name is Florian. I am 28 years old. In 2 years, I'll be 30.

//Part 5 – Basic Types
fun p05types() {
    val exampleString = "\"Florian\nWalther\""
    val exampleRawString = """ "Florian
Walther" """
    print(exampleRawString)

    val exampleNumber: Double
    exampleNumber = 2_000_000.12
    println(exampleNumber)
    val exampleLong: Long = exampleNumber.toLong()

    val exampleChar = '?'
    val exampleInt: Int = exampleChar.toInt()
    val i = 3
    println(i)

    val exampleBoolean = false
}
//"Florian
//Walther" 2000000.12
//3

//Part 6 – Arithmetic Operators
fun p06arithmetic() {
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
    println((8 / 6).toInt())
}
//a--: 7
//--a: 5
//a *= 2: 10
//a /= 2: 5
//a %= 2: 1
//1

//Part 7 – REPL
fun p07repl() {

}

//Part 8 – Comments
fun p08comment() {
//
/*


 */
}

//Part 9 – Arrays
fun p09arrays() {
    val names = arrayOf("John", "Jack", "Janny")

    println("number of elements: ${names.size}")

    println("first element: ${names[0]}")

    println("last element: ${names[names.size - 1]}")

    println("1 & 2 : ${names.slice(1..2)}")


}
//number of elements: 3
//first element: John
//last element: Janny
//1 & 2 : [Jack, Janny]

//Part 10 – For-Loop & Ranges
fun p10loop() {
    var units = arrayOf("1", "2", "3")
    units.reverse()
    println(units[0])
    for (i in units) print("${i} " + " - ")
    println()
    for (i in 3..8) print("" + i + " ")
    println()
    for (i in 11 until 15) print("" + i + " ")
    println()
    for (i in 6L downTo 1) print("" + i + " ")
    println()
    for (i in 'a'..'z') print(i)
}
//3
//3  - 2  - 1  -
//3 4 5 6 7 8
//11 12 13 14
//6 5 4 3 2 1
//abcdefghijklmnopqrstuvwxyz


//Part 11 – Comparison & Logical Operators
fun p11logic() {
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
//2 > 1 is true
//2 < 1 is false
//1 >= 1 is true
//1 == 1 is true
//1 == 2 is false
//1 != 2 is true
//!(2 > 1) is false
//true && false = false
//true || false = true
//true


//Part 12 – While-Loop & Labels
fun p12while() {
    var i = 0

    outer@ do {
        print("" + i++)
        for (j in 1..3) {
            println(j)
            break@outer
        }
    } while (i < 5)

}
//1
//0

//Part 13 – If Else
fun p13if() {
    for (i in -2..10) {
        val prefix = if (i == 1) {
            "*"
        } else if (i !in 4..7) {
            "+"
        } else {
            print("-")
            ">"
        }
        println("$prefix $i")
    }
}
//+ -2
//+ -1
//+ 0
//* 1
//+ 2
//+ 3
//-> 4
//-> 5
//-> 6
//-> 7
//+ 8
//+ 9
//+ 10

//Part 14 – When
fun p14when() {
    val time = 14
    val isSunday = true

    val greeting = when {
        isSunday -> "I'm gonna stay in bed all day!"
        time < 5 -> "Why up so early?"
        else -> " else "
    }
    println(greeting)
}
//I'm gonna stay in bed all day!

//Part 15 – Function Parameters
fun p15param() {
    fun greet(name: String, reps: Int) {
        var repsLeft = reps

        while (repsLeft > 0) {
            println("Hello, $name! Nice to meet you!")
            repsLeft--
        }
    }
    greet("Herbert", 2)
}
//Hello, Herbert! Nice to meet you!
//Hello, Herbert! Nice to meet you!

//Part 16 – Function Return Values
fun p16return() {

    fun getMax(num1: Int, num2: Int): Int {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }

    val max = getMax(12, 2)
    println(max)

}

//Part 17 – Single-Expression Functions
fun p17alfa() {

    fun double(num: Int) = num * 2
    println(double(12))

}

//Part 18 – Function Overloading
fun p18func() {
    fun getMax(a: Int, b: Int) = if (a > b) a else b

    fun getMax(a: Double, b: Double) = if (a > b) a else b

    fun getMax(a: Int, b: Int, c: Int) =
        when {
            a >= b && a >= c -> a
            b >= a && b >= c -> b
            else -> c
        }
    println(getMax(14, 100, 9))
}

//Part 19 – Default & Named Arguments
fun p19default() {
    fun greet(message: String, name: String = "User", reps: Int = 1) {
        for (i in 0 until reps) println("Hello, $name! $message")
    }

    greet(
        "How are you?"
    )

}
//Hello, User! How are you?

//Part 20 – Vararg & Spread Operator
fun p20var() {
    fun getSum(a: Int, vararg numbers: Int, b: Int): Int {
        var sum = a + b

        for (number in numbers) sum += number

        numbers[0] = 7
        return sum
    }

    val array = intArrayOf(1, 2, 3, 4, 5, 6)

    println(getSum(10, 20, *array, 30, b = 40))
    println(array[0])

}
//121
//1

//Part 21 – Top-Level Variables & Const Val
const val STRING_CONSTANT = "I am a constant"

fun p21const() {
       println(STRING_CONSTANT)
}

//Part 22 – What Are Classes/OOP?
fun p22classes() {

    class User(val name: String, var age: Int) {
    }

    val user1 = User("Hans", 30)

    println("user name: ${user1.name}")
    println("user age: ${user1.age}")

    val user2 = User("Elfriede", 60)

    println("user name: ${user2.name}")
    println("user age: ${user2.age}")


}
//user name: Hans
//user age: 30
//user name: Elfriede
//user age: 60


//Part 23 – Simple Class
fun p23class() {
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

    val user1 = User("   Hans   ", 30)
    val user2 = User("  Elfriede   ", 60)
    val user3 = User(age = 60)
    val user4 = User("    ", 20)


}
//New user created. Age: 30, Name: Hans
//New user created. Age: 60, Name: Elfriede
//New user created. Age: 60, Name: No Name
//New user created. Age: 20, Name: No Name


//Part 24 – Init Blocks
fun p24block() {

}

fun p25() {

}

fun p26() {

}

fun p27() {

}


fun main() {

    when (23) {
        3 -> p03hello()
        4 -> p04variables()
        5 -> p05types()
        6 -> p06arithmetic()
        7 -> p07repl()
        8 -> p08comment()
        9 -> p09arrays()
        10 -> p10loop()
        11 -> p11logic()
        12 -> p12while()
        13 -> p13if()
        14 -> p14when()
        15 -> p15param()
        16 -> p16return()
        17 -> p17alfa()
        18 -> p18func()
        19 -> p19default()
        20 -> p20var()
        21 -> p21const()
        22 -> p22classes()
        23 -> p23class()
        24 -> p24block()
        25 -> p25()
        26 -> p26()
        27 -> p27()
        else -> print("")
    }

//    println(greeting)
}


```














## Kotlin for Beginners - Part 1 - WHY LEARN KOTLIN?
[Kotlin for Beginners - Part 1 - WHY LEARN KOTLIN?](https://www.youtube.com/watch?v=k9K71QkrHGE&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=1)  
  
## Kotlin for Beginners - Part 2.1 - INSTALL INTELLIJ IDEA ON WINDOWS
[Kotlin for Beginners - Part 2.1 - INSTALL INTELLIJ IDEA ON WINDOWS](https://www.youtube.com/watch?v=fwZyfudxnNo&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=2)  
  
## Kotlin for Beginners - Part 2.2 - INSTALL INTELLIJ IDEA ON MAC
[Kotlin for Beginners - Part 2.2 - INSTALL INTELLIJ IDEA ON MAC](https://www.youtube.com/watch?v=zGCRnqSUJn4&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=3)  
  
## Kotlin for Beginners - Part 3 - HELLO WORLD!
[Kotlin for Beginners - Part 3 - HELLO WORLD!](https://www.youtube.com/watch?v=1676actiiME&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=4)  
  
## Kotlin for Beginners - Part 4 - VARIABLES
[Kotlin for Beginners - Part 4 - VARIABLES](https://www.youtube.com/watch?v=kYO7YWVB3jY&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=5)  
  
## Kotlin for Beginners - Part 5 - BASIC DATA TYPES
[Kotlin for Beginners - Part 5 - BASIC DATA TYPES](https://www.youtube.com/watch?v=b_qtmAL9540&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=6)  
  
## Kotlin for Beginners - Part 6 - ARITHMETIC OPERATORS
[Kotlin for Beginners - Part 6 - ARITHMETIC OPERATORS](https://www.youtube.com/watch?v=zzYKHR7nTe0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=7)  
  
## Kotlin for Beginners - Part 7 - READ, EVAL, PRINT, LOOP (REPL)
[Kotlin for Beginners - Part 7 - READ, EVAL, PRINT, LOOP (REPL)](https://www.youtube.com/watch?v=lUiePALzrQs&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=8)  
  
## Kotlin for Beginners - Part 8 - COMMENTS
[Kotlin for Beginners - Part 8 - COMMENTS](https://www.youtube.com/watch?v=4CjchnS02ys&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=9)  
  
## Kotlin for Beginners - Part 9 - ARRAYS
[Kotlin for Beginners - Part 9 - ARRAYS](https://www.youtube.com/watch?v=lWd6TYhnJAk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=10)  
  
## Kotlin for Beginners - Part 10 - FOR-LOOP & RANGES
[Kotlin for Beginners - Part 10 - FOR-LOOP & RANGES](https://www.youtube.com/watch?v=N0p2XUqmU1k&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=11)  
  
## Kotlin for Beginners - Part 11 - COMPARISON & LOGICAL OPERATORS
[Kotlin for Beginners - Part 11 - COMPARISON & LOGICAL OPERATORS](https://www.youtube.com/watch?v=NrmFU1womI0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=12)  
  
## Kotlin for Beginners - Part 12 - WHILE, DO-WHILE & LABELS
[Kotlin for Beginners - Part 12 - WHILE, DO-WHILE & LABELS](https://www.youtube.com/watch?v=U9UzVgLsqDQ&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=13)  
  
## Kotlin for Beginners - Part 13 - IF/ELSE
[Kotlin for Beginners - Part 13 - IF/ELSE](https://www.youtube.com/watch?v=RfRbDIxXLtg&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=14)  
  
## Kotlin for Beginners - Part 14 - WHEN
[Kotlin for Beginners - Part 14 - WHEN](https://www.youtube.com/watch?v=J4uBhZKzH3U&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=15)  
  
## Kotlin for Beginners - Part 15 - FUNCTION PARAMETERS (ARGUMENTS)
[Kotlin for Beginners - Part 15 - FUNCTION PARAMETERS (ARGUMENTS)](https://www.youtube.com/watch?v=gDibWtiAkUQ&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=16)  
  
## Kotlin for Beginners - Part 16 - FUNCTION RETURN VALUES & THE UNIT TYPE
[Kotlin for Beginners - Part 16 - FUNCTION RETURN VALUES & THE UNIT TYPE](https://www.youtube.com/watch?v=fuArubmkPrk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=17)  
  
## Kotlin for Beginners - Part 17 - SINGLE EXPRESSION FUNCTIONS
[Kotlin for Beginners - Part 17 - SINGLE EXPRESSION FUNCTIONS](https://www.youtube.com/watch?v=0Mj_FBEq7hk&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=18)  
  
## Kotlin for Beginners - Part 18 - WHAT IS FUNCTION OVERLOADING?
[Kotlin for Beginners - Part 18 - WHAT IS FUNCTION OVERLOADING?](https://www.youtube.com/watch?v=eflRGEzUfOo&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=19)  
  
## Kotlin for Beginners - Part 19 - DEFAULT & NAMED ARGUMENTS
[Kotlin for Beginners - Part 19 - DEFAULT & NAMED ARGUMENTS](https://www.youtube.com/watch?v=Iueco68n1j4&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=20)  
  
## Kotlin for Beginners - Part 20 - VARARG & SPREAD OPERATOR
[Kotlin for Beginners - Part 20 - VARARG & SPREAD OPERATOR](https://www.youtube.com/watch?v=cXoiqrkHNdg&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=21)  
  
## Kotlin for Beginners - Part 21 - WHAT IS CONST VAL?
[Kotlin for Beginners - Part 21 - WHAT IS CONST VAL?](https://www.youtube.com/watch?v=eBMHWZpvA6c&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=22)  
  
## Kotlin for Beginners - Part 23 - CREATING OUR FIRST CLASS
[Kotlin for Beginners - Part 23 - CREATING OUR FIRST CLASS](https://www.youtube.com/watch?v=F4m7CR0CfP0&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=24)  
  
## Kotlin for Beginners - Part 24 - INIT BLOCKS
[Kotlin for Beginners - Part 24 - INIT BLOCKS](https://www.youtube.com/watch?v=5mnrMDI73-8&list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2&index=25)  
  