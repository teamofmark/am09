var count = 0; //? 점수
var $score = null; //? 전광판
var $circle = null; //? 클릭대상
var $btnStart = null //? 시작버튼
var $panel = null //? stage
var playState = false; //? 가능여부변수
var timerID = 0;

$(function(){
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

        timerID = setInterval(moveCircle,500);
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top:Math.floor(Math.random()*($panel.height() - $circle.height()))
    });
}
function scoreCount(){
    if(playState == true){
        count ++;
        $score.text(count);
    }
}
function gameEnd(){

}