var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
// ?선언 함수
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
// ?처리 함수
function initEvent(){
    $btnStart.click(function(){
        gameStart();
    });
    $circle.click(function(){
        scoreCount();
    });
}

function gameStart(){
    playState = true;
    // ? 1. playState 가 true일때 게임이 시작.

    if(playState == true){
        setInterval(moveCircle,500);
    }
}

function moveCircle(){
    $circle.css({
        left : Math.floor(Math.random()*($panel.width() - $circle.width())),
        top : Math.floor(Math.random()*($panel.height() - $circle.height()))
    });
}

function scoreCount(){

}