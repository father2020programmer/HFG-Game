
/////// Main Script of Game ////////////////


$('#startBtn').click(function(){
    $(titleScreen).removeClass('show');
    startGame();
});

$('#restartBtn').click(function(){
    $(endScreen).removeClass('show');
    startGame();    
});

$(document).keydown(function (e){
    if(e.key === 'ArrowLeft' || e.key === 'a'){
        playerX -= playerSpeed;
    } else if(e.key === 'ArrowRight' || e.key === 'd'){
        playerX += playerSpeed;
    }
});


function draw(){
    $(canvas).clearCanvas();
    drawScore();
    drawLives();
    drawLevels();
    drawFloor();              
    drawPlayer();        
    ifScored();
    drawPlantLevels();
    drawDrop1();
    endOfLives();
    winGame();        
}