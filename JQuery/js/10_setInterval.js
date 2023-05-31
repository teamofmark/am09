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
    setInterval(moveCircle,1); // ? 움직임함수 - 한번시작되면 중지 불가.
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position css의 left 좌표.
    xpos += runStep;
    $circle.css("left",xpos);
    // todo. 가두기.
    
}

function moveStop(){

}