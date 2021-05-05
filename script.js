$(() => {
    function draw(){
        $(canvas).clearCanvas();
        drawFloor();
        drawDrop();
        dropFall();
        drawPlayer();
        movePlayer();
    }

    setInterval(draw, 20);
    
})

