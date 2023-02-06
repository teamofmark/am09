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