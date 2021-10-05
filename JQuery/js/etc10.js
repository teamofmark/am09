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
            xpos += runStep;
            $circle.css('left',xpos);

            if(xpos > railWidth || xpos < 0){
                runStep *= -1;
            }
        },0);
    });
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
