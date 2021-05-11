$(() => {
    function draw(){
        $(canvas).clearCanvas();
        drawScore();
        drawLives();
        drawLevels();
        drawFloor();
        //drawDrop1(lastNum);
        //drawDrop2(newNum);      
        drawPlayer();        
        ifScored();
        drawPlantLeves();
    }


    let gameInterval = setInterval(draw, 1);
    //let numInterval = setInterval(makeRandomNum, 3000);
})

