var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;

$(document).ready(function(){
    init();
    scoreCount(count, $score, $circle, playState);
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    alert("게임시작!");
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text("현재 점수는 " + count + "점 입니다.");
        }
    });
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    },5000);
    // setTimeout([function],[time])
}
function restart(){
    playState = true;
    count = 0;
    $score.text("현재 점수는 " + count + "점 입니다.");
    scoreCount(count, $score, $circle, playState);
}