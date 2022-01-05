const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var engine, world;
var player;
var r1,b1,g1,y1,r2,b2,y2,g2;
var edges;
var levels;
var level1, level2;
array1 = ["green","red","yellow","blue","red","yellow","green","blue"];
    
playerArray = [];

function setup(){

    database = firebase.database();
    var canvas = createCanvas(900,600);
    
    database = firebase.database();
    var canvas = createCanvas(900,600);
    player = createSprite(700,100,50,50)

    engine = Engine.create();
    world = engine.world;
//level 1
r1 = createSprite(600,100,50,50);
r1.shapeColor = 'red';
g1 = createSprite(600,200,50,50);
g1.shapeColor = 'green';
b1 = createSprite(600,300,50,50);
b1.shapeColor = 'blue';
y1 = createSprite(600,400,50,50);
y1.shapeColor = 'yellow';
g2 = createSprite(800,100,50,50);
g2.shapeColor = 'green';
b2= createSprite(800,200,50,50);
b2.shapeColor = 'blue';
y2 = createSprite(800,300,50,50);
y2.shapeColor = 'yellow';
r2 = createSprite(800,400,50,50);
r2.shapeColor = 'red';
     



}

function draw(){
    background('#CFE8EE');
    edges = createEdgeSprites();
    if(player.isTouching(edges)){
       player.x = 700;
       player.y = 100;
    }
   Engine.update(engine);

   if (array1 === playerArray){

    level2 = new Level2Class();
}

//player move
if(keyDown(LEFT_ARROW)){
    player.x = player.x - 10;
}
else if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 10;
}
else if(keyDown(UP_ARROW)){
    player.y = player.y - 10;
}
else if(keyDown(DOWN_ARROW)){
    player.y = player.y + 10;
}
textSize(25)
text("Click each Row's switches in the right order:",50,100)
text("Row 1 - Green, Red, Yellow, Blue",75,200)
text("Row 2 - Red, Yellow, Green , Blue",75,300)

    
// var seq = database.ref("level1/player-seq");
// seq.on("value",data => {
// playerArray = data.val();
// })

if (player.isTouching(r1)){
    if(player.isTouching(r2)){
        fill("black")
        console.log("1")
        line(r1.x,r1.y,r2.x,r2.y)
        
    }
   
}

// if (player.isTouching(b2)){

//     playerArray.push(array1[0])
// }

// if (player.isTouching(b3)){

//     playerArray.push(array1[3])
// }

// if (player.isTouching(b4)){

//     playerArray.push(array1[2])
// }
// // Row 2 ------------------------------
// if (player.isTouching(b5)){

//     playerArray.push(array1[6])
// }

// if (player.isTouching(b6)){

//     playerArray.push(array1[7])
// }

// if (player.isTouching(b7)){

//     playerArray.push(array1[5])
// }

// if (player.isTouching(b8)){

//     playerArray.push(array1[4])
// }

//console.log(playerArray)

    drawSprites();



}

