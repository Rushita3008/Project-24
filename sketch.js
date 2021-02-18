
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane, stone, rubber, hammer;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600, height, 1200, 20)
	stone = new Stone(700, 320, 100, 100)
	rubber = new Rubber(900, 450, 70)
	hammer = new Hammer(10, 100, 150, 40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  plane.display();
  stone.display();
  rubber.display();
  hammer.display();
  
  drawSprites();
 
}



