var ball,ballImg,bgImg,obs1,obsImg,obs2,obs3,obs4,obs5,obs6,obs7;

function preload() {
  ballImg = loadImage("ball.png");
  bgImg = loadImage("bg1.png");
  obsImg = loadImage("obs.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
 ball= createSprite(450,600, 50, 50);
 ball.addImage(ballImg);
 ball.scale=1.5;

}

function draw(){ 
  background(bgImg); 
if(keyDown(LEFT_ARROW))
{
   changePosition(-3,0);
 } 
else if(keyDown(RIGHT_ARROW))
{ 
  changePosition(3,0); 
} 
//else if(keyDown(UP_ARROW)){
  // changePosition(0,-3);
   //}
 //else if(keyDown(DOWN_ARROW)){ 
  //changePosition(0,+3);
 //}

if (frameCount%1300===0){
  obs1= createSprite(150,0,50,50);
  obs1.velocityY=3;
obs1.addImage(obsImg);
obs1.scale=0.3;
obs1.lifetime = 270;
}
if (frameCount%140===0){
  obs2= createSprite(750,0,50,50);
  obs2.velocityY=3;
obs2.addImage(obsImg);
obs2.scale=0.3;
obs2.lifetime = 270;
}
if (frameCount%99===0){
  obs3= createSprite(1200,0,50,50);
  obs3.velocityY=3;
obs3.addImage(obsImg);
obs3.scale=0.3;
obs3.lifetime = 270;
}
if (frameCount%140===0){
  obs4= createSprite(1050,0,50,50);
  obs4.velocityY=3;
obs4.addImage(obsImg);
obs4.scale=0.3;
obs4.lifetime = 270;
}
if (frameCount%190===0){
  obs5= createSprite(350,0,50,50);
  obs5.velocityY=3;
obs5.addImage(obsImg);
obs5.scale=0.3;
obs5.lifetime = 270;
}
if (frameCount%220===0){
  obs6= createSprite(550,0,50,50);
  obs6.velocityY=3;
obs6.addImage(obsImg);
obs6.scale=0.3;
obs6.lifetime = 270;
}
if (frameCount%199===0){
  obs7= createSprite(70,0,50,50);
  obs7.velocityY=3;
obs7.addImage(obsImg);
obs7.scale=0.3;
obs7.lifetime = 270;
}

 drawSprites(); 
} 
function changePosition(x,y){
   ball.x = ball.x + x; 
  ball.y = ball.y + y;
}
