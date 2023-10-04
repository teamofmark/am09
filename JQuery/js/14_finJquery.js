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
    console.log("1. 대상선언완료.");
}
// ? 선언함수
function fishStartPosition(){
    for(var i = 0 ; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? .eq(i) -> 정수 요소 0 기반 대상 위치.
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
    console.log("2. 초기위치설정완료.");
}
// ? 초기위치설정함수
function initEvent(){
    $("#start").click(startGame);
}
// ? event처리함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 물고기 움직이기
            displayFishPositionInfo(); //? 움직인 물고기 위치 표시
            checkGoalFish();//? 결승선 도달 감지
        },200);
        console.log("3. 게임 정상 시작.");
    }
}
// ? 게임시작 함수
function updateFishPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
    console.log("4. 물고기 움직임 정상.");
}
// ? 물고기 움직임 함수
function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
    console.log("5. 물고기 위치 표시 정상.");
}
// ? 물고기 위치 출력 함수
function checkGoalFish(){
    var winnerList = [];
    for (var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            console.log("6. 데이터 저장 성공.");
        }
    }
    // ? 결승선 도달시 물고기 위치 저장.
    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position 값 기준 내림차순 정렬.
        });

        endGame();
        console.log("7. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index+"번 물고기!");
    }
}
// ? 결승선 도달 감지 함수
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("8. 게임 종료.");
}
// ? 게임 종료 함수