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
} //? 대상 선언 및 초기화 함수
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
    console.log("2. 초기 도열 완료.");
} //? 초기 도열 함수
function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임 시작 함수 불러오기 성공.");
} //? 이벤트 처리 함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기 움직이기
            displayFishPositionInfo();// ? 움직인 물고기 위치 출력
            checkGoalFish();// ? 결승선 도달 감지
        },200);
    }
    console.log("4. 게임 시작 상태 - 정상.");
}
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기들 움직임 - 정상.");
}// ? 물고기 움직이기
function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left.toFixed(2) + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 - 정상.");
}// ? 움직인 물고기 위치 출력
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), 
                position: fishCurrentPosition
            });
            // ! 세마리중 한마리의 왼쪽 좌표라도 goalLine수치보다 크거나 같을때 빈 배열에 세마리 값을 저장하라.
            // ? 그 넘어간 한마리만 적으면 되지..왜 세마리를? = 인간기준? (ex> 380px 391px 370px)
            // ? 1. 비교함수 .sort()를 사용하기 위해 배열에 저장해야함. = .push();
            console.log("7. 데이터 저장 성공.");
        }
        if(winnerList.length>0){
            winnerList.sort(function(a,b){
                return b.position - a.position; //? 내림차순정렬 = position값(number) 기준
            });
            /*
                ? 오름차순 -> 진행될수록 값이 커지거나(1,2,3,4...) 정순으로(a,b,c,d....) 나타나는 것.
                ? 내림차순 -> 진행될수록 값이 작아지거나(...4,3,2,1) 역순으로(...d,c,b,a) 나타나는 것.
            */
           endGame();
            console.log("8. 우승 물고기 선별 완료");
            alert("우승!" + winnerList[0].index+"번 물고기!");
        }
    }
}// ? 결승선 도달 감지
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("9. 게임 종료.");
}//? 게임 종료 함수