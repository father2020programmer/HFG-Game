

//////// Draw functions of Game///////////////////////


//// Game floor ///////

function drawFloor(){
    $(canvas).drawRect({
        fillStyle: 'black',
        x: 0, y: floory,
        width: floorWidth,
        height: floorHeight,
    });
}

/////// Score Lives and Level /////
function drawScore(){
    $(canvas).drawText({
        fillStyle: '#000',
        x: 65, y: 40,
        fontSize: 32,
        text: 'Score: ' + score
    });
}

function drawLives(){
    $(canvas).drawText({
        fillStyle: '#000',
        x: 490, y: 40,
        fontSize: 32,
        text: 'Lives: ' + lives
    });
}

function drawLevels(){
    $(canvas).drawText({
        fillStyle: '#000',
        x: 925, y: 40,
        fontSize: 32,
        text: 'Level: ' + level
    });
}

///////// Pot for Player to Control ////////////

function drawPlayer(){
    $(canvas).drawRect({
        fillStyle: '#ed9715',
        x: playerX, y: 900,
        width: 62, height: 100
    });
    $(canvas).drawRect({
        fillStyle: '#ed9715',
        x: playerX, y: 860,
        width: playerWidth, height: 25 
    });
    $(canvas).drawRect({
        fillStyle: '#000',
        x: playerX, y: 875,
        width: playerWidth, height: 5 
    });
}

/////// Rain drop /////////////
function drawDrop1(){
    for(let d=0; d<drop.length; d++){
        $(canvas).drawEllipse({
            fillStyle: '#1445d9',
            x: drop[d].xp, y: drop[d].yp,
            width: 8, height: 30,
            });
        let info = drop[d].yp;    
        if(info > 940){
            lives -= 1;
            drop.pop();
        } else{
            drop[d].yp += dropSpeed;
        }           
        
    }
}

//////// Drawing of Plant levels 1-3 //////////
function drawPlant1(){
    $(canvas).drawRect({
        fillStyle: '#26ab09',
        x: playerX, y:823,
        width: 10, height: 50
    });
    $(canvas).drawEllipse({
        fillStyle: '#26ab09',
        x: playerX - 15, y: 812,
        width: 30, height: 12.75
    });
    $(canvas).drawEllipse({
        fillStyle: '#26ab09',
        x: playerX + 15, y: 825,
        width: 30, height: 12.75
    });
}

function drawPlant2(){
    $(canvas).drawRect({
        fillStyle: '#26ab09',
        x: playerX, y:773,
        width: 10, height: 50
    });
    $(canvas).drawEllipse({
        fillStyle: '#26ab09',
        x: playerX - 15, y: 762,
        width: 30, height: 12.75
    });
    $(canvas).drawEllipse({
        fillStyle: '#26ab09',
        x: playerX + 15, y: 775,
        width: 30, height: 12.75
    });
}

function drawPlant3(){
    $(canvas).drawRect({
        fillStyle: '#26ab09',
        x: playerX, y:740,
        width: 10, height: 30
    });
    $(canvas).drawEllipse({
        fillStyle: '#e68037',
        x: playerX + 18, y: 725,
        width: 50, height: 35,
        rotate: 45
    });
    $(canvas).drawEllipse({
        fillStyle: '#e68037',
        x: playerX - 18, y: 725,
        width: 50, height: 35,
        rotate: -45
    });
    $(canvas).drawEllipse({
        fillStyle: '#e68037',
        x: playerX - 18, y: 692,
        width: 50, height: 35,
        rotate: 65
    });
    $(canvas).drawEllipse({
        fillStyle: '#e68037',
        x: playerX + 18, y: 692,
        width: 50, height: 35,
        rotate: -65
    });
    $(canvas).drawArc({
        fillStyle: '#e8e523',
        x: playerX, y: 710,
        radius: 20
    })
}