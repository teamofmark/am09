var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;

$(function(){
    init();
    scoreCount(count, $score, $circle, playState);
});
function init(){ //? 선언함수
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){
        if(playState == true){
            count ++;
            $score.text(count + "점");
        }
    });
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    }, 5000);
}
// todo. 재시작버튼 구현해보기.