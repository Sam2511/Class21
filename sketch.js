var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(300, 400, 50, 50);
  gameObject2 = createSprite(500, 400, 50, 50);
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(checkCollision(movingRect, gameObject1)){
    movingRect.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  bounce(gameObject1,gameObject2);

  drawSprites();
}

function checkCollision(watch, globe){
    //distance between the objects < 
  if (watch.x - globe.x < globe.width/2 + watch.width/2
      && globe.x - watch.x < globe.width/2 + watch.width/2
      && watch.y - globe.y < globe.height/2 + watch.height/2
      && globe.y - watch.y < globe.height/2 + watch.height/2) {
        //Yes, they are touching - TRUE
        return true;
  }
  else {
        //No, they aren't touching - FALSE
        return false;
  }
}

function bounce(glue, paper){
  if(glue.x - paper.x < paper.width/2 + glue.width/2
    && paper.x - glue.x < paper.width/2 + glue.width/2){
      glue.velocityX *=(-1); 
      paper.velocityX *=(-1); 
  }
  if(glue.y - paper.y < paper.height/2 + glue.height/2
    && paper.y - glue.y < paper.height/2 + glue.height/2){
      glue.velocityY*=(-1);
      paper.velocityY *=(-1); 
  }
}












/*
return --> gives back a value from a function to its calling function

ARGUMENTS
  - Real values given to a function to use
  - They take up memory in the storage

PARAMETERS (while creating functions)
  - Not real values
  - No storage taken
  - PLACEHOLDERS for arguments


*/









