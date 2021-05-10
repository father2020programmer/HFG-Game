for(let d=0; d<dropCount; d++){
    drop[d] = {
        xp: dropx[d],
        yp: starty
    }
}

$(document).keydown(function (e){
    if(e.key === 'ArrowLeft' || e.key === 'a'){
        playerX -= 15;
    } else if(e.key === 'ArrowRight' || e.key === 'd'){
        playerX += 15;
    }
});

function drawFloor(){
    $(canvas).drawRect({
        fillStyle: 'black',
        x: 0, y: floory,
        width: floorWidth,
        height: floorHeight,
    });
}


function drawDrop1(){
    
    $(canvas).drawEllipse({
        fillStyle: '#1445d9',
        x: drop[m1].xp, y: drop[m1].yp,
        width: 8, height: 30,
        });

        let info = drop[m1].yp;

        if(info > 940){
            drop[m1].yp = starty;
            m1 = Math.floor(Math.random() * 2);
        } else{
            drop[m1].yp += 2.5;
        }           
    
}

function drawDrop2(){
    
    $(canvas).drawEllipse({
        fillStyle: '#1445d9',
        x: drop[m2].xp, y: drop[m2].yp,
        width: 8, height: 30,
        });

        let info = drop[m2].yp;

        if(info > 940){
            drop[m2].yp = starty;
            m2 = Math.floor((Math.random() * 2) + 2);
        } else{
            drop[m2].yp += 2.3;
        }
    
}

function drawDrop3(){
    
    $(canvas).drawEllipse({
        fillStyle: '#1445d9',
        x: drop[m3].xp, y: drop[m3].yp,
        width: 8, height: 30,
        });

        let info = drop[m3].yp;

        if(info > 940){
            drop[m3].yp = starty;
        } else{
            drop[m3].yp += 2.5;
        }           
    
}

function drawDrop4(){    
    
    $(canvas).drawEllipse({
        fillStyle: '#1445d9',
        x: drop[m4].xp, y: drop[m4].yp,
        width: 8, height: 30,
        });

        let info = drop[m4].yp;

        if(info > 940){
            drop[m4].yp = starty;
        } else{
            drop[m4].yp += 2.5;
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
        width: playerWidth, height: 25 
    })
    $(canvas).drawRect({
        fillStyle: '#000',
        x: playerX, y: 875,
        width: playerWidth, height: 5 
    })
}

function ifScored(){
    let playerPos = playerX - 35;

    for(let d=0; d<drop.length; d++){
        if(drop[d].xp > playerPos && drop[d].xp < playerPos + playerWidth && drop[d].yp >835 && drop[d].yp < 840){
            score += 1;
            drop[d].yp = 1200;
        }
    }
    
}