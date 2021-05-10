$(() => {
    function draw(){
        $(canvas).clearCanvas();
        drawFloor();
        drawDrop1();
        drawDrop2();      
        drawPlayer();
        //movePlayer();
    }

    setInterval(draw, 10);
    
})

