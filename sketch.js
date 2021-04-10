var gamestate = 0;


function preload(){
    footImage = loadImage('Footpick.png');
    shoeImage = loadImage('Shoemage.jpeg');
    boomerangImage = loadImage('Boomerang.webp')
    scientistImage = loadImage('Clork.png');
    mayorImage = loadImage('Mayor.jpg');
    monsterImage = loadImage('Bawer.jpg');
}
function setup(){
   createCanvas(1500, 1500);
   canvas.scale = 3;
   footie = createSprite(300, 500, 100, 100);
   footie.addImage(footImage);
   footie.scale = 0.5;
   shoe = createSprite(200, 600, 100, 200);
   shoe.addImage(shoeImage);
   shoe.velocityX = 9;
   shoe.scale = 0.5;
   boomerang = createSprite(300, 300, 200, 200);
   boomerang.addImage(boomerangImage);
   boomerang.scale = 0.3;
   boomerang.visible = false
   scientist = createSprite (1000, 600, 300, 100);
   scientist.addImage(scientistImage);
   scientist.scale = 0.4;
   scientist.visible = false;
   mayor = createSprite(700, 1000, 300, 200);
   mayor.addImage(mayorImage);
   mayor.scale = 0.2;
   mayor.visible = false;
   monster = createSprite(500, 0, 300, 200);
   monster.addImage(monsterImage);
   monster.scale - 0.6;
   monster.visible = false;

   
   playscreen = createButton('Play');
   playscreen.position(500, 200);
   playscreen.style("width", )
   playscreen.mousePressed;
   playscreen.style("color", "purple");
   playscreen.style("background", "yellow");
   
   


   if(keyIsDown(UP_ARROW)){
    footie.velocityY = -1;
} else {
    footie.velocityY = 0;
}
if(keyIsDown(DOWN_ARROW)){
    footie.velocityY = 1;
} else {
    footie.velocityY = 0;
}
if(keyIsDown(RIGHT_ARROW)){
    footie.velocityX = 3;
} else {
    footie.velocityX = 0;
}
if(keyIsDown(LEFT_ARROW)){
    footie.velocityX = -3;
} else {
    footie.velocityX = 0;
}


if(keyIsDown("N")){
    boomerang.velocityX = 9;
} else {
    boomerang.velocityX = 0;
}




   
   
   
}

function draw(){
    background(255);

    scientist.visible = true;
    
    if(shoe.x < 1500){
        text("Hey shoes, where are you going?", 0, 460);
    text("AHHHHHHHHH!", shoe.x, shoe.y + 100);
    }
    
    

    drawSprites();
}


    

