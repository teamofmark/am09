$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
         $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
    
}