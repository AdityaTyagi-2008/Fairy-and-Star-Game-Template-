var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var sound, star, starImg;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png" , "images/fairyImage2.png");
	starImg = loadImage("images/starImage.png");
	sound = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	//playSound("sound/JoyMusic.mp3");

	//create fairy sprite and add animation for fairy
	fairy = createSprite(350,540);
	fairy.addAnimation("images/fairyImage1.png" , "images/fairyImage2.png");
    fairy.scale = 0.32;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.05;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  drawSprites();

  star.x = starBody.position.x 
  star.y = starBody.position.y 

  console.log(star.y);
  console.log(fairy.x);

  //write code to stop star in the hand of fairy

  if(keyDown("DOWN_ARROW")){
	Matter.Body.setStatic(starBody,false);
}

  if(star.y > 483){
	Matter.Body.setStatic(starBody,true);
  }

	if (keyDown("RIGHT_ARROW")){
		//fairy.velocityX = 3;
		fairy.x = fairy.x + 5;
	}

	if (keyDown("LEFT_ARROW")){
		//fairy.velocityX = 3;
		fairy.x = fairy.x - 5;
		}

	

  textSize(20);
  text("Press 'Left' arrow key to move left and vice versa for 'right' arrow key",50,680);
  textSize(19);
  text("Press 'Down' arrow key to cath the star when you think that you(fairy) can catch the star",10,720);
}

//function keyPressed() {

	//write code to move fairy left and right

	//if(keyCode = "space" && star.y > 470){
		//Matter.Body.setStatic(starBody,true);
	//}

	//if (keyCode === RIGHT_ARROW){
		//fairy.velocityX = 3;
		//fairy.x = fairy.x + 5;
	//}

