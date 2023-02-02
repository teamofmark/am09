var $circle = null;
var railWidth = null;
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
    $("#btn_start").click(moveStart); //? 움직이는 기능
    $("#btn_stop").click(moveStop); //? 멈추는 기능
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position : left 불러오기
    xpos += runStep;
    $circle.css("left",xpos);
    // todo. 원이 frame 내에 갇히려면?
    
    if(xpos < 0 || xpos > railWidth){
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? setInterval 전용카운터.
    timerID = 0; //? timerID 초기화
}