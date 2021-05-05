function drawFloor(){
    $(canvas).drawRect({
        fillStyle: 'black',
        x: 0, y: floory,
        width: floorWidth,
        height: floorHeight,
    });
}

function drawDrop(){       
    for(let i=0; i<dropx.length; i++){
       $(canvas).drawEllipse({
         fillStyle: '#1445d9',
         x: dropx[i], y: dropy,
         width: 8, height: 30,
         });
    }
}


function dropFall(){
    if(dropy > 930){
        dropy = 230;
    } else{
        dropy += 2;
    }
}

function drawPlayer(){
    $(canvas).drawRect({
        fillStyle: '#ed9715',
        x: playerX, y: 900,
        width: 62, height: 100
    })
    $(canvas).drawRect({
        fillStyle: '#ed9715',
        x: playerX, y: 860,
        width: 70, height: 25 
    })
    $(canvas).drawRect({
        fillStyle: '#000',
        x: playerX, y: 875,
        width: 70, height: 5 
    })
}

function movePlayer(){
    document.onkeypress = e => {
        if(e.key == 39) {
            playerX += 2;
        } else if(e.key == 37){
            playerX -= 2;
        }
    }
}

