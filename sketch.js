const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var blowerPipe,blower,ball,button;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton")
  button.mousePressed(blow)
  
  blower = new Blower(width/2-50,height/2+50,150,20)
  blowerPipe = new BlowerPipe(width/2+70,height/2+20,100,90) 
  ball = new Ball(width/2+80,height/2-80,80)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  blower.display();
  blowerPipe.display();
  ball.display();
}

function blow(){
  Matter.Body.applyForce(ball.body, { x:0, y:0 },{ x:0, y: 0.05 });
}