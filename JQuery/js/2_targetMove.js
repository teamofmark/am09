$(document).ready(function(){
    // case.1 xAxis 원움직이기 (조건 : frame내에서)
    $("#btnMoveCircle").click(moveCircle);
});

function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){ //? 움직이는 조건 : xpos 0보다 크거나 같고 xpos 380보다 작거나 같을때
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}