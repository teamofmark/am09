
/*
    ! 순서
    ! 1. 변수선언부 / 이벤트 선언부 / 처리 함수부(게임시작함수, 스코어업 함수, 원이 움직이는 함수, 게임종료함수)
    ? random position 공식
    * $circle.css({
    *     left: Math.floor(Math.random()*($panel.width() - $circle.width())),
    *     top: Math.floor(Math.random()*($panel.height() - $circle.height()))
    * });
*/
// ?전역변수
// ? count, score, circle, btnStart, panel, playState, timerID(clearInterval 전용 변수)
var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init(); // ? 변수 선언함수
    initEvent(); //? 이벤트 처리함수
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

// ?원움직임함수
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top: Math.floor(Math.random()*($panel.height() - $circle.height())),
    });
}

// ? 점수계산함수
function scoreCount(){
    if(playState == true){
        count ++;
        $score.text(count);
    }
}

// ?종료함수
function gameEnd(){
    setTimeout(function(){ 
        playState = false;
        clearInterval(timerID); //? interVal은 boolean값 = 초기화불가. timerID 지정 후 clearInterval.
        alert('게임종료');
        count = 0;
        $score.text(count);
    }, 10000);
}