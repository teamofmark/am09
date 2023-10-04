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
            //? 움직인 물고기 위치 표시
            //? 결승선 도달 감지
        },200);
        console.log("3. 게임 정상 시작.");
    }
}
// ? 게임시작 함수
function updateFishPosition(){
    
}