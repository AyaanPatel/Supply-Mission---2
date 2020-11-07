var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, platform1, plat1Sprite, platform2, plat2Sprite ,platform3, plat3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	plat1Sprite=createSprite(width/2, height-55,200,20);
	plat1Sprite.shapeColor = color("red");

	plat2Sprite=createSprite(width/2+100, height-95,20,100);
	plat2Sprite.shapeColor = color("red");

	plat3Sprite=createSprite(width/2-100, height-95,20,100);
	plat3Sprite.shapeColor = color("red");
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 platform1 = Bodies.rectangle(width/2, 200, 200, 20, {isStatic:true} );
	 World.add(world, platform1);

	 platform2 = Bodies.rectangle(width/2+100, 200, 20, 100, {isStatic:true} );
	 World.add(world, platform2);

	 platform3 = Bodies.rectangle(width/2-100, 200, 20, 100, {isStatic:true} );
	 World.add(world, platform3);

	

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
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



