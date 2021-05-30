const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,i

//Declare launcherObject and launchForce variable here
var launcherObject
var launchForce =100

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  strokeWeight(4)
	stoneObj=new stone(235,420,40); 
  i = 0
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here
  launcherObject = new Launcher(stoneObj.body,{x:235,y:420})

	Engine.run(engine);
}

function draw() {

  background("black");
  textSize(25);
  fill("white")
  stroke("lime")
  text("Press Space to Recall Your Trusty Stone",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  // display launcher object here
  launcherObject.display()


  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  detectcollision(stoneObj,mango9);
  detectcollision(stoneObj,mango10);
  detectcollision(stoneObj,mango11);
  detectcollision(stoneObj,mango12);
  keyPressed()
}

//create mouseDragged function here
function mouseDragged(){
  if (i === 0){
    if (mouseX < 485 && mouseY < 670 && mouseY > 170){
      Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
      console.log(mouseX,mouseY)
    }
  }
}
//create mouseReleased function here
function mouseReleased(){
  i = 1
  if (i === 1){
    launcherObject.fly()
    console.log("chicken")
  }
}

//create keyPressed function here
function keyPressed(){
  if (keyWentDown("space")){
    stoneObj=new stone(235,420,40); 
    launcherObject.attach()
    i = 0
  }
}

  function detectcollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }