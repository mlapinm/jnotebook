[Phaser.JS](https://www.codecademy.com/learn/learn-phaser)  
[]()  
[]()  


#### Learn Phaser: Basics
LESSON
Learn all about Phaser.js!

Exercises

1. Hello World

2. Draw A Circle

3. Draw A Sprite

4. Draw A Background Image

5. Create A Config

6. Start Making A Scene

7. Move Your Bodies

8. Storing State

9. Input

10. Keyboard Events

11. Sounds

12. Review




#### Learn Phaser: Basics
LESSON
Learn all about Phaser.js!

Exercises

1. Hello World

game.js
```
function create() {
  // Change "Codey's Adventures\n  in Code World" to the name of your game
  this.add.text(50, 100, "Michael's Adventures\n  in Code World", { font: "40px Times New Roman", fill: "#ffa0d0"});

  // Change "by Codecademy" to your name!
  this.add.text(130, 300, "by Michael", { font: "20px Times New Roman", fill: "#ffa0d0"});
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create
	}
};

const game = new Phaser.Game(config);
```

2. Draw A Circle
```
  let circle5 = this.add.circle(30, 40, 20, 0xFFFFFF);
```

#### 3. Draw A Sprite  
```
function preload() {
  // Load in the sprite here!
this.load.image('codey','https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  // Create a sprite game object here!
this.add.sprite(40, 80, 'codey');
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)
```

#### 4. Draw A Background Image
```
function preload() {
  // Load in the background image here!
this.load.image('sky', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg');
}

function create() {
  // Put the background image in the scene here!
this.add.image(200, 200, 'sky');
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)
```
#### 5. Create A Config
```
const config = {
  width: 200,
  height: 200,
  backgroundColor: 0x00FF00,
};
const game = new Phaser.Game(config);
```
#### 6. Start Making A Scene
```
// Create a create() function here:
function create(){
  this.add.text(0, 0, "Start Screen");
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#a0a0dd",
  // Add in the scene information in the config here:
  scene:{
    create,
  },
}

const game = new Phaser.Game(config)
```
#### 7. Move Your Bodies
```
let codey;

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function here
function update(){
 this.codey.x += 1;
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    // Include update here!
    update,
	}
}

const game = new Phaser.Game(config)
```
#### 8. Storing State
```
// Define "gameState" here
const gameState={
  
};

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle = this.add.circle(20, 20, 10, 0x0000FF);

}

function update() {
  // Update the circle in gameState.circle here
gameState.circle.y += 1;
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)
//drop down circle
```
#### 9. Input
```
const gameState = {
  onColor: 0xaaffaa,
  offColor: 0xffaaaa
}

function create() {
  gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
  gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
   // add the switchedOn state here
  
  // set gameState.rect2 as interactive here
gameState.rect2.setInteractive();
  // create the pointerup listener for rect2 here
gameState.rect2.on('pointerup', function(){
  gameState.rect1.fillColor = gameState.offColor;
  gameState.rect2.fillColor = gameState.onColor;
});  
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 450,
  backgroundColor: 0x333333,
  scene: {
    create
  }
}

const game = new Phaser.Game(config)
```
#### 10. Keyboard Events
```
const gameState = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
 gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // Update based on keypress here!
 if(gameState.cursors.right.isDown){
   gameState.codey.x += 5;
 }
if(gameState.cursors.left.isDown){
   gameState.codey.x -= 5;
 }
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
```
#### 11. Sounds
```
const gameState = {}

function preload() {
  // load our 'incredible' sound here!
this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3');
    this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3')

}

function create() {
  // add our 'incredible' sound to our scene here!
gameState.incredible = this.sound.add('incredible');
  gameState.awesome = this.sound.add('awesome')
  
  // Display "Incredible" and "Really, really awesome" buttons
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();

  // add a 'pointerup' handler to incredibleBox here:
  gameState.incredibleBox.on('pointerup', function(){
    gameState.incredible.play();
  });
  gameState.awesomeBox.on('pointerup', function() {
    gameState.awesome.play()
  })
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  backgroundColor: "#333333",
  scene: {
    preload,
    create
  }
}

const game = new Phaser.Game(config)
```
#### 12. Review
```
const gameState={
  
}
const config={
  width: 200,
  height: 200,
  backgroundColor: 0xdda0dd,
  scene:{
    preload,
    create,
    update,
  },
};
const game = new Phaser.Game(config);
function preload(){
  this.load.image('codey','https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}
function create(){
  gameState.codey = this.add.sprite(100, 100, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}
function update(){
  if(gameState.cursors.down.isDown){
    gameState.codey.y +=1;
  }
}
```

#### Learn Phaser Basics: Color a Pegasus
LESSON
This course covers the basic Phaser operations to make an interactive game out of GameObjects.

Exercises

1. Introduction

2. Coloring

3. Updating Color

4. Indicating Selections

5. Indicating Palette Selection

6. Review

#### Learn Phaser Basics: Color a Pegasus
LESSON
This course covers the basic Phaser operations to make an interactive game out of GameObjects.

Exercises

1. Introduction

2. Coloring
```
function create ()
{
  let pegasusShapes = getPegasusShapes(this);
  let staticShapes  = getPegasusStaticShapes(this); 
  for (let shape of pegasusShapes) {
    shape.smoothness = 25;
    shape.strokeColor = 0x000000;
    shape.isStroked = true;
    shape.setOrigin(0, 1);
    shape.lineWidth = 2
    
    /* make each shape interactive here */
shape.setInteractive();
    /* add a pointerup handler here */
shape.on('pointerup', function(){
  this.fillColor = gameState.selectedColor;
})
  }
```
#### 3. Updating Color
```
  for (let i = 0; i < gameState.palette.length; i++) {
    // Create each of the palette circles with one of the colors from the palette
    let color = gameState.palette[i];
    let paletteCircle = this.add.circle(translation + spacing * i, 515, 22, color);
    
    paletteCircle.strokeColor = 0x000000;
    paletteCircle.isStroked = true;
    paletteCircle.lineWidth = 2;

    /* add a click handler for each palette circle here */
paletteCircle.setInteractive();
paletteCircle.on('pointerup', function(){
  gameState.selectedColor = this.color;
}, {color});
  }
```
#### 4. Indicating Selections
```
    shape.on('pointerover', function(){
     this.setBlendMode(Phaser.BlendModes.SCREEN); 
    });
    
    // Add 'pointerover' and 'pointerout' 
    // handlers here
 shape.on('pointerout', function(){
this.setBlendMode(Phaser.BlendModes.NORMAL);   
 });   
```
#### 5. Indicating Palette Selection
```
paletteCircle.on('pointerout', function(){
  this.paletteCircle.strokeColor = 0x000000;
  if(this.color === gameState.selectedColor){
    this.paletteCircle.strokeColor = 0xffc836;
  }
}, {paletteCircle, color});
    // paletteCircle here
```
6. Review

#### Learn Phaser: Physics
LESSON
In this lesson, you’ll build out an entire game that uses physics!

Exercises

1. Building a Phaser game with Physics

2. Adding a Sprite

3. Implementing Physics

4. Adding Static Groups

5. Detecting Collisions

6. Adding Controls and Velocity

7. Adding Enemies

8. Timed Events

9. Removing Enemies

10. Adding a score

11. Losing Condition

12. Resetting A Scene

13. Review
Close and return to main application

#### Learn Phaser: Physics
LESSON
In this lesson, you’ll build out an entire game that uses physics!

Exercises

1. Building a Phaser game with Physics

#### 2. Adding a Sprite
```
function preload() {
  this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
  this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png')
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png')
}

const gameState = {};

function create() {
  // Add your code below: 
this.physics.add.sprite(50, 50, 'codey');   
}

function update() {
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: "b9eaff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)
//this.physics.add.sprite(50, 50, 'codey'); 
```
#### 3. Implementing Physics
```
  // Add the physics property below: 
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {y: 300},
      debug: true,
    },
  }
};
```
#### 4. Adding Static Groups
```
  // Add your code below:
  const platforms = this.physics.add.staticGroup();
  platforms.create(225, 510, 'platform');
```
#### 5. Detecting Collisions
```
  // Add your code below:
 gameState.player.setCollideWorldBounds(true); 
this.physics.add.collider(gameState.player, platforms);  
```
#### 6. Adding Controls and Velocity
```
  
  // Create your cursor object below: 
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // Add your conditional statements below:
  if(gameState.cursors.left.isDown){
    gameState.player.setVelocityX(-160);
  }else if(gameState.cursors.right.isDown){
 gameState.player.setVelocityX(160);
           }else{
gameState.player.setVelocityX(0);
             
           }
}
```
#### 7. Adding Enemies
```
  // Add your code below:
  const bugs = this.physics.add.group();
  function bugGen(){
    const xCoord = Math.random() * 450;
    bugs.create(xCoord, 10, 'bug1');
  }
bugGen();
}
```
#### 8. Timed Events
```
  // Add your code below:
  const bugGenLoop = this.time.addEvent({
    delay: 150,
callback: bugGen,
callbackScope: this,
loop: true
  });
```
#### 9. Removing Enemies
```
  // Add your code below:
  this.physics.add.collider(bugs, platforms, function(bug){
    bug.destroy();
  });
```
#### 10. Adding a score
```
  this.physics.add.collider(bugs, platforms, function (bug) {
    bug.destroy();
	  // Add your code below:
    gameState.score += 10;
    gameState.scoreText.setText(`Score:${gameState.score}`);
  });
gameState.score = 0;    
}
```
#### 11. Losing Condition
```
  // Add your code below:
	this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(10, 10, 'Game Over', { fontSize: '15px', fill: '#000000' })
  });
```
#### 12. Resetting A Scene
```
		// Add your code below:
		this.input.on('pointerup', () => {
      gameState.score = 0;
      this.scene.restart();
    });
```
13. Review
Close and return to main application

```
function preload() {
  this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
  this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png')
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png')
}

const gameState = {
  score: 0
};

function create() {
  gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);
  
  const platforms = this.physics.add.staticGroup();

  platforms.create(225, 510, 'platform');

  gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' })

  gameState.player.setCollideWorldBounds(true);

  this.physics.add.collider(gameState.player, platforms);
  
	gameState.cursors = this.input.keyboard.createCursorKeys();

  const bugs = this.physics.add.group();

  function bugGen () {
    const xCoord = Math.random() * 450;
    bugs.create(xCoord, 10, 'bug1');
  }

  const bugGenLoop = this.time.addEvent({
    delay: 100,
    callback: bugGen,
    callbackScope: this,
    loop: true,
  });

  this.physics.add.collider(bugs, platforms, function (bug) {
    bug.destroy();
    gameState.score += 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`)
  });
  
  this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: '#000000' });
    this.add.text(152, 270, 'Click to Restart', { fontSize: '15px', fill: '#000000' });
    
		// Add your code below:
		this.input.on('pointerup', () => {
      gameState.score = 0;
      this.scene.restart();
    });
  });
}

