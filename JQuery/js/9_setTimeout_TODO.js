var count = 0;
var $score = null
var $circle = null
var playState = true;
var $resetBtn = null;

$(document).ready(function(){
    init();
    scoreCount(count, $score, $circle, playState); //? 변수선언 및 매개변수로 전달.
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){ //? 클릭시 점수 출력기능
        if(playState == true){ //? 플레이상태 조건
            count++;
            $score.text(count + "점"); //? 점수출력
        }
    });
    setTimeout(function(){ //? 5초시간 경과시 플레이상태 변경 및 종료기능.
        alert("게임종료.");
        playState = false;
    }, 5000);
}
function restart(){
    playState = true;
    count = 0;
    $score.text(count + "점");
    scoreCount(count, $score, $circle, playState);
}