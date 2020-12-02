var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score;

var survivalTime=0;

var score = 0;

function preload(){
  
monkey_running =loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", " sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
bananaImage = loadImage("banana.png");
  
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);

monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running)
monkey.scale=0.1
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX=-3
ground.x=ground.width/2
console.log(ground.x);

  
obstaclesGroup = createGroup();
bananasGroup = createGroup();  
  
}


function draw() {
 
background("white");
  
if(bananasGroup.isTouching(monkey)){

      bananasGroup.destroyEach();
      score=score+1
}  

if(obstaclesGroup.isTouching(monkey)){
  
    
      survivalTime=0;    
      score=0;
    
      obstaclesGroup.setLifetimeEach(-1);
      bananasGroup.setLifetimeEach(-1);
  
      obstaclesGroup.setVelocityXEach(0);
      bananasGroup.setVelocityXEach(0)
  
      
}   
  
  
monkey.collide(ground);
  
if (ground.x < 0) {

    ground.x = ground.width / 2;
    ground.x = ground.width / 2;
    ground.velocityX = -3;

    }

 if(keyDown("space")) {
   monkey.velocityY = -12;
        
 }
  
monkey.velocityY = monkey.velocityY + 0.8 
  
banana();
obstacle();
  



drawSprites();
  
stroke("black");
textSize(20);
fill("black");
text("SCORE:"+ score,152,55) 
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("SURVIVAL TIME:"+survivalTime,110,30);
    
}

function banana(){
  
if (frameCount % 80 === 0) {
    var banana = createSprite(400,200,10,10);
    //banana.y = Math.round(random(120,200));  
    banana.addImage(bananaImage);
    banana.scale =0.1;
    banana.velocityX = -6; 
      
    bananasGroup.add(banana);
  }
}

function obstacle(){
  
if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,318,10,10);  
    obstacle.addImage(obstacleImage);
    obstacle.scale =0.15;
    obstacle.velocityX = -6; 
      
    obstaclesGroup.add(obstacle);
  }
}


