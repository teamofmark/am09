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
            displayFishPositionInfo();  // ? 물고기현위치출력함수
            checkGoalFish();  // ? 물고기결승선감지함수
        },200);
    }
}

function updateFishPosition(){
    console.log("2. 움직인다. 물고기");
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? i번째 물고기
        var step = Math.ceil(Math.random()*50); //? 물고기 이동 범위(10중 random, 올림한정수값)
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
}

function displayFishPositionInfo(){
    console.log("3. 출력한다. 이동거리");
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px 만큼 이동 <br>";
    }

    $info.html(info);
}

function checkGoalFish(){
    var winnerList = [];
    /*
        ? css로 적용되는 위치 (left) = string. number가 아니기 때문에 크기 비교 불가.
        ? 숫자라 하더라도. 2마리 이상부터는 동시 비교 불가. / 단위포함 (px)이기 때문에 형변환 어려움.
        ! sort 함수를 이용하여 우선순위를 정렬. -> 실시간으로 바로 값 비교 (x) / 내가 정한 우선순위대로 배열화.
    */
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({ //? index(방번호).
                index: (i), position:fishCurrentPosition //? position labeling.
            });
        }
    }

    if(winnerList.length>0){ //? 배열에 값이 담기고 나면
        winnerList.sort(function(a,b){ //? default 오름차순
            return b.position - a.position; //? 내림차순 정렬.
        });
        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기!');
    }
}

function endGame(){
    console.log('4. 게임종료처리');
    clearInterval(timerID); //? setInterval 초기화
    timerID = -1; //? timerID 초기화
}