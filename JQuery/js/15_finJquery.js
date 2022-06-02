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
    goalLine = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();
            displayFishPositionInfo();
        },200);
    }
}
function updateFishPosition(){ //? 물고기의 움직임을 반영해주는 함수.
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*10); //? 물고기 이동 범위 (10중 random, 올림한 정수값)
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
}
function displayFishPositionInfo(){
    var info = "";

    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
        // ? ex > 0번 물고기 : 10px(<br>)
    }
    $info.html(info);
}