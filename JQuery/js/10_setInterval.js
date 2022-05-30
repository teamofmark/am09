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
            $circle.css("left",xpos);

            // todo. 현재 xpos는 증가만하는데. 왕복운동을 만드려면 어찌해야 하는가?
            if(){
                
            }

        },0);
    });
}