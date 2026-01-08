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
// ? 위치 초기화함수
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        })
    }
    console.log("2. 초기위치설정완료.");
}

// ? 이벤트처리함수
function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임시작버튼 불러오기 성공.");
}

// ? 게임시작함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기움직이기
            displayFishPositionInfo();// ? 움직인 물고기 위치 표시
            // ? checkGoalFish(); 결승선 도달 감지
        },200);
        console.log("4. 게임 정상 시작.")
    }
}
// ? 물고기 움직임 함수
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left+step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상.");
}
// ? 움직인 물고기 위치 표시
function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i +"번 물고기 : " + $fish.position().left.toFixed(2) + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상.");
}