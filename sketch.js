// creating the variables
  var monkeyImg, stoneImg, bananaImg, layoutImg;
  var banana, layout, box, monkey, ground, bananaPumper;

// loading the images
 function preload(){
    monkeyImg = loadImage("Monkey_01.png");
    stoneImg = loadImage("stone.png");
    bananaImg = loadImage("banana.png");
    layoutImg = loadImage("jungle.jpg");
 }

function setup() {

  // creating the canvas
  createCanvas(1500,600);

  // creating the sprites.
  banana = createSprite(1510,random(200,500),10,10);
  banana.addImage(bananaImg);
  banana.scale = 0.1;
  banana.velocityX = -13;
  
  layout = createSprite(750,300,1500,600);
  layout.addImage(layoutImg);
  layout.velocityX = 9;
  layout.scale = 1.6;

  box = createSprite(730,90,350,40);
  box.shapeColor = "black";

  monkey = createSprite(100, 150, 50, 50);
  monkey.addImage(monkeyImg);
  monkey.scale = 0.25;
 
  ground = createSprite(750, 550, 1500, 15);
  ground.shapeColor = "blue";
  
  bananaPumper = createSprite(1500,275,80,400);
  bananaPumper.shapeColor = "darkgreen ";

  // assigning the score variable.
  score = 0;
  

}

function draw() {

  // drawing the sprites
  drawSprites();

  // making the background to run 
  if(layout.x > 750){
    layout.x = 750;
  }

  // making the monkey to collide with the ground
  monkey.collide(ground);

  // making the mokey to jump when up arrow key is pressed;
  if(keyDown(UP_ARROW)){
    monkey.velocityY = -20;
    }

  // adding the gravity
  monkey.velocityY = monkey.velocityY + 1;

  // spawning the banana.
  if(frameCount % 50 === 0){
    var rand = 1
    if(rand === 1){
      var banana = createSprite(1510,random(100,505),10,10);
      banana.addImage(bananaImg);
      banana.scale = 0.1;
      banana.velocityX = -(35 + 3*score/100);
      banana.lifetime = 40;
  }

  // increasing the score with the size of monkey to increase.
  if(banana.x - monkey.x < banana.width + monkey.width){
    score = score + 1;
    monkey.scale = monkey.scale + 0.001;
  }
}

// displaying the score board.
fill("Yellow");
textSize(30);
text(" Bananas collected = " + score, 560,100);

}