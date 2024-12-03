var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(moveStart);
    $("#btn_stop").click(moveStop);
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
        /*
            ? setInterval([function],[interval])
            * interval timer마다 function을 실행하라
        */
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css("left",xpos);
    if(xpos > railWidth || xpos < 0){
        // todo. 집나간원 잡아오기
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); // ? interval함수 죽이기
    timerID = 0; // ? timerID 초기화
}