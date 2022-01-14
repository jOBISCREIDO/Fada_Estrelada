var starImg,bgImg;
var star, starBody;
var fada, fadaBody, fadaimg, vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaimg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");

}

function setup() {
    var canvas = createCanvas(800, 750);
    engine = Engine.create();
    world = engine.world;

    var background = createSprite(800, 750, 800, 750);
    background.addImage(bgImg);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    var circle_opitions = {

        restitution:0.5, 
        

        }

    var rect_opitions = {

        isStatic: true

    }

    fada = createSprite(120, 530);
    fada.addAnimation('fada_animação', fadaimg);
    fada.scale = 0.3;

    fadaBody = Bodies.rectangle(120, 530, 200, 200, rect_opitions);
    World.add(world, fadaBody);

	starBody = Bodies.circle(650 , 30 , 5, circle_opitions);
	World.add(world, starBody);
    

}

function draw() {
    background(0);

    Engine.update(engine);

    /*
    var collision = Matter.SAT.collides(fadaBody, starBody);

    if(star.y > 470 && starBody.position.y > 470 && collision.collided === true){

        Matter.Body.setStatic(starBody, true);

    }
    */

    if(star.y > 470 && starBody.position.y > 470 && fadaBody.position.x > 120){

        Matter.Body.setStatic(starBody, true);

    }

    if(keyDown('right')) {

        fada.x = fada.x+10;

    }

    if(keyDown('left')) {

        fada.x = fada.x-10;

    }

    rect(fadaBody.position.x-150, fadaBody.position.y-30, 300, 300);
    fadaBody.position.x = fada.x;
    fadaBody.position.y = fada.y;

    ellipse(starBody.position.x, starBody.position.y, 50, 50);
    star.x = starBody.position.x;
    star.y = starBody.position.y;
	
    drawSprites();
}
