$(document).ready(function(){
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();
    var timerID = 0; //? 무한반복처럼 작동하는 setInterval 초기화 용.

    startMove($circle, runStep, xpos, railWidth, timerID);
});
function startMove($circle, runStep, xpos, railWidth, timerID){
    $("#btn_start").click(function(){
        timerID = setInterval(function(){
            xpos += runStep;
            $circle.css("left", xpos);
            // todo. 왕복운동 하게 만들기.
            if(xpos > railWidth || xpos < 0){
                runStep *= -1;
            }
        },0); //? setInterval = 고정인자2개 (실행함수, 시간) - 시간마다 실행함수 반복
    });
};