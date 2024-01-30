var count = 0; //? 점수
var $score = null; //? 점수를 출력할 공간
var $circle = null; //? click 대상 (원)
var playState = true; //? 게임이 실행될 수 있는 조건
var $resetBtn = null; //? game reset 할 button.

$(document).ready(function(){
    init(); //? 선언함수
    scoreCount(count,$score,$circle,playState);
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count,$score,$circle,playState){
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count + "점");
            // ? 3. 점수를 올려주는 기능 -> 원을 click
        }// ? 2. 게임가능상태 판별
    });// ? 1. click -> 점수를 출력
    
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    },5000)
    // ? 4. 5초시간 경과시 게임불가상태 변환 -> 종료.

}
// todo 재시작 기능 만들기.
function restart(){

}