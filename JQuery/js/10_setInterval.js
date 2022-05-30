/*
$(document).ready(function(){
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();
    var timerID = 0;

    startMove($circle, runStep, xpos, railWidth, timerID);
});

function startMove($circle, runStep, xpos, railWidth, timerID){
    $("#btn_start").click(function(){
        timerID = setInterval(function(){
            xpos += runStep;
            $circle.css("left",xpos);
            if(xpos > railWidth || xpos < 0){
                runStep *= -1;
            }
        },0);
        stopMove(timerID);
    });
}

function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
*/


var $circle = null;//? jquery 에서 사용할 대상 및 변수 선언.
var railWidth = null; 
var runStep = 10;
var timerID = 0;

$(document).ready(function(){
    init(); //? 대상 및 변수 불러오기.
    initEvent(); //? event 함수 불러오기.
});
function init(){ //? jquery 에서 사용할 대상 및 변수 초기화.
    $circle = $("#circle");
    railWidth = $("#rail").width();
};

function initEvent(){
    $("#btn_start").click(moveStart);//? 움직이는 기능

    
    $("#btn_stop").click(moveStop);//? 멈추는 기능
}

function moveStart(){
    if(timerID ==0){
        timerID = setInterval(moveCircle,0); //? 움직이는 로직
    }
};

function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position left 구해오기.

    xpos += runStep;

    $circle.css({
        left: xpos
    });

    if(xpos > railWidth || xpos < 0){ //? 움직일 범위 지정 및 운동방향 변경.
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? timerID clear
    timerID = 0; //? timerID 초기화
}