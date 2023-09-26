var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0; // ! interval clear

$(document).ready(function(){
    init(); //? 선언
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(moveStart); //? 움직이는 기능
    $("#btn_stop").click(moveStop); //? 멈추는 기능
}
function moveStart(){ //? 움직임시작
    if(timerID == 0){
        timerID = setInterval(moveCircle,0); //? 움직임함수 - setInterval(실행함수,시간); - 시간마다 실행
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 대상의 position left 좌표 구하기
    xpos += runStep; //? xpos > railWidth = -= / xpos < 0 = +=..
    $circle.css({
        left: xpos
    });
    // todo 조건을 가두고 방향 전환
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); //? setInterval을 clear해주는 함수
    timerID = 0; //? timerID reset
}