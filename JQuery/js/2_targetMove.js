$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    $("#btnDetailMove").click(detailMoveCircle);
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
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val(); //? .val() -> 현재담긴"값"을불러오기 / .val("blabla") -> 현재담긴값을 "blabla"로 바꿔라.
    var ypos = $("#ypos").val();
    // todo. 형변환 -> 조건처리 -> 움직임.
}