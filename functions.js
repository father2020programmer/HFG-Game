function giveScore(){
    scoreNum.text("Score: " + score);
    numLives.text("Lives: " + lives);
    currentLevel.text("Level: " + level);
}

function animateDrop(){
    
    

    
    
    console.log(drop1.css('top'));
   
}


function playerMoves() {
    window.onmousemove = e => {
        x = e.pageX;
        y = e.pageY;

        playerId.style.top = '745px';
        playerId.style.left = (x - 60) +'px';

        return (x,y);
    }    
}


// function test(){
//     let thing = playerId.style.left;

//     if(playerId)
// }