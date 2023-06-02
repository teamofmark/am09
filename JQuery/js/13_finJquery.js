/*
    todo : 물고기 경주 게임

    ? 요구사항
    * 시작 버튼을 누르면 경기가 시작한다. (2초간격 움직임)
    * 물고기는 실제 경주 게임처럼 어떤 물고기가 1등이 될 것인지 예측할 수 없게 할 것.
    * 물고기가 골인 지점을 통과하면 몇 번째 물고기가 우승했는지 알려주고 게임을 종료.
*/
var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(document).ready(function(){
    init();
    fishStartPosition();
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left  - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); // todo. 물고기가 실제로 이동하는 함수
            displayFishPositionInfo(); // todo. 이동한 것을 근거로 출력하는 함수.
            checkGoalFish();
        },200);
    }
}
function updateFishPosition(){
    console.log("1. 물고기 움직인다.");
} // todo. 물고기 이동 함수

function displayFishPositionInfo(){
    console.log("2. 물고기 이동정보 출력중...");
}// todo. 물고기 이동값 출력 함수

function checkGoalFish(){
    var winnerList = [];
    for (var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){ //? goalLine을 한마리라도 넘으면 winnerList배열에 물고기들위치저장.
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
    }
    if(winnerList.length>0){ //? 배열에 값이 담기고 나면
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position 값을 기준 하는 내림정렬.
        });
        endGame();// todo. 게임종료 함수 만들기.
        alert("우승!" + winnerList[0].index + '번 물고기!');
    }
}
function endGame(){
    console.log("4. 게임 종료. 우리수업도 종료.");

}//? 게임 종료 함수.