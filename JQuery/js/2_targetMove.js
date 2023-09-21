$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
});
// *case. 1 원 움직이기 (xAxis)
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    // ?선언
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }

}