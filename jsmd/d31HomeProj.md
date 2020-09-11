### Take Home Projects

[Introduction to the Coding Interview Take Home Projects](#Introduction-to-the-Coding-Interview-Take-Home-Projects)  
[1. Show the Local Weather](#1.-Show-the-Local-Weather)  
[2. Build a Wikipedia Viewer](#2.-Build-a-Wikipedia-Viewer)  
[3. Use the Twitch JSON API](#3.-Use-the-Twitch-JSON-API)  
[4. Build an Image Search Abstraction Layer](#4.-Build-an-Image-Search-Abstraction-Layer)  
[5. Build a Tic Tac Toe Game](#5.-Build-a-Tic-Tac-Toe-Game)  
[6. Build a Simon Game](#6.-Build-a-Simon-Game)  
[7. Build a freeCodeCamp Forum Homepage](#7.-Build-a-freeCodeCamp-Forum-Homepage)  
[8. Build a Recipe Box](#8.-Build-a-Recipe-Box)  
[9. Build the Game of Life](#9.-Build-the-Game-of-Life)  
[10. Build a Roguelike Dungeon Crawler Game](#10.-Build-a-Roguelike-Dungeon-Crawler-Game)  
[11. P2P Video Chat Application](#11.-P2P-Video-Chat-Application)  
[12. Show National Contiguity with a Force Directed Graph](#12.-Show-National-Contiguity-with-a-Force-Directed-Graph)  
[13. Map Data Across the Globe](#13.-Map-Data-Across-the-Globe)  
[14. Manage a Book Trading Club](#14.-Manage-a-Book-Trading-Club)  
[15. Build a Pinterest Clone](#15.-Build-a-Pinterest-Clone)  
[16. Build a Nightlife Coordination App](#16.-Build-a-Nightlife-Coordination-App)  
[17. Chart the Stock Market](#17.-Chart-the-Stock-Market)  
[18. Build a Voting App](#18.-Build-a-Voting-App)  
[19. Build a Pong Game](#19.-Build-a-Pong-Game)  
[20. Build a Light-Bright App](#20.-Build-a-Light-Bright-App)  




#### Introduction to the Coding Interview Take Home Projects 
https://fcc-weather-api.glitch.me/api/current?lat=59.9508265&lon=30.4775539 
```
{"coord":{"lon":139,"lat":35},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds"}],
"base":"stations",
"main":{"temp":28.23,"pressure":1011,"humidity":74,"temp_min":26,"temp_max":31},
"visibility":10000,
"wind":{"speed":3.6,"deg":230},
"clouds":{"all":75},
"dt":1499396400,
"sys":{"type":1,"id":7616,"message":0.0043,"country":"JP","sunrise":1499369792,"sunset":1499421666},
"id":1851632,
"name":"Shuzenji",
"cod":200}
```
#### 1. Show the Local Weather
[view](https://codepen.io/mlapin/full/zYvLjpq)   
[dashboard](https://codepen.io/mlapin/pen/zYvLjpq)
[work template](https://codepen.io/freeCodeCamp/pen/bELRjV)  
[view template](https://codepen.io/freeCodeCamp/full/bELRjV)  
[https://rapidapi.com/](https://rapidapi.com/)  
[]()  
[]()  
[]()  
[]()  
[]()  
```
```


#### 2. Build a Wikipedia Viewer
h02wikiViewer  
[dashboard](https://codepen.io/mlapin/pen/abvaNej)  
[h02wikiViewer](https://codepen.io/mlapin/full/abvaNej)  
[work template](https://codepen.io/freeCodeCamp/pen/wGqEga)  
[view template](https://codepen.io/freeCodeCamp/full/wGqEga/)  
[angularjs codecademy](https://www.codecademy.com/courses/learn-angularjs/lessons/directives/exercises/directives-generalizations)  
[angularjs.org](https://docs.angularjs.org/api/ng/service/$http#jsonp)  
[AngularJS $http.jsonp() Service Example](https://www.tutlane.com/tutorial/angularjs/angularjs-http-jsonp-http-jsonp-service-method-example)  
[]()  
[req](https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=форд&callback=JSON_CALLBACK)  

```
```

#### 3. Use the Twitch JSON API
[dashboard](https://codepen.io/mlapin/pen/abvXzjX)  
[h03twitch](https://codepen.io/mlapin/full/abvXzjX)  
[work template](https://codepen.io/freeCodeCamp/pen/Myvqmo)  
[view template](https://codepen.io/freeCodeCamp/full/Myvqmo/)  
[pianistkakatrine](https://www.twitch.tv/pianistkakatrine)  
[poker](https://www.twitch.tv/ac7ionmannn)  
[Нарды](https://www.twitch.tv/dubler1/video/617975619)  
[games.md](https://github.com/mlapinm/A02Nh/blob/master/games.md)  
[twitch.tv/docs](https://dev.twitch.tv/docs/v5)  
[]()  
[]()  
[]()  
```
```

#### Use the TwitchTV JSON API 
[Use the TwitchTV JSON API Part 1](https://www.youtube.com/watch?v=Nm2bXBlELZU&list=PLHdCowjFIBmJwYL9tPZOkn6CIVLg6Z36a&index=1)  

[dashboard]()  
[h03x1twitch]()  
[work template]()  
[view template]()  

[]()  
[]()  
[]()  
[]()  
[]()  


```
var img = new Image();
img.src = 'http://lol.ru/ololoshka.png';
img.onload = function(){alert('картинка существует')};
img.onerror = function(){alert('картинка не существует')};
```

#### 4. Build an Image Search Abstraction Layer
- api google
- clitch
[dashboard](https://glitch.com/edit/#!/understood-verdant-brian?path=server.js%3A1%3A0)  
[view](https://understood-verdant-brian.glitch.me/)  
[work template]()  
[view template]()  
[Image Search Abstraction Layer Part 1](https://www.youtube.com/watch?v=3TDtF4S4m4M)  
[Image Search Abstraction Layer Part 2](https://www.youtube.com/watch?v=hCa2k0ab_vw)  
[]()  
[]()  
[]()  
[]()  
```
```

[API-интерфейсы поиска Bing версии 7](https://azure.microsoft.com/ru-ru/try/cognitive-services/my-apis/?apiSlug=search-api-v7)  
```
API-интерфейсы поиска Bing версии 7 содержат разные улучшения, такие как повышение производительности при поиске в Интернете, новые фильтры для поиска изображений, упрощенная разбивка на страницы при поиске видео и изображений, а также оптимизированная обработка ошибок.

Пакет этой бесплатной пробной версии включает все API-интерфейсы поиска Bing (для поиска в Интернете, поиска изображений, видео, новостей, сущностей и визуального поиска), включая исправление орфографических ошибок, связанные поисковые запросы и другие доступные ответы. Конечная точка визуального поиска Bing поддерживает 1 000 транзакций в месяц (до 1 в секунду), а все другие конечные точки — 3 000 транзакций в месяц (до 3 в секунду). Срок действия ключей пробной версии истекает через 7 дн., после чего подписку можно будет приобрести на портале Azure.

Конечные точки

https://api.cognitive.microsoft.com/bing/v7.0/suggestions

https://api.cognitive.microsoft.com/bing/v7.0/entities

https://api.cognitive.microsoft.com/bing/v7.0/images

https://api.cognitive.microsoft.com/bing/v7.0/localbusinesses

https://api.cognitive.microsoft.com/bing/v7.0/news

https://api.cognitive.microsoft.com/bing/v7.0/spellcheck

https://api.cognitive.microsoft.com/bing/v7.0/urlpreview

https://api.cognitive.microsoft.com/bing/v7.0/videos

https://api.cognitive.microsoft.com/bing/v7.0/images/visualsearch

https://api.cognitive.microsoft.com/bing/v7.0

Ключ 1: c0bc83bda52a45eea3e68f59eb9fda90

Ключ 2: ff319a0e66e84945b6e4bb3bec1621bb
```

#### Part 1
[api/imagesearch/test?offset=2](https://understood-verdant-brian.glitch.me/api/imagesearch/test?offset=2)  
[cloud.mongodb.com](https://cloud.mongodb.com/v2/5ea44c39177e42591b408863#clusters)  
[api/recentsearchs](https://understood-verdant-brian.glitch.me/api/recentsearchs)  
[]()  
```
{"searchVal":"test","offset":"2"}
```

```
// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const Bing = require('node-bing-api')({accKey:'c0bc83bda52a45eea3e68f59eb9fda90'});

app.use(bodyParser.json());
app.use(cors());

//Get call with required and not required params to do a search for an image
app.get('/api/imagesearch/:searchVal*', (req, res, next)=>{

  var {searchVal} = req.params;
  var {offset} = req.query;
  res.json({
    searchVal,
    offset
  });  
});

app.listen(process.env.PORT || 3000,()=>{
  console.log("Server is running");
});
```

#### Part 2
model  

```
//Requirements for mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model
const searchTermSchema = new Schema(
{
  searchVal: String,
  searchDate: Date
},
  {timeStamps: true}
);
//Connects model and collection
const ModelClass = mongoose.model('searchTerm', searchTermSchema);

module.exports = ModelClass;

```

```
var data = new searchTerm({
  searchVal,
  searchDate: new Date()
});  

data.save(err => {
  if(err){ 
    return res.send('Error Saving to DataBase');
  }
  res.json(data);
```

#### Part 3
[node-bing-api](https://www.npmjs.com/package/node-bing-api#usage)  
[images-search](https://www.npmjs.com/package/node-bing-api#images-search)  
[api/imagesearch/pokemon](https://understood-verdant-brian.glitch.me/api/imagesearch/pokemon)  



#### 5. Build a Tic Tac Toe Game
[dashboard](https://codepen.io/mlapin/pen/WNQaqgR)  
[h05tictac](https://codepen.io/mlapin/full/WNQaqgR)  
[work template](https://codepen.io/freeCodeCamp/pen/KzXQgy)  
[view template](https://codepen.io/freeCodeCamp/full/KzXQgy/)  
[Tic Tac Toe Game Part 2 jQuery: Free Code Camp Advanced Front End Projects](https://www.youtube.com/watch?v=iBnYfox2rX8)  
[]()  
[]()  
[]()  
```
```

```
//Определение соответствия [turn, turn, turn]
var arr = [0, 0, 0];
var turn = 0;
var arr2 =[];
//1-й способ
//вернет положительный результат при несоответсвии заданному массиву
//состоящему из 3-х turn
 arr2 = arr.filter(i => i != turn)
//2-й способ
//isTrue=true - когда как надо 
//все элементы - turn
var isNo = false;
arr.forEach((i) => {
 if(i !== turn){
   return;
 }
   isNo = true;
})

log(isNo,arr2, arr)
```

```
//нахождение наличия выигрышных ходов
//массив ходов
var turnArray = ['X', 'X', 'X']
var turn = 'X';
//массив выигрышных ходов
var winArray = [[0, 1, 2]];
var isTrue = false;

var arrLine = [];
winArray.forEach((i) => {
  var arrVal = [turnArray[i[0]], turnArray[i[1]], turnArray[i[2]]];
  if(arrVal.filter(i => i == turn).length == 3){
    isTrue = true;
    arrLine = i;
    return;
  }
});

log(isTrue,arr2, arrLine)
```

#### computerTurn
- ход компьютера
- в цикле, генерит число от 0 до 8 и если клетка свободна выходит из цикла
- проставляет в клетку свой символ

```
  function computerTurn(){
    //Used to break while loop
    var taken = false;
    while(taken===false && count!==5){
      //Generate computer's random turn
      var computersMove = (Math.random()*10).toFixed();
      var move = $("#"+computersMove).text();
      if(move==="#"){
        $("#"+computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
      
    }
  }
```

#### tictac
```
Крестики нолики.
Кнопки 2 кто чем ходит
кнопка 0 кто первый pc, user
gameOn - false - ходит компьютер
при загрузке если gameOn===false - compurersTurn
turn вызывается по клику с номером клетки
winTest - проверка на победу запускается после хода
если победа gameOn=true , чтобы не ходил компьютер
в ней же вызывается compurersTurn
winTest - проверка на победу запускается после хода

turn='X'
pcTurn='O'

mTurn()
mPcTurn()

btnFirst btnA btnB 
x - user
0 - pc
0 - user
x - pc

```

```
var log = console.log

var winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var turn = "X";
  //Array stores values that we will check later for a winner
  var turns =[]
  turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
//turns = ['1', '1', '1', '1', '1', '1', '1', '1', '1'];

function mOtherCell(fromArr, exArr){
//возвращает 1-й элемент не равный exArr  
  var resArr = []
  resArr = fromArr.filter(v => exArr.indexOf(v)==-1)
  return resArr.length == 1 ? resArr[0] : -1
}

function mOtherCells(fromArr, exArr){
//возвращает массив элементов не равных exArr  
  var resArr = []
  resArr = fromArr.filter(v => exArr.indexOf(v)==-1)
  return resArr
}

function mLinesCells(cell){
//при входном массиве из одной клетки свободные клетки не проверяет  
//функция возвращает массив линий с заданными 2-мя клетками
//оставшаяся клетка #
  var resArr = []
  winArray.forEach(val => {
    var is = 0
    cell.forEach(v => {
      if(val.indexOf(v) != -1){
         is++ 
      }
    })
    if(is == cell.length){
      var otherCell = mOtherCell(val, cell);
      if(turns[otherCell] == '#' || cell.length == 1){
        resArr.push(val)
      }
    }
  })
  return resArr;
}

function mMovesFrom(winArr, searchArr, excludeArr){
// функцию, которая принимает массив выигрышных линий и массив предпочтительных ходов
// возвращает массив ходов из числа предпочтительных ходов
 var resArr=[];
 var seArr = mOtherCells(searchArr, excludeArr);
 for(var i in winArr){
   //[ 0, 3, 6 ]
   for(var j in winArr[i]){
     //0
     for(var k in seArr){
       if(seArr[k] == winArr[i][j]){
         resArr.push(seArr[k]);
       }
     }     
   }
 }
 resArr = resArr.sort()
 return resArr;
}

var arr = []
arr = mLinesCells([0])
var res = mOtherCell([1,3,5],[1,5])
//log(res, arr)
var ar = [ [ 0, 1, 2 ], [ 0, 3, 6 ], [ 0, 4, 8 ] ]
var winArr = [[ 0, 1, 2 ], [0, 3, 6 ], [ 0, 4, 8 ]]
arr = mMovesFrom(winArr,[0,2,4,6,8],[0])
log(arr)
```

```

```



#### 6. Build a Simon Game
[dashboard](https://codepen.io/mlapin/pen/JjYmgdq)  
[h06Simon](https://codepen.io/mlapin/full/JjYmgdq)  
[work template](https://codepen.io/Em-Ant/pen/QbRyqq)  
[view template]()  
[]()  
[]()  
```
```



#### 7. Build a freeCodeCamp Forum Homepage
[dashboard](https://codepen.io/mlapin/pen/MWaPNKX)  
[h07Forum](https://codepen.io/mlapin/full/MWaPNKX)  
[work template](https://codepen.io/freeCodeCamp/pen/JqdoMV)  
[view template](https://codepen.io/freeCodeCamp/full/JqdoMV)  
[]()  
[]()  
```
```


componentDidMount  
fetch  
[glitch/latest](https://buttercup-island.glitch.me/latest)  
[glitch](https://buttercup-island.glitch.me/)  
[glitch-work](https://glitch.com/edit/#!/buttercup-island.glitch.me)  
[freecodecamp](https://forum.freecodecamp.org/latest.json)  




1. App
1. ForumTopic
1. StyledForumTopic
1. StyledTopicField
1. TopicRank
1. TopicTitle
1. TopicLink
1. UserAvatar
1. UserLink
1. UserImage
1. Posters
1. CountField
1. ForumTopic






#### 8. Build a Recipe Box
[dashboard](https://codepen.io/mlapin/pen/wvKYVWe)  
[h08Recipe](https://codepen.io/mlapin/full/wvKYVWe)  
[work template](https://codepen.io/freeCodeCamp/pen/dNVazZ)  
[view template](https://codepen.io/freeCodeCamp/full/dNVazZ/)  
[]()  
[]()  
```
```




#### 9. Build the Game of Life
[dashboard](https://codepen.io/mlapin/pen/YzyJdgV)  
[h09Life](https://codepen.io/mlapin/full/YzyJdgV)  
[view template](https://codepen.io/freeCodeCamp/full/BpwMZv)  
[]()  
[]()  
```
```
##### only html
##### empty react
##### react empty

##### only html
```
#app
  .boardWrapper
    .board
      .cell{:style => "background-color:black;"}
      .cell{:style => "background-color:black;"}
      .cell{:style => "background-color:black;"}
```

```
@import url('https://fonts.googleapis.com/css?family=Orbitron|Shrikhand|Six+Caps');
$cell-dimensions: 15px;
$board-width: $cell-dimensions * 50;
$board-height: $cell-dimensions * 30;
$dark-highlight: lighten(black, 15%);
$light-green: #66ff33;
$cell-border: 1px solid $dark-highlight;
body {
  background: black;
  font-family: Orbitron
}

#app {
  display: flex;
  //height: 100vh;
  justify-content: center;
  align-items: center;
}

.title {
  color: $light-green;
  font-family: Shrikhand;
  font-size: 35px;
  text-align: center;
  margin-bottom: 3px;
}

.boardWrapper {
  padding: 5px;
  background: $dark-highlight;
  border-radius: 5px;
  .board {
    height: $board-height;
    width: $board-width;
    border-top: $cell-border;
    border-left: $cell-border;
    .cell {
      //background-color: black;
      height: $cell-dimensions;
      width: $cell-dimensions;
      box-sizing: border-box;
      border-right: $cell-border;
      border-bottom: $cell-border;
      float: left;
      font-size: 7px;
      color: orange;
    }
  }
}
```

##### empty react
```

function log(value){
      let div1 = document.getElementById("div1");
    div1.innerText = value;

}

class GameOfLife extends React.Component{
  constructor(props){
    super(props);
    this.state={
      patterns: []
    };
    this.createBoard = this.createBoard.bind(this); 
  }
  createBoard(cells){
    let config = [];
    config.push(1);
    
    return config;
  }
  
  render(){
    log(3334444);
    return (    <div>11111111111</div>
    );
  }
}

ReactDOM.render(
<GameOfLife/>,
  document.getElementById('app')
);
```

##### react empty
```
const HEIGHT_BOARD = 30;
const WIDTH_BOARD = 50;

function log(value){
      let div1 = document.getElementById("div1");
  if(div1)
    div1.innerText = value;
}

class GameOfLife extends React.Component{
  constructor(props){
    super(props);
    this.state={ 
      currentBoard: [],
      patterns: []
    };
    this.createBoard = this.createBoard.bind(this); 
    this.convertToOneDimension = this.convertToOneDimension.bind(this); 
  }
  createBoard(cells){
    let config = [];

    
    return config;
  }
  convertToOneDimension(multiDimArray) {
    // Converts multi-dim representation of board into a
    // single dimension array than can easily be drawn by the
    // render function.
    
    let multiDimArray2 = [];
    for(let i=0;i<HEIGHT_BOARD;i++){
      multiDimArray2.push([]); 
      for(let j=0;j<WIDTH_BOARD;j++){
        multiDimArray2[i].push(0);
      }
    }
    log(multiDimArray2.length);
    
    let oneDimesnional = [];
      multiDimArray2.forEach(row => {
        row.map(cell => {
          return oneDimesnional.push(cell);
        });
      });
    return oneDimesnional;
  }
   
  render(){
    log(3334444);
    const dead = { background: 'black' };
    const alive = { background: '#66ff33' };
    const board = this.convertToOneDimension(this.state.currentBoard);
    const drawBoard = board.map((cell, i) => {
      let color = cell === 0 ? dead : alive;
      return <div id={i} onClick={this.clickChanger} className='cell' style={color} key={i}></div>
    });
    
    return ( 
      <div>
    <GameBoard create={drawBoard}/>
      </div>
    );
  }
}
// STATELESS COMPONENTS:
class GameBoard extends React.Component {
  render() {
    return (
      <div className='boardWrapper'>
        <div className='board'>
          {this.props.create}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
<GameOfLife/>,
  document.getElementById('app')
);
```





#### 10. Build a Roguelike Dungeon Crawler Game
[dashboard](https://codepen.io/mlapin/pen/bGVmXrY)  
[h10Roguelike](https://codepen.io/mlapin/full/bGVmXrY)  
[work template](https://codepen.io/freeCodeCamp/pen/apLXEJ)  
[view template](https://codepen.io/freeCodeCamp/full/apLXEJ/)  
[]()  
[]()  
```
```




#### 11. P2P Video Chat Application
[horoku view](https://calm-cliffs-53803.herokuapp.com/)  
[github h31Express](https://github.com/mlapinm/h31Express)  


[dashboard](https://glitch.com/edit/#!/cooked-glaze-ant?path=README.md%3A1%3A0)  
[h11P2P](https://cooked-glaze-ant.glitch.me/)  
[work template](https://glitch.com/edit/#!/grove-voice.glitch.me)  
[view template](https://grove-voice.glitch.me/)  
[](https://grove-voice.glitch.me/hh)  
[]()  
```
```




#### 12. Show National Contiguity with a Force Directed Graph
[dashboard](https://codepen.io/mlapin/pen/VwvEoGK)  
[h12Contiguity](https://codepen.io/mlapin/full/VwvEoGK)  
[work template](https://codepen.io/freeCodeCamp/pen/xVopBo)  
[view template](https://codepen.io/freeCodeCamp/full/xVopBo)  
[]()  
[]()  
```
```



#### 13. Map Data Across the Globe
[dashboard](https://codepen.io/mlapin/pen/yLYRmWr)  
[h13Map](https://codepen.io/mlapin/full/yLYRmWr)  
[work template](https://codepen.io/freeCodeCamp/pen/mVEJag)  
[view template](https://codepen.io/freeCodeCamp/full/mVEJag)  
[]()  
[]()  
```
```



#### 14. Manage a Book Trading Club
[dashboard](https://glitch.com/edit/#!/burly-garrulous-respect?path=server.js%3A1%3A0)  
[h14BookTrading](https://burly-garrulous-respect.glitch.me/)  
[work template]()  
[view template]()  
[]()  
[]()  
```
```



#### 15. Build a Pinterest Clone
[dashboard](https://glitch.com/edit/#!/scandalous-cake-dumpling?path=README.md%3A1%3A0)  
[h15Pinterest](https://scandalous-cake-dumpling.glitch.me/)  
[work template]()  
[view template](https://wild-song.glitch.me/)  
[]()  
[]()  
```
```



#### 16. Build a Nightlife Coordination App
[dashboard]()  
[h16Nightlife]()  
[work template]()  
[view template](http://whatsgoinontonight.herokuapp.com/)  
[]()  
[]()  
```
```













#### 17. Chart the Stock Market
[dashboard]()  
[h17StockMarket]()  
[work template]()  
[view template](http://watchstocks.herokuapp.com/)  
[]()  
[]()  
```
```
#### 18. Build a Voting App
[dashboard]()  
[h18Voting]()  
[work template]()  
[view template](https://fcc-voting-arthow4n.herokuapp.com/polls)  
[]()  
[]()  
```
```
#### 19. Build a Pong Game
[dashboard](https://codepen.io/mlapin/pen/RwWqbRx)  
[h19Pong](https://codepen.io/mlapin/full/RwWqbRx)  
[work template](https://codepen.io/satyamdev/full/pdMmBp)  
[view template](https://codepen.io/satyamdev/full/pdMmBp)  
[]()  
[]()  
```
```
#### 20. Build a Light-Bright App
[dashboard](https://codepen.io/mlapin/pen/vYNQByp)  
[h20Light-Bright](https://codepen.io/mlapin/full/vYNQByp)  
[work template](https://codepen.io/freeCodeCamp/pen/eyLYXE)  
[view template](https://codepen.io/freeCodeCamp/full/eyLYXE)  
[]()  
[]()  
```
```

#### h21xPjson
[h21xPjson](https://codepen.io/mlapin/pen/mdezOMG)  
[]()  
[Коммуникация между сайтами с помощью JSONP](https://www.youtube.com/watch?v=OIaaoSUBW0s)  
[view template]()  
[json](https://raw.githubusercontent.com/mlapinm/A02Nh/master/json/data.json)  
```
```

#### h22xPjson
[h22xPjson](https://codepen.io/mlapin/pen/MWaPpWB)  
[Использование техники JSONP Борисов](https://www.youtube.com/watch?v=VyIvCFUw17g)  
[api.flickr.com](http://api.flickr.com/services/feeds/photos_public.gne?tags=cars)  
[]()  
[]()  
[]()  


1. iexplorer открывает xml
1. format=json  
[json](http://api.flickr.com/services/feeds/photos_public.gne?tags=cars&format=json)
1. &jsoncallback  
[json](http://api.flickr.com/services/feeds/photos_public.gne?tags=cars&format=json&jsoncallback)
1. jsonFlickrFeed
demo.js
1. 
1. 
1. 


#### h23xvchat
[work](https://glitch.com/edit/#!/gray-vigorous-frog?path=README.md%3A1%3A0)  
[h23xvchat](https://gray-vigorous-frog.glitch.me/)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  


[P2P Video Chat with JavaScript / WebRTC](https://www.youtube.com/watch?v=ieBtXwHvoNk&list=PL1QRvYV-LXn7Mdt7pKOdp7gircj8CwMgk&index=2)  
[Build Video Chat Web App From Scratch in 40 mins](https://www.youtube.com/watch?v=KLCcCTFivhM&t=105s)  
[WebRTC Let's learn together (ReactNative) - Part 4](https://www.youtube.com/watch?v=uR_92JkSezA)  
[]()  
[]()  
[]()  
[]()  
[]()  


#### simple-peer tutorial
[SimplePeerTutorial](https://www.youtube.com/watch?v=JOQlo-D4ElU)  
[]()  
[]()  
[]()  
[]()

#### h29server
node express visual code  
[code.visualstudio](https://code.visualstudio.com/)  
[]()  
[]()  
[]()  



- Visual Studio Code
- open folder D:\programs\nodejs\h29server
- npm init
- npm install express
- для получения devDepencies
- для автоматической перезагрузки сервера
- npm i -D nodemon
- npm install nodemon --save-dev
```
"scripts":{
    "start": "node server",
    "dev": "nodemon server"
}
```
- save

- index.js

```
const express = require('express')

const PORT = 3000

const app = express()



app.get('/',(req,res,next)=>{
    res.send('hello1')
//    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT,()=>{
    console.log("Server started ... port 3000")
})
```

- npm run dev
- http://localhost:3000/

#### h30Express
How to deploy a Node / Express App to Heroku  
[How to deploy a Node / Express App to Heroku](https://www.youtube.com/watch?v=6Fu39V6T_G0)  
[]()  
[]()  
[]()  
[]()  
[]()  


##### Удаление проекта
- nodechate
- apps/nodechate/settings
- delete


##### [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)


- are you ready to start  
- download windows 64 
- Heroku Command Line Interface (CLI)
- heroku-x64.exe
- change password zZ2

#### h31Express  
- new repository h31Express

```
echo "# h31Express" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mlapinm/h31Express.git
git push -u origin master
```

- D:\programs\nodejs\h31Express>
- git clone https://github.com/mlapinm/h31Express.git
- cd h31Express

```
D:\programs\nodejs\h31Express>heroku create
Creating app... done, ? calm-cliffs-53803
https://calm-cliffs-53803.herokuapp.com/ | https://git.heroku.com/calm-cliffs-53
803.git
```

- git add .
- git commit -m "Deploy app heroku"
- git push heroku master

- git add .
- git commit -m "Deploy app server video"
- git push heroku master

[horoku view](https://calm-cliffs-53803.herokuapp.com/)  
[github h31Express](https://github.com/mlapinm/h31Express)  











#### Build Video Chat Web App From Scratch in 40 mins

[Doubt Everything](https://www.youtube.com/watch?v=KLCcCTFivhM)  
[work](https://glitch.com/edit/#!/ordinary-industrious-salt?path=README.md%3A1%3A0)  
[h27xvchat](https://ordinary-industrious-salt.glitch.me/)  
[Build Video Chat Web App From Scratch in 40 mins](https://www.youtube.com/watch?v=KLCcCTFivhM&t=108s)  
[]()  
[]()  
[]()  


- npm i -D watchify
- npm install simple-peer
- npm install socket.io
- npm install package_name@latest --save-dev
- npm install package_name@latest --save
- npm run watch
```
  "scripts": {
    "start": "nodemon index",
    "watch": "npx watchify ./public/main.js -o ./public/bundle.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.4",
    "watchify": "^3.11.1"
  }
```





[freecodecamp](https://www.freecodecamp.org/learn)  
[glitch](https://glitch.com/@mmlapinm)  
[h22xPjson](https://codepen.io/mlapin/pen/MWaPpWB)  
[datacamp](https://campus.datacamp.com/courses/introduction-to-data-science-in-python/getting-started-in-python?ex=8)  
[]()  
[]()  
[]()  
[]()  

