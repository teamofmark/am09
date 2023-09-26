var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;

$(document).ready(function(){
    init();
    scoreCount(count, $score, $circle, playState);
    // todo. resetBtn click시 restart 기능 가동. 
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){
        if(playState == true){
            count ++;
            $score.text(count + "점"); //? text()-> text만 가져오기, text("text") text를 text로 변경
        }
    });
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    },5000); //? 시간(m/s)경과시 실행.
}
// todo. restart 기능 만들어보기
function restart(){
    playState = true;
    count = 0;
    $score.text(count + "점");
    scoreCount(count, $score, $circle, playState);
}