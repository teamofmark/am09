$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;
    scoreCount(count,$score,$circle,playState);
});
function scoreCount(count,$score,$circle,playState){
    $circle.click(function(){
        if(playState == true){
            count ++;
            $score.text(count + "점"); //? text() -> 글자를 불러와. text('blabla') -> blabla글자로바꿔
        }
    });
    setTimeout(function(){ //? setInterval 과 유사 - 고정인자 2개 / 다른점 - 2번인자 시간이 경과될 경우 1번인자 함수를 한번만 실행
        alert('종료되었습니다.');
        playState = false;
    }, 5000);
}