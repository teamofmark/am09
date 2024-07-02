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
    var winnerList = []; //? 물고기들을 담을 장소 (결승선에 한마리라도 도달 했을 때)
    for (var i = 0; i<$fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition>=goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
        }
        console.log(winnerList[i]);
        console.log("7. 데이터 저장 성공");
    }
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position값 기준 내림차순 정렬
        });
        endGame();
        console.log("8. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index+"번 물고기");
    }
}
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("9. 게임종료.");
}