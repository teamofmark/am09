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
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
function initEvent(){
    // ! event는 이런식으로 하나의 함수로 처리하는 것이 boolean type 변수를 바라보고 작동해야하는 상황에 원활.
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
function gameStart(){
    playState = true;
    if(playState){
        gameEnd();
        timerID = setInterval(moveCircle,500);
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width()-$circle.width())),
top: Math.ceil(Math.random()*($panel.height()-$circle.height()))
    });
}
function gameEnd(){
    setTimeout(function(){
        playState = false;
        clearInterval(timerID);// ?interval 초기화
        alert('게임종료. 너의 점수는' + count + '점 이다.'); // ? 종료문 출력
        count = 0;
        $score.text(count);
    },10000);
}
function scoreCount(){
    if(playState){
        count++;
        $score.text(count);
    }
}