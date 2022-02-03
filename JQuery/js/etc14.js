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

$(document).ready(function(){
    init(); // ? 변수 선언함수
    initEvent(); //? 이벤트 처리함수
});
function init(){
    
}

// ?게임시작함수
function gameStart(){

    timerID = setInterval(원움직임함수, 500);
}

// ?종료함수
function gameEnd(){
    setTimeout(function(){
        playState = false;
        clearInterval(timerID);
    }, 10000);
}