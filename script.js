const floor = 775;

let numLives = 100;
let counter = 0;


$('#startBtn').click(() => {
    $('#titleScreen').removeClass('show');
    startGame();
})


function startGame(){
    $(document).mousemove(e => {
        let x = e.pageX - 50;
        $('#player').css({left:x, top:floor});
    });

   rainDrops();
   addToCounter();

}

function addToCounter(){
    let drop = $('.drop').position();
    let player = $('.player').position();

    if(drop === player){
        counter += 1;
    }

    console.log(counter, player, drop);
}



function rainDrops(){
    
    for(let i = 1; i < 5; i++){
        drops(i);
    }
    
}


function drops(i){

    setTimeout(() => {
        $(() => {
            $('#' + i).animate({top: '+=640'}, 2000, function(){
                $('#' + i).css({top: 0});
            });
        });
    }, 1000 * i);


}