function update() {
  if (gameState.cursors.left.isDown) {
  	gameState.player.setVelocityX(-160);
	} else if (gameState.cursors.right.isDown) {
 		gameState.player.setVelocityX(160);
	} else {
    gameState.player.setVelocityX(0);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: "b9eaff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
```

#### Learn Phaser: Multi-Scened Games
LESSON
Learn how to add multiple to an existing Phaser game and increase the complexity of the games you can create!

Exercises

1. Building a Multi-Scened Phaser Game

2. Using Classes in Phaser (ES6)

3. New Scenes

4. Scene Transitions

5. Separate Files

6. Review


#### Learn Phaser: Multi-Scened Games
LESSON
Learn how to add multiple to an existing Phaser game and increase the complexity of the games you can create!

Exercises

#### 1. Building a Multi-Scened Phaser Game
```
class Scene1 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene1' })
	}
  
  create() {
    this.add.text(110, 150, 'This is the first Scene!', {fill: '#000000', fontSize: '20px'})
      
		this.input.on('pointerdown', () => {  
			this.scene.stop('Scene1')
			this.scene.start('Scene2')
		})
  }
}
```
#### 2. Using Classes in Phaser (ES6)
```
// Add your code below:
class StartScene extends Phaser.Scene {
  constructor(){
    super({key:'StartScene'});
  }
  create(){
    this.add.text(20, 5, 'Start Game');
  }
}
/////////////////
class GameScene extends Phaser.Scene {
  constructor(){
    super({key: 'GameScene'});
  }
preload() {
/////////////
scene: [StartScene, GameScene]

```
#### 3. New Scenes
#### 4. Scene Transitions
```
    this.input.on('pointerup', () => {
      // Add your code below:
  this.scene.stop('StartScene');  this.scene.start('GameScene');  
    });
```
#### 5. Separate Files
```
<script src="StartScene.js"></script>  
<script src="GameScene.js"></script>  
  <script src="game.js"></script>
</body>
```
6. Review


#### Learn Phaser: Animations and Tweens
LESSON
Learn how to add animations and tweens to a Phaser game and bring the characters to life on screen!

Exercises

1. Introduction to Animations and Tweens in Phaser

2. Sprite Sheets

3. Creating the Animation

4. Animating

5. Flipping an Animation

6. Pausing Animations

7. Tweens

8. Tween Callbacks

9. Review

#### Learn Phaser: Animations and Tweens
LESSON
Learn how to add animations and tweens to a Phaser game and bring the characters to life on screen!

Exercises

#### 1. Introduction to Animations and Tweens in Phaser
```
```
#### 2. Sprite Sheets
```
this.load.spritesheet('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/codey_sprite.png', {frameWidth: 72, frameHeight: 90});
14
    
15
  }
16
​
17
​
18
  create() {
19
    // gameState.active is true if the game is playble (not game over)
20
    gameState.active = true;
21
​
22
    // Creates the background image
23
    this.add.image(0, 0, 'cave').setOrigin(0, 0);
24
​
25
    // Creates platforms group
26
    const platforms = this.physics.add.staticGroup();
27
    // An array of platform positions that is iterated over to create the platforms 
```
#### 3. Creating the Animation
```
    // Add your code below:
gameState.player = this.physics.add.sprite(255, 500, 'codey');
this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
  frameRate: 5,
  repeat: -1
});
```
#### 4. Animating
```
        // Add your code below:
			gameState.player.anims.play('run', true);	
