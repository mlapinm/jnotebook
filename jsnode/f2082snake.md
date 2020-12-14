## Learn JavaScript by Building 7 Games - Full Course
1 [Memory Game - Level 1](#Memory-Game---Level-1)  
2 [Whack-a-mole - level 1](#Whack-a-mole---level-1)  
3 [Connect Four - level 1](#Connect-Four---level-1)  
4 [Nokia 3310 Snake - level 2](#Nokia-3310-Snake---level-2)  
5 [Space Invaders - level 2](#Space-Invaders---level-2)  
6 [Frogger - level 2](#Frogger---level-2)  
7 [Tetris - level 3](#Tetris---level-3)  

1 [Memory Game - Level 1](#Memory-Game---Level-1)  
- push()
- querySelector()
- SetAttribute()
- getAttribute()
- appendChild()
- Math.random()
- sort()
- For loops
- createElement()  
2 [Whack-a-mole - level 1](#Whack-a-mole---level-1)  
- querySelector()
- addEventListener()
- setInterval()
- classList
- forEach()
- Arrow functions  
3 [Connect Four - level 1](#Connect-Four---level-1)  
- querySelector()
- addEventListener()
- onclick
- classList.contains()
- classList.add()
- For loops
- Arrow functions  
4 [Nokia 3310 Snake - level 2](#Nokia-3310-Snake---level-2)  
- querySelector()
- addEventListener()
- setInterval()
- keyCodes
- pop()
- unshift()
- push()
- classList.contains()
- classList.add()
- classList.remove()  
5 [Space Invaders - level 2](#Space-Invaders---level-2)  
- querySelector()
- addEventListener()
- Switch cases
- keyCodes
- indexOf()
- includes()
- classList
- setInterval()
- clearInterval()
- push()  
6 [Frogger - level 2](#Frogger---level-2)  
- querySelector()
- addEventListener()
- setInterval()
- clearInterval()
- forEach()
- classList.contains()
- classList.add()
- classList.remove()  
7 [Tetris - level 3](#Tetris---level-3)  
- querySelector()
- addEventListener()
- Array.from()
- getElementsByClassName()
- Math.floor()
- Math.random()
- forEach()
- classList.contains()
- classList.add()
- classList.remove()
- setInterval()
- clearInterval()
- some()
- style.backgroundImage
- splice()
- concat()
- appendChild()
- Arrow functions  

## Learn JavaScript by Building 7 Games - Full Course
## Memory Game - Level 1  
[Memory Game - Level 1](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s)  
[kubowania/memory-game: JavaScript, HTML and CSS grid-based game](https://github.com/kubowania/memory-game)   
### 1
index.html  
```
  <h3>Score: <span id="result"></span></h3>
  <div class="grid">

  </div>
```

```
.grid{
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  width: 400px;
  background-color: beige;
}
```
### 2
app.js  
```
document.addEventListener('DOMContentLoaded', ()=>{

  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheesburger',
      img: 'images/cheesburger.png'
    },
    {
      name: 'cheesburger',
      img: 'images/cheesburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    }
  ]

  const grid = document.querySelector('.grid')

  //create your board
  function createBoard(){
    for(let i=0; i < cardArray.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      /// card.setAttribute('src', cardArray[i]['img'])
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.append(card)
    }
  }
```
### 3
```
  // check for matches
  function checkForMatch(){
    var cards =  document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] == cardsChosen[1]){
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    }else{
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  // flip you card
  function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
  }
```
### 4
```
  cardArray.sort(()=> 0.5 - Math.random())
```

  
## Whack-a-mole - level 1  
[Whack-a-mole - level 1](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=699s)  
[kubowania/whack-a-mole: Vanilla JavaScript game](https://github.com/kubowania/whack-a-mole)   
  
## Connect Four - level 1  
[Connect Four - level 1](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=1187s)  
[kubowania/connect-four: A Pure JavaScript grid-based game](https://github.com/kubowania/connect-four)   
  
## Nokia 3310 Snake - level 2  
[Nokia 3310 Snake - level 2](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=1657s)  
[kubowania/Nokia3310-Snake: A vanilla JavaScript game with tutorial](https://github.com/kubowania/Nokia3310-Snake)   
  
## Space Invaders - level 2  
[Space Invaders - level 2](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=2590s)  
[kubowania/space-invaders: A vanilla JavaScript game with HTML and CSS](https://github.com/kubowania/space-invaders)   
  
## Frogger - level 2  
[Frogger - level 2](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3546s)  
[kubowania/Frogger: A retro grid-based game in vanilla JavaScript, HTML and CSS](https://github.com/kubowania/Frogger)   
  
## Tetris - level 3  
[Tetris - level 3](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=1178s)  
[kubowania/Tetris: A vanilla javascript game](https://github.com/kubowania/Tetris)  
  