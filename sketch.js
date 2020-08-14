
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new dround(400,100,1200,20);
	ground2 = new dround(440,100,1200,20);
	ground3 = new dround(480,100,1200,20);
	ground4 = new dround(520,100,1200,20);
	ground5 = new dround(560,100,1200,20);


	balll=new  Box(400,400,20,20);
	ball2=new  Box(440,400,20,20);
	ball3=new  Box(480,400,20,20);
	ball4=new  Box(520,400,20,20);
	ball5=new  Box(560,400,20,20);
	
	
	
	Engine.run(engine);
	chain = new Chain(balll.body,ground.body);
	chain2  = new Chain(ball2.body,ground2.body);
	chain3  = new Chain(ball3.body,ground3.body);
	chain4  = new Chain(ball4.body,ground4.body);
	chain5  = new Chain(ball5.body,ground5.body);
	
 
}


function draw() {
  rectMode(CENTER);
  background(255.255,255);
  balll.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  ground.display();

  chain.display(); 
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 

  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(balll.body, {x: 200 , y: 100});
}




function mouseReleased(){
	Matter.Body.setPosition(balll.body, {x: 400 , y: 400});
}
function mouseReleased(){
	Matter.Body.setPosition(ball2.body, {x: 440 , y: 400});
}
function mouseReleased(){
	Matter.Body.setPosition(ball3.body, {x: 480 , y: 400});
}
function mouseReleased(){
	Matter.Body.setPosition(ball4.body, {x: 520 , y: 400});
}
function mouseReleased(){
	Matter.Body.setPosition(ball5.body, {x: 560 , y: 400});
}