```
#### 5. Flipping an Animation
```
        // Add your code for step 2 below:
		gameState.player.flipX = false;	
        
        // Add your code for step 1 below:
gameState.player.flipX = true;         
```
#### 6. Pausing Animations
```
 this.physics.add.overlap(gameState.player, gameState.enemy, () => {
      // Add your code below:
			//gameState.enemy.anims.pause();
    this.anims.pauseAll();  
      
    });
```
#### 7. Tweens
```
    // Add your code below for step 1:
    gameState.enemy.move = this.tweens.add({
targets: gameState.enemy,
x: 320,
ease: 'Linear',
duration: 1800,
repeat: -1,
yoyo: true,
    });



// Add your code below for step 2:
      gameState.enemy.move.stop();


```
#### 8. Tween Callbacks
onStart 
onYoyo 
onRepeat 
onComplete  
```
    gameState.enemy.move = this.tweens.add({
      targets: gameState.enemy,
      x: 320,
      ease: 'Linear',
      duration: 1800,
      repeat: -1,
      yoyo: true,
      // Add your code below:
      onRepeat: growSnowman,
      
    })
```
#### 9. Review


```python
  this.tweens.add({
 onRepeat: growSnowman,   
  });
```

```
const gameState = {};

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('cave', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/cave_background.png');
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/platform.png');
    this.load.spritesheet('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/codey_sprite.png', { frameWidth: 72, frameHeight: 90 });
    this.load.spritesheet('snowman', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/snowman.png', { frameWidth: 50, frameHeight: 70 });
    // Loads exit sprite sheet 
    this.load.spritesheet('exit', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/cave_exit.png', { frameWidth: 60, frameHeight: 70 });
  }

  create() {
    gameState.active = true;

    this.add.image(0, 0, 'cave').setOrigin(0, 0);

    const platforms = this.physics.add.staticGroup();
    const platPositions = [
      { x: 50, y: 575 }, { x: 250, y: 575 }, { x: 450, y: 575 }, { x: 400, y: 380 }, { x: 100, y: 200 },
    ];
    platPositions.forEach(plat => {
      platforms.create(plat.x, plat.y, 'platform')
    });

    gameState.player = this.physics.add.sprite(50, 500, 'codey').setScale(.8)

    this.physics.add.collider(gameState.player, platforms);
    gameState.player.setCollideWorldBounds(true);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('codey', { start: 4, end: 5 }),
      frameRate: 5,
      repeat: -1
    });

    gameState.enemy = this.physics.add.sprite(480, 300, 'snowman');

    platforms
    this.physics.add.collider(gameState.enemy, platforms);
    
    this.anims.create({
      key: 'snowmanAlert',
      frames: this.anims.generateFrameNumbers('snowman', { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1
    });
    
    gameState.enemy.anims.play('snowmanAlert', true);

    this.physics.add.overlap(gameState.player, gameState.enemy, () => {
      // Executes code to end to game when Codey and the snowman overlap
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      // Restarts the scene if a mouse click is detected
      this.input.on('pointerup', () => {
        this.scene.restart();
      })
    });

    gameState.exit = this.physics.add.sprite(50, 142, 'exit');
    this.anims.create({
      key: 'glow',
      frames: this.anims.generateFrameNumbers('exit', { start: 0, end: 5 }),
      frameRate: 4,
      repeat: -1
    });
    this.physics.add.collider(gameState.exit, platforms);
    gameState.exit.anims.play('glow', true);

    // Adds a win condition
    this.physics.add.overlap(gameState.player, gameState.exit, () => {
      this.add.text(150, 50, 'You reached the exit!\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      // Add your code below for step 2:
      gameState.enemy.move.stop();
      
      
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    })
    
    // Add your code below for step 1:
    gameState.enemy.move = this.tweens.add({
targets: gameState.enemy,
x: 320,
ease: 'Linear',
duration: 1800,
repeat: -1,
yoyo: true,
    });
    
  }

  update() {
    if (gameState.active) {
      if (gameState.cursors.right.isDown) {
        gameState.player.setVelocityX(350);
        gameState.player.anims.play('run', true);
        gameState.player.flipX = false;
      } else if (gameState.cursors.left.isDown) {
        gameState.player.setVelocityX(-350);
        gameState.player.anims.play('run', true);
        gameState.player.flipX = true;
      } else {
        gameState.player.setVelocityX(0);
        gameState.player.anims.play('idle', true);
      }
      // Codey jumps if they are touching the ground and either the space bar or up arrow key is pressed
      if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown)&& gameState.player.body.touching.down) {
        gameState.player.anims.play('jump', true);
        gameState.player.setVelocityY(-800);
      }
    }
  }
}


