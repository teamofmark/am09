/*
    1. 게임시작을 누르면 원은 무작위 좌표로 움직임
    2. 원 클릭에 성공하면 점수가 올라가야함
    3. 특정시간 이후에는 종료메시지와 함께 동작 중지(클릭x,움직임x)
    4. 재시작이 가능하게 초기화 작업 필요
*/
var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}