    var canvas;
    var music;
    var pinkRect,greenRect,redRect,orangeRect;
    var whiteBoxSprite;
    var edges;
    function preload(){
        music = loadSound("music.mp3");
    }


    function setup(){
    canvas = createCanvas(770,600);

        //create 4 different surfaces
    pinkRect=createSprite(90,570,170,50);
    pinkRect.shapeColor="pink";
    greenRect=createSprite(290,570,170,50);
    greenRect.shapeColor="green";
    redRect=createSprite(490,570,170,50);
    redRect.shapeColor="red";
    orangeRect=createSprite(690,570,170,50);
    orangeRect.shapeColor="orange";

        //create box sprite and give velocity
    whiteBoxSprite=createSprite(random(20,600),random(20,200),40,40);
    whiteBoxSprite.shapeColor="white";
    whiteBoxSprite.velocityX=-1*(random(7,15));
    whiteBoxSprite.velocityY=1*(random(7,15));

    } 

    function draw() {
        background("black");

        //create edgeSprite
    edges = createEdgeSprites();
    whiteBoxSprite.bounceOff(edges);
    redRect.bounceOff(edges);
    greenRect.bounceOff(edges);
    orangeRect.bounceOff(edges);
    pinkRect.bounceOff(edges);
  


        //add condition to check if box touching surface and make it box
    if(isTouching(whiteBoxSprite,pinkRect)){
        whiteBoxSprite.shapeColor="pink";
        bounceOff(whiteBoxSprite,pinkRect);
        
    }
    if(isTouching(whiteBoxSprite,redRect)){
        whiteBoxSprite.shapeColor="red";
        bounceOff(whiteBoxSprite,redRect);
    }
    if(isTouching(whiteBoxSprite,orangeRect)){
        whiteBoxSprite.shapeColor="orange";
        music.play();
        whiteBoxSprite.velocityX=0;
        whiteBoxSprite.velocityY=0;
    }
    if(isTouching(whiteBoxSprite,greenRect)){
        whiteBoxSprite.shapeColor="green";
        bounceOff(whiteBoxSprite,greenRect);
    }
   
    drawSprites();
    }
