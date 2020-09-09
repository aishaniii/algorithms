var fixedRect;
var movingRect;

var a;
var b;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="blue";
  movingRect= createSprite(500,200,80,30);
  movingRect.shapeColor="blue";

  a = createSprite(100,300,50,50);
  a.velocityX = 5;
  b = createSprite(300,300,50,50);
  b.velocityX = -5;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.width/2+movingRect.width/2>movingRect.x-fixedRect.x && 
    fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x &&
    fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y &&
    fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="blue";
   movingRect.shapeColor="blue";
  }

  if(a.width/2 + b.width/2 > a.x - b.x &&
    a.width/2 + b.width/2 > b.x - a.x) {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
    }

  if(a.height/2 + b.height/2 > a.y - b.y &&
    a.height/2 + b.height/2 > b.y - a.y) {
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
    }

  drawSprites();
}