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
  
## Part 3: Server Side Update Portion - YouTube  
[Part 3: Server Side Update Portion - YouTube](https://www.youtube.com/watch?v=lz0cdQKPSUo&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=4)  
  
## Part 4: Server Side Create Portion - YouTube  
[Part 4: Server Side Create Portion - YouTube](https://www.youtube.com/watch?v=tXPi-6o6SLU&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=5)  
  
## Part 5: Server Side Delete Portion - YouTube  
[Part 5: Server Side Delete Portion - YouTube](https://www.youtube.com/watch?v=zzOsSAuqI2g&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=6)  
  
## Part 6: Creating Our Index.html File - YouTube  
[Part 6: Creating Our Index.html File - YouTube](https://www.youtube.com/watch?v=M1CfumCoNZg&list=PLvTjg4siRgU1ucYFHJy1tkwFjf73D0fGa&index=7)  
  
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