const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500 },
      enableBody: true,
    }
  },
  scene: [GameScene]
};

const game = new Phaser.Game(config);
```

#### Learn Phaser: Cameras and Effects
LESSON
Learn about using Phaser’s cameras and creating interesting visual effects in this lesson!

Exercises

1. Cameras

2. Platforms

3. Levels

4. Shaking the Camera

5. Fading Out

6. Parallax Scrolling

7. Determining The Scroll Factor

8. Changing the Weather

9. Changing the Lighting

10. Making It Snow

11. Review: Credits

#### Learn Phaser: Cameras and Effects
LESSON
Learn about using Phaser’s cameras and creating interesting visual effects in this lesson!

Exercises

#### 1. Cameras
```
this.cameras.main.setBounds(
0, 0, gameState.width, gameState.height);
this.physics.world.setBounds(0, 0, gameState.width, gameState.height);
this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
```
#### 2. Platforms
```
  levelSetup() {
    for (const [xIndex, yIndex] of this.heights.entries()) {
      // call createPlatform here with xIndex and yIndex
  this.createPlatform(xIndex, yIndex);
    } 
  }
```
#### 3. Levels
```
// Create a Level1 class that inherits from Level
class Level1 extends Level{
  constructor(){
    super('Level1');
  }
}
```
#### 4. Shaking the Camera
```
      if (gameState.player.y > gameState.height) {
        // Add camera shake and level restart here!
        this.cameras.main.shake(240, .01, false, function(camera, progress) {
          if (progress > .9) {
            this.scene.restart(this.levelKey)
          }
        })

      }
