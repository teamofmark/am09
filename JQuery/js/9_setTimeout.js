

$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;

    scoreCount(count, $score, $circle, playState);
    //? 변수선언 및 매개변수로 전달.
});

function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count+"점");
        }
    });

    setTimeout(function(){
        playState = false;
        alert("게임종료");
    },5000);
}