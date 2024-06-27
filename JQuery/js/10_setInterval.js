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
        timerID = setInterval(moveCircle,10); //? 실행된 이후 중지 불가능. =
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    // var limitVal = $(".panel").width() - $circle.width();
    xpos += runStep;
    $circle.css({
        left: xpos
    });
    // todo. 왕복운동만들기 - 집나간원 잡아오기
    if(xpos <= 0 || xpos>= railWidth){
        runStep *= -1; // * 10 -> -10 -> 10.....
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}