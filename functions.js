for(let d=0; d<dropCount; d++){
    drop[d] = {
        xp: dropx[d],
        yp: starty
    }
}

$(document).keydown(function (e){
    if(e.key === 'ArrowLeft' || e.key === 'a'){
        playerX -= 15.55;
    } else if(e.key === 'ArrowRight' || e.key === 'd'){
        playerX += 15.55;
    }
});

function makeRandomNum(){
    newNum = Math.floor(Math.random() * 4)
    if (newNum === lastNum){
        makeRandomNum();
    } else{
        lastNum = newNum;
        drawDrop1(newNum);
    }
}



// function drawDrop1(){
    
//     $(canvas).drawEllipse({
//         fillStyle: '#1445d9',
//         x: drop[m1].xp, y: drop[m1].yp,
//         width: 8, height: 30,
//         });

//         let info = drop[m1].yp;

//         if(info > 940){
//             drop[m1].yp = starty;
//             m1 = Math.floor(Math.random() * 2);
//         } else{
//             drop[m1].yp += .95;
//         }           
    
// }

// function drawDrop2(m){

        
//     $(canvas).drawEllipse({
//         fillStyle: '#1445d9',
//         x: drop[m].xp, y: drop[m].yp,
//         width: 8, height: 30,
//         });

//         let info = drop[m].yp;

//         if(info > 940){
//             drop[m].yp = starty;
//             makeRandomNum();
//         } else{
//             drop[m].yp += 1.02;
//         }
    
// }

// function drawDrop3(){
    
//     $(canvas).drawEllipse({
//         fillStyle: '#1445d9',
//         x: drop[m3].xp, y: drop[m3].yp,
//         width: 8, height: 30,
//         });

//         let info = drop[m3].yp;

//         if(info > 940){
//             drop[m3].yp = starty;
//         } else{
//             drop[m3].yp += 2.5;
//         }           
    
// }

// function drawDrop4(){    
    
//     $(canvas).drawEllipse({
//         fillStyle: '#1445d9',
//         x: drop[m4].xp, y: drop[m4].yp,
//         width: 8, height: 30,
//         });

//         let info = drop[m4].yp;

//         if(info > 940){
//             drop[m4].yp = starty;
//         } else{
//             drop[m4].yp += 2.5;
//         } 
// }

function ifScored(){
    let playerPos = playerX - 35;

    for(let d=0; d<drop.length; d++){
        if(drop[d].xp > playerPos && drop[d].xp < playerPos + playerWidth && drop[d].yp >835 && drop[d].yp < 840){
            score += 1;
            drop[d].yp = 1200;
        }
    }
    
}

function drawPlantLeves(){

    if(score > 10 && score < 20) {
        drawPlant1();
        level = 2;
    } else if(score > 20 && score < 30){
        drawPlant1();
        drawPlant2();        
        level = 3
    }else if( score > 30){
        drawPlant1();
        drawPlant2();
        drawPlant3();        
        level = 4
    }
}