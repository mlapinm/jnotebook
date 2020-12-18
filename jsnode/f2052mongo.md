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
  
## Query the Database with the find and findOne method - YouTube  
[Query the Database with the find and findOne method - YouTube](https://www.youtube.com/watch?v=kn00aKesr6E&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=6)  
  
## Using Query Comparison Operators in MongoDB - YouTube  
[Using Query Comparison Operators in MongoDB - YouTube](https://www.youtube.com/watch?v=a3Py3blDvUI&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=7)  
  
## Working with Arrays with Array Query Operators and Query Comparison Operators - YouTube  
[Working with Arrays with Array Query Operators and Query Comparison Operators - YouTube](https://www.youtube.com/watch?v=XrCdkMBCh5w&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=8)  
  
## Using Projections Within MongoDB to Limit Fields - YouTube  
[Using Projections Within MongoDB to Limit Fields - YouTube](https://www.youtube.com/watch?v=oSSNHTeXHuc&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=9)  
  
## Updating Documents with the Update,UpdateOne, and UpdateMany Methods in MongoDB - YouTube  
[Updating Documents with the Update,UpdateOne, and UpdateMany Methods in MongoDB - YouTube](https://www.youtube.com/watch?v=fnw6qYwohmQ&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=10)  
  
## Deleting Documents with the Remove,DeleteOne, and DeleteMany Methods in MongoDB - YouTube  
[Deleting Documents with the Remove,DeleteOne, and DeleteMany Methods in MongoDB - YouTube](https://www.youtube.com/watch?v=OeoOWwZ1k9I&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT&index=11)  
  

