const floor = 775;

$('#startBtn').click(() => {
    $('#titleScreen').removeClass('show');
    startGame();
})


function startGame(){
    $(document).mousemove(e => {
        let x = e.pageX - 50;
        $('#player').css({left:x, top:floor});
    })

    $(document).onLoad()
}

