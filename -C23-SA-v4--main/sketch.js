


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let engine;
let world;

var ball;
var plane;
var block1,block2;
var rotator1,rotator2,rotator3;
var angle1=60;
var angle2=60;
var angle3=60;
var particle1,particle2,particle3,particle4,particle5;

function setup() {
  var canvas = createCanvas(550,600); 
  engine = Engine.create();
  world = engine.world;
  

  
   var particle_options = {
    restitution:1,
    friction:0.02
  }
   
  var plane_options ={
    isStatic: true
  }
  particle1 = Bodies.circle(220,10,10,particle_options);
  World.add(world,particle1);
  particle2 = Bodies.circle(220,10,10,particle_options);
  World.add(world,particle2);
  particle3 = Bodies.circle(225,10,10,particle_options);
  World.add(world,particle3);
  particle4 = Bodies.circle(230,10,10,particle_options);
  World.add(world,particle4);
  particle5 = Bodies.circle(230,10,10,particle_options);
  World.add(world,particle5);

  plane = Bodies.rectangle(600,height,1200,20,plane_options);
  World.add(world,plane);
  block1 = Bodies.rectangle(100, 400, 150, 20,plane_options);
  World.add(world,block1);
  block2 = Bodies.rectangle(400, 400, 150, 20,plane_options);
  World.add(world,block2);
  rotator1 = Bodies.rectangle(250,200,150,20,plane_options);
  World.add(world,rotator1);
  rotator2 = Bodies.rectangle(250,200,150,20,plane_options);
  World.add(world,rotator2);
  rotator3 = Bodies.rectangle(250,200,150,20,plane_options);
  World.add(world,rotator3);
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("lightgreen");
  Engine.update(engine);
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.1;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.15;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.2;
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle3.position.y,10);
  rect (100, 400, 150, 20);
  rect (400, 400, 150, 20);
}

