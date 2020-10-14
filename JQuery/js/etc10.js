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
    $("#btn_start").click(function(){
        movestart();// ? 움직이는 기능.
    });
    $("#btn_stop").click(function(){
        moveStop();// ? 멈추는 기능.
    });
}

function movestart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle();
        },0);
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css({
        left : xpos
    });
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}



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
    
                    $circle.css({
                        left: xpos
                    });
    
                    if(xpos > railWidth || xpos < 0){
                        runStep *= -1;
                    }
                },0);
        return stopMove(timerID);
    });
}

function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}