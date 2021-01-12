var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1img,car2img,car3img,car4img;

var goldimg,silverimg,bronzeimg;

var trackimg;

var finishedPlayers = 0;

var passedFinish;

function preload(){
  car1img = loadImage("../images/car1.png");
  car2img = loadImage("../images/car2.png");
  car3img = loadImage("../images/car3.png");
  car4img = loadImage("../images/car4.png");

  trackimg = loadImage("../images/track.jpg");

  goldimg = loadImage("../images/gold.png");
  silverimg = loadImage("../images/silver.png");
  bronzeimg = loadImage("../images/bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255,200,255)
  if(playerCount === 4 && finishedPlayers === 0 ){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(finishedPlayers === 4){
    game.update(2);
  }

  if(gameState === 2 && finishedPlayers === 4){
    game.end();
  }
}

