var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0;

$(function(){
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
    // * clearInterval
    if(timerID == 0){ //? timerID == 0 / 시작을 안한상태. timerID != 0 / 시작을 한 상태.
        timerID = setInterval(moveCircle,1); // ? 움직임함수 - 한번시작되면 중지 불가.
    }
    
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position css의 left 좌표.
    xpos += runStep;
    $circle.css("left",xpos);
    // todo. 가두기.
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? setInterval clear.
    timerID = 0; //? 초기화
}