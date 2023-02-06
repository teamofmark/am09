var $fishList = null;
var $info = null;
var timerID = -1;
var goalLine = 0;
var $fishWidth = 0;

$(document).ready(function(){
    init();
    fishStartPosition();
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