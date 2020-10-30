var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;



function setup() {
  createCanvas(1600,1600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);
  rectOnef = createSprite(600,200,50,50);
  rectTwom = createSprite(600,100,80,30);
  rectOnef.shapeColor = "pink";
  rectTwom.shapeColor = "blue";
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  rectTwom.velocityY = 2;
  rectOnef.velocityY = -2;
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){

    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";

  }else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(rectOnef.x-rectTwom.x<rectOnef.width/2+rectTwom.width/2 
    && rectTwom.x-rectOnef.x<rectTwom.width/2+rectOnef.width/2){

      rectTwom.velocityX = rectTwom.velocityX * (-1);
      rectOnef.velocityX = rectOnef.velocityX * (-1);
    }

    if(rectOnef.y-rectTwom.y<rectOnef.height/2+rectTwom.height/2 &&
      rectTwom.y-rectOnef.y<rectTwom.height/2+rectOnef.height/2){

        rectTwom.velocityY = rectTwom.velocityY * (-1);
        rectOnef.velocityY = rectOnef.velocityY * (-1);
      }

  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2 
    && object2.y-object1.y<object2.height/2+object1.height/2)
  {
    return true;
  }else {
    return false 
  }
}

function