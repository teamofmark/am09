/*
    1. "게임시작" message와 함께 강제시작.
    2. 시작된 이후 5초간 #circle click ->count 출력.(x점!)
    3. 5초후 "게임종료" message와 함께 종료.
    4. "reStart" click시 다시 1번부터 실행.
 */
var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;
// 변수를 몇개 만들어야 할지 모르겠다? = JQuery선택자로 작업해.
$(document).ready(function(){
    init();
    scoreCount(count, $score, $circle, playState);
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    alert("게임시작! 5초후 게임 종료!");
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count +"점");
        }
    });
    setTimeout(function(){
        alert("게임종료. 재시작을 원하시면 reStart button click!");
        playState = false;
    },5000); //? setTimeout([실행함수],[제한시간]); - 제한 시간 뒤 함수를 실행하라.
    // ex > 팝업을 띄우고 일정시간뒤 사라지게 하기. / 일정시간뒤 팝업을 띄우고 싶거나(message,banner,aside...)
}
function restart(){
    // todo 재시작 기능 만들어보기
}