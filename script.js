$(() => {
    function draw(){
        $(canvas).clearCanvas();
        drawFloor();
        drawDrop1();
        drawDrop2();      
        drawPlayer();        
        ifScored();
    }
    setInterval(draw, 16);
    
})

