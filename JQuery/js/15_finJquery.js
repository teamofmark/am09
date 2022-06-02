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
            checkGoalFish();
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
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            // ? 각 index마다 position 이라는 식별을 가진 값을 저장.
        }
    }
    if(winnerList.length > 0){ //? 배열의 길이가 0보다 클경우? -> 배열안에 값이 담겼을 때.
        winnerList.sort(function(a,b){
            return b.position - a.position; // ? position 값 기준 내림차순 정렬
            /*
                ! 배열.sort([compareFunction]);
                ! 매개변수 = compareFunction - 정렬순서 정의 함수. 생략시 오름 차순 처리.
                ?(문자열변환 후 유니코드값의 크기에 따라 정렬)
                ! 리턴값 = 정렬이 완료된 결과 값.
                ? 리턴 값 < 0 : a가 b보다 앞에
                ? 리턴 값 = 0 : a와 b순서 바꾸지 않음.
                ? 리턴 값 > 0 : b가 a보다 앞에
            */
        });
        endGame();
        alert('우승 ! ' + winnerList[0].index + '번 물고기');
    }
}
function endGame(){
    clearInterval(timerID); //? interval 초기화
    timerID = -1; //? timerID 초기화
}