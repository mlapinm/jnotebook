## MongoDB For Beginners  
1 [Getting Started With MongoDB. Installing MongoDB For Windows 10 - YouTube](#Getting-Started-With-MongoDB.-Installing-MongoDB-For-Windows-10---YouTube)  
2 [Installing Visual Studio Code: Setting up to use with MongoDB via Intergrated Terminal - YouTube](#Installing-Visual-Studio-Code:-Setting-up-to-use-with-MongoDB-via-Intergrated-Terminal---YouTube)  
3 [Creating our Database in MongoDB. Inserting and Finding Documents. - YouTube](#Creating-our-Database-in-MongoDB.-Inserting-and-Finding-Documents.---YouTube)  
4 [MongoDB is a SchemaLess DataBase - YouTube](#MongoDB-is-a-SchemaLess-DataBase---YouTube)  
5 [Using the insertMany Method to Insert Multiple Documents in MongoDB - YouTube](#Using-the-insertMany-Method-to-Insert-Multiple-Documents-in-MongoDB---YouTube)  
6 [Query the Database with the find and findOne method - YouTube](#Query-the-Database-with-the-find-and-findOne-method---YouTube)  
7 [Using Query Comparison Operators in MongoDB - YouTube](#Using-Query-Comparison-Operators-in-MongoDB---YouTube)  
8 [Working with Arrays with Array Query Operators and Query Comparison Operators - YouTube](#Working-with-Arrays-with-Array-Query-Operators-and-Query-Comparison-Operators---YouTube)  
9 [Using Projections Within MongoDB to Limit Fields - YouTube](#Using-Projections-Within-MongoDB-to-Limit-Fields---YouTube)  
10 [Updating Documents with the Update,UpdateOne, and UpdateMany Methods in MongoDB - YouTube](#Updating-Documents-with-the-Update,UpdateOne,-and-UpdateMany-Methods-in-MongoDB---YouTube)  
11 [Deleting Documents with the Remove,DeleteOne, and DeleteMany Methods in MongoDB - YouTube](#Deleting-Documents-with-the-Remove,DeleteOne,-and-DeleteMany-Methods-in-MongoDB---YouTube)  

## MongoDB For Beginners  

## Getting Started With MongoDB. Installing MongoDB For Windows 10 - YouTube  
[Getting Started With MongoDB. Installing MongoDB For Windows 10 - YouTube](https://www.youtube.com/watch?v=3TvDUiclcFk&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT)  
  
## Installing Visual Studio Code: Setting up to use with MongoDB via Intergrated Terminal - YouTube  
[Installing Visual Studio Code: Setting up to use with MongoDB via Intergrated Terminal - YouTube](https://www.youtube.com/watch?v=54iI586Iv_w&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=2)  
- mongod
- mongo
- mongo dbs  
```
admin         0.000GB
config        0.000GB
crud_mongodb  0.000GB
local         0.000GB
```
  
## Creating our Database in MongoDB. Inserting and Finding Documents. - YouTube  
[Creating our Database in MongoDB. Inserting and Finding Documents. - YouTube](https://www.youtube.com/watch?v=5lVmmTNMy60&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=3)  
mongo
```
> use school
switched to db school
> db.students.insert({"name": "Bob","GPA":4.0})
WriteResult({ "nInserted" : 1 })
> db.students.find()
{ "_id" : ObjectId("5fdb71c3c6cc8dedce4f4eb0"), "name" : "Bob", "GPA" : 4 }
> db.faculty.insert({name : "peter", salary : 4000})
WriteResult({ "nInserted" : 1 })
> db.faculty.find()
{ "_id" : ObjectId("5fdb7549c6cc8dedce4f4eb1"), "name" : "peter", "salary" : 4000 }

> show dbs
admin         0.000GB
config        0.000GB
crud_mongodb  0.000GB
local         0.000GB
school        0.000GB

> use school
switched to db school
> show collections
faculty
students



```  
## MongoDB is a SchemaLess DataBase - YouTube  
[MongoDB is a SchemaLess DataBase - YouTube](https://www.youtube.com/watch?v=jzYjReNMQ5A&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=4)  
```
> db.students.find()
{ "_id" : ObjectId("5fdb71c3c6cc8dedce4f4eb0"), "name" : "Bob", "GPA" : 4 }
{ "_id" : ObjectId("5fdb7a79c6cc8dedce4f4eb2"), "lol" : "lol" }
```  
## Using the insertMany Method to Insert Multiple Documents in MongoDB - YouTube  
[Using the insertMany Method to Insert Multiple Documents in MongoDB - YouTube](https://www.youtube.com/watch?v=yaRSZwUJIrY&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=5)  
[f2052_02.json](f2052_02.json)  
```
> show dbs
admin         0.000GB
config        0.000GB
crud_mongodb  0.000GB
local         0.000GB
school        0.000GB

> use school
switched to db school
> show collections
faculty
students
```
## drop
```
> db.students.drop()
true

> show collections  
faculty
```  
## insertMany
```
> db.students.insertMany([
...     {
...         "firstName": "Pedro",
...         "lastName": "Leate",
...         "gender": "Female",
...         "address": "1108 Gale Parkway",
...         "gpa": 1.87,
...         "grade": 9,
...         "classes": [
...             "cs103",
...             "cs102",
...             "phys101"
...         ],
...         "scores": [
...             79,
...             62,
...             92,
...             100
...         ]
...     }
])

```
```
> db.students.insertMany([{},{}]) 
```

```
> db.students.find()
{ "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb3"), "firstName" : "Pedro", "lastName" : "Leate", "gender" : "Female", "address" : "1108 Gale Parkway", "gpa" : 1.87, "grade" : 9, "classes" : [ "cs103", "cs102", "phys101" ], "scores" : [ 79, 62, 92, 100 ] }
{ "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb4"), "firstName" : "Babita", "lastName" : "Culham", "gender" : "Female", "address" : "477 International Drive", "gpa" : 1.92, "grade" : 10, "classes" : [ "phys103", "cs101", "ma102" ], "scores" : [ 69, 95, 61, 93 ] }
{ "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb5"), "firstName" : "Hedwiga", "lastName" : "Enders", "gender" 
```
## pretty
```
> db.students.find().pretty()
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb3"),
        "firstName" : "Pedro",
        "lastName" : "Leate",
        "gender" : "Female",
        "address" : "1108 Gale Parkway",
        "gpa" : 1.87,
        "grade" : 9,
        "classes" : [
                "cs103",
                "cs102",
                "phys101"
        ],
        "scores" : [
                79,
                62,
                92,
                100
        ]
}
```
## Query the Database with the find and findOne method - YouTube  
[Query the Database with the find and findOne method - YouTube](https://www.youtube.com/watch?v=kn00aKesr6E&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=6)  
## 1
Find all students named Pedro?
```
> db.students.find({"firstName" : "Pedro"}).pretty()
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb3"),
        "firstName" : "Pedro",
        "lastName" : "Leate",
        "gender" : "Female",
        "address" : "1108 Gale Parkway",
        "gpa" : 1.87,
        "grade" : 9,
        "classes" : [
                "cs103",
                "cs102",
                "phys101"
        ],
        "scores" : [
                79,
                62,
                92,
                100
        ]
}
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4ec9"),
        "firstName" : "Pedro",
        "lastName" : "McVittie",
        "gender" : "Male",
        "address" : "1 Welch Terrace",
        "gpa" : 3.38,
        "grade" : 8,
        "classes" : [
                "cs102",
                "ma101",
                "ma102"
        ],
        "scores" : [
                62,
                88,
                65,
                96
        ]
}
```
```
> db.students.find({"firstName" : "Pedro", "lastName" : "Leate"}).pretty()
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb3"),
        "firstName" : "Pedro",
        "lastName" : "Leate",
        "gender" : "Female",
        "address" : "1108 Gale Parkway",
        "gpa" : 1.87,
        "grade" : 9,
        "classes" : [
                "cs103",
                "cs102",
                "phys101"
        ],
        "scores" : [
                79,
                62,
                92,
                100
        ]
}
```
## 2
Find all students who are female and are in grade 10?
```
db.students.find({"gender" : "Female", "grade" : 10}).pretty()
```  
```
> db.students.findOne({"gender" : "Female", "grade" : 10})      
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb4"),
        "firstName" : "Babita",
        "lastName" : "Culham",
        "gender" : "Female",
        "address" : "477 International Drive",
        "gpa" : 1.92,
        "grade" : 10,
        "classes" : [
                "phys103",
                "cs101",
                "ma102"
        ],
        "scores" : [
                69,
                95,
                61,
                93
        ]
}
```
## Using Query Comparison Operators in MongoDB - YouTube  
[Using Query Comparison Operators in MongoDB - YouTube](https://www.youtube.com/watch?v=a3Py3blDvUI&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=7)  
## 1a
Find all students in Grade 10 With a higher GPA then 2.0  
db.students.find({"grade" : 10, gpa : {$gt : 2.0}}).pretty()  
## 1b
Grade 10 and GPA greater than or equal to 2.0  
db.students.find({"grade" : 10, gpa : {$gte : 2.0}}).pretty()  
cls
## 2
Find all students who are failing (Grades lower than 2.0)  
db.students.find({gpa : {$lt : 2.0}}).pretty()  
## 3  
Find all students who are failing and are in a Grade Higher Than 9th grade  
db.students.find({gpa : {$lt : 2.0}, grade : {$gt : 9}}).pretty()  
## 4
Find all students who are not in Grade 10  
db.students.find({grade : {$ne : 10}}).pretty()  

## Working with Arrays with Array Query Operators and Query Comparison Operators - YouTube  
[Working with Arrays with Array Query Operators and Query Comparison Operators - YouTube](https://www.youtube.com/watch?v=XrCdkMBCh5w&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=8)  
```
> show dbs
> use school
> show collections
```  
# 1a
Find all students who are in Grade 8 or 9  
```
db.students.find({grade : {$in : [8,9]}}).pretty()
```
## 1b
Find all students who are not in Grade 8 or 9  
db.students.find({grade : {$nin : [8,9]}}).pretty()   
## 2a
Find all students who are taking ma101 or cs103  
db.students.find({classes : {$in : ["ma101", "cs103"]}}).pretty()  
## 2b
Find all students who are not taking ma101 or cs103db.students.find({classes : {$nin : ["ma101", "cs103"]}}).pretty()   
## 3
Find all students who are taking both ma101 and cs103  
db.students.find({classes : {$all : ["ma101", "cs103"]}}).pretty()  
## 4
Find all students who are taking 3 classes  
db.students.find({classes : {$size : 3}}).pretty()  
## 5
Find all students who score between 60 and 75  
db.students.find({scores : {$elemMatch : {$gt : 60, $lt : 75}}}).pretty()     
## Using Projections Within MongoDB to Limit Fields - YouTube  
[Using Projections Within MongoDB to Limit Fields - YouTube](https://www.youtube.com/watch?v=oSSNHTeXHuc&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=9)  
```
db.students.find({}, {firstName : 1, lastName : 1, grade : 1}).pretty()
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4ec6"),
        "firstName" : "Zelda",
        "lastName" : "Minty",
        "grade" : 10
}
```
  
```
> db.students.find({}, {firstName : 1, lastName : 1, grade : 1, _id : 0}).pretty()
{ "firstName" : "Pedro", "lastName" : "Leate", "grade" : 9 }
{ "firstName" : "Babita", "lastName" : "Culham", "grade" : 10 }
{ "firstName" : "Hedwiga", "lastName" : "Enders", "grade" : 9 }
```  
  
```
> db.students.find({firstName : "Pedro"}, {firstName : 1, lastName : 1, grade : 1, _id : 0}).pretty()
{ "firstName" : "Pedro", "lastName" : "Leate", "grade" : 9 }
{ "firstName" : "Pedro", "lastName" : "McVittie", "grade" : 8 }
>
```  
## Updating Documents with the Update,UpdateOne, and UpdateMany Methods in MongoDB - YouTube  
[Updating Documents with the Update,UpdateOne, and UpdateMany Methods in MongoDB - YouTube](https://www.youtube.com/watch?v=fnw6qYwohmQ&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=10)  
```
> db.students.update({firstName : "Zelda"}, {firstName : "Zeldaa"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>
```  

```
> db.students.update({firstName : "Zeldaa"}, {banana : "banana"})  
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

```
> db.students.updateOne({firstName: "Pedro"}, {$set : {grade : 1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

```
> db.students.updateOne({firstName: "Pedro"}, {$set : {grade : 1}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```
  
```
> db.students.updateMany({firstName : "Pedro"}, {$set : {grade : 2}})
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
```  
## Deleting Documents with the Remove,DeleteOne, and DeleteMany Methods in MongoDB - YouTube  
[Deleting Documents with the Remove,DeleteOne, and DeleteMany Methods in MongoDB - YouTube](https://www.youtube.com/watch?v=OeoOWwZ1k9I&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=11)  
## 1
```
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 1 })
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 1 })
> db.students.remove({grade : 10})      
WriteResult({ "nRemoved" : 7 })
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 0 })
```  
## 2
```
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 1 })
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 1 })
> db.students.remove({grade : 10})      
WriteResult({ "nRemoved" : 7 })
> db.students.remove({grade : 10}, true)
WriteResult({ "nRemoved" : 0 })
> db.students.find({grade: 11}).pretty()          
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4eb6"),
        "firstName" : "Lennard",
        "lastName" : "Fleeman",
        "gender" : "Male",
        "address" : "1969 La Follette Junction",
        "gpa" : 1.87,
        "grade" : 11,
        "classes" : [
                "cs101",
                "ma103",
                "cs102"
        ],
        "scores" : [
                86,
                76,
                81,
                75
        ]
}
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4ebe"),
        "firstName" : "Kassi",
        "lastName" : "Bothams",
        "gender" : "Female",
        "address" : "720 Farmco Way",
        "gpa" : 1.68,
        "grade" : 11,
        "classes" : [
                "cs102",
                "cs101",
                "ma101"
        ],
        "scores" : [
                71,
                80,
                67,
                71
        ]
}
```
  
```
> db.students.deleteOne({_id : ObjectId("5fdcb9dcc6cc8dedce4f4eb6")})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.students.find({grade: 11}).pretty()
{
        "_id" : ObjectId("5fdcb9dcc6cc8dedce4f4ebe"),
        "firstName" : "Kassi",
        "lastName" : "Bothams",
        "gender" : "Female",
        "address" : "720 Farmco Way",
        "gpa" : 1.68,
        "grade" : 11,
        "classes" : [
                "cs102",
                "cs101",
                "ma101"
        ],
        "scores" : [
                71,
                80,
                67,
                71
        ]
}
```  

```
> db.students.deleteMany({grade : 12})      
{ "acknowledged" : true, "deletedCount" : 4 }
```

## footer
```
> show dbs
admin         0.000GB
config        0.000GB
crud_mongodb  0.000GB
local         0.000GB
school        0.000GB
> use crud_mongodb
switched to db crud_mongodb
> show collections
todo
> db.todo.find({}).pretty()
{ "_id" : ObjectId("5fd7ad6a0ff636cf22fd4e76"), "todo" : "clean room" }     
{ "_id" : ObjectId("5fd7adc50ff636cf22fd4e77"), "todo" : "clean garage" }   
```

```
> db.todo.updateOne({_id : ObjectId("5fd7ad6a0ff636cf22fd4e76")}, {$set : {todo : "clean room2"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.todo.find({}).pretty()
{ "_id" : ObjectId("5fd7ad6a0ff636cf22fd4e76"), "todo" : "clean room2" }
{ "_id" : ObjectId("5fd7adc50ff636cf22fd4e77"), "todo" : "clean garage" }   
```
```
```
