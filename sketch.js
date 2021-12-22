var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, orangeLeaf, redImg, apple, orangeImg, red;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createapple(){
  apple = createSprite(random(40,360),64,30,30);
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetime = 140;
  apple.scale = 0.1;
}

function createorangeLeaf(){
  orangeLeaf = createSprite(random(40,360),64,30,30);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.velocityY = 1;
  orangeLeaf.lifetime = 185;
  orangeLeaf.scale = 0.1;
}

function createred(){
  red = createSprite(random(40,360),64,30,30);
  red.addImage(redImg);
  red.velocityY = 2;
  red.lifetime = 140;
  red.scale = 0.1;
}



function draw() {
  background(0);

createapple();
createred();
createorangeLeaf();

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
