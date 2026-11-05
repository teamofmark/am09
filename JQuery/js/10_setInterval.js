var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0; //? setInterval은 실행하면 죽을수 없음. 그래서 counter 변수로활용.

$(document).ready(function(){
    init(); //? 변수 선언 및 초기화 함수
    initEvent(); //? event함수 실행.
});
function init(){
    $circle=$("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(moveStart); //? 움직이는 함수
    $("#btn_stop").click(moveStop); //? 멈추는 함수
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1); //? 0.001초마다 moveCircle함수 실행
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position left 좌표 구해오기
    // ! right, bottom은 불가
    xpos += runStep;
    $circle.css({
        left: xpos
    });
    // todo. 집나간 원 가두기
    if(xpos > railWidth || xpos < 0){ //? 움직일 범위 지정 및 운동방향 변경.
        runStep *= -1; //? 10, -10 교차
    }
}
function moveStop(){
    clearInterval(timerID); //? interval함수 초기화
    timerID = 0; //? 다시 재시작을 위한 timerID초기화
}