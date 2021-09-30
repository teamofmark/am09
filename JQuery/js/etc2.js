$(document).ready(function(){
    moveCircle();
    detailMoveCircle();
});

function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert("잘못된 수치입니다.");
        }
    });
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        // ? xpos, ypos는 0보다 크거나 같고 380보다 작거나 같을때 구동하는 if. 그외 나머지 error
        // ? xpos, ypos는 0보다 작거나 380보다 클때 구동하는 if. 그외 나머지 실행.
        // todo.
        
    });
}