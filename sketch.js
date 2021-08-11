var spaceCraft, bg, iss;
var issIMG, spaceIMG, spacecraft1IMG, spacecraft2IMG, spacecraft3IMG, spacecraft4IMG
var hasDocked = false;

function preload() {
  issIMG = loadImage("images/iss.png");
  spaceIMG = loadImage("images/spacebg.jpg");
  spacecraft1IMG = loadImage("images/spacecraft1.png");
  spacecraft2IMG = loadImage("images/spacecraft2.png");
  spacecraft3IMG = loadImage("images/spacecraft3.png");
  spacecraft4IMG = loadImage("images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(spacecraft1IMG);
  spaceCraft.scale = 0.15;

  iss = createSprite(330, 130, 50, 50);
  iss.addImage(issIMG);
  iss.scale = 0.6;

}

function draw() {
  background(spaceIMG); 
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y - 2;
    }
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(spacecraft4IMG);
      spaceCraft.x = spaceCraft.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(spacecraft3IMG);
      spaceCraft.x = spaceCraft.x + 1;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spacecraft2IMG);
      spaceCraft.y = spaceCraft.y + 2;
    }
  }
  if(spaceCraft.y<=(iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200, 300);
  }
  
  
  drawSprites();
}