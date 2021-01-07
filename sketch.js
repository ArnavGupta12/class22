const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

var engine, world, ground, ball

function setup() {
  createCanvas(400,400);
engine = Engine.create()
world = engine.world

var option = {isStatic:true}
ground = Bodies.rectangle(200,390,200,20, option)
World.add(world, ground)

var ballOptions = {restitution:1}
ball = Bodies.circle(200, 100,20, ballOptions)
World.add(world, ball)
}

function draw() {
  background(0);
  Engine.update (engine)  
  fill ("brown")
  rectMode (CENTER)
  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode (RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}