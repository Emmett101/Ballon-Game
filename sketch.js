

var bow , arrow, green_balloon, red_balloon ,pink_balloon, blue_balloon,background,count=0,arrowG,redG,blueG,greenG,pinkG;

var bowImage, arrowImage, green_balloonImage, red_balloonImage,pink_balloonImage,blue_balloonImage,orange_balloonImage,yellow_balloonImage,backgroundImage;


function preload(){
  
  backgroundImage = loadImage("merry christmas.jpg");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("candy canes.png");
  green_balloonImage = loadImage("candy1.png");
  pink_balloonImage = loadImage("candy2.png");
  blue_balloonImage = loadImage("candy3.png");
  arrowG= new Group()
  redG= new Group()  
  blueG= new Group()
  greenG= new Group()
  pinkG= new Group()
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,300);
  background.addImage(backgroundImage);
  background.scale = 0.7
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1; 
  var r=Math.round(random(1,4));
  if(frameCount%80===0){
  if(r===1) {
  redBalloon()  
  }
 else if(r===2) {
  blueBalloon() 
  }
  else if(r===3){
   greenBalloon() 
  } 
  else if(r===4) {
  pinkBalloon()  
  } 
 
  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop

  }
  
}
function Arrow(){
 
  arrow=createSprite(360,100,5,10)
  arrow.velocityX=-6;
  arrow.scale=0.5 ;
  return arrow;
  arrowG.add(arrow)
}


function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/3;
   }
  
  if(keyDown("space")){
    var Jerrell=Arrow()
    Jerrell.addImage(arrowImage)
    Jerrell.y= bow.y
    
  }

  //moving bow
  bow.y = World.mouseY
  
  var r=Math.round(random(1,4))
  if(frameCount%80===0){
  if(r===1) {
  redBalloon()  
  }
 else if(r===2) {
  blueBalloon() 
  }
  else if(r===3){
   greenBalloon() 
  } 
  else if(r===4) {
  pinkBalloon()  
  } 
  }
  if(arrowG.isTouching(redG)){
   redG.destroyEach() 
   arrowG.destroyEach()
    count=count+1
    
    
  }
  if(arrowG.isTouching(pinkG)){
   pinkG.destroyEach() 
   arrowG.destroyEach()
    count=count+1
    
    
  }
  if(arrowG.isTouching(greenG)){
   greenG.destroyEach() 
   arrowG.destroyEach()
    count=count+1
    
    
  }
  if(arrowG.isTouching(blueG)){
   blueG.destroyEach() 
   arrowG.destroyEach()
    count=count+1
    
  }
  drawSprites();
  textSize(30)
  fill("white")
  text("Score: "+count,50,50)
}
function redBalloon(){
 red_balloon = createSprite(0,Math.round(random(20,370)),10, 10);
  red_balloon.velocityX=3
 red_balloon.addImage(red_balloonImage)
 red_balloon.scale = 0.1
  red_balloon.lifetime=120
  redG.add(red_balloon)
  
}
function blueBalloon(){
 blue_balloon = createSprite(0,Math.round(random(20,370)),10, 10);
  blue_balloon.velocityX=3
 blue_balloon.addImage(blue_balloonImage)
 blue_balloon.scale = 0.1 
 blue_balloon.lifetime=120
  blueG.add(blue_balloon)
  
}
function greenBalloon(){
 green_balloon = createSprite(0,Math.round(random(20,370)),10, 10);
  green_balloon.velocityX=3
 green_balloon.addImage(green_balloonImage)
 green_balloon.scale = 0.1
  green_balloon.lifetime=120 
  greenG.add(green_balloon)
}
function pinkBalloon(){
 pink_balloon = createSprite(0,Math.round(random(20,370)),10, 10);
  pink_balloon.velocityX=3
 pink_balloon.addImage(pink_balloonImage)
 pink_balloon.scale = 0.3      
 pink_balloon.lifetime=120
 pinkG.add(pink_balloon)
}