var player,playerImage;
var space,spaceImage;
var rock,rockImage,rocksGroup;
var star,starImage,starsGroup;
gameState="PLAY";
function preload(){
playerImage=loadImage("pizza-delivery-man-on-rocket-with-pizza-2656093-2214899.png");
spaceImage=loadImage("bg2.png.png");
rockImage=loadImage("stone.png.png");
starImage=loadImage("star.png.png");
  starsGroup=new Group();
  rocksGroup=new Group();
}

function setup() {
 createCanvas(600,600);
  
  space=createSprite(300,100);
  space.addImage("space",spaceImage);
  space.velocityX=1;
  space.scale=2;
  
  player=createSprite(100,200,20,20);
  player.addImage("player",playerImage);
  player.scale=0.2;
  player.velocityX=0;
}

function draw() {
 background("white");
  
  if(gameState==="PLAY"){
  if(space.x>400){
    space.x=300;
  }
  
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+3;
  }
  }
  
  if(rocksGroup.isTouching(player)){
    gameState="END";
  }
    
      
     
  if(gameState==="END"){
    player.destroy();
    rocksGroup.destroyEach();
    space.destroy();
    
    
    fill("yellow");
    textSize(30);
    text("GAMEOVER",230,250);
  }
  
   spawnRocks();
  drawSprites();
}
function spawnRocks(){
   if(frameCount%150===0){
     rock=createSprite(500,50);
     rock.addImage("rock",rockImage);
     rock.y=Math.round(random(20,400));
     rock.velocityX=-3;
     rock.lifetime=800; 
     rock.scale=0.1;
     rocksGroup.add(rock);
     
   }
}