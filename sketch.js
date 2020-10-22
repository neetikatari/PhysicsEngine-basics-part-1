//namespace
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine, world;
var object,ground,ball; 
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    //create the engine and link it to the world
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    //has isStatic - makes body stable
    ground  = Bodies.rectangle(200,370,400,20,{isStatic : true});
    World. add (world , ground  )

}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display ()
    box2.display()

    //linked with ground
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y, 400, 20)

}


