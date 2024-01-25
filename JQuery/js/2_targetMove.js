$(document).ready(function(){
    // *case. 1 xAxis 원움직이기
    $("#btnMoveCircle").click(moveCircle);
});
function moveCircle(){
    // ? 선언
    var $circle = $(".circleWrap .circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요."); // * prompt로 숫자입력되면? -> string.

    // ? 처리
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
        // ? 출력
    }else{
        alert("잘못된 수치입니다.");
    }
}