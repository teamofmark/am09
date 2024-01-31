// todo 1. 필요한 전역변수 선언
var $circle = null; // ? 원 선언
var railWidth = 0; // ? 레일 선언
var runStep = 10; // ? 움직임 수치 선언
var timerID = 0; // ? interval 변수 선언

$(document).ready(function(){
    init();// todo 2. 변수선언 함수 실행
    initEvent();// todo 3. 이벤트 함수 실행
});

// todo 2. 변수선언 함수 생성
function init(){
    $circle = $("#circle"); //? 움직임 대상 원 초기화
    railWidth = $("#rail").width(); //? 레일 너비구하기
}

// todo 3. 이벤트 함수 생성
function initEvent(){
    $("#btn_start").click(moveStart);// todo 3-1. #btn_start를 click 하였을 때 움직임 시작 함수 실행
    $("#btn_stop").click(moveStop);// todo 3-2. #btn_stop을 click 하였을 때 멈추는 함수 실행
}


// todo 3-1 움직임 시작 함수 생성
function moveStart(){
    if(timerID == 0){
        // todo 3-1-1 일정 시간마다 움직임 함수 실행
        timerID = setInterval(moveCircle,1);
    }
}

// todo 3-1-1 움직임 함수 생성
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css("left",xpos);
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;// ! 10 -> -10 -> 10 -> -10...
    }
}

// todo 3-2 멈추는 함수 생성
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}