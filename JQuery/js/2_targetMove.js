$(document).ready(function(){
    // *case. 1
    $("#btnMoveCircle").click(moveCircle);
});
// *case. 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos<=380){
        $circle.css("left",xpos);
    }else{
        alert("하여간 말 참 안들어.");
    }
}