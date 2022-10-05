var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(document).ready(function(){
    init(); //? 변수 선언 및 초기화
    fishStartPosition(); //? 초기배치함수
    initEvent(); //? 게임시작함수
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
            top : 100 + (i * 150) //? 기본 100이동 후 i*150만큼 가산.
        });
    }
}

function initEvent(){
    $("#start").click(startGame); //? 게임시작함수를 btn click에 물린다.
}

function startGame(){
    console.log("1.게임시작");
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); // ? 물고기움직임함수
            // ? displayFishPositionInfo();  물고기현위치출력함수
            // ? checkGoalFish();  물고기결승선감지함수
        },200);
    }
}

function updateFishPosition(){
    console.log("2. 움직인다. 물고기");
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? i번째 물고기
        var step = Math.ceil(Math.random()*10); //? 물고기 이동 범위(10중 random, 올림한정수값)
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
}

