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