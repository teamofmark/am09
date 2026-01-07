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
        // setInterval([function],[time]);
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 대상의 left 값 구해오기
    xpos += runStep;
    $circle.css("left",xpos);
    // todo. 움직일범위를 지정하고 운동방향을 변경해서 가두기
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}