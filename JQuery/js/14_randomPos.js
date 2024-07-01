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
        left: Math.floor(Math.random()*($panel.width() -  $circle.width())),// todo. 테두리내에서 무작위 x축 이동 구하기
        top: Math.floor(Math.random()*($panel.height() -  $circle.height()))// todo. 테두리내에서 무작위 y축 이동 구하기
    });
    /*
        ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 내림한 정수값 (ex 10.2 = 10)
        ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 올림한 정수값 (ex 10.2 = 11)
    */
}
function gameEnd(){

}