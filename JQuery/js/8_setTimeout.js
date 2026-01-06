var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;

$(document).ready(function(){
    init();
    scoreCount(count, $score, $circle, playState);

});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    alert("게임시작!");
    $circle.click(function(){
        count++;
        $score.text("현재 점수는 " + count + "점 입니다.");
    });
}