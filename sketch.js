
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;


function setup() {
	createCanvas(800,400);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,300,30);
dustbin=new Dustbin(540,390,70,10);
ground=new Ground(width/2,400,width,10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  
  paper.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    x:12; 
    y:-13;
  }
}


