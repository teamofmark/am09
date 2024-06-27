var count = 0;
var $score = null;
var $circle = null;
var $btnStart= null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
function initEvent(){
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd();
        timerID = setInterval(moveCircle,500);
    }
}
function moveCircle(){
    $circle.css({
        // ! Math.random()*limit -> 0-1 사이 무작위 소수반환 *limit -> limit자신(0)을 포함하지않은 숫자반환. 
        left: ,// todo. 테두리내에서 무작위 x축 이동 구하기
        top:// todo. 테두리내에서 무작위 y축 이동 구하기
    });
}
function gameEnd(){

}