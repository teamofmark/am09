$(document).ready(function(){
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();
    var timerID = 0;

    startMove($circle, runStep, xpos, railWidth, timerID);
});
function startMove($circle, runStep, xpos, railWidth, timerID){
    $("#btn_start").click(function(){
        timerID = setInterval(function(){

        },0);
    });
}
