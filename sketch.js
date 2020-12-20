const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, object, stand1, stand2, polygon, slingShot, backgroundImg;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var block12, block13, block14, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;
var score = 0;

function preload() {
    getbg();
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(100,100,40);
    slingShot = new SlingShot(polygon.body, {x: 100,y: 100});
    ground = new Ground(400,375,800,50);
    stand1 = new Ground(350,300,250,10);
    stand2 = new Ground(600,180,200,10);
    block1 = new BoxPurple(260,299,30,40);
    block2 = new BoxPurple(290,299,30,40);
    block3 = new BoxPurple(320,299,30,40);
    block4 = new BoxPurple(350,299,30,40);
    block5 = new BoxPurple(380,299,30,40);
    block6 = new BoxPurple(410,299,30,40);
    block7 = new BoxPurple(440,299,30,40);
    block8 = new BoxPink(290,219,30,40);
    block9 = new BoxPink(320,219,30,40);
    block10 = new BoxPink(350,219,30,40);
    block11 = new BoxPink(380,219,30,40);
    block12 = new BoxPink(410,219,30,40);
    block13 = new BoxGreen(320,159,30,40);
    block14 = new BoxGreen(350,159,30,40);
    block15 = new BoxGreen(380,159,30,40);
    block16 = new BoxBlue(350,129,30,40);
    block17 = new BoxPurple(540,179,30,40);
    block18 = new BoxPurple(570,179,30,40);
    block19 = new BoxPurple(600,179,30,40);
    block20 = new BoxPurple(630,179,30,40);
    block21 = new BoxPurple(660,179,30,40);
    block22 = new BoxPink(570,99,30,40);
    block23 = new BoxPink(600,99,30,40);
    block24 = new BoxPink(630,99,30,40);
    block25 = new BoxBlue(600,59,30,40);
}

function draw(){
    Engine.update(engine);
    if(backgroundImg){
        background(backgroundImg);
    }

    if(polygon.body.position.y>335) {
        slingShot.attach(polygon.body);
        Matter.Body.setPosition(polygon.body, {x: 100, y: 100})
    }

    slingShot.display();
    ground.display();
    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    stand1.display();
    stand2.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    fill("white");
    textFont("Georgia");
    textSize(20)
    text("Press space to get another chance.", 50, 380);
    text("Destroy the blue boxes to get the most points!", 370, 380);
    text("Drag the polygon and release it to launch it towards the blocks.", 10, 30);
    text("Score: "+score, 700,30);
}

async function getbg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour >= 6 && hour <= 20) {
        bg=color(random(0,255), random(0,255), 0);
    }
    else{
        bg=color(random(0,255), random(0,255), 150);
    }
    backgroundImg = bg;
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingShot.attach(polygon.body);
        Matter.Body.setPosition(polygon.body, {x: 100, y: 100})
    }
}