
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, boy, stone, ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13;
var rand;
var rope;
var backImage;
function preload(){
 backImage = loadImage("park.jpg");
}

function setup() {
	createCanvas(1900, 900);


	engine = Engine.create();
	world = engine.world;

	

	rand = random(25, 45);
	
	tree = new Tree(1300,460,10,10);
	ground = new Ground(950,820,1900,10);
	stone = new Stone(170,620,30);
	boy = new Boy(300,740,20,20);
	
	mango1 = new Mango(1400, 100, rand);
	mango2 = new Mango(1200, 140, rand);
	mango3 = new Mango(1000, 300, rand);
	mango4 = new Mango(1040, 410, rand);
	mango5 = new Mango(1210, 380, rand);
	mango6 = new Mango(1130, 320, rand);
	mango7 = new Mango(1570, 230, rand);
	mango8 = new Mango(1500, 300, rand);
	mango9 = new Mango(1350, 220, rand);
	mango10 = new Mango(1650, 380, rand);
	mango11 = new Mango(1420, 390, rand);
	mango12 = new Mango(1295, 370, rand);
	mango13 = new Mango(1240, 245, rand);

	rope = new Chain(stone.body, {x:193,y:628});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);
  textSize(36);
  textFont('Georgia');
  fill(0);
  text("Press space to hit additional chances!", 50, 70);
  textSize(12);
  textFont('Helvectica');
  textAlign(CENTER);
  fill(0);
  text("drag and release the stone to pluck the mangoes", 160, 750, 100, 100);
  
  tree.display();
  boy.display();
  rope.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    rope.fly()
}

function detectCollision(lstone, lmango){
	mangoBodyPos = lmango.body.position;
	stoneBodyPos = lstone.body.position;

	var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y);
	if(distance<=lmango.r+lstone.r){
		Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:170,y:620});
		rope.attach(stone.body);
	}
}
