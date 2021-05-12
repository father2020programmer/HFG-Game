
/////// Logic game functions///////////////


///// Setting level one after restart ///////

function startAtLevel1(){
        score = 0;
        lives = 20;
        dropSpeed = 3;
        levelSpeed = 15;
        rainSpeed = 2000;
        playerSpeed = 15;
}

function startGame(){
    gameInterval = setInterval(draw, levelSpeed);
    numInterval = setInterval(makeRandomNum, rainSpeed);
}

/////// Making a Random Num //////

function makeRandomNum(){
    newNum = Math.floor(Math.random() * 4)
    if (newNum === lastNum){
        makeRandomNum();
    } else{
        drop.unshift({
            xp: dropx[newNum],
            yp: starty
        })
        lastNum = newNum;        
    }
}

/// collision detection /////

function ifScored(){
    let playerPos = playerX - 35;

    for(let d=0; d<drop.length; d++){
        if(drop[d].xp > playerPos && drop[d].xp < playerPos + playerWidth && drop[d].yp >835 && drop[d].yp < 845){
            score += 1;
            lives += 1;
            drop[d].yp = 1200;
        }
    }
    
}


//// levels of game ////


function drawPlantLevels(){

    if(score > 10 && score < 20) {
        drawPlant1();
        level = 2;
        dropSpeed = 3;
        levelSpeed = 12.5;
        rainSpeed = 450;
        playerSpeed = 12.5;
    } else if(score >= 20 && score < 30){
        drawPlant1();
        drawPlant2();
        dropSpeed = 4;
        levelSpeed = 7.5; 
        rainSpeed = 100;
        playerSpeed = 10;       
        level = 3
    }else if( score >= 30){
        drawPlant1();
        drawPlant2();
        drawPlant3();
        dropSpeed = 5;
        levelSpeed = 5; 
        rainSpeed = 25; 
        playerSpeed = 7.5;       
        level = 4
    }
}

// Win or Lose Screen //////

function endOfLives(){
    if(lives === 0){
        clearInterval(gameInterval);
        clearInterval(numInterval);
        startAtLevel1();
        $(endScreen).addClass('show');
        $('#endMessage').text('Game Over!');
    }
}

function winGame(){
    if(score > 35){
        clearInterval(gameInterval);
        clearInterval(numInterval);
        startAtLevel1();
        $(endScreen).addClass('show');
        $('#endMessage').text('You Win!');
    }
}
