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
    $("#btn_start").click(moveStart); //? 움직임
    $("#btn_stop").click(); //? 중지
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
        // ? setInterval([function],[intervalSpeed]);
    }
}
function moveCircle(){
    // ? circle position 움직임 구현 예정
}