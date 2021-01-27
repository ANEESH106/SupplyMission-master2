var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageSprite,packageSprite,package25prite,packageIMG,packageIMG;
var packageBody,packageBody1,packageBody2,ground;
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	package1IMG=loadImage("package1.png")
	package2IMG=loadImage("package2.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	package1Sprite=createSprite(480, 80, 10,10);
	package1Sprite.addImage(package1IMG);
	package1Sprite.scale=0.2

	package2Sprite=createSprite(330, 80, 10,10);
	package2Sprite.addImage(package2IMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1=createSprite(width/2, hight-50,200,10);
	line1.shapeColor=color("red");
    line2=createSprite(510,610,20,100);
	line2.shapeColor=color("red");
	line3=createSprite(310,610,20,100);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



