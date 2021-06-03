var $fishList = null;
var $info = null;
var $fishWidth = 0;
var goalLine = 0;
var timerID = -1;

$(document).ready(function(){
    init();
    fishStartPosition();
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
}

function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left : 0,
            top: 100 + (i * 150)
        });
    }
}
// ?시작 위치 설정

function initEvent(){
    $("#start").click(function(){
        startGame();
    });
}
//? 이벤트처리 함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 물고기 계속움직이기
            displayFishPositionInfo(); //? 현재위치 찍어주기
            checkGoalFish(); //?결승선 판별
        }, 500);
    }
}
// ?게임시작 함수

function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        //?물고기 이동범위 (30중 random, 1부터 = ceil)
        var newLeft = $fish.position().left + step;

        $fish.css("left",newLeft);
    }
}
//? 물고기 계속움직이기

function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
}
//? 물고기 현재위치 찍어주기.

function checkGoalFish(){
    var winnerList = [];

    for (var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                //? goalLine을 넘은 물고기들을 winnerList 배열에 position 값저장.
                index: (i), position:fishCurrentPosition
                //? ex > 0 : 610, 1: 528, 2: 432
            });
        }
    }
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? 정렬 (순)
        });
        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기!');
        //? 결승선 기준 가장 멀리 이동된 물고기 우승 처리.
    }
}
// ? 결승선 통과 물고기 검사 함수.

function endGame(){
    clearInterval(timerID); //? interval 초기화.
    timerID = -1;
}
//? 게임종료 함수