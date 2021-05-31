var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;
// ? jquery 에서 사용할 대상 및 변수 '선언'.

$(document).ready(function(){
    init(); //? 대상 및 변수 불러오기.
    initEvent(); //? event 함수 불러오기.
});

function init(){
    $circle  = $('#circle');
    railWidth = $('#rail').width();
}
//? jquery에서 사용할 대상 및 변수 '초기화'.

function initEvent(){    
    $('#btn_start').click(function(){
        moveStart(); //? 움직이는 기능
    }); 
    $('#btn_stop').click(function(){
        moveStop(); //? 멈추는 기능
    });
}

function moveStart(){
    if(timerID ==0){
        timerID = setInterval(function(){
            moveCircle();//? 원이움직이는 로직 함수.
        },0); 
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position left 구해오기.
    xpos += runStep;
    $circle.css('left',xpos);
    // todo. 원이 사각상자를 뚫고나가지 못하게 만들기.
    if(xpos > railWidth || xpos < 0){ //? 움직일 범위 지정 , 운동방향 변경.
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}