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