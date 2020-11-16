var BugattiChiron,wall;
var speed,weight;
var whiteColor1,whiteColor2;

function setup() {
  createCanvas(1000,400);
  speed  = random(55,90);
  weight = random(400,1500);

  wall   = createSprite(994,200,10,400);
  wall.shapeColor = "black"

  whiteColor1 = createSprite(994.5,100,10,5);
  whiteColor1.shapeColor = "white"

  whiteColor2 = createSprite(994.5,205,10,5);
  whiteColor2.shapeColor = "white"

  BugattiChiron = createSprite(10,200,20,10);
  BugattiChiron.velocityX = speed;
}

function draw() {
  background(225);  
  drawSprites();

  if(wall.x-BugattiChiron.x < (BugattiChiron.width+wall.width)/2){
    BugattiChiron.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if (deformation>180){
      BugattiChiron.shapeColor = color(0,255,255);
    }

   if(deformation<180 && deformation>180){
    BugattiChiron.shapeColor = color(128,128,0);
   }

   if (deformation<180){
    BugattiChiron.shapeColor = color(255,0,255);
    }
  }
}
