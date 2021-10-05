var $circle = null;
var $btnStart = null;
var $panel = null;
var $score = null;
var count = 0;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
function initEvent(){
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd();
        timerID = setInterval(moveCircle ,500);
    }
}

function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top: Math.floor(Math.random()*($panel.height() - $circle.height()))
    });
}

function scoreCount(){
    if(playState == true){
        count ++;
        $score.text(count);
    }
}
function gameEnd(){
    setTimeout(function(){ //? playState가 true로 바뀐이후 10초후 자동종료.
        //?scoreCount가 바라볼 전역변수 playState 초기화.
        //?setInterval 초기화
        //? 게임종료 경고창출력
        //? count reset
        //? $score에 기록된 count reset
    }, 10000);
}