```
#### 5. Fading Out
```
    this.physics.add.overlap(gameState.player, gameState.goal, function(){}) {
      // Add in the collider that will fade out to the next level here
this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
if(progress > .9){
this.scene.start(this.nextLevel[this.levelKey]);
}  
})
    }, null, this)
  }
```
#### 6. Parallax Scrolling
```
  createParallaxBackgrounds() {
    // Add in the three background images here and set their origin
gameState.bg1 = this.add.image(0, 0, 'bg1');
gameState.bg2 = this.add.image(0, 0, 'bg2');
gameState.bg3 = this.add.image(0, 0, 'bg3');

gameState.bg1.setOrigin(0, 0);
gameState.bg2.setOrigin(0, 0);
gameState.bg3.setOrigin(0, 0);
  
  }```
#### 7. Determining The Scroll Factor
```
    // Set the scroll factor for bg1, bg2, and bg3 here!
gameState.bg1.setScrollFactor((bg1_width - window_width) / (game_width - window_width))
gameState.bg2.setScrollFactor((bg2_width - window_width) / (game_width - window_width))
```
#### 8. Changing the Weather
```
    // Create gameState.bgColor here!
gameState.bgColor = this.add.rectangle(0, 0, config.width, config.height);
gameState.bgColor.setOrigin(0,0);   


      //setWeather(weather) Update gameState.bgColor.fillColor here!
    gameState.bgColor.fillColor = bgColor; 
    
    // Add Level1 weather here
    this.weather = 'afternoon';
    
    
