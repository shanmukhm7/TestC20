
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var ops={
    isStatic:true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(world,wall);
  
  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(wedge,angle)
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  rect(wall.position.x,wall.position.y,70,20);

  
  
}
// First step is to make the namespacing(if required)
// 2nd step is to define all the variables and the engine and world using let engine and let world
// 3rd step is to set the restitution, friction, and if it is static or not in options (setup function)
// 4th step is to create the balls, walls, ground etc using the options given and parameters (setup function)
// 5th step is to add them all to world
// DO NOT FORGET TO PUT ENGINE.UPDATE(ENGINE);
// give necessary features such as translate and rotate
// use rect method to display the opject and after it displays use pop() to remove the object so that you can push the next object to the rect method and display the second pop().
//first we’ll use the push() to capture the new settings then use the special setting and finally use pop() to revert to the old settings.