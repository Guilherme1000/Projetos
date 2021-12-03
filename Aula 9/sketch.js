var box ;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 20 , 20);

}

function draw() 
{
  background("red");

  if(keyDown("UP_ARROW")) {
    box.velocityX = 0;
    box.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")) {
    box.velocityX = 0;
    box.velocityY = 2;
  }
  if (keyDown("LEFT_ARROW")) {
    box.velocityX = -2;
    box.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    box.velocityX = 2;
    box.velocityY = 0;
  }
  
  drawSprites();
}




