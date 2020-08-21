var bullet;
var wall,thickness;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet = createSprite(50,200,60,10);
  wall = createSprite(1200,200,thickness,height/2)
  speed = random(200,300)
  weight = random(30,52)
  thickness = random(22,83)
  bullet.velocityX = speed;
  bullet.shapeColor = ("100,100,100")
  wall.shapeColor = (80,80,80)
}


function draw() {
  background(255,255,255); 
 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation = 0.5 * speed * weight * speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      bullet.shapeColor= color(230,230,0)
    }
    if (deformation<100){
      bullet.shapeColor = color(0,255,0)
      
    }
    
  }
  drawSprites();
}