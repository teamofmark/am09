var count = 0;
var $score = null;
var $circle = null;
var playState = false;
var $btnStart = null; //? 게임시작 button
var $panel = null; //? frame.
var timerID = 0; //? ???????????????????????

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
// ?게임시작함수
function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd();
        timerID = setInterval(moveCircle, 500);
    }
}
// ? 원움직이는함수
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top: Math.floor(Math.random()*($panel.height() - $circle.height()))
        // todo top 작성해보기
    });
}
// ? 점수집계함수
function scoreCount(){
    if(playState == true){
        count ++;
        $score.text(count);
    }
}
// ? 게임종료함수
function gameEnd(){
    setTimeout(function(){
        playState = false;
        clearInterval(timerID);
        alert("게임종료. 너의 점수는" + count + "점 이다.");
        count = 0;
        $score.text(count);
    },10000);
}