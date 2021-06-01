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
    $score = $('#score');
    $circle = $('#circle');
    $btnStart = $('#btn_start');
    $panel = $('.panel');
}
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

    if(playState == true){
        gameEnd();

        timerID = setInterval(moveCircle, 500);
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())), 
        /* 
            ex > random()*50
            ? 0 - 1 범위에서 0과 1을 포함하지 않는 소수를 return.(0.111111111 ~ 0.999999999)
            ? random 0.9938 return. * 50? = 49.69 = > 49.
        */
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
    setTimeout(function(){
        playState = false;
        clearInterval(timerID);
        alert('게임이 종료되었습니다.');
    }, 10000);
}