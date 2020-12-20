1 [Creating Todo MongoDB CRUD Application from Scratch Overview - YouTube](#Creating-Todo-MongoDB-CRUD-Application-from-Scratch-Overview---YouTube)  
2 [Part 1: Setting Up our Application - YouTube](#Part-1:-Setting-Up-our-Application---YouTube)  
3 [Part 2: Server Side Read Portion - YouTube](#Part-2:-Server-Side-Read-Portion---YouTube)  
4 [Part 3: Server Side Update Portion - YouTube](#Part-3:-Server-Side-Update-Portion---YouTube)  
5 [Part 4: Server Side Create Portion - YouTube](#Part-4:-Server-Side-Create-Portion---YouTube)  
6 [Part 5: Server Side Delete Portion - YouTube](#Part-5:-Server-Side-Delete-Portion---YouTube)  
7 [Part 6: Creating Our Index.html File - YouTube](#Part-6:-Creating-Our-Index.html-File---YouTube)  
8 [Part 7: Fetch API GET Request - YouTube](#Part-7:-Fetch-API-GET-Request---YouTube)  
9 [Part 8: Fetch API POST Request - YouTube](#Part-8:-Fetch-API-POST-Request---YouTube)  
10 [Part 9: Fetch API DELETE Request - YouTube](#Part-9:-Fetch-API-DELETE-Request---YouTube)  
11 [Part 10: Fetch API PUT Request - YouTube](#Part-10:-Fetch-API-PUT-Request---YouTube)  
12 [Part 11: User Input Validation - YouTube](#Part-11:-User-Input-Validation---YouTube)  
## Creating Todo MongoDB CRUD Application from Scratch Overview - YouTube  
[Creating Todo MongoDB CRUD Application from Scratch Overview - YouTube](https://www.youtube.com/watch?v=U7vikICNygc&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=1)  
### serverside
##### nodejs
##### expressjs
### database
##### mongodb
### clientside
##### jquery
##### fetch api
##### bootstrap
### programming language 
##### javascript
  
## Part 1: Setting Up our Application - YouTube  
[Part 1: Setting Up our Application - YouTube](https://www.youtube.com/watch?v=XhoaRFYAlEc&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=2)  
- D:\avi02prog\f02node\f2012crud\  
- npm init -y
- npm install body-parser
- npm install express
- npm install mongodb
- npm install path
- package.json
  - "main": "app.js",
- app.js
- db.js
db.js     
```
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const dbname = "crud_mongodb"
const url = "mongodb://localhost:27017"
const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser : true}

const state = {
  db : null
}

const connect = (cb)=>{
  if(state.db){
    cb()
  }else{
    MongoClient.connect(url, mongoOptions, (err, client)=>{
      if(err){
        cb(err)
      }else{
        state.db = client.db(dbname)
        cb()
      }
    })
  }
}

const getPrimaryKey = (_id)=>{
  return ObjectID(_id)
}

const getDB = ()=>{
  return state.db
}
module.exports = {getDB, connect, getPrimaryKey}
```
app.js  
```
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const path = require('path')

const db = require('./db')
const collection = "todo"

db.connect((err)=>{
  if(err){
    console.log('unable to connect to database')
    process.exit(1)
  }else{
    app.listen(3000, ()=>{
      console.log("connected to database, app listening on port 3000")
    })
  }
})
```   
  
## Part 2: Server Side Read Portion - YouTube  
[Part 2: Server Side Read Portion - YouTube](https://www.youtube.com/watch?v=EI_qpDHRUfQ&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=3)  
### 1  
```
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/getTodos', (req, res)=>{
  db.getDB().collection(collection).find({}).toArray((err, documents)=>{
    if(err){
      console.log(err)
    }else{
      console.log(documents)
      res.json(documents)
    }
  })
})
```  
### 2
mongo  
```
MongoDB shell version v4.4.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
```
  
```
> use crud_mongodb
switched to db crud_mongodb
> db.todo.insert({todo: "clean room"})
WriteResult({ "nInserted" : 1 })
> db.todo.insert({todo: "clean garage"})
WriteResult({ "nInserted" : 1 })
> ^C
bye 
```  
http://localhost:3000/gettodos  
[{"_id":"5fd7ad6a0ff636cf22fd4e76","todo":"clean room"},{"_id":"5fd7adc50ff636cf22fd4e77","todo":"clean garage"}]    
## Part 3: Server Side Update Portion - YouTube  
[Part 3: Server Side Update Portion - YouTube](https://www.youtube.com/watch?v=lz0cdQKPSUo&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=4)  
## 1
```
app.put('/:id', (req, res)=>{
  const todoID = req.params.id
  const userInput = req.body
  db.getDB().collection(collection).findOneAndUpdate(
    {_id : db.getPrimaryKey(todoID)},
    {$set : {todo : userInput.todo}}, 
    {returnOriginal : false}, (err, result)=>{
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    }
  )
})
```
## 2
- postman
- put localhost:3000/5fd7adc50ff636cf22fd4e77
- body raw {"todo" : "clean room3"}
- responce body pretty json
- send  
## 3
```
{
    "lastErrorObject": {
        "n": 1,
        "updatedExisting": true
    },
    "value": {
        "_id": "5fd7adc50ff636cf22fd4e77",
        "todo": "clean room3"
    },
    "ok": 1
}
```  
## Part 4: Server Side Create Portion - YouTube  
[Part 4: Server Side Create Portion - YouTube](https://www.youtube.com/watch?v=tXPi-6o6SLU&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=5)  
## 1
```
app.post('/', (req, res)=>{
  const userInput = req.body;
  db.getDB().collection(collection).insertOne(userInput, (err, result)=>{
    if(err){
      console.log();
    }else{
      res.json({result: result, document : result.ops[0]})
    }
  })
})
```
## 2
- post localhost:3000/
- {"todo" : "clean something"}
```
{
    "result": {
        "result": {
            "n": 1,
            "ok": 1
        },
        "connection": {
            "_events": {},
            "_eventsCount": 4,
            "id": 1,
            "address": "127.0.0.1:27017",
            "bson": {},
            "socketTimeout": 0,
            "host": "localhost",
            "port": 27017,
            "monitorCommands": false,
            "closed": false,
            "destroyed": false,
            "lastIsMasterMS": 1
        },
        "ops": [
            {
                "todo": "clean something",
                "_id": "5fddc808753ed937d0c4444c"
            }
        ],
        "insertedCount": 1,
        "insertedId": "5fddc808753ed937d0c4444c",
        "n": 1,
        "ok": 1
    },
    "document": {
        "todo": "clean something",
        "_id": "5fddc808753ed937d0c4444c"
    }
}
```
## 4
```
> db.todo.find({}).pretty()
{ "_id" : ObjectId("5fd7ad6a0ff636cf22fd4e76"), "todo" : "clean room2" }    
{ "_id" : ObjectId("5fd7adc50ff636cf22fd4e77"), "todo" : "clean room3" }    
{ "_id" : ObjectId("5fddc808753ed937d0c4444c"), "todo" : "clean something" }
```  
## Part 5: Server Side Delete Portion - YouTube  
[Part 5: Server Side Delete Portion - YouTube](https://www.youtube.com/watch?v=zzOsSAuqI2g&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=6)  
## 1
```
```
## 2
get localhost:3000/getTodos
```
[
    {
        "_id": "5fd7ad6a0ff636cf22fd4e76",
        "todo": "clean room2"
    },
    {
        "_id": "5fd7adc50ff636cf22fd4e77",
        "todo": "clean room3"
    },
    {
        "_id": "5fddc808753ed937d0c4444c",
        "todo": "clean something"
    }
]
```
## 3
localhost:3000/5fd7ad6a0ff636cf22fd4e76  
```
{
    "lastErrorObject": {
        "n": 1
    },
    "value": {
        "_id": "5fd7ad6a0ff636cf22fd4e76",
        "todo": "clean room2"
    },
    "ok": 1
}
```
## 4
get localhost:3000/getTodos  
```
[
    {
        "_id": "5fd7adc50ff636cf22fd4e77",
        "todo": "clean room3"
    },
    {
        "_id": "5fddc808753ed937d0c4444c",
        "todo": "clean something"
    }
]
```  
## Part 6: Creating Our Index.html File - YouTube  
[Part 6: Creating Our Index.html File - YouTube](https://www.youtube.com/watch?v=M1CfumCoNZg&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=7)  
-  https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template  
- https://getbootstrap.com/docs/4.5/components/forms/#form-groups
-   
## Part 7: Fetch API GET Request - YouTube  
[Part 7: Fetch API GET Request - YouTube](https://www.youtube.com/watch?v=QNjXFsCWNaA&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=8)  
  
## Part 8: Fetch API POST Request - YouTube  
[Part 8: Fetch API POST Request - YouTube](https://www.youtube.com/watch?v=Gj_NlmjtLCM&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=9)  
  
## Part 9: Fetch API DELETE Request - YouTube  
[Part 9: Fetch API DELETE Request - YouTube](https://www.youtube.com/watch?v=oqrKYyWTvIA&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=10)  
  
## Part 10: Fetch API PUT Request - YouTube  
[Part 10: Fetch API PUT Request - YouTube](https://www.youtube.com/watch?v=CbXJPF-ei_A&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=11)  
  
## Part 11: User Input Validation - YouTube  
[Part 11: User Input Validation - YouTube](https://www.youtube.com/watch?v=Hn-w9mx8FF4&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=12)  
  
  
  
## footer
[Getting Started With MongoDB. Installing MongoDB For Windows 10](https://www.youtube.com/watch?v=3TvDUiclcFk&list=PLvTjg4siRgU1XVKER93YtJ2tCTXHCTBlT)    

https://www.mongodb.com/  
https://www.mongodb.com/try/download/community  
https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.2-signed.msi  
mongod.exe  
C:\Program Files\MongoDB\Server\4.4\bin  
add path
cmd
mongod

{"t":{"$date":"2020-12-13T17:06:34.266+03:00"},"s":"I",  "c":"STORAGE",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":11528,"port":27017,"dbPath":"C:/data/db/","architecture":"64-bit","host":"LAPTOP-GRIR1G62"}}  

C:\data\db
http://localhost:27017/

