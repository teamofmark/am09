var $fishList = null;
var $info = null;
var timerID = -1;
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
    goalLine = $("#bar").position().left - $fishWidth;
    console.log("1. 초기변수 설정 완료");
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
    console.log("2. 초기배치 완료");
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();
            displayFishPositionInfo();
            checkGoalFish();
        }, 200);
    }
}

function updateFishPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;
        $fish.css("left", newLeft);
    }
    console.log("3. 물고기 움직이는 중");
}

function displayFishPositionInfo(){
    var info = "";
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
    console.log("4. 물고기 움직임 출력중");
}

function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
        // ? goalLine을 넘은 물고기를 기준으로 winnerList 배열에 position이라는 식별자로 저장.
    }
    if(winnerList.length > 0){ //? 배열에 값이 발생 되었을 때
        winnerList.sort(function(a,b){
            return b.position-a.position; //? position 값 기준 내림차순
        });
        endGame();
        alert("우승 ! " + winnerList[0].index + '번 물고기!');
    }
    console.log("5. 우승 물고기 선별 완료");
}

function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("6. 게임 종료");
}