```
#### 9. Changing the Lighting
```
    // Add .setTint() for all the GameObjects here!
gameState.bg1.setTint(color);
gameState.bg2.setTint(color);
gameState.bg3.setTint(color);
gameState.player.setTint(color);
for(let k in gameState.platforms.getChildren()){
  k.setTint(color);
}
```
#### 10. Making It Snow
```
    // Add in the particle emitters here!
gameState.particles = this.add.particles('snowflake');
gameState.emitter = gameState.particles.createEmitter(
{
  x: {min: 0, max: config.width * 2 },
  y: -5,
  lifespan: 2000,
  speedX: { min:-5, max: -200 },
  speedY: { min: 200, max: 400 },
  scale: { start: 0.6, end: 0 },
  quantity: 10,
  blendMode: 'ADD'
});
gameState.emitter.setScrollFactor(0);
  }
```
#### 11. Review: Credits
```
Instructions
We’ve added in a Credits scene after the fourth level, featuring Codey sledding away to safety. Use your skills with effects to add in a background, and make sure to put your name in there, congratulations on an amazing game!
```

```
      // Check player height and add camera shake here!
      if(gameState.player.y > gameState.height){
        
this.cameras.main.shake(24,  .01, false, function( camera, progress) {
  if(progress > 0.9){
   this.scene.restart(this.levelKey); 
  }
} );         
         }```













08.03 - 16-  
09.03 - 33-50-66-   
15.03 - 83-  

_|_|_|_|_|_
--|--|--|--|--|--
from scratch|с нуля|plunge|погружение|layout|размещение
Figuring|выяснение|steady|твердую|Collisions|столкновения
challenging|вызывающий|belong|принадлежащий|cluttered|загроможденный
Transitions|переходы|achievement|достижение|transition|переход
refine|улучшают|smoother|плавный|convey|передача
grant|подарок|instead|вместо|Shaking |тряска
indispensible|незаменимый|jarring |неприятное||
Fading |Угасание|fitting |подходящим |cue |сигнал
offers|предлагает|concise|локоничный|staple|продукт
bonfire|костер|overlap|наложение|implements|реализует
enhance|усилить|Particle|частица|pool|лужа
snowflake|снежинка||||
|||||


[https://www.phaser.io/](https://www.phaser.io/)  
[Phaser documentation - Config](https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html)  
[codepen.io](https://codepen.io/ianmcgregor/pen/KrxJp)  
[]()  
[]()  

