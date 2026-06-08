var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(function(){
    init();
    fishStartPosition();
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
    console.log("1. 대상 선언 완료.");
}
// ? 변수 초기화 함수

function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top : 100 + (i * 150)
        });
    }
    console.log("2. 초기 위치 설정 완료.");
}
// ? 초기 위치 설정 함수

function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임시작 함수 불러오기 성공.");
}
// ? 이벤트 처리 함수

function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPoisition(); //? 물고기 이동 함수.
            displayFishPositionInfo(); //? 물고기 위치 실시간 출력.
            checkGoalFish(); //? 결승선 도달 감지
        },200);
        console.log("4. 게임 정상 시작.");
    }
}
function updateFishPoisition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
    /*
        ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 내림한 정수값 (ex 10.2 = 10)
        
        ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 올림한 정수값 (ex 10.2 = 11)
        ? Math.ceil(postNumb/10)
        ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 리턴.
        ? 105 / 10 = 10.5 = 11.
    */
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상.");
}
function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left.toFixed(2) + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상.");
}
function checkGoalFish(){

}