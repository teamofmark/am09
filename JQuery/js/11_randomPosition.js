var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
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
    $btnStart.click(gameStart); //? game Start Func
    $circle.click(scoreCount); //? score count Func
}
function gameStart(){
    playState = true;
    if(playState == true){
        endGame();//? 게임종료 - setTimeout Func
        timerID = setInterval(moveCircle,500);
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())), //todo. x축 random 구하기
        top:  Math.floor(Math.random()*($panel.height() - $circle.height()))//todo. y축 random 구하기
    });
}
/*
    var value = parseInt(Math.random()*50)+50;

        ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
    ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
    ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
    ? 3. random*50 이 되면 결과적으로 0 ~ 49 사이의 정수가 나오게 된다.(parseInt) 
    ? 4. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 그 이후 50이 더해지며 99가 된다.

*/
function scoreCount(){

}
function endGame(){

}