class Level2Class{


constructor(){

}


    assets(){
        b1 = createSprite(600,100,50,50);
        b1.shapeColor = 'red'
        b2 = createSprite(600,200,50,50);
        b2.shapeColor = 'green'
        b3 = createSprite(600,300,50,50);
        b3.shapeColor = 'blue'
        b4 = createSprite(600,400,50,50);
        b4.shapeColor = 'yellow'
        b5 = createSprite(800,100,50,50);
        b5.shapeColor = 'green'
        b6 = createSprite(800,200,50,50);
        b6.shapeColor = 'blue'
        b7 = createSprite(800,300,50,50);
        b7.shapeColor = 'yellow'
        b8 = createSprite(800,400,50,50);
        b8.shapeColor = 'red'
        player = createSprite(700,100,50,50);
             
        textSize(25)
        text("Click each Row's switches in the right order:",50,100)
        text("Row 1 - Green, Red, Yellow, Blue",75,200)
        text("Row 2 - Red, Yellow, Green , Blue",75,300)
        }
        
        playerMove(){
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
        
        
        }}
        
        
        level1(){
            array1 = ["green","red","yellow","blue"];
            playerArray = [];
            
            var seq = database.ref("level1/player-seq");
            seq.on("value",data => {
            playerArray = data.val();
            })
            
        
        
        }}
    
