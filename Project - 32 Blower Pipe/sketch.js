const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var blower , myEngine , myWorld ;
function setup() {
  createCanvas(800,400);
   
  myEngine = Engine.create();
  myWorld = myEngine.world;

  blower = new Blower(400,130,150,20);
  blowerMouth = new BlowerMouth(500,150,100,60);
  ball = new Ball(500,250,50,50);


  button = createButton("Click to Blow");
  button.position(width/ 2 , height - 100);
  button.class("blowButton");
  button.mousePressed(blow);




}

function draw() {
  background(255,255,255);  
 
  blower.display();
  
  blowerMouth.display();
  ball.display();

}

function blow(){
  console.log("Blower");
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0,y:0.05});

}