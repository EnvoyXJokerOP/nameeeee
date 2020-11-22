const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var guy,guyimg
var ground
var bgImag

function preload(){
 guyimg = loadImage("10.png")
 bgImg= loadImage("bg.jpg")
}


function setup(){
   createCanvas(500,windowHeight)
   engine = Engine.create();
    world = engine.world;

   guy = Bodies.rectangle(260,470,235,390,{'isStatic': true})
   World.add(world,guy);
   ground = new Ground(600,650,1200,2);
   
}


function draw(){
    Engine.update(engine);
    background(bgImg)
    imageMode(CENTER)
    image(guyimg,guy.position.x,guy.position.y, 235,390)
    raindrop=new Raindrops(random(2,500),3,10,10);
    ground.display()
   raindrop.display()
    
}   

