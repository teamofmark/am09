/*
    1. 물고기 도열 - 높이의 배수관계(+마진)를 반복문으로 배치
    
    2. 이벤트 처리 - 물고기 움직임, 움직이는 물고기 위치 표시, 결승선 도달 감지
    -1. 물고기움직임 : 무작위로 움직여야함.(left-xpos random)
    -2. 움직임표시 : 지정된 Tag에 현재 x좌표를 가져다 소수점 2자리 처리를 하고 출력
    -3. 결승선감지 : 결승선의 x좌표를 기준으로 물고기의 현재 위치가 같거나 넘어갔는지 감지
    
    3. 결과 처리 - 정렬함수를 만들어 비교하고 배열내 값을 내림차순으로 정렬 하여 배열 0번에 위치한 물고기가 1등이 될 수 있도록-
*/
var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;
// 이상 변수 선언 및 초기화

$(function(){
    init();
    fishStartPosition();
    fishEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left  - $fishWidth;
    console.log("1. 대상 선언 및 초기화 완료.");
}
function fishStartPosition(){
    for(var i = 0; i<$fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        });
    }
    console.log("2. 초기 위치 설정완료");
}
function fishEvent(){
    $("#start").click(startGame);
    console.log("3. 게임 시작 함수 불러오기 성공!");
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기움직임
            displayFishPositionInfo();// ? 움직인 물고기 위치표시
            checkGoalFish();//  ? 결승선 도달감지
        },200);
        console.log("4.게임 정상 시작");
    }
}
function updateFishPosition(){
    for(var i = 0; i<$fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        /*
            ? Math.ceil : 매개변수 = num : 실수형 -> returnValue = 입력값이 실수일 때 올림 처리.(10.2=11)
            ? Math.floor : 매개변수 = num : 실수형 -> returnValue = 입력값이 실수일 때 내림 처리.(10.2=10)
            ? random: method, 매개변수 없음, 반환 값은 : 0 - 1 사이 소수 값
        */
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상.");
}
function displayFishPositionInfo(){
    var info = '';
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i +"번 물고기 : " + $fish.position().left.toFixed(2) + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상");
}
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i<$fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            console.log("7. 데이터 저장 성공.");
        }
    }
    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position;
            // ? 내림차순 - 진행될수록 값이 점점 내려가거나(...4,3,2,1), 역순으로 나타나는것(...d,c,b,a)
            // ? 오름차순 - 진행될수록 값이 점점 오르거나(1,2,3,4...), 정순으로 나타나는것(a,b,c,d...)
        });
        endGame(); //? 게임 종료 함수
        console.log("8. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index+"번 물고기!");
    }
}
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("9. 게임 종료");
}