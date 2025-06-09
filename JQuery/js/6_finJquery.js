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