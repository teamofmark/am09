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
    $("#btn_stop").click(moveStop); //? 중지
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
        // ? setInterval([function],[intervalSpeed]);
    }
}
function moveCircle(){
    // ? circle position 움직임 구현 예정
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css("left",xpos);
    // todo. 사각형 프레임 안에 원이 가둬져서 반복운동 하게 만들기
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); //? setInterval kill -> parameter값으로 전달해야함.
    timerID = 0;
}