  var dog,happydog,database,foodS,foodStock,dogImg,happydogImg;
  function preload(){
    dogImg = loadImage("images/dogImg.png");
  }

  function setup(){
    createCanvas(800, 700);
    dog = image(dogImg,200,200);
    dog.scale(0.2);
  }


  function draw(){

    drawSprites();
    //add styles here

  }

