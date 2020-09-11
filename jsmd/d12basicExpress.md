### 2. APIs and Microservices Certification (300 hours)

### 2.2. Basic Node and Express
[2.2.1. Introduction to the Basic Node and Express Challenges](#2.2.1.-Introduction-to-the-Basic-Node-and-Express-Challenges)  
[2.2.2. Meet the Node console](#2.2.2.-Meet-the-Node-console)  
[2.2.3. Start a Working Express Server](#2.2.3.-Start-a-Working-Express-Server)  
[2.2.4. Serve an HTML File](#2.2.4.-Serve-an-HTML-File)  
[2.2.5. Serve Static Assets](#2.2.5.-Serve-Static-Assets)  
[2.2.6. Serve JSON on a Specific Route](#2.2.6.-Serve-JSON-on-a-Specific-Route)  
[2.2.7. Use the .env File](#2.2.7.-Use-the-.env-File)  
[2.2.8. Implement a Root-Level Request Logger Middleware](#2.2.8.-Implement-a-Root-Level-Request-Logger-Middleware)  
[2.2.9. Chain Middleware to Create a Time Server](#2.2.9.-Chain-Middleware-to-Create-a-Time-Server)  
[2.2.10. Get Route Parameter Input from the Client](#2.2.10.-Get-Route-Parameter-Input-from-the-Client)  
[2.2.11. Get Query Parameter Input from the Client](#2.2.11.-Get-Query-Parameter-Input-from-the-Client)  
[2.2.12. Use body-parser to Parse POST Requests](#2.2.12.-Use-body-parser-to-Parse-POST-Requests)  
[2.2.13. Get Data from POST Requests](#2.2.13.-Get-Data-from-POST-Requests)  

### 2.3. MongoDB and Mongoose
[2.3.1. Introduction to the MongoDB and Mongoose Challenges](#2.3.1.-Introduction-to-the-MongoDB-and-Mongoose-Challenges)  
[2.3.2. Install and Set Up Mongoose](#2.3.2.-Install-and-Set-Up-Mongoose)  
[2.3.3. Create a Model](#2.3.3.-Create-a-Model)  
[2.3.4. Create and Save a Record of a Model](#2.3.4.-Create-and-Save-a-Record-of-a-Model)  
[2.3.5. Create Many Records with model.create()](#2.3.5.-Create-Many-Records-with-model.create())  
[2.3.6. Use model.find() to Search Your Database](#2.3.6.-Use-model.find()-to-Search-Your-Database)  
[2.3.7. Use model.findOne() to Return a Single Matching Document from Your Database](#2.3.7.-Use-model.findOne()-to-Return-a-Single-Matching-Document-from-Your-Database)  
[2.3.8. Use model.findById() to Search Your Database By _id](#2.3.8.-Use-model.findById()-to-Search-Your-Database-By-_id)  
[2.3.9. Perform Classic Updates by Running Find, Edit, then Save](#2.3.9.-Perform-Classic-Updates-by-Running-Find,-Edit,-then-Save)  
[2.3.10. Perform New Updates on a Document Using model.findOneAndUpdate()](#2.3.10.-Perform-New-Updates-on-a-Document-Using-model.findOneAndUpdate())  
[2.3.11. Delete One Document Using model.findByIdAndRemove](#2.3.11.-Delete-One-Document-Using-model.findByIdAndRemove)  
[2.3.12. Delete Many Documents with model.remove()](#2.3.12.-Delete-Many-Documents-with-model.remove())  
[2.3.13. Chain Search Query Helpers to Narrow Search Results](#2.3.13.-Chain-Search-Query-Helpers-to-Narrow-Search-Results) 



















### 2.2. Basic Node and Express
[glitch work](https://glitch.com/edit/#!/jelly-future-ferret?path=myApp.js%3A1%3A0)  
[glitch view](https://jelly-future-ferret.glitch.me

)  
[app.route](http://expressjs.com/en/4x/api.html#app.route)  
[]()  
[]()  
[]()  
[]()  


```

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({extended: true}));

/** 1) Meet the node console. */
//console.log("Hello World");

/** 2) A first working Express Server */

// app.route("/")
// .get((req, res) => {
// //  res.send("Hello Express");
// })

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

app.use((req, res, next) => {
  var s = '';
  s += req.method; s += " ";
  s += req.path; s += " - ";
  s += req.ip;
  console.log(s);
  next();
});
//GET /style.css ::ffff:127.0.0.1
/** 3) Serve an HTML file */
var rout = app.route("/")
.get((req, res) => {
  res.sendFile("/app/views/index.html");
  console.log(rout.constructor.name); //Route
});

/** 4) Serve static assets  */
app.use(express.static("/app/public"));

/** 5) serve JSON on a specific route */
app.route("/json")
.get((req, res) => {
  var obj = {message: "Hello json"};
    if(process.env.MESSAGE_STYLE == "uppercase"){
      for (var i in obj){
        obj[i] = obj[i].toUpperCase();
      }
    }
  res.json(obj);
});

/** 6) Use the .env file to configure the app */
process.env.MESSAGE_STYLE="uppercase"; 
 


/** 8) Chaining middleware. A Time server */
// app.route("/now")
// .get(
//   (req, res, next) => {
//     var time = new Date();
//     req.time = time.toString();
//     next();
//   }, 
//      (req, res) => {
//        var obj = {time: req.time};
//        res.json(obj);
//      }
// );

function cb1(req, res, next){
    var time = new Date();
    req.time = time.toString();
    next();
}

function cb2(req, res){
       var obj = {time: req.time};
       res.json(obj);
}

app.route("/now")
.get(cb1, cb2)
/** 9)  Get input from client - Route parameters */
app.route("/:echo/:word")
.get((req, res) => {
  res.send(req.params); 
  //{"echo":"word22","word":"ddd"}
  //https://playful-elemental-individual.
  //glitch.me/word22/ddd
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
// /name?first=vasya&last=ivanov
app.route("/name")
.get((req, res) => {
  var obj = {name: req.query.first 
             + " " 
             + req.query.last };
  res.send(obj);
});
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */
app.route("/name")
.post((req, res) => {
  var obj = req.body;
  var obj2 = {name: obj.first+" "+obj.last};
  res.json(obj2);
  //res.redirect("/");
});


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
```

#### 2.2.1. Introduction to the Basic Node and Express Challenges
- HTTP: a module that acts as a server
- File System: a module that reads and modifies files
- Path: a module for working with directory and file paths
- Assertion Testing: a module that checks code against prescribed constraints
```
```
#### 2.2.2. Meet the Node console
```
```
#### 2.2.3. Start a Working Express Server
```
```
#### 2.2.4. Serve an HTML File
```
```
#### 2.2.5. Serve Static Assets
```
```
#### 2.2.6. Serve JSON on a Specific Route
```
```


#### 2.2.7. Use the .env File
```
```
#### 2.2.8. Implement a Root-Level Request Logger Middleware
```
```
#### 2.2.9. Chain Middleware to Create a Time Server
```
```
#### 2.2.10. Get Route Parameter Input from the Client
```
```
#### 2.2.11. Get Query Parameter Input from the Client
```
```
#### 2.2.12. Use body-parser to Parse POST Requests
```
```
#### 2.2.13. Get Data from POST Requests
```
```

### 2.3. MongoDB and Mongoose

Cluster Tier
M0 Sandbox (Shared RAM, 512 MB Storage)

Additional Settings
MongoDB 4.2, No Backup

Cluster Name
Cluster0



mongodb+srv://mmlapinm:<password>@cluster0-6dfwg.mongodb.net/test?retryWrites=true&w=majority  
    

https://cloud.mongodb.com/v2/5ea44c39177e42591b408863#clusters

mongoose

#### 2.3.1. Introduction to the MongoDB and Mongoose Challenges
[shortener example](https://glitch.com/edit/#!/thread-paper)  
[glitch work](https://glitch.com/edit/#!/obvious-fluoridated-bear?path=myApp.js%3A18%3A2)  
[glitch view](https://obvious-fluoridated-bear.glitch.me)  
[cloud.mongodb.com](https://cloud.mongodb.com/v2/5ea44c39177e42591b408863#clusters)  
[$inc](https://docs.mongodb.com/manual/reference/operator/update/inc/)  
[]()  
[]()  

- Create a MongoDB Atlas account.
- Create a new cluster.
- Create a new user on the database.
- Whitelist your IP address.
- Connect to your cluster.
```
```
[]()  
[]()  
[]()  
[]()  
[]()  

#### 2.3.2. Install and Set Up Mongoose
```
https://cloud.mongodb.com/v2/5ea44c39177e42591b408863#clusters
process.env.MONGO_URI = "mongodb+srv://mmlapinm:20304050@cluster0-6dfwg.mongodb.net/test?retryWrites=true&w=majority";
```
#### 2.3.3. Create a Model
```
```
#### 2.3.4. Create and Save a Record of a Model
```
```
#### 2.3.5. Create Many Records with model.create()
```
```
#### 2.3.6. Use model.find() to Search Your Database
```
```
#### 2.3.7. Use model.findOne() to Return a Single Matching Document from Your Database
```
```
#### 2.3.8. Use model.findById() to Search Your Database By _id
```
```
#### 2.3.9. Perform Classic Updates by Running Find, Edit, then Save
```
```
#### 2.3.10. Perform New Updates on a Document Using model.findOneAndUpdate()
```
```
#### 2.3.11. Delete One Document Using model.findByIdAndRemove
```
```
#### 2.3.12. Delete Many Documents with model.remove()
```
```
#### 2.3.13. Chain Search Query Helpers to Narrow Search Results
```
```

```
/**********************************************
* 3. FCC Mongo & Mongoose Challenges
* ==================================
***********************************************/

/** # MONGOOSE SETUP #
/*  ================== */

/** 1) Install & Set up mongoose */

process.env.MONGO_URI = 
  "mongodb+srv://mmlapinm:20304050@cluster0-6dfwg.mongodb.net/test?retryWrites=true&w=majority";

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, 
                 {useNewUrlParser: true, 
                 useUnifiedTopology: true,
                 useFindAndModify: false
});



/** # SCHEMAS and MODELS #
/*  ====================== */

/** 2) Create a 'Person' Model */

// <Your code here >
var Schema = mongoose.Schema;
var CountersSchema = new Schema ({
  count : {type: Number, default: 1}
});
var Counters = mongoose.model('Counters', CountersSchema);

var removeItems = function(done){
  Counters.deleteMany({}, done);
  done(null);
};

var foo = () => {
removeItems((err, data) => {
  if(err) return console.log(err);
  console.log(data);
});  
};
//foo();

var getCountAndIncrease = function(done){
  
  done(null);
};
var foo = () => {
getCountAndIncrease((err, data) => {
  if(err) return console.log(err);
  console.log(data.name);
});  
};
//foo();




var Schema2 = mongoose.Schema;
var personSchema = new Schema2({
  name: {type: String, required: true}, 
  age: Number,
  favoriteFoods: [String]
});
var Person = mongoose.model('Person', personSchema);

/** 3) Create and Save a Person */

var createAndSaveCounters = function(done) {
  var count = new Counters({count: 3});
  count.save(done);
};

var savePerson = (obj, done) => {
  var student = new Person(obj);
  student.save(done);
  };

var createAndSavePerson = function(done) {
  savePerson({
    name: "Vasya", age: 31, favoriteFoods: ["bread"]
  }, done);
};

foo = () => {
createAndSavePerson((err, data) => {
  if(err) return console.log(err);
  console.log(data.name);
});  
};
//foo();
/** 4) Create many People with `Model.create()` */

var createManyPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, done);    
};

foo = () => {
var arrayOfPeople = [{
  name:"Petya Petrov", 
  age: 21, 
  favoriteFoods: ["fish", "bread"]
}, {
  name: "Lena", 
  age: 22, 
  favoriteFoods: ["choclade", "wine"]
}, {
  name: "Katya", 
  age: 23, 
  favoriteFoods: ["wine"]
}];
createManyPeople(arrayOfPeople ,(err, data) => {
  if(err) return console.log(err);
  console.log(data[0].name);
});  
};
//foo();

/** # C[R]UD part II - READ #
/*  ========================= */

/** 5) Use `Model.find()` */

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, done)
};

foo = () => {
findPeopleByName("Vasya", (err, data) => {
  if(err) return console.log(err);
  console.log(data.length);
});  
};
//foo();

/** 6) Use `Model.findOne()` */

var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, done)
};

foo = () => {
findOneByFood("bread", (err, data) => {
  if(err) return console.log(err);
  console.log(data.name);
});  
};
//foo();

/** 7) Use `Model.findById()` */

var findPersonById = function(personId, done) {
  Person.findById(personId, done);
};
foo = () => {
findPersonById("5ead25cab20a912f41c0ab4e", (err, data) => {
  if(err) return console.log(err);
  console.log(data._id);
});  
};
//foo();

/** # CR[U]D part III - UPDATE # 
/*  ============================ */

/** 8) Classic Update : Find, Edit then Save */

var findEditThenSave = function(personId, done) {
  var foodToAdd = 'hamburger';
  Person.findById(personId, (err, data) => {
    if(err) return console.log(err);
    var arr = data.favoriteFoods;
    var index = arr.findIndex((d) => {
      return d == foodToAdd;
    }, foodToAdd);
    if(index == -1){
      arr.push(foodToAdd);
      console.log("add", foodToAdd);
      data.save(data, done);
    }else{
      console.log("no add", foodToAdd);
    }
  });
};
foo = () => {
findEditThenSave("5ead25cab20a912f41c0ab4e", (err, data) => {
  if(err) return console.log(err);
  console.log(data._id);
});  
};
//foo();

/** 9) New Update : Use `findOneAndUpdate()` */

var findAndUpdate = function(personName, done) {
  var ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, 
                          {age: ageToSet},
                          {new: true},
                          done);
};
foo = () => {
findAndUpdate("Lena", (err, data) => {
  if(err) return console.log(err);
  console.log(data.age);
});  
};
//foo();

/** # CRU[D] part IV - DELETE #
/*  =========================== */

/** 10) Delete one Person */

var removeById = function(personId, done) {
  Person.findByIdAndRemove(personId, done);
};

foo = () => {
removeById("5ead25cab20a912f41c0ab4e", (err, data) => {
  if(err) return console.log(err);
  console.log(data);
});  
};
//foo();

/** 11) Delete many People */

var removeManyPeople = function(done) {
  var nameToRemove = "Mary";
  Person.deleteMany({name: nameToRemove}, done);
};

foo = () => {
removeManyPeople((err, data) => {
  if(err) return console.log(err);
  console.log(data);
});  
};
//foo();
/** # C[R]UD part V -  More about Queries # 
/*  ======================================= */

/** 12) Chain Query helpers */

var queryChain = function(done) {
  var foodToSearch = "burrito";
  //foodToSearch = "bread";
  Person.find({favoriteFoods: foodToSearch})
  .sort({name: 1})
  .limit(2)
  .select({age: 0})
  .exec(done);
};

foo = () => {
queryChain((err, data) => {
  if(err) return console.log(err);
  console.log(data);
});  
};
//foo();

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

/** # Further Readings... #
/*  ======================= */
// If you are eager to learn and want to go deeper, You may look at :
// * Indexes ( very important for query efficiency ),
// * Pre/Post hooks,
// * Validation,
// * Schema Virtuals and  Model, Static, and Instance methods,
// * and much more in the [mongoose docs](http://mongoosejs.com/docs/)


//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
```























[https://www.freecodecamp.org/learn/](https://www.freecodecamp.org/learn/)  
[glitch.com](https://glitch.com/edit/#!/grateful-caterwauling-tuna?path=README.md:1:0)  
[]()  
[]()  
[]()  
[]()  

