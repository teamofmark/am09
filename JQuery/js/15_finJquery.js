var $fishList = null;
var $info = null;
var timerID = -1;
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
    console.log("1. 대상선언완료.");
}
function fishStartPosition(){
    for(var i = 0; i<$fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left : 0,
            top: 100 + (i*150)
        });
    }
    console.log("2. 초기위치설정완료.");
}
function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임시작 함수 불러오기 성공.");
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 움직이기
            displayFishPositionInfo(); //? 위치표시
            checkGoalFish(); //? 결승선 감지
        },200);
        console.log("4. 게임 정상 시작.");
    }
}
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상");
}
function displayFishPositionInfo(){
    var info = "";
    // todo. 0~2번 물고기 각각 현재 왼쪽좌표값 불러서 전광판 ($info)에 출력(.html())하기
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 :" + $fish.position().left + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상.");
}
function checkGoalFish(){

}