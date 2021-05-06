
var dog,Dog,happyDog;
var database;
var foodS,foodStock;

function preload(){
   Dog=loadImage("dog.png");
   happyDog=loadImage("dogOne.png");
  }

//Function to set initial environment
function setup() {
  database = firebase.database();
  createCanvas(500,500);

  dog=createSprite(255,390,100,100);
  dog.addImage(Dog);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,180,280);
  textSize(18);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",100,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
} 





