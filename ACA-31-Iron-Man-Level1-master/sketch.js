var ironMan;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironMan_Image = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1340, 615);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 1.2;
  ironMan = createSprite(30,500,20,20);
  ironMan.addImage(ironMan_Image);
  ironMan.scale = 0.3;
  ground = createSprite(1,580,400,10);
  jump_limit = createSprite(1,300,400,10)
  ground.visible = false;
  jump_limit.visible = false;
}

function draw() {
  if(keyDown("up")){
    ironMan.velocityY = -10
  }
  if(keyDown("left")){
    ironMan.x = ironMan.x - 5
  }
  if(keyDown("right")){
    ironMan.x = ironMan.x + 5
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;
  ironMan.collide(ground);
  ironMan.collide(jump_limit);
    drawSprites();
   
